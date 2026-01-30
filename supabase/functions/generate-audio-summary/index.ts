import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { chapterId, language = 'ro' } = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get audio summary content for this chapter
    const { data: mediaData, error: mediaError } = await supabase
      .from('chapter_media')
      .select('*')
      .eq('chapter_id', chapterId)
      .eq('media_type', 'audio_summary')
      .eq('language', language)
      .eq('is_active', true)
      .single();

    if (mediaError || !mediaData) {
      return new Response(
        JSON.stringify({ error: 'No audio summary found for this chapter' }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const content = mediaData.content as { text: string; voice?: string };
    const text = content.text;

    // Check cache first
    const textHash = await hashText(text);
    const { data: cached } = await supabase
      .from('audio_cache')
      .select('*')
      .eq('chapter_id', chapterId)
      .eq('language', language)
      .eq('text_hash', textHash)
      .single();

    if (cached?.audio_url) {
      return new Response(
        JSON.stringify({ 
          audioUrl: cached.audio_url, 
          cached: true,
          duration: cached.duration_seconds 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // For now, return the text for browser TTS (Web Speech API)
    // In production with ELEVENLABS_API_KEY, generate real audio
    return new Response(
      JSON.stringify({ 
        text,
        title: mediaData.title,
        duration: mediaData.duration_estimate,
        useBrowserTTS: true
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

async function hashText(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}
