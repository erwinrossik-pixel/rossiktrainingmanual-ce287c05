import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useSubscription, PlanType } from './useSubscription';

interface PremiumChapter {
  chapter_id: string;
  min_plan_type: PlanType;
}

interface UsePremiumChaptersResult {
  premiumChapters: PremiumChapter[];
  loading: boolean;
  isChapterLocked: (chapterId: string) => boolean;
  getChapterMinPlan: (chapterId: string) => PlanType | null;
}

export function usePremiumChapters(): UsePremiumChaptersResult {
  const [premiumChapters, setPremiumChapters] = useState<PremiumChapter[]>([]);
  const [loading, setLoading] = useState(true);
  const { canAccessChapter } = useSubscription();

  useEffect(() => {
    const fetchPremiumChapters = async () => {
      try {
        const { data, error } = await supabase
          .from('premium_chapters')
          .select('chapter_id, min_plan_type');

        if (error) throw error;
        
        setPremiumChapters((data || []).map(item => ({
          chapter_id: item.chapter_id,
          min_plan_type: item.min_plan_type as PlanType
        })));
      } catch (error) {
        console.error('Error fetching premium chapters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPremiumChapters();
  }, []);

  const getChapterMinPlan = (chapterId: string): PlanType | null => {
    const premium = premiumChapters.find(p => p.chapter_id === chapterId);
    return premium?.min_plan_type || null;
  };

  const isChapterLocked = (chapterId: string): boolean => {
    const minPlan = getChapterMinPlan(chapterId);
    if (!minPlan) return false; // Not a premium chapter
    return !canAccessChapter(minPlan);
  };

  return {
    premiumChapters,
    loading,
    isChapterLocked,
    getChapterMinPlan
  };
}
