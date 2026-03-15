import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Download, Grid, Film, BookImage, Circle, Shield } from "lucide-react";

const contentTypes = [
  { icon: <Grid className="w-5 h-5" />, label: "Feed Posts", desc: "All photos and videos from the main grid", color: "#E1306C", count: "Posts" },
  { icon: <Film className="w-5 h-5" />, label: "Reels", desc: "All short-form video Reels", color: "#833AB4", count: "Reels" },
  { icon: <Circle className="w-5 h-5" />, label: "Highlights", desc: "Pinned story highlight collections", color: "#F77737", count: "Highlights" },
  { icon: <BookImage className="w-5 h-5" />, label: "IGTV Videos", desc: "Long-form IGTV content", color: "#405DE6", count: "Videos" },
];

const faqs = [
  { q: "Can I download everything from an Instagram profile at once?", a: "Yes, for public profiles. Our tool indexes all feed posts, Reels, Highlights, and IGTV videos from a profile and lets you download them individually or as a batch ZIP archive." },
  { q: "Do I need to log in to download from an Instagram profile?", a: "No login is required for public profiles. Simply paste the profile URL and browse the content. Private accounts are not accessible without the account owner's permission." },
  { q: "What file formats are downloaded from Instagram profiles?", a: "Photos are saved as JPG files in their original resolution. Videos, Reels, and IGTV are saved as MP4 files. Carousel posts are bundled as ZIP files containing all slides." },
  { q: "How many posts can I download from a profile?", a: "Our tool supports profiles with thousands of posts. There is no per-session cap on how many items you can download, though very large archives may take more time to process." },
  { q: "Can I back up my own Instagram profile?", a: "Absolutely. This is one of the most popular use cases — creators and individuals use this tool to create a complete local backup of their own public Instagram profile content." },
];

export default function InstagramProfileDownloader() {
  const [url, setUrl] = useState("");
  const [activeType, setActiveType] = useState<string>("Feed Posts");

  return (
    <>
      <Helmet>
        <title>Instagram Profile Downloader – Download All Posts from Any Instagram Profile</title>
        <meta name="description" content="Download all photos, videos, Reels, and highlights from any public Instagram profile. Free Instagram profile downloader — backup your profile or archive any creator's content." />
        <meta name="keywords" content="instagram profile downloader, download instagram profile, save all instagram posts, instagram profile backup, instagram content downloader, download all photos from instagram profile" />
        <link rel="canonical" href="https://freereelsdownloader.com/instagram-profile-downloader" />
        <meta property="og:title" content="Instagram Profile Downloader – Save All Posts & Reels Free" />
        <meta property="og:description" content="Download every post, Reel, and highlight from any public Instagram profile. Free, no login." />
        <meta property="og:url" content="https://freereelsdownloader.com/instagram-profile-downloader" />
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
                <User className="w-5 h-5" style={{ color: "#E1306C" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.75rem" }}>Instagram Profile Downloader</h1>
            <p className="logo-sub">Posts · Reels · Highlights · IGTV · Free</p>
            <p className="header-tagline">
              Download everything from any public Instagram profile — all feed posts, Reels, story highlights, and IGTV videos — in one place.
            </p>
            <div className="platform-pills">
              <span className="pill pill-ig"><span className="pill-dot" />Full Profiles</span>
              <span className="pill pill-ig"><span className="pill-dot" />Batch ZIP Export</span>
              <span className="pill pill-ig"><span className="pill-dot" />Profile Backup</span>
            </div>
          </header>

          {/* ── MOCK PROFILE CARD ── */}
          <div style={{
            width: "100%", borderRadius: 16, overflow: "hidden",
            background: "var(--bg-card)", border: "1px solid var(--border-subtle)",
            backdropFilter: "blur(20px)",
          }}>
            {/* Profile header */}
            <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, borderBottom: "1px solid var(--border-subtle)" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "var(--grad-ig)", padding: 2, flexShrink: 0,
              }}>
                <div style={{
                  width: "100%", height: "100%", borderRadius: "50%",
                  background: "var(--bg-void)", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <User className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 700, marginBottom: 2 }}>@username</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Public Profile · 247 posts · 18.4k followers</div>
              </div>
              <div style={{
                padding: "5px 14px", borderRadius: 99,
                background: "rgba(225,48,108,0.15)", border: "1px solid rgba(225,48,108,0.3)",
                fontSize: "0.65rem", fontFamily: "var(--font-display)", fontWeight: 700, color: "#E1306C",
              }}>PUBLIC</div>
            </div>

            {/* Content type selector */}
            <div style={{ display: "flex", borderBottom: "1px solid var(--border-subtle)" }}>
              {contentTypes.map(ct => (
                <button
                  key={ct.label}
                  onClick={() => setActiveType(ct.label)}
                  style={{
                    flex: 1, padding: "10px 4px", cursor: "pointer",
                    background: "transparent", border: "none",
                    borderBottom: `2px solid ${activeType === ct.label ? ct.color : "transparent"}`,
                    color: activeType === ct.label ? ct.color : "var(--text-muted)",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                    transition: "all 0.2s",
                  }}
                >
                  {ct.icon}
                  <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.06em" }}>{ct.count}</span>
                </button>
              ))}
            </div>

            {/* Fake grid preview */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, padding: 2 }}>
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: "1", borderRadius: 6,
                    background: `rgba(${i % 2 === 0 ? "225,48,108" : "131,58,180"}, ${0.04 + (i * 0.015)})`,
                    border: "1px solid var(--border-subtle)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <div style={{ width: 20, height: 20, borderRadius: 4, background: "rgba(255,255,255,0.06)" }} />
                </div>
              ))}
            </div>

            {/* Download bar */}
            <div style={{
              padding: "12px 16px", borderTop: "1px solid var(--border-subtle)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>247 posts available</span>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn-paste">Select All</button>
                <button className="btn-fetch">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download ZIP</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── INPUT ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <User className="w-4 h-4" style={{ color: "#E1306C" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste Instagram profile URL (instagram.com/username)…"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <div className="input-actions">
                  <button className="btn-fetch" onClick={() => window.location.href = `/?url=${encodeURIComponent(url)}`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>Load Profile</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="input-hint" style={{ marginTop: 8 }}>
              Format: instagram.com/username · Public profiles only
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">All</span><span className="stat-label">Content Types</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">ZIP</span><span className="stat-label">Batch Export</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">HD</span><span className="stat-label">Quality</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Free</span><span className="stat-label">No Login</span></div>
          </div>

          {/* ── CONTENT TYPES ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Supported Content Types</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {contentTypes.map((ct, i) => (
                <div key={i} className="legal-card" style={{ display: "flex", gap: 12, alignItems: "flex-start", borderLeft: `3px solid ${ct.color}33` }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: `${ct.color}15`, border: `1px solid ${ct.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", color: ct.color,
                  }}>{ct.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", fontWeight: 700, color: ct.color, marginBottom: 4 }}>{ct.label}</div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{ct.desc}</p>
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
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.83rem", fontWeight: 700, color: "#f472b6", marginBottom: 6 }}>{faq.q}</div>
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
              Instagram Profile Downloader — Complete Content Backup in One Click
            </h2>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 10 }}>
              Our <strong style={{ color: "var(--text-primary)" }}>Instagram profile downloader</strong> is the most complete tool for saving all content from any public Instagram account. It browses the profile and indexes every feed post, Reel, highlight, and IGTV video — giving you a full content inventory you can selectively download or export as a complete ZIP archive.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Ideal for creators creating a <strong style={{ color: "var(--text-primary)" }}>full Instagram backup</strong>, marketers archiving competitor content, or anyone who wants to save their favourite creator's full library. No login, no watermark, completely free.
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
                { label: "Instagram Reels Downloader", href: "/instagram-reels-downloader" },
                { label: "Instagram Highlights Downloader", href: "/instagram-highlights-downloader" },
                { label: "Instagram Carousel Downloader", href: "/instagram-carousel-downloader" },
                { label: "Instagram Video Downloader", href: "/instagram-video-downloader" },
                { label: "Instagram Stories Downloader", href: "/instagram-stories-downloader" },
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
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Backup</div><p>Backing up your own Instagram profile content is a valid and encouraged personal use of this tool.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Respect Content Ownership</div><p>Downloaded content belongs to the original creator. Do not redistribute or commercialise it without permission.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Credentials Needed</div><p>We never ask for your Instagram login. Your account and data are always safe.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Profiles Only</div><p>Only public Instagram profiles are accessible. Private accounts cannot be downloaded.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with Instagram or Meta. For personal use only. Comply with Instagram's Terms of Use and applicable copyright law.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>Instagram Profile Downloader</span>
          <span className="footer-sep" />
          <span>All Content · Free · No Login</span>
        </footer>
      </div>
    </>
  );
}