import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export interface Company {
  id: string;
  name: string;
  slug: string;
  custom_domain: string | null;
  is_active: boolean;
  is_master: boolean;
  created_at: string;
  updated_at: string;
}

export interface CompanyBranding {
  id: string;
  company_id: string;
  platform_name: string;
  logo_url: string | null;
  favicon_url: string | null;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  background_color: string;
  text_color: string;
  font_family: string;
  custom_css: string | null;
}

export interface CompanySettings {
  id: string;
  company_id: string;
  active_languages: string[];
  default_language: string;
  registration_code: string | null;
  require_approval: boolean;
  welcome_message: string | null;
  support_email: string | null;
  timezone: string;
}

export interface CompanySubscription {
  id: string;
  company_id: string;
  plan_id: string;
  status: string;
  started_at: string;
  expires_at: string | null;
  trial_ends_at: string | null;
  billing_cycle: string;
  plan?: SubscriptionPlan;
}

export interface SubscriptionPlan {
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
}

export interface CompanyUser {
  id: string;
  user_id: string;
  company_id: string;
  role: 'super_admin' | 'company_admin' | 'user';
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  approved_by: string | null;
  approved_at: string | null;
  created_at: string;
}

interface CompanyContextType {
  company: Company | null;
  branding: CompanyBranding | null;
  settings: CompanySettings | null;
  subscription: CompanySubscription | null;
  companyUser: CompanyUser | null;
  loading: boolean;
  isSuperAdmin: boolean;
  isCompanyAdmin: boolean;
  isPendingApproval: boolean;
  hasFeature: (feature: 'certificates' | 'ai_tutor' | 'analytics' | 'custom_branding') => boolean;
  refreshCompany: () => Promise<void>;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export function CompanyProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [company, setCompany] = useState<Company | null>(null);
  const [branding, setBranding] = useState<CompanyBranding | null>(null);
  const [settings, setSettings] = useState<CompanySettings | null>(null);
  const [subscription, setSubscription] = useState<CompanySubscription | null>(null);
  const [companyUser, setCompanyUser] = useState<CompanyUser | null>(null);
  const [loading, setLoading] = useState(true);

  const detectCompanyFromDomain = async (): Promise<Company | null> => {
    const hostname = window.location.hostname;
    
    // Use RPC function to get company branding by domain (works for unauthenticated users too)
    const { data: brandingData } = await supabase.rpc('get_company_branding_by_domain', {
      p_domain: hostname
    });
    
    if (brandingData && brandingData.length > 0) {
      const bd = brandingData[0];
      // Set branding immediately from RPC response
      setBranding({
        id: '',
        company_id: bd.company_id,
        platform_name: bd.platform_name || 'Training Platform',
        logo_url: bd.logo_url,
        favicon_url: bd.favicon_url,
        primary_color: bd.primary_color || '#1e40af',
        secondary_color: bd.secondary_color || '#3b82f6',
        accent_color: bd.accent_color || '#f59e0b',
        background_color: bd.background_color || '#ffffff',
        text_color: bd.text_color || '#1f2937',
        font_family: bd.font_family || 'Inter',
        custom_css: bd.custom_css
      });
      
      return {
        id: bd.company_id,
        name: bd.company_name,
        slug: bd.company_slug,
        custom_domain: null,
        is_active: true,
        is_master: false,
        created_at: '',
        updated_at: ''
      };
    }
    
    return null;
  };

  const fetchCompanyData = async (companyId: string) => {
    const hostname = window.location.hostname;
    
    // Use RPC to get settings (works for unauthenticated users)
    const { data: settingsData } = await supabase.rpc('get_company_settings_by_domain', {
      p_domain: hostname
    });
    
    if (settingsData && settingsData.length > 0) {
      const sd = settingsData[0];
      setSettings({
        id: '',
        company_id: companyId,
        active_languages: sd.active_languages || ['ro'],
        default_language: sd.default_language || 'ro',
        registration_code: null, // Not exposed for security
        require_approval: false,
        welcome_message: sd.welcome_message,
        support_email: null,
        timezone: sd.timezone || 'Europe/Bucharest'
      });
    }
    
    // Subscription can be fetched directly as subscription_plans is public
    const { data: subscriptionRes } = await supabase
      .from('company_subscriptions')
      .select(`*, plan:subscription_plans(*)`)
      .eq('company_id', companyId)
      .maybeSingle();

    if (subscriptionRes) {
      const sub = subscriptionRes as any;
      setSubscription({
        ...sub,
        plan: sub.plan
      });
    }
  };

  const fetchUserCompanyRole = async (userId: string, companyId: string) => {
    const { data } = await supabase
      .from('company_users')
      .select('*')
      .eq('user_id', userId)
      .eq('company_id', companyId)
      .single();
    
    if (data) setCompanyUser(data as CompanyUser);
  };

  const refreshCompany = useCallback(async () => {
    setLoading(true);
    try {
      const detectedCompany = await detectCompanyFromDomain();
      if (detectedCompany) {
        setCompany(detectedCompany);
        await fetchCompanyData(detectedCompany.id);
        
        if (user) {
          await fetchUserCompanyRole(user.id, detectedCompany.id);
        }
      }
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    refreshCompany();
  }, [refreshCompany]);

  // Apply branding to CSS variables
  useEffect(() => {
    if (branding) {
      const root = document.documentElement;
      
      // Convert hex to HSL for Tailwind compatibility
      const hexToHSL = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (!result) return null;
        
        let r = parseInt(result[1], 16) / 255;
        let g = parseInt(result[2], 16) / 255;
        let b = parseInt(result[3], 16) / 255;
        
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = 0, s = 0;
        const l = (max + min) / 2;
        
        if (max !== min) {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
          }
        }
        
        return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
      };

      const primaryHSL = hexToHSL(branding.primary_color);
      const secondaryHSL = hexToHSL(branding.secondary_color);
      const accentHSL = hexToHSL(branding.accent_color);

      if (primaryHSL) root.style.setProperty('--primary', primaryHSL);
      if (secondaryHSL) root.style.setProperty('--secondary', secondaryHSL);
      if (accentHSL) root.style.setProperty('--accent', accentHSL);
      
      // Update favicon if set
      if (branding.favicon_url) {
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = branding.favicon_url;
        document.getElementsByTagName('head')[0].appendChild(link);
      }

      // Update page title
      if (branding.platform_name) {
        document.title = branding.platform_name;
      }

      // Apply custom CSS if provided
      if (branding.custom_css) {
        const styleId = 'company-custom-css';
        let styleElement = document.getElementById(styleId);
        if (!styleElement) {
          styleElement = document.createElement('style');
          styleElement.id = styleId;
          document.head.appendChild(styleElement);
        }
        styleElement.textContent = branding.custom_css;
      }
    }
  }, [branding]);

  // Memoize computed values to prevent unnecessary re-renders
  const isSuperAdmin = useMemo(() => 
    companyUser?.role === 'super_admin' && companyUser?.status === 'approved', 
    [companyUser?.role, companyUser?.status]
  );
  
  const isCompanyAdmin = useMemo(() => 
    (companyUser?.role === 'company_admin' || companyUser?.role === 'super_admin') && companyUser?.status === 'approved',
    [companyUser?.role, companyUser?.status]
  );
  
  const isPendingApproval = useMemo(() => 
    companyUser?.status === 'pending',
    [companyUser?.status]
  );

  const hasFeature = useCallback((feature: 'certificates' | 'ai_tutor' | 'analytics' | 'custom_branding'): boolean => {
    if (!subscription?.plan) return false;
    
    switch (feature) {
      case 'certificates': return subscription.plan.has_certificates;
      case 'ai_tutor': return subscription.plan.has_ai_tutor;
      case 'analytics': return subscription.plan.has_analytics;
      case 'custom_branding': return subscription.plan.has_custom_branding;
      default: return false;
    }
  }, [subscription?.plan]);

  return (
    <CompanyContext.Provider value={{
      company,
      branding,
      settings,
      subscription,
      companyUser,
      loading,
      isSuperAdmin,
      isCompanyAdmin,
      isPendingApproval,
      hasFeature,
      refreshCompany,
    }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
}
