import { TranslatedQuizQuestion } from '../../quizTranslations';

export const kpiComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un KPI (Key Performance Indicator)?",
      de: "Was ist ein KPI (Key Performance Indicator)?",
      en: "What is a KPI (Key Performance Indicator)?"
    },
    options: {
      ro: ["Orice măsurătoare", "Indicator măsurabil folosit pentru evaluarea performanței față de obiective", "Doar cifre financiare", "Doar rapoarte"],
      de: ["Jede Messung", "Messbarer Indikator zur Leistungsbewertung gegenüber Zielen", "Nur Finanzzahlen", "Nur Berichte"],
      en: ["Any measurement", "Measurable indicator used to evaluate performance against objectives", "Only financial figures", "Only reports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "KPI: măsurătoare cheie legată de un obiectiv de business. Trebuie să fie SMART: specific, măsurabil, atingibil, relevant, temporal.",
      de: "KPI: Schlüsselmessung verbunden mit einem Geschäftsziel. Muss SMART sein: spezifisch, messbar, erreichbar, relevant, zeitgebunden.",
      en: "KPI: key measurement linked to a business objective. Must be SMART: specific, measurable, achievable, relevant, time-bound."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt categoriile principale de KPI în logistică?",
      de: "Was sind die Hauptkategorien von KPIs in der Logistik?",
      en: "What are the main categories of KPIs in logistics?"
    },
    options: {
      ro: ["Doar financiari", "Operaționali, financiari, calitate, clienți, sustenabilitate", "Doar timp", "Doar volum"],
      de: ["Nur finanziell", "Operativ, finanziell, Qualität, Kunden, Nachhaltigkeit", "Nur Zeit", "Nur Volumen"],
      en: ["Only financial", "Operational, financial, quality, customers, sustainability", "Only time", "Only volume"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Categorii KPI: operațional (OTIF, timp), financiar (marjă, cost/km), calitate (daune, reclamații), client (NPS, retenție), ESG.",
      de: "KPI-Kategorien: operativ (OTIF, Zeit), finanziell (Marge, Kosten/km), Qualität (Schäden, Reklamationen), Kunde (NPS, Retention), ESG.",
      en: "KPI categories: operational (OTIF, time), financial (margin, cost/km), quality (damages, complaints), client (NPS, retention), ESG."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce înseamnă OTIF și cum se calculează?",
      de: "Was bedeutet OTIF und wie wird es berechnet?",
      en: "What does OTIF mean and how is it calculated?"
    },
    options: {
      ro: ["On Time Is Free", "(Livrări la timp ȘI complete / Livrări totale) × 100 = On Time In Full %", "Only Transport Is Free", "Only Time Is Factored"],
      de: ["On Time Is Free", "(Pünktliche UND vollständige Lieferungen / Gesamtlieferungen) × 100 = On Time In Full %", "Only Transport Is Free", "Only Time Is Factored"],
      en: ["On Time Is Free", "(On-time AND complete deliveries / Total deliveries) × 100 = On Time In Full %", "Only Transport Is Free", "Only Time Is Factored"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OTIF: On Time In Full. 95 livrări perfecte din 100 = 95% OTIF. Standard bun: >95%. Excelent: >98%.",
      de: "OTIF: On Time In Full. 95 perfekte Lieferungen von 100 = 95% OTIF. Guter Standard: >95%. Exzellent: >98%.",
      en: "OTIF: On Time In Full. 95 perfect deliveries out of 100 = 95% OTIF. Good standard: >95%. Excellent: >98%."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Construire balanced scorecard pentru departamentul de transport. Perspective și KPI-uri?",
      de: "Balanced Scorecard für Transportabteilung aufbauen. Perspektiven und KPIs?",
      en: "Building balanced scorecard for transport department. Perspectives and KPIs?"
    },
    options: {
      ro: ["Doar perspectivă financiară", "Financiar (marjă), client (OTIF, NPS), procese (utilizare, productivitate), învățare (training, inovație)", "Doar operațional", "Doar un KPI"],
      de: ["Nur finanzielle Perspektive", "Finanziell (Marge), Kunde (OTIF, NPS), Prozesse (Auslastung, Produktivität), Lernen (Training, Innovation)", "Nur operativ", "Nur ein KPI"],
      en: ["Only financial perspective", "Financial (margin), client (OTIF, NPS), processes (utilization, productivity), learning (training, innovation)", "Only operational", "Only one KPI"]
    },
    correctIndex: 1,
    explanation: {
      ro: "BSC transport: Financiar (marja netă, cost/km), Client (OTIF, satisfacție), Procese (utilizare flotă, cycle time), Dezvoltare (ore training, idei implementate).",
      de: "BSC Transport: Finanziell (Nettomarge, Kosten/km), Kunde (OTIF, Zufriedenheit), Prozesse (Flottenauslastung, Zykluszeit), Entwicklung (Trainingstunden, umgesetzte Ideen).",
      en: "BSC transport: Financial (net margin, cost/km), Client (OTIF, satisfaction), Processes (fleet utilization, cycle time), Development (training hours, implemented ideas)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este rata de utilizare a flotei?",
      de: "Was ist die Flottenauslastungsrate?",
      en: "What is fleet utilization rate?"
    },
    options: {
      ro: ["Viteza medie", "(Timp productiv / Timp disponibil) × 100 sau (km încărcat / km total) × 100", "Doar km parcurși", "Doar consum"],
      de: ["Durchschnittsgeschwindigkeit", "(Produktivzeit / Verfügbare Zeit) × 100 oder (km beladen / km gesamt) × 100", "Nur gefahrene km", "Nur Verbrauch"],
      en: ["Average speed", "(Productive time / Available time) × 100 or (loaded km / total km) × 100", "Only km driven", "Only consumption"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Utilizare: km încărcat vs. km total. 80% din km sunt încărcați = 80% utilizare. Target: >85%. Include și timp: ore condus vs. ore disponibile.",
      de: "Auslastung: km beladen vs. km gesamt. 80% der km beladen = 80% Auslastung. Ziel: >85%. Inkludiert auch Zeit: Fahrstunden vs. verfügbare Stunden.",
      en: "Utilization: loaded km vs. total km. 80% of km loaded = 80% utilization. Target: >85%. Includes time too: driving hours vs. available hours."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi costul total per kilometru?",
      de: "Wie berechnest du die Gesamtkosten pro Kilometer?",
      en: "How do you calculate total cost per kilometer?"
    },
    options: {
      ro: ["Doar combustibil/km", "(Combustibil + Șofer + Taxe + Amortizare + Întreținere + Asigurări + Overhead) / km totali", "Doar depreciere", "Doar salarii"],
      de: ["Nur Kraftstoff/km", "(Kraftstoff + Fahrer + Gebühren + Abschreibung + Wartung + Versicherung + Overhead) / Gesamt-km", "Nur Abschreibung", "Nur Gehälter"],
      en: ["Only fuel/km", "(Fuel + Driver + Fees + Depreciation + Maintenance + Insurance + Overhead) / total km", "Only depreciation", "Only salaries"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cost/km complet: toate costurile directe și alocate împărțite la km. Exemplu: 150.000€ costuri/an / 120.000 km = 1.25€/km.",
      de: "Vollständige Kosten/km: alle direkten und zugewiesenen Kosten geteilt durch km. Beispiel: 150.000€ Kosten/Jahr / 120.000 km = 1,25€/km.",
      en: "Complete cost/km: all direct and allocated costs divided by km. Example: €150,000 costs/year / 120,000 km = €1.25/km."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dashboard KPI pentru management: 10 metrici esențiale pentru vizualizare zilnică?",
      de: "KPI-Dashboard für Management: 10 wesentliche Metriken für tägliche Visualisierung?",
      en: "KPI dashboard for management: 10 essential metrics for daily visualization?"
    },
    options: {
      ro: ["Doar venit", "OTIF, marjă zilnică, comenzi active, reclamații deschise, utilizare flotă, lead time, cash collection, km gol, incidente, forecast vs. actual", "Doar operational", "Doar financiar"],
      de: ["Nur Umsatz", "OTIF, Tagesmarge, aktive Aufträge, offene Reklamationen, Flottenauslastung, Vorlaufzeit, Cash Collection, Leer-km, Vorfälle, Forecast vs. Ist", "Nur operativ", "Nur finanziell"],
      en: ["Only revenue", "OTIF, daily margin, active orders, open complaints, fleet utilization, lead time, cash collection, empty km, incidents, forecast vs. actual", "Only operational", "Only financial"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dashboard: mix balanced - livrare (OTIF), financiar (marjă, colectare), operațional (comenzi, flotă), calitate (reclamații, incidente), tendințe (forecast).",
      de: "Dashboard: ausgewogener Mix - Lieferung (OTIF), finanziell (Marge, Inkasso), operativ (Aufträge, Flotte), Qualität (Reklamationen, Vorfälle), Trends (Prognose).",
      en: "Dashboard: balanced mix - delivery (OTIF), financial (margin, collection), operational (orders, fleet), quality (complaints, incidents), trends (forecast)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este lead time în transport?",
      de: "Was ist Lead Time im Transport?",
      en: "What is lead time in transport?"
    },
    options: {
      ro: ["Timp de condus", "Timpul total de la primire comandă până la livrare", "Doar încărcare", "Doar descărcare"],
      de: ["Fahrzeit", "Gesamtzeit von Auftragseingang bis Lieferung", "Nur Beladung", "Nur Entladung"],
      en: ["Driving time", "Total time from order receipt to delivery", "Only loading", "Only unloading"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lead time: comandă → planificare → încărcare → transport → descărcare → confirmare. Include toate etapele, nu doar transportul.",
      de: "Lead Time: Auftrag → Planung → Beladung → Transport → Entladung → Bestätigung. Umfasst alle Schritte, nicht nur Transport.",
      en: "Lead time: order → planning → loading → transport → unloading → confirmation. Includes all stages, not just transport."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum măsori productivitatea unui dispecer?",
      de: "Wie misst du die Produktivität eines Disponenten?",
      en: "How do you measure a dispatcher's productivity?"
    },
    options: {
      ro: ["Doar ore lucrate", "Comenzi gestionate, marjă generată, rata de erori, OTIF curse proprii, utilizare transportatori", "Doar apeluri", "Doar email-uri"],
      de: ["Nur Arbeitsstunden", "Verwaltete Aufträge, generierte Marge, Fehlerquote, OTIF eigene Fahrten, Transportunternehmer-Auslastung", "Nur Anrufe", "Nur E-Mails"],
      en: ["Only hours worked", "Orders managed, margin generated, error rate, own trips OTIF, carrier utilization", "Only calls", "Only emails"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Productivitate dispecer: comenzi/zi, marjă totală, rata probleme cauzate, OTIF-ul curselor, feedback transportatori, eficiență routing.",
      de: "Disponenten-Produktivität: Aufträge/Tag, Gesamtmarge, verursachte Problemrate, OTIF der Fahrten, Transportunternehmer-Feedback, Routing-Effizienz.",
      en: "Dispatcher productivity: orders/day, total margin, caused problem rate, trips OTIF, carrier feedback, routing efficiency."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Analiză trenduri KPI: OTIF scade de la 96% la 91% în 3 luni. Investigare root cause?",
      de: "KPI-Trendanalyse: OTIF sinkt von 96% auf 91% in 3 Monaten. Root Cause Untersuchung?",
      en: "KPI trend analysis: OTIF drops from 96% to 91% in 3 months. Root cause investigation?"
    },
    options: {
      ro: ["Ignor variația", "Segmentează pe transportator/rută/client, identifică pattern, analizează schimbări operaționale, acțiuni corective", "Doar schimbi target", "Doar raportezi"],
      de: ["Variation ignorieren", "Nach Transportunternehmer/Route/Kunde segmentieren, Muster identifizieren, operative Änderungen analysieren, Korrekturmaßnahmen", "Nur Ziel ändern", "Nur berichten"],
      en: ["Ignore variation", "Segment by carrier/route/client, identify pattern, analyze operational changes, corrective actions", "Only change target", "Only report"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Root cause: unde e problema (transportator? rută? client?), ce s-a schimbat (volum crescut? personal nou?), acțiuni specifice și monitorizare.",
      de: "Root Cause: wo ist das Problem (Transportunternehmer? Route? Kunde?), was hat sich geändert (Volumen gestiegen? neues Personal?), spezifische Aktionen und Monitoring.",
      en: "Root cause: where's the problem (carrier? route? client?), what changed (volume up? new staff?), specific actions and monitoring."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este NPS (Net Promoter Score)?",
      de: "Was ist NPS (Net Promoter Score)?",
      en: "What is NPS (Net Promoter Score)?"
    },
    options: {
      ro: ["Număr de produse", "Măsură a loialității clienților bazată pe probabilitatea de a recomanda serviciul", "Nota profesorului", "Puncte de vânzare"],
      de: ["Produktanzahl", "Kundenloyalitätsmaß basierend auf Weiterempfehlungswahrscheinlichkeit", "Lehrernote", "Verkaufspunkte"],
      en: ["Number of products", "Customer loyalty measure based on likelihood to recommend service", "Teacher's grade", "Sales points"]
    },
    correctIndex: 1,
    explanation: {
      ro: "NPS: 'Cât de probabil să ne recomandați?' (0-10). Promotori(9-10) minus Detractori(0-6) = NPS. Pasivi(7-8) nu se numără. Bun: >30, Excelent: >50.",
      de: "NPS: 'Wie wahrscheinlich empfehlen Sie uns?' (0-10). Promotoren(9-10) minus Detraktoren(0-6) = NPS. Passive(7-8) zählen nicht. Gut: >30, Exzellent: >50.",
      en: "NPS: 'How likely to recommend us?' (0-10). Promoters(9-10) minus Detractors(0-6) = NPS. Passives(7-8) don't count. Good: >30, Excellent: >50."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi marja per client și de ce e important?",
      de: "Wie berechnest du die Marge pro Kunde und warum ist es wichtig?",
      en: "How do you calculate margin per client and why is it important?"
    },
    options: {
      ro: ["Nu se calculează per client", "(Venituri client - Costuri alocate) / Venituri client × 100 = prioritizare și strategie", "Doar venit total", "Doar costuri directe"],
      de: ["Nicht pro Kunde berechenbar", "(Kundenumsatz - zugewiesene Kosten) / Kundenumsatz × 100 = Priorisierung und Strategie", "Nur Gesamtumsatz", "Nur direkte Kosten"],
      en: ["Cannot calculate per client", "(Client revenue - Allocated costs) / Client revenue × 100 = prioritization and strategy", "Only total revenue", "Only direct costs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marja/client: identifică clienți profitabili vs. neprofitabili. Client A: 10% marjă, Client B: 2% marjă. Informează negocieri și prioritizare.",
      de: "Marge/Kunde: profitable vs. unprofitable Kunden identifizieren. Kunde A: 10% Marge, Kunde B: 2% Marge. Informiert Verhandlungen und Priorisierung.",
      en: "Margin/client: identify profitable vs. unprofitable clients. Client A: 10% margin, Client B: 2% margin. Informs negotiations and prioritization."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Sistem de early warning bazat pe KPI pentru anticipare probleme. Design?",
      de: "KPI-basiertes Early Warning System zur Problemantizipation. Design?",
      en: "KPI-based early warning system for problem anticipation. Design?"
    },
    options: {
      ro: ["Doar reactivă", "Praguri (verde/galben/roșu), alertă automată la deviere, escaladare definită, acțiuni preventive", "Doar rapoarte lunare", "Doar pentru management"],
      de: ["Nur reaktiv", "Schwellenwerte (grün/gelb/rot), automatische Warnung bei Abweichung, definierte Eskalation, präventive Maßnahmen", "Nur Monatsberichte", "Nur für Management"],
      en: ["Only reactive", "Thresholds (green/yellow/red), automatic alert on deviation, defined escalation, preventive actions", "Only monthly reports", "Only for management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Early warning: KPI cu threshold (ex: OTIF<94% = galben, <90% = roșu), alertă automată, playbook de răspuns, escaladare pe nivel.",
      de: "Early Warning: KPI mit Schwellenwert (z.B. OTIF<94% = gelb, <90% = rot), automatische Warnung, Antwort-Playbook, Eskalation nach Level.",
      en: "Early warning: KPI with threshold (e.g., OTIF<94% = yellow, <90% = red), automatic alert, response playbook, level-based escalation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este claim rate (rata de reclamații)?",
      de: "Was ist die Claim Rate (Reklamationsquote)?",
      en: "What is the claim rate?"
    },
    options: {
      ro: ["Rata de plată", "(Număr reclamații / Număr total transporturi) × 100", "Rata de încărcare", "Rata de profit"],
      de: ["Zahlungsrate", "(Reklamationsanzahl / Gesamttransportanzahl) × 100", "Ladequote", "Gewinnrate"],
      en: ["Payment rate", "(Number of claims / Total transports number) × 100", "Loading rate", "Profit rate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Claim rate: 5 reclamații din 500 transporturi = 1%. Include daune, întârzieri, pierderi. Target: <1%. Urmărește și valoarea claims, nu doar numărul.",
      de: "Claim Rate: 5 Reklamationen bei 500 Transporten = 1%. Umfasst Schäden, Verzögerungen, Verluste. Ziel: <1%. Verfolge auch Claim-Wert, nicht nur Anzahl.",
      en: "Claim rate: 5 claims from 500 transports = 1%. Includes damages, delays, losses. Target: <1%. Track claim value too, not just number."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum măsori eficiența departamentului de customer service?",
      de: "Wie misst du die Effizienz der Kundenservice-Abteilung?",
      en: "How do you measure customer service department efficiency?"
    },
    options: {
      ro: ["Doar număr angajați", "First response time, resolution time, customer satisfaction, tickets/persoană, FCR (first call resolution)", "Doar costuri", "Doar training"],
      de: ["Nur Mitarbeiterzahl", "First Response Time, Lösungszeit, Kundenzufriedenheit, Tickets/Person, FCR (First Call Resolution)", "Nur Kosten", "Nur Training"],
      en: ["Only employee count", "First response time, resolution time, customer satisfaction, tickets/person, FCR (first call resolution)", "Only costs", "Only training"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CS KPI: timp prim răspuns (<2h), timp rezolvare (<24h), satisfacție post-interacție, FCR (rezolvat din prima), volum/agent.",
      de: "CS KPI: Erstantwortzeit (<2h), Lösungszeit (<24h), Zufriedenheit nach Interaktion, FCR (beim ersten Mal gelöst), Volumen/Agent.",
      en: "CS KPI: first response time (<2h), resolution time (<24h), post-interaction satisfaction, FCR (resolved first time), volume/agent."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Benchmarking KPI: cum compari performanța cu industria și competitorii?",
      de: "KPI-Benchmarking: wie vergleichst du Leistung mit Branche und Wettbewerbern?",
      en: "KPI benchmarking: how do you compare performance with industry and competitors?"
    },
    options: {
      ro: ["Nu compari", "Studii de industrie, asociații profesionale, date publice competitori, clienți comuni (anonim)", "Doar intern", "Doar rapoarte anuale"],
      de: ["Nicht vergleichen", "Branchenstudien, Berufsverbände, öffentliche Wettbewerberdaten, gemeinsame Kunden (anonym)", "Nur intern", "Nur Jahresberichte"],
      en: ["Don't compare", "Industry studies, professional associations, public competitor data, common clients (anonymous)", "Only internal", "Only annual reports"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Benchmarking: studii sector (Eurostat, Transport Intelligence), asociații, clienți care lucrează cu alții (feedback anonim), rapoarte publice competitori.",
      de: "Benchmarking: Branchenstudien (Eurostat, Transport Intelligence), Verbände, Kunden die mit anderen arbeiten (anonymes Feedback), öffentliche Wettbewerberberichte.",
      en: "Benchmarking: sector studies (Eurostat, Transport Intelligence), associations, clients working with others (anonymous feedback), public competitor reports."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este DSO (Days Sales Outstanding)?",
      de: "Was ist DSO (Days Sales Outstanding)?",
      en: "What is DSO (Days Sales Outstanding)?"
    },
    options: {
      ro: ["Zile de vânzări", "Numărul mediu de zile până la încasarea facturilor", "Zile de livrare", "Zile de stocare"],
      de: ["Verkaufstage", "Durchschnittliche Anzahl Tage bis zur Rechnungsinkasso", "Liefertage", "Lagertage"],
      en: ["Sales days", "Average number of days until invoice collection", "Delivery days", "Storage days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DSO: (Creanțe / Venituri zilnice medii). Ex: 100k€ creanțe / 2k€ venit zilnic = 50 zile DSO. Target: <45 zile.",
      de: "DSO: (Forderungen / durchschnittlicher Tagesumsatz). Bsp: 100k€ Forderungen / 2k€ Tagesumsatz = 50 Tage DSO. Ziel: <45 Tage.",
      en: "DSO: (Receivables / average daily revenue). Ex: €100k receivables / €2k daily revenue = 50 days DSO. Target: <45 days."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum setezi target-uri realiste pentru KPI-uri noi?",
      de: "Wie setzt du realistische Ziele für neue KPIs?",
      en: "How do you set realistic targets for new KPIs?"
    },
    options: {
      ro: ["Arbitrar", "Baseline actual + benchmark industrie + îmbunătățire progresivă + resurse disponibile", "100% mereu", "Doar după 1 an"],
      de: ["Willkürlich", "Aktuelle Baseline + Branchenbenchmark + progressive Verbesserung + verfügbare Ressourcen", "Immer 100%", "Nur nach 1 Jahr"],
      en: ["Arbitrary", "Current baseline + industry benchmark + progressive improvement + available resources", "Always 100%", "Only after 1 year"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Target setting: măsoară actual (baseline), compară cu benchmark, setează țintă progresivă (an 1: +5%, an 2: +10%), validează cu resurse.",
      de: "Target Setting: aktuell messen (Baseline), mit Benchmark vergleichen, progressives Ziel setzen (Jahr 1: +5%, Jahr 2: +10%), mit Ressourcen validieren.",
      en: "Target setting: measure current (baseline), compare with benchmark, set progressive target (year 1: +5%, year 2: +10%), validate with resources."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare OKR (Objectives and Key Results) în departamentul de transport. Structură și exemple?",
      de: "OKR-Implementierung (Objectives and Key Results) in der Transportabteilung. Struktur und Beispiele?",
      en: "Implementing OKR (Objectives and Key Results) in transport department. Structure and examples?"
    },
    options: {
      ro: ["Doar KPI tradițional", "Obiectiv ambițios + 3-5 rezultate cheie măsurabile, trimestrial, cascadat de la companie", "Doar obiective", "Doar rezultate"],
      de: ["Nur traditioneller KPI", "Ehrgeiziges Ziel + 3-5 messbare Schlüsselergebnisse, vierteljährlich, von Unternehmen kaskadiert", "Nur Ziele", "Nur Ergebnisse"],
      en: ["Only traditional KPI", "Ambitious objective + 3-5 measurable key results, quarterly, cascaded from company", "Only objectives", "Only results"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OKR exemplu: O='Devenim lider regional în calitate' → KR1: OTIF 98%, KR2: NPS 60, KR3: Claims <0.5%, KR4: Zero incidente majore.",
      de: "OKR Beispiel: O='Regionaler Qualitätsführer werden' → KR1: OTIF 98%, KR2: NPS 60, KR3: Claims <0,5%, KR4: Null schwere Vorfälle.",
      en: "OKR example: O='Become regional quality leader' → KR1: OTIF 98%, KR2: NPS 60, KR3: Claims <0.5%, KR4: Zero major incidents."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'perfect order rate'?",
      de: "Was ist die 'Perfect Order Rate'?",
      en: "What is 'perfect order rate'?"
    },
    options: {
      ro: ["Rata de comandă", "Procentul comenzilor executate fără nicio problemă (la timp, complet, fără daune, documentație corectă)", "Doar comenzi mari", "Doar comenzi rapide"],
      de: ["Bestellquote", "Prozentsatz Aufträge ohne Problem ausgeführt (pünktlich, vollständig, ohne Schäden, korrekte Dokumentation)", "Nur große Aufträge", "Nur schnelle Aufträge"],
      en: ["Order rate", "Percentage of orders executed without any issue (on time, complete, no damages, correct documentation)", "Only large orders", "Only fast orders"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Perfect order: la timp ȘI complet ȘI fără daune ȘI documente corecte ȘI facturare corectă. Mai strict decât OTIF. Target: >90%.",
      de: "Perfect Order: pünktlich UND vollständig UND ohne Schäden UND korrekte Dokumente UND korrekte Fakturierung. Strenger als OTIF. Ziel: >90%.",
      en: "Perfect order: on time AND complete AND no damages AND correct documents AND correct invoicing. Stricter than OTIF. Target: >90%."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum creezi cultura orientată spre KPI în echipă?",
      de: "Wie schaffst du eine KPI-orientierte Kultur im Team?",
      en: "How do you create KPI-oriented culture in the team?"
    },
    options: {
      ro: ["Impui fără explicații", "Transparență, ownership individual, link la compensare, celebrare succese, învățare din eșecuri", "Doar pentru management", "Doar amenințări"],
      de: ["Ohne Erklärung aufzwingen", "Transparenz, individuelle Verantwortung, Vergütungsverknüpfung, Erfolge feiern, aus Fehlern lernen", "Nur für Management", "Nur Drohungen"],
      en: ["Impose without explanation", "Transparency, individual ownership, compensation link, celebrate successes, learn from failures", "Only for management", "Only threats"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cultura KPI: afișează dashboard vizibil, fiecare știe ținta lui, parte din evaluare/bonus, sărbătorești milestone-uri, analizezi eșecuri constructiv.",
      de: "KPI-Kultur: sichtbares Dashboard anzeigen, jeder kennt sein Ziel, Teil der Bewertung/Bonus, Meilensteine feiern, Misserfolge konstruktiv analysieren.",
      en: "KPI culture: display visible dashboard, everyone knows their target, part of evaluation/bonus, celebrate milestones, analyze failures constructively."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Predictive analytics pentru KPI: ce indicatori poți prezice și cum?",
      de: "Predictive Analytics für KPIs: welche Indikatoren kannst du vorhersagen und wie?",
      en: "Predictive analytics for KPIs: what indicators can you predict and how?"
    },
    options: {
      ro: ["Nu se poate", "Volume (sezonalitate), capacitate necesară, riscuri întârziere, churn clienți - machine learning pe date istorice", "Doar financiare", "Doar operaționale"],
      de: ["Nicht möglich", "Volumina (Saisonalität), benötigte Kapazität, Verzögerungsrisiken, Kundenabwanderung - Machine Learning auf historischen Daten", "Nur finanzielle", "Nur operative"],
      en: ["Not possible", "Volumes (seasonality), needed capacity, delay risks, client churn - machine learning on historical data", "Only financial", "Only operational"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Predictive: forecast volume (sezonalitate + trend), predicție întârzieri (meteo, trafic), churn risk (comportament client), capacitate necesară.",
      de: "Predictive: Volumenprogose (Saisonalität + Trend), Verzögerungsvorhersage (Wetter, Verkehr), Churn-Risiko (Kundenverhalten), benötigte Kapazität.",
      en: "Predictive: volume forecast (seasonality + trend), delay prediction (weather, traffic), churn risk (client behavior), capacity needed."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'dwell time' în transport?",
      de: "Was ist 'Dwell Time' im Transport?",
      en: "What is 'dwell time' in transport?"
    },
    options: {
      ro: ["Timpul de odihnă", "Timpul petrecut de camion la încărcare/descărcare (așteptare + operare)", "Timpul de condus", "Timpul de pauză"],
      de: ["Ruhezeit", "Zeit die der LKW bei Be-/Entladung verbringt (Warten + Betrieb)", "Fahrzeit", "Pausenzeit"],
      en: ["Rest time", "Time truck spends at loading/unloading (waiting + operation)", "Driving time", "Break time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dwell time: camion sosit 8:00, plecat 12:00 = 4 ore dwell. Include așteptare + încărcare efectivă. Target: <2-3 ore. Excess = ineficiență.",
      de: "Dwell Time: LKW angekommen 8:00, abgefahren 12:00 = 4 Stunden Dwell. Inkl. Warten + effektive Beladung. Ziel: <2-3 Stunden. Überschuss = Ineffizienz.",
      en: "Dwell time: truck arrived 8:00, left 12:00 = 4 hours dwell. Includes waiting + actual loading. Target: <2-3 hours. Excess = inefficiency."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum raportezi KPI-uri la diferite nivele (operațional, management, board)?",
      de: "Wie berichtest du KPIs auf verschiedenen Ebenen (operativ, Management, Vorstand)?",
      en: "How do you report KPIs at different levels (operational, management, board)?"
    },
    options: {
      ro: ["Identic pentru toți", "Operațional: detaliu zilnic; Management: trend săptămânal; Board: strategic lunar cu insight-uri", "Doar pentru board", "Doar pentru operațional"],
      de: ["Identisch für alle", "Operativ: tägliches Detail; Management: wöchentlicher Trend; Vorstand: strategisch monatlich mit Insights", "Nur für Vorstand", "Nur für operativ"],
      en: ["Identical for all", "Operational: daily detail; Management: weekly trend; Board: strategic monthly with insights", "Only for board", "Only for operational"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Layered reporting: dispecer vede zilnic detalii, manager vede trend și excepții, director vede strategic cu insights și proiecții.",
      de: "Layered Reporting: Disponent sieht täglich Details, Manager sieht Trend und Ausnahmen, Direktor sieht strategisch mit Insights und Projektionen.",
      en: "Layered reporting: dispatcher sees daily details, manager sees trend and exceptions, director sees strategic with insights and projections."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Audit intern al sistemului de KPI. Criterii de evaluare și acțiuni?",
      de: "Internes Audit des KPI-Systems. Bewertungskriterien und Maßnahmen?",
      en: "Internal audit of KPI system. Evaluation criteria and actions?"
    },
    options: {
      ro: ["Nu se auditează", "Relevanță pentru obiective, acuratețe date, utilizare în decizii, cost vs. valoare, actualizare regulată", "Doar IT auditează", "Doar extern"],
      de: ["Nicht auditieren", "Relevanz für Ziele, Datengenauigkeit, Nutzung in Entscheidungen, Kosten vs. Wert, regelmäßige Aktualisierung", "Nur IT auditiert", "Nur extern"],
      en: ["Don't audit", "Relevance to objectives, data accuracy, use in decisions, cost vs. value, regular update", "Only IT audits", "Only external"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Audit KPI: fiecare metric e relevant? datele sunt corecte? managerii le folosesc? costul colectării e justificat? actualizăm când schimbă strategia?",
      de: "KPI-Audit: ist jede Metrik relevant? sind Daten korrekt? nutzen Manager sie? sind Erfassungskosten gerechtfertigt? aktualisieren wir bei Strategieänderung?",
      en: "KPI audit: is each metric relevant? is data correct? do managers use them? is collection cost justified? do we update when strategy changes?"
    }
  }
];
