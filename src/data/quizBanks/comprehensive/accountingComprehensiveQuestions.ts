import { TranslatedQuizQuestion } from '../../quizTranslations';

export const accountingComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele documente contabile în transport?",
      de: "Was sind die wichtigsten Buchhaltungsdokumente im Transport?",
      en: "What are the main accounting documents in transport?"
    },
    options: {
      ro: ["Doar facturi", "Facturi emise, facturi primite, note de credit, extrase bancare, jurnale", "Doar CMR", "Doar contracte"],
      de: ["Nur Rechnungen", "Ausgestellte Rechnungen, erhaltene Rechnungen, Gutschriften, Kontoauszüge, Journale", "Nur CMR", "Nur Verträge"],
      en: ["Only invoices", "Issued invoices, received invoices, credit notes, bank statements, journals", "Only CMR", "Only contracts"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documente contabile: facturi de vânzare, facturi de cumpărare (transport, combustibil), note de credit/debit, extrase bancare, jurnale de încasări/plăți.",
      de: "Buchhaltungsdokumente: Verkaufsrechnungen, Einkaufsrechnungen (Transport, Kraftstoff), Gut-/Lastschriften, Kontoauszüge, Einnahmen-/Zahlungsjournale.",
      en: "Accounting documents: sales invoices, purchase invoices (transport, fuel), credit/debit notes, bank statements, receipts/payments journals."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este marja brută în transporturi?",
      de: "Was ist die Bruttomarge im Transport?",
      en: "What is gross margin in transport?"
    },
    options: {
      ro: ["Cifra de afaceri", "Diferența dintre prețul de vânzare și costul direct de transport", "Profitul net", "Costul combustibilului"],
      de: ["Umsatz", "Differenz zwischen Verkaufspreis und direkten Transportkosten", "Nettogewinn", "Kraftstoffkosten"],
      en: ["Revenue", "Difference between selling price and direct transport cost", "Net profit", "Fuel cost"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marjă brută: preț client - cost carrier = marjă. Ex: 1.500€ client - 1.200€ carrier = 300€ marjă (20%). Trebuie să acopere overhead-ul și profitul.",
      de: "Bruttomarge: Kundenpreis - Carrier-Kosten = Marge. Bsp.: 1.500€ Kunde - 1.200€ Carrier = 300€ Marge (20%). Muss Overhead und Gewinn decken.",
      en: "Gross margin: client price - carrier cost = margin. E.g., €1,500 client - €1,200 carrier = €300 margin (20%). Must cover overhead and profit."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi profitabilitatea pe client?",
      de: "Wie berechnest du die Rentabilität pro Kunde?",
      en: "How do you calculate profitability per client?"
    },
    options: {
      ro: ["Doar după venituri", "Venituri - costuri directe - costuri alocate (handling, admin) = profit client", "Doar după volum", "Nu se poate calcula"],
      de: ["Nur nach Umsatz", "Umsatz - direkte Kosten - zugewiesene Kosten (Handling, Admin) = Kundengewinn", "Nur nach Volumen", "Kann nicht berechnet werden"],
      en: ["Only by revenue", "Revenue - direct costs - allocated costs (handling, admin) = client profit", "Only by volume", "Cannot be calculated"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Profitabilitate client: venituri - cost transport - costuri alocate (timp handling, reclamații, admin proporțional). Unii clienți mari sunt neprofitabili!",
      de: "Kundenrentabilität: Umsatz - Transportkosten - zugewiesene Kosten (Handling-Zeit, Reklamationen, anteiliges Admin). Manche große Kunden sind unrentabel!",
      en: "Client profitability: revenue - transport cost - allocated costs (handling time, claims, proportional admin). Some large clients are unprofitable!"
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare sistem de cost accounting pentru flotă proprie. Categorii de costuri și alocare?",
      de: "Implementierung Kostenrechnungssystem für eigene Flotte. Kostenkategorien und Zuordnung?",
      en: "Implementing cost accounting system for own fleet. Cost categories and allocation?"
    },
    options: {
      ro: ["Doar combustibil", "Fix (leasing, asigurare, salariu), variabil (diesel, taxe drum, mentenanță), overhead alocat per km sau transport", "Doar salarii", "Fără alocare"],
      de: ["Nur Kraftstoff", "Fix (Leasing, Versicherung, Gehalt), variabel (Diesel, Maut, Wartung), Overhead zugeteilt pro km oder Transport", "Nur Gehälter", "Keine Zuordnung"],
      en: ["Only fuel", "Fixed (leasing, insurance, salary), variable (diesel, tolls, maintenance), overhead allocated per km or transport", "Only salaries", "No allocation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cost accounting flotă: fix (rate leasing, RCA, salariu bază), variabil (diesel/100km, taxe drum, reparații), overhead (admin, management) alocat per km sau transport.",
      de: "Flottenkosten-Rechnung: fix (Leasingraten, Haftpflicht, Grundgehalt), variabel (Diesel/100km, Maut, Reparaturen), Overhead (Admin, Management) zugeteilt pro km oder Transport.",
      en: "Fleet cost accounting: fixed (leasing rates, liability insurance, base salary), variable (diesel/100km, tolls, repairs), overhead (admin, management) allocated per km or transport."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este TVA-ul și cum se aplică în transport internațional?",
      de: "Was ist Mehrwertsteuer und wie wird sie im internationalen Transport angewendet?",
      en: "What is VAT and how is it applied in international transport?"
    },
    options: {
      ro: ["Taxa pe venit", "Taxă pe valoarea adăugată; transport internațional UE = 0% (reverse charge)", "Nu se aplică", "Doar 5%"],
      de: ["Einkommensteuer", "Mehrwertsteuer; internationaler EU-Transport = 0% (Reverse Charge)", "Gilt nicht", "Nur 5%"],
      en: ["Income tax", "Value Added Tax; international EU transport = 0% (reverse charge)", "Doesn't apply", "Only 5%"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TVA transport: intern = cota standard (19% RO), internațional UE = 0% reverse charge (clientul raportează), export extra-UE = 0% cu documente.",
      de: "Transportsteuer: inländisch = Standardsatz (19% DE), internationaler EU = 0% Reverse Charge (Kunde meldet), Export außer-EU = 0% mit Dokumenten.",
      en: "Transport VAT: domestic = standard rate (varies by country), international EU = 0% reverse charge (client reports), extra-EU export = 0% with documents."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum înregistrezi contabil un transport subcontractat?",
      de: "Wie buchst du einen subunternehmerischen Transport?",
      en: "How do you record a subcontracted transport accounting-wise?"
    },
    options: {
      ro: ["Doar factură client", "Venit: factură client (401). Cost: factură carrier primită (401). Diferența = marja brută", "Nu înregistrezi", "Doar nota internă"],
      de: ["Nur Kundenrechnung", "Ertrag: Kundenrechnung (Erlös). Kosten: erhaltene Carrier-Rechnung (Aufwand). Differenz = Bruttomarge", "Nicht buchen", "Nur interne Notiz"],
      en: ["Only client invoice", "Revenue: client invoice (revenue). Cost: carrier invoice received (expense). Difference = gross margin", "Don't record", "Only internal note"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contabilitate: emitere factură client = venit (clasa 7), primire factură carrier = cheltuială (clasa 6). Marja = diferența, vizibilă în contul de rezultate.",
      de: "Buchhaltung: Kundenrechnung ausstellen = Ertrag (Klasse 7), Carrier-Rechnung erhalten = Aufwand (Klasse 6). Marge = Differenz, sichtbar in GuV.",
      en: "Accounting: issue client invoice = revenue (class 7), receive carrier invoice = expense (class 6). Margin = difference, visible in P&L."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Closing lunar contabilitate: checklist și termene pentru companie de transport?",
      de: "Monatlicher Buchhaltungsabschluss: Checkliste und Fristen für Transportunternehmen?",
      en: "Monthly accounting closing: checklist and deadlines for transport company?"
    },
    options: {
      ro: ["Doar o dată pe an", "Înregistrare toate facturile, reconciliere bancă, accruals, provisioane, rapoarte, analiză variații", "Doar la cerere", "Fără closing"],
      de: ["Nur einmal jährlich", "Alle Rechnungen erfassen, Bankabstimmung, Abgrenzungen, Rückstellungen, Berichte, Varianzanalyse", "Nur auf Anfrage", "Kein Abschluss"],
      en: ["Only once a year", "Record all invoices, bank reconciliation, accruals, provisions, reports, variance analysis", "Only on request", "No closing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Closing lunar: toate facturile înregistrate (cut-off), reconciliere bancă, accruals costuri/venituri, provisioane claims, raport P&L, analiză variații buget vs. real.",
      de: "Monatlicher Abschluss: alle Rechnungen erfasst (Cut-off), Bankabstimmung, Kosten-/Ertragsabgrenzungen, Claims-Rückstellungen, GuV-Bericht, Budget-Ist-Varianzanalyse.",
      en: "Monthly closing: all invoices recorded (cut-off), bank reconciliation, cost/revenue accruals, claims provisions, P&L report, budget vs. actual variance analysis."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un cont de rezultate (P&L)?",
      de: "Was ist eine Gewinn- und Verlustrechnung (GuV)?",
      en: "What is a Profit & Loss statement (P&L)?"
    },
    options: {
      ro: ["Bilanț", "Raport care arată veniturile, cheltuielile și profitul pe o perioadă", "Extras bancar", "Inventar"],
      de: ["Bilanz", "Bericht der Erträge, Aufwendungen und Gewinn für eine Periode zeigt", "Kontoauszug", "Inventar"],
      en: ["Balance sheet", "Report showing revenues, expenses and profit for a period", "Bank statement", "Inventory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "P&L: venituri (transport, alte servicii) - cheltuieli (cost transport, salarii, overhead) = profit/pierdere. Lunar/trimestrial pentru management.",
      de: "GuV: Erträge (Transport, andere Dienste) - Aufwendungen (Transportkosten, Gehälter, Overhead) = Gewinn/Verlust. Monatlich/quartalsweise für Management.",
      en: "P&L: revenues (transport, other services) - expenses (transport cost, salaries, overhead) = profit/loss. Monthly/quarterly for management."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi diferențele de curs valutar în contabilitate?",
      de: "Wie managst du Wechselkursdifferenzen in der Buchhaltung?",
      en: "How do you manage exchange rate differences in accounting?"
    },
    options: {
      ro: ["Ignori", "Înregistrare la curs de încasare/plată, diferență = venit sau cheltuială financiară", "Doar un curs anual", "Nu folosești alte valute"],
      de: ["Ignorieren", "Buchung zum Inkasso-/Zahlungskurs, Differenz = Finanzertrag oder -aufwand", "Nur ein Jahreskurs", "Keine anderen Währungen verwenden"],
      en: ["Ignore", "Record at collection/payment rate, difference = financial income or expense", "Only one annual rate", "Don't use other currencies"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Curs valutar: factură la cursul zilei, încasare la cursul efectiv, diferența = venit sau cheltuială din diferențe de curs. Reevaluare sold la final de lună.",
      de: "Wechselkurs: Rechnung zum Tageskurs, Einzug zum effektiven Kurs, Differenz = Kursertrags oder -aufwand. Saldenneubewertung am Monatsende.",
      en: "Exchange rate: invoice at day's rate, collection at effective rate, difference = exchange rate income or expense. Balance revaluation at month-end."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Analiză financiară pentru achiziție competitor. Due diligence contabil - ce verifici?",
      de: "Finanzanalyse für Wettbewerberakquisition. Buchhaltungs-Due-Diligence - was prüfst du?",
      en: "Financial analysis for competitor acquisition. Accounting due diligence - what do you verify?"
    },
    options: {
      ro: ["Doar cifra de afaceri", "Calitate venituri, litigii/claims, datorii ascunse, contracte, active reale, working capital", "Doar profitul", "Doar angajații"],
      de: ["Nur Umsatz", "Ertragsqualität, Rechtsstreitigkeiten/Claims, versteckte Schulden, Verträge, reale Vermögenswerte, Working Capital", "Nur Gewinn", "Nur Mitarbeiter"],
      en: ["Only revenue", "Revenue quality, litigation/claims, hidden debts, contracts, real assets, working capital", "Only profit", "Only employees"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Due diligence: calitatea veniturilor (recurente vs. one-off), claims/litigii în curs, datorii neînregistrate, contracte majore, valoarea reală a activelor, DSO/DPO.",
      de: "Due Diligence: Ertragsqualität (wiederkehrend vs. einmalig), laufende Claims/Rechtsstreitigkeiten, nicht erfasste Verbindlichkeiten, Hauptverträge, realer Vermögenswert, DSO/DPO.",
      en: "Due diligence: revenue quality (recurring vs. one-off), ongoing claims/litigation, unrecorded liabilities, major contracts, real asset value, DSO/DPO."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce sunt provizionele în contabilitate?",
      de: "Was sind Rückstellungen in der Buchhaltung?",
      en: "What are provisions in accounting?"
    },
    options: {
      ro: ["Economii", "Recunoașterea unei cheltuieli probabile viitoare când nu știi suma exactă", "Venituri amânate", "Investiții"],
      de: ["Ersparnisse", "Erfassung einer wahrscheinlichen zukünftigen Ausgabe wenn genauer Betrag unbekannt", "Abgegrenzte Erträge", "Investitionen"],
      en: ["Savings", "Recognition of a probable future expense when exact amount is unknown", "Deferred revenue", "Investments"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Provizion: estimezi și înregistrezi cheltuieli probabile (claims în curs, litigii, garanții). Ex: claim de 50k€ probabil = provizion de 50k€.",
      de: "Rückstellung: wahrscheinliche Ausgaben schätzen und erfassen (laufende Claims, Rechtsstreitigkeiten, Garantien). Bsp.: wahrscheinlicher 50k€-Claim = 50k€ Rückstellung.",
      en: "Provision: estimate and record probable expenses (ongoing claims, litigation, warranties). E.g., €50k claim probable = €50k provision."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi EBITDA pentru o companie de transport?",
      de: "Wie berechnest du EBITDA für ein Transportunternehmen?",
      en: "How do you calculate EBITDA for a transport company?"
    },
    options: {
      ro: ["Doar cifra de afaceri", "Profit net + dobânzi + taxe + depreciere + amortizare", "Doar marja brută", "Doar cash flow"],
      de: ["Nur Umsatz", "Nettogewinn + Zinsen + Steuern + Abschreibung + Amortisation", "Nur Bruttomarge", "Nur Cashflow"],
      en: ["Only revenue", "Net profit + interest + taxes + depreciation + amortization", "Only gross margin", "Only cash flow"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EBITDA: Earnings Before Interest, Taxes, Depreciation, Amortization. Măsoară performanța operațională fără efecte de finanțare și contabile. Target: 8-12% în transport.",
      de: "EBITDA: Earnings Before Interest, Taxes, Depreciation, Amortization. Misst operative Leistung ohne Finanzierungs- und Buchhaltungseffekte. Ziel: 8-12% im Transport.",
      en: "EBITDA: Earnings Before Interest, Taxes, Depreciation, Amortization. Measures operational performance without financing and accounting effects. Target: 8-12% in transport."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Bugetare pentru anul următor: metodologie și ipoteze pentru companie de transport?",
      de: "Budgetierung für nächstes Jahr: Methodik und Annahmen für Transportunternehmen?",
      en: "Budgeting for next year: methodology and assumptions for transport company?"
    },
    options: {
      ro: ["Doar +10% la tot", "Bottom-up (per client/rută) + top-down (piață), ipoteze volum, preț, costuri, sensitivități", "Doar anul trecut", "Fără buget"],
      de: ["Nur +10% auf alles", "Bottom-up (pro Kunde/Route) + top-down (Markt), Volumen-, Preis-, Kostenannahmen, Sensitivitäten", "Nur letztes Jahr", "Kein Budget"],
      en: ["Only +10% to everything", "Bottom-up (per client/route) + top-down (market), volume, price, cost assumptions, sensitivities", "Only last year", "No budget"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bugetare: bottom-up (volum per client × preț × marjă) + verificare top-down (trend piață). Ipoteze: diesel +X%, salarii +Y%, rate câștig noi clienți. Sensitivități pe variabile cheie.",
      de: "Budgetierung: Bottom-up (Volumen pro Kunde × Preis × Marge) + Top-down-Prüfung (Markttrend). Annahmen: Diesel +X%, Gehälter +Y%, Neukunden-Gewinnrate. Sensitivitäten auf Schlüsselvariablen.",
      en: "Budgeting: bottom-up (volume per client × price × margin) + top-down check (market trend). Assumptions: diesel +X%, salaries +Y%, new client win rate. Sensitivities on key variables."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este cash flow-ul și de ce e important?",
      de: "Was ist Cashflow und warum ist er wichtig?",
      en: "What is cash flow and why is it important?"
    },
    options: {
      ro: ["Profit net", "Mișcarea reală a banilor în și din companie; esențial pentru plăți și lichiditate", "Doar venituri", "Cifra de afaceri"],
      de: ["Nettogewinn", "Tatsächliche Geldbewegung in und aus dem Unternehmen; wesentlich für Zahlungen und Liquidität", "Nur Erträge", "Umsatz"],
      en: ["Net profit", "Actual movement of money in and out of company; essential for payments and liquidity", "Only revenue", "Turnover"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cash flow: banii efectiv încasați și plătiți. Poți avea profit contabil dar cash flow negativ (clienți întârziat). Cash e king în transport!",
      de: "Cashflow: tatsächlich eingezogene und gezahlte Gelder. Du kannst Buchgewinn aber negativen Cashflow haben (Kunden verspätet). Cash is king im Transport!",
      en: "Cash flow: money actually collected and paid. You can have accounting profit but negative cash flow (clients delayed). Cash is king in transport!"
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi accrual-urile pentru servicii prestate dar nefacturate?",
      de: "Wie managst du Abgrenzungen für erbrachte aber nicht fakturierte Leistungen?",
      en: "How do you manage accruals for services rendered but not invoiced?"
    },
    options: {
      ro: ["Nu le înregistrezi", "Estimezi și înregistrezi venit la luna prestării, reversezi la facturarea efectivă", "Doar la final de an", "Doar când facturezi"],
      de: ["Nicht erfassen", "Schätzen und Ertrag im Leistungsmonat erfassen, bei tatsächlicher Fakturierung umkehren", "Nur am Jahresende", "Nur wenn fakturiert"],
      en: ["Don't record", "Estimate and record revenue in service month, reverse at actual invoicing", "Only at year end", "Only when invoiced"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Accrual venituri: transporturi efectuate în luna X dar facturate în luna X+1 = accrual în luna X (venit + creanță accrued), reversat la facturare.",
      de: "Ertragsabgrenzung: Transporte in Monat X durchgeführt aber in X+1 fakturiert = Abgrenzung in Monat X (Ertrag + abgegrenzte Forderung), bei Fakturierung umgekehrt.",
      en: "Revenue accrual: transports done in month X but invoiced in X+1 = accrual in month X (revenue + accrued receivable), reversed at invoicing."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Raportare financiară către grup/investitori. Pachete de rapoarte și frecvență?",
      de: "Finanzberichterstattung an Gruppe/Investoren. Berichtspakete und Häufigkeit?",
      en: "Financial reporting to group/investors. Report packages and frequency?"
    },
    options: {
      ro: ["Doar anual", "Lunar: P&L, cash flow, KPIs. Trimestrial: detaliat cu comentarii. Anual: complet auditat", "Doar la cerere", "Doar P&L"],
      de: ["Nur jährlich", "Monatlich: GuV, Cashflow, KPIs. Quartalsweise: detailliert mit Kommentaren. Jährlich: vollständig geprüft", "Nur auf Anfrage", "Nur GuV"],
      en: ["Only annually", "Monthly: P&L, cash flow, KPIs. Quarterly: detailed with comments. Annually: complete audited", "Only on request", "Only P&L"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Raportare: lunar (P&L, CF, KPIs operaționali, aging) în 10 zile. Trimestrial: analiză detaliată, comentarii variații, forecast actualizat. Anual: situații auditate.",
      de: "Berichterstattung: monatlich (GuV, CF, operative KPIs, Aging) in 10 Tagen. Quartalsweise: detaillierte Analyse, Varianzkommentare, aktualisierte Prognose. Jährlich: geprüfte Abschlüsse.",
      en: "Reporting: monthly (P&L, CF, operational KPIs, aging) in 10 days. Quarterly: detailed analysis, variance comments, updated forecast. Annually: audited statements."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este amortizarea și cum se aplică la flotă?",
      de: "Was ist Abschreibung und wie wird sie auf Flotte angewendet?",
      en: "What is depreciation and how is it applied to fleet?"
    },
    options: {
      ro: ["Reparații", "Distribuirea costului unui activ pe durata sa de viață utilă", "Doar combustibil", "Taxe de drum"],
      de: ["Reparaturen", "Verteilung der Anschaffungskosten über die Nutzungsdauer", "Nur Kraftstoff", "Mautgebühren"],
      en: ["Repairs", "Distributing the cost of an asset over its useful life", "Only fuel", "Road taxes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Amortizare camion: cost 100.000€, viață utilă 5 ani = 20.000€/an cheltuială de amortizare. Reduce profitul contabil dar nu afectează cash-ul.",
      de: "LKW-Abschreibung: Kosten 100.000€, Nutzungsdauer 5 Jahre = 20.000€/Jahr Abschreibungsaufwand. Reduziert Buchgewinn aber beeinflusst Cash nicht.",
      en: "Truck depreciation: cost €100,000, useful life 5 years = €20,000/year depreciation expense. Reduces accounting profit but doesn't affect cash."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum compari leasing operațional vs. achiziție pentru un camion?",
      de: "Wie vergleichst du operatives Leasing vs. Kauf für einen LKW?",
      en: "How do you compare operational leasing vs. purchase for a truck?"
    },
    options: {
      ro: ["Doar prețul lunar", "TCO (Total Cost of Ownership): rate, întreținere, valoare reziduală, impact fiscal, cash flow", "Doar avans", "Nu se pot compara"],
      de: ["Nur monatlicher Preis", "TCO (Total Cost of Ownership): Raten, Wartung, Restwert, steuerliche Auswirkung, Cashflow", "Nur Anzahlung", "Nicht vergleichbar"],
      en: ["Only monthly price", "TCO (Total Cost of Ownership): rates, maintenance, residual value, tax impact, cash flow", "Only down payment", "Cannot compare"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comparație: leasing = rate lunare + fără activ la final. Achiziție = avans mare, amortizare, valoare reziduală. Calculezi TCO pe 5 ani și compari cash flow-uri.",
      de: "Vergleich: Leasing = monatliche Raten + kein Vermögenswert am Ende. Kauf = große Anzahlung, Abschreibung, Restwert. TCO über 5 Jahre berechnen und Cashflows vergleichen.",
      en: "Comparison: leasing = monthly rates + no asset at end. Purchase = large down payment, depreciation, residual value. Calculate 5-year TCO and compare cash flows."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare sistem ERP pentru contabilitate și operațiuni. Module și integrări necesare?",
      de: "Implementierung ERP-System für Buchhaltung und Betrieb. Erforderliche Module und Integrationen?",
      en: "Implementing ERP system for accounting and operations. Required modules and integrations?"
    },
    options: {
      ro: ["Doar contabilitate", "GL, AP, AR, TMS integration, raportare, banking, payroll, BI analytics", "Doar facturare", "Doar Excel"],
      de: ["Nur Buchhaltung", "GL, AP, AR, TMS-Integration, Berichterstattung, Banking, Lohnabrechnung, BI-Analytik", "Nur Fakturierung", "Nur Excel"],
      en: ["Only accounting", "GL, AP, AR, TMS integration, reporting, banking, payroll, BI analytics", "Only invoicing", "Only Excel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ERP transport: General Ledger, Accounts Payable/Receivable, integrare TMS (comenzi→facturi), banking automat, payroll, modul BI pentru raportare, dashboard management.",
      de: "Transport-ERP: General Ledger, Kreditorenbuchhaltung/Debitorenbuchhaltung, TMS-Integration (Aufträge→Rechnungen), automatisches Banking, Lohnabrechnung, BI-Modul für Berichterstattung, Management-Dashboard.",
      en: "Transport ERP: General Ledger, Accounts Payable/Receivable, TMS integration (orders→invoices), automatic banking, payroll, BI module for reporting, management dashboard."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este reconcilierea bancară?",
      de: "Was ist Bankabstimmung?",
      en: "What is bank reconciliation?"
    },
    options: {
      ro: ["Cerere de credit", "Procesul de verificare că soldul contabil corespunde cu extrasul bancar", "Plată factură", "Transfer bancar"],
      de: ["Kreditantrag", "Prozess zur Überprüfung dass Buchsaldo mit Kontoauszug übereinstimmt", "Rechnungszahlung", "Überweisung"],
      en: ["Credit request", "Process of verifying that accounting balance matches bank statement", "Invoice payment", "Bank transfer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reconciliere: compari soldul din contabilitate cu extrasul bancar, identifici diferențe (plăți în tranzit, încasări neînregistrate), corectezi.",
      de: "Abstimmung: Buchsaldo mit Kontoauszug vergleichen, Differenzen identifizieren (Zahlungen im Transit, nicht erfasste Einnahmen), korrigieren.",
      en: "Reconciliation: compare accounting balance with bank statement, identify differences (payments in transit, unrecorded receipts), correct."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi și aloci costurile de overhead în transport?",
      de: "Wie managst und verteilst du Overhead-Kosten im Transport?",
      en: "How do you manage and allocate overhead costs in transport?"
    },
    options: {
      ro: ["Nu le aloci", "Identificare costuri fixe, alocare pe bază de km, transport sau venit pentru a vedea profitabilitatea reală", "Doar pe an", "Doar la final"],
      de: ["Nicht zuweisen", "Fixkosten identifizieren, Zuordnung nach km, Transport oder Umsatz um reale Rentabilität zu sehen", "Nur jährlich", "Nur am Ende"],
      en: ["Don't allocate", "Identify fixed costs, allocate by km, transport or revenue to see real profitability", "Only annually", "Only at end"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Overhead: costuri indirecte (chirii, admin, IT) alocate pe bază logică: cost per km, per transport, sau % din venituri. Esențial pentru profitabilitate reală per client/rută.",
      de: "Overhead: indirekte Kosten (Mieten, Admin, IT) auf logischer Basis zugeordnet: Kosten pro km, pro Transport, oder % vom Umsatz. Wesentlich für reale Rentabilität pro Kunde/Route.",
      en: "Overhead: indirect costs (rent, admin, IT) allocated on logical basis: cost per km, per transport, or % of revenue. Essential for real profitability per client/route."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Pregătire pentru audit extern. Documentație și procese necesare?",
      de: "Vorbereitung auf externe Prüfung. Erforderliche Dokumentation und Prozesse?",
      en: "Preparation for external audit. Required documentation and processes?"
    },
    options: {
      ro: ["Doar bilanțul", "Toate documentele justificative, reconcilieri, politici contabile, estimări documentate, control intern", "Doar anul curent", "Nu pregătești"],
      de: ["Nur Bilanz", "Alle Belege, Abstimmungen, Bilanzierungsrichtlinien, dokumentierte Schätzungen, interne Kontrolle", "Nur laufendes Jahr", "Nicht vorbereiten"],
      en: ["Only balance sheet", "All supporting documents, reconciliations, accounting policies, documented estimates, internal control", "Only current year", "Don't prepare"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pregătire audit: documente complete pe tranzacții, reconcilieri toate conturile, politici contabile scrise, suport pentru estimări (provizionuri), documentare control intern.",
      de: "Audit-Vorbereitung: vollständige Transaktionsbelege, Abstimmungen aller Konten, schriftliche Bilanzierungsrichtlinien, Unterstützung für Schätzungen (Rückstellungen), interne Kontrolldokumentation.",
      en: "Audit preparation: complete transaction documents, all account reconciliations, written accounting policies, support for estimates (provisions), internal control documentation."
    }
  }
];
