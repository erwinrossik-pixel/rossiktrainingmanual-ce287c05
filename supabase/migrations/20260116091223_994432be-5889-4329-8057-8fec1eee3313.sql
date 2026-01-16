-- ============================================================================
-- MULTI-TENANCY - TOTUL ÎN ORDINE CORECTĂ
-- ============================================================================

-- 1. ENUMS
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'company_role') THEN
    CREATE TYPE public.company_role AS ENUM ('super_admin', 'company_admin', 'user');
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_company_status') THEN
    CREATE TYPE public.user_company_status AS ENUM ('pending', 'approved', 'rejected', 'suspended');
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'plan_type') THEN
    CREATE TYPE public.plan_type AS ENUM ('free', 'starter', 'professional', 'enterprise');
  END IF;
END $$;

-- 2. TABELE (fără referințe circulare)
CREATE TABLE IF NOT EXISTS public.companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  custom_domain TEXT UNIQUE,
  is_active BOOLEAN DEFAULT true,
  is_master BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  plan_type public.plan_type NOT NULL UNIQUE,
  max_users INTEGER,
  max_chapters INTEGER,
  has_certificates BOOLEAN DEFAULT false,
  has_ai_tutor BOOLEAN DEFAULT false,
  has_analytics BOOLEAN DEFAULT false,
  has_custom_branding BOOLEAN DEFAULT false,
  price_monthly DECIMAL(10,2) DEFAULT 0,
  price_yearly DECIMAL(10,2) DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.company_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES public.subscription_plans(id),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired', 'trial')),
  started_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ,
  trial_ends_at TIMESTAMPTZ,
  billing_cycle TEXT DEFAULT 'monthly' CHECK (billing_cycle IN ('monthly', 'yearly')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(company_id)
);

CREATE TABLE IF NOT EXISTS public.company_branding (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE UNIQUE,
  platform_name TEXT DEFAULT 'Training Platform',
  logo_url TEXT,
  favicon_url TEXT,
  primary_color TEXT DEFAULT '#3b82f6',
  secondary_color TEXT DEFAULT '#1e40af',
  accent_color TEXT DEFAULT '#f59e0b',
  background_color TEXT DEFAULT '#ffffff',
  text_color TEXT DEFAULT '#1f2937',
  font_family TEXT DEFAULT 'Inter',
  custom_css TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.company_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE UNIQUE,
  active_languages TEXT[] DEFAULT ARRAY['ro', 'en', 'de'],
  default_language TEXT DEFAULT 'ro',
  registration_code TEXT UNIQUE,
  require_approval BOOLEAN DEFAULT true,
  welcome_message TEXT,
  support_email TEXT,
  timezone TEXT DEFAULT 'Europe/Bucharest',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.company_chapters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  chapter_id TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  is_premium BOOLEAN DEFAULT false,
  custom_order INTEGER,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(company_id, chapter_id)
);

CREATE TABLE IF NOT EXISTS public.company_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  role public.company_role DEFAULT 'user',
  status public.user_company_status DEFAULT 'pending',
  approved_by UUID,
  approved_at TIMESTAMPTZ,
  invited_by UUID,
  invited_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, company_id)
);

CREATE TABLE IF NOT EXISTS public.user_registration_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  status public.user_company_status DEFAULT 'pending',
  reviewed_by UUID,
  reviewed_at TIMESTAMPTZ,
  rejection_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. INDEXES
CREATE INDEX IF NOT EXISTS idx_companies_custom_domain ON public.companies(custom_domain);
CREATE INDEX IF NOT EXISTS idx_companies_slug ON public.companies(slug);
CREATE INDEX IF NOT EXISTS idx_company_users_user_id ON public.company_users(user_id);
CREATE INDEX IF NOT EXISTS idx_company_users_company_id ON public.company_users(company_id);
CREATE INDEX IF NOT EXISTS idx_company_users_status ON public.company_users(status);

-- 4. FUNCȚII HELPER
CREATE OR REPLACE FUNCTION public.get_user_company_id(_user_id UUID)
RETURNS UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT company_id 
  FROM public.company_users 
  WHERE user_id = _user_id 
    AND status = 'approved'
  LIMIT 1
$$;

CREATE OR REPLACE FUNCTION public.is_super_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.company_users cu
    JOIN public.companies c ON cu.company_id = c.id
    WHERE cu.user_id = _user_id 
      AND cu.role = 'super_admin'
      AND cu.status = 'approved'
      AND c.is_master = true
  )
$$;

CREATE OR REPLACE FUNCTION public.is_company_admin(_user_id UUID, _company_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.company_users 
    WHERE user_id = _user_id 
      AND company_id = _company_id
      AND role IN ('company_admin', 'super_admin')
      AND status = 'approved'
  )
$$;

CREATE OR REPLACE FUNCTION public.user_belongs_to_company(_user_id UUID, _company_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.company_users 
    WHERE user_id = _user_id 
      AND company_id = _company_id
      AND status = 'approved'
  )
$$;

CREATE OR REPLACE FUNCTION public.get_user_company_role(_user_id UUID, _company_id UUID)
RETURNS public.company_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role 
  FROM public.company_users 
  WHERE user_id = _user_id 
    AND company_id = _company_id
    AND status = 'approved'
$$;

-- 5. RLS - Enable
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_branding ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_registration_requests ENABLE ROW LEVEL SECURITY;

-- 6. RLS POLICIES
-- Companies
CREATE POLICY "Super admins can do everything on companies" ON public.companies
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Users can view their own company" ON public.companies
  FOR SELECT USING (public.user_belongs_to_company(auth.uid(), id));

CREATE POLICY "Anyone can view company by domain for login" ON public.companies
  FOR SELECT USING (custom_domain IS NOT NULL OR slug IS NOT NULL);

-- Subscription Plans
CREATE POLICY "Anyone can view active plans" ON public.subscription_plans
  FOR SELECT USING (is_active = true);

CREATE POLICY "Super admins manage plans" ON public.subscription_plans
  FOR ALL USING (public.is_super_admin(auth.uid()));

-- Company Subscriptions
CREATE POLICY "Super admins manage all subscriptions" ON public.company_subscriptions
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins view their subscription" ON public.company_subscriptions
  FOR SELECT USING (public.is_company_admin(auth.uid(), company_id));

-- Company Branding
CREATE POLICY "Super admins manage all branding" ON public.company_branding
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins manage their branding" ON public.company_branding
  FOR ALL USING (public.is_company_admin(auth.uid(), company_id));

CREATE POLICY "Users view their company branding" ON public.company_branding
  FOR SELECT USING (public.user_belongs_to_company(auth.uid(), company_id));

CREATE POLICY "Anyone can view branding for display" ON public.company_branding
  FOR SELECT USING (true);

-- Company Settings
CREATE POLICY "Super admins manage all settings" ON public.company_settings
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins manage their settings" ON public.company_settings
  FOR ALL USING (public.is_company_admin(auth.uid(), company_id));

CREATE POLICY "Users view their company settings" ON public.company_settings
  FOR SELECT USING (public.user_belongs_to_company(auth.uid(), company_id));

-- Company Chapters
CREATE POLICY "Super admins manage all chapters" ON public.company_chapters
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins manage their chapters" ON public.company_chapters
  FOR ALL USING (public.is_company_admin(auth.uid(), company_id));

CREATE POLICY "Users view their company chapters" ON public.company_chapters
  FOR SELECT USING (public.user_belongs_to_company(auth.uid(), company_id));

-- Company Users
CREATE POLICY "Super admins manage all company users" ON public.company_users
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins manage their users" ON public.company_users
  FOR ALL USING (public.is_company_admin(auth.uid(), company_id));

CREATE POLICY "Users view colleagues in their company" ON public.company_users
  FOR SELECT USING (public.user_belongs_to_company(auth.uid(), company_id));

CREATE POLICY "Users can view their own membership" ON public.company_users
  FOR SELECT USING (user_id = auth.uid());

-- Registration Requests
CREATE POLICY "Super admins manage all requests" ON public.user_registration_requests
  FOR ALL USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins manage their requests" ON public.user_registration_requests
  FOR ALL USING (public.is_company_admin(auth.uid(), company_id));

CREATE POLICY "Users can view their own requests" ON public.user_registration_requests
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Anyone can create registration request" ON public.user_registration_requests
  FOR INSERT WITH CHECK (true);

-- 7. Existing tables policies
CREATE POLICY "Company admins view company progress" ON public.chapter_progress
  FOR SELECT USING (
    public.is_company_admin(auth.uid(), public.get_user_company_id(user_id)) 
    AND public.user_belongs_to_company(user_id, public.get_user_company_id(auth.uid()))
  );

CREATE POLICY "Super admins view all progress" ON public.chapter_progress
  FOR SELECT USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins view company attempts" ON public.quiz_attempts
  FOR SELECT USING (
    public.is_company_admin(auth.uid(), public.get_user_company_id(user_id)) 
    AND public.user_belongs_to_company(user_id, public.get_user_company_id(auth.uid()))
  );

CREATE POLICY "Super admins view all attempts" ON public.quiz_attempts
  FOR SELECT USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins view company training time" ON public.training_time
  FOR SELECT USING (
    public.user_belongs_to_company(user_id, public.get_user_company_id(auth.uid()))
  );

CREATE POLICY "Super admins view all training time" ON public.training_time
  FOR SELECT USING (public.is_super_admin(auth.uid()));

CREATE POLICY "Company admins view company certificates" ON public.certificates
  FOR SELECT USING (
    public.user_belongs_to_company(user_id, public.get_user_company_id(auth.uid()))
  );

CREATE POLICY "Super admins view all certificates" ON public.certificates
  FOR SELECT USING (public.is_super_admin(auth.uid()));

-- 8. Triggers
CREATE OR REPLACE FUNCTION public.update_company_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

DROP TRIGGER IF EXISTS update_companies_timestamp ON public.companies;
CREATE TRIGGER update_companies_timestamp
  BEFORE UPDATE ON public.companies
  FOR EACH ROW EXECUTE FUNCTION public.update_company_timestamp();

DROP TRIGGER IF EXISTS update_company_subscriptions_timestamp ON public.company_subscriptions;
CREATE TRIGGER update_company_subscriptions_timestamp
  BEFORE UPDATE ON public.company_subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.update_company_timestamp();

DROP TRIGGER IF EXISTS update_company_branding_timestamp ON public.company_branding;
CREATE TRIGGER update_company_branding_timestamp
  BEFORE UPDATE ON public.company_branding
  FOR EACH ROW EXECUTE FUNCTION public.update_company_timestamp();

DROP TRIGGER IF EXISTS update_company_settings_timestamp ON public.company_settings;
CREATE TRIGGER update_company_settings_timestamp
  BEFORE UPDATE ON public.company_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_company_timestamp();

DROP TRIGGER IF EXISTS update_company_users_timestamp ON public.company_users;
CREATE TRIGGER update_company_users_timestamp
  BEFORE UPDATE ON public.company_users
  FOR EACH ROW EXECUTE FUNCTION public.update_company_timestamp();

-- 9. Default Plans
INSERT INTO public.subscription_plans (name, plan_type, max_users, max_chapters, has_certificates, has_ai_tutor, has_analytics, has_custom_branding, price_monthly, price_yearly)
VALUES 
  ('Free', 'free', 5, 10, false, false, false, false, 0, 0),
  ('Starter', 'starter', 25, NULL, true, false, true, false, 49, 490),
  ('Professional', 'professional', 100, NULL, true, true, true, true, 149, 1490),
  ('Enterprise', 'enterprise', NULL, NULL, true, true, true, true, 499, 4990)
ON CONFLICT (plan_type) DO NOTHING;

-- 10. Rossik Master Tenant
INSERT INTO public.companies (name, slug, is_master, is_active)
VALUES ('Rossik', 'rossik', true, true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.company_subscriptions (company_id, plan_id, status, billing_cycle)
SELECT c.id, p.id, 'active', 'yearly'
FROM public.companies c, public.subscription_plans p
WHERE c.slug = 'rossik' AND p.plan_type = 'enterprise'
ON CONFLICT (company_id) DO NOTHING;

INSERT INTO public.company_branding (company_id, platform_name, primary_color, secondary_color)
SELECT id, 'Rossik Training Manual', '#3b82f6', '#1e40af'
FROM public.companies WHERE slug = 'rossik'
ON CONFLICT (company_id) DO NOTHING;

INSERT INTO public.company_settings (company_id, active_languages, default_language, require_approval)
SELECT id, ARRAY['ro', 'en', 'de'], 'ro', false
FROM public.companies WHERE slug = 'rossik'
ON CONFLICT (company_id) DO NOTHING;