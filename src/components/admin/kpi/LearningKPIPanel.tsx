import React, { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChapterKPI } from '@/hooks/useLearningKPI';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
} from 'recharts';
import { AlertTriangle, TrendingDown, Clock, Target, Users } from 'lucide-react';

interface LearningKPIPanelProps {
  chapterKPIs: ChapterKPI[];
  loading: boolean;
}

const getPassRateColor = (rate: number) => {
  if (rate >= 80) return 'hsl(142, 76%, 36%)'; // green
  if (rate >= 60) return 'hsl(48, 96%, 53%)'; // yellow
  if (rate >= 40) return 'hsl(25, 95%, 53%)'; // orange
  return 'hsl(0, 84%, 60%)'; // red
};

export const LearningKPIPanel = memo(function LearningKPIPanel({ 
  chapterKPIs, 
  loading 
}: LearningKPIPanelProps) {
  const { t } = useLanguage();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  // Calculate summary stats
  const avgPassRate = chapterKPIs.length > 0 
    ? chapterKPIs.reduce((sum, c) => sum + c.passRate, 0) / chapterKPIs.length 
    : 0;
  const avgAttempts = chapterKPIs.length > 0 
    ? chapterKPIs.reduce((sum, c) => sum + c.avgAttempts, 0) / chapterKPIs.length 
    : 0;
  const totalAttempts = chapterKPIs.reduce((sum, c) => sum + c.totalAttempts, 0);
  const totalUniqueUsers = new Set(chapterKPIs.flatMap(c => c.uniqueUsers)).size || 
    Math.max(...chapterKPIs.map(c => c.uniqueUsers));

  // Prepare chart data
  const passRateData = chapterKPIs
    .filter(c => c.totalAttempts > 0)
    .map(c => ({
      name: c.chapterName.slice(0, 12),
      fullName: c.chapterName,
      passRate: Math.round(c.passRate),
      failureRate: Math.round(c.failureRate),
    }))
    .slice(0, 15);

  // Top 5 chapters with highest failure rate
  const worstChapters = [...chapterKPIs]
    .filter(c => c.totalAttempts >= 5)
    .sort((a, b) => b.failureRate - a.failureRate)
    .slice(0, 5);

  // Questions that fail most often across all chapters
  const allFailedQuestions = chapterKPIs
    .flatMap(c => c.mostFailedQuestions.map(q => ({
      ...q,
      chapter: c.chapterName,
    })))
    .sort((a, b) => b.failureRate - a.failureRate)
    .slice(0, 10);

  // Attempts distribution
  const attemptsDistribution = [
    { name: t('admin.kpi.attempt1'), value: chapterKPIs.filter(c => c.avgAttempts <= 1.5).length, color: '#22c55e' },
    { name: t('admin.kpi.attempts2'), value: chapterKPIs.filter(c => c.avgAttempts > 1.5 && c.avgAttempts <= 2.5).length, color: '#eab308' },
    { name: t('admin.kpi.attempts3plus'), value: chapterKPIs.filter(c => c.avgAttempts > 2.5).length, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              {t('admin.kpi.avgPassRate')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: getPassRateColor(avgPassRate) }}>
              {avgPassRate.toFixed(1)}%
            </div>
            <Progress value={avgPassRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {t('admin.kpi.avgAttempts')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgAttempts.toFixed(1)}</div>
            <p className="text-xs text-muted-foreground">{t('admin.kpi.perChapter')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-destructive" />
              {t('admin.kpi.totalAttempts')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAttempts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{t('admin.kpi.fromAllChapters')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              {t('admin.kpi.uniqueUsers')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUniqueUsers}</div>
            <p className="text-xs text-muted-foreground">{t('admin.kpi.tookQuiz')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pass Rate by Chapter */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rata de Promovare per Capitol</CardTitle>
            <CardDescription>Procentul de încercări reușite</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={passRateData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 11 }} />
                <Tooltip 
                  formatter={(value: number, name: string) => [`${value}%`, name === 'passRate' ? 'Promovat' : 'Picat']}
                  labelFormatter={(label, payload) => payload?.[0]?.payload?.fullName || label}
                />
                <Bar dataKey="passRate" name="Rata promovare">
                  {passRateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getPassRateColor(entry.passRate)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Attempts Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribuția Încercărilor</CardTitle>
            <CardDescription>Câte capitole necesită X încercări în medie</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={attemptsDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {attemptsDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Problem Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Worst Performing Chapters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Capitole cu Cea Mai Mare Rată de Eșec
            </CardTitle>
            <CardDescription>Necesită atenție prioritară</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {worstChapters.length === 0 ? (
                <p className="text-muted-foreground text-sm">Nu există date suficiente</p>
              ) : (
                worstChapters.map((chapter, idx) => (
                  <div key={chapter.chapterId} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="destructive">{idx + 1}</Badge>
                      <div>
                        <p className="font-medium text-sm">{chapter.chapterName}</p>
                        <p className="text-xs text-muted-foreground">
                          {chapter.totalAttempts} încercări, {chapter.avgAttempts.toFixed(1)} medie
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-destructive">{chapter.failureRate.toFixed(1)}%</p>
                      <p className="text-xs text-muted-foreground">rată eșec</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Most Failed Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-orange-500" />
              Întrebări cu Cel Mai Mare Eșec
            </CardTitle>
            <CardDescription>Întrebări care pică cel mai des</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {allFailedQuestions.length === 0 ? (
                <p className="text-muted-foreground text-sm">Nu există date despre întrebări</p>
              ) : (
                allFailedQuestions.map((q, idx) => (
                  <div key={`${q.chapter}-${q.questionIndex}`} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Badge variant="outline" className="shrink-0">{idx + 1}</Badge>
                      <div className="min-w-0">
                        <p className="text-sm truncate">{q.chapter}</p>
                        <p className="text-xs text-muted-foreground">Întrebarea #{q.questionIndex + 1}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={q.failureRate > 60 ? 'destructive' : 'secondary'}
                      className="shrink-0 ml-2"
                    >
                      {q.failureRate.toFixed(0)}% eșec
                    </Badge>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});
