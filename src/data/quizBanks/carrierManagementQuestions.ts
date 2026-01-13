import { Language } from "@/contexts/LanguageContext";

export interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const carrierManagementQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Care este primul pas în selectarea unui transportator?",
      de: "Was ist der erste Schritt bei der Auswahl eines Spediteurs?",
      en: "What is the first step in selecting a carrier?"
    },
    options: {
      ro: ["Semnarea contractului", "Verificarea licențelor și asigurărilor", "Negocierea prețului", "Trimiterea mărfii"],
      de: ["Vertragsunterzeichnung", "Überprüfung von Lizenzen und Versicherungen", "Preisverhandlung", "Frachtversand"],
      en: ["Signing the contract", "Verifying licenses and insurance", "Negotiating the price", "Sending the cargo"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificarea documentelor legale este esențială pentru a asigura că transportatorul poate opera legal.",
      de: "Die Überprüfung der Rechtsdokumente ist unerlässlich, um sicherzustellen, dass der Spediteur legal operieren kann.",
      en: "Verifying legal documents is essential to ensure the carrier can operate legally."
    }
  },
  {
    question: {
      ro: "Ce document atestă capacitatea de transport a unei companii?",
      de: "Welches Dokument bescheinigt die Transportkapazität eines Unternehmens?",
      en: "What document certifies a company's transport capacity?"
    },
    options: {
      ro: ["Factura fiscală", "Licența de transport", "Bon de combustibil", "Contract de muncă"],
      de: ["Steuerrechnung", "Transportlizenz", "Kraftstoffbeleg", "Arbeitsvertrag"],
      en: ["Tax invoice", "Transport license", "Fuel receipt", "Employment contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Licența de transport dovedește că firma are autorizația legală pentru activitatea de transport.",
      de: "Die Transportlizenz beweist, dass das Unternehmen die gesetzliche Genehmigung für Transporttätigkeiten hat.",
      en: "The transport license proves the company has legal authorization for transport activities."
    }
  },
  {
    question: {
      ro: "Ce ar trebui să includă un scorecard al transportatorului?",
      de: "Was sollte eine Spediteur-Scorecard enthalten?",
      en: "What should a carrier scorecard include?"
    },
    options: {
      ro: ["Doar prețul", "Performanță, punctualitate, calitate servicii, comunicare", "Numărul de angajați", "Culoarea vehiculelor"],
      de: ["Nur Preis", "Leistung, Pünktlichkeit, Servicequalität, Kommunikation", "Mitarbeiteranzahl", "Fahrzeugfarbe"],
      en: ["Only price", "Performance, punctuality, service quality, communication", "Number of employees", "Vehicle color"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Un scorecard complet evaluează mai multe criterii pentru o imagine completă a performanței.",
      de: "Eine vollständige Scorecard bewertet mehrere Kriterien für ein umfassendes Leistungsbild.",
      en: "A complete scorecard evaluates multiple criteria for a complete picture of performance."
    }
  },
  {
    question: {
      ro: "Ce este un 'preferred carrier'?",
      de: "Was ist ein 'bevorzugter Spediteur'?",
      en: "What is a 'preferred carrier'?"
    },
    options: {
      ro: ["Cel mai ieftin transportator", "Transportator prioritar bazat pe performanță și relație", "Orice transportator disponibil", "Transportatorul local"],
      de: ["Der günstigste Spediteur", "Prioritärer Spediteur basierend auf Leistung und Beziehung", "Jeder verfügbare Spediteur", "Der lokale Spediteur"],
      en: ["The cheapest carrier", "Priority carrier based on performance and relationship", "Any available carrier", "The local carrier"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Preferred carriers sunt transportatori de încredere, selectați pentru fiabilitate și servicii constante.",
      de: "Bevorzugte Spediteure sind zuverlässige Transportunternehmen, ausgewählt für Zuverlässigkeit und konstanten Service.",
      en: "Preferred carriers are trusted transporters, selected for reliability and consistent services."
    }
  },
  {
    question: {
      ro: "Ce verificare este esențială pentru asigurarea CMR?",
      de: "Welche Überprüfung ist für die CMR-Versicherung wesentlich?",
      en: "What verification is essential for CMR insurance?"
    },
    options: {
      ro: ["Culoarea poliței", "Valabilitatea și limitele de acoperire", "Numele brokerului", "Numărul paginilor"],
      de: ["Farbe der Police", "Gültigkeit und Deckungsgrenzen", "Name des Maklers", "Seitenzahl"],
      en: ["Policy color", "Validity and coverage limits", "Broker name", "Number of pages"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Este crucial să verifici că asigurarea este activă și că limitele acoperă valoarea mărfii transportate.",
      de: "Es ist entscheidend zu prüfen, dass die Versicherung aktiv ist und die Grenzen den Wert der transportierten Fracht abdecken.",
      en: "It's crucial to verify the insurance is active and limits cover the transported cargo value."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'carrier onboarding'?",
      de: "Was bedeutet 'Carrier Onboarding'?",
      en: "What does 'carrier onboarding' represent?"
    },
    options: {
      ro: ["Concedierea transportatorilor", "Procesul de înregistrare și verificare a transportatorilor noi", "Plata facturilor", "Livrarea mărfii"],
      de: ["Kündigung von Spediteuren", "Registrierungs- und Verifizierungsprozess neuer Spediteure", "Rechnungszahlung", "Frachtlieferung"],
      en: ["Firing carriers", "Registration and verification process for new carriers", "Invoice payment", "Cargo delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Onboarding-ul include verificarea documentelor, stabilirea condițiilor și integrarea în sistemele companiei.",
      de: "Onboarding umfasst Dokumentenprüfung, Festlegung der Bedingungen und Integration in Unternehmenssysteme.",
      en: "Onboarding includes document verification, setting terms, and integration into company systems."
    }
  },
  {
    question: {
      ro: "Care este avantajul diversificării transportatorilor?",
      de: "Was ist der Vorteil der Spediteur-Diversifizierung?",
      en: "What is the advantage of carrier diversification?"
    },
    options: {
      ro: ["Mai multă birocrație", "Reducerea dependenței și asigurarea capacității", "Costuri mai mari", "Mai puțină flexibilitate"],
      de: ["Mehr Bürokratie", "Reduzierung der Abhängigkeit und Kapazitätssicherung", "Höhere Kosten", "Weniger Flexibilität"],
      en: ["More bureaucracy", "Reducing dependency and ensuring capacity", "Higher costs", "Less flexibility"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lucrul cu mai mulți transportatori asigură alternative și reduce riscul de întreruperi.",
      de: "Die Arbeit mit mehreren Spediteuren sichert Alternativen und reduziert das Unterbrechungsrisiko.",
      en: "Working with multiple carriers ensures alternatives and reduces disruption risk."
    }
  },
  {
    question: {
      ro: "Ce informații trebuie verificate în baza de date a transportatorilor?",
      de: "Welche Informationen sollten in der Spediteurdatenbank überprüft werden?",
      en: "What information should be verified in the carrier database?"
    },
    options: {
      ro: ["Doar numele", "Licențe, asigurări, flota, acoperirea geografică, rating", "Hobby-urile șoferilor", "Preferințe culinare"],
      de: ["Nur der Name", "Lizenzen, Versicherungen, Flotte, geografische Abdeckung, Bewertung", "Hobbys der Fahrer", "Kulinarische Vorlieben"],
      en: ["Only the name", "Licenses, insurance, fleet, geographic coverage, rating", "Driver hobbies", "Culinary preferences"]
    },
    correctIndex: 1,
    explanation: {
      ro: "O bază de date completă include toate informațiile necesare pentru evaluare și selectare.",
      de: "Eine vollständige Datenbank enthält alle notwendigen Informationen für Bewertung und Auswahl.",
      en: "A complete database includes all necessary information for evaluation and selection."
    }
  },
  {
    question: {
      ro: "Cum se măsoară punctualitatea unui transportator?",
      de: "Wie wird die Pünktlichkeit eines Spediteurs gemessen?",
      en: "How is a carrier's punctuality measured?"
    },
    options: {
      ro: ["După culoarea vehiculului", "Procentul livrărilor la timp din total", "După numărul de șoferi", "După vechimea companiei"],
      de: ["Nach Fahrzeugfarbe", "Prozentsatz der pünktlichen Lieferungen vom Gesamtvolumen", "Nach Fahreranzahl", "Nach Firmenalter"],
      en: ["By vehicle color", "Percentage of on-time deliveries from total", "By number of drivers", "By company age"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OTD (On-Time Delivery) măsoară procentul livrărilor finalizate în intervalul promis.",
      de: "OTD (On-Time Delivery) misst den Prozentsatz der innerhalb des versprochenen Zeitraums abgeschlossenen Lieferungen.",
      en: "OTD (On-Time Delivery) measures the percentage of deliveries completed within the promised timeframe."
    }
  },
  {
    question: {
      ro: "Ce acțiune se recomandă pentru transportatorii cu performanță slabă?",
      de: "Welche Maßnahme wird für Spediteure mit schlechter Leistung empfohlen?",
      en: "What action is recommended for underperforming carriers?"
    },
    options: {
      ro: ["Ignorarea problemelor", "Plan de îmbunătățire și monitorizare, eventual înlocuire", "Creșterea tarifelor", "Mai multe comenzi"],
      de: ["Ignorieren der Probleme", "Verbesserungsplan und Überwachung, eventuell Ersatz", "Tariferhöhung", "Mehr Bestellungen"],
      en: ["Ignoring problems", "Improvement plan and monitoring, eventually replacement", "Rate increase", "More orders"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Problema trebuie adresată prin discuții, plan de acțiune și, dacă nu se îmbunătățește, înlocuire.",
      de: "Das Problem muss durch Gespräche, Aktionsplan und bei fehlender Verbesserung durch Ersatz angegangen werden.",
      en: "The problem must be addressed through discussions, action plan, and if no improvement, replacement."
    }
  },
  {
    question: {
      ro: "Ce este un 'carrier portal'?",
      de: "Was ist ein 'Carrier Portal'?",
      en: "What is a 'carrier portal'?"
    },
    options: {
      ro: ["Intrare în depozit", "Platformă online pentru comunicarea și gestionarea transportatorilor", "Poartă de acces", "Site de știri"],
      de: ["Lagereingang", "Online-Plattform für Kommunikation und Verwaltung von Spediteuren", "Zugangstor", "Nachrichtenwebsite"],
      en: ["Warehouse entrance", "Online platform for communicating and managing carriers", "Access gate", "News site"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Portalul permite transportatorilor să vadă comenzile, să încarce documente și să comunice eficient.",
      de: "Das Portal ermöglicht Spediteuren, Bestellungen einzusehen, Dokumente hochzuladen und effizient zu kommunizieren.",
      en: "The portal allows carriers to view orders, upload documents, and communicate efficiently."
    }
  },
  {
    question: {
      ro: "Care factor este cel mai important în evaluarea fiabilității?",
      de: "Welcher Faktor ist bei der Bewertung der Zuverlässigkeit am wichtigsten?",
      en: "What factor is most important in evaluating reliability?"
    },
    options: {
      ro: ["Designul logo-ului", "Istoricul livrărilor și respectarea angajamentelor", "Mărimea sediului", "Numărul de telefoane"],
      de: ["Logo-Design", "Lieferhistorie und Einhaltung der Verpflichtungen", "Größe des Hauptsitzes", "Anzahl der Telefone"],
      en: ["Logo design", "Delivery history and commitment fulfillment", "Headquarters size", "Number of phones"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fiabilitatea se bazează pe performanța istorică și respectarea constantă a promisiunilor.",
      de: "Zuverlässigkeit basiert auf der historischen Leistung und der konsequenten Einhaltung von Versprechen.",
      en: "Reliability is based on historical performance and consistent fulfillment of promises."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'carrier compliance'?",
      de: "Was bedeutet 'Carrier Compliance'?",
      en: "What does 'carrier compliance' mean?"
    },
    options: {
      ro: ["Reclamații transportatori", "Conformitatea cu cerințele legale și contractuale", "Competiția între transportatori", "Cooperarea în trafic"],
      de: ["Spediteur-Beschwerden", "Einhaltung gesetzlicher und vertraglicher Anforderungen", "Wettbewerb zwischen Spediteuren", "Verkehrskooperation"],
      en: ["Carrier complaints", "Compliance with legal and contractual requirements", "Competition between carriers", "Traffic cooperation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Compliance verifică că transportatorii respectă toate reglementările și condițiile contractuale.",
      de: "Compliance prüft, ob Spediteure alle Vorschriften und Vertragsbedingungen einhalten.",
      en: "Compliance verifies that carriers meet all regulations and contractual conditions."
    }
  },
  {
    question: {
      ro: "Când trebuie reevaluată relația cu un transportator?",
      de: "Wann sollte die Beziehung zu einem Spediteur neu bewertet werden?",
      en: "When should the relationship with a carrier be re-evaluated?"
    },
    options: {
      ro: ["Niciodată", "Periodic și după incidente majore", "Doar la cererea clientului", "Doar la schimbarea prețurilor"],
      de: ["Niemals", "Regelmäßig und nach größeren Vorfällen", "Nur auf Kundenwunsch", "Nur bei Preisänderungen"],
      en: ["Never", "Periodically and after major incidents", "Only at customer request", "Only when prices change"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Evaluările regulate și după probleme asigură menținerea standardelor și identificarea timpurie a riscurilor.",
      de: "Regelmäßige Bewertungen und nach Problemen sichern die Einhaltung von Standards und frühe Risikoerkennung.",
      en: "Regular evaluations and after problems ensure maintaining standards and early risk identification."
    }
  },
  {
    question: {
      ro: "Ce documente sunt necesare pentru un transportator internațional?",
      de: "Welche Dokumente sind für einen internationalen Spediteur erforderlich?",
      en: "What documents are needed for an international carrier?"
    },
    options: {
      ro: ["Doar permis auto", "Licență comunitară, asigurare CMR, autorizații specifice", "Doar factură", "Doar contract"],
      de: ["Nur Führerschein", "EU-Lizenz, CMR-Versicherung, spezifische Genehmigungen", "Nur Rechnung", "Nur Vertrag"],
      en: ["Only driver's license", "Community license, CMR insurance, specific authorizations", "Only invoice", "Only contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul internațional necesită documente suplimentare pentru conformitatea în toate țările de tranzit.",
      de: "Internationaler Transport erfordert zusätzliche Dokumente für die Konformität in allen Transitländern.",
      en: "International transport requires additional documents for compliance in all transit countries."
    }
  },
  {
    question: {
      ro: "Ce este un 'backup carrier'?",
      de: "Was ist ein 'Backup-Spediteur'?",
      en: "What is a 'backup carrier'?"
    },
    options: {
      ro: ["Transportator pensionat", "Transportator alternativ pentru situații de urgență", "Transportator principal", "Transportator în vacanță"],
      de: ["Pensionierter Spediteur", "Alternativer Spediteur für Notfälle", "Hauptspediteur", "Spediteur im Urlaub"],
      en: ["Retired carrier", "Alternative carrier for emergency situations", "Main carrier", "Carrier on vacation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Backup carriers sunt pregătiți să preia transport când transportatorul principal nu este disponibil.",
      de: "Backup-Spediteure sind bereit, den Transport zu übernehmen, wenn der Hauptspediteur nicht verfügbar ist.",
      en: "Backup carriers are ready to take over transport when the primary carrier is unavailable."
    }
  },
  {
    question: {
      ro: "Ce rol are comunicarea în managementul transportatorilor?",
      de: "Welche Rolle spielt Kommunikation im Spediteurmanagement?",
      en: "What role does communication play in carrier management?"
    },
    options: {
      ro: ["Nu este importantă", "Esențială pentru coordonare și rezolvarea problemelor", "Doar formală", "Opțională"],
      de: ["Nicht wichtig", "Wesentlich für Koordination und Problemlösung", "Nur formal", "Optional"],
      en: ["Not important", "Essential for coordination and problem solving", "Only formal", "Optional"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea clară și constantă previne neînțelegerile și permite rezolvarea rapidă a problemelor.",
      de: "Klare und konstante Kommunikation verhindert Missverständnisse und ermöglicht schnelle Problemlösung.",
      en: "Clear and constant communication prevents misunderstandings and enables quick problem resolution."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'rate negotiation' cu transportatorii?",
      de: "Was bedeutet 'Tarifverhandlung' mit Spediteuren?",
      en: "What does 'rate negotiation' mean with carriers?"
    },
    options: {
      ro: ["Stabilirea cursului valutar", "Negocierea tarifelor de transport pentru servicii", "Rating-ul transportatorilor", "Notarea șoferilor"],
      de: ["Festlegung des Wechselkurses", "Verhandlung von Transporttarifen für Dienstleistungen", "Bewertung von Spediteuren", "Bewertung von Fahrern"],
      en: ["Setting exchange rate", "Negotiating transport rates for services", "Rating carriers", "Grading drivers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rate negotiation implică discutarea și stabilirea prețurilor corecte pentru serviciile de transport.",
      de: "Tarifverhandlung bedeutet die Diskussion und Festlegung fairer Preise für Transportdienstleistungen.",
      en: "Rate negotiation involves discussing and setting fair prices for transport services."
    }
  },
  {
    question: {
      ro: "Care este beneficiul contractelor pe termen lung cu transportatorii?",
      de: "Was ist der Vorteil langfristiger Verträge mit Spediteuren?",
      en: "What is the benefit of long-term contracts with carriers?"
    },
    options: {
      ro: ["Mai puțină flexibilitate", "Stabilitate prețuri, capacitate garantată, relație solidă", "Costuri mai mari", "Birocrație excesivă"],
      de: ["Weniger Flexibilität", "Preisstabilität, garantierte Kapazität, solide Beziehung", "Höhere Kosten", "Übermäßige Bürokratie"],
      en: ["Less flexibility", "Price stability, guaranteed capacity, solid relationship", "Higher costs", "Excessive bureaucracy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contractele pe termen lung oferă predictibilitate și acces prioritar la capacitate.",
      de: "Langfristige Verträge bieten Vorhersehbarkeit und vorrangigen Zugang zu Kapazitäten.",
      en: "Long-term contracts provide predictability and priority access to capacity."
    }
  },
  {
    question: {
      ro: "Ce trebuie inclus într-un SLA cu transportatorul?",
      de: "Was sollte in einem SLA mit dem Spediteur enthalten sein?",
      en: "What should be included in an SLA with the carrier?"
    },
    options: {
      ro: ["Doar prețul", "KPI-uri, penalități, standarde de calitate, comunicare", "Meniul cantinei", "Programul TV"],
      de: ["Nur der Preis", "KPIs, Strafen, Qualitätsstandards, Kommunikation", "Kantinenmenü", "TV-Programm"],
      en: ["Only the price", "KPIs, penalties, quality standards, communication", "Canteen menu", "TV schedule"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SLA-ul definește clar așteptările, măsurătorile și consecințele neîndeplinirii obiectivelor.",
      de: "Das SLA definiert klar Erwartungen, Messungen und Konsequenzen bei Nichterreichung der Ziele.",
      en: "The SLA clearly defines expectations, measurements, and consequences for not meeting objectives."
    }
  },
  {
    question: {
      ro: "Cum se gestionează disputele cu transportatorii?",
      de: "Wie werden Streitigkeiten mit Spediteuren gehandhabt?",
      en: "How are disputes with carriers managed?"
    },
    options: {
      ro: ["Ignorarea lor", "Documentare, comunicare, negociere, escaladare dacă e necesar", "Terminarea imediată a contractului", "Publicarea pe social media"],
      de: ["Ignorieren", "Dokumentation, Kommunikation, Verhandlung, Eskalation bei Bedarf", "Sofortige Vertragsbeendigung", "Veröffentlichung in sozialen Medien"],
      en: ["Ignoring them", "Documentation, communication, negotiation, escalation if needed", "Immediate contract termination", "Publishing on social media"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Disputele trebuie gestionate profesional, cu documentație și încercări de soluționare amiabilă.",
      de: "Streitigkeiten müssen professionell behandelt werden, mit Dokumentation und Versuchen einer gütlichen Einigung.",
      en: "Disputes must be managed professionally, with documentation and attempts at amicable resolution."
    }
  },
  {
    question: {
      ro: "Ce este 'capacity management' în relația cu transportatorii?",
      de: "Was ist 'Kapazitätsmanagement' in der Beziehung mit Spediteuren?",
      en: "What is 'capacity management' in the relationship with carriers?"
    },
    options: {
      ro: ["Măsurarea volumului", "Asigurarea disponibilității vehiculelor pentru nevoi", "Calculul greutății", "Dimensionarea ambalajelor"],
      de: ["Volumenmessung", "Sicherstellung der Fahrzeugverfügbarkeit für Bedürfnisse", "Gewichtsberechnung", "Verpackungsdimensionierung"],
      en: ["Volume measurement", "Ensuring vehicle availability for needs", "Weight calculation", "Packaging sizing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Capacity management asigură că există suficiente vehicule disponibile pentru a satisface cererea.",
      de: "Kapazitätsmanagement stellt sicher, dass genügend Fahrzeuge verfügbar sind, um die Nachfrage zu decken.",
      en: "Capacity management ensures enough vehicles are available to meet demand."
    }
  },
  {
    question: {
      ro: "Ce rol are feedback-ul în îmbunătățirea serviciilor transportatorilor?",
      de: "Welche Rolle spielt Feedback bei der Verbesserung der Spediteurleistungen?",
      en: "What role does feedback play in improving carrier services?"
    },
    options: {
      ro: ["Nu are niciun rol", "Identifică problemele și oportunități de îmbunătățire", "Creează conflicte", "Doar formalitate"],
      de: ["Hat keine Rolle", "Identifiziert Probleme und Verbesserungsmöglichkeiten", "Schafft Konflikte", "Nur Formalität"],
      en: ["Has no role", "Identifies problems and improvement opportunities", "Creates conflicts", "Just formality"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Feedback-ul constructiv ajută transportatorii să înțeleagă așteptările și să-și îmbunătățească serviciile.",
      de: "Konstruktives Feedback hilft Spediteuren, Erwartungen zu verstehen und ihre Dienstleistungen zu verbessern.",
      en: "Constructive feedback helps carriers understand expectations and improve their services."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'carrier segmentation'?",
      de: "Was bedeutet 'Spediteur-Segmentierung'?",
      en: "What does 'carrier segmentation' mean?"
    },
    options: {
      ro: ["Divizarea camioanelor", "Clasificarea transportatorilor pe categorii de servicii/performanță", "Separarea șoferilor", "Împărțirea rutelor"],
      de: ["LKW-Aufteilung", "Klassifizierung von Spediteuren nach Servicekategorien/Leistung", "Fahrertrennung", "Routenaufteilung"],
      en: ["Truck division", "Classifying carriers by service categories/performance", "Driver separation", "Route splitting"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Segmentarea permite alocarea optimă a transportatorilor pentru diferite tipuri de încărcături.",
      de: "Segmentierung ermöglicht die optimale Zuordnung von Spediteuren für verschiedene Ladungstypen.",
      en: "Segmentation allows optimal allocation of carriers for different types of loads."
    }
  },
  {
    question: {
      ro: "Ce acțiuni sunt incluse în 'carrier development'?",
      de: "Welche Maßnahmen sind in der 'Spediteurentwicklung' enthalten?",
      en: "What actions are included in 'carrier development'?"
    },
    options: {
      ro: ["Doar penalizări", "Training, suport, îmbunătățirea performanței", "Doar reduceri", "Doar monitoring"],
      de: ["Nur Strafen", "Training, Unterstützung, Leistungsverbesserung", "Nur Rabatte", "Nur Monitoring"],
      en: ["Only penalties", "Training, support, performance improvement", "Only discounts", "Only monitoring"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dezvoltarea transportatorilor include investiții în îmbunătățirea capabilităților și serviciilor lor.",
      de: "Spediteurentwicklung umfasst Investitionen in die Verbesserung ihrer Fähigkeiten und Dienstleistungen.",
      en: "Carrier development includes investments in improving their capabilities and services."
    }
  },
  {
    question: {
      ro: "De ce este importantă monitorizarea flotei transportatorului?",
      de: "Warum ist die Überwachung der Spediteurflotte wichtig?",
      en: "Why is monitoring the carrier's fleet important?"
    },
    options: {
      ro: ["Nu este importantă", "Asigură conformitatea și capacitatea de a livra servicii", "Doar pentru statistici", "Pentru facturile de combustibil"],
      de: ["Ist nicht wichtig", "Sichert Konformität und Fähigkeit zur Leistungserbringung", "Nur für Statistiken", "Für Kraftstoffrechnungen"],
      en: ["Not important", "Ensures compliance and ability to deliver services", "Only for statistics", "For fuel invoices"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Monitorizarea flotei confirmă că transportatorul are capacitatea de a îndeplini angajamentele asumate.",
      de: "Die Flottenüberwachung bestätigt, dass der Spediteur die Fähigkeit hat, eingegangene Verpflichtungen zu erfüllen.",
      en: "Fleet monitoring confirms the carrier has the ability to fulfill assumed commitments."
    }
  },
  {
    question: {
      ro: "Ce este 'carrier sustainability rating'?",
      de: "Was ist 'Spediteur-Nachhaltigkeitsbewertung'?",
      en: "What is 'carrier sustainability rating'?"
    },
    options: {
      ro: ["Durabilitatea vehiculelor", "Evaluarea practicilor de mediu ale transportatorului", "Vechimea companiei", "Stabilitatea financiară"],
      de: ["Fahrzeughaltbarkeit", "Bewertung der Umweltpraktiken des Spediteurs", "Firmenalter", "Finanzielle Stabilität"],
      en: ["Vehicle durability", "Evaluation of the carrier's environmental practices", "Company age", "Financial stability"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ratingul de sustenabilitate evaluează amprenta de carbon și practicile ecologice ale transportatorului.",
      de: "Das Nachhaltigkeitsrating bewertet den CO2-Fußabdruck und die ökologischen Praktiken des Spediteurs.",
      en: "Sustainability rating evaluates the carrier's carbon footprint and ecological practices."
    }
  },
  {
    question: {
      ro: "Care este importanța verificării referințelor transportatorilor?",
      de: "Wie wichtig ist die Überprüfung von Spediteur-Referenzen?",
      en: "What is the importance of verifying carrier references?"
    },
    options: {
      ro: ["Nu este necesară", "Oferă perspectiva clienților anteriori despre performanță", "Doar pentru companiile mari", "Opțională"],
      de: ["Nicht notwendig", "Bietet die Perspektive früherer Kunden zur Leistung", "Nur für große Unternehmen", "Optional"],
      en: ["Not necessary", "Provides previous clients' perspective on performance", "Only for large companies", "Optional"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Referințele oferă informații valoroase din experiența altor clienți cu transportatorul.",
      de: "Referenzen bieten wertvolle Informationen aus den Erfahrungen anderer Kunden mit dem Spediteur.",
      en: "References provide valuable information from other clients' experiences with the carrier."
    }
  },
  {
    question: {
      ro: "Ce este un 'carrier audit'?",
      de: "Was ist ein 'Spediteur-Audit'?",
      en: "What is a 'carrier audit'?"
    },
    options: {
      ro: ["Verificare audio", "Evaluare detaliată a operațiunilor și conformității", "Test de conducere", "Examen medical"],
      de: ["Audio-Check", "Detaillierte Bewertung von Betrieb und Konformität", "Fahrtest", "Medizinische Untersuchung"],
      en: ["Audio check", "Detailed evaluation of operations and compliance", "Driving test", "Medical exam"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Auditul verifică în detaliu procesele, documentele și conformitatea transportatorului.",
      de: "Das Audit überprüft detailliert die Prozesse, Dokumente und Konformität des Spediteurs.",
      en: "The audit verifies in detail the carrier's processes, documents, and compliance."
    }
  }
];

export function getRandomCarrierManagementQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...carrierManagementQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
