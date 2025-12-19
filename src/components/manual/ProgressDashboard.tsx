import { 
  Trophy, Target, Clock, CheckCircle2, XCircle, TrendingUp, 
  Award, BarChart3, Percent, BookOpen, RotateCcw, ArrowLeft
} from "lucide-react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Certificate } from "./Certificate";

const chapters = [
  // SECTION 1: Foundation
  { id: "intro", label: "1. Introducere", section: "Fundament" },
  { id: "mindset", label: "2. Rol & Mentalitate", section: "Fundament" },
  { id: "soft-skills", label: "3. Soft Skills", section: "Fundament" },
  { id: "workflow", label: "4. Flux Operațional", section: "Fundament" },
  
  // SECTION 2: Equipment & Handling
  { id: "vehicle", label: "5. Referință Vehicule", section: "Echipamente" },
  { id: "loading", label: "6. Încărcare & Fixare", section: "Echipamente" },
  { id: "reefer", label: "7. Transport Frigorific", section: "Echipamente" },
  { id: "warehouse", label: "8. Depozit & Cross-Dock", section: "Echipamente" },
  { id: "adr", label: "9. ADR Mărfuri Periculoase", section: "Echipamente" },
  { id: "documents", label: "10. Documente Transport", section: "Echipamente" },
  
  // SECTION 3: Trade & Regulations
  { id: "incoterms", label: "11. Incoterms & Comerț", section: "Reglementări" },
  { id: "compliance", label: "12. Ore de Condus", section: "Reglementări" },
  { id: "driving-time", label: "13. Schimb vs Condus", section: "Reglementări" },
  { id: "customs", label: "14. Vamă & Frontiere", section: "Reglementări" },
  { id: "europe-zones", label: "15. Zone Europene", section: "Reglementări" },
  { id: "environment", label: "16. Mediu", section: "Reglementări" },
  { id: "supply-chain", label: "17. Lanț Aprovizionare", section: "Reglementări" },
  
  // SECTION 4: Commercial Skills
  { id: "pricing", label: "18. Prețuri & Taxe", section: "Comercial" },
  { id: "commercial", label: "19. Abilități Comerciale", section: "Comercial" },
  { id: "negotiation", label: "20. Negociere", section: "Comercial" },
  { id: "clients", label: "21. Găsirea Clienților", section: "Comercial" },
  { id: "carrier-management", label: "22. Gestiune Transportatori", section: "Comercial" },
  { id: "exchanges", label: "23. Burse de Marfă", section: "Comercial" },
  { id: "communication", label: "24. Comunicare", section: "Comercial" },
  { id: "kpi", label: "25. KPI & Performanță", section: "Comercial" },
  
  // SECTION 5: Systems & Technology
  { id: "translogica", label: "26. Translogica TMS", section: "Tehnologie" },
  { id: "fleet", label: "27. Flotă & GPS", section: "Tehnologie" },
  { id: "technology", label: "28. Tehnologie & Digital", section: "Tehnologie" },
  
  // SECTION 6: Risk & Finance
  { id: "risk-management", label: "29. Managementul Riscului", section: "Finanțe" },
  { id: "insurance", label: "30. Asigurări Transport", section: "Finanțe" },
  { id: "claims", label: "31. Daune & Dispute", section: "Finanțe" },
  { id: "payment", label: "32. Plăți & Facturare", section: "Finanțe" },
  { id: "accounting", label: "33. Contabilitate", section: "Finanțe" },
  
  // SECTION 7: Practical Application
  { id: "emergency", label: "34. Proceduri Urgență", section: "Practică" },
  { id: "case-studies", label: "35. Studii de Caz", section: "Practică" },
  { id: "training", label: "36. Exerciții Training", section: "Practică" },
  { id: "red-flags", label: "37. Red Flags & Sfaturi", section: "Practică" },
  { id: "glossary", label: "38. Glosar", section: "Practică" },
  { id: "checklists", label: "39. Checklists", section: "Practică" },
  { id: "licenses-oversize", label: "40. Licențe & Agabaritic", section: "Practică" },
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
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            Dashboard Progres
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">Urmărește progresul tău de învățare</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onClose}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi
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
            <p className="text-xs text-muted-foreground">Progres General</p>
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
            <p className="text-xs text-muted-foreground">Capitole Completate</p>
            <p className="text-[10px] text-muted-foreground/70 mt-1">din {chapters.length} total</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-warning/10 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-warning" />
              </div>
              <span className="text-2xl font-bold text-warning">{quizStats.totalQuizzes}</span>
            </div>
            <p className="text-xs text-muted-foreground">Teste Completate</p>
            <p className="text-[10px] text-muted-foreground/70 mt-1">{quizStats.passedQuizzes} promovate</p>
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
            <p className="text-xs text-muted-foreground">Scor Mediu</p>
            <p className="text-[10px] text-muted-foreground/70 mt-1">{passRate}% rată promovare</p>
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
              Activitate Recentă
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
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{item.label}</p>
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
                  Nicio activitate încă. Începe să citești capitolele!
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
              Performanță Teste
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Performance Summary */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-success/5 rounded-lg text-center border border-success/10">
                  <Percent className="w-5 h-5 mx-auto text-success mb-1" />
                  <p className="text-xl font-bold text-success">{passRate}%</p>
                  <p className="text-xs text-muted-foreground">Rată Promovare</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg text-center border border-primary/10">
                  <Target className="w-5 h-5 mx-auto text-primary mb-1" />
                  <p className="text-xl font-bold text-primary">
                    {quizStats.totalScore}/{quizStats.totalQuestions}
                  </p>
                  <p className="text-xs text-muted-foreground">Scor Total</p>
                </div>
              </div>

              {/* Pass/Fail Breakdown */}
              {quizStats.totalQuizzes > 0 && (
                <div className="space-y-2 p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                      <span>Promovate</span>
                    </span>
                    <span className="font-semibold text-success">{quizStats.passedQuizzes}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <XCircle className="w-3.5 h-3.5 text-destructive" />
                      <span>De Îmbunătățit</span>
                    </span>
                    <span className="font-semibold text-destructive">
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
      <Card className="border-border">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <BookOpen className="w-4 h-4 text-primary" />
            Toate Capitolele
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                        {chapter.label}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{chapter.section}</p>
                    </div>
                    <div className="flex items-center gap-1.5 ml-2">
                      {hasQuiz && (
                        <span className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded font-medium",
                          quizPassed ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                        )}>
                          {chapterProgress.quizScore}/{chapterProgress.quizTotal}
                        </span>
                      )}
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
                <h3 className="font-semibold text-success">Felicitări!</h3>
                <p className="text-sm text-muted-foreground">Ai completat toate capitolele și testele</p>
              </div>
            </div>
            <Certificate 
              completedChapters={quizStats.completedChapters}
              totalChapters={chapters.length}
              averageScore={averageScore}
            />
          </CardContent>
        </Card>
      )}

      {/* Reset Progress */}
      <div className="flex justify-center">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => {
            if (confirm('Ești sigur că vrei să resetezi tot progresul?')) {
              resetProgress();
            }
          }}
          className="text-muted-foreground hover:text-destructive gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Resetează Progresul
        </Button>
      </div>
    </div>
  );
}