import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, User, Building2, ArrowLeft } from 'lucide-react';

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

interface SignupFormProps {
  selectedCompany: SelectedCompany;
  onSubmit: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  onBack: () => void;
  canGoBack: boolean;
  isSubmitting: boolean;
}

export function SignupForm({ 
  selectedCompany, 
  onSubmit, 
  onBack, 
  canGoBack,
  isSubmitting 
}: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = signupSchema.safeParse({ email, password, firstName, lastName });
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

    await onSubmit(email, password, firstName, lastName);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      {/* Selected Company Badge */}
      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-primary" />
          <span className="font-medium">{selectedCompany.name}</span>
        </div>
        {canGoBack && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
          />
        </div>
        {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
      </div>

      {selectedCompany.require_approval && (
        <p className="text-xs text-muted-foreground bg-muted p-2 rounded border border-border">
          ⚠️ Această companie necesită aprobare. După înregistrare, un administrator va revizui cererea ta.
        </p>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Se creează contul...' : 'Creează cont'}
      </Button>
    </form>
  );
}
