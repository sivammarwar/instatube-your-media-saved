import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageIcon, Download, Maximize2, Shield } from "lucide-react";

const resolutions = [
  { key: "maxres", label: "4320×2160", badge: "Max Resolution", desc: "Highest quality thumbnail available", color: "#FF0000" },
  { key: "hq720", label: "1280×720", badge: "HD", desc: "Standard HD thumbnail", color: "#F77737" },
  { key: "sddefault", label: "640×480", badge: "SD", desc: "Standard definition", color: "#FCAF45" },
  { key: "hqdefault", label: "480×360", badge: "HQ", desc: "High quality default", color: "#833AB4" },
  { key: "mqdefault", label: "320×180", badge: "MQ", desc: "Medium quality", color: "#405DE6" },
  { key: "default", label: "120×90", badge: "Small", desc: "Smallest size, fastest load", color: "#E1306C" },
];

const useCases = [
  { emoji: "🎨", title: "Content Creators", desc: "Research competitor thumbnail styles to improve your own CTR strategy." },
  { emoji: "📊", title: "Marketers", desc: "Analyse what thumbnail designs drive the highest click-through rates." },
  { emoji: "🖼️", title: "Designers", desc: "Study thumbnail composition, typography, and colour use for inspiration." },
  { emoji: "📋", title: "Educators", desc: "Grab thumbnails for course materials, presentations, or blog posts (with attribution)." },
];

const faqs = [
  { q: "What sizes can I download a YouTube thumbnail in?", a: "We provide all available thumbnail resolutions: default (120×90), medium (320×180), high quality (480×360), standard definition (640×480), HD (1280×720), and max resolution (up to 4320×2160) depending on what the creator uploaded." },
  { q: "Is YouTube thumbnail downloading free?", a: "Yes, completely free with no limits. Download as many thumbnails from as many videos as you need — no account, no subscription." },
  { q: "Can I use downloaded YouTube thumbnails?", a: "Thumbnails are copyrighted by their creators. You can download them for personal reference, research, or inspiration. For commercial use, attribution or explicit permission from the creator is required." },
  { q: "Does it work with YouTube Shorts thumbnails?", a: "Yes. YouTube Shorts also have thumbnails (usually a frame from the short). Paste the Shorts URL and download the thumbnail just like a regular video." },
];

export default function YoutubeThumbnailDownloader() {
  const [url, setUrl] = useState("");
  const [selectedRes, setSelectedRes] = useState("maxres");

  return (
    <>
      <Helmet>
        <title>YouTube Thumbnail Downloader – Save YouTube Thumbnails in HD Free</title>
        <meta name="description" content="Download YouTube video thumbnails in all sizes — from 120×90 to maximum HD resolution. Free YouTube thumbnail downloader — no login, instant download, all resolutions." />
        <meta name="keywords" content="youtube thumbnail downloader, download youtube thumbnail, save youtube thumbnail, youtube thumbnail HD, youtube video thumbnail download, youtube thumbnail grabber" />
        <link rel="canonical" href="https://freereelsdownloader.com/youtube-thumbnail-downloader" />
        <meta property="og:title" content="YouTube Thumbnail Downloader – All Sizes, Free" />
        <meta property="og:description" content="Download any YouTube video thumbnail in HD or max resolution. Free, instant, no login." />
        <meta property="og:url" content="https://freereelsdownloader.com/youtube-thumbnail-downloader" />
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
                <ImageIcon className="w-5 h-5" style={{ color: "#ff5555" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.75rem" }}>YouTube Thumbnail Downloader</h1>
            <p className="logo-sub">All Sizes · HD · JPG · Free</p>
            <p className="header-tagline">
              Download any YouTube video thumbnail in every available resolution — from small icons to max HD quality. Perfect for creators, marketers, and designers.
            </p>
            <div className="platform-pills">
              <span className="pill pill-yt"><span className="pill-dot" />All Resolutions</span>
              <span className="pill pill-yt"><span className="pill-dot" />JPG Format</span>
              <span className="pill pill-yt"><span className="pill-dot" />Instant Download</span>
            </div>
          </header>

          {/* ── INPUT ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <ImageIcon className="w-4 h-4" style={{ color: "#ff5555" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste any YouTube video URL…"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <div className="input-actions">
                  <button className="btn-fetch" onClick={() => window.location.href = `/?url=${encodeURIComponent(url)}`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>Get Thumbnails</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="input-hint" style={{ marginTop: 8 }}>
              Works with: youtube.com/watch?v=… · youtu.be/… · YouTube Shorts
            </p>
          </div>

          {/* ── RESOLUTION GRID ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Available Thumbnail Resolutions</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {resolutions.map((r) => (
                <div
                  key={r.key}
                  onClick={() => setSelectedRes(r.key)}
                  className="legal-card"
                  style={{
                    cursor: "pointer", textAlign: "center",
                    borderColor: selectedRes === r.key ? `${r.color}55` : "var(--border-subtle)",
                    background: selectedRes === r.key ? `${r.color}0f` : "var(--bg-card)",
                    transition: "all 0.2s",
                  }}
                >
                  {/* Thumbnail preview mockup */}
                  <div style={{
                    width: "100%", aspectRatio: "16/9", borderRadius: 8,
                    background: selectedRes === r.key ? `${r.color}20` : "rgba(255,255,255,0.04)",
                    border: `1px solid ${selectedRes === r.key ? r.color + "44" : "var(--border-subtle)"}`,
                    marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                  }}>
                    <Maximize2 className="w-4 h-4" style={{ color: selectedRes === r.key ? r.color : "var(--text-muted)", opacity: 0.6 }} />
                  </div>
                  <div style={{
                    display: "inline-block", padding: "2px 8px", borderRadius: 99,
                    background: `${r.color}18`, border: `1px solid ${r.color}33`,
                    fontSize: "0.6rem", fontFamily: "var(--font-display)", fontWeight: 700,
                    color: r.color, letterSpacing: "0.06em", marginBottom: 6,
                  }}>{r.badge}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.78rem", fontWeight: 700, marginBottom: 2 }}>{r.label}</div>
                  <p style={{ fontSize: "0.66rem", color: "var(--text-muted)" }}>{r.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 14 }}>
              <button className="btn-fetch" style={{ margin: "0 auto" }}>
                <Download className="w-3.5 h-3.5" />
                <span>Download {resolutions.find(r => r.key === selectedRes)?.badge} Thumbnail</span>
              </button>
            </div>
          </section>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">6</span><span className="stat-label">Size Options</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">HD</span><span className="stat-label">Max Quality</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">JPG</span><span className="stat-label">Format</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Free</span><span className="stat-label">No Login</span></div>
          </div>

          {/* ── USE CASES ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Who Uses This Tool</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {useCases.map((u, i) => (
                <div key={i} className="legal-card" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>{u.emoji}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", fontWeight: 700, marginBottom: 4 }}>{u.title}</div>
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
              Free YouTube Thumbnail Downloader — Every Resolution Available
            </h2>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 10 }}>
              Our <strong style={{ color: "var(--text-primary)" }}>YouTube thumbnail downloader</strong> gives you instant access to every thumbnail resolution YouTube stores — from tiny 120×90 icons to full max-resolution HD images. Simply paste any YouTube URL and choose your preferred size.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Whether you're a content creator analysing high-CTR thumbnail strategies, a designer seeking visual inspiration, or a marketer building presentation decks — this free <strong style={{ color: "var(--text-primary)" }}>YouTube thumbnail grabber</strong> has you covered. No sign-up, no watermark, instant JPG download.
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
                { label: "YouTube Video Downloader", href: "/youtube-video-downloader" },
                { label: "YouTube to MP4", href: "/youtube-to-mp4" },
                { label: "YouTube Shorts Downloader", href: "/youtube-shorts-downloader" },
                { label: "Instagram Photo Downloader", href: "/instagram-photo-downloader" },
                { label: "YouTube HD Downloader", href: "/youtube-hd-downloader" },
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
              <div className="legal-card legal-card-green"><div className="legal-card-title">Research & Reference</div><p>Thumbnails may be downloaded for personal reference, research, or inspiration.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Creator Copyright</div><p>Thumbnails are copyrighted artwork. Commercial use requires creator permission or proper attribution.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Data Stored</div><p>We don't cache or store any thumbnail images or user data on our servers.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Videos Only</div><p>Only thumbnails from public YouTube videos are accessible.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with YouTube or Google. Thumbnails belong to their respective creators. For personal, educational, or research use only.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>YouTube Thumbnail Downloader</span>
          <span className="footer-sep" />
          <span>All Sizes · Free · No Login</span>
        </footer>
      </div>
    </>
  );
}