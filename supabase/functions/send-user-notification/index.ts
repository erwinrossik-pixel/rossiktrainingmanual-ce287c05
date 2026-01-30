import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

type NotificationType = 
  | 'welcome'
  | 'account_approved'
  | 'account_rejected'
  | 'account_suspended'
  | 'account_reactivated'
  | 'company_assigned'
  | 'weekly_progress'
  | 'certificate_earned'
  | 'inactivity_reminder'
  | 'chapter_completed';

interface NotificationRequest {
  type: NotificationType;
  userId?: string;
  email?: string;
  data?: Record<string, any>;
}

interface EmailTemplate {
  subject: string;
  html: string;
}

const getEmailTemplate = (type: NotificationType, data: Record<string, any> = {}): EmailTemplate => {
  const baseStyle = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  `;
  
  const buttonStyle = `
    display: inline-block;
    padding: 12px 24px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    margin: 16px 0;
  `;

  const headerStyle = `
    background: linear-gradient(135deg, #1e3a5f, #3b82f6);
    color: white;
    padding: 32px;
    text-align: center;
    border-radius: 12px 12px 0 0;
  `;

  const contentStyle = `
    background: #ffffff;
    padding: 32px;
    border: 1px solid #e5e7eb;
    border-top: none;
    border-radius: 0 0 12px 12px;
  `;

  const footerStyle = `
    text-align: center;
    padding: 24px;
    color: #6b7280;
    font-size: 12px;
  `;

  const templates: Record<NotificationType, EmailTemplate> = {
    welcome: {
      subject: '🎉 Bun venit pe platforma de training!',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px;">Bun venit, ${data.firstName || 'Utilizator'}!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Începe călătoria ta de învățare</p>
          </div>
          <div style="${contentStyle}">
            <p>Contul tău a fost creat cu succes pe platforma noastră de training.</p>
            <p>Următorii pași:</p>
            <ol>
              <li>Completează-ți profilul</li>
              <li>Explorează capitolele disponibile</li>
              <li>Începe primul quiz</li>
            </ol>
            <p>Ai întrebări? Contactează administratorul companiei tale.</p>
            <a href="${data.platformUrl || '#'}" style="${buttonStyle}">
              Accesează Platforma
            </a>
          </div>
          <div style="${footerStyle}">
            <p>Acest email a fost trimis automat de platforma de training.</p>
          </div>
        </div>
      `
    },
    account_approved: {
      subject: '✅ Contul tău a fost aprobat!',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px;">Cont Aprobat!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Poți accesa acum platforma</p>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <p>Vești bune! Cererea ta de înregistrare a fost <strong style="color: #22c55e;">aprobată</strong>.</p>
            <p>Acum ai acces complet la:</p>
            <ul>
              <li>Toate capitolele de training</li>
              <li>Quiz-uri interactive</li>
              <li>Certificare profesională</li>
              <li>Resurse multimedia</li>
            </ul>
            ${data.companyName ? `<p>Companie: <strong>${data.companyName}</strong></p>` : ''}
            <a href="${data.platformUrl || '#'}" style="${buttonStyle}">
              Începe Training-ul
            </a>
          </div>
          <div style="${footerStyle}">
            <p>Mult succes în parcursul tău de învățare!</p>
          </div>
        </div>
      `
    },
    account_rejected: {
      subject: '❌ Cererea ta de înregistrare',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}; background: linear-gradient(135deg, #dc2626, #f87171);">
            <h1 style="margin: 0; font-size: 28px;">Cerere Respinsă</h1>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <p>Din păcate, cererea ta de înregistrare a fost respinsă.</p>
            <p>Motive posibile:</p>
            <ul>
              <li>Date incomplete sau incorecte</li>
              <li>Cod de înregistrare invalid</li>
              <li>Companie neactivă</li>
            </ul>
            <p>Te rugăm să contactezi administratorul companiei pentru mai multe detalii.</p>
          </div>
          <div style="${footerStyle}">
            <p>Dacă crezi că este o eroare, contactează suportul.</p>
          </div>
        </div>
      `
    },
    account_suspended: {
      subject: '⚠️ Contul tău a fost suspendat',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}; background: linear-gradient(135deg, #f59e0b, #fbbf24);">
            <h1 style="margin: 0; font-size: 28px;">Cont Suspendat</h1>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <p>Contul tău pe platforma de training a fost <strong style="color: #f59e0b;">suspendat temporar</strong>.</p>
            <p>Pentru reactivare, contactează administratorul companiei tale.</p>
          </div>
          <div style="${footerStyle}">
            <p>Dacă ai întrebări, contactează suportul.</p>
          </div>
        </div>
      `
    },
    account_reactivated: {
      subject: '🔓 Contul tău a fost reactivat!',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px;">Cont Reactivat!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Bine ai revenit!</p>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <p>Contul tău a fost <strong style="color: #22c55e;">reactivat</strong> cu succes!</p>
            <p>Poți accesa din nou toate resursele platformei.</p>
            <a href="${data.platformUrl || '#'}" style="${buttonStyle}">
              Continuă Training-ul
            </a>
          </div>
          <div style="${footerStyle}">
            <p>Mult succes!</p>
          </div>
        </div>
      `
    },
    company_assigned: {
      subject: '🏢 Ai fost adăugat într-o companie!',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px;">Bun venit în echipă!</h1>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <p>Ai fost adăugat în compania <strong>${data.companyName || 'N/A'}</strong>.</p>
            <p>Acum ai acces la:</p>
            <ul>
              <li>Toate capitolele de training ale companiei</li>
              <li>Quiz-uri și evaluări</li>
              <li>Certificare profesională</li>
            </ul>
            <a href="${data.platformUrl || '#'}" style="${buttonStyle}">
              Accesează Platforma
            </a>
          </div>
          <div style="${footerStyle}">
            <p>Mult succes în noul tău rol!</p>
          </div>
        </div>
      `
    },
    weekly_progress: {
      subject: '📊 Rezumatul tău săptămânal',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px;">Progresul Tău Săptămânal</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">${data.weekRange || 'Această săptămână'}</p>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <div style="display: grid; gap: 16px; margin: 24px 0;">
              <div style="background: #f0f9ff; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 32px; font-weight: bold; color: #3b82f6;">${data.chaptersCompleted || 0}</div>
                <div style="color: #6b7280;">Capitole completate</div>
              </div>
              <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 32px; font-weight: bold; color: #22c55e;">${data.quizzesPassed || 0}</div>
                <div style="color: #6b7280;">Quiz-uri promovate</div>
              </div>
              <div style="background: #faf5ff; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 32px; font-weight: bold; color: #8b5cf6;">${data.studyTime || '0h'}</div>
                <div style="color: #6b7280;">Timp de studiu</div>
              </div>
            </div>
            <p>Progres total: <strong>${data.totalProgress || 0}%</strong></p>
            <a href="${data.platformUrl || '#'}" style="${buttonStyle}">
              Continuă Învățarea
            </a>
          </div>
          <div style="${footerStyle}">
            <p>Continuă așa! Fiecare pas contează.</p>
          </div>
        </div>
      `
    },
    certificate_earned: {
      subject: '🏆 Felicitări! Ai obținut certificatul!',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}; background: linear-gradient(135deg, #eab308, #f59e0b);">
            <h1 style="margin: 0; font-size: 28px;">🎉 Certificat Obținut!</h1>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <p>Felicitări pentru această realizare extraordinară!</p>
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; text-align: center; margin: 24px 0;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #92400e;">Cod Certificat</p>
              <p style="margin: 0; font-size: 24px; font-weight: bold; color: #78350f;">${data.certificateCode || 'N/A'}</p>
            </div>
            <ul>
              <li>Capitole completate: <strong>${data.chaptersCompleted || 0}</strong></li>
              <li>Scor mediu: <strong>${data.averageScore || 0}%</strong></li>
              <li>Timp total de training: <strong>${data.totalHours || 0}h</strong></li>
            </ul>
            <a href="${data.verifyUrl || '#'}" style="${buttonStyle}">
              Verifică Certificatul
            </a>
          </div>
          <div style="${footerStyle}">
            <p>Poți împărtăși acest certificat cu angajatorii și partenerii.</p>
          </div>
        </div>
      `
    },
    inactivity_reminder: {
      subject: '👋 Ne este dor de tine!',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px;">Te așteptăm înapoi!</h1>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <p>Am observat că nu ai mai accesat platforma de <strong>${data.daysInactive || 7} zile</strong>.</p>
            <p>Progresul tău actual:</p>
            <ul>
              <li>Capitole completate: ${data.chaptersCompleted || 0}/${data.totalChapters || 50}</li>
              <li>Progres: ${data.progress || 0}%</li>
            </ul>
            <p>Continuă de unde ai rămas! Fiecare minut contează.</p>
            <a href="${data.platformUrl || '#'}" style="${buttonStyle}">
              Revino la Training
            </a>
          </div>
          <div style="${footerStyle}">
            <p>Suntem aici să te ajutăm să reușești!</p>
          </div>
        </div>
      `
    },
    chapter_completed: {
      subject: '✅ Capitol completat cu succes!',
      html: `
        <div style="${baseStyle}">
          <div style="${headerStyle}">
            <h1 style="margin: 0; font-size: 28px;">Bravo!</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Ai completat un capitol</p>
          </div>
          <div style="${contentStyle}">
            <p>Salut ${data.firstName || 'Utilizator'},</p>
            <p>Felicitări! Ai completat capitolul:</p>
            <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
              <p style="margin: 0; font-weight: bold; color: #166534;">${data.chapterName || 'Capitol'}</p>
              <p style="margin: 8px 0 0 0; color: #6b7280;">Scor obținut: <strong>${data.score || 0}%</strong></p>
            </div>
            <p>Progres total: <strong>${data.totalProgress || 0}%</strong></p>
            <a href="${data.platformUrl || '#'}" style="${buttonStyle}">
              Continuă cu Următorul Capitol
            </a>
          </div>
          <div style="${footerStyle}">
            <p>Continuă așa! Mai ai ${data.remainingChapters || 0} capitole până la certificare.</p>
          </div>
        </div>
      `
    }
  };

  return templates[type] || {
    subject: 'Notificare',
    html: '<p>Ai primit o notificare de pe platforma de training.</p>'
  };
};

const handler = async (req: Request): Promise<Response> => {
  console.log('send-user-notification: Request received');
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { type, userId, email, data = {} }: NotificationRequest = await req.json();
    
    console.log(`send-user-notification: Processing ${type} notification`);

    let recipientEmail = email;
    let userData = data;

    // If userId is provided, fetch user data
    if (userId && !email) {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('email, first_name, last_name')
        .eq('id', userId)
        .single();

      if (profileError || !profile) {
        console.error('Error fetching profile:', profileError);
        return new Response(
          JSON.stringify({ error: 'User not found' }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      recipientEmail = profile.email;
      userData = {
        ...data,
        firstName: profile.first_name,
        lastName: profile.last_name,
      };
    }

    if (!recipientEmail) {
      return new Response(
        JSON.stringify({ error: 'No email address provided' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get platform URL from data or use default
    userData.platformUrl = userData.platformUrl || 'https://rossiktrainingmanual.lovable.app';

    const template = getEmailTemplate(type, userData);

    console.log(`send-user-notification: Sending ${type} email to ${recipientEmail}`);

    const emailResponse = await resend.emails.send({
      from: "Rossik Training <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: template.subject,
      html: template.html,
    });

    console.log('send-user-notification: Email sent successfully', emailResponse);

    // Log the notification (best effort, table may not exist)
    try {
      await supabase.from('notification_logs').insert({
        user_id: userId || null,
        email: recipientEmail,
        notification_type: type,
        status: 'sent',
        metadata: { resend_response: JSON.stringify(emailResponse) }
      });
    } catch (logError) {
      console.log('Could not log notification (table may not exist):', logError);
    }

    return new Response(
      JSON.stringify({ success: true, data: emailResponse }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("send-user-notification: Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
