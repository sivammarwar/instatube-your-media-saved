import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputStage, { type Platform } from "@/components/InputStage";
import ResultsArea from "@/components/ResultsArea";
import {
  fetchVideoData,
  downloadDirect,
  downloadVideoWithAudio,
  type VideoData,
  type VideoResource,
} from "@/lib/api";
import { toast } from "sonner";

type AppState = "idle" | "loading" | "results";
type FetchedVideo = { pageUrl: string; data: VideoData };

export interface DownloadState {
  loading: boolean;
  progress?: number;
  phase?: "preparing" | "merging" | "saving";
}

type ProgressUpdater = (state: Partial<DownloadState>) => void;

function simulateProgress(update: ProgressUpdater, durationMs = 25000): () => void {
  let raf: number;
  const start = Date.now();
  function tick() {
    const elapsed = Date.now() - start;
    let pct: number;
    let phase: DownloadState["phase"];
    if (elapsed < 1000) {
      pct = (elapsed / 1000) * 20; phase = "preparing";
    } else if (elapsed < durationMs) {
      pct = 20 + ((elapsed - 1000) / (durationMs - 1000)) * 60; phase = "merging";
    } else {
      pct = Math.min(99, 80 + ((elapsed - durationMs) / 3000) * 19); phase = "saving";
    }
    update({ progress: Math.round(pct), phase });
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

interface DownloadEngineProps {
  platformHint?: "youtube" | "instagram";
}

export default function DownloadEngine({ platformHint }: DownloadEngineProps) {
  const [appState,    setAppState]    = useState<AppState>("idle");
  const [platform,    setPlatform]    = useState<Platform>(null);
  const [error,       setError]       = useState<string | null>(null);
  const [fetched,     setFetched]     = useState<FetchedVideo | null>(null);
  const [downloading, setDownloading] = useState<Record<string, DownloadState>>({});

  const toastStyle      = { background: "rgba(6,8,16,0.95)", border: "1px solid rgba(0,245,255,0.2)", color: "#eef2ff" };
  const toastErrorStyle = { background: "rgba(40,10,10,0.95)", border: "1px solid rgba(255,60,60,0.3)", color: "#fca5a5" };

  const handleSubmit = async (url: string, detectedPlatform: Platform) => {
    setError(null);
    if (platformHint && detectedPlatform !== platformHint) {
      setError(platformHint === "youtube" ? "Please paste a YouTube link." : "Please paste an Instagram link.");
      return;
    }
    if (!detectedPlatform) { setError("Check your link — we support Instagram and YouTube."); return; }
    setPlatform(detectedPlatform);
    setAppState("loading");
    setFetched(null);
    try {
      const result = await fetchVideoData(url);
      if (!result.success || !result.data) {
        setError(result.error || "Could not fetch video. Please check the link.");
        setAppState("idle"); return;
      }
      setFetched({ pageUrl: url, data: result.data });
      setAppState("results");
    } catch {
      setError("Something went wrong. Please try again.");
      setAppState("idle");
    }
  };

  const handleDownload = async (item: VideoResource & { type: "video" | "audio" }, label: string) => {
    const key = item.url;
    if (downloading[key]?.loading || !fetched) return;
    const patchState = (patch: Partial<DownloadState>) =>
      setDownloading(prev => ({ ...prev, [key]: { ...(prev[key] ?? { loading: true }), ...patch } }));
    patchState({ loading: true, progress: undefined, phase: "preparing" });
    const title   = fetched.data.title || "video";
    const pageUrl = fetched.pageUrl;
    toast.loading(item.type === "video" ? "Preparing download…" : "Preparing audio…", { id: key, description: label, style: toastStyle });
    const stopProgress = simulateProgress(patchState, 25000);
    let result: { success: boolean; error?: string };
    try {
      if (item.type === "audio") {
        result = await downloadDirect(pageUrl, title, undefined, "audio");
      } else {
        const qualityHeight = item.quality?.replace(/[^0-9]/g, "") || undefined;
        result = await downloadDirect(pageUrl, title, qualityHeight, "video");
        if (!result.success && fetched.data.audios.length > 0) {
          toast.loading("Retrying with stream merge…", { id: key, description: label, style: toastStyle });
          patchState({ phase: "merging", progress: undefined });
          result = await downloadVideoWithAudio(item.url, fetched.data.audios[0].url, title, platform ?? undefined);
        }
      }
    } finally { stopProgress(); }
    if (result.success) {
      patchState({ loading: false, progress: 100, phase: "saving" });
      toast.success("Download started", { id: key, description: `Saving: ${title.slice(0, 40)}`, style: toastStyle });
      setTimeout(() => setDownloading(prev => { const n = { ...prev }; delete n[key]; return n; }), 1800);
    } else {
      patchState({ loading: false, progress: undefined, phase: undefined });
      toast.error("Download failed", { id: key, description: result.error || "Please try again.", style: toastErrorStyle });
    }
  };

  const handleReset = () => { setAppState("idle"); setPlatform(null); setError(null); setFetched(null); setDownloading({}); };

  return (
    <div className="download-engine">
      <AnimatePresence mode="wait">
        {appState !== "results" && (
          <motion.div key="input" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
            <InputStage onSubmit={handleSubmit} isLoading={appState === "loading"} error={error} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {appState === "results" && platform && fetched && (
          <ResultsArea platform={platform} videoData={fetched.data} onDownload={handleDownload} onReset={handleReset} downloading={downloading} pageUrl={fetched.pageUrl} />
        )}
      </AnimatePresence>
    </div>
  );
}