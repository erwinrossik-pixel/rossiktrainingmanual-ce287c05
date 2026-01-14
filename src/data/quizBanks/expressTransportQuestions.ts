import { QuizQuestion } from '../quizData';

export const expressTransportQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce definește un transport express în logistică?",
    options: ["Orice transport rapid", "Livrare garantată într-un termen scurt, de obicei 24-48h", "Doar transport aerian", "Transport fără documente"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul express implică livrare garantată într-un termen scurt, cu urmărire și prioritate.",
      de: "Expresstransport bedeutet garantierte Lieferung in kurzer Zeit, mit Tracking und Priorität.",
      en: "Express transport means guaranteed delivery in a short time, with tracking and priority."
    }
  },
  {
    question: "Care este diferența principală între express și standard?",
    options: ["Doar prețul", "Timp de livrare garantat, prioritate și servicii suplimentare", "Tipul de vehicul", "Documentele necesare"],
    correctIndex: 1,
    explanation: {
      ro: "Express oferă timp garantat, prioritate, tracking în timp real și servicii dedicate.",
      de: "Express bietet garantierte Zeit, Priorität, Echtzeit-Tracking und dedizierte Dienste.",
      en: "Express offers guaranteed time, priority, real-time tracking and dedicated services."
    }
  },
  {
    question: "Ce tip de vehicul se folosește frecvent pentru livrări express dedicate?",
    options: ["Doar camioane mari", "Sprinter/dube pentru flexibilitate și viteză", "Doar avioane", "Trenuri"],
    correctIndex: 1,
    explanation: {
      ro: "Sprinterele și dubele oferă flexibilitate și viteză pentru livrări express dedicate.",
      de: "Sprinter und Transporter bieten Flexibilität und Geschwindigkeit für dedizierte Express-Lieferungen.",
      en: "Sprinters and vans offer flexibility and speed for dedicated express deliveries."
    }
  },
  {
    question: "Ce este o livrare 'same day'?",
    options: ["Livrare în aceeași săptămână", "Livrare în aceeași zi în care se face comanda", "Livrare într-o zi fixă", "Livrare standard"],
    correctIndex: 1,
    explanation: {
      ro: "Same day înseamnă livrare în aceeași zi în care se plasează comanda.",
      de: "Same Day bedeutet Lieferung am selben Tag, an dem die Bestellung aufgegeben wird.",
      en: "Same day means delivery on the same day the order is placed."
    }
  },
  {
    question: "Care industrie folosește cel mai frecvent transportul express?",
    options: ["Agricultură", "Automotive (piese de schimb), medical, e-commerce", "Construcții", "Doar alimentar"],
    correctIndex: 1,
    explanation: {
      ro: "Automotive, medical și e-commerce depind de transport express pentru piese critice și livrări rapide.",
      de: "Automotive, Medizin und E-Commerce sind auf Expresstransport für kritische Teile angewiesen.",
      en: "Automotive, medical and e-commerce depend on express transport for critical parts and fast deliveries."
    }
  },
  {
    question: "Ce risc special implică transportul express?",
    options: ["Nici un risc", "Presiune de timp crescută care poate duce la erori", "Costuri mai mici", "Mai puțină documentație"],
    correctIndex: 1,
    explanation: {
      ro: "Presiunea de timp în transport express poate duce la erori și nerespectarea regulilor.",
      de: "Zeitdruck beim Expresstransport kann zu Fehlern und Regelverstößen führen.",
      en: "Time pressure in express transport can lead to errors and rule violations."
    }
  },
  {
    question: "Ce înseamnă 'on-board courier' (OBC)?",
    options: ["Curier obișnuit", "Persoană care transportă personal marfa cu avionul", "Șofer de camion", "Robot de livrare"],
    correctIndex: 1,
    explanation: {
      ro: "OBC este o persoană care transportă personal marfa urgentă ca bagaj de mână în avion.",
      de: "OBC ist eine Person, die dringende Fracht persönlich als Handgepäck im Flugzeug transportiert.",
      en: "OBC is a person who personally transports urgent cargo as hand luggage on a plane."
    }
  },
  {
    question: "Care este timpul tipic de răspuns pentru o cerere de transport express?",
    options: ["24 ore", "Minute până la 2 ore pentru cotație și disponibilitate", "O săptămână", "Nu există standard"],
    correctIndex: 1,
    explanation: {
      ro: "Serviciile express răspund rapid, de obicei în minute până la 2 ore.",
      de: "Express-Dienste antworten schnell, normalerweise in Minuten bis 2 Stunden.",
      en: "Express services respond quickly, usually within minutes to 2 hours."
    }
  },
  {
    question: "Ce documentație specială necesită transportul express?",
    options: ["Aceleași ca transportul standard", "CMR cu timestamp precis, instrucțiuni de handling, contact 24/7", "Fără documentație", "Doar factura"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul express necesită documentație cu timestamp precis și instrucțiuni clare.",
      de: "Expresstransport erfordert Dokumentation mit genauem Zeitstempel und klaren Anweisungen.",
      en: "Express transport requires documentation with precise timestamp and clear instructions."
    }
  },
  {
    question: "Ce este tracking-ul în timp real în transportul express?",
    options: ["Opțional", "Monitorizare continuă GPS cu actualizări la fiecare minut", "Doar la destinație", "Urmărire zilnică"],
    correctIndex: 1,
    explanation: {
      ro: "Tracking-ul în timp real oferă vizibilitate continuă asupra poziției și statusului transportului.",
      de: "Echtzeit-Tracking bietet kontinuierliche Sichtbarkeit von Position und Status des Transports.",
      en: "Real-time tracking provides continuous visibility of transport position and status."
    }
  },
  // German Questions (11-20)
  {
    question: "Was bedeutet 'Direct Drive' im Expresstransport?",
    options: ["Normale Fahrt", "Direktfahrt ohne Umladung oder Zwischenstopps", "Elektrofahrzeug", "Automatisierte Fahrt"],
    correctIndex: 1,
    explanation: {
      ro: "Direct Drive înseamnă transport direct fără transbordare sau opriri intermediare.",
      de: "Direct Drive bedeutet Direkttransport ohne Umladung oder Zwischenstopps.",
      en: "Direct Drive means direct transport without transshipment or intermediate stops."
    }
  },
  {
    question: "Welche Zusatzkosten entstehen typischerweise bei Expresstransport?",
    options: ["Keine", "Expresszuschlag, Wochenend-/Nachtaufschlag, Wartezeit", "Nur Kraftstoff", "Niedrigere Kosten als Standard"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul express implică taxe suplimentare pentru urgență, weekend și așteptare.",
      de: "Expresstransport beinhaltet Zuschläge für Dringlichkeit, Wochenende und Wartezeit.",
      en: "Express transport includes surcharges for urgency, weekend and waiting time."
    }
  },
  {
    question: "Was ist ein Hot Shot in der Logistik?",
    options: ["Ein heißes Produkt", "Dringender Kleintransport, oft mit Sprinter", "Ein Werbeterm", "Eine Versicherungsart"],
    correctIndex: 1,
    explanation: {
      ro: "Hot Shot este un transport urgent de marfă mică, de obicei cu Sprinter sau dubă.",
      de: "Hot Shot ist ein dringender Kleintransport, meist mit Sprinter oder Transporter.",
      en: "Hot Shot is an urgent small cargo transport, usually with Sprinter or van."
    }
  },
  {
    question: "Welche Branchen nutzen Night Express besonders?",
    options: ["Keine", "Automobilindustrie für Produktionsteile, Medizin für Proben", "Nur Lebensmittel", "Nur E-Commerce"],
    correctIndex: 1,
    explanation: {
      ro: "Night Express servește industria auto și medicală care necesită livrări nocturne.",
      de: "Night Express bedient die Automobil- und Medizinbranche, die Nachtlieferungen benötigt.",
      en: "Night Express serves the automotive and medical industry requiring overnight deliveries."
    }
  },
  {
    question: "Was bedeutet 'Time Critical' Transport?",
    options: ["Langsamer Transport", "Transport mit fester Lieferzeitgarantie, oft mit Strafen bei Verzug", "Normale Lieferung", "Transport ohne Zeitangabe"],
    correctIndex: 1,
    explanation: {
      ro: "Time Critical are garanție de livrare la timp fix, adesea cu penalități pentru întârziere.",
      de: "Time Critical hat feste Lieferzeitgarantie, oft mit Strafen bei Verzögerung.",
      en: "Time Critical has fixed delivery time guarantee, often with penalties for delay."
    }
  },
  {
    question: "Wie wird die Preisgestaltung im Expresstransport typischerweise berechnet?",
    options: ["Nur nach Gewicht", "Kombination aus Entfernung, Zeitfenster, Fahrzeuggröße und Dringlichkeit", "Einheitspreis", "Nur nach Volumen"],
    correctIndex: 1,
    explanation: {
      ro: "Prețul express combină distanța, fereastra de timp, dimensiunea vehiculului și urgența.",
      de: "Der Express-Preis kombiniert Entfernung, Zeitfenster, Fahrzeuggröße und Dringlichkeit.",
      en: "Express pricing combines distance, time window, vehicle size and urgency."
    }
  },
  {
    question: "Was ist das Hauptrisiko bei Nachtfahrten im Expresstransport?",
    options: ["Kein Risiko", "Müdigkeit des Fahrers, weniger Verkehr aber höheres Unfallrisiko", "Mehr Verkehr", "Höhere Maut"],
    correctIndex: 1,
    explanation: {
      ro: "Șoferii nocturn au risc crescut de oboseală, deși traficul este mai redus.",
      de: "Nachtfahrer haben erhöhtes Ermüdungsrisiko, obwohl weniger Verkehr herrscht.",
      en: "Night drivers have increased fatigue risk, although there is less traffic."
    }
  },
  {
    question: "Welche Kommunikation ist im Expresstransport essentiell?",
    options: ["Keine", "24/7 Erreichbarkeit, proaktive Updates, Eskalationsprozesse", "Nur E-Mail", "Nur bei Problemen"],
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea 24/7 și actualizările proactive sunt esențiale în transportul express.",
      de: "24/7 Erreichbarkeit und proaktive Updates sind essentiell im Expresstransport.",
      en: "24/7 availability and proactive updates are essential in express transport."
    }
  },
  {
    question: "Was passiert bei einer Verzögerung im garantierten Expresstransport?",
    options: ["Nichts", "Rabatt, Erstattung oder Vertragsstrafen je nach Vereinbarung", "Nur Entschuldigung", "Transport wird abgebrochen"],
    correctIndex: 1,
    explanation: {
      ro: "Întârzierile în transport express garantat pot implica reduceri, rambursări sau penalități.",
      de: "Verzögerungen im garantierten Express können Rabatte, Erstattungen oder Strafen beinhalten.",
      en: "Delays in guaranteed express may involve discounts, refunds or penalties."
    }
  },
  {
    question: "Welche Fahrzeugvorbereitung ist für Expresstransport wichtig?",
    options: ["Keine besondere", "Sauber, voll getankt, gewartet, mit funktionierendem GPS und Kommunikation", "Nur gewaschen", "Nur Kraftstoff"],
    correctIndex: 1,
    explanation: {
      ro: "Vehiculele express trebuie să fie curate, pline, întreținute, cu GPS funcțional.",
      de: "Express-Fahrzeuge müssen sauber, vollgetankt, gewartet, mit funktionierendem GPS sein.",
      en: "Express vehicles must be clean, fully fueled, maintained, with working GPS."
    }
  },
  // English Questions (21-30)
  {
    question: "What is 'premium freight' in express logistics?",
    options: ["Luxury goods only", "High-priority shipments with dedicated handling and guaranteed delivery", "Standard freight with higher price", "Heavy cargo"],
    correctIndex: 1,
    explanation: {
      ro: "Premium freight înseamnă expedieri prioritare cu handling dedicat și livrare garantată.",
      de: "Premium Freight bedeutet Prioritätssendungen mit dedizierter Handhabung und garantierter Lieferung.",
      en: "Premium freight means priority shipments with dedicated handling and guaranteed delivery."
    }
  },
  {
    question: "What distinguishes a dedicated express service from groupage?",
    options: ["No difference", "Dedicated uses entire vehicle for single shipment, groupage combines multiple", "Groupage is faster", "Dedicated is cheaper"],
    correctIndex: 1,
    explanation: {
      ro: "Serviciul dedicat folosește întregul vehicul pentru o singură expediere, fără opriri.",
      de: "Dedizierter Service nutzt das gesamte Fahrzeug für eine Sendung ohne Stopps.",
      en: "Dedicated service uses the entire vehicle for a single shipment without stops."
    }
  },
  {
    question: "What is the typical markup for express compared to standard transport?",
    options: ["No markup", "50-200% or more depending on urgency", "10% maximum", "Express is cheaper"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul express costă de obicei 50-200% sau mai mult față de cel standard.",
      de: "Expresstransport kostet typischerweise 50-200% oder mehr als Standardtransport.",
      en: "Express transport typically costs 50-200% or more compared to standard."
    }
  },
  {
    question: "What service level agreement (SLA) is typical for express?",
    options: ["No SLA needed", "Guaranteed delivery time with compensation for delays", "Only best effort", "Verbal agreement only"],
    correctIndex: 1,
    explanation: {
      ro: "SLA pentru express include timp de livrare garantat cu compensații pentru întârzieri.",
      de: "SLA für Express beinhaltet garantierte Lieferzeit mit Entschädigung bei Verzögerung.",
      en: "SLA for express includes guaranteed delivery time with compensation for delays."
    }
  },
  {
    question: "What contingency planning is essential for express transport?",
    options: ["None needed", "Backup vehicles, alternative routes, driver relief, communication protocols", "Only GPS", "Just extra fuel"],
    correctIndex: 1,
    explanation: {
      ro: "Planificarea de urgență include vehicule de rezervă, rute alternative și protocoale de comunicare.",
      de: "Notfallplanung umfasst Ersatzfahrzeuge, alternative Routen und Kommunikationsprotokolle.",
      en: "Contingency planning includes backup vehicles, alternative routes and communication protocols."
    }
  },
  {
    question: "How does temperature monitoring work in express pharma transport?",
    options: ["Not monitored", "Continuous data loggers with real-time alerts for excursions", "Checked at delivery only", "Driver estimates"],
    correctIndex: 1,
    explanation: {
      ro: "Transport farma express folosește data loggere cu alerte în timp real pentru devieri.",
      de: "Express-Pharmatransport nutzt Datenlogger mit Echtzeit-Alarmen bei Abweichungen.",
      en: "Express pharma transport uses data loggers with real-time alerts for excursions."
    }
  },
  {
    question: "What is cross-docking in express logistics?",
    options: ["Loading at a dock", "Direct transfer from incoming to outgoing vehicle with minimal storage", "Dock building", "Shipping by sea"],
    correctIndex: 1,
    explanation: {
      ro: "Cross-docking transferă marfa direct de la vehiculul de intrare la cel de ieșire.",
      de: "Cross-Docking überträgt Fracht direkt vom eingehenden zum ausgehenden Fahrzeug.",
      en: "Cross-docking transfers cargo directly from incoming to outgoing vehicle."
    }
  },
  {
    question: "What role does customer communication play in express transport?",
    options: ["Minimal importance", "Critical - proactive updates reduce anxiety and build trust", "Only at delivery", "Unnecessary for professionals"],
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea proactivă reduce anxietatea și construiește încredere în serviciul express.",
      de: "Proaktive Kommunikation reduziert Unsicherheit und baut Vertrauen im Express-Service auf.",
      en: "Proactive communication reduces anxiety and builds trust in express service."
    }
  },
  {
    question: "What insurance consideration is important for express shipments?",
    options: ["No insurance needed", "Higher coverage for time-critical, often higher value shipments", "Standard insurance only", "Insurance slows delivery"],
    correctIndex: 1,
    explanation: {
      ro: "Expedierile express necesită adesea acoperiri mai mari pentru mărfuri valoroase.",
      de: "Express-Sendungen erfordern oft höhere Deckungen für wertvolle Güter.",
      en: "Express shipments often require higher coverage for valuable goods."
    }
  },
  {
    question: "How should express transport pricing be structured for transparency?",
    options: ["Hidden fees are acceptable", "Clear breakdown: base rate, distance, time window, surcharges", "Lump sum only", "Negotiate each time"],
    correctIndex: 1,
    explanation: {
      ro: "Prețurile express transparente includ detalii clare: tarif de bază, distanță, urgență.",
      de: "Transparente Express-Preise beinhalten klare Details: Grundtarif, Entfernung, Dringlichkeit.",
      en: "Transparent express pricing includes clear details: base rate, distance, urgency."
    }
  }
];
