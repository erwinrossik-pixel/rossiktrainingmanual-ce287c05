import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, Crown, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';
import { PlanType, getUpgradeMessage } from '@/hooks/useSubscription';
import { UpgradeModal } from './UpgradeModal';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaywallOverlayProps {
  requiredPlan: PlanType;
  featureName?: string;
  children?: React.ReactNode;
  className?: string;
}

const translations = {
  ro: {
    premiumContent: 'Conținut Premium',
    upgradeNow: 'Upgrade Acum',
    upgradeDescription: (feature: string) => 
      `Faceți upgrade pentru a accesa ${feature} și multe alte funcționalități avansate.`,
  },
  en: {
    premiumContent: 'Premium Content',
    upgradeNow: 'Upgrade Now',
    upgradeDescription: (feature: string) => 
      `Upgrade to access ${feature} and many other advanced features.`,
  },
  de: {
    premiumContent: 'Premium-Inhalt',
    upgradeNow: 'Jetzt Upgraden',
    upgradeDescription: (feature: string) => 
      `Führen Sie ein Upgrade durch, um auf ${feature} und viele andere erweiterte Funktionen zuzugreifen.`,
  },
  ru: {
    premiumContent: 'Премиум контент',
    upgradeNow: 'Обновить сейчас',
    upgradeDescription: (feature: string) => 
      `Обновите, чтобы получить доступ к ${feature} и многим другим расширенным функциям.`,
  },
  pl: {
    premiumContent: 'Treść Premium',
    upgradeNow: 'Ulepsz Teraz',
    upgradeDescription: (feature: string) => 
      `Uaktualnij, aby uzyskać dostęp do ${feature} i wielu innych zaawansowanych funkcji.`,
  },
  hu: {
    premiumContent: 'Prémium tartalom',
    upgradeNow: 'Frissítés Most',
    upgradeDescription: (feature: string) => 
      `Frissítsen a(z) ${feature} és sok más fejlett funkció eléréséhez.`,
  }
};

export function PaywallOverlay({ 
  requiredPlan, 
  featureName = 'acest conținut',
  children,
  className = ''
}: PaywallOverlayProps) {
  const [showUpgrade, setShowUpgrade] = useState(false);
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.ro;

  const getPlanColor = (plan: PlanType) => {
    switch (plan) {
      case 'starter': return 'bg-blue-500 hover:bg-blue-600';
      case 'professional': return 'bg-purple-500 hover:bg-purple-600';
      case 'enterprise': return 'bg-gradient-to-r from-amber-500 to-orange-500';
      default: return 'bg-muted';
    }
  };

  const getPlanIcon = (plan: PlanType) => {
    switch (plan) {
      case 'enterprise': return <Crown className="h-10 w-10 text-amber-500" />;
      case 'professional': return <Sparkles className="h-10 w-10 text-purple-500" />;
      case 'starter': return <Star className="h-10 w-10 text-blue-500" />;
      default: return <Lock className="h-10 w-10 text-muted-foreground" />;
    }
  };

  const getPlanGradient = (plan: PlanType) => {
    switch (plan) {
      case 'enterprise': return 'from-amber-500/20 via-orange-500/10 to-transparent';
      case 'professional': return 'from-purple-500/20 via-purple-500/10 to-transparent';
      case 'starter': return 'from-blue-500/20 via-blue-500/10 to-transparent';
      default: return 'from-muted/50 to-transparent';
    }
  };

  return (
    <>
      <div className={`relative ${className}`}>
        {children && (
          <div className="blur-md pointer-events-none select-none opacity-40 scale-[0.98]">
            {children}
          </div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-b ${getPlanGradient(requiredPlan)} backdrop-blur-sm`} />
          
          <Card className="relative max-w-md mx-4 shadow-2xl border-2 border-border/50 bg-card/95 backdrop-blur-md overflow-hidden">
            {/* Decorative top gradient */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
              requiredPlan === 'enterprise' ? 'from-amber-500 to-orange-500' :
              requiredPlan === 'professional' ? 'from-purple-500 to-pink-500' :
              'from-blue-500 to-cyan-500'
            }`} />
            
            <CardHeader className="text-center pb-2 pt-8">
              <div className={`mx-auto mb-4 p-5 rounded-2xl bg-gradient-to-br ${
                requiredPlan === 'enterprise' ? 'from-amber-100 to-orange-50' :
                requiredPlan === 'professional' ? 'from-purple-100 to-pink-50' :
                'from-blue-100 to-cyan-50'
              } shadow-lg`}>
                {getPlanIcon(requiredPlan)}
              </div>
              <Badge className={`${getPlanColor(requiredPlan)} text-white mx-auto mb-3 px-4 py-1`}>
                {requiredPlan.charAt(0).toUpperCase() + requiredPlan.slice(1)} Plan
              </Badge>
              <CardTitle className="text-2xl font-bold">{t.premiumContent}</CardTitle>
              <CardDescription className="text-base mt-2">
                {getUpgradeMessage(requiredPlan)}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-5 pb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.upgradeDescription(featureName)}
              </p>
              <Button 
                onClick={() => setShowUpgrade(true)}
                className={`w-full ${getPlanColor(requiredPlan)} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                size="lg"
              >
                <Crown className="h-5 w-5 mr-2" />
                {t.upgradeNow}
                <ArrowRight className="h-5 w-5 ml-2" />
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