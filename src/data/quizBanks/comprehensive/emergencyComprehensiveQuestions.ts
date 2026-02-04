import { TranslatedQuizQuestion } from '../../quizTranslations';

export const emergencyComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este primul pas într-o situație de urgență în transport?",
      de: "Was ist der erste Schritt in einer Transportunfall-Situation?",
      en: "What is the first step in a transport emergency situation?"
    },
    options: {
      ro: ["Suni clientul", "Asiguri siguranța persoanelor implicate și apelezi serviciile de urgență (112)", "Fotografiezi", "Cauți vinovat"],
      de: ["Kunden anrufen", "Sicherheit der Beteiligten gewährleisten und Notdienste (112) rufen", "Fotografieren", "Schuldigen suchen"],
      en: ["Call client", "Ensure safety of people involved and call emergency services (112)", "Take photos", "Look for blame"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prioritate 1: siguranța persoanelor. Primul apel = 112 dacă e necesar. Apoi: securizare zonă, documentare, informare lanț (companie, client, asigurător).",
      de: "Priorität 1: Personensicherheit. Erster Anruf = 112 wenn nötig. Dann: Bereichssicherung, Dokumentation, Ketteninformation (Firma, Kunde, Versicherer).",
      en: "Priority 1: people's safety. First call = 112 if needed. Then: secure area, documentation, chain information (company, client, insurer)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce trebuie documentat imediat după un accident rutier?",
      de: "Was muss unmittelbar nach einem Verkehrsunfall dokumentiert werden?",
      en: "What needs to be documented immediately after a road accident?"
    },
    options: {
      ro: ["Doar CMR", "Fotografii (vehicule, avarii, locație), date participanți, martori, constatare amiabilă, raport poliție", "Doar constatare", "Nimic"],
      de: ["Nur CMR", "Fotos (Fahrzeuge, Schäden, Standort), Teilnehmerdaten, Zeugen, einvernehmliche Feststellung, Polizeibericht", "Nur Feststellung", "Nichts"],
      en: ["Only CMR", "Photos (vehicles, damages, location), participant data, witnesses, amicable statement, police report", "Only statement", "Nothing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentare accident: fotografii complete (panoramic + detalii), date participanți și asigurări, declarații martori, constatare amiabilă semnată, raport poliție dacă e cazul.",
      de: "Unfalldokumentation: vollständige Fotos (Panorama + Details), Teilnehmer- und Versicherungsdaten, Zeugenerklärungen, unterschriebene einvernehmliche Feststellung, Polizeibericht wenn erforderlich.",
      en: "Accident documentation: complete photos (panoramic + details), participant and insurance data, witness statements, signed amicable statement, police report if applicable."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Defecțiune camion pe autostradă în altă țară, duminică. Procedură de asistență?",
      de: "LKW-Panne auf Autobahn im Ausland, Sonntag. Assistenzverfahren?",
      en: "Truck breakdown on highway abroad, Sunday. Assistance procedure?"
    },
    options: {
      ro: ["Aștepți luni", "Contactezi asistența rutieră internațională (24/7), informezi dispecerat, pregătești plan B pentru marfă", "Doar șoferul rezolvă", "Suni doar la firma ta"],
      de: ["Bis Montag warten", "Internationale Pannenhilfe kontaktieren (24/7), Disposition informieren, Plan B für Ware vorbereiten", "Nur Fahrer löst", "Nur eigene Firma anrufen"],
      en: ["Wait until Monday", "Contact international roadside assistance (24/7), inform dispatch, prepare plan B for goods", "Only driver solves", "Only call your company"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Defecțiune străinătate: activare card asistență 24/7 (ex: ADAC, TCS), estimare timp reparație, plan B paralel (alt camion în zonă), informare client dacă afectează livrarea.",
      de: "Auslandspanne: 24/7 Assistance-Karte aktivieren (z.B. ADAC, TCS), Reparaturzeit schätzen, paralleler Plan B (anderer LKW in Nähe), Kunde informieren wenn Lieferung betroffen.",
      en: "Breakdown abroad: activate 24/7 assistance card (e.g., ADAC, TCS), estimate repair time, parallel plan B (other truck in area), inform client if delivery affected."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Blocaj major: 15 camioane blocate 3 zile pe autostradă din cauza condițiilor meteo extreme. Management criză?",
      de: "Großblockade: 15 LKW 3 Tage auf Autobahn wegen extremem Wetter blockiert. Krisenmanagement?",
      en: "Major blockage: 15 trucks blocked 3 days on highway due to extreme weather. Crisis management?"
    },
    options: {
      ro: ["Aștepți să treacă", "Celulă de criză, comunicare cu toți șoferii, necesități de bază, informare clienți, replanning livrări", "Doar anunți clienții", "Abandonezi camioanele"],
      de: ["Abwarten", "Krisenzelle, Kommunikation mit allen Fahrern, Grundbedürfnisse, Kundeninformation, Lieferungen neu planen", "Nur Kunden informieren", "LKW verlassen"],
      en: ["Wait it out", "Crisis cell, communication with all drivers, basic needs, client information, delivery replanning", "Only inform clients", "Abandon trucks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Criză majoră: echipă dedicată de criză, contact regulat cu fiecare șofer (siguranță, mâncare, combustibil), comunicare proactivă clienți, replanning livrări, documentare pentru asigurare.",
      de: "Großkrise: dediziertes Krisenteam, regelmäßiger Kontakt mit jedem Fahrer (Sicherheit, Essen, Kraftstoff), proaktive Kundenkommunikation, Lieferungsneuplanung, Dokumentation für Versicherung.",
      en: "Major crisis: dedicated crisis team, regular contact with each driver (safety, food, fuel), proactive client communication, delivery replanning, documentation for insurance."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Marfă perisabilă și camion defect. Timp limitat. Priorități?",
      de: "Verderbliche Ware und defekter LKW. Begrenzte Zeit. Prioritäten?",
      en: "Perishable goods and broken truck. Limited time. Priorities?"
    },
    options: {
      ro: ["Repari camionul oricum", "Transbordare urgentă pe alt vehicul refrigerat pentru a salva marfa", "Aștepți să vezi ce se întâmplă", "Returnezi marfa"],
      de: ["LKW trotzdem reparieren", "Dringende Umladung auf anderes Kühlfahrzeug um Ware zu retten", "Abwarten was passiert", "Ware zurückgeben"],
      en: ["Repair truck anyway", "Urgent transhipment to other refrigerated vehicle to save goods", "Wait to see what happens", "Return goods"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Perisabile + defecțiune: prioritate = salvarea mărfii. Transbordare pe alt reefer disponibil în zonă, documentare temperaturi, informare client. Reparația poate aștepta.",
      de: "Verderblich + Panne: Priorität = Warenrettung. Umladung auf anderen verfügbaren Reefer in der Nähe, Temperaturdokumentation, Kundeninformation. Reparatur kann warten.",
      en: "Perishables + breakdown: priority = saving goods. Transhipment to other available reefer in area, temperature documentation, client information. Repair can wait."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Șofer dispărut (nu răspunde la telefon de 6 ore). Protocol?",
      de: "Fahrer verschwunden (antwortet seit 6 Stunden nicht). Protokoll?",
      en: "Driver missing (not answering phone for 6 hours). Protocol?"
    },
    options: {
      ro: ["Aștepți", "Verificare GPS, contactare familie/colegi, alertare autorități dacă persistent, plan B pentru marfă", "Doar dai mesaje", "Îl concediezi"],
      de: ["Warten", "GPS-Überprüfung, Familie/Kollegen kontaktieren, Behörden alarmieren wenn anhaltend, Plan B für Ware", "Nur Nachrichten senden", "Ihn entlassen"],
      en: ["Wait", "Check GPS, contact family/colleagues, alert authorities if persistent, plan B for goods", "Only send messages", "Fire him"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Șofer lipsă: 1) Verifică ultima poziție GPS, 2) Contactează familie și contacte de urgență, 3) După 8-12h fără răspuns = alertează poliția, 4) Pregătește alternativă pentru transport.",
      de: "Fahrer vermisst: 1) Letzte GPS-Position prüfen, 2) Familie und Notfallkontakte kontaktieren, 3) Nach 8-12h ohne Antwort = Polizei alarmieren, 4) Alternative für Transport vorbereiten.",
      en: "Driver missing: 1) Check last GPS position, 2) Contact family and emergency contacts, 3) After 8-12h without response = alert police, 4) Prepare alternative for transport."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Atacul cibernetic blochează toate sistemele companiei (TMS, email, telefonie). Continuitate operațională?",
      de: "Cyberangriff blockiert alle Firmensysteme (TMS, E-Mail, Telefonie). Operative Kontinuität?",
      en: "Cyber attack blocks all company systems (TMS, email, telephony). Operational continuity?"
    },
    options: {
      ro: ["Pauză până se rezolvă", "Plan de continuitate: proceduri manuale, comunicare alternativă (mobil personal), prioritizare urgențe", "Doar anunți clienții", "Plătești răscumpărarea"],
      de: ["Pause bis gelöst", "Kontinuitätsplan: manuelle Verfahren, alternative Kommunikation (persönliches Handy), Dringlichkeiten priorisieren", "Nur Kunden informieren", "Lösegeld zahlen"],
      en: ["Pause until solved", "Continuity plan: manual procedures, alternative communication (personal mobile), prioritize urgencies", "Only inform clients", "Pay ransom"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cyber criză: activare Business Continuity Plan, proceduri manuale (Excel, hârtie), comunicare prin mobil personal, prioritizare transporturi în curs, informare clienți cheie personal.",
      de: "Cyber-Krise: Business Continuity Plan aktivieren, manuelle Verfahren (Excel, Papier), Kommunikation über persönliches Handy, laufende Transporte priorisieren, Schlüsselkunden persönlich informieren.",
      en: "Cyber crisis: activate Business Continuity Plan, manual procedures (Excel, paper), communication via personal mobile, prioritize ongoing transports, personally inform key clients."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce numere de urgență trebuie să cunoască un disponent?",
      de: "Welche Notrufnummern muss ein Disponent kennen?",
      en: "What emergency numbers should a dispatcher know?"
    },
    options: {
      ro: ["Doar 112", "112 (urgențe), numere asistență rutieră, contact asigurător, numere consulat pentru fiecare țară", "Doar firma", "Doar poliție"],
      de: ["Nur 112", "112 (Notfälle), Pannenhilfe-Nummern, Versichererkontakt, Konsulatsnummern für jedes Land", "Nur Firma", "Nur Polizei"],
      en: ["Only 112", "112 (emergencies), roadside assistance numbers, insurer contact, consulate numbers for each country", "Only company", "Only police"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Numere esențiale: 112 (funcționează în toată UE), asistență rutieră (ADAC, TCS, etc.), asigurătorul 24/7, consulate românești/companiei pentru urgențe legale în străinătate.",
      de: "Wesentliche Nummern: 112 (funktioniert in ganz EU), Pannenhilfe (ADAC, TCS, etc.), Versicherer 24/7, rumänische Konsulate/Firmenkonsulate für Rechtsnotfälle im Ausland.",
      en: "Essential numbers: 112 (works throughout EU), roadside assistance (ADAC, TCS, etc.), insurer 24/7, consulates for legal emergencies abroad."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Protest blocare vamă la frontieră: transporturi blocate pe termen nedefinit. Strategie?",
      de: "Zollblockade-Protest an Grenze: Transporte auf unbestimmte Zeit blockiert. Strategie?",
      en: "Border customs blockade protest: transports blocked indefinitely. Strategy?"
    },
    options: {
      ro: ["Aștepți", "Identificare rute alternative, comunicare constantă cu clienții, monitorizare situație, planuri de contingency", "Returnezi toate camioanele", "Doar reclamații la autorități"],
      de: ["Warten", "Alternative Routen identifizieren, ständige Kundenkommunikation, Situationsmonitoring, Notfallpläne", "Alle LKW zurückschicken", "Nur Beschwerden bei Behörden"],
      en: ["Wait", "Identify alternative routes, constant client communication, situation monitoring, contingency plans", "Return all trucks", "Only complaints to authorities"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Blocaj frontieră: identifică traversări alternative (alte puncte de trecere), comunică proactiv cu clienții, monitorizează știrile, pregătește rute de ocolire, documentează pentru claims.",
      de: "Grenzblockade: alternative Übergänge identifizieren (andere Grenzpunkte), proaktiv mit Kunden kommunizieren, Nachrichten verfolgen, Umgehungsrouten vorbereiten, für Claims dokumentieren.",
      en: "Border blockage: identify alternative crossings (other border points), communicate proactively with clients, monitor news, prepare bypass routes, document for claims."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Incendiu la sediul companiei distruge arhiva fizică și serverul local. Recuperare și continuitate?",
      de: "Feuer am Firmensitz zerstört physisches Archiv und lokalen Server. Wiederherstellung und Kontinuität?",
      en: "Fire at company headquarters destroys physical archive and local server. Recovery and continuity?"
    },
    options: {
      ro: ["Faliment", "Activare backup cloud, relocare echipă, comunicare urgentă parteneri, reconstrucție graduală documente", "Doar asigurare", "Închizi temporar"],
      de: ["Konkurs", "Cloud-Backup aktivieren, Team relocieren, dringende Partnerkommunikation, schrittweise Dokumentenrekonstruktion", "Nur Versicherung", "Temporär schließen"],
      en: ["Bankruptcy", "Activate cloud backup, relocate team, urgent partner communication, gradual document reconstruction", "Only insurance", "Close temporarily"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dezastru: activare backup-uri cloud (de ce ai backup!), relocare la sediu alternativ/remote, comunicare imediată cu clienți și parteneri, reconstrucție documente din surse externe.",
      de: "Katastrophe: Cloud-Backups aktivieren (deshalb hast du Backup!), an Alternativstandort/Remote relocieren, sofortige Kunden- und Partnerkommunikation, Dokumentenrekonstruktion aus externen Quellen.",
      en: "Disaster: activate cloud backups (that's why you have backup!), relocate to alternative location/remote, immediate client and partner communication, document reconstruction from external sources."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Șofer bolnav în timpul transportului. Simptome grave. Ce faci?",
      de: "Fahrer während Transport krank. Schwere Symptome. Was tust du?",
      en: "Driver sick during transport. Severe symptoms. What do you do?"
    },
    options: {
      ro: ["Să continue", "Oprire imediată, apel 112 dacă grav, asistență medicală, înlocuire șofer pentru transport", "Doar medicamente", "Să revină acasă"],
      de: ["Weitermachen", "Sofortiger Stopp, 112 rufen wenn schwer, medizinische Hilfe, Fahrerersatz für Transport", "Nur Medikamente", "Nach Hause zurückkehren"],
      en: ["Continue", "Immediate stop, call 112 if severe, medical assistance, driver replacement for transport", "Only medicine", "Return home"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Șofer bolnav: oprire în loc sigur, evaluare gravitate (112 dacă sever), asistență medicală, organizare înlocuire șofer, nu continua cu șofer inapt - risc accident.",
      de: "Kranker Fahrer: an sicherem Ort anhalten, Schwere bewerten (112 wenn schwer), medizinische Hilfe, Fahrerersatz organisieren, nicht mit unfähigem Fahrer weiterfahren - Unfallrisiko.",
      en: "Sick driver: stop in safe place, assess severity (112 if severe), medical assistance, organize driver replacement, don't continue with unfit driver - accident risk."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Marfă confiscată de autorități la control. Procedură pentru eliberare?",
      de: "Ware bei Kontrolle von Behörden beschlagnahmt. Verfahren zur Freigabe?",
      en: "Goods confiscated by authorities at control. Procedure for release?"
    },
    options: {
      ro: ["Renunți la marfă", "Documentare completă, informare client imediat, contactare avocat/agent vamal, cooperare cu autoritățile", "Doar reclamație", "Aștepți"],
      de: ["Ware aufgeben", "Vollständige Dokumentation, Kunden sofort informieren, Anwalt/Zollagent kontaktieren, mit Behörden kooperieren", "Nur Beschwerde", "Warten"],
      en: ["Give up goods", "Complete documentation, inform client immediately, contact lawyer/customs agent, cooperate with authorities", "Only complaint", "Wait"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Confiscare: documentează totul (procesul verbal), informează clientul și asigurătorul imediat, contactează avocat local și agent vamal, cooperează cu autoritățile, nu semna nimic fără înțelegere.",
      de: "Beschlagnahme: alles dokumentieren (Protokoll), Kunde und Versicherer sofort informieren, lokalen Anwalt und Zollagent kontaktieren, mit Behörden kooperieren, nichts ohne Verständnis unterschreiben.",
      en: "Confiscation: document everything (official report), inform client and insurer immediately, contact local lawyer and customs agent, cooperate with authorities, don't sign anything without understanding."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Pandemie nouă: restricții de circulație impuse brusc în mai multe țări europene. Plan de criză logistic?",
      de: "Neue Pandemie: plötzliche Verkehrsbeschränkungen in mehreren EU-Ländern. Logistischer Krisenplan?",
      en: "New pandemic: sudden circulation restrictions imposed in several EU countries. Logistics crisis plan?"
    },
    options: {
      ro: ["Oprești tot", "Monitorizare excepții transport, documente speciale, protecție șoferi, comunicare clienți, adaptare continuă", "Doar transporturi locale", "Aștepți instrucțiuni"],
      de: ["Alles stoppen", "Transportausnahmen überwachen, Sonderdokumente, Fahrerschutz, Kundenkommunikation, kontinuierliche Anpassung", "Nur lokale Transporte", "Auf Anweisungen warten"],
      en: ["Stop everything", "Monitor transport exceptions, special documents, driver protection, client communication, continuous adaptation", "Only local transports", "Wait for instructions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Criză pandemie: monitorizare zilnică excepții per țară, documente de necesitate, echipament protecție șoferi, comunicare constantă clienți, adaptare rapidă la schimbări, plan pentru worst-case.",
      de: "Pandemie-Krise: tägliches Monitoring der Ausnahmen pro Land, Notwendigkeitsdokumente, Fahrerschutzausrüstung, ständige Kundenkommunikation, schnelle Anpassung an Änderungen, Worst-Case-Plan.",
      en: "Pandemic crisis: daily monitoring of exceptions per country, necessity documents, driver protection equipment, constant client communication, rapid adaptation to changes, worst-case plan."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Cum raportezi un incident de securitate (tentativă de furt)?",
      de: "Wie meldest du einen Sicherheitsvorfall (Diebstahlsversuch)?",
      en: "How do you report a security incident (theft attempt)?"
    },
    options: {
      ro: ["Doar intern", "Poliție (plângere), asigurător, management, documentare completă cu fotografii și martori", "Doar dacă s-a furat ceva", "Nu raportezi"],
      de: ["Nur intern", "Polizei (Anzeige), Versicherer, Management, vollständige Dokumentation mit Fotos und Zeugen", "Nur wenn etwas gestohlen wurde", "Nicht melden"],
      en: ["Only internally", "Police (complaint), insurer, management, complete documentation with photos and witnesses", "Only if something was stolen", "Don't report"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Raportare incident: plângere poliție (proces verbal), notificare asigurător, raport intern management, documentare completă (ce s-a întâmplat, când, unde, martori, fotografii).",
      de: "Vorfallmeldung: Polizeianzeige (Protokoll), Versicherermeldung, interner Management-Bericht, vollständige Dokumentation (was passiert, wann, wo, Zeugen, Fotos).",
      en: "Incident reporting: police complaint (report), insurer notification, internal management report, complete documentation (what happened, when, where, witnesses, photos)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Șofer reținut de poliție în străinătate pentru acuzații de trafic ilegal (fără știrea lui). Suport?",
      de: "Fahrer von Polizei im Ausland wegen illegalen Menschenhandelsvorwürfen festgehalten (ohne sein Wissen). Unterstützung?",
      en: "Driver detained by police abroad for illegal trafficking accusations (without his knowledge). Support?"
    },
    options: {
      ro: ["Nu e problema ta", "Contactare ambasadă, avocat local, suport moral șofer, cooperare cu autoritățile, documentare", "Concediere imediată", "Doar aștepți"],
      de: ["Nicht dein Problem", "Botschaft kontaktieren, lokaler Anwalt, moralische Unterstützung für Fahrer, mit Behörden kooperieren, dokumentieren", "Sofortige Kündigung", "Nur warten"],
      en: ["Not your problem", "Contact embassy, local lawyer, moral support for driver, cooperate with authorities, document", "Immediate dismissal", "Only wait"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Șofer reținut: contactează ambasada română, angajează avocat local, asigură suport pentru șofer, cooperează cu ancheta (dovezi că transportul era legitim), documentează totul.",
      de: "Festgehaltener Fahrer: rumänische Botschaft kontaktieren, lokalen Anwalt beauftragen, Fahrer unterstützen, mit Ermittlung kooperieren (Beweise dass Transport legitim war), alles dokumentieren.",
      en: "Detained driver: contact Romanian embassy, hire local lawyer, ensure driver support, cooperate with investigation (evidence transport was legitimate), document everything."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare plan complet de Business Continuity pentru companie de transport. Componente esențiale?",
      de: "Entwicklung vollständiger Business Continuity Plan für Transportunternehmen. Wesentliche Komponenten?",
      en: "Developing complete Business Continuity Plan for transport company. Essential components?"
    },
    options: {
      ro: ["Doar backup date", "Analiza riscuri, proceduri alternative, contact de criză, backup IT, plan comunicare, testare regulată", "Doar asigurare", "Doar pentru management"],
      de: ["Nur Daten-Backup", "Risikoanalyse, alternative Verfahren, Krisenkontakt, IT-Backup, Kommunikationsplan, regelmäßige Tests", "Nur Versicherung", "Nur für Management"],
      en: ["Only data backup", "Risk analysis, alternative procedures, crisis contact, IT backup, communication plan, regular testing", "Only insurance", "Only for management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "BCP complet: identificare riscuri critice, proceduri alternative pentru fiecare, lista contacte de criză, backup IT și locație alternativă, plan comunicare, testare anuală, training echipă.",
      de: "Vollständiger BCP: kritische Risiken identifizieren, alternative Verfahren für jeden, Krisenkontaktliste, IT-Backup und Alternativstandort, Kommunikationsplan, jährliche Tests, Teamschulung.",
      en: "Complete BCP: identify critical risks, alternative procedures for each, crisis contact list, IT backup and alternative location, communication plan, annual testing, team training."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Reacție la presă negativă (articol despre întârzieri ale companiei). Comunicare de criză?",
      de: "Reaktion auf negative Presse (Artikel über Firmenverzögerungen). Krisenkommunikation?",
      en: "Reaction to negative press (article about company delays). Crisis communication?"
    },
    options: {
      ro: ["Ignori", "Răspuns rapid, onest, recunoștere probleme, prezentare acțiuni corective, comunicare cu stakeholderi cheie", "Ataci jurnalistul", "Doar avocați"],
      de: ["Ignorieren", "Schnelle, ehrliche Antwort, Problemerkennung, Korrekturmaßnahmen präsentieren, Kommunikation mit Schlüsselstakeholdern", "Journalisten angreifen", "Nur Anwälte"],
      en: ["Ignore", "Quick, honest response, acknowledge problems, present corrective actions, communicate with key stakeholders", "Attack journalist", "Only lawyers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicare criză media: răspuns rapid (24-48h), ton profesional, recunoaște ce e adevărat, prezintă acțiunile luate, comunică proactiv cu clienții cheie, nu atacă sau neagă evident.",
      de: "Medienkrisenkommunikation: schnelle Antwort (24-48h), professioneller Ton, Wahres anerkennen, getroffene Maßnahmen präsentieren, proaktiv mit Schlüsselkunden kommunizieren, nicht offensichtlich angreifen oder leugnen.",
      en: "Media crisis communication: quick response (24-48h), professional tone, acknowledge what's true, present actions taken, communicate proactively with key clients, don't attack or obviously deny."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Sisteme GPS și tracking down: nu știi unde sunt camioanele. Măsuri imediate?",
      de: "GPS- und Tracking-Systeme down: du weißt nicht wo die LKW sind. Sofortmaßnahmen?",
      en: "GPS and tracking systems down: you don't know where trucks are. Immediate measures?"
    },
    options: {
      ro: ["Aștepți să revină", "Contact direct cu fiecare șofer, poziție manuală, comunicare cu clienții despre situație, investigare IT", "Doar anunți IT", "Nimic de făcut"],
      de: ["Warten auf Wiederherstellung", "Direkter Kontakt mit jedem Fahrer, manuelle Positionserfassung, Kundeninformation über Situation, IT-Untersuchung", "Nur IT benachrichtigen", "Nichts zu tun"],
      en: ["Wait for restoration", "Direct contact with each driver, manual position recording, client communication about situation, IT investigation", "Only notify IT", "Nothing to do"]
    },
    correctIndex: 1,
    explanation: {
      ro: "GPS down: suni fiecare șofer pentru poziție, notezi manual, informezi clienții că tracking e temporar indisponibil, presiune pe IT/furnizor pentru rezolvare urgentă, plan alternativ.",
      de: "GPS down: jeden Fahrer für Position anrufen, manuell notieren, Kunden informieren dass Tracking temporär nicht verfügbar, Druck auf IT/Anbieter für dringende Lösung, Alternativplan.",
      en: "GPS down: call each driver for position, note manually, inform clients tracking temporarily unavailable, pressure IT/provider for urgent resolution, alternative plan."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Post-criză: debriefing și lecții învățate după o situație majoră. Proces structurat?",
      de: "Post-Krise: Debriefing und Lessons Learned nach großer Situation. Strukturierter Prozess?",
      en: "Post-crisis: debriefing and lessons learned after major situation. Structured process?"
    },
    options: {
      ro: ["Doar uiți", "Timeline completă, ce a mers bine/rău, root cause, acțiuni de îmbunătățire, actualizare proceduri", "Doar raport pentru șefi", "Nu e nevoie"],
      de: ["Nur vergessen", "Vollständige Timeline, was gut/schlecht lief, Root Cause, Verbesserungsmaßnahmen, Verfahrensaktualisierung", "Nur Bericht für Chefs", "Nicht nötig"],
      en: ["Just forget", "Complete timeline, what went well/poorly, root cause, improvement actions, procedure update", "Only report for bosses", "Not needed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Debriefing: reconstruiește timeline-ul complet, identifică ce a funcționat și ce nu, analiză root cause, definește acțiuni concrete de îmbunătățire, actualizează procedurile, comunică lecțiile echipei.",
      de: "Debriefing: vollständige Timeline rekonstruieren, identifizieren was funktioniert hat und was nicht, Root-Cause-Analyse, konkrete Verbesserungsmaßnahmen definieren, Verfahren aktualisieren, Lektionen ans Team kommunizieren.",
      en: "Debriefing: reconstruct complete timeline, identify what worked and what didn't, root cause analysis, define concrete improvement actions, update procedures, communicate lessons to team."
    }
  }
];
