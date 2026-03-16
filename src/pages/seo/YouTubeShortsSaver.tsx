/**
 * SEO Page: /youtube-shorts-saver
 * Design: Retro-futuristic arcade / synthwave — Orbitron + Rajdhani,
 *         neon cyan/magenta grid, CRT glow, animated score counter,
 *         pixel-bordered cards, scanline mockup, glowing buttons.
 * Keywords: youtube shorts saver, download youtube shorts, save youtube shorts 2025,
 *           youtube shorts downloader free, yt shorts mp4, youtube shorts to mp4,
 *           download shorts without watermark, best youtube shorts downloader
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CYAN    = "#00F5FF";
const MAGENTA = "#FF00AA";
const YELLOW  = "#FFE600";
const GRID_BG = `
  linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)
`;

/* ── Neon text ── */
function Neon({ children, color = CYAN, size = "1rem", style }: { children: React.ReactNode; color?: string; size?: string; style?: React.CSSProperties }) {
  return (
    <span
      style={{
        color,
        textShadow: `0 0 8px ${color}, 0 0 20px ${color}60, 0 0 40px ${color}30`,
        fontSize: size,
        fontFamily: "'Orbitron',sans-serif",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ fontFamily: "'Orbitron',monospace", fontSize: "2.8rem", fontWeight: 900, color: CYAN, textShadow: `0 0 16px ${CYAN}`, lineHeight: 1 }}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}

/* ── Shorts card mockup ── */
function ShortsCard({ emoji, title, tag }: { emoji: string; title: string; tag: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 12,
        border: `1px solid ${hov ? CYAN : "rgba(0,245,255,0.2)"}`,
        background: hov ? "rgba(0,245,255,0.05)" : "rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
        overflow: "hidden",
        transition: "all 0.25s",
        boxShadow: hov ? `0 0 24px ${CYAN}30` : "none",
        cursor: "pointer",
        position: "relative",
        aspectRatio: "9/16",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: 120,
        flexShrink: 0,
      }}
    >
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", opacity: 0.7 }}>
        {emoji}
      </div>
      {/* progress bar at top */}
      <div style={{ position: "absolute", top: 8, left: 8, right: 8, height: 2, background: "rgba(255,255,255,0.15)", borderRadius: 1 }}>
        <div style={{ height: "100%", width: "60%", background: MAGENTA, borderRadius: 1, boxShadow: `0 0 8px ${MAGENTA}` }} />
      </div>
      {/* label */}
      <div style={{ padding: "8px", background: "linear-gradient(transparent,rgba(0,0,0,0.85))", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "0.55rem", fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 4 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.5rem", color: CYAN, fontFamily: "monospace" }}>#{tag}</span>
          <span style={{ fontSize: "0.65rem" }}>⬇</span>
        </div>
      </div>
    </div>
  );
}

/* ── Arcade button ── */
function ArcadeBtn({ children, primary, href }: { children: React.ReactNode; primary?: boolean; href?: string }) {
  const [hov, setHov] = useState(false);
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 32px",
    borderRadius: 0,
    border: primary ? `2px solid ${CYAN}` : `1px solid rgba(0,245,255,0.3)`,
    background: primary ? (hov ? CYAN : "transparent") : "transparent",
    color: primary ? (hov ? "#000" : CYAN) : "rgba(0,245,255,0.6)",
    fontFamily: "'Orbitron',sans-serif",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textDecoration: "none",
    cursor: "pointer",
    textTransform: "uppercase" as const,
    transition: "all 0.2s",
    boxShadow: primary ? (hov ? `0 0 32px ${CYAN}80` : `0 0 16px ${CYAN}40`) : "none",
    clipPath: primary ? "polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))" : "none",
  };
  if (href) return (
    <a href={href} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </a>
  );
  return (
    <button style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </button>
  );
}

/* ── Feature tile ── */
function Tile({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? color : "rgba(255,255,255,0.08)"}`,
        borderLeft: `3px solid ${color}`,
        padding: "24px 20px",
        background: hov ? `${color}08` : "rgba(0,0,0,0.3)",
        transition: "all 0.25s",
        backdropFilter: "blur(8px)",
        boxShadow: hov ? `0 0 20px ${color}25` : "none",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{icon}</div>
      <div
        style={{
          fontFamily: "'Orbitron',sans-serif",
          fontSize: "0.72rem",
          fontWeight: 700,
          color,
          textShadow: `0 0 8px ${color}60`,
          marginBottom: 8,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: "0.81rem", color: "rgba(224,242,255,0.45)", lineHeight: 1.7, fontFamily: "'Rajdhani',sans-serif", fontWeight: 400 }}>
        {desc}
      </p>
    </div>
  );
}

export default function YouTubeShortsSaver() {
  const [blinker, setBlinker] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);

    const id = setInterval(() => setBlinker((b) => !b), 500);

    document.title = "YouTube Shorts Saver – Download YouTube Shorts Free 2025 | FreeReelsDownloader";

    const addMeta = (name: string, content: string) => {
      const m = document.createElement("meta"); m.setAttribute("name", name); m.setAttribute("content", content); document.head.appendChild(m);
    };
    addMeta("description", "Download any YouTube Short as MP4 — free, no watermark, no login. The fastest YouTube Shorts downloader online. Save Shorts in HD quality instantly.");
    addMeta("keywords", "youtube shorts saver, download youtube shorts, save youtube shorts 2025, youtube shorts downloader free, yt shorts mp4, shorts without watermark");

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "YouTube Shorts Saver",
      url: "https://www.freereelsdownloader.com/youtube-shorts-saver",
      description: "Download YouTube Shorts as MP4 for free — no watermark, no login required.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(schema); document.head.appendChild(s);

    return () => clearInterval(id);
  }, []);

  const shorts = [
    { emoji: "🎮", title: "Gaming clip goes viral", tag: "gaming" },
    { emoji: "🍕", title: "1-min pizza recipe", tag: "food" },
    { emoji: "💃", title: "Trending dance challenge", tag: "dance" },
    { emoji: "🏋️", title: "Quick workout routine", tag: "fitness" },
    { emoji: "🎵", title: "Viral music moment", tag: "music" },
  ];

  const tiles = [
    { icon: "⚡", title: "Instant Save", desc: "Paste any YouTube Shorts URL and download in seconds. No queuing, no delays — lightning fast.", color: YELLOW },
    { icon: "📵", title: "No Watermark", desc: "Download Shorts clean and watermark-free. Perfect for offline viewing, archiving, or re-editing.", color: CYAN },
    { icon: "📱", title: "Vertical Format", desc: "Shorts download in their native 9:16 vertical format. Perfectly optimised for mobile screens.", color: MAGENTA },
    { icon: "🆓", title: "Zero Cost", desc: "Completely free to use. No premium tier, no sign-up, no ads blocking your download.", color: "#4ADE80" },
    { icon: "🖥️", title: "Any Device", desc: "Works on iPhone, Android, Mac, Windows. Open in any browser — no app or extension needed.", color: YELLOW },
    { icon: "🔒", title: "Private & Secure", desc: "We don't log your activity, store URLs, or retain any downloaded content on our servers.", color: CYAN },
  ];

  return (
    <div
      style={{
        fontFamily: "'Rajdhani',sans-serif",
        background: "#04050E",
        color: "#E0F2FF",
        minHeight: "100vh",
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
        position: "relative",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: GRID_BG,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.8,
        }}
      />
      {/* Ambient glows */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `
            radial-gradient(ellipse at 15% 30%,${CYAN}12,transparent 50%),
            radial-gradient(ellipse at 85% 60%,${MAGENTA}10,transparent 50%),
            radial-gradient(ellipse at 50% 90%,${YELLOW}08,transparent 50%)
          `,
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
          padding: "0 48px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(4,5,14,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${CYAN}30`,
          boxShadow: `0 1px 0 ${CYAN}20`,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontSize: "1rem",
            fontWeight: 900,
            letterSpacing: "0.1em",
            color: CYAN,
            textShadow: `0 0 12px ${CYAN}`,
            textDecoration: "none",
          }}
        >
          FREE<span style={{ color: MAGENTA, textShadow: `0 0 12px ${MAGENTA}` }}>REELS</span>
        </a>
        <div style={{ display: "flex", gap: 4 }}>
          {[
            { label: "Shorts",    href: "/youtube-shorts-downloader", active: true },
            { label: "YouTube",   href: "/youtube-video-downloader" },
            { label: "Instagram", href: "/instagram-reels-downloader" },
            { label: "MP3",       href: "/youtube-to-mp3" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "7px 14px",
                fontFamily: "'Orbitron',sans-serif",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: l.active ? "#000" : `${CYAN}80`,
                textDecoration: "none",
                background: l.active ? CYAN : "transparent",
                border: `1px solid ${l.active ? CYAN : CYAN + "30"}`,
                boxShadow: l.active ? `0 0 14px ${CYAN}60` : "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { if (!l.active) { e.currentTarget.style.color = CYAN; e.currentTarget.style.borderColor = CYAN + "80"; }}}
              onMouseOut={(e) => { if (!l.active) { e.currentTarget.style.color = CYAN + "80"; e.currentTarget.style.borderColor = CYAN + "30"; }}}
            >
              {l.label}
            </a>
          ))}
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
          minHeight: "calc(100vh - 56px)",
        }}
      >
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6, ease }}>
          {/* system tag */}
          <div
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "0.62rem",
              color: `${CYAN}80`,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ color: "#4ADE80" }}>●</span>
            SYSTEM_ACTIVE &nbsp;·&nbsp; YT_SHORTS_SAVER &nbsp;·&nbsp; v3.1
            <span style={{ opacity: blinker ? 1 : 0, color: CYAN }}>_</span>
          </div>

          <h1
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "clamp(2.4rem,5.5vw,5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: 24,
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "block", color: "#E0F2FF" }}>YOUTUBE</span>
            <span
              style={{
                display: "block",
                color: CYAN,
                textShadow: `0 0 20px ${CYAN}, 0 0 60px ${CYAN}40`,
              }}
            >
              SHORTS
            </span>
            <span style={{ display: "block", color: MAGENTA, textShadow: `0 0 20px ${MAGENTA}` }}>
              SAVER
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(224,242,255,0.5)",
              lineHeight: 1.65,
              maxWidth: 460,
              marginBottom: 40,
              fontWeight: 400,
            }}
          >
            Download any YouTube Short as a clean MP4 file — instantly. No watermark, no sign-up, no cost. Works on any device, any browser, anytime.
          </p>

          <div style={{ display: "flex", gap: 14, marginBottom: 48, flexWrap: "wrap" }}>
            <ArcadeBtn primary href="/">
              ⬇ SAVE SHORTS FREE
            </ArcadeBtn>
            <ArcadeBtn href="#features">
              VIEW FEATURES →
            </ArcadeBtn>
          </div>

          {/* "HUD" stats */}
          <div
            style={{
              display: "flex",
              gap: 32,
              padding: "16px 24px",
              border: `1px solid ${CYAN}25`,
              background: `rgba(0,245,255,0.03)`,
              backdropFilter: "blur(8px)",
              flexWrap: "wrap",
            }}
          >
            {[
              { val: "10M+",  label: "SHORTS SAVED" },
              { val: "HD",    label: "MAX QUALITY" },
              { val: "∞",     label: "NO LIMITS" },
              { val: "0¢",    label: "ALWAYS FREE" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "1.6rem", fontWeight: 900, color: i % 2 === 0 ? CYAN : MAGENTA, textShadow: `0 0 12px ${i % 2 === 0 ? CYAN : MAGENTA}`, lineHeight: 1 }}>
                  {s.val}
                </div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "0.55rem", color: "rgba(224,242,255,0.35)", marginTop: 4, letterSpacing: "0.1em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Shorts preview column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          style={{ display: "flex", gap: 10, alignItems: "center" }}
        >
          {/* main short */}
          <div
            style={{
              width: 180,
              aspectRatio: "9/16",
              borderRadius: 16,
              border: `2px solid ${CYAN}`,
              background: "linear-gradient(135deg,rgba(0,245,255,0.12),rgba(255,0,170,0.08))",
              backdropFilter: "blur(8px)",
              boxShadow: `0 0 40px ${CYAN}30, inset 0 0 30px rgba(0,0,0,0.4)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,245,255,0.02) 2px,rgba(0,245,255,0.02) 4px)` }} />
            <div style={{ fontSize: "4rem", position: "relative", zIndex: 1 }}>🎵</div>
            <div style={{ position: "absolute", top: 10, left: 10, right: 10, height: 2, background: "rgba(255,255,255,0.1)" }}>
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ height: "100%", background: CYAN, boxShadow: `0 0 8px ${CYAN}` }}
              />
            </div>
            <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center" }}>
              <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "0.58rem", color: CYAN, letterSpacing: "0.08em" }}>
                ⬇ SAVE SHORT
              </span>
            </div>
          </div>

          {/* side column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {shorts.slice(0, 3).map((s, i) => (
              <ShortsCard key={i} {...s} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: `1px solid ${CYAN}20`,
          borderBottom: `1px solid ${CYAN}20`,
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 48px",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {[
            { target: 10000000, suffix: "+", label: "SHORTS DOWNLOADED" },
            { target: 100,      suffix: "%", label: "ALWAYS FREE" },
            { target: 0,        suffix: "",  label: "WATERMARKS ADDED" },
            { target: 1080,     suffix: "P", label: "MAX VIDEO QUALITY" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "36px 20px",
                textAlign: "center",
                borderRight: i < 3 ? `1px solid ${CYAN}15` : "none",
              }}
            >
              <Counter target={s.target} suffix={s.suffix} />
              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "0.55rem",
                  color: "rgba(224,242,255,0.35)",
                  marginTop: 8,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES GRID ── */}
      <section
        id="features"
        style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", color: `${CYAN}70`, textTransform: "uppercase", marginBottom: 12 }}>
            SYSTEM_FEATURES
          </div>
          <h2
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "clamp(1.5rem,3vw,2.4rem)",
              fontWeight: 900,
              color: "#E0F2FF",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            WHY USE OUR{" "}
            <span style={{ color: CYAN, textShadow: `0 0 16px ${CYAN}` }}>SHORTS SAVER?</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
            >
              <Tile {...t} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS — horizontal steps ── */}
      <section style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 48px 80px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: 40 }}
        >
          <h2
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "clamp(1.4rem,2.5vw,2rem)",
              fontWeight: 900,
              color: "#E0F2FF",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
            }}
          >
            HOW TO{" "}
            <span style={{ color: MAGENTA, textShadow: `0 0 14px ${MAGENTA}` }}>DOWNLOAD</span>{" "}
            SHORTS
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
          {[
            { num: "01", cmd: "FIND_SHORT", desc: "Open YouTube and find any Short you want to save. Tap Share → Copy Link." },
            { num: "02", cmd: "PASTE_URL",  desc: "Paste the YouTube Shorts URL into the input field at the top of this page." },
            { num: "03", cmd: "SELECT_QUAL", desc: "Choose your preferred quality — HD 1080p is recommended for the best experience." },
            { num: "04", cmd: "SAVE_MP4",   desc: "Click Download. Your Short saves as MP4 directly to your device — watermark-free." },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: i * 0.1 }}
              style={{
                border: `1px solid ${CYAN}20`,
                borderTop: `3px solid ${i % 2 === 0 ? CYAN : MAGENTA}`,
                padding: "28px 20px",
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s",
              }}
              whileHover={{ backgroundColor: `rgba(0,245,255,0.03)` } as any}
            >
              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: i % 2 === 0 ? `${CYAN}25` : `${MAGENTA}25`,
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'Orbitron',sans-serif",
                  fontSize: "0.65rem",
                  color: i % 2 === 0 ? CYAN : MAGENTA,
                  textShadow: `0 0 8px ${i % 2 === 0 ? CYAN : MAGENTA}60`,
                  letterSpacing: "0.1em",
                  marginBottom: 10,
                  textTransform: "uppercase",
                }}
              >
                {s.cmd}
              </div>
              <p style={{ fontSize: "0.82rem", color: "rgba(224,242,255,0.45)", lineHeight: 1.7 }}>
                {s.desc}
              </p>
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
          padding: "72px 48px 100px",
          borderTop: `1px solid ${CYAN}15`,
        }}
      >
        <h2
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontSize: "1.5rem",
            fontWeight: 900,
            color: "#E0F2FF",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            marginBottom: 18,
          }}
        >
          YouTube Shorts Downloader — 2025 Guide
        </h2>
        <p style={{ fontSize: "0.88rem", color: "rgba(224,242,255,0.42)", lineHeight: 1.88, marginBottom: 14 }}>
          YouTube Shorts exploded in 2024–2025, becoming YouTube's fastest-growing format with over 70 billion daily views. Saving Shorts lets you watch content offline, build personal libraries of cooking recipes, workouts, tutorials, comedy clips, and music — without needing an internet connection.
        </p>
        <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "rgba(224,242,255,0.7)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "22px 0 10px" }}>
          Can I download YouTube Shorts on iPhone without an app?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(224,242,255,0.42)", lineHeight: 1.85, marginBottom: 14 }}>
          Yes — our web-based downloader works in Safari on iPhone. Copy the Shorts URL from the YouTube app, paste it here, and tap Download. The Short saves to your Photos library automatically.
        </p>
        <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "0.85rem", fontWeight: 700, color: "rgba(224,242,255,0.7)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "22px 0 10px" }}>
          Are YouTube Shorts downloaded in vertical 9:16 format?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(224,242,255,0.42)", lineHeight: 1.85 }}>
          Yes. Shorts are inherently vertical videos. We download them in their native 9:16 portrait orientation, exactly as uploaded — perfect for viewing on mobile or reposting on TikTok, Instagram Reels, or Snapchat (with appropriate permissions).
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: `1px solid ${CYAN}20`,
          padding: "24px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "0.9rem", fontWeight: 900, letterSpacing: "0.1em", color: CYAN, textShadow: `0 0 10px ${CYAN}` }}>
          FREE<span style={{ color: MAGENTA, textShadow: `0 0 10px ${MAGENTA}` }}>REELS</span>
        </span>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {[
            { label: "YouTube Shorts",   href: "/youtube-shorts-downloader" },
            { label: "YouTube MP4",      href: "/youtube-to-mp4" },
            { label: "Instagram Reels",  href: "/instagram-reels-downloader" },
            { label: "YouTube MP3",      href: "/youtube-to-mp3" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.7rem", fontFamily: "'Orbitron',sans-serif", letterSpacing: "0.06em", color: `${CYAN}40`, textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = CYAN)}
              onMouseOut={(e) => (e.currentTarget.style.color = `${CYAN}40`)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ fontSize: "0.62rem", fontFamily: "'Orbitron',sans-serif", color: "rgba(224,242,255,0.15)" }}>
          © {new Date().getFullYear()} · NOT AFFILIATED WITH YOUTUBE OR GOOGLE
        </span>
      </footer>
    </div>
  );
}