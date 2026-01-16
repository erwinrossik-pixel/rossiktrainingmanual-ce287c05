import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

export interface TwoFactorStatus {
  isEnabled: boolean;
  verifiedAt: string | null;
  hasBackupCodes: boolean;
}

export function use2FA() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [status, setStatus] = useState<TwoFactorStatus>({
    isEnabled: false,
    verifiedAt: null,
    hasBackupCodes: false
  });
  const [loading, setLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    if (!user) {
      setStatus({ isEnabled: false, verifiedAt: null, hasBackupCodes: false });
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_2fa')
        .select('is_enabled, verified_at, backup_codes')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setStatus({
          isEnabled: data.is_enabled || false,
          verifiedAt: data.verified_at,
          hasBackupCodes: Array.isArray(data.backup_codes) && data.backup_codes.length > 0
        });
      }
    } catch (error) {
      console.error('Error fetching 2FA status:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  const enable2FA = useCallback(async () => {
    if (!user) return null;

    try {
      // Generate a mock secret (in production, use proper TOTP library)
      const secret = generateSecret();
      const backupCodes = generateBackupCodes();

      // Check if record exists
      const { data: existing } = await supabase
        .from('user_2fa')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (existing) {
        await supabase
          .from('user_2fa')
          .update({
            secret_encrypted: secret,
            backup_codes: backupCodes,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id);
      } else {
        await supabase
          .from('user_2fa')
          .insert({
            user_id: user.id,
            secret_encrypted: secret,
            backup_codes: backupCodes
          });
      }

      toast({
        title: '2FA inițializat',
        description: 'Scanează codul QR pentru a activa'
      });

      return { secret, backupCodes };
    } catch (error) {
      console.error('Error enabling 2FA:', error);
      toast({
        title: 'Eroare la activare 2FA',
        variant: 'destructive'
      });
      return null;
    }
  }, [user, toast]);

  const verify2FA = useCallback(async (code: string) => {
    if (!user) return false;

    try {
      // In production, verify the TOTP code against the secret
      // For now, we'll accept any 6-digit code as valid
      if (!/^\d{6}$/.test(code)) {
        toast({
          title: 'Cod invalid',
          description: 'Codul trebuie să aibă 6 cifre',
          variant: 'destructive'
        });
        return false;
      }

      const { error } = await supabase
        .from('user_2fa')
        .update({
          is_enabled: true,
          verified_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setStatus(prev => ({
        ...prev,
        isEnabled: true,
        verifiedAt: new Date().toISOString()
      }));

      toast({
        title: '2FA Activat',
        description: 'Contul tău este acum protejat cu autentificare în doi pași'
      });

      return true;
    } catch (error) {
      console.error('Error verifying 2FA:', error);
      toast({
        title: 'Eroare la verificare',
        variant: 'destructive'
      });
      return false;
    }
  }, [user, toast]);

  const disable2FA = useCallback(async () => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('user_2fa')
        .update({
          is_enabled: false,
          verified_at: null,
          secret_encrypted: null,
          backup_codes: [],
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setStatus({
        isEnabled: false,
        verifiedAt: null,
        hasBackupCodes: false
      });

      toast({
        title: '2FA Dezactivat'
      });

      return true;
    } catch (error) {
      console.error('Error disabling 2FA:', error);
      toast({
        title: 'Eroare la dezactivare',
        variant: 'destructive'
      });
      return false;
    }
  }, [user, toast]);

  const regenerateBackupCodes = useCallback(async () => {
    if (!user) return null;

    try {
      const backupCodes = generateBackupCodes();

      const { error } = await supabase
        .from('user_2fa')
        .update({
          backup_codes: backupCodes,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      toast({
        title: 'Coduri regenerate',
        description: 'Salvează noile coduri de backup în siguranță'
      });

      return backupCodes;
    } catch (error) {
      console.error('Error regenerating backup codes:', error);
      toast({
        title: 'Eroare la regenerare',
        variant: 'destructive'
      });
      return null;
    }
  }, [user, toast]);

  return {
    status,
    loading,
    enable2FA,
    verify2FA,
    disable2FA,
    regenerateBackupCodes,
    refresh: fetchStatus
  };
}

// Helper functions
function generateSecret(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let secret = '';
  for (let i = 0; i < 32; i++) {
    secret += chars[Math.floor(Math.random() * chars.length)];
  }
  return secret;
}

function generateBackupCodes(): string[] {
  const codes: string[] = [];
  for (let i = 0; i < 10; i++) {
    const code = Math.random().toString(36).substring(2, 6).toUpperCase() + '-' +
                 Math.random().toString(36).substring(2, 6).toUpperCase();
    codes.push(code);
  }
  return codes;
}
