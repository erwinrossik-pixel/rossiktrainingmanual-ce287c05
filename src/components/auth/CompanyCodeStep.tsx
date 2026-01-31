import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2 } from 'lucide-react';

interface CompanyCodeStepProps {
  onCodeSubmit: (code: string) => Promise<void>;
}

export function CompanyCodeStep({ onCodeSubmit }: CompanyCodeStepProps) {
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    onCodeSubmit(code);
  };

  return (
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
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          className="uppercase text-center font-mono"
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
      </div>

      <Button onClick={handleSubmit} className="w-full">
        Continuă
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Nu ai un cod? Contactează departamentul HR al companiei tale.
      </p>
    </div>
  );
}
