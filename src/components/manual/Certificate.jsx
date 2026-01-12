import { useRef, useState } from "react";
import { Award, Download, X, CheckCircle2 } from "lucide-react";
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

export function Certificate({
  isEligible,
  completedChapters,
  totalChapters,
  averageScore,
  passedQuizzes,
  totalQuizzes,
}) {
  const [traineeName, setTraineeName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const certificateRef = useRef(null);

  const completionDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Sanitize name for filename - prevents path traversal attacks
  const sanitizeFilename = (name) => {
    return name
      .trim()
      .slice(0, 100)
      .replace(/[^a-zA-Z0-9\s\-_àáâãäåæçèéêëìíîïñòóôõöùúûüýÿ]/gi, '')
      .replace(/\s+/g, '_')
      .replace(/^\.+/, '') // Remove leading dots
      .replace(/\.+$/, ''); // Remove trailing dots
  };

  // Validate trainee name input
  const handleNameChange = (e) => {
    const value = e.target.value;
    // Allow only letters, spaces, hyphens, and common diacritics, max 100 chars
    if (value.length <= 100) {
      setTraineeName(value);
    }
  };

  const handleDownload = async () => {
    if (!certificateRef.current || !traineeName.trim()) return;

    setIsGenerating(true);
    try {
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
      
      // Use sanitized filename to prevent path traversal
      const safeFilename = sanitizeFilename(traineeName);
      pdf.save(`Rossik_Certificate_${safeFilename || 'Certificate'}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

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
                Congratulations! You've completed all chapters and passed all quizzes. Click to download your certificate.
              </p>
              <Button variant="default" className="mt-3 bg-success hover:bg-success/90">
                <Download className="w-4 h-4 mr-2" />
                Get Certificate
              </Button>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Generate Your Certificate
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your name as it should appear on the certificate"
              value={traineeName}
              onChange={handleNameChange}
              maxLength={100}
            />
          </div>

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
                <div className="text-center mb-6">
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
                <div className="flex gap-8 mt-6 text-center">
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

                {/* Date */}
                <div className="mt-8 text-center">
                  <p className="text-gray-500 text-sm">Awarded on</p>
                  <p className="text-gray-700 font-medium">{completionDate}</p>
                </div>

                {/* Footer */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-20 px-8">
                  <div className="text-center">
                    <div className="w-32 border-t border-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Training Director</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 border-t border-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Certificate ID</p>
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
              onClick={handleDownload}
              disabled={!traineeName.trim() || isGenerating}
            >
              {isGenerating ? (
                "Generating..."
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
