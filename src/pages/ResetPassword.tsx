import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, KeyRound, Check } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useAuthT } from '@/lib/authI18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MIN_LENGTH = 8;

/** Landing page of the password-reset email link (public route; the link signs the user in). */
export default function ResetPassword() {
  const navigate = useNavigate();
  const { user, loading, updatePassword } = useAuth();
  const at = useAuthT();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < MIN_LENGTH) {
      setError(at('reset.tooShort'));
      return;
    }
    if (password !== confirm) {
      setError(at('reset.mismatch'));
      return;
    }
    setSaving(true);
    const { error: updateError } = await updatePassword(password);
    setSaving(false);
    if (!updateError) setDone(true);
  };

  const shell = (content: React.ReactNode) => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              {done ? <Check className="w-8 h-8 text-primary" /> : <KeyRound className="w-8 h-8 text-primary" />}
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">{at('reset.title')}</CardTitle>
          {!done && user && <CardDescription>{at('reset.desc')}</CardDescription>}
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  );

  if (loading) {
    return shell(<p role="status" className="text-center text-sm text-muted-foreground">{at('reset.checking')}</p>);
  }

  if (!user) {
    return shell(
      <div className="space-y-4 text-center">
        <p role="alert" className="text-sm text-destructive">{at('reset.invalid')}</p>
        <Button className="w-full" onClick={() => navigate('/auth', { replace: true })}>
          {at('reset.requestNew')}
        </Button>
      </div>,
    );
  }

  if (done) {
    return shell(
      <div className="space-y-4 text-center">
        <p role="status" className="text-sm">{at('reset.done')}</p>
        <Button className="w-full" onClick={() => navigate('/', { replace: true })}>
          {at('reset.continue')}
        </Button>
      </div>,
    );
  }

  return shell(
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-center text-muted-foreground">{user.email}</p>
      <div className="space-y-2">
        <Label htmlFor="new-password">{at('reset.password')}</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="new-password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm-password">{at('reset.confirm')}</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="confirm-password"
            type="password"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <Button type="submit" className="w-full" disabled={saving}>
        {saving ? at('reset.saving') : at('reset.save')}
      </Button>
    </form>,
  );
}
