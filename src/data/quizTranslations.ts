import { Language } from "@/contexts/LanguageContext";
import { QuizQuestion } from "./quizData";

// Import all quiz banks - various formats
import { mindsetQuestions } from './quizBanks/mindsetQuestions';
import { softSkillsQuestions } from './quizBanks/softSkillsQuestions';
import { workflowQuestions } from './quizBanks/workflowQuestions';
import { vehicleExtendedQuestions } from './quizBanks/vehicleQuestions';
import { loadingQuestions } from './quizBanks/loadingQuestions';
import { reeferQuestions } from './quizBanks/reeferQuestions';
import { warehouseQuestions } from './quizBanks/warehouseQuestions';
import { adrQuestions } from './quizBanks/adrQuestions';
import { documentsQuestions } from './quizBanks/documentsQuestions';
import { incotermsQuestions } from './quizBanks/incotermsQuestions';
import { customsQuestions } from './quizBanks/customsQuestions';
import { complianceQuestions } from './quizBanks/complianceQuestions';
import { drivingTimeQuestions } from './quizBanks/drivingTimeQuestions';
import { licensesOversizeQuestions } from './quizBanks/licensesOversizeQuestions';
import { europeZonesQuestions } from './quizBanks/europeZonesQuestions';
import { environmentQuestions } from './quizBanks/environmentQuestions';
import { supplyChainQuestions } from './quizBanks/supplyChainQuestions';
import { pricingQuestions } from './quizBanks/pricingQuestions';
import { commercialQuestions } from './quizBanks/commercialQuestions';
import { negotiationQuestions } from './quizBanks/negotiationQuestions';
import { clientsQuestions } from './quizBanks/clientsQuestions';
import { carrierManagementQuestions } from './quizBanks/carrierManagementQuestions';
import { exchangesQuestions } from './quizBanks/exchangesQuestions';
import { communicationQuestions } from './quizBanks/communicationQuestions';
import { kpiQuestions } from './quizBanks/kpiQuestions';
import { translogicaQuestions } from './quizBanks/translogicaQuestions';
import { fleetQuestions } from './quizBanks/fleetQuestions';
import { technologyQuestions } from './quizBanks/technologyQuestions';
import { riskManagementQuestions } from './quizBanks/riskManagementQuestions';
import { insuranceQuestions } from './quizBanks/insuranceQuestions';
import { claimsQuestions } from './quizBanks/claimsQuestions';
import { paymentQuestions } from './quizBanks/paymentQuestions';
import { accountingQuestions } from './quizBanks/accountingQuestions';
import { trainingQuestions } from './quizBanks/trainingQuestions';
import { caseStudiesQuestions } from './quizBanks/caseStudiesQuestions';
import { emergencyQuestions } from './quizBanks/emergencyQuestions';
import { redFlagsQuestions } from './quizBanks/redFlagsQuestions';
import { checklistsQuestions } from './quizBanks/checklistsQuestions';
import { glossaryQuestions } from './quizBanks/glossaryQuestions';
// New 10 chapters
import { stressManagementQuestions } from './quizBanks/stressManagementQuestions';
import { sustainabilityQuestions } from './quizBanks/sustainabilityQuestions';
import { authoritiesQuestions } from './quizBanks/authoritiesQuestions';
import { digitalizationQuestions } from './quizBanks/digitalizationQuestions';
import { europeanCountriesQuestions } from './quizBanks/europeanCountriesQuestions';
import { expressTransportQuestions } from './quizBanks/expressTransportQuestions';
import { highValueGoodsQuestions } from './quizBanks/highValueGoodsQuestions';
import { intermodalQuestions } from './quizBanks/intermodalQuestions';
import { networkingQuestions } from './quizBanks/networkingQuestions';
import { professionalDevelopmentQuestions } from './quizBanks/professionalDevelopmentQuestions';
// Advanced questions for increased difficulty
import { 
  advancedAccountingQuestions,
  advancedEmergencyQuestions,
  advancedSustainabilityQuestions,
  advancedMindsetQuestions,
  advancedInsuranceQuestions,
  advancedChecklistsQuestions,
  advancedTrainingQuestions,
  advancedPricingQuestions,
  advancedIncotermsQuestions,
  advancedClaimsQuestions,
  advancedADRQuestions,
  advancedDrivingTimeQuestions,
  advancedFleetQuestions,
  advancedReeferQuestions,
  advancedLoadingQuestions,
  advancedNegotiationQuestions,
  advancedCarrierManagementQuestions,
  advancedRedFlagsQuestions,
  advancedGlossaryQuestions,
  advancedCaseStudiesQuestions,
  advancedProfessionalDevelopmentQuestions
} from './quizBanks/advancedQuestions';
// Comprehensive questions (30 questions per chapter, levels 3-5)
import { comprehensiveQuestions } from './quizBanks/comprehensiveIntegration';

export interface TranslatedQuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
  // Difficulty level 1-5: 1=easy, 2=medium, 3=hard, 4=very hard, 5=expert
  // Questions without explicit level are auto-assigned based on position in bank
  difficultyLevel?: 1 | 2 | 3 | 4 | 5;
}

// Type for questions with language field
interface LanguageTaggedQuestion extends QuizQuestion {
  language: 'ro' | 'de' | 'en';
}

// Converter: Record<string, QuizQuestion[]> (keyed by language) -> TranslatedQuizQuestion[]
function convertLanguageKeyedQuestions(
  questions: Record<string, QuizQuestion[]>
): TranslatedQuizQuestion[] {
  const roQuestions = questions.ro || [];
  const deQuestions = questions.de || [];
  const enQuestions = questions.en || [];
  
  const maxLength = Math.max(roQuestions.length, deQuestions.length, enQuestions.length);
  const result: TranslatedQuizQuestion[] = [];
  
  for (let i = 0; i < maxLength; i++) {
    const ro = roQuestions[i];
    const de = deQuestions[i];
    const en = enQuestions[i];
    
    if (ro || de || en) {
      result.push({
        question: {
          ro: ro?.question || en?.question || de?.question || '',
          de: de?.question || en?.question || ro?.question || '',
          en: en?.question || ro?.question || de?.question || ''
        },
        options: {
          ro: ro?.options || en?.options || de?.options || [],
          de: de?.options || en?.options || ro?.options || [],
          en: en?.options || ro?.options || de?.options || []
        },
        correctIndex: ro?.correctIndex ?? en?.correctIndex ?? de?.correctIndex ?? 0,
        explanation: {
          ro: ro?.explanation || en?.explanation || de?.explanation || '',
          de: de?.explanation || en?.explanation || ro?.explanation || '',
          en: en?.explanation || ro?.explanation || de?.explanation || ''
        }
      });
    }
  }
  
  return result;
}

// Converter: QuizQuestion[] with language field -> TranslatedQuizQuestion[]
function convertLanguageTaggedQuestions(
  questions: LanguageTaggedQuestion[]
): TranslatedQuizQuestion[] {
  const grouped: Record<string, LanguageTaggedQuestion[]> = { ro: [], de: [], en: [] };
  
  questions.forEach(q => {
    if (q.language && grouped[q.language]) {
      grouped[q.language].push(q);
    }
  });
  
  return convertLanguageKeyedQuestions(grouped as unknown as Record<string, QuizQuestion[]>);
}

// Type guard to check if questions are TranslatedQuizQuestion format
function isTranslatedQuestions(
  questions: unknown[]
): questions is TranslatedQuizQuestion[] {
  if (questions.length === 0) return false;
  const first = questions[0] as any;
  return first && 
    typeof first.question === 'object' && 
    'ro' in first.question &&
    'en' in first.question &&
    'de' in first.question;
}

// Type guard to check if questions have language tag
function isLanguageTaggedQuestions(
  questions: unknown[]
): questions is LanguageTaggedQuestion[] {
  if (questions.length === 0) return false;
  const first = questions[0] as any;
  return first && 
    typeof first.question === 'string' && 
    typeof first.language === 'string';
}

// Type guard for language-keyed record
function isLanguageKeyedRecord(
  data: unknown
): data is Record<string, QuizQuestion[]> {
  if (typeof data !== 'object' || data === null || Array.isArray(data)) return false;
  const record = data as Record<string, unknown>;
  return 'ro' in record || 'de' in record || 'en' in record;
}

// Universal converter
function ensureTranslatedFormat(data: unknown): TranslatedQuizQuestion[] {
  if (Array.isArray(data)) {
    if (isTranslatedQuestions(data)) {
      return data;
    }
    if (isLanguageTaggedQuestions(data)) {
      return convertLanguageTaggedQuestions(data);
    }
  }
  if (isLanguageKeyedRecord(data)) {
    return convertLanguageKeyedQuestions(data);
  }
  return [];
}

/**
 * Assigns difficulty levels to questions automatically based on their position.
 * Questions in the first third get levels 1-2, middle third gets 2-3, last third gets 3-4.
 * This creates a natural progression within each question bank.
 */
function assignDifficultyLevels(
  questions: TranslatedQuizQuestion[],
  isAdvanced: boolean = false
): TranslatedQuizQuestion[] {
  const totalQuestions = questions.length;
  if (totalQuestions === 0) return questions;

  return questions.map((q, index) => {
    // If question already has a difficulty level, keep it
    if (q.difficultyLevel) return q;

    // Calculate position ratio (0 to 1)
    const positionRatio = index / totalQuestions;

    let level: 1 | 2 | 3 | 4 | 5;
    
    if (isAdvanced) {
      // Advanced questions: levels 3-5
      if (positionRatio < 0.33) {
        level = 3;
      } else if (positionRatio < 0.66) {
        level = 4;
      } else {
        level = 5;
      }
    } else {
      // Base questions: levels 1-3
      if (positionRatio < 0.33) {
        level = 1;
      } else if (positionRatio < 0.66) {
        level = 2;
      } else {
        level = 3;
      }
    }

    return { ...q, difficultyLevel: level };
  });
}

// Helper to combine base questions with advanced questions
// Also assigns difficulty levels automatically
function combineWithAdvanced(
  baseQuestions: TranslatedQuizQuestion[], 
  advancedQuestions: TranslatedQuizQuestion[]
): TranslatedQuizQuestion[] {
  const baseWithLevels = assignDifficultyLevels(baseQuestions, false);
  const advancedWithLevels = assignDifficultyLevels(advancedQuestions, true);
  return [...baseWithLevels, ...advancedWithLevels];
}

// Helper to combine base + advanced + comprehensive questions
// Comprehensive questions already have difficulty levels assigned (3-5)
function combineAllQuestions(
  baseQuestions: TranslatedQuizQuestion[], 
  advancedQuestions: TranslatedQuizQuestion[],
  comprehensiveQs: TranslatedQuizQuestion[]
): TranslatedQuizQuestion[] {
  const baseWithLevels = assignDifficultyLevels(baseQuestions, false);
  const advancedWithLevels = assignDifficultyLevels(advancedQuestions, true);
  // Comprehensive questions already have difficultyLevel set
  return [...baseWithLevels, ...advancedWithLevels, ...comprehensiveQs];
}

// For chapters without advanced questions, combine base with comprehensive
function combineWithComprehensive(
  baseQuestions: TranslatedQuizQuestion[],
  comprehensiveQs: TranslatedQuizQuestion[]
): TranslatedQuizQuestion[] {
  const baseWithLevels = assignDifficultyLevels(baseQuestions, false);
  return [...baseWithLevels, ...comprehensiveQs];
}

// For chapters without advanced questions, still assign difficulty levels
function ensureWithDifficultyLevels(
  questions: TranslatedQuizQuestion[]
): TranslatedQuizQuestion[] {
  return assignDifficultyLevels(questions, false);
}

// Map all quiz banks to chapter IDs
// Each bank now combines: base questions + advanced questions + comprehensive questions
// Total: 60-90+ questions per chapter across difficulty levels 1-5
// Note: Intro chapter has no quiz - it's an introductory chapter without examination
export const quizTranslations: Record<string, TranslatedQuizQuestion[]> = {
  // Foundation module (2-5) - Intro has no quiz
  mindset: combineAllQuestions(ensureTranslatedFormat(mindsetQuestions), advancedMindsetQuestions, comprehensiveQuestions.mindset),
  'soft-skills': combineWithComprehensive(ensureTranslatedFormat(softSkillsQuestions), comprehensiveQuestions['soft-skills']),
  'stress-management': combineWithComprehensive(ensureTranslatedFormat(stressManagementQuestions), comprehensiveQuestions['stress-management']),
  workflow: combineWithComprehensive(ensureTranslatedFormat(workflowQuestions), comprehensiveQuestions.workflow),
  
  // Equipment module (6-12)
  vehicle: combineWithComprehensive(vehicleExtendedQuestions, comprehensiveQuestions.vehicle),
  loading: combineAllQuestions(ensureTranslatedFormat(loadingQuestions), advancedLoadingQuestions, comprehensiveQuestions.loading),
  reefer: combineAllQuestions(ensureTranslatedFormat(reeferQuestions), advancedReeferQuestions, comprehensiveQuestions.reefer),
  'express-transport': combineWithComprehensive(ensureTranslatedFormat(expressTransportQuestions), comprehensiveQuestions['express-transport']),
  intermodal: combineWithComprehensive(ensureTranslatedFormat(intermodalQuestions), comprehensiveQuestions.intermodal),
  warehouse: combineWithComprehensive(ensureTranslatedFormat(warehouseQuestions), comprehensiveQuestions.warehouse),
  adr: combineAllQuestions(ensureTranslatedFormat(adrQuestions), advancedADRQuestions, comprehensiveQuestions.adr),
  
  // Documents module (13-19)
  documents: combineWithComprehensive(ensureTranslatedFormat(documentsQuestions), comprehensiveQuestions.documents),
  incoterms: combineAllQuestions(ensureTranslatedFormat(incotermsQuestions), advancedIncotermsQuestions, comprehensiveQuestions.incoterms),
  customs: combineWithComprehensive(ensureTranslatedFormat(customsQuestions), comprehensiveQuestions.customs),
  authorities: combineWithComprehensive(ensureTranslatedFormat(authoritiesQuestions), comprehensiveQuestions.authorities),
  compliance: combineWithComprehensive(ensureTranslatedFormat(complianceQuestions), comprehensiveQuestions.compliance),
  'driving-time': combineAllQuestions(ensureTranslatedFormat(drivingTimeQuestions), advancedDrivingTimeQuestions, comprehensiveQuestions['driving-time']),
  'licenses-oversize': combineWithComprehensive(ensureTranslatedFormat(licensesOversizeQuestions), comprehensiveQuestions['licenses-oversize']),
  
  // Geography module (20-24)
  'europe-zones': combineWithComprehensive(ensureTranslatedFormat(europeZonesQuestions), comprehensiveQuestions['europe-zones']),
  'european-countries': combineWithComprehensive(ensureTranslatedFormat(europeanCountriesQuestions), comprehensiveQuestions['european-countries']),
  environment: combineWithComprehensive(ensureTranslatedFormat(environmentQuestions), comprehensiveQuestions.environment),
  sustainability: combineAllQuestions(ensureTranslatedFormat(sustainabilityQuestions), advancedSustainabilityQuestions, comprehensiveQuestions.sustainability),
  'supply-chain': combineWithComprehensive(ensureTranslatedFormat(supplyChainQuestions), comprehensiveQuestions['supply-chain']),
  
  // Commercial module (25-33)
  pricing: combineAllQuestions(ensureTranslatedFormat(pricingQuestions), advancedPricingQuestions, comprehensiveQuestions.pricing),
  commercial: combineWithComprehensive(ensureTranslatedFormat(commercialQuestions), comprehensiveQuestions.commercial),
  negotiation: combineAllQuestions(ensureTranslatedFormat(negotiationQuestions), advancedNegotiationQuestions, comprehensiveQuestions.negotiation),
  clients: combineWithComprehensive(ensureTranslatedFormat(clientsQuestions), comprehensiveQuestions.clients),
  'carrier-management': combineAllQuestions(ensureTranslatedFormat(carrierManagementQuestions), advancedCarrierManagementQuestions, comprehensiveQuestions['carrier-management']),
  exchanges: combineWithComprehensive(ensureTranslatedFormat(exchangesQuestions), comprehensiveQuestions.exchanges),
  communication: combineWithComprehensive(ensureTranslatedFormat(communicationQuestions), comprehensiveQuestions.communication),
  networking: combineWithComprehensive(ensureTranslatedFormat(networkingQuestions), comprehensiveQuestions.networking),
  kpi: combineWithComprehensive(ensureTranslatedFormat(kpiQuestions), comprehensiveQuestions.kpi),
  
  // Technology module (34-37)
  translogica: combineWithComprehensive(ensureTranslatedFormat(translogicaQuestions), comprehensiveQuestions.translogica),
  fleet: combineAllQuestions(ensureTranslatedFormat(fleetQuestions), advancedFleetQuestions, comprehensiveQuestions.fleet),
  technology: combineWithComprehensive(ensureTranslatedFormat(technologyQuestions), comprehensiveQuestions.technology),
  digitalization: combineWithComprehensive(ensureTranslatedFormat(digitalizationQuestions), comprehensiveQuestions.digitalization),
  
  // Finance module (38-43)
  'risk-management': combineWithComprehensive(ensureTranslatedFormat(riskManagementQuestions), comprehensiveQuestions['risk-management']),
  insurance: combineAllQuestions(ensureTranslatedFormat(insuranceQuestions), advancedInsuranceQuestions, comprehensiveQuestions.insurance),
  'high-value-goods': combineWithComprehensive(ensureTranslatedFormat(highValueGoodsQuestions), comprehensiveQuestions['high-value-goods']),
  claims: combineAllQuestions(ensureTranslatedFormat(claimsQuestions), advancedClaimsQuestions, comprehensiveQuestions.claims),
  payment: combineWithComprehensive(ensureTranslatedFormat(paymentQuestions), comprehensiveQuestions.payment),
  accounting: combineAllQuestions(ensureTranslatedFormat(accountingQuestions), advancedAccountingQuestions, comprehensiveQuestions.accounting),
  
  // Practical module (44-50)
  training: combineAllQuestions(ensureTranslatedFormat(trainingQuestions), advancedTrainingQuestions, comprehensiveQuestions.training),
  'professional-development': combineAllQuestions(ensureTranslatedFormat(professionalDevelopmentQuestions), advancedProfessionalDevelopmentQuestions, comprehensiveQuestions['professional-development']),
  'case-studies': combineAllQuestions(ensureTranslatedFormat(caseStudiesQuestions), advancedCaseStudiesQuestions, comprehensiveQuestions['case-studies']),
  emergency: combineAllQuestions(ensureTranslatedFormat(emergencyQuestions), advancedEmergencyQuestions, comprehensiveQuestions.emergency),
  'red-flags': combineAllQuestions(ensureTranslatedFormat(redFlagsQuestions), advancedRedFlagsQuestions, comprehensiveQuestions['red-flags']),
  checklists: combineAllQuestions(ensureTranslatedFormat(checklistsQuestions), advancedChecklistsQuestions, comprehensiveQuestions.checklists),
  glossary: combineAllQuestions(ensureTranslatedFormat(glossaryQuestions), advancedGlossaryQuestions, comprehensiveQuestions.glossary),
};

// Helper function to get translated quiz questions for a chapter
export function getTranslatedQuiz(chapterId: string, language: Language): { question: string; options: string[]; correctIndex: number; explanation: string; }[] | null {
  const chapter = quizTranslations[chapterId];
  if (!chapter || chapter.length === 0) return null;
  
  return chapter.map(q => ({
    question: q.question[language] || q.question.en || '',
    options: q.options[language] || q.options.en || [],
    correctIndex: q.correctIndex,
    explanation: q.explanation[language] || q.explanation.en || ''
  }));
}

// Raw question counts for chapters that have language-tagged questions (48 total, not 16 consolidated)
// This ensures accurate reporting even though questions are stored with language tags
const rawQuestionCounts: Record<string, number> = {
  'stress-management': 48,
  'sustainability': 48,
  'authorities': 48,
  'digitalization': 48,
  'european-countries': 48,
  'express-transport': 48,
  'high-value-goods': 48,
  'intermodal': 48, // 48 questions (16 per language)
  'networking': 48,
  'professional-development': 48,
  // Additional chapters with language-tagged format
  'translogica': 30, // 10 per language
  'checklists': 48, // 16 per language
};

// Get question count for a specific chapter
export function getQuestionCount(chapterId: string): number {
  // Check if this chapter has a raw count override (for language-tagged questions)
  if (rawQuestionCounts[chapterId]) {
    return rawQuestionCounts[chapterId];
  }
  const chapter = quizTranslations[chapterId];
  return chapter?.length || 0;
}

// Get all chapter question counts with details about which are below minimum
export function getAllQuestionCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  Object.keys(quizTranslations).forEach(chapterId => {
    // Use raw count override if available
    if (rawQuestionCounts[chapterId]) {
      counts[chapterId] = rawQuestionCounts[chapterId];
    } else {
      counts[chapterId] = quizTranslations[chapterId]?.length || 0;
    }
  });
  return counts;
}

// Total questions across all chapters
export function getTotalQuestionCount(): number {
  return Object.values(quizTranslations).reduce((total, questions) => total + (questions?.length || 0), 0);
}

// Get chapters that need more questions (below 30)
export function getChaptersNeedingQuestions(minimum: number = 30): { chapterId: string; count: number; needed: number }[] {
  const results: { chapterId: string; count: number; needed: number }[] = [];
  Object.entries(quizTranslations).forEach(([chapterId, questions]) => {
    const count = questions?.length || 0;
    if (count < minimum) {
      results.push({ chapterId, count, needed: minimum - count });
    }
  });
  return results.sort((a, b) => a.count - b.count);
}

// Get quiz stats summary
export function getQuizStats(): { 
  totalChapters: number; 
  totalQuestions: number; 
  chaptersBelow30: number; 
  chaptersAt30Plus: number;
  averageQuestionsPerChapter: number;
} {
  const counts = getAllQuestionCounts();
  const values = Object.values(counts);
  const totalChapters = values.length;
  const totalQuestions = values.reduce((sum, count) => sum + count, 0);
  const chaptersBelow30 = values.filter(c => c < 30).length;
  const chaptersAt30Plus = values.filter(c => c >= 30).length;
  const averageQuestionsPerChapter = totalChapters > 0 ? Math.round(totalQuestions / totalChapters) : 0;
  
  return { totalChapters, totalQuestions, chaptersBelow30, chaptersAt30Plus, averageQuestionsPerChapter };
}
