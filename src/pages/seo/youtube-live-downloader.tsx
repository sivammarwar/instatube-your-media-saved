import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/DownloadEngine";

const faqs = [
  { q: "Can I download a YouTube live stream while it's still live?", a: "Yes! Our tool supports downloading ongoing live streams. Simply paste the live URL and we'll capture the stream in real-time. Note that live stream downloads begin from the moment you start — not from the stream's beginning." },
  { q: "Can I download a YouTube live stream after it ends?", a: "Absolutely. Once a live stream ends, YouTube saves it as a regular video in most cases. You can then paste the video URL and download it just like any other YouTube video." },
  { q: "What formats are supported for live stream downloads?", a: "We support MP4 (video), M4A/MP3 (audio only), and MKV for live streams. MP4 at 1080p is the most popular choice for recorded streams." },
  { q: "Why does my live stream download seem to stop?", a: "Live streams are continuous — our tool captures them in chunks. If the stream is very long, your browser may need to assemble multiple segments. Use our desktop option for streams over 2 hours." },
  { q: "Is downloading YouTube live streams legal?", a: "Downloading for personal, offline viewing of content you have rights to is generally acceptable. Redistributing streams without permission from creators or YouTube may violate terms of service." },
  { q: "What's the max quality for live stream downloads?", a: "YouTube live streams typically cap at 1080p60fps. We download at the highest quality available, which varies by the streamer's upload settings." },
];

export default function YouTubeLiveDownloader() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>YouTube Live Stream Downloader – Download YouTube Live Videos Free</title>
        <meta name="description" content="Download YouTube live streams instantly. Save ongoing or finished YouTube live videos in HD MP4. Free YouTube live stream downloader — no software needed." />
        <meta name="keywords" content="youtube live stream downloader, download youtube live video, save youtube live stream, youtube live to mp4, record youtube live stream" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-live-downloader" />
      </Helmet>

      <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: "#030609", minHeight: "100vh", color: "#fff" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
          @keyframes pulse-ring { 0% { transform: scale(0.9); opacity: 1; } 100% { transform: scale(2.2); opacity: 0; } }
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
          .live-badge { display: inline-flex; align-items: center; gap: 8px; background: #ff0000; padding: 7px 18px; border-radius: 6px; font-size: 13px; font-weight: 800; letter-spacing: 0.1em; }
          .live-dot { width: 10px; height: 10px; border-radius: 50%; background: #fff; animation: blink 1.2s infinite; }
          .url-input { width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 18px 22px; color: #fff; font-size: 16px; font-family: inherit; outline: none; box-sizing: border-box; }
          .url-input:focus { border-color: #ff0000; box-shadow: 0 0 0 4px rgba(255,0,0,0.1); }
          .dl-btn { background: #ff0000; border: none; color: #fff; padding: 18px 40px; border-radius: 14px; font-size: 16px; font-weight: 800; cursor: pointer; width: 100%; font-family: inherit; transition: all 0.2s; }
          .dl-btn:hover { background: #cc0000; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,0,0,0.35); }
          .faq-item { border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; transition: border-color 0.2s; margin-bottom: 12px; }
          .faq-item.open { border-color: rgba(255,0,0,0.3); }
          .faq-q { padding: 20px 24px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 15px; }
          .faq-a { padding: 0 24px 20px; color: rgba(255,255,255,0.5); font-size: 14px; line-height: 1.8; }
          .stat-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; text-align: center; }
        `}</style>

        {/* Nav */}
        <nav style={{ padding: "20px 32px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>FreereelsDownloader</span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>›</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>YouTube Live Downloader</span>
        </nav>

        {/* Hero */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "80px 24px 60px", textAlign: "center" }}>
          {/* Live badge with pulse */}
          <div style={{ position: "relative", display: "inline-flex", justifyContent: "center", marginBottom: 36 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 6, background: "rgba(255,0,0,0.4)", animation: "pulse-ring 1.5s infinite" }} />
            <span className="live-badge">
              <span className="live-dot" />
              LIVE STREAM DOWNLOADER
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-1.5px" }}>
            Download YouTube<br />
            <span style={{ color: "#ff0000" }}>Live Streams</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 18, lineHeight: 1.7, maxWidth: 540, margin: "0 auto 48px" }}>
            Save ongoing or completed YouTube live streams as MP4 videos. Capture every moment — from gaming marathons to live concerts.
          </p>

          {/* ── Live Download Engine ── */}
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff0000", animation: "blink 1.2s infinite" }} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Paste Live or Recorded Stream URL</span>
            </div>
            <DownloadEngine platformHint="youtube" />
          </div>
        </section>

        {/* Stats */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {[["🔴", "Live Streams", "Supported"], ["4K", "Max Quality", "Available"], ["⚡", "Real-Time", "Capture"], ["🔒", "Zero", "Data Stored"]].map(([icon, label, sub]) => (
              <div key={label} className="stat-box">
                <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>{sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 60px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800, marginBottom: 40 }}>How to Download YouTube Live Streams</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { step: "1", title: "Find the live stream URL", desc: "Open YouTube and navigate to the live stream you want to download. Copy the full URL from your browser address bar." },
              { step: "2", title: "Paste the URL above", desc: "Paste the YouTube live stream link into the input field. Works for both currently-live streams and past live videos." },
              { step: "3", title: "Choose your format", desc: "Select video quality (4K, 1080p, 720p) or audio-only format depending on your needs." },
              { step: "4", title: "Download instantly", desc: "Click Download Stream and save the file to your device within seconds." },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: "20px 24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,0,0,0.12)", border: "1px solid rgba(255,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#ff0000", fontSize: 18, flexShrink: 0 }}>{s.step}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 80px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800, marginBottom: 32 }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 20, lineHeight: 1 }}>{openFaq === i ? "−" : "+"}</span>
              </div>
              {openFaq === i && <div className="faq-a">{faq.a}</div>}
            </div>
          ))}
        </section>
      </div>
    </>
  );
}