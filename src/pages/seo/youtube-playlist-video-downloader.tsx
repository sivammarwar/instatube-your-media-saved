import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import { fetchVideoData, type VideoData } from "@/lib/api";
import ResultsArea from "@/components/ResultsArea";
import { toast } from "sonner";

const limitations = [
  { item: "Individual video download from playlist", ok: true },
  { item: "Full playlist bulk download (50+ videos)", ok: false, note: "Use yt-dlp desktop tool" },
  { item: "Choose video quality per download", ok: true },
  { item: "MP3 audio extraction from playlist videos", ok: true },
  { item: "Private or unlisted playlists", ok: false, note: "Public playlists only" },
  { item: "No account required", ok: true },
];

const tips = [
  { title: "Get the individual video URL", body: "For best results, open a specific video within the playlist and copy that video's URL rather than the playlist URL." },
  { title: "Check playlist visibility", body: "Only publicly visible playlists are accessible. Private and unlisted playlists require the owner's credentials." },
  { title: "Use MP3 mode for audio-only", body: "If you only need the audio from a playlist video (like a podcast), look for the MP3 option in the results." },
  { title: "Download one at a time", body: "Our web tool downloads individual videos. For bulk playlist downloads, consider yt-dlp, a free command-line tool." },
];

export default function YoutubePlaylistVideoDownloader() {
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
    toast.success("Downloading from playlist", { description: label });
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setVideoData(null); setError(null); };

  return (
    <div style={{ minHeight: "100vh", background: "#030712", color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <Helmet>
        <title>YouTube Playlist Downloader — Download Videos from Playlists Free | ReelVideoDownloader</title>
        <meta name="description" content="Download any individual video from a YouTube playlist in HD quality. Supports MP4 video and MP3 audio. Free, no login required, works on all devices." />
        <link rel="canonical" href="https://www.reelvideodownloader.com/youtube-playlist-video-downloader" />
        <meta property="og:title" content="YouTube Playlist Downloader — Free HD Video Download" />
        <meta property="og:description" content="Download videos from any YouTube playlist in HD. MP4 and MP3 supported. Free, no account needed." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Geometric background */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(255,0,0,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "fixed", top: "-100px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "350px", background: "radial-gradient(ellipse, rgba(255,0,0,0.1) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Header with breadcrumb feel */}
      <header style={{ position: "relative", zIndex: 2, borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 28px", display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "#fff" }}>ReelVideoDownloader</div>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>/</div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>youtube</div>
        <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>/</div>
        <div style={{ fontSize: "0.75rem", color: "#FF0000", fontWeight: 600 }}>playlist-downloader</div>
      </header>

      <main style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto", padding: "56px 20px 80px" }}>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: "52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "6px", background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.25)", marginBottom: "20px" }}>
            <span style={{ fontSize: "0.9rem" }}>▶</span>
            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ff4444" }}>YouTube Playlist Downloader</span>
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Download Videos From<br />
            <span style={{ color: "#ff4444" }}>YouTube Playlists</span> — Free
          </h1>
          <p style={{ fontSize: "0.9rem", color: "rgba(226,232,240,0.5)", lineHeight: 1.7, maxWidth: "480px" }}>
            Download any individual video from a YouTube playlist in full quality. Supports MP4 video and MP3 audio extraction. No login needed.
          </p>
        </motion.div>

        {/* Input */}
        <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />

        {appState === "results" && platform && videoData && (
          <div style={{ marginTop: "24px" }}>
            <ResultsArea platform={platform} videoData={videoData} onDownload={handleDownload} onReset={handleReset} />
          </div>
        )}

        {/* What's possible / limits */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "8px" }}>
            Capabilities & Limitations
          </h2>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>We believe in being transparent about what our tool can and can't do.</p>
          <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
            {limitations.map((l, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 20px", background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.01)", borderBottom: i < limitations.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>{l.ok ? "✅" : "⚠️"}</span>
                <span style={{ fontSize: "0.82rem", flex: 1 }}>{l.item}</span>
                {l.note && <span style={{ fontSize: "0.68rem", color: "#fbbf24", fontStyle: "italic" }}>{l.note}</span>}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tips */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "72px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", marginBottom: "24px" }}>
            Tips for Downloading Playlist Videos
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {tips.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: "20px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(255,0,0,0.15)", border: "1px solid rgba(255,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "#ff4444", fontWeight: 700 }}>{i + 1}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.82rem" }}>{t.title}</div>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>{t.body}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SEO text */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginTop: "64px", padding: "28px", borderRadius: "16px", background: "rgba(255,0,0,0.04)", border: "1px solid rgba(255,0,0,0.1)" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "12px", color: "#ff6666" }}>
            Downloading Videos From YouTube Playlists
          </h2>
          <p style={{ fontSize: "0.78rem", color: "rgba(226,232,240,0.4)", lineHeight: 1.85, marginBottom: "10px" }}>
            YouTube playlists are collections of videos organized by a user or channel. While YouTube doesn't offer direct download for individual playlist items, you can download any video from a playlist by getting its direct URL and using our converter.
          </p>
          <p style={{ fontSize: "0.78rem", color: "rgba(226,232,240,0.4)", lineHeight: 1.85 }}>
            To get a playlist video's URL: click on the video within the playlist, then copy the URL from your browser address bar. This URL uniquely identifies that specific video, even if it's part of a larger playlist, and our tool will download it in full quality.
          </p>
        </motion.section>
      </main>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)" }}>
        © {new Date().getFullYear()} ReelVideoDownloader · Personal use only · Not affiliated with YouTube or Google
      </footer>
    </div>
  );
}