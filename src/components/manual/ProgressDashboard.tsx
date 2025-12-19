import { 
  Trophy, Target, Clock, CheckCircle2, XCircle, TrendingUp, 
  Award, BarChart3, Percent, BookOpen, RotateCcw, Sparkles, ArrowLeft
} from "lucide-react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Certificate } from "./Certificate";

const chapters = [
  // SECTION 1: Foundation
  { id: "intro", label: "1. Introduction", section: "Foundation" },
  { id: "mindset", label: "2. Role & Mindset", section: "Foundation" },
  { id: "soft-skills", label: "3. Soft Skills", section: "Foundation" },
  { id: "workflow", label: "4. Operational Workflow", section: "Foundation" },
  
  // SECTION 2: Equipment & Handling
  { id: "vehicle", label: "5. Vehicle Reference", section: "Equipment" },
  { id: "loading", label: "6. Loading & Securing", section: "Equipment" },
  { id: "reefer", label: "7. Temperature Transport", section: "Equipment" },
  { id: "warehouse", label: "8. Warehouse & Cross-Dock", section: "Equipment" },
  { id: "adr", label: "9. ADR Dangerous Goods", section: "Equipment" },
  { id: "documents", label: "10. Transport Documents", section: "Equipment" },
  
  // SECTION 3: Trade & Regulations
  { id: "incoterms", label: "11. Incoterms & Trade", section: "Regulations" },
  { id: "compliance", label: "12. Drivers' Hours", section: "Regulations" },
  { id: "driving-time", label: "13. Shift vs Driving Time", section: "Regulations" },
  { id: "customs", label: "14. Customs & Borders", section: "Regulations" },
  { id: "europe-zones", label: "15. European Zones", section: "Regulations" },
  { id: "environment", label: "16. Environmental", section: "Regulations" },
  { id: "supply-chain", label: "17. Supply Chain", section: "Regulations" },
  
  // SECTION 4: Commercial Skills
  { id: "pricing", label: "18. Pricing & Tolls", section: "Commercial" },
  { id: "commercial", label: "19. Commercial Skills", section: "Commercial" },
  { id: "negotiation", label: "20. Negotiation", section: "Commercial" },
  { id: "clients", label: "21. Finding Clients", section: "Commercial" },
  { id: "carrier-management", label: "22. Carrier Management", section: "Commercial" },
  { id: "exchanges", label: "23. Freight Exchanges", section: "Commercial" },
  { id: "communication", label: "24. Communication", section: "Commercial" },
  { id: "kpi", label: "25. KPIs & Performance", section: "Commercial" },
  
  // SECTION 5: Systems & Technology
  { id: "translogica", label: "26. Translogica TMS", section: "Technology" },
  { id: "fleet", label: "27. Fleet & GPS", section: "Technology" },
  { id: "technology", label: "28. Technology & Digital", section: "Technology" },
  
  // SECTION 6: Risk & Finance
  { id: "risk-management", label: "29. Risk Management", section: "Finance" },
  { id: "insurance", label: "30. Transport Insurance", section: "Finance" },
  { id: "claims", label: "31. Claims & Disputes", section: "Finance" },
  { id: "payment", label: "32. Payment & Invoicing", section: "Finance" },
  { id: "accounting", label: "33. Accounting & Finance", section: "Finance" },
  
  // SECTION 7: Practical Application
  { id: "emergency", label: "34. Emergency Procedures", section: "Practical" },
  { id: "case-studies", label: "35. Case Studies", section: "Practical" },
  { id: "training", label: "36. Training Exercises", section: "Practical" },
  { id: "red-flags", label: "37. Red Flags & Tips", section: "Practical" },
  { id: "glossary", label: "38. Glossary", section: "Practical" },
  { id: "checklists", label: "39. Checklists", section: "Practical" },
];

interface ProgressDashboardProps {
  onNavigate: (chapterId: string) => void;
  onClose: () => void;
}

export function ProgressDashboard({ onNavigate, onClose }: ProgressDashboardProps) {
  const { progress, getOverallProgress, getChapterProgress, resetProgress } = useProgressContext();
  
  const overallProgress = getOverallProgress();
  
  // Calculate quiz statistics
  const quizStats = chapters.reduce((acc, chapter) => {
    const chapterProgress = getChapterProgress(chapter.id);
    if (chapterProgress?.quizScore !== undefined && chapterProgress?.quizTotal !== undefined) {
      acc.totalQuizzes++;
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
  }, { totalQuizzes: 0, totalScore: 0, totalQuestions: 0, passedQuizzes: 0, completedChapters: 0 });

  const averageScore = quizStats.totalQuestions > 0 
    ? Math.round((quizStats.totalScore / quizStats.totalQuestions) * 100) 
    : 0;
  
  const passRate = quizStats.totalQuizzes > 0 
    ? Math.round((quizStats.passedQuizzes / quizStats.totalQuizzes) * 100) 
    : 0;

  // Certificate eligibility: all chapters completed AND all quizzes passed with 70%+
  const isCertificateEligible = 
    quizStats.completedChapters === chapters.length && 
    quizStats.totalQuizzes > 0 &&
    quizStats.passedQuizzes === quizStats.totalQuizzes;

  // Get recent activity
  const recentActivity = chapters
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
    return date.toLocaleDateString('ro-RO', { 
      day: 'numeric', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground flex items-center gap-4 font-display">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-rossik-dark flex items-center justify-center shadow-lg">
              <BarChart3 className="w-7 h-7 text-primary-foreground" />
            </div>
            Progress Dashboard
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">Track your learning journey</p>
        </div>
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onClose}
          className="rounded-xl gap-2 hover:bg-muted/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Manual
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Overall Progress</p>
                <p className="text-4xl font-bold text-primary mt-1">{overallProgress}%</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
            </div>
            <Progress value={overallProgress} className="mt-4 h-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success/10 via-success/5 to-transparent border-success/20 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Chapters Completed</p>
                <p className="text-4xl font-bold text-success mt-1">{quizStats.completedChapters}</p>
                <p className="text-xs text-muted-foreground mt-1">of {chapters.length} total</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/10 via-warning/5 to-transparent border-warning/20 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Quizzes Taken</p>
                <p className="text-4xl font-bold text-warning mt-1">{quizStats.totalQuizzes}</p>
                <p className="text-xs text-muted-foreground mt-1">{quizStats.passedQuizzes} passed</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-warning/10 flex items-center justify-center">
                <Trophy className="w-7 h-7 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-info/10 via-info/5 to-transparent border-info/20 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Average Score</p>
                <p className="text-4xl font-bold text-info mt-1">{averageScore}%</p>
                <p className="text-xs text-muted-foreground mt-1">{passRate}% pass rate</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-info/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-info" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="shadow-sm border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivity.length > 0 ? (
              <div className="space-y-3">
                {recentActivity.map(item => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-200 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      {item.progress?.completed ? (
                        <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-success" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-sm group-hover:text-primary transition-colors">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {formatDate(item.progress?.lastVisited)}
                        </p>
                      </div>
                    </div>
                    {item.progress?.quizScore !== undefined && (
                      <span className={cn(
                        "text-xs px-3 py-1.5 rounded-full font-semibold",
                        item.progress.quizScore >= (item.progress.quizTotal! * 0.7)
                          ? "bg-success/15 text-success"
                          : "bg-warning/15 text-warning"
                      )}>
                        {item.progress.quizScore}/{item.progress.quizTotal}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Sparkles className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">
                  No activity yet. Start reading chapters to track your progress!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quiz Performance */}
        <Card className="shadow-sm border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              Quiz Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {/* Performance Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-success/10 rounded-2xl text-center border border-success/20">
                  <Percent className="w-7 h-7 mx-auto text-success mb-2" />
                  <p className="text-3xl font-bold text-success">{passRate}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Pass Rate</p>
                </div>
                <div className="p-5 bg-primary/10 rounded-2xl text-center border border-primary/20">
                  <Target className="w-7 h-7 mx-auto text-primary mb-2" />
                  <p className="text-3xl font-bold text-primary">
                    {quizStats.totalScore}/{quizStats.totalQuestions}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Total Score</p>
                </div>
              </div>

              {/* Pass/Fail Breakdown */}
              {quizStats.totalQuizzes > 0 && (
                <div className="space-y-3 p-4 bg-muted/30 rounded-xl">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <span className="font-medium">Passed</span>
                    </span>
                    <span className="font-bold text-success">{quizStats.passedQuizzes}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <XCircle className="w-4 h-4 text-destructive" />
                      </div>
                      <span className="font-medium">Need Improvement</span>
                    </span>
                    <span className="font-bold text-destructive">
                      {quizStats.totalQuizzes - quizStats.passedQuizzes}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Chapters Progress */}
      <Card className="shadow-sm border-border/50">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            All Chapters Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {chapters.map(chapter => {
              const chapterProgress = getChapterProgress(chapter.id);
              const isCompleted = chapterProgress?.completed;
              const hasQuiz = chapterProgress?.quizScore !== undefined;
              const quizPassed = hasQuiz && chapterProgress.quizScore! >= (chapterProgress.quizTotal! * 0.7);
              
              return (
                <button
                  key={chapter.id}
                  onClick={() => onNavigate(chapter.id)}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all duration-200 hover:shadow-md group",
                    isCompleted 
                      ? "bg-success/5 border-success/20 hover:bg-success/10 hover:border-success/30" 
                      : "bg-card border-border/50 hover:bg-muted/50 hover:border-primary/20"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className={cn(
                        "font-semibold text-sm transition-colors",
                        isCompleted ? "text-success" : "text-foreground group-hover:text-primary"
                      )}>
                        {chapter.label}
                      </p>
                      {chapterProgress?.lastVisited && (
                        <p className="text-xs text-muted-foreground mt-1.5">
                          Last: {formatDate(chapterProgress.lastVisited)}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {hasQuiz && (
                        <span className={cn(
                          "text-xs px-2 py-1 rounded-full font-semibold",
                          quizPassed
                            ? "bg-success/15 text-success"
                            : "bg-warning/15 text-warning"
                        )}>
                          {chapterProgress.quizScore}/{chapterProgress.quizTotal}
                        </span>
                      )}
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Certificate */}
      <Certificate
        isEligible={isCertificateEligible}
        completedChapters={quizStats.completedChapters}
        totalChapters={chapters.length}
        averageScore={averageScore}
        passedQuizzes={quizStats.passedQuizzes}
        totalQuizzes={quizStats.totalQuizzes}
      />

      {/* Reset Progress */}
      {progress.totalCompleted > 0 && (
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-destructive">Reset All Progress</p>
                <p className="text-sm text-muted-foreground mt-1">
                  This will clear all completed chapters and quiz scores.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground rounded-xl"
                onClick={() => {
                  if (confirm('Are you sure you want to reset all progress?')) {
                    resetProgress();
                  }
                }}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Progress
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
