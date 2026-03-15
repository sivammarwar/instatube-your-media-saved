import { motion } from "framer-motion";
import type { Platform } from "./InputStage";
import type { VideoData } from "@/lib/api";

interface ResultsAreaProps {
  platform: Platform;
  videoData: VideoData;
  onDownload: (url: string, label: string) => void;
  onReset: () => void;
}

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

function formatSize(mb: number): string {
  if (!mb || mb === 0) return "";
  if (mb < 1) return `${(mb * 1024).toFixed(0)} KB`;
  return `${mb.toFixed(1)} MB`;
}

const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const AudioIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const ResultsArea = ({ videoData, onDownload, onReset }: ResultsAreaProps) => {
  const { videos, audios, thumbnail, title } = videoData;
  const allItems = [
    ...videos.map(v => ({ ...v, type: "video" as const })),
    ...audios.map(a => ({ ...a, type: "audio" as const })),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={transition}
      className="results-root"
    >
      {/* Thumbnail */}
      {thumbnail && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: 0.05 }}
          className="results-thumb-card"
        >
          <img src={thumbnail} alt={title || "Video thumbnail"} className="results-thumb-img" />
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
            const isAudio = item.type === "audio";
            const label = isAudio
              ? `Audio · ${item.format?.toUpperCase() || "MP3"}`
              : `${item.quality || item.format || "Video"}`;
            const size = formatSize(item.sizeMB);

            return (
              <motion.button
                key={`${item.type}-${item.quality}-${i}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition, delay: 0.08 + i * 0.06 }}
                onClick={() => onDownload(item.url, label)}
                className={`result-row ${isAudio ? "result-row-audio" : "result-row-video"}`}
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
                  <DownloadIcon />
                  <span>Download</span>
                </span>
              </motion.button>
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
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
        </svg>
        New Download
      </motion.button>
    </motion.div>
  );
};

export default ResultsArea;