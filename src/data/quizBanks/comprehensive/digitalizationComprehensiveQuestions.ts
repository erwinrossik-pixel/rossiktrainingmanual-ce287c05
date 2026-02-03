import { TranslatedQuizQuestion } from '../../quizTranslations';

export const digitalizationComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă digitalizare în context logistic?",
      de: "Was bedeutet Digitalisierung im logistischen Kontext?",
      en: "What does digitalization mean in logistics context?"
    },
    options: {
      ro: ["Doar să ai computer", "Transformarea proceselor din hârtie/manual în digital pentru eficiență și date", "Doar email", "Doar website"],
      de: ["Nur Computer haben", "Umwandlung von Papier-/manuellen Prozessen in digitale für Effizienz und Daten", "Nur E-Mail", "Nur Website"],
      en: ["Only having computer", "Transforming paper/manual processes into digital for efficiency and data", "Only email", "Only website"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Digitalizare: CMR pe hârtie → eCMR, comenzi telefon → portal, facturi hârtie → e-facturi. Eficiență, viteză, trasabilitate, analiză date.",
      de: "Digitalisierung: CMR auf Papier → eCMR, Telefonaufträge → Portal, Papierrechnungen → E-Rechnungen. Effizienz, Geschwindigkeit, Nachverfolgbarkeit, Datenanalyse.",
      en: "Digitalization: paper CMR → eCMR, phone orders → portal, paper invoices → e-invoices. Efficiency, speed, traceability, data analysis."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este eCMR?",
      de: "Was ist eCMR?",
      en: "What is eCMR?"
    },
    options: {
      ro: ["Email cu CMR atașat", "Scrisoare de transport electronică cu valoare juridică egală cu cea pe hârtie", "Doar PDF", "Copie scanată"],
      de: ["E-Mail mit angehängtem CMR", "Elektronischer Frachtbrief mit gleicher Rechtsgültigkeit wie Papier", "Nur PDF", "Gescannte Kopie"],
      en: ["Email with attached CMR", "Electronic consignment note with legal value equal to paper one", "Only PDF", "Scanned copy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "eCMR: Protocol adițional la Convenția CMR (2008). Document digital, semnătură electronică, recunoscut legal în țările ratificante (RO, ES, FR, NL, etc.).",
      de: "eCMR: Zusatzprotokoll zur CMR-Konvention (2008). Digitales Dokument, elektronische Unterschrift, legal anerkannt in ratifizierenden Ländern (RO, ES, FR, NL, etc.).",
      en: "eCMR: Additional protocol to CMR Convention (2008). Digital document, electronic signature, legally recognized in ratifying countries (RO, ES, FR, NL, etc.)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum implementezi un proiect de paper-to-digital în departament?",
      de: "Wie implementierst du ein Paper-to-Digital Projekt in der Abteilung?",
      en: "How do you implement a paper-to-digital project in department?"
    },
    options: {
      ro: ["Elimini hârtia imediat", "Audit procese, prioritizare, soluție, pilot, training, rollout gradual, măsurare beneficii", "Doar scaner", "Doar PDF"],
      de: ["Papier sofort eliminieren", "Prozessaudit, Priorisierung, Lösung, Pilot, Training, schrittweises Rollout, Nutzen messen", "Nur Scanner", "Nur PDF"],
      en: ["Eliminate paper immediately", "Process audit, prioritization, solution, pilot, training, gradual rollout, measure benefits", "Only scanner", "Only PDF"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Proces: mapează toate documentele pe hârtie, prioritizează (volum, valoare), alege soluție, pilot pe un flux, training, extinde, măsoară economii.",
      de: "Prozess: alle Papierdokumente kartieren, priorisieren (Volumen, Wert), Lösung wählen, Pilot auf einem Fluss, Training, erweitern, Einsparungen messen.",
      en: "Process: map all paper documents, prioritize (volume, value), choose solution, pilot on one flow, training, expand, measure savings."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Business case pentru digitalizare completă a procesului de facturare. ROI și beneficii?",
      de: "Business Case für vollständige Digitalisierung des Rechnungsprozesses. ROI und Vorteile?",
      en: "Business case for complete digitalization of invoicing process. ROI and benefits?"
    },
    options: {
      ro: ["Nu merită investiția", "Reducere timp procesare 70%, erori -90%, vizibilitate cash, audit trail, cost hârtie/poștă eliminat", "Doar costuri mai mari", "Doar pentru companii mari"],
      de: ["Investition lohnt nicht", "Verarbeitungszeit -70%, Fehler -90%, Cash-Sichtbarkeit, Audit-Trail, Papier-/Postkosten eliminiert", "Nur höhere Kosten", "Nur für große Unternehmen"],
      en: ["Investment not worth it", "Processing time reduction 70%, errors -90%, cash visibility, audit trail, paper/mail cost eliminated", "Only higher costs", "Only for large companies"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Facturare digitală: 5 minute vs. 30 minute/factură, erori aproape zero, instant delivery, urmărire automată plăți, zero hârtie/timbre.",
      de: "Digitale Fakturierung: 5 Minuten vs. 30 Minuten/Rechnung, fast null Fehler, sofortige Zustellung, automatische Zahlungsverfolgung, kein Papier/Porto.",
      en: "Digital invoicing: 5 minutes vs. 30 minutes/invoice, near-zero errors, instant delivery, automatic payment tracking, zero paper/postage."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este e-POD (electronic Proof of Delivery)?",
      de: "Was ist e-POD (electronic Proof of Delivery)?",
      en: "What is e-POD (electronic Proof of Delivery)?"
    },
    options: {
      ro: ["Email cu confirmare", "Confirmare digitală livrare cu semnătură, timestamp, foto, geolocation", "Doar SMS", "Doar apel"],
      de: ["E-Mail mit Bestätigung", "Digitale Lieferbestätigung mit Unterschrift, Zeitstempel, Foto, Geolocation", "Nur SMS", "Nur Anruf"],
      en: ["Email with confirmation", "Digital delivery confirmation with signature, timestamp, photo, geolocation", "Only SMS", "Only call"]
    },
    correctIndex: 1,
    explanation: {
      ro: "e-POD: semnătură pe tabletă, timestamp GPS, foto marfă, comentarii - instant în TMS, disponibil pentru client, facturare rapidă.",
      de: "e-POD: Unterschrift auf Tablet, GPS-Zeitstempel, Frachtfoto, Kommentare - sofort im TMS, für Kunden verfügbar, schnelle Fakturierung.",
      en: "e-POD: signature on tablet, GPS timestamp, cargo photo, comments - instant in TMS, available to client, fast invoicing."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Provocări și soluții în digitalizarea comunicării cu transportatorii.",
      de: "Herausforderungen und Lösungen bei der Digitalisierung der Transportunternehmer-Kommunikation.",
      en: "Challenges and solutions in digitalizing communication with carriers."
    },
    options: {
      ro: ["Fără provocări", "Nivel tech diferit, rezistență, multiple canale → onboarding, app simplă, multi-channel, incentive", "Doar email", "Nu se poate"],
      de: ["Keine Herausforderungen", "Unterschiedliches Tech-Niveau, Widerstand, multiple Kanäle → Onboarding, einfache App, Multi-Channel, Anreize", "Nur E-Mail", "Nicht möglich"],
      en: ["No challenges", "Different tech level, resistance, multiple channels → onboarding, simple app, multi-channel, incentive", "Only email", "Not possible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Provocări transportatori: nu toți au smartphone, prefer telefonul, sisteme diferite → oferă app ușoară, acceptă și WhatsApp, incentive pentru adopție.",
      de: "Transportunternehmer-Herausforderungen: nicht alle haben Smartphone, bevorzugen Telefon, unterschiedliche Systeme → einfache App anbieten, auch WhatsApp akzeptieren, Adoptionstanreize.",
      en: "Carrier challenges: not all have smartphone, prefer phone, different systems → offer easy app, accept WhatsApp too, incentives for adoption."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Workflow complet digital pentru comandă FTL: de la primire la facturare. Pași și sisteme?",
      de: "Vollständig digitaler Workflow für FTL-Auftrag: von Empfang bis Fakturierung. Schritte und Systeme?",
      en: "Fully digital workflow for FTL order: from receipt to invoicing. Steps and systems?"
    },
    options: {
      ro: ["Nu e posibil complet digital", "Portal/API comandă → TMS planificare → app șofer tracking → e-POD → auto-invoice → e-facturare", "Doar parțial posibil", "Doar email și telefon"],
      de: ["Nicht vollständig digital möglich", "Portal/API Auftrag → TMS Planung → Fahrer-App Tracking → e-POD → Auto-Rechnung → E-Fakturierung", "Nur teilweise möglich", "Nur E-Mail und Telefon"],
      en: ["Not possible fully digital", "Portal/API order → TMS planning → driver app tracking → e-POD → auto-invoice → e-invoicing", "Only partially possible", "Only email and phone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Flow digital: client plasează în portal → automat în TMS → alocare optimizată → app șofer (status live) → e-POD → factură automată → e-mail/API către ERP client.",
      de: "Digitaler Flow: Kunde platziert im Portal → automatisch im TMS → optimierte Zuweisung → Fahrer-App (Live-Status) → e-POD → automatische Rechnung → E-Mail/API zum Kunden-ERP.",
      en: "Digital flow: client places in portal → automatic in TMS → optimized allocation → driver app (live status) → e-POD → automatic invoice → email/API to client ERP."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce sunt e-Documentsele în transport internațional?",
      de: "Was sind E-Dokumente im internationalen Transport?",
      en: "What are e-Documents in international transport?"
    },
    options: {
      ro: ["PDF-uri trimise pe email", "Documente electronice cu valoare juridică: eCMR, e-facturi, e-vamă, certificări digitale", "Doar fax", "Doar copii"],
      de: ["Per E-Mail gesendete PDFs", "Elektronische Dokumente mit rechtlichem Wert: eCMR, E-Rechnungen, E-Zoll, digitale Zertifikate", "Nur Fax", "Nur Kopien"],
      en: ["PDFs sent by email", "Electronic documents with legal value: eCMR, e-invoices, e-customs, digital certifications", "Only fax", "Only copies"]
    },
    correctIndex: 1,
    explanation: {
      ro: "e-Documents: eCMR (legal), e-facturi (obligatorii în multe țări), declarații vamale electronice, certificate digitale. Valoare juridică completă.",
      de: "E-Dokumente: eCMR (legal), E-Rechnungen (in vielen Ländern obligatorisch), elektronische Zollerklärungen, digitale Zertifikate. Voller rechtlicher Wert.",
      en: "e-Documents: eCMR (legal), e-invoices (mandatory in many countries), electronic customs declarations, digital certificates. Full legal value."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum digitalizezi procesul de claims și daune?",
      de: "Wie digitalisierst du den Claims- und Schadensprozess?",
      en: "How do you digitalize the claims and damages process?"
    },
    options: {
      ro: ["Doar email și Excel", "Portal claims, upload foto/documente, workflow automatizat, tracking status, raportare", "Nu se poate", "Doar hârtie"],
      de: ["Nur E-Mail und Excel", "Claims-Portal, Foto-/Dokumenten-Upload, automatisierter Workflow, Statustracking, Reporting", "Nicht möglich", "Nur Papier"],
      en: ["Only email and Excel", "Claims portal, photo/document upload, automated workflow, status tracking, reporting", "Not possible", "Only paper"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Claims digital: deschidere online, upload dovezi (foto, documente), workflow aprobare, comunicare automată cu asigurator, status tracking, analytics.",
      de: "Digitale Claims: Online-Eröffnung, Nachweise hochladen (Fotos, Dokumente), Genehmigungsworkflow, automatische Versichererkommunikation, Statustracking, Analytics.",
      en: "Digital claims: online opening, upload evidence (photos, documents), approval workflow, automatic insurer communication, status tracking, analytics."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Arhitectură sistem pentru digitalizare completă a expeditorului de talie medie. Componente și integrări?",
      de: "Systemarchitektur für vollständige Digitalisierung eines mittelgroßen Spediteurs. Komponenten und Integrationen?",
      en: "System architecture for complete digitalization of medium-sized forwarder. Components and integrations?"
    },
    options: {
      ro: ["Doar TMS", "TMS central, telematics, e-doc platform, client portal, carrier app, BI tool, API layer, ERP integration", "Doar email", "Nu e posibil"],
      de: ["Nur TMS", "Zentrales TMS, Telematik, E-Doc-Plattform, Kundenportal, Carrier-App, BI-Tool, API-Layer, ERP-Integration", "Nur E-Mail", "Nicht möglich"],
      en: ["Only TMS", "Central TMS, telematics, e-doc platform, client portal, carrier app, BI tool, API layer, ERP integration", "Only email", "Not possible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Arhitectură: TMS (core), telematics (GPS+senzori), e-docs (eCMR, facturi), portal client, app transportator, BI pentru rapoarte, API pentru toate integrările.",
      de: "Architektur: TMS (Kern), Telematik (GPS+Sensoren), E-Docs (eCMR, Rechnungen), Kundenportal, Transportunternehmer-App, BI für Reports, API für alle Integrationen.",
      en: "Architecture: TMS (core), telematics (GPS+sensors), e-docs (eCMR, invoices), client portal, carrier app, BI for reports, API for all integrations."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce beneficii aduce digitalizarea pentru clienți?",
      de: "Welche Vorteile bringt Digitalisierung für Kunden?",
      en: "What benefits does digitalization bring for clients?"
    },
    options: {
      ro: ["Niciun beneficiu", "Vizibilitate în timp real, self-service, documente instant, comunicare automată, rapoarte", "Doar factură rapidă", "Doar email"],
      de: ["Kein Nutzen", "Echtzeit-Sichtbarkeit, Self-Service, sofortige Dokumente, automatische Kommunikation, Reports", "Nur schnelle Rechnung", "Nur E-Mail"],
      en: ["No benefit", "Real-time visibility, self-service, instant documents, automatic communication, reports", "Only fast invoice", "Only email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru client: știe unde e marfa oricând, plasează comenzi singur, primește POD/facturi instant, rapoarte automate, integrare cu propriul sistem.",
      de: "Für Kunden: weiß jederzeit wo die Ware ist, platziert Aufträge selbst, erhält POD/Rechnungen sofort, automatische Reports, Integration mit eigenem System.",
      en: "For client: knows where cargo is anytime, places orders themselves, receives POD/invoices instantly, automatic reports, integration with own system."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum măsori nivelul de digitalizare al operațiunilor tale?",
      de: "Wie misst du den Digitalisierungsgrad deiner Operationen?",
      en: "How do you measure your operations' digitalization level?"
    },
    options: {
      ro: ["Nu se poate măsura", "% procese digitizate, timp manual vs. automat, documente digitale vs. hârtie, integrări active", "Doar subiectiv", "Doar IT știe"],
      de: ["Nicht messbar", "% digitalisierte Prozesse, manuelle vs. automatische Zeit, digitale vs. Papierdokumente, aktive Integrationen", "Nur subjektiv", "Nur IT weiß"],
      en: ["Cannot be measured", "% digitized processes, manual vs. automatic time, digital vs. paper documents, active integrations", "Only subjective", "Only IT knows"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Metrici digitalizare: % comenzi automate, % documente digitale, minute/transport pentru admin, număr integrări funcționale, adopție portal.",
      de: "Digitalisierungsmetriken: % automatische Aufträge, % digitale Dokumente, Minuten/Transport für Admin, Anzahl funktionierender Integrationen, Portal-Adoption.",
      en: "Digitalization metrics: % automatic orders, % digital documents, minutes/transport for admin, number of working integrations, portal adoption."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Strategie de digitalizare pentru a deveni 'paperless'. Timeline și priorități?",
      de: "Digitalisierungsstrategie um 'paperless' zu werden. Timeline und Prioritäten?",
      en: "Digitalization strategy to become 'paperless'. Timeline and priorities?"
    },
    options: {
      ro: ["Imposibil în logistică", "Prioritizare volum mare (CMR, POD, facturi), soluții validate legal, tranziție graduală, excepții documentate", "Toate odată", "Doar scanare"],
      de: ["Unmöglich in der Logistik", "Priorisierung hoher Volumina (CMR, POD, Rechnungen), legal validierte Lösungen, schrittweiser Übergang, dokumentierte Ausnahmen", "Alles auf einmal", "Nur Scannen"],
      en: ["Impossible in logistics", "Prioritize high volume (CMR, POD, invoices), legally validated solutions, gradual transition, documented exceptions", "Everything at once", "Only scanning"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Paperless: An1 - facturi+POD digital, An2 - eCMR pentru rutele principale, An3 - toate documentele interne. Excepții: anumite țări/clienți care cer hârtie.",
      de: "Paperless: Jahr1 - digitale Rechnungen+POD, Jahr2 - eCMR für Hauptrouten, Jahr3 - alle internen Dokumente. Ausnahmen: bestimmte Länder/Kunden die Papier verlangen.",
      en: "Paperless: Year1 - digital invoices+POD, Year2 - eCMR for main routes, Year3 - all internal documents. Exceptions: certain countries/clients requiring paper."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este automatizarea proceselor în expediție?",
      de: "Was ist Prozessautomatisierung in der Spedition?",
      en: "What is process automation in freight forwarding?"
    },
    options: {
      ro: ["Roboți fizici", "Reguli care execută automat acțiuni: alertă, calcul, document generation, data sync", "Doar email automat", "Doar factură"],
      de: ["Physische Roboter", "Regeln die automatisch Aktionen ausführen: Alarm, Berechnung, Dokumentenerstellung, Datensync", "Nur automatische E-Mail", "Nur Rechnung"],
      en: ["Physical robots", "Rules that automatically execute actions: alert, calculation, document generation, data sync", "Only automatic email", "Only invoice"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Automatizare: primire comandă → generare automată transport în TMS → alertă către transportator → update status → POD primit → factură generată.",
      de: "Automatisierung: Auftragseingang → automatische Transporterstellung im TMS → Alarm an Transportunternehmer → Status-Update → POD erhalten → Rechnung erstellt.",
      en: "Automation: order received → automatic transport creation in TMS → alert to carrier → status update → POD received → invoice generated."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi tranziția de la procese manuale la digitale pentru echipă?",
      de: "Wie managst du den Übergang von manuellen zu digitalen Prozessen für das Team?",
      en: "How do you manage transition from manual to digital processes for team?"
    },
    options: {
      ro: ["Schimbi totul peste noapte", "Training gradual, documentare, suport, perioadă paralelă, feedback, ajustări", "Doar anunți", "Doar manual PDF"],
      de: ["Alles über Nacht ändern", "Schrittweises Training, Dokumentation, Support, Parallelzeit, Feedback, Anpassungen", "Nur ankündigen", "Nur PDF-Handbuch"],
      en: ["Change everything overnight", "Gradual training, documentation, support, parallel period, feedback, adjustments", "Only announce", "Only PDF manual"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tranziție: comunică beneficiile, training hands-on, documentație accesibilă, suport disponibil, 2-4 săptămâni paralel, colectează feedback, ajustează.",
      de: "Übergang: Vorteile kommunizieren, praktisches Training, zugängliche Dokumentation, verfügbarer Support, 2-4 Wochen parallel, Feedback sammeln, anpassen.",
      en: "Transition: communicate benefits, hands-on training, accessible documentation, available support, 2-4 weeks parallel, collect feedback, adjust."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Integrare digitală cu autorități vamale și fiscale. Cerințe și implementare?",
      de: "Digitale Integration mit Zoll- und Finanzbehörden. Anforderungen und Implementierung?",
      en: "Digital integration with customs and tax authorities. Requirements and implementation?"
    },
    options: {
      ro: ["Nu se poate", "e-Customs (NCTS, ICS), e-facturare (RO e-Factura, Peppol), semnătură electronică, certificări", "Doar email", "Doar pe hârtie"],
      de: ["Nicht möglich", "e-Zoll (NCTS, ICS), E-Fakturierung (RO e-Factura, Peppol), elektronische Signatur, Zertifizierungen", "Nur E-Mail", "Nur auf Papier"],
      en: ["Not possible", "e-Customs (NCTS, ICS), e-invoicing (RO e-Factura, Peppol), electronic signature, certifications", "Only email", "Only on paper"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrare autorități: NCTS pentru tranzit, ICS/ECS pentru import/export, e-Factura obligatorie B2G (și B2B), semnătură electronică calificată unde necesară.",
      de: "Behördenintegration: NCTS für Transit, ICS/ECS für Import/Export, E-Rechnung obligatorisch B2G (und B2B), qualifizierte elektronische Signatur wo erforderlich.",
      en: "Authority integration: NCTS for transit, ICS/ECS for import/export, e-Invoice mandatory B2G (and B2B), qualified electronic signature where required."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un portal self-service pentru clienți?",
      de: "Was ist ein Self-Service-Portal für Kunden?",
      en: "What is a self-service portal for clients?"
    },
    options: {
      ro: ["Website standard", "Platformă unde clienții plasează comenzi, urmăresc transporturi, descarcă documente fără a suna", "Doar email", "Doar chat"],
      de: ["Standardwebsite", "Plattform wo Kunden Aufträge platzieren, Transporte verfolgen, Dokumente herunterladen ohne anzurufen", "Nur E-Mail", "Nur Chat"],
      en: ["Standard website", "Platform where clients place orders, track transports, download documents without calling", "Only email", "Only chat"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Portal: client se loghează, vede comenzile, tracking live, descarcă POD/facturi, rapoarte, face comenzi noi - fără telefon/email.",
      de: "Portal: Kunde loggt sich ein, sieht Aufträge, Live-Tracking, lädt POD/Rechnungen herunter, Reports, macht neue Aufträge - ohne Telefon/E-Mail.",
      en: "Portal: client logs in, sees orders, live tracking, downloads POD/invoices, reports, makes new orders - without phone/email."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum securizezi datele în procesele digitale?",
      de: "Wie sicherst du Daten in digitalen Prozessen?",
      en: "How do you secure data in digital processes?"
    },
    options: {
      ro: ["Nu e nevoie", "Criptare, access control, backup, audit log, GDPR compliance, training echipă, incident response", "Doar parolă", "Doar antivirus"],
      de: ["Nicht nötig", "Verschlüsselung, Zugriffskontrolle, Backup, Audit-Log, DSGVO-Compliance, Team-Training, Incident Response", "Nur Passwort", "Nur Antivirus"],
      en: ["Not needed", "Encryption, access control, backup, audit log, GDPR compliance, team training, incident response", "Only password", "Only antivirus"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Securitate date: criptare (tranzit + stocare), MFA, role-based access, backup regular, log toate accesările, GDPR, training phishing, plan breach.",
      de: "Datensicherheit: Verschlüsselung (Transit + Speicher), MFA, rollenbasierter Zugang, regelmäßiges Backup, alle Zugriffe loggen, DSGVO, Phishing-Training, Breach-Plan.",
      en: "Data security: encryption (transit + storage), MFA, role-based access, regular backup, log all access, GDPR, phishing training, breach plan."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Machine learning pentru automatizare inteligentă. Aplicații practice în expediție?",
      de: "Machine Learning für intelligente Automatisierung. Praktische Anwendungen in der Spedition?",
      en: "Machine learning for intelligent automation. Practical applications in forwarding?"
    },
    options: {
      ro: ["Nu există aplicații", "Clasificare automată documente, routing inteligent comenzi, predicție pricing, fraud detection", "Doar chatbot", "Doar pentru giganți"],
      de: ["Keine Anwendungen", "Automatische Dokumentenklassifikation, intelligentes Auftragsrouting, Preisvorhersage, Betrugserkennung", "Nur Chatbot", "Nur für Giganten"],
      en: ["No applications", "Automatic document classification, intelligent order routing, pricing prediction, fraud detection", "Only chatbot", "Only for giants"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ML în expediție: OCR+clasificare documente, sugestie transportator optim, predicție preț pe bază de istoric, detecție comportament fraudulent.",
      de: "ML in der Spedition: OCR+Dokumentenklassifikation, optimale Transportunternehmer-Vorschläge, Preisvorhersage auf Basis Historie, Erkennung betrügerischen Verhaltens.",
      en: "ML in forwarding: OCR+document classification, optimal carrier suggestion, price prediction based on history, fraudulent behavior detection."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'touchless' processing în logistică?",
      de: "Was bedeutet 'touchless' Processing in der Logistik?",
      en: "What does 'touchless' processing mean in logistics?"
    },
    options: {
      ro: ["Fără contact fizic", "Procesare automată fără intervenție manuală: comandă primită și executată fără input uman", "Doar online", "Doar email"],
      de: ["Ohne physischen Kontakt", "Automatische Verarbeitung ohne manuellen Eingriff: Auftrag empfangen und ausgeführt ohne menschlichen Input", "Nur online", "Nur E-Mail"],
      en: ["Without physical contact", "Automatic processing without manual intervention: order received and executed without human input", "Only online", "Only email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Touchless: comandă vine via API → TMS creează transport automat → alocă transportator din reguli → tracking automat → POD → facturare - fără click uman.",
      de: "Touchless: Auftrag kommt via API → TMS erstellt Transport automatisch → weist Transportunternehmer nach Regeln zu → automatisches Tracking → POD → Fakturierung - ohne menschlichen Klick.",
      en: "Touchless: order comes via API → TMS creates transport automatically → allocates carrier from rules → automatic tracking → POD → invoicing - without human click."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum digitalizezi comunicarea cu șoferii în timp real?",
      de: "Wie digitalisierst du Echtzeit-Kommunikation mit Fahrern?",
      en: "How do you digitalize real-time communication with drivers?"
    },
    options: {
      ro: ["Doar telefon", "App mobilă: instrucțiuni push, chat, status updates, photo upload, navigație integrată", "Doar SMS", "Doar email"],
      de: ["Nur Telefon", "Mobile App: Push-Anweisungen, Chat, Status-Updates, Foto-Upload, integrierte Navigation", "Nur SMS", "Nur E-Mail"],
      en: ["Only phone", "Mobile app: push instructions, chat, status updates, photo upload, integrated navigation", "Only SMS", "Only email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "App șofer: primește comenzi push, confirmă pickup/delivery, chat cu dispecer, upload foto POD/problemă, navigație, totul sincronizat cu TMS.",
      de: "Fahrer-App: empfängt Push-Aufträge, bestätigt Pickup/Delivery, Chat mit Disponent, Foto-Upload POD/Problem, Navigation, alles mit TMS synchronisiert.",
      en: "Driver app: receives push orders, confirms pickup/delivery, chat with dispatcher, upload photo POD/problem, navigation, all synced with TMS."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Digital transformation KPIs: cum măsori succesul programului de digitalizare?",
      de: "Digital Transformation KPIs: wie misst du den Erfolg des Digitalisierungsprogramms?",
      en: "Digital transformation KPIs: how do you measure digitalization program success?"
    },
    options: {
      ro: ["Nu se măsoară", "Automation rate, processing time, error rate, employee productivity, customer satisfaction, cost savings", "Doar buget", "Doar timeline"],
      de: ["Nicht messbar", "Automatisierungsrate, Verarbeitungszeit, Fehlerquote, Mitarbeiterproduktivität, Kundenzufriedenheit, Kosteneinsparungen", "Nur Budget", "Nur Timeline"],
      en: ["Cannot be measured", "Automation rate, processing time, error rate, employee productivity, customer satisfaction, cost savings", "Only budget", "Only timeline"]
    },
    correctIndex: 1,
    explanation: {
      ro: "KPI digitalizare: % procese automatizate, timp procesare (înainte/după), erori (-%), comenzi/angajat (+%), NPS (+), cost admin (-%).",
      de: "Digitalisierungs-KPIs: % automatisierte Prozesse, Verarbeitungszeit (vorher/nachher), Fehler (-%), Aufträge/Mitarbeiter (+%), NPS (+), Admin-Kosten (-%).",
      en: "Digitalization KPIs: % automated processes, processing time (before/after), errors (-%), orders/employee (+%), NPS (+), admin cost (-%)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt barierele comune în digitalizare?",
      de: "Was sind häufige Barrieren bei der Digitalisierung?",
      en: "What are common barriers in digitalization?"
    },
    options: {
      ro: ["Nu există bariere", "Cost, rezistența la schimbare, lipsa skills, sisteme legacy, integrări complexe", "Doar cost", "Doar timp"],
      de: ["Keine Barrieren", "Kosten, Änderungswiderstand, fehlende Skills, Legacy-Systeme, komplexe Integrationen", "Nur Kosten", "Nur Zeit"],
      en: ["No barriers", "Cost, change resistance, lack of skills, legacy systems, complex integrations", "Only cost", "Only time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bariere: investiție inițială, oamenii preferă 'cum era', lipsă competențe tehnice, sisteme vechi greu de integrat, multe sisteme de conectat.",
      de: "Barrieren: Anfangsinvestition, Menschen bevorzugen 'wie es war', fehlende technische Kompetenzen, schwer zu integrierende alte Systeme, viele zu verbindende Systeme.",
      en: "Barriers: initial investment, people prefer 'how it was', lack of technical competencies, old systems hard to integrate, many systems to connect."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum asiguri continuitatea businessului în caz de probleme cu sistemele digitale?",
      de: "Wie gewährleistest du Geschäftskontinuität bei Problemen mit digitalen Systemen?",
      en: "How do you ensure business continuity in case of digital system problems?"
    },
    options: {
      ro: ["Aștepți să se rezolve", "Backup procedures, redundanță, disaster recovery plan, SLA-uri, fallback manual documentat", "Doar te rogi", "Nu ai nevoie"],
      de: ["Warten bis gelöst", "Backup-Verfahren, Redundanz, Disaster-Recovery-Plan, SLAs, dokumentierter manueller Fallback", "Nur beten", "Nicht nötig"],
      en: ["Wait for resolution", "Backup procedures, redundancy, disaster recovery plan, SLAs, documented manual fallback", "Only pray", "Not needed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Business continuity: backup automat, server-e redundante, plan DR testat, SLA 99.9% uptime, proceduri manuale documentate pentru urgențe.",
      de: "Business Continuity: automatisches Backup, redundante Server, getesteter DR-Plan, SLA 99,9% Uptime, dokumentierte manuelle Verfahren für Notfälle.",
      en: "Business continuity: automatic backup, redundant servers, tested DR plan, SLA 99.9% uptime, documented manual procedures for emergencies."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Ecosistem digital integrat: cum conectezi toți stakeholderii (clienți, transportatori, autorități)?",
      de: "Integriertes digitales Ökosystem: wie verbindest du alle Stakeholder (Kunden, Transportunternehmer, Behörden)?",
      en: "Integrated digital ecosystem: how do you connect all stakeholders (clients, carriers, authorities)?"
    },
    options: {
      ro: ["Separat fiecare", "Platform centrală cu API-uri, portaluri dedicate, EDI standard, one source of truth", "Doar email", "Nu e posibil"],
      de: ["Jeden separat", "Zentrale Plattform mit APIs, dedizierte Portale, Standard-EDI, eine Datenquelle der Wahrheit", "Nur E-Mail", "Nicht möglich"],
      en: ["Each separately", "Central platform with APIs, dedicated portals, standard EDI, one source of truth", "Only email", "Not possible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ecosistem: TMS core → API pentru clienți (EDI, portal) → API pentru transportatori (app, EDI) → integrări autorități (NCTS, e-factura) → date unificate.",
      de: "Ökosystem: TMS Core → API für Kunden (EDI, Portal) → API für Transportunternehmer (App, EDI) → Behördenintegrationen (NCTS, E-Rechnung) → vereinheitlichte Daten.",
      en: "Ecosystem: TMS core → API for clients (EDI, portal) → API for carriers (app, EDI) → authority integrations (NCTS, e-invoice) → unified data."
    }
  }
];
