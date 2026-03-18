import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/Downloadengine";

const contentTypes = [
  { type: "Reels",           icon: "🎬", desc: "Short-form vertical videos up to 90 seconds" },
  { type: "IGTV Videos",    icon: "📺", desc: "Long-form videos up to 60 minutes"            },
  { type: "Stories",        icon: "⭕", desc: "Disappearing 24-hour content"                  },
  { type: "Carousels",      icon: "🎠", desc: "Multi-image and mixed media posts"             },
  { type: "Highlights",     icon: "⭐", desc: "Saved story collections on profiles"           },
  { type: "Single Posts",   icon: "📸", desc: "Photo and video posts on the feed"            },
];

const trending2025 = [
  "Instagram Reels download HD",
  "Save Instagram Reels to Camera Roll",
  "Instagram Reel downloader no watermark",
  "Download Instagram Reels iPhone",
  "Instagram Reel downloader without app",
  "Best Instagram downloader 2025",
  "Instagram video save online",
  "Download Instagram Reels free",
];

const faqs = [
  { q: "What is the easiest way to download Instagram Reels online?", a: "Paste the Reel URL into the tool above and click Fetch. All available quality options appear instantly — select your preferred one and download. Done in under 10 seconds." },
  { q: "Can I download Instagram Reels on my phone without an app?", a: "Yes. Open your phone's browser, visit this page, paste the Instagram Reel link, and download directly. The video saves to your phone's gallery automatically." },
  { q: "How do I save Instagram Reels to my camera roll?", a: "After downloading the Reel using our tool, the MP4 file will appear in your Downloads folder or Photos app depending on your device." },
  { q: "Does this work for all Instagram content types?", a: "Our tool supports public Instagram Reels, feed videos, IGTV content, story highlights, carousel posts, and single photo/video posts." },
  { q: "Is downloading Instagram Reels for personal use allowed?", a: "Downloading for personal viewing is widely considered acceptable. Re-uploading or commercially using someone else's content without permission is a violation of copyright. Always credit original creators." },
];

export default function DownloadInstagramReelsOnline() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Download Instagram Reels Online — Save Reels Free No Watermark 2025</title>
        <meta name="description" content="Download Instagram Reels online free — no watermark, no app, no login. Save Instagram Reels to your phone or PC in HD quality. Works on iPhone, Android, and desktop browsers." />
        <meta name="keywords" content="download instagram reels online, save instagram reels, instagram reels downloader no watermark, download reels to camera roll, instagram reel download free, save instagram video online, instagram reel saver" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/download-instagram-reels-online" />
      </Helmet>

      <div style={{ background: "#070709", minHeight: "100vh", color: "#fff", fontFamily: "'Georgia', 'Times New Roman', serif" }}>

        {/* ── Editorial Header ── */}
        <header style={{ borderBottom: "2px solid #E1306C", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 13, fontFamily: "system-ui", color: "#6b7280", letterSpacing: 2, textTransform: "uppercase" }}>FreeReelsDownloader.com</div>
          <div style={{ fontFamily: "system-ui", fontSize: 12, color: "#6b7280" }}>Instagram Tools · 2025</div>
        </header>

        {/* ── Magazine-style Hero ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "system-ui", fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#E1306C", textTransform: "uppercase", marginBottom: 20 }}>✦ Instagram Downloader</div>
            <h1 style={{ fontSize: "clamp(2.2rem,4vw,3.8rem)", fontWeight: 400, lineHeight: 1.2, margin: "0 0 24px", fontStyle: "italic" }}>
              Download Instagram<br />
              <em style={{ fontStyle: "normal", fontWeight: 700, color: "#E1306C" }}>Reels Online</em><br />
              Free & Without<br />Watermark
            </h1>
            <p style={{ color: "#9ca3af", fontSize: 17, lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui" }}>The cleanest way to save any Instagram Reel, story, or video to your device — directly in your browser. No app, no account, no watermarks.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {["No Watermark", "HD Quality", "Free Forever", "All Devices"].map((tag) => (
                <span key={tag} style={{ fontFamily: "system-ui", fontSize: 12, fontWeight: 700, letterSpacing: 1, border: "1px solid rgba(225,48,108,0.4)", borderRadius: 20, padding: "5px 14px", color: "#E1306C" }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Engine Panel */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "36px 32px" }}>
            <div style={{ fontFamily: "system-ui", fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#6b7280", textTransform: "uppercase", marginBottom: 20 }}>Paste your Instagram link</div>
            <DownloadEngine platformHint="instagram" />
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {["✓ No watermark added", "✓ Original HD quality", "✓ Works on iPhone & Android", "✓ Completely free"].map((f) => (
                <div key={f} style={{ fontFamily: "system-ui", fontSize: 13, color: "#6b7280" }}>{f}</div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", maxWidth: 1100, margin: "0 auto" }} />

        {/* ── Content Types ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, marginBottom: 40, textTransform: "uppercase", letterSpacing: 1 }}>What Can You Download?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
            {contentTypes.map((c, i) => (
              <div key={c.type} style={{ padding: "28px 24px", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.08)", borderRight: i % 3 !== 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{c.type}</div>
                <div style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.6, fontFamily: "system-ui" }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", maxWidth: 1100, margin: "0 auto" }} />

        {/* ── Trending ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 800, marginBottom: 28, textTransform: "uppercase", letterSpacing: 1 }}>Trending Searches — 2025</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {trending2025.map((t) => (
              <span key={t} style={{ fontFamily: "system-ui", fontSize: 13, background: "rgba(225,48,108,0.08)", border: "1px solid rgba(225,48,108,0.2)", borderRadius: 20, padding: "7px 16px", color: "#d1d5db" }}>🔍 {t}</span>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, marginBottom: 40, textTransform: "uppercase", letterSpacing: 1 }}>FAQ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ background: "none", border: "none", padding: 0, textAlign: "left", cursor: "pointer", width: "100%" }}>
                  <div style={{ fontFamily: "system-ui", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 10, display: "flex", justifyContent: "space-between", gap: 12 }}>
                    {f.q}<span style={{ color: "#E1306C", flexShrink: 0 }}>{openFaq === i ? "−" : "+"}</span>
                  </div>
                </button>
                {openFaq === i && <p style={{ color: "#9ca3af", lineHeight: 1.75, fontSize: 14, fontFamily: "system-ui", margin: 0 }}>{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ── SEO Article ── */}
        <section style={{ borderTop: "2px solid #E1306C", maxWidth: 700, margin: "0 auto", padding: "60px 24px 80px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 400, fontStyle: "italic", marginBottom: 24, lineHeight: 1.3 }}>The Definitive Guide to Downloading Instagram Reels Online in 2025</h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.9, fontSize: 15, fontFamily: "system-ui", marginBottom: 18 }}>Instagram Reels have become the platform's dominant content format. But Instagram doesn't provide a native download option for content you don't own. Our <strong style={{ color: "#fff" }}>Instagram Reels online downloader</strong> solves this — paste any public Reel URL, choose your quality, and download a watermark-free MP4 in seconds.</p>
          <p style={{ color: "#9ca3af", lineHeight: 1.9, fontSize: 15, fontFamily: "system-ui" }}>Whether you're an iPhone user saving to your camera roll or a PC user managing content, this <strong style={{ color: "#fff" }}>free Instagram downloader</strong> handles it all in 2025.</p>
        </section>
      </div>
    </>
  );
}