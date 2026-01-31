import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useAuth } from '@/hooks/useAuth';
import { useCompany } from '@/contexts/CompanyContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Truck, Mail, Lock, User, Building2, ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const loginSchema = z.object({
  email: z.string().email('Email invalid'),
  password: z.string().min(6, 'Parola trebuie să aibă minim 6 caractere'),
});

const signupSchema = z.object({
  email: z.string().email('Email invalid'),
  password: z.string().min(6, 'Parola trebuie să aibă minim 6 caractere'),
  firstName: z.string().min(2, 'Prenumele trebuie să aibă minim 2 caractere'),
  lastName: z.string().min(2, 'Numele trebuie să aibă minim 2 caractere'),
});

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registrationStep, setRegistrationStep] = useState<'company' | 'details'>('company');
  const [selectedCompany, setSelectedCompany] = useState<SelectedCompany | null>(null);
  const [registrationCode, setRegistrationCode] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form state
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    // If user is logged in and has approved company membership, redirect
    if (user && !loading && companyUser?.status === 'approved') {
      navigate('/');
    }
  }, [user, loading, companyUser, navigate]);

  // Auto-select company if we're on a company domain
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

  const findCompanyByCode = async () => {
    if (!registrationCode.trim()) {
      toast({ title: 'Eroare', description: 'Introdu codul de înregistrare', variant: 'destructive' });
      return;
    }

    try {
      // Use proper typing for the joined query response
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
        .eq('registration_code', registrationCode.toUpperCase().trim())
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
    } catch (error) {
      toast({ title: 'Eroare', description: 'A apărut o eroare. Încearcă din nou.', variant: 'destructive' });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = loginSchema.safeParse({ email: loginEmail, password: loginPassword });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    const { error } = await signIn(loginEmail, loginPassword);
    setIsSubmitting(false);

    if (!error) {
      // Refresh company context to get user's company membership
      await refreshCompany();
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = signupSchema.safeParse({
      email: signupEmail,
      password: signupPassword,
      firstName,
      lastName,
    });
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    if (!selectedCompany) {
      toast({ title: 'Eroare', description: 'Selectează mai întâi compania', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    
    // Create user account
    const { error: signUpError } = await signUp(signupEmail, signupPassword, firstName, lastName);
    
    if (signUpError) {
      setIsSubmitting(false);
      return;
    }

    // Sign in immediately
    const { error: signInError } = await signIn(signupEmail, signupPassword);
    
    if (signInError) {
      setIsSubmitting(false);
      return;
    }

    // Get the new user's ID
    const { data: { user: newUser } } = await supabase.auth.getUser();
    
    if (newUser) {
      // Create company_users entry with pending or approved status
      const status = selectedCompany.require_approval ? 'pending' : 'approved';
      
      await supabase.from('company_users').insert({
        user_id: newUser.id,
        company_id: selectedCompany.id,
        role: 'user',
        status: status,
        approved_at: status === 'approved' ? new Date().toISOString() : null
      });

      // If requires approval, show success message
      if (selectedCompany.require_approval) {
        setRegistrationSuccess(true);
      } else {
        await refreshCompany();
        navigate('/');
      }
    }
    
    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Show success message for pending approval
  if (registrationSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-accent/20">
                <Check className="w-10 h-10 text-accent" />
              </div>
            </div>
            <CardTitle className="text-2xl">Cont Creat cu Succes!</CardTitle>
            <CardDescription>
              Cererea ta pentru {selectedCompany?.name} a fost trimisă
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Un administrator va revizui cererea ta în curând. Vei primi acces după aprobare.
            </p>
            <Button onClick={() => navigate('/')} variant="outline" className="w-full">
              Înapoi la pagina principală
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const platformName = branding?.platform_name || 'Training Platform';
  const logoUrl = branding?.logo_url;

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
              <form onSubmit={handleLogin} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="email@exemplu.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="login-password">Parolă</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Se autentifică...' : 'Autentificare'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              {registrationStep === 'company' ? (
                <div className="space-y-4 mt-4">
                  <div className="text-center mb-4">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Introdu codul de înregistrare primit de la angajator
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="registration-code">Cod de Înregistrare</Label>
                    <Input
                      id="registration-code"
                      type="text"
                      placeholder="Ex: ROSSIK-ABC123"
                      value={registrationCode}
                      onChange={(e) => setRegistrationCode(e.target.value.toUpperCase())}
                      className="uppercase text-center font-mono"
                      onKeyDown={(e) => e.key === 'Enter' && findCompanyByCode()}
                    />
                  </div>

                  <Button onClick={findCompanyByCode} className="w-full">
                    Continuă
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Nu ai un cod? Contactează departamentul HR al companiei tale.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4 mt-4">
                  {/* Selected Company Badge */}
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="font-medium">{selectedCompany?.name}</span>
                    </div>
                    {!company?.is_master && company?.id !== selectedCompany?.id && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedCompany(null);
                          setRegistrationStep('company');
                        }}
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prenume</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Ion"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nume</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Popescu"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="email@exemplu.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Parolă</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Minim 6 caractere"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                  </div>

                  {selectedCompany?.require_approval && (
                    <p className="text-xs text-muted-foreground bg-muted p-2 rounded border border-border">
                      ⚠️ Această companie necesită aprobare. După înregistrare, un administrator va revizui cererea ta.
                    </p>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Se creează contul...' : 'Creează cont'}
                  </Button>
                </form>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
