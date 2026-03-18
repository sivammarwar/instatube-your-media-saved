import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/DownloadEngine";

const features = [
  { icon: "⚡", label: "Instant",    desc: "Shorts processed in under 5 seconds"     },
  { icon: "🎵", label: "HD Audio",   desc: "Best available audio quality from Shorts" },
  { icon: "📱", label: "Mobile",     desc: "Optimised for iPhone and Android use"     },
  { icon: "∞",  label: "Unlimited",  desc: "No daily cap on conversions"              },
];

const topReasons = [
  { rank: "01", text: "Save trending audio from YouTube Shorts before it disappears" },
  { rank: "02", text: "Use Shorts music clips as ringtones or notification sounds" },
  { rank: "03", text: "Extract voice-over and narration audio from Shorts" },
  { rank: "04", text: "Archive comedy sketches or creative audio content as MP3" },
  { rank: "05", text: "Sample beats and instrumentals from music Shorts for DJ use" },
  { rank: "06", text: "Listen to YouTube Shorts audio offline without video data" },
];

const faqs = [
  { q: "Can I convert YouTube Shorts to MP3?", a: "Yes. Paste the YouTube Short's URL into the tool above and hit Fetch. In the results, you'll see both video and audio download options — select the audio option to save as MP3." },
  { q: "How do I copy a YouTube Shorts URL?", a: "On mobile: tap the Share button on the Short → Copy Link. On desktop: copy the URL from your browser's address bar. The URL format is youtube.com/shorts/VIDEO_ID or youtu.be/VIDEO_ID." },
  { q: "Is the audio quality good from YouTube Shorts?", a: "Audio quality depends on the original Short. We extract at the maximum available quality YouTube serves. The audio option in results shows the best available quality for that Short." },
  { q: "Does the YouTube Shorts to MP3 converter work on iPhone?", a: "Yes. Open Safari on your iPhone, navigate to this page, paste the YouTube Shorts link, fetch the results, and select the audio download. The MP3 saves directly to your iPhone's Files app." },
  { q: "Is it free to convert YouTube Shorts to MP3?", a: "Completely free. No account, no subscription, no limit on how many Shorts you convert to MP3." },
];

export default function YouTubeShortsToMp3() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>YouTube Shorts to MP3 — Convert & Download Shorts Audio Free 2025</title>
        <meta name="description" content="Convert YouTube Shorts to MP3 audio free and instantly. Extract audio from any YouTube Short in high quality. No app, no login, works on iPhone and Android." />
        <meta name="keywords" content="youtube shorts to mp3, download youtube shorts audio, youtube shorts mp3 converter, convert youtube shorts to mp3 free, youtube shorts audio downloader, save youtube shorts as mp3, youtube short song download" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-shorts-to-mp3" />
      </Helmet>

      <div style={{ background: "#06060f", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        {/* ── Hero + Engine ── */}
        <section style={{ background: "linear-gradient(180deg,#08040f 0%,#06060f 100%)", padding: "72px 24px 64px", textAlign: "center", borderBottom: "1px solid rgba(255,0,0,0.1)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(255,0,0,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.3)", borderRadius: 20, padding: "5px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#ff4444", marginBottom: 24 }}>▶ YOUTUBE SHORTS → MP3</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", maxWidth: 820, marginInline: "auto" }}>
            YouTube Shorts to{" "}
            <span style={{ background: "linear-gradient(90deg,#ff4444,#ff8800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>MP3</span>
            <br />Extract Shorts Audio Free
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 17, maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.75 }}>Paste any YouTube Shorts URL below. In the results, select the audio download option to save the track as MP3 — trending sounds, music clips, voice-overs, all in seconds.</p>
          <div style={{ maxWidth: 640, margin: "0 auto" }}><DownloadEngine platformHint="youtube" /></div>
          <p style={{ color: "#6b7280", fontSize: 13, marginTop: 14 }}>Works with youtube.com/shorts/ID & youtu.be/ID links · Audio option in results</p>
        </section>

        {/* ── Feature Pills ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "52px 24px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
            {features.map((f) => (
              <div key={f.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{f.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6, color: "#ff4444" }}>{f.label}</div>
                <div style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ranked Reasons ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 800, marginBottom: 48 }}>Top Reasons to Convert YouTube Shorts to MP3</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {topReasons.map((r) => (
                <div key={r.rank} style={{ display: "flex", gap: 24, alignItems: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 24px" }}>
                  <span style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "rgba(255,68,68,0.25)", flexShrink: 0, lineHeight: 1 }}>{r.rank}</span>
                  <span style={{ color: "#d1d5db", fontSize: 15, lineHeight: 1.5 }}>{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to Get Shorts URL ── */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 40 }}>How to Get a YouTube Shorts URL</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
            {[
              { device: "📱 On Mobile", steps: ["Open the YouTube app", "Find the Short you want", "Tap the Share button", "Tap 'Copy link'", "Paste into tool above"] },
              { device: "🖥️ On Desktop", steps: ["Open youtube.com", "Navigate to the Short", "Copy URL from address bar", "URL format: /shorts/ID", "Paste into tool above"] },
            ].map((d) => (
              <div key={d.device} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 22px" }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 16 }}>{d.device}</div>
                {d.steps.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                    <span style={{ background: "rgba(255,68,68,0.15)", border: "1px solid rgba(255,68,68,0.3)", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#ff4444", flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ color: "#9ca3af", fontSize: 13, lineHeight: 1.5 }}>{s}</span>
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
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: openFaq === i ? "rgba(255,68,68,0.08)" : "rgba(255,255,255,0.03)", border: "none", padding: "18px 22px", textAlign: "left", color: "#fff", fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {f.q}<span style={{ color: "#ff4444", fontSize: 20, flexShrink: 0, marginLeft: 12 }}>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && <div style={{ padding: "0 22px 18px", color: "#9ca3af", lineHeight: 1.7, fontSize: 15 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO Text ── */}
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px 80px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 20 }}>The Fastest YouTube Shorts to MP3 Converter Online</h2>
          <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>YouTube Shorts are a goldmine of trending audio. Our <strong style={{ color: "#fff" }}>YouTube Shorts to MP3 converter</strong> lets you extract that audio instantly — paste the Short's URL, fetch results, and select the audio download. Works on all platforms and browsers in 2025. No limits, no fees.</p>
        </section>
      </div>
    </>
  );
}