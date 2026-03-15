import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import ResultsArea from "@/components/ResultsArea";
import { fetchVideoData, type VideoData } from "@/lib/api";
import { toast } from "sonner";

type AppState = "idle" | "loading" | "results";
const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

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
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.6 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
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

      // Draw faint connection lines
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
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(1000px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg)`;
    };

    const onLeave = () => {
      el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
      el.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
    };

    const onEnter = () => {
      el.style.transition = "transform 0.1s ease-out";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseenter", onEnter);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseenter", onEnter);
    };
  }, [ref]);
}

export default function Index() {
  const [appState, setAppState] = useState<AppState>("idle");
  const [platform, setPlatform] = useState<Platform>(null);
  const [error, setError] = useState<string | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useTilt(cardRef);

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) {
      setError("Check your link — we support Instagram and YouTube.");
      return;
    }
    setPlatform(detectedPlatform);
    setAppState("loading");
    setVideoData(null);

    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) {
        setError(result.error || "Could not fetch video. Please check the link.");
        setAppState("idle");
        return;
      }
      setVideoData(result.data);
      setAppState("results");
    } catch {
      setError("Something went wrong. Please try again.");
      setAppState("idle");
    }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("Download started", {
      description: `Your ${label} file is downloading.`,
      style: {
        background: "rgba(6,8,16,0.95)",
        border: "1px solid rgba(0,245,255,0.2)",
        color: "#eef2ff",
      },
    });
  };

  const handleReset = () => {
    setAppState("idle");
    setPlatform(null);
    setError(null);
    setVideoData(null);
  };

  return (
    <div className="page-root">
      <ParticleCanvas />
      <div className="light-shaft shaft-1" />
      <div className="light-shaft shaft-2" />
      <div className="light-shaft shaft-3" />

      <main className="page-main">
        {/* Header */}
        <header className="header-area">
          {/* 3D orb */}
          <div className="logo-orb">
            <div className="logo-orb-inner">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
          </div>

          <div className="logo-text">ReelVideoDownloader</div>
          <div className="logo-sub">Video Downloader · v2.0</div>

          <AnimatePresence mode="wait">
            <motion.p
              key={appState}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="header-tagline"
            >
              {appState === "idle" && "Save any video from YouTube or Instagram. Free, fast, no login."}
              {appState === "loading" && "Initializing download sequence…"}
              {appState === "results" && (videoData?.title || "Your video is ready to download.")}
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
                <span className="pill pill-yt">
                  <span className="pill-dot" /> YouTube
                </span>
                <span className="pill pill-ig">
                  <span className="pill-dot" /> Instagram
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* 3D tilt card wrapping the input */}
        <div ref={cardRef} className="tilt-card fade-up fade-up-1">
          <InputStage
            onSubmit={handleSubmit}
            isLoading={appState === "loading"}
            error={error}
          />
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {appState === "results" && platform && videoData && (
            <ResultsArea
              platform={platform}
              videoData={videoData}
              onDownload={handleDownload}
              onReset={handleReset}
            />
          )}
        </AnimatePresence>

        {/* Stats bar */}
        {appState === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="stats-bar"
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

      {/* Legal Section */}
      <section className="legal-section">
        <div className="legal-inner">
          <h2 className="legal-title">
            <span className="legal-title-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </span>
            Terms & Fair Use
          </h2>

          <div className="legal-grid">
            <div className="legal-card legal-card-green">
              <div className="legal-card-title">Personal Use</div>
              <p>InstaTube is intended for personal, non-commercial use only — such as saving public videos for offline viewing on your own device.</p>
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
            <strong>Disclaimer:</strong> InstaTube is an independent tool not affiliated with, endorsed by, or connected to YouTube, Instagram, Meta, or Google in any way. Use of this tool is entirely at your own discretion and risk. By using InstaTube, you agree to comply with the <strong>YouTube Terms of Service</strong>, <strong>Instagram Terms of Use</strong>, and all applicable copyright laws in your jurisdiction. The developers of InstaTube accept no responsibility for any misuse of downloaded content. This tool is provided as-is for educational and personal convenience purposes only. Downloading copyrighted content without permission may violate platform terms and local laws — always ensure you have the legal right to download any content before doing so.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <span>© {new Date().getFullYear()} InstaTube</span>
        <span className="footer-sep" />
        <span>Personal use only</span>
        <span className="footer-sep" />
        <span>Not affiliated with YouTube or Instagram</span>
        <span className="footer-sep" />
        <span>No data stored</span>
      </footer>
    </div>
  );
}