import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface RegistrationSuccessProps {
  companyName: string;
}

export function RegistrationSuccess({ companyName }: RegistrationSuccessProps) {
  const navigate = useNavigate();

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
            Cererea ta pentru {companyName} a fost trimisă
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
