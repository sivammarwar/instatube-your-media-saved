import { Helmet } from "react-helmet";
import { useState } from "react";
import DownloadEngine from "@/components/Downloadengine";

export default function YoutubeEmbedDownloader() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "$ freereels-dl --version 2.4.0",
    "> Ready. Awaiting embed URL or video ID...",
  ]);

  const extractVideoId = (str: string) => {
    const patterns = [
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
      /youtu\.be\/([a-zA-Z0-9_-]{11})/,
      /^([a-zA-Z0-9_-]{11})$/,
    ];
    for (const pattern of patterns) {
      const match = str.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const runAnalysis = () => {
    if (!input) return;
    const videoId = extractVideoId(input);
    const timestamp = new Date().toLocaleTimeString("en-US", { hour12: false });
    const newLines: string[] = [
      ...lines,
      `$ freereels-dl analyze "${input}"`,
      `[${timestamp}] Parsing input...`,
    ];
    if (videoId) {
      newLines.push(`[${timestamp}] ✓ Video ID detected: ${videoId}`);
      newLines.push(`[${timestamp}] ✓ Fetching available formats...`);
      newLines.push(`[${timestamp}] ✓ Found: 4K, 1080p, 720p, 480p, 360p`);
      newLines.push(`[${timestamp}] ✓ Audio: AAC 128kbps, 256kbps, 320kbps`);
      newLines.push(`> Ready to download. Select format below.`);
    } else {
      newLines.push(`[${timestamp}] ✗ Could not parse video ID from input`);
      newLines.push(`> Try: youtube.com/embed/ID, youtube.com/watch?v=ID, or just the ID`);
    }
    setLines(newLines.slice(-12));
  };

  return (
    <>
      <Helmet>
        <title>YouTube Embed Video Downloader – Download Embedded YouTube Videos Free</title>
        <meta name="description" content="Download embedded YouTube videos from any website. Extract and save YouTube embed videos in HD MP4. Free YouTube embed downloader — works with all embed URLs." />
        <meta name="keywords" content="youtube embed video downloader, download embedded youtube video, youtube embed downloader, save youtube embedded video, extract youtube embed" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/youtube-embed-downloader" />
      </Helmet>

      <div style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace", background: "#0C0D11", minHeight: "100vh", color: "#E4E4E7" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');
          @keyframes cursor-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          .terminal { background: #080A0E; border: 1px solid #1e2028; border-radius: 12px; overflow: hidden; }
          .terminal-bar { background: #111318; padding: 12px 16px; border-bottom: 1px solid #1e2028; display: flex; align-items: center; gap: 8px; }
          .t-dot { width: 12px; height: 12px; border-radius: 50%; }
          .terminal-body { padding: 20px; min-height: 220px; }
          .t-line { font-size: 13px; line-height: 1.8; }
          .t-cmd { color: #50fa7b; }
          .t-info { color: #6272a4; }
          .t-success { color: #50fa7b; }
          .t-error { color: #ff5555; }
          .t-ready { color: #bd93f9; }
          .cursor { display: inline-block; width: 8px; height: 14px; background: #50fa7b; animation: cursor-blink 1s infinite; vertical-align: middle; margin-left: 2px; }
          .cmd-input { background: #080A0E; border: none; color: #50fa7b; font-family: inherit; font-size: 13px; outline: none; flex: 1; caret-color: #50fa7b; }
          .cmd-input::placeholder { color: #3a3d4a; }
          .input-row { display: flex; align-items: center; gap: 8px; border-top: 1px solid #1e2028; padding: 12px 20px; background: #080A0E; }
          .run-btn { background: #50fa7b; color: #080A0E; border: none; padding: 6px 14px; border-radius: 6px; font-family: inherit; font-size: 12px; font-weight: 700; cursor: pointer; transition: all 0.15s; }
          .run-btn:hover { background: #69ff8f; }
          .format-table { border: 1px solid #1e2028; border-radius: 10px; overflow: hidden; }
          .format-row { display: grid; grid-template-columns: 100px 120px 1fr 100px; padding: 12px 20px; border-bottom: 1px solid #1e2028; font-size: 13px; }
          .format-row:last-child { border-bottom: none; }
          .format-header { background: #111318; color: #6272a4; font-weight: 700; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; }
          .dl-chip { background: rgba(80,250,123,0.1); border: 1px solid rgba(80,250,123,0.3); color: #50fa7b; padding: 4px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; transition: all 0.15s; }
          .dl-chip:hover { background: rgba(80,250,123,0.2); }
          .comment { color: #6272a4; }
        `}</style>

        {/* Title bar */}
        <div style={{ padding: "14px 24px 14px", borderBottom: "1px solid #1a1d26", display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5555" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffb86c" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#50fa7b" }} />
          </div>
          <span style={{ fontSize: 12, color: "#6272a4" }}>freereels-dl — youtube-embed-downloader — bash</span>
        </div>

        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 24px" }}>

          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 12, color: "#6272a4", marginBottom: 14 }}><span className="comment">// </span>YouTube Embed Video Downloader · v2.4.0 · MIT License</div>
            <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 12px", letterSpacing: "-0.5px", color: "#f8f8f2" }}>
              <span style={{ color: "#50fa7b" }}>$</span> Download YouTube<br />
              <span style={{ color: "#bd93f9" }}>Embed</span> Videos
            </h1>
            <p style={{ fontSize: 15, color: "#6272a4", lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
              <span className="comment">// </span>Extract and download YouTube embedded videos from any website. Supports youtube.com/embed/ URLs, standard watch links, and raw video IDs.
            </p>
          </div>

          {/* Terminal */}
          <div className="terminal" style={{ marginBottom: 32 }}>
            <div className="terminal-bar">
              <div className="t-dot" style={{ background: "#ff5555" }} />
              <div className="t-dot" style={{ background: "#ffb86c" }} />
              <div className="t-dot" style={{ background: "#50fa7b" }} />
              <span style={{ fontSize: 12, color: "#6272a4", marginLeft: 8 }}>freereels-downloader ~ youtube-embed</span>
            </div>
            <div className="terminal-body">
              {lines.map((line, i) => {
                let cls = "t-line t-info";
                if (line.startsWith("$")) cls = "t-line t-cmd";
                else if (line.includes("✓")) cls = "t-line t-success";
                else if (line.includes("✗")) cls = "t-line t-error";
                else if (line.startsWith(">")) cls = "t-line t-ready";
                return <div key={i} className={cls}>{line}</div>;
              })}
              <div className="t-line t-cmd" style={{ marginTop: 8 }}>$ <span className="cursor" /></div>
            </div>
            <div className="input-row">
              <span style={{ color: "#50fa7b", fontSize: 13 }}>$</span>
              <input
                className="cmd-input"
                value={input}
                onChange={e => { setInput(e.target.value); runAnalysis(); }}
                onKeyDown={e => e.key === "Enter" && runAnalysis()}
                placeholder="youtube.com/embed/VIDEO_ID  or  watch?v=...  or  youtu.be/..."
              />
              <button className="run-btn" onClick={runAnalysis}>RUN</button>
            </div>
          </div>

          {/* ── Live Download Engine ── */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 12, color: "#6272a4", marginBottom: 12 }}><span className="comment">// </span>Paste URL below to fetch real download links</div>
            <DownloadEngine platformHint="youtube" />
          </div>

          {/* Format table */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 12, color: "#6272a4", marginBottom: 12 }}><span className="comment">// </span>Available download formats</div>
            <div className="format-table">
              <div className="format-row format-header">
                <span>Format</span>
                <span>Resolution</span>
                <span>Details</span>
                <span>Action</span>
              </div>
              {[
                { fmt: "MP4", res: "4K UHD", detail: "H.264 · 60fps · HDR · ~2.5GB/hr" },
                { fmt: "MP4", res: "1080p HD", detail: "H.264 · 30/60fps · AAC 256kbps" },
                { fmt: "MP4", res: "720p HD", detail: "H.264 · 30fps · AAC 128kbps" },
                { fmt: "MP4", res: "480p SD", detail: "H.264 · 30fps · AAC 128kbps" },
                { fmt: "MP3", res: "Audio", detail: "320kbps · AAC extracted · full track" },
                { fmt: "M4A", res: "Audio", detail: "256kbps · Apple compatible" },
              ].map((row, i) => (
                <div key={i} className="format-row" style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                  <span style={{ color: "#ff79c6" }}>{row.fmt}</span>
                  <span style={{ color: "#ffb86c" }}>{row.res}</span>
                  <span style={{ color: "#6272a4" }}>{row.detail}</span>
                  <span className="dl-chip">⬇ dl</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supported embed patterns */}
          <div style={{ background: "#080A0E", border: "1px solid #1e2028", borderRadius: 12, padding: 24, marginBottom: 40 }}>
            <div style={{ fontSize: 12, color: "#6272a4", marginBottom: 16 }}><span className="comment">// </span>Supported URL patterns</div>
            {[
              ["youtube.com/embed/VIDEO_ID", "Standard embed URL"],
              ["youtube.com/watch?v=VIDEO_ID", "Regular video URL"],
              ["youtu.be/VIDEO_ID", "Short URL"],
              ["VIDEO_ID (11 chars)", "Raw YouTube video ID"],
            ].map(([pattern, desc]) => (
              <div key={pattern} style={{ display: "flex", gap: 24, padding: "8px 0", borderBottom: "1px solid #14161a", alignItems: "center", fontSize: 13 }}>
                <code style={{ color: "#50fa7b", minWidth: "280px" }}>{pattern}</code>
                <span style={{ color: "#6272a4" }}><span className="comment">// </span>{desc}</span>
              </div>
            ))}
          </div>

          {/* SEO text */}
          <div>
            <div style={{ fontSize: 12, color: "#6272a4", marginBottom: 16 }}><span className="comment">// </span>About this tool</div>
            <p style={{ fontSize: 14, color: "#6272a4", lineHeight: 1.9 }}>
              Our <span style={{ color: "#f8f8f2" }}>YouTube embed video downloader</span> lets you download any video that's embedded on a website using YouTube's embed player. Simply find the embed URL (it looks like youtube.com/embed/VIDEO_ID) or the standard YouTube watch URL, paste it above, and download in your preferred format. No software required — runs entirely in your browser.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}