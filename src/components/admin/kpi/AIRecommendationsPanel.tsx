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
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [stats, setStats] = useState<AnalysisStats | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'applied' | 'dismissed'>('pending');

  const fetchRecommendations = useCallback(async () => {
    setLoading(true);
    try {
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
  }, [filter]);

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

  const updateRecommendationStatus = async (
    id: string, 
    status: 'applied' | 'dismissed',
    dismissReason?: string
  ) => {
    try {
      const updateData: Record<string, unknown> = {
        status,
        updated_at: new Date().toISOString(),
      };

      if (status === 'applied') {
        updateData.applied_at = new Date().toISOString();
      }
      if (status === 'dismissed' && dismissReason) {
        updateData.dismissed_reason = dismissReason;
      }

      const { error } = await supabase
        .from('ai_recommendations')
        .update(updateData)
        .eq('id', id);

      if (error) throw error;

      toast.success(status === 'applied' ? t('admin.ai.appliedLabel') : t('admin.ai.dismiss'));
      await fetchRecommendations();
    } catch (error) {
      console.error('Error updating recommendation:', error);
      toast.error(t('admin.general.error'));
    }
  };

  const pendingCount = recommendations.filter(r => r.status === 'pending').length;
  const appliedCount = recommendations.filter(r => r.status === 'applied').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-500" />
            {t('admin.ai.title')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t('admin.ai.subtitle')}
          </p>
        </div>
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

      <div className="grid grid-cols-3 gap-4">
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
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              {t('admin.ai.totalRecommendations')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{recommendations.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
        <TabsList>
          <TabsTrigger value="all">{t('admin.ai.allRec')}</TabsTrigger>
          <TabsTrigger value="pending">{t('admin.ai.pendingRec')}</TabsTrigger>
          <TabsTrigger value="applied">{t('admin.ai.appliedRec')}</TabsTrigger>
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
                        <Badge className="bg-green-500 shrink-0">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          {t('admin.ai.appliedLabel')}
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
