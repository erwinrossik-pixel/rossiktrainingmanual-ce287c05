import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { useProgressContext } from "@/contexts/ProgressContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TrainingTimer } from "./TrainingTimer";

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
    day1: "Fundamente",
    day2: "Echipament & Documente",
    day3: "Geografie & Comercial",
    day4: "Tehnologie & Finanțe",
    day5: "Aplicare Practică",
    dayLabel: "Ziua",
  },
  de: {
    day1: "Grundlagen",
    day2: "Ausrüstung & Dokumente",
    day3: "Geographie & Kommerziell",
    day4: "Technologie & Finanzen",
    day5: "Praktische Anwendung",
    dayLabel: "Tag",
  },
  en: {
    day1: "Foundations",
    day2: "Equipment & Documents",
    day3: "Geography & Commercial",
    day4: "Technology & Finance",
    day5: "Practical Application",
    dayLabel: "Day",
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

  const getCompletedChaptersInDay = (dayInfo: DayInfo): number => {
    return dayInfo.chapters.filter(chapterNum => {
      const chapterId = CHAPTER_ORDER[chapterNum - 1];
      if (user) {
        return getChapterStatus(chapterId) === 'completed';
      }
      return progress.chapters[chapterId]?.completed;
    }).length;
  };

  const getDayStatus = (dayInfo: DayInfo): 'completed' | 'in-progress' | 'locked' => {
    const completed = getCompletedChaptersInDay(dayInfo);
    const total = dayInfo.chapters.length;
    
    if (completed === total) return 'completed';
    if (completed > 0) return 'in-progress';
    if (dayInfo.day === 1) return 'in-progress';
    
    const prevDay = TRAINING_DAYS[dayInfo.day - 2];
    const prevCompleted = getCompletedChaptersInDay(prevDay);
    const prevTotal = prevDay.chapters.length;
    
    if (prevCompleted === prevTotal) return 'in-progress';
    return 'locked';
  };

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
    <div className="space-y-2">
      {/* Timer Controls */}
      <div className="flex justify-center">
        <TrainingTimer currentDay={currentDay} variant="compact" />
      </div>

      {/* Day Indicators */}
      <div className="flex items-center justify-center gap-1">
        {TRAINING_DAYS.map((dayInfo) => {
          const status = getDayStatus(dayInfo);
          const completed = getCompletedChaptersInDay(dayInfo);
          const total = dayInfo.chapters.length;
          const isCurrent = dayInfo.day === currentDay;
          const dayTitle = t[dayInfo.titleKey as keyof typeof t];

          return (
            <Tooltip key={dayInfo.day}>
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
                    dayInfo.day
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-center">
                <p className="font-semibold">{t.dayLabel} {dayInfo.day}: {dayTitle}</p>
                <p className="text-xs text-muted-foreground">{completed}/{total} capitole</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
