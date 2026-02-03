import { TranslatedQuizQuestion } from '../../quizTranslations';

export const commercialComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce reprezintă marja de profit în transportul de marfă?",
      de: "Was bedeutet die Gewinnmarge im Gütertransport?",
      en: "What does profit margin represent in freight transport?"
    },
    options: {
      ro: ["Doar veniturile", "Diferența dintre prețul de vânzare și costurile totale", "Doar costurile", "Volumul de marfă"],
      de: ["Nur Einnahmen", "Differenz zwischen Verkaufspreis und Gesamtkosten", "Nur Kosten", "Frachtvolumen"],
      en: ["Only revenues", "Difference between selling price and total costs", "Only costs", "Freight volume"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marja = preț vânzare - costuri (combustibil, șofer, taxe, amortizare, administrație). Exprimată % sau absolut.",
      de: "Marge = Verkaufspreis - Kosten (Kraftstoff, Fahrer, Gebühren, Abschreibung, Verwaltung). In % oder absolut.",
      en: "Margin = selling price - costs (fuel, driver, fees, depreciation, admin). Expressed as % or absolute."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este o ofertă spot în transport?",
      de: "Was ist ein Spot-Angebot im Transport?",
      en: "What is a spot offer in transport?"
    },
    options: {
      ro: ["Contract anual", "Ofertă pentru un singur transport, fără contract pe termen lung", "Abonament lunar", "Parteneriat strategic"],
      de: ["Jahresvertrag", "Angebot für einen einzelnen Transport, ohne langfristigen Vertrag", "Monatsabonnement", "Strategische Partnerschaft"],
      en: ["Annual contract", "Offer for a single transport, without long-term contract", "Monthly subscription", "Strategic partnership"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Spot = transport individual, preț negociat pentru acea cursă specifică. Opus contractelor cu tarife fixe.",
      de: "Spot = einzelner Transport, Preis für diese spezifische Fahrt verhandelt. Gegenteil von Festtarifverträgen.",
      en: "Spot = individual transport, price negotiated for that specific trip. Opposite of fixed-rate contracts."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum se calculează rata de conversie oferte-comenzi?",
      de: "Wie berechnet man die Konversionsrate Angebote-Aufträge?",
      en: "How do you calculate the offer-to-order conversion rate?"
    },
    options: {
      ro: ["Comenzi / Clienți", "Comenzi acceptate / Oferte trimise × 100", "Oferte / Venituri", "Clienți noi / Clienți totali"],
      de: ["Aufträge / Kunden", "Akzeptierte Aufträge / Gesendete Angebote × 100", "Angebote / Umsatz", "Neukunden / Gesamtkunden"],
      en: ["Orders / Clients", "Accepted orders / Sent offers × 100", "Offers / Revenue", "New clients / Total clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conversie = (comenzi câștigate / oferte trimise) × 100. Indicator cheie pentru eficiența comercială.",
      de: "Konversion = (gewonnene Aufträge / gesendete Angebote) × 100. Schlüsselindikator für Vertriebseffizienz.",
      en: "Conversion = (won orders / sent offers) × 100. Key indicator for commercial efficiency."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client nou cere 50 FTL/lună RO-DE. Cum structurezi propunerea comercială?",
      de: "Neukunde fordert 50 FTL/Monat RO-DE. Wie strukturierst du das kommerzielle Angebot?",
      en: "New client requests 50 FTL/month RO-DE. How do you structure the commercial proposal?"
    },
    options: {
      ro: ["Doar preț/cursă", "Preț/km, fuel surcharge, termeni plată, SLA-uri, penalități, bonus volum, escaladare", "Doar contract standard", "Doar email cu preț"],
      de: ["Nur Preis/Fahrt", "Preis/km, Treibstoffzuschlag, Zahlungsbedingungen, SLAs, Strafen, Volumenbonus, Eskalation", "Nur Standardvertrag", "Nur E-Mail mit Preis"],
      en: ["Only price/trip", "Price/km, fuel surcharge, payment terms, SLAs, penalties, volume bonus, escalation", "Only standard contract", "Only email with price"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Propunere completă: preț bază, indexare diesel, condiții plată (30-60 zile), OTIF target, penalități/bonus, review trimestrial.",
      de: "Vollständiges Angebot: Basispreis, Dieselindexierung, Zahlungsbedingungen (30-60 Tage), OTIF-Ziel, Strafen/Bonus, Quartalsprüfung.",
      en: "Complete proposal: base price, diesel indexation, payment terms (30-60 days), OTIF target, penalties/bonus, quarterly review."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este fuel surcharge (suprataxa de combustibil)?",
      de: "Was ist der Fuel Surcharge (Kraftstoffzuschlag)?",
      en: "What is fuel surcharge?"
    },
    options: {
      ro: ["Taxă de drum", "Ajustare preț bazată pe variația prețului combustibilului", "Taxă de mediu", "Comision transport"],
      de: ["Straßengebühr", "Preisanpassung basierend auf Kraftstoffpreisschwankungen", "Umweltabgabe", "Transportprovision"],
      en: ["Road tax", "Price adjustment based on fuel price variation", "Environmental tax", "Transport commission"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fuel surcharge: mecanism de ajustare automată a prețului când diesel-ul variază peste un prag (ex: ±5% față de bază).",
      de: "Fuel Surcharge: automatischer Preisanpassungsmechanismus bei Dieselschwankungen über Schwelle (z.B. ±5% vom Basis).",
      en: "Fuel surcharge: automatic price adjustment mechanism when diesel varies beyond threshold (e.g., ±5% from base)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt termenii standard de plată în transport internațional?",
      de: "Was sind die Standard-Zahlungsbedingungen im internationalen Transport?",
      en: "What are the standard payment terms in international transport?"
    },
    options: {
      ro: ["Cash la livrare", "30-60 zile de la factură sau POD", "Plată în avans", "La vedere"],
      de: ["Barzahlung bei Lieferung", "30-60 Tage ab Rechnung oder POD", "Vorauszahlung", "Bei Sicht"],
      en: ["Cash on delivery", "30-60 days from invoice or POD", "Advance payment", "At sight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Standard UE: 30-60 zile de la factură sau de la primirea POD. Clienți noi pot necesita termeni mai stricte.",
      de: "EU-Standard: 30-60 Tage ab Rechnung oder POD-Erhalt. Neukunden können strengere Bedingungen erfordern.",
      en: "EU standard: 30-60 days from invoice or POD receipt. New clients may require stricter terms."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Analiza profitabilității client: venit 500.000€/an, costuri directe 420.000€, overhead alocat 50.000€. Este profitabil?",
      de: "Kundenrentabilitätsanalyse: Umsatz 500.000€/Jahr, direkte Kosten 420.000€, zugewiesener Overhead 50.000€. Rentabel?",
      en: "Client profitability analysis: revenue €500,000/year, direct costs €420,000, allocated overhead €50,000. Is it profitable?"
    },
    options: {
      ro: ["Nu, pierdere", "Da, profit 30.000€ (6% marjă netă)", "Break-even", "Nu se poate calcula"],
      de: ["Nein, Verlust", "Ja, Gewinn 30.000€ (6% Nettomarge)", "Break-even", "Kann nicht berechnet werden"],
      en: ["No, loss", "Yes, profit €30,000 (6% net margin)", "Break-even", "Cannot be calculated"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Calcul: 500.000 - 420.000 - 50.000 = 30.000€ profit. Marja: 30.000/500.000 = 6%. Profitabil dar sub medie.",
      de: "Berechnung: 500.000 - 420.000 - 50.000 = 30.000€ Gewinn. Marge: 30.000/500.000 = 6%. Rentabel aber unter Durchschnitt.",
      en: "Calculation: 500,000 - 420,000 - 50,000 = €30,000 profit. Margin: 30,000/500,000 = 6%. Profitable but below average."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un RFQ (Request for Quotation)?",
      de: "Was ist ein RFQ (Request for Quotation)?",
      en: "What is an RFQ (Request for Quotation)?"
    },
    options: {
      ro: ["Comandă fermă", "Cerere de ofertă de preț de la un potențial client", "Factură", "Contract semnat"],
      de: ["Fester Auftrag", "Preisangebotsanfrage von einem potenziellen Kunden", "Rechnung", "Unterzeichneter Vertrag"],
      en: ["Firm order", "Price quotation request from a potential client", "Invoice", "Signed contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RFQ: client solicită ofertă de preț. Poate fi spot (o cursă) sau tender (volum mare, perioadă lungă).",
      de: "RFQ: Kunde fordert Preisangebot an. Kann Spot (eine Fahrt) oder Tender (großes Volumen, lange Laufzeit) sein.",
      en: "RFQ: client requests price quote. Can be spot (one trip) or tender (large volume, long term)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi sezonalitatea în contractele comerciale?",
      de: "Wie managst du Saisonalität in kommerziellen Verträgen?",
      en: "How do you manage seasonality in commercial contracts?"
    },
    options: {
      ro: ["Preț fix tot anul", "Prețuri diferențiate pe sezoane, volume flexibile, prioritizare în vârf", "Refuz contract", "Doar în extrasezon"],
      de: ["Festpreis ganzjährig", "Saisondifferenzierte Preise, flexible Volumina, Priorisierung in Spitzenzeiten", "Vertragsablehnung", "Nur in Nebensaison"],
      en: ["Fixed price all year", "Season-differentiated prices, flexible volumes, peak prioritization", "Refuse contract", "Only off-season"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sezonalitate: prețuri mai mari în peak (nov-dec, vară), flexibilitate volum, angajamente reciproce de capacitate.",
      de: "Saisonalität: höhere Preise in Peak (Nov-Dez, Sommer), Volumenflexibilität, gegenseitige Kapazitätsverpflichtungen.",
      en: "Seasonality: higher prices in peak (Nov-Dec, summer), volume flexibility, mutual capacity commitments."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Tender pentru 1000 curse/an cu 5 competitori. Strategia de pricing pentru câștig?",
      de: "Tender für 1000 Fahrten/Jahr mit 5 Wettbewerbern. Pricing-Strategie zum Gewinnen?",
      en: "Tender for 1000 trips/year with 5 competitors. Pricing strategy to win?"
    },
    options: {
      ro: ["Cel mai mic preț posibil", "Analiză costuri + marjă minimă + diferențiere servicii + valoare adăugată", "Preț ridicat pentru imagine", "Refuz participare"],
      de: ["Niedrigster möglicher Preis", "Kostenanalyse + Mindestmarge + Servicedifferenzierung + Mehrwert", "Hoher Preis für Image", "Teilnahmeverweigerung"],
      en: ["Lowest possible price", "Cost analysis + minimum margin + service differentiation + added value", "High price for image", "Refuse participation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie tender: cost real + marjă minimă viabilă + puncte forte (tracking, flexibilitate, ESG) pentru diferențiere.",
      de: "Tender-Strategie: Realkosten + minimale tragfähige Marge + Stärken (Tracking, Flexibilität, ESG) zur Differenzierung.",
      en: "Tender strategy: real cost + minimum viable margin + strengths (tracking, flexibility, ESG) for differentiation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă upselling în servicii de transport?",
      de: "Was bedeutet Upselling bei Transportdiensten?",
      en: "What does upselling mean in transport services?"
    },
    options: {
      ro: ["Reducere preț", "Vânzare servicii suplimentare sau upgrade la un client existent", "Vânzare la concurenți", "Renunțare la client"],
      de: ["Preisreduktion", "Verkauf zusätzlicher Dienste oder Upgrades an bestehenden Kunden", "Verkauf an Wettbewerber", "Kundenaufgabe"],
      en: ["Price reduction", "Selling additional services or upgrades to existing client", "Selling to competitors", "Giving up client"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Upselling: client FTL → oferă express, tracking avansat, asigurare suplimentară, servicii depozitare.",
      de: "Upselling: FTL-Kunde → biete Express, erweitertes Tracking, Zusatzversicherung, Lagerdienste an.",
      en: "Upselling: FTL client → offer express, advanced tracking, extra insurance, warehousing services."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt indicatorii cheie pentru performanța echipei comerciale?",
      de: "Was sind die Schlüsselindikatoren für die Vertriebsteam-Performance?",
      en: "What are the key indicators for commercial team performance?"
    },
    options: {
      ro: ["Doar venitul total", "Pipeline value, conversie, marjă medie, client retention, new business %", "Doar număr de apeluri", "Doar orele lucrate"],
      de: ["Nur Gesamtumsatz", "Pipeline-Wert, Konversion, Durchschnittsmarge, Kundenbindung, Neugeschäft %", "Nur Anzahl Anrufe", "Nur Arbeitsstunden"],
      en: ["Only total revenue", "Pipeline value, conversion, average margin, client retention, new business %", "Only number of calls", "Only hours worked"]
    },
    correctIndex: 1,
    explanation: {
      ro: "KPI comercial: valoare pipeline, rata conversie, marjă per cursă, retenție clienți, % business nou vs. existent.",
      de: "Vertriebs-KPI: Pipeline-Wert, Konversionsrate, Marge pro Fahrt, Kundenbindung, % Neugeschäft vs. Bestandsgeschäft.",
      en: "Commercial KPI: pipeline value, conversion rate, margin per trip, client retention, % new vs. existing business."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client strategic cu 30% din venituri cere reducere 10% sau pleacă. Opțiuni de răspuns?",
      de: "Strategischer Kunde mit 30% des Umsatzes fordert 10% Reduktion oder geht. Antwortoptionen?",
      en: "Strategic client with 30% of revenue requests 10% reduction or leaves. Response options?"
    },
    options: {
      ro: ["Accept imediat", "Analiză costuri, contraofertă cu volum/termen, optimizări, escaladar, backup client", "Refuz categoric", "Ignorare cerere"],
      de: ["Sofort akzeptieren", "Kostenanalyse, Gegenangebot mit Volumen/Laufzeit, Optimierungen, Eskalation, Kunden-Backup", "Kategorische Ablehnung", "Anfrage ignorieren"],
      en: ["Accept immediately", "Cost analysis, counter-offer with volume/term, optimizations, escalation, client backup", "Categorical refusal", "Ignore request"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Răspuns strategic: analiză marja reală, contraofertă (volum mai mare, contract mai lung), găsire economii comune, diversificare portofoliu.",
      de: "Strategische Antwort: Analyse der realen Marge, Gegenangebot (mehr Volumen, längerer Vertrag), gemeinsame Einsparungen finden, Portfolio diversifizieren.",
      en: "Strategic response: analyze real margin, counter-offer (more volume, longer contract), find common savings, diversify portfolio."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este cross-selling în expediere?",
      de: "Was ist Cross-Selling in der Spedition?",
      en: "What is cross-selling in freight forwarding?"
    },
    options: {
      ro: ["Vânzare la concurenți", "Vânzare servicii complementare (ex: client rutier → oferă și aerian)", "Reducere servicii", "Schimbare preț"],
      de: ["Verkauf an Wettbewerber", "Verkauf ergänzender Dienste (z.B. Straßenkunde → auch Luftfracht anbieten)", "Dienstreduktion", "Preisänderung"],
      en: ["Selling to competitors", "Selling complementary services (e.g., road client → also offer air)", "Service reduction", "Price change"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cross-selling: client transport rutier → oferă și maritim, aerian, depozitare, vamă, asigurare.",
      de: "Cross-Selling: Straßentransportkunde → biete auch See-, Luft-, Lager-, Zoll-, Versicherungsdienste an.",
      en: "Cross-selling: road transport client → also offer sea, air, warehousing, customs, insurance."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum se stabilește prețul pentru un client nou fără istoric?",
      de: "Wie legt man den Preis für einen Neukunden ohne Historie fest?",
      en: "How do you set the price for a new client without history?"
    },
    options: {
      ro: ["Prețul cel mai mic", "Analiză costuri + benchmark piață + risc client + potențial dezvoltare", "Preț maxim", "Prețul ultimului client"],
      de: ["Niedrigster Preis", "Kostenanalyse + Marktbenchmark + Kundenrisiko + Entwicklungspotenzial", "Höchster Preis", "Preis des letzten Kunden"],
      en: ["Lowest price", "Cost analysis + market benchmark + client risk + development potential", "Highest price", "Last client's price"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Client nou: cost + marjă standard, verificare solvabilitate, benchmark competiție, potențial viitor, prime plată mai scurte.",
      de: "Neukunde: Kosten + Standardmarge, Solvabilitätsprüfung, Wettbewerbsbenchmark, Zukunftspotenzial, kürzere Zahlungsziele.",
      en: "New client: cost + standard margin, solvency check, competition benchmark, future potential, shorter payment terms."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Construire model de pricing dinamic pentru rute high-demand. Factori și mecanisme?",
      de: "Aufbau eines dynamischen Pricing-Modells für High-Demand-Routen. Faktoren und Mechanismen?",
      en: "Building dynamic pricing model for high-demand routes. Factors and mechanisms?"
    },
    options: {
      ro: ["Preț fix mereu", "Algoritm: capacitate disponibilă, lead time, sezon, diesel, competiție, istoric client", "Doar manual", "Doar la cerere"],
      de: ["Immer Festpreis", "Algorithmus: verfügbare Kapazität, Vorlaufzeit, Saison, Diesel, Wettbewerb, Kundenhistorie", "Nur manuell", "Nur auf Anfrage"],
      en: ["Always fixed price", "Algorithm: available capacity, lead time, season, diesel, competition, client history", "Only manual", "Only on request"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dynamic pricing: capacitate reziduală, urgență comandă, indice diesel, sezon, istoric client, rate piață în timp real.",
      de: "Dynamic Pricing: Restkapazität, Auftragsurgenz, Dieselindex, Saison, Kundenhistorie, Echtzeit-Marktpreise.",
      en: "Dynamic pricing: residual capacity, order urgency, diesel index, season, client history, real-time market rates."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este pipeline-ul comercial?",
      de: "Was ist die Vertriebs-Pipeline?",
      en: "What is the commercial pipeline?"
    },
    options: {
      ro: ["Conductă petrol", "Totalul oportunităților de vânzare în diferite stadii de negociere", "Liste de prețuri", "Contracte semnate"],
      de: ["Öl-Pipeline", "Gesamtheit der Verkaufschancen in verschiedenen Verhandlungsstadien", "Preislisten", "Unterzeichnete Verträge"],
      en: ["Oil pipeline", "Total sales opportunities at different negotiation stages", "Price lists", "Signed contracts"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pipeline: lead → ofertă → negociere → contract. Fiecare stadiu cu probabilitate de conversie și valoare potențială.",
      de: "Pipeline: Lead → Angebot → Verhandlung → Vertrag. Jede Stufe mit Konversionswahrscheinlichkeit und potenziellem Wert.",
      en: "Pipeline: lead → offer → negotiation → contract. Each stage with conversion probability and potential value."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce clauze sunt esențiale într-un contract cadru de transport?",
      de: "Welche Klauseln sind in einem Transport-Rahmenvertrag wesentlich?",
      en: "What clauses are essential in a framework transport contract?"
    },
    options: {
      ro: ["Doar preț", "Preț, indexare, SLA, răspunderi, reziliere, forță majoră, confidențialitate, jurisdicție", "Doar durată", "Doar rute"],
      de: ["Nur Preis", "Preis, Indexierung, SLA, Haftung, Kündigung, Force Majeure, Vertraulichkeit, Gerichtsstand", "Nur Laufzeit", "Nur Routen"],
      en: ["Only price", "Price, indexation, SLA, liabilities, termination, force majeure, confidentiality, jurisdiction", "Only duration", "Only routes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contract cadru: prețuri/indexări, KPI/penalități, limite răspundere, condiții reziliere, FM, GDPR, legea aplicabilă.",
      de: "Rahmenvertrag: Preise/Indexierung, KPI/Strafen, Haftungsgrenzen, Kündigungsbedingungen, FM, DSGVO, anwendbares Recht.",
      en: "Framework contract: prices/indexation, KPI/penalties, liability limits, termination conditions, FM, GDPR, applicable law."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare strategie comercială pentru intrare pe piață nouă (exemplu: Spania). Pași și resurse?",
      de: "Entwicklung Vertriebsstrategie für neuen Markteintritt (Beispiel: Spanien). Schritte und Ressourcen?",
      en: "Developing commercial strategy for new market entry (example: Spain). Steps and resources?"
    },
    options: {
      ro: ["Doar angajare vânzător local", "Analiză piață, segmentare clienți, poziționare, canale, pricing local, parteneriate, plan 12 luni", "Doar publicitate", "Așteptare clienți"],
      de: ["Nur lokalen Verkäufer einstellen", "Marktanalyse, Kundensegmentierung, Positionierung, Kanäle, lokales Pricing, Partnerschaften, 12-Monats-Plan", "Nur Werbung", "Auf Kunden warten"],
      en: ["Only hire local salesperson", "Market analysis, client segmentation, positioning, channels, local pricing, partnerships, 12-month plan", "Only advertising", "Wait for clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie nouă piață: research competiție, identificare segmente țintă, agent/birou local, pricing adaptat, plan dezvoltare 12+ luni.",
      de: "Strategie neuer Markt: Wettbewerbsrecherche, Zielsegment-Identifikation, lokaler Agent/Büro, angepasstes Pricing, 12+ Monate Entwicklungsplan.",
      en: "New market strategy: competition research, target segment identification, local agent/office, adapted pricing, 12+ months development plan."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este churn rate în context comercial?",
      de: "Was ist die Churn Rate im kommerziellen Kontext?",
      en: "What is churn rate in commercial context?"
    },
    options: {
      ro: ["Rata de profit", "Procentul clienților pierduți într-o perioadă", "Rata de conversie", "Rata de încărcare"],
      de: ["Gewinnrate", "Prozentsatz der in einer Periode verlorenen Kunden", "Konversionsrate", "Auslastungsrate"],
      en: ["Profit rate", "Percentage of clients lost in a period", "Conversion rate", "Loading rate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Churn = clienți pierduți / clienți totali la început de perioadă. Churn ridicat = problemă de serviciu sau preț.",
      de: "Churn = verlorene Kunden / Gesamtkunden zu Periodenbeginn. Hoher Churn = Service- oder Preisproblem.",
      en: "Churn = lost clients / total clients at period start. High churn = service or pricing problem."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi reclamațiile comerciale de la clienți importanți?",
      de: "Wie managst du kommerzielle Reklamationen von wichtigen Kunden?",
      en: "How do you manage commercial complaints from important clients?"
    },
    options: {
      ro: ["Ignor", "Răspuns rapid, investigare, comunicare transparentă, soluție, follow-up, prevenție", "Doar compensație financiară", "Transfer la juridic"],
      de: ["Ignorieren", "Schnelle Antwort, Untersuchung, transparente Kommunikation, Lösung, Follow-up, Prävention", "Nur finanzielle Entschädigung", "An Rechtsabteilung übergeben"],
      en: ["Ignore", "Quick response, investigation, transparent communication, solution, follow-up, prevention", "Only financial compensation", "Transfer to legal"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reclamații: acknowledge rapid (24h), investigare internă, comunicare proactivă, soluție+compensație, măsuri prevenție, relație întărită.",
      de: "Reklamationen: schnelle Bestätigung (24h), interne Untersuchung, proaktive Kommunikation, Lösung+Entschädigung, Präventionsmaßnahmen, gestärkte Beziehung.",
      en: "Complaints: quick acknowledgment (24h), internal investigation, proactive communication, solution+compensation, prevention measures, strengthened relationship."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Calculează break-even pentru contract nou: investiție inițială 20.000€, marjă/cursă 50€, costuri fixe alocate 500€/lună.",
      de: "Berechne Break-even für Neuvertrag: Erstinvestition 20.000€, Marge/Fahrt 50€, zugewiesene Fixkosten 500€/Monat.",
      en: "Calculate break-even for new contract: initial investment €20,000, margin/trip €50, allocated fixed costs €500/month."
    },
    options: {
      ro: ["100 curse", "400 curse + 10 luni costuri fixe = 500 curse", "200 curse", "1000 curse"],
      de: ["100 Fahrten", "400 Fahrten + 10 Monate Fixkosten = 500 Fahrten", "200 Fahrten", "1000 Fahrten"],
      en: ["100 trips", "400 trips + 10 months fixed costs = 500 trips", "200 trips", "1000 trips"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Break-even: 20.000€ / 50€ = 400 curse. Plus 10 luni × 500€ = 5.000€ / 50€ = 100 curse. Total ≈ 500 curse.",
      de: "Break-even: 20.000€ / 50€ = 400 Fahrten. Plus 10 Monate × 500€ = 5.000€ / 50€ = 100 Fahrten. Gesamt ≈ 500 Fahrten.",
      en: "Break-even: €20,000 / €50 = 400 trips. Plus 10 months × €500 = €5,000 / €50 = 100 trips. Total ≈ 500 trips."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este win-back în strategia comercială?",
      de: "Was ist Win-back in der Vertriebsstrategie?",
      en: "What is win-back in commercial strategy?"
    },
    options: {
      ro: ["Câștig nou", "Strategie de recuperare a clienților pierduți", "Reducere costuri", "Creștere prețuri"],
      de: ["Neuer Gewinn", "Strategie zur Rückgewinnung verlorener Kunden", "Kostenreduktion", "Preiserhöhung"],
      en: ["New win", "Strategy to recover lost clients", "Cost reduction", "Price increase"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Win-back: recontactare clienți pierduți cu ofertă îmbunătățită, rezolvare motive plecare, demonstrare îmbunătățiri.",
      de: "Win-back: Wiederkontakt verlorener Kunden mit verbessertem Angebot, Lösung der Wegganggründe, Nachweis von Verbesserungen.",
      en: "Win-back: recontacting lost clients with improved offer, addressing departure reasons, demonstrating improvements."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum segmentezi portofoliul de clienți pentru prioritizare?",
      de: "Wie segmentierst du das Kundenportfolio zur Priorisierung?",
      en: "How do you segment the client portfolio for prioritization?"
    },
    options: {
      ro: ["Alfabetic", "Matrice volum-marjă sau ABC după venituri/profitabilitate", "După distanță", "După vechime"],
      de: ["Alphabetisch", "Volumen-Margen-Matrix oder ABC nach Umsatz/Rentabilität", "Nach Entfernung", "Nach Alter"],
      en: ["Alphabetically", "Volume-margin matrix or ABC by revenue/profitability", "By distance", "By seniority"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Segmentare: A (top 20% = 80% venituri), B (mediu), C (mic). Strategie diferită: A = relație, B = creștere, C = eficientizare.",
      de: "Segmentierung: A (Top 20% = 80% Umsatz), B (mittel), C (klein). Unterschiedliche Strategie: A = Beziehung, B = Wachstum, C = Effizienz.",
      en: "Segmentation: A (top 20% = 80% revenue), B (medium), C (small). Different strategy: A = relationship, B = growth, C = efficiency."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare CRM pentru echipa comercială transport. Funcționalități și beneficii cheie?",
      de: "CRM-Implementierung für Vertriebsteam Transport. Schlüsselfunktionen und -vorteile?",
      en: "CRM implementation for transport commercial team. Key functionalities and benefits?"
    },
    options: {
      ro: ["Doar listă contacte", "Pipeline management, history interacțiuni, forecasting, task-uri, rapoarte, integrare TMS", "Doar email", "Doar facturare"],
      de: ["Nur Kontaktliste", "Pipeline-Management, Interaktionshistorie, Forecasting, Aufgaben, Berichte, TMS-Integration", "Nur E-Mail", "Nur Fakturierung"],
      en: ["Only contact list", "Pipeline management, interaction history, forecasting, tasks, reports, TMS integration", "Only email", "Only invoicing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CRM transport: tracking oportunități, istoric complet client, forecast venituri, automatizări, integrare cu TMS pentru date operaționale.",
      de: "CRM Transport: Opportunity-Tracking, vollständige Kundenhistorie, Umsatzprognose, Automatisierungen, Integration mit TMS für operative Daten.",
      en: "CRM transport: opportunity tracking, complete client history, revenue forecast, automations, integration with TMS for operational data."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este diferențierea competitivă în servicii de transport?",
      de: "Was ist Wettbewerbsdifferenzierung bei Transportdiensten?",
      en: "What is competitive differentiation in transport services?"
    },
    options: {
      ro: ["Doar preț mic", "Factori care te diferențiază de concurență: serviciu, tehnologie, specializare, relație", "Doar flotă mare", "Doar marketing"],
      de: ["Nur niedriger Preis", "Faktoren, die dich vom Wettbewerb unterscheiden: Service, Technologie, Spezialisierung, Beziehung", "Nur große Flotte", "Nur Marketing"],
      en: ["Only low price", "Factors that differentiate you from competition: service, technology, specialization, relationship", "Only large fleet", "Only marketing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diferențiere: nu doar preț! Tracking avansat, flexibilitate, specializare (pharma, auto), sustenabilitate, relație personalizată.",
      de: "Differenzierung: nicht nur Preis! Erweitertes Tracking, Flexibilität, Spezialisierung (Pharma, Auto), Nachhaltigkeit, personalisierte Beziehung.",
      en: "Differentiation: not just price! Advanced tracking, flexibility, specialization (pharma, auto), sustainability, personalized relationship."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt semnele că un client este în risc de plecare?",
      de: "Was sind Anzeichen, dass ein Kunde abwanderungsgefährdet ist?",
      en: "What are signs that a client is at risk of leaving?"
    },
    options: {
      ro: ["Volumele cresc", "Scădere volume, reclamații frecvente, întârzieri plată, contacte cu concurenți", "Plătesc la timp", "Cer servicii noi"],
      de: ["Volumen steigen", "Volumenrückgang, häufige Reklamationen, Zahlungsverzögerungen, Kontakte mit Wettbewerbern", "Pünktliche Zahlung", "Neue Dienste anfragen"],
      en: ["Volumes increasing", "Volume decrease, frequent complaints, payment delays, contacts with competitors", "Paying on time", "Requesting new services"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Semne risc: volum în scădere, nemulțumiri repetate, RFQ-uri la alții, întrebări despre contractul existent, comunicare redusă.",
      de: "Risikozeichen: sinkendes Volumen, wiederholte Beschwerden, RFQs an andere, Fragen zum bestehenden Vertrag, reduzierte Kommunikation.",
      en: "Risk signs: declining volume, repeated complaints, RFQs to others, questions about existing contract, reduced communication."
    }
  }
];
