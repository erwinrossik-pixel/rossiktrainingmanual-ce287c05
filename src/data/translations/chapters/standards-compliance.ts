// Standards Compliance Additional Content
// Fills gaps for FIATA, IATA, ISO 9001, ISO 28000

export const standardsComplianceTranslations: Record<string, Record<string, string>> = {
  en: {
    // ISO 28000 Security Content
    securityManagementTitle: "Security Management System",
    securityManagementIntro: "A comprehensive security management approach aligned with ISO 28000:2022 ensures protection of cargo, personnel, and information throughout the supply chain.",
    
    securityPolicyTitle: "Security Policy Framework",
    securityPolicyContent: "Establish a documented security policy that defines objectives, scope, and commitment to continuous improvement. The policy should be communicated to all stakeholders and reviewed annually.",
    
    threatAssessmentTitle: "Threat Identification & Risk Assessment",
    threatAssessmentContent: "Conduct systematic threat identification covering: theft/pilferage, terrorism, smuggling, cyber attacks, and insider threats. Use risk matrices to prioritize mitigation measures based on likelihood and impact.",
    
    physicalSecurityTitle: "Physical Security Measures",
    physicalSecurityContent: "Implement layered physical security: perimeter fencing, access control systems, CCTV monitoring, security lighting, and tamper-evident seals. High-value goods require additional measures like GPS tracking and escort services.",
    
    personnelSecurityTitle: "Personnel Security",
    personnelSecurityContent: "Screen all personnel with access to cargo: background checks, identity verification, and regular security training. Implement visitor management and contractor vetting procedures.",
    
    informationSecurityTitle: "Information Security",
    informationSecurityContent: "Protect sensitive shipment data: encrypted communications, access controls on TMS systems, secure document handling, and incident reporting protocols. Comply with GDPR for personal data.",
    
    partnerSecurityTitle: "Business Partner Security",
    partnerSecurityContent: "Evaluate security practices of carriers, warehouses, and agents. Include security requirements in contracts and conduct periodic audits. Maintain an approved partner list.",
    
    incidentResponseTitle: "Security Incident Response",
    incidentResponseContent: "Establish procedures for: immediate response, evidence preservation, authority notification, stakeholder communication, and post-incident analysis. Maintain 24/7 emergency contacts.",
    
    securityAuditTitle: "Security Audits & Continual Improvement",
    securityAuditContent: "Conduct internal security audits quarterly. Track security KPIs: incidents, near-misses, training completion, and audit findings. Implement corrective actions and update risk assessments.",
    
    // IATA Multimodal Content
    multimodalIntegrationTitle: "Multimodal Transport Integration",
    multimodalIntegrationContent: "Modern freight forwarding requires seamless coordination between road, rail, sea, and air transport. Understanding the strengths and limitations of each mode enables optimal routing decisions.",
    
    airCargoBasicsTitle: "Air Cargo Fundamentals for Road Forwarders",
    airCargoBasicsContent: "Air cargo offers speed but has weight/volume restrictions. Key concepts: chargeable weight (actual vs volumetric), ULD types, aircraft limitations, and airport handling procedures.",
    
    temperatureControlStandardsTitle: "Temperature Control Standards (IATA/GDP)",
    temperatureControlStandardsContent: "Temperature-sensitive cargo requires GDP compliance: validated equipment, temperature monitoring, deviation management, and documentation. Know the three temperature ranges: ambient (15-25°C), cold (2-8°C), and frozen (-20°C).",
    
    dangerousGoodsMultimodalTitle: "Dangerous Goods - Multimodal Requirements",
    dangerousGoodsMultimodalContent: "DG regulations differ by mode: ADR (road), IATA DGR (air), IMDG (sea), RID (rail). When combining modes, apply the most restrictive requirements. Ensure proper UN packaging and documentation.",
    
    expressServicesStandardsTitle: "Express Services Quality Standards",
    expressServicesStandardsContent: "Time-definite services require: guaranteed transit times, real-time tracking, priority handling, and service-level agreements. Measure performance: on-time delivery rate target >98%.",
    
    digitalDocumentationTitle: "Digital Documentation Standards",
    digitalDocumentationContent: "Transition to electronic documents: e-CMR, e-AWB, digital customs declarations. Ensure interoperability between systems and maintain backup procedures for system failures.",
    
    // ISO 9001 Quality Content
    qualityManagementTitle: "Quality Management System",
    qualityManagementIntro: "Implementing ISO 9001:2015 principles ensures consistent service quality, customer satisfaction, and continual improvement in freight forwarding operations.",
    
    customerFocusTitle: "Customer Focus",
    customerFocusContent: "Determine customer requirements and expectations. Measure satisfaction through: delivery performance, communication quality, issue resolution time, and regular feedback surveys.",
    
    processApproachTitle: "Process Approach",
    processApproachContent: "Map all operational processes: order intake, carrier selection, dispatch, tracking, invoicing. Define inputs, outputs, controls, and resources for each process. Identify process owners.",
    
    riskBasedThinkingTitle: "Risk-Based Thinking",
    riskBasedThinkingContent: "Integrate risk assessment into daily operations. Identify risks for each shipment: carrier reliability, route conditions, cargo sensitivity, and timing constraints. Document mitigation actions.",
    
    competenceTrainingTitle: "Competence & Training Requirements",
    competenceTrainingContent: "Define competence requirements for each role. Maintain training records, conduct annual assessments, and provide development opportunities. New dispatchers require supervised training period.",
    
    documentedInformationTitle: "Documented Information Control",
    documentedInformationContent: "Control all quality-relevant documents: procedures, work instructions, forms, and records. Ensure version control, accessibility, and secure storage. Retention periods: minimum 3 years for transport documents.",
    
    nonconformityManagementTitle: "Nonconformity & Corrective Action",
    nonconformityManagementContent: "Establish procedures for handling service failures: root cause analysis, corrective actions, effectiveness verification, and preventive measures. Log all nonconformities and track resolution.",
    
    performanceEvaluationTitle: "Performance Evaluation",
    performanceEvaluationContent: "Monitor KPIs systematically: delivery accuracy, transit time compliance, claims ratio, customer complaints, and carrier performance. Conduct management reviews quarterly.",
    
    continualImprovementTitle: "Continual Improvement",
    continualImprovementContent: "Foster improvement culture: suggestion systems, best practice sharing, process optimization projects, and technology adoption. Set annual improvement objectives.",
    
    // FIATA Specific Content
    fiataRulesTitle: "FIATA Model Rules Overview",
    fiataRulesContent: "FIATA Model Rules define standard terms for freight forwarding. Key areas: scope of services, liability limitations, insurance obligations, claims procedures, and payment terms.",
    
    liabilityFrameworkTitle: "Liability Framework (CMR/FIATA)",
    liabilityFrameworkContent: "Under CMR Convention: carrier liability limited to 8.33 SDR/kg for cargo damage/loss. Forwarder liability depends on role (carrier vs agent). Maintain appropriate insurance coverage.",
    
    claimsManagementTitle: "Claims Management Best Practices",
    claimsManagementContent: "Time limits are critical: notify carrier within 7 days for visible damage, 21 days for hidden damage. Document thoroughly: photos, CMR annotations, witness statements. File claims promptly.",
    
    // Glossary Extensions
    glossaryISO28000: "ISO 28000",
    glossaryISO28000Def: "International standard for security management systems in the supply chain, focusing on threat identification, risk assessment, and security controls.",
    
    glossaryISO9001: "ISO 9001",
    glossaryISO9001Def: "International standard for quality management systems, emphasizing customer focus, process approach, risk-based thinking, and continual improvement.",
    
    glossaryFIATA: "FIATA",
    glossaryFIATADef: "International Federation of Freight Forwarders Associations - the global voice of freight forwarding, establishing industry standards and model rules.",
    
    glossaryIATADGR: "IATA DGR",
    glossaryIATADGRDef: "Dangerous Goods Regulations published by IATA, mandatory for air transport of hazardous materials.",
    
    glossaryGDP: "GDP (Good Distribution Practice)",
    glossaryGDPDef: "Quality system for pharmaceutical logistics ensuring proper storage, transport, and documentation of medicinal products.",
    
    glossaryAEO: "AEO (Authorized Economic Operator)",
    glossaryAEODef: "EU customs status recognizing secure and compliant operators, offering simplified procedures and reduced controls.",
    
    glossaryTAPA: "TAPA (Transported Asset Protection Association)",
    glossaryTAPADef: "Industry association setting security standards for high-value cargo, including facility and trucking security requirements.",
    
    glossarySLA: "SLA (Service Level Agreement)",
    glossarySLADef: "Contract defining specific service performance metrics, targets, and consequences for non-compliance.",
    
    glossaryRCA: "RCA (Root Cause Analysis)",
    glossaryRCADef: "Systematic process for identifying underlying causes of problems or incidents to prevent recurrence.",
    
    glossaryContinualImprovement: "Continual Improvement",
    glossaryContinualImprovementDef: "Ongoing effort to enhance processes, products, and services through incremental and breakthrough improvements."
  },
  
  de: {
    // ISO 28000 Security Content
    securityManagementTitle: "Sicherheitsmanagementsystem",
    securityManagementIntro: "Ein umfassender Sicherheitsmanagementansatz gemäß ISO 28000:2022 gewährleistet den Schutz von Fracht, Personal und Informationen entlang der gesamten Lieferkette.",
    
    securityPolicyTitle: "Sicherheitsrichtlinien-Rahmenwerk",
    securityPolicyContent: "Erstellen Sie eine dokumentierte Sicherheitsrichtlinie, die Ziele, Umfang und Engagement für kontinuierliche Verbesserung definiert. Die Richtlinie sollte allen Beteiligten kommuniziert und jährlich überprüft werden.",
    
    threatAssessmentTitle: "Bedrohungsidentifikation & Risikobewertung",
    threatAssessmentContent: "Führen Sie systematische Bedrohungsidentifikation durch: Diebstahl/Unterschlagung, Terrorismus, Schmuggel, Cyberangriffe und Insider-Bedrohungen. Verwenden Sie Risikomatrizen zur Priorisierung von Gegenmaßnahmen.",
    
    physicalSecurityTitle: "Physische Sicherheitsmaßnahmen",
    physicalSecurityContent: "Implementieren Sie gestaffelte physische Sicherheit: Umzäunung, Zugangskontrollsysteme, Videoüberwachung, Sicherheitsbeleuchtung und manipulationssichere Siegel. Hochwertige Güter erfordern GPS-Tracking und Begleitservice.",
    
    personnelSecurityTitle: "Personalsicherheit",
    personnelSecurityContent: "Überprüfen Sie alle Mitarbeiter mit Frachtzugang: Hintergrundchecks, Identitätsprüfung und regelmäßige Sicherheitsschulungen. Implementieren Sie Besuchermanagement und Auftragnehmerprüfung.",
    
    informationSecurityTitle: "Informationssicherheit",
    informationSecurityContent: "Schützen Sie sensible Sendungsdaten: verschlüsselte Kommunikation, Zugriffskontrollen auf TMS-Systeme, sichere Dokumentenhandhabung und Meldeverfahren. DSGVO-Konformität für personenbezogene Daten.",
    
    partnerSecurityTitle: "Geschäftspartnersicherheit",
    partnerSecurityContent: "Bewerten Sie Sicherheitspraktiken von Spediteuren, Lagern und Agenten. Nehmen Sie Sicherheitsanforderungen in Verträge auf und führen Sie regelmäßige Audits durch.",
    
    incidentResponseTitle: "Sicherheitsvorfall-Reaktion",
    incidentResponseContent: "Etablieren Sie Verfahren für: sofortige Reaktion, Beweissicherung, Behördenbenachrichtigung, Stakeholder-Kommunikation und Nachanalyse. Pflegen Sie 24/7 Notfallkontakte.",
    
    securityAuditTitle: "Sicherheitsaudits & Kontinuierliche Verbesserung",
    securityAuditContent: "Führen Sie vierteljährlich interne Sicherheitsaudits durch. Verfolgen Sie Sicherheits-KPIs: Vorfälle, Beinahe-Unfälle, Schulungsabschluss und Audit-Ergebnisse.",
    
    // IATA Multimodal Content
    multimodalIntegrationTitle: "Multimodale Transportintegration",
    multimodalIntegrationContent: "Moderne Spedition erfordert nahtlose Koordination zwischen Straße, Schiene, See und Luft. Das Verständnis der Stärken und Grenzen jedes Verkehrsträgers ermöglicht optimale Routenentscheidungen.",
    
    airCargoBasicsTitle: "Luftfracht-Grundlagen für Straßenspediteure",
    airCargoBasicsContent: "Luftfracht bietet Geschwindigkeit, hat aber Gewichts-/Volumenbeschränkungen. Schlüsselkonzepte: berechenbares Gewicht (tatsächlich vs. volumetrisch), ULD-Typen, Flugzeugbeschränkungen.",
    
    temperatureControlStandardsTitle: "Temperaturkontrollstandards (IATA/GDP)",
    temperatureControlStandardsContent: "Temperatursensible Fracht erfordert GDP-Konformität: validierte Ausrüstung, Temperaturüberwachung, Abweichungsmanagement und Dokumentation. Die drei Temperaturbereiche: Ambient (15-25°C), Kalt (2-8°C), Gefroren (-20°C).",
    
    dangerousGoodsMultimodalTitle: "Gefahrgut - Multimodale Anforderungen",
    dangerousGoodsMultimodalContent: "Gefahrgutvorschriften unterscheiden sich nach Verkehrsträger: ADR (Straße), IATA DGR (Luft), IMDG (See), RID (Schiene). Bei Kombinationen gelten die restriktivsten Anforderungen.",
    
    expressServicesStandardsTitle: "Express-Dienste Qualitätsstandards",
    expressServicesStandardsContent: "Zeitdefinierte Dienste erfordern: garantierte Transitzeiten, Echtzeitverfolgung, Prioritätsbehandlung und Service-Level-Vereinbarungen. Leistungsziel: pünktliche Lieferquote >98%.",
    
    digitalDocumentationTitle: "Digitale Dokumentationsstandards",
    digitalDocumentationContent: "Umstellung auf elektronische Dokumente: e-CMR, e-AWB, digitale Zollanmeldungen. Sicherstellen von Systeminteroperabilität und Backup-Verfahren.",
    
    // ISO 9001 Quality Content
    qualityManagementTitle: "Qualitätsmanagementsystem",
    qualityManagementIntro: "Die Implementierung von ISO 9001:2015-Prinzipien gewährleistet konsistente Servicequalität, Kundenzufriedenheit und kontinuierliche Verbesserung.",
    
    customerFocusTitle: "Kundenorientierung",
    customerFocusContent: "Ermitteln Sie Kundenanforderungen und -erwartungen. Messen Sie Zufriedenheit durch: Lieferleistung, Kommunikationsqualität, Problemlösungszeit und regelmäßige Umfragen.",
    
    processApproachTitle: "Prozessorientierung",
    processApproachContent: "Kartieren Sie alle operativen Prozesse: Auftragseingang, Transporteurauswahl, Disposition, Tracking, Rechnungsstellung. Definieren Sie Eingaben, Ausgaben, Kontrollen und Ressourcen.",
    
    riskBasedThinkingTitle: "Risikobasiertes Denken",
    riskBasedThinkingContent: "Integrieren Sie Risikobewertung in den täglichen Betrieb. Identifizieren Sie Risiken für jede Sendung: Transporteurzuverlässigkeit, Streckenbedingungen, Frachtempfindlichkeit.",
    
    competenceTrainingTitle: "Kompetenz & Schulungsanforderungen",
    competenceTrainingContent: "Definieren Sie Kompetenzanforderungen für jede Rolle. Führen Sie Schulungsnachweise, jährliche Bewertungen und Entwicklungsmöglichkeiten. Neue Disponenten benötigen betreute Einarbeitung.",
    
    documentedInformationTitle: "Dokumentierte Informationskontrolle",
    documentedInformationContent: "Kontrollieren Sie alle qualitätsrelevanten Dokumente: Verfahren, Arbeitsanweisungen, Formulare und Aufzeichnungen. Gewährleisten Sie Versionskontrolle und sichere Aufbewahrung.",
    
    nonconformityManagementTitle: "Nichtkonformität & Korrekturmaßnahmen",
    nonconformityManagementContent: "Etablieren Sie Verfahren für Serviceausfälle: Ursachenanalyse, Korrekturmaßnahmen, Wirksamkeitsprüfung und Präventivmaßnahmen.",
    
    performanceEvaluationTitle: "Leistungsbewertung",
    performanceEvaluationContent: "Überwachen Sie KPIs systematisch: Liefergenauigkeit, Transitzeit-Einhaltung, Schadensquote, Kundenbeschwerden und Transporteurleistung.",
    
    continualImprovementTitle: "Kontinuierliche Verbesserung",
    continualImprovementContent: "Fördern Sie Verbesserungskultur: Vorschlagswesen, Best-Practice-Austausch, Prozessoptimierungsprojekte und Technologieeinführung.",
    
    // FIATA Specific Content
    fiataRulesTitle: "FIATA Musterregeln Übersicht",
    fiataRulesContent: "FIATA Musterregeln definieren Standardbedingungen für Spedition. Hauptbereiche: Leistungsumfang, Haftungsbegrenzungen, Versicherungspflichten, Schadensverfahren.",
    
    liabilityFrameworkTitle: "Haftungsrahmen (CMR/FIATA)",
    liabilityFrameworkContent: "Nach CMR-Übereinkommen: Frachtführerhaftung begrenzt auf 8,33 SZR/kg für Beschädigung/Verlust. Spediteurhaftung abhängig von Rolle. Angemessene Versicherung aufrechterhalten.",
    
    claimsManagementTitle: "Best Practices Schadensmanagement",
    claimsManagementContent: "Fristen sind kritisch: Frachtführer innerhalb 7 Tagen bei sichtbarem Schaden benachrichtigen, 21 Tage bei verdecktem Schaden. Gründlich dokumentieren: Fotos, CMR-Anmerkungen.",
    
    // Glossary Extensions
    glossaryISO28000: "ISO 28000",
    glossaryISO28000Def: "Internationale Norm für Sicherheitsmanagementsysteme in der Lieferkette, fokussiert auf Bedrohungsidentifikation, Risikobewertung und Sicherheitskontrollen.",
    
    glossaryISO9001: "ISO 9001",
    glossaryISO9001Def: "Internationale Norm für Qualitätsmanagementsysteme, betont Kundenorientierung, Prozessansatz, risikobasiertes Denken und kontinuierliche Verbesserung.",
    
    glossaryFIATA: "FIATA",
    glossaryFIATADef: "Internationale Föderation der Spediteursorganisationen - globale Stimme der Spedition, etabliert Industriestandards und Musterregeln.",
    
    glossaryIATADGR: "IATA DGR",
    glossaryIATADGRDef: "Von IATA veröffentlichte Gefahrgutvorschriften, verbindlich für den Lufttransport gefährlicher Materialien.",
    
    glossaryGDP: "GDP (Good Distribution Practice)",
    glossaryGDPDef: "Qualitätssystem für Pharmalogistik zur Gewährleistung ordnungsgemäßer Lagerung, Transport und Dokumentation von Arzneimitteln.",
    
    glossaryAEO: "AEO (Zugelassener Wirtschaftsbeteiligter)",
    glossaryAEODef: "EU-Zollstatus für sichere und konforme Betreiber, bietet vereinfachte Verfahren und reduzierte Kontrollen.",
    
    glossaryTAPA: "TAPA",
    glossaryTAPADef: "Branchenverband für Sicherheitsstandards hochwertigern Fracht, einschließlich Anforderungen an Einrichtungen und LKW-Sicherheit.",
    
    glossarySLA: "SLA (Service Level Agreement)",
    glossarySLADef: "Vertrag mit spezifischen Serviceleistungsmetriken, Zielen und Konsequenzen bei Nichteinhaltung.",
    
    glossaryRCA: "RCA (Root Cause Analysis)",
    glossaryRCADef: "Systematischer Prozess zur Identifizierung der zugrunde liegenden Ursachen von Problemen zur Vorbeugung.",
    
    glossaryContinualImprovement: "Kontinuierliche Verbesserung",
    glossaryContinualImprovementDef: "Fortlaufende Bemühungen zur Verbesserung von Prozessen, Produkten und Dienstleistungen durch schrittweise und durchgreifende Verbesserungen."
  },
  
  ro: {
    // ISO 28000 Security Content
    securityManagementTitle: "Sistem de Management al Securității",
    securityManagementIntro: "O abordare cuprinzătoare a managementului securității, aliniată la ISO 28000:2022, asigură protecția mărfurilor, personalului și informațiilor în întregul lanț de aprovizionare.",
    
    securityPolicyTitle: "Cadrul Politicii de Securitate",
    securityPolicyContent: "Stabiliți o politică de securitate documentată care definește obiectivele, domeniul de aplicare și angajamentul pentru îmbunătățire continuă. Politica trebuie comunicată tuturor părților interesate și revizuită anual.",
    
    threatAssessmentTitle: "Identificarea Amenințărilor și Evaluarea Riscurilor",
    threatAssessmentContent: "Efectuați identificarea sistematică a amenințărilor: furt/sustragere, terorism, contrabandă, atacuri cibernetice și amenințări din interior. Utilizați matrice de risc pentru prioritizarea măsurilor de atenuare.",
    
    physicalSecurityTitle: "Măsuri de Securitate Fizică",
    physicalSecurityContent: "Implementați securitate fizică pe niveluri: împrejmuire perimetrală, sisteme de control acces, monitorizare CCTV, iluminat de securitate și sigilii anti-manipulare. Mărfurile de valoare mare necesită GPS tracking și servicii de escortă.",
    
    personnelSecurityTitle: "Securitatea Personalului",
    personnelSecurityContent: "Verificați tot personalul cu acces la marfă: verificări de antecedente, verificarea identității și training de securitate regulat. Implementați managementul vizitatorilor și verificarea contractorilor.",
    
    informationSecurityTitle: "Securitatea Informațiilor",
    informationSecurityContent: "Protejați datele sensibile ale expediției: comunicații criptate, controale de acces pe sisteme TMS, manipulare securizată a documentelor și protocoale de raportare a incidentelor. Conformitate GDPR pentru datele personale.",
    
    partnerSecurityTitle: "Securitatea Partenerilor de Afaceri",
    partnerSecurityContent: "Evaluați practicile de securitate ale transportatorilor, depozitelor și agenților. Includeți cerințe de securitate în contracte și efectuați audituri periodice. Mențineți o listă de parteneri aprobați.",
    
    incidentResponseTitle: "Răspuns la Incidente de Securitate",
    incidentResponseContent: "Stabiliți proceduri pentru: răspuns imediat, conservarea dovezilor, notificarea autorităților, comunicarea cu părțile interesate și analiza post-incident. Mențineți contacte de urgență 24/7.",
    
    securityAuditTitle: "Audituri de Securitate și Îmbunătățire Continuă",
    securityAuditContent: "Efectuați audituri interne de securitate trimestrial. Urmăriți KPI-urile de securitate: incidente, aproape-accidente, finalizarea training-ului și constatările auditurilor.",
    
    // IATA Multimodal Content
    multimodalIntegrationTitle: "Integrarea Transportului Multimodal",
    multimodalIntegrationContent: "Expediția modernă de mărfuri necesită coordonare perfectă între transport rutier, feroviar, maritim și aerian. Înțelegerea punctelor forte și limitărilor fiecărui mod permite decizii optime de rutare.",
    
    airCargoBasicsTitle: "Fundamentele Transportului Aerian pentru Expeditori Rutieri",
    airCargoBasicsContent: "Transportul aerian oferă viteză, dar are restricții de greutate/volum. Concepte cheie: greutate taxabilă (reală vs volumetrică), tipuri ULD, limitări ale aeronavelor și proceduri de handling aeroportuar.",
    
    temperatureControlStandardsTitle: "Standarde de Control al Temperaturii (IATA/GDP)",
    temperatureControlStandardsContent: "Marfa sensibilă la temperatură necesită conformitate GDP: echipament validat, monitorizare temperatură, management al abaterilor și documentație. Cele trei intervale: ambient (15-25°C), rece (2-8°C), congelat (-20°C).",
    
    dangerousGoodsMultimodalTitle: "Mărfuri Periculoase - Cerințe Multimodale",
    dangerousGoodsMultimodalContent: "Reglementările DG diferă după mod: ADR (rutier), IATA DGR (aerian), IMDG (maritim), RID (feroviar). La combinarea modurilor, se aplică cerințele cele mai restrictive.",
    
    expressServicesStandardsTitle: "Standarde de Calitate Servicii Express",
    expressServicesStandardsContent: "Serviciile cu timp definit necesită: timpi de tranzit garantați, tracking în timp real, manipulare prioritară și acorduri de nivel de serviciu. Țintă performanță: rata de livrare la timp >98%.",
    
    digitalDocumentationTitle: "Standarde de Documentație Digitală",
    digitalDocumentationContent: "Tranziția la documente electronice: e-CMR, e-AWB, declarații vamale digitale. Asigurați interoperabilitatea între sisteme și mențineți proceduri de backup.",
    
    // ISO 9001 Quality Content
    qualityManagementTitle: "Sistem de Management al Calității",
    qualityManagementIntro: "Implementarea principiilor ISO 9001:2015 asigură calitate consistentă a serviciilor, satisfacția clienților și îmbunătățire continuă în operațiunile de expediere.",
    
    customerFocusTitle: "Orientare către Client",
    customerFocusContent: "Determinați cerințele și așteptările clienților. Măsurați satisfacția prin: performanța livrării, calitatea comunicării, timpul de rezolvare a problemelor și sondaje regulate.",
    
    processApproachTitle: "Abordare Bazată pe Procese",
    processApproachContent: "Mapați toate procesele operaționale: primirea comenzii, selecția transportatorului, dispecerizare, tracking, facturare. Definiți intrări, ieșiri, controale și resurse pentru fiecare proces.",
    
    riskBasedThinkingTitle: "Gândire Bazată pe Risc",
    riskBasedThinkingContent: "Integrați evaluarea riscurilor în operațiunile zilnice. Identificați riscurile pentru fiecare expediere: fiabilitatea transportatorului, condițiile rutei, sensibilitatea mărfii.",
    
    competenceTrainingTitle: "Cerințe de Competență și Training",
    competenceTrainingContent: "Definiți cerințele de competență pentru fiecare rol. Mențineți înregistrări de training, evaluări anuale și oportunități de dezvoltare. Dispecerii noi necesită perioadă de training supervizat.",
    
    documentedInformationTitle: "Controlul Informațiilor Documentate",
    documentedInformationContent: "Controlați toate documentele relevante pentru calitate: proceduri, instrucțiuni de lucru, formulare și înregistrări. Asigurați controlul versiunilor și stocarea securizată.",
    
    nonconformityManagementTitle: "Neconformitate și Acțiuni Corective",
    nonconformityManagementContent: "Stabiliți proceduri pentru gestionarea eșecurilor de serviciu: analiza cauzei rădăcină, acțiuni corective, verificarea eficacității și măsuri preventive.",
    
    performanceEvaluationTitle: "Evaluarea Performanței",
    performanceEvaluationContent: "Monitorizați KPI-urile sistematic: acuratețea livrării, conformitatea timpului de tranzit, rata daunelor, reclamațiile clienților și performanța transportatorilor.",
    
    continualImprovementTitle: "Îmbunătățire Continuă",
    continualImprovementContent: "Promovați cultura îmbunătățirii: sisteme de sugestii, partajarea bunelor practici, proiecte de optimizare a proceselor și adoptarea tehnologiei.",
    
    // FIATA Specific Content
    fiataRulesTitle: "Prezentare Reguli Model FIATA",
    fiataRulesContent: "Regulile Model FIATA definesc termeni standard pentru expediția de mărfuri. Domenii cheie: scopul serviciilor, limitări de răspundere, obligații de asigurare, proceduri de daune.",
    
    liabilityFrameworkTitle: "Cadrul de Răspundere (CMR/FIATA)",
    liabilityFrameworkContent: "Conform Convenției CMR: răspunderea transportatorului limitată la 8,33 DST/kg pentru deteriorare/pierdere. Răspunderea expeditorului depinde de rol. Mențineți acoperire de asigurare adecvată.",
    
    claimsManagementTitle: "Bune Practici Management Daune",
    claimsManagementContent: "Termenele sunt critice: notificați transportatorul în 7 zile pentru daune vizibile, 21 zile pentru daune ascunse. Documentați complet: poze, adnotări CMR, declarații martori.",
    
    // Glossary Extensions
    glossaryISO28000: "ISO 28000",
    glossaryISO28000Def: "Standard internațional pentru sisteme de management al securității în lanțul de aprovizionare, focalizat pe identificarea amenințărilor, evaluarea riscurilor și controale de securitate.",
    
    glossaryISO9001: "ISO 9001",
    glossaryISO9001Def: "Standard internațional pentru sisteme de management al calității, subliniind orientarea către client, abordarea procesuală, gândirea bazată pe risc și îmbunătățirea continuă.",
    
    glossaryFIATA: "FIATA",
    glossaryFIATADef: "Federația Internațională a Asociațiilor Expeditorilor de Mărfuri - vocea globală a expediției de mărfuri, stabilind standarde industriale și reguli model.",
    
    glossaryIATADGR: "IATA DGR",
    glossaryIATADGRDef: "Reglementări privind Mărfurile Periculoase publicate de IATA, obligatorii pentru transportul aerian al materialelor periculoase.",
    
    glossaryGDP: "GDP (Bune Practici de Distribuție)",
    glossaryGDPDef: "Sistem de calitate pentru logistica farmaceutică, asigurând depozitarea, transportul și documentația corespunzătoare a produselor medicinale.",
    
    glossaryAEO: "AEO (Operator Economic Autorizat)",
    glossaryAEODef: "Statut vamal UE care recunoaște operatorii siguri și conformi, oferind proceduri simplificate și controale reduse.",
    
    glossaryTAPA: "TAPA",
    glossaryTAPADef: "Asociație industrială care stabilește standarde de securitate pentru mărfuri de mare valoare, inclusiv cerințe pentru facilități și securitatea camioanelor.",
    
    glossarySLA: "SLA (Acord de Nivel de Serviciu)",
    glossarySLADef: "Contract care definește metrici specifice de performanță a serviciului, ținte și consecințe pentru neconformitate.",
    
    glossaryRCA: "RCA (Analiza Cauzei Rădăcină)",
    glossaryRCADef: "Proces sistematic pentru identificarea cauzelor subiacente ale problemelor sau incidentelor pentru prevenirea recurenței.",
    
    glossaryContinualImprovement: "Îmbunătățire Continuă",
    glossaryContinualImprovementDef: "Efort continuu de îmbunătățire a proceselor, produselor și serviciilor prin îmbunătățiri incrementale și de impact."
  }
};
