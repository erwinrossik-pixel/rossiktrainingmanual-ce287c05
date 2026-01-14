import { 
  Trophy, Target, Clock, CheckCircle2, XCircle, TrendingUp, 
  Award, BarChart3, Percent, BookOpen, RotateCcw, ArrowLeft, HelpCircle, Download
} from "lucide-react";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Certificate } from "./Certificate";
import { QuizDiagnostics } from "./QuizDiagnostics";
import { DailyTracker } from "./DailyTracker";
import { TimeDistributionChart } from "./TimeDistributionChart";
import { getQuestionCount, getTotalQuestionCount } from "@/data/quizTranslations";
import { jsPDF } from "jspdf";
import { toast } from "sonner";

const chapters = [
  { id: "intro", labelKey: "chapter.intro", section: "section.foundation" },
  { id: "mindset", labelKey: "chapter.mindset", section: "section.foundation" },
  { id: "soft-skills", labelKey: "chapter.soft-skills", section: "section.foundation" },
  { id: "workflow", labelKey: "chapter.workflow", section: "section.foundation" },
  { id: "vehicle", labelKey: "chapter.vehicle", section: "section.equipment" },
  { id: "loading", labelKey: "chapter.loading", section: "section.equipment" },
  { id: "reefer", labelKey: "chapter.reefer", section: "section.equipment" },
  { id: "warehouse", labelKey: "chapter.warehouse", section: "section.equipment" },
  { id: "adr", labelKey: "chapter.adr", section: "section.equipment" },
  { id: "documents", labelKey: "chapter.documents", section: "section.equipment" },
  { id: "incoterms", labelKey: "chapter.incoterms", section: "section.trade" },
  { id: "compliance", labelKey: "chapter.compliance", section: "section.trade" },
  { id: "driving-time", labelKey: "chapter.driving-time", section: "section.trade" },
  { id: "customs", labelKey: "chapter.customs", section: "section.trade" },
  { id: "europe-zones", labelKey: "chapter.europe-zones", section: "section.trade" },
  { id: "environment", labelKey: "chapter.environment", section: "section.trade" },
  { id: "supply-chain", labelKey: "chapter.supply-chain", section: "section.trade" },
  { id: "pricing", labelKey: "chapter.pricing", section: "section.commercial" },
  { id: "commercial", labelKey: "chapter.commercial", section: "section.commercial" },
  { id: "negotiation", labelKey: "chapter.negotiation", section: "section.commercial" },
  { id: "clients", labelKey: "chapter.clients", section: "section.commercial" },
  { id: "carrier-management", labelKey: "chapter.carrier-management", section: "section.commercial" },
  { id: "exchanges", labelKey: "chapter.exchanges", section: "section.commercial" },
  { id: "communication", labelKey: "chapter.communication", section: "section.commercial" },
  { id: "kpi", labelKey: "chapter.kpi", section: "section.commercial" },
  { id: "translogica", labelKey: "chapter.translogica", section: "section.technology" },
  { id: "fleet", labelKey: "chapter.fleet", section: "section.technology" },
  { id: "technology", labelKey: "chapter.technology", section: "section.technology" },
  { id: "risk-management", labelKey: "chapter.risk-management", section: "section.finance" },
  { id: "insurance", labelKey: "chapter.insurance", section: "section.finance" },
  { id: "claims", labelKey: "chapter.claims", section: "section.finance" },
  { id: "payment", labelKey: "chapter.payment", section: "section.finance" },
  { id: "accounting", labelKey: "chapter.accounting", section: "section.finance" },
  { id: "emergency", labelKey: "chapter.emergency", section: "section.practical" },
  { id: "case-studies", labelKey: "chapter.case-studies", section: "section.practical" },
  { id: "training", labelKey: "chapter.training", section: "section.practical" },
  { id: "red-flags", labelKey: "chapter.red-flags", section: "section.practical" },
  { id: "glossary", labelKey: "chapter.glossary", section: "section.practical" },
  { id: "checklists", labelKey: "chapter.checklists", section: "section.practical" },
  { id: "licenses-oversize", labelKey: "chapter.licenses-oversize", section: "section.practical" },
];

interface ProgressDashboardProps {
  onNavigate: (chapterId: string) => void;
  onClose: () => void;
}

export function ProgressDashboard({ onNavigate, onClose }: ProgressDashboardProps) {
  const { progress, getOverallProgress, getChapterProgress, resetProgress } = useProgressContext();
  const { t, language } = useLanguage();
  
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

  const isCertificateEligible = 
    quizStats.completedChapters === chapters.length && 
    quizStats.totalQuizzes > 0 &&
    quizStats.passedQuizzes === quizStats.totalQuizzes;

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
    const locale = language === 'de' ? 'de-DE' : language === 'en' ? 'en-GB' : 'ro-RO';
    return date.toLocaleDateString(locale, { 
      day: 'numeric', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    const titles = {
      ro: {
        title: "Raport Progres Training",
        subtitle: "Manual Freight Forwarding - Rossik",
        generatedOn: "Generat la",
        summary: "Sumar General",
        overallProgress: "Progres General",
        completedChapters: "Capitole Completate",
        quizzesTaken: "Quiz-uri Susținute",
        averageScore: "Scor Mediu",
        passRate: "Rata de Promovare",
        chapterDetails: "Detalii Capitole",
        chapter: "Capitol",
        status: "Status",
        score: "Scor",
        completed: "Completat",
        inProgress: "În Progres",
        notStarted: "Neînceput",
      },
      de: {
        title: "Training-Fortschrittsbericht",
        subtitle: "Handbuch Spedition - Rossik",
        generatedOn: "Erstellt am",
        summary: "Allgemeine Zusammenfassung",
        overallProgress: "Gesamtfortschritt",
        completedChapters: "Abgeschlossene Kapitel",
        quizzesTaken: "Absolvierte Quiz",
        averageScore: "Durchschnittsnote",
        passRate: "Bestehensquote",
        chapterDetails: "Kapiteldetails",
        chapter: "Kapitel",
        status: "Status",
        score: "Punktzahl",
        completed: "Abgeschlossen",
        inProgress: "In Bearbeitung",
        notStarted: "Nicht begonnen",
      },
      en: {
        title: "Training Progress Report",
        subtitle: "Freight Forwarding Manual - Rossik",
        generatedOn: "Generated on",
        summary: "General Summary",
        overallProgress: "Overall Progress",
        completedChapters: "Completed Chapters",
        quizzesTaken: "Quizzes Taken",
        averageScore: "Average Score",
        passRate: "Pass Rate",
        chapterDetails: "Chapter Details",
        chapter: "Chapter",
        status: "Status",
        score: "Score",
        completed: "Completed",
        inProgress: "In Progress",
        notStarted: "Not Started",
      }
    };
    
    const txt = titles[language];
    const now = new Date();
    const dateStr = now.toLocaleDateString(language === 'de' ? 'de-DE' : language === 'en' ? 'en-GB' : 'ro-RO', {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    // Header
    doc.setFillColor(220, 38, 38);
    doc.rect(0, 0, pageWidth, 35, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(txt.title, pageWidth / 2, 18, { align: "center" });
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(txt.subtitle, pageWidth / 2, 28, { align: "center" });

    // Date
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(9);
    doc.text(`${txt.generatedOn}: ${dateStr}`, pageWidth / 2, 45, { align: "center" });

    // Summary Section
    let yPos = 60;
    doc.setTextColor(30, 30, 30);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(txt.summary, 20, yPos);
    
    yPos += 12;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    
    const summaryData = [
      [txt.overallProgress, `${overallProgress}%`],
      [txt.completedChapters, `${quizStats.completedChapters} / ${chapters.length}`],
      [txt.quizzesTaken, `${quizStats.totalQuizzes}`],
      [txt.averageScore, `${averageScore}%`],
      [txt.passRate, `${passRate}%`],
    ];

    summaryData.forEach(([label, value]) => {
      doc.setFont("helvetica", "normal");
      doc.text(label, 25, yPos);
      doc.setFont("helvetica", "bold");
      doc.text(value, 120, yPos);
      yPos += 8;
    });

    // Chapter Details
    yPos += 10;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(txt.chapterDetails, 20, yPos);
    
    yPos += 10;
    
    // Table header
    doc.setFillColor(240, 240, 240);
    doc.rect(20, yPos - 5, pageWidth - 40, 8, 'F');
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(txt.chapter, 25, yPos);
    doc.text(txt.status, 120, yPos);
    doc.text(txt.score, 165, yPos);
    
    yPos += 10;
    doc.setFont("helvetica", "normal");
    
    chapters.forEach((chapter, index) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      
      const chapterProgress = getChapterProgress(chapter.id);
      const status = chapterProgress?.completed 
        ? txt.completed 
        : chapterProgress?.lastVisited 
          ? txt.inProgress 
          : txt.notStarted;
      
      const score = chapterProgress?.quizScore !== undefined 
        ? `${chapterProgress.quizScore}/${chapterProgress.quizTotal}` 
        : "-";
      
      // Alternate row colors
      if (index % 2 === 0) {
        doc.setFillColor(250, 250, 250);
        doc.rect(20, yPos - 4, pageWidth - 40, 7, 'F');
      }
      
      doc.setFontSize(8);
      doc.text(`${index + 1}. ${t(chapter.labelKey)}`, 25, yPos);
      
      // Status with color
      if (chapterProgress?.completed) {
        doc.setTextColor(34, 197, 94);
      } else if (chapterProgress?.lastVisited) {
        doc.setTextColor(234, 179, 8);
      } else {
        doc.setTextColor(156, 163, 175);
      }
      doc.text(status, 120, yPos);
      
      doc.setTextColor(30, 30, 30);
      doc.text(score, 165, yPos);
      
      yPos += 7;
    });

    // Footer
    const totalPages = doc.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(
        `Rossik Training Manual - Page ${i} of ${totalPages}`,
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: "center" }
      );
    }

    doc.save(`progress-report-${now.toISOString().split('T')[0]}.pdf`);
    
    toast.success(
      language === 'ro' ? 'Raport PDF descărcat!' : 
      language === 'de' ? 'PDF-Bericht heruntergeladen!' : 
      'PDF report downloaded!'
    );
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
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={exportPDF}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            {language === 'ro' ? 'Export PDF' : language === 'de' ? 'PDF Export' : 'Export PDF'}
          </Button>
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
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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
            <p className="text-[10px] text-muted-foreground/70 mt-1">{t('dashboard.total')} {chapters.length}</p>
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

        <Card className="border-border">
          <CardContent className="pt-5 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold text-accent-foreground">{getTotalQuestionCount()}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {language === 'ro' ? 'Total Întrebări' : language === 'de' ? 'Gesamt Fragen' : 'Total Questions'}
            </p>
            <p className="text-[10px] text-muted-foreground/70 mt-1">
              {language === 'ro' ? 'În baza de date' : language === 'de' ? 'In der Datenbank' : 'In question bank'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Tracker and Time Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <DailyTracker />
        <TimeDistributionChart />
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

              {quizStats.totalQuizzes > 0 && (
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
            {t('dashboard.allChapters')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {chapters.map(chapter => {
              const chapterProgress = getChapterProgress(chapter.id);
              const isCompleted = chapterProgress?.completed;
              const hasQuiz = chapterProgress?.quizScore !== undefined;
              const quizPassed = hasQuiz && chapterProgress.quizScore! >= (chapterProgress.quizTotal! * 0.7);
              const questionCount = getQuestionCount(chapter.id);
              
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
                        {t(chapter.labelKey)}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-[10px] text-muted-foreground">{t(chapter.section)}</p>
                        <span className="text-[10px] text-muted-foreground/70 flex items-center gap-0.5">
                          <HelpCircle className="w-2.5 h-2.5" />
                          {questionCount} {language === 'ro' ? 'întrebări' : language === 'de' ? 'Fragen' : 'questions'}
                        </span>
                      </div>
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
                <h3 className="font-semibold text-success">{t('dashboard.congratulations')}</h3>
                <p className="text-sm text-muted-foreground">{t('dashboard.completedAll')}</p>
              </div>
            </div>
            <Certificate 
              isEligible={isCertificateEligible}
              completedChapters={quizStats.completedChapters}
              totalChapters={chapters.length}
              averageScore={averageScore}
              passedQuizzes={quizStats.passedQuizzes}
              totalQuizzes={quizStats.totalQuizzes}
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
            if (confirm(t('dashboard.resetConfirm'))) {
              resetProgress();
            }
          }}
          className="text-muted-foreground hover:text-destructive gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t('dashboard.reset')}
        </Button>
      </div>

      {/* Quiz Diagnostics - for admin/development */}
      <QuizDiagnostics />
    </div>
  );
}
