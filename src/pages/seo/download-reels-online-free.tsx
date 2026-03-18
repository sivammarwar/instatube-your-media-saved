import { Helmet } from "react-helmet";
import DownloadEngine from "@/components/Downloadengine";

export default function DownloadReelsOnlineFree() {
  return (
    <>
      <Helmet>
        <title>Download Reels Online Free – Save Instagram Reels Without App</title>
        <meta name="description" content="Download Instagram Reels online for free. No app needed — paste the reel link and save in HD quality instantly. The fastest free online Instagram reels downloader." />
        <meta name="keywords" content="download reels online free, download instagram reels online, save instagram reels free, free reel downloader online, instagram reels download no app" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/download-reels-online-free" />
      </Helmet>

      <div style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", background: "#F5F0EA", minHeight: "100vh", color: "#1a1614" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
          .sans { font-family: 'DM Sans', sans-serif; }
          .divider { height: 1px; background: rgba(26,22,20,0.12); }
          .tag { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(26,22,20,0.4); }
          .feature-num { font-size: clamp(3rem, 8vw, 5rem); font-weight: 300; color: rgba(26,22,20,0.08); line-height: 1; margin-bottom: 8px; }
        `}</style>

        {/* Editorial header */}
        <header style={{ borderBottom: "2px solid #1a1614", padding: "0 40px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid rgba(26,22,20,0.12)" }}>
              <span className="tag">Est. 2024</span>
              <span className="tag">Instagram · YouTube · Free Downloads</span>
              <span className="tag">No App Required</span>
            </div>
            <div style={{ textAlign: "center", padding: "24px 0 20px" }}>
              <div style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1, margin: "0 0 8px" }}>
                Free<span style={{ fontStyle: "italic", fontWeight: 300 }}> Reels</span>
              </div>
              <div style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1 }}>
                Down<span style={{ fontStyle: "italic", fontWeight: 300 }}>loader</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>

          {/* Intro strip */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(26,22,20,0.12)" }}>
            <div style={{ padding: "48px 0 48px 0", borderRight: "1px solid rgba(26,22,20,0.12)", paddingRight: 48 }}>
              <p className="tag" style={{ marginBottom: 20 }}>The Story</p>
              <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", fontWeight: 300, lineHeight: 1.7, color: "#1a1614" }}>
                We built the simplest, most elegant way to save Instagram Reels online — with no apps, no accounts, no friction. Just a URL and a click.
              </p>
            </div>
            <div style={{ padding: "48px 0 48px 48px" }}>
              <p className="tag" style={{ marginBottom: 20 }}>The Tool</p>
              {/* ── Live Download Engine ── */}
              <DownloadEngine platformHint="instagram" />
            </div>
          </div>

          {/* Pull quote */}
          <div style={{ textAlign: "center", padding: "60px 0", borderBottom: "1px solid rgba(26,22,20,0.12)" }}>
            <div style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontStyle: "italic", fontWeight: 300, letterSpacing: "-0.5px", lineHeight: 1.3, maxWidth: 760, margin: "0 auto" }}>
              "The fastest, cleanest way to save<br />Instagram Reels — entirely free."
            </div>
            <div className="tag" style={{ marginTop: 24 }}>— FreereelsDownloader.com</div>
          </div>

          {/* Features grid */}
          <div style={{ borderBottom: "1px solid rgba(26,22,20,0.12)", padding: "60px 0" }}>
            <p className="tag" style={{ marginBottom: 40 }}>Why It Works</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px 60px" }}>
              {[
                { n: "I", title: "Paste Any Reel Link", desc: "Copy the link from Instagram and paste it directly. No manual steps, no extra configuration." },
                { n: "II", title: "Instant HD Quality", desc: "Downloads are served in the original resolution Instagram provides — up to Full HD." },
                { n: "III", title: "No Watermark", desc: "Your downloaded reel is clean. What you see on Instagram is exactly what you get." },
                { n: "IV", title: "Works Everywhere", desc: "Browser-based. Works on iPhone, Android, Mac, Windows — any device with a browser." },
                { n: "V", title: "Zero Sign-In", desc: "No account. No email. No verification. Pure utility with zero barrier to entry." },
                { n: "VI", title: "Completely Free", desc: "No subscriptions, no premium tiers. The full tool is free, forever, for everyone." },
              ].map(f => (
                <div key={f.n}>
                  <div className="feature-num">{f.n}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 10 }}>{f.title}</h3>
                  <p className="sans" style={{ fontSize: 14, color: "rgba(26,22,20,0.55)", lineHeight: 1.8, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How-to in editorial style */}
          <div style={{ padding: "60px 0", borderBottom: "1px solid rgba(26,22,20,0.12)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 60, alignItems: "start" }}>
              <div>
                <p className="tag">Instructions</p>
                <div style={{ fontSize: "6rem", fontStyle: "italic", fontWeight: 300, lineHeight: 0.9, color: "rgba(26,22,20,0.06)", marginTop: 16 }}>How</div>
              </div>
              <div>
                {[
                  ["Open Instagram", "Find the Reel you want to download on the Instagram app or website."],
                  ["Tap Share → Copy Link", "Use Instagram's native share menu to copy the direct URL of the Reel."],
                  ["Paste the URL Here", "Return to this page and paste the link into the input field above."],
                  ["Click & Save", "Hit the download button and save the MP4 file to your device."],
                ].map(([title, desc], i) => (
                  <div key={title} style={{ display: "flex", gap: 32, padding: "20px 0", borderTop: i === 0 ? "none" : "1px solid rgba(26,22,20,0.08)" }}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 300, fontStyle: "italic", color: "rgba(26,22,20,0.2)", minWidth: 32 }}>{i + 1}</div>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8 }}>{title}</h3>
                      <p className="sans" style={{ fontSize: 14, color: "rgba(26,22,20,0.55)", lineHeight: 1.8, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SEO text */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, padding: "60px 0 80px" }}>
            <div>
              <p className="tag" style={{ marginBottom: 20 }}>About This Tool</p>
              <p style={{ fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.8, color: "rgba(26,22,20,0.7)" }}>
                Download Reels online free — no app, no account, no hassle. Our <strong>Instagram Reels downloader</strong> is trusted by millions of users who want a fast, reliable way to save content without installing anything. It works on all browsers and operating systems, making it the most universally accessible reel saver available.
              </p>
            </div>
            <div>
              <p className="tag" style={{ marginBottom: 20 }}>Quality Promise</p>
              <p style={{ fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.8, color: "rgba(26,22,20,0.7)" }}>
                Every reel is downloaded at the highest quality Instagram makes available — typically 1080p at 30fps. We never re-compress, resize, or add watermarks. The file you receive is identical to the original upload from the content creator, just saved to your device for offline enjoyment.
              </p>
            </div>
          </div>
        </main>

        {/* Footer bar */}
        <footer style={{ borderTop: "2px solid #1a1614", padding: "20px 40px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="tag">FreereelsDownloader.com</span>
            <span className="tag">Free · Fast · No Watermark</span>
          </div>
        </footer>
      </div>
    </>
  );
}