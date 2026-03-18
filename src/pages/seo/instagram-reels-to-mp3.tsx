import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/Downloadengine";

const reasons = [
  "Extract background music from Instagram Reels to identify the song",
  "Save a reel's audio track as a ringtone",
  "Repurpose audio content for podcasts or voice-overs",
  "Download trending audio clips before they're removed",
  "Archive audio from your own reels as a backup",
  "Create your own audio library from inspirational reels",
];

const faqs = [
  { q: "Can I extract just the audio from an Instagram Reel?", a: "Yes. Paste any public Instagram Reel URL into the tool above. In the results, you'll see an audio-only download option alongside the video formats — select it to get the MP3." },
  { q: "What audio quality will I get from Instagram Reels?", a: "We extract audio at the highest quality Instagram serves, which is typically 128kbps–320kbps AAC. The audio download option in results reflects the best available quality." },
  { q: "Does the Instagram Reels audio downloader work on all Reels?", a: "It works on all public Instagram Reels. For reels with licensed music, audio quality depends on what Instagram serves in your region." },
  { q: "Can I use the MP3 from Instagram Reels commercially?", a: "The extracted audio may be subject to copyright. Always verify the rights to any music before using it in commercial projects. Use this tool for personal listening and archival purposes." },
  { q: "How is this different from the Instagram Reel Audio Downloader page?", a: "Both pages use the same powerful downloader. This page is specifically focused on audio extraction from Reels with context around why and how to do it." },
];

export default function InstagramReelsToMp3() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Instagram Reels to MP3 — Extract Audio from Instagram Reels Free</title>
        <meta name="description" content="Convert Instagram Reels to MP3 audio free online. Extract background music, voice, and sounds from any Instagram Reel. No login needed. Works on iPhone and Android." />
        <meta name="keywords" content="instagram reels to mp3, instagram reel audio download, extract audio from instagram reel, instagram reel music downloader, download instagram reel sound, instagram to mp3 free, reel audio extractor" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/instagram-reels-to-mp3" />
      </Helmet>

      <div style={{ background: "#060810", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        {/* ── Hero + Engine ── */}
        <section style={{ background: "linear-gradient(160deg,#060214 0%,#0d0820 60%,#060810 100%)", padding: "72px 24px 64px", textAlign: "center", borderBottom: "1px solid rgba(225,48,108,0.15)", position: "relative", overflow: "hidden" }}>
          {/* Waveform decoration */}
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 3, alignItems: "flex-end", pointerEvents: "none", opacity: 0.1 }}>
            {[18,32,45,28,60,40,72,35,55,42,68,30,50,38,62,44,70,33,48,36,58,26,44,52,38].map((h, i) => (
              <div key={i} style={{ width: 6, height: h, background: "linear-gradient(180deg,#E1306C,#f77737)", borderRadius: "3px 3px 0 0" }} />
            ))}
          </div>
          <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(225,48,108,0.15) 0%,transparent 70%)", pointerEvents: "none" }} />

          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(225,48,108,0.12)", border: "1px solid rgba(225,48,108,0.4)", borderRadius: 20, padding: "5px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#E1306C", marginBottom: 24 }}>🎵 AUDIO EXTRACTOR</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", maxWidth: 800, marginInline: "auto" }}>
            Instagram Reels to{" "}
            <span style={{ background: "linear-gradient(90deg,#E1306C,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>MP3</span>
            <br />Extract Reel Audio Free
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 17, maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.75 }}>Paste any Instagram Reel URL below. In the results, select the audio download option to save the track as MP3 — no app, no login, no watermark.</p>
          <div style={{ maxWidth: 640, margin: "0 auto" }}><DownloadEngine platformHint="instagram" /></div>
          <p style={{ color: "#6b7280", fontSize: 13, marginTop: 14 }}>Audio download option appears in results · Free · No login</p>
        </section>

        {/* ── Process Flow ── */}
        <section style={{ padding: "56px 24px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 12 }}>How Audio Extraction Works</h2>
            <p style={{ color: "#9ca3af", marginBottom: 40, lineHeight: 1.7, fontSize: 15 }}>Our servers decode the Reel's video stream, separate the audio layer, and deliver it as a clean audio file — all in seconds.</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap" }}>
              {[{ icon: "🔗", label: "Paste Reel URL" }, { icon: "⚙️", label: "Server Decodes" }, { icon: "🎵", label: "Audio Extracted" }, { icon: "📥", label: "Downloaded" }].map((step, i, arr) => (
                <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ textAlign: "center", padding: "0 12px" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(225,48,108,0.12)", border: "1px solid rgba(225,48,108,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto 10px" }}>{step.icon}</div>
                    <div style={{ color: "#9ca3af", fontSize: 12, fontWeight: 600, maxWidth: 80 }}>{step.label}</div>
                  </div>
                  {i < arr.length - 1 && <div style={{ color: "rgba(225,48,108,0.4)", fontSize: 22, margin: "0 4px", flexShrink: 0 }}>→</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reasons ── */}
        <section style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 40 }}>Why People Extract Audio from Instagram Reels</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 14 }}>
              {reasons.map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "16px 18px" }}>
                  <span style={{ color: "#E1306C", fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✦</span>
                  <span style={{ color: "#d1d5db", fontSize: 14, lineHeight: 1.6 }}>{r}</span>
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
            <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 20 }}>The Best Instagram Reels to MP3 Converter</h2>
            <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>Instagram Reels are packed with great audio — trending songs, original sounds, and ambient tracks. Our <strong style={{ color: "#fff" }}>Instagram Reels to MP3 converter</strong> lets you extract that audio instantly, free of charge.</p>
            <p style={{ color: "#9ca3af", lineHeight: 1.85, fontSize: 15 }}>Simply paste the Reel's URL, and in the results you'll see both video and audio download options. Select the audio option to save the MP3 to your device. Works on desktop, iPhone, and Android — no app or account needed.</p>
          </div>
        </section>
      </div>
    </>
  );
}