import React, { memo, useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  BookOpen, 
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { ALL_CHAPTERS } from '@/data/chaptersConfig';
import { useLanguage } from '@/contexts/LanguageContext';

interface LearningRecommendation {
  chapterId: string;
  chapterName: string;
  priority: 'high' | 'medium' | 'low';
  reason: string;
  estimatedTime: number;
  type: 'weak_area' | 'next_chapter' | 'review' | 'challenge';
  score?: number;
  attempts?: number;
}

interface LearningStats {
  strongAreas: string[];
  weakAreas: string[];
  averageScore: number;
  totalStudyTime: number;
  completedChapters: number;
  streak: number;
}

export const LearningPathAI = memo(function LearningPathAI() {
  const { user } = useAuth();
  const { language } = useLanguage();
  const [recommendations, setRecommendations] = useState<LearningRecommendation[]>([]);
  const [stats, setStats] = useState<LearningStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => {
    if (user) {
      generateRecommendations();
    }
  }, [user]);

  const generateRecommendations = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      // Fetch user's quiz attempts
      const { data: quizAttempts } = await supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      // Fetch chapter progress
      const { data: chapterProgress } = await supabase
        .from('chapter_progress')
        .select('*')
        .eq('user_id', user.id);

      // Fetch gamification data
      const { data: gamification } = await supabase
        .from('user_gamification')
        .select('*')
        .eq('user_id', user.id)
        .single();

      // Analyze performance per chapter
      const chapterPerformance = new Map<string, { scores: number[], attempts: number, passed: boolean }>();
      
      quizAttempts?.forEach(attempt => {
        const existing = chapterPerformance.get(attempt.chapter_id) || { scores: [], attempts: 0, passed: false };
        existing.scores.push(attempt.score);
        existing.attempts++;
        if (attempt.passed) existing.passed = true;
        chapterPerformance.set(attempt.chapter_id, existing);
      });

      // Calculate stats
      const allScores = quizAttempts?.map(a => a.score) || [];
      const avgScore = allScores.length > 0 
        ? allScores.reduce((a, b) => a + b, 0) / allScores.length 
        : 0;

      const completedChapterIds = new Set(
        chapterProgress?.filter(p => p.status === 'completed').map(p => p.chapter_id) || []
      );

      // Identify strong and weak areas
      const strongAreas: string[] = [];
      const weakAreas: string[] = [];

      chapterPerformance.forEach((perf, chapterId) => {
        const avgChapterScore = perf.scores.reduce((a, b) => a + b, 0) / perf.scores.length;
        const chapter = ALL_CHAPTERS.find(c => c.id === chapterId);
        if (chapter) {
          if (avgChapterScore >= 80) {
            strongAreas.push(chapter.labelKey);
          } else if (avgChapterScore < 60 || perf.attempts > 3) {
            weakAreas.push(chapter.labelKey);
          }
        }
      });

      setStats({
        strongAreas: strongAreas.slice(0, 3),
        weakAreas: weakAreas.slice(0, 3),
        averageScore: avgScore,
        totalStudyTime: 0, // Study time tracked elsewhere
        completedChapters: completedChapterIds.size,
        streak: gamification?.streak_days || 0
      });

      // Generate recommendations
      const recs: LearningRecommendation[] = [];

      // 1. Weak areas - highest priority
      chapterPerformance.forEach((perf, chapterId) => {
        const avgChapterScore = perf.scores.reduce((a, b) => a + b, 0) / perf.scores.length;
        const chapter = ALL_CHAPTERS.find(c => c.id === chapterId);
        
        if (chapter && (avgChapterScore < 70 || (perf.attempts >= 2 && !perf.passed))) {
          recs.push({
            chapterId,
            chapterName: chapter.labelKey,
            priority: avgChapterScore < 50 ? 'high' : 'medium',
            reason: avgChapterScore < 50 
              ? `Scor mediu ${avgChapterScore.toFixed(0)}% - necesită atenție` 
              : `${perf.attempts} încercări - recapitulare recomandată`,
            estimatedTime: 20,
            type: 'weak_area',
            score: avgChapterScore,
            attempts: perf.attempts
          });
        }
      });

      // 2. Next chapters in sequence (already sorted in ALL_CHAPTERS)
      const sortedChapters = ALL_CHAPTERS;

      for (const chapter of sortedChapters) {
        if (!completedChapterIds.has(chapter.id) && !chapterPerformance.has(chapter.id)) {
          recs.push({
            chapterId: chapter.id,
            chapterName: chapter.labelKey,
            priority: recs.length < 2 ? 'high' : 'medium',
            reason: 'Următorul capitol în curriculum',
            estimatedTime: 15,
            type: 'next_chapter'
          });
          if (recs.filter(r => r.type === 'next_chapter').length >= 2) break;
        }
      }

      // 3. Review completed chapters (if score was borderline)
      chapterPerformance.forEach((perf, chapterId) => {
        const avgChapterScore = perf.scores.reduce((a, b) => a + b, 0) / perf.scores.length;
        const chapter = ALL_CHAPTERS.find(c => c.id === chapterId);
        
        if (chapter && perf.passed && avgChapterScore >= 70 && avgChapterScore < 85) {
          recs.push({
            chapterId,
            chapterName: chapter.labelKey,
            priority: 'low',
            reason: `Scor ${avgChapterScore.toFixed(0)}% - consolidează cunoștințele`,
            estimatedTime: 10,
            type: 'review',
            score: avgChapterScore
          });
        }
      });

      // 4. Challenge recommendations for high performers
      if (avgScore >= 85) {
        const advancedChapters = ALL_CHAPTERS.filter(c => 
          c.id.includes('adr') || 
          c.id.includes('customs') || 
          c.id.includes('compliance')
        );
        
        for (const chapter of advancedChapters) {
          if (!completedChapterIds.has(chapter.id)) {
            recs.push({
              chapterId: chapter.id,
              chapterName: chapter.labelKey,
              priority: 'medium',
              reason: 'Capitol avansat - provocare pentru performeri',
              estimatedTime: 25,
              type: 'challenge'
            });
            break;
          }
        }
      }

      // Sort by priority
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      recs.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

      setRecommendations(recs.slice(0, 5));
    } catch (error) {
      console.error('Error generating recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setAnalyzing(true);
    await generateRecommendations();
    setAnalyzing(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-600 border-red-200';
      case 'medium': return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      case 'low': return 'bg-green-500/10 text-green-600 border-green-200';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'weak_area': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'next_chapter': return <ArrowRight className="h-4 w-4 text-blue-500" />;
      case 'review': return <RefreshCw className="h-4 w-4 text-yellow-500" />;
      case 'challenge': return <Sparkles className="h-4 w-4 text-purple-500" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'weak_area': return 'Zonă slabă';
      case 'next_chapter': return 'Capitol nou';
      case 'review': return 'Recapitulare';
      case 'challenge': return 'Provocare';
      default: return 'Studiu';
    }
  };

  if (loading) {
    return (
      <Card className="border-primary/20">
        <CardContent className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Learning Path AI</CardTitle>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh}
            disabled={analyzing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${analyzing ? 'animate-spin' : ''}`} />
            Reanalează
          </Button>
        </div>
        <CardDescription>
          Recomandări personalizate bazate pe performanța ta
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats Overview */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-background/50 rounded-lg p-3 text-center">
              <Target className="h-4 w-4 mx-auto mb-1 text-primary" />
              <p className="text-2xl font-bold">{stats.averageScore.toFixed(0)}%</p>
              <p className="text-xs text-muted-foreground">Scor mediu</p>
            </div>
            <div className="bg-background/50 rounded-lg p-3 text-center">
              <CheckCircle2 className="h-4 w-4 mx-auto mb-1 text-green-500" />
              <p className="text-2xl font-bold">{stats.completedChapters}</p>
              <p className="text-xs text-muted-foreground">Completate</p>
            </div>
            <div className="bg-background/50 rounded-lg p-3 text-center">
              <Clock className="h-4 w-4 mx-auto mb-1 text-blue-500" />
              <p className="text-2xl font-bold">{Math.round(stats.totalStudyTime / 60)}h</p>
              <p className="text-xs text-muted-foreground">Timp studiu</p>
            </div>
            <div className="bg-background/50 rounded-lg p-3 text-center">
              <TrendingUp className="h-4 w-4 mx-auto mb-1 text-orange-500" />
              <p className="text-2xl font-bold">{stats.streak}</p>
              <p className="text-xs text-muted-foreground">Zile la rând</p>
            </div>
          </div>
        )}

        {/* Strong/Weak Areas */}
        {stats && (stats.strongAreas.length > 0 || stats.weakAreas.length > 0) && (
          <div className="grid md:grid-cols-2 gap-4">
            {stats.strongAreas.length > 0 && (
              <div className="bg-green-500/5 border border-green-200 rounded-lg p-3">
                <h4 className="font-medium text-green-700 flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Puncte forte
                </h4>
                <ul className="space-y-1">
                  {stats.strongAreas.map((area, i) => (
                    <li key={i} className="text-sm text-green-600">• {area}</li>
                  ))}
                </ul>
              </div>
            )}
            {stats.weakAreas.length > 0 && (
              <div className="bg-red-500/5 border border-red-200 rounded-lg p-3">
                <h4 className="font-medium text-red-700 flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  De îmbunătățit
                </h4>
                <ul className="space-y-1">
                  {stats.weakAreas.map((area, i) => (
                    <li key={i} className="text-sm text-red-600">• {area}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Recommendations */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Recomandări pentru tine
          </h4>
          <ScrollArea className="h-[280px]">
            <div className="space-y-3 pr-4">
              {recommendations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Începe să studiezi pentru a primi recomandări personalizate!</p>
                </div>
              ) : (
                recommendations.map((rec, index) => (
                  <div 
                    key={rec.chapterId}
                    className="bg-background border rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="mt-0.5">
                          {getTypeIcon(rec.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h5 className="font-medium text-sm truncate">
                              {rec.chapterName}
                            </h5>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getPriorityColor(rec.priority)}`}
                            >
                              {rec.priority === 'high' ? 'Prioritar' : rec.priority === 'medium' ? 'Recomandat' : 'Opțional'}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">
                            {rec.reason}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              ~{rec.estimatedTime} min
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {getTypeLabel(rec.type)}
                            </Badge>
                            {rec.score !== undefined && (
                              <span>Scor actual: {rec.score.toFixed(0)}%</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="shrink-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    {rec.score !== undefined && rec.score < 70 && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progres spre 70%</span>
                          <span>{rec.score.toFixed(0)}%</span>
                        </div>
                        <Progress value={rec.score} className="h-1.5" />
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
});
