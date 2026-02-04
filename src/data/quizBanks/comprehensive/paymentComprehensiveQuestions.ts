import { TranslatedQuizQuestion } from '../../quizTranslations';

export const paymentComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt termenii de plată standard în transport internațional?",
      de: "Was sind Standardzahlungsbedingungen im internationalen Transport?",
      en: "What are standard payment terms in international transport?"
    },
    options: {
      ro: ["Întotdeauna cash", "Net 30, Net 45, Net 60 zile de la factură sau livrare", "Doar în avans", "Doar la livrare"],
      de: ["Immer bar", "Netto 30, Netto 45, Netto 60 Tage ab Rechnung oder Lieferung", "Nur Vorauszahlung", "Nur bei Lieferung"],
      en: ["Always cash", "Net 30, Net 45, Net 60 days from invoice or delivery", "Only in advance", "Only at delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Termeni standard: Net 30 (plată în 30 zile), Net 45, Net 60. Clienți noi: termene mai scurte. Clienți stabili: pot negocia termene mai lungi.",
      de: "Standardbedingungen: Netto 30 (Zahlung in 30 Tagen), Netto 45, Netto 60. Neukunden: kürzere Fristen. Stabile Kunden: können längere Fristen aushandeln.",
      en: "Standard terms: Net 30 (payment in 30 days), Net 45, Net 60. New clients: shorter terms. Stable clients: can negotiate longer terms."
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
      ro: ["Număr de livrări", "Numărul mediu de zile pentru încasarea facturilor", "Discount oferit", "Zile de stoc"],
      de: ["Anzahl Lieferungen", "Durchschnittliche Anzahl Tage bis Rechnungseinzug", "Gewährter Rabatt", "Lagertage"],
      en: ["Number of deliveries", "Average number of days to collect invoices", "Discount offered", "Stock days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DSO: indicator care măsoară cât de repede încasezi. DSO 45 = în medie 45 zile între factură și plată. Obiectiv: DSO cât mai mic.",
      de: "DSO: Kennzahl die misst wie schnell du einziehst. DSO 45 = durchschnittlich 45 Tage zwischen Rechnung und Zahlung. Ziel: möglichst niedriger DSO.",
      en: "DSO: indicator measuring how fast you collect. DSO 45 = average 45 days between invoice and payment. Goal: lowest possible DSO."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi un client care întârzie sistematic plățile?",
      de: "Wie managst du einen Kunden der systematisch Zahlungen verzögert?",
      en: "How do you manage a client who systematically delays payments?"
    },
    options: {
      ro: ["Continui normal", "Escaldare internă, comunicare fermă, reducere expunere, oprire servicii dacă persistent", "Doar ameninți", "Ignori"],
      de: ["Normal weitermachen", "Interne Eskalation, feste Kommunikation, Expositionsreduktion, Serviceeinstellung wenn anhaltend", "Nur drohen", "Ignorieren"],
      en: ["Continue normally", "Internal escalation, firm communication, reduce exposure, stop services if persistent", "Only threaten", "Ignore"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Gestiune: escaladare la management, discuție fermă cu clientul, reducere limite credit, eventual oprire transport nou până la plată, plan de recuperare.",
      de: "Management: Eskalation an Management, festes Kundengespräch, Kreditlimit-Reduktion, eventuell neuen Transport bis Zahlung stoppen, Rückgewinnungsplan.",
      en: "Management: escalate to management, firm client discussion, reduce credit limits, possibly stop new transport until payment, recovery plan."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client major (20% din cifra de afaceri) are 200.000€ restanță la 90 zile. Strategie de recuperare fără a pierde clientul?",
      de: "Großkunde (20% vom Umsatz) hat 200.000€ Rückstand bei 90 Tagen. Wiedergewinnungsstrategie ohne Kundenverlust?",
      en: "Major client (20% of revenue) has €200,000 overdue at 90 days. Recovery strategy without losing client?"
    },
    options: {
      ro: ["Dai în judecată imediat", "Întâlnire la nivel înalt, plan eșalonat, garanții, reducere expunere viitoare, monitorizare strictă", "Renunți la bani", "Continui să livrezi normal"],
      de: ["Sofort verklagen", "Treffen auf hoher Ebene, Ratenzahlungsplan, Garantien, zukünftige Expositionsreduktion, strenge Überwachung", "Geld aufgeben", "Normal weiterliefern"],
      en: ["Sue immediately", "High-level meeting, installment plan, guarantees, reduce future exposure, strict monitoring", "Give up money", "Continue delivering normally"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Strategie: întâlnire CEO-to-CEO, plan de plată eșalonat cu termene clare, garanții (bancară, personală), reducere limită credit, transporturi noi doar cu plată la zi.",
      de: "Strategie: CEO-zu-CEO-Treffen, Ratenzahlungsplan mit klaren Fristen, Garantien (Bank, persönlich), Kreditlimit-Reduktion, neue Transporte nur bei Tagesabrechnung.",
      en: "Strategy: CEO-to-CEO meeting, installment payment plan with clear deadlines, guarantees (bank, personal), credit limit reduction, new transports only with current payment."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este factoring-ul în transport?",
      de: "Was ist Factoring im Transport?",
      en: "What is factoring in transport?"
    },
    options: {
      ro: ["Tip de asigurare", "Vânzarea facturilor către o instituție financiară pentru lichiditate imediată", "Tip de transport", "Discount de volum"],
      de: ["Versicherungsart", "Verkauf von Rechnungen an Finanzinstitut für sofortige Liquidität", "Transportart", "Mengenrabatt"],
      en: ["Type of insurance", "Selling invoices to financial institution for immediate liquidity", "Type of transport", "Volume discount"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Factoring: vinzi facturile (ex. 100.000€) către factor, primești 90-95% imediat, factorul încasează de la client. Cost: 1-3% din valoare.",
      de: "Factoring: Rechnungen verkaufen (z.B. 100.000€) an Factor, 90-95% sofort erhalten, Factor zieht vom Kunden ein. Kosten: 1-3% vom Wert.",
      en: "Factoring: sell invoices (e.g., €100,000) to factor, receive 90-95% immediately, factor collects from client. Cost: 1-3% of value."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum stabilești termene de plată diferențiate pe categorii de clienți?",
      de: "Wie legst du differenzierte Zahlungsbedingungen nach Kundenkategorien fest?",
      en: "How do you set differentiated payment terms by client categories?"
    },
    options: {
      ro: ["Aceleași pentru toți", "Scor credit, istoric, volum, importanță strategică determină termene de la 14 la 60 zile", "Doar pe simțire", "Doar clienți vechi au termene"],
      de: ["Gleiche für alle", "Kredit-Score, Historie, Volumen, strategische Bedeutung bestimmen Fristen von 14 bis 60 Tagen", "Nur nach Gefühl", "Nur Altkunden haben Fristen"],
      en: ["Same for all", "Credit score, history, volume, strategic importance determine terms from 14 to 60 days", "Only by feeling", "Only old clients have terms"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diferențiere: clienți noi/risc = 14-21 zile, clienți buni = 30-45 zile, clienți strategici/volum mare = 45-60 zile. Revizuire anuală bazată pe comportament.",
      de: "Differenzierung: neue/Risiko-Kunden = 14-21 Tage, gute Kunden = 30-45 Tage, strategische/Großvolumenkunden = 45-60 Tage. Jährliche Überprüfung basierend auf Verhalten.",
      en: "Differentiation: new/risk clients = 14-21 days, good clients = 30-45 days, strategic/high-volume = 45-60 days. Annual review based on behavior."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare sistem de collection automatizat. Etape și triggere de escaladare?",
      de: "Implementierung automatisiertes Collection-System. Stufen und Eskalationstrigger?",
      en: "Implementing automated collection system. Stages and escalation triggers?"
    },
    options: {
      ro: ["Doar email lunar", "Reminder automat, escaladare progresivă (5/15/30/45/60 zile), acțiuni diferențiate pe nivel", "Doar telefon", "Doar la 90 zile"],
      de: ["Nur monatliche E-Mail", "Automatische Erinnerung, progressive Eskalation (5/15/30/45/60 Tage), differenzierte Aktionen pro Stufe", "Nur Telefon", "Nur bei 90 Tagen"],
      en: ["Only monthly email", "Automatic reminder, progressive escalation (5/15/30/45/60 days), differentiated actions per level", "Only phone", "Only at 90 days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Collection: D+5 reminder email, D+15 call, D+30 escaladare manager, D+45 stop credit, D+60 transfer legal. Automation cu excepții pentru VIP.",
      de: "Collection: T+5 Erinnerungs-E-Mail, T+15 Anruf, T+30 Manager-Eskalation, T+45 Kredit stoppen, T+60 rechtliche Übergabe. Automation mit VIP-Ausnahmen.",
      en: "Collection: D+5 reminder email, D+15 call, D+30 manager escalation, D+45 stop credit, D+60 legal handover. Automation with VIP exceptions."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este o scrisoare de garanție bancară?",
      de: "Was ist ein Bankgarantieschreiben?",
      en: "What is a bank guarantee letter?"
    },
    options: {
      ro: ["Împrumut bancar", "Angajament al băncii de a plăti dacă clientul nu își respectă obligațiile", "Extras de cont", "Card de credit"],
      de: ["Bankkredit", "Verpflichtung der Bank zu zahlen wenn Kunde Verpflichtungen nicht erfüllt", "Kontoauszug", "Kreditkarte"],
      en: ["Bank loan", "Bank commitment to pay if client doesn't meet obligations", "Account statement", "Credit card"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Garanție bancară: banca garantează plata. Dacă clientul nu plătește, soliciti banca. Folosită pentru clienți noi cu volume mari sau risc.",
      de: "Bankgarantie: Bank garantiert Zahlung. Wenn Kunde nicht zahlt, forderst du von Bank. Verwendet für Neukunden mit großem Volumen oder Risiko.",
      en: "Bank guarantee: bank guarantees payment. If client doesn't pay, you claim from bank. Used for new clients with large volumes or risk."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi plățile în valute multiple?",
      de: "Wie managst du Zahlungen in mehreren Währungen?",
      en: "How do you manage payments in multiple currencies?"
    },
    options: {
      ro: ["Doar EUR", "Hedging pentru expuneri mari, matching încasări/plăți, conturi multi-currency, clauze de ajustare", "Ignori riscul", "Doar USD"],
      de: ["Nur EUR", "Hedging für große Expositionen, Einnahmen/Zahlungen matchen, Multi-Currency-Konten, Anpassungsklauseln", "Risiko ignorieren", "Nur USD"],
      en: ["Only EUR", "Hedging for large exposures, matching receipts/payments, multi-currency accounts, adjustment clauses", "Ignore risk", "Only USD"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multi-currency: preferă EUR, pentru alte valute: match plăți cu încasări în aceeași valută, hedging forwards pentru sume mari, clauze de ajustare în contract.",
      de: "Multi-Currency: EUR bevorzugen, für andere Währungen: Zahlungen mit Einnahmen in gleicher Währung matchen, Hedging Forwards für große Beträge, Anpassungsklauseln im Vertrag.",
      en: "Multi-currency: prefer EUR, for other currencies: match payments with receipts in same currency, hedging forwards for large amounts, adjustment clauses in contract."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Criză de lichiditate: încasări întârziate 500.000€, plăți urgente către transportatori 300.000€. Soluții pe termen scurt?",
      de: "Liquiditätskrise: verzögerte Einnahmen 500.000€, dringende Zahlungen an Transportunternehmer 300.000€. Kurzfristige Lösungen?",
      en: "Liquidity crisis: delayed collections €500,000, urgent payments to carriers €300,000. Short-term solutions?"
    },
    options: {
      ro: ["Faliment", "Accelerare încasări (discount), factoring, linie de credit, negociere amânare plăți, prioritizare", "Ignori", "Doar aștepți"],
      de: ["Konkurs", "Einzugsbeschleunigung (Rabatt), Factoring, Kreditlinie, Zahlungsaufschubverhandlung, Priorisierung", "Ignorieren", "Nur warten"],
      en: ["Bankruptcy", "Accelerate collections (discount), factoring, credit line, negotiate payment deferral, prioritization", "Ignore", "Only wait"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Criză lichiditate: discount 2-3% pentru plată rapidă, factoring pentru facturi bune, activare linie de credit, negociază termene cu furnizori, prioritizează plăți critice.",
      de: "Liquiditätskrise: 2-3% Rabatt für schnelle Zahlung, Factoring für gute Rechnungen, Kreditlinie aktivieren, Lieferantenfristen verhandeln, kritische Zahlungen priorisieren.",
      en: "Liquidity crisis: 2-3% discount for fast payment, factoring for good invoices, activate credit line, negotiate terms with suppliers, prioritize critical payments."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un reminder de plată și când se trimite?",
      de: "Was ist eine Zahlungserinnerung und wann wird sie gesendet?",
      en: "What is a payment reminder and when is it sent?"
    },
    options: {
      ro: ["Doar după 90 zile", "Notificare amicală trimisă la scadență sau puțin după pentru a solicita plata", "Niciodată", "Doar verbal"],
      de: ["Nur nach 90 Tagen", "Freundliche Benachrichtigung bei oder kurz nach Fälligkeit zur Zahlungsaufforderung", "Nie", "Nur mündlich"],
      en: ["Only after 90 days", "Friendly notification sent at or shortly after due date requesting payment", "Never", "Only verbal"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reminder: email politicos la scadență sau 3-5 zile după, menționează factura, suma, scadența. Tonul escaladează progresiv la remindere ulterioare.",
      de: "Erinnerung: höfliche E-Mail bei Fälligkeit oder 3-5 Tage danach, erwähnt Rechnung, Betrag, Fälligkeit. Ton eskaliert progressiv bei weiteren Erinnerungen.",
      en: "Reminder: polite email at due date or 3-5 days after, mentions invoice, amount, due date. Tone escalates progressively with subsequent reminders."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum verifici solvabilitatea unui client nou înainte de a acorda credit?",
      de: "Wie prüfst du die Bonität eines Neukunden vor Kreditgewährung?",
      en: "How do you check a new client's solvency before granting credit?"
    },
    options: {
      ro: ["Nu verifici", "Raport de credit, referințe comerciale, situații financiare, experiență piață, capacitate de plată", "Doar Google", "Doar întrebi verbal"],
      de: ["Nicht prüfen", "Kreditbericht, Handelsreferenzen, Jahresabschlüsse, Markterfahrung, Zahlungsfähigkeit", "Nur Google", "Nur mündlich fragen"],
      en: ["Don't verify", "Credit report, trade references, financial statements, market experience, payment capacity", "Only Google", "Only ask verbally"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Due diligence: raport Coface/Dun&Bradstreet, verificare registru comerț, referințe de la alți furnizori, bilanț dacă disponibil, vizită la sediu pentru clienți mari.",
      de: "Due Diligence: Coface/Dun&Bradstreet-Bericht, Handelsregister prüfen, Referenzen von anderen Lieferanten, Bilanz wenn verfügbar, Besuch am Standort für große Kunden.",
      en: "Due diligence: Coface/Dun&Bradstreet report, check trade register, references from other suppliers, balance sheet if available, site visit for large clients."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare politică de credit pentru companie cu 500 clienți și 50M€ cifră de afaceri. Componente cheie?",
      de: "Entwicklung Kreditpolitik für Unternehmen mit 500 Kunden und 50M€ Umsatz. Schlüsselkomponenten?",
      en: "Developing credit policy for company with 500 clients and €50M revenue. Key components?"
    },
    options: {
      ro: ["Fără politică", "Criterii evaluare, limite pe categorii, proces aprobare, monitorizare, escaladare, excepții, review periodic", "Doar pentru clienți noi", "Doar după probleme"],
      de: ["Keine Politik", "Bewertungskriterien, Limits nach Kategorien, Genehmigungsprozess, Monitoring, Eskalation, Ausnahmen, periodisches Review", "Nur für Neukunden", "Nur nach Problemen"],
      en: ["No policy", "Evaluation criteria, limits by category, approval process, monitoring, escalation, exceptions, periodic review", "Only for new clients", "Only after problems"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Politică credit: scor bazat pe criterii obiective, limite (A:100k, B:50k, C:20k), proces aprobare pe nivele, monitorizare DSO/aging, escaladare automată, review anual.",
      de: "Kreditpolitik: Score basierend auf objektiven Kriterien, Limits (A:100k, B:50k, C:20k), Genehmigungsprozess auf Ebenen, DSO/Aging-Monitoring, automatische Eskalation, jährliches Review.",
      en: "Credit policy: score based on objective criteria, limits (A:€100k, B:€50k, C:€20k), tiered approval process, DSO/aging monitoring, automatic escalation, annual review."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este o notă de credit?",
      de: "Was ist eine Gutschrift?",
      en: "What is a credit note?"
    },
    options: {
      ro: ["Împrumut", "Document care reduce sau anulează o factură emisă anterior", "Factură normală", "Bon fiscal"],
      de: ["Kredit", "Dokument das eine zuvor ausgestellte Rechnung reduziert oder storniert", "Normale Rechnung", "Kassenbon"],
      en: ["Loan", "Document that reduces or cancels a previously issued invoice", "Normal invoice", "Receipt"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Notă de credit: emitem când corectăm o factură (preț greșit, serviciu neprestat, daune). Reduce suma datorată, trebuie să referențieze factura originală.",
      de: "Gutschrift: wir stellen aus wenn wir Rechnung korrigieren (falscher Preis, nicht erbrachte Leistung, Schäden). Reduziert geschuldeten Betrag, muss Originalrechnung referenzieren.",
      en: "Credit note: we issue when correcting an invoice (wrong price, service not provided, damages). Reduces amount owed, must reference original invoice."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum reconciliezi plățile primite cu facturile deschise?",
      de: "Wie stimmst du erhaltene Zahlungen mit offenen Rechnungen ab?",
      en: "How do you reconcile payments received with open invoices?"
    },
    options: {
      ro: ["Nu reconciliezi", "Matching pe referință/sumă, investigare diferențe, clarificare cu client, alocare corectă în sistem", "Doar la final de an", "Doar dacă lipsesc bani"],
      de: ["Nicht abstimmen", "Matching nach Referenz/Betrag, Differenzuntersuchung, Klärung mit Kunde, korrekte Systemzuordnung", "Nur am Jahresende", "Nur wenn Geld fehlt"],
      en: ["Don't reconcile", "Matching by reference/amount, investigate differences, clarify with client, correct system allocation", "Only at year end", "Only if money missing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reconciliere: match automat pe referință factură, investigare plăți fără referință, clarificare diferențe cu clientul, alocare corectă, raport săptămânal nealocat.",
      de: "Abstimmung: automatisches Match nach Rechnungsreferenz, Untersuchung Zahlungen ohne Referenz, Differenzklärung mit Kunde, korrekte Zuordnung, wöchentlicher Bericht nicht zugeordnet.",
      en: "Reconciliation: auto match by invoice reference, investigate payments without reference, clarify differences with client, correct allocation, weekly unallocated report."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client în insolvență declarat. 150.000€ creanțe. Procedură de recuperare și înregistrare?",
      de: "Kunde in erklärter Insolvenz. 150.000€ Forderungen. Wiedergewinnungsverfahren und Buchung?",
      en: "Client declared insolvent. €150,000 claims. Recovery procedure and recording?"
    },
    options: {
      ro: ["Ștergi datoria", "Înregistrare la masa credală, monitorizare procedură, provizion contabil, eventual vânzare creanță", "Aștepți", "Dai în judecată"],
      de: ["Schulden löschen", "Gläubigerversammlung anmelden, Verfahren überwachen, Buchhaltungsrückstellung, eventuell Forderungsverkauf", "Warten", "Verklagen"],
      en: ["Write off debt", "Register with creditors, monitor procedure, accounting provision, possibly sell claim", "Wait", "Sue"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Insolvență: înregistrare creanță la administrator judiciar (termen!), provizion 100% contabil, monitorizare procedură, evaluare vânzare creanță la discount, recuperare parțială probabilă.",
      de: "Insolvenz: Forderung beim Insolvenzverwalter anmelden (Frist!), 100% Buchhaltungsrückstellung, Verfahren überwachen, Forderungsverkauf mit Abschlag prüfen, Teilrückgewinnung wahrscheinlich.",
      en: "Insolvency: register claim with administrator (deadline!), 100% accounting provision, monitor procedure, evaluate selling claim at discount, partial recovery likely."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă plată parțială și cum o gestionezi?",
      de: "Was bedeutet Teilzahlung und wie managst du sie?",
      en: "What does partial payment mean and how do you manage it?"
    },
    options: {
      ro: ["Nu există", "Când clientul plătește mai puțin decât datoria totală; aloci pe cele mai vechi facturi și urmărești restul", "Refuzi plata", "Returnezi banii"],
      de: ["Gibt es nicht", "Wenn Kunde weniger als Gesamtschuld zahlt; auf älteste Rechnungen zuordnen und Rest verfolgen", "Zahlung ablehnen", "Geld zurückgeben"],
      en: ["Doesn't exist", "When client pays less than total debt; allocate to oldest invoices and follow up on rest", "Refuse payment", "Return money"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Plată parțială: acceptă, alocă pe FIFO (facturi cele mai vechi), comunică cu clientul despre rest, documentează, continuă urmărirea diferenței.",
      de: "Teilzahlung: akzeptieren, nach FIFO zuordnen (älteste Rechnungen), mit Kunde über Rest kommunizieren, dokumentieren, Differenz weiter verfolgen.",
      en: "Partial payment: accept, allocate FIFO (oldest invoices), communicate with client about rest, document, continue following up difference."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum oferi discount pentru plată rapidă și când e rentabil?",
      de: "Wie bietest du Rabatt für schnelle Zahlung an und wann ist es rentabel?",
      en: "How do you offer discount for fast payment and when is it profitable?"
    },
    options: {
      ro: ["Niciodată discount", "2/10 net 30 (2% discount pentru plata în 10 zile), rentabil când costul capitalului e mai mare", "Doar 50%", "Doar clienților vechi"],
      de: ["Nie Rabatt", "2/10 netto 30 (2% Rabatt für Zahlung in 10 Tagen), rentabel wenn Kapitalkosten höher", "Nur 50%", "Nur Altkunden"],
      en: ["Never discount", "2/10 net 30 (2% discount for payment in 10 days), profitable when cost of capital is higher", "Only 50%", "Only old clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Early payment discount: 2/10 net 30 = 2% pentru plată în 10 zile vs. 30. Echivalent ~36% dobândă anualizată. Oferă când costul tău de capital e mai mare.",
      de: "Frühzahlungsrabatt: 2/10 netto 30 = 2% für Zahlung in 10 Tagen vs. 30. Entspricht ~36% annualisiertem Zins. Anbieten wenn deine Kapitalkosten höher.",
      en: "Early payment discount: 2/10 net 30 = 2% for payment in 10 days vs. 30. Equivalent ~36% annualized interest. Offer when your cost of capital is higher."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "KPIs pentru departamentul de credit și collections. Metrici și targets?",
      de: "KPIs für Kredit- und Collections-Abteilung. Metriken und Ziele?",
      en: "KPIs for credit and collections department. Metrics and targets?"
    },
    options: {
      ro: ["Doar număr de apeluri", "DSO, aging buckets, bad debt ratio, collection effectiveness, dispute resolution time", "Doar număr de facturi", "Fără KPIs"],
      de: ["Nur Anzahl Anrufe", "DSO, Aging Buckets, Bad Debt Ratio, Collection Effectiveness, Dispute Resolution Time", "Nur Anzahl Rechnungen", "Keine KPIs"],
      en: ["Only number of calls", "DSO, aging buckets, bad debt ratio, collection effectiveness, dispute resolution time", "Only number of invoices", "No KPIs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "KPIs: DSO target <45 zile, aging (90+ <5%), bad debt <0.5% din venituri, collection effectiveness >95%, dispute resolution <7 zile. Review lunar.",
      de: "KPIs: DSO-Ziel <45 Tage, Aging (90+ <5%), Bad Debt <0,5% vom Umsatz, Collection Effectiveness >95%, Dispute Resolution <7 Tage. Monatliches Review.",
      en: "KPIs: DSO target <45 days, aging (90+ <5%), bad debt <0.5% of revenue, collection effectiveness >95%, dispute resolution <7 days. Monthly review."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un aging report (raport de vechime)?",
      de: "Was ist ein Aging Report (Altersbericht)?",
      en: "What is an aging report?"
    },
    options: {
      ro: ["Raport de vârstă angajați", "Raport care grupează facturile neîncasate pe intervale de vechime (0-30, 31-60, 61-90, 90+ zile)", "Raport anual", "Raport de producție"],
      de: ["Mitarbeiteraltersbericht", "Bericht der ausstehende Rechnungen nach Altersintervallen gruppiert (0-30, 31-60, 61-90, 90+ Tage)", "Jahresbericht", "Produktionsbericht"],
      en: ["Employee age report", "Report grouping outstanding invoices by age intervals (0-30, 31-60, 61-90, 90+ days)", "Annual report", "Production report"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Aging: grupează creanțe pe intervale (current, 1-30, 31-60, 61-90, 90+). Focus pe reducerea celor vechi (90+). Instrument principal de management collections.",
      de: "Aging: gruppiert Forderungen nach Intervallen (aktuell, 1-30, 31-60, 61-90, 90+). Fokus auf Reduzierung alter (90+). Hauptinstrument für Collections-Management.",
      en: "Aging: groups receivables by intervals (current, 1-30, 31-60, 61-90, 90+). Focus on reducing old ones (90+). Main collections management tool."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi disputele de plată legate de calitatea serviciului?",
      de: "Wie managst du Zahlungsstreitigkeiten bezüglich Servicequalität?",
      en: "How do you manage payment disputes related to service quality?"
    },
    options: {
      ro: ["Ignori disputa", "Investigare rapidă, documentație, negociere, note de credit dacă justificat, separare disputed/undisputed", "Doar instanță", "Doar renunți la bani"],
      de: ["Streit ignorieren", "Schnelle Untersuchung, Dokumentation, Verhandlung, Gutschriften wenn gerechtfertigt, Trennung disputed/undisputed", "Nur Gericht", "Nur auf Geld verzichten"],
      en: ["Ignore dispute", "Fast investigation, documentation, negotiation, credit notes if justified, separate disputed/undisputed", "Only court", "Only give up money"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dispute: investighează rapid (48h), separă suma disputată de restul (plătibil imediat), documentează, negociază soluție, emite credit note dacă justificat.",
      de: "Streitigkeiten: schnell untersuchen (48h), strittigen Betrag vom Rest trennen (sofort zahlbar), dokumentieren, Lösung verhandeln, Gutschrift wenn gerechtfertigt.",
      en: "Disputes: investigate quickly (48h), separate disputed amount from rest (payable immediately), document, negotiate solution, issue credit note if justified."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Integrare sisteme: ERP, TMS, banking, collections automation. Arhitectură și fluxuri de date?",
      de: "Systemintegration: ERP, TMS, Banking, Collections Automation. Architektur und Datenflüsse?",
      en: "Systems integration: ERP, TMS, banking, collections automation. Architecture and data flows?"
    },
    options: {
      ro: ["Doar Excel manual", "Facturi TMS→ERP, plăți Bank→ERP (auto-match), aging→collection triggers, raportare consolidată", "Doar un sistem", "Fără integrare"],
      de: ["Nur manuelles Excel", "Rechnungen TMS→ERP, Zahlungen Bank→ERP (Auto-Match), Aging→Collection-Trigger, konsolidierte Berichterstattung", "Nur ein System", "Keine Integration"],
      en: ["Only manual Excel", "Invoices TMS→ERP, payments Bank→ERP (auto-match), aging→collection triggers, consolidated reporting", "Only one system", "No integration"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrare: TMS generează facturi→ERP, feed bancar→ERP pentru reconciliere automată, ERP calculează aging→triggere collection, dashboard consolidat pentru management.",
      de: "Integration: TMS generiert Rechnungen→ERP, Bank-Feed→ERP für automatische Abstimmung, ERP berechnet Aging→Collection-Trigger, konsolidiertes Dashboard für Management.",
      en: "Integration: TMS generates invoices→ERP, bank feed→ERP for auto-reconciliation, ERP calculates aging→collection triggers, consolidated dashboard for management."
    }
  }
];
