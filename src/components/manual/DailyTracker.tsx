import { CheckCircle2, Circle, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { useProgressContext } from "@/contexts/ProgressContext";
import { TrainingTimer } from "./TrainingTimer";
import { useTrainingTimer } from "@/hooks/useTrainingTimer";
interface DayInfo {
  day: number;
  titleKey: string;
  chapters: number[];
  isBackup?: boolean;
}

const TRAINING_DAYS: DayInfo[] = [
  { day: 1, titleKey: "day1", chapters: [1, 2, 3, 4] },
  { day: 2, titleKey: "day2", chapters: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { day: 3, titleKey: "day3", chapters: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26] },
  { day: 4, titleKey: "day4", chapters: [27, 28, 29, 30, 31, 32, 33, 34] },
  { day: 5, titleKey: "day5", chapters: [35, 36, 37, 38, 39, 40], isBackup: true },
];

const translations = {
  ro: {
    title: "Progres Training",
    day1: "Fundamente",
    day2: "Echipament & Documente",
    day3: "Geografie & Comercial",
    day4: "Tehnologie & Finanțe",
    day5: "Aplicare Practică",
    dayLabel: "Ziua",
    backup: "(Backup)",
    completed: "Completat",
    inProgress: "În progres",
    locked: "Blocat",
    chaptersCompleted: "capitole completate",
    of: "din",
    timeSpent: "Timp învățat",
  },
  de: {
    title: "Schulungsfortschritt",
    day1: "Grundlagen",
    day2: "Ausrüstung & Dokumente",
    day3: "Geographie & Kommerziell",
    day4: "Technologie & Finanzen",
    day5: "Praktische Anwendung",
    dayLabel: "Tag",
    backup: "(Backup)",
    completed: "Abgeschlossen",
    inProgress: "In Bearbeitung",
    locked: "Gesperrt",
    chaptersCompleted: "Kapitel abgeschlossen",
    of: "von",
    timeSpent: "Lernzeit",
  },
  en: {
    title: "Training Progress",
    day1: "Foundations",
    day2: "Equipment & Documents",
    day3: "Geography & Commercial",
    day4: "Technology & Finance",
    day5: "Practical Application",
    dayLabel: "Day",
    backup: "(Backup)",
    completed: "Completed",
    inProgress: "In Progress",
    locked: "Locked",
    chaptersCompleted: "chapters completed",
    of: "of",
    timeSpent: "Time spent",
  },
};

// Map chapter IDs to numbers
const CHAPTER_ORDER = [
  "intro", "mindset", "soft-skills", "workflow", // Day 1: 1-4
  "vehicle", "loading", "reefer", "warehouse", "adr", "documents", "incoterms", "customs", "compliance", "driving-time", "licenses-oversize", // Day 2: 5-15
  "europe-zones", "environment", "supply-chain", "pricing", "commercial", "negotiation", "clients", "carrier-management", "exchanges", "communication", "kpi", // Day 3: 16-26
  "translogica", "fleet", "technology", "risk-management", "insurance", "claims", "payment", "accounting", // Day 4: 27-34
  "training", "case-studies", "emergency", "red-flags", "checklists", "glossary", // Day 5: 35-40
];

export function DailyTracker() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { progress: dbProgress, getChapterStatus } = useChapterProgress();
  const { progress } = useProgressContext();
  const { getDayTime, formatTime } = useTrainingTimer();
  
  const t = translations[language] || translations.en;
  // Count completed chapters
  const getCompletedChaptersInDay = (dayInfo: DayInfo): number => {
    return dayInfo.chapters.filter(chapterNum => {
      const chapterId = CHAPTER_ORDER[chapterNum - 1];
      if (user) {
        return getChapterStatus(chapterId) === 'completed';
      }
      return progress.chapters[chapterId]?.completed;
    }).length;
  };

  // Determine day status
  const getDayStatus = (dayInfo: DayInfo): 'completed' | 'in-progress' | 'locked' => {
    const completed = getCompletedChaptersInDay(dayInfo);
    const total = dayInfo.chapters.length;
    
    if (completed === total) return 'completed';
    if (completed > 0) return 'in-progress';
    
    // Check if previous day is completed
    if (dayInfo.day === 1) return 'in-progress';
    
    const prevDay = TRAINING_DAYS[dayInfo.day - 2];
    const prevCompleted = getCompletedChaptersInDay(prevDay);
    const prevTotal = prevDay.chapters.length;
    
    if (prevCompleted === prevTotal) return 'in-progress';
    return 'locked';
  };

  // Find current day
  const getCurrentDay = (): number => {
    for (let i = TRAINING_DAYS.length - 1; i >= 0; i--) {
      const status = getDayStatus(TRAINING_DAYS[i]);
      if (status === 'in-progress') return TRAINING_DAYS[i].day;
      if (status === 'completed' && i < TRAINING_DAYS.length - 1) {
        const nextStatus = getDayStatus(TRAINING_DAYS[i + 1]);
        if (nextStatus !== 'locked') return TRAINING_DAYS[i + 1].day;
      }
    }
    return 1;
  };

  const currentDay = getCurrentDay();

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-sm">{t.title}</h3>
      </div>

      {/* Training Timer */}
      <TrainingTimer currentDay={currentDay} variant="full" />

      <div className="space-y-2">
        {TRAINING_DAYS.map((dayInfo) => {
          const status = getDayStatus(dayInfo);
          const completed = getCompletedChaptersInDay(dayInfo);
          const total = dayInfo.chapters.length;
          const isCurrent = dayInfo.day === currentDay;
          const progressPercent = (completed / total) * 100;
          const dayTimeSeconds = getDayTime(dayInfo.day);

          return (
            <div
              key={dayInfo.day}
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

                {/* Day Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-xs font-medium px-2 py-0.5 rounded-full",
                      dayInfo.isBackup 
                        ? "bg-muted text-muted-foreground" 
                        : "bg-primary/10 text-primary"
                    )}>
                      {t.dayLabel} {dayInfo.day} {dayInfo.isBackup && t.backup}
                    </span>
                    {isCurrent && (
                      <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full font-medium animate-pulse">
                        {t.inProgress}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium mt-1 truncate">
                    {t[dayInfo.titleKey as keyof typeof t]}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{completed} {t.of} {total} {t.chaptersCompleted}</span>
                    {dayTimeSeconds > 0 && (
                      <span className="font-mono bg-muted px-1.5 py-0.5 rounded text-[10px]">
                        {t.timeSpent}: {formatTime(dayTimeSeconds)}
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
            {TRAINING_DAYS.filter(d => getDayStatus(d) === 'completed').length} {t.of} 5 {t.dayLabel.toLowerCase()}s {t.completed.toLowerCase()}
          </span>
          <span className="font-medium text-primary">
            {Math.round((TRAINING_DAYS.filter(d => getDayStatus(d) === 'completed').length / 5) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
