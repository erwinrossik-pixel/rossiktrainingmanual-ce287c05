import { memo } from 'react';
import { useGamification, getXPForNextLevel } from '@/hooks/useGamification';
import { useLanguage } from '@/contexts/LanguageContext';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Flame, Trophy, Zap, Star } from 'lucide-react';

const translations = {
  ro: {
    level: 'Nivel',
    xp: 'XP',
    streak: 'Streak',
    days: 'zile',
    toNext: 'până la nivelul următor',
    achievements: 'Achievement-uri'
  },
  de: {
    level: 'Stufe',
    xp: 'XP',
    streak: 'Streak',
    days: 'Tage',
    toNext: 'bis zur nächsten Stufe',
    achievements: 'Errungenschaften'
  },
  en: {
    level: 'Level',
    xp: 'XP',
    streak: 'Streak',
    days: 'days',
    toNext: 'to next level',
    achievements: 'Achievements'
  }
};

interface GamificationWidgetProps {
  variant?: 'compact' | 'full';
}

export const GamificationWidget = memo(function GamificationWidget({ 
  variant = 'compact' 
}: GamificationWidgetProps) {
  const { gamification, achievements, loading } = useGamification();
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  if (loading || !gamification) {
    return (
      <div className="animate-pulse flex items-center gap-2">
        <div className="h-8 w-20 bg-muted rounded" />
        <div className="h-8 w-16 bg-muted rounded" />
      </div>
    );
  }

  const currentXP = gamification.total_xp;
  const level = gamification.level;
  const xpForNext = getXPForNextLevel(level);
  const xpProgress = level > 1 
    ? ((currentXP - getXPForNextLevel(level - 1)) / (xpForNext - getXPForNextLevel(level - 1))) * 100
    : (currentXP / xpForNext) * 100;

  if (variant === 'compact') {
    return (
      <div 
        data-tour="gamification-stats"
        className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20"
      >
        <TooltipProvider>
          {/* Level */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="font-bold text-sm">{level}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t.level} {level}</p>
              <p className="text-xs text-muted-foreground">
                {currentXP} / {xpForNext} {t.xp}
              </p>
            </TooltipContent>
          </Tooltip>

          {/* XP */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">{currentXP}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{currentXP} {t.xp}</p>
              <p className="text-xs text-muted-foreground">
                {xpForNext - currentXP} {t.toNext}
              </p>
            </TooltipContent>
          </Tooltip>

          {/* Streak */}
          {gamification.streak_days > 0 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1">
                  <Flame className={`h-4 w-4 ${gamification.streak_days >= 7 ? 'text-orange-500' : 'text-orange-400'}`} />
                  <span className="text-sm font-medium">{gamification.streak_days}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{gamification.streak_days} {t.days} {t.streak}</p>
              </TooltipContent>
            </Tooltip>
          )}

          {/* Achievements count */}
          {achievements.length > 0 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="text-xs">
                  <Trophy className="h-3 w-3 mr-1" />
                  {achievements.length}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{achievements.length} {t.achievements}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>
      </div>
    );
  }

  // Full variant
  return (
    <div 
      data-tour="gamification-stats"
      className="p-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-xl border"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">
            {level}
          </div>
          <div>
            <p className="text-sm font-medium">{t.level} {level}</p>
            <p className="text-xs text-muted-foreground">
              {currentXP} / {xpForNext} {t.xp}
            </p>
          </div>
        </div>
        
        {gamification.streak_days > 0 && (
          <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 rounded-full">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
              {gamification.streak_days}
            </span>
          </div>
        )}
      </div>

      <Progress value={Math.min(xpProgress, 100)} className="h-2 mb-2" />
      
      <p className="text-xs text-muted-foreground text-center">
        {Math.max(0, xpForNext - currentXP)} {t.xp} {t.toNext}
      </p>

      {achievements.length > 0 && (
        <div className="mt-3 pt-3 border-t">
          <div className="flex items-center gap-1 text-sm">
            <Trophy className="h-4 w-4 text-yellow-500" />
            <span className="font-medium">{achievements.length} {t.achievements}</span>
          </div>
        </div>
      )}
    </div>
  );
});
