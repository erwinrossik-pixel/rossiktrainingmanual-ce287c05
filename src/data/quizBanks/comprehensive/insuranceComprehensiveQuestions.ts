import { TranslatedQuizQuestion } from '../../quizTranslations';

export const insuranceComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este asigurarea CMR?",
      de: "Was ist die CMR-Versicherung?",
      en: "What is CMR insurance?"
    },
    options: {
      ro: ["Asigurare auto", "Asigurarea răspunderii transportatorului conform Convenției CMR", "Asigurare de viață", "Asigurare medicală"],
      de: ["Autoversicherung", "Haftpflichtversicherung des Transportunternehmers gemäß CMR-Konvention", "Lebensversicherung", "Krankenversicherung"],
      en: ["Car insurance", "Carrier liability insurance according to CMR Convention", "Life insurance", "Health insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR: asigură răspunderea transportatorului pentru pierdere/daună marfă. Limita standard: 8,33 SDR/kg (aprox. 10€/kg).",
      de: "CMR: versichert Haftung des Transportunternehmers für Verlust/Schaden der Fracht. Standardlimit: 8,33 SZR/kg (ca. 10€/kg).",
      en: "CMR: insures carrier liability for cargo loss/damage. Standard limit: 8.33 SDR/kg (approx. €10/kg)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este limita de răspundere CMR per kg?",
      de: "Was ist das CMR-Haftungslimit pro kg?",
      en: "What is the CMR liability limit per kg?"
    },
    options: {
      ro: ["100€/kg", "8,33 SDR/kg (aproximativ 10€/kg)", "1€/kg", "50€/kg"],
      de: ["100€/kg", "8,33 SZR/kg (ungefähr 10€/kg)", "1€/kg", "50€/kg"],
      en: ["€100/kg", "8.33 SDR/kg (approximately €10/kg)", "€1/kg", "€50/kg"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR Art. 23: limita = 8,33 SDR × greutate brută kg. Pentru marfă ușoară dar valoroasă, CMR-ul acoperă doar fracțiune din valoare.",
      de: "CMR Art. 23: Limit = 8,33 SZR × Bruttogewicht kg. Für leichte aber wertvolle Fracht deckt CMR nur Bruchteil des Wertes.",
      en: "CMR Art. 23: limit = 8.33 SDR × gross weight kg. For light but valuable cargo, CMR covers only fraction of value."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este asigurarea all-risk cargo și când e necesară?",
      de: "Was ist All-Risk-Frachtversicherung und wann ist sie notwendig?",
      en: "What is all-risk cargo insurance and when is it needed?"
    },
    options: {
      ro: ["Obligatorie mereu", "Asigurare completă pentru valoarea mărfii, necesară pentru high-value sau când CMR nu acoperă suficient", "Doar pentru ADR", "Doar în UE"],
      de: ["Immer obligatorisch", "Vollversicherung für Frachtwert, notwendig für High-Value oder wenn CMR nicht ausreichend deckt", "Nur für ADR", "Nur in EU"],
      en: ["Always mandatory", "Full insurance for cargo value, needed for high-value or when CMR doesn't cover enough", "Only for ADR", "Only in EU"]
    },
    correctIndex: 1,
    explanation: {
      ro: "All-risk: acoperă valoarea integrală a mărfii indiferent de greutate. Esențial pentru electronice, pharma, fashion - unde valoarea/kg e ridicată.",
      de: "All-Risk: deckt vollen Frachtwert unabhängig vom Gewicht. Wesentlich für Elektronik, Pharma, Mode - wo Wert/kg hoch ist.",
      en: "All-risk: covers full cargo value regardless of weight. Essential for electronics, pharma, fashion - where value/kg is high."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport 10 tone electronice, valoare 500.000€. CMR acoperă doar 83.300€. Soluții de asigurare?",
      de: "Transport 10 Tonnen Elektronik, Wert 500.000€. CMR deckt nur 83.300€. Versicherungslösungen?",
      en: "Transporting 10 tons electronics, value €500,000. CMR covers only €83,300. Insurance solutions?"
    },
    options: {
      ro: ["Accepți riscul", "All-risk cargo insurance pentru 500k€ sau declarație valoare specială în CMR cu primă suplimentară", "Doar CMR e suficient", "Refuzi transportul"],
      de: ["Risiko akzeptieren", "All-Risk-Frachtversicherung für 500k€ oder Sonderwertdeklaration in CMR mit Zusatzprämie", "Nur CMR ist genug", "Transport ablehnen"],
      en: ["Accept risk", "All-risk cargo insurance for €500k or special value declaration in CMR with extra premium", "Only CMR is enough", "Refuse transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Calcul: 10.000kg × 8,33 SDR × 1€ = ~83.300€. Diferență 416.700€ neacoperită! Soluții: all-risk 500k sau Art. 24 CMR (valoare declarată).",
      de: "Berechnung: 10.000kg × 8,33 SZR × 1€ = ~83.300€. Differenz 416.700€ ungedeckt! Lösungen: All-Risk 500k oder Art. 24 CMR (deklarierter Wert).",
      en: "Calculation: 10,000kg × 8.33 SDR × €1 = ~€83,300. Difference €416,700 uncovered! Solutions: all-risk €500k or Art. 24 CMR (declared value)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce exclusiuni standard are o poliță de asigurare cargo?",
      de: "Welche Standardausschlüsse hat eine Frachtversicherungspolice?",
      en: "What standard exclusions does a cargo insurance policy have?"
    },
    options: {
      ro: ["Nicio exclusiune", "Ambalaj necorespunzător, viciu propriu mărfii, război, sancțiuni, întârziere", "Doar accidente", "Doar furt"],
      de: ["Keine Ausschlüsse", "Unzureichende Verpackung, inhärente Mängel, Krieg, Sanktionen, Verzögerung", "Nur Unfälle", "Nur Diebstahl"],
      en: ["No exclusions", "Inadequate packaging, inherent vice, war, sanctions, delay", "Only accidents", "Only theft"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Exclusiuni tipice: ambalaj deficitar, natura mărfii (descompunere), război/terorism, sancțiuni, daune din întârziere, uzură normală.",
      de: "Typische Ausschlüsse: mangelnde Verpackung, Warenbeschaffenheit (Verderb), Krieg/Terrorismus, Sanktionen, Verzögerungsschäden, normale Abnutzung.",
      en: "Typical exclusions: poor packaging, nature of goods (spoilage), war/terrorism, sanctions, delay damages, normal wear."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum verifici valabilitatea poliței de asigurare a unui transportator?",
      de: "Wie überprüfst du die Gültigkeit der Versicherungspolice eines Transportunternehmers?",
      en: "How do you verify the validity of a carrier's insurance policy?"
    },
    options: {
      ro: ["Crezi pe cuvânt", "Verifici polița originală: valabilitate, limite, teritorialitate, exclusiuni, confirmare asigurător", "Nu verifici", "Doar dacă e scump"],
      de: ["Glaubst auf Wort", "Originalpolice prüfen: Gültigkeit, Limits, Territorialität, Ausschlüsse, Versichererbestätigung", "Nicht prüfen", "Nur wenn teuer"],
      en: ["Trust their word", "Check original policy: validity, limits, territoriality, exclusions, insurer confirmation", "Don't verify", "Only if expensive"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificare: cere poliță + certificat, verifică perioada valabilitate, limite per incident, acoperire geografică, exclusiuni relevante, contactează brokerul/asigurătorul.",
      de: "Prüfung: Police + Zertifikat anfordern, Gültigkeitszeitraum prüfen, Limits pro Vorfall, geografische Deckung, relevante Ausschlüsse, Makler/Versicherer kontaktieren.",
      en: "Verification: request policy + certificate, check validity period, limits per incident, geographic coverage, relevant exclusions, contact broker/insurer."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Structurare program de asigurări pentru flotă de 50 camioane și 200M€ marfă/an. Componente?",
      de: "Strukturierung Versicherungsprogramm für 50-LKW-Flotte und 200M€ Fracht/Jahr. Komponenten?",
      en: "Structuring insurance program for 50-truck fleet and €200M cargo/year. Components?"
    },
    options: {
      ro: ["Doar CMR", "CMR, cargo all-risk, răspundere civilă, flotă auto, D&O, cyber, business interruption", "Doar flotă auto", "Fără asigurări"],
      de: ["Nur CMR", "CMR, Cargo All-Risk, Betriebshaftpflicht, Kfz-Flotte, D&O, Cyber, Betriebsunterbrechung", "Nur Kfz-Flotte", "Keine Versicherungen"],
      en: ["Only CMR", "CMR, cargo all-risk, general liability, fleet auto, D&O, cyber, business interruption", "Only fleet auto", "No insurances"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Program complet: CMR 1M€/eveniment, cargo open cover 200M€, răspundere civilă 5M€, CASCO flotă, D&O, cyber liability, business interruption.",
      de: "Vollständiges Programm: CMR 1M€/Ereignis, Cargo Open Cover 200M€, Betriebshaftpflicht 5M€, Flotten-KASKO, D&O, Cyber-Haftung, Betriebsunterbrechung.",
      en: "Complete program: CMR €1M/event, cargo open cover €200M, general liability €5M, fleet comprehensive, D&O, cyber liability, business interruption."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este o franșiză (deductibilă) în asigurări?",
      de: "Was ist eine Selbstbeteiligung (Franchise) bei Versicherungen?",
      en: "What is a deductible (franchise) in insurance?"
    },
    options: {
      ro: ["Bonus", "Suma pe care asiguratul o plătește din buzunar înainte ca asigurarea să acopere restul", "Prima de asigurare", "Comision broker"],
      de: ["Bonus", "Betrag den der Versicherte aus eigener Tasche zahlt bevor die Versicherung den Rest deckt", "Versicherungsprämie", "Maklerprovision"],
      en: ["Bonus", "Amount the insured pays out of pocket before insurance covers the rest", "Insurance premium", "Broker commission"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Franșiză: ex. 1.000€ deductibilă. La daună 5.000€, asiguratul plătește 1.000€, asigurătorul 4.000€. Franșiză mare = primă mai mică.",
      de: "Selbstbeteiligung: z.B. 1.000€. Bei Schaden 5.000€ zahlt Versicherter 1.000€, Versicherer 4.000€. Höhere Selbstbeteiligung = niedrigere Prämie.",
      en: "Deductible: e.g., €1,000. For €5,000 damage, insured pays €1,000, insurer €4,000. Higher deductible = lower premium."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt diferențele între asigurarea expeditorului și cea a transportatorului?",
      de: "Was sind die Unterschiede zwischen Spediteur- und Transportunternehmerversicherung?",
      en: "What are the differences between forwarder and carrier insurance?"
    },
    options: {
      ro: ["Aceleași", "Expeditor: răspundere limitată, organizează. Carrier: CMR, execută efectiv transportul cu vehicul propriu", "Doar prețul diferă", "Nu există diferență"],
      de: ["Gleich", "Spediteur: begrenzte Haftung, organisiert. Carrier: CMR, führt Transport tatsächlich mit eigenem Fahrzeug aus", "Nur Preis unterscheidet sich", "Kein Unterschied"],
      en: ["Same", "Forwarder: limited liability, organizes. Carrier: CMR, actually executes transport with own vehicle", "Only price differs", "No difference"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expeditor: răspunde pentru alegerea transportatorului, asigurare de răspundere profesională. Carrier: răspundere CMR directă pentru marfă.",
      de: "Spediteur: haftet für Auswahl des Transportunternehmers, Berufshaftpflichtversicherung. Carrier: direkte CMR-Haftung für Fracht.",
      en: "Forwarder: liable for carrier selection, professional liability insurance. Carrier: direct CMR liability for cargo."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Daună cargo 300.000€, polița CMR a transportatorului are limită 100.000€/incident. Cine plătește diferența?",
      de: "Frachtschaden 300.000€, CMR-Police des Carriers hat Limit 100.000€/Vorfall. Wer zahlt die Differenz?",
      en: "Cargo damage €300,000, carrier's CMR policy has €100,000/incident limit. Who pays the difference?"
    },
    options: {
      ro: ["Asigurătorul tot", "Transportatorul din fonduri proprii diferența neacoperită, dacă nu are asigurare suplimentară", "Nimeni", "Clientul întotdeauna"],
      de: ["Versicherer alles", "Transportunternehmer aus eigenen Mitteln für ungedeckte Differenz, wenn keine Zusatzversicherung", "Niemand", "Kunde immer"],
      en: ["Insurer everything", "Carrier from own funds for uncovered difference, if no additional insurance", "No one", "Client always"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Asigurătorul: 100.000€. Transportatorul răspunde pentru 200.000€ diferență din active proprii. De aceea verifici limitele poliței înainte!",
      de: "Versicherer: 100.000€. Transportunternehmer haftet für 200.000€ Differenz aus eigenen Mitteln. Deshalb Policenlimits vorher prüfen!",
      en: "Insurer: €100,000. Carrier liable for €200,000 difference from own assets. That's why verify policy limits beforehand!"
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un certificat de asigurare?",
      de: "Was ist ein Versicherungszertifikat?",
      en: "What is a certificate of insurance?"
    },
    options: {
      ro: ["Diploma", "Document care confirmă existența poliței, limitele și perioada de valabilitate", "Factură", "Contract de transport"],
      de: ["Diplom", "Dokument das Existenz der Police, Limits und Gültigkeitszeitraum bestätigt", "Rechnung", "Transportvertrag"],
      en: ["Diploma", "Document confirming policy existence, limits and validity period", "Invoice", "Transport contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Certificat: emis de asigurător/broker, confirmă polița activă, limite acoperire, teritoriu, poate fi cerut de clienți sau parteneri.",
      de: "Zertifikat: von Versicherer/Makler ausgestellt, bestätigt aktive Police, Deckungslimits, Territorium, kann von Kunden oder Partnern angefordert werden.",
      en: "Certificate: issued by insurer/broker, confirms active policy, coverage limits, territory, can be requested by clients or partners."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi primele de asigurare cargo pentru un client?",
      de: "Wie berechnest du Frachtversicherungsprämien für einen Kunden?",
      en: "How do you calculate cargo insurance premiums for a client?"
    },
    options: {
      ro: ["Fix 1%", "Rată per mille × valoare marfă, variind după tip marfă, rută, istoric daune", "Doar negociere", "Mereu gratis"],
      de: ["Fix 1%", "Rate pro Mille × Frachtwert, variierend nach Warentyp, Route, Schadenshistorie", "Nur Verhandlung", "Immer gratis"],
      en: ["Fixed 1%", "Rate per mille × cargo value, varying by cargo type, route, claims history", "Only negotiation", "Always free"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Primă: rată (0.05-0.5%) × valoare. Electronice: 0.3%. Textil: 0.1%. Rută risc înalt: +50%. Istoric daune prost: +100%.",
      de: "Prämie: Rate (0,05-0,5%) × Wert. Elektronik: 0,3%. Textil: 0,1%. Hochrisikoroute: +50%. Schlechte Schadenshistorie: +100%.",
      en: "Premium: rate (0.05-0.5%) × value. Electronics: 0.3%. Textile: 0.1%. High-risk route: +50%. Poor claims history: +100%."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client cere să fii co-asigurat pe polița lui de cargo. Implicații și beneficii?",
      de: "Kunde verlangt dass du auf seiner Cargo-Police mitversichert wirst. Auswirkungen und Vorteile?",
      en: "Client requests you to be co-insured on their cargo policy. Implications and benefits?"
    },
    options: {
      ro: ["Refuzi", "Protecție suplimentară împotriva reclamațiilor, dar verifică condițiile și dacă nu îți limitează drepturile", "Nu contează", "Accepți orice"],
      de: ["Ablehnen", "Zusätzlicher Schutz gegen Ansprüche, aber Bedingungen prüfen und ob Rechte nicht eingeschränkt werden", "Egal", "Alles akzeptieren"],
      en: ["Refuse", "Additional protection against claims, but verify conditions and if it doesn't limit your rights", "Doesn't matter", "Accept anything"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Co-asigurat: polița clientului te acoperă și pe tine în caz de daună. Verifică: waiver of subrogation, limite, dacă nu contravine CMR-ului tău.",
      de: "Mitversichert: Kundenpolice deckt auch dich bei Schaden. Prüfen: Subrogationsverzicht, Limits, ob nicht CMR widerspricht.",
      en: "Co-insured: client's policy covers you too in case of damage. Verify: waiver of subrogation, limits, if doesn't contradict your CMR."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tipuri de asigurare reefer sunt necesare pentru transport frigorific?",
      de: "Welche Kühlversicherungsarten sind für Kühltransport notwendig?",
      en: "What types of reefer insurance are needed for refrigerated transport?"
    },
    options: {
      ro: ["Doar CMR", "CMR + extensie breakdown frigorific + spoilage cover pentru deviații temperatură", "Doar auto", "Nu e necesară"],
      de: ["Nur CMR", "CMR + Kühlgeräteausfall-Erweiterung + Verderbnisdeckung für Temperaturabweichungen", "Nur Auto", "Nicht notwendig"],
      en: ["Only CMR", "CMR + refrigeration breakdown extension + spoilage cover for temperature deviations", "Only auto", "Not necessary"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reefer: CMR de bază + extensie pentru defecțiune agregat frigorific + acoperire pentru alterare marfă din cauza temperaturii. Verifică exclusiunile!",
      de: "Reefer: Basis-CMR + Erweiterung für Kühlaggregatausfall + Deckung für Warenverderb durch Temperatur. Ausschlüsse prüfen!",
      en: "Reefer: basic CMR + extension for refrigeration unit breakdown + coverage for cargo spoilage from temperature. Check exclusions!"
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum procesezi o cerere de despăgubire (claim) către asigurător?",
      de: "Wie bearbeitest du einen Schadensersatzanspruch (Claim) beim Versicherer?",
      en: "How do you process a compensation claim to insurer?"
    },
    options: {
      ro: ["Doar telefon", "Notificare în termenul contractual, documentație completă, foto, CMR, factură, corespondență, cooperare cu expertul", "Doar email scurt", "Aștepți să te contacteze"],
      de: ["Nur Telefon", "Meldung innerhalb Vertragsfrist, vollständige Dokumentation, Fotos, CMR, Rechnung, Korrespondenz, Kooperation mit Gutachter", "Nur kurze E-Mail", "Warten bis sie kontaktieren"],
      en: ["Only phone", "Notification within contractual term, complete documentation, photos, CMR, invoice, correspondence, cooperation with adjuster", "Only short email", "Wait for them to contact"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Claim: notificare rapidă (24-72h), dosar: CMR cu rezerve, poze daune, factură comercială, corespondență, estimare pagubă, cooperare la investigație.",
      de: "Claim: schnelle Meldung (24-72h), Akte: CMR mit Vorbehalten, Schadensfotos, Handelsrechnung, Korrespondenz, Schadensschätzung, Kooperation bei Untersuchung.",
      en: "Claim: quick notification (24-72h), file: CMR with reservations, damage photos, commercial invoice, correspondence, damage estimate, cooperation in investigation."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Negociere renewal asigurări cu 15% claims ratio anul trecut. Strategie pentru menținerea primelor?",
      de: "Versicherungsverlängerungsverhandlung mit 15% Claims Ratio letztes Jahr. Strategie zur Prämienerhaltung?",
      en: "Insurance renewal negotiation with 15% claims ratio last year. Strategy for maintaining premiums?"
    },
    options: {
      ro: ["Accepți creșterea", "Prezinți măsuri de prevenție implementate, excludi incidente atipice, competiție brokers, creștere franșiză opțional", "Schimbi asigurătorul", "Renunți la asigurare"],
      de: ["Erhöhung akzeptieren", "Implementierte Präventionsmaßnahmen präsentieren, atypische Vorfälle ausschließen, Makler-Wettbewerb, optionale Selbstbeteiligungserhöhung", "Versicherer wechseln", "Auf Versicherung verzichten"],
      en: ["Accept increase", "Present implemented prevention measures, exclude atypical incidents, broker competition, optional deductible increase", "Change insurer", "Give up insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Renewal strategy: arată acțiuni corective post-daune, exclude one-offs din statistici, solicită oferte competitive, propune franșiză mai mare pentru primă stabilă.",
      de: "Verlängerungsstrategie: Korrekturmaßnahmen nach Schäden zeigen, Einmalfälle aus Statistik ausschließen, Konkurrenzangebote anfordern, höhere Selbstbeteiligung für stabile Prämie vorschlagen.",
      en: "Renewal strategy: show corrective actions post-claims, exclude one-offs from statistics, request competitive offers, propose higher deductible for stable premium."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă subrogație în asigurări?",
      de: "Was bedeutet Subrogation bei Versicherungen?",
      en: "What does subrogation mean in insurance?"
    },
    options: {
      ro: ["Un tip de poliță", "Dreptul asigurătorului de a recupera de la vinovat sumele plătite asiguratului", "Anulare poliță", "Schimbare asigurator"],
      de: ["Ein Policentyp", "Recht des Versicherers Beträge vom Schuldigen zurückzufordern die an Versicherten gezahlt wurden", "Policenstornierung", "Versichererwechsel"],
      en: ["A policy type", "Right of insurer to recover from wrongdoer amounts paid to insured", "Policy cancellation", "Insurer change"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Subrogație: după ce plătește dauna, asigurătorul 'intră în locul' asiguratului și poate urmări transportatorul vinovat pentru recuperare.",
      de: "Subrogation: nach Schadenszahlung 'tritt Versicherer an Stelle' des Versicherten und kann schuldigen Transportunternehmer zur Rückforderung verfolgen.",
      en: "Subrogation: after paying damage, insurer 'steps into shoes' of insured and can pursue guilty carrier for recovery."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce acoperire de asigurare e necesară pentru transport ADR?",
      de: "Welche Versicherungsdeckung ist für ADR-Transport notwendig?",
      en: "What insurance coverage is needed for ADR transport?"
    },
    options: {
      ro: ["Doar CMR standard", "CMR ADR extinsă, răspundere mediu, daune terți din contaminare, limite mai mari", "Nu e diferită", "Doar răspundere civilă"],
      de: ["Nur Standard-CMR", "Erweiterte ADR-CMR, Umwelthaftung, Drittschäden durch Kontamination, höhere Limits", "Nicht anders", "Nur Haftpflicht"],
      en: ["Only standard CMR", "Extended ADR CMR, environmental liability, third-party contamination damages, higher limits", "Not different", "Only liability"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ADR insurance: CMR cu extensie pericole specifice, răspundere pentru poluare/contaminare, limite crescute (2-5M€), acoperire curățare decontaminare.",
      de: "ADR-Versicherung: CMR mit Erweiterung spezifischer Gefahren, Haftung für Verschmutzung/Kontamination, erhöhte Limits (2-5M€), Dekontaminierungsdeckung.",
      en: "ADR insurance: CMR with specific hazards extension, pollution/contamination liability, increased limits (€2-5M), decontamination cleanup coverage."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Construire tender pentru program de asigurări corporativ. Specificații și criterii de evaluare?",
      de: "Aufbau Tender für Unternehmensversicherungsprogramm. Spezifikationen und Bewertungskriterien?",
      en: "Building tender for corporate insurance program. Specifications and evaluation criteria?"
    },
    options: {
      ro: ["Doar prețul cel mai mic", "Profile risc detaliate, limite cerute, teritorialitate, claims handling SLA, soliditate asigurător, servicii added-value", "Doar un broker", "Fără specificații"],
      de: ["Nur niedrigster Preis", "Detaillierte Risikoprofile, erforderliche Limits, Territorialität, Claims Handling SLA, Versicherer-Solidität, Zusatzservices", "Nur ein Makler", "Keine Spezifikationen"],
      en: ["Only lowest price", "Detailed risk profiles, required limits, territoriality, claims handling SLA, insurer solidity, added-value services", "Only one broker", "No specifications"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tender asigurări: exposure summary, limits minime, SLA claims (răspuns 24h, plată 30 zile), rating asigurător AA-, servicii prevenție, preț ponderat 40%.",
      de: "Versicherungs-Tender: Exposure Summary, Mindestlimits, Claims SLA (24h Reaktion, 30 Tage Zahlung), Versicherer-Rating AA-, Präventionsservices, Preis 40% gewichtet.",
      en: "Insurance tender: exposure summary, minimum limits, claims SLA (24h response, 30-day payment), insurer rating AA-, prevention services, price weighted 40%."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este o poliță de tip 'open cover' pentru cargo?",
      de: "Was ist eine 'Open Cover'-Police für Fracht?",
      en: "What is an 'open cover' cargo policy?"
    },
    options: {
      ro: ["Poliță deschisă publicului", "Acoperire automată pentru toate transporturile declarate, fără a emite poliță individuală pentru fiecare", "Poliță fără limite", "Asigurare gratuită"],
      de: ["Öffentlich zugängliche Police", "Automatische Deckung für alle deklarierten Transporte ohne individuelle Police für jeden", "Police ohne Limits", "Kostenlose Versicherung"],
      en: ["Policy open to public", "Automatic coverage for all declared shipments without issuing individual policy for each", "Policy without limits", "Free insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Open cover: asigurare umbrellă pentru toate transporturile. Raportezi lunar volumele/valorile, asigurătorul acoperă automat conform termenilor agreați.",
      de: "Open Cover: Dachversicherung für alle Transporte. Monatliche Meldung Volumina/Werte, Versicherer deckt automatisch gemäß vereinbarten Bedingungen.",
      en: "Open cover: umbrella insurance for all transports. Monthly reporting volumes/values, insurer automatically covers per agreed terms."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum alegi între asigurare per transport vs. poliță anuală?",
      de: "Wie wählst du zwischen Versicherung pro Transport vs. Jahrespolice?",
      en: "How do you choose between per-transport insurance vs. annual policy?"
    },
    options: {
      ro: ["Întotdeauna anuală", "Volum mare frecvent = anuală mai economică. Ocazional/high-value specific = per transport", "Întotdeauna per transport", "Nu contează"],
      de: ["Immer jährlich", "Großes häufiges Volumen = jährlich günstiger. Gelegentlich/spezifisch High-Value = pro Transport", "Immer pro Transport", "Egal"],
      en: ["Always annual", "Large frequent volume = annual more economical. Occasional/specific high-value = per transport", "Always per transport", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Decizie: >50 transporturi/an similar = open cover anuală. <20 transporturi sau foarte diverse = certificat per transport. Calculează cost/beneficiu.",
      de: "Entscheidung: >50 ähnliche Transporte/Jahr = jährlicher Open Cover. <20 Transporte oder sehr unterschiedlich = Zertifikat pro Transport. Kosten/Nutzen berechnen.",
      en: "Decision: >50 similar transports/year = annual open cover. <20 transports or very diverse = certificate per transport. Calculate cost/benefit."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Audit intern asigurări: ce verifici și cum optimizezi acoperirea?",
      de: "Internes Versicherungsaudit: was prüfst du und wie optimierst du die Deckung?",
      en: "Internal insurance audit: what do you verify and how do you optimize coverage?"
    },
    options: {
      ro: ["Doar prețurile", "Adecvare limite vs. expunere reală, gaps acoperire, exclusiuni critice, claims process, cost-efficiency, benchmarking piață", "Doar polițele vechi", "Nu faci audit"],
      de: ["Nur Preise", "Limitangemessenheit vs. reale Exposition, Deckungslücken, kritische Ausschlüsse, Claims-Prozess, Kosteneffizienz, Marktbenchmarking", "Nur alte Policen", "Kein Audit"],
      en: ["Only prices", "Limit adequacy vs. real exposure, coverage gaps, critical exclusions, claims process, cost-efficiency, market benchmarking", "Only old policies", "No audit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Audit: mapează riscuri vs. polițe existente, identifică gaps, verifică limits vs. expunere maximă realistă, analizează claims history, benchmark rate.",
      de: "Audit: Risiken vs. bestehende Policen kartieren, Lücken identifizieren, Limits vs. realistische Maximalexposition prüfen, Claims-Historie analysieren, Raten benchmarken.",
      en: "Audit: map risks vs. existing policies, identify gaps, verify limits vs. realistic maximum exposure, analyze claims history, benchmark rates."
    }
  }
];
