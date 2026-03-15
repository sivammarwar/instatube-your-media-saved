const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();

    if (!url || typeof url !== 'string') {
      return new Response(
        JSON.stringify({ success: false, error: 'A valid URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = new URLSearchParams({
      auth: '20250901majwlqo',
      domain: 'api-ak.vidssave.com',
      origin: 'cache',
      link: url,
    });

    const response = await fetch('https://api.vidssave.com/api/contentsite_api/media/parse', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'content-type': 'application/x-www-form-urlencoded',
        'referer': 'https://vidssave.com/',
      },
      body: body.toString(),
    });

    const data = await response.json();

    if (!data || data.status !== 1 || !data.data) {
      console.error('Vidssave response error:', JSON.stringify(data));
      return new Response(
        JSON.stringify({ success: false, error: 'Could not fetch video. The link may be invalid or the content is private.' }),
        { status: 422, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const video = data.data;
    const videos: Array<{ format: string; quality: string | null; url: string; sizeMB: number }> = [];
    const audios: Array<{ format: string; quality: string | null; url: string; sizeMB: number }> = [];

    (video.resources || []).forEach((r: any) => {
      const item = {
        format: r.format,
        quality: r.quality || null,
        url: r.download_url,
        sizeMB: +(r.size / 1024 / 1024).toFixed(2),
      };
      if (r.type === 'video') videos.push(item);
      if (r.type === 'audio') audios.push(item);
    });

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          title: video.title || null,
          thumbnail: video.thumbnail || null,
          duration: video.duration || null,
          videos,
          audios,
        },
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Edge function error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
