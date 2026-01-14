import { Language } from '@/contexts/LanguageContext';
import { introTranslations } from './chapters/intro';
import { mindsetTranslations } from './chapters/mindset';
import { softskillsTranslations } from './chapters/softskills';
import { workflowTranslations } from './chapters/workflow';
import { vehicleTranslations } from './chapters/vehicle';
import { loadingTranslations } from './chapters/loading';
import { documentsTranslations } from './chapters/documents';
import { customsTranslations } from './chapters/customs';
import { pricingTranslations } from './chapters/pricing';
import { incotermsTranslations } from './chapters/incoterms';
import { adrTranslations } from './chapters/adr';
import { claimsTranslations } from './chapters/claims';
import { insuranceTranslations } from './chapters/insurance';
import { paymentTranslations } from './chapters/payment';
import { negotiationTranslations } from './chapters/negotiation';
import { communicationTranslations } from './chapters/communication';
import { carrierManagementTranslations } from './chapters/carrier-management';
import { caseStudiesTranslations } from './chapters/case-studies';
import { checklistsTranslations } from './chapters/checklists';
import { commercialTranslations } from './chapters/commercial';
import { complianceTranslations } from './chapters/compliance';
import { drivingTimeTranslations } from './chapters/driving-time';
import { kpiTranslations } from './chapters/kpi';
import { redFlagsTranslations } from './chapters/red-flags';
import { reeferTranslations } from './chapters/reefer';
import { licensesOversizeTranslations } from './chapters/licenses-oversize';
import { accountingTranslations } from './chapters/accounting';
import { clientsTranslations } from './chapters/clients';
import { emergencyTranslations } from './chapters/emergency';
import { environmentTranslations } from './chapters/environment';
import { europeZonesTranslations } from './chapters/europe-zones';
import { exchangesTranslations } from './chapters/exchanges';
import { fleetTranslations } from './chapters/fleet';
import { glossaryTranslations } from './chapters/glossary';
import { riskManagementTranslations } from './chapters/risk-management';
import { supplyChainTranslations } from './chapters/supply-chain';
import { technologyTranslations } from './chapters/technology';
import { trainingTranslations } from './chapters/training';
import { translogicaTranslations } from './chapters/translogica';
import { warehouseTranslations } from './chapters/warehouse';
import { intermodalTranslations } from './chapters/intermodal';
import { authoritiesTranslations } from './chapters/authorities';
import { sustainabilityTranslations } from './chapters/sustainability';
import { expressTransportTranslations } from './chapters/express-transport';
import { europeanCountriesTranslations } from './chapters/european-countries';
import { highValueGoodsTranslations } from './chapters/high-value-goods';
import { digitalizationTranslations } from './chapters/digitalization';
import { stressManagementTranslations } from './chapters/stress-management';
import { networkingTranslations } from './chapters/networking';
import { professionalDevelopmentTranslations } from './chapters/professional-development';

// Chapter translations type
type ChapterTranslations = Record<string, Record<string, string>>;

// All chapter translations
const allTranslations: Record<string, ChapterTranslations> = {
  intro: introTranslations,
  mindset: mindsetTranslations,
  'soft-skills': softskillsTranslations,
  workflow: workflowTranslations,
  vehicle: vehicleTranslations,
  loading: loadingTranslations,
  documents: documentsTranslations,
  customs: customsTranslations,
  pricing: pricingTranslations,
  incoterms: incotermsTranslations,
  adr: adrTranslations,
  claims: claimsTranslations,
  insurance: insuranceTranslations,
  payment: paymentTranslations,
  negotiation: negotiationTranslations,
  communication: communicationTranslations,
  'carrier-management': carrierManagementTranslations,
  'case-studies': caseStudiesTranslations,
  checklists: checklistsTranslations,
  commercial: commercialTranslations,
  compliance: complianceTranslations,
  'driving-time': drivingTimeTranslations,
  kpi: kpiTranslations,
  'red-flags': redFlagsTranslations,
  reefer: reeferTranslations,
  'licenses-oversize': licensesOversizeTranslations,
  accounting: accountingTranslations,
  clients: clientsTranslations,
  emergency: emergencyTranslations,
  environment: environmentTranslations,
  'europe-zones': europeZonesTranslations,
  exchanges: exchangesTranslations,
  fleet: fleetTranslations,
  glossary: glossaryTranslations,
  'risk-management': riskManagementTranslations,
  'supply-chain': supplyChainTranslations,
  technology: technologyTranslations,
  training: trainingTranslations,
  translogica: translogicaTranslations,
  warehouse: warehouseTranslations,
  intermodal: intermodalTranslations,
  authorities: authoritiesTranslations,
  sustainability: sustainabilityTranslations,
  'express-transport': expressTransportTranslations,
  'european-countries': europeanCountriesTranslations,
  'high-value-goods': highValueGoodsTranslations,
  digitalization: digitalizationTranslations,
  'stress-management': stressManagementTranslations,
  networking: networkingTranslations,
  'professional-development': professionalDevelopmentTranslations,
};

// Hook to get chapter translations
export function getChapterTranslation(chapterId: string, key: string, language: Language): string {
  const chapterTranslations = allTranslations[chapterId];
  if (!chapterTranslations) {
    return key;
  }
  
  const languageTranslations = chapterTranslations[language];
  if (!languageTranslations) {
    // Fallback to English
    return chapterTranslations.en?.[key] || key;
  }
  
  return languageTranslations[key] || chapterTranslations.en?.[key] || key;
}

// Export all translations for direct access
export { introTranslations };
