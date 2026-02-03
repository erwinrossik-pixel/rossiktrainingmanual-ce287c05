import { TranslatedQuizQuestion } from '../../quizTranslations';

export const communicationComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt canalele principale de comunicare în logistică?",
      de: "Was sind die wichtigsten Kommunikationskanäle in der Logistik?",
      en: "What are the main communication channels in logistics?"
    },
    options: {
      ro: ["Doar email", "Telefon, email, TMS/EDI, chat-uri, platforme colaborative", "Doar fax", "Doar poștă"],
      de: ["Nur E-Mail", "Telefon, E-Mail, TMS/EDI, Chats, kollaborative Plattformen", "Nur Fax", "Nur Post"],
      en: ["Only email", "Phone, email, TMS/EDI, chats, collaborative platforms", "Only fax", "Only mail"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Canale: telefon (urgențe), email (confirmare scrisă), TMS (date structurate), WhatsApp/Teams (comunicare rapidă cu echipa/parteneri).",
      de: "Kanäle: Telefon (Notfälle), E-Mail (schriftliche Bestätigung), TMS (strukturierte Daten), WhatsApp/Teams (schnelle Kommunikation mit Team/Partnern).",
      en: "Channels: phone (urgencies), email (written confirmation), TMS (structured data), WhatsApp/Teams (quick communication with team/partners)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Când folosești telefonul vs. email în comunicarea operațională?",
      de: "Wann nutzt du Telefon vs. E-Mail in der operativen Kommunikation?",
      en: "When do you use phone vs. email in operational communication?"
    },
    options: {
      ro: ["Mereu telefon", "Telefon pentru urgențe și clarificări rapide, email pentru confirmare și documentare", "Mereu email", "Nu contează"],
      de: ["Immer Telefon", "Telefon für Notfälle und schnelle Klärungen, E-Mail für Bestätigung und Dokumentation", "Immer E-Mail", "Egal"],
      en: ["Always phone", "Phone for urgencies and quick clarifications, email for confirmation and documentation", "Always email", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Regulă: urgent/complex → telefon, apoi confirmare email. Normal/documentare → email. Trailul scris e esențial pentru dispute.",
      de: "Regel: dringend/komplex → Telefon, dann E-Mail-Bestätigung. Normal/Dokumentation → E-Mail. Schriftliche Spur wichtig für Streitigkeiten.",
      en: "Rule: urgent/complex → phone, then email confirmation. Normal/documentation → email. Written trail essential for disputes."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum comunici o întârziere majoră clientului?",
      de: "Wie kommunizierst du eine größere Verzögerung dem Kunden?",
      en: "How do you communicate a major delay to the client?"
    },
    options: {
      ro: ["Aștepți să întrebe", "Proactiv: anunți imediat, explici cauza, oferi soluție/ETA revizuit, urmărești rezolvarea", "Ascunzi până la final", "Doar email scurt"],
      de: ["Warten bis er fragt", "Proaktiv: sofort informieren, Ursache erklären, Lösung/revidierte ETA anbieten, Lösung verfolgen", "Bis zum Ende verstecken", "Nur kurze E-Mail"],
      en: ["Wait for them to ask", "Proactively: announce immediately, explain cause, offer solution/revised ETA, follow up resolution", "Hide until the end", "Only short email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicare proactivă: anunță înainte să afle singur, fii transparent despre cauză, propune soluții, updates regulate până la rezolvare.",
      de: "Proaktive Kommunikation: informieren bevor er es selbst erfährt, transparent über Ursache, Lösungen vorschlagen, regelmäßige Updates bis zur Lösung.",
      en: "Proactive communication: inform before they find out themselves, be transparent about cause, propose solutions, regular updates until resolution."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client furios sună pentru o problemă care nu e vina ta. Cum gestionezi conversația?",
      de: "Wütender Kunde ruft wegen eines Problems an das nicht deine Schuld ist. Wie managst du das Gespräch?",
      en: "Angry client calls about a problem that's not your fault. How do you manage the conversation?"
    },
    options: {
      ro: ["Te aperi imediat", "Asculți calm, validezi frustrarea, preiei ownership pentru soluție, nu acuzi alții în față", "Închizi telefonul", "Transferi la superior"],
      de: ["Sofort verteidigen", "Ruhig zuhören, Frustration validieren, Ownership für Lösung übernehmen, andere nicht vor ihm beschuldigen", "Auflegen", "An Vorgesetzten weiterleiten"],
      en: ["Defend immediately", "Listen calmly, validate frustration, take ownership for solution, don't blame others in front of them", "Hang up", "Transfer to superior"]
    },
    correctIndex: 1,
    explanation: {
      ro: "De-escaladare: lasă-l să vorbească, 'înțeleg frustrarea', focus pe soluție nu pe vinovăție, revino cu update concret.",
      de: "Deeskalation: ihn reden lassen, 'ich verstehe die Frustration', Fokus auf Lösung nicht Schuld, mit konkretem Update zurückkommen.",
      en: "De-escalation: let them talk, 'I understand the frustration', focus on solution not blame, come back with concrete update."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce elemente trebuie să conțină un email profesional de confirmare comandă?",
      de: "Welche Elemente muss eine professionelle Auftragsbestätigungs-E-Mail enthalten?",
      en: "What elements must a professional order confirmation email contain?"
    },
    options: {
      ro: ["Doar OK", "Referință, rută, date, vehicul, preț, contacte, termeni, semnătură", "Doar prețul", "Doar data"],
      de: ["Nur OK", "Referenz, Route, Daten, Fahrzeug, Preis, Kontakte, Bedingungen, Signatur", "Nur Preis", "Nur Datum"],
      en: ["Only OK", "Reference, route, dates, vehicle, price, contacts, terms, signature", "Only price", "Only date"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Email confirmare: referință internă, detalii complete transport, date/ore, preț agreat, contacte urgență, condiții speciale.",
      de: "Bestätigungs-E-Mail: interne Referenz, vollständige Transportdetails, Daten/Zeiten, vereinbarter Preis, Notfallkontakte, Sonderbedingungen.",
      en: "Confirmation email: internal reference, complete transport details, dates/times, agreed price, emergency contacts, special conditions."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum comunici eficient cu șoferii în timp real?",
      de: "Wie kommunizierst du effektiv mit Fahrern in Echtzeit?",
      en: "How do you communicate effectively with drivers in real-time?"
    },
    options: {
      ro: ["Doar GPS tracking", "Mesaje scurte și clare, instructiuni pas cu pas, disponibilitate pentru întrebări, escaladare rapidă", "Doar la plecare", "Doar la sosire"],
      de: ["Nur GPS-Tracking", "Kurze und klare Nachrichten, Schritt-für-Schritt-Anweisungen, Verfügbarkeit für Fragen, schnelle Eskalation", "Nur bei Abfahrt", "Nur bei Ankunft"],
      en: ["Only GPS tracking", "Short and clear messages, step-by-step instructions, availability for questions, quick escalation", "Only at departure", "Only at arrival"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicare șofer: instrucțiuni simple, confirmări checkpoint, răspuns rapid la întrebări, escaladare imediată la probleme.",
      de: "Fahrerkommunikation: einfache Anweisungen, Checkpoint-Bestätigungen, schnelle Antwort auf Fragen, sofortige Eskalation bei Problemen.",
      en: "Driver communication: simple instructions, checkpoint confirmations, quick response to questions, immediate escalation on problems."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Comunicare de criză: accident cu ADR pe autostradă. Fluxul de comunicare?",
      de: "Krisenkommunikation: ADR-Unfall auf der Autobahn. Kommunikationsablauf?",
      en: "Crisis communication: ADR accident on highway. Communication flow?"
    },
    options: {
      ro: ["Doar șofer gestionează", "112 → management intern → client/asigurător → autorități → comunicat extern dacă necesar", "Doar intern", "Doar client"],
      de: ["Nur Fahrer managt", "112 → internes Management → Kunde/Versicherer → Behörden → externe Kommunikation falls nötig", "Nur intern", "Nur Kunde"],
      en: ["Only driver manages", "112 → internal management → client/insurer → authorities → external statement if needed", "Only internal", "Only client"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Protocol criză: siguranță (112), management alertat, client informat factual, asigurator notificat, pas cu pas conform procedură, jurnaliști doar prin PR.",
      de: "Krisenprotokoll: Sicherheit (112), Management alarmiert, Kunde sachlich informiert, Versicherer benachrichtigt, schrittweise laut Verfahren, Journalisten nur über PR.",
      en: "Crisis protocol: safety (112), management alerted, client informed factually, insurer notified, step by step per procedure, journalists only through PR."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă comunicare asertivă în context profesional?",
      de: "Was bedeutet assertive Kommunikation im beruflichen Kontext?",
      en: "What does assertive communication mean in professional context?"
    },
    options: {
      ro: ["Agresivitate", "Exprimarea clară a poziției tale respectând și poziția celuilalt", "Pasivitate", "Evitare conflict"],
      de: ["Aggressivität", "Klare Äußerung deiner Position unter Respektierung der Position des anderen", "Passivität", "Konfliktvermeidung"],
      en: ["Aggressiveness", "Clear expression of your position while respecting the other's position", "Passivity", "Conflict avoidance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Asertivitate: spui ce gândești clar dar respectuos, asculți activ, nu cedezi nejustificat dar nici nu ataci. Balanță.",
      de: "Assertivität: klar aber respektvoll sagen was du denkst, aktiv zuhören, nicht ungerechtfertigt nachgeben aber auch nicht angreifen. Balance.",
      en: "Assertiveness: say what you think clearly but respectfully, listen actively, don't yield unjustifiably but don't attack either. Balance."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum adaptezi comunicarea pentru diferite culturi în transportul internațional?",
      de: "Wie passt du Kommunikation für verschiedene Kulturen im internationalen Transport an?",
      en: "How do you adapt communication for different cultures in international transport?"
    },
    options: {
      ro: ["Identic cu toți", "Înțelegi stilul cultural: directitate, formalitate, timp de răspuns, ierarhie", "Doar în engleză", "Ignori diferențele"],
      de: ["Identisch mit allen", "Kulturellen Stil verstehen: Direktheit, Formalität, Antwortzeit, Hierarchie", "Nur auf Englisch", "Unterschiede ignorieren"],
      en: ["Identical with everyone", "Understand cultural style: directness, formality, response time, hierarchy", "Only in English", "Ignore differences"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Adaptare culturală: germanii - punctuali și formali, italienii - relaționali, estici - ierarhie respectată, nordici - concis și direct.",
      de: "Kulturelle Anpassung: Deutsche - pünktlich und formal, Italiener - beziehungsorientiert, Osteuropäer - Hierarchie respektiert, Nordeuropäer - knapp und direkt.",
      en: "Cultural adaptation: Germans - punctual and formal, Italians - relationship-oriented, Eastern Europeans - hierarchy respected, Nordics - concise and direct."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare sistem de comunicare unificat pentru echipa de dispecerat (15 persoane). Componente cheie?",
      de: "Implementierung einheitliches Kommunikationssystem für Dispositionsteam (15 Personen). Schlüsselkomponenten?",
      en: "Implementing unified communication system for dispatch team (15 people). Key components?"
    },
    options: {
      ro: ["Doar email", "TMS central, telefonie integrată, chat intern, protocoale standard, escaladare definită", "Doar WhatsApp", "Doar întâlniri"],
      de: ["Nur E-Mail", "Zentrales TMS, integrierte Telefonie, interner Chat, Standardprotokolle, definierte Eskalation", "Nur WhatsApp", "Nur Meetings"],
      en: ["Only email", "Central TMS, integrated telephony, internal chat, standard protocols, defined escalation", "Only WhatsApp", "Only meetings"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sistem unificat: TMS cu toate datele, telefon cu tracking apeluri, Teams/Slack intern, template-uri standard, matrice escaladare, proceduri documentate.",
      de: "Einheitliches System: TMS mit allen Daten, Telefon mit Anrufverfolgung, Teams/Slack intern, Standardvorlagen, Eskalationsmatrix, dokumentierte Verfahren.",
      en: "Unified system: TMS with all data, phone with call tracking, Teams/Slack internal, standard templates, escalation matrix, documented procedures."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este feedback-ul constructiv?",
      de: "Was ist konstruktives Feedback?",
      en: "What is constructive feedback?"
    },
    options: {
      ro: ["Critică negativă", "Observații specifice, orientate spre îmbunătățire, cu soluții propuse", "Laudă goală", "Evitare problemă"],
      de: ["Negative Kritik", "Spezifische Beobachtungen, auf Verbesserung ausgerichtet, mit vorgeschlagenen Lösungen", "Leeres Lob", "Problemvermeidung"],
      en: ["Negative criticism", "Specific observations, improvement-oriented, with proposed solutions", "Empty praise", "Problem avoidance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Feedback constructiv: specific ('în cazul X ai făcut Y'), orientat viitor ('data viitoare încearcă Z'), bilateral, regulat.",
      de: "Konstruktives Feedback: spezifisch ('im Fall X hast du Y gemacht'), zukunftsorientiert ('nächstes Mal versuche Z'), bilateral, regelmäßig.",
      en: "Constructive feedback: specific ('in case X you did Y'), future-oriented ('next time try Z'), bilateral, regular."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi un conflict de comunicare între departamente (dispecerat vs. vânzări)?",
      de: "Wie managst du einen Kommunikationskonflikt zwischen Abteilungen (Disposition vs. Vertrieb)?",
      en: "How do you manage a communication conflict between departments (dispatch vs. sales)?"
    },
    options: {
      ro: ["Ignori", "Identifici sursa, facilitezi dialog, clarifici roluri, stabilești procese clare, follow-up", "Doar management decide", "Separare completă"],
      de: ["Ignorieren", "Quelle identifizieren, Dialog fördern, Rollen klären, klare Prozesse etablieren, Follow-up", "Nur Management entscheidet", "Vollständige Trennung"],
      en: ["Ignore", "Identify source, facilitate dialogue, clarify roles, establish clear processes, follow-up", "Only management decides", "Complete separation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rezolvare conflict: înțelege perspectivele ambelor, găsește cauza (așteptări diferite?), stabilește SLA-uri interne, întâlniri regulate.",
      de: "Konfliktlösung: beide Perspektiven verstehen, Ursache finden (unterschiedliche Erwartungen?), interne SLAs festlegen, regelmäßige Meetings.",
      en: "Conflict resolution: understand both perspectives, find cause (different expectations?), establish internal SLAs, regular meetings."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Comunicare în situație de recall masiv al mărfii alimentare transportate. Stakeholderi și mesaje?",
      de: "Kommunikation bei massivem Rückruf transportierter Lebensmittel. Stakeholder und Botschaften?",
      en: "Communication in massive food cargo recall situation. Stakeholders and messages?"
    },
    options: {
      ro: ["Tăcere", "Client/producător, autorități sanitare, asigurator, parteneri afectați - mesaje adaptate fiecăruia, timeline coordonată", "Doar client", "Doar autorități"],
      de: ["Schweigen", "Kunde/Hersteller, Gesundheitsbehörden, Versicherer, betroffene Partner - angepasste Botschaften für jeden, koordinierte Timeline", "Nur Kunde", "Nur Behörden"],
      en: ["Silence", "Client/producer, health authorities, insurer, affected partners - adapted messages for each, coordinated timeline", "Only client", "Only authorities"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Recall: producător (coordonare acțiuni), ANSVSA (dacă obligatoriu), asigurator (dosar), comunicat intern, retailers afectați - toate sincronizate.",
      de: "Rückruf: Hersteller (Aktionskoordination), Gesundheitsbehörde (falls Pflicht), Versicherer (Akte), interne Kommunikation, betroffene Händler - alles synchronisiert.",
      en: "Recall: producer (action coordination), health authority (if mandatory), insurer (file), internal communication, affected retailers - all synchronized."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'closed loop communication' în operațiuni?",
      de: "Was bedeutet 'Closed Loop Communication' im Betrieb?",
      en: "What does 'closed loop communication' mean in operations?"
    },
    options: {
      ro: ["Comunicare secretă", "Confirmare că mesajul a fost primit și înțeles de receptor", "Comunicare într-un cerc", "Comunicare închisă"],
      de: ["Geheime Kommunikation", "Bestätigung dass Nachricht empfangen und verstanden wurde", "Kommunikation im Kreis", "Geschlossene Kommunikation"],
      en: ["Secret communication", "Confirmation that message was received and understood by recipient", "Communication in a circle", "Closed communication"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Closed loop: trimite mesaj → receptor confirmă primirea și înțelegerea → emițător validează. Reduce erori de comunicare.",
      de: "Closed Loop: Nachricht senden → Empfänger bestätigt Erhalt und Verständnis → Sender validiert. Reduziert Kommunikationsfehler.",
      en: "Closed loop: send message → recipient confirms receipt and understanding → sender validates. Reduces communication errors."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum organizezi un briefing eficient de dimineață pentru echipa de dispecerat?",
      de: "Wie organisierst du ein effektives Morgen-Briefing für das Dispositionsteam?",
      en: "How do you organize an effective morning briefing for the dispatch team?"
    },
    options: {
      ro: ["Nu faci briefing", "Scurt (10-15 min), priorități zilei, probleme în curs, resurse disponibile, întrebări", "1 oră detaliată", "Doar email"],
      de: ["Kein Briefing", "Kurz (10-15 Min), Prioritäten des Tages, laufende Probleme, verfügbare Ressourcen, Fragen", "1 Stunde detailliert", "Nur E-Mail"],
      en: ["No briefing", "Short (10-15 min), day priorities, ongoing issues, available resources, questions", "1 hour detailed", "Only email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Briefing eficient: scurt, focus pe urgențe/priorități, probleme deschise, alocare resurse, spațiu pentru întrebări, documentare acțiuni.",
      de: "Effektives Briefing: kurz, Fokus auf Dringlichkeiten/Prioritäten, offene Probleme, Ressourcenzuteilung, Raum für Fragen, Aktionsdokumentation.",
      en: "Effective briefing: short, focus on urgencies/priorities, open issues, resource allocation, space for questions, action documentation."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Training echipă de customer service pentru gestionarea apelurilor dificile. Componente program?",
      de: "Training Customer Service Team für schwierige Anrufe. Programmkomponenten?",
      en: "Training customer service team for handling difficult calls. Program components?"
    },
    options: {
      ro: ["Doar script", "Tehnici de-escaladare, ascultare activă, soluții standard, escaladare, role-play, feedback", "Doar experiență", "Doar reguli"],
      de: ["Nur Skript", "Deeskalationstechniken, aktives Zuhören, Standardlösungen, Eskalation, Rollenspiel, Feedback", "Nur Erfahrung", "Nur Regeln"],
      en: ["Only script", "De-escalation techniques, active listening, standard solutions, escalation, role-play, feedback", "Only experience", "Only rules"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Training CS: tehnici calm, fraze de-escaladare, soluții pregătite, când să escaladeze, simulări practice, coaching continuu.",
      de: "CS-Training: Ruhetechniken, Deeskalationsphrasen, vorbereitete Lösungen, wann eskalieren, praktische Simulationen, kontinuierliches Coaching.",
      en: "CS training: calming techniques, de-escalation phrases, prepared solutions, when to escalate, practical simulations, continuous coaching."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este tonul potrivit în comunicarea scrisă profesională?",
      de: "Was ist der richtige Ton in der professionellen schriftlichen Kommunikation?",
      en: "What is the appropriate tone in professional written communication?"
    },
    options: {
      ro: ["Foarte informal", "Profesional, clar, politicos dar direct", "Foarte formal și rigid", "Familiar ca între prieteni"],
      de: ["Sehr informell", "Professionell, klar, höflich aber direkt", "Sehr formal und starr", "Vertraut wie unter Freunden"],
      en: ["Very informal", "Professional, clear, polite but direct", "Very formal and rigid", "Familiar as between friends"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ton profesional: politicos dar eficient, fără ambiguități, adaptabil (mai formal cu noi, mai direct cu vechi), fără emoții negative.",
      de: "Professioneller Ton: höflich aber effizient, keine Mehrdeutigkeiten, anpassbar (formeller mit Neuen, direkter mit Alten), keine negativen Emotionen.",
      en: "Professional tone: polite but efficient, no ambiguities, adaptable (more formal with new, more direct with old), no negative emotions."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum documentezi conversațiile telefonice importante?",
      de: "Wie dokumentierst du wichtige Telefongespräche?",
      en: "How do you document important phone conversations?"
    },
    options: {
      ro: ["Nu documentezi", "Note imediat după apel, email de confirmare cu punctele cheie, salvare în dosar client/transport", "Doar înregistrare audio", "Doar din memorie"],
      de: ["Nicht dokumentieren", "Notizen sofort nach Anruf, Bestätigungs-E-Mail mit Kernpunkten, Speicherung in Kunden-/Transportakte", "Nur Audioaufnahme", "Nur aus dem Gedächtnis"],
      en: ["Don't document", "Notes immediately after call, confirmation email with key points, save in client/transport file", "Only audio recording", "Only from memory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentare: notează imediat data, participanți, decizii, acțiuni. Trimite email de confirmare. Salvează în TMS sau dosar.",
      de: "Dokumentation: sofort Datum, Teilnehmer, Entscheidungen, Aktionen notieren. Bestätigungs-E-Mail senden. In TMS oder Akte speichern.",
      en: "Documentation: immediately note date, participants, decisions, actions. Send confirmation email. Save in TMS or file."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Comunicare multi-stakeholder pentru proiect complex (client, transportatori, vamă, depozit). Coordonare?",
      de: "Multi-Stakeholder-Kommunikation für komplexes Projekt (Kunde, Transportunternehmer, Zoll, Lager). Koordination?",
      en: "Multi-stakeholder communication for complex project (client, carriers, customs, warehouse). Coordination?"
    },
    options: {
      ro: ["Fiecare separat fără coordonare", "Single point of contact intern, update-uri sincronizate, call-uri comune când necesar, status report centralizat", "Doar email general", "Doar la probleme"],
      de: ["Jeder separat ohne Koordination", "Interner Single Point of Contact, synchronisierte Updates, gemeinsame Calls wenn nötig, zentraler Statusbericht", "Nur allgemeine E-Mail", "Nur bei Problemen"],
      en: ["Each separately without coordination", "Internal single point of contact, synchronized updates, joint calls when needed, centralized status report", "Only general email", "Only at problems"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Coordonare: project manager unic, grup de comunicare cu toți relevanți, status call săptămânal, report centralizat, escaladare definită.",
      de: "Koordination: einziger Projektmanager, Kommunikationsgruppe mit allen Relevanten, wöchentlicher Status-Call, zentraler Report, definierte Eskalation.",
      en: "Coordination: single project manager, communication group with all relevant, weekly status call, centralized report, defined escalation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Cum răspunzi profesional la o reclamație pe email?",
      de: "Wie antwortest du professionell auf eine E-Mail-Beschwerde?",
      en: "How do you professionally respond to an email complaint?"
    },
    options: {
      ro: ["Nu răspunzi", "Rapid, empatic, recunoști problema, oferi soluție/timeline, follow-up", "Defensiv și justificări", "Forward la altcineva"],
      de: ["Nicht antworten", "Schnell, empathisch, Problem anerkennen, Lösung/Timeline anbieten, Follow-up", "Defensiv mit Rechtfertigungen", "An jemand anderen weiterleiten"],
      en: ["Don't respond", "Quickly, empathetically, acknowledge problem, offer solution/timeline, follow-up", "Defensive with justifications", "Forward to someone else"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Răspuns reclamație: mulțumesc pentru semnalare, recunosc problema, explic ce fac, dau timeline, revin cu update, închid loopul.",
      de: "Beschwerdeantwort: danke für Hinweis, Problem anerkennen, erklären was ich tue, Timeline geben, mit Update zurückkommen, Loop schließen.",
      en: "Complaint response: thank for raising, acknowledge problem, explain what I'm doing, give timeline, come back with update, close the loop."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum comunici schimbări de proceduri echipei fără a crea rezistență?",
      de: "Wie kommunizierst du Verfahrensänderungen ans Team ohne Widerstand zu erzeugen?",
      en: "How do you communicate procedure changes to the team without creating resistance?"
    },
    options: {
      ro: ["Impui fără explicații", "Explici 'de ce', implici echipa în implementare, oferă suport, colectezi feedback", "Doar email oficial", "Nu comunici direct"],
      de: ["Ohne Erklärung aufzwingen", "Das 'Warum' erklären, Team in Implementierung einbeziehen, Unterstützung bieten, Feedback sammeln", "Nur offizielle E-Mail", "Nicht direkt kommunizieren"],
      en: ["Impose without explanations", "Explain 'why', involve team in implementation, offer support, collect feedback", "Only official email", "Don't communicate directly"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Change management: comunică motivul, arată beneficiile, implică în detalii, oferă training, fii deschis la feedback și ajustări.",
      de: "Change Management: Grund kommunizieren, Vorteile zeigen, in Details einbeziehen, Training anbieten, offen für Feedback und Anpassungen sein.",
      en: "Change management: communicate reason, show benefits, involve in details, offer training, be open to feedback and adjustments."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare SLA de comunicare cu client premium. Metrici și angajamente?",
      de: "Entwicklung Kommunikations-SLA mit Premium-Kunden. Metriken und Zusagen?",
      en: "Developing communication SLA with premium client. Metrics and commitments?"
    },
    options: {
      ro: ["Fără SLA specific", "Timp răspuns (email 2h, urgent 30min), updates proactive, SPOC dedicat, raportare regulată, escaladare", "Doar disponibilitate 24/7", "Doar răspuns rapid"],
      de: ["Kein spezifisches SLA", "Antwortzeit (E-Mail 2h, dringend 30min), proaktive Updates, dedizierter SPOC, regelmäßiges Reporting, Eskalation", "Nur 24/7-Verfügbarkeit", "Nur schnelle Antwort"],
      en: ["No specific SLA", "Response time (email 2h, urgent 30min), proactive updates, dedicated SPOC, regular reporting, escalation", "Only 24/7 availability", "Only quick response"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SLA comunicare: răspuns email max 2h, urgențe 30 min, update status fără cerere, KAM dedicat, raport săptămânal, review lunar.",
      de: "Kommunikations-SLA: E-Mail-Antwort max 2h, Dringlichkeiten 30 Min, Statusupdate ohne Anfrage, dedizierter KAM, wöchentlicher Report, monatliches Review.",
      en: "Communication SLA: email response max 2h, urgencies 30 min, status update without request, dedicated KAM, weekly report, monthly review."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce rol joacă comunicarea non-verbală în întâlnirile de afaceri?",
      de: "Welche Rolle spielt nonverbale Kommunikation in Geschäftstreffen?",
      en: "What role does non-verbal communication play in business meetings?"
    },
    options: {
      ro: ["Niciun rol", "Transmite atitudine, încredere, interes - trebuie aliniată cu mesajul verbal", "Doar contează în persoană", "Doar pentru prezentări"],
      de: ["Keine Rolle", "Vermittelt Einstellung, Vertrauen, Interesse - muss mit verbaler Botschaft übereinstimmen", "Nur persönlich wichtig", "Nur für Präsentationen"],
      en: ["No role", "Conveys attitude, confidence, interest - must be aligned with verbal message", "Only matters in person", "Only for presentations"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Non-verbal: contact vizual (interes), postură (încredere), gestică (deschidere). 55% din comunicare e non-verbală. Aliniază cu vorbele.",
      de: "Nonverbal: Blickkontakt (Interesse), Haltung (Vertrauen), Gestik (Offenheit). 55% der Kommunikation ist nonverbal. Mit Worten abstimmen.",
      en: "Non-verbal: eye contact (interest), posture (confidence), gestures (openness). 55% of communication is non-verbal. Align with words."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum menții comunicarea eficientă într-o echipă remote/hibridă?",
      de: "Wie erhältst du effektive Kommunikation in einem Remote-/Hybrid-Team?",
      en: "How do you maintain effective communication in a remote/hybrid team?"
    },
    options: {
      ro: ["Doar email", "Canale clare, stand-up zilnic scurt, video pentru discuții importante, documentare, instrumente colaborative", "Doar la nevoie", "Doar întâlniri fizice"],
      de: ["Nur E-Mail", "Klare Kanäle, kurzes tägliches Stand-up, Video für wichtige Diskussionen, Dokumentation, kollaborative Tools", "Nur bei Bedarf", "Nur physische Meetings"],
      en: ["Only email", "Clear channels, short daily stand-up, video for important discussions, documentation, collaborative tools", "Only when needed", "Only physical meetings"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Remote eficient: check-in zilnic scurt, video pentru discuții complexe, Slack/Teams pentru rapiditate, documentare în cloud, întâlniri regulate.",
      de: "Effektives Remote: kurzer täglicher Check-in, Video für komplexe Diskussionen, Slack/Teams für Schnelligkeit, Cloud-Dokumentation, regelmäßige Meetings.",
      en: "Effective remote: short daily check-in, video for complex discussions, Slack/Teams for speed, cloud documentation, regular meetings."
    }
  }
];
