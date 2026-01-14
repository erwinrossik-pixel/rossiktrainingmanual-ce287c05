// Chapter order matching the sidebar structure - 50 chapters integrated
const chapterOrder = [
  // Section 1: Foundation (1-5)
  "intro",
  "mindset", 
  "soft-skills",
  "stress-management",
  "workflow",
  // Section 2: Equipment (6-12)
  "vehicle",
  "loading",
  "reefer",
  "express-transport",
  "intermodal",
  "warehouse",
  "adr",
  // Section 3: Documents & Regulations (13-19)
  "documents",
  "incoterms",
  "customs",
  "authorities",
  "compliance",
  "driving-time",
  "licenses-oversize",
  // Section 4: Geography & Routes (20-24)
  "europe-zones",
  "european-countries",
  "environment",
  "sustainability",
  "supply-chain",
  // Section 5: Commercial Skills (25-33)
  "pricing",
  "commercial",
  "negotiation",
  "clients",
  "carrier-management",
  "exchanges",
  "communication",
  "networking",
  "kpi",
  // Section 6: Technology (34-37)
  "translogica",
  "fleet",
  "technology",
  "digitalization",
  // Section 7: Risk & Finance (38-43)
  "risk-management",
  "insurance",
  "high-value-goods",
  "claims",
  "payment",
  "accounting",
  // Section 8: Practical Application (44-50)
  "training",
  "professional-development",
  "case-studies",
  "emergency",
  "red-flags",
  "checklists",
  "glossary",
];

export function getChapterNumber(chapterId: string): number {
  const index = chapterOrder.indexOf(chapterId);
  return index >= 0 ? index + 1 : 0;
}

export function getChapterLabel(chapterId: string): string {
  const number = getChapterNumber(chapterId);
  return `Capitol ${number}`;
}

export function useChapterNumber(chapterId: string) {
  return {
    number: getChapterNumber(chapterId),
    label: getChapterLabel(chapterId),
  };
}
