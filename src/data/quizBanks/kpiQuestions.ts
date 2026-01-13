import { QuizQuestion } from '../quizData';

export const kpiQuestions: Record<string, QuizQuestion[]> = {
  ro: [
    {
      question: "Ce reprezintă acronimul KPI?",
      options: ["Key Performance Index", "Key Performance Indicator", "Key Process Indicator", "Keep Performance Improving"],
      correctIndex: 1,
      explanation: "KPI = Key Performance Indicator, indicator cheie de performanță."
    },
    {
      question: "Care KPI măsoară procentul de livrări la timp?",
      options: ["Profit margin", "On-Time Delivery (OTD)", "Fleet utilization", "Cost per km"],
      correctIndex: 1,
      explanation: "OTD măsoară livrările efectuate conform termenului agreat."
    },
    {
      question: "Ce valoare OTD este considerată bună în transport?",
      options: ["50%", "75%", "95%+", "100% întotdeauna"],
      correctIndex: 2,
      explanation: "95% sau mai mult este considerat un OTD excelent în industrie."
    },
    {
      question: "Care KPI măsoară utilizarea efectivă a flotei?",
      options: ["Revenue per truck", "Fleet utilization rate", "Customer satisfaction", "Claims ratio"],
      correctIndex: 1,
      explanation: "Rata de utilizare arată ce procent din timp vehiculele sunt productive."
    },
    {
      question: "Cum se calculează costul per kilometru?",
      options: ["Venit / km", "Total costuri / total km", "Profit / km", "Ore / km"],
      correctIndex: 1,
      explanation: "Cost/km = Toate costurile operaționale / Toți kilometrii parcurși."
    },
    {
      question: "Ce reprezintă DSO (Days Sales Outstanding)?",
      options: ["Zile de livrare", "Zile până la colectarea plății", "Zile de producție", "Zile de stocare"],
      correctIndex: 1,
      explanation: "DSO măsoară timpul mediu pentru încasarea facturilor."
    },
    {
      question: "Care este un DSO bun în transport?",
      options: ["60+ zile", "45-60 zile", "30-45 zile", "Sub 30 zile"],
      correctIndex: 3,
      explanation: "Un DSO sub 30 de zile indică colectare eficientă a creanțelor."
    },
    {
      question: "Ce măsoară rata de daune (claims ratio)?",
      options: ["Numărul de accidente", "Procentul transporturilor cu reclamații", "Costul asigurării", "Valoarea bunurilor"],
      correctIndex: 1,
      explanation: "Claims ratio = transporturi cu reclamații / total transporturi."
    },
    {
      question: "Care KPI arată veniturile generate per vehicul?",
      options: ["Revenue per FTE", "Revenue per truck", "Profit margin", "Cost efficiency"],
      correctIndex: 1,
      explanation: "Revenue per truck arată productivitatea fiecărui vehicul din flotă."
    },
    {
      question: "Ce este FTE în contextul KPI?",
      options: ["Full Time Efficiency", "Full Time Equivalent", "Fleet Transport Efficiency", "Financial Target Estimate"],
      correctIndex: 1,
      explanation: "FTE = Full Time Equivalent, echivalent normă întreagă."
    },
    {
      question: "Care KPI măsoară satisfacția clienților?",
      options: ["NPS", "OTD", "DSO", "ROI"],
      correctIndex: 0,
      explanation: "NPS (Net Promoter Score) măsoară loialitatea și satisfacția clienților."
    },
    {
      question: "Ce valoare NPS este considerată bună?",
      options: ["Orice pozitiv", "Peste 30", "Peste 50", "100"],
      correctIndex: 2,
      explanation: "Un NPS peste 50 este considerat excelent în industrie."
    },
    {
      question: "Care KPI arată eficiența procesului de cotare?",
      options: ["Quote-to-order ratio", "Claims ratio", "OTD", "DSO"],
      correctIndex: 0,
      explanation: "Quote-to-order arată ce procent din cotații se transformă în comenzi."
    },
    {
      question: "Ce măsoară empty miles ratio?",
      options: ["Km cu încărcătură", "Procentul de km fără încărcătură", "Viteza medie", "Consumul de combustibil"],
      correctIndex: 1,
      explanation: "Empty miles arată km parcurși gol, fără încărcătură plătită."
    },
    {
      question: "Care este un target bun pentru empty miles?",
      options: ["50%", "30%", "Sub 20%", "0% întotdeauna"],
      correctIndex: 2,
      explanation: "Sub 20% km gol este considerat eficient; 0% este practic imposibil."
    },
    {
      question: "Ce reprezintă marja de contribuție?",
      options: ["Profitul net", "Venit - costuri variabile", "Venit total", "Costul fix"],
      correctIndex: 1,
      explanation: "Marja de contribuție arată cât contribuie fiecare transport la acoperirea costurilor fixe."
    },
    {
      question: "Care KPI măsoară productivitatea per angajat?",
      options: ["Shipments per FTE", "Revenue per truck", "OTD", "Claims ratio"],
      correctIndex: 0,
      explanation: "Shipments per FTE arată câte transporturi gestionează un angajat."
    },
    {
      question: "Ce este lead time în transport?",
      options: ["Timpul de așteptare", "Timpul total de la comandă la livrare", "Timpul de conducere", "Timpul de încărcare"],
      correctIndex: 1,
      explanation: "Lead time = timpul total de la primirea comenzii până la livrare."
    },
    {
      question: "Care KPI arată rata de retenție a clienților?",
      options: ["Acquisition rate", "Customer retention rate", "Churn rate", "NPS"],
      correctIndex: 1,
      explanation: "Customer retention rate arată procentul clienților păstrați."
    },
    {
      question: "Ce măsoară first-time delivery rate?",
      options: ["Prima livrare la client", "Livrări reușite din prima încercare", "Livrări în prima zi", "Prima comandă"],
      correctIndex: 1,
      explanation: "Procentul livrărilor finalizate cu succes la prima încercare."
    },
    {
      question: "Care KPI arată costul achiziției unui client nou?",
      options: ["Customer Acquisition Cost (CAC)", "Customer Lifetime Value", "NPS", "Churn rate"],
      correctIndex: 0,
      explanation: "CAC = costul total de marketing și vânzări / clienți noi achiziționați."
    },
    {
      question: "Ce reprezintă uptime în contextul flotei?",
      options: ["Timp de conducere", "Timp disponibil pentru operare", "Timp în service", "Timp de odihnă"],
      correctIndex: 1,
      explanation: "Uptime arată procentul de timp când vehiculele sunt disponibile și funcționale."
    },
    {
      question: "Care este formula pentru rata de utilizare a flotei?",
      options: ["Km totali / vehicule", "Ore productive / ore disponibile × 100", "Profit / cost", "Livrări / vehicule"],
      correctIndex: 1,
      explanation: "Utilizare = (Ore în care vehiculele sunt productive / Ore disponibile) × 100%."
    },
    {
      question: "Ce KPI măsoară performanța transportatorilor subcontractați?",
      options: ["Carrier scorecard", "Fleet utilization", "OTD", "DSO"],
      correctIndex: 0,
      explanation: "Carrier scorecard evaluează performanța fiecărui transportator pe multiple criterii."
    },
    {
      question: "Care KPI arată eficiența rutelor?",
      options: ["Route efficiency", "OTD", "Claims ratio", "NPS"],
      correctIndex: 0,
      explanation: "Route efficiency compară km planificați vs km efectiv parcurși."
    },
    {
      question: "Ce măsoară average handling time?",
      options: ["Timp de conducere", "Timp mediu de procesare per transport", "Timp de așteptare", "Timp de odihnă"],
      correctIndex: 1,
      explanation: "AHT arată timpul mediu pentru procesarea administrativă a unui transport."
    },
    {
      question: "Care KPI este cel mai relevant pentru profitabilitate?",
      options: ["Numărul de transporturi", "Profit margin per shipment", "Km totali", "Numărul de angajați"],
      correctIndex: 1,
      explanation: "Profit margin per shipment arată câștigul net real per transport."
    },
    {
      question: "Ce este benchmark-ul în analiza KPI?",
      options: ["Minimul acceptabil", "Comparația cu standardul industriei", "Maximul posibil", "Media internă"],
      correctIndex: 1,
      explanation: "Benchmark-ul compară performanța cu standardele industriei sau competitorii."
    },
    {
      question: "Cât de des ar trebui monitorizați KPI-ii principali?",
      options: ["Anual", "Trimestrial", "Lunar sau mai frecvent", "La cerere"],
      correctIndex: 2,
      explanation: "KPI-ii principali trebuie monitorizați lunar sau chiar săptămânal pentru reacție rapidă."
    },
    {
      question: "Care KPI arată loialitatea pe termen lung a clienților?",
      options: ["OTD", "Customer Lifetime Value (CLV)", "CAC", "DSO"],
      correctIndex: 1,
      explanation: "CLV arată valoarea totală așteptată de la un client pe întreaga relație."
    }
  ],
  de: [
    {
      question: "Wofür steht das Akronym KPI?",
      options: ["Key Performance Index", "Key Performance Indicator", "Key Process Indicator", "Keep Performance Improving"],
      correctIndex: 1,
      explanation: "KPI = Key Performance Indicator, Leistungskennzahl."
    },
    {
      question: "Welcher KPI misst den Prozentsatz pünktlicher Lieferungen?",
      options: ["Gewinnmarge", "On-Time Delivery (OTD)", "Flottenauslastung", "Kosten pro km"],
      correctIndex: 1,
      explanation: "OTD misst Lieferungen, die gemäß dem vereinbarten Termin erfolgen."
    },
    {
      question: "Welcher OTD-Wert gilt im Transport als gut?",
      options: ["50%", "75%", "95%+", "Immer 100%"],
      correctIndex: 2,
      explanation: "95% oder mehr gilt in der Branche als ausgezeichneter OTD."
    },
    {
      question: "Welcher KPI misst die effektive Flottennutzung?",
      options: ["Umsatz pro LKW", "Flottenauslastungsrate", "Kundenzufriedenheit", "Schadensquote"],
      correctIndex: 1,
      explanation: "Die Auslastungsrate zeigt, welcher Prozentsatz der Zeit die Fahrzeuge produktiv sind."
    },
    {
      question: "Wie berechnet man die Kosten pro Kilometer?",
      options: ["Umsatz / km", "Gesamtkosten / Gesamt-km", "Gewinn / km", "Stunden / km"],
      correctIndex: 1,
      explanation: "Kosten/km = Alle Betriebskosten / Alle gefahrenen Kilometer."
    },
    {
      question: "Was bedeutet DSO (Days Sales Outstanding)?",
      options: ["Liefertage", "Tage bis zur Zahlung", "Produktionstage", "Lagertage"],
      correctIndex: 1,
      explanation: "DSO misst die durchschnittliche Zeit für den Rechnungseinzug."
    },
    {
      question: "Was ist ein guter DSO im Transport?",
      options: ["60+ Tage", "45-60 Tage", "30-45 Tage", "Unter 30 Tage"],
      correctIndex: 3,
      explanation: "Ein DSO unter 30 Tagen zeigt effizienten Forderungseinzug."
    },
    {
      question: "Was misst die Schadensquote (Claims Ratio)?",
      options: ["Anzahl der Unfälle", "Prozentsatz der Transporte mit Reklamationen", "Versicherungskosten", "Warenwert"],
      correctIndex: 1,
      explanation: "Claims Ratio = Transporte mit Reklamationen / Gesamttransporte."
    },
    {
      question: "Welcher KPI zeigt den pro Fahrzeug generierten Umsatz?",
      options: ["Umsatz pro VZÄ", "Umsatz pro LKW", "Gewinnmarge", "Kosteneffizienz"],
      correctIndex: 1,
      explanation: "Umsatz pro LKW zeigt die Produktivität jedes Fahrzeugs in der Flotte."
    },
    {
      question: "Was ist VZÄ im KPI-Kontext?",
      options: ["Vollzeit-Effizienz", "Vollzeitäquivalent", "Flotten-Transport-Effizienz", "Finanzzielschätzung"],
      correctIndex: 1,
      explanation: "VZÄ = Vollzeitäquivalent."
    },
    {
      question: "Welcher KPI misst die Kundenzufriedenheit?",
      options: ["NPS", "OTD", "DSO", "ROI"],
      correctIndex: 0,
      explanation: "NPS (Net Promoter Score) misst Kundenloyalität und -zufriedenheit."
    },
    {
      question: "Welcher NPS-Wert gilt als gut?",
      options: ["Alles Positive", "Über 30", "Über 50", "100"],
      correctIndex: 2,
      explanation: "Ein NPS über 50 gilt in der Branche als ausgezeichnet."
    },
    {
      question: "Welcher KPI zeigt die Effizienz des Angebotsprozesses?",
      options: ["Angebots-zu-Auftrags-Quote", "Schadensquote", "OTD", "DSO"],
      correctIndex: 0,
      explanation: "Quote-to-order zeigt, welcher Prozentsatz der Angebote zu Aufträgen wird."
    },
    {
      question: "Was misst die Leerfahrtenquote?",
      options: ["Beladene km", "Prozentsatz der km ohne Ladung", "Durchschnittsgeschwindigkeit", "Kraftstoffverbrauch"],
      correctIndex: 1,
      explanation: "Leerfahrten zeigen km, die ohne bezahlte Ladung gefahren werden."
    },
    {
      question: "Was ist ein gutes Ziel für Leerfahrten?",
      options: ["50%", "30%", "Unter 20%", "Immer 0%"],
      correctIndex: 2,
      explanation: "Unter 20% Leerfahrten gilt als effizient; 0% ist praktisch unmöglich."
    },
    {
      question: "Was bedeutet Deckungsbeitrag?",
      options: ["Nettogewinn", "Umsatz - variable Kosten", "Gesamtumsatz", "Fixkosten"],
      correctIndex: 1,
      explanation: "Der Deckungsbeitrag zeigt, wie viel jeder Transport zur Deckung der Fixkosten beiträgt."
    },
    {
      question: "Welcher KPI misst die Produktivität pro Mitarbeiter?",
      options: ["Sendungen pro VZÄ", "Umsatz pro LKW", "OTD", "Schadensquote"],
      correctIndex: 0,
      explanation: "Sendungen pro VZÄ zeigt, wie viele Transporte ein Mitarbeiter bearbeitet."
    },
    {
      question: "Was ist Durchlaufzeit im Transport?",
      options: ["Wartezeit", "Gesamtzeit von Auftrag bis Lieferung", "Fahrzeit", "Ladezeit"],
      correctIndex: 1,
      explanation: "Durchlaufzeit = Gesamtzeit vom Auftragseingang bis zur Lieferung."
    },
    {
      question: "Welcher KPI zeigt die Kundenbindungsrate?",
      options: ["Akquisitionsrate", "Kundenbindungsrate", "Abwanderungsrate", "NPS"],
      correctIndex: 1,
      explanation: "Die Kundenbindungsrate zeigt den Prozentsatz gehaltener Kunden."
    },
    {
      question: "Was misst die Erstlieferungsquote?",
      options: ["Erste Lieferung an Kunde", "Erfolgreiche Lieferungen beim ersten Versuch", "Lieferungen am ersten Tag", "Erste Bestellung"],
      correctIndex: 1,
      explanation: "Prozentsatz der Lieferungen, die beim ersten Versuch erfolgreich abgeschlossen werden."
    },
    {
      question: "Welcher KPI zeigt die Kosten für Neukundenakquise?",
      options: ["Kundenakquisekosten (CAC)", "Kundenlebenszeitwert", "NPS", "Abwanderungsrate"],
      correctIndex: 0,
      explanation: "CAC = Gesamte Marketing- und Vertriebskosten / Akquirierte Neukunden."
    },
    {
      question: "Was bedeutet Verfügbarkeit im Flottenkontext?",
      options: ["Fahrzeit", "Betriebsbereite Zeit", "Servicezeit", "Ruhezeit"],
      correctIndex: 1,
      explanation: "Verfügbarkeit zeigt den Prozentsatz der Zeit, in der Fahrzeuge einsatzbereit sind."
    },
    {
      question: "Wie lautet die Formel für die Flottenauslastung?",
      options: ["Gesamt-km / Fahrzeuge", "Produktive Stunden / Verfügbare Stunden × 100", "Gewinn / Kosten", "Lieferungen / Fahrzeuge"],
      correctIndex: 1,
      explanation: "Auslastung = (Produktive Fahrzeugstunden / Verfügbare Stunden) × 100%."
    },
    {
      question: "Welcher KPI misst die Leistung von Subunternehmern?",
      options: ["Spediteur-Scorecard", "Flottenauslastung", "OTD", "DSO"],
      correctIndex: 0,
      explanation: "Die Spediteur-Scorecard bewertet die Leistung jedes Spediteurs nach mehreren Kriterien."
    },
    {
      question: "Welcher KPI zeigt die Routeneffizienz?",
      options: ["Routeneffizienz", "OTD", "Schadensquote", "NPS"],
      correctIndex: 0,
      explanation: "Routeneffizienz vergleicht geplante vs. tatsächlich gefahrene km."
    },
    {
      question: "Was misst die durchschnittliche Bearbeitungszeit?",
      options: ["Fahrzeit", "Durchschnittliche Bearbeitungszeit pro Transport", "Wartezeit", "Ruhezeit"],
      correctIndex: 1,
      explanation: "AHT zeigt die durchschnittliche Zeit für die administrative Bearbeitung eines Transports."
    },
    {
      question: "Welcher KPI ist am relevantesten für die Rentabilität?",
      options: ["Transportanzahl", "Gewinnmarge pro Sendung", "Gesamtkilometer", "Mitarbeiteranzahl"],
      correctIndex: 1,
      explanation: "Gewinnmarge pro Sendung zeigt den tatsächlichen Nettoertrag pro Transport."
    },
    {
      question: "Was ist Benchmarking in der KPI-Analyse?",
      options: ["Akzeptables Minimum", "Vergleich mit Industriestandard", "Mögliches Maximum", "Interner Durchschnitt"],
      correctIndex: 1,
      explanation: "Benchmarking vergleicht die Leistung mit Branchenstandards oder Wettbewerbern."
    },
    {
      question: "Wie oft sollten Haupt-KPIs überwacht werden?",
      options: ["Jährlich", "Vierteljährlich", "Monatlich oder häufiger", "Auf Anfrage"],
      correctIndex: 2,
      explanation: "Haupt-KPIs sollten monatlich oder sogar wöchentlich für schnelle Reaktion überwacht werden."
    },
    {
      question: "Welcher KPI zeigt die langfristige Kundentreue?",
      options: ["OTD", "Kundenlebenszeitwert (CLV)", "CAC", "DSO"],
      correctIndex: 1,
      explanation: "CLV zeigt den erwarteten Gesamtwert eines Kunden über die gesamte Beziehung."
    }
  ],
  en: [
    {
      question: "What does the acronym KPI stand for?",
      options: ["Key Performance Index", "Key Performance Indicator", "Key Process Indicator", "Keep Performance Improving"],
      correctIndex: 1,
      explanation: "KPI = Key Performance Indicator."
    },
    {
      question: "Which KPI measures the percentage of on-time deliveries?",
      options: ["Profit margin", "On-Time Delivery (OTD)", "Fleet utilization", "Cost per km"],
      correctIndex: 1,
      explanation: "OTD measures deliveries made according to the agreed timeframe."
    },
    {
      question: "What OTD value is considered good in transport?",
      options: ["50%", "75%", "95%+", "Always 100%"],
      correctIndex: 2,
      explanation: "95% or more is considered excellent OTD in the industry."
    },
    {
      question: "Which KPI measures effective fleet utilization?",
      options: ["Revenue per truck", "Fleet utilization rate", "Customer satisfaction", "Claims ratio"],
      correctIndex: 1,
      explanation: "The utilization rate shows what percentage of time vehicles are productive."
    },
    {
      question: "How do you calculate cost per kilometer?",
      options: ["Revenue / km", "Total costs / total km", "Profit / km", "Hours / km"],
      correctIndex: 1,
      explanation: "Cost/km = All operational costs / All kilometers traveled."
    },
    {
      question: "What does DSO (Days Sales Outstanding) represent?",
      options: ["Delivery days", "Days until payment collection", "Production days", "Storage days"],
      correctIndex: 1,
      explanation: "DSO measures the average time to collect invoices."
    },
    {
      question: "What is a good DSO in transport?",
      options: ["60+ days", "45-60 days", "30-45 days", "Under 30 days"],
      correctIndex: 3,
      explanation: "A DSO under 30 days indicates efficient receivables collection."
    },
    {
      question: "What does claims ratio measure?",
      options: ["Number of accidents", "Percentage of transports with claims", "Insurance cost", "Goods value"],
      correctIndex: 1,
      explanation: "Claims ratio = transports with claims / total transports."
    },
    {
      question: "Which KPI shows revenue generated per vehicle?",
      options: ["Revenue per FTE", "Revenue per truck", "Profit margin", "Cost efficiency"],
      correctIndex: 1,
      explanation: "Revenue per truck shows the productivity of each vehicle in the fleet."
    },
    {
      question: "What is FTE in the KPI context?",
      options: ["Full Time Efficiency", "Full Time Equivalent", "Fleet Transport Efficiency", "Financial Target Estimate"],
      correctIndex: 1,
      explanation: "FTE = Full Time Equivalent."
    },
    {
      question: "Which KPI measures customer satisfaction?",
      options: ["NPS", "OTD", "DSO", "ROI"],
      correctIndex: 0,
      explanation: "NPS (Net Promoter Score) measures customer loyalty and satisfaction."
    },
    {
      question: "What NPS value is considered good?",
      options: ["Anything positive", "Above 30", "Above 50", "100"],
      correctIndex: 2,
      explanation: "An NPS above 50 is considered excellent in the industry."
    },
    {
      question: "Which KPI shows quoting process efficiency?",
      options: ["Quote-to-order ratio", "Claims ratio", "OTD", "DSO"],
      correctIndex: 0,
      explanation: "Quote-to-order shows what percentage of quotes convert to orders."
    },
    {
      question: "What does empty miles ratio measure?",
      options: ["Loaded km", "Percentage of km without cargo", "Average speed", "Fuel consumption"],
      correctIndex: 1,
      explanation: "Empty miles shows km traveled empty, without paid cargo."
    },
    {
      question: "What is a good target for empty miles?",
      options: ["50%", "30%", "Under 20%", "Always 0%"],
      correctIndex: 2,
      explanation: "Under 20% empty is considered efficient; 0% is practically impossible."
    },
    {
      question: "What does contribution margin represent?",
      options: ["Net profit", "Revenue - variable costs", "Total revenue", "Fixed cost"],
      correctIndex: 1,
      explanation: "Contribution margin shows how much each transport contributes to covering fixed costs."
    },
    {
      question: "Which KPI measures productivity per employee?",
      options: ["Shipments per FTE", "Revenue per truck", "OTD", "Claims ratio"],
      correctIndex: 0,
      explanation: "Shipments per FTE shows how many transports an employee handles."
    },
    {
      question: "What is lead time in transport?",
      options: ["Waiting time", "Total time from order to delivery", "Driving time", "Loading time"],
      correctIndex: 1,
      explanation: "Lead time = total time from receiving order to delivery."
    },
    {
      question: "Which KPI shows customer retention rate?",
      options: ["Acquisition rate", "Customer retention rate", "Churn rate", "NPS"],
      correctIndex: 1,
      explanation: "Customer retention rate shows the percentage of retained customers."
    },
    {
      question: "What does first-time delivery rate measure?",
      options: ["First delivery to customer", "Successful deliveries on first attempt", "Deliveries on first day", "First order"],
      correctIndex: 1,
      explanation: "Percentage of deliveries successfully completed on the first attempt."
    },
    {
      question: "Which KPI shows the cost of acquiring a new customer?",
      options: ["Customer Acquisition Cost (CAC)", "Customer Lifetime Value", "NPS", "Churn rate"],
      correctIndex: 0,
      explanation: "CAC = total marketing and sales cost / new customers acquired."
    },
    {
      question: "What does uptime mean in fleet context?",
      options: ["Driving time", "Time available for operation", "Service time", "Rest time"],
      correctIndex: 1,
      explanation: "Uptime shows the percentage of time vehicles are available and functional."
    },
    {
      question: "What is the formula for fleet utilization rate?",
      options: ["Total km / vehicles", "Productive hours / available hours × 100", "Profit / cost", "Deliveries / vehicles"],
      correctIndex: 1,
      explanation: "Utilization = (Hours vehicles are productive / Available hours) × 100%."
    },
    {
      question: "Which KPI measures subcontracted carrier performance?",
      options: ["Carrier scorecard", "Fleet utilization", "OTD", "DSO"],
      correctIndex: 0,
      explanation: "Carrier scorecard evaluates each carrier's performance on multiple criteria."
    },
    {
      question: "Which KPI shows route efficiency?",
      options: ["Route efficiency", "OTD", "Claims ratio", "NPS"],
      correctIndex: 0,
      explanation: "Route efficiency compares planned km vs actual km traveled."
    },
    {
      question: "What does average handling time measure?",
      options: ["Driving time", "Average processing time per transport", "Waiting time", "Rest time"],
      correctIndex: 1,
      explanation: "AHT shows the average time for administrative processing of a transport."
    },
    {
      question: "Which KPI is most relevant for profitability?",
      options: ["Number of transports", "Profit margin per shipment", "Total kilometers", "Number of employees"],
      correctIndex: 1,
      explanation: "Profit margin per shipment shows the actual net earnings per transport."
    },
    {
      question: "What is benchmarking in KPI analysis?",
      options: ["Acceptable minimum", "Comparison with industry standard", "Possible maximum", "Internal average"],
      correctIndex: 1,
      explanation: "Benchmarking compares performance with industry standards or competitors."
    },
    {
      question: "How often should main KPIs be monitored?",
      options: ["Annually", "Quarterly", "Monthly or more frequently", "On request"],
      correctIndex: 2,
      explanation: "Main KPIs should be monitored monthly or even weekly for quick response."
    },
    {
      question: "Which KPI shows long-term customer loyalty?",
      options: ["OTD", "Customer Lifetime Value (CLV)", "CAC", "DSO"],
      correctIndex: 1,
      explanation: "CLV shows the total expected value from a customer over the entire relationship."
    }
  ]
};
