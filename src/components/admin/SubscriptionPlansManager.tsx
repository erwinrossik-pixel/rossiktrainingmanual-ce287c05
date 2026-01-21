import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
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
      console.error('Error fetching plans:', error);
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
      case 'free': return 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-300';
      case 'starter': return 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300';
      case 'professional': return 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300';
      case 'enterprise': return 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-amber-300';
      default: return 'bg-gray-50';
    }
  };

  const getPlanBadge = (planType: string) => {
    switch (planType) {
      case 'free': return <Badge variant="secondary" className="bg-slate-600 text-white font-bold px-3 py-1 shadow-sm">Free</Badge>;
      case 'starter': return <Badge className="bg-blue-500 text-white font-bold px-3 py-1 shadow-md">Starter</Badge>;
      case 'professional': return <Badge className="bg-purple-500 text-white font-bold px-3 py-1 shadow-md">Professional</Badge>;
      case 'enterprise': return <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-3 py-1 shadow-md">Enterprise</Badge>;
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
                <CardTitle className="text-2xl font-black text-slate-800">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-5 p-4 bg-white/60 rounded-xl border shadow-inner">
                  <span className="text-4xl font-black text-slate-800">€{plan.price_monthly}</span>
                  <span className="text-slate-600 font-medium">{t('admin.plans.perMonth')}</span>
                  <p className="text-sm text-slate-500 mt-1 font-medium">€{plan.price_yearly}{t('admin.plans.perYear')} (-17%)</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-2 bg-white/40 rounded-lg">
                    <div className="p-1.5 bg-blue-500 rounded-md">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-slate-700">{plan.max_users ?? '∞'} {t('admin.plans.users')}</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white/40 rounded-lg">
                    <div className="p-1.5 bg-purple-500 rounded-md">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-slate-700">{plan.max_chapters ?? t('admin.plans.all')} {t('admin.plans.chapters')}</span>
                  </div>
                  <div className={`flex items-center gap-3 p-2 rounded-lg ${plan.has_certificates ? 'bg-emerald-100/80' : 'bg-slate-100/80'}`}>
                    <div className={`p-1.5 rounded-md ${plan.has_certificates ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <CreditCard className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-semibold ${plan.has_certificates ? 'text-emerald-700' : 'text-slate-400'}`}>{t('admin.plans.certificates')}</span>
                    {plan.has_certificates && <Check className="h-4 w-4 text-emerald-600 ml-auto" />}
                  </div>
                  <div className={`flex items-center gap-3 p-2 rounded-lg ${plan.has_ai_tutor ? 'bg-emerald-100/80' : 'bg-slate-100/80'}`}>
                    <div className={`p-1.5 rounded-md ${plan.has_ai_tutor ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-semibold ${plan.has_ai_tutor ? 'text-emerald-700' : 'text-slate-400'}`}>AI Tutor</span>
                    {plan.has_ai_tutor && <Check className="h-4 w-4 text-emerald-600 ml-auto" />}
                  </div>
                  <div className={`flex items-center gap-3 p-2 rounded-lg ${plan.has_analytics ? 'bg-emerald-100/80' : 'bg-slate-100/80'}`}>
                    <div className={`p-1.5 rounded-md ${plan.has_analytics ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <BarChart3 className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-semibold ${plan.has_analytics ? 'text-emerald-700' : 'text-slate-400'}`}>Analytics</span>
                    {plan.has_analytics && <Check className="h-4 w-4 text-emerald-600 ml-auto" />}
                  </div>
                  <div className={`flex items-center gap-3 p-2 rounded-lg ${plan.has_custom_branding ? 'bg-emerald-100/80' : 'bg-slate-100/80'}`}>
                    <div className={`p-1.5 rounded-md ${plan.has_custom_branding ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                      <Palette className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-semibold ${plan.has_custom_branding ? 'text-emerald-700' : 'text-slate-400'}`}>{t('admin.plans.customBranding')}</span>
                    {plan.has_custom_branding && <Check className="h-4 w-4 text-emerald-600 ml-auto" />}
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