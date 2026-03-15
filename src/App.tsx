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

// New SEO pages
import InstagramToMp4 from "./pages/seo/InstagramToMp4.tsx";
import DownloadYoutubeVideoOnline from "./pages/seo/DownloadYoutubeVideoOnline.tsx";
import SaveInstagramVideo from "./pages/seo/SaveInstagramVideo.tsx";
import YoutubeHdDownloader from "./pages/seo/YoutubeHdDownloader.tsx";
import FreeVideoDownloader from "./pages/seo/FreeVideoDownloader.tsx";
import DownloadReelsWithoutWatermark from "./pages/seo/DownloadReelsWithoutWatermark.tsx";
import YoutubeShortDownloader from "./pages/seo/YoutubeShortDownloader.tsx";
import OnlineVideoDownloader from "./pages/seo/OnlineVideoDownloader.tsx";
import InstagramReelDownloadHd from "./pages/seo/InstagramReelDownloadHd.tsx";
import HowToDownloadInstagramReels from "./pages/seo/HowToDownloadInstagramReels.tsx";

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

          {/* New SEO pages */}
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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;