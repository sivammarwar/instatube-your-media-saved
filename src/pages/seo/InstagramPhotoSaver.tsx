/**
 * SEO Page: /instagram-photo-saver
 * Design: Luxury gallery — Cormorant Garamond + Jost, warm cream/terracotta
 *         on deep charcoal, masonry photo grid mockup, editorial whitespace,
 *         fine serif typography, tasteful hover states, zero gimmicks.
 * Keywords: instagram photo saver, save instagram photos, download instagram images,
 *           instagram photo downloader 2025, download ig posts free, save instagram pictures,
 *           instagram image downloader no watermark
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CREAM    = "#F5EEE0";
const TERRA    = "#C4714A";
const GOLD     = "#B8984A";
const BG       = "#0F0E0C";
const SURFACE  = "rgba(245,238,224,0.04)";
const BORDER   = "rgba(245,238,224,0.08)";

/* ── Gallery mockup ── */
function GalleryMockup() {
  const items = [
    { h: 200, bg: "linear-gradient(135deg,rgba(196,113,74,0.4),rgba(184,152,74,0.25))", emoji: "🏔️" },
    { h: 130, bg: "linear-gradient(135deg,rgba(131,58,180,0.35),rgba(225,48,108,0.2))", emoji: "🌸" },
    { h: 170, bg: "linear-gradient(135deg,rgba(64,93,230,0.3),rgba(52,211,153,0.2))", emoji: "🌊" },
    { h: 150, bg: "linear-gradient(135deg,rgba(225,48,108,0.35),rgba(252,175,69,0.2))", emoji: "🌅" },
    { h: 110, bg: "linear-gradient(135deg,rgba(184,152,74,0.4),rgba(196,113,74,0.25))", emoji: "🍃" },
    { h: 180, bg: "linear-gradient(135deg,rgba(52,211,153,0.3),rgba(64,93,230,0.2))", emoji: "✨" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: 0.3 }}
      style={{
        background: "rgba(245,238,224,0.04)",
        border: `1px solid ${BORDER}`,
        borderRadius: 20,
        overflow: "hidden",
        width: 340,
        flexShrink: 0,
      }}
    >
      {/* bar */}
      <div style={{ padding: "14px 16px", borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "rgba(245,238,224,0.7)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Photo Collection
        </span>
        <span style={{ padding: "3px 10px", borderRadius: 4, border: `1px solid ${TERRA}60`, fontSize: "0.6rem", color: TERRA, fontWeight: 600, fontFamily: "'Jost',sans-serif", letterSpacing: "0.08em" }}>
          6 PHOTOS
        </span>
      </div>

      {/* masonry-ish grid */}
      <div style={{ padding: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {items.map((it, i) => (
          <div
            key={i}
            style={{
              height: it.h,
              borderRadius: 10,
              background: it.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              position: "relative",
              overflow: "hidden",
              gridRow: i === 0 ? "span 2" : "auto",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "")}
          >
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 30%,rgba(255,255,255,0.1),transparent 60%)" }} />
            {it.emoji}
            {/* hover download badge */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                right: 8,
                padding: "4px 8px",
                borderRadius: 5,
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(6px)",
                fontSize: "0.55rem",
                color: "#fff",
                fontFamily: "'Jost',sans-serif",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              ⬇ JPG
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Minimal accordion FAQ ── */
function MinFaq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          width: "100%",
          padding: "22px 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 20,
          background: "transparent",
          border: "none",
          color: open ? CREAM : "rgba(245,238,224,0.7)",
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "1.05rem",
          fontStyle: "italic",
          cursor: "pointer",
          textAlign: "left",
          transition: "color 0.2s",
        }}
      >
        <span>{q}</span>
        <span
          style={{
            fontFamily: "'Jost',sans-serif",
            fontSize: "1.2rem",
            fontStyle: "normal",
            color: open ? TERRA : "rgba(245,238,224,0.35)",
            transition: "transform 0.3s, color 0.2s",
            transform: open ? "rotate(45deg)" : "none",
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          +
        </span>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease }}
        >
          <p style={{ paddingBottom: 22, fontSize: "0.88rem", color: "rgba(245,238,224,0.45)", lineHeight: 1.8, fontFamily: "'Jost',sans-serif", fontWeight: 300 }}>
            {a}
          </p>
        </motion.div>
      )}
    </div>
  );
}

/* ── Format card ── */
function FormatCard({ format, ext, desc }: { format: string; ext: string; desc: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "28px 24px",
        border: `1px solid ${hov ? TERRA + "60" : BORDER}`,
        borderTop: `2px solid ${hov ? TERRA : GOLD}`,
        background: hov ? "rgba(196,113,74,0.05)" : SURFACE,
        transition: "all 0.28s",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `0 8px 32px rgba(196,113,74,0.12)` : "none",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "3px 10px",
          border: `1px solid ${GOLD}40`,
          borderRadius: 3,
          fontFamily: "'Jost',sans-serif",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: GOLD,
          marginBottom: 14,
        }}
      >
        .{ext}
      </div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 600, color: CREAM, marginBottom: 10, letterSpacing: "-0.01em" }}>
        {format}
      </div>
      <p style={{ fontSize: "0.82rem", color: "rgba(245,238,224,0.42)", lineHeight: 1.7, fontFamily: "'Jost',sans-serif", fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  );
}

export default function InstagramPhotoSaver() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    document.title = "Instagram Photo Saver – Download Instagram Photos & Posts Free 2025 | FreeReelsDownloader";

    const addMeta = (name: string, content: string) => {
      const m = document.createElement("meta"); m.setAttribute("name", name); m.setAttribute("content", content); document.head.appendChild(m);
    };
    addMeta("description", "Download any Instagram photo or post in full quality — free, instant, no watermark. Supports single posts, carousels, and profile photos. No login required.");
    addMeta("keywords", "instagram photo saver, save instagram photos, download instagram images 2025, instagram photo downloader, download ig posts free, save instagram pictures, ig image downloader no watermark");

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Instagram Photo Saver",
      url: "https://www.freereelsdownloader.com/instagram-photo-saver",
      description: "Download any Instagram photo or carousel post in full quality — free, no watermark, no login.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(schema); document.head.appendChild(s);
  }, []);

  const faqs = [
    { q: "Can I download Instagram photos without logging in?", a: "Yes — no account, no login, no email. Just paste the public post link and download. We never ask for your Instagram credentials." },
    { q: "Can I download entire carousel posts?", a: "Absolutely. When you paste a carousel link, all photos and videos in that post are listed and available to download individually or as a batch." },
    { q: "What quality are the downloaded photos?", a: "We download the original full-resolution image as uploaded by the creator — typically 1080×1080 or 1080×1350 for portrait posts. No compression, no quality loss." },
    { q: "Will the downloaded photo have a watermark?", a: "Never. We fetch directly from Instagram's content delivery network. The image you download is pixel-identical to the original — clean, watermark-free." },
    { q: "Can I save Instagram profile photos in full size?", a: "Yes — use our Instagram Profile Downloader to save any public profile photo in its highest available resolution." },
  ];

  return (
    <div
      style={{
        fontFamily: "'Jost',sans-serif",
        background: BG,
        color: CREAM,
        minHeight: "100vh",
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* warm top accent */}
      <div style={{ height: 2, background: `linear-gradient(90deg,${TERRA},${GOLD},${TERRA})` }} />

      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "18px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(15,14,12,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${BORDER}`,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "1.4rem",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: CREAM,
            textDecoration: "none",
            fontStyle: "italic",
          }}
        >
          FreeReels<span style={{ color: TERRA }}>.</span>
        </a>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[
            { label: "Photos",    href: "/instagram-photo-downloader", active: true },
            { label: "Reels",     href: "/instagram-reels-downloader" },
            { label: "Stories",   href: "/instagram-stories-downloader" },
            { label: "YouTube",   href: "/youtube-video-downloader" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.82rem",
                fontWeight: l.active ? 600 : 400,
                color: l.active ? TERRA : "rgba(245,238,224,0.42)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                paddingBottom: l.active ? "2px" : 0,
                borderBottom: l.active ? `1px solid ${TERRA}` : "none",
              }}
              onMouseOver={(e) => { if (!l.active) e.currentTarget.style.color = "rgba(245,238,224,0.75)"; }}
              onMouseOut={(e) => { if (!l.active) e.currentTarget.style.color = "rgba(245,238,224,0.42)"; }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/"
            style={{
              padding: "10px 22px",
              border: `1px solid ${TERRA}`,
              color: TERRA,
              fontFamily: "'Jost',sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = TERRA; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = TERRA; }}
          >
            Download Free
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "100px 56px 80px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 80,
          alignItems: "center",
          minHeight: "calc(100vh - 60px)",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease }}
        >
          {/* kicker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <div style={{ width: 32, height: 1, background: TERRA }} />
            <span
              style={{
                fontFamily: "'Jost',sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: TERRA,
              }}
            >
              Instagram Photo Saver · 2025
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(3rem,6vw,6rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 28,
              color: CREAM,
            }}
          >
            Save Instagram<br />
            Photos in{" "}
            <em style={{ color: TERRA, fontWeight: 500 }}>Full Quality</em>,<br />
            Free &amp; Instant
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(245,238,224,0.48)",
              lineHeight: 1.75,
              maxWidth: 460,
              marginBottom: 44,
              fontWeight: 300,
            }}
          >
            Download any Instagram photo, carousel post, or collection in original full resolution — no watermark, no account required, no compromise on quality.
          </p>

          <div style={{ display: "flex", gap: 14, marginBottom: 52, flexWrap: "wrap" }}>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                background: TERRA,
                color: "#fff",
                fontFamily: "'Jost',sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "#B5633E"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = TERRA; e.currentTarget.style.transform = ""; }}
            >
              Save Photos Free
            </a>
            <a
              href="#formats"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 24px",
                border: `1px solid ${BORDER}`,
                color: "rgba(245,238,224,0.45)",
                fontFamily: "'Jost',sans-serif",
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(245,238,224,0.25)"; e.currentTarget.style.color = CREAM; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = "rgba(245,238,224,0.45)"; }}
            >
              Formats & Features →
            </a>
          </div>

          {/* elegant stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 0,
              borderTop: `1px solid ${BORDER}`,
              borderBottom: `1px solid ${BORDER}`,
              paddingTop: 28,
              paddingBottom: 28,
            }}
          >
            {[
              { val: "Full Res", desc: "Original quality downloads" },
              { val: "0",        desc: "Watermarks on downloads" },
              { val: "Free",     desc: "No hidden costs ever" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  paddingRight: i < 2 ? 28 : 0,
                  borderRight: i < 2 ? `1px solid ${BORDER}` : "none",
                  paddingLeft: i > 0 ? 28 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: CREAM,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.73rem",
                    color: "rgba(245,238,224,0.38)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <GalleryMockup />
      </section>

      {/* ── FORMATS ── */}
      <section
        id="formats"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 56px 100px" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ marginBottom: 52 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 12 }}>
            <div style={{ width: 32, height: 1, background: GOLD }} />
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: GOLD }}>
              Supported Formats
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2rem,3.5vw,3rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: CREAM,
            }}
          >
            Every type of Instagram photo, saved perfectly.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {[
            { format: "Single Photo",   ext: "jpg",  desc: "Download any standard Instagram photo post in its original full-resolution JPG format." },
            { format: "Carousel Album", ext: "zip",  desc: "Save all photos and videos from a carousel post individually. Every slide, perfectly captured." },
            { format: "Profile Photo",  ext: "jpg",  desc: "Download any public profile photo in the highest available resolution — crisp and full-size." },
            { format: "Tagged Photos",  ext: "jpg",  desc: "Save photos you've been tagged in (publicly visible) with a single click." },
            { format: "Reels Cover",    ext: "jpg",  desc: "Extract the thumbnail/cover image from any Reel post as a standalone JPG." },
            { format: "Story Photo",    ext: "jpg",  desc: "Save Instagram Story photos before they expire. Works on any public story." },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
            >
              <FormatCard {...f} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS — elegant numbered list ── */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 56px 100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: TERRA }} />
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: TERRA }}>
              How It Works
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2rem,3vw,2.8rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: CREAM,
              marginBottom: 48,
            }}
          >
            Download any Instagram<br />photo in three steps.
          </h2>

          {[
            { num: "I",   title: "Find the post",  desc: "Open Instagram and navigate to any public photo post or carousel. Tap the three-dot menu and copy the post link." },
            { num: "II",  title: "Paste the link", desc: "Return to FreeReelsDownloader and paste the URL into the input field. We'll instantly fetch all available media from the post." },
            { num: "III", title: "Download & save", desc: "Select the photo(s) you want to download. Full-resolution JPG files save directly to your device — clean, fast, free." },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 24,
                paddingBottom: i < 2 ? 32 : 0,
                marginBottom: i < 2 ? 32 : 0,
                borderBottom: i < 2 ? `1px solid ${BORDER}` : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.8rem",
                  fontWeight: 300,
                  color: TERRA,
                  width: 40,
                  flexShrink: 0,
                  lineHeight: 1.1,
                  fontStyle: "italic",
                }}
              >
                {s.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.95rem", fontWeight: 600, color: CREAM, marginBottom: 8 }}>
                  {s.title}
                </div>
                <p style={{ fontSize: "0.85rem", color: "rgba(245,238,224,0.44)", lineHeight: 1.75, fontWeight: 300 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* FAQ column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: GOLD }} />
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: GOLD }}>
              FAQ
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2rem,3vw,2.8rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: CREAM,
              marginBottom: 40,
            }}
          >
            Common questions,<br />answered honestly.
          </h2>
          {faqs.map((f, i) => <MinFaq key={i} q={f.q} a={f.a} />)}
        </motion.div>
      </section>

      {/* ── SEO PROSE ── */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "72px 56px 100px",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "1.8rem",
            fontWeight: 400,
            color: CREAM,
            marginBottom: 18,
            letterSpacing: "-0.02em",
          }}
        >
          Why Save Instagram Photos? A 2025 Perspective
        </h2>
        <p style={{ fontSize: "0.88rem", color: "rgba(245,238,224,0.44)", lineHeight: 1.88, marginBottom: 16, fontWeight: 300 }}>
          With over 100 million photos uploaded to Instagram daily, the platform has become one of the world's largest visual archives. Photographers, designers, and everyday users regularly want to save reference images, archive their own work, or preserve memories — all perfectly valid reasons to download Instagram content you own or have permission to use.
        </p>
        <h3 style={{ fontFamily: "'Jost',sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "rgba(245,238,224,0.75)", letterSpacing: "0.04em", textTransform: "uppercase", margin: "24px 0 10px" }}>
          Instagram compression & why original quality matters
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(245,238,224,0.44)", lineHeight: 1.88, fontWeight: 300 }}>
          Instagram re-compresses photos on upload, but the highest available version from their CDN is significantly better than a screenshot. Our downloader fetches the maximum-resolution version Instagram stores — giving you the sharpest possible image without taking a screenshot and losing even more quality.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "32px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "1.2rem",
            fontWeight: 500,
            fontStyle: "italic",
            color: CREAM,
            textDecoration: "none",
          }}
        >
          FreeReels<span style={{ color: TERRA }}>.</span>
        </a>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { label: "Instagram Photos",   href: "/instagram-photo-downloader" },
            { label: "Reels",              href: "/instagram-reels-downloader" },
            { label: "Carousel",           href: "/instagram-carousel-downloader" },
            { label: "Stories",            href: "/instagram-stories-downloader" },
            { label: "YouTube",            href: "/youtube-video-downloader" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.73rem", color: "rgba(245,238,224,0.28)", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500, transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "rgba(245,238,224,0.6)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(245,238,224,0.28)")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ fontSize: "0.68rem", color: "rgba(245,238,224,0.18)", letterSpacing: "0.04em" }}>
          © {new Date().getFullYear()} FreeReelsDownloader · Personal use only · Not affiliated with Instagram or Meta
        </span>
      </footer>
    </div>
  );
}