import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Original SEO pages
import InstagramReelsDownloader from "./pages/seo/InstagramReelsDownloader.tsx";
import YoutubeVideoDownloader from "./pages/seo/YoutubeVideoDownloader.tsx";
import InstagramVideoDownloader from "./pages/seo/InstagramVideoDownloader.tsx";
import YoutubeToMp4 from "./pages/seo/YoutubeToMp4.tsx";
import YoutubeToMp3 from "./pages/seo/YoutubeToMp3.tsx";
import InstagramStoriesDownloader from "./pages/seo/InstagramStoriesDownloader.tsx";

// New SEO pages (batch 1)
import InstagramToMp4 from "./pages/seo/instagram-to-mp4.tsx";
import DownloadYoutubeVideoOnline from "./pages/seo/download-youtube-video-online.tsx";
import SaveInstagramVideo from "./pages/seo/save-instagram-video.tsx";
import YoutubeHdDownloader from "./pages/seo/youtube-hd-downloader.tsx";
import FreeVideoDownloader from "./pages/seo/free-video-downloader.tsx";
import DownloadReelsWithoutWatermark from "./pages/seo/Downloadreelswithoutwatermark.tsx";
import YoutubeShortDownloader from "./pages/seo/youtube-shorts-downloader.tsx";
import OnlineVideoDownloader from "./pages/seo/online-video-downloader.tsx";
import InstagramReelDownloadHd from "./pages/seo/InstagramReelsDownloader.tsx";
import HowToDownloadInstagramReels from "./pages/seo/how-to-download-instagram-reels.tsx";

// New SEO pages (batch 2)
import YoutubePlaylistDownloader from "./pages/seo/youtube-playlist-downloader.tsx";
import InstagramPhotoDownloader from "./pages/seo/instagram-photo-downloader.tsx";
import Youtube4KDownloader from "./pages/seo/youtube-4k-downloader.tsx";
import InstagramReelToMp3 from "./pages/seo/instagram-reel-to-mp3.tsx";
import YoutubeToMp3320 from "./pages/seo/youtube-to-mp3-320kbps.tsx";
import DownloadInstagramVideoWithoutWatermark from "./pages/seo/download-instagram-video-without-watermark.tsx";
import YoutubeMusicDownloader from "./pages/seo/youtube-music-downloader.tsx";
import InstagramDownloaderOnline from "./pages/seo/instagram-downloader-online.tsx";
import YoutubeVideoDownloaderWithoutWatermark from "./pages/seo/youtube-video-downloader-without-watermark.tsx";
import InstagramVideoToMp4 from "./pages/seo/instagram-video-to-mp4.tsx";

// New SEO pages (batch 3)
import YoutubeChannelDownloader from "./pages/seo/youtube-channel-downloader.tsx";
import InstagramHighlightsDownloader from "./pages/seo/ instagram-highlights-downloader.tsx";
import YoutubeClipDownloader from "./pages/seo/youtube-clip-downloader.tsx";
import InstagramCarouselDownloader from "./pages/seo/instagram-carousel-downloader.tsx";
import YoutubeAudioDownloader from "./pages/seo/youtube-audio-downloader.tsx";
import InstagramReelAudioDownloader from "./pages/seo/instagram-reel-audio-downloader.tsx";
import YoutubeThumbnailDownloader from "./pages/seo/youtube-thumbnail-downloader.tsx";
import InstagramProfileDownloader from "./pages/seo/instagram-profile-downloader.tsx";
import YoutubeVideoConverter from "./pages/seo/youtube-video-converter.tsx";
import InstagramSavedPostsDownloader from "./pages/seo/instagram-saved-posts-downloader.tsx";

// New SEO pages (batch 4)
import InstagramReelDownloaderHdQuality from "./pages/seo/instagram-reel-downloader-hd-quality.tsx";
import YoutubeToMp4ConverterHd from "./pages/seo/youtube-to-mp4-converter-hd.tsx";
import SaveInstagramVideoOnline from "./pages/seo/save-instagram-video-online.tsx";
import YoutubeToMp3FreeConverter from "./pages/seo/ youtube-to-mp3-free-converter.tsx";
import InstagramStorySaverOnline from "./pages/seo/ instagram-story-saver-online.tsx";
import YoutubeShortsSaver from "./pages/seo/youtube-shorts-saver.tsx";
import InstagramPhotoSaverOnline from "./pages/seo/instagram-photo-saver-online.tsx";
import YoutubePlaylistVideoDownloader from "./pages/seo/youtube-playlist-video-downloader.tsx";
import InstagramReelAudioExtractor from "./pages/seo/instagram-reel-audio-extractor.tsx";
import YoutubeThumbnailDownloaderTool from "./pages/seo/youtube-thumbnail-downloader-tool.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Original SEO pages */}
          <Route path="/instagram-reels-downloader" element={<InstagramReelsDownloader />} />
          <Route path="/youtube-video-downloader" element={<YoutubeVideoDownloader />} />
          <Route path="/instagram-video-downloader" element={<InstagramVideoDownloader />} />
          <Route path="/youtube-to-mp4" element={<YoutubeToMp4 />} />
          <Route path="/youtube-to-mp3" element={<YoutubeToMp3 />} />
          <Route path="/instagram-stories-downloader" element={<InstagramStoriesDownloader />} />

          {/* New SEO pages (batch 1) */}
          <Route path="/instagram-to-mp4" element={<InstagramToMp4 />} />
          <Route path="/download-youtube-video-online" element={<DownloadYoutubeVideoOnline />} />
          <Route path="/save-instagram-video" element={<SaveInstagramVideo />} />
          <Route path="/youtube-hd-downloader" element={<YoutubeHdDownloader />} />
          <Route path="/free-video-downloader" element={<FreeVideoDownloader />} />
          <Route path="/download-reels-without-watermark" element={<DownloadReelsWithoutWatermark />} />
          <Route path="/youtube-shorts-downloader" element={<YoutubeShortDownloader />} />
          <Route path="/online-video-downloader" element={<OnlineVideoDownloader />} />
          <Route path="/download-instagram-reels-hd" element={<InstagramReelDownloadHd />} />
          <Route path="/how-to-download-instagram-reels" element={<HowToDownloadInstagramReels />} />

          {/* New SEO pages (batch 2) */}
          <Route path="/youtube-playlist-downloader" element={<YoutubePlaylistDownloader />} />
          <Route path="/instagram-photo-downloader" element={<InstagramPhotoDownloader />} />
          <Route path="/youtube-4k-downloader" element={<Youtube4KDownloader />} />
          <Route path="/instagram-reel-to-mp3" element={<InstagramReelToMp3 />} />
          <Route path="/youtube-to-mp3-320kbps" element={<YoutubeToMp3320 />} />
          <Route path="/download-instagram-video-without-watermark" element={<DownloadInstagramVideoWithoutWatermark />} />
          <Route path="/youtube-music-downloader" element={<YoutubeMusicDownloader />} />
          <Route path="/instagram-downloader-online" element={<InstagramDownloaderOnline />} />
          <Route path="/youtube-video-downloader-without-watermark" element={<YoutubeVideoDownloaderWithoutWatermark />} />
          <Route path="/instagram-video-to-mp4" element={<InstagramVideoToMp4 />} />

          {/* New SEO pages (batch 3) */}
          <Route path="/youtube-channel-downloader" element={<YoutubeChannelDownloader />} />
          <Route path="/instagram-highlights-downloader" element={<InstagramHighlightsDownloader />} />
          <Route path="/youtube-clip-downloader" element={<YoutubeClipDownloader />} />
          <Route path="/instagram-carousel-downloader" element={<InstagramCarouselDownloader />} />
          <Route path="/youtube-audio-downloader" element={<YoutubeAudioDownloader />} />
          <Route path="/instagram-reel-audio-downloader" element={<InstagramReelAudioDownloader />} />
          <Route path="/youtube-thumbnail-downloader" element={<YoutubeThumbnailDownloader />} />
          <Route path="/instagram-profile-downloader" element={<InstagramProfileDownloader />} />
          <Route path="/youtube-video-converter" element={<YoutubeVideoConverter />} />
          <Route path="/instagram-saved-posts-downloader" element={<InstagramSavedPostsDownloader />} />

          {/* New SEO pages (batch 4) */}
          <Route path="/instagram-reel-downloader-hd-quality" element={<InstagramReelDownloaderHdQuality />} />
          <Route path="/youtube-to-mp4-converter-hd" element={<YoutubeToMp4ConverterHd />} />
          <Route path="/save-instagram-video-online" element={<SaveInstagramVideoOnline />} />
          <Route path="/youtube-to-mp3-free" element={<YoutubeToMp3FreeConverter />} />
          <Route path="/instagram-story-saver" element={<InstagramStorySaverOnline />} />
          <Route path="/youtube-shorts-saver" element={<YoutubeShortsSaver />} />
          <Route path="/instagram-photo-saver" element={<InstagramPhotoSaverOnline />} />
          <Route path="/youtube-playlist-video-downloader" element={<YoutubePlaylistVideoDownloader />} />
          <Route path="/instagram-reel-audio-extractor" element={<InstagramReelAudioExtractor />} />
          <Route path="/youtube-thumbnail-downloader-tool" element={<YoutubeThumbnailDownloaderTool />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;