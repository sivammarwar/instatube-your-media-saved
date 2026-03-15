import { useState } from "react";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const faqs = [
  {
    q: "How do I download Instagram Reels in HD quality?",
    a: "Paste your Instagram Reel URL into the box above and click Fetch. Our tool automatically detects the highest available resolution — up to 1080p full HD — and lists every format for you to choose from.",
  },
  {
    q: "Is HD Reel download really free?",
    a: "Yes, 100% free. No subscription, no hidden fees, no account required. You can download as many Reels as you like in HD quality at no cost.",
  },
  {
    q: "Will the downloaded Reel have a watermark?",
    a: "No. We fetch the original source file directly from Instagram's CDN, so the video you download is clean — no watermarks, no overlays.",
  },
  {
    q: "What's the maximum quality available?",
    a: "Instagram Reels are encoded at up to 1080p HD. Our downloader fetches the highest quality stream available for each specific video.",
  },
  {
    q: "Can I download Reels on iPhone or Android?",
    a: "Yes. Our web-based tool works on all devices including iOS Safari and Android Chrome. No app installation needed.",
  },
];

const steps = [
  { num: "01", title: "Copy the Reel URL", desc: "Open Instagram, tap the share button on any Reel, and copy the link." },
  { num: "02", title: "Paste & Fetch", desc: "Paste the URL into the input above and hit the Fetch button. Processing takes under 3 seconds." },
  { num: "03", title: "Choose HD Quality", desc: "Select your preferred resolution from the list — always pick the highest for best quality." },
  { num: "04", title: "Download Instantly", desc: "Your HD Reel saves directly to your device. No email, no registration needed." },
];

export default function InstagramReelDownloaderHDQuality() {
  const [appState, setAppState] = useState<"idle" | "loading" | "results">("idle");
  const [platform, setPlatform] = useState<Platform>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (!detectedPlatform) { setError("Please enter a valid Instagram Reel URL."); return; }
    setPlatform(detectedPlatform);
    setAppState("loading");
    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) { setError(result.error || "Could not fetch video."); setAppState("idle"); return; }
      setVideoData(result.data);
      setAppState("results");
    } catch { setError("Something went wrong. Please try again."); setAppState("idle"); }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("HD Download started", { description: `Downloading ${label}` });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#080010", color: "#f0eaff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      {/* Noise texture overlay */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")", zIndex: 0, pointerEvents: "none", opacity: 0.6 }} />

      {/* Gradient blobs */}
      <div style={{ position: "fixed", top: "-200px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(225,48,108,0.2) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-150px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(131,58,180,0.18) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Header strip */}
      <div style={{ position: "relative", zIndex: 1, borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(20px)", background: "rgba(8,0,16,0.7)" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", background: "linear-gradient(90deg, #FCAF45, #E1306C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ReelVideoDownloader
        </div>
        <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>HD Quality · Free · No Watermark</div>
      </div>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto", padding: "60px 20px" }}>
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "48px" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(225,48,108,0.12)", border: "1px solid rgba(225,48,108,0.3)", marginBottom: "24px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E1306C", boxShadow: "0 0 8px #E1306C", display: "inline-block" }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#f472b6", letterSpacing: "0.08em", textTransform: "uppercase" }}>Instagram Reels · HD Quality</span>
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "16px", letterSpacing: "-0.03em" }}>
            Download Instagram Reels<br />
            <span style={{ background: "linear-gradient(90deg, #E1306C, #FCAF45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>in Full HD Quality</span>
          </h1>

          <p style={{ fontSize: "1rem", color: "rgba(240,234,255,0.6)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 32px" }}>
            The fastest way to save any Instagram Reel in 1080p HD — without watermarks, without an account. Works on every device.
          </p>

          {/* Quality badges */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {["1080p HD", "No Watermark", "No Login", "100% Free"].map(b => (
              <span key={b} style={{ padding: "4px 12px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </motion.div>

        {/* Input */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />
        </motion.div>

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* How it works */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "80px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "32px", textAlign: "center" }}>
            How to Download in <span style={{ color: "#E1306C" }}>4 Steps</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ padding: "22px", borderRadius: "16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "rgba(225,48,108,0.15)", lineHeight: 1, marginBottom: "10px" }}>{s.num}</div>
                <div style={{ fontWeight: 600, marginBottom: "6px", fontSize: "0.9rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "80px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "28px", textAlign: "center" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)", background: openFaq === i ? "rgba(225,48,108,0.07)" : "rgba(255,255,255,0.03)", overflow: "hidden", transition: "background 0.3s", cursor: "pointer" }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.88rem", paddingRight: "12px" }}>{f.q}</span>
                  <span style={{ color: "#E1306C", fontSize: "1.2rem", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}>+</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 16px", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* SEO content block */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "80px", padding: "32px", borderRadius: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "14px" }}>Why Quality Matters When Downloading Instagram Reels</h2>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "12px" }}>
            Instagram compresses Reels during upload, but the platform still stores high-quality versions. Most downloaders grab the compressed preview — our tool fetches the full-resolution source, giving you the best possible HD video every time.
          </p>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
            Whether you're saving a Reel for offline viewing, repurposing content you own, or archiving your own posts, having the original HD quality makes a significant difference. Our Instagram HD Reel downloader is built to always deliver the highest resolution available.
          </p>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "30px 20px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "0.7rem", color: "rgba(255,255,255,0.25)" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · For personal use only · Not affiliated with Instagram or Meta
      </footer>
    </div>
  );
}