import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/Downloadengine";

const qualityOptions = [
  { label: "Full HD", res: "1080p", fps: "30fps", tag: "RECOMMENDED" },
  { label: "HD Ready", res: "720p", fps: "30fps", tag: null },
  { label: "SD", res: "480p", fps: "30fps", tag: null },
  { label: "Low", res: "360p", fps: "30fps", tag: "FASTEST" },
];

export default function InstagramHdVideoDownloader() {
  const [quality, setQuality] = useState(0);

  return (
    <>
      <Helmet>
        <title>Instagram HD Video Downloader – Download Instagram Videos in HD Quality</title>
        <meta name="description" content="Download Instagram videos in full HD quality. Save Instagram reels, posts and stories in 1080p HD without watermark. Free Instagram HD video downloader online." />
        <meta name="keywords" content="instagram hd video downloader, download instagram videos hd, instagram 1080p downloader, save instagram videos hd quality, instagram video hd download free" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/instagram-hd-video-downloader" />
      </Helmet>

      <div style={{ fontFamily: "'Manrope', 'Inter', sans-serif", background: "#050608", minHeight: "100vh", color: "#fff" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
          @keyframes gradMove { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
          .hd-badge { background: linear-gradient(135deg, #E1306C, #833AB4, #FCAF45); background-size: 200%; animation: gradMove 3s linear infinite alternate; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
          .quality-btn { border: 1.5px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px 20px; cursor: pointer; transition: all 0.2s; background: transparent; text-align: left; position: relative; }
          .quality-btn:hover { border-color: rgba(225,48,108,0.3); background: rgba(225,48,108,0.04); }
          .quality-btn.selected { border-color: #E1306C; background: rgba(225,48,108,0.08); }
          .stat-card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; text-align: center; }
          .comparison-row { display: grid; grid-template-columns: 1fr 80px 80px; gap: 16px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 14px; align-items: center; }
        `}</style>

        {/* Cinematic top section */}
        <section style={{ position: "relative", overflow: "hidden", padding: "90px 24px 60px", textAlign: "center" }}>
          {/* Background effect */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(225,48,108,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, padding: "8px 20px 8px 12px" }}>
              <span style={{ width: 24, height: 24, background: "linear-gradient(135deg, #E1306C, #FCAF45)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>📸</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>Instagram HD Downloader</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, margin: "0 0 20px", letterSpacing: "-2px" }}>
              Download Instagram<br />
              Videos in <span className="hd-badge">HD</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 18, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 52px" }}>
              Save any Instagram video, reel, or story at the highest available quality — crystal-clear 1080p, no watermarks, zero compression.
            </p>

            {/* ── Live Download Engine ── */}
            <div style={{ maxWidth: 640, margin: "0 auto" }}>
              <DownloadEngine platformHint="instagram" />

              {/* Quality reference (informational) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 20 }}>
                {qualityOptions.map((q, i) => (
                  <button
                    key={i}
                    className={`quality-btn ${quality === i ? "selected" : ""}`}
                    onClick={() => setQuality(i)}
                  >
                    {q.tag && (
                      <div style={{ fontSize: 9, fontWeight: 800, color: quality === i ? "#E1306C" : "rgba(255,255,255,0.3)", letterSpacing: "0.1em", marginBottom: 6 }}>{q.tag}</div>
                    )}
                    <div style={{ fontSize: 16, fontWeight: 800, color: quality === i ? "#E1306C" : "#fff" }}>{q.res}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{q.label}</div>
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
                ↑ Quality options shown above are fetched live from the source
              </div>
            </div>
          </div>
        </section>

        {/* HD Quality stats */}
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "20px 24px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {[
              { value: "1080p", label: "Max Resolution", sub: "Full HD quality" },
              { value: "30fps", label: "Frame Rate", sub: "Smooth playback" },
              { value: "0", label: "Watermarks", sub: "Clean download" },
              { value: "<5s", label: "Download Time", sub: "Ultra fast" },
              { value: "100%", label: "Free", sub: "No hidden fees" },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <div style={{ fontSize: 28, fontWeight: 800, color: "#E1306C", marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* HD vs Standard comparison */}
        <section style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 60px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800, marginBottom: 32, textAlign: "center" }}>HD Download vs Standard</h2>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "8px 24px" }}>
            <div className="comparison-row" style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <span>Quality Factor</span>
              <span style={{ textAlign: "center", color: "#E1306C" }}>Our HD</span>
              <span style={{ textAlign: "center" }}>Standard</span>
            </div>
            {[
              ["Resolution", "1080p", "360–480p"],
              ["Pixel Density", "2M pixels", "0.3M pixels"],
              ["Sharpness", "Crystal clear", "Blurry"],
              ["Color Depth", "Full 24-bit", "Compressed"],
              ["File Quality", "Original", "Re-encoded"],
              ["Watermarks", "None", "Often added"],
              ["Audio Bitrate", "AAC 256kbps", "128kbps"],
            ].map(([factor, hd, std], i) => (
              <div key={factor} className="comparison-row">
                <span style={{ color: "rgba(255,255,255,0.6)" }}>{factor}</span>
                <span style={{ textAlign: "center", color: "#4ade80", fontWeight: 700, fontSize: 13 }}>{hd}</span>
                <span style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: 13 }}>{std}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Content types */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 60px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, marginBottom: 28, textAlign: "center" }}>Supported Instagram Content</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: "🎬", type: "Instagram Reels", desc: "Short-form vertical videos up to 90 seconds" },
              { icon: "📹", type: "Video Posts", desc: "Standard feed video posts in HD" },
              { icon: "📖", type: "Stories", desc: "24-hour ephemeral video stories" },
              { icon: "🔴", type: "IGTV Videos", desc: "Long-form Instagram TV content" },
              { icon: "🖼️", type: "Carousels", desc: "Multi-slide posts with video" },
              { icon: "⭐", type: "Highlights", desc: "Saved story highlight collections" },
            ].map(c => (
              <div key={c.type} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px" }}>
                <div style={{ fontSize: 26, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{c.type}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO content */}
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px 80px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20 }}>The Best Instagram HD Video Downloader — Free & Fast</h2>
          <div style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, fontSize: 15 }}>
            <p>Our <strong style={{ color: "#fff" }}>Instagram HD video downloader</strong> fetches content at the highest resolution available — typically 1080p Full HD. While Instagram compresses videos during upload, we retrieve the best quality version from their CDN, giving you cleaner, sharper results than most competing tools.</p>
            <p style={{ marginTop: 16 }}>Whether you're downloading reels for offline viewing, archiving your own content, or saving inspiration from other creators, our tool handles all public Instagram content types. No login, no extension, no app required — just paste the URL and download.</p>
          </div>
        </section>
      </div>
    </>
  );
}