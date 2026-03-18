import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";

// ── Eagerly loaded (always needed on first visit) ──
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// ── Lazy loaded (only loaded when user navigates to that route) ──

// Original SEO pages
const InstagramReelsDownloader     = lazy(() => import("./pages/seo/InstagramReelsDownloader.tsx"));
const YoutubeVideoDownloader       = lazy(() => import("./pages/seo/YoutubeVideoDownloader.tsx"));
const InstagramVideoDownloader     = lazy(() => import("./pages/seo/InstagramVideoDownloader.tsx"));
const YoutubeToMp4                 = lazy(() => import("./pages/seo/YoutubeToMp4.tsx"));
const YoutubeToMp3                 = lazy(() => import("./pages/seo/YoutubeToMp3.tsx"));
const InstagramStoriesDownloader   = lazy(() => import("./pages/seo/InstagramStoriesDownloader.tsx"));

// Batch 1
const InstagramToMp4                = lazy(() => import("./pages/seo/instagram-to-mp4.tsx"));
const DownloadYoutubeVideoOnline    = lazy(() => import("./pages/seo/download-youtube-video-online.tsx"));
const SaveInstagramVideo            = lazy(() => import("./pages/seo/save-instagram-video.tsx"));
const YoutubeHdDownloader           = lazy(() => import("./pages/seo/youtube-hd-downloader.tsx"));
const FreeVideoDownloader           = lazy(() => import("./pages/seo/free-video-downloader.tsx"));
const DownloadReelsWithoutWatermark = lazy(() => import("./pages/seo/Downloadreelswithoutwatermark.tsx"));
const YoutubeShortDownloader        = lazy(() => import("./pages/seo/youtube-shorts-downloader.tsx"));
const OnlineVideoDownloader         = lazy(() => import("./pages/seo/online-video-downloader.tsx"));
const HowToDownloadInstagramReels   = lazy(() => import("./pages/seo/how-to-download-instagram-reels.tsx"));

// Batch 2
const YoutubePlaylistDownloader              = lazy(() => import("./pages/seo/youtube-playlist-downloader.tsx"));
const InstagramPhotoDownloader               = lazy(() => import("./pages/seo/instagram-photo-downloader.tsx"));
const Youtube4KDownloader                    = lazy(() => import("./pages/seo/youtube-4k-downloader.tsx"));
const InstagramReelToMp3                     = lazy(() => import("./pages/seo/instagram-reel-to-mp3.tsx"));
const YoutubeToMp3320                        = lazy(() => import("./pages/seo/youtube-to-mp3-320kbps.tsx"));
const DownloadInstagramVideoWithoutWatermark = lazy(() => import("./pages/seo/download-instagram-video-without-watermark.tsx"));
const YoutubeMusicDownloader                 = lazy(() => import("./pages/seo/youtube-music-downloader.tsx"));
const InstagramDownloaderOnline              = lazy(() => import("./pages/seo/instagram-downloader-online.tsx"));
const YoutubeVideoDownloaderWithoutWatermark = lazy(() => import("./pages/seo/youtube-video-downloader-without-watermark.tsx"));
const InstagramVideoToMp4                    = lazy(() => import("./pages/seo/instagram-video-to-mp4.tsx"));

// Batch 3
const YoutubeChannelDownloader      = lazy(() => import("./pages/seo/youtube-channel-downloader.tsx"));
const InstagramHighlightsDownloader = lazy(() => import("./pages/seo/instagram-highlights-downloader.tsx"));
const YoutubeClipDownloader         = lazy(() => import("./pages/seo/youtube-clip-downloader.tsx"));
const InstagramCarouselDownloader   = lazy(() => import("./pages/seo/instagram-carousel-downloader.tsx"));
const YoutubeAudioDownloader        = lazy(() => import("./pages/seo/youtube-audio-downloader.tsx"));
const InstagramReelAudioDownloader  = lazy(() => import("./pages/seo/instagram-reel-audio-downloader.tsx"));
const YoutubeThumbnailDownloader    = lazy(() => import("./pages/seo/youtube-thumbnail-downloader.tsx"));
const InstagramProfileDownloader    = lazy(() => import("./pages/seo/instagram-profile-downloader.tsx"));
const YoutubeVideoConverter         = lazy(() => import("./pages/seo/youtube-video-converter.tsx"));


// Batch 4
const InstagramReelDownloaderHdQuality = lazy(() => import("./pages/seo/instagram-reel-downloader-hd-quality.tsx"));
const YoutubeToMp4ConverterHd          = lazy(() => import("./pages/seo/youtube-to-mp4-converter-hd.tsx"));
const SaveInstagramVideoOnline         = lazy(() => import("./pages/seo/save-instagram-video-online.tsx"));
const YoutubeToMp3FreeConverter        = lazy(() => import("./pages/seo/youtube-to-mp3-free-converter.tsx"));
const InstagramStorySaverOnline        = lazy(() => import("./pages/seo/instagram-story-saver-online.tsx"));
const YoutubeShortsSaver               = lazy(() => import("./pages/seo/youtube-shorts-saver.tsx"));
const InstagramPhotoSaverOnline        = lazy(() => import("./pages/seo/instagram-photo-saver-online.tsx"));
const YoutubePlaylistVideoDownloader   = lazy(() => import("./pages/seo/youtube-playlist-video-downloader.tsx"));
const InstagramReelAudioExtractor      = lazy(() => import("./pages/seo/instagram-reel-audio-extractor.tsx"));
const YoutubeThumbnailDownloaderTool   = lazy(() => import("./pages/seo/youtube-thumbnail-downloader-tool.tsx"));

// Batch 5
const InstagramReelDownloaderHD = lazy(() => import("./pages/seo/InstagramReelDownloaderHD.tsx"));
const YouTubeToMP4ConverterHD   = lazy(() => import("./pages/seo/YouTubeToMP4ConverterHD.tsx"));
const YouTubeToMP3Free          = lazy(() => import("./pages/seo/YouTubeToMP3Free.tsx"));
const InstagramStorySaver       = lazy(() => import("./pages/seo/InstagramStorySaver.tsx"));
const YouTubeShortsSaverPage    = lazy(() => import("./pages/seo/YouTubeShortsSaver.tsx"));
const InstagramPhotoSaver       = lazy(() => import("./pages/seo/InstagramPhotoSaver.tsx"));

// Batch 6 — SEO Pages (set A)
const InstagramBulkVideoDownloader      = lazy(() => import("./pages/seo/instagram-bulk-video-downloader.tsx"));
const YoutubeMP41080pDownload           = lazy(() => import("./pages/seo/youtube-mp4-1080p-download.tsx"));
const InstagramReelsAudioExtractorMp3   = lazy(() => import("./pages/seo/instagram-reels-audio-extractor-mp3.tsx"));
const YoutubeLiveDownloader             = lazy(() => import("./pages/seo/youtube-live-downloader.tsx"));

const ConvertYoutubeVideoToMp3          = lazy(() => import("./pages/seo/convert-youtube-video-to-mp3.tsx"));
const DownloadReelsOnlineFree           = lazy(() => import("./pages/seo/download-reels-online-free.tsx"));
const YoutubeEmbedDownloader            = lazy(() => import("./pages/seo/youtube-embed-downloader.tsx"));
const InstagramHdVideoDownloader        = lazy(() => import("./pages/seo/instagram-hd-video-downloader.tsx"));
const YoutubeShortsMp3Converter         = lazy(() => import("./pages/seo/youtube-shorts-mp3-converter.tsx"));

// Batch 7 — SEO Pages (set B)
const InstagramBulkDownloader          = lazy(() => import("./pages/seo/instagram-bulk-downloader.tsx"));
const YoutubeToMp41080p                = lazy(() => import("./pages/seo/youtube-to-mp4-1080p.tsx"));
const InstagramReelsToMp3              = lazy(() => import("./pages/seo/instagram-reels-to-mp3.tsx"));
const YoutubeLiveStreamDownloader      = lazy(() => import("./pages/seo/youtube-live-stream-downloader.tsx"));

const YoutubeVideoToMp3Converter       = lazy(() => import("./pages/seo/youtube-video-to-mp3-converter.tsx"));
const DownloadInstagramReelsOnline     = lazy(() => import("./pages/seo/download-instagram-reels-online.tsx"));
const YoutubeEmbedVideoDownloader      = lazy(() => import("./pages/seo/youtube-embed-video-downloader.tsx"));
const InstagramVideoDownloaderHd       = lazy(() => import("./pages/seo/instagram-video-downloader-hd.tsx"));
const YoutubeShortsToMp3               = lazy(() => import("./pages/seo/youtube-shorts-to-mp3.tsx"));

// ── Loading fallback — minimal, no layout shift ──
const PageLoader = () => (
  <div style={{
    minHeight: "100vh",
    background: "#060810",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
    <div style={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      border: "2px solid rgba(255,255,255,0.1)",
      borderTopColor: "#E1306C",
      animation: "spin 0.7s linear infinite",
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* ── Original SEO pages ── */}
            <Route path="/instagram-reels-downloader"   element={<InstagramReelsDownloader />} />
            <Route path="/youtube-video-downloader"     element={<YoutubeVideoDownloader />} />
            <Route path="/instagram-video-downloader"   element={<InstagramVideoDownloader />} />
            <Route path="/youtube-to-mp4"               element={<YoutubeToMp4 />} />
            <Route path="/youtube-to-mp3"               element={<YoutubeToMp3 />} />
            <Route path="/instagram-stories-downloader" element={<InstagramStoriesDownloader />} />

            {/* ── Batch 1 ── */}
            <Route path="/instagram-to-mp4"                 element={<InstagramToMp4 />} />
            <Route path="/download-youtube-video-online"    element={<DownloadYoutubeVideoOnline />} />
            <Route path="/save-instagram-video"             element={<SaveInstagramVideo />} />
            <Route path="/youtube-hd-downloader"            element={<YoutubeHdDownloader />} />
            <Route path="/free-video-downloader"            element={<FreeVideoDownloader />} />
            <Route path="/download-reels-without-watermark" element={<DownloadReelsWithoutWatermark />} />
            <Route path="/youtube-shorts-downloader"        element={<YoutubeShortDownloader />} />
            <Route path="/online-video-downloader"          element={<OnlineVideoDownloader />} />
            <Route path="/download-instagram-reels-hd"      element={<InstagramReelsDownloader />} />
            <Route path="/how-to-download-instagram-reels"  element={<HowToDownloadInstagramReels />} />

            {/* ── Batch 2 ── */}
            <Route path="/youtube-playlist-downloader"               element={<YoutubePlaylistDownloader />} />
            <Route path="/instagram-photo-downloader"                element={<InstagramPhotoDownloader />} />
            <Route path="/youtube-4k-downloader"                     element={<Youtube4KDownloader />} />
            <Route path="/instagram-reel-to-mp3"                     element={<InstagramReelToMp3 />} />
            <Route path="/youtube-to-mp3-320kbps"                    element={<YoutubeToMp3320 />} />
            <Route path="/download-instagram-video-without-watermark" element={<DownloadInstagramVideoWithoutWatermark />} />
            <Route path="/youtube-music-downloader"                  element={<YoutubeMusicDownloader />} />
            <Route path="/instagram-downloader-online"               element={<InstagramDownloaderOnline />} />
            <Route path="/youtube-video-downloader-without-watermark" element={<YoutubeVideoDownloaderWithoutWatermark />} />
            <Route path="/instagram-video-to-mp4"                    element={<InstagramVideoToMp4 />} />

            {/* ── Batch 3 ── */}
            <Route path="/youtube-channel-downloader"       element={<YoutubeChannelDownloader />} />
            <Route path="/instagram-highlights-downloader"  element={<InstagramHighlightsDownloader />} />
            <Route path="/youtube-clip-downloader"          element={<YoutubeClipDownloader />} />
            <Route path="/instagram-carousel-downloader"    element={<InstagramCarouselDownloader />} />
            <Route path="/youtube-audio-downloader"         element={<YoutubeAudioDownloader />} />
            <Route path="/instagram-reel-audio-downloader"  element={<InstagramReelAudioDownloader />} />
            <Route path="/youtube-thumbnail-downloader"     element={<YoutubeThumbnailDownloader />} />
            <Route path="/instagram-profile-downloader"     element={<InstagramProfileDownloader />} />
            <Route path="/youtube-video-converter"          element={<YoutubeVideoConverter />} />
 

            {/* ── Batch 4 ── */}
            <Route path="/instagram-reel-downloader-hd-quality" element={<InstagramReelDownloaderHdQuality />} />
            <Route path="/youtube-to-mp4-converter-hd"          element={<YoutubeToMp4ConverterHd />} />
            <Route path="/save-instagram-video-online"          element={<SaveInstagramVideoOnline />} />
            <Route path="/youtube-to-mp3-free"                  element={<YoutubeToMp3FreeConverter />} />
            <Route path="/instagram-story-saver"                element={<InstagramStorySaverOnline />} />
            <Route path="/youtube-shorts-saver"                 element={<YoutubeShortsSaver />} />
            <Route path="/instagram-photo-saver"                element={<InstagramPhotoSaverOnline />} />
            <Route path="/youtube-playlist-video-downloader"    element={<YoutubePlaylistVideoDownloader />} />
            <Route path="/instagram-reel-audio-extractor"       element={<InstagramReelAudioExtractor />} />
            <Route path="/youtube-thumbnail-downloader-tool"    element={<YoutubeThumbnailDownloaderTool />} />

            {/* ── Batch 5 ── */}
            <Route path="/instagram-reel-downloader-hd" element={<InstagramReelDownloaderHD />} />
            <Route path="/youtube-to-mp4-hd"            element={<YouTubeToMP4ConverterHD />} />
            <Route path="/youtube-mp3-free"             element={<YouTubeToMP3Free />} />
            <Route path="/instagram-story-saver-free"   element={<InstagramStorySaver />} />
            <Route path="/youtube-shorts-save"          element={<YouTubeShortsSaverPage />} />
            <Route path="/instagram-photo-save"         element={<InstagramPhotoSaver />} />

            {/* ── Batch 6 — SEO Pages (set A) ── */}
            <Route path="/instagram-bulk-video-downloader"      element={<InstagramBulkVideoDownloader />} />
            <Route path="/youtube-mp4-1080p-download"           element={<YoutubeMP41080pDownload />} />
            <Route path="/instagram-reels-audio-extractor-mp3"  element={<InstagramReelsAudioExtractorMp3 />} />
            <Route path="/youtube-live-downloader"              element={<YoutubeLiveDownloader />} />
           
            <Route path="/convert-youtube-video-to-mp3"         element={<ConvertYoutubeVideoToMp3 />} />
            <Route path="/download-reels-online-free"           element={<DownloadReelsOnlineFree />} />
            <Route path="/youtube-embed-downloader"             element={<YoutubeEmbedDownloader />} />
            <Route path="/instagram-hd-video-downloader"        element={<InstagramHdVideoDownloader />} />
            <Route path="/youtube-shorts-mp3-converter"         element={<YoutubeShortsMp3Converter />} />

            {/* ── Batch 7 — SEO Pages (set B) ── */}
            <Route path="/instagram-bulk-downloader"          element={<InstagramBulkDownloader />} />
            <Route path="/youtube-to-mp4-1080p"               element={<YoutubeToMp41080p />} />
            <Route path="/instagram-reels-to-mp3"             element={<InstagramReelsToMp3 />} />
            <Route path="/youtube-live-stream-downloader"     element={<YoutubeLiveStreamDownloader />} />
       
            <Route path="/youtube-video-to-mp3-converter"     element={<YoutubeVideoToMp3Converter />} />
            <Route path="/download-instagram-reels-online"    element={<DownloadInstagramReelsOnline />} />
            <Route path="/youtube-embed-video-downloader"     element={<YoutubeEmbedVideoDownloader />} />
            <Route path="/instagram-video-downloader-hd"      element={<InstagramVideoDownloaderHd />} />
            <Route path="/youtube-shorts-to-mp3"              element={<YoutubeShortsToMp3 />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;