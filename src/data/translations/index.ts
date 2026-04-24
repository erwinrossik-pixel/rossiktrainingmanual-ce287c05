import { Language } from '@/contexts/LanguageContext';

// Chapter translations type
type ChapterTranslations = Record<string, Record<string, string>>;

// Map of chapterId -> dynamic loader (each becomes its own chunk via Vite code-splitting)
const chapterLoaders: Record<string, () => Promise<{ default?: ChapterTranslations } & Record<string, ChapterTranslations>>> = {
  intro: () => import('./chapters/intro') as any,
  mindset: () => import('./chapters/mindset') as any,
  'soft-skills': () => import('./chapters/softskills') as any,
  workflow: () => import('./chapters/workflow') as any,
  vehicle: () => import('./chapters/vehicle') as any,
  loading: () => import('./chapters/loading') as any,
  documents: () => import('./chapters/documents') as any,
  customs: () => import('./chapters/customs') as any,
  pricing: () => import('./chapters/pricing') as any,
  incoterms: () => import('./chapters/incoterms') as any,
  adr: () => import('./chapters/adr') as any,
  claims: () => import('./chapters/claims') as any,
  insurance: () => import('./chapters/insurance') as any,
  payment: () => import('./chapters/payment') as any,
  negotiation: () => import('./chapters/negotiation') as any,
  communication: () => import('./chapters/communication') as any,
  'carrier-management': () => import('./chapters/carrier-management') as any,
  'case-studies': () => import('./chapters/case-studies') as any,
  checklists: () => import('./chapters/checklists') as any,
  commercial: () => import('./chapters/commercial') as any,
  compliance: () => import('./chapters/compliance') as any,
  'driving-time': () => import('./chapters/driving-time') as any,
  kpi: () => import('./chapters/kpi') as any,
  'red-flags': () => import('./chapters/red-flags') as any,
  reefer: () => import('./chapters/reefer') as any,
  'licenses-oversize': () => import('./chapters/licenses-oversize') as any,
  accounting: () => import('./chapters/accounting') as any,
  clients: () => import('./chapters/clients') as any,
  emergency: () => import('./chapters/emergency') as any,
  environment: () => import('./chapters/environment') as any,
  'europe-zones': () => import('./chapters/europe-zones') as any,
  exchanges: () => import('./chapters/exchanges') as any,
  fleet: () => import('./chapters/fleet') as any,
  glossary: () => import('./chapters/glossary') as any,
  'risk-management': () => import('./chapters/risk-management') as any,
  'supply-chain': () => import('./chapters/supply-chain') as any,
  technology: () => import('./chapters/technology') as any,
  training: () => import('./chapters/training') as any,
  translogica: () => import('./chapters/translogica') as any,
  warehouse: () => import('./chapters/warehouse') as any,
  intermodal: () => import('./chapters/intermodal') as any,
  authorities: () => import('./chapters/authorities') as any,
  sustainability: () => import('./chapters/sustainability') as any,
  'express-transport': () => import('./chapters/express-transport') as any,
  'european-countries': () => import('./chapters/european-countries') as any,
  'high-value-goods': () => import('./chapters/high-value-goods') as any,
  digitalization: () => import('./chapters/digitalization') as any,
  'stress-management': () => import('./chapters/stress-management') as any,
  networking: () => import('./chapters/networking') as any,
  'professional-development': () => import('./chapters/professional-development') as any,
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
// In-flight promises to deduplicate concurrent loads
const inflight: Record<string, Promise<ChapterTranslations | null>> = {};

/**
 * Asynchronously load a chapter's translations. Cached after first load.
 */
export async function loadChapterTranslations(chapterId: string): Promise<ChapterTranslations | null> {
  if (cache[chapterId]) return cache[chapterId];
  if (inflight[chapterId]) return inflight[chapterId];

  const loader = chapterLoaders[chapterId];
  const exportName = exportNames[chapterId];
  if (!loader || !exportName) return null;

  inflight[chapterId] = loader()
    .then((mod: any) => {
      const translations = mod[exportName] as ChapterTranslations | undefined;
      if (translations) cache[chapterId] = translations;
      return translations ?? null;
    })
    .catch(() => null)
    .finally(() => {
      delete inflight[chapterId];
    });

  return inflight[chapterId];
}

/**
 * Synchronous lookup against the in-memory cache. Returns the key itself if
 * the chapter hasn't been loaded yet — callers should trigger
 * `loadChapterTranslations` and re-render once the promise resolves.
 */
export function getChapterTranslation(chapterId: string, key: string, language: Language): string {
  const chapterTranslations = cache[chapterId];
  if (!chapterTranslations) {
    return key;
  }

  const languageTranslations = chapterTranslations[language];
  if (!languageTranslations) {
    return chapterTranslations.en?.[key] || key;
  }

  return languageTranslations[key] || chapterTranslations.en?.[key] || key;
}

/** Returns true if a chapter's translations are already in the cache. */
export function hasChapterTranslations(chapterId: string): boolean {
  return Boolean(cache[chapterId]);
}
