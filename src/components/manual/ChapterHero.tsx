import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { getChapterNumber } from "@/hooks/useChapterNumber";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContentLevelBadge, ContentLevel } from "./ContentLevelBadge";
import { ContentDisclaimer } from "./ContentDisclaimer";
import { VersionInfo } from "./VersionInfo";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

type HeroVariant = 
  // Foundation Section (Chapters 1-4) - Purple tones
  | "intro"           // Deep violet
  | "mindset"         // Royal purple
  | "softskills"      // Indigo
  | "workflow"        // Purple-blue
  // Equipment Section (Chapters 5-10) - Blue/Cyan tones
  | "vehicle"         // Deep blue
  | "loading"         // Steel blue
  | "reefer"          // Ice blue
  | "warehouse"       // Navy
  | "adr"             // Electric blue
  | "documents"       // Slate blue
  // Trade Section (Chapters 11-17) - Green/Teal tones
  | "incoterms"       // Emerald
  | "compliance"      // Forest green
  | "drivingtime"     // Teal
  | "customs"         // Sea green
  | "europezones"     // Jade
  | "insurance"       // Mint
  | "licenses"        // Dark teal
  // Commercial Section (Chapters 18-25) - Orange/Amber tones
  | "clients"         // Amber
  | "pricing"         // Orange
  | "negotiation"     // Coral
  | "commercial"      // Burnt orange
  | "exchanges"       // Gold
  | "carrier"         // Tangerine
  | "communication"   // Peach
  | "redflags"        // Red-orange
  // Technology Section (Chapters 26-29) - Magenta/Pink tones
  | "technology"      // Magenta
  | "supplychain"     // Fuchsia
  | "translogica"     // Rose
  | "kpi"             // Hot pink
  // Finance Section (Chapters 30-34) - Warm greens/Gold tones
  | "payment"         // Olive green
  | "accounting"      // Bronze
  | "claims"          // Copper
  | "risk"            // Dark gold
  | "environment"     // Sage
  // Practical Section (Chapters 35-40) - Mixed vibrant tones
  | "emergency"       // Crimson red
  | "training"        // Bright purple
  | "casestudies"     // Turquoise
  | "checklists"      // Lime green
  | "glossary"        // Steel gray
  | "fleet"           // Dark cyan
  // New Chapters
  | "authorities"
  | "digitalization"
  | "european-countries"
  | "express-transport"
  | "high-value-goods"
  | "intermodal"
  | "networking"
  | "professional-development"
  | "stress-management"
  | "sustainability"
  | "default";

// Import chapter hero images
import introHero from "@/assets/chapters/intro-hero.jpg";
import mindsetHero from "@/assets/chapters/mindset-hero.jpg";
import softSkillsHero from "@/assets/chapters/soft-skills-hero.jpg";
import stressManagementHero from "@/assets/chapters/stress-management-hero.jpg";
import workflowHero from "@/assets/chapters/workflow-hero.jpg";
import vehicleHero from "@/assets/chapters/vehicle-hero.jpg";
import loadingHero from "@/assets/chapters/loading-hero.jpg";
import reeferHero from "@/assets/chapters/reefer-hero.jpg";
import expressTransportHero from "@/assets/chapters/express-transport-hero.jpg";
import intermodalHero from "@/assets/chapters/intermodal-hero.jpg";
// Chapters 11-20
import documentsHero from "@/assets/chapters/documents-hero.jpg";
import customsHero from "@/assets/chapters/customs-hero.jpg";
import pricingHero from "@/assets/chapters/pricing-hero.jpg";
import incotermsHero from "@/assets/chapters/incoterms-hero.jpg";
import adrHero from "@/assets/chapters/adr-hero.jpg";
import claimsHero from "@/assets/chapters/claims-hero.jpg";
import insuranceHero from "@/assets/chapters/insurance-hero.jpg";
import paymentHero from "@/assets/chapters/payment-hero.jpg";
import negotiationHero from "@/assets/chapters/negotiation-hero.jpg";
import communicationHero from "@/assets/chapters/communication-hero.jpg";
// Chapters 21-30
import carrierManagementHero from "@/assets/chapters/carrier-management-hero.jpg";
import exchangesHero from "@/assets/chapters/exchanges-hero.jpg";
import clientsHero from "@/assets/chapters/clients-hero.jpg";
import commercialHero from "@/assets/chapters/commercial-hero.jpg";
import redFlagsHero from "@/assets/chapters/red-flags-hero.jpg";
import technologyHero from "@/assets/chapters/technology-hero.jpg";
import supplyChainHero from "@/assets/chapters/supply-chain-hero.jpg";
import kpiHero from "@/assets/chapters/kpi-hero.jpg";
import fleetHero from "@/assets/chapters/fleet-hero.jpg";
import complianceHero from "@/assets/chapters/compliance-hero.jpg";
// Chapters 31-50
import drivingTimeHero from "@/assets/chapters/driving-time-hero.jpg";
import europeZonesHero from "@/assets/chapters/europe-zones-hero.jpg";
import warehouseHero from "@/assets/chapters/warehouse-hero.jpg";
import translogicaHero from "@/assets/chapters/translogica-hero.jpg";
import accountingHero from "@/assets/chapters/accounting-hero.jpg";
import riskManagementHero from "@/assets/chapters/risk-management-hero.jpg";
import environmentHero from "@/assets/chapters/environment-hero.jpg";
import emergencyHero from "@/assets/chapters/emergency-hero.jpg";
import trainingHero from "@/assets/chapters/training-hero.jpg";
import caseStudiesHero from "@/assets/chapters/case-studies-hero.jpg";
import checklistsHero from "@/assets/chapters/checklists-hero.jpg";
import glossaryHero from "@/assets/chapters/glossary-hero.jpg";
import authoritiesHero from "@/assets/chapters/authorities-hero.jpg";
import sustainabilityHero from "@/assets/chapters/sustainability-hero.jpg";
import europeanCountriesHero from "@/assets/chapters/european-countries-hero.jpg";
import highValueGoodsHero from "@/assets/chapters/high-value-goods-hero.jpg";
import digitalizationHero from "@/assets/chapters/digitalization-hero.jpg";
import networkingHero from "@/assets/chapters/networking-hero.jpg";
import professionalDevelopmentHero from "@/assets/chapters/professional-development-hero.jpg";
import licensesOversizeHero from "@/assets/chapters/licenses-oversize-hero.jpg";

// Map variants to hero images
const heroImages: Partial<Record<HeroVariant, string>> = {
  intro: introHero,
  mindset: mindsetHero,
  softskills: softSkillsHero,
  "stress-management": stressManagementHero,
  workflow: workflowHero,
  vehicle: vehicleHero,
  loading: loadingHero,
  reefer: reeferHero,
  "express-transport": expressTransportHero,
  intermodal: intermodalHero,
  documents: documentsHero,
  customs: customsHero,
  pricing: pricingHero,
  incoterms: incotermsHero,
  adr: adrHero,
  claims: claimsHero,
  insurance: insuranceHero,
  payment: paymentHero,
  negotiation: negotiationHero,
  communication: communicationHero,
  carrier: carrierManagementHero,
  exchanges: exchangesHero,
  clients: clientsHero,
  commercial: commercialHero,
  redflags: redFlagsHero,
  technology: technologyHero,
  supplychain: supplyChainHero,
  kpi: kpiHero,
  fleet: fleetHero,
  compliance: complianceHero,
  drivingtime: drivingTimeHero,
  europezones: europeZonesHero,
  warehouse: warehouseHero,
  translogica: translogicaHero,
  accounting: accountingHero,
  risk: riskManagementHero,
  environment: environmentHero,
  emergency: emergencyHero,
  training: trainingHero,
  casestudies: caseStudiesHero,
  checklists: checklistsHero,
  glossary: glossaryHero,
  authorities: authoritiesHero,
  sustainability: sustainabilityHero,
  "european-countries": europeanCountriesHero,
  "high-value-goods": highValueGoodsHero,
  digitalization: digitalizationHero,
  networking: networkingHero,
  "professional-development": professionalDevelopmentHero,
  licenses: licensesOversizeHero,
};

// Map variant to chapter ID for number calculation
const variantToChapterId: Record<HeroVariant, string> = {
  intro: "intro",
  mindset: "mindset",
  softskills: "soft-skills",
  workflow: "workflow",
  vehicle: "vehicle",
  loading: "loading",
  reefer: "reefer",
  warehouse: "warehouse",
  adr: "adr",
  documents: "documents",
  incoterms: "incoterms",
  compliance: "compliance",
  drivingtime: "driving-time",
  customs: "customs",
  europezones: "europe-zones",
  insurance: "insurance",
  licenses: "licenses-oversize",
  clients: "clients",
  pricing: "pricing",
  negotiation: "negotiation",
  commercial: "commercial",
  exchanges: "exchanges",
  carrier: "carrier-management",
  communication: "communication",
  redflags: "red-flags",
  technology: "technology",
  supplychain: "supply-chain",
  translogica: "translogica",
  kpi: "kpi",
  payment: "payment",
  accounting: "accounting",
  claims: "claims",
  risk: "risk-management",
  environment: "environment",
  emergency: "emergency",
  training: "training",
  casestudies: "case-studies",
  checklists: "checklists",
  glossary: "glossary",
  fleet: "fleet",
  // New chapters
  authorities: "authorities",
  digitalization: "digitalization",
  "european-countries": "european-countries",
  "express-transport": "express-transport",
  "high-value-goods": "high-value-goods",
  intermodal: "intermodal",
  networking: "networking",
  "professional-development": "professional-development",
  "stress-management": "stress-management",
  sustainability: "sustainability",
  default: "intro",
};

interface ChapterHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: HeroVariant;
  showImage?: boolean;
}

export function ChapterHero({ 
  title, 
  description, 
  icon: Icon,
  variant = "default",
  showImage = true 
}: ChapterHeroProps) {
  const heroImage = heroImages[variant];
  const { language } = useLanguage();
  const [contentLevel, setContentLevel] = useState<ContentLevel>('informational');
  
  // Get chapter number based on variant
  const chapterId = variantToChapterId[variant];
  const chapterNum = getChapterNumber(chapterId);
  
  // Fetch content level from database
  useEffect(() => {
    const fetchContentLevel = async () => {
      const { data, error } = await supabase
        .from('chapters')
        .select('content_level')
        .eq('id', chapterId)
        .single();
      
      if (data && !error) {
        setContentLevel(data.content_level as ContentLevel);
      }
    };
    fetchContentLevel();
  }, [chapterId]);
  
  // Generate chapter label based on language
  const chapterLabels: Record<string, string> = {
    ro: `Capitol ${chapterNum}`,
    de: `Kapitel ${chapterNum}`,
    en: `Chapter ${chapterNum}`,
  };
  const chapterLabel = chapterLabels[language] || chapterLabels.en;
  const variantClasses: Record<HeroVariant, string> = {
    // Foundation Section - Purple spectrum
    intro: "hero-intro",
    mindset: "hero-mindset",
    softskills: "hero-softskills",
    workflow: "hero-workflow",
    // Equipment Section - Blue spectrum
    vehicle: "hero-vehicle",
    loading: "hero-loading",
    reefer: "hero-reefer",
    warehouse: "hero-warehouse",
    adr: "hero-adr",
    documents: "hero-documents",
    // Trade Section - Green spectrum
    incoterms: "hero-incoterms",
    compliance: "hero-compliance",
    drivingtime: "hero-drivingtime",
    customs: "hero-customs",
    europezones: "hero-europezones",
    insurance: "hero-insurance",
    licenses: "hero-licenses",
    // Commercial Section - Orange spectrum
    clients: "hero-clients",
    pricing: "hero-pricing",
    negotiation: "hero-negotiation",
    commercial: "hero-commercial",
    exchanges: "hero-exchanges",
    carrier: "hero-carrier",
    communication: "hero-communication",
    redflags: "hero-redflags",
    // Technology Section - Magenta spectrum
    technology: "hero-technology",
    supplychain: "hero-supplychain",
    translogica: "hero-translogica",
    kpi: "hero-kpi",
    // Finance Section - Warm spectrum
    payment: "hero-payment",
    accounting: "hero-accounting",
    claims: "hero-claims",
    risk: "hero-risk",
    environment: "hero-environment",
    // Practical Section - Mixed spectrum
    emergency: "hero-emergency",
    training: "hero-training",
    casestudies: "hero-casestudies",
    checklists: "hero-checklists",
    glossary: "hero-glossary",
    fleet: "hero-fleet",
    // New chapters
    authorities: "hero-authorities",
    digitalization: "hero-digitalization",
    "european-countries": "hero-european-countries",
    "express-transport": "hero-express-transport",
    "high-value-goods": "hero-high-value-goods",
    intermodal: "hero-intermodal",
    networking: "hero-networking",
    "professional-development": "hero-professional-development",
    "stress-management": "hero-stress-management",
    sustainability: "hero-sustainability",
    default: "",
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className={cn("hero-section text-primary-foreground relative overflow-hidden", variantClasses[variant])}>
        {/* Background Image */}
        {showImage && heroImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="" 
              className="w-full h-full object-cover opacity-20"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-current/80 to-transparent" />
          </div>
        )}
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg flex-shrink-0">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <p className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                  {chapterLabel}
                </p>
                <ContentLevelBadge level={contentLevel} size="sm" showLabel={false} className="bg-white/20 border-white/30 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight break-words">
                {title}
              </h1>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl leading-relaxed font-medium mt-3 sm:mt-4 md:mt-6">
            {description}
          </p>
        </div>
      </div>
      
      {/* Hero Image Preview (when available) */}
      {showImage && heroImage && (
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-48 md:h-64 object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      {/* Version Info */}
      <VersionInfo chapterId={chapterId} />
      
      {/* Content Disclaimer for Level 2 and 3 */}
      <ContentDisclaimer level={contentLevel} />
    </div>
  );
}
