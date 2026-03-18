import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/Downloadengine";

const features = [
  { icon: "📦", title: "Bulk Download", desc: "Download multiple Instagram posts, reels, and carousels — no repetitive copy-pasting." },
  { icon: "💧", title: "No Watermark", desc: "Every file downloaded is 100% watermark-free. Clean, ready to reshare or repurpose." },
  { icon: "🎬", title: "HD & 4K Quality", desc: "Preserves original resolution — 720p, 1080p, or 4K wherever Instagram supports it." },
  { icon: "🔒", title: "No Login Required", desc: "Public Instagram content can be downloaded without any account or password." },
  { icon: "📸", title: "Photos + Videos", desc: "Works on carousels, reels, single posts, and story highlights." },
  { icon: "⚡", title: "Lightning Fast", desc: "Files ready within seconds." },
];

const comparison = [
  { feature: "Bulk Download",       us: true,  others: false },
  { feature: "No Watermark",        us: true,  others: true  },
  { feature: "HD Quality",          us: true,  others: true  },
  { feature: "No Login Needed",     us: true,  others: false },
  { feature: "Carousel Support",    us: true,  others: false },
  { feature: "Story Download",      us: true,  others: false },
  { feature: "Unlimited Downloads", us: true,  others: false },
  { feature: "100% Free",           us: true,  others: false },
];

const steps = [
  { n: "01", title: "Open Instagram", desc: "Find the post, reel, or carousel you want to download on Instagram." },
  { n: "02", title: "Copy the Link", desc: "Tap the three-dot menu → Share → Copy Link (or copy from your browser address bar)." },
  { n: "03", title: "Paste & Download", desc: "Paste the URL into the box above, hit Fetch, choose your quality and download." },
];

const faqs = [
  { q: "Can I download an entire Instagram profile?", a: "You can download any number of individual posts or reels from a profile. Paste each link one at a time into the tool above." },
  { q: "Does bulk download work on private accounts?", a: "Our tool works only on public Instagram content. Private accounts require the account owner's permission." },
  { q: "What formats are supported?", a: "Videos are saved as MP4, images as JPG/PNG. Carousel posts download as individual files for each item." },
  { q: "Is there a daily limit on bulk downloads?", a: "No. You can download as many posts as you like, completely free, with no daily cap." },
  { q: "Will the quality be reduced?", a: "No. We serve the exact file Instagram hosts — full resolution, no re-encoding." },
];

export default function InstagramBulkDownloader() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Instagram Bulk Downloader — Download Multiple Posts & Reels Free 2025</title>
        <meta name="description" content="Download multiple Instagram posts, reels, carousels and photos in bulk — free, no watermark, HD quality. No login needed. The fastest Instagram bulk downloader online." />
        <meta name="keywords" content="instagram bulk downloader, download multiple instagram posts, instagram batch downloader, bulk instagram reels downloader, download instagram carousel, instagram mass downloader free" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/instagram-bulk-downloader" />
      </Helmet>

      <div style={{ background: "#08090f", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        {/* ── Hero + Engine ── */}
        <section style={{ background: "linear-gradient(160deg,#0d0515 0%,#080d1f 60%,#08090f 100%)", padding: "72px 24px 64px", textAlign: "center", position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(225,48,108,0.15)" }}>
          <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(225,48,108,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
          <span style={{ display: "inline-block", background: "rgba(225,48,108,0.15)", border: "1px solid rgba(225,48,108,0.4)", borderRadius: 20, padding: "5px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#E1306C", marginBottom: 24 }}>INSTAGRAM BULK DOWNLOADER</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", maxWidth: 780, marginInline: "auto" }}>
            Download Multiple Instagram<br />
            <span style={{ background: "linear-gradient(90deg,#E1306C,#f77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Posts & Reels in Bulk — Free</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 17, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.75 }}>Stop downloading one by one. Paste any Instagram link, choose your quality, and download instantly — no watermark, no login.</p>
          <div style={{ maxWidth: 640, margin: "0 auto" }}><DownloadEngine platformHint="instagram" /></div>
          <p style={{ color: "#6b7280", fontSize: 13, marginTop: 14 }}>Free · No login · No watermark · HD quality</p>
        </section>

        {/* ── Steps ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, marginBottom: 12 }}>How to Bulk Download Instagram Content</h2>
          <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 52, fontSize: 16 }}>Three steps. Done in under 30 seconds.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 28, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 16, right: 20, fontSize: 52, fontWeight: 900, color: "rgba(225,48,108,0.08)", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#E1306C", letterSpacing: 1.5, marginBottom: 10 }}>STEP {s.n}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ color: "#9ca3af", lineHeight: 1.65, margin: 0, fontSize: 15 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "72px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, marginBottom: 48 }}>Everything You Need in One Tool</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
              {features.map((f) => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "26px 24px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 30, flexShrink: 0 }}>{f.icon}</span>
                  <div><h3 style={{ fontWeight: 700, fontSize: 16, margin: "0 0 8px" }}>{f.title}</h3><p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison ── */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 40 }}>Why Choose Us Over Other Downloaders?</h2>
          <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead><tr style={{ background: "rgba(225,48,108,0.1)" }}>
                <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 700, color: "#E1306C" }}>Feature</th>
                <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, color: "#E1306C" }}>FreeReelsDownloader</th>
                <th style={{ padding: "14px 20px", textAlign: "center", fontWeight: 700, color: "#6b7280" }}>Other Tools</th>
              </tr></thead>
              <tbody>{comparison.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "13px 20px", color: "#d1d5db" }}>{row.feature}</td>
                  <td style={{ padding: "13px 20px", textAlign: "center" }}><span style={{ color: "#22c55e", fontSize: 18 }}>✓</span></td>
                  <td style={{ padding: "13px 20px", textAlign: "center" }}><span style={{ color: row.others ? "#22c55e" : "#ef4444", fontSize: 18 }}>{row.others ? "✓" : "✗"}</span></td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "72px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 40 }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", background: open === i ? "rgba(225,48,108,0.08)" : "rgba(255,255,255,0.03)", border: "none", padding: "18px 22px", textAlign: "left", color: "#fff", fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {f.q}<span style={{ color: "#E1306C", fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && <div style={{ padding: "0 22px 18px", color: "#9ca3af", lineHeight: 1.7, fontSize: 15 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO Text ── */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px 80px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 20 }}>The Best Instagram Bulk Downloader Online</h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>Our <strong style={{ color: "#fff" }}>Instagram bulk downloader</strong> lets you paste any public link and get your videos, photos, and carousels downloaded instantly — completely free, no watermark, no account required.</p>
          <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15 }}>Whether you're a content creator backing up your own posts, a social media manager archiving brand content, or simply saving your favourite reels, our tool handles it all in full HD quality.</p>
        </section>
      </div>
    </>
  );
}