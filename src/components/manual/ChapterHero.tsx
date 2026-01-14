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
  | "default";

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
  default: "intro",
};

interface ChapterHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: HeroVariant;
}

export function ChapterHero({ 
  title, 
  description, 
  icon: Icon,
  variant = "default" 
}: ChapterHeroProps) {
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
    default: "",
  };

  return (
    <div className="space-y-4">
      <div className={cn("hero-section text-primary-foreground", variantClasses[variant])}>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Icon className="w-10 h-10" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-white/80 text-sm font-semibold uppercase tracking-widest">
                  {chapterLabel}
                </p>
                <ContentLevelBadge level={contentLevel} size="sm" showLabel={false} className="bg-white/20 border-white/30 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
                {title}
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed font-medium mt-6">
            {description}
          </p>
        </div>
      </div>
      
      {/* Version Info */}
      <VersionInfo chapterId={chapterId} />
      
      {/* Content Disclaimer for Level 2 and 3 */}
      <ContentDisclaimer level={contentLevel} />
    </div>
  );
}
