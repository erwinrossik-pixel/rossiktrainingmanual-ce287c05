import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { useProgressContext } from "@/contexts/ProgressContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TrainingTimer } from "./TrainingTimer";

interface PhaseInfo {
  phase: number;
  titleKey: string;
  chapters: number[];
}

const TRAINING_PHASES: PhaseInfo[] = [
  { phase: 1, titleKey: "phase1", chapters: [1, 2, 3, 4] },
  { phase: 2, titleKey: "phase2", chapters: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { phase: 3, titleKey: "phase3", chapters: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26] },
  { phase: 4, titleKey: "phase4", chapters: [27, 28, 29, 30, 31, 32, 33, 34] },
  { phase: 5, titleKey: "phase5", chapters: [35, 36, 37, 38, 39, 40] },
];

const translations = {
  ro: {
    phase1: "Fundamente",
    phase2: "Echipament & Documente",
    phase3: "Geografie & Comercial",
    phase4: "Tehnologie & Finanțe",
    phase5: "Aplicare Practică",
    phaseLabel: "Faza",
    chapters: "capitole",
  },
  de: {
    phase1: "Grundlagen",
    phase2: "Ausrüstung & Dokumente",
    phase3: "Geographie & Kommerziell",
    phase4: "Technologie & Finanzen",
    phase5: "Praktische Anwendung",
    phaseLabel: "Phase",
    chapters: "Kapitel",
  },
  en: {
    phase1: "Foundations",
    phase2: "Equipment & Documents",
    phase3: "Geography & Commercial",
    phase4: "Technology & Finance",
    phase5: "Practical Application",
    phaseLabel: "Phase",
    chapters: "chapters",
  },
};

const CHAPTER_ORDER = [
  "intro", "mindset", "soft-skills", "workflow",
  "vehicle", "loading", "reefer", "warehouse", "adr", "documents", "incoterms", "customs", "compliance", "driving-time", "licenses-oversize",
  "europe-zones", "environment", "supply-chain", "pricing", "commercial", "negotiation", "clients", "carrier-management", "exchanges", "communication", "kpi",
  "translogica", "fleet", "technology", "risk-management", "insurance", "claims", "payment", "accounting",
  "training", "case-studies", "emergency", "red-flags", "checklists", "glossary",
];

export function CompactDailyTracker() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { getChapterStatus } = useChapterProgress();
  const { progress } = useProgressContext();
  
  const t = translations[language] || translations.en;

  const getCompletedChaptersInPhase = (phaseInfo: PhaseInfo): number => {
    return phaseInfo.chapters.filter(chapterNum => {
      const chapterId = CHAPTER_ORDER[chapterNum - 1];
      if (user) {
        return getChapterStatus(chapterId) === 'completed';
      }
      return progress.chapters[chapterId]?.completed;
    }).length;
  };

  const getPhaseStatus = (phaseInfo: PhaseInfo): 'completed' | 'in-progress' | 'locked' => {
    const completed = getCompletedChaptersInPhase(phaseInfo);
    const total = phaseInfo.chapters.length;
    
    if (completed === total) return 'completed';
    if (completed > 0) return 'in-progress';
    if (phaseInfo.phase === 1) return 'in-progress';
    
    const prevPhase = TRAINING_PHASES[phaseInfo.phase - 2];
    const prevCompleted = getCompletedChaptersInPhase(prevPhase);
    const prevTotal = prevPhase.chapters.length;
    
    if (prevCompleted === prevTotal) return 'in-progress';
    return 'locked';
  };

  const getCurrentPhase = (): number => {
    for (let i = TRAINING_PHASES.length - 1; i >= 0; i--) {
      const status = getPhaseStatus(TRAINING_PHASES[i]);
      if (status === 'in-progress') return TRAINING_PHASES[i].phase;
      if (status === 'completed' && i < TRAINING_PHASES.length - 1) {
        const nextStatus = getPhaseStatus(TRAINING_PHASES[i + 1]);
        if (nextStatus !== 'locked') return TRAINING_PHASES[i + 1].phase;
      }
    }
    return 1;
  };

  const currentPhase = getCurrentPhase();

  return (
    <div className="space-y-2">
      {/* Timer Controls */}
      <div className="flex justify-center">
        <TrainingTimer currentPhase={currentPhase} variant="compact" />
      </div>

      {/* Phase Indicators */}
      <div className="flex items-center justify-center gap-1">
        {TRAINING_PHASES.map((phaseInfo) => {
          const status = getPhaseStatus(phaseInfo);
          const completed = getCompletedChaptersInPhase(phaseInfo);
          const total = phaseInfo.chapters.length;
          const isCurrent = phaseInfo.phase === currentPhase;
          const phaseTitle = t[phaseInfo.titleKey as keyof typeof t];

          return (
            <Tooltip key={phaseInfo.phase}>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-default transition-all",
                    isCurrent && "ring-2 ring-primary ring-offset-1 ring-offset-background scale-110",
                    status === 'completed' && "bg-success text-success-foreground",
                    status === 'in-progress' && !isCurrent && "bg-primary/20 text-primary",
                    status === 'in-progress' && isCurrent && "bg-primary text-primary-foreground",
                    status === 'locked' && "bg-muted text-muted-foreground"
                  )}
                >
                  {status === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : status === 'in-progress' && isCurrent ? (
                    <Clock className="w-3.5 h-3.5" />
                  ) : (
                    phaseInfo.phase
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-center">
                <p className="font-semibold">{t.phaseLabel} {phaseInfo.phase}: {phaseTitle}</p>
                <p className="text-xs text-muted-foreground">{completed}/{total} {t.chapters}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
