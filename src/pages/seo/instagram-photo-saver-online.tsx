import { useState } from "react";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const photoTypes = [
  { label: "Single Post Photos", desc: "Any single image post from a public Instagram account" },
  { label: "Carousel Albums", desc: "All photos in a multi-image post, saved individually" },
  { label: "Profile Picture", desc: "Full-size profile photos from public accounts" },
  { label: "Story Photos", desc: "Static photo stories (not video) from public profiles" },
];

const whyUs = [
  { label: "Original Resolution", value: "Up to 1080×1080px" },
  { label: "File Format", value: "JPEG / PNG" },
  { label: "Processing Time", value: "Under 3 seconds" },
  { label: "Account Required", value: "None" },
  { label: "Daily Limit", value: "Unlimited" },
  { label: "Cost", value: "Free forever" },
];

export default function InstagramPhotoSaver() {
  const [appState, setAppState] = useState<"idle" | "loading" | "results">("idle");
  const [platform, setPlatform] = useState<Platform>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How do I copy an Instagram photo post URL?", a: "On mobile: tap the 3-dot menu on the post and select 'Copy Link'. On desktop: right-click the post date/time and copy the link." },
    { q: "Can I download photos from private accounts?", a: "No. Our tool only works with public accounts. Private content requires the account owner's permission to access." },
    { q: "Will the photo quality be reduced?", a: "No. We download the highest resolution version available, which is typically the original upload size (up to 1080px)." },
    { q: "Can I download all photos from a carousel post?", a: "Yes. When you paste a carousel URL, you'll see all images listed separately and can download each one." },
  ];

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) { setError("Please enter a valid Instagram URL."); return; }
    setPlatform(detectedPlatform);
    setAppState("loading");
    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) { setError(result.error || "Could not fetch photo."); setAppState("idle"); return; }
      setVideoData(result.data);
      setAppState("results");
    } catch { setError("Something went wrong."); setAppState("idle"); }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("Photo downloaded!", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#fafaf8", color: "#1a1a2e", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      {/* Subtle warm gradient */}
      <div style={{ position: "fixed", top: 0, right: 0, width: "50vw", height: "50vh", background: "radial-gradient(ellipse, rgba(252,175,69,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "40vw", height: "40vh", background: "radial-gradient(ellipse, rgba(225,48,108,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Clean white nav */}
      <nav style={{ position: "relative", zIndex: 2, padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8e8e0", background: "rgba(250,250,248,0.9)", backdropFilter: "blur(12px)" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", background: "linear-gradient(90deg, #833AB4, #E1306C, #FCAF45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ReelVideoDownloader
        </div>
        <div style={{ fontSize: "0.72rem", color: "#999", letterSpacing: "0.04em" }}>Instagram Photo Downloader</div>
      </nav>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Light editorial hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "2px", background: "linear-gradient(90deg, #833AB4, #E1306C)" }} />
            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E1306C" }}>Instagram Photo Downloader</span>
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "18px", color: "#0f0f1a" }}>
            Download Instagram Photos<br />in Original Quality
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.75, maxWidth: "500px" }}>
            Save any Instagram photo post, carousel image, or profile picture to your device. Full resolution, no compression, completely free.
          </p>
        </motion.div>

        {/* Input — light style override via wrapper */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "4px", boxShadow: "0 4px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)", border: "1px solid #eee" }}>
          <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />
        </div>

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* Photo types */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0f0f1a", marginBottom: "24px" }}>
            Supported Instagram Photo Types
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {photoTypes.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: "20px", borderRadius: "14px", background: "#fff", border: "1px solid #ede8f5", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "6px", color: "#833AB4" }}>{p.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#888", lineHeight: 1.6 }}>{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Specs table */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0f0f1a", marginBottom: "20px" }}>
            Tool Specifications
          </h2>
          <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #eee", overflow: "hidden" }}>
            {whyUs.map((w, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: i < whyUs.length - 1 ? "1px solid #f0f0ec" : "none", background: i % 2 === 0 ? "#fff" : "#fafaf8" }}>
                <span style={{ fontSize: "0.82rem", color: "#666" }}>{w.label}</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#833AB4" }}>{w.value}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0f0f1a", marginBottom: "20px" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {faqs.map((f, i) => (
              <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ padding: "16px 20px", borderRadius: "12px", background: "#fff", border: openFaq === i ? "1px solid #E1306C40" : "1px solid #eee", cursor: "pointer", transition: "all 0.2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600, fontSize: "0.85rem", color: "#0f0f1a" }}>
                  {f.q}
                  <span style={{ color: "#E1306C", marginLeft: "12px", fontWeight: 400 }}>{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && <div style={{ marginTop: "10px", fontSize: "0.78rem", color: "#777", lineHeight: 1.65 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: "1px solid #e8e8e0", fontSize: "0.68rem", color: "#bbb" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · Personal use only · Not affiliated with Instagram or Meta
      </footer>
    </div>
  );
}