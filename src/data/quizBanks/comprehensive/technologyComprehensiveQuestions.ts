import { TranslatedQuizQuestion } from '../../quizTranslations';

export const technologyComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt tehnologiile cheie în transportul modern?",
      de: "Was sind die Schlüsseltechnologien im modernen Transport?",
      en: "What are the key technologies in modern transport?"
    },
    options: {
      ro: ["Doar telefon", "TMS, GPS/telematics, IoT, API integrations, mobile apps, cloud computing", "Doar fax", "Doar email"],
      de: ["Nur Telefon", "TMS, GPS/Telematik, IoT, API-Integrationen, Mobile Apps, Cloud Computing", "Nur Fax", "Nur E-Mail"],
      en: ["Only phone", "TMS, GPS/telematics, IoT, API integrations, mobile apps, cloud computing", "Only fax", "Only email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tehnologii esențiale: TMS pentru management, GPS/telematics pentru vizibilitate, IoT pentru monitorizare, API pentru integrări, mobile pentru șoferi.",
      de: "Wesentliche Technologien: TMS für Management, GPS/Telematik für Sichtbarkeit, IoT für Überwachung, API für Integrationen, Mobile für Fahrer.",
      en: "Essential technologies: TMS for management, GPS/telematics for visibility, IoT for monitoring, API for integrations, mobile for drivers."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este IoT (Internet of Things) în logistică?",
      de: "Was ist IoT (Internet of Things) in der Logistik?",
      en: "What is IoT (Internet of Things) in logistics?"
    },
    options: {
      ro: ["Internet normal", "Senzori conectați care transmit date în timp real despre marfă și vehicul", "Doar GPS", "Website"],
      de: ["Normales Internet", "Vernetzte Sensoren die Echtzeitdaten über Fracht und Fahrzeug übertragen", "Nur GPS", "Website"],
      en: ["Normal internet", "Connected sensors that transmit real-time data about cargo and vehicle", "Only GPS", "Website"]
    },
    correctIndex: 1,
    explanation: {
      ro: "IoT în transport: senzori temperatură, umiditate, shock/vibrații, deschidere uși, nivel combustibil - toate transmit date live.",
      de: "IoT im Transport: Temperatur-, Feuchtigkeits-, Stoß-/Vibrations-, Türöffnungs-, Kraftstoffstandsensoren - alle übertragen Live-Daten.",
      en: "IoT in transport: temperature, humidity, shock/vibration, door opening, fuel level sensors - all transmit live data."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum funcționează un sistem de tracking în timp real?",
      de: "Wie funktioniert ein Echtzeit-Tracking-System?",
      en: "How does a real-time tracking system work?"
    },
    options: {
      ro: ["Manual", "GPS în vehicul → transmisie date → server cloud → vizualizare în TMS/portal", "Doar hartă", "Doar telefon"],
      de: ["Manuell", "GPS im Fahrzeug → Datenübertragung → Cloud-Server → Visualisierung in TMS/Portal", "Nur Karte", "Nur Telefon"],
      en: ["Manual", "GPS in vehicle → data transmission → cloud server → visualization in TMS/portal", "Only map", "Only phone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tracking: dispozitiv GPS + SIM → date la server (poziție, viteză, status) → procesare → afișare hartă/calcul ETA/alertă.",
      de: "Tracking: GPS-Gerät + SIM → Daten zum Server (Position, Geschwindigkeit, Status) → Verarbeitung → Kartenanzeige/ETA-Berechnung/Alarm.",
      en: "Tracking: GPS device + SIM → data to server (position, speed, status) → processing → map display/ETA calculation/alert."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare soluție visibility pentru supply chain. Componente și integrări necesare?",
      de: "Implementierung Supply Chain Visibility-Lösung. Komponenten und notwendige Integrationen?",
      en: "Implementing supply chain visibility solution. Components and required integrations?"
    },
    options: {
      ro: ["Doar GPS", "Multi-carrier tracking, ETA prediction, exception management, client portal, API integrations, alerting", "Doar email updates", "Doar telefon"],
      de: ["Nur GPS", "Multi-Carrier-Tracking, ETA-Vorhersage, Exception Management, Kundenportal, API-Integrationen, Alerting", "Nur E-Mail-Updates", "Nur Telefon"],
      en: ["Only GPS", "Multi-carrier tracking, ETA prediction, exception management, client portal, API integrations, alerting", "Only email updates", "Only phone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Visibility platform: agregare date multi-carrier, ML pentru ETA, gestiune excepții, dashboard client, API pentru TMS/ERP, alertare proactivă.",
      de: "Visibility-Plattform: Multi-Carrier-Datenaggregation, ML für ETA, Exception-Management, Kunden-Dashboard, API für TMS/ERP, proaktives Alerting.",
      en: "Visibility platform: multi-carrier data aggregation, ML for ETA, exception management, client dashboard, API for TMS/ERP, proactive alerting."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este blockchain în contextul supply chain?",
      de: "Was ist Blockchain im Supply Chain Kontext?",
      en: "What is blockchain in supply chain context?"
    },
    options: {
      ro: ["Criptomonedă", "Registru distribuit și imutabil pentru urmărirea originii și tranzacțiilor mărfii", "Doar pentru bănci", "Software normal"],
      de: ["Kryptowährung", "Verteiltes und unveränderliches Register zur Verfolgung von Herkunft und Warentransaktionen", "Nur für Banken", "Normale Software"],
      en: ["Cryptocurrency", "Distributed and immutable ledger for tracking cargo origin and transactions", "Only for banks", "Normal software"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Blockchain supply chain: istoric complet și nefalsificabil al mărfii - origine, transformări, transport, temperatură - încredere între părți.",
      de: "Blockchain Supply Chain: vollständige und fälschungssichere Warenhistorie - Herkunft, Verarbeitung, Transport, Temperatur - Vertrauen zwischen Parteien.",
      en: "Blockchain supply chain: complete and tamper-proof cargo history - origin, processing, transport, temperature - trust between parties."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum integrezi sisteme legacy cu soluții moderne?",
      de: "Wie integrierst du Legacy-Systeme mit modernen Lösungen?",
      en: "How do you integrate legacy systems with modern solutions?"
    },
    options: {
      ro: ["Înlocuiești tot", "Middleware/API gateway, ETL pentru date, integrare incrementală, parallel running", "Ignori legacy", "Doar manual"],
      de: ["Alles ersetzen", "Middleware/API-Gateway, ETL für Daten, inkrementelle Integration, Parallelbetrieb", "Legacy ignorieren", "Nur manuell"],
      en: ["Replace everything", "Middleware/API gateway, ETL for data, incremental integration, parallel running", "Ignore legacy", "Only manual"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrare legacy: middleware care traduce între sisteme, ETL pentru sincronizare date, migrare pas cu pas, menține funcționalitate existentă.",
      de: "Legacy-Integration: Middleware die zwischen Systemen übersetzt, ETL für Datensynchronisation, schrittweise Migration, bestehende Funktionalität erhalten.",
      en: "Legacy integration: middleware that translates between systems, ETL for data sync, step-by-step migration, maintain existing functionality."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Digital twin în logistică. Ce este și cum se folosește?",
      de: "Digital Twin in der Logistik. Was ist es und wie wird es genutzt?",
      en: "Digital twin in logistics. What is it and how is it used?"
    },
    options: {
      ro: ["Copie backup", "Replică virtuală a operațiunilor pentru simulare, optimizare și predicție", "Doar hartă", "Doar raport"],
      de: ["Backup-Kopie", "Virtuelle Replik der Operationen für Simulation, Optimierung und Prognose", "Nur Karte", "Nur Bericht"],
      en: ["Backup copy", "Virtual replica of operations for simulation, optimization and prediction", "Only map", "Only report"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Digital twin: model virtual al rețelei logistice. Simulezi scenarii (ce-ar fi dacă?), optimizezi înainte de implementare, prezici probleme.",
      de: "Digital Twin: virtuelles Modell des Logistiknetzwerks. Szenarien simulieren (was wäre wenn?), vor Implementierung optimieren, Probleme vorhersagen.",
      en: "Digital twin: virtual model of logistics network. Simulate scenarios (what-if?), optimize before implementation, predict problems."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este API în context B2B?",
      de: "Was ist API im B2B-Kontext?",
      en: "What is API in B2B context?"
    },
    options: {
      ro: ["Aplicație mobilă", "Interfață pentru conectare automată între sisteme software diferite", "Doar pentru programatori", "Email automat"],
      de: ["Mobile App", "Schnittstelle für automatische Verbindung zwischen verschiedenen Softwaresystemen", "Nur für Programmierer", "Automatische E-Mail"],
      en: ["Mobile app", "Interface for automatic connection between different software systems", "Only for programmers", "Automatic email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "API: permite sistemelor să 'vorbească'. Ex: TMS-ul tău cere automat status de la transportator sau trimite ETA către clientul care îl afișează în ERP-ul lui.",
      de: "API: ermöglicht Systemen zu 'sprechen'. Bsp: dein TMS fragt automatisch Status beim Transportunternehmer oder sendet ETA zum Kunden der es in seinem ERP anzeigt.",
      en: "API: allows systems to 'talk'. Ex: your TMS automatically requests status from carrier or sends ETA to client who displays it in their ERP."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum evaluezi maturitatea digitală a unei companii de transport?",
      de: "Wie bewertest du die digitale Reife eines Transportunternehmens?",
      en: "How do you evaluate digital maturity of a transport company?"
    },
    options: {
      ro: ["Doar website", "Nivel digitalizare procese, integrări, date/analytics, skills echipă, investiții, cultură inovație", "Doar TMS", "Doar email"],
      de: ["Nur Website", "Digitalisierungsgrad Prozesse, Integrationen, Daten/Analytics, Teamskills, Investitionen, Innovationskultur", "Nur TMS", "Nur E-Mail"],
      en: ["Only website", "Process digitization level, integrations, data/analytics, team skills, investments, innovation culture", "Only TMS", "Only email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Maturitate digitală: câte procese sunt digitizate? sisteme integrate? folosiți date pentru decizii? echipa știe să folosească tool-urile? buget pentru tech?",
      de: "Digitale Reife: wie viele Prozesse digitalisiert? integrierte Systeme? nutzt ihr Daten für Entscheidungen? kann das Team die Tools nutzen? Budget für Tech?",
      en: "Digital maturity: how many processes digitized? integrated systems? do you use data for decisions? can team use the tools? budget for tech?"
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Strategie de transformare digitală pentru expeditor tradițional. Roadmap pe 3 ani?",
      de: "Digitale Transformationsstrategie für traditionellen Spediteur. 3-Jahres-Roadmap?",
      en: "Digital transformation strategy for traditional forwarder. 3-year roadmap?"
    },
    options: {
      ro: ["Doar TMS", "Audit, prioritizare, fundație (TMS/procese), integrări, advanced (AI/visibility), cultură, measuring success", "Doar website nou", "Nu e nevoie"],
      de: ["Nur TMS", "Audit, Priorisierung, Fundament (TMS/Prozesse), Integrationen, Advanced (AI/Visibility), Kultur, Erfolgsmessung", "Nur neue Website", "Nicht nötig"],
      en: ["Only TMS", "Audit, prioritization, foundation (TMS/processes), integrations, advanced (AI/visibility), culture, measuring success", "Only new website", "Not needed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Roadmap: An1 - fundație (TMS, procese standard), An2 - integrări (clienți, transportatori, IoT), An3 - advanced (AI, visibility, automatizare avansată).",
      de: "Roadmap: Jahr1 - Fundament (TMS, Standardprozesse), Jahr2 - Integrationen (Kunden, Transportunternehmer, IoT), Jahr3 - Advanced (AI, Visibility, erweiterte Automatisierung).",
      en: "Roadmap: Year1 - foundation (TMS, standard processes), Year2 - integrations (clients, carriers, IoT), Year3 - advanced (AI, visibility, advanced automation)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este cloud computing în logistică?",
      de: "Was ist Cloud Computing in der Logistik?",
      en: "What is cloud computing in logistics?"
    },
    options: {
      ro: ["Calculator în nori", "Software și date accesibile via internet, fără servere locale", "Doar backup", "Doar email"],
      de: ["Computer in den Wolken", "Software und Daten über Internet zugänglich, ohne lokale Server", "Nur Backup", "Nur E-Mail"],
      en: ["Computer in clouds", "Software and data accessible via internet, without local servers", "Only backup", "Only email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cloud: TMS SaaS accesibil de oriunde, date centralizate, update-uri automate, scalabilitate, pay-per-use, fără investiție hardware.",
      de: "Cloud: TMS SaaS von überall zugänglich, zentralisierte Daten, automatische Updates, Skalierbarkeit, Pay-per-Use, keine Hardware-Investition.",
      en: "Cloud: TMS SaaS accessible from anywhere, centralized data, automatic updates, scalability, pay-per-use, no hardware investment."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum asiguri cybersecurity în operațiuni logistice?",
      de: "Wie gewährleistest du Cybersecurity in Logistikoperationen?",
      en: "How do you ensure cybersecurity in logistics operations?"
    },
    options: {
      ro: ["Doar parolă", "Politici, training, autentificare multi-factor, criptare, backup, incident response, vendor security", "Nu e problemă", "Doar antivirus"],
      de: ["Nur Passwort", "Richtlinien, Training, Multi-Faktor-Authentifizierung, Verschlüsselung, Backup, Incident Response, Vendor-Sicherheit", "Kein Problem", "Nur Antivirus"],
      en: ["Only password", "Policies, training, multi-factor authentication, encryption, backup, incident response, vendor security", "Not a problem", "Only antivirus"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cybersecurity: politici clare, MFA obligatoriu, criptare date sensibile, backup 3-2-1, plan răspuns incident, evaluare furnizori.",
      de: "Cybersecurity: klare Richtlinien, MFA obligatorisch, Verschlüsselung sensibler Daten, 3-2-1 Backup, Incident-Response-Plan, Vendor-Bewertung.",
      en: "Cybersecurity: clear policies, mandatory MFA, sensitive data encryption, 3-2-1 backup, incident response plan, vendor evaluation."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Autonomous vehicles și drones în logistică. Timeline și aplicații realiste?",
      de: "Autonome Fahrzeuge und Drohnen in der Logistik. Timeline und realistische Anwendungen?",
      en: "Autonomous vehicles and drones in logistics. Timeline and realistic applications?"
    },
    options: {
      ro: ["Deja complet adoptat", "Hub-to-hub pe autostrăzi (5-10 ani), last-mile drones pentru rural (3-5 ani), depozite autonome (acum)", "Niciodată", "Doar sci-fi"],
      de: ["Bereits voll adoptiert", "Hub-zu-Hub auf Autobahnen (5-10 Jahre), Last-Mile Drohnen für ländlich (3-5 Jahre), autonome Lager (jetzt)", "Nie", "Nur Sci-Fi"],
      en: ["Already fully adopted", "Hub-to-hub on highways (5-10 years), last-mile drones for rural (3-5 years), autonomous warehouses (now)", "Never", "Only sci-fi"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Realitate: autonomous trucking platooning teste (10 ani pentru mainstream), drones last-mile în zone rurale (regulat în US), AGV în depozite (acum).",
      de: "Realität: Autonomous Trucking Platooning Tests (10 Jahre für Mainstream), Last-Mile Drohnen in ländlichen Gebieten (regulär in US), AGV in Lagern (jetzt).",
      en: "Reality: autonomous trucking platooning tests (10 years for mainstream), last-mile drones in rural areas (regular in US), AGV in warehouses (now)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este RPA (Robotic Process Automation) în back-office?",
      de: "Was ist RPA (Robotic Process Automation) im Back-Office?",
      en: "What is RPA (Robotic Process Automation) in back-office?"
    },
    options: {
      ro: ["Roboți fizici", "Software care automatizează sarcini repetitive: data entry, reconciliere, rapoarte", "Doar pentru fabrici", "Doar IT"],
      de: ["Physische Roboter", "Software die repetitive Aufgaben automatisiert: Dateneingabe, Abstimmung, Reports", "Nur für Fabriken", "Nur IT"],
      en: ["Physical robots", "Software that automates repetitive tasks: data entry, reconciliation, reports", "Only for factories", "Only IT"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RPA: bot-uri software care fac munca repetitivă: copiere date între sisteme, generare rapoarte, verificare facturi - fără erori, non-stop.",
      de: "RPA: Software-Bots die repetitive Arbeit erledigen: Daten zwischen Systemen kopieren, Reports generieren, Rechnungen prüfen - fehlerfrei, non-stop.",
      en: "RPA: software bots that do repetitive work: copy data between systems, generate reports, check invoices - error-free, non-stop."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum măsori ROI-ul investițiilor tehnologice?",
      de: "Wie misst du den ROI von Technologieinvestitionen?",
      en: "How do you measure ROI of technology investments?"
    },
    options: {
      ro: ["Nu se poate", "Beneficii cuantificabile (timp, erori, productivitate) vs. costuri totale (licențe, implementare, training, mentenanță)", "Doar costuri", "Doar beneficii"],
      de: ["Nicht möglich", "Quantifizierbare Vorteile (Zeit, Fehler, Produktivität) vs. Gesamtkosten (Lizenzen, Implementierung, Training, Wartung)", "Nur Kosten", "Nur Vorteile"],
      en: ["Not possible", "Quantifiable benefits (time, errors, productivity) vs. total costs (licenses, implementation, training, maintenance)", "Only costs", "Only benefits"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tech ROI: (ore salvate × cost/oră + erori evitate × cost/eroare + venit suplimentar) - (licențe + implementare + training + mentenanță) pe 3-5 ani.",
      de: "Tech ROI: (gesparte Stunden × Kosten/Stunde + vermiedene Fehler × Kosten/Fehler + zusätzlicher Umsatz) - (Lizenzen + Implementierung + Training + Wartung) über 3-5 Jahre.",
      en: "Tech ROI: (hours saved × cost/hour + errors avoided × cost/error + additional revenue) - (licenses + implementation + training + maintenance) over 3-5 years."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Data analytics și big data în transport. Aplicații practice și provocări?",
      de: "Data Analytics und Big Data im Transport. Praktische Anwendungen und Herausforderungen?",
      en: "Data analytics and big data in transport. Practical applications and challenges?"
    },
    options: {
      ro: ["Doar rapoarte", "Optimizare pricing, predicție cerere, eficiență rute, risk scoring - provocări: calitate date, skills, infrastructură", "Nu pentru transport", "Doar pentru mari"],
      de: ["Nur Reports", "Preisoptimierung, Nachfragevorhersage, Routeneffizienz, Risk Scoring - Herausforderungen: Datenqualität, Skills, Infrastruktur", "Nicht für Transport", "Nur für Große"],
      en: ["Only reports", "Pricing optimization, demand prediction, route efficiency, risk scoring - challenges: data quality, skills, infrastructure", "Not for transport", "Only for large"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Big data: pricing dinamic pe date istorice, predicție volum sezonier, optimizare network, customer churn - provocări: date curate, oameni care înțeleg, investiție infra.",
      de: "Big Data: dynamisches Pricing auf historischen Daten, saisonale Volumenprognose, Netzwerkoptimierung, Kundenabwanderung - Herausforderungen: saubere Daten, verstehende Mitarbeiter, Infra-Investition.",
      en: "Big data: dynamic pricing on historical data, seasonal volume prediction, network optimization, customer churn - challenges: clean data, understanding people, infra investment."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce rol au standardele în digitalizarea transportului?",
      de: "Welche Rolle spielen Standards in der Transportdigitalisierung?",
      en: "What role do standards play in transport digitization?"
    },
    options: {
      ro: ["Niciun rol", "Permit interoperabilitate: eCMR, GS1, EDI EDIFACT, API standards, data formats comune", "Doar birocrație", "Doar pentru mari"],
      de: ["Keine Rolle", "Ermöglichen Interoperabilität: eCMR, GS1, EDI EDIFACT, API-Standards, gemeinsame Datenformate", "Nur Bürokratie", "Nur für Große"],
      en: ["No role", "Enable interoperability: eCMR, GS1, EDI EDIFACT, API standards, common data formats", "Only bureaucracy", "Only for large"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Standarde: permit sistemelor diferite să comunice - eCMR digital, GS1 pentru identificare, EDIFACT pentru EDI, standardizare API pentru integrări ușoare.",
      de: "Standards: ermöglichen verschiedenen Systemen zu kommunizieren - digitales eCMR, GS1 für Identifikation, EDIFACT für EDI, API-Standardisierung für einfache Integrationen.",
      en: "Standards: allow different systems to communicate - digital eCMR, GS1 for identification, EDIFACT for EDI, API standardization for easy integrations."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi rezistența la schimbare tehnologică în organizație?",
      de: "Wie managst du Widerstand gegen technologische Veränderung in der Organisation?",
      en: "How do you manage resistance to technological change in organization?"
    },
    options: {
      ro: ["Impui", "Comunică beneficii, implică utilizatori, training adecvat, support, quick wins, adresează temeri", "Ignori", "Doar amenințări"],
      de: ["Aufzwingen", "Vorteile kommunizieren, Nutzer einbeziehen, adäquates Training, Support, Quick Wins, Ängste adressieren", "Ignorieren", "Nur Drohungen"],
      en: ["Impose", "Communicate benefits, involve users, adequate training, support, quick wins, address fears", "Ignore", "Only threats"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Change management: explică 'de ce', implică-i în design, training suficient, suport disponibil, arată succese rapide, răspunde la îngrijorări.",
      de: "Change Management: erkläre 'warum', beziehe sie ins Design ein, ausreichendes Training, verfügbarer Support, schnelle Erfolge zeigen, Bedenken ansprechen.",
      en: "Change management: explain 'why', involve them in design, sufficient training, available support, show quick wins, address concerns."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Platform economy în transport: ride-sharing, freight matching. Impact și adaptare?",
      de: "Platform Economy im Transport: Ride-Sharing, Freight Matching. Auswirkung und Anpassung?",
      en: "Platform economy in transport: ride-sharing, freight matching. Impact and adaptation?"
    },
    options: {
      ro: ["Nu afectează", "Dezintermediare parțială, noi modele business, necesită valoare adăugată, specializare, relații profunde", "Doar pentru pasageri", "Doar trend"],
      de: ["Keine Auswirkung", "Teilweise Disintermediation, neue Geschäftsmodelle, erfordert Mehrwert, Spezialisierung, tiefe Beziehungen", "Nur für Passagiere", "Nur Trend"],
      en: ["No impact", "Partial disintermediation, new business models, requires added value, specialization, deep relationships", "Only for passengers", "Only trend"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Impact platforme: spot freight digitizat, presiune pe marje la commodities - răspuns: specializare, servicii value-add, relații long-term, propriul tech stack.",
      de: "Plattform-Auswirkung: digitalisierte Spot-Fracht, Margendruck bei Commodities - Antwort: Spezialisierung, Value-Add-Dienste, Langzeitbeziehungen, eigener Tech-Stack.",
      en: "Platform impact: digitized spot freight, margin pressure on commodities - response: specialization, value-add services, long-term relationships, own tech stack."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este ERP și cum se conectează cu TMS?",
      de: "Was ist ERP und wie verbindet es sich mit TMS?",
      en: "What is ERP and how does it connect with TMS?"
    },
    options: {
      ro: ["Alt nume pentru TMS", "Enterprise Resource Planning - sisteme ca SAP/Oracle, TMS-ul se integrează pentru date financiare și comenzi", "Doar contabilitate", "Doar HR"],
      de: ["Anderer Name für TMS", "Enterprise Resource Planning - Systeme wie SAP/Oracle, TMS integriert sich für Finanz- und Auftragsdaten", "Nur Buchhaltung", "Nur HR"],
      en: ["Another name for TMS", "Enterprise Resource Planning - systems like SAP/Oracle, TMS integrates for financial and order data", "Only accounting", "Only HR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ERP-TMS: comenzile vin din ERP client către TMS, costurile transport revin în ERP pentru contabilitate. Integrare elimină duplicare date.",
      de: "ERP-TMS: Aufträge kommen vom Kunden-ERP zum TMS, Transportkosten gehen zurück ins ERP für Buchhaltung. Integration eliminiert Datenduplizierung.",
      en: "ERP-TMS: orders come from client ERP to TMS, transport costs go back to ERP for accounting. Integration eliminates data duplication."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum planifici upgrade-uri tehnologice fără a perturba operațiunile?",
      de: "Wie planst du Technologie-Upgrades ohne den Betrieb zu stören?",
      en: "How do you plan technology upgrades without disrupting operations?"
    },
    options: {
      ro: ["Upgrade în producție direct", "Testare în staging, rollout în weekend, rollback plan, comunicare, monitorizare intensivă post-upgrade", "Doar noapte", "Nu faci upgrade"],
      de: ["Upgrade direkt in Produktion", "Test im Staging, Rollout am Wochenende, Rollback-Plan, Kommunikation, intensive Überwachung nach Upgrade", "Nur nachts", "Kein Upgrade"],
      en: ["Upgrade directly in production", "Test in staging, rollout on weekend, rollback plan, communication, intensive monitoring post-upgrade", "Only at night", "Don't upgrade"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Upgrade sigur: test complet în mediu staging, rollout în low-traffic window, plan de rollback testat, comunicare către utilizatori, monitorizare 24-48h.",
      de: "Sicheres Upgrade: vollständiger Test in Staging-Umgebung, Rollout in Low-Traffic-Zeitfenster, getesteter Rollback-Plan, Nutzerkommunikation, Monitoring 24-48h.",
      en: "Safe upgrade: full test in staging environment, rollout in low-traffic window, tested rollback plan, user communication, 24-48h monitoring."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Building vs. buying technology. Când dezvolți intern vs. cumperi soluție existentă?",
      de: "Build vs. Buy Technologie. Wann intern entwickeln vs. bestehende Lösung kaufen?",
      en: "Building vs. buying technology. When develop internally vs. buy existing solution?"
    },
    options: {
      ro: ["Mereu build", "Build pentru diferențiere competitivă, buy pentru commodities; evaluare: cost, timp, mentenanță, risc, competențe", "Mereu buy", "Nu contează"],
      de: ["Immer Build", "Build für Wettbewerbsdifferenzierung, Buy für Commodities; Bewertung: Kosten, Zeit, Wartung, Risiko, Kompetenzen", "Immer Buy", "Egal"],
      en: ["Always build", "Build for competitive differentiation, buy for commodities; evaluate: cost, time, maintenance, risk, competencies", "Always buy", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Build vs. Buy: construiești ce te diferențiază competitiv, cumperi commodity (TMS standard). Evaluează: TCO 5 ani, time-to-market, risc, competențe interne.",
      de: "Build vs. Buy: baue was dich kompetitiv differenziert, kaufe Commodity (Standard-TMS). Bewerte: 5-Jahres-TCO, Time-to-Market, Risiko, interne Kompetenzen.",
      en: "Build vs. Buy: build what differentiates you competitively, buy commodity (standard TMS). Evaluate: 5-year TCO, time-to-market, risk, internal competencies."
    }
  }
];
