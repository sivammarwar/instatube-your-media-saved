import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const useCases = [
  { icon: "🎵", title: "Extract Background Music", desc: "Identify and save trending songs from viral Reels" },
  { icon: "🎙️", title: "Voiceover Audio", desc: "Extract spoken audio from educational or tutorial Reels" },
  { icon: "🔊", title: "Sound Effects", desc: "Save unique audio clips and sound effects" },
  { icon: "📻", title: "Podcast Clips", desc: "Extract audio from interview or podcast highlight Reels" },
];

const steps = [
  { num: "1", label: "Open Instagram", detail: "Find the Reel with the audio you want to extract" },
  { num: "2", label: "Copy Reel Link", detail: "Tap the Share icon → Copy Link" },
  { num: "3", label: "Paste Below", detail: "Paste the link in the input field and hit Fetch" },
  { num: "4", label: "Select Audio", detail: "Choose the MP3 option from the download results" },
];

const faqs = [
  { q: "Can I extract any audio from an Instagram Reel?", a: "You can extract the full audio track of any public Reel as an MP3 file — this includes background music, voiceovers, and mixed audio." },
  { q: "What quality is the extracted MP3?", a: "The audio is extracted at the highest quality available from the original Reel upload, typically 128 kbps AAC, saved as MP3." },
  { q: "Is it legal to extract audio from Reels?", a: "Extracting audio for personal use is generally acceptable. Redistributing copyrighted music or audio commercially may violate copyright law." },
  { q: "Will the MP3 include the full Reel audio?", a: "Yes. The entire audio track of the Reel is extracted, including any transitions or audio mixing within the Reel." },
];

export default function InstagramReelAudioExtractor() {
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
      if (!result.success || !result.data) { setError(result.error || "Could not extract audio."); setAppState("idle"); return; }
      setVideoData(result.data);
      setAppState("results");
    } catch { setError("Something went wrong."); setAppState("idle"); }
  };

  const handleDownload = (downloadUrl: string, label: string) => {
    window.open(downloadUrl, "_blank");
    toast.success("Extracting MP3 from Reel", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  const bars = Array.from({ length: 32 }, (_, i) => i);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #04020c 0%, #080414 100%)", color: "#f0e8ff", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <Helmet>
        <title>Instagram Reel to MP3 — Extract Audio from Reels Free | ReelVideoDownloader</title>
        <meta name="description" content="Extract and download MP3 audio from any Instagram Reel. Save background music, voiceovers and sound effects as audio files. Free, instant, no login." />
        <link rel="canonical" href="https://www.reelvideodownloader.com/instagram-reel-audio-extractor" />
        <meta property="og:title" content="Instagram Reel to MP3 — Free Audio Extractor" />
        <meta property="og:description" content="Convert Instagram Reels to MP3 audio. Extract any Reel's soundtrack for free, instantly." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Purple glow */}
      <div style={{ position: "fixed", top: "20%", left: "50%", transform: "translateX(-50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(167,139,250,0.12) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: 0, right: 0, width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(225,48,108,0.08) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 2, padding: "16px 28px", borderBottom: "1px solid rgba(167,139,250,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, background: "linear-gradient(90deg, #a78bfa, #E1306C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ReelVideoDownloader
        </div>
        <div style={{ fontSize: "0.68rem", color: "rgba(167,139,250,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Reel → MP3</div>
      </nav>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "640px", margin: "0 auto", padding: "56px 20px 80px" }}>

        {/* Hero with animated waveform visual */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", marginBottom: "52px" }}>
          {/* Animated audio bars */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3px", height: "48px", marginBottom: "28px" }}>
            {bars.map((_, i) => (
              <motion.div key={i}
                style={{ width: "4px", borderRadius: "2px", background: `hsl(${280 + i * 3}, 80%, 65%)` }}
                animate={{ height: ["10px", `${20 + Math.sin(i * 0.8) * 20}px`, "10px"] }}
                transition={{ duration: 0.8 + (i % 5) * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
              />
            ))}
          </div>

          <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: "99px", background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bfa", marginBottom: "20px" }}>
            Instagram Reel to MP3
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Extract MP3 Audio from<br />
            <span style={{ color: "#a78bfa" }}>Instagram Reels</span>
          </h1>
          <p style={{ fontSize: "0.9rem", color: "rgba(240,232,255,0.5)", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto" }}>
            Convert any Instagram Reel into a downloadable MP3 audio file — free, instant, no login needed.
          </p>
        </motion.div>

        {/* Input */}
        <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* Steps */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "24px", textAlign: "center" }}>
            How to Extract MP3 from a Reel
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", paddingBottom: i < steps.length - 1 ? "0" : "0" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800, color: "#a78bfa" }}>{s.num}</div>
                  {i < steps.length - 1 && <div style={{ width: "1px", flex: 1, minHeight: "28px", background: "rgba(167,139,250,0.15)", margin: "4px 0" }} />}
                </div>
                <div style={{ paddingBottom: i < steps.length - 1 ? "20px" : "0", paddingTop: "4px" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>{s.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(240,232,255,0.4)" }}>{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Use cases */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "20px" }}>
            Why Extract Audio from Reels?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {useCases.map((u, i) => (
              <div key={i} style={{ padding: "18px", borderRadius: "14px", background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.12)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>{u.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.82rem", marginBottom: "5px" }}>{u.title}</div>
                <div style={{ fontSize: "0.73rem", color: "rgba(240,232,255,0.4)", lineHeight: 1.55 }}>{u.desc}</div>
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
                style={{ borderRadius: "12px", background: openFaq === i ? "rgba(167,139,250,0.08)" : "rgba(255,255,255,0.03)", border: `1px solid ${openFaq === i ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.07)"}`, cursor: "pointer", overflow: "hidden", transition: "all 0.25s" }}>
                <div style={{ padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.83rem" }}>{f.q}</span>
                  <span style={{ color: "#a78bfa", transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none", display: "inline-block" }}>+</span>
                </div>
                {openFaq === i && <div style={{ padding: "0 18px 14px", fontSize: "0.78rem", color: "rgba(240,232,255,0.5)", lineHeight: 1.65 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: "1px solid rgba(167,139,250,0.1)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · Personal use only · Not affiliated with Instagram or Meta
      </footer>
    </div>
  );
}