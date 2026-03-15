import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Download, Play, List, Zap, Shield, Star, CheckCircle } from "lucide-react";

const faqs = [
  {
    q: "Can I download all videos from a YouTube channel at once?",
    a: "Yes. Paste the channel URL (e.g. youtube.com/@channelname or youtube.com/c/channelname) and our tool will list all public videos. You can select individual clips or queue the entire channel for batch download.",
  },
  {
    q: "What video qualities are available for channel downloads?",
    a: "We support 144p, 360p, 480p, 720p HD, 1080p Full HD, 1440p QHD, and 4K UHD where available. Audio-only MP3 extraction at 128 kbps or 320 kbps is also supported for any video.",
  },
  {
    q: "Is there a limit to how many videos I can download from a channel?",
    a: "Our free tier allows unlimited downloads of public YouTube channel videos. No account, no subscription, no daily cap. Large channels with thousands of videos are fully supported.",
  },
  {
    q: "Does it work with YouTube handle URLs like @username?",
    a: "Absolutely. We support all YouTube channel URL formats: /c/name, /user/name, /@handle, and direct channel IDs starting with UC.",
  },
  {
    q: "Can I download YouTube channel playlists too?",
    a: "Yes — any playlist within a channel is downloadable. Paste the playlist URL directly or browse playlists from the channel overview page within our tool.",
  },
  {
    q: "Will downloads include subtitles or closed captions?",
    a: "Subtitle download is optional. Enable the 'Include Subtitles' toggle before downloading to get .srt or .vtt caption files bundled with your video.",
  },
];

const steps = [
  { num: "01", title: "Copy Channel URL", desc: "Go to any YouTube channel page and copy the URL from your browser's address bar." },
  { num: "02", title: "Paste & Analyze", desc: "Paste the URL into the input above. We'll scan the channel and list all available public videos instantly." },
  { num: "03", title: "Select Videos", desc: "Choose individual videos, select by date range, or click 'Download All' to queue the entire channel." },
  { num: "04", title: "Pick Format & Download", desc: "Choose your quality — MP4 up to 4K or MP3 audio — then click Download to save directly to your device." },
];

const features = [
  { icon: <List className="w-5 h-5" />, title: "Full Channel Scan", desc: "Indexes every public video in a channel, including unlisted-but-linked ones." },
  { icon: <Zap className="w-5 h-5" />, title: "Batch Download", desc: "Queue hundreds of videos in one click — no tedious one-by-one downloading." },
  { icon: <Shield className="w-5 h-5" />, title: "No Watermark", desc: "Original clean MP4 files, exactly as uploaded by the creator." },
  { icon: <Star className="w-5 h-5" />, title: "4K Supported", desc: "Download in the highest resolution the channel offers, up to 4K UHD." },
];

export default function YoutubeChannelDownloader() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [url, setUrl] = useState("");

  return (
    <>
      <Helmet>
        <title>YouTube Channel Downloader – Download All Videos From Any Channel Free</title>
        <meta name="description" content="Download all videos from any YouTube channel at once. Supports batch download, 4K quality, MP3 audio extraction. No login required — free YouTube channel downloader online." />
        <meta name="keywords" content="youtube channel downloader, download all youtube videos from channel, batch youtube downloader, youtube channel to mp4, youtube channel video download" />
        <link rel="canonical" href="https://freereelsdownloader.com/youtube-channel-downloader" />
        <meta property="og:title" content="YouTube Channel Downloader – Batch Download Any Channel Free" />
        <meta property="og:description" content="Download all videos from any YouTube channel instantly. Free, fast, no login needed." />
        <meta property="og:url" content="https://freereelsdownloader.com/youtube-channel-downloader" />
      </Helmet>

      <div className="page-root">
        {/* Background shafts */}
        <div className="light-shaft shaft-1" />
        <div className="light-shaft shaft-2" />
        <div className="light-shaft shaft-3" />

        <main className="page-main" style={{ maxWidth: 680 }}>

          {/* ── HERO ── */}
          <header className="header-area fade-up">
            <div className="logo-orb">
              <div className="logo-orb-inner">
                <Play className="w-6 h-6" style={{ color: "#ff5555" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.9rem" }}>YouTube Channel Downloader</h1>
            <p className="logo-sub">Batch · HD · Free · No Login</p>
            <p className="header-tagline">
              Download every video from any YouTube channel in one go. Supports 4K, MP3 extraction, playlists, and full channel archives — completely free.
            </p>
            <div className="platform-pills">
              <span className="pill pill-yt"><span className="pill-dot" />YouTube Channels</span>
              <span className="pill pill-yt"><span className="pill-dot" />Playlists</span>
              <span className="pill pill-yt"><span className="pill-dot" />Batch Download</span>
            </div>
          </header>

          {/* ── INPUT CARD ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>
            <div className="input-shell" style={{ borderRadius: 18 }}>
              <div className="input-row">
                <span className="input-leading-icon">
                  <Play className="w-4 h-4" style={{ color: "#ff5555" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste YouTube channel or playlist URL…"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                />
                <div className="input-actions">
                  <button className="btn-fetch" onClick={() => window.location.href = `/?url=${encodeURIComponent(url)}`}>
                    <Download className="w-3.5 h-3.5" />
                    <span>Analyze Channel</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="input-hint" style={{ marginTop: 8 }}>
              Supports: youtube.com/@handle · /c/channel · /user/name · playlist URLs
            </p>
          </div>

          {/* ── STATS BAR ── */}
          <div className="stats-bar fade-up fade-up-2">
            <div className="stat-item"><span className="stat-value">4K</span><span className="stat-label">Max Quality</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">∞</span><span className="stat-label">Videos/Channel</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">0</span><span className="stat-label">Login Needed</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">MP3</span><span className="stat-label">Audio Extract</span></div>
          </div>

          {/* ── HOW IT WORKS ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">How It Works</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {steps.map((s) => (
                <div key={s.num} className="legal-card" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 800,
                    background: "var(--grad-yt)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text", lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>{s.title}</div>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FEATURES GRID ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Features</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {features.map((f, i) => (
                <div key={i} className="legal-card" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: "rgba(255,0,0,0.12)", border: "1px solid rgba(255,0,0,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#ff5555",
                  }}>{f.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", fontWeight: 700, marginBottom: 4 }}>{f.title}</div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ACCORDION ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Frequently Asked Questions</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="legal-card"
                  style={{
                    cursor: "pointer",
                    borderColor: openFaq === i ? "rgba(255,0,0,0.3)" : "var(--border-subtle)",
                    transition: "all 0.25s",
                  }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.84rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="w-4 h-4"
                      style={{
                        flexShrink: 0, color: "var(--text-muted)",
                        transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s",
                      }}
                    />
                  </div>
                  {openFaq === i && (
                    <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--border-subtle)" }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── SEO CONTENT ── */}
          <section className="legal-section" style={{ padding: "40px 0 0", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                The Best Free YouTube Channel Downloader Online
              </h2>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Whether you're archiving a creator's entire library, building an offline learning resource, or backing up your own channel — our <strong style={{ color: "var(--text-primary)" }}>YouTube channel downloader</strong> handles it all without any software installation. Simply paste any YouTube channel URL, browse the video list, and choose your preferred format.
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Unlike single-video tools, this dedicated <strong style={{ color: "var(--text-primary)" }}>batch YouTube downloader</strong> lets you download multiple videos simultaneously. Select by date range, filter by duration, or grab everything in one queue. Supports <strong style={{ color: "var(--text-primary)" }}>4K UHD, 1080p Full HD</strong>, and MP3 audio extraction at up to 320 kbps — all completely free and without requiring any login.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                {["YouTube Batch Downloader", "Channel Archive Tool", "4K YouTube Downloader", "YouTube Playlist Saver", "MP3 from YouTube Channel"].map(tag => (
                  <span key={tag} style={{
                    padding: "4px 12px", borderRadius: 99, fontSize: "0.7rem", fontFamily: "var(--font-display)",
                    fontWeight: 600, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.2)", color: "#ff7777",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ── RELATED LINKS ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 16 }}>
              <div className="results-section-line" />
              <span className="results-section-text">Related Tools</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "YouTube to MP4", href: "/youtube-to-mp4" },
                { label: "YouTube to MP3", href: "/youtube-to-mp3" },
                { label: "YouTube HD Downloader", href: "/youtube-hd-downloader" },
                { label: "YouTube Playlist Downloader", href: "/youtube-playlist-downloader" },
                { label: "YouTube 4K Downloader", href: "/youtube-4k-downloader" },
              ].map(l => (
                <Link key={l.href} to={l.href} className="btn-paste" style={{ textDecoration: "none", fontSize: "0.72rem" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

        </main>

        {/* Legal */}
        <section className="legal-section">
          <div className="legal-inner">
            <h2 className="legal-title"><span className="legal-title-icon"><Shield className="w-3.5 h-3.5" /></span>Terms & Fair Use</h2>
            <div className="legal-grid">
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Use Only</div><p>Download channel videos for offline personal viewing only. Redistribution or re-upload of downloaded content is not permitted.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Respect Copyright</div><p>Only download content you own or have explicit permission to save. Respect YouTube's Terms of Service and creators' rights.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Data Stored</div><p>We do not store video files or user data on our servers. All downloads stream directly to your device.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Videos Only</div><p>Only publicly accessible YouTube videos can be downloaded. Private or members-only content is not supported.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> This tool is not affiliated with YouTube or Google. Use responsibly and in accordance with YouTube's Terms of Service and applicable copyright law.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>YouTube Channel Downloader</span>
          <span className="footer-sep" />
          <span>Free · No Login · No Watermark</span>
        </footer>
      </div>
    </>
  );
}