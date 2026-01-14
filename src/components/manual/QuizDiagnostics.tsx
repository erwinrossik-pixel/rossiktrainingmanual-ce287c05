import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";
import { getQuizStats, getChaptersNeedingQuestions, getAllQuestionCounts } from "@/data/quizTranslations";
import { useLanguage } from "@/contexts/LanguageContext";

export function QuizDiagnostics() {
  const { language } = useLanguage();
  const stats = getQuizStats();
  const chaptersNeedingMore = getChaptersNeedingQuestions(30);
  const allCounts = getAllQuestionCounts();

  const t = {
    ro: {
      title: "Diagnosticare Quiz-uri",
      totalChapters: "Total Capitole",
      totalQuestions: "Total Întrebări",
      average: "Media/Capitol",
      chaptersOk: "Capitole ≥30",
      chaptersNeedWork: "Capitole <30",
      needsMoreQuestions: "Necesită întrebări adiționale",
      chapter: "Capitol",
      current: "Actual",
      needed: "Necesar",
      allGood: "Toate capitolele au minim 30 de întrebări!",
    },
    de: {
      title: "Quiz-Diagnose",
      totalChapters: "Gesamt Kapitel",
      totalQuestions: "Gesamt Fragen",
      average: "Durchschnitt/Kapitel",
      chaptersOk: "Kapitel ≥30",
      chaptersNeedWork: "Kapitel <30",
      needsMoreQuestions: "Benötigt zusätzliche Fragen",
      chapter: "Kapitel",
      current: "Aktuell",
      needed: "Benötigt",
      allGood: "Alle Kapitel haben mindestens 30 Fragen!",
    },
    en: {
      title: "Quiz Diagnostics",
      totalChapters: "Total Chapters",
      totalQuestions: "Total Questions",
      average: "Average/Chapter",
      chaptersOk: "Chapters ≥30",
      chaptersNeedWork: "Chapters <30",
      needsMoreQuestions: "Needs additional questions",
      chapter: "Chapter",
      current: "Current",
      needed: "Needed",
      allGood: "All chapters have at least 30 questions!",
    },
  };

  const text = t[language];

  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <HelpCircle className="w-5 h-5" />
          {text.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="text-xl font-bold">{stats.totalChapters}</div>
            <div className="text-xs text-muted-foreground">{text.totalChapters}</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="text-xl font-bold">{stats.totalQuestions}</div>
            <div className="text-xs text-muted-foreground">{text.totalQuestions}</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="text-xl font-bold">{stats.averageQuestionsPerChapter}</div>
            <div className="text-xs text-muted-foreground">{text.average}</div>
          </div>
          <div className="text-center p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <div className="text-xl font-bold text-green-700 dark:text-green-400">{stats.chaptersAt30Plus}</div>
            <div className="text-xs text-green-600 dark:text-green-500">{text.chaptersOk}</div>
          </div>
          <div className="text-center p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
            <div className="text-xl font-bold text-amber-700 dark:text-amber-400">{stats.chaptersBelow30}</div>
            <div className="text-xs text-amber-600 dark:text-amber-500">{text.chaptersNeedWork}</div>
          </div>
        </div>

        {/* Chapters needing more questions */}
        {chaptersNeedingMore.length > 0 ? (
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              {text.needsMoreQuestions}
            </h4>
            <div className="grid gap-2">
              {chaptersNeedingMore.map(({ chapterId, count, needed }) => (
                <div 
                  key={chapterId}
                  className="flex items-center justify-between p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-sm"
                >
                  <span className="font-medium">{chapterId}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {text.current}: {count}
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                      +{needed} {text.needed}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">{text.allGood}</span>
          </div>
        )}

        {/* All chapters breakdown (collapsible) */}
        <details className="mt-4">
          <summary className="text-sm font-medium cursor-pointer text-muted-foreground hover:text-foreground">
            {language === 'ro' ? 'Vezi toate capitolele' : language === 'de' ? 'Alle Kapitel anzeigen' : 'View all chapters'}
          </summary>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
            {Object.entries(allCounts)
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(([chapterId, count]) => (
                <div 
                  key={chapterId}
                  className={`flex items-center justify-between p-1.5 rounded ${
                    count >= 30 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                      : 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
                  }`}
                >
                  <span className="truncate">{chapterId}</span>
                  <span className="font-bold ml-1">{count}</span>
                </div>
              ))}
          </div>
        </details>
      </CardContent>
    </Card>
  );
}
