import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Download, Image, Video, CheckSquare, Square, Shield } from "lucide-react";

// Mock carousel items for visual demo
const mockItems = [
  { id: 1, type: "image", emoji: "🏔️", label: "Photo 1" },
  { id: 2, type: "video", emoji: "🎬", label: "Video" },
  { id: 3, type: "image", emoji: "🌅", label: "Photo 3" },
  { id: 4, type: "image", emoji: "🌊", label: "Photo 4" },
  { id: 5, type: "image", emoji: "🌿", label: "Photo 5" },
  { id: 6, type: "video", emoji: "🎥", label: "Video 2" },
];

const faqs = [
  { q: "What is an Instagram carousel post?", a: "A carousel post on Instagram contains multiple photos or videos (up to 10) that users can swipe through. Our downloader saves every slide in the carousel as individual high-resolution files." },
  { q: "Can I download all carousel images at once?", a: "Yes. After pasting the carousel post URL, all slides are listed with checkboxes. Select individual slides or click 'Select All' to download the entire carousel as a ZIP file." },
  { q: "Does it download carousel videos too?", a: "Absolutely. Carousels can contain a mix of photos and videos. Our tool downloads both — photos as JPG and videos as MP4 — in their original uploaded quality." },
  { q: "What's the maximum number of slides I can download?", a: "Instagram allows up to 10 slides per carousel post. We support all 10 in a single download with no restrictions or limits." },
  { q: "Is there a way to download carousel posts from private accounts?", a: "No. Only public Instagram carousel posts are supported. Private account content requires the account owner's explicit permission." },
];

export default function InstagramCarouselDownloader() {
  const [url, setUrl] = useState("");
  const [selected, setSelected] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const toggleItem = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const allSelected = selected.length === mockItems.length;
  const toggleAll = () => setSelected(allSelected ? [] : mockItems.map(i => i.id));

  return (
    <>
      <Helmet>
        <title>Instagram Carousel Downloader – Download All Carousel Photos & Videos Free</title>
        <meta name="description" content="Download all photos and videos from Instagram carousel posts. Save every slide in a carousel as JPG or MP4. Free Instagram carousel downloader — no login, no watermark." />
        <meta name="keywords" content="instagram carousel downloader, download instagram carousel, save instagram carousel photos, instagram multiple photo downloader, instagram album downloader, download all instagram post images" />
        <link rel="canonical" href="https://freereelsdownloader.com/instagram-carousel-downloader" />
        <meta property="og:title" content="Instagram Carousel Downloader – Save All Slides Free" />
        <meta property="og:description" content="Download every photo and video in any Instagram carousel post. Free, no login, high resolution." />
        <meta property="og:url" content="https://freereelsdownloader.com/instagram-carousel-downloader" />
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
                <Grid className="w-5 h-5" style={{ color: "#E1306C" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.75rem" }}>Instagram Carousel Downloader</h1>
            <p className="logo-sub">All Slides · Photos + Videos · Free</p>
            <p className="header-tagline">
              Download every photo and video in an Instagram carousel post — all in one ZIP. Supports mixed photo/video carousels up to 10 slides.
            </p>
            <div className="platform-pills">
              <span className="pill pill-ig"><span className="pill-dot" />Carousel Posts</span>
              <span className="pill pill-ig"><span className="pill-dot" />Up to 10 Slides</span>
              <span className="pill pill-ig"><span className="pill-dot" />ZIP Download</span>
            </div>
          </header>

          {/* ── INPUT ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <Grid className="w-4 h-4" style={{ color: "#E1306C" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste Instagram carousel post URL…"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <div className="input-actions">
                  <button className="btn-fetch" onClick={() => window.location.href = `/?url=${encodeURIComponent(url)}`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>Load Carousel</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="input-hint" style={{ marginTop: 8 }}>
              Format: instagram.com/p/POST_ID/ · Carousel posts with multiple slides only
            </p>
          </div>

          {/* ── MOCK CAROUSEL GRID (visual demo) ── */}
          <div style={{
            width: "100%", borderRadius: 16, overflow: "hidden",
            border: "1px solid var(--border-subtle)", background: "var(--bg-card)",
            backdropFilter: "blur(20px)",
          }}>
            {/* Header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 16px", borderBottom: "1px solid var(--border-subtle)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Grid className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  Carousel Preview — 6 Slides
                </span>
              </div>
              <button
                onClick={toggleAll}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "transparent", border: "1px solid var(--border-subtle)",
                  borderRadius: 8, padding: "5px 10px", cursor: "pointer",
                  fontFamily: "var(--font-display)", fontSize: "0.68rem", fontWeight: 600,
                  color: allSelected ? "#E1306C" : "var(--text-muted)",
                  transition: "all 0.2s",
                }}
              >
                {allSelected ? <CheckSquare className="w-3 h-3" /> : <Square className="w-3 h-3" />}
                {allSelected ? "Deselect All" : "Select All"}
              </button>
            </div>

            {/* Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, padding: 2 }}>
              {mockItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  style={{
                    aspectRatio: "1", position: "relative", cursor: "pointer",
                    background: selected.includes(item.id) ? "rgba(225,48,108,0.1)" : "rgba(255,255,255,0.03)",
                    borderRadius: 8, display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 4,
                    border: `2px solid ${selected.includes(item.id) ? "rgba(225,48,108,0.5)" : "transparent"}`,
                    transition: "all 0.2s",
                  }}
                >
                  <span style={{ fontSize: "1.8rem" }}>{item.emoji}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    {item.type === "video"
                      ? <Video className="w-2.5 h-2.5" style={{ color: "#E1306C" }} />
                      : <Image className="w-2.5 h-2.5" style={{ color: "var(--text-muted)" }} />}
                    <span style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>{item.label}</span>
                  </div>
                  {/* Selection indicator */}
                  <div style={{
                    position: "absolute", top: 6, right: 6,
                    width: 18, height: 18, borderRadius: "50%",
                    background: selected.includes(item.id) ? "rgba(225,48,108,0.9)" : "rgba(255,255,255,0.1)",
                    border: "1px solid " + (selected.includes(item.id) ? "#E1306C" : "rgba(255,255,255,0.2)"),
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                  }}>
                    {selected.includes(item.id) && <span style={{ color: "white", fontSize: "0.55rem", fontWeight: 800 }}>✓</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Download bar */}
            <div style={{
              padding: "12px 16px", borderTop: "1px solid var(--border-subtle)",
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
            }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>{selected.length}</strong> of {mockItems.length} slides selected
              </span>
              <button className="btn-fetch" style={{ opacity: selected.length === 0 ? 0.4 : 1 }}>
                <Download className="w-3.5 h-3.5" />
                <span>Download {selected.length > 1 ? "as ZIP" : "Slide"}</span>
              </button>
            </div>
          </div>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">10</span><span className="stat-label">Max Slides</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">ZIP</span><span className="stat-label">Batch Export</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">HD</span><span className="stat-label">Resolution</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Free</span><span className="stat-label">No Login</span></div>
          </div>

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
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700 }}>
                Instagram Carousel Downloader — Save All Slides at Once
              </h2>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Instagram carousel posts contain up to 10 swipeable photos and videos. Standard downloaders only grab the first slide — our <strong style={{ color: "var(--text-primary)" }}>Instagram carousel downloader</strong> fetches every single slide and lets you select exactly which ones to save, then bundles them into a convenient ZIP file.
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Works with mixed carousels containing both photos (JPG) and videos (MP4). All files are saved at the original uploaded resolution — no compression, no quality loss. The fastest free <strong style={{ color: "var(--text-primary)" }}>Instagram album downloader</strong> available online.
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
                { label: "Instagram Photo Downloader", href: "/instagram-photo-downloader" },
                { label: "Instagram Video Downloader", href: "/instagram-video-downloader" },
                { label: "Instagram Reels Downloader", href: "/instagram-reels-downloader" },
                { label: "Instagram Stories Downloader", href: "/instagram-stories-downloader" },
                { label: "Download Reels Without Watermark", href: "/download-reels-without-watermark" },
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
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Use Only</div><p>Download carousel content for personal offline use only.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Respect Copyright</div><p>Images and videos in carousels belong to their creators. Always credit the original author.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Login Required</div><p>We never request your Instagram credentials. Your account stays completely secure.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Posts Only</div><p>Only public Instagram carousel posts are accessible with this tool.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with Instagram or Meta. Use responsibly and in accordance with Instagram's Terms of Use.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>Instagram Carousel Downloader</span>
          <span className="footer-sep" />
          <span>All Slides · ZIP · Free</span>
        </footer>
      </div>
    </>
  );
}