import React, { memo, useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ContentKPI } from '@/hooks/useLearningKPI';
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
  ScatterChart,
  Scatter,
  ZAxis,
  Legend,
} from 'recharts';
import { 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle,
  TrendingUp,
  TrendingDown,
  ArrowUpDown,
  BookX,
  Lightbulb,
  Target,
} from 'lucide-react';

interface ContentKPIPanelProps {
  contentKPIs: ContentKPI[];
  loading: boolean;
}

const difficultyColors: Record<ContentKPI['difficulty'], string> = {
  very_easy: '#22c55e',
  easy: '#84cc16',
  medium: '#eab308',
  hard: '#f97316',
  very_hard: '#ef4444',
};

const getDifficultyLabels = (t: (key: string) => string): Record<ContentKPI['difficulty'], string> => ({
  very_easy: t('admin.kpi.veryEasy'),
  easy: t('admin.kpi.easy'),
  medium: t('admin.kpi.medium'),
  hard: t('admin.kpi.hard'),
  very_hard: t('admin.kpi.veryHard'),
});

export const ContentKPIPanel = memo(function ContentKPIPanel({ 
  contentKPIs, 
  loading 
}: ContentKPIPanelProps) {
  const { t } = useLanguage();
  const difficultyLabels = getDifficultyLabels(t);
  const [sortBy, setSortBy] = useState<'passRate' | 'difficulty' | 'bounceRate'>('passRate');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  const filteredAndSorted = useMemo(() => {
    let result = [...contentKPIs];
    
    if (filterDifficulty !== 'all') {
      result = result.filter(c => c.difficulty === filterDifficulty);
    }
    
    result.sort((a, b) => {
      switch (sortBy) {
        case 'passRate':
          return a.avgPassRate - b.avgPassRate;
        case 'bounceRate':
          return b.bounceRate - a.bounceRate;
        case 'difficulty':
          const diffOrder = { very_hard: 0, hard: 1, medium: 2, easy: 3, very_easy: 4 };
          return diffOrder[a.difficulty] - diffOrder[b.difficulty];
        default:
          return 0;
      }
    });
    
    return result;
  }, [contentKPIs, sortBy, filterDifficulty]);

  // Summary stats
  const veryHardChapters = contentKPIs.filter(c => c.difficulty === 'very_hard' || c.difficulty === 'hard');
  const veryEasyChapters = contentKPIs.filter(c => c.difficulty === 'very_easy' || c.difficulty === 'easy');
  const chaptersNeedingReview = contentKPIs.filter(c => c.needsReview);
  const avgBounceRate = contentKPIs.length > 0 
    ? contentKPIs.reduce((sum, c) => sum + c.bounceRate, 0) / contentKPIs.length 
    : 0;

  // Difficulty distribution for chart
  const difficultyDistribution = [
    { name: t('admin.kpi.veryEasy'), value: contentKPIs.filter(c => c.difficulty === 'very_easy').length, color: difficultyColors.very_easy },
    { name: t('admin.kpi.easy'), value: contentKPIs.filter(c => c.difficulty === 'easy').length, color: difficultyColors.easy },
    { name: t('admin.kpi.medium'), value: contentKPIs.filter(c => c.difficulty === 'medium').length, color: difficultyColors.medium },
    { name: t('admin.kpi.hard'), value: contentKPIs.filter(c => c.difficulty === 'hard').length, color: difficultyColors.hard },
    { name: t('admin.kpi.veryHard'), value: contentKPIs.filter(c => c.difficulty === 'very_hard').length, color: difficultyColors.very_hard },
  ];

  // Scatter data for pass rate vs attempts
  const scatterData = contentKPIs.map(c => ({
    x: c.avgPassRate,
    y: c.avgAttemptsToPass,
    z: c.bounceRate + 10,
    name: c.chapterName,
    difficulty: c.difficulty,
  }));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-destructive" />
              {t('admin.kpi.hardChapters')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{veryHardChapters.length}</div>
            <p className="text-xs text-muted-foreground">{t('admin.kpi.needsSimplification')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              {t('admin.kpi.easyChapters')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{veryEasyChapters.length}</div>
            <p className="text-xs text-muted-foreground">{t('admin.kpi.canBeExpanded')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              {t('admin.kpi.needsReview')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{chaptersNeedingReview.length}</div>
            <p className="text-xs text-muted-foreground">{t('admin.kpi.priorityRequired')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BookX className="h-4 w-4 text-muted-foreground" />
              {t('admin.kpi.avgBounceRate')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgBounceRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">{t('admin.kpi.chapterAbandonment')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Difficulty Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t('admin.kpi.difficultyDistribution')}</CardTitle>
            <CardDescription>{t('admin.kpi.chaptersPerDifficulty')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={difficultyDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" name={t('admin.kpi.chaptersLabel')}>
                  {difficultyDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pass Rate vs Attempts Scatter */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t('admin.kpi.correlationAnalysis')}</CardTitle>
            <CardDescription>{t('admin.kpi.passRateVsAttempts')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="x" 
                  name={t('admin.kpi.passRate')} 
                  unit="%" 
                  domain={[0, 100]}
                  label={{ value: t('admin.kpi.passRate') + ' (%)', position: 'bottom', offset: -5 }}
                />
                <YAxis 
                  dataKey="y" 
                  name={t('admin.kpi.avgAttemptsToPass')} 
                  label={{ value: t('admin.kpi.avgAttemptsToPass'), angle: -90, position: 'insideLeft' }}
                />
                <ZAxis dataKey="z" range={[50, 400]} />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-lg">
                          <p className="font-medium">{data.name}</p>
                          <p className="text-sm">{t('admin.kpi.passRateLabel')}: {data.x.toFixed(1)}%</p>
                          <p className="text-sm">{t('admin.kpi.attemptsLabel')}: {data.y.toFixed(1)}</p>
                          <Badge 
                            className="mt-1"
                            style={{ backgroundColor: difficultyColors[data.difficulty as ContentKPI['difficulty']] }}
                          >
                            {difficultyLabels[data.difficulty as ContentKPI['difficulty']]}
                          </Badge>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Scatter 
                  data={scatterData} 
                  fill="hsl(var(--primary))"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Chapters List with Recommendations */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-warning" />
                {t('admin.kpi.detailedAnalysis')}
              </CardTitle>
              <CardDescription>{t('admin.kpi.orderedBy')} {sortBy === 'passRate' ? t('admin.kpi.passRate') : sortBy === 'bounceRate' ? t('admin.kpi.bounceRate') : t('admin.kpi.difficulty')}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder={t('admin.kpi.difficulty')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('admin.kpi.all')}</SelectItem>
                  <SelectItem value="very_easy">{t('admin.kpi.veryEasy')}</SelectItem>
                  <SelectItem value="easy">{t('admin.kpi.easy')}</SelectItem>
                  <SelectItem value="medium">{t('admin.kpi.medium')}</SelectItem>
                  <SelectItem value="hard">{t('admin.kpi.hard')}</SelectItem>
                  <SelectItem value="very_hard">{t('admin.kpi.veryHard')}</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as any)}>
                <SelectTrigger className="w-[140px]">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  <SelectValue placeholder={t('admin.kpi.sort')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="passRate">{t('admin.kpi.passRate')}</SelectItem>
                  <SelectItem value="bounceRate">{t('admin.kpi.bounceRate')}</SelectItem>
                  <SelectItem value="difficulty">{t('admin.kpi.difficulty')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px]">
            <div className="space-y-3 pr-4">
              {filteredAndSorted.map((chapter) => (
                <div 
                  key={chapter.chapterId}
                  className={`p-4 rounded-lg border ${
                    chapter.needsReview 
                      ? 'border-warning/50 bg-warning/5' 
                      : 'border-border bg-muted/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium truncate">{chapter.chapterName}</h4>
                        <Badge 
                          style={{ backgroundColor: difficultyColors[chapter.difficulty] }}
                          className="text-white"
                        >
                          {difficultyLabels[chapter.difficulty]}
                        </Badge>
                        {chapter.needsReview && (
                          <Badge variant="outline" className="border-warning text-warning">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            {t('admin.kpi.review')}
                          </Badge>
                        )}
                        {chapter.correlationWithUpdates > 0 && (
                          <Badge variant="secondary">
                            {chapter.correlationWithUpdates} {t('admin.kpi.updates')}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">{t('admin.kpi.passRate')}</p>
                          <p className="font-medium">{chapter.avgPassRate.toFixed(1)}%</p>
                          <Progress value={chapter.avgPassRate} className="h-1 mt-1" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('admin.kpi.avgAttemptsToPass')}</p>
                          <p className="font-medium">{chapter.avgAttemptsToPass.toFixed(1)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('admin.kpi.skipRate')}</p>
                          <p className="font-medium">{chapter.skipRate.toFixed(1)}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">{t('admin.kpi.bounceRate')}</p>
                          <p className="font-medium text-warning">{chapter.bounceRate.toFixed(1)}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {chapter.recommendation && (
                    <div className="mt-3 p-3 bg-warning/10 rounded border border-warning/30">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 text-warning mt-0.5 shrink-0" />
                        <p className="text-sm text-warning">
                          {chapter.recommendation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
});
