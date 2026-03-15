import { useEffect } from "react";
import { Link } from "react-router-dom";

interface FAQ {
  q: string;
  a: string;
}

interface SeoPageProps {
  title: string;
  metaDescription: string;
  h1: string;
  h2: string;
  description: string;
  keywords: string[];
  faqs: FAQ[];
  relatedLinks: { href: string; label: string }[];
  platform: "instagram" | "youtube" | "both";
  schemaName: string;
}

export default function SeoPage({
  title, metaDescription, h1, h2, description,
  keywords, faqs, relatedLinks, platform, schemaName
}: SeoPageProps) {

  useEffect(() => {
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", metaDescription);
    window.scrollTo(0, 0);
  }, [title, metaDescription]);

  const igColor = "#E1306C";
  const ytColor = "#FF0000";
  const color = platform === "youtube" ? ytColor : igColor;

  return (
    <div style={{ background: "#060810", minHeight: "100vh", color: "#F5F0FF", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(6,8,16,0.92)", backdropFilter: "blur(20px)", zIndex: 50 }}>
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#833AB4,#E1306C,#FF0000)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", background: "linear-gradient(90deg,#FCAF45,#E1306C,#FF0000,#833AB4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            FreeReelsDownloader
          </span>
        </Link>
        <Link to="/" style={{ textDecoration: "none", padding: "8px 20px", borderRadius: "10px", background: "linear-gradient(135deg,#833AB4,#E1306C,#FF0000)", color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.05em" }}>
          Download Now →
        </Link>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px 60px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, background: `rgba(${platform === "youtube" ? "255,0,0" : "225,48,108"},0.12)`, border: `1px solid rgba(${platform === "youtube" ? "255,0,0" : "225,48,108"},0.3)`, marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "inline-block" }}></span>
          <span style={{ fontSize: "0.72rem", fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color }}>
            {platform === "youtube" ? "YouTube" : "Instagram"} Tool
          </span>
        </div>

        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20, background: "linear-gradient(90deg,#FCAF45,#E1306C,#FF0000,#833AB4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {h1}
        </h1>
        <h2 style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 400, color: "rgba(245,240,255,0.6)", marginBottom: 36, lineHeight: 1.6 }}>
          {h2}
        </h2>

        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", borderRadius: 14, background: "linear-gradient(135deg,#833AB4,#E1306C,#FF0000,#F77737)", color: "#fff", textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.04em", boxShadow: "0 8px 32px rgba(225,48,108,0.4)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Start Downloading Free
        </Link>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "Download in seconds, no waiting" },
            { icon: "🆓", title: "100% Free", desc: "No hidden fees, no subscriptions" },
            { icon: "🔒", title: "No Login Needed", desc: "No account required ever" },
            { icon: "📱", title: "Works on Mobile", desc: "iPhone, Android, any device" },
            { icon: "🎬", title: "HD Quality", desc: "Original quality preserved" },
            { icon: "♾️", title: "Unlimited", desc: "Download as many as you want" },
          ].map((f, i) => (
            <div key={i} style={{ padding: "20px", borderRadius: 14, background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{f.icon}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.88rem", marginBottom: 4 }}>{f.title}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(245,240,255,0.5)", lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "36px 32px" }}>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(245,240,255,0.7)" }}>
            {description}
          </p>
          <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {keywords.map((kw, i) => (
              <span key={i} style={{ padding: "4px 12px", borderRadius: 99, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.72rem", color: "rgba(245,240,255,0.5)", fontFamily: "'Syne', sans-serif" }}>
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 800, marginBottom: 32, textAlign: "center" }}>
          How to Download in 3 Steps
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { step: "01", title: "Copy the Link", desc: `Go to ${platform === "youtube" ? "YouTube" : "Instagram"} and copy the video URL from your browser or app` },
            { step: "02", title: "Paste & Fetch", desc: "Paste the link into FreeReelsDownloader and click Fetch to load the video" },
            { step: "03", title: "Download", desc: "Choose your quality and click Download. Your video saves instantly!" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "24px 20px", borderRadius: 16, background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "3rem", fontWeight: 800, color: "rgba(255,255,255,0.06)", position: "absolute", top: 8, right: 16, lineHeight: 1 }}>{s.step}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color, marginBottom: 8 }}>Step {s.step}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: "0.82rem", color: "rgba(245,240,255,0.55)", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 12, background: "linear-gradient(135deg,#833AB4,#E1306C,#FF0000)", color: "#fff", textDecoration: "none", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>
            Try It Now — It's Free
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", fontWeight: 800, marginBottom: 32, textAlign: "center" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ padding: "20px 24px", borderRadius: 14, background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.92rem", marginBottom: 8, color: "#F5F0FF" }}>
                {faq.q}
              </div>
              <div style={{ fontSize: "0.82rem", color: "rgba(245,240,255,0.6)", lineHeight: 1.7 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related pages */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, color: "rgba(245,240,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.72rem" }}>
          More Downloader Tools
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {relatedLinks.map((l, i) => (
            <Link key={i} to={l.href} style={{ padding: "8px 18px", borderRadius: 10, background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(245,240,255,0.7)", textDecoration: "none", fontSize: "0.8rem", fontFamily: "'Syne', sans-serif", fontWeight: 600, transition: "all 0.2s" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/" style={{ padding: "8px 18px", borderRadius: 10, background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(245,240,255,0.7)", textDecoration: "none", fontSize: "0.8rem", fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "24px", textAlign: "center", fontSize: "0.72rem", color: "rgba(245,240,255,0.3)", fontFamily: "'Syne', sans-serif" }}>
        © {new Date().getFullYear()} FreeReelsDownloader · Free video downloader · Not affiliated with YouTube or Instagram
      </footer>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": schemaName,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      })}} />
    </div>
  );
}