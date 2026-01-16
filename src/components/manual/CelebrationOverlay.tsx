import { useEffect, useState, memo } from 'react';
import { Button } from '@/components/ui/button';
import { useCelebration, CelebrationEvent } from '@/hooks/useCelebration';
import { 
  Trophy, 
  Star, 
  Award, 
  Rocket, 
  PartyPopper,
  GraduationCap,
  Sparkles,
  X
} from 'lucide-react';

const confettiColors = [
  '#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE'
];

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  animationDuration: number;
}

const Confetti = memo(() => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        y: -20 - Math.random() * 100,
        rotation: Math.random() * 360,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: 8 + Math.random() * 8,
        animationDuration: 2 + Math.random() * 3
      });
    }
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: piece.size,
            height: piece.size * 0.6,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animationDuration: `${piece.animationDuration}s`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  );
});

Confetti.displayName = 'Confetti';

const celebrationConfig: Record<string, {
  icon: React.ReactNode;
  title: string;
  gradient: string;
  emoji: string;
}> = {
  chapter_complete: {
    icon: <Trophy className="h-16 w-16" />,
    title: 'Capitol Finalizat!',
    gradient: 'from-amber-400 to-orange-500',
    emoji: '🎉'
  },
  quiz_passed: {
    icon: <Star className="h-16 w-16" />,
    title: 'Quiz Trecut!',
    gradient: 'from-emerald-400 to-green-500',
    emoji: '⭐'
  },
  certificate_earned: {
    icon: <GraduationCap className="h-16 w-16" />,
    title: 'Certificat Obținut!',
    gradient: 'from-purple-400 to-violet-500',
    emoji: '🎓'
  },
  level_up: {
    icon: <Rocket className="h-16 w-16" />,
    title: 'Nivel Nou!',
    gradient: 'from-blue-400 to-cyan-500',
    emoji: '🚀'
  },
  achievement: {
    icon: <Award className="h-16 w-16" />,
    title: 'Achievement Deblocat!',
    gradient: 'from-pink-400 to-rose-500',
    emoji: '🏆'
  }
};

const CelebrationContent = memo(({ 
  celebration, 
  onDismiss 
}: { 
  celebration: CelebrationEvent; 
  onDismiss: () => void;
}) => {
  const config = celebrationConfig[celebration.event_type] || celebrationConfig.achievement;
  const eventData = celebration.event_data || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <Confetti />
      
      <div className="relative animate-in zoom-in-95 duration-500">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-2 -right-2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
          onClick={onDismiss}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${config.gradient} text-white shadow-2xl max-w-md mx-4`}>
          {/* Animated sparkles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Sparkles className="absolute top-4 left-4 h-6 w-6 animate-pulse text-white/50" />
            <Sparkles className="absolute top-8 right-8 h-4 w-4 animate-pulse delay-100 text-white/40" />
            <Sparkles className="absolute bottom-12 left-12 h-5 w-5 animate-pulse delay-200 text-white/30" />
            <PartyPopper className="absolute bottom-4 right-4 h-8 w-8 animate-bounce text-white/40" />
          </div>

          <div className="relative text-center space-y-4">
            {/* Emoji burst */}
            <div className="text-6xl animate-bounce mb-2">
              {config.emoji}
            </div>

            {/* Icon */}
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-white/20 animate-pulse">
                {config.icon}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold tracking-tight">
              {config.title}
            </h2>

            {/* Dynamic content based on event type */}
            {celebration.event_type === 'quiz_passed' && eventData.score && (
              <div className="space-y-1">
                <p className="text-xl font-semibold">
                  Scor: {String(eventData.score)}%
                </p>
                {eventData.chapterName && (
                  <p className="text-white/80">
                    {String(eventData.chapterName)}
                  </p>
                )}
              </div>
            )}

            {celebration.event_type === 'chapter_complete' && eventData.chapterName && (
              <p className="text-xl">
                {String(eventData.chapterName)}
              </p>
            )}

            {celebration.event_type === 'level_up' && eventData.newLevel && (
              <div className="space-y-1">
                <p className="text-4xl font-bold">
                  Nivel {String(eventData.newLevel)}
                </p>
                {eventData.xpEarned && (
                  <p className="text-white/80">
                    +{String(eventData.xpEarned)} XP
                  </p>
                )}
              </div>
            )}

            {celebration.event_type === 'achievement' && (
              <div className="space-y-1">
                {eventData.name && (
                  <p className="text-2xl font-semibold flex items-center justify-center gap-2">
                    {eventData.icon && <span>{String(eventData.icon)}</span>}
                    {String(eventData.name)}
                  </p>
                )}
                {eventData.description && (
                  <p className="text-white/80">
                    {String(eventData.description)}
                  </p>
                )}
                {eventData.xpReward && (
                  <p className="text-lg font-medium">
                    +{String(eventData.xpReward)} XP
                  </p>
                )}
              </div>
            )}

            {celebration.event_type === 'certificate_earned' && (
              <div className="space-y-1">
                <p className="text-white/80">
                  Felicitări pentru finalizarea training-ului!
                </p>
                {eventData.certificateCode && (
                  <p className="font-mono text-sm bg-white/20 px-3 py-1 rounded">
                    {String(eventData.certificateCode)}
                  </p>
                )}
              </div>
            )}

            {/* Continue button */}
            <Button
              onClick={onDismiss}
              className="mt-4 bg-white text-gray-900 hover:bg-white/90 font-semibold px-8"
            >
              Continuă
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

CelebrationContent.displayName = 'CelebrationContent';

export const CelebrationOverlay = memo(() => {
  const { currentCelebration, dismissCelebration } = useCelebration();

  if (!currentCelebration) return null;

  return (
    <CelebrationContent 
      celebration={currentCelebration} 
      onDismiss={dismissCelebration} 
    />
  );
});

CelebrationOverlay.displayName = 'CelebrationOverlay';
