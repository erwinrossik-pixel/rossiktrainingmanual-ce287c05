import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
        // Remove from premium chapters
        await supabase.from('premium_chapters').delete().eq('chapter_id', chapterId);
        
        const newMap = new Map(premiumChapters);
        newMap.delete(chapterId);
        setPremiumChapters(newMap);
      } else {
        // Upsert premium chapter
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
      
      toast({ title: 'Restricție actualizată' });
    } catch (error) {
      console.error('Error updating premium chapter:', error);
      toast({ title: 'Eroare', variant: 'destructive' });
    } finally {
      setSaving(null);
    }
  };

  const getPlanBadge = (plan: PlanType | undefined) => {
    switch (plan) {
      case 'starter':
        return <Badge className="bg-blue-500"><Star className="h-3 w-3 mr-1" />Starter+</Badge>;
      case 'professional':
        return <Badge className="bg-purple-500"><Sparkles className="h-3 w-3 mr-1" />Pro+</Badge>;
      case 'enterprise':
        return <Badge className="bg-amber-500"><Crown className="h-3 w-3 mr-1" />Enterprise</Badge>;
      default:
        return <Badge variant="secondary"><Unlock className="h-3 w-3 mr-1" />Free</Badge>;
    }
  };

  if (!isSuperAdmin) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Acces restricționat</CardTitle>
          <CardDescription>Doar Super Admin poate gestiona capitolele premium.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  // Group chapters by module
  const groupedChapters = chapters.reduce((acc, chapter) => {
    const module = chapter.module || 'Alte';
    if (!acc[module]) acc[module] = [];
    acc[module].push(chapter);
    return acc;
  }, {} as Record<string, Chapter[]>);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5" />
          Capitole Premium
        </CardTitle>
        <CardDescription>
          Configurează ce plan minim este necesar pentru a accesa fiecare capitol
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedChapters).map(([module, moduleChapters]) => (
              <div key={module}>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  {module}
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">#</TableHead>
                      <TableHead>Capitol</TableHead>
                      <TableHead>Restricție Curentă</TableHead>
                      <TableHead className="w-48">Plan Minim</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {moduleChapters.map((chapter) => {
                      const currentPlan = premiumChapters.get(chapter.id);
                      return (
                        <TableRow key={chapter.id}>
                          <TableCell className="font-mono text-muted-foreground">
                            {chapter.order_index}
                          </TableCell>
                          <TableCell className="font-medium">
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
                              <SelectTrigger className="w-40">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="free">
                                  <span className="flex items-center gap-2">
                                    <Unlock className="h-3 w-3" /> Free
                                  </span>
                                </SelectItem>
                                <SelectItem value="starter">
                                  <span className="flex items-center gap-2">
                                    <Star className="h-3 w-3 text-blue-500" /> Starter+
                                  </span>
                                </SelectItem>
                                <SelectItem value="professional">
                                  <span className="flex items-center gap-2">
                                    <Sparkles className="h-3 w-3 text-purple-500" /> Professional+
                                  </span>
                                </SelectItem>
                                <SelectItem value="enterprise">
                                  <span className="flex items-center gap-2">
                                    <Crown className="h-3 w-3 text-amber-500" /> Enterprise
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