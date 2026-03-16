/**
 * SEO Page: /youtube-to-mp3-free
 * Design: Audio-first glassmorphism — Clash Display + DM Sans,
 *         animated waveform, floating cards, music player mockup,
 *         bitrate comparison, soft dark with purple/emerald accent.
 * Keywords: youtube to mp3 free, convert youtube to mp3, yt mp3 downloader 2025,
 *           free youtube mp3 converter, youtube audio downloader free, 320kbps youtube
 */

import { useState, useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

/* ── Animated waveform ── */
function Waveform({ bars = 48 }: { bars?: number }) {
  const heights = Array.from({ length: bars }, () => Math.random() * 0.7 + 0.2);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3, height: 48 }}>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [h, Math.random() * 0.7 + 0.2, h] }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.04,
          }}
          style={{
            width: 3,
            height: "100%",
            background: `linear-gradient(180deg,#A78BFA,#34D399)`,
            borderRadius: 2,
            transformOrigin: "center",
            opacity: 0.7 + h * 0.3,
          }}
        />
      ))}
    </div>
  );
}

/* ── Music player mockup ── */
function PlayerMock() {
  const [progress, setProgress] = useState(38);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.4));
    }, 80);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease }}
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 24,
        padding: "28px 28px 20px",
        width: 300,
        boxShadow: "0 32px 80px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* Album art */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          borderRadius: 16,
          background: "linear-gradient(135deg,#7C3AED,#0D9488,#A78BFA)",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          boxShadow: "0 16px 40px rgba(124,58,237,0.4)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        🎵
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 30%,rgba(255,255,255,0.15),transparent 60%)" }} />
      </div>

      {/* Song info */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          YouTube Audio Track
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
          MP3 · 320 kbps · Downloaded
        </div>
      </div>

      {/* Waveform */}
      <div style={{ marginBottom: 14 }}>
        <Waveform bars={36} />
      </div>

      {/* Progress */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg,#7C3AED,#34D399)",
              borderRadius: 2,
              transition: "width 0.08s linear",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
            {Math.floor((progress / 100) * 214 / 60)}:{String(Math.floor((progress / 100) * 214) % 60).padStart(2, "0")}
          </span>
          <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>3:34</span>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
        {["⏮", playing ? "⏸" : "▶", "⏭"].map((icon, i) => (
          <button
            key={i}
            onClick={() => i === 1 && setPlaying((p) => !p)}
            style={{
              background: i === 1 ? "linear-gradient(135deg,#7C3AED,#34D399)" : "rgba(255,255,255,0.06)",
              border: "none",
              color: "#fff",
              width: i === 1 ? 48 : 36,
              height: i === 1 ? 48 : 36,
              borderRadius: "50%",
              fontSize: i === 1 ? "1.2rem" : "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: i === 1 ? "0 4px 20px rgba(124,58,237,0.5)" : "none",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "")}
          >
            {icon}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Bitrate card ── */
function BitrateCard({ kbps, label, desc, recommended }: { kbps: string; label: string; desc: string; recommended?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 16,
        border: `1px solid ${recommended ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`,
        background: recommended
          ? hov ? "rgba(167,139,250,0.12)" : "rgba(167,139,250,0.07)"
          : hov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
        padding: "24px 22px",
        position: "relative",
        transition: "all 0.28s",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov && recommended ? "0 8px 36px rgba(167,139,250,0.2)" : "none",
        cursor: "default",
      }}
    >
      {recommended && (
        <div
          style={{
            position: "absolute",
            top: -1,
            right: 16,
            padding: "3px 10px",
            background: "linear-gradient(135deg,#7C3AED,#34D399)",
            borderRadius: "0 0 8px 8px",
            fontSize: "0.6rem",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Recommended
        </div>
      )}
      <div
        style={{
          fontSize: "2.2rem",
          fontWeight: 800,
          color: recommended ? "#A78BFA" : "#fff",
          fontFamily: "monospace",
          marginBottom: 4,
          letterSpacing: "-0.02em",
        }}
      >
        {kbps}
      </div>
      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: recommended ? "#A78BFA" : "rgba(255,255,255,0.7)", marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

/* ── Feature row ── */
function FeatureRow({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          background: "linear-gradient(135deg,rgba(124,58,237,0.2),rgba(52,211,153,0.2))",
          border: "1px solid rgba(167,139,250,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: 5 }}>{title}</div>
        <div style={{ fontSize: "0.81rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>{desc}</div>
      </div>
    </div>
  );
}

export default function YouTubeToMP3Free() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap";
    document.head.appendChild(link);

    document.title = "YouTube to MP3 Free – Convert YouTube to MP3 320kbps 2025 | FreeReelsDownloader";

    const addMeta = (name: string, content: string) => {
      const m = document.createElement("meta");
      m.setAttribute("name", name);
      m.setAttribute("content", content);
      document.head.appendChild(m);
    };
    addMeta("description", "Convert any YouTube video to MP3 free — up to 320kbps. No login, no software, no limits. The best free YouTube to MP3 converter online in 2025.");
    addMeta("keywords", "youtube to mp3 free, convert youtube to mp3, yt mp3 downloader 2025, free youtube mp3 converter, youtube audio downloader, 320kbps youtube mp3");

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "YouTube to MP3 Free Converter",
      url: "https://www.freereelsdownloader.com/youtube-to-mp3-free",
      description: "Convert any YouTube video to MP3 audio free — up to 320kbps. No login required.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans',sans-serif",
        background: "#080B12",
        color: "#F0F4FF",
        minHeight: "100vh",
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* background mesh */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 20%,rgba(124,58,237,0.18),transparent 50%)," +
            "radial-gradient(ellipse at 80% 70%,rgba(52,211,153,0.1),transparent 50%)," +
            "radial-gradient(ellipse at 50% 50%,rgba(0,0,0,0.5),transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "16px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(8,11,18,0.85)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Clash Display',sans-serif",
            fontSize: "1.2rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            background: "linear-gradient(90deg,#A78BFA,#34D399)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
          }}
        >
          FreeReels
        </a>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          {[
            { label: "YouTube MP3", href: "/youtube-to-mp3", active: true },
            { label: "YouTube MP4", href: "/youtube-to-mp4" },
            { label: "Instagram",   href: "/instagram-reels-downloader" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.8rem",
                fontWeight: l.active ? 600 : 400,
                color: l.active ? "#A78BFA" : "rgba(240,244,255,0.45)",
                textDecoration: "none",
                padding: "7px 14px",
                borderRadius: 8,
                background: l.active ? "rgba(167,139,250,0.1)" : "transparent",
                border: l.active ? "1px solid rgba(167,139,250,0.3)" : "1px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { if (!l.active) { e.currentTarget.style.color = "#F0F4FF"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}}
              onMouseOut={(e) => { if (!l.active) { e.currentTarget.style.color = "rgba(240,244,255,0.45)"; e.currentTarget.style.background = "transparent"; }}}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/"
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              padding: "8px 20px",
              borderRadius: 10,
              background: "linear-gradient(135deg,#7C3AED,#34D399)",
              boxShadow: "0 4px 18px rgba(124,58,237,0.4)",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(124,58,237,0.55)"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 18px rgba(124,58,237,0.4)"; }}
          >
            Convert Free ↗
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 48px 60px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 60,
          alignItems: "center",
          minHeight: "calc(100vh - 57px)",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease }}
        >
          {/* eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 99,
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.25)",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#A78BFA",
              letterSpacing: "0.06em",
              marginBottom: 28,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#A78BFA", animation: "pulse 2s infinite" }} />
            Free · No Login · 320 kbps
          </div>

          <h1
            style={{
              fontFamily: "'Clash Display',sans-serif",
              fontSize: "clamp(2.8rem,5.5vw,5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              color: "#F0F4FF",
            }}
          >
            Convert YouTube<br />
            to{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#A78BFA,#34D399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MP3 Free
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(240,244,255,0.5)",
              lineHeight: 1.7,
              maxWidth: 480,
              marginBottom: 40,
              fontWeight: 300,
            }}
          >
            Extract crystal-clear audio from any YouTube video — music, podcasts, lectures, interviews — and save as high-quality MP3 up to <strong style={{ color: "rgba(240,244,255,0.8)" }}>320 kbps</strong>. Instant, free, forever.
          </p>

          {/* Waveform display */}
          <div style={{ marginBottom: 36, maxWidth: 400 }}>
            <Waveform bars={52} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <span style={{ fontSize: "0.65rem", color: "rgba(240,244,255,0.25)", fontFamily: "monospace" }}>0:00</span>
              <span style={{ fontSize: "0.65rem", color: "rgba(167,139,250,0.6)", fontFamily: "monospace" }}>► Processing audio...</span>
              <span style={{ fontSize: "0.65rem", color: "rgba(240,244,255,0.25)", fontFamily: "monospace" }}>3:34</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 32px",
                borderRadius: 12,
                background: "linear-gradient(135deg,#7C3AED,#34D399)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(124,58,237,0.45)",
                letterSpacing: "0.03em",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(124,58,237,0.6)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,58,237,0.45)"; }}
            >
              🎵 Extract MP3 Free
            </a>
            <a
              href="#bitrates"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 24px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(240,244,255,0.5)",
                fontSize: "0.88rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.35)"; e.currentTarget.style.color = "#A78BFA"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(240,244,255,0.5)"; }}
            >
              View Bitrates ↓
            </a>
          </div>

          {/* trust badges */}
          <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            {["✓ No account needed", "✓ Works on all devices", "✓ Unlimited downloads"].map((b) => (
              <span key={b} style={{ fontSize: "0.78rem", color: "rgba(52,211,153,0.8)", fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </motion.div>

        {/* Player mockup */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PlayerMock />
        </div>
      </section>

      {/* ── BITRATE SECTION ── */}
      <section
        id="bitrates"
        style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ marginBottom: 48 }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display',sans-serif",
              fontSize: "clamp(2rem,3.5vw,3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#F0F4FF",
              marginBottom: 10,
            }}
          >
            Choose Your MP3 Quality
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(240,244,255,0.42)", maxWidth: 480, lineHeight: 1.65 }}>
            We always extract the highest quality YouTube provides. Select the bitrate that fits your needs.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
          {[
            { kbps: "320", label: "kbps — Ultra Quality", desc: "Best for music lovers and audiophiles. Indistinguishable from CD quality. Larger file size.", recommended: true },
            { kbps: "256", label: "kbps — High Quality",  desc: "Excellent audio for most listeners. Great balance of quality and file size." },
            { kbps: "192", label: "kbps — Standard",      desc: "Good for spoken content, podcasts, and everyday listening." },
            { kbps: "128", label: "kbps — Compact",       desc: "Smallest file size. Good for voice recordings and low-bandwidth use." },
          ].map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            >
              <BitrateCard {...b} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "0 48px 100px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ marginBottom: 40 }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display',sans-serif",
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#F0F4FF",
              marginBottom: 8,
            }}
          >
            Why Our YouTube MP3 Converter?
          </h2>
        </motion.div>

        <div>
          {[
            { icon: "⚡", title: "Instant Conversion", desc: "Most videos convert in under 10 seconds. No waiting in queues, no batch processing delays." },
            { icon: "🎧", title: "320kbps High Fidelity", desc: "We request the highest audio stream YouTube provides — delivering the best possible MP3 quality without re-compression." },
            { icon: "📱", title: "Works on Any Device", desc: "iPhone, Android, Mac, Windows, Linux. No app required — just your browser. Downloads work via Safari, Chrome, Firefox, and Edge." },
            { icon: "🔒", title: "No Data Stored", desc: "We don't cache or store any audio on our servers. Your download streams directly to your device with full privacy." },
            { icon: "∞", title: "No Limits", desc: "Download as many YouTube MP3s as you want. No daily caps, no premium tier, no tricks." },
            { icon: "🎵", title: "All YouTube Content", desc: "Works on music videos, podcasts, lectures, interviews, live recordings, YouTube Shorts, and playlists." },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: i * 0.07 }}
            >
              <FeatureRow {...f} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SEO PROSE ── */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 48px 100px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 72,
        }}
      >
        <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "1.7rem", fontWeight: 700, color: "#F0F4FF", marginBottom: 16, letterSpacing: "-0.02em" }}>
          YouTube to MP3 Free — The Complete 2025 Guide
        </h2>
        <p style={{ fontSize: "0.87rem", color: "rgba(240,244,255,0.42)", lineHeight: 1.85, marginBottom: 14 }}>
          Whether you want to listen to your favourite YouTube music offline, save a podcast episode, or extract audio from a tutorial, converting YouTube to MP3 is the simplest solution. MP3 files are universally supported — every phone, car stereo, smart speaker, and music player can play them.
        </p>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "rgba(240,244,255,0.75)", margin: "22px 0 8px" }}>
          What bitrate should I choose?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(240,244,255,0.42)", lineHeight: 1.85, marginBottom: 14 }}>
          For music, always choose 320 kbps — it delivers near-CD quality and the file sizes remain reasonable (around 5–8 MB for a 3-minute track). For podcasts and spoken word content, 128 kbps is perfectly sufficient and keeps files compact.
        </p>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "rgba(240,244,255,0.75)", margin: "22px 0 8px" }}>
          Is YouTube to MP3 conversion legal?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(240,244,255,0.42)", lineHeight: 1.85 }}>
          Downloading audio for personal offline listening is generally acceptable in most regions. However, distributing or monetizing converted content without permission violates copyright law. Always respect the rights of content creators.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Clash Display',sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            background: "linear-gradient(90deg,#A78BFA,#34D399)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
          }}
        >
          FreeReels
        </a>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[
            { label: "YouTube MP3",       href: "/youtube-to-mp3" },
            { label: "320kbps MP3",       href: "/youtube-to-mp3-320kbps" },
            { label: "YouTube MP4",       href: "/youtube-to-mp4" },
            { label: "Instagram Reels",   href: "/instagram-reels-downloader" },
            { label: "YouTube Music",     href: "/youtube-music-downloader" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.72rem", color: "rgba(240,244,255,0.26)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "rgba(240,244,255,0.55)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(240,244,255,0.26)")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ fontSize: "0.67rem", color: "rgba(240,244,255,0.18)" }}>
          © {new Date().getFullYear()} FreeReelsDownloader · Not affiliated with YouTube or Google
        </span>
      </footer>
    </div>
  );
}