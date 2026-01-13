import { QuizQuestion } from '../quizData';

export const redFlagsQuestions: Record<string, QuizQuestion[]> = {
  ro: [
    {
      question: "Care este cel mai important semnal de alarmă la un transportator nou?",
      options: ["Preț competitiv", "Lipsa asigurării CMR valide", "Flotă mică", "Răspuns rapid"],
      correctIndex: 1,
      explanation: "Lipsa asigurării CMR valide expune la riscuri financiare majore în caz de daune."
    },
    {
      question: "Ce indică un preț mult sub piață pentru un transport?",
      options: ["Ofertă excelentă", "Posibilă fraudă sau serviciu substandard", "Transportator eficient", "Greșeală de calcul"],
      correctIndex: 1,
      explanation: "Prețurile anormal de mici pot indica fraudă, vehicule necorespunzătoare sau nerespectarea regulilor."
    },
    {
      question: "Care este un red flag major în documentele de transport?",
      options: ["Document în format digital", "Ștampile sau semnături lipsă", "Document în limba engleză", "Mai multe pagini"],
      correctIndex: 1,
      explanation: "Ștampilele și semnăturile lipsă pot invalida documentul și crea probleme legale."
    },
    {
      question: "Ce semnal de alarmă ar trebui să observe dispecerul la un client nou?",
      options: ["Solicitarea urgentă de transport", "Refuzul de a semna contract standard", "Cerere de cotație detaliată", "Întrebări despre servicii"],
      correctIndex: 1,
      explanation: "Refuzul contractului standard poate indica intenția de a evita obligațiile."
    },
    {
      question: "Care comportament al șoferului este un red flag?",
      options: ["Comunicare frecventă", "Lipsa de răspuns la apeluri timp îndelungat", "Respectarea timpilor de odihnă", "Raportarea problemelor"],
      correctIndex: 1,
      explanation: "Lipsa comunicării poate indica probleme grave: accident, furt, abandon."
    },
    {
      question: "Ce indică solicitarea plății în avans 100% de la un client nou?",
      options: ["Client serios", "Posibile probleme de încredere sau fraudă", "Standard în industrie", "Client mare"],
      correctIndex: 1,
      explanation: "Cererea de 100% avans de la client nou poate fi semn de preluare frauduloasă."
    },
    {
      question: "Care este un semnal de alarmă la verificarea unui transportator?",
      options: ["Licență comunitară validă", "Adresă de email generică (gmail, yahoo)", "Experiență dovedită", "Referințe verificabile"],
      correctIndex: 1,
      explanation: "Transportatorii profesioniști ar trebui să aibă email cu domeniu propriu al companiei."
    },
    {
      question: "Ce indică schimbarea frecventă a vehiculului sau șoferului anunțat?",
      options: ["Flotă mare", "Posibilă lipsă de organizare sau tentativă de fraudă", "Flexibilitate", "Eficiență operațională"],
      correctIndex: 1,
      explanation: "Schimbările frecvente pot indica probleme organizaționale sau tentative de înlocuire neautorizată."
    },
    {
      question: "Care este un red flag în comunicarea cu clientul?",
      options: ["Răspunsuri detaliate", "Evitarea întrebărilor despre caracteristicile mărfii", "Solicitarea actualizărilor", "Negociere normală"],
      correctIndex: 1,
      explanation: "Evitarea detaliilor despre marfă poate indica informații false sau marfă problematică."
    },
    {
      question: "Ce semnal de alarmă apare la o rută propusă?",
      options: ["Rută directă standard", "Puncte de tranzit inexplicabile", "Traversarea autostrăzilor principale", "Distanță normală"],
      correctIndex: 1,
      explanation: "Punctele de tranzit nejustificate pot indica transbordări neautorizate."
    },
    {
      question: "Care este un red flag la verificarea vehiculului?",
      options: ["Vehicul curat", "Plăcuțe de înmatriculare deteriorate sau necitibile", "TIR plate vizibil", "Asigurare vizibilă"],
      correctIndex: 1,
      explanation: "Plăcuțele deteriorate pot indica vehicul furat sau probleme de înmatriculare."
    },
    {
      question: "Ce indică cererea urgentă de plată prin metode neconvenționale?",
      options: ["Nevoie legitimă", "Posibilă fraudă", "Politică normală", "Cash flow bun"],
      correctIndex: 1,
      explanation: "Plata urgentă prin metode neconvenționale (crypto, transfer Western Union) este semn de fraudă."
    },
    {
      question: "Care comportament al clientului indică potențiale probleme?",
      options: ["Planificare anticipată", "Presiune extremă pentru confirmări fără documente", "Comunicare clară", "Flexibilitate rezonabilă"],
      correctIndex: 1,
      explanation: "Presiunea pentru confirmări fără documentație poate indica tentativă de fraudă."
    },
    {
      question: "Ce semnal de alarmă apare la condițiile de încărcare?",
      options: ["Timp suficient de încărcare", "Refuzul expeditorului de a permite verificarea mărfii", "Documente pregătite", "Personal de ajutor disponibil"],
      correctIndex: 1,
      explanation: "Refuzul verificării poate indica marfă diferită de cea declarată sau probleme legale."
    },
    {
      question: "Care este un red flag major la facturare?",
      options: ["Factură conform ofertei", "Sume diferite de cele agreate fără explicație", "Termeni standard de plată", "Factură completă"],
      correctIndex: 1,
      explanation: "Sumele diferite neexplicate pot indica erori sau tentative de suprafacturare."
    },
    {
      question: "Ce indică un transportator care refuză GPS tracking?",
      options: ["Preocupare pentru confidențialitate", "Posibilă lipsă de transparență sau intenții negative", "Standard vechi", "Echipament învechit"],
      correctIndex: 1,
      explanation: "Transportatorii serioși acceptă tracking-ul pentru transparență și siguranță."
    },
    {
      question: "Care este un semnal de alarmă la verificarea ADR?",
      options: ["Certificat ADR al șoferului valid", "Lipsa plăcilor de pericol pe vehicul", "Echipament ADR complet", "Documentație ADR în ordine"],
      correctIndex: 1,
      explanation: "Lipsa plăcilor ADR la transport de mărfuri periculoase este ilegal și periculos."
    },
    {
      question: "Ce comportament indică un client potențial problematic?",
      options: ["Relație pe termen lung", "Schimbări frecvente ale adresei de livrare în ultima clipă", "Comenzi regulate", "Plăți la timp"],
      correctIndex: 1,
      explanation: "Schimbările de adresă în ultima clipă pot indica tentative de deturnare a mărfii."
    },
    {
      question: "Care este un red flag la condițiile de plată propuse?",
      options: ["Termeni standard 30 zile", "Cererea de plată la termenul de 90+ zile fără istorc", "Plată conform contractului", "Termeni flexibili discutați"],
      correctIndex: 1,
      explanation: "Termene foarte lungi fără relație anterioară pot indica probleme financiare."
    },
    {
      question: "Ce indică discrepanțe între CMR și factura proforma?",
      options: ["Eroare administrativă minoră", "Posibilă fraudă sau probleme vamale", "Normal în transport", "Diferențe de format"],
      correctIndex: 1,
      explanation: "Discrepanțele pot indica declarații false sau tentative de fraudă vamală."
    },
    {
      question: "Care este un semnal de alarmă la contactul cu un nou furnizor?",
      options: ["Răspuns prompt", "Număr de telefon care nu corespunde țării declarate", "Email profesional", "Site web funcțional"],
      correctIndex: 1,
      explanation: "Discrepanța geografică poate indica o operațiune frauduloasă."
    },
    {
      question: "Ce comportament al transportatorului trebuie investigat?",
      options: ["Raportare regulată", "Opriri neplanificate frecvente fără explicație clară", "Comunicare proactivă", "Respectarea rutei"],
      correctIndex: 1,
      explanation: "Opririle neexplicate pot indica transbordări sau alte probleme."
    },
    {
      question: "Care este un red flag în contractul de transport?",
      options: ["Clauze standard de limitare a răspunderii", "Absența oricărei răspunderi pentru transportator", "Termeni și condiții clare", "Jurisdicție specificată"],
      correctIndex: 1,
      explanation: "Contractul fără răspundere pentru transportator este suspect și dezavantajos."
    },
    {
      question: "Ce indică un client care insistă pe rute specifice neobișnuite?",
      options: ["Cunoașterea zonei", "Posibile activități ilicite", "Optimizare rută", "Preferință personală"],
      correctIndex: 1,
      explanation: "Insistența pe rute neobișnuite poate indica scopuri ascunse."
    },
    {
      question: "Care semnal de alarmă apare la verificarea anuală a partenerilor?",
      options: ["Documente actualizate", "Refuzul de a furniza documente actualizate", "Comunicare deschisă", "Cooperare normală"],
      correctIndex: 1,
      explanation: "Refuzul actualizării documentelor poate indica expirarea sau problemele acestora."
    },
    {
      question: "Ce indică un transportator care oferă mereu vehicul disponibil instant?",
      options: ["Flotă bine gestionată", "Posibilă lipsă de activitate sau flotă dubioasă", "Eficiență operațională", "Capacitate mare"],
      correctIndex: 1,
      explanation: "Disponibilitatea constantă poate indica probleme de business sau operațiune fictivă."
    },
    {
      question: "Care este un red flag la recepția mărfii?",
      options: ["Marfă ambalată corect", "Sigilii rupte sau lipsă", "Cantitate conformă", "Documente complete"],
      correctIndex: 1,
      explanation: "Sigiliile compromise indică posibilă manipulare sau furt în timpul transportului."
    },
    {
      question: "Ce comportament la încărcare trebuie raportat?",
      options: ["Verificare normală", "Presiune de a pleca fără verificarea mărfii", "Documentație corectă", "Timp adecvat de încărcare"],
      correctIndex: 1,
      explanation: "Presiunea de a pleca fără verificare poate indica marfă diferită sau probleme."
    },
    {
      question: "Care este un semnal de alarmă privind asigurarea transportatorului?",
      options: ["Poliță validă la zi", "Asigurator necunoscut sau fără rating", "Limite adecvate", "Documente originale"],
      correctIndex: 1,
      explanation: "Asiguratorii necunoscuți pot să nu plătească în caz de daune."
    },
    {
      question: "Ce indică un client care schimbă frecvent persoana de contact?",
      options: ["Echipă mare", "Posibilă dezorganizare sau tentativă de evitare a responsabilității", "Creștere rapidă", "Diverse departamente"],
      correctIndex: 1,
      explanation: "Schimbările frecvente pot indica probleme organizaționale sau evitarea răspunderii."
    }
  ],
  de: [
    {
      question: "Was ist das wichtigste Warnsignal bei einem neuen Spediteur?",
      options: ["Wettbewerbsfähiger Preis", "Fehlende gültige CMR-Versicherung", "Kleine Flotte", "Schnelle Antwort"],
      correctIndex: 1,
      explanation: "Fehlende gültige CMR-Versicherung setzt bei Schäden großen finanziellen Risiken aus."
    },
    {
      question: "Was deutet ein deutlich unter Markt liegender Preis an?",
      options: ["Ausgezeichnetes Angebot", "Möglicher Betrug oder minderwertiger Service", "Effizienter Spediteur", "Rechenfehler"],
      correctIndex: 1,
      explanation: "Ungewöhnlich niedrige Preise können auf Betrug, ungeeignete Fahrzeuge oder Regelverstöße hindeuten."
    },
    {
      question: "Was ist ein großes Warnsignal in Transportdokumenten?",
      options: ["Dokument im digitalen Format", "Fehlende Stempel oder Unterschriften", "Dokument in Englisch", "Mehrere Seiten"],
      correctIndex: 1,
      explanation: "Fehlende Stempel und Unterschriften können das Dokument ungültig machen und rechtliche Probleme verursachen."
    },
    {
      question: "Welches Warnsignal sollte der Disponent bei einem Neukunden beachten?",
      options: ["Dringender Transportbedarf", "Weigerung, Standardvertrag zu unterschreiben", "Detaillierte Angebotsanfrage", "Fragen zu Dienstleistungen"],
      correctIndex: 1,
      explanation: "Die Verweigerung des Standardvertrags kann auf Absicht hindeuten, Verpflichtungen zu umgehen."
    },
    {
      question: "Welches Fahrerverhalten ist ein Warnsignal?",
      options: ["Häufige Kommunikation", "Längere Nichterreichbarkeit bei Anrufen", "Einhaltung der Ruhezeiten", "Problemmeldungen"],
      correctIndex: 1,
      explanation: "Fehlende Kommunikation kann auf ernste Probleme hindeuten: Unfall, Diebstahl, Aufgabe."
    },
    {
      question: "Was deutet die Forderung nach 100% Vorauszahlung von einem Neukunden an?",
      options: ["Seriöser Kunde", "Mögliche Vertrauens- oder Betrugsprobleme", "Branchenstandard", "Großkunde"],
      correctIndex: 1,
      explanation: "Die Forderung nach 100% Vorauszahlung von Neukunden kann ein Zeichen für betrügerische Übernahme sein."
    },
    {
      question: "Was ist ein Warnsignal bei der Spediteurprüfung?",
      options: ["Gültige Gemeinschaftslizenz", "Generische E-Mail-Adresse (gmail, yahoo)", "Nachgewiesene Erfahrung", "Überprüfbare Referenzen"],
      correctIndex: 1,
      explanation: "Professionelle Spediteure sollten E-Mail mit eigener Firmendomain haben."
    },
    {
      question: "Was deutet häufiger Wechsel von angekündigtem Fahrzeug oder Fahrer an?",
      options: ["Große Flotte", "Mögliche Desorganisation oder Betrugsversuch", "Flexibilität", "Betriebliche Effizienz"],
      correctIndex: 1,
      explanation: "Häufige Wechsel können auf organisatorische Probleme oder unautorisierte Ersetzungsversuche hindeuten."
    },
    {
      question: "Was ist ein Warnsignal in der Kundenkommunikation?",
      options: ["Detaillierte Antworten", "Vermeidung von Fragen zu Wareneigenschaften", "Anforderung von Updates", "Normale Verhandlung"],
      correctIndex: 1,
      explanation: "Vermeidung von Warendetails kann auf falsche Angaben oder problematische Waren hindeuten."
    },
    {
      question: "Welches Warnsignal erscheint bei einer vorgeschlagenen Route?",
      options: ["Standard-Direktroute", "Unerklärliche Transitpunkte", "Hauptautobahnen nutzen", "Normale Entfernung"],
      correctIndex: 1,
      explanation: "Ungerechtfertigte Transitpunkte können auf unautorisierte Umladungen hindeuten."
    },
    {
      question: "Was ist ein Warnsignal bei der Fahrzeugprüfung?",
      options: ["Sauberes Fahrzeug", "Beschädigte oder unleserliche Nummernschilder", "Sichtbare TIR-Plakette", "Sichtbare Versicherung"],
      correctIndex: 1,
      explanation: "Beschädigte Schilder können auf gestohlenes Fahrzeug oder Zulassungsprobleme hindeuten."
    },
    {
      question: "Was deutet die dringende Zahlungsanforderung über unkonventionelle Methoden an?",
      options: ["Legitimer Bedarf", "Möglicher Betrug", "Normale Politik", "Guter Cashflow"],
      correctIndex: 1,
      explanation: "Dringende Zahlung über unkonventionelle Methoden (Crypto, Western Union) ist Betrugszeichen."
    },
    {
      question: "Welches Kundenverhalten deutet auf potenzielle Probleme hin?",
      options: ["Vorausplanung", "Extremer Druck für Bestätigungen ohne Dokumente", "Klare Kommunikation", "Vernünftige Flexibilität"],
      correctIndex: 1,
      explanation: "Druck für Bestätigungen ohne Dokumentation kann auf Betrugsversuch hindeuten."
    },
    {
      question: "Welches Warnsignal erscheint bei Ladebedingungen?",
      options: ["Ausreichend Ladezeit", "Versenderverweigung der Warenprüfung", "Vorbereitete Dokumente", "Hilfspersonal verfügbar"],
      correctIndex: 1,
      explanation: "Prüfungsverweigerung kann auf andere Ware als deklariert oder rechtliche Probleme hindeuten."
    },
    {
      question: "Was ist ein großes Warnsignal bei der Rechnungsstellung?",
      options: ["Rechnung gemäß Angebot", "Unterschiedliche Beträge ohne Erklärung", "Standard-Zahlungsbedingungen", "Vollständige Rechnung"],
      correctIndex: 1,
      explanation: "Unerklärte unterschiedliche Beträge können auf Fehler oder Überrechnungsversuche hindeuten."
    },
    {
      question: "Was deutet ein Spediteur an, der GPS-Tracking ablehnt?",
      options: ["Datenschutzbedenken", "Mögliche mangelnde Transparenz oder negative Absichten", "Alter Standard", "Veraltete Ausrüstung"],
      correctIndex: 1,
      explanation: "Seriöse Spediteure akzeptieren Tracking für Transparenz und Sicherheit."
    },
    {
      question: "Was ist ein Warnsignal bei der ADR-Prüfung?",
      options: ["Gültiges Fahrer-ADR-Zertifikat", "Fehlende Gefahrenschilder am Fahrzeug", "Vollständige ADR-Ausrüstung", "ADR-Dokumentation in Ordnung"],
      correctIndex: 1,
      explanation: "Fehlende ADR-Schilder bei Gefahrguttransport ist illegal und gefährlich."
    },
    {
      question: "Welches Verhalten deutet auf einen potenziell problematischen Kunden hin?",
      options: ["Langfristige Beziehung", "Häufige Last-Minute-Änderungen der Lieferadresse", "Regelmäßige Bestellungen", "Pünktliche Zahlungen"],
      correctIndex: 1,
      explanation: "Last-Minute-Adressänderungen können auf Warenumleitung hindeuten."
    },
    {
      question: "Was ist ein Warnsignal bei vorgeschlagenen Zahlungsbedingungen?",
      options: ["Standard 30 Tage", "90+ Tage Zahlungsfrist ohne Historie", "Zahlung gemäß Vertrag", "Besprochene flexible Bedingungen"],
      correctIndex: 1,
      explanation: "Sehr lange Fristen ohne vorherige Beziehung können auf Finanzprobleme hindeuten."
    },
    {
      question: "Was deuten Abweichungen zwischen CMR und Proforma-Rechnung an?",
      options: ["Geringfügiger Verwaltungsfehler", "Möglicher Betrug oder Zollprobleme", "Normal im Transport", "Formatunterschiede"],
      correctIndex: 1,
      explanation: "Abweichungen können auf Falscherklärungen oder Zollbetrugsversuche hindeuten."
    },
    {
      question: "Was ist ein Warnsignal beim Kontakt mit einem neuen Lieferanten?",
      options: ["Prompte Antwort", "Telefonnummer passt nicht zum deklarierten Land", "Professionelle E-Mail", "Funktionierende Website"],
      correctIndex: 1,
      explanation: "Geografische Diskrepanz kann auf betrügerischen Betrieb hindeuten."
    },
    {
      question: "Welches Spediteurverhalten muss untersucht werden?",
      options: ["Regelmäßige Berichterstattung", "Häufige ungeplante Stopps ohne klare Erklärung", "Proaktive Kommunikation", "Routeneinhaltung"],
      correctIndex: 1,
      explanation: "Unerklärte Stopps können auf Umladungen oder andere Probleme hindeuten."
    },
    {
      question: "Was ist ein Warnsignal im Transportvertrag?",
      options: ["Standard-Haftungsbeschränkungsklauseln", "Fehlen jeglicher Spediteursverantwortung", "Klare AGB", "Spezifizierte Gerichtsbarkeit"],
      correctIndex: 1,
      explanation: "Vertrag ohne Spediteursverantwortung ist verdächtig und nachteilig."
    },
    {
      question: "Was deutet ein Kunde an, der auf ungewöhnliche spezifische Routen besteht?",
      options: ["Gebietskenntnis", "Mögliche illegale Aktivitäten", "Routenoptimierung", "Persönliche Vorliebe"],
      correctIndex: 1,
      explanation: "Beharren auf ungewöhnlichen Routen kann auf versteckte Zwecke hindeuten."
    },
    {
      question: "Welches Warnsignal erscheint bei der jährlichen Partnerprüfung?",
      options: ["Aktualisierte Dokumente", "Weigerung, aktualisierte Dokumente bereitzustellen", "Offene Kommunikation", "Normale Kooperation"],
      correctIndex: 1,
      explanation: "Verweigerung der Dokumentenaktualisierung kann auf Ablauf oder Probleme hindeuten."
    },
    {
      question: "Was deutet ein Spediteur an, der immer sofort Fahrzeug verfügbar hat?",
      options: ["Gut geführte Flotte", "Mögliche Inaktivität oder dubiose Flotte", "Betriebliche Effizienz", "Große Kapazität"],
      correctIndex: 1,
      explanation: "Ständige Verfügbarkeit kann auf Geschäftsprobleme oder Scheinbetrieb hindeuten."
    },
    {
      question: "Was ist ein Warnsignal beim Warenempfang?",
      options: ["Korrekt verpackte Ware", "Gebrochene oder fehlende Siegel", "Konforme Menge", "Vollständige Dokumente"],
      correctIndex: 1,
      explanation: "Kompromittierte Siegel deuten auf mögliche Manipulation oder Diebstahl während des Transports hin."
    },
    {
      question: "Welches Verhalten beim Laden muss gemeldet werden?",
      options: ["Normale Prüfung", "Druck, ohne Warenprüfung abzufahren", "Korrekte Dokumentation", "Angemessene Ladezeit"],
      correctIndex: 1,
      explanation: "Druck, ohne Prüfung abzufahren, kann auf andere Ware oder Probleme hindeuten."
    },
    {
      question: "Was ist ein Warnsignal bezüglich der Spediteurversicherung?",
      options: ["Aktuelle gültige Police", "Unbekannter Versicherer oder ohne Rating", "Angemessene Limits", "Originaldokumente"],
      correctIndex: 1,
      explanation: "Unbekannte Versicherer zahlen möglicherweise bei Schäden nicht."
    },
    {
      question: "Was deutet ein Kunde an, der häufig die Kontaktperson wechselt?",
      options: ["Großes Team", "Mögliche Desorganisation oder Verantwortungsvermeidung", "Schnelles Wachstum", "Verschiedene Abteilungen"],
      correctIndex: 1,
      explanation: "Häufige Wechsel können auf organisatorische Probleme oder Verantwortungsvermeidung hindeuten."
    }
  ],
  en: [
    {
      question: "What is the most important warning sign with a new carrier?",
      options: ["Competitive price", "Missing valid CMR insurance", "Small fleet", "Quick response"],
      correctIndex: 1,
      explanation: "Missing valid CMR insurance exposes to major financial risks in case of damage."
    },
    {
      question: "What does a price much below market indicate?",
      options: ["Excellent offer", "Possible fraud or substandard service", "Efficient carrier", "Calculation error"],
      correctIndex: 1,
      explanation: "Abnormally low prices may indicate fraud, unsuitable vehicles, or rule violations."
    },
    {
      question: "What is a major red flag in transport documents?",
      options: ["Document in digital format", "Missing stamps or signatures", "Document in English", "Multiple pages"],
      correctIndex: 1,
      explanation: "Missing stamps and signatures can invalidate the document and create legal problems."
    },
    {
      question: "What warning sign should the dispatcher notice with a new customer?",
      options: ["Urgent transport request", "Refusal to sign standard contract", "Detailed quote request", "Questions about services"],
      correctIndex: 1,
      explanation: "Refusing the standard contract may indicate intent to avoid obligations."
    },
    {
      question: "Which driver behavior is a red flag?",
      options: ["Frequent communication", "Extended lack of response to calls", "Respecting rest times", "Reporting problems"],
      correctIndex: 1,
      explanation: "Lack of communication may indicate serious problems: accident, theft, abandonment."
    },
    {
      question: "What does requesting 100% advance payment from a new client indicate?",
      options: ["Serious client", "Possible trust or fraud issues", "Industry standard", "Large client"],
      correctIndex: 1,
      explanation: "Requesting 100% advance from new client may be a sign of fraudulent takeover."
    },
    {
      question: "What is a warning sign when verifying a carrier?",
      options: ["Valid community license", "Generic email address (gmail, yahoo)", "Proven experience", "Verifiable references"],
      correctIndex: 1,
      explanation: "Professional carriers should have email with their own company domain."
    },
    {
      question: "What does frequent change of announced vehicle or driver indicate?",
      options: ["Large fleet", "Possible disorganization or fraud attempt", "Flexibility", "Operational efficiency"],
      correctIndex: 1,
      explanation: "Frequent changes may indicate organizational problems or unauthorized replacement attempts."
    },
    {
      question: "What is a red flag in customer communication?",
      options: ["Detailed answers", "Avoiding questions about cargo characteristics", "Requesting updates", "Normal negotiation"],
      correctIndex: 1,
      explanation: "Avoiding cargo details may indicate false information or problematic cargo."
    },
    {
      question: "What warning sign appears in a proposed route?",
      options: ["Standard direct route", "Inexplicable transit points", "Using main highways", "Normal distance"],
      correctIndex: 1,
      explanation: "Unjustified transit points may indicate unauthorized transshipments."
    },
    {
      question: "What is a red flag when checking a vehicle?",
      options: ["Clean vehicle", "Damaged or unreadable license plates", "Visible TIR plate", "Visible insurance"],
      correctIndex: 1,
      explanation: "Damaged plates may indicate stolen vehicle or registration problems."
    },
    {
      question: "What does urgent payment request through unconventional methods indicate?",
      options: ["Legitimate need", "Possible fraud", "Normal policy", "Good cash flow"],
      correctIndex: 1,
      explanation: "Urgent payment through unconventional methods (crypto, Western Union) is a fraud sign."
    },
    {
      question: "Which customer behavior indicates potential problems?",
      options: ["Advance planning", "Extreme pressure for confirmations without documents", "Clear communication", "Reasonable flexibility"],
      correctIndex: 1,
      explanation: "Pressure for confirmations without documentation may indicate fraud attempt."
    },
    {
      question: "What warning sign appears in loading conditions?",
      options: ["Sufficient loading time", "Shipper refusal to allow cargo verification", "Prepared documents", "Helper staff available"],
      correctIndex: 1,
      explanation: "Verification refusal may indicate cargo different from declared or legal problems."
    },
    {
      question: "What is a major red flag in invoicing?",
      options: ["Invoice per quote", "Different amounts than agreed without explanation", "Standard payment terms", "Complete invoice"],
      correctIndex: 1,
      explanation: "Unexplained different amounts may indicate errors or overcharging attempts."
    },
    {
      question: "What does a carrier refusing GPS tracking indicate?",
      options: ["Privacy concern", "Possible lack of transparency or negative intentions", "Old standard", "Outdated equipment"],
      correctIndex: 1,
      explanation: "Serious carriers accept tracking for transparency and safety."
    },
    {
      question: "What is a warning sign in ADR verification?",
      options: ["Valid driver ADR certificate", "Missing hazard placards on vehicle", "Complete ADR equipment", "ADR documentation in order"],
      correctIndex: 1,
      explanation: "Missing ADR placards when transporting dangerous goods is illegal and dangerous."
    },
    {
      question: "What behavior indicates a potentially problematic customer?",
      options: ["Long-term relationship", "Frequent last-minute delivery address changes", "Regular orders", "Timely payments"],
      correctIndex: 1,
      explanation: "Last-minute address changes may indicate cargo diversion attempts."
    },
    {
      question: "What is a red flag in proposed payment terms?",
      options: ["Standard 30 days", "Request for 90+ day terms without history", "Payment per contract", "Discussed flexible terms"],
      correctIndex: 1,
      explanation: "Very long terms without prior relationship may indicate financial problems."
    },
    {
      question: "What do discrepancies between CMR and proforma invoice indicate?",
      options: ["Minor administrative error", "Possible fraud or customs problems", "Normal in transport", "Format differences"],
      correctIndex: 1,
      explanation: "Discrepancies may indicate false declarations or customs fraud attempts."
    },
    {
      question: "What is a warning sign when contacting a new supplier?",
      options: ["Prompt response", "Phone number doesn't match declared country", "Professional email", "Functioning website"],
      correctIndex: 1,
      explanation: "Geographic discrepancy may indicate a fraudulent operation."
    },
    {
      question: "What carrier behavior must be investigated?",
      options: ["Regular reporting", "Frequent unplanned stops without clear explanation", "Proactive communication", "Route adherence"],
      correctIndex: 1,
      explanation: "Unexplained stops may indicate transshipments or other problems."
    },
    {
      question: "What is a red flag in the transport contract?",
      options: ["Standard liability limitation clauses", "Absence of any carrier responsibility", "Clear terms and conditions", "Specified jurisdiction"],
      correctIndex: 1,
      explanation: "Contract without carrier responsibility is suspicious and disadvantageous."
    },
    {
      question: "What does a customer insisting on unusual specific routes indicate?",
      options: ["Area knowledge", "Possible illicit activities", "Route optimization", "Personal preference"],
      correctIndex: 1,
      explanation: "Insistence on unusual routes may indicate hidden purposes."
    },
    {
      question: "What warning sign appears in annual partner verification?",
      options: ["Updated documents", "Refusal to provide updated documents", "Open communication", "Normal cooperation"],
      correctIndex: 1,
      explanation: "Document update refusal may indicate expiration or problems."
    },
    {
      question: "What does a carrier always having instant available vehicle indicate?",
      options: ["Well-managed fleet", "Possible inactivity or dubious fleet", "Operational efficiency", "Large capacity"],
      correctIndex: 1,
      explanation: "Constant availability may indicate business problems or fictitious operation."
    },
    {
      question: "What is a red flag at cargo reception?",
      options: ["Correctly packaged cargo", "Broken or missing seals", "Conforming quantity", "Complete documents"],
      correctIndex: 1,
      explanation: "Compromised seals indicate possible manipulation or theft during transport."
    },
    {
      question: "What behavior at loading must be reported?",
      options: ["Normal verification", "Pressure to leave without cargo verification", "Correct documentation", "Adequate loading time"],
      correctIndex: 1,
      explanation: "Pressure to leave without verification may indicate different cargo or problems."
    },
    {
      question: "What is a warning sign regarding carrier insurance?",
      options: ["Current valid policy", "Unknown insurer or without rating", "Adequate limits", "Original documents"],
      correctIndex: 1,
      explanation: "Unknown insurers may not pay in case of damages."
    },
    {
      question: "What does a customer frequently changing contact person indicate?",
      options: ["Large team", "Possible disorganization or responsibility avoidance attempt", "Rapid growth", "Various departments"],
      correctIndex: 1,
      explanation: "Frequent changes may indicate organizational problems or responsibility avoidance."
    }
  ]
};
