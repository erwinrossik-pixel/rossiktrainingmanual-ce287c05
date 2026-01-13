import { QuizQuestion } from '../quizData';

export const translogicaQuestions: QuizQuestion[] = [
  // Romanian Questions
  {
    question: "Ce este modulul Dispoplan în Translogica?",
    options: [
      "Sistemul de planificare și gestionare a comenzilor de transport",
      "Modulul de facturare",
      "Sistemul de contabilitate",
      "Modulul de resurse umane"
    ],
    correctIndex: 0,
    explanation: "Dispoplan este modulul central pentru planificarea și gestionarea operațiunilor de transport.",
    language: "ro"
  },
  {
    question: "Cum se creează o nouă comandă de transport în Translogica?",
    options: [
      "Navigation → Aufträge → Neu sau Ctrl+N",
      "Doar prin import Excel",
      "Prin modulul de facturare",
      "Nu se pot crea comenzi noi"
    ],
    correctIndex: 0,
    explanation: "Comenzile noi se creează prin meniul Navigation → Aufträge sau cu shortcut-ul Ctrl+N.",
    language: "ro"
  },
  {
    question: "Ce reprezintă câmpul 'Frachtführer' într-o comandă Translogica?",
    options: [
      "Transportatorul/carrier-ul care efectuează transportul",
      "Clientul care plătește",
      "Destinatarul mărfii",
      "Expeditorul mărfii"
    ],
    correctIndex: 0,
    explanation: "Frachtführer desemnează transportatorul efectiv care realizează transportul fizic.",
    language: "ro"
  },
  {
    question: "Cum se atribuie un vehicul unei comenzi în Dispoplan?",
    options: [
      "Drag & drop din lista de vehicule disponibile",
      "Doar prin telefon la șofer",
      "Prin email automat",
      "Nu se poate atribui manual"
    ],
    correctIndex: 0,
    explanation: "Atribuirea se face prin drag & drop din panoul de resurse disponibile în comandă.",
    language: "ro"
  },
  {
    question: "Ce funcție are modulul Telematik în Translogica?",
    options: [
      "Urmărire GPS în timp real și monitorizare vehicule",
      "Calcularea salariilor",
      "Facturarea automată",
      "Gestionarea clienților"
    ],
    correctIndex: 0,
    explanation: "Modulul Telematik asigură tracking GPS și monitorizarea flotei în timp real.",
    language: "ro"
  },
  {
    question: "Cum se generează o factură din Translogica?",
    options: [
      "Fakturierung → selectare comenzi finalizate → Rechnung erstellen",
      "Se face manual în Excel",
      "Automat la fiecare comandă",
      "Prin modulul de resurse umane"
    ],
    correctIndex: 0,
    explanation: "Facturile se generează din modulul Fakturierung pentru comenzile finalizate.",
    language: "ro"
  },
  {
    question: "Ce este 'Lademittelverwaltung' în Translogica?",
    options: [
      "Gestionarea paletelor și mijloacelor de încărcare",
      "Managementul angajaților",
      "Controlul calității",
      "Planificarea turelor"
    ],
    correctIndex: 0,
    explanation: "Lademittelverwaltung gestionează paletele, containerele și alte mijloace de încărcare.",
    language: "ro"
  },
  {
    question: "Cum se setează un traseu recurent în Translogica?",
    options: [
      "Routenplanung → Template erstellen → definire parametri recurență",
      "Nu există funcție de recurență",
      "Doar prin copiere manuală",
      "Prin modulul de contabilitate"
    ],
    correctIndex: 0,
    explanation: "Rutele recurente se setează ca template-uri în modulul de planificare rute.",
    language: "ro"
  },
  {
    question: "Ce tip de rapoarte oferă modulul Statistik?",
    options: [
      "Performanță vehicule, profitabilitate rute, analiză clienți",
      "Doar rapoarte de prezență",
      "Exclusiv rapoarte fiscale",
      "Nu generează rapoarte"
    ],
    correctIndex: 0,
    explanation: "Modulul Statistik oferă rapoarte complete de performanță operațională și financiară.",
    language: "ro"
  },
  {
    question: "Cum funcționează integrarea EDI în Translogica?",
    options: [
      "Import/export automat de date cu partenerii prin protocoale EDIFACT",
      "Doar prin email",
      "Manual prin copiere",
      "Nu există integrare"
    ],
    correctIndex: 0,
    explanation: "EDI permite schimbul automat de date standardizate cu partenerii de afaceri.",
    language: "ro"
  },

  // German Questions
  {
    question: "Was ist das Dispoplan-Modul in Translogica?",
    options: [
      "Das System zur Planung und Verwaltung von Transportaufträgen",
      "Das Fakturierungsmodul",
      "Das Buchhaltungssystem",
      "Das Personalmodul"
    ],
    correctIndex: 0,
    explanation: "Dispoplan ist das zentrale Modul für die Planung und Verwaltung des Transportbetriebs.",
    language: "de"
  },
  {
    question: "Wie erstellt man einen neuen Transportauftrag in Translogica?",
    options: [
      "Navigation → Aufträge → Neu oder Strg+N",
      "Nur durch Excel-Import",
      "Über das Fakturierungsmodul",
      "Neue Aufträge können nicht erstellt werden"
    ],
    correctIndex: 0,
    explanation: "Neue Aufträge werden über Navigation → Aufträge oder mit der Tastenkombination Strg+N erstellt.",
    language: "de"
  },
  {
    question: "Was bedeutet das Feld 'Frachtführer' in einem Translogica-Auftrag?",
    options: [
      "Der Spediteur/Carrier, der den Transport durchführt",
      "Der zahlende Kunde",
      "Der Warenempfänger",
      "Der Absender der Ware"
    ],
    correctIndex: 0,
    explanation: "Frachtführer bezeichnet den eigentlichen Transporteur, der den physischen Transport durchführt.",
    language: "de"
  },
  {
    question: "Wie weist man ein Fahrzeug einem Auftrag im Dispoplan zu?",
    options: [
      "Drag & Drop aus der Liste verfügbarer Fahrzeuge",
      "Nur per Telefon zum Fahrer",
      "Per automatischer E-Mail",
      "Manuelle Zuweisung nicht möglich"
    ],
    correctIndex: 0,
    explanation: "Die Zuweisung erfolgt per Drag & Drop aus dem Panel verfügbarer Ressourcen in den Auftrag.",
    language: "de"
  },
  {
    question: "Welche Funktion hat das Telematik-Modul in Translogica?",
    options: [
      "GPS-Echtzeit-Tracking und Fahrzeugüberwachung",
      "Gehaltsberechnung",
      "Automatische Fakturierung",
      "Kundenverwaltung"
    ],
    correctIndex: 0,
    explanation: "Das Telematik-Modul bietet GPS-Tracking und Flottenüberwachung in Echtzeit.",
    language: "de"
  },
  {
    question: "Wie generiert man eine Rechnung aus Translogica?",
    options: [
      "Fakturierung → abgeschlossene Aufträge wählen → Rechnung erstellen",
      "Manuell in Excel",
      "Automatisch bei jedem Auftrag",
      "Über das Personalmodul"
    ],
    correctIndex: 0,
    explanation: "Rechnungen werden im Modul Fakturierung für abgeschlossene Aufträge generiert.",
    language: "de"
  },
  {
    question: "Was ist 'Lademittelverwaltung' in Translogica?",
    options: [
      "Verwaltung von Paletten und Ladehilfsmitteln",
      "Mitarbeiterverwaltung",
      "Qualitätskontrolle",
      "Tourenplanung"
    ],
    correctIndex: 0,
    explanation: "Lademittelverwaltung verwaltet Paletten, Container und andere Ladehilfsmittel.",
    language: "de"
  },
  {
    question: "Wie richtet man eine wiederkehrende Route in Translogica ein?",
    options: [
      "Routenplanung → Template erstellen → Wiederholungsparameter definieren",
      "Es gibt keine Wiederholungsfunktion",
      "Nur durch manuelles Kopieren",
      "Über das Buchhaltungsmodul"
    ],
    correctIndex: 0,
    explanation: "Wiederkehrende Routen werden als Templates im Routenplanungsmodul eingerichtet.",
    language: "de"
  },
  {
    question: "Welche Art von Berichten bietet das Statistik-Modul?",
    options: [
      "Fahrzeugleistung, Routenrentabilität, Kundenanalyse",
      "Nur Anwesenheitsberichte",
      "Ausschließlich Steuerberichte",
      "Es generiert keine Berichte"
    ],
    correctIndex: 0,
    explanation: "Das Statistik-Modul bietet umfassende Berichte zur operativen und finanziellen Leistung.",
    language: "de"
  },
  {
    question: "Wie funktioniert die EDI-Integration in Translogica?",
    options: [
      "Automatischer Datenaustausch mit Partnern über EDIFACT-Protokolle",
      "Nur per E-Mail",
      "Manuell durch Kopieren",
      "Es gibt keine Integration"
    ],
    correctIndex: 0,
    explanation: "EDI ermöglicht den automatischen Austausch standardisierter Daten mit Geschäftspartnern.",
    language: "de"
  },

  // English Questions
  {
    question: "What is the Dispoplan module in Translogica?",
    options: [
      "The system for planning and managing transport orders",
      "The invoicing module",
      "The accounting system",
      "The human resources module"
    ],
    correctIndex: 0,
    explanation: "Dispoplan is the central module for planning and managing transport operations.",
    language: "en"
  },
  {
    question: "How do you create a new transport order in Translogica?",
    options: [
      "Navigation → Orders → New or Ctrl+N",
      "Only through Excel import",
      "Through the invoicing module",
      "New orders cannot be created"
    ],
    correctIndex: 0,
    explanation: "New orders are created via Navigation → Orders menu or with the Ctrl+N shortcut.",
    language: "en"
  },
  {
    question: "What does the 'Frachtführer' field represent in a Translogica order?",
    options: [
      "The carrier/transporter who performs the transport",
      "The paying client",
      "The cargo recipient",
      "The cargo sender"
    ],
    correctIndex: 0,
    explanation: "Frachtführer designates the actual carrier who performs the physical transport.",
    language: "en"
  },
  {
    question: "How do you assign a vehicle to an order in Dispoplan?",
    options: [
      "Drag & drop from the available vehicles list",
      "Only by phone to driver",
      "Through automatic email",
      "Manual assignment is not possible"
    ],
    correctIndex: 0,
    explanation: "Assignment is done via drag & drop from the available resources panel into the order.",
    language: "en"
  },
  {
    question: "What function does the Telematics module serve in Translogica?",
    options: [
      "Real-time GPS tracking and vehicle monitoring",
      "Salary calculation",
      "Automatic invoicing",
      "Customer management"
    ],
    correctIndex: 0,
    explanation: "The Telematics module provides GPS tracking and real-time fleet monitoring.",
    language: "en"
  },
  {
    question: "How do you generate an invoice from Translogica?",
    options: [
      "Invoicing → select completed orders → Create invoice",
      "Manually in Excel",
      "Automatically for each order",
      "Through the HR module"
    ],
    correctIndex: 0,
    explanation: "Invoices are generated from the Invoicing module for completed orders.",
    language: "en"
  },
  {
    question: "What is 'Lademittelverwaltung' in Translogica?",
    options: [
      "Management of pallets and loading equipment",
      "Employee management",
      "Quality control",
      "Tour planning"
    ],
    correctIndex: 0,
    explanation: "Lademittelverwaltung manages pallets, containers, and other loading equipment.",
    language: "en"
  },
  {
    question: "How do you set up a recurring route in Translogica?",
    options: [
      "Route Planning → Create Template → define recurrence parameters",
      "There is no recurrence function",
      "Only by manual copying",
      "Through the accounting module"
    ],
    correctIndex: 0,
    explanation: "Recurring routes are set up as templates in the route planning module.",
    language: "en"
  },
  {
    question: "What type of reports does the Statistics module provide?",
    options: [
      "Vehicle performance, route profitability, customer analysis",
      "Only attendance reports",
      "Exclusively tax reports",
      "It does not generate reports"
    ],
    correctIndex: 0,
    explanation: "The Statistics module provides comprehensive operational and financial performance reports.",
    language: "en"
  },
  {
    question: "How does EDI integration work in Translogica?",
    options: [
      "Automatic data import/export with partners via EDIFACT protocols",
      "Only through email",
      "Manually by copying",
      "There is no integration"
    ],
    correctIndex: 0,
    explanation: "EDI enables automatic exchange of standardized data with business partners.",
    language: "en"
  }
];
