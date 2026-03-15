import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Music, Download, Headphones, Volume2, Radio, Mic, Shield } from "lucide-react";

const qualities = [
  { bitrate: "320", label: "320 kbps", desc: "Studio quality. Best for music.", size: "~7 MB/min", recommended: true, color: "#FF0000" },
  { bitrate: "256", label: "256 kbps", desc: "Excellent quality, smaller file.", size: "~5.5 MB/min", recommended: false, color: "#F77737" },
  { bitrate: "192", label: "192 kbps", desc: "High quality, great balance.", size: "~4 MB/min", recommended: false, color: "#FCAF45" },
  { bitrate: "128", label: "128 kbps", desc: "Good quality, smallest size.", size: "~2.5 MB/min", recommended: false, color: "#833AB4" },
];

const useCases = [
  { icon: <Music className="w-4 h-4" />, label: "Music & Podcasts", desc: "Extract audio from music videos, live performances, or podcast episodes." },
  { icon: <Headphones className="w-4 h-4" />, label: "Offline Listening", desc: "Save lectures, tutorials, or audiobooks for listening without internet." },
  { icon: <Mic className="w-4 h-4" />, label: "Voice & ASMR", desc: "Download voice-over content, meditation guides, or ASMR sessions." },
  { icon: <Radio className="w-4 h-4" />, label: "Background Audio", desc: "Extract background music or ambient sounds from YouTube videos." },
];

const faqs = [
  { q: "What audio format does the YouTube audio downloader output?", a: "Downloads are provided as MP3 files, the most universally compatible audio format. MP3 files play on every device, music player, and streaming app without any conversion needed." },
  { q: "What is the best bitrate to download YouTube audio?", a: "For music, we recommend 320 kbps for the highest quality. For spoken word content like podcasts or lectures, 128 kbps is perfectly sufficient and produces much smaller files." },
  { q: "Is downloading YouTube audio as MP3 free?", a: "Yes, completely free. There are no limits on the number of downloads, no premium tier required, and no hidden charges. Just paste the URL and download." },
  { q: "Can I download audio from YouTube playlists?", a: "Yes. Paste a YouTube playlist URL and our tool will list all videos. Choose 'MP3' as the format and download the entire playlist as individual MP3 files." },
  { q: "Does the audio quality depend on the original video?", a: "Yes. YouTube audio quality is capped by the original upload. If the creator uploaded in high quality, you'll get the best possible audio. We never upsample or artificially inflate bitrates." },
];

export default function YoutubeAudioDownloader() {
  const [url, setUrl] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("320");

  return (
    <>
      <Helmet>
        <title>YouTube Audio Downloader – Download YouTube Audio as MP3 Free</title>
        <meta name="description" content="Download audio from any YouTube video as MP3. Choose from 128kbps to 320kbps quality. Free YouTube audio downloader — extract music, podcasts, and lectures. No login required." />
        <meta name="keywords" content="youtube audio downloader, download youtube audio, youtube to audio, extract audio from youtube, youtube mp3 downloader, download youtube music free, youtube audio extractor" />
        <link rel="canonical" href="https://freereelsdownloader.com/youtube-audio-downloader" />
        <meta property="og:title" content="YouTube Audio Downloader – Extract MP3 from Any YouTube Video" />
        <meta property="og:description" content="Download audio from YouTube videos as high-quality MP3. Free, no login, up to 320 kbps." />
        <meta property="og:url" content="https://freereelsdownloader.com/youtube-audio-downloader" />
      </Helmet>

      <div className="page-root">
        <div className="light-shaft shaft-1" />
        <div className="light-shaft shaft-2" />
        <div className="light-shaft shaft-3" />

        <main className="page-main" style={{ maxWidth: 680 }}>

          {/* ── HERO ── */}
          <header className="header-area fade-up">
            <div className="logo-orb">
              <div className="logo-orb-inner">
                <Headphones className="w-5 h-5" style={{ color: "#ff5555" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.8rem" }}>YouTube Audio Downloader</h1>
            <p className="logo-sub">MP3 · 320kbps · Music · Podcasts · Free</p>
            <p className="header-tagline">
              Extract and download audio from any YouTube video as MP3. Perfect for music, podcasts, lectures, and more — up to 320 kbps, completely free.
            </p>
            <div className="platform-pills">
              <span className="pill pill-yt"><span className="pill-dot" />YouTube Audio</span>
              <span className="pill pill-yt"><span className="pill-dot" />MP3 320kbps</span>
              <span className="pill pill-yt"><span className="pill-dot" />Playlists Too</span>
            </div>
          </header>

          {/* ── INPUT + QUALITY SELECTOR ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>

            {/* Quality selector */}
            <div style={{
              borderRadius: 16, border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)", backdropFilter: "blur(20px)",
              marginBottom: 10, overflow: "hidden",
            }}>
              <div style={{
                padding: "10px 16px", borderBottom: "1px solid var(--border-subtle)",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <Volume2 className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  Select Audio Quality
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, padding: 10 }}>
                {qualities.map((q) => (
                  <button
                    key={q.bitrate}
                    onClick={() => setSelectedQuality(q.bitrate)}
                    style={{
                      padding: "12px 14px", borderRadius: 12, cursor: "pointer",
                      border: `1px solid ${selectedQuality === q.bitrate ? q.color + "55" : "var(--border-subtle)"}`,
                      background: selectedQuality === q.bitrate ? `${q.color}12` : "transparent",
                      textAlign: "left", transition: "all 0.2s", position: "relative",
                    }}
                  >
                    {q.recommended && (
                      <div style={{
                        position: "absolute", top: -1, right: 8,
                        background: q.color, borderRadius: "0 0 6px 6px",
                        padding: "1px 8px", fontSize: "0.55rem",
                        fontFamily: "var(--font-display)", fontWeight: 700,
                        color: "white", letterSpacing: "0.06em",
                      }}>BEST</div>
                    )}
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 800, color: selectedQuality === q.bitrate ? q.color : "var(--text-primary)", marginBottom: 2 }}>
                      {q.label}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginBottom: 2 }}>{q.desc}</div>
                    <div style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>{q.size}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* URL input */}
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <Music className="w-4 h-4" style={{ color: "#ff5555" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste YouTube video or playlist URL…"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <div className="input-actions">
                  <button className="btn-fetch" onClick={() => window.location.href = `/?url=${encodeURIComponent(url)}`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>Extract MP3</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="input-hint" style={{ marginTop: 8 }}>
              Selected: <strong style={{ color: "#ff7777" }}>MP3 {selectedQuality} kbps</strong> · Supports videos, playlists & channels
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">320</span><span className="stat-label">Max kbps</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">MP3</span><span className="stat-label">Output Format</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">4</span><span className="stat-label">Quality Options</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Free</span><span className="stat-label">Always</span></div>
          </div>

          {/* ── USE CASES ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">What You Can Download</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {useCases.map((u, i) => (
                <div key={i} className="legal-card" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: "rgba(255,0,0,0.12)", border: "1px solid rgba(255,0,0,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5555",
                  }}>{u.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", fontWeight: 700, marginBottom: 4 }}>{u.label}</div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Frequently Asked Questions</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="legal-card">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.83rem", fontWeight: 700, color: "#ff7777", marginBottom: 6 }}>{faq.q}</div>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SEO CONTENT ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 16 }}>
              <div className="results-section-line" />
              <span className="results-section-text">About This Tool</span>
              <div className="results-section-line" />
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, marginBottom: 12 }}>
              Best Free YouTube Audio Downloader — Extract MP3 in Seconds
            </h2>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 10 }}>
              Our <strong style={{ color: "var(--text-primary)" }}>YouTube audio downloader</strong> lets you extract high-quality MP3 audio from any YouTube video instantly. Choose your preferred bitrate — from compact 128 kbps to lossless-equivalent 320 kbps — and download directly to your device without any software installation.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              This tool is ideal for downloading music videos as audio-only files, saving podcast episodes hosted on YouTube, extracting lecture audio from educational channels, or building offline playlists from your favourite YouTube content. Fully free, no login, no watermark — the best <strong style={{ color: "var(--text-primary)" }}>YouTube to MP3 converter</strong> online.
            </p>
          </section>

          {/* Related */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 14 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Related Tools</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "YouTube to MP3", href: "/youtube-to-mp3" },
                { label: "YouTube to MP3 320kbps", href: "/youtube-to-mp3-320kbps" },
                { label: "YouTube Music Downloader", href: "/youtube-music-downloader" },
                { label: "YouTube to MP4", href: "/youtube-to-mp4" },
                { label: "YouTube Video Downloader", href: "/youtube-video-downloader" },
              ].map(l => (
                <Link key={l.href} to={l.href} className="btn-paste" style={{ textDecoration: "none", fontSize: "0.72rem" }}>{l.label}</Link>
              ))}
            </div>
          </section>

        </main>

        <section className="legal-section">
          <div className="legal-inner">
            <h2 className="legal-title"><span className="legal-title-icon"><Shield className="w-3.5 h-3.5" /></span>Terms & Fair Use</h2>
            <div className="legal-grid">
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Use Only</div><p>Download audio for personal offline listening. Do not distribute or sell downloaded audio tracks.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Respect Music Rights</div><p>Music tracks are protected by copyright. Only download audio you have rights to use.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Data Stored</div><p>Audio files are not stored on our servers. Downloads stream directly to your device.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Videos Only</div><p>Only public YouTube videos are supported. Age-gated and private videos cannot be downloaded.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with YouTube or Google. Use responsibly. Comply with YouTube's Terms of Service and music copyright laws in your jurisdiction.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>YouTube Audio Downloader</span>
          <span className="footer-sep" />
          <span>MP3 · 320kbps · Free</span>
        </footer>
      </div>
    </>
  );
}