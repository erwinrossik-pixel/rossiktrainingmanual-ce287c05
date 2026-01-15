// Centralized chapter configuration - Single source of truth for the curriculum
// This matches the exact order from the Sidebar navigation

export interface ChapterConfig {
  id: string;
  labelKey: string;
  section: string;
  isIntro?: boolean;
}

export interface SectionConfig {
  titleKey: string;
  chapters: ChapterConfig[];
}

// Full curriculum structure - 50 chapters across 8 sections
export const CURRICULUM_SECTIONS: SectionConfig[] = [
  {
    titleKey: "section.foundation",
    chapters: [
      { id: "intro", labelKey: "chapter.intro", section: "section.foundation", isIntro: true },
      { id: "mindset", labelKey: "chapter.mindset", section: "section.foundation" },
      { id: "soft-skills", labelKey: "chapter.soft-skills", section: "section.foundation" },
      { id: "stress-management", labelKey: "chapter.stress-management", section: "section.foundation" },
      { id: "workflow", labelKey: "chapter.workflow", section: "section.foundation" },
    ]
  },
  {
    titleKey: "section.equipment",
    chapters: [
      { id: "vehicle", labelKey: "chapter.vehicle", section: "section.equipment" },
      { id: "loading", labelKey: "chapter.loading", section: "section.equipment" },
      { id: "reefer", labelKey: "chapter.reefer", section: "section.equipment" },
      { id: "express-transport", labelKey: "chapter.express-transport", section: "section.equipment" },
      { id: "intermodal", labelKey: "chapter.intermodal", section: "section.equipment" },
      { id: "warehouse", labelKey: "chapter.warehouse", section: "section.equipment" },
      { id: "adr", labelKey: "chapter.adr", section: "section.equipment" },
    ]
  },
  {
    titleKey: "section.documents",
    chapters: [
      { id: "documents", labelKey: "chapter.documents", section: "section.documents" },
      { id: "incoterms", labelKey: "chapter.incoterms", section: "section.documents" },
      { id: "customs", labelKey: "chapter.customs", section: "section.documents" },
      { id: "authorities", labelKey: "chapter.authorities", section: "section.documents" },
      { id: "compliance", labelKey: "chapter.compliance", section: "section.documents" },
      { id: "driving-time", labelKey: "chapter.driving-time", section: "section.documents" },
      { id: "licenses-oversize", labelKey: "chapter.licenses-oversize", section: "section.documents" },
    ]
  },
  {
    titleKey: "section.geography",
    chapters: [
      { id: "europe-zones", labelKey: "chapter.europe-zones", section: "section.geography" },
      { id: "european-countries", labelKey: "chapter.european-countries", section: "section.geography" },
      { id: "environment", labelKey: "chapter.environment", section: "section.geography" },
      { id: "sustainability", labelKey: "chapter.sustainability", section: "section.geography" },
      { id: "supply-chain", labelKey: "chapter.supply-chain", section: "section.geography" },
    ]
  },
  {
    titleKey: "section.commercial",
    chapters: [
      { id: "pricing", labelKey: "chapter.pricing", section: "section.commercial" },
      { id: "commercial", labelKey: "chapter.commercial", section: "section.commercial" },
      { id: "negotiation", labelKey: "chapter.negotiation", section: "section.commercial" },
      { id: "clients", labelKey: "chapter.clients", section: "section.commercial" },
      { id: "carrier-management", labelKey: "chapter.carrier-management", section: "section.commercial" },
      { id: "exchanges", labelKey: "chapter.exchanges", section: "section.commercial" },
      { id: "communication", labelKey: "chapter.communication", section: "section.commercial" },
      { id: "networking", labelKey: "chapter.networking", section: "section.commercial" },
      { id: "kpi", labelKey: "chapter.kpi", section: "section.commercial" },
    ]
  },
  {
    titleKey: "section.technology",
    chapters: [
      { id: "translogica", labelKey: "chapter.translogica", section: "section.technology" },
      { id: "fleet", labelKey: "chapter.fleet", section: "section.technology" },
      { id: "technology", labelKey: "chapter.technology", section: "section.technology" },
      { id: "digitalization", labelKey: "chapter.digitalization", section: "section.technology" },
    ]
  },
  {
    titleKey: "section.finance",
    chapters: [
      { id: "risk-management", labelKey: "chapter.risk-management", section: "section.finance" },
      { id: "insurance", labelKey: "chapter.insurance", section: "section.finance" },
      { id: "high-value-goods", labelKey: "chapter.high-value-goods", section: "section.finance" },
      { id: "claims", labelKey: "chapter.claims", section: "section.finance" },
      { id: "payment", labelKey: "chapter.payment", section: "section.finance" },
      { id: "accounting", labelKey: "chapter.accounting", section: "section.finance" },
    ]
  },
  {
    titleKey: "section.practical",
    chapters: [
      { id: "training", labelKey: "chapter.training", section: "section.practical" },
      { id: "professional-development", labelKey: "chapter.professional-development", section: "section.practical" },
      { id: "case-studies", labelKey: "chapter.case-studies", section: "section.practical" },
      { id: "emergency", labelKey: "chapter.emergency", section: "section.practical" },
      { id: "red-flags", labelKey: "chapter.red-flags", section: "section.practical" },
      { id: "checklists", labelKey: "chapter.checklists", section: "section.practical" },
      { id: "glossary", labelKey: "chapter.glossary", section: "section.practical" },
    ]
  },
];

// Flat list of all chapters in order (50 chapters)
export const ALL_CHAPTERS: ChapterConfig[] = CURRICULUM_SECTIONS.flatMap(s => s.chapters);

// Get all chapter IDs in order
export const ALL_CHAPTER_IDS: string[] = ALL_CHAPTERS.map(c => c.id);

// Total chapter count
export const TOTAL_CHAPTERS = ALL_CHAPTERS.length;

// Get chapter number (1-indexed) from chapter ID
export function getChapterNumber(chapterId: string): number {
  const index = ALL_CHAPTER_IDS.indexOf(chapterId);
  return index >= 0 ? index + 1 : 0;
}

// Get chapter by ID
export function getChapterById(chapterId: string): ChapterConfig | undefined {
  return ALL_CHAPTERS.find(c => c.id === chapterId);
}

// Training phases mapping (for CompactDailyTracker)
export interface PhaseInfo {
  phase: number;
  titleKey: string;
  chapters: number[]; // Chapter numbers (1-indexed)
}

export const TRAINING_PHASES: PhaseInfo[] = [
  { phase: 1, titleKey: "phase1", chapters: [1, 2, 3, 4, 5] },
  { phase: 2, titleKey: "phase2", chapters: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { phase: 3, titleKey: "phase3", chapters: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33] },
  { phase: 4, titleKey: "phase4", chapters: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43] },
  { phase: 5, titleKey: "phase5", chapters: [44, 45, 46, 47, 48, 49, 50] },
];

// Get chapter ID from chapter number (1-indexed)
export function getChapterIdByNumber(chapterNumber: number): string | undefined {
  return ALL_CHAPTER_IDS[chapterNumber - 1];
}
