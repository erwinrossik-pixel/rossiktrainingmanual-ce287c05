import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';
import { useCompany } from '@/contexts/CompanyContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Save, RotateCcw, Lock, Unlock, CheckCircle2 } from 'lucide-react';
import { CURRICULUM_SECTIONS, ALL_CHAPTERS } from '@/data/chaptersConfig';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ChapterStatus {
  chapter_id: string;
  is_active: boolean;
  is_premium: boolean;
  custom_order: number | null;
}

export function ChapterManagement() {
  const { company, isCompanyAdmin, isSuperAdmin, subscription } = useCompany();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [chapterStatuses, setChapterStatuses] = useState<Map<string, ChapterStatus>>(new Map());
  const [hasChanges, setHasChanges] = useState(false);

  const maxChapters = subscription?.plan?.max_chapters || ALL_CHAPTERS.length;
  const canManage = isSuperAdmin || isCompanyAdmin;

  useEffect(() => {
    if (company && canManage) {
      fetchChapterStatuses();
    }
  }, [company, canManage]);

  const fetchChapterStatuses = async () => {
    if (!company) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('company_chapters')
        .select('*')
        .eq('company_id', company.id);

      if (error) throw error;

      const statusMap = new Map<string, ChapterStatus>();
      
      // Initialize all chapters as active by default
      ALL_CHAPTERS.forEach((chapter, index) => {
        statusMap.set(chapter.id, {
          chapter_id: chapter.id,
          is_active: true,
          is_premium: false,
          custom_order: index
        });
      });

      // Override with saved settings
      data?.forEach((item: any) => {
        statusMap.set(item.chapter_id, {
          chapter_id: item.chapter_id,
          is_active: item.is_active,
          is_premium: item.is_premium,
          custom_order: item.custom_order
        });
      });

      setChapterStatuses(statusMap);
    } catch (error) {
      logger.error('Error fetching chapter statuses:', error);
      toast({ title: t('admin.general.error'), description: t('admin.chapters.loadError'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const toggleChapter = (chapterId: string) => {
    const current = chapterStatuses.get(chapterId);
    if (!current) return;

    const activeCount = Array.from(chapterStatuses.values()).filter(s => s.is_active).length;
    
    // Check max chapters limit when activating
    if (!current.is_active && activeCount >= maxChapters) {
      toast({
        title: t('admin.chapters.limitReached'),
        description: `${t('admin.chapters.limitDesc')} ${maxChapters} ${t('admin.chapters.activeChapters')}`,
        variant: 'destructive'
      });
      return;
    }

    const newStatuses = new Map(chapterStatuses);
    newStatuses.set(chapterId, {
      ...current,
      is_active: !current.is_active
    });
    setChapterStatuses(newStatuses);
    setHasChanges(true);
  };

  const togglePremium = (chapterId: string) => {
    const current = chapterStatuses.get(chapterId);
    if (!current) return;

    const newStatuses = new Map(chapterStatuses);
    newStatuses.set(chapterId, {
      ...current,
      is_premium: !current.is_premium
    });
    setChapterStatuses(newStatuses);
    setHasChanges(true);
  };

  const saveChanges = async () => {
    if (!company) return;
    
    setSaving(true);
    try {
      // Delete existing records
      await supabase
        .from('company_chapters')
        .delete()
        .eq('company_id', company.id);

      // Insert new records
      const records = Array.from(chapterStatuses.values()).map((status, index) => ({
        company_id: company.id,
        chapter_id: status.chapter_id,
        is_active: status.is_active,
        is_premium: status.is_premium,
        custom_order: index
      }));

      const { error } = await supabase
        .from('company_chapters')
        .insert(records);

      if (error) throw error;

      toast({ title: t('admin.chapters.saved'), description: t('admin.chapters.savedDesc') });
      setHasChanges(false);
    } catch (error: any) {
      toast({ title: t('admin.general.error'), description: error.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const resetToDefault = () => {
    const newStatuses = new Map<string, ChapterStatus>();
    ALL_CHAPTERS.forEach((chapter, index) => {
      newStatuses.set(chapter.id, {
        chapter_id: chapter.id,
        is_active: true,
        is_premium: false,
        custom_order: index
      });
    });
    setChapterStatuses(newStatuses);
    setHasChanges(true);
  };

  const activeCount = Array.from(chapterStatuses.values()).filter(s => s.is_active).length;
  const premiumCount = Array.from(chapterStatuses.values()).filter(s => s.is_premium).length;

  if (!canManage) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.chapters.restricted')}</CardTitle>
          <CardDescription>{t('admin.chapters.restrictedDesc')}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            {t('admin.chapters.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('admin.chapters.subtitle')} {company?.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={resetToDefault} disabled={saving}>
            <RotateCcw className="h-4 w-4 mr-2" />
            {t('admin.chapters.reset')}
          </Button>
          <Button onClick={saveChanges} disabled={saving || !hasChanges}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? t('admin.chapters.saving') : t('admin.chapters.save')}
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-primary">{activeCount}</div>
            <p className="text-sm text-muted-foreground">{t('admin.chapters.active')}</p>
            {maxChapters < ALL_CHAPTERS.length && (
              <p className="text-xs text-muted-foreground">{t('admin.chapters.maxOf')} {maxChapters}</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-warning">{premiumCount}</div>
            <p className="text-sm text-muted-foreground">{t('admin.chapters.premium')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-muted-foreground">
              {ALL_CHAPTERS.length - activeCount}
            </div>
            <p className="text-sm text-muted-foreground">{t('admin.chapters.disabled')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Chapters by Section */}
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{t('admin.chapters.config')}</CardTitle>
            <CardDescription>
              {t('admin.chapters.configDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" defaultValue={CURRICULUM_SECTIONS.map(s => s.titleKey)}>
              {CURRICULUM_SECTIONS.map((section) => {
                const sectionChapters = section.chapters;
                const activeInSection = sectionChapters.filter(c => 
                  chapterStatuses.get(c.id)?.is_active
                ).length;

                return (
                  <AccordionItem key={section.titleKey} value={section.titleKey}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{t(section.titleKey)}</span>
                        <Badge variant="secondary">
                          {activeInSection}/{sectionChapters.length}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        {sectionChapters.map((chapter, index) => {
                          const status = chapterStatuses.get(chapter.id);
                          const chapterNumber = ALL_CHAPTERS.findIndex(c => c.id === chapter.id) + 1;
                          
                          return (
                            <div
                              key={chapter.id}
                              className={`flex items-center justify-between p-3 rounded-lg border ${
                                status?.is_active ? 'bg-card' : 'bg-muted/50 opacity-60'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                  status?.is_active 
                                    ? 'bg-primary/10 text-primary' 
                                    : 'bg-muted text-muted-foreground'
                                }`}>
                                  {chapterNumber}
                                </div>
                                <div>
                                  <p className="font-medium text-sm">{t(chapter.labelKey)}</p>
                                  {status?.is_premium && (
                                    <Badge variant="outline" className="text-xs mt-1">
                                      <Lock className="h-3 w-3 mr-1" />
                                      Premium
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                {status?.is_active && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => togglePremium(chapter.id)}
                                    className={status?.is_premium ? 'text-warning' : 'text-muted-foreground'}
                                  >
                                    {status?.is_premium ? (
                                      <Lock className="h-4 w-4" />
                                    ) : (
                                      <Unlock className="h-4 w-4" />
                                    )}
                                  </Button>
                                )}
                                <Switch
                                  checked={status?.is_active ?? true}
                                  onCheckedChange={() => toggleChapter(chapter.id)}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
      )}

      {hasChanges && (
        <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <span className="text-sm">{t('admin.chapters.unsaved')}</span>
          <Button size="sm" variant="secondary" onClick={saveChanges} disabled={saving}>
            {t('admin.chapters.save')}
          </Button>
        </div>
      )}
    </div>
  );
}
