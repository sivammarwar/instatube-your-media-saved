import { useState } from "react";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const contentTypes = [
  { emoji: "🎬", label: "Feed Videos", desc: "Regular video posts from any public profile" },
  { emoji: "🎭", label: "Reels", desc: "Short-form vertical videos from the Reels tab" },
  { emoji: "📖", label: "Stories (public)", desc: "Stories visible on public accounts" },
  { emoji: "🎠", label: "Carousel Videos", desc: "Video slides inside multi-post carousels" },
  { emoji: "🔴", label: "IGTV", desc: "Long-form IGTV content from public accounts" },
];

const tips = [
  { tip: "Make sure the account is public", detail: "Private accounts cannot be accessed by our tool." },
  { tip: "Use the share → copy link option", detail: "Always copy the link from Instagram's native share menu." },
  { tip: "Use the full URL, not the short one", detail: "Short Instagram links sometimes fail — use the full post URL." },
  { tip: "Try on desktop if mobile fails", detail: "Desktop browsers sometimes handle URL copying better." },
];

export default function SaveInstagramVideoOnline() {
  const [appState, setAppState] = useState<"idle" | "loading" | "results">("idle");
  const [platform, setPlatform] = useState<Platform>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) { setError("Please enter a valid Instagram URL."); return; }
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
    toast.success("Saving Instagram Video", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#0d0810", color: "#faf5ff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      {/* Diagonal accent */}
      <div style={{ position: "fixed", top: 0, right: 0, width: "50vw", height: "100vh", background: "linear-gradient(225deg, rgba(252,175,69,0.06) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "40vw", height: "60vh", background: "linear-gradient(45deg, rgba(225,48,108,0.07) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Horizontal rule header */}
      <header style={{ position: "relative", zIndex: 2, padding: "20px 32px", display: "flex", alignItems: "center", gap: "24px" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", background: "linear-gradient(90deg, #FCAF45, #E1306C, #833AB4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ReelVideoDownloader
        </div>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>INSTAGRAM · YOUTUBE · FREE</div>
      </header>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "760px", margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Two-column hero layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "64px", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: "4px", background: "rgba(252,175,69,0.15)", border: "1px solid rgba(252,175,69,0.3)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FCAF45", marginBottom: "20px" }}>
              Save Instagram Videos
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "16px" }}>
              Save Any Instagram Video Online — Fast & Free
            </h1>
            <p style={{ fontSize: "0.88rem", color: "rgba(250,245,255,0.5)", lineHeight: 1.75 }}>
              Download Instagram videos, Reels, and Stories directly to your device with one click. No app, no account, no limit.
            </p>
          </motion.div>

          {/* Visual card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ borderRadius: "20px", padding: "28px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}>Supported Content</div>
            {contentTypes.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0", borderBottom: i < contentTypes.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <span style={{ fontSize: "1.1rem" }}>{c.emoji}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.8rem" }}>{c.label}</div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>{c.desc}</div>
                </div>
                <span style={{ marginLeft: "auto", fontSize: "0.65rem", color: "#4ade80", fontWeight: 600 }}>✓</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Input */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />
        </motion.div>

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* Tips section */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "80px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }}>
            Tips for Saving Instagram Videos
          </h2>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", marginBottom: "24px" }}>If you're running into issues, these tips usually solve the problem.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {tips.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: "flex", gap: "16px", padding: "16px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.07)", alignItems: "flex-start" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(252,175,69,0.2)", border: "1px solid rgba(252,175,69,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700, color: "#FCAF45", flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.85rem", marginBottom: "4px" }}>{t.tip}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{t.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SEO content */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(252,175,69,0.05)", border: "1px solid rgba(252,175,69,0.12)" }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "10px", color: "#FCAF45" }}>Save to iPhone Camera Roll</h3>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>On iOS Safari, after the download starts, tap and hold the video preview and choose "Save Video" to add it directly to your Camera Roll.</p>
          </div>
          <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(225,48,108,0.05)", border: "1px solid rgba(225,48,108,0.12)" }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "10px", color: "#E1306C" }}>Save to Android Gallery</h3>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>On Android Chrome, tap the download button and the video saves to your Downloads folder. Open your Gallery app and check Downloads to find it.</p>
          </div>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · Personal use only · Not affiliated with Instagram or Meta
      </footer>
    </div>
  );
}