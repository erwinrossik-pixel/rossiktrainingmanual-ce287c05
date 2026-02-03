import { TranslatedQuizQuestion } from '../../quizTranslations';

export const clientsComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este segmentarea clienților în transporturi?",
      de: "Was ist Kundensegmentierung im Transport?",
      en: "What is client segmentation in transport?"
    },
    options: {
      ro: ["Împărțirea geografică", "Clasificarea clienților după criterii relevante: volum, marjă, industrie, comportament", "Separarea facturilor", "Doar pe țări"],
      de: ["Geografische Aufteilung", "Kundenklassifizierung nach relevanten Kriterien: Volumen, Marge, Branche, Verhalten", "Rechnungstrennung", "Nur nach Ländern"],
      en: ["Geographic division", "Client classification by relevant criteria: volume, margin, industry, behavior", "Invoice separation", "Only by countries"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Segmentare: ABC volum/valoare, sector (auto, FMCG, retail), profitabilitate, potențial creștere, nivel serviciu cerut.",
      de: "Segmentierung: ABC Volumen/Wert, Sektor (Auto, FMCG, Handel), Rentabilität, Wachstumspotenzial, gefordertes Serviceniveau.",
      en: "Segmentation: ABC volume/value, sector (auto, FMCG, retail), profitability, growth potential, required service level."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tipuri de clienți există în industria de transport?",
      de: "Welche Kundentypen gibt es in der Transportbranche?",
      en: "What types of clients exist in the transport industry?"
    },
    options: {
      ro: ["Doar producători", "Producători, distribuitori, retailers, expeditori, e-commerce, 3PL, trading companies", "Doar magazine", "Doar persoane fizice"],
      de: ["Nur Hersteller", "Hersteller, Distributoren, Einzelhändler, Spediteure, E-Commerce, 3PL, Handelsfirmen", "Nur Geschäfte", "Nur Privatpersonen"],
      en: ["Only manufacturers", "Manufacturers, distributors, retailers, forwarders, e-commerce, 3PL, trading companies", "Only stores", "Only private persons"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tipuri: producători (materii prime, produse finite), distribuitori, retail, e-commerce, alți expeditori, traderi.",
      de: "Typen: Hersteller (Rohstoffe, Fertigprodukte), Distributoren, Einzelhandel, E-Commerce, andere Spediteure, Händler.",
      en: "Types: manufacturers (raw materials, finished goods), distributors, retail, e-commerce, other forwarders, traders."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum evaluezi potențialul unui client nou?",
      de: "Wie bewertest du das Potenzial eines Neukunden?",
      en: "How do you evaluate a new client's potential?"
    },
    options: {
      ro: ["Doar după prima comandă", "Analiză: dimensiune companie, volume estimate, rute, frecvență, solvabilitate, potențial dezvoltare", "Doar după un an", "Nu se evaluează"],
      de: ["Nur nach erster Bestellung", "Analyse: Unternehmensgröße, geschätzte Volumina, Routen, Frequenz, Bonität, Entwicklungspotenzial", "Nur nach einem Jahr", "Keine Bewertung"],
      en: ["Only after first order", "Analysis: company size, estimated volumes, routes, frequency, solvency, development potential", "Only after one year", "No evaluation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Evaluare client nou: research companie, estimare volum anual, rute complementare flotei, bonitate, potențial de creștere, fit strategic.",
      de: "Neukunden-Bewertung: Unternehmensrecherche, Jahresvolumen schätzen, flottenergänzende Routen, Bonität, Wachstumspotenzial, strategischer Fit.",
      en: "New client evaluation: company research, annual volume estimate, fleet-complementing routes, creditworthiness, growth potential, strategic fit."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client automotive cu 1000 curse/an, 15% din venit, dar marjă 5% vs. 12% medie. Strategie?",
      de: "Automotive-Kunde mit 1000 Fahrten/Jahr, 15% des Umsatzes, aber 5% Marge vs. 12% Durchschnitt. Strategie?",
      en: "Automotive client with 1000 trips/year, 15% of revenue, but 5% margin vs. 12% average. Strategy?"
    },
    options: {
      ro: ["Accept situația", "Negociezi îmbunătățire marjă, optimizezi costuri, diversifici portofoliul, evaluezi risc dependență", "Renunți la client", "Mărești prețul 20%"],
      de: ["Situation akzeptieren", "Margenverbesserung verhandeln, Kosten optimieren, Portfolio diversifizieren, Abhängigkeitsrisiko bewerten", "Kunden aufgeben", "Preis um 20% erhöhen"],
      en: ["Accept situation", "Negotiate margin improvement, optimize costs, diversify portfolio, evaluate dependency risk", "Give up client", "Increase price 20%"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie: negociază indexare corectă, găsește economii operaționale, dezvoltă alți clienți pentru a reduce dependența de 15%.",
      de: "Strategie: korrekte Indexierung verhandeln, operative Einsparungen finden, andere Kunden entwickeln um 15% Abhängigkeit zu reduzieren.",
      en: "Strategy: negotiate correct indexation, find operational savings, develop other clients to reduce 15% dependency."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este Customer Lifetime Value (CLV)?",
      de: "Was ist Customer Lifetime Value (CLV)?",
      en: "What is Customer Lifetime Value (CLV)?"
    },
    options: {
      ro: ["Vârsta clientului", "Valoarea totală estimată pe care un client o va genera pe durata relației", "Prima comandă", "Ultima factură"],
      de: ["Kundenalter", "Geschätzter Gesamtwert den ein Kunde über die Beziehungsdauer generieren wird", "Erste Bestellung", "Letzte Rechnung"],
      en: ["Client's age", "Total estimated value a client will generate over the relationship duration", "First order", "Last invoice"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CLV: venit mediu/an × durata estimată relație × marja medie. Client 100k€/an, 5 ani, 10% marjă = 50.000€ CLV.",
      de: "CLV: Durchschnittsumsatz/Jahr × geschätzte Beziehungsdauer × Durchschnittsmarge. Kunde 100k€/Jahr, 5 Jahre, 10% Marge = 50.000€ CLV.",
      en: "CLV: average revenue/year × estimated relationship duration × average margin. Client €100k/year, 5 years, 10% margin = €50,000 CLV."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi un client dificil care reclamă constant?",
      de: "Wie managst du einen schwierigen Kunden der ständig reklamiert?",
      en: "How do you manage a difficult client who constantly complains?"
    },
    options: {
      ro: ["Ignori reclamațiile", "Analizezi validitatea, comunici proactiv, setezi așteptări realiste, documentezi totul", "Renunți la client", "Reduci serviciul"],
      de: ["Beschwerden ignorieren", "Gültigkeit analysieren, proaktiv kommunizieren, realistische Erwartungen setzen, alles dokumentieren", "Kunden aufgeben", "Service reduzieren"],
      en: ["Ignore complaints", "Analyze validity, communicate proactively, set realistic expectations, document everything", "Give up client", "Reduce service"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Client dificil: separă reclamații valide de comportament, comunică transparent, documentează, evaluează dacă merită păstrat.",
      de: "Schwieriger Kunde: valide Beschwerden von Verhalten trennen, transparent kommunizieren, dokumentieren, bewerten ob behaltenswert.",
      en: "Difficult client: separate valid complaints from behavior, communicate transparently, document, evaluate if worth keeping."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare plan account pentru client strategic cu potențial de triplare volum în 2 ani. Elemente cheie?",
      de: "Account-Plan für strategischen Kunden mit Potenzial zur Volumen-Verdreifachung in 2 Jahren. Schlüsselelemente?",
      en: "Account plan development for strategic client with potential to triple volume in 2 years. Key elements?"
    },
    options: {
      ro: ["Doar listă de prețuri", "Mapare stakeholders, obiective comune, milestones, resurse necesare, review-uri regulate, escaladare", "Doar contract", "Doar email-uri"],
      de: ["Nur Preisliste", "Stakeholder-Mapping, gemeinsame Ziele, Meilensteine, benötigte Ressourcen, regelmäßige Reviews, Eskalation", "Nur Vertrag", "Nur E-Mails"],
      en: ["Only price list", "Stakeholder mapping, common objectives, milestones, needed resources, regular reviews, escalation", "Only contract", "Only emails"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Account plan: org chart client, obiective 2 ani, plan de acțiune trimestrial, KPI comuni, business reviews, plan de dezvoltare relație.",
      de: "Account Plan: Kunden-Organigramm, 2-Jahres-Ziele, vierteljährlicher Aktionsplan, gemeinsame KPIs, Business Reviews, Beziehungsentwicklungsplan.",
      en: "Account plan: client org chart, 2-year objectives, quarterly action plan, common KPIs, business reviews, relationship development plan."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un Decision Making Unit (DMU) la client?",
      de: "Was ist eine Decision Making Unit (DMU) beim Kunden?",
      en: "What is a Decision Making Unit (DMU) at client?"
    },
    options: {
      ro: ["Un departament", "Grupul de persoane implicate în decizia de cumpărare", "Un software", "O mașină"],
      de: ["Eine Abteilung", "Gruppe von Personen die an der Kaufentscheidung beteiligt sind", "Eine Software", "Eine Maschine"],
      en: ["A department", "Group of people involved in the purchase decision", "A software", "A machine"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DMU: buyer (negociază), user (operațional), influencer (tehnic), decision maker (aprobă buget), gatekeeper (controlează accesul).",
      de: "DMU: Buyer (verhandelt), User (operativ), Influencer (technisch), Decision Maker (genehmigt Budget), Gatekeeper (kontrolliert Zugang).",
      en: "DMU: buyer (negotiates), user (operational), influencer (technical), decision maker (approves budget), gatekeeper (controls access)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum construiești relații cu mai multe niveluri la un client?",
      de: "Wie baust du Beziehungen auf mehreren Ebenen bei einem Kunden auf?",
      en: "How do you build relationships at multiple levels with a client?"
    },
    options: {
      ro: ["Doar cu buyer-ul", "Contacte operațional-operațional, comercial-procurement, management-management", "Doar email-uri", "Doar un contact"],
      de: ["Nur mit dem Buyer", "Kontakte operativ-operativ, kommerziell-Einkauf, Management-Management", "Nur E-Mails", "Nur ein Kontakt"],
      en: ["Only with buyer", "Contacts operational-operational, commercial-procurement, management-management", "Only emails", "Only one contact"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multi-level: dispecer-dispecer, KAM-buyer, director-director. Reduce dependența de o persoană, crește încrederea, facilitează escaladări.",
      de: "Multi-Level: Disponent-Disponent, KAM-Buyer, Direktor-Direktor. Reduziert Personenabhängigkeit, erhöht Vertrauen, erleichtert Eskalationen.",
      en: "Multi-level: dispatcher-dispatcher, KAM-buyer, director-director. Reduces dependency on one person, increases trust, facilitates escalations."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client top 3 amenință să reducă volumul cu 50%. Cum analizezi și răspunzi?",
      de: "Top 3-Kunde droht Volumen um 50% zu reduzieren. Wie analysierst und reagierst du?",
      en: "Top 3 client threatens to reduce volume by 50%. How do you analyze and respond?"
    },
    options: {
      ro: ["Accepți pasiv", "Analiză cauze reale, propunere valoare, plan de retenție, pregătire alternative, negociere la nivel înalt", "Renunți imediat", "Mărești prețul"],
      de: ["Passiv akzeptieren", "Analyse echter Ursachen, Wertangebot, Retentionsplan, Alternativen vorbereiten, High-Level-Verhandlung", "Sofort aufgeben", "Preis erhöhen"],
      en: ["Accept passively", "Real causes analysis, value proposition, retention plan, prepare alternatives, high-level negotiation", "Give up immediately", "Increase price"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Răspuns strategic: înțelege motivul real, propune soluții (preț, serviciu, flexibilitate), escaladează la management, pregătește backup.",
      de: "Strategische Antwort: echten Grund verstehen, Lösungen vorschlagen (Preis, Service, Flexibilität), an Management eskalieren, Backup vorbereiten.",
      en: "Strategic response: understand real reason, propose solutions (price, service, flexibility), escalate to management, prepare backup."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este Net Promoter Score (NPS)?",
      de: "Was ist Net Promoter Score (NPS)?",
      en: "What is Net Promoter Score (NPS)?"
    },
    options: {
      ro: ["Scor de credit", "Măsură a loialității clienților bazată pe probabilitatea de a recomanda", "Număr de comenzi", "Rata de profit"],
      de: ["Kredit-Score", "Kundenloyalitätsmaß basierend auf Weiterempfehlungswahrscheinlichkeit", "Bestellanzahl", "Gewinnrate"],
      en: ["Credit score", "Customer loyalty measure based on likelihood to recommend", "Number of orders", "Profit rate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "NPS: 'Cât de probabil e să ne recomandați?' (0-10). Promotori (9-10) - Detractori (0-6) = NPS. Peste 50 e excelent.",
      de: "NPS: 'Wie wahrscheinlich empfehlen Sie uns?' (0-10). Promotoren (9-10) - Detraktoren (0-6) = NPS. Über 50 ist exzellent.",
      en: "NPS: 'How likely are you to recommend us?' (0-10). Promoters (9-10) - Detractors (0-6) = NPS. Above 50 is excellent."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum organizezi un Business Review cu un client important?",
      de: "Wie organisierst du ein Business Review mit einem wichtigen Kunden?",
      en: "How do you organize a Business Review with an important client?"
    },
    options: {
      ro: ["Doar la probleme", "Periodic (trimestrial), KPI review, feedback reciproc, planuri viitoare, acțiuni concrete", "Doar la cerere", "Doar annual"],
      de: ["Nur bei Problemen", "Regelmäßig (vierteljährlich), KPI-Review, gegenseitiges Feedback, Zukunftspläne, konkrete Aktionen", "Nur auf Anfrage", "Nur jährlich"],
      en: ["Only at problems", "Periodically (quarterly), KPI review, mutual feedback, future plans, concrete actions", "Only on request", "Only annually"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Business Review: trimestrial, prezentare KPI, analiză punctuală incidente, feedback bidirecțional, oportunități noi, planuri 3 luni.",
      de: "Business Review: vierteljährlich, KPI-Präsentation, punktuelle Vorfallanalyse, bidirektionales Feedback, neue Chancen, 3-Monats-Pläne.",
      en: "Business Review: quarterly, KPI presentation, punctual incident analysis, bidirectional feedback, new opportunities, 3-month plans."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client nou mare cere 90 zile termen de plată, verificare credit arată risc moderat. Cum procedezi?",
      de: "Großer Neukunde fordert 90 Tage Zahlungsziel, Bonitätsprüfung zeigt moderates Risiko. Wie gehst du vor?",
      en: "Large new client requests 90 days payment term, credit check shows moderate risk. How do you proceed?"
    },
    options: {
      ro: ["Accepți 90 zile", "Negociezi progresiv (30→60→90), ceri garanții, plafon expunere, credit insurance", "Refuzi complet", "Nu verifici credit"],
      de: ["90 Tage akzeptieren", "Progressiv verhandeln (30→60→90), Sicherheiten fordern, Expositionslimit, Kreditversicherung", "Komplett ablehnen", "Keine Bonitätsprüfung"],
      en: ["Accept 90 days", "Negotiate progressively (30→60→90), ask for guarantees, exposure cap, credit insurance", "Refuse completely", "Don't check credit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Abordare prudentă: 30 zile primele 3 luni, 45 apoi 60 după istoric pozitiv, plafon expunere, eventual asigurare credit.",
      de: "Umsichtiger Ansatz: 30 Tage erste 3 Monate, 45 dann 60 nach positivem Verlauf, Expositionslimit, evtl. Kreditversicherung.",
      en: "Prudent approach: 30 days first 3 months, 45 then 60 after positive history, exposure cap, possibly credit insurance."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este onboarding-ul unui client nou?",
      de: "Was ist das Onboarding eines Neukunden?",
      en: "What is new client onboarding?"
    },
    options: {
      ro: ["Prima factură", "Procesul de integrare a unui client nou în sistemele și procedurile tale", "Ultima comandă", "Contractul semnat"],
      de: ["Erste Rechnung", "Prozess zur Integration eines Neukunden in deine Systeme und Verfahren", "Letzte Bestellung", "Unterzeichneter Vertrag"],
      en: ["First invoice", "Process of integrating a new client into your systems and procedures", "Last order", "Signed contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Onboarding: setup în TMS, training proceduri, contacte cheie, SLA-uri, primul transport pilot, feedback loop.",
      de: "Onboarding: TMS-Setup, Verfahrenstraining, Schlüsselkontakte, SLAs, erster Pilot-Transport, Feedback-Schleife.",
      en: "Onboarding: TMS setup, procedures training, key contacts, SLAs, first pilot transport, feedback loop."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum identifici oportunități de creștere la clienții existenți?",
      de: "Wie identifizierst du Wachstumschancen bei bestehenden Kunden?",
      en: "How do you identify growth opportunities at existing clients?"
    },
    options: {
      ro: ["Aștepți să ceară ei", "Analizezi rute neacoperite, servicii suplimentare, volume sezoniere, dezvoltare business client", "Nu cauți activ", "Doar la tender"],
      de: ["Warten bis sie fragen", "Ungedeckte Routen analysieren, Zusatzdienste, saisonale Volumina, Kunden-Geschäftsentwicklung", "Nicht aktiv suchen", "Nur bei Ausschreibung"],
      en: ["Wait for them to ask", "Analyze uncovered routes, additional services, seasonal volumes, client business development", "Don't actively search", "Only at tender"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Creștere: mapează rute curente vs. potențial, cross-sell servicii noi, urmărește expansiune client, propune proactiv.",
      de: "Wachstum: aktuelle vs. potenzielle Routen kartieren, neue Dienste cross-sellen, Kundenexpansion verfolgen, proaktiv vorschlagen.",
      en: "Growth: map current vs. potential routes, cross-sell new services, track client expansion, propose proactively."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Analiza portofoliului: 3 clienți = 70% venituri. Risc și strategie de diversificare?",
      de: "Portfolio-Analyse: 3 Kunden = 70% Umsatz. Risiko und Diversifizierungsstrategie?",
      en: "Portfolio analysis: 3 clients = 70% revenue. Risk and diversification strategy?"
    },
    options: {
      ro: ["Nu e problemă", "Risc concentrare mare, plan: dezvoltare 5-10 clienți noi, țintă max 15% per client în 2 ani", "Renunți la cei mici", "Doar menții situația"],
      de: ["Kein Problem", "Hohes Konzentrationsrisiko, Plan: 5-10 Neukunden entwickeln, Ziel max 15% pro Kunde in 2 Jahren", "Kleine aufgeben", "Nur Situation halten"],
      en: ["No problem", "High concentration risk, plan: develop 5-10 new clients, target max 15% per client in 2 years", "Give up small ones", "Only maintain situation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diversificare: 70% în 3 clienți = risc major. Plan: achiziție agresivă clienți noi, țintă distribuție uniformă, reduce dependența.",
      de: "Diversifizierung: 70% bei 3 Kunden = Hauptrisiko. Plan: aggressive Neukundengewinnung, Ziel gleichmäßige Verteilung, Abhängigkeit reduzieren.",
      en: "Diversification: 70% in 3 clients = major risk. Plan: aggressive new client acquisition, target even distribution, reduce dependency."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt semnele de satisfacție înaltă la un client?",
      de: "Was sind Anzeichen hoher Kundenzufriedenheit?",
      en: "What are signs of high client satisfaction?"
    },
    options: {
      ro: ["Tăcerea", "Creștere volume, plată la timp, referințe, feedback pozitiv, contract extins", "Reclamații", "Comenzi sporadice"],
      de: ["Schweigen", "Volumenwachstum, pünktliche Zahlung, Empfehlungen, positives Feedback, Vertragsverlängerung", "Beschwerden", "Sporadische Bestellungen"],
      en: ["Silence", "Volume growth, on-time payment, references, positive feedback, extended contract", "Complaints", "Sporadic orders"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Client satisfăcut: mărește volume, plătește la timp, te recomandă altora, răspunde pozitiv în survey-uri, vrea contract lung.",
      de: "Zufriedener Kunde: erhöht Volumina, zahlt pünktlich, empfiehlt dich weiter, antwortet positiv in Umfragen, will langen Vertrag.",
      en: "Satisfied client: increases volumes, pays on time, recommends you to others, responds positively in surveys, wants long contract."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi așteptările unui client cu cerințe nerealiste?",
      de: "Wie managst du die Erwartungen eines Kunden mit unrealistischen Anforderungen?",
      en: "How do you manage expectations of a client with unrealistic requirements?"
    },
    options: {
      ro: ["Promiți tot", "Clarifici limitări, oferi alternative realiste, documentezi în scris, educi cu date", "Refuzi totul", "Nu răspunzi"],
      de: ["Alles versprechen", "Grenzen klären, realistische Alternativen anbieten, schriftlich dokumentieren, mit Daten aufklären", "Alles ablehnen", "Nicht antworten"],
      en: ["Promise everything", "Clarify limitations, offer realistic alternatives, document in writing, educate with data", "Refuse everything", "Don't respond"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Așteptări nerealiste: explici ce e posibil și ce nu, oferi alternative, documentezi, nu promiți ce nu poți livra.",
      de: "Unrealistische Erwartungen: erklären was möglich ist und was nicht, Alternativen anbieten, dokumentieren, nicht versprechen was nicht lieferbar.",
      en: "Unrealistic expectations: explain what's possible and what's not, offer alternatives, document, don't promise what you can't deliver."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client cheie plecat la concurent acum 6 luni. Strategie de win-back?",
      de: "Schlüsselkunde vor 6 Monaten zum Wettbewerber gewechselt. Win-back-Strategie?",
      en: "Key client left for competitor 6 months ago. Win-back strategy?"
    },
    options: {
      ro: ["Aștepți să revină singur", "Analizezi motivul plecării, adresezi problemele, ofertă nouă diferențiată, timing corect (sfârșit contract)", "Uitați de client", "Critici concurența"],
      de: ["Warten bis er von selbst zurückkommt", "Weggangsgrund analysieren, Probleme adressieren, neues differenziertes Angebot, korrektes Timing (Vertragsende)", "Kunden vergessen", "Wettbewerb kritisieren"],
      en: ["Wait for them to return alone", "Analyze departure reason, address issues, new differentiated offer, correct timing (contract end)", "Forget client", "Criticize competition"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Win-back: înțelege de ce a plecat, rezolvă problema intern, oferă valoare nouă, contactează strategic înainte de reînnoirea contractului lor.",
      de: "Win-back: verstehen warum gegangen, Problem intern lösen, neuen Wert bieten, strategisch vor deren Vertragsverlängerung kontaktieren.",
      en: "Win-back: understand why they left, solve problem internally, offer new value, contact strategically before their contract renewal."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este CRM-ul și de ce e important în managementul clienților?",
      de: "Was ist CRM und warum ist es wichtig im Kundenmanagement?",
      en: "What is CRM and why is it important in client management?"
    },
    options: {
      ro: ["Contabilitate", "Customer Relationship Management - sistem pentru gestionarea relațiilor și datelor clienți", "Transport management", "Resurse umane"],
      de: ["Buchhaltung", "Customer Relationship Management - System zur Verwaltung von Kundenbeziehungen und -daten", "Transport-Management", "Personalwesen"],
      en: ["Accounting", "Customer Relationship Management - system for managing client relationships and data", "Transport management", "Human resources"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CRM: centralizează contacte, istoric interacțiuni, oportunități, pipeline, sarcini. Esențial pentru relații profesionale și scalabile.",
      de: "CRM: zentralisiert Kontakte, Interaktionshistorie, Chancen, Pipeline, Aufgaben. Wesentlich für professionelle und skalierbare Beziehungen.",
      en: "CRM: centralizes contacts, interaction history, opportunities, pipeline, tasks. Essential for professional and scalable relationships."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum măsori calitatea relației cu un client?",
      de: "Wie misst du die Qualität der Beziehung zu einem Kunden?",
      en: "How do you measure relationship quality with a client?"
    },
    options: {
      ro: ["Doar prin venit", "NPS, retenție, share of wallet, timp de răspuns la probleme, comunicare bidirecțională", "Doar prin reclamații", "Nu se măsoară"],
      de: ["Nur durch Umsatz", "NPS, Retention, Share of Wallet, Problemreaktionszeit, bidirektionale Kommunikation", "Nur durch Beschwerden", "Nicht messbar"],
      en: ["Only by revenue", "NPS, retention, share of wallet, problem response time, bidirectional communication", "Only by complaints", "Cannot be measured"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Calitate relație: NPS (recomandare), retenție (rămâne), share of wallet (% din totalul lui), accesibilitate stakeholders, comunicare deschisă.",
      de: "Beziehungsqualität: NPS (Empfehlung), Retention (bleibt), Share of Wallet (% von seinem Gesamt), Stakeholder-Zugänglichkeit, offene Kommunikation.",
      en: "Relationship quality: NPS (recommendation), retention (stays), share of wallet (% of their total), stakeholder accessibility, open communication."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Fuziune la client: buyer-ul tău devine subordonat noii conduceri. Cum protejezi relația?",
      de: "Fusion beim Kunden: dein Buyer wird der neuen Führung unterstellt. Wie schützt du die Beziehung?",
      en: "Merger at client: your buyer becomes subordinate to new management. How do you protect the relationship?"
    },
    options: {
      ro: ["Aștepți să vezi ce se întâmplă", "Identifici noii decidenți, ceri introducere, prezinți valoarea, adaptezi la noile cerințe", "Ignori schimbarea", "Renunți la client"],
      de: ["Abwarten was passiert", "Neue Entscheider identifizieren, um Vorstellung bitten, Wert präsentieren, an neue Anforderungen anpassen", "Änderung ignorieren", "Kunden aufgeben"],
      en: ["Wait to see what happens", "Identify new decision makers, ask for introduction, present value, adapt to new requirements", "Ignore change", "Give up client"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Schimbare organizațională: contactul vechi face introducere la noul management, prezinți track record, te adaptezi rapid la noile priorități.",
      de: "Organisatorische Änderung: alter Kontakt macht Vorstellung beim neuen Management, Track Record präsentieren, schnell an neue Prioritäten anpassen.",
      en: "Organizational change: old contact makes introduction to new management, present track record, quickly adapt to new priorities."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'share of wallet' în relația cu clientul?",
      de: "Was ist 'Share of Wallet' in der Kundenbeziehung?",
      en: "What is 'share of wallet' in client relationship?"
    },
    options: {
      ro: ["Partea din portofel", "Procentul din totalul cheltuielilor clientului pe transport pe care îl captezi tu", "Număr de facturi", "Valoarea contractului"],
      de: ["Anteil am Portemonnaie", "Prozentsatz der gesamten Transportausgaben des Kunden die du erfasst", "Anzahl Rechnungen", "Vertragswert"],
      en: ["Part of wallet", "Percentage of client's total transport spending that you capture", "Number of invoices", "Contract value"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Share of wallet: din 1M€ cheltuieli transport ale clientului, tu faci 300k€ = 30% share. Țintă: crește share-ul.",
      de: "Share of Wallet: von 1M€ Transportausgaben des Kunden machst du 300k€ = 30% Anteil. Ziel: Anteil erhöhen.",
      en: "Share of wallet: from €1M of client's transport spending, you do €300k = 30% share. Target: increase share."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum prioritizezi timpul între clienții existenți și prospectarea de clienți noi?",
      de: "Wie priorisierst du Zeit zwischen bestehenden Kunden und Neukundenakquise?",
      en: "How do you prioritize time between existing clients and new client prospecting?"
    },
    options: {
      ro: ["100% clienți existenți", "70-80% existenți (dezvoltare, retenție), 20-30% prospectare (creștere, diversificare)", "100% prospectare", "50-50 mereu"],
      de: ["100% bestehende Kunden", "70-80% bestehende (Entwicklung, Retention), 20-30% Akquise (Wachstum, Diversifizierung)", "100% Akquise", "Immer 50-50"],
      en: ["100% existing clients", "70-80% existing (development, retention), 20-30% prospecting (growth, diversification)", "100% prospecting", "Always 50-50"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Balanță: majoritatea timpului pe clienți existenți (mai profitabil), dar alocare constantă pentru clienți noi (diversificare, creștere).",
      de: "Balance: Großteil der Zeit für bestehende Kunden (profitabler), aber konstante Allokation für Neukunden (Diversifizierung, Wachstum).",
      en: "Balance: majority of time on existing clients (more profitable), but constant allocation for new clients (diversification, growth)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare program de loializare pentru top 20 clienți. Elemente și mecanisme?",
      de: "Implementierung Loyalitätsprogramm für Top 20-Kunden. Elemente und Mechanismen?",
      en: "Implementing loyalty program for top 20 clients. Elements and mechanisms?"
    },
    options: {
      ro: ["Doar reduceri de preț", "Niveluri de beneficii, acces prioritar la capacitate, KAM dedicat, business reviews, evenimente exclusive", "Doar carduri de fidelitate", "Doar puncte"],
      de: ["Nur Preisreduktionen", "Vorteilsstufen, Prioritätszugang zu Kapazität, dedizierter KAM, Business Reviews, exklusive Events", "Nur Treuekarten", "Nur Punkte"],
      en: ["Only price reductions", "Benefit tiers, priority access to capacity, dedicated KAM, business reviews, exclusive events", "Only loyalty cards", "Only points"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Program loializare B2B: tiers (gold/platinum), prioritate capacitate peak, KAM dedicat, preț stabil, invitații evenimente, raportare custom.",
      de: "B2B-Loyalitätsprogramm: Tiers (Gold/Platin), Kapazitätspriorität in Spitzenzeiten, dedizierter KAM, stabiler Preis, Event-Einladungen, Custom-Reporting.",
      en: "B2B loyalty program: tiers (gold/platinum), peak capacity priority, dedicated KAM, stable pricing, event invitations, custom reporting."
    }
  }
];
