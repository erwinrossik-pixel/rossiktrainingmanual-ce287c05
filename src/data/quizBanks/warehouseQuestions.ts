import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const warehouseQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce este cross-docking?",
      de: "Was ist Cross-Docking?",
      en: "What is cross-docking?"
    },
    options: {
      ro: ["Depozitare pe termen lung", "Transfer direct din vehicul în vehicul fără stocare", "Ambalare produse", "Sortare alfabetică"],
      de: ["Langzeitlagerung", "Direkter Transfer von Fahrzeug zu Fahrzeug ohne Lagerung", "Produktverpackung", "Alphabetische Sortierung"],
      en: ["Long-term storage", "Direct transfer from vehicle to vehicle without storage", "Product packaging", "Alphabetical sorting"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cross-docking minimizează timpul de stocare, accelerând fluxul de marfă.",
      de: "Cross-Docking minimiert Lagerzeit und beschleunigt den Warenfluss.",
      en: "Cross-docking minimizes storage time, accelerating goods flow."
    }
  },
  {
    question: {
      ro: "Ce înseamnă LTL (Less Than Truckload)?",
      de: "Was bedeutet LTL (Less Than Truckload)?",
      en: "What does LTL (Less Than Truckload) mean?"
    },
    options: {
      ro: ["Camion complet", "Transport grupat - încărcare parțială combinată cu alte mărfuri", "Camion gol", "Transport express"],
      de: ["Kompletter LKW", "Sammelguttransport - Teilladung mit anderen Waren kombiniert", "Leerer LKW", "Expresstransport"],
      en: ["Full truck", "Grouped transport - partial load combined with other goods", "Empty truck", "Express transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "LTL permite transportul eficient al cantităților mici prin consolidare.",
      de: "LTL ermöglicht effizienten Transport kleiner Mengen durch Konsolidierung.",
      en: "LTL enables efficient transport of small quantities through consolidation."
    }
  },
  {
    question: {
      ro: "Ce este un palet EUR/EPAL?",
      de: "Was ist eine EUR/EPAL-Palette?",
      en: "What is a EUR/EPAL pallet?"
    },
    options: {
      ro: ["Orice palet", "Palet standardizat 80x120 cm, schimbabil între parteneri", "Palet de unică folosință", "Container mic"],
      de: ["Jede Palette", "Standardisierte Palette 80x120 cm, zwischen Partnern austauschbar", "Einwegpalette", "Kleiner Container"],
      en: ["Any pallet", "Standardized pallet 80x120 cm, exchangeable between partners", "Disposable pallet", "Small container"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Paleții EUR sunt standardizați și permit schimb 1:1 în rețeaua europeană.",
      de: "EUR-Paletten sind standardisiert und ermöglichen 1:1-Austausch im europäischen Netzwerk.",
      en: "EUR pallets are standardized and allow 1:1 exchange in the European network."
    }
  },
  {
    question: {
      ro: "Ce verifici la recepția mărfii în depozit?",
      de: "Was überprüfen Sie beim Wareneingang im Lager?",
      en: "What do you check at goods reception in warehouse?"
    },
    options: {
      ro: ["Doar cantitatea", "Cantitate, calitate, ambalaj, documente, deteriorări", "Doar documentele", "Nimic"],
      de: ["Nur Menge", "Menge, Qualität, Verpackung, Dokumente, Beschädigungen", "Nur Dokumente", "Nichts"],
      en: ["Only quantity", "Quantity, quality, packaging, documents, damages", "Only documents", "Nothing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificarea completă la recepție previne dispute ulterioare privind starea mărfii.",
      de: "Vollständige Prüfung beim Empfang verhindert spätere Streitigkeiten über den Warenzustand.",
      en: "Complete check at reception prevents later disputes about goods condition."
    }
  },
  {
    question: {
      ro: "Ce este un WMS (Warehouse Management System)?",
      de: "Was ist ein WMS (Warehouse Management System)?",
      en: "What is a WMS (Warehouse Management System)?"
    },
    options: {
      ro: ["Calculator simplu", "Software pentru gestionarea operațiunilor de depozit", "Sistem de alarme", "Rețea WiFi"],
      de: ["Einfacher Computer", "Software zur Verwaltung von Lageroperationen", "Alarmsystem", "WiFi-Netzwerk"],
      en: ["Simple computer", "Software for managing warehouse operations", "Alarm system", "WiFi network"]
    },
    correctIndex: 1,
    explanation: {
      ro: "WMS optimizează stocarea, picking-ul, inventarul și expedierile.",
      de: "WMS optimiert Lagerung, Kommissionierung, Inventar und Versand.",
      en: "WMS optimizes storage, picking, inventory and shipping."
    }
  },
  {
    question: {
      ro: "Ce înseamnă FIFO în gestionarea stocurilor?",
      de: "Was bedeutet FIFO in der Bestandsverwaltung?",
      en: "What does FIFO mean in inventory management?"
    },
    options: {
      ro: ["Ultimul intrat, primul ieșit", "Primul intrat, primul ieșit", "Aleatoriu", "Cel mai scump primul"],
      de: ["Letzter rein, erster raus", "Erster rein, erster raus", "Zufällig", "Teuerstes zuerst"],
      en: ["Last in, first out", "First in, first out", "Random", "Most expensive first"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FIFO asigură că mărfurile mai vechi sunt expediate primele, important pentru produse perisabile.",
      de: "FIFO stellt sicher, dass ältere Waren zuerst versandt werden, wichtig für verderbliche Produkte.",
      en: "FIFO ensures older goods are shipped first, important for perishable products."
    }
  },
  {
    question: {
      ro: "Ce este picking-ul în depozit?",
      de: "Was ist Kommissionierung im Lager?",
      en: "What is picking in warehouse?"
    },
    options: {
      ro: ["Depozitare", "Procesul de colectare a articolelor pentru comenzi", "Ambalare", "Livrare"],
      de: ["Lagerung", "Prozess des Sammelns von Artikeln für Bestellungen", "Verpackung", "Lieferung"],
      en: ["Storage", "Process of collecting items for orders", "Packaging", "Delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Picking-ul eficient reduce timpul de procesare și erorile în comenzi.",
      de: "Effiziente Kommissionierung reduziert Bearbeitungszeit und Bestellfehler.",
      en: "Efficient picking reduces processing time and order errors."
    }
  },
  {
    question: {
      ro: "Ce tipuri de rafturi sunt utilizate în depozite?",
      de: "Welche Regaltypen werden in Lagern verwendet?",
      en: "What types of shelving are used in warehouses?"
    },
    options: {
      ro: ["Doar rafturi simple", "Selective, drive-in, push-back, flow-through, cantilever", "Doar cutii", "Doar paleți pe podea"],
      de: ["Nur einfache Regale", "Selektiv, Drive-in, Push-back, Flow-through, Kragarm", "Nur Kisten", "Nur Paletten auf dem Boden"],
      en: ["Only simple shelves", "Selective, drive-in, push-back, flow-through, cantilever", "Only boxes", "Only pallets on floor"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diferite sisteme de rafturi optimizează spațiul și accesul în funcție de tip de marfă.",
      de: "Verschiedene Regalsysteme optimieren Raum und Zugang je nach Warentyp.",
      en: "Different shelving systems optimize space and access depending on goods type."
    }
  },
  {
    question: {
      ro: "Ce este un număr de lot (batch number)?",
      de: "Was ist eine Chargennummer (Batch Number)?",
      en: "What is a batch number?"
    },
    options: {
      ro: ["Număr de telefon", "Identificator unic pentru trasabilitatea producției", "Cod poștal", "Număr de casă"],
      de: ["Telefonnummer", "Eindeutiger Identifikator für Produktionsrückverfolgbarkeit", "Postleitzahl", "Hausnummer"],
      en: ["Phone number", "Unique identifier for production traceability", "Postal code", "House number"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lotul permite identificarea și retragerea produselor în caz de probleme de calitate.",
      de: "Die Charge ermöglicht Identifizierung und Rückruf von Produkten bei Qualitätsproblemen.",
      en: "Batch allows identification and recall of products in case of quality issues."
    }
  },
  {
    question: {
      ro: "Ce echipamente de manipulare sunt folosite în depozit?",
      de: "Welche Handhabungsgeräte werden im Lager verwendet?",
      en: "What handling equipment is used in warehouse?"
    },
    options: {
      ro: ["Doar mâna", "Stivuitoare, transpalete, conveiere, cărucioare", "Doar cărucioare", "Doar conveiere"],
      de: ["Nur Hand", "Gabelstapler, Hubwagen, Förderbänder, Wagen", "Nur Wagen", "Nur Förderbänder"],
      en: ["Only hands", "Forklifts, pallet jacks, conveyors, carts", "Only carts", "Only conveyors"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Echipamentele potrivite cresc eficiența și siguranța operațiunilor de depozit.",
      de: "Geeignete Ausrüstung erhöht Effizienz und Sicherheit der Lageroperationen.",
      en: "Proper equipment increases efficiency and safety of warehouse operations."
    }
  },
  {
    question: {
      ro: "Ce este consolidarea mărfurilor?",
      de: "Was ist Warenkonsolidierung?",
      en: "What is goods consolidation?"
    },
    options: {
      ro: ["Separarea mărfurilor", "Combinarea mai multor expedieri mici într-una mare", "Distrugerea mărfurilor", "Returnarea mărfurilor"],
      de: ["Warentrennung", "Kombination mehrerer kleiner Sendungen zu einer großen", "Warenvernichtung", "Warenrücksendung"],
      en: ["Separating goods", "Combining multiple small shipments into one large", "Destroying goods", "Returning goods"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Consolidarea reduce costurile de transport și îmbunătățește eficiența.",
      de: "Konsolidierung reduziert Transportkosten und verbessert Effizienz.",
      en: "Consolidation reduces transport costs and improves efficiency."
    }
  },
  {
    question: {
      ro: "Ce înseamnă SKU (Stock Keeping Unit)?",
      de: "Was bedeutet SKU (Stock Keeping Unit)?",
      en: "What does SKU (Stock Keeping Unit) mean?"
    },
    options: {
      ro: ["Unitate de măsură", "Cod unic de identificare pentru fiecare produs", "Număr de angajați", "Suprafață depozit"],
      de: ["Maßeinheit", "Einzigartiger Identifikationscode für jedes Produkt", "Mitarbeiterzahl", "Lagerfläche"],
      en: ["Unit of measurement", "Unique identification code for each product", "Number of employees", "Warehouse area"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SKU permite identificarea precisă și urmărirea fiecărui articol din stoc.",
      de: "SKU ermöglicht präzise Identifizierung und Verfolgung jedes Artikels im Bestand.",
      en: "SKU allows precise identification and tracking of each item in stock."
    }
  },
  {
    question: {
      ro: "Ce este zona de staging în depozit?",
      de: "Was ist die Staging-Zone im Lager?",
      en: "What is the staging area in warehouse?"
    },
    options: {
      ro: ["Zona de birouri", "Spațiu temporar pentru pregătirea expedierilor sau recepției", "Parcare", "Cantină"],
      de: ["Bürobereich", "Temporärer Raum zur Vorbereitung von Versand oder Empfang", "Parkplatz", "Kantine"],
      en: ["Office area", "Temporary space for preparing shipments or reception", "Parking", "Cafeteria"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Zona de staging organizează fluxul de mărfuri înainte de încărcare sau după descărcare.",
      de: "Die Staging-Zone organisiert den Warenfluss vor dem Laden oder nach dem Entladen.",
      en: "Staging area organizes goods flow before loading or after unloading."
    }
  },
  {
    question: {
      ro: "Ce este inventarul ciclic?",
      de: "Was ist zyklische Inventur?",
      en: "What is cycle counting?"
    },
    options: {
      ro: ["Inventar anual complet", "Numărarea parțială și regulată a stocurilor", "Inventar la cerere", "Fără inventar"],
      de: ["Vollständige Jahresinventur", "Regelmäßige teilweise Bestandszählung", "Inventur auf Anfrage", "Keine Inventur"],
      en: ["Complete annual inventory", "Regular partial stock counting", "Inventory on request", "No inventory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Inventarul ciclic menține acuratețea stocurilor fără a întrerupe operațiunile.",
      de: "Zyklische Inventur hält Bestandsgenauigkeit aufrecht ohne Betriebsunterbrechung.",
      en: "Cycle counting maintains stock accuracy without disrupting operations."
    }
  },
  {
    question: {
      ro: "Ce documentație se generează la expediere?",
      de: "Welche Dokumentation wird beim Versand erstellt?",
      en: "What documentation is generated at shipping?"
    },
    options: {
      ro: ["Doar factura", "Aviz/livrare, CMR, packing list, etichete, instrucțiuni speciale", "Doar CMR", "Nimic"],
      de: ["Nur Rechnung", "Lieferschein, CMR, Packliste, Etiketten, Sonderanweisungen", "Nur CMR", "Nichts"],
      en: ["Only invoice", "Delivery note, CMR, packing list, labels, special instructions", "Only CMR", "Nothing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentația completă asigură trasabilitatea și conformitatea expedierilor.",
      de: "Vollständige Dokumentation gewährleistet Rückverfolgbarkeit und Versandkonformität.",
      en: "Complete documentation ensures traceability and shipment compliance."
    }
  },
  {
    question: {
      ro: "Ce este slot-ul de încărcare/descărcare?",
      de: "Was ist das Be-/Entladezeitfenster?",
      en: "What is a loading/unloading slot?"
    },
    options: {
      ro: ["Parcare liberă", "Interval de timp rezervat pentru operațiuni la rampă", "Loc de odihnă", "Birou"],
      de: ["Freies Parken", "Reserviertes Zeitfenster für Rampenoperationen", "Ruheplatz", "Büro"],
      en: ["Free parking", "Reserved time interval for dock operations", "Rest area", "Office"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Slot-urile optimizează fluxul de vehicule și reduc timpii de așteptare.",
      de: "Zeitfenster optimieren den Fahrzeugfluss und reduzieren Wartezeiten.",
      en: "Slots optimize vehicle flow and reduce waiting times."
    }
  },
  {
    question: {
      ro: "Ce este labelarea produselor în depozit?",
      de: "Was ist Produktetikettierung im Lager?",
      en: "What is product labeling in warehouse?"
    },
    options: {
      ro: ["Doar estetică", "Aplicarea de etichete cu informații pentru identificare și trasabilitate", "Colorare", "Ambalare"],
      de: ["Nur Ästhetik", "Anbringen von Etiketten mit Informationen zur Identifizierung und Rückverfolgbarkeit", "Färbung", "Verpackung"],
      en: ["Just aesthetics", "Applying labels with information for identification and traceability", "Coloring", "Packaging"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Etichetarea corectă permite identificarea rapidă și previne erorile.",
      de: "Korrekte Etikettierung ermöglicht schnelle Identifizierung und verhindert Fehler.",
      en: "Correct labeling allows quick identification and prevents errors."
    }
  },
  {
    question: {
      ro: "Ce este un depozit de tranzit (hub)?",
      de: "Was ist ein Transitlager (Hub)?",
      en: "What is a transit warehouse (hub)?"
    },
    options: {
      ro: ["Depozit permanent", "Punct de sortare și redistribuire pentru mărfuri în tranzit", "Magazin", "Fabrică"],
      de: ["Dauerlager", "Sortier- und Umverteilungspunkt für Transitwaren", "Geschäft", "Fabrik"],
      en: ["Permanent warehouse", "Sorting and redistribution point for goods in transit", "Store", "Factory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Hub-urile facilitează consolidarea și distribuția eficientă a mărfurilor.",
      de: "Hubs ermöglichen effiziente Konsolidierung und Verteilung von Waren.",
      en: "Hubs facilitate efficient consolidation and distribution of goods."
    }
  },
  {
    question: {
      ro: "Ce înseamnă capacitatea de paletizare?",
      de: "Was bedeutet Palettierfähigkeit?",
      en: "What does palletization capacity mean?"
    },
    options: {
      ro: ["Număr de angajați", "Numărul maxim de paleți care pot fi stocați sau manipulați", "Viteza de lucru", "Costul depozitării"],
      de: ["Mitarbeiterzahl", "Maximale Anzahl von Paletten die gelagert oder bewegt werden können", "Arbeitsgeschwindigkeit", "Lagerkosten"],
      en: ["Number of employees", "Maximum number of pallets that can be stored or handled", "Work speed", "Storage cost"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Capacitatea de paletizare determină volumul operațiunilor de depozit.",
      de: "Palettierfähigkeit bestimmt das Volumen der Lageroperationen.",
      en: "Palletization capacity determines warehouse operations volume."
    }
  },
  {
    question: {
      ro: "Ce cerințe speciale are depozitarea mărfurilor periculoase?",
      de: "Welche besonderen Anforderungen hat die Lagerung gefährlicher Güter?",
      en: "What special requirements does dangerous goods storage have?"
    },
    options: {
      ro: ["Niciuna", "Zone separate, ventilație, echipament de siguranță, autorizații", "Doar etichetare", "Doar asigurare"],
      de: ["Keine", "Getrennte Bereiche, Belüftung, Sicherheitsausrüstung, Genehmigungen", "Nur Etikettierung", "Nur Versicherung"],
      en: ["None", "Separate areas, ventilation, safety equipment, permits", "Only labeling", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mărfurile periculoase necesită condiții speciale de depozitare pentru siguranță.",
      de: "Gefährliche Güter erfordern besondere Lagerbedingungen für Sicherheit.",
      en: "Dangerous goods require special storage conditions for safety."
    }
  },
  {
    question: {
      ro: "Ce este optimizarea spațiului de depozitare?",
      de: "Was ist Lagerraumoptimierung?",
      en: "What is storage space optimization?"
    },
    options: {
      ro: ["Mai mult spațiu gol", "Maximizarea utilizării volumului disponibil prin aranjare eficientă", "Reducere spațiu", "Închiriere externă"],
      de: ["Mehr leerer Raum", "Maximierung der Nutzung des verfügbaren Volumens durch effiziente Anordnung", "Raumreduzierung", "Externe Vermietung"],
      en: ["More empty space", "Maximizing use of available volume through efficient arrangement", "Space reduction", "External rental"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Optimizarea reduce costurile și crește capacitatea efectivă a depozitului.",
      de: "Optimierung reduziert Kosten und erhöht die effektive Lagerkapazität.",
      en: "Optimization reduces costs and increases effective warehouse capacity."
    }
  },
  {
    question: {
      ro: "Ce înseamnă picking la nivel de unitate vs. la nivel de carcasă?",
      de: "Was bedeutet Stück-Kommissionierung vs. Karton-Kommissionierung?",
      en: "What does piece-level picking vs. case-level picking mean?"
    },
    options: {
      ro: ["Același lucru", "Colectare bucată cu bucată vs. colectare cutii întregi", "Diferență de preț", "Diferență de locație"],
      de: ["Dasselbe", "Stückweises Sammeln vs. Sammeln ganzer Kartons", "Preisunterschied", "Standortunterschied"],
      en: ["Same thing", "Piece by piece collection vs. full box collection", "Price difference", "Location difference"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Picking-ul la nivel de unitate este mai costisitor dar necesar pentru comenzi mici.",
      de: "Stück-Kommissionierung ist teurer aber notwendig für kleine Bestellungen.",
      en: "Piece-level picking is more expensive but necessary for small orders."
    }
  },
  {
    question: {
      ro: "Ce este reverse logistics în depozit?",
      de: "Was ist Reverse Logistics im Lager?",
      en: "What is reverse logistics in warehouse?"
    },
    options: {
      ro: ["Transport invers", "Gestionarea retururilor, reciclării și recuperării produselor", "Livrare inversă", "Stivuire inversă"],
      de: ["Rücktransport", "Verwaltung von Retouren, Recycling und Produktrückgewinnung", "Umgekehrte Lieferung", "Umgekehrte Stapelung"],
      en: ["Reverse transport", "Managing returns, recycling and product recovery", "Reverse delivery", "Reverse stacking"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reverse logistics gestionează fluxul invers al produselor pentru valoare maximă.",
      de: "Reverse Logistics verwaltet den umgekehrten Produktfluss für maximalen Wert.",
      en: "Reverse logistics manages the reverse flow of products for maximum value."
    }
  },
  {
    question: {
      ro: "Ce este un order picker (picker de comenzi)?",
      de: "Was ist ein Kommissionierer?",
      en: "What is an order picker?"
    },
    options: {
      ro: ["Mașină de scris", "Persoană sau echipament care colectează produse pentru comenzi", "Calculator", "Imprimantă"],
      de: ["Schreibmaschine", "Person oder Gerät das Produkte für Bestellungen sammelt", "Computer", "Drucker"],
      en: ["Typewriter", "Person or equipment that collects products for orders", "Computer", "Printer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Order picker-ul este esențial pentru procesarea eficientă a comenzilor.",
      de: "Der Kommissionierer ist wesentlich für effiziente Auftragsbearbeitung.",
      en: "Order picker is essential for efficient order processing."
    }
  },
  {
    question: {
      ro: "Ce reprezintă lead time în depozit?",
      de: "Was bedeutet Durchlaufzeit im Lager?",
      en: "What does lead time mean in warehouse?"
    },
    options: {
      ro: ["Timp de pauză", "Timpul de la primirea comenzii până la expediere", "Timp de lucru", "Timp de odihnă"],
      de: ["Pausenzeit", "Zeit vom Auftragseingang bis zum Versand", "Arbeitszeit", "Ruhezeit"],
      en: ["Break time", "Time from order receipt to shipment", "Work time", "Rest time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lead time scurt înseamnă eficiență mare și clienți mulțumiți.",
      de: "Kurze Durchlaufzeit bedeutet hohe Effizienz und zufriedene Kunden.",
      en: "Short lead time means high efficiency and satisfied customers."
    }
  },
  {
    question: {
      ro: "Ce este nivelul minim de stoc (safety stock)?",
      de: "Was ist der Sicherheitsbestand (Safety Stock)?",
      en: "What is safety stock (minimum stock level)?"
    },
    options: {
      ro: ["Zero stoc", "Cantitatea minimă păstrată pentru a evita epuizarea stocului", "Stoc maxim", "Stoc mediu"],
      de: ["Nullbestand", "Mindestmenge die gehalten wird um Lagerengpässe zu vermeiden", "Maximalbestand", "Durchschnittsbestand"],
      en: ["Zero stock", "Minimum quantity kept to avoid stock-out", "Maximum stock", "Average stock"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Safety stock protejează împotriva fluctuațiilor de cerere sau întârzierilor de aprovizionare.",
      de: "Sicherheitsbestand schützt gegen Nachfrageschwankungen oder Lieferverzögerungen.",
      en: "Safety stock protects against demand fluctuations or supply delays."
    }
  },
  {
    question: {
      ro: "Ce este un dock leveler?",
      de: "Was ist eine Überladebrücke?",
      en: "What is a dock leveler?"
    },
    options: {
      ro: ["Lift pentru oameni", "Platformă reglabilă care face legătura între depozit și camion", "Scară", "Masă"],
      de: ["Personenlift", "Verstellbare Plattform die Lager und LKW verbindet", "Treppe", "Tisch"],
      en: ["People lift", "Adjustable platform connecting warehouse and truck", "Stairs", "Table"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dock leveler-ul permite încărcarea/descărcarea eficientă indiferent de înălțimea camionului.",
      de: "Die Überladebrücke ermöglicht effizientes Be-/Entladen unabhängig von der LKW-Höhe.",
      en: "Dock leveler enables efficient loading/unloading regardless of truck height."
    }
  },
  {
    question: {
      ro: "Ce sunt cerințele de temperatură controlată?",
      de: "Was sind Anforderungen an kontrollierte Temperatur?",
      en: "What are controlled temperature requirements?"
    },
    options: {
      ro: ["Nicio cerință", "Menținerea temperaturii specifice pentru produse sensibile", "Doar încălzire", "Doar răcire"],
      de: ["Keine Anforderung", "Aufrechterhaltung spezifischer Temperatur für empfindliche Produkte", "Nur Heizung", "Nur Kühlung"],
      en: ["No requirement", "Maintaining specific temperature for sensitive products", "Only heating", "Only cooling"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Temperatura controlată e esențială pentru alimente, medicamente și alte produse sensibile.",
      de: "Kontrollierte Temperatur ist wesentlich für Lebensmittel, Medikamente und andere empfindliche Produkte.",
      en: "Controlled temperature is essential for food, medicines and other sensitive products."
    }
  },
  {
    question: {
      ro: "Ce este batch picking?",
      de: "Was ist Batch-Kommissionierung?",
      en: "What is batch picking?"
    },
    options: {
      ro: ["Picking individual", "Colectarea articolelor pentru mai multe comenzi simultan", "Picking automat", "Picking aleatoriu"],
      de: ["Einzelkommissionierung", "Sammeln von Artikeln für mehrere Bestellungen gleichzeitig", "Automatische Kommissionierung", "Zufällige Kommissionierung"],
      en: ["Individual picking", "Collecting items for multiple orders simultaneously", "Automatic picking", "Random picking"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Batch picking reduce deplasările și crește eficiența în depozitele mari.",
      de: "Batch-Kommissionierung reduziert Wege und erhöht Effizienz in großen Lagern.",
      en: "Batch picking reduces travel and increases efficiency in large warehouses."
    }
  }
];
