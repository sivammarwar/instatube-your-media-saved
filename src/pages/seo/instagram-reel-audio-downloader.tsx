import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Music2, Download, Headphones, Radio, Shield } from "lucide-react";

const steps = [
  { step: "1", title: "Find Your Reel", desc: "Open Instagram and find the Reel with the audio you want to save." },
  { step: "2", title: "Tap Share → Copy Link", desc: "Tap the share button on the Reel and select 'Copy Link'." },
  { step: "3", title: "Paste the URL Here", desc: "Come back here and paste the link into the input field above." },
  { step: "4", title: "Download as MP3", desc: "Click Download and your MP3 file saves to your device instantly." },
];

const useCases = [
  { icon: "🎵", title: "Viral Sounds", desc: "Save trending audio clips from viral Reels before they disappear." },
  { icon: "🎙️", title: "Voiceovers", desc: "Extract voiceover narrations from educational or tutorial Reels." },
  { icon: "🎧", title: "Background Music", desc: "Save background tracks used in Reels for your own creative projects." },
  { icon: "📣", title: "Brand Audio", desc: "Download audio branding or jingles from brand Reels for analysis." },
  { icon: "🎤", title: "Artist Previews", desc: "Save music previews from artist Reels before the full release drops." },
  { icon: "📖", title: "Audio Learning", desc: "Extract spoken content from educational Reels for offline study." },
];

const faqs = [
  { q: "Can I download audio from any Instagram Reel?", a: "Yes, from any public Instagram Reel. The audio is extracted and saved as an MP3 file directly to your device. Private Reels require the account to be public." },
  { q: "What quality is the extracted MP3 from Instagram Reels?", a: "The MP3 quality depends on the original Reel upload. Instagram uses AAC encoding for audio; we convert to the highest possible MP3 bitrate (up to 320 kbps) from the source." },
  { q: "Is this different from saving the full Reel video?", a: "Yes. This tool extracts only the audio track as an MP3 file — no video, just the sound. If you want the full Reel video, use our Instagram Reels Downloader instead." },
  { q: "Can I use downloaded Reel audio in my own content?", a: "Only if you have the rights to use that audio. Many Reels use licensed music — always check the original music's license before using it in your own published content." },
];

export default function InstagramReelToMp3Audio() {
  const [url, setUrl] = useState("");

  // Fake animated waveform bars
  const bars = Array.from({ length: 40 }, (_, i) => ({
    height: Math.sin(i * 0.5) * 40 + Math.random() * 20 + 10,
    delay: i * 0.05,
  }));

  return (
    <>
      <Helmet>
        <title>Instagram Reel to MP3 – Download Instagram Reel Audio Free</title>
        <meta name="description" content="Extract and download audio from Instagram Reels as MP3. Save any Reel's sound, music, or voiceover as an MP3 file. Free Instagram Reel audio downloader — no login required." />
        <meta name="keywords" content="instagram reel to mp3, download instagram reel audio, instagram reel audio downloader, extract audio from instagram reel, save instagram reel sound, instagram reel mp3" />
        <link rel="canonical" href="https://freereelsdownloader.com/instagram-reel-audio-downloader" />
        <meta property="og:title" content="Instagram Reel to MP3 – Save Reel Audio Free" />
        <meta property="og:description" content="Download the audio from any Instagram Reel as MP3. Free, fast, no login needed." />
        <meta property="og:url" content="https://freereelsdownloader.com/instagram-reel-audio-downloader" />
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
                <Music2 className="w-5 h-5" style={{ color: "#E1306C" }} />
              </div>
            </div>
            <h1 className="logo-text" style={{ fontSize: "1.8rem" }}>Instagram Reel to MP3</h1>
            <p className="logo-sub">Audio Extract · MP3 · Free · No Login</p>
            <p className="header-tagline">
              Extract and save the audio from any Instagram Reel as a high-quality MP3. Save trending sounds, music previews, or voiceovers in seconds.
            </p>
            <div className="platform-pills">
              <span className="pill pill-ig"><span className="pill-dot" />Reel Audio</span>
              <span className="pill pill-ig"><span className="pill-dot" />MP3 Output</span>
              <span className="pill pill-ig"><span className="pill-dot" />Trending Sounds</span>
            </div>
          </header>

          {/* ── ANIMATED WAVEFORM VISUAL ── */}
          <div style={{
            width: "100%", borderRadius: 16, padding: "20px",
            background: "var(--bg-card)", border: "1px solid var(--border-subtle)",
            backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", gap: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--grad-ig)", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Music2 className="w-4 h-4" style={{ color: "white" }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", fontWeight: 700 }}>Reel Audio Preview</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>MP3 · Up to 320 kbps · Ready to Download</div>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <div style={{
                  padding: "4px 12px", borderRadius: 99,
                  background: "rgba(225,48,108,0.15)", border: "1px solid rgba(225,48,108,0.3)",
                  fontSize: "0.65rem", fontFamily: "var(--font-display)", fontWeight: 700, color: "#E1306C",
                }}>AUDIO ONLY</div>
              </div>
            </div>

            {/* Waveform */}
            <div style={{ display: "flex", alignItems: "center", gap: 2, height: 60, overflow: "hidden" }}>
              {bars.map((bar, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1, borderRadius: 2,
                    background: `linear-gradient(to top, #E1306C, #833AB4)`,
                    height: `${bar.height}%`,
                    opacity: 0.7,
                    animation: `waveBar 1.2s ease-in-out ${bar.delay}s infinite alternate`,
                  }}
                />
              ))}
              <style>{`
                @keyframes waveBar {
                  from { transform: scaleY(0.4); opacity: 0.5; }
                  to   { transform: scaleY(1); opacity: 0.9; }
                }
              `}</style>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>0:00</span>
              <div style={{ flex: 1, height: 2, background: "var(--border-subtle)", margin: "0 10px", borderRadius: 1, position: "relative" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "35%", background: "var(--grad-ig)", borderRadius: 1 }} />
              </div>
              <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>0:30</span>
            </div>
          </div>

          {/* ── INPUT ── */}
          <div className="tilt-card fade-up fade-up-1" style={{ width: "100%" }}>
            <div className="input-shell">
              <div className="input-row">
                <span className="input-leading-icon">
                  <Music2 className="w-4 h-4" style={{ color: "#E1306C" }} />
                </span>
                <input
                  className="input-field"
                  placeholder="Paste Instagram Reel URL to extract audio…"
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
              instagram.com/reel/… · Outputs audio-only MP3 file
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="stats-bar">
            <div className="stat-item"><span className="stat-value">MP3</span><span className="stat-label">Format</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">320</span><span className="stat-label">Max kbps</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">0</span><span className="stat-label">Login Needed</span></div>
            <div className="stat-divider" />
            <div className="stat-item"><span className="stat-value">Free</span><span className="stat-label">Always</span></div>
          </div>

          {/* ── HOW IT WORKS ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">How to Extract Reel Audio</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {steps.map((s) => (
                <div key={s.step} className="legal-card" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: "var(--grad-ig)", display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.78rem", color: "white",
                  }}>{s.step}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.82rem", fontWeight: 700, marginBottom: 4 }}>{s.title}</div>
                    <p style={{ fontSize: "0.74rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── USE CASES ── */}
          <section style={{ width: "100%" }}>
            <div className="results-section-label" style={{ marginBottom: 20 }}>
              <div className="results-section-line" />
              <span className="results-section-text">What People Download</span>
              <div className="results-section-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {useCases.map((u, i) => (
                <div key={i} className="legal-card" style={{ textAlign: "center", padding: "14px 12px" }}>
                  <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>{u.icon}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.78rem", fontWeight: 700, marginBottom: 4 }}>{u.title}</div>
                  <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{u.desc}</p>
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
              Instagram Reel Audio Downloader — Extract MP3 From Any Reel
            </h2>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 10 }}>
              Instagram Reels often contain music, trending sounds, and original audio that you can't easily save. Our <strong style={{ color: "var(--text-primary)" }}>Instagram Reel to MP3</strong> tool strips the audio track from any public Reel and delivers it as a clean MP3 file — perfect for offline listening, sampling, or studying trending audio.
            </p>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              No video, no watermark — just the pure audio extracted at the highest possible quality. This is the most direct way to <strong style={{ color: "var(--text-primary)" }}>download Instagram Reel audio</strong> without any apps or extensions.
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
                { label: "Instagram Reel to MP3", href: "/instagram-reel-to-mp3" },
                { label: "Instagram Video to MP4", href: "/instagram-video-to-mp4" },
                { label: "YouTube to MP3", href: "/youtube-to-mp3" },
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
              <div className="legal-card legal-card-green"><div className="legal-card-title">Personal Use Only</div><p>Download Reel audio for personal offline listening only. Do not re-publish or monetize extracted audio.</p></div>
              <div className="legal-card legal-card-amber"><div className="legal-card-title">Music Licensing</div><p>Many Reels use licensed music. Respect music copyright laws before using extracted audio in your own content.</p></div>
              <div className="legal-card legal-card-blue"><div className="legal-card-title">No Data Stored</div><p>Audio files are not retained on our servers. All downloads go directly to your device.</p></div>
              <div className="legal-card legal-card-red"><div className="legal-card-title">Public Reels Only</div><p>Only public Instagram Reels are supported. Private account content is inaccessible.</p></div>
            </div>
            <p className="legal-disclaimer"><strong>Disclaimer:</strong> Not affiliated with Instagram or Meta. Use responsibly and in compliance with Instagram's Terms of Use and applicable music copyright laws.</p>
          </div>
        </section>

        <footer className="page-footer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>FreeReelsDownloader</Link>
          <span className="footer-sep" />
          <span>Instagram Reel to MP3</span>
          <span className="footer-sep" />
          <span>Audio Extract · Free · No Login</span>
        </footer>
      </div>
    </>
  );
}