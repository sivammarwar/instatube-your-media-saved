import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/DownloadEngine";

const embedSources = [
  { src: "Website Embeds",        icon: "🌐", desc: "Download YouTube videos embedded on blogs, news sites, and web pages." },
  { src: "Educational Platforms", icon: "🎓", desc: "Save YouTube-embedded lecture content from Coursera, edX, and learning sites." },
  { src: "Social Embeds",         icon: "📱", desc: "Extract videos embedded via YouTube player on forums and community sites." },
  { src: "iFrame Embeds",         icon: "💻", desc: "Works with standard YouTube iFrame embed codes on any website." },
];

const steps = [
  { cmd: "$ Find the embedded YouTube video on the website", out: "Right-click the player → 'Copy video URL' or inspect the page source for the src link" },
  { cmd: "$ Extract the YouTube video ID from the embed URL", out: "youtube.com/embed/VIDEO_ID → copy the VIDEO_ID string" },
  { cmd: "$ Reconstruct the full YouTube watch URL", out: "Format it as: https://www.youtube.com/watch?v=VIDEO_ID" },
  { cmd: "$ Paste the URL into our downloader above", out: "Fetch → select quality → download to your device ✓" },
];

const faqs = [
  { q: "What is a YouTube embedded video?", a: "An embedded YouTube video is a YouTube player placed inside another website via an iFrame or embed code. It still plays from YouTube's servers — which means you can download it using the underlying YouTube video URL." },
  { q: "How do I find the URL of an embedded YouTube video?", a: "Right-click the video player and select 'Copy video URL' if available. Alternatively, view the page source (Ctrl+U) and search for 'embed/' to find the video ID, then reconstruct as youtube.com/watch?v=VIDEO_ID." },
  { q: "Can I download YouTube videos embedded on any website?", a: "Yes. Any YouTube video embedded anywhere is ultimately hosted by YouTube. Once you have the video's YouTube watch URL, paste it into our downloader and it works exactly the same way." },
  { q: "What format will the downloaded embedded video be in?", a: "All downloads are delivered as MP4 files with AAC audio. Quality options including up to 1080p HD or 4K are shown in the results." },
  { q: "Does this work for age-restricted embedded YouTube videos?", a: "Age-restricted videos require a YouTube login to view. Our tool works for publicly accessible embedded videos without authentication requirements." },
];

export default function YouTubeEmbedVideoDownloader() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>YouTube Embed Video Downloader — Save Embedded YouTube Videos Free</title>
        <meta name="description" content="Download YouTube videos embedded on websites, blogs, and apps. Free online YouTube embed downloader — extract any embedded YouTube video as MP4 or MP3. No software needed." />
        <meta name="keywords" content="youtube embed video downloader, download embedded youtube video, save youtube embedded video, youtube iframe downloader, download youtube video from website, embedded video downloader online free" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-embed-video-downloader" />
      </Helmet>

      <div style={{ background: "#0a0e0a", minHeight: "100vh", color: "#fff", fontFamily: "'Courier New', 'Cascadia Code', monospace" }}>

        {/* ── Terminal Hero + Engine ── */}
        <section style={{ background: "linear-gradient(180deg,#080c08 0%,#0a0e0a 100%)", padding: "60px 24px 52px", borderBottom: "1px solid rgba(34,197,94,0.2)" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            {/* Terminal chrome */}
            <div style={{ background: "#1a1d1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px 12px 0 0", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
              <span style={{ flex: 1, textAlign: "center", fontSize: 12, color: "#6b7280" }}>youtube-embed-downloader — bash</span>
            </div>
            {/* Terminal body */}
            <div style={{ background: "#0f110f", border: "1px solid rgba(255,255,255,0.08)", borderTop: "none", borderRadius: "0 0 12px 12px", padding: "28px 24px 32px" }}>
              <div style={{ color: "#22c55e", fontSize: 13, marginBottom: 6 }}><span style={{ color: "#6b7280" }}>user@freereels:~$ </span>youtube-embed-downloader --help</div>
              <div style={{ color: "#a3e635", fontSize: 22, fontWeight: 700, margin: "16px 0 8px", fontFamily: "system-ui" }}>YouTube Embed Video Downloader</div>
              <div style={{ color: "#6b7280", fontSize: 13, marginBottom: 20 }}># Save embedded YouTube videos from any website as MP4 or MP3</div>
              <div style={{ color: "#22c55e", fontSize: 13, marginBottom: 12 }}><span style={{ color: "#6b7280" }}>user@freereels:~$ </span>download --url</div>
              <DownloadEngine platformHint="youtube" />
              <div style={{ color: "#6b7280", fontSize: 12, marginTop: 12 }}># Supported: youtube.com/watch?v=ID | youtu.be/ID | youtube.com/embed/ID</div>
            </div>
          </div>
        </section>

        {/* ── How to Find Embedded URL ── */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 36 }}><span style={{ color: "#22c55e" }}>$ </span>How to Find an Embedded YouTube URL</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ background: "#0f110f", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ background: "#1a1d1a", padding: "10px 18px", fontSize: 13, color: "#a3e635" }}>{s.cmd}</div>
                <div style={{ padding: "12px 18px", fontSize: 13, color: "#6b7280" }}>→ {s.out}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Embed Sources ── */}
        <section style={{ background: "rgba(34,197,94,0.03)", borderTop: "1px solid rgba(34,197,94,0.1)", borderBottom: "1px solid rgba(34,197,94,0.1)", padding: "60px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 40 }}><span style={{ color: "#22c55e" }}>$ </span>Supported Embed Sources</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
              {embedSources.map((e) => (
                <div key={e.src} style={{ background: "#0f110f", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 12, padding: "24px 22px" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{e.icon}</div>
                  <div style={{ fontFamily: "system-ui", fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#a3e635" }}>{e.src}</div>
                  <div style={{ fontFamily: "system-ui", color: "#6b7280", fontSize: 13, lineHeight: 1.65 }}>{e.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
          <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, marginBottom: 40 }}><span style={{ color: "#22c55e" }}>$ </span>FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: "1px solid rgba(34,197,94,0.15)", borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: openFaq === i ? "rgba(34,197,94,0.06)" : "#0f110f", border: "none", padding: "16px 20px", textAlign: "left", color: "#a3e635", fontWeight: 600, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "inherit" }}>
                  {f.q}<span style={{ color: "#22c55e", fontSize: 18, flexShrink: 0, marginLeft: 12, fontFamily: "system-ui" }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div style={{ padding: "0 20px 16px", color: "#6b7280", lineHeight: 1.7, fontSize: 13, fontFamily: "system-ui" }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ── SEO Text ── */}
        <section style={{ borderTop: "1px solid rgba(34,197,94,0.1)", padding: "56px 24px 80px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "system-ui", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800, marginBottom: 20 }}>Download Embedded YouTube Videos from Any Website</h2>
            <p style={{ fontFamily: "system-ui", color: "#9ca3af", lineHeight: 1.85, fontSize: 15, marginBottom: 18 }}>When a YouTube video is embedded on a website, it's still hosted by YouTube. Our <strong style={{ color: "#fff" }}>YouTube embed video downloader</strong> works with any standard YouTube iFrame embed. Find the watch URL using the steps above, paste it into our tool, and download as MP4 up to 1080p HD — completely free.</p>
            <p style={{ fontFamily: "system-ui", color: "#9ca3af", lineHeight: 1.85, fontSize: 15 }}>Works on all browsers and devices. No app download or login required in 2025.</p>
          </div>
        </section>
      </div>
    </>
  );
}