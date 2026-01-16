import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP from headers
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') ||
                     '8.8.8.8'; // fallback for testing

    console.log('Client IP:', clientIP);

    // Use ip-api.com for free geolocation (no API key needed)
    const geoResponse = await fetch(`http://ip-api.com/json/${clientIP}?fields=status,country,city,lat,lon`);
    
    if (!geoResponse.ok) {
      throw new Error('Failed to fetch geolocation');
    }

    const geoData = await geoResponse.json();
    console.log('Geo data:', geoData);

    if (geoData.status === 'fail') {
      // Return default location (Romania) if geolocation fails
      return new Response(
        JSON.stringify({
          latitude: 45.9432,
          longitude: 24.9668,
          country: 'Romania',
          city: 'Unknown'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        latitude: geoData.lat,
        longitude: geoData.lon,
        country: geoData.country,
        city: geoData.city
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error getting location:', error);
    
    // Return default location on error
    return new Response(
      JSON.stringify({
        latitude: 45.9432,
        longitude: 24.9668,
        country: 'Romania',
        city: 'Unknown'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
