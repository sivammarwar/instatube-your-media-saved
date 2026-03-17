import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import type { Platform } from "./InputStage";
import type { VideoData, VideoResource, ProgressCallback } from "@/lib/api";
import { downloadVideoWithAudio, downloadDirect } from "@/lib/api";

// ─────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────
interface DownloadState {
  loading:    boolean;
  progress?:  number;        // 0–100, undefined = indeterminate
  received?:  number;        // bytes received so far
  total?:     number | null; // total bytes (null = unknown / chunked)
  phase?:     "preparing" | "downloading" | "saving";
  startedAt?: number;
  speedBps?:  number;        // rolling bytes/sec
}

interface ResultsAreaProps {
  platform:    Platform;
  videoData:   VideoData;
  onDownload?: (item: VideoResource & { type: "video" | "audio" }, label: string) => void;
  onReset:     () => void;
  downloading?: Record<string, DownloadState | boolean>;
  pageUrl:     string;
}

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

// ─────────────────────────────────────────────────────────
// Formatters
// ─────────────────────────────────────────────────────────
function formatSize(mb: number): string {
  if (!mb || mb === 0) return "";
  if (mb < 1) return `${(mb * 1024).toFixed(0)} KB`;
  return `${mb.toFixed(1)} MB`;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024)          return `${bytes} B`;
  if (bytes < 1024 * 1024)   return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatSpeed(bps: number): string {
  if (bps <= 0)              return "";
  if (bps < 1024 * 1024)    return `${(bps / 1024).toFixed(0)} KB/s`;
  return `${(bps / (1024 * 1024)).toFixed(1)} MB/s`;
}

function formatEta(received: number, total: number, startedAt: number): string {
  const elapsed = (Date.now() - startedAt) / 1000;
  if (elapsed < 1 || received <= 0) return "";
  const rate      = received / elapsed;
  const remaining = (total - received) / rate;
  if (!isFinite(remaining) || remaining <= 0) return "";
  if (remaining < 5)  return "< 5s";
  if (remaining < 60) return `~${Math.round(remaining)}s`;
  const m = Math.floor(remaining / 60);
  const s = Math.round(remaining % 60);
  return `~${m}m ${s}s`;
}

// ─────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────
const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const AudioIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const Spinner = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ animation: "spin 0.7s linear infinite" }}>
    <path d="M12 2a10 10 0 0 1 10 10"/>
  </svg>
);

// ─────────────────────────────────────────────────────────
// Progress Bar — shows real bytes, speed, ETA
// ─────────────────────────────────────────────────────────
interface ProgressBarProps {
  state:   DownloadState;
  isAudio: boolean;
}

function ProgressBar({ state, isAudio }: ProgressBarProps) {
  const { progress, received, total, phase, startedAt, speedBps } = state;
  const isIndeterminate = progress === undefined;
  const pct = Math.min(100, Math.max(0, progress ?? 0));

  const phaseLabel =
    phase === "preparing"   ? "Preparing…"   :
    phase === "downloading" ? "Downloading…" :
    phase === "saving"      ? "Saving…"      : "Downloading…";

  const eta      = (total && received && startedAt && !isIndeterminate)
                   ? formatEta(received, total, startedAt) : "";
  const speed    = speedBps ? formatSpeed(speedBps) : "";
  const sizeInfo = (received != null && total)
                   ? `${formatBytes(received)} / ${formatBytes(total)}`
                   : (received != null && received > 0)
                   ? formatBytes(received)
                   : "";

  return (
    <div className="dl-progress-wrap" aria-label={`${phaseLabel} ${isIndeterminate ? "" : `${pct}%`}`}>

      {/* Top row: phase label + speed + ETA + % */}
      <div className="dl-progress-header">
        <span className="dl-progress-phase">{phaseLabel}</span>
        <span className="dl-progress-right">
          {speed && <span className="dl-progress-speed">{speed}</span>}
          {eta   && <span className="dl-progress-eta">{eta}</span>}
          {!isIndeterminate && <span className="dl-progress-pct">{pct}%</span>}
        </span>
      </div>

      {/* Track */}
      <div
        className="dl-progress-track"
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {isIndeterminate ? (
          <div className={`dl-progress-indeterminate ${isAudio ? "dl-prog-audio" : "dl-prog-video"}`} />
        ) : (
          <motion.div
            className={`dl-progress-fill ${isAudio ? "dl-prog-audio" : "dl-prog-video"}`}
            initial={{ width: "0%" }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        )}
      </div>

      {/* Bottom row: bytes received / total */}
      {sizeInfo && (
        <div className="dl-progress-size-row">
          <span className="dl-progress-size-info">{sizeInfo}</span>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────
const ResultsArea = ({
  platform,
  videoData,
  onReset,
  pageUrl,
}: ResultsAreaProps) => {
  const { videos, audios, thumbnail, title } = videoData;
  const [thumbError,       setThumbError]       = React.useState(false);
  const [downloadingState, setDownloadingState] = React.useState<Record<string, DownloadState>>({});

  React.useEffect(() => {
    if (!pageUrl) console.warn('[ResultsArea] ⚠️ pageUrl is empty!');
  }, [pageUrl]);

  const allItems: Array<VideoResource & { type: "video" | "audio"; _key: string; _index: number }> = [
    ...videos.map((v, i) => ({ ...v, type: "video" as const, _key: `video-${v.quality || v.format || i}-${i}`, _index: i })),
    ...audios.map((a, i) => ({ ...a, type: "audio" as const, _key: `audio-${a.quality || a.format || i}-${i}`, _index: videos.length + i })),
  ];

  // Stable patch helper — avoids replacing full state on each byte
  const patch = React.useCallback((key: string, update: Partial<DownloadState>) => {
    setDownloadingState(prev => ({
      ...prev,
      [key]: { ...(prev[key] ?? { loading: true }), ...update },
    }));
  }, []);

  const clearKey = React.useCallback((key: string) => {
    setDownloadingState(prev => { const s = { ...prev }; delete s[key]; return s; });
  }, []);

  // ── handleDownload ──────────────────────────────────────
  const handleDownload = React.useCallback(
    async (item: VideoResource & { type: "video" | "audio"; _key: string }, label: string) => {
      const key = item._key;
      if (downloadingState[key]?.loading) return;
      if (!pageUrl) { alert('Download failed: Page URL is missing. Please go back and try again.'); return; }

      const startedAt = Date.now();
      patch(key, { loading: true, phase: "preparing", progress: undefined, startedAt, received: 0, total: null, speedBps: 0 });

      // Rolling speed window
      let lastBytes = 0;
      let lastTime  = startedAt;

      const onProgress: ProgressCallback = (received, total) => {
        const now     = Date.now();
        const elapsed = (now - lastTime) / 1000;
        let speedBps  = 0;
        if (elapsed > 0.15) {
          speedBps  = Math.round((received - lastBytes) / elapsed);
          lastBytes = received;
          lastTime  = now;
        }
        const progress = (total && total > 0) ? Math.round((received / total) * 100) : undefined;
        patch(key, { phase: "downloading", received, total, progress, speedBps, startedAt });
      };

      try {
        let result: { success: boolean; error?: string };

        if (item.type === "audio") {
          result = await downloadDirect(pageUrl, title || "audio", undefined, "audio", onProgress);

        } else {
          const matchingAudio = audios.length > 0 ? audios[0] : null;

          if (matchingAudio?.url && item.url) {
            // Method A — ffmpeg streams directly, Content-Length unknown → indeterminate bar
            // but bytes still accumulate so user sees live KB counter
            result = await downloadVideoWithAudio(
              item.url, matchingAudio.url, title || "video",
              platform ?? undefined, onProgress
            );
          } else {
            // Method B — yt-dlp, Content-Length known → real % bar
            const quality = item.quality?.replace('p', '') || undefined;
            result = await downloadDirect(pageUrl, title || "video", quality, "video", onProgress);
          }
        }

        if (result.success) {
          patch(key, { loading: false, phase: "saving", progress: 100 });
          setTimeout(() => clearKey(key), 2500);
        } else {
          clearKey(key);
          alert(`Download failed: ${result.error || 'Unknown error'}`);
        }

      } catch (err) {
        clearKey(key);
        const msg = err instanceof Error ? err.message : 'Unknown error';
        if (msg !== 'Download cancelled.') alert(`Download failed: ${msg}`);
      }
    },
    [pageUrl, title, audios, platform, downloadingState, patch, clearKey]
  );

  function getState(key: string): DownloadState {
    return downloadingState[key] ?? { loading: false };
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
      transition={transition} className="results-root"
    >
      {/* Thumbnail */}
      {thumbnail && !thumbError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: 0.05 }} className="results-thumb-card"
        >
          <img
            src={thumbnail}
            alt={title ? `Thumbnail for ${title}` : "Video thumbnail"}
            className="results-thumb-img"
            loading="lazy"
            onError={() => setThumbError(true)}
          />
          {title && (
            <div className="results-thumb-overlay">
              <p className="results-thumb-title">{title}</p>
            </div>
          )}
        </motion.div>
      )}

      {/* Divider */}
      <div className="results-section-label">
        <span className="results-section-line" />
        <span className="results-section-text">
          {allItems.length} format{allItems.length !== 1 ? "s" : ""} available
        </span>
        <span className="results-section-line" />
      </div>

      {/* Format rows */}
      {allItems.length > 0 ? (
        <div className="results-list">
          {allItems.map((item) => {
            const isAudio   = item.type === "audio";
            const state     = getState(item._key);
            const isLoading = state.loading;
            const isDone    = !isLoading && state.phase === "saving";
            const label     = isAudio ? `Audio · ${item.format?.toUpperCase() || "MP3"}` : `${item.quality || item.format || "Video"}`;
            const size      = formatSize(item.sizeMB ?? 0);

            return (
              <motion.div
                key={item._key}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 0.08 + item._index * 0.06 }}
                className={`result-row ${isAudio ? "result-row-audio" : "result-row-video"} ${isLoading ? "result-row-loading" : ""}`}
              >
                <button
                  onClick={() => handleDownload(item, label)}
                  disabled={isLoading}
                  aria-busy={isLoading}
                  aria-label={isLoading ? `Downloading ${label}…` : `Download ${label}${size ? ` (${size})` : ""}`}
                  className="result-row-btn"
                >
                  <div className="result-row-left">
                    <span className={`result-row-icon ${isAudio ? "icon-audio" : "icon-video"}`}>
                      {isAudio ? <AudioIcon /> : <VideoIcon />}
                    </span>
                    <div className="result-row-info">
                      <span className="result-row-label">{label}</span>
                      {size && <span className="result-row-size">~{size}</span>}
                    </div>
                  </div>

                  <span className={`result-row-dl ${isLoading ? "result-row-dl-loading" : ""} ${isDone ? "result-row-dl-done" : ""}`}>
                    {isLoading ? (
                      <><Spinner /><span>Downloading…</span></>
                    ) : isDone ? (
                      <><CheckIcon /><span>Saved!</span></>
                    ) : (
                      <><DownloadIcon /><span>Download</span></>
                    )}
                  </span>
                </button>

                {/* Live progress bar */}
                <AnimatePresence>
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ overflow: "hidden" }}
                    >
                      <ProgressBar state={state} isAudio={isAudio} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <p className="results-empty">// no downloadable resources found</p>
      )}

      {/* Reset */}
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        onClick={onReset} className="results-reset" aria-label="Start a new download"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
        </svg>
        New Download
      </motion.button>
    </motion.div>
  );
};

export default ResultsArea;