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

const BASE_URL = import.meta.env.VITE_API_URL || 'https://instatube-api-production.up.railway.app';

// Friendly fallback messages for frontend network errors
function getFriendlyError(err: unknown): string {
  const msg = err instanceof Error ? err.message.toLowerCase() : '';
  if (msg.includes('failed to fetch') || msg.includes('networkerror') || msg.includes('network'))
    return 'Unable to connect. Please check your internet connection and try again.';
  if (msg.includes('timeout'))
    return 'The request timed out. Please try again.';
  return 'Something went wrong. Please try again in a moment.';
}

export async function fetchVideoData(url: string): Promise<VideoResponse> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 35000); // 35s timeout

    const response = await fetch(`${BASE_URL}/api/video-info`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Handle non-OK responses gracefully
    if (!response.ok) {
      try {
        const data = await response.json() as VideoResponse;
        return { success: false, error: data.error || 'Something went wrong. Please try again.' };
      } catch {
        return { success: false, error: 'Our servers are temporarily busy. Please try again in a moment.' };
      }
    }

    const data = await response.json() as VideoResponse;

    // Fix relative URLs
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
    if (err instanceof Error && err.name === 'AbortError')
      return { success: false, error: 'The request timed out. Please try again.' };
    return { success: false, error: getFriendlyError(err) };
  }
}