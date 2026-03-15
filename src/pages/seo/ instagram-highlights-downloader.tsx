import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Circle, Image, Video, Lock, Sparkles, Shield, Clock } from "lucide-react";

const highlights = [
  { label: "Travel", emoji: "✈️", count: "12 stories" },
  { label: "Food", emoji: "🍜", count: "8 stories" },
  { label: "Fitness", emoji: "💪", count: "24 stories" },
  { label: "Music", emoji: "🎵", count: "6 stories" },
];

const steps = [
  { icon: <Circle className="w-4 h-4" />, title: "Open Instagram Profile", desc: "Navigate to any public Instagram profile that has Highlights saved below the bio." },
  { icon: <Download className="w-4 h-4" />, title: "Copy Profile or Highlight URL", desc: "Tap and hold on any highlight bubble, copy the link, or copy the profile URL." },
  { icon: <Sparkles className="w-4 h-4" />, title: "Paste & Fetch", desc: "Paste the URL here and we'll show you every story inside that highlight reel." },
  { icon: <Video className="w-4 h-4" />, title: "Download Any Story", desc: "Download individual story clips as MP4 or still images as JPG — full resolution." },
];

const useCases = [
  { title: "Content Creators", desc: "Backup your own Instagram highlights before they expire or before switching accounts.", color: "#E1306C" },
  { title: "Brand Researchers", desc: "Study competitors' highlight strategies — download and analyze their story content.", color: "#833AB4" },
  { title: "Fans & Followers", desc: "Save your favourite creator's travel, cooking, or tutorial highlights for offline viewing.", color: "#F77737" },
  { title: "Archivists", desc: "Preserve cultural moments and story collections from public figures and events.", color: "#405DE6" },
];

export default function InstagramHighlightsDownloader() {
  const [url, setUrl] = useState("");
  const [activeTab, setActiveTab] = useState<"video" | "image">("video");

  return (
    <>
      <Helmet>
        <title>Instagram Highlights Downloader – Save Instagram Story Highlights Free</title>
        <meta name="description" content="Download Instagram highlights and story highlights from any public profile. Save highlight videos and photos in HD. Free Instagram highlights downloader — no login required." />
        <meta name="keywords" content="instagram highlights downloader, download instagram highlights, save instagram story highlights, instagram highlight saver, instagram highlights video download" />
        <link rel="canonical" href="https://freereelsdownloader.com/instagram-highlights-downloader" />
        <meta property="og:title" content="Instagram Highlights Downloader – Free, No Login" />
        <meta property="og:description" content="Save any Instagram highlight reel stories as MP4 or JPG. Free, fast, no account needed." />
        <meta property="og:url" content="https://freereelsdownloader.com/instagram-highlights-downloader" />
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
                <Circle className="w-5 h-5" style={{ color: "#E1306C" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.8rem" }}>Instagram Highlights Downloader</h1>
            <p className="logo-sub">Stories · Highlights · HD · Free</p>
            <p className="header-tagline">
              Download any Instagram highlight reel — videos and photos — from public profiles. No account needed. Full resolution, forever saved.
            </p>
            <div className="platform-pills">
              <span className="pill pill-ig"><span className="pill-dot" />Highlight Reels</span>
              <span className="pill pill-ig"><span className="pill-dot" />Story Videos</span>
              <span className="pill pill-ig"><span className="pill-dot" />Story Photos</span>
            </div>
          </header>

          {/* ── MOCK HIGHLIGHT BUBBLES (visual hook) ── */}
          <div style={{
            width: "100%", padding: "16px 20px", borderRadius: 16,
            background: "var(--bg-card)", border: "1px solid var(--border-subtle)",
            backdropFilter: "blur(20px)",
          }}>
            <p style={{ fontSize: "0.68rem", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>
              Example — Downloadable Highlights
            </p>
            <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 4 }}>
              {highlights.map((h) => (
                <div key={h.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "var(--grad-ig)", padding: 2,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "var(--shadow-ig)",
                  }}>
                    <div style={{
                      width: "100%", height: "100%", borderRadius: "50%",
                      background: "var(--bg-void)", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.4rem",
                    }}>{h.emoji}</div>
                  </div>
                  <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-secondary)" }}>{h.label}</span>
                  <span style={{ fontSize: "0.58rem", color: "var(--text-muted)" }}>{h.count}</span>
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "var(--border-subtle)", border: "1px dashed rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
                }}>+</div>
                <span style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>More</span>
              </div>
            </div>
          </div>

          {/* ── INPUT CARD ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>
            {/* Tab toggle */}
            <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
              {(["video", "image"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "6px 14px", borderRadius: 10, border: "1px solid",
                    fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 600,
                    cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.05em",
                    background: activeTab === tab ? "rgba(225,48,108,0.15)" : "transparent",
                    borderColor: activeTab === tab ? "rgba(225,48,108,0.4)" : "var(--border-subtle)",
                    color: activeTab === tab ? "#f472b6" : "var(--text-muted)",
                  }}
                >
                  {tab === "video" ? <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Video className="w-3 h-3" /> Videos</span>
                    : <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Image className="w-3 h-3" /> Photos</span>}
                </button>
              ))}
            </div>
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <Circle className="w-4 h-4" style={{ color: "#E1306C" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste Instagram profile or highlight URL…"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <div className="input-actions">
                  <button className="btn-fetch" onClick={() => window.location.href = `/?url=${encodeURIComponent(url)}`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="input-hint" style={{ marginTop: 8 }}>
              Works with: instagram.com/username · instagram.com/stories/highlights/ID/
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">HD</span><span className="stat-label">Resolution</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">MP4</span><span className="stat-label">Video Format</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">JPG</span><span className="stat-label">Photo Format</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Free</span><span className="stat-label">Forever</span></div>
          </div>

          {/* ── TIMELINE STEPS ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">How to Download Instagram Highlights</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 16, position: "relative" }}>
                  {/* Timeline line */}
                  {i < steps.length - 1 && (
                    <div style={{ position: "absolute", left: 17, top: 36, bottom: -4, width: 1, background: "var(--border-subtle)" }} />
                  )}
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(225,48,108,0.12)", border: "1px solid rgba(225,48,108,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#E1306C",
                    position: "relative", zIndex: 1,
                  }}>{s.icon}</div>
                  <div style={{ paddingBottom: 24, paddingTop: 6 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700, marginBottom: 4 }}>{s.title}</div>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── USE CASES ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Who Uses This Tool</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {useCases.map((u, i) => (
                <div key={i} className="legal-card" style={{ borderLeft: `3px solid ${u.color}33` }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", fontWeight: 700, color: u.color, marginBottom: 6 }}>{u.title}</div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{u.desc}</p>
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
                Free Instagram Highlights Downloader — Save Story Highlights in HD
              </h2>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Instagram highlights are curated story collections that live permanently on a profile. Our <strong style={{ color: "var(--text-primary)" }}>Instagram highlights downloader</strong> lets you save any highlight reel — including all individual story clips — as full-resolution MP4 videos or JPG photos.
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                This tool works for any <strong style={{ color: "var(--text-primary)" }}>public Instagram profile's highlights</strong>. It supports all story types: video stories, boomerangs, photo stories, and text stories. No Instagram login is required — just paste the URL and download instantly.
              </p>
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
                { label: "Instagram Reels Downloader", href: "/instagram-reels-downloader" },
                { label: "Instagram Stories Downloader", href: "/instagram-stories-downloader" },
                { label: "Instagram Video Downloader", href: "/instagram-video-downloader" },
                { label: "Save Instagram Video", href: "/save-instagram-video" },
                { label: "Instagram to MP4", href: "/instagram-to-mp4" },
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
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Use Only</div><p>Save highlights for personal offline viewing only. Do not redistribute downloaded content.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Public Profiles Only</div><p>Only highlights from public Instagram accounts are accessible. Private accounts cannot be downloaded.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Login Required</div><p>We never ask for your Instagram credentials. Your account security is always protected.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Respect Creators</div><p>Always credit original creators when sharing saved content. Respect their intellectual property rights.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with Instagram or Meta. For personal use only. Comply with Instagram's Terms of Use.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>Instagram Highlights Downloader</span>
          <span className="footer-sep" />
          <span>Free · HD · No Login</span>
        </footer>
      </div>
    </>
  );
}