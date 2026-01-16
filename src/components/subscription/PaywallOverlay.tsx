import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { PlanType, getUpgradeMessage } from '@/hooks/useSubscription';
import { UpgradeModal } from './UpgradeModal';

interface PaywallOverlayProps {
  requiredPlan: PlanType;
  featureName?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PaywallOverlay({ 
  requiredPlan, 
  featureName = 'acest conținut',
  children,
  className = ''
}: PaywallOverlayProps) {
  const [showUpgrade, setShowUpgrade] = useState(false);

  const getPlanColor = (plan: PlanType) => {
    switch (plan) {
      case 'starter': return 'bg-blue-500';
      case 'professional': return 'bg-purple-500';
      case 'enterprise': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  const getPlanIcon = (plan: PlanType) => {
    switch (plan) {
      case 'enterprise': return <Crown className="h-8 w-8 text-amber-500" />;
      case 'professional': return <Sparkles className="h-8 w-8 text-purple-500" />;
      default: return <Lock className="h-8 w-8 text-blue-500" />;
    }
  };

  return (
    <>
      <div className={`relative ${className}`}>
        {children && (
          <div className="blur-sm pointer-events-none select-none opacity-50">
            {children}
          </div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <Card className="max-w-md mx-4 shadow-2xl border-2">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 p-4 rounded-full bg-muted">
                {getPlanIcon(requiredPlan)}
              </div>
              <Badge className={`${getPlanColor(requiredPlan)} mx-auto mb-2`}>
                {requiredPlan.charAt(0).toUpperCase() + requiredPlan.slice(1)} Plan
              </Badge>
              <CardTitle className="text-xl">Conținut Premium</CardTitle>
              <CardDescription className="text-base">
                {getUpgradeMessage(requiredPlan)}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Faceți upgrade pentru a accesa <strong>{featureName}</strong> și multe alte funcționalități avansate.
              </p>
              <Button 
                onClick={() => setShowUpgrade(true)}
                className="w-full bg-gradient-to-r from-primary to-primary/80"
                size="lg"
              >
                <Crown className="h-4 w-4 mr-2" />
                Upgrade Acum
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <UpgradeModal 
        open={showUpgrade} 
        onOpenChange={setShowUpgrade}
        highlightPlan={requiredPlan}
      />
    </>
  );
}