import { CheckCircle2, Circle, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { useProgressContext } from "@/contexts/ProgressContext";
import { TrainingTimer } from "./TrainingTimer";
import { useTrainingTimer } from "@/hooks/useTrainingTimer";

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
    title: "Progres Training",
    phase1: "Fundamente",
    phase2: "Echipament & Documente",
    phase3: "Geografie & Comercial",
    phase4: "Tehnologie & Finanțe",
    phase5: "Aplicare Practică",
    phaseLabel: "Faza",
    completed: "Completat",
    inProgress: "În progres",
    locked: "Blocat",
    chaptersCompleted: "capitole completate",
    of: "din",
    timeSpent: "Timp învățat",
    phases: "faze",
  },
  de: {
    title: "Schulungsfortschritt",
    phase1: "Grundlagen",
    phase2: "Ausrüstung & Dokumente",
    phase3: "Geographie & Kommerziell",
    phase4: "Technologie & Finanzen",
    phase5: "Praktische Anwendung",
    phaseLabel: "Phase",
    completed: "Abgeschlossen",
    inProgress: "In Bearbeitung",
    locked: "Gesperrt",
    chaptersCompleted: "Kapitel abgeschlossen",
    of: "von",
    timeSpent: "Lernzeit",
    phases: "Phasen",
  },
  en: {
    title: "Training Progress",
    phase1: "Foundations",
    phase2: "Equipment & Documents",
    phase3: "Geography & Commercial",
    phase4: "Technology & Finance",
    phase5: "Practical Application",
    phaseLabel: "Phase",
    completed: "Completed",
    inProgress: "In Progress",
    locked: "Locked",
    chaptersCompleted: "chapters completed",
    of: "of",
    timeSpent: "Time spent",
    phases: "phases",
  },
};

// Map chapter IDs to numbers
const CHAPTER_ORDER = [
  "intro", "mindset", "soft-skills", "workflow", // Phase 1: 1-4
  "vehicle", "loading", "reefer", "warehouse", "adr", "documents", "incoterms", "customs", "compliance", "driving-time", "licenses-oversize", // Phase 2: 5-15
  "europe-zones", "environment", "supply-chain", "pricing", "commercial", "negotiation", "clients", "carrier-management", "exchanges", "communication", "kpi", // Phase 3: 16-26
  "translogica", "fleet", "technology", "risk-management", "insurance", "claims", "payment", "accounting", // Phase 4: 27-34
  "training", "case-studies", "emergency", "red-flags", "checklists", "glossary", // Phase 5: 35-40
];

export function DailyTracker() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { progress: dbProgress, getChapterStatus } = useChapterProgress();
  const { progress } = useProgressContext();
  const { getDayTime, formatTime } = useTrainingTimer();
  
  const t = translations[language] || translations.en;

  // Count completed chapters
  const getCompletedChaptersInPhase = (phaseInfo: PhaseInfo): number => {
    return phaseInfo.chapters.filter(chapterNum => {
      const chapterId = CHAPTER_ORDER[chapterNum - 1];
      if (user) {
        return getChapterStatus(chapterId) === 'completed';
      }
      return progress.chapters[chapterId]?.completed;
    }).length;
  };

  // Determine phase status
  const getPhaseStatus = (phaseInfo: PhaseInfo): 'completed' | 'in-progress' | 'locked' => {
    const completed = getCompletedChaptersInPhase(phaseInfo);
    const total = phaseInfo.chapters.length;
    
    if (completed === total) return 'completed';
    if (completed > 0) return 'in-progress';
    
    // Check if previous phase is completed
    if (phaseInfo.phase === 1) return 'in-progress';
    
    const prevPhase = TRAINING_PHASES[phaseInfo.phase - 2];
    const prevCompleted = getCompletedChaptersInPhase(prevPhase);
    const prevTotal = prevPhase.chapters.length;
    
    if (prevCompleted === prevTotal) return 'in-progress';
    return 'locked';
  };

  // Find current phase
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
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-sm">{t.title}</h3>
      </div>

      {/* Training Timer */}
      <TrainingTimer currentPhase={currentPhase} variant="full" />

      <div className="space-y-2">
        {TRAINING_PHASES.map((phaseInfo) => {
          const status = getPhaseStatus(phaseInfo);
          const completed = getCompletedChaptersInPhase(phaseInfo);
          const total = phaseInfo.chapters.length;
          const isCurrent = phaseInfo.phase === currentPhase;
          const progressPercent = (completed / total) * 100;
          const phaseTimeSeconds = getDayTime(phaseInfo.phase);

          return (
            <div
              key={phaseInfo.phase}
              className={cn(
                "relative rounded-lg p-3 transition-all",
                isCurrent && "ring-2 ring-primary ring-offset-2 ring-offset-background",
                status === 'completed' && "bg-success/10",
                status === 'in-progress' && "bg-primary/5",
                status === 'locked' && "bg-muted/50 opacity-60"
              )}
            >
              <div className="flex items-center gap-3">
                {/* Status Icon */}
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  status === 'completed' && "bg-success text-success-foreground",
                  status === 'in-progress' && "bg-primary text-primary-foreground",
                  status === 'locked' && "bg-muted text-muted-foreground"
                )}>
                  {status === 'completed' ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : status === 'in-progress' ? (
                    <Clock className="w-4 h-4" />
                  ) : (
                    <Circle className="w-4 h-4" />
                  )}
                </div>

                {/* Phase Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {t.phaseLabel} {phaseInfo.phase}
                    </span>
                    {isCurrent && (
                      <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full font-medium animate-pulse">
                        {t.inProgress}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium mt-1 truncate">
                    {t[phaseInfo.titleKey as keyof typeof t]}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{completed} {t.of} {total} {t.chaptersCompleted}</span>
                    {phaseTimeSeconds > 0 && (
                      <span className="font-mono bg-muted px-1.5 py-0.5 rounded text-[10px]">
                        {t.timeSpent}: {formatTime(phaseTimeSeconds)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              {status !== 'locked' && (
                <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      status === 'completed' ? "bg-success" : "bg-primary"
                    )}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-3 border-t border-border">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {TRAINING_PHASES.filter(p => getPhaseStatus(p) === 'completed').length} {t.of} 5 {t.phases} {t.completed.toLowerCase()}
          </span>
          <span className="font-medium text-primary">
            {Math.round((TRAINING_PHASES.filter(p => getPhaseStatus(p) === 'completed').length / 5) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
