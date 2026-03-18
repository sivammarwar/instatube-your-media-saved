import { Helmet } from "react-helmet";
import DownloadEngine from "@/components/Downloadengine";

const features = [
  { icon: "⚡", title: "Batch Processing", desc: "Download up to 50 reels, posts, and stories simultaneously without any slowdown." },
  { icon: "🎯", title: "Smart Queue", desc: "Intelligent download queue that prioritizes and organizes your content automatically." },
  { icon: "📦", title: "ZIP Export", desc: "Package all downloaded files into a single ZIP for easy storage and sharing." },
  { icon: "🔗", title: "Multi-URL Input", desc: "Paste multiple Instagram URLs at once — posts, reels, stories, highlights." },
  { icon: "🖼️", title: "Media Variety", desc: "Download videos, photos, carousels, stories, and highlights in one session." },
  { icon: "🌐", title: "No Login Needed", desc: "Works on public Instagram accounts with zero sign-in friction." },
];

const comparison = [
  { feature: "Bulk Download", us: true, others: false },
  { feature: "ZIP Export", us: true, others: false },
  { feature: "HD Quality", us: true, others: true },
  { feature: "No Watermark", us: true, others: false },
  { feature: "Stories Support", us: true, others: true },
  { feature: "Free Forever", us: true, others: false },
  { feature: "No Login", us: true, others: true },
  { feature: "Carousel Download", us: true, others: false },
];

export default function InstagramBulkVideoDownloader() {
  return (
    <>
      <Helmet>
        <title>Instagram Bulk Downloader – Download Multiple Instagram Videos at Once</title>
        <meta name="description" content="Download multiple Instagram videos, reels, stories and photos in bulk. Paste multiple URLs and download all at once. Free, fast, HD quality, no watermark." />
        <meta name="keywords" content="instagram bulk downloader, download multiple instagram videos, instagram batch downloader, bulk instagram reels downloader, mass instagram downloader" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/instagram-bulk-video-downloader" />
      </Helmet>

      <div style={{ fontFamily: "'Syne', 'Space Grotesk', sans-serif", background: "#07080F", minHeight: "100vh", color: "#fff" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
          .grid-bg { background-image: linear-gradient(rgba(225,48,108,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(225,48,108,0.04) 1px, transparent 1px); background-size: 40px 40px; }
          .feature-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 28px; transition: all 0.3s; }
          .feature-card:hover { border-color: rgba(225,48,108,0.4); background: rgba(225,48,108,0.05); transform: translateY(-4px); }
          .pill { background: rgba(225,48,108,0.15); border: 1px solid rgba(225,48,108,0.3); border-radius: 100px; padding: 6px 18px; display: inline-block; font-size: 13px; color: #E1306C; font-weight: 600; }
          .check { color: #4ade80; font-size: 18px; }
          .cross { color: rgba(255,255,255,0.2); font-size: 18px; }
        `}</style>

        {/* Hero */}
        <section className="grid-bg" style={{ padding: "80px 24px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span className="pill">✦ BULK DOWNLOAD</span>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.1, margin: "24px 0 16px", letterSpacing: "-1px" }}>
              Instagram Bulk<br />
              <span style={{ color: "#E1306C" }}>Video Downloader</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: 18, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px" }}>
              Download dozens of Instagram videos, reels, stories, and carousels. Paste a URL, hit download. Done.
            </p>

            {/* ── Live Download Engine ── */}
            <div style={{ maxWidth: 640, margin: "0 auto" }}>
              <DownloadEngine platformHint="instagram" />
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "24px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
            {[["50+", "Simultaneous Downloads"], ["4K", "Max Quality"], ["100%", "Free Always"], ["0", "Watermarks"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#E1306C" }}>{num}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature grid */}
        <section style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, textAlign: "center", marginBottom: 48 }}>
            Everything You Need in <span style={{ color: "#E1306C" }}>One Tool</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section style={{ padding: "0 24px 80px", maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 40 }}>
            How We Compare
          </h2>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", background: "rgba(225,48,108,0.1)", padding: "14px 24px", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)" }}>
              <span>Feature</span>
              <span style={{ textAlign: "center", color: "#E1306C" }}>FreereelsDownloader</span>
              <span style={{ textAlign: "center" }}>Others</span>
            </div>
            {comparison.map((row, i) => (
              <div key={row.feature} style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", padding: "14px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                <span style={{ fontSize: 15 }}>{row.feature}</span>
                <span className={row.us ? "check" : "cross"} style={{ textAlign: "center" }}>{row.us ? "✓" : "✕"}</span>
                <span className={row.others ? "check" : "cross"} style={{ textAlign: "center" }}>{row.others ? "✓" : "✕"}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section style={{ padding: "0 24px 80px", maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 48 }}>How to Bulk Download Instagram Videos</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {[
              { n: "01", title: "Copy URLs", desc: "Open Instagram and copy links to all videos, reels, or stories you want to save." },
              { n: "02", title: "Paste All Links", desc: "Paste each URL on a new line in the input box above. Our tool supports 50+ URLs at once." },
              { n: "03", title: "Click Download", desc: "Hit the download button and watch all files process simultaneously in seconds." },
              { n: "04", title: "Save & Enjoy", desc: "Download individual files or get them all packed in a convenient ZIP archive." },
            ].map(step => (
              <div key={step.n} style={{ position: "relative", paddingLeft: 20 }}>
                <div style={{ fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "rgba(225,48,108,0.12)", lineHeight: 1, marginBottom: 16 }}>{step.n}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section style={{ padding: "0 24px 80px", maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>The Best Instagram Bulk Downloader — Free & Fast</h2>
          <div style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, fontSize: 15 }}>
            <p>Whether you're a content creator archiving your own posts, a social media manager tracking competitor content, or someone who simply wants to save a collection of inspiring reels, our <strong style={{ color: "#fff" }}>Instagram bulk video downloader</strong> makes the process effortless.</p>
            <p style={{ marginTop: 16 }}>Unlike other tools that force you to download one video at a time, our bulk downloader accepts multiple Instagram URLs simultaneously. You can mix reels, standard posts, stories, and carousel content in a single batch — our engine handles each format automatically.</p>
            <p style={{ marginTop: 16 }}>All downloads are in <strong style={{ color: "#fff" }}>original HD quality</strong> with no watermarks, no compression, and no account login required. Your privacy is fully protected — we never store your URLs or downloaded content.</p>
          </div>
        </section>
      </div>
    </>
  );
}