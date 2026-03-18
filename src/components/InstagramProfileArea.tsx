import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import type {
  IgProfileData,
  IgMediaItem,
  IgVideoOption,
  IgImageOption,
  ProgressCallback,
} from "@/lib/api";
import { downloadInstagramMedia } from "@/lib/api";

// ─────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────
interface DownloadState {
  loading:   boolean;
  progress?: number;
  received?: number;
  total?:    number | null;
  phase?:    "preparing" | "downloading" | "saving";
  startedAt?: number;
  speedBps?:  number;
}

interface InstagramProfileAreaProps {
  profileData: IgProfileData;
  onReset:     () => void;
}

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

// ─────────────────────────────────────────────────────────
// Formatters
// ─────────────────────────────────────────────────────────
function formatBytes(bytes: number): string {
  if (bytes < 1024)        return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatSpeed(bps: number): string {
  if (bps <= 0)           return "";
  if (bps < 1024 * 1024)  return `${(bps / 1024).toFixed(0)} KB/s`;
  return `${(bps / (1024 * 1024)).toFixed(1)} MB/s`;
}

function formatSize(mb: number): string {
  if (!mb) return "";
  if (mb < 1) return `${(mb * 1024).toFixed(0)} KB`;
  return `${mb.toFixed(1)} MB`;
}

function formatDuration(secs: number): string {
  if (!secs) return "";
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatTimestamp(ts: string | null): string {
  if (!ts) return "";
  // Handle both unix timestamp numbers-as-string and date strings like "20240315"
  const n = Number(ts);
  if (!isNaN(n) && n > 1_000_000_000) {
    return new Date(n * 1000).toLocaleDateString();
  }
  // YYYYMMDD
  if (/^\d{8}$/.test(ts)) {
    return `${ts.slice(0, 4)}-${ts.slice(4, 6)}-${ts.slice(6, 8)}`;
  }
  return ts;
}

// ─────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────
const VideoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const ImageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const Spinner = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ animation: "spin 0.7s linear infinite" }}>
    <path d="M12 2a10 10 0 0 1 10 10"/>
  </svg>
);

// ─────────────────────────────────────────────────────────
// Mini progress bar for each download button
// ─────────────────────────────────────────────────────────
function MiniProgress({ state }: { state: DownloadState }) {
  const { progress, received, total, speedBps, phase } = state;
  const isIndeterminate = progress === undefined;
  const pct = Math.min(100, Math.max(0, progress ?? 0));
  const speed = speedBps ? formatSpeed(speedBps) : "";
  const sizeInfo =
    received != null && total
      ? `${formatBytes(received)} / ${formatBytes(total)}`
      : received != null && received > 0
      ? formatBytes(received)
      : "";
  const label =
    phase === "preparing" ? "Preparing…" :
    phase === "saving"    ? "Saving…"    : "Downloading…";

  return (
    <div className="ig-mini-progress">
      <div className="ig-mini-progress-row">
        <span className="ig-mini-phase">{label}</span>
        {speed && <span className="ig-mini-speed">{speed}</span>}
        {!isIndeterminate && <span className="ig-mini-pct">{pct}%</span>}
      </div>
      <div className="ig-mini-track" role="progressbar" aria-valuenow={isIndeterminate ? undefined : pct} aria-valuemin={0} aria-valuemax={100}>
        {isIndeterminate ? (
          <div className="ig-mini-indeterminate" />
        ) : (
          <motion.div
            className="ig-mini-fill"
            initial={{ width: "0%" }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        )}
      </div>
      {sizeInfo && <span className="ig-mini-size">{sizeInfo}</span>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Single media card
// ─────────────────────────────────────────────────────────
interface MediaCardProps {
  item:      IgMediaItem;
  itemIndex: number;
}

function MediaCard({ item, itemIndex }: MediaCardProps) {
  const [thumbError, setThumbError] = React.useState(false);
  const [expanded,   setExpanded]   = React.useState(false);
  const [dlState,    setDlState]    = React.useState<Record<string, DownloadState>>({});

  const patch = React.useCallback((key: string, update: Partial<DownloadState>) => {
    setDlState(prev => ({ ...prev, [key]: { ...(prev[key] ?? { loading: true }), ...update } }));
  }, []);

  const clearKey = React.useCallback((key: string, delay = 2500) => {
    setTimeout(() => setDlState(prev => { const s = { ...prev }; delete s[key]; return s; }), delay);
  }, []);

  const handleVideoDownload = React.useCallback(
    async (opt: IgVideoOption) => {
      const key = `v-${opt.url.slice(-24)}`;
      if (dlState[key]?.loading) return;

      const startedAt = Date.now();
      patch(key, { loading: true, phase: "preparing", startedAt, received: 0, total: null, speedBps: 0 });

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
        const progress = total && total > 0 ? Math.round((received / total) * 100) : undefined;
        patch(key, { phase: "downloading", received, total, progress, speedBps, startedAt });
      };

      try {
        const result = await downloadInstagramMedia({
          url:      opt.url,
          audioUrl: opt.audioUrl ?? undefined,
          title:    item.title || "instagram_video",
          type:     "video",
          onProgress,
        });

        if (result.success) {
          patch(key, { loading: false, phase: "saving", progress: 100 });
          clearKey(key);
        } else {
          setDlState(prev => { const s = { ...prev }; delete s[key]; return s; });
          alert(`Download failed: ${result.error || "Unknown error"}`);
        }
      } catch (err) {
        setDlState(prev => { const s = { ...prev }; delete s[key]; return s; });
        const msg = err instanceof Error ? err.message : "Unknown error";
        if (msg !== "Download cancelled.") alert(`Download failed: ${msg}`);
      }
    },
    [item.title, dlState, patch, clearKey],
  );

  const handleImageDownload = React.useCallback(
    async (img: IgImageOption, idx: number) => {
      const key = `i-${idx}-${img.url.slice(-20)}`;
      if (dlState[key]?.loading) return;

      const startedAt = Date.now();
      patch(key, { loading: true, phase: "preparing", startedAt, received: 0, total: null, speedBps: 0 });

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
        const progress = total && total > 0 ? Math.round((received / total) * 100) : undefined;
        patch(key, { phase: "downloading", received, total, progress, speedBps, startedAt });
      };

      try {
        const result = await downloadInstagramMedia({
          url:    img.url,
          title:  item.title || `instagram_image_${idx + 1}`,
          type:   "image",
          onProgress,
        });

        if (result.success) {
          patch(key, { loading: false, phase: "saving", progress: 100 });
          clearKey(key);
        } else {
          setDlState(prev => { const s = { ...prev }; delete s[key]; return s; });
          alert(`Download failed: ${result.error || "Unknown error"}`);
        }
      } catch (err) {
        setDlState(prev => { const s = { ...prev }; delete s[key]; return s; });
        const msg = err instanceof Error ? err.message : "Unknown error";
        if (msg !== "Download cancelled.") alert(`Download failed: ${msg}`);
      }
    },
    [item.title, dlState, patch, clearKey],
  );

  const hasMedia    = item.videos.length > 0 || item.images.length > 0 || !!item.directUrl;
  const mediaLabel  = item.mediaType === "story" ? "Story" : item.mediaType === "carousel" ? "Carousel" : "Post";
  const duration    = formatDuration(item.duration);
  const timestamp   = formatTimestamp(item.timestamp);

  return (
    <motion.div
      className="ig-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...transition, delay: 0.05 + itemIndex * 0.04 }}
    >
      {/* Thumbnail row */}
      <div className="ig-card-top">
        {item.thumbnail && !thumbError ? (
          <img
            src={item.thumbnail}
            alt={item.title || "Instagram media"}
            className="ig-card-thumb"
            onError={() => setThumbError(true)}
            loading="lazy"
          />
        ) : (
          <div className="ig-card-thumb ig-card-thumb-placeholder">
            {item.videos.length > 0 ? <VideoIcon /> : <ImageIcon />}
          </div>
        )}

        <div className="ig-card-meta">
          <div className="ig-card-badges">
            <span className="ig-badge ig-badge-type">{mediaLabel}</span>
            {duration && <span className="ig-badge ig-badge-dur">{duration}</span>}
            {item.hasAudio && <span className="ig-badge ig-badge-audio">Audio</span>}
          </div>

          <p className="ig-card-title" title={item.title}>{item.title || "Instagram media"}</p>

          {item.description && (
            <p className="ig-card-desc">{item.description.slice(0, 120)}{item.description.length > 120 ? "…" : ""}</p>
          )}

          <div className="ig-card-info-row">
            {item.uploader && <span className="ig-card-uploader">@{item.uploader}</span>}
            {timestamp     && <span className="ig-card-date">{timestamp}</span>}
          </div>
        </div>
      </div>

      {/* Expand/collapse toggle */}
      {hasMedia && (
        <button
          className="ig-card-toggle"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse download options" : "Show download options"}
        >
          <span>{expanded ? "Hide options" : `Download options`}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      )}

      {/* Download options */}
      <AnimatePresence>
        {expanded && hasMedia && (
          <motion.div
            className="ig-card-options"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            {/* Video options */}
            {item.videos.map((opt, vi) => {
              const key     = `v-${opt.url.slice(-24)}`;
              const state   = dlState[key] ?? { loading: false };
              const isLoad  = state.loading;
              const isDone  = !isLoad && state.phase === "saving";
              const sz      = formatSize(opt.sizeMB);
              const needsMerge = !!opt.audioUrl;

              return (
                <div key={key} className="ig-opt-row">
                  <button
                    className={`ig-opt-btn ${isLoad ? "ig-opt-btn-loading" : ""} ${isDone ? "ig-opt-btn-done" : ""}`}
                    onClick={() => handleVideoDownload(opt)}
                    disabled={isLoad}
                    aria-busy={isLoad}
                    aria-label={`Download video ${opt.quality}${sz ? ` (${sz})` : ""}`}
                  >
                    <span className="ig-opt-icon"><VideoIcon /></span>
                    <span className="ig-opt-label">
                      {opt.quality}
                      {needsMerge && <span className="ig-opt-merge-hint"> · merges audio</span>}
                    </span>
                    {sz && <span className="ig-opt-size">~{sz}</span>}
                    <span className="ig-opt-action">
                      {isLoad ? <Spinner /> : isDone ? <CheckIcon /> : <DownloadIcon />}
                      <span>{isLoad ? "…" : isDone ? "Saved!" : "Download"}</span>
                    </span>
                  </button>
                  {isLoad && <MiniProgress state={state} />}
                </div>
              );
            })}

            {/* Image options */}
            {item.images.map((img, ii) => {
              const key    = `i-${ii}-${img.url.slice(-20)}`;
              const state  = dlState[key] ?? { loading: false };
              const isLoad = state.loading;
              const isDone = !isLoad && state.phase === "saving";
              const sz     = formatSize(img.sizeMB);

              return (
                <div key={key} className="ig-opt-row">
                  <button
                    className={`ig-opt-btn ${isLoad ? "ig-opt-btn-loading" : ""} ${isDone ? "ig-opt-btn-done" : ""}`}
                    onClick={() => handleImageDownload(img, ii)}
                    disabled={isLoad}
                    aria-busy={isLoad}
                    aria-label={`Download image ${ii + 1} (${img.ext.toUpperCase()})${sz ? ` ~${sz}` : ""}`}
                  >
                    <span className="ig-opt-icon"><ImageIcon /></span>
                    <span className="ig-opt-label">
                      Image {item.images.length > 1 ? `#${ii + 1}` : ""} · {img.ext.toUpperCase()}
                    </span>
                    {sz && <span className="ig-opt-size">~{sz}</span>}
                    <span className="ig-opt-action">
                      {isLoad ? <Spinner /> : isDone ? <CheckIcon /> : <DownloadIcon />}
                      <span>{isLoad ? "…" : isDone ? "Saved!" : "Download"}</span>
                    </span>
                  </button>
                  {isLoad && <MiniProgress state={state} />}
                </div>
              );
            })}

            {/* Fallback: directUrl only */}
            {item.videos.length === 0 && item.images.length === 0 && item.directUrl && (
              <a
                href={item.directUrl}
                download
                className="ig-opt-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ig-opt-icon"><DownloadIcon /></span>
                <span className="ig-opt-label">Download media</span>
                <span className="ig-opt-action"><DownloadIcon /><span>Open</span></span>
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────
const InstagramProfileArea = ({ profileData, onReset }: InstagramProfileAreaProps) => {
  const { type, username, totalFound, items } = profileData;

  const typeLabel =
    type === "stories_batch" ? "Stories"    :
    type === "highlight"     ? "Highlight"  :
    type === "profile"       ? "Posts"      :
    type === "reel"          ? "Reel"       :
    type === "story"         ? "Story"      : "Post";

  return (
    <motion.div
      className="ig-profile-root"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={transition}
    >
      {/* Header */}
      <div className="ig-profile-header">
        <div className="ig-profile-meta">
          {username && <span className="ig-profile-username">@{username}</span>}
          <span className="ig-profile-count">
            {typeLabel} · {items.length}{totalFound > items.length ? ` of ${totalFound}` : ""} item{items.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Cards */}
      {items.length > 0 ? (
        <div className="ig-profile-grid">
          {items.map((item, i) => (
            <MediaCard key={item.id ?? `item-${i}`} item={item} itemIndex={i} />
          ))}
        </div>
      ) : (
        <p className="results-empty">// no media items found</p>
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
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
        </svg>
        New Download
      </motion.button>
    </motion.div>
  );
};

export default InstagramProfileArea;