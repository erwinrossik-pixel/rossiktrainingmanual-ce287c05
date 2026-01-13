import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const supplyChainQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce este supply chain management (SCM)?",
      de: "Was ist Supply Chain Management (SCM)?",
      en: "What is supply chain management (SCM)?"
    },
    options: {
      ro: ["Management de personal", "Gestionarea fluxului de bunuri și informații de la furnizor la client", "Management financiar", "Management IT"],
      de: ["Personalmanagement", "Verwaltung des Waren- und Informationsflusses vom Lieferanten zum Kunden", "Finanzmanagement", "IT-Management"],
      en: ["Staff management", "Managing flow of goods and information from supplier to customer", "Financial management", "IT management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SCM coordonează toate activitățile pentru a livra produsul potrivit la momentul potrivit.",
      de: "SCM koordiniert alle Aktivitäten um das richtige Produkt zur richtigen Zeit zu liefern.",
      en: "SCM coordinates all activities to deliver the right product at the right time."
    }
  },
  {
    question: {
      ro: "Care sunt componentele principale ale supply chain?",
      de: "Was sind die Hauptkomponenten der Lieferkette?",
      en: "What are the main components of supply chain?"
    },
    options: {
      ro: ["Doar transport", "Aprovizionare, producție, depozitare, transport, distribuție", "Doar vânzări", "Doar achiziții"],
      de: ["Nur Transport", "Beschaffung, Produktion, Lagerung, Transport, Verteilung", "Nur Verkauf", "Nur Einkauf"],
      en: ["Only transport", "Procurement, production, warehousing, transport, distribution", "Only sales", "Only purchasing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Supply chain integrează toate etapele de la materia primă la clientul final.",
      de: "Die Lieferkette integriert alle Phasen vom Rohstoff bis zum Endkunden.",
      en: "Supply chain integrates all stages from raw material to end customer."
    }
  },
  {
    question: {
      ro: "Ce este Just-in-Time (JIT)?",
      de: "Was ist Just-in-Time (JIT)?",
      en: "What is Just-in-Time (JIT)?"
    },
    options: {
      ro: ["Întârziere acceptabilă", "Sistem de livrare exact când este nevoie, minimizând stocurile", "Livrare rapidă", "Livrare anticipată"],
      de: ["Akzeptable Verzögerung", "Liefersystem genau wenn benötigt, Bestände minimierend", "Schnelle Lieferung", "Frühe Lieferung"],
      en: ["Acceptable delay", "Delivery system exactly when needed, minimizing inventory", "Fast delivery", "Early delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "JIT reduce costurile de stocare dar necesită precizie extremă în livrări.",
      de: "JIT reduziert Lagerkosten erfordert aber extreme Präzision bei Lieferungen.",
      en: "JIT reduces storage costs but requires extreme precision in deliveries."
    }
  },
  {
    question: {
      ro: "Ce este vizibilitatea în supply chain?",
      de: "Was ist Sichtbarkeit in der Lieferkette?",
      en: "What is supply chain visibility?"
    },
    options: {
      ro: ["Transparență financiară", "Capacitatea de a urmări bunurile și informațiile în timp real", "Vizibilitate fizică", "Marketing"],
      de: ["Finanzielle Transparenz", "Fähigkeit Waren und Informationen in Echtzeit zu verfolgen", "Physische Sichtbarkeit", "Marketing"],
      en: ["Financial transparency", "Ability to track goods and information in real-time", "Physical visibility", "Marketing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Vizibilitatea permite anticiparea problemelor și răspuns rapid la schimbări.",
      de: "Sichtbarkeit ermöglicht Problemantizipation und schnelle Reaktion auf Änderungen.",
      en: "Visibility enables anticipating problems and quick response to changes."
    }
  },
  {
    question: {
      ro: "Ce este efectul bullwhip în supply chain?",
      de: "Was ist der Bullwhip-Effekt in der Lieferkette?",
      en: "What is the bullwhip effect in supply chain?"
    },
    options: {
      ro: ["Efect de undă", "Amplificarea variațiilor cererii pe măsură ce urcă în lanț", "Efect de accelerare", "Efect de frânare"],
      de: ["Welleneffekt", "Verstärkung der Nachfrageschwankungen beim Aufstieg in der Kette", "Beschleunigungseffekt", "Bremseffekt"],
      en: ["Wave effect", "Amplification of demand variations as going up the chain", "Acceleration effect", "Braking effect"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bullwhip effect duce la stocuri excesive sau lipsă din cauza informației distorsionate.",
      de: "Bullwhip-Effekt führt zu übermäßigen Beständen oder Engpässen wegen verzerrter Informationen.",
      en: "Bullwhip effect leads to excess inventory or shortages due to distorted information."
    }
  },
  {
    question: {
      ro: "Ce este lead time în supply chain?",
      de: "Was ist Durchlaufzeit in der Lieferkette?",
      en: "What is lead time in supply chain?"
    },
    options: {
      ro: ["Timp de conducere", "Timpul de la plasarea comenzii până la primirea produsului", "Timp de așteptare", "Timp de producție"],
      de: ["Führungszeit", "Zeit von Auftragserteilung bis Produkterhalt", "Wartezeit", "Produktionszeit"],
      en: ["Driving time", "Time from order placement to product receipt", "Waiting time", "Production time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lead time scurt oferă avantaj competitiv și satisfacție mai mare a clientului.",
      de: "Kurze Durchlaufzeit bietet Wettbewerbsvorteil und höhere Kundenzufriedenheit.",
      en: "Short lead time provides competitive advantage and higher customer satisfaction."
    }
  },
  {
    question: {
      ro: "Ce este 3PL (Third-Party Logistics)?",
      de: "Was ist 3PL (Third-Party Logistics)?",
      en: "What is 3PL (Third-Party Logistics)?"
    },
    options: {
      ro: ["3 livrări pe lună", "Externalizarea logisticii către un furnizor specializat", "3 parteneri", "3 depozite"],
      de: ["3 Lieferungen pro Monat", "Auslagerung der Logistik an spezialisierten Anbieter", "3 Partner", "3 Lager"],
      en: ["3 deliveries per month", "Outsourcing logistics to specialized provider", "3 partners", "3 warehouses"]
    },
    correctIndex: 1,
    explanation: {
      ro: "3PL permite companiilor să se concentreze pe core business externalizând logistica.",
      de: "3PL ermöglicht Unternehmen sich auf Kerngeschäft zu konzentrieren und Logistik auszulagern.",
      en: "3PL allows companies to focus on core business by outsourcing logistics."
    }
  },
  {
    question: {
      ro: "Ce este 4PL și cum diferă de 3PL?",
      de: "Was ist 4PL und wie unterscheidet es sich von 3PL?",
      en: "What is 4PL and how does it differ from 3PL?"
    },
    options: {
      ro: ["4 parteneri logistici", "Integrator care coordonează mai mulți 3PL și resurse", "4 depozite", "4 vehicule"],
      de: ["4 Logistikpartner", "Integrator der mehrere 3PL und Ressourcen koordiniert", "4 Lager", "4 Fahrzeuge"],
      en: ["4 logistics partners", "Integrator coordinating multiple 3PLs and resources", "4 warehouses", "4 vehicles"]
    },
    correctIndex: 1,
    explanation: {
      ro: "4PL oferă o soluție completă de supply chain, gestionând toți furnizorii.",
      de: "4PL bietet vollständige Supply-Chain-Lösung und verwaltet alle Anbieter.",
      en: "4PL provides complete supply chain solution, managing all providers."
    }
  },
  {
    question: {
      ro: "Ce este omnichannel în distribuție?",
      de: "Was ist Omnichannel in der Distribution?",
      en: "What is omnichannel in distribution?"
    },
    options: {
      ro: ["Un singur canal", "Integrarea mai multor canale de vânzare și livrare pentru experiență unitară", "Doar online", "Doar offline"],
      de: ["Ein Kanal", "Integration mehrerer Verkaufs- und Lieferkanäle für einheitliche Erfahrung", "Nur online", "Nur offline"],
      en: ["Single channel", "Integration of multiple sales and delivery channels for unified experience", "Only online", "Only offline"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Omnichannel necesită logistică flexibilă pentru a deservi diverse puncte de contact.",
      de: "Omnichannel erfordert flexible Logistik zur Bedienung verschiedener Kontaktpunkte.",
      en: "Omnichannel requires flexible logistics to serve various touchpoints."
    }
  },
  {
    question: {
      ro: "Ce este demand planning?",
      de: "Was ist Bedarfsplanung?",
      en: "What is demand planning?"
    },
    options: {
      ro: ["Planificarea cerințelor", "Procesul de estimare a cererii viitoare pentru optimizarea stocurilor", "Planificarea ofertei", "Planificarea prețurilor"],
      de: ["Anforderungsplanung", "Prozess der Schätzung zukünftiger Nachfrage zur Bestandsoptimierung", "Angebotsplanung", "Preisplanung"],
      en: ["Requirements planning", "Process of estimating future demand for inventory optimization", "Supply planning", "Price planning"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Previziunea acurată reduce stocurile excesive și previne rupturile de stoc.",
      de: "Genaue Prognose reduziert Überbestände und verhindert Fehlbestände.",
      en: "Accurate forecasting reduces excess inventory and prevents stockouts."
    }
  },
  {
    question: {
      ro: "Ce este S&OP (Sales and Operations Planning)?",
      de: "Was ist S&OP (Sales and Operations Planning)?",
      en: "What is S&OP (Sales and Operations Planning)?"
    },
    options: {
      ro: ["Plan de vânzări", "Proces de aliniere a cererii, aprovizionării și capacității", "Plan de marketing", "Plan financiar"],
      de: ["Verkaufsplan", "Prozess zur Abstimmung von Nachfrage, Versorgung und Kapazität", "Marketingplan", "Finanzplan"],
      en: ["Sales plan", "Process of aligning demand, supply and capacity", "Marketing plan", "Financial plan"]
    },
    correctIndex: 1,
    explanation: {
      ro: "S&OP asigură că toată organizația lucrează spre aceleași obiective.",
      de: "S&OP stellt sicher dass die gesamte Organisation auf dieselben Ziele hinarbeitet.",
      en: "S&OP ensures entire organization works towards same goals."
    }
  },
  {
    question: {
      ro: "Ce este network design în supply chain?",
      de: "Was ist Netzwerkdesign in der Lieferkette?",
      en: "What is network design in supply chain?"
    },
    options: {
      ro: ["Design IT", "Optimizarea locațiilor depozitelor și rutelor pentru eficiență maximă", "Design web", "Design grafic"],
      de: ["IT-Design", "Optimierung von Lagerstandorten und Routen für maximale Effizienz", "Webdesign", "Grafikdesign"],
      en: ["IT design", "Optimizing warehouse locations and routes for maximum efficiency", "Web design", "Graphic design"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Network design afectează costurile și nivelul de serviciu pe termen lung.",
      de: "Netzwerkdesign beeinflusst Kosten und Serviceniveau langfristig.",
      en: "Network design affects costs and service level long-term."
    }
  },
  {
    question: {
      ro: "Ce este procurement în supply chain?",
      de: "Was ist Beschaffung in der Lieferkette?",
      en: "What is procurement in supply chain?"
    },
    options: {
      ro: ["Vânzare", "Procesul de achiziție a bunurilor și serviciilor de la furnizori", "Producție", "Marketing"],
      de: ["Verkauf", "Prozess des Einkaufs von Waren und Dienstleistungen von Lieferanten", "Produktion", "Marketing"],
      en: ["Sales", "Process of purchasing goods and services from suppliers", "Production", "Marketing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Procurement eficient asigură calitate, preț competitiv și livrare la timp.",
      de: "Effiziente Beschaffung sichert Qualität, wettbewerbsfähigen Preis und pünktliche Lieferung.",
      en: "Efficient procurement ensures quality, competitive price and timely delivery."
    }
  },
  {
    question: {
      ro: "Ce este supplier relationship management (SRM)?",
      de: "Was ist Lieferantenbeziehungsmanagement (SRM)?",
      en: "What is supplier relationship management (SRM)?"
    },
    options: {
      ro: ["Management de clienți", "Gestionarea strategică a relațiilor cu furnizorii pentru valoare maximă", "Management de personal", "Management financiar"],
      de: ["Kundenmanagement", "Strategische Verwaltung von Lieferantenbeziehungen für maximalen Wert", "Personalmanagement", "Finanzmanagement"],
      en: ["Customer management", "Strategic management of supplier relationships for maximum value", "Staff management", "Financial management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SRM dezvoltă parteneriate care beneficiază ambele părți pe termen lung.",
      de: "SRM entwickelt Partnerschaften die beiden Seiten langfristig nutzen.",
      en: "SRM develops partnerships that benefit both parties long-term."
    }
  },
  {
    question: {
      ro: "Ce este safety stock și de ce e important?",
      de: "Was ist Sicherheitsbestand und warum ist er wichtig?",
      en: "What is safety stock and why is it important?"
    },
    options: {
      ro: ["Stoc pentru angajați", "Stoc tampon pentru variații de cerere sau întârzieri de aprovizionare", "Stoc vechi", "Stoc gratis"],
      de: ["Mitarbeiterbestand", "Pufferbestand für Nachfrageschwankungen oder Lieferverzögerungen", "Alter Bestand", "Gratisbestand"],
      en: ["Employee stock", "Buffer stock for demand variations or supply delays", "Old stock", "Free stock"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Safety stock previne rupturile de stoc dar crește costurile de stocare.",
      de: "Sicherheitsbestand verhindert Fehlbestände erhöht aber Lagerkosten.",
      en: "Safety stock prevents stockouts but increases storage costs."
    }
  },
  {
    question: {
      ro: "Ce este postponement în supply chain?",
      de: "Was ist Aufschub in der Lieferkette?",
      en: "What is postponement in supply chain?"
    },
    options: {
      ro: ["Întârziere", "Amânarea personalizării produsului până aproape de momentul livrării", "Anulare", "Returnare"],
      de: ["Verzögerung", "Verschiebung der Produktanpassung bis nahe am Liefertermin", "Stornierung", "Rücksendung"],
      en: ["Delay", "Delaying product customization until close to delivery time", "Cancellation", "Return"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Postponement reduce stocurile de produse finite și crește flexibilitatea.",
      de: "Aufschub reduziert Fertigwarenbestände und erhöht Flexibilität.",
      en: "Postponement reduces finished goods inventory and increases flexibility."
    }
  },
  {
    question: {
      ro: "Ce este total cost of ownership (TCO) în achiziții?",
      de: "Was sind Gesamtbetriebskosten (TCO) im Einkauf?",
      en: "What is total cost of ownership (TCO) in procurement?"
    },
    options: {
      ro: ["Doar prețul de achiziție", "Costul total incluzând achiziție, operare, întreținere și eliminare", "Doar transportul", "Doar taxele"],
      de: ["Nur Kaufpreis", "Gesamtkosten inkl. Kauf, Betrieb, Wartung und Entsorgung", "Nur Transport", "Nur Steuern"],
      en: ["Only purchase price", "Total cost including purchase, operation, maintenance and disposal", "Only transport", "Only taxes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TCO oferă o imagine completă a costurilor pentru decizii de achiziție corecte.",
      de: "TCO bietet vollständiges Kostenbild für korrekte Einkaufsentscheidungen.",
      en: "TCO provides complete cost picture for correct purchasing decisions."
    }
  },
  {
    question: {
      ro: "Ce este supply chain resilience?",
      de: "Was ist Supply-Chain-Resilienz?",
      en: "What is supply chain resilience?"
    },
    options: {
      ro: ["Rigiditate", "Capacitatea de a se adapta și recupera rapid după perturbări", "Inflexibilitate", "Dependență"],
      de: ["Starrheit", "Fähigkeit sich an Störungen anzupassen und schnell zu erholen", "Unflexibilität", "Abhängigkeit"],
      en: ["Rigidity", "Ability to adapt and recover quickly from disruptions", "Inflexibility", "Dependency"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reziliența a devenit critică după pandemie și perturbările lanțurilor globale.",
      de: "Resilienz wurde nach Pandemie und globalen Kettenstörungen kritisch.",
      en: "Resilience became critical after pandemic and global chain disruptions."
    }
  },
  {
    question: {
      ro: "Ce este dual sourcing?",
      de: "Was ist Dual Sourcing?",
      en: "What is dual sourcing?"
    },
    options: {
      ro: ["O singură sursă", "Utilizarea a doi sau mai mulți furnizori pentru același produs", "Sursă secretă", "Sursă gratuită"],
      de: ["Eine Quelle", "Nutzung von zwei oder mehr Lieferanten für dasselbe Produkt", "Geheime Quelle", "Gratisquelle"],
      en: ["Single source", "Using two or more suppliers for the same product", "Secret source", "Free source"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dual sourcing reduce riscul de întrerupere dar poate crește complexitatea.",
      de: "Dual Sourcing reduziert Unterbrechungsrisiko kann aber Komplexität erhöhen.",
      en: "Dual sourcing reduces disruption risk but may increase complexity."
    }
  },
  {
    question: {
      ro: "Ce este vendor managed inventory (VMI)?",
      de: "Was ist lieferantenverwalteter Bestand (VMI)?",
      en: "What is vendor managed inventory (VMI)?"
    },
    options: {
      ro: ["Client gestionează", "Furnizorul gestionează și reaprovizionează stocul clientului", "Nicio gestionare", "Auto-gestionare"],
      de: ["Kunde verwaltet", "Lieferant verwaltet und füllt Kundenbestand auf", "Keine Verwaltung", "Selbstverwaltung"],
      en: ["Customer manages", "Supplier manages and replenishes customer's inventory", "No management", "Self-management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "VMI transferă responsabilitatea reaprovizionării către furnizor bazat pe date de consum.",
      de: "VMI überträgt Nachschubverantwortung an Lieferanten basierend auf Verbrauchsdaten.",
      en: "VMI transfers replenishment responsibility to supplier based on consumption data."
    }
  },
  {
    question: {
      ro: "Ce sunt KPI-urile de supply chain?",
      de: "Was sind Supply-Chain-KPIs?",
      en: "What are supply chain KPIs?"
    },
    options: {
      ro: ["Doar financiari", "Indicatori pentru măsurarea performanței: OTIF, fill rate, cycle time", "Doar de producție", "Doar de vânzări"],
      de: ["Nur finanziell", "Indikatoren zur Leistungsmessung: OTIF, Füllrate, Zykluszeit", "Nur Produktion", "Nur Verkauf"],
      en: ["Only financial", "Indicators for measuring performance: OTIF, fill rate, cycle time", "Only production", "Only sales"]
    },
    correctIndex: 1,
    explanation: {
      ro: "KPI-urile permit monitorizarea și îmbunătățirea continuă a performanței.",
      de: "KPIs ermöglichen Überwachung und kontinuierliche Leistungsverbesserung.",
      en: "KPIs enable monitoring and continuous performance improvement."
    }
  },
  {
    question: {
      ro: "Ce este OTIF (On Time In Full)?",
      de: "Was ist OTIF (On Time In Full)?",
      en: "What is OTIF (On Time In Full)?"
    },
    options: {
      ro: ["La timp parțial", "Livrare la timp cu cantitatea completă comandată", "Parțial la timp", "Niciodată la timp"],
      de: ["Pünktlich teilweise", "Pünktliche Lieferung mit vollständiger bestellter Menge", "Teilweise pünktlich", "Nie pünktlich"],
      en: ["On time partially", "Delivery on time with complete ordered quantity", "Partially on time", "Never on time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OTIF este un indicator cheie de satisfacție a clientului în supply chain.",
      de: "OTIF ist ein Schlüsselindikator für Kundenzufriedenheit in der Lieferkette.",
      en: "OTIF is a key customer satisfaction indicator in supply chain."
    }
  },
  {
    question: {
      ro: "Ce este digitalizarea supply chain?",
      de: "Was ist Digitalisierung der Lieferkette?",
      en: "What is supply chain digitalization?"
    },
    options: {
      ro: ["Doar email", "Utilizarea tehnologiilor digitale pentru eficientizarea proceselor", "Doar ERP", "Doar website"],
      de: ["Nur E-Mail", "Nutzung digitaler Technologien zur Prozessoptimierung", "Nur ERP", "Nur Website"],
      en: ["Only email", "Using digital technologies to streamline processes", "Only ERP", "Only website"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Digitalizarea include IoT, AI, blockchain, analytics pentru supply chain inteligent.",
      de: "Digitalisierung umfasst IoT, KI, Blockchain, Analytics für intelligente Lieferkette.",
      en: "Digitalization includes IoT, AI, blockchain, analytics for smart supply chain."
    }
  },
  {
    question: {
      ro: "Ce rol are transportul în supply chain?",
      de: "Welche Rolle spielt Transport in der Lieferkette?",
      en: "What role does transport play in supply chain?"
    },
    options: {
      ro: ["Rol minor", "Leagă nodurile rețelei, influențează costuri și timp de livrare", "Niciun rol", "Doar suport"],
      de: ["Geringe Rolle", "Verbindet Netzwerkknoten, beeinflusst Kosten und Lieferzeit", "Keine Rolle", "Nur Unterstützung"],
      en: ["Minor role", "Connects network nodes, influences costs and delivery time", "No role", "Only support"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul reprezintă adesea 50-60% din costurile logistice totale.",
      de: "Transport macht oft 50-60% der gesamten Logistikkosten aus.",
      en: "Transport often represents 50-60% of total logistics costs."
    }
  },
  {
    question: {
      ro: "Ce este control tower în supply chain?",
      de: "Was ist Control Tower in der Lieferkette?",
      en: "What is control tower in supply chain?"
    },
    options: {
      ro: ["Turn de control aerian", "Centru centralizat de monitorizare și coordonare a operațiunilor", "Depozit central", "Sediu principal"],
      de: ["Flugsicherungsturm", "Zentralisiertes Überwachungs- und Koordinationszentrum", "Zentrallager", "Hauptsitz"],
      en: ["Air control tower", "Centralized monitoring and operations coordination center", "Central warehouse", "Headquarters"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Control tower oferă vizibilitate end-to-end și permite intervenție proactivă.",
      de: "Control Tower bietet End-to-End-Sichtbarkeit und ermöglicht proaktives Eingreifen.",
      en: "Control tower provides end-to-end visibility and enables proactive intervention."
    }
  },
  {
    question: {
      ro: "Ce este nearshoring în supply chain?",
      de: "Was ist Nearshoring in der Lieferkette?",
      en: "What is nearshoring in supply chain?"
    },
    options: {
      ro: ["Mutare peste ocean", "Relocarea producției mai aproape de piețele de destinație", "Externalizare completă", "Internalizare"],
      de: ["Verlagerung über Ozean", "Verlagerung der Produktion näher an Zielmärkte", "Vollständige Auslagerung", "Internalisierung"],
      en: ["Moving overseas", "Relocating production closer to destination markets", "Complete outsourcing", "Internalization"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Nearshoring reduce lead time și riscurile asociate lanțurilor lungi de aprovizionare.",
      de: "Nearshoring reduziert Durchlaufzeit und Risiken langer Lieferketten.",
      en: "Nearshoring reduces lead time and risks associated with long supply chains."
    }
  },
  {
    question: {
      ro: "Ce este last-mile logistics?",
      de: "Was ist Last-Mile-Logistik?",
      en: "What is last-mile logistics?"
    },
    options: {
      ro: ["Prima milă", "Ultima etapă a livrării, de la hub la clientul final", "Milă lungă", "Milă gratuită"],
      de: ["Erste Meile", "Letzte Lieferstufe, vom Hub zum Endkunden", "Lange Meile", "Gratismeile"],
      en: ["First mile", "Final delivery stage, from hub to end customer", "Long mile", "Free mile"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Last-mile este cea mai costisitoare și complexă parte a livrării.",
      de: "Last-Mile ist der teuerste und komplexeste Teil der Lieferung.",
      en: "Last-mile is the most expensive and complex part of delivery."
    }
  },
  {
    question: {
      ro: "Ce tendință modelează supply chain-ul viitorului?",
      de: "Welcher Trend prägt die Lieferkette der Zukunft?",
      en: "What trend shapes the supply chain of the future?"
    },
    options: {
      ro: ["Mai multă hârtie", "Automatizare, sustenabilitate, digitalizare, reziliență", "Mai puțină tehnologie", "Izolare"],
      de: ["Mehr Papier", "Automatisierung, Nachhaltigkeit, Digitalisierung, Resilienz", "Weniger Technologie", "Isolation"],
      en: ["More paper", "Automation, sustainability, digitalization, resilience", "Less technology", "Isolation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Supply chain-ul viitorului va fi mai agil, verde și conectat digital.",
      de: "Die Lieferkette der Zukunft wird agiler, grüner und digital vernetzt sein.",
      en: "Future supply chain will be more agile, green and digitally connected."
    }
  }
];
