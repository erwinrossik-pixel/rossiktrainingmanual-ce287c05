import { QuizQuestion } from '../quizData';

export const paymentQuestions: Record<string, QuizQuestion[]> = {
  ro: [
    {
      question: "Care este termenul standard de plată în transportul internațional?",
      options: ["7 zile", "30 zile", "60 zile", "90 zile"],
      correctIndex: 1,
      explanation: "30 de zile este termenul standard de plată în industria transporturilor."
    },
    {
      question: "Ce reprezintă termenul 'Net 30'?",
      options: ["30% discount", "Plata în 30 de zile", "30 zile credit", "30% avans"],
      correctIndex: 1,
      explanation: "Net 30 înseamnă plata integrală în termen de 30 de zile de la facturare."
    },
    {
      question: "Care document confirmă livrarea și declanșează facturarea?",
      options: ["Comanda", "CMR semnat", "Contractul", "Oferta"],
      correctIndex: 1,
      explanation: "CMR-ul semnat de destinatar confirmă livrarea și permite facturarea."
    },
    {
      question: "Ce este o notă de credit?",
      options: ["Factură suplimentară", "Document de reducere a datoriei", "Cerere de plată", "Garanție bancară"],
      correctIndex: 1,
      explanation: "Nota de credit reduce suma datorată de client pentru diverse motive."
    },
    {
      question: "Care este primul pas în procesul de colectare a creanțelor?",
      options: ["Acțiune legală", "Reminder prietenos", "Oprirea serviciilor", "Vânzarea datoriei"],
      correctIndex: 1,
      explanation: "Procesul începe cu un reminder prietenos înainte de escaladare."
    },
    {
      question: "Ce este self-billing?",
      options: ["Plata automată", "Clientul emite factura", "Facturare recurentă", "Plata în avans"],
      correctIndex: 1,
      explanation: "La self-billing, clientul emite factura în numele furnizorului."
    },
    {
      question: "Care TVA se aplică la transportul internațional intra-UE?",
      options: ["TVA standard", "TVA redus", "0% cu reverse charge", "Fără TVA"],
      correctIndex: 2,
      explanation: "Transportul internațional intra-UE beneficiază de 0% TVA cu reverse charge."
    },
    {
      question: "Ce verificare trebuie făcută înainte de acordarea creditului?",
      options: ["Doar istoric plăți", "Credit check complet", "Doar referințe", "Nicio verificare"],
      correctIndex: 1,
      explanation: "Un credit check complet include istoric, referințe și situație financiară."
    },
    {
      question: "Care este termenul recomandat pentru plata transportatorilor?",
      options: ["La livrare", "7-14 zile", "30-45 zile", "60+ zile"],
      correctIndex: 1,
      explanation: "Plata rapidă a transportatorilor (7-14 zile) asigură relații bune."
    },
    {
      question: "Ce este o factură proforma?",
      options: ["Factură finală", "Estimare de preț", "Notă de credit", "Chitanță"],
      correctIndex: 1,
      explanation: "Factura proforma este o estimare de preț înainte de serviciul efectiv."
    },
    {
      question: "Care indicator măsoară viteza de colectare a banilor?",
      options: ["Profit margin", "DSO (Days Sales Outstanding)", "ROI", "Cash flow"],
      correctIndex: 1,
      explanation: "DSO măsoară numărul mediu de zile pentru colectarea creanțelor."
    },
    {
      question: "Ce este escrow în contextul plăților?",
      options: ["Plată directă", "Cont de garanție terț", "Credit bancar", "Plată în rate"],
      correctIndex: 1,
      explanation: "Escrow este un cont terț care păstrează banii până la îndeplinirea condițiilor."
    },
    {
      question: "Care document este necesar pentru recuperarea TVA în alt stat UE?",
      options: ["Factură simplă", "Certificat de rezidență fiscală", "CMR", "Contract"],
      correctIndex: 1,
      explanation: "Certificatul de rezidență fiscală este necesar pentru recuperarea TVA transfrontalier."
    },
    {
      question: "Ce reprezintă 2/10 Net 30?",
      options: ["2% discount dacă plata în 10 zile, altfel 30 zile", "20% în 10 zile", "2 facturi în 30 zile", "10% discount la 30 zile"],
      correctIndex: 0,
      explanation: "2/10 Net 30 oferă 2% discount pentru plata în 10 zile, termenul complet fiind 30 zile."
    },
    {
      question: "Care este limita de credit recomandată pentru clienți noi?",
      options: ["Nelimitată", "Conservatoare, crescând gradual", "Maximă de la început", "Zero credit"],
      correctIndex: 1,
      explanation: "Începe cu limite conservatoare și crește-le pe baza istoricului de plată."
    },
    {
      question: "Ce acțiune se ia după 60 de zile de întârziere la plată?",
      options: ["Reminder informal", "Suspendarea serviciilor", "Iertarea datoriei", "Continuarea normală"],
      correctIndex: 1,
      explanation: "După 60 de zile, suspendarea serviciilor și notificarea formală sunt necesare."
    },
    {
      question: "Care este avantajul plății electronice vs. cec?",
      options: ["Mai lent", "Trasabilitate și rapiditate", "Mai scump", "Mai puțin sigur"],
      correctIndex: 1,
      explanation: "Plata electronică oferă trasabilitate completă și procesare rapidă."
    },
    {
      question: "Ce este factoring?",
      options: ["Plata în rate", "Vânzarea facturilor către terți", "Creditare bancară", "Self-billing"],
      correctIndex: 1,
      explanation: "Factoring-ul implică vânzarea facturilor către o companie de finanțare pentru lichiditate imediată."
    },
    {
      question: "Care element trebuie verificat pe fiecare factură primită?",
      options: ["Doar suma", "Toate detaliile: suma, servicii, termene", "Doar data", "Doar numele"],
      correctIndex: 1,
      explanation: "Verificarea completă previne erori și dispute ulterioare."
    },
    {
      question: "Ce este DDU în termeni de plată?",
      options: ["Plată la livrare", "Delivered Duty Unpaid", "Discount pentru urgență", "Depozit în avans"],
      correctIndex: 1,
      explanation: "DDU (Delivered Duty Unpaid) înseamnă că taxele vamale sunt plătite de cumpărător."
    },
    {
      question: "Care este riscul principal al termenelor lungi de plată?",
      options: ["Clienți mai mulți", "Probleme de cash flow", "Profit mai mare", "Relații mai bune"],
      correctIndex: 1,
      explanation: "Termenele lungi afectează cash flow-ul și capacitatea de operare."
    },
    {
      question: "Ce reprezintă reconcilierea conturilor?",
      options: ["Închiderea contului", "Verificarea și potrivirea înregistrărilor", "Deschiderea contului", "Transferul fondurilor"],
      correctIndex: 1,
      explanation: "Reconcilierea verifică că toate tranzacțiile sunt corect înregistrate."
    },
    {
      question: "Care este termenul legal maxim de plată în UE pentru B2B?",
      options: ["30 zile", "60 zile", "90 zile", "120 zile"],
      correctIndex: 1,
      explanation: "Directiva UE privind întârzierile de plată stabilește maximum 60 de zile pentru B2B."
    },
    {
      question: "Ce este o garanție bancară?",
      options: ["Credit", "Angajament bancar de plată", "Asigurare", "Factoring"],
      correctIndex: 1,
      explanation: "Garanția bancară asigură plata de către bancă dacă clientul nu plătește."
    },
    {
      question: "Care document justifică o diferență de preț față de ofertă?",
      options: ["Email", "Amendament scris la contract", "Telefon", "Nimic"],
      correctIndex: 1,
      explanation: "Orice modificare de preț trebuie documentată în scris și agreată."
    },
    {
      question: "Ce este payment netting?",
      options: ["Plată individuală", "Compensarea plăților între părți", "Plată în avans", "Plată amânată"],
      correctIndex: 1,
      explanation: "Netting-ul compensează sumele datorate reciproc între companii."
    },
    {
      question: "Care este primul pas când un client refuză să plătească?",
      options: ["Proces imediat", "Verificarea documentației și comunicare", "Ignorarea", "Vânzarea datoriei"],
      correctIndex: 1,
      explanation: "Verifică întâi documentația și comunică pentru a înțelege problema."
    },
    {
      question: "Ce este reverse factoring?",
      options: ["Clientul finanțează furnizorul", "Furnizorul finanțează clientul", "Banca finanțează furnizorul la cererea clientului", "Plată inversă"],
      correctIndex: 2,
      explanation: "La reverse factoring, clientul (mare) facilitează finanțarea rapidă a furnizorilor prin bancă."
    },
    {
      question: "Care informație este obligatorie pe o factură fiscală?",
      options: ["Doar suma", "CUI, adresă, detalii servicii, TVA", "Doar numele", "Doar data"],
      correctIndex: 1,
      explanation: "Factura fiscală trebuie să conțină toate elementele legale obligatorii."
    },
    {
      question: "Ce este aging report?",
      options: ["Raport de vânzări", "Analiza vechimii creanțelor", "Raport de profit", "Lista clienților"],
      correctIndex: 1,
      explanation: "Aging report-ul arată creanțele grupate pe intervale de vechime."
    }
  ],
  de: [
    {
      question: "Was ist die Standardzahlungsfrist im internationalen Transport?",
      options: ["7 Tage", "30 Tage", "60 Tage", "90 Tage"],
      correctIndex: 1,
      explanation: "30 Tage ist die Standardzahlungsfrist in der Transportbranche."
    },
    {
      question: "Was bedeutet der Begriff 'Netto 30'?",
      options: ["30% Rabatt", "Zahlung innerhalb von 30 Tagen", "30 Tage Kredit", "30% Anzahlung"],
      correctIndex: 1,
      explanation: "Netto 30 bedeutet vollständige Zahlung innerhalb von 30 Tagen nach Rechnungsstellung."
    },
    {
      question: "Welches Dokument bestätigt die Lieferung und löst die Rechnungsstellung aus?",
      options: ["Bestellung", "Unterschriebener CMR", "Vertrag", "Angebot"],
      correctIndex: 1,
      explanation: "Der vom Empfänger unterschriebene CMR bestätigt die Lieferung und ermöglicht die Rechnungsstellung."
    },
    {
      question: "Was ist eine Gutschrift?",
      options: ["Zusätzliche Rechnung", "Dokument zur Schuldenreduzierung", "Zahlungsanforderung", "Bankgarantie"],
      correctIndex: 1,
      explanation: "Eine Gutschrift reduziert den vom Kunden geschuldeten Betrag aus verschiedenen Gründen."
    },
    {
      question: "Was ist der erste Schritt im Inkassoprozess?",
      options: ["Rechtliche Schritte", "Freundliche Erinnerung", "Serviceeinstellung", "Schuldenverkauf"],
      correctIndex: 1,
      explanation: "Der Prozess beginnt mit einer freundlichen Erinnerung vor der Eskalation."
    },
    {
      question: "Was ist Self-Billing?",
      options: ["Automatische Zahlung", "Kunde stellt Rechnung aus", "Wiederkehrende Rechnungsstellung", "Vorauszahlung"],
      correctIndex: 1,
      explanation: "Bei Self-Billing stellt der Kunde die Rechnung im Namen des Lieferanten aus."
    },
    {
      question: "Welche MwSt gilt für internationalen Transport innerhalb der EU?",
      options: ["Standard-MwSt", "Ermäßigte MwSt", "0% mit Reverse Charge", "Keine MwSt"],
      correctIndex: 2,
      explanation: "Internationaler Transport innerhalb der EU profitiert von 0% MwSt mit Reverse Charge."
    },
    {
      question: "Welche Prüfung sollte vor der Kreditgewährung durchgeführt werden?",
      options: ["Nur Zahlungshistorie", "Vollständige Kreditprüfung", "Nur Referenzen", "Keine Prüfung"],
      correctIndex: 1,
      explanation: "Eine vollständige Kreditprüfung umfasst Historie, Referenzen und Finanzlage."
    },
    {
      question: "Was ist die empfohlene Zahlungsfrist für Spediteure?",
      options: ["Bei Lieferung", "7-14 Tage", "30-45 Tage", "60+ Tage"],
      correctIndex: 1,
      explanation: "Schnelle Zahlung an Spediteure (7-14 Tage) sichert gute Beziehungen."
    },
    {
      question: "Was ist eine Proforma-Rechnung?",
      options: ["Endrechnung", "Preisschätzung", "Gutschrift", "Quittung"],
      correctIndex: 1,
      explanation: "Eine Proforma-Rechnung ist eine Preisschätzung vor der eigentlichen Dienstleistung."
    },
    {
      question: "Welcher Indikator misst die Geschwindigkeit des Geldeinzugs?",
      options: ["Gewinnmarge", "DSO (Days Sales Outstanding)", "ROI", "Cashflow"],
      correctIndex: 1,
      explanation: "DSO misst die durchschnittliche Anzahl von Tagen zum Einzug von Forderungen."
    },
    {
      question: "Was ist Escrow im Zahlungskontext?",
      options: ["Direktzahlung", "Treuhandkonto", "Bankkredit", "Ratenzahlung"],
      correctIndex: 1,
      explanation: "Escrow ist ein Drittanbieterkonto, das Geld bis zur Bedingungserfüllung hält."
    },
    {
      question: "Welches Dokument ist für die MwSt-Rückerstattung in einem anderen EU-Staat erforderlich?",
      options: ["Einfache Rechnung", "Steuerliche Ansässigkeitsbescheinigung", "CMR", "Vertrag"],
      correctIndex: 1,
      explanation: "Die steuerliche Ansässigkeitsbescheinigung ist für grenzüberschreitende MwSt-Rückerstattung erforderlich."
    },
    {
      question: "Was bedeutet 2/10 Netto 30?",
      options: ["2% Rabatt bei Zahlung in 10 Tagen, sonst 30 Tage", "20% in 10 Tagen", "2 Rechnungen in 30 Tagen", "10% Rabatt bei 30 Tagen"],
      correctIndex: 0,
      explanation: "2/10 Netto 30 bietet 2% Rabatt bei Zahlung innerhalb von 10 Tagen, volle Frist 30 Tage."
    },
    {
      question: "Was ist das empfohlene Kreditlimit für Neukunden?",
      options: ["Unbegrenzt", "Konservativ, schrittweise steigend", "Maximal von Anfang an", "Kein Kredit"],
      correctIndex: 1,
      explanation: "Beginnen Sie mit konservativen Limits und erhöhen Sie basierend auf der Zahlungshistorie."
    },
    {
      question: "Welche Maßnahme wird nach 60 Tagen Zahlungsverzug ergriffen?",
      options: ["Informelle Erinnerung", "Serviceaussetzung", "Schuldenerlass", "Normale Fortsetzung"],
      correctIndex: 1,
      explanation: "Nach 60 Tagen sind Serviceaussetzung und formelle Benachrichtigung erforderlich."
    },
    {
      question: "Was ist der Vorteil elektronischer Zahlung gegenüber Scheck?",
      options: ["Langsamer", "Rückverfolgbarkeit und Schnelligkeit", "Teurer", "Weniger sicher"],
      correctIndex: 1,
      explanation: "Elektronische Zahlung bietet vollständige Rückverfolgbarkeit und schnelle Verarbeitung."
    },
    {
      question: "Was ist Factoring?",
      options: ["Ratenzahlung", "Verkauf von Rechnungen an Dritte", "Bankkredit", "Self-Billing"],
      correctIndex: 1,
      explanation: "Factoring beinhaltet den Verkauf von Rechnungen an ein Finanzierungsunternehmen für sofortige Liquidität."
    },
    {
      question: "Was sollte auf jeder erhaltenen Rechnung geprüft werden?",
      options: ["Nur Betrag", "Alle Details: Betrag, Leistungen, Fristen", "Nur Datum", "Nur Name"],
      correctIndex: 1,
      explanation: "Vollständige Überprüfung verhindert Fehler und spätere Streitigkeiten."
    },
    {
      question: "Was ist DDU in Zahlungsbedingungen?",
      options: ["Zahlung bei Lieferung", "Delivered Duty Unpaid", "Dringlichkeitsrabatt", "Vorabeinzahlung"],
      correctIndex: 1,
      explanation: "DDU (Delivered Duty Unpaid) bedeutet, dass Zollgebühren vom Käufer bezahlt werden."
    },
    {
      question: "Was ist das Hauptrisiko bei langen Zahlungsfristen?",
      options: ["Mehr Kunden", "Cashflow-Probleme", "Höherer Gewinn", "Bessere Beziehungen"],
      correctIndex: 1,
      explanation: "Lange Fristen beeinträchtigen den Cashflow und die Betriebsfähigkeit."
    },
    {
      question: "Was bedeutet Kontenabstimmung?",
      options: ["Kontoschließung", "Überprüfung und Abgleich von Aufzeichnungen", "Kontoeröffnung", "Geldtransfer"],
      correctIndex: 1,
      explanation: "Abstimmung prüft, ob alle Transaktionen korrekt erfasst sind."
    },
    {
      question: "Was ist die gesetzliche Höchstzahlungsfrist in der EU für B2B?",
      options: ["30 Tage", "60 Tage", "90 Tage", "120 Tage"],
      correctIndex: 1,
      explanation: "Die EU-Richtlinie über Zahlungsverzug legt maximal 60 Tage für B2B fest."
    },
    {
      question: "Was ist eine Bankgarantie?",
      options: ["Kredit", "Bankzahlungsverpflichtung", "Versicherung", "Factoring"],
      correctIndex: 1,
      explanation: "Die Bankgarantie sichert Zahlung durch die Bank, wenn der Kunde nicht zahlt."
    },
    {
      question: "Welches Dokument rechtfertigt eine Preisabweichung vom Angebot?",
      options: ["E-Mail", "Schriftliche Vertragsänderung", "Telefon", "Nichts"],
      correctIndex: 1,
      explanation: "Jede Preisänderung muss schriftlich dokumentiert und vereinbart werden."
    },
    {
      question: "Was ist Payment Netting?",
      options: ["Einzelzahlung", "Verrechnung von Zahlungen zwischen Parteien", "Vorauszahlung", "Aufgeschobene Zahlung"],
      correctIndex: 1,
      explanation: "Netting verrechnet gegenseitig geschuldete Beträge zwischen Unternehmen."
    },
    {
      question: "Was ist der erste Schritt, wenn ein Kunde die Zahlung verweigert?",
      options: ["Sofortiger Prozess", "Dokumentationsprüfung und Kommunikation", "Ignorieren", "Schuldenverkauf"],
      correctIndex: 1,
      explanation: "Prüfen Sie zuerst die Dokumentation und kommunizieren Sie, um das Problem zu verstehen."
    },
    {
      question: "Was ist Reverse Factoring?",
      options: ["Kunde finanziert Lieferant", "Lieferant finanziert Kunde", "Bank finanziert Lieferant auf Kundenanfrage", "Umgekehrte Zahlung"],
      correctIndex: 2,
      explanation: "Bei Reverse Factoring ermöglicht der (große) Kunde schnelle Finanzierung für Lieferanten über die Bank."
    },
    {
      question: "Welche Information ist auf einer Steuerrechnung obligatorisch?",
      options: ["Nur Betrag", "Steuernummer, Adresse, Leistungsdetails, MwSt", "Nur Name", "Nur Datum"],
      correctIndex: 1,
      explanation: "Die Steuerrechnung muss alle gesetzlich vorgeschriebenen Elemente enthalten."
    },
    {
      question: "Was ist ein Fälligkeitsbericht (Aging Report)?",
      options: ["Verkaufsbericht", "Analyse der Forderungsalterung", "Gewinnbericht", "Kundenliste"],
      correctIndex: 1,
      explanation: "Der Fälligkeitsbericht zeigt Forderungen gruppiert nach Altersintervallen."
    }
  ],
  en: [
    {
      question: "What is the standard payment term in international transport?",
      options: ["7 days", "30 days", "60 days", "90 days"],
      correctIndex: 1,
      explanation: "30 days is the standard payment term in the transport industry."
    },
    {
      question: "What does the term 'Net 30' represent?",
      options: ["30% discount", "Payment within 30 days", "30 days credit", "30% advance"],
      correctIndex: 1,
      explanation: "Net 30 means full payment within 30 days of invoicing."
    },
    {
      question: "Which document confirms delivery and triggers invoicing?",
      options: ["Order", "Signed CMR", "Contract", "Quote"],
      correctIndex: 1,
      explanation: "The CMR signed by the recipient confirms delivery and enables invoicing."
    },
    {
      question: "What is a credit note?",
      options: ["Additional invoice", "Document reducing debt", "Payment request", "Bank guarantee"],
      correctIndex: 1,
      explanation: "A credit note reduces the amount owed by a client for various reasons."
    },
    {
      question: "What is the first step in the debt collection process?",
      options: ["Legal action", "Friendly reminder", "Service suspension", "Debt sale"],
      correctIndex: 1,
      explanation: "The process starts with a friendly reminder before escalation."
    },
    {
      question: "What is self-billing?",
      options: ["Automatic payment", "Customer issues invoice", "Recurring billing", "Advance payment"],
      correctIndex: 1,
      explanation: "In self-billing, the customer issues the invoice on behalf of the supplier."
    },
    {
      question: "Which VAT applies to international transport within the EU?",
      options: ["Standard VAT", "Reduced VAT", "0% with reverse charge", "No VAT"],
      correctIndex: 2,
      explanation: "International transport within the EU benefits from 0% VAT with reverse charge."
    },
    {
      question: "What check should be done before granting credit?",
      options: ["Only payment history", "Complete credit check", "Only references", "No check"],
      correctIndex: 1,
      explanation: "A complete credit check includes history, references, and financial situation."
    },
    {
      question: "What is the recommended payment term for carriers?",
      options: ["On delivery", "7-14 days", "30-45 days", "60+ days"],
      correctIndex: 1,
      explanation: "Quick payment to carriers (7-14 days) ensures good relationships."
    },
    {
      question: "What is a proforma invoice?",
      options: ["Final invoice", "Price estimate", "Credit note", "Receipt"],
      correctIndex: 1,
      explanation: "A proforma invoice is a price estimate before the actual service."
    },
    {
      question: "Which indicator measures the speed of money collection?",
      options: ["Profit margin", "DSO (Days Sales Outstanding)", "ROI", "Cash flow"],
      correctIndex: 1,
      explanation: "DSO measures the average number of days to collect receivables."
    },
    {
      question: "What is escrow in the payment context?",
      options: ["Direct payment", "Third-party guarantee account", "Bank loan", "Installment payment"],
      correctIndex: 1,
      explanation: "Escrow is a third-party account holding funds until conditions are met."
    },
    {
      question: "Which document is required for VAT recovery in another EU state?",
      options: ["Simple invoice", "Tax residency certificate", "CMR", "Contract"],
      correctIndex: 1,
      explanation: "A tax residency certificate is required for cross-border VAT recovery."
    },
    {
      question: "What does 2/10 Net 30 represent?",
      options: ["2% discount if paid in 10 days, otherwise 30 days", "20% in 10 days", "2 invoices in 30 days", "10% discount at 30 days"],
      correctIndex: 0,
      explanation: "2/10 Net 30 offers 2% discount for payment within 10 days, full term 30 days."
    },
    {
      question: "What is the recommended credit limit for new customers?",
      options: ["Unlimited", "Conservative, gradually increasing", "Maximum from start", "Zero credit"],
      correctIndex: 1,
      explanation: "Start with conservative limits and increase based on payment history."
    },
    {
      question: "What action is taken after 60 days of payment delay?",
      options: ["Informal reminder", "Service suspension", "Debt forgiveness", "Normal continuation"],
      correctIndex: 1,
      explanation: "After 60 days, service suspension and formal notification are necessary."
    },
    {
      question: "What is the advantage of electronic payment vs check?",
      options: ["Slower", "Traceability and speed", "More expensive", "Less secure"],
      correctIndex: 1,
      explanation: "Electronic payment offers complete traceability and fast processing."
    },
    {
      question: "What is factoring?",
      options: ["Installment payment", "Selling invoices to third parties", "Bank lending", "Self-billing"],
      correctIndex: 1,
      explanation: "Factoring involves selling invoices to a financing company for immediate liquidity."
    },
    {
      question: "What element should be verified on every received invoice?",
      options: ["Only amount", "All details: amount, services, terms", "Only date", "Only name"],
      correctIndex: 1,
      explanation: "Complete verification prevents errors and later disputes."
    },
    {
      question: "What is DDU in payment terms?",
      options: ["Payment on delivery", "Delivered Duty Unpaid", "Urgency discount", "Advance deposit"],
      correctIndex: 1,
      explanation: "DDU (Delivered Duty Unpaid) means customs duties are paid by the buyer."
    },
    {
      question: "What is the main risk of long payment terms?",
      options: ["More customers", "Cash flow problems", "Higher profit", "Better relationships"],
      correctIndex: 1,
      explanation: "Long terms affect cash flow and operating capacity."
    },
    {
      question: "What does account reconciliation mean?",
      options: ["Account closure", "Verification and matching of records", "Account opening", "Fund transfer"],
      correctIndex: 1,
      explanation: "Reconciliation verifies that all transactions are correctly recorded."
    },
    {
      question: "What is the maximum legal payment term in the EU for B2B?",
      options: ["30 days", "60 days", "90 days", "120 days"],
      correctIndex: 1,
      explanation: "The EU Late Payment Directive sets a maximum of 60 days for B2B."
    },
    {
      question: "What is a bank guarantee?",
      options: ["Credit", "Bank payment commitment", "Insurance", "Factoring"],
      correctIndex: 1,
      explanation: "A bank guarantee ensures payment by the bank if the customer fails to pay."
    },
    {
      question: "Which document justifies a price difference from the quote?",
      options: ["Email", "Written contract amendment", "Phone call", "Nothing"],
      correctIndex: 1,
      explanation: "Any price change must be documented in writing and agreed upon."
    },
    {
      question: "What is payment netting?",
      options: ["Individual payment", "Offsetting payments between parties", "Advance payment", "Deferred payment"],
      correctIndex: 1,
      explanation: "Netting offsets amounts owed reciprocally between companies."
    },
    {
      question: "What is the first step when a customer refuses to pay?",
      options: ["Immediate lawsuit", "Documentation check and communication", "Ignore it", "Debt sale"],
      correctIndex: 1,
      explanation: "First verify documentation and communicate to understand the problem."
    },
    {
      question: "What is reverse factoring?",
      options: ["Customer finances supplier", "Supplier finances customer", "Bank finances supplier at customer's request", "Reverse payment"],
      correctIndex: 2,
      explanation: "In reverse factoring, the (large) customer facilitates fast financing for suppliers through the bank."
    },
    {
      question: "What information is mandatory on a tax invoice?",
      options: ["Only amount", "Tax ID, address, service details, VAT", "Only name", "Only date"],
      correctIndex: 1,
      explanation: "A tax invoice must contain all legally required elements."
    },
    {
      question: "What is an aging report?",
      options: ["Sales report", "Analysis of receivables age", "Profit report", "Customer list"],
      correctIndex: 1,
      explanation: "An aging report shows receivables grouped by age intervals."
    }
  ]
};
