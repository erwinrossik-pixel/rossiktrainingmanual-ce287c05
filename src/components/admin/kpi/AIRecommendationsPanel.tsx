import React, { memo, useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { logger } from '@/utils/logger';
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
  low: 'bg-info',
  medium: 'bg-warning',
  high: 'bg-warning',
  critical: 'bg-destructive',
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
            <Brain className="h-6 w-6 text-primary" />
            {t('admin.ai.title')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t('admin.ai.subtitle')}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Implement All Applied Button - Uses edge function for real implementation */}
          <Button
            onClick={async () => {
              setImplementing(true);
              let totalImplemented = 0;
              let totalFailed = 0;
              
              try {
                // First, get the count of applied recommendations
                const { count: appliedCount } = await supabase
                  .from('ai_recommendations')
                  .select('id', { count: 'exact', head: true })
                  .eq('status', 'applied');

                if (!appliedCount || appliedCount === 0) {
                  toast.info(t('admin.ai.noAppliedToImplement'));
                  setImplementing(false);
                  return;
                }

                setImplementProgress({ current: 0, total: appliedCount, currentTitle: t('admin.ai.startingImplementation') });
                toast.info(`${t('admin.ai.startingImplementation')} (${appliedCount} ${t('admin.ai.recommendations').toLowerCase()})`);

                // Process one at a time for accurate tracking
                let hasMore = true;
                let processedCount = 0;

                while (hasMore) {
                  // Call edge function to implement ONE recommendation
                  const { data, error } = await supabase.functions.invoke('implement-ai-recommendations', {
                    body: { 
                      implementAll: true,
                      batchSize: 1 // Process one at a time for accurate progress
                    }
                  });

                  if (error) {
                    console.error('Implementation error:', error);
                    totalFailed++;
                    break;
                  }

                  if (data.results && data.results.length > 0) {
                    const result = data.results[0];
                    processedCount++;
                    
                    setImplementProgress({ 
                      current: processedCount, 
                      total: appliedCount, 
                      currentTitle: result.title 
                    });

                    if (result.success && result.verified) {
                      totalImplemented++;
                      logger.debug(`✓ Implemented: ${result.title}`);
                    } else {
                      totalFailed++;
                      logger.warn(`✗ Failed: ${result.title} - ${result.message}`);
                      toast.warning(`${result.title}: ${result.message}`);
                    }
                  }

                  hasMore = data.hasMore && data.remaining > 0;
                  
                  // Small delay between iterations for UI feedback
                  await new Promise(resolve => setTimeout(resolve, 300));
                }

                // Final summary
                if (totalImplemented > 0) {
                  toast.success(
                    t('admin.ai.implementComplete')
                      .replace('{count}', String(totalImplemented)) + 
                    (totalFailed > 0 ? ` (${totalFailed} ${t('admin.ai.failed')})` : '')
                  );
                } else if (totalFailed > 0) {
                  toast.error(`${t('admin.ai.implementFailed')}: ${totalFailed}`);
                }

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
            className="bg-primary hover:bg-primary/90"
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
            className="border-success text-success hover:bg-success hover:text-success-foreground"
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
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{t('admin.ai.chaptersAnalyzed')}</p>
              <p className="text-2xl font-bold">{stats.totalChapters}</p>
            </CardContent>
          </Card>
          <Card className="bg-warning/5 border-warning/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{t('admin.ai.problematic')}</p>
              <p className="text-2xl font-bold text-warning">{stats.problematicCount}</p>
            </CardContent>
          </Card>
          <Card className="bg-success/5 border-success/20">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{t('admin.ai.tooEasy')}</p>
              <p className="text-2xl font-bold text-success">{stats.tooEasyCount}</p>
            </CardContent>
          </Card>
          <Card className="bg-info/5 border-info/20">
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
                <Clock className="h-4 w-4 text-success" />
                <p className="text-sm font-medium text-success">{t('admin.ai.daily')} 09:00</p>
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
              <CheckCircle2 className="h-4 w-4 text-success" />
              {t('admin.ai.applied')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-success">{appliedCount}</p>
          </CardContent>
        </Card>
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              {t('admin.ai.implemented')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">{completedCount}</p>
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
          <TabsTrigger value="completed" className="text-primary">{t('admin.ai.implementedRec')}</TabsTrigger>
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
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                          <span>{t('admin.ai.target')}: {rec.target_entity}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {t('admin.ai.created')}: {new Date(rec.created_at).toLocaleString('ro-RO', { 
                              day: '2-digit', 
                              month: '2-digit', 
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                          {rec.applied_at && (
                            <span className="flex items-center gap-1 text-success font-medium">
                              <CheckCircle2 className="h-3 w-3" />
                              {t('admin.ai.implementedAt')}: {new Date(rec.applied_at).toLocaleString('ro-RO', { 
                                day: '2-digit', 
                                month: '2-digit', 
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          )}
                        </div>

                        {/* Status Timeline */}
                        {(rec.status === 'completed' || rec.status === 'applied') && rec.applied_at && (
                          <div className="mt-2 p-2 bg-success/10 rounded-md border border-success/20">
                            <div className="flex items-center gap-2 text-xs">
                              <Sparkles className="h-3 w-3 text-success" />
                              <span className="font-medium text-success">
                                {rec.status === 'completed' ? t('admin.ai.fullyImplemented') : t('admin.ai.awaitingVerification')}
                              </span>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-muted-foreground">
                                {(() => {
                                  const appliedDate = new Date(rec.applied_at);
                                  const now = new Date();
                                  const diffMs = now.getTime() - appliedDate.getTime();
                                  const diffMins = Math.floor(diffMs / 60000);
                                  const diffHours = Math.floor(diffMs / 3600000);
                                  const diffDays = Math.floor(diffMs / 86400000);
                                  
                                  if (diffMins < 60) return `${diffMins} ${t('admin.ai.minutesAgo')}`;
                                  if (diffHours < 24) return `${diffHours} ${t('admin.ai.hoursAgo')}`;
                                  return `${diffDays} ${t('admin.ai.daysAgo')}`;
                                })()}
                              </span>
                            </div>
                          </div>
                        )}

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
