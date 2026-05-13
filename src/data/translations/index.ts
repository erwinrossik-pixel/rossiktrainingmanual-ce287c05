import { Language } from '@/contexts/LanguageContext';

// Chapter translations type
type ChapterTranslations = Record<string, Record<string, string>>;

// Map of chapterId -> dynamic loader (each becomes its own chunk via Vite code-splitting)
const chapterLoaders: Record<string, () => Promise<{ default?: ChapterTranslations } & Record<string, ChapterTranslations>>> = {
  intro: () => import('./chapters/intro'),
  mindset: () => import('./chapters/mindset'),
  'soft-skills': () => import('./chapters/softskills'),
  workflow: () => import('./chapters/workflow'),
  vehicle: () => import('./chapters/vehicle'),
  loading: () => import('./chapters/loading'),
  documents: () => import('./chapters/documents'),
  customs: () => import('./chapters/customs'),
  pricing: () => import('./chapters/pricing'),
  incoterms: () => import('./chapters/incoterms'),
  adr: () => import('./chapters/adr'),
  claims: () => import('./chapters/claims'),
  insurance: () => import('./chapters/insurance'),
  payment: () => import('./chapters/payment'),
  negotiation: () => import('./chapters/negotiation'),
  communication: () => import('./chapters/communication'),
  'carrier-management': () => import('./chapters/carrier-management'),
  'case-studies': () => import('./chapters/case-studies'),
  checklists: () => import('./chapters/checklists'),
  commercial: () => import('./chapters/commercial'),
  compliance: () => import('./chapters/compliance'),
  'driving-time': () => import('./chapters/driving-time'),
  kpi: () => import('./chapters/kpi'),
  'red-flags': () => import('./chapters/red-flags'),
  reefer: () => import('./chapters/reefer'),
  'licenses-oversize': () => import('./chapters/licenses-oversize'),
  accounting: () => import('./chapters/accounting'),
  clients: () => import('./chapters/clients'),
  emergency: () => import('./chapters/emergency'),
  environment: () => import('./chapters/environment'),
  'europe-zones': () => import('./chapters/europe-zones'),
  exchanges: () => import('./chapters/exchanges'),
  fleet: () => import('./chapters/fleet'),
  glossary: () => import('./chapters/glossary'),
  'risk-management': () => import('./chapters/risk-management'),
  'supply-chain': () => import('./chapters/supply-chain'),
  technology: () => import('./chapters/technology'),
  training: () => import('./chapters/training'),
  translogica: () => import('./chapters/translogica'),
  warehouse: () => import('./chapters/warehouse'),
  intermodal: () => import('./chapters/intermodal'),
  authorities: () => import('./chapters/authorities'),
  sustainability: () => import('./chapters/sustainability'),
  'express-transport': () => import('./chapters/express-transport'),
  'european-countries': () => import('./chapters/european-countries'),
  'high-value-goods': () => import('./chapters/high-value-goods'),
  digitalization: () => import('./chapters/digitalization'),
  'stress-management': () => import('./chapters/stress-management'),
  networking: () => import('./chapters/networking'),
  'professional-development': () => import('./chapters/professional-development'),
};

// Maps the chapterId to the named export inside that module
const exportNames: Record<string, string> = {
  intro: 'introTranslations',
  mindset: 'mindsetTranslations',
  'soft-skills': 'softskillsTranslations',
  workflow: 'workflowTranslations',
  vehicle: 'vehicleTranslations',
  loading: 'loadingTranslations',
  documents: 'documentsTranslations',
  customs: 'customsTranslations',
  pricing: 'pricingTranslations',
  incoterms: 'incotermsTranslations',
  adr: 'adrTranslations',
  claims: 'claimsTranslations',
  insurance: 'insuranceTranslations',
  payment: 'paymentTranslations',
  negotiation: 'negotiationTranslations',
  communication: 'communicationTranslations',
  'carrier-management': 'carrierManagementTranslations',
  'case-studies': 'caseStudiesTranslations',
  checklists: 'checklistsTranslations',
  commercial: 'commercialTranslations',
  compliance: 'complianceTranslations',
  'driving-time': 'drivingTimeTranslations',
  kpi: 'kpiTranslations',
  'red-flags': 'redFlagsTranslations',
  reefer: 'reeferTranslations',
  'licenses-oversize': 'licensesOversizeTranslations',
  accounting: 'accountingTranslations',
  clients: 'clientsTranslations',
  emergency: 'emergencyTranslations',
  environment: 'environmentTranslations',
  'europe-zones': 'europeZonesTranslations',
  exchanges: 'exchangesTranslations',
  fleet: 'fleetTranslations',
  glossary: 'glossaryTranslations',
  'risk-management': 'riskManagementTranslations',
  'supply-chain': 'supplyChainTranslations',
  technology: 'technologyTranslations',
  training: 'trainingTranslations',
  translogica: 'translogicaTranslations',
  warehouse: 'warehouseTranslations',
  intermodal: 'intermodalTranslations',
  authorities: 'authoritiesTranslations',
  sustainability: 'sustainabilityTranslations',
  'express-transport': 'expressTransportTranslations',
  'european-countries': 'europeanCountriesTranslations',
  'high-value-goods': 'highValueGoodsTranslations',
  digitalization: 'digitalizationTranslations',
  'stress-management': 'stressManagementTranslations',
  networking: 'networkingTranslations',
  'professional-development': 'professionalDevelopmentTranslations',
};

// Cache of loaded chapter translations
const cache: Record<string, ChapterTranslations> = {};
// In-flight promises to deduplicate concurrent loads (resolves to null on failure)
const inflight: Record<string, Promise<ChapterTranslations | null>> = {};

const MAX_ATTEMPTS = 3;
const BASE_DELAY_MS = 400;

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

// ─────────────────────────────────────────────────────────────────────────────
// Performance metrics
// Tracks per-chapter load times, cache hits, retries, and failures.
// Exposed in dev via `window.__translationMetrics()` for ad-hoc inspection.
// ─────────────────────────────────────────────────────────────────────────────
interface ChapterMetric {
  chapterId: string;
  loads: number;          // successful network loads
  cacheHits: number;      // calls served from in-memory cache
  retries: number;        // retry attempts beyond the first try
  failures: number;       // calls that exhausted all retries
  totalLoadMs: number;    // sum of successful load durations
  lastLoadMs: number;     // duration of most recent successful load
  fastestMs: number;      // best successful load time
  slowestMs: number;      // worst successful load time
}

const metrics: Record<string, ChapterMetric> = {};
const isDev =
  typeof import.meta !== 'undefined' && (import.meta as any)?.env?.DEV === true;

function getMetric(chapterId: string): ChapterMetric {
  if (!metrics[chapterId]) {
    metrics[chapterId] = {
      chapterId,
      loads: 0,
      cacheHits: 0,
      retries: 0,
      failures: 0,
      totalLoadMs: 0,
      lastLoadMs: 0,
      fastestMs: Infinity,
      slowestMs: 0,
    };
  }
  return metrics[chapterId];
}

function recordCacheHit(chapterId: string) {
  const m = getMetric(chapterId);
  m.cacheHits += 1;
  if (isDev) {
    console.debug(
      `%c[translations] cache hit%c ${chapterId} %c(${m.cacheHits} total)`,
      'color:#16a34a;font-weight:bold',
      'color:inherit',
      'color:#9ca3af'
    );
  }
}

function recordLoadSuccess(chapterId: string, durationMs: number, attempt: number) {
  const m = getMetric(chapterId);
  m.loads += 1;
  m.lastLoadMs = durationMs;
  m.totalLoadMs += durationMs;
  m.fastestMs = Math.min(m.fastestMs, durationMs);
  m.slowestMs = Math.max(m.slowestMs, durationMs);
  if (attempt > 1) m.retries += attempt - 1;

  if (isDev) {
    const color = durationMs < 100 ? '#16a34a' : durationMs < 500 ? '#f59e0b' : '#dc2626';
    console.debug(
      `%c[translations] loaded%c ${chapterId} %cin ${durationMs.toFixed(0)}ms` +
        (attempt > 1 ? ` (after ${attempt} attempts)` : ''),
      'color:#2563eb;font-weight:bold',
      'color:inherit',
      `color:${color}`
    );
  }
}

function recordFailure(chapterId: string) {
  const m = getMetric(chapterId);
  m.failures += 1;
}

/** Returns a snapshot of all collected translation-loading metrics. */
export function getTranslationMetrics(): {
  perChapter: ChapterMetric[];
  totals: {
    chaptersTracked: number;
    totalLoads: number;
    totalCacheHits: number;
    totalRetries: number;
    totalFailures: number;
    avgLoadMs: number;
  };
} {
  const perChapter = Object.values(metrics).map((m) => ({ ...m }));
  const totalLoads = perChapter.reduce((s, m) => s + m.loads, 0);
  const totalLoadMs = perChapter.reduce((s, m) => s + m.totalLoadMs, 0);
  return {
    perChapter,
    totals: {
      chaptersTracked: perChapter.length,
      totalLoads,
      totalCacheHits: perChapter.reduce((s, m) => s + m.cacheHits, 0),
      totalRetries: perChapter.reduce((s, m) => s + m.retries, 0),
      totalFailures: perChapter.reduce((s, m) => s + m.failures, 0),
      avgLoadMs: totalLoads > 0 ? totalLoadMs / totalLoads : 0,
    },
  };
}

/** Pretty-print the metrics summary to the console. */
export function printTranslationMetrics(): void {
  const snap = getTranslationMetrics();
  console.group('%c📊 Translation Loading Metrics', 'color:#2563eb;font-weight:bold;font-size:13px');
  console.log('Totals:', snap.totals);
  if (snap.perChapter.length > 0) {
    // Sanitize Infinity for cleaner console table output
    console.table(
      snap.perChapter.map((m) => ({
        ...m,
        fastestMs: m.fastestMs === Infinity ? 0 : Math.round(m.fastestMs),
        slowestMs: Math.round(m.slowestMs),
        lastLoadMs: Math.round(m.lastLoadMs),
        totalLoadMs: Math.round(m.totalLoadMs),
      }))
    );
  }
  console.groupEnd();
}

// Expose for in-browser debugging (no-op on server)
if (typeof window !== 'undefined') {
  (window as any).__translationMetrics = printTranslationMetrics;
}

/**
 * Asynchronously load a chapter's translations with automatic retries
 * (exponential backoff). Cached after first successful load.
 *
 * Resolves to `null` if all retry attempts fail — callers can detect this
 * to display an error UI. The English version is also warmed in the
 * background as a graceful fallback for non-English users.
 *
 * Pass `{ forceReload: true }` to bypass the cache and retry from scratch
 * (e.g. when a user clicks a "Retry" button).
 */
export async function loadChapterTranslations(
  chapterId: string,
  language?: Language,
  options?: { forceReload?: boolean }
): Promise<ChapterTranslations | null> {
  if (options?.forceReload) {
    delete cache[chapterId];
    delete inflight[chapterId];
  }

  // Warm English fallback in the background when the requested language
  // isn't English and we haven't loaded it yet.
  if (
    language &&
    language !== 'en' &&
    !cache[chapterId] &&
    !inflight[`${chapterId}::en`]
  ) {
    inflight[`${chapterId}::en`] = doLoadWithRetry(chapterId).finally(() => {
      delete inflight[`${chapterId}::en`];
    });
  }

  if (cache[chapterId]) {
    recordCacheHit(chapterId);
    return cache[chapterId];
  }
  if (inflight[chapterId]) return inflight[chapterId];

  inflight[chapterId] = doLoadWithRetry(chapterId).finally(() => {
    delete inflight[chapterId];
  });
  return inflight[chapterId];
}

async function doLoadWithRetry(
  chapterId: string
): Promise<ChapterTranslations | null> {
  const startedAt = performance.now();
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const result = await doLoad(chapterId);
      if (result) {
        recordLoadSuccess(chapterId, performance.now() - startedAt, attempt);
        return result;
      }
      // No translations exported under the expected name — not a transient
      // error, no point retrying.
      return null;
    } catch (err) {
      if (attempt === MAX_ATTEMPTS) {
        recordFailure(chapterId);
        console.error(
          `[translations] Failed to load chapter "${chapterId}" after ${MAX_ATTEMPTS} attempts`,
          err
        );
        return null;
      }
      const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1);
      if (isDev) {
        console.warn(
          `%c[translations] retry%c ${chapterId} attempt ${attempt + 1}/${MAX_ATTEMPTS} in ${delay}ms`,
          'color:#f59e0b;font-weight:bold',
          'color:inherit'
        );
      }
      await sleep(delay);
    }
  }
  return null;
}

function doLoad(chapterId: string): Promise<ChapterTranslations | null> {
  const loader = chapterLoaders[chapterId];
  const exportName = exportNames[chapterId];
  if (!loader || !exportName) return Promise.resolve(null);

  // Note: deliberately NOT swallowing the error here so the retry loop
  // above can detect and react to transient failures (network, chunk load).
  return loader().then((mod: any) => {
    const translations = mod[exportName] as ChapterTranslations | undefined;
    if (translations) cache[chapterId] = translations;
    return translations ?? null;
  });
}

/**
 * Convert a camelCase / dot.notation key into a readable label, used as the
 * very last fallback when neither the requested language nor English is
 * available yet.
 *   "chapterTitle"           -> "Chapter title"
 *   "intro.welcomeMessage"   -> "Welcome message"
 */
function humanizeKey(key: string): string {
  const last = key.split('.').pop() ?? key;
  const spaced = last
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .trim();
  if (!spaced) return key;
  return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
}

/**
 * Synchronous lookup against the in-memory cache.
 * Resolution order:
 *   1. Requested language for this chapter (if cached)
 *   2. English for this chapter (if cached) — graceful fallback
 *   3. Humanized version of the key — last-resort placeholder
 */
export function getChapterTranslation(
  chapterId: string,
  key: string,
  language: Language
): string {
  const chapterTranslations = cache[chapterId];
  if (chapterTranslations) {
    const target = chapterTranslations[language]?.[key];
    if (target) return target;

    const english = chapterTranslations.en?.[key];
    if (english) return english;
  }

  return humanizeKey(key);
}

/** Returns true if a chapter's translations are already in the cache. */
export function hasChapterTranslations(chapterId: string): boolean {
  return Boolean(cache[chapterId]);
}

