import { InfoCard } from "../InfoCard";
import { Quiz } from "../Quiz";
import { ChapterHero } from "../ChapterHero";
import { MultiModalContent } from "../MultiModalContent";
import { ChapterImage } from "../ChapterImage";
import { DataTable } from "../DataTable";
import { ProcessMap, FlowDiagram } from "../FlowDiagram";
import {
  Diamond, Shield, Lock, Eye, Truck, MapPin,
  FileText, AlertTriangle, Phone, Users, CheckCircle, Book, Camera, Clock
} from "lucide-react";
import { useChapterTranslation } from "@/hooks/useChapterTranslation";
import highValueSecurityImg from "@/assets/chapters/high-value-security.jpg";

export function HighValueGoodsChapter() {
  const { ct } = useChapterTranslation('high-value-goods');

  // Security protocols table
  const protocolsHeaders = [
    ct('protocolLevelHeader') || "Security Level",
    ct('protocolValueHeader') || "Cargo Value",
    ct('protocolMeasuresHeader') || "Required Measures",
    ct('protocolExamplesHeader') || "Example Cargo"
  ];

  const protocolsRows = [
    [
      <span className="font-semibold text-success">{ct('levelStandard') || "Standard"}</span>,
      "< €50,000",
      ct('measureStandard') || "Sealed trailer, GPS, standard insurance",
      ct('exampleStandard') || "Electronics, textiles"
    ],
    [
      <span className="font-semibold text-warning">{ct('levelElevated') || "Elevated"}</span>,
      "€50k - €250k",
      ct('measureElevated') || "+ Secure parking, driver vetting, 24/7 monitoring",
      ct('exampleElevated') || "Consumer electronics, spirits"
    ],
    [
      <span className="font-semibold text-destructive">{ct('levelHigh') || "High"}</span>,
      "€250k - €1M",
      ct('measureHigh') || "+ Armed escort, convoy, TAPA FSR",
      ct('exampleHigh') || "Luxury goods, pharmaceuticals"
    ],
    [
      <span className="font-semibold text-primary">{ct('levelCritical') || "Critical"}</span>,
      "> €1M",
      ct('measureCritical') || "+ Police liaison, decoy vehicles, geofencing",
      ct('exampleCritical') || "Art, precious metals, cash"
    ]
  ];

  // Security process flow
  const securityProcessSteps = [
    { id: "1", label: ct('securityStep1') || "Risk Assessment", description: ct('securityStep1Desc') || "Route & cargo analysis", color: "primary" as const },
    { id: "2", label: ct('securityStep2') || "Vehicle Prep", description: ct('securityStep2Desc') || "Locks, GPS, cameras", color: "info" as const },
    { id: "3", label: ct('securityStep3') || "Secure Loading", description: ct('securityStep3Desc') || "Witness + photos", color: "warning" as const },
    { id: "4", label: ct('securityStep4') || "Transit", description: ct('securityStep4Desc') || "Real-time tracking", color: "success" as const },
    { id: "5", label: ct('securityStep5') || "Secure Delivery", description: ct('securityStep5Desc') || "ID verify + sign", color: "primary" as const }
  ];

  // Hotspot regions
  const hotspotData = [
    {
      name: ct('hotspotFrance') || "France (A7, A1)",
      color: "destructive" as const,
      steps: [
        ct('hotspotFranceRisk1') || "Service areas: highest theft rate",
        ct('hotspotFranceRisk2') || "Night driving restrictions apply",
        ct('hotspotFranceRisk3') || "Secure parking mandatory"
      ]
    },
    {
      name: ct('hotspotBenelux') || "Belgium/Netherlands",
      color: "warning" as const,
      steps: [
        ct('hotspotBeneluxRisk1') || "Port areas: cargo theft hotspot",
        ct('hotspotBeneluxRisk2') || "Organized gang activity",
        ct('hotspotBeneluxRisk3') || "Minimal night stops recommended"
      ]
    },
    {
      name: ct('hotspotUK') || "UK (M6, M25)",
      color: "warning" as const,
      steps: [
        ct('hotspotUKRisk1') || "Industrial estates: target areas",
        ct('hotspotUKRisk2') || "Trailer theft increasing",
        ct('hotspotUKRisk3') || "Use TAPA-certified parking"
      ]
    },
    {
      name: ct('hotspotEastern') || "Eastern Borders",
      color: "info" as const,
      steps: [
        ct('hotspotEasternRisk1') || "Customs delays create exposure",
        ct('hotspotEasternRisk2') || "Document theft risk",
        ct('hotspotEasternRisk3') || "Convoy travel recommended"
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      <ChapterHero
        title={ct("chapterTitle")}
        description={ct("heroDescription")}
        icon={Diamond}
        variant="high-value-goods"
      />

      {/* Introduction */}
      <div className="info-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Diamond className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="section-title mb-1.5 sm:mb-2">{ct('section1Title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('intro')}</p>
          </div>
        </div>
      </div>

      {/* What Are High Value Goods */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Diamond className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section1Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section1Content')}</p>
        </div>
      </section>

      {/* Security Process Flow - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('securityProcessTitle') || "Security Transport Process"}</span>
        </h2>
        <FlowDiagram 
          title="" 
          steps={securityProcessSteps} 
          direction="horizontal" 
        />
      </section>

      {/* Security Protocols Table - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('protocolsTitle') || "Security Levels & Protocols"}</span>
        </h2>
        <DataTable headers={protocolsHeaders} rows={protocolsRows} />
      </section>

      {/* Risk Assessment & Security */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section2Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section2Title')} variant="warning" icon={AlertTriangle}>
            <p className="text-muted-foreground">{ct('section2Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section3Title')} icon={Lock}>
            <p className="text-muted-foreground">{ct('section3Content')}</p>
          </InfoCard>
        </div>
        
        {/* Security Transport Image - contextual placement */}
        <ChapterImage
          src={highValueSecurityImg}
          alt="High security transport truck with advanced protection systems"
          variant="float-right"
          className="mt-4"
        />
      </section>

      {/* European Hotspots - NEW */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('hotspotsTitle') || "European Theft Hotspots"}</span>
        </h2>
        <ProcessMap 
          title="" 
          phases={hotspotData} 
        />
      </section>

      {/* TAPA Certification Card - NEW */}
      <section>
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-warning">
            <Shield className="w-5 h-5" />
            {ct('tapaTitle') || "TAPA (Transported Asset Protection Association)"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card rounded-lg p-4 border border-border">
              <h4 className="font-semibold text-sm text-primary mb-2">TSR</h4>
              <p className="text-xs text-muted-foreground">{ct('tapaFSR') || "Facility Security Requirements - warehouse/parking standards"}</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <h4 className="font-semibold text-sm text-primary mb-2">FSR</h4>
              <p className="text-xs text-muted-foreground">{ct('tapaTSR') || "Trucking Security Requirements - vehicle & driver standards"}</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <h4 className="font-semibold text-sm text-primary mb-2">PSR</h4>
              <p className="text-xs text-muted-foreground">{ct('tapaPSR') || "Parking Security Requirements - secure parking certification"}</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {ct('tapaNote') || "Many insurers require TAPA certification for high-value cargo coverage."}
          </p>
        </div>
      </section>

      {/* Loading Procedures */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section4Title')}</span>
        </h2>
        <div className="info-card">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{ct('section4Content')}</p>
        </div>
      </section>

      {/* Pre-Loading Checklist - NEW */}
      <section>
        <div className="bg-accent border border-primary/20 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-primary">
            <CheckCircle className="w-5 h-5" />
            {ct('preLoadChecklistTitle') || "Pre-Loading Security Checklist"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-primary flex-shrink-0" />
                {ct('checkPhoto') || "Photo document empty trailer condition"}
              </li>
              <li className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary flex-shrink-0" />
                {ct('checkWitness') || "Independent witness during loading"}
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary flex-shrink-0" />
                {ct('checkSeals') || "Verify seal numbers match CMR"}
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                {ct('checkDocs') || "Complete packing list verification"}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                {ct('checkGPS') || "Confirm GPS tracker activation"}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                {ct('checkRoute') || "Route plan with secure parking stops"}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parking & Monitoring */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section5Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section5Title')} icon={MapPin}>
            <p className="text-muted-foreground">{ct('section5Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section6Title')} icon={Eye}>
            <p className="text-muted-foreground">{ct('section6Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Insurance & Documentation */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section7Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section7Title')} variant="info" icon={Shield}>
            <p className="text-muted-foreground">{ct('section7Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section8Title')} icon={FileText}>
            <p className="text-muted-foreground">{ct('section8Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Incident Response & Partners */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('section9Title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <InfoCard title={ct('section9Title')} variant="warning" icon={Phone}>
            <p className="text-muted-foreground">{ct('section9Content')}</p>
          </InfoCard>
          <InfoCard title={ct('section10Title')} icon={Users}>
            <p className="text-muted-foreground">{ct('section10Content')}</p>
          </InfoCard>
        </div>
      </section>

      {/* Best Practices & Common Mistakes */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-success/10 border border-success/30 rounded-xl p-4 sm:p-5 lg:p-6">
            <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-success text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>{ct('bestPracticesTitle')}</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• {ct('bestPractice1')}</li>
              <li>• {ct('bestPractice2')}</li>
              <li>• {ct('bestPractice3')}</li>
            </ul>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 sm:p-5 lg:p-6">
            <h3 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-destructive text-sm sm:text-base">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>{ct('commonMistakesTitle')}</span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>• {ct('commonMistake1')}</li>
              <li>• {ct('commonMistake2')}</li>
              <li>• {ct('commonMistake3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section>
        <h2 className="section-title flex items-center gap-2 sm:gap-3">
          <Book className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
          <span>{ct('glossaryTitle')}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div key={num} className="bg-card border border-border rounded-lg p-3 sm:p-4 hover:border-primary/50 transition-colors">
              <dt className="font-semibold text-primary mb-0.5 sm:mb-1 text-sm sm:text-base">
                {ct(`glossaryTerm${num}`)}
              </dt>
              <dd className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ct(`glossaryDef${num}`)}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Modal Content */}
      <MultiModalContent chapterId="high-value-goods" />

      {/* Quiz */}
      <Quiz title={ct("quizTitle")} chapterId="high-value-goods" />
    </div>
  );
}
