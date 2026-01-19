-- Adaug o politică RLS pentru a permite utilizatorilor neautentificați să caute după registration_code
-- Aceasta este necesară pentru fluxul de înregistrare utilizatori noi

CREATE POLICY "Anyone can lookup company by registration code"
ON public.company_settings
FOR SELECT
TO anon, authenticated
USING (registration_code IS NOT NULL);

-- De asemenea, trebuie să permitem accesul la companii active pentru lookup
CREATE POLICY "Anyone can view active companies for registration"
ON public.companies
FOR SELECT
TO anon
USING (is_active = true);