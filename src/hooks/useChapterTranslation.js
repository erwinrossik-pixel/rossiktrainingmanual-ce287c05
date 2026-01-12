import { useLanguage } from '@/contexts/LanguageContext';
import { getChapterTranslation } from '@/data/translations';

export function useChapterTranslation(chapterId) {
  const { language } = useLanguage();
  
  const ct = (key) => {
    return getChapterTranslation(chapterId, key, language);
  };
  
  return { ct, language };
}
