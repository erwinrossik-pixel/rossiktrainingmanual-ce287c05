import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface RetentionUser {
  user_id: string;
  email: string;
  first_name: string | null;
  last_active_at: string;
  days_inactive: number;
  engagement_score: number;
  risk_level: string;
  status: string;
  notifications_sent: number;
  last_notification_sent_at: string | null;
  preferred_language: string;
  company_id: string | null;
}

interface Campaign {
  id: string;
  name: string;
  trigger_type: string;
  trigger_value: number;
  message_template_ro: string;
  message_template_de: string | null;
  message_template_en: string | null;
  notification_type: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const { action = "analyze" } = await req.json().catch(() => ({}));
    
    console.log(`[Retention Analyzer] Starting action: ${action}`);

    if (action === "analyze") {
      // Step 1: Update all user retention records
      const result = await analyzeAndUpdateRetention(supabase);
      
      // Step 2: Send proactive messages
      const messagesResult = await sendProactiveMessages(supabase, resendApiKey);
      
      return new Response(JSON.stringify({
        success: true,
        analysis: result,
        messages: messagesResult
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    
    if (action === "sync") {
      // Just sync retention data without sending messages
      const result = await analyzeAndUpdateRetention(supabase);
      return new Response(JSON.stringify({ success: true, ...result }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("[Retention Analyzer] Error:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});

async function analyzeAndUpdateRetention(supabase: any) {
  console.log("[Retention] Analyzing user activity...");
  
  // Get all users with their activity data
  const { data: users, error: usersError } = await supabase
    .from("profiles")
    .select(`
      id,
      email,
      first_name
    `);
  
  // Get company associations separately
  const { data: companyUsers } = await supabase
    .from("company_users")
    .select("user_id, company_id")
    .eq("status", "approved");
  
  // Create a map for quick lookup
  const companyMap = new Map();
  (companyUsers || []).forEach((cu: any) => {
    companyMap.set(cu.user_id, cu.company_id);
  });

  if (usersError) {
    console.error("[Retention] Error fetching users:", usersError);
    throw usersError;
  }

  let updated = 0;
  let created = 0;
  const riskDistribution = { low: 0, medium: 0, high: 0, critical: 0 };

  for (const user of users || []) {
    try {
      // Get last session activity
      const { data: sessions } = await supabase
        .from("user_sessions")
        .select("last_activity_at, total_duration_seconds")
        .eq("user_id", user.id)
        .order("last_activity_at", { ascending: false })
        .limit(10);

      // Get chapter progress
      const { data: chapters } = await supabase
        .from("chapter_progress")
        .select("id")
        .eq("user_id", user.id);

      // Get quiz attempts
      const { data: quizzes } = await supabase
        .from("quiz_attempts")
        .select("id")
        .eq("user_id", user.id);

      const lastActivity = sessions?.[0]?.last_activity_at || null;
      const totalSessions = sessions?.length || 0;
      const totalTimeMinutes = Math.floor(
        (sessions || []).reduce((acc: number, s: any) => acc + (s.total_duration_seconds || 0), 0) / 60
      );
      const chaptersViewed = chapters?.length || 0;
      const quizzesAttempted = quizzes?.length || 0;

      // Calculate days inactive
      const daysInactive = lastActivity 
        ? Math.floor((Date.now() - new Date(lastActivity).getTime()) / (1000 * 60 * 60 * 24))
        : 30; // Default to 30 if never active

      // Calculate engagement score
      const engagementScore = calculateEngagementScore(
        totalSessions,
        totalTimeMinutes,
        chaptersViewed,
        quizzesAttempted,
        daysInactive
      );

      // Determine risk level and status
      const riskLevel = determineRiskLevel(daysInactive, engagementScore);
      const status = determineStatus(daysInactive, engagementScore);

      riskDistribution[riskLevel as keyof typeof riskDistribution]++;

      // Upsert retention record
      const companyId = companyMap.get(user.id) || null;
      
      const { data: existing } = await supabase
        .from("user_retention")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (existing) {
        await supabase
          .from("user_retention")
          .update({
            last_active_at: lastActivity || new Date().toISOString(),
            total_sessions: totalSessions,
            total_time_spent_minutes: totalTimeMinutes,
            chapters_viewed: chaptersViewed,
            quizzes_attempted: quizzesAttempted,
            days_inactive: daysInactive,
            engagement_score: engagementScore,
            risk_level: riskLevel,
            status: status,
            company_id: companyId,
            updated_at: new Date().toISOString()
          })
          .eq("user_id", user.id);
        updated++;
      } else {
        await supabase
          .from("user_retention")
          .insert({
            user_id: user.id,
            company_id: companyId,
            last_active_at: lastActivity || new Date().toISOString(),
            total_sessions: totalSessions,
            total_time_spent_minutes: totalTimeMinutes,
            chapters_viewed: chaptersViewed,
            quizzes_attempted: quizzesAttempted,
            days_inactive: daysInactive,
            engagement_score: engagementScore,
            risk_level: riskLevel,
            status: status
          });
        created++;
      }
    } catch (err) {
      console.error(`[Retention] Error processing user ${user.id}:`, err);
    }
  }

  console.log(`[Retention] Analysis complete: ${created} created, ${updated} updated`);
  
  return {
    usersAnalyzed: users?.length || 0,
    created,
    updated,
    riskDistribution
  };
}

async function sendProactiveMessages(supabase: any, resendApiKey: string | undefined) {
  console.log("[Retention] Sending proactive messages...");
  
  // Get active campaigns
  const { data: campaigns } = await supabase
    .from("retention_campaigns")
    .select("*")
    .eq("is_active", true);

  if (!campaigns || campaigns.length === 0) {
    console.log("[Retention] No active campaigns found");
    return { messagesSent: 0 };
  }

  // Get at-risk users who haven't been notified recently (24h cooldown)
  const cooldownTime = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  
  const { data: atRiskUsers } = await supabase
    .from("user_retention")
    .select(`
      *,
      profiles!inner(email, first_name)
    `)
    .in("risk_level", ["medium", "high", "critical"])
    .or(`last_notification_sent_at.is.null,last_notification_sent_at.lt.${cooldownTime}`);

  let messagesSent = 0;
  const resend = resendApiKey ? new Resend(resendApiKey) : null;

  for (const user of atRiskUsers || []) {
    try {
      // Find matching campaign
      const campaign = findMatchingCampaign(campaigns, user);
      if (!campaign) continue;

      // Default to Romanian since preferred_language doesn't exist in profiles
      const language = "ro";
      const message = getLocalizedMessage(campaign, language, user.profiles?.first_name);

      // Send in-app notification
      await supabase.from("user_notifications").insert({
        user_id: user.user_id,
        title: getNotificationTitle(campaign.trigger_type, language),
        message: message,
        type: campaign.notification_type,
        icon: getNotificationIcon(campaign.trigger_type),
        link: "/dashboard"
      });

      // Log the retention action
      await supabase.from("retention_logs").insert({
        user_id: user.user_id,
        campaign_id: campaign.id,
        trigger_reason: `${campaign.trigger_type}: ${user.days_inactive} days inactive`,
        message_sent: message,
        channel: "in_app"
      });

      // Send email for high/critical risk if Resend is configured
      if (resend && ["high", "critical"].includes(user.risk_level) && user.profiles?.email) {
        try {
          await resend.emails.send({
            from: "Rossik Training <training@resend.dev>",
            to: [user.profiles.email],
            subject: getEmailSubject(campaign.trigger_type, language),
            html: generateRetentionEmail(message, user.profiles.first_name, language)
          });

          await supabase.from("retention_logs").insert({
            user_id: user.user_id,
            campaign_id: campaign.id,
            trigger_reason: `${campaign.trigger_type}: email reminder`,
            message_sent: message,
            channel: "email"
          });
        } catch (emailErr) {
          console.error(`[Retention] Email failed for ${user.user_id}:`, emailErr);
        }
      }

      // Update user retention record
      await supabase
        .from("user_retention")
        .update({
          last_notification_sent_at: new Date().toISOString(),
          notifications_sent: (user.notifications_sent || 0) + 1
        })
        .eq("user_id", user.user_id);

      messagesSent++;
    } catch (err) {
      console.error(`[Retention] Error sending message to ${user.user_id}:`, err);
    }
  }

  console.log(`[Retention] Sent ${messagesSent} proactive messages`);
  return { messagesSent, usersTargeted: atRiskUsers?.length || 0 };
}

function calculateEngagementScore(
  sessions: number,
  timeMinutes: number,
  chapters: number,
  quizzes: number,
  daysInactive: number
): number {
  let score = 
    Math.min(sessions * 5, 25) + 
    Math.min(timeMinutes / 30, 25) + 
    Math.min(chapters * 2, 25) + 
    Math.min(quizzes * 3, 25);
  
  score = score - (daysInactive * 2);
  return Math.max(0, Math.min(100, score));
}

function determineRiskLevel(daysInactive: number, engagementScore: number): string {
  if (daysInactive >= 14 || engagementScore < 20) return "critical";
  if (daysInactive >= 7 || engagementScore < 40) return "high";
  if (daysInactive >= 3 || engagementScore < 60) return "medium";
  return "low";
}

function determineStatus(daysInactive: number, engagementScore: number): string {
  if (daysInactive >= 30) return "churned";
  if (daysInactive >= 14) return "inactive";
  if (daysInactive >= 3 || engagementScore < 50) return "at_risk";
  return "active";
}

function findMatchingCampaign(campaigns: Campaign[], user: RetentionUser): Campaign | null {
  // Sort by trigger_value descending to match highest threshold first
  const sortedCampaigns = campaigns
    .filter(c => c.trigger_type === "days_inactive")
    .sort((a, b) => (b.trigger_value || 0) - (a.trigger_value || 0));

  for (const campaign of sortedCampaigns) {
    if (user.days_inactive >= (campaign.trigger_value || 0)) {
      return campaign;
    }
  }
  return null;
}

function getLocalizedMessage(campaign: Campaign, lang: string, firstName: string | null): string {
  let message = campaign.message_template_ro;
  
  if (lang === "de" && campaign.message_template_de) {
    message = campaign.message_template_de;
  } else if (lang === "en" && campaign.message_template_en) {
    message = campaign.message_template_en;
  }

  if (firstName) {
    message = message.replace("{name}", firstName);
  }

  return message;
}

function getNotificationTitle(triggerType: string, lang: string): string {
  const titles: Record<string, Record<string, string>> = {
    days_inactive: {
      ro: "Te așteptăm înapoi!",
      de: "Wir erwarten dich zurück!",
      en: "We're waiting for you!"
    },
    low_engagement: {
      ro: "Sfat pentru succes",
      de: "Tipp für Erfolg",
      en: "Tip for success"
    },
    incomplete_chapter: {
      ro: "Capitol neterminat",
      de: "Unvollständiges Kapitel",
      en: "Incomplete chapter"
    },
    quiz_failure: {
      ro: "Nu renunța!",
      de: "Gib nicht auf!",
      en: "Don't give up!"
    }
  };
  return titles[triggerType]?.[lang] || titles[triggerType]?.ro || "Notificare";
}

function getNotificationIcon(triggerType: string): string {
  const icons: Record<string, string> = {
    days_inactive: "👋",
    low_engagement: "💡",
    incomplete_chapter: "📖",
    quiz_failure: "💪"
  };
  return icons[triggerType] || "📢";
}

function getEmailSubject(triggerType: string, lang: string): string {
  const subjects: Record<string, Record<string, string>> = {
    days_inactive: {
      ro: "Ne lipsești! Continuă-ți training-ul",
      de: "Wir vermissen dich! Setze dein Training fort",
      en: "We miss you! Continue your training"
    }
  };
  return subjects[triggerType]?.[lang] || subjects.days_inactive.ro;
}

function generateRetentionEmail(message: string, name: string | null, lang: string): string {
  const greeting = lang === "de" ? "Hallo" : lang === "en" ? "Hello" : "Bună";
  const footer = lang === "de" 
    ? "Dein Rossik Training Team" 
    : lang === "en" 
      ? "Your Rossik Training Team" 
      : "Echipa Rossik Training";
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #6366f1; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; margin-top: 20px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">🎓 Rossik Training</h1>
        </div>
        <div class="content">
          <p>${greeting}${name ? ` ${name}` : ''},</p>
          <p style="font-size: 18px;">${message}</p>
          <a href="https://rossiktrainingmanual.lovable.app" class="button">
            ${lang === "de" ? "Jetzt fortfahren" : lang === "en" ? "Continue now" : "Continuă acum"} →
          </a>
        </div>
        <div class="footer">
          <p>${footer}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
