import { 
  Trophy, Target, Clock, CheckCircle2, XCircle, TrendingUp, 
  Award, BarChart3, Percent, BookOpen, RotateCcw, ArrowLeft
} from "lucide-react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Certificate } from "./Certificate";
import { allChapters, totalChapters, chaptersWithQuizzes, totalQuizzes } from "@/data/chaptersData";

interface ProgressDashboardProps {
  onNavigate: (chapterId: string) => void;
  onClose: () => void;
}

export function ProgressDashboard({ onNavigate, onClose }: ProgressDashboardProps) {
  const { progress, getOverallProgress, getChapterProgress, resetProgress } = useProgressContext();
  const { t, language } = useLanguage();
  
  const overallProgress = getOverallProgress();
  
  // Calculate quiz statistics based on chapters that have quizzes
  const quizStats = allChapters.reduce((acc, chapter) => {
    const chapterProgress = getChapterProgress(chapter.id);
    if (chapterProgress?.quizScore !== undefined && chapterProgress?.quizTotal !== undefined) {
      acc.completedQuizzes++;
      acc.totalScore += chapterProgress.quizScore;
      acc.totalQuestions += chapterProgress.quizTotal;
      if (chapterProgress.quizScore >= chapterProgress.quizTotal * 0.7) {
        acc.passedQuizzes++;
      }
    }
    if (chapterProgress?.completed) {
      acc.completedChapters++;
    }
    return acc;
  }, { completedQuizzes: 0, totalScore: 0, totalQuestions: 0, passedQuizzes: 0, completedChapters: 0 });

  const averageScore = quizStats.totalQuestions > 0 
    ? Math.round((quizStats.totalScore / quizStats.totalQuestions) * 100) 
    : 0;
  
  const passRate = quizStats.completedQuizzes > 0 
    ? Math.round((quizStats.passedQuizzes / quizStats.completedQuizzes) * 100) 
    : 0;

  const isCertificateEligible = 
    quizStats.completedChapters === totalChapters && 
    quizStats.completedQuizzes >= totalQuizzes &&
    quizStats.passedQuizzes === quizStats.completedQuizzes;

  const recentActivity = allChapters
    .map(chapter => ({
      ...chapter,
      progress: getChapterProgress(chapter.id)
    }))
    .filter(c => c.progress?.lastVisited)
    .sort((a, b) => {
      const dateA = new Date(a.progress?.lastVisited || 0);
      const dateB = new Date(b.progress?.lastVisited || 0);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 5);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const locale = language === 'de' ? 'de-DE' : language === 'en' ? 'en-GB' : 'ro-RO';
    return date.toLocaleDateString(locale, { 
      day: 'numeric', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            {t('dashboard.title')}
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">{t('dashboard.subtitle')}</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onClose}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('dashboard.back')}
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <span className="text-2xl font-bold text-primary">{overallProgress}%</span>
            </div>
            <p className="text-xs text-muted-foreground">{t('dashboard.overall')}</p>
            <Progress value={overallProgress} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-success" />
              </div>
              <span className="text-2xl font-bold text-success">{quizStats.completedChapters}</span>
            </div>
            <p className="text-xs text-muted-foreground">{t('dashboard.completed')}</p>
            <p className="text-[10px] text-muted-foreground/70 mt-1">{t('dashboard.total')} {totalChapters}</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-warning/10 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-warning" />
              </div>
              <span className="text-2xl font-bold text-warning">{quizStats.completedQuizzes}/{totalQuizzes}</span>
            </div>
            <p className="text-xs text-muted-foreground">{t('dashboard.quizzes')}</p>
            <p className="text-[10px] text-muted-foreground/70 mt-1">{quizStats.passedQuizzes} {t('dashboard.passed')}</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-info/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-info" />
              </div>
              <span className="text-2xl font-bold text-info">{averageScore}%</span>
            </div>
            <p className="text-xs text-muted-foreground">{t('dashboard.average')}</p>
            <p className="text-[10px] text-muted-foreground/70 mt-1">{passRate}% {t('dashboard.passRate')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Recent Activity */}
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="w-4 h-4 text-primary" />
              {t('dashboard.recent')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivity.length > 0 ? (
              <div className="space-y-2">
                {recentActivity.map(item => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      {item.progress?.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                      )}
                      <div>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{t(item.labelKey)}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(item.progress?.lastVisited)}
                        </p>
                      </div>
                    </div>
                    {item.progress?.quizScore !== undefined && (
                      <span className={cn(
                        "text-xs px-2 py-1 rounded font-medium",
                        item.progress.quizScore >= (item.progress.quizTotal! * 0.7)
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      )}>
                        {item.progress.quizScore}/{item.progress.quizTotal}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  {t('dashboard.noActivity')}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quiz Performance */}
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Award className="w-4 h-4 text-primary" />
              {t('dashboard.quizPerformance')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-success/5 rounded-lg text-center border border-success/10">
                  <Percent className="w-5 h-5 mx-auto text-success mb-1" />
                  <p className="text-xl font-bold text-success">{passRate}%</p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.passRateLabel')}</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg text-center border border-primary/10">
                  <Target className="w-5 h-5 mx-auto text-primary mb-1" />
                  <p className="text-xl font-bold text-primary">
                    {quizStats.totalScore}/{quizStats.totalQuestions}
                  </p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.totalScore')}</p>
                </div>
              </div>

              {quizStats.completedQuizzes > 0 && (
                <div className="space-y-2 p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                      <span>{t('dashboard.passedLabel')}</span>
                    </span>
                    <span className="font-semibold text-success">{quizStats.passedQuizzes}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <XCircle className="w-3.5 h-3.5 text-destructive" />
                      <span>{t('dashboard.needImprovement')}</span>
                    </span>
                    <span className="font-semibold text-destructive">
                      {quizStats.completedQuizzes - quizStats.passedQuizzes}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-t border-border pt-2 mt-2">
                    <span className="flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-warning" />
                      <span>{t('dashboard.remaining')}</span>
                    </span>
                    <span className="font-semibold text-warning">
                      {totalQuizzes - quizStats.completedQuizzes}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Chapters Progress */}
      <Card className="border-border">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <BookOpen className="w-4 h-4 text-primary" />
            {t('dashboard.allChapters')} ({totalChapters})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {allChapters.map((chapter, index) => {
              const chapterProgress = getChapterProgress(chapter.id);
              const isCompleted = chapterProgress?.completed;
              const hasQuizScore = chapterProgress?.quizScore !== undefined;
              const quizPassed = hasQuizScore && chapterProgress.quizScore! >= (chapterProgress.quizTotal! * 0.7);
              
              return (
                <button
                  key={chapter.id}
                  onClick={() => onNavigate(chapter.id)}
                  className={cn(
                    "p-3 rounded-lg border text-left transition-all duration-150 group",
                    isCompleted 
                      ? "bg-success/5 border-success/20 hover:bg-success/10" 
                      : "bg-card border-border hover:bg-muted/50 hover:border-primary/20"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className={cn(
                        "font-medium text-sm truncate transition-colors",
                        isCompleted ? "text-success" : "text-foreground group-hover:text-primary"
                      )}>
                        <span className="text-muted-foreground mr-1">{index + 1}.</span>
                        {t(chapter.labelKey)}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{t(chapter.section)}</p>
                    </div>
                    <div className="flex items-center gap-1.5 ml-2">
                      {hasQuizScore ? (
                        <span className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded font-medium",
                          quizPassed ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                        )}>
                          {chapterProgress.quizScore}/{chapterProgress.quizTotal}
                        </span>
                      ) : chapter.hasQuiz ? (
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-muted text-muted-foreground">
                          Quiz
                        </span>
                      ) : null}
                      {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-success" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Certificate Section */}
      {isCertificateEligible && (
        <Card className="border-success/20 bg-success/5">
          <CardContent className="pt-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-success">{t('dashboard.congratulations')}</h3>
                <p className="text-sm text-muted-foreground">{t('dashboard.completedAll')}</p>
              </div>
            </div>
            <Certificate 
              isEligible={isCertificateEligible}
              completedChapters={quizStats.completedChapters}
              totalChapters={totalChapters}
              averageScore={averageScore}
              passedQuizzes={quizStats.passedQuizzes}
              totalQuizzes={totalQuizzes}
            />
          </CardContent>
        </Card>
      )}

      {/* Reset Progress */}
      <div className="flex justify-center pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            if (confirm(t('dashboard.confirmReset'))) {
              resetProgress();
            }
          }}
          className="text-muted-foreground hover:text-destructive gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          {t('dashboard.reset')}
        </Button>
      </div>
    </div>
  );
}