import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export function usePushNotifications() {
  const { user } = useAuth();
  const [isSupported, setIsSupported] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if push notifications are supported
    const supported = 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window;
    setIsSupported(supported);
    
    if (supported) {
      setPermission(Notification.permission);
    }
    
    checkSubscription();
  }, [user]);

  const checkSubscription = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await supabase
        .from('push_subscriptions')
        .select('id')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .single();

      setIsSubscribed(!!data);
    } catch (error) {
      setIsSubscribed(false);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const requestPermission = async (): Promise<boolean> => {
    if (!isSupported) {
      toast.error('Notificările push nu sunt suportate în acest browser');
      return false;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      
      if (result === 'granted') {
        toast.success('Notificări activate!');
        return true;
      } else if (result === 'denied') {
        toast.error('Notificările au fost blocate. Activează-le din setările browserului.');
        return false;
      }
      
      return false;
    } catch (error) {
      console.error('Error requesting permission:', error);
      toast.error('Eroare la activarea notificărilor');
      return false;
    }
  };

  const subscribe = async () => {
    if (!user || !isSupported) return false;

    try {
      // First request permission
      if (permission !== 'granted') {
        const granted = await requestPermission();
        if (!granted) return false;
      }

      // For now, we'll use a simplified approach without a service worker
      // In production, you'd want to set up a proper service worker and VAPID keys
      
      // Save a placeholder subscription to the database
      const { error } = await supabase
        .from('push_subscriptions')
        .upsert({
          user_id: user.id,
          endpoint: `browser-${user.id}-${Date.now()}`,
          p256dh_key: 'placeholder',
          auth_key: 'placeholder',
          is_active: true,
        }, {
          onConflict: 'endpoint',
        });

      if (error) throw error;

      setIsSubscribed(true);
      toast.success('Notificări push activate!');
      return true;
    } catch (error) {
      console.error('Error subscribing:', error);
      toast.error('Eroare la activarea notificărilor');
      return false;
    }
  };

  const unsubscribe = async () => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('push_subscriptions')
        .update({ is_active: false })
        .eq('user_id', user.id);

      if (error) throw error;

      setIsSubscribed(false);
      toast.success('Notificări dezactivate');
      return true;
    } catch (error) {
      console.error('Error unsubscribing:', error);
      toast.error('Eroare la dezactivarea notificărilor');
      return false;
    }
  };

  // Show a browser notification
  const showNotification = (title: string, options?: NotificationOptions) => {
    if (!isSupported || permission !== 'granted') return;

    try {
      new Notification(title, {
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        ...options,
      });
    } catch (error) {
      console.error('Error showing notification:', error);
    }
  };

  return {
    isSupported,
    isSubscribed,
    permission,
    loading,
    requestPermission,
    subscribe,
    unsubscribe,
    showNotification,
  };
}
