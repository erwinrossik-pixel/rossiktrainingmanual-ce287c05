import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useCompany } from '@/contexts/CompanyContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Truck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
import { CompanyCodeStep } from '@/components/auth/CompanyCodeStep';
import { RegistrationSuccess } from '@/components/auth/RegistrationSuccess';

interface SelectedCompany {
  id: string;
  name: string;
  slug: string;
  require_approval: boolean;
}

export default function Auth() {
  const navigate = useNavigate();
  const { user, loading, signIn, signUp } = useAuth();
  const { company, branding, settings, companyUser, refreshCompany } = useCompany();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationStep, setRegistrationStep] = useState<'company' | 'details'>('company');
  const [selectedCompany, setSelectedCompany] = useState<SelectedCompany | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    if (user && !loading && companyUser?.status === 'approved') {
      navigate('/');
    }
  }, [user, loading, companyUser, navigate]);

  useEffect(() => {
    if (company && !company.is_master && settings) {
      setSelectedCompany({
        id: company.id,
        name: company.name,
        slug: company.slug,
        require_approval: settings.require_approval
      });
      setRegistrationStep('details');
    }
  }, [company, settings]);

  const findCompanyByCode = async (code: string) => {
    if (!code.trim()) {
      toast({ title: 'Eroare', description: 'Introdu codul de înregistrare', variant: 'destructive' });
      return;
    }

    try {
      interface CompanySettingsResponse {
        company_id: string;
        require_approval: boolean;
        companies: {
          id: string;
          name: string;
          slug: string;
          is_active: boolean;
        };
      }

      const { data, error } = await supabase
        .from('company_settings')
        .select('company_id, require_approval, companies!inner(id, name, slug, is_active)')
        .eq('registration_code', code.toUpperCase().trim())
        .single();

      if (error || !data) {
        toast({ 
          title: 'Cod invalid', 
          description: 'Nu am găsit nicio companie cu acest cod', 
          variant: 'destructive' 
        });
        return;
      }

      const typedData = data as unknown as CompanySettingsResponse;
      const companyData = typedData.companies;
      
      if (!companyData.is_active) {
        toast({ 
          title: 'Companie inactivă', 
          description: 'Această companie nu mai acceptă înregistrări', 
          variant: 'destructive' 
        });
        return;
      }

      setSelectedCompany({
        id: companyData.id,
        name: companyData.name,
        slug: companyData.slug,
        require_approval: data.require_approval
      });
      setRegistrationStep('details');
    } catch {
      toast({ title: 'Eroare', description: 'A apărut o eroare. Încearcă din nou.', variant: 'destructive' });
    }
  };

  const handleLogin = async (email: string, password: string) => {
    setIsSubmitting(true);
    const { error } = await signIn(email, password);
    setIsSubmitting(false);

    if (!error) {
      await refreshCompany();
    }
  };

  const handleSignup = async (email: string, password: string, firstName: string, lastName: string) => {
    if (!selectedCompany) {
      toast({ title: 'Eroare', description: 'Selectează mai întâi compania', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    
    const { error: signUpError } = await signUp(email, password, firstName, lastName);
    if (signUpError) {
      setIsSubmitting(false);
      return;
    }

    const { error: signInError } = await signIn(email, password);
    if (signInError) {
      setIsSubmitting(false);
      return;
    }

    const { data: { user: newUser } } = await supabase.auth.getUser();
    
    if (newUser) {
      const status = selectedCompany.require_approval ? 'pending' : 'approved';
      
      await supabase.from('company_users').insert({
        user_id: newUser.id,
        company_id: selectedCompany.id,
        role: 'user',
        status: status,
        approved_at: status === 'approved' ? new Date().toISOString() : null
      });

      if (selectedCompany.require_approval) {
        setRegistrationSuccess(true);
      } else {
        await refreshCompany();
        navigate('/');
      }
    }
    
    setIsSubmitting(false);
  };

  const handleBackToCompanySelect = () => {
    setSelectedCompany(null);
    setRegistrationStep('company');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (registrationSuccess && selectedCompany) {
    return <RegistrationSuccess companyName={selectedCompany.name} />;
  }

  const platformName = branding?.platform_name || 'Training Platform';
  const logoUrl = branding?.logo_url;
  const canGoBack = !company?.is_master && company?.id !== selectedCompany?.id;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {logoUrl ? (
              <img src={logoUrl} alt={platformName} className="h-16 object-contain" />
            ) : (
              <div className="p-3 rounded-full bg-primary/10">
                <Truck className="w-8 h-8 text-primary" />
              </div>
            )}
          </div>
          <CardTitle className="text-2xl font-bold">{platformName}</CardTitle>
          <CardDescription>
            Platformă de învățare pentru expediția de mărfuri
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Autentificare</TabsTrigger>
              <TabsTrigger value="signup">Înregistrare</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <LoginForm onSubmit={handleLogin} isSubmitting={isSubmitting} />
            </TabsContent>

            <TabsContent value="signup">
              {registrationStep === 'company' ? (
                <CompanyCodeStep onCodeSubmit={findCompanyByCode} />
              ) : selectedCompany ? (
                <SignupForm
                  selectedCompany={selectedCompany}
                  onSubmit={handleSignup}
                  onBack={handleBackToCompanySelect}
                  canGoBack={canGoBack}
                  isSubmitting={isSubmitting}
                />
              ) : null}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
