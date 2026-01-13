import { QuizQuestion } from '../quizData';

export const accountingQuestions: Record<string, QuizQuestion[]> = {
  ro: [
    {
      question: "Ce reprezintă marja de profit în transport?",
      options: ["Venitul total", "Diferența dintre venit și costuri", "Costul transportului", "Taxa de administrare"],
      correctIndex: 1,
      explanation: "Marja de profit este diferența dintre prețul perceput clientului și costurile totale."
    },
    {
      question: "Care este formula pentru calculul marjei procentuale?",
      options: ["(Cost / Venit) × 100", "(Venit - Cost) / Venit × 100", "Venit + Cost", "Cost × Venit"],
      correctIndex: 1,
      explanation: "Marja % = (Venit - Cost) / Venit × 100."
    },
    {
      question: "Ce sunt costurile fixe în transport?",
      options: ["Costuri care variază cu volumul", "Costuri constante indiferent de volum", "Costurile combustibilului", "Costurile de încărcare"],
      correctIndex: 1,
      explanation: "Costurile fixe rămân constante indiferent de numărul de transporturi (chirii, salarii, asigurări)."
    },
    {
      question: "Care este un exemplu de cost variabil?",
      options: ["Chiria biroului", "Combustibilul", "Salariile fixe", "Asigurarea anuală"],
      correctIndex: 1,
      explanation: "Combustibilul variază direct cu numărul și distanța transporturilor."
    },
    {
      question: "Ce reprezintă break-even point?",
      options: ["Profitul maxim", "Punctul unde veniturile egalează costurile", "Pierderea maximă", "Costul minim"],
      correctIndex: 1,
      explanation: "Break-even este punctul unde nu există nici profit, nici pierdere."
    },
    {
      question: "Cum se calculează costul pe kilometru?",
      options: ["Venit / km", "Costuri totale / km parcurși", "Profit / km", "Taxa / km"],
      correctIndex: 1,
      explanation: "Costul per km = Total costuri operaționale / Total kilometri parcurși."
    },
    {
      question: "Ce este amortizarea în contextul flotei?",
      options: ["Costul combustibilului", "Distribuirea costului activului pe durata de viață", "Costul întreținerii", "Prețul de vânzare"],
      correctIndex: 1,
      explanation: "Amortizarea distribuie costul vehiculului pe anii de utilizare."
    },
    {
      question: "Care indicator arată eficiența utilizării vehiculelor?",
      options: ["Profitul total", "Rata de utilizare a flotei", "Numărul de angajați", "Numărul de clienți"],
      correctIndex: 1,
      explanation: "Rata de utilizare arată cât timp vehiculele sunt efectiv în operare."
    },
    {
      question: "Ce reprezintă overhead costs?",
      options: ["Costuri directe", "Costuri indirecte de administrare", "Costuri de transport", "Costuri de combustibil"],
      correctIndex: 1,
      explanation: "Overhead sunt costuri indirecte: administrare, IT, birouri, etc."
    },
    {
      question: "Cum se alocă costurile overhead la transporturi?",
      options: ["Nu se alocă", "Proporțional cu veniturile sau volumul", "Se ignoră", "Se adaugă doar la final de an"],
      correctIndex: 1,
      explanation: "Overhead-ul se alocă proporțional pentru a reflecta costul real per transport."
    },
    {
      question: "Ce este un centru de cost?",
      options: ["Un client mare", "O unitate organizațională cu costuri atribuite", "Un tip de vehicul", "O rută frecventă"],
      correctIndex: 1,
      explanation: "Centrul de cost grupează cheltuielile pentru analiză și control."
    },
    {
      question: "Care este diferența dintre FIFO și LIFO în contabilitate?",
      options: ["Metode de plată", "Metode de evaluare a stocurilor", "Tipuri de facturi", "Metode de transport"],
      correctIndex: 1,
      explanation: "FIFO (First In First Out) și LIFO (Last In First Out) sunt metode de evaluare a stocurilor."
    },
    {
      question: "Ce document stă la baza înregistrării venitului?",
      options: ["Comanda", "Factura emisă", "CMR", "Email-ul de confirmare"],
      correctIndex: 1,
      explanation: "Factura emisă este documentul contabil pentru înregistrarea venitului."
    },
    {
      question: "Ce reprezintă contul de profit și pierdere?",
      options: ["Lista activelor", "Situația veniturilor și cheltuielilor", "Balanța de verificare", "Lista datoriilor"],
      correctIndex: 1,
      explanation: "Contul de profit și pierdere arată veniturile, cheltuielile și rezultatul net."
    },
    {
      question: "Care este scopul reconcilierii bancare?",
      options: ["Creșterea soldului", "Verificarea corespondenței între extrase și contabilitate", "Închiderea contului", "Plata taxelor"],
      correctIndex: 1,
      explanation: "Reconcilierea asigură că toate tranzacțiile sunt corect înregistrate."
    },
    {
      question: "Ce sunt provizionele în contabilitate?",
      options: ["Veniturile sigure", "Rezerve pentru obligații viitoare probabile", "Profitul reținut", "Cheltuielile curente"],
      correctIndex: 1,
      explanation: "Provizionele sunt sume rezervate pentru obligații sau pierderi anticipate."
    },
    {
      question: "Cum se tratează cursurile valutare în facturare internațională?",
      options: ["Se ignoră", "Se folosește cursul de la data facturii", "Se convertește lunar", "Se folosește orice curs"],
      correctIndex: 1,
      explanation: "Cursul oficial de la data emiterii facturii este cel utilizat."
    },
    {
      question: "Ce este marja de contribuție?",
      options: ["Profitul net", "Venit minus costuri variabile", "Costurile fixe", "Taxa pe profit"],
      correctIndex: 1,
      explanation: "Marja de contribuție = Venit - Costuri variabile, contribuie la acoperirea costurilor fixe."
    },
    {
      question: "Care este scopul unui buget în transport?",
      options: ["Doar raportare", "Planificare și control financiar", "Marketing", "Recrutare"],
      correctIndex: 1,
      explanation: "Bugetul permite planificarea veniturilor, costurilor și profitului așteptat."
    },
    {
      question: "Ce reprezintă analiza varianței?",
      options: ["Studiul clienților", "Comparația între buget și rezultate reale", "Analiza rutelor", "Studiul pieței"],
      correctIndex: 1,
      explanation: "Analiza varianței identifică diferențele dintre planificat și realizat."
    },
    {
      question: "Cum afectează timpii de așteptare profitabilitatea?",
      options: ["Nu afectează", "Cresc costurile fără venit suplimentar", "Cresc veniturile", "Reduc costurile"],
      correctIndex: 1,
      explanation: "Timpii de așteptare generează costuri (șofer, vehicul) fără venit corespunzător."
    },
    {
      question: "Ce este o factură de storno?",
      options: ["Factură nouă", "Anulare a facturii originale", "Factură proforma", "Notă de debit"],
      correctIndex: 1,
      explanation: "Factura de storno anulează o factură emisă incorect."
    },
    {
      question: "Care KPI măsoară profitabilitatea per transport?",
      options: ["Numărul de transporturi", "Profit per cursă", "Total kilometri", "Numărul de clienți"],
      correctIndex: 1,
      explanation: "Profit per cursă arată câștigul net pentru fiecare transport individual."
    },
    {
      question: "Ce este cash flow-ul operațional?",
      options: ["Profitul net", "Numerarul generat din activitatea de bază", "Investițiile", "Împrumuturile"],
      correctIndex: 1,
      explanation: "Cash flow operațional arată numerarul real generat din transporturi."
    },
    {
      question: "Cum se calculează ROI pentru un vehicul?",
      options: ["Preț / Profit", "(Profit net / Investiție) × 100", "Costuri / Venituri", "Kilometri / An"],
      correctIndex: 1,
      explanation: "ROI = (Profit net generat / Cost achiziție vehicul) × 100%."
    },
    {
      question: "Ce reprezintă working capital în transport?",
      options: ["Profitul anual", "Active curente minus pasive curente", "Valoarea flotei", "Salariile totale"],
      correctIndex: 1,
      explanation: "Working capital = Active curente - Pasive curente, arată lichiditatea pe termen scurt."
    },
    {
      question: "Care este impactul curselor goale asupra profitabilității?",
      options: ["Pozitiv", "Negativ - costuri fără venit", "Neutru", "Depinde de distanță"],
      correctIndex: 1,
      explanation: "Cursele goale generează costuri (combustibil, uzură) fără venit."
    },
    {
      question: "Ce este o balanță de verificare?",
      options: ["Lista clienților", "Situația soldurilor tuturor conturilor", "Factura finală", "Raport de plăți"],
      correctIndex: 1,
      explanation: "Balanța de verificare arată soldurile debitoare și creditoare ale conturilor."
    },
    {
      question: "Cum se tratează avansurile de la clienți?",
      options: ["Ca venituri imediate", "Ca datorii până la prestarea serviciului", "Se ignoră", "Ca cheltuieli"],
      correctIndex: 1,
      explanation: "Avansurile sunt înregistrate ca datorii și recunoscute ca venit la prestare."
    },
    {
      question: "Ce arată indicatorul EBITDA?",
      options: ["Profitul net", "Profitul înainte de dobânzi, taxe, depreciere și amortizare", "Veniturile totale", "Costurile fixe"],
      correctIndex: 1,
      explanation: "EBITDA arată performanța operațională fără impactul deciziilor de finanțare și contabile."
    }
  ],
  de: [
    {
      question: "Was bedeutet die Gewinnmarge im Transport?",
      options: ["Gesamtumsatz", "Differenz zwischen Umsatz und Kosten", "Transportkosten", "Verwaltungsgebühr"],
      correctIndex: 1,
      explanation: "Die Gewinnmarge ist die Differenz zwischen dem Kundenpreis und den Gesamtkosten."
    },
    {
      question: "Wie lautet die Formel zur Berechnung der prozentualen Marge?",
      options: ["(Kosten / Umsatz) × 100", "(Umsatz - Kosten) / Umsatz × 100", "Umsatz + Kosten", "Kosten × Umsatz"],
      correctIndex: 1,
      explanation: "Marge % = (Umsatz - Kosten) / Umsatz × 100."
    },
    {
      question: "Was sind Fixkosten im Transport?",
      options: ["Kosten die mit Volumen variieren", "Konstante Kosten unabhängig vom Volumen", "Kraftstoffkosten", "Ladekosten"],
      correctIndex: 1,
      explanation: "Fixkosten bleiben konstant unabhängig von der Transportanzahl (Miete, Gehälter, Versicherung)."
    },
    {
      question: "Was ist ein Beispiel für variable Kosten?",
      options: ["Büromiete", "Kraftstoff", "Festgehälter", "Jahresversicherung"],
      correctIndex: 1,
      explanation: "Kraftstoff variiert direkt mit Anzahl und Entfernung der Transporte."
    },
    {
      question: "Was bedeutet Break-even Point?",
      options: ["Maximaler Gewinn", "Punkt wo Einnahmen gleich Kosten", "Maximaler Verlust", "Minimale Kosten"],
      correctIndex: 1,
      explanation: "Break-even ist der Punkt ohne Gewinn oder Verlust."
    },
    {
      question: "Wie berechnet man die Kosten pro Kilometer?",
      options: ["Umsatz / km", "Gesamtkosten / gefahrene km", "Gewinn / km", "Gebühr / km"],
      correctIndex: 1,
      explanation: "Kosten pro km = Gesamte Betriebskosten / Gesamte gefahrene Kilometer."
    },
    {
      question: "Was ist Abschreibung im Flottenkontext?",
      options: ["Kraftstoffkosten", "Verteilung der Anlagenkosten über die Nutzungsdauer", "Wartungskosten", "Verkaufspreis"],
      correctIndex: 1,
      explanation: "Die Abschreibung verteilt die Fahrzeugkosten auf die Nutzungsjahre."
    },
    {
      question: "Welcher Indikator zeigt die Effizienz der Fahrzeugnutzung?",
      options: ["Gesamtgewinn", "Flottenauslastungsrate", "Mitarbeiteranzahl", "Kundenanzahl"],
      correctIndex: 1,
      explanation: "Die Auslastungsrate zeigt, wie viel Zeit die Fahrzeuge tatsächlich im Einsatz sind."
    },
    {
      question: "Was sind Gemeinkosten (Overhead)?",
      options: ["Direkte Kosten", "Indirekte Verwaltungskosten", "Transportkosten", "Kraftstoffkosten"],
      correctIndex: 1,
      explanation: "Gemeinkosten sind indirekte Kosten: Verwaltung, IT, Büros usw."
    },
    {
      question: "Wie werden Gemeinkosten auf Transporte verteilt?",
      options: ["Werden nicht verteilt", "Proportional zu Umsatz oder Volumen", "Werden ignoriert", "Nur am Jahresende hinzugefügt"],
      correctIndex: 1,
      explanation: "Gemeinkosten werden proportional verteilt, um die wahren Kosten pro Transport widerzuspiegeln."
    },
    {
      question: "Was ist eine Kostenstelle?",
      options: ["Ein großer Kunde", "Eine Organisationseinheit mit zugewiesenen Kosten", "Ein Fahrzeugtyp", "Eine häufige Route"],
      correctIndex: 1,
      explanation: "Die Kostenstelle gruppiert Ausgaben für Analyse und Kontrolle."
    },
    {
      question: "Was ist der Unterschied zwischen FIFO und LIFO in der Buchhaltung?",
      options: ["Zahlungsmethoden", "Bestandsbewertungsmethoden", "Rechnungstypen", "Transportmethoden"],
      correctIndex: 1,
      explanation: "FIFO (First In First Out) und LIFO (Last In First Out) sind Bestandsbewertungsmethoden."
    },
    {
      question: "Welches Dokument ist Grundlage für die Umsatzerfassung?",
      options: ["Bestellung", "Ausgestellte Rechnung", "CMR", "Bestätigungs-E-Mail"],
      correctIndex: 1,
      explanation: "Die ausgestellte Rechnung ist das Buchhaltungsdokument für die Umsatzerfassung."
    },
    {
      question: "Was zeigt die Gewinn- und Verlustrechnung?",
      options: ["Vermögensliste", "Ertrags- und Aufwandssituation", "Probebilanz", "Schuldenliste"],
      correctIndex: 1,
      explanation: "Die GuV zeigt Erträge, Aufwendungen und das Nettoergebnis."
    },
    {
      question: "Was ist der Zweck der Bankabstimmung?",
      options: ["Saldo erhöhen", "Übereinstimmung zwischen Auszügen und Buchhaltung prüfen", "Konto schließen", "Steuern zahlen"],
      correctIndex: 1,
      explanation: "Die Abstimmung stellt sicher, dass alle Transaktionen korrekt erfasst sind."
    },
    {
      question: "Was sind Rückstellungen in der Buchhaltung?",
      options: ["Sichere Einnahmen", "Reserven für wahrscheinliche zukünftige Verpflichtungen", "Einbehaltener Gewinn", "Laufende Ausgaben"],
      correctIndex: 1,
      explanation: "Rückstellungen sind reservierte Beträge für erwartete Verpflichtungen oder Verluste."
    },
    {
      question: "Wie werden Wechselkurse bei internationaler Rechnungsstellung behandelt?",
      options: ["Werden ignoriert", "Kurs am Rechnungsdatum wird verwendet", "Monatlich umgerechnet", "Beliebiger Kurs"],
      correctIndex: 1,
      explanation: "Der offizielle Kurs am Ausstellungsdatum der Rechnung wird verwendet."
    },
    {
      question: "Was ist der Deckungsbeitrag?",
      options: ["Nettogewinn", "Umsatz minus variable Kosten", "Fixkosten", "Gewinnsteuer"],
      correctIndex: 1,
      explanation: "Deckungsbeitrag = Umsatz - Variable Kosten, trägt zur Deckung der Fixkosten bei."
    },
    {
      question: "Was ist der Zweck eines Budgets im Transport?",
      options: ["Nur Berichterstattung", "Finanzplanung und -kontrolle", "Marketing", "Rekrutierung"],
      correctIndex: 1,
      explanation: "Das Budget ermöglicht Planung von Einnahmen, Kosten und erwartetem Gewinn."
    },
    {
      question: "Was bedeutet Abweichungsanalyse?",
      options: ["Kundenstudie", "Vergleich zwischen Budget und tatsächlichen Ergebnissen", "Routenanalyse", "Marktstudie"],
      correctIndex: 1,
      explanation: "Die Abweichungsanalyse identifiziert Unterschiede zwischen Geplant und Erreicht."
    },
    {
      question: "Wie beeinflussen Wartezeiten die Rentabilität?",
      options: ["Keine Auswirkung", "Erhöhen Kosten ohne zusätzlichen Umsatz", "Erhöhen Umsatz", "Reduzieren Kosten"],
      correctIndex: 1,
      explanation: "Wartezeiten erzeugen Kosten (Fahrer, Fahrzeug) ohne entsprechenden Umsatz."
    },
    {
      question: "Was ist eine Stornorechnung?",
      options: ["Neue Rechnung", "Stornierung der Originalrechnung", "Proforma-Rechnung", "Lastschrift"],
      correctIndex: 1,
      explanation: "Die Stornorechnung annulliert eine falsch ausgestellte Rechnung."
    },
    {
      question: "Welcher KPI misst die Rentabilität pro Transport?",
      options: ["Transportanzahl", "Gewinn pro Fahrt", "Gesamtkilometer", "Kundenanzahl"],
      correctIndex: 1,
      explanation: "Gewinn pro Fahrt zeigt den Nettoertrag für jeden einzelnen Transport."
    },
    {
      question: "Was ist operativer Cashflow?",
      options: ["Nettogewinn", "Aus Kerngeschäft generiertes Bargeld", "Investitionen", "Kredite"],
      correctIndex: 1,
      explanation: "Der operative Cashflow zeigt das tatsächlich aus Transporten generierte Bargeld."
    },
    {
      question: "Wie berechnet man den ROI für ein Fahrzeug?",
      options: ["Preis / Gewinn", "(Nettogewinn / Investition) × 100", "Kosten / Einnahmen", "Kilometer / Jahr"],
      correctIndex: 1,
      explanation: "ROI = (Generierter Nettogewinn / Fahrzeugkaufkosten) × 100%."
    },
    {
      question: "Was bedeutet Working Capital im Transport?",
      options: ["Jahresgewinn", "Umlaufvermögen minus kurzfristige Verbindlichkeiten", "Flottenwert", "Gesamtgehälter"],
      correctIndex: 1,
      explanation: "Working Capital = Umlaufvermögen - Kurzfristige Verbindlichkeiten, zeigt kurzfristige Liquidität."
    },
    {
      question: "Welche Auswirkung haben Leerfahrten auf die Rentabilität?",
      options: ["Positiv", "Negativ - Kosten ohne Umsatz", "Neutral", "Abhängig von der Entfernung"],
      correctIndex: 1,
      explanation: "Leerfahrten erzeugen Kosten (Kraftstoff, Verschleiß) ohne Umsatz."
    },
    {
      question: "Was ist eine Probebilanz?",
      options: ["Kundenliste", "Saldoübersicht aller Konten", "Endrechnung", "Zahlungsbericht"],
      correctIndex: 1,
      explanation: "Die Probebilanz zeigt Soll- und Habensalden der Konten."
    },
    {
      question: "Wie werden Kundenvorauszahlungen behandelt?",
      options: ["Als sofortige Einnahmen", "Als Verbindlichkeiten bis zur Leistungserbringung", "Werden ignoriert", "Als Ausgaben"],
      correctIndex: 1,
      explanation: "Vorauszahlungen werden als Verbindlichkeiten erfasst und bei Leistungserbringung als Umsatz anerkannt."
    },
    {
      question: "Was zeigt der EBITDA-Indikator?",
      options: ["Nettogewinn", "Gewinn vor Zinsen, Steuern, Abschreibungen", "Gesamtumsatz", "Fixkosten"],
      correctIndex: 1,
      explanation: "EBITDA zeigt die operative Leistung ohne Einfluss von Finanzierungs- und Bilanzierungsentscheidungen."
    }
  ],
  en: [
    {
      question: "What does profit margin mean in transport?",
      options: ["Total revenue", "Difference between revenue and costs", "Transport cost", "Administration fee"],
      correctIndex: 1,
      explanation: "Profit margin is the difference between the price charged to the customer and total costs."
    },
    {
      question: "What is the formula for calculating percentage margin?",
      options: ["(Cost / Revenue) × 100", "(Revenue - Cost) / Revenue × 100", "Revenue + Cost", "Cost × Revenue"],
      correctIndex: 1,
      explanation: "Margin % = (Revenue - Cost) / Revenue × 100."
    },
    {
      question: "What are fixed costs in transport?",
      options: ["Costs that vary with volume", "Constant costs regardless of volume", "Fuel costs", "Loading costs"],
      correctIndex: 1,
      explanation: "Fixed costs remain constant regardless of the number of transports (rent, salaries, insurance)."
    },
    {
      question: "What is an example of variable cost?",
      options: ["Office rent", "Fuel", "Fixed salaries", "Annual insurance"],
      correctIndex: 1,
      explanation: "Fuel varies directly with the number and distance of transports."
    },
    {
      question: "What does break-even point mean?",
      options: ["Maximum profit", "Point where revenues equal costs", "Maximum loss", "Minimum cost"],
      correctIndex: 1,
      explanation: "Break-even is the point where there is no profit or loss."
    },
    {
      question: "How do you calculate cost per kilometer?",
      options: ["Revenue / km", "Total costs / km traveled", "Profit / km", "Fee / km"],
      correctIndex: 1,
      explanation: "Cost per km = Total operational costs / Total kilometers traveled."
    },
    {
      question: "What is depreciation in the fleet context?",
      options: ["Fuel cost", "Distribution of asset cost over useful life", "Maintenance cost", "Sale price"],
      correctIndex: 1,
      explanation: "Depreciation distributes the vehicle cost over the years of use."
    },
    {
      question: "Which indicator shows vehicle utilization efficiency?",
      options: ["Total profit", "Fleet utilization rate", "Number of employees", "Number of customers"],
      correctIndex: 1,
      explanation: "The utilization rate shows how much time vehicles are actually in operation."
    },
    {
      question: "What are overhead costs?",
      options: ["Direct costs", "Indirect administration costs", "Transport costs", "Fuel costs"],
      correctIndex: 1,
      explanation: "Overhead are indirect costs: administration, IT, offices, etc."
    },
    {
      question: "How are overhead costs allocated to transports?",
      options: ["Not allocated", "Proportionally to revenue or volume", "Ignored", "Only added at year-end"],
      correctIndex: 1,
      explanation: "Overhead is allocated proportionally to reflect the true cost per transport."
    },
    {
      question: "What is a cost center?",
      options: ["A large customer", "An organizational unit with assigned costs", "A vehicle type", "A frequent route"],
      correctIndex: 1,
      explanation: "The cost center groups expenses for analysis and control."
    },
    {
      question: "What is the difference between FIFO and LIFO in accounting?",
      options: ["Payment methods", "Inventory valuation methods", "Invoice types", "Transport methods"],
      correctIndex: 1,
      explanation: "FIFO (First In First Out) and LIFO (Last In First Out) are inventory valuation methods."
    },
    {
      question: "Which document is the basis for revenue recording?",
      options: ["Order", "Issued invoice", "CMR", "Confirmation email"],
      correctIndex: 1,
      explanation: "The issued invoice is the accounting document for recording revenue."
    },
    {
      question: "What does the profit and loss statement show?",
      options: ["Asset list", "Income and expense situation", "Trial balance", "Debt list"],
      correctIndex: 1,
      explanation: "The P&L shows revenues, expenses, and the net result."
    },
    {
      question: "What is the purpose of bank reconciliation?",
      options: ["Increase balance", "Verify correspondence between statements and accounting", "Close account", "Pay taxes"],
      correctIndex: 1,
      explanation: "Reconciliation ensures all transactions are correctly recorded."
    },
    {
      question: "What are provisions in accounting?",
      options: ["Certain revenues", "Reserves for probable future obligations", "Retained profit", "Current expenses"],
      correctIndex: 1,
      explanation: "Provisions are amounts reserved for anticipated obligations or losses."
    },
    {
      question: "How are exchange rates treated in international invoicing?",
      options: ["Ignored", "Rate at invoice date is used", "Converted monthly", "Any rate used"],
      correctIndex: 1,
      explanation: "The official rate at the invoice issue date is used."
    },
    {
      question: "What is contribution margin?",
      options: ["Net profit", "Revenue minus variable costs", "Fixed costs", "Profit tax"],
      correctIndex: 1,
      explanation: "Contribution margin = Revenue - Variable costs, contributes to covering fixed costs."
    },
    {
      question: "What is the purpose of a budget in transport?",
      options: ["Only reporting", "Financial planning and control", "Marketing", "Recruitment"],
      correctIndex: 1,
      explanation: "The budget enables planning of revenues, costs, and expected profit."
    },
    {
      question: "What does variance analysis mean?",
      options: ["Customer study", "Comparison between budget and actual results", "Route analysis", "Market study"],
      correctIndex: 1,
      explanation: "Variance analysis identifies differences between planned and achieved."
    },
    {
      question: "How do waiting times affect profitability?",
      options: ["No effect", "Increase costs without additional revenue", "Increase revenue", "Reduce costs"],
      correctIndex: 1,
      explanation: "Waiting times generate costs (driver, vehicle) without corresponding revenue."
    },
    {
      question: "What is a reversal invoice?",
      options: ["New invoice", "Cancellation of original invoice", "Proforma invoice", "Debit note"],
      correctIndex: 1,
      explanation: "A reversal invoice cancels an incorrectly issued invoice."
    },
    {
      question: "Which KPI measures profitability per transport?",
      options: ["Number of transports", "Profit per trip", "Total kilometers", "Number of customers"],
      correctIndex: 1,
      explanation: "Profit per trip shows the net earnings for each individual transport."
    },
    {
      question: "What is operational cash flow?",
      options: ["Net profit", "Cash generated from core activity", "Investments", "Loans"],
      correctIndex: 1,
      explanation: "Operational cash flow shows the actual cash generated from transports."
    },
    {
      question: "How do you calculate ROI for a vehicle?",
      options: ["Price / Profit", "(Net profit / Investment) × 100", "Costs / Revenues", "Kilometers / Year"],
      correctIndex: 1,
      explanation: "ROI = (Net profit generated / Vehicle purchase cost) × 100%."
    },
    {
      question: "What does working capital mean in transport?",
      options: ["Annual profit", "Current assets minus current liabilities", "Fleet value", "Total salaries"],
      correctIndex: 1,
      explanation: "Working capital = Current assets - Current liabilities, shows short-term liquidity."
    },
    {
      question: "What is the impact of empty runs on profitability?",
      options: ["Positive", "Negative - costs without revenue", "Neutral", "Depends on distance"],
      correctIndex: 1,
      explanation: "Empty runs generate costs (fuel, wear) without revenue."
    },
    {
      question: "What is a trial balance?",
      options: ["Customer list", "Balance overview of all accounts", "Final invoice", "Payment report"],
      correctIndex: 1,
      explanation: "The trial balance shows debit and credit balances of accounts."
    },
    {
      question: "How are customer advances treated?",
      options: ["As immediate revenue", "As liabilities until service delivery", "Ignored", "As expenses"],
      correctIndex: 1,
      explanation: "Advances are recorded as liabilities and recognized as revenue upon service delivery."
    },
    {
      question: "What does the EBITDA indicator show?",
      options: ["Net profit", "Profit before interest, taxes, depreciation and amortization", "Total revenue", "Fixed costs"],
      correctIndex: 1,
      explanation: "EBITDA shows operational performance without the impact of financing and accounting decisions."
    }
  ]
};
