import { useState, memo } from 'react';
import { useSubscription } from '@/hooks/useSubscription';
import { useCompany } from '@/contexts/CompanyContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Crown, AlertTriangle, X, Sparkles } from 'lucide-react';
import { UpgradeModal } from './UpgradeModal';

const translations = {
  ro: {
    expired: 'Perioada de probă a expirat!',
    expiredDesc: 'Faceți upgrade pentru a continua să utilizați funcționalitățile premium.',
    upgradeNow: 'Upgrade Acum',
    activatePlan: 'Activează Planul',
    remaining: 'rămase din perioada de probă pentru planul',
    day: 'zi',
    days: 'zile',
  },
  en: {
    expired: 'Trial period has expired!',
    expiredDesc: 'Upgrade to continue using premium features.',
    upgradeNow: 'Upgrade Now',
    activatePlan: 'Activate Plan',
    remaining: 'remaining in trial for',
    day: 'day',
    days: 'days',
  },
  de: {
    expired: 'Die Testphase ist abgelaufen!',
    expiredDesc: 'Führen Sie ein Upgrade durch, um Premium-Funktionen weiter nutzen zu können.',
    upgradeNow: 'Jetzt Upgraden',
    activatePlan: 'Plan Aktivieren',
    remaining: 'verbleibend im Test für',
    day: 'Tag',
    days: 'Tage',
  },
  ru: {
    expired: 'Пробный период истёк!',
    expiredDesc: 'Обновите, чтобы продолжить использовать премиум-функции.',
    upgradeNow: 'Обновить сейчас',
    activatePlan: 'Активировать План',
    remaining: 'осталось в пробном периоде для',
    day: 'день',
    days: 'дней',
  },
  pl: {
    expired: 'Okres próbny wygasł!',
    expiredDesc: 'Uaktualnij, aby nadal korzystać z funkcji premium.',
    upgradeNow: 'Ulepsz Teraz',
    activatePlan: 'Aktywuj Plan',
    remaining: 'pozostało w okresie próbnym dla',
    day: 'dzień',
    days: 'dni',
  },
  hu: {
    expired: 'A próbaidőszak lejárt!',
    expiredDesc: 'Frissítsen a prémium funkciók további használatához.',
    upgradeNow: 'Frissítés Most',
    activatePlan: 'Plan Aktiválása',
    remaining: 'maradt a próbaidőszakból a(z)',
    day: 'nap',
    days: 'nap',
  }
};

export const TrialBanner = memo(function TrialBanner() {
  const { isTrialing, trialDaysRemaining, isExpired, currentPlan } = useSubscription();
  const { subscription } = useCompany();
  const { language } = useLanguage();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  
  const t = translations[language as keyof typeof translations] || translations.ro;

  if (dismissed) return null;
  if (!isTrialing && !isExpired) return null;
  if (currentPlan === 'free') return null;

  const isUrgent = (trialDaysRemaining ?? 0) <= 3;

  if (isExpired) {
    return (
      <>
        <Alert className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 mb-4 shadow-sm">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertDescription className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-red-700 text-base">
                {t.expired}
              </span>
              <span className="text-red-600/90">
                {t.expiredDesc}
              </span>
            </div>
            <Button 
              size="sm" 
              onClick={() => setShowUpgrade(true)}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md"
            >
              <Crown className="h-4 w-4 mr-2" />
              {t.upgradeNow}
            </Button>
          </AlertDescription>
        </Alert>
        <UpgradeModal open={showUpgrade} onOpenChange={setShowUpgrade} />
      </>
    );
  }

  return (
    <>
      <Alert className={`mb-4 shadow-sm ${
        isUrgent 
          ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200' 
          : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
      }`}>
        <Sparkles className={`h-5 w-5 ${isUrgent ? 'text-amber-600' : 'text-blue-600'}`} />
        <AlertDescription className="flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-3">
            <Badge 
              variant={isUrgent ? 'destructive' : 'secondary'} 
              className={`font-mono text-sm px-2.5 py-0.5 ${
                isUrgent 
                  ? 'bg-amber-600 hover:bg-amber-700' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Clock className="h-3.5 w-3.5 mr-1" />
              {trialDaysRemaining} {trialDaysRemaining === 1 ? t.day : t.days}
            </Badge>
            <span className={`${isUrgent ? 'text-amber-800' : 'text-blue-800'} font-medium`}>
              {t.remaining} <strong>{subscription?.plan?.name}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              onClick={() => setShowUpgrade(true)}
              className={`shadow-md ${
                isUrgent 
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              }`}
            >
              <Crown className="h-4 w-4 mr-2" />
              {t.activatePlan}
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-7 w-7 hover:bg-white/50"
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
});