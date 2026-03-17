import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import type { Platform } from "./InputStage";
import type { VideoData, VideoResource } from "@/lib/api";
import { downloadVideoWithAudio, downloadDirect } from "@/lib/api";

interface DownloadState {
  loading: boolean;
  /** 0–100, undefined = indeterminate */
  progress?: number;
  phase?: "preparing" | "merging" | "saving";
}

interface ResultsAreaProps {
  platform: Platform;
  videoData: VideoData;
  onDownload: (item: VideoResource & { type: "video" | "audio" }, label: string) => void;
  onReset: () => void;
  /** key = item.url → download state for that button */
  downloading?: Record<string, DownloadState | boolean>;
  pageUrl?: string; // Original page URL for fallback downloads
}

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

function formatSize(mb: number): string {
  if (!mb || mb === 0) return "";
  if (mb < 1) return `${(mb * 1024).toFixed(0)} KB`;
  return `${mb.toFixed(1)} MB`;
}

// ── Icons ──────────────────────────────────────────────────────────────────
const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const AudioIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const Spinner = () => (
  <svg
    width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    aria-hidden="true"
    style={{ animation: "spin 0.7s linear infinite" }}
  >
    <path d="M12 2a10 10 0 0 1 10 10"/>
  </svg>
);

// ── Phase labels ───────────────────────────────────────────────────────────
const PHASE_LABELS: Record<string, string> = {
  preparing: "Preparing…",
  merging:   "Merging…",
  saving:    "Saving…",
};

// ── Download Progress Bar ──────────────────────────────────────────────────
interface ProgressBarProps {
  progress?: number;        // 0–100; undefined = animated pulse
  phase?: string;
  isAudio: boolean;
}

function ProgressBar({ progress, phase, isAudio }: ProgressBarProps) {
  const isIndeterminate = progress === undefined;
  const pct = Math.min(100, Math.max(0, progress ?? 0));
  const phaseLabel = phase ? PHASE_LABELS[phase] ?? "Downloading…" : "Downloading…";

  return (
    <div className="dl-progress-wrap" aria-label={`Download progress: ${isIndeterminate ? phaseLabel : `${pct}%`}`}>
      {/* Phase label + percentage */}
      <div className="dl-progress-header">
        <span className="dl-progress-phase">{phaseLabel}</span>
        {!isIndeterminate && (
          <span className="dl-progress-pct">{pct}%</span>
        )}
      </div>

      {/* Track */}
      <div className="dl-progress-track" role="progressbar" aria-valuenow={isIndeterminate ? undefined : pct} aria-valuemin={0} aria-valuemax={100}>
        {isIndeterminate ? (
          // Indeterminate — animated shimmer sweep
          <div className={`dl-progress-indeterminate ${isAudio ? "dl-prog-audio" : "dl-prog-video"}`} />
        ) : (
          // Determinate — fills to pct%
          <motion.div
            className={`dl-progress-fill ${isAudio ? "dl-prog-audio" : "dl-prog-video"}`}
            initial={{ width: "0%" }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
const ResultsArea = ({
  videoData,
  onReset,
  pageUrl = "",
  downloading = {},
}: ResultsAreaProps) => {
  const { videos, audios, thumbnail, title } = videoData;
  const [thumbError, setThumbError] = React.useState(false);
  const [thumbLoaded, setThumbLoaded] = React.useState(false);
  const [downloadingState, setDownloadingState] = React.useState<Record<string, DownloadState>>(downloading || {});

  const allItems: Array<VideoResource & { type: "video" | "audio" }> = [
    ...videos.map(v => ({ ...v, type: "video" as const })),
    ...audios.map(a => ({ ...a, type: "audio" as const })),
  ];

  // Handle download with proper audio+video merge logic
  const handleDownload = React.useCallback(
    async (item: VideoResource & { type: "video" | "audio" }, label: string) => {
      const key = item.url;
      
      // Mark as loading
      setDownloadingState(prev => ({
        ...prev,
        [key]: { loading: true, phase: "preparing", progress: undefined }
      }));

      try {
        let result;

        if (item.type === "audio") {
          // Audio: use direct download
          console.log('[ResultsArea] Downloading audio:', label);
          result = await downloadDirect(pageUrl, title || "audio", undefined, "audio");
        } else {
          // Video: Try to find matching audio and use fast merge (Method A)
          const matchingAudio = audios.length > 0 ? audios[0] : null;

          if (matchingAudio && item.url && matchingAudio.url) {
            // Has both video and audio → use fast merge (stream copy)
            console.log('[ResultsArea] Downloading video+audio (fast merge):', label);
            setDownloadingState(prev => ({
              ...prev,
              [key]: { loading: true, phase: "merging", progress: undefined }
            }));
            result = await downloadVideoWithAudio(item.url, matchingAudio.url, title || "video", "youtube");
          } else {
            // Fallback: use yt-dlp direct download (handles muxing internally)
            console.log('[ResultsArea] Downloading video via yt-dlp (fallback):', label);
            const quality = item.quality?.replace('p', '') || undefined;
            result = await downloadDirect(pageUrl, title || "video", quality, "video");
          }
        }

        if (result.success) {
          // Mark as complete
          setDownloadingState(prev => ({
            ...prev,
            [key]: { loading: false, phase: "saving", progress: 100 }
          }));
          
          // Keep success state for 2 seconds then clear
          setTimeout(() => {
            setDownloadingState(prev => {
              const newState = { ...prev };
              delete newState[key];
              return newState;
            });
          }, 2000);
        } else {
          console.error('[ResultsArea] Download failed:', result.error);
          setDownloadingState(prev => {
            const newState = { ...prev };
            delete newState[key];
            return newState;
          });
          alert(`Download failed: ${result.error || 'Unknown error'}`);
        }
      } catch (err) {
        console.error('[ResultsArea] Download error:', err);
        setDownloadingState(prev => {
          const newState = { ...prev };
          delete newState[key];
          return newState;
        });
        alert(`Download failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
    },
    [pageUrl, title, audios]
  );

  // Normalise the downloading value for a given key to a DownloadState
  function getState(key: string): DownloadState {
    const raw = downloadingState[key];
    if (!raw) return { loading: false };
    return raw;
  }

  // Show thumbnail if available and not errored
  const shouldShowThumbnail = thumbnail && !thumbError;

  // Log thumbnail info for debugging
  React.useEffect(() => {
    if (thumbnail) {
      console.log('[ResultsArea] Thumbnail URL:', thumbnail.slice(0, 100) + '...');
      console.log('[ResultsArea] Thumbnail Error:', thumbError);
      console.log('[ResultsArea] Thumbnail Loaded:', thumbLoaded);
    }
  }, [thumbnail, thumbError, thumbLoaded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={transition}
      className="results-root"
    >
      {/* Thumbnail */}
      {shouldShowThumbnail && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: 0.05 }}
          className="results-thumb-card"
        >
          <img
            src={thumbnail}
            alt={title ? `Thumbnail for ${title}` : "Video thumbnail"}
            className="results-thumb-img"
            loading="lazy"
            onLoad={() => {
              console.log('[ResultsArea] ✅ Thumbnail loaded successfully');
              setThumbLoaded(true);
            }}
            onError={(e) => {
              console.error('[ResultsArea] ❌ Thumbnail failed to load from URL:', thumbnail);
              console.error('[ResultsArea] Error event:', e);
              setThumbError(true);
            }}
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
          {allItems.map((item, i) => {
            const isAudio  = item.type === "audio";
            const state    = getState(item.url);
            const isLoading = state.loading;
            const isDone   = !isLoading && state.phase === "saving";

            const label = isAudio
              ? `Audio · ${item.format?.toUpperCase() || "MP3"}`
              : `${item.quality || item.format || "Video"}`;
            const size = formatSize(item.sizeMB ?? 0);

            return (
              <motion.div
                key={`${item.type}-${item.quality}-${i}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 0.08 + i * 0.06 }}
                className={`result-row ${isAudio ? "result-row-audio" : "result-row-video"} ${isLoading ? "result-row-loading" : ""}`}
              >
                {/* Main clickable row */}
                <button
                  onClick={() => handleDownload(item, label)}
                  disabled={isLoading}
                  aria-busy={isLoading}
                  aria-label={
                    isLoading
                      ? `Downloading ${label}…`
                      : `Download ${label}${size ? ` (${size})` : ""}`
                  }
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

                  <span className="result-row-dl">
                    {isLoading ? (
                      <><Spinner /><span>Downloading…</span></>
                    ) : isDone ? (
                      <><CheckIcon /><span>Saved!</span></>
                    ) : (
                      <><DownloadIcon /><span>Download</span></>
                    )}
                  </span>
                </button>

                {/* Progress bar — shown while loading */}
                <AnimatePresence>
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden" }}
                    >
                      <ProgressBar
                        progress={state.progress}
                        phase={state.phase}
                        isAudio={isAudio}
                      />
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={onReset}
        className="results-reset"
        aria-label="Start a new download"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
        </svg>
        New Download
      </motion.button>
    </motion.div>
  );
};

export default ResultsArea;