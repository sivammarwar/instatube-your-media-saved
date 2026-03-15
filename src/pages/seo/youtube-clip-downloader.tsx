import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Scissors, Download, CheckCircle, XCircle, Shield, Clock, Zap } from "lucide-react";

const comparisonData = [
  { feature: "Clip length limit", ours: "No limit", theirs: "60 sec max" },
  { feature: "Original quality", ours: "Up to 4K", theirs: "720p max" },
  { feature: "Audio extraction (MP3)", ours: true, theirs: false },
  { feature: "Login required", ours: false, theirs: true },
  { feature: "Watermark on export", ours: false, theirs: true },
  { feature: "Batch clip download", ours: true, theirs: false },
  { feature: "Custom time range trim", ours: true, theirs: false },
  { feature: "Free to use", ours: true, theirs: "Limited" },
];

const formats = [
  { label: "MP4 4K", desc: "Ultra HD, up to 3840×2160", badge: "Best Quality", color: "#FF0000" },
  { label: "MP4 1080p", desc: "Full HD, most compatible", badge: "Recommended", color: "#ff7700" },
  { label: "MP4 720p", desc: "HD, smaller file size", badge: "Balanced", color: "#FCAF45" },
  { label: "MP4 480p", desc: "Standard, fast download", badge: "Fast", color: "#833AB4" },
  { label: "MP3 320kbps", desc: "Audio only, max quality", badge: "Audio", color: "#E1306C" },
  { label: "MP3 128kbps", desc: "Audio only, small size", badge: "Light", color: "#405DE6" },
];

export default function YoutubeClipDownloader() {
  const [url, setUrl] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <>
      <Helmet>
        <title>YouTube Clip Downloader – Download YouTube Clips & Trimmed Videos Free</title>
        <meta name="description" content="Download YouTube clips and trim specific segments from any YouTube video. Save YouTube clips as MP4 or MP3. Free YouTube clip downloader — no watermark, no login." />
        <meta name="keywords" content="youtube clip downloader, download youtube clips, save youtube clip, youtube video trimmer download, youtube segment downloader, download part of youtube video" />
        <link rel="canonical" href="https://freereelsdownloader.com/youtube-clip-downloader" />
        <meta property="og:title" content="YouTube Clip Downloader – Trim & Save Any Part of a YouTube Video" />
        <meta property="og:description" content="Download specific clips or trim segments from YouTube videos. Free, no watermark, no login needed." />
        <meta property="og:url" content="https://freereelsdownloader.com/youtube-clip-downloader" />
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
                <Scissors className="w-5 h-5" style={{ color: "#ff5555" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.75rem" }}>YouTube Clip Downloader</h1>
            <p className="logo-sub">Trim · Save · No Watermark · Free</p>
            <p className="header-tagline">
              Download any YouTube clip or trim a specific time range from any video. Save the exact moment you want — not the entire upload.
            </p>
            <div className="platform-pills">
              <span className="pill pill-yt"><span className="pill-dot" />YouTube Clips</span>
              <span className="pill pill-yt"><span className="pill-dot" />Custom Time Range</span>
              <span className="pill pill-yt"><span className="pill-dot" />4K Quality</span>
            </div>
          </header>

          {/* ── INPUT CARD WITH TIME RANGE ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <Scissors className="w-4 h-4" style={{ color: "#ff5555" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste YouTube video or clip URL…"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <div className="input-actions">
                  <button className="btn-fetch" onClick={() => window.location.href = `/?url=${encodeURIComponent(url)}`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Clip</span>
                  </button>
                </div>
              </div>
              {/* Time range row */}
              <div style={{
                borderTop: "1px solid var(--border-subtle)",
                padding: "10px 16px",
                display: "flex", gap: 10, alignItems: "center",
              }}>
                <Clock className="w-3.5 h-3.5" style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.05em", flexShrink: 0 }}>TIME RANGE</span>
                <input
                  style={{
                    flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-subtle)",
                    borderRadius: 8, padding: "5px 10px", color: "var(--text-primary)",
                    fontFamily: "var(--font-body)", fontSize: "0.8rem", outline: "none",
                    minWidth: 0,
                  }}
                  placeholder="Start: 0:00"
                  value={startTime}
                  onChange={e => setStartTime(e.target.value)}
                />
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>→</span>
                <input
                  style={{
                    flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-subtle)",
                    borderRadius: 8, padding: "5px 10px", color: "var(--text-primary)",
                    fontFamily: "var(--font-body)", fontSize: "0.8rem", outline: "none",
                    minWidth: 0,
                  }}
                  placeholder="End: 1:30"
                  value={endTime}
                  onChange={e => setEndTime(e.target.value)}
                />
                <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", flexShrink: 0 }}>Optional</span>
              </div>
            </div>
            <p className="input-hint" style={{ marginTop: 8 }}>
              Supports: youtu.be/… · youtube.com/watch?v=… · youtube.com/clip/…
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">4K</span><span className="stat-label">Max Quality</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Any</span><span className="stat-label">Clip Length</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">6</span><span className="stat-label">Output Formats</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">0</span><span className="stat-label">Watermark</span></div>
          </div>

          {/* ── FORMAT GRID ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Available Download Formats</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {formats.map((f, i) => (
                <div
                  key={i}
                  className="legal-card"
                  style={{ textAlign: "center", borderColor: `${f.color}22`, cursor: "pointer" }}
                >
                  <div style={{
                    display: "inline-block", padding: "2px 8px", borderRadius: 99,
                    background: `${f.color}18`, border: `1px solid ${f.color}33`,
                    fontSize: "0.6rem", fontFamily: "var(--font-display)", fontWeight: 700,
                    color: f.color, letterSpacing: "0.06em", marginBottom: 8,
                  }}>{f.badge}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 4 }}>{f.label}</div>
                  <p style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Us vs Other YouTube Clip Tools</span>
              <div className="results-section-line" />
            </div>
            <div style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-card)", backdropFilter: "blur(20px)",
            }}>
              {/* Header row */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                padding: "10px 16px", background: "rgba(255,255,255,0.04)",
                borderBottom: "1px solid var(--border-subtle)",
              }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.08em" }}>FEATURE</span>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-display)", fontWeight: 700, color: "#ff7777", letterSpacing: "0.08em", textAlign: "center" }}>Our Tool</span>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.08em", textAlign: "center" }}>Others</span>
              </div>
              {comparisonData.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                    padding: "10px 16px",
                    borderBottom: i < comparisonData.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  }}
                >
                  <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>{row.feature}</span>
                  <div style={{ textAlign: "center" }}>
                    {typeof row.ours === "boolean"
                      ? row.ours
                        ? <CheckCircle className="w-4 h-4" style={{ color: "#4ade80", display: "inline" }} />
                        : <XCircle className="w-4 h-4" style={{ color: "#f87171", display: "inline" }} />
                      : <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#4ade80" }}>{row.ours}</span>
                    }
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {typeof row.theirs === "boolean"
                      ? row.theirs
                        ? <CheckCircle className="w-4 h-4" style={{ color: "#4ade80", display: "inline" }} />
                        : <XCircle className="w-4 h-4" style={{ color: "#f87171", display: "inline" }} />
                      : <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{row.theirs}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SEO CONTENT ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">About This Tool</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700 }}>
                Download YouTube Clips — Trim Any Video Segment Instantly
              </h2>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Our <strong style={{ color: "var(--text-primary)" }}>YouTube clip downloader</strong> lets you save any official YouTube Clip (youtube.com/clip/…) or define a custom start-to-end time range from a full video. Perfect for saving highlights, tutorials, key moments, or any specific segment without downloading the entire upload.
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Output in the original video quality — up to <strong style={{ color: "var(--text-primary)" }}>4K UHD</strong> where the source supports it — or extract just the audio as MP3 at 320 kbps. No watermark, no branding, no registration. The fastest free <strong style={{ color: "var(--text-primary)" }}>YouTube segment downloader</strong> online.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Download YouTube Clips", "YouTube Segment Saver", "Trim YouTube Video", "YouTube Timestamp Download", "Save Part of YouTube Video"].map(tag => (
                  <span key={tag} style={{
                    padding: "4px 12px", borderRadius: 99, fontSize: "0.7rem", fontFamily: "var(--font-display)",
                    fontWeight: 600, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.2)", color: "#ff7777",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Related links */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 14 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Related Tools</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "YouTube to MP4", href: "/youtube-to-mp4" },
                { label: "YouTube Shorts Downloader", href: "/youtube-shorts-downloader" },
                { label: "YouTube HD Downloader", href: "/youtube-hd-downloader" },
                { label: "YouTube 4K Downloader", href: "/youtube-4k-downloader" },
                { label: "YouTube to MP3", href: "/youtube-to-mp3" },
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
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Use Only</div><p>Download clips for personal offline use. Do not re-upload or monetize clips you do not own.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Respect Copyright</div><p>Only clip content you have permission to use. Creators retain full copyright of their videos.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Data Stored</div><p>We don't store clips or personal data on our servers. Downloads go directly to your device.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Videos Only</div><p>Only public YouTube videos can be clipped and downloaded. Private and age-restricted videos are not supported.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with YouTube or Google. Use in compliance with YouTube's Terms of Service and applicable copyright laws.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>YouTube Clip Downloader</span>
          <span className="footer-sep" />
          <span>Trim · Save · No Watermark</span>
        </footer>
      </div>
    </>
  );
}