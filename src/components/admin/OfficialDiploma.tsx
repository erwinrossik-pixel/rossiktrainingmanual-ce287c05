import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Printer, Download, Award, Shield, Globe, CheckCircle2 } from "lucide-react";
import { format, addYears } from "date-fns";
import { ro, de, enUS } from "date-fns/locale";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "qrcode";
import { toast } from "sonner";

interface OfficialDiplomaProps {
  certificate: {
    id: string;
    certificate_code: string;
    trainee_name: string;
    issued_at: string;
    expires_at: string;
    chapters_completed: number;
    quizzes_passed: number;
    average_score: number;
    total_training_hours: number;
    final_exam_score?: number;
    final_exam_passed_at?: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Official authorities from the auto-update engine
const OFFICIAL_AUTHORITIES = [
  { name: "UNECE Transport Division", abbr: "UNECE", category: "International" },
  { name: "EU Transport Portal", abbr: "EC", category: "European Union" },
  { name: "International Road Transport Union", abbr: "IRU", category: "International" },
  { name: "FIATA - International Federation", abbr: "FIATA", category: "International" },
  { name: "EU Customs Union", abbr: "TAXUD", category: "European Union" },
];

const COMPLIANCE_STANDARDS = [
  "ISO 9001:2015 Quality Management",
  "ISO 28000 Supply Chain Security",
  "FIATA Model Rules",
  "IATA Cargo Training Framework",
];

export function OfficialDiploma({ certificate, open, onOpenChange }: OfficialDiplomaProps) {
  const { language } = useLanguage();
  const diplomaRef = useRef<HTMLDivElement>(null);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const dateLocale = language === 'de' ? de : language === 'en' ? enUS : ro;

  const verificationUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/verify/${certificate.certificate_code}` 
    : `https://rossiktrainingmanual.lovable.app/verify/${certificate.certificate_code}`;

  useEffect(() => {
    const generateQRCode = async () => {
      if (open && certificate.certificate_code) {
        try {
          const dataUrl = await QRCode.toDataURL(verificationUrl, {
            width: 120,
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
  }, [open, certificate.certificate_code, verificationUrl]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (!diplomaRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(diplomaRef.current, {
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
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
      pdf.save(`Rossik_Official_Diploma_${certificate.trainee_name.replace(/\s+/g, "_")}_${certificate.certificate_code}.pdf`);

      toast.success(
        language === 'ro' ? "Diploma a fost descărcată cu succes!" :
        language === 'de' ? "Diplom erfolgreich heruntergeladen!" :
        "Diploma downloaded successfully!"
      );
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error(
        language === 'ro' ? "Eroare la generarea PDF-ului" :
        language === 'de' ? "Fehler beim Erstellen des PDF" :
        "Error generating PDF"
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const diplomaTitle = {
    ro: "DIPLOMĂ OFICIALĂ",
    de: "OFFIZIELLES DIPLOM",
    en: "OFFICIAL DIPLOMA"
  };

  const diplomaSubtitle = {
    ro: "Transport Rutier European & Expediție de Mărfuri",
    de: "Europäischer Straßentransport & Spedition",
    en: "European Road Transport & Freight Forwarding"
  };

  const certifiesText = {
    ro: "Se certifică prin prezenta că",
    de: "Hiermit wird bescheinigt, dass",
    en: "This is to certify that"
  };

  const completedText = {
    ro: "a absolvit cu succes programul de formare profesională",
    de: "das Berufsausbildungsprogramm erfolgreich abgeschlossen hat",
    en: "has successfully completed the professional training program"
  };

  const programTitle = {
    ro: "Manual de Formare în Expediție de Mărfuri",
    de: "Ausbildungshandbuch für Spedition",
    en: "Freight Forwarding Training Manual"
  };

  const validUntilText = {
    ro: "Valid până la",
    de: "Gültig bis",
    en: "Valid until"
  };

  const issuedOnText = {
    ro: "Emis la",
    de: "Ausgestellt am",
    en: "Issued on"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto print:max-w-none print:h-auto print:overflow-visible">
        <DialogHeader className="print:hidden">
          <DialogTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            {language === 'ro' ? 'Diplomă Oficială' : language === 'de' ? 'Offizielles Diplom' : 'Official Diploma'}
          </DialogTitle>
        </DialogHeader>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end mb-4 print:hidden">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="w-4 h-4 mr-2" />
            {language === 'ro' ? 'Printează' : language === 'de' ? 'Drucken' : 'Print'}
          </Button>
          <Button onClick={handleDownloadPDF} disabled={isGenerating}>
            <Download className="w-4 h-4 mr-2" />
            {isGenerating 
              ? (language === 'ro' ? 'Generare...' : language === 'de' ? 'Generieren...' : 'Generating...') 
              : (language === 'ro' ? 'Descarcă PDF' : language === 'de' ? 'PDF Herunterladen' : 'Download PDF')}
          </Button>
        </div>

        {/* Diploma Content */}
        <div 
          ref={diplomaRef} 
          className="bg-white p-8 aspect-[297/210] relative overflow-hidden print:p-12"
          style={{ minHeight: "600px" }}
        >
          {/* Decorative Border */}
          <div className="absolute inset-4 border-4 border-double border-amber-600/30 rounded-lg pointer-events-none" />
          <div className="absolute inset-6 border-2 border-amber-600/20 rounded-lg pointer-events-none" />

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-20 h-20 border-t-4 border-l-4 border-amber-600/50 rounded-tl-xl" />
          <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-amber-600/50 rounded-tr-xl" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-amber-600/50 rounded-bl-xl" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border-b-4 border-r-4 border-amber-600/50 rounded-br-xl" />

          {/* Official Seal */}
          <div className="absolute top-10 right-12 w-24 h-24">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-4 border-red-700/70" />
              <div className="absolute inset-2 rounded-full border-2 border-red-700/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Shield className="w-6 h-6 text-red-700" />
                <span className="text-[7px] font-bold text-red-700 uppercase tracking-wider mt-1">Authorized</span>
                <span className="text-[6px] text-red-700 uppercase">Official</span>
              </div>
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <defs>
                  <path id="sealCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                </defs>
                <text className="text-[7px] fill-red-700/70 font-semibold uppercase">
                  <textPath href="#sealCircle" startOffset="0%">
                    • ROSSIK TRANSPORT & LOGISTIC • CERTIFIED TRAINING •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mt-8 mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-[0.4em] font-medium mb-2">
              Rossik Transport & Logistic SRL
            </p>
            <h1 className="text-4xl font-serif font-bold text-gray-800 tracking-wide">
              {diplomaTitle[language]}
            </h1>
            <p className="text-lg text-amber-700 font-medium mt-2 tracking-wider">
              {diplomaSubtitle[language]}
            </p>
          </div>

          {/* Certification Statement */}
          <div className="text-center mb-6">
            <p className="text-gray-600 text-lg italic">{certifiesText[language]}</p>
            <h2 className="text-4xl font-serif font-bold text-red-700 my-4 tracking-wide">
              {certificate.trainee_name}
            </h2>
            <p className="text-gray-600 text-lg italic">{completedText[language]}</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-3 mb-2">
              {programTitle[language]}
            </h3>
            <p className="text-sm text-gray-500">
              Complete Edition 2025 • European Road Transport Operations
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="flex justify-center gap-8 my-6">
            <div className="text-center px-6 py-3 bg-gradient-to-b from-amber-50 to-amber-100/50 rounded-lg border border-amber-200">
              <p className="text-3xl font-bold text-amber-700">{certificate.chapters_completed}</p>
              <p className="text-xs text-gray-600 uppercase tracking-wide">
                {language === 'ro' ? 'Capitole' : language === 'de' ? 'Kapitel' : 'Chapters'}
              </p>
            </div>
            <div className="text-center px-6 py-3 bg-gradient-to-b from-green-50 to-green-100/50 rounded-lg border border-green-200">
              <p className="text-3xl font-bold text-green-700">{certificate.quizzes_passed}</p>
              <p className="text-xs text-gray-600 uppercase tracking-wide">
                {language === 'ro' ? 'Quizuri' : language === 'de' ? 'Quiz' : 'Quizzes'}
              </p>
            </div>
            <div className="text-center px-6 py-3 bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-lg border border-blue-200">
              <p className="text-3xl font-bold text-blue-700">{Math.round(certificate.average_score)}%</p>
              <p className="text-xs text-gray-600 uppercase tracking-wide">
                {language === 'ro' ? 'Scor Mediu' : language === 'de' ? 'Durchschnitt' : 'Avg Score'}
              </p>
            </div>
            {certificate.final_exam_score && (
              <div className="text-center px-6 py-3 bg-gradient-to-b from-purple-50 to-purple-100/50 rounded-lg border border-purple-200">
                <p className="text-3xl font-bold text-purple-700">{Math.round(certificate.final_exam_score)}%</p>
                <p className="text-xs text-gray-600 uppercase tracking-wide">
                  {language === 'ro' ? 'Examen Final' : language === 'de' ? 'Abschlussprüfung' : 'Final Exam'}
                </p>
              </div>
            )}
          </div>

          {/* Compliance Standards */}
          <div className="text-center mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              {language === 'ro' ? 'În conformitate cu standardele' : language === 'de' ? 'In Übereinstimmung mit' : 'In compliance with'}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {COMPLIANCE_STANDARDS.map((standard, idx) => (
                <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {standard}
                </span>
              ))}
            </div>
          </div>

          {/* Official Authorities */}
          <div className="text-center mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              {language === 'ro' ? 'Surse autorizate de referință' : language === 'de' ? 'Autorisierte Referenzquellen' : 'Authorized Reference Sources'}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {OFFICIAL_AUTHORITIES.map((auth, idx) => (
                <div key={idx} className="flex items-center gap-1 text-[10px] text-gray-600">
                  <Globe className="w-3 h-3 text-gray-400" />
                  <span className="font-semibold">{auth.abbr}</span>
                  <span className="text-gray-400">•</span>
                  <span>{auth.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="absolute bottom-10 left-0 right-0 px-16">
            <div className="flex justify-between items-end">
              {/* Left: Issue Info */}
              <div className="text-left">
                <p className="text-xs text-gray-500">{issuedOnText[language]}</p>
                <p className="text-sm font-semibold text-gray-700">
                  {format(new Date(certificate.issued_at), "dd MMMM yyyy", { locale: dateLocale })}
                </p>
                <div className="w-32 border-t border-gray-400 mt-8 mb-1" />
                <p className="text-xs text-gray-500">Training Director</p>
              </div>

              {/* Center: QR Code & Certificate Number */}
              <div className="text-center flex flex-col items-center">
                {qrCodeDataUrl ? (
                  <img src={qrCodeDataUrl} alt="Verification QR" className="w-20 h-20 mb-2" />
                ) : (
                  <div className="w-20 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center mb-2">
                    <span className="text-[8px] text-gray-400">QR</span>
                  </div>
                )}
                <p className="font-mono text-sm font-bold text-red-700">{certificate.certificate_code}</p>
                <p className="text-[8px] text-gray-400">Scan to verify authenticity</p>
              </div>

              {/* Right: Validity Info */}
              <div className="text-right">
                <p className="text-xs text-gray-500">{validUntilText[language]}</p>
                <p className="text-sm font-semibold text-gray-700">
                  {format(new Date(certificate.expires_at), "dd MMMM yyyy", { locale: dateLocale })}
                </p>
                <div className="w-32 border-t border-gray-400 mt-8 mb-1 ml-auto" />
                <p className="text-xs text-gray-500">Date of Issue</p>
              </div>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <div className="text-[100px] font-bold text-gray-900 rotate-[-25deg] whitespace-nowrap tracking-[0.2em]">
              ROSSIK CERTIFIED
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
