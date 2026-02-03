import { TranslatedQuizQuestion } from "@/data/quizTranslations";

export const customsComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    id: "customs_comp_1",
    difficultyLevel: 3,
    question: {
      ro: "Ce este codul tarifar vamal (HS Code) și care este structura sa?",
      de: "Was ist der Zolltarifcode (HS-Code) und wie ist seine Struktur?",
      en: "What is the customs tariff code (HS Code) and what is its structure?"
    },
    options: {
      ro: ["Sistem de clasificare cu 6 cifre (universal) + extensii naționale pentru identificarea produselor și taxelor aplicabile", "Număr de înregistrare a vehiculului", "Cod de transport pentru CMR", "Număr de licență export"],
      de: ["Klassifizierungssystem mit 6 Ziffern (universal) + nationale Erweiterungen zur Identifikation von Produkten und anwendbaren Zöllen", "Fahrzeugregistrierungsnummer", "Transportcode für CMR", "Exportlizenznummer"],
      en: ["Classification system with 6 digits (universal) + national extensions to identify products and applicable duties", "Vehicle registration number", "Transport code for CMR", "Export license number"]
    },
    correctIndex: 0,
    explanation: {
      ro: "HS (Harmonized System) e standard global. Primele 6 cifre sunt universale. UE folosește 8 cifre (CN), iar la import uneori 10 (TARIC).",
      de: "HS (Harmonized System) ist globaler Standard. Erste 6 Ziffern sind universal. EU verwendet 8 Ziffern (CN), bei Import manchmal 10 (TARIC).",
      en: "HS (Harmonized System) is global standard. First 6 digits are universal. EU uses 8 digits (CN), at import sometimes 10 (TARIC)."
    }
  },
  {
    id: "customs_comp_2",
    difficultyLevel: 3,
    question: {
      ro: "Ce este valoarea în vamă și pe ce bază se calculează taxele vamale?",
      de: "Was ist der Zollwert und auf welcher Grundlage werden Zölle berechnet?",
      en: "What is customs value and on what basis are customs duties calculated?"
    },
    options: {
      ro: ["De obicei valoarea tranzacției (prețul plătit/de plătit) ajustată conform regulilor WTO", "Greutatea mărfii", "Distanța de transport", "Vechimea produsului"],
      de: ["Normalerweise Transaktionswert (gezahlter/zu zahlender Preis) angepasst nach WTO-Regeln", "Warengewicht", "Transportentfernung", "Produktalter"],
      en: ["Usually transaction value (price paid/payable) adjusted according to WTO rules", "Goods weight", "Transport distance", "Product age"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Valoarea vamală = baza pentru calcul taxe. Include prețul mărfii + transport/asigurare până la frontiera UE (CIF sau DAP vamă).",
      de: "Zollwert = Grundlage für Zollberechnung. Beinhaltet Warenpreis + Transport/Versicherung bis EU-Grenze (CIF oder DAP Zoll).",
      en: "Customs value = basis for duty calculation. Includes goods price + transport/insurance to EU border (CIF or DAP customs)."
    }
  },
  {
    id: "customs_comp_3",
    difficultyLevel: 3,
    question: {
      ro: "Ce este EORI și de ce este necesar?",
      de: "Was ist EORI und warum ist es erforderlich?",
      en: "What is EORI and why is it required?"
    },
    options: {
      ro: ["Economic Operators Registration and Identification - număr unic pentru operațiuni vamale în UE", "Licență de export obligatorie", "Certificat de transport internațional", "Cod de asigurare marfă"],
      de: ["Economic Operators Registration and Identification - einzigartige Nummer für Zolloperationen in EU", "Obligatorische Exportlizenz", "Internationales Transportzertifikat", "Frachtversicherungscode"],
      en: ["Economic Operators Registration and Identification - unique number for customs operations in EU", "Mandatory export license", "International transport certificate", "Cargo insurance code"]
    },
    correctIndex: 0,
    explanation: {
      ro: "EORI e obligatoriu pentru orice operator care face import/export în/din UE. Se obține o singură dată și e valid în toate statele membre.",
      de: "EORI ist obligatorisch für jeden Operator der Import/Export in/aus EU macht. Wird einmal erhalten und gilt in allen Mitgliedstaaten.",
      en: "EORI is mandatory for any operator doing import/export to/from EU. Obtained once and valid in all member states."
    }
  },
  {
    id: "customs_comp_4",
    difficultyLevel: 3,
    question: {
      ro: "Ce este o declarație vamală și ce informații conține?",
      de: "Was ist eine Zollanmeldung und welche Informationen enthält sie?",
      en: "What is a customs declaration and what information does it contain?"
    },
    options: {
      ro: ["Document oficial cu date despre marfă, expeditor, destinatar, valoare, origine - baza pentru calculul taxelor și admiterea în țară", "Doar factura comercială", "Scrisoare de transport CMR", "Certificat de calitate produs"],
      de: ["Offizielles Dokument mit Daten über Ware, Versender, Empfänger, Wert, Ursprung - Grundlage für Zollberechnung und Landeseinlass", "Nur Handelsrechnung", "CMR-Frachtbrief", "Produktqualitätszertifikat"],
      en: ["Official document with data about goods, sender, consignee, value, origin - basis for duty calculation and country admission", "Only commercial invoice", "CMR consignment note", "Product quality certificate"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Declarația vamală (SAD în UE) e obligatorie la import/export din/în țări terțe. Informațiile inexacte duc la amenzi sau confiscare.",
      de: "Zollanmeldung (SAD in EU) ist obligatorisch bei Import/Export aus/in Drittländer. Ungenaue Angaben führen zu Bußgeldern oder Beschlagnahme.",
      en: "Customs declaration (SAD in EU) is mandatory for import/export from/to third countries. Inaccurate information leads to fines or confiscation."
    }
  },
  {
    id: "customs_comp_5",
    difficultyLevel: 3,
    question: {
      ro: "Ce este regimul de tranzit vamal T1?",
      de: "Was ist das Zollversandverfahren T1?",
      en: "What is the T1 customs transit regime?"
    },
    options: {
      ro: ["Permite transportul mărfurilor non-UE prin UE fără plata taxelor vamale, sub supraveghere vamală", "Regim pentru mărfuri UE exportate", "Procedură pentru import definitiv", "Autorizație pentru depozitare temporară"],
      de: ["Erlaubt Transport von Nicht-EU-Waren durch EU ohne Zollzahlung, unter Zollaufsicht", "Verfahren für exportierte EU-Waren", "Verfahren für endgültigen Import", "Genehmigung für vorübergehende Lagerung"],
      en: ["Allows transport of non-EU goods through EU without customs payment, under customs supervision", "Regime for exported EU goods", "Procedure for definitive import", "Authorization for temporary storage"]
    },
    correctIndex: 0,
    explanation: {
      ro: "T1 suspendă taxele vamale pe timpul tranzitului. Marfa rămâne 'în tranzit' până la destinația unde se face vămuirea de import.",
      de: "T1 setzt Zölle während Transit aus. Ware bleibt 'im Transit' bis zum Ziel wo Einfuhrverzollung erfolgt.",
      en: "T1 suspends customs duties during transit. Goods remain 'in transit' until destination where import clearance is done."
    }
  },
  {
    id: "customs_comp_6",
    difficultyLevel: 3,
    question: {
      ro: "Ce documente sunt necesare pentru vămuirea de import în UE?",
      de: "Welche Dokumente sind für die Einfuhrverzollung in die EU erforderlich?",
      en: "What documents are needed for import customs clearance in EU?"
    },
    options: {
      ro: ["Declarație vamală, factură comercială, packing list, documente transport (CMR/B/L), certificat de origine, alte certificate specifice", "Doar factura comercială", "Exclusiv CMR-ul", "Niciun document suplimentar față de transport"],
      de: ["Zollanmeldung, Handelsrechnung, Packliste, Transportdokumente (CMR/B/L), Ursprungszertifikat, andere spezifische Zertifikate", "Nur Handelsrechnung", "Ausschließlich CMR", "Keine zusätzlichen Dokumente gegenüber Transport"],
      en: ["Customs declaration, commercial invoice, packing list, transport documents (CMR/B/L), certificate of origin, other specific certificates", "Only commercial invoice", "Exclusively CMR", "No additional documents vs transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Documentația completă previne întârzieri și costuri suplimentare. Produsele reglementate (alimentare, farmaceutice) au cerințe adiționale.",
      de: "Vollständige Dokumentation verhindert Verzögerungen und zusätzliche Kosten. Regulierte Produkte (Lebensmittel, Pharma) haben zusätzliche Anforderungen.",
      en: "Complete documentation prevents delays and extra costs. Regulated products (food, pharma) have additional requirements."
    }
  },
  {
    id: "customs_comp_7",
    difficultyLevel: 3,
    question: {
      ro: "Ce este un agent vamal (broker vamal) și ce rol are?",
      de: "Was ist ein Zollagent (Zollmakler) und welche Rolle hat er?",
      en: "What is a customs agent (customs broker) and what role do they have?"
    },
    options: {
      ro: ["Reprezentant licențiat care face formalitățile vamale în numele importatorului/exportatorului", "Angajat al vămii", "Inspector vamal", "Transportator specializat"],
      de: ["Lizenzierter Vertreter der Zollformalitäten im Namen des Importeurs/Exporteurs erledigt", "Zollangestellter", "Zollinspektor", "Spezialisierter Transporteur"],
      en: ["Licensed representative who does customs formalities on behalf of importer/exporter", "Customs employee", "Customs inspector", "Specialized carrier"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Agentul vamal cunoaște legislația și procedurile. Poate accelera procesul și preveni erori costisitoare. Reprezentarea poate fi directă sau indirectă.",
      de: "Zollagent kennt Gesetzgebung und Verfahren. Kann Prozess beschleunigen und kostspielige Fehler verhindern. Vertretung kann direkt oder indirekt sein.",
      en: "Customs agent knows legislation and procedures. Can speed up process and prevent costly errors. Representation can be direct or indirect."
    }
  },
  {
    id: "customs_comp_8",
    difficultyLevel: 3,
    question: {
      ro: "Ce este certificatul de origine și când este necesar?",
      de: "Was ist das Ursprungszertifikat und wann ist es erforderlich?",
      en: "What is the certificate of origin and when is it required?"
    },
    options: {
      ro: ["Document care atestă țara unde a fost produsă marfa; necesar pentru tarife preferențiale sau cerințe comerciale specifice", "Certificat de calitate produs", "Licență de fabricație", "Autorizație de export"],
      de: ["Dokument das Land bescheinigt wo Ware produziert wurde; erforderlich für Vorzugszölle oder spezifische Handelsanforderungen", "Produktqualitätszertifikat", "Herstellungslizenz", "Exportgenehmigung"],
      en: ["Document certifying country where goods were produced; needed for preferential tariffs or specific trade requirements", "Product quality certificate", "Manufacturing license", "Export authorization"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Originea determină taxele aplicabile. EUR.1, Form A, declarația pe factură - diferite tipuri pentru diferite acorduri comerciale.",
      de: "Ursprung bestimmt anwendbare Zölle. EUR.1, Form A, Rechnungserklärung - verschiedene Typen für verschiedene Handelsabkommen.",
      en: "Origin determines applicable duties. EUR.1, Form A, invoice declaration - different types for different trade agreements."
    }
  },
  {
    id: "customs_comp_9",
    difficultyLevel: 3,
    question: {
      ro: "Ce tipuri de taxe se plătesc la importul în UE?",
      de: "Welche Arten von Abgaben werden beim Import in die EU bezahlt?",
      en: "What types of duties are paid on import to EU?"
    },
    options: {
      ro: ["Taxe vamale (bazate pe HS code), TVA import, accize (pentru anumite produse), taxe anti-dumping dacă aplicabil", "Doar TVA", "Exclusiv taxe vamale", "Nicio taxă pentru importurile comerciale"],
      de: ["Zölle (basierend auf HS-Code), Einfuhr-MwSt, Verbrauchsteuern (für bestimmte Produkte), Anti-Dumping-Zölle wenn zutreffend", "Nur MwSt", "Ausschließlich Zölle", "Keine Abgaben für kommerzielle Importe"],
      en: ["Customs duties (based on HS code), import VAT, excise duties (for certain products), anti-dumping duties if applicable", "Only VAT", "Exclusively customs duties", "No duties for commercial imports"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Costul total import = taxă vamală + TVA pe (valoare + taxă vamală) + accize + alte taxe specifice. Poate fi semnificativ!",
      de: "Import-Gesamtkosten = Zoll + MwSt auf (Wert + Zoll) + Verbrauchsteuern + andere spezifische Abgaben. Kann erheblich sein!",
      en: "Total import cost = customs duty + VAT on (value + duty) + excise + other specific duties. Can be significant!"
    }
  },
  {
    id: "customs_comp_10",
    difficultyLevel: 3,
    question: {
      ro: "Ce este depozitul vamal și care sunt avantajele sale?",
      de: "Was ist das Zolllager und was sind seine Vorteile?",
      en: "What is a customs warehouse and what are its advantages?"
    },
    options: {
      ro: ["Loc autorizat unde mărfurile pot fi stocate fără plata taxelor vamale până la punerea în liberă circulație sau reexport", "Depozit obișnuit cu licență de funcționare", "Magazin duty-free", "Terminal de transport"],
      de: ["Autorisierter Ort wo Waren ohne Zollzahlung gelagert werden können bis zur Überführung in freien Verkehr oder Wiederausfuhr", "Normales Lager mit Betriebslizenz", "Duty-Free-Laden", "Transportterminal"],
      en: ["Authorized place where goods can be stored without customs payment until release to free circulation or re-export", "Regular warehouse with operating license", "Duty-free shop", "Transport terminal"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Depozitul vamal: amânarea plății taxelor, flexibilitate pentru destinația finală, optimizare cash-flow. Ideal pentru distribuție regională.",
      de: "Zolllager: Stundung der Zollzahlung, Flexibilität für Endziel, Cashflow-Optimierung. Ideal für regionale Distribution.",
      en: "Customs warehouse: deferral of duty payment, flexibility for final destination, cash-flow optimization. Ideal for regional distribution."
    }
  },
  
  // Level 4 Questions (10)
  {
    id: "customs_comp_11",
    difficultyLevel: 4,
    question: {
      ro: "Cum se determină originea preferențială pentru a beneficia de tarife reduse?",
      de: "Wie wird der Präferenzursprung bestimmt um von reduzierten Zöllen zu profitieren?",
      en: "How is preferential origin determined to benefit from reduced tariffs?"
    },
    options: {
      ro: ["Regulile de origine specifice acordului: transformare substanțială, procent valoare adăugată local, schimbare de poziție tarifară", "Doar țara de expediere contează", "Eticheta 'Made in' e suficientă", "Declarația furnizorului fără verificare"],
      de: ["Ursprungsregeln spezifisch für Abkommen: wesentliche Umwandlung, lokaler Wertschöpfungsanteil, Änderung der Zolltarifposition", "Nur Versandland zählt", "Etikett 'Made in' ist ausreichend", "Lieferantenerklärung ohne Prüfung"],
      en: ["Origin rules specific to agreement: substantial transformation, local value added percentage, tariff heading change", "Only shipping country matters", "'Made in' label is sufficient", "Supplier declaration without verification"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Originea preferențială ≠ originea simplă. Regulile diferă per acord comercial și per produs. Documentația de susținere e crucială.",
      de: "Präferenzursprung ≠ einfacher Ursprung. Regeln unterscheiden sich pro Handelsabkommen und Produkt. Unterstützende Dokumentation ist entscheidend.",
      en: "Preferential origin ≠ simple origin. Rules differ per trade agreement and product. Supporting documentation is crucial."
    }
  },
  {
    id: "customs_comp_12",
    difficultyLevel: 4,
    question: {
      ro: "Ce este AEO (Authorized Economic Operator) și ce avantaje oferă?",
      de: "Was ist AEO (Zugelassener Wirtschaftsbeteiligter) und welche Vorteile bietet er?",
      en: "What is AEO (Authorized Economic Operator) and what advantages does it offer?"
    },
    options: {
      ro: ["Statut acordat operatorilor de încredere: controale vamale reduse, prioritate la verificări, facilități la proceduri", "Licență obligatorie de import", "Certificat pentru transport intern", "Autorizație pentru depozitare"],
      de: ["Status für vertrauenswürdige Operatoren: reduzierte Zollkontrollen, Priorität bei Prüfungen, Verfahrenserleichterungen", "Obligatorische Importlizenz", "Zertifikat für Inlandstransport", "Lagergenehmigung"],
      en: ["Status granted to trusted operators: reduced customs controls, priority at checks, procedural facilities", "Mandatory import license", "Certificate for domestic transport", "Storage authorization"]
    },
    correctIndex: 0,
    explanation: {
      ro: "AEO-C (simplificare vamală), AEO-S (securitate), AEO-F (ambele). Certificarea necesită audit și îndeplinirea criteriilor stricte.",
      de: "AEO-C (Zollvereinfachung), AEO-S (Sicherheit), AEO-F (beides). Zertifizierung erfordert Audit und Erfüllung strenger Kriterien.",
      en: "AEO-C (customs simplification), AEO-S (security), AEO-F (both). Certification requires audit and meeting strict criteria."
    }
  },
  {
    id: "customs_comp_13",
    difficultyLevel: 4,
    question: {
      ro: "Cum afectează Incoterms procedurile de vămuire?",
      de: "Wie beeinflussen Incoterms die Zollverfahren?",
      en: "How do Incoterms affect customs procedures?"
    },
    options: {
      ro: ["Determină cine e responsabil pentru formalitățile de export/import și cine e importatorul/exportatorul de record", "Nu au legătură cu vămuirea", "Doar afectează transportul", "Vama decide indiferent de Incoterms"],
      de: ["Bestimmen wer für Export-/Importformalitäten verantwortlich ist und wer Importeur/Exporteur of Record ist", "Keine Verbindung zur Verzollung", "Beeinflussen nur Transport", "Zoll entscheidet unabhängig von Incoterms"],
      en: ["Determine who is responsible for export/import formalities and who is importer/exporter of record", "No connection to customs clearance", "Only affect transport", "Customs decides regardless of Incoterms"]
    },
    correctIndex: 0,
    explanation: {
      ro: "EXW: cumpărătorul face export și import. DDP: vânzătorul face ambele. DAP: vânzătorul export, cumpărătorul import. Alegerea afectează responsabilitatea.",
      de: "EXW: Käufer macht Export und Import. DDP: Verkäufer macht beides. DAP: Verkäufer Export, Käufer Import. Wahl beeinflusst Verantwortlichkeit.",
      en: "EXW: buyer does export and import. DDP: seller does both. DAP: seller export, buyer import. Choice affects responsibility."
    }
  },
  {
    id: "customs_comp_14",
    difficultyLevel: 4,
    question: {
      ro: "Ce este regimul de perfecționare activă și când se folosește?",
      de: "Was ist das Verfahren der aktiven Veredelung und wann wird es verwendet?",
      en: "What is the inward processing regime and when is it used?"
    },
    options: {
      ro: ["Permite importul temporar fără taxe al mărfurilor pentru prelucrare și reexport al produsului finit", "Import definitiv cu taxe reduse", "Export temporar pentru reparații", "Stocare în antrepozit vamal"],
      de: ["Erlaubt zollfreien temporären Import von Waren zur Verarbeitung und Wiederausfuhr des Endprodukts", "Endgültiger Import mit reduzierten Zöllen", "Temporärer Export zur Reparatur", "Lagerung im Zolllager"],
      en: ["Allows duty-free temporary import of goods for processing and re-export of finished product", "Definitive import with reduced duties", "Temporary export for repairs", "Storage in customs warehouse"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Perfecționare activă: ex. import material textil, fabricare îmbrăcăminte, export. Taxele se plătesc doar dacă produsul finit rămâne în UE.",
      de: "Aktive Veredelung: z.B. Import Textilmaterial, Kleiderherstellung, Export. Zölle nur wenn Endprodukt in EU bleibt.",
      en: "Inward processing: e.g. import textile material, manufacture clothing, export. Duties paid only if finished product stays in EU."
    }
  },
  {
    id: "customs_comp_15",
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi o situație când marfa este oprită la vamă pentru verificări suplimentare?",
      de: "Wie handhaben Sie eine Situation wenn Ware beim Zoll für zusätzliche Prüfungen gestoppt wird?",
      en: "How do you handle a situation when goods are stopped at customs for additional checks?"
    },
    options: {
      ro: ["Furnizezi imediat documentația cerută, comunici cu agentul vamal, informezi clientul, documentezi costurile suplimentare", "Aștepți pasiv fără acțiune", "Abandonezi marfa", "Refuzi să cooperezi cu vama"],
      de: ["Angeforderte Dokumentation sofort bereitstellen, mit Zollagent kommunizieren, Kunden informieren, zusätzliche Kosten dokumentieren", "Passiv warten ohne Aktion", "Ware aufgeben", "Kooperation mit Zoll verweigern"],
      en: ["Immediately provide requested documentation, communicate with customs agent, inform customer, document additional costs", "Wait passively without action", "Abandon goods", "Refuse to cooperate with customs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Întârzierile vamale generează costuri (demurrage, stocare). Reactivitatea și documentația completă minimizează pierderile.",
      de: "Zollverzögerungen erzeugen Kosten (Liegegebühren, Lagerung). Reaktionsfähigkeit und vollständige Dokumentation minimieren Verluste.",
      en: "Customs delays generate costs (demurrage, storage). Responsiveness and complete documentation minimize losses."
    }
  },
  {
    id: "customs_comp_16",
    difficultyLevel: 4,
    question: {
      ro: "Care sunt diferențele între reprezentarea directă și indirectă în vămuire?",
      de: "Was sind die Unterschiede zwischen direkter und indirekter Vertretung in der Verzollung?",
      en: "What are the differences between direct and indirect representation in customs?"
    },
    options: {
      ro: ["Directă: agentul acționează în numele și pe seama clientului; Indirectă: agentul acționează în nume propriu dar pe seama clientului - diferă responsabilitatea", "Nu există diferență practică", "Directă e doar pentru import, indirectă pentru export", "Doar companiile mari pot folosi reprezentare directă"],
      de: ["Direkt: Agent handelt im Namen und für Rechnung des Kunden; Indirekt: Agent handelt im eigenen Namen aber für Rechnung des Kunden - Verantwortlichkeit unterscheidet sich", "Kein praktischer Unterschied", "Direkt nur für Import, indirekt für Export", "Nur große Firmen können direkte Vertretung nutzen"],
      en: ["Direct: agent acts in name and on behalf of customer; Indirect: agent acts in own name but on behalf of customer - responsibility differs", "No practical difference", "Direct only for import, indirect for export", "Only large companies can use direct representation"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Reprezentare indirectă: agentul devine co-responsabil pentru datoria vamală. Afectează prețul serviciilor și riscul asumat.",
      de: "Indirekte Vertretung: Agent wird mitverantwortlich für Zollschuld. Beeinflusst Servicepreis und übernommenes Risiko.",
      en: "Indirect representation: agent becomes co-responsible for customs debt. Affects service price and assumed risk."
    }
  },
  {
    id: "customs_comp_17",
    difficultyLevel: 4,
    question: {
      ro: "Ce sunt măsurile de apărare comercială și cum afectează importurile?",
      de: "Was sind handelspolitische Schutzmaßnahmen und wie beeinflussen sie Importe?",
      en: "What are trade defense measures and how do they affect imports?"
    },
    options: {
      ro: ["Taxe suplimentare (anti-dumping, compensatorii, salvgardare) aplicate pentru protejarea industriei UE de concurență neloială", "Sancțiuni pentru întârzieri la livrare", "Penalități pentru documente incomplete", "Restricții de circulație în UE"],
      de: ["Zusätzliche Zölle (Anti-Dumping, Ausgleich, Schutz) zum Schutz der EU-Industrie vor unlauterem Wettbewerb", "Sanktionen für Lieferverzögerungen", "Strafen für unvollständige Dokumente", "Verkehrsbeschränkungen in EU"],
      en: ["Additional duties (anti-dumping, countervailing, safeguard) applied to protect EU industry from unfair competition", "Penalties for delivery delays", "Fines for incomplete documents", "Circulation restrictions in EU"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Ex: taxe anti-dumping pe oțel din China, pe panouri solare. Pot fi foarte semnificative (20-60%+). Verificarea e obligatorie înainte de import.",
      de: "Bsp: Anti-Dumping-Zölle auf Stahl aus China, auf Solarmodule. Können sehr erheblich sein (20-60%+). Prüfung vor Import obligatorisch.",
      en: "E.g.: anti-dumping duties on steel from China, on solar panels. Can be very significant (20-60%+). Verification before import mandatory."
    }
  },
  {
    id: "customs_comp_18",
    difficultyLevel: 4,
    question: {
      ro: "Cum se calculează corect valoarea în vamă pentru import?",
      de: "Wie wird der Zollwert für Import korrekt berechnet?",
      en: "How is customs value for import correctly calculated?"
    },
    options: {
      ro: ["Valoarea tranzacției + transport până la granița UE + asigurare + orice alte costuri anterioare intrării în UE (CIF)", "Doar prețul de pe factură", "Valoarea de pe packing list", "Prețul de piață estimat"],
      de: ["Transaktionswert + Transport bis EU-Grenze + Versicherung + alle anderen Kosten vor EU-Eintritt (CIF)", "Nur Rechnungspreis", "Wert auf Packliste", "Geschätzter Marktpreis"],
      en: ["Transaction value + transport to EU border + insurance + any other costs before EU entry (CIF)", "Only invoice price", "Value on packing list", "Estimated market price"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Metode de evaluare WTO: 1) Valoarea tranzacției (primară). Dacă nu e aplicabilă: 2) Mărfuri identice 3) Similare 4) Deductivă 5) Calculată 6) Fall-back.",
      de: "WTO-Bewertungsmethoden: 1) Transaktionswert (primär). Wenn nicht anwendbar: 2) Identische Waren 3) Ähnliche 4) Deduktiv 5) Berechnet 6) Fallback.",
      en: "WTO valuation methods: 1) Transaction value (primary). If not applicable: 2) Identical goods 3) Similar 4) Deductive 5) Computed 6) Fall-back."
    }
  },
  {
    id: "customs_comp_19",
    difficultyLevel: 4,
    question: {
      ro: "Ce este ICS (Import Control System) și de ce este important?",
      de: "Was ist ICS (Import Control System) und warum ist es wichtig?",
      en: "What is ICS (Import Control System) and why is it important?"
    },
    options: {
      ro: ["Sistem electronic pentru declarații sumare de intrare (ENS) înainte de sosirea mărfurilor în UE - securitate", "Sistem de inventar pentru depozite", "Control intern al companiilor", "Sistem pentru urmărirea camioanelor"],
      de: ["Elektronisches System für summarische Eingangsanmeldungen (ENS) vor Warenankunft in EU - Sicherheit", "Inventarsystem für Lager", "Interne Firmenkontrolle", "LKW-Verfolgungssystem"],
      en: ["Electronic system for entry summary declarations (ENS) before goods arrival in EU - security", "Inventory system for warehouses", "Internal company control", "Truck tracking system"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ENS trebuie depusă înainte de sosire (24h pentru maritim, 4h pentru rutier). Permite analiza de risc și securitate înainte ca marfa să ajungă.",
      de: "ENS muss vor Ankunft eingereicht werden (24h für See, 4h für Straße). Ermöglicht Risiko- und Sicherheitsanalyse bevor Ware ankommt.",
      en: "ENS must be filed before arrival (24h for sea, 4h for road). Allows risk and security analysis before goods arrive."
    }
  },
  {
    id: "customs_comp_20",
    difficultyLevel: 4,
    question: {
      ro: "Care sunt consecințele clasificării tarifare greșite?",
      de: "Was sind die Folgen einer falschen Tarifklassifizierung?",
      en: "What are the consequences of wrong tariff classification?"
    },
    options: {
      ro: ["Plata retroactivă a diferenței de taxe + dobânzi + posibil amenzi, investigații, pierderea statutului AEO", "Doar o avertizare", "Nicio consecință pentru erori neintenționate", "Doar returnarea mărfii"],
      de: ["Rückwirkende Zahlung der Zolldifferenz + Zinsen + mögliche Bußgelder, Untersuchungen, AEO-Statusverlust", "Nur eine Warnung", "Keine Folgen für unbeabsichtigte Fehler", "Nur Warenrücksendung"],
      en: ["Retroactive payment of duty difference + interest + possible fines, investigations, loss of AEO status", "Just a warning", "No consequences for unintentional errors", "Only goods return"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Vama poate verifica 3 ani înapoi. Clasificarea greșită, chiar neintenționată, generează datorii vamale suplimentare. BTI (Binding Tariff Information) oferă certitudine.",
      de: "Zoll kann 3 Jahre zurück prüfen. Falsche Klassifizierung, selbst unbeabsichtigt, erzeugt zusätzliche Zollschulden. VZTA bietet Sicherheit.",
      en: "Customs can check 3 years back. Wrong classification, even unintentional, generates additional customs debts. BTI provides certainty."
    }
  },
  
  // Level 5 Questions (10)
  {
    id: "customs_comp_21",
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Import de componente electronice din China cu preț sub valoarea de piață. Ce riscuri vamale există?",
      de: "Szenario: Import von Elektronikkomponenten aus China unter Marktpreis. Welche Zollrisiken bestehen?",
      en: "Scenario: Import of electronic components from China at below-market price. What customs risks exist?"
    },
    options: {
      ro: ["Suspiciune de subfacturare, posibil ajustare valoare de către vamă, investigație pentru fraudă, taxe suplimentare + amenzi", "Prețul mic e întotdeauna acceptat", "China e exceptată de la verificări", "Doar factura contează, nu prețul pieței"],
      de: ["Verdacht auf Unterfakturierung, mögliche Wertanpassung durch Zoll, Betrugsmittlung, zusätzliche Zölle + Bußgelder", "Niedriger Preis wird immer akzeptiert", "China ist von Prüfungen befreit", "Nur Rechnung zählt, nicht Marktpreis"],
      en: ["Suspicion of under-invoicing, possible value adjustment by customs, fraud investigation, additional duties + fines", "Low price is always accepted", "China is exempt from checks", "Only invoice matters, not market price"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Vama verifică dacă prețul declarat e plauzibil. Subfacturarea intenționată e fraudă vamală - infracțiune cu consecințe penale.",
      de: "Zoll prüft ob deklarierter Preis plausibel ist. Absichtliche Unterfakturierung ist Zollbetrug - Straftat mit strafrechtlichen Folgen.",
      en: "Customs checks if declared price is plausible. Intentional under-invoicing is customs fraud - criminal offense with criminal consequences."
    }
  },
  {
    id: "customs_comp_22",
    difficultyLevel: 5,
    question: {
      ro: "Cum optimizezi legal costurile vamale pentru o companie cu import regulat din țări terțe?",
      de: "Wie optimieren Sie legal Zollkosten für eine Firma mit regelmäßigem Import aus Drittländern?",
      en: "How do you legally optimize customs costs for a company with regular import from third countries?"
    },
    options: {
      ro: ["Verificare origine preferențială, clasificare optimă, regimuri speciale (depozit, perfecționare), AEO pentru simplificări", "Declarare valoare mai mică", "Schimbarea țării de origine pe documente", "Evitarea vămuirii prin rute alternative"],
      de: ["Präferenzursprung prüfen, optimale Klassifizierung, Sonderverfahren (Lager, Veredelung), AEO für Vereinfachungen", "Niedrigeren Wert deklarieren", "Ursprungsland auf Dokumenten ändern", "Verzollung durch Alternativrouten vermeiden"],
      en: ["Check preferential origin, optimal classification, special regimes (warehouse, processing), AEO for simplifications", "Declare lower value", "Change origin country on documents", "Avoid customs through alternative routes"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Optimizarea legală: utilizare acorduri comerciale, regimuri suspensive, clasificare corectă (nu încadrare greșită). Planificare supply chain.",
      de: "Legale Optimierung: Handelsabkommen nutzen, Aussetzungsverfahren, korrekte Klassifizierung (keine Falscheinreihung). Supply-Chain-Planung.",
      en: "Legal optimization: use trade agreements, suspension regimes, correct classification (not wrong categorization). Supply chain planning."
    }
  },
  {
    id: "customs_comp_23",
    difficultyLevel: 5,
    question: {
      ro: "Care sunt implicațiile post-Brexit pentru transportul de mărfuri UE-UK?",
      de: "Was sind die Auswirkungen nach Brexit für den Warenverkehr EU-UK?",
      en: "What are the post-Brexit implications for EU-UK goods transport?"
    },
    options: {
      ro: ["Formalități vamale complete, declarații export/import, verificări SPS pentru produse de origine animală, posibile taxe pentru produse fără origine", "Nicio schimbare pentru transport comercial", "Doar documente noi, fără proceduri vamale", "Brexit nu afectează transportul de mărfuri"],
      de: ["Vollständige Zollformalitäten, Export-/Importanmeldungen, SPS-Kontrollen für tierische Produkte, mögliche Zölle für Produkte ohne Ursprung", "Keine Änderung für kommerziellen Transport", "Nur neue Dokumente, keine Zollverfahren", "Brexit beeinflusst Warenverkehr nicht"],
      en: ["Complete customs formalities, export/import declarations, SPS checks for products of animal origin, possible duties for products without origin", "No change for commercial transport", "Only new documents, no customs procedures", "Brexit doesn't affect goods transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "UK e țară terță. TCA oferă zero taxe pentru produse cu origine, dar formalitățile sunt complete. Produsele SPS au controale suplimentare stricte.",
      de: "UK ist Drittland. TCA bietet null Zölle für Ursprungsprodukte, aber Formalitäten sind vollständig. SPS-Produkte haben strenge zusätzliche Kontrollen.",
      en: "UK is third country. TCA offers zero duties for origin products, but formalities are complete. SPS products have strict additional controls."
    }
  },
  {
    id: "customs_comp_24",
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi un control vamal care descoperă discrepanțe între documente și marfa fizică?",
      de: "Wie handhaben Sie eine Zollkontrolle die Diskrepanzen zwischen Dokumenten und physischer Ware entdeckt?",
      en: "How do you handle a customs control that discovers discrepancies between documents and physical goods?"
    },
    options: {
      ro: ["Cooperezi complet, furnizezi explicații și documente suplimentare, rectifici declarația dacă e eroare, consulți avocat dacă suspiciune de fraudă", "Refuzi să răspunzi întrebărilor", "Învinuiești furnizorul imediat", "Abandonezi marfa și pleci"],
      de: ["Vollständig kooperieren, Erklärungen und zusätzliche Dokumente liefern, Anmeldung bei Fehler berichtigen, Anwalt konsultieren bei Betrugsverdacht", "Antworten verweigern", "Lieferanten sofort beschuldigen", "Ware aufgeben und gehen"],
      en: ["Cooperate fully, provide explanations and additional documents, rectify declaration if error, consult lawyer if fraud suspected", "Refuse to answer questions", "Blame supplier immediately", "Abandon goods and leave"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Discrepanțele pot fi erori sau fraudă. Cooperarea și documentația suplimentară pot clarifica. Avocat specializat pentru situații complexe.",
      de: "Diskrepanzen können Fehler oder Betrug sein. Kooperation und zusätzliche Dokumentation können klären. Spezialisierter Anwalt für komplexe Situationen.",
      en: "Discrepancies can be errors or fraud. Cooperation and additional documentation can clarify. Specialized lawyer for complex situations."
    }
  },
  {
    id: "customs_comp_25",
    difficultyLevel: 5,
    question: {
      ro: "Care sunt considerentele pentru structurarea unui lanț de aprovizionare cu hub de distribuție în UE pentru mărfuri din Asia?",
      de: "Was sind die Überlegungen zur Strukturierung einer Lieferkette mit EU-Verteilungshub für Waren aus Asien?",
      en: "What are considerations for structuring a supply chain with EU distribution hub for goods from Asia?"
    },
    options: {
      ro: ["Alegere port/țară de intrare, regim vamal (antrepozit, liberă circulație), optimizare origine pentru tarife, poziționare strategică hub", "Cel mai apropiat port de fabrica din Asia", "Orice țară UE e la fel", "Hub-ul nu afectează costurile vamale"],
      de: ["Wahl Eingangshafen/-land, Zollverfahren (Lager, freier Verkehr), Ursprungsoptimierung für Tarife, strategische Hub-Positionierung", "Nächster Hafen zur asiatischen Fabrik", "Jedes EU-Land ist gleich", "Hub beeinflusst Zollkosten nicht"],
      en: ["Choice of entry port/country, customs regime (warehouse, free circulation), origin optimization for tariffs, strategic hub positioning", "Closest port to Asian factory", "Any EU country is the same", "Hub doesn't affect customs costs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Strategia: import în țară cu proceduri rapide, antrepozit pentru flexibilitate destinație, preferențial origin acumulat în UE, minimizare costuri totale.",
      de: "Strategie: Import in Land mit schnellen Verfahren, Lager für Zielflexibilität, in EU kumulierter Präferenzursprung, Gesamtkostenminimierung.",
      en: "Strategy: import in country with fast procedures, warehouse for destination flexibility, preferential origin accumulated in EU, total cost minimization."
    }
  },
  {
    id: "customs_comp_26",
    difficultyLevel: 5,
    question: {
      ro: "Cum afectează sancțiunile internaționale și controalele la export operațiunile vamale?",
      de: "Wie beeinflussen internationale Sanktionen und Exportkontrollen Zolloperationen?",
      en: "How do international sanctions and export controls affect customs operations?"
    },
    options: {
      ro: ["Verificare obligatorie liste sancțiuni, licențe pentru dual-use, controale end-user, due diligence extinsă, blocarea mărfurilor neconforme", "Sancțiunile nu afectează transportul comercial normal", "Doar exporturile militare sunt vizate", "Vama nu verifică sancțiunile"],
      de: ["Obligatorische Sanktionslistenprüfung, Dual-Use-Lizenzen, End-User-Kontrollen, erweiterte Due Diligence, Blockade nicht-konformer Waren", "Sanktionen beeinflussen normalen Handelsverkehr nicht", "Nur Militärexporte sind betroffen", "Zoll prüft Sanktionen nicht"],
      en: ["Mandatory sanctions list verification, dual-use licenses, end-user controls, extended due diligence, blocking of non-compliant goods", "Sanctions don't affect normal commercial transport", "Only military exports are targeted", "Customs doesn't check sanctions"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Nerespectarea sancțiunilor = infracțiune. Companiile trebuie să verifice toate părțile tranzacției contra listelor negre (OFAC, UE, ONU).",
      de: "Nichteinhaltung von Sanktionen = Straftat. Firmen müssen alle Transaktionsparteien gegen Schwarzlisten prüfen (OFAC, EU, UN).",
      en: "Sanctions non-compliance = criminal offense. Companies must check all transaction parties against blacklists (OFAC, EU, UN)."
    }
  },
  {
    id: "customs_comp_27",
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Ai un lot de mărfuri reținut de vamă pentru suspiciune de încălcare proprietate intelectuală. Pașii?",
      de: "Szenario: Sie haben eine Warensendung beim Zoll wegen Verdacht auf IP-Verletzung festgehalten. Die Schritte?",
      en: "Scenario: You have a shipment detained by customs for suspected IP infringement. The steps?"
    },
    options: {
      ro: ["Obții informații despre natura suspiciunii, contactezi titular drept IP sau avocat, furnizezi dovezi de autenticitate/licență, sau abandonezi dacă sunt contrafăcute", "Aștepți fără acțiune", "Ceri eliberare fără explicații", "Învinuiești vama de abuz"],
      de: ["Informationen über Verdachtsgrund einholen, IP-Rechteinhaber oder Anwalt kontaktieren, Authentizitäts-/Lizenznachweis liefern, oder bei Fälschung aufgeben", "Ohne Aktion warten", "Freigabe ohne Erklärungen verlangen", "Zoll des Missbrauchs beschuldigen"],
      en: ["Get information about suspicion nature, contact IP rights holder or lawyer, provide proof of authenticity/license, or abandon if counterfeit", "Wait without action", "Request release without explanations", "Accuse customs of abuse"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Vama poate reține mărfuri suspecte de contrafacere până la 10 zile lucrătoare. Titularul dreptului decide dacă acționează. Contrafacerea e distrugere sau returnare.",
      de: "Zoll kann der Fälschung verdächtige Waren bis 10 Werktage festhalten. Rechteinhaber entscheidet ob er handelt. Fälschung bedeutet Vernichtung oder Rücksendung.",
      en: "Customs can detain goods suspected of counterfeiting up to 10 working days. Rights holder decides whether to act. Counterfeit means destruction or return."
    }
  },
  {
    id: "customs_comp_28",
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi importul de mărfuri reglementate (produse chimice REACH, dispozitive medicale, alimente)?",
      de: "Wie handhaben Sie den Import regulierter Waren (REACH-Chemikalien, Medizinprodukte, Lebensmittel)?",
      en: "How do you handle import of regulated goods (REACH chemicals, medical devices, food)?"
    },
    options: {
      ro: ["Verifici cerințele specifice pre-import, obții autorizații/certificate necesare, asiguri conformitate produs cu normele UE, coordonezi cu autoritățile competente", "Aceleași proceduri ca pentru orice produs", "Reglementările nu afectează importul", "Doar etichetarea trebuie schimbată"],
      de: ["Spezifische Vorimport-Anforderungen prüfen, erforderliche Genehmigungen/Zertifikate einholen, Produktkonformität mit EU-Normen sicherstellen, mit zuständigen Behörden koordinieren", "Gleiche Verfahren wie für jedes Produkt", "Vorschriften beeinflussen Import nicht", "Nur Etikettierung muss geändert werden"],
      en: ["Check specific pre-import requirements, obtain necessary authorizations/certificates, ensure product compliance with EU norms, coordinate with competent authorities", "Same procedures as for any product", "Regulations don't affect import", "Only labeling needs to change"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Produsele reglementate necesită aprobare înainte de vămuire. REACH: înregistrare substanțe. Alimente: aprobare DSVSA. Medicale: CE marking valid.",
      de: "Regulierte Produkte erfordern Genehmigung vor Verzollung. REACH: Stoffregistrierung. Lebensmittel: DSVSA-Genehmigung. Medizin: gültiges CE-Zeichen.",
      en: "Regulated products require approval before customs clearance. REACH: substance registration. Food: DSVSA approval. Medical: valid CE marking."
    }
  },
  {
    id: "customs_comp_29",
    difficultyLevel: 5,
    question: {
      ro: "Care sunt tendințele în digitalizarea procedurilor vamale și cum afectează operațiunile?",
      de: "Was sind die Trends in der Digitalisierung von Zollverfahren und wie beeinflussen sie Operationen?",
      en: "What are the trends in digitalization of customs procedures and how do they affect operations?"
    },
    options: {
      ro: ["UCC electronic, single window, blockchain pentru trasabilitate, AI pentru analiză risc, automatizare declarații - viteza și transparența cresc", "Digitalizarea nu afectează vămuirea", "Toate procedurile rămân pe hârtie", "Doar marile companii beneficiază"],
      de: ["Elektronisches UZK, Single Window, Blockchain für Rückverfolgbarkeit, KI für Risikoanalyse, Anmeldungsautomatisierung - Geschwindigkeit und Transparenz steigen", "Digitalisierung beeinflusst Verzollung nicht", "Alle Verfahren bleiben auf Papier", "Nur große Firmen profitieren"],
      en: ["Electronic UCC, single window, blockchain for traceability, AI for risk analysis, declaration automation - speed and transparency increase", "Digitalization doesn't affect customs", "All procedures remain on paper", "Only large companies benefit"]
    },
    correctIndex: 0,
    explanation: {
      ro: "UE implementează noul Cod Vamal al Uniunii electronic. Până 2025+: toate procedurile digital. Companiile trebuie să se adapteze sistemic.",
      de: "EU implementiert neuen elektronischen Unionszollkodex. Bis 2025+: alle Verfahren digital. Firmen müssen sich systemisch anpassen.",
      en: "EU is implementing new electronic Union Customs Code. By 2025+: all procedures digital. Companies must adapt systemically."
    }
  },
  {
    id: "customs_comp_30",
    difficultyLevel: 5,
    question: {
      ro: "Scenariu complex: Import de echipament industrial din Japonia cu componente din China și SUA, asamblat în Vietnam. Cum determini originea și taxele?",
      de: "Komplexes Szenario: Import von Industrieausrüstung aus Japan mit Komponenten aus China und USA, montiert in Vietnam. Wie bestimmen Sie Ursprung und Zölle?",
      en: "Complex scenario: Import of industrial equipment from Japan with components from China and USA, assembled in Vietnam. How do you determine origin and duties?"
    },
    options: {
      ro: ["Analizezi regulile de origine specifice produsului (HS code), verifici dacă Vietnam e origine non-preferențială, evaluezi acorduri (EVFTA), calculezi landed cost per scenariu", "Originea e automat Vietnam", "Fiecare componentă se taxează separat", "Japonia e originea pentru că de acolo vine factura"],
      de: ["Produktspezifische Ursprungsregeln analysieren (HS-Code), prüfen ob Vietnam nicht-präferentieller Ursprung ist, Abkommen bewerten (EVFTA), Landed Cost pro Szenario berechnen", "Ursprung ist automatisch Vietnam", "Jede Komponente wird separat verzollt", "Japan ist Ursprung weil Rechnung von dort kommt"],
      en: ["Analyze product-specific origin rules (HS code), check if Vietnam is non-preferential origin, evaluate agreements (EVFTA), calculate landed cost per scenario", "Origin is automatically Vietnam", "Each component is taxed separately", "Japan is origin because invoice comes from there"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Lanțuri globale complexe: originea depinde de transformare substanțială în Vietnam, nu de țara facturii. EVFTA poate oferi 0% dacă criterii îndeplinite.",
      de: "Komplexe globale Ketten: Ursprung hängt von wesentlicher Umwandlung in Vietnam ab, nicht vom Rechnungsland. EVFTA kann 0% bieten wenn Kriterien erfüllt.",
      en: "Complex global chains: origin depends on substantial transformation in Vietnam, not invoice country. EVFTA can offer 0% if criteria met."
    }
  }
];
