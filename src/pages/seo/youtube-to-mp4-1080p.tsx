import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/DownloadEngine";

const specs = [
  { label: "Video Codec",    value: "H.264 / H.265 (HEVC)" },
  { label: "Max Resolution", value: "3840×2160 (4K)"        },
  { label: "Frame Rate",     value: "Up to 60 fps"          },
  { label: "Audio Codec",    value: "AAC 128kbps–320kbps"   },
  { label: "Container",      value: "MP4 (ISO Base Media)"  },
  { label: "Re-encoding",    value: "None — original stream" },
];

const useCases = [
  { icon: "🎓", title: "Save Tutorials Offline",   desc: "Download YouTube courses and how-to videos to watch without internet." },
  { icon: "✂️", title: "Content Repurposing",      desc: "Save clips in 1080p HD to edit and repurpose for your own projects." },
  { icon: "🎞️", title: "Video Collections",        desc: "Build local libraries of music videos, documentaries, or travel content." },
  { icon: "📱", title: "Mobile Offline Viewing",   desc: "Transfer MP4 files to your phone and watch YouTube videos anywhere." },
];

const qualities = [
  { value: "2160p", label: "4K Ultra HD",  color: "#facc15", badge: "BEST"    },
  { value: "1080p", label: "Full HD",      color: "#22c55e", badge: "POPULAR" },
  { value: "720p",  label: "HD",           color: "#60a5fa", badge: null       },
  { value: "480p",  label: "Standard",     color: "#a78bfa", badge: null       },
];

const faqs = [
  { q: "Why download YouTube videos as MP4 1080p?", a: "MP4 is universally compatible — it plays on every device, OS, and media player. 1080p is the sweet spot: excellent visual quality with manageable file sizes." },
  { q: "Is it possible to download 4K YouTube videos as MP4?", a: "Yes. Our YouTube to MP4 converter supports up to 4K (2160p) where the original video has been uploaded in that resolution." },
  { q: "Does converting YouTube to MP4 affect quality?", a: "No. We serve the original video stream — there is no re-encoding or quality loss." },
  { q: "How long does it take to convert YouTube to MP4 1080p?", a: "Most videos are ready within a few seconds. Longer videos (1hr+) may take up to 30 seconds to process." },
  { q: "Is this YouTube to MP4 converter free?", a: "Completely free. No subscription, no watermark, no file size limit on conversion." },
];

export default function YouTubeToMp41080p() {
  const [selected, setSelected] = useState("1080p");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>YouTube to MP4 1080p — Free HD YouTube Video Converter 2025</title>
        <meta name="description" content="Convert YouTube videos to MP4 in 1080p Full HD for free. Fast, no watermark, no quality loss. Download YouTube to MP4 in 720p, 1080p, or 4K instantly online." />
        <meta name="keywords" content="youtube to mp4 1080p, youtube to mp4 hd, download youtube 1080p, youtube video converter 1080p, youtube mp4 download full hd, convert youtube to mp4 free, youtube 4k downloader mp4" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-to-mp4-1080p" />
      </Helmet>

      <div style={{ background: "#06080f", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        {/* ── Hero + Engine ── */}
        <section style={{ background: "linear-gradient(160deg,#040810 0%,#0a1628 60%,#06080f 100%)", padding: "72px 24px 64px", textAlign: "center", borderBottom: "1px solid rgba(255,0,0,0.12)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(255,0,0,0.09) 0%,transparent 70%)", pointerEvents: "none" }} />
          <span style={{ display: "inline-block", background: "rgba(255,0,0,0.12)", border: "1px solid rgba(255,0,0,0.35)", borderRadius: 20, padding: "5px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#ff4444", marginBottom: 24 }}>YOUTUBE → MP4 CONVERTER</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", maxWidth: 820, marginInline: "auto" }}>
            YouTube to MP4{" "}
            <span style={{ background: "linear-gradient(90deg,#ff4444,#ff8800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>1080p HD</span>
            <br />Free Online Converter
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 17, maxWidth: 580, margin: "0 auto 28px", lineHeight: 1.75 }}>Download YouTube videos as crystal-clear MP4 files in Full HD 1080p, 720p, or 4K. No quality loss, no watermark.</p>

          {/* Quality Pills (visual only — actual quality comes from results) */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            {qualities.map((q) => (
              <button key={q.value} onClick={() => setSelected(q.value)} style={{ background: selected === q.value ? `${q.color}22` : "rgba(255,255,255,0.05)", border: `1.5px solid ${selected === q.value ? q.color : "rgba(255,255,255,0.1)"}`, borderRadius: 10, padding: "8px 18px", color: selected === q.value ? q.color : "#9ca3af", fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all .2s" }}>
                {q.value}{q.badge && <span style={{ background: q.color, color: "#000", borderRadius: 6, padding: "1px 7px", fontSize: 10, fontWeight: 800 }}>{q.badge}</span>}
              </button>
            ))}
          </div>

          <div style={{ maxWidth: 640, margin: "0 auto" }}><DownloadEngine platformHint="youtube" /></div>
          <p style={{ color: "#6b7280", fontSize: 13, marginTop: 14 }}>Paste your YouTube URL above · All qualities available in results</p>
        </section>

        {/* ── Tech Specs ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "72px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, marginBottom: 12 }}>Technical Specifications</h2>
          <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 48, fontSize: 16 }}>We preserve the exact quality of the original YouTube video.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
            {specs.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#6b7280", fontSize: 14, fontWeight: 500 }}>{s.label}</span>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14, textAlign: "right", maxWidth: "55%" }}>{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "72px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 800, marginBottom: 48 }}>Why People Download YouTube Videos as MP4</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
              {useCases.map((u) => (
                <div key={u.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "28px 24px" }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{u.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>{u.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{u.desc}</p>
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
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: openFaq === i ? "rgba(255,68,68,0.08)" : "rgba(255,255,255,0.03)", border: "none", padding: "18px 22px", textAlign: "left", color: "#fff", fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}<span style={{ color: "#ff4444", fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 22px 18px", color: "#9ca3af", lineHeight: 1.7, fontSize: 15 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ── SEO Text ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 20 }}>The Fastest YouTube to MP4 1080p Converter Online</h2>
            <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>Paste any YouTube URL above and our <strong style={{ color: "#fff" }}>YouTube 1080p downloader</strong> will fetch all available quality options — from 360p up to 4K. Select your preferred resolution and download a clean MP4 file with no watermark and no quality loss.</p>
            <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15 }}>Compatible with Chrome, Safari, Firefox, and all mobile browsers on iOS and Android. Completely free in 2025 with no account required.</p>
          </div>
        </section>
      </div>
    </>
  );
}