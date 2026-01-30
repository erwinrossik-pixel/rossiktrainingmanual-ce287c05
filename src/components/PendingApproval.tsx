import { useCompany } from '@/contexts/CompanyContext';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, LogOut, Mail, Building2 } from 'lucide-react';

export function PendingApproval() {
  const { company, branding, companyUser } = useCompany();
  const { user, profile, signOut } = useAuth();

  if (companyUser?.status !== 'pending') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          {branding?.logo_url ? (
            <img src={branding.logo_url} alt={branding.platform_name} className="h-16 mx-auto mb-4" />
          ) : (
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
          )}
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-warning/10 flex items-center justify-center">
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </div>
          <CardTitle className="text-xl">Cont în Așteptare</CardTitle>
          <CardDescription>
            Cererea ta de acces la {company?.name || 'platformă'} este în așteptare
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Înregistrat ca:</p>
            <p className="font-medium">{profile?.first_name} {profile?.last_name}</p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Mail className="h-3 w-3" />
              {user?.email}
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Un administrator va revizui cererea ta în curând. Vei primi o notificare când contul este activat.
          </p>

          <Button variant="outline" onClick={() => signOut()} className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Deconectare
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
