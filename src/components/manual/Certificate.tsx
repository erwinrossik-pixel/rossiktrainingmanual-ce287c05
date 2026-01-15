import { useRef, useState } from "react";
import { Award, Download, CheckCircle2, ExternalLink, Copy, Check } from "lucide-react";
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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { addYears, format } from "date-fns";

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
  const [traineeName, setTraineeName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [generatedCertificate, setGeneratedCertificate] = useState<{
    code: string;
    issuedAt: Date;
    expiresAt: Date;
  } | null>(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const verificationUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/verify/` 
    : "https://rossiktrainingmanual.lovable.app/verify/";

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
            <h3 className="font-semibold text-foreground">Certificate of Completion</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Complete all {totalChapters} chapters and pass all quizzes with 70%+ to earn your certificate.
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex items-center gap-2">
                {completedChapters === totalChapters ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                )}
                <span className={completedChapters === totalChapters ? "text-success" : "text-muted-foreground"}>
                  Chapters: {completedChapters}/{totalChapters}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {passedQuizzes === totalQuizzes && totalQuizzes > 0 ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                )}
                <span className={passedQuizzes === totalQuizzes && totalQuizzes > 0 ? "text-success" : "text-muted-foreground"}>
                  Quizzes Passed (70%+): {passedQuizzes}/{totalQuizzes}
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
                🎉 Certificate Earned!
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Congratulations! You've completed all chapters and passed all quizzes. Click to download your official certificate.
              </p>
              <Button variant="default" className="mt-3 bg-success hover:bg-success/90">
                <Download className="w-4 h-4 mr-2" />
                Get Official Certificate
              </Button>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Generate Your Official Certificate
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your name as it should appear on the certificate"
              value={traineeName}
              onChange={(e) => setTraineeName(e.target.value)}
            />
          </div>

          {/* Generated Certificate Info */}
          {generatedCertificate && (
            <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Certificate Code</p>
                  <p className="font-mono font-bold text-lg text-success">{generatedCertificate.code}</p>
                </div>
                <Button variant="outline" size="sm" onClick={copyVerificationLink}>
                  {codeCopied ? (
                    <Check className="w-4 h-4 mr-1 text-success" />
                  ) : (
                    <Copy className="w-4 h-4 mr-1" />
                  )}
                  {codeCopied ? "Copied!" : "Copy Link"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Valid until: {expirationDate}
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-primary"
                onClick={() => window.open(`${verificationUrl}${generatedCertificate.code}`, "_blank")}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Verify Certificate Online
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
              <div className="h-full border-4 border-primary/30 rounded-lg p-8 flex flex-col items-center justify-center relative">
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-primary/50 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-primary/50 rounded-tr-lg" />
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

                {/* Footer */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-between px-16">
                  <div className="text-center">
                    <div className="w-32 border-t border-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Training Director</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">Verify at:</p>
                    <p className="text-xs font-mono text-primary">rossiktrainingmanual.lovable.app/verify</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 border-t border-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Date of Issue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleGenerateCertificate}
              disabled={!traineeName.trim() || isGenerating}
            >
              {isGenerating ? (
                "Generating..."
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
