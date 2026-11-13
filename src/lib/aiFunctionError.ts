import { FunctionsHttpError } from '@supabase/supabase-js';

type Lang = 'ro' | 'de' | 'en';
type AiErrorCode = 'credit_limit_reached' | 'credits_exhausted' | 'ai_access_denied' | 'rate_limited';

const MESSAGES: Record<AiErrorCode, Record<Lang, string>> = {
  credit_limit_reached: {
    ro: 'Limita de credite AI a spațiului de lucru a fost atinsă. Un administrator al spațiului de lucru trebuie să mărească limita.',
    de: 'Das KI-Kreditlimit des Arbeitsbereichs ist erreicht. Ein Arbeitsbereich-Administrator muss das Limit erhöhen.',
    en: 'The workspace AI credit limit has been reached. A workspace admin needs to raise the limit.',
  },
  credits_exhausted: {
    ro: 'Creditele AI s-au epuizat. Adaugă credite pentru a folosi funcțiile AI.',
    de: 'Die KI-Credits sind aufgebraucht. Bitte Credits aufladen, um KI-Funktionen zu nutzen.',
    en: 'AI credits are used up. Add credits to use AI features.',
  },
  ai_access_denied: {
    ro: 'Accesul la AI este momentan blocat pentru acest spațiu de lucru.',
    de: 'Der KI-Zugriff ist für diesen Arbeitsbereich derzeit gesperrt.',
    en: 'AI access is currently blocked for this workspace.',
  },
  rate_limited: {
    ro: 'Prea multe cereri AI. Încearcă din nou peste câteva minute.',
    de: 'Zu viele KI-Anfragen. Bitte in einigen Minuten erneut versuchen.',
    en: 'Too many AI requests. Please try again in a few minutes.',
  },
};

const isCode = (v: unknown): v is AiErrorCode => typeof v === 'string' && v in MESSAGES;

/**
 * Turns an AI edge-function failure (credit limit, exhausted credits, rate limit)
 * into a clear, translated message. Returns null for other errors.
 */
export async function getAiErrorMessage(error: unknown, language: string): Promise<string | null> {
  const lang: Lang = language === 'de' || language === 'en' ? language : 'ro';
  if (!(error instanceof FunctionsHttpError)) return null;
  try {
    const body: unknown = await (error.context as Response).clone().json();
    const code = (body as { code?: unknown } | null)?.code;
    return isCode(code) ? MESSAGES[code][lang] : null;
  } catch {
    return null;
  }
}
