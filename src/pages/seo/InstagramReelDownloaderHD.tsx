/**
 * SEO Page: /instagram-reel-downloader-hd-quality
 * Design: Bold editorial magazine — Bebas Neue headlines, ticker tape,
 *         split hero, 3-step bento, FAQ accordion, quality table.
 * Keywords: instagram reel downloader hd quality, download reels hd,
 *           instagram reels 1080p, reel saver hd 2025, no watermark
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── tiny helpers ─── */
const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

/* ─── Structured Data ─── */
const SD_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Instagram Reel HD Downloader",
      url: "https://www.freereelsdownloader.com/instagram-reel-downloader-hd-quality",
      description:
        "Download Instagram Reels in HD quality (1080p/4K) for free. No watermark, no login required.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is downloading Instagram Reels in HD free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — completely free. No hidden fees, no account required.",
          },
        },
        {
          "@type": "Question",
          name: "Will the HD Reel have a watermark?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We fetch directly from Instagram's CDN — zero watermark, zero re-encoding.",
          },
        },
      ],
    },
  ],
});

/* ─── Phone mockup component ─── */
function PhoneMock() {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        width: 240,
        height: 480,
        borderRadius: 36,
        border: "7px solid rgba(255,255,255,0.1)",
        background: "linear-gradient(145deg,#1a1025,#0d0810)",
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.7),inset 0 1px 0 rgba(255,255,255,0.07)",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* notch */}
      <div
        style={{
          width: 90,
          height: 22,
          background: "rgba(0,0,0,0.9)",
          borderRadius: "0 0 14px 14px",
          margin: "0 auto",
        }}
      />
      {/* screen content */}
      <div style={{ padding: 10, display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          "linear-gradient(135deg,rgba(225,48,108,0.45),rgba(131,58,180,0.3))",
          "linear-gradient(135deg,rgba(247,119,55,0.35),rgba(252,175,69,0.2))",
        ].map((bg, i) => (
          <div
            key={i}
            style={{
              height: i === 0 ? 155 : 100,
              borderRadius: 14,
              background: bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: i === 0 ? "2rem" : "1.5rem",
              color: "rgba(255,255,255,0.85)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            ▶
          </div>
        ))}
        {/* quality badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              padding: "4px 10px",
              background: "rgba(225,48,108,0.2)",
              border: "1px solid rgba(225,48,108,0.4)",
              borderRadius: 4,
              fontSize: "0.6rem",
              fontWeight: 700,
              color: "#E1306C",
              letterSpacing: "0.08em",
            }}
          >
            HD 1080P
          </span>
          <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.35)" }}>
            Ready to save
          </span>
        </div>
        {/* download bar */}
        <div
          style={{
            height: 4,
            background: "rgba(255,255,255,0.07)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ width: ["55%", "90%", "55%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg,#E1306C,#F77737)",
              borderRadius: 2,
            }}
          />
        </div>
        {/* mini row */}
        <div style={{ display: "flex", gap: 6 }}>
          {[
            "rgba(225,48,108,0.3)",
            "rgba(64,93,230,0.3)",
          ].map((bg, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 64,
                borderRadius: 10,
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              ▶
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── FAQ accordion ─── */
const FAQS = [
  {
    q: "Is it really free to download Instagram Reels in HD?",
    a: "Yes — 100% free. No subscriptions, no credit card, no account. Full HD and 4K downloads stay free forever.",
  },
  {
    q: "Why is my downloaded Reel not in HD?",
    a: "The quality depends on what the creator originally uploaded. We always fetch the highest quality Instagram makes available and never downscale.",
  },
  {
    q: "Can I download private Instagram Reels in HD?",
    a: "No. For legal and privacy reasons we only support publicly accessible Reels. Private account content is not supported.",
  },
  {
    q: "Will the downloaded Reel have a watermark?",
    a: "Never. We fetch directly from Instagram's CDN — the video is exactly as the creator uploaded it, watermark-free.",
  },
  {
    q: "Does this work on iPhone and Android?",
    a: "Yes — works on all devices. iPhone, iPad, Android, Mac, Windows. Just open any modern browser, no app needed.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          width: "100%",
          padding: "20px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          background: open ? "rgba(225,48,108,0.04)" : "transparent",
          border: "none",
          color: "#F0EBF8",
          fontFamily: "'Outfit',sans-serif",
          fontSize: "0.93rem",
          fontWeight: 600,
          cursor: "pointer",
          textAlign: "left",
          transition: "background 0.25s",
        }}
      >
        <span>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0, color: open ? "#E1306C" : "rgba(240,235,248,0.4)" }}
          transition={{ duration: 0.25 }}
          style={{ fontSize: "1.3rem", flexShrink: 0, display: "block" }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                padding: "0 28px 20px",
                fontSize: "0.86rem",
                color: "rgba(240,235,248,0.5)",
                lineHeight: 1.75,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Ticker ─── */
function Ticker() {
  const items = "HD QUALITY · NO WATERMARK · 1080P · 4K SUPPORT · FREE FOREVER · NO LOGIN · INSTANT DOWNLOAD · ";
  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "11px 0",
        background: "linear-gradient(90deg,#833AB4,#E1306C,#FF0000,#F77737,#FCAF45)",
        borderRadius: 4,
        marginBottom: 28,
      }}
    >
      <motion.span
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          display: "inline-block",
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "0.95rem",
          letterSpacing: "0.06em",
          color: "#fff",
          paddingLeft: "100%",
        }}
      >
        {items.repeat(6)}
      </motion.span>
    </div>
  );
}

/* ─── Main Page ─── */
export default function InstagramReelDownloaderHD() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
    link.onload = () => setFontsLoaded(true);

    // inject schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = SD_JSON;
    document.head.appendChild(script);

    // set meta
    document.title =
      "Instagram Reel Downloader HD Quality – Save Reels 1080p Free | FreeReelsDownloader";
    const setMeta = (name: string, content: string, prop = false) => {
      const el = document.createElement("meta");
      el.setAttribute(prop ? "property" : "name", name);
      el.setAttribute("content", content);
      document.head.appendChild(el);
    };
    setMeta(
      "description",
      "Download Instagram Reels in full HD quality (1080p/4K) instantly. No watermark, no login. The fastest Instagram Reel HD downloader — free forever."
    );
    setMeta(
      "keywords",
      "instagram reel downloader hd quality, download reels hd, instagram reels 1080p downloader, save reels in hd, reel saver hd 2025, no watermark reel download"
    );
    setMeta("og:title", "Instagram Reel Downloader HD – Save Reels 1080p Free", false);
  }, []);

  const steps = [
    {
      icon: "🔗",
      num: "01",
      title: "Copy the Reel Link",
      desc: "Open Instagram, find any Reel. Tap Share → Copy Link. Works on mobile and desktop.",
    },
    {
      icon: "📋",
      num: "02",
      title: "Paste & Detect Quality",
      desc: "Paste the URL into our downloader. We auto-detect the highest quality — up to 4K — and list all options.",
    },
    {
      icon: "⬇️",
      num: "03",
      title: "Choose HD & Download",
      desc: "Pick HD 1080p or 4K. Tap Download — your Reel saves in seconds, watermark-free.",
    },
  ];

  const qualities = [
    { q: "4K Ultra HD", res: "3840×2160", size: "80–200 MB", available: true, note: "If original is 4K" },
    { q: "Full HD",     res: "1920×1080", size: "20–80 MB",  available: true, note: "Always" },
    { q: "HD Ready",   res: "1280×720",  size: "8–30 MB",   available: true, note: "Always" },
    { q: "Standard",   res: "640×360",   size: "2–10 MB",   available: true, note: "Always" },
    { q: "Audio MP3",  res: "—",         size: "1–5 MB",    available: true, note: "Always" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Outfit',sans-serif",
        background: "#0A0A0F",
        color: "#F0EBF8",
        minHeight: "100vh",
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "14px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(10,10,15,0.88)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "1.3rem",
            letterSpacing: "0.08em",
            background: "linear-gradient(90deg,#E1306C,#F77737)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
          }}
        >
          FREEREELS
        </a>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            { label: "Instagram", href: "/instagram-reels-downloader" },
            { label: "YouTube",   href: "/youtube-video-downloader" },
            { label: "MP3",       href: "/youtube-to-mp3" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.8rem",
                color: "rgba(240,235,248,0.5)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 8,
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F0EBF8")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(240,235,248,0.5)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/"
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              padding: "7px 18px",
              borderRadius: 8,
              background: "linear-gradient(135deg,#E1306C,#F77737)",
              boxShadow: "0 4px 18px rgba(225,48,108,0.4)",
              transition: "transform 0.2s,box-shadow 0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(225,48,108,0.55)"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 18px rgba(225,48,108,0.4)"; }}
          >
            Download Now ↗
          </a>
        </div>
      </nav>

      {/* ── HERO SPLIT ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "calc(100vh - 57px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 56px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* vertical accent line */}
          <div
            style={{
              position: "absolute",
              right: 0, top: 0, bottom: 0, width: 1,
              background: "linear-gradient(180deg,transparent,#E1306C,#F77737,transparent)",
            }}
          />

          <Ticker />

          {/* eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span
              style={{
                padding: "4px 12px",
                border: "1px solid #E1306C",
                borderRadius: 3,
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#E1306C",
              }}
            >
              #1 Reel Downloader 2025
            </span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#E1306C,transparent)" }} />
          </div>

          <h1
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(4rem,7vw,7rem)",
              lineHeight: 0.93,
              letterSpacing: "0.02em",
              marginBottom: 28,
            }}
          >
            <span style={{ display: "block", color: "#fff" }}>INSTAGRAM</span>
            <span
              style={{
                display: "block",
                color: "transparent",
                WebkitTextStroke: "2px #E1306C",
              }}
            >
              REEL HD
            </span>
            <span style={{ display: "block", color: "#fff" }}>DOWNLOADER</span>
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "rgba(240,235,248,0.5)",
              lineHeight: 1.7,
              maxWidth: 400,
              marginBottom: 36,
              fontWeight: 300,
            }}
          >
            Save any Instagram Reel in crystal-clear{" "}
            <strong style={{ color: "#fff" }}>1080p or 4K HD</strong> — no
            watermark, no sign-up. Works on iPhone, Android &amp; desktop.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 6,
                background: "linear-gradient(135deg,#E1306C,#F77737)",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(225,48,108,0.4)",
                letterSpacing: "0.04em",
                transition: "transform 0.2s,box-shadow 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(225,48,108,0.55)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 32px rgba(225,48,108,0.4)"; }}
            >
              ⬇ Download Reels Free
            </a>
            <a
              href="#steps"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 22px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(240,235,248,0.5)",
                fontSize: "0.85rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.color = "#F0EBF8"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(240,235,248,0.5)"; }}
            >
              How it works ↓
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg,#1a0a20,#0f0810,#1a0510)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 60% 40%,rgba(225,48,108,0.25),transparent 65%),radial-gradient(ellipse at 20% 80%,rgba(131,58,180,0.2),transparent 60%)",
            }}
          />
          <PhoneMock />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        {[
          { num: "50M+",  label: "Reels Downloaded" },
          { num: "4K",    label: "Max Resolution" },
          { num: "0",     label: "Login Required" },
          { num: "100%",  label: "Always Free" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              padding: "32px 20px",
              textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 36,
                height: 2,
                background: "linear-gradient(90deg,#E1306C,#F77737)",
                borderRadius: 1,
              }}
            />
            <div
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "2.8rem",
                letterSpacing: "0.02em",
                background: "linear-gradient(135deg,#fff,rgba(255,255,255,0.7))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "rgba(240,235,248,0.4)",
                marginTop: 6,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── HOW IT WORKS ── */}
      <section
        id="steps"
        style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 64 }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "5rem",
              color: "rgba(225,48,108,0.12)",
              lineHeight: 1,
            }}
          >
            01
          </span>
          <div>
            <h2
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(2.4rem,4vw,3.8rem)",
                color: "#fff",
                letterSpacing: "0.04em",
              }}
            >
              HOW IT WORKS
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(240,235,248,0.45)", marginTop: 6, fontWeight: 300 }}>
              Three steps to download any Instagram Reel in HD quality.
            </p>
          </div>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.12 }}
              style={{
                background: "#0A0A0F",
                padding: "40px 32px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.3s",
                cursor: "default",
              }}
              whileHover={{ backgroundColor: "rgba(225,48,108,0.04)" } as any}
            >
              <span
                style={{
                  position: "absolute",
                  top: 14,
                  right: 18,
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "5rem",
                  color: "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {s.num}
              </span>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: "linear-gradient(135deg,rgba(225,48,108,0.2),rgba(131,58,180,0.2))",
                  border: "1px solid rgba(225,48,108,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  marginBottom: 20,
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: "0.84rem", color: "rgba(240,235,248,0.45)", lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── QUALITY TABLE ── */}
      <section style={{ padding: "0 48px 100px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 40 }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "5rem",
              color: "rgba(225,48,108,0.12)",
              lineHeight: 1,
            }}
          >
            02
          </span>
          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(2.4rem,4vw,3.8rem)",
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            SUPPORTED QUALITIES
          </h2>
        </motion.div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <thead>
            <tr>
              {["Quality", "Resolution", "Avg Size", "Watermark Free", "Availability"].map((h) => (
                <th
                  key={h}
                  style={{
                    background: "rgba(225,48,108,0.07)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    padding: "14px 20px",
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#E1306C",
                    textAlign: "left",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {qualities.map((row, i) => (
              <tr
                key={i}
                style={{ transition: "background 0.2s" }}
                onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.025)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {[row.q, row.res, row.size].map((val, j) => (
                  <td
                    key={j}
                    style={{
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: "14px 20px",
                      fontSize: "0.87rem",
                      color: "rgba(240,235,248,0.5)",
                    }}
                  >
                    {val}
                  </td>
                ))}
                <td style={{ border: "1px solid rgba(255,255,255,0.06)", padding: "14px 20px" }}>
                  <span style={{ color: "#4ADE80", fontWeight: 700, fontSize: "0.82rem" }}>✓ Yes</span>
                </td>
                <td style={{ border: "1px solid rgba(255,255,255,0.06)", padding: "14px 20px" }}>
                  <span style={{ color: "#4ADE80", fontSize: "0.82rem" }}>✓ {row.note}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "0 48px 100px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 40 }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "5rem",
              color: "rgba(225,48,108,0.12)",
              lineHeight: 1,
            }}
          >
            03
          </span>
          <h2
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(2.4rem,4vw,3.8rem)",
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            FAQ
          </h2>
        </motion.div>
        <div style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* ── SEO PROSE ── */}
      <section
        style={{
          padding: "0 48px 100px",
          maxWidth: 900,
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 80,
        }}
      >
        <h2
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "2rem",
            color: "#fff",
            letterSpacing: "0.04em",
            marginBottom: 16,
          }}
        >
          Download Instagram Reels in HD Quality — Complete Guide 2025
        </h2>
        <p style={{ fontSize: "0.88rem", color: "rgba(240,235,248,0.48)", lineHeight: 1.85, marginBottom: 14 }}>
          Instagram Reels has become the dominant short-form video format in 2025, with over 2 billion users
          sharing Reels daily. Our <strong style={{ color: "rgba(240,235,248,0.75)" }}>Instagram Reel HD Downloader</strong> is
          the fastest, cleanest way to save Reels for offline viewing, archiving your own posts, or repurposing
          content you own — in full 1080p or 4K quality, with zero watermark.
        </p>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "rgba(240,235,248,0.8)", margin: "24px 0 8px" }}>
          Why HD Matters When Downloading Reels
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(240,235,248,0.48)", lineHeight: 1.85, marginBottom: 14 }}>
          Standard-definition downloads look blurry on modern high-resolution screens. We target Instagram's
          highest-quality CDN source — the same stream your app uses — so you always get the sharpest video
          with no compression artifacts.
        </p>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "rgba(240,235,248,0.8)", margin: "24px 0 8px" }}>
          Is Downloading Instagram Reels Legal?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(240,235,248,0.48)", lineHeight: 1.85 }}>
          Downloading publicly available Reels for personal, non-commercial use is generally considered fair use
          in most jurisdictions. You should never re-upload, redistribute, or monetize content you don't own.
          Always respect copyright and Instagram's Terms of Service.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.06em",
            background: "linear-gradient(90deg,#E1306C,#F77737)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          FREEREELS DOWNLOADER
        </span>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[
            { label: "Instagram Reels", href: "/instagram-reels-downloader" },
            { label: "YouTube",         href: "/youtube-video-downloader" },
            { label: "No Watermark",    href: "/download-reels-without-watermark" },
            { label: "Stories",         href: "/instagram-stories-downloader" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: "0.73rem", color: "rgba(240,235,248,0.28)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "rgba(240,235,248,0.55)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(240,235,248,0.28)")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ fontSize: "0.68rem", color: "rgba(240,235,248,0.2)" }}>
          © {new Date().getFullYear()} FreeReelsDownloader · Personal use only · Not affiliated with Instagram
        </span>
      </footer>
    </div>
  );
}