export interface VideoResource {
  format: string;
  quality: string | null;
  url: string;
  sizeMB: number;
}

export interface VideoData {
  title: string | null;
  thumbnail: string | null;
  duration: number | null;
  videos: VideoResource[];
  audios: VideoResource[];
}

export interface VideoResponse {
  success: boolean;
  data?: VideoData;
  error?: string;
}

// Uses VITE_API_URL in production (set in Vercel env vars)
// Falls back to Railway URL if not set
const BASE_URL = import.meta.env.VITE_API_URL || 'https://instatube-api-production.up.railway.app';

export async function fetchVideoData(url: string): Promise<VideoResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/video-info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    const data = await response.json() as VideoResponse;

    // Fix relative URLs — turn /api/download?... into absolute URLs
    if (data.success && data.data) {
      data.data.videos = data.data.videos.map(v => ({
        ...v,
        url: v.url.startsWith('/') ? `${BASE_URL}${v.url}` : v.url,
      }));
      data.data.audios = data.data.audios.map(a => ({
        ...a,
        url: a.url.startsWith('/') ? `${BASE_URL}${a.url}` : a.url,
      }));
    }

    return data;
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
    };
  }
}