import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/DownloadEngine";

const stats = [
  { number: "10M+",  label: "Videos Downloaded" },
  { number: "1080p", label: "Max HD Quality"     },
  { number: "0",     label: "Watermarks Added"   },
  { number: "100%",  label: "Free Forever"       },
];

const devices = [
  { name: "iPhone",        icon: "📱", note: "iOS Safari & Chrome"    },
  { name: "Android",       icon: "🤖", note: "All Android Browsers"   },
  { name: "Windows PC",    icon: "🖥️", note: "Chrome, Edge, Firefox"  },
  { name: "Mac",           icon: "💻", note: "Safari, Chrome, Firefox" },
  { name: "iPad / Tablet", icon: "📲", note: "All Tablet Browsers"    },
  { name: "Smart TV",      icon: "📺", note: "Built-in Browsers"      },
];

const qualityGuide = [
  { res: "1080p Full HD", best: "Large screens, editing, archiving", color: "#22c55e" },
  { res: "720p HD",       best: "Standard viewing on any device",    color: "#60a5fa" },
  { res: "480p SD",       best: "Data-saving, older devices",        color: "#f59e0b" },
  { res: "360p",          best: "Very fast download, minimal data",  color: "#9ca3af" },
];

const faqs = [
  { q: "Can I download Instagram videos in HD 1080p?", a: "Yes. Paste the Instagram video URL into the tool above and our downloader fetches the highest available resolution. Most recent reels and videos are available in 1080p Full HD." },
  { q: "Why is my downloaded video not in 1080p?", a: "The download quality depends on the quality the original uploader selected when posting. If a video was uploaded in 720p, that will be the maximum downloadable quality." },
  { q: "Does the HD Instagram downloader add any watermarks?", a: "No. We deliver the raw video file from Instagram's servers. There are zero watermarks, logos, or overlays added to your download." },
  { q: "Is it safe to use an Instagram video downloader?", a: "Yes. Our tool is browser-based — you never install any software, and we do not ask for your Instagram credentials. We only access the public URL you provide." },
  { q: "Can I download Instagram videos on my iPhone in HD?", a: "Yes. Open Safari on your iPhone, paste the Instagram video link into our tool, and download the HD video directly to your Photos app." },
];

export default function InstagramVideoDownloaderHD() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Instagram Video Downloader HD — Save Instagram Videos in 1080p Free</title>
        <meta name="description" content="Download Instagram videos in HD 1080p quality for free. No watermark, no login, no app. Save Instagram reels, posts and stories in full HD on iPhone, Android, and PC." />
        <meta name="keywords" content="instagram video downloader hd, download instagram video 1080p, instagram hd video download, save instagram video hd, instagram reel hd downloader, instagram video quality download, best instagram downloader hd" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/instagram-video-downloader-hd" />
      </Helmet>

      <div style={{ background: "#06090f", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        {/* ── Hero + Engine ── */}
        <section style={{ background: "linear-gradient(160deg,#060214 0%,#0a1020 60%,#06090f 100%)", padding: "72px 24px 64px", textAlign: "center", borderBottom: "1px solid rgba(225,48,108,0.12)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(225,48,108,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
          <span style={{ display: "inline-block", background: "linear-gradient(90deg,rgba(225,48,108,0.2),rgba(247,119,55,0.2))", border: "1px solid rgba(225,48,108,0.4)", borderRadius: 20, padding: "5px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#E1306C", marginBottom: 24 }}>HD INSTAGRAM DOWNLOADER</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", maxWidth: 820, marginInline: "auto" }}>
            Instagram Video Downloader{" "}
            <span style={{ background: "linear-gradient(90deg,#E1306C,#f77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>HD</span>
            <br />Save Videos in 1080p — Free
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 17, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.75 }}>Download any Instagram video, reel, or story in full HD quality. No watermark, no account required. The sharpest Instagram HD downloader available online.</p>
          <div style={{ maxWidth: 640, margin: "0 auto" }}><DownloadEngine platformHint="instagram" /></div>
          <p style={{ color: "#6b7280", fontSize: 13, marginTop: 14 }}>No watermark · HD quality shown in results · Free · All devices</p>
        </section>

        {/* ── Stats Bar ── */}
        <section style={{ background: "rgba(225,48,108,0.05)", borderBottom: "1px solid rgba(225,48,108,0.1)", padding: "36px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 24, textAlign: "center" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 900, background: "linear-gradient(90deg,#E1306C,#f77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.number}</div>
                <div style={{ color: "#9ca3af", fontSize: 14, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quality Guide ── */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 800, marginBottom: 44 }}>Available Download Qualities</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {qualityGuide.map((q) => (
              <div key={q.res} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 2fr auto", alignItems: "center", gap: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 18, color: q.color }}>{q.res}</div>
                <div style={{ color: "#9ca3af", fontSize: 14 }}>Best for: {q.best}</div>
                <div style={{ background: `${q.color}22`, border: `1px solid ${q.color}`, borderRadius: 8, padding: "4px 12px", color: q.color, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
                  {q.res === "1080p Full HD" ? "RECOMMENDED" : "AVAILABLE"}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Device Grid ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 800, marginBottom: 44 }}>Works on Every Device</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
              {devices.map((d) => (
                <div key={d.name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{d.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{d.name}</div>
                  <div style={{ color: "#6b7280", fontSize: 12 }}>{d.note}</div>
                  <div style={{ marginTop: 12, display: "inline-block", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 8, padding: "3px 10px", color: "#22c55e", fontSize: 11, fontWeight: 700 }}>SUPPORTED ✓</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 40 }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: openFaq === i ? "rgba(225,48,108,0.08)" : "rgba(255,255,255,0.03)", border: "none", padding: "18px 22px", textAlign: "left", color: "#fff", fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}<span style={{ color: "#E1306C", fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 22px 18px", color: "#9ca3af", lineHeight: 1.7, fontSize: 15 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ── SEO Text ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 20 }}>The Sharpest Instagram HD Video Downloader Online</h2>
            <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>Our <strong style={{ color: "#fff" }}>Instagram HD video downloader</strong> fetches the original high-resolution stream directly from Instagram's CDN. Paste the URL, see all available qualities in the results, and download the cleanest version available — no watermark, no re-encoding.</p>
            <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15 }}>Compatible with iPhone, Android, Mac, Windows, and tablets through your existing browser. No app, no login required in 2025.</p>
          </div>
        </section>
      </div>
    </>
  );
}