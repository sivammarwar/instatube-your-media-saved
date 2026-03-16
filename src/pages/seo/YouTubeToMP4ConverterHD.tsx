/**
 * SEO Page: /youtube-to-mp4-converter-hd
 * Design: Dark cinematic bento grid — Space Mono terminal aesthetic,
 *         YouTube red + gold accent, scanline overlay, stat cells,
 *         format pills, quality bar chart, comparison table.
 * Keywords: youtube to mp4 converter hd, convert youtube to mp4 free,
 *           yt to mp4 hd 2025, youtube 1080p mp4, best youtube mp4 downloader
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

/* ── Quality bar row ── */
function QBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: "0.6rem",
          color: "rgba(237,240,245,0.45)",
          width: 68,
          flexShrink: 0,
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </span>
      <div
        style={{
          flex: 1,
          height: 5,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg,#FF0000,#FFD700)",
            borderRadius: 3,
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: "0.58rem",
          color: "rgba(237,240,245,0.35)",
          width: 28,
          textAlign: "right",
        }}
      >
        {pct}%
      </span>
    </div>
  );
}

/* ── Bento cell wrapper ── */
function Cell({
  children,
  style,
  featured,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  featured?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        border: `1px solid ${featured ? "rgba(255,0,0,0.28)" : "rgba(255,255,255,0.07)"}`,
        background: featured
          ? hovered ? "rgba(255,0,0,0.09)" : "rgba(255,0,0,0.05)"
          : hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        padding: 28,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered && featured ? "0 8px 40px rgba(255,0,0,0.14)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const FORMATS = ["MP4 · 4K", "MP4 · 1080p", "MP4 · 720p", "MP4 · 480p", "MP4 · 360p", "WEBM · HD"];
const STEPS = [
  { cmd: "$ copy", detail: "Copy any YouTube video URL from your browser or the app." },
  { cmd: "$ paste", detail: "Paste the URL into the converter input field above." },
  { cmd: "$ select", detail: "Choose your preferred MP4 quality — up to 4K Ultra HD." },
  { cmd: "$ download", detail: "Click Download. The MP4 saves directly to your device." },
];

export default function YouTubeToMP4ConverterHD() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap";
    document.head.appendChild(link);

    document.title =
      "YouTube to MP4 Converter HD – Convert YouTube Videos Free 2025 | FreeReelsDownloader";

    const addMeta = (name: string, content: string) => {
      const el = document.createElement("meta");
      el.setAttribute("name", name);
      el.setAttribute("content", content);
      document.head.appendChild(el);
    };
    addMeta(
      "description",
      "Convert any YouTube video to MP4 in HD, Full HD, or 4K instantly. Free YouTube to MP4 converter — no software, no watermark, works on any device."
    );
    addMeta(
      "keywords",
      "youtube to mp4 converter hd, convert youtube to mp4, youtube mp4 download hd, youtube 1080p mp4, yt to mp4 hd 2025, best youtube mp4 downloader"
    );

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "YouTube to MP4 Converter HD",
      url: "https://www.freereelsdownloader.com/youtube-to-mp4-converter-hd",
      description: "Free YouTube to MP4 HD converter. Download 4K, 1080p, 720p MP4 instantly.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        background: "#080A0E",
        color: "#EDF0F5",
        minHeight: "100vh",
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
        position: "relative",
      }}
    >
      {/* Scanline overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.025) 2px,rgba(0,0,0,0.025) 4px)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at 80% 10%,rgba(255,0,0,0.1),transparent 55%),radial-gradient(ellipse at 10% 80%,rgba(255,215,0,0.05),transparent 50%)",
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
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          background: "rgba(8,10,14,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              background: "#FF0000",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
            }}
          >
            ▶
          </div>
          <span
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#EDF0F5",
            }}
          >
            FREEREELS.DOWNLOADER
          </span>
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {[
            { label: "YouTube", href: "/youtube-video-downloader", active: true },
            { label: "Instagram", href: "/instagram-reels-downloader" },
            { label: "MP3", href: "/youtube-to-mp3" },
            { label: "Shorts", href: "/youtube-shorts-downloader" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "7px 14px",
                borderRadius: 8,
                fontSize: "0.78rem",
                color: l.active ? "#FF0000" : "rgba(237,240,245,0.45)",
                textDecoration: "none",
                background: l.active ? "rgba(255,0,0,0.1)" : "transparent",
                border: l.active ? "1px solid rgba(255,0,0,0.25)" : "1px solid transparent",
                fontWeight: l.active ? 600 : 400,
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { if (!l.active) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#EDF0F5"; }}}
              onMouseOut={(e) => { if (!l.active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(237,240,245,0.45)"; }}}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/"
            style={{
              marginLeft: 6,
              padding: "8px 18px",
              borderRadius: 9,
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              background: "#FF0000",
              boxShadow: "0 4px 18px rgba(255,0,0,0.35)",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#CC0000"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 26px rgba(255,0,0,0.45)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#FF0000"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 18px rgba(255,0,0,0.35)"; }}
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
          minHeight: "calc(100vh - 56px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 48px 60px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* horizontal rule + label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF0000" }} />
          <span
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              color: "#FF0000",
              textTransform: "uppercase",
            }}
          >
            YouTube to MP4 · HD Converter · Free 2025
          </span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(255,0,0,0.4),transparent)" }} />
        </div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease }}
          style={{
            fontSize: "clamp(3rem,6vw,5.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 28,
          }}
        >
          <span style={{ display: "block", color: "#EDF0F5" }}>YOUTUBE</span>
          <span
            style={{
              display: "block",
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,0,0,0.65)",
            }}
          >
            TO MP4
          </span>
          <span style={{ display: "block", color: "#FF0000" }}>CONVERTER HD</span>
        </motion.h1>

        {/* meta chips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28, flexWrap: "wrap" }}
        >
          {["● Live & Free", "4K · 1080p · 720p · 480p", "No Software", "No Watermark"].map((chip) => (
            <span
              key={chip}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 8,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.66rem",
                letterSpacing: "0.07em",
                color: "rgba(237,240,245,0.5)",
              }}
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease, delay: 0.18 }}
          style={{ fontSize: "1rem", color: "rgba(237,240,245,0.45)", maxWidth: 540, lineHeight: 1.7, marginBottom: 36, fontWeight: 300 }}
        >
          Convert any YouTube video to a clean, high-definition MP4 file — right in your browser. No sign-up, no installation, no limits.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease, delay: 0.26 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              borderRadius: 10,
              background: "#FF0000",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 6px 28px rgba(255,0,0,0.4)",
              letterSpacing: "0.03em",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#CC0000"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(255,0,0,0.5)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#FF0000"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 6px 28px rgba(255,0,0,0.4)"; }}
          >
            ⬇ Convert to MP4 Free
          </a>
          <a
            href="#bento"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 24px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.09)",
              color: "rgba(237,240,245,0.45)",
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#EDF0F5"; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "rgba(237,240,245,0.45)"; }}
          >
            View Formats →
          </a>
        </motion.div>
      </section>

      {/* ── BENTO GRID ── */}
      <section
        id="bento"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 48px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 12,
          }}
        >
          {/* Stat: conversions */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, ease }}>
            <Cell>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(237,240,245,0.28)", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 18, height: 1, background: "rgba(237,240,245,0.2)", display: "inline-block" }} /> Total Conversions
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "3.5rem", fontWeight: 700, color: "#FF0000", lineHeight: 1, marginBottom: 6 }}>100M+</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(237,240,245,0.4)" }}>Videos converted globally</div>
            </Cell>
          </motion.div>

          {/* Stat: quality — featured */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, ease, delay: 0.08 }}>
            <Cell featured>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,0,0,0.5)", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 18, height: 1, background: "rgba(255,0,0,0.3)", display: "inline-block" }} /> Top Quality
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "3.5rem", fontWeight: 700, color: "#FF0000", lineHeight: 1, marginBottom: 6 }}>4K</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(237,240,245,0.4)" }}>Ultra HD MP4 output — 3840×2160</div>
            </Cell>
          </motion.div>

          {/* Stat: speed */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, ease, delay: 0.16 }}>
            <Cell>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(237,240,245,0.28)", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 18, height: 1, background: "rgba(237,240,245,0.2)", display: "inline-block" }} /> Avg Speed
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "3.5rem", fontWeight: 700, color: "#FF0000", lineHeight: 1, marginBottom: 6 }}>&lt;5s</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(237,240,245,0.4)" }}>Processing per video</div>
            </Cell>
          </motion.div>

          {/* Formats cell — span 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            style={{ gridColumn: "span 2" }}
          >
            <Cell style={{ height: "100%" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(237,240,245,0.28)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 18, height: 1, background: "rgba(237,240,245,0.2)", display: "inline-block" }} /> Supported Output Formats
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#EDF0F5", marginBottom: 16 }}>All MP4 Qualities Available</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                {FORMATS.map((f) => (
                  <span
                    key={f}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 6,
                      border: "1px solid rgba(255,0,0,0.28)",
                      background: "rgba(255,0,0,0.07)",
                      fontFamily: "'Space Mono',monospace",
                      fontSize: "0.66rem",
                      letterSpacing: "0.06em",
                      color: "#FF0000",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,0,0,0.14)")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,0,0,0.07)")}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: "0.83rem", color: "rgba(237,240,245,0.4)", lineHeight: 1.7 }}>
                We fetch directly from YouTube's highest-quality stream. Zero re-encoding, zero quality loss — the MP4 you download is exactly what YouTube's CDN provides.
              </p>
            </Cell>
          </motion.div>

          {/* Quality bars */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.18 }}
          >
            <Cell style={{ height: "100%" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(237,240,245,0.28)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 18, height: 1, background: "rgba(237,240,245,0.2)", display: "inline-block" }} /> Quality Availability
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <QBar label="4K UHD"   pct={62} delay={0.1} />
                <QBar label="1080p HD" pct={100} delay={0.15} />
                <QBar label="720p"     pct={100} delay={0.2} />
                <QBar label="480p"     pct={100} delay={0.25} />
                <QBar label="360p"     pct={100} delay={0.3} />
              </div>
              <p style={{ fontSize: "0.72rem", color: "rgba(237,240,245,0.28)", marginTop: 14, lineHeight: 1.6 }}>
                4K availability depends on the original upload. 1080p–360p always available.
              </p>
            </Cell>
          </motion.div>

          {/* Terminal steps */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.14 }}
            style={{ gridColumn: "span 3" }}
          >
            <Cell>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(237,240,245,0.28)", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 18, height: 1, background: "rgba(237,240,245,0.2)", display: "inline-block" }} /> How to Convert YouTube to MP4
              </div>
              {/* terminal window */}
              <div style={{ background: "#050708", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  {["#FF5F57","#FFBD2E","#28C940"].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", color: "rgba(237,240,245,0.3)", marginLeft: 8 }}>freereelsdownloader.com — yt2mp4</span>
                </div>
                <div style={{ padding: "16px 18px", fontFamily: "'Space Mono',monospace", fontSize: "0.72rem", lineHeight: 1.9 }}>
                  {STEPS.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <span style={{ color: "#4ADE80", minWidth: 80 }}>{s.cmd}</span>
                      <span style={{ color: "rgba(237,240,245,0.5)" }}>{s.detail}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 10, color: "#FFD700" }}>✓ Done — MP4 saved to your device</div>
                </div>
              </div>
            </Cell>
          </motion.div>

          {/* Why choose us */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            style={{ gridColumn: "span 3" }}
          >
            <div
              style={{
                borderRadius: 20,
                background: "linear-gradient(135deg,rgba(255,0,0,0.07),rgba(255,215,0,0.03))",
                border: "1px solid rgba(255,0,0,0.18)",
                padding: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 32,
                flexWrap: "wrap",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 70% 50%,rgba(255,0,0,0.08),transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: "1.9rem", fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.02em" }}>
                  The fastest free YouTube to MP4 converter in 2025
                </h2>
                <p style={{ fontSize: "0.9rem", color: "rgba(237,240,245,0.45)", maxWidth: 460, lineHeight: 1.65 }}>
                  No limits on video length. No account required. No hidden fees. Works on YouTube Shorts, regular videos, live recordings, and age-restricted public content.
                </p>
              </div>
              <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 28px",
                    borderRadius: 10,
                    background: "#FF0000",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    boxShadow: "0 6px 28px rgba(255,0,0,0.4)",
                    transition: "all 0.2s",
                    letterSpacing: "0.03em",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "#CC0000"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "#FF0000"; e.currentTarget.style.transform = ""; }}
                >
                  ⬇ Convert Now
                </a>
                <a
                  href="/youtube-to-mp3"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 24px",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(237,240,245,0.5)",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.color = "#EDF0F5"; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(237,240,245,0.5)"; }}
                >
                  Try MP3 Converter →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SEO PROSE ── */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 48px 100px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 72,
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: 14 }}>
          YouTube to MP4 HD Converter — Everything You Need to Know (2025)
        </h2>
        <p style={{ fontSize: "0.87rem", color: "rgba(237,240,245,0.45)", lineHeight: 1.85, marginBottom: 14 }}>
          YouTube is home to over 800 million videos. Whether you're saving a tutorial for offline study, archiving a live stream, or downloading content you own for re-editing, converting YouTube videos to MP4 HD is the most practical and compatible approach. MP4 plays natively on every device — iPhone, Android, Windows, Mac, smart TVs, and media players.
        </p>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "rgba(237,240,245,0.8)", margin: "24px 0 8px" }}>
          Why Convert YouTube to MP4 Instead of Other Formats?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(237,240,245,0.45)", lineHeight: 1.85, marginBottom: 14 }}>
          MP4 (H.264/H.265) is the universal video format. Unlike WebM or MKV, MP4 is supported by every major platform, device, and video editor out of the box. When you download YouTube in MP4 HD, you get a file that works everywhere with no conversion needed.
        </p>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "rgba(237,240,245,0.8)", margin: "24px 0 8px" }}>
          Can I Convert YouTube Shorts to MP4?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(237,240,245,0.45)", lineHeight: 1.85 }}>
          Yes. Our converter handles YouTube Shorts, regular videos, and long-form content (including streams up to several hours). Simply paste the Shorts URL and select your preferred MP4 quality — the vertical format is preserved.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.75rem", letterSpacing: "0.06em", color: "rgba(237,240,245,0.25)" }}>
          FREEREELS DOWNLOADER
        </span>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[
            { label: "YouTube MP4", href: "/youtube-to-mp4" },
            { label: "YouTube MP3", href: "/youtube-to-mp3" },
            { label: "4K Downloader", href: "/youtube-4k-downloader" },
            { label: "Instagram", href: "/instagram-reels-downloader" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.72rem", color: "rgba(237,240,245,0.28)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "rgba(237,240,245,0.55)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(237,240,245,0.28)")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ fontSize: "0.68rem", color: "rgba(237,240,245,0.18)" }}>
          © {new Date().getFullYear()} FreeReelsDownloader · Not affiliated with YouTube or Google
        </span>
      </footer>
    </div>
  );
}