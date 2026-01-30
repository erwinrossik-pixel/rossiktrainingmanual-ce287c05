import React, { memo, useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Brain,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  Lightbulb,
  FileText,
  HelpCircle,
  Layers,
  Sparkles,
  TrendingUp,
  Play,
} from 'lucide-react';

interface AIRecommendation {
  id: string;
  recommendation_type: string;
  target_entity: string;
  severity: string;
  title: string;
  description: string;
  suggested_action: string | null;
  ai_confidence: number;
  status: string;
  applied_at: string | null;
  dismissed_reason: string | null;
  kpi_data: Record<string, unknown>;
  created_at: string;
}

interface AnalysisStats {
  totalChapters: number;
  problematicCount: number;
  tooEasyCount: number;
  analyzedAt: string;
}

const severityColors: Record<string, string> = {
  low: 'bg-blue-500',
  medium: 'bg-yellow-500',
  high: 'bg-orange-500',
  critical: 'bg-red-500',
};

const typeIcons: Record<string, React.ReactNode> = {
  content_improvement: <FileText className="h-4 w-4" />,
  question_update: <HelpCircle className="h-4 w-4" />,
  chapter_restructure: <Layers className="h-4 w-4" />,
};

export const AIRecommendationsPanel = memo(function AIRecommendationsPanel() {
  const { t } = useLanguage();
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [allCounts, setAllCounts] = useState({ pending: 0, applied: 0, dismissed: 0, completed: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [applying, setApplying] = useState(false);
  const [implementing, setImplementing] = useState(false);
  const [implementProgress, setImplementProgress] = useState({ current: 0, total: 0, currentTitle: '' });
  const [stats, setStats] = useState<AnalysisStats | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'applied' | 'dismissed' | 'completed'>('pending');

  const fetchRecommendations = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch counts for all statuses first
      const [pendingRes, appliedRes, dismissedRes, completedRes] = await Promise.all([
        supabase.from('ai_recommendations').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('ai_recommendations').select('id', { count: 'exact', head: true }).eq('status', 'applied'),
        supabase.from('ai_recommendations').select('id', { count: 'exact', head: true }).eq('status', 'dismissed'),
        supabase.from('ai_recommendations').select('id', { count: 'exact', head: true }).eq('status', 'completed'),
      ]);

      const pendingCount = pendingRes.count || 0;
      const appliedCount = appliedRes.count || 0;
      const dismissedCount = dismissedRes.count || 0;
      const completedCount = completedRes.count || 0;
      
      setAllCounts({
        pending: pendingCount,
        applied: appliedCount,
        dismissed: dismissedCount,
        completed: completedCount,
        total: pendingCount + appliedCount + dismissedCount + completedCount,
      });

      // Fetch filtered recommendations
      let query = supabase
        .from('ai_recommendations')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query.limit(50);

      if (error) throw error;
      setRecommendations((data as AIRecommendation[]) || []);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      toast.error(t('admin.general.error'));
    } finally {
      setLoading(false);
    }
  }, [filter, t]);

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  const runAnalysis = async () => {
    setAnalyzing(true);
    toast.info(t('admin.ai.analyzing'));

    try {
      const { data, error } = await supabase.functions.invoke('ai-kpi-analyzer', {
        body: { type: 'full' }
      });

      if (error) throw error;

      if (data.error) {
        if (data.error.includes('Rate limit')) {
          toast.error('Limită de rate atinsă. Încercați din nou mai târziu.');
        } else if (data.error.includes('Payment')) {
          toast.error('Credit insuficient pentru Lovable AI.');
        } else {
          toast.error(data.error);
        }
        return;
      }

      setStats(data.stats);
      toast.success(`${t('admin.ai.totalRecommendations')}: ${data.recommendations?.length || 0}`);
      await fetchRecommendations();
    } catch (error) {
      console.error('Error running analysis:', error);
      toast.error(t('admin.general.error'));
    } finally {
      setAnalyzing(false);
    }
  };

  const applyAllApproved = async () => {
    setApplying(true);
    toast.info('Aplicare recomandări în curs...');

    try {
      const { data, error } = await supabase.functions.invoke('apply-ai-recommendations', {
        body: { autoApply: false }
      });

      if (error) throw error;

      if (data.error) {
        toast.error(data.error);
        return;
      }

      toast.success(t('admin.ai.applySuccess').replace('{count}', data.applied));
      if (data.failed > 0) {
        toast.warning(t('admin.ai.applyFailed').replace('{count}', data.failed));
      }
      await fetchRecommendations();
    } catch (error) {
      console.error('Error applying recommendations:', error);
      toast.error(t('admin.ai.applyError'));
    } finally {
      setApplying(false);
    }
  };

  const applySelectedRecommendations = async (ids: string[]) => {
    setApplying(true);
    try {
      const { data, error } = await supabase.functions.invoke('apply-ai-recommendations', {
        body: { recommendationIds: ids }
      });

      if (error) throw error;

      toast.success(t('admin.ai.applySuccess').replace('{count}', data.applied));
      await fetchRecommendations();
    } catch (error) {
      console.error('Error applying recommendations:', error);
      toast.error(t('admin.ai.applyError'));
    } finally {
      setApplying(false);
    }
  };

  const updateRecommendationStatus = async (
    id: string, 
    status: 'applied' | 'dismissed',
    dismissReason?: string
  ) => {
    try {
      if (status === 'applied') {
        // Directly apply the recommendation (execute the action)
        setApplying(true);
        toast.info('Se aplică recomandarea...');
        
        const { data, error } = await supabase.functions.invoke('apply-ai-recommendations', {
          body: { recommendationIds: [id] }
        });

        if (error) throw error;

        if (data.success) {
          toast.success(t('admin.ai.applySuccess').replace('{count}', '1'));
        } else {
          toast.error(data.error || t('admin.ai.applyError'));
        }
        setApplying(false);
      } else {
        // Just update status for dismissed
        const updateData: Record<string, unknown> = {
          status,
          updated_at: new Date().toISOString(),
          dismissed_reason: dismissReason || null,
        };

        const { error } = await supabase
          .from('ai_recommendations')
          .update(updateData)
          .eq('id', id);

        if (error) throw error;
        toast.success(t('admin.ai.dismiss'));
      }
      
      await fetchRecommendations();
    } catch (error) {
      console.error('Error updating recommendation:', error);
      toast.error(t('admin.general.error'));
      setApplying(false);
    }
  };

  // Use global counts from allCounts state
  const { pending: pendingCount, applied: appliedCount, completed: completedCount, total: totalCount } = allCounts;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-500" />
            {t('admin.ai.title')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t('admin.ai.subtitle')}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Implement All Applied Button */}
          <Button
            onClick={async () => {
              setImplementing(true);
              try {
                // Fetch all applied recommendations
                const { data: appliedRecs, error: fetchError } = await supabase
                  .from('ai_recommendations')
                  .select('id, title')
                  .eq('status', 'applied')
                  .order('created_at', { ascending: true });

                if (fetchError) throw fetchError;
                if (!appliedRecs || appliedRecs.length === 0) {
                  toast.info(t('admin.ai.noAppliedToImplement'));
                  setImplementing(false);
                  return;
                }

                setImplementProgress({ current: 0, total: appliedRecs.length, currentTitle: '' });

                // Process each one sequentially
                let successCount = 0;
                for (let i = 0; i < appliedRecs.length; i++) {
                  const rec = appliedRecs[i];
                  setImplementProgress({ 
                    current: i + 1, 
                    total: appliedRecs.length, 
                    currentTitle: rec.title 
                  });

                  try {
                    const { error: updateError } = await supabase
                      .from('ai_recommendations')
                      .update({ 
                        status: 'completed', 
                        updated_at: new Date().toISOString() 
                      })
                      .eq('id', rec.id);

                    if (updateError) {
                      console.error(`Error implementing ${rec.id}:`, updateError);
                    } else {
                      successCount++;
                    }
                  } catch (err) {
                    console.error(`Error implementing ${rec.id}:`, err);
                  }

                  // Small delay for visual feedback
                  await new Promise(resolve => setTimeout(resolve, 150));
                }

                toast.success(t('admin.ai.implementComplete').replace('{count}', String(successCount)));
                await fetchRecommendations();
              } catch (error) {
                console.error('Error implementing recommendations:', error);
                toast.error(t('admin.general.error'));
              } finally {
                setImplementing(false);
                setImplementProgress({ current: 0, total: 0, currentTitle: '' });
              }
            }}
            disabled={implementing || allCounts.applied === 0}
            className="bg-purple-500 hover:bg-purple-600"
          >
            {implementing ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                {implementProgress.current}/{implementProgress.total}
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                {t('admin.ai.implementAll')} ({allCounts.applied})
              </>
            )}
          </Button>

          {/* Apply All Button */}
          <Button
            onClick={applyAllApproved}
            disabled={applying || allCounts.pending === 0}
            variant="outline"
            className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
          >
            {applying ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Play className="h-4 w-4 mr-2" />
            )}
            {t('admin.ai.applyAll')} ({allCounts.pending})
          </Button>
          
          <Button 
            onClick={runAnalysis} 
            disabled={analyzing}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            {analyzing ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4 mr-2" />
            )}
            {analyzing ? t('admin.ai.analyzing') : t('admin.ai.runAnalysis')}
          </Button>
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card className="bg-purple-500/5 border-purple-500/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{t('admin.ai.chaptersAnalyzed')}</p>
              <p className="text-2xl font-bold">{stats.totalChapters}</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-500/5 border-orange-500/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{t('admin.ai.problematic')}</p>
              <p className="text-2xl font-bold text-orange-600">{stats.problematicCount}</p>
            </CardContent>
          </Card>
          <Card className="bg-green-500/5 border-green-500/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{t('admin.ai.tooEasy')}</p>
              <p className="text-2xl font-bold text-green-600">{stats.tooEasyCount}</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-500/5 border-blue-500/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{t('admin.ai.lastAnalysis')}</p>
              <p className="text-sm font-medium">
                {new Date(stats.analyzedAt).toLocaleString('ro-RO')}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{t('admin.ai.cronJob')}</p>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-green-500" />
                <p className="text-sm font-medium text-green-600">{t('admin.ai.daily')} 09:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              {t('admin.ai.pending')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{pendingCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              {t('admin.ai.applied')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">{appliedCount}</p>
          </CardContent>
        </Card>
        <Card className="border-purple-500/30 bg-purple-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-500" />
              {t('admin.ai.implemented')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-purple-600">{completedCount}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              {t('admin.ai.totalRecommendations')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalCount}</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
        <TabsList>
          <TabsTrigger value="all">{t('admin.ai.allRec')}</TabsTrigger>
          <TabsTrigger value="pending">{t('admin.ai.pendingRec')}</TabsTrigger>
          <TabsTrigger value="applied">{t('admin.ai.appliedRec')}</TabsTrigger>
          <TabsTrigger value="completed" className="text-purple-600">{t('admin.ai.implementedRec')}</TabsTrigger>
          <TabsTrigger value="dismissed">{t('admin.ai.dismissedRec')}</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Recommendations List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t('admin.ai.recommendations')}</CardTitle>
          <CardDescription>
            {t('admin.ai.clickToApply')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : recommendations.length === 0 ? (
            <div className="text-center py-12">
              <Lightbulb className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {filter === 'pending' 
                  ? t('admin.ai.noPending')
                  : t('admin.ai.noInCategory')}
              </p>
            </div>
          ) : (
            <ScrollArea className="h-[500px]">
              <div className="space-y-4 pr-4">
                {recommendations.map((rec) => (
                  <div 
                    key={rec.id}
                    className={`p-4 rounded-lg border ${
                      rec.status === 'pending' 
                        ? 'border-yellow-500/30 bg-yellow-500/5' 
                        : rec.status === 'applied'
                        ? 'border-green-500/30 bg-green-500/5'
                        : rec.status === 'completed'
                        ? 'border-purple-500/30 bg-purple-500/5'
                        : 'border-muted bg-muted/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-muted-foreground">
                            {typeIcons[rec.recommendation_type] || <Lightbulb className="h-4 w-4" />}
                          </span>
                          <h4 className="font-medium">{rec.title}</h4>
                          <Badge className={severityColors[rec.severity]}>
                            {rec.severity}
                          </Badge>
                          <Badge variant="outline">
                            {Math.round(rec.ai_confidence * 100)}% {t('admin.ai.confidence')}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {rec.description}
                        </p>
                        
                        {rec.suggested_action && (
                          <div className="p-2 bg-primary/5 rounded text-sm mb-2">
                            <strong>{t('admin.ai.suggestedAction')}</strong> {rec.suggested_action}
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{t('admin.ai.target')}: {rec.target_entity}</span>
                          <span>
                            {new Date(rec.created_at).toLocaleDateString('ro-RO')}
                          </span>
                        </div>

                        {rec.dismissed_reason && (
                          <p className="text-sm text-orange-600 mt-2">
                            <AlertTriangle className="h-3 w-3 inline mr-1" />
                            {t('admin.ai.dismissReason')} {rec.dismissed_reason}
                          </p>
                        )}
                      </div>
                      
                      {rec.status === 'pending' && (
                        <div className="flex flex-col gap-2 shrink-0">
                          <Button 
                            size="sm" 
                            onClick={() => updateRecommendationStatus(rec.id, 'applied')}
                            className="bg-green-500 hover:bg-green-600"
                          >
                            <CheckCircle2 className="h-4 w-4 mr-1" />
                            {t('admin.ai.apply')}
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              const reason = prompt(t('admin.ai.dismissReason'));
                              if (reason) {
                                updateRecommendationStatus(rec.id, 'dismissed', reason);
                              }
                            }}
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            {t('admin.ai.dismiss')}
                          </Button>
                        </div>
                      )}
                      
                      {rec.status === 'applied' && (
                        <div className="flex flex-col gap-2 shrink-0">
                          <Badge className="bg-green-500">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {t('admin.ai.appliedLabel')}
                          </Badge>
                          <Button 
                            size="sm" 
                            onClick={async () => {
                              try {
                                const { error } = await supabase
                                  .from('ai_recommendations')
                                  .update({ 
                                    status: 'completed', 
                                    updated_at: new Date().toISOString() 
                                  })
                                  .eq('id', rec.id);
                                if (error) throw error;
                                toast.success(t('admin.ai.markedImplemented'));
                                await fetchRecommendations();
                              } catch (error) {
                                console.error('Error marking as implemented:', error);
                                toast.error(t('admin.general.error'));
                              }
                            }}
                            className="bg-purple-500 hover:bg-purple-600"
                          >
                            <Sparkles className="h-4 w-4 mr-1" />
                            {t('admin.ai.markImplemented')}
                          </Button>
                        </div>
                      )}
                      
                      {rec.status === 'completed' && (
                        <Badge className="bg-purple-500 shrink-0">
                          <Sparkles className="h-3 w-3 mr-1" />
                          {t('admin.ai.implementedLabel')}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
});
