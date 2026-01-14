import { QuizQuestion } from '../quizData';

export const checklistsQuestions: QuizQuestion[] = [
  // Romanian Questions (30+)
  {
    question: "Care este primul element dintr-un checklist pre-transport?",
    options: [
      "Verificarea documentelor complete (CMR, factură, packing list)",
      "Pornirea motorului",
      "Setarea GPS-ului",
      "Plecarea din depozit"
    ],
    correctIndex: 0,
    explanation: "Verificarea documentelor este prioritară pentru a evita probleme la destinație sau vamă.",
    language: "ro"
  },
  {
    question: "Ce verificare obligatorie se face la încărcare pentru marfă paletizată?",
    options: [
      "Numărul, starea și fixarea corectă a paleților",
      "Doar greutatea totală",
      "Culoarea paleților",
      "Marca producătorului"
    ],
    correctIndex: 0,
    explanation: "Verificarea numărului, stării și fixării paleților previne daunele și discrepanțele de inventar.",
    language: "ro"
  },
  {
    question: "Ce trebuie verificat pentru transportul frigorific înainte de încărcare?",
    options: [
      "Temperatura pre-răcită, funcționarea agregatului, curățenia",
      "Doar culoarea remorcii",
      "Anvelope de vară",
      "Radio funcțional"
    ],
    correctIndex: 0,
    explanation: "Pre-răcirea, funcționalitatea și igiena sunt critice pentru păstrarea calității mărfii.",
    language: "ro"
  },
  {
    question: "Care este timpul maxim de conducere zilnic conform regulamentului UE?",
    options: [
      "9 ore (extins la 10 ore de două ori pe săptămână)",
      "12 ore nelimitat",
      "6 ore maxim",
      "15 ore în weekend"
    ],
    correctIndex: 0,
    explanation: "Regulamentul UE 561/2006 stabilește limite clare pentru siguranța rutieră.",
    language: "ro"
  },
  {
    question: "Ce element este obligatoriu în checklist-ul pentru ADR?",
    options: [
      "Echipament de protecție și instrucțiuni scrise conform mărfii",
      "Doar logo-ul companiei",
      "Radio FM",
      "Decorațiuni interioare"
    ],
    correctIndex: 0,
    explanation: "Echipamentul ADR și instrucțiunile scrise sunt obligatorii legal pentru siguranță.",
    language: "ro"
  },
  {
    question: "Care este formula pentru calculul LDM (loading meters)?",
    options: [
      "Lungime (m) × Lățime (m) / 2,4",
      "Greutate × Volum",
      "Înălțime × 10",
      "Număr paleți × 2"
    ],
    correctIndex: 0,
    explanation: "LDM = (L × W) / 2,4 calculează spațiul ocupat raportat la lățimea standard a camionului.",
    language: "ro"
  },
  {
    question: "Ce document trebuie verificat pentru calificarea unui nou transportator?",
    options: [
      "Licență transport, asigurare CMR validă, capacitate financiară",
      "Doar numărul de telefon",
      "Contul de Facebook",
      "Preferințele culinare"
    ],
    correctIndex: 0,
    explanation: "Verificarea completă a transportatorului minimizează riscurile operaționale și financiare.",
    language: "ro"
  },
  {
    question: "În checklist-ul pentru claims, care este termenul maxim pentru notificarea daunelor vizibile?",
    options: [
      "La livrare - menționare pe CMR înainte de semnare",
      "30 de zile după",
      "Un an mai târziu",
      "Niciun termen"
    ],
    correctIndex: 0,
    explanation: "Daunele vizibile trebuie notate pe CMR la momentul livrării pentru a păstra drepturile.",
    language: "ro"
  },
  {
    question: "Ce element verifici în checklist-ul de livrare?",
    options: [
      "Confirmarea locației, contact destinatar, slot orar",
      "Meteo luna viitoare",
      "Horoscop șofer",
      "Culoarea clădirii"
    ],
    correctIndex: 0,
    explanation: "Confirmarea detaliilor de livrare previne staționări inutile și întârzieri.",
    language: "ro"
  },
  {
    question: "Care este pauza minimă obligatorie după 4,5 ore de conducere?",
    options: [
      "45 de minute (sau 15 + 30 minute)",
      "5 minute",
      "2 ore",
      "Nu există pauză obligatorie"
    ],
    correctIndex: 0,
    explanation: "Pauza de 45 minute poate fi divizată în 15 + 30 minute, dar trebuie respectată.",
    language: "ro"
  },
  {
    question: "Ce verificare este esențială pentru transportul coletărie (groupage)?",
    options: [
      "Separarea corectă a mărfurilor diferitelor comenzi",
      "Doar greutatea totală",
      "Culoarea ambalajelor",
      "Numărul de uși"
    ],
    correctIndex: 0,
    explanation: "Separarea corectă previne confuziile și livrările greșite în transportul groupage.",
    language: "ro"
  },
  {
    question: "Ce element trebuie verificat în checklist-ul post-descărcare?",
    options: [
      "CMR semnat, POD obținut, starea mărfii confirmată",
      "Doar ora plecării",
      "Culoarea rampei",
      "Vremea de afară"
    ],
    correctIndex: 0,
    explanation: "Confirmarea documentelor la descărcare închide corect ciclul transportului.",
    language: "ro"
  },
  {
    question: "Ce verificare obligatorie se face pentru transport cu tir prelată?",
    options: [
      "Starea prelată, integritatea sigiliilor, fixarea mărfii",
      "Doar combustibilul",
      "Radio funcțional",
      "Culoarea prelată"
    ],
    correctIndex: 0,
    explanation: "Starea prelată și sigiliile protejează marfa de furt și intemperii.",
    language: "ro"
  },
  {
    question: "Care este frecvența recomandată pentru actualizarea checklist-urilor operaționale?",
    options: [
      "Trimestrial sau la modificări legislative",
      "O dată la 10 ani",
      "Niciodată",
      "Doar la cererea clientului"
    ],
    correctIndex: 0,
    explanation: "Actualizarea regulată asigură conformitatea cu cerințele legale și operaționale curente.",
    language: "ro"
  },
  {
    question: "Ce element din checklist verifică disponibilitatea șoferului?",
    options: [
      "Ore de conducere rămase, stare de odihnă, documente valide",
      "Doar culoarea uniformei",
      "Preferințe muzicale",
      "Numărul de copii"
    ],
    correctIndex: 0,
    explanation: "Verificarea disponibilității șoferului previne încălcările legale și asigură siguranța.",
    language: "ro"
  },
  {
    question: "Ce trebuie inclus în checklist-ul pentru transport internațional?",
    options: [
      "Documente vamale, permise de tranzit, asigurare validă",
      "Doar harta rutieră",
      "Fotografii personale",
      "Meniu restaurant"
    ],
    correctIndex: 0,
    explanation: "Documentele internaționale sunt esențiale pentru tranzitul fără probleme la frontiere.",
    language: "ro"
  },

  // German Questions (30+)
  {
    question: "Was ist der erste Punkt auf einer Pre-Transport-Checkliste?",
    options: [
      "Überprüfung der vollständigen Dokumente (CMR, Rechnung, Packliste)",
      "Motor starten",
      "GPS einstellen",
      "Vom Depot abfahren"
    ],
    correctIndex: 0,
    explanation: "Die Dokumentenprüfung hat Priorität, um Probleme am Ziel oder beim Zoll zu vermeiden.",
    language: "de"
  },
  {
    question: "Welche Prüfung ist bei der Beladung von palettierter Ware obligatorisch?",
    options: [
      "Anzahl, Zustand und korrekte Befestigung der Paletten",
      "Nur das Gesamtgewicht",
      "Palettenfarbe",
      "Herstellermarke"
    ],
    correctIndex: 0,
    explanation: "Die Prüfung von Anzahl, Zustand und Befestigung verhindert Schäden und Bestandsabweichungen.",
    language: "de"
  },
  {
    question: "Was muss vor der Beladung bei Kühltransporten geprüft werden?",
    options: [
      "Vorgekühlte Temperatur, Aggregatfunktion, Sauberkeit",
      "Nur Anhängerfarbe",
      "Sommerreifen",
      "Funktionierendes Radio"
    ],
    correctIndex: 0,
    explanation: "Vorkühlung, Funktionalität und Hygiene sind entscheidend für die Warenqualität.",
    language: "de"
  },
  {
    question: "Was ist die maximale tägliche Lenkzeit nach EU-Verordnung?",
    options: [
      "9 Stunden (zweimal pro Woche auf 10 Stunden verlängerbar)",
      "12 Stunden unbegrenzt",
      "Maximal 6 Stunden",
      "15 Stunden am Wochenende"
    ],
    correctIndex: 0,
    explanation: "Die EU-Verordnung 561/2006 legt klare Grenzen für die Verkehrssicherheit fest.",
    language: "de"
  },
  {
    question: "Welches Element ist auf der ADR-Checkliste obligatorisch?",
    options: [
      "Schutzausrüstung und schriftliche Anweisungen gemäß der Ladung",
      "Nur Firmenlogo",
      "UKW-Radio",
      "Innenraumdekoration"
    ],
    correctIndex: 0,
    explanation: "ADR-Ausrüstung und schriftliche Anweisungen sind gesetzlich für die Sicherheit vorgeschrieben.",
    language: "de"
  },
  {
    question: "Wie lautet die Formel zur Berechnung der Lademeter (LDM)?",
    options: [
      "Länge (m) × Breite (m) / 2,4",
      "Gewicht × Volumen",
      "Höhe × 10",
      "Palettenanzahl × 2"
    ],
    correctIndex: 0,
    explanation: "LDM = (L × B) / 2,4 berechnet den belegten Raum bezogen auf die Standard-LKW-Breite.",
    language: "de"
  },
  {
    question: "Welches Dokument ist bei der Qualifizierung eines neuen Spediteurs zu prüfen?",
    options: [
      "Transportlizenz, gültige CMR-Versicherung, finanzielle Leistungsfähigkeit",
      "Nur Telefonnummer",
      "Facebook-Konto",
      "Kulinarische Vorlieben"
    ],
    correctIndex: 0,
    explanation: "Die vollständige Spediteurprüfung minimiert operative und finanzielle Risiken.",
    language: "de"
  },
  {
    question: "Was ist die Frist für die Meldung sichtbarer Schäden auf der Schadens-Checkliste?",
    options: [
      "Bei Lieferung - Vermerk auf CMR vor Unterschrift",
      "30 Tage danach",
      "Ein Jahr später",
      "Keine Frist"
    ],
    correctIndex: 0,
    explanation: "Sichtbare Schäden müssen bei Lieferung auf dem CMR vermerkt werden, um Ansprüche zu sichern.",
    language: "de"
  },
  {
    question: "Welches Element prüfen Sie auf der Liefer-Checkliste?",
    options: [
      "Standortbestätigung, Empfängerkontakt, Zeitfenster",
      "Wetter nächsten Monat",
      "Fahrer-Horoskop",
      "Gebäudefarbe"
    ],
    correctIndex: 0,
    explanation: "Die Bestätigung der Lieferdetails verhindert unnötige Wartezeiten und Verzögerungen.",
    language: "de"
  },
  {
    question: "Wie lange ist die Mindestpause nach 4,5 Stunden Lenkzeit?",
    options: [
      "45 Minuten (oder 15 + 30 Minuten)",
      "5 Minuten",
      "2 Stunden",
      "Es gibt keine Pflichtpause"
    ],
    correctIndex: 0,
    explanation: "Die 45-Minuten-Pause kann in 15 + 30 Minuten aufgeteilt werden, muss aber eingehalten werden.",
    language: "de"
  },
  {
    question: "Welche Prüfung ist für Sammelguttransporte wesentlich?",
    options: [
      "Korrekte Trennung der Waren verschiedener Aufträge",
      "Nur Gesamtgewicht",
      "Verpackungsfarbe",
      "Anzahl der Türen"
    ],
    correctIndex: 0,
    explanation: "Korrekte Trennung verhindert Verwechslungen und Fehllieferungen bei Sammelgut.",
    language: "de"
  },
  {
    question: "Welches Element muss auf der Checkliste nach Entladung geprüft werden?",
    options: [
      "Unterschriebener CMR, POD erhalten, Warenzustand bestätigt",
      "Nur Abfahrtszeit",
      "Rampenfarbe",
      "Außenwetter"
    ],
    correctIndex: 0,
    explanation: "Dokumentenbestätigung bei Entladung schließt den Transportzyklus korrekt ab.",
    language: "de"
  },
  {
    question: "Welche Prüfung ist für Planen-LKW-Transport obligatorisch?",
    options: [
      "Planenzustand, Siegelintegrität, Ladungssicherung",
      "Nur Kraftstoff",
      "Funktionierendes Radio",
      "Planenfarbe"
    ],
    correctIndex: 0,
    explanation: "Planenzustand und Siegel schützen die Ware vor Diebstahl und Witterung.",
    language: "de"
  },
  {
    question: "Wie oft sollten betriebliche Checklisten aktualisiert werden?",
    options: [
      "Vierteljährlich oder bei Gesetzesänderungen",
      "Einmal in 10 Jahren",
      "Niemals",
      "Nur auf Kundenanfrage"
    ],
    correctIndex: 0,
    explanation: "Regelmäßige Aktualisierung gewährleistet Einhaltung aktueller gesetzlicher und betrieblicher Anforderungen.",
    language: "de"
  },
  {
    question: "Welches Checklisten-Element prüft die Fahrerverfügbarkeit?",
    options: [
      "Verbleibende Lenkzeit, Ruhezustand, gültige Dokumente",
      "Nur Uniformfarbe",
      "Musikvorlieben",
      "Kinderzahl"
    ],
    correctIndex: 0,
    explanation: "Die Verfügbarkeitsprüfung verhindert Rechtsverstöße und gewährleistet Sicherheit.",
    language: "de"
  },
  {
    question: "Was muss in der Checkliste für internationalen Transport enthalten sein?",
    options: [
      "Zolldokumente, Transitgenehmigungen, gültige Versicherung",
      "Nur Straßenkarte",
      "Persönliche Fotos",
      "Restaurantmenü"
    ],
    correctIndex: 0,
    explanation: "Internationale Dokumente sind für problemlosen Grenzübertritt unerlässlich.",
    language: "de"
  },

  // English Questions (30+)
  {
    question: "What is the first item on a pre-transport checklist?",
    options: [
      "Verification of complete documents (CMR, invoice, packing list)",
      "Starting the engine",
      "Setting the GPS",
      "Leaving the depot"
    ],
    correctIndex: 0,
    explanation: "Document verification is priority to avoid problems at destination or customs.",
    language: "en"
  },
  {
    question: "What mandatory check is done when loading palletized cargo?",
    options: [
      "Number, condition, and correct securing of pallets",
      "Only total weight",
      "Pallet color",
      "Manufacturer's brand"
    ],
    correctIndex: 0,
    explanation: "Checking number, condition, and securing prevents damage and inventory discrepancies.",
    language: "en"
  },
  {
    question: "What must be verified before loading for refrigerated transport?",
    options: [
      "Pre-cooled temperature, unit function, cleanliness",
      "Only trailer color",
      "Summer tires",
      "Working radio"
    ],
    correctIndex: 0,
    explanation: "Pre-cooling, functionality, and hygiene are critical for maintaining cargo quality.",
    language: "en"
  },
  {
    question: "What is the maximum daily driving time according to EU regulation?",
    options: [
      "9 hours (extendable to 10 hours twice per week)",
      "12 hours unlimited",
      "6 hours maximum",
      "15 hours on weekends"
    ],
    correctIndex: 0,
    explanation: "EU Regulation 561/2006 sets clear limits for road safety.",
    language: "en"
  },
  {
    question: "What element is mandatory on the ADR checklist?",
    options: [
      "Protective equipment and written instructions per cargo",
      "Only company logo",
      "FM radio",
      "Interior decorations"
    ],
    correctIndex: 0,
    explanation: "ADR equipment and written instructions are legally required for safety.",
    language: "en"
  },
  {
    question: "What is the formula for calculating loading meters (LDM)?",
    options: [
      "Length (m) × Width (m) / 2.4",
      "Weight × Volume",
      "Height × 10",
      "Number of pallets × 2"
    ],
    correctIndex: 0,
    explanation: "LDM = (L × W) / 2.4 calculates space occupied relative to standard truck width.",
    language: "en"
  },
  {
    question: "What document must be verified when qualifying a new carrier?",
    options: [
      "Transport license, valid CMR insurance, financial capacity",
      "Only phone number",
      "Facebook account",
      "Culinary preferences"
    ],
    correctIndex: 0,
    explanation: "Complete carrier verification minimizes operational and financial risks.",
    language: "en"
  },
  {
    question: "On the claims checklist, what is the deadline for reporting visible damage?",
    options: [
      "At delivery - note on CMR before signing",
      "30 days after",
      "One year later",
      "No deadline"
    ],
    correctIndex: 0,
    explanation: "Visible damage must be noted on CMR at delivery time to preserve rights.",
    language: "en"
  },
  {
    question: "What element do you verify on the delivery checklist?",
    options: [
      "Location confirmation, consignee contact, time slot",
      "Weather next month",
      "Driver horoscope",
      "Building color"
    ],
    correctIndex: 0,
    explanation: "Confirming delivery details prevents unnecessary waiting and delays.",
    language: "en"
  },
  {
    question: "What is the minimum mandatory break after 4.5 hours of driving?",
    options: [
      "45 minutes (or 15 + 30 minutes)",
      "5 minutes",
      "2 hours",
      "No mandatory break"
    ],
    correctIndex: 0,
    explanation: "The 45-minute break can be split into 15 + 30 minutes but must be observed.",
    language: "en"
  },
  {
    question: "What check is essential for groupage transport?",
    options: [
      "Correct separation of goods from different orders",
      "Only total weight",
      "Package color",
      "Number of doors"
    ],
    correctIndex: 0,
    explanation: "Correct separation prevents confusion and wrong deliveries in groupage transport.",
    language: "en"
  },
  {
    question: "What element must be checked on post-unloading checklist?",
    options: [
      "Signed CMR, POD obtained, cargo condition confirmed",
      "Only departure time",
      "Ramp color",
      "Outside weather"
    ],
    correctIndex: 0,
    explanation: "Document confirmation at unloading properly closes the transport cycle.",
    language: "en"
  },
  {
    question: "What mandatory check is done for tarpaulin trailer transport?",
    options: [
      "Tarpaulin condition, seal integrity, cargo securing",
      "Only fuel",
      "Working radio",
      "Tarpaulin color"
    ],
    correctIndex: 0,
    explanation: "Tarpaulin condition and seals protect cargo from theft and weather.",
    language: "en"
  },
  {
    question: "How often should operational checklists be updated?",
    options: [
      "Quarterly or upon legislative changes",
      "Once every 10 years",
      "Never",
      "Only upon client request"
    ],
    correctIndex: 0,
    explanation: "Regular updating ensures compliance with current legal and operational requirements.",
    language: "en"
  },
  {
    question: "What checklist element verifies driver availability?",
    options: [
      "Remaining driving hours, rest status, valid documents",
      "Only uniform color",
      "Music preferences",
      "Number of children"
    ],
    correctIndex: 0,
    explanation: "Availability verification prevents legal violations and ensures safety.",
    language: "en"
  },
  {
    question: "What must be included in the international transport checklist?",
    options: [
      "Customs documents, transit permits, valid insurance",
      "Only road map",
      "Personal photos",
      "Restaurant menu"
    ],
    correctIndex: 0,
    explanation: "International documents are essential for smooth border crossing.",
    language: "en"
  }
];
