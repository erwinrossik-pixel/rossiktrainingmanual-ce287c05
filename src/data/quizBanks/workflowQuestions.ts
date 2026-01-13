import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const workflowQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Care este primul pas în procesul standard de expediere?",
      de: "Was ist der erste Schritt im Standard-Versandprozess?",
      en: "What is the first step in the standard shipping process?"
    },
    options: {
      ro: ["Încărcarea mărfii", "Primirea comenzii și verificarea detaliilor", "Facturarea clientului", "Livrarea la destinație"],
      de: ["Beladung der Ware", "Auftragseingang und Überprüfung der Details", "Rechnungsstellung an den Kunden", "Lieferung am Zielort"],
      en: ["Loading the goods", "Receiving the order and verifying details", "Invoicing the customer", "Delivery at destination"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Procesul începe întotdeauna cu primirea și verificarea comenzii pentru a asigura acuratețea informațiilor.",
      de: "Der Prozess beginnt immer mit dem Empfang und der Überprüfung des Auftrags, um die Genauigkeit der Informationen sicherzustellen.",
      en: "The process always starts with receiving and verifying the order to ensure information accuracy."
    }
  },
  {
    question: {
      ro: "Ce document trebuie verificat înainte de încărcare?",
      de: "Welches Dokument muss vor dem Beladen überprüft werden?",
      en: "Which document must be verified before loading?"
    },
    options: {
      ro: ["Doar factura", "Comanda de transport (CMR)", "Certificatul de înmatriculare", "Polița de asigurare"],
      de: ["Nur die Rechnung", "Der Frachtbrief (CMR)", "Der Zulassungsschein", "Die Versicherungspolice"],
      en: ["Only the invoice", "The transport order (CMR)", "The registration certificate", "The insurance policy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR-ul este documentul principal care trebuie verificat și completat corect înainte de încărcare.",
      de: "Der CMR-Frachtbrief ist das Hauptdokument, das vor dem Beladen überprüft und korrekt ausgefüllt werden muss.",
      en: "The CMR is the main document that must be verified and correctly completed before loading."
    }
  },
  {
    question: {
      ro: "Când trebuie confirmat statusul de încărcare către client?",
      de: "Wann sollte der Ladestatus dem Kunden bestätigt werden?",
      en: "When should the loading status be confirmed to the client?"
    },
    options: {
      ro: ["La sosirea la destinație", "Imediat după finalizarea încărcării", "La facturare", "Doar dacă clientul întreabă"],
      de: ["Bei Ankunft am Zielort", "Sofort nach Abschluss der Beladung", "Bei der Rechnungsstellung", "Nur wenn der Kunde fragt"],
      en: ["Upon arrival at destination", "Immediately after loading is complete", "At invoicing", "Only if the client asks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea proactivă este esențială - clientul trebuie informat imediat după încărcare.",
      de: "Proaktive Kommunikation ist entscheidend - der Kunde muss sofort nach dem Beladen informiert werden.",
      en: "Proactive communication is essential - the client must be informed immediately after loading."
    }
  },
  {
    question: {
      ro: "Care este ordinea corectă a etapelor de livrare?",
      de: "Was ist die richtige Reihenfolge der Lieferschritte?",
      en: "What is the correct order of delivery steps?"
    },
    options: {
      ro: ["Descărcare, semnare CMR, plecare", "Sosire, anunțare, descărcare, semnare CMR", "Semnare CMR, descărcare, plecare", "Descărcare, plecare, semnare CMR"],
      de: ["Entladen, CMR unterschreiben, Abfahrt", "Ankunft, Ankündigung, Entladen, CMR unterschreiben", "CMR unterschreiben, Entladen, Abfahrt", "Entladen, Abfahrt, CMR unterschreiben"],
      en: ["Unloading, signing CMR, departure", "Arrival, notification, unloading, signing CMR", "Signing CMR, unloading, departure", "Unloading, departure, signing CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Procedura corectă include anunțarea sosirii, descărcarea și semnarea CMR înainte de plecare.",
      de: "Das korrekte Verfahren umfasst die Ankunftsankündigung, das Entladen und die CMR-Unterschrift vor der Abfahrt.",
      en: "The correct procedure includes arrival notification, unloading, and signing the CMR before departure."
    }
  },
  {
    question: {
      ro: "Ce trebuie verificat la recepția mărfii?",
      de: "Was muss bei der Warenannahme überprüft werden?",
      en: "What must be checked at goods reception?"
    },
    options: {
      ro: ["Doar cantitatea", "Cantitatea, starea ambalajelor și conformitatea cu documentele", "Doar facturile", "Doar starea vehiculului"],
      de: ["Nur die Menge", "Menge, Verpackungszustand und Übereinstimmung mit Dokumenten", "Nur die Rechnungen", "Nur der Fahrzeugzustand"],
      en: ["Only the quantity", "Quantity, packaging condition and document conformity", "Only the invoices", "Only the vehicle condition"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La recepție se verifică cantitatea, starea ambalajelor și conformitatea cu documentele de transport.",
      de: "Bei der Annahme werden Menge, Verpackungszustand und Übereinstimmung mit den Transportdokumenten geprüft.",
      en: "At reception, quantity, packaging condition and conformity with transport documents are checked."
    }
  },
  {
    question: {
      ro: "În ce situație se face rezervă pe CMR?",
      de: "In welcher Situation wird ein Vorbehalt auf dem CMR gemacht?",
      en: "In what situation is a reservation made on the CMR?"
    },
    options: {
      ro: ["Niciodată", "Când marfa are defecte vizibile sau lipsuri", "Doar la cererea șoferului", "Doar pentru mărfuri periculoase"],
      de: ["Niemals", "Wenn die Ware sichtbare Mängel oder Fehlmengen aufweist", "Nur auf Wunsch des Fahrers", "Nur für Gefahrgut"],
      en: ["Never", "When goods have visible defects or shortages", "Only at driver's request", "Only for dangerous goods"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rezervele pe CMR se fac când se constată diferențe de cantitate, ambalaje deteriorate sau alte anomalii.",
      de: "Vorbehalte auf dem CMR werden gemacht, wenn Mengenunterschiede, beschädigte Verpackungen oder andere Anomalien festgestellt werden.",
      en: "Reservations on the CMR are made when quantity differences, damaged packaging or other anomalies are found."
    }
  },
  {
    question: {
      ro: "Care este termenul standard pentru transmiterea documentelor după livrare?",
      de: "Was ist die Standardfrist für die Dokumentenübermittlung nach der Lieferung?",
      en: "What is the standard deadline for document transmission after delivery?"
    },
    options: {
      ro: ["30 zile", "24-48 ore", "O săptămână", "Nu există termen"],
      de: ["30 Tage", "24-48 Stunden", "Eine Woche", "Es gibt keine Frist"],
      en: ["30 days", "24-48 hours", "One week", "There is no deadline"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentele trebuie transmise în 24-48 ore pentru procesarea rapidă a plăților și evidențelor.",
      de: "Dokumente müssen innerhalb von 24-48 Stunden für die schnelle Zahlungs- und Buchhaltungsverarbeitung übermittelt werden.",
      en: "Documents must be transmitted within 24-48 hours for quick payment and records processing."
    }
  },
  {
    question: {
      ro: "Ce informații trebuie să conțină confirmarea de rezervare?",
      de: "Welche Informationen muss die Buchungsbestätigung enthalten?",
      en: "What information must the booking confirmation contain?"
    },
    options: {
      ro: ["Doar prețul", "Detalii complete: încărcare, descărcare, preț, condiții", "Doar adresele", "Doar data livrării"],
      de: ["Nur den Preis", "Vollständige Details: Beladung, Entladung, Preis, Bedingungen", "Nur die Adressen", "Nur das Lieferdatum"],
      en: ["Only the price", "Complete details: loading, unloading, price, conditions", "Only the addresses", "Only the delivery date"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Confirmarea trebuie să includă toate detaliile relevante pentru a evita neînțelegerile ulterioare.",
      de: "Die Bestätigung muss alle relevanten Details enthalten, um spätere Missverständnisse zu vermeiden.",
      en: "The confirmation must include all relevant details to avoid later misunderstandings."
    }
  },
  {
    question: {
      ro: "Cine este responsabil pentru programarea la rampe?",
      de: "Wer ist für die Rampenplanung verantwortlich?",
      en: "Who is responsible for ramp scheduling?"
    },
    options: {
      ro: ["Întotdeauna șoferul", "Disponent sau persoana desemnată conform procedurii", "Clientul final", "Expeditorul"],
      de: ["Immer der Fahrer", "Disponent oder gemäß Verfahren benannte Person", "Der Endkunde", "Der Versender"],
      en: ["Always the driver", "Dispatcher or designated person per procedure", "The end customer", "The shipper"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Programarea la rampe este responsabilitatea disponentului conform procedurilor standard.",
      de: "Die Rampenplanung liegt gemäß Standardverfahren in der Verantwortung des Disponenten.",
      en: "Ramp scheduling is the dispatcher's responsibility according to standard procedures."
    }
  },
  {
    question: {
      ro: "Ce se întâmplă dacă șoferul întârzie la încărcare?",
      de: "Was passiert, wenn der Fahrer bei der Beladung zu spät kommt?",
      en: "What happens if the driver is late for loading?"
    },
    options: {
      ro: ["Nu se ia nicio măsură", "Se anunță imediat clientul și se caută soluții", "Se anulează transportul", "Se așteaptă fără comunicare"],
      de: ["Es werden keine Maßnahmen ergriffen", "Der Kunde wird sofort informiert und Lösungen gesucht", "Der Transport wird storniert", "Man wartet ohne Kommunikation"],
      en: ["No action is taken", "Client is immediately notified and solutions are sought", "Transport is cancelled", "Wait without communication"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea proactivă a întârzierilor și căutarea soluțiilor sunt esențiale pentru relația cu clientul.",
      de: "Proaktive Kommunikation von Verspätungen und die Suche nach Lösungen sind entscheidend für die Kundenbeziehung.",
      en: "Proactive communication of delays and seeking solutions are essential for client relationships."
    }
  },
  {
    question: {
      ro: "Care este procedura pentru mărfuri cu temperatură controlată?",
      de: "Was ist das Verfahren für temperaturkontrollierte Waren?",
      en: "What is the procedure for temperature-controlled goods?"
    },
    options: {
      ro: ["Aceeași ca pentru orice marfă", "Verificare temperatură, setare corectă, monitorizare continuă", "Doar se setează temperatura", "Nu necesită procedură specială"],
      de: ["Gleich wie bei jeder Ware", "Temperaturprüfung, korrekte Einstellung, kontinuierliche Überwachung", "Nur Temperatur einstellen", "Erfordert kein spezielles Verfahren"],
      en: ["Same as for any goods", "Temperature check, correct setting, continuous monitoring", "Just set the temperature", "No special procedure required"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mărfurile cu temperatură controlată necesită verificare, setare și monitorizare continuă pe tot parcursul transportului.",
      de: "Temperaturkontrollierte Waren erfordern Prüfung, Einstellung und kontinuierliche Überwachung während des gesamten Transports.",
      en: "Temperature-controlled goods require checking, setting and continuous monitoring throughout transport."
    }
  },
  {
    question: {
      ro: "Când se completează raportul de activitate zilnic?",
      de: "Wann wird der tägliche Aktivitätsbericht ausgefüllt?",
      en: "When is the daily activity report completed?"
    },
    options: {
      ro: ["Săptămânal", "La sfârșitul fiecărei zile de lucru", "Lunar", "Doar la cerere"],
      de: ["Wöchentlich", "Am Ende jedes Arbeitstages", "Monatlich", "Nur auf Anfrage"],
      en: ["Weekly", "At the end of each working day", "Monthly", "Only on request"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Raportul de activitate se completează zilnic pentru a avea o evidență precisă a operațiunilor.",
      de: "Der Aktivitätsbericht wird täglich ausgefüllt, um eine genaue Aufzeichnung der Operationen zu haben.",
      en: "The activity report is completed daily to have accurate records of operations."
    }
  },
  {
    question: {
      ro: "Ce trebuie făcut la primirea unei reclamații?",
      de: "Was ist bei Eingang einer Beschwerde zu tun?",
      en: "What should be done when receiving a complaint?"
    },
    options: {
      ro: ["Se ignoră", "Se înregistrează, analizează și se răspunde în termenul stabilit", "Se transmite direct șoferului", "Se așteaptă să expire"],
      de: ["Ignorieren", "Erfassen, analysieren und innerhalb der festgelegten Frist antworten", "Direkt an den Fahrer weiterleiten", "Warten bis sie verfällt"],
      en: ["Ignore it", "Record, analyze and respond within the set deadline", "Forward directly to the driver", "Wait for it to expire"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reclamațiile trebuie gestionate profesional: înregistrate, analizate și rezolvate în termenul agreat.",
      de: "Beschwerden müssen professionell behandelt werden: erfassen, analysieren und innerhalb der vereinbarten Frist lösen.",
      en: "Complaints must be handled professionally: recorded, analyzed and resolved within the agreed timeframe."
    }
  },
  {
    question: {
      ro: "Care este rolul checklist-ului de plecare?",
      de: "Was ist die Rolle der Abfahrtscheckliste?",
      en: "What is the role of the departure checklist?"
    },
    options: {
      ro: ["Formailitate birocratică", "Verificarea sistematică a tuturor aspectelor înainte de plecare", "Doar pentru audit", "Opțional"],
      de: ["Bürokratische Formalität", "Systematische Überprüfung aller Aspekte vor der Abfahrt", "Nur für Audit", "Optional"],
      en: ["Bureaucratic formality", "Systematic verification of all aspects before departure", "Only for audit", "Optional"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Checklist-ul asigură că toate aspectele importante sunt verificate înainte de începerea transportului.",
      de: "Die Checkliste stellt sicher, dass alle wichtigen Aspekte vor Beginn des Transports überprüft werden.",
      en: "The checklist ensures all important aspects are verified before starting the transport."
    }
  },
  {
    question: {
      ro: "Cum se gestionează modificările de ultimă oră ale comenzii?",
      de: "Wie werden kurzfristige Auftragsänderungen gehandhabt?",
      en: "How are last-minute order changes managed?"
    },
    options: {
      ro: ["Se refuză automat", "Se analizează fezabilitatea și se confirmă în scris modificările acceptate", "Se acceptă verbal", "Se ignoră"],
      de: ["Automatisch ablehnen", "Machbarkeit analysieren und akzeptierte Änderungen schriftlich bestätigen", "Mündlich akzeptieren", "Ignorieren"],
      en: ["Automatically refuse", "Analyze feasibility and confirm accepted changes in writing", "Accept verbally", "Ignore"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Modificările trebuie analizate pentru fezabilitate și confirmate în scris pentru a evita disputele.",
      de: "Änderungen müssen auf Machbarkeit geprüft und schriftlich bestätigt werden, um Streitigkeiten zu vermeiden.",
      en: "Changes must be analyzed for feasibility and confirmed in writing to avoid disputes."
    }
  },
  {
    question: {
      ro: "Ce reprezintă ETA în contextul transporturilor?",
      de: "Was bedeutet ETA im Transportkontext?",
      en: "What does ETA represent in transport context?"
    },
    options: {
      ro: ["Estimare timp plecare", "Estimated Time of Arrival - ora estimată de sosire", "Echipament transport auto", "Evaluare transport auto"],
      de: ["Geschätzte Abfahrtszeit", "Estimated Time of Arrival - geschätzte Ankunftszeit", "Auto-Transport-Ausrüstung", "Auto-Transport-Bewertung"],
      en: ["Estimated time departure", "Estimated Time of Arrival", "Equipment transport auto", "Evaluation transport auto"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ETA înseamnă Estimated Time of Arrival - ora estimată când vehiculul va ajunge la destinație.",
      de: "ETA bedeutet Estimated Time of Arrival - die geschätzte Zeit, wann das Fahrzeug am Zielort ankommt.",
      en: "ETA means Estimated Time of Arrival - the estimated time when the vehicle will arrive at destination."
    }
  },
  {
    question: {
      ro: "Care este procedura pentru marfă refuzată?",
      de: "Was ist das Verfahren für abgelehnte Ware?",
      en: "What is the procedure for refused goods?"
    },
    options: {
      ro: ["Se lasă la destinație", "Se documentează refuzul, se notifică expeditorul și se așteaptă instrucțiuni", "Se returnează imediat", "Se distruge marfa"],
      de: ["Am Zielort lassen", "Ablehnung dokumentieren, Absender benachrichtigen und auf Anweisungen warten", "Sofort zurücksenden", "Ware vernichten"],
      en: ["Leave at destination", "Document refusal, notify shipper and await instructions", "Return immediately", "Destroy the goods"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marfa refuzată trebuie documentată și expeditorul notificat pentru instrucțiuni privind pașii următori.",
      de: "Abgelehnte Ware muss dokumentiert und der Absender für Anweisungen zu den nächsten Schritten benachrichtigt werden.",
      en: "Refused goods must be documented and the shipper notified for instructions on next steps."
    }
  },
  {
    question: {
      ro: "Ce informații se transmit în status update-urile standard?",
      de: "Welche Informationen werden in Standard-Statusaktualisierungen übermittelt?",
      en: "What information is transmitted in standard status updates?"
    },
    options: {
      ro: ["Doar locația", "Locație, status, ETA, eventuale probleme", "Doar ora", "Doar problemele"],
      de: ["Nur der Standort", "Standort, Status, ETA, eventuelle Probleme", "Nur die Zeit", "Nur die Probleme"],
      en: ["Only location", "Location, status, ETA, any issues", "Only time", "Only problems"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Update-urile complete includ locația actuală, statusul încărcăturii, ETA și orice probleme întâmpinate.",
      de: "Vollständige Updates umfassen den aktuellen Standort, den Ladungsstatus, die ETA und alle aufgetretenen Probleme.",
      en: "Complete updates include current location, cargo status, ETA and any issues encountered."
    }
  },
  {
    question: {
      ro: "Când se finalizează dosarul unui transport?",
      de: "Wann wird eine Transportakte abgeschlossen?",
      en: "When is a transport file finalized?"
    },
    options: {
      ro: ["La încărcare", "După primirea CMR semnat și confirmarea facturării", "La descărcare", "Nu se finalizează niciodată"],
      de: ["Beim Beladen", "Nach Erhalt des unterschriebenen CMR und Rechnungsbestätigung", "Beim Entladen", "Wird nie abgeschlossen"],
      en: ["At loading", "After receiving signed CMR and invoicing confirmation", "At unloading", "Never finalized"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dosarul este complet când toate documentele sunt primite și procesul de facturare este finalizat.",
      de: "Die Akte ist vollständig, wenn alle Dokumente eingegangen sind und der Rechnungsprozess abgeschlossen ist.",
      en: "The file is complete when all documents are received and the invoicing process is finalized."
    }
  },
  {
    question: {
      ro: "Care este frecvența recomandată pentru comunicarea cu șoferul pe traseu?",
      de: "Was ist die empfohlene Häufigkeit der Kommunikation mit dem Fahrer unterwegs?",
      en: "What is the recommended frequency for communication with the driver en route?"
    },
    options: {
      ro: ["O dată pe săptămână", "La fiecare punct cheie și minimum de 2 ori pe zi", "Doar la probleme", "Niciodată"],
      de: ["Einmal pro Woche", "An jedem Schlüsselpunkt und mindestens 2 Mal täglich", "Nur bei Problemen", "Niemals"],
      en: ["Once a week", "At each key point and minimum 2 times per day", "Only for problems", "Never"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicarea regulată la punctele cheie și de minimum 2 ori pe zi asigură controlul și răspunsul rapid la situații.",
      de: "Regelmäßige Kommunikation an Schlüsselpunkten und mindestens 2 Mal täglich gewährleistet Kontrolle und schnelle Reaktion auf Situationen.",
      en: "Regular communication at key points and minimum 2 times daily ensures control and quick response to situations."
    }
  },
  {
    question: {
      ro: "Ce se verifică la sfârșitul turului de lucru?",
      de: "Was wird am Ende der Arbeitsschicht überprüft?",
      en: "What is checked at the end of the work shift?"
    },
    options: {
      ro: ["Nimic", "Toate transporturile active, documente pendinte, comunicări primite", "Doar emailurile", "Doar apelurile"],
      de: ["Nichts", "Alle aktiven Transporte, ausstehende Dokumente, eingegangene Kommunikation", "Nur E-Mails", "Nur Anrufe"],
      en: ["Nothing", "All active transports, pending documents, received communications", "Only emails", "Only calls"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La finalul turei se verifică statusul tuturor transporturilor, documentele restante și comunicările pentru transfer eficient.",
      de: "Am Ende der Schicht werden der Status aller Transporte, ausstehende Dokumente und Kommunikation für einen effizienten Transfer überprüft.",
      en: "At the end of the shift, status of all transports, pending documents and communications are checked for efficient handover."
    }
  },
  {
    question: {
      ro: "Cum se prioritizează transporturile în caz de resurse limitate?",
      de: "Wie werden Transporte bei begrenzten Ressourcen priorisiert?",
      en: "How are transports prioritized in case of limited resources?"
    },
    options: {
      ro: ["Primul venit, primul servit", "După urgență, valoare și relația cu clientul", "Aleator", "După mărimea companiei client"],
      de: ["Wer zuerst kommt, mahlt zuerst", "Nach Dringlichkeit, Wert und Kundenbeziehung", "Zufällig", "Nach Größe des Kundenunternehmens"],
      en: ["First come, first served", "By urgency, value and client relationship", "Randomly", "By client company size"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prioritizarea se face după criterii clare: urgența livrării, valoarea transportului și importanța relației cu clientul.",
      de: "Die Priorisierung erfolgt nach klaren Kriterien: Dringlichkeit der Lieferung, Transportwert und Wichtigkeit der Kundenbeziehung.",
      en: "Prioritization is done by clear criteria: delivery urgency, transport value and importance of client relationship."
    }
  },
  {
    question: {
      ro: "Ce reprezintă KPI-ul 'On Time Delivery'?",
      de: "Was bedeutet der KPI 'On Time Delivery'?",
      en: "What does the 'On Time Delivery' KPI represent?"
    },
    options: {
      ro: ["Costul pe livrare", "Procentul livrărilor efectuate la timpul promis", "Timpul de încărcare", "Numărul de livrări"],
      de: ["Kosten pro Lieferung", "Prozentsatz der Lieferungen zum versprochenen Zeitpunkt", "Ladezeit", "Anzahl der Lieferungen"],
      en: ["Cost per delivery", "Percentage of deliveries made at the promised time", "Loading time", "Number of deliveries"]
    },
    correctIndex: 1,
    explanation: {
      ro: "On Time Delivery măsoară procentul livrărilor efectuate în intervalul de timp agreat cu clientul.",
      de: "On Time Delivery misst den Prozentsatz der Lieferungen, die im vereinbarten Zeitrahmen mit dem Kunden durchgeführt wurden.",
      en: "On Time Delivery measures the percentage of deliveries made within the time frame agreed with the client."
    }
  },
  {
    question: {
      ro: "Care este procedura pentru preluarea unui transport de la un alt disponent?",
      de: "Was ist das Verfahren zur Übernahme eines Transports von einem anderen Disponenten?",
      en: "What is the procedure for taking over a transport from another dispatcher?"
    },
    options: {
      ro: ["Se așteaptă să vină informațiile", "Briefing complet, verificare documente, confirmare status", "Se ignoră istoricul", "Se începe de la zero"],
      de: ["Auf Informationen warten", "Vollständiges Briefing, Dokumentenprüfung, Statusbestätigung", "Historie ignorieren", "Von vorne beginnen"],
      en: ["Wait for information to come", "Complete briefing, document verification, status confirmation", "Ignore history", "Start from scratch"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Preluarea necesită un briefing complet, verificarea tuturor documentelor și confirmarea statusului curent.",
      de: "Die Übernahme erfordert ein vollständiges Briefing, Überprüfung aller Dokumente und Bestätigung des aktuellen Status.",
      en: "Takeover requires a complete briefing, verification of all documents and confirmation of current status."
    }
  },
  {
    question: {
      ro: "Ce sistem se folosește pentru urmărirea transporturilor?",
      de: "Welches System wird zur Transportverfolgung verwendet?",
      en: "What system is used for transport tracking?"
    },
    options: {
      ro: ["Doar telefon", "TMS (Transport Management System) integrat cu GPS", "Doar email", "Doar hărți fizice"],
      de: ["Nur Telefon", "TMS (Transport Management System) integriert mit GPS", "Nur E-Mail", "Nur physische Karten"],
      en: ["Only phone", "TMS (Transport Management System) integrated with GPS", "Only email", "Only physical maps"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sistemele TMS moderne integrate cu GPS permit urmărirea în timp real și gestionarea eficientă a flotei.",
      de: "Moderne TMS-Systeme mit GPS-Integration ermöglichen Echtzeit-Tracking und effizientes Flottenmanagement.",
      en: "Modern TMS systems integrated with GPS enable real-time tracking and efficient fleet management."
    }
  },
  {
    question: {
      ro: "Când se escaladează o problemă către management?",
      de: "Wann wird ein Problem an das Management eskaliert?",
      en: "When is an issue escalated to management?"
    },
    options: {
      ro: ["Niciodată", "Când depășește competențele sau are impact major", "Întotdeauna", "Doar la final de lună"],
      de: ["Niemals", "Wenn es die Kompetenzen übersteigt oder große Auswirkungen hat", "Immer", "Nur am Monatsende"],
      en: ["Never", "When it exceeds competencies or has major impact", "Always", "Only at month end"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Escaladarea se face când problema depășește autoritatea decizională sau poate avea consecințe majore pentru afacere.",
      de: "Die Eskalation erfolgt, wenn das Problem die Entscheidungsbefugnis übersteigt oder große Geschäftsauswirkungen haben könnte.",
      en: "Escalation is done when the issue exceeds decision-making authority or could have major business consequences."
    }
  },
  {
    question: {
      ro: "Care este timpul maxim de răspuns la o cerere urgentă a clientului?",
      de: "Was ist die maximale Reaktionszeit auf eine dringende Kundenanfrage?",
      en: "What is the maximum response time to an urgent client request?"
    },
    options: {
      ro: ["24 ore", "15-30 minute", "O săptămână", "Nu există termen"],
      de: ["24 Stunden", "15-30 Minuten", "Eine Woche", "Es gibt keine Frist"],
      en: ["24 hours", "15-30 minutes", "One week", "There is no deadline"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cererile urgente necesită răspuns în 15-30 minute pentru a menține relația profesională cu clientul.",
      de: "Dringende Anfragen erfordern eine Antwort innerhalb von 15-30 Minuten, um die professionelle Kundenbeziehung aufrechtzuerhalten.",
      en: "Urgent requests require a response within 15-30 minutes to maintain the professional client relationship."
    }
  },
  {
    question: {
      ro: "Ce conține planul de contingență pentru un transport?",
      de: "Was enthält der Notfallplan für einen Transport?",
      en: "What does the contingency plan for a transport contain?"
    },
    options: {
      ro: ["Doar contacte de urgență", "Alternative de transport, contacte backup, proceduri de criză", "Doar prețuri", "Nimic specific"],
      de: ["Nur Notfallkontakte", "Transportalternativen, Backup-Kontakte, Krisenverfahren", "Nur Preise", "Nichts Spezifisches"],
      en: ["Only emergency contacts", "Transport alternatives, backup contacts, crisis procedures", "Only prices", "Nothing specific"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Planul de contingență include alternative de transport, contacte de backup și proceduri clare pentru situații de criză.",
      de: "Der Notfallplan umfasst Transportalternativen, Backup-Kontakte und klare Verfahren für Krisensituationen.",
      en: "The contingency plan includes transport alternatives, backup contacts and clear procedures for crisis situations."
    }
  },
  {
    question: {
      ro: "Cum se gestionează feedback-ul pozitiv de la client?",
      de: "Wie wird positives Kundenfeedback gehandhabt?",
      en: "How is positive client feedback managed?"
    },
    options: {
      ro: ["Se ignoră", "Se documentează, se mulțumește și se transmite echipei", "Se șterge", "Se răspunde doar dacă e negativ"],
      de: ["Ignorieren", "Dokumentieren, danken und an das Team weitergeben", "Löschen", "Nur antworten wenn negativ"],
      en: ["Ignore it", "Document, thank and share with team", "Delete it", "Only respond if negative"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Feedback-ul pozitiv trebuie documentat, mulțumit clientului și comunicat echipei pentru motivare.",
      de: "Positives Feedback muss dokumentiert, dem Kunden gedankt und zur Motivation an das Team weitergegeben werden.",
      en: "Positive feedback must be documented, client thanked and shared with the team for motivation."
    }
  },
  {
    question: {
      ro: "Care este diferența între grupaj și transport complet?",
      de: "Was ist der Unterschied zwischen Sammelgut und Komplettladung?",
      en: "What is the difference between groupage and full load?"
    },
    options: {
      ro: ["Nu există diferență", "Grupajul combină mărfuri de la mai mulți clienți, FTL este pentru un singur client", "Grupajul e mai scump", "FTL e întotdeauna internațional"],
      de: ["Es gibt keinen Unterschied", "Sammelgut kombiniert Waren mehrerer Kunden, FTL ist für einen Kunden", "Sammelgut ist teurer", "FTL ist immer international"],
      en: ["There is no difference", "Groupage combines goods from multiple clients, FTL is for single client", "Groupage is more expensive", "FTL is always international"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Grupajul (LTL) combină mărfuri de la mai mulți expeditori, în timp ce FTL este un transport dedicat pentru un singur client.",
      de: "Sammelgut (LTL) kombiniert Waren mehrerer Versender, während FTL ein dedizierter Transport für einen einzelnen Kunden ist.",
      en: "Groupage (LTL) combines goods from multiple shippers, while FTL is a dedicated transport for a single client."
    }
  }
];

export function getRandomWorkflowQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...workflowQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
