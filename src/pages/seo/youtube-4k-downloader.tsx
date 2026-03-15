import { Helmet } from "react-helmet";

const Youtube4KDownloader = () => {
  return (
    <>
      <Helmet>
        <title>YouTube 4K Downloader – Download YouTube Videos in 4K Ultra HD Free</title>
        <meta name="description" content="Download YouTube videos in 4K Ultra HD, 1440p, 1080p and more. Free online YouTube 4K downloader — no software, no watermark, works on all devices." />
        <meta name="keywords" content="youtube 4k downloader, download youtube 4k video, youtube ultra hd downloader, 4k youtube video download, youtube 2160p downloader" />
        <link rel="canonical" href="https://freereelsdownloader.com/youtube-4k-downloader" />
        <meta property="og:title" content="YouTube 4K Downloader – Free Ultra HD Video Download" />
        <meta property="og:description" content="Download YouTube videos in 4K, 1440p, 1080p and more. Fast, free, no login." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebApplication",
          "name":"YouTube 4K Downloader",
          "url":"https://freereelsdownloader.com/youtube-4k-downloader",
          "description":"Download YouTube videos in 4K Ultra HD quality for free",
          "applicationCategory":"UtilitiesApplication",
          "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        :root{
          --grad-fusion:linear-gradient(135deg,#833AB4 0%,#E1306C 30%,#FF0000 60%,#F77737 100%);
          --grad-text:linear-gradient(90deg,#FCAF45,#E1306C,#FF0000,#833AB4);
          --yt-red:#FF0000;
          --bg-void:#060810; --bg-card:rgba(255,255,255,0.055);
          --border-subtle:rgba(255,255,255,0.08);
          --text-primary:#F5F0FF; --text-secondary:rgba(245,240,255,0.55);
          --text-muted:rgba(245,240,255,0.3);
          --font-display:'Syne',sans-serif; --font-body:'DM Sans',sans-serif;
        }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        body{font-family:var(--font-body);background:var(--bg-void);color:var(--text-primary);-webkit-font-smoothing:antialiased}

        .y4k-root{min-height:100vh;background:var(--bg-void);overflow-x:hidden;position:relative}
        .y4k-bg{position:fixed;inset:0;pointer-events:none;z-index:0;
          background:radial-gradient(ellipse 70% 50% at 15% 0%,rgba(255,0,0,0.12) 0%,transparent 60%),
          radial-gradient(ellipse 50% 60% at 85% 100%,rgba(131,58,180,0.15) 0%,transparent 60%)}

        /* NAV */
        .y4k-nav{position:sticky;top:0;z-index:20;background:rgba(6,8,16,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--border-subtle);padding:1rem 2.5rem;display:flex;justify-content:space-between;align-items:center}
        .y4k-logo{font-family:var(--font-display);font-weight:800;font-size:1rem;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-decoration:none}
        .y4k-nav-links{display:flex;gap:1.5rem}
        .y4k-nav-links a{color:var(--text-muted);text-decoration:none;font-size:0.8rem;font-family:var(--font-display);font-weight:600;transition:color 0.2s}
        .y4k-nav-links a:hover{color:var(--text-primary)}

        /* HERO */
        .y4k-hero{position:relative;z-index:1;text-align:center;padding:5rem 2rem 2rem}
        .y4k-hero-chip{display:inline-flex;align-items:center;gap:8px;padding:6px 18px;border-radius:99px;background:rgba(255,0,0,0.1);border:1px solid rgba(255,0,0,0.3);font-family:var(--font-display);font-size:0.7rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#ff5555;margin-bottom:1.5rem}
        .y4k-hero-chip-icon{width:6px;height:6px;border-radius:50%;background:#FF0000;box-shadow:0 0 8px #FF0000}
        .y4k-h1{font-family:var(--font-display);font-size:clamp(2rem,5vw,4.5rem);font-weight:800;line-height:1.05;letter-spacing:-0.03em;margin-bottom:1.25rem}
        .y4k-h1 .accent{background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .y4k-hero-desc{font-size:1rem;color:var(--text-secondary);max-width:52ch;margin:0 auto 2.5rem;line-height:1.7;font-weight:300}

        /* TOOL */
        .y4k-tool-wrap{position:relative;z-index:1;max-width:640px;margin:0 auto;padding:0 1.5rem 4rem}
        .y4k-tool-card{background:rgba(18,14,28,0.85);border:1px solid var(--border-subtle);border-radius:22px;padding:2rem;backdrop-filter:blur(24px);box-shadow:0 32px 80px rgba(0,0,0,0.6),0 0 40px rgba(255,0,0,0.08)}
        .y4k-tool-card-inner{position:relative}
        .y4k-tool-card-inner::before{content:'';position:absolute;inset:0;border-radius:22px;padding:1px;background:var(--grad-fusion);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0.35;pointer-events:none}
        .y4k-tl{font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.75rem}
        .y4k-input-row{display:flex;gap:8px;margin-bottom:1.25rem;flex-wrap:wrap}
        .y4k-input{flex:1;min-width:180px;background:rgba(255,255,255,0.05);border:1px solid var(--border-subtle);border-radius:12px;padding:0.85rem 1rem;color:var(--text-primary);font-family:var(--font-body);font-size:0.9rem;outline:none;transition:border-color 0.3s}
        .y4k-input:focus{border-color:rgba(255,0,0,0.4)}
        .y4k-input::placeholder{color:var(--text-muted)}
        .y4k-dl-btn{background:var(--grad-fusion);border:none;border-radius:12px;padding:0.85rem 1.5rem;color:#fff;font-family:var(--font-display);font-weight:700;font-size:0.85rem;letter-spacing:0.06em;cursor:pointer;box-shadow:0 4px 24px rgba(255,0,0,0.35);transition:all 0.2s;white-space:nowrap}
        .y4k-dl-btn:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(255,0,0,0.5)}

        /* Quality selector grid */
        .y4k-quality-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
        .y4k-qual{padding:0.6rem 0.5rem;border-radius:10px;border:1px solid var(--border-subtle);background:rgba(255,255,255,0.04);text-align:center;cursor:pointer;transition:all 0.2s}
        .y4k-qual.featured{border-color:rgba(255,0,0,0.4);background:rgba(255,0,0,0.1)}
        .y4k-qual:hover{border-color:rgba(255,255,255,0.15);background:rgba(255,255,255,0.08)}
        .y4k-qual-badge{display:block;font-family:var(--font-display);font-size:0.72rem;font-weight:700;margin-bottom:2px}
        .y4k-qual.featured .y4k-qual-badge{color:#ff5555}
        .y4k-qual-label{font-size:0.64rem;color:var(--text-muted);font-family:var(--font-display);text-transform:uppercase;letter-spacing:0.06em}
        .y4k-qual.featured .y4k-qual-label{color:rgba(255,85,85,0.7)}

        /* COMPARISON TABLE */
        .y4k-section{position:relative;z-index:1;max-width:1000px;margin:0 auto;padding:0 2rem 5rem}
        .y4k-section-head{margin-bottom:2rem;text-align:center}
        .y4k-section-tag{font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#ff5555;display:block;margin-bottom:0.5rem}
        .y4k-section-h2{font-family:var(--font-display);font-size:clamp(1.5rem,3vw,2.2rem);font-weight:800;letter-spacing:-0.02em;margin-bottom:0.4rem}
        .y4k-section-sub{font-size:0.9rem;color:var(--text-secondary);font-weight:300}

        /* Main comparison table */
        .y4k-table-wrap{background:rgba(18,14,28,0.7);border:1px solid var(--border-subtle);border-radius:20px;overflow:hidden;backdrop-filter:blur(16px);box-shadow:0 24px 60px rgba(0,0,0,0.5)}
        .y4k-table{width:100%;border-collapse:collapse}
        .y4k-table th{padding:1rem 1.25rem;font-family:var(--font-display);font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);background:rgba(255,255,255,0.03);text-align:left;border-bottom:1px solid var(--border-subtle)}
        .y4k-table th:not(:first-child){text-align:center}
        .y4k-table th.highlight{color:#ff5555;background:rgba(255,0,0,0.06)}
        .y4k-table td{padding:1rem 1.25rem;font-size:0.85rem;border-bottom:1px solid rgba(255,255,255,0.04);vertical-align:middle}
        .y4k-table td:not(:first-child){text-align:center}
        .y4k-table td.highlight-col{background:rgba(255,0,0,0.04)}
        .y4k-table tr:last-child td{border-bottom:none}
        .y4k-table tr:hover td{background:rgba(255,255,255,0.03)}
        .y4k-feature-name{color:var(--text-secondary);font-weight:400}
        .y4k-check{color:#4ade80;font-size:1rem}
        .y4k-cross{color:#f87171;font-size:1rem}
        .y4k-partial{color:#facc15;font-size:0.85rem}
        .y4k-table-note{font-size:0.75rem;color:var(--text-muted);margin-top:1rem;text-align:center;font-style:italic}

        /* Resolution comparison */
        .y4k-res-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:2.5rem}
        .y4k-res-card{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:14px;padding:1.25rem;text-align:center;position:relative;overflow:hidden;transition:all 0.3s}
        .y4k-res-card:hover{transform:translateY(-4px);background:rgba(255,255,255,0.08)}
        .y4k-res-card.top{border-color:rgba(255,0,0,0.35);background:rgba(255,0,0,0.07)}
        .y4k-res-card.top::before{content:'BEST';position:absolute;top:8px;right:8px;font-family:var(--font-display);font-size:0.55rem;font-weight:700;letter-spacing:0.1em;padding:2px 6px;border-radius:4px;background:rgba(255,0,0,0.3);color:#ff5555}
        .y4k-res-label{font-family:var(--font-display);font-size:1.1rem;font-weight:800;margin-bottom:0.3rem}
        .y4k-res-card.top .y4k-res-label{background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .y4k-res-px{font-size:0.7rem;color:var(--text-muted);margin-bottom:0.5rem;font-family:var(--font-display)}
        .y4k-res-desc{font-size:0.75rem;color:var(--text-secondary);line-height:1.5}

        /* Device compatibility */
        .y4k-devices-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:2.5rem}
        .y4k-device{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:14px;padding:1.25rem;text-align:center;transition:all 0.3s}
        .y4k-device:hover{transform:translateY(-4px);background:rgba(255,255,255,0.08)}
        .y4k-device-icon{font-size:2rem;margin-bottom:0.75rem}
        .y4k-device-name{font-family:var(--font-display);font-size:0.85rem;font-weight:700;margin-bottom:0.3rem}
        .y4k-device-desc{font-size:0.75rem;color:var(--text-secondary);line-height:1.5}

        /* FAQ */
        .y4k-faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .y4k-faq-item{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:14px;padding:1.25rem}
        .y4k-faq-q{font-family:var(--font-display);font-size:0.88rem;font-weight:700;margin-bottom:0.6rem;color:var(--text-primary)}
        .y4k-faq-a{font-size:0.8rem;color:var(--text-secondary);line-height:1.7;font-weight:300}

        /* FOOTER */
        .y4k-footer{position:relative;z-index:1;border-top:1px solid var(--border-subtle);padding:1.5rem 2.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
        .y4k-footer p{font-size:0.72rem;color:var(--text-muted);font-family:var(--font-display)}
        .y4k-footer-links{display:flex;gap:1.5rem}
        .y4k-footer-links a{font-size:0.72rem;color:var(--text-muted);text-decoration:none;font-family:var(--font-display);transition:color 0.2s}
        .y4k-footer-links a:hover{color:var(--text-secondary)}

        @media(max-width:768px){
          .y4k-quality-grid{grid-template-columns:repeat(3,1fr)}
          .y4k-res-grid{grid-template-columns:repeat(3,1fr)}
          .y4k-devices-grid{grid-template-columns:repeat(2,1fr)}
          .y4k-faq-grid{grid-template-columns:1fr}
          .y4k-nav-links{display:none}
        }
        @media(max-width:480px){
          .y4k-quality-grid,.y4k-res-grid{grid-template-columns:repeat(2,1fr)}
          .y4k-h1{font-size:2rem}
          .y4k-table{font-size:0.78rem}
        }
      `}</style>

      <div className="y4k-root">
        <div className="y4k-bg" />

        <nav className="y4k-nav">
          <a href="/" className="y4k-logo">FreeReelsDownloader</a>
          <div className="y4k-nav-links">
            <a href="/youtube-video-downloader">YT Downloader</a>
            <a href="/youtube-hd-downloader">HD Downloader</a>
            <a href="/youtube-to-mp4">YT to MP4</a>
            <a href="/youtube-to-mp3">YT to MP3</a>
          </div>
        </nav>

        <section className="y4k-hero">
          <div className="y4k-hero-chip"><span className="y4k-hero-chip-icon" />YouTube 4K Ultra HD</div>
          <h1 className="y4k-h1">Download YouTube Videos<br />in <span className="accent">4K Ultra HD</span> — Free</h1>
          <p className="y4k-hero-desc">The most powerful free YouTube 4K downloader. Save any video in 2160p, 1440p, 1080p or lower — no software, no watermark, no subscription.</p>
        </section>

        <div className="y4k-tool-wrap">
          <div className="y4k-tool-card">
            <div className="y4k-tool-card-inner" style={{position:'relative'}}>
              <div className="y4k-tl">Paste YouTube URL</div>
              <div className="y4k-input-row">
                <input className="y4k-input" type="url" placeholder="https://www.youtube.com/watch?v=..." />
                <button className="y4k-dl-btn">Download ↓</button>
              </div>
              <div className="y4k-tl" style={{marginBottom:'0.65rem'}}>Select Quality</div>
              <div className="y4k-quality-grid">
                {[{l:'4K',s:'2160p',f:true},{l:'1440p',s:'QHD',f:false},{l:'1080p',s:'Full HD',f:false},{l:'720p',s:'HD',f:false},{l:'MP3',s:'Audio',f:false}].map(q=>(
                  <div className={`y4k-qual${q.f?' featured':''}`} key={q.l}>
                    <span className="y4k-qual-badge">{q.l}</span>
                    <span className="y4k-qual-label">{q.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="y4k-section">
          <div className="y4k-section-head">
            <span className="y4k-section-tag">Comparison</span>
            <h2 className="y4k-section-h2">How We Compare to Other Downloaders</h2>
            <p className="y4k-section-sub">See why FreeReelsDownloader is the best choice for YouTube 4K downloads.</p>
          </div>
          <div className="y4k-table-wrap">
            <table className="y4k-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight">FreeReels ★</th>
                  <th>y2mate</th>
                  <th>savefrom</th>
                  <th>yt-dlp (CLI)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['4K / 2160p Download','✓','✗','✗','✓'],
                  ['No Software Install','✓','✓','✓','✗'],
                  ['No Watermark','✓','✓','✓','✓'],
                  ['MP3 Audio Extraction','✓','✓','✓','✓'],
                  ['Playlist Download','✓','✗','Partial','✓'],
                  ['Mobile Friendly','✓','Partial','Partial','✗'],
                  ['No Ads','✓','✗','✗','✓'],
                  ['Completely Free','✓','✓','✓','✓'],
                  ['No Login Required','✓','✓','✓','✓'],
                  ['Speed','Fast','Medium','Slow','Fast'],
                ].map(([feature,...vals])=>(
                  <tr key={feature}>
                    <td><span className="y4k-feature-name">{feature}</span></td>
                    {vals.map((v,i)=>{
                      const cls = i===0 ? 'highlight-col' : '';
                      const content = v==='✓' ? <span className="y4k-check">✓</span> : v==='✗' ? <span className="y4k-cross">✗</span> : v==='Partial' ? <span className="y4k-partial">~ Partial</span> : <span style={{color:'var(--text-secondary)',fontSize:'0.82rem'}}>{v}</span>;
                      return <td key={i} className={cls}>{content}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="y4k-table-note">* Comparison based on publicly available features as of 2025. Results may vary by video.</p>
        </div>

        {/* RESOLUTION GUIDE */}
        <div className="y4k-section">
          <div className="y4k-section-head">
            <span className="y4k-section-tag">Resolution Guide</span>
            <h2 className="y4k-section-h2">Which Quality Should You Download?</h2>
            <p className="y4k-section-sub">Choose the right resolution for your screen and storage needs.</p>
          </div>
          <div className="y4k-res-grid">
            {[
              {l:'4K',px:'3840×2160',d:'Best for 4K TVs and monitors. Largest file size.',top:true},
              {l:'1440p',px:'2560×1440',d:'Great for QHD monitors and modern laptops.',top:false},
              {l:'1080p',px:'1920×1080',d:'Perfect balance of quality and file size for most devices.',top:false},
              {l:'720p',px:'1280×720',d:'Good for mobile viewing and slower connections.',top:false},
              {l:'480p',px:'854×480',d:'Smallest file size. Best for storage-limited devices.',top:false},
            ].map(r=>(
              <div className={`y4k-res-card${r.top?' top':''}`} key={r.l}>
                <div className="y4k-res-label">{r.l}</div>
                <div className="y4k-res-px">{r.px}</div>
                <p className="y4k-res-desc">{r.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DEVICE COMPATIBILITY */}
        <div className="y4k-section">
          <div className="y4k-section-head">
            <span className="y4k-section-tag">Compatibility</span>
            <h2 className="y4k-section-h2">Works on Every Device</h2>
          </div>
          <div className="y4k-devices-grid">
            {[
              {icon:'💻',name:'Windows PC',desc:'Works in Chrome, Firefox, and Edge. Files save to Downloads folder.'},
              {icon:'🍎',name:'Mac',desc:'Full support in Safari, Chrome. Files save to Downloads.'},
              {icon:'📱',name:'iPhone / iOS',desc:'Use Safari. 4K files save to Files app or iCloud Drive.'},
              {icon:'🤖',name:'Android',desc:'Works in Chrome. Files download directly to Downloads folder.'},
            ].map(d=>(
              <div className="y4k-device" key={d.name}>
                <div className="y4k-device-icon">{d.icon}</div>
                <div className="y4k-device-name">{d.name}</div>
                <p className="y4k-device-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="y4k-section">
          <div className="y4k-section-head">
            <span className="y4k-section-tag">FAQ</span>
            <h2 className="y4k-section-h2">YouTube 4K Download FAQ</h2>
          </div>
          <div className="y4k-faq-grid">
            {[
              {q:'Why is the 4K option not available for some videos?',a:'Not all YouTube videos are uploaded in 4K. If the original video was uploaded in a lower resolution, 4K will not be available as a download option.'},
              {q:'How large is a 4K YouTube video file?',a:'A 4K video at 60fps is typically 1–4 GB per hour depending on compression. 1080p is roughly 300–800 MB per hour.'},
              {q:'Can I download 4K YouTube videos on my phone?',a:'Yes, but playback depends on your device\'s screen resolution. iPhones from XS onwards and most Android flagships support 4K playback.'},
              {q:'Is downloading YouTube videos in 4K free?',a:'Yes — our YouTube 4K downloader is 100% free with no download limits, no subscriptions, and no hidden costs.'},
              {q:'Will the 4K video have a watermark?',a:'No. Downloaded videos are clean original files with absolutely no watermark or branding added by our tool.'},
              {q:'Does downloading YouTube videos violate copyright?',a:'Downloading for personal offline viewing is generally tolerated. Redistribution or commercial use of downloaded content violates YouTube\'s Terms of Service and copyright law.'},
            ].map(f=>(
              <div className="y4k-faq-item" key={f.q}>
                <div className="y4k-faq-q">{f.q}</div>
                <p className="y4k-faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="y4k-footer">
          <p>© 2025 FreeReelsDownloader.com — Not affiliated with YouTube or Google LLC.</p>
          <div className="y4k-footer-links">
            <a href="/youtube-video-downloader">YouTube Downloader</a>
            <a href="/youtube-hd-downloader">HD Downloader</a>
            <a href="/youtube-to-mp4">YT to MP4</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Youtube4KDownloader;