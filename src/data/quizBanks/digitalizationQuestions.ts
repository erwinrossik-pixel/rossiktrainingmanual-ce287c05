import { QuizQuestion } from '../quizData';

export const digitalizationQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce este e-CMR?",
    options: ["O aplicație de navigație", "Versiunea electronică a scrisorii de trăsură CMR", "Un sistem de taxare", "O platformă de burse"],
    correctIndex: 1,
    explanation: "e-CMR este versiunea digitală a scrisorii de trăsură CMR, recunoscută legal în țările semnatare."
  },
  {
    question: "Care este principalul avantaj al unui TMS (Transport Management System)?",
    options: ["Reducerea costurilor de combustibil", "Centralizarea și automatizarea tuturor operațiunilor de transport", "Eliminarea șoferilor", "Reducerea taxelor de drum"],
    correctIndex: 1,
    explanation: "TMS centralizează planificarea, execuția și monitorizarea transporturilor într-o singură platformă."
  },
  {
    question: "Ce înseamnă API în contextul digitalizării transporturilor?",
    options: ["Aplicație pentru iPhone", "Interface de programare a aplicațiilor pentru integrare sisteme", "Administrație publică internațională", "Asigurare pentru incidente"],
    correctIndex: 1,
    explanation: "API permite integrarea automată între diferite sisteme software folosite în transport."
  },
  {
    question: "Ce rol are blockchain în transportul de marfă?",
    options: ["Accelerarea vehiculelor", "Asigurarea trasabilității și securității datelor", "Reducerea greutății mărfurilor", "Eliminarea controalelor"],
    correctIndex: 1,
    explanation: "Blockchain oferă un registru distribuit care asigură trasabilitatea și integritatea datelor."
  },
  {
    question: "Ce este telematics în flota de transport?",
    options: ["Telefoane mobile", "Sisteme de urmărire GPS și monitorizare a vehiculelor", "Televiziune în cabină", "Telefoane fixe"],
    correctIndex: 1,
    explanation: "Telematics combină GPS, senzori și comunicații pentru monitorizarea flotei în timp real."
  },
  {
    question: "Care este scopul principal al AI (Inteligența Artificială) în transport?",
    options: ["Înlocuirea completă a oamenilor", "Optimizarea rutelor, predicția cererii și automatizarea deciziilor", "Doar pentru divertisment", "Creșterea prețurilor"],
    correctIndex: 1,
    explanation: "AI optimizează operațiunile prin analiza datelor și automatizarea deciziilor repetitive."
  },
  {
    question: "Ce este Machine Learning în context logistic?",
    options: ["Mașini care învață să conducă", "Algoritmi care învață din date pentru predicții", "Repararea automată a vehiculelor", "Învățarea șoferilor"],
    correctIndex: 1,
    explanation: "Machine Learning analizează date istorice pentru a prezice cererea, prețurile și timpii de livrare."
  },
  {
    question: "Ce înseamnă Big Data pentru expeditori?",
    options: ["Date foarte mari fizic", "Analiza volumelor mari de date pentru insights operaționale", "Doar date confidențiale", "Date vechi"],
    correctIndex: 1,
    explanation: "Big Data permite analiza pattern-urilor din volume mari de date pentru optimizare."
  },
  {
    question: "Care este principalul risc de cybersecurity în transport?",
    options: ["Virușii biologici", "Atacuri ransomware și furt de date", "Defectarea motoarelor", "Vremea rea"],
    correctIndex: 1,
    explanation: "Atacurile ransomware pot paraliza operațiunile și compromite datele sensibile ale clienților."
  },
  {
    question: "Ce este un Digital Twin în logistică?",
    options: ["Un șofer virtual", "Replica digitală a unui sistem fizic pentru simulări", "Două ecrane", "Backup de date"],
    correctIndex: 1,
    explanation: "Digital Twin permite testarea scenariilor pe o replică virtuală înainte de implementare reală."
  },
  // German Questions (11-20)
  {
    question: "Was ist ein WMS (Warehouse Management System)?",
    options: ["Ein Wettersystem", "Software zur Verwaltung von Lageroperationen", "Ein Fahrzeugsystem", "Ein Finanzsystem"],
    correctIndex: 1,
    explanation: "WMS verwaltet Lageroperationen: Wareneingang, Lagerung, Kommissionierung und Versand."
  },
  {
    question: "Welchen Vorteil bietet Cloud Computing für Spediteure?",
    options: ["Nur Datenspeicherung", "Skalierbare IT-Ressourcen ohne eigene Server-Infrastruktur", "Schlechtes Wetter", "Keine Vorteile"],
    correctIndex: 1,
    explanation: "Cloud Computing bietet skalierbare, überall zugängliche IT-Ressourcen ohne Hardware-Investitionen."
  },
  {
    question: "Was bedeutet IoT (Internet of Things) im Transport?",
    options: ["Internationale Organisation für Transport", "Vernetzte Sensoren und Geräte für Echtzeit-Daten", "Ein Telefonnetz", "Internet für alle"],
    correctIndex: 1,
    explanation: "IoT verbindet Sensoren an Fahrzeugen und Gütern für kontinuierliche Überwachung."
  },
  {
    question: "Wie kann Robotic Process Automation (RPA) Spediteuren helfen?",
    options: ["Roboter fahren LKW", "Automatisierung repetitiver Büroaufgaben wie Dateneingabe", "Reinigung der Büros", "Keine Hilfe"],
    correctIndex: 1,
    explanation: "RPA automatisiert repetitive Aufgaben wie Dateneingabe und schafft Zeit für wertschöpfende Aktivitäten."
  },
  {
    question: "Was ist ein digitaler Frachtbrief?",
    options: ["Ein Brief per E-Mail", "Elektronische Version traditioneller Transportdokumente mit rechtlicher Gültigkeit", "Ein Werbebrief", "Ein Beschwerdeschreiben"],
    correctIndex: 1,
    explanation: "Der digitale Frachtbrief hat Rechtsgültigkeit und beschleunigt Dokumentenprozesse."
  },
  {
    question: "Welche Rolle spielt EDI (Electronic Data Interchange) in der Logistik?",
    options: ["Entertainment während der Fahrt", "Standardisierter elektronischer Datenaustausch zwischen Unternehmen", "Ein Radiosender", "Keine Rolle"],
    correctIndex: 1,
    explanation: "EDI ermöglicht den automatischen Datenaustausch zwischen Geschäftspartnern in standardisierten Formaten."
  },
  {
    question: "Was ist Predictive Maintenance?",
    options: ["Reparatur nach Ausfall", "Vorausschauende Wartung basierend auf Datenanalyse", "Nie wartend", "Zufällige Wartung"],
    correctIndex: 1,
    explanation: "Predictive Maintenance nutzt Daten, um Ausfälle vorherzusagen, bevor sie auftreten."
  },
  {
    question: "Wie verbessert Digitalisierung die Kundenkommunikation?",
    options: ["Gar nicht", "Echtzeit-Tracking, automatische Updates, Self-Service-Portale", "Nur Telefonanrufe", "Weniger Kommunikation"],
    correctIndex: 1,
    explanation: "Digitalisierung bietet Transparenz durch Echtzeit-Tracking und Self-Service-Portale."
  },
  {
    question: "Was ist ein wichtiger Aspekt bei der digitalen Transformation?",
    options: ["Nur neue Software kaufen", "Change Management und Mitarbeiterschulung", "Alles gleich lassen", "Nur Kosten reduzieren"],
    correctIndex: 1,
    explanation: "Digitale Transformation erfordert Change Management und Mitarbeiterschulung."
  },
  {
    question: "Welche Technologie ermöglicht autonome LKW?",
    options: ["Nur GPS", "Kombination aus Sensoren, KI, Lidar und Kameras", "Nur Radar", "Nur Kameras"],
    correctIndex: 1,
    explanation: "Autonome LKW nutzen eine Kombination aus Sensoren, KI, Lidar und Kameras zur Navigation."
  },
  // English Questions (21-30)
  {
    question: "What is the main purpose of a Transport Management System (TMS)?",
    options: ["Only GPS tracking", "End-to-end management of transport operations", "Just invoicing", "Only driver management"],
    correctIndex: 1,
    explanation: "TMS manages the entire transport cycle: planning, execution, monitoring and billing."
  },
  {
    question: "What is visibility in digital freight forwarding?",
    options: ["Seeing the truck on the road", "Real-time tracking and status updates throughout the supply chain", "Looking at documents", "Visibility of warehouse"],
    correctIndex: 1,
    explanation: "Visibility means real-time tracking and status updates throughout the supply chain."
  },
  {
    question: "How does OCR (Optical Character Recognition) help in logistics?",
    options: ["Reading books", "Automatically extracting data from documents like CMRs and invoices", "Taking photos", "Creating graphics"],
    correctIndex: 1,
    explanation: "OCR automatically extracts data from documents, reducing manual entry and errors."
  },
  {
    question: "What is the benefit of digital load matching platforms?",
    options: ["Only showing prices", "Connecting shippers with carriers in real-time for optimal matching", "Replacing all brokers", "Just advertising"],
    correctIndex: 1,
    explanation: "Digital platforms connect shippers and carriers in real-time for optimal matching."
  },
  {
    question: "What does real-time ETA mean?",
    options: ["Estimated Time of Arrival updated continuously based on live data", "Fixed arrival time", "Estimated Tax Amount", "Expected Transport Agreement"],
    correctIndex: 0,
    explanation: "Real-time ETA is the estimated time of arrival continuously updated based on live data."
  },
  {
    question: "What is the role of geofencing in transport?",
    options: ["Building fences", "Creating virtual boundaries for automatic triggers and notifications", "Marking territories", "Blocking roads"],
    correctIndex: 1,
    explanation: "Geofencing creates virtual boundaries that automatically trigger notifications on entry/exit."
  },
  {
    question: "How does electronic proof of delivery (ePOD) work?",
    options: ["Paper signature", "Digital capture of delivery confirmation with timestamp and signature", "Email confirmation only", "Phone call"],
    correctIndex: 1,
    explanation: "ePOD digitally captures delivery confirmation with timestamp, signature and possibly photos."
  },
  {
    question: "What is the main challenge of digital transformation in logistics?",
    options: ["Too much technology", "Integration of legacy systems and change management", "Not enough computers", "Too fast internet"],
    correctIndex: 1,
    explanation: "Integration of legacy systems and change management are the biggest challenges."
  },
  {
    question: "What security measure is essential for digital logistics systems?",
    options: ["No password needed", "Multi-factor authentication and encryption", "Simple passwords", "Open access"],
    correctIndex: 1,
    explanation: "Multi-factor authentication and encryption are essential for data security."
  },
  {
    question: "What does digital freight forwarding enable for small businesses?",
    options: ["Nothing special", "Access to advanced tools and global networks previously only available to large companies", "Higher costs", "More paperwork"],
    correctIndex: 1,
    explanation: "Digitalization gives SMBs access to tools and networks previously only available to large companies."
  },
  // Glossary Questions - Romanian (31-33)
  {
    question: "Ce înseamnă API în digitalizare?",
    options: ["Aplicație pentru iPhone", "Interfață de Programare a Aplicațiilor pentru integrare sisteme", "Administrație Publică", "Asigurare de Produse"],
    correctIndex: 1,
    explanation: "API (Application Programming Interface) permite integrarea automată între diferite sisteme software."
  },
  {
    question: "Ce este RPA (Robotic Process Automation)?",
    options: ["Roboți fizici", "Automatizarea sarcinilor repetitive prin software", "Reparații auto", "Planificare rutieră"],
    correctIndex: 1,
    explanation: "RPA folosește software pentru a automatiza sarcini repetitive precum introducerea datelor, eliberând timp pentru activități cu valoare adăugată."
  },
  {
    question: "Ce înseamnă IoT (Internet of Things) în transport?",
    options: ["Internet pentru toți", "Rețea de dispozitive și senzori conectați pentru date în timp real", "Impozit pe transport", "Protocol internet"],
    correctIndex: 1,
    explanation: "IoT conectează senzori pe vehicule și mărfuri pentru monitorizare continuă și date în timp real."
  },
  // Glossary Questions - German (34-36)
  {
    question: "Was bedeutet 'Blockchain' in der Logistik?",
    options: ["Eine Kette von Blöcken", "Dezentrales, unveränderliches Register für sichere Transaktionen", "Blockierte Kette", "Lieferkette"],
    correctIndex: 1,
    explanation: "Blockchain ist ein dezentrales, unveränderliches digitales Register, das Transaktionen sicher und transparent aufzeichnet."
  },
  {
    question: "Was ist 'Machine Learning' im Logistikkontext?",
    options: ["Maschinenreparatur", "Algorithmen, die aus Daten lernen für Prognosen", "Führerscheintraining", "Automatische Wartung"],
    correctIndex: 1,
    explanation: "Machine Learning nutzt Algorithmen, die aus historischen Daten lernen, um Nachfrage, Preise und Lieferzeiten vorherzusagen."
  },
  {
    question: "Was bedeutet 'e-CMR'?",
    options: ["Elektronische Musik", "Elektronische Version des CMR-Frachtbriefs", "E-Mail-CMR", "Europäischer CMR"],
    correctIndex: 1,
    explanation: "e-CMR ist die digitale Version des CMR-Frachtbriefs mit rechtlicher Gültigkeit in den Unterzeichnerländern."
  },
  // Glossary Questions - English (37-39)
  {
    question: "What is AI (Artificial Intelligence) used for in transport?",
    options: ["Only chatbots", "Route optimization, demand prediction and decision automation", "Entertainment", "Just marketing"],
    correctIndex: 1,
    explanation: "AI in transport optimizes routes, predicts demand, automates pricing and improves decision-making through data analysis."
  },
  {
    question: "What is 'Cybersecurity' in logistics context?",
    options: ["Internet browsing", "Protection of digital systems and data from attacks and breaches", "Security guards", "Firewall only"],
    correctIndex: 1,
    explanation: "Cybersecurity protects logistics systems and sensitive data from ransomware attacks, data theft and other digital threats."
  },
  {
    question: "What is a 'Digital Twin' in logistics?",
    options: ["Two computers", "Virtual replica of physical systems for simulation and testing", "Online backup", "Duplicate website"],
    correctIndex: 1,
    explanation: "A Digital Twin is a virtual replica of physical systems that allows testing scenarios before real-world implementation."
  }
];
