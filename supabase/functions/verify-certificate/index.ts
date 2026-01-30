import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    // Support both 'code' and 'certificate_code' parameters
    const code = body.code || body.certificate_code;

    if (!code || typeof code !== "string") {
      return new Response(
        JSON.stringify({ error: "Certificate code is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Query certificate by code using service role (bypasses RLS)
    const { data: certificate, error } = await supabase
      .from("certificates")
      .select("certificate_code, trainee_name, issued_at, expires_at, is_revoked, revoke_reason, chapters_completed, quizzes_passed, average_score, total_training_hours")
      .eq("certificate_code", code.toUpperCase().trim())
      .single();

    if (error || !certificate) {
      return new Response(
        JSON.stringify({ 
          status: "NOT_FOUND",
          message: "No certificate found with this code"
        }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Determine certificate status
    let status: "VALID" | "EXPIRED" | "REVOKED";
    let message: string;

    if (certificate.is_revoked) {
      status = "REVOKED";
      message = certificate.revoke_reason || "This certificate has been revoked";
    } else if (new Date(certificate.expires_at) < new Date()) {
      status = "EXPIRED";
      message = "This certificate has expired";
    } else {
      status = "VALID";
      message = "This certificate is valid and authentic";
    }

    // Return only necessary public information
    return new Response(
      JSON.stringify({
        status,
        message,
        certificate: {
          code: certificate.certificate_code,
          holder_name: certificate.trainee_name,
          issued_at: certificate.issued_at,
          expires_at: certificate.expires_at,
          chapters_completed: certificate.chapters_completed,
          quizzes_passed: certificate.quizzes_passed,
          average_score: certificate.average_score,
          training_hours: certificate.total_training_hours
        }
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error verifying certificate:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
