import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useSubscription } from '@/hooks/useSubscription';
import { useCompany } from '@/contexts/CompanyContext';
import { UpgradeModal } from './UpgradeModal';
import { 
  Crown, Users, BookOpen, Award, Bot, BarChart3, Palette, 
  Calendar, CreditCard, ArrowUpRight, Check, X, Clock
} from 'lucide-react';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';

export function SubscriptionCard() {
  const { subscription } = useCompany();
  const { isActive, isTrialing, trialDaysRemaining, currentPlan, isExpired } = useSubscription();
  const [showUpgrade, setShowUpgrade] = useState(false);

  const plan = subscription?.plan;

  const getStatusBadge = () => {
    if (isExpired) {
      return <Badge variant="destructive">Expirat</Badge>;
    }
    if (isTrialing) {
      return <Badge className="bg-blue-500">Trial - {trialDaysRemaining} zile rămase</Badge>;
    }
    if (isActive) {
      return <Badge className="bg-green-500">Activ</Badge>;
    }
    return <Badge variant="secondary">Inactiv</Badge>;
  };

  const getPlanIcon = () => {
    switch (currentPlan) {
      case 'enterprise': return <Crown className="h-6 w-6 text-amber-500" />;
      case 'professional': return <Crown className="h-6 w-6 text-purple-500" />;
      case 'starter': return <Crown className="h-6 w-6 text-blue-500" />;
      default: return <Crown className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <>
      <Card className="border-2">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                currentPlan === 'enterprise' ? 'bg-amber-100' :
                currentPlan === 'professional' ? 'bg-purple-100' :
                currentPlan === 'starter' ? 'bg-blue-100' :
                'bg-gray-100'
              }`}>
                {getPlanIcon()}
              </div>
              <div>
                <CardTitle className="text-xl">{plan?.name || 'Free'}</CardTitle>
                <CardDescription>Plan de abonament curent</CardDescription>
              </div>
            </div>
            {getStatusBadge()}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Pricing Info */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">
              €{subscription?.billing_cycle === 'yearly' 
                ? Math.round((plan?.price_yearly || 0) / 12) 
                : plan?.price_monthly || 0}
            </span>
            <span className="text-muted-foreground">/lună</span>
            {subscription?.billing_cycle === 'yearly' && (
              <Badge variant="outline" className="ml-2 bg-green-50 text-green-700">
                Facturat anual
              </Badge>
            )}
          </div>

          {/* Trial Progress */}
          {isTrialing && trialDaysRemaining !== null && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Perioada de probă
                </span>
                <span className="font-medium">{trialDaysRemaining} zile rămase</span>
              </div>
              <Progress 
                value={((14 - trialDaysRemaining) / 14) * 100} 
                className="h-2"
              />
            </div>
          )}

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            <FeatureItem 
              icon={Users} 
              label="Utilizatori" 
              value={plan?.max_users ?? '∞'} 
              enabled 
            />
            <FeatureItem 
              icon={BookOpen} 
              label="Capitole" 
              value={plan?.max_chapters ?? 'Toate'} 
              enabled 
            />
            <FeatureItem 
              icon={Award} 
              label="Certificate" 
              enabled={plan?.has_certificates ?? false} 
            />
            <FeatureItem 
              icon={Bot} 
              label="AI Tutor" 
              enabled={plan?.has_ai_tutor ?? false} 
            />
            <FeatureItem 
              icon={BarChart3} 
              label="Analytics" 
              enabled={plan?.has_analytics ?? false} 
            />
            <FeatureItem 
              icon={Palette} 
              label="Branding" 
              enabled={plan?.has_custom_branding ?? false} 
            />
          </div>

          {/* Dates */}
          <div className="space-y-2 text-sm border-t pt-4">
            {subscription?.started_at && (
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Data începerii
                </span>
                <span>{format(new Date(subscription.started_at), 'dd MMMM yyyy', { locale: ro })}</span>
              </div>
            )}
            {subscription?.expires_at && (
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center gap-1">
                  <CreditCard className="h-4 w-4" />
                  Următoarea facturare
                </span>
                <span>{format(new Date(subscription.expires_at), 'dd MMMM yyyy', { locale: ro })}</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button 
              onClick={() => setShowUpgrade(true)} 
              className="flex-1"
              variant={currentPlan === 'enterprise' ? 'outline' : 'default'}
            >
              {currentPlan === 'enterprise' ? (
                'Gestionează Planul'
              ) : (
                <>
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  Upgrade Plan
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <UpgradeModal open={showUpgrade} onOpenChange={setShowUpgrade} />
    </>
  );
}

function FeatureItem({ 
  icon: Icon, 
  label, 
  value, 
  enabled 
}: { 
  icon: any; 
  label: string; 
  value?: string | number; 
  enabled: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 p-2 rounded-lg ${
      enabled ? 'bg-green-50' : 'bg-gray-50'
    }`}>
      <Icon className={`h-4 w-4 ${enabled ? 'text-green-600' : 'text-gray-400'}`} />
      <span className={`text-sm ${enabled ? '' : 'text-gray-400'}`}>
        {value !== undefined ? (
          <span className="font-medium">{value} {label}</span>
        ) : (
          label
        )}
      </span>
      {value === undefined && (
        enabled 
          ? <Check className="h-3 w-3 text-green-600 ml-auto" />
          : <X className="h-3 w-3 text-gray-400 ml-auto" />
      )}
    </div>
  );
}