/** Emails are stored lowercase; trimming avoids failures from spaces added by autofill/mobile keyboards. */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

interface AuthLikeError {
  message: string;
  code?: string;
  status?: number;
}

/**
 * Maps sign-in/sign-up/reset errors to a clear Romanian message (the auth toasts are
 * shown from the auth provider, which sits outside the language provider).
 */
export function authErrorMessage(error: AuthLikeError): string {
  const msg = error.message.toLowerCase();
  const code = error.code ?? '';
  if (code === 'invalid_credentials' || msg.includes('invalid login credentials')) {
    return 'Email sau parolă incorectă. Dacă ai uitat parola, folosește „Ai uitat parola?”.';
  }
  if (code === 'email_not_confirmed' || msg.includes('email not confirmed')) {
    return 'Adresa de email nu este confirmată. Deschide linkul de confirmare primit pe email.';
  }
  if (code === 'user_already_exists' || msg.includes('already registered')) {
    return 'Există deja un cont cu acest email. Autentifică-te sau folosește „Ai uitat parola?”.';
  }
  if (code === 'over_email_send_rate_limit' || code === 'over_request_rate_limit' || error.status === 429 || msg.includes('rate limit')) {
    return 'Prea multe încercări. Așteaptă câteva minute și încearcă din nou.';
  }
  if (code === 'weak_password' || msg.includes('password should') || msg.includes('weak')) {
    return 'Parola este prea slabă sau prea des folosită. Alege o parolă mai lungă, cu litere și cifre.';
  }
  if (code === 'same_password' || msg.includes('different from the old')) {
    return 'Noua parolă trebuie să fie diferită de cea veche.';
  }
  if (code === 'email_address_invalid' || msg.includes('email address is not allowed') || msg.includes('is invalid')) {
    return 'Această adresă de email nu poate primi emailuri. Verifică dacă este scrisă corect.';
  }
  if (msg.includes('failed to fetch') || msg.includes('network')) {
    return 'Nu există conexiune la internet. Verifică conexiunea și încearcă din nou.';
  }
  return error.message;
}
