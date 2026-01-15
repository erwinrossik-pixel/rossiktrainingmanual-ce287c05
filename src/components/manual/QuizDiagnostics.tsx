import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, HelpCircle, Download, BarChart3, ArrowUpDown, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getQuizStats, getChaptersNeedingQuestions, getAllQuestionCounts } from "@/data/quizTranslations";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";
import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from "recharts";

export function QuizDiagnostics() {
  const { language } = useLanguage();
  const stats = getQuizStats();
  const chaptersNeedingMore = getChaptersNeedingQuestions(30);
  const allCounts = getAllQuestionCounts();

  const exportToCSV = () => {
    const headers = ['Chapter ID', 'Question Count', 'Status', 'Needed'];
    const rows = Object.entries(allCounts)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([chapterId, count]) => {
        const needed = count < 30 ? 30 - count : 0;
        const status = count >= 30 ? 'OK' : 'Needs More';
        return [chapterId, count, status, needed];
      });

    // Add summary row
    rows.push([]);
    rows.push(['--- SUMMARY ---', '', '', '']);
    rows.push(['Total Chapters', stats.totalChapters, '', '']);
    rows.push(['Total Questions', stats.totalQuestions, '', '']);
    rows.push(['Average/Chapter', stats.averageQuestionsPerChapter, '', '']);
    rows.push(['Chapters ≥30', stats.chaptersAt30Plus, '', '']);
    rows.push(['Chapters <30', stats.chaptersBelow30, '', '']);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `quiz-diagnostics-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);

    toast({
      title: language === 'ro' ? 'CSV exportat!' : language === 'de' ? 'CSV exportiert!' : 'CSV exported!',
      description: language === 'ro' ? 'Fișierul a fost descărcat.' : language === 'de' ? 'Datei wurde heruntergeladen.' : 'File has been downloaded.',
    });
  };

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
      filterAll: "Toate",
      filterOk: "OK (≥30)",
      filterNeedsWork: "Necesită (<30)",
      sortAlpha: "Alfabetic",
      sortCount: "După întrebări",
      sortStatus: "După status",
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
      filterAll: "Alle",
      filterOk: "OK (≥30)",
      filterNeedsWork: "Benötigt (<30)",
      sortAlpha: "Alphabetisch",
      sortCount: "Nach Fragen",
      sortStatus: "Nach Status",
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
      filterAll: "All",
      filterOk: "OK (≥30)",
      filterNeedsWork: "Needs work (<30)",
      sortAlpha: "Alphabetic",
      sortCount: "By questions",
      sortStatus: "By status",
    },
  };

  const text = t[language];

  const [showChart, setShowChart] = useState(false);
  const [filter, setFilter] = useState<'all' | 'ok' | 'needsWork'>('all');
  const [sortBy, setSortBy] = useState<'alpha' | 'count' | 'status'>('alpha');

  // Filter and sort chapters
  const filteredAndSortedChapters = useMemo(() => {
    let entries = Object.entries(allCounts);

    // Apply filter
    if (filter === 'ok') {
      entries = entries.filter(([, count]) => count >= 30);
    } else if (filter === 'needsWork') {
      entries = entries.filter(([, count]) => count < 30);
    }

    // Apply sort
    switch (sortBy) {
      case 'alpha':
        entries.sort((a, b) => a[0].localeCompare(b[0]));
        break;
      case 'count':
        entries.sort((a, b) => b[1] - a[1]); // Descending
        break;
      case 'status':
        entries.sort((a, b) => {
          const aOk = a[1] >= 30 ? 1 : 0;
          const bOk = b[1] >= 30 ? 1 : 0;
          if (aOk !== bOk) return aOk - bOk; // Needs work first
          return a[0].localeCompare(b[0]); // Then alphabetic
        });
        break;
    }

    return entries;
  }, [allCounts, filter, sortBy]);

  // Prepare chart data
  const chartData = Object.entries(allCounts)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([chapterId, count]) => ({
      name: chapterId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).substring(0, 15),
      fullName: chapterId,
      questions: count,
    }));

  const getBarColor = (count: number) => {
    if (count >= 45) return 'hsl(142, 76%, 36%)'; // green-600
    if (count >= 30) return 'hsl(142, 71%, 45%)'; // green-500
    if (count >= 20) return 'hsl(45, 93%, 47%)'; // amber-500
    return 'hsl(0, 84%, 60%)'; // red-500
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover border border-border rounded-lg p-2 shadow-lg">
          <p className="font-medium text-sm">{data.fullName}</p>
          <p className="text-xs text-muted-foreground">
            {language === 'ro' ? 'Întrebări' : language === 'de' ? 'Fragen' : 'Questions'}: <span className="font-bold">{data.questions}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            {text.title}
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant={showChart ? "default" : "outline"} 
              size="sm" 
              onClick={() => setShowChart(!showChart)} 
              className="gap-1"
            >
              <BarChart3 className="w-4 h-4" />
              {language === 'ro' ? 'Grafic' : language === 'de' ? 'Diagramm' : 'Chart'}
            </Button>
            <Button variant="outline" size="sm" onClick={exportToCSV} className="gap-1">
              <Download className="w-4 h-4" />
              CSV
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Distribution Chart */}
        {showChart && (
          <div className="w-full h-64 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 60 }}>
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  interval={0}
                  tick={{ fontSize: 8, fill: 'hsl(var(--muted-foreground))' }}
                  height={70}
                />
                <YAxis 
                  tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                  domain={[0, 'auto']}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine y={30} stroke="hsl(var(--primary))" strokeDasharray="3 3" label={{ value: '30', position: 'left', fontSize: 10 }} />
                <Bar dataKey="questions" radius={[2, 2, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getBarColor(entry.questions)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 text-xs mt-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(0, 84%, 60%)' }} />
                <span>&lt;20</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(45, 93%, 47%)' }} />
                <span>20-29</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(142, 71%, 45%)' }} />
                <span>30-44</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(142, 76%, 36%)' }} />
                <span>≥45</span>
              </div>
            </div>
          </div>
        )}
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
            {filter !== 'all' && (
              <Badge variant="secondary" className="ml-2 text-xs">
                {filteredAndSortedChapters.length}/{Object.keys(allCounts).length}
              </Badge>
            )}
          </summary>
          
          {/* Filter and Sort Controls */}
          <div className="flex flex-wrap gap-2 mt-3 mb-2">
            <div className="flex items-center gap-1">
              <Filter className="w-3 h-3 text-muted-foreground" />
              <Select value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
                <SelectTrigger className="h-7 text-xs w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{text.filterAll}</SelectItem>
                  <SelectItem value="ok">{text.filterOk}</SelectItem>
                  <SelectItem value="needsWork">{text.filterNeedsWork}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-1">
              <ArrowUpDown className="w-3 h-3 text-muted-foreground" />
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
                <SelectTrigger className="h-7 text-xs w-[130px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alpha">{text.sortAlpha}</SelectItem>
                  <SelectItem value="count">{text.sortCount}</SelectItem>
                  <SelectItem value="status">{text.sortStatus}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
            {filteredAndSortedChapters.map(([chapterId, count]) => (
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
            {filteredAndSortedChapters.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground py-2">
                {language === 'ro' ? 'Niciun rezultat' : language === 'de' ? 'Keine Ergebnisse' : 'No results'}
              </div>
            )}
          </div>
        </details>
      </CardContent>
    </Card>
  );
}
