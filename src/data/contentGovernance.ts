// AI Content Governor - Rules of Truth & Content Locking

export interface TerminologyRule {
  id: string;
  term: string;
  definition: {
    ro: string;
    de: string;
    en: string;
  };
  isLocked: boolean;
  category: 'legal' | 'operational' | 'technical' | 'compliance';
  source: string;
  lastVerified: string;
}

export interface LockedConcept {
  id: string;
  conceptName: {
    ro: string;
    de: string;
    en: string;
  };
  description: string;
  chapters: string[];
  lockReason: string;
  lockedBy: string;
  lockedAt: string;
  unlockRequiresApproval: boolean;
}

export interface ContentRule {
  id: string;
  ruleName: string;
  ruleType: 'terminology' | 'structure' | 'format' | 'consistency' | 'accuracy';
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  autoReject: boolean;
  checkFunction: string;
}

export interface ConsistencyCheck {
  id: string;
  checkType: 'cross-chapter' | 'cross-language' | 'version-conflict' | 'terminology';
  description: string;
  affectedChapters: string[];
  status: 'passed' | 'warning' | 'failed';
  lastChecked: string;
  details?: string;
}

export interface ContentIncident {
  id: string;
  timestamp: string;
  incidentType: 'rule-violation' | 'consistency-failure' | 'unauthorized-change' | 'rollback';
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  affectedContent: string;
  action: 'rejected' | 'rolled-back' | 'flagged' | 'approved';
  resolvedBy?: string;
  resolvedAt?: string;
}

// Official Terminology - Cannot be modified automatically
export const LOCKED_TERMINOLOGY: TerminologyRule[] = [
  {
    id: 'term-cmr',
    term: 'CMR',
    definition: {
      ro: 'Convenția referitoare la Contractul de Transport Internațional de Mărfuri pe Șosele (1956)',
      de: 'Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr (1956)',
      en: 'Convention on the Contract for the International Carriage of Goods by Road (1956)'
    },
    isLocked: true,
    category: 'legal',
    source: 'UNECE',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-adr',
    term: 'ADR',
    definition: {
      ro: 'Acordul European referitor la Transportul Rutier Internațional al Mărfurilor Periculoase',
      de: 'Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße',
      en: 'European Agreement concerning the International Carriage of Dangerous Goods by Road'
    },
    isLocked: true,
    category: 'legal',
    source: 'UNECE',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-incoterms',
    term: 'Incoterms® 2020',
    definition: {
      ro: 'Termeni comerciali internaționali publicați de Camera Internațională de Comerț',
      de: 'Internationale Handelsklauseln, herausgegeben von der Internationalen Handelskammer',
      en: 'International Commercial Terms published by the International Chamber of Commerce'
    },
    isLocked: true,
    category: 'legal',
    source: 'ICC',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-fiata',
    term: 'FIATA',
    definition: {
      ro: 'Federația Internațională a Asociațiilor Expeditorilor de Marfă',
      de: 'Internationale Föderation der Spediteurorganisationen',
      en: 'International Federation of Freight Forwarders Associations'
    },
    isLocked: true,
    category: 'compliance',
    source: 'FIATA',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-eu561',
    term: 'Regulamentul (CE) 561/2006',
    definition: {
      ro: 'Regulament privind timpii de conducere și perioadele de odihnă ale conducătorilor auto',
      de: 'Verordnung über Lenk- und Ruhezeiten im Straßenverkehr',
      en: 'Regulation on driving times and rest periods for drivers'
    },
    isLocked: true,
    category: 'legal',
    source: 'EU',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-tachograph',
    term: 'Tahograf Digital',
    definition: {
      ro: 'Dispozitiv electronic de înregistrare a timpilor de conducere conform Regulamentului (UE) 165/2014',
      de: 'Elektronisches Gerät zur Aufzeichnung der Lenkzeiten gemäß Verordnung (EU) 165/2014',
      en: 'Electronic device for recording driving times according to Regulation (EU) 165/2014'
    },
    isLocked: true,
    category: 'technical',
    source: 'EU',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-cabotage',
    term: 'Cabotaj',
    definition: {
      ro: 'Transport rutier de marfă efectuat temporar în interiorul unui stat membru de către un transportator stabilit în alt stat membru',
      de: 'Innerstaatlicher Güterkraftverkehr, der vorübergehend von einem in einem anderen Mitgliedstaat ansässigen Verkehrsunternehmer durchgeführt wird',
      en: 'National road haulage carried out on a temporary basis in a host Member State by a haulier established in another Member State'
    },
    isLocked: true,
    category: 'legal',
    source: 'EU Regulation 1072/2009',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-t1',
    term: 'T1 (Document de Tranzit)',
    definition: {
      ro: 'Document de tranzit extern pentru mărfuri non-UE care circulă în regim de tranzit comun',
      de: 'Externes Versandpapier für Nicht-EU-Waren im gemeinsamen Versandverfahren',
      en: 'External transit document for non-EU goods moving under common transit procedure'
    },
    isLocked: true,
    category: 'legal',
    source: 'EU Customs',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-aeo',
    term: 'AEO (Operator Economic Autorizat)',
    definition: {
      ro: 'Statut acordat operatorilor economici care îndeplinesc criteriile de siguranță și securitate vamală',
      de: 'Status für Wirtschaftsbeteiligte, die die Kriterien für Zollsicherheit erfüllen',
      en: 'Status granted to economic operators meeting customs security and safety criteria'
    },
    isLocked: true,
    category: 'compliance',
    source: 'EU Customs',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-gdp',
    term: 'GDP (Good Distribution Practice)',
    definition: {
      ro: 'Buna Practică de Distribuție pentru produse farmaceutice și medicale',
      de: 'Gute Vertriebspraxis für pharmazeutische und medizinische Produkte',
      en: 'Good Distribution Practice for pharmaceutical and medical products'
    },
    isLocked: true,
    category: 'compliance',
    source: 'EMA',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-sdr',
    term: 'SDR (Drepturi Speciale de Tragere)',
    definition: {
      ro: 'Unitate monetară internațională utilizată pentru calculul limitelor de răspundere în CMR',
      de: 'Internationale Währungseinheit zur Berechnung der Haftungsgrenzen im CMR',
      en: 'International monetary unit used for calculating liability limits in CMR'
    },
    isLocked: true,
    category: 'legal',
    source: 'IMF',
    lastVerified: '2024-01-15'
  },
  {
    id: 'term-eori',
    term: 'EORI',
    definition: {
      ro: 'Număr de Înregistrare și Identificare a Operatorilor Economici',
      de: 'Registrierungs- und Identifizierungsnummer für Wirtschaftsbeteiligte',
      en: 'Economic Operators Registration and Identification Number'
    },
    isLocked: true,
    category: 'legal',
    source: 'EU Customs',
    lastVerified: '2024-01-15'
  }
];

// Locked Concepts - Cannot be auto-modified
export const LOCKED_CONCEPTS: LockedConcept[] = [
  {
    id: 'concept-cmr-liability',
    conceptName: {
      ro: 'Limite de răspundere CMR',
      de: 'CMR-Haftungsgrenzen',
      en: 'CMR Liability Limits'
    },
    description: 'Maximum liability of 8.33 SDR per kg gross weight',
    chapters: ['claims', 'insurance', 'documents'],
    lockReason: 'Legal requirement - cannot be modified',
    lockedBy: 'system',
    lockedAt: '2024-01-01',
    unlockRequiresApproval: true
  },
  {
    id: 'concept-driving-hours',
    conceptName: {
      ro: 'Timpuri de conducere Reg. 561/2006',
      de: 'Lenkzeiten Verordnung 561/2006',
      en: 'Driving hours Reg. 561/2006'
    },
    description: 'Maximum 9h daily (10h twice weekly), 56h weekly, 90h bi-weekly',
    chapters: ['compliance', 'driving-time', 'checklists'],
    lockReason: 'Legal requirement - EU Regulation',
    lockedBy: 'system',
    lockedAt: '2024-01-01',
    unlockRequiresApproval: true
  },
  {
    id: 'concept-adr-classes',
    conceptName: {
      ro: 'Clase ADR de mărfuri periculoase',
      de: 'ADR-Gefahrgutklassen',
      en: 'ADR Dangerous Goods Classes'
    },
    description: 'Classes 1-9 as defined by ADR 2023',
    chapters: ['adr'],
    lockReason: 'International legal standard',
    lockedBy: 'system',
    lockedAt: '2024-01-01',
    unlockRequiresApproval: true
  },
  {
    id: 'concept-incoterms-definitions',
    conceptName: {
      ro: 'Definiții Incoterms® 2020',
      de: 'Incoterms® 2020 Definitionen',
      en: 'Incoterms® 2020 Definitions'
    },
    description: 'All 11 Incoterms rules (EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF)',
    chapters: ['incoterms'],
    lockReason: 'ICC copyrighted definitions',
    lockedBy: 'system',
    lockedAt: '2024-01-01',
    unlockRequiresApproval: true
  },
  {
    id: 'concept-cabotage-rules',
    conceptName: {
      ro: 'Reguli cabotaj UE',
      de: 'EU-Kabotageregeln',
      en: 'EU Cabotage Rules'
    },
    description: 'Maximum 3 operations within 7 days after international delivery',
    chapters: ['compliance', 'european-countries'],
    lockReason: 'EU Regulation 1072/2009',
    lockedBy: 'system',
    lockedAt: '2024-01-01',
    unlockRequiresApproval: true
  },
  {
    id: 'concept-reefer-temps',
    conceptName: {
      ro: 'Temperaturi transport frigorific',
      de: 'Kühltemperaturen',
      en: 'Refrigerated Transport Temperatures'
    },
    description: 'Standard temperature ranges for food and pharma transport',
    chapters: ['reefer', 'high-value-goods'],
    lockReason: 'Food safety and GDP compliance',
    lockedBy: 'system',
    lockedAt: '2024-01-01',
    unlockRequiresApproval: true
  }
];

// Content Governance Rules
export const CONTENT_RULES: ContentRule[] = [
  {
    id: 'rule-terminology',
    ruleName: 'Terminology Consistency',
    ruleType: 'terminology',
    description: 'All locked terminology must remain unchanged across all content',
    severity: 'critical',
    autoReject: true,
    checkFunction: 'checkTerminologyConsistency'
  },
  {
    id: 'rule-legal-accuracy',
    ruleName: 'Legal Information Accuracy',
    ruleType: 'accuracy',
    description: 'Legal references must match official sources',
    severity: 'critical',
    autoReject: true,
    checkFunction: 'checkLegalAccuracy'
  },
  {
    id: 'rule-cross-language',
    ruleName: 'Cross-Language Consistency',
    ruleType: 'consistency',
    description: 'Content must be semantically equivalent across RO, DE, EN',
    severity: 'high',
    autoReject: false,
    checkFunction: 'checkCrossLanguageConsistency'
  },
  {
    id: 'rule-cross-chapter',
    ruleName: 'Cross-Chapter Consistency',
    ruleType: 'consistency',
    description: 'Same concept must be explained consistently across chapters',
    severity: 'high',
    autoReject: false,
    checkFunction: 'checkCrossChapterConsistency'
  },
  {
    id: 'rule-locked-content',
    ruleName: 'Locked Content Protection',
    ruleType: 'structure',
    description: 'Locked concepts and sections cannot be modified without approval',
    severity: 'critical',
    autoReject: true,
    checkFunction: 'checkLockedContent'
  },
  {
    id: 'rule-number-accuracy',
    ruleName: 'Numerical Accuracy',
    ruleType: 'accuracy',
    description: 'Numbers, limits, and thresholds must remain accurate',
    severity: 'critical',
    autoReject: true,
    checkFunction: 'checkNumericalAccuracy'
  },
  {
    id: 'rule-format-structure',
    ruleName: 'Content Structure',
    ruleType: 'format',
    description: 'Content must follow established section structure',
    severity: 'medium',
    autoReject: false,
    checkFunction: 'checkFormatStructure'
  },
  {
    id: 'rule-min-quality',
    ruleName: 'Minimum Quality Score',
    ruleType: 'accuracy',
    description: 'Content must maintain quality score above 70%',
    severity: 'high',
    autoReject: true,
    checkFunction: 'checkMinimumQuality'
  }
];

// Validation Functions
export function validateContentUpdate(
  originalContent: string,
  newContent: string,
  chapterId: string,
  language: 'ro' | 'de' | 'en'
): { isValid: boolean; violations: ContentIncident[]; warnings: string[] } {
  const violations: ContentIncident[] = [];
  const warnings: string[] = [];
  
  // Check locked terminology
  for (const term of LOCKED_TERMINOLOGY) {
    const originalHasTerm = originalContent.toLowerCase().includes(term.term.toLowerCase());
    const newHasTerm = newContent.toLowerCase().includes(term.term.toLowerCase());
    
    if (originalHasTerm && !newHasTerm) {
      violations.push({
        id: `violation-${Date.now()}-${term.id}`,
        timestamp: new Date().toISOString(),
        incidentType: 'rule-violation',
        severity: 'critical',
        description: `Locked terminology "${term.term}" was removed`,
        affectedContent: chapterId,
        action: 'rejected'
      });
    }
    
    // Check if definition was modified
    const originalDef = term.definition[language];
    if (originalContent.includes(originalDef) && !newContent.includes(originalDef)) {
      violations.push({
        id: `violation-${Date.now()}-def-${term.id}`,
        timestamp: new Date().toISOString(),
        incidentType: 'rule-violation',
        severity: 'critical',
        description: `Locked definition for "${term.term}" was modified`,
        affectedContent: chapterId,
        action: 'rejected'
      });
    }
  }
  
  // Check locked concepts
  for (const concept of LOCKED_CONCEPTS) {
    if (concept.chapters.includes(chapterId)) {
      const conceptName = concept.conceptName[language];
      if (originalContent.includes(conceptName) && !newContent.includes(conceptName)) {
        violations.push({
          id: `violation-${Date.now()}-${concept.id}`,
          timestamp: new Date().toISOString(),
          incidentType: 'rule-violation',
          severity: 'critical',
          description: `Locked concept "${conceptName}" was removed or modified`,
          affectedContent: chapterId,
          action: 'rejected'
        });
      }
    }
  }
  
  // Check for significant content reduction (potential quality degradation)
  const originalLength = originalContent.length;
  const newLength = newContent.length;
  if (newLength < originalLength * 0.7) {
    warnings.push(`Content reduced by more than 30% (${Math.round((1 - newLength/originalLength) * 100)}% reduction)`);
  }
  
  // Check for removed sections
  const sectionPattern = /#{1,3}\s+.+/g;
  const originalSections: string[] = originalContent.match(sectionPattern) || [];
  const newSections: string[] = newContent.match(sectionPattern) || [];
  
  const removedSections = originalSections.filter((s: string) => !newSections.includes(s));
  if (removedSections.length > 0) {
    warnings.push(`${removedSections.length} section(s) removed: ${removedSections.slice(0, 3).join(', ')}`);
  }
  
  return {
    isValid: violations.length === 0,
    violations,
    warnings
  };
}

export function checkCrossLanguageConsistency(
  contentRo: string,
  contentDe: string,
  contentEn: string,
  chapterId?: string
): ConsistencyCheck[] {
  const checks: ConsistencyCheck[] = [];
  const affectedChapters: string[] = chapterId ? [chapterId] : [];
  
  // Check section count consistency
  const sectionPattern = /#{1,3}\s+/g;
  const sectionsRo = (contentRo.match(sectionPattern) || []).length;
  const sectionsDe = (contentDe.match(sectionPattern) || []).length;
  const sectionsEn = (contentEn.match(sectionPattern) || []).length;
  
  if (sectionsRo !== sectionsDe || sectionsRo !== sectionsEn) {
    checks.push({
      id: `check-sections-${Date.now()}`,
      checkType: 'cross-language',
      description: 'Section count mismatch between languages',
      affectedChapters,
      status: 'warning',
      lastChecked: new Date().toISOString(),
      details: `RO: ${sectionsRo}, DE: ${sectionsDe}, EN: ${sectionsEn}`
    });
  }
  
  // Check word count ratio (should be within 20%)
  const wordsRo = contentRo.split(/\s+/).length;
  const wordsDe = contentDe.split(/\s+/).length;
  const wordsEn = contentEn.split(/\s+/).length;
  const avgWords = (wordsRo + wordsDe + wordsEn) / 3;
  
  const roDeviation = Math.abs(wordsRo - avgWords) / avgWords;
  const deDeviation = Math.abs(wordsDe - avgWords) / avgWords;
  const enDeviation = Math.abs(wordsEn - avgWords) / avgWords;
  
  if (roDeviation > 0.3 || deDeviation > 0.3 || enDeviation > 0.3) {
    checks.push({
      id: `check-words-${Date.now()}`,
      checkType: 'cross-language',
      description: 'Word count significantly differs between languages',
      affectedChapters,
      status: 'warning',
      lastChecked: new Date().toISOString(),
      details: `RO: ${wordsRo}, DE: ${wordsDe}, EN: ${wordsEn} (>30% deviation)`
    });
  }
  
  return checks;
}

export function getLockedTermsForChapter(chapterId: string): TerminologyRule[] {
  // Return all locked terminology (applicable to all chapters)
  return LOCKED_TERMINOLOGY.filter(t => t.isLocked);
}

export function getLockedConceptsForChapter(chapterId: string): LockedConcept[] {
  return LOCKED_CONCEPTS.filter(c => c.chapters.includes(chapterId));
}

export function isContentLocked(chapterId: string): boolean {
  // Check if chapter has critical locked concepts
  const lockedConcepts = getLockedConceptsForChapter(chapterId);
  return lockedConcepts.some(c => c.unlockRequiresApproval);
}

export function getGovernanceStats(): {
  lockedTerms: number;
  lockedConcepts: number;
  activeRules: number;
  criticalRules: number;
} {
  return {
    lockedTerms: LOCKED_TERMINOLOGY.filter(t => t.isLocked).length,
    lockedConcepts: LOCKED_CONCEPTS.length,
    activeRules: CONTENT_RULES.length,
    criticalRules: CONTENT_RULES.filter(r => r.severity === 'critical').length
  };
}
