import { 
  BookOpen, Users, Truck, Package, Shield, Calculator, 
  Building2, Route, Clock, Laptop, GraduationCap, AlertTriangle, 
  ClipboardList, Target, Phone, MessageSquare, Scale,
  FileText, Flame, Book, Lightbulb, BarChart3, Award, Leaf
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ChapterInfo {
  id: string;
  labelKey: string;
  icon: LucideIcon;
  hasQuiz: boolean;
}

export interface SectionInfo {
  titleKey: string;
  chapters: ChapterInfo[];
}

// All chapters with their quiz availability
export const sections: SectionInfo[] = [
  {
    titleKey: "section.foundation",
    chapters: [
      { id: "intro", labelKey: "chapter.intro", icon: BookOpen, hasQuiz: true },
      { id: "mindset", labelKey: "chapter.mindset", icon: Target, hasQuiz: true },
      { id: "soft-skills", labelKey: "chapter.soft-skills", icon: Users, hasQuiz: true },
      { id: "workflow", labelKey: "chapter.workflow", icon: Route, hasQuiz: true },
    ]
  },
  {
    titleKey: "section.equipment",
    chapters: [
      { id: "vehicle", labelKey: "chapter.vehicle", icon: Truck, hasQuiz: true },
      { id: "loading", labelKey: "chapter.loading", icon: Package, hasQuiz: true },
      { id: "reefer", labelKey: "chapter.reefer", icon: Package, hasQuiz: true },
      { id: "warehouse", labelKey: "chapter.warehouse", icon: Package, hasQuiz: true },
      { id: "adr", labelKey: "chapter.adr", icon: Flame, hasQuiz: true },
    ]
  },
  {
    titleKey: "section.documents",
    chapters: [
      { id: "documents", labelKey: "chapter.documents", icon: FileText, hasQuiz: true },
      { id: "incoterms", labelKey: "chapter.incoterms", icon: Book, hasQuiz: true },
      { id: "customs", labelKey: "chapter.customs", icon: Shield, hasQuiz: true },
      { id: "compliance", labelKey: "chapter.compliance", icon: Clock, hasQuiz: true },
      { id: "driving-time", labelKey: "chapter.driving-time", icon: Clock, hasQuiz: true },
      { id: "licenses-oversize", labelKey: "chapter.licenses-oversize", icon: Award, hasQuiz: false },
    ]
  },
  {
    titleKey: "section.geography",
    chapters: [
      { id: "europe-zones", labelKey: "chapter.europe-zones", icon: Route, hasQuiz: false },
      { id: "environment", labelKey: "chapter.environment", icon: Leaf, hasQuiz: true },
      { id: "supply-chain", labelKey: "chapter.supply-chain", icon: Route, hasQuiz: false },
    ]
  },
  {
    titleKey: "section.commercial",
    chapters: [
      { id: "pricing", labelKey: "chapter.pricing", icon: Calculator, hasQuiz: true },
      { id: "commercial", labelKey: "chapter.commercial", icon: Target, hasQuiz: true },
      { id: "negotiation", labelKey: "chapter.negotiation", icon: Users, hasQuiz: true },
      { id: "clients", labelKey: "chapter.clients", icon: Building2, hasQuiz: true },
      { id: "carrier-management", labelKey: "chapter.carrier-management", icon: Users, hasQuiz: false },
      { id: "exchanges", labelKey: "chapter.exchanges", icon: Users, hasQuiz: true },
      { id: "communication", labelKey: "chapter.communication", icon: MessageSquare, hasQuiz: true },
      { id: "kpi", labelKey: "chapter.kpi", icon: BarChart3, hasQuiz: true },
    ]
  },
  {
    titleKey: "section.technology",
    chapters: [
      { id: "translogica", labelKey: "chapter.translogica", icon: Laptop, hasQuiz: true },
      { id: "fleet", labelKey: "chapter.fleet", icon: Truck, hasQuiz: true },
      { id: "technology", labelKey: "chapter.technology", icon: Laptop, hasQuiz: true },
    ]
  },
  {
    titleKey: "section.finance",
    chapters: [
      { id: "risk-management", labelKey: "chapter.risk-management", icon: Shield, hasQuiz: false },
      { id: "insurance", labelKey: "chapter.insurance", icon: Shield, hasQuiz: true },
      { id: "claims", labelKey: "chapter.claims", icon: Scale, hasQuiz: true },
      { id: "payment", labelKey: "chapter.payment", icon: Calculator, hasQuiz: true },
      { id: "accounting", labelKey: "chapter.accounting", icon: Calculator, hasQuiz: true },
    ]
  },
  {
    titleKey: "section.practical",
    chapters: [
      { id: "training", labelKey: "chapter.training", icon: GraduationCap, hasQuiz: true },
      { id: "case-studies", labelKey: "chapter.case-studies", icon: Lightbulb, hasQuiz: false },
      { id: "emergency", labelKey: "chapter.emergency", icon: Phone, hasQuiz: true },
      { id: "red-flags", labelKey: "chapter.red-flags", icon: AlertTriangle, hasQuiz: false },
      { id: "checklists", labelKey: "chapter.checklists", icon: ClipboardList, hasQuiz: true },
      { id: "glossary", labelKey: "chapter.glossary", icon: Book, hasQuiz: true },
    ]
  },
];

// Flatten all chapters
export const allChapters = sections.flatMap(section => 
  section.chapters.map(chapter => ({
    ...chapter,
    section: section.titleKey
  }))
);

// Get total chapter count
export const totalChapters = allChapters.length;

// Get chapters with quizzes
export const chaptersWithQuizzes = allChapters.filter(c => c.hasQuiz);
export const totalQuizzes = chaptersWithQuizzes.length;

// Get chapter number by ID
export function getChapterNumberById(chapterId: string): number {
  const index = allChapters.findIndex(c => c.id === chapterId);
  return index >= 0 ? index + 1 : 0;
}
