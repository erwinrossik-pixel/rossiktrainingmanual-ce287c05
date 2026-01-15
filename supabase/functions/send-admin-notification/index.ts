import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: "critical_change" | "job_completed" | "job_failed" | "ai_kpi_analysis";
  data: {
    // For critical_change
    change_title?: string;
    source_name?: string;
    severity?: string;
    summary?: string;
    // For job_completed/job_failed
    job_id?: string;
    chapters_completed?: number;
    chapters_failed?: number;
    duration?: string;
    error_message?: string;
    // For ai_kpi_analysis
    recommendations_count?: number;
    critical_count?: number;
    high_count?: number;
    problematic_chapters?: number;
    analyzed_at?: string;
    priority_actions?: string[];
  };
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ success: false, error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(resendApiKey);
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { type, data }: NotificationRequest = await req.json();

    console.log(`Processing notification: type=${type}`, data);

    // Fetch admin emails from profiles
    const { data: admins, error: adminError } = await supabase
      .from("profiles")
      .select("email")
      .eq("role", "admin");

    if (adminError) {
      console.error("Error fetching admin emails:", adminError);
      throw new Error("Failed to fetch admin emails");
    }

    if (!admins || admins.length === 0) {
      console.log("No admin users found to notify");
      return new Response(
        JSON.stringify({ success: true, message: "No admins to notify" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const adminEmails = admins.map((a) => a.email).filter(Boolean);
    console.log(`Found ${adminEmails.length} admin(s) to notify`);

    let subject = "";
    let htmlContent = "";

    switch (type) {
      case "critical_change":
        subject = `🚨 CRITICAL: Schimbare detectată - ${data.change_title}`;
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🚨 Schimbare CRITICĂ Detectată</h1>
            </div>
            <div style="background: #fef2f2; padding: 20px; border: 1px solid #fecaca;">
              <h2 style="color: #991b1b; margin-top: 0;">${data.change_title}</h2>
              <p style="color: #7f1d1d;"><strong>Sursă:</strong> ${data.source_name}</p>
              <p style="color: #7f1d1d;"><strong>Severitate:</strong> ${data.severity?.toUpperCase()}</p>
              <div style="background: white; padding: 15px; border-radius: 6px; margin-top: 15px;">
                <p style="color: #374151; margin: 0;">${data.summary}</p>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                Accesează Admin Dashboard pentru a revizui și aproba modificările.
              </p>
            </div>
          </div>
        `;
        break;

      case "job_completed":
        subject = `✅ Job regenerare finalizat - ${data.chapters_completed} capitole actualizate`;
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">✅ Regenerare Completă</h1>
            </div>
            <div style="background: #ecfdf5; padding: 20px; border: 1px solid #a7f3d0;">
              <h2 style="color: #065f46; margin-top: 0;">Job finalizat cu succes!</h2>
              <table style="width: 100%; margin: 20px 0;">
                <tr>
                  <td style="background: white; padding: 15px 25px; border-radius: 8px; text-align: center; width: 50%;">
                    <p style="font-size: 32px; font-weight: bold; color: #059669; margin: 0;">${data.chapters_completed}</p>
                    <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Capitole actualizate</p>
                  </td>
                  ${data.chapters_failed && data.chapters_failed > 0 ? `
                  <td style="background: white; padding: 15px 25px; border-radius: 8px; text-align: center; width: 50%;">
                    <p style="font-size: 32px; font-weight: bold; color: #dc2626; margin: 0;">${data.chapters_failed}</p>
                    <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Erori</p>
                  </td>
                  ` : ''}
                </tr>
              </table>
              <p style="color: #065f46;"><strong>Durată:</strong> ${data.duration || 'N/A'}</p>
            </div>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                Verifică actualizările în Admin Dashboard.
              </p>
            </div>
          </div>
        `;
        break;

      case "job_failed":
        subject = `❌ Job regenerare eșuat - Necesită atenție`;
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">❌ Regenerare Eșuată</h1>
            </div>
            <div style="background: #fef2f2; padding: 20px; border: 1px solid #fecaca;">
              <h2 style="color: #991b1b; margin-top: 0;">Job-ul a întâmpinat erori</h2>
              <p style="color: #7f1d1d;"><strong>Job ID:</strong> ${data.job_id}</p>
              ${data.error_message ? `
              <div style="background: #1f2937; padding: 15px; border-radius: 6px; margin-top: 15px;">
                <code style="color: #f87171; font-family: monospace; font-size: 13px;">${data.error_message}</code>
              </div>
              ` : ''}
              <div style="margin-top: 15px;">
                <p style="color: #7f1d1d;"><strong>Completate:</strong> ${data.chapters_completed || 0}</p>
                <p style="color: #7f1d1d;"><strong>Eșuate:</strong> ${data.chapters_failed || 0}</p>
              </div>
            </div>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                Verifică log-urile în Admin Dashboard pentru detalii.
              </p>
            </div>
          </div>
        `;
        break;

      case "ai_kpi_analysis":
        const hasCritical = (data.critical_count || 0) > 0;
        const hasHigh = (data.high_count || 0) > 0;
        const emoji = hasCritical ? '🚨' : hasHigh ? '⚠️' : '📊';
        subject = `${emoji} Analiză AI KPI - ${data.recommendations_count} recomandări noi`;
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🤖 Analiză AI Learning KPI</h1>
            </div>
            <div style="background: #f5f3ff; padding: 20px; border: 1px solid #c4b5fd;">
              <h2 style="color: #5b21b6; margin-top: 0;">Raport Zilnic de Analiză</h2>
              
              <table style="width: 100%; margin: 20px 0; border-spacing: 10px;">
                <tr>
                  <td style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                    <p style="font-size: 28px; font-weight: bold; color: #8b5cf6; margin: 0;">${data.recommendations_count || 0}</p>
                    <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 13px;">Recomandări Noi</p>
                  </td>
                  <td style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                    <p style="font-size: 28px; font-weight: bold; color: #dc2626; margin: 0;">${data.critical_count || 0}</p>
                    <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 13px;">Critical</p>
                  </td>
                  <td style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                    <p style="font-size: 28px; font-weight: bold; color: #f97316; margin: 0;">${data.high_count || 0}</p>
                    <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 13px;">High</p>
                  </td>
                </tr>
              </table>

              <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p style="color: #374151; margin: 0 0 10px 0;"><strong>📚 Capitole Problematice:</strong> ${data.problematic_chapters || 0}</p>
                <p style="color: #6b7280; margin: 0; font-size: 13px;">Analiză efectuată: ${data.analyzed_at ? new Date(data.analyzed_at).toLocaleString('ro-RO') : 'N/A'}</p>
              </div>

              ${data.priority_actions && data.priority_actions.length > 0 ? `
              <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #f59e0b;">
                <p style="color: #92400e; margin: 0 0 10px 0; font-weight: bold;">⚡ Acțiuni Prioritare:</p>
                <ul style="color: #78350f; margin: 0; padding-left: 20px;">
                  ${data.priority_actions.slice(0, 5).map(action => `<li style="margin-bottom: 5px;">${action}</li>`).join('')}
                </ul>
              </div>
              ` : ''}
            </div>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                Accesează <strong>Admin Dashboard → Learning KPI → AI Feedback</strong> pentru detalii complete.
              </p>
            </div>
          </div>
        `;
        break;

      default:
        throw new Error(`Unknown notification type: ${type}`);
    }

    // Send email to all admins
    const emailPromises = adminEmails.map((email) =>
      resend.emails.send({
        from: "Rossik Training <onboarding@resend.dev>",
        to: [email],
        subject,
        html: htmlContent,
      })
    );

    const results = await Promise.allSettled(emailPromises);
    
    const successful = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;

    console.log(`Emails sent: ${successful} successful, ${failed} failed`);

    // Log any failures
    results.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(`Failed to send to ${adminEmails[index]}:`, result.reason);
      }
    });

    return new Response(
      JSON.stringify({
        success: true,
        sent: successful,
        failed,
        message: `Notificări trimise: ${successful}/${adminEmails.length}`,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-admin-notification:", errorMessage);
    
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
