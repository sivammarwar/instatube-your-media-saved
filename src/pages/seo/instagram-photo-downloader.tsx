import { Helmet } from "react-helmet";

const InstagramPhotoDownloader = () => {
  return (
    <>
      <Helmet>
        <title>Instagram Photo Downloader – Save Instagram Photos Free</title>
        <meta name="description" content="Download Instagram photos in full HD resolution for free. Save any public Instagram post, carousel, or profile photo without logging in." />
        <meta name="keywords" content="instagram photo downloader, download instagram photos, save instagram pictures, instagram image downloader, instagram post downloader" />
        <link rel="canonical" href="https://freereelsdownloader.com/instagram-photo-downloader" />
        <meta property="og:title" content="Instagram Photo Downloader – Free HD Download" />
        <meta property="og:description" content="Save any Instagram photo in full HD. Works for posts, carousels, and profile pictures." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Download Instagram Photos",
          "description": "Step-by-step guide to downloading Instagram photos for free",
          "step": [
            {"@type":"HowToStep","name":"Copy Instagram Post URL","text":"Open the Instagram post and copy the URL from your browser or the Share menu."},
            {"@type":"HowToStep","name":"Paste the URL","text":"Paste the Instagram URL into the downloader input field."},
            {"@type":"HowToStep","name":"Download the Photo","text":"Click Download and save the full-resolution photo to your device."}
          ]
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        :root {
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

        .ipd-root{min-height:100vh;background:var(--bg-void);overflow-x:hidden}

        /* Mesh background */
        .ipd-mesh{position:fixed;inset:0;pointer-events:none;z-index:0;background:
          radial-gradient(ellipse 60% 40% at 20% 10%,rgba(131,58,180,0.15) 0%,transparent 70%),
          radial-gradient(ellipse 50% 50% at 80% 80%,rgba(225,48,108,0.12) 0%,transparent 70%),
          radial-gradient(ellipse 40% 40% at 50% 50%,rgba(247,119,55,0.06) 0%,transparent 70%)}

        /* NAV */
        .ipd-nav{position:sticky;top:0;z-index:20;background:rgba(6,8,16,0.85);backdrop-filter:blur(20px);border-bottom:1px solid var(--border-subtle);padding:1rem 2.5rem;display:flex;justify-content:space-between;align-items:center}
        .ipd-nav-brand{font-family:var(--font-display);font-weight:800;font-size:1rem;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-decoration:none}
        .ipd-nav-links{display:flex;gap:1.25rem}
        .ipd-nav-links a{color:var(--text-muted);text-decoration:none;font-size:0.8rem;font-family:var(--font-display);font-weight:600;letter-spacing:0.04em;transition:color 0.2s}
        .ipd-nav-links a:hover{color:var(--text-primary)}

        /* LAYOUT — 2 col */
        .ipd-layout{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:3.5rem 2rem;display:grid;grid-template-columns:1fr 340px;gap:4rem;align-items:start}

        /* MAIN CONTENT */
        .ipd-content{}
        .ipd-kicker{display:inline-flex;align-items:center;gap:8px;padding:4px 14px;border-radius:99px;background:rgba(225,48,108,0.1);border:1px solid rgba(225,48,108,0.25);font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#f472b6;margin-bottom:1.25rem}
        .ipd-h1{font-family:var(--font-display);font-size:clamp(1.8rem,3.5vw,3rem);font-weight:800;line-height:1.15;letter-spacing:-0.025em;margin-bottom:1rem}
        .ipd-h1 em{font-style:normal;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .ipd-lead{font-size:1rem;color:var(--text-secondary);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:58ch}

        /* Inline tool */
        .ipd-inline-tool{background:rgba(18,14,28,0.9);border:1px solid rgba(225,48,108,0.25);border-radius:20px;padding:1.75rem;margin-bottom:3rem;backdrop-filter:blur(20px);box-shadow:0 0 60px rgba(225,48,108,0.1)}
        .ipd-tool-label{font-family:var(--font-display);font-size:0.68rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.75rem}
        .ipd-tool-row{display:flex;gap:0.5rem}
        .ipd-tool-input{flex:1;background:rgba(255,255,255,0.05);border:1px solid var(--border-subtle);border-radius:10px;padding:0.8rem 1rem;color:var(--text-primary);font-family:var(--font-body);font-size:0.88rem;outline:none;transition:border-color 0.3s}
        .ipd-tool-input:focus{border-color:rgba(225,48,108,0.45)}
        .ipd-tool-input::placeholder{color:var(--text-muted)}
        .ipd-tool-btn{background:var(--grad-ig);border:none;border-radius:10px;padding:0.8rem 1.5rem;color:#fff;font-family:var(--font-display);font-weight:700;font-size:0.82rem;letter-spacing:0.06em;cursor:pointer;box-shadow:0 4px 20px rgba(225,48,108,0.4);transition:all 0.2s;white-space:nowrap}
        .ipd-tool-btn:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(225,48,108,0.55)}
        .ipd-tool-hint{margin-top:0.6rem;font-size:0.76rem;color:var(--text-muted)}

        /* Article body */
        .ipd-article h2{font-family:var(--font-display);font-size:1.35rem;font-weight:700;margin:2.5rem 0 0.75rem;letter-spacing:-0.015em}
        .ipd-article h2 .ipd-h2-accent{background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .ipd-article p{font-size:0.9rem;color:var(--text-secondary);line-height:1.8;margin-bottom:1rem;font-weight:300}
        .ipd-article strong{color:var(--text-primary);font-weight:600}

        /* Step list */
        .ipd-steps-list{display:flex;flex-direction:column;gap:1rem;margin:1.5rem 0}
        .ipd-step-row{display:flex;gap:1rem;align-items:flex-start}
        .ipd-step-badge{flex-shrink:0;width:36px;height:36px;border-radius:10px;background:var(--grad-fusion);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:0.85rem;font-weight:800;color:#fff;box-shadow:0 4px 16px rgba(225,48,108,0.3)}
        .ipd-step-body{}
        .ipd-step-body strong{display:block;font-family:var(--font-display);font-size:0.88rem;font-weight:700;margin-bottom:0.25rem}
        .ipd-step-body span{font-size:0.82rem;color:var(--text-secondary);line-height:1.6}

        /* Callout */
        .ipd-callout{background:rgba(131,58,180,0.08);border:1px solid rgba(131,58,180,0.25);border-radius:14px;padding:1.25rem 1.5rem;margin:1.5rem 0;display:flex;gap:1rem;align-items:flex-start}
        .ipd-callout-icon{font-size:1.4rem;flex-shrink:0;margin-top:0.1rem}
        .ipd-callout-text{font-size:0.84rem;color:var(--text-secondary);line-height:1.7}
        .ipd-callout-text strong{color:var(--text-primary)}

        /* Divider */
        .ipd-divider{height:1px;background:var(--border-subtle);margin:2.5rem 0}

        /* SIDEBAR */
        .ipd-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .ipd-sidebar-card{background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:18px;padding:1.5rem;backdrop-filter:blur(16px)}
        .ipd-sidebar-title{font-family:var(--font-display);font-size:0.72rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:1rem}
        .ipd-sidebar-stat{display:flex;justify-content:space-between;align-items:center;padding:0.6rem 0;border-bottom:1px solid var(--border-subtle)}
        .ipd-sidebar-stat:last-child{border-bottom:none}
        .ipd-sidebar-stat-label{font-size:0.8rem;color:var(--text-secondary)}
        .ipd-sidebar-stat-val{font-family:var(--font-display);font-size:0.88rem;font-weight:700;background:var(--grad-text);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .ipd-related-link{display:flex;align-items:center;justify-content:space-between;padding:0.7rem 0;border-bottom:1px solid var(--border-subtle);text-decoration:none;transition:all 0.2s}
        .ipd-related-link:last-child{border-bottom:none}
        .ipd-related-link:hover{transform:translateX(4px)}
        .ipd-related-link-text{font-size:0.82rem;color:var(--text-secondary);font-family:var(--font-display);font-weight:600}
        .ipd-related-link:hover .ipd-related-link-text{color:var(--text-primary)}
        .ipd-related-link-arrow{font-size:0.75rem;color:var(--text-muted)}

        /* FOOTER */
        .ipd-footer{position:relative;z-index:1;border-top:1px solid var(--border-subtle);padding:1.5rem 2.5rem;text-align:center}
        .ipd-footer p{font-size:0.72rem;color:var(--text-muted);font-family:var(--font-display)}

        @media(max-width:900px){.ipd-layout{grid-template-columns:1fr}.ipd-sidebar{position:static}}
        @media(max-width:480px){.ipd-nav-links{display:none}.ipd-tool-row{flex-direction:column}}
      `}</style>

      <div className="ipd-root">
        <div className="ipd-mesh" />

        <nav className="ipd-nav">
          <a href="/" className="ipd-nav-brand">FreeReelsDownloader</a>
          <div className="ipd-nav-links">
            <a href="/instagram-video-downloader">Video</a>
            <a href="/instagram-reels-downloader">Reels</a>
            <a href="/instagram-stories-downloader">Stories</a>
          </div>
        </nav>

        <div className="ipd-layout">
          <main className="ipd-content">
            <span className="ipd-kicker">📸 Instagram Photos</span>
            <h1 className="ipd-h1">Download <em>Instagram Photos</em><br />in Full HD — Free</h1>
            <p className="ipd-lead">The fastest way to save any Instagram photo to your phone or desktop. Works with posts, carousels, and profile pictures. No watermark, no login, no app needed.</p>

            <div className="ipd-inline-tool">
              <div className="ipd-tool-label">Paste Instagram Post URL</div>
              <div className="ipd-tool-row">
                <input className="ipd-tool-input" type="url" placeholder="https://www.instagram.com/p/..." />
                <button className="ipd-tool-btn">Save Photo ↓</button>
              </div>
              <p className="ipd-tool-hint">Supports posts, carousels, and public profiles. Mobile friendly.</p>
            </div>

            <div className="ipd-article">
              <h2><span className="ipd-h2-accent">How to Download</span> Instagram Photos</h2>
              <p>Saving Instagram photos used to require third-party apps or workarounds. With our Instagram photo downloader, you can save any public post directly from your browser in three simple steps.</p>

              <div className="ipd-steps-list">
                {[
                  {n:'1',t:'Find the Instagram Post',d:'Open Instagram on mobile or desktop and navigate to the photo or carousel post you want to download.'},
                  {n:'2',t:'Copy the Post URL',d:'On mobile, tap the three dots (⋯) on the post and select "Copy Link". On desktop, copy the URL from your browser address bar.'},
                  {n:'3',t:'Paste & Download',d:'Paste the URL into the input field above, click "Save Photo", and the full-resolution image will download to your device.'},
                ].map(s=>(
                  <div className="ipd-step-row" key={s.n}>
                    <div className="ipd-step-badge">{s.n}</div>
                    <div className="ipd-step-body">
                      <strong>{s.t}</strong>
                      <span>{s.d}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ipd-callout">
                <span className="ipd-callout-icon">💡</span>
                <p className="ipd-callout-text"><strong>Carousel posts:</strong> Our downloader automatically detects carousel posts and lets you download all images in a single batch. No need to download each photo separately.</p>
              </div>

              <div className="ipd-divider" />
              <h2>Can You <span className="ipd-h2-accent">Download Private</span> Instagram Photos?</h2>
              <p>No — our tool only works with <strong>public Instagram profiles and posts</strong>. Private accounts require login access, which we intentionally do not support to respect user privacy.</p>
              <p>If you need to save photos from a private account you follow, you can use Instagram's official built-in download feature under Settings → Your Activity → Download Your Information.</p>

              <div className="ipd-divider" />
              <h2>Instagram Photo Download on <span className="ipd-h2-accent">iPhone & Android</span></h2>
              <p>Our downloader works seamlessly on mobile browsers. On <strong>iPhone</strong>, the photo will open in Safari — press and hold to save it to your Camera Roll. On <strong>Android</strong>, the image saves directly to your Downloads folder or Gallery.</p>
              <p>No app installation is required on either platform, saving valuable storage space on your device.</p>

              <div className="ipd-divider" />
              <h2>Is It <span className="ipd-h2-accent">Legal</span> to Download Instagram Photos?</h2>
              <p>Downloading Instagram photos for <strong>personal, offline viewing</strong> is generally considered acceptable. However, redistributing, re-uploading, or using downloaded photos commercially without the creator's permission violates Instagram's Terms of Service and copyright law.</p>
              <p>Always credit the original creator if you share any downloaded content, and when in doubt, ask for permission directly.</p>

              <div className="ipd-divider" />
              <h2>Supported Instagram <span className="ipd-h2-accent">Photo Types</span></h2>
              <p>Our downloader supports the following Instagram content types:</p>
              <div className="ipd-steps-list">
                {[
                  {n:'📷',t:'Single Photo Posts',d:'Save any standard Instagram photo post in original resolution, typically up to 1080×1080px.'},
                  {n:'🎠',t:'Carousel Posts',d:'Download all photos from a multi-image carousel post in one batch with a single click.'},
                  {n:'👤',t:'Profile Photos',d:'Save any public user\'s profile picture in full size by pasting their profile URL.'},
                ].map(s=>(
                  <div className="ipd-step-row" key={s.n}>
                    <div className="ipd-step-badge" style={{background:'rgba(225,48,108,0.15)',border:'1px solid rgba(225,48,108,0.3)',fontSize:'1rem',boxShadow:'none'}}>{s.n}</div>
                    <div className="ipd-step-body">
                      <strong>{s.t}</strong>
                      <span>{s.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <aside className="ipd-sidebar">
            <div className="ipd-sidebar-card">
              <div className="ipd-sidebar-title">Quick Stats</div>
              {[['Quality','Up to 1080p'],['Speed','Instant'],['Login','Not Required'],['Watermark','None'],['Cost','100% Free']].map(([l,v])=>(
                <div className="ipd-sidebar-stat" key={l}>
                  <span className="ipd-sidebar-stat-label">{l}</span>
                  <span className="ipd-sidebar-stat-val">{v}</span>
                </div>
              ))}
            </div>
            <div className="ipd-sidebar-card">
              <div className="ipd-sidebar-title">Related Tools</div>
              {[
                ['/instagram-reels-downloader','Download Instagram Reels'],
                ['/instagram-video-downloader','Download Instagram Videos'],
                ['/instagram-stories-downloader','Download Instagram Stories'],
                ['/save-instagram-video','Save Instagram Video'],
                ['/download-reels-without-watermark','Reels No Watermark'],
              ].map(([href,label])=>(
                <a href={href} className="ipd-related-link" key={href}>
                  <span className="ipd-related-link-text">{label}</span>
                  <span className="ipd-related-link-arrow">→</span>
                </a>
              ))}
            </div>
          </aside>
        </div>

        <footer className="ipd-footer">
          <p>© 2025 FreeReelsDownloader.com — Not affiliated with Instagram or Meta Platforms, Inc.</p>
        </footer>
      </div>
    </>
  );
};

export default InstagramPhotoDownloader;