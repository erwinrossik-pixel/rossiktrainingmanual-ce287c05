import { TranslatedQuizQuestion } from '../../quizTranslations';

export const translogicaComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un TMS (Transport Management System)?",
      de: "Was ist ein TMS (Transport Management System)?",
      en: "What is a TMS (Transport Management System)?"
    },
    options: {
      ro: ["Software de contabilitate", "Sistem integrat pentru planificare, execuție și optimizare transport", "Doar GPS tracking", "Email client"],
      de: ["Buchhaltungssoftware", "Integriertes System für Transportplanung, -ausführung und -optimierung", "Nur GPS-Tracking", "E-Mail-Client"],
      en: ["Accounting software", "Integrated system for transport planning, execution and optimization", "Only GPS tracking", "Email client"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TMS: planificare curse, alocare resurse, tracking, facturare, raportare - totul într-un singur sistem integrat.",
      de: "TMS: Fahrtenplanung, Ressourcenzuweisung, Tracking, Fakturierung, Reporting - alles in einem integrierten System.",
      en: "TMS: trip planning, resource allocation, tracking, invoicing, reporting - all in one integrated system."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt modulele principale ale unui TMS?",
      de: "Was sind die Hauptmodule eines TMS?",
      en: "What are the main modules of a TMS?"
    },
    options: {
      ro: ["Doar facturare", "Comenzi, planificare, tracking, facturare, raportare, integrări", "Doar email", "Doar calendar"],
      de: ["Nur Fakturierung", "Aufträge, Planung, Tracking, Fakturierung, Reporting, Integrationen", "Nur E-Mail", "Nur Kalender"],
      en: ["Only invoicing", "Orders, planning, tracking, invoicing, reporting, integrations", "Only email", "Only calendar"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Module TMS: gestiune comenzi, planificare/optimizare, GPS tracking, documente, facturare, KPI/rapoarte, API pentru integrări.",
      de: "TMS-Module: Auftragsverwaltung, Planung/Optimierung, GPS-Tracking, Dokumente, Fakturierung, KPI/Reports, API für Integrationen.",
      en: "TMS modules: order management, planning/optimization, GPS tracking, documents, invoicing, KPI/reports, API for integrations."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum optimizează un TMS rutele de transport?",
      de: "Wie optimiert ein TMS Transportrouten?",
      en: "How does a TMS optimize transport routes?"
    },
    options: {
      ro: ["Manual de dispecer", "Algoritmi care consideră distanță, timp, costuri, restricții, capacitate", "Doar hartă simplă", "Doar GPS"],
      de: ["Manuell vom Disponenten", "Algorithmen die Entfernung, Zeit, Kosten, Einschränkungen, Kapazität berücksichtigen", "Nur einfache Karte", "Nur GPS"],
      en: ["Manually by dispatcher", "Algorithms considering distance, time, costs, restrictions, capacity", "Only simple map", "Only GPS"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Optimizare: algoritmi avansați pentru cea mai bună combinație rute/vehicule considerând toate constrângerile și costurile.",
      de: "Optimierung: fortgeschrittene Algorithmen für beste Routen-/Fahrzeugkombination unter Berücksichtigung aller Einschränkungen und Kosten.",
      en: "Optimization: advanced algorithms for best route/vehicle combination considering all constraints and costs."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare TMS pentru companie cu 50 camioane. Faze și considerații cheie?",
      de: "TMS-Implementierung für Unternehmen mit 50 LKW. Phasen und Schlüsselüberlegungen?",
      en: "TMS implementation for company with 50 trucks. Phases and key considerations?"
    },
    options: {
      ro: ["Doar instalare și gata", "Analiză cerințe, selectare vendor, configurare, migrare date, training, go-live etapizat, suport", "Doar cumperi licență", "Doar IT se ocupă"],
      de: ["Nur installieren und fertig", "Anforderungsanalyse, Vendor-Auswahl, Konfiguration, Datenmigration, Training, stufenweises Go-live, Support", "Nur Lizenz kaufen", "Nur IT kümmert sich"],
      en: ["Just install and done", "Requirements analysis, vendor selection, configuration, data migration, training, phased go-live, support", "Just buy license", "Only IT handles it"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Implementare: 6-12 luni, faze clare, change management, training extins, pilot pe o echipă, apoi rollout complet.",
      de: "Implementierung: 6-12 Monate, klare Phasen, Change Management, umfangreiches Training, Pilot mit einem Team, dann vollständiges Rollout.",
      en: "Implementation: 6-12 months, clear phases, change management, extensive training, pilot with one team, then full rollout."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este EDI în contextul transportului?",
      de: "Was ist EDI im Transportkontext?",
      en: "What is EDI in transport context?"
    },
    options: {
      ro: ["Email digital", "Electronic Data Interchange - schimb automat de date între sisteme", "Driver ID", "Document intern"],
      de: ["Digitale E-Mail", "Electronic Data Interchange - automatischer Datenaustausch zwischen Systemen", "Fahrer-ID", "Internes Dokument"],
      en: ["Digital email", "Electronic Data Interchange - automatic data exchange between systems", "Driver ID", "Internal document"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EDI: schimb automat comenzi, confirmări, status updates între TMS-ul tău și sistemele clienților/transportatorilor.",
      de: "EDI: automatischer Austausch von Aufträgen, Bestätigungen, Status-Updates zwischen deinem TMS und Kunden-/Transportunternehmersystemen.",
      en: "EDI: automatic exchange of orders, confirmations, status updates between your TMS and client/carrier systems."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum integrezi TMS-ul cu sistemele clienților?",
      de: "Wie integrierst du das TMS mit Kundensystemen?",
      en: "How do you integrate TMS with client systems?"
    },
    options: {
      ro: ["Doar email manual", "API, EDI, webhooks, portal client, file exchange automatizat", "Doar telefon", "Nu se integrează"],
      de: ["Nur manuelle E-Mail", "API, EDI, Webhooks, Kundenportal, automatisierter Dateiaustausch", "Nur Telefon", "Keine Integration"],
      en: ["Only manual email", "API, EDI, webhooks, client portal, automated file exchange", "Only phone", "No integration"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrări: API REST pentru real-time, EDI pentru comenzi/facturi, portal self-service pentru vizibilitate, FTP pentru batch files.",
      de: "Integrationen: REST API für Echtzeit, EDI für Aufträge/Rechnungen, Self-Service-Portal für Sichtbarkeit, FTP für Batch-Dateien.",
      en: "Integrations: REST API for real-time, EDI for orders/invoices, self-service portal for visibility, FTP for batch files."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Migrare de la Excel/manual la TMS. Provocări și soluții?",
      de: "Migration von Excel/manuell zu TMS. Herausforderungen und Lösungen?",
      en: "Migration from Excel/manual to TMS. Challenges and solutions?"
    },
    options: {
      ro: ["Fără provocări", "Rezistența la schimbare, curățare date, training, period paralel, support intensiv, quick wins", "Doar copiezi datele", "Doar IT migrează"],
      de: ["Keine Herausforderungen", "Änderungswiderstand, Datenbereinigung, Training, Parallelbetrieb, intensiver Support, Quick Wins", "Nur Daten kopieren", "Nur IT migriert"],
      en: ["No challenges", "Change resistance, data cleanup, training, parallel period, intensive support, quick wins", "Just copy data", "Only IT migrates"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tranziție: change management (de ce?), date curate, training hands-on, 1-2 luni paralel, champion users, celebrare succese mici.",
      de: "Übergang: Change Management (warum?), saubere Daten, praktisches Training, 1-2 Monate parallel, Champion-User, kleine Erfolge feiern.",
      en: "Transition: change management (why?), clean data, hands-on training, 1-2 months parallel, champion users, celebrate small wins."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un portal client în context TMS?",
      de: "Was ist ein Kundenportal im TMS-Kontext?",
      en: "What is a client portal in TMS context?"
    },
    options: {
      ro: ["Ușă de intrare", "Interfață web unde clienții văd comenzi, tracking, documente, rapoarte", "Doar login", "Email automat"],
      de: ["Eingangstür", "Web-Schnittstelle wo Kunden Aufträge, Tracking, Dokumente, Reports sehen", "Nur Login", "Automatische E-Mail"],
      en: ["Entrance door", "Web interface where clients see orders, tracking, documents, reports", "Only login", "Automatic email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Portal client: self-service pentru plasare comenzi, vizibilitate status, download POD/facturi, rapoarte - reduce apeluri la customer service.",
      de: "Kundenportal: Self-Service für Auftragserteilung, Statuseinblick, POD-/Rechnungsdownload, Reports - reduziert Anrufe beim Kundendienst.",
      en: "Client portal: self-service for placing orders, status visibility, POD/invoice download, reports - reduces calls to customer service."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum selectezi un TMS potrivit pentru compania ta?",
      de: "Wie wählst du ein passendes TMS für dein Unternehmen aus?",
      en: "How do you select a suitable TMS for your company?"
    },
    options: {
      ro: ["Cel mai ieftin", "Evaluare cerințe, demo-uri, referințe, scalabilitate, suport, TCO, fit cu procesele", "Primul găsit", "Doar recomandări"],
      de: ["Das billigste", "Anforderungsbewertung, Demos, Referenzen, Skalierbarkeit, Support, TCO, Prozess-Fit", "Das erste gefundene", "Nur Empfehlungen"],
      en: ["The cheapest", "Requirements evaluation, demos, references, scalability, support, TCO, process fit", "First one found", "Only recommendations"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Selecție: definește cerințe must-have, shortlist 3-5 vendori, demo cu scenarii reale, referințe din industrie, calcul TCO 5 ani.",
      de: "Auswahl: Must-have-Anforderungen definieren, 3-5 Vendoren shortlisten, Demo mit realen Szenarien, Branchenreferenzen, TCO-Berechnung 5 Jahre.",
      en: "Selection: define must-have requirements, shortlist 3-5 vendors, demo with real scenarios, industry references, 5-year TCO calculation."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "ROI al implementării TMS: cum calculezi și ce beneficii măsori?",
      de: "ROI der TMS-Implementierung: wie berechnest du und welche Vorteile misst du?",
      en: "ROI of TMS implementation: how do you calculate and what benefits do you measure?"
    },
    options: {
      ro: ["Nu se poate calcula", "Economii timp, reducere erori, optimizare rute, vizibilitate, productivitate vs. cost licențe și implementare", "Doar costuri", "Doar beneficii"],
      de: ["Nicht berechenbar", "Zeitersparnis, Fehlerreduzierung, Routenoptimierung, Sichtbarkeit, Produktivität vs. Lizenz- und Implementierungskosten", "Nur Kosten", "Nur Vorteile"],
      en: ["Cannot calculate", "Time savings, error reduction, route optimization, visibility, productivity vs. license and implementation cost", "Only costs", "Only benefits"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ROI: (beneficii anuale - costuri anuale) / investiție. Beneficii: ore dispecer salvate, erori evitate, km reduși, clienți reținuți.",
      de: "ROI: (jährliche Vorteile - jährliche Kosten) / Investition. Vorteile: gesparte Disponenten-Stunden, vermiedene Fehler, reduzierte km, gehaltene Kunden.",
      en: "ROI: (annual benefits - annual costs) / investment. Benefits: dispatcher hours saved, errors avoided, km reduced, clients retained."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce rapoarte standard oferă un TMS?",
      de: "Welche Standardberichte bietet ein TMS?",
      en: "What standard reports does a TMS offer?"
    },
    options: {
      ro: ["Doar facturi", "Performanță operațională, financiară, client, transportator, KPI-uri, productivitate", "Doar email-uri", "Doar comenzi"],
      de: ["Nur Rechnungen", "Operative, finanzielle, Kunden-, Transportunternehmer-Performance, KPIs, Produktivität", "Nur E-Mails", "Nur Aufträge"],
      en: ["Only invoices", "Operational, financial, client, carrier performance, KPIs, productivity", "Only emails", "Only orders"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rapoarte: volum/venit per client/rută, OTIF, marje, utilizare flotă, productivitate dispeceri, trending, comparații perioade.",
      de: "Reports: Volumen/Umsatz pro Kunde/Route, OTIF, Margen, Flottenauslastung, Disponenten-Produktivität, Trending, Periodenvergleiche.",
      en: "Reports: volume/revenue per client/route, OTIF, margins, fleet utilization, dispatcher productivity, trending, period comparisons."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum asiguri adoptarea TMS de către echipă?",
      de: "Wie sicherst du die TMS-Adoption durch das Team?",
      en: "How do you ensure TMS adoption by the team?"
    },
    options: {
      ro: ["Impui și gata", "Training, suport, feedback loop, quick wins vizibile, champion users, management commitment", "Doar manual", "Doar amenințări"],
      de: ["Aufzwingen und fertig", "Training, Support, Feedback-Schleife, sichtbare Quick Wins, Champion-User, Management-Commitment", "Nur Handbuch", "Nur Drohungen"],
      en: ["Impose and done", "Training, support, feedback loop, visible quick wins, champion users, management commitment", "Only manual", "Only threats"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Adopție: implică echipa din start, training practic, suport disponibil, arată beneficiile concrete, recunoaște early adopters.",
      de: "Adoption: Team von Anfang einbeziehen, praktisches Training, verfügbarer Support, konkrete Vorteile zeigen, Early Adopter anerkennen.",
      en: "Adoption: involve team from start, practical training, available support, show concrete benefits, recognize early adopters."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Arhitectură TMS: cloud vs. on-premise. Criterii de decizie?",
      de: "TMS-Architektur: Cloud vs. On-Premise. Entscheidungskriterien?",
      en: "TMS architecture: cloud vs. on-premise. Decision criteria?"
    },
    options: {
      ro: ["Mereu cloud", "Securitate, cost, scalabilitate, integrări, control, compliance, resurse IT interne", "Mereu on-premise", "Nu contează"],
      de: ["Immer Cloud", "Sicherheit, Kosten, Skalierbarkeit, Integrationen, Kontrolle, Compliance, interne IT-Ressourcen", "Immer On-Premise", "Egal"],
      en: ["Always cloud", "Security, cost, scalability, integrations, control, compliance, internal IT resources", "Always on-premise", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cloud: flexibil, update automat, capex mic. On-premise: control total, date locale. Trend: cloud SaaS pentru majoritatea.",
      de: "Cloud: flexibel, automatisches Update, geringes Capex. On-Premise: totale Kontrolle, lokale Daten. Trend: Cloud SaaS für die meisten.",
      en: "Cloud: flexible, auto-update, low capex. On-premise: total control, local data. Trend: cloud SaaS for most."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este GPS tracking în TMS?",
      de: "Was ist GPS-Tracking im TMS?",
      en: "What is GPS tracking in TMS?"
    },
    options: {
      ro: ["Doar hartă", "Urmărire în timp real a poziției vehiculelor integrată în planificare și comunicare", "Doar navigație", "Doar pentru șofer"],
      de: ["Nur Karte", "Echtzeit-Fahrzeugpositionsverfolgung integriert in Planung und Kommunikation", "Nur Navigation", "Nur für Fahrer"],
      en: ["Only map", "Real-time vehicle position tracking integrated in planning and communication", "Only navigation", "Only for driver"]
    },
    correctIndex: 1,
    explanation: {
      ro: "GPS în TMS: poziție live, ETA automat, alertă devieri, istoric trasee, date pentru facturare km, comunicare client automată.",
      de: "GPS im TMS: Live-Position, automatische ETA, Abweichungsalarm, Routenhistorie, Daten für km-Fakturierung, automatische Kundenkommunikation.",
      en: "GPS in TMS: live position, automatic ETA, deviation alert, route history, data for km billing, automatic client communication."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum folosești datele TMS pentru îmbunătățire continuă?",
      de: "Wie nutzt du TMS-Daten für kontinuierliche Verbesserung?",
      en: "How do you use TMS data for continuous improvement?"
    },
    options: {
      ro: ["Nu le folosești", "Analiză trenduri, identificare ineficiențe, benchmark intern, acțiuni corective, monitorizare rezultate", "Doar stocare", "Doar rapoarte lunare"],
      de: ["Nicht nutzen", "Trendanalyse, Ineffizienzen identifizieren, internes Benchmarking, Korrekturmaßnahmen, Ergebnismonitoring", "Nur Speicherung", "Nur Monatsberichte"],
      en: ["Don't use them", "Trend analysis, identify inefficiencies, internal benchmark, corrective actions, results monitoring", "Only storage", "Only monthly reports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Date pentru îmbunătățire: analizezi patternuri, identifici unde pierzi bani/timp, testezi schimbări, măsori impact, iterate.",
      de: "Daten zur Verbesserung: Muster analysieren, identifizieren wo Geld/Zeit verloren geht, Änderungen testen, Auswirkungen messen, iterieren.",
      en: "Data for improvement: analyze patterns, identify where losing money/time, test changes, measure impact, iterate."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Integrare TMS cu telematics avansat. Funcționalități și beneficii?",
      de: "TMS-Integration mit erweiterter Telematik. Funktionen und Vorteile?",
      en: "TMS integration with advanced telematics. Features and benefits?"
    },
    options: {
      ro: ["Doar GPS", "Consum combustibil, stil condus, temperatură, ore motor, predicții mentenanță, optimizare costuri", "Doar tracking", "Nu se integrează"],
      de: ["Nur GPS", "Kraftstoffverbrauch, Fahrstil, Temperatur, Motorstunden, Wartungsvorhersagen, Kostenoptimierung", "Nur Tracking", "Keine Integration"],
      en: ["Only GPS", "Fuel consumption, driving style, temperature, engine hours, maintenance predictions, cost optimization", "Only tracking", "No integration"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Telematics+TMS: date consum real per cursă, scoring șofer, alertă temperatură reefer, predicție service, calcul cost real, reducere claims.",
      de: "Telematik+TMS: echte Verbrauchsdaten pro Fahrt, Fahrerbewertung, Reefer-Temperaturalarm, Service-Prognose, echte Kostenberechnung, Claim-Reduzierung.",
      en: "Telematics+TMS: real consumption data per trip, driver scoring, reefer temperature alert, service prediction, real cost calculation, claims reduction."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este workflow automation în TMS?",
      de: "Was ist Workflow-Automatisierung im TMS?",
      en: "What is workflow automation in TMS?"
    },
    options: {
      ro: ["Lucru manual", "Reguli automate care execută acțiuni bazate pe condiții (ex: trimite alert când întârziere)", "Doar email", "Doar facturare"],
      de: ["Manuelle Arbeit", "Automatische Regeln die Aktionen basierend auf Bedingungen ausführen (z.B. Alert bei Verzögerung senden)", "Nur E-Mail", "Nur Fakturierung"],
      en: ["Manual work", "Automatic rules that execute actions based on conditions (e.g., send alert when delay)", "Only email", "Only invoicing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Automatizare: dacă întârziere >30min → alertă client, dacă POD primit → generează factură, dacă ETA schimbat → notificare.",
      de: "Automatisierung: wenn Verzögerung >30min → Kundenalarm, wenn POD erhalten → Rechnung generieren, wenn ETA geändert → Benachrichtigung.",
      en: "Automation: if delay >30min → client alert, if POD received → generate invoice, if ETA changed → notification."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Securitatea datelor în TMS cloud. Ce verifici?",
      de: "Datensicherheit im Cloud-TMS. Was prüfst du?",
      en: "Data security in cloud TMS. What do you check?"
    },
    options: {
      ro: ["Nu verifici", "Criptare, backup, acces control, GDPR compliance, certificări (ISO 27001), SLA uptime", "Doar parolă", "Doar contract"],
      de: ["Nicht prüfen", "Verschlüsselung, Backup, Zugriffskontrolle, DSGVO-Compliance, Zertifizierungen (ISO 27001), SLA Uptime", "Nur Passwort", "Nur Vertrag"],
      en: ["Don't check", "Encryption, backup, access control, GDPR compliance, certifications (ISO 27001), SLA uptime", "Only password", "Only contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Securitate cloud: criptare în tranzit și la stocare, backup regulat, role-based access, GDPR, ISO 27001, SLA 99.9% uptime.",
      de: "Cloud-Sicherheit: Verschlüsselung bei Übertragung und Speicherung, regelmäßiges Backup, rollenbasierter Zugang, DSGVO, ISO 27001, SLA 99,9% Uptime.",
      en: "Cloud security: encryption in transit and at rest, regular backup, role-based access, GDPR, ISO 27001, SLA 99.9% uptime."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "AI și Machine Learning în TMS. Aplicații practice?",
      de: "AI und Machine Learning im TMS. Praktische Anwendungen?",
      en: "AI and Machine Learning in TMS. Practical applications?"
    },
    options: {
      ro: ["Nu există", "Predicție întârzieri, optimizare dinamică rute, forecasting volum, pricing inteligent, detectare anomalii", "Doar chatbot", "Doar vizual"],
      de: ["Gibt es nicht", "Verzögerungsvorhersage, dynamische Routenoptimierung, Volumenprognose, intelligentes Pricing, Anomalie-Erkennung", "Nur Chatbot", "Nur visuell"],
      en: ["Doesn't exist", "Delay prediction, dynamic route optimization, volume forecasting, intelligent pricing, anomaly detection", "Only chatbot", "Only visual"]
    },
    correctIndex: 1,
    explanation: {
      ro: "AI în TMS: predicție ETA bazată pe istoric/trafic/meteo, sugestii pricing dinamic, forecast volum sezonier, alertă comportament anormal.",
      de: "AI im TMS: ETA-Vorhersage basierend auf Historie/Verkehr/Wetter, dynamische Preisvorschläge, saisonale Volumenprognose, Alarmierung bei abnormalem Verhalten.",
      en: "AI in TMS: ETA prediction based on history/traffic/weather, dynamic pricing suggestions, seasonal volume forecast, abnormal behavior alerting."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este mobile app pentru șoferi în contextul TMS?",
      de: "Was ist eine Fahrer-Mobile-App im TMS-Kontext?",
      en: "What is a driver mobile app in TMS context?"
    },
    options: {
      ro: ["Joc pe telefon", "Aplicație pentru primire comenzi, navigație, confirmare status, scanare documente", "Doar telefon", "Doar GPS"],
      de: ["Handyspiel", "App für Auftragsempfang, Navigation, Statusbestätigung, Dokumentenscan", "Nur Telefon", "Nur GPS"],
      en: ["Phone game", "App for receiving orders, navigation, status confirmation, document scanning", "Only phone", "Only GPS"]
    },
    correctIndex: 1,
    explanation: {
      ro: "App șofer: primește comenzi, navighează, confirmă încărcare/descărcare, fotografiază POD/CMR, comunică cu dispecer.",
      de: "Fahrer-App: Aufträge empfangen, navigieren, Beladung/Entladung bestätigen, POD/CMR fotografieren, mit Disponent kommunizieren.",
      en: "Driver app: receive orders, navigate, confirm loading/unloading, photograph POD/CMR, communicate with dispatcher."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi training-ul continuu pentru TMS?",
      de: "Wie managst du kontinuierliches TMS-Training?",
      en: "How do you manage continuous TMS training?"
    },
    options: {
      ro: ["O dată la implementare", "Onboarding, refresh periodic, update training la noi funcții, documentation, super users", "Doar manual PDF", "Nu e nevoie"],
      de: ["Nur bei Implementierung", "Onboarding, periodische Auffrischung, Update-Training bei neuen Funktionen, Dokumentation, Super-User", "Nur PDF-Handbuch", "Nicht nötig"],
      en: ["Once at implementation", "Onboarding, periodic refresh, update training for new features, documentation, super users", "Only PDF manual", "Not needed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Training continuu: onboarding noi angajați, refresh trimestrial, training la update-uri, knowledge base internă, super users disponibili.",
      de: "Kontinuierliches Training: Onboarding neuer Mitarbeiter, vierteljährliche Auffrischung, Training bei Updates, interne Wissensdatenbank, verfügbare Super-User.",
      en: "Continuous training: onboarding new employees, quarterly refresh, training at updates, internal knowledge base, available super users."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Evaluare și upgrade TMS existent. Când și cum decizi?",
      de: "Bewertung und Upgrade bestehendes TMS. Wann und wie entscheidest du?",
      en: "Evaluate and upgrade existing TMS. When and how do you decide?"
    },
    options: {
      ro: ["Niciodată", "Periodic (anual): funcționalități vs. nevoi, cost upgrade vs. schimbare, vendor roadmap, feedback utilizatori", "Doar dacă se strică", "Doar management decide"],
      de: ["Nie", "Periodisch (jährlich): Funktionen vs. Bedürfnisse, Upgrade- vs. Wechselkosten, Vendor-Roadmap, Nutzerfeedback", "Nur wenn kaputt", "Nur Management entscheidet"],
      en: ["Never", "Periodically (yearly): features vs. needs, upgrade vs. change cost, vendor roadmap, user feedback", "Only if broken", "Only management decides"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Evaluare anuală: TMS-ul actual acoperă nevoile? ce lipsește? cost upgrade vs. schimbare? ce planuri are vendor-ul? satisfacție utilizatori?",
      de: "Jährliche Bewertung: deckt aktuelles TMS die Bedürfnisse? was fehlt? Upgrade- vs. Wechselkosten? was plant der Vendor? Nutzerzufriedenheit?",
      en: "Annual evaluation: does current TMS cover needs? what's missing? upgrade vs. change cost? what are vendor's plans? user satisfaction?"
    }
  }
];
