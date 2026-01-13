import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const complianceQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce înseamnă compliance în transporturi?",
      de: "Was bedeutet Compliance im Transport?",
      en: "What does compliance mean in transport?"
    },
    options: {
      ro: ["Viteză mare", "Conformitatea cu legile, regulamentele și standardele aplicabile", "Cost redus", "Flexibilitate operațională"],
      de: ["Hohe Geschwindigkeit", "Einhaltung geltender Gesetze, Vorschriften und Standards", "Niedrige Kosten", "Operative Flexibilität"],
      en: ["High speed", "Conformity with applicable laws, regulations and standards", "Low cost", "Operational flexibility"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Compliance asigură că operațiunile respectă cerințele legale și standardele industriei.",
      de: "Compliance stellt sicher, dass Operationen gesetzliche Anforderungen und Branchenstandards einhalten.",
      en: "Compliance ensures operations meet legal requirements and industry standards."
    }
  },
  {
    question: {
      ro: "Ce document reglementează transportul internațional rutier de mărfuri în Europa?",
      de: "Welches Dokument regelt den internationalen Straßengüterverkehr in Europa?",
      en: "What document regulates international road freight transport in Europe?"
    },
    options: {
      ro: ["Doar legea națională", "Convenția CMR și regulamentele UE", "Doar contractul", "Regulile interne ale firmei"],
      de: ["Nur nationales Recht", "CMR-Übereinkommen und EU-Vorschriften", "Nur der Vertrag", "Interne Firmenregeln"],
      en: ["Only national law", "CMR Convention and EU regulations", "Only the contract", "Internal company rules"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul internațional e guvernat de CMR și regulamentele europene aplicabile.",
      de: "Internationaler Transport wird durch CMR und geltende europäische Vorschriften geregelt.",
      en: "International transport is governed by CMR and applicable European regulations."
    }
  },
  {
    question: {
      ro: "Ce este licența comunitară de transport?",
      de: "Was ist die Gemeinschaftslizenz für den Transport?",
      en: "What is the community transport license?"
    },
    options: {
      ro: ["Permis de conducere", "Autorizație pentru transport internațional de mărfuri în UE", "Licență de taxi", "Permis de parcare"],
      de: ["Führerschein", "Genehmigung für internationalen Güterverkehr in der EU", "Taxilizenz", "Parkausweis"],
      en: ["Driving license", "Authorization for international freight transport in EU", "Taxi license", "Parking permit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Licența comunitară permite operatorilor să efectueze transport internațional în spațiul UE.",
      de: "Die Gemeinschaftslizenz erlaubt Betreibern internationalen Transport im EU-Raum durchzuführen.",
      en: "Community license allows operators to perform international transport within EU space."
    }
  },
  {
    question: {
      ro: "Ce verificări trebuie făcute înainte de a accepta un transport?",
      de: "Welche Prüfungen müssen vor Annahme eines Transports durchgeführt werden?",
      en: "What checks must be done before accepting a transport?"
    },
    options: {
      ro: ["Doar prețul", "Legalitatea mărfii, documente, licențe, restricții și capacitate", "Doar distanța", "Doar disponibilitatea"],
      de: ["Nur Preis", "Legalität der Ware, Dokumente, Lizenzen, Beschränkungen und Kapazität", "Nur Entfernung", "Nur Verfügbarkeit"],
      en: ["Only price", "Legality of goods, documents, licenses, restrictions and capacity", "Only distance", "Only availability"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificarea prealabilă previne probleme legale și operaționale pe parcursul transportului.",
      de: "Vorabprüfung verhindert rechtliche und operative Probleme während des Transports.",
      en: "Prior verification prevents legal and operational problems during transport."
    }
  },
  {
    question: {
      ro: "Ce este certificatul de competență profesională (CPC)?",
      de: "Was ist das Zertifikat für berufliche Befähigung (CPC)?",
      en: "What is the Certificate of Professional Competence (CPC)?"
    },
    options: {
      ro: ["Diplomă universitară", "Certificat obligatoriu pentru manageri de transport", "Licență de șofer", "Asigurare auto"],
      de: ["Universitätsdiplom", "Pflichtzertifikat für Transportmanager", "Fahrerlizenz", "Kfz-Versicherung"],
      en: ["University degree", "Mandatory certificate for transport managers", "Driver license", "Car insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CPC este obligatoriu pentru persoanele responsabile de operațiunile de transport.",
      de: "CPC ist obligatorisch für Personen, die für Transportoperationen verantwortlich sind.",
      en: "CPC is mandatory for persons responsible for transport operations."
    }
  },
  {
    question: {
      ro: "Ce sancțiuni riscă o firmă pentru neconformitate?",
      de: "Welche Strafen riskiert ein Unternehmen bei Nichteinhaltung?",
      en: "What penalties does a company risk for non-compliance?"
    },
    options: {
      ro: ["Nicio consecință", "Amenzi, suspendarea licenței, interdicție de operare, răspundere penală", "Doar avertisment", "Doar mențiune în registru"],
      de: ["Keine Konsequenzen", "Bußgelder, Lizenzentzug, Betriebsverbot, strafrechtliche Haftung", "Nur Warnung", "Nur Registereintrag"],
      en: ["No consequences", "Fines, license suspension, operating ban, criminal liability", "Only warning", "Only registry mention"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Neconformitatea poate duce la sancțiuni severe, inclusiv suspendarea activității.",
      de: "Nichteinhaltung kann zu schweren Strafen führen, einschließlich Betriebseinstellung.",
      en: "Non-compliance can lead to severe penalties, including suspension of operations."
    }
  },
  {
    question: {
      ro: "Ce este cabotajul și cum e reglementat?",
      de: "Was ist Kabotage und wie wird sie geregelt?",
      en: "What is cabotage and how is it regulated?"
    },
    options: {
      ro: ["Transport internațional", "Transport intern efectuat de un operator străin, limitat la 3 curse în 7 zile", "Transport aerian", "Transport maritim"],
      de: ["Internationaler Transport", "Inlandstransport durch ausländischen Betreiber, begrenzt auf 3 Fahrten in 7 Tagen", "Lufttransport", "Seetransport"],
      en: ["International transport", "Domestic transport by foreign operator, limited to 3 trips in 7 days", "Air transport", "Sea transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cabotajul este strict reglementat în UE pentru a proteja piețele locale de transport.",
      de: "Kabotage ist in der EU streng geregelt zum Schutz lokaler Transportmärkte.",
      en: "Cabotage is strictly regulated in EU to protect local transport markets."
    }
  },
  {
    question: {
      ro: "Ce documente trebuie să aibă la bord vehiculul de transport?",
      de: "Welche Dokumente muss das Transportfahrzeug an Bord haben?",
      en: "What documents must the transport vehicle have on board?"
    },
    options: {
      ro: ["Doar CMR", "Licență, asigurări, ITP, tahograf, CMR, documente marfă", "Doar permisul șoferului", "Doar factura"],
      de: ["Nur CMR", "Lizenz, Versicherungen, TÜV, Fahrtenschreiber, CMR, Frachtdokumente", "Nur Führerschein", "Nur Rechnung"],
      en: ["Only CMR", "License, insurances, MOT, tachograph, CMR, cargo documents", "Only driver's license", "Only invoice"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Vehiculul trebuie să aibă toate documentele necesare pentru control rutier.",
      de: "Das Fahrzeug muss alle für Straßenkontrollen erforderlichen Dokumente haben.",
      en: "Vehicle must have all documents required for road inspections."
    }
  },
  {
    question: {
      ro: "Ce este sistemul de risc ERRU?",
      de: "Was ist das ERRU-Risikosystem?",
      en: "What is the ERRU risk system?"
    },
    options: {
      ro: ["Sistem de navigație", "Registru european al încălcărilor în transportul rutier", "Sistem de plată", "Rețea de benzinării"],
      de: ["Navigationssystem", "Europäisches Register für Verstöße im Straßenverkehr", "Zahlungssystem", "Tankstellennetz"],
      en: ["Navigation system", "European register of road transport infringements", "Payment system", "Fuel station network"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ERRU înregistrează încălcările grave și permite schimbul de informații între state.",
      de: "ERRU registriert schwere Verstöße und ermöglicht Informationsaustausch zwischen Staaten.",
      en: "ERRU registers serious infringements and enables information exchange between states."
    }
  },
  {
    question: {
      ro: "Ce obligații GDPR are o firmă de transport?",
      de: "Welche DSGVO-Pflichten hat ein Transportunternehmen?",
      en: "What GDPR obligations does a transport company have?"
    },
    options: {
      ro: ["Niciuna", "Protecția datelor personale ale clienților, șoferilor și partenerilor", "Doar pentru angajați", "Doar pentru clienți"],
      de: ["Keine", "Schutz personenbezogener Daten von Kunden, Fahrern und Partnern", "Nur für Mitarbeiter", "Nur für Kunden"],
      en: ["None", "Protection of personal data of clients, drivers and partners", "Only for employees", "Only for clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "GDPR se aplică tuturor datelor personale procesate de companie.",
      de: "DSGVO gilt für alle vom Unternehmen verarbeiteten personenbezogenen Daten.",
      en: "GDPR applies to all personal data processed by the company."
    }
  },
  {
    question: {
      ro: "Ce este Pachetul de Mobilitate și ce schimbă?",
      de: "Was ist das Mobilitätspaket und was ändert es?",
      en: "What is the Mobility Package and what does it change?"
    },
    options: {
      ro: ["Pachet turistic", "Reformă UE a regulilor privind timpii de conducere, cabotaj și detașare", "Abonament telefonic", "Program de investiții"],
      de: ["Tourismuspaket", "EU-Reform der Regeln für Lenkzeiten, Kabotage und Entsendung", "Telefonabonnement", "Investitionsprogramm"],
      en: ["Tourist package", "EU reform of rules on driving times, cabotage and posting", "Phone subscription", "Investment program"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pachetul de Mobilitate introduce reguli noi pentru protecția șoferilor și concurență loială.",
      de: "Das Mobilitätspaket führt neue Regeln zum Fahrerschutz und fairem Wettbewerb ein.",
      en: "Mobility Package introduces new rules for driver protection and fair competition."
    }
  },
  {
    question: {
      ro: "Ce înseamnă detașarea șoferilor în context transfrontalier?",
      de: "Was bedeutet Fahrerentsendung im grenzüberschreitenden Kontext?",
      en: "What does driver posting mean in cross-border context?"
    },
    options: {
      ro: ["Concediere", "Aplicarea legislației muncii din țara gazdă pentru anumite operațiuni", "Transfer permanent", "Promovare"],
      de: ["Kündigung", "Anwendung des Arbeitsrechts des Gastlandes für bestimmte Operationen", "Permanenter Transfer", "Beförderung"],
      en: ["Dismissal", "Application of host country labor law for certain operations", "Permanent transfer", "Promotion"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Detașarea implică aplicarea salariului minim și condițiilor din țara unde se efectuează munca.",
      de: "Entsendung beinhaltet Anwendung des Mindestlohns und der Bedingungen des Arbeitslandes.",
      en: "Posting involves applying minimum wage and conditions of the country where work is performed."
    }
  },
  {
    question: {
      ro: "Ce este o inspecție ISCTR?",
      de: "Was ist eine ISCTR-Inspektion?",
      en: "What is an ISCTR inspection?"
    },
    options: {
      ro: ["Control medical", "Control al autorității române de supraveghere a transporturilor rutiere", "Inspecție tehnică", "Audit financiar"],
      de: ["Medizinische Kontrolle", "Kontrolle durch die rumänische Straßenverkehrsaufsichtsbehörde", "Technische Inspektion", "Finanzprüfung"],
      en: ["Medical check", "Inspection by Romanian road transport supervision authority", "Technical inspection", "Financial audit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ISCTR verifică conformitatea operatorilor de transport cu legislația în vigoare.",
      de: "ISCTR überprüft die Einhaltung der geltenden Gesetze durch Transportbetreiber.",
      en: "ISCTR verifies transport operators' compliance with applicable legislation."
    }
  },
  {
    question: {
      ro: "Ce este buna reputație în contextul licențierii?",
      de: "Was ist guter Ruf im Kontext der Lizenzierung?",
      en: "What is good repute in the licensing context?"
    },
    options: {
      ro: ["Popularitate", "Condiție legală: fără condamnări grave, fără încălcări repetate", "Recenzii pozitive", "Mulți clienți"],
      de: ["Popularität", "Gesetzliche Bedingung: keine schweren Verurteilungen, keine wiederholten Verstöße", "Positive Bewertungen", "Viele Kunden"],
      en: ["Popularity", "Legal condition: no serious convictions, no repeated violations", "Positive reviews", "Many clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Buna reputație este o condiție obligatorie pentru obținerea și menținerea licenței.",
      de: "Guter Ruf ist eine obligatorische Bedingung für Erhalt und Aufrechterhaltung der Lizenz.",
      en: "Good repute is a mandatory condition for obtaining and maintaining the license."
    }
  },
  {
    question: {
      ro: "Ce documente dovedesc capacitatea financiară a operatorului?",
      de: "Welche Dokumente belegen die finanzielle Leistungsfähigkeit des Betreibers?",
      en: "What documents prove the operator's financial capacity?"
    },
    options: {
      ro: ["Doar bilanțul", "Garanție bancară, asigurare, capital propriu - minim 9000€ primul vehicul", "Doar facturi", "Doar contracte"],
      de: ["Nur Bilanz", "Bankgarantie, Versicherung, Eigenkapital - mindestens 9000€ erstes Fahrzeug", "Nur Rechnungen", "Nur Verträge"],
      en: ["Only balance sheet", "Bank guarantee, insurance, equity - minimum 9000€ first vehicle", "Only invoices", "Only contracts"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Capacitatea financiară asigură că operatorul poate îndeplini obligațiile în siguranță.",
      de: "Finanzielle Leistungsfähigkeit stellt sicher, dass der Betreiber Verpflichtungen sicher erfüllen kann.",
      en: "Financial capacity ensures the operator can safely fulfill obligations."
    }
  },
  {
    question: {
      ro: "Ce obligații ai privind înregistrarea vehiculelor?",
      de: "Welche Pflichten haben Sie bezüglich der Fahrzeugregistrierung?",
      en: "What obligations do you have regarding vehicle registration?"
    },
    options: {
      ro: ["Niciuna", "Înmatriculare validă, ITP actualizat, asigurări în vigoare", "Doar asigurare", "Doar ITP"],
      de: ["Keine", "Gültige Zulassung, aktueller TÜV, gültige Versicherungen", "Nur Versicherung", "Nur TÜV"],
      en: ["None", "Valid registration, updated MOT, insurances in force", "Only insurance", "Only MOT"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Vehiculele trebuie să îndeplinească toate cerințele legale de înregistrare și siguranță.",
      de: "Fahrzeuge müssen alle gesetzlichen Zulassungs- und Sicherheitsanforderungen erfüllen.",
      en: "Vehicles must meet all legal registration and safety requirements."
    }
  },
  {
    question: {
      ro: "Ce este attestatul de șofer pentru conducători non-UE?",
      de: "Was ist die Fahrerbescheinigung für Nicht-EU-Fahrer?",
      en: "What is the driver attestation for non-EU drivers?"
    },
    options: {
      ro: ["Permis de conducere", "Document care atestă angajarea legală a șoferului din țară terță", "Viză turistică", "Pașaport"],
      de: ["Führerschein", "Dokument, das die legale Beschäftigung eines Drittstaatsfahrers bescheinigt", "Touristenvisum", "Reisepass"],
      en: ["Driving license", "Document attesting legal employment of third-country driver", "Tourist visa", "Passport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Attestatul este obligatoriu pentru șoferii din afara UE care conduc pentru operatori UE.",
      de: "Die Bescheinigung ist obligatorisch für Nicht-EU-Fahrer, die für EU-Betreiber fahren.",
      en: "Attestation is mandatory for non-EU drivers driving for EU operators."
    }
  },
  {
    question: {
      ro: "Ce verifici la un transportator înainte de colaborare?",
      de: "Was überprüfen Sie bei einem Frachtführer vor der Zusammenarbeit?",
      en: "What do you check with a carrier before cooperation?"
    },
    options: {
      ro: ["Doar prețul", "Licență, asigurări, reputație, capacitate, flotă conformă", "Doar experiența", "Doar locația"],
      de: ["Nur Preis", "Lizenz, Versicherungen, Ruf, Kapazität, konforme Flotte", "Nur Erfahrung", "Nur Standort"],
      en: ["Only price", "License, insurances, reputation, capacity, compliant fleet", "Only experience", "Only location"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Due diligence pentru transportatori previne riscuri legale și operaționale.",
      de: "Due Diligence für Frachtführer verhindert rechtliche und operative Risiken.",
      en: "Due diligence for carriers prevents legal and operational risks."
    }
  },
  {
    question: {
      ro: "Ce înseamnă răspunderea solidară în transport?",
      de: "Was bedeutet gesamtschuldnerische Haftung im Transport?",
      en: "What does joint liability in transport mean?"
    },
    options: {
      ro: ["Fără răspundere", "Mai multe părți pot fi responsabile pentru aceeași daună", "Răspundere exclusivă", "Răspundere opțională"],
      de: ["Keine Haftung", "Mehrere Parteien können für denselben Schaden verantwortlich sein", "Ausschließliche Haftung", "Optionale Haftung"],
      en: ["No liability", "Multiple parties can be responsible for the same damage", "Exclusive liability", "Optional liability"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Răspunderea solidară poate implica expeditorul, transportatorul și intermediarii.",
      de: "Gesamtschuldnerische Haftung kann Absender, Frachtführer und Vermittler einbeziehen.",
      en: "Joint liability can involve shipper, carrier and intermediaries."
    }
  },
  {
    question: {
      ro: "Ce obligații ai pentru transportul de deșeuri?",
      de: "Welche Pflichten haben Sie für Abfalltransport?",
      en: "What obligations do you have for waste transport?"
    },
    options: {
      ro: ["Niciuna specială", "Autorizații specifice, documente de transfer, trasabilitate completă", "Doar CMR", "Doar asigurare"],
      de: ["Keine besonderen", "Spezifische Genehmigungen, Transferdokumente, vollständige Rückverfolgbarkeit", "Nur CMR", "Nur Versicherung"],
      en: ["None special", "Specific authorizations, transfer documents, complete traceability", "Only CMR", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul de deșeuri e strict reglementat pentru protecția mediului.",
      de: "Abfalltransport ist zum Umweltschutz streng geregelt.",
      en: "Waste transport is strictly regulated for environmental protection."
    }
  },
  {
    question: {
      ro: "Ce este registrul electronic al transportatorilor?",
      de: "Was ist das elektronische Transportregister?",
      en: "What is the electronic transport register?"
    },
    options: {
      ro: ["Site de rezervări", "Bază de date oficială cu operatorii autorizați și statusul lor", "Rețea socială", "Portal de plăți"],
      de: ["Buchungsseite", "Offizielle Datenbank mit zugelassenen Betreibern und deren Status", "Soziales Netzwerk", "Zahlungsportal"],
      en: ["Booking site", "Official database with authorized operators and their status", "Social network", "Payment portal"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Registrul permite verificarea validității licenței și a statusului operatorilor.",
      de: "Das Register ermöglicht die Überprüfung der Lizenzgültigkeit und des Betreiberstatus.",
      en: "Register allows verification of license validity and operator status."
    }
  },
  {
    question: {
      ro: "Ce documente sunt necesare pentru transport de alimente?",
      de: "Welche Dokumente sind für Lebensmitteltransport erforderlich?",
      en: "What documents are required for food transport?"
    },
    options: {
      ro: ["Doar CMR", "Certificat ATP, documente HACCP, înregistrări temperatură", "Doar factură", "Doar packing list"],
      de: ["Nur CMR", "ATP-Zertifikat, HACCP-Dokumente, Temperaturaufzeichnungen", "Nur Rechnung", "Nur Packliste"],
      en: ["Only CMR", "ATP certificate, HACCP documents, temperature records", "Only invoice", "Only packing list"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul alimentar necesită conformitate cu reglementările de siguranță alimentară.",
      de: "Lebensmitteltransport erfordert Einhaltung der Lebensmittelsicherheitsvorschriften.",
      en: "Food transport requires compliance with food safety regulations."
    }
  },
  {
    question: {
      ro: "Ce sunt restricțiile de trafic de weekend?",
      de: "Was sind Wochenend-Verkehrsbeschränkungen?",
      en: "What are weekend traffic restrictions?"
    },
    options: {
      ro: ["Nu există", "Interdicții de circulație pentru camioane în anumite zile și ore", "Reduceri de preț", "Ore de lucru reduse"],
      de: ["Gibt es nicht", "Fahrverbote für LKW an bestimmten Tagen und Zeiten", "Preisreduzierungen", "Reduzierte Arbeitszeiten"],
      en: ["Don't exist", "Driving bans for trucks on certain days and hours", "Price reductions", "Reduced working hours"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multe țări europene au restricții de circulație pentru camioane în weekend și sărbători.",
      de: "Viele europäische Länder haben Fahrverbote für LKW an Wochenenden und Feiertagen.",
      en: "Many European countries have driving bans for trucks on weekends and holidays."
    }
  },
  {
    question: {
      ro: "Ce este un audit de conformitate?",
      de: "Was ist ein Compliance-Audit?",
      en: "What is a compliance audit?"
    },
    options: {
      ro: ["Control financiar", "Verificarea sistematică a respectării regulilor și procedurilor", "Inventar", "Evaluare personal"],
      de: ["Finanzprüfung", "Systematische Überprüfung der Einhaltung von Regeln und Verfahren", "Inventur", "Personalbewertung"],
      en: ["Financial control", "Systematic verification of compliance with rules and procedures", "Inventory", "Staff evaluation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Auditurile de conformitate identifică nereguli și îmbunătățesc procesele.",
      de: "Compliance-Audits identifizieren Unregelmäßigkeiten und verbessern Prozesse.",
      en: "Compliance audits identify irregularities and improve processes."
    }
  },
  {
    question: {
      ro: "Ce obligații privind salariul minim ai pentru șoferi în UE?",
      de: "Welche Mindestlohnpflichten haben Sie für Fahrer in der EU?",
      en: "What minimum wage obligations do you have for drivers in EU?"
    },
    options: {
      ro: ["Niciuna", "Aplicarea salariului minim din țara unde se efectuează cabotajul", "Doar salariul din țara de origine", "Salariu fix european"],
      de: ["Keine", "Anwendung des Mindestlohns des Kabotage-Landes", "Nur Gehalt aus dem Herkunftsland", "Festes europäisches Gehalt"],
      en: ["None", "Application of minimum wage of cabotage country", "Only home country salary", "Fixed European salary"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Regulile de detașare impun respectarea salariului minim din țara gazdă.",
      de: "Entsendungsregeln erfordern Einhaltung des Mindestlohns des Gastlandes.",
      en: "Posting rules require compliance with host country minimum wage."
    }
  },
  {
    question: {
      ro: "Ce trebuie să conțină un contract de transport complet?",
      de: "Was muss ein vollständiger Transportvertrag enthalten?",
      en: "What must a complete transport contract contain?"
    },
    options: {
      ro: ["Doar prețul", "Părți, marfă, rută, preț, termene, răspunderi, condiții speciale", "Doar data", "Doar adresele"],
      de: ["Nur Preis", "Parteien, Ware, Route, Preis, Fristen, Haftung, Sonderbedingungen", "Nur Datum", "Nur Adressen"],
      en: ["Only price", "Parties, goods, route, price, deadlines, liabilities, special conditions", "Only date", "Only addresses"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contractul complet previne dispute și clarifică responsabilitățile.",
      de: "Vollständiger Vertrag verhindert Streitigkeiten und klärt Verantwortlichkeiten.",
      en: "Complete contract prevents disputes and clarifies responsibilities."
    }
  },
  {
    question: {
      ro: "Ce este termenul de prescripție conform CMR?",
      de: "Was ist die Verjährungsfrist gemäß CMR?",
      en: "What is the limitation period according to CMR?"
    },
    options: {
      ro: ["6 luni", "1 an (3 ani pentru dol)", "5 ani", "10 ani"],
      de: ["6 Monate", "1 Jahr (3 Jahre bei Vorsatz)", "5 Jahre", "10 Jahre"],
      en: ["6 months", "1 year (3 years for intentional misconduct)", "5 years", "10 years"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR prevede termen de 1 an pentru acțiuni, extins la 3 ani în cazuri de intenție.",
      de: "CMR sieht eine 1-Jahres-Frist für Klagen vor, verlängert auf 3 Jahre bei Vorsatz.",
      en: "CMR provides 1-year period for claims, extended to 3 years in cases of intent."
    }
  },
  {
    question: {
      ro: "Ce verificări de conformitate faci pentru un transport ADR?",
      de: "Welche Compliance-Prüfungen führen Sie für einen ADR-Transport durch?",
      en: "What compliance checks do you perform for an ADR transport?"
    },
    options: {
      ro: ["Niciuna specială", "Certificări șofer, vehicul omologat, echipament, documente specifice", "Doar CMR", "Doar licență"],
      de: ["Keine besonderen", "Fahrerzertifizierungen, zugelassenes Fahrzeug, Ausrüstung, spezifische Dokumente", "Nur CMR", "Nur Lizenz"],
      en: ["None special", "Driver certifications, approved vehicle, equipment, specific documents", "Only CMR", "Only license"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul ADR necesită conformitate cu toate cerințele specifice mărfurilor periculoase.",
      de: "ADR-Transport erfordert Einhaltung aller spezifischen Anforderungen für Gefahrgüter.",
      en: "ADR transport requires compliance with all specific dangerous goods requirements."
    }
  },
  {
    question: {
      ro: "Ce sisteme de management pot certifica conformitatea?",
      de: "Welche Managementsysteme können Compliance zertifizieren?",
      en: "What management systems can certify compliance?"
    },
    options: {
      ro: ["Doar ISO 9001", "ISO 9001, ISO 14001, ISO 45001, GDP, SQAS", "Niciun sistem", "Doar sisteme interne"],
      de: ["Nur ISO 9001", "ISO 9001, ISO 14001, ISO 45001, GDP, SQAS", "Kein System", "Nur interne Systeme"],
      en: ["Only ISO 9001", "ISO 9001, ISO 14001, ISO 45001, GDP, SQAS", "No system", "Only internal systems"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Certificările demonstrează angajamentul pentru calitate și conformitate.",
      de: "Zertifizierungen zeigen Engagement für Qualität und Compliance.",
      en: "Certifications demonstrate commitment to quality and compliance."
    }
  }
];
