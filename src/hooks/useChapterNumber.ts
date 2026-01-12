// Chapter order matching the sidebar structure
const chapterOrder = [
  // Section 1: Foundation (1-4)
  "intro",
  "mindset", 
  "soft-skills",
  "workflow",
  // Section 2: Equipment (5-9)
  "vehicle",
  "loading",
  "reefer",
  "warehouse",
  "adr",
  // Section 3: Documents & Regulations (10-15)
  "documents",
  "incoterms",
  "customs",
  "compliance",
  "driving-time",
  "licenses-oversize",
  // Section 4: Geography & Routes (16-18)
  "europe-zones",
  "environment",
  "supply-chain",
  // Section 5: Commercial Skills (19-26)
  "pricing",
  "commercial",
  "negotiation",
  "clients",
  "carrier-management",
  "exchanges",
  "communication",
  "kpi",
  // Section 6: Technology (27-29)
  "translogica",
  "fleet",
  "technology",
  // Section 7: Risk & Finance (30-34)
  "risk-management",
  "insurance",
  "claims",
  "payment",
  "accounting",
  // Section 8: Practical Application (35-40)
  "training",
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
