import { useCompany } from '@/contexts/CompanyContext';
import { useMemo } from 'react';

export type PlanType = 'free' | 'starter' | 'professional' | 'enterprise';

const PLAN_HIERARCHY: Record<PlanType, number> = {
  free: 0,
  starter: 1,
  professional: 2,
  enterprise: 3
};

export interface SubscriptionStatus {
  isActive: boolean;
  isTrialing: boolean;
  trialDaysRemaining: number | null;
  currentPlan: PlanType;
  canAccessFeature: (feature: 'certificates' | 'ai_tutor' | 'analytics' | 'custom_branding') => boolean;
  canAccessChapter: (chapterMinPlan?: PlanType) => boolean;
  requiresUpgrade: (requiredPlan: PlanType) => boolean;
  isExpired: boolean;
  isPending: boolean;
}

export function useSubscription(): SubscriptionStatus {
  const { subscription, hasFeature } = useCompany();

  return useMemo(() => {
    const now = new Date();
    
    // Determine subscription status
    const status = subscription?.status || 'inactive';
    const isActive = status === 'active' || status === 'trialing';
    const isTrialing = status === 'trialing' || (subscription?.trial_ends_at && new Date(subscription.trial_ends_at) > now);
    const isPending = status === 'pending';
    
    // Calculate trial days remaining
    let trialDaysRemaining: number | null = null;
    if (subscription?.trial_ends_at) {
      const trialEnd = new Date(subscription.trial_ends_at);
      const diffMs = trialEnd.getTime() - now.getTime();
      trialDaysRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
    }

    // Check if expired
    const isExpired = subscription?.expires_at 
      ? new Date(subscription.expires_at) < now && !isTrialing
      : false;

    // Get current plan type
    const currentPlan: PlanType = subscription?.plan?.plan_type || 'free';

    // Check if user can access a chapter based on minimum plan requirement
    const canAccessChapter = (chapterMinPlan?: PlanType): boolean => {
      if (!chapterMinPlan) return true; // No restriction
      if (!isActive && !isTrialing) return false;
      
      const currentLevel = PLAN_HIERARCHY[currentPlan];
      const requiredLevel = PLAN_HIERARCHY[chapterMinPlan];
      
      return currentLevel >= requiredLevel;
    };

    // Check if upgrade is required for a specific plan
    const requiresUpgrade = (requiredPlan: PlanType): boolean => {
      const currentLevel = PLAN_HIERARCHY[currentPlan];
      const requiredLevel = PLAN_HIERARCHY[requiredPlan];
      
      return currentLevel < requiredLevel;
    };

    return {
      isActive,
      isTrialing,
      trialDaysRemaining,
      currentPlan,
      canAccessFeature: hasFeature,
      canAccessChapter,
      requiresUpgrade,
      isExpired,
      isPending
    };
  }, [subscription, hasFeature]);
}

// Helper to get upgrade message
export function getUpgradeMessage(requiredPlan: PlanType): string {
  const planNames: Record<PlanType, string> = {
    free: 'Free',
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise'
  };
  
  return `Acest conținut necesită planul ${planNames[requiredPlan]} sau superior.`;
}

// Helper to get feature name in Romanian
export function getFeatureName(feature: 'certificates' | 'ai_tutor' | 'analytics' | 'custom_branding'): string {
  const names: Record<string, string> = {
    certificates: 'Certificate',
    ai_tutor: 'AI Tutor',
    analytics: 'Analytics',
    custom_branding: 'Branding Personalizat'
  };
  return names[feature] || feature;
}