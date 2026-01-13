import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const claimsQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce este o reclamație în contextul transportului?",
      de: "Was ist eine Reklamation im Transportkontext?",
      en: "What is a claim in the transport context?"
    },
    options: {
      ro: ["O cerere de informații", "O solicitare formală de despăgubire pentru pagube sau neconformități", "O factură", "Un contract"],
      de: ["Eine Informationsanfrage", "Ein formeller Entschädigungsantrag für Schäden oder Nichtkonformität", "Eine Rechnung", "Ein Vertrag"],
      en: ["An information request", "A formal compensation request for damages or non-conformity", "An invoice", "A contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reclamația este cererea oficială prin care se solicită compensare pentru pierderi, daune sau neîndeplinirea obligațiilor.",
      de: "Eine Reklamation ist der offizielle Antrag auf Entschädigung für Verluste, Schäden oder Nichterfüllung von Verpflichtungen.",
      en: "A claim is the official request for compensation for losses, damages or non-fulfillment of obligations."
    }
  },
  {
    question: {
      ro: "În ce termen trebuie notificată o pagubă vizibilă conform CMR?",
      de: "In welcher Frist muss ein sichtbarer Schaden gemäß CMR gemeldet werden?",
      en: "Within what term must visible damage be notified according to CMR?"
    },
    options: {
      ro: ["30 zile", "Imediat la livrare (rezerve pe CMR)", "1 an", "Nu există termen"],
      de: ["30 Tage", "Sofort bei Lieferung (Vorbehalte auf CMR)", "1 Jahr", "Keine Frist"],
      en: ["30 days", "Immediately upon delivery (reservations on CMR)", "1 year", "No deadline"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pagubele vizibile trebuie notate pe CMR la momentul livrării pentru a fi valide.",
      de: "Sichtbare Schäden müssen zum Zeitpunkt der Lieferung auf dem CMR vermerkt werden, um gültig zu sein.",
      en: "Visible damages must be noted on the CMR at the time of delivery to be valid."
    }
  },
  {
    question: {
      ro: "Care este termenul pentru notificarea pagubelor ascunse conform CMR?",
      de: "Was ist die Frist für die Meldung versteckter Schäden gemäß CMR?",
      en: "What is the deadline for notifying hidden damages according to CMR?"
    },
    options: {
      ro: ["Imediat", "7 zile de la livrare", "30 zile", "1 an"],
      de: ["Sofort", "7 Tage nach Lieferung", "30 Tage", "1 Jahr"],
      en: ["Immediately", "7 days from delivery", "30 days", "1 year"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pagubele neaparente trebuie notificate în scris în maximum 7 zile de la livrare.",
      de: "Nicht sichtbare Schäden müssen innerhalb von maximal 7 Tagen nach der Lieferung schriftlich gemeldet werden.",
      en: "Non-apparent damages must be notified in writing within maximum 7 days from delivery."
    }
  },
  {
    question: {
      ro: "Ce documente sunt necesare pentru susținerea unei reclamații?",
      de: "Welche Dokumente sind zur Begründung einer Reklamation erforderlich?",
      en: "What documents are needed to support a claim?"
    },
    options: {
      ro: ["Doar factura", "CMR cu rezerve, fotografii, facturi, raport daune, corespondență", "Doar emailuri", "Niciun document"],
      de: ["Nur Rechnung", "CMR mit Vorbehalten, Fotos, Rechnungen, Schadenbericht, Korrespondenz", "Nur E-Mails", "Keine Dokumente"],
      en: ["Only invoice", "CMR with reservations, photos, invoices, damage report, correspondence", "Only emails", "No documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dosarul de reclamație trebuie să includă toate dovezile: CMR, fotografii, facturi și corespondență.",
      de: "Die Reklamationsakte muss alle Nachweise enthalten: CMR, Fotos, Rechnungen und Korrespondenz.",
      en: "The claim file must include all evidence: CMR, photos, invoices and correspondence."
    }
  },
  {
    question: {
      ro: "Care este limita de răspundere a transportatorului conform CMR?",
      de: "Was ist die Haftungsgrenze des Frachtführers gemäß CMR?",
      en: "What is the carrier's liability limit according to CMR?"
    },
    options: {
      ro: ["Nelimitată", "8.33 SDR per kg de marfă pierdută/avariată", "100 EUR per colet", "Valoarea declarată"],
      de: ["Unbegrenzt", "8,33 SZR pro kg verlorener/beschädigter Ware", "100 EUR pro Packstück", "Deklarierter Wert"],
      en: ["Unlimited", "8.33 SDR per kg of lost/damaged goods", "100 EUR per package", "Declared value"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conform CMR, limita este 8.33 SDR (Drepturi Speciale de Tragere) per kilogram de marfă afectată.",
      de: "Gemäß CMR beträgt die Grenze 8,33 SZR (Sonderziehungsrechte) pro Kilogramm betroffener Ware.",
      en: "According to CMR, the limit is 8.33 SDR (Special Drawing Rights) per kilogram of affected goods."
    }
  },
  {
    question: {
      ro: "Ce este prescripția în reclamații CMR?",
      de: "Was ist die Verjährung bei CMR-Reklamationen?",
      en: "What is the limitation period for CMR claims?"
    },
    options: {
      ro: ["6 luni", "1 an (3 ani pentru dol)", "5 ani", "10 ani"],
      de: ["6 Monate", "1 Jahr (3 Jahre bei Vorsatz)", "5 Jahre", "10 Jahre"],
      en: ["6 months", "1 year (3 years for fraud)", "5 years", "10 years"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Acțiunile CMR se prescriu în 1 an, extinse la 3 ani în caz de dol sau culpă gravă.",
      de: "CMR-Ansprüche verjähren in 1 Jahr, verlängert auf 3 Jahre bei Vorsatz oder grober Fahrlässigkeit.",
      en: "CMR claims are prescribed in 1 year, extended to 3 years in case of fraud or gross negligence."
    }
  },
  {
    question: {
      ro: "Ce reprezintă o rezervă pe CMR?",
      de: "Was bedeutet ein Vorbehalt auf dem CMR?",
      en: "What does a reservation on CMR represent?"
    },
    options: {
      ro: ["O rezervare de transport", "Notarea pe document a deficiențelor constatate la primire/livrare", "O reducere de preț", "O confirmare"],
      de: ["Eine Transportbuchung", "Die Dokumentation von Mängeln bei Empfang/Lieferung", "Ein Preisnachlass", "Eine Bestätigung"],
      en: ["A transport booking", "Documentation of deficiencies found at receipt/delivery", "A price reduction", "A confirmation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Rezerva pe CMR documentează oficial orice problemă constatată și protejează drepturile de reclamație.",
      de: "Der Vorbehalt auf dem CMR dokumentiert offiziell alle festgestellten Probleme und schützt die Reklamationsrechte.",
      en: "Reservation on CMR officially documents any issues found and protects claim rights."
    }
  },
  {
    question: {
      ro: "Cine poate depune o reclamație de transport?",
      de: "Wer kann eine Transportreklamation einreichen?",
      en: "Who can file a transport claim?"
    },
    options: {
      ro: ["Doar transportatorul", "Expeditorul sau destinatarul, în funcție de drepturile din contract", "Doar asigurătorul", "Oricine"],
      de: ["Nur der Frachtführer", "Absender oder Empfänger, je nach Vertragsrechten", "Nur der Versicherer", "Jeder"],
      en: ["Only the carrier", "Shipper or consignee, depending on contract rights", "Only the insurer", "Anyone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dreptul de reclamație aparține expeditorului sau destinatarului conform prevederilor contractuale și CMR.",
      de: "Das Reklamationsrecht liegt beim Absender oder Empfänger gemäß den Vertragsbestimmungen und CMR.",
      en: "The right to claim belongs to shipper or consignee according to contract provisions and CMR."
    }
  },
  {
    question: {
      ro: "Ce tipuri de daune sunt acoperite de CMR?",
      de: "Welche Schadensarten sind durch CMR abgedeckt?",
      en: "What types of damages are covered by CMR?"
    },
    options: {
      ro: ["Doar pierdere totală", "Pierdere totală, pierdere parțială, avarie și întârziere", "Doar avarie", "Doar întârziere"],
      de: ["Nur Totalverlust", "Totalverlust, Teilverlust, Beschädigung und Verzögerung", "Nur Beschädigung", "Nur Verzögerung"],
      en: ["Only total loss", "Total loss, partial loss, damage and delay", "Only damage", "Only delay"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR acoperă pierderea totală, parțială, avarierea mărfii și prejudiciile din întârziere.",
      de: "CMR deckt Totalverlust, Teilverlust, Warenbeschädigung und Verzögerungsschäden ab.",
      en: "CMR covers total loss, partial loss, goods damage and delay damages."
    }
  },
  {
    question: {
      ro: "Cum se calculează despăgubirea pentru întârziere conform CMR?",
      de: "Wie wird die Entschädigung für Verzögerung gemäß CMR berechnet?",
      en: "How is compensation for delay calculated according to CMR?"
    },
    options: {
      ro: ["Valoarea mărfii", "Maximum prețul transportului", "Dublu prețul transportului", "Nu se despăgubește"],
      de: ["Warenwert", "Maximal der Transportpreis", "Doppelter Transportpreis", "Keine Entschädigung"],
      en: ["Goods value", "Maximum the transport price", "Double transport price", "No compensation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru întârziere, despăgubirea maximă este limitată la prețul transportului.",
      de: "Für Verzögerung ist die maximale Entschädigung auf den Transportpreis begrenzt.",
      en: "For delay, maximum compensation is limited to the transport price."
    }
  },
  {
    question: {
      ro: "Ce este subrogația în asigurări de transport?",
      de: "Was ist Subrogation in der Transportversicherung?",
      en: "What is subrogation in transport insurance?"
    },
    options: {
      ro: ["Un tip de poliță", "Dreptul asigurătorului de a prelua reclamația după despăgubire", "O primă suplimentară", "O excludere"],
      de: ["Eine Policenart", "Das Recht des Versicherers, die Reklamation nach Entschädigung zu übernehmen", "Eine Zusatzprämie", "Ein Ausschluss"],
      en: ["A policy type", "Insurer's right to take over claim after compensation", "An additional premium", "An exclusion"]
    },
    correctIndex: 1,
    explanation: {
      ro: "După plata despăgubirii, asigurătorul preia drepturile asiguratului de a recupera suma de la responsabil.",
      de: "Nach Zahlung der Entschädigung übernimmt der Versicherer die Rechte des Versicherten, den Betrag vom Verantwortlichen zurückzufordern.",
      en: "After paying compensation, insurer takes over insured's rights to recover amount from responsible party."
    }
  },
  {
    question: {
      ro: "Ce este o expertiză de daune?",
      de: "Was ist ein Schadengutachten?",
      en: "What is a damage survey?"
    },
    options: {
      ro: ["O estimare rapidă", "Evaluare profesională a daunelor de către un expert independent", "O fotografie", "Un raport verbal"],
      de: ["Eine schnelle Schätzung", "Professionelle Schadensbewertung durch einen unabhängigen Gutachter", "Ein Foto", "Ein mündlicher Bericht"],
      en: ["A quick estimate", "Professional damage assessment by independent surveyor", "A photograph", "A verbal report"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expertiza este evaluarea oficială realizată de un expert pentru a determina cauza și valoarea daunelor.",
      de: "Das Gutachten ist die offizielle Bewertung durch einen Experten zur Bestimmung von Ursache und Schadenshöhe.",
      en: "Survey is official assessment by expert to determine cause and value of damages."
    }
  },
  {
    question: {
      ro: "Ce se întâmplă dacă transportatorul refuză reclamația?",
      de: "Was passiert, wenn der Frachtführer die Reklamation ablehnt?",
      en: "What happens if the carrier refuses the claim?"
    },
    options: {
      ro: ["Se renunță", "Negociere, arbitraj sau acțiune în instanță", "Se plătește automat", "Nu se poate face nimic"],
      de: ["Aufgeben", "Verhandlung, Schiedsverfahren oder Gerichtsklage", "Automatische Zahlung", "Nichts zu machen"],
      en: ["Give up", "Negotiation, arbitration or court action", "Automatic payment", "Nothing can be done"]
    },
    correctIndex: 1,
    explanation: {
      ro: "După refuz, se poate negocia, apela la arbitraj sau acționa în instanță conform jurisdicției CMR.",
      de: "Nach Ablehnung kann verhandelt, ein Schiedsverfahren eingeleitet oder gemäß CMR-Gerichtsbarkeit geklagt werden.",
      en: "After refusal, can negotiate, appeal to arbitration or sue according to CMR jurisdiction."
    }
  },
  {
    question: {
      ro: "Ce reprezintă declarația de valoare specială?",
      de: "Was bedeutet die besondere Wertangabe?",
      en: "What does special value declaration represent?"
    },
    options: {
      ro: ["Valoarea standard", "Declararea unei valori superioare pentru a depăși limita de 8.33 SDR/kg", "Valoarea minimă", "O reducere"],
      de: ["Standardwert", "Angabe eines höheren Wertes zur Überschreitung der 8,33 SZR/kg-Grenze", "Mindestwert", "Ein Rabatt"],
      en: ["Standard value", "Declaration of higher value to exceed 8.33 SDR/kg limit", "Minimum value", "A discount"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Declarația de valoare specială permite despăgubire peste limita standard, contra unei prime suplimentare.",
      de: "Die besondere Wertangabe ermöglicht Entschädigung über die Standardgrenze hinaus gegen eine Zusatzprämie.",
      en: "Special value declaration allows compensation above standard limit, against additional premium."
    }
  },
  {
    question: {
      ro: "Care sunt cazurile de exonerare a transportatorului?",
      de: "Was sind die Haftungsausschlussgründe des Frachtführers?",
      en: "What are the carrier's exemption cases?"
    },
    options: {
      ro: ["Nu există", "Forță majoră, viciu propriu al mărfii, culpa expeditorului/destinatarului", "Doar forță majoră", "Toate situațiile"],
      de: ["Keine", "Höhere Gewalt, inhärente Mängel der Ware, Verschulden von Absender/Empfänger", "Nur höhere Gewalt", "Alle Situationen"],
      en: ["None", "Force majeure, inherent vice of goods, shipper/consignee fault", "Only force majeure", "All situations"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportatorul poate fi exonerat în cazuri de forță majoră, defecte ale mărfii sau culpa clientului.",
      de: "Der Frachtführer kann bei höherer Gewalt, Warenmängeln oder Kundenverschulden haftungsfrei gestellt werden.",
      en: "Carrier can be exempted in cases of force majeure, goods defects or customer fault."
    }
  },
  {
    question: {
      ro: "Cum se documentează o pierdere în timpul transportului?",
      de: "Wie wird ein Verlust während des Transports dokumentiert?",
      en: "How is a loss during transport documented?"
    },
    options: {
      ro: ["Verbal", "Raport scris, fotografii, inventar, declarații martori, documente oficiale", "Doar telefonic", "Nu se documentează"],
      de: ["Mündlich", "Schriftlicher Bericht, Fotos, Inventar, Zeugenaussagen, offizielle Dokumente", "Nur telefonisch", "Keine Dokumentation"],
      en: ["Verbally", "Written report, photos, inventory, witness statements, official documents", "Only by phone", "Not documented"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pierderile se documentează complet: raport, fotografii, inventar și orice alte dovezi disponibile.",
      de: "Verluste werden vollständig dokumentiert: Bericht, Fotos, Inventar und alle anderen verfügbaren Nachweise.",
      en: "Losses are fully documented: report, photos, inventory and any other available evidence."
    }
  },
  {
    question: {
      ro: "Ce este o reclamație pentru lipsă?",
      de: "Was ist eine Fehlmengenreklamation?",
      en: "What is a shortage claim?"
    },
    options: {
      ro: ["Reclamație pentru întârziere", "Reclamație când cantitatea livrată e mai mică decât cea expeditată", "Reclamație pentru calitate", "Reclamație pentru preț"],
      de: ["Verzögerungsreklamation", "Reklamation wenn gelieferte Menge kleiner als versendete", "Qualitätsreklamation", "Preisreklamation"],
      en: ["Delay claim", "Claim when delivered quantity is less than shipped", "Quality claim", "Price claim"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reclamația pentru lipsă se depune când destinatarul primește mai puține produse decât au fost expeditate.",
      de: "Eine Fehlmengenreklamation wird eingereicht, wenn der Empfänger weniger Produkte erhält als versendet wurden.",
      en: "Shortage claim is filed when consignee receives fewer products than were shipped."
    }
  },
  {
    question: {
      ro: "Ce trebuie făcut imediat după descoperirea unei avarii?",
      de: "Was muss sofort nach Entdeckung eines Schadens getan werden?",
      en: "What must be done immediately after discovering damage?"
    },
    options: {
      ro: ["Nimic", "Fotografiere, notare rezerve, informare transportator și expeditor", "Doar descărcare", "Doar semnare CMR"],
      de: ["Nichts", "Fotografieren, Vorbehalte notieren, Frachtführer und Absender informieren", "Nur entladen", "Nur CMR unterschreiben"],
      en: ["Nothing", "Photograph, note reservations, inform carrier and shipper", "Just unload", "Just sign CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La descoperirea avariei: fotografiați, notați rezerve pe CMR și informați imediat toate părțile.",
      de: "Bei Schadensentdeckung: fotografieren, Vorbehalte auf CMR notieren und alle Parteien sofort informieren.",
      en: "Upon damage discovery: photograph, note reservations on CMR and immediately inform all parties."
    }
  },
  {
    question: {
      ro: "Ce este termenul de așteptare pentru declararea pierderii totale?",
      de: "Was ist die Wartefrist zur Erklärung eines Totalverlustes?",
      en: "What is the waiting period for declaring total loss?"
    },
    options: {
      ro: ["7 zile", "30 zile de la data convenită pentru livrare", "1 an", "Imediat"],
      de: ["7 Tage", "30 Tage ab dem vereinbarten Lieferdatum", "1 Jahr", "Sofort"],
      en: ["7 days", "30 days from agreed delivery date", "1 year", "Immediately"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marfa se consideră pierdută dacă nu e livrată în 30 zile de la data convenită (60 zile fără dată).",
      de: "Ware gilt als verloren, wenn sie nicht innerhalb von 30 Tagen ab vereinbartem Datum geliefert wird (60 Tage ohne Datum).",
      en: "Goods are considered lost if not delivered within 30 days from agreed date (60 days without date)."
    }
  },
  {
    question: {
      ro: "Ce rol are fotodocumentarea în reclamații?",
      de: "Welche Rolle spielt die Fotodokumentation bei Reklamationen?",
      en: "What role does photo documentation play in claims?"
    },
    options: {
      ro: ["Opțională", "Esențială ca dovadă vizuală a stării mărfii și avariilor", "Nerelevantă", "Doar pentru statistici"],
      de: ["Optional", "Wesentlich als visueller Nachweis des Warenzustands und der Schäden", "Irrelevant", "Nur für Statistiken"],
      en: ["Optional", "Essential as visual evidence of goods condition and damages", "Irrelevant", "Only for statistics"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fotografiile sunt dovezi esențiale care arată starea mărfii la diferite etape ale transportului.",
      de: "Fotos sind wesentliche Nachweise, die den Warenzustand in verschiedenen Transportphasen zeigen.",
      en: "Photos are essential evidence showing goods condition at different transport stages."
    }
  },
  {
    question: {
      ro: "Cum se gestionează o reclamație multiplă (mai mulți transportatori)?",
      de: "Wie wird eine Mehrfachreklamation (mehrere Frachtführer) gehandhabt?",
      en: "How is a multiple claim (multiple carriers) handled?"
    },
    options: {
      ro: ["Se ignoră", "Se identifică transportatorul responsabil sau se acționează solidar", "Plătește primul", "Plătește ultimul"],
      de: ["Ignorieren", "Den verantwortlichen Frachtführer identifizieren oder solidarisch handeln", "Der Erste zahlt", "Der Letzte zahlt"],
      en: ["Ignore", "Identify responsible carrier or act jointly and severally", "First pays", "Last pays"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În transporturi succesive, se stabilește responsabilul sau transportatorii răspund solidar.",
      de: "Bei aufeinanderfolgenden Transporten wird der Verantwortliche festgestellt oder die Frachtführer haften solidarisch.",
      en: "In successive transports, responsible party is established or carriers are jointly liable."
    }
  },
  {
    question: {
      ro: "Ce este o notificare de avarie (damage notice)?",
      de: "Was ist eine Schadensmitteilung (damage notice)?",
      en: "What is a damage notice?"
    },
    options: {
      ro: ["O factură", "Comunicarea scrisă oficială a daunelor către transportator", "Un raport intern", "O poliță"],
      de: ["Eine Rechnung", "Die offizielle schriftliche Mitteilung von Schäden an den Frachtführer", "Ein interner Bericht", "Eine Police"],
      en: ["An invoice", "Official written communication of damages to carrier", "An internal report", "A policy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Notificarea de avarie este documentul oficial care informează transportatorul despre daunele constatate.",
      de: "Die Schadensmitteilung ist das offizielle Dokument, das den Frachtführer über festgestellte Schäden informiert.",
      en: "Damage notice is official document informing carrier about discovered damages."
    }
  },
  {
    question: {
      ro: "Când se implică asigurătorul în procesul de reclamație?",
      de: "Wann wird der Versicherer in den Reklamationsprozess einbezogen?",
      en: "When is the insurer involved in the claims process?"
    },
    options: {
      ro: ["Niciodată", "La depășirea franșizei sau când valoarea justifică implicarea", "Întotdeauna automat", "Doar la final"],
      de: ["Niemals", "Bei Überschreiten der Selbstbeteiligung oder wenn der Wert die Beteiligung rechtfertigt", "Immer automatisch", "Nur am Ende"],
      en: ["Never", "When exceeding deductible or when value justifies involvement", "Always automatically", "Only at the end"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Asigurătorul se implică când dauna depășește franșiza sau valoarea necesită procesarea prin asigurare.",
      de: "Der Versicherer wird einbezogen, wenn der Schaden die Selbstbeteiligung übersteigt oder der Wert eine Versicherungsbearbeitung erfordert.",
      en: "Insurer is involved when damage exceeds deductible or value requires insurance processing."
    }
  },
  {
    question: {
      ro: "Ce este un claims handler?",
      de: "Was ist ein Claims Handler?",
      en: "What is a claims handler?"
    },
    options: {
      ro: ["Un șofer", "Persoana specializată în gestionarea și soluționarea reclamațiilor", "Un client", "Un contabil"],
      de: ["Ein Fahrer", "Die auf Reklamationsbearbeitung und -lösung spezialisierte Person", "Ein Kunde", "Ein Buchhalter"],
      en: ["A driver", "Person specialized in managing and resolving claims", "A client", "An accountant"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Claims handler este specialistul care procesează, investighează și soluționează reclamațiile de transport.",
      de: "Der Claims Handler ist der Spezialist, der Transportreklamationen bearbeitet, untersucht und löst.",
      en: "Claims handler is specialist who processes, investigates and resolves transport claims."
    }
  },
  {
    question: {
      ro: "Ce documente emite transportatorul în răspuns la o reclamație?",
      de: "Welche Dokumente stellt der Frachtführer als Antwort auf eine Reklamation aus?",
      en: "What documents does the carrier issue in response to a claim?"
    },
    options: {
      ro: ["Nimic", "Confirmare primire, poziție oficială, eventual ofertă de soluționare", "Doar factură", "Doar CMR"],
      de: ["Nichts", "Empfangsbestätigung, offizielle Position, ggf. Vergleichsangebot", "Nur Rechnung", "Nur CMR"],
      en: ["Nothing", "Receipt confirmation, official position, possibly settlement offer", "Only invoice", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportatorul confirmă primirea, prezintă poziția oficială și eventual propune o soluționare.",
      de: "Der Frachtführer bestätigt den Empfang, präsentiert seine offizielle Position und schlägt ggf. einen Vergleich vor.",
      en: "Carrier confirms receipt, presents official position and possibly proposes settlement."
    }
  },
  {
    question: {
      ro: "Ce este soluționarea amiabilă a reclamațiilor?",
      de: "Was ist die gütliche Beilegung von Reklamationen?",
      en: "What is amicable settlement of claims?"
    },
    options: {
      ro: ["Proces în instanță", "Negociere directă pentru a ajunge la un acord fără litigiu", "Arbitraj", "Ignorare"],
      de: ["Gerichtsverfahren", "Direkte Verhandlung zur Einigung ohne Rechtsstreit", "Schiedsverfahren", "Ignorieren"],
      en: ["Court process", "Direct negotiation to reach agreement without litigation", "Arbitration", "Ignoring"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Soluționarea amiabilă implică negociere directă pentru a găsi o soluție acceptabilă fără proces.",
      de: "Die gütliche Beilegung beinhaltet direkte Verhandlungen, um eine akzeptable Lösung ohne Prozess zu finden.",
      en: "Amicable settlement involves direct negotiation to find acceptable solution without trial."
    }
  },
  {
    question: {
      ro: "Ce trebuie să conțină o scrisoare de reclamație formală?",
      de: "Was muss ein formelles Reklamationsschreiben enthalten?",
      en: "What must a formal claim letter contain?"
    },
    options: {
      ro: ["Doar suma cerută", "Identificare transport, descriere daune, documente suport, suma și baza legală", "Doar descrierea", "Doar data"],
      de: ["Nur den geforderten Betrag", "Transportidentifikation, Schadensbeschreibung, Nachweise, Betrag und Rechtsgrundlage", "Nur die Beschreibung", "Nur das Datum"],
      en: ["Only claimed amount", "Transport identification, damage description, supporting documents, amount and legal basis", "Only description", "Only date"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Scrisoarea formală include identificarea transportului, descrierea daunelor, documente, suma și temei legal.",
      de: "Das formelle Schreiben enthält Transportidentifikation, Schadensbeschreibung, Dokumente, Betrag und Rechtsgrundlage.",
      en: "Formal letter includes transport identification, damage description, documents, amount and legal basis."
    }
  },
  {
    question: {
      ro: "Ce impact are lipsa rezervelor pe CMR asupra reclamației?",
      de: "Welchen Einfluss hat das Fehlen von Vorbehalten auf dem CMR auf die Reklamation?",
      en: "What impact does lack of reservations on CMR have on the claim?"
    },
    options: {
      ro: ["Niciun impact", "Prezumție că marfa a fost primită în stare bună - sarcina probei revine reclamantului", "Reclamație automată", "Plată dublă"],
      de: ["Keine Auswirkung", "Vermutung, dass Ware in gutem Zustand empfangen wurde - Beweislast beim Reklamanten", "Automatische Reklamation", "Doppelte Zahlung"],
      en: ["No impact", "Presumption goods received in good condition - burden of proof on claimant", "Automatic claim", "Double payment"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fără rezerve, se prezumă că marfa era în stare bună, iar reclamantul trebuie să dovedească contrariul.",
      de: "Ohne Vorbehalte wird angenommen, dass die Ware in gutem Zustand war, und der Reklamant muss das Gegenteil beweisen.",
      en: "Without reservations, goods are presumed in good condition, and claimant must prove otherwise."
    }
  },
  {
    question: {
      ro: "Ce este un raport de avarie (survey report)?",
      de: "Was ist ein Schadensbericht (survey report)?",
      en: "What is a survey report?"
    },
    options: {
      ro: ["Un formular intern", "Documentul oficial al expertului care detaliază daunele și cauzele", "O factură", "Un email"],
      de: ["Ein internes Formular", "Das offizielle Gutachterdokument mit Details zu Schäden und Ursachen", "Eine Rechnung", "Eine E-Mail"],
      en: ["An internal form", "Official surveyor document detailing damages and causes", "An invoice", "An email"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Raportul de avarie este documentul tehnic al expertului cu detalii despre natura și cauza daunelor.",
      de: "Der Schadensbericht ist das technische Gutachterdokument mit Details zu Art und Ursache der Schäden.",
      en: "Survey report is surveyor's technical document with details about nature and cause of damages."
    }
  }
];

export function getRandomClaimsQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...claimsQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
