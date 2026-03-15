import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, Download, FileVideo, Music, Shield, ChevronRight } from "lucide-react";

type FormatGroup = { group: string; color: string; formats: { ext: string; desc: string; quality: string }[] };

const formatGroups: FormatGroup[] = [
  {
    group: "Video Formats",
    color: "#FF0000",
    formats: [
      { ext: "MP4", desc: "Most compatible — plays everywhere", quality: "Up to 4K" },
      { ext: "WebM", desc: "Web-optimized, smaller files", quality: "Up to 1080p" },
      { ext: "MKV", desc: "High quality container format", quality: "Up to 4K" },
      { ext: "AVI", desc: "Legacy format, wide support", quality: "Up to 1080p" },
    ],
  },
  {
    group: "Audio Formats",
    color: "#833AB4",
    formats: [
      { ext: "MP3", desc: "Universal audio, smallest size", quality: "Up to 320 kbps" },
      { ext: "AAC", desc: "High quality, Apple devices", quality: "Up to 320 kbps" },
      { ext: "WAV", desc: "Lossless audio, largest size", quality: "Lossless" },
      { ext: "FLAC", desc: "Lossless + compressed", quality: "Lossless" },
    ],
  },
];

const conversions = [
  { from: "YouTube", to: "MP4", icon: "🎬", popular: true },
  { from: "YouTube", to: "MP3", icon: "🎵", popular: true },
  { from: "YouTube", to: "WAV", icon: "🎼", popular: false },
  { from: "YouTube", to: "FLAC", icon: "🔊", popular: false },
  { from: "YouTube", to: "WebM", icon: "🌐", popular: false },
  { from: "YouTube", to: "AVI", icon: "📼", popular: false },
];

export default function YoutubeVideoConverter() {
  const [url, setUrl] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("MP4");
  const [selectedGroup, setSelectedGroup] = useState("Video Formats");

  const allFormats = formatGroups.flatMap(g => g.formats);
  const currentFormat = allFormats.find(f => f.ext === selectedFormat);
  const currentGroup = formatGroups.find(g => g.group === selectedGroup);

  return (
    <>
      <Helmet>
        <title>YouTube Video Converter – Convert YouTube to MP4, MP3, WAV, FLAC Free</title>
        <meta name="description" content="Convert YouTube videos to MP4, MP3, WAV, FLAC, WebM, AVI and more. Free online YouTube video converter — no software, no login, high quality output." />
        <meta name="keywords" content="youtube video converter, convert youtube to mp4, youtube to mp3 converter, youtube converter online free, youtube to wav, youtube to flac, convert youtube video free" />
        <link rel="canonical" href="https://freereelsdownloader.com/youtube-video-converter" />
        <meta property="og:title" content="YouTube Video Converter – MP4, MP3, WAV, FLAC Free" />
        <meta property="og:description" content="Convert YouTube videos to any format. MP4, MP3, WAV, FLAC and more. Free, no login." />
        <meta property="og:url" content="https://freereelsdownloader.com/youtube-video-converter" />
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
                <RefreshCw className="w-5 h-5" style={{ color: "#ff5555" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.75rem" }}>YouTube Video Converter</h1>
            <p className="logo-sub">MP4 · MP3 · WAV · FLAC · WebM · Free</p>
            <p className="header-tagline">
              Convert any YouTube video to your preferred format. Video formats like MP4, WebM, AVI — or audio formats including MP3, WAV, AAC, and FLAC.
            </p>
            <div className="platform-pills">
              <span className="pill pill-yt"><span className="pill-dot" />8 Output Formats</span>
              <span className="pill pill-yt"><span className="pill-dot" />4K Quality</span>
              <span className="pill pill-yt"><span className="pill-dot" />Lossless Audio</span>
            </div>
          </header>

          {/* ── FORMAT SELECTOR + INPUT ── */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>

            {/* Format type toggle */}
            <div style={{ display: "flex", gap: 6 }}>
              {formatGroups.map(g => (
                <button
                  key={g.group}
                  onClick={() => { setSelectedGroup(g.group); setSelectedFormat(g.formats[0].ext); }}
                  style={{
                    flex: 1, padding: "8px 14px", borderRadius: 12, border: "1px solid",
                    cursor: "pointer", fontFamily: "var(--font-display)", fontSize: "0.75rem", fontWeight: 700,
                    transition: "all 0.2s", letterSpacing: "0.05em",
                    background: selectedGroup === g.group ? `${g.color}18` : "transparent",
                    borderColor: selectedGroup === g.group ? `${g.color}55` : "var(--border-subtle)",
                    color: selectedGroup === g.group ? g.color : "var(--text-muted)",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  }}
                >
                  {g.group === "Video Formats" ? <FileVideo className="w-3.5 h-3.5" /> : <Music className="w-3.5 h-3.5" />}
                  {g.group}
                </button>
              ))}
            </div>

            {/* Format buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {currentGroup?.formats.map(f => (
                <button
                  key={f.ext}
                  onClick={() => setSelectedFormat(f.ext)}
                  style={{
                    padding: "10px 8px", borderRadius: 12, cursor: "pointer",
                    border: `1px solid ${selectedFormat === f.ext ? currentGroup.color + "55" : "var(--border-subtle)"}`,
                    background: selectedFormat === f.ext ? `${currentGroup.color}12` : "var(--bg-card)",
                    transition: "all 0.2s", textAlign: "center",
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 800,
                    color: selectedFormat === f.ext ? currentGroup.color : "var(--text-primary)",
                    marginBottom: 2,
                  }}>{f.ext}</div>
                  <div style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>{f.quality}</div>
                </button>
              ))}
            </div>

            {/* Selected format info */}
            {currentFormat && (
              <div style={{
                display: "flex", alignItems: "center", gap: 10, padding: "8px 14px",
                borderRadius: 10, background: `${currentGroup?.color}0a`,
                border: `1px solid ${currentGroup?.color}22`,
              }}>
                <ChevronRight className="w-3.5 h-3.5" style={{ color: currentGroup?.color, flexShrink: 0 }} />
                <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                  <strong style={{ color: currentGroup?.color }}>{currentFormat.ext}</strong> — {currentFormat.desc} · {currentFormat.quality}
                </span>
              </div>
            )}

            {/* URL input */}
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <RefreshCw className="w-4 h-4" style={{ color: "#ff5555" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste YouTube URL to convert…"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <div className="input-actions">
                  <button className="btn-fetch" onClick={() => window.location.href = `/?url=${encodeURIComponent(url)}`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>Convert to {selectedFormat}</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="input-hint">
              Converting to: <strong style={{ color: "#ff7777" }}>{selectedFormat}</strong> · Supports videos, playlists and channels
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">8</span><span className="stat-label">Formats</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">4K</span><span className="stat-label">Max Video</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">FLAC</span><span className="stat-label">Lossless</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Free</span><span className="stat-label">Always</span></div>
          </div>

          {/* ── POPULAR CONVERSIONS ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Popular Conversions</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {conversions.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedFormat(c.to)}
                  style={{
                    padding: "12px", borderRadius: 12, cursor: "pointer",
                    border: `1px solid ${selectedFormat === c.to ? "rgba(255,0,0,0.4)" : "var(--border-subtle)"}`,
                    background: selectedFormat === c.to ? "rgba(255,0,0,0.08)" : "var(--bg-card)",
                    textAlign: "center", transition: "all 0.2s", position: "relative",
                  }}
                >
                  {c.popular && (
                    <div style={{
                      position: "absolute", top: -1, right: 8,
                      background: "#FF0000", borderRadius: "0 0 6px 6px",
                      padding: "1px 6px", fontSize: "0.5rem",
                      fontFamily: "var(--font-display)", fontWeight: 700, color: "white",
                    }}>HOT</div>
                  )}
                  <div style={{ fontSize: "1.4rem", marginBottom: 4 }}>{c.icon}</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "var(--font-display)", marginBottom: 2 }}>{c.from} →</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 800, color: "var(--text-primary)" }}>{c.to}</div>
                </button>
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
              Free YouTube Video Converter — MP4, MP3, WAV, FLAC and More
            </h2>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 10 }}>
              Our <strong style={{ color: "var(--text-primary)" }}>YouTube video converter</strong> supports 8 output formats across both video and audio categories. Convert YouTube videos to MP4 for video playback, MP3 or AAC for portable audio, or FLAC and WAV for lossless audio archiving — all from a single URL.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              No software to install, no account needed. The most versatile free <strong style={{ color: "var(--text-primary)" }}>YouTube converter online</strong> — supporting 4K video, 320 kbps MP3, and true lossless FLAC output in one unified tool.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
              {["YouTube to MP4", "YouTube to MP3", "YouTube to WAV", "YouTube to FLAC", "YouTube to WebM", "YouTube Converter Free"].map(tag => (
                <span key={tag} style={{
                  padding: "4px 12px", borderRadius: 99, fontSize: "0.7rem", fontFamily: "var(--font-display)",
                  fontWeight: 600, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.2)", color: "#ff7777",
                }}>{tag}</span>
              ))}
            </div>
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
                { label: "YouTube to MP4", href: "/youtube-to-mp4" },
                { label: "YouTube to MP3", href: "/youtube-to-mp3" },
                { label: "YouTube Music Downloader", href: "/youtube-music-downloader" },
                { label: "YouTube 4K Downloader", href: "/youtube-4k-downloader" },
                { label: "YouTube Audio Downloader", href: "/youtube-audio-downloader" },
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
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Use Only</div><p>Convert videos for personal offline use only. Do not distribute or sell converted files.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Respect Copyright</div><p>Only convert content you own or have rights to use. Music and video content is copyright protected.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Data Stored</div><p>Converted files are not stored on our servers. Downloads go directly to your device.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Videos Only</div><p>Only public YouTube videos are supported. Private and restricted content is not accessible.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with YouTube or Google. Use in compliance with YouTube's Terms of Service and applicable copyright laws.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>YouTube Video Converter</span>
          <span className="footer-sep" />
          <span>8 Formats · 4K · Free</span>
        </footer>
      </div>
    </>
  );
}