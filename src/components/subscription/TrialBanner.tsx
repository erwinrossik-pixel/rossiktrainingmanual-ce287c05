import { useState } from 'react';
import { useSubscription } from '@/hooks/useSubscription';
import { useCompany } from '@/contexts/CompanyContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Crown, AlertTriangle, X } from 'lucide-react';
import { UpgradeModal } from './UpgradeModal';

export function TrialBanner() {
  const { isTrialing, trialDaysRemaining, isExpired, currentPlan } = useSubscription();
  const { subscription } = useCompany();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;
  if (!isTrialing && !isExpired) return null;
  if (currentPlan === 'free') return null;

  const isUrgent = (trialDaysRemaining ?? 0) <= 3;

  if (isExpired) {
    return (
      <>
        <Alert className="bg-red-50 border-red-200 mb-4">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-red-700">
                Perioada de probă a expirat!
              </span>
              <span className="text-red-600">
                Faceți upgrade pentru a continua să utilizați funcționalitățile premium.
              </span>
            </div>
            <Button 
              size="sm" 
              onClick={() => setShowUpgrade(true)}
              className="bg-red-600 hover:bg-red-700"
            >
              <Crown className="h-4 w-4 mr-1" />
              Upgrade Acum
            </Button>
          </AlertDescription>
        </Alert>
        <UpgradeModal open={showUpgrade} onOpenChange={setShowUpgrade} />
      </>
    );
  }

  return (
    <>
      <Alert className={`mb-4 ${isUrgent ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200'}`}>
        <Clock className={`h-4 w-4 ${isUrgent ? 'text-amber-600' : 'text-blue-600'}`} />
        <AlertDescription className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Badge variant={isUrgent ? 'destructive' : 'secondary'} className="font-mono">
              {trialDaysRemaining} {trialDaysRemaining === 1 ? 'zi' : 'zile'}
            </Badge>
            <span className={isUrgent ? 'text-amber-700' : 'text-blue-700'}>
              rămase din perioada de probă pentru planul <strong>{subscription?.plan?.name}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              variant={isUrgent ? 'default' : 'outline'}
              onClick={() => setShowUpgrade(true)}
              className={isUrgent ? 'bg-amber-600 hover:bg-amber-700' : ''}
            >
              <Crown className="h-4 w-4 mr-1" />
              Activează Planul
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-6 w-6"
              onClick={() => setDismissed(true)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </AlertDescription>
      </Alert>
      <UpgradeModal open={showUpgrade} onOpenChange={setShowUpgrade} />
    </>
  );
}