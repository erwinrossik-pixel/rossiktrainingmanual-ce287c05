import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Building2, ArrowRight, Search } from 'lucide-react';

interface CompanySelectorProps {
  onCompanyFound: (company: any) => void;
}

export function CompanySelector({ onCompanyFound }: CompanySelectorProps) {
  const { toast } = useToast();
  const [registrationCode, setRegistrationCode] = useState('');
  const [loading, setLoading] = useState(false);

  const findCompanyByCode = async () => {
    if (!registrationCode.trim()) {
      toast({ title: 'Eroare', description: 'Introdu codul de înregistrare', variant: 'destructive' });
      return;
    }

    setLoading(true);
    try {
      // Folosim funcția securizată pentru verificarea codului
      const { data, error } = await supabase
        .rpc('verify_registration_code', { p_code: registrationCode.trim() });

      if (error) {
        logger.error('Error verifying code:', error);
        toast({ 
          title: 'Eroare', 
          description: 'A apărut o eroare la verificare. Încearcă din nou.', 
          variant: 'destructive' 
        });
        return;
      }

      if (!data || data.length === 0) {
        toast({ 
          title: 'Cod invalid', 
          description: 'Nu am găsit nicio companie cu acest cod de înregistrare', 
          variant: 'destructive' 
        });
        return;
      }

      const companyResult = data[0];
      if (!companyResult.is_active) {
        toast({ 
          title: 'Companie inactivă', 
          description: 'Această companie nu mai acceptă înregistrări', 
          variant: 'destructive' 
        });
        return;
      }

      // Returnăm datele companiei în formatul așteptat
      onCompanyFound({
        id: companyResult.company_id,
        name: companyResult.company_name,
        is_active: companyResult.is_active
      });
    } catch (error) {
      logger.error('Error finding company:', error);
      toast({ title: 'Eroare', description: 'A apărut o eroare. Încearcă din nou.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle>Alege-ți Compania</CardTitle>
        <CardDescription>
          Introdu codul de înregistrare primit de la angajator
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code">Cod de Înregistrare</Label>
          <div className="relative">
            <Input
              id="code"
              value={registrationCode}
              onChange={(e) => setRegistrationCode(e.target.value.toUpperCase())}
              placeholder="Ex: ROSSIK-ABC123"
              className="pr-10 uppercase"
              onKeyDown={(e) => e.key === 'Enter' && findCompanyByCode()}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground">
            Codul de înregistrare ți-a fost furnizat de angajator sau departamentul HR
          </p>
        </div>

        <Button 
          onClick={findCompanyByCode} 
          className="w-full" 
          disabled={loading || !registrationCode.trim()}
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          ) : (
            <ArrowRight className="h-4 w-4 mr-2" />
          )}
          Continuă
        </Button>
      </CardContent>
    </Card>
  );
}
