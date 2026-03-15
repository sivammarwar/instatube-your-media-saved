import { Helmet } from "react-helmet";

const YoutubeMusicDownloader = () => {
  return (
    <>
      <Helmet>
        <title>YouTube Music Downloader – Download YouTube Music Free in MP3</title>
        <meta name="description" content="Download YouTube music videos as MP3 or MP4 for free. Best YouTube Music downloader — save any song, playlist, or album from YouTube in high quality." />
        <meta name="keywords" content="youtube music downloader, download youtube music, youtube music to mp3, save youtube music, youtube music video downloader" />
        <link rel="canonical" href="https://freereelsdownloader.com/youtube-music-downloader" />
        <meta property="og:title" content="YouTube Music Downloader – Free MP3 Download" />
        <meta property="og:description" content="Save any YouTube music video as MP3. High quality, free, no watermark." />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org",
          "@type":"WebApplication",
          "name":"YouTube Music Downloader",
          "url":"https://freereelsdownloader.com/youtube-music-downloader",
          "description":"Download YouTube music videos as MP3 for free",
          "applicationCategory":"MultimediaApplication",
          "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        :root{
          --grad-fusion:linear-gradient(135deg,#833AB4 0%,#E1306C 30%,#FF0000 60%,#F77737 100%);
          --grad-text:linear-gradient(90deg,#FCAF45,#E1306C,#FF0000,#833AB4);
          --grad-purple:linear-gradient(135deg,#4f1d96,#7c3aed);
          --yt-red:#FF0000; --purple:#7c3aed;
          --bg-void:#060810; --bg-card:rgba(255,255,255,0.055);
          --border-subtle:rgba(255,255,255,0.08);
          --text-primary:#F5F0FF; --text-secondary:rgba(245,240,255,0.55);
          --text-muted:rgba(245,240,255,0.3);
          --font-display:'Syne',sans-serif; --font-body:'DM Sans',sans-serif;
        }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        body{font-family:var(--font-body);background:var(--bg-void);color:var(--text-primary);-webkit-font-smoothing:antialiased}

        .ymd-root{min-height:100vh;background:var(--bg-void);overflow-x:hidden;position:relative}
        .ymd-bg{position:fixed;inset:0;pointer-events:none;z-index:0;
          background:radial-gradient(ellipse 80% 50% at 50% 0%,rgba(124,58,237,0.12) 0%,transparent 60%),
          radial-gradient(ellipse 50% 50% at 0% 100%,rgba(255,0,0,0.1) 0%,transparent 60%)}

        /* NAV */
        .ymd-nav{position:sticky;top:0;z-index:20;background:rgba(6,8,16,0.9);backdrop-filter:blur(20px);border-bottom:1px solid var(--border-subtle);padding:1rem 2.5rem;display:flex;justify-content:space-between;align-items:center}
        .ymd-brand{font-family:var(--font-display);font-weight:800;font-size:1rem;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-decoration:none}
        .ymd-nav-links{display:flex;gap:1.5rem}
        .ymd-nav-links a{color:var(--text-muted);text-decoration:none;font-size:0.8rem;font-family:var(--font-display);font-weight:600;transition:color 0.2s}
        .ymd-nav-links a:hover{color:var(--text-primary)}

        /* HERO — full-width centered with visualizer */
        .ymd-hero{position:relative;z-index:1;text-align:center;padding:5rem 2rem 2rem;max-width:700px;margin:0 auto}
        .ymd-hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:99px;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.3);font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#a78bfa;margin-bottom:1.5rem}
        .ymd-h1{font-family:var(--font-display);font-size:clamp(2rem,5vw,4rem);font-weight:800;line-height:1.08;letter-spacing:-0.03em;margin-bottom:1.25rem}
        .ymd-h1 .accent{background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .ymd-hero-desc{font-size:0.98rem;color:var(--text-secondary);line-height:1.75;margin-bottom:2rem;font-weight:300}

        /* Album art mockup */
        .ymd-art-row{display:flex;align-items:center;justify-content:center;gap:-12px;margin-bottom:2.5rem}
        .ymd-art{width:56px;height:56px;border-radius:10px;border:2px solid var(--bg-void);background:var(--grad-fusion);display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-left:-10px;box-shadow:0 4px 16px rgba(0,0,0,0.5);transition:transform 0.2s}
        .ymd-art:first-child{margin-left:0}
        .ymd-art:hover{transform:translateY(-4px) scale(1.05)}
        .ymd-art-1{background:linear-gradient(135deg,#1a1a2e,#16213e);border-color:rgba(255,255,255,0.1)}
        .ymd-art-2{background:linear-gradient(135deg,#0d0d1a,#1a0a2e);border-color:rgba(255,255,255,0.1)}
        .ymd-art-3{background:linear-gradient(135deg,#1a0a0a,#2e0a0a);border-color:rgba(255,255,255,0.1)}
        .ymd-art-more{background:rgba(255,255,255,0.05);font-family:var(--font-display);font-size:0.7rem;font-weight:700;color:var(--text-muted)}

        /* TOOL */
        .ymd-tool-wrap{position:relative;z-index:1;max-width:640px;margin:0 auto;padding:0 1.5rem 2rem}
        .ymd-card{background:rgba(18,14,28,0.85);border:1px solid rgba(124,58,237,0.2);border-radius:24px;padding:2rem;backdrop-filter:blur(24px);box-shadow:0 32px 80px rgba(0,0,0,0.6),0 0 60px rgba(124,58,237,0.1);position:relative}
        .ymd-card::before{content:'';position:absolute;inset:0;border-radius:24px;padding:1px;background:var(--grad-fusion);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0.35;pointer-events:none}
        .ymd-label{font-family:var(--font-display);font-size:0.65rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.65rem}
        .ymd-input{width:100%;background:rgba(255,255,255,0.05);border:1px solid var(--border-subtle);border-radius:12px;padding:0.88rem 1rem;color:var(--text-primary);font-family:var(--font-body);font-size:0.92rem;outline:none;transition:all 0.3s;margin-bottom:1rem}
        .ymd-input:focus{border-color:rgba(124,58,237,0.5);box-shadow:0 0 0 3px rgba(124,58,237,0.1)}
        .ymd-input::placeholder{color:var(--text-muted)}

        /* Format tabs */
        .ymd-tabs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:1rem}
        .ymd-tab{padding:0.75rem 1rem;border-radius:12px;border:1px solid var(--border-subtle);background:rgba(255,255,255,0.04);cursor:pointer;transition:all 0.2s;text-align:center}
        .ymd-tab.active-mp3{border-color:rgba(124,58,237,0.4);background:rgba(124,58,237,0.1)}
        .ymd-tab.active-mp4{border-color:rgba(255,0,0,0.4);background:rgba(255,0,0,0.1)}
        .ymd-tab:hover{background:rgba(255,255,255,0.08)}
        .ymd-tab-title{font-family:var(--font-display);font-size:0.9rem;font-weight:800;display:block;margin-bottom:2px}
        .ymd-tab.active-mp3 .ymd-tab-title{color:#a78bfa}
        .ymd-tab.active-mp4 .ymd-tab-title{color:#ff5555}
        .ymd-tab-desc{font-size:0.7rem;color:var(--text-muted);font-family:var(--font-display)}

        /* Quality row */
        .ymd-quality-row{display:flex;gap:6px;margin-bottom:1rem;flex-wrap:wrap}
        .ymd-qual{padding:5px 12px;border-radius:8px;border:1px solid var(--border-subtle);background:rgba(255,255,255,0.04);font-family:var(--font-display);font-size:0.72rem;font-weight:700;color:var(--text-muted);cursor:pointer;transition:all 0.2s}
        .ymd-qual.sel{border-color:rgba(124,58,237,0.4);background:rgba(124,58,237,0.12);color:#a78bfa}
        .ymd-qual:hover{border-color:rgba(255,255,255,0.15);color:var(--text-secondary)}
        .ymd-dl-btn{width:100%;background:var(--grad-fusion);border:none;border-radius:12px;padding:0.9rem;color:#fff;font-family:var(--font-display);font-weight:700;font-size:0.9rem;letter-spacing:0.06em;cursor:pointer;box-shadow:0 4px 24px rgba(124,58,237,0.4);transition:all 0.2s}
        .ymd-dl-btn:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(124,58,237,0.55)}

        /* STATS */
        .ymd-stats-strip{position:relative;z-index:1;display:flex;max-width:640px;margin:0 auto;padding:0 1.5rem 3rem}
        .ymd-stats-inner{display:flex;flex:1;background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:16px;overflow:hidden}
        .ymd-stat{flex:1;padding:1rem;text-align:center;border-right:1px solid var(--border-subtle)}
        .ymd-stat:last-child{border-right:none}
        .ymd-stat-v{font-family:var(--font-display);font-size:1.3rem;font-weight:800;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:2px}
        .ymd-stat-l{font-size:0.65rem;color:var(--text-muted);font-family:var(--font-display);letter-spacing:0.08em;text-transform:uppercase}

        /* FEATURES */
        .ymd-section{position:relative;z-index:1;max-width:900px;margin:0 auto;padding:0 2rem 5rem}
        .ymd-sh{display:flex;align-items:center;gap:1rem;margin-bottom:2rem}
        .ymd-stag{font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#a78bfa}
        .ymd-sline{flex:1;height:1px;background:var(--border-subtle)}
        .ymd-h2{font-family:var(--font-display);font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-0.02em;margin-bottom:0.4rem}
        .ymd-sub{font-size:0.9rem;color:var(--text-secondary);font-weight:300;margin-bottom:2.5rem}

        .ymd-feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .ymd-feat{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:16px;padding:1.5rem;transition:all 0.3s}
        .ymd-feat:hover{transform:translateY(-4px);background:rgba(255,255,255,0.08)}
        .ymd-feat-icon{font-size:1.75rem;margin-bottom:0.75rem}
        .ymd-feat-t{font-family:var(--font-display);font-size:0.9rem;font-weight:700;margin-bottom:0.4rem}
        .ymd-feat-d{font-size:0.8rem;color:var(--text-secondary);line-height:1.65;font-weight:300}

        /* FAQ */
        .ymd-faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .ymd-faq{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:14px;padding:1.25rem}
        .ymd-faq-q{font-family:var(--font-display);font-size:0.88rem;font-weight:700;margin-bottom:0.6rem}
        .ymd-faq-a{font-size:0.8rem;color:var(--text-secondary);line-height:1.7;font-weight:300}

        /* FOOTER */
        .ymd-footer{position:relative;z-index:1;border-top:1px solid var(--border-subtle);padding:1.5rem 2.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
        .ymd-footer p{font-size:0.72rem;color:var(--text-muted);font-family:var(--font-display)}
        .ymd-footer-links{display:flex;gap:1.5rem}
        .ymd-footer-links a{font-size:0.72rem;color:var(--text-muted);text-decoration:none;font-family:var(--font-display);transition:color 0.2s}
        .ymd-footer-links a:hover{color:var(--text-secondary)}

        @media(max-width:768px){.ymd-feat-grid{grid-template-columns:1fr 1fr}.ymd-faq-grid{grid-template-columns:1fr}.ymd-nav-links{display:none}}
        @media(max-width:480px){.ymd-feat-grid{grid-template-columns:1fr}.ymd-tabs{grid-template-columns:1fr}.ymd-h1{font-size:2rem}}
      `}</style>

      <div className="ymd-root">
        <div className="ymd-bg" />

        <nav className="ymd-nav">
          <a href="/" className="ymd-brand">FreeReelsDownloader</a>
          <div className="ymd-nav-links">
            <a href="/youtube-to-mp3">YT to MP3</a>
            <a href="/youtube-to-mp3-320kbps">320kbps</a>
            <a href="/youtube-video-downloader">YT Downloader</a>
          </div>
        </nav>

        <section className="ymd-hero">
          <div className="ymd-hero-badge">🎵 YouTube Music</div>
          <h1 className="ymd-h1">Download <span className="accent">YouTube Music</span><br />Free in MP3 or MP4</h1>
          <p className="ymd-hero-desc">Save any YouTube music video, song, or album playlist as high-quality MP3 audio or MP4 video. Works with YouTube Music and regular YouTube.</p>
          <div className="ymd-art-row">
            {['🎸','🎤','🥁','🎹','🎺','🎻'].map((e,i)=>(
              <div className={`ymd-art ymd-art-${(i%3)+1}`} key={i}>{e}</div>
            ))}
            <div className="ymd-art ymd-art-more">+1M</div>
          </div>
        </section>

        <div className="ymd-tool-wrap">
          <div className="ymd-card">
            <div className="ymd-label">YouTube Music or Video URL</div>
            <input className="ymd-input" type="url" placeholder="Paste YouTube URL or YouTube Music link..." />
            <div className="ymd-label">Download As</div>
            <div className="ymd-tabs">
              <div className="ymd-tab active-mp3">
                <span className="ymd-tab-title">MP3</span>
                <span className="ymd-tab-desc">Audio only · Best for music</span>
              </div>
              <div className="ymd-tab">
                <span className="ymd-tab-title">MP4</span>
                <span className="ymd-tab-desc">Video + audio · Music video</span>
              </div>
            </div>
            <div className="ymd-label">Audio Quality</div>
            <div className="ymd-quality-row">
              {['320 kbps','256 kbps','192 kbps','128 kbps'].map((q,i)=>(
                <div className={`ymd-qual${i===0?' sel':''}`} key={q}>{q}</div>
              ))}
            </div>
            <button className="ymd-dl-btn">↓ Download Music</button>
          </div>
        </div>

        <div className="ymd-stats-strip">
          <div className="ymd-stats-inner">
            {[['320kbps','Max Quality'],['0','Ads'],['Free','Always'],['Instant','Speed']].map(([v,l])=>(
              <div className="ymd-stat" key={l}>
                <div className="ymd-stat-v">{v}</div>
                <div className="ymd-stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ymd-section">
          <div className="ymd-sh"><span className="ymd-stag">Features</span><div className="ymd-sline"/></div>
          <h2 className="ymd-h2">Everything a Music Downloader Should Be</h2>
          <p className="ymd-sub">No compromises on quality, speed, or usability.</p>
          <div className="ymd-feat-grid">
            {[
              {icon:'🎵',t:'MP3 up to 320kbps',d:'Get studio-grade audio quality. 320kbps MP3 is indistinguishable from the original for most listeners.'},
              {icon:'📺',t:'Music Video MP4',d:'Download the full music video in HD. Watch offline without internet in your favorite player.'},
              {icon:'📋',t:'Playlist Support',d:'Paste a YouTube Music playlist URL to download an entire album or collection at once.'},
              {icon:'🏷️',t:'ID3 Tags Included',d:'MP3 files include song title, artist, and album metadata so they show correctly in music apps.'},
              {icon:'📱',t:'Mobile Optimized',d:'Works on iPhone and Android browsers. No app download required — just visit this page.'},
              {icon:'⚡',t:'Zero Wait Time',d:'Conversion is instant. No queue, no processing delay. Your file is ready in seconds.'},
            ].map(f=>(
              <div className="ymd-feat" key={f.t}>
                <div className="ymd-feat-icon">{f.icon}</div>
                <div className="ymd-feat-t">{f.t}</div>
                <p className="ymd-feat-d">{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ymd-section" style={{paddingTop:0}}>
          <div className="ymd-sh"><span className="ymd-stag">FAQ</span><div className="ymd-sline"/></div>
          <h2 className="ymd-h2">YouTube Music Downloader FAQ</h2>
          <p className="ymd-sub" style={{marginBottom:'1.5rem'}}>Quick answers for common questions.</p>
          <div className="ymd-faq-grid">
            {[
              {q:'Does it work with YouTube Music links?',a:'Yes. Paste any youtube.com/watch or music.youtube.com link and we will extract the audio or video.'},
              {q:'Can I download a full YouTube Music album?',a:'Yes — paste a YouTube playlist URL (for an album or artist discography playlist) to batch download.'},
              {q:'Will the MP3 have the song name and artist?',a:'Yes. We embed ID3 tags including title, artist, and album so the file appears correctly in music apps.'},
              {q:'Is downloading YouTube Music legal?',a:'For personal offline use only. Redistribution, streaming, or commercial use of downloaded music is prohibited by copyright law.'},
            ].map(f=>(
              <div className="ymd-faq" key={f.q}>
                <div className="ymd-faq-q">{f.q}</div>
                <p className="ymd-faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="ymd-footer">
          <p>© 2025 FreeReelsDownloader.com — Not affiliated with YouTube, YouTube Music or Google LLC.</p>
          <div className="ymd-footer-links">
            <a href="/youtube-to-mp3">YouTube to MP3</a>
            <a href="/youtube-to-mp3-320kbps">320kbps</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default YoutubeMusicDownloader;