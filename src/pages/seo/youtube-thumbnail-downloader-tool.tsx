import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const resolutions = [
  { label: "Max Resolution", res: "1280×720", quality: "Highest available", icon: "🏆" },
  { label: "High Quality", res: "480×360", quality: "Standard HQ", icon: "⭐" },
  { label: "Medium Quality", res: "320×180", quality: "Medium", icon: "📸" },
  { label: "Default Quality", res: "120×90", quality: "Thumbnail size", icon: "📎" },
];

const useCases = [
  "YouTube channel art and graphics",
  "Blog post cover images",
  "Social media preview cards",
  "Email newsletter visuals",
  "Presentation slide backgrounds",
  "Reference for your own thumbnails",
];

const faqs = [
  { q: "What is the maximum YouTube thumbnail resolution?", a: "The maximum thumbnail resolution on YouTube is 1280×720 pixels (HD). Our tool fetches this maximum resolution when available." },
  { q: "Can I download thumbnails from any YouTube video?", a: "Yes, thumbnails from any public YouTube video can be downloaded. All you need is the video URL or video ID." },
  { q: "What format are YouTube thumbnails in?", a: "YouTube thumbnails are JPEG images. They download as .jpg files." },
  { q: "Are there different thumbnail sizes?", a: "Yes, YouTube generates thumbnails in multiple sizes: maxres (1280×720), hqdefault (480×360), mqdefault (320×180), and default (120×90). We present all available sizes." },
];

export default function YoutubeThumbnailDownloaderTool() {
  const [appState, setAppState] = useState<"idle" | "loading" | "results">("idle");
  const [platform, setPlatform] = useState<Platform>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) { setError("Please enter a valid YouTube URL."); return; }
    setPlatform(detectedPlatform);
    setAppState("loading");
    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) { setError(result.error || "Could not fetch thumbnail."); setAppState("idle"); return; }
      setVideoData(result.data);
      setAppState("results");
    } catch { setError("Something went wrong."); setAppState("idle"); }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("Thumbnail downloading", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#03050a", color: "#dde8ff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <Helmet>
        <title>YouTube Thumbnail Downloader — All Sizes Up to HD Free | ReelVideoDownloader</title>
        <meta name="description" content="Download YouTube video thumbnails in all sizes up to 1280×720 HD. Get JPEG thumbnail images from any public YouTube video instantly. Free, no login needed." />
        <link rel="canonical" href="https://www.reelvideodownloader.com/youtube-thumbnail-downloader-tool" />
        <meta property="og:title" content="YouTube Thumbnail Downloader — HD, All Sizes, Free" />
        <meta property="og:description" content="Save YouTube thumbnails in every available size up to 1280×720. Instant JPEG download, completely free." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Background grid + glow */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", top: "0", left: "50%", transform: "translateX(-50%)", width: "800px", height: "300px", background: "radial-gradient(ellipse, rgba(255,68,68,0.08) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Minimal nav */}
      <nav style={{ position: "relative", zIndex: 2, padding: "16px 28px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#fff", fontWeight: 900 }}>▶</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.95rem" }}>ReelVideoDownloader</span>
        </div>
        <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.1)", padding: "4px 12px", borderRadius: "99px" }}>
          Thumbnail Downloader
        </div>
      </nav>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "56px 20px 80px" }}>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: "52px" }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            YouTube Thumbnail<br />
            <span style={{ color: "#ff4444" }}>Downloader</span> — All Sizes
          </h1>
          <p style={{ fontSize: "0.9rem", color: "rgba(221,232,255,0.5)", lineHeight: 1.7, maxWidth: "460px", marginBottom: "24px" }}>
            Download the thumbnail image from any YouTube video in all available resolutions — up to 1280×720 HD. Instant, free, no account needed.
          </p>

          {/* Quick info row */}
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[["Format", "JPEG"], ["Max Size", "1280×720"], ["Cost", "Free"], ["Speed", "Instant"]].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>{val}</div>
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

        {/* Resolution grid */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "20px" }}>
            Available Thumbnail Resolutions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
            {resolutions.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ padding: "18px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: i === 0 ? "1px solid rgba(255,68,68,0.3)" : "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
                {i === 0 && <div style={{ position: "absolute", top: "10px", right: "12px", fontSize: "0.6rem", fontWeight: 700, color: "#ff4444", letterSpacing: "0.08em" }}>BEST</div>}
                <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{r.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "2px" }}>{r.label}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: i === 0 ? "#ff6666" : "#dde8ff", marginBottom: "4px" }}>{r.res}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>{r.quality}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use cases */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "20px" }}>
            What People Use This For
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
            {useCases.map((u, i) => (
              <div key={i} style={{ padding: "12px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.75rem", color: "rgba(221,232,255,0.55)", lineHeight: 1.4 }}>
                {u}
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "20px" }}>FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {faqs.map((f, i) => (
              <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ borderRadius: "12px", border: `1px solid ${openFaq === i ? "rgba(255,68,68,0.3)" : "rgba(255,255,255,0.07)"}`, background: openFaq === i ? "rgba(255,68,68,0.05)" : "rgba(255,255,255,0.025)", cursor: "pointer", overflow: "hidden" }}>
                <div style={{ padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.83rem" }}>{f.q}</span>
                  <span style={{ color: "#ff4444" }}>{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && <div style={{ padding: "0 18px 14px", fontSize: "0.78rem", color: "rgba(221,232,255,0.5)", lineHeight: 1.65 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </motion.section>

        {/* SEO text */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px", padding: "24px", borderRadius: "14px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "12px" }}>
            How YouTube Thumbnail Download Works
          </h2>
          <p style={{ fontSize: "0.78rem", color: "rgba(221,232,255,0.4)", lineHeight: 1.85, marginBottom: "10px" }}>
            Every public YouTube video has a set of thumbnail images stored on YouTube's image servers. These are accessible via a predictable URL pattern using the video's unique ID. Our tool extracts the video ID from any YouTube URL you provide and then presents all available thumbnail sizes as direct download links.
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(221,232,255,0.4)", lineHeight: 1.85 }}>
            No API keys, no authentication — just a direct link to the JPEG thumbnail file. Download instantly in your browser without installing any software.
          </p>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · Personal use only · Not affiliated with YouTube or Google
      </footer>
    </div>
  );
}