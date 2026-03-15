import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Download, CheckCircle, AlertCircle, Info, Shield, ExternalLink } from "lucide-react";

const methods = [
  {
    title: "Method 1 — Download Your Own Saved Posts",
    badge: "Official",
    badgeColor: "#4ade80",
    steps: [
      "Go to Instagram Settings → Your Activity → Download Your Information",
      "Select 'Saved Posts' in the data categories",
      "Choose JSON or HTML format and request the export",
      "Instagram emails you a download link within 24–48 hours",
      "Download the archive and extract your saved post data",
    ],
    note: "This is Instagram's official data export. It provides a full list of saved post URLs but not the media files themselves.",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "#4ade80",
  },
  {
    title: "Method 2 — Download a Specific Saved Post",
    badge: "Fastest",
    badgeColor: "#FF0000",
    steps: [
      "Open Instagram and go to your Saved collection",
      "Tap on any saved post you want to download",
      "Tap the three-dot menu (⋯) and select 'Copy Link'",
      "Paste the link into our downloader below",
      "Download the post as MP4 (video) or JPG (photo) instantly",
    ],
    note: "Works for individual saved posts — photos, videos, Reels, and carousel posts. No login required from our tool.",
    icon: <Download className="w-5 h-5" />,
    color: "#FF0000",
  },
];

const faqs = [
  { q: "Can you download Instagram saved posts directly without copying links?", a: "Instagram's API doesn't allow third-party tools to access your private saved collection without logging in. For privacy and security, we use a copy-link method — you copy each post's link from Instagram and paste it here to download." },
  { q: "Does this tool require my Instagram password?", a: "Absolutely not. We never ask for your Instagram credentials. Sharing your password with any third-party tool is a security risk we strongly discourage." },
  { q: "What types of saved Instagram posts can I download?", a: "Any public post you've saved can be downloaded — photos, single videos, Reels, carousel posts (all slides), and IGTV videos. The post only needs to be publicly accessible." },
  { q: "Can I download saved posts from private accounts?", a: "Only if you are the account owner. Private account content is not publicly accessible, so our tool cannot fetch it. For your own private posts, use Instagram's official data export instead." },
  { q: "Why can't saved posts be downloaded directly without the link?", a: "Instagram's saved posts are stored privately in your account. Accessing them programmatically requires authentication, which we intentionally avoid to protect your account security." },
];

const alternatives = [
  { title: "Direct Post Link", desc: "Copy the exact post URL from Instagram's share menu for instant download." },
  { title: "Profile Download", desc: "If you follow the account, use our Instagram Profile Downloader to get all their content." },
  { title: "Official Export", desc: "Use Instagram's built-in data export to get a complete list of your saved posts." },
  { title: "Screen Recording", desc: "As a last resort, screen record the content you want to save for personal use." },
];

export default function InstagramSavedPostsDownloader() {
  const [url, setUrl] = useState("");

  return (
    <>
      <Helmet>
        <title>Instagram Saved Posts Downloader – How to Download Instagram Saved Posts</title>
        <meta name="description" content="Learn how to download Instagram saved posts. Copy any saved post link and download as MP4 or JPG. Free Instagram saved posts downloader — step-by-step guide, no login." />
        <meta name="keywords" content="instagram saved posts downloader, download instagram saved posts, save instagram collection, how to download saved instagram posts, instagram saved video download" />
        <link rel="canonical" href="https://freereelsdownloader.com/instagram-saved-posts-downloader" />
        <meta property="og:title" content="Instagram Saved Posts Downloader – Download Saved Posts Guide" />
        <meta property="og:description" content="How to download your Instagram saved posts. Step-by-step guide with free download tool." />
        <meta property="og:url" content="https://freereelsdownloader.com/instagram-saved-posts-downloader" />
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
                <Bookmark className="w-5 h-5" style={{ color: "#E1306C" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.7rem" }}>Instagram Saved Posts Downloader</h1>
            <p className="logo-sub">Save · Photos · Videos · Reels · Free</p>
            <p className="header-tagline">
              Download any post from your Instagram saved collection. Copy the link from any saved post and save it as MP4 or JPG — no login to our tool required.
            </p>
            <div className="platform-pills">
              <span className="pill pill-ig"><span className="pill-dot" />Saved Posts</span>
              <span className="pill pill-ig"><span className="pill-dot" />Collections</span>
              <span className="pill pill-ig"><span className="pill-dot" />Private-Safe</span>
            </div>
          </header>

          {/* ── IMPORTANT NOTICE ── */}
          <div style={{
            width: "100%", borderRadius: 14, padding: "14px 16px",
            background: "rgba(252,175,69,0.08)", border: "1px solid rgba(252,175,69,0.25)",
            display: "flex", gap: 12, alignItems: "flex-start",
          }}>
            <Info className="w-4 h-4" style={{ color: "#FCAF45", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", fontWeight: 700, color: "#FCAF45", marginBottom: 4 }}>
                How saved post downloading works
              </div>
              <p style={{ fontSize: "0.76rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Instagram keeps your saved posts private. To download them, copy the link of each post directly from Instagram (tap ⋯ → Copy Link) and paste it here. We never need your Instagram login.
              </p>
            </div>
          </div>

          {/* ── INPUT ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <Bookmark className="w-4 h-4" style={{ color: "#E1306C" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste saved post link (instagram.com/p/…)…"
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
              Paste any Instagram post URL · instagram.com/p/… · instagram.com/reel/…
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">0</span><span className="stat-label">Login Needed</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">HD</span><span className="stat-label">Quality</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Safe</span><span className="stat-label">No Password</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Free</span><span className="stat-label">Always</span></div>
          </div>

          {/* ── METHODS ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Two Ways to Download Saved Posts</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {methods.map((m, mi) => (
                <div key={mi} className="legal-card" style={{ borderLeft: `3px solid ${m.color}55` }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: `${m.color}15`, border: `1px solid ${m.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center", color: m.color, flexShrink: 0,
                    }}>{m.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700 }}>{m.title}</div>
                    </div>
                    <div style={{
                      padding: "3px 10px", borderRadius: 99, fontSize: "0.62rem",
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      background: `${m.badgeColor}18`, border: `1px solid ${m.badgeColor}33`,
                      color: m.badgeColor, flexShrink: 0,
                    }}>{m.badge}</div>
                  </div>

                  {/* Steps checklist */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {m.steps.map((step, si) => (
                      <div key={si} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{
                          width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                          background: `${m.color}15`, border: `1px solid ${m.color}30`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: "var(--font-display)", fontSize: "0.6rem", fontWeight: 800, color: m.color,
                        }}>{si + 1}</div>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.5, paddingTop: 2 }}>{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <div style={{
                    marginTop: 12, padding: "8px 12px", borderRadius: 8,
                    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-subtle)",
                    display: "flex", gap: 8, alignItems: "flex-start",
                  }}>
                    <AlertCircle className="w-3.5 h-3.5" style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: 1 }} />
                    <p style={{ fontSize: "0.73rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{m.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── ALTERNATIVES ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Alternative Download Methods</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {alternatives.map((a, i) => (
                <div key={i} className="legal-card">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", fontWeight: 700, color: "#f472b6", marginBottom: 6 }}>{a.title}</div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{a.desc}</p>
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
              How to Download Instagram Saved Posts — Complete Guide
            </h2>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 10 }}>
              Instagram doesn't have a native "download saved post" button, but there are easy workarounds. The fastest is our <strong style={{ color: "var(--text-primary)" }}>Instagram saved posts downloader</strong>: open any saved post in Instagram, copy the link, and paste it here for an instant HD download.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              For bulk downloads, Instagram's official data export gives you a complete list of saved post URLs. Combine that with our tool to systematically <strong style={{ color: "var(--text-primary)" }}>download your entire Instagram saved collection</strong> — safely, without ever sharing your password.
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
                { label: "Instagram Profile Downloader", href: "/instagram-profile-downloader" },
                { label: "Instagram Video Downloader", href: "/instagram-video-downloader" },
                { label: "Instagram Photo Downloader", href: "/instagram-photo-downloader" },
                { label: "Save Instagram Video", href: "/save-instagram-video" },
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
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Backup</div><p>Downloading your own saved posts for personal backup is completely acceptable personal use.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Respect Copyright</div><p>Downloaded content belongs to the original creator. Never redistribute without permission.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">Account Security</div><p>We never request or store your Instagram credentials. Your account security is always our priority.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Posts Only</div><p>Only publicly accessible Instagram posts can be downloaded through our tool.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with Instagram or Meta. Use responsibly and in compliance with Instagram's Terms of Use and applicable copyright laws.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>Instagram Saved Posts Downloader</span>
          <span className="footer-sep" />
          <span>Safe · No Login · Free</span>
        </footer>
      </div>
    </>
  );
}