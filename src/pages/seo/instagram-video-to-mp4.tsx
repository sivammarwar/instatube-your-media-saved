import { Helmet } from "react-helmet";

const InstagramVideoToMp4 = () => {
  return (
    <>
      <Helmet>
        <title>Instagram Video to MP4 – Convert & Download Instagram Videos Free</title>
        <meta name="description" content="Convert any Instagram video to MP4 format for free. Download Instagram Reels, posts, and Stories as clean MP4 video files. No app, no watermark, no login." />
        <meta name="keywords" content="instagram video to mp4, convert instagram video to mp4, instagram mp4 downloader, save instagram video mp4, instagram to mp4 converter" />
        <link rel="canonical" href="https://freereelsdownloader.com/instagram-video-to-mp4" />
        <meta property="og:title" content="Instagram Video to MP4 – Free Converter & Downloader" />
        <meta property="og:description" content="Convert Instagram Reels, videos, and Stories to MP4. Free, fast, no watermark." />
        <meta property="og:url" content="https://freereelsdownloader.com/instagram-video-to-mp4" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Instagram Video to MP4 Converter",
          "url": "https://freereelsdownloader.com/instagram-video-to-mp4",
          "description": "Convert Instagram videos, Reels, and Stories to MP4 format for free",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        :root {
          --grad-ig: linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #FCAF45 100%);
          --grad-fusion: linear-gradient(135deg, #833AB4 0%, #E1306C 30%, #FF0000 60%, #F77737 100%);
          --grad-text: linear-gradient(90deg, #FCAF45, #E1306C, #FF0000, #833AB4);
          --ig-purple: #833AB4; --ig-magenta: #E1306C;
          --bg-void: #060810;
          --bg-card: rgba(255,255,255,0.055);
          --border-subtle: rgba(255,255,255,0.08);
          --text-primary: #F5F0FF;
          --text-secondary: rgba(245,240,255,0.55);
          --text-muted: rgba(245,240,255,0.3);
          --font-display: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: var(--font-body); background: var(--bg-void); color: var(--text-primary); -webkit-font-smoothing: antialiased; }

        .igv-root { min-height: 100vh; background: var(--bg-void); overflow-x: hidden; position: relative; }
        .igv-bg {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 60% 60% at 15% 30%, rgba(131,58,180,0.16) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 85% 70%, rgba(225,48,108,0.12) 0%, transparent 60%);
        }

        /* NAV */
        .igv-nav { position: sticky; top: 0; z-index: 20; background: rgba(6,8,16,0.9); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border-subtle); padding: 1rem 2.5rem; display: flex; justify-content: space-between; align-items: center; }
        .igv-brand { font-family: var(--font-display); font-weight: 800; font-size: 1rem; background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-decoration: none; }
        .igv-nav-links { display: flex; gap: 1.5rem; }
        .igv-nav-links a { color: var(--text-muted); text-decoration: none; font-size: 0.8rem; font-family: var(--font-display); font-weight: 600; transition: color 0.2s; }
        .igv-nav-links a:hover { color: var(--text-primary); }

        /* SPLIT HERO — left text + right tool */
        .igv-hero { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; min-height: 80vh; align-items: stretch; }

        .igv-hero-left {
          padding: 5rem 3rem 3rem;
          display: flex; flex-direction: column; justify-content: center;
          border-right: 1px solid var(--border-subtle);
          background: rgba(131,58,180,0.03);
        }
        .igv-kicker { font-family: var(--font-display); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #c084fc; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px; }
        .igv-kicker-dot { width: 6px; height: 6px; border-radius: 50%; background: #833AB4; box-shadow: 0 0 8px #833AB4; }
        .igv-h1 { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 800; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 1.25rem; }
        .igv-h1 .g { background: var(--grad-ig); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .igv-desc { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; font-weight: 300; max-width: 42ch; }

        /* Trust badges */
        .igv-trust { display: flex; flex-direction: column; gap: 8px; }
        .igv-trust-item { display: flex; align-items: center; gap: 10px; font-size: 0.82rem; color: var(--text-secondary); font-family: var(--font-display); font-weight: 600; }
        .igv-trust-check { width: 22px; height: 22px; border-radius: 6px; background: rgba(131,58,180,0.15); border: 1px solid rgba(131,58,180,0.3); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #c084fc; flex-shrink: 0; }

        /* RIGHT SIDE — tool + stats */
        .igv-hero-right { padding: 4rem 3rem; display: flex; flex-direction: column; justify-content: center; gap: 2rem; }

        .igv-card { background: rgba(18,14,28,0.9); border: 1px solid rgba(131,58,180,0.2); border-radius: 22px; padding: 1.75rem; backdrop-filter: blur(24px); box-shadow: 0 24px 60px rgba(0,0,0,0.55), 0 0 50px rgba(131,58,180,0.12); position: relative; }
        .igv-card::before { content: ''; position: absolute; inset: 0; border-radius: 22px; padding: 1px; background: var(--grad-ig); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0.45; pointer-events: none; }
        .igv-label { font-family: var(--font-display); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.65rem; }
        .igv-input { width: 100%; background: rgba(255,255,255,0.05); border: 1px solid var(--border-subtle); border-radius: 11px; padding: 0.88rem 1rem; color: var(--text-primary); font-family: var(--font-body); font-size: 0.9rem; outline: none; transition: all 0.3s; margin-bottom: 1rem; }
        .igv-input:focus { border-color: rgba(131,58,180,0.5); box-shadow: 0 0 0 3px rgba(131,58,180,0.1); }
        .igv-input::placeholder { color: var(--text-muted); }

        /* Format toggle */
        .igv-format-row { display: flex; gap: 6px; margin-bottom: 1rem; flex-wrap: wrap; }
        .igv-fmt { padding: 6px 14px; border-radius: 8px; border: 1px solid var(--border-subtle); background: rgba(255,255,255,0.04); font-family: var(--font-display); font-size: 0.72rem; font-weight: 700; color: var(--text-muted); cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
        .igv-fmt.active { border-color: rgba(131,58,180,0.45); background: rgba(131,58,180,0.12); color: #c084fc; }
        .igv-fmt:hover { border-color: rgba(255,255,255,0.15); color: var(--text-secondary); }
        .igv-fmt-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }

        .igv-btn { width: 100%; background: var(--grad-ig); border: none; border-radius: 11px; padding: 0.9rem; color: #fff; font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.06em; cursor: pointer; box-shadow: 0 4px 20px rgba(131,58,180,0.4); transition: all 0.2s; }
        .igv-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(131,58,180,0.55); }

        /* Stats strip below card */
        .igv-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border-subtle); border-radius: 14px; overflow: hidden; }
        .igv-stat { background: var(--bg-void); padding: 1rem; text-align: center; }
        .igv-stat-v { font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; background: var(--grad-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 2px; }
        .igv-stat-l { font-size: 0.65rem; color: var(--text-muted); font-family: var(--font-display); letter-spacing: 0.08em; text-transform: uppercase; }

        /* SECTIONS */
        .igv-sec { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; padding: 4rem 2rem 4rem; }
        .igv-sh { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .igv-stag { font-family: var(--font-display); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #c084fc; }
        .igv-sline { flex: 1; height: 1px; background: var(--border-subtle); }
        .igv-h2 { font-family: var(--font-display); font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.4rem; }
        .igv-sub { font-size: 0.9rem; color: var(--text-secondary); font-weight: 300; margin-bottom: 2.5rem; }

        /* Steps */
        .igv-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 3rem; }
        .igv-step { background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 1.25rem; text-align: center; transition: all 0.3s; }
        .igv-step:hover { transform: translateY(-3px); background: rgba(255,255,255,0.08); }
        .igv-step-n { width: 44px; height: 44px; border-radius: 50%; background: var(--grad-ig); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 1rem; font-weight: 800; color: #fff; margin: 0 auto 0.75rem; box-shadow: 0 0 20px rgba(131,58,180,0.3); }
        .igv-step-t { font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; margin-bottom: 0.3rem; }
        .igv-step-d { font-size: 0.75rem; color: var(--text-secondary); line-height: 1.6; font-weight: 300; }

        /* Content types */
        .igv-types { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 3rem; }
        .igv-type { background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 1.5rem; transition: all 0.3s; }
        .igv-type:hover { transform: translateY(-4px); background: rgba(255,255,255,0.08); border-color: rgba(131,58,180,0.2); }
        .igv-type-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .igv-type-t { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; }
        .igv-type-d { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.65; font-weight: 300; }
        .igv-type-tags { display: flex; gap: 6px; margin-top: 0.75rem; flex-wrap: wrap; }
        .igv-type-tag { padding: 2px 8px; border-radius: 4px; background: rgba(131,58,180,0.1); border: 1px solid rgba(131,58,180,0.2); font-family: var(--font-display); font-size: 0.6rem; font-weight: 700; color: #c084fc; letter-spacing: 0.06em; }

        /* FAQ */
        .igv-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .igv-faq { background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.1rem 1.25rem; }
        .igv-faq-q { font-family: var(--font-display); font-size: 0.88rem; font-weight: 700; margin-bottom: 0.5rem; }
        .igv-faq-a { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; font-weight: 300; }

        /* FOOTER */
        .igv-footer { position: relative; z-index: 1; border-top: 1px solid var(--border-subtle); padding: 1.5rem 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .igv-footer p { font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-display); }
        .igv-footer-links { display: flex; gap: 1.5rem; }
        .igv-footer-links a { font-size: 0.72rem; color: var(--text-muted); text-decoration: none; font-family: var(--font-display); transition: color 0.2s; }
        .igv-footer-links a:hover { color: var(--text-secondary); }

        @media (max-width: 900px) {
          .igv-hero { grid-template-columns: 1fr; min-height: auto; }
          .igv-hero-right { border-top: 1px solid var(--border-subtle); padding: 2.5rem; }
          .igv-hero-left { border-right: none; padding: 4rem 2rem 2rem; }
        }
        @media (max-width: 768px) {
          .igv-steps { grid-template-columns: 1fr 1fr; }
          .igv-types { grid-template-columns: 1fr 1fr; }
          .igv-faq-grid { grid-template-columns: 1fr; }
          .igv-nav-links { display: none; }
        }
        @media (max-width: 480px) {
          .igv-steps, .igv-types { grid-template-columns: 1fr; }
          .igv-h1 { font-size: 2rem; }
          .igv-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="igv-root">
        <div className="igv-bg" />

        <nav className="igv-nav">
          <a href="/" className="igv-brand">FreeReelsDownloader</a>
          <div className="igv-nav-links">
            <a href="/instagram-video-downloader">Video</a>
            <a href="/instagram-reels-downloader">Reels</a>
            <a href="/instagram-to-mp4">IG to MP4</a>
            <a href="/instagram-stories-downloader">Stories</a>
          </div>
        </nav>

        <section className="igv-hero">
          {/* LEFT — headline + trust */}
          <div className="igv-hero-left">
            <div className="igv-kicker"><span className="igv-kicker-dot" />Instagram → MP4 Converter</div>
            <h1 className="igv-h1">Convert Instagram<br />Video to <span className="g">MP4</span><br />in Seconds</h1>
            <p className="igv-desc">
              Download any Instagram Reel, video post, or Story as a clean MP4 file.
              Works in your browser — no app install, no watermark, no account needed.
            </p>
            <div className="igv-trust">
              {[
                'Original 1080p HD quality',
                'No watermark ever added',
                'Works on iPhone & Android',
                'No login or sign-up required',
                '100% free, no limits',
              ].map(t => (
                <div className="igv-trust-item" key={t}>
                  <div className="igv-trust-check">✓</div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — tool + stats */}
          <div className="igv-hero-right">
            <div className="igv-card">
              <div className="igv-label">Paste Instagram URL</div>
              <input className="igv-input" type="url" placeholder="https://www.instagram.com/reel/..." />
              <div className="igv-label" style={{ marginBottom: '0.5rem' }}>Save As</div>
              <div className="igv-format-row">
                {[
                  { label: 'MP4 · Video', active: true },
                  { label: 'MP3 · Audio', active: false },
                ].map(f => (
                  <div className={`igv-fmt${f.active ? ' active' : ''}`} key={f.label}>
                    <span className="igv-fmt-dot" />
                    {f.label}
                  </div>
                ))}
              </div>
              <button className="igv-btn">Convert to MP4 ↓</button>
            </div>

            <div className="igv-stats">
              {[['1080p', 'Max Quality'], ['H.264', 'MP4 Codec'], ['Free', 'Always']].map(([v, l]) => (
                <div className="igv-stat" key={l}>
                  <div className="igv-stat-v">{v}</div>
                  <div className="igv-stat-l">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <div className="igv-sec">
          <div className="igv-sh"><span className="igv-stag">How It Works</span><div className="igv-sline" /></div>
          <h2 className="igv-h2">Convert Instagram to MP4 in 4 Steps</h2>
          <p className="igv-sub">No technical knowledge needed — works on any browser.</p>
          <div className="igv-steps">
            {[
              { n: '1', t: 'Open the Post', d: 'Navigate to the Instagram Reel, video, or Story you want to download.' },
              { n: '2', t: 'Copy Link', d: 'Tap the three-dot menu (⋯) and select "Copy Link". On desktop, copy from the URL bar.' },
              { n: '3', t: 'Paste & Convert', d: 'Paste the link into the field above, select MP4, and click Convert.' },
              { n: '4', t: 'Save MP4', d: 'Your clean MP4 file downloads instantly to your phone or computer.' },
            ].map(s => (
              <div className="igv-step" key={s.n}>
                <div className="igv-step-n">{s.n}</div>
                <div className="igv-step-t">{s.t}</div>
                <p className="igv-step-d">{s.d}</p>
              </div>
            ))}
          </div>

          {/* SUPPORTED CONTENT */}
          <div className="igv-sh"><span className="igv-stag">Supported Content</span><div className="igv-sline" /></div>
          <h2 className="igv-h2">What You Can Convert to MP4</h2>
          <p className="igv-sub">All major Instagram video formats are supported.</p>
          <div className="igv-types">
            {[
              { icon: '🎬', t: 'Instagram Reels', d: 'Convert any public Reel to MP4. Original 1080p resolution, no watermark, full audio track preserved.', tags: ['MP4', '1080p', 'Audio'] },
              { icon: '📹', t: 'Video Posts', d: 'Save regular Instagram video posts as MP4. Supports both portrait and landscape video formats.', tags: ['MP4', 'HD'] },
              { icon: '📖', t: 'Video Stories', d: 'Download video Stories from any public account before they expire at 24 hours.', tags: ['MP4', '24hr'] },
            ].map(c => (
              <div className="igv-type" key={c.t}>
                <div className="igv-type-icon">{c.icon}</div>
                <div className="igv-type-t">{c.t}</div>
                <p className="igv-type-d">{c.d}</p>
                <div className="igv-type-tags">
                  {c.tags.map(tag => <span className="igv-type-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="igv-sh"><span className="igv-stag">FAQ</span><div className="igv-sline" /></div>
          <h2 className="igv-h2">Instagram Video to MP4 FAQ</h2>
          <p className="igv-sub" style={{ marginBottom: '1.5rem' }}>Quick answers to the most common questions.</p>
          <div className="igv-faq-grid">
            {[
              { q: 'What resolution is the MP4 file?', a: 'Most Reels and recent video posts download at 1080p HD. Older content may be 720p depending on what was originally uploaded.' },
              { q: 'Does the MP4 include audio?', a: 'Yes. The full audio track is preserved including background music, voiceover, and all sound effects from the original video.' },
              { q: 'Can I convert Instagram Stories to MP4?', a: 'Yes. Paste the Story URL from a public account to download it as a clean MP4 file before it expires at 24 hours.' },
              { q: 'Can I edit the MP4 after downloading?', a: 'Yes. The downloaded MP4 (H.264) is compatible with all major editors including iMovie, CapCut, Adobe Premiere, and DaVinci Resolve.' },
              { q: 'Does the MP4 have a watermark?', a: 'No watermark is ever added by our tool. We download the original source file directly from Instagram\'s servers.' },
              { q: 'Does it work on iPhone (iOS Safari)?', a: 'Yes. After the MP4 downloads, it saves to your Files app. You can then move it to your Camera Roll from there.' },
              { q: 'Can I convert a private Instagram video?', a: 'No. Only public Instagram content is supported. Private accounts require login which we do not collect.' },
              { q: 'Is there a file size or duration limit?', a: 'No limits on file size or duration. Long-form videos and short Reels are all handled the same way.' },
            ].map(f => (
              <div className="igv-faq" key={f.q}>
                <div className="igv-faq-q">{f.q}</div>
                <p className="igv-faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="igv-footer">
          <p>© 2025 FreeReelsDownloader.com — Not affiliated with Instagram or Meta Platforms, Inc.</p>
          <div className="igv-footer-links">
            <a href="/instagram-video-downloader">Video Downloader</a>
            <a href="/instagram-reels-downloader">Reels Downloader</a>
            <a href="/instagram-to-mp4">IG to MP4</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InstagramVideoToMp4;