import { 
  Trophy, Target, Clock, CheckCircle2, XCircle, TrendingUp, 
  Award, BarChart3, Percent, BookOpen, RotateCcw
} from "lucide-react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary" />
            Progress Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Track your learning journey</p>
        </div>
        <Button variant="outline" size="sm" onClick={onClose}>
          Back to Manual
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="text-3xl font-bold text-primary">{overallProgress}%</p>
              </div>
              <Target className="w-10 h-10 text-primary/50" />
            </div>
            <Progress value={overallProgress} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Chapters Completed</p>
                <p className="text-3xl font-bold text-success">{quizStats.completedChapters}</p>
                <p className="text-xs text-muted-foreground">of {chapters.length} total</p>
              </div>
              <CheckCircle2 className="w-10 h-10 text-success/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Quizzes Taken</p>
                <p className="text-3xl font-bold text-warning">{quizStats.totalQuizzes}</p>
                <p className="text-xs text-muted-foreground">{quizStats.passedQuizzes} passed</p>
              </div>
              <Trophy className="w-10 h-10 text-warning/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="text-3xl font-bold text-info">{averageScore}%</p>
                <p className="text-xs text-muted-foreground">{passRate}% pass rate</p>
              </div>
              <TrendingUp className="w-10 h-10 text-info/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
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
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      {item.progress?.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <BookOpen className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{item.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(item.progress?.lastVisited)}
                        </p>
                      </div>
                    </div>
                    {item.progress?.quizScore !== undefined && (
                      <span className={cn(
                        "text-xs px-2 py-1 rounded-full font-medium",
                        item.progress.quizScore >= (item.progress.quizTotal! * 0.7)
                          ? "bg-success/20 text-success"
                          : "bg-warning/20 text-warning"
                      )}>
                        {item.progress.quizScore}/{item.progress.quizTotal}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No activity yet. Start reading chapters to track your progress!
              </p>
            )}
          </CardContent>
        </Card>

        {/* Quiz Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Quiz Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Performance Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-success/10 rounded-lg text-center">
                  <Percent className="w-6 h-6 mx-auto text-success mb-2" />
                  <p className="text-2xl font-bold text-success">{passRate}%</p>
                  <p className="text-xs text-muted-foreground">Pass Rate</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <Target className="w-6 h-6 mx-auto text-primary mb-2" />
                  <p className="text-2xl font-bold text-primary">
                    {quizStats.totalScore}/{quizStats.totalQuestions}
                  </p>
                  <p className="text-xs text-muted-foreground">Total Score</p>
                </div>
              </div>

              {/* Pass/Fail Breakdown */}
              {quizStats.totalQuizzes > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      Passed
                    </span>
                    <span className="font-medium text-success">{quizStats.passedQuizzes}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive" />
                      Need Improvement
                    </span>
                    <span className="font-medium text-destructive">
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
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
                    "p-3 rounded-lg border text-left transition-all hover:shadow-md",
                    isCompleted 
                      ? "bg-success/5 border-success/30 hover:bg-success/10" 
                      : "bg-card border-border hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className={cn(
                        "font-medium text-sm",
                        isCompleted ? "text-success" : "text-foreground"
                      )}>
                        {chapter.label}
                      </p>
                      {chapterProgress?.lastVisited && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Last: {formatDate(chapterProgress.lastVisited)}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {hasQuiz && (
                        <span className={cn(
                          "text-xs px-2 py-0.5 rounded-full font-medium",
                          quizPassed
                            ? "bg-success/20 text-success"
                            : "bg-warning/20 text-warning"
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

      {/* Reset Progress */}
      {progress.totalCompleted > 0 && (
        <Card className="border-destructive/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-destructive">Reset All Progress</p>
                <p className="text-sm text-muted-foreground">
                  This will clear all completed chapters and quiz scores.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => {
                  if (confirm('Are you sure you want to reset all progress?')) {
                    resetProgress();
                  }
                }}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
