import { ChevronLeft, ChevronRight, CheckCircle2, Sparkles, Lock, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Ordered chapter list matching sidebar sections (must match Sidebar.tsx exactly)
const chapterOrder = [
  // Foundation (5 chapters)
  { id: "intro", label: "Introduction" },
  { id: "mindset", label: "Role & Mindset" },
  { id: "soft-skills", label: "Soft Skills" },
  { id: "stress-management", label: "Stress Management" },
  { id: "workflow", label: "Operational Workflow" },
  // Equipment & Handling (7 chapters)
  { id: "vehicle", label: "Vehicle Reference" },
  { id: "loading", label: "Loading & Securing" },
  { id: "reefer", label: "Temperature Transport" },
  { id: "express-transport", label: "Express Transport" },
  { id: "intermodal", label: "Intermodal Transport" },
  { id: "warehouse", label: "Warehouse & Cross-Dock" },
  { id: "adr", label: "ADR Dangerous Goods" },
  // Documents & Compliance (7 chapters)
  { id: "documents", label: "Transport Documents" },
  { id: "incoterms", label: "Incoterms & Trade" },
  { id: "customs", label: "Customs & Borders" },
  { id: "authorities", label: "Authorities" },
  { id: "compliance", label: "Drivers' Hours" },
  { id: "driving-time", label: "Shift vs Driving Time" },
  { id: "licenses-oversize", label: "Licenses & Oversize" },
  // Geography & Environment (5 chapters)
  { id: "europe-zones", label: "European Zones" },
  { id: "european-countries", label: "European Countries" },
  { id: "environment", label: "Environmental" },
  { id: "sustainability", label: "Sustainability" },
  { id: "supply-chain", label: "Supply Chain" },
  // Commercial Skills (9 chapters)
  { id: "pricing", label: "Pricing & Tolls" },
  { id: "commercial", label: "Commercial Skills" },
  { id: "negotiation", label: "Negotiation" },
  { id: "clients", label: "Finding Clients" },
  { id: "carrier-management", label: "Carrier Management" },
  { id: "exchanges", label: "Freight Exchanges" },
  { id: "communication", label: "Communication" },
  { id: "networking", label: "Networking" },
  { id: "kpi", label: "KPIs & Performance" },
  // Systems & Technology (4 chapters)
  { id: "translogica", label: "Translogica TMS" },
  { id: "fleet", label: "Fleet & GPS" },
  { id: "technology", label: "Technology & Digital" },
  { id: "digitalization", label: "Digitalization" },
  // Risk & Finance (6 chapters)
  { id: "risk-management", label: "Risk Management" },
  { id: "insurance", label: "Transport Insurance" },
  { id: "high-value-goods", label: "High Value Goods" },
  { id: "claims", label: "Claims & Disputes" },
  { id: "payment", label: "Payment & Invoicing" },
  { id: "accounting", label: "Accounting & Finance" },
  // Practical Application (7 chapters)
  { id: "training", label: "Training Exercises" },
  { id: "professional-development", label: "Professional Development" },
  { id: "case-studies", label: "Case Studies" },
  { id: "emergency", label: "Emergency Procedures" },
  { id: "red-flags", label: "Red Flags & Tips" },
  { id: "checklists", label: "Checklists" },
  { id: "glossary", label: "Glossary" },
];

interface ChapterNavigationProps {
  activeChapter: string;
  onChapterChange: (chapterId: string) => void;
}

export function ChapterNavigation({ activeChapter, onChapterChange }: ChapterNavigationProps) {
  const { getChapterProgress, completeChapter } = useProgressContext();
  const { completeIntroChapter } = useChapterProgress();
  const { user } = useAuth();
  const { t } = useLanguage();
  const currentIndex = chapterOrder.findIndex(c => c.id === activeChapter);
  const prevChapter = currentIndex > 0 ? chapterOrder[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapterOrder.length - 1 ? chapterOrder[currentIndex + 1] : null;
  
  const chapterProgress = getChapterProgress(activeChapter);
  const isCompleted = chapterProgress?.completed;
  
  // Only intro chapter can be marked complete manually (without quiz)
  const isIntroChapter = activeChapter === 'intro';
  const canMarkComplete = isIntroChapter;

  const handleMarkComplete = async () => {
    if (!canMarkComplete) {
      toast.error(t('nav.quizNeedToPass'));
      return;
    }
    
    // Mark intro as complete in local progress
    completeChapter(activeChapter);
    
    // If user is logged in, also update database and unlock next chapter
    if (user) {
      const success = await completeIntroChapter();
      if (success) {
        toast.success(t('nav.chapterUnlocked'));
      }
    } else {
      toast.success(t('nav.chapterMarkedComplete'));
    }
  };

  return (
    <div className="mt-16 pt-10 border-t border-border/50 space-y-8">
      {/* Chapter Type Indicator */}
      {isIntroChapter && !isCompleted && (
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-600/15 text-blue-700 dark:text-blue-300 rounded-xl border border-blue-600/25">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">{t('nav.introChapter')}</span>
          </div>
        </div>
      )}

      {/* Mark as Complete */}
      <div className="flex items-center justify-center">
        {isCompleted ? (
          <div className="flex items-center gap-3 px-6 py-3 bg-success/10 text-success rounded-2xl border border-success/20 shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold">{t('nav.chapterCompleted')}</span>
            {chapterProgress?.quizScore !== undefined && chapterProgress.quizScore > 0 && (
              <span className="text-sm opacity-80 bg-success/20 px-2 py-0.5 rounded-full">
                Quiz: {chapterProgress.quizScore}/{chapterProgress.quizTotal}
              </span>
            )}
          </div>
        ) : canMarkComplete ? (
          <Button
            variant="outline"
            size="lg"
            onClick={handleMarkComplete}
            className="flex items-center gap-3 border-success/40 text-success hover:bg-success/10 hover:text-success hover:border-success/60 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            {t('nav.markComplete')}
          </Button>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 px-6 py-3 bg-amber-600/15 text-amber-700 dark:text-amber-300 rounded-2xl border border-amber-600/25 shadow-sm">
              <GraduationCap className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">{t('nav.quizRequired')}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center max-w-md">
              {t('nav.quizRequiredDesc')}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        {prevChapter ? (
          <Button
            variant="outline"
            size="lg"
            onClick={() => onChapterChange(prevChapter.id)}
            className="flex items-center gap-3 px-5 py-6 rounded-xl border-border/50 hover:bg-muted/50 hover:border-primary/20 transition-all duration-200 group"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-medium">{t('nav.previous')}</p>
              <p className="text-sm font-semibold text-foreground">{t(`chapter.${prevChapter.id}`) || prevChapter.label}</p>
            </div>
          </Button>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Button
            size="lg"
            onClick={() => onChapterChange(nextChapter.id)}
            className="flex items-center gap-3 px-5 py-6 rounded-xl bg-gradient-to-r from-primary to-rossik-dark hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <div className="text-right">
              <p className="text-xs text-primary-foreground/70 font-medium">{t('nav.nextChapter')}</p>
              <p className="text-sm font-semibold text-primary-foreground">{t(`chapter.${nextChapter.id}`) || nextChapter.label}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-primary-foreground group-hover:translate-x-0.5 transition-transform" />
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
