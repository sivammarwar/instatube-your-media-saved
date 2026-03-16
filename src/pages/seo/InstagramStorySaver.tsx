/**
 * SEO Page: /instagram-story-saver
 * Design: Brutalist newspaper grid — high contrast B&W + IG gradient accent,
 *         IBM Plex Serif + Barlow Condensed, masonry-like layout, bordered cards,
 *         step timeline, no soft shadows — raw editorial energy.
 * Keywords: instagram story saver, save instagram stories, download ig stories,
 *           instagram story downloader 2025, save stories without them knowing,
 *           anonymous instagram story viewer, story saver online free
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const IG_GRAD = "linear-gradient(135deg,#833AB4,#E1306C,#FCAF45)";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

/* ─── Story ring mockup ─── */
function StoryRing({ size = 64, active = false, children }: { size?: number; active?: boolean; children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        padding: 2,
        background: active ? IG_GRAD : "rgba(255,255,255,0.15)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: active
            ? "linear-gradient(135deg,rgba(131,58,180,0.3),rgba(225,48,108,0.2))"
            : "rgba(255,255,255,0.08)",
          border: "2px solid #0C0C12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.35,
        }}
      >
        {children || "👤"}
      </div>
    </div>
  );
}

/* ─── Story grid mockup ─── */
function StoriesPreview() {
  const stories = [
    { label: "Your Story", icon: "➕", active: false },
    { label: "travel_vibes", icon: "🌍", active: true },
    { label: "foodie.life", icon: "🍜", active: true },
    { label: "tech.daily", icon: "💻", active: true },
    { label: "fitness.hub", icon: "💪", active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.3 }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20,
        overflow: "hidden",
        width: 340,
        flexShrink: 0,
      }}
    >
      {/* header */}
      <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(255,255,255,0.8)", fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Instagram Stories
        </span>
        <div
          style={{
            padding: "3px 10px",
            borderRadius: 4,
            background: IG_GRAD,
            fontSize: "0.6rem",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Save All
        </div>
      </div>

      {/* stories row */}
      <div style={{ padding: "16px", display: "flex", gap: 14, overflowX: "auto" }}>
        {stories.map((s, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, minWidth: 52 }}>
            <StoryRing size={52} active={s.active}>{s.icon}</StoryRing>
            <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", textAlign: "center", maxWidth: 52, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* story viewer */}
      <div style={{ margin: "0 16px 16px", borderRadius: 14, background: "linear-gradient(135deg,rgba(131,58,180,0.25),rgba(225,48,108,0.2))", height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 30%,rgba(255,255,255,0.1),transparent 60%)" }} />
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>🌍</div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.06em" }}>
            @travel_vibes · 15h ago
          </div>
        </div>
        {/* progress bars */}
        <div style={{ position: "absolute", top: 10, left: 10, right: 10, display: "flex", gap: 3 }}>
          {[100, 100, 45, 0].map((p, i) => (
            <div key={i} style={{ flex: 1, height: 2, background: "rgba(255,255,255,0.2)", borderRadius: 1, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${p}%`, background: "#fff", borderRadius: 1 }} />
            </div>
          ))}
        </div>
        {/* download badge */}
        <div style={{ position: "absolute", bottom: 10, right: 10, padding: "5px 10px", borderRadius: 6, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", fontSize: "0.62rem", color: "#fff", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
          ⬇ Saved
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Bordered info card ─── */
function InfoCard({ title, content, accent }: { title: string; content: string; accent?: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? (accent || "rgba(225,48,108,0.5)") : "rgba(255,255,255,0.1)"}`,
        borderTop: `3px solid ${accent || "#E1306C"}`,
        padding: "24px 22px",
        background: hov ? "rgba(255,255,255,0.04)" : "transparent",
        transition: "all 0.25s",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: accent || "#E1306C",
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: "0.84rem", color: "rgba(240,235,248,0.5)", lineHeight: 1.72 }}>{content}</p>
    </div>
  );
}

export default function InstagramStorySaver() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Barlow+Condensed:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);

    document.title = "Instagram Story Saver – Download & Save Instagram Stories Free 2025 | FreeReelsDownloader";

    const addMeta = (name: string, content: string) => {
      const m = document.createElement("meta"); m.setAttribute("name", name); m.setAttribute("content", content); document.head.appendChild(m);
    };
    addMeta("description", "Save any Instagram Story before it disappears — anonymously and for free. Download photo & video stories in HD. No login, works on any device.");
    addMeta("keywords", "instagram story saver, save instagram stories, download ig stories, instagram story downloader 2025, anonymous story viewer, save stories without them knowing, story saver online free");

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Instagram Story Saver",
      url: "https://www.freereelsdownloader.com/instagram-story-saver",
      description: "Save any Instagram Story anonymously and for free. Download photo & video stories in HD.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(schema); document.head.appendChild(s);
  }, []);

  const steps = [
    { num: "01", action: "Open Instagram", detail: "Find the profile whose story you want to save. Copy their profile URL or story link." },
    { num: "02", action: "Paste the Link", detail: "Come back here and paste the URL into the story saver input field at the top of the page." },
    { num: "03", action: "Preview Stories", detail: "All available stories — photos and videos — appear for you to preview before downloading." },
    { num: "04", action: "Download to Device", detail: "Tap any story to download it. Photos save as JPG, videos save as MP4 in original quality." },
  ];

  return (
    <div
      style={{
        fontFamily: "'IBM Plex Serif',serif",
        background: "#0C0C12",
        color: "#F0EBF8",
        minHeight: "100vh",
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* IG gradient top bar */}
      <div style={{ height: 3, background: IG_GRAD }} />

      {/* ── NAV ── */}
      <nav
        style={{
          padding: "16px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(12,12,18,0.92)",
          backdropFilter: "blur(20px)",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: "1.3rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            background: IG_GRAD,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
          }}
        >
          FreeReels
        </a>
        <div style={{ display: "flex", gap: 0, border: "1px solid rgba(255,255,255,0.09)" }}>
          {[
            { label: "Stories",   href: "/instagram-stories-downloader", active: true },
            { label: "Reels",     href: "/instagram-reels-downloader" },
            { label: "Photos",    href: "/instagram-photo-downloader" },
            { label: "YouTube",   href: "/youtube-video-downloader" },
          ].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "9px 16px",
                fontSize: "0.76rem",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: l.active ? "#fff" : "rgba(240,235,248,0.4)",
                textDecoration: "none",
                background: l.active ? IG_GRAD : "transparent",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.09)" : "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { if (!l.active) e.currentTarget.style.color = "#F0EBF8"; }}
              onMouseOut={(e) => { if (!l.active) e.currentTarget.style.color = "rgba(240,235,248,0.4)"; }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO — newspaper split ── */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 48px 60px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 80,
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease }}
        >
          {/* Kicker */}
          <div
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#E1306C",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div style={{ width: 24, height: 2, background: "#E1306C" }} />
            Instagram Story Saver · Free · Anonymous · 2025
          </div>

          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "clamp(3.5rem,7vw,7rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              marginBottom: 28,
              color: "#F0EBF8",
            }}
          >
            Save Instagram<br />
            <span
              style={{
                background: IG_GRAD,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Stories
            </span>{" "}
            Before<br />
            They Vanish
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "rgba(240,235,248,0.5)",
              lineHeight: 1.65,
              maxWidth: 480,
              marginBottom: 36,
              fontWeight: 300,
            }}
          >
            Instagram Stories disappear after 24 hours. Our story saver lets you download any public story — photos and videos — instantly, for free, without them knowing.
          </p>

          <div style={{ display: "flex", gap: 0, marginBottom: 36 }}>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                background: IG_GRAD,
                color: "#fff",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Save Stories Free
            </a>
            <a
              href="#how"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 24px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(240,235,248,0.5)",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#F0EBF8"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(240,235,248,0.5)"; }}
            >
              How It Works →
            </a>
          </div>

          {/* stat row */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { val: "24H", label: "Before Stories Expire" },
              { val: "0", label: "Account Required" },
              { val: "HD", label: "Photo & Video Quality" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#F0EBF8",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.val}
                </div>
                <div style={{ fontSize: "0.72rem", color: "rgba(240,235,248,0.38)", marginTop: 4, letterSpacing: "0.05em", fontFamily: "'Barlow Condensed',sans-serif", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Story preview mockup */}
        <StoriesPreview />
      </section>

      {/* ── HOW IT WORKS — timeline ── */}
      <section
        id="how"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 48px" }}
      >
        {/* section header — newspaper rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 56, borderBottom: "2px solid rgba(255,255,255,0.12)", paddingBottom: 16 }}>
          <div
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#E1306C",
              paddingRight: 16,
              borderRight: "2px solid #E1306C",
              marginRight: 16,
            }}
          >
            Guide
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#F0EBF8",
            }}
          >
            How to Save Instagram Stories
          </h2>
        </div>

        {/* horizontal step timeline */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative" }}>
          {/* connector line */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: IG_GRAD,
              zIndex: 0,
            }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              style={{
                padding: "0 24px",
                paddingTop: 52,
                position: "relative",
                zIndex: 1,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              {/* step number circle */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: IG_GRAD,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "0.04em",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#F0EBF8",
                  marginBottom: 10,
                }}
              >
                {s.action}
              </div>
              <p style={{ fontSize: "0.83rem", color: "rgba(240,235,248,0.45)", lineHeight: 1.7, fontFamily: "'IBM Plex Serif',serif", fontWeight: 300 }}>
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INFO GRID ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0 }}>
          <InfoCard
            title="Anonymous Viewing"
            content="When you save a story through our tool, the account owner does NOT get a notification. Your identity stays completely private."
            accent="#833AB4"
          />
          <InfoCard
            title="Photos & Videos"
            content="Save both photo stories (JPG) and video stories (MP4) in the original quality posted by the creator — no compression, no watermark."
            accent="#E1306C"
          />
          <InfoCard
            title="24-Hour Window"
            content="Stories expire after 24 hours. Our tool works in real time — as long as a story is live, you can save it. Act quickly!"
            accent="#FCAF45"
          />
          <InfoCard
            title="Highlights Too"
            content="Story Highlights live permanently on profiles. You can download any Highlight reel using our Instagram Highlights Downloader."
            accent="#833AB4"
          />
          <InfoCard
            title="No App Required"
            content="Works entirely in your browser. No installation, no Chrome extension, no Android APK. Just paste the link and download."
            accent="#E1306C"
          />
          <InfoCard
            title="Public Profiles Only"
            content="For privacy reasons, we only support public Instagram profiles. Private account stories cannot be accessed or downloaded."
            accent="#FCAF45"
          />
        </div>
      </section>

      {/* ── SEO PROSE ── */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "72px 48px 100px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: "2rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            color: "#F0EBF8",
            marginBottom: 20,
          }}
        >
          Instagram Story Saver — The Full Guide for 2025
        </h2>
        <p style={{ fontSize: "0.88rem", color: "rgba(240,235,248,0.45)", lineHeight: 1.88, marginBottom: 16, fontFamily: "'IBM Plex Serif',serif", fontWeight: 300, fontStyle: "italic" }}>
          Instagram Stories are one of the platform's most ephemeral features — they're gone after 24 hours. Whether you want to archive your own stories, save a memory from a friend (with their permission), or download a how-to tutorial before it expires, our free Instagram Story Saver has you covered.
        </p>
        <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(240,235,248,0.8)", margin: "24px 0 10px" }}>
          Can I save my own Instagram stories?
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(240,235,248,0.45)", lineHeight: 1.85, marginBottom: 14, fontWeight: 300 }}>
          Yes — and it's the most common use case. Instagram's built-in "Archive" feature saves stories to your own archive, but the quality is sometimes reduced. Our tool downloads your story at full original quality so you always have the best version.
        </p>
        <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(240,235,248,0.8)", margin: "24px 0 10px" }}>
          Trending searches related to Instagram Stories in 2025
        </h3>
        <p style={{ fontSize: "0.87rem", color: "rgba(240,235,248,0.45)", lineHeight: 1.85, fontWeight: 300 }}>
          Users are increasingly searching for ways to save stories anonymously, download stories without watermarks, view stories without being seen, and access expired or archived stories. Our tool addresses all of these needs for publicly accessible content — keeping your identity private while delivering clean HD downloads.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "2px solid rgba(255,255,255,0.08)",
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
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: "1.1rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            background: IG_GRAD,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          FreeReels
        </span>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[
            { label: "Stories",    href: "/instagram-stories-downloader" },
            { label: "Highlights", href: "/instagram-highlights-downloader" },
            { label: "Reels",      href: "/instagram-reels-downloader" },
            { label: "Photos",     href: "/instagram-photo-downloader" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.72rem", color: "rgba(240,235,248,0.27)", textDecoration: "none", fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "rgba(240,235,248,0.6)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(240,235,248,0.27)")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ fontSize: "0.67rem", color: "rgba(240,235,248,0.18)", fontFamily: "'Barlow Condensed',sans-serif" }}>
          © {new Date().getFullYear()} FreeReelsDownloader · Not affiliated with Instagram or Meta
        </span>
      </footer>
    </div>
  );
}