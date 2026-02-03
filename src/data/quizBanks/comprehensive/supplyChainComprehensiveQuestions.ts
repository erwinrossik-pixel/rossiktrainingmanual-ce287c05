import { TranslatedQuizQuestion } from '../../quizTranslations';

export const supplyChainComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce reprezintă conceptul de lanț de aprovizionare (supply chain)?",
      de: "Was bedeutet das Konzept der Lieferkette (Supply Chain)?",
      en: "What does the supply chain concept represent?"
    },
    options: {
      ro: ["Doar transportul", "Întregul flux de la materie primă la consumator final, incluzând transport, depozitare, producție", "Doar producția", "Doar vânzarea"],
      de: ["Nur Transport", "Gesamter Fluss vom Rohstoff zum Endverbraucher, inkl. Transport, Lagerung, Produktion", "Nur Produktion", "Nur Verkauf"],
      en: ["Only transport", "Entire flow from raw material to end consumer, including transport, warehousing, production", "Only production", "Only sales"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Supply chain: furnizori → producție → depozitare → transport → distribuție → consumator. Integrat și coordonat.",
      de: "Lieferkette: Lieferanten → Produktion → Lagerung → Transport → Distribution → Verbraucher. Integriert und koordiniert.",
      en: "Supply chain: suppliers → production → warehousing → transport → distribution → consumer. Integrated and coordinated."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este just-in-time (JIT) în supply chain?",
      de: "Was ist Just-in-Time (JIT) in der Lieferkette?",
      en: "What is just-in-time (JIT) in supply chain?"
    },
    options: {
      ro: ["Livrare oricând", "Livrare exact când este nevoie, fără stocuri mari", "Livrare întârziată", "Stocuri maxime"],
      de: ["Lieferung jederzeit", "Lieferung genau bei Bedarf, ohne große Lagerbestände", "Verspätete Lieferung", "Maximale Bestände"],
      en: ["Delivery anytime", "Delivery exactly when needed, without large inventories", "Delayed delivery", "Maximum inventory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "JIT: livrări frecvente, cantități mici, exact la timp. Reduce stocuri dar necesită fiabilitate transport maximă.",
      de: "JIT: häufige Lieferungen, kleine Mengen, genau zur Zeit. Reduziert Bestände aber erfordert maximale Transportzuverlässigkeit.",
      en: "JIT: frequent deliveries, small quantities, exactly on time. Reduces inventory but requires maximum transport reliability."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este efectul bullwhip în supply chain și cum afectează transportul?",
      de: "Was ist der Bullwhip-Effekt in der Lieferkette und wie beeinflusst er den Transport?",
      en: "What is the bullwhip effect in supply chain and how does it affect transport?"
    },
    options: {
      ro: ["Efect de viteză", "Amplificare variații cerere de la retail spre producător, causează transport ineficient", "Efect de reducere", "Nu afectează transportul"],
      de: ["Geschwindigkeitseffekt", "Verstärkung von Nachfrageschwankungen vom Einzelhandel zum Hersteller, verursacht ineffizienten Transport", "Reduzierungseffekt", "Beeinflusst Transport nicht"],
      en: ["Speed effect", "Amplification of demand variations from retail to manufacturer, causes inefficient transport", "Reduction effect", "Doesn't affect transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bullwhip: mică variație cerere retail = mare variație la furnizori = transport cu curse goale/urgențe neprevăzute.",
      de: "Bullwhip: kleine Einzelhandelsnachfrageschwankung = große Schwankung bei Lieferanten = Transport mit Leerfahrten/unvorhergesehenen Eilaufträgen.",
      en: "Bullwhip: small retail demand variation = large variation at suppliers = transport with empty runs/unforeseen urgencies."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un 3PL (Third Party Logistics)?",
      de: "Was ist ein 3PL (Third Party Logistics)?",
      en: "What is a 3PL (Third Party Logistics)?"
    },
    options: {
      ro: ["Trei porturi", "Companie care oferă servicii logistice externalizate: transport, depozitare, distribuție", "Trei camioane", "Trei clienți"],
      de: ["Drei Häfen", "Unternehmen, das ausgelagerte Logistikdienste anbietet: Transport, Lagerung, Distribution", "Drei LKW", "Drei Kunden"],
      en: ["Three ports", "Company offering outsourced logistics services: transport, warehousing, distribution", "Three trucks", "Three clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "3PL: furnizor extern de servicii logistice. Clientul externalizează transport, depozitare, picking, distribuție.",
      de: "3PL: externer Logistikdienstleister. Kunde lagert Transport, Lagerung, Kommissionierung, Distribution aus.",
      en: "3PL: external logistics service provider. Client outsources transport, warehousing, picking, distribution."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client automotive cere integrare supply chain cu vizibilitate end-to-end. Ce sisteme și procese sunt necesare?",
      de: "Automotive-Kunde fordert Supply Chain-Integration mit End-to-End-Sichtbarkeit. Welche Systeme und Prozesse sind erforderlich?",
      en: "Automotive client requests supply chain integration with end-to-end visibility. What systems and processes are needed?"
    },
    options: {
      ro: ["Doar email", "TMS integrat + EDI + track & trace real-time + alerting + KPI dashboard + milestone reporting", "Doar telefon", "Doar CMR"],
      de: ["Nur E-Mail", "Integriertes TMS + EDI + Echtzeit-Track & Trace + Alerting + KPI-Dashboard + Milestone-Reporting", "Nur Telefon", "Nur CMR"],
      en: ["Only email", "Integrated TMS + EDI + real-time track & trace + alerting + KPI dashboard + milestone reporting", "Only phone", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrare completă: TMS cu API, EDI pentru ordine/facturi, GPS pentru tracking, ETA live, alertare excepții, dashboard client.",
      de: "Vollständige Integration: TMS mit API, EDI für Aufträge/Rechnungen, GPS für Tracking, Live-ETA, Ausnahme-Alerting, Kunden-Dashboard.",
      en: "Complete integration: TMS with API, EDI for orders/invoices, GPS for tracking, live ETA, exception alerting, client dashboard."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este supply chain risk management?",
      de: "Was ist Supply Chain Risk Management?",
      en: "What is supply chain risk management?"
    },
    options: {
      ro: ["Asigurare auto", "Identificare, evaluare și mitigare riscuri în lanțul de aprovizionare", "Doar transport periculos", "Management financiar"],
      de: ["Kfz-Versicherung", "Identifizierung, Bewertung und Minderung von Risiken in der Lieferkette", "Nur Gefahrguttransport", "Finanzmanagement"],
      en: ["Car insurance", "Identification, assessment and mitigation of supply chain risks", "Only dangerous goods transport", "Financial management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Risk management: identificare riscuri (dezastre, furnizori, transport), evaluare impact, planuri de continuitate, furnizori backup.",
      de: "Risikomanagement: Risikoidentifikation (Katastrophen, Lieferanten, Transport), Auswirkungsbewertung, Kontinuitätspläne, Backup-Lieferanten.",
      en: "Risk management: risk identification (disasters, suppliers, transport), impact assessment, continuity plans, backup suppliers."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este lead time în supply chain?",
      de: "Was ist Lead Time in der Lieferkette?",
      en: "What is lead time in supply chain?"
    },
    options: {
      ro: ["Timp de conducere", "Timpul de la plasarea comenzii până la livrarea produsului", "Timp de încărcare", "Timp de odihnă"],
      de: ["Fahrzeit", "Zeit von der Bestellung bis zur Produktlieferung", "Ladezeit", "Ruhezeit"],
      en: ["Driving time", "Time from placing order to product delivery", "Loading time", "Rest time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lead time: include procesare comandă, producție, pregătire marfă, transport. Cu cât mai scurt, cu atât mai flexibil.",
      de: "Lead Time: umfasst Auftragsverarbeitung, Produktion, Warenvorbereitung, Transport. Je kürzer, desto flexibler.",
      en: "Lead time: includes order processing, production, goods preparation, transport. Shorter means more flexible."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Planificare network design pentru distribuție în 5 țări UE. Ce factori și analize sunt necesare?",
      de: "Network Design-Planung für Distribution in 5 EU-Ländern. Welche Faktoren und Analysen sind erforderlich?",
      en: "Planning network design for distribution in 5 EU countries. What factors and analyses are needed?"
    },
    options: {
      ro: ["Doar distanțe", "Analiză volume/fluxuri, cost-to-serve, locații depozite, modele livrare, timp livrare per piață", "Doar costuri", "Doar capacități"],
      de: ["Nur Entfernungen", "Volumen-/Flussanalyse, Cost-to-Serve, Lagerstandorte, Liefermodelle, Lieferzeit pro Markt", "Nur Kosten", "Nur Kapazitäten"],
      en: ["Only distances", "Volume/flow analysis, cost-to-serve, warehouse locations, delivery models, delivery time per market", "Only costs", "Only capacities"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Network design: hartă fluxuri, optimizare locații hub-uri, modelare cost-to-serve, simulare scenarii, balanță cost vs. serviciu.",
      de: "Network Design: Flusskarte, Hub-Standortoptimierung, Cost-to-Serve-Modellierung, Szenariosimulation, Kosten-Service-Balance.",
      en: "Network design: flow mapping, hub location optimization, cost-to-serve modeling, scenario simulation, cost vs. service balance."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este cross-docking și ce beneficii oferă?",
      de: "Was ist Cross-Docking und welche Vorteile bietet es?",
      en: "What is cross-docking and what benefits does it offer?"
    },
    options: {
      ro: ["Traversare doc", "Transbordare directă fără depozitare, reduce timp și costuri manipulare", "Parcare camioane", "Doar pentru containere"],
      de: ["Dock-Überquerung", "Direkter Umschlag ohne Lagerung, reduziert Zeit und Handling-Kosten", "LKW-Parkplatz", "Nur für Container"],
      en: ["Dock crossing", "Direct transshipment without storage, reduces time and handling costs", "Truck parking", "Only for containers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cross-dock: marfa ajunge, se sortează și pleacă în câteva ore. Ideal pentru produse rapide, consolidare, distribuție.",
      de: "Cross-Dock: Ware kommt an, wird sortiert und verlässt in wenigen Stunden. Ideal für schnelle Produkte, Konsolidierung, Distribution.",
      en: "Cross-dock: goods arrive, get sorted and leave in a few hours. Ideal for fast products, consolidation, distribution."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un 4PL (Fourth Party Logistics)?",
      de: "Was ist ein 4PL (Fourth Party Logistics)?",
      en: "What is a 4PL (Fourth Party Logistics)?"
    },
    options: {
      ro: ["Patru porturi", "Integrator care coordonează mai mulți 3PL și gestionează întregul supply chain pentru client", "Patru camioane", "Patru depozite"],
      de: ["Vier Häfen", "Integrator, der mehrere 3PLs koordiniert und die gesamte Lieferkette für Kunden verwaltet", "Vier LKW", "Vier Lager"],
      en: ["Four ports", "Integrator coordinating multiple 3PLs and managing entire supply chain for client", "Four trucks", "Four warehouses"]
    },
    correctIndex: 1,
    explanation: {
      ro: "4PL: lead logistics provider. Nu are active proprii, coordonează și optimizează supply chain folosind diverși 3PL.",
      de: "4PL: Lead Logistics Provider. Keine eigenen Assets, koordiniert und optimiert Lieferkette mit verschiedenen 3PLs.",
      en: "4PL: lead logistics provider. No own assets, coordinates and optimizes supply chain using various 3PLs."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client retail cu 200 magazine în RO cere optimizare supply chain. Analiză și recomandări?",
      de: "Einzelhandelskunde mit 200 Filialen in RO fordert Supply Chain-Optimierung. Analyse und Empfehlungen?",
      en: "Retail client with 200 stores in RO requests supply chain optimization. Analysis and recommendations?"
    },
    options: {
      ro: ["Doar transport mai ieftin", "Analiză ABC inventar, hub central vs. regional, frecvență livrări, consolidare vs. direct store delivery", "Doar depozitare", "Doar reducere personal"],
      de: ["Nur billigerer Transport", "ABC-Bestandsanalyse, zentrales vs. regionales Hub, Lieferhäufigkeit, Konsolidierung vs. Direktlieferung", "Nur Lagerung", "Nur Personalreduzierung"],
      en: ["Only cheaper transport", "ABC inventory analysis, central vs. regional hub, delivery frequency, consolidation vs. direct store delivery", "Only warehousing", "Only staff reduction"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Optimizare retail: clasificare produse ABC, hub-uri regionale pentru A, consolidare B/C, frecvență adaptată per categorie.",
      de: "Einzelhandelsoptimierung: ABC-Produktklassifizierung, regionale Hubs für A, B/C-Konsolidierung, kategorienangepasste Frequenz.",
      en: "Retail optimization: ABC product classification, regional hubs for A, B/C consolidation, category-adapted frequency."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este inventory turnover și de ce este important?",
      de: "Was ist Lagerumschlag und warum ist er wichtig?",
      en: "What is inventory turnover and why is it important?"
    },
    options: {
      ro: ["Rotire palete", "De câte ori pe an se vinde și reînnoiește stocul - indicator eficiență capital", "Rotire personal", "Rotire vehicule"],
      de: ["Palettenrotation", "Wie oft pro Jahr Bestand verkauft und erneuert wird - Kapitaleffizienzindikator", "Personalrotation", "Fahrzeugrotation"],
      en: ["Pallet rotation", "How many times per year inventory is sold and renewed - capital efficiency indicator", "Staff rotation", "Vehicle rotation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Inventory turnover: vânzări anuale/stoc mediu. Mai mare = capital mai puțin blocat. Afectează frecvența transport.",
      de: "Lagerumschlag: Jahresumsatz/Durchschnittsbestand. Höher = weniger gebundenes Kapital. Beeinflusst Transporthäufigkeit.",
      en: "Inventory turnover: annual sales/average inventory. Higher = less tied capital. Affects transport frequency."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este last mile delivery?",
      de: "Was ist Last Mile Delivery?",
      en: "What is last mile delivery?"
    },
    options: {
      ro: ["Ultima milă maraton", "Ultima etapă a livrării, de la hub la destinatarul final", "Doar pentru pachete", "Doar în orașe"],
      de: ["Letzte Marathon-Meile", "Letzte Lieferetappe vom Hub zum Endempfänger", "Nur für Pakete", "Nur in Städten"],
      en: ["Last marathon mile", "Final delivery stage from hub to end recipient", "Only for packages", "Only in cities"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Last mile: cea mai costisitoare etapă (30-40% din cost total), necesită vehicule mici, multe opriri, planificare complexă.",
      de: "Last Mile: teuerste Etappe (30-40% der Gesamtkosten), erfordert kleine Fahrzeuge, viele Stopps, komplexe Planung.",
      en: "Last mile: most expensive stage (30-40% of total cost), requires small vehicles, many stops, complex planning."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Disrupție lanț aprovizionare: furnizor cheie din Asia întârzie 3 săptămâni. Planuri de continuitate?",
      de: "Lieferkettenunterbrechung: Schlüssellieferant aus Asien 3 Wochen verspätet. Kontinuitätspläne?",
      en: "Supply chain disruption: key supplier from Asia delayed 3 weeks. Continuity plans?"
    },
    options: {
      ro: ["Așteptare", "Furnizori backup regionali, air freight pentru critice, producție alternativă, comunicare clienți, stocuri siguranță", "Doar anulare", "Doar discount"],
      de: ["Warten", "Regionale Backup-Lieferanten, Luftfracht für Kritisches, alternative Produktion, Kundenkommunikation, Sicherheitsbestände", "Nur Stornierung", "Nur Rabatt"],
      en: ["Wait", "Regional backup suppliers, air freight for critical items, alternative production, client communication, safety stock", "Only cancellation", "Only discount"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Business continuity: activare furnizori secundari, air freight pentru urgențe, reproiectare producție, transparență către clienți.",
      de: "Business Continuity: Aktivierung Sekundärlieferanten, Luftfracht für Notfälle, Produktionsumstellung, Kundentransparenz.",
      en: "Business continuity: activate secondary suppliers, air freight for emergencies, production redesign, customer transparency."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este supply chain visibility și ce beneficii oferă?",
      de: "Was ist Supply Chain Visibility und welche Vorteile bietet sie?",
      en: "What is supply chain visibility and what benefits does it offer?"
    },
    options: {
      ro: ["Camioane vizibile", "Urmărire în timp real a mărfii și stocurilor în întregul lanț", "Doar GPS", "Doar facturi"],
      de: ["Sichtbare LKW", "Echtzeitverfolgung von Waren und Beständen in der gesamten Kette", "Nur GPS", "Nur Rechnungen"],
      en: ["Visible trucks", "Real-time tracking of goods and inventory throughout the chain", "Only GPS", "Only invoices"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Visibility: tracking real-time, anticipare probleme, decizii rapide, reducere stocuri siguranță, experiență client mai bună.",
      de: "Visibility: Echtzeit-Tracking, Problemantizipation, schnelle Entscheidungen, reduzierte Sicherheitsbestände, bessere Kundenerfahrung.",
      en: "Visibility: real-time tracking, problem anticipation, fast decisions, reduced safety stock, better customer experience."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este milk run în logistică?",
      de: "Was ist Milk Run in der Logistik?",
      en: "What is milk run in logistics?"
    },
    options: {
      ro: ["Transport lapte", "Rută fixă cu colectări/livrări multiple, optimizează utilizarea vehiculului", "Livrare express", "Transport frigorific"],
      de: ["Milchtransport", "Feste Route mit mehreren Abholungen/Lieferungen, optimiert Fahrzeugauslastung", "Express-Lieferung", "Kühltransport"],
      en: ["Milk transport", "Fixed route with multiple pickups/deliveries, optimizes vehicle utilization", "Express delivery", "Refrigerated transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Milk run: camion face rută circulară colectând de la mai mulți furnizori. Reduce camioane goale, optimizează încărcare.",
      de: "Milk Run: LKW fährt Rundkurs und sammelt von mehreren Lieferanten. Reduziert Leerfahrten, optimiert Auslastung.",
      en: "Milk run: truck makes circular route collecting from multiple suppliers. Reduces empty trucks, optimizes loading."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare control tower logistic pentru client FMCG. Funcții și indicatori cheie?",
      de: "Implementierung Logistik Control Tower für FMCG-Kunden. Funktionen und Schlüsselindikatoren?",
      en: "Implementing logistics control tower for FMCG client. Key functions and indicators?"
    },
    options: {
      ro: ["Doar monitorizare GPS", "Vizibilitate totală, orchestrare transport, alerting proactiv, analytics, KPI: OTIF, cost/paletă, carbon", "Doar telefon", "Doar rapoarte"],
      de: ["Nur GPS-Überwachung", "Gesamtsichtbarkeit, Transportorchestrierung, proaktives Alerting, Analytics, KPIs: OTIF, Kosten/Palette, Carbon", "Nur Telefon", "Nur Berichte"],
      en: ["Only GPS monitoring", "Total visibility, transport orchestration, proactive alerting, analytics, KPIs: OTIF, cost/pallet, carbon", "Only phone", "Only reports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Control tower: vizibilitate real-time, management excepții, optimizare dinamică rute, dashboard KPI, predicție livrare.",
      de: "Control Tower: Echtzeit-Sichtbarkeit, Ausnahmemanagement, dynamische Routenoptimierung, KPI-Dashboard, Liefervorhersage.",
      en: "Control tower: real-time visibility, exception management, dynamic route optimization, KPI dashboard, delivery prediction."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este demand planning și cum afectează transportul?",
      de: "Was ist Demand Planning und wie beeinflusst es den Transport?",
      en: "What is demand planning and how does it affect transport?"
    },
    options: {
      ro: ["Planificare drum", "Prognoza cererii pentru optimizare stocuri și transport", "Doar pentru producție", "Doar financiar"],
      de: ["Straßenplanung", "Nachfrageprognose zur Optimierung von Beständen und Transport", "Nur für Produktion", "Nur finanziell"],
      en: ["Road planning", "Demand forecasting for inventory and transport optimization", "Only for production", "Only financial"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Demand planning: forecast precis = transport planificat, rate negociate, capacitate asigurată, reducere urgențe/costuri.",
      de: "Demand Planning: präzise Prognose = geplanter Transport, verhandelte Tarife, gesicherte Kapazität, weniger Eilaufträge/Kosten.",
      en: "Demand planning: accurate forecast = planned transport, negotiated rates, secured capacity, reduced urgencies/costs."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este SKU (Stock Keeping Unit) în supply chain?",
      de: "Was ist SKU (Stock Keeping Unit) in der Lieferkette?",
      en: "What is SKU (Stock Keeping Unit) in supply chain?"
    },
    options: {
      ro: ["Camion special", "Cod unic de identificare pentru fiecare produs în inventar", "Tip de palet", "Unitate de măsură"],
      de: ["Spezial-LKW", "Eindeutiger Identifikationscode für jedes Produkt im Inventar", "Palettentyp", "Maßeinheit"],
      en: ["Special truck", "Unique identification code for each product in inventory", "Pallet type", "Unit of measure"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SKU: identifică unic fiecare variantă de produs. Esențial pentru tracking, inventar, picking, facturare.",
      de: "SKU: identifiziert eindeutig jede Produktvariante. Wesentlich für Tracking, Inventar, Kommissionierung, Fakturierung.",
      en: "SKU: uniquely identifies each product variant. Essential for tracking, inventory, picking, invoicing."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Analiză Total Cost of Ownership (TCO) pentru externalizare transport vs. flotă proprie. Factori de considerat?",
      de: "Total Cost of Ownership (TCO)-Analyse für Transport-Outsourcing vs. eigene Flotte. Zu berücksichtigende Faktoren?",
      en: "Total Cost of Ownership (TCO) analysis for transport outsourcing vs. own fleet. Factors to consider?"
    },
    options: {
      ro: ["Doar preț/km", "Capital imobilizat, depreciere, personal, mentenanță, asigurări, variabilitate volum, scalabilitate", "Doar combustibil", "Doar salarii"],
      de: ["Nur Preis/km", "Gebundenes Kapital, Abschreibung, Personal, Wartung, Versicherungen, Volumenvariabilität, Skalierbarkeit", "Nur Kraftstoff", "Nur Gehälter"],
      en: ["Only price/km", "Tied capital, depreciation, staff, maintenance, insurance, volume variability, scalability", "Only fuel", "Only salaries"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TCO complet: investiție, operare, management, riscuri, flexibilitate. Externalizare: variabil, scalabil. Proprie: fix, control.",
      de: "Vollständiges TCO: Investition, Betrieb, Management, Risiken, Flexibilität. Outsourcing: variabel, skalierbar. Eigen: fix, Kontrolle.",
      en: "Complete TCO: investment, operation, management, risks, flexibility. Outsourcing: variable, scalable. Own: fixed, control."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este postponement strategy în supply chain?",
      de: "Was ist die Postponement-Strategie in der Lieferkette?",
      en: "What is postponement strategy in supply chain?"
    },
    options: {
      ro: ["Amânare plată", "Întârzierea personalizării produsului cât mai aproape de client final", "Amânare livrare", "Amânare producție totală"],
      de: ["Zahlungsverzögerung", "Produktanpassung so nah wie möglich am Endkunden verzögern", "Lieferverzögerung", "Gesamte Produktionsverzögerung"],
      en: ["Payment delay", "Delaying product customization as close to end customer as possible", "Delivery delay", "Total production delay"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Postponement: produs generic transportat, customizare locală (etichete, ambalaj). Reduce stocuri specifice, crește flexibilitate.",
      de: "Postponement: generisches Produkt transportiert, lokale Anpassung (Etiketten, Verpackung). Reduziert spezifische Bestände, erhöht Flexibilität.",
      en: "Postponement: generic product transported, local customization (labels, packaging). Reduces specific inventory, increases flexibility."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este safety stock și de ce este necesar?",
      de: "Was ist Sicherheitsbestand und warum ist er notwendig?",
      en: "What is safety stock and why is it needed?"
    },
    options: {
      ro: ["Stoc de siguranță rutieră", "Stoc suplimentar pentru a acoperi variații cerere sau întârzieri furnizori", "Stoc de lux", "Stoc pentru concursuri"],
      de: ["Verkehrssicherheitsbestand", "Zusätzlicher Bestand zur Abdeckung von Nachfrageschwankungen oder Lieferverzögerungen", "Luxusbestand", "Wettbewerbsbestand"],
      en: ["Road safety stock", "Additional stock to cover demand variations or supplier delays", "Luxury stock", "Competition stock"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Safety stock: buffer pentru incertitudine. Prea mult = capital blocat. Prea puțin = rupturi stoc. Calculat statistic.",
      de: "Sicherheitsbestand: Puffer für Unsicherheit. Zu viel = gebundenes Kapital. Zu wenig = Fehlbestände. Statistisch berechnet.",
      en: "Safety stock: buffer for uncertainty. Too much = tied capital. Too little = stockouts. Statistically calculated."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Design supply chain pentru lansare produs nou în 10 țări UE simultan. Provocări și soluții?",
      de: "Supply Chain-Design für gleichzeitige Produkteinführung in 10 EU-Ländern. Herausforderungen und Lösungen?",
      en: "Supply chain design for simultaneous new product launch in 10 EU countries. Challenges and solutions?"
    },
    options: {
      ro: ["Transport standard", "Pre-poziționare stocuri, hub central, distribuție sincronizată, contingency pentru variații cerere, comunicare", "Doar direct din fabrică", "Doar e-commerce"],
      de: ["Standard-Transport", "Bestandsvorpositionierung, zentrales Hub, synchronisierte Distribution, Kontingenzen für Nachfrageschwankungen, Kommunikation", "Nur direkt ab Fabrik", "Nur E-Commerce"],
      en: ["Standard transport", "Stock pre-positioning, central hub, synchronized distribution, contingency for demand variations, communication", "Only direct from factory", "Only e-commerce"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lansare simultană: pre-poziționare în hub central, distribuție coordonată pe țări, flexibilitate pentru redistribuire dacă cererea variază.",
      de: "Simultane Einführung: Vorpositionierung im zentralen Hub, länderkoordinierte Distribution, Flexibilität für Umverteilung bei Nachfrageschwankungen.",
      en: "Simultaneous launch: pre-positioning in central hub, country-coordinated distribution, flexibility for redistribution if demand varies."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este supply chain resilience și cum se construiește?",
      de: "Was ist Supply Chain Resilience und wie wird sie aufgebaut?",
      en: "What is supply chain resilience and how is it built?"
    },
    options: {
      ro: ["Rezistență fizică", "Capacitatea de a rezista și recupera rapid după disrupții", "Doar asigurare", "Doar stocuri mari"],
      de: ["Physische Widerstandsfähigkeit", "Fähigkeit, Störungen zu widerstehen und sich schnell davon zu erholen", "Nur Versicherung", "Nur große Bestände"],
      en: ["Physical resistance", "Ability to withstand and quickly recover from disruptions", "Only insurance", "Only large inventories"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Resilience: diversificare furnizori, flexibilitate transport, vizibilitate, planuri contingency, stocuri strategice, relații puternice.",
      de: "Resilience: Lieferantendiversifizierung, Transportflexibilität, Sichtbarkeit, Notfallpläne, strategische Bestände, starke Beziehungen.",
      en: "Resilience: supplier diversification, transport flexibility, visibility, contingency plans, strategic stocks, strong relationships."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este pooling în transport?",
      de: "Was ist Pooling im Transport?",
      en: "What is pooling in transport?"
    },
    options: {
      ro: ["Piscină", "Consolidare mărfuri de la mai mulți expeditori într-un transport comun", "Doar pentru lichide", "Prețuri fixe"],
      de: ["Schwimmbad", "Konsolidierung von Fracht mehrerer Versender in einem gemeinsamen Transport", "Nur für Flüssigkeiten", "Feste Preise"],
      en: ["Swimming pool", "Consolidation of freight from multiple shippers in common transport", "Only for liquids", "Fixed prices"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pooling: mai mulți clienți împart un transport. Reduce costuri per unitate, crește eficiența, necesită coordonare.",
      de: "Pooling: mehrere Kunden teilen einen Transport. Reduziert Stückkosten, erhöht Effizienz, erfordert Koordination.",
      en: "Pooling: multiple clients share one transport. Reduces unit cost, increases efficiency, requires coordination."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "KPI supply chain pentru contract logistic. Ce indicatori și formule de calcul?",
      de: "Supply Chain-KPIs für Logistikvertrag. Welche Indikatoren und Berechnungsformeln?",
      en: "Supply chain KPIs for logistics contract. What indicators and calculation formulas?"
    },
    options: {
      ro: ["Doar profit", "OTIF (%), cost/unitate, lead time, inventory turns, damage rate, carbon/tkm, fill rate", "Doar km", "Doar ore"],
      de: ["Nur Gewinn", "OTIF (%), Kosten/Einheit, Durchlaufzeit, Lagerumschlag, Schadensquote, Carbon/tkm, Füllungsgrad", "Nur km", "Nur Stunden"],
      en: ["Only profit", "OTIF (%), cost/unit, lead time, inventory turns, damage rate, carbon/tkm, fill rate", "Only km", "Only hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "KPI esențiali: OTIF (On Time In Full), cost per palet/km, lead time variabilitate, rate daune, eficiență încărcare.",
      de: "Wesentliche KPIs: OTIF (On Time In Full), Kosten pro Palette/km, Lead Time-Variabilität, Schadensquoten, Ladeeffizienz.",
      en: "Essential KPIs: OTIF (On Time In Full), cost per pallet/km, lead time variability, damage rates, loading efficiency."
    }
  }
];
