import { Language } from "@/contexts/LanguageContext";
import { QuizQuestion } from "./quizData";

// Import all quiz banks - various formats
import { introExtendedQuestions } from './quizBanks/introQuestions';
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

export interface TranslatedQuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
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

// Map all quiz banks to chapter IDs
// Each bank contains 30+ questions in all 3 languages
export const quizTranslations: Record<string, TranslatedQuizQuestion[]> = {
  // Foundation module (1-5)
  intro: introExtendedQuestions,
  mindset: ensureTranslatedFormat(mindsetQuestions),
  'soft-skills': ensureTranslatedFormat(softSkillsQuestions),
  'stress-management': ensureTranslatedFormat(stressManagementQuestions),
  workflow: ensureTranslatedFormat(workflowQuestions),
  
  // Equipment module (6-12)
  vehicle: vehicleExtendedQuestions,
  loading: ensureTranslatedFormat(loadingQuestions),
  reefer: ensureTranslatedFormat(reeferQuestions),
  'express-transport': ensureTranslatedFormat(expressTransportQuestions),
  intermodal: ensureTranslatedFormat(intermodalQuestions),
  warehouse: ensureTranslatedFormat(warehouseQuestions),
  adr: ensureTranslatedFormat(adrQuestions),
  
  // Documents module (13-19)
  documents: ensureTranslatedFormat(documentsQuestions),
  incoterms: ensureTranslatedFormat(incotermsQuestions),
  customs: ensureTranslatedFormat(customsQuestions),
  authorities: ensureTranslatedFormat(authoritiesQuestions),
  compliance: ensureTranslatedFormat(complianceQuestions),
  'driving-time': ensureTranslatedFormat(drivingTimeQuestions),
  'licenses-oversize': ensureTranslatedFormat(licensesOversizeQuestions),
  
  // Geography module (20-24)
  'europe-zones': ensureTranslatedFormat(europeZonesQuestions),
  'european-countries': ensureTranslatedFormat(europeanCountriesQuestions),
  environment: ensureTranslatedFormat(environmentQuestions),
  sustainability: ensureTranslatedFormat(sustainabilityQuestions),
  'supply-chain': ensureTranslatedFormat(supplyChainQuestions),
  
  // Commercial module (25-33)
  pricing: ensureTranslatedFormat(pricingQuestions),
  commercial: ensureTranslatedFormat(commercialQuestions),
  negotiation: ensureTranslatedFormat(negotiationQuestions),
  clients: ensureTranslatedFormat(clientsQuestions),
  'carrier-management': ensureTranslatedFormat(carrierManagementQuestions),
  exchanges: ensureTranslatedFormat(exchangesQuestions),
  communication: ensureTranslatedFormat(communicationQuestions),
  networking: ensureTranslatedFormat(networkingQuestions),
  kpi: ensureTranslatedFormat(kpiQuestions),
  
  // Technology module (34-37)
  translogica: ensureTranslatedFormat(translogicaQuestions),
  fleet: ensureTranslatedFormat(fleetQuestions),
  technology: ensureTranslatedFormat(technologyQuestions),
  digitalization: ensureTranslatedFormat(digitalizationQuestions),
  
  // Finance module (38-43)
  'risk-management': ensureTranslatedFormat(riskManagementQuestions),
  insurance: ensureTranslatedFormat(insuranceQuestions),
  'high-value-goods': ensureTranslatedFormat(highValueGoodsQuestions),
  claims: ensureTranslatedFormat(claimsQuestions),
  payment: ensureTranslatedFormat(paymentQuestions),
  accounting: ensureTranslatedFormat(accountingQuestions),
  
  // Practical module (44-50)
  training: ensureTranslatedFormat(trainingQuestions),
  'professional-development': ensureTranslatedFormat(professionalDevelopmentQuestions),
  'case-studies': ensureTranslatedFormat(caseStudiesQuestions),
  emergency: ensureTranslatedFormat(emergencyQuestions),
  'red-flags': ensureTranslatedFormat(redFlagsQuestions),
  checklists: ensureTranslatedFormat(checklistsQuestions),
  glossary: ensureTranslatedFormat(glossaryQuestions),
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

// Get question count for a specific chapter
export function getQuestionCount(chapterId: string): number {
  const chapter = quizTranslations[chapterId];
  return chapter?.length || 0;
}

// Get all chapter question counts with details about which are below minimum
export function getAllQuestionCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  Object.keys(quizTranslations).forEach(chapterId => {
    counts[chapterId] = quizTranslations[chapterId]?.length || 0;
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
