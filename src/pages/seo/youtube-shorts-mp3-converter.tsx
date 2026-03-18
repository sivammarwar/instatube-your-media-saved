import { Helmet } from "react-helmet";
import DownloadEngine from "@/components/DownloadEngine";

const recentShorts = [
  { id: 1, title: "Trending Song Cover", duration: "0:58", category: "Music" },
  { id: 2, title: "Viral Dance Clip", duration: "0:45", category: "Dance" },
  { id: 3, title: "Comedy Sketch", duration: "1:00", category: "Comedy" },
  { id: 4, title: "Guitar Tutorial", duration: "0:52", category: "Tutorial" },
];

export default function YoutubeShortsMp3Converter() {

  return (
    <>
      <Helmet>
        <title>YouTube Shorts to MP3 Converter – Download YouTube Shorts Audio Free</title>
        <meta name="description" content="Convert YouTube Shorts to MP3 audio in seconds. Free YouTube Shorts MP3 converter — save the audio from any YouTube Short. No watermark, HD quality, instant download." />
        <meta name="keywords" content="youtube shorts to mp3, convert youtube shorts to mp3, youtube shorts audio download, youtube shorts mp3 converter, download audio from youtube shorts" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-shorts-mp3-converter" />
      </Helmet>

      <div style={{ fontFamily: "'Nunito', 'Inter', sans-serif", background: "#08060E", minHeight: "100vh", color: "#fff" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap');
          .shorts-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; overflow: hidden; transition: all 0.3s; cursor: pointer; }
          .shorts-card:hover { transform: translateY(-6px); border-color: rgba(255,0,0,0.3); }
          .shorts-thumb { width: 100%; aspect-ratio: 9/16; background: linear-gradient(160deg, #1a0a0a, #0d0014); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
          .feature-pill { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 100px; padding: 8px 16px; font-size: 13px; font-weight: 600; }
        `}</style>

        {/* Header */}
        <header style={{ padding: "20px 32px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, background: "#ff0000", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>▶</div>
            <span style={{ fontWeight: 800, fontSize: 16 }}>Shorts → MP3</span>
          </div>
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>Free · Fast · No Watermark</span>
        </header>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          {/* Hero */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.2)", borderRadius: 100, padding: "8px 20px", marginBottom: 24, fontSize: 13, fontWeight: 700, color: "#ff4d4d" }}>
              📱 YouTube Shorts Audio Extractor
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: "-1.5px" }}>
              YouTube Shorts<br />
              <span style={{ color: "#ff0000" }}>to MP3</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 18, lineHeight: 1.7, maxWidth: 460, margin: "0 auto 40px" }}>
              Extract the audio track from any YouTube Short. Save trending music, sounds, and voiceovers in seconds.
            </p>

            {/* Feature pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 48 }}>
              {["⚡ 3-second conversion", "🎵 320kbps quality", "📱 Mobile-friendly", "🆓 Always free", "🚫 No watermark"].map(f => (
                <span key={f} className="feature-pill">{f}</span>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 48, alignItems: "start" }}>
            {/* Left: Converter — Live Download Engine */}
            <div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>YouTube Shorts URL</label>
                <DownloadEngine platformHint="youtube" />
              </div>

              {/* Why Shorts audio? */}
              <div style={{ marginTop: 40 }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 20 }}>Why Extract Audio from YouTube Shorts?</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { icon: "🎵", reason: "Save Trending Sounds", desc: "That viral sound from a Short that you can't find on Spotify? Save it directly." },
                    { icon: "🎤", reason: "Keep Voice Clips", desc: "Preserve motivational speeches, storytelling, or comedy bits as audio." },
                    { icon: "🎧", reason: "Offline Listening", desc: "Listen to your favorite Short's audio without needing video or internet." },
                    { icon: "🎬", reason: "Use in Your Projects", desc: "Extract sounds to use in your own edits, reels, or video productions." },
                  ].map(item => (
                    <div key={item.reason} style={{ display: "flex", gap: 16, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 18 }}>
                      <span style={{ fontSize: 22 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.reason}</div>
                        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Example shorts cards */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Popular Short Types</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {recentShorts.map(s => (
                  <div key={s.id} className="shorts-card">
                    <div className="shorts-thumb">
                      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${s.id * 60}deg, rgba(255,0,0,0.15), rgba(131,58,180,0.15))` }} />
                      <div style={{ position: "relative", fontSize: 30 }}>🎵</div>
                      <div style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(0,0,0,0.7)", borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{s.duration}</div>
                    </div>
                    <div style={{ padding: "12px 14px" }}>
                      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, lineHeight: 1.4 }}>{s.title}</div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: 11, color: "#ff4d4d", fontWeight: 700, background: "rgba(255,0,0,0.1)", padding: "2px 8px", borderRadius: 4 }}>{s.category}</span>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>MP3 ▸</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bitrate options */}
              <div style={{ marginTop: 24, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Output Quality</div>
                {[["320 kbps", "Highest quality", "#4ade80", true], ["256 kbps", "High quality", "#fff", false], ["128 kbps", "Standard", "#fff", false]].map(([br, label, color, checked]) => (
                  <label key={br as string} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer" }}>
                    <input type="radio" name="bitrate" defaultChecked={checked as boolean} style={{ accentColor: "#ff0000" }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: color as string }}>{br as string}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{label as string}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* SEO */}
          <div style={{ maxWidth: 720, margin: "60px auto 0", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Free YouTube Shorts to MP3 Converter — Extract Audio Instantly</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9, fontSize: 15 }}>
              Our <strong style={{ color: "#fff" }}>YouTube Shorts to MP3 converter</strong> is the fastest way to extract audio from any YouTube Short video. Simply paste the Shorts URL (it looks like youtube.com/shorts/VIDEO_ID) and get your MP3 file in seconds. We support bitrates up to 320 kbps for the best listening experience.
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.9, fontSize: 15, marginTop: 14 }}>
              YouTube Shorts have become the home of trending music, viral sounds, and unique audio snippets. Our tool makes it easy to save these sounds for offline listening, remixing, or use in your own creative projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}