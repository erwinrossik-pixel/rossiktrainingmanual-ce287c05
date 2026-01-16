-- Add trial_days column to subscription_plans
ALTER TABLE public.subscription_plans 
ADD COLUMN IF NOT EXISTS trial_days integer DEFAULT 14;

-- Add stripe_price_id columns for payment integration
ALTER TABLE public.subscription_plans 
ADD COLUMN IF NOT EXISTS stripe_price_monthly_id text,
ADD COLUMN IF NOT EXISTS stripe_price_yearly_id text;

-- Update company_subscriptions with more detailed status tracking
ALTER TABLE public.company_subscriptions 
ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS stripe_subscription_id text,
ADD COLUMN IF NOT EXISTS stripe_customer_id text,
ADD COLUMN IF NOT EXISTS cancelled_at timestamptz,
ADD COLUMN IF NOT EXISTS cancel_at_period_end boolean DEFAULT false;

-- Create subscription_history table for upgrade/downgrade tracking
CREATE TABLE IF NOT EXISTS public.subscription_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
  old_plan_id uuid REFERENCES public.subscription_plans(id),
  new_plan_id uuid REFERENCES public.subscription_plans(id) NOT NULL,
  change_type text NOT NULL CHECK (change_type IN ('upgrade', 'downgrade', 'trial_start', 'trial_end', 'cancellation', 'reactivation')),
  changed_by uuid,
  change_reason text,
  effective_date timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS on subscription_history
ALTER TABLE public.subscription_history ENABLE ROW LEVEL SECURITY;

-- Policies for subscription_history
CREATE POLICY "Company admins can view their subscription history"
ON public.subscription_history
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.company_users cu
    WHERE cu.company_id = subscription_history.company_id
    AND cu.user_id = auth.uid()
    AND cu.role IN ('company_admin', 'super_admin')
    AND cu.status = 'approved'
  )
);

-- Super admins can view all subscription history
CREATE POLICY "Super admins can view all subscription history"
ON public.subscription_history
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.company_users cu
    WHERE cu.user_id = auth.uid()
    AND cu.role = 'super_admin'
    AND cu.status = 'approved'
  )
);

-- Super admins can insert subscription history
CREATE POLICY "Super admins can insert subscription history"
ON public.subscription_history
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.company_users cu
    WHERE cu.user_id = auth.uid()
    AND cu.role = 'super_admin'
    AND cu.status = 'approved'
  )
);

-- Create premium_chapters table for module-based paywall
CREATE TABLE IF NOT EXISTS public.premium_chapters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id text REFERENCES public.chapters(id) ON DELETE CASCADE NOT NULL,
  min_plan_type text NOT NULL CHECK (min_plan_type IN ('starter', 'professional', 'enterprise')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(chapter_id)
);

-- Enable RLS on premium_chapters
ALTER TABLE public.premium_chapters ENABLE ROW LEVEL SECURITY;

-- Everyone can read premium_chapters (needed for paywall display)
CREATE POLICY "Anyone can view premium chapters config"
ON public.premium_chapters
FOR SELECT
TO authenticated
USING (true);

-- Only super admins can modify premium chapters
CREATE POLICY "Super admins can manage premium chapters"
ON public.premium_chapters
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.company_users cu
    WHERE cu.user_id = auth.uid()
    AND cu.role = 'super_admin'
    AND cu.status = 'approved'
  )
);

-- Update subscription plans with trial days
UPDATE public.subscription_plans SET trial_days = 0 WHERE plan_type = 'free';
UPDATE public.subscription_plans SET trial_days = 14 WHERE plan_type = 'starter';
UPDATE public.subscription_plans SET trial_days = 14 WHERE plan_type = 'professional';
UPDATE public.subscription_plans SET trial_days = 30 WHERE plan_type = 'enterprise';