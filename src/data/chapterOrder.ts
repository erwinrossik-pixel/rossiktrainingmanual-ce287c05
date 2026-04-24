// Ordered list of all chapters in the curriculum.
// Must stay in sync with the sidebar grouping in src/components/manual/Sidebar.tsx.
export const chapterOrder: ReadonlyArray<{ id: string; label: string }> = [
  // Foundation (5 chapters)
  { id: "intro", label: "Introduction" },
  { id: "mindset", label: "Role & Mindset" },
  { id: "soft-skills", label: "Soft Skills" },
  { id: "stress-management", label: "Stress Management" },
  { id: "workflow", label: "Operational Workflow" },
  // Equipment & Handling (7 chapters)
  { id: "vehicle", label: "Vehicle Reference" },
  { id: "loading", label: "Loading & Securing" },
  { id: "reefer", label: "Temperature Transport" },
  { id: "express-transport", label: "Express Transport" },
  { id: "intermodal", label: "Intermodal Transport" },
  { id: "warehouse", label: "Warehouse & Cross-Dock" },
  { id: "adr", label: "ADR Dangerous Goods" },
  // Documents & Compliance (7 chapters)
  { id: "documents", label: "Transport Documents" },
  { id: "incoterms", label: "Incoterms & Trade" },
  { id: "customs", label: "Customs & Borders" },
  { id: "authorities", label: "Authorities" },
  { id: "compliance", label: "Drivers' Hours" },
  { id: "driving-time", label: "Shift vs Driving Time" },
  { id: "licenses-oversize", label: "Licenses & Oversize" },
  // Geography & Environment (5 chapters)
  { id: "europe-zones", label: "European Zones" },
  { id: "european-countries", label: "European Countries" },
  { id: "environment", label: "Environmental" },
  { id: "sustainability", label: "Sustainability" },
  { id: "supply-chain", label: "Supply Chain" },
  // Commercial Skills (9 chapters)
  { id: "pricing", label: "Pricing & Tolls" },
  { id: "commercial", label: "Commercial Skills" },
  { id: "negotiation", label: "Negotiation" },
  { id: "clients", label: "Finding Clients" },
  { id: "carrier-management", label: "Carrier Management" },
  { id: "exchanges", label: "Freight Exchanges" },
  { id: "communication", label: "Communication" },
  { id: "networking", label: "Networking" },
  { id: "kpi", label: "KPIs & Performance" },
  // Systems & Technology (4 chapters)
  { id: "translogica", label: "Translogica TMS" },
  { id: "fleet", label: "Fleet & GPS" },
  { id: "technology", label: "Technology & Digital" },
  { id: "digitalization", label: "Digitalization" },
  // Risk & Finance (6 chapters)
  { id: "risk-management", label: "Risk Management" },
  { id: "insurance", label: "Transport Insurance" },
  { id: "high-value-goods", label: "High Value Goods" },
  { id: "claims", label: "Claims & Disputes" },
  { id: "payment", label: "Payment & Invoicing" },
  { id: "accounting", label: "Accounting & Finance" },
  // Practical Application (7 chapters)
  { id: "training", label: "Training Exercises" },
  { id: "professional-development", label: "Professional Development" },
  { id: "case-studies", label: "Case Studies" },
  { id: "emergency", label: "Emergency Procedures" },
  { id: "red-flags", label: "Red Flags & Tips" },
  { id: "checklists", label: "Checklists" },
  { id: "glossary", label: "Glossary" },
];

/** Returns the previous and next chapter IDs around the given chapter. */
export function getAdjacentChapters(chapterId: string): {
  prev: string | null;
  next: string | null;
} {
  const idx = chapterOrder.findIndex((c) => c.id === chapterId);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? chapterOrder[idx - 1].id : null,
    next: idx < chapterOrder.length - 1 ? chapterOrder[idx + 1].id : null,
  };
}
