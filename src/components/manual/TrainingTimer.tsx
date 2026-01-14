import { Play, Pause, Clock, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrainingTimer } from "@/hooks/useTrainingTimer";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const translations = {
  ro: {
    start: "Start",
    pause: "Pauză",
    totalTime: "Timp total",
    dayTime: "Ziua",
    noTraining: "Apasă Start pentru a începe",
    training: "Training în desfășurare",
    paused: "În pauză",
  },
  de: {
    start: "Start",
    pause: "Pause",
    totalTime: "Gesamtzeit",
    dayTime: "Tag",
    noTraining: "Drücken Sie Start zum Beginnen",
    training: "Training läuft",
    paused: "Pausiert",
  },
  en: {
    start: "Start",
    pause: "Pause",
    totalTime: "Total time",
    dayTime: "Day",
    noTraining: "Press Start to begin",
    training: "Training in progress",
    paused: "Paused",
  },
};

interface TrainingTimerProps {
  currentDay: number;
  variant?: 'compact' | 'full';
}

export function TrainingTimer({ currentDay, variant = 'compact' }: TrainingTimerProps) {
  const { language } = useLanguage();
  const {
    startTraining,
    pauseTraining,
    getDayTime,
    getTotalTime,
    isAnyTimerRunning,
    formatTime,
    currentActiveDay,
  } = useTrainingTimer();

  const t = translations[language] || translations.en;
  const isRunning = isAnyTimerRunning();
  const totalTime = getTotalTime();
  const dayTime = getDayTime(currentDay);

  const handleToggle = () => {
    if (isRunning) {
      pauseTraining();
    } else {
      startTraining(currentDay);
    }
  };

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="sm"
              variant={isRunning ? "destructive" : "default"}
              onClick={handleToggle}
              className={cn(
                "h-8 gap-1.5 text-xs font-medium",
                isRunning && "animate-pulse"
              )}
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  {t.pause}
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  {t.start}
                </>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{isRunning ? t.training : t.noTraining}</p>
          </TooltipContent>
        </Tooltip>

        {totalTime > 0 && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={cn(
                "flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded-md",
                isRunning 
                  ? "bg-primary/10 text-primary" 
                  : "bg-muted text-muted-foreground"
              )}>
                <Timer className="w-3.5 h-3.5" />
                <span>{formatTime(totalTime)}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>{t.totalTime}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    );
  }

  // Full variant for DailyTracker
  return (
    <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3 mb-4">
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center",
          isRunning ? "bg-primary text-primary-foreground animate-pulse" : "bg-muted-foreground/20 text-muted-foreground"
        )}>
          {isRunning ? (
            <Clock className="w-5 h-5" />
          ) : (
            <Timer className="w-5 h-5" />
          )}
        </div>
        <div>
          <p className={cn(
            "text-sm font-medium",
            isRunning ? "text-primary" : "text-muted-foreground"
          )}>
            {isRunning ? t.training : totalTime > 0 ? t.paused : t.noTraining}
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            {t.totalTime}: {formatTime(totalTime)}
          </p>
        </div>
      </div>

      <Button
        size="default"
        variant={isRunning ? "destructive" : "default"}
        onClick={handleToggle}
        className="gap-2"
      >
        {isRunning ? (
          <>
            <Pause className="w-4 h-4" />
            {t.pause}
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            {t.start}
          </>
        )}
      </Button>
    </div>
  );
}
