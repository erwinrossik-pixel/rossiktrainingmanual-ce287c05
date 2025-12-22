import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroVariant = 
  | "foundation" 
  | "equipment" 
  | "trade" 
  | "commercial" 
  | "technology" 
  | "finance" 
  | "practical";

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
  variant = "practical" 
}: ChapterHeroProps) {
  const variantClasses: Record<HeroVariant, string> = {
    foundation: "hero-section-foundation",
    equipment: "hero-section-equipment",
    trade: "hero-section-trade",
    commercial: "hero-section-commercial",
    technology: "hero-section-technology",
    finance: "hero-section-finance",
    practical: "", // Uses default hero-section gradient
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
