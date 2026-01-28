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
import rossikLogo from "@/assets/rossik-logo.jpg";

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
    total_quiz_questions?: number;
    chapter_pass_rate?: number;
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
    ro: "Formare în Expediție de Mărfuri",
    de: "Ausbildung für Spedition",
    en: "Freight Forwarding Training"
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
          {/* Classic Prestigious Border System */}
          {/* Outer gold border */}
          <div className="absolute inset-2 border-2 border-amber-600/60 pointer-events-none" />
          {/* Inner decorative border */}
          <div className="absolute inset-4 border border-amber-700/40 pointer-events-none" />
          {/* Innermost thin line */}
          <div className="absolute inset-6 border border-amber-600/25 pointer-events-none" />

          {/* Prestigious Corner Ornaments */}
          {/* Top Left */}
          <svg className="absolute top-1 left-1 w-28 h-28 pointer-events-none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4a574" />
                <stop offset="50%" stopColor="#b8860b" />
                <stop offset="100%" stopColor="#8b6914" />
              </linearGradient>
            </defs>
            {/* Outer curve */}
            <path d="M8,60 C8,25 25,8 60,8" fill="none" stroke="url(#goldGrad)" strokeWidth="3"/>
            {/* Inner curve */}
            <path d="M12,55 C12,28 28,12 55,12" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            {/* Decorative scroll */}
            <path d="M20,20 Q25,15 30,20 Q35,25 30,30 Q25,28 22,24" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            <circle cx="18" cy="18" r="2" fill="#b8860b"/>
            {/* Leaf ornament */}
            <path d="M35,10 Q40,15 35,20 M35,10 Q30,15 35,20" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.7"/>
            <path d="M10,35 Q15,40 20,35 M10,35 Q15,30 20,35" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.7"/>
          </svg>
          
          {/* Top Right */}
          <svg className="absolute top-1 right-1 w-28 h-28 pointer-events-none" viewBox="0 0 100 100">
            <path d="M92,60 C92,25 75,8 40,8" fill="none" stroke="url(#goldGrad)" strokeWidth="3"/>
            <path d="M88,55 C88,28 72,12 45,12" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            <path d="M80,20 Q75,15 70,20 Q65,25 70,30 Q75,28 78,24" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            <circle cx="82" cy="18" r="2" fill="#b8860b"/>
            <path d="M65,10 Q60,15 65,20 M65,10 Q70,15 65,20" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.7"/>
            <path d="M90,35 Q85,40 80,35 M90,35 Q85,30 80,35" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.7"/>
          </svg>
          
          {/* Bottom Left */}
          <svg className="absolute bottom-1 left-1 w-28 h-28 pointer-events-none" viewBox="0 0 100 100">
            <path d="M8,40 C8,75 25,92 60,92" fill="none" stroke="url(#goldGrad)" strokeWidth="3"/>
            <path d="M12,45 C12,72 28,88 55,88" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            <path d="M20,80 Q25,85 30,80 Q35,75 30,70 Q25,72 22,76" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            <circle cx="18" cy="82" r="2" fill="#b8860b"/>
            <path d="M35,90 Q40,85 35,80 M35,90 Q30,85 35,80" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.7"/>
            <path d="M10,65 Q15,60 20,65 M10,65 Q15,70 20,65" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.7"/>
          </svg>
          
          {/* Bottom Right */}
          <svg className="absolute bottom-1 right-1 w-28 h-28 pointer-events-none" viewBox="0 0 100 100">
            <path d="M92,40 C92,75 75,92 40,92" fill="none" stroke="url(#goldGrad)" strokeWidth="3"/>
            <path d="M88,45 C88,72 72,88 45,88" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            <path d="M80,80 Q75,85 70,80 Q65,75 70,70 Q75,72 78,76" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5"/>
            <circle cx="82" cy="82" r="2" fill="#b8860b"/>
            <path d="M65,90 Q60,85 65,80 M65,90 Q70,85 65,80" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.7"/>
            <path d="M90,65 Q85,60 80,65 M90,65 Q85,70 80,65" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.7"/>
          </svg>

          {/* Top Center Royal Crest */}
          <svg className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-10 pointer-events-none" viewBox="0 0 120 40">
            <path d="M10,20 Q30,8 60,20 Q90,32 110,20" fill="none" stroke="#b8860b" strokeWidth="1.5" opacity="0.6"/>
            <path d="M20,20 Q40,12 60,20 Q80,28 100,20" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.4"/>
            {/* Center diamond */}
            <path d="M55,20 L60,12 L65,20 L60,28 Z" fill="none" stroke="#b8860b" strokeWidth="1.5" opacity="0.7"/>
            <circle cx="60" cy="20" r="2" fill="#b8860b" opacity="0.6"/>
            {/* Side flourishes */}
            <path d="M35,18 Q40,15 45,18" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.5"/>
            <path d="M75,18 Q80,15 85,18" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.5"/>
          </svg>

          {/* Bottom Center Laurel */}
          <svg className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-10 pointer-events-none" viewBox="0 0 120 40">
            <path d="M10,20 Q30,32 60,20 Q90,8 110,20" fill="none" stroke="#b8860b" strokeWidth="1.5" opacity="0.6"/>
            <path d="M20,20 Q40,28 60,20 Q80,12 100,20" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.4"/>
            <circle cx="60" cy="20" r="3" fill="none" stroke="#b8860b" strokeWidth="1.5" opacity="0.6"/>
          </svg>

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

          {/* Company Logo - Top Left */}
          <div className="absolute top-10 left-12">
            <img 
              src={rossikLogo} 
              alt="E. Rossik Transport & Logistics GmbH" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Header */}
          <div className="text-center mt-8 mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-[0.4em] font-medium mb-2">
              E. Rossik Transport & Logistics GmbH
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
              Complete Edition 2026 • European Road Transport Operations
            </p>
          </div>

          {/* Achievement Stats */}
          {(() => {
            const totalQuizQuestions = certificate.total_quiz_questions || (certificate.quizzes_passed * 10);
            const correctAnswers = Math.round((certificate.average_score / 10) * totalQuizQuestions);
            const passRate = totalQuizQuestions > 0 ? Math.round((correctAnswers / totalQuizQuestions) * 100) : 0;
            const finalExamPoints = certificate.final_exam_score ? Math.round(certificate.final_exam_score) : 0;
            
            return (
              <div className="flex justify-center gap-4 my-5 flex-wrap">
                <div className="text-center px-4 py-2 bg-gradient-to-b from-amber-50 to-amber-100/50 rounded-lg border border-amber-200">
                  <p className="text-2xl font-bold text-amber-700">50</p>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wide">
                    {language === 'ro' ? 'Capitole Parcurse' : language === 'de' ? 'Kapitel Abgeschlossen' : 'Chapters Completed'}
                  </p>
                </div>
                <div className="text-center px-4 py-2 bg-gradient-to-b from-green-50 to-green-100/50 rounded-lg border border-green-200">
                  <p className="text-2xl font-bold text-green-700">{correctAnswers}/{totalQuizQuestions}</p>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wide">
                    {language === 'ro' ? 'Întrebări Quiz Corecte' : language === 'de' ? 'Richtige Quiz-Antworten' : 'Correct Quiz Answers'}
                  </p>
                </div>
                <div className="text-center px-4 py-2 bg-gradient-to-b from-blue-50 to-blue-100/50 rounded-lg border border-blue-200">
                  <p className="text-2xl font-bold text-blue-700">{passRate}%</p>
                  <p className="text-[10px] text-gray-600 uppercase tracking-wide">
                    {language === 'ro' ? 'Rată Promovare' : language === 'de' ? 'Bestehensquote' : 'Pass Rate'}
                  </p>
                </div>
                {certificate.final_exam_score && (
                  <div className="text-center px-4 py-2 bg-gradient-to-b from-purple-50 to-purple-100/50 rounded-lg border border-purple-200">
                    <p className="text-2xl font-bold text-purple-700">{finalExamPoints}/100</p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-wide">
                      {language === 'ro' ? 'Puncte Examen Final' : language === 'de' ? 'Abschlussprüfung Punkte' : 'Final Exam Points'}
                    </p>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Compliance Standards */}
          <div className="text-center mb-3">
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
          <div className="text-center">
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
          <div className="absolute bottom-8 left-0 right-0 px-20">
            <div className="flex justify-between items-end">
              {/* Left: Issue Info & Signature Space */}
              <div className="text-left bg-white">
                <p className="text-xs text-gray-500">{issuedOnText[language]}</p>
                <p className="text-sm font-semibold text-gray-700">
                  {format(new Date(certificate.issued_at), "dd MMMM yyyy", { locale: dateLocale })}
                </p>
                {/* Empty space for manual signature */}
                <div className="h-10 w-40">
                  {/* Signature space */}
                </div>
                <div className="w-40 border-t border-gray-400 mb-1" />
                <p className="text-xs font-semibold text-gray-700">Alexandru I. Moldovan</p>
                <p className="text-[10px] text-gray-500">Chief Development Officer</p>
              </div>

              {/* Center: QR Code & Certificate Number */}
              <div className="text-center flex flex-col items-center bg-white px-2">
                {qrCodeDataUrl ? (
                  <img src={qrCodeDataUrl} alt="Verification QR" className="w-20 h-20 mb-1" />
                ) : (
                  <div className="w-20 h-20 border-2 border-dashed border-gray-300 flex items-center justify-center mb-1">
                    <span className="text-[8px] text-gray-400">QR</span>
                  </div>
                )}
                <p className="font-mono text-sm font-bold text-red-700">{certificate.certificate_code}</p>
                <p className="text-[8px] text-gray-400">Scan to verify authenticity</p>
              </div>

              {/* Right: Validity Info */}
              <div className="text-right bg-white">
                {/* Empty space for alignment */}
                <div className="h-8 w-40 ml-auto">
                  {/* Space */}
                </div>
                <p className="text-xs text-gray-500">{validUntilText[language]}</p>
                <p className="text-sm font-semibold text-gray-700">
                  {format(new Date(certificate.expires_at), "dd MMMM yyyy", { locale: dateLocale })}
                </p>
                <div className="w-40 border-t border-gray-400 mt-1 mb-1 ml-auto" />
                <p className="text-xs font-semibold text-gray-700">E. Rossik Transport & Logistics GmbH</p>
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
