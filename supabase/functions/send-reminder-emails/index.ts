import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ReminderRequest {
  type: 'certificate_expiry' | 'training_reminder' | 'inactive_user';
}

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { type }: ReminderRequest = await req.json();

    let emailsSent = 0;
    let errors: string[] = [];

    if (type === 'certificate_expiry') {
      // Find certificates expiring in 30 days
      const thirtyDaysFromNow = new Date();
      thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
      
      const { data: expiringCerts } = await supabase
        .from('certificates')
        .select('*, profiles!inner(email, first_name, last_name)')
        .lte('expires_at', thirtyDaysFromNow.toISOString())
        .gte('expires_at', new Date().toISOString())
        .eq('is_revoked', false);

      for (const cert of expiringCerts || []) {
        const profile = cert.profiles as any;
        const expiresDate = new Date(cert.expires_at).toLocaleDateString('ro-RO');
        
        try {
          await resend.emails.send({
            from: "Rossik Training <noreply@rossik.ro>",
            to: [profile.email],
            subject: `⚠️ Certificatul tău expiră pe ${expiresDate}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #3b82f6;">Certificat în curs de expirare</h1>
                <p>Bună, ${profile.first_name || 'Cursant'}!</p>
                <p>Certificatul tău <strong>${cert.certificate_code}</strong> va expira pe <strong>${expiresDate}</strong>.</p>
                <p>Pentru a-ți menține certificarea activă, te rugăm să reiei training-ul și să completezi din nou evaluările.</p>
                <div style="margin: 30px 0; padding: 20px; background: #f0f9ff; border-radius: 8px;">
                  <p style="margin: 0;"><strong>Cod certificat:</strong> ${cert.certificate_code}</p>
                  <p style="margin: 8px 0 0;"><strong>Data expirării:</strong> ${expiresDate}</p>
                </div>
                <a href="https://rossiktrainingmanual.lovable.app" style="display: inline-block; padding: 12px 24px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px;">Accesează Platforma</a>
                <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">Cu respect,<br>Echipa Rossik Training</p>
              </div>
            `,
          });
          emailsSent++;
          
          // Create notification in app
          await supabase.from('user_notifications').insert({
            user_id: cert.user_id,
            title: '⚠️ Certificat în expirare',
            message: `Certificatul ${cert.certificate_code} expiră pe ${expiresDate}. Reînnoiește-l!`,
            type: 'warning',
            icon: '📜',
            link: '/profile'
          });
        } catch (err: unknown) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          errors.push(`Failed for ${profile.email}: ${errorMessage}`);
        }
      }
    }

    if (type === 'training_reminder') {
      // Find users who haven't trained in 3+ days
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

      const { data: inactiveUsers } = await supabase
        .from('user_gamification')
        .select('user_id, last_activity_date, streak_days')
        .lt('last_activity_date', threeDaysAgo.toISOString());

      for (const gam of inactiveUsers || []) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('email, first_name')
          .eq('id', gam.user_id)
          .single();

        if (!profile) continue;

        const lastActivity = gam.last_activity_date 
          ? new Date(gam.last_activity_date).toLocaleDateString('ro-RO')
          : 'necunoscut';

        try {
          await resend.emails.send({
            from: "Rossik Training <noreply@rossik.ro>",
            to: [profile.email],
            subject: "🔥 Nu-ți pierde streak-ul! Revino la training",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #f59e0b;">Ne este dor de tine! 🎯</h1>
                <p>Bună, ${profile.first_name || 'Cursant'}!</p>
                <p>Am observat că nu ai mai accesat platforma de training de ceva timp.</p>
                <p><strong>Ultima activitate:</strong> ${lastActivity}</p>
                ${gam.streak_days > 0 ? `<p>Ai avut un streak de <strong>${gam.streak_days} zile</strong> - nu-l pierde!</p>` : ''}
                <p>Doar 10-15 minute pe zi pot face diferența în cariera ta.</p>
                <div style="margin: 30px 0;">
                  <a href="https://rossiktrainingmanual.lovable.app" style="display: inline-block; padding: 12px 24px; background: #f59e0b; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Continuă Training-ul →</a>
                </div>
                <p style="color: #6b7280; font-size: 14px;">Cu respect,<br>Echipa Rossik Training</p>
              </div>
            `,
          });
          emailsSent++;

          // Create notification
          await supabase.from('user_notifications').insert({
            user_id: gam.user_id,
            title: '🔥 Revino la training!',
            message: 'Nu-ți pierde progresul. Doar 10 minute pe zi fac diferența!',
            type: 'reminder',
            icon: '📚'
          });
        } catch (err: unknown) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          errors.push(`Failed for ${profile.email}: ${errorMessage}`);
        }
      }
    }

    // Log the job execution
    await supabase.from('cron_job_logs').insert({
      job_name: `send-reminder-emails-${type}`,
      status: errors.length > 0 ? 'partial' : 'completed',
      items_processed: emailsSent,
      items_failed: errors.length,
      execution_details: { errors },
      completed_at: new Date().toISOString()
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailsSent, 
        errors: errors.length,
        details: errors.slice(0, 5) // First 5 errors only
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-reminder-emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
