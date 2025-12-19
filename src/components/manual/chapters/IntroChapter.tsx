import { Truck, Globe, BookOpen, Target, Award, Users, Calendar, MapPin, Building2, Briefcase, CheckCircle2, Star, Clock, Shield, FileText, TrendingUp, Lightbulb, GraduationCap, Heart, Zap, Package, Route, Scale, Phone, Mail, AlertTriangle, Info } from "lucide-react";
import rossikLogo from "@/assets/rossik-logo.jpg";
import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { useLanguage } from "@/contexts/LanguageContext";

// Translations for IntroChapter
const translations = {
  ro: {
    heroTitle: "EU Road Freight Forwarding",
    heroSubtitle: "Manual de Training și Operare Extins",
    heroVersion: "Versiunea 2025 – Ediție Completă",
    welcomeTitle: "Bine ai Venit în Cariera de Freight Forwarding",
    welcomeText1: "Felicitări pentru aderarea la una dintre cele mai dinamice și esențiale industrii din economia globală. Ca freight forwarder, vei fi în centrul comerțului internațional, conectând afaceri din toată Europa și asigurându-te că mărfurile ajung la destinație în siguranță, la timp și eficient din punct de vedere al costurilor.",
    welcomeText2: "Acest manual de training comprehensiv a fost dezvoltat de profesioniști experimentați cu zeci de ani de experiență combinată în transportul rutier european. Fie că ești complet nou în logistică sau faci tranziția din alt domeniu, acest ghid îți va oferi cunoștințele și abilitățile practice necesare pentru a excela în rolul tău.",
    scopeTitle: "Domeniu de Aplicare",
    scopeText: "Operațiuni de transport rutier european folosind prelată de 13.6m cu până la 24-29 tone capacitate utilă.",
    scopeFTL: "Operațiuni Full Truck Load (FTL)",
    scopeLTL: "Grupaj Part Load (LTL/PTL)",
    scopeCrossBorder: "Transport transfrontalier UE",
    scopeReefer: "Bazele transportului frigorific",
    audienceTitle: "Public Țintă",
    audienceText: "Cursanți și freight forwarderi/dispeceri juniori în companii de transport și expediție.",
    audienceNew: "Angajați noi fără experiență anterioară în logistică",
    audienceCareer: "Persoane care schimbă cariera intrând în freight forwarding",
    audienceJunior: "Dispeceri juniori care caută cunoștințe comprehensive",
    audienceSupport: "Personal de suport în tranziție către operațiuni",
    industryTitle: "Industria de Transport Rutier European",
    industryOverview: "Prezentare Generală a Industriei",
    industryText: "Transportul rutier de marfă este coloana vertebrală a comerțului european, reprezentând aproximativ 75% din toate mărfurile transportate în UE. Industria angajează peste 3 milioane de persoane direct și susține nenumărate afaceri din sectoarele de producție, retail și servicii.",
    industryValue: "Peste 400 miliarde € valoare de piață anuală",
    industryVehicles: "2+ milioane vehicule comerciale active în UE",
    industryCompanies: "500.000+ companii de freight forwarding",
    industryGrowth: "Creștere de 3-4% an de an",
    trendsTitle: "Tendințe Cheie în 2025",
    trendDigital: "Digitalizare: eCMR, burse de marfă digitale, urmărire în timp real",
    trendSustain: "Sustenabilitate: Raportare CO2, combustibili alternativi, coridoare verzi",
    trendDriver: "Lipsa Șoferilor: Forță de muncă îmbătrânită, provocări de recrutare",
    trendRegulatory: "Schimbări Legislative: Pachetul de Mobilitate UE, tahografe inteligente",
    statsTitle: "Statistici Industrie 2024-2025",
    statMarket: "Valoare de Piață Anuală",
    statRoad: "Mărfuri UE pe Șosea",
    statWorkers: "Angajați",
    statTonneKm: "Tone-km Anual",
    learnTitle: "Ce Vei Învăța",
    learnOperations: "Operațiuni",
    learnOperationsDesc: "Flux de lucru complet de la primire la livrare, gestionarea comenzilor, planificarea expediției",
    learnCompliance: "Conformitate",
    learnComplianceDesc: "Orele șoferilor, reguli tahograf, restricții de condus, limite de greutate, reglementări UE",
    learnVehicle: "Cunoștințe Vehicule",
    learnVehicleDesc: "Specificații prelată 13.6m, tipuri de vehicule, configurații de încărcare",
    learnPricing: "Prețuri și Costuri",
    learnPricingDesc: "Calculul costurilor, sisteme de taxare, marje, suprataxe combustibil, taxe accesorii",
    learnTMS: "TMS Translogica",
    learnTMSDesc: "Ghid complet de operare sistem, management clienți, fluxuri de facturare",
    learnExchanges: "Burse de Marfă",
    learnExchangesDesc: "TIMOCOM, Trans.eu, Teleroute, Transporeon – găsirea capacității și încărcăturilor",
    learnDocs: "Documentație",
    learnDocsDesc: "Scrisori de transport CMR, documente vamale, POD-uri, certificate de asigurare",
    learnClient: "Management Clienți",
    learnClientDesc: "Construirea relațiilor, gestionarea reclamațiilor, metrici de calitate a serviciilor",
    learnEmergency: "Proceduri de Urgență",
    learnEmergencyDesc: "Gestionarea accidentelor, defecțiunilor, întârzierilor, daunelor la marfă, căi de escaladare",
    journeyTitle: "Călătoria Ta de Învățare",
    week12: "Săptămâna 1-2",
    week12Title: "Fundamente",
    week12Topics: "Prezentare generală industrie, tipuri de vehicule, terminologie de bază, sisteme companiei",
    week34: "Săptămâna 3-4",
    week34Title: "Nucleul Operațiunilor",
    week34Topics: "Gestionarea comenzilor, planificarea expediției, comunicare cu șoferii, bazele TMS",
    week56: "Săptămâna 5-6",
    week56Title: "Conformitate și Reglementări",
    week56Topics: "Ore de condus, limite de greutate, cerințe documentare, restricții de condus",
    week78: "Săptămâna 7-8",
    week78Title: "Prețuri și Comercial",
    week78Topics: "Calculul costurilor, cotații, burse de marfă, managementul marjelor",
    week910: "Săptămâna 9-10",
    week910Title: "Management Clienți",
    week910Topics: "Abilități de comunicare, rezolvarea problemelor, gestionarea reclamațiilor, KPI-uri",
    week1112: "Săptămâna 11-12",
    week1112Title: "Subiecte Avansate",
    week1112Topics: "ADR, vamă, transport frigorific, proceduri de urgență, studii de caz",
    rolesTitle: "Roluri Cheie în Freight Forwarding",
    roleDispatcher: "Dispecer / Planificator",
    roleDispatcherResp: "Programare zilnică vehicule, planificare rute, coordonare șoferi",
    roleDispatcherSkills: "Multitasking, cunoștințe geografice, comunicare",
    roleDispatcherPath: "Junior → Senior → Team Lead",
    roleController: "Controller Operațiuni",
    roleControllerResp: "Monitorizare încărcături, rezolvare probleme, actualizări clienți",
    roleControllerSkills: "Rezolvarea problemelor, atenție la detalii, management stres",
    roleControllerPath: "Controller → Supervisor → Manager",
    roleSales: "Vânzări / Business Development",
    roleSalesResp: "Achiziție clienți, cotații, management relații",
    roleSalesSkills: "Negociere, cunoașterea pieței, networking",
    roleSalesPath: "Rep Vânzări → Account Manager → Director Vânzări",
    roleCS: "Serviciu Clienți",
    roleCSResp: "Întrebări clienți, management POD, gestionare reclamații",
    roleCSSkills: "Comunicare, empatie, competență sisteme",
    roleCSPath: "Agent CS → Team Lead → Manager CS",
    rolePricing: "Pricing / Analist Rate",
    rolePricingResp: "Calculul costurilor, negocieri tarife, analiză marje",
    rolePricingSkills: "Abilități Excel, analiză piață, abilități numerice",
    rolePricingPath: "Analist → Analist Senior → Manager Pricing",
    roleCustoms: "Specialist Vamal",
    roleCustomsResp: "Documentație, conformitate, calcul taxe vamale",
    roleCustomsSkills: "Cunoștințe reglementări, atenție la detalii",
    roleCustomsPath: "Junior → Ofițer Vamal → Manager Conformitate",
    structureTitle: "Structura Tipică a Companiei",
    deptOperations: "Departamentul Operațiuni",
    deptCommercial: "Departamentul Comercial",
    deptSupport: "Funcții Suport",
    opsMgr: "Manager Operațiuni",
    opsTeamLead: "Team Leaderi Dispecerat",
    opsDispatchers: "Dispeceri / Planificatori",
    opsCoord: "Coordonatori Operațiuni",
    opsNight: "Controlleri Tură de Noapte",
    commDir: "Director Comercial",
    commKAM: "Key Account Manageri",
    commSales: "Reprezentanți Vânzări",
    commPricing: "Echipă Pricing",
    commTender: "Specialiști Licitații",
    suppFinance: "Finanțe și Contabilitate",
    suppCS: "Serviciu Clienți",
    suppFleet: "Management Flotă",
    suppHR: "HR și Training",
    suppIT: "IT și Sisteme",
    valuesTitle: "Valorile de Bază ale unui Freight Forwarder Profesionist",
    valueReliability: "Fiabilitate",
    valueReliabilityDesc: "Livrează ce promiți. Dacă te angajezi la un termen, fă tot posibilul să-l respecți.",
    valueCommunication: "Comunicare",
    valueCommunicationDesc: "Actualizările proactive previn surprizele. Veștile proaste trebuie să circule mai repede decât cele bune.",
    valueDocumentation: "Documentație",
    valueDocumentationDesc: "Dacă nu este documentat, nu s-a întâmplat. Fiecare acțiune trebuie să fie trasabilă.",
    valueProblem: "Rezolvarea Problemelor",
    valueProblemDesc: "Nu te plânge de probleme. Prezintă soluții. Fii persoana care rezolvă, nu cea care raportează.",
    valueTeamwork: "Lucru în Echipă",
    valueTeamworkDesc: "Transportul este un sport de echipă. Susține-ți colegii și ei te vor susține și pe tine.",
    valueImprovement: "Îmbunătățire Continuă",
    valueImprovementDesc: "Învață din fiecare transport. Fiecare problemă este o lecție despre cum să fii mai bun.",
    contactTitle: "Contacte și Suport",
    contactText: "Ca nou membru al echipei Rossik, ai acces la resurse și suport extinse:",
    contactOps: "Suport Operațiuni",
    contactOpsAvail: "Disponibil 24/7",
    contactOpsDesc: "Pentru probleme urgente de transport și urgențe în afara orelor de program",
    contactHR: "HR și Training",
    contactHRAvail: "L-V 9:00-18:00",
    contactHRDesc: "Dezvoltarea carierei, feedback training, suport administrativ",
    contactIT: "Suport IT",
    contactITAvail: "L-V 8:00-20:00",
    contactITDesc: "Probleme sistem, acces, probleme tehnice",
    readyTitle: "Pregătit să Începi?",
    readyText: "Acum ești pregătit să-ți începi călătoria pentru a deveni un freight forwarder profesionist. Următorul capitol va explora mentalitatea și abilitățile de care ai nevoie pentru a excela în acest rol solicitant, dar plin de satisfacții.",
    tipTitle: "Sfat de Amintit",
    tipText: "Fiecare freight forwarder de succes a fost odată exact unde ești tu acum. Diferența dintre mediocru și excelent nu este talentul – este dedicarea de a învăța, adaptabilitatea și grija autentică pentru munca ta. Abordează fiecare zi ca pe o oportunitate de a-ți îmbunătăți abilitățile.",
    nextChapter: "Următorul Capitol: Rol și Mentalitate →",
  },
  de: {
    heroTitle: "EU-Straßengüterverkehr Spedition",
    heroSubtitle: "Erweitertes Schulungs- und Betriebshandbuch",
    heroVersion: "Version 2025 – Vollständige Ausgabe",
    welcomeTitle: "Willkommen in Ihrer Speditionskarriere",
    welcomeText1: "Herzlichen Glückwunsch zum Einstieg in eine der dynamischsten und wichtigsten Branchen der Weltwirtschaft. Als Spediteur stehen Sie im Zentrum des internationalen Handels und verbinden Unternehmen in ganz Europa, um sicherzustellen, dass Waren sicher, pünktlich und kosteneffizient ihr Ziel erreichen.",
    welcomeText2: "Dieses umfassende Schulungshandbuch wurde von erfahrenen Fachleuten mit jahrzehntelanger kombinierter Erfahrung im europäischen Straßentransport entwickelt. Ob Sie völlig neu in der Logistik sind oder aus einem anderen Bereich wechseln, dieser Leitfaden vermittelt Ihnen das Wissen und die praktischen Fähigkeiten, die Sie für Ihren Erfolg benötigen.",
    scopeTitle: "Geltungsbereich",
    scopeText: "Europäische Straßentransportoperationen mit 13,6m Planenauflieger mit bis zu 24-29 Tonnen Nutzlast.",
    scopeFTL: "Full Truck Load (FTL) Operationen",
    scopeLTL: "Teilladung (LTL/PTL) Sammelgut",
    scopeCrossBorder: "Grenzüberschreitender EU-Transport",
    scopeReefer: "Grundlagen Kühltransport",
    audienceTitle: "Zielgruppe",
    audienceText: "Auszubildende und Junior-Spediteure/Disponenten in Transport- und Speditionsunternehmen.",
    audienceNew: "Neueinstellungen ohne vorherige Logistikerfahrung",
    audienceCareer: "Quereinsteiger in die Spedition",
    audienceJunior: "Junior-Disponenten, die umfassendes Wissen suchen",
    audienceSupport: "Supportmitarbeiter im Übergang zum operativen Bereich",
    industryTitle: "Die europäische Straßengüterverkehrsbranche",
    industryOverview: "Branchenüberblick",
    industryText: "Der Straßengüterverkehr ist das Rückgrat des europäischen Handels und macht etwa 75% aller in der EU transportierten Güter aus. Die Branche beschäftigt direkt über 3 Millionen Menschen und unterstützt zahllose Unternehmen in den Bereichen Fertigung, Einzelhandel und Dienstleistungen.",
    industryValue: "Über 400 Milliarden € Jahresmarktwert",
    industryVehicles: "2+ Millionen aktive Nutzfahrzeuge in der EU",
    industryCompanies: "500.000+ Speditionsunternehmen",
    industryGrowth: "3-4% Wachstum pro Jahr",
    trendsTitle: "Wichtige Trends 2025",
    trendDigital: "Digitalisierung: eCMR, digitale Frachtbörsen, Echtzeit-Tracking",
    trendSustain: "Nachhaltigkeit: CO2-Berichterstattung, alternative Kraftstoffe, grüne Korridore",
    trendDriver: "Fahrermangel: Alternde Belegschaft, Rekrutierungsherausforderungen",
    trendRegulatory: "Regulatorische Änderungen: EU-Mobilitätspaket, intelligente Fahrtenschreiber",
    statsTitle: "Branchenstatistik 2024-2025",
    statMarket: "Jährlicher Marktwert",
    statRoad: "EU-Güter auf der Straße",
    statWorkers: "Beschäftigte",
    statTonneKm: "Tonnen-km jährlich",
    learnTitle: "Was Sie lernen werden",
    learnOperations: "Betrieb",
    learnOperationsDesc: "End-to-End-Workflow von Auftragseingang bis Lieferung, Auftragsmanagement, Dispositionsplanung",
    learnCompliance: "Compliance",
    learnComplianceDesc: "Lenkzeiten, Fahrtenschreiberregeln, Fahrverbote, Gewichtsgrenzen, EU-Vorschriften",
    learnVehicle: "Fahrzeugwissen",
    learnVehicleDesc: "13,6m Planenauflieger-Spezifikationen, Fahrzeugtypen, Ladekonfigurationen",
    learnPricing: "Preise und Kosten",
    learnPricingDesc: "Kostenberechnung, Mautsysteme, Margen, Kraftstoffzuschläge, Nebengebühren",
    learnTMS: "TMS Translogica",
    learnTMSDesc: "Vollständige Systembedienungsanleitung, Kundenmanagement, Abrechnungsworkflows",
    learnExchanges: "Frachtbörsen",
    learnExchangesDesc: "TIMOCOM, Trans.eu, Teleroute, Transporeon – Kapazitäten und Ladungen finden",
    learnDocs: "Dokumentation",
    learnDocsDesc: "CMR-Frachtbriefe, Zolldokumente, PODs, Versicherungszertifikate",
    learnClient: "Kundenmanagement",
    learnClientDesc: "Beziehungsaufbau, Beschwerdebearbeitung, Servicequalitätskennzahlen",
    learnEmergency: "Notfallverfahren",
    learnEmergencyDesc: "Umgang mit Unfällen, Pannen, Verzögerungen, Ladungsschäden, Eskalationswege",
    journeyTitle: "Ihre Lernreise",
    week12: "Woche 1-2",
    week12Title: "Grundlagen",
    week12Topics: "Branchenübersicht, Fahrzeugtypen, Grundbegriffe, Unternehmenssysteme",
    week34: "Woche 3-4",
    week34Title: "Betriebskern",
    week34Topics: "Auftragsbearbeitung, Dispositionsplanung, Fahrerkommunikation, TMS-Grundlagen",
    week56: "Woche 5-6",
    week56Title: "Compliance und Vorschriften",
    week56Topics: "Lenkzeiten, Gewichtsgrenzen, Dokumentationsanforderungen, Fahrverbote",
    week78: "Woche 7-8",
    week78Title: "Preise und Kommerzielles",
    week78Topics: "Kostenberechnung, Angebotserstellung, Frachtbörsen, Margenmanagement",
    week910: "Woche 9-10",
    week910Title: "Kundenmanagement",
    week910Topics: "Kommunikationsfähigkeiten, Problemlösung, Beschwerdebearbeitung, KPIs",
    week1112: "Woche 11-12",
    week1112Title: "Fortgeschrittene Themen",
    week1112Topics: "ADR, Zoll, Kühltransport, Notfallverfahren, Fallstudien",
    rolesTitle: "Schlüsselrollen in der Spedition",
    roleDispatcher: "Disponent / Planer",
    roleDispatcherResp: "Tägliche Fahrzeugplanung, Routenplanung, Fahrerkoordination",
    roleDispatcherSkills: "Multitasking, Geografiekenntnisse, Kommunikation",
    roleDispatcherPath: "Junior → Senior → Teamleiter",
    roleController: "Operations Controller",
    roleControllerResp: "Ladungsüberwachung, Problemlösung, Kundenaktualisierungen",
    roleControllerSkills: "Problemlösung, Detailgenauigkeit, Stressmanagement",
    roleControllerPath: "Controller → Supervisor → Manager",
    roleSales: "Vertrieb / Business Development",
    roleSalesResp: "Kundenakquise, Angebote, Beziehungsmanagement",
    roleSalesSkills: "Verhandlung, Marktkenntnisse, Networking",
    roleSalesPath: "Vertriebsmitarbeiter → Account Manager → Vertriebsleiter",
    roleCS: "Kundenservice",
    roleCSResp: "Kundenanfragen, POD-Management, Beschwerdebearbeitung",
    roleCSSkills: "Kommunikation, Empathie, Systemkompetenz",
    roleCSPath: "CS-Agent → Teamleiter → CS-Manager",
    rolePricing: "Pricing / Ratenanalyst",
    rolePricingResp: "Kostenberechnung, Tarifverhandlungen, Margenanalyse",
    rolePricingSkills: "Excel-Kenntnisse, Marktanalyse, Zahlenaffinität",
    rolePricingPath: "Analyst → Senior Analyst → Pricing Manager",
    roleCustoms: "Zollspezialist",
    roleCustomsResp: "Dokumentation, Compliance, Zollberechnung",
    roleCustomsSkills: "Regulierungswissen, Detailgenauigkeit",
    roleCustomsPath: "Junior → Zollbeamter → Compliance Manager",
    structureTitle: "Typische Unternehmensstruktur",
    deptOperations: "Operationsabteilung",
    deptCommercial: "Kommerzielle Abteilung",
    deptSupport: "Unterstützungsfunktionen",
    opsMgr: "Operations Manager",
    opsTeamLead: "Dispositions-Teamleiter",
    opsDispatchers: "Disponenten / Planer",
    opsCoord: "Operations-Koordinatoren",
    opsNight: "Nachtschicht-Controller",
    commDir: "Commercial Director",
    commKAM: "Key Account Manager",
    commSales: "Vertriebsmitarbeiter",
    commPricing: "Pricing-Team",
    commTender: "Ausschreibungsspezialisten",
    suppFinance: "Finanzen und Buchhaltung",
    suppCS: "Kundenservice",
    suppFleet: "Flottenmanagement",
    suppHR: "HR und Schulung",
    suppIT: "IT und Systeme",
    valuesTitle: "Grundwerte eines professionellen Spediteurs",
    valueReliability: "Zuverlässigkeit",
    valueReliabilityDesc: "Halten Sie, was Sie versprechen. Wenn Sie sich auf einen Termin festlegen, tun Sie alles, um ihn einzuhalten.",
    valueCommunication: "Kommunikation",
    valueCommunicationDesc: "Proaktive Updates verhindern Überraschungen. Schlechte Nachrichten sollten schneller reisen als gute.",
    valueDocumentation: "Dokumentation",
    valueDocumentationDesc: "Wenn es nicht dokumentiert ist, ist es nicht passiert. Jede Aktion muss nachvollziehbar sein.",
    valueProblem: "Problemlösung",
    valueProblemDesc: "Beschweren Sie sich nicht über Probleme. Präsentieren Sie Lösungen. Seien Sie der Löser, nicht der Reporter.",
    valueTeamwork: "Teamarbeit",
    valueTeamworkDesc: "Transport ist ein Mannschaftssport. Unterstützen Sie Ihre Kollegen und sie werden Sie unterstützen.",
    valueImprovement: "Kontinuierliche Verbesserung",
    valueImprovementDesc: "Lernen Sie aus jedem Transport. Jedes Problem ist eine Lektion, wie Sie besser werden können.",
    contactTitle: "Kontakte und Support",
    contactText: "Als neues Teammitglied bei Rossik haben Sie Zugang zu umfangreichen Ressourcen und Support:",
    contactOps: "Operations-Support",
    contactOpsAvail: "24/7 verfügbar",
    contactOpsDesc: "Für dringende Transportprobleme und Notfälle außerhalb der Geschäftszeiten",
    contactHR: "HR und Schulung",
    contactHRAvail: "Mo-Fr 9:00-18:00",
    contactHRDesc: "Karriereentwicklung, Schulungsfeedback, administrative Unterstützung",
    contactIT: "IT-Support",
    contactITAvail: "Mo-Fr 8:00-20:00",
    contactITDesc: "Systemprobleme, Zugang, technische Probleme",
    readyTitle: "Bereit zum Start?",
    readyText: "Sie sind jetzt bereit, Ihre Reise zu beginnen, um ein professioneller Spediteur zu werden. Das nächste Kapitel wird die Denkweise und Fähigkeiten erkunden, die Sie benötigen, um in dieser anspruchsvollen, aber lohnenden Rolle zu glänzen.",
    tipTitle: "Tipp zum Merken",
    tipText: "Jeder erfolgreiche Spediteur war einmal genau dort, wo Sie jetzt sind. Der Unterschied zwischen Durchschnitt und Exzellenz ist nicht Talent – es ist das Engagement zu lernen, die Anpassungsfähigkeit und die echte Fürsorge für Ihre Arbeit. Gehen Sie jeden Tag als Gelegenheit an, Ihre Fähigkeiten zu verbessern.",
    nextChapter: "Nächstes Kapitel: Rolle und Denkweise →",
  },
  en: {
    heroTitle: "EU Road Freight Forwarding",
    heroSubtitle: "Extended Training & Operating Manual",
    heroVersion: "Version 2025 – Complete Edition",
    welcomeTitle: "Welcome to Your Career in Freight Forwarding",
    welcomeText1: "Congratulations on joining one of the most dynamic and essential industries in the global economy. As a freight forwarder, you will be at the heart of international trade, connecting businesses across Europe and ensuring goods reach their destinations safely, on time, and cost-effectively.",
    welcomeText2: "This comprehensive training manual has been developed by experienced professionals with decades of combined experience in European road transport. Whether you are completely new to logistics or transitioning from another field, this guide will provide you with the knowledge and practical skills needed to excel in your role.",
    scopeTitle: "Scope",
    scopeText: "European road transport operations using 13.6m curtainsider/tautliner with up to 24-29 tonnes payload.",
    scopeFTL: "Full Truck Load (FTL) operations",
    scopeLTL: "Part Load (LTL/PTL) groupage",
    scopeCrossBorder: "Cross-border EU transport",
    scopeReefer: "Temperature-controlled (reefer) basics",
    audienceTitle: "Audience",
    audienceText: "Trainees and junior freight forwarders/dispatchers in transport and forwarding companies.",
    audienceNew: "New hires with no prior logistics experience",
    audienceCareer: "Career changers entering freight forwarding",
    audienceJunior: "Junior dispatchers seeking comprehensive knowledge",
    audienceSupport: "Support staff transitioning to operations",
    industryTitle: "The European Road Freight Industry",
    industryOverview: "Industry at a Glance",
    industryText: "Road freight is the backbone of European commerce, accounting for approximately 75% of all goods transported within the EU. The industry employs over 3 million people directly and supports countless businesses across manufacturing, retail, and services sectors.",
    industryValue: "Over €400 billion market value annually",
    industryVehicles: "2+ million commercial vehicles active in EU",
    industryCompanies: "500,000+ freight forwarding companies",
    industryGrowth: "Growing 3-4% year-over-year",
    trendsTitle: "Key Trends in 2025",
    trendDigital: "Digitalization: eCMR, digital freight exchanges, real-time tracking",
    trendSustain: "Sustainability: CO2 reporting, alternative fuels, green corridors",
    trendDriver: "Driver Shortage: Aging workforce, recruitment challenges",
    trendRegulatory: "Regulatory Changes: EU Mobility Package, smart tachographs",
    statsTitle: "Industry Statistics 2024-2025",
    statMarket: "Annual Market Value",
    statRoad: "EU Goods by Road",
    statWorkers: "Employed Workers",
    statTonneKm: "Tonne-km Annually",
    learnTitle: "What You Will Learn",
    learnOperations: "Operations",
    learnOperationsDesc: "End-to-end workflow from intake to delivery, order management, dispatch planning",
    learnCompliance: "Compliance",
    learnComplianceDesc: "Drivers hours rules, tachograph rules, driving bans, weight limits, EU regulations",
    learnVehicle: "Vehicle Knowledge",
    learnVehicleDesc: "13.6m curtainsider specifications, vehicle types, loading configurations",
    learnPricing: "Pricing & Costing",
    learnPricingDesc: "Cost calculation, toll systems, margins, fuel surcharges, accessorial fees",
    learnTMS: "TMS Translogica",
    learnTMSDesc: "Complete system operation guide, client management, invoicing workflows",
    learnExchanges: "Freight Exchanges",
    learnExchangesDesc: "TIMOCOM, Trans.eu, Teleroute, Transporeon – finding capacity and loads",
    learnDocs: "Documentation",
    learnDocsDesc: "CMR consignment notes, customs documents, PODs, insurance certificates",
    learnClient: "Client Management",
    learnClientDesc: "Building relationships, handling complaints, service quality metrics",
    learnEmergency: "Emergency Procedures",
    learnEmergencyDesc: "Handling accidents, breakdowns, delays, cargo damage, escalation paths",
    journeyTitle: "Your Learning Journey",
    week12: "Week 1-2",
    week12Title: "Foundations",
    week12Topics: "Industry overview, vehicle types, basic terminology, company systems",
    week34: "Week 3-4",
    week34Title: "Operations Core",
    week34Topics: "Order handling, dispatch planning, driver communication, TMS basics",
    week56: "Week 5-6",
    week56Title: "Compliance & Regulations",
    week56Topics: "Driving hours, weight limits, documentation requirements, driving bans",
    week78: "Week 7-8",
    week78Title: "Pricing & Commercial",
    week78Topics: "Cost calculation, quoting, freight exchanges, margin management",
    week910: "Week 9-10",
    week910Title: "Client Management",
    week910Topics: "Communication skills, problem solving, complaint handling, KPIs",
    week1112: "Week 11-12",
    week1112Title: "Advanced Topics",
    week1112Topics: "ADR, customs, reefer transport, emergency procedures, case studies",
    rolesTitle: "Key Roles in Freight Forwarding",
    roleDispatcher: "Dispatcher / Planner",
    roleDispatcherResp: "Daily vehicle scheduling, route planning, driver coordination",
    roleDispatcherSkills: "Multitasking, geography knowledge, communication",
    roleDispatcherPath: "Junior → Senior → Team Lead",
    roleController: "Operations Controller",
    roleControllerResp: "Load monitoring, issue resolution, client updates",
    roleControllerSkills: "Problem-solving, attention to detail, stress management",
    roleControllerPath: "Controller → Supervisor → Manager",
    roleSales: "Sales / Business Development",
    roleSalesResp: "Client acquisition, quotations, relationship management",
    roleSalesSkills: "Negotiation, market knowledge, networking",
    roleSalesPath: "Sales Rep → Account Manager → Sales Director",
    roleCS: "Customer Service",
    roleCSResp: "Client inquiries, POD management, complaint handling",
    roleCSSkills: "Communication, empathy, system proficiency",
    roleCSPath: "CS Agent → Team Lead → CS Manager",
    rolePricing: "Pricing / Rate Analyst",
    rolePricingResp: "Cost calculations, rate negotiations, margin analysis",
    rolePricingSkills: "Excel skills, market analysis, numerical ability",
    rolePricingPath: "Analyst → Senior Analyst → Pricing Manager",
    roleCustoms: "Customs Specialist",
    roleCustomsResp: "Documentation, compliance, duty calculations",
    roleCustomsSkills: "Regulatory knowledge, attention to detail",
    roleCustomsPath: "Junior → Customs Officer → Compliance Manager",
    structureTitle: "Typical Company Structure",
    deptOperations: "Operations Department",
    deptCommercial: "Commercial Department",
    deptSupport: "Support Functions",
    opsMgr: "Operations Manager",
    opsTeamLead: "Dispatch Team Leaders",
    opsDispatchers: "Dispatchers / Planners",
    opsCoord: "Operations Coordinators",
    opsNight: "Night Shift Controllers",
    commDir: "Commercial Director",
    commKAM: "Key Account Managers",
    commSales: "Sales Representatives",
    commPricing: "Pricing Team",
    commTender: "Tender Specialists",
    suppFinance: "Finance & Accounting",
    suppCS: "Customer Service",
    suppFleet: "Fleet Management",
    suppHR: "HR & Training",
    suppIT: "IT & Systems",
    valuesTitle: "Core Values of a Professional Freight Forwarder",
    valueReliability: "Reliability",
    valueReliabilityDesc: "Deliver on promises. If you commit to a deadline, move heaven and earth to meet it.",
    valueCommunication: "Communication",
    valueCommunicationDesc: "Proactive updates prevent surprises. Bad news should travel faster than good news.",
    valueDocumentation: "Documentation",
    valueDocumentationDesc: "If it is not documented, it did not happen. Every action must be traceable.",
    valueProblem: "Problem Solving",
    valueProblemDesc: "Do not complain about problems. Present solutions. Be the fixer, not the reporter.",
    valueTeamwork: "Teamwork",
    valueTeamworkDesc: "Transport is a team sport. Support your colleagues and they will support you.",
    valueImprovement: "Continuous Improvement",
    valueImprovementDesc: "Learn from every transport. Every problem is a lesson about how to be better.",
    contactTitle: "Contacts and Support",
    contactText: "As a new member of the Rossik team, you have access to extensive resources and support:",
    contactOps: "Operations Support",
    contactOpsAvail: "Available 24/7",
    contactOpsDesc: "For urgent transport issues and after-hours emergencies",
    contactHR: "HR and Training",
    contactHRAvail: "Mon-Fri 9:00-18:00",
    contactHRDesc: "Career development, training feedback, administrative support",
    contactIT: "IT Support",
    contactITAvail: "Mon-Fri 8:00-20:00",
    contactITDesc: "System issues, access, technical problems",
    readyTitle: "Ready to Start?",
    readyText: "You are now ready to begin your journey to becoming a professional freight forwarder. The next chapter will explore the mindset and skills you need to excel in this demanding but rewarding role.",
    tipTitle: "Tip to Remember",
    tipText: "Every successful freight forwarder was once exactly where you are now. The difference between average and excellent is not talent – it is the dedication to learn, adaptability, and genuine care for your work. Approach every day as an opportunity to improve your skills.",
    nextChapter: "Next Chapter: Role and Mindset →",
  },
};

export function IntroChapter() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 text-primary-foreground">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        <div className="relative">
          <div className="bg-white rounded-lg p-3 inline-block mb-6">
            <img src={rossikLogo} alt="Rossik Logo" className="h-14" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2">{t.heroSubtitle}</p>
          <p className="text-primary-foreground/70">{t.heroVersion}</p>
        </div>
        <Truck className="absolute bottom-4 right-4 w-32 h-32 text-primary-foreground/10" />
      </div>

      {/* Welcome Message */}
      <div className="info-card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="section-title mb-2">{t.welcomeTitle}</h2>
            <p className="text-muted-foreground mb-4">{t.welcomeText1}</p>
            <p className="text-muted-foreground">{t.welcomeText2}</p>
          </div>
        </div>
      </div>

      {/* Scope & Audience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">{t.scopeTitle}</h2>
          </div>
          <p className="text-muted-foreground mb-4">{t.scopeText}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{t.scopeFTL}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{t.scopeLTL}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{t.scopeCrossBorder}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span>{t.scopeReefer}</span>
            </li>
          </ul>
        </div>

        <div className="info-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="section-title mb-0">{t.audienceTitle}</h2>
          </div>
          <p className="text-muted-foreground mb-4">{t.audienceText}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{t.audienceNew}</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{t.audienceCareer}</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{t.audienceJunior}</span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{t.audienceSupport}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Industry Overview */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          {t.industryTitle}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">{t.industryOverview}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t.industryText}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t.industryValue}</li>
                <li>• {t.industryVehicles}</li>
                <li>• {t.industryCompanies}</li>
                <li>• {t.industryGrowth}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">{t.trendsTitle}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{t.trendDigital}</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{t.trendSustain}</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{t.trendDriver}</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{t.trendRegulatory}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          {t.statsTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">€400B+</p>
            <p className="text-sm text-muted-foreground">{t.statMarket}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">75%</p>
            <p className="text-sm text-muted-foreground">{t.statRoad}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">3M+</p>
            <p className="text-sm text-muted-foreground">{t.statWorkers}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-primary">1.8T</p>
            <p className="text-sm text-muted-foreground">{t.statTonneKm}</p>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <div className="info-card">
        <h2 className="section-title flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          {t.learnTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnOperations}</h3>
            <p className="text-sm text-muted-foreground">{t.learnOperationsDesc}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnCompliance}</h3>
            <p className="text-sm text-muted-foreground">{t.learnComplianceDesc}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnVehicle}</h3>
            <p className="text-sm text-muted-foreground">{t.learnVehicleDesc}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnPricing}</h3>
            <p className="text-sm text-muted-foreground">{t.learnPricingDesc}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnTMS}</h3>
            <p className="text-sm text-muted-foreground">{t.learnTMSDesc}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnExchanges}</h3>
            <p className="text-sm text-muted-foreground">{t.learnExchangesDesc}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnDocs}</h3>
            <p className="text-sm text-muted-foreground">{t.learnDocsDesc}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnClient}</h3>
            <p className="text-sm text-muted-foreground">{t.learnClientDesc}</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-1">{t.learnEmergency}</h3>
            <p className="text-sm text-muted-foreground">{t.learnEmergencyDesc}</p>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Route className="w-6 h-6 text-primary" />
          {t.journeyTitle}
        </h2>
        <div className="info-card">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            <div className="space-y-6">
              {[
                { week: t.week12, title: t.week12Title, topics: t.week12Topics },
                { week: t.week34, title: t.week34Title, topics: t.week34Topics },
                { week: t.week56, title: t.week56Title, topics: t.week56Topics },
                { week: t.week78, title: t.week78Title, topics: t.week78Topics },
                { week: t.week910, title: t.week910Title, topics: t.week910Topics },
                { week: t.week1112, title: t.week1112Title, topics: t.week1112Topics },
              ].map((phase, i) => (
                <div key={i} className="flex gap-4 relative">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{phase.week}</span>
                    </div>
                    <h4 className="font-semibold">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.topics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Star className="w-6 h-6 text-primary" />
          {t.valuesTitle}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard title={t.valueReliability} icon={Shield}>
            <p>{t.valueReliabilityDesc}</p>
          </InfoCard>
          <InfoCard title={t.valueCommunication} icon={Phone}>
            <p>{t.valueCommunicationDesc}</p>
          </InfoCard>
          <InfoCard title={t.valueDocumentation} icon={FileText}>
            <p>{t.valueDocumentationDesc}</p>
          </InfoCard>
          <InfoCard title={t.valueProblem} icon={Lightbulb}>
            <p>{t.valueProblemDesc}</p>
          </InfoCard>
          <InfoCard title={t.valueTeamwork} icon={Users}>
            <p>{t.valueTeamworkDesc}</p>
          </InfoCard>
          <InfoCard title={t.valueImprovement} icon={TrendingUp}>
            <p>{t.valueImprovementDesc}</p>
          </InfoCard>
        </div>
      </section>

      {/* Company Structure */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Building2 className="w-6 h-6 text-primary" />
          {t.structureTitle}
        </h2>
        <div className="info-card">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">{t.deptOperations}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t.opsMgr}</li>
                <li>• {t.opsTeamLead}</li>
                <li>• {t.opsDispatchers}</li>
                <li>• {t.opsCoord}</li>
                <li>• {t.opsNight}</li>
              </ul>
            </div>
            <div className="p-4 bg-info/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-info">{t.deptCommercial}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t.commDir}</li>
                <li>• {t.commKAM}</li>
                <li>• {t.commSales}</li>
                <li>• {t.commPricing}</li>
                <li>• {t.commTender}</li>
              </ul>
            </div>
            <div className="p-4 bg-success/5 rounded-lg">
              <h3 className="font-semibold mb-3 text-success">{t.deptSupport}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t.suppFinance}</li>
                <li>• {t.suppCS}</li>
                <li>• {t.suppFleet}</li>
                <li>• {t.suppHR}</li>
                <li>• {t.suppIT}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts and Support */}
      <section>
        <h2 className="section-title flex items-center gap-3">
          <Phone className="w-6 h-6 text-primary" />
          {t.contactTitle}
        </h2>
        <p className="text-muted-foreground mb-6">{t.contactText}</p>
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard title={t.contactOps} icon={Phone} variant="info">
            <p className="font-medium text-info">{t.contactOpsAvail}</p>
            <p>{t.contactOpsDesc}</p>
          </InfoCard>
          <InfoCard title={t.contactHR} icon={Users} variant="success">
            <p className="font-medium text-success">{t.contactHRAvail}</p>
            <p>{t.contactHRDesc}</p>
          </InfoCard>
          <InfoCard title={t.contactIT} icon={Mail} variant="warning">
            <p className="font-medium text-warning">{t.contactITAvail}</p>
            <p>{t.contactITDesc}</p>
          </InfoCard>
        </div>
      </section>

      {/* Ready to Start */}
      <div className="info-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <h2 className="section-title flex items-center gap-3">
          <Zap className="w-6 h-6 text-primary" />
          {t.readyTitle}
        </h2>
        <p className="text-muted-foreground mb-4">{t.readyText}</p>
        <div className="bg-primary/10 rounded-lg p-4">
          <p className="font-semibold text-primary mb-1">{t.tipTitle}</p>
          <p className="text-sm text-muted-foreground">{t.tipText}</p>
        </div>
      </div>
    </div>
  );
}
