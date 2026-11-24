import { useCallback } from 'react';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

type Dict = Record<string, string>;

const ro: Dict = {
  'forgot.link': 'Ai uitat parola?',
  'forgot.title': 'Resetează parola',
  'forgot.desc': 'Scrie adresa de email a contului. Îți trimitem un link pentru a alege o parolă nouă.',
  'forgot.send': 'Trimite linkul',
  'forgot.sending': 'Se trimite…',
  'forgot.sent': 'Dacă există un cont cu această adresă, ai primit un email cu linkul de resetare. Verifică și folderul Spam.',
  'forgot.back': 'Înapoi la autentificare',
  'email.invalid': 'Email invalid',
  'password.required': 'Introdu parola',
  'reset.title': 'Alege o parolă nouă',
  'reset.desc': 'Parola nouă va înlocui parola veche.',
  'reset.password': 'Parolă nouă',
  'reset.confirm': 'Confirmă parola nouă',
  'reset.save': 'Salvează parola',
  'reset.saving': 'Se salvează…',
  'reset.tooShort': 'Parola trebuie să aibă minim 8 caractere',
  'reset.mismatch': 'Parolele nu coincid',
  'reset.done': 'Parola a fost schimbată. Acum ești autentificat.',
  'reset.continue': 'Mergi la training',
  'reset.checking': 'Se verifică linkul…',
  'reset.invalid': 'Linkul de resetare a expirat sau a fost deja folosit. Cere un link nou.',
  'reset.requestNew': 'Cere un link nou',
};

const de: Dict = {
  'forgot.link': 'Passwort vergessen?',
  'forgot.title': 'Passwort zurücksetzen',
  'forgot.desc': 'Gib die E-Mail-Adresse deines Kontos ein. Wir senden dir einen Link, um ein neues Passwort zu wählen.',
  'forgot.send': 'Link senden',
  'forgot.sending': 'Wird gesendet…',
  'forgot.sent': 'Falls ein Konto mit dieser Adresse existiert, hast du eine E-Mail mit dem Link erhalten. Prüfe auch den Spam-Ordner.',
  'forgot.back': 'Zurück zur Anmeldung',
  'email.invalid': 'Ungültige E-Mail',
  'password.required': 'Passwort eingeben',
  'reset.title': 'Neues Passwort wählen',
  'reset.desc': 'Das neue Passwort ersetzt das alte.',
  'reset.password': 'Neues Passwort',
  'reset.confirm': 'Neues Passwort bestätigen',
  'reset.save': 'Passwort speichern',
  'reset.saving': 'Wird gespeichert…',
  'reset.tooShort': 'Das Passwort muss mindestens 8 Zeichen haben',
  'reset.mismatch': 'Die Passwörter stimmen nicht überein',
  'reset.done': 'Das Passwort wurde geändert. Du bist jetzt angemeldet.',
  'reset.continue': 'Zum Training',
  'reset.checking': 'Link wird geprüft…',
  'reset.invalid': 'Der Link ist abgelaufen oder wurde bereits verwendet. Fordere einen neuen Link an.',
  'reset.requestNew': 'Neuen Link anfordern',
};

const en: Dict = {
  'forgot.link': 'Forgot your password?',
  'forgot.title': 'Reset password',
  'forgot.desc': "Enter your account's email address. We'll send you a link to choose a new password.",
  'forgot.send': 'Send link',
  'forgot.sending': 'Sending…',
  'forgot.sent': 'If an account exists for this address, you received an email with the reset link. Check your Spam folder too.',
  'forgot.back': 'Back to sign in',
  'email.invalid': 'Invalid email',
  'password.required': 'Enter your password',
  'reset.title': 'Choose a new password',
  'reset.desc': 'The new password replaces the old one.',
  'reset.password': 'New password',
  'reset.confirm': 'Confirm new password',
  'reset.save': 'Save password',
  'reset.saving': 'Saving…',
  'reset.tooShort': 'The password must be at least 8 characters',
  'reset.mismatch': 'The passwords do not match',
  'reset.done': 'Your password was changed. You are now signed in.',
  'reset.continue': 'Go to training',
  'reset.checking': 'Checking the link…',
  'reset.invalid': 'This reset link expired or was already used. Request a new link.',
  'reset.requestNew': 'Request a new link',
};

const DICTS: Record<Language, Dict> = { ro, de, en };

export function authText(language: Language, key: string): string {
  return DICTS[language]?.[key] ?? ro[key] ?? key;
}

export function useAuthT() {
  const { language } = useLanguage();
  return useCallback((key: string) => authText(language, key), [language]);
}
