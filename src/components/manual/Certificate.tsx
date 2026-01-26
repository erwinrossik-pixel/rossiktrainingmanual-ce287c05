import { useRef, useState, useEffect } from "react";
import { Award, Download, CheckCircle2, ExternalLink, Copy, Check, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { addYears, format } from "date-fns";
import QRCode from "qrcode";

interface CertificateProps {
  isEligible: boolean;
  completedChapters: number;
  totalChapters: number;
  averageScore: number;
  passedQuizzes: number;
  totalQuizzes: number;
  totalTrainingHours?: number;
}

export function Certificate({
  isEligible,
  completedChapters,
  totalChapters,
  averageScore,
  passedQuizzes,
  totalQuizzes,
  totalTrainingHours = 0,
}: CertificateProps) {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [traineeName, setTraineeName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [generatedCertificate, setGeneratedCertificate] = useState<{
    code: string;
    issuedAt: Date;
    expiresAt: Date;
  } | null>(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const [emailSent, setEmailSent] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  // Pre-fill email from user
  useEffect(() => {
    if (user?.email) {
      setRecipientEmail(user.email);
    }
  }, [user]);

  const verificationUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/verify/` 
    : "https://rossiktrainingmanual.lovable.app/verify/";

  // Generate QR code when certificate is generated
  useEffect(() => {
    const generateQRCode = async () => {
      if (generatedCertificate) {
        try {
          const url = `${verificationUrl}${generatedCertificate.code}`;
          const dataUrl = await QRCode.toDataURL(url, {
            width: 100,
            margin: 1,
            color: {
              dark: '#1a1a1a',
              light: '#ffffff',
            },
          });
          setQrCodeDataUrl(dataUrl);
        } catch (err) {
          console.error('Error generating QR code:', err);
        }
      }
    };
    generateQRCode();
  }, [generatedCertificate, verificationUrl]);

  const sendCertificateEmail = async (code: string, issuedAt: Date, expiresAt: Date) => {
    if (!recipientEmail.trim()) return;

    setIsSendingEmail(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-certificate-email", {
        body: {
          recipientEmail: recipientEmail.trim(),
          traineeName: traineeName.trim(),
          certificateCode: code,
          issuedAt: issuedAt.toISOString(),
          expiresAt: expiresAt.toISOString(),
          chaptersCompleted: completedChapters,
          quizzesPassed: passedQuizzes,
          averageScore,
          totalTrainingHours,
          verificationUrl: `${verificationUrl}${code}`,
        },
      });

      if (error) throw error;

      if (data?.success) {
        setEmailSent(true);
        toast.success(`Email trimis la ${recipientEmail}`);
      } else {
        throw new Error(data?.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending certificate email:", error);
      toast.error("Eroare la trimiterea emailului");
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleGenerateCertificate = async () => {
    if (!certificateRef.current || !traineeName.trim() || !user) return;

    setIsGenerating(true);
    try {
      // Check if user already has a certificate
      const { data: existingCert } = await supabase
        .from("certificates")
        .select("certificate_code, issued_at, expires_at")
        .eq("user_id", user.id)
        .eq("is_revoked", false)
        .order("issued_at", { ascending: false })
        .limit(1)
        .single();

      let certificateCode: string;
      let issuedAt: Date;
      let expiresAt: Date;

      if (existingCert && new Date(existingCert.expires_at) > new Date()) {
        // Use existing valid certificate
        certificateCode = existingCert.certificate_code;
        issuedAt = new Date(existingCert.issued_at);
        expiresAt = new Date(existingCert.expires_at);
        toast.info("Folosim certificatul existent");
      } else {
        // Generate new certificate code
        const { data: codeData, error: codeError } = await supabase.rpc("generate_certificate_code");
        
        if (codeError || !codeData) {
          throw new Error("Failed to generate certificate code");
        }

        certificateCode = codeData as string;
        issuedAt = new Date();
        expiresAt = addYears(issuedAt, 2);

        // Save certificate to database
        const { error: insertError } = await supabase
          .from("certificates")
          .insert({
            user_id: user.id,
            certificate_code: certificateCode,
            trainee_name: traineeName.trim(),
            issued_at: issuedAt.toISOString(),
            expires_at: expiresAt.toISOString(),
            chapters_completed: completedChapters,
            quizzes_passed: passedQuizzes,
            average_score: averageScore,
            total_training_hours: totalTrainingHours,
          });

        if (insertError) {
          console.error("Error saving certificate:", insertError);
          throw new Error("Failed to save certificate");
        }
      }

      setGeneratedCertificate({
        code: certificateCode,
        issuedAt,
        expiresAt,
      });

      // Wait for state update and re-render
      await new Promise(resolve => setTimeout(resolve, 100));

      // Generate PDF
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Rossik_Certificate_${traineeName.replace(/\s+/g, "_")}_${certificateCode}.pdf`);

      toast.success("Certificatul a fost generat și salvat!");

      // Send email if option is checked
      if (sendEmail && recipientEmail.trim()) {
        await sendCertificateEmail(certificateCode, issuedAt, expiresAt);
      }
    } catch (error) {
      console.error("Error generating certificate:", error);
      toast.error("Eroare la generarea certificatului");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyVerificationLink = () => {
    if (generatedCertificate) {
      navigator.clipboard.writeText(`${verificationUrl}${generatedCertificate.code}`);
      setCodeCopied(true);
      toast.success("Link copiat în clipboard!");
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  const completionDate = generatedCertificate 
    ? format(generatedCertificate.issuedAt, "dd MMMM yyyy")
    : format(new Date(), "dd MMMM yyyy");

  const expirationDate = generatedCertificate 
    ? format(generatedCertificate.expiresAt, "dd MMMM yyyy")
    : format(addYears(new Date(), 2), "dd MMMM yyyy");

  if (!isEligible) {
    return (
      <div className="p-6 border border-muted rounded-lg bg-muted/30">
        <div className="flex items-start gap-4">
          <Award className="w-10 h-10 text-muted-foreground/50" />
          <div>
            <h3 className="font-semibold text-foreground">{t('certificate.title')}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {t('certificate.complete').replace('{total}', String(totalChapters))}
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex items-center gap-2">
                {completedChapters === totalChapters ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                )}
                <span className={completedChapters === totalChapters ? "text-success" : "text-muted-foreground"}>
                  {t('certificate.chapters')}: {completedChapters}/{totalChapters}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {passedQuizzes === totalQuizzes && totalQuizzes > 0 ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                )}
                <span className={passedQuizzes === totalQuizzes && totalQuizzes > 0 ? "text-success" : "text-muted-foreground"}>
                  {t('certificate.quizzesPassed')}: {passedQuizzes}/{totalQuizzes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <div className="p-6 border border-success/30 rounded-lg bg-gradient-to-br from-success/10 to-success/5 cursor-pointer hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="w-10 h-10 text-success" />
            <div className="flex-1">
              <h3 className="font-semibold text-success flex items-center gap-2">
                {t('certificate.eligible')}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t('certificate.eligibleDesc')}
              </p>
              <Button variant="default" className="mt-3 bg-success hover:bg-success/90">
                <Download className="w-4 h-4 mr-2" />
                {t('certificate.getOfficial')}
              </Button>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            {t('certificate.generate')}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('certificate.yourName')}</Label>
            <Input
              id="name"
              placeholder={t('certificate.namePlaceholder')}
              value={traineeName}
              onChange={(e) => setTraineeName(e.target.value)}
            />
          </div>

          {/* Email Option */}
          <div className="space-y-3 p-4 bg-muted/50 rounded-lg border">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sendEmail"
                checked={sendEmail}
                onCheckedChange={(checked) => setSendEmail(checked === true)}
              />
              <Label htmlFor="sendEmail" className="flex items-center gap-2 cursor-pointer">
                <Mail className="w-4 h-4 text-primary" />
                {t('certificate.sendEmail')}
              </Label>
            </div>
            
            {sendEmail && (
              <div className="space-y-2 pl-6">
                <Label htmlFor="email" className="text-sm">{t('certificate.emailAddress')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  {t('certificate.emailDesc')}
                </p>
              </div>
            )}
            
            {emailSent && (
              <div className="flex items-center gap-2 text-sm text-success pl-6">
                <CheckCircle2 className="w-4 h-4" />
                {t('certificate.emailSent')}
              </div>
            )}
          </div>

          {/* Generated Certificate Info */}
          {generatedCertificate && (
            <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('certificate.code')}</p>
                  <p className="font-mono font-bold text-lg text-success">{generatedCertificate.code}</p>
                </div>
                <Button variant="outline" size="sm" onClick={copyVerificationLink}>
                  {codeCopied ? (
                    <Check className="w-4 h-4 mr-1 text-success" />
                  ) : (
                    <Copy className="w-4 h-4 mr-1" />
                  )}
                  {codeCopied ? t('certificate.copied') : t('certificate.copyLink')}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {t('certificate.validUntil')}: {expirationDate}
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-primary"
                onClick={() => window.open(`${verificationUrl}${generatedCertificate.code}`, "_blank")}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('certificate.verifyOnline')}
              </Button>
            </div>
          )}

          {/* Certificate Preview */}
          <div className="border rounded-lg overflow-hidden">
            <div
              ref={certificateRef}
              className="bg-white p-8 aspect-[297/210]"
              style={{ minHeight: "400px" }}
            >
              <div className="h-full border-4 border-primary/30 rounded-lg p-8 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                  <div className="text-[120px] font-bold text-gray-900 rotate-[-30deg] whitespace-nowrap tracking-widest">
                    ROSSIK CERTIFIED
                  </div>
                </div>

                {/* Official Seal - Top Right */}
                <div className="absolute top-6 right-6 w-20 h-20">
                  <div className="relative w-full h-full">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-primary/70" />
                    {/* Inner ring */}
                    <div className="absolute inset-2 rounded-full border-2 border-primary/50" />
                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[6px] font-bold text-primary uppercase tracking-wider">Official</span>
                      <span className="text-lg font-bold text-primary">✓</span>
                      <span className="text-[6px] font-bold text-primary uppercase tracking-wider">Verified</span>
                    </div>
                    {/* Circular text simulation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                        </defs>
                        <text className="text-[8px] fill-primary/70 font-semibold uppercase">
                          <textPath href="#circlePath" startOffset="0%">
                            • ROSSIK TRANSPORT • TRAINING CERTIFICATE •
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-primary/50 rounded-tl-lg" />
                <div className="absolute top-4 right-28 w-16 h-16 border-t-4 border-r-4 border-primary/50 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-primary/50 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-primary/50 rounded-br-lg" />

                {/* Header */}
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 uppercase tracking-[0.3em] font-medium">
                    Rossik Transport & Logistic
                  </p>
                  <h1 className="text-4xl font-serif font-bold text-gray-800 mt-2">
                    Certificate of Completion
                  </h1>
                </div>

                {/* Recipient */}
                <p className="text-gray-600 text-lg">This is to certify that</p>
                <h2 className="text-3xl font-serif font-bold text-primary mt-2 mb-2">
                  {traineeName || "Your Name"}
                </h2>
                <p className="text-gray-600 text-lg">has successfully completed the</p>

                {/* Course Title */}
                <h3 className="text-2xl font-bold text-gray-800 mt-4 text-center">
                  Freight Forwarding Training Manual
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  European Road Transport Operations • Complete Edition 2025
                </p>

                {/* Stats */}
                <div className="flex gap-8 mt-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">{totalChapters}</p>
                    <p className="text-xs text-gray-500 uppercase">Chapters</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{passedQuizzes}</p>
                    <p className="text-xs text-gray-500 uppercase">Quizzes Passed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{averageScore}%</p>
                    <p className="text-xs text-gray-500 uppercase">Avg Score</p>
                  </div>
                </div>

                {/* Certificate Code & Dates */}
                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-sm">Issued: {completionDate} • Valid until: {expirationDate}</p>
                  {generatedCertificate && (
                    <p className="font-mono text-sm font-semibold text-primary mt-1">
                      {generatedCertificate.code}
                    </p>
                  )}
                </div>

                {/* Footer with QR Code */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-between items-end px-12">
                  <div className="text-center">
                    <div className="w-28 border-t border-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Training Director</p>
                  </div>
                  
                  {/* QR Code in center */}
                  <div className="text-center flex flex-col items-center">
                    {qrCodeDataUrl && generatedCertificate ? (
                      <img 
                        src={qrCodeDataUrl} 
                        alt="Verification QR Code" 
                        className="w-16 h-16 mb-1"
                      />
                    ) : (
                      <div className="w-16 h-16 border-2 border-dashed border-gray-300 flex items-center justify-center mb-1">
                        <span className="text-[8px] text-gray-400">QR Code</span>
                      </div>
                    )}
                    <p className="text-[8px] text-gray-400">Scan to verify</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-28 border-t border-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Date of Issue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-end flex-wrap">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            
            {/* Resend Email Button - shown after certificate is generated */}
            {generatedCertificate && !emailSent && sendEmail && recipientEmail.trim() && (
              <Button
                variant="outline"
                onClick={() => sendCertificateEmail(
                  generatedCertificate.code,
                  generatedCertificate.issuedAt,
                  generatedCertificate.expiresAt
                )}
                disabled={isSendingEmail}
              >
                {isSendingEmail ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Trimite...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Trimite Email
                  </>
                )}
              </Button>
            )}
            
            <Button
              onClick={handleGenerateCertificate}
              disabled={!traineeName.trim() || isGenerating || (sendEmail && !recipientEmail.trim())}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generează...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  {generatedCertificate ? "Download Again" : "Generate & Download PDF"}
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
