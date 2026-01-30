import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface CertificateEmailRequest {
  recipientEmail: string;
  traineeName: string;
  certificateCode: string;
  issuedAt: string;
  expiresAt: string;
  chaptersCompleted: number;
  quizzesPassed: number;
  averageScore: number;
  totalTrainingHours: number;
  verificationUrl: string;
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
    const data: CertificateEmailRequest = await req.json();

    console.log(`Sending certificate email to: ${data.recipientEmail}`);

    const issuedDate = new Date(data.issuedAt).toLocaleDateString('ro-RO', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    const expiresDate = new Date(data.expiresAt).toLocaleDateString('ro-RO', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 50%, #115e59 100%); padding: 40px 30px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">🎓</div>
              <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">
                Felicitări!
              </h1>
              <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 10px 0 0 0;">
                Certificatul tău a fost generat cu succes
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Greeting -->
              <p style="color: #374151; font-size: 18px; margin: 0 0 20px 0;">
                Dragă <strong>${data.traineeName}</strong>,
              </p>
              
              <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                Îți confirmăm că ai finalizat cu succes programul de training 
                <strong>Freight Forwarding Training Manual</strong> și ai obținut certificarea oficială Rossik.
              </p>

              <!-- Certificate Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); border-radius: 12px; border: 2px solid #5eead4; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 25px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="text-align: center; padding-bottom: 15px; border-bottom: 1px dashed #5eead4;">
                          <p style="color: #0d9488; font-size: 12px; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Cod Certificat</p>
                          <p style="color: #134e4a; font-size: 24px; font-weight: 700; margin: 5px 0 0 0; font-family: 'Courier New', monospace; letter-spacing: 3px;">
                            ${data.certificateCode}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="50%" style="text-align: center; padding: 10px;">
                                <p style="color: #6b7280; font-size: 12px; margin: 0;">Data Emiterii</p>
                                <p style="color: #134e4a; font-size: 14px; font-weight: 600; margin: 5px 0 0 0;">${issuedDate}</p>
                              </td>
                              <td width="50%" style="text-align: center; padding: 10px;">
                                <p style="color: #6b7280; font-size: 12px; margin: 0;">Valid Până La</p>
                                <p style="color: #134e4a; font-size: 14px; font-weight: 600; margin: 5px 0 0 0;">${expiresDate}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Stats Grid -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td width="33%" style="padding: 5px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 10px; text-align: center;">
                      <tr>
                        <td style="padding: 20px 10px;">
                          <p style="color: #0d9488; font-size: 32px; font-weight: 700; margin: 0;">${data.chaptersCompleted}</p>
                          <p style="color: #6b7280; font-size: 11px; margin: 5px 0 0 0; text-transform: uppercase;">Capitole</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="33%" style="padding: 5px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 10px; text-align: center;">
                      <tr>
                        <td style="padding: 20px 10px;">
                          <p style="color: #0d9488; font-size: 32px; font-weight: 700; margin: 0;">${data.quizzesPassed}</p>
                          <p style="color: #6b7280; font-size: 11px; margin: 5px 0 0 0; text-transform: uppercase;">Quiz-uri</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="33%" style="padding: 5px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 10px; text-align: center;">
                      <tr>
                        <td style="padding: 20px 10px;">
                          <p style="color: #0d9488; font-size: 32px; font-weight: 700; margin: 0;">${data.averageScore}%</p>
                          <p style="color: #6b7280; font-size: 11px; margin: 5px 0 0 0; text-transform: uppercase;">Scor Mediu</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Training Hours -->
              ${data.totalTrainingHours > 0 ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef3c7; border-radius: 10px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px 20px; text-align: center;">
                    <span style="color: #92400e; font-size: 14px;">
                      ⏱️ <strong>${Math.round(data.totalTrainingHours)} ore</strong> de training completate
                    </span>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align: center; padding: 20px 0;">
                    <a href="${data.verificationUrl}" 
                       style="display: inline-block; background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 14px rgba(13, 148, 136, 0.3);">
                      🔍 Verifică Certificatul Online
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color: #9ca3af; font-size: 13px; text-align: center; margin: 20px 0 0 0;">
                Sau copiază acest link: <br>
                <a href="${data.verificationUrl}" style="color: #0d9488; word-break: break-all;">${data.verificationUrl}</a>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #0d9488; font-size: 18px; font-weight: 700; margin: 0 0 5px 0;">
                Rossik Transport & Logistic
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                Freight Forwarding Training Manual • European Road Transport
              </p>
              <p style="color: #d1d5db; font-size: 11px; margin: 20px 0 0 0;">
                Acest email a fost trimis automat. Te rugăm să nu răspunzi la acest mesaj.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Rossik Training <onboarding@resend.dev>",
      to: [data.recipientEmail],
      subject: `🎓 Certificat Rossik: ${data.certificateCode} - ${data.traineeName}`,
      html: htmlContent,
    });

    console.log("Certificate email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email trimis cu succes",
        data: emailResponse
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-certificate-email:", errorMessage);
    
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});