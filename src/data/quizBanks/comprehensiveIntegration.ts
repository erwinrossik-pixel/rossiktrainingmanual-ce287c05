// Integration file for comprehensive quiz questions
// Imports all comprehensive question banks and exports them for use in quizTranslations

import {
  incotermsComprehensiveQuestions,
  customsComprehensiveQuestions,
  pricingComprehensiveQuestions,
  fleetComprehensiveQuestions,
  mindsetComprehensiveQuestions,
  softSkillsComprehensiveQuestions,
  workflowComprehensiveQuestions,
  stressManagementComprehensiveQuestions,
  vehicleComprehensiveQuestions,
  loadingComprehensiveQuestions,
  reeferComprehensiveQuestions,
  expressTransportComprehensiveQuestions,
  intermodalComprehensiveQuestions,
  warehouseComprehensiveQuestions,
  adrComprehensiveQuestions,
  documentsComprehensiveQuestions,
  authoritiesComprehensiveQuestions,
  complianceComprehensiveQuestions,
  licensesOversizeComprehensiveQuestions,
  europeZonesComprehensiveQuestions,
  europeanCountriesComprehensiveQuestions,
  environmentComprehensiveQuestions,
  sustainabilityComprehensiveQuestions,
  supplyChainComprehensiveQuestions,
  commercialComprehensiveQuestions,
  negotiationComprehensiveQuestions,
  clientsComprehensiveQuestions,
  carrierManagementComprehensiveQuestions,
  exchangesComprehensiveQuestions,
  communicationComprehensiveQuestions,
  networkingComprehensiveQuestions,
  kpiComprehensiveQuestions,
  translogicaComprehensiveQuestions,
  technologyComprehensiveQuestions,
  digitalizationComprehensiveQuestions,
  drivingTimeComprehensiveQuestions,
  riskManagementComprehensiveQuestions,
  insuranceComprehensiveQuestions,
  highValueGoodsComprehensiveQuestions,
  claimsComprehensiveQuestions,
  paymentComprehensiveQuestions,
  accountingComprehensiveQuestions,
  trainingComprehensiveQuestions,
  professionalDevelopmentComprehensiveQuestions,
  caseStudiesComprehensiveQuestions,
  emergencyComprehensiveQuestions,
  redFlagsComprehensiveQuestions,
  checklistsComprehensiveQuestions,
  glossaryComprehensiveQuestions
} from './comprehensive';

// Export comprehensive questions mapped by chapter ID
export const comprehensiveQuestions = {
  // Foundation module
  mindset: mindsetComprehensiveQuestions,
  'soft-skills': softSkillsComprehensiveQuestions,
  'stress-management': stressManagementComprehensiveQuestions,
  workflow: workflowComprehensiveQuestions,
  
  // Equipment module
  vehicle: vehicleComprehensiveQuestions,
  loading: loadingComprehensiveQuestions,
  reefer: reeferComprehensiveQuestions,
  'express-transport': expressTransportComprehensiveQuestions,
  intermodal: intermodalComprehensiveQuestions,
  warehouse: warehouseComprehensiveQuestions,
  adr: adrComprehensiveQuestions,
  
  // Documents module
  documents: documentsComprehensiveQuestions,
  incoterms: incotermsComprehensiveQuestions,
  customs: customsComprehensiveQuestions,
  authorities: authoritiesComprehensiveQuestions,
  compliance: complianceComprehensiveQuestions,
  'driving-time': drivingTimeComprehensiveQuestions,
  'licenses-oversize': licensesOversizeComprehensiveQuestions,
  
  // Geography module
  'europe-zones': europeZonesComprehensiveQuestions,
  'european-countries': europeanCountriesComprehensiveQuestions,
  environment: environmentComprehensiveQuestions,
  sustainability: sustainabilityComprehensiveQuestions,
  'supply-chain': supplyChainComprehensiveQuestions,
  
  // Commercial module
  pricing: pricingComprehensiveQuestions,
  commercial: commercialComprehensiveQuestions,
  negotiation: negotiationComprehensiveQuestions,
  clients: clientsComprehensiveQuestions,
  'carrier-management': carrierManagementComprehensiveQuestions,
  exchanges: exchangesComprehensiveQuestions,
  communication: communicationComprehensiveQuestions,
  networking: networkingComprehensiveQuestions,
  kpi: kpiComprehensiveQuestions,
  
  // Technology module
  translogica: translogicaComprehensiveQuestions,
  fleet: fleetComprehensiveQuestions,
  technology: technologyComprehensiveQuestions,
  digitalization: digitalizationComprehensiveQuestions,
  
  // Finance module
  'risk-management': riskManagementComprehensiveQuestions,
  insurance: insuranceComprehensiveQuestions,
  'high-value-goods': highValueGoodsComprehensiveQuestions,
  claims: claimsComprehensiveQuestions,
  payment: paymentComprehensiveQuestions,
  accounting: accountingComprehensiveQuestions,
  
  // Practical module
  training: trainingComprehensiveQuestions,
  'professional-development': professionalDevelopmentComprehensiveQuestions,
  'case-studies': caseStudiesComprehensiveQuestions,
  emergency: emergencyComprehensiveQuestions,
  'red-flags': redFlagsComprehensiveQuestions,
  checklists: checklistsComprehensiveQuestions,
  glossary: glossaryComprehensiveQuestions
};

// Type export for use in other files
export type ChapterId = keyof typeof comprehensiveQuestions;
