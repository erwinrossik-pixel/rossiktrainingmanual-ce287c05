import { TranslatedQuizQuestion } from '../../quizTranslations';

export const carrierManagementComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce criterii sunt esențiale la selectarea unui transportator?",
      de: "Welche Kriterien sind bei der Auswahl eines Transportunternehmers wesentlich?",
      en: "What criteria are essential when selecting a carrier?"
    },
    options: {
      ro: ["Doar prețul", "Capacitate, fiabilitate, acoperire geografică, flotă, asigurări, stabilitate financiară", "Doar distanță", "Doar vârsta flotei"],
      de: ["Nur Preis", "Kapazität, Zuverlässigkeit, geografische Abdeckung, Flotte, Versicherungen, finanzielle Stabilität", "Nur Entfernung", "Nur Flottenalter"],
      en: ["Only price", "Capacity, reliability, geographic coverage, fleet, insurances, financial stability", "Only distance", "Only fleet age"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Selectare transportator: evaluare completă - capacitate, on-time history, flotă Euro 6, CMR/asigurări, sănătate financiară, referințe.",
      de: "Transportunternehmer-Auswahl: vollständige Bewertung - Kapazität, Pünktlichkeits-Historie, Euro 6-Flotte, CMR/Versicherungen, finanzielle Gesundheit, Referenzen.",
      en: "Carrier selection: complete evaluation - capacity, on-time history, Euro 6 fleet, CMR/insurances, financial health, references."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un carrier pool (bazin de transportatori)?",
      de: "Was ist ein Carrier Pool (Transporteur-Pool)?",
      en: "What is a carrier pool?"
    },
    options: {
      ro: ["Piscină pentru șoferi", "Rețea de transportatori aprobați pentru acoperirea nevoilor de transport", "Un singur transportator", "Parteneriat exclusiv"],
      de: ["Schwimmbad für Fahrer", "Netzwerk zugelassener Transportunternehmer zur Deckung des Transportbedarfs", "Einzelner Transportunternehmer", "Exklusive Partnerschaft"],
      en: ["Swimming pool for drivers", "Network of approved carriers to cover transport needs", "Single carrier", "Exclusive partnership"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Carrier pool: rețea diversificată de transportatori verificați pentru diferite rute, tipuri de marfă, perioade de vârf. Reduce riscul.",
      de: "Carrier Pool: diversifiziertes Netzwerk verifizierter Transportunternehmer für verschiedene Routen, Güterarten, Spitzenzeiten. Reduziert Risiko.",
      en: "Carrier pool: diversified network of verified carriers for different routes, cargo types, peak periods. Reduces risk."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum verifici legitimitatea și documentația unui transportator nou?",
      de: "Wie verifizierst du Legitimität und Dokumentation eines neuen Transportunternehmers?",
      en: "How do you verify legitimacy and documentation of a new carrier?"
    },
    options: {
      ro: ["Doar telefon", "Licență transport, CMR, asigurare marfă, flotă, certificări (ADR, ATP), verificare comercială", "Doar website", "Nu verifici"],
      de: ["Nur Telefon", "Transportlizenz, CMR, Frachtversicherung, Flotte, Zertifizierungen (ADR, ATP), kommerzielle Überprüfung", "Nur Website", "Nicht verifizieren"],
      en: ["Only phone", "Transport license, CMR, cargo insurance, fleet, certifications (ADR, ATP), commercial verification", "Only website", "Don't verify"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificare: licență ARR/BAG valabilă, poliță CMR actuală, asigurare marfă adecvată, documente flotă, certificări specifice, check credit.",
      de: "Verifizierung: gültige ARR/BAG-Lizenz, aktuelle CMR-Police, angemessene Frachtversicherung, Flottendokumente, spezifische Zertifizierungen, Bonitätsprüfung.",
      en: "Verification: valid ARR/BAG license, current CMR policy, adequate cargo insurance, fleet documents, specific certifications, credit check."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Creezi un Carrier Scorecard pentru evaluarea performanței. Ce KPI incluzi?",
      de: "Du erstellst eine Carrier Scorecard zur Leistungsbewertung. Welche KPIs nimmst du auf?",
      en: "You're creating a Carrier Scorecard for performance evaluation. What KPIs do you include?"
    },
    options: {
      ro: ["Doar preț", "OTIF, rata daune, comunicare/răspuns, flexibilitate, conformitate documente, sustenabilitate", "Doar km parcurși", "Doar număr curse"],
      de: ["Nur Preis", "OTIF, Schadensquote, Kommunikation/Reaktion, Flexibilität, Dokumenten-Compliance, Nachhaltigkeit", "Nur gefahrene km", "Nur Fahrtenanzahl"],
      en: ["Only price", "OTIF, damage rate, communication/response, flexibility, document compliance, sustainability", "Only km driven", "Only number of trips"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Scorecard: OTIF (40%), daune (20%), comunicare (15%), flexibilitate (10%), documente (10%), ESG (5%). Scor ponderat lunar/trimestrial.",
      de: "Scorecard: OTIF (40%), Schäden (20%), Kommunikation (15%), Flexibilität (10%), Dokumente (10%), ESG (5%). Gewichteter Score monatlich/vierteljährlich.",
      en: "Scorecard: OTIF (40%), damages (20%), communication (15%), flexibility (10%), documents (10%), ESG (5%). Weighted score monthly/quarterly."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este OTIF (On Time In Full) pentru transportatori?",
      de: "Was ist OTIF (On Time In Full) für Transportunternehmer?",
      en: "What is OTIF (On Time In Full) for carriers?"
    },
    options: {
      ro: ["Tip de camion", "Procentul livrărilor la timp și complete", "Tip de combustibil", "Tip de marfă"],
      de: ["LKW-Typ", "Prozentsatz pünktlicher und vollständiger Lieferungen", "Kraftstofftyp", "Güterart"],
      en: ["Truck type", "Percentage of on-time and complete deliveries", "Fuel type", "Cargo type"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OTIF: livrare în fereastra promisă (On Time) cu marfa intactă și completă (In Full). Standard: 95%+ este foarte bun.",
      de: "OTIF: Lieferung im versprochenen Zeitfenster (On Time) mit intakter und vollständiger Ware (In Full). Standard: 95%+ ist sehr gut.",
      en: "OTIF: delivery in promised window (On Time) with intact and complete cargo (In Full). Standard: 95%+ is very good."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum negociezi rate competitive cu transportatorii menținând calitatea?",
      de: "Wie verhandelst du wettbewerbsfähige Tarife mit Transportunternehmern bei Qualitätserhalt?",
      en: "How do you negotiate competitive rates with carriers while maintaining quality?"
    },
    options: {
      ro: ["Cel mai mic preț mereu", "Volum angajat, rute complementare, termeni plată, relație pe termen lung, KPI-uri clare", "Doar amenințări", "Nu negociezi"],
      de: ["Immer niedrigster Preis", "Engagiertes Volumen, komplementäre Routen, Zahlungsbedingungen, langfristige Beziehung, klare KPIs", "Nur Drohungen", "Nicht verhandeln"],
      en: ["Lowest price always", "Committed volume, complementary routes, payment terms, long-term relationship, clear KPIs", "Only threats", "Don't negotiate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Negociere smart: oferă volum predictibil, plată rapidă, rute care-l ajută, relație stabilă. În schimb ceri preț bun și serviciu de calitate.",
      de: "Smarte Verhandlung: vorhersehbares Volumen bieten, schnelle Zahlung, hilfreiche Routen, stabile Beziehung. Im Gegenzug guten Preis und Qualitätsservice fordern.",
      en: "Smart negotiation: offer predictable volume, fast payment, helpful routes, stable relationship. In exchange ask for good price and quality service."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transportator strategic cu 30% din curse anunță creștere 20% tarife. Abordare negociere?",
      de: "Strategischer Transportunternehmer mit 30% der Fahrten kündigt 20% Tariferhöhung an. Verhandlungsansatz?",
      en: "Strategic carrier with 30% of trips announces 20% rate increase. Negotiation approach?"
    },
    options: {
      ro: ["Accepți imediat", "Analizezi justificarea, negociezi progresiv, explorezi alternative, diversifici portofoliul", "Refuzi categoric", "Schimbi imediat transportatorul"],
      de: ["Sofort akzeptieren", "Begründung analysieren, progressiv verhandeln, Alternativen erkunden, Portfolio diversifizieren", "Kategorisch ablehnen", "Transportunternehmer sofort wechseln"],
      en: ["Accept immediately", "Analyze justification, negotiate progressively, explore alternatives, diversify portfolio", "Categorically refuse", "Immediately change carrier"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie: verifică dacă costurile lui au crescut real, negociază etapizat (10% acum, 10% în 6 luni), dezvoltă în paralel alternative.",
      de: "Strategie: prüfen ob seine Kosten wirklich gestiegen sind, stufenweise verhandeln (10% jetzt, 10% in 6 Monaten), parallel Alternativen entwickeln.",
      en: "Strategy: verify if their costs really increased, negotiate in stages (10% now, 10% in 6 months), develop alternatives in parallel."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tipuri de relații contractuale există cu transportatorii?",
      de: "Welche vertraglichen Beziehungsarten gibt es mit Transportunternehmern?",
      en: "What types of contractual relationships exist with carriers?"
    },
    options: {
      ro: ["Doar spot", "Spot (cursă cu cursă), contract cadru (volum/perioadă), parteneriat strategic (integrare)", "Doar parteneriat", "Doar angajare"],
      de: ["Nur Spot", "Spot (Fahrt für Fahrt), Rahmenvertrag (Volumen/Zeitraum), strategische Partnerschaft (Integration)", "Nur Partnerschaft", "Nur Anstellung"],
      en: ["Only spot", "Spot (trip by trip), framework contract (volume/period), strategic partnership (integration)", "Only partnership", "Only employment"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Relații: spot (flexibil, mai scump), contract (volum angajat, preț fix), parteneriat (integrare procese, investiții comune).",
      de: "Beziehungen: Spot (flexibel, teurer), Vertrag (engagiertes Volumen, Festpreis), Partnerschaft (Prozessintegration, gemeinsame Investitionen).",
      en: "Relationships: spot (flexible, more expensive), contract (committed volume, fixed price), partnership (process integration, joint investments)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi un transportator cu performanță în scădere?",
      de: "Wie managst du einen Transportunternehmer mit sinkender Leistung?",
      en: "How do you manage a carrier with declining performance?"
    },
    options: {
      ro: ["Ignori", "Identifici cauza, comunici așteptările, stabilești plan îmbunătățire, monitorizezi, escaladezi dacă nu progresează", "Renunți imediat", "Reduci plata"],
      de: ["Ignorieren", "Ursache identifizieren, Erwartungen kommunizieren, Verbesserungsplan erstellen, überwachen, eskalieren wenn keine Verbesserung", "Sofort aufgeben", "Zahlung reduzieren"],
      en: ["Ignore", "Identify cause, communicate expectations, set improvement plan, monitor, escalate if no progress", "Give up immediately", "Reduce payment"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Management performanță: discuss deschisă despre probleme, plan de îmbunătățire cu ținte clare, review săptămânal, decizie finală dacă nu progresează.",
      de: "Performance-Management: offene Problemdiskussion, Verbesserungsplan mit klaren Zielen, wöchentliches Review, Endentscheidung bei fehlender Verbesserung.",
      en: "Performance management: open problem discussion, improvement plan with clear targets, weekly review, final decision if no progress."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Construire program de onboarding pentru transportatori noi. Etape și documente necesare?",
      de: "Onboarding-Programm für neue Transportunternehmer aufbauen. Erforderliche Schritte und Dokumente?",
      en: "Building onboarding program for new carriers. Required steps and documents?"
    },
    options: {
      ro: ["Doar contract semnat", "Verificare documente, setup IT/TMS, training proceduri, primele curse monitorizate, evaluare 30 zile", "Doar email", "Doar preț agreat"],
      de: ["Nur unterzeichneter Vertrag", "Dokumentenprüfung, IT/TMS-Setup, Verfahrenstraining, erste überwachte Fahrten, 30-Tage-Bewertung", "Nur E-Mail", "Nur vereinbarter Preis"],
      en: ["Only signed contract", "Document verification, IT/TMS setup, procedures training, first monitored trips, 30-day evaluation", "Only email", "Only agreed price"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Onboarding: checklist documente, integrare sistem, training SOP-uri, 5-10 curse pilot monitorizate, review 30 zile, decizie continuare.",
      de: "Onboarding: Dokumenten-Checkliste, Systemintegration, SOP-Training, 5-10 überwachte Pilotfahrten, 30-Tage-Review, Fortsetzungsentscheidung.",
      en: "Onboarding: document checklist, system integration, SOP training, 5-10 monitored pilot trips, 30-day review, continuation decision."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce riscuri implică dependența de un singur transportator?",
      de: "Welche Risiken birgt die Abhängigkeit von einem einzigen Transportunternehmer?",
      en: "What risks does dependency on a single carrier imply?"
    },
    options: {
      ro: ["Niciun risc", "Vulnerabilitate la întreruperi, lipsa de negociere, probleme de capacitate în peak", "Doar risc de preț", "Doar risc de calitate"],
      de: ["Kein Risiko", "Störungsanfälligkeit, fehlende Verhandlungsposition, Kapazitätsprobleme in Spitzenzeiten", "Nur Preisrisiko", "Nur Qualitätsrisiko"],
      en: ["No risk", "Vulnerability to disruptions, lack of negotiation power, peak capacity issues", "Only price risk", "Only quality risk"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Risc concentrare: dacă transportatorul are probleme, tu ești blocat. Regula: max 20-30% volum la un singur transportator.",
      de: "Konzentrationsrisiko: wenn Transportunternehmer Probleme hat, bist du blockiert. Regel: max 20-30% Volumen bei einem Transportunternehmer.",
      en: "Concentration risk: if carrier has problems, you're blocked. Rule: max 20-30% volume with a single carrier."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum structurezi un contract cadru cu un transportator?",
      de: "Wie strukturierst du einen Rahmenvertrag mit einem Transportunternehmer?",
      en: "How do you structure a framework contract with a carrier?"
    },
    options: {
      ro: ["Doar preț", "Volum, prețuri, indexare, SLA-uri, răspunderi, termene plată, reziliere, forță majoră", "Doar durată", "Doar rute"],
      de: ["Nur Preis", "Volumen, Preise, Indexierung, SLAs, Haftungen, Zahlungsfristen, Kündigung, Force Majeure", "Nur Laufzeit", "Nur Routen"],
      en: ["Only price", "Volume, prices, indexation, SLAs, liabilities, payment terms, termination, force majeure", "Only duration", "Only routes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contract cadru: volume estimate, tarife per rută/tip, indexare diesel, KPI-uri și penalități, limite CMR, termene plată, exit clauses.",
      de: "Rahmenvertrag: geschätzte Volumina, Tarife pro Route/Typ, Dieselindexierung, KPIs und Strafen, CMR-Grenzen, Zahlungsfristen, Exit-Klauseln.",
      en: "Framework contract: estimated volumes, rates per route/type, diesel indexation, KPIs and penalties, CMR limits, payment terms, exit clauses."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Tender pentru transportatori: 500 FTL/an pe 3 rute. Cum structurezi procesul de selecție?",
      de: "Tender für Transportunternehmer: 500 FTL/Jahr auf 3 Routen. Wie strukturierst du den Auswahlprozess?",
      en: "Carrier tender: 500 FTL/year on 3 routes. How do you structure the selection process?"
    },
    options: {
      ro: ["Doar preț", "RFI prescreening, RFQ cu specificații detaliate, evaluare multi-criterii, negociere finaliști, pilot, contract", "Doar întâlniri", "Primul răspuns câștigă"],
      de: ["Nur Preis", "RFI-Vorauswahl, RFQ mit detaillierten Spezifikationen, Multi-Kriterienbewertung, Finalistenverhandlung, Pilot, Vertrag", "Nur Meetings", "Erste Antwort gewinnt"],
      en: ["Only price", "RFI prescreening, RFQ with detailed specs, multi-criteria evaluation, finalist negotiation, pilot, contract", "Only meetings", "First response wins"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tender: RFI (califici 10-15), RFQ (specificații, SLA), scoring (preț 40%, calitate 30%, flexibilitate 20%, ESG 10%), shortlist 3, negociere, pilot.",
      de: "Tender: RFI (10-15 qualifizieren), RFQ (Spezifikationen, SLA), Scoring (Preis 40%, Qualität 30%, Flexibilität 20%, ESG 10%), Shortlist 3, Verhandlung, Pilot.",
      en: "Tender: RFI (qualify 10-15), RFQ (specifications, SLA), scoring (price 40%, quality 30%, flexibility 20%, ESG 10%), shortlist 3, negotiation, pilot."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce informații trebuie să conțină o comandă de transport către transportator?",
      de: "Welche Informationen muss ein Transportauftrag an den Transportunternehmer enthalten?",
      en: "What information must a transport order to carrier contain?"
    },
    options: {
      ro: ["Doar adresa", "Încărcare/descărcare (adrese, ore, contacte), marfă (descriere, greutate, volum), preț, referințe", "Doar prețul", "Doar data"],
      de: ["Nur Adresse", "Be-/Entladung (Adressen, Zeiten, Kontakte), Fracht (Beschreibung, Gewicht, Volumen), Preis, Referenzen", "Nur Preis", "Nur Datum"],
      en: ["Only address", "Loading/unloading (addresses, times, contacts), cargo (description, weight, volume), price, references", "Only price", "Only date"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comandă completă: date încărcare/descărcare, contacte, descriere exactă marfă, dimensiuni, greutate, preț agreat, referințe client.",
      de: "Vollständiger Auftrag: Be-/Entladedaten, Kontakte, exakte Frachtbeschreibung, Abmessungen, Gewicht, vereinbarter Preis, Kundenreferenzen.",
      en: "Complete order: loading/unloading data, contacts, exact cargo description, dimensions, weight, agreed price, client references."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum comunici eficient cu transportatorii în operațiuni zilnice?",
      de: "Wie kommunizierst du effektiv mit Transportunternehmern im Tagesgeschäft?",
      en: "How do you communicate effectively with carriers in daily operations?"
    },
    options: {
      ro: ["Doar email", "Canale clare (TMS, telefon, email), escaladare definită, update-uri proactive, limbaj concis", "Doar WhatsApp", "Doar fax"],
      de: ["Nur E-Mail", "Klare Kanäle (TMS, Telefon, E-Mail), definierte Eskalation, proaktive Updates, präzise Sprache", "Nur WhatsApp", "Nur Fax"],
      en: ["Only email", "Clear channels (TMS, phone, email), defined escalation, proactive updates, concise language", "Only WhatsApp", "Only fax"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicare eficientă: canale standardizate, urgențe pe telefon, normale pe TMS/email, update proactiv status, escaladare clară.",
      de: "Effektive Kommunikation: standardisierte Kanäle, Notfälle telefonisch, normale über TMS/E-Mail, proaktives Status-Update, klare Eskalation.",
      en: "Effective communication: standardized channels, urgencies by phone, normal via TMS/email, proactive status update, clear escalation."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare program de parteneriat strategic cu 5 transportatori cheie. Elemente și beneficii reciproce?",
      de: "Entwicklung strategisches Partnerschaftsprogramm mit 5 Schlüsseltransporteuren. Elemente und gegenseitige Vorteile?",
      en: "Developing strategic partnership program with 5 key carriers. Elements and mutual benefits?"
    },
    options: {
      ro: ["Doar preț fix", "Volum garantat, plată rapidă, dezvoltare comună, investiții partajate, exclusivitate parțială, business reviews", "Doar contract lung", "Doar întâlniri anuale"],
      de: ["Nur Festpreis", "Garantiertes Volumen, schnelle Zahlung, gemeinsame Entwicklung, geteilte Investitionen, Teilexklusivität, Business Reviews", "Nur langer Vertrag", "Nur jährliche Meetings"],
      en: ["Only fixed price", "Guaranteed volume, fast payment, joint development, shared investments, partial exclusivity, business reviews", "Only long contract", "Only annual meetings"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Parteneriat: volum predictibil, plată 15-20 zile, dezvoltare rute comune, telematics shared, prioritate peak, reviews trimestriale.",
      de: "Partnerschaft: vorhersehbares Volumen, Zahlung 15-20 Tage, gemeinsame Routenentwicklung, geteilte Telematik, Peak-Priorität, vierteljährliche Reviews.",
      en: "Partnership: predictable volume, 15-20 day payment, joint route development, shared telematics, peak priority, quarterly reviews."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un transport broker vs. carrier propriu?",
      de: "Was ist ein Transportmakler vs. eigener Transportunternehmer?",
      en: "What is a transport broker vs. own carrier?"
    },
    options: {
      ro: ["Același lucru", "Broker intermediază, carrier propriu are flotă. Broker = flexibilitate, carrier = control", "Broker are camioane", "Carrier intermediază"],
      de: ["Dasselbe", "Makler vermittelt, eigener Carrier hat Flotte. Makler = Flexibilität, Carrier = Kontrolle", "Makler hat LKW", "Carrier vermittelt"],
      en: ["Same thing", "Broker intermediates, own carrier has fleet. Broker = flexibility, carrier = control", "Broker has trucks", "Carrier intermediates"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Broker: găsește transportatori, nu are flotă. Carrier propriu: flotă directă. Mix optim: core pe parteneri stabili, peak pe brokeri.",
      de: "Makler: findet Transportunternehmer, keine Flotte. Eigener Carrier: direkte Flotte. Optimaler Mix: Kern mit stabilen Partnern, Spitze mit Maklern.",
      en: "Broker: finds carriers, no fleet. Own carrier: direct fleet. Optimal mix: core with stable partners, peak with brokers."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi plățile către transportatori pentru a menține relații bune?",
      de: "Wie managst du Zahlungen an Transportunternehmer um gute Beziehungen zu halten?",
      en: "How do you manage payments to carriers to maintain good relationships?"
    },
    options: {
      ro: ["Întârzii cât poți", "Termene clare, plată la timp, factoring opțional, comunicare proactivă pentru întârzieri", "Plătești doar la cerere", "Nu ai reguli"],
      de: ["So lange wie möglich verzögern", "Klare Fristen, pünktliche Zahlung, optionales Factoring, proaktive Kommunikation bei Verzögerungen", "Nur auf Anfrage zahlen", "Keine Regeln"],
      en: ["Delay as much as possible", "Clear terms, on-time payment, optional factoring, proactive communication for delays", "Pay only on request", "No rules"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Best practice plăți: termene respectate (15-30 zile), early payment discount opțional, comunicare anticipată dacă întârzii, prioritizare parteneri strategici.",
      de: "Best Practice Zahlungen: Fristen einhalten (15-30 Tage), optionaler Frühzahlungsrabatt, vorherige Kommunikation bei Verzögerung, Priorisierung strategischer Partner.",
      en: "Payment best practice: respect terms (15-30 days), optional early payment discount, proactive communication if delay, prioritize strategic partners."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Criză capacitate în peak season: niciun transportator disponibil pentru rută critică. Soluții de urgență?",
      de: "Kapazitätskrise in der Hochsaison: kein Transportunternehmer für kritische Route verfügbar. Notlösungen?",
      en: "Capacity crisis in peak season: no carrier available for critical route. Emergency solutions?"
    },
    options: {
      ro: ["Anulezi transportul", "Escaladezi la parteneri strategici, spot market premium, broker-uri, moduri alternative, comunicare client", "Aștepți să se rezolve", "Ceri amânare client"],
      de: ["Transport stornieren", "An strategische Partner eskalieren, Spot-Markt Premium, Makler, alternative Modi, Kundenkommunikation", "Warten bis sich löst", "Kundenaufschub bitten"],
      en: ["Cancel transport", "Escalate to strategic partners, spot market premium, brokers, alternative modes, client communication", "Wait for it to resolve", "Ask client for delay"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Urgență capacitate: prioritate parteneri (oferă premium), brokeri internaționali, burse spot, intermodal, comunicare transparentă cu clientul.",
      de: "Kapazitätsnotfall: Partnerpriorität (Premium anbieten), internationale Makler, Spot-Börsen, intermodal, transparente Kundenkommunikation.",
      en: "Capacity emergency: partner priority (offer premium), international brokers, spot exchanges, intermodal, transparent client communication."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un freight exchange (bursă de transport)?",
      de: "Was ist eine Frachtbörse?",
      en: "What is a freight exchange?"
    },
    options: {
      ro: ["Schimb de monedă", "Platformă unde se întâlnesc cererea și oferta de transport", "Magazin de piese", "Benzinărie"],
      de: ["Währungstausch", "Plattform wo Transportnachfrage und -angebot zusammentreffen", "Teilegeschäft", "Tankstelle"],
      en: ["Currency exchange", "Platform where transport demand and supply meet", "Parts store", "Gas station"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Freight exchange: Trans.eu, TimoCom, Teleroute - platforme unde găsești transportatori pentru curse sau marfă pentru retur.",
      de: "Frachtbörse: Trans.eu, TimoCom, Teleroute - Plattformen wo du Transportunternehmer für Fahrten oder Rückfracht findest.",
      en: "Freight exchange: Trans.eu, TimoCom, Teleroute - platforms where you find carriers for trips or cargo for return."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum evaluezi riscul de a lucra cu un transportator din Europa de Est?",
      de: "Wie bewertest du das Risiko der Zusammenarbeit mit einem osteuropäischen Transportunternehmer?",
      en: "How do you assess the risk of working with an Eastern European carrier?"
    },
    options: {
      ro: ["Nu lucrezi deloc", "Verificare completă: licențe, asigurări, referințe, bonitate, vizită eventuală, curse test", "Accepți orice", "Doar preț contează"],
      de: ["Gar nicht arbeiten", "Vollständige Prüfung: Lizenzen, Versicherungen, Referenzen, Bonität, eventl. Besuch, Testfahrten", "Alles akzeptieren", "Nur Preis zählt"],
      en: ["Don't work at all", "Complete verification: licenses, insurances, references, creditworthiness, possible visit, test trips", "Accept anything", "Only price matters"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Due diligence: verifică licența în țara de origine, polițe valide, rating în burse, referințe, vizită dacă volum mare, start cu curse test.",
      de: "Due Diligence: Lizenz im Herkunftsland prüfen, gültige Policen, Börsenrating, Referenzen, Besuch bei hohem Volumen, Start mit Testfahrten.",
      en: "Due diligence: verify license in origin country, valid policies, exchange rating, references, visit if large volume, start with test trips."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare sistem digital de management transportatori. Funcționalități cheie și beneficii?",
      de: "Implementierung digitales Transportunternehmer-Managementsystem. Schlüsselfunktionen und Vorteile?",
      en: "Implementing digital carrier management system. Key functionalities and benefits?"
    },
    options: {
      ro: ["Doar listă Excel", "Database transportatori, scoring automat, tender digital, tracking integrare, documente, raportare", "Doar email", "Doar telefoane"],
      de: ["Nur Excel-Liste", "Transportunternehmer-Datenbank, automatisches Scoring, digitales Tender, Tracking-Integration, Dokumente, Berichterstattung", "Nur E-Mail", "Nur Telefone"],
      en: ["Only Excel list", "Carrier database, automatic scoring, digital tender, tracking integration, documents, reporting", "Only email", "Only phones"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Carrier TMS: database centralizată, scorecard automat din KPI, procurement digital, integrare GPS, documente expirate alert, dashboard performance.",
      de: "Carrier TMS: zentralisierte Datenbank, automatische Scorecard aus KPIs, digitales Procurement, GPS-Integration, Ablaufdokumente-Alert, Performance-Dashboard.",
      en: "Carrier TMS: centralized database, automatic scorecard from KPIs, digital procurement, GPS integration, expiring documents alert, performance dashboard."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'backhaul' sau 'retur încărcat' pentru transportatori?",
      de: "Was bedeutet 'Backhaul' oder 'beladene Rückfahrt' für Transportunternehmer?",
      en: "What does 'backhaul' or 'loaded return' mean for carriers?"
    },
    options: {
      ro: ["Marfă înapoi", "Încărcarea camionului pentru cursa de întoarcere, reducând km gol", "Piese de schimb", "Combustibil de rezervă"],
      de: ["Fracht zurück", "LKW-Beladung für Rückfahrt, reduziert Leerkilometer", "Ersatzteile", "Reservekraftstoff"],
      en: ["Cargo back", "Loading the truck for return trip, reducing empty km", "Spare parts", "Reserve fuel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Backhaul: găsești marfă pentru întoarcere. Win-win: transportatorul reduce km gol, tu primești preț mai bun.",
      de: "Backhaul: Fracht für Rückfahrt finden. Win-Win: Transportunternehmer reduziert Leerkilometer, du bekommst besseren Preis.",
      en: "Backhaul: find cargo for return. Win-win: carrier reduces empty km, you get better price."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum construiești loialitate cu transportatorii de calitate?",
      de: "Wie baust du Loyalität mit Qualitätstransporteuren auf?",
      en: "How do you build loyalty with quality carriers?"
    },
    options: {
      ro: ["Doar prin preț mic", "Volum consistent, plată rapidă, comunicare respectuoasă, suport în probleme, relație pe termen lung", "Doar prin contracte lungi", "Doar prin amenzi"],
      de: ["Nur durch niedrigen Preis", "Konsistentes Volumen, schnelle Zahlung, respektvolle Kommunikation, Unterstützung bei Problemen, langfristige Beziehung", "Nur durch lange Verträge", "Nur durch Strafen"],
      en: ["Only through low price", "Consistent volume, fast payment, respectful communication, support in problems, long-term relationship", "Only through long contracts", "Only through penalties"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Loialitate: volum predictibil, plăți la timp, respect reciproc, ajutor în situații dificile, parteneriat real nu doar tranzacțional.",
      de: "Loyalität: vorhersehbares Volumen, pünktliche Zahlungen, gegenseitiger Respekt, Hilfe in schwierigen Situationen, echte Partnerschaft nicht nur transaktional.",
      en: "Loyalty: predictable volume, on-time payments, mutual respect, help in difficult situations, real partnership not just transactional."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transportator partener are probleme financiare dar performanță bună. Cum gestionezi situația?",
      de: "Partnertransporteur hat finanzielle Probleme aber gute Leistung. Wie managst du die Situation?",
      en: "Partner carrier has financial problems but good performance. How do you handle the situation?"
    },
    options: {
      ro: ["Renunți imediat", "Evaluezi gradul problemelor, reduci expunerea, plăți mai rapide vs. garanții, monitorizezi atent, plan B", "Ignori", "Mărești volumul"],
      de: ["Sofort aufgeben", "Problemgrad bewerten, Exposure reduzieren, schnellere Zahlungen vs. Garantien, aufmerksam überwachen, Plan B", "Ignorieren", "Volumen erhöhen"],
      en: ["Give up immediately", "Assess problem degree, reduce exposure, faster payments vs. guarantees, monitor closely, plan B", "Ignore", "Increase volume"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie prudentă: evaluează severitatea, reduce expunerea (mai puțin volum în curs), plăți mai rapide în schimbul garanțiilor, pregătește alternative.",
      de: "Umsichtige Strategie: Schwere bewerten, Exposure reduzieren (weniger laufendes Volumen), schnellere Zahlungen gegen Garantien, Alternativen vorbereiten.",
      en: "Prudent strategy: assess severity, reduce exposure (less ongoing volume), faster payments in exchange for guarantees, prepare alternatives."
    }
  }
];
