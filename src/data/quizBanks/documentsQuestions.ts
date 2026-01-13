import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const documentsQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce reprezintă CMR în transportul internațional?",
      de: "Was bedeutet CMR im internationalen Transport?",
      en: "What does CMR represent in international transport?"
    },
    options: {
      ro: ["Contract de Muncă Regional", "Convenția referitoare la Contractul de Transport Internațional de Mărfuri pe Șosele", "Certificat de Mărfuri Rutiere", "Cod Maritim Rutier"],
      de: ["Regionaler Arbeitsvertrag", "Übereinkommen über den Beförderungsvertrag im internationalen Straßengüterverkehr", "Straßengüterzertifikat", "Seestraßencode"],
      en: ["Regional Work Contract", "Convention on the Contract for the International Carriage of Goods by Road", "Road Goods Certificate", "Maritime Road Code"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR este convenția internațională care reglementează transportul rutier de mărfuri între țări.",
      de: "CMR ist das internationale Übereinkommen, das den Straßengütertransport zwischen Ländern regelt.",
      en: "CMR is the international convention regulating road goods transport between countries."
    }
  },
  {
    question: {
      ro: "Câte exemplare originale are un CMR standard?",
      de: "Wie viele Originale hat ein Standard-CMR?",
      en: "How many original copies does a standard CMR have?"
    },
    options: {
      ro: ["2 exemplare", "3 exemplare", "4 exemplare", "5 exemplare"],
      de: ["2 Exemplare", "3 Exemplare", "4 Exemplare", "5 Exemplare"],
      en: ["2 copies", "3 copies", "4 copies", "5 copies"]
    },
    correctIndex: 2,
    explanation: {
      ro: "CMR-ul are 4 exemplare: pentru expeditor, transportator, destinatar și pentru administrație/statistică.",
      de: "Der CMR hat 4 Exemplare: für Absender, Frachtführer, Empfänger und für Verwaltung/Statistik.",
      en: "CMR has 4 copies: for shipper, carrier, consignee and for administration/statistics."
    }
  },
  {
    question: {
      ro: "Ce informații obligatorii trebuie să conțină caseta 1 a CMR?",
      de: "Welche Pflichtangaben muss Feld 1 des CMR enthalten?",
      en: "What mandatory information must CMR box 1 contain?"
    },
    options: {
      ro: ["Datele destinatarului", "Datele expeditorului (nume, adresă, țară)", "Descrierea mărfii", "Instrucțiuni speciale"],
      de: ["Empfängerdaten", "Absenderdaten (Name, Adresse, Land)", "Warenbeschreibung", "Besondere Anweisungen"],
      en: ["Consignee details", "Shipper details (name, address, country)", "Goods description", "Special instructions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Caseta 1 conține datele complete ale expeditorului: denumirea, adresa și țara.",
      de: "Feld 1 enthält die vollständigen Absenderdaten: Name, Adresse und Land.",
      en: "Box 1 contains the complete shipper details: name, address and country."
    }
  },
  {
    question: {
      ro: "Ce document atestă dreptul de proprietate asupra mărfii?",
      de: "Welches Dokument bescheinigt das Eigentumsrecht an der Ware?",
      en: "What document certifies ownership rights over the goods?"
    },
    options: {
      ro: ["CMR", "Factura comercială", "Packing list", "Conosamentul (Bill of Lading)"],
      de: ["CMR", "Handelsrechnung", "Packliste", "Konnossement (Bill of Lading)"],
      en: ["CMR", "Commercial invoice", "Packing list", "Bill of Lading"]
    },
    correctIndex: 3,
    explanation: {
      ro: "Conosamentul (Bill of Lading) este un document de proprietate - cine îl deține, deține marfa.",
      de: "Das Konnossement (Bill of Lading) ist ein Eigentumsdokument - wer es besitzt, besitzt die Ware.",
      en: "The Bill of Lading is a document of title - whoever holds it, holds the goods."
    }
  },
  {
    question: {
      ro: "Ce este T1 în contextul transportului?",
      de: "Was ist T1 im Transportkontext?",
      en: "What is T1 in transport context?"
    },
    options: {
      ro: ["Tip de vehicul", "Document de tranzit vamal comunitar extern", "Tip de marfă", "Număr de înmatriculare"],
      de: ["Fahrzeugtyp", "Externes gemeinschaftliches Versandpapier", "Warenart", "Zulassungsnummer"],
      en: ["Vehicle type", "External Community transit document", "Type of goods", "Registration number"]
    },
    correctIndex: 1,
    explanation: {
      ro: "T1 este documentul de tranzit pentru mărfuri non-UE care tranzitează teritoriul comunitar.",
      de: "T1 ist das Versanddokument für Nicht-EU-Waren, die durch das Gemeinschaftsgebiet transitieren.",
      en: "T1 is the transit document for non-EU goods transiting through Community territory."
    }
  },
  {
    question: {
      ro: "Ce document este necesar pentru transportul ADR?",
      de: "Welches Dokument ist für den ADR-Transport erforderlich?",
      en: "What document is required for ADR transport?"
    },
    options: {
      ro: ["Doar CMR", "Document de transport pentru mărfuri periculoase + certificat ADR șofer", "Doar factura", "Doar asigurarea"],
      de: ["Nur CMR", "Gefahrgut-Beförderungspapier + ADR-Fahrerschein", "Nur Rechnung", "Nur Versicherung"],
      en: ["Only CMR", "Dangerous goods transport document + driver ADR certificate", "Only invoice", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul ADR necesită document specific pentru mărfuri periculoase și certificat ADR valid al șoferului.",
      de: "ADR-Transport erfordert ein spezifisches Gefahrgutdokument und einen gültigen ADR-Führerschein des Fahrers.",
      en: "ADR transport requires a specific dangerous goods document and a valid driver ADR certificate."
    }
  },
  {
    question: {
      ro: "Ce reprezintă EUR.1?",
      de: "Was bedeutet EUR.1?",
      en: "What does EUR.1 represent?"
    },
    options: {
      ro: ["Moneda europeană", "Certificat de origine preferențială", "Tip de camion", "Asigurare europeană"],
      de: ["Europäische Währung", "Präferenzursprungszeugnis", "LKW-Typ", "Europäische Versicherung"],
      en: ["European currency", "Preferential origin certificate", "Truck type", "European insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EUR.1 este certificatul de origine preferențială folosit pentru a beneficia de tarife vamale reduse.",
      de: "EUR.1 ist das Präferenzursprungszeugnis für ermäßigte Zolltarife.",
      en: "EUR.1 is the preferential origin certificate used to benefit from reduced customs tariffs."
    }
  },
  {
    question: {
      ro: "Cine semnează caseta 23 a CMR?",
      de: "Wer unterschreibt Feld 23 des CMR?",
      en: "Who signs CMR box 23?"
    },
    options: {
      ro: ["Expeditorul", "Destinatarul", "Transportatorul", "Autoritatea vamală"],
      de: ["Der Absender", "Der Empfänger", "Der Frachtführer", "Die Zollbehörde"],
      en: ["The shipper", "The consignee", "The carrier", "The customs authority"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Caseta 23 este semnată de transportator la preluarea mărfii, confirmând primirea.",
      de: "Feld 23 wird vom Frachtführer bei der Übernahme der Ware unterschrieben, als Empfangsbestätigung.",
      en: "Box 23 is signed by the carrier when taking over the goods, confirming receipt."
    }
  },
  {
    question: {
      ro: "Ce este un delivery note?",
      de: "Was ist ein Lieferschein?",
      en: "What is a delivery note?"
    },
    options: {
      ro: ["Factură proformă", "Document de livrare care confirmă predarea mărfii", "Contract de transport", "Poliță de asigurare"],
      de: ["Proforma-Rechnung", "Lieferbeleg zur Bestätigung der Warenübergabe", "Beförderungsvertrag", "Versicherungspolice"],
      en: ["Proforma invoice", "Delivery document confirming goods handover", "Transport contract", "Insurance policy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Delivery note (nota de livrare) confirmă predarea efectivă a mărfii către destinatar.",
      de: "Der Lieferschein bestätigt die tatsächliche Übergabe der Ware an den Empfänger.",
      en: "A delivery note confirms the actual handover of goods to the consignee."
    }
  },
  {
    question: {
      ro: "Ce informații trebuie să conțină packing list?",
      de: "Welche Informationen muss die Packliste enthalten?",
      en: "What information must the packing list contain?"
    },
    options: {
      ro: ["Doar prețurile", "Descriere detaliată, greutăți, dimensiuni, număr colete", "Doar adresele", "Doar data livrării"],
      de: ["Nur Preise", "Detaillierte Beschreibung, Gewichte, Maße, Anzahl der Packstücke", "Nur Adressen", "Nur Lieferdatum"],
      en: ["Only prices", "Detailed description, weights, dimensions, number of packages", "Only addresses", "Only delivery date"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Packing list detaliază conținutul expediției: ce, cât, dimensiuni și cum este ambalat.",
      de: "Die Packliste beschreibt den Sendungsinhalt: was, wieviel, Maße und wie verpackt.",
      en: "The packing list details shipment contents: what, how much, dimensions and how packaged."
    }
  },
  {
    question: {
      ro: "Ce document este obligatoriu pentru export în afara UE?",
      de: "Welches Dokument ist für den Export außerhalb der EU obligatorisch?",
      en: "What document is mandatory for export outside the EU?"
    },
    options: {
      ro: ["Doar CMR", "Declarație vamală de export (EX)", "Doar factura", "Certificat de garanție"],
      de: ["Nur CMR", "Ausfuhrzollanmeldung (EX)", "Nur Rechnung", "Garantiezertifikat"],
      en: ["Only CMR", "Export customs declaration (EX)", "Only invoice", "Warranty certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Exportul în afara UE necesită declarație vamală de export (EX) procesată în sistemul vamal.",
      de: "Export außerhalb der EU erfordert eine Ausfuhrzollanmeldung (EX), die im Zollsystem verarbeitet wird.",
      en: "Export outside the EU requires an export customs declaration (EX) processed in the customs system."
    }
  },
  {
    question: {
      ro: "Ce reprezintă MRN în contextul vamal?",
      de: "Was bedeutet MRN im Zollkontext?",
      en: "What does MRN represent in customs context?"
    },
    options: {
      ro: ["Număr de înmatriculare", "Movement Reference Number - numărul unic al declarației vamale", "Codul mărfii", "Tipul transportului"],
      de: ["Zulassungsnummer", "Movement Reference Number - eindeutige Nummer der Zollanmeldung", "Warencode", "Transportart"],
      en: ["Registration number", "Movement Reference Number - unique number of customs declaration", "Goods code", "Transport type"]
    },
    correctIndex: 1,
    explanation: {
      ro: "MRN este numărul unic de referință atribuit fiecărei declarații vamale în sistemul electronic.",
      de: "MRN ist die eindeutige Referenznummer, die jeder Zollanmeldung im elektronischen System zugewiesen wird.",
      en: "MRN is the unique reference number assigned to each customs declaration in the electronic system."
    }
  },
  {
    question: {
      ro: "Ce este un certificat fitosanitar?",
      de: "Was ist ein Pflanzengesundheitszeugnis?",
      en: "What is a phytosanitary certificate?"
    },
    options: {
      ro: ["Certificat pentru animale", "Document care atestă sănătatea plantelor și produselor vegetale", "Certificat de origine", "Licență de transport"],
      de: ["Tierzertifikat", "Dokument zur Bescheinigung der Gesundheit von Pflanzen und Pflanzenerzeugnissen", "Ursprungszeugnis", "Transportlizenz"],
      en: ["Animal certificate", "Document certifying the health of plants and plant products", "Origin certificate", "Transport license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Certificatul fitosanitar atestă că produsele vegetale sunt libere de boli și dăunători.",
      de: "Das Pflanzengesundheitszeugnis bescheinigt, dass Pflanzenprodukte frei von Krankheiten und Schädlingen sind.",
      en: "The phytosanitary certificate certifies that plant products are free of diseases and pests."
    }
  },
  {
    question: {
      ro: "Ce casetă CMR se completează pentru rezerve la descărcare?",
      de: "Welches CMR-Feld wird für Vorbehalte bei der Entladung ausgefüllt?",
      en: "Which CMR box is filled for unloading reservations?"
    },
    options: {
      ro: ["Caseta 18", "Caseta 24", "Caseta 6", "Caseta 10"],
      de: ["Feld 18", "Feld 24", "Feld 6", "Feld 10"],
      en: ["Box 18", "Box 24", "Box 6", "Box 10"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Caseta 24 este destinată rezervelor și observațiilor făcute la livrare.",
      de: "Feld 24 ist für Vorbehalte und Beobachtungen bei der Lieferung bestimmt.",
      en: "Box 24 is intended for reservations and observations made at delivery."
    }
  },
  {
    question: {
      ro: "Ce document dovedește că marfa a fost livrată?",
      de: "Welches Dokument beweist, dass die Ware geliefert wurde?",
      en: "What document proves that goods were delivered?"
    },
    options: {
      ro: ["Comanda inițială", "CMR semnat de destinatar (Proof of Delivery)", "Oferta de preț", "Contractul cadru"],
      de: ["Ursprüngliche Bestellung", "Vom Empfänger unterschriebener CMR (Zustellnachweis)", "Preisangebot", "Rahmenvertrag"],
      en: ["Initial order", "CMR signed by consignee (Proof of Delivery)", "Price offer", "Framework contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR-ul semnat de destinatar constituie dovada oficială a livrării (POD - Proof of Delivery).",
      de: "Der vom Empfänger unterschriebene CMR ist der offizielle Zustellnachweis (POD - Proof of Delivery).",
      en: "The CMR signed by the consignee constitutes the official proof of delivery (POD)."
    }
  },
  {
    question: {
      ro: "Ce este o factură proforma?",
      de: "Was ist eine Proforma-Rechnung?",
      en: "What is a proforma invoice?"
    },
    options: {
      ro: ["Factură finală", "Document preliminar cu valorile estimate înainte de expediere", "Chitanță de plată", "Bon fiscal"],
      de: ["Endrechnung", "Vorläufiges Dokument mit geschätzten Werten vor dem Versand", "Zahlungsquittung", "Kassenbon"],
      en: ["Final invoice", "Preliminary document with estimated values before shipping", "Payment receipt", "Fiscal receipt"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Factura proforma este un document preliminar care arată valorile estimate și se folosește pentru vămuire sau finanțare.",
      de: "Die Proforma-Rechnung ist ein vorläufiges Dokument mit geschätzten Werten, das für Verzollung oder Finanzierung verwendet wird.",
      en: "Proforma invoice is a preliminary document showing estimated values, used for customs or financing."
    }
  },
  {
    question: {
      ro: "Ce conține un certificat de conformitate (COC)?",
      de: "Was enthält ein Konformitätszertifikat (COC)?",
      en: "What does a Certificate of Conformity (COC) contain?"
    },
    options: {
      ro: ["Doar prețul", "Confirmarea că produsul respectă standardele și reglementările aplicabile", "Doar greutatea", "Doar dimensiunile"],
      de: ["Nur den Preis", "Bestätigung, dass das Produkt die geltenden Standards und Vorschriften erfüllt", "Nur das Gewicht", "Nur die Maße"],
      en: ["Only price", "Confirmation that the product meets applicable standards and regulations", "Only weight", "Only dimensions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "COC confirmă că produsul îndeplinește cerințele tehnice și de siguranță aplicabile.",
      de: "Das COC bestätigt, dass das Produkt die geltenden technischen und Sicherheitsanforderungen erfüllt.",
      en: "The COC confirms that the product meets applicable technical and safety requirements."
    }
  },
  {
    question: {
      ro: "Ce este EORI?",
      de: "Was ist EORI?",
      en: "What is EORI?"
    },
    options: {
      ro: ["Tip de marfă", "Număr unic de înregistrare pentru operatori economici în UE", "Document de transport", "Certificat de calitate"],
      de: ["Warenart", "Eindeutige Registrierungsnummer für Wirtschaftsbeteiligte in der EU", "Transportdokument", "Qualitätszertifikat"],
      en: ["Type of goods", "Unique registration number for economic operators in EU", "Transport document", "Quality certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EORI (Economic Operators Registration and Identification) este numărul unic pentru operațiuni vamale în UE.",
      de: "EORI (Economic Operators Registration and Identification) ist die eindeutige Nummer für Zolloperationen in der EU.",
      en: "EORI (Economic Operators Registration and Identification) is the unique number for customs operations in the EU."
    }
  },
  {
    question: {
      ro: "Cât timp trebuie păstrate documentele de transport conform legislației?",
      de: "Wie lange müssen Transportdokumente gemäß der Gesetzgebung aufbewahrt werden?",
      en: "How long must transport documents be kept according to legislation?"
    },
    options: {
      ro: ["1 an", "Minimum 5 ani (în funcție de tipul documentului, până la 10 ani)", "6 luni", "30 zile"],
      de: ["1 Jahr", "Mindestens 5 Jahre (je nach Dokumentenart bis zu 10 Jahre)", "6 Monate", "30 Tage"],
      en: ["1 year", "Minimum 5 years (depending on document type, up to 10 years)", "6 months", "30 days"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentele trebuie păstrate minimum 5 ani, unele categorii (contabile, vamale) chiar mai mult.",
      de: "Dokumente müssen mindestens 5 Jahre aufbewahrt werden, einige Kategorien (Buchhaltung, Zoll) sogar länger.",
      en: "Documents must be kept for minimum 5 years, some categories (accounting, customs) even longer."
    }
  },
  {
    question: {
      ro: "Ce document este necesar pentru transportul de animale vii?",
      de: "Welches Dokument ist für den Transport lebender Tiere erforderlich?",
      en: "What document is required for live animal transport?"
    },
    options: {
      ro: ["Doar CMR", "Certificat sanitar-veterinar și document TRACES", "Doar factura", "Doar asigurarea"],
      de: ["Nur CMR", "Veterinärgesundheitszertifikat und TRACES-Dokument", "Nur Rechnung", "Nur Versicherung"],
      en: ["Only CMR", "Veterinary health certificate and TRACES document", "Only invoice", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul de animale vii necesită certificat sanitar-veterinar și înregistrare în sistemul TRACES.",
      de: "Der Transport lebender Tiere erfordert ein Veterinärgesundheitszertifikat und eine Registrierung im TRACES-System.",
      en: "Live animal transport requires veterinary health certificate and TRACES system registration."
    }
  },
  {
    question: {
      ro: "Ce este o declarație de valoare în vamă?",
      de: "Was ist eine Zollwertanmeldung?",
      en: "What is a customs value declaration?"
    },
    options: {
      ro: ["Document opțional", "Document care stabilește valoarea mărfii pentru calculul taxelor vamale", "Certificat de origine", "Poliță de asigurare"],
      de: ["Optionales Dokument", "Dokument zur Feststellung des Warenwerts für die Zollberechnung", "Ursprungszeugnis", "Versicherungspolice"],
      en: ["Optional document", "Document establishing goods value for customs duties calculation", "Origin certificate", "Insurance policy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Declarația de valoare stabilește valoarea în vamă a mărfii, baza pentru calculul taxelor.",
      de: "Die Zollwertanmeldung legt den Zollwert der Ware fest, die Grundlage für die Steuerberechnung.",
      en: "The value declaration establishes the customs value of goods, the basis for duty calculation."
    }
  },
  {
    question: {
      ro: "Ce reprezintă HS Code?",
      de: "Was bedeutet HS-Code?",
      en: "What does HS Code represent?"
    },
    options: {
      ro: ["Cod de șofer", "Cod armonizat pentru clasificarea mărfurilor în comerțul internațional", "Număr de telefon", "Cod de transport"],
      de: ["Fahrercode", "Harmonisierter Code zur Klassifizierung von Waren im internationalen Handel", "Telefonnummer", "Transportcode"],
      en: ["Driver code", "Harmonized code for goods classification in international trade", "Phone number", "Transport code"]
    },
    correctIndex: 1,
    explanation: {
      ro: "HS Code (Harmonized System) este sistemul internațional de clasificare a mărfurilor pentru vămuire.",
      de: "HS-Code (Harmonisiertes System) ist das internationale Warenklassifizierungssystem für die Verzollung.",
      en: "HS Code (Harmonized System) is the international goods classification system for customs purposes."
    }
  },
  {
    question: {
      ro: "Ce document atestă plata taxelor vamale?",
      de: "Welches Dokument bescheinigt die Zahlung der Zollgebühren?",
      en: "What document certifies payment of customs duties?"
    },
    options: {
      ro: ["CMR", "Documentul de punere în liberă circulație (IM)", "Factura furnizorului", "Certificat de origine"],
      de: ["CMR", "Dokument zur Überführung in den freien Verkehr (IM)", "Lieferantenrechnung", "Ursprungszeugnis"],
      en: ["CMR", "Release into free circulation document (IM)", "Supplier invoice", "Origin certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentul IM atestă vămuirea și plata taxelor, permițând libera circulație a mărfii.",
      de: "Das IM-Dokument bescheinigt die Verzollung und Zahlung der Gebühren und erlaubt den freien Warenverkehr.",
      en: "The IM document certifies customs clearance and duty payment, allowing free circulation of goods."
    }
  },
  {
    question: {
      ro: "Ce este un carnet TIR?",
      de: "Was ist ein TIR-Carnet?",
      en: "What is a TIR carnet?"
    },
    options: {
      ro: ["Permis de conducere special", "Document vamal internațional pentru transport sub sigiliu", "Certificat de asigurare", "Licență de transport"],
      de: ["Spezielle Fahrerlaubnis", "Internationales Zolldokument für Transport unter Siegel", "Versicherungszertifikat", "Transportlizenz"],
      en: ["Special driving license", "International customs document for transport under seal", "Insurance certificate", "Transport license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Carnetul TIR permite tranzitul vamal simplificat prin mai multe țări fără verificări la fiecare frontieră.",
      de: "Das TIR-Carnet ermöglicht vereinfachten Zolltransit durch mehrere Länder ohne Kontrollen an jeder Grenze.",
      en: "TIR carnet allows simplified customs transit through multiple countries without checks at every border."
    }
  },
  {
    question: {
      ro: "Ce informații conține caseta 6 a CMR?",
      de: "Welche Informationen enthält Feld 6 des CMR?",
      en: "What information does CMR box 6 contain?"
    },
    options: {
      ro: ["Instrucțiuni ale expeditorului", "Natura mărfii, număr colete, marcaje", "Datele transportatorului", "Suma de plată"],
      de: ["Anweisungen des Absenders", "Art der Ware, Anzahl der Packstücke, Markierungen", "Frachtführerdaten", "Zahlungsbetrag"],
      en: ["Shipper's instructions", "Nature of goods, number of packages, markings", "Carrier details", "Payment amount"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Caseta 6 descrie marfa: natura, numărul de colete, marcaje și referințe.",
      de: "Feld 6 beschreibt die Ware: Art, Anzahl der Packstücke, Markierungen und Referenzen.",
      en: "Box 6 describes the goods: nature, number of packages, markings and references."
    }
  },
  {
    question: {
      ro: "Ce este un AWB (Air Waybill)?",
      de: "Was ist ein AWB (Air Waybill)?",
      en: "What is an AWB (Air Waybill)?"
    },
    options: {
      ro: ["Document pentru transport maritim", "Scrisoare de transport aerian", "Certificat de origine", "Document vamal"],
      de: ["Dokument für Seetransport", "Luftfrachtbrief", "Ursprungszeugnis", "Zolldokument"],
      en: ["Document for sea transport", "Air transport waybill", "Origin certificate", "Customs document"]
    },
    correctIndex: 1,
    explanation: {
      ro: "AWB este echivalentul CMR pentru transportul aerian de mărfuri.",
      de: "AWB ist das Äquivalent zum CMR für den Luftfrachtverkehr.",
      en: "AWB is the equivalent of CMR for air freight transport."
    }
  },
  {
    question: {
      ro: "Ce document se folosește pentru mărfuri în regim de antrepozit vamal?",
      de: "Welches Dokument wird für Waren im Zolllagersystem verwendet?",
      en: "What document is used for goods under customs warehouse regime?"
    },
    options: {
      ro: ["Doar factura", "Declarație de antrepozitare și evidența stocurilor", "Doar CMR", "Certificat de calitate"],
      de: ["Nur Rechnung", "Einlagerungserklärung und Bestandsaufzeichnung", "Nur CMR", "Qualitätszertifikat"],
      en: ["Only invoice", "Warehousing declaration and stock records", "Only CMR", "Quality certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Mărfurile în antrepozit vamal necesită declarație specifică și evidență strictă a stocurilor.",
      de: "Waren im Zolllager erfordern eine spezifische Erklärung und strenge Bestandsführung.",
      en: "Goods in customs warehouse require specific declaration and strict stock records."
    }
  },
  {
    question: {
      ro: "Ce este o declarație sumară de intrare (ENS)?",
      de: "Was ist eine summarische Eingangsanmeldung (ENS)?",
      en: "What is an Entry Summary Declaration (ENS)?"
    },
    options: {
      ro: ["Document de export", "Declarație electronică transmisă înainte de sosirea mărfurilor în UE", "Factură comercială", "Certificat de origine"],
      de: ["Ausfuhrdokument", "Elektronische Anmeldung vor Ankunft der Waren in der EU", "Handelsrechnung", "Ursprungszeugnis"],
      en: ["Export document", "Electronic declaration transmitted before goods arrival in EU", "Commercial invoice", "Origin certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ENS este declarația de securitate transmisă electronic înainte de sosirea mărfurilor în UE.",
      de: "ENS ist die elektronische Sicherheitsanmeldung vor Ankunft der Waren in der EU.",
      en: "ENS is the security declaration transmitted electronically before goods arrival in the EU."
    }
  },
  {
    question: {
      ro: "Ce document certifică greutatea containerului (VGM)?",
      de: "Welches Dokument zertifiziert das Containergewicht (VGM)?",
      en: "What document certifies container weight (VGM)?"
    },
    options: {
      ro: ["CMR", "Declarație de masă brută verificată", "Factura comercială", "Conosament"],
      de: ["CMR", "Erklärung über die verifizierte Bruttomasse", "Handelsrechnung", "Konnossement"],
      en: ["CMR", "Verified Gross Mass declaration", "Commercial invoice", "Bill of Lading"]
    },
    correctIndex: 1,
    explanation: {
      ro: "VGM este obligatoriu conform SOLAS și certifică greutatea totală verificată a containerului.",
      de: "VGM ist gemäß SOLAS obligatorisch und zertifiziert das verifizierte Gesamtgewicht des Containers.",
      en: "VGM is mandatory under SOLAS and certifies the verified total weight of the container."
    }
  },
  {
    question: {
      ro: "Ce reprezintă ATA Carnet?",
      de: "Was bedeutet ATA Carnet?",
      en: "What does ATA Carnet represent?"
    },
    options: {
      ro: ["Document permanent de import", "Document pentru admiterea temporară a mărfurilor (expoziții, mostre)", "Certificat de origine", "Licență de export"],
      de: ["Dauerhaftes Einfuhrdokument", "Dokument für die vorübergehende Verwendung von Waren (Ausstellungen, Muster)", "Ursprungszeugnis", "Ausfuhrlizenz"],
      en: ["Permanent import document", "Document for temporary admission of goods (exhibitions, samples)", "Origin certificate", "Export license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ATA Carnet permite intrarea temporară a mărfurilor pentru expoziții sau mostre fără plata taxelor vamale.",
      de: "Das ATA Carnet ermöglicht die vorübergehende Einfuhr von Waren für Ausstellungen oder Muster ohne Zollzahlung.",
      en: "ATA Carnet allows temporary entry of goods for exhibitions or samples without paying customs duties."
    }
  }
];

export function getRandomDocumentsQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...documentsQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
