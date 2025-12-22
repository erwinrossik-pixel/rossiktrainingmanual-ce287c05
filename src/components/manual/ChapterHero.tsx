import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface ChapterHeroProps {
  chapterNumber: string;
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: HeroVariant;
}

export function ChapterHero({ 
  chapterNumber, 
  title, 
  description, 
  icon: Icon,
  variant = "default" 
}: ChapterHeroProps) {
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
    <div className={cn("hero-section text-primary-foreground", variantClasses[variant])}>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Icon className="w-10 h-10" />
          </div>
          <div>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">
              {chapterNumber}
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
