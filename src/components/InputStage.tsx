import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Platform = "instagram" | "youtube" | null;

interface InputStageProps {
  onSubmit: (url: string, platform: Platform) => void;
  isLoading: boolean;
  error: string | null;
}

function detectPlatform(url: string): Platform {
  if (/instagram\.com\/(p|reel|stories)\//i.test(url)) return "instagram";
  if (/youtu\.be\/|youtube\.com\/watch/i.test(url)) return "youtube";
  return null;
}

const InputStage = ({ onSubmit, isLoading, error }: InputStageProps) => {
  const [url, setUrl] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      const platform = detectPlatform(text);
      if (platform) onSubmit(text, platform);
    } catch {
      inputRef.current?.focus();
    }
  };

  const handleSubmit = () => {
    if (!url.trim()) return;
    const platform = detectPlatform(url);
    if (!platform) {
      setShaking(true);
      setTimeout(() => setShaking(false), 450);
      return;
    }
    onSubmit(url, platform);
  };

  return (
    <div className="input-stage-root">
      <motion.div
        className={`input-shell ${isFocused ? "input-shell-focused" : ""} ${shaking ? "animate-shake" : ""}`}
        layout
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {isLoading && (
          <div className="input-progress-track" role="progressbar" aria-label="Loading video data">
            <div className="input-progress-bar" />
          </div>
        )}

        <div className="input-row">
          {/* Leading icon — decorative only */}
          <div className="input-leading-icon" aria-hidden="true">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </div>

          <input
            ref={inputRef}
            id="video-url-input"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="https://youtube.com/watch?v=... or instagram.com/reel/..."
            disabled={isLoading}
            className="input-field"
            aria-label="Paste your YouTube or Instagram video URL here"
            aria-describedby={error ? "input-error-msg" : "input-hint-msg"}
            aria-invalid={!!error}
            autoComplete="url"
            spellCheck={false}
          />

          <div className="input-actions">
            {/* FIX: aria-label added — this was the failing audit */}
            <button
              onClick={handlePaste}
              disabled={isLoading}
              className="btn-paste"
              aria-label="Paste URL from clipboard"
              type="button"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="8" height="4" x="8" y="2" rx="1"/>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              </svg>
              <span>Paste</span>
            </button>

            <AnimatePresence>
              {url.trim() && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.85, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: "auto" }}
                  exit={{ opacity: 0, scale: 0.85, width: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="btn-fetch"
                  aria-label={isLoading ? "Fetching video, please wait" : "Fetch video download links"}
                  aria-busy={isLoading}
                  type="button"
                >
                  <span>{isLoading ? "Loading…" : "Fetch"}</span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Hint text — referenced by aria-describedby on the input */}
      <AnimatePresence>
        {!error && !isLoading && !url && (
          <motion.p
            id="input-hint-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="input-hint"
          >
            ↑ paste link above · supports public videos, reels &amp; posts
          </motion.p>
        )}
      </AnimatePresence>

      {/* Error — role="alert" announces immediately to screen readers */}
      <AnimatePresence>
        {error && (
          <motion.div
            id="input-error-msg"
            role="alert"
            aria-live="assertive"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
            className="input-error"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InputStage;
export { detectPlatform };
export type { Platform };