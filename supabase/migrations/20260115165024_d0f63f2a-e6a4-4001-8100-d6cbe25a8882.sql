-- Create certificates table for storing official certificates
CREATE TABLE public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  certificate_code TEXT NOT NULL UNIQUE,
  trainee_name TEXT NOT NULL,
  issued_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  chapters_completed INTEGER NOT NULL,
  quizzes_passed INTEGER NOT NULL,
  average_score NUMERIC NOT NULL,
  total_training_hours NUMERIC DEFAULT 0,
  is_revoked BOOLEAN DEFAULT false,
  revoked_at TIMESTAMPTZ,
  revoked_by UUID,
  revoke_reason TEXT,
  pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index for fast code lookup
CREATE INDEX idx_certificates_code ON public.certificates(certificate_code);
CREATE INDEX idx_certificates_user_id ON public.certificates(user_id);

-- Enable RLS
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Anyone can verify certificates (public page) - only basic info
CREATE POLICY "Anyone can verify certificates" ON public.certificates
  FOR SELECT USING (true);

-- Users can insert own certificate
CREATE POLICY "Users can insert own certificate" ON public.certificates
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Admins can manage all certificates
CREATE POLICY "Admins can manage all certificates" ON public.certificates
  FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- Block anonymous access
CREATE POLICY "Block anonymous access to certificates" ON public.certificates
  FOR ALL USING (false);

-- Create certificate_settings table
CREATE TABLE public.certificate_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMPTZ DEFAULT now(),
  updated_by UUID
);

-- Enable RLS on settings
ALTER TABLE public.certificate_settings ENABLE ROW LEVEL SECURITY;

-- Only admins can manage settings
CREATE POLICY "Admins can manage certificate_settings" ON public.certificate_settings
  FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- Anyone can view settings (needed for certificate generation)
CREATE POLICY "Anyone can view certificate_settings" ON public.certificate_settings
  FOR SELECT USING (true);

-- Insert default settings
INSERT INTO public.certificate_settings (setting_key, setting_value, description) VALUES
  ('validity_years', '2', 'Numărul de ani de validitate pentru certificate'),
  ('min_score_required', '70', 'Scorul minim necesar pentru eligibilitate (%)'),
  ('issuer_name', '"Rossik Transport & Logistic"', 'Numele emitentului de pe certificat'),
  ('signature_title', '"Training Director"', 'Titlul semnăturii'),
  ('min_chapters_required', '40', 'Numărul minim de capitole completate'),
  ('min_quizzes_required', '40', 'Numărul minim de quiz-uri trecute');

-- Create function to generate unique certificate code
CREATE OR REPLACE FUNCTION public.generate_certificate_code()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_code TEXT;
  year_part TEXT;
  seq_part TEXT;
  exists_count INTEGER;
BEGIN
  year_part := TO_CHAR(NOW(), 'YYYY');
  
  LOOP
    -- Generate random 5-digit number
    seq_part := LPAD(FLOOR(RANDOM() * 100000)::TEXT, 5, '0');
    new_code := 'ROSS-' || year_part || '-' || seq_part;
    
    -- Check if exists
    SELECT COUNT(*) INTO exists_count FROM public.certificates WHERE certificate_code = new_code;
    
    EXIT WHEN exists_count = 0;
  END LOOP;
  
  RETURN new_code;
END;
$$;

-- Trigger for updated_at
CREATE TRIGGER update_certificates_updated_at
  BEFORE UPDATE ON public.certificates
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();