import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  CheckCircle2, AlertTriangle, XCircle, RefreshCw, FileSearch, 
  Languages, Target, Clock, TrendingUp, AlertCircle, Lightbulb
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { useLanguage } from "@/contexts/LanguageContext";

interface QualityIssue {
  type: string;
  severity: "low" | "medium" | "high";
  description: string;
  location?: string;
  suggestion?: string;
}

interface QualityAnalysis {
  id: string;
  chapter_id: string;
  language: string;
  quality_score: number;
  terminology_issues: QualityIssue[];
  consistency_issues: QualityIssue[];
  translation_issues: QualityIssue[];
  outdated_content: QualityIssue[];
  duplication_issues: QualityIssue[];
  suggested_corrections: Array<{
    issue_type: string;
    original: string;
    correction: string;
    reason: string;
  }>;
  analyzed_at: string;
  status: string;
  analysis_version: number;
}

interface ChapterQualitySummary {
  chapter_id: string;
  slug: string;
  order_index: number;
  content_level: string;
  module: string | null;
  ro_score: number;
  de_score: number;
  en_score: number;
  avg_score: number;
  latest_status: string | null;
  last_analyzed: string | null;
}

export function ContentQualityDashboard() {
  const queryClient = useQueryClient();
  const { t } = useLanguage();
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzingChapter, setAnalyzingChapter] = useState<string | null>(null);

  // Fetch quality summary for all chapters
  const { data: qualitySummary, isLoading: summaryLoading, refetch: refetchSummary } = useQuery({
    queryKey: ["content-quality-summary"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("chapters")
        .select("id, slug, order_index, content_level, module")
        .order("order_index");

      if (error) throw error;

      // Get latest analysis for each chapter
      const summaryWithScores = await Promise.all(
        (data || []).map(async (chapter) => {
          const { data: analyses } = await supabase
            .from("content_quality_analysis")
            .select("quality_score, language, status, analyzed_at")
            .eq("chapter_id", chapter.id)
            .order("analysis_version", { ascending: false });

          const roAnalysis = analyses?.find(a => a.language === "ro");
          const deAnalysis = analyses?.find(a => a.language === "de");
          const enAnalysis = analyses?.find(a => a.language === "en");

          const roScore = roAnalysis?.quality_score || 0;
          const deScore = deAnalysis?.quality_score || 0;
          const enScore = enAnalysis?.quality_score || 0;

          return {
            chapter_id: chapter.id,
            slug: chapter.slug,
            order_index: chapter.order_index,
            content_level: chapter.content_level,
            module: chapter.module,
            ro_score: roScore,
            de_score: deScore,
            en_score: enScore,
            avg_score: Math.round((roScore + deScore + enScore) / 3),
            latest_status: roAnalysis?.status || deAnalysis?.status || enAnalysis?.status || null,
            last_analyzed: roAnalysis?.analyzed_at || deAnalysis?.analyzed_at || enAnalysis?.analyzed_at || null,
          } as ChapterQualitySummary;
        })
      );

      return summaryWithScores;
    },
  });

  // Fetch detailed analysis for selected chapter
  const { data: chapterAnalysis, isLoading: analysisLoading } = useQuery({
    queryKey: ["content-quality-analysis", selectedChapter],
    queryFn: async () => {
      if (!selectedChapter) return null;

      const { data, error } = await supabase
        .from("content_quality_analysis")
        .select("*")
        .eq("chapter_id", selectedChapter)
        .order("analysis_version", { ascending: false });

      if (error) throw error;
      
      // Map the data to our interface
      return (data || []).map(item => ({
        id: item.id,
        chapter_id: item.chapter_id,
        language: item.language,
        quality_score: item.quality_score,
        terminology_issues: (Array.isArray(item.terminology_issues) ? item.terminology_issues : []) as unknown as QualityIssue[],
        consistency_issues: (Array.isArray(item.consistency_issues) ? item.consistency_issues : []) as unknown as QualityIssue[],
        translation_issues: (Array.isArray(item.translation_issues) ? item.translation_issues : []) as unknown as QualityIssue[],
        outdated_content: (Array.isArray(item.outdated_content) ? item.outdated_content : []) as unknown as QualityIssue[],
        duplication_issues: (Array.isArray(item.duplication_issues) ? item.duplication_issues : []) as unknown as QualityIssue[],
        suggested_corrections: (item.suggested_corrections || []) as Array<{
          issue_type: string;
          original: string;
          correction: string;
          reason: string;
        }>,
        analyzed_at: item.analyzed_at,
        status: item.status,
        analysis_version: item.analysis_version,
      })) as QualityAnalysis[];
    },
    enabled: !!selectedChapter,
  });

  // Analyze chapter mutation
  const analyzeChapterMutation = useMutation({
    mutationFn: async ({ chapterId, language }: { chapterId: string; language: string }) => {
      const response = await supabase.functions.invoke("content-quality-analyzer", {
        body: { chapter_id: chapterId, language },
      });

      if (response.error) throw response.error;
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message || t('admin.quality.analysisComplete'));
      queryClient.invalidateQueries({ queryKey: ["content-quality-summary"] });
      queryClient.invalidateQueries({ queryKey: ["content-quality-analysis"] });
    },
    onError: (error: Error) => {
      toast.error(`${t('admin.quality.errorAnalysis')}: ${error.message}`);
    },
  });

  // Analyze all chapters
  const handleAnalyzeAll = async () => {
    if (!qualitySummary) return;
    
    setIsAnalyzing(true);
    const languages = ["ro", "de", "en"];
    
    try {
      for (const chapter of qualitySummary) {
        setAnalyzingChapter(chapter.chapter_id);
        for (const lang of languages) {
          await analyzeChapterMutation.mutateAsync({ 
            chapterId: chapter.chapter_id, 
            language: lang 
          });
          // Small delay to avoid rate limits
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      toast.success(t('admin.quality.allComplete'));
    } catch (error) {
      console.error("Error analyzing all chapters:", error);
    } finally {
      setIsAnalyzing(false);
      setAnalyzingChapter(null);
    }
  };

  // Calculate overall stats
  const stats = qualitySummary ? {
    totalChapters: qualitySummary.length,
    analyzedChapters: qualitySummary.filter(c => c.last_analyzed).length,
    avgScore: Math.round(qualitySummary.reduce((sum, c) => sum + c.avg_score, 0) / qualitySummary.length) || 0,
    belowThreshold: qualitySummary.filter(c => c.avg_score > 0 && c.avg_score < 85).length,
    excellent: qualitySummary.filter(c => c.avg_score >= 90).length,
  } : null;

  const getScoreBadge = (score: number) => {
    if (score === 0) return <Badge variant="outline" className="text-muted-foreground">N/A</Badge>;
    if (score >= 90) return <Badge className="bg-success text-success-foreground">{score}</Badge>;
    if (score >= 85) return <Badge className="bg-blue-600 text-white">{score}</Badge>;
    if (score >= 70) return <Badge className="bg-amber-500 text-white">{score}</Badge>;
    return <Badge variant="destructive">{score}</Badge>;
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high": return <XCircle className="w-4 h-4 text-destructive" />;
      case "medium": return <AlertTriangle className="w-4 h-4 text-amber-500" />;
      default: return <AlertCircle className="w-4 h-4 text-blue-500" />;
    }
  };

  const countIssues = (analysis: QualityAnalysis) => {
    return (
      (analysis.terminology_issues?.length || 0) +
      (analysis.consistency_issues?.length || 0) +
      (analysis.translation_issues?.length || 0) +
      (analysis.outdated_content?.length || 0) +
      (analysis.duplication_issues?.length || 0)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FileSearch className="w-6 h-6 text-primary" />
            {t('admin.quality.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('admin.quality.subtitle')}
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => refetchSummary()}
            disabled={summaryLoading}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${summaryLoading ? "animate-spin" : ""}`} />
            {t('admin.quality.refresh')}
          </Button>
          <Button 
            onClick={handleAnalyzeAll}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                {t('admin.quality.analyzing')} {analyzingChapter}...
              </>
            ) : (
              <>
                <Target className="w-4 h-4 mr-2" />
                {t('admin.quality.analyzeAll')}
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold">{stats.totalChapters}</div>
              <div className="text-sm text-muted-foreground">{t('admin.quality.totalChapters')}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold">{stats.analyzedChapters}</div>
              <div className="text-sm text-muted-foreground">{t('admin.quality.analyzed')}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold flex items-center gap-2">
                {stats.avgScore}
                <TrendingUp className="w-4 h-4 text-success" />
              </div>
              <div className="text-sm text-muted-foreground">{t('admin.quality.avgScore')}</div>
            </CardContent>
          </Card>
          <Card className={stats.belowThreshold > 0 ? "border-amber-500" : ""}>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-amber-600">{stats.belowThreshold}</div>
              <div className="text-sm text-muted-foreground">{t('admin.quality.belowThreshold')}</div>
            </CardContent>
          </Card>
          <Card className="border-success">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-success">{stats.excellent}</div>
              <div className="text-sm text-muted-foreground">{t('admin.quality.excellent')}</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Progress Bar */}
      {stats && (
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{t('admin.quality.globalProgress')}</span>
              <span className="text-sm text-muted-foreground">{stats.avgScore}/100</span>
            </div>
            <Progress value={stats.avgScore} className="h-3" />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>0 - {t('admin.quality.poor')}</span>
              <span className="text-amber-500">70 - {t('admin.quality.acceptable')}</span>
              <span className="text-blue-500">85 - {t('admin.quality.good')}</span>
              <span className="text-success">90+ - {t('admin.quality.excellent')}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chapters Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="w-5 h-5" />
            {t('admin.quality.scoresTitle')}
          </CardTitle>
          <CardDescription>
            {t('admin.quality.scoresDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>{t('admin.quality.chapter')}</TableHead>
                  <TableHead className="text-center">🇷🇴 RO</TableHead>
                  <TableHead className="text-center">🇩🇪 DE</TableHead>
                  <TableHead className="text-center">🇬🇧 EN</TableHead>
                  <TableHead className="text-center">{t('admin.quality.average')}</TableHead>
                  <TableHead>{t('admin.quality.lastAnalysis')}</TableHead>
                  <TableHead className="text-right">{t('admin.quality.analysisActions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {qualitySummary?.map((chapter) => (
                  <TableRow 
                    key={chapter.chapter_id}
                    className={`cursor-pointer hover:bg-muted/50 ${chapter.avg_score > 0 && chapter.avg_score < 85 ? "bg-amber-50 dark:bg-amber-950/20" : ""}`}
                    onClick={() => setSelectedChapter(chapter.chapter_id)}
                  >
                    <TableCell className="font-medium">{chapter.order_index}</TableCell>
                    <TableCell>
                      <div className="font-medium">{chapter.chapter_id}</div>
                      <div className="text-xs text-muted-foreground">{chapter.slug}</div>
                    </TableCell>
                    <TableCell className="text-center">{getScoreBadge(chapter.ro_score)}</TableCell>
                    <TableCell className="text-center">{getScoreBadge(chapter.de_score)}</TableCell>
                    <TableCell className="text-center">{getScoreBadge(chapter.en_score)}</TableCell>
                    <TableCell className="text-center">{getScoreBadge(chapter.avg_score)}</TableCell>
                    <TableCell>
                      {chapter.last_analyzed ? (
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(chapter.last_analyzed), "dd.MM.yyyy HH:mm")}
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">{t('admin.quality.notAnalyzed')}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          analyzeChapterMutation.mutate({ chapterId: chapter.chapter_id, language: "ro" });
                        }}
                        disabled={analyzeChapterMutation.isPending}
                      >
                        <RefreshCw className={`w-4 h-4 ${analyzeChapterMutation.isPending ? "animate-spin" : ""}`} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={!!selectedChapter} onOpenChange={() => setSelectedChapter(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileSearch className="w-5 h-5" />
              {t('admin.quality.detailedAnalysis')}: {selectedChapter}
            </DialogTitle>
            <DialogDescription>
              {t('admin.quality.issuesFound')}
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[70vh] pr-4">
            {analysisLoading ? (
              <div className="flex items-center justify-center py-10">
                <RefreshCw className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : chapterAnalysis && chapterAnalysis.length > 0 ? (
              <Tabs defaultValue="ro">
                <TabsList className="mb-4">
                  <TabsTrigger value="ro">🇷🇴 Română</TabsTrigger>
                  <TabsTrigger value="de">🇩🇪 Deutsch</TabsTrigger>
                  <TabsTrigger value="en">🇬🇧 English</TabsTrigger>
                </TabsList>

                {["ro", "de", "en"].map((lang) => {
                  const analysis = chapterAnalysis.find(a => a.language === lang);
                  if (!analysis) {
                    return (
                      <TabsContent key={lang} value={lang}>
                        <div className="text-center py-10 text-muted-foreground">
                          <AlertCircle className="w-10 h-10 mx-auto mb-2 opacity-50" />
                          <p>Nicio analiză disponibilă pentru această limbă</p>
                          <Button
                            className="mt-4"
                            onClick={() => analyzeChapterMutation.mutate({ 
                              chapterId: selectedChapter!, 
                              language: lang 
                            })}
                            disabled={analyzeChapterMutation.isPending}
                          >
                            Analizează Acum
                          </Button>
                        </div>
                      </TabsContent>
                    );
                  }

                  const allIssues = [
                    ...(analysis.terminology_issues || []).map(i => ({ ...i, category: "Terminologie" })),
                    ...(analysis.consistency_issues || []).map(i => ({ ...i, category: "Consistență" })),
                    ...(analysis.translation_issues || []).map(i => ({ ...i, category: "Traducere" })),
                    ...(analysis.outdated_content || []).map(i => ({ ...i, category: "Conținut Depășit" })),
                    ...(analysis.duplication_issues || []).map(i => ({ ...i, category: "Duplicare" })),
                  ];

                  return (
                    <TabsContent key={lang} value={lang} className="space-y-6">
                      {/* Score Overview */}
                      <Card>
                        <CardContent className="pt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-3xl font-bold flex items-center gap-2">
                                {analysis.quality_score}
                                {analysis.quality_score >= 85 ? (
                                  <CheckCircle2 className="w-6 h-6 text-success" />
                                ) : (
                                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Scor Calitate • Versiunea {analysis.analysis_version}
                              </div>
                            </div>
                            <div className="text-right text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {format(new Date(analysis.analyzed_at), "dd.MM.yyyy HH:mm")}
                              </div>
                              <div>{countIssues(analysis)} probleme identificate</div>
                            </div>
                          </div>
                          <Progress 
                            value={analysis.quality_score} 
                            className={`h-3 mt-4 ${analysis.quality_score >= 85 ? "" : "[&>div]:bg-amber-500"}`}
                          />
                        </CardContent>
                      </Card>

                      {/* Issues List */}
                      {allIssues.length > 0 ? (
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <AlertTriangle className="w-5 h-5 text-amber-500" />
                              Probleme Identificate ({allIssues.length})
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {allIssues.map((issue, idx) => (
                              <div 
                                key={idx} 
                                className="p-3 border rounded-lg bg-muted/30"
                              >
                                <div className="flex items-start gap-3">
                                  {getSeverityIcon(issue.severity)}
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <Badge variant="outline">{issue.category}</Badge>
                                      <Badge 
                                        variant={issue.severity === "high" ? "destructive" : "secondary"}
                                      >
                                        {issue.severity}
                                      </Badge>
                                    </div>
                                    <p className="text-sm font-medium">{issue.type}</p>
                                    <p className="text-sm text-muted-foreground">{issue.description}</p>
                                    {issue.location && (
                                      <p className="text-xs text-muted-foreground mt-1">
                                        📍 {issue.location}
                                      </p>
                                    )}
                                    {issue.suggestion && (
                                      <div className="mt-2 p-2 bg-success/10 rounded text-sm">
                                        <span className="font-medium text-success">💡 Sugestie:</span>{" "}
                                        {issue.suggestion}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      ) : (
                        <Card className="border-success">
                          <CardContent className="pt-6 text-center">
                            <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-2" />
                            <p className="font-medium">Nicio problemă identificată!</p>
                            <p className="text-sm text-muted-foreground">
                              Conținutul respectă standardele de calitate
                            </p>
                          </CardContent>
                        </Card>
                      )}

                      {/* Suggested Corrections */}
                      {analysis.suggested_corrections && analysis.suggested_corrections.length > 0 && (
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Lightbulb className="w-5 h-5 text-amber-500" />
                              Sugestii de Corectare ({analysis.suggested_corrections.length})
                            </CardTitle>
                            <CardDescription>
                              Aceste corecții trebuie revizuite și aplicate manual
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {analysis.suggested_corrections.map((correction, idx) => (
                              <div key={idx} className="border rounded-lg p-4 space-y-2">
                                <Badge variant="outline">{correction.issue_type}</Badge>
                                <div className="grid md:grid-cols-2 gap-4 mt-2">
                                  <div className="p-2 bg-destructive/10 rounded">
                                    <span className="text-xs font-medium text-destructive">Original:</span>
                                    <p className="text-sm mt-1">{correction.original}</p>
                                  </div>
                                  <div className="p-2 bg-success/10 rounded">
                                    <span className="text-xs font-medium text-success">Corectare:</span>
                                    <p className="text-sm mt-1">{correction.correction}</p>
                                  </div>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  📝 {correction.reason}
                                </p>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      )}
                    </TabsContent>
                  );
                })}
              </Tabs>
            ) : (
              <div className="text-center py-10 text-muted-foreground">
                <AlertCircle className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p>Nicio analiză disponibilă pentru acest capitol</p>
                <div className="flex gap-2 justify-center mt-4">
                  {["ro", "de", "en"].map((lang) => (
                    <Button
                      key={lang}
                      variant="outline"
                      onClick={() => analyzeChapterMutation.mutate({ 
                        chapterId: selectedChapter!, 
                        language: lang 
                      })}
                      disabled={analyzeChapterMutation.isPending}
                    >
                      Analizează {lang.toUpperCase()}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
