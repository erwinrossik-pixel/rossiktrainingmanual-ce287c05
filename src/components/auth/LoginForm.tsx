import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import { lovable } from '@/integrations/lovable/index';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import { useAuthT } from '@/lib/authI18n';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isSubmitting: boolean;
}

export function LoginForm({ onSubmit, isSubmitting }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mode, setMode] = useState<'login' | 'forgot'>('login');
  const [resetSending, setResetSending] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const { requestPasswordReset } = useAuth();
  const at = useAuthT();

  // Only check that the fields are filled in: existing accounts may have older/shorter
  // passwords, and the server is the judge of whether they are correct.
  const loginSchema = z.object({
    email: z.string().trim().email(at('email.invalid')),
    password: z.string().min(1, at('password.required')),
  });

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const parsed = z.string().trim().email().safeParse(email);
    if (!parsed.success) {
      setErrors({ email: at('email.invalid') });
      return;
    }
    setResetSending(true);
    const { error } = await requestPasswordReset(parsed.data);
    setResetSending(false);
    if (!error) setResetSent(true);
  };

  if (mode === 'forgot') {
    return (
      <form onSubmit={handleForgot} className="space-y-4 mt-4">
        <div className="space-y-1">
          <h3 className="font-semibold">{at('forgot.title')}</h3>
          <p className="text-sm text-muted-foreground">{at('forgot.desc')}</p>
        </div>
        {resetSent ? (
          <p role="status" className="text-sm rounded-md border border-border bg-muted p-3">{at('forgot.sent')}</p>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="forgot-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="forgot-email"
                  type="email"
                  autoComplete="email"
                  placeholder="email@exemplu.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={resetSending}>
              {resetSending ? at('forgot.sending') : at('forgot.send')}
            </Button>
          </>
        )}
        <Button
          type="button"
          variant="link"
          className="w-full"
          onClick={() => { setMode('login'); setResetSent(false); setErrors({}); }}
        >
          {at('forgot.back')}
        </Button>
      </form>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = loginSchema.safeParse({ email, password });
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

    await onSubmit(result.data.email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="email@exemplu.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
          />
        </div>
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="login-password">Parolă</Label>
          <button
            type="button"
            className="text-sm text-primary hover:underline"
            onClick={() => { setMode('forgot'); setErrors({}); }}
          >
            {at('forgot.link')}
          </button>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="login-password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
          />
        </div>
        {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Se autentifică...' : 'Autentificare'}
      </Button>

      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">sau</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={async () => {
          const result = await lovable.auth.signInWithOAuth('google', {
            redirect_uri: window.location.origin,
          });
          if (result.error) {
            toast.error('Autentificarea cu Google a eșuat');
            return;
          }
        }}
      >
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continuă cu Google
      </Button>
    </form>
  );
}
