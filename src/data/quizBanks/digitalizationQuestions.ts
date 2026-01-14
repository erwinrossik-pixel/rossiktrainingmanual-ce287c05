import { QuizQuestion } from '../quizData';

export const digitalizationQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce este e-CMR?",
    options: ["O aplicație de navigație", "Versiunea electronică a scrisorii de trăsură CMR", "Un sistem de taxare", "O platformă de burse"],
    correctIndex: 1,
    explanation: {
      ro: "e-CMR este versiunea digitală a scrisorii de trăsură CMR, recunoscută legal în țările semnatare.",
      de: "e-CMR ist die digitale Version des CMR-Frachtbriefs, legal anerkannt in den Unterzeichnerstaaten.",
      en: "e-CMR is the digital version of the CMR consignment note, legally recognized in signatory countries."
    }
  },
  {
    question: "Care este principalul avantaj al unui TMS (Transport Management System)?",
    options: ["Reducerea costurilor de combustibil", "Centralizarea și automatizarea tuturor operațiunilor de transport", "Eliminarea șoferilor", "Reducerea taxelor de drum"],
    correctIndex: 1,
    explanation: {
      ro: "TMS centralizează planificarea, execuția și monitorizarea transporturilor într-o singură platformă.",
      de: "TMS zentralisiert Planung, Ausführung und Überwachung von Transporten auf einer Plattform.",
      en: "TMS centralizes planning, execution and monitoring of transports on one platform."
    }
  },
  {
    question: "Ce înseamnă API în contextul digitalizării transporturilor?",
    options: ["Aplicație pentru iPhone", "Interface de programare a aplicațiilor pentru integrare sisteme", "Administrație publică internațională", "Asigurare pentru incidente"],
    correctIndex: 1,
    explanation: {
      ro: "API permite integrarea automată între diferite sisteme software folosite în transport.",
      de: "API ermöglicht die automatische Integration zwischen verschiedenen Softwaresystemen im Transport.",
      en: "API enables automatic integration between different software systems used in transport."
    }
  },
  {
    question: "Ce rol are blockchain în transportul de marfă?",
    options: ["Accelerarea vehiculelor", "Asigurarea trasabilității și securității datelor", "Reducerea greutății mărfurilor", "Eliminarea controalelor"],
    correctIndex: 1,
    explanation: {
      ro: "Blockchain oferă un registru distribuit care asigură trasabilitatea și integritatea datelor.",
      de: "Blockchain bietet ein verteiltes Register, das Rückverfolgbarkeit und Datenintegrität gewährleistet.",
      en: "Blockchain provides a distributed ledger ensuring traceability and data integrity."
    }
  },
  {
    question: "Ce este telematics în flota de transport?",
    options: ["Telefoane mobile", "Sisteme de urmărire GPS și monitorizare a vehiculelor", "Televiziune în cabină", "Telefoane fixe"],
    correctIndex: 1,
    explanation: {
      ro: "Telematics combină GPS, senzori și comunicații pentru monitorizarea flotei în timp real.",
      de: "Telematik kombiniert GPS, Sensoren und Kommunikation zur Echtzeit-Flottenüberwachung.",
      en: "Telematics combines GPS, sensors and communications for real-time fleet monitoring."
    }
  },
  {
    question: "Care este scopul principal al AI (Inteligența Artificială) în transport?",
    options: ["Înlocuirea completă a oamenilor", "Optimizarea rutelor, predicția cererii și automatizarea deciziilor", "Doar pentru divertisment", "Creșterea prețurilor"],
    correctIndex: 1,
    explanation: {
      ro: "AI optimizează operațiunile prin analiza datelor și automatizarea deciziilor repetitive.",
      de: "KI optimiert Abläufe durch Datenanalyse und Automatisierung repetitiver Entscheidungen.",
      en: "AI optimizes operations through data analysis and automation of repetitive decisions."
    }
  },
  {
    question: "Ce este Machine Learning în context logistic?",
    options: ["Mașini care învață să conducă", "Algoritmi care învață din date pentru predicții", "Repararea automată a vehiculelor", "Învățarea șoferilor"],
    correctIndex: 1,
    explanation: {
      ro: "Machine Learning analizează date istorice pentru a prezice cererea, prețurile și timpii de livrare.",
      de: "Machine Learning analysiert historische Daten zur Vorhersage von Nachfrage, Preisen und Lieferzeiten.",
      en: "Machine Learning analyzes historical data to predict demand, prices and delivery times."
    }
  },
  {
    question: "Ce înseamnă Big Data pentru expeditori?",
    options: ["Date foarte mari fizic", "Analiza volumelor mari de date pentru insights operaționale", "Doar date confidențiale", "Date vechi"],
    correctIndex: 1,
    explanation: {
      ro: "Big Data permite analiza pattern-urilor din volume mari de date pentru optimizare.",
      de: "Big Data ermöglicht die Analyse von Mustern aus großen Datenmengen zur Optimierung.",
      en: "Big Data enables pattern analysis from large data volumes for optimization."
    }
  },
  {
    question: "Care este principalul risc de cybersecurity în transport?",
    options: ["Virușii biologici", "Atacuri ransomware și furt de date", "Defectarea motoarelor", "Vremea rea"],
    correctIndex: 1,
    explanation: {
      ro: "Atacurile ransomware pot paraliza operațiunile și compromite datele sensibile ale clienților.",
      de: "Ransomware-Angriffe können Betriebsabläufe lahmlegen und sensible Kundendaten gefährden.",
      en: "Ransomware attacks can paralyze operations and compromise sensitive customer data."
    }
  },
  {
    question: "Ce este un Digital Twin în logistică?",
    options: ["Un șofer virtual", "Replica digitală a unui sistem fizic pentru simulări", "Două ecrane", "Backup de date"],
    correctIndex: 1,
    explanation: {
      ro: "Digital Twin permite testarea scenariilor pe o replică virtuală înainte de implementare reală.",
      de: "Digital Twin ermöglicht das Testen von Szenarien an einer virtuellen Replik vor der realen Umsetzung.",
      en: "Digital Twin allows testing scenarios on a virtual replica before real implementation."
    }
  },
  // German Questions (11-20)
  {
    question: "Was ist ein WMS (Warehouse Management System)?",
    options: ["Ein Wettersystem", "Software zur Verwaltung von Lageroperationen", "Ein Fahrzeugsystem", "Ein Finanzsystem"],
    correctIndex: 1,
    explanation: {
      ro: "WMS gestionează operațiunile de depozit: recepție, stocare, picking și expediere.",
      de: "WMS verwaltet Lageroperationen: Wareneingang, Lagerung, Kommissionierung und Versand.",
      en: "WMS manages warehouse operations: receiving, storage, picking and shipping."
    }
  },
  {
    question: "Welchen Vorteil bietet Cloud Computing für Spediteure?",
    options: ["Nur Datenspeicherung", "Skalierbare IT-Ressourcen ohne eigene Server-Infrastruktur", "Schlechtes Wetter", "Keine Vorteile"],
    correctIndex: 1,
    explanation: {
      ro: "Cloud computing oferă resurse IT scalabile și accesibile de oriunde, fără investiții în hardware.",
      de: "Cloud Computing bietet skalierbare, überall zugängliche IT-Ressourcen ohne Hardware-Investitionen.",
      en: "Cloud computing provides scalable, accessible IT resources without hardware investments."
    }
  },
  {
    question: "Was bedeutet IoT (Internet of Things) im Transport?",
    options: ["Internationale Organisation für Transport", "Vernetzte Sensoren und Geräte für Echtzeit-Daten", "Ein Telefonnetz", "Internet für alle"],
    correctIndex: 1,
    explanation: {
      ro: "IoT conectează senzori pe vehicule și mărfuri pentru monitorizare continuă.",
      de: "IoT verbindet Sensoren an Fahrzeugen und Gütern für kontinuierliche Überwachung.",
      en: "IoT connects sensors on vehicles and goods for continuous monitoring."
    }
  },
  {
    question: "Wie kann Robotic Process Automation (RPA) Spediteuren helfen?",
    options: ["Roboter fahren LKW", "Automatisierung repetitiver Büroaufgaben wie Dateneingabe", "Reinigung der Büros", "Keine Hilfe"],
    correctIndex: 1,
    explanation: {
      ro: "RPA automatizează sarcini repetitive precum introducerea datelor, eliberând timp pentru activități valoroase.",
      de: "RPA automatisiert repetitive Aufgaben wie Dateneingabe und schafft Zeit für wertschöpfende Aktivitäten.",
      en: "RPA automates repetitive tasks like data entry, freeing time for value-added activities."
    }
  },
  {
    question: "Was ist ein digitaler Frachtbrief?",
    options: ["Ein Brief per E-Mail", "Elektronische Version traditioneller Transportdokumente mit rechtlicher Gültigkeit", "Ein Werbebrief", "Ein Beschwerdeschreiben"],
    correctIndex: 1,
    explanation: {
      ro: "Frahtbrieful digital are valabilitate legală și accelerează procesele documentare.",
      de: "Der digitale Frachtbrief hat Rechtsgültigkeit und beschleunigt Dokumentenprozesse.",
      en: "The digital consignment note has legal validity and accelerates document processes."
    }
  },
  {
    question: "Welche Rolle spielt EDI (Electronic Data Interchange) in der Logistik?",
    options: ["Entertainment während der Fahrt", "Standardisierter elektronischer Datenaustausch zwischen Unternehmen", "Ein Radiosender", "Keine Rolle"],
    correctIndex: 1,
    explanation: {
      ro: "EDI permite schimbul automat de date între parteneri de afaceri în formate standardizate.",
      de: "EDI ermöglicht den automatischen Datenaustausch zwischen Geschäftspartnern in standardisierten Formaten.",
      en: "EDI enables automatic data exchange between business partners in standardized formats."
    }
  },
  {
    question: "Was ist Predictive Maintenance?",
    options: ["Reparatur nach Ausfall", "Vorausschauende Wartung basierend auf Datenanalyse", "Nie wartend", "Zufällige Wartung"],
    correctIndex: 1,
    explanation: {
      ro: "Mentenanța predictivă folosește date pentru a anticipa defecțiunile înainte să apară.",
      de: "Predictive Maintenance nutzt Daten, um Ausfälle vorherzusagen, bevor sie auftreten.",
      en: "Predictive maintenance uses data to anticipate failures before they occur."
    }
  },
  {
    question: "Wie verbessert Digitalisierung die Kundenkommunikation?",
    options: ["Gar nicht", "Echtzeit-Tracking, automatische Updates, Self-Service-Portale", "Nur Telefonanrufe", "Weniger Kommunikation"],
    correctIndex: 1,
    explanation: {
      ro: "Digitalizarea oferă transparență prin tracking în timp real și portaluri self-service.",
      de: "Digitalisierung bietet Transparenz durch Echtzeit-Tracking und Self-Service-Portale.",
      en: "Digitalization provides transparency through real-time tracking and self-service portals."
    }
  },
  {
    question: "Was ist ein wichtiger Aspekt bei der digitalen Transformation?",
    options: ["Nur neue Software kaufen", "Change Management und Mitarbeiterschulung", "Alles gleich lassen", "Nur Kosten reduzieren"],
    correctIndex: 1,
    explanation: {
      ro: "Transformarea digitală necesită gestionarea schimbării și instruirea angajaților.",
      de: "Digitale Transformation erfordert Change Management und Mitarbeiterschulung.",
      en: "Digital transformation requires change management and employee training."
    }
  },
  {
    question: "Welche Technologie ermöglicht autonome LKW?",
    options: ["Nur GPS", "Kombination aus Sensoren, KI, Lidar und Kameras", "Nur Radar", "Nur Kameras"],
    correctIndex: 1,
    explanation: {
      ro: "Camioanele autonome folosesc o combinație de senzori, AI, Lidar și camere pentru navigare.",
      de: "Autonome LKW nutzen eine Kombination aus Sensoren, KI, Lidar und Kameras zur Navigation.",
      en: "Autonomous trucks use a combination of sensors, AI, Lidar and cameras for navigation."
    }
  },
  // English Questions (21-30)
  {
    question: "What is the main purpose of a Transport Management System (TMS)?",
    options: ["Only GPS tracking", "End-to-end management of transport operations", "Just invoicing", "Only driver management"],
    correctIndex: 1,
    explanation: {
      ro: "TMS gestionează întregul ciclu de transport: planificare, execuție, monitorizare și facturare.",
      de: "TMS verwaltet den gesamten Transportzyklus: Planung, Ausführung, Überwachung und Abrechnung.",
      en: "TMS manages the entire transport cycle: planning, execution, monitoring and billing."
    }
  },
  {
    question: "What is visibility in digital freight forwarding?",
    options: ["Seeing the truck on the road", "Real-time tracking and status updates throughout the supply chain", "Looking at documents", "Visibility of warehouse"],
    correctIndex: 1,
    explanation: {
      ro: "Vizibilitatea înseamnă tracking în timp real și actualizări de status pe întregul lanț de aprovizionare.",
      de: "Sichtbarkeit bedeutet Echtzeit-Tracking und Statusupdates entlang der gesamten Lieferkette.",
      en: "Visibility means real-time tracking and status updates throughout the supply chain."
    }
  },
  {
    question: "How does OCR (Optical Character Recognition) help in logistics?",
    options: ["Reading books", "Automatically extracting data from documents like CMRs and invoices", "Taking photos", "Creating graphics"],
    correctIndex: 1,
    explanation: {
      ro: "OCR extrage automat date din documente, reducând introducerea manuală și erorile.",
      de: "OCR extrahiert automatisch Daten aus Dokumenten und reduziert manuelle Eingabe und Fehler.",
      en: "OCR automatically extracts data from documents, reducing manual entry and errors."
    }
  },
  {
    question: "What is the benefit of digital load matching platforms?",
    options: ["Only showing prices", "Connecting shippers with carriers in real-time for optimal matching", "Replacing all brokers", "Just advertising"],
    correctIndex: 1,
    explanation: {
      ro: "Platformele digitale conectează încărcători și transportatori în timp real pentru potrivire optimă.",
      de: "Digitale Plattformen verbinden Verlader und Spediteure in Echtzeit für optimales Matching.",
      en: "Digital platforms connect shippers and carriers in real-time for optimal matching."
    }
  },
  {
    question: "What does real-time ETA mean?",
    options: ["Estimated Time of Arrival updated continuously based on live data", "Fixed arrival time", "Estimated Tax Amount", "Expected Transport Agreement"],
    correctIndex: 0,
    explanation: {
      ro: "ETA în timp real este timpul estimat de sosire actualizat continuu pe baza datelor live.",
      de: "Echtzeit-ETA ist die geschätzte Ankunftszeit, die kontinuierlich basierend auf Live-Daten aktualisiert wird.",
      en: "Real-time ETA is the estimated time of arrival continuously updated based on live data."
    }
  },
  {
    question: "What is the role of geofencing in transport?",
    options: ["Building fences", "Creating virtual boundaries for automatic triggers and notifications", "Marking territories", "Blocking roads"],
    correctIndex: 1,
    explanation: {
      ro: "Geofencing creează granițe virtuale care declanșează automat notificări la intrare/ieșire.",
      de: "Geofencing erstellt virtuelle Grenzen, die bei Ein-/Austritt automatisch Benachrichtigungen auslösen.",
      en: "Geofencing creates virtual boundaries that automatically trigger notifications on entry/exit."
    }
  },
  {
    question: "How does electronic proof of delivery (ePOD) work?",
    options: ["Paper signature", "Digital capture of delivery confirmation with timestamp and signature", "Email confirmation only", "Phone call"],
    correctIndex: 1,
    explanation: {
      ro: "ePOD captează digital confirmarea livrării cu timestamp, semnătură și eventual fotografii.",
      de: "ePOD erfasst digital die Lieferbestätigung mit Zeitstempel, Unterschrift und eventuell Fotos.",
      en: "ePOD digitally captures delivery confirmation with timestamp, signature and possibly photos."
    }
  },
  {
    question: "What is the main challenge of digital transformation in logistics?",
    options: ["Too much technology", "Integration of legacy systems and change management", "Not enough computers", "Too fast internet"],
    correctIndex: 1,
    explanation: {
      ro: "Integrarea sistemelor vechi și gestionarea schimbării sunt cele mai mari provocări.",
      de: "Integration von Altsystemen und Change Management sind die größten Herausforderungen.",
      en: "Integration of legacy systems and change management are the biggest challenges."
    }
  },
  {
    question: "What security measure is essential for digital logistics systems?",
    options: ["No password needed", "Multi-factor authentication and encryption", "Simple passwords", "Open access"],
    correctIndex: 1,
    explanation: {
      ro: "Autentificarea multi-factor și criptarea sunt esențiale pentru securitatea datelor.",
      de: "Multi-Faktor-Authentifizierung und Verschlüsselung sind essentiell für die Datensicherheit.",
      en: "Multi-factor authentication and encryption are essential for data security."
    }
  },
  {
    question: "What does digital freight forwarding enable for small businesses?",
    options: ["Nothing special", "Access to advanced tools and global networks previously only available to large companies", "Higher costs", "More paperwork"],
    correctIndex: 1,
    explanation: {
      ro: "Digitalizarea oferă accesul IMM-urilor la instrumente și rețele disponibile anterior doar marilor companii.",
      de: "Digitalisierung ermöglicht KMU Zugang zu Tools und Netzwerken, die zuvor nur Großunternehmen zur Verfügung standen.",
      en: "Digitalization gives SMBs access to tools and networks previously only available to large companies."
    }
  }
];
