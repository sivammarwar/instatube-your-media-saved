import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/DownloadEngine";

const bitrates = [
  { kbps: "320", label: "320kbps", quality: "Studio Quality", stars: 5, size: "~2.4 MB/min", color: "#facc15" },
  { kbps: "192", label: "192kbps", quality: "Very Good",      stars: 4, size: "~1.4 MB/min", color: "#60a5fa" },
  { kbps: "128", label: "128kbps", quality: "Good",           stars: 3, size: "~1.0 MB/min", color: "#a78bfa" },
];

const useCases = [
  { icon: "🎵", title: "Music Lovers",        desc: "Save your favourite YouTube music videos as MP3 and listen offline on any player." },
  { icon: "🎙️", title: "Podcast Listeners",  desc: "Convert YouTube interviews and talk shows to MP3 for listening on the go." },
  { icon: "📚", title: "Learners",            desc: "Extract audio from YouTube lectures to study without video distractions." },
  { icon: "🎛️", title: "DJs & Producers",    desc: "Save DJ sets and instrumentals as high-quality MP3 for your projects." },
  { icon: "🧘", title: "Meditation & Wellness", desc: "Convert YouTube guided meditations to audio for offline practice." },
  { icon: "🌍", title: "Language Learners",   desc: "Download YouTube language lessons as MP3 to practice listening anytime." },
];

const faqs = [
  { q: "How do I convert a YouTube video to MP3?", a: "Paste the YouTube video URL into the field above and hit Fetch. In the results, you'll see both video and audio download options — select the audio option to download as MP3." },
  { q: "What audio quality will I get?", a: "We extract audio at the highest quality available from YouTube's audio stream, typically 128kbps–320kbps. The audio option in results shows the best available quality for that video." },
  { q: "Is YouTube to MP3 conversion free?", a: "Yes. Completely free. No account, no subscription, no limit on conversions." },
  { q: "Can I convert YouTube playlists to MP3?", a: "For full playlist conversion, use our YouTube Playlist Downloader which supports batch downloads from entire playlists." },
  { q: "Does converting YouTube to MP3 affect audio quality?", a: "We extract the audio directly from YouTube's audio stream — the same source YouTube uses for playback. You get the best quality that stream offers." },
  { q: "Is it legal to convert YouTube videos to MP3?", a: "Converting for personal, offline listening is generally considered fair use in many regions. Redistribution or commercial use of copyrighted music is not permitted." },
];

export default function YouTubeVideoToMp3Converter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>YouTube Video to MP3 Converter — Free High Quality Audio Downloader 2025</title>
        <meta name="description" content="Convert any YouTube video to MP3 free online. Fast YouTube to MP3 converter with no login, no watermark, unlimited conversions. Best audio quality from YouTube." />
        <meta name="keywords" content="youtube video to mp3 converter, youtube to mp3, convert youtube to mp3 free, youtube mp3 download, youtube audio converter online, best youtube to mp3 converter, youtube music to mp3" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-video-to-mp3-converter" />
      </Helmet>

      <div style={{ background: "#060810", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        {/* ── Hero + Engine ── */}
        <section style={{ background: "linear-gradient(160deg,#040810 0%,#080d1f 60%,#060810 100%)", padding: "72px 24px 64px", textAlign: "center", borderBottom: "1px solid rgba(255,0,0,0.12)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(255,0,0,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.3)", borderRadius: 20, padding: "5px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#ff4444", marginBottom: 24 }}>🎵 YOUTUBE → MP3 CONVERTER</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", maxWidth: 820, marginInline: "auto" }}>
            YouTube Video to{" "}
            <span style={{ background: "linear-gradient(90deg,#ff4444,#ff8800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>MP3</span>{" "}Converter<br />
            <span style={{ fontSize: "0.6em", color: "#9ca3af", fontWeight: 600 }}>Free · High Quality Audio · No Login</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 17, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.75 }}>Paste any YouTube URL below. In the results, select the audio download option to get a high-quality MP3 file delivered directly to your device.</p>
          <div style={{ maxWidth: 640, margin: "0 auto" }}><DownloadEngine platformHint="youtube" /></div>
          <p style={{ color: "#6b7280", fontSize: 13, marginTop: 14 }}>Audio download option appears in results · Free · No login required</p>
        </section>

        {/* ── Bitrate Reference ── */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 12 }}>MP3 Audio Quality Reference</h2>
          <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 40, fontSize: 15 }}>YouTube serves audio at varying bitrates. Here's what each level means for your listening experience.</p>
          <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "rgba(255,68,68,0.1)" }}>
                  {["Bitrate", "Quality", "Rating", "Avg Size/Min"].map((h) => (
                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "#ff4444", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bitrates.map((b, i) => (
                  <tr key={b.kbps} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 800, color: b.color }}>{b.label}</td>
                    <td style={{ padding: "12px 16px", color: "#d1d5db" }}>{b.quality}</td>
                    <td style={{ padding: "12px 16px", color: "#facc15", letterSpacing: 2 }}>{"★".repeat(b.stars)}{"☆".repeat(5 - b.stars)}</td>
                    <td style={{ padding: "12px 16px", color: "#9ca3af" }}>{b.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 800, marginBottom: 48 }}>Who Uses YouTube to MP3 Converter?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
              {useCases.map((u) => (
                <div key={u.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "26px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 30, flexShrink: 0 }}>{u.icon}</span>
                  <div><h3 style={{ fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>{u.title}</h3><p style={{ color: "#9ca3af", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{u.desc}</p></div>
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
            <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 20 }}>The Best Free YouTube to MP3 Converter Online</h2>
            <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>Our <strong style={{ color: "#fff" }}>YouTube video to MP3 converter</strong> is the fastest way to extract audio from any YouTube video. Paste the URL, fetch the results, and select the audio download option — a clean MP3 file is delivered to your device instantly.</p>
            <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15 }}>Works on all devices and browsers in 2025. No app download, no sign-up, no cost. Millions of users convert YouTube to MP3 every month for music, podcasts, language learning, and creative projects.</p>
          </div>
        </section>
      </div>
    </>
  );
}