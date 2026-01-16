import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Award } from 'lucide-react';

interface Certificate {
  id: string;
  certificate_code: string;
  trainee_name: string;
  issued_at: string;
  average_score: number;
}

export function useCertificateNotifications(isAdmin: boolean) {
  const notificationPermission = useRef<NotificationPermission>('default');

  // Request notification permission on mount
  useEffect(() => {
    if (!isAdmin) return;

    if ('Notification' in window) {
      notificationPermission.current = Notification.permission;
      
      if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
          notificationPermission.current = permission;
          if (permission === 'granted') {
            console.log('Notification permission granted');
          }
        });
      }
    }
  }, [isAdmin]);

  // Show browser notification
  const showBrowserNotification = useCallback((certificate: Certificate) => {
    if (!('Notification' in window) || Notification.permission !== 'granted') {
      return;
    }

    const notification = new Notification('🎓 Certificat Nou Emis!', {
      body: `${certificate.trainee_name} a obținut certificatul ${certificate.certificate_code} cu scorul ${certificate.average_score}%`,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      tag: `certificate-${certificate.id}`,
      requireInteraction: false,
    });

    notification.onclick = () => {
      window.focus();
      notification.close();
    };

    // Auto-close after 10 seconds
    setTimeout(() => notification.close(), 10000);
  }, []);

  // Show in-app toast notification
  const showToastNotification = useCallback((certificate: Certificate) => {
    toast.success(
      `🎓 ${certificate.trainee_name} a obținut certificatul!`,
      {
        description: `Cod: ${certificate.certificate_code} • Scor: ${certificate.average_score}%`,
        duration: 8000,
        action: {
          label: 'Vezi',
          onClick: () => {
            window.open(`/verify/${certificate.certificate_code}`, '_blank');
          },
        },
      }
    );
  }, []);

  // Subscribe to realtime certificate inserts
  useEffect(() => {
    if (!isAdmin) return;

    console.log('Setting up certificate realtime subscription for admin...');

    const channel = supabase
      .channel('admin-certificate-notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'certificates',
        },
        (payload) => {
          console.log('New certificate detected:', payload);
          
          const certificate = payload.new as Certificate;
          
          // Show both browser and toast notifications
          showBrowserNotification(certificate);
          showToastNotification(certificate);
        }
      )
      .subscribe((status) => {
        console.log('Certificate notification channel status:', status);
      });

    return () => {
      console.log('Cleaning up certificate notification subscription');
      supabase.removeChannel(channel);
    };
  }, [isAdmin, showBrowserNotification, showToastNotification]);

  // Manual function to request permission
  const requestNotificationPermission = useCallback(async () => {
    if (!('Notification' in window)) {
      toast.error('Browser-ul nu suportă notificări');
      return false;
    }

    const permission = await Notification.requestPermission();
    notificationPermission.current = permission;
    
    if (permission === 'granted') {
      toast.success('Notificările au fost activate!');
      return true;
    } else if (permission === 'denied') {
      toast.error('Notificările au fost blocate. Activează-le din setările browser-ului.');
      return false;
    }
    
    return false;
  }, []);

  // Check if notifications are enabled
  const areNotificationsEnabled = useCallback(() => {
    return 'Notification' in window && Notification.permission === 'granted';
  }, []);

  return {
    requestNotificationPermission,
    areNotificationsEnabled,
    notificationPermission: notificationPermission.current,
  };
}