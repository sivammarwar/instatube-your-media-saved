// lib/api.ts
// API client for communicating with FreeReelsDownloader backend

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

// ─────────────────────────────────────────────────────────
// EXISTING INTERFACES (unchanged)
// ─────────────────────────────────────────────────────────
export interface VideoResource {
  url: string;
  quality?: string;
  format?: string;
  sizeMB?: number;
  directUrl?: boolean;
  audioUrl?: string; // attached by server for video-only streams
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

/** Called repeatedly during download with bytes received and total (if known) */
export type ProgressCallback = (received: number, total: number | null) => void;

// ─────────────────────────────────────────────────────────
// NEW INTERFACES — Instagram public profile
// ─────────────────────────────────────────────────────────

/** A single video quality option for an Instagram media item */
export interface IgVideoOption {
  quality: string;        // e.g. "1080p", "720p", "HD"
  url: string;            // CDN video URL
  sizeMB: number;
  audioUrl: string | null; // non-null when video stream has no audio (needs merge)
}

/** A single image option (for photo posts / carousel stills) */
export interface IgImageOption {
  url: string;
  ext: string;            // "jpg" | "png" | "webp"
  sizeMB: number;
}

/**
 * One normalised media item returned by /api/instagram-profile.
 * Could be a single post, a reel, a story slide, or a carousel post.
 */
export interface IgMediaItem {
  id: string | null;
  title: string;
  description: string | null;
  thumbnail: string | null;
  duration: number;       // seconds; 0 for images
  timestamp: string | null;
  mediaType: 'post' | 'story' | 'carousel';
  uploader: string | null;
  videos: IgVideoOption[];
  images: IgImageOption[];
  directUrl: string | null; // fallback single URL (some stories)
  hasAudio: boolean;
}

/**
 * Top-level response data from /api/instagram-profile.
 */
export interface IgProfileData {
  type: 'post' | 'reel' | 'story' | 'stories_batch' | 'highlight' | 'profile';
  username: string | null;
  totalFound: number;     // total items available (may exceed items.length)
  items: IgMediaItem[];
}

export interface IgProfileResponse extends ApiResponse<IgProfileData> {
  cached?: boolean;
}

// ─────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────
export function getApiBase(): string {
  return BASE_URL;
}

function sanitizeFilename(title: string): string {
  return (title || 'video')
    .replace(/[^\w\s\-().]/g, '')
    .replace(/\s+/g, '_')
    .slice(0, 100) || 'video';
}

function triggerBlobSave(blob: Blob, filename: string): void {
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(blobUrl), 30_000);
}

// ─────────────────────────────────────────────────────────
// CORE: streamingDownload
//
// Streams the response body chunk-by-chunk into a Blob,
// reporting progress as bytes arrive.
//
// For browsers that support showSaveFilePicker (Chrome 86+),
// we stream directly to disk — zero memory spike.
// For others we fall back to the classic blob URL trick,
// but still show accurate progress while downloading.
// ─────────────────────────────────────────────────────────
async function streamingDownload(
  response: Response,
  filename: string,
  onProgress: ProgressCallback,
): Promise<void> {
  const contentLength = response.headers.get('Content-Length');
  const total = contentLength ? parseInt(contentLength, 10) : null;

  // ── Path A: File System Access API (Chrome 86+, Edge 86+) ──
  if (
    typeof window !== 'undefined' &&
    'showSaveFilePicker' in window &&
    response.body
  ) {
    try {
      const ext = filename.split('.').pop() || 'mp4';
      const mimeMap: Record<string, string> = {
        mp4: 'video/mp4', m4a: 'audio/mp4', mp3: 'audio/mpeg',
        webm: 'video/webm', jpg: 'image/jpeg', png: 'image/png',
      };
      const fileHandle = await (window as any).showSaveFilePicker({
        suggestedName: filename,
        types: [{ description: 'Media file', accept: { [mimeMap[ext] || 'video/mp4']: [`.${ext}`] } }],
      });
      const writable = await fileHandle.createWritable();
      const reader = response.body.getReader();
      let received = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        await writable.write(value);
        received += value.byteLength;
        onProgress(received, total);
      }

      await writable.close();
      onProgress(total ?? received, total ?? received);
      return;
    } catch (err: any) {
      if (err?.name === 'AbortError') throw err;
      console.warn('[api] showSaveFilePicker failed, falling back to blob:', err?.message);
    }
  }

  // ── Path B: Streaming into memory with progress, then blob URL ──
  if (response.body) {
    const reader = response.body.getReader();
    const chunks: Uint8Array[] = [];
    let received = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.byteLength;
      onProgress(received, total);
    }

    onProgress(total ?? received, total ?? received);
    const blob = new Blob(chunks);
    triggerBlobSave(blob, filename);
    return;
  }

  // ── Path C: Last resort ──
  const blob = await response.blob();
  onProgress(blob.size, blob.size);
  triggerBlobSave(blob, filename);
}

// ─────────────────────────────────────────────────────────
// fetchVideoData  (existing — unchanged)
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
      title:    result.data.title,
      duration: result.data.duration,
      thumbnail: result.data.thumbnail,
      videos: (result.data.videos || []).map((v: any) => ({
        url:      v.url || '',
        quality:  v.quality,
        format:   v.format,
        sizeMB:   v.sizeMB,
        directUrl: v.directUrl,
        audioUrl: v.audioUrl || null,
      })),
      audios: (result.data.audios || []).map((a: any) => ({
        url:      a.url || '',
        quality:  a.quality,
        format:   a.format,
        sizeMB:   a.sizeMB,
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
// fetchInstagramProfile  (NEW)
//
// Fetches stories / posts / highlights / profile posts for a
// public Instagram account.
//
// Usage examples:
//   // All current stories for @natgeo
//   fetchInstagramProfile({ username: 'natgeo', type: 'stories' })
//
//   // A specific highlight
//   fetchInstagramProfile({ url: 'https://www.instagram.com/highlights/12345/' })
//
//   // A single post
//   fetchInstagramProfile({ url: 'https://www.instagram.com/p/ABC123/' })
//
//   // 12 most recent posts from a profile
//   fetchInstagramProfile({ username: 'natgeo', type: 'profile' })
// ─────────────────────────────────────────────────────────
export async function fetchInstagramProfile(params: {
  url?: string;
  username?: string;
  type?: 'post' | 'reel' | 'story' | 'stories_batch' | 'stories' | 'highlight' | 'profile';
}): Promise<IgProfileResponse> {
  try {
    const query = new URLSearchParams();
    if (params.url)      query.set('url',      params.url);
    if (params.username) query.set('username', params.username);
    if (params.type)     query.set('type',     params.type);

    const response = await fetch(`${BASE_URL}/api/instagram-profile?${query.toString()}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return { success: false, error: err.error || `Server error: ${response.status}` };
    }

    const result = await response.json();
    if (!result.success) {
      return { success: false, error: result.error || 'Failed to fetch Instagram profile' };
    }

    // Normalise items so callers get typed objects with sensible defaults
    const data: IgProfileData = {
      type:       result.data.type,
      username:   result.data.username ?? null,
      totalFound: result.data.totalFound ?? result.data.items?.length ?? 0,
      items: (result.data.items || []).map((item: any): IgMediaItem => ({
        id:          item.id          ?? null,
        title:       item.title       ?? 'Instagram media',
        description: item.description ?? null,
        thumbnail:   item.thumbnail   ?? null,
        duration:    item.duration    ?? 0,
        timestamp:   item.timestamp   ?? null,
        mediaType:   item.mediaType   ?? 'post',
        uploader:    item.uploader    ?? null,
        hasAudio:    item.hasAudio    ?? false,
        directUrl:   item.directUrl   ?? null,
        videos: (item.videos || []).map((v: any): IgVideoOption => ({
          quality:  v.quality  ?? 'HD',
          url:      v.url      ?? '',
          sizeMB:   v.sizeMB   ?? 0,
          audioUrl: v.audioUrl ?? null,
        })),
        images: (item.images || []).map((img: any): IgImageOption => ({
          url:    img.url    ?? '',
          ext:    img.ext    ?? 'jpg',
          sizeMB: img.sizeMB ?? 0,
        })),
      })),
    };

    return { success: true, cached: result.cached ?? false, data };
  } catch (error) {
    console.error('[api] fetchInstagramProfile error:', error);
    return { success: false, error: 'Network error. Please check your connection.' };
  }
}

// ─────────────────────────────────────────────────────────
// downloadInstagramMedia  (NEW)
//
// Downloads a single resolved Instagram media item.
// Picks the right strategy automatically:
//   • image                 → CDN proxy via /api/instagram-download
//   • muxed video           → CDN proxy via /api/instagram-download
//   • video-only + audioUrl → ffmpeg merge  via /api/instagram-download
//   • audio                 → CDN proxy via /api/instagram-download
//
// Usage:
//   // Best video quality of a post
//   const item = profileData.items[0];
//   const best = item.videos[0];  // already sorted best-first
//   await downloadInstagramMedia({
//     url:      best.url,
//     audioUrl: best.audioUrl ?? undefined,
//     title:    item.title,
//     type:     'video',
//     onProgress: (recv, total) => setProgress(recv / (total ?? recv) * 100),
//   });
//
//   // First image of a photo post
//   const img = item.images[0];
//   await downloadInstagramMedia({ url: img.url, title: item.title, type: 'image' });
// ─────────────────────────────────────────────────────────
export async function downloadInstagramMedia(params: {
  url: string;
  audioUrl?: string;
  title?: string;
  type?: 'video' | 'audio' | 'image';
  onProgress?: ProgressCallback;
}): Promise<{ success: boolean; error?: string }> {
  const { url, audioUrl, title = 'instagram_media', type = 'video', onProgress } = params;

  try {
    console.log(`[api] downloadInstagramMedia type=${type} audioUrl=${audioUrl ? 'yes' : 'no'}`);

    const response = await fetch(`${BASE_URL}/api/instagram-download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, audioUrl: audioUrl ?? null, title, type }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return { success: false, error: err.error || `Server error: ${response.status}` };
    }

    const ext = type === 'image' ? 'jpg' : type === 'audio' ? 'm4a' : 'mp4';
    const filename = `${sanitizeFilename(title)}.${ext}`;

    await streamingDownload(response, filename, onProgress ?? (() => {}));
    return { success: true };
  } catch (err: any) {
    if (err?.name === 'AbortError') return { success: false, error: 'Download cancelled.' };
    console.error('[api] downloadInstagramMedia error:', err);
    return { success: false, error: 'Download failed. Please try again.' };
  }
}

// ─────────────────────────────────────────────────────────
// downloadVideoWithAudio — Method A  (existing — unchanged)
// ─────────────────────────────────────────────────────────
export async function downloadVideoWithAudio(
  videoUrl: string,
  audioUrl: string,
  title: string,
  platform?: string,
  onProgress?: ProgressCallback,
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('[api] downloadVideoWithAudio — streaming merge');

    const response = await fetch(`${BASE_URL}/api/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoUrl, audioUrl, title, platform }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { success: false, error: errorData.error || `Server error: ${response.status}` };
    }

    await streamingDownload(
      response,
      `${sanitizeFilename(title)}.mp4`,
      onProgress ?? (() => {}),
    );
    return { success: true };
  } catch (err: any) {
    if (err?.name === 'AbortError') return { success: false, error: 'Download cancelled.' };
    console.error('[api] downloadVideoWithAudio error:', err);
    return { success: false, error: 'Download failed. Please try again.' };
  }
}

// ─────────────────────────────────────────────────────────
// downloadDirect — Method B  (existing — unchanged)
// ─────────────────────────────────────────────────────────
export async function downloadDirect(
  pageUrl: string,
  title: string,
  quality?: string,
  type: 'video' | 'audio' = 'video',
  onProgress?: ProgressCallback,
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log(`[api] downloadDirect — quality=${quality} type=${type}`);

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
    await streamingDownload(
      response,
      `${sanitizeFilename(title)}.${ext}`,
      onProgress ?? (() => {}),
    );
    return { success: true };
  } catch (err: any) {
    if (err?.name === 'AbortError') return { success: false, error: 'Download cancelled.' };
    console.error('[api] downloadDirect error:', err);
    return { success: false, error: 'Download failed. Please try again.' };
  }
}

// ─────────────────────────────────────────────────────────
// triggerDownload — audio-only helper  (existing — unchanged)
// ─────────────────────────────────────────────────────────
export async function triggerDownload(
  downloadUrl: string,
  filename: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(downloadUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    triggerBlobSave(blob, filename);
    return { success: true };
  } catch (error) {
    console.error('[api] triggerDownload error:', error);
    return { success: false, error: 'Download failed. Please try again.' };
  }
}