import { QuizQuestion } from '../quizData';

export const expressTransportQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce definește un transport express în logistică?",
    options: ["Orice transport rapid", "Livrare garantată într-un termen scurt, de obicei 24-48h", "Doar transport aerian", "Transport fără documente"],
    correctIndex: 1,
    explanation: "Transportul express implică livrare garantată într-un termen scurt, cu urmărire și prioritate."
  },
  {
    question: "Care este diferența principală între express și standard?",
    options: ["Doar prețul", "Timp de livrare garantat, prioritate și servicii suplimentare", "Tipul de vehicul", "Documentele necesare"],
    correctIndex: 1,
    explanation: "Express oferă timp garantat, prioritate, tracking în timp real și servicii dedicate."
  },
  {
    question: "Ce tip de vehicul se folosește frecvent pentru livrări express dedicate?",
    options: ["Doar camioane mari", "Sprinter/dube pentru flexibilitate și viteză", "Doar avioane", "Trenuri"],
    correctIndex: 1,
    explanation: "Sprinterele și dubele oferă flexibilitate și viteză pentru livrări express dedicate."
  },
  {
    question: "Ce este o livrare 'same day'?",
    options: ["Livrare în aceeași săptămână", "Livrare în aceeași zi în care se face comanda", "Livrare într-o zi fixă", "Livrare standard"],
    correctIndex: 1,
    explanation: "Same day înseamnă livrare în aceeași zi în care se plasează comanda."
  },
  {
    question: "Care industrie folosește cel mai frecvent transportul express?",
    options: ["Agricultură", "Automotive (piese de schimb), medical, e-commerce", "Construcții", "Doar alimentar"],
    correctIndex: 1,
    explanation: "Automotive, medical și e-commerce depind de transport express pentru piese critice."
  },
  {
    question: "Ce risc special implică transportul express?",
    options: ["Nici un risc", "Presiune de timp crescută care poate duce la erori", "Costuri mai mici", "Mai puțină documentație"],
    correctIndex: 1,
    explanation: "Presiunea de timp în transport express poate duce la erori și nerespectarea regulilor."
  },
  {
    question: "Ce înseamnă 'on-board courier' (OBC)?",
    options: ["Curier obișnuit", "Persoană care transportă personal marfa cu avionul", "Șofer de camion", "Robot de livrare"],
    correctIndex: 1,
    explanation: "OBC este o persoană care transportă personal marfa urgentă ca bagaj de mână în avion."
  },
  {
    question: "Care este timpul tipic de răspuns pentru o cerere de transport express?",
    options: ["24 ore", "Minute până la 2 ore pentru cotație și disponibilitate", "O săptămână", "Nu există standard"],
    correctIndex: 1,
    explanation: "Serviciile express răspund rapid, de obicei în minute până la 2 ore."
  },
  {
    question: "Ce documentație specială necesită transportul express?",
    options: ["Aceleași ca transportul standard", "CMR cu timestamp precis, instrucțiuni de handling, contact 24/7", "Fără documentație", "Doar factura"],
    correctIndex: 1,
    explanation: "Transportul express necesită documentație cu timestamp precis și instrucțiuni clare."
  },
  {
    question: "Ce este tracking-ul în timp real în transportul express?",
    options: ["Opțional", "Monitorizare continuă GPS cu actualizări la fiecare minut", "Doar la destinație", "Urmărire zilnică"],
    correctIndex: 1,
    explanation: "Tracking-ul în timp real oferă vizibilitate continuă asupra poziției și statusului."
  },
  // German Questions (11-20)
  {
    question: "Was bedeutet 'Direct Drive' im Expresstransport?",
    options: ["Normale Fahrt", "Direktfahrt ohne Umladung oder Zwischenstopps", "Elektrofahrzeug", "Automatisierte Fahrt"],
    correctIndex: 1,
    explanation: "Direct Drive bedeutet Direkttransport ohne Umladung oder Zwischenstopps."
  },
  {
    question: "Welche Zusatzkosten entstehen typischerweise bei Expresstransport?",
    options: ["Keine", "Expresszuschlag, Wochenend-/Nachtaufschlag, Wartezeit", "Nur Kraftstoff", "Niedrigere Kosten als Standard"],
    correctIndex: 1,
    explanation: "Expresstransport beinhaltet Zuschläge für Dringlichkeit, Wochenende und Wartezeit."
  },
  {
    question: "Was ist ein Hot Shot in der Logistik?",
    options: ["Ein heißes Produkt", "Dringender Kleintransport, oft mit Sprinter", "Ein Werbeterm", "Eine Versicherungsart"],
    correctIndex: 1,
    explanation: "Hot Shot ist ein dringender Kleintransport, meist mit Sprinter oder Transporter."
  },
  {
    question: "Welche Branchen nutzen Night Express besonders?",
    options: ["Keine", "Automobilindustrie für Produktionsteile, Medizin für Proben", "Nur Lebensmittel", "Nur E-Commerce"],
    correctIndex: 1,
    explanation: "Night Express bedient die Automobil- und Medizinbranche, die Nachtlieferungen benötigt."
  },
  {
    question: "Was bedeutet 'Time Critical' Transport?",
    options: ["Langsamer Transport", "Transport mit fester Lieferzeitgarantie, oft mit Strafen bei Verzug", "Normale Lieferung", "Transport ohne Zeitangabe"],
    correctIndex: 1,
    explanation: "Time Critical hat feste Lieferzeitgarantie, oft mit Strafen bei Verzögerung."
  },
  {
    question: "Wie wird die Preisgestaltung im Expresstransport typischerweise berechnet?",
    options: ["Nur nach Gewicht", "Kombination aus Entfernung, Zeitfenster, Fahrzeuggröße und Dringlichkeit", "Einheitspreis", "Nur nach Volumen"],
    correctIndex: 1,
    explanation: "Der Express-Preis kombiniert Entfernung, Zeitfenster, Fahrzeuggröße und Dringlichkeit."
  },
  {
    question: "Was ist das Hauptrisiko bei Nachtfahrten im Expresstransport?",
    options: ["Kein Risiko", "Müdigkeit des Fahrers, weniger Verkehr aber höheres Unfallrisiko", "Mehr Verkehr", "Höhere Maut"],
    correctIndex: 1,
    explanation: "Nachtfahrer haben erhöhtes Ermüdungsrisiko, obwohl weniger Verkehr herrscht."
  },
  {
    question: "Welche Kommunikation ist im Expresstransport essentiell?",
    options: ["Keine", "24/7 Erreichbarkeit, proaktive Updates, Eskalationsprozesse", "Nur E-Mail", "Nur bei Problemen"],
    correctIndex: 1,
    explanation: "24/7 Erreichbarkeit und proaktive Updates sind essentiell im Expresstransport."
  },
  {
    question: "Was passiert bei einer Verzögerung im garantierten Expresstransport?",
    options: ["Nichts", "Rabatt, Erstattung oder Vertragsstrafen je nach Vereinbarung", "Nur Entschuldigung", "Transport wird abgebrochen"],
    correctIndex: 1,
    explanation: "Verzögerungen im garantierten Express können Rabatte, Erstattungen oder Strafen beinhalten."
  },
  {
    question: "Welche Fahrzeugvorbereitung ist für Expresstransport wichtig?",
    options: ["Keine besondere", "Sauber, voll getankt, gewartet, mit funktionierendem GPS und Kommunikation", "Nur gewaschen", "Nur Kraftstoff"],
    correctIndex: 1,
    explanation: "Express-Fahrzeuge müssen sauber, vollgetankt, gewartet, mit funktionierendem GPS sein."
  },
  // English Questions (21-30)
  {
    question: "What is 'premium freight' in express logistics?",
    options: ["Luxury goods only", "High-priority shipments with dedicated handling and guaranteed delivery", "Standard freight with higher price", "Heavy cargo"],
    correctIndex: 1,
    explanation: "Premium freight means priority shipments with dedicated handling and guaranteed delivery."
  },
  {
    question: "What distinguishes a dedicated express service from groupage?",
    options: ["No difference", "Dedicated uses entire vehicle for single shipment, groupage combines multiple", "Groupage is faster", "Dedicated is cheaper"],
    correctIndex: 1,
    explanation: "Dedicated service uses the entire vehicle for a single shipment without stops."
  },
  {
    question: "What is the typical markup for express compared to standard transport?",
    options: ["No markup", "50-200% or more depending on urgency", "10% maximum", "Express is cheaper"],
    correctIndex: 1,
    explanation: "Express transport typically costs 50-200% or more compared to standard."
  },
  {
    question: "What service level agreement (SLA) is typical for express?",
    options: ["No SLA needed", "Guaranteed delivery time with compensation for delays", "Only best effort", "Verbal agreement only"],
    correctIndex: 1,
    explanation: "SLA for express includes guaranteed delivery time with compensation for delays."
  },
  {
    question: "What contingency planning is essential for express transport?",
    options: ["None needed", "Backup vehicles, alternative routes, driver relief, communication protocols", "Only GPS", "Just extra fuel"],
    correctIndex: 1,
    explanation: "Contingency planning includes backup vehicles, alternative routes and communication protocols."
  },
  {
    question: "How does temperature monitoring work in express pharma transport?",
    options: ["Not monitored", "Continuous data loggers with real-time alerts for excursions", "Checked at delivery only", "Driver estimates"],
    correctIndex: 1,
    explanation: "Express pharma transport uses data loggers with real-time alerts for excursions."
  },
  {
    question: "What is cross-docking in express logistics?",
    options: ["Loading at a dock", "Direct transfer from incoming to outgoing vehicle with minimal storage", "Dock building", "Shipping by sea"],
    correctIndex: 1,
    explanation: "Cross-docking transfers cargo directly from incoming to outgoing vehicle."
  },
  {
    question: "What role does customer communication play in express transport?",
    options: ["Minimal importance", "Critical - proactive updates reduce anxiety and build trust", "Only at delivery", "Unnecessary for professionals"],
    correctIndex: 1,
    explanation: "Proactive communication reduces anxiety and builds trust in express service."
  },
  {
    question: "What insurance consideration is important for express shipments?",
    options: ["No insurance needed", "Higher coverage for time-critical, often higher value shipments", "Standard insurance only", "Insurance slows delivery"],
    correctIndex: 1,
    explanation: "Express shipments often require higher coverage for valuable goods."
  },
  {
    question: "How should express transport pricing be structured for transparency?",
    options: ["Hidden fees are acceptable", "Clear breakdown: base rate, distance, time window, surcharges", "Lump sum only", "Negotiate each time"],
    correctIndex: 1,
    explanation: "Transparent express pricing includes clear details: base rate, distance, urgency."
  },
  // Glossary Questions - Romanian (31-33)
  {
    question: "Ce înseamnă 'Same-Day Delivery' în transport express?",
    options: ["Livrare în aceeași săptămână", "Livrare în aceeași zi în care s-a plasat comanda", "Livrare similară", "Livrare standard"],
    correctIndex: 1,
    explanation: "Same-Day înseamnă livrare în aceeași zi calendaristică în care s-a efectuat comanda."
  },
  {
    question: "Ce este un 'Line Stop' în industria auto?",
    options: ["O stație de autobuz", "Oprirea liniei de producție din cauza lipsei pieselor", "Un semn de oprire", "O pauză de masă"],
    correctIndex: 1,
    explanation: "Line Stop reprezintă oprirea liniei de producție din cauza lipsei de piese, situație care necesită transport express urgent."
  },
  {
    question: "Ce înseamnă 'Dedicated FTL' în transport express?",
    options: ["Camion parțial", "Camion complet dedicat unui singur transport", "Transport de grup", "Transport lent"],
    correctIndex: 1,
    explanation: "Dedicated FTL (Full Truck Load) înseamnă un vehicul complet dedicat exclusiv unui singur transport express."
  },
  // Glossary Questions - German (34-36)
  {
    question: "Was bedeutet 'Hot Shot' in der Logistik?",
    options: ["Heißes Getränk", "Dringender Kleintransport mit schnellen Fahrzeugen", "Wärmetransport", "Gefährlicher Transport"],
    correctIndex: 1,
    explanation: "Hot Shot bezeichnet einen dringenden Kleintransport, meist mit Sprinter oder Transporter durchgeführt."
  },
  {
    question: "Was ist ein 'On-Board Courier' (OBC)?",
    options: ["Ein Paketdienst", "Person, die Waren persönlich als Handgepäck im Flugzeug transportiert", "Ein Bordcomputer", "Ein Fahrzeugkurier"],
    correctIndex: 1,
    explanation: "Ein On-Board Courier transportiert dringende Waren persönlich als Handgepäck im Flugzeug."
  },
  {
    question: "Was bedeutet 'Time Critical' Transport?",
    options: ["Langsamer Transport", "Transport mit fester Lieferzeitgarantie und Strafen bei Verzug", "Zeitlose Lieferung", "Normaler Transport"],
    correctIndex: 1,
    explanation: "Time Critical bezeichnet Transporte mit fester Lieferzeitgarantie, oft mit Vertragsstrafen bei Verzögerung."
  },
  // Glossary Questions - English (37-39)
  {
    question: "What is 'Cross-Docking' in express logistics?",
    options: ["Ship loading", "Direct transfer from incoming to outgoing vehicle with minimal storage", "Dock building", "Container stacking"],
    correctIndex: 1,
    explanation: "Cross-Docking is the practice of directly transferring goods from incoming to outgoing vehicles with minimal or no storage time."
  },
  {
    question: "What does 'Direct Drive' mean in express transport?",
    options: ["Automatic transmission", "Direct transport without transshipment or intermediate stops", "Electric vehicle", "GPS navigation"],
    correctIndex: 1,
    explanation: "Direct Drive means the vehicle goes directly from pickup to delivery without any transshipment or intermediate stops."
  },
  {
    question: "What is 'Night Express' service?",
    options: ["Evening delivery", "Overnight transport arriving before business hours next day", "Dark vehicle", "Late pickup"],
    correctIndex: 1,
    explanation: "Night Express is overnight transport service where goods are picked up evening and delivered before business hours the next morning."
  },
  // Additional Glossary Questions - Romanian (40-42)
  {
    question: "Ce este Premium Freight?",
    options: ["Marfă scumpă", "Transport prioritar cu manipulare dedicată și livrare garantată", "Transport standard premium", "Marfă grea"],
    correctIndex: 1,
    explanation: "Premium Freight reprezintă transporturi cu prioritate maximă, manipulare dedicată și garanție de livrare."
  },
  {
    question: "Ce înseamnă SLA în transport express?",
    options: ["Super Long Arrival", "Service Level Agreement - acord privind nivelul serviciului", "Standard Loading Area", "Special Logistics Area"],
    correctIndex: 1,
    explanation: "SLA (Service Level Agreement) este acordul care definește timpul garantat de livrare și compensațiile pentru întârzieri."
  },
  {
    question: "Ce este Real-time Tracking în transport express?",
    options: ["Urmărire săptămânală", "Monitorizare GPS continuă cu actualizări la minut", "Urmărire la destinație", "Raport final"],
    correctIndex: 1,
    explanation: "Real-time Tracking oferă vizibilitate continuă asupra poziției și statusului transportului cu actualizări frecvente."
  },
  // Additional Glossary Questions - German (43-45)
  {
    question: "Was bedeutet 'Expressaufschlag' in der Preisgestaltung?",
    options: ["Rabatt", "Zusatzgebühr für dringenden Transport über Standardtarif", "Normalpreis", "Versicherung"],
    correctIndex: 1,
    explanation: "Expressaufschlag ist die zusätzliche Gebühr für dringende Transporte über dem Standardtarif."
  },
  {
    question: "Was ist ein 'Backup Vehicle' im Expresstransport?",
    options: ["Altes Fahrzeug", "Reservefahrzeug für Notfälle und Ausfälle", "Ersatzteil", "Anhänger"],
    correctIndex: 1,
    explanation: "Ein Backup Vehicle ist ein Reservefahrzeug, das bei Pannen oder Ausfällen sofort eingesetzt werden kann."
  },
  {
    question: "Was bedeutet 'Door-to-Door' Service?",
    options: ["Türlieferung", "Komplettservice von Abholadresse bis Lieferadresse", "Haustürgeschäft", "Türproduktion"],
    correctIndex: 1,
    explanation: "Door-to-Door bedeutet kompletten Service von der Abholadresse des Absenders bis zur Lieferadresse des Empfängers."
  },
  // Additional Glossary Questions - English (46-48)
  {
    question: "What is 'Contingency Planning' in express transport?",
    options: ["Financial planning", "Preparation of backup plans for delays, breakdowns or emergencies", "Route planning only", "Budget planning"],
    correctIndex: 1,
    explanation: "Contingency Planning prepares alternative solutions for vehicle breakdowns, delays or other emergencies."
  },
  {
    question: "What does 'Cutoff Time' mean in express logistics?",
    options: ["Closing time", "Deadline for accepting shipments for same/next day delivery", "End of business", "Lunch break"],
    correctIndex: 1,
    explanation: "Cutoff Time is the deadline by which shipments must be received to qualify for same-day or next-day delivery."
  },
  {
    question: "What is 'Proof of Delivery' (POD) in express transport?",
    options: ["Peas on delivery", "Documentation confirming successful delivery with signature and timestamp", "Payment on delivery", "Price of delivery"],
    correctIndex: 1,
    explanation: "POD is documentation confirming successful delivery, typically including signature, timestamp and sometimes photos."
  }
];
