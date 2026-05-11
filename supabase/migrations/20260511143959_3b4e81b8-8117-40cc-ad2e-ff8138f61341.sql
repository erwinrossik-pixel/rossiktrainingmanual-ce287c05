CREATE TABLE public.admin_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alert_type TEXT NOT NULL,
  severity TEXT NOT NULL CHECK (severity IN ('info','warning','critical')),
  user_id UUID,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  details JSONB DEFAULT '{}'::jsonb,
  dedup_hash TEXT NOT NULL UNIQUE,
  acknowledged BOOLEAN NOT NULL DEFAULT false,
  acknowledged_at TIMESTAMPTZ,
  acknowledged_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_admin_alerts_unack ON public.admin_alerts (acknowledged, created_at DESC);
CREATE INDEX idx_admin_alerts_severity ON public.admin_alerts (severity, created_at DESC);

ALTER TABLE public.admin_alerts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins view alerts" ON public.admin_alerts
FOR SELECT TO authenticated USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins update alerts" ON public.admin_alerts
FOR UPDATE TO authenticated USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admins delete alerts" ON public.admin_alerts
FOR DELETE TO authenticated USING (public.is_admin_user(auth.uid()));