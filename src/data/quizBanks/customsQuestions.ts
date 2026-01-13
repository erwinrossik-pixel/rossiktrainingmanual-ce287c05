import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const customsQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce reprezintă procedura de vămuire?",
      de: "Was bedeutet das Zollverfahren?",
      en: "What does the customs clearance procedure represent?"
    },
    options: {
      ro: ["Doar plata taxelor", "Procesul de declarare și control al mărfurilor la trecerea frontierei", "Doar verificarea documentelor", "Transportul mărfurilor"],
      de: ["Nur Gebührenzahlung", "Der Prozess der Deklaration und Kontrolle von Waren beim Grenzübertritt", "Nur Dokumentenprüfung", "Warentransport"],
      en: ["Only fee payment", "The process of declaring and controlling goods at border crossing", "Only document verification", "Goods transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Vămuirea include declararea, verificarea, controlul și eliberarea mărfurilor pentru import/export.",
      de: "Die Verzollung umfasst die Deklaration, Überprüfung, Kontrolle und Freigabe von Waren für Import/Export.",
      en: "Customs clearance includes declaration, verification, control and release of goods for import/export."
    }
  },
  {
    question: {
      ro: "Ce este codul tarifar vamal (HS Code)?",
      de: "Was ist der Zolltarifcode (HS-Code)?",
      en: "What is the customs tariff code (HS Code)?"
    },
    options: {
      ro: ["Codul poștal", "Sistem internațional de clasificare a mărfurilor pentru taxe vamale", "Număr de înmatriculare", "Cod de transport"],
      de: ["Postleitzahl", "Internationales Warenklassifizierungssystem für Zölle", "Zulassungsnummer", "Transportcode"],
      en: ["Postal code", "International goods classification system for customs duties", "Registration number", "Transport code"]
    },
    correctIndex: 1,
    explanation: {
      ro: "HS Code (Harmonized System) clasifică mărfurile pentru determinarea taxelor vamale aplicabile.",
      de: "Der HS-Code (Harmonisiertes System) klassifiziert Waren zur Bestimmung der geltenden Zölle.",
      en: "HS Code (Harmonized System) classifies goods to determine applicable customs duties."
    }
  },
  {
    question: {
      ro: "Ce document este necesar pentru importul în UE din țări terțe?",
      de: "Welches Dokument ist für den Import in die EU aus Drittländern erforderlich?",
      en: "What document is required for import into EU from third countries?"
    },
    options: {
      ro: ["Doar factura", "Declarație vamală de import (IM) și documente suport", "Doar CMR", "Doar certificat de origine"],
      de: ["Nur Rechnung", "Einfuhrzollanmeldung (IM) und Begleitdokumente", "Nur CMR", "Nur Ursprungszeugnis"],
      en: ["Only invoice", "Import customs declaration (IM) and supporting documents", "Only CMR", "Only certificate of origin"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Importul necesită declarație vamală IM, factură comercială, documente de transport și alte documente specifice.",
      de: "Der Import erfordert die Zollanmeldung IM, Handelsrechnung, Transportdokumente und andere spezifische Dokumente.",
      en: "Import requires IM customs declaration, commercial invoice, transport documents and other specific documents."
    }
  },
  {
    question: {
      ro: "Ce este EORI și pentru ce este folosit?",
      de: "Was ist EORI und wofür wird es verwendet?",
      en: "What is EORI and what is it used for?"
    },
    options: {
      ro: ["Tip de marfă", "Număr unic de identificare pentru operațiuni vamale în UE", "Document de transport", "Licență de export"],
      de: ["Warenart", "Eindeutige Identifikationsnummer für Zolloperationen in der EU", "Transportdokument", "Ausfuhrlizenz"],
      en: ["Type of goods", "Unique identification number for customs operations in EU", "Transport document", "Export license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EORI (Economic Operators Registration and Identification) este obligatoriu pentru orice operațiune vamală în UE.",
      de: "EORI (Economic Operators Registration and Identification) ist für jede Zolloperation in der EU obligatorisch.",
      en: "EORI (Economic Operators Registration and Identification) is mandatory for any customs operation in the EU."
    }
  },
  {
    question: {
      ro: "Ce reprezintă regimul de tranzit T1?",
      de: "Was bedeutet das Versandverfahren T1?",
      en: "What does the T1 transit regime represent?"
    },
    options: {
      ro: ["Transport intern", "Tranzit extern pentru mărfuri non-UE prin teritoriul comunitar", "Export definitiv", "Import temporar"],
      de: ["Inlandstransport", "Externes Versandverfahren für Nicht-EU-Waren durch das Gemeinschaftsgebiet", "Endgültiger Export", "Vorübergehende Einfuhr"],
      en: ["Internal transport", "External transit for non-EU goods through Community territory", "Definitive export", "Temporary import"]
    },
    correctIndex: 1,
    explanation: {
      ro: "T1 permite tranzitul mărfurilor non-UE prin UE fără plata taxelor vamale până la destinația finală.",
      de: "T1 ermöglicht den Transit von Nicht-EU-Waren durch die EU ohne Zollzahlung bis zum Endziel.",
      en: "T1 allows transit of non-EU goods through EU without customs duties payment until final destination."
    }
  },
  {
    question: {
      ro: "Ce este valoarea în vamă?",
      de: "Was ist der Zollwert?",
      en: "What is the customs value?"
    },
    options: {
      ro: ["Prețul de vânzare în magazin", "Baza de calcul pentru taxele vamale (preț + transport + asigurare)", "Doar costul transportului", "Valoarea asigurării"],
      de: ["Verkaufspreis im Laden", "Berechnungsgrundlage für Zölle (Preis + Transport + Versicherung)", "Nur Transportkosten", "Versicherungswert"],
      en: ["Shop selling price", "Calculation base for customs duties (price + transport + insurance)", "Only transport cost", "Insurance value"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Valoarea în vamă include prețul mărfii plus costurile de transport și asigurare până la frontiera UE (CIF).",
      de: "Der Zollwert umfasst den Warenpreis plus Transport- und Versicherungskosten bis zur EU-Grenze (CIF).",
      en: "Customs value includes goods price plus transport and insurance costs to EU border (CIF)."
    }
  },
  {
    question: {
      ro: "Ce documente sunt necesare pentru export din UE?",
      de: "Welche Dokumente sind für den Export aus der EU erforderlich?",
      en: "What documents are required for export from EU?"
    },
    options: {
      ro: ["Doar factura", "Declarație export (EX), factură, documente transport, eventual licențe", "Doar CMR", "Doar certificat de origine"],
      de: ["Nur Rechnung", "Ausfuhranmeldung (EX), Rechnung, Transportdokumente, ggf. Lizenzen", "Nur CMR", "Nur Ursprungszeugnis"],
      en: ["Only invoice", "Export declaration (EX), invoice, transport documents, possibly licenses", "Only CMR", "Only origin certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Exportul necesită declarație EX, factură comercială, CMR și eventuale licențe sau certificate specifice.",
      de: "Der Export erfordert EX-Anmeldung, Handelsrechnung, CMR und eventuelle spezifische Lizenzen oder Zertifikate.",
      en: "Export requires EX declaration, commercial invoice, CMR and any specific licenses or certificates."
    }
  },
  {
    question: {
      ro: "Ce este un antrepozit vamal?",
      de: "Was ist ein Zolllager?",
      en: "What is a customs warehouse?"
    },
    options: {
      ro: ["Depozit obișnuit", "Spațiu autorizat pentru depozitarea mărfurilor sub supraveghere vamală", "Magazin de vânzare", "Fabrică de producție"],
      de: ["Normales Lager", "Genehmigter Raum für die Lagerung von Waren unter Zollaufsicht", "Verkaufsladen", "Produktionsfabrik"],
      en: ["Regular warehouse", "Authorized space for storing goods under customs supervision", "Sales shop", "Production factory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Antrepozitul vamal permite depozitarea mărfurilor fără plata taxelor până la punerea în liberă circulație.",
      de: "Das Zolllager ermöglicht die Lagerung von Waren ohne Zollzahlung bis zur Überführung in den freien Verkehr.",
      en: "Customs warehouse allows storing goods without duties payment until release into free circulation."
    }
  },
  {
    question: {
      ro: "Ce reprezintă MRN în contextul vamal?",
      de: "Was bedeutet MRN im Zollkontext?",
      en: "What does MRN represent in customs context?"
    },
    options: {
      ro: ["Număr de mașină", "Movement Reference Number - identificator unic al declarației", "Cod de marfă", "Număr de factură"],
      de: ["Fahrzeugnummer", "Movement Reference Number - eindeutiger Identifikator der Anmeldung", "Warencode", "Rechnungsnummer"],
      en: ["Vehicle number", "Movement Reference Number - unique identifier of the declaration", "Goods code", "Invoice number"]
    },
    correctIndex: 1,
    explanation: {
      ro: "MRN este numărul unic atribuit fiecărei declarații vamale în sistemul electronic.",
      de: "MRN ist die eindeutige Nummer, die jeder Zollanmeldung im elektronischen System zugewiesen wird.",
      en: "MRN is the unique number assigned to each customs declaration in the electronic system."
    }
  },
  {
    question: {
      ro: "Ce este AEO (Authorized Economic Operator)?",
      de: "Was ist AEO (Zugelassener Wirtschaftsbeteiligter)?",
      en: "What is AEO (Authorized Economic Operator)?"
    },
    options: {
      ro: ["Orice companie", "Status special acordat operatorilor de încredere pentru simplificări vamale", "Tip de marfă", "Document de transport"],
      de: ["Jedes Unternehmen", "Sonderstatus für vertrauenswürdige Wirtschaftsbeteiligte für Zollvereinfachungen", "Warenart", "Transportdokument"],
      en: ["Any company", "Special status granted to trusted operators for customs simplifications", "Type of goods", "Transport document"]
    },
    correctIndex: 1,
    explanation: {
      ro: "AEO oferă beneficii precum controale reduse, proceduri simplificate și recunoaștere internațională.",
      de: "AEO bietet Vorteile wie reduzierte Kontrollen, vereinfachte Verfahren und internationale Anerkennung.",
      en: "AEO provides benefits like reduced controls, simplified procedures and international recognition."
    }
  },
  {
    question: {
      ro: "Ce taxe se plătesc la importul în UE?",
      de: "Welche Abgaben werden beim Import in die EU gezahlt?",
      en: "What duties are paid on import into EU?"
    },
    options: {
      ro: ["Doar TVA", "Taxe vamale (duties) + TVA + eventual accize", "Doar accize", "Nu se plătesc taxe"],
      de: ["Nur MwSt", "Zölle (duties) + MwSt + ggf. Verbrauchsteuern", "Nur Verbrauchsteuern", "Keine Abgaben"],
      en: ["Only VAT", "Customs duties + VAT + possibly excise duties", "Only excise duties", "No duties paid"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La import se plătesc taxe vamale (bazate pe HS Code), TVA și eventual accize pentru produse specifice.",
      de: "Beim Import werden Zölle (basierend auf HS-Code), MwSt und ggf. Verbrauchsteuern für bestimmte Produkte gezahlt.",
      en: "On import, customs duties (based on HS Code), VAT and possibly excise duties for specific products are paid."
    }
  },
  {
    question: {
      ro: "Ce este EUR.1 și când se folosește?",
      de: "Was ist EUR.1 und wann wird es verwendet?",
      en: "What is EUR.1 and when is it used?"
    },
    options: {
      ro: ["Moneda euro", "Certificat de origine preferențială pentru tarife vamale reduse", "Document de transport", "Factură comercială"],
      de: ["Euro-Währung", "Präferenzursprungszeugnis für ermäßigte Zolltarife", "Transportdokument", "Handelsrechnung"],
      en: ["Euro currency", "Preferential origin certificate for reduced customs tariffs", "Transport document", "Commercial invoice"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EUR.1 dovedește originea preferențială a mărfurilor pentru a beneficia de tarife vamale reduse conform acordurilor comerciale.",
      de: "EUR.1 weist den Präferenzursprung der Waren nach, um gemäß Handelsabkommen von ermäßigten Zolltarifen zu profitieren.",
      en: "EUR.1 proves preferential origin of goods to benefit from reduced customs tariffs under trade agreements."
    }
  },
  {
    question: {
      ro: "Ce se întâmplă dacă marfa este reținută în vamă?",
      de: "Was passiert, wenn die Ware beim Zoll festgehalten wird?",
      en: "What happens if goods are detained in customs?"
    },
    options: {
      ro: ["Se pierde automat", "Se solicită documente suplimentare, plăți sau control fizic", "Se returnează expeditorului", "Se distruge imediat"],
      de: ["Geht automatisch verloren", "Zusätzliche Dokumente, Zahlungen oder physische Kontrolle werden angefordert", "Wird an Absender zurückgeschickt", "Wird sofort vernichtet"],
      en: ["Automatically lost", "Additional documents, payments or physical inspection requested", "Returned to shipper", "Destroyed immediately"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reținerea poate necesita clarificări documentare, plata taxelor sau inspecție fizică înainte de eliberare.",
      de: "Die Zurückhaltung kann dokumentarische Klärungen, Abgabenzahlung oder physische Inspektion vor der Freigabe erfordern.",
      en: "Detention may require documentary clarifications, duty payment or physical inspection before release."
    }
  },
  {
    question: {
      ro: "Ce este procedura de vămuire simplificată?",
      de: "Was ist das vereinfachte Zollverfahren?",
      en: "What is the simplified customs procedure?"
    },
    options: {
      ro: ["Procedură standard", "Procedură pentru operatori autorizați cu declarații periodice", "Procedură de urgență", "Procedură gratuită"],
      de: ["Standardverfahren", "Verfahren für zugelassene Wirtschaftsbeteiligte mit periodischen Anmeldungen", "Notfallverfahren", "Kostenloses Verfahren"],
      en: ["Standard procedure", "Procedure for authorized operators with periodic declarations", "Emergency procedure", "Free procedure"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Procedura simplificată permite operatorilor autorizați să elibereze rapid mărfurile și să declare ulterior.",
      de: "Das vereinfachte Verfahren ermöglicht zugelassenen Wirtschaftsbeteiligten die schnelle Freigabe und spätere Anmeldung.",
      en: "Simplified procedure allows authorized operators to quickly release goods and declare later."
    }
  },
  {
    question: {
      ro: "Ce mărfuri necesită licențe de import/export?",
      de: "Welche Waren erfordern Einfuhr-/Ausfuhrlizenzen?",
      en: "What goods require import/export licenses?"
    },
    options: {
      ro: ["Toate mărfurile", "Produse restricționate: arme, dual-use, textile, produse agricole", "Nicio marfă", "Doar alimente"],
      de: ["Alle Waren", "Eingeschränkte Produkte: Waffen, Dual-Use, Textilien, Agrarprodukte", "Keine Waren", "Nur Lebensmittel"],
      en: ["All goods", "Restricted products: weapons, dual-use, textiles, agricultural products", "No goods", "Only food"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Licențe sunt necesare pentru produse sensibile: arme, tehnologie dual-use, textile (contingente), produse agricole.",
      de: "Lizenzen sind erforderlich für sensible Produkte: Waffen, Dual-Use-Technologie, Textilien (Kontingente), Agrarprodukte.",
      en: "Licenses are required for sensitive products: weapons, dual-use technology, textiles (quotas), agricultural products."
    }
  },
  {
    question: {
      ro: "Ce este ICS (Import Control System)?",
      de: "Was ist ICS (Import Control System)?",
      en: "What is ICS (Import Control System)?"
    },
    options: {
      ro: ["Sistem de plată", "Sistem electronic de control al securității pentru importuri în UE", "Sistem de transport", "Sistem de facturare"],
      de: ["Zahlungssystem", "Elektronisches Sicherheitskontrollsystem für Importe in die EU", "Transportsystem", "Rechnungssystem"],
      en: ["Payment system", "Electronic security control system for imports into EU", "Transport system", "Invoicing system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ICS gestionează declarațiile sumare de intrare (ENS) pentru securitatea mărfurilor înainte de sosirea în UE.",
      de: "ICS verwaltet summarische Eingangsanmeldungen (ENS) für die Warensicherheit vor der Ankunft in der EU.",
      en: "ICS manages Entry Summary Declarations (ENS) for goods security before arrival in EU."
    }
  },
  {
    question: {
      ro: "Ce este regimul de perfecționare activă?",
      de: "Was ist das aktive Veredelungsverfahren?",
      en: "What is the inward processing regime?"
    },
    options: {
      ro: ["Export simplu", "Import fără taxe pentru prelucrare și reexport ulterior", "Import definitiv", "Tranzit simplu"],
      de: ["Einfacher Export", "Zollfreier Import zur Verarbeitung und späterem Reexport", "Endgültiger Import", "Einfacher Transit"],
      en: ["Simple export", "Duty-free import for processing and subsequent re-export", "Definitive import", "Simple transit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Perfecționarea activă permite importul fără taxe al materiilor prime pentru producție destinată exportului.",
      de: "Die aktive Veredelung ermöglicht den zollfreien Import von Rohstoffen für die exportbestimmte Produktion.",
      en: "Inward processing allows duty-free import of raw materials for production destined for export."
    }
  },
  {
    question: {
      ro: "Cât timp poate sta o marfă în tranzit T1?",
      de: "Wie lange kann eine Ware im T1-Versand bleiben?",
      en: "How long can goods remain in T1 transit?"
    },
    options: {
      ro: ["Nelimitat", "Maximum 8 zile (poate fi extins în cazuri justificate)", "24 ore", "30 zile"],
      de: ["Unbegrenzt", "Maximal 8 Tage (kann in begründeten Fällen verlängert werden)", "24 Stunden", "30 Tage"],
      en: ["Unlimited", "Maximum 8 days (can be extended in justified cases)", "24 hours", "30 days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tranzitul T1 are un termen standard de 8 zile, cu posibilitate de extindere în cazuri motivate.",
      de: "Der T1-Versand hat eine Standardfrist von 8 Tagen, mit Verlängerungsmöglichkeit in begründeten Fällen.",
      en: "T1 transit has a standard term of 8 days, with extension possibility in motivated cases."
    }
  },
  {
    question: {
      ro: "Ce verificări face vama la un control fizic?",
      de: "Welche Prüfungen führt der Zoll bei einer physischen Kontrolle durch?",
      en: "What checks does customs perform during physical inspection?"
    },
    options: {
      ro: ["Doar documente", "Deschiderea coletelor, verificarea conținutului, cântărire, eșantionare", "Doar sigilii", "Doar greutate"],
      de: ["Nur Dokumente", "Öffnung der Pakete, Inhaltsprüfung, Wiegen, Probenahme", "Nur Siegel", "Nur Gewicht"],
      en: ["Only documents", "Opening packages, checking contents, weighing, sampling", "Only seals", "Only weight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Controlul fizic poate include deschiderea mărfurilor, verificarea conținutului, cântărire și prelevare de probe.",
      de: "Die physische Kontrolle kann das Öffnen der Waren, Inhaltsprüfung, Wiegen und Probenahme umfassen.",
      en: "Physical inspection may include opening goods, checking contents, weighing and taking samples."
    }
  },
  {
    question: {
      ro: "Ce document atestă închiderea regimului de tranzit?",
      de: "Welches Dokument bestätigt den Abschluss des Versandverfahrens?",
      en: "What document certifies closure of the transit regime?"
    },
    options: {
      ro: ["CMR", "Certificatul de încheiere a tranzitului de la biroul de destinație", "Factura", "Certificat de origine"],
      de: ["CMR", "Transitabschlussbescheinigung vom Bestimmungszollamt", "Rechnung", "Ursprungszeugnis"],
      en: ["CMR", "Transit closure certificate from destination office", "Invoice", "Origin certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Biroul vamal de destinație confirmă sosirea și descărcarea mărfurilor, închizând regimul de tranzit.",
      de: "Das Bestimmungszollamt bestätigt die Ankunft und Entladung der Waren und schließt das Versandverfahren ab.",
      en: "The destination customs office confirms arrival and unloading, closing the transit regime."
    }
  },
  {
    question: {
      ro: "Ce este procedura de destinație autorizată?",
      de: "Was ist das Verfahren des zugelassenen Empfängers?",
      en: "What is the authorized consignee procedure?"
    },
    options: {
      ro: ["Livrare standard", "Dreptul de a primi mărfuri în tranzit direct la sediu fără trecerea prin vamă", "Livrare urgentă", "Livrare internațională"],
      de: ["Standardlieferung", "Das Recht, Transitwaren direkt am Firmensitz ohne Zolldurchgang zu empfangen", "Eillieferung", "Internationale Lieferung"],
      en: ["Standard delivery", "Right to receive transit goods directly at premises without going through customs", "Express delivery", "International delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Destinatarul autorizat poate primi mărfuri în tranzit la propriul depozit și închide tranzitul electronic.",
      de: "Der zugelassene Empfänger kann Transitwaren im eigenen Lager empfangen und den Transit elektronisch abschließen.",
      en: "Authorized consignee can receive transit goods at own warehouse and close transit electronically."
    }
  },
  {
    question: {
      ro: "Ce se întâmplă cu marfa la expirarea termenului de depozitare vamală?",
      de: "Was passiert mit der Ware bei Ablauf der Zolllagerungsfrist?",
      en: "What happens to goods when customs storage term expires?"
    },
    options: {
      ro: ["Rămâne în depozit", "Poate fi vândută de autorități sau distrusă", "Se returnează automat", "Nu se întâmplă nimic"],
      de: ["Bleibt im Lager", "Kann von Behörden verkauft oder vernichtet werden", "Wird automatisch zurückgeschickt", "Nichts passiert"],
      en: ["Stays in warehouse", "Can be sold by authorities or destroyed", "Automatically returned", "Nothing happens"]
    },
    correctIndex: 1,
    explanation: {
      ro: "După expirarea termenului, autoritățile pot vinde, distruge sau dispune altfel de marfa abandonată.",
      de: "Nach Ablauf der Frist können die Behörden die verlassene Ware verkaufen, vernichten oder anderweitig darüber verfügen.",
      en: "After term expiry, authorities can sell, destroy or otherwise dispose of abandoned goods."
    }
  },
  {
    question: {
      ro: "Ce documente verifică vama la import de produse alimentare?",
      de: "Welche Dokumente prüft der Zoll beim Import von Lebensmitteln?",
      en: "What documents does customs check for food product imports?"
    },
    options: {
      ro: ["Doar factura", "Certificat sanitar, fitosanitar, analize, licențe import", "Doar CMR", "Doar certificate origine"],
      de: ["Nur Rechnung", "Gesundheitszeugnis, Pflanzengesundheitszeugnis, Analysen, Importlizenzen", "Nur CMR", "Nur Ursprungszeugnisse"],
      en: ["Only invoice", "Health certificate, phytosanitary certificate, analyses, import licenses", "Only CMR", "Only origin certificates"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Produsele alimentare necesită certificate sanitare/fitosanitare, rezultate analize și eventual licențe specifice.",
      de: "Lebensmittel erfordern Gesundheits-/Pflanzengesundheitszeugnisse, Analyseergebnisse und ggf. spezifische Lizenzen.",
      en: "Food products require health/phytosanitary certificates, analysis results and possibly specific licenses."
    }
  },
  {
    question: {
      ro: "Ce este TIR Carnet și ce avantaje oferă?",
      de: "Was ist das TIR-Carnet und welche Vorteile bietet es?",
      en: "What is TIR Carnet and what advantages does it offer?"
    },
    options: {
      ro: ["Document de plată", "Document pentru tranzit internațional simplificat cu garanție", "Certificat de asigurare", "Licență de transport"],
      de: ["Zahlungsdokument", "Dokument für vereinfachten internationalen Transit mit Garantie", "Versicherungszertifikat", "Transportlizenz"],
      en: ["Payment document", "Document for simplified international transit with guarantee", "Insurance certificate", "Transport license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TIR Carnet oferă tranzit simplificat prin multiple țări cu o singură garanție și fără verificări la fiecare frontieră.",
      de: "Das TIR-Carnet bietet vereinfachten Transit durch mehrere Länder mit einer einzigen Garantie und ohne Kontrollen an jeder Grenze.",
      en: "TIR Carnet offers simplified transit through multiple countries with single guarantee and without checks at each border."
    }
  },
  {
    question: {
      ro: "Cum se calculează taxele vamale?",
      de: "Wie werden die Zölle berechnet?",
      en: "How are customs duties calculated?"
    },
    options: {
      ro: ["Sumă fixă", "Procentaj din valoarea în vamă conform codului tarifar", "Greutatea mărfii", "Distanța parcursă"],
      de: ["Fester Betrag", "Prozentsatz des Zollwerts gemäß Tarifcode", "Warengewicht", "Zurückgelegte Entfernung"],
      en: ["Fixed amount", "Percentage of customs value according to tariff code", "Goods weight", "Distance traveled"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Taxele vamale se calculează aplicând procentajul din tariful vamal la valoarea CIF a mărfurilor.",
      de: "Zölle werden berechnet, indem der Prozentsatz aus dem Zolltarif auf den CIF-Wert der Waren angewendet wird.",
      en: "Customs duties are calculated by applying the tariff percentage to the CIF value of goods."
    }
  },
  {
    question: {
      ro: "Ce este un contingent tarifar?",
      de: "Was ist ein Zollkontingent?",
      en: "What is a tariff quota?"
    },
    options: {
      ro: ["Taxă fixă", "Cantitate de import cu taxe reduse, peste care se aplică taxe normale", "Interdicție totală", "Licență de export"],
      de: ["Feste Gebühr", "Einfuhrmenge mit ermäßigten Zöllen, darüber gelten normale Zölle", "Vollständiges Verbot", "Ausfuhrlizenz"],
      en: ["Fixed fee", "Import quantity with reduced duties, above which normal duties apply", "Total prohibition", "Export license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contingentul tarifar permite importul unei cantități specifice cu taxe reduse; peste limită se aplică taxa normală.",
      de: "Das Zollkontingent erlaubt den Import einer bestimmten Menge mit ermäßigten Zöllen; darüber gilt der normale Satz.",
      en: "Tariff quota allows import of specific quantity with reduced duties; above limit normal rate applies."
    }
  },
  {
    question: {
      ro: "Ce verificări face vama la exportul de bunuri cu dublă utilizare?",
      de: "Welche Prüfungen führt der Zoll beim Export von Dual-Use-Gütern durch?",
      en: "What checks does customs perform for dual-use goods export?"
    },
    options: {
      ro: ["Nicio verificare specială", "Licență export, utilizator final, conformitate cu sancțiuni", "Doar greutate", "Doar valoare"],
      de: ["Keine besonderen Prüfungen", "Ausfuhrlizenz, Endbenutzer, Sanktionskonformität", "Nur Gewicht", "Nur Wert"],
      en: ["No special checks", "Export license, end-user, sanctions compliance", "Only weight", "Only value"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bunurile dual-use necesită licență export, verificarea utilizatorului final și conformitate cu regimul sancțiunilor.",
      de: "Dual-Use-Güter erfordern Ausfuhrlizenz, Endbenutzerprüfung und Einhaltung des Sanktionsregimes.",
      en: "Dual-use goods require export license, end-user verification and sanctions regime compliance."
    }
  },
  {
    question: {
      ro: "Ce este admiterea temporară?",
      de: "Was ist die vorübergehende Verwendung?",
      en: "What is temporary admission?"
    },
    options: {
      ro: ["Import permanent", "Regim care permite utilizarea mărfurilor fără taxe pentru o perioadă limitată", "Export definitiv", "Tranzit simplu"],
      de: ["Dauerhafter Import", "Regime, das die zollfreie Nutzung von Waren für einen begrenzten Zeitraum erlaubt", "Endgültiger Export", "Einfacher Transit"],
      en: ["Permanent import", "Regime allowing duty-free use of goods for limited period", "Definitive export", "Simple transit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Admiterea temporară permite utilizarea bunurilor (echipamente, mostre) fără taxe, cu obligația reexportului.",
      de: "Die vorübergehende Verwendung ermöglicht die zollfreie Nutzung von Gütern (Ausrüstung, Muster) mit Reexportverpflichtung.",
      en: "Temporary admission allows duty-free use of goods (equipment, samples) with re-export obligation."
    }
  },
  {
    question: {
      ro: "Ce este sistemul TARIC?",
      de: "Was ist das TARIC-System?",
      en: "What is the TARIC system?"
    },
    options: {
      ro: ["Sistem de plată", "Tariful integrat al UE care conține toate măsurile comerciale", "Sistem de transport", "Bază de date a șoferilor"],
      de: ["Zahlungssystem", "Integrierter Tarif der EU mit allen Handelsmaßnahmen", "Transportsystem", "Fahrerdatenbank"],
      en: ["Payment system", "EU integrated tariff containing all trade measures", "Transport system", "Drivers database"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TARIC este baza de date a UE cu toate taxele vamale, contingente, suspensii și măsuri comerciale aplicabile.",
      de: "TARIC ist die EU-Datenbank mit allen Zöllen, Kontingenten, Aussetzungen und anwendbaren Handelsmaßnahmen.",
      en: "TARIC is the EU database with all customs duties, quotas, suspensions and applicable trade measures."
    }
  }
];

export function getRandomCustomsQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...customsQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
