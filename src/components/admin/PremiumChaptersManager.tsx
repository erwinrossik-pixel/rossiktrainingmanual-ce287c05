import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Lock, Unlock, BookOpen, Crown, Star, Sparkles } from 'lucide-react';
import { PlanType } from '@/hooks/useSubscription';

interface Chapter {
  id: string;
  slug: string;
  order_index: number;
  module: string | null;
}

interface PremiumChapter {
  id: string;
  chapter_id: string;
  min_plan_type: string;
}

export function PremiumChaptersManager() {
  const { isSuperAdmin } = useCompany();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [premiumChapters, setPremiumChapters] = useState<Map<string, PlanType>>(new Map());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    if (isSuperAdmin) {
      fetchData();
    }
  }, [isSuperAdmin]);

  const fetchData = async () => {
    setLoading(true);
    
    const [chaptersRes, premiumRes] = await Promise.all([
      supabase.from('chapters').select('id, slug, order_index, module').order('order_index'),
      supabase.from('premium_chapters').select('*')
    ]);

    setChapters(chaptersRes.data || []);
    
    const premiumMap = new Map<string, PlanType>();
    (premiumRes.data || []).forEach((pc: PremiumChapter) => {
      premiumMap.set(pc.chapter_id, pc.min_plan_type as PlanType);
    });
    setPremiumChapters(premiumMap);
    
    setLoading(false);
  };

  const updateChapterPlan = async (chapterId: string, minPlan: string) => {
    setSaving(chapterId);
    
    try {
      if (minPlan === 'free') {
        await supabase.from('premium_chapters').delete().eq('chapter_id', chapterId);
        
        const newMap = new Map(premiumChapters);
        newMap.delete(chapterId);
        setPremiumChapters(newMap);
      } else {
        await supabase.from('premium_chapters').upsert({
          chapter_id: chapterId,
          min_plan_type: minPlan
        }, {
          onConflict: 'chapter_id'
        });
        
        const newMap = new Map(premiumChapters);
        newMap.set(chapterId, minPlan as PlanType);
        setPremiumChapters(newMap);
      }
      
      toast({ title: t('admin.premium.updated') });
    } catch (error) {
      console.error('Error updating premium chapter:', error);
      toast({ title: t('admin.premium.error'), variant: 'destructive' });
    } finally {
      setSaving(null);
    }
  };

  const getPlanBadge = (plan: PlanType | undefined) => {
    switch (plan) {
      case 'starter':
        return <Badge className="bg-blue-500 text-white font-bold px-3 py-1 shadow-md"><Star className="h-3 w-3 mr-1" />{t('admin.premium.planStarter')}</Badge>;
      case 'professional':
        return <Badge className="bg-purple-500 text-white font-bold px-3 py-1 shadow-md"><Sparkles className="h-3 w-3 mr-1" />{t('admin.premium.planProfessional')}</Badge>;
      case 'enterprise':
        return <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-3 py-1 shadow-md"><Crown className="h-3 w-3 mr-1" />{t('admin.premium.planEnterprise')}</Badge>;
      default:
        return <Badge variant="secondary" className="bg-slate-200 text-slate-700 font-bold px-3 py-1"><Unlock className="h-3 w-3 mr-1" />{t('admin.premium.planFree')}</Badge>;
    }
  };

  if (!isSuperAdmin) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.premium.restricted')}</CardTitle>
          <CardDescription>{t('admin.premium.restrictedDesc')}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  // Group chapters by module
  const groupedChapters = chapters.reduce((acc, chapter) => {
    const module = chapter.module || 'Other';
    if (!acc[module]) acc[module] = [];
    acc[module].push(chapter);
    return acc;
  }, {} as Record<string, Chapter[]>);

  return (
    <Card className="admin-section-card border-amber-200">
      <CardHeader className="admin-section-header bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <div className="p-2 bg-amber-500 rounded-lg shadow-md">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <span className="text-amber-800">{t('admin.premium.title')}</span>
        </CardTitle>
        <CardDescription className="text-amber-700 font-medium">
          {t('admin.premium.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedChapters).map(([module, moduleChapters]) => (
              <div key={module} className="bg-white rounded-xl border-2 border-slate-100 overflow-hidden shadow-sm">
                <h3 className="font-bold text-lg p-4 flex items-center gap-2 bg-gradient-to-r from-slate-100 to-slate-50 border-b">
                  <div className="p-1.5 bg-indigo-500 rounded-lg">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-800">{module}</span>
                  <Badge className="ml-2 bg-slate-600">{moduleChapters.length} {t('admin.premium.chapters')}</Badge>
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50 hover:bg-slate-50">
                      <TableHead className="w-12 font-bold text-slate-700">#</TableHead>
                      <TableHead className="font-bold text-slate-700">{t('admin.premium.chapter')}</TableHead>
                      <TableHead className="font-bold text-slate-700">{t('admin.premium.currentRestriction')}</TableHead>
                      <TableHead className="w-48 font-bold text-slate-700">{t('admin.premium.minPlan')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {moduleChapters.map((chapter) => {
                      const currentPlan = premiumChapters.get(chapter.id);
                      return (
                        <TableRow key={chapter.id} className="hover:bg-amber-50/50 border-b">
                          <TableCell className="font-mono text-slate-500 font-bold">
                            {chapter.order_index}
                          </TableCell>
                          <TableCell className="font-semibold text-slate-800">
                            {chapter.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                          </TableCell>
                          <TableCell>
                            {getPlanBadge(currentPlan)}
                          </TableCell>
                          <TableCell>
                            <Select
                              value={currentPlan || 'free'}
                              onValueChange={(value) => updateChapterPlan(chapter.id, value)}
                              disabled={saving === chapter.id}
                            >
                              <SelectTrigger className="w-44 border-2 font-medium">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-2 shadow-xl">
                                <SelectItem value="free">
                                  <span className="flex items-center gap-2 font-medium">
                                    <Unlock className="h-4 w-4 text-slate-500" /> {t('admin.premium.planFree')}
                                  </span>
                                </SelectItem>
                                <SelectItem value="starter">
                                  <span className="flex items-center gap-2 font-medium">
                                    <Star className="h-4 w-4 text-blue-500" /> {t('admin.premium.planStarter')}
                                  </span>
                                </SelectItem>
                                <SelectItem value="professional">
                                  <span className="flex items-center gap-2 font-medium">
                                    <Sparkles className="h-4 w-4 text-purple-500" /> {t('admin.premium.planProfessional')}
                                  </span>
                                </SelectItem>
                                <SelectItem value="enterprise">
                                  <span className="flex items-center gap-2 font-medium">
                                    <Crown className="h-4 w-4 text-amber-500" /> {t('admin.premium.planEnterprise')}
                                  </span>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}