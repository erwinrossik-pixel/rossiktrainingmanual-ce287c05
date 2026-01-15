import { QuizQuestion } from '../quizData';

export const highValueGoodsQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce se consideră 'marfă de valoare mare' în transport?",
    options: ["Orice marfă", "Mărfuri cu valoare ridicată ce necesită securitate sporită", "Doar aur și bijuterii", "Mărfuri grele"],
    correctIndex: 1,
    explanation: "Mărfurile de valoare mare includ electronice, farmaceutice, bijuterii și alte bunuri valoroase."
  },
  {
    question: "Care este prima măsură de securitate pentru transport de valoare mare?",
    options: ["Viteza maximă", "Verificarea antecedentelor șoferului și a vehiculului", "Ascunderea destinației", "Fără măsuri speciale"],
    correctIndex: 1,
    explanation: "Verificarea antecedentelor șoferului și vehiculului asigură integritatea transportului."
  },
  {
    question: "Ce tip de asigurare este necesară pentru mărfuri de valoare mare?",
    options: ["Asigurare standard", "Asigurare all-risk cu limită ridicată", "Fără asigurare", "Doar asigurare de viață"],
    correctIndex: 1,
    explanation: "Asigurarea all-risk cu limită ridicată acoperă toate riscurile pentru mărfuri valoroase."
  },
  {
    question: "Ce înseamnă 'cargo theft hotspot'?",
    options: ["Depozit fierbinte", "Zonă cu risc ridicat de furt de marfă", "Parcare caldă", "Punct de control vamal"],
    correctIndex: 1,
    explanation: "Cargo theft hotspot-urile sunt zone geografice cu incidență mare de furturi."
  },
  {
    question: "Care este rolul sigiliilor de înaltă securitate?",
    options: ["Doar estetice", "Prevenirea și detectarea accesului neautorizat la marfă", "Reducerea greutății", "Identificarea șoferului"],
    correctIndex: 1,
    explanation: "Sigiliile de înaltă securitate previn și detectează tentativele de acces neautorizat."
  },
  {
    question: "Ce echipament de securitate ar trebui să aibă un vehicul pentru mărfuri valoroase?",
    options: ["Nimic special", "GPS tracker, alarme, încuietori suplimentare, cameră video", "Doar încuietoare standard", "Radio CB"],
    correctIndex: 1,
    explanation: "Vehiculele pentru mărfuri valoroase necesită GPS, alarme și sisteme de supraveghere."
  },
  {
    question: "Ce procedură se recomandă pentru soferiti în caz de suspiciune de urmărire?",
    options: ["Să oprească imediat", "Să nu oprească, să contacteze dispeceratul și poliția", "Să accelereze la maximum", "Să ignore"],
    correctIndex: 1,
    explanation: "Șoferii nu trebuie să oprească, ci să contacteze imediat dispeceratul și autoritățile."
  },
  {
    question: "Ce este 'in-transit visibility' pentru mărfuri valoroase?",
    options: ["Ferestre mari în camion", "Monitorizare continuă a poziției și statusului în timp real", "Vedere bună a șoferului", "Fără urmărire"],
    correctIndex: 1,
    explanation: "In-transit visibility oferă monitorizare continuă a poziției și condițiilor transportului."
  },
  {
    question: "Ce documente speciale necesită transportul de bijuterii?",
    options: ["Doar CMR", "CMR, certificat de origine, polița de asigurare, declarație de valoare", "Fără documente", "Doar factura"],
    correctIndex: 1,
    explanation: "Bijuteriile necesită documentație completă: CMR, certificat, asigurare și declarație."
  },
  {
    question: "Care este cel mai mare risc în transportul produselor farmaceutice valoroase?",
    options: ["Ploaia", "Furtul organizat și falsificarea", "Traficul", "Costul combustibilului"],
    correctIndex: 1,
    explanation: "Produsele farmaceutice valoroase sunt vizate de grupări de crimă organizată."
  },
  // German Questions (11-20)
  {
    question: "Was ist ein Wertbehälter in der Logistik?",
    options: ["Ein Koffer", "Spezieller Container mit erhöhter Sicherheit für wertvolle Güter", "Ein normaler Container", "Ein Tresor für Dokumente"],
    correctIndex: 1,
    explanation: "Ein Wertbehälter ist ein spezieller Container mit erhöhter Sicherheit für wertvolle Güter."
  },
  {
    question: "Welche Sicherheitsmaßnahme ist bei Elektroniktransporten besonders wichtig?",
    options: ["Keine", "Versiegelte, blickdichte Fahrzeuge ohne Firmenlogo", "Große Werbung am Fahrzeug", "Offene Ladefläche"],
    correctIndex: 1,
    explanation: "Fahrzeuge für Elektronik sollten versiegelt und ohne sichtbares Logo sein."
  },
  {
    question: "Was bedeutet 'covert routing' bei Wertguttransporten?",
    options: ["Direkte Route", "Geheimhaltung der Route und Zeitplanung", "Schnellste Route", "Billigste Route"],
    correctIndex: 1,
    explanation: "Covert Routing bedeutet Geheimhaltung von Route und Zeitplan."
  },
  {
    question: "Welche Pause-Strategie ist für Wertguttransporte empfohlen?",
    options: ["Lange Pausen an Raststätten", "Kurze Pausen an sicheren, beleuchteten Orten mit Überwachung", "Keine Pausen", "Pausen nur nachts"],
    correctIndex: 1,
    explanation: "Pausen bei Werttransporten sollten an sicheren, überwachten Orten stattfinden."
  },
  {
    question: "Was ist eine 'Dual Driver' Strategie?",
    options: ["Zwei Lenkräder", "Zwei Fahrer für kontinuierliches Fahren und erhöhte Sicherheit", "Fahrer und Beifahrer", "Ersatzfahrer im Büro"],
    correctIndex: 1,
    explanation: "Dual Driver nutzt zwei Fahrer für kontinuierliches Fahren und erhöhte Sicherheit."
  },
  {
    question: "Welche Versicherungssumme ist typisch für Elektroniktransporte?",
    options: ["Standard €50.000", "Erhöhte Summen von €200.000 bis zu mehreren Millionen", "Keine Versicherung nötig", "Nur €10.000"],
    correctIndex: 1,
    explanation: "Elektroniktransport benötigt hohe Versicherungssummen bis zu mehreren Millionen."
  },
  {
    question: "Was sollte ein Fahrer tun, wenn er einen Überfall vermutet?",
    options: ["Konfrontieren", "Nicht anhalten, Alarm auslösen, Polizei und Zentrale kontaktieren", "Weiterschlafen", "Ware übergeben"],
    correctIndex: 1,
    explanation: "Fahrer sollten nicht anhalten, sondern Alarm auslösen und Behörden kontaktieren."
  },
  {
    question: "Welche Technologie hilft bei der Wiederauffindung gestohlener Güter?",
    options: ["Nur Papiere", "Versteckte GPS-Tracker in der Ware selbst", "Keine Technologie", "Nur Fotos"],
    correctIndex: 1,
    explanation: "Versteckte GPS-Tracker in der Ware helfen bei der Wiederbeschaffung gestohlener Güter."
  },
  {
    question: "Was ist bei der Übergabe von Wertgütern besonders wichtig?",
    options: ["Schnelle Übergabe", "Identitätsprüfung des Empfängers, dokumentierte Übergabe", "Keine Kontrolle nötig", "Nur Unterschrift"],
    correctIndex: 1,
    explanation: "Übergabe von Wertgütern erfordert Identitätsprüfung und vollständige Dokumentation."
  },
  {
    question: "Welche Rolle spielt die Personalauswahl bei Wertguttransporten?",
    options: ["Keine Rolle", "Kritisch - strenge Hintergrundprüfungen und Schulungen", "Nur Führerscheinprüfung", "Alter ist wichtig"],
    correctIndex: 1,
    explanation: "Personalauswahl für Werttransport erfordert strenge Hintergrundprüfungen."
  },
  // English Questions (21-30)
  {
    question: "What is TAPA (Transported Asset Protection Association)?",
    options: ["A transport union", "Global security standards organization for supply chain security", "A pricing association", "An insurance company"],
    correctIndex: 1,
    explanation: "TAPA is the global organization for security standards in the supply chain."
  },
  {
    question: "What does FSR (Facility Security Requirements) certification indicate?",
    options: ["Fast shipping", "Warehouse meets TAPA security standards for high-value goods", "Fire safety only", "Financial stability"],
    correctIndex: 1,
    explanation: "FSR certification indicates warehouse meets TAPA standards for valuable goods."
  },
  {
    question: "What is 'cargo at rest' vulnerability?",
    options: ["Cargo is safe when resting", "Highest theft risk when vehicles are parked or goods are in storage", "Only moving cargo at risk", "No vulnerability exists"],
    correctIndex: 1,
    explanation: "Highest theft risk is when vehicles are parked or goods are in storage."
  },
  {
    question: "What is the purpose of a panic button in high-value transport?",
    options: ["For comfort", "Silent alarm to alert security center without alerting thieves", "Music control", "Air conditioning"],
    correctIndex: 1,
    explanation: "Panic button silently alerts security center without alerting thieves."
  },
  {
    question: "What documentation should accompany pharmaceutical shipments?",
    options: ["Only invoice", "GDP documentation, temperature logs, chain of custody, packing list", "No documentation needed", "Just CMR"],
    correctIndex: 1,
    explanation: "Pharmaceutical shipments require GDP documentation, temperature logs and chain of custody."
  },
  {
    question: "What is a secure parking facility?",
    options: ["Any parking lot", "Fenced, lit, monitored parking with access control for trucks with high-value cargo", "Free parking", "Roadside parking"],
    correctIndex: 1,
    explanation: "Secure parking has fencing, lighting, surveillance and access control."
  },
  {
    question: "How should high-value goods be loaded for security?",
    options: ["At the back for easy access", "Deep inside the vehicle, with other goods blocking access", "On top of other goods", "Loose loading"],
    correctIndex: 1,
    explanation: "Valuable goods are loaded deep in the vehicle, with other goods blocking access."
  },
  {
    question: "What is the role of intelligence sharing in cargo theft prevention?",
    options: ["Not useful", "Industry collaboration to share theft patterns and hotspot information", "Competitors shouldn't share", "Only for police"],
    correctIndex: 1,
    explanation: "Industry collaboration to share theft information improves security."
  },
  {
    question: "What training should drivers of high-value goods receive?",
    options: ["No special training", "Security awareness, evasive driving, emergency procedures, communication protocols", "Only GPS training", "Basic driving only"],
    correctIndex: 1,
    explanation: "Drivers for valuable goods need security training and emergency procedures."
  },
  {
    question: "What should be the response time for security alerts?",
    options: ["Next day", "Immediate - within minutes for tracking center and authorities", "Within an hour", "When convenient"],
    correctIndex: 1,
    explanation: "Response to security alerts must be immediate, within minutes."
  },
  // Glossary Questions - Romanian (31-33)
  {
    question: "Ce este TAPA TSR?",
    options: ["O companie de transport", "Standard de securitate pentru transportul mărfurilor valoroase", "Un tip de sigiliu", "O asigurare"],
    correctIndex: 1,
    explanation: "TAPA TSR (Trucking Security Requirements) sunt standardele globale pentru securitatea transportului rutier de mărfuri valoroase."
  },
  {
    question: "Ce înseamnă 'Hard-sided Trailer' pentru transport valoros?",
    options: ["Remorcă dură", "Remorcă cu pereți solizi metalici pentru securitate sporită", "Remorcă frigoriferă", "Remorcă deschisă"],
    correctIndex: 1,
    explanation: "Hard-sided Trailer este o remorcă cu pereți metalici solizi care oferă protecție suplimentară împotriva efracției."
  },
  {
    question: "Ce este un 'Panic Button' în vehiculele pentru mărfuri valoroase?",
    options: ["Buton de claxon", "Buton de alarmă silențioasă care alertează centrul de securitate", "Buton de aer condiționat", "Buton de oprire"],
    correctIndex: 1,
    explanation: "Panic Button este un buton de alarmă silențioasă care alertează centrul de monitorizare fără a alerta potențialii infractori."
  },
  // Glossary Questions - German (34-36)
  {
    question: "Was bedeutet 'Cargo at Rest' Risiko?",
    options: ["Ruhende Fracht", "Höchstes Diebstahlrisiko bei geparkten Fahrzeugen oder Lagergütern", "Fracht in Bewegung", "Keine Gefahr"],
    correctIndex: 1,
    explanation: "Cargo at Rest bezeichnet das höchste Diebstahlrisiko, wenn Fahrzeuge geparkt sind oder Güter gelagert werden."
  },
  {
    question: "Was ist eine 'Secure Parking Facility'?",
    options: ["Normaler Parkplatz", "Eingezäunter, beleuchteter, überwachter Parkplatz mit Zugangskontrolle", "Kostenloser Parkplatz", "Straßenrand"],
    correctIndex: 1,
    explanation: "Eine Secure Parking Facility ist ein gesicherter Parkplatz mit Zaun, Beleuchtung, Überwachung und Zugangskontrolle."
  },
  {
    question: "Was ist 'Covert Routing'?",
    options: ["Schnellste Route", "Geheimhaltung der Transportroute und des Zeitplans", "Kürzeste Route", "Öffentliche Route"],
    correctIndex: 1,
    explanation: "Covert Routing bedeutet die Geheimhaltung der Transportroute und des Zeitplans zum Schutz wertvoller Güter."
  },
  // Glossary Questions - English (37-39)
  {
    question: "What is TAPA FSR certification?",
    options: ["A transport license", "Facility Security Requirements for warehouses handling high-value goods", "A driving permit", "An insurance policy"],
    correctIndex: 1,
    explanation: "TAPA FSR (Facility Security Requirements) certifies that warehouses meet global security standards for storing high-value goods."
  },
  {
    question: "What is GDP (Good Distribution Practice) for pharmaceuticals?",
    options: ["Economic indicator", "Standards ensuring pharmaceutical quality during storage and transport", "A pricing method", "A logistics company"],
    correctIndex: 1,
    explanation: "GDP ensures pharmaceutical products maintain quality and integrity throughout storage and transportation."
  },
  {
    question: "What is 'Chain of Custody' documentation?",
    options: ["Prisoner transport", "Unbroken record of who handled goods from origin to destination", "Vehicle maintenance log", "Driver schedule"],
    correctIndex: 1,
    explanation: "Chain of Custody documents every person who handled the goods, ensuring accountability and traceability."
  },
  // Additional Glossary Questions - Romanian (40-42)
  {
    question: "Ce înseamnă In-transit Visibility?",
    options: ["Ferestre mari", "Monitorizare continuă a poziției și statusului în timpul transportului", "Vizibilitate pe drum", "Vedere bună"],
    correctIndex: 1,
    explanation: "In-transit Visibility oferă monitorizare continuă a poziției, condițiilor și statusului mărfii pe tot parcursul transportului."
  },
  {
    question: "Ce este Dual Driver Strategy?",
    options: ["Două volane", "Utilizarea a doi șoferi pentru continuitate și securitate sporită", "Șoferi gemeni", "Conducere dublă"],
    correctIndex: 1,
    explanation: "Dual Driver Strategy folosește doi șoferi pentru a asigura transport continuu și securitate sporită."
  },
  {
    question: "Ce înseamnă Cargo Theft Hotspot?",
    options: ["Marfă fierbinte", "Zonă geografică cu incidență mare de furturi de marfă", "Punct de încărcare", "Parcare caldă"],
    correctIndex: 1,
    explanation: "Cargo Theft Hotspot este o zonă geografică identificată ca având risc crescut de furt de marfă."
  },
  // Additional Glossary Questions - German (43-45)
  {
    question: "Was ist ein 'High Security Seal'?",
    options: ["Ein Aquariumsiegel", "Hochsicherheitssiegel gemäß ISO 17712 Standard", "Ein normales Siegel", "Ein Aufkleber"],
    correctIndex: 1,
    explanation: "High Security Seals sind Hochsicherheitssiegel nach ISO 17712, die Manipulationsversuche sichtbar machen."
  },
  {
    question: "Was bedeutet 'Intelligence Sharing' im Sicherheitsbereich?",
    options: ["IQ-Austausch", "Austausch von Informationen über Diebstahlmuster zwischen Unternehmen", "Schulung", "Datenverkauf"],
    correctIndex: 1,
    explanation: "Intelligence Sharing ist der Austausch von Informationen über Diebstahlmuster und Hotspots zur gemeinsamen Prävention."
  },
  {
    question: "Was ist eine 'Geofence Alert' bei Werttransporten?",
    options: ["Ein Zaun", "Automatische Warnung bei Verlassen definierter Routen oder Zonen", "Ein Alarm", "GPS-Signal"],
    correctIndex: 1,
    explanation: "Geofence Alerts warnen automatisch, wenn ein Fahrzeug definierte Routen oder Zonen verlässt."
  },
  // Additional Glossary Questions - English (46-48)
  {
    question: "What is 'Vetted Personnel' in high-value transport?",
    options: ["Veterinarians", "Staff who have passed background security checks", "Medical personnel", "Trained animals"],
    correctIndex: 1,
    explanation: "Vetted Personnel are employees who have undergone thorough background checks and security screening."
  },
  {
    question: "What is 'Tamper-Evident' packaging?",
    options: ["Temperature packaging", "Packaging that shows visible signs if opened or manipulated", "Waterproof packaging", "Decorative packaging"],
    correctIndex: 1,
    explanation: "Tamper-Evident packaging shows clear visual signs if it has been opened, accessed or manipulated."
  },
  {
    question: "What is 'Risk Corridor' in cargo security?",
    options: ["A dangerous hallway", "Route sections identified as high-risk for theft or attack", "Insurance term", "Legal term"],
    correctIndex: 1,
    explanation: "Risk Corridors are route sections identified as having higher risk of cargo theft, requiring enhanced security measures."
  }
];
