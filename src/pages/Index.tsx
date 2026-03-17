import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import ResultsArea from "@/components/ResultsArea";
import {
  fetchVideoData,
  downloadDirect,
  downloadVideoWithAudio,
  type VideoData,
  type VideoResource,
} from "@/lib/api";
import { toast } from "sonner";

type AppState = "idle" | "loading" | "results";

type FetchedVideo = {
  pageUrl: string;
  data: VideoData;
};

// Per-button download state — passed to ResultsArea
export interface DownloadState {
  loading: boolean;
  progress?: number;   // 0–100; undefined = indeterminate
  phase?: "preparing" | "merging" | "saving";
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I download Instagram Reels for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Copy the Instagram Reel URL, paste it into the FreeReelsDownloader input box, and click Fetch. Your download links will appear instantly. No login or account required."
      }
    },
    {
      "@type": "Question",
      "name": "How do I download YouTube videos online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Copy the YouTube video URL, paste it into our free YouTube video downloader, and choose your preferred quality (up to 4K). The download starts immediately with no watermark."
      }
    },
    {
      "@type": "Question",
      "name": "Is this Instagram and YouTube video downloader free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, FreeReelsDownloader is completely free to use. There are no hidden charges, no subscription, and no login required."
      }
    },
    {
      "@type": "Question",
      "name": "What video formats and qualities are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support MP4 video downloads up to 4K quality and MP3 audio extraction for YouTube videos. For Instagram, we support Reels, Stories, Posts, and IGTV in HD quality."
      }
    },
    {
      "@type": "Question",
      "name": "Can I download Instagram Reels without watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Instagram Reels downloaded through FreeReelsDownloader are watermark-free. The video is saved exactly as the original public post."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to use this video downloader?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We do not store any video data or personal information on our servers. All downloads stream directly to your device. We also do not require any account or login."
      }
    }
  ]
};

/* ── Particle canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#00f5ff", "#b44dff", "#ffb830", "#ffffff"];
    const particles = Array.from({ length: 120 }, () => ({
      x:     Math.random() * window.innerWidth,
      y:     Math.random() * window.innerHeight,
      r:     Math.random() * 1.5 + 0.3,
      vx:    (Math.random() - 0.5) * 0.3,
      vy:    (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.6 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = (1 - dist / 100) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" />;
}

/* ── 3D tilt on mouse move ── */
function useTilt(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(1000px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg)`;
    };
    const onLeave = () => {
      el.style.transform  = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
      el.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
    };
    const onEnter = () => {
      el.style.transition = "transform 0.1s ease-out";
    };
    el.addEventListener("mousemove",  onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseenter", onEnter);
    return () => {
      el.removeEventListener("mousemove",  onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseenter", onEnter);
    };
  }, [ref]);
}

// ── Progress simulation ──────────────────────────────────────────────────────
// Since the backend streams a binary file with a known Content-Length we can
// track real XHR progress. For /api/download-direct there is no streaming, so
// we simulate progress instead. This hook wires both together cleanly.

type ProgressUpdater = (state: Partial<DownloadState>) => void;

/**
 * Simulate indeterminate → determinate progress for a long-running task.
 * Returns a cleanup function that stops the simulation.
 *
 * Phases:
 *   0–20%  : "preparing" (fast, ~1 s)
 *   20–80% : "merging"   (slow, ~duration ms)
 *   80–99% : "saving"    (held until resolve)
 *   100%   : set externally after the fetch resolves
 */
function simulateProgress(update: ProgressUpdater, durationMs = 25000): () => void {
  let raf: number;
  const start = Date.now();

  const PHASES = [
    { until: 20,  phase: "preparing" as const, speed: 20  },   // 0–20  in ~1 s
    { until: 80,  phase: "merging"   as const, speed: 60  },   // 20–80 in ~durationMs
    { until: 99,  phase: "saving"    as const, speed: 19  },   // 80–99 in ~1 s
  ];

  function tick() {
    const elapsed = Date.now() - start;
    // Map elapsed → progress using an eased curve
    // 0–3 s = 0–20%, 3–(duration+3) s = 20–80%, then slow crawl to 99%
    let pct: number;
    let phase: DownloadState["phase"];

    if (elapsed < 1000) {
      pct   = (elapsed / 1000) * 20;
      phase = "preparing";
    } else if (elapsed < durationMs) {
      pct   = 20 + ((elapsed - 1000) / (durationMs - 1000)) * 60;
      phase = "merging";
    } else {
      // Crawl asymptotically toward 99
      const extra = elapsed - durationMs;
      pct   = Math.min(99, 80 + (extra / 3000) * 19);
      phase = "saving";
    }

    update({ progress: Math.round(pct), phase });
    raf = requestAnimationFrame(tick);
  }

  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

export default function Index() {
  const [appState,  setAppState]  = useState<AppState>("idle");
  const [platform,  setPlatform]  = useState<Platform>(null);
  const [error,     setError]     = useState<string | null>(null);
  const [fetched,   setFetched]   = useState<FetchedVideo | null>(null);

  // Keyed by item.url — supports DownloadState for the progress bar
  const [downloading, setDownloading] = useState<Record<string, DownloadState>>({});

  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(FAQ_SCHEMA);
    script.id   = "faq-schema";
    if (!document.getElementById("faq-schema")) document.head.appendChild(script);
    return () => {
      const el = document.getElementById("faq-schema");
      if (el) document.head.removeChild(el);
    };
  }, []);

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) {
      setError("Check your link — we support Instagram and YouTube.");
      return;
    }
    setPlatform(detectedPlatform);
    setAppState("loading");
    setFetched(null);
    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) {
        setError(result.error || "Could not fetch video. Please check the link.");
        setAppState("idle");
        return;
      }
      setFetched({ pageUrl: url, data: result.data });
      setAppState("results");
    } catch {
      setError("Something went wrong. Please try again.");
      setAppState("idle");
    }
  };

  // ── Download handler with progress tracking ──────────────────────────────
  const handleDownload = async (
    item: VideoResource & { type: "video" | "audio" },
    label: string,
  ) => {
    const key = item.url;
    if (downloading[key]?.loading) return;
    if (!fetched) return;

    // Helper to patch state for this key only
    const patchState = (patch: Partial<DownloadState>) =>
      setDownloading(prev => ({
        ...prev,
        [key]: { ...(prev[key] ?? { loading: true }), ...patch },
      }));

    // Start — indeterminate until first progress tick
    patchState({ loading: true, progress: undefined, phase: "preparing" });

    const title   = fetched.data.title || "video";
    const pageUrl = fetched.pageUrl;

    const toastStyle = {
      background: "rgba(6,8,16,0.95)",
      border:     "1px solid rgba(0,245,255,0.2)",
      color:      "#eef2ff",
    };
    const toastErrorStyle = {
      background: "rgba(40,10,10,0.95)",
      border:     "1px solid rgba(255,60,60,0.3)",
      color:      "#fca5a5",
    };

    toast.loading(
      item.type === "video" ? "Preparing download…" : "Preparing audio…",
      { id: key, description: label, style: toastStyle },
    );

    // Start progress simulation (25 s expected merge time; adjust if needed)
    const stopProgress = simulateProgress(patchState, 25000);

    let result: { success: boolean; error?: string };

    try {
      if (item.type === "audio") {
        result = await downloadDirect(pageUrl, title, undefined, "audio");
      } else {
        const qualityHeight = item.quality?.replace(/[^0-9]/g, "") || undefined;

        // Method 1: yt-dlp re-fetches + merges server-side
        result = await downloadDirect(pageUrl, title, qualityHeight, "video");

        // Method 2 fallback: pre-resolved CDN stream merge
        if (!result.success && fetched.data.audios.length > 0) {
          console.warn("[download] downloadDirect failed, falling back to stream merge:", result.error);
          toast.loading("Retrying with stream merge…", { id: key, description: label, style: toastStyle });
          patchState({ phase: "merging", progress: undefined });

          const bestAudio = fetched.data.audios[0];
          result = await downloadVideoWithAudio(item.url, bestAudio.url, title, platform ?? undefined);
        }
      }
    } finally {
      stopProgress();
    }

    if (result.success) {
      // Jump to 100% briefly before clearing
      patchState({ loading: false, progress: 100, phase: "saving" });
      toast.success("Download started", {
        id:          key,
        description: `Saving: ${title.slice(0, 40)}`,
        style:       toastStyle,
      });
      // Clear progress after a short delay so the user sees the complete bar
      setTimeout(() => {
        setDownloading(prev => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
      }, 1800);
    } else {
      patchState({ loading: false, progress: undefined, phase: undefined });
      toast.error("Download failed", {
        id:          key,
        description: result.error || "Please try again.",
        style:       toastErrorStyle,
      });
    }
  };

  const handleReset = () => {
    setAppState("idle");
    setPlatform(null);
    setError(null);
    setFetched(null);
    setDownloading({});
  };

  return (
    <div className="page-root">
      <ParticleCanvas />
      <div className="light-shaft shaft-1" />
      <div className="light-shaft shaft-2" />
      <div className="light-shaft shaft-3" />

      <main className="page-main">
        <header className="header-area">
          <div className="logo-orb">
            <div className="logo-orb-inner">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
          </div>

          <h1 className="logo-text">ReelVideoDownloader</h1>
          <p className="logo-sub">Free Instagram &amp; YouTube Video Downloader · v2.0</p>

          <AnimatePresence mode="wait">
            <motion.p
              key={appState}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="header-tagline"
            >
              {appState === "idle"    && "Download Instagram Reels and YouTube videos free — no login, no watermark, up to 4K quality."}
              {appState === "loading" && "Fetching your video download links…"}
              {appState === "results" && (fetched?.data.title || "Your video is ready to download.")}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence>
            {appState === "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.12 }}
                className="platform-pills"
              >
                <span className="pill pill-yt"><span className="pill-dot" /> YouTube</span>
                <span className="pill pill-ig"><span className="pill-dot" /> Instagram</span>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <div ref={cardRef} className="tilt-card fade-up fade-up-1">
          <InputStage
            onSubmit={handleSubmit}
            isLoading={appState === "loading"}
            error={error}
          />
        </div>

        <AnimatePresence mode="wait">
          {appState === "results" && platform && fetched && (
            <ResultsArea
              platform={platform}
              videoData={fetched.data}
              onDownload={handleDownload}
              onReset={handleReset}
              downloading={downloading}
            />
          )}
        </AnimatePresence>

        {appState === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="stats-bar"
            aria-label="Key features"
          >
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Free</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">0</span>
              <span className="stat-label">Login Required</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">4K</span>
              <span className="stat-label">Max Quality</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">2</span>
              <span className="stat-label">Platforms</span>
            </div>
          </motion.div>
        )}
      </main>

      <section className="seo-section" aria-labelledby="how-to-heading">
        <div className="seo-inner">
          <div className="seo-block">
            <h2 id="how-to-heading" className="seo-heading">How to Download Instagram Reels Free</h2>
            <p className="seo-desc">
              Our free Instagram Reels downloader lets you save any public Reel in HD quality — no watermark, no account needed.
            </p>
            <ol className="seo-steps">
              <li>
                <span className="step-num">1</span>
                <div>
                  <strong>Copy the Instagram Reel link</strong>
                  <p>Open Instagram, tap the three dots on any Reel, and select "Copy Link".</p>
                </div>
              </li>
              <li>
                <span className="step-num">2</span>
                <div>
                  <strong>Paste the link above</strong>
                  <p>Click the Paste button or press Ctrl+V in the input field at the top of this page.</p>
                </div>
              </li>
              <li>
                <span className="step-num">3</span>
                <div>
                  <strong>Download your Reel</strong>
                  <p>Choose your preferred quality and click Download. Your Instagram Reel saves instantly to your device.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="seo-block">
            <h2 className="seo-heading">How to Download YouTube Videos Online</h2>
            <p className="seo-desc">
              Use our free YouTube video downloader to save any YouTube video in MP4 format up to 4K, or extract audio as MP3.
            </p>
            <ol className="seo-steps">
              <li>
                <span className="step-num">1</span>
                <div>
                  <strong>Copy the YouTube video URL</strong>
                  <p>Go to YouTube, open the video, and copy the URL from your browser's address bar.</p>
                </div>
              </li>
              <li>
                <span className="step-num">2</span>
                <div>
                  <strong>Paste into the downloader</strong>
                  <p>Paste the YouTube link into the input field above and click Fetch.</p>
                </div>
              </li>
              <li>
                <span className="step-num">3</span>
                <div>
                  <strong>Choose quality and download</strong>
                  <p>Select from available resolutions (up to 4K) or download as MP3 audio. No login required.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="seo-block">
            <h2 className="seo-heading">Supported Platforms &amp; Formats</h2>
            <p className="seo-desc">
              FreeReelsDownloader supports a wide range of content types across both Instagram and YouTube.
            </p>
            <div className="seo-formats-grid">
              <div className="seo-format-card">
                <div className="seo-format-title">📸 Instagram</div>
                <ul>
                  <li>Reels (HD, no watermark)</li>
                  <li>Stories &amp; Highlights</li>
                  <li>Posts &amp; Carousels</li>
                  <li>IGTV Videos</li>
                  <li>Profile Videos</li>
                </ul>
              </div>
              <div className="seo-format-card">
                <div className="seo-format-title">▶️ YouTube</div>
                <ul>
                  <li>Videos up to 4K quality</li>
                  <li>YouTube Shorts</li>
                  <li>MP3 Audio extraction</li>
                  <li>HD &amp; Full HD (1080p)</li>
                  <li>Playlist videos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="seo-block">
            <h2 className="seo-heading">Frequently Asked Questions</h2>
            <div className="seo-faq">
              <details className="faq-item">
                <summary className="faq-question">Is this Instagram and YouTube video downloader free?</summary>
                <p className="faq-answer">Yes, FreeReelsDownloader is 100% free. No subscription, no hidden fees, no account required — ever.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Can I download Instagram Reels without watermark?</summary>
                <p className="faq-answer">Yes. All Instagram Reels downloaded through our tool are completely watermark-free.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What YouTube video quality can I download?</summary>
                <p className="faq-answer">Our YouTube downloader supports resolutions up to 4K (2160p), including 1080p Full HD, 720p HD, and lower resolutions for smaller file sizes.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Do I need to install any software or app?</summary>
                <p className="faq-answer">No. FreeReelsDownloader works entirely in your browser on iPhone, Android, PC, and Mac.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Is my data safe when using this downloader?</summary>
                <p className="faq-answer">Completely. We do not store any video content or personal information. Downloads go directly to your device.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Can I download private Instagram videos?</summary>
                <p className="faq-answer">No. Our tool only supports publicly accessible content. Private or restricted content cannot be downloaded.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-section" aria-labelledby="legal-heading">
        <div className="legal-inner">
          <h2 id="legal-heading" className="legal-title">
            <span className="legal-title-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </span>
            Terms &amp; Fair Use
          </h2>
          <div className="legal-grid">
            <div className="legal-card legal-card-green">
              <div className="legal-card-title">Personal Use</div>
              <p>FreeReelsDownloader is intended for personal, non-commercial use only — such as saving public videos for offline viewing on your own device.</p>
            </div>
            <div className="legal-card legal-card-amber">
              <div className="legal-card-title">Respect Copyright</div>
              <p>Only download content you own or have explicit permission to download. Do not redistribute, re-upload, or monetize downloaded content.</p>
            </div>
            <div className="legal-card legal-card-blue">
              <div className="legal-card-title">No Data Stored</div>
              <p>We do not store, cache, or retain any video content or personal user data on our servers. Downloads stream directly to your device.</p>
            </div>
            <div className="legal-card legal-card-red">
              <div className="legal-card-title">Private Content</div>
              <p>Private, restricted, or age-gated content cannot be downloaded. Only publicly accessible videos and posts are supported.</p>
            </div>
          </div>
          <p className="legal-disclaimer">
            <strong>Disclaimer:</strong> FreeReelsDownloader is an independent tool not affiliated with, endorsed by, or connected to YouTube, Instagram, Meta, or Google in any way. Use of this tool is entirely at your own discretion and risk. By using FreeReelsDownloader, you agree to comply with the <strong>YouTube Terms of Service</strong>, <strong>Instagram Terms of Use</strong>, and all applicable copyright laws in your jurisdiction.
          </p>
        </div>
      </section>

      <footer className="page-footer">
        <span>© {new Date().getFullYear()} FreeReelsDownloader</span>
        <span className="footer-sep" />
        <span>Free Instagram &amp; YouTube Video Downloader</span>
        <span className="footer-sep" />
        <span>No login required</span>
        <span className="footer-sep" />
        <span>No data stored</span>
      </footer>
    </div>
  );
}