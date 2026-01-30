/**
 * Production-safe logger utility
 * Only logs in development mode unless forced
 */

const isDev = import.meta.env.DEV;

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogOptions {
  force?: boolean;
  tag?: string;
}

const formatMessage = (tag: string | undefined, message: string): string => {
  return tag ? `[${tag}] ${message}` : message;
};

export const logger = {
  debug: (message: string, data?: unknown, options?: LogOptions) => {
    if (isDev || options?.force) {
      console.log(formatMessage(options?.tag, message), data ?? '');
    }
  },

  info: (message: string, data?: unknown, options?: LogOptions) => {
    if (isDev || options?.force) {
      console.info(formatMessage(options?.tag, message), data ?? '');
    }
  },

  warn: (message: string, data?: unknown, options?: LogOptions) => {
    // Warnings always log
    console.warn(formatMessage(options?.tag, message), data ?? '');
  },

  error: (message: string, error?: unknown, options?: LogOptions) => {
    // Errors always log
    console.error(formatMessage(options?.tag, message), error ?? '');
  },

  // Specific loggers for common use cases
  realtime: (message: string, data?: unknown) => {
    if (isDev) {
      console.log(`[REALTIME] ${message}`, data ?? '');
    }
  },

  gamification: (message: string, data?: unknown) => {
    if (isDev) {
      console.log(`[Gamification] ${message}`, data ?? '');
    }
  },

  retention: (message: string, data?: unknown) => {
    if (isDev) {
      console.log(`[Retention] ${message}`, data ?? '');
    }
  },

  certificate: (message: string, data?: unknown) => {
    if (isDev) {
      console.log(`[Certificate] ${message}`, data ?? '');
    }
  },

  training: (message: string, data?: unknown) => {
    if (isDev) {
      console.log(`[Training] ${message}`, data ?? '');
    }
  }
};

export default logger;
