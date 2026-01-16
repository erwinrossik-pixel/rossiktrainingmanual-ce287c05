// Knowledge Graph Data Structure for Manual Concepts

export interface Concept {
  id: string;
  name: string;
  nameRo: string;
  nameDe: string;
  category: ConceptCategory;
  chapterIds: string[];
  description: string;
  descriptionRo: string;
  descriptionDe: string;
  importance: 'critical' | 'high' | 'medium' | 'low';
}

export interface ConceptRelation {
  from: string;
  to: string;
  type: RelationType;
  strength: number; // 1-10
  description?: string;
}

export type ConceptCategory = 
  | 'legal' 
  | 'operational' 
  | 'commercial' 
  | 'technical' 
  | 'geographic' 
  | 'financial' 
  | 'safety'
  | 'documentation';

export type RelationType = 
  | 'requires' 
  | 'extends' 
  | 'related' 
  | 'conflicts' 
  | 'enables' 
  | 'validates';

// Core Concepts
export const CONCEPTS: Concept[] = [
  // Legal & Compliance
  {
    id: 'cmr',
    name: 'CMR Convention',
    nameRo: 'Convenția CMR',
    nameDe: 'CMR-Übereinkommen',
    category: 'legal',
    chapterIds: ['claims', 'documents', 'insurance'],
    description: 'International road freight liability framework',
    descriptionRo: 'Cadru legal pentru transportul rutier internațional',
    descriptionDe: 'Rechtlicher Rahmen für den internationalen Straßengüterverkehr',
    importance: 'critical'
  },
  {
    id: 'eu561',
    name: 'EU Regulation 561/2006',
    nameRo: 'Regulamentul UE 561/2006',
    nameDe: 'EU-Verordnung 561/2006',
    category: 'legal',
    chapterIds: ['compliance', 'driving-time'],
    description: 'Driving and rest time rules',
    descriptionRo: 'Reguli pentru timpii de conducere și odihnă',
    descriptionDe: 'Lenk- und Ruhezeiten-Vorschriften',
    importance: 'critical'
  },
  {
    id: 'adr',
    name: 'ADR Regulations',
    nameRo: 'Reglementări ADR',
    nameDe: 'ADR-Vorschriften',
    category: 'safety',
    chapterIds: ['adr', 'documents', 'vehicle'],
    description: 'Dangerous goods transport rules',
    descriptionRo: 'Reguli pentru transportul mărfurilor periculoase',
    descriptionDe: 'Gefahrguttransport-Vorschriften',
    importance: 'critical'
  },
  {
    id: 'incoterms',
    name: 'Incoterms 2020',
    nameRo: 'Incoterms 2020',
    nameDe: 'Incoterms 2020',
    category: 'commercial',
    chapterIds: ['incoterms', 'pricing', 'claims'],
    description: 'International commercial terms',
    descriptionRo: 'Termeni comerciali internaționali',
    descriptionDe: 'Internationale Handelsklauseln',
    importance: 'high'
  },
  {
    id: 'customs-procedures',
    name: 'Customs Procedures',
    nameRo: 'Proceduri Vamale',
    nameDe: 'Zollverfahren',
    category: 'documentation',
    chapterIds: ['customs', 'documents', 'european-countries'],
    description: 'Import/export customs handling',
    descriptionRo: 'Proceduri de import/export vamal',
    descriptionDe: 'Import/Export-Zollabwicklung',
    importance: 'high'
  },
  {
    id: 't1-transit',
    name: 'T1 Transit Document',
    nameRo: 'Document T1 Tranzit',
    nameDe: 'T1-Versandschein',
    category: 'documentation',
    chapterIds: ['customs', 'documents'],
    description: 'External community transit procedure',
    descriptionRo: 'Procedură de tranzit extern comunitar',
    descriptionDe: 'Externes Gemeinschaftsversandverfahren',
    importance: 'high'
  },
  {
    id: 'pricing-calculation',
    name: 'Freight Pricing',
    nameRo: 'Calculul Prețurilor',
    nameDe: 'Frachtpreisberechnung',
    category: 'commercial',
    chapterIds: ['pricing', 'commercial', 'negotiation'],
    description: 'Rate calculation methodology',
    descriptionRo: 'Metodologie de calcul tarife',
    descriptionDe: 'Tarifberechnungsmethodik',
    importance: 'critical'
  },
  {
    id: 'carrier-management',
    name: 'Carrier Relations',
    nameRo: 'Relații cu Transportatorii',
    nameDe: 'Spediteurbeziehungen',
    category: 'operational',
    chapterIds: ['carrier-management', 'negotiation', 'fleet'],
    description: 'Managing carrier partnerships',
    descriptionRo: 'Gestionarea parteneriatelor cu transportatori',
    descriptionDe: 'Verwaltung von Spediteurpartnerschaften',
    importance: 'high'
  },
  {
    id: 'claims-handling',
    name: 'Claims Management',
    nameRo: 'Gestionare Daune',
    nameDe: 'Schadensmanagement',
    category: 'operational',
    chapterIds: ['claims', 'insurance', 'documents'],
    description: 'Damage and loss claim procedures',
    descriptionRo: 'Proceduri pentru daune și pierderi',
    descriptionDe: 'Schadens- und Verlustverfahren',
    importance: 'high'
  },
  {
    id: 'tms-operations',
    name: 'TMS Operations',
    nameRo: 'Operațiuni TMS',
    nameDe: 'TMS-Betrieb',
    category: 'technical',
    chapterIds: ['translogica', 'technology', 'workflow'],
    description: 'Transport Management System usage',
    descriptionRo: 'Utilizarea sistemului de management transport',
    descriptionDe: 'Transport-Management-System-Nutzung',
    importance: 'high'
  },
  {
    id: 'vehicle-types',
    name: 'Vehicle Types & Specs',
    nameRo: 'Tipuri și Specificații Vehicule',
    nameDe: 'Fahrzeugtypen & Spezifikationen',
    category: 'technical',
    chapterIds: ['vehicle', 'loading', 'fleet'],
    description: 'Truck types and loading capacities',
    descriptionRo: 'Tipuri de camioane și capacități de încărcare',
    descriptionDe: 'LKW-Typen und Ladekapazitäten',
    importance: 'medium'
  },
  {
    id: 'reefer-transport',
    name: 'Temperature-Controlled Transport',
    nameRo: 'Transport Temperatură Controlată',
    nameDe: 'Temperaturgeführter Transport',
    category: 'technical',
    chapterIds: ['reefer', 'loading', 'documents'],
    description: 'Cold chain logistics',
    descriptionRo: 'Logistică lanț frigorific',
    descriptionDe: 'Kühlkettenlogistik',
    importance: 'medium'
  },
  {
    id: 'toll-systems',
    name: 'European Toll Systems',
    nameRo: 'Sisteme de Taxare Europeană',
    nameDe: 'Europäische Mautsysteme',
    category: 'geographic',
    chapterIds: ['european-countries', 'europe-zones', 'pricing'],
    description: 'Road toll calculation and payment',
    descriptionRo: 'Calculul și plata taxelor rutiere',
    descriptionDe: 'Straßenmautberechnung und -zahlung',
    importance: 'medium'
  },
  {
    id: 'driving-bans',
    name: 'Driving Restrictions',
    nameRo: 'Restricții de Circulație',
    nameDe: 'Fahrverbote',
    category: 'geographic',
    chapterIds: ['european-countries', 'driving-time', 'compliance'],
    description: 'Weekend and holiday driving bans',
    descriptionRo: 'Interdicții de circulație weekend și sărbători',
    descriptionDe: 'Wochenend- und Feiertagsfahrverbote',
    importance: 'medium'
  },
  {
    id: 'invoicing',
    name: 'Invoicing & Payment',
    nameRo: 'Facturare și Plată',
    nameDe: 'Rechnungsstellung & Zahlung',
    category: 'financial',
    chapterIds: ['accounting', 'payment', 'commercial'],
    description: 'Billing and payment terms',
    descriptionRo: 'Facturare și termeni de plată',
    descriptionDe: 'Rechnungsstellung und Zahlungsbedingungen',
    importance: 'high'
  },
  {
    id: 'risk-assessment',
    name: 'Risk Assessment',
    nameRo: 'Evaluarea Riscurilor',
    nameDe: 'Risikobewertung',
    category: 'operational',
    chapterIds: ['risk-management', 'red-flags', 'insurance'],
    description: 'Identifying and mitigating risks',
    descriptionRo: 'Identificarea și reducerea riscurilor',
    descriptionDe: 'Risikoidentifikation und -minderung',
    importance: 'high'
  },
  {
    id: 'client-acquisition',
    name: 'Client Acquisition',
    nameRo: 'Achiziție Clienți',
    nameDe: 'Kundenakquise',
    category: 'commercial',
    chapterIds: ['clients', 'commercial', 'networking'],
    description: 'Finding and onboarding clients',
    descriptionRo: 'Găsirea și integrarea clienților',
    descriptionDe: 'Kundengewinnung und -einarbeitung',
    importance: 'high'
  },
  {
    id: 'communication',
    name: 'Professional Communication',
    nameRo: 'Comunicare Profesională',
    nameDe: 'Professionelle Kommunikation',
    category: 'operational',
    chapterIds: ['communication', 'soft-skills', 'clients'],
    description: 'Email, phone, and written communication',
    descriptionRo: 'Comunicare email, telefon și scrisă',
    descriptionDe: 'E-Mail-, Telefon- und Schriftkommunikation',
    importance: 'medium'
  },
  {
    id: 'emergency-handling',
    name: 'Emergency Procedures',
    nameRo: 'Proceduri de Urgență',
    nameDe: 'Notfallverfahren',
    category: 'safety',
    chapterIds: ['emergency', 'claims', 'communication'],
    description: 'Handling accidents and emergencies',
    descriptionRo: 'Gestionarea accidentelor și urgențelor',
    descriptionDe: 'Umgang mit Unfällen und Notfällen',
    importance: 'critical'
  },
  {
    id: 'kpi-tracking',
    name: 'KPI Monitoring',
    nameRo: 'Monitorizare KPI',
    nameDe: 'KPI-Überwachung',
    category: 'operational',
    chapterIds: ['kpi', 'commercial', 'workflow'],
    description: 'Performance measurement and tracking',
    descriptionRo: 'Măsurarea și urmărirea performanței',
    descriptionDe: 'Leistungsmessung und -verfolgung',
    importance: 'medium'
  }
];

// Concept Relations - Dependencies and Connections
export const CONCEPT_RELATIONS: ConceptRelation[] = [
  // CMR Relations
  { from: 'cmr', to: 'claims-handling', type: 'enables', strength: 10, description: 'CMR defines claim procedures' },
  { from: 'cmr', to: 'incoterms', type: 'related', strength: 7, description: 'Risk transfer rules' },
  { from: 'cmr', to: 'pricing-calculation', type: 'related', strength: 5, description: 'Liability affects pricing' },
  
  // EU 561 Relations
  { from: 'eu561', to: 'driving-bans', type: 'extends', strength: 8 },
  { from: 'eu561', to: 'tms-operations', type: 'enables', strength: 6, description: 'TMS tracks compliance' },
  { from: 'eu561', to: 'carrier-management', type: 'validates', strength: 7 },
  
  // ADR Relations
  { from: 'adr', to: 'vehicle-types', type: 'requires', strength: 9, description: 'Special vehicles for DG' },
  { from: 'adr', to: 'pricing-calculation', type: 'related', strength: 6, description: 'ADR affects rates' },
  { from: 'adr', to: 'emergency-handling', type: 'enables', strength: 9 },
  
  // Customs Relations
  { from: 'customs-procedures', to: 't1-transit', type: 'extends', strength: 9 },
  { from: 'customs-procedures', to: 'toll-systems', type: 'related', strength: 4 },
  { from: 't1-transit', to: 'pricing-calculation', type: 'related', strength: 5 },
  
  // Pricing Relations
  { from: 'pricing-calculation', to: 'carrier-management', type: 'requires', strength: 8 },
  { from: 'pricing-calculation', to: 'toll-systems', type: 'requires', strength: 7 },
  { from: 'pricing-calculation', to: 'vehicle-types', type: 'requires', strength: 8 },
  { from: 'pricing-calculation', to: 'invoicing', type: 'enables', strength: 9 },
  
  // Carrier Management Relations
  { from: 'carrier-management', to: 'risk-assessment', type: 'requires', strength: 8 },
  { from: 'carrier-management', to: 'communication', type: 'requires', strength: 7 },
  { from: 'carrier-management', to: 'tms-operations', type: 'enables', strength: 7 },
  
  // Claims Relations
  { from: 'claims-handling', to: 'risk-assessment', type: 'related', strength: 8 },
  { from: 'claims-handling', to: 'communication', type: 'requires', strength: 7 },
  { from: 'claims-handling', to: 'emergency-handling', type: 'related', strength: 6 },
  
  // TMS Relations
  { from: 'tms-operations', to: 'invoicing', type: 'enables', strength: 8 },
  { from: 'tms-operations', to: 'kpi-tracking', type: 'enables', strength: 9 },
  { from: 'tms-operations', to: 'carrier-management', type: 'enables', strength: 8 },
  
  // Vehicle Relations
  { from: 'vehicle-types', to: 'reefer-transport', type: 'extends', strength: 7 },
  { from: 'vehicle-types', to: 'pricing-calculation', type: 'enables', strength: 7 },
  
  // Reefer Relations
  { from: 'reefer-transport', to: 'claims-handling', type: 'related', strength: 6, description: 'Temperature claims' },
  { from: 'reefer-transport', to: 'pricing-calculation', type: 'related', strength: 7 },
  
  // Geographic Relations
  { from: 'toll-systems', to: 'driving-bans', type: 'related', strength: 5 },
  { from: 'driving-bans', to: 'tms-operations', type: 'related', strength: 6 },
  
  // Financial Relations
  { from: 'invoicing', to: 'client-acquisition', type: 'related', strength: 5 },
  { from: 'invoicing', to: 'kpi-tracking', type: 'enables', strength: 7 },
  
  // Risk Relations
  { from: 'risk-assessment', to: 'emergency-handling', type: 'enables', strength: 8 },
  { from: 'risk-assessment', to: 'client-acquisition', type: 'validates', strength: 6 },
  
  // Client Relations
  { from: 'client-acquisition', to: 'communication', type: 'requires', strength: 9 },
  { from: 'client-acquisition', to: 'incoterms', type: 'requires', strength: 6 },
  { from: 'client-acquisition', to: 'pricing-calculation', type: 'requires', strength: 8 },
  
  // Incoterms Relations
  { from: 'incoterms', to: 'customs-procedures', type: 'related', strength: 7 },
  { from: 'incoterms', to: 'claims-handling', type: 'related', strength: 6 },
  
  // Emergency Relations
  { from: 'emergency-handling', to: 'communication', type: 'requires', strength: 9 },
  { from: 'emergency-handling', to: 'claims-handling', type: 'enables', strength: 8 }
];

// Helper functions
export function getConceptById(id: string): Concept | undefined {
  return CONCEPTS.find(c => c.id === id);
}

export function getRelatedConcepts(conceptId: string): { concept: Concept; relation: ConceptRelation }[] {
  const relations = CONCEPT_RELATIONS.filter(r => r.from === conceptId || r.to === conceptId);
  return relations.map(relation => {
    const relatedId = relation.from === conceptId ? relation.to : relation.from;
    const concept = getConceptById(relatedId);
    return concept ? { concept, relation } : null;
  }).filter(Boolean) as { concept: Concept; relation: ConceptRelation }[];
}

export function getConceptsByChapter(chapterId: string): Concept[] {
  return CONCEPTS.filter(c => c.chapterIds.includes(chapterId));
}

export function getConceptsByCategory(category: ConceptCategory): Concept[] {
  return CONCEPTS.filter(c => c.category === category);
}

export function calculateImpact(conceptId: string, visited: Set<string> = new Set()): {
  directImpact: Concept[];
  indirectImpact: Concept[];
  totalScore: number;
} {
  if (visited.has(conceptId)) {
    return { directImpact: [], indirectImpact: [], totalScore: 0 };
  }
  
  visited.add(conceptId);
  
  const directRelations = CONCEPT_RELATIONS.filter(r => r.from === conceptId);
  const directImpact: Concept[] = [];
  let indirectImpact: Concept[] = [];
  let totalScore = 0;
  
  for (const relation of directRelations) {
    const concept = getConceptById(relation.to);
    if (concept && !visited.has(concept.id)) {
      directImpact.push(concept);
      totalScore += relation.strength;
      
      // Recursive impact
      const nested = calculateImpact(relation.to, new Set(visited));
      indirectImpact = [...indirectImpact, ...nested.directImpact, ...nested.indirectImpact];
      totalScore += nested.totalScore * 0.5; // Diminishing impact
    }
  }
  
  // Remove duplicates
  indirectImpact = indirectImpact.filter(
    (c, i, arr) => arr.findIndex(x => x.id === c.id) === i && !directImpact.find(d => d.id === c.id)
  );
  
  return { directImpact, indirectImpact, totalScore };
}

export function getAffectedChapters(conceptId: string): string[] {
  const { directImpact, indirectImpact } = calculateImpact(conceptId);
  const concept = getConceptById(conceptId);
  
  const allChapters = new Set<string>();
  
  if (concept) {
    concept.chapterIds.forEach(ch => allChapters.add(ch));
  }
  
  [...directImpact, ...indirectImpact].forEach(c => {
    c.chapterIds.forEach(ch => allChapters.add(ch));
  });
  
  return Array.from(allChapters);
}

export const CATEGORY_COLORS: Record<ConceptCategory, string> = {
  legal: '#ef4444',
  operational: '#3b82f6',
  commercial: '#22c55e',
  technical: '#8b5cf6',
  geographic: '#f59e0b',
  financial: '#ec4899',
  safety: '#f97316',
  documentation: '#06b6d4'
};

export const RELATION_TYPE_LABELS: Record<RelationType, { en: string; ro: string; de: string }> = {
  requires: { en: 'Requires', ro: 'Necesită', de: 'Erfordert' },
  extends: { en: 'Extends', ro: 'Extinde', de: 'Erweitert' },
  related: { en: 'Related to', ro: 'Legat de', de: 'Verwandt mit' },
  conflicts: { en: 'Conflicts with', ro: 'Conflict cu', de: 'Konflikt mit' },
  enables: { en: 'Enables', ro: 'Permite', de: 'Ermöglicht' },
  validates: { en: 'Validates', ro: 'Validează', de: 'Validiert' }
};
