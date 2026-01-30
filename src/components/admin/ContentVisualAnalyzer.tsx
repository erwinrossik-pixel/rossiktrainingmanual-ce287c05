import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { 
  Eye, RefreshCw, CheckCircle, XCircle, AlertTriangle, Clock, 
  Zap, Settings, Play, Pause, BarChart3, Wrench, History,
  FileText, Palette, Layout, Globe, Image, TrendingUp
} from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import { ro, de, enUS } from 'date-fns/locale';

interface VisualAnalysis {
  id: string;
  chapter_id: string;
  language: string;
  analysis_type: string;
  visual_score: number;
  text_score: number;
  translation_score: number;
  overall_score: number;
  missing_translations: any[];
  broken_graphics: any[];
  text_issues: any[];
  color_issues: any[];
  layout_issues: any[];
  corrections_applied: any[];
  corrections_count: number;
  auto_fixed: boolean;
  status: string;
  error_message: string | null;
  analyzed_at: string | null;
  fixed_at: string | null;
  created_at: string;
}

interface ScheduleJob {
  id: string;
  job_name: string;
  cron_expression: string;
  is_active: boolean;
  last_run_at: string | null;
  next_run_at: string | null;
  chapters_per_run: number;
  languages: string[];
  auto_fix_enabled: boolean;
  total_runs: number;
  successful_runs: number;
  failed_runs: number;
  total_fixes_applied: number;
}

interface FixerLog {
  id: string;
  chapter_id: string;
  fix_type: string;
  original_value: string;
  fixed_value: string;
  fix_reason: string;
  success: boolean;
  applied_at: string;
}

export function ContentVisualAnalyzer() {
  const { t, language } = useLanguage();
  const [analyses, setAnalyses] = useState<VisualAnalysis[]>([]);
  const [schedules, setSchedules] = useState<ScheduleJob[]>([]);
  const [fixerLogs, setFixerLogs] = useState<FixerLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalAnalyzed: 0,
    avgScore: 0,
    totalFixes: 0,
    issuesFound: 0,
    lastRunAt: null as string | null,
  });

  const getLocale = () => {
    switch (language) {
      case 'ro': return ro;
      case 'de': return de;
      default: return enUS;
    }
  };

  const translations = {
    en: {
      title: 'Content Visual Analyzer',
      subtitle: 'Automated AI analysis of chapter content with auto-corrections (96x/day)',
      overview: 'Overview',
      schedules: 'Schedules',
      history: 'History',
      fixes: 'Auto-Fixes',
      totalAnalyzed: 'Chapters Analyzed',
      avgScore: 'Average Score',
      totalFixes: 'Fixes Applied',
      issuesFound: 'Issues Found',
      lastRun: 'Last Run',
      runNow: 'Analyze Now',
      analyzing: 'Analyzing...',
      chapter: 'Chapter',
      score: 'Score',
      status: 'Status',
      issues: 'Issues',
      fixesApplied: 'Fixes',
      analyzed: 'Analyzed',
      pending: 'Pending',
      completed: 'Completed',
      failed: 'Failed',
      autoFixed: 'Auto-Fixed',
      jobName: 'Job Name',
      frequency: 'Frequency',
      active: 'Active',
      lastRunAt: 'Last Run',
      nextRun: 'Next Run',
      chaptersPerRun: 'Chapters/Run',
      autoFix: 'Auto-Fix',
      totalRuns: 'Total Runs',
      successRate: 'Success Rate',
      fixType: 'Fix Type',
      original: 'Original',
      fixed: 'Fixed',
      reason: 'Reason',
      appliedAt: 'Applied',
      every15min: 'Every 15 min',
      hourly: 'Hourly',
      every6h: 'Every 6 hours',
      visualScore: 'Visual',
      textScore: 'Text',
      translationScore: 'Translation',
      overallScore: 'Overall',
      noData: 'No analysis data yet',
      refreshing: 'Refreshing...',
      analysisStarted: 'Analysis started for all chapters',
      analysisComplete: 'Analysis complete',
      toggleSuccess: 'Schedule updated',
    },
    ro: {
      title: 'Analizator Vizual Conținut',
      subtitle: 'Analiză AI automată a conținutului capitolelor cu auto-corecții (96x/zi)',
      overview: 'Sumar',
      schedules: 'Programări',
      history: 'Istoric',
      fixes: 'Auto-Corecții',
      totalAnalyzed: 'Capitole Analizate',
      avgScore: 'Scor Mediu',
      totalFixes: 'Corecții Aplicate',
      issuesFound: 'Probleme Găsite',
      lastRun: 'Ultima Rulare',
      runNow: 'Analizează Acum',
      analyzing: 'Se analizează...',
      chapter: 'Capitol',
      score: 'Scor',
      status: 'Status',
      issues: 'Probleme',
      fixesApplied: 'Corecții',
      analyzed: 'Analizat',
      pending: 'În așteptare',
      completed: 'Finalizat',
      failed: 'Eșuat',
      autoFixed: 'Auto-Corectat',
      jobName: 'Nume Job',
      frequency: 'Frecvență',
      active: 'Activ',
      lastRunAt: 'Ultima Rulare',
      nextRun: 'Următoarea',
      chaptersPerRun: 'Capitole/Rulare',
      autoFix: 'Auto-Fix',
      totalRuns: 'Total Rulări',
      successRate: 'Rata Succes',
      fixType: 'Tip Corecție',
      original: 'Original',
      fixed: 'Corectat',
      reason: 'Motiv',
      appliedAt: 'Aplicat',
      every15min: 'La 15 min',
      hourly: 'Orar',
      every6h: 'La 6 ore',
      visualScore: 'Vizual',
      textScore: 'Text',
      translationScore: 'Traduceri',
      overallScore: 'General',
      noData: 'Nu există date de analiză încă',
      refreshing: 'Se reîmprospătează...',
      analysisStarted: 'Analiza a început pentru toate capitolele',
      analysisComplete: 'Analiză finalizată',
      toggleSuccess: 'Programare actualizată',
    },
    de: {
      title: 'Visueller Inhaltsanalyzer',
      subtitle: 'Automatisierte KI-Analyse von Kapitelinhalten mit Auto-Korrekturen (96x/Tag)',
      overview: 'Übersicht',
      schedules: 'Zeitpläne',
      history: 'Verlauf',
      fixes: 'Auto-Korrekturen',
      totalAnalyzed: 'Analysierte Kapitel',
      avgScore: 'Durchschnittswert',
      totalFixes: 'Angewandte Korrekturen',
      issuesFound: 'Gefundene Probleme',
      lastRun: 'Letzter Lauf',
      runNow: 'Jetzt Analysieren',
      analyzing: 'Analysiere...',
      chapter: 'Kapitel',
      score: 'Bewertung',
      status: 'Status',
      issues: 'Probleme',
      fixesApplied: 'Korrekturen',
      analyzed: 'Analysiert',
      pending: 'Ausstehend',
      completed: 'Abgeschlossen',
      failed: 'Fehlgeschlagen',
      autoFixed: 'Auto-Korrigiert',
      jobName: 'Job-Name',
      frequency: 'Häufigkeit',
      active: 'Aktiv',
      lastRunAt: 'Letzter Lauf',
      nextRun: 'Nächster',
      chaptersPerRun: 'Kapitel/Lauf',
      autoFix: 'Auto-Fix',
      totalRuns: 'Gesamtläufe',
      successRate: 'Erfolgsrate',
      fixType: 'Korrekturtyp',
      original: 'Original',
      fixed: 'Korrigiert',
      reason: 'Grund',
      appliedAt: 'Angewandt',
      every15min: 'Alle 15 Min',
      hourly: 'Stündlich',
      every6h: 'Alle 6 Std',
      visualScore: 'Visuell',
      textScore: 'Text',
      translationScore: 'Übersetzung',
      overallScore: 'Gesamt',
      noData: 'Noch keine Analysedaten',
      refreshing: 'Aktualisiere...',
      analysisStarted: 'Analyse für alle Kapitel gestartet',
      analysisComplete: 'Analyse abgeschlossen',
      toggleSuccess: 'Zeitplan aktualisiert',
    },
  };

  const tr = translations[language as keyof typeof translations] || translations.en;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch analyses
      const { data: analysesData } = await supabase
        .from('content_visual_analysis')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      // Fetch schedules
      const { data: schedulesData } = await supabase
        .from('content_analyzer_schedule')
        .select('*')
        .order('job_name');

      // Fetch fixer logs
      const { data: logsData } = await supabase
        .from('content_auto_fixer_logs')
        .select('*')
        .order('applied_at', { ascending: false })
        .limit(50);

      if (analysesData) {
        setAnalyses(analysesData as VisualAnalysis[]);
        
        // Calculate stats
        const completed = analysesData.filter(a => a.status === 'completed' || a.status === 'auto_fixed');
        const avgScore = completed.length > 0
          ? completed.reduce((sum, a) => sum + (a.overall_score || 0), 0) / completed.length
          : 0;
        const totalFixes = analysesData.reduce((sum, a) => sum + (a.corrections_count || 0), 0);
        const totalIssues = analysesData.reduce((sum, a) => {
          const mt = Array.isArray(a.missing_translations) ? a.missing_translations.length : 0;
          const bg = Array.isArray(a.broken_graphics) ? a.broken_graphics.length : 0;
          const ti = Array.isArray(a.text_issues) ? a.text_issues.length : 0;
          const ci = Array.isArray(a.color_issues) ? a.color_issues.length : 0;
          const li = Array.isArray(a.layout_issues) ? a.layout_issues.length : 0;
          return sum + mt + bg + ti + ci + li;
        }, 0);
        
        const lastRun = analysesData[0]?.analyzed_at || null;

        setStats({
          totalAnalyzed: completed.length,
          avgScore: Math.round(avgScore),
          totalFixes,
          issuesFound: totalIssues,
          lastRunAt: lastRun,
        });
      }

      if (schedulesData) setSchedules(schedulesData as ScheduleJob[]);
      if (logsData) setFixerLogs(logsData as FixerLog[]);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('visual-analysis-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'content_visual_analysis' },
        () => fetchData()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchData]);

  const runAnalysis = async () => {
    setAnalyzing(true);
    toast.info(tr.analysisStarted);

    try {
      const { data, error } = await supabase.functions.invoke('content-visual-analyzer', {
        body: { 
          analysis_type: 'comprehensive',
          auto_fix: true,
          language: language 
        }
      });

      if (error) throw error;

      toast.success(`${tr.analysisComplete}: ${data.analyzed} chapters`);
      fetchData();
    } catch (error) {
      console.error('Error running analysis:', error);
      toast.error('Analysis failed');
    } finally {
      setAnalyzing(false);
    }
  };

  const toggleSchedule = async (jobId: string, isActive: boolean) => {
    try {
      await supabase
        .from('content_analyzer_schedule')
        .update({ is_active: !isActive })
        .eq('id', jobId);

      toast.success(tr.toggleSuccess);
      fetchData();
    } catch (error) {
      console.error('Error toggling schedule:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/10 text-green-600"><CheckCircle className="h-3 w-3 mr-1" />{tr.completed}</Badge>;
      case 'auto_fixed':
        return <Badge className="bg-blue-500/10 text-blue-600"><Wrench className="h-3 w-3 mr-1" />{tr.autoFixed}</Badge>;
      case 'failed':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />{tr.failed}</Badge>;
      case 'analyzing':
        return <Badge className="bg-yellow-500/10 text-yellow-600"><RefreshCw className="h-3 w-3 mr-1 animate-spin" />{tr.analyzing}</Badge>;
      default:
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" />{tr.pending}</Badge>;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCronLabel = (cron: string) => {
    if (cron.includes('*/15')) return tr.every15min;
    if (cron.startsWith('0 *')) return tr.hourly;
    if (cron.includes('*/6')) return tr.every6h;
    return cron;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Eye className="h-6 w-6 text-primary" />
            {tr.title}
          </h2>
          <p className="text-muted-foreground">{tr.subtitle}</p>
        </div>
        <Button onClick={runAnalysis} disabled={analyzing}>
          {analyzing ? (
            <><RefreshCw className="h-4 w-4 mr-2 animate-spin" />{tr.analyzing}</>
          ) : (
            <><Play className="h-4 w-4 mr-2" />{tr.runNow}</>
          )}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              {tr.totalAnalyzed}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{stats.totalAnalyzed}</p>
          </CardContent>
        </Card>

        <Card className="bg-green-500/5 border-green-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              {tr.avgScore}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-3xl font-bold ${getScoreColor(stats.avgScore)}`}>
              {stats.avgScore}/100
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-500/5 border-blue-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              {tr.totalFixes}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-blue-600">{stats.totalFixes}</p>
          </CardContent>
        </Card>

        <Card className="bg-orange-500/5 border-orange-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              {tr.issuesFound}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-600">{stats.issuesFound}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {tr.lastRun}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">
              {stats.lastRunAt 
                ? formatDistanceToNow(new Date(stats.lastRunAt), { addSuffix: true, locale: getLocale() })
                : '-'
              }
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            {tr.overview}
          </TabsTrigger>
          <TabsTrigger value="schedules" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            {tr.schedules}
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            {tr.history}
          </TabsTrigger>
          <TabsTrigger value="fixes" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            {tr.fixes}
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{tr.overview}</CardTitle>
              <CardDescription>
                Latest analysis results by chapter
              </CardDescription>
            </CardHeader>
            <CardContent>
              {analyses.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">{tr.noData}</p>
              ) : (
                <ScrollArea className="h-[500px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{tr.chapter}</TableHead>
                        <TableHead className="text-center">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger><Eye className="h-4 w-4 mx-auto" /></TooltipTrigger>
                              <TooltipContent>{tr.visualScore}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableHead>
                        <TableHead className="text-center">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger><FileText className="h-4 w-4 mx-auto" /></TooltipTrigger>
                              <TooltipContent>{tr.textScore}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableHead>
                        <TableHead className="text-center">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger><Globe className="h-4 w-4 mx-auto" /></TooltipTrigger>
                              <TooltipContent>{tr.translationScore}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableHead>
                        <TableHead className="text-center">{tr.overallScore}</TableHead>
                        <TableHead className="text-center">{tr.issues}</TableHead>
                        <TableHead className="text-center">{tr.fixesApplied}</TableHead>
                        <TableHead>{tr.status}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {analyses.slice(0, 50).map((analysis) => {
                        const issueCount = 
                          (Array.isArray(analysis.missing_translations) ? analysis.missing_translations.length : 0) +
                          (Array.isArray(analysis.broken_graphics) ? analysis.broken_graphics.length : 0) +
                          (Array.isArray(analysis.text_issues) ? analysis.text_issues.length : 0) +
                          (Array.isArray(analysis.color_issues) ? analysis.color_issues.length : 0) +
                          (Array.isArray(analysis.layout_issues) ? analysis.layout_issues.length : 0);

                        return (
                          <TableRow key={analysis.id}>
                            <TableCell className="font-medium">
                              {analysis.chapter_id}
                              <Badge variant="outline" className="ml-2 text-xs">
                                {analysis.language.toUpperCase()}
                              </Badge>
                            </TableCell>
                            <TableCell className={`text-center ${getScoreColor(analysis.visual_score)}`}>
                              {analysis.visual_score}
                            </TableCell>
                            <TableCell className={`text-center ${getScoreColor(analysis.text_score)}`}>
                              {analysis.text_score}
                            </TableCell>
                            <TableCell className={`text-center ${getScoreColor(analysis.translation_score)}`}>
                              {analysis.translation_score}
                            </TableCell>
                            <TableCell className="text-center">
                              <span className={`font-bold ${getScoreColor(analysis.overall_score)}`}>
                                {analysis.overall_score}/100
                              </span>
                            </TableCell>
                            <TableCell className="text-center">
                              {issueCount > 0 ? (
                                <Badge variant="outline" className="bg-orange-500/10 text-orange-600">
                                  {issueCount}
                                </Badge>
                              ) : (
                                <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {analysis.corrections_count > 0 ? (
                                <Badge className="bg-blue-500/10 text-blue-600">
                                  {analysis.corrections_count}
                                </Badge>
                              ) : '-'}
                            </TableCell>
                            <TableCell>{getStatusBadge(analysis.status)}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Schedules Tab */}
        <TabsContent value="schedules" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                {tr.schedules}
              </CardTitle>
              <CardDescription>
                Automated analysis jobs running 96 times per day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{tr.jobName}</TableHead>
                    <TableHead>{tr.frequency}</TableHead>
                    <TableHead className="text-center">{tr.chaptersPerRun}</TableHead>
                    <TableHead className="text-center">{tr.autoFix}</TableHead>
                    <TableHead>{tr.lastRunAt}</TableHead>
                    <TableHead className="text-center">{tr.totalRuns}</TableHead>
                    <TableHead className="text-center">{tr.successRate}</TableHead>
                    <TableHead className="text-center">{tr.active}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedules.map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell className="font-medium">{schedule.job_name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{getCronLabel(schedule.cron_expression)}</Badge>
                      </TableCell>
                      <TableCell className="text-center">{schedule.chapters_per_run}</TableCell>
                      <TableCell className="text-center">
                        {schedule.auto_fix_enabled ? (
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto" />
                        )}
                      </TableCell>
                      <TableCell>
                        {schedule.last_run_at
                          ? formatDistanceToNow(new Date(schedule.last_run_at), { addSuffix: true, locale: getLocale() })
                          : '-'
                        }
                      </TableCell>
                      <TableCell className="text-center">{schedule.total_runs}</TableCell>
                      <TableCell className="text-center">
                        {schedule.total_runs > 0
                          ? `${Math.round((schedule.successful_runs / schedule.total_runs) * 100)}%`
                          : '-'
                        }
                      </TableCell>
                      <TableCell className="text-center">
                        <Switch
                          checked={schedule.is_active}
                          onCheckedChange={() => toggleSchedule(schedule.id, schedule.is_active)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{tr.history}</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <div className="space-y-3">
                  {analyses.map((analysis) => (
                    <div 
                      key={analysis.id}
                      className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getStatusBadge(analysis.status)}
                        <div>
                          <p className="font-medium">{analysis.chapter_id}</p>
                          <p className="text-xs text-muted-foreground">
                            {analysis.analyzed_at 
                              ? format(new Date(analysis.analyzed_at), 'PPp', { locale: getLocale() })
                              : format(new Date(analysis.created_at), 'PPp', { locale: getLocale() })
                            }
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className={`font-bold ${getScoreColor(analysis.overall_score)}`}>
                            {analysis.overall_score}/100
                          </p>
                          {analysis.corrections_count > 0 && (
                            <p className="text-xs text-blue-600">
                              {analysis.corrections_count} fixes
                            </p>
                          )}
                        </div>
                        <Badge variant="outline">{analysis.language.toUpperCase()}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Fixes Tab */}
        <TabsContent value="fixes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-500" />
                {tr.fixes}
              </CardTitle>
              <CardDescription>
                Automatic corrections applied by AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              {fixerLogs.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">{tr.noData}</p>
              ) : (
                <ScrollArea className="h-[500px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{tr.chapter}</TableHead>
                        <TableHead>{tr.fixType}</TableHead>
                        <TableHead>{tr.original}</TableHead>
                        <TableHead>{tr.fixed}</TableHead>
                        <TableHead>{tr.reason}</TableHead>
                        <TableHead>{tr.appliedAt}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {fixerLogs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell className="font-medium">{log.chapter_id}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{log.fix_type}</Badge>
                          </TableCell>
                          <TableCell className="max-w-[150px] truncate text-muted-foreground">
                            {log.original_value}
                          </TableCell>
                          <TableCell className="max-w-[150px] truncate text-green-600">
                            {log.fixed_value}
                          </TableCell>
                          <TableCell className="max-w-[200px] truncate">
                            {log.fix_reason}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {formatDistanceToNow(new Date(log.applied_at), { addSuffix: true, locale: getLocale() })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
