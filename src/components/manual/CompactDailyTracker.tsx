import { CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { useProgressContext } from "@/contexts/ProgressContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TrainingTimer } from "./TrainingTimer";
import { TRAINING_PHASES, getChapterIdByNumber, type PhaseInfo } from "@/data/chaptersConfig";

const translations = {
  ro: {
    phase1: "Fundamente & Operațiuni",
    phase2: "Conformitate & Documente",
    phase3: "Prețuri & Comercial",
    phase4: "Management & Avansat",
    phase5: "Recapitulare & Consolidare",
    phaseLabel: "Faza",
    chapters: "capitole",
  },
  de: {
    phase1: "Grundlagen & Betrieb",
    phase2: "Compliance & Dokumente",
    phase3: "Preise & Kommerziell",
    phase4: "Management & Fortgeschritten",
    phase5: "Wiederholung & Konsolidierung",
    phaseLabel: "Phase",
    chapters: "Kapitel",
  },
  en: {
    phase1: "Foundations & Operations",
    phase2: "Compliance & Documents",
    phase3: "Pricing & Commercial",
    phase4: "Management & Advanced",
    phase5: "Review & Consolidation",
    phaseLabel: "Phase",
    chapters: "chapters",
  },
};

export function CompactDailyTracker() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { getChapterStatus } = useChapterProgress();
  const { progress } = useProgressContext();
  
  const t = translations[language] || translations.en;

  const getCompletedChaptersInPhase = (phaseInfo: PhaseInfo): number => {
    return phaseInfo.chapters.filter((chapterNum: number) => {
      const chapterId = getChapterIdByNumber(chapterNum);
      if (!chapterId) return false;
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
    <div className="flex items-center gap-1.5">
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
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold cursor-default transition-all",
                  isCurrent && "ring-2 ring-primary ring-offset-1 ring-offset-background",
                  status === 'completed' && "bg-success text-success-foreground",
                  status === 'in-progress' && !isCurrent && "bg-primary/20 text-primary",
                  status === 'in-progress' && isCurrent && "bg-primary text-primary-foreground",
                  status === 'locked' && "bg-muted text-muted-foreground"
                )}
              >
                {status === 'completed' ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : status === 'in-progress' && isCurrent ? (
                  <Clock className="w-3 h-3" />
                ) : (
                  phaseInfo.phase
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-center">
              <p className="font-semibold text-xs">{t.phaseLabel} {phaseInfo.phase}: {phaseTitle}</p>
              <p className="text-[10px] text-muted-foreground">{completed}/{total} {t.chapters}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}