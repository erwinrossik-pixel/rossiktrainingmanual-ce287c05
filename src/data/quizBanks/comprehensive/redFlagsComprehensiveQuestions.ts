import { TranslatedQuizQuestion } from '../../quizTranslations';

export const redFlagsComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este un red flag major când evaluezi un nou transportator?",
      de: "Was ist ein Haupt-Red-Flag bei der Bewertung eines neuen Spediteurs?",
      en: "What is a major red flag when evaluating a new carrier?"
    },
    options: {
      ro: ["E prea ieftin", "Prețuri mult sub piață, licențe expirate, refuză să trimită documente, plată doar cash în avans", "E mic", "Nu vorbește engleza"],
      de: ["Zu billig", "Preise weit unter Markt, abgelaufene Lizenzen, weigert sich Dokumente zu senden, nur Barzahlung im Voraus", "Ist klein", "Spricht kein Englisch"],
      en: ["Too cheap", "Prices far below market, expired licenses, refuses to send documents, only cash payment in advance", "Is small", "Doesn't speak English"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Red flags carrier: prețuri suspecte de mici, nu trimite copii licențe/asigurări, cere plată 100% în avans, nu are adresă verificabilă, nu are recenzii sau referințe.",
      de: "Red Flags Carrier: verdächtig niedrige Preise, sendet keine Lizenz-/Versicherungskopien, fordert 100% Vorauszahlung, keine verifizierbare Adresse, keine Bewertungen oder Referenzen.",
      en: "Red flags carrier: suspiciously low prices, won't send license/insurance copies, demands 100% upfront payment, no verifiable address, no reviews or references."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce semnale de alarmă indică posibilă fraudă în documentația de transport?",
      de: "Welche Warnsignale deuten auf möglichen Dokumentenbetrug im Transport hin?",
      en: "What warning signs indicate possible fraud in transport documentation?"
    },
    options: {
      ro: ["Documente clare", "Ștampile neclare, date inconsistente, semnături diferite, formatare neobișnuită, greutăți imposibile", "Documente în germană", "Multe pagini"],
      de: ["Klare Dokumente", "Unklare Stempel, inkonsistente Daten, unterschiedliche Unterschriften, ungewöhnliche Formatierung, unmögliche Gewichte", "Dokumente auf Rumänisch", "Viele Seiten"],
      en: ["Clear documents", "Unclear stamps, inconsistent dates, different signatures, unusual formatting, impossible weights", "Documents in German", "Many pages"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fraudă documente: ștampile pixelate/duplicate, date care nu corespund, semnături vizibil diferite de altele, greutăți/dimensiuni imposibile pentru vehicul, CMR-uri cu numere consecutive suspecte.",
      de: "Dokumentenbetrug: pixelige/duplizierte Stempel, nicht übereinstimmende Daten, sichtbar unterschiedliche Unterschriften, unmögliche Gewichte/Maße für Fahrzeug, CMRs mit verdächtigen aufeinanderfolgenden Nummern.",
      en: "Document fraud: pixelated/duplicate stamps, dates that don't match, visibly different signatures, impossible weights/dimensions for vehicle, CMRs with suspicious consecutive numbers."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum identifici un client cu risc ridicat de neplată?",
      de: "Wie identifizierst du einen Kunden mit hohem Zahlungsausfallrisiko?",
      en: "How do you identify a client with high non-payment risk?"
    },
    options: {
      ro: ["Nu poți", "Întârzieri în plăți anterioare, evitare comunicare financiară, schimbări frecvente de contact, reclamații fără fundament pentru a amâna", "Doar clienți noi", "Doar clienți mici"],
      de: ["Geht nicht", "Frühere Zahlungsverzögerungen, Vermeidung finanzieller Kommunikation, häufige Kontaktwechsel, unbegründete Reklamationen zum Verzögern", "Nur Neukunden", "Nur kleine Kunden"],
      en: ["You can't", "Previous payment delays, avoiding financial communication, frequent contact changes, unfounded complaints to delay", "Only new clients", "Only small clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Risc neplată: istoric de întârzieri (chiar și la alții), nu răspunde la întrebări despre plăți, schimbă des persoanele de contact, inventează dispute pentru a amâna plata.",
      de: "Zahlungsausfallrisiko: Verzögerungshistorie (auch bei anderen), antwortet nicht auf Zahlungsfragen, wechselt häufig Ansprechpartner, erfindet Streitigkeiten um Zahlung zu verzögern.",
      en: "Non-payment risk: history of delays (even with others), doesn't answer payment questions, frequently changes contacts, invents disputes to delay payment."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Indicatori de potențial transport ilegal de migranți sau trafic de persoane?",
      de: "Indikatoren für potenziellen illegalen Migrantentransport oder Menschenhandel?",
      en: "Indicators of potential illegal migrant transport or human trafficking?"
    },
    options: {
      ro: ["Nu se poate detecta", "Destinație vagă, plata în numerar mare, evitare puncte de control, modificări vehicul (ascunzători)", "Doar poliția știe", "Nu e problema ta"],
      de: ["Nicht detektierbar", "Vages Ziel, große Barzahlung, Vermeidung von Kontrollpunkten, Fahrzeugmodifikationen (Verstecke)", "Nur Polizei weiß", "Nicht dein Problem"],
      en: ["Cannot detect", "Vague destination, large cash payment, avoidance of checkpoints, vehicle modifications (hiding spots)", "Only police knows", "Not your problem"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Semne trafic: client refuză detalii despre destinație/marfă, plată cash mare, rute care evită frontiere, modificări suspecte la vehicul, șofer nervos la controale - raportează imediat!",
      de: "Trafficking-Zeichen: Kunde verweigert Details über Ziel/Ware, große Barzahlung, Routen die Grenzen meiden, verdächtige Fahrzeugmodifikationen, Fahrer nervös bei Kontrollen - sofort melden!",
      en: "Trafficking signs: client refuses destination/goods details, large cash payment, routes avoiding borders, suspicious vehicle modifications, driver nervous at controls - report immediately!"
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce indică probleme financiare la un partener de afaceri (client sau carrier)?",
      de: "Was deutet auf finanzielle Probleme bei einem Geschäftspartner (Kunde oder Carrier) hin?",
      en: "What indicates financial problems at a business partner (client or carrier)?"
    },
    options: {
      ro: ["Cerere de reduceri", "Întârzieri plăți crescânde, reducere bruscă activitate, plecări angajați cheie, zvonuri în piață", "Birou mic", "Mai puține camioane"],
      de: ["Rabattanfrage", "Zunehmende Zahlungsverzögerungen, plötzlicher Aktivitätsrückgang, Abgang von Schlüsselmitarbeitern, Marktgerüchte", "Kleines Büro", "Weniger LKW"],
      en: ["Discount request", "Increasing payment delays, sudden activity reduction, key employee departures, market rumors", "Small office", "Fewer trucks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Probleme financiare: pattern de întârzieri în creștere, volume care scad brusc, pleacă oameni importanți, zvonuri negative în piață, evită discuții despre situația financiară.",
      de: "Finanzprobleme: zunehmendes Verzögerungsmuster, plötzlich sinkende Volumen, wichtige Leute gehen, negative Marktgerüchte, vermeidet Gespräche über Finanzsituation.",
      en: "Financial problems: increasing delay pattern, volumes suddenly dropping, important people leaving, negative market rumors, avoids discussions about financial situation."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Semne că un șofer externalizat ar putea fi implicat în activități ilegale?",
      de: "Zeichen dass ein externer Fahrer in illegale Aktivitäten verwickelt sein könnte?",
      en: "Signs that an external driver might be involved in illegal activities?"
    },
    options: {
      ro: ["Nu poți ști", "Abateri inexplicabile de rută, opriri neplanificate lungi, refuz GPS, schimbări de sigilii, comportament evasiv", "Accent diferit", "Mașină veche"],
      de: ["Kannst nicht wissen", "Unerklärliche Routenabweichungen, lange ungeplante Stopps, GPS-Verweigerung, Siegeländerungen, ausweichendes Verhalten", "Anderer Akzent", "Altes Auto"],
      en: ["Can't know", "Unexplained route deviations, long unplanned stops, GPS refusal, seal changes, evasive behavior", "Different accent", "Old car"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Șofer suspect: rute diferite de planificat fără explicație, opriri lungi în locuri neobișnuite, refuză tracking, sigilii rupte/schimbate, devine defensiv la întrebări simple.",
      de: "Verdächtiger Fahrer: Routen anders als geplant ohne Erklärung, lange Stopps an ungewöhnlichen Orten, verweigert Tracking, gebrochene/ausgetauschte Siegel, wird bei einfachen Fragen defensiv.",
      en: "Suspicious driver: routes different from planned without explanation, long stops in unusual places, refuses tracking, broken/exchanged seals, becomes defensive at simple questions."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Due diligence înainte de parteneriat cu firmă nouă de transport. Ce verifici pentru a evita riscuri majore?",
      de: "Due Diligence vor Partnerschaft mit neuem Transportunternehmen. Was prüfst du um Hauptrisiken zu vermeiden?",
      en: "Due diligence before partnership with new transport company. What do you check to avoid major risks?"
    },
    options: {
      ro: ["Doar site-ul web", "Registru comerț, licențe, asigurări, referințe, situații financiare, istoric litigii, vizită fizică", "Doar prețul", "Doar reputația"],
      de: ["Nur Website", "Handelsregister, Lizenzen, Versicherungen, Referenzen, Jahresabschlüsse, Rechtsstreitigkeitshistorie, physischer Besuch", "Nur Preis", "Nur Reputation"],
      en: ["Only website", "Trade register, licenses, insurance, references, financial statements, litigation history, physical visit", "Only price", "Only reputation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Due diligence: verificare registru comerț (acționari, istoric), licențe transport valide, polițe asigurare, referințe de la alți clienți, situații financiare, vizită la sediu și flotă.",
      de: "Due Diligence: Handelsregisterprüfung (Aktionäre, Historie), gültige Transportlizenzen, Versicherungspolicen, Referenzen von anderen Kunden, Jahresabschlüsse, Besuch am Standort und Flotte.",
      en: "Due diligence: trade register check (shareholders, history), valid transport licenses, insurance policies, references from other clients, financial statements, visit to site and fleet."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Cum recunoști o ofertă de transport suspicioasă pe o bursă de transport?",
      de: "Wie erkennst du ein verdächtiges Transportangebot auf einer Frachtbörse?",
      en: "How do you recognize a suspicious transport offer on a freight exchange?"
    },
    options: {
      ro: ["Preț prea bun", "Preț mult peste piață pentru rută simplă, contact doar prin mesaje, nu verifici firma, presiune mare de timp", "Mulți kilometri", "Weekend"],
      de: ["Zu guter Preis", "Preis weit über Markt für einfache Route, Kontakt nur per Nachrichten, Firma nicht überprüfen, großer Zeitdruck", "Viele Kilometer", "Wochenende"],
      en: ["Too good price", "Price far above market for simple route, contact only via messages, can't verify company, high time pressure", "Many kilometers", "Weekend"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ofertă suspicioasă: preț nerealitic (prea mare sau prea mic), firmă greu de verificat, comunicare doar prin platformă, presiune 'urgent' să accepți, condiții de plată ciudate.",
      de: "Verdächtiges Angebot: unrealistischer Preis (zu hoch oder niedrig), Firma schwer zu verifizieren, Kommunikation nur über Plattform, 'dringend' Druck zu akzeptieren, seltsame Zahlungsbedingungen.",
      en: "Suspicious offer: unrealistic price (too high or low), company hard to verify, communication only via platform, 'urgent' pressure to accept, weird payment terms."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Indicatori că marfa declarată nu corespunde cu realitatea?",
      de: "Indikatoren dass die deklarierte Ware nicht der Realität entspricht?",
      en: "Indicators that declared goods don't match reality?"
    },
    options: {
      ro: ["Nu poți verifica", "Greutate nu corespunde cu volumul, ambalaj neobișnuit, client evită inspecție, prețul transportului prea mare pentru marfă 'simplă'", "Doar la vamă", "Doar X-ray"],
      de: ["Kannst nicht prüfen", "Gewicht entspricht nicht Volumen, ungewöhnliche Verpackung, Kunde vermeidet Inspektion, Transportpreis zu hoch für 'einfache' Ware", "Nur am Zoll", "Nur Röntgen"],
      en: ["Can't verify", "Weight doesn't match volume, unusual packaging, client avoids inspection, transport price too high for 'simple' goods", "Only at customs", "Only X-ray"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marfă suspicioasă: greutate mare pentru volum mic (sau invers), ambalaj opac nestandard, client insistă să nu deschizi, plătește mult pentru marfă declarată 'fără valoare'.",
      de: "Verdächtige Ware: hohes Gewicht für kleines Volumen (oder umgekehrt), nicht standardmäßige undurchsichtige Verpackung, Kunde besteht darauf nicht zu öffnen, zahlt viel für 'wertlose' deklarierte Ware.",
      en: "Suspicious goods: high weight for small volume (or reverse), non-standard opaque packaging, client insists not to open, pays a lot for declared 'worthless' goods."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Sistem de Early Warning pentru detectarea problemelor cu parteneri de afaceri. Componente?",
      de: "Frühwarnsystem zur Erkennung von Problemen mit Geschäftspartnern. Komponenten?",
      en: "Early Warning system for detecting problems with business partners. Components?"
    },
    options: {
      ro: ["Doar intuiție", "Monitorizare KPIs plată/performanță, alertă schimbări companie, rețea de informații piață, review periodic", "Doar rating agenție", "Doar la probleme"],
      de: ["Nur Intuition", "Monitoring Zahlungs-/Performance-KPIs, Firmenwechsel-Alerts, Marktinformationsnetzwerk, periodisches Review", "Nur Agenturrating", "Nur bei Problemen"],
      en: ["Only intuition", "Monitoring payment/performance KPIs, company change alerts, market information network, periodic review", "Only agency rating", "Only at problems"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Early Warning: dashboard KPIs (DSO, claims, on-time), alerte automate la schimbări (administrator, adresă), network informații (asociații, colegi), review trimestrial parteneri mari.",
      de: "Frühwarnung: KPI-Dashboard (DSO, Claims, Pünktlichkeit), automatische Alerts bei Änderungen (Geschäftsführer, Adresse), Informationsnetzwerk (Verbände, Kollegen), quartalsweises Review großer Partner.",
      en: "Early Warning: KPI dashboard (DSO, claims, on-time), automatic alerts on changes (administrator, address), information network (associations, colleagues), quarterly review of major partners."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce comportament al clientului sugerează că încearcă să evite plata?",
      de: "Welches Kundenverhalten deutet darauf hin dass er versucht Zahlung zu vermeiden?",
      en: "What client behavior suggests they're trying to avoid payment?"
    },
    options: {
      ro: ["Negociază prețuri", "Dispute inventate constant, nu răspunde la facturi, promisiuni repetate fără acțiune, schimbă persoana de contact", "Cere reduceri", "Plătește la termen"],
      de: ["Verhandelt Preise", "Ständig erfundene Streitigkeiten, antwortet nicht auf Rechnungen, wiederholte Versprechen ohne Aktion, wechselt Ansprechpartner", "Fordert Rabatte", "Zahlt termingerecht"],
      en: ["Negotiates prices", "Constantly invented disputes, doesn't respond to invoices, repeated promises without action, changes contact person", "Asks for discounts", "Pays on time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Evitare plată: inventează probleme la fiecare factură, promite 'săptămâna viitoare' repetat, persoana responsabilă nu mai e disponibilă, cere documente deja trimise, schimbă subiectul.",
      de: "Zahlungsvermeidung: erfindet Probleme bei jeder Rechnung, verspricht wiederholt 'nächste Woche', zuständige Person nicht mehr erreichbar, fordert bereits gesendete Dokumente, wechselt Thema.",
      en: "Payment avoidance: invents problems at every invoice, repeatedly promises 'next week', responsible person no longer available, requests already sent documents, changes subject."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Semne de potențial conflict de interese în echipa ta sau la furnizori?",
      de: "Zeichen eines potenziellen Interessenkonflikts in deinem Team oder bei Lieferanten?",
      en: "Signs of potential conflict of interest in your team or suppliers?"
    },
    options: {
      ro: ["Nu există", "Același furnizor câștigă mereu, relații personale nedeclarate, cadouri neobișnuite, refuz de a considera alternative", "Doar dacă fură", "Doar management"],
      de: ["Gibt es nicht", "Gleicher Lieferant gewinnt immer, nicht deklarierte persönliche Beziehungen, ungewöhnliche Geschenke, Weigerung Alternativen zu prüfen", "Nur wenn stiehlt", "Nur Management"],
      en: ["Doesn't exist", "Same supplier always wins, undeclared personal relationships, unusual gifts, refusal to consider alternatives", "Only if stealing", "Only management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conflict interese: un furnizor câștigă 100% fără licitație, angajat și furnizor au legături personale nedeclarate, cadouri excesive, rezistență la a încerca alți furnizori.",
      de: "Interessenkonflikt: ein Lieferant gewinnt 100% ohne Ausschreibung, Mitarbeiter und Lieferant haben nicht deklarierte persönliche Verbindungen, übermäßige Geschenke, Widerstand andere Lieferanten zu probieren.",
      en: "Conflict of interest: one supplier wins 100% without tender, employee and supplier have undeclared personal ties, excessive gifts, resistance to trying other suppliers."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Fraudă internă în companie de transport: ce controale implementezi pentru prevenție?",
      de: "Interner Betrug in Transportunternehmen: welche Kontrollen implementierst du zur Prävention?",
      en: "Internal fraud in transport company: what controls do you implement for prevention?"
    },
    options: {
      ro: ["Încredere totală", "Segregarea sarcinilor, audit regulat, reconcilieri, limite aprobare, whistleblowing, rotație responsabilități", "Doar camere video", "Doar concediere"],
      de: ["Totales Vertrauen", "Aufgabentrennung, regelmäßiges Audit, Abstimmungen, Genehmigungslimits, Whistleblowing, Verantwortungsrotation", "Nur Videokameras", "Nur Kündigung"],
      en: ["Total trust", "Segregation of duties, regular audit, reconciliations, approval limits, whistleblowing, responsibility rotation", "Only video cameras", "Only dismissal"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Controale anti-fraudă: cine creează furnizor ≠ cine aprobă plata, audit surprise, reconcilieri independente, limite de aprobare pe nivele, canal anonim de raportare, rotație periodică sarcini.",
      de: "Anti-Betrugs-Kontrollen: wer Lieferant anlegt ≠ wer Zahlung genehmigt, Überraschungsaudit, unabhängige Abstimmungen, stufenweise Genehmigungslimits, anonymer Meldekanal, periodische Aufgabenrotation.",
      en: "Anti-fraud controls: who creates supplier ≠ who approves payment, surprise audit, independent reconciliations, tiered approval limits, anonymous reporting channel, periodic task rotation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Semne că un contract propus are clauze problematice?",
      de: "Zeichen dass ein vorgeschlagener Vertrag problematische Klauseln hat?",
      en: "Signs that a proposed contract has problematic clauses?"
    },
    options: {
      ro: ["Multe pagini", "Răspundere nelimitată, penalități disproporționate, termene de plată foarte lungi, clauze de exclusivitate ascunse", "Limbaj juridic", "Format diferit"],
      de: ["Viele Seiten", "Unbegrenzte Haftung, unverhältnismäßige Strafen, sehr lange Zahlungsfristen, versteckte Exklusivitätsklauseln", "Juristische Sprache", "Anderes Format"],
      en: ["Many pages", "Unlimited liability, disproportionate penalties, very long payment terms, hidden exclusivity clauses", "Legal language", "Different format"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clauze problematice: răspundere fără limită, penalități automate mari pentru întârzieri minore, termene plată 90+ zile, exclusivitate care te blochează, clauze de terminare unilaterale.",
      de: "Problematische Klauseln: unbegrenzte Haftung, große automatische Strafen für kleine Verzögerungen, Zahlungsfristen 90+ Tage, blockierende Exklusivität, einseitige Kündigungsklauseln.",
      en: "Problematic clauses: unlimited liability, large automatic penalties for minor delays, 90+ day payment terms, blocking exclusivity, unilateral termination clauses."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Indicatori că un client folosește compania ta pentru spălare de bani?",
      de: "Indikatoren dass ein Kunde dein Unternehmen für Geldwäsche nutzt?",
      en: "Indicators that a client is using your company for money laundering?"
    },
    options: {
      ro: ["Plătește la timp", "Plăți cash mari, transporturi fictive, prețuri mult peste/sub piață fără justificare, structuri complicate", "Clienți mari", "Nu se poate ști"],
      de: ["Zahlt pünktlich", "Große Barzahlungen, fiktive Transporte, Preise weit über/unter Markt ohne Begründung, komplizierte Strukturen", "Große Kunden", "Kann man nicht wissen"],
      en: ["Pays on time", "Large cash payments, fictitious transports, prices far above/below market without justification, complicated structures", "Large clients", "Can't know"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Semne spălare: plăți cash nejustificate, transporturi care par fictive, prețuri care nu au sens economic, multiple companii interpuse, evită documentație, presiune să accepți fără întrebări.",
      de: "Geldwäsche-Zeichen: ungerechtfertigte Barzahlungen, scheinbar fiktive Transporte, wirtschaftlich unsinnige Preise, mehrere zwischengeschaltete Firmen, vermeidet Dokumentation, Druck ohne Fragen zu akzeptieren.",
      en: "Laundering signs: unjustified cash payments, seemingly fictitious transports, economically senseless prices, multiple intermediary companies, avoids documentation, pressure to accept without questions."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Evaluare risc complet pentru un nou client mare (20% din potențialul business). Framework?",
      de: "Vollständige Risikobewertung für einen neuen Großkunden (20% des potenziellen Geschäfts). Framework?",
      en: "Complete risk evaluation for a new major client (20% of potential business). Framework?"
    },
    options: {
      ro: ["Doar credit check", "Credit, operațional, reputațional, strategic, legal - cu mitigation pentru fiecare", "Doar referințe", "Doar intuiție"],
      de: ["Nur Kreditprüfung", "Kredit, operativ, reputational, strategisch, rechtlich - mit Mitigation für jeden", "Nur Referenzen", "Nur Intuition"],
      en: ["Only credit check", "Credit, operational, reputational, strategic, legal - with mitigation for each", "Only references", "Only intuition"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Risk framework: 1) Credit (capacitate de plată), 2) Operațional (putem livra?), 3) Reputațional (cine sunt?), 4) Strategic (dependență?), 5) Legal (contracte OK?). Mitigare pentru fiecare risc identificat.",
      de: "Risiko-Framework: 1) Kredit (Zahlungsfähigkeit), 2) Operativ (können wir liefern?), 3) Reputational (wer sind sie?), 4) Strategisch (Abhängigkeit?), 5) Rechtlich (Verträge OK?). Mitigation für jedes identifizierte Risiko.",
      en: "Risk framework: 1) Credit (payment ability), 2) Operational (can we deliver?), 3) Reputational (who are they?), 4) Strategic (dependency?), 5) Legal (contracts OK?). Mitigation for each identified risk."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce comportament la încărcare/descărcare ar trebui să ridice suspiciuni?",
      de: "Welches Verhalten beim Be-/Entladen sollte Verdacht erregen?",
      en: "What behavior at loading/unloading should raise suspicions?"
    },
    options: {
      ro: ["Grabă normală", "Insistență să nu fie martor, încărcare/descărcare în locații neoficiale, refuz să verifice marfa, nervozitate", "Muncitori mulți", "Noapte"],
      de: ["Normale Eile", "Beharren auf keine Zeugen, Be-/Entladung an inoffiziellen Orten, Weigerung Ware zu prüfen, Nervosität", "Viele Arbeiter", "Nacht"],
      en: ["Normal rush", "Insistence on no witnesses, loading/unloading at unofficial locations, refusal to check goods, nervousness", "Many workers", "Night"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comportament suspect la încărcare: nu vrea martori/fotografii, locație izolată în loc de depozit oficial, refuză să arăte marfa, extrem de nervos sau agresiv la întrebări normale.",
      de: "Verdächtiges Ladeverhalten: will keine Zeugen/Fotos, isolierter Ort statt offiziellem Lager, weigert sich Ware zu zeigen, extrem nervös oder aggressiv bei normalen Fragen.",
      en: "Suspicious loading behavior: doesn't want witnesses/photos, isolated location instead of official warehouse, refuses to show goods, extremely nervous or aggressive at normal questions."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum verifici autenticitatea unei asigurări de transport prezentată de un carrier?",
      de: "Wie überprüfst du die Echtheit einer von einem Carrier präsentierten Transportversicherung?",
      en: "How do you verify the authenticity of a transport insurance presented by a carrier?"
    },
    options: {
      ro: ["Crezi pe cuvânt", "Contactezi direct asigurătorul, verifici numărul poliței, confirmi acoperirea și valabilitatea", "Doar uiți la document", "Doar dacă are ștampilă"],
      de: ["Glaubst auf Wort", "Versicherer direkt kontaktieren, Policennummer prüfen, Deckung und Gültigkeit bestätigen", "Nur Dokument ansehen", "Nur wenn Stempel hat"],
      en: ["Trust their word", "Contact insurer directly, verify policy number, confirm coverage and validity", "Only look at document", "Only if has stamp"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificare asigurare: suni direct la asigurător (nu la numărul de pe document!), verifici că polița e activă, confirmi acoperirea (CMR, valoare), verifici că transportatorul e cel asigurat.",
      de: "Versicherungsprüfung: direkt beim Versicherer anrufen (nicht die Nummer auf dem Dokument!), prüfen ob Police aktiv ist, Deckung bestätigen (CMR, Wert), prüfen ob Spediteur der Versicherte ist.",
      en: "Insurance verification: call insurer directly (not the number on document!), check policy is active, confirm coverage (CMR, value), verify carrier is the insured party."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Investigație internă după suspiciune de fraudă. Pași și considerații legale?",
      de: "Interne Untersuchung nach Betrugsverdacht. Schritte und rechtliche Erwägungen?",
      en: "Internal investigation after fraud suspicion. Steps and legal considerations?"
    },
    options: {
      ro: ["Concediezi imediat", "Documentare, conservare dovezi, investigație discretă, consultare juridică, proces HR corect", "Anunți poliția imediat", "Ignori dacă sumă mică"],
      de: ["Sofort entlassen", "Dokumentation, Beweissicherung, diskrete Untersuchung, rechtliche Beratung, korrekter HR-Prozess", "Sofort Polizei rufen", "Bei kleinem Betrag ignorieren"],
      en: ["Fire immediately", "Documentation, evidence preservation, discreet investigation, legal consultation, proper HR process", "Call police immediately", "Ignore if small amount"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Investigație fraudă: conservă dovezi imediat (email, documente), investigație discretă, consultă avocat înainte de acțiuni, respectă drepturile angajatului, proces HR corect, decide dacă anunți poliția.",
      de: "Betrugsuntersuchung: Beweise sofort sichern (E-Mail, Dokumente), diskrete Untersuchung, Anwalt vor Maßnahmen konsultieren, Mitarbeiterrechte respektieren, korrekter HR-Prozess, entscheiden ob Polizei informieren.",
      en: "Fraud investigation: preserve evidence immediately (email, documents), discreet investigation, consult lawyer before actions, respect employee rights, proper HR process, decide whether to notify police."
    }
  }
];
