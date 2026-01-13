import { TranslatedQuizQuestion } from '../quizTranslations';

export const introExtendedQuestions: TranslatedQuizQuestion[] = [
  {
    question: {
      ro: "Ce reprezintă manualul ROSSIK TRANSPORT & LOGISTIC?",
      en: "What does the ROSSIK TRANSPORT & LOGISTIC manual represent?",
      de: "Was stellt das ROSSIK TRANSPORT & LOGISTIC Handbuch dar?"
    },
    options: {
      ro: ["Un catalog de prețuri", "O resursă educațională completă pentru expediția de mărfuri", "Un raport financiar", "O listă de clienți"],
      en: ["A price catalog", "A comprehensive educational resource for freight forwarding", "A financial report", "A customer list"],
      de: ["Ein Preiskatalog", "Eine umfassende Bildungsressource für Spedition", "Ein Finanzbericht", "Eine Kundenliste"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Manualul ROSSIK este o resursă educațională completă care acoperă toate aspectele expediției de mărfuri rutiere.",
      en: "The ROSSIK manual is a comprehensive educational resource covering all aspects of road freight forwarding.",
      de: "Das ROSSIK-Handbuch ist eine umfassende Bildungsressource, die alle Aspekte der Straßenspedition abdeckt."
    }
  },
  {
    question: {
      ro: "Care este scopul principal al expediției de mărfuri (freight forwarding)?",
      en: "What is the main purpose of freight forwarding?",
      de: "Was ist der Hauptzweck der Spedition?"
    },
    options: {
      ro: ["Doar încărcarea camioanelor", "Coordonarea și organizarea transportului de mărfuri între expeditor și destinatar", "Vânzarea de vehicule", "Închirierea de depozite"],
      en: ["Only loading trucks", "Coordinating and organizing cargo transport between shipper and consignee", "Selling vehicles", "Renting warehouses"],
      de: ["Nur LKW beladen", "Koordinierung und Organisation des Gütertransports zwischen Versender und Empfänger", "Fahrzeuge verkaufen", "Lagerhäuser vermieten"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expediția de mărfuri implică coordonarea întregului lanț logistic - de la ridicare până la livrare.",
      en: "Freight forwarding involves coordinating the entire logistics chain - from pickup to delivery.",
      de: "Spedition umfasst die Koordination der gesamten Logistikkette - von der Abholung bis zur Lieferung."
    }
  },
  {
    question: {
      ro: "Ce rol joacă expeditorul de mărfuri în lanțul logistic?",
      en: "What role does the freight forwarder play in the supply chain?",
      de: "Welche Rolle spielt der Spediteur in der Lieferkette?"
    },
    options: {
      ro: ["Doar șofer", "Intermediar și coordonator între client și transportator", "Doar contabil", "Doar agent de vânzări"],
      en: ["Only driver", "Intermediary and coordinator between client and carrier", "Only accountant", "Only sales agent"],
      de: ["Nur Fahrer", "Vermittler und Koordinator zwischen Kunde und Frachtführer", "Nur Buchhalter", "Nur Verkaufsvertreter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expeditorul acționează ca intermediar, coordonând toate aspectele transportului și comunicând cu toate părțile implicate.",
      en: "The forwarder acts as an intermediary, coordinating all aspects of transport and communicating with all parties involved.",
      de: "Der Spediteur fungiert als Vermittler, koordiniert alle Aspekte des Transports und kommuniziert mit allen Beteiligten."
    }
  },
  {
    question: {
      ro: "Care sunt principalele tipuri de transport rutier de mărfuri în Europa?",
      en: "What are the main types of road freight transport in Europe?",
      de: "Welche sind die wichtigsten Arten des Straßengüterverkehrs in Europa?"
    },
    options: {
      ro: ["Doar local", "FTL (încărcătură completă), LTL (încărcătură parțială), grupaj", "Doar aerian", "Doar maritim"],
      en: ["Only local", "FTL (Full Truck Load), LTL (Less Than Truckload), groupage", "Only air", "Only sea"],
      de: ["Nur lokal", "FTL (Komplettladung), LTL (Teilladung), Sammelgut", "Nur Luft", "Nur See"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul rutier european include FTL, LTL și grupaj, fiecare cu caracteristici și aplicații specifice.",
      en: "European road transport includes FTL, LTL and groupage, each with specific characteristics and applications.",
      de: "Der europäische Straßentransport umfasst FTL, LTL und Sammelgut, jeweils mit spezifischen Eigenschaften und Anwendungen."
    }
  },
  {
    question: {
      ro: "De ce este importantă industria expediției de mărfuri?",
      en: "Why is the freight forwarding industry important?",
      de: "Warum ist die Speditionsbranche wichtig?"
    },
    options: {
      ro: ["Nu este importantă", "Facilitează comerțul internațional și aprovizionarea lanțurilor de producție", "Doar pentru taxe", "Doar pentru statistici"],
      en: ["It's not important", "Facilitates international trade and supply chain provisioning", "Only for taxes", "Only for statistics"],
      de: ["Sie ist nicht wichtig", "Erleichtert den internationalen Handel und die Lieferkettenversorgung", "Nur für Steuern", "Nur für Statistiken"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expediția de mărfuri este esențială pentru economia globală, permițând schimbul de bunuri între țări și continente.",
      en: "Freight forwarding is essential for the global economy, enabling the exchange of goods between countries and continents.",
      de: "Spedition ist für die Weltwirtschaft unerlässlich und ermöglicht den Warenaustausch zwischen Ländern und Kontinenten."
    }
  },
  // Additional 25 questions for intro chapter
  {
    question: {
      ro: "Ce este FTL în transportul rutier?",
      en: "What is FTL in road transport?",
      de: "Was ist FTL im Straßentransport?"
    },
    options: {
      ro: ["First Truck Loading", "Full Truck Load - încărcătură completă", "Fast Transport Line", "Freight Transport License"],
      en: ["First Truck Loading", "Full Truck Load - complete load", "Fast Transport Line", "Freight Transport License"],
      de: ["First Truck Loading", "Full Truck Load - Komplettladung", "Fast Transport Line", "Freight Transport License"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FTL (Full Truck Load) înseamnă că întregul camion este dedicat unei singure expediții.",
      en: "FTL (Full Truck Load) means the entire truck is dedicated to a single shipment.",
      de: "FTL (Full Truck Load) bedeutet, dass der gesamte LKW einer einzigen Sendung gewidmet ist."
    }
  },
  {
    question: {
      ro: "Ce este LTL în transportul rutier?",
      en: "What is LTL in road transport?",
      de: "Was ist LTL im Straßentransport?"
    },
    options: {
      ro: ["Long Term Loading", "Less Than Truckload - încărcătură parțială", "Local Transport Line", "Licensed Transport Logistics"],
      en: ["Long Term Loading", "Less Than Truckload - partial load", "Local Transport Line", "Licensed Transport Logistics"],
      de: ["Long Term Loading", "Less Than Truckload - Teilladung", "Local Transport Line", "Licensed Transport Logistics"]
    },
    correctIndex: 1,
    explanation: {
      ro: "LTL (Less Than Truckload) înseamnă că mai multe expediții partajează spațiul unui camion.",
      en: "LTL (Less Than Truckload) means multiple shipments share space in a truck.",
      de: "LTL (Less Than Truckload) bedeutet, dass mehrere Sendungen den Platz in einem LKW teilen."
    }
  },
  {
    question: {
      ro: "Care este diferența principală între expeditor și transportator?",
      en: "What is the main difference between forwarder and carrier?",
      de: "Was ist der Hauptunterschied zwischen Spediteur und Frachtführer?"
    },
    options: {
      ro: ["Nu există diferență", "Expeditorul coordonează, transportatorul execută fizic transportul", "Transportatorul coordonează", "Sunt același lucru"],
      en: ["No difference", "Forwarder coordinates, carrier physically executes transport", "Carrier coordinates", "They are the same"],
      de: ["Kein Unterschied", "Spediteur koordiniert, Frachtführer führt Transport physisch aus", "Frachtführer koordiniert", "Sie sind dasselbe"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expeditorul organizează și coordonează transportul, în timp ce transportatorul efectuează fizic mișcarea mărfii.",
      en: "The forwarder organizes and coordinates transport, while the carrier physically moves the goods.",
      de: "Der Spediteur organisiert und koordiniert den Transport, während der Frachtführer die Waren physisch bewegt."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'grupaj' în transport?",
      en: "What does 'groupage' mean in transport?",
      de: "Was bedeutet 'Sammelgut' im Transport?"
    },
    options: {
      ro: ["Transport de grup", "Consolidarea mai multor mărfuri mici într-un singur transport", "Transport în grup de camioane", "Asigurare de grup"],
      en: ["Group transport", "Consolidating multiple small shipments into one transport", "Truck convoy transport", "Group insurance"],
      de: ["Gruppentransport", "Konsolidierung mehrerer kleiner Sendungen in einen Transport", "LKW-Konvoi-Transport", "Gruppenversicherung"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Grupajul combină mai multe expediții mici pentru a optimiza costurile și spațiul.",
      en: "Groupage combines multiple small shipments to optimize costs and space.",
      de: "Sammelgut kombiniert mehrere kleine Sendungen, um Kosten und Platz zu optimieren."
    }
  },
  {
    question: {
      ro: "Care este documentul principal în transportul rutier internațional?",
      en: "What is the main document in international road transport?",
      de: "Was ist das Hauptdokument im internationalen Straßentransport?"
    },
    options: {
      ro: ["Factura", "CMR - Scrisoarea de transport", "Comanda de cumpărare", "Contractul de muncă"],
      en: ["Invoice", "CMR - Consignment note", "Purchase order", "Employment contract"],
      de: ["Rechnung", "CMR - Frachtbrief", "Bestellung", "Arbeitsvertrag"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR (Convenția privind Contractul de Transport Internațional de Mărfuri pe Șosele) este documentul standard.",
      en: "CMR (Convention on the Contract for the International Carriage of Goods by Road) is the standard document.",
      de: "CMR (Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr) ist das Standarddokument."
    }
  },
  {
    question: {
      ro: "Cine este 'expeditorul' (shipper) în lanțul de transport?",
      en: "Who is the 'shipper' in the transport chain?",
      de: "Wer ist der 'Versender' in der Transportkette?"
    },
    options: {
      ro: ["Compania de transport", "Persoana sau compania care trimite marfa", "Destinatarul", "Agentul vamal"],
      en: ["Transport company", "Person or company sending the goods", "Recipient", "Customs agent"],
      de: ["Transportunternehmen", "Person oder Firma, die die Waren versendet", "Empfänger", "Zollagent"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expeditorul (shipper) este partea care inițiază transportul și trimite marfa.",
      en: "The shipper is the party who initiates transport and sends the goods.",
      de: "Der Versender ist die Partei, die den Transport initiiert und die Waren versendet."
    }
  },
  {
    question: {
      ro: "Cine este 'consignatarul' (consignee)?",
      en: "Who is the 'consignee'?",
      de: "Wer ist der 'Empfänger'?"
    },
    options: {
      ro: ["Cel care plătește transportul", "Cel care primește marfa la destinație", "Șoferul", "Agentul de asigurări"],
      en: ["The one paying for transport", "The one receiving goods at destination", "The driver", "Insurance agent"],
      de: ["Derjenige, der für den Transport bezahlt", "Derjenige, der die Waren am Bestimmungsort erhält", "Der Fahrer", "Versicherungsagent"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Consignatarul este destinatarul final al mărfii.",
      en: "The consignee is the final recipient of the goods.",
      de: "Der Empfänger ist der endgültige Warenempfänger."
    }
  },
  {
    question: {
      ro: "Ce înseamnă termenul 'cabotaj'?",
      en: "What does the term 'cabotage' mean?",
      de: "Was bedeutet der Begriff 'Kabotage'?"
    },
    options: {
      ro: ["Transport internațional", "Transport intern efectuat de un transportator străin", "Transport maritim", "Transport aerian"],
      en: ["International transport", "Domestic transport performed by a foreign carrier", "Sea transport", "Air transport"],
      de: ["Internationaler Transport", "Inlandstransport durch einen ausländischen Frachtführer", "Seetransport", "Lufttransport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cabotajul este transportul de mărfuri în interiorul unei țări de către un transportator înregistrat în altă țară.",
      en: "Cabotage is the transport of goods within a country by a carrier registered in another country.",
      de: "Kabotage ist der Transport von Waren innerhalb eines Landes durch einen in einem anderen Land registrierten Frachtführer."
    }
  },
  {
    question: {
      ro: "Ce este un 'hub logistic'?",
      en: "What is a 'logistics hub'?",
      de: "Was ist ein 'Logistik-Hub'?"
    },
    options: {
      ro: ["Un camion mare", "Un centru de distribuție și consolidare a mărfurilor", "Un tip de palet", "O rută de transport"],
      en: ["A large truck", "A distribution and consolidation center for goods", "A type of pallet", "A transport route"],
      de: ["Ein großer LKW", "Ein Verteilungs- und Konsolidierungszentrum für Waren", "Eine Art Palette", "Eine Transportroute"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Hub-ul logistic este un punct central unde mărfurile sunt colectate, sortate și redistribuite.",
      en: "A logistics hub is a central point where goods are collected, sorted, and redistributed.",
      de: "Ein Logistik-Hub ist ein zentraler Punkt, an dem Waren gesammelt, sortiert und umverteilt werden."
    }
  },
  {
    question: {
      ro: "Ce este 'lead time' în logistică?",
      en: "What is 'lead time' in logistics?",
      de: "Was ist 'Vorlaufzeit' in der Logistik?"
    },
    options: {
      ro: ["Timpul de pauză", "Timpul total de la comandă până la livrare", "Timpul de încărcare", "Timpul de așteptare la vamă"],
      en: ["Break time", "Total time from order to delivery", "Loading time", "Customs waiting time"],
      de: ["Pausenzeit", "Gesamtzeit von der Bestellung bis zur Lieferung", "Ladezeit", "Wartezeit beim Zoll"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lead time reprezintă durata totală de la plasarea comenzii până la livrarea finală.",
      en: "Lead time represents the total duration from placing an order to final delivery.",
      de: "Vorlaufzeit bezeichnet die Gesamtdauer von der Auftragserteilung bis zur endgültigen Lieferung."
    }
  },
  {
    question: {
      ro: "Ce este un 'forwarder agent'?",
      en: "What is a 'forwarder agent'?",
      de: "Was ist ein 'Spediteur-Agent'?"
    },
    options: {
      ro: ["Un șofer profesionist", "Un reprezentant al expeditorului într-o altă țară/locație", "Un agent de vânzări", "Un inspector vamal"],
      en: ["A professional driver", "A forwarder's representative in another country/location", "A sales agent", "A customs inspector"],
      de: ["Ein professioneller Fahrer", "Ein Vertreter des Spediteurs in einem anderen Land/Ort", "Ein Vertriebsmitarbeiter", "Ein Zollinspektor"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Un agent al expeditorului reprezintă interesele acestuia în alte locații sau țări.",
      en: "A forwarder agent represents the forwarder's interests in other locations or countries.",
      de: "Ein Spediteur-Agent vertritt die Interessen des Spediteurs an anderen Standorten oder in anderen Ländern."
    }
  },
  {
    question: {
      ro: "Care este unitatea de măsură standard pentru volumul de marfă?",
      en: "What is the standard unit of measurement for cargo volume?",
      de: "Was ist die Standardmaßeinheit für das Frachtvolumen?"
    },
    options: {
      ro: ["Litri", "Metri cubi (m³)", "Kilometri", "Hectare"],
      en: ["Liters", "Cubic meters (m³)", "Kilometers", "Hectares"],
      de: ["Liter", "Kubikmeter (m³)", "Kilometer", "Hektar"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Volumul de marfă se măsoară în metri cubi (m³) pentru a calcula spațiul necesar.",
      en: "Cargo volume is measured in cubic meters (m³) to calculate required space.",
      de: "Das Frachtvolumen wird in Kubikmetern (m³) gemessen, um den erforderlichen Platz zu berechnen."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'ETA' în transport?",
      en: "What does 'ETA' mean in transport?",
      de: "Was bedeutet 'ETA' im Transport?"
    },
    options: {
      ro: ["Extra Transport Agreement", "Estimated Time of Arrival - Ora estimată de sosire", "European Transport Association", "Emergency Transport Alert"],
      en: ["Extra Transport Agreement", "Estimated Time of Arrival", "European Transport Association", "Emergency Transport Alert"],
      de: ["Extra Transport Agreement", "Estimated Time of Arrival - Voraussichtliche Ankunftszeit", "European Transport Association", "Emergency Transport Alert"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ETA (Estimated Time of Arrival) indică ora estimată la care camionul va ajunge la destinație.",
      en: "ETA (Estimated Time of Arrival) indicates the estimated time when the truck will arrive at destination.",
      de: "ETA (Estimated Time of Arrival) gibt die voraussichtliche Ankunftszeit des LKW am Zielort an."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'ETD' în transport?",
      en: "What does 'ETD' mean in transport?",
      de: "Was bedeutet 'ETD' im Transport?"
    },
    options: {
      ro: ["Extra Transport Document", "Estimated Time of Departure - Ora estimată de plecare", "European Transport Directive", "Emergency Transport Dispatch"],
      en: ["Extra Transport Document", "Estimated Time of Departure", "European Transport Directive", "Emergency Transport Dispatch"],
      de: ["Extra Transport Document", "Estimated Time of Departure - Voraussichtliche Abfahrtszeit", "European Transport Directive", "Emergency Transport Dispatch"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ETD (Estimated Time of Departure) indică ora estimată de plecare a camionului.",
      en: "ETD (Estimated Time of Departure) indicates the estimated departure time of the truck.",
      de: "ETD (Estimated Time of Departure) gibt die voraussichtliche Abfahrtszeit des LKW an."
    }
  },
  {
    question: {
      ro: "Ce este un 'loading meter' (LDM)?",
      en: "What is a 'loading meter' (LDM)?",
      de: "Was ist ein 'Lademeter' (LDM)?"
    },
    options: {
      ro: ["Un instrument de măsură", "O unitate pentru spațiul de încărcare (lungime x lățime remorcă)", "Un tip de palet", "O metodă de cântărire"],
      en: ["A measuring instrument", "A unit for loading space (trailer length x width)", "A type of pallet", "A weighing method"],
      de: ["Ein Messinstrument", "Eine Einheit für Laderaum (Auflieger-Länge x Breite)", "Eine Art Palette", "Eine Wiegemethode"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Loading meter (LDM) măsoară spațiul ocupat în lungime, folosit pentru calcul tarife LTL.",
      en: "Loading meter (LDM) measures occupied length space, used for LTL rate calculation.",
      de: "Lademeter (LDM) misst den belegten Längenraum, wird für LTL-Tarifberechnung verwendet."
    }
  },
  {
    question: {
      ro: "Ce reprezintă abrevierea 'POD' în logistică?",
      en: "What does 'POD' abbreviation represent in logistics?",
      de: "Was bedeutet die Abkürzung 'POD' in der Logistik?"
    },
    options: {
      ro: ["Point of Distribution", "Proof of Delivery - Dovada livrării", "Port of Destination", "Package on Demand"],
      en: ["Point of Distribution", "Proof of Delivery", "Port of Destination", "Package on Demand"],
      de: ["Point of Distribution", "Proof of Delivery - Liefernachweis", "Port of Destination", "Package on Demand"]
    },
    correctIndex: 1,
    explanation: {
      ro: "POD (Proof of Delivery) este documentul semnat care confirmă livrarea mărfii.",
      en: "POD (Proof of Delivery) is the signed document confirming goods delivery.",
      de: "POD (Proof of Delivery) ist das unterzeichnete Dokument, das die Warenlieferung bestätigt."
    }
  },
  {
    question: {
      ro: "Ce este un 'cross-dock'?",
      en: "What is a 'cross-dock'?",
      de: "Was ist ein 'Cross-Dock'?"
    },
    options: {
      ro: ["O traversare de apă", "Un depozit unde marfa este transferată direct între vehicule fără stocare", "Un tip de camion", "O taxă vamală"],
      en: ["A water crossing", "A warehouse where cargo is transferred directly between vehicles without storage", "A truck type", "A customs fee"],
      de: ["Eine Wasserüberquerung", "Ein Lager, wo Fracht direkt zwischen Fahrzeugen ohne Lagerung umgeladen wird", "Ein LKW-Typ", "Eine Zollgebühr"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cross-docking elimină stocarea prin transfer direct al mărfii între vehicule de intrare și ieșire.",
      en: "Cross-docking eliminates storage by directly transferring goods between inbound and outbound vehicles.",
      de: "Cross-Docking eliminiert Lagerung durch direkten Transfer der Waren zwischen ein- und ausgehenden Fahrzeugen."
    }
  },
  {
    question: {
      ro: "Care este scopul unui TMS (Transport Management System)?",
      en: "What is the purpose of a TMS (Transport Management System)?",
      de: "Was ist der Zweck eines TMS (Transport Management System)?"
    },
    options: {
      ro: ["Contabilitate", "Planificarea, executarea și optimizarea transporturilor", "Resurse umane", "Marketing"],
      en: ["Accounting", "Planning, executing and optimizing transports", "Human resources", "Marketing"],
      de: ["Buchhaltung", "Planung, Ausführung und Optimierung von Transporten", "Personalwesen", "Marketing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TMS automatizează și optimizează toate aspectele managementului transportului.",
      en: "TMS automates and optimizes all aspects of transport management.",
      de: "TMS automatisiert und optimiert alle Aspekte des Transportmanagements."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'door-to-door delivery'?",
      en: "What does 'door-to-door delivery' mean?",
      de: "Was bedeutet 'Haus-zu-Haus-Lieferung'?"
    },
    options: {
      ro: ["Livrare la poștă", "Livrare completă de la adresa expeditorului la adresa destinatarului", "Livrare la terminal", "Livrare parțială"],
      en: ["Postal delivery", "Complete delivery from shipper's address to consignee's address", "Terminal delivery", "Partial delivery"],
      de: ["Postlieferung", "Komplette Lieferung von der Versenderadresse zur Empfängeradresse", "Terminallieferung", "Teillieferung"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Door-to-door înseamnă că expeditorul gestionează întregul proces de la ridicare până la livrarea finală.",
      en: "Door-to-door means the forwarder manages the entire process from pickup to final delivery.",
      de: "Haus-zu-Haus bedeutet, dass der Spediteur den gesamten Prozess von der Abholung bis zur endgültigen Lieferung verwaltet."
    }
  },
  {
    question: {
      ro: "Ce este 'supply chain visibility'?",
      en: "What is 'supply chain visibility'?",
      de: "Was ist 'Supply-Chain-Sichtbarkeit'?"
    },
    options: {
      ro: ["Capacitatea de a vedea camioanele", "Urmărirea și transparența în timp real a mărfurilor în lanțul de aprovizionare", "Rapoarte lunare", "Audit financiar"],
      en: ["Ability to see trucks", "Real-time tracking and transparency of goods in supply chain", "Monthly reports", "Financial audit"],
      de: ["Fähigkeit, LKWs zu sehen", "Echtzeit-Tracking und Transparenz der Waren in der Lieferkette", "Monatliche Berichte", "Finanzprüfung"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Supply chain visibility oferă transparență în timp real asupra locației și statusului mărfurilor.",
      en: "Supply chain visibility provides real-time transparency on goods location and status.",
      de: "Supply-Chain-Sichtbarkeit bietet Echtzeit-Transparenz über Standort und Status der Waren."
    }
  },
  {
    question: {
      ro: "Ce înseamnă termenul '3PL'?",
      en: "What does the term '3PL' mean?",
      de: "Was bedeutet der Begriff '3PL'?"
    },
    options: {
      ro: ["3 pachete livrate", "Third-Party Logistics - Logistică externalizată", "3 puncte de livrare", "Triplu transport"],
      en: ["3 packages delivered", "Third-Party Logistics - Outsourced logistics", "3 delivery points", "Triple transport"],
      de: ["3 gelieferte Pakete", "Third-Party Logistics - Ausgelagerte Logistik", "3 Lieferpunkte", "Dreifacher Transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "3PL sunt companii care oferă servicii logistice externalizate (transport, depozitare, distribuție).",
      en: "3PL are companies offering outsourced logistics services (transport, warehousing, distribution).",
      de: "3PL sind Unternehmen, die ausgelagerte Logistikdienstleistungen anbieten (Transport, Lagerung, Distribution)."
    }
  },
  {
    question: {
      ro: "Ce este un 'manifest de marfă'?",
      en: "What is a 'cargo manifest'?",
      de: "Was ist ein 'Frachtmanifest'?"
    },
    options: {
      ro: ["O reclamă pentru transport", "Un document care listează toate mărfurile dintr-un vehicul", "O factură", "Un contract de muncă"],
      en: ["A transport advertisement", "A document listing all goods in a vehicle", "An invoice", "An employment contract"],
      de: ["Eine Transportwerbung", "Ein Dokument, das alle Waren in einem Fahrzeug auflistet", "Eine Rechnung", "Ein Arbeitsvertrag"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Manifestul de marfă listează toate expedițiile încărcate într-un vehicul pentru un anumit traseu.",
      en: "The cargo manifest lists all shipments loaded in a vehicle for a particular route.",
      de: "Das Frachtmanifest listet alle in einem Fahrzeug für eine bestimmte Route geladenen Sendungen auf."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'last mile delivery'?",
      en: "What does 'last mile delivery' mean?",
      de: "Was bedeutet 'letzte Meile Lieferung'?"
    },
    options: {
      ro: ["Prima etapă a transportului", "Ultima etapă a livrării de la hub la destinatar", "Transport pe distanță lungă", "Returnarea mărfii"],
      en: ["First transport stage", "Final delivery stage from hub to recipient", "Long-distance transport", "Goods return"],
      de: ["Erste Transportetappe", "Letzte Lieferetappe vom Hub zum Empfänger", "Langstreckentransport", "Warenrückgabe"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Last mile este ultima etapă a livrării, adesea cea mai complexă și costisitoare.",
      en: "Last mile is the final delivery stage, often the most complex and costly.",
      de: "Die letzte Meile ist die letzte Lieferetappe, oft die komplexeste und kostspieligste."
    }
  },
  {
    question: {
      ro: "Ce este 'freight class'?",
      en: "What is 'freight class'?",
      de: "Was ist 'Frachtklasse'?"
    },
    options: {
      ro: ["Clasa șoferului", "Categorizarea mărfurilor bazată pe densitate, manevrabilitate și valoare", "Tipul de vehicul", "Clasa de asigurare"],
      en: ["Driver class", "Cargo categorization based on density, handleability and value", "Vehicle type", "Insurance class"],
      de: ["Fahrerklasse", "Frachtkategorisierung basierend auf Dichte, Handhabbarkeit und Wert", "Fahrzeugtyp", "Versicherungsklasse"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Freight class determină tariful de transport bazat pe caracteristicile mărfii.",
      en: "Freight class determines the shipping rate based on cargo characteristics.",
      de: "Die Frachtklasse bestimmt den Transporttarif basierend auf den Frachteigenschaften."
    }
  },
  {
    question: {
      ro: "Care este avantajul principal al transportului rutier față de cel feroviar?",
      en: "What is the main advantage of road transport over rail?",
      de: "Was ist der Hauptvorteil des Straßentransports gegenüber der Schiene?"
    },
    options: {
      ro: ["Este mai ieftin", "Flexibilitate și livrare door-to-door", "Este mai rapid pe distanțe lungi", "Capacitate mai mare"],
      en: ["It's cheaper", "Flexibility and door-to-door delivery", "It's faster over long distances", "Greater capacity"],
      de: ["Es ist billiger", "Flexibilität und Haus-zu-Haus-Lieferung", "Es ist schneller über lange Strecken", "Größere Kapazität"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul rutier oferă flexibilitate maximă și poate livra direct la destinație fără transbordare.",
      en: "Road transport offers maximum flexibility and can deliver directly to destination without transshipment.",
      de: "Straßentransport bietet maximale Flexibilität und kann direkt zum Zielort liefern ohne Umladung."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'intermodal transport'?",
      en: "What does 'intermodal transport' mean?",
      de: "Was bedeutet 'intermodaler Transport'?"
    },
    options: {
      ro: ["Transport doar pe un mod", "Utilizarea a două sau mai multe moduri de transport pentru o singură expediție", "Transport internațional", "Transport intern"],
      en: ["Single mode transport", "Using two or more transport modes for a single shipment", "International transport", "Domestic transport"],
      de: ["Einzelmodaler Transport", "Nutzung von zwei oder mehr Transportarten für eine Sendung", "Internationaler Transport", "Inlandstransport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul intermodal combină rutier, feroviar, maritim sau aerian pentru eficiență optimă.",
      en: "Intermodal transport combines road, rail, sea or air for optimal efficiency.",
      de: "Intermodaler Transport kombiniert Straße, Schiene, See oder Luft für optimale Effizienz."
    }
  },
  {
    question: {
      ro: "Ce este 'demurrage' în transport?",
      en: "What is 'demurrage' in transport?",
      de: "Was ist 'Standgeld' im Transport?"
    },
    options: {
      ro: ["Taxă de autostradă", "Taxă pentru depășirea timpului alocat de încărcare/descărcare", "Taxă de asigurare", "Taxă de combustibil"],
      en: ["Highway toll", "Fee for exceeding allocated loading/unloading time", "Insurance fee", "Fuel surcharge"],
      de: ["Autobahnmaut", "Gebühr für Überschreitung der zugewiesenen Be-/Entladezeit", "Versicherungsgebühr", "Kraftstoffzuschlag"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Demurrage se aplică când vehiculul este reținut dincolo de timpul gratuit alocat.",
      en: "Demurrage applies when the vehicle is detained beyond the allocated free time.",
      de: "Standgeld fällt an, wenn das Fahrzeug über die zugewiesene Freizeit hinaus aufgehalten wird."
    }
  },
  {
    question: {
      ro: "Ce reprezintă acronimul 'JIT' în logistică?",
      en: "What does the acronym 'JIT' represent in logistics?",
      de: "Was bedeutet das Akronym 'JIT' in der Logistik?"
    },
    options: {
      ro: ["Joint International Transport", "Just-In-Time - Livrare exact la timp", "Journey Information Tracking", "Joined Inventory Transfer"],
      en: ["Joint International Transport", "Just-In-Time delivery", "Journey Information Tracking", "Joined Inventory Transfer"],
      de: ["Joint International Transport", "Just-In-Time - Lieferung genau zur richtigen Zeit", "Journey Information Tracking", "Joined Inventory Transfer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "JIT este o strategie de livrare unde marfa ajunge exact când este necesară, minimizând stocurile.",
      en: "JIT is a delivery strategy where goods arrive exactly when needed, minimizing inventory.",
      de: "JIT ist eine Lieferstrategie, bei der Waren genau dann ankommen, wenn sie benötigt werden, um Lagerbestände zu minimieren."
    }
  }
];
