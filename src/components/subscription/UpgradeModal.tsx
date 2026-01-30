import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/contexts/CompanyContext';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { PlanType } from '@/hooks/useSubscription';
import { Check, Users, BookOpen, Award, Bot, BarChart3, Palette, Crown, Sparkles, Zap, Star } from 'lucide-react';

interface UpgradeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  highlightPlan?: PlanType;
}

interface Plan {
  id: string;
  name: string;
  plan_type: PlanType;
  max_users: number | null;
  max_chapters: number | null;
  has_certificates: boolean;
  has_ai_tutor: boolean;
  has_analytics: boolean;
  has_custom_branding: boolean;
  price_monthly: number;
  price_yearly: number;
  trial_days: number;
}

export function UpgradeModal({ open, onOpenChange, highlightPlan }: UpgradeModalProps) {
  const { subscription, company, refreshCompany } = useCompany();
  const { user } = useAuth();
  const { toast } = useToast();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  useEffect(() => {
    if (open) {
      fetchPlans();
    }
  }, [open]);

  const fetchPlans = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('is_active', true)
      .order('price_monthly', { ascending: true });
    
    setPlans((data || []) as Plan[]);
    setLoading(false);
  };

  const handleSelectPlan = async (plan: Plan) => {
    if (!company || !user) return;
    
    setProcessing(plan.id);
    
    try {
      const currentPlanType = subscription?.plan?.plan_type || 'free';
      const isUpgrade = getPlanLevel(plan.plan_type) > getPlanLevel(currentPlanType);
      const isDowngrade = getPlanLevel(plan.plan_type) < getPlanLevel(currentPlanType);
      
      // Calculate dates
      const now = new Date();
      const trialEnd = plan.trial_days > 0 && !subscription?.trial_ends_at
        ? new Date(now.getTime() + plan.trial_days * 24 * 60 * 60 * 1000).toISOString()
        : null;
      
      // Update subscription
      const { error } = await supabase
        .from('company_subscriptions')
        .upsert({
          company_id: company.id,
          plan_id: plan.id,
          status: trialEnd ? 'trialing' : 'active',
          billing_cycle: billingCycle,
          started_at: now.toISOString(),
          trial_ends_at: trialEnd,
          updated_at: now.toISOString()
        }, {
          onConflict: 'company_id'
        });

      if (error) throw error;

      // Log the change
      await supabase.from('subscription_history').insert({
        company_id: company.id,
        old_plan_id: subscription?.plan_id || null,
        new_plan_id: plan.id,
        change_type: trialEnd ? 'trial_start' : (isUpgrade ? 'upgrade' : isDowngrade ? 'downgrade' : 'upgrade'),
        changed_by: user.id,
        effective_date: now.toISOString()
      });

      toast({
        title: trialEnd ? 'Trial Activat!' : 'Plan Actualizat!',
        description: trialEnd 
          ? `Aveți ${plan.trial_days} zile de probă gratuită pentru planul ${plan.name}.`
          : `Ați trecut cu succes la planul ${plan.name}.`
      });

      await refreshCompany();
      onOpenChange(false);
    } catch (error) {
      console.error('Error updating plan:', error);
      toast({
        title: 'Eroare',
        description: 'Nu s-a putut actualiza planul. Încercați din nou.',
        variant: 'destructive'
      });
    } finally {
      setProcessing(null);
    }
  };

  const getPlanLevel = (planType: PlanType): number => {
    const levels: Record<PlanType, number> = { free: 0, starter: 1, professional: 2, enterprise: 3 };
    return levels[planType];
  };

  const getPlanIcon = (planType: PlanType) => {
    switch (planType) {
      case 'free': return <Zap className="h-6 w-6" />;
      case 'starter': return <Star className="h-6 w-6" />;
      case 'professional': return <Sparkles className="h-6 w-6" />;
      case 'enterprise': return <Crown className="h-6 w-6" />;
    }
  };

  const getPlanStyle = (planType: PlanType, isHighlighted: boolean) => {
    const base = isHighlighted ? 'ring-2 ring-offset-2' : '';
    switch (planType) {
      case 'free': return `${base} bg-muted ${isHighlighted ? 'ring-muted-foreground' : ''}`;
      case 'starter': return `${base} bg-info/10 ${isHighlighted ? 'ring-info' : ''}`;
      case 'professional': return `${base} bg-primary/10 ${isHighlighted ? 'ring-primary' : ''}`;
      case 'enterprise': return `${base} bg-gradient-to-br from-warning/20 to-warning/10 ${isHighlighted ? 'ring-warning' : ''}`;
    }
  };

  const currentPlanType = subscription?.plan?.plan_type || 'free';
  const price = (plan: Plan) => billingCycle === 'yearly' ? plan.price_yearly : plan.price_monthly * 12;
  const monthlyPrice = (plan: Plan) => billingCycle === 'yearly' 
    ? Math.round(plan.price_yearly / 12) 
    : plan.price_monthly;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Alegeți Planul Potrivit</DialogTitle>
          <DialogDescription>
            Selectați planul care se potrivește cel mai bine nevoilor companiei dumneavoastră
          </DialogDescription>
        </DialogHeader>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 py-4">
          <Label className={billingCycle === 'monthly' ? 'font-bold' : 'text-muted-foreground'}>
            Lunar
          </Label>
          <Switch
            checked={billingCycle === 'yearly'}
            onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
          />
          <Label className={billingCycle === 'yearly' ? 'font-bold' : 'text-muted-foreground'}>
            Anual <Badge variant="secondary" className="ml-1 bg-success/20 text-success">-17%</Badge>
          </Label>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan) => {
              const isCurrentPlan = plan.plan_type === currentPlanType;
              const isHighlighted = plan.plan_type === highlightPlan;
              const canSelect = getPlanLevel(plan.plan_type) !== getPlanLevel(currentPlanType);
              
              return (
                <Card 
                  key={plan.id} 
                  className={`relative transition-all ${getPlanStyle(plan.plan_type, isHighlighted)} ${isHighlighted ? 'scale-105' : ''}`}
                >
                  {isHighlighted && (
                    <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary">
                      Recomandat
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-2 text-center">
                    <div className={`mx-auto p-3 rounded-full mb-2 ${
                      plan.plan_type === 'enterprise' ? 'bg-warning/20 text-warning' :
                      plan.plan_type === 'professional' ? 'bg-primary/20 text-primary' :
                      plan.plan_type === 'starter' ? 'bg-info/20 text-info' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {getPlanIcon(plan.plan_type)}
                    </div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">€{monthlyPrice(plan)}</span>
                      <span className="text-muted-foreground">/lună</span>
                      {billingCycle === 'yearly' && (
                        <p className="text-xs text-muted-foreground">
                          Facturat €{plan.price_yearly}/an
                        </p>
                      )}
                    </div>
                    {plan.trial_days > 0 && !isCurrentPlan && (
                      <Badge variant="outline" className="mt-2 bg-success/10 text-success border-success/30">
                        {plan.trial_days} zile trial gratuit
                      </Badge>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{plan.max_users ?? '∞'} utilizatori</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{plan.max_chapters ?? 'Toate'} capitole</span>
                      </div>
                      
                      <FeatureRow icon={Award} enabled={plan.has_certificates} label="Certificate" />
                      <FeatureRow icon={Bot} enabled={plan.has_ai_tutor} label="AI Tutor" />
                      <FeatureRow icon={BarChart3} enabled={plan.has_analytics} label="Analytics" />
                      <FeatureRow icon={Palette} enabled={plan.has_custom_branding} label="Branding" />
                    </div>

                    <Button
                      onClick={() => handleSelectPlan(plan)}
                      disabled={isCurrentPlan || processing === plan.id}
                      className="w-full mt-4"
                      variant={isCurrentPlan ? 'secondary' : isHighlighted ? 'default' : 'outline'}
                    >
                      {processing === plan.id ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Se procesează...
                        </span>
                      ) : isCurrentPlan ? (
                        'Plan Curent'
                      ) : getPlanLevel(plan.plan_type) > getPlanLevel(currentPlanType) ? (
                        'Upgrade'
                      ) : (
                        'Downgrade'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function FeatureRow({ icon: Icon, enabled, label }: { icon: any; enabled: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-4 w-4 ${enabled ? 'text-success' : 'text-muted-foreground/50'}`} />
      <span className={enabled ? '' : 'text-muted-foreground'}>{label}</span>
      {enabled && <Check className="h-3 w-3 text-success ml-auto" />}
    </div>
  );
}