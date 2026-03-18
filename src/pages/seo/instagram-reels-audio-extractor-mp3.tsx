import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import DownloadEngine from "@/components/Downloadengine";

const BARS = 48;

export default function InstagramReelsAudioExtractorMp3() {
  const [playing, setPlaying] = useState(false);
  const [bars, setBars] = useState<number[]>(() => Array.from({ length: BARS }, () => Math.random() * 80 + 10));

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setBars(Array.from({ length: BARS }, () => Math.random() * 80 + 10));
    }, 120);
    return () => clearInterval(interval);
  }, [playing]);

  const formats = [
    { ext: "MP3", bitrate: "320 kbps", desc: "Universal compatibility" },
    { ext: "MP3", bitrate: "128 kbps", desc: "Smaller file size" },
    { ext: "M4A", bitrate: "256 kbps", desc: "Apple devices" },
    { ext: "OGG", bitrate: "320 kbps", desc: "Open source format" },
  ];

  return (
    <>
      <Helmet>
        <title>Instagram Reels to MP3 – Extract Audio from Instagram Reels Free</title>
        <meta name="description" content="Extract and download audio from Instagram Reels as MP3. Free online Instagram reel audio extractor. Save Instagram audio in 320kbps MP3, M4A, OGG quality. No login required." />
        <meta name="keywords" content="instagram reels to mp3, extract audio from instagram reels, instagram reel audio extractor mp3, download instagram reel audio, instagram audio downloader mp3" />
        <link rel="canonical" href="https://www.freereelsdownloader.com/instagram-reels-audio-extractor-mp3" />
      </Helmet>

      <div style={{ fontFamily: "'Outfit', sans-serif", background: "#080B14", minHeight: "100vh", color: "#fff" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');
          .wave-bar { border-radius: 3px; background: linear-gradient(to top, #E1306C, #fd7eb3); transition: height 0.1s ease; }
          .format-chip { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px 20px; cursor: pointer; transition: all 0.2s; }
          .format-chip:hover { border-color: #E1306C; background: rgba(225,48,108,0.08); }
          .url-wrap { display: flex; gap: 12px; align-items: stretch; }
          .url-in { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 16px 20px; color: #fff; font-size: 15px; font-family: 'Outfit', sans-serif; outline: none; }
          .url-in:focus { border-color: #E1306C; box-shadow: 0 0 0 3px rgba(225,48,108,0.12); }
          .extract-btn { background: linear-gradient(135deg, #E1306C, #fd7eb3); border: none; color: #fff; padding: 16px 28px; border-radius: 14px; font-size: 15px; font-weight: 700; cursor: pointer; white-space: nowrap; font-family: 'Outfit', sans-serif; }
          .extract-btn:hover { transform: scale(1.02); box-shadow: 0 8px 25px rgba(225,48,108,0.35); }
          .play-btn { width: 52px; height: 52px; border-radius: 50%; background: #E1306C; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: all 0.2s; flex-shrink: 0; }
          .play-btn:hover { transform: scale(1.1); }
        `}</style>

        {/* Top gradient blob */}
        <div style={{ position: "fixed", top: -200, left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(225,48,108,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Hero */}
          <section style={{ textAlign: "center", padding: "80px 24px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(225,48,108,0.1)", border: "1px solid rgba(225,48,108,0.25)", borderRadius: 100, padding: "8px 20px", marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E1306C", display: "inline-block" }} />
              <span style={{ fontSize: 13, color: "#E1306C", fontWeight: 600 }}>Instagram Audio Extractor</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.4rem, 7vw, 5rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 20px", letterSpacing: "-2px" }}>
              Extract Audio from<br />
              <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(135deg, #E1306C, #fd7eb3, #fda4af)", backgroundClip: "text" }}>Instagram Reels</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 18, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 52px" }}>
              Turn any Instagram reel into a high-quality MP3 in seconds. Save the music, voiceover, or sound — perfectly extracted.
            </p>
          </section>

          {/* Waveform visualizer */}
          <section style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 40px" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24, padding: "32px 28px" }}>
              {/* Waveform */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <button className="play-btn" onClick={() => setPlaying(p => !p)}>
                  {playing ? "⏸" : "▶"}
                </button>
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 3, height: 60, overflow: "hidden" }}>
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="wave-bar"
                      style={{ flex: 1, height: `${playing ? h : 30 + Math.sin(i * 0.4) * 20}%`, opacity: i < (BARS * 0.4) ? 0.35 : 1 }}
                    />
                  ))}
                </div>
                <div style={{ textAlign: "right", minWidth: 80 }}>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>DURATION</div>
                  <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px" }}>0:30</div>
                </div>
              </div>

              {/* URL Input — Live Download Engine */}
              <DownloadEngine platformHint="instagram" />
            </div>
          </section>

          {/* Format selector */}
          <section style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 60px" }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Output Format</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
              {formats.map((f, i) => (
                <div key={i} className="format-chip" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: i === 0 ? "#E1306C" : "#fff", marginBottom: 6 }}>{f.ext}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>{f.bitrate}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Use cases */}
          <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 60px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { emoji: "🎵", title: "Save Trending Music", desc: "That viral reel song you love? Extract the audio and add it to your playlist instantly." },
                { emoji: "🎙️", title: "Capture Voiceovers", desc: "Brilliant narration in a reel? Save the voice audio for reference, inspiration, or study." },
                { emoji: "🎚️", title: "DJ & Remix Use", desc: "Producers can grab audio snippets from reels to sample, remix, or get inspired by." },
                { emoji: "📚", title: "Language Learning", desc: "Save native speaker audio for language practice, pronunciation study, or vocabulary building." },
                { emoji: "🎬", title: "Video Editing", desc: "Extract background music from reels to use in your own video projects and creations." },
                { emoji: "💾", title: "Offline Access", desc: "Save the audio version of your favorite reels to listen to anytime, even without internet." },
              ].map(u => (
                <div key={u.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{u.emoji}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{u.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 900, marginBottom: 32, textAlign: "center" }}>Common Questions</h2>
            {[
              { q: "Is it legal to extract audio from Instagram Reels?", a: "For personal use and content you own or have rights to, it's generally fine. Respect copyright and the original creators when using extracted audio." },
              { q: "What audio quality can I expect?", a: "We extract audio at the original quality served by Instagram, typically up to 320 kbps. The output matches the source — we never downgrade quality." },
              { q: "Does it work on private accounts?", a: "Our tool works with public Instagram accounts only. Private content requires account login and isn't supported." },
              { q: "How fast is the extraction?", a: "Most reels are extracted in 3–10 seconds depending on length and server load. Longer videos may take slightly more time." },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "24px 0" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#fff" }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}