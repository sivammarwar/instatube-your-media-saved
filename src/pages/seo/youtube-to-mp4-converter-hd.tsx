import { useState } from "react";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const qualities = [
  { res: "4K (2160p)", size: "~800MB", speed: "Slowest", badge: "BEST", color: "#FFD700" },
  { res: "1080p Full HD", size: "~150MB", speed: "Fast", badge: "POPULAR", color: "#00f5ff" },
  { res: "720p HD", size: "~80MB", speed: "Very Fast", badge: "", color: "#4ade80" },
  { res: "480p SD", size: "~40MB", speed: "Fastest", badge: "", color: "#94a3b8" },
  { res: "360p", size: "~20MB", speed: "Instant", badge: "", color: "#94a3b8" },
];

const features = [
  { icon: "⚡", title: "Lightning Fast", desc: "Conversion happens in under 5 seconds — no waiting around." },
  { icon: "🎬", title: "Original Quality", desc: "We preserve every frame at the resolution you choose." },
  { icon: "🔒", title: "Private & Safe", desc: "Your links are never stored. Zero data retention." },
  { icon: "📱", title: "All Devices", desc: "Works on Mac, Windows, iOS, Android — any browser." },
  { icon: "♾️", title: "Unlimited Use", desc: "No daily limits. Convert as many videos as you want." },
  { icon: "🆓", title: "Always Free", desc: "No account, no subscription, no credit card needed." },
];

export default function YoutubeToMp4Converter() {
  const [appState, setAppState] = useState<"idle" | "loading" | "results">("idle");
  const [platform, setPlatform] = useState<Platform>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) { setError("Please enter a valid YouTube URL."); return; }
    setPlatform(detectedPlatform);
    setAppState("loading");
    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) { setError(result.error || "Could not fetch video."); setAppState("idle"); return; }
      setVideoData(result.data);
      setAppState("results");
    } catch { setError("Something went wrong."); setAppState("idle"); }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("Converting to MP4…", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#020509", color: "#e8f4ff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      {/* Grid bg */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(255,0,0,0.12) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", borderBottom: "1px solid rgba(0,245,255,0.08)" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#00f5ff" }}>ReelVideoDownloader</div>
        <div style={{ display: "flex", gap: "6px" }}>
          {["YouTube", "Instagram"].map(p => (
            <span key={p} style={{ padding: "4px 12px", borderRadius: "6px", fontSize: "0.7rem", fontWeight: 600, background: p === "YouTube" ? "rgba(255,0,0,0.15)" : "rgba(225,48,108,0.1)", border: `1px solid ${p === "YouTube" ? "rgba(255,0,0,0.3)" : "rgba(225,48,108,0.2)"}`, color: p === "YouTube" ? "#ff5555" : "#f472b6" }}>{p}</span>
          ))}
        </div>
      </nav>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto", padding: "60px 20px 80px" }}>
        {/* Hero — editorial asymmetric */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", marginBottom: "24px" }}>
            {/* Big YT icon block */}
            <div style={{ flexShrink: 0, width: "64px", height: "64px", borderRadius: "14px", background: "rgba(255,0,0,0.15)", border: "1px solid rgba(255,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>
              ▶
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ff5555", marginBottom: "8px" }}>YouTube → MP4 Converter</div>
              <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                Convert YouTube<br />
                <span style={{ color: "#ff4444" }}>to MP4</span> — Any Quality
              </h1>
            </div>
          </div>
          <p style={{ fontSize: "0.95rem", color: "rgba(232,244,255,0.55)", lineHeight: 1.7, maxWidth: "500px" }}>
            Paste any YouTube video link and get a clean MP4 file in the resolution you choose — up to 4K. No software, no account required.
          </p>
        </div>

        {/* Input */}
        <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* Quality Table */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "20px" }}>
            Available MP4 Quality Options
          </h2>
          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            {qualities.map((q, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "12px", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)", borderBottom: i < qualities.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: q.color, boxShadow: `0 0 8px ${q.color}` }} />
                  <span style={{ fontWeight: 600, fontSize: "0.88rem" }}>{q.res}</span>
                  {q.badge && <span style={{ padding: "2px 8px", borderRadius: "4px", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", background: `${q.color}22`, border: `1px solid ${q.color}44`, color: q.color }}>{q.badge}</span>}
                </div>
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>{q.size}</span>
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>{q.speed}</span>
                <span style={{ fontSize: "0.7rem", color: "#4ade80", fontWeight: 600 }}>✓ Free</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Features grid */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "24px" }}>
            Why Use Our YouTube MP4 Converter?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ padding: "20px 16px", borderRadius: "14px", background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.82rem", marginBottom: "6px" }}>{f.title}</div>
                <div style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SEO text */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "14px" }}>
            How YouTube to MP4 Conversion Works
          </h2>
          <p style={{ fontSize: "0.82rem", color: "rgba(232,244,255,0.45)", lineHeight: 1.85, marginBottom: "10px" }}>
            When you submit a YouTube URL, our server fetches the available video streams from YouTube's delivery network. YouTube stores videos in multiple formats and resolutions — we parse these streams and present them as clean MP4 download links. The entire process is server-side, meaning no software is installed on your device.
          </p>
          <p style={{ fontSize: "0.82rem", color: "rgba(232,244,255,0.45)", lineHeight: 1.85 }}>
            MP4 is the most universally compatible video format, supported by every device, media player, and editing software. Converting YouTube to MP4 gives you a file you can play, edit, share, or archive without any format compatibility concerns.
          </p>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · Personal use only · Not affiliated with YouTube or Google
      </footer>
    </div>
  );
}