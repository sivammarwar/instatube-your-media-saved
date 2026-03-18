import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/DownloadEngine";

const qualities = [
  { label: "4K Ultra HD", res: "3840×2160", bitrate: "35–68 Mbps", size: "~2.5 GB/hr", badge: "BEST", color: "#facc15" },
  { label: "1080p Full HD", res: "1920×1080", bitrate: "8–12 Mbps", size: "~3.5 GB/hr", badge: "POPULAR", color: "#E1306C" },
  { label: "720p HD", res: "1280×720", bitrate: "4–7.5 Mbps", size: "~1.5 GB/hr", badge: null, color: "#60a5fa" },
  { label: "480p SD", res: "854×480", bitrate: "1.1–2.5 Mbps", size: "~0.7 GB/hr", badge: null, color: "rgba(255,255,255,0.3)" },
  { label: "360p", res: "640×360", bitrate: "0.5–1 Mbps", size: "~0.3 GB/hr", badge: "FASTEST", color: "#4ade80" },
];

const specs = [
  { label: "Codec Support", value: "H.264, H.265, VP9, AV1" },
  { label: "Container Format", value: "MP4, MKV, WebM" },
  { label: "Audio Codec", value: "AAC 128–320 kbps" },
  { label: "Frame Rate", value: "24, 30, 60 FPS" },
  { label: "HDR Support", value: "HDR10, HLG" },
  { label: "Max Resolution", value: "4K (3840×2160)" },
];

export default function YouTubeMp4Download1080p() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      <Helmet>
        <title>YouTube to MP4 1080p Download – HD Video Converter Online Free</title>
        <meta name="description" content="Download YouTube videos in 1080p Full HD MP4 format. Support for 4K, 720p, 480p, 360p. Fast conversion, no watermark, free online YouTube to MP4 1080p downloader." />
        <meta name="keywords" content="youtube to mp4 1080p, download youtube 1080p, youtube 1080p downloader, youtube full hd download, youtube mp4 1080p free" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-mp4-1080p-download" />
      </Helmet>

      <div style={{ fontFamily: "'IBM Plex Mono', 'Courier New', monospace", background: "#06090F", minHeight: "100vh", color: "#fff" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&family=IBM+Plex+Sans:wght@300;400;600;700&display=swap');
          .quality-card { border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px 20px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: space-between; }
          .quality-card:hover { border-color: rgba(255,255,255,0.2); }
          .quality-card.active { border-color: #E1306C; background: rgba(225,48,108,0.08); }
          .spec-row { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px; }
          .url-input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 14px 18px; color: #fff; font-family: 'IBM Plex Mono', monospace; font-size: 14px; outline: none; box-sizing: border-box; }
          .url-input:focus { border-color: #E1306C; }
          .dl-btn { background: #E1306C; border: none; color: #fff; padding: 14px 32px; border-radius: 10px; font-family: 'IBM Plex Mono', monospace; font-size: 14px; font-weight: 700; cursor: pointer; letter-spacing: 0.05em; transition: all 0.2s; }
          .dl-btn:hover { background: #C13584; transform: translateY(-2px); }
        `}</style>

        {/* Header */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 32px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E1306C" }} />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>YouTube ▸ MP4 ▸ 1080p Converter</span>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 60, alignItems: "start" }}>
          {/* Left column */}
          <div>
            <div style={{ fontSize: 11, color: "#E1306C", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>// FREE ONLINE CONVERTER</div>
            <h1 style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-0.5px" }}>
              YouTube to MP4<br />
              <span style={{ color: "#E1306C" }}>1080p Download</span>
            </h1>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8, margin: "0 0 40px" }}>
              Download YouTube videos in crisp 1080p Full HD. Choose your quality, paste the URL, and get your MP4 instantly — no software, no sign-up.
            </p>

            {/* URL Input — Live Download Engine */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>// VIDEO URL</div>
              <DownloadEngine platformHint="youtube" />
            </div>

            {/* Quality selector (informational) */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>// SELECT QUALITY</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {qualities.map((q, i) => (
                  <div key={q.label} className={`quality-card ${selected === i ? "active" : ""}`} onClick={() => setSelected(i)}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${selected === i ? q.color : "rgba(255,255,255,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {selected === i && <div style={{ width: 8, height: 8, borderRadius: "50%", background: q.color }} />}
                      </div>
                      <div>
                        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, fontWeight: 600 }}>{q.label}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{q.res} · {q.bitrate}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{q.size}</span>
                      {q.badge && <span style={{ background: q.color, color: q.color === "#facc15" ? "#000" : "#fff", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, letterSpacing: "0.08em" }}>{q.badge}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 16, padding: "14px 18px", background: "rgba(225,48,108,0.06)", border: "1px solid rgba(225,48,108,0.15)", borderRadius: 10, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              💡 Paste your YouTube URL above — the engine will detect available qualities automatically.
            </div>
          </div>

          {/* Right column - Tech specs */}
          <div>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28, marginBottom: 24 }}>
              <div style={{ fontSize: 11, color: "#E1306C", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20, fontWeight: 700 }}>// TECH SPECIFICATIONS</div>
              {specs.map(s => (
                <div key={s.label} className="spec-row">
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</span>
                  <span style={{ color: "#fff", fontWeight: 500, textAlign: "right" }}>{s.value}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(225,48,108,0.07)", border: "1px solid rgba(225,48,108,0.2)", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: 12, color: "#E1306C", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>// WHY 1080P?</div>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                1080p Full HD is the sweet spot: crystal-clear detail at manageable file sizes. Perfect for large screens, video editing, and archival purposes without the storage overhead of 4K.
              </p>
            </div>

            <div style={{ marginTop: 24, padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[["Processing Speed", "~3–8 seconds"], ["Server Load", "Distributed"], ["Privacy", "Zero logging"], ["Ads", "None"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 13 }}>
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>{k}</span>
                  <span style={{ color: "#4ade80", fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO content */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 20, color: "rgba(255,255,255,0.9)" }}>Download YouTube Videos in 1080p Full HD — Completely Free</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, fontSize: 15 }}>
              Our <strong style={{ color: "#fff" }}>YouTube to MP4 1080p downloader</strong> lets you save any public YouTube video in Full HD quality directly to your device. Whether you need it for offline viewing, video editing, research, or content archiving, our tool delivers the original quality without any re-encoding loss.
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, fontSize: 15, marginTop: 16 }}>
              We support the latest video codecs including H.264, H.265/HEVC, VP9, and AV1 — ensuring compatibility across all devices and editing software. Downloads include the full audio track at up to 320 kbps AAC.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}