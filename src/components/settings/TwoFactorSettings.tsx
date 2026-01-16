import { useState, memo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { use2FA } from '@/hooks/use2FA';
import { 
  Shield, 
  ShieldCheck, 
  ShieldOff, 
  Key, 
  Copy, 
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Smartphone
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const TwoFactorSettings = memo(() => {
  const { status, loading, enable2FA, verify2FA, disable2FA, regenerateBackupCodes } = use2FA();
  const { toast } = useToast();
  const [setupData, setSetupData] = useState<{ secret: string; backupCodes: string[] } | null>(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [showBackupCodes, setShowBackupCodes] = useState(false);
  const [backupCodes, setBackupCodes] = useState<string[]>([]);

  const handleEnable = async () => {
    const result = await enable2FA();
    if (result) {
      setSetupData(result);
    }
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    const success = await verify2FA(verificationCode);
    setIsVerifying(false);
    if (success) {
      setSetupData(null);
      setVerificationCode('');
    }
  };

  const handleDisable = async () => {
    await disable2FA();
    setSetupData(null);
  };

  const handleRegenerateCodes = async () => {
    const codes = await regenerateBackupCodes();
    if (codes) {
      setBackupCodes(codes);
      setShowBackupCodes(true);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copiat în clipboard' });
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${status.isEnabled ? 'bg-green-100' : 'bg-muted'}`}>
              {status.isEnabled ? (
                <ShieldCheck className="h-5 w-5 text-green-600" />
              ) : (
                <Shield className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <div>
              <CardTitle className="text-lg">Autentificare în Doi Pași (2FA)</CardTitle>
              <CardDescription>Protejează-ți contul cu un strat suplimentar de securitate</CardDescription>
            </div>
          </div>
          <Badge variant={status.isEnabled ? 'default' : 'secondary'}>
            {status.isEnabled ? 'Activat' : 'Dezactivat'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {!status.isEnabled && !setupData && (
          <div className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                2FA adaugă un strat suplimentar de securitate. Vei avea nevoie de o aplicație 
                authenticator (Google Authenticator, Authy, etc.) pe telefonul tău.
              </AlertDescription>
            </Alert>
            
            <Button onClick={handleEnable} className="w-full">
              <Shield className="h-4 w-4 mr-2" />
              Activează 2FA
            </Button>
          </div>
        )}

        {setupData && !status.isEnabled && (
          <div className="space-y-4">
            <Alert>
              <Smartphone className="h-4 w-4" />
              <AlertDescription>
                Scanează codul QR cu aplicația ta authenticator sau introdu manual secretul.
              </AlertDescription>
            </Alert>

            {/* QR Code placeholder - in production use a real QR generator */}
            <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
              <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center border">
                <div className="text-center text-muted-foreground">
                  <Smartphone className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">Scanează cu authenticator</p>
                </div>
              </div>
            </div>

            {/* Manual entry secret */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Secret (pentru introducere manuală)</label>
              <div className="flex gap-2">
                <Input 
                  value={setupData.secret} 
                  readOnly 
                  className="font-mono text-sm"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => copyToClipboard(setupData.secret)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Backup codes */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Key className="h-4 w-4" />
                Coduri de Backup
              </label>
              <Alert>
                <AlertDescription className="text-xs">
                  Salvează aceste coduri într-un loc sigur. Le poți folosi pentru a accesa contul 
                  dacă pierzi accesul la aplicația authenticator.
                </AlertDescription>
              </Alert>
              <div className="grid grid-cols-2 gap-2 p-3 bg-muted rounded-lg">
                {setupData.backupCodes.map((code, i) => (
                  <code key={i} className="text-xs font-mono">{code}</code>
                ))}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => copyToClipboard(setupData.backupCodes.join('\n'))}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copiază toate
              </Button>
            </div>

            {/* Verification */}
            <div className="space-y-2 pt-4 border-t">
              <label className="text-sm font-medium">Verifică configurarea</label>
              <p className="text-xs text-muted-foreground">
                Introdu codul din aplicația authenticator pentru a finaliza configurarea.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="000000"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  maxLength={6}
                  className="font-mono text-center text-lg tracking-widest"
                />
                <Button onClick={handleVerify} disabled={verificationCode.length !== 6 || isVerifying}>
                  {isVerifying ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}

        {status.isEnabled && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">2FA este activat</p>
                <p className="text-xs text-green-600">
                  Contul tău este protejat cu autentificare în doi pași
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Dialog open={showBackupCodes} onOpenChange={setShowBackupCodes}>
                <DialogTrigger asChild>
                  <Button variant="outline" onClick={handleRegenerateCodes}>
                    <Key className="h-4 w-4 mr-2" />
                    Regenerează coduri backup
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Coduri de Backup Noi</DialogTitle>
                  </DialogHeader>
                  <Alert>
                    <AlertDescription>
                      Salvează aceste coduri într-un loc sigur. Codurile vechi nu mai funcționează.
                    </AlertDescription>
                  </Alert>
                  <div className="grid grid-cols-2 gap-2 p-4 bg-muted rounded-lg">
                    {backupCodes.map((code, i) => (
                      <code key={i} className="text-sm font-mono">{code}</code>
                    ))}
                  </div>
                  <Button 
                    onClick={() => copyToClipboard(backupCodes.join('\n'))}
                    className="w-full"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copiază toate
                  </Button>
                </DialogContent>
              </Dialog>

              <Button variant="destructive" onClick={handleDisable}>
                <ShieldOff className="h-4 w-4 mr-2" />
                Dezactivează 2FA
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
});

TwoFactorSettings.displayName = 'TwoFactorSettings';
