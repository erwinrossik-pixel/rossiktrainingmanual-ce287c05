import { QuizQuestion } from '../quizData';

export const intermodalQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce înseamnă transport intermodal?",
    options: ["Transport doar cu camion", "Utilizarea a cel puțin două moduri de transport fără manipularea mărfii", "Transport internațional", "Transport expres"],
    correctIndex: 1,
    explanation: "Transportul intermodal combină moduri diferite (rutier, feroviar, naval) fără reîncărcarea mărfii."
  },
  {
    question: "Ce este o unitate de încărcare intermodală (UTI)?",
    options: ["Un camion special", "Container, swap body sau semiremorcă adaptată pentru transfer între moduri", "O macara", "Un depozit"],
    correctIndex: 1,
    explanation: "UTI sunt containere, swap body-uri sau semiremorci proiectate pentru transfer ușor între moduri."
  },
  {
    question: "Care este principalul avantaj al transportului intermodal?",
    options: ["Cel mai rapid", "Reducerea emisiilor CO2 și a costurilor pe distanțe lungi", "Cel mai ieftin întotdeauna", "Nu are avantaje"],
    correctIndex: 1,
    explanation: "Intermodalul reduce emisiile CO2 și costurile, mai ales pe distanțe lungi."
  },
  {
    question: "Ce este un terminal intermodal?",
    options: ["O gară de pasageri", "Punct de transfer între moduri de transport cu echipament de manipulare", "Un aeroport", "Un port maritim doar"],
    correctIndex: 1,
    explanation: "Terminalul intermodal este locul unde UTI sunt transferate între diferite moduri de transport."
  },
  {
    question: "Ce înseamnă RoLa (Rollende Landstraße)?",
    options: ["Un drum cu role", "Transport de camioane complete pe tren", "Un tip de remorcă", "O autostradă specială"],
    correctIndex: 1,
    explanation: "RoLa transportă camioane complete cu șofer pe tren, mai ales prin tuneluri alpine."
  },
  {
    question: "Care este lungimea standard a unui container maritim?",
    options: ["10 și 15 picioare", "20 și 40 picioare", "25 și 50 picioare", "Nu există standard"],
    correctIndex: 1,
    explanation: "Containerele maritime standard sunt de 20 picioare (TEU) și 40 picioare (FEU)."
  },
  {
    question: "Ce este un swap body?",
    options: ["Corpul unui camion", "Caroserie demontabilă standardizată pentru transfer între moduri", "O remorcă standard", "Un container refrigerat"],
    correctIndex: 1,
    explanation: "Swap body este o caroserie demontabilă cu dimensiuni europene pentru transfer intermodal."
  },
  {
    question: "Ce este huckepack în transport?",
    options: ["Un joc", "Transportul semiremorcilor pe vagoane de tren speciale", "Un tip de container", "O metodă de ambalare"],
    correctIndex: 1,
    explanation: "Huckepack înseamnă transportul semiremorcilor pe vagoane de tren joase speciale."
  },
  {
    question: "Care sunt principalele coridoare intermodale în Europa?",
    options: ["Doar autostrăzi", "Rețeaua TEN-T cu coridoare feroviare prioritare", "Doar rute maritime", "Nu există coridoare"],
    correctIndex: 1,
    explanation: "Rețeaua TEN-T definește coridoare europene prioritare pentru transport intermodal."
  },
  {
    question: "Ce document însoțește transportul intermodal maritim?",
    options: ["Doar CMR", "Bill of Lading (B/L) + CMR pentru segmentul rutier", "Doar pașaport", "Fără documente"],
    correctIndex: 1,
    explanation: "Transportul maritim folosește Bill of Lading, iar segmentul rutier necesită CMR."
  },
  // German Questions (11-20)
  {
    question: "Was ist der Vorteil von kombiniertem Verkehr (KV)?",
    options: ["Immer schneller", "Umweltfreundlicher und oft kostengünstiger auf langen Strecken", "Nur für Gefahrgut", "Keine Vorteile"],
    correctIndex: 1,
    explanation: "Kombinierter Verkehr ist umweltfreundlicher und oft wirtschaftlicher auf langen Strecken."
  },
  {
    question: "Was bedeutet 'last mile' im intermodalen Transport?",
    options: ["Die letzte Meile des Zuges", "Straßentransport vom Terminal zum endgültigen Ziel", "Die erste Meile", "Die längste Strecke"],
    correctIndex: 1,
    explanation: "Last Mile ist der Straßentransport vom Terminal zum endgültigen Bestimmungsort."
  },
  {
    question: "Welche Gewichtsgrenze gilt für intermodale 44t-Transporte?",
    options: ["40t überall", "44t im kombinierten Verkehr in vielen EU-Ländern erlaubt", "50t immer", "Keine Limits"],
    correctIndex: 1,
    explanation: "Kombinierter Verkehr erlaubt 44t in vielen EU-Ländern, gegenüber 40t Standard."
  },
  {
    question: "Was ist ein Reach Stacker?",
    options: ["Ein Kran", "Spezialfahrzeug zum Umschlag von Containern im Terminal", "Ein Gabelstapler", "Ein LKW-Typ"],
    correctIndex: 1,
    explanation: "Ein Reach Stacker ist ein Spezialfahrzeug für den Containerumschlag im Terminal."
  },
  {
    question: "Welche Dokumente werden beim kombinierten Verkehr benötigt?",
    options: ["Nur CMR", "CMR, CIM-Frachtbrief für Schiene, ggf. Bill of Lading", "Keine Dokumente", "Nur Rechnung"],
    correctIndex: 1,
    explanation: "Kombinierter Verkehr erfordert CMR für Straße, CIM für Schiene und B/L für See."
  },
  {
    question: "Was ist ein Ganzzug im intermodalen Transport?",
    options: ["Ein kleiner Zug", "Ein kompletter Zug für einen Kunden oder eine Route ohne Rangierbewegungen", "Ein Personenzug", "Ein defekter Zug"],
    correctIndex: 1,
    explanation: "Ein Ganzzug ist ein kompletter Zug für einen Kunden oder eine Route ohne Rangieren."
  },
  {
    question: "Welche Vorteile bietet der Modal Split mit Schiene?",
    options: ["Keine", "CO2-Reduktion, Entlastung der Straßen, oft günstigere Langstreckenkosten", "Nur schneller", "Nur teurer"],
    correctIndex: 1,
    explanation: "Schienennutzung reduziert CO2, entlastet Straßen und kann wirtschaftlicher sein."
  },
  {
    question: "Was ist eine Umschlaganlage?",
    options: ["Ein Büro", "Einrichtung zum Transfer von Ladeeinheiten zwischen Verkehrsträgern", "Ein Restaurant", "Eine Tankstelle"],
    correctIndex: 1,
    explanation: "Eine Umschlaganlage ist eine Einrichtung zum Transfer von Ladeeinheiten zwischen Verkehrsträgern."
  },
  {
    question: "Welche Rolle spielt die Digitalisierung im intermodalen Transport?",
    options: ["Keine", "Nahtlose Buchung, Tracking und Dokumentation über alle Modi", "Nur für E-Mail", "Verlangsamt den Prozess"],
    correctIndex: 1,
    explanation: "Digitalisierung ermöglicht nahtlose Buchung, Tracking und Dokumentation über alle Modi."
  },
  {
    question: "Was ist ein wichtiger Nachteil des intermodalen Transports?",
    options: ["Zu billig", "Längere Gesamttransitzeit und Abhängigkeit von Fahrplänen", "Zu umweltfreundlich", "Zu einfach"],
    correctIndex: 1,
    explanation: "Intermodaler Transport kann längere Transitzeiten und Fahrplanabhängigkeit haben."
  },
  // English Questions (21-30)
  {
    question: "What is a TEU in container shipping?",
    options: ["A ship name", "Twenty-foot Equivalent Unit - standard container measurement", "A port", "A container brand"],
    correctIndex: 1,
    explanation: "TEU is the standard unit for containers, equivalent to a 20-foot container."
  },
  {
    question: "What is short sea shipping?",
    options: ["Shipping in shallow water", "Maritime transport along coastlines and between nearby ports", "Small boats only", "River transport only"],
    correctIndex: 1,
    explanation: "Short sea shipping is maritime transport along coastlines and between nearby ports."
  },
  {
    question: "What advantage does rail have over road for long distances?",
    options: ["Always faster", "Lower cost per ton-kilometer and significantly lower CO2 emissions", "More flexible", "Easier loading"],
    correctIndex: 1,
    explanation: "Rail has lower cost per ton-kilometer and significantly lower CO2 emissions."
  },
  {
    question: "What is a freight corridor in the EU?",
    options: ["A parking area", "Designated rail route with priority for freight with guaranteed capacity", "A highway", "An airport connection"],
    correctIndex: 1,
    explanation: "Freight corridors are priority rail routes with guaranteed capacity."
  },
  {
    question: "What is the role of inland waterways in intermodal transport?",
    options: ["Only for passengers", "Cost-effective transport of heavy/bulk goods on rivers and canals", "Not used anymore", "Only for small packages"],
    correctIndex: 1,
    explanation: "Inland waterways are efficient for heavy and bulky goods."
  },
  {
    question: "What is a multimodal transport operator (MTO)?",
    options: ["A truck driver", "Company that organizes transport using multiple modes under one contract", "A port authority", "A train operator only"],
    correctIndex: 1,
    explanation: "MTO organizes transport using multiple modes under one contract."
  },
  {
    question: "What is the main challenge of intermodal transport scheduling?",
    options: ["Too simple", "Coordinating fixed train schedules with flexible road transport", "Too cheap", "No documentation needed"],
    correctIndex: 1,
    explanation: "Coordinating fixed train schedules with flexible road transport is a challenge."
  },
  {
    question: "What environmental certification recognizes sustainable logistics?",
    options: ["No certifications exist", "Lean & Green, ISO 14001, Smart Way", "Only Euro standards", "Only for trucks"],
    correctIndex: 1,
    explanation: "Lean & Green, ISO 14001 and Smart Way certify sustainable logistics."
  },
  {
    question: "What is a container tracking system?",
    options: ["GPS in the truck only", "Technology to monitor container location and status throughout the journey", "Paper-based system", "Only at ports"],
    correctIndex: 1,
    explanation: "Tracking systems monitor container position and status throughout the journey."
  },
  {
    question: "What is the break-even distance for rail vs road transport?",
    options: ["10 km", "Typically 500-700 km depending on route and cargo", "1 km", "5000 km minimum"],
    correctIndex: 1,
    explanation: "Break-even distance for rail vs road is typically 500-700 km."
  }
];
