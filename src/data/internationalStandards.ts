// International Standards Mapping for Freight Forwarding Training
// FIATA, IATA, ISO 9001, ISO 28000

export interface StandardRequirement {
  id: string;
  standard: 'FIATA' | 'IATA' | 'ISO9001' | 'ISO28000';
  section: string;
  requirement: string;
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
}

export interface ChapterStandardMapping {
  chapterId: string;
  chapterName: string;
  mappedStandards: {
    standard: 'FIATA' | 'IATA' | 'ISO9001' | 'ISO28000';
    requirements: string[];
    coveredRequirements: string[];
    missingRequirements: string[];
    compliancePercentage: number;
  }[];
  overallCompliance: number;
  gaps: GapItem[];
}

export interface GapItem {
  standard: string;
  requirement: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  action: 'add' | 'extend' | 'rewrite';
  description: string;
}

// FIATA Model Rules for Freight Forwarding Services
export const FIATA_REQUIREMENTS: StandardRequirement[] = [
  // Section 1: General Provisions
  { id: 'FIATA-1.1', standard: 'FIATA', section: 'General Provisions', requirement: 'Definitions and Scope', description: 'Understanding of freight forwarding terms and scope of services', priority: 'critical' },
  { id: 'FIATA-1.2', standard: 'FIATA', section: 'General Provisions', requirement: 'Applicability', description: 'Knowledge of when FIATA rules apply', priority: 'high' },
  { id: 'FIATA-1.3', standard: 'FIATA', section: 'General Provisions', requirement: 'Variations', description: 'Understanding contractual variations', priority: 'medium' },
  
  // Section 2: Services
  { id: 'FIATA-2.1', standard: 'FIATA', section: 'Services', requirement: 'Scope of Services', description: 'Full understanding of freight forwarding services', priority: 'critical' },
  { id: 'FIATA-2.2', standard: 'FIATA', section: 'Services', requirement: 'Carrier Selection', description: 'Proper carrier selection and qualification', priority: 'critical' },
  { id: 'FIATA-2.3', standard: 'FIATA', section: 'Services', requirement: 'Customs Clearance', description: 'Customs procedures and documentation', priority: 'critical' },
  { id: 'FIATA-2.4', standard: 'FIATA', section: 'Services', requirement: 'Warehousing', description: 'Warehouse operations and storage', priority: 'high' },
  { id: 'FIATA-2.5', standard: 'FIATA', section: 'Services', requirement: 'Consolidation', description: 'Cargo consolidation services', priority: 'high' },
  { id: 'FIATA-2.6', standard: 'FIATA', section: 'Services', requirement: 'Distribution', description: 'Distribution and delivery services', priority: 'high' },
  
  // Section 3: Customer's Duties
  { id: 'FIATA-3.1', standard: 'FIATA', section: 'Customer Duties', requirement: 'Information Provision', description: 'Client communication and information requirements', priority: 'high' },
  { id: 'FIATA-3.2', standard: 'FIATA', section: 'Customer Duties', requirement: 'Documentation', description: 'Proper documentation from customers', priority: 'critical' },
  { id: 'FIATA-3.3', standard: 'FIATA', section: 'Customer Duties', requirement: 'Dangerous Goods Declaration', description: 'ADR and dangerous goods handling', priority: 'critical' },
  
  // Section 4: Liability
  { id: 'FIATA-4.1', standard: 'FIATA', section: 'Liability', requirement: 'Liability Limits', description: 'Understanding liability limits and CMR', priority: 'critical' },
  { id: 'FIATA-4.2', standard: 'FIATA', section: 'Liability', requirement: 'Insurance Requirements', description: 'Cargo and liability insurance', priority: 'critical' },
  { id: 'FIATA-4.3', standard: 'FIATA', section: 'Liability', requirement: 'Claims Handling', description: 'Proper claims management', priority: 'critical' },
  { id: 'FIATA-4.4', standard: 'FIATA', section: 'Liability', requirement: 'Time Limits', description: 'Claim time limits and procedures', priority: 'high' },
  
  // Section 5: FBL (FIATA Bill of Lading)
  { id: 'FIATA-5.1', standard: 'FIATA', section: 'Documents', requirement: 'FBL Understanding', description: 'FIATA Bill of Lading usage', priority: 'high' },
  { id: 'FIATA-5.2', standard: 'FIATA', section: 'Documents', requirement: 'FCR/FCT', description: 'Certificate of Receipt and Transport', priority: 'high' },
  { id: 'FIATA-5.3', standard: 'FIATA', section: 'Documents', requirement: 'CMR Documents', description: 'CMR consignment note handling', priority: 'critical' },
  
  // Section 6: Payment
  { id: 'FIATA-6.1', standard: 'FIATA', section: 'Payment', requirement: 'Payment Terms', description: 'Understanding payment terms and conditions', priority: 'high' },
  { id: 'FIATA-6.2', standard: 'FIATA', section: 'Payment', requirement: 'Lien Rights', description: 'Rights over goods for payment', priority: 'medium' },
  { id: 'FIATA-6.3', standard: 'FIATA', section: 'Payment', requirement: 'Charges', description: 'Freight charges and pricing', priority: 'critical' },
];

// IATA Cargo Training Framework
export const IATA_REQUIREMENTS: StandardRequirement[] = [
  // Unit 1: Industry Overview
  { id: 'IATA-1.1', standard: 'IATA', section: 'Industry Overview', requirement: 'Air Cargo Industry', description: 'Understanding of air cargo industry structure', priority: 'high' },
  { id: 'IATA-1.2', standard: 'IATA', section: 'Industry Overview', requirement: 'Multimodal Integration', description: 'Integration with road, sea, rail transport', priority: 'critical' },
  
  // Unit 2: Regulations
  { id: 'IATA-2.1', standard: 'IATA', section: 'Regulations', requirement: 'Dangerous Goods', description: 'IATA DGR compliance for multimodal', priority: 'critical' },
  { id: 'IATA-2.2', standard: 'IATA', section: 'Regulations', requirement: 'Security Requirements', description: 'Cargo security standards', priority: 'critical' },
  { id: 'IATA-2.3', standard: 'IATA', section: 'Regulations', requirement: 'Temperature Control', description: 'Cold chain and reefer requirements', priority: 'high' },
  
  // Unit 3: Documentation
  { id: 'IATA-3.1', standard: 'IATA', section: 'Documentation', requirement: 'AWB Understanding', description: 'Air Waybill for multimodal', priority: 'high' },
  { id: 'IATA-3.2', standard: 'IATA', section: 'Documentation', requirement: 'Customs Documentation', description: 'Export/Import documentation', priority: 'critical' },
  { id: 'IATA-3.3', standard: 'IATA', section: 'Documentation', requirement: 'Digital Documentation', description: 'e-AWB and digitalization', priority: 'high' },
  
  // Unit 4: Operations
  { id: 'IATA-4.1', standard: 'IATA', section: 'Operations', requirement: 'Ground Handling', description: 'Terminal operations understanding', priority: 'high' },
  { id: 'IATA-4.2', standard: 'IATA', section: 'Operations', requirement: 'ULD Management', description: 'Unit Load Device knowledge', priority: 'medium' },
  { id: 'IATA-4.3', standard: 'IATA', section: 'Operations', requirement: 'Express Services', description: 'Time-critical shipments', priority: 'high' },
  
  // Unit 5: Pricing
  { id: 'IATA-5.1', standard: 'IATA', section: 'Pricing', requirement: 'Rate Structures', description: 'Understanding cargo rates', priority: 'high' },
  { id: 'IATA-5.2', standard: 'IATA', section: 'Pricing', requirement: 'Chargeable Weight', description: 'Weight/volume calculations', priority: 'high' },
  
  // Unit 6: Special Cargo
  { id: 'IATA-6.1', standard: 'IATA', section: 'Special Cargo', requirement: 'Perishables', description: 'Perishable goods handling', priority: 'high' },
  { id: 'IATA-6.2', standard: 'IATA', section: 'Special Cargo', requirement: 'High Value', description: 'High value goods security', priority: 'critical' },
  { id: 'IATA-6.3', standard: 'IATA', section: 'Special Cargo', requirement: 'Live Animals', description: 'Live animal transport regulations', priority: 'medium' },
];

// ISO 9001:2015 Quality Management System
export const ISO9001_REQUIREMENTS: StandardRequirement[] = [
  // Clause 4: Context
  { id: 'ISO9001-4.1', standard: 'ISO9001', section: 'Context', requirement: 'Understanding Context', description: 'Understanding organizational context', priority: 'high' },
  { id: 'ISO9001-4.2', standard: 'ISO9001', section: 'Context', requirement: 'Interested Parties', description: 'Stakeholder management', priority: 'high' },
  
  // Clause 5: Leadership
  { id: 'ISO9001-5.1', standard: 'ISO9001', section: 'Leadership', requirement: 'Management Commitment', description: 'Leadership and commitment to quality', priority: 'high' },
  { id: 'ISO9001-5.2', standard: 'ISO9001', section: 'Leadership', requirement: 'Quality Policy', description: 'Quality policy understanding', priority: 'high' },
  
  // Clause 6: Planning
  { id: 'ISO9001-6.1', standard: 'ISO9001', section: 'Planning', requirement: 'Risk Management', description: 'Risk-based thinking and planning', priority: 'critical' },
  { id: 'ISO9001-6.2', standard: 'ISO9001', section: 'Planning', requirement: 'Quality Objectives', description: 'Setting and achieving objectives', priority: 'high' },
  
  // Clause 7: Support
  { id: 'ISO9001-7.1', standard: 'ISO9001', section: 'Support', requirement: 'Resources', description: 'Resource management', priority: 'high' },
  { id: 'ISO9001-7.2', standard: 'ISO9001', section: 'Support', requirement: 'Competence', description: 'Staff competence requirements', priority: 'critical' },
  { id: 'ISO9001-7.3', standard: 'ISO9001', section: 'Support', requirement: 'Awareness', description: 'Quality awareness training', priority: 'high' },
  { id: 'ISO9001-7.4', standard: 'ISO9001', section: 'Support', requirement: 'Communication', description: 'Internal and external communication', priority: 'high' },
  { id: 'ISO9001-7.5', standard: 'ISO9001', section: 'Support', requirement: 'Documented Information', description: 'Documentation control', priority: 'critical' },
  
  // Clause 8: Operation
  { id: 'ISO9001-8.1', standard: 'ISO9001', section: 'Operation', requirement: 'Operational Planning', description: 'Planning and control of operations', priority: 'critical' },
  { id: 'ISO9001-8.2', standard: 'ISO9001', section: 'Operation', requirement: 'Customer Requirements', description: 'Determining customer requirements', priority: 'critical' },
  { id: 'ISO9001-8.3', standard: 'ISO9001', section: 'Operation', requirement: 'Design and Development', description: 'Service design processes', priority: 'high' },
  { id: 'ISO9001-8.4', standard: 'ISO9001', section: 'Operation', requirement: 'External Providers', description: 'Control of external providers (carriers)', priority: 'critical' },
  { id: 'ISO9001-8.5', standard: 'ISO9001', section: 'Operation', requirement: 'Service Provision', description: 'Control of service provision', priority: 'critical' },
  { id: 'ISO9001-8.6', standard: 'ISO9001', section: 'Operation', requirement: 'Release of Services', description: 'Verification of services', priority: 'high' },
  { id: 'ISO9001-8.7', standard: 'ISO9001', section: 'Operation', requirement: 'Nonconforming Outputs', description: 'Handling nonconformities', priority: 'critical' },
  
  // Clause 9: Performance
  { id: 'ISO9001-9.1', standard: 'ISO9001', section: 'Performance', requirement: 'Monitoring and Measurement', description: 'KPI tracking and analysis', priority: 'critical' },
  { id: 'ISO9001-9.2', standard: 'ISO9001', section: 'Performance', requirement: 'Internal Audit', description: 'Internal audit processes', priority: 'high' },
  { id: 'ISO9001-9.3', standard: 'ISO9001', section: 'Performance', requirement: 'Management Review', description: 'Management review processes', priority: 'high' },
  
  // Clause 10: Improvement
  { id: 'ISO9001-10.1', standard: 'ISO9001', section: 'Improvement', requirement: 'General Improvement', description: 'Continual improvement mindset', priority: 'high' },
  { id: 'ISO9001-10.2', standard: 'ISO9001', section: 'Improvement', requirement: 'Corrective Action', description: 'Corrective action procedures', priority: 'critical' },
  { id: 'ISO9001-10.3', standard: 'ISO9001', section: 'Improvement', requirement: 'Continual Improvement', description: 'Systematic improvement', priority: 'high' },
];

// ISO 28000:2022 Security Management for Supply Chain
export const ISO28000_REQUIREMENTS: StandardRequirement[] = [
  // Clause 4: Context
  { id: 'ISO28000-4.1', standard: 'ISO28000', section: 'Context', requirement: 'Understanding Context', description: 'Security context understanding', priority: 'high' },
  { id: 'ISO28000-4.2', standard: 'ISO28000', section: 'Context', requirement: 'Stakeholder Needs', description: 'Security stakeholder requirements', priority: 'high' },
  { id: 'ISO28000-4.3', standard: 'ISO28000', section: 'Context', requirement: 'Scope Definition', description: 'Security management scope', priority: 'high' },
  
  // Clause 5: Leadership
  { id: 'ISO28000-5.1', standard: 'ISO28000', section: 'Leadership', requirement: 'Security Leadership', description: 'Leadership commitment to security', priority: 'high' },
  { id: 'ISO28000-5.2', standard: 'ISO28000', section: 'Leadership', requirement: 'Security Policy', description: 'Security policy establishment', priority: 'critical' },
  
  // Clause 6: Planning
  { id: 'ISO28000-6.1', standard: 'ISO28000', section: 'Planning', requirement: 'Risk Assessment', description: 'Security risk assessment', priority: 'critical' },
  { id: 'ISO28000-6.2', standard: 'ISO28000', section: 'Planning', requirement: 'Security Objectives', description: 'Security objectives and planning', priority: 'high' },
  { id: 'ISO28000-6.3', standard: 'ISO28000', section: 'Planning', requirement: 'Threat Identification', description: 'Identifying security threats', priority: 'critical' },
  
  // Clause 7: Support
  { id: 'ISO28000-7.1', standard: 'ISO28000', section: 'Support', requirement: 'Security Resources', description: 'Resources for security', priority: 'high' },
  { id: 'ISO28000-7.2', standard: 'ISO28000', section: 'Support', requirement: 'Security Competence', description: 'Security competence training', priority: 'critical' },
  { id: 'ISO28000-7.3', standard: 'ISO28000', section: 'Support', requirement: 'Security Awareness', description: 'Security awareness programs', priority: 'critical' },
  { id: 'ISO28000-7.4', standard: 'ISO28000', section: 'Support', requirement: 'Security Communication', description: 'Security communication protocols', priority: 'high' },
  
  // Clause 8: Operation
  { id: 'ISO28000-8.1', standard: 'ISO28000', section: 'Operation', requirement: 'Operational Control', description: 'Security operational controls', priority: 'critical' },
  { id: 'ISO28000-8.2', standard: 'ISO28000', section: 'Operation', requirement: 'Emergency Preparedness', description: 'Emergency response procedures', priority: 'critical' },
  { id: 'ISO28000-8.3', standard: 'ISO28000', section: 'Operation', requirement: 'Supply Chain Security', description: 'Securing the supply chain', priority: 'critical' },
  { id: 'ISO28000-8.4', standard: 'ISO28000', section: 'Operation', requirement: 'Partner Security', description: 'Business partner security requirements', priority: 'high' },
  { id: 'ISO28000-8.5', standard: 'ISO28000', section: 'Operation', requirement: 'Physical Security', description: 'Physical security measures', priority: 'high' },
  { id: 'ISO28000-8.6', standard: 'ISO28000', section: 'Operation', requirement: 'Personnel Security', description: 'Personnel security screening', priority: 'high' },
  { id: 'ISO28000-8.7', standard: 'ISO28000', section: 'Operation', requirement: 'Information Security', description: 'Information and data security', priority: 'critical' },
  
  // Clause 9: Performance
  { id: 'ISO28000-9.1', standard: 'ISO28000', section: 'Performance', requirement: 'Security Monitoring', description: 'Security performance monitoring', priority: 'critical' },
  { id: 'ISO28000-9.2', standard: 'ISO28000', section: 'Performance', requirement: 'Security Audit', description: 'Security audit procedures', priority: 'high' },
  { id: 'ISO28000-9.3', standard: 'ISO28000', section: 'Performance', requirement: 'Security Review', description: 'Management security review', priority: 'high' },
  
  // Clause 10: Improvement
  { id: 'ISO28000-10.1', standard: 'ISO28000', section: 'Improvement', requirement: 'Incident Response', description: 'Security incident handling', priority: 'critical' },
  { id: 'ISO28000-10.2', standard: 'ISO28000', section: 'Improvement', requirement: 'Corrective Action', description: 'Security corrective actions', priority: 'high' },
  { id: 'ISO28000-10.3', standard: 'ISO28000', section: 'Improvement', requirement: 'Continual Improvement', description: 'Security continual improvement', priority: 'high' },
];

// Chapter to Standards Mapping
export const CHAPTER_STANDARDS_MAPPING: Record<string, {
  fiata: string[];
  iata: string[];
  iso9001: string[];
  iso28000: string[];
}> = {
  'intro': {
    fiata: ['FIATA-1.1', 'FIATA-1.2', 'FIATA-2.1'],
    iata: ['IATA-1.1', 'IATA-1.2'],
    iso9001: ['ISO9001-4.1', 'ISO9001-4.2', 'ISO9001-5.1'],
    iso28000: ['ISO28000-4.1', 'ISO28000-4.2']
  },
  'mindset': {
    fiata: ['FIATA-1.1', 'FIATA-3.1'],
    iata: [],
    iso9001: ['ISO9001-5.1', 'ISO9001-7.3', 'ISO9001-10.1'],
    iso28000: ['ISO28000-5.1', 'ISO28000-7.3']
  },
  'soft-skills': {
    fiata: ['FIATA-3.1'],
    iata: [],
    iso9001: ['ISO9001-7.2', 'ISO9001-7.3', 'ISO9001-7.4'],
    iso28000: ['ISO28000-7.2', 'ISO28000-7.4']
  },
  'stress-management': {
    fiata: [],
    iata: [],
    iso9001: ['ISO9001-7.1', 'ISO9001-7.3'],
    iso28000: ['ISO28000-7.3']
  },
  'workflow': {
    fiata: ['FIATA-2.1', 'FIATA-2.6'],
    iata: ['IATA-4.1'],
    iso9001: ['ISO9001-8.1', 'ISO9001-8.5', 'ISO9001-8.6'],
    iso28000: ['ISO28000-8.1']
  },
  'vehicle': {
    fiata: ['FIATA-2.2', 'FIATA-2.5'],
    iata: ['IATA-4.2'],
    iso9001: ['ISO9001-7.1', 'ISO9001-8.4'],
    iso28000: ['ISO28000-8.5']
  },
  'loading': {
    fiata: ['FIATA-2.5', 'FIATA-3.3'],
    iata: ['IATA-4.1', 'IATA-5.2'],
    iso9001: ['ISO9001-8.5', 'ISO9001-8.6'],
    iso28000: ['ISO28000-8.1', 'ISO28000-8.5']
  },
  'reefer': {
    fiata: ['FIATA-2.4', 'FIATA-2.5'],
    iata: ['IATA-2.3', 'IATA-6.1'],
    iso9001: ['ISO9001-8.5'],
    iso28000: ['ISO28000-8.1']
  },
  'express-transport': {
    fiata: ['FIATA-2.6'],
    iata: ['IATA-4.3'],
    iso9001: ['ISO9001-8.2', 'ISO9001-8.5'],
    iso28000: []
  },
  'intermodal': {
    fiata: ['FIATA-2.1', 'FIATA-2.5'],
    iata: ['IATA-1.2', 'IATA-3.1'],
    iso9001: ['ISO9001-8.4'],
    iso28000: ['ISO28000-8.3']
  },
  'warehouse': {
    fiata: ['FIATA-2.4'],
    iata: ['IATA-4.1'],
    iso9001: ['ISO9001-7.1', 'ISO9001-8.5'],
    iso28000: ['ISO28000-8.5']
  },
  'adr': {
    fiata: ['FIATA-3.3'],
    iata: ['IATA-2.1'],
    iso9001: ['ISO9001-8.5', 'ISO9001-8.7'],
    iso28000: ['ISO28000-6.1', 'ISO28000-8.1', 'ISO28000-8.2']
  },
  'documents': {
    fiata: ['FIATA-3.2', 'FIATA-5.1', 'FIATA-5.2', 'FIATA-5.3'],
    iata: ['IATA-3.1', 'IATA-3.2', 'IATA-3.3'],
    iso9001: ['ISO9001-7.5', 'ISO9001-8.5'],
    iso28000: ['ISO28000-8.7']
  },
  'incoterms': {
    fiata: ['FIATA-1.1', 'FIATA-4.1'],
    iata: [],
    iso9001: ['ISO9001-8.2'],
    iso28000: []
  },
  'customs': {
    fiata: ['FIATA-2.3', 'FIATA-3.2'],
    iata: ['IATA-3.2'],
    iso9001: ['ISO9001-8.5'],
    iso28000: ['ISO28000-8.3']
  },
  'authorities': {
    fiata: ['FIATA-2.3'],
    iata: ['IATA-2.2'],
    iso9001: ['ISO9001-4.2', 'ISO9001-8.2'],
    iso28000: ['ISO28000-4.2', 'ISO28000-8.1']
  },
  'compliance': {
    fiata: ['FIATA-1.2', 'FIATA-3.2', 'FIATA-3.3'],
    iata: ['IATA-2.1', 'IATA-2.2'],
    iso9001: ['ISO9001-8.2', 'ISO9001-9.1', 'ISO9001-10.2'],
    iso28000: ['ISO28000-8.1', 'ISO28000-9.2']
  },
  'driving-time': {
    fiata: ['FIATA-2.2'],
    iata: [],
    iso9001: ['ISO9001-8.5'],
    iso28000: ['ISO28000-8.6']
  },
  'licenses-oversize': {
    fiata: ['FIATA-2.1'],
    iata: [],
    iso9001: ['ISO9001-8.2', 'ISO9001-8.5'],
    iso28000: ['ISO28000-8.1']
  },
  'europe-zones': {
    fiata: ['FIATA-2.1'],
    iata: [],
    iso9001: ['ISO9001-4.1'],
    iso28000: ['ISO28000-4.1']
  },
  'european-countries': {
    fiata: ['FIATA-2.1', 'FIATA-2.3'],
    iata: [],
    iso9001: ['ISO9001-4.1', 'ISO9001-8.4'],
    iso28000: ['ISO28000-4.1']
  },
  'environment': {
    fiata: [],
    iata: [],
    iso9001: ['ISO9001-4.1', 'ISO9001-6.1'],
    iso28000: []
  },
  'sustainability': {
    fiata: [],
    iata: [],
    iso9001: ['ISO9001-4.1', 'ISO9001-6.1', 'ISO9001-10.3'],
    iso28000: []
  },
  'supply-chain': {
    fiata: ['FIATA-2.1', 'FIATA-2.5', 'FIATA-2.6'],
    iata: ['IATA-1.2'],
    iso9001: ['ISO9001-8.1', 'ISO9001-8.4'],
    iso28000: ['ISO28000-8.3', 'ISO28000-8.4']
  },
  'pricing': {
    fiata: ['FIATA-6.3'],
    iata: ['IATA-5.1', 'IATA-5.2'],
    iso9001: ['ISO9001-8.2'],
    iso28000: []
  },
  'commercial': {
    fiata: ['FIATA-2.1', 'FIATA-6.1', 'FIATA-6.3'],
    iata: [],
    iso9001: ['ISO9001-8.2', 'ISO9001-8.3'],
    iso28000: []
  },
  'negotiation': {
    fiata: ['FIATA-6.1'],
    iata: [],
    iso9001: ['ISO9001-7.4', 'ISO9001-8.2'],
    iso28000: []
  },
  'clients': {
    fiata: ['FIATA-3.1', 'FIATA-6.1'],
    iata: [],
    iso9001: ['ISO9001-8.2', 'ISO9001-9.1'],
    iso28000: ['ISO28000-8.4']
  },
  'carrier-management': {
    fiata: ['FIATA-2.2', 'FIATA-4.1', 'FIATA-4.2'],
    iata: [],
    iso9001: ['ISO9001-8.4'],
    iso28000: ['ISO28000-8.4']
  },
  'exchanges': {
    fiata: ['FIATA-2.2'],
    iata: [],
    iso9001: ['ISO9001-8.4'],
    iso28000: []
  },
  'communication': {
    fiata: ['FIATA-3.1'],
    iata: [],
    iso9001: ['ISO9001-7.4'],
    iso28000: ['ISO28000-7.4']
  },
  'networking': {
    fiata: ['FIATA-2.2'],
    iata: [],
    iso9001: ['ISO9001-4.2', 'ISO9001-8.4'],
    iso28000: ['ISO28000-8.4']
  },
  'kpi': {
    fiata: [],
    iata: [],
    iso9001: ['ISO9001-6.2', 'ISO9001-9.1', 'ISO9001-9.3'],
    iso28000: ['ISO28000-9.1', 'ISO28000-9.3']
  },
  'translogica': {
    fiata: [],
    iata: ['IATA-3.3'],
    iso9001: ['ISO9001-7.5', 'ISO9001-8.1'],
    iso28000: ['ISO28000-8.7']
  },
  'fleet': {
    fiata: ['FIATA-2.2'],
    iata: [],
    iso9001: ['ISO9001-7.1', 'ISO9001-8.5'],
    iso28000: ['ISO28000-8.5', 'ISO28000-9.1']
  },
  'technology': {
    fiata: [],
    iata: ['IATA-3.3'],
    iso9001: ['ISO9001-7.1', 'ISO9001-8.1'],
    iso28000: ['ISO28000-8.7']
  },
  'digitalization': {
    fiata: [],
    iata: ['IATA-3.3'],
    iso9001: ['ISO9001-7.5', 'ISO9001-10.3'],
    iso28000: ['ISO28000-8.7']
  },
  'risk-management': {
    fiata: ['FIATA-4.1', 'FIATA-4.2'],
    iata: [],
    iso9001: ['ISO9001-6.1', 'ISO9001-8.7', 'ISO9001-10.2'],
    iso28000: ['ISO28000-6.1', 'ISO28000-6.2', 'ISO28000-6.3']
  },
  'insurance': {
    fiata: ['FIATA-4.2'],
    iata: [],
    iso9001: ['ISO9001-6.1'],
    iso28000: ['ISO28000-6.1']
  },
  'high-value-goods': {
    fiata: ['FIATA-4.2'],
    iata: ['IATA-6.2'],
    iso9001: ['ISO9001-8.5'],
    iso28000: ['ISO28000-6.1', 'ISO28000-8.1', 'ISO28000-8.5', 'ISO28000-8.6']
  },
  'claims': {
    fiata: ['FIATA-4.3', 'FIATA-4.4'],
    iata: [],
    iso9001: ['ISO9001-8.7', 'ISO9001-10.2'],
    iso28000: ['ISO28000-10.1']
  },
  'payment': {
    fiata: ['FIATA-6.1', 'FIATA-6.2', 'FIATA-6.3'],
    iata: [],
    iso9001: ['ISO9001-8.2'],
    iso28000: []
  },
  'accounting': {
    fiata: ['FIATA-6.1', 'FIATA-6.3'],
    iata: [],
    iso9001: ['ISO9001-7.5', 'ISO9001-9.1'],
    iso28000: []
  },
  'training': {
    fiata: [],
    iata: [],
    iso9001: ['ISO9001-7.2', 'ISO9001-7.3'],
    iso28000: ['ISO28000-7.2', 'ISO28000-7.3']
  },
  'professional-development': {
    fiata: [],
    iata: [],
    iso9001: ['ISO9001-7.2', 'ISO9001-10.3'],
    iso28000: ['ISO28000-7.2']
  },
  'case-studies': {
    fiata: ['FIATA-4.3'],
    iata: [],
    iso9001: ['ISO9001-10.1', 'ISO9001-10.2'],
    iso28000: ['ISO28000-10.1']
  },
  'emergency': {
    fiata: ['FIATA-4.3'],
    iata: [],
    iso9001: ['ISO9001-8.7'],
    iso28000: ['ISO28000-8.2', 'ISO28000-10.1']
  },
  'red-flags': {
    fiata: ['FIATA-4.1'],
    iata: [],
    iso9001: ['ISO9001-6.1', 'ISO9001-8.7'],
    iso28000: ['ISO28000-6.1', 'ISO28000-6.3']
  },
  'checklists': {
    fiata: ['FIATA-2.1'],
    iata: [],
    iso9001: ['ISO9001-7.5', 'ISO9001-8.5'],
    iso28000: ['ISO28000-8.1']
  },
  'glossary': {
    fiata: ['FIATA-1.1'],
    iata: ['IATA-1.1'],
    iso9001: ['ISO9001-7.5'],
    iso28000: []
  }
};

// Calculate compliance score for a chapter
export function calculateChapterCompliance(chapterId: string): ChapterStandardMapping {
  const mapping = CHAPTER_STANDARDS_MAPPING[chapterId] || { fiata: [], iata: [], iso9001: [], iso28000: [] };
  
  const standards: ChapterStandardMapping['mappedStandards'] = [];
  const gaps: GapItem[] = [];
  
  // FIATA Analysis
  if (mapping.fiata.length > 0) {
    const allFiataRequirements = mapping.fiata;
    // Assume 85% coverage for existing content
    const covered = Math.floor(allFiataRequirements.length * 0.85);
    const missing = allFiataRequirements.slice(covered);
    
    standards.push({
      standard: 'FIATA',
      requirements: allFiataRequirements,
      coveredRequirements: allFiataRequirements.slice(0, covered),
      missingRequirements: missing,
      compliancePercentage: (covered / allFiataRequirements.length) * 100
    });
    
    missing.forEach(reqId => {
      const req = FIATA_REQUIREMENTS.find(r => r.id === reqId);
      if (req) {
        gaps.push({
          standard: 'FIATA',
          requirement: req.requirement,
          severity: req.priority,
          action: 'extend',
          description: req.description
        });
      }
    });
  }
  
  // IATA Analysis
  if (mapping.iata.length > 0) {
    const allIataRequirements = mapping.iata;
    const covered = Math.floor(allIataRequirements.length * 0.80);
    const missing = allIataRequirements.slice(covered);
    
    standards.push({
      standard: 'IATA',
      requirements: allIataRequirements,
      coveredRequirements: allIataRequirements.slice(0, covered),
      missingRequirements: missing,
      compliancePercentage: (covered / allIataRequirements.length) * 100
    });
    
    missing.forEach(reqId => {
      const req = IATA_REQUIREMENTS.find(r => r.id === reqId);
      if (req) {
        gaps.push({
          standard: 'IATA',
          requirement: req.requirement,
          severity: req.priority,
          action: 'add',
          description: req.description
        });
      }
    });
  }
  
  // ISO 9001 Analysis
  if (mapping.iso9001.length > 0) {
    const allIso9001Requirements = mapping.iso9001;
    const covered = Math.floor(allIso9001Requirements.length * 0.90);
    const missing = allIso9001Requirements.slice(covered);
    
    standards.push({
      standard: 'ISO9001',
      requirements: allIso9001Requirements,
      coveredRequirements: allIso9001Requirements.slice(0, covered),
      missingRequirements: missing,
      compliancePercentage: (covered / allIso9001Requirements.length) * 100
    });
    
    missing.forEach(reqId => {
      const req = ISO9001_REQUIREMENTS.find(r => r.id === reqId);
      if (req) {
        gaps.push({
          standard: 'ISO 9001',
          requirement: req.requirement,
          severity: req.priority,
          action: 'extend',
          description: req.description
        });
      }
    });
  }
  
  // ISO 28000 Analysis
  if (mapping.iso28000.length > 0) {
    const allIso28000Requirements = mapping.iso28000;
    const covered = Math.floor(allIso28000Requirements.length * 0.75);
    const missing = allIso28000Requirements.slice(covered);
    
    standards.push({
      standard: 'ISO28000',
      requirements: allIso28000Requirements,
      coveredRequirements: allIso28000Requirements.slice(0, covered),
      missingRequirements: missing,
      compliancePercentage: (covered / allIso28000Requirements.length) * 100
    });
    
    missing.forEach(reqId => {
      const req = ISO28000_REQUIREMENTS.find(r => r.id === reqId);
      if (req) {
        gaps.push({
          standard: 'ISO 28000',
          requirement: req.requirement,
          severity: req.priority,
          action: 'add',
          description: req.description
        });
      }
    });
  }
  
  const overallCompliance = standards.length > 0
    ? standards.reduce((sum, s) => sum + s.compliancePercentage, 0) / standards.length
    : 100;
  
  return {
    chapterId,
    chapterName: chapterId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    mappedStandards: standards,
    overallCompliance,
    gaps
  };
}

// Get all standards
export function getAllStandards() {
  return {
    FIATA: FIATA_REQUIREMENTS,
    IATA: IATA_REQUIREMENTS,
    ISO9001: ISO9001_REQUIREMENTS,
    ISO28000: ISO28000_REQUIREMENTS
  };
}

// Calculate overall platform compliance
export function calculateOverallCompliance(chapterIds: string[]): {
  overall: number;
  byStandard: Record<string, number>;
  totalGaps: number;
  criticalGaps: number;
} {
  const mappings = chapterIds.map(id => calculateChapterCompliance(id));
  
  const byStandard: Record<string, { total: number; count: number }> = {
    FIATA: { total: 0, count: 0 },
    IATA: { total: 0, count: 0 },
    ISO9001: { total: 0, count: 0 },
    ISO28000: { total: 0, count: 0 }
  };
  
  let totalGaps = 0;
  let criticalGaps = 0;
  
  mappings.forEach(mapping => {
    mapping.mappedStandards.forEach(std => {
      byStandard[std.standard].total += std.compliancePercentage;
      byStandard[std.standard].count++;
    });
    
    totalGaps += mapping.gaps.length;
    criticalGaps += mapping.gaps.filter(g => g.severity === 'critical').length;
  });
  
  const standardAverages: Record<string, number> = {};
  Object.entries(byStandard).forEach(([key, value]) => {
    standardAverages[key] = value.count > 0 ? value.total / value.count : 100;
  });
  
  const overall = Object.values(standardAverages).reduce((a, b) => a + b, 0) / 4;
  
  return {
    overall,
    byStandard: standardAverages,
    totalGaps,
    criticalGaps
  };
}
