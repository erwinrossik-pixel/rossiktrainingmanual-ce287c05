import { TranslatedQuizQuestion } from '../../quizTranslations';

export const negotiationComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este principiul de bază al unei negocieri win-win?",
      de: "Was ist das Grundprinzip einer Win-Win-Verhandlung?",
      en: "What is the basic principle of a win-win negotiation?"
    },
    options: {
      ro: ["Câștigi tot", "Ambele părți obțin valoare și sunt satisfăcute de rezultat", "Pierzi pentru a câștiga mai târziu", "Cedezi întotdeauna"],
      de: ["Alles gewinnen", "Beide Parteien gewinnen Wert und sind mit dem Ergebnis zufrieden", "Verlieren um später zu gewinnen", "Immer nachgeben"],
      en: ["Win everything", "Both parties gain value and are satisfied with the outcome", "Lose to win later", "Always concede"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Win-win: identificare interese comune, creare valoare pentru ambele părți, relație pe termen lung, nu doar câștig pe termen scurt.",
      de: "Win-Win: gemeinsame Interessen identifizieren, Wert für beide Seiten schaffen, langfristige Beziehung, nicht nur kurzfristiger Gewinn.",
      en: "Win-win: identify common interests, create value for both sides, long-term relationship, not just short-term gain."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este BATNA în negociere?",
      de: "Was ist BATNA in Verhandlungen?",
      en: "What is BATNA in negotiation?"
    },
    options: {
      ro: ["Un tip de contract", "Best Alternative To Negotiated Agreement - cea mai bună alternativă dacă negocierea eșuează", "O tactică agresivă", "Un software de negociere"],
      de: ["Ein Vertragstyp", "Best Alternative To Negotiated Agreement - beste Alternative wenn Verhandlung scheitert", "Eine aggressive Taktik", "Eine Verhandlungssoftware"],
      en: ["A contract type", "Best Alternative To Negotiated Agreement - best option if negotiation fails", "An aggressive tactic", "Negotiation software"]
    },
    correctIndex: 1,
    explanation: {
      ro: "BATNA: planul B. Cu cât BATNA mai puternică, cu atât mai multă putere de negociere. Trebuie să-ți cunoști BATNA și să o îmbunătățești.",
      de: "BATNA: Plan B. Je stärker deine BATNA, desto mehr Verhandlungsmacht. Kenne deine BATNA und verbessere sie.",
      en: "BATNA: plan B. The stronger your BATNA, the more negotiation power. Know your BATNA and improve it."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum pregătești o negociere importantă de contract?",
      de: "Wie bereitest du eine wichtige Vertragsverhandlung vor?",
      en: "How do you prepare for an important contract negotiation?"
    },
    options: {
      ro: ["Improvizezi", "Research client, definire obiective/limite, pregătire argumente, anticipare obiecții, BATNA", "Doar prețuri", "Doar întâlnire"],
      de: ["Improvisieren", "Kundenrecherche, Ziele/Grenzen definieren, Argumente vorbereiten, Einwände antizipieren, BATNA", "Nur Preise", "Nur Meeting"],
      en: ["Improvise", "Client research, define objectives/limits, prepare arguments, anticipate objections, BATNA", "Only prices", "Only meeting"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pregătire: cunoaște clientul, stabilește obiective (ideal/acceptabil/limită), anticipează contra-argumente, pregătește alternative.",
      de: "Vorbereitung: Kunden kennen, Ziele festlegen (ideal/akzeptabel/Grenze), Gegenargumente antizipieren, Alternativen vorbereiten.",
      en: "Preparation: know the client, set objectives (ideal/acceptable/limit), anticipate counter-arguments, prepare alternatives."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client cere reducere 15% sau pleacă la concurent. Marja actuală 12%. Strategia de negociere?",
      de: "Kunde fordert 15% Rabatt oder wechselt zum Wettbewerber. Aktuelle Marge 12%. Verhandlungsstrategie?",
      en: "Client requests 15% discount or leaves for competitor. Current margin 12%. Negotiation strategy?"
    },
    options: {
      ro: ["Accept imediat", "Refuz categoric", "Explorare nevoi reale, contraofertă cu valoare adăugată, negociere volum/termen", "Abandonare client"],
      de: ["Sofort akzeptieren", "Kategorisch ablehnen", "Reale Bedürfnisse erkunden, Gegenangebot mit Mehrwert, Volumen-/Laufzeitverhandlung", "Kunden aufgeben"],
      en: ["Accept immediately", "Categorically refuse", "Explore real needs, counter-offer with added value, negotiate volume/term", "Abandon client"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Strategie: identifică motivul real (preț sau altceva?), oferă valoare (servicii extra, nu doar preț), negociază contrapartide.",
      de: "Strategie: echten Grund identifizieren (Preis oder anderes?), Wert bieten (Zusatzdienste, nicht nur Preis), Gegenleistungen verhandeln.",
      en: "Strategy: identify real reason (price or something else?), offer value (extra services, not just price), negotiate counterparts."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'ancorare' în negociere?",
      de: "Was bedeutet 'Ankern' in Verhandlungen?",
      en: "What does 'anchoring' mean in negotiation?"
    },
    options: {
      ro: ["A ancora nava", "Prima ofertă setează punctul de referință pentru întreaga negociere", "A bloca negocierea", "A cere pauză"],
      de: ["Das Schiff ankern", "Erstes Angebot setzt Referenzpunkt für gesamte Verhandlung", "Verhandlung blockieren", "Pause verlangen"],
      en: ["To anchor the ship", "First offer sets reference point for entire negotiation", "To block negotiation", "To request a break"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ancorare: prima cifră menționată influențează percepția valorii. Cine face prima ofertă are avantaj dacă e bine pregătit.",
      de: "Ankern: erste genannte Zahl beeinflusst Wertwahrnehmung. Wer erstes Angebot macht hat Vorteil wenn gut vorbereitet.",
      en: "Anchoring: first number mentioned influences value perception. Who makes first offer has advantage if well prepared."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt tehnicile de a depăși un impas în negociere?",
      de: "Was sind Techniken zur Überwindung einer Verhandlungsblockade?",
      en: "What are techniques to overcome a negotiation deadlock?"
    },
    options: {
      ro: ["Abandonare", "Schimbare subiect, pauză, escaladare, ofertă creativă, introducere elemente noi", "Presiune maximă", "Ultimatum"],
      de: ["Aufgeben", "Themenwechsel, Pause, Eskalation, kreatives Angebot, neue Elemente einführen", "Maximaler Druck", "Ultimatum"],
      en: ["Abandon", "Change subject, break, escalation, creative offer, introduce new elements", "Maximum pressure", "Ultimatum"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Depășire impas: pauză pentru reflecție, reformulare problemă, add elemente noi (volum, durată), escaladare la management.",
      de: "Blockade überwinden: Pause zur Reflexion, Problem neu formulieren, neue Elemente hinzufügen (Volumen, Laufzeit), Eskalation zum Management.",
      en: "Overcome deadlock: break for reflection, reframe problem, add new elements (volume, duration), escalate to management."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Negociezi cu procurement-ul unui multinațional. Folosesc tactici de presiune. Cum răspunzi?",
      de: "Du verhandelst mit dem Einkauf eines Multinationalen. Sie nutzen Drucktaktiken. Wie reagierst du?",
      en: "You're negotiating with a multinational's procurement. They use pressure tactics. How do you respond?"
    },
    options: {
      ro: ["Cedezi la presiune", "Recunoști tactica, rămâi calm, revii la fapte și valoare, nu te grăbești", "Devii agresiv", "Pleci din negociere"],
      de: ["Dem Druck nachgeben", "Taktik erkennen, ruhig bleiben, zu Fakten und Wert zurückkehren, nicht hetzen lassen", "Aggressiv werden", "Verhandlung verlassen"],
      en: ["Give in to pressure", "Recognize tactic, stay calm, return to facts and value, don't rush", "Become aggressive", "Leave negotiation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Răspuns la presiune: nu reacționa emoțional, cere timp, revino la valoarea pe care o oferi, propune alternative creative.",
      de: "Antwort auf Druck: nicht emotional reagieren, Zeit erbitten, zum gebotenen Wert zurückkehren, kreative Alternativen vorschlagen.",
      en: "Response to pressure: don't react emotionally, ask for time, return to value you offer, propose creative alternatives."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este zona de acord posibil (ZOPA)?",
      de: "Was ist die Zone möglicher Einigung (ZOPA)?",
      en: "What is the Zone of Possible Agreement (ZOPA)?"
    },
    options: {
      ro: ["Zonă geografică", "Intervalul în care ambele părți pot ajunge la un acord satisfăcător", "Sala de negociere", "Contract semnat"],
      de: ["Geografische Zone", "Bereich in dem beide Parteien zu zufriedenstellender Einigung kommen können", "Verhandlungsraum", "Unterzeichneter Vertrag"],
      en: ["Geographic zone", "Range where both parties can reach satisfactory agreement", "Negotiation room", "Signed contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ZOPA: suprapunerea între ce ești dispus să oferi și ce este celălalt dispus să accepte. Dacă nu există ZOPA, nu există acord.",
      de: "ZOPA: Überschneidung zwischen dem was du bereit bist zu bieten und was der andere bereit ist zu akzeptieren. Keine ZOPA = keine Einigung.",
      en: "ZOPA: overlap between what you're willing to offer and what the other is willing to accept. No ZOPA = no agreement."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum negociezi cu un client care compară doar prețuri?",
      de: "Wie verhandelst du mit einem Kunden der nur Preise vergleicht?",
      en: "How do you negotiate with a client who only compares prices?"
    },
    options: {
      ro: ["Dai cel mai mic preț", "Schimbi conversația spre valoare totală: TCO, risc, serviciu, fiabilitate", "Refuzi negocierea", "Oferi exact ce cere"],
      de: ["Niedrigsten Preis geben", "Gespräch auf Gesamtwert lenken: TCO, Risiko, Service, Zuverlässigkeit", "Verhandlung ablehnen", "Genau das bieten was er fordert"],
      en: ["Give lowest price", "Shift conversation to total value: TCO, risk, service, reliability", "Refuse negotiation", "Offer exactly what they ask"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Depășește comparația preț: arată costul total (întârzieri, daune, stres), evidențiază diferențiatorii, construiește încredere.",
      de: "Preisvergleich überwinden: Gesamtkosten zeigen (Verzögerungen, Schäden, Stress), Differenzierungsmerkmale hervorheben, Vertrauen aufbauen.",
      en: "Overcome price comparison: show total cost (delays, damages, stress), highlight differentiators, build trust."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Negociere contract 3 ani, 2M€/an. Clientul cere toate concesiile în schimbul volumului. Abordare?",
      de: "3-Jahres-Vertrag verhandeln, 2M€/Jahr. Kunde fordert alle Zugeständnisse im Austausch für Volumen. Ansatz?",
      en: "Negotiating 3-year contract, €2M/year. Client wants all concessions in exchange for volume. Approach?"
    },
    options: {
      ro: ["Accept toate", "Negociază pas cu pas: fiecare concesie în schimbul alteia, protejează marja minimă", "Refuză volumul", "Semnează oricum"],
      de: ["Alle akzeptieren", "Schritt für Schritt verhandeln: jedes Zugeständnis im Austausch für ein anderes, Mindestmarge schützen", "Volumen ablehnen", "Trotzdem unterschreiben"],
      en: ["Accept all", "Negotiate step by step: each concession in exchange for another, protect minimum margin", "Refuse volume", "Sign anyway"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Negociere strategică: niciodată concesii unilaterale, quid pro quo, protejează pragul minim, construiește pe relația pe termen lung.",
      de: "Strategische Verhandlung: nie einseitige Zugeständnisse, Quid pro quo, Mindestschwelle schützen, auf langfristige Beziehung aufbauen.",
      en: "Strategic negotiation: never unilateral concessions, quid pro quo, protect minimum threshold, build on long-term relationship."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce rol are ascultarea activă în negociere?",
      de: "Welche Rolle spielt aktives Zuhören in Verhandlungen?",
      en: "What role does active listening play in negotiation?"
    },
    options: {
      ro: ["Niciun rol", "Înțelegerea nevoilor reale, construirea raportului, identificarea oportunităților", "Doar să pari politicos", "Să câștigi timp"],
      de: ["Keine Rolle", "Echte Bedürfnisse verstehen, Rapport aufbauen, Chancen identifizieren", "Nur höflich erscheinen", "Zeit gewinnen"],
      en: ["No role", "Understanding real needs, building rapport, identifying opportunities", "Just appearing polite", "Gaining time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ascultare activă: întrebi, reformulezi, confirmi înțelegerea. Descoperi interese ascunse și creezi soluții creative.",
      de: "Aktives Zuhören: fragen, umformulieren, Verständnis bestätigen. Versteckte Interessen entdecken und kreative Lösungen schaffen.",
      en: "Active listening: ask, rephrase, confirm understanding. Discover hidden interests and create creative solutions."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi o cerere 'last minute' înainte de semnarea contractului?",
      de: "Wie gehst du mit einer 'Last-Minute'-Forderung vor Vertragsunterzeichnung um?",
      en: "How do you handle a 'last minute' request before contract signing?"
    },
    options: {
      ro: ["Accept pentru a încheia rapid", "Evaluezi impactul, ceri contrapartidă, sau redeschizi alte puncte", "Refuzi categoric", "Amâni la nesfârșit"],
      de: ["Akzeptieren um schnell abzuschließen", "Auswirkung bewerten, Gegenleistung fordern, oder andere Punkte wieder öffnen", "Kategorisch ablehnen", "Endlos verschieben"],
      en: ["Accept to close quickly", "Assess impact, ask for counterpart, or reopen other points", "Categorically refuse", "Delay indefinitely"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Last-minute: evaluează dacă e tactica 'nibbling', cere ceva în schimb sau reafirmă termenii agreați. Nu ceda fără contrapartidă.",
      de: "Last-Minute: prüfen ob 'Nibbling'-Taktik, Gegenleistung fordern oder vereinbarte Bedingungen bekräftigen. Nie ohne Gegenleistung nachgeben.",
      en: "Last-minute: assess if 'nibbling' tactic, ask for something in return or reaffirm agreed terms. Don't concede without counterpart."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Negociere cu echipă de procurement: buyer, manager, legal, operațional. Strategie de abordare?",
      de: "Verhandlung mit Einkaufsteam: Buyer, Manager, Recht, Betrieb. Annäherungsstrategie?",
      en: "Negotiation with procurement team: buyer, manager, legal, operational. Approach strategy?"
    },
    options: {
      ro: ["Vorbești doar cu un reprezentant", "Înțelegi rolul și interesul fiecăruia, pregătești argumente diferențiate, construiești aliați", "Ignori pe unii", "Negociezi doar prețul"],
      de: ["Nur mit einem Vertreter sprechen", "Rolle und Interesse jedes Einzelnen verstehen, differenzierte Argumente vorbereiten, Verbündete aufbauen", "Einige ignorieren", "Nur Preis verhandeln"],
      en: ["Speak only with one representative", "Understand each one's role and interest, prepare differentiated arguments, build allies", "Ignore some", "Negotiate only price"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multi-stakeholder: identifică decision maker, influenceri, critici. Argumente adaptate: preț pentru buyer, risc pentru legal, operațional pentru ops.",
      de: "Multi-Stakeholder: Entscheider, Beeinflusser, Kritiker identifizieren. Angepasste Argumente: Preis für Buyer, Risiko für Recht, Operatives für Ops.",
      en: "Multi-stakeholder: identify decision maker, influencers, critics. Adapted arguments: price for buyer, risk for legal, operational for ops."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'good cop, bad cop' în negociere?",
      de: "Was ist 'Good Cop, Bad Cop' in Verhandlungen?",
      en: "What is 'good cop, bad cop' in negotiation?"
    },
    options: {
      ro: ["Tactică polițienească", "Tactică în care o parte e dură iar alta e conciliantă pentru a obține concesii", "Strategie legală", "Mediere"],
      de: ["Polizeitaktik", "Taktik bei der eine Seite hart und die andere versöhnlich ist um Zugeständnisse zu erhalten", "Rechtliche Strategie", "Mediation"],
      en: ["Police tactic", "Tactic where one side is tough while other is conciliatory to obtain concessions", "Legal strategy", "Mediation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Good cop/bad cop: recunoaște tactica, adresează-te ambelor persoane, nu te lăsa manipulat de contrastul artificial.",
      de: "Good Cop/Bad Cop: Taktik erkennen, beide Personen ansprechen, nicht vom künstlichen Kontrast manipulieren lassen.",
      en: "Good cop/bad cop: recognize the tactic, address both people, don't be manipulated by the artificial contrast."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum negociezi termeni de plată mai scurți cu un client nou?",
      de: "Wie verhandelst du kürzere Zahlungsziele mit einem Neukunden?",
      en: "How do you negotiate shorter payment terms with a new client?"
    },
    options: {
      ro: ["Nu menționezi", "Justifici prin risc, oferi discount pentru plată rapidă, condiționezi de volum", "Ceri 100% în avans", "Accepți orice termen"],
      de: ["Nicht erwähnen", "Mit Risiko begründen, Skonto für schnelle Zahlung anbieten, an Volumen knüpfen", "100% Vorauszahlung fordern", "Jeden Termin akzeptieren"],
      en: ["Don't mention", "Justify by risk, offer discount for quick payment, condition on volume", "Ask 100% in advance", "Accept any term"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Negociere termeni: explici că clienții noi au termeni mai stricte, oferi îmbunătățire după istoric pozitiv, discount pentru plată rapidă.",
      de: "Zahlungsziel-Verhandlung: erklären dass Neukunden strengere Bedingungen haben, Verbesserung nach positivem Verlauf anbieten, Skonto für schnelle Zahlung.",
      en: "Payment terms negotiation: explain new clients have stricter terms, offer improvement after positive history, discount for quick payment."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client strategic amenință că pleacă dacă nu accepți condițiile lui. Cum gestionezi bluff-ul?",
      de: "Strategischer Kunde droht zu gehen wenn du seine Bedingungen nicht akzeptierst. Wie gehst du mit dem Bluff um?",
      en: "Strategic client threatens to leave if you don't accept their conditions. How do you handle the bluff?"
    },
    options: {
      ro: ["Cedezi imediat", "Testezi seriozitatea amenințării, explorezi alternative, oferi soluții creative, pregătești BATNA", "Ameninți înapoi", "Ignori complet"],
      de: ["Sofort nachgeben", "Ernsthaftigkeit der Drohung testen, Alternativen erkunden, kreative Lösungen anbieten, BATNA vorbereiten", "Zurück drohen", "Komplett ignorieren"],
      en: ["Concede immediately", "Test threat seriousness, explore alternatives, offer creative solutions, prepare BATNA", "Threaten back", "Ignore completely"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Gestionare bluff: verifică dacă are alternativă reală, subliniază valoarea relației, oferă soluție parțială, nu ceda din panică.",
      de: "Bluff-Management: prüfen ob echte Alternative vorhanden, Wert der Beziehung betonen, Teillösung anbieten, nicht aus Panik nachgeben.",
      en: "Bluff management: check if they have real alternative, highlight relationship value, offer partial solution, don't concede from panic."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'walk away point' în negociere?",
      de: "Was bedeutet 'Walk Away Point' in Verhandlungen?",
      en: "What does 'walk away point' mean in negotiation?"
    },
    options: {
      ro: ["Momentul plecării fizice", "Limita sub care nu ești dispus să închei acordul", "Pauza de cafea", "Finalul întâlnirii"],
      de: ["Moment des physischen Gehens", "Grenze unter der du nicht bereit bist abzuschließen", "Kaffeepause", "Ende des Meetings"],
      en: ["Moment of physical leaving", "Limit below which you're not willing to close the deal", "Coffee break", "End of meeting"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Walk away point: cunoaște-l înainte de negociere, nu-l dezvălui, dar fii pregătit să pleci dacă nu se atinge.",
      de: "Walk Away Point: vor der Verhandlung kennen, nicht verraten, aber bereit sein zu gehen wenn nicht erreicht.",
      en: "Walk away point: know it before negotiation, don't reveal it, but be prepared to leave if not reached."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum folosești tăcerea ca instrument de negociere?",
      de: "Wie nutzt du Schweigen als Verhandlungsinstrument?",
      en: "How do you use silence as a negotiation tool?"
    },
    options: {
      ro: ["Nu vorbești niciodată", "După ofertă sau întrebare, tăcerea creează presiune pentru celălalt să răspundă sau să concedeze", "Ignori interlocutorul", "Te prefaci că nu auzi"],
      de: ["Nie sprechen", "Nach Angebot oder Frage erzeugt Schweigen Druck auf den anderen zu antworten oder nachzugeben", "Gesprächspartner ignorieren", "So tun als ob du nicht hörst"],
      en: ["Never speak", "After offer or question, silence creates pressure for the other to respond or concede", "Ignore the interlocutor", "Pretend not to hear"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tăcerea strategică: după o propunere, tăcerea e puternică. Cel care vorbește primul adesea face concesii. Nu umple golurile nervos.",
      de: "Strategisches Schweigen: nach einem Vorschlag ist Schweigen mächtig. Wer zuerst spricht macht oft Zugeständnisse. Lücken nicht nervös füllen.",
      en: "Strategic silence: after a proposal, silence is powerful. Who speaks first often makes concessions. Don't nervously fill gaps."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Negociere interculturală cu client japonez. Ce adaptări culturale sunt necesare?",
      de: "Interkulturelle Verhandlung mit japanischem Kunden. Welche kulturellen Anpassungen sind nötig?",
      en: "Cross-cultural negotiation with Japanese client. What cultural adaptations are needed?"
    },
    options: {
      ro: ["Nicio adaptare", "Răbdare, respect ierarhie, evitare confruntare directă, construire relație înainte de business, decizii prin consens", "Stil agresiv", "Grăbire deciziei"],
      de: ["Keine Anpassung", "Geduld, Respekt Hierarchie, direkte Konfrontation vermeiden, Beziehung vor Geschäft aufbauen, Konsensentscheidungen", "Aggressiver Stil", "Entscheidung beschleunigen"],
      en: ["No adaptation", "Patience, respect hierarchy, avoid direct confrontation, build relationship before business, consensus decisions", "Aggressive style", "Rush decision"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Japonia: nemawashi (consens), salvarea feței, relație înainte de contract, răbdare, respectare seniori, atenție la nuanțe.",
      de: "Japan: Nemawashi (Konsens), Gesicht wahren, Beziehung vor Vertrag, Geduld, Respekt für Ältere, Aufmerksamkeit für Nuancen.",
      en: "Japan: nemawashi (consensus), saving face, relationship before contract, patience, respect seniors, attention to nuances."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'framing' în negociere?",
      de: "Was ist 'Framing' in Verhandlungen?",
      en: "What is 'framing' in negotiation?"
    },
    options: {
      ro: ["Încadrare fotografică", "Modul în care prezinți informația pentru a influența percepția", "Cadru legal", "Contract"],
      de: ["Fotografischer Rahmen", "Art wie du Information präsentierst um Wahrnehmung zu beeinflussen", "Rechtlicher Rahmen", "Vertrag"],
      en: ["Photo framing", "Way you present information to influence perception", "Legal framework", "Contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Framing: prezinți creșterea de 5% vs. 'menținere tarif în context de +10% piață'. Aceeași realitate, percepții diferite.",
      de: "Framing: 5% Erhöhung präsentieren vs. 'Tarifbeibehaltung bei +10% Markt'. Gleiche Realität, unterschiedliche Wahrnehmungen.",
      en: "Framing: present 5% increase vs. 'maintaining rate in +10% market context'. Same reality, different perceptions."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum construiești raport și încredere la începutul unei negocieri?",
      de: "Wie baust du Rapport und Vertrauen zu Verhandlungsbeginn auf?",
      en: "How do you build rapport and trust at the start of a negotiation?"
    },
    options: {
      ro: ["Intri direct în preț", "Small talk, interese comune, ascultare, transparență în intenții, profesionalism", "Critici concurența", "Exagerezi capabilitățile"],
      de: ["Direkt zum Preis", "Small Talk, gemeinsame Interessen, Zuhören, Transparenz in Absichten, Professionalität", "Wettbewerb kritisieren", "Fähigkeiten übertreiben"],
      en: ["Go straight to price", "Small talk, common interests, listening, transparency in intentions, professionalism", "Criticize competition", "Exaggerate capabilities"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Construire raport: găsește puncte comune, arată interes real, fii onest despre obiective, demonstrează competență prin exemple concrete.",
      de: "Rapport aufbauen: Gemeinsamkeiten finden, echtes Interesse zeigen, ehrlich über Ziele sein, Kompetenz durch konkrete Beispiele zeigen.",
      en: "Build rapport: find common points, show genuine interest, be honest about objectives, demonstrate competence through concrete examples."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Negociere complexă cu multiple puncte (preț, termen plată, SLA, penalități). Strategie de gestionare?",
      de: "Komplexe Verhandlung mit mehreren Punkten (Preis, Zahlungsziel, SLA, Strafen). Management-Strategie?",
      en: "Complex negotiation with multiple points (price, payment term, SLA, penalties). Management strategy?"
    },
    options: {
      ro: ["Negociezi totul simultan", "Prioritizezi punctele, creezi package deals, faci trade-offs inteligente", "Un punct pe zi", "Doar prețul contează"],
      de: ["Alles gleichzeitig verhandeln", "Punkte priorisieren, Paketlösungen schaffen, intelligente Trade-offs machen", "Ein Punkt pro Tag", "Nur Preis zählt"],
      en: ["Negotiate everything simultaneously", "Prioritize points, create package deals, make intelligent trade-offs", "One point per day", "Only price matters"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multi-point: identifică prioritățile tale și ale lor, creează pachete (cedez la X dacă obțin Y), evită negocieri punct cu punct izolat.",
      de: "Multi-Punkt: eigene und ihre Prioritäten identifizieren, Pakete schaffen (bei X nachgeben wenn Y erhalten), isolierte Punkt-für-Punkt-Verhandlung vermeiden.",
      en: "Multi-point: identify your and their priorities, create packages (concede on X if get Y), avoid isolated point-by-point negotiation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'nibbling' în negociere?",
      de: "Was bedeutet 'Nibbling' in Verhandlungen?",
      en: "What does 'nibbling' mean in negotiation?"
    },
    options: {
      ro: ["A mânca încet", "Cereri mici de ultim moment după ce acordul pare finalizat", "A refuza oferta", "A cere pauză"],
      de: ["Langsam essen", "Kleine Last-Minute-Forderungen nachdem Einigung erreicht scheint", "Angebot ablehnen", "Pause verlangen"],
      en: ["Eating slowly", "Small last-minute requests after agreement seems finalized", "Refusing offer", "Requesting break"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Nibbling: 'și putem avea și livrare gratuită?' după acord. Răspuns: cere contrapartidă sau menține acordul original.",
      de: "Nibbling: 'und können wir auch kostenlose Lieferung haben?' nach Einigung. Antwort: Gegenleistung fordern oder ursprüngliche Einigung beibehalten.",
      en: "Nibbling: 'and can we also have free delivery?' after agreement. Response: ask for counterpart or maintain original agreement."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi o negociere prin email vs. față-în-față?",
      de: "Wie managst du eine E-Mail-Verhandlung vs. persönlich?",
      en: "How do you manage email negotiation vs. face-to-face?"
    },
    options: {
      ro: ["Identic", "Email: mai puțin context, document totul, atenție la ton; față-în-față: citește limbajul corporal, construiește raport", "Email mereu superior", "Față-în-față evitabil"],
      de: ["Identisch", "E-Mail: weniger Kontext, alles dokumentieren, auf Ton achten; persönlich: Körpersprache lesen, Rapport aufbauen", "E-Mail immer überlegen", "Persönlich vermeidbar"],
      en: ["Identical", "Email: less context, document everything, watch tone; face-to-face: read body language, build rapport", "Email always superior", "Face-to-face avoidable"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Email: formal, clar, documentat, fără nuanțe emoționale vizibile. Față-în-față: citești reacții, construiești încredere, rezolvi rapid impasuri.",
      de: "E-Mail: formal, klar, dokumentiert, keine sichtbaren emotionalen Nuancen. Persönlich: Reaktionen lesen, Vertrauen aufbauen, Blockaden schnell lösen.",
      en: "Email: formal, clear, documented, no visible emotional nuances. Face-to-face: read reactions, build trust, quickly resolve deadlocks."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Escaladare negociere la nivel C-level. Cum pregătești întâlnirea cu CEO/CFO client?",
      de: "Verhandlungseskalation auf C-Level. Wie bereitest du Meeting mit Kunden-CEO/CFO vor?",
      en: "Negotiation escalation to C-level. How do you prepare the meeting with client CEO/CFO?"
    },
    options: {
      ro: ["Aceleași detalii operaționale", "Focus strategic: valoare business, risc, relație pe termen lung, decizie de principiu, nu detalii", "Reclamații tehnice", "Doar plângeri despre buyer"],
      de: ["Gleiche operative Details", "Strategischer Fokus: Business-Wert, Risiko, langfristige Beziehung, Prinzipentscheidung, keine Details", "Technische Beschwerden", "Nur Beschwerden über Buyer"],
      en: ["Same operational details", "Strategic focus: business value, risk, long-term relationship, principle decision, not details", "Technical complaints", "Only complaints about buyer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "C-level: prezintă valoarea strategică, nu detaliile tactice. Focus pe parteneriat, avantaje competitive, rezultate business, nu pe €/km.",
      de: "C-Level: strategischen Wert präsentieren, nicht taktische Details. Fokus auf Partnerschaft, Wettbewerbsvorteile, Business-Ergebnisse, nicht €/km.",
      en: "C-level: present strategic value, not tactical details. Focus on partnership, competitive advantages, business results, not €/km."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Când este momentul potrivit să faci prima concesie?",
      de: "Wann ist der richtige Moment für das erste Zugeständnis?",
      en: "When is the right moment to make the first concession?"
    },
    options: {
      ro: ["Niciodată", "După ce ai înțeles complet nevoile celuilalt și ai primit contrapartidă potențială", "Imediat", "Doar la final"],
      de: ["Nie", "Nachdem du die Bedürfnisse des anderen vollständig verstanden und potenzielle Gegenleistung erhalten hast", "Sofort", "Nur am Ende"],
      en: ["Never", "After fully understanding the other's needs and receiving potential counterpart", "Immediately", "Only at the end"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prima concesie: după ce ai ascultat, ai înțeles ce e important pentru ei, și poți cere ceva în schimb. Niciodată unilateral.",
      de: "Erstes Zugeständnis: nachdem du zugehört, verstanden was ihnen wichtig ist, und etwas im Gegenzug fordern kannst. Nie einseitig.",
      en: "First concession: after listening, understanding what's important to them, and being able to ask for something in return. Never unilateral."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum documentezi și urmărești o negociere complexă în curs?",
      de: "Wie dokumentierst und verfolgst du eine laufende komplexe Verhandlung?",
      en: "How do you document and track an ongoing complex negotiation?"
    },
    options: {
      ro: ["Nu documentezi", "Summary scris după fiecare runda, tracker puncte deschise, confirmare scrisă acorduri parțiale", "Doar în minte", "Doar contractul final"],
      de: ["Nicht dokumentieren", "Schriftliche Zusammenfassung nach jeder Runde, Tracker offene Punkte, schriftliche Bestätigung Teilvereinbarungen", "Nur im Kopf", "Nur Endvertrag"],
      en: ["Don't document", "Written summary after each round, open points tracker, written confirmation of partial agreements", "Only in mind", "Only final contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentare: notes după fiecare sesiune, email de confirmare, tracker Excel cu puncte agreate vs. deschise, históric concesii.",
      de: "Dokumentation: Notizen nach jeder Sitzung, Bestätigungs-E-Mail, Excel-Tracker mit vereinbarten vs. offenen Punkten, Zugeständnis-Historie.",
      en: "Documentation: notes after each session, confirmation email, Excel tracker with agreed vs. open points, concession history."
    }
  }
];
