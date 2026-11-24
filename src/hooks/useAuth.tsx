import { useState, useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { logger } from '@/utils/logger';
import { normalizeEmail, authErrorMessage } from '@/lib/authErrors';

interface Profile {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  role: 'admin' | 'user'; // DEPRECATED: kept for backwards compatibility
  created_at: string;
  updated_at: string;
}

type AppRole = 'admin' | 'user';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  isAdmin: boolean;
  signUp: (email: string, password: string, firstName: string, lastName: string, companyId?: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  requestPasswordReset: (email: string) => Promise<{ error: Error | null }>;
  updatePassword: (password: string) => Promise<{ error: Error | null }>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userRoles, setUserRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);
  // Id of the user whose profile/roles are loaded (or being loaded); null when signed out.
  const currentUserIdRef = useRef<string | null>(null);
  const { toast } = useToast();

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();
    
    if (error) {
      logger.error('Error fetching profile:', error);
      return null;
    }
    return data as Profile;
  };

  // Fetch roles from the secure user_roles table (source of truth for authorization)
  const fetchUserRoles = async (userId: string): Promise<AppRole[]> => {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId);
    
    if (error) {
      logger.error('Error fetching user roles:', error);
      return [];
    }
    return (data || []).map(r => r.role as AppRole);
  };

  useEffect(() => {
    let active = true;

    const loadUserData = async (userId: string) => {
      try {
        const [profileData, roles] = await Promise.all([fetchProfile(userId), fetchUserRoles(userId)]);
        if (!active || currentUserIdRef.current !== userId) return;
        setProfile(profileData);
        setUserRoles(roles);
      } catch (error) {
        logger.error('Error loading user data:', error);
      } finally {
        if (active && currentUserIdRef.current === userId) setLoading(false);
      }
    };

    // Profile and roles are reloaded only when the signed-in user changes (not on hourly
    // token refreshes), and `loading` stays true until they are known, so pages never
    // decide on access with a user but without their roles.
    const applySession = (nextSession: Session | null) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      const nextId = nextSession?.user?.id ?? null;

      if (nextId === currentUserIdRef.current) {
        if (!nextId) setLoading(false);
        return;
      }

      currentUserIdRef.current = nextId;
      if (nextId) {
        setLoading(true);
        // Defer the fetch to avoid a deadlock inside the auth state callback
        setTimeout(() => { void loadUserData(nextId); }, 0);
      } else {
        setProfile(null);
        setUserRoles([]);
        setLoading(false);
      }
    };

    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      applySession(nextSession);
    });

    // THEN check for existing session
    supabase.auth.getSession()
      .then(({ data: { session: existing } }) => applySession(existing))
      .catch((error) => {
        logger.error('Error reading session:', error);
        applySession(null);
      });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, firstName: string, lastName: string, companyId?: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email: normalizeEmail(email),
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          first_name: firstName,
          last_name: lastName,
          ...(companyId ? { company_id: companyId } : {}),
        }
      }
    });

    if (error) {
      toast({
        title: "Eroare la înregistrare",
        description: authErrorMessage(error),
        variant: "destructive",
      });
      return { error };
    }

    toast({
      title: "Cont creat cu succes!",
      description: "Confirmă adresa de email din mesajul primit, apoi așteaptă aprobarea.",
    });
    return { error: null };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: normalizeEmail(email),
      password,
    });

    if (error) {
      toast({
        title: "Eroare la autentificare",
        description: authErrorMessage(error),
        variant: "destructive",
      });
      return { error };
    }

    toast({
      title: "Autentificare reușită!",
      description: "Bine ai venit înapoi.",
    });
    return { error: null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
    setUserRoles([]);
    toast({
      title: "Deconectat",
      description: "Ai fost deconectat cu succes.",
    });
  };

  const requestPasswordReset = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(normalizeEmail(email), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      toast({ title: "Eroare", description: authErrorMessage(error), variant: "destructive" });
      return { error };
    }
    return { error: null };
  };

  // Used on the /reset-password page (recovery session), so no current password is sent.
  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      toast({ title: "Eroare", description: authErrorMessage(error), variant: "destructive" });
      return { error };
    }
    return { error: null };
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: new Error('Nu ești autentificat') };

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    if (error) {
      toast({
        title: "Eroare",
        description: "Nu s-a putut actualiza profilul.",
        variant: "destructive",
      });
      return { error };
    }

    // Refresh profile
    const newProfile = await fetchProfile(user.id);
    setProfile(newProfile);
    
    toast({
      title: "Profil actualizat",
      description: "Modificările au fost salvate.",
    });
    return { error: null };
  };

  // SECURITY: Use user_roles table as the source of truth for authorization
  // profile.role is DEPRECATED and kept only for backwards compatibility display
  const isAdmin = userRoles.includes('admin');

  return (
    <AuthContext.Provider value={{
      user,
      session,
      profile,
      loading,
      isAdmin,
      signUp,
      signIn,
      signOut,
      requestPasswordReset,
      updatePassword,
      updateProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}