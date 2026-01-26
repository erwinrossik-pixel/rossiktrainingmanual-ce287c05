import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  RotateCcw, 
  Trophy, 
  Clock, 
  Target, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  ChevronRight,
  Award,
  Zap,
  Brain,
  TrendingUp,
  Star,
  Flame
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useGamification } from '@/hooks/useGamification';
import { useAuth } from '@/hooks/useAuth';
import { 
  Simulation, 
  SimulationChoice,
  simulations,
  getScenarioById 
} from '@/data/simulationScenarios';

interface DecisionRecord {
  scenarioId: string;
  choiceId: string;
  points: number;
  feedback: string;
}

interface SimulationState {
  isActive: boolean;
  currentScenarioId: string;
  totalScore: number;
  decisions: DecisionRecord[];
  startTime: number | null;
  elapsedTime: number;
}

const translations = {
  ro: {
    title: 'Simulări Operaționale',
    subtitle: 'Învață prin decizie - Scenarii realiste din transportul de marfă',
    selectSimulation: 'Alege o simulare',
    start: 'Începe Simularea',
    restart: 'Reîncepe',
    continue: 'Continuă',
    complete: 'Completează',
    score: 'Scor',
    time: 'Timp',
    difficulty: 'Dificultate',
    estimated: 'Timp estimat',
    minutes: 'minute',
    decisions: 'Decizii luate',
    feedback: 'Feedback',
    finalScore: 'Scor Final',
    excellent: 'Excelent!',
    good: 'Bine!',
    needsImprovement: 'Necesită îmbunătățiri',
    poor: 'Slab',
    decisionHistory: 'Istoricul Deciziilor',
    context: 'Context',
    yourChoice: 'Alegerea ta',
    points: 'puncte',
    tryAgain: 'Încearcă din nou',
    backToList: 'Înapoi la listă',
    easy: 'Ușor',
    medium: 'Mediu',
    hard: 'Dificil',
    chooseWisely: 'Alege cu înțelepciune',
    timeRemaining: 'Timp rămas',
    maxScore: 'Scor maxim',
    yourPerformance: 'Performanța ta',
    lessonsLearned: 'Lecții Învățate',
    keyInsights: 'Informații cheie din această simulare',
    level: 'Nivel',
    streak: 'Serie',
    days: 'zile',
    simulations: 'Simulări'
  },
  de: {
    title: 'Betriebssimulationen',
    subtitle: 'Lernen durch Entscheidung - Realistische Szenarien aus dem Gütertransport',
    selectSimulation: 'Wählen Sie eine Simulation',
    start: 'Simulation starten',
    restart: 'Neu starten',
    continue: 'Weiter',
    complete: 'Abschließen',
    score: 'Punktzahl',
    time: 'Zeit',
    difficulty: 'Schwierigkeit',
    estimated: 'Geschätzte Zeit',
    minutes: 'Minuten',
    decisions: 'Getroffene Entscheidungen',
    feedback: 'Feedback',
    finalScore: 'Endpunktzahl',
    excellent: 'Ausgezeichnet!',
    good: 'Gut!',
    needsImprovement: 'Verbesserung nötig',
    poor: 'Schwach',
    decisionHistory: 'Entscheidungsverlauf',
    context: 'Kontext',
    yourChoice: 'Ihre Wahl',
    points: 'Punkte',
    tryAgain: 'Erneut versuchen',
    backToList: 'Zurück zur Liste',
    easy: 'Leicht',
    medium: 'Mittel',
    hard: 'Schwer',
    chooseWisely: 'Wählen Sie weise',
    timeRemaining: 'Verbleibende Zeit',
    maxScore: 'Maximale Punktzahl',
    yourPerformance: 'Ihre Leistung',
    lessonsLearned: 'Gelernte Lektionen',
    keyInsights: 'Wichtige Erkenntnisse aus dieser Simulation',
    level: 'Stufe',
    streak: 'Serie',
    days: 'Tage',
    simulations: 'Simulationen'
  },
  en: {
    title: 'Operational Simulations',
    subtitle: 'Learn by decision - Realistic freight transport scenarios',
    selectSimulation: 'Choose a simulation',
    start: 'Start Simulation',
    restart: 'Restart',
    continue: 'Continue',
    complete: 'Complete',
    score: 'Score',
    time: 'Time',
    difficulty: 'Difficulty',
    estimated: 'Estimated time',
    minutes: 'minutes',
    decisions: 'Decisions made',
    feedback: 'Feedback',
    finalScore: 'Final Score',
    excellent: 'Excellent!',
    good: 'Good!',
    needsImprovement: 'Needs improvement',
    poor: 'Poor',
    decisionHistory: 'Decision History',
    context: 'Context',
    yourChoice: 'Your choice',
    points: 'points',
    tryAgain: 'Try again',
    backToList: 'Back to list',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    chooseWisely: 'Choose wisely',
    timeRemaining: 'Time remaining',
    maxScore: 'Max score',
    yourPerformance: 'Your performance',
    lessonsLearned: 'Lessons Learned',
    keyInsights: 'Key insights from this simulation',
    level: 'Level',
    streak: 'Streak',
    days: 'days',
    simulations: 'Simulations'
  }
};

const OperationalSimulation: React.FC = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { gamification, recordSimulationAttempt, calculateLevel } = useGamification();
  const t = translations[language as keyof typeof translations] || translations.en;
  const lang = language as 'ro' | 'de' | 'en';
  const userLevel = gamification ? calculateLevel(gamification.total_xp) : 1;

  const [selectedSimulation, setSelectedSimulation] = useState<Simulation | null>(null);
  const [state, setState] = useState<SimulationState>({
    isActive: false,
    currentScenarioId: 'start',
    totalScore: 0,
    decisions: [],
    startTime: null,
    elapsedTime: 0
  });
  const [showFeedback, setShowFeedback] = useState<SimulationChoice | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [xpEarned, setXpEarned] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (state.isActive && state.startTime) {
      interval = setInterval(() => {
        setState(prev => ({
          ...prev,
          elapsedTime: Math.floor((Date.now() - (prev.startTime || Date.now())) / 1000)
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.isActive, state.startTime]);

  // Countdown timer for timed scenarios
  useEffect(() => {
    if (!selectedSimulation || !state.isActive) return;
    
    const currentScenario = getScenarioById(selectedSimulation, state.currentScenarioId);
    if (!currentScenario?.timeLimit) {
      setCountdown(null);
      return;
    }

    setCountdown(currentScenario.timeLimit);
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedSimulation, state.currentScenarioId, state.isActive]);

  const startSimulation = useCallback((simulation: Simulation) => {
    setSelectedSimulation(simulation);
    setState({
      isActive: true,
      currentScenarioId: 'start',
      totalScore: 0,
      decisions: [],
      startTime: Date.now(),
      elapsedTime: 0
    });
    setIsComplete(false);
    setShowFeedback(null);
  }, []);

  const handleChoice = useCallback((choice: SimulationChoice) => {
    if (!selectedSimulation) return;

    const currentScenario = getScenarioById(selectedSimulation, state.currentScenarioId);
    if (!currentScenario) return;

    const decision: DecisionRecord = {
      scenarioId: state.currentScenarioId,
      choiceId: choice.id,
      points: choice.points,
      feedback: choice.feedback[lang]
    };

    setState(prev => ({
      ...prev,
      totalScore: prev.totalScore + choice.points,
      decisions: [...prev.decisions, decision]
    }));

    setShowFeedback(choice);

    // Auto-advance after showing feedback
    setTimeout(() => {
      setShowFeedback(null);
      if (choice.isEndpoint) {
        handleSimulationComplete();
      } else if (choice.nextScenarioId) {
        setState(prev => ({ ...prev, currentScenarioId: choice.nextScenarioId! }));
      }
    }, 3000);
  }, [selectedSimulation, state.currentScenarioId, lang]);

  // Handle simulation completion with gamification
  const handleSimulationComplete = useCallback(async () => {
    if (!selectedSimulation) return;
    
    setIsComplete(true);
    setState(prev => ({ ...prev, isActive: false }));
    
    // Save to database and update gamification
    if (user) {
      try {
        const result = await recordSimulationAttempt(
          selectedSimulation.id,
          state.totalScore,
          selectedSimulation.maxScore,
          state.decisions,
          state.elapsedTime
        );
        setXpEarned(result.xpEarned);
      } catch (error) {
        console.error('Error saving simulation:', error);
      }
    }
  }, [selectedSimulation, state, user, recordSimulationAttempt]);

  const resetSimulation = useCallback(() => {
    setXpEarned(0);
    if (selectedSimulation) {
      startSimulation(selectedSimulation);
    }
  }, [selectedSimulation, startSimulation]);

  const backToList = useCallback(() => {
    setSelectedSimulation(null);
    setState({
      isActive: false,
      currentScenarioId: 'start',
      totalScore: 0,
      decisions: [],
      startTime: null,
      elapsedTime: 0
    });
    setIsComplete(false);
    setShowFeedback(null);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    const labels = { easy: t.easy, medium: t.medium, hard: t.hard };
    return labels[difficulty as keyof typeof labels] || difficulty;
  };

  const getScoreRating = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return { label: t.excellent, color: 'text-green-400', icon: Trophy };
    if (percentage >= 60) return { label: t.good, color: 'text-amber-400', icon: Award };
    if (percentage >= 40) return { label: t.needsImprovement, color: 'text-orange-400', icon: AlertTriangle };
    return { label: t.poor, color: 'text-red-400', icon: XCircle };
  };

  const getPointsColor = (points: number) => {
    if (points > 0) return 'text-green-400';
    if (points < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  // Simulation Selection View
  if (!selectedSimulation) {
    return (
      <div className="space-y-6">
        {/* Header with Gamification Stats */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30">
              <Brain className="h-8 w-8 text-violet-400" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
          
          {/* User Stats Banner */}
          {user && gamification && (
            <div className="flex items-center justify-center gap-6 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 max-w-md mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {userLevel}
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">{t.level}</div>
                  <div className="text-sm font-semibold text-foreground">{gamification.total_xp} XP</div>
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">{t.simulations}</div>
                  <div className="text-sm font-semibold text-foreground">{gamification.simulations_completed}</div>
                </div>
              </div>
              {gamification.streak_days > 0 && (
                <>
                  <div className="h-8 w-px bg-border" />
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">{t.streak}</div>
                      <div className="text-sm font-semibold text-foreground">{gamification.streak_days} {t.days}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Simulation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {simulations.map(sim => (
            <Card 
              key={sim.id} 
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-violet-500/20 hover:border-violet-500/40 transition-all cursor-pointer group"
              onClick={() => startSimulation(sim)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{sim.icon}</div>
                  <Badge className={`${getDifficultyColor(sim.difficulty)} text-xs`}>
                    {getDifficultyLabel(sim.difficulty)}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-white group-hover:text-violet-300 transition-colors">
                  {sim.title[lang]}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {sim.description[lang]}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{sim.estimatedTime} {t.minutes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-3 w-3" />
                    <span>{t.maxScore}: {sim.maxScore}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 group-hover:shadow-lg group-hover:shadow-violet-500/25 transition-all"
                >
                  <Play className="h-4 w-4 mr-2" />
                  {t.start}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Get current scenario
  const currentScenario = getScenarioById(selectedSimulation, state.currentScenarioId);

  // Completion View
  if (isComplete) {
    const rating = getScoreRating(state.totalScore, selectedSimulation.maxScore);
    const RatingIcon = rating.icon;
    const scorePercentage = Math.max(0, (state.totalScore / selectedSimulation.maxScore) * 100);

    return (
      <div className="space-y-6">
        {/* Results Header */}
        <Card className="bg-gradient-to-br from-slate-900/90 to-violet-900/30 border-violet-500/30">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30">
              <RatingIcon className={`h-12 w-12 ${rating.color}`} />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${rating.color}`}>{rating.label}</h2>
              <p className="text-muted-foreground">{selectedSimulation.title[lang]}</p>
            </div>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{state.totalScore}</div>
                <div className="text-xs text-muted-foreground">{t.finalScore}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{formatTime(state.elapsedTime)}</div>
                <div className="text-xs text-muted-foreground">{t.time}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{state.decisions.length}</div>
                <div className="text-xs text-muted-foreground">{t.decisions}</div>
              </div>
            </div>
            <Progress value={scorePercentage} className="h-3 bg-slate-700" />
            
            {/* XP Earned Badge */}
            {xpEarned > 0 && (
              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 animate-fade-in">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-lg font-bold text-green-400">+{xpEarned} XP</span>
              </div>
            )}
            
            <div className="flex gap-3 justify-center pt-2">
              <Button onClick={resetSimulation} variant="outline" className="border-violet-500/30">
                <RotateCcw className="h-4 w-4 mr-2" />
                {t.tryAgain}
              </Button>
              <Button onClick={backToList} className="bg-gradient-to-r from-violet-600 to-purple-600">
                {t.backToList}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Decision History */}
        <Card className="bg-slate-900/80 border-slate-700/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <TrendingUp className="h-5 w-5 text-violet-400" />
              {t.decisionHistory}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {state.decisions.map((decision, index) => {
              const scenario = getScenarioById(selectedSimulation, decision.scenarioId);
              return (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      {index + 1}. {scenario?.title[lang]}
                    </span>
                    <Badge className={`${getPointsColor(decision.points)} bg-transparent border`}>
                      {decision.points > 0 ? '+' : ''}{decision.points} {t.points}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{decision.feedback}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Active Simulation View
  if (!currentScenario) {
    return <div>Error: Scenario not found</div>;
  }

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="flex items-center justify-between bg-slate-900/80 rounded-lg p-3 border border-slate-700/50">
        <div className="flex items-center gap-4">
          <div className="text-2xl">{selectedSimulation.icon}</div>
          <div>
            <h3 className="font-semibold text-white">{selectedSimulation.title[lang]}</h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {formatTime(state.elapsedTime)}
              </span>
              <span className="flex items-center gap-1">
                <Target className="h-3 w-3" />
                {t.score}: {state.totalScore}
              </span>
            </div>
          </div>
        </div>
        {countdown !== null && countdown > 0 && (
          <div className={`text-lg font-mono font-bold ${countdown <= 10 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`}>
            <Zap className="h-4 w-4 inline mr-1" />
            {countdown}s
          </div>
        )}
        <Button variant="ghost" size="sm" onClick={backToList} className="text-muted-foreground">
          ✕
        </Button>
      </div>

      {/* Scenario Card */}
      <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-violet-500/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge className={getDifficultyColor(currentScenario.difficulty)}>
              {getDifficultyLabel(currentScenario.difficulty)}
            </Badge>
            <Badge variant="outline" className="border-slate-600">
              {state.decisions.length + 1}/{selectedSimulation.scenarios.length}
            </Badge>
          </div>
          <CardTitle className="text-xl text-white">{currentScenario.title[lang]}</CardTitle>
          <p className="text-muted-foreground">{currentScenario.description[lang]}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Context Box */}
          <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/50">
            <div className="flex items-center gap-2 text-sm font-medium text-violet-400 mb-2">
              <Brain className="h-4 w-4" />
              {t.context}
            </div>
            <p className="text-sm text-white leading-relaxed">{currentScenario.context[lang]}</p>
          </div>

          {/* Feedback Display */}
          {showFeedback && (
            <div className={`p-4 rounded-lg border-2 animate-fade-in ${
              showFeedback.points > 0 
                ? 'bg-green-500/10 border-green-500/30' 
                : showFeedback.points < 0 
                  ? 'bg-red-500/10 border-red-500/30'
                  : 'bg-amber-500/10 border-amber-500/30'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {showFeedback.points > 0 ? (
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                ) : showFeedback.points < 0 ? (
                  <XCircle className="h-5 w-5 text-red-400" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                )}
                <span className={`font-bold ${getPointsColor(showFeedback.points)}`}>
                  {showFeedback.points > 0 ? '+' : ''}{showFeedback.points} {t.points}
                </span>
              </div>
              <p className="text-sm text-white">{showFeedback.feedback[lang]}</p>
            </div>
          )}

          {/* Choices */}
          {!showFeedback && (
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Target className="h-4 w-4" />
                {t.chooseWisely}
              </div>
              {currentScenario.choices.map((choice, index) => (
                <Button
                  key={choice.id}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4 bg-slate-800/40 border-slate-700/50 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all group"
                  onClick={() => handleChoice(choice)}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-white group-hover:text-violet-300 transition-colors">
                      {choice.text[lang]}
                    </span>
                    <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-violet-400 transition-colors" />
                  </div>
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OperationalSimulation;
