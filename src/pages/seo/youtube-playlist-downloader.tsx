import { Helmet } from "react-helmet";

const YoutubePlaylistDownloader = () => {
  return (
    <>
      <Helmet>
        <title>YouTube Playlist Downloader – Download Full Playlists Free</title>
        <meta name="description" content="Download entire YouTube playlists at once. Save all videos in MP4 or extract MP3 audio from any YouTube playlist. Free, fast, no login required." />
        <meta name="keywords" content="youtube playlist downloader, download youtube playlist, youtube playlist to mp4, save youtube playlist, bulk youtube downloader" />
        <link rel="canonical" href="https://freereelsdownloader.com/youtube-playlist-downloader" />
        <meta property="og:title" content="YouTube Playlist Downloader – Free Bulk Download" />
        <meta property="og:description" content="Download complete YouTube playlists in MP4 or MP3. Fast, free, no watermark." />
        <meta property="og:url" content="https://freereelsdownloader.com/youtube-playlist-downloader" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "YouTube Playlist Downloader",
          "url": "https://freereelsdownloader.com/youtube-playlist-downloader",
          "description": "Download full YouTube playlists in MP4 or MP3 format for free",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        :root {
          --ig-magenta:#E1306C; --ig-orange:#F77737; --ig-yellow:#FCAF45;
          --ig-purple:#833AB4; --yt-red:#FF0000;
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

        .ypd-root{min-height:100vh;background:var(--bg-void);position:relative;overflow-x:hidden}
        .ypd-glow-1{position:fixed;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(131,58,180,0.18),transparent 70%);top:-200px;left:-200px;pointer-events:none;z-index:0}
        .ypd-glow-2{position:fixed;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(255,0,0,0.12),transparent 70%);bottom:-100px;right:-100px;pointer-events:none;z-index:0}

        /* NAV */
        .ypd-nav{position:relative;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:1.2rem 2.5rem;border-bottom:1px solid var(--border-subtle);backdrop-filter:blur(20px)}
        .ypd-nav-logo{font-family:var(--font-display);font-weight:800;font-size:1.1rem;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .ypd-nav-links{display:flex;gap:1.5rem}
        .ypd-nav-links a{color:var(--text-secondary);text-decoration:none;font-size:0.82rem;font-family:var(--font-display);font-weight:600;letter-spacing:0.04em;transition:color 0.2s}
        .ypd-nav-links a:hover{color:var(--text-primary)}

        /* HERO */
        .ypd-hero{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;text-align:center;padding:5rem 2rem 3rem}
        .ypd-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:99px;background:rgba(255,0,0,0.1);border:1px solid rgba(255,0,0,0.25);font-family:var(--font-display);font-size:0.7rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#ff5555;margin-bottom:1.5rem}
        .ypd-badge-dot{width:6px;height:6px;border-radius:50%;background:#FF0000;animation:blink 1.5s ease-in-out infinite}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
        .ypd-h1{font-family:var(--font-display);font-size:clamp(2.2rem,5vw,4rem);font-weight:800;line-height:1.1;letter-spacing:-0.03em;margin-bottom:1.25rem}
        .ypd-h1 span{background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .ypd-desc{font-size:1.05rem;color:var(--text-secondary);line-height:1.7;max-width:50ch;margin-bottom:3rem;font-weight:300}

        /* TOOL CARD */
        .ypd-tool{position:relative;z-index:1;max-width:680px;margin:0 auto;padding:0 1.5rem 4rem}
        .ypd-card{background:rgba(18,14,28,0.8);border:1px solid var(--border-subtle);border-radius:24px;padding:2rem;backdrop-filter:blur(24px);box-shadow:0 32px 80px rgba(0,0,0,0.6),0 0 60px rgba(131,58,180,0.1)}
        .ypd-card::before{content:'';position:absolute;inset:0;border-radius:24px;padding:1px;background:var(--grad-fusion);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0.4;pointer-events:none}
        .ypd-card-label{font-family:var(--font-display);font-size:0.7rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.75rem}
        .ypd-input-row{display:flex;gap:0.5rem;margin-bottom:1rem;flex-wrap:wrap}
        .ypd-input{flex:1;min-width:200px;background:rgba(255,255,255,0.05);border:1px solid var(--border-subtle);border-radius:12px;padding:0.85rem 1.1rem;color:var(--text-primary);font-family:var(--font-body);font-size:0.92rem;outline:none;transition:border-color 0.3s,box-shadow 0.3s}
        .ypd-input:focus{border-color:rgba(225,48,108,0.5);box-shadow:0 0 0 3px rgba(225,48,108,0.1)}
        .ypd-input::placeholder{color:var(--text-muted)}
        .ypd-btn{background:var(--grad-fusion);border:none;border-radius:12px;padding:0.85rem 1.75rem;color:#fff;font-family:var(--font-display);font-weight:700;font-size:0.88rem;letter-spacing:0.06em;cursor:pointer;box-shadow:0 4px 24px rgba(225,48,108,0.4);transition:all 0.2s;white-space:nowrap}
        .ypd-btn:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(225,48,108,0.55)}

        .ypd-format-row{display:flex;gap:0.5rem;flex-wrap:wrap}
        .ypd-format-chip{display:flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;border:1px solid var(--border-subtle);background:rgba(255,255,255,0.04);font-family:var(--font-display);font-size:0.72rem;font-weight:600;color:var(--text-secondary);cursor:pointer;transition:all 0.2s}
        .ypd-format-chip.active{background:rgba(255,0,0,0.12);border-color:rgba(255,0,0,0.3);color:#ff6666}
        .ypd-format-chip:hover{background:rgba(255,255,255,0.08)}
        .ypd-chip-dot{width:5px;height:5px;border-radius:50%;background:currentColor}

        /* STATS ROW */
        .ypd-stats{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border-subtle);max-width:680px;margin:0 auto 4rem;border-radius:16px;overflow:hidden}
        .ypd-stat{background:var(--bg-void);padding:1.25rem;text-align:center}
        .ypd-stat-val{font-family:var(--font-display);font-size:1.6rem;font-weight:800;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:0.2rem}
        .ypd-stat-lbl{font-size:0.7rem;color:var(--text-muted);letter-spacing:0.08em;text-transform:uppercase}

        /* FEATURES */
        .ypd-section{position:relative;z-index:1;max-width:900px;margin:0 auto;padding:0 1.5rem 5rem}
        .ypd-section-head{display:flex;align-items:center;gap:1rem;margin-bottom:2.5rem}
        .ypd-section-tag{font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--ig-magenta)}
        .ypd-section-line{flex:1;height:1px;background:var(--border-subtle)}
        .ypd-section-h2{font-family:var(--font-display);font-size:clamp(1.5rem,3vw,2.2rem);font-weight:800;letter-spacing:-0.02em;margin-bottom:0.5rem}
        .ypd-section-sub{font-size:0.92rem;color:var(--text-secondary);font-weight:300}

        .ypd-features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .ypd-feat{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:16px;padding:1.5rem;transition:all 0.3s}
        .ypd-feat:hover{background:rgba(255,255,255,0.08);transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.4)}
        .ypd-feat-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:1rem}
        .ypd-feat-icon-yt{background:rgba(255,0,0,0.12);border:1px solid rgba(255,0,0,0.2)}
        .ypd-feat-icon-ig{background:rgba(225,48,108,0.12);border:1px solid rgba(225,48,108,0.2)}
        .ypd-feat-title{font-family:var(--font-display);font-size:0.95rem;font-weight:700;margin-bottom:0.5rem}
        .ypd-feat-desc{font-size:0.82rem;color:var(--text-secondary);line-height:1.65;font-weight:300}

        /* HOW TO */
        .ypd-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;position:relative}
        .ypd-steps::before{content:'';position:absolute;top:28px;left:calc(12.5% + 22px);right:calc(12.5% + 22px);height:1px;background:linear-gradient(90deg,rgba(131,58,180,0.4),rgba(255,0,0,0.4));z-index:0}
        .ypd-step{text-align:center;position:relative;z-index:1}
        .ypd-step-circle{width:56px;height:56px;border-radius:50%;background:var(--grad-fusion);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-family:var(--font-display);font-size:1.1rem;font-weight:800;color:#fff;box-shadow:0 0 24px rgba(225,48,108,0.4)}
        .ypd-step-title{font-family:var(--font-display);font-size:0.88rem;font-weight:700;margin-bottom:0.4rem}
        .ypd-step-desc{font-size:0.78rem;color:var(--text-secondary);line-height:1.6;font-weight:300}

        /* FAQ */
        .ypd-faq{display:flex;flex-direction:column;gap:8px}
        .ypd-faq-item{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:14px;overflow:hidden}
        .ypd-faq-q{padding:1.1rem 1.25rem;font-family:var(--font-display);font-size:0.9rem;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:background 0.2s}
        .ypd-faq-q:hover{background:rgba(255,255,255,0.04)}
        .ypd-faq-q-arrow{font-size:0.8rem;color:var(--text-muted)}
        .ypd-faq-a{padding:0 1.25rem 1.1rem;font-size:0.83rem;color:var(--text-secondary);line-height:1.7;font-weight:300}

        /* FOOTER */
        .ypd-footer{position:relative;z-index:1;border-top:1px solid var(--border-subtle);padding:1.5rem 2.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
        .ypd-footer p{font-size:0.72rem;color:var(--text-muted);font-family:var(--font-display);letter-spacing:0.04em}
        .ypd-footer-links{display:flex;gap:1.5rem}
        .ypd-footer-links a{font-size:0.72rem;color:var(--text-muted);text-decoration:none;font-family:var(--font-display);transition:color 0.2s}
        .ypd-footer-links a:hover{color:var(--text-secondary)}

        @media(max-width:768px){
          .ypd-features-grid,.ypd-steps{grid-template-columns:1fr 1fr}
          .ypd-stats{grid-template-columns:repeat(2,1fr)}
          .ypd-steps::before{display:none}
          .ypd-nav-links{display:none}
        }
        @media(max-width:480px){
          .ypd-features-grid,.ypd-steps,.ypd-stats{grid-template-columns:1fr}
          .ypd-h1{font-size:2rem}
        }
      `}</style>

      <div className="ypd-root">
        <div className="ypd-glow-1" />
        <div className="ypd-glow-2" />

        <nav className="ypd-nav">
          <a href="/" className="ypd-nav-logo">FreeReelsDownloader</a>
          <div className="ypd-nav-links">
            <a href="/youtube-video-downloader">YT Downloader</a>
            <a href="/youtube-to-mp3">YT to MP3</a>
            <a href="/instagram-reels-downloader">Instagram</a>
          </div>
        </nav>

        <section className="ypd-hero">
          <div className="ypd-badge"><span className="ypd-badge-dot" />YouTube Playlist Tool</div>
          <h1 className="ypd-h1">Download Any <span>YouTube Playlist</span><br />in One Click</h1>
          <p className="ypd-desc">Save entire YouTube playlists to MP4 or MP3 instantly. No software, no sign-up — just paste the playlist URL and download all videos free.</p>
        </section>

        <div className="ypd-tool">
          <div className="ypd-card" style={{position:'relative'}}>
            <div className="ypd-card-label">Paste YouTube Playlist or Video URL</div>
            <div className="ypd-input-row">
              <input className="ypd-input" type="url" placeholder="https://www.youtube.com/playlist?list=..." />
              <button className="ypd-btn">Download ↓</button>
            </div>
            <div className="ypd-card-label" style={{marginBottom:'0.5rem'}}>Select Format</div>
            <div className="ypd-format-row">
              {['MP4 · 1080p','MP4 · 720p','MP4 · 480p','MP3 · Audio','WebM'].map((f,i)=>(
                <div className={`ypd-format-chip${i===0?' active':''}`} key={f}>
                  <span className="ypd-chip-dot"/>{f}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ypd-stats" style={{padding:'0 1.5rem'}}>
          {[['∞','Playlist Size'],['4K','Max Quality'],['0','Watermarks'],['Free','Forever']].map(([v,l])=>(
            <div className="ypd-stat" key={l}><div className="ypd-stat-val">{v}</div><div className="ypd-stat-lbl">{l}</div></div>
          ))}
        </div>

        <div className="ypd-section">
          <div className="ypd-section-head">
            <span className="ypd-section-tag">How It Works</span>
            <div className="ypd-section-line"/>
          </div>
          <h2 className="ypd-section-h2">Download a YouTube Playlist in 4 Steps</h2>
          <p className="ypd-section-sub" style={{marginBottom:'2.5rem'}}>No technical knowledge needed — works on any device.</p>
          <div className="ypd-steps">
            {[
              {n:'1',t:'Open YouTube',d:'Go to any playlist or video on YouTube.com or the mobile app.'},
              {n:'2',t:'Copy the URL',d:'Click the address bar or tap Share → Copy Link on mobile.'},
              {n:'3',t:'Paste the Link',d:'Paste the YouTube playlist URL into the input field above.'},
              {n:'4',t:'Save Videos',d:'Choose your format and quality, then download all files instantly.'},
            ].map(s=>(
              <div className="ypd-step" key={s.n}>
                <div className="ypd-step-circle">{s.n}</div>
                <div className="ypd-step-title">{s.t}</div>
                <p className="ypd-step-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ypd-section">
          <div className="ypd-section-head">
            <span className="ypd-section-tag">Features</span>
            <div className="ypd-section-line"/>
          </div>
          <h2 className="ypd-section-h2">Why Our YouTube Playlist Downloader?</h2>
          <p className="ypd-section-sub" style={{marginBottom:'2.5rem'}}>Built for speed, quality, and simplicity.</p>
          <div className="ypd-features-grid">
            {[
              {icon:'🎬',cls:'ypd-feat-icon-yt',t:'Full Playlist Download',d:'Download every video in a playlist at once instead of one by one. Saves hours of manual effort.'},
              {icon:'🔊',cls:'ypd-feat-icon-ig',t:'MP3 Audio Extraction',d:'Extract audio from any YouTube playlist. Perfect for music, podcasts, and lectures.'},
              {icon:'⚡',cls:'ypd-feat-icon-yt',t:'Lightning Fast',d:'Our servers process playlist downloads in seconds, not minutes. No queue, no waiting.'},
              {icon:'📱',cls:'ypd-feat-icon-ig',t:'Mobile Friendly',d:'Works perfectly on iPhone, Android, iPad, or any desktop browser with no app install.'},
              {icon:'🔒',cls:'ypd-feat-icon-yt',t:'Zero Data Stored',d:'We never save your links or downloaded files. Everything goes directly to your device.'},
              {icon:'🆓',cls:'ypd-feat-icon-ig',t:'Completely Free',d:'No subscriptions, no limits, no hidden costs. Download as many playlists as you want.'},
            ].map(f=>(
              <div className="ypd-feat" key={f.t}>
                <div className={`ypd-feat-icon ${f.cls}`}>{f.icon}</div>
                <div className="ypd-feat-title">{f.t}</div>
                <p className="ypd-feat-desc">{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ypd-section">
          <div className="ypd-section-head">
            <span className="ypd-section-tag">FAQ</span>
            <div className="ypd-section-line"/>
          </div>
          <h2 className="ypd-section-h2">Frequently Asked Questions</h2>
          <p className="ypd-section-sub" style={{marginBottom:'2rem'}}>Everything you need to know about downloading YouTube playlists.</p>
          <div className="ypd-faq">
            {[
              {q:'Can I download a private YouTube playlist?',a:'No — only public playlists are supported. Private or unlisted playlists require login access which we do not collect.'},
              {q:'What video quality formats are available?',a:'We support up to 4K (2160p), 1080p, 720p, 480p, and 360p for MP4. Audio can be extracted as MP3 at 128kbps or 320kbps.'},
              {q:'Is there a limit to the playlist size?',a:'There is no hard limit. However, very large playlists (500+ videos) may take longer to process. We recommend batching large playlists.'},
              {q:'Does it work on iPhone and Android?',a:'Yes. Our downloader is fully mobile-optimized. On iOS, use the Files app to manage downloads. On Android, files save directly to your Downloads folder.'},
              {q:'Is it safe to use this YouTube playlist downloader?',a:'Completely safe. We use HTTPS encryption, never ask for your Google account, and do not install anything on your device.'},
              {q:'Can I download just the audio from a YouTube playlist?',a:'Yes! Select the MP3 format option before downloading. This extracts audio-only from all videos in the playlist.'},
            ].map(f=>(
              <div className="ypd-faq-item" key={f.q}>
                <div className="ypd-faq-q">{f.q}<span className="ypd-faq-q-arrow">▾</span></div>
                <p className="ypd-faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="ypd-footer">
          <p>© 2025 FreeReelsDownloader.com — YouTube Playlist Downloader</p>
          <div className="ypd-footer-links">
            <a href="/">Home</a>
            <a href="/youtube-video-downloader">YouTube Downloader</a>
            <a href="/youtube-to-mp3">YouTube to MP3</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default YoutubePlaylistDownloader;