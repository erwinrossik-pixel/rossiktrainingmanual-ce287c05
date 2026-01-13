import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const adrQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce reprezintă ADR în transporturi?",
      de: "Was bedeutet ADR im Transport?",
      en: "What does ADR represent in transport?"
    },
    options: {
      ro: ["Asociația Drumurilor Rutiere", "Acordul European pentru Transportul Internațional al Mărfurilor Periculoase", "Asigurare de Risc", "Autorizație de Drum Rutier"],
      de: ["Straßenverkehrsverband", "Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter", "Risikoversicherung", "Straßenfahrtgenehmigung"],
      en: ["Road Association", "European Agreement on International Carriage of Dangerous Goods by Road", "Risk Insurance", "Road Drive Authorization"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ADR este acordul internațional care reglementează transportul rutier al mărfurilor periculoase.",
      de: "ADR ist das internationale Abkommen, das den Straßentransport gefährlicher Güter regelt.",
      en: "ADR is the international agreement regulating road transport of dangerous goods."
    }
  },
  {
    question: {
      ro: "Câte clase de mărfuri periculoase există conform ADR?",
      de: "Wie viele Gefahrgutklassen gibt es gemäß ADR?",
      en: "How many dangerous goods classes exist according to ADR?"
    },
    options: {
      ro: ["5 clase", "9 clase principale", "3 clase", "15 clase"],
      de: ["5 Klassen", "9 Hauptklassen", "3 Klassen", "15 Klassen"],
      en: ["5 classes", "9 main classes", "3 classes", "15 classes"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ADR clasifică mărfurile periculoase în 9 clase principale, de la explozivi la diverse substanțe periculoase.",
      de: "ADR klassifiziert gefährliche Güter in 9 Hauptklassen, von Explosivstoffen bis zu verschiedenen gefährlichen Substanzen.",
      en: "ADR classifies dangerous goods into 9 main classes, from explosives to miscellaneous dangerous substances."
    }
  },
  {
    question: {
      ro: "Ce reprezintă clasa 1 ADR?",
      de: "Was stellt ADR-Klasse 1 dar?",
      en: "What does ADR Class 1 represent?"
    },
    options: {
      ro: ["Gaze", "Materii și obiecte explozive", "Lichide inflamabile", "Substanțe toxice"],
      de: ["Gase", "Explosive Stoffe und Gegenstände", "Entzündbare Flüssigkeiten", "Giftige Stoffe"],
      en: ["Gases", "Explosive substances and articles", "Flammable liquids", "Toxic substances"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clasa 1 include toate tipurile de explozivi și articole pirotehnice.",
      de: "Klasse 1 umfasst alle Arten von Explosivstoffen und pyrotechnischen Gegenständen.",
      en: "Class 1 includes all types of explosives and pyrotechnic articles."
    }
  },
  {
    question: {
      ro: "Ce document trebuie să însoțească obligatoriu un transport ADR?",
      de: "Welches Dokument muss einen ADR-Transport obligatorisch begleiten?",
      en: "What document must mandatorily accompany an ADR transport?"
    },
    options: {
      ro: ["Doar CMR", "Documentul de transport pentru mărfuri periculoase", "Doar factura", "Doar asigurarea"],
      de: ["Nur CMR", "Das Gefahrgut-Beförderungspapier", "Nur Rechnung", "Nur Versicherung"],
      en: ["Only CMR", "The dangerous goods transport document", "Only invoice", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul ADR necesită document specific care include UN number, denumire, clasă, grup ambalare.",
      de: "ADR-Transport erfordert ein spezifisches Dokument mit UN-Nummer, Bezeichnung, Klasse, Verpackungsgruppe.",
      en: "ADR transport requires specific document including UN number, designation, class, packing group."
    }
  },
  {
    question: {
      ro: "Ce este un număr UN?",
      de: "Was ist eine UN-Nummer?",
      en: "What is a UN number?"
    },
    options: {
      ro: ["Număr de înmatriculare", "Cod internațional de identificare a substanțelor periculoase", "Cod poștal", "Număr de factură"],
      de: ["Zulassungsnummer", "Internationaler Identifizierungscode für gefährliche Stoffe", "Postleitzahl", "Rechnungsnummer"],
      en: ["Registration number", "International identification code for dangerous substances", "Postal code", "Invoice number"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Numărul UN este codul de 4 cifre care identifică unic fiecare substanță periculoasă la nivel internațional.",
      de: "Die UN-Nummer ist der 4-stellige Code, der jeden gefährlichen Stoff international eindeutig identifiziert.",
      en: "The UN number is the 4-digit code that uniquely identifies each dangerous substance internationally."
    }
  },
  {
    question: {
      ro: "Ce echipament obligatoriu trebuie să aibă vehiculul pentru transport ADR?",
      de: "Welche Pflichtausrüstung muss das Fahrzeug für ADR-Transport haben?",
      en: "What mandatory equipment must the vehicle have for ADR transport?"
    },
    options: {
      ro: ["Doar GPS", "Stingătoare, cale roți, vestă, triunghiuri, echipament protecție", "Doar radio", "Doar climatizare"],
      de: ["Nur GPS", "Feuerlöscher, Unterlegkeile, Weste, Warndreiecke, Schutzausrüstung", "Nur Radio", "Nur Klimaanlage"],
      en: ["Only GPS", "Fire extinguishers, wheel chocks, vest, warning triangles, protective equipment", "Only radio", "Only air conditioning"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Echipamentul ADR include stingătoare, cale, echipament individual de protecție, triunghiuri și alte articole specifice clasei.",
      de: "Die ADR-Ausrüstung umfasst Feuerlöscher, Keile, persönliche Schutzausrüstung, Dreiecke und andere klassenspezifische Artikel.",
      en: "ADR equipment includes fire extinguishers, chocks, personal protective equipment, triangles and other class-specific items."
    }
  },
  {
    question: {
      ro: "Ce reprezintă eticheta de pericol pe un colet ADR?",
      de: "Was stellt das Gefahrenetikett auf einem ADR-Packstück dar?",
      en: "What does the danger label on an ADR package represent?"
    },
    options: {
      ro: ["Marca producătorului", "Simbolul care indică tipul de pericol al conținutului", "Codul de bare", "Data fabricației"],
      de: ["Herstellermarke", "Symbol, das die Art der Inhaltsgefahr anzeigt", "Strichcode", "Herstellungsdatum"],
      en: ["Manufacturer's mark", "Symbol indicating the type of hazard of the contents", "Barcode", "Manufacturing date"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Etichetele de pericol sunt simboluri standardizate care identifică vizual clasa și tipul de risc.",
      de: "Gefahrenetiketten sind standardisierte Symbole, die die Klasse und Art des Risikos visuell identifizieren.",
      en: "Danger labels are standardized symbols that visually identify the class and type of risk."
    }
  },
  {
    question: {
      ro: "Ce certificat trebuie să aibă șoferul pentru transport ADR?",
      de: "Welches Zertifikat muss der Fahrer für ADR-Transport haben?",
      en: "What certificate must the driver have for ADR transport?"
    },
    options: {
      ro: ["Doar permis categoria C", "Certificat ADR valid pentru clasele transportate", "Doar asigurare", "Doar cartelă tahograf"],
      de: ["Nur Führerschein Klasse C", "Gültiges ADR-Zertifikat für die transportierten Klassen", "Nur Versicherung", "Nur Fahrerkarte"],
      en: ["Only category C license", "Valid ADR certificate for transported classes", "Only insurance", "Only tachograph card"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Șoferul trebuie să dețină certificat ADR valabil pentru clasele de mărfuri periculoase pe care le transportă.",
      de: "Der Fahrer muss ein gültiges ADR-Zertifikat für die transportierten Gefahrgutklassen besitzen.",
      en: "The driver must hold a valid ADR certificate for the dangerous goods classes being transported."
    }
  },
  {
    question: {
      ro: "Ce sunt plăcile portocalii pe vehiculele ADR?",
      de: "Was sind die orangefarbenen Tafeln an ADR-Fahrzeugen?",
      en: "What are the orange plates on ADR vehicles?"
    },
    options: {
      ro: ["Decorațiuni", "Panouri de semnalizare cu număr pericol și număr UN", "Reclame", "Semne de parcare"],
      de: ["Dekoration", "Warntafeln mit Gefahrnummer und UN-Nummer", "Werbung", "Parkzeichen"],
      en: ["Decorations", "Warning plates with hazard number and UN number", "Advertisements", "Parking signs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Plăcile portocalii afișează numărul de identificare a pericolului (sus) și numărul UN (jos) al mărfii.",
      de: "Die orangefarbenen Tafeln zeigen die Gefahrnummer (oben) und die UN-Nummer (unten) der Ware an.",
      en: "Orange plates display the hazard identification number (top) and UN number (bottom) of the goods."
    }
  },
  {
    question: {
      ro: "Ce reprezintă codul Kemler (numărul de identificare a pericolului)?",
      de: "Was bedeutet der Kemler-Code (Gefahrnummer)?",
      en: "What does the Kemler code (hazard identification number) represent?"
    },
    options: {
      ro: ["Greutatea mărfii", "Cod numeric care indică tipul și intensitatea pericolului", "Codul postal", "Numărul de telefon"],
      de: ["Warengewicht", "Numerischer Code, der Art und Intensität der Gefahr anzeigt", "Postleitzahl", "Telefonnummer"],
      en: ["Goods weight", "Numeric code indicating type and intensity of hazard", "Postal code", "Phone number"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Codul Kemler (2-3 cifre) indică tipul de pericol, dublarea cifrei indică intensificare.",
      de: "Der Kemler-Code (2-3 Ziffern) zeigt die Art der Gefahr an, die Verdopplung zeigt eine Verstärkung an.",
      en: "Kemler code (2-3 digits) indicates hazard type, doubling of digit indicates intensification."
    }
  },
  {
    question: {
      ro: "Ce restricții de parcare se aplică vehiculelor ADR?",
      de: "Welche Parkbeschränkungen gelten für ADR-Fahrzeuge?",
      en: "What parking restrictions apply to ADR vehicles?"
    },
    options: {
      ro: ["Nicio restricție", "Parcări securizate, departe de zone rezidențiale și locuri aglomerate", "Doar în orașe", "Doar pe autostrăzi"],
      de: ["Keine Einschränkungen", "Gesicherte Parkplätze, abseits von Wohngebieten und belebten Orten", "Nur in Städten", "Nur auf Autobahnen"],
      en: ["No restrictions", "Secured parking, away from residential areas and crowded places", "Only in cities", "Only on highways"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Vehiculele ADR trebuie parcate în locuri securizate, departe de locuințe, instituții și zone populate.",
      de: "ADR-Fahrzeuge müssen an gesicherten Orten parken, abseits von Wohnungen, Einrichtungen und besiedelten Gebieten.",
      en: "ADR vehicles must park in secure locations, away from homes, institutions and populated areas."
    }
  },
  {
    question: {
      ro: "Ce reprezintă grupul de ambalare în ADR?",
      de: "Was bedeutet die Verpackungsgruppe im ADR?",
      en: "What does the packing group represent in ADR?"
    },
    options: {
      ro: ["Tipul de cutie", "Nivelul de pericol: I (mare), II (mediu), III (mic)", "Culoarea ambalajului", "Greutatea ambalajului"],
      de: ["Kartontyp", "Gefahrenstufe: I (hoch), II (mittel), III (niedrig)", "Verpackungsfarbe", "Verpackungsgewicht"],
      en: ["Box type", "Danger level: I (high), II (medium), III (low)", "Package color", "Package weight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Grupul de ambalare indică gradul de pericol: PG I = foarte periculos, PG II = mediu, PG III = mai puțin periculos.",
      de: "Die Verpackungsgruppe zeigt den Gefährlichkeitsgrad an: VG I = sehr gefährlich, VG II = mittel, VG III = weniger gefährlich.",
      en: "Packing group indicates danger degree: PG I = very dangerous, PG II = medium, PG III = less dangerous."
    }
  },
  {
    question: {
      ro: "Ce este instrucțiunea scrisă pentru transport ADR?",
      de: "Was ist die schriftliche Weisung für ADR-Transport?",
      en: "What is the written instruction for ADR transport?"
    },
    options: {
      ro: ["Factura", "Document cu măsuri de siguranță și acțiuni în caz de accident", "Contractul", "CMR"],
      de: ["Rechnung", "Dokument mit Sicherheitsmaßnahmen und Maßnahmen bei Unfällen", "Vertrag", "CMR"],
      en: ["Invoice", "Document with safety measures and actions in case of accident", "Contract", "CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Instrucțiunea scrisă conține proceduri de urgență, pericole și măsuri de protecție pentru șofer.",
      de: "Die schriftliche Weisung enthält Notfallverfahren, Gefahren und Schutzmaßnahmen für den Fahrer.",
      en: "Written instruction contains emergency procedures, hazards and protective measures for the driver."
    }
  },
  {
    question: {
      ro: "Ce reprezintă clasa 3 ADR?",
      de: "Was stellt ADR-Klasse 3 dar?",
      en: "What does ADR Class 3 represent?"
    },
    options: {
      ro: ["Gaze", "Lichide inflamabile", "Explozivi", "Substanțe radioactive"],
      de: ["Gase", "Entzündbare Flüssigkeiten", "Explosivstoffe", "Radioaktive Stoffe"],
      en: ["Gases", "Flammable liquids", "Explosives", "Radioactive substances"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clasa 3 include toate lichidele inflamabile precum combustibili, solvenți, vopsele.",
      de: "Klasse 3 umfasst alle entzündbaren Flüssigkeiten wie Kraftstoffe, Lösungsmittel, Farben.",
      en: "Class 3 includes all flammable liquids such as fuels, solvents, paints."
    }
  },
  {
    question: {
      ro: "Ce trebuie să facă șoferul în caz de accident cu marfă ADR?",
      de: "Was muss der Fahrer bei einem Unfall mit ADR-Ladung tun?",
      en: "What must the driver do in case of accident with ADR cargo?"
    },
    options: {
      ro: ["Să continue drumul", "Să oprească, alerteze, evacueze zona, folosească echipamentul de protecție", "Să aștepte pe loc", "Să sune familia"],
      de: ["Weiterzufahren", "Anhalten, alarmieren, Bereich evakuieren, Schutzausrüstung verwenden", "Vor Ort warten", "Familie anrufen"],
      en: ["Continue driving", "Stop, alert, evacuate area, use protective equipment", "Wait on spot", "Call family"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Procedura include oprire sigură, alertarea autorităților, evacuarea zonei și utilizarea echipamentului de protecție.",
      de: "Das Verfahren umfasst sicheres Anhalten, Alarmierung der Behörden, Evakuierung des Bereichs und Verwendung von Schutzausrüstung.",
      en: "Procedure includes safe stopping, alerting authorities, evacuating area and using protective equipment."
    }
  },
  {
    question: {
      ro: "Ce restricții de tunel se aplică pentru transportul ADR?",
      de: "Welche Tunnelbeschränkungen gelten für ADR-Transporte?",
      en: "What tunnel restrictions apply for ADR transport?"
    },
    options: {
      ro: ["Nicio restricție", "Categorii de tuneluri (A-E) care permit sau interzic anumite mărfuri", "Doar restricție de viteză", "Doar restricție de înălțime"],
      de: ["Keine Einschränkungen", "Tunnelkategorien (A-E), die bestimmte Güter erlauben oder verbieten", "Nur Geschwindigkeitsbeschränkung", "Nur Höhenbeschränkung"],
      en: ["No restrictions", "Tunnel categories (A-E) allowing or prohibiting certain goods", "Only speed restriction", "Only height restriction"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tunelurile sunt clasificate A-E, fiecare categorie permițând sau interzicând anumite clase ADR.",
      de: "Tunnel werden A-E klassifiziert, jede Kategorie erlaubt oder verbietet bestimmte ADR-Klassen.",
      en: "Tunnels are classified A-E, each category allowing or prohibiting certain ADR classes."
    }
  },
  {
    question: {
      ro: "Ce este o cantitate limitată (LQ) în ADR?",
      de: "Was ist eine begrenzte Menge (LQ) im ADR?",
      en: "What is a limited quantity (LQ) in ADR?"
    },
    options: {
      ro: ["Cantitate maximă transportabilă", "Cantitate mică care beneficiază de scutiri parțiale de reglementări", "Cantitate minimă", "Cantitate gratuită"],
      de: ["Maximale Transportmenge", "Kleine Menge mit Teilbefreiung von Vorschriften", "Mindestmenge", "Gratismenge"],
      en: ["Maximum transportable quantity", "Small quantity benefiting from partial regulation exemptions", "Minimum quantity", "Free quantity"]
    },
    correctIndex: 1,
    explanation: {
      ro: "LQ permite transportul unor cantități mici cu cerințe reduse privind marcarea, echipamentul și formarea.",
      de: "LQ ermöglicht den Transport kleiner Mengen mit reduzierten Anforderungen an Kennzeichnung, Ausrüstung und Schulung.",
      en: "LQ allows transport of small quantities with reduced requirements for marking, equipment and training."
    }
  },
  {
    question: {
      ro: "Ce reprezintă clasa 7 ADR?",
      de: "Was stellt ADR-Klasse 7 dar?",
      en: "What does ADR Class 7 represent?"
    },
    options: {
      ro: ["Lichide inflamabile", "Materiale radioactive", "Gaze", "Substanțe corozive"],
      de: ["Entzündbare Flüssigkeiten", "Radioaktive Stoffe", "Gase", "Ätzende Stoffe"],
      en: ["Flammable liquids", "Radioactive materials", "Gases", "Corrosive substances"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clasa 7 include toate materialele radioactive și necesită cerințe speciale de transport și protecție.",
      de: "Klasse 7 umfasst alle radioaktiven Materialien und erfordert besondere Transport- und Schutzanforderungen.",
      en: "Class 7 includes all radioactive materials and requires special transport and protection requirements."
    }
  },
  {
    question: {
      ro: "Ce este o exceptare sub pragul de 1000 puncte?",
      de: "Was ist eine Freistellung unter der 1000-Punkte-Grenze?",
      en: "What is an exemption below the 1000 points threshold?"
    },
    options: {
      ro: ["Exceptare totală", "Transport cu cerințe reduse dacă suma punctelor mărfurilor < 1000", "Interdicție de transport", "Transport gratuit"],
      de: ["Vollständige Befreiung", "Transport mit reduzierten Anforderungen, wenn Punktesumme der Güter < 1000", "Transportverbot", "Kostenloser Transport"],
      en: ["Total exemption", "Transport with reduced requirements if sum of goods points < 1000", "Transport prohibition", "Free transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Regula 1.1.3.6 permite transport simplificat când suma cantității × factor nu depășește 1000 puncte.",
      de: "Regel 1.1.3.6 erlaubt vereinfachten Transport, wenn die Summe aus Menge × Faktor 1000 Punkte nicht überschreitet.",
      en: "Rule 1.1.3.6 allows simplified transport when sum of quantity × factor does not exceed 1000 points."
    }
  },
  {
    question: {
      ro: "Ce obligații are expeditorul pentru transport ADR?",
      de: "Welche Pflichten hat der Versender für ADR-Transport?",
      en: "What obligations does the shipper have for ADR transport?"
    },
    options: {
      ro: ["Doar să plătească", "Clasificare corectă, ambalare, etichetare, documentare", "Doar să încarce", "Doar să semneze"],
      de: ["Nur zahlen", "Korrekte Klassifizierung, Verpackung, Kennzeichnung, Dokumentation", "Nur beladen", "Nur unterschreiben"],
      en: ["Only pay", "Correct classification, packaging, labeling, documentation", "Only load", "Only sign"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Expeditorul răspunde de clasificarea corectă, ambalarea adecvată, marcarea și furnizarea documentelor.",
      de: "Der Versender ist verantwortlich für korrekte Klassifizierung, angemessene Verpackung, Kennzeichnung und Dokumentenbereitstellung.",
      en: "The shipper is responsible for correct classification, proper packaging, marking and providing documents."
    }
  },
  {
    question: {
      ro: "Ce reprezintă clasa 8 ADR?",
      de: "Was stellt ADR-Klasse 8 dar?",
      en: "What does ADR Class 8 represent?"
    },
    options: {
      ro: ["Explozivi", "Substanțe corozive", "Gaze", "Lichide inflamabile"],
      de: ["Explosivstoffe", "Ätzende Stoffe", "Gase", "Entzündbare Flüssigkeiten"],
      en: ["Explosives", "Corrosive substances", "Gases", "Flammable liquids"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clasa 8 include substanțele care distrug țesuturile vii sau materialele prin acțiune chimică.",
      de: "Klasse 8 umfasst Stoffe, die lebendes Gewebe oder Materialien durch chemische Einwirkung zerstören.",
      en: "Class 8 includes substances that destroy living tissue or materials through chemical action."
    }
  },
  {
    question: {
      ro: "Ce verificări trebuie să facă șoferul înainte de încărcare ADR?",
      de: "Welche Prüfungen muss der Fahrer vor der ADR-Beladung durchführen?",
      en: "What checks must the driver perform before ADR loading?"
    },
    options: {
      ro: ["Nicio verificare", "Starea vehiculului, echipament, documente, compatibilitate marfă", "Doar combustibilul", "Doar cauciucurile"],
      de: ["Keine Prüfung", "Fahrzeugzustand, Ausrüstung, Dokumente, Warenverträglichkeit", "Nur Kraftstoff", "Nur Reifen"],
      en: ["No checks", "Vehicle condition, equipment, documents, goods compatibility", "Only fuel", "Only tires"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Șoferul verifică starea tehnică, prezența echipamentului ADR, documentele și compatibilitatea încărcăturii.",
      de: "Der Fahrer prüft den technischen Zustand, Vorhandensein der ADR-Ausrüstung, Dokumente und Ladungsverträglichkeit.",
      en: "Driver checks technical condition, ADR equipment presence, documents and load compatibility."
    }
  },
  {
    question: {
      ro: "Ce înseamnă segregarea mărfurilor în ADR?",
      de: "Was bedeutet die Gütertrennung im ADR?",
      en: "What does goods segregation mean in ADR?"
    },
    options: {
      ro: ["Separarea administrativă", "Interdicția de a transporta împreună mărfuri incompatibile", "Gruparea mărfurilor", "Sortarea pe culori"],
      de: ["Administrative Trennung", "Verbot, unverträgliche Güter zusammen zu transportieren", "Gütergruppierung", "Farbsortierung"],
      en: ["Administrative separation", "Prohibition of transporting incompatible goods together", "Goods grouping", "Color sorting"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Segregarea impune separarea fizică a mărfurilor care pot reacționa periculos împreună.",
      de: "Die Trennung erfordert die physische Separierung von Gütern, die gefährlich zusammen reagieren können.",
      en: "Segregation requires physical separation of goods that may react dangerously together."
    }
  },
  {
    question: {
      ro: "Ce valabilitate are certificatul ADR al șoferului?",
      de: "Wie lange ist das ADR-Zertifikat des Fahrers gültig?",
      en: "What is the validity of the driver's ADR certificate?"
    },
    options: {
      ro: ["1 an", "5 ani", "10 ani", "Permanent"],
      de: ["1 Jahr", "5 Jahre", "10 Jahre", "Dauerhaft"],
      en: ["1 year", "5 years", "10 years", "Permanent"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Certificatul ADR este valabil 5 ani și poate fi reînnoit prin cursuri de perfecționare.",
      de: "Das ADR-Zertifikat ist 5 Jahre gültig und kann durch Auffrischungskurse verlängert werden.",
      en: "The ADR certificate is valid for 5 years and can be renewed through refresher courses."
    }
  },
  {
    question: {
      ro: "Ce reprezintă clasa 2 ADR?",
      de: "Was stellt ADR-Klasse 2 dar?",
      en: "What does ADR Class 2 represent?"
    },
    options: {
      ro: ["Lichide inflamabile", "Gaze (comprimate, lichefiate, dizolvate)", "Explozivi", "Substanțe toxice"],
      de: ["Entzündbare Flüssigkeiten", "Gase (verdichtet, verflüssigt, gelöst)", "Explosivstoffe", "Giftige Stoffe"],
      en: ["Flammable liquids", "Gases (compressed, liquefied, dissolved)", "Explosives", "Toxic substances"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clasa 2 include toate tipurile de gaze: comprimate, lichefiate, refrigerate și dizolvate.",
      de: "Klasse 2 umfasst alle Gasarten: verdichtet, verflüssigt, tiefgekühlt und gelöst.",
      en: "Class 2 includes all types of gases: compressed, liquefied, refrigerated and dissolved."
    }
  },
  {
    question: {
      ro: "Ce reprezintă consilierul de siguranță ADR?",
      de: "Was bedeutet der ADR-Gefahrgutbeauftragte?",
      en: "What does the ADR safety adviser represent?"
    },
    options: {
      ro: ["Șoferul", "Persoana responsabilă pentru supravegherea conformității ADR în companie", "Clientul", "Polițistul"],
      de: ["Der Fahrer", "Die für die Überwachung der ADR-Konformität im Unternehmen verantwortliche Person", "Der Kunde", "Der Polizist"],
      en: ["The driver", "Person responsible for monitoring ADR compliance in the company", "The client", "The police officer"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Consilierul de siguranță este obligatoriu pentru companiile care manipulează mărfuri periculoase.",
      de: "Der Gefahrgutbeauftragte ist für Unternehmen, die gefährliche Güter handhaben, obligatorisch.",
      en: "The safety adviser is mandatory for companies handling dangerous goods."
    }
  },
  {
    question: {
      ro: "Ce este omologarea ambalajelor ADR?",
      de: "Was ist die ADR-Verpackungszulassung?",
      en: "What is ADR packaging approval?"
    },
    options: {
      ro: ["O formalitate", "Certificare că ambalajul respectă standardele de siguranță pentru clasa respectivă", "O opțiune", "Un design"],
      de: ["Eine Formalität", "Zertifizierung, dass die Verpackung den Sicherheitsstandards für die jeweilige Klasse entspricht", "Eine Option", "Ein Design"],
      en: ["A formality", "Certification that packaging meets safety standards for the respective class", "An option", "A design"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ambalajele ADR trebuie testate și certificate conform standardelor UN pentru a garanta siguranța.",
      de: "ADR-Verpackungen müssen gemäß UN-Standards getestet und zertifiziert werden, um die Sicherheit zu gewährleisten.",
      en: "ADR packaging must be tested and certified according to UN standards to guarantee safety."
    }
  },
  {
    question: {
      ro: "Ce restricții există pentru transportul ADR în weekend?",
      de: "Welche Beschränkungen gibt es für ADR-Transporte am Wochenende?",
      en: "What restrictions exist for ADR transport on weekends?"
    },
    options: {
      ro: ["Nicio restricție", "Unele țări interzic sau restricționează transportul în weekend și sărbători", "Transport gratuit", "Transport obligatoriu"],
      de: ["Keine Einschränkungen", "Einige Länder verbieten oder beschränken den Transport an Wochenenden und Feiertagen", "Kostenloser Transport", "Pflichtransport"],
      en: ["No restrictions", "Some countries prohibit or restrict transport on weekends and holidays", "Free transport", "Mandatory transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multe țări europene au restricții de circulație pentru ADR în weekend și sărbători legale.",
      de: "Viele europäische Länder haben Verkehrsbeschränkungen für ADR an Wochenenden und gesetzlichen Feiertagen.",
      en: "Many European countries have traffic restrictions for ADR on weekends and public holidays."
    }
  },
  {
    question: {
      ro: "Ce reprezintă clasa 6.1 ADR?",
      de: "Was stellt ADR-Klasse 6.1 dar?",
      en: "What does ADR Class 6.1 represent?"
    },
    options: {
      ro: ["Lichide inflamabile", "Substanțe toxice", "Gaze", "Explozivi"],
      de: ["Entzündbare Flüssigkeiten", "Giftige Stoffe", "Gase", "Explosivstoffe"],
      en: ["Flammable liquids", "Toxic substances", "Gases", "Explosives"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clasa 6.1 include substanțele care pot cauza deces sau vătămări grave prin inhalare, ingestie sau contact.",
      de: "Klasse 6.1 umfasst Stoffe, die durch Einatmen, Verschlucken oder Kontakt Tod oder schwere Verletzungen verursachen können.",
      en: "Class 6.1 includes substances that can cause death or serious injury through inhalation, ingestion or contact."
    }
  }
];

export function getRandomAdrQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...adrQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
