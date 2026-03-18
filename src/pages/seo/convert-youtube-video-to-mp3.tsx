import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/Downloadengine";

const bitrates = ["320 kbps", "256 kbps", "192 kbps", "128 kbps", "96 kbps", "64 kbps"];

export default function ConvertYoutubeVideoToMp3() {
  const [bitrate, setBitrate] = useState("320 kbps");

  return (
    <>
      <Helmet>
        <title>Convert YouTube Video to MP3 – Free Online YouTube MP3 Converter</title>
        <meta name="description" content="Convert any YouTube video to MP3 audio instantly. Free online YouTube to MP3 converter with 320kbps quality. No software download needed. Fast, free, unlimited conversions." />
        <meta name="keywords" content="convert youtube video to mp3, youtube video to mp3 converter, youtube mp3 converter free, youtube to audio converter, convert youtube to mp3 320kbps" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/convert-youtube-video-to-mp3" />
      </Helmet>

      <div style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif", background: "#0A0A0A", minHeight: "100vh", color: "#fff" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
          .converter-box { background: #111; border: 1px solid #222; border-radius: 20px; overflow: hidden; }
          .converter-header { background: #161616; padding: 18px 24px; border-bottom: 1px solid #222; display: flex; align-items: center; gap: 10px; }
          .dot { width: 12px; height: 12px; border-radius: 50%; }
          .url-input { width: 100%; background: #0d0d0d; border: 1px solid #2a2a2a; border-radius: 10px; padding: 16px 18px; color: #fff; font-size: 15px; font-family: 'Space Grotesk', sans-serif; outline: none; box-sizing: border-box; transition: all 0.2s; }
          .url-input:focus { border-color: #FF0033; box-shadow: 0 0 0 3px rgba(255,0,51,0.12); }
          .bitrate-btn { background: #161616; border: 1px solid #2a2a2a; color: rgba(255,255,255,0.6); padding: 10px 16px; border-radius: 8px; cursor: pointer; font-size: 14px; font-family: 'Space Grotesk', sans-serif; transition: all 0.15s; }
          .bitrate-btn.active { background: rgba(255,0,51,0.1); border-color: #FF0033; color: #FF0033; font-weight: 700; }
          .convert-btn { background: linear-gradient(135deg, #FF0033, #FF4D6A); border: none; color: #fff; padding: 16px; border-radius: 10px; font-size: 16px; font-weight: 700; cursor: pointer; width: 100%; font-family: 'Space Grotesk', sans-serif; transition: all 0.2s; letter-spacing: 0.02em; }
          .convert-btn:hover { transform: scale(1.01); box-shadow: 0 6px 24px rgba(255,0,51,0.3); }
          .convert-btn:disabled { opacity: 0.5; cursor: not-allowed; }
          .progress-track { background: #1a1a1a; border-radius: 100px; height: 4px; overflow: hidden; margin: 20px 0; }
          .progress-bar { height: 100%; background: linear-gradient(90deg, #FF0033, #FF4D6A); border-radius: 100px; animation: progress 2.2s ease-out forwards; }
          @keyframes progress { from { width: 0%; } to { width: 100%; } }
          .ready-card { background: rgba(255,0,51,0.05); border: 1px solid rgba(255,0,51,0.2); border-radius: 14px; padding: 24px; text-align: center; animation: fadeUp 0.4s ease; }
          .dl-btn { background: #FF0033; border: none; color: #fff; padding: 14px 32px; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'Space Grotesk', sans-serif; }
          .feature-row { display: flex; align-items: flex-start; gap: 16px; padding: 18px 0; border-bottom: 1px solid #1a1a1a; }
        `}</style>

        {/* App bar */}
        <div style={{ background: "#0d0d0d", borderBottom: "1px solid #1a1a1a", padding: "14px 28px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#FF0033" }}>▶ YT → MP3</div>
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>Convert YouTube Video to MP3 · Free · Unlimited</div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "1fr 360px", gap: 48, alignItems: "start" }}>
          {/* Main converter */}
          <div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 12px", letterSpacing: "-0.5px" }}>
              Convert YouTube<br />Video to <span style={{ color: "#FF0033" }}>MP3</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.7, margin: "0 0 40px" }}>
              Extract the audio from any YouTube video in studio-quality MP3. Paste, convert, download — done in seconds.
            </p>

            <div className="converter-box">
              <div className="converter-header">
                <div className="dot" style={{ background: "#FF5F57" }} />
                <div className="dot" style={{ background: "#FEBC2E" }} />
                <div className="dot" style={{ background: "#28C840" }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginLeft: 8 }}>youtube-to-mp3-converter</span>
              </div>

              <div style={{ padding: "28px 24px" }}>
                {/* Bitrate selector (informational display) */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>Preferred Audio Quality</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {bitrates.map(b => (
                      <button
                        key={b}
                        className={`bitrate-btn ${bitrate === b ? "active" : ""}`}
                        onClick={() => setBitrate(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Live Download Engine ── */}
                <div style={{ marginBottom: 4 }}>
                  <label style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>YouTube URL</label>
                  <DownloadEngine platformHint="youtube" />
                </div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div>
            <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 16, padding: 24, marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Why Choose Us</h3>
              {[
                { icon: "⚡", title: "Lightning Fast", desc: "Most conversions complete in under 10 seconds using our optimized servers." },
                { icon: "🎵", title: "320kbps Quality", desc: "Maximum bitrate MP3 — indistinguishable from the original audio." },
                { icon: "♾️", title: "Unlimited Use", desc: "No daily limits, no account required. Convert as many videos as you need." },
                { icon: "📱", title: "All Devices", desc: "Works on desktop, tablet, and mobile browsers without any app install." },
              ].map(f => (
                <div key={f.title} className="feature-row">
                  <span style={{ fontSize: 22 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(255,0,51,0.05)", border: "1px solid rgba(255,0,51,0.15)", borderRadius: 16, padding: 22 }}>
              <div style={{ fontSize: 12, color: "#FF0033", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Supported Content</div>
              {["YouTube Music videos", "Podcasts & interviews", "Lectures & tutorials", "Documentary audio", "Gaming soundtracks", "Language learning videos"].map(item => (
                <div key={item} style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", padding: "6px 0", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#FF0033", fontSize: 12 }}>◆</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16, color: "rgba(255,255,255,0.85)" }}>Free YouTube to MP3 Converter — No Limits, No Signups</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9, fontSize: 15 }}>
            Our <strong style={{ color: "#fff" }}>YouTube to MP3 converter</strong> makes it effortless to extract audio from any YouTube video. Whether it's a music video, podcast episode, educational lecture, or a gaming soundtrack — just paste the URL and choose your quality. We support bitrates from 64 kbps up to 320 kbps.
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9, fontSize: 15, marginTop: 14 }}>
            All conversions happen server-side, so there's nothing to install. The MP3 file is delivered directly to your device for offline listening on any music player, smartphone, or car audio system.
          </p>
        </section>
      </div>
    </>
  );
}