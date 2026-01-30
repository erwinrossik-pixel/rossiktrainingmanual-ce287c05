import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface TranslationOverride {
  id: string;
  chapter_id: string;
  language: string;
  translation_key: string;
  original_value: string | null;
  corrected_value: string;
  fix_source: string;
  applied_at: string;
  is_active: boolean;
}

export const useTranslationOverrides = (chapterId?: string, language: string = 'ro') => {
  return useQuery({
    queryKey: ['translation-overrides', chapterId, language],
    queryFn: async () => {
      let query = supabase
        .from('translation_overrides')
        .select('*')
        .eq('language', language)
        .eq('is_active', true);

      if (chapterId) {
        query = query.eq('chapter_id', chapterId);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching translation overrides:', error);
        return [];
      }

      return data as TranslationOverride[];
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};

// Helper function to apply overrides to a translation object
export const applyTranslationOverrides = (
  translations: Record<string, string>,
  overrides: TranslationOverride[]
): Record<string, string> => {
  const result = { ...translations };

  for (const override of overrides) {
    if (override.is_active && override.corrected_value) {
      // Support nested keys like "intro.title"
      const keyParts = override.translation_key.split('.');
      if (keyParts.length === 1) {
        result[override.translation_key] = override.corrected_value;
      } else {
        // For simple keys, just apply directly
        const simpleKey = keyParts[keyParts.length - 1];
        result[simpleKey] = override.corrected_value;
      }
    }
  }

  return result;
};

// Hook to get all overrides for admin dashboard
export const useAllTranslationOverrides = () => {
  return useQuery({
    queryKey: ['all-translation-overrides'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('translation_overrides')
        .select('*')
        .order('applied_at', { ascending: false });

      if (error) {
        console.error('Error fetching all translation overrides:', error);
        return [];
      }

      return data as TranslationOverride[];
    },
  });
};
