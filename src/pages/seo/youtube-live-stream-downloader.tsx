import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/DownloadEngine";

const tips = [
  { icon: "📡", title: "Record Live Streams in Real-Time", desc: "Capture ongoing YouTube live streams as they broadcast — our tool buffers and downloads simultaneously." },
  { icon: "🎞️", title: "Download Past Live Replays",      desc: "After a stream ends, YouTube keeps it as a replay. Download any past live stream replay in HD quality." },
  { icon: "🔇", title: "Audio-Only Mode",                 desc: "Extract just the audio from a YouTube live stream — perfect for podcasts, interviews, and live music." },
  { icon: "📱", title: "Works on All Devices",            desc: "No software needed. Download YouTube live streams directly in your browser on any device." },
];

const formats = [
  { fmt: "MP4 1080p", use: "Full stream archive", icon: "🎬" },
  { fmt: "MP4 720p",  use: "Balanced quality",    icon: "📹" },
  { fmt: "MP4 480p",  use: "Smaller file size",   icon: "📱" },
  { fmt: "MP3 Audio", use: "Audio-only streams",  icon: "🎵" },
];

const faqs = [
  { q: "Can I download a YouTube live stream while it's still live?", a: "For active live streams, paste the live stream URL while it's broadcasting. For the best results, we recommend downloading the replay after the stream ends — YouTube converts it into a standard video that our tool handles perfectly." },
  { q: "How do I download a YouTube live stream replay?", a: "After a live stream ends, YouTube converts it into a standard video replay. Paste that replay URL into our downloader above — it works exactly like any YouTube video download." },
  { q: "What quality can I download YouTube live streams in?", a: "Quality depends on the streamer's setup. We support up to 1080p for live stream replays. All available qualities are shown in the results after you paste the URL." },
  { q: "Why can't I find the live stream URL?", a: "On YouTube, the URL is in your browser's address bar when watching a live stream. The format is typically youtube.com/watch?v=XXXX." },
  { q: "Is downloading YouTube live streams legal?", a: "Downloading for personal, non-commercial use is generally considered fair use in many jurisdictions. Always respect the content creator's terms and copyright. Do not re-upload downloaded streams." },
];

export default function YouTubeLiveStreamDownloader() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>YouTube Live Stream Downloader — Record & Save YouTube Live Videos Free</title>
        <meta name="description" content="Download YouTube live streams and past live stream replays in HD. Record live YouTube videos as MP4 or extract audio as MP3. Free online YouTube live downloader — no software needed." />
        <meta name="keywords" content="youtube live stream downloader, download youtube live stream, record youtube live, save youtube live video, youtube live to mp4, youtube stream recorder online, download youtube live replay" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-live-stream-downloader" />
      </Helmet>

      <div style={{ background: "#06080f", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        {/* ── Hero + Engine ── */}
        <section style={{ background: "linear-gradient(160deg,#0a0505 0%,#150a0a 50%,#06080f 100%)", padding: "72px 24px 64px", textAlign: "center", borderBottom: "1px solid rgba(255,0,0,0.12)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(220,38,38,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block", boxShadow: "0 0 8px #ef4444" }} />
            <span style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#ef4444" }}>LIVE STREAM DOWNLOADER</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", maxWidth: 820, marginInline: "auto" }}>
            YouTube Live Stream Downloader<br />
            <span style={{ background: "linear-gradient(90deg,#ef4444,#ff8800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Record & Save Live Videos Free</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 17, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.75 }}>Download ongoing YouTube live streams or save past live stream replays in HD. Works directly in your browser — no software or extension needed.</p>
          <div style={{ maxWidth: 640, margin: "0 auto" }}><DownloadEngine platformHint="youtube" /></div>
          <p style={{ color: "#6b7280", fontSize: 13, marginTop: 14 }}>Works on live streams & past replays · HD quality · Free</p>
        </section>

        {/* ── Formats ── */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, marginBottom: 44 }}>Available Download Formats</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
            {formats.map((f) => (
              <div key={f.fmt} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: "#ef4444" }}>{f.fmt}</div>
                <div style={{ color: "#6b7280", fontSize: 13 }}>{f.use}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 800, marginBottom: 48 }}>Powerful Live Stream Download Features</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
              {tips.map((t) => (
                <div key={t.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "28px 24px" }}>
                  <div style={{ fontSize: 34, marginBottom: 14 }}>{t.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>{t.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Live vs Replay ── */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 36 }}>Live Stream vs Past Replay — What's the Difference?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { type: "🔴 Active Live Stream", points: ["Stream captured in real-time", "Quality limited by stream bitrate", "URL format: youtube.com/watch?v=XXX", "Best results: paste replay URL after stream ends"] },
              { type: "📼 Past Live Replay",   points: ["Stream already ended", "Available as standard video replay", "Full HD quality preserved", "Download instantly like any video"] },
            ].map((col) => (
              <div key={col.type} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 22px" }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 16 }}>{col.type}</div>
                {col.points.map((p) => (
                  <div key={p} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#ef4444", marginTop: 2, flexShrink: 0 }}>▸</span>
                    <span style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 40 }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: openFaq === i ? "rgba(239,68,68,0.08)" : "rgba(255,255,255,0.03)", border: "none", padding: "18px 22px", textAlign: "left", color: "#fff", fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {f.q}<span style={{ color: "#ef4444", fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && <div style={{ padding: "0 22px 18px", color: "#9ca3af", lineHeight: 1.7, fontSize: 15 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO Text ── */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px 80px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 20 }}>Download YouTube Live Streams Online — No Software Needed</h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>Our <strong style={{ color: "#fff" }}>YouTube live stream downloader</strong> lets you save any live broadcast or past replay directly in your browser. Paste the YouTube URL above, and we'll fetch all available quality options for you to choose from.</p>
          <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15 }}>Whether it's breaking news, a live gaming session, a music concert, or an educational webinar — completely free, no daily limits, works on all devices in 2025.</p>
        </section>
      </div>
    </>
  );
}