import { Helmet } from "react-helmet";

const InstagramDownloaderOnline = () => {
  return (
    <>
      <Helmet>
        <title>Instagram Downloader Online – Save Any Instagram Content Free</title>
        <meta name="description" content="The best online Instagram downloader. Download Instagram Reels, videos, photos, and Stories for free. No app, no login, works on all devices instantly." />
        <meta name="keywords" content="instagram downloader online, online instagram downloader, instagram content downloader, download from instagram online, best instagram downloader" />
        <link rel="canonical" href="https://freereelsdownloader.com/instagram-downloader-online" />
        <meta property="og:title" content="Instagram Downloader Online – Best Free Tool 2025" />
        <meta property="og:description" content="Download any Instagram content online for free. Reels, videos, photos, Stories — all in one tool." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"FAQPage",
          "mainEntity":[
            {"@type":"Question","name":"What can I download from Instagram?","acceptedAnswer":{"@type":"Answer","text":"You can download Instagram Reels, videos, photos, carousels, and Stories from any public account."}},
            {"@type":"Question","name":"Do I need to install an app?","acceptedAnswer":{"@type":"Answer","text":"No. Everything runs in your browser. No app installation required on any device."}},
            {"@type":"Question","name":"Is it free to use?","acceptedAnswer":{"@type":"Answer","text":"Yes, completely free with no limits or registration."}}
          ]
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        :root{
          --grad-ig:linear-gradient(135deg,#833AB4 0%,#E1306C 50%,#FCAF45 100%);
          --grad-fusion:linear-gradient(135deg,#833AB4 0%,#E1306C 30%,#FF0000 60%,#F77737 100%);
          --grad-text:linear-gradient(90deg,#FCAF45,#E1306C,#FF0000,#833AB4);
          --bg-void:#060810; --bg-card:rgba(255,255,255,0.055);
          --border-subtle:rgba(255,255,255,0.08);
          --text-primary:#F5F0FF; --text-secondary:rgba(245,240,255,0.55);
          --text-muted:rgba(245,240,255,0.3);
          --font-display:'Syne',sans-serif; --font-body:'DM Sans',sans-serif;
        }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        body{font-family:var(--font-body);background:var(--bg-void);color:var(--text-primary);-webkit-font-smoothing:antialiased}

        .ido-root{min-height:100vh;background:var(--bg-void);overflow-x:hidden;position:relative}
        .ido-bg{position:fixed;inset:0;pointer-events:none;z-index:0;
          background:radial-gradient(ellipse 60% 50% at 30% 10%,rgba(225,48,108,0.1) 0%,transparent 65%),
          radial-gradient(ellipse 50% 50% at 80% 90%,rgba(131,58,180,0.1) 0%,transparent 65%)}

        /* NAV */
        .ido-nav{position:sticky;top:0;z-index:20;background:rgba(6,8,16,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--border-subtle);padding:1rem 2.5rem;display:flex;justify-content:space-between;align-items:center}
        .ido-brand{font-family:var(--font-display);font-weight:800;font-size:1rem;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-decoration:none}
        .ido-nav-links{display:flex;gap:1.5rem}
        .ido-nav-links a{color:var(--text-muted);text-decoration:none;font-size:0.8rem;font-family:var(--font-display);font-weight:600;transition:color 0.2s}
        .ido-nav-links a:hover{color:var(--text-primary)}

        /* HERO */
        .ido-hero{position:relative;z-index:1;text-align:center;padding:4.5rem 2rem 2rem}
        .ido-badge{display:inline-flex;align-items:center;gap:8px;padding:5px 16px;border-radius:99px;background:rgba(225,48,108,0.1);border:1px solid rgba(225,48,108,0.3);font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#f472b6;margin-bottom:1.25rem}
        .ido-h1{font-family:var(--font-display);font-size:clamp(1.8rem,4.5vw,3.5rem);font-weight:800;line-height:1.1;letter-spacing:-0.025em;margin-bottom:1rem}
        .ido-h1 .g{background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .ido-desc{font-size:0.98rem;color:var(--text-secondary);max-width:52ch;margin:0 auto 2rem;line-height:1.7;font-weight:300}

        /* CONTENT TYPE SELECTOR */
        .ido-type-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:2rem}
        .ido-type-btn{display:flex;align-items:center;gap:8px;padding:8px 18px;border-radius:12px;border:1px solid var(--border-subtle);background:rgba(255,255,255,0.04);font-family:var(--font-display);font-size:0.78rem;font-weight:700;color:var(--text-muted);cursor:pointer;transition:all 0.2s}
        .ido-type-btn.active{border-color:rgba(225,48,108,0.4);background:rgba(225,48,108,0.1);color:#f472b6}
        .ido-type-btn:hover{border-color:rgba(255,255,255,0.15);color:var(--text-secondary)}
        .ido-type-icon{font-size:1.1rem}

        /* TOOL */
        .ido-tool{position:relative;z-index:1;max-width:620px;margin:0 auto;padding:0 1.5rem 3rem}
        .ido-card{background:rgba(18,14,28,0.85);border:1px solid rgba(225,48,108,0.2);border-radius:22px;padding:1.75rem;backdrop-filter:blur(24px);box-shadow:0 32px 80px rgba(0,0,0,0.6),0 0 50px rgba(225,48,108,0.1);position:relative}
        .ido-card::before{content:'';position:absolute;inset:0;border-radius:22px;padding:1px;background:var(--grad-ig);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0.4;pointer-events:none}
        .ido-label{font-family:var(--font-display);font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.65rem}
        .ido-row{display:flex;gap:8px;flex-wrap:wrap}
        .ido-input{flex:1;min-width:180px;background:rgba(255,255,255,0.05);border:1px solid var(--border-subtle);border-radius:11px;padding:0.85rem 1rem;color:var(--text-primary);font-family:var(--font-body);font-size:0.9rem;outline:none;transition:all 0.3s}
        .ido-input:focus{border-color:rgba(225,48,108,0.45)}
        .ido-input::placeholder{color:var(--text-muted)}
        .ido-btn{background:var(--grad-ig);border:none;border-radius:11px;padding:0.85rem 1.5rem;color:#fff;font-family:var(--font-display);font-weight:700;font-size:0.82rem;letter-spacing:0.06em;cursor:pointer;box-shadow:0 4px 20px rgba(225,48,108,0.4);transition:all 0.2s;white-space:nowrap}
        .ido-btn:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(225,48,108,0.55)}

        /* CAPABILITY TABLE */
        .ido-section{position:relative;z-index:1;max-width:900px;margin:0 auto;padding:0 2rem 4rem}
        .ido-sh{display:flex;align-items:center;gap:1rem;margin-bottom:2rem}
        .ido-stag{font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#f472b6}
        .ido-sline{flex:1;height:1px;background:var(--border-subtle)}
        .ido-h2{font-family:var(--font-display);font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-0.02em;margin-bottom:0.4rem}
        .ido-sub{font-size:0.9rem;color:var(--text-secondary);font-weight:300;margin-bottom:2.5rem}

        /* Content capabilities grid */
        .ido-cap-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
        .ido-cap{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:16px;padding:1.5rem;display:flex;gap:1rem;align-items:flex-start;transition:all 0.3s}
        .ido-cap:hover{transform:translateY(-3px);background:rgba(255,255,255,0.08)}
        .ido-cap-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;background:rgba(225,48,108,0.1);border:1px solid rgba(225,48,108,0.2)}
        .ido-cap-body{}
        .ido-cap-title{font-family:var(--font-display);font-size:0.95rem;font-weight:700;margin-bottom:0.3rem}
        .ido-cap-desc{font-size:0.8rem;color:var(--text-secondary);line-height:1.6;font-weight:300}
        .ido-cap-tags{display:flex;gap:6px;margin-top:0.6rem;flex-wrap:wrap}
        .ido-cap-tag{padding:2px 8px;border-radius:4px;background:rgba(225,48,108,0.1);border:1px solid rgba(225,48,108,0.2);font-family:var(--font-display);font-size:0.62rem;font-weight:700;color:#f472b6;letter-spacing:0.06em}

        /* FAQ — main content */
        .ido-faq-columns{display:grid;grid-template-columns:1fr 1fr;gap:0;background:rgba(18,14,28,0.6);border:1px solid var(--border-subtle);border-radius:20px;overflow:hidden;backdrop-filter:blur(16px)}
        .ido-faq-item{padding:1.25rem 1.5rem;border-bottom:1px solid var(--border-subtle);border-right:1px solid var(--border-subtle);transition:background 0.2s}
        .ido-faq-item:nth-child(even){border-right:none}
        .ido-faq-item:nth-last-child(-n+2){border-bottom:none}
        .ido-faq-item:hover{background:rgba(255,255,255,0.03)}
        .ido-faq-q{font-family:var(--font-display);font-size:0.88rem;font-weight:700;margin-bottom:0.6rem;line-height:1.3}
        .ido-faq-a{font-size:0.8rem;color:var(--text-secondary);line-height:1.7;font-weight:300}

        /* PLATFORM COMPARISON */
        .ido-comp-table{width:100%;border-collapse:collapse;background:rgba(18,14,28,0.6);border-radius:18px;overflow:hidden;backdrop-filter:blur(16px);box-shadow:0 24px 60px rgba(0,0,0,0.4)}
        .ido-comp-table th{padding:0.9rem 1.25rem;font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);background:rgba(255,255,255,0.03);text-align:left;border-bottom:1px solid var(--border-subtle)}
        .ido-comp-table th:not(:first-child){text-align:center}
        .ido-comp-table th.hl{color:#f472b6;background:rgba(225,48,108,0.06)}
        .ido-comp-table td{padding:0.9rem 1.25rem;font-size:0.82rem;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary)}
        .ido-comp-table td:not(:first-child){text-align:center}
        .ido-comp-table td.hl{background:rgba(225,48,108,0.04)}
        .ido-comp-table tr:last-child td{border-bottom:none}
        .ido-comp-table tr:hover td{background:rgba(255,255,255,0.02)}
        .ido-yes{color:#4ade80}
        .ido-no{color:#f87171}
        .ido-partial{color:#facc15;font-size:0.75rem}

        /* FOOTER */
        .ido-footer{position:relative;z-index:1;border-top:1px solid var(--border-subtle);padding:1.5rem 2.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
        .ido-footer p{font-size:0.72rem;color:var(--text-muted);font-family:var(--font-display)}
        .ido-footer-links{display:flex;gap:1.5rem}
        .ido-footer-links a{font-size:0.72rem;color:var(--text-muted);text-decoration:none;font-family:var(--font-display);transition:color 0.2s}
        .ido-footer-links a:hover{color:var(--text-secondary)}

        @media(max-width:768px){
          .ido-cap-grid{grid-template-columns:1fr}
          .ido-faq-columns{grid-template-columns:1fr}
          .ido-faq-item{border-right:none}
          .ido-faq-item:nth-last-child(-n+2){border-bottom:1px solid var(--border-subtle)}
          .ido-faq-item:last-child{border-bottom:none}
          .ido-nav-links{display:none}
        }
        @media(max-width:480px){.ido-type-btn span:not(.ido-type-icon){display:none}.ido-h1{font-size:1.8rem}}
      `}</style>

      <div className="ido-root">
        <div className="ido-bg" />

        <nav className="ido-nav">
          <a href="/" className="ido-brand">FreeReelsDownloader</a>
          <div className="ido-nav-links">
            <a href="/instagram-reels-downloader">Reels</a>
            <a href="/instagram-video-downloader">Videos</a>
            <a href="/instagram-stories-downloader">Stories</a>
            <a href="/instagram-photo-downloader">Photos</a>
          </div>
        </nav>

        <section className="ido-hero">
          <div className="ido-badge">🌐 Online — No App Required</div>
          <h1 className="ido-h1"><span className="g">Instagram Downloader</span><br />Online — All Content, Free</h1>
          <p className="ido-desc">Download any Instagram content directly in your browser. Reels, videos, photos, carousels, and Stories — one tool for everything.</p>
          <div className="ido-type-row">
            {[['🎬','Reels'],['📹','Videos'],['📸','Photos'],['📖','Stories'],['🎠','Carousels']].map(([icon,label])=>(
              <div className={`ido-type-btn${label==='Reels'?' active':''}`} key={label}>
                <span className="ido-type-icon">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="ido-tool">
          <div className="ido-card">
            <div className="ido-label">Paste Instagram URL — Any Content Type</div>
            <div className="ido-row">
              <input className="ido-input" type="url" placeholder="https://www.instagram.com/p/ or /reel/ or /stories/..." />
              <button className="ido-btn">Download ↓</button>
            </div>
          </div>
        </div>

        {/* WHAT YOU CAN DOWNLOAD */}
        <div className="ido-section">
          <div className="ido-sh"><span className="ido-stag">Capabilities</span><div className="ido-sline"/></div>
          <h2 className="ido-h2">What You Can Download</h2>
          <p className="ido-sub">All Instagram content types supported from any public account.</p>
          <div className="ido-cap-grid">
            {[
              {icon:'🎬',t:'Instagram Reels',d:'Download any Instagram Reel in full HD MP4. Original quality, no watermark, no overlays. Works for short and long Reels.',tags:['MP4','HD','No Watermark']},
              {icon:'📹',t:'Instagram Videos',d:'Save regular Instagram video posts to your device. Any video posted to someone\'s feed can be downloaded.',tags:['MP4','HD']},
              {icon:'📸',t:'Photos & Carousels',d:'Download single photos or all images from a carousel post at once. Full resolution JPEG files.',tags:['JPG','Full Res','Batch']},
              {icon:'📖',t:'Instagram Stories',d:'Save Stories from any public profile before they expire at 24 hours. Works with both photo and video Stories.',tags:['MP4','JPG','24hr']},
            ].map(c=>(
              <div className="ido-cap" key={c.t}>
                <div className="ido-cap-icon">{c.icon}</div>
                <div className="ido-cap-body">
                  <div className="ido-cap-title">{c.t}</div>
                  <p className="ido-cap-desc">{c.d}</p>
                  <div className="ido-cap-tags">{c.tags.map(t=><span className="ido-cap-tag" key={t}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="ido-section">
          <div className="ido-sh"><span className="ido-stag">Comparison</span><div className="ido-sline"/></div>
          <h2 className="ido-h2">Best Instagram Downloader Online</h2>
          <p className="ido-sub" style={{marginBottom:'1.5rem'}}>How FreeReelsDownloader compares to other tools.</p>
          <div style={{overflowX:'auto'}}>
            <table className="ido-comp-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="hl">FreeReels ★</th>
                  <th>instasave</th>
                  <th>inflact</th>
                  <th>snapinsta</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Reels Download','✓','✓','✓','✓'],
                  ['Stories Download','✓','✗','✓','Partial'],
                  ['Photo Download','✓','✓','✓','✓'],
                  ['Carousel (batch)','✓','Partial','✗','✗'],
                  ['No Watermark','✓','✓','✓','✓'],
                  ['No Ads','✓','✗','✗','✗'],
                  ['Mobile Friendly','✓','Partial','Partial','✓'],
                  ['No Login','✓','✓','✗','✓'],
                  ['Speed','Fast','Medium','Slow','Medium'],
                ].map(([f,...vals])=>(
                  <tr key={f}>
                    <td style={{color:'var(--text-secondary)'}}>{f}</td>
                    {vals.map((v,i)=>{
                      const cls=i===0?'hl':'';
                      const el=v==='✓'?<span className="ido-yes">✓</span>:v==='✗'?<span className="ido-no">✗</span>:v==='Partial'?<span className="ido-partial">Partial</span>:<span style={{fontSize:'0.8rem',color:'var(--text-secondary)'}}>{v}</span>;
                      return <td key={i} className={cls}>{el}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="ido-section">
          <div className="ido-sh"><span className="ido-stag">FAQ</span><div className="ido-sline"/></div>
          <h2 className="ido-h2">Instagram Downloader FAQ</h2>
          <p className="ido-sub" style={{marginBottom:'1.5rem'}}>Every common question answered.</p>
          <div className="ido-faq-columns">
            {[
              {q:'Is this Instagram downloader completely free?',a:'Yes. No sign-up, no paid tier, no download limits. 100% free for all content types.'},
              {q:'Do I need to create an account?',a:'No account required. Just paste the Instagram URL and click download — anonymous and instant.'},
              {q:'Can I download from private Instagram accounts?',a:'No. Only public Instagram profiles and posts are supported to protect user privacy.'},
              {q:'What is the maximum video quality I can download?',a:'Up to 1080p HD for Reels and videos, original resolution for photos and carousels.'},
              {q:'Does it work on iPhone (iOS)?',a:'Yes. Use Safari on iPhone. After downloading, the file saves to Files app or Camera Roll.'},
              {q:'Does it work on Android?',a:'Yes. Use Chrome on Android. Downloaded files go directly to your Downloads folder.'},
              {q:'Can I batch download multiple posts?',a:'Carousel posts can be batch-downloaded. Individual posts require separate downloads one at a time.'},
              {q:'Will downloaded videos have a watermark?',a:'No. We download the original source file directly — no watermark is ever added by our tool.'},
              {q:'How long does download take?',a:'Usually 2–5 seconds. Larger video files or slow connections may take up to 30 seconds.'},
              {q:'Is it safe to use?',a:'Yes. We use HTTPS encryption and never ask for your Instagram login or store any of your data.'},
            ].map(f=>(
              <div className="ido-faq-item" key={f.q}>
                <div className="ido-faq-q">{f.q}</div>
                <p className="ido-faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="ido-footer">
          <p>© 2025 FreeReelsDownloader.com — Not affiliated with Instagram or Meta Platforms, Inc.</p>
          <div className="ido-footer-links">
            <a href="/instagram-reels-downloader">Reels</a>
            <a href="/instagram-video-downloader">Videos</a>
            <a href="/instagram-stories-downloader">Stories</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InstagramDownloaderOnline;