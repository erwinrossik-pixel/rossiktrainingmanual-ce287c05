import { TranslatedQuizQuestion } from '../../quizTranslations';

export const riskManagementComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tipuri principale de riscuri există în transportul de marfă?",
      de: "Welche Hauptrisikoarten gibt es im Gütertransport?",
      en: "What main types of risks exist in freight transport?"
    },
    options: {
      ro: ["Doar financiare", "Operaționale, financiare, juridice, reputaționale, de piață", "Doar de drum", "Doar meteorologice"],
      de: ["Nur finanzielle", "Operative, finanzielle, rechtliche, Reputations-, Marktrisiken", "Nur Straßenrisiken", "Nur Wetterrisiken"],
      en: ["Only financial", "Operational, financial, legal, reputational, market risks", "Only road risks", "Only weather risks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Riscuri transport: operaționale (daune, întârzieri), financiare (neplată), juridice (răspundere), reputaționale, de piață (cerere/ofertă).",
      de: "Transportrisiken: operative (Schäden, Verzögerungen), finanzielle (Nichtzahlung), rechtliche (Haftung), Reputation, Markt (Angebot/Nachfrage).",
      en: "Transport risks: operational (damages, delays), financial (non-payment), legal (liability), reputational, market (supply/demand)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este matricea de risc?",
      de: "Was ist eine Risikomatrix?",
      en: "What is a risk matrix?"
    },
    options: {
      ro: ["Un tip de asigurare", "Instrument de evaluare care combină probabilitatea și impactul riscurilor", "Un document legal", "O rută de transport"],
      de: ["Eine Versicherungsart", "Bewertungsinstrument das Wahrscheinlichkeit und Auswirkung von Risiken kombiniert", "Ein Rechtsdokument", "Eine Transportroute"],
      en: ["A type of insurance", "Assessment tool combining probability and impact of risks", "A legal document", "A transport route"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Matrice risc: axe probabilitate (scăzută-medie-ridicată) × impact (minor-moderat-sever). Risc ridicat = probabilitate mare + impact sever.",
      de: "Risikomatrix: Achsen Wahrscheinlichkeit (gering-mittel-hoch) × Auswirkung (gering-moderat-schwer). Hohes Risiko = hohe Wahrscheinlichkeit + schwere Auswirkung.",
      en: "Risk matrix: axes probability (low-medium-high) × impact (minor-moderate-severe). High risk = high probability + severe impact."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi riscul de neplată de la clienți noi?",
      de: "Wie managst du das Nichtzahlungsrisiko bei Neukunden?",
      en: "How do you manage non-payment risk from new clients?"
    },
    options: {
      ro: ["Accepți orice client", "Verificare credit, termene scurte, limite expunere, asigurare credit, garanții", "Doar cash în avans", "Nu lucrezi cu clienți noi"],
      de: ["Jeden Kunden akzeptieren", "Bonitätsprüfung, kurze Fristen, Expositionslimits, Kreditversicherung, Garantien", "Nur Vorauszahlung", "Nicht mit Neukunden arbeiten"],
      en: ["Accept any client", "Credit check, short terms, exposure limits, credit insurance, guarantees", "Only cash in advance", "Don't work with new clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Risc neplată: verificare solvabilitate, termene 14-30 zile pentru noi, plafon expunere, credit insurance pentru volume mari.",
      de: "Nichtzahlungsrisiko: Solvabilitätsprüfung, 14-30 Tage Fristen für Neue, Expositionslimit, Kreditversicherung für große Volumina.",
      en: "Non-payment risk: solvency check, 14-30 day terms for new, exposure cap, credit insurance for large volumes."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Evaluare risc pentru transport produse farmaceutice GDP 500.000€ pe rută nouă. Factori și mitigări?",
      de: "Risikobewertung für GDP-Pharmatransport 500.000€ auf neuer Route. Faktoren und Mitigationen?",
      en: "Risk assessment for GDP pharma transport €500,000 on new route. Factors and mitigations?"
    },
    options: {
      ro: ["Doar asigurare standard", "Carrier certificat GDP, trasabilitate temperatură, rută securizată, asigurare adecvată, plan contingență", "Doar preț mare", "Doar contract lung"],
      de: ["Nur Standardversicherung", "GDP-zertifizierter Carrier, Temperatur-Rückverfolgbarkeit, gesicherte Route, adäquate Versicherung, Notfallplan", "Nur hoher Preis", "Nur langer Vertrag"],
      en: ["Only standard insurance", "GDP certified carrier, temperature traceability, secured route, adequate insurance, contingency plan", "Only high price", "Only long contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pharma GDP: carrier cu certificare GDP, logger temperatură calibrat, traseu evaluat (parcări sigure), asigurare 500k+, SOP excursii temperatură.",
      de: "Pharma GDP: GDP-zertifizierter Carrier, kalibrierter Temperaturlogger, bewertete Route (sichere Parkplätze), Versicherung 500k+, SOP Temperaturabweichungen.",
      en: "Pharma GDP: GDP certified carrier, calibrated temperature logger, assessed route (secure parking), insurance 500k+, SOP temperature excursions."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un plan de contingență în transport?",
      de: "Was ist ein Notfallplan im Transport?",
      en: "What is a contingency plan in transport?"
    },
    options: {
      ro: ["Plan de marketing", "Proceduri alternative pregătite pentru situații neprevăzute", "Plan de prețuri", "Contract suplimentar"],
      de: ["Marketingplan", "Vorbereitete alternative Verfahren für unvorhergesehene Situationen", "Preisplan", "Zusatzvertrag"],
      en: ["Marketing plan", "Prepared alternative procedures for unforeseen situations", "Pricing plan", "Additional contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contingență: plan B pentru defecțiuni, accidente, închideri drumuri, probleme carrier. Definit în avans, activat rapid.",
      de: "Notfall: Plan B für Pannen, Unfälle, Straßensperrungen, Carrier-Probleme. Im Voraus definiert, schnell aktiviert.",
      en: "Contingency: plan B for breakdowns, accidents, road closures, carrier issues. Defined in advance, quickly activated."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum evaluezi și gestionezi riscul de furt în transport?",
      de: "Wie bewertest und managst du Diebstahlrisiko im Transport?",
      en: "How do you assess and manage theft risk in transport?"
    },
    options: {
      ro: ["Ignori", "Analiză rută (zone risc), vehicule securizate, GPS tracking, protocoale parcare, asigurare specifică", "Doar asigurare", "Doar șofer armat"],
      de: ["Ignorieren", "Routenanalyse (Risikozonen), gesicherte Fahrzeuge, GPS-Tracking, Parkprotokolle, spezifische Versicherung", "Nur Versicherung", "Nur bewaffneter Fahrer"],
      en: ["Ignore", "Route analysis (risk zones), secured vehicles, GPS tracking, parking protocols, specific insurance", "Only insurance", "Only armed driver"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Anti-furt: evită zone risc (A7 Franța, autostrada soarelui Italia), parcări securizate, GPS real-time, sigilii, asigurare cargo extinsă.",
      de: "Anti-Diebstahl: Risikozonen meiden (A7 Frankreich, Sonnenautobahn Italien), sichere Parkplätze, Echtzeit-GPS, Siegel, erweiterte Frachtversicherung.",
      en: "Anti-theft: avoid risk zones (A7 France, sunshine highway Italy), secure parking, real-time GPS, seals, extended cargo insurance."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client solicită transport valoare 2M€ electronice. Risk assessment complet și prețul riscului?",
      de: "Kunde fordert Transport 2M€ Elektronik. Vollständiges Risk Assessment und Risikopreis?",
      en: "Client requests transport of €2M electronics. Complete risk assessment and risk pricing?"
    },
    options: {
      ro: ["Preț standard + 5%", "Evaluare rută, security measures, asigurare dedicată, escort opțional, premium risc 15-25%", "Refuz transport", "Doar asigurare normală"],
      de: ["Standardpreis + 5%", "Routenbewertung, Sicherheitsmaßnahmen, dedizierte Versicherung, optionale Eskorte, Risikoprämie 15-25%", "Transport ablehnen", "Nur normale Versicherung"],
      en: ["Standard price + 5%", "Route evaluation, security measures, dedicated insurance, optional escort, risk premium 15-25%", "Refuse transport", "Only normal insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "High-value: rută optimizată, vehicul securizat, tracking 24/7, asigurare all-risk 2M€, protocol comunicare, premium 15-25% pentru risc.",
      de: "High-Value: optimierte Route, gesichertes Fahrzeug, 24/7-Tracking, All-Risk-Versicherung 2M€, Kommunikationsprotokoll, 15-25% Risikoprämie.",
      en: "High-value: optimized route, secured vehicle, 24/7 tracking, all-risk insurance €2M, communication protocol, 15-25% risk premium."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă transfer de risc către terți?",
      de: "Was bedeutet Risikotransfer an Dritte?",
      en: "What does risk transfer to third parties mean?"
    },
    options: {
      ro: ["A ascunde riscul", "Mutarea riscului către asigurător sau subcontractor prin contract/poliță", "A ignora riscul", "A amâna riscul"],
      de: ["Risiko verstecken", "Risiko durch Vertrag/Police auf Versicherer oder Subunternehmer übertragen", "Risiko ignorieren", "Risiko aufschieben"],
      en: ["Hiding risk", "Moving risk to insurer or subcontractor through contract/policy", "Ignoring risk", "Postponing risk"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transfer risc: prin asigurare (plătești primă, asigurătorul preia riscul) sau contract (carrier răspunde pentru marfă conform CMR).",
      de: "Risikotransfer: durch Versicherung (Prämie zahlen, Versicherer übernimmt Risiko) oder Vertrag (Carrier haftet für Fracht gemäß CMR).",
      en: "Risk transfer: through insurance (pay premium, insurer takes risk) or contract (carrier liable for cargo per CMR)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi riscul de întârziere în lanțul logistic?",
      de: "Wie managst du Verzögerungsrisiko in der Lieferkette?",
      en: "How do you manage delay risk in the supply chain?"
    },
    options: {
      ro: ["Ignori", "Buffer timp, alternative carriers, monitorizare proactivă, comunicare timpurie, clauze FM", "Doar penalități", "Doar scuze"],
      de: ["Ignorieren", "Zeitpuffer, alternative Carrier, proaktives Monitoring, frühzeitige Kommunikation, FM-Klauseln", "Nur Strafen", "Nur Entschuldigungen"],
      en: ["Ignore", "Time buffer, alternative carriers, proactive monitoring, early communication, FM clauses", "Only penalties", "Only excuses"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Risc întârziere: planificare cu buffer, back-up carriers, GPS tracking, alertă proactivă client, clauze forță majoră în contract.",
      de: "Verzögerungsrisiko: Planung mit Puffer, Back-up Carrier, GPS-Tracking, proaktive Kundenalarmierung, Force Majeure-Klauseln im Vertrag.",
      en: "Delay risk: planning with buffer, back-up carriers, GPS tracking, proactive client alert, force majeure clauses in contract."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare framework de risk management pentru operațiuni transport. Componente cheie?",
      de: "Entwicklung Risk Management Framework für Transportoperationen. Schlüsselkomponenten?",
      en: "Developing risk management framework for transport operations. Key components?"
    },
    options: {
      ro: ["Doar asigurări", "Identificare, evaluare, mitigare, monitorizare, raportare, review periodic, cultură risc", "Doar proceduri", "Doar training"],
      de: ["Nur Versicherungen", "Identifikation, Bewertung, Mitigation, Monitoring, Berichterstattung, periodisches Review, Risikokultur", "Nur Verfahren", "Nur Training"],
      en: ["Only insurances", "Identification, assessment, mitigation, monitoring, reporting, periodic review, risk culture", "Only procedures", "Only training"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Framework: registru riscuri, matrice evaluare, planuri mitigare, KRI (indicatori risc), raportare lunară, audit anual, cultură conștientizare risc.",
      de: "Framework: Risikoregister, Bewertungsmatrix, Mitigationspläne, KRI (Risikoindikatoren), monatliche Berichterstattung, jährliches Audit, Risikobewusstseinskultur.",
      en: "Framework: risk register, assessment matrix, mitigation plans, KRI (risk indicators), monthly reporting, annual audit, risk awareness culture."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este diversificarea ca strategie de risc?",
      de: "Was ist Diversifizierung als Risikostrategie?",
      en: "What is diversification as a risk strategy?"
    },
    options: {
      ro: ["Concentrare pe un client", "Distribuirea riscului pe mai mulți clienți, rute, transportatori", "Creșterea prețurilor", "Reducerea serviciilor"],
      de: ["Konzentration auf einen Kunden", "Risikoverteilung auf mehrere Kunden, Routen, Transportunternehmer", "Preiserhöhung", "Servicereduktion"],
      en: ["Concentration on one client", "Distributing risk across multiple clients, routes, carriers", "Price increase", "Service reduction"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diversificare: nu mai mult de 20% venituri de la un client, carrier pool variat, mix rute/industrii. Reduce impactul unei probleme.",
      de: "Diversifizierung: nicht mehr als 20% Umsatz von einem Kunden, vielfältiger Carrier-Pool, Routen-/Branchenmix. Reduziert Auswirkung eines Problems.",
      en: "Diversification: no more than 20% revenue from one client, varied carrier pool, routes/industries mix. Reduces impact of any problem."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum evaluezi riscul operațional al unui transportator nou?",
      de: "Wie bewertest du das operative Risiko eines neuen Transportunternehmers?",
      en: "How do you assess operational risk of a new carrier?"
    },
    options: {
      ro: ["Doar după preț", "Verificare licențe, flotă, asigurări, istoric, referințe, stabilitate financiară, teste pilot", "Doar întrebare telefonică", "Nu evaluezi"],
      de: ["Nur nach Preis", "Prüfung Lizenzen, Flotte, Versicherungen, Historie, Referenzen, finanzielle Stabilität, Pilottests", "Nur telefonische Anfrage", "Nicht bewerten"],
      en: ["Only by price", "Verify licenses, fleet, insurances, history, references, financial stability, pilot tests", "Only phone inquiry", "Don't assess"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Due diligence carrier: documente legale, vechime flotă, polițe valide, rating burse, bonitate, 3-5 transporturi test monitorizate.",
      de: "Carrier Due Diligence: Rechtsdokumente, Flottenalter, gültige Policen, Börsenrating, Bonität, 3-5 überwachte Testtransporte.",
      en: "Carrier due diligence: legal documents, fleet age, valid policies, exchange rating, creditworthiness, 3-5 monitored test transports."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Criză: epidemie închide granițe, 50 transporturi în curs. Plan de criză și comunicare?",
      de: "Krise: Epidemie schließt Grenzen, 50 laufende Transporte. Krisenplan und Kommunikation?",
      en: "Crisis: epidemic closes borders, 50 transports in progress. Crisis plan and communication?"
    },
    options: {
      ro: ["Aștepți să treacă", "Activare celulă criză, inventar transporturi, comunicare clienți, rute alternative, lobby, documentare", "Anulezi tot", "Ignori situația"],
      de: ["Warten bis es vorbei ist", "Krisenzelle aktivieren, Transportinventar, Kundenkommunikation, Alternativrouten, Lobbying, Dokumentation", "Alles stornieren", "Situation ignorieren"],
      en: ["Wait for it to pass", "Activate crisis cell, transport inventory, client communication, alternative routes, lobbying, documentation", "Cancel everything", "Ignore situation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Criză: echipă dedicată 24/7, status fiecare transport, comunicare proactivă clienți (actualizări regulate), căutare rute alternative, documentație FM.",
      de: "Krise: dediziertes Team 24/7, Status jedes Transports, proaktive Kundenkommunikation (regelmäßige Updates), alternative Routen suchen, FM-Dokumentation.",
      en: "Crisis: dedicated team 24/7, status each transport, proactive client communication (regular updates), search alternative routes, FM documentation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este expunerea la risc (risk exposure)?",
      de: "Was ist Risikoexposition (Risk Exposure)?",
      en: "What is risk exposure?"
    },
    options: {
      ro: ["Fotografie de risc", "Valoarea totală potențial afectată de un anumit risc", "Asigurare", "Contract"],
      de: ["Risikofoto", "Gesamtwert der potenziell von einem bestimmten Risiko betroffen ist", "Versicherung", "Vertrag"],
      en: ["Risk photo", "Total value potentially affected by a certain risk", "Insurance", "Contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expunere: dacă clientul X îți datorează 200.000€, expunerea ta la riscul de neplată al lui X este 200.000€.",
      de: "Exposition: wenn Kunde X dir 200.000€ schuldet, ist deine Exposition gegenüber dem Nichtzahlungsrisiko von X 200.000€.",
      en: "Exposure: if client X owes you €200,000, your exposure to X's non-payment risk is €200,000."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum stabilești limite de expunere pentru clienți?",
      de: "Wie legst du Expositionslimits für Kunden fest?",
      en: "How do you set exposure limits for clients?"
    },
    options: {
      ro: ["Fără limite", "Bazat pe solvabilitate, istoric plăți, volum, asigurare credit disponibilă", "Aceleași pentru toți", "Doar după simțire"],
      de: ["Keine Limits", "Basierend auf Bonität, Zahlungshistorie, Volumen, verfügbare Kreditversicherung", "Gleiche für alle", "Nur nach Gefühl"],
      en: ["No limits", "Based on solvency, payment history, volume, available credit insurance", "Same for all", "Only by feeling"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Limite expunere: scor credit determină plafon, istoric pozitiv mărește limita, credit insurance permite limite mai mari pentru clienți strategici.",
      de: "Expositionslimits: Kredit-Score bestimmt Obergrenze, positive Historie erhöht Limit, Kreditversicherung ermöglicht höhere Limits für strategische Kunden.",
      en: "Exposure limits: credit score determines ceiling, positive history increases limit, credit insurance allows higher limits for strategic clients."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare sistem ERM (Enterprise Risk Management) pentru companie de transport. Etape și beneficii?",
      de: "Implementierung ERM-System (Enterprise Risk Management) für Transportunternehmen. Schritte und Vorteile?",
      en: "Implementing ERM (Enterprise Risk Management) system for transport company. Steps and benefits?"
    },
    options: {
      ro: ["Doar angajare risk manager", "Governance, identificare riscuri, evaluare, răspuns, monitorizare, integrare în decizii, raportare", "Doar proceduri scrise", "Doar software"],
      de: ["Nur Risk Manager einstellen", "Governance, Risikoidentifikation, Bewertung, Reaktion, Monitoring, Integration in Entscheidungen, Berichterstattung", "Nur schriftliche Verfahren", "Nur Software"],
      en: ["Only hire risk manager", "Governance, risk identification, assessment, response, monitoring, integration into decisions, reporting", "Only written procedures", "Only software"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ERM: comitet risc (governance), registru riscuri centralizat, KRI monitorizați, integrare în planificare strategică, cultură risc, raportare board.",
      de: "ERM: Risikokomitee (Governance), zentralisiertes Risikoregister, überwachte KRI, Integration in strategische Planung, Risikokultur, Board-Berichterstattung.",
      en: "ERM: risk committee (governance), centralized risk register, monitored KRI, integration into strategic planning, risk culture, board reporting."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este forța majoră (Force Majeure) în contracte de transport?",
      de: "Was ist Force Majeure (höhere Gewalt) in Transportverträgen?",
      en: "What is Force Majeure in transport contracts?"
    },
    options: {
      ro: ["Amendă mare", "Evenimente imprevizibile și inevitabile care împiedică executarea contractului", "Forță militară", "Contract puternic"],
      de: ["Große Strafe", "Unvorhersehbare und unvermeidbare Ereignisse die Vertragserfüllung verhindern", "Militärische Gewalt", "Starker Vertrag"],
      en: ["Large fine", "Unforeseeable and unavoidable events preventing contract execution", "Military force", "Strong contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Force Majeure: dezastre naturale, războaie, pandemii, greve generale. Exonerează de răspundere dacă e definită corect în contract.",
      de: "Force Majeure: Naturkatastrophen, Kriege, Pandemien, Generalstreiks. Befreit von Haftung wenn korrekt im Vertrag definiert.",
      en: "Force Majeure: natural disasters, wars, pandemics, general strikes. Exempts from liability if correctly defined in contract."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum documentezi și raportezi incidentele de risc?",
      de: "Wie dokumentierst und meldest du Risikovorfälle?",
      en: "How do you document and report risk incidents?"
    },
    options: {
      ro: ["Nu documentezi", "Raport incident standardizat, analiză cauze, acțiuni corective, trend tracking, lecții învățate", "Doar verbal", "Doar la cerere"],
      de: ["Nicht dokumentieren", "Standardisierter Vorfallbericht, Ursachenanalyse, Korrekturmaßnahmen, Trend-Tracking, Lessons Learned", "Nur mündlich", "Nur auf Anfrage"],
      en: ["Don't document", "Standardized incident report, root cause analysis, corrective actions, trend tracking, lessons learned", "Only verbal", "Only on request"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentare incident: formular standard (ce/când/unde/cine/impact), RCA (root cause), acțiuni prevenție, tracking pattern-uri, debrief echipă.",
      de: "Vorfallsdokumentation: Standardformular (was/wann/wo/wer/Auswirkung), RCA (Ursache), Präventionsmaßnahmen, Mustertracking, Team-Debrief.",
      en: "Incident documentation: standard form (what/when/where/who/impact), RCA (root cause), prevention actions, pattern tracking, team debrief."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenarii stress test pentru operațiuni: pierdere client major (30% venituri) + creștere diesel 50%. Răspuns?",
      de: "Stresstestszenarien für Operationen: Verlust Hauptkunde (30% Umsatz) + 50% Dieselanstieg. Reaktion?",
      en: "Stress test scenarios for operations: major client loss (30% revenue) + 50% diesel increase. Response?"
    },
    options: {
      ro: ["Faliment", "Plan: reducere costuri proporțională, accelerare achiziție clienți, fuel surcharge activation, renegociere contracte", "Aștepți să treacă", "Doar concedieri"],
      de: ["Konkurs", "Plan: proportionale Kostenreduktion, beschleunigte Kundenakquise, Fuel Surcharge-Aktivierung, Vertragsneumverhandlung", "Warten bis es vorbei ist", "Nur Entlassungen"],
      en: ["Bankruptcy", "Plan: proportional cost reduction, accelerated client acquisition, fuel surcharge activation, contract renegotiation", "Wait for it to pass", "Only layoffs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Stress test response: reducere overhead 15-20%, sales push agresiv, activare clauze fuel surcharge, renegociere cu toți clienții, linie credit backup.",
      de: "Stresstest-Reaktion: 15-20% Overhead-Reduktion, aggressiver Sales-Push, Fuel Surcharge-Klauseln aktivieren, Neuverhandlung mit allen Kunden, Backup-Kreditlinie.",
      en: "Stress test response: 15-20% overhead reduction, aggressive sales push, activate fuel surcharge clauses, renegotiate with all clients, backup credit line."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă apetitul de risc al unei companii?",
      de: "Was bedeutet die Risikobereitschaft eines Unternehmens?",
      en: "What does a company's risk appetite mean?"
    },
    options: {
      ro: ["Mâncarea de risc", "Nivelul de risc pe care compania este dispusă să-l accepte pentru a-și atinge obiectivele", "Zero riscuri", "Toate riscurile"],
      de: ["Risikoessen", "Risikoniveau das das Unternehmen bereit ist zu akzeptieren um seine Ziele zu erreichen", "Null Risiken", "Alle Risiken"],
      en: ["Risk eating", "Level of risk the company is willing to accept to achieve its objectives", "Zero risks", "All risks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Apetit risc: câtă incertitudine accepti pentru creștere? Conservator = marje mici, sigure. Agresiv = riscuri mai mari, potențial randament mai mare.",
      de: "Risikoappetit: wieviel Unsicherheit akzeptierst du für Wachstum? Konservativ = kleine, sichere Margen. Aggressiv = größere Risiken, potenziell höhere Rendite.",
      en: "Risk appetite: how much uncertainty do you accept for growth? Conservative = small, safe margins. Aggressive = larger risks, potentially higher returns."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum integrezi managementul riscului în operațiunile zilnice?",
      de: "Wie integrierst du Risikomanagement in den täglichen Betrieb?",
      en: "How do you integrate risk management into daily operations?"
    },
    options: {
      ro: ["Separat complet", "Checklist-uri pre-transport, escaladare definită, monitorizare real-time, debrief incidente", "Doar la probleme", "Doar anual"],
      de: ["Komplett getrennt", "Pre-Transport-Checklisten, definierte Eskalation, Echtzeit-Monitoring, Vorfalls-Debrief", "Nur bei Problemen", "Nur jährlich"],
      en: ["Completely separate", "Pre-transport checklists, defined escalation, real-time monitoring, incident debrief", "Only at problems", "Only annually"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrare zilnică: checklist acceptare transport, protocoale escaladare clare, dashboard monitorizare riscuri, review rapid după incidente.",
      de: "Tägliche Integration: Transportannahme-Checkliste, klare Eskalationsprotokolle, Risiko-Monitoring-Dashboard, schnelles Review nach Vorfällen.",
      en: "Daily integration: transport acceptance checklist, clear escalation protocols, risk monitoring dashboard, quick review after incidents."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cyber attack pe sistemele TMS: toate datele inaccesibile. Plan de răspuns și recuperare?",
      de: "Cyberangriff auf TMS-Systeme: alle Daten unzugänglich. Reaktions- und Wiederherstellungsplan?",
      en: "Cyber attack on TMS systems: all data inaccessible. Response and recovery plan?"
    },
    options: {
      ro: ["Plătești răscumpărarea", "Activare plan disaster recovery, operare manuală, notificare clienți/autorități, restaurare backup, forensic analysis", "Aștepți să se rezolve", "Oprești compania"],
      de: ["Lösegeld zahlen", "Disaster Recovery Plan aktivieren, manueller Betrieb, Kunden-/Behördenbenachrichtigung, Backup-Wiederherstellung, forensische Analyse", "Warten bis sich löst", "Unternehmen stoppen"],
      en: ["Pay ransom", "Activate disaster recovery plan, manual operations, notify clients/authorities, restore backup, forensic analysis", "Wait for resolution", "Stop company"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cyber response: izolare sisteme, activare DR site, operațiuni pe hârtie/telefon, notificare GDPR (72h), restaurare din backup clean, investigație post-incident.",
      de: "Cyber-Reaktion: Systemisolierung, DR-Site aktivieren, Papier-/Telefonbetrieb, GDPR-Benachrichtigung (72h), Wiederherstellung aus sauberem Backup, Post-Incident-Untersuchung.",
      en: "Cyber response: system isolation, activate DR site, paper/phone operations, GDPR notification (72h), restore from clean backup, post-incident investigation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt semnele de avertizare timpurie pentru probleme la un client?",
      de: "Was sind Frühwarnsignale für Probleme bei einem Kunden?",
      en: "What are early warning signs for problems at a client?"
    },
    options: {
      ro: ["Comenzi crescute", "Întârzieri plată, reducere volume, schimbări management frecvente, presiune prețuri extreme", "Plăți la timp", "Relație bună"],
      de: ["Steigende Bestellungen", "Zahlungsverzögerungen, Volumenrückgang, häufige Managementwechsel, extremer Preisdruck", "Pünktliche Zahlungen", "Gute Beziehung"],
      en: ["Increasing orders", "Payment delays, volume reduction, frequent management changes, extreme price pressure", "On-time payments", "Good relationship"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Warning signs: plăți întârziate crescând, volum în scădere, cereri repetate de reducere, restructurări, știri negative despre companie.",
      de: "Warnsignale: zunehmende Zahlungsverzögerungen, sinkendes Volumen, wiederholte Reduktionsforderungen, Umstrukturierungen, negative Unternehmensnachrichten.",
      en: "Warning signs: increasing payment delays, declining volume, repeated reduction requests, restructurings, negative company news."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi riscul valutar în transport internațional?",
      de: "Wie managst du Währungsrisiko im internationalen Transport?",
      en: "How do you manage currency risk in international transport?"
    },
    options: {
      ro: ["Ignori", "Facturare în EUR, clauze de ajustare, hedging pentru contracte mari, matching currencies", "Doar USD", "Doar moneda locală"],
      de: ["Ignorieren", "Fakturierung in EUR, Anpassungsklauseln, Hedging für große Verträge, Währungsmatching", "Nur USD", "Nur lokale Währung"],
      en: ["Ignore", "Invoice in EUR, adjustment clauses, hedging for large contracts, matching currencies", "Only USD", "Only local currency"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Risc valutar: facturezi în EUR (monedă stabilă), clauze de ajustare la variații >3%, hedging forwards pentru contracte >100k€, match încasări/plăți în aceeași valută.",
      de: "Währungsrisiko: in EUR fakturieren (stabile Währung), Anpassungsklauseln bei Variationen >3%, Hedging Forwards für Verträge >100k€, Einnahmen/Zahlungen in gleicher Währung matchen.",
      en: "Currency risk: invoice in EUR (stable currency), adjustment clauses for variations >3%, hedging forwards for contracts >€100k, match receipts/payments in same currency."
    }
  }
];
