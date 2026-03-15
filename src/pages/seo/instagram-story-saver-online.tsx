import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const storyTypes = [
  { icon: "📸", label: "Photo Stories", supported: true },
  { icon: "🎥", label: "Video Stories", supported: true },
  { icon: "🎵", label: "Music Stories", supported: true },
  { icon: "🔒", label: "Private Accounts", supported: false },
  { icon: "⏰", label: "Expired Stories", supported: false },
];

const faqs = [
  { q: "Can I download Instagram Stories anonymously?", a: "Yes. Our tool accesses publicly available stories without requiring you to log in or revealing your identity to the story creator." },
  { q: "Do Stories expire after download?", a: "Once downloaded to your device, the file is yours permanently — it won't disappear after 24 hours like it does on Instagram." },
  { q: "Can I download Story Highlights?", a: "Story Highlights on public accounts can be downloaded the same way — just paste the profile or highlight URL into the tool above." },
  { q: "What file format are stories saved in?", a: "Video stories are saved as MP4, and photo stories are saved as JPEG or PNG, depending on the original upload format." },
];

export default function InstagramStoryDownloader() {
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
      if (!result.success || !result.data) { setError(result.error || "Could not fetch story."); setAppState("idle"); return; }
      setVideoData(result.data);
      setAppState("results");
    } catch { setError("Something went wrong."); setAppState("idle"); }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("Story downloaded!", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #0f0618 0%, #150b22 50%, #0d0a1a 100%)", color: "#f5eeff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <Helmet>
        <title>Instagram Story Downloader — Save Stories & Highlights Free | ReelVideoDownloader</title>
        <meta name="description" content="Download Instagram Stories and Highlights before they disappear. Save video and photo stories from any public account. Free, anonymous, no login." />
        <link rel="canonical" href="https://www.reelvideodownloader.com/instagram-story-saver" />
        <meta property="og:title" content="Instagram Story Downloader — Free & Anonymous" />
        <meta property="og:description" content="Save Instagram Stories and Highlights from any public account. Free, instant, no account needed." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Soft aurora blobs */}
      <div style={{ position: "fixed", top: "10%", left: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(252,175,69,0.08), transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", top: "40%", right: "5%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(225,48,108,0.09), transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "10%", left: "30%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(131,58,180,0.08), transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <header style={{ position: "relative", zIndex: 2, padding: "18px 28px", borderBottom: "1px solid rgba(252,175,69,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, background: "linear-gradient(90deg, #FCAF45, #E1306C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ReelVideoDownloader
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: "rgba(252,175,69,0.6)", border: "1px solid rgba(252,175,69,0.2)", padding: "4px 12px", borderRadius: "99px" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#FCAF45" }} />
          Instagram Stories
        </div>
      </header>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto", padding: "56px 20px 80px" }}>

        {/* Story ring hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", marginBottom: "52px" }}>
          {/* Simulated story ring */}
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "28px", position: "relative" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(45deg, #FCAF45, #E1306C, #833AB4)", padding: "3px" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#0f0618", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                📱
              </div>
            </div>
            <div style={{ position: "absolute", inset: "-6px", borderRadius: "50%", border: "2px dashed rgba(252,175,69,0.3)", animation: "spin 8s linear infinite" }} />
          </div>

          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Download Instagram<br />
            <span style={{ background: "linear-gradient(90deg, #FCAF45, #E1306C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Stories & Highlights</span>
          </h1>
          <p style={{ fontSize: "0.9rem", color: "rgba(245,238,255,0.5)", lineHeight: 1.7, maxWidth: "420px", margin: "0 auto" }}>
            Save Instagram stories before they disappear. Download video and photo stories from any public account — instantly, privately.
          </p>
        </motion.div>

        {/* Input */}
        <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* What's supported */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "20px", textAlign: "center" }}>
            What Can Be Downloaded?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {storyTypes.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 18px", borderRadius: "12px", background: s.supported ? "rgba(74,222,128,0.05)" : "rgba(255,255,255,0.025)", border: `1px solid ${s.supported ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.06)"}` }}>
                <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
                <span style={{ fontWeight: 500, fontSize: "0.85rem" }}>{s.label}</span>
                <span style={{ marginLeft: "auto", fontSize: "0.75rem", fontWeight: 700, color: s.supported ? "#4ade80" : "#f87171" }}>
                  {s.supported ? "✓ Supported" : "✗ Not available"}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "20px" }}>
            Story Downloader FAQs
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ padding: "18px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontWeight: 700, fontSize: "0.82rem", marginBottom: "8px", color: "#f5eeff" }}>{f.q}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(245,238,255,0.45)", lineHeight: 1.65 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: "1px solid rgba(252,175,69,0.08)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · For personal use only · Not affiliated with Instagram or Meta
      </footer>
    </div>
  );
}