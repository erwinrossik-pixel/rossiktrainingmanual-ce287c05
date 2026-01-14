import { QuizQuestion } from '../quizData';

export const intermodalQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce înseamnă transport intermodal?",
    options: ["Transport doar cu camion", "Utilizarea a cel puțin două moduri de transport fără manipularea mărfii", "Transport internațional", "Transport expres"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul intermodal combină moduri diferite (rutier, feroviar, naval) fără reîncărcarea mărfii.",
      de: "Intermodaler Transport kombiniert verschiedene Modi (Straße, Schiene, See) ohne Umladung der Ware.",
      en: "Intermodal transport combines different modes (road, rail, sea) without reloading the goods."
    }
  },
  {
    question: "Ce este o unitate de încărcare intermodală (UTI)?",
    options: ["Un camion special", "Container, swap body sau semiremorcă adaptată pentru transfer între moduri", "O macara", "Un depozit"],
    correctIndex: 1,
    explanation: {
      ro: "UTI sunt containere, swap body-uri sau semiremorci proiectate pentru transfer ușor între moduri.",
      de: "UTI sind Container, Wechselbrücken oder Auflieger, die für einfachen Transfer zwischen Modi konzipiert sind.",
      en: "UTI are containers, swap bodies or semi-trailers designed for easy transfer between modes."
    }
  },
  {
    question: "Care este principalul avantaj al transportului intermodal?",
    options: ["Cel mai rapid", "Reducerea emisiilor CO2 și a costurilor pe distanțe lungi", "Cel mai ieftin întotdeauna", "Nu are avantaje"],
    correctIndex: 1,
    explanation: {
      ro: "Intermodalul reduce emisiile CO2 și costurile, mai ales pe distanțe lungi.",
      de: "Intermodal reduziert CO2-Emissionen und Kosten, besonders auf langen Strecken.",
      en: "Intermodal reduces CO2 emissions and costs, especially on long distances."
    }
  },
  {
    question: "Ce este un terminal intermodal?",
    options: ["O gară de pasageri", "Punct de transfer între moduri de transport cu echipament de manipulare", "Un aeroport", "Un port maritim doar"],
    correctIndex: 1,
    explanation: {
      ro: "Terminalul intermodal este locul unde UTI sunt transferate între diferite moduri de transport.",
      de: "Das intermodale Terminal ist der Ort, an dem UTI zwischen verschiedenen Verkehrsträgern umgeschlagen werden.",
      en: "The intermodal terminal is where UTI are transferred between different transport modes."
    }
  },
  {
    question: "Ce înseamnă RoLa (Rollende Landstraße)?",
    options: ["Un drum cu role", "Transport de camioane complete pe tren", "Un tip de remorcă", "O autostradă specială"],
    correctIndex: 1,
    explanation: {
      ro: "RoLa transportă camioane complete cu șofer pe tren, mai ales prin tuneluri alpine.",
      de: "RoLa transportiert komplette LKW mit Fahrer auf dem Zug, besonders durch Alpentunnel.",
      en: "RoLa transports complete trucks with driver on train, especially through Alpine tunnels."
    }
  },
  {
    question: "Care este lungimea standard a unui container maritim?",
    options: ["10 și 15 picioare", "20 și 40 picioare", "25 și 50 picioare", "Nu există standard"],
    correctIndex: 1,
    explanation: {
      ro: "Containerele maritime standard sunt de 20 picioare (TEU) și 40 picioare (FEU).",
      de: "Standard-Seecontainer sind 20 Fuß (TEU) und 40 Fuß (FEU).",
      en: "Standard sea containers are 20 feet (TEU) and 40 feet (FEU)."
    }
  },
  {
    question: "Ce este un swap body?",
    options: ["Corpul unui camion", "Caroserie demontabilă standardizată pentru transfer între moduri", "O remorcă standard", "Un container refrigerat"],
    correctIndex: 1,
    explanation: {
      ro: "Swap body este o caroserie demontabilă cu dimensiuni europene pentru transfer intermodal.",
      de: "Ein Wechselbrücken ist ein abnehmbarer Aufbau mit europäischen Maßen für intermodalen Transfer.",
      en: "A swap body is a detachable body with European dimensions for intermodal transfer."
    }
  },
  {
    question: "Ce este huckepack în transport?",
    options: ["Un joc", "Transportul semiremorcilor pe vagoane de tren speciale", "Un tip de container", "O metodă de ambalare"],
    correctIndex: 1,
    explanation: {
      ro: "Huckepack înseamnă transportul semiremorcilor pe vagoane de tren joase speciale.",
      de: "Huckepack bedeutet Transport von Aufliegern auf speziellen Niederflur-Eisenbahnwagen.",
      en: "Huckepack means transport of semi-trailers on special low-floor rail wagons."
    }
  },
  {
    question: "Care sunt principalele coridoare intermodale în Europa?",
    options: ["Doar autostrăzi", "Rețeaua TEN-T cu coridoare feroviare prioritare", "Doar rute maritime", "Nu există coridoare"],
    correctIndex: 1,
    explanation: {
      ro: "Rețeaua TEN-T definește coridoare europene prioritare pentru transport intermodal.",
      de: "Das TEN-T-Netz definiert vorrangige europäische Korridore für intermodalen Transport.",
      en: "The TEN-T network defines priority European corridors for intermodal transport."
    }
  },
  {
    question: "Ce document însoțește transportul intermodal maritim?",
    options: ["Doar CMR", "Bill of Lading (B/L) + CMR pentru segmentul rutier", "Doar pașaport", "Fără documente"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul maritim folosește Bill of Lading, iar segmentul rutier necesită CMR.",
      de: "Seetransport verwendet Bill of Lading, das Straßensegment benötigt CMR.",
      en: "Sea transport uses Bill of Lading, the road segment requires CMR."
    }
  },
  // German Questions (11-20)
  {
    question: "Was ist der Vorteil von kombiniertem Verkehr (KV)?",
    options: ["Immer schneller", "Umweltfreundlicher und oft kostengünstiger auf langen Strecken", "Nur für Gefahrgut", "Keine Vorteile"],
    correctIndex: 1,
    explanation: {
      ro: "Traficul combinat este mai ecologic și adesea mai economic pe distanțe lungi.",
      de: "Kombinierter Verkehr ist umweltfreundlicher und oft wirtschaftlicher auf langen Strecken.",
      en: "Combined transport is more environmentally friendly and often more economical on long distances."
    }
  },
  {
    question: "Was bedeutet 'last mile' im intermodalen Transport?",
    options: ["Die letzte Meile des Zuges", "Straßentransport vom Terminal zum endgültigen Ziel", "Die erste Meile", "Die längste Strecke"],
    correctIndex: 1,
    explanation: {
      ro: "Last mile este transportul rutier de la terminal la destinația finală.",
      de: "Last Mile ist der Straßentransport vom Terminal zum endgültigen Bestimmungsort.",
      en: "Last mile is the road transport from terminal to final destination."
    }
  },
  {
    question: "Welche Gewichtsgrenze gilt für intermodale 44t-Transporte?",
    options: ["40t überall", "44t im kombinierten Verkehr in vielen EU-Ländern erlaubt", "50t immer", "Keine Limits"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul combinat permite 44t în multe țări UE, față de 40t standard.",
      de: "Kombinierter Verkehr erlaubt 44t in vielen EU-Ländern, gegenüber 40t Standard.",
      en: "Combined transport allows 44t in many EU countries, compared to 40t standard."
    }
  },
  {
    question: "Was ist ein Reach Stacker?",
    options: ["Ein Kran", "Spezialfahrzeug zum Umschlag von Containern im Terminal", "Ein Gabelstapler", "Ein LKW-Typ"],
    correctIndex: 1,
    explanation: {
      ro: "Reach Stacker este un echipament special pentru manipularea containerelor în terminale.",
      de: "Ein Reach Stacker ist ein Spezialfahrzeug für den Containerumschlag im Terminal.",
      en: "A Reach Stacker is special equipment for handling containers in terminals."
    }
  },
  {
    question: "Welche Dokumente werden beim kombinierten Verkehr benötigt?",
    options: ["Nur CMR", "CMR, CIM-Frachtbrief für Schiene, ggf. Bill of Lading", "Keine Dokumente", "Nur Rechnung"],
    correctIndex: 1,
    explanation: {
      ro: "Traficul combinat necesită CMR pentru rutier, CIM pentru feroviar și B/L pentru maritim.",
      de: "Kombinierter Verkehr erfordert CMR für Straße, CIM für Schiene und B/L für See.",
      en: "Combined transport requires CMR for road, CIM for rail and B/L for sea."
    }
  },
  {
    question: "Was ist ein Ganzzug im intermodalen Transport?",
    options: ["Ein kleiner Zug", "Ein kompletter Zug für einen Kunden oder eine Route ohne Rangierbewegungen", "Ein Personenzug", "Ein defekter Zug"],
    correctIndex: 1,
    explanation: {
      ro: "Ganzzug este un tren complet pentru un client sau rută, fără manevre de triaj.",
      de: "Ein Ganzzug ist ein kompletter Zug für einen Kunden oder eine Route ohne Rangieren.",
      en: "A block train is a complete train for one customer or route without shunting."
    }
  },
  {
    question: "Welche Vorteile bietet der Modal Split mit Schiene?",
    options: ["Keine", "CO2-Reduktion, Entlastung der Straßen, oft günstigere Langstreckenkosten", "Nur schneller", "Nur teurer"],
    correctIndex: 1,
    explanation: {
      ro: "Folosirea feroviară reduce CO2, descongestionează drumurile și poate fi mai economică.",
      de: "Schienennutzung reduziert CO2, entlastet Straßen und kann wirtschaftlicher sein.",
      en: "Rail use reduces CO2, relieves roads and can be more economical."
    }
  },
  {
    question: "Was ist eine Umschlaganlage?",
    options: ["Ein Büro", "Einrichtung zum Transfer von Ladeeinheiten zwischen Verkehrsträgern", "Ein Restaurant", "Eine Tankstelle"],
    correctIndex: 1,
    explanation: {
      ro: "Umschlaganlage este facilitatea pentru transferul unităților de încărcare între moduri.",
      de: "Eine Umschlaganlage ist eine Einrichtung zum Transfer von Ladeeinheiten zwischen Verkehrsträgern.",
      en: "A transshipment facility is for transferring loading units between transport modes."
    }
  },
  {
    question: "Welche Rolle spielt die Digitalisierung im intermodalen Transport?",
    options: ["Keine", "Nahtlose Buchung, Tracking und Dokumentation über alle Modi", "Nur für E-Mail", "Verlangsamt den Prozess"],
    correctIndex: 1,
    explanation: {
      ro: "Digitalizarea permite rezervare, tracking și documentație fără întreruperi între moduri.",
      de: "Digitalisierung ermöglicht nahtlose Buchung, Tracking und Dokumentation über alle Modi.",
      en: "Digitalization enables seamless booking, tracking and documentation across all modes."
    }
  },
  {
    question: "Was ist ein wichtiger Nachteil des intermodalen Transports?",
    options: ["Zu billig", "Längere Gesamttransitzeit und Abhängigkeit von Fahrplänen", "Zu umweltfreundlich", "Zu einfach"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul intermodal poate avea timpi de tranzit mai lungi și dependență de orare.",
      de: "Intermodaler Transport kann längere Transitzeiten und Fahrplanabhängigkeit haben.",
      en: "Intermodal transport can have longer transit times and schedule dependency."
    }
  },
  // English Questions (21-30)
  {
    question: "What is a TEU in container shipping?",
    options: ["A ship name", "Twenty-foot Equivalent Unit - standard container measurement", "A port", "A container brand"],
    correctIndex: 1,
    explanation: {
      ro: "TEU este unitatea de măsură standard pentru containere, echivalentă cu un container de 20 picioare.",
      de: "TEU ist die Standardmaßeinheit für Container, entspricht einem 20-Fuß-Container.",
      en: "TEU is the standard unit for containers, equivalent to a 20-foot container."
    }
  },
  {
    question: "What is short sea shipping?",
    options: ["Shipping in shallow water", "Maritime transport along coastlines and between nearby ports", "Small boats only", "River transport only"],
    correctIndex: 1,
    explanation: {
      ro: "Short sea shipping este transportul maritim de coastă și între porturi apropiate.",
      de: "Short Sea Shipping ist Seeverkehr entlang der Küsten und zwischen nahegelegenen Häfen.",
      en: "Short sea shipping is maritime transport along coastlines and between nearby ports."
    }
  },
  {
    question: "What advantage does rail have over road for long distances?",
    options: ["Always faster", "Lower cost per ton-kilometer and significantly lower CO2 emissions", "More flexible", "Easier loading"],
    correctIndex: 1,
    explanation: {
      ro: "Feroviarul are costuri mai mici per tonă-kilometru și emisii CO2 mult mai reduse.",
      de: "Die Schiene hat niedrigere Kosten pro Tonnen-Kilometer und deutlich niedrigere CO2-Emissionen.",
      en: "Rail has lower cost per ton-kilometer and significantly lower CO2 emissions."
    }
  },
  {
    question: "What is a freight corridor in the EU?",
    options: ["A parking area", "Designated rail route with priority for freight with guaranteed capacity", "A highway", "An airport connection"],
    correctIndex: 1,
    explanation: {
      ro: "Coridoarele de marfă sunt rute feroviare prioritare cu capacitate garantată.",
      de: "Güterkorridore sind vorrangige Schienenstrecken mit garantierter Kapazität.",
      en: "Freight corridors are priority rail routes with guaranteed capacity."
    }
  },
  {
    question: "What is the role of inland waterways in intermodal transport?",
    options: ["Only for passengers", "Cost-effective transport of heavy/bulk goods on rivers and canals", "Not used anymore", "Only for small packages"],
    correctIndex: 1,
    explanation: {
      ro: "Căile navigabile interioare sunt eficiente pentru mărfuri grele și voluminoase.",
      de: "Binnenwasserstraßen sind effizient für schwere und voluminöse Güter.",
      en: "Inland waterways are efficient for heavy and bulky goods."
    }
  },
  {
    question: "What is a multimodal transport operator (MTO)?",
    options: ["A truck driver", "Company that organizes transport using multiple modes under one contract", "A port authority", "A train operator only"],
    correctIndex: 1,
    explanation: {
      ro: "MTO organizează transportul folosind mai multe moduri sub un singur contract.",
      de: "MTO organisiert Transport mit mehreren Verkehrsträgern unter einem Vertrag.",
      en: "MTO organizes transport using multiple modes under one contract."
    }
  },
  {
    question: "What is the main challenge of intermodal transport scheduling?",
    options: ["Too simple", "Coordinating fixed train schedules with flexible road transport", "Too cheap", "No documentation needed"],
    correctIndex: 1,
    explanation: {
      ro: "Coordonarea orarelor fixe de tren cu flexibilitatea transportului rutier este o provocare.",
      de: "Die Koordination fester Zugfahrpläne mit flexiblem Straßentransport ist eine Herausforderung.",
      en: "Coordinating fixed train schedules with flexible road transport is a challenge."
    }
  },
  {
    question: "What environmental certification recognizes sustainable logistics?",
    options: ["No certifications exist", "Lean & Green, ISO 14001, Smart Way", "Only Euro standards", "Only for trucks"],
    correctIndex: 1,
    explanation: {
      ro: "Lean & Green, ISO 14001 și Smart Way certifică logistica sustenabilă.",
      de: "Lean & Green, ISO 14001 und Smart Way zertifizieren nachhaltige Logistik.",
      en: "Lean & Green, ISO 14001 and Smart Way certify sustainable logistics."
    }
  },
  {
    question: "What is a container tracking system?",
    options: ["GPS in the truck only", "Technology to monitor container location and status throughout the journey", "Paper-based system", "Only at ports"],
    correctIndex: 1,
    explanation: {
      ro: "Sistemele de tracking monitorizează poziția și starea containerului pe tot parcursul călătoriei.",
      de: "Tracking-Systeme überwachen Containerposition und -zustand während der gesamten Reise.",
      en: "Tracking systems monitor container position and status throughout the journey."
    }
  },
  {
    question: "What is the break-even distance for rail vs road transport?",
    options: ["10 km", "Typically 500-700 km depending on route and cargo", "1 km", "5000 km minimum"],
    correctIndex: 1,
    explanation: {
      ro: "Distanța de rentabilitate pentru feroviar față de rutier este de obicei 500-700 km.",
      de: "Die Break-Even-Entfernung für Schiene vs. Straße liegt typischerweise bei 500-700 km.",
      en: "Break-even distance for rail vs road is typically 500-700 km."
    }
  }
];
