import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2 } from 'lucide-react';

interface CompanyCodeStepProps {
  onCodeSubmit: (code: string) => Promise<void>;
  onIndependentSelect: () => void;
}

export function CompanyCodeStep({ onCodeSubmit, onIndependentSelect }: CompanyCodeStepProps) {
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

      <Button onClick={handleSubmit} className="w-full" disabled={!code.trim()}>
        Continuă
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">sau</span>
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={onIndependentSelect}>
        Continuă fără cod (utilizator independent)
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Nu ai un cod? Te poți înregistra ca utilizator independent și ai acces imediat.
      </p>
    </div>
  );
}
