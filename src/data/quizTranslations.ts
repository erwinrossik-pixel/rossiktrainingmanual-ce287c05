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
  // Foundation module
  intro: introExtendedQuestions,
  mindset: ensureTranslatedFormat(mindsetQuestions),
  'soft-skills': ensureTranslatedFormat(softSkillsQuestions),
  workflow: ensureTranslatedFormat(workflowQuestions),
  
  // Equipment module
  vehicle: vehicleExtendedQuestions,
  loading: ensureTranslatedFormat(loadingQuestions),
  reefer: ensureTranslatedFormat(reeferQuestions),
  warehouse: ensureTranslatedFormat(warehouseQuestions),
  adr: ensureTranslatedFormat(adrQuestions),
  
  // Documents module
  documents: ensureTranslatedFormat(documentsQuestions),
  incoterms: ensureTranslatedFormat(incotermsQuestions),
  customs: ensureTranslatedFormat(customsQuestions),
  compliance: ensureTranslatedFormat(complianceQuestions),
  'driving-time': ensureTranslatedFormat(drivingTimeQuestions),
  'licenses-oversize': ensureTranslatedFormat(licensesOversizeQuestions),
  
  // Geography module
  'europe-zones': ensureTranslatedFormat(europeZonesQuestions),
  environment: ensureTranslatedFormat(environmentQuestions),
  'supply-chain': ensureTranslatedFormat(supplyChainQuestions),
  
  // Commercial module
  pricing: ensureTranslatedFormat(pricingQuestions),
  commercial: ensureTranslatedFormat(commercialQuestions),
  negotiation: ensureTranslatedFormat(negotiationQuestions),
  clients: ensureTranslatedFormat(clientsQuestions),
  'carrier-management': ensureTranslatedFormat(carrierManagementQuestions),
  exchanges: ensureTranslatedFormat(exchangesQuestions),
  communication: ensureTranslatedFormat(communicationQuestions),
  kpi: ensureTranslatedFormat(kpiQuestions),
  
  // Technology module
  translogica: ensureTranslatedFormat(translogicaQuestions),
  fleet: ensureTranslatedFormat(fleetQuestions),
  technology: ensureTranslatedFormat(technologyQuestions),
  
  // Finance module
  'risk-management': ensureTranslatedFormat(riskManagementQuestions),
  insurance: ensureTranslatedFormat(insuranceQuestions),
  claims: ensureTranslatedFormat(claimsQuestions),
  payment: ensureTranslatedFormat(paymentQuestions),
  accounting: ensureTranslatedFormat(accountingQuestions),
  
  // Practical module
  training: ensureTranslatedFormat(trainingQuestions),
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

// Get all chapter question counts
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
