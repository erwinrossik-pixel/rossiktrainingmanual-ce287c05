import { useEffect, useState, useCallback } from 'react';
import { driver, Driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { useAuth } from './useAuth';
import { supabase } from '@/integrations/supabase/client';

const TOUR_STEPS = [
  {
    element: '[data-tour="sidebar"]',
    popover: {
      title: '📚 Meniul Principal',
      description: 'Aici găsești toate capitolele de training. Click pe orice capitol pentru a-l citi.',
      side: 'right' as const,
    }
  },
  {
    element: '[data-tour="progress-button"]',
    popover: {
      title: '📊 Progresul Tău',
      description: 'Urmărește-ți progresul, vezi statisticile și certificările.',
      side: 'bottom' as const,
    }
  },
  {
    element: '[data-tour="simulation-button"]',
    popover: {
      title: '🎮 Simulări Operaționale',
      description: 'Testează-ți cunoștințele cu scenarii reale din industrie. Câștigi XP și deblocezi achievements!',
      side: 'bottom' as const,
    }
  },
  {
    element: '[data-tour="notifications"]',
    popover: {
      title: '🔔 Notificări',
      description: 'Primești alerte pentru achievements noi, reminder-uri și actualizări importante.',
      side: 'bottom' as const,
    }
  },
  {
    element: '[data-tour="user-menu"]',
    popover: {
      title: '👤 Profilul Tău',
      description: 'Accesează profilul, setările și statisticile tale de gamificare.',
      side: 'bottom' as const,
    }
  },
  {
    element: '[data-tour="gamification-stats"]',
    popover: {
      title: '🏆 Gamificare',
      description: 'Urmărește-ți XP-ul, nivelul și streak-ul zilnic. Completează provocări pentru recompense!',
      side: 'left' as const,
    }
  }
];

export function useOnboardingTour() {
  const { user } = useAuth();
  const [hasSeenTour, setHasSeenTour] = useState<boolean | null>(null);
  const [driverInstance, setDriverInstance] = useState<Driver | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Check if user has seen tour
  useEffect(() => {
    const checkTourStatus = async () => {
      if (!user) {
        setHasSeenTour(null);
        return;
      }

      // Check localStorage first for quick response
      const localKey = `tour_seen_${user.id}`;
      const localSeen = localStorage.getItem(localKey);
      
      if (localSeen === 'true') {
        setHasSeenTour(true);
        return;
      }

      // Check database
      const { data } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('id', user.id)
        .single();

      const seen = data?.onboarding_completed ?? false;
      setHasSeenTour(seen);
      
      if (seen) {
        localStorage.setItem(localKey, 'true');
      }
    };

    checkTourStatus();
  }, [user]);

  // Initialize driver when needed
  useEffect(() => {
    if (hasSeenTour === false && isReady) {
      const driverObj = driver({
        showProgress: true,
        animate: true,
        allowClose: true,
        overlayColor: 'rgba(0, 0, 0, 0.75)',
        stagePadding: 10,
        stageRadius: 8,
        popoverClass: 'onboarding-popover',
        progressText: 'Pas {{current}} din {{total}}',
        nextBtnText: 'Următorul →',
        prevBtnText: '← Înapoi',
        doneBtnText: 'Gata! ✓',
        onDestroyed: async () => {
          // Mark tour as complete
          if (user) {
            const localKey = `tour_seen_${user.id}`;
            localStorage.setItem(localKey, 'true');
            setHasSeenTour(true);
            
            await supabase
              .from('profiles')
              .update({ onboarding_completed: true })
              .eq('id', user.id);
          }
        },
        steps: TOUR_STEPS.filter(step => {
          // Only include steps for elements that exist
          return document.querySelector(step.element) !== null;
        })
      });

      setDriverInstance(driverObj);

      // Auto-start tour after a small delay
      setTimeout(() => {
        const validSteps = TOUR_STEPS.filter(step => 
          document.querySelector(step.element) !== null
        );
        
        if (validSteps.length > 0) {
          driverObj.drive();
        }
      }, 1500);

      return () => {
        driverObj.destroy();
      };
    }
  }, [hasSeenTour, isReady, user]);

  const startTour = useCallback(() => {
    if (driverInstance) {
      driverInstance.drive();
    } else {
      // Create new instance for manual start
      const driverObj = driver({
        showProgress: true,
        animate: true,
        allowClose: true,
        overlayColor: 'rgba(0, 0, 0, 0.75)',
        stagePadding: 10,
        stageRadius: 8,
        progressText: 'Pas {{current}} din {{total}}',
        nextBtnText: 'Următorul →',
        prevBtnText: '← Înapoi',
        doneBtnText: 'Gata! ✓',
        steps: TOUR_STEPS.filter(step => 
          document.querySelector(step.element) !== null
        )
      });
      
      driverObj.drive();
    }
  }, [driverInstance]);

  const markReady = useCallback(() => {
    setIsReady(true);
  }, []);

  const resetTour = useCallback(async () => {
    if (user) {
      const localKey = `tour_seen_${user.id}`;
      localStorage.removeItem(localKey);
      setHasSeenTour(false);
      
      await supabase
        .from('profiles')
        .update({ onboarding_completed: false })
        .eq('id', user.id);
    }
  }, [user]);

  return {
    hasSeenTour,
    startTour,
    resetTour,
    markReady,
    isReady
  };
}
