import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  Legend
} from 'recharts';
import { Trophy, Target, TrendingUp, Clock, BookOpen, Award, Flame, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuizAttempt {
  chapter_id: string;
  score: number;
  passed: boolean;
  created_at: string;
}

interface ChapterProgress {
  chapter_id: string;
  status: string;
  best_score: number | null;
  attempts_count: number | null;
  completed_at: string | null;
}

interface TrainingTime {
  date: string;
  total_seconds: number;
}

interface ProgressChartsProps {
  quizAttempts: QuizAttempt[];
  chapterProgress: ChapterProgress[];
  trainingTime?: TrainingTime[];
  totalChapters: number;
  gamification?: {
    total_xp: number;
    level: number;
    streak_days: number;
    simulations_completed: number;
    perfect_simulations: number;
  } | null;
}

const translations = {
  ro: {
    scoreEvolution: 'Evoluția Scorurilor',
    chapterCompletion: 'Completare Capitole',
    trainingActivity: 'Activitate Training',
    performanceRadar: 'Performanță Generală',
    completed: 'Completate',
    inProgress: 'În Curs',
    locked: 'Blocate',
    avgScore: 'Scor Mediu',
    totalTime: 'Timp Total',
    hours: 'ore',
    minutes: 'minute',
    score: 'Scor',
    date: 'Data',
    noData: 'Nu sunt date disponibile',
    passRate: 'Rată Promovare',
    perfectScores: 'Scoruri Perfecte',
    consistency: 'Consistență',
    progress: 'Progres'
  },
  de: {
    scoreEvolution: 'Punkteentwicklung',
    chapterCompletion: 'Kapitelabschluss',
    trainingActivity: 'Trainingsaktivität',
    performanceRadar: 'Gesamtleistung',
    completed: 'Abgeschlossen',
    inProgress: 'In Bearbeitung',
    locked: 'Gesperrt',
    avgScore: 'Durchschnitt',
    totalTime: 'Gesamtzeit',
    hours: 'Stunden',
    minutes: 'Minuten',
    score: 'Punktzahl',
    date: 'Datum',
    noData: 'Keine Daten verfügbar',
    passRate: 'Bestehensrate',
    perfectScores: 'Perfekte Punkte',
    consistency: 'Konsistenz',
    progress: 'Fortschritt'
  },
  en: {
    scoreEvolution: 'Score Evolution',
    chapterCompletion: 'Chapter Completion',
    trainingActivity: 'Training Activity',
    performanceRadar: 'Overall Performance',
    completed: 'Completed',
    inProgress: 'In Progress',
    locked: 'Locked',
    avgScore: 'Avg Score',
    totalTime: 'Total Time',
    hours: 'hours',
    minutes: 'minutes',
    score: 'Score',
    date: 'Date',
    noData: 'No data available',
    passRate: 'Pass Rate',
    perfectScores: 'Perfect Scores',
    consistency: 'Consistency',
    progress: 'Progress'
  }
};

const COLORS = ['#22c55e', '#3b82f6', '#6b7280'];

const ProgressCharts: React.FC<ProgressChartsProps> = ({
  quizAttempts,
  chapterProgress,
  trainingTime = [],
  totalChapters,
  gamification
}) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  // Process score evolution data
  const scoreEvolutionData = useMemo(() => {
    const sorted = [...quizAttempts].sort(
      (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
    
    return sorted.slice(-15).map((attempt, idx) => ({
      name: `${idx + 1}`,
      score: attempt.score,
      date: new Date(attempt.created_at).toLocaleDateString(language === 'ro' ? 'ro-RO' : language === 'de' ? 'de-DE' : 'en-US', { 
        day: 'numeric', 
        month: 'short' 
      })
    }));
  }, [quizAttempts, language]);

  // Process chapter completion data
  const completionData = useMemo(() => {
    const completed = chapterProgress.filter(c => c.status === 'completed').length;
    const inProgress = chapterProgress.filter(c => c.status === 'unlocked' || c.status === 'in-progress').length;
    const locked = totalChapters - completed - inProgress;

    return [
      { name: t.completed, value: completed, color: '#22c55e' },
      { name: t.inProgress, value: inProgress, color: '#3b82f6' },
      { name: t.locked, value: Math.max(0, locked), color: '#6b7280' }
    ];
  }, [chapterProgress, totalChapters, t]);

  // Calculate performance metrics for radial chart
  const performanceData = useMemo(() => {
    const completedCount = chapterProgress.filter(c => c.status === 'completed').length;
    const progressPercent = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;
    
    const passedAttempts = quizAttempts.filter(a => a.passed).length;
    const passRate = quizAttempts.length > 0 ? Math.round((passedAttempts / quizAttempts.length) * 100) : 0;
    
    const perfectCount = chapterProgress.filter(c => c.best_score === 100).length;
    const perfectPercent = completedCount > 0 ? Math.round((perfectCount / completedCount) * 100) : 0;
    
    const consistencyScore = gamification?.streak_days 
      ? Math.min(100, gamification.streak_days * 14) // 7 days = 100%
      : 0;

    return [
      { name: t.progress, value: progressPercent, fill: '#22c55e' },
      { name: t.passRate, value: passRate, fill: '#3b82f6' },
      { name: t.perfectScores, value: perfectPercent, fill: '#f59e0b' },
      { name: t.consistency, value: consistencyScore, fill: '#a855f7' }
    ];
  }, [chapterProgress, quizAttempts, totalChapters, gamification, t]);

  // Calculate stats
  const stats = useMemo(() => {
    const avgScore = quizAttempts.length > 0
      ? Math.round(quizAttempts.reduce((sum, a) => sum + a.score, 0) / quizAttempts.length)
      : 0;
    
    const totalSeconds = trainingTime.reduce((sum, t) => sum + t.total_seconds, 0);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return { avgScore, hours, minutes };
  }, [quizAttempts, trainingTime]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Score Evolution Chart */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            {t.scoreEvolution}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {scoreEvolutionData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={scoreEvolutionData}>
                <defs>
                  <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" tick={{ fontSize: 10 }} stroke="#6b7280" />
                <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#9ca3af' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#scoreGradient)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              {t.noData}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Chapter Completion Pie */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            {t.chapterCompletion}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="50%" height={180}>
              <PieChart>
                <Pie
                  data={completionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {completionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {completionData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">{item.value}</Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Radial Chart */}
      <Card className="bg-card/50 border-border/50 md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            {t.performanceRadar}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ResponsiveContainer width="100%" height={200}>
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="20%" 
                outerRadius="90%" 
                data={performanceData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={10}
                />
                <Legend 
                  iconSize={10} 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  wrapperStyle={{ fontSize: '12px' }}
                />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 min-w-[200px]">
              <div className="text-center p-3 rounded-lg bg-primary/10">
                <div className="text-2xl font-bold text-primary">{stats.avgScore}%</div>
                <div className="text-xs text-muted-foreground">{t.avgScore}</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-amber-500/10">
                <div className="text-2xl font-bold text-amber-500">
                  {stats.hours > 0 ? `${stats.hours}h` : `${stats.minutes}m`}
                </div>
                <div className="text-xs text-muted-foreground">{t.totalTime}</div>
              </div>
              {gamification && (
                <>
                  <div className="text-center p-3 rounded-lg bg-green-500/10">
                    <div className="text-2xl font-bold text-green-500">{gamification.simulations_completed}</div>
                    <div className="text-xs text-muted-foreground">Simulări</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-purple-500/10">
                    <div className="text-2xl font-bold text-purple-500">{gamification.streak_days}</div>
                    <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                      <Flame className="h-3 w-3" /> Streak
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressCharts;
