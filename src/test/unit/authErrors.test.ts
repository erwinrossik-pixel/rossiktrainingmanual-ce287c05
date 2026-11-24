// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { normalizeEmail, authErrorMessage } from '@/lib/authErrors';

describe('sign-in email normalization', () => {
  it('trims spaces and lowercases so autofilled emails still sign in', () => {
    expect(normalizeEmail('  Josua.Ursu@Rossik.eu ')).toBe('josua.ursu@rossik.eu');
  });
});

describe('auth error messages', () => {
  it('wrong password points to password reset', () => {
    expect(authErrorMessage({ message: 'Invalid login credentials', code: 'invalid_credentials', status: 400 }))
      .toContain('Ai uitat parola?');
  });
  it('unconfirmed email is explained instead of shown in English', () => {
    expect(authErrorMessage({ message: 'Email not confirmed', code: 'email_not_confirmed' }))
      .toContain('nu este confirmată');
  });
  it('rate limiting asks to wait', () => {
    expect(authErrorMessage({ message: 'email rate limit exceeded', status: 429 })).toContain('Așteaptă');
  });
  it('mistyped or placeholder email domains get a Romanian explanation', () => {
    expect(authErrorMessage({ message: 'This email address is not allowed. Placeholder, reserved, or mistyped domains such as example.com or gmai.com cannot receive email.', status: 400 }))
      .toContain('nu poate primi emailuri');
  });
});
