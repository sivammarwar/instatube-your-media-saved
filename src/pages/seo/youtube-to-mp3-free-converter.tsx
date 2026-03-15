import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const bitrates = [
  { kbps: "320 kbps", quality: "Studio", color: "#a78bfa", desc: "Best possible audio quality" },
  { kbps: "256 kbps", quality: "High", color: "#60a5fa", desc: "Great for music lovers" },
  { kbps: "192 kbps", quality: "Good", color: "#34d399", desc: "Perfect balance of quality & size" },
  { kbps: "128 kbps", quality: "Standard", color: "#fbbf24", desc: "Smaller file, good quality" },
];

const useCases = [
  "Music for your offline playlist",
  "Podcast episodes for the commute",
  "Educational lecture audio",
  "Ambient / lofi study music",
  "Interviews and talks",
  "Language learning audio",
];

export default function YoutubeToMp3Free() {
  const [appState, setAppState] = useState<"idle" | "loading" | "results">("idle");
  const [platform, setPlatform] = useState<Platform>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) { setError("Enter a valid YouTube URL."); return; }
    setPlatform(detectedPlatform);
    setAppState("loading");
    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) { setError(result.error || "Could not fetch audio."); setAppState("idle"); return; }
      setVideoData(result.data);
      setAppState("results");
    } catch { setError("Something went wrong."); setAppState("idle"); }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("Extracting MP3 Audio", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#06040f", color: "#e9e4ff", fontFamily: "'DM Mono', 'Courier New', monospace", overflowX: "hidden" }}>
      <Helmet>
        <title>YouTube to MP3 Converter Free — Up to 320kbps | ReelVideoDownloader</title>
        <meta name="description" content="Convert YouTube videos to MP3 for free. Choose up to 320kbps audio quality. No account, no limits, works on mobile and desktop." />
        <link rel="canonical" href="https://www.reelvideodownloader.com/youtube-to-mp3-free" />
        <meta property="og:title" content="YouTube to MP3 Converter — Free, Up to 320kbps" />
        <meta property="og:description" content="Free YouTube MP3 converter. Extract audio from any YouTube video in high quality." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Scan lines */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(167,139,250,0.015) 2px, rgba(167,139,250,0.015) 4px)", zIndex: 0, pointerEvents: "none" }} />
      {/* Glow center */}
      <div style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(167,139,250,0.1) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Terminal-style header */}
      <header style={{ position: "relative", zIndex: 2, padding: "16px 28px", borderBottom: "1px solid rgba(167,139,250,0.15)", display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(167,139,250,0.5)" }}>~/reelvideo/youtube-to-mp3</div>
        <div style={{ marginLeft: "auto", fontSize: "0.7rem", color: "rgba(167,139,250,0.4)" }}>v2.0.0 — free forever</div>
      </header>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "56px 24px 80px" }}>

        {/* Hero — terminal style */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ marginBottom: "48px" }}>
          <div style={{ color: "rgba(167,139,250,0.5)", fontSize: "0.75rem", marginBottom: "8px" }}>$ convert --platform=youtube --format=mp3 --quality=best</div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: "16px" }}>
            YouTube to MP3<br />
            <span style={{ color: "#a78bfa" }}>Converter</span> — Free
          </h1>
          <div style={{ fontSize: "0.82rem", color: "rgba(233,228,255,0.45)", lineHeight: 1.7 }}>
            <span style={{ color: "#4ade80" }}>✓</span> Extract audio from any YouTube video · <span style={{ color: "#4ade80" }}>✓</span> Up to 320 kbps · <span style={{ color: "#4ade80" }}>✓</span> Zero cost
          </div>
        </motion.div>

        {/* Input */}
        <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* Bitrate selector visual */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <div style={{ color: "rgba(167,139,250,0.4)", fontSize: "0.7rem", marginBottom: "16px" }}>// available audio bitrates</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {bitrates.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: "18px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: `1px solid ${b.color}22`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: b.color }} />
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: b.color, lineHeight: 1 }}>{b.kbps}</div>
                <div style={{ fontWeight: 600, fontSize: "0.78rem", marginTop: "4px", marginBottom: "4px" }}>{b.quality} Quality</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use cases */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px" }}>
          <div style={{ color: "rgba(167,139,250,0.4)", fontSize: "0.7rem", marginBottom: "16px" }}>// common use cases</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {useCases.map((u, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "8px", background: "rgba(167,139,250,0.04)", border: "1px solid rgba(167,139,250,0.1)" }}>
                <span style={{ color: "#a78bfa", fontSize: "0.75rem" }}>→</span>
                <span style={{ fontSize: "0.78rem", color: "rgba(233,228,255,0.6)" }}>{u}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SEO text */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px", padding: "24px", borderRadius: "12px", background: "rgba(167,139,250,0.04)", border: "1px solid rgba(167,139,250,0.1)" }}>
          <div style={{ color: "rgba(167,139,250,0.4)", fontSize: "0.7rem", marginBottom: "12px" }}>/* about this tool */</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "12px" }}>Free YouTube to MP3 Converter — No Limits</h2>
          <p style={{ fontSize: "0.78rem", color: "rgba(233,228,255,0.4)", lineHeight: 1.85, marginBottom: "10px" }}>
            Our YouTube MP3 converter extracts the audio track directly from the YouTube video stream. The result is a high-quality MP3 file saved directly to your device — no intermediate servers, no waiting, no compression beyond what you choose.
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(233,228,255,0.4)", lineHeight: 1.85 }}>
            Whether you want music for offline listening, podcast audio, or just want to strip the audio from a video lecture, our tool supports any public YouTube URL. Works on mobile and desktop browsers.
          </p>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, padding: "20px 28px", borderTop: "1px solid rgba(167,139,250,0.1)", fontSize: "0.65rem", color: "rgba(167,139,250,0.25)" }}>
        $ echo "© {new Date().getFullYear()} ReelVideoDownloader · Personal use only · Not affiliated with YouTube"
      </footer>
    </div>
  );
}