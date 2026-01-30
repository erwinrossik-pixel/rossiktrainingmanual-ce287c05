import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';
import { useCompany } from '@/contexts/CompanyContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Check, Edit, Users, BookOpen, Bot, BarChart3, Palette } from 'lucide-react';

interface SubscriptionPlan {
  id: string;
  name: string;
  plan_type: 'free' | 'starter' | 'professional' | 'enterprise';
  max_users: number | null;
  max_chapters: number | null;
  has_certificates: boolean;
  has_ai_tutor: boolean;
  has_analytics: boolean;
  has_custom_branding: boolean;
  price_monthly: number;
  price_yearly: number;
  is_active: boolean;
}

export function SubscriptionPlansManager() {
  const { isSuperAdmin } = useCompany();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPlan, setEditingPlan] = useState<SubscriptionPlan | null>(null);

  useEffect(() => {
    if (isSuperAdmin) {
      fetchPlans();
    }
  }, [isSuperAdmin]);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('subscription_plans')
        .select('*')
        .order('price_monthly', { ascending: true });

      if (error) throw error;
      setPlans(data || []);
    } catch (error) {
      logger.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const savePlan = async () => {
    if (!editingPlan) return;

    try {
      await supabase
        .from('subscription_plans')
        .update({
          name: editingPlan.name,
          max_users: editingPlan.max_users,
          max_chapters: editingPlan.max_chapters,
          has_certificates: editingPlan.has_certificates,
          has_ai_tutor: editingPlan.has_ai_tutor,
          has_analytics: editingPlan.has_analytics,
          has_custom_branding: editingPlan.has_custom_branding,
          price_monthly: editingPlan.price_monthly,
          price_yearly: editingPlan.price_yearly,
          is_active: editingPlan.is_active
        })
        .eq('id', editingPlan.id);

      toast({ title: t('admin.plans.updated') });
      setEditingPlan(null);
      fetchPlans();
    } catch (error) {
      toast({ title: t('admin.general.error'), variant: 'destructive' });
    }
  };

  if (!isSuperAdmin) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.plans.restricted')}</CardTitle>
          <CardDescription>{t('admin.plans.restrictedDesc')}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const getPlanColor = (planType: string) => {
    switch (planType) {
      case 'free': return 'bg-gradient-to-br from-muted/50 to-muted border-border';
      case 'starter': return 'bg-gradient-to-br from-info/10 to-info/20 border-info/30';
      case 'professional': return 'bg-gradient-to-br from-primary/10 to-primary/20 border-primary/30';
      case 'enterprise': return 'bg-gradient-to-br from-warning/10 via-warning/5 to-warning/10 border-warning/30';
      default: return 'bg-muted';
    }
  };

  const getPlanBadge = (planType: string) => {
    switch (planType) {
      case 'free': return <Badge variant="secondary" className="bg-muted text-muted-foreground font-bold px-3 py-1 shadow-sm">Free</Badge>;
      case 'starter': return <Badge className="bg-info text-info-foreground font-bold px-3 py-1 shadow-md">Starter</Badge>;
      case 'professional': return <Badge className="bg-primary text-primary-foreground font-bold px-3 py-1 shadow-md">Professional</Badge>;
      case 'enterprise': return <Badge className="bg-gradient-to-r from-warning to-warning/80 text-warning-foreground font-bold px-3 py-1 shadow-md">Enterprise</Badge>;
      default: return <Badge>{planType}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-black flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <CreditCard className="h-6 w-6" />
          </div>
          {t('admin.plans.title')}
        </h2>
        <p className="text-white/80 font-medium mt-1">{t('admin.plans.subtitle')}</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <Card key={plan.id} className={`${getPlanColor(plan.plan_type)} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${!plan.is_active ? 'opacity-50' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  {getPlanBadge(plan.plan_type)}
                  <Button variant="ghost" size="sm" onClick={() => setEditingPlan(plan)} className="hover:bg-white/50">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-2xl font-black text-foreground">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-5 p-4 bg-background/60 rounded-xl border shadow-inner">
                  <span className="text-4xl font-black text-foreground">€{plan.price_monthly}</span>
                  <span className="text-muted-foreground font-medium">{t('admin.plans.perMonth')}</span>
                  <p className="text-sm text-muted-foreground/80 mt-1 font-medium">€{plan.price_yearly}{t('admin.plans.perYear')} (-17%)</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-2 bg-background/40 rounded-lg">
                    <div className="p-1.5 bg-info rounded-md">
                      <Users className="h-4 w-4 text-info-foreground" />
                    </div>
                    <span className="font-semibold text-foreground">{plan.max_users ?? '∞'} {t('admin.plans.users')}</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-background/40 rounded-lg">
                    <div className="p-1.5 bg-primary rounded-md">
                      <BookOpen className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-foreground">{plan.max_chapters ?? t('admin.plans.all')} {t('admin.plans.chapters')}</span>
                  </div>
                  <div className={`flex items-center gap-3 p-2 rounded-lg ${plan.has_certificates ? 'bg-success/10' : 'bg-muted/50'}`}>
                    <div className={`p-1.5 rounded-md ${plan.has_certificates ? 'bg-success' : 'bg-muted-foreground/30'}`}>
                      <CreditCard className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-semibold ${plan.has_certificates ? 'text-success' : 'text-muted-foreground'}`}>{t('admin.plans.certificates')}</span>
                    {plan.has_certificates && <Check className="h-4 w-4 text-success ml-auto" />}
                  </div>
                  <div className={`flex items-center gap-3 p-2 rounded-lg ${plan.has_ai_tutor ? 'bg-success/10' : 'bg-muted/50'}`}>
                    <div className={`p-1.5 rounded-md ${plan.has_ai_tutor ? 'bg-success' : 'bg-muted-foreground/30'}`}>
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-semibold ${plan.has_ai_tutor ? 'text-success' : 'text-muted-foreground'}`}>AI Tutor</span>
                    {plan.has_ai_tutor && <Check className="h-4 w-4 text-success ml-auto" />}
                  </div>
                  <div className={`flex items-center gap-3 p-2 rounded-lg ${plan.has_analytics ? 'bg-success/10' : 'bg-muted/50'}`}>
                    <div className={`p-1.5 rounded-md ${plan.has_analytics ? 'bg-success' : 'bg-muted-foreground/30'}`}>
                      <BarChart3 className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-semibold ${plan.has_analytics ? 'text-success' : 'text-muted-foreground'}`}>Analytics</span>
                    {plan.has_analytics && <Check className="h-4 w-4 text-success ml-auto" />}
                  </div>
                  <div className={`flex items-center gap-3 p-2 rounded-lg ${plan.has_custom_branding ? 'bg-success/10' : 'bg-muted/50'}`}>
                    <div className={`p-1.5 rounded-md ${plan.has_custom_branding ? 'bg-success' : 'bg-muted-foreground/30'}`}>
                      <Palette className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-semibold ${plan.has_custom_branding ? 'text-success' : 'text-muted-foreground'}`}>{t('admin.plans.customBranding')}</span>
                    {plan.has_custom_branding && <Check className="h-4 w-4 text-success ml-auto" />}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Plan Dialog */}
      {editingPlan && (
        <Dialog open onOpenChange={() => setEditingPlan(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{t('admin.plans.editPlan')}: {editingPlan.name}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>{t('admin.plans.planName')}</Label>
                <Input
                  value={editingPlan.name}
                  onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('admin.plans.monthlyPrice')}</Label>
                  <Input
                    type="number"
                    value={editingPlan.price_monthly}
                    onChange={(e) => setEditingPlan({ ...editingPlan, price_monthly: parseFloat(e.target.value) })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t('admin.plans.yearlyPrice')}</Label>
                  <Input
                    type="number"
                    value={editingPlan.price_yearly}
                    onChange={(e) => setEditingPlan({ ...editingPlan, price_yearly: parseFloat(e.target.value) })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('admin.plans.maxUsers')}</Label>
                  <Input
                    type="number"
                    value={editingPlan.max_users ?? ''}
                    onChange={(e) => setEditingPlan({ ...editingPlan, max_users: e.target.value ? parseInt(e.target.value) : null })}
                    placeholder={t('admin.plans.unlimited')}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t('admin.plans.maxChapters')}</Label>
                  <Input
                    type="number"
                    value={editingPlan.max_chapters ?? ''}
                    onChange={(e) => setEditingPlan({ ...editingPlan, max_chapters: e.target.value ? parseInt(e.target.value) : null })}
                    placeholder={t('admin.plans.all')}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label>{t('admin.plans.features')}</Label>
                <div className="flex items-center justify-between">
                  <span>{t('admin.plans.certificates')}</span>
                  <Switch
                    checked={editingPlan.has_certificates}
                    onCheckedChange={(checked) => setEditingPlan({ ...editingPlan, has_certificates: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>AI Tutor</span>
                  <Switch
                    checked={editingPlan.has_ai_tutor}
                    onCheckedChange={(checked) => setEditingPlan({ ...editingPlan, has_ai_tutor: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>Analytics</span>
                  <Switch
                    checked={editingPlan.has_analytics}
                    onCheckedChange={(checked) => setEditingPlan({ ...editingPlan, has_analytics: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('admin.plans.customBranding')}</span>
                  <Switch
                    checked={editingPlan.has_custom_branding}
                    onCheckedChange={(checked) => setEditingPlan({ ...editingPlan, has_custom_branding: checked })}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <span className="font-medium">{t('admin.plans.planActive')}</span>
                <Switch
                  checked={editingPlan.is_active}
                  onCheckedChange={(checked) => setEditingPlan({ ...editingPlan, is_active: checked })}
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setEditingPlan(null)}>{t('admin.plans.cancel')}</Button>
              <Button onClick={savePlan}>{t('admin.general.save')}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}