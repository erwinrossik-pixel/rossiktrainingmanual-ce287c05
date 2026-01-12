import { cn } from "@/lib/utils";
import { getChapterNumber } from "@/hooks/useChapterNumber";
import { useLanguage } from "@/contexts/LanguageContext";

// Map variant to chapter ID for number calculation
const variantToChapterId = {
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

export function ChapterHero({ 
  title, 
  description, 
  icon: Icon,
  variant = "default" 
}) {
  const { language } = useLanguage();
  
  // Get chapter number based on variant
  const chapterId = variantToChapterId[variant];
  const chapterNum = getChapterNumber(chapterId);
  
  // Generate chapter label based on language
  const chapterLabels = {
    ro: `Capitol ${chapterNum}`,
    de: `Kapitel ${chapterNum}`,
    en: `Chapter ${chapterNum}`,
  };
  const chapterLabel = chapterLabels[language] || chapterLabels.en;
  
  const variantClasses = {
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
    <div className={cn("hero-section text-primary-foreground", variantClasses[variant])}>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Icon className="w-10 h-10" />
          </div>
          <div>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">
              {chapterLabel}
            </p>
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
  );
}
