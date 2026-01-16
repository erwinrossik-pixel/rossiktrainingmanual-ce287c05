import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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

      toast({ title: 'Plan actualizat' });
      setEditingPlan(null);
      fetchPlans();
    } catch (error) {
      toast({ title: 'Eroare', variant: 'destructive' });
    }
  };

  if (!isSuperAdmin) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Acces restricționat</CardTitle>
          <CardDescription>Doar Super Admin poate gestiona planurile.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const getPlanColor = (planType: string) => {
    switch (planType) {
      case 'free': return 'bg-gray-100 border-gray-300';
      case 'starter': return 'bg-blue-50 border-blue-300';
      case 'professional': return 'bg-purple-50 border-purple-300';
      case 'enterprise': return 'bg-amber-50 border-amber-300';
      default: return 'bg-gray-50';
    }
  };

  const getPlanBadge = (planType: string) => {
    switch (planType) {
      case 'free': return <Badge variant="secondary">Free</Badge>;
      case 'starter': return <Badge className="bg-blue-500">Starter</Badge>;
      case 'professional': return <Badge className="bg-purple-500">Professional</Badge>;
      case 'enterprise': return <Badge className="bg-amber-500">Enterprise</Badge>;
      default: return <Badge>{planType}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Planuri de Abonament</h2>
        <p className="text-muted-foreground">Configurează planurile disponibile pentru companii</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <Card key={plan.id} className={`${getPlanColor(plan.plan_type)} border-2 ${!plan.is_active ? 'opacity-50' : ''}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  {getPlanBadge(plan.plan_type)}
                  <Button variant="ghost" size="sm" onClick={() => setEditingPlan(plan)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">€{plan.price_monthly}</span>
                  <span className="text-muted-foreground">/lună</span>
                  <p className="text-sm text-muted-foreground">sau €{plan.price_yearly}/an</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{plan.max_users ?? '∞'} utilizatori</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{plan.max_chapters ?? 'Toate'} capitole</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className={`h-4 w-4 ${plan.has_certificates ? 'text-green-600' : 'text-gray-400'}`} />
                    <span className={!plan.has_certificates ? 'text-gray-400' : ''}>Certificate</span>
                    {plan.has_certificates && <Check className="h-3 w-3 text-green-600" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <Bot className={`h-4 w-4 ${plan.has_ai_tutor ? 'text-green-600' : 'text-gray-400'}`} />
                    <span className={!plan.has_ai_tutor ? 'text-gray-400' : ''}>AI Tutor</span>
                    {plan.has_ai_tutor && <Check className="h-3 w-3 text-green-600" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className={`h-4 w-4 ${plan.has_analytics ? 'text-green-600' : 'text-gray-400'}`} />
                    <span className={!plan.has_analytics ? 'text-gray-400' : ''}>Analytics</span>
                    {plan.has_analytics && <Check className="h-3 w-3 text-green-600" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className={`h-4 w-4 ${plan.has_custom_branding ? 'text-green-600' : 'text-gray-400'}`} />
                    <span className={!plan.has_custom_branding ? 'text-gray-400' : ''}>Branding Custom</span>
                    {plan.has_custom_branding && <Check className="h-3 w-3 text-green-600" />}
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
              <DialogTitle>Editează Plan: {editingPlan.name}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Nume Plan</Label>
                <Input
                  value={editingPlan.name}
                  onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Preț Lunar (€)</Label>
                  <Input
                    type="number"
                    value={editingPlan.price_monthly}
                    onChange={(e) => setEditingPlan({ ...editingPlan, price_monthly: parseFloat(e.target.value) })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Preț Anual (€)</Label>
                  <Input
                    type="number"
                    value={editingPlan.price_yearly}
                    onChange={(e) => setEditingPlan({ ...editingPlan, price_yearly: parseFloat(e.target.value) })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Max Utilizatori (gol = nelimitat)</Label>
                  <Input
                    type="number"
                    value={editingPlan.max_users ?? ''}
                    onChange={(e) => setEditingPlan({ ...editingPlan, max_users: e.target.value ? parseInt(e.target.value) : null })}
                    placeholder="Nelimitat"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Max Capitole (gol = toate)</Label>
                  <Input
                    type="number"
                    value={editingPlan.max_chapters ?? ''}
                    onChange={(e) => setEditingPlan({ ...editingPlan, max_chapters: e.target.value ? parseInt(e.target.value) : null })}
                    placeholder="Toate"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Funcționalități</Label>
                <div className="flex items-center justify-between">
                  <span>Certificate</span>
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
                  <span>Branding Custom</span>
                  <Switch
                    checked={editingPlan.has_custom_branding}
                    onCheckedChange={(checked) => setEditingPlan({ ...editingPlan, has_custom_branding: checked })}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <span className="font-medium">Plan Activ</span>
                <Switch
                  checked={editingPlan.is_active}
                  onCheckedChange={(checked) => setEditingPlan({ ...editingPlan, is_active: checked })}
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setEditingPlan(null)}>Anulează</Button>
              <Button onClick={savePlan}>Salvează</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
