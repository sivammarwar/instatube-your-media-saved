import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const faqItems = [
  { q: "How do I get a YouTube Shorts URL?", a: "Open YouTube, find the Short you want, tap the Share button, then tap Copy Link. The URL will contain '/shorts/' in it." },
  { q: "What format are Shorts downloaded in?", a: "Shorts are downloaded as MP4 video files, which play on every device and media player." },
  { q: "Can I download YouTube Shorts on iPhone?", a: "Yes. Open this page in Safari on your iPhone, paste the Shorts URL, and tap Download. The video saves to your Files app." },
  { q: "Do downloaded Shorts keep their vertical format?", a: "Yes, the original 9:16 vertical aspect ratio is preserved. No cropping, no stretching." },
  { q: "Is there a limit to how many Shorts I can download?", a: "No. Download as many Shorts as you like — our tool has no daily or monthly limits." },
];

const steps = [
  { icon: "📋", step: "Copy", desc: "Tap Share → Copy Link on any YouTube Short" },
  { icon: "📥", step: "Paste", desc: "Paste the URL into the input field above" },
  { icon: "⚡", step: "Fetch", desc: "Click Fetch — results appear in under 3 seconds" },
  { icon: "💾", step: "Save", desc: "Tap Download and the MP4 saves to your device" },
];

export default function YoutubeShortsSaver() {
  const [appState, setAppState] = useState<"idle" | "loading" | "results">("idle");
  const [platform, setPlatform] = useState<Platform>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) { setError("Please enter a valid YouTube Shorts URL."); return; }
    setPlatform(detectedPlatform);
    setAppState("loading");
    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) { setError(result.error || "Could not fetch Short."); setAppState("idle"); return; }
      setVideoData(result.data);
      setAppState("results");
    } catch { setError("Something went wrong."); setAppState("idle"); }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("Downloading Short", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#050505", color: "#ffffff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <Helmet>
        <title>YouTube Shorts Downloader — Save Shorts as MP4 Free | ReelVideoDownloader</title>
        <meta name="description" content="Download any YouTube Short as an MP4 file. Vertical format preserved, no watermark, no login. Free and instant on any device." />
        <link rel="canonical" href="https://www.reelvideodownloader.com/youtube-shorts-saver" />
        <meta property="og:title" content="YouTube Shorts Downloader — Save Shorts as MP4 Free" />
        <meta property="og:description" content="Download YouTube Shorts as MP4. Vertical format, no watermark, completely free." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Bold color accent bar at top */}
      <div style={{ height: "4px", background: "linear-gradient(90deg, #FF0000, #FF4444, #FF0000)", backgroundSize: "200% 100%", animation: "slideGrad 2s linear infinite" }} />
      <style>{`@keyframes slideGrad { 0% { background-position: 0% 0; } 100% { background-position: 200% 0; } }`}</style>

      {/* Nav */}
      <nav style={{ padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #111" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.02em" }}>
          Reel<span style={{ color: "#FF0000" }}>Video</span>Downloader
        </div>
        <div style={{ padding: "5px 14px", border: "1px solid #FF0000", borderRadius: "6px", fontSize: "0.7rem", fontWeight: 700, color: "#FF0000", letterSpacing: "0.08em" }}>
          YOUTUBE SHORTS
        </div>
      </nav>

      <main style={{ maxWidth: "680px", margin: "0 auto", padding: "60px 20px 80px" }}>

        {/* Bold hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: "52px" }}>
          {/* Overline */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "3px", background: "#FF0000" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF0000" }}>YouTube Shorts Downloader</span>
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 7vw, 4rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: "20px" }}>
            DOWNLOAD<br />
            YOUTUBE<br />
            <span style={{ WebkitTextStroke: "2px #FF0000", color: "transparent" }}>SHORTS</span>
          </h1>

          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "420px", marginBottom: "24px" }}>
            Save any YouTube Short as an MP4 in seconds. Vertical format preserved. No watermarks. Free forever.
          </p>

          {/* Stat chips */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[["⚡", "Under 3s"], ["📱", "Vertical MP4"], ["🔓", "No Login"], ["♾️", "Unlimited"]].map(([icon, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", border: "1px solid #1a1a1a", borderRadius: "8px", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", background: "#0a0a0a" }}>
                <span>{icon}</span>{label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Input */}
        <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* Steps — horizontal timeline */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "80px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: "32px" }}>
            4 Steps to Download a Short
          </h2>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "24px", left: "24px", right: "24px", height: "1px", background: "linear-gradient(90deg, #FF0000, transparent)", pointerEvents: "none" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", position: "relative" }}>
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ textAlign: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "2px solid #FF0000", background: "#050505", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: "1.4rem", position: "relative", zIndex: 1 }}>
                    {s.icon}
                  </div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.82rem", marginBottom: "4px", color: "#FF0000" }}>{s.step}</div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "80px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: "24px" }}>
            Shorts Downloader FAQ
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqItems.map((f, i) => (
              <div key={i} style={{ padding: "18px 0", borderBottom: "1px solid #111", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "rgba(255,255,255,0.8)" }}>{f.q}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SEO text */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px", padding: "28px", border: "1px solid #1a1a1a", borderRadius: "12px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "12px" }}>
            About YouTube Shorts Downloading
          </h2>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.85, marginBottom: "10px" }}>
            YouTube Shorts are vertical short-form videos up to 60 seconds long. While YouTube doesn't offer a native download option, our tool enables you to save any public Short directly to your device in full quality MP4 format.
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.85 }}>
            All you need is the Shorts URL — you can find it by tapping the Share button within the Shorts player on mobile or copying the browser URL on desktop. Paste it above and your download is ready in seconds.
          </p>
        </motion.section>
      </main>

      <footer style={{ padding: "20px 28px", borderTop: "1px solid #111", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", textAlign: "center" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · Personal use only · Not affiliated with YouTube or Google
      </footer>
    </div>
  );
}