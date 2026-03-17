// lib/api.ts
// API client for communicating with FreeReelsDownloader backend

// Priority:
// 1. Explicit env var (always set this in Vercel: REACT_APP_API_URL)
// 2. If running on Railway itself (rare — frontend co-deployed with backend)
// 3. Local dev fallback — NEVER reached in production if env var is set
// Vite exposes env vars via import.meta.env with VITE_ prefix.
// Set VITE_API_URL in Vercel: Settings → Environment Variables
const BASE_URL = (() => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL as string;
  if (typeof window !== 'undefined') {
    const h = window.location.hostname;
    if (h.includes('railway.app')) return 'https://instatube-api-production.up.railway.app';
    if (h === 'localhost' || h === '127.0.0.1') return 'http://localhost:8080';
    console.error('[api] VITE_API_URL is not set! Set it in Vercel: Settings → Environment Variables → VITE_API_URL');
  }
  return 'http://localhost:8080';
})();

export interface VideoResource {
  url: string;
  quality?: string;
  format?: string;
  sizeMB?: number;
  directUrl?: boolean;
}

export interface VideoData {
  title?: string;
  duration?: number;
  thumbnail?: string;
  videos: VideoResource[];
  audios: VideoResource[];
}

export interface ApiResponse<T> {
  success: boolean;
  error?: string;
  data?: T;
}

export function getApiBase(): string {
  return BASE_URL;
}

// ─────────────────────────────────────────────────────────
// fetchVideoData — unchanged, works correctly
// ─────────────────────────────────────────────────────────
export async function fetchVideoData(url: string): Promise<ApiResponse<VideoData>> {
  try {
    const response = await fetch(`${BASE_URL}/api/video-info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      return { success: false, error: `Server error: ${response.status}` };
    }

    const result = await response.json();

    if (!result.success) {
      return { success: false, error: result.error || 'Failed to fetch video data' };
    }

    const videoData: VideoData = {
      title: result.data.title,
      duration: result.data.duration,
      thumbnail: result.data.thumbnail,
      videos: (result.data.videos || []).map((v: any) => ({
        url: v.url || '',
        quality: v.quality,
        format: v.format,
        sizeMB: v.sizeMB,
        directUrl: v.directUrl,
      })),
      audios: (result.data.audios || []).map((a: any) => ({
        url: a.url || '',
        quality: a.quality,
        format: a.format,
        sizeMB: a.sizeMB,
        directUrl: a.directUrl,
      })),
    };

    return { success: true, data: videoData };
  } catch (error) {
    console.error('[api] fetchVideoData error:', error);
    return { success: false, error: 'Network error. Please check your connection.' };
  }
}

// ─────────────────────────────────────────────────────────
// downloadVideoWithAudio — Method A
// Sends pre-resolved CDN video + audio URLs to the backend.
// Backend uses ffmpeg to merge them and streams back one MP4.
//
// Use this when you already have videoUrl + audioUrl from
// the /api/video-info response.
// ─────────────────────────────────────────────────────────
export async function downloadVideoWithAudio(
  videoUrl: string,
  audioUrl: string,
  title: string,
  platform?: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('[api] downloadVideoWithAudio — sending to /api/download');

    const response = await fetch(`${BASE_URL}/api/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoUrl, audioUrl, title, platform }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { success: false, error: errorData.error || `Server error: ${response.status}` };
    }

    await saveBlobFromResponse(response, `${sanitizeFilename(title)}.mp4`);
    return { success: true };
  } catch (error) {
    console.error('[api] downloadVideoWithAudio error:', error);
    return { success: false, error: 'Download failed. Please try again.' };
  }
}

// ─────────────────────────────────────────────────────────
// downloadDirect — Method B (RECOMMENDED)
// Sends the original page URL + quality to the backend.
// Backend uses yt-dlp to fetch + merge everything itself.
//
// More reliable than Method A because:
//  - CDN URLs from /api/video-info can expire before download
//  - yt-dlp handles format selection and muxing natively
//
// quality: "1080" | "720" | "480" | "360" | undefined (= best)
// type:    "video" | "audio"
// ─────────────────────────────────────────────────────────
export async function downloadDirect(
  pageUrl: string,
  title: string,
  quality?: string,
  type: 'video' | 'audio' = 'video',
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log(`[api] downloadDirect — quality=${quality} type=${type} url=${pageUrl.slice(0, 60)}`);

    const response = await fetch(`${BASE_URL}/api/download-direct`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: pageUrl, quality, type, title }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { success: false, error: errorData.error || `Server error: ${response.status}` };
    }

    const ext = type === 'audio' ? 'm4a' : 'mp4';
    await saveBlobFromResponse(response, `${sanitizeFilename(title)}.${ext}`);
    return { success: true };
  } catch (error) {
    console.error('[api] downloadDirect error:', error);
    return { success: false, error: 'Download failed. Please try again.' };
  }
}

// ─────────────────────────────────────────────────────────
// triggerDownload — AUDIO-ONLY helper
// Only use this for audio-only streams where the single URL
// already contains audio (e.g. Instagram audio-only format).
// NEVER call this with a video CDN URL — it will be silent.
// ─────────────────────────────────────────────────────────
export async function triggerDownload(
  downloadUrl: string,
  filename: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    console.warn('[api] triggerDownload called — only use for audio-only streams');
    const response = await fetch(downloadUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    await saveBlobFromResponse(response, filename);
    return { success: true };
  } catch (error) {
    console.error('[api] triggerDownload error:', error);
    return { success: false, error: 'Download failed. Please try again.' };
  }
}

// ─────────────────────────────────────────────────────────
// Internal helpers
// ─────────────────────────────────────────────────────────

async function saveBlobFromResponse(response: Response, filename: string): Promise<void> {
  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 10_000);
}

function sanitizeFilename(title: string): string {
  return (title || 'video')
    .replace(/[^\w\s\-().]/g, '')
    .replace(/\s+/g, '_')
    .slice(0, 100) || 'video';
}
