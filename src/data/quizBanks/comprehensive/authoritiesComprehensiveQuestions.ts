import { TranslatedQuizQuestion } from '../../quizTranslations';

export const authoritiesComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este autoritatea principală pentru controlul transporturilor rutiere în Germania?",
      de: "Was ist die Hauptbehörde für die Kontrolle des Straßentransports in Deutschland?",
      en: "What is the main authority for road transport control in Germany?"
    },
    options: {
      ro: ["Poliția locală", "BAG (Bundesamt für Güterverkehr)", "Primăria", "Ministerul Economiei"],
      de: ["Lokalpolizei", "BAG (Bundesamt für Güterverkehr)", "Rathaus", "Wirtschaftsministerium"],
      en: ["Local police", "BAG (Bundesamt für Güterverkehr)", "City hall", "Ministry of Economy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "BAG este autoritatea federală germană responsabilă pentru controlul transportului de mărfuri pe șosele.",
      de: "Das BAG ist die deutsche Bundesbehörde für die Kontrolle des Straßengüterverkehrs.",
      en: "BAG is the German federal authority responsible for road freight transport control."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verifică inspectorii ISCTR în România la controalele rutiere?",
      de: "Was überprüfen die ISCTR-Inspektoren in Rumänien bei Straßenkontrollen?",
      en: "What do ISCTR inspectors check in Romania during road controls?"
    },
    options: {
      ro: ["Doar aspectul vehiculului", "Licențe, tahograf, greutăți, documente transport, stare tehnică", "Doar identitatea șoferului", "Doar combustibilul"],
      de: ["Nur Fahrzeugaussehen", "Lizenzen, Fahrtenschreiber, Gewichte, Transportdokumente, technischer Zustand", "Nur Fahreridentität", "Nur Kraftstoff"],
      en: ["Only vehicle appearance", "Licenses, tachograph, weights, transport documents, technical condition", "Only driver identity", "Only fuel"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ISCTR verifică complet: licențe de transport, tahograf, greutăți, CMR, stare tehnică vehicul.",
      de: "ISCTR prüft vollständig: Transportlizenzen, Fahrtenschreiber, Gewichte, CMR, technischen Fahrzeugzustand.",
      en: "ISCTR checks completely: transport licenses, tachograph, weights, CMR, vehicle technical condition."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este sistemul ERRU și ce rol are în transporturi?",
      de: "Was ist das ERRU-System und welche Rolle spielt es im Transport?",
      en: "What is the ERRU system and what role does it play in transport?"
    },
    options: {
      ro: ["Sistem de taxare", "Registru european al încălcărilor grave în transport rutier", "Aplicație GPS", "Sistem de rezervări"],
      de: ["Mautsystem", "Europäisches Register schwerer Verstöße im Straßentransport", "GPS-Anwendung", "Buchungssystem"],
      en: ["Toll system", "European register of serious infringements in road transport", "GPS application", "Booking system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ERRU (European Register of Road Transport Undertakings) înregistrează încălcările grave ale operatorilor de transport.",
      de: "ERRU (Europäisches Register der Straßentransportunternehmen) erfasst schwere Verstöße von Transportunternehmen.",
      en: "ERRU (European Register of Road Transport Undertakings) records serious infringements by transport operators."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care autoritate eliberează licențele comunitare de transport în România?",
      de: "Welche Behörde stellt die Gemeinschaftslizenzen für Transport in Rumänien aus?",
      en: "Which authority issues community transport licenses in Romania?"
    },
    options: {
      ro: ["Poliția Rutieră", "ARR (Autoritatea Rutieră Română)", "Primăria", "ANAF"],
      de: ["Verkehrspolizei", "ARR (Rumänische Straßenbehörde)", "Rathaus", "Finanzamt"],
      en: ["Traffic Police", "ARR (Romanian Road Authority)", "City hall", "Tax office"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ARR este autoritatea română responsabilă pentru eliberarea licențelor comunitare și autorizațiilor de transport.",
      de: "ARR ist die rumänische Behörde für die Ausstellung von Gemeinschaftslizenzen und Transportgenehmigungen.",
      en: "ARR is the Romanian authority responsible for issuing community licenses and transport permits."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Camion RO oprit în DE pentru încălcare gravă tahograf. BAG notifică ERRU. Consecințe pentru operator?",
      de: "RO-LKW in DE wegen schwerer Fahrtenschreiberverletzung gestoppt. BAG meldet an ERRU. Konsequenzen für Betreiber?",
      en: "RO truck stopped in DE for serious tachograph violation. BAG notifies ERRU. Consequences for operator?"
    },
    options: {
      ro: ["Doar amendă locală", "Amendă + puncte în ERRU + risc suspendare licență în RO", "Nicio consecință în RO", "Doar avertisment"],
      de: ["Nur lokales Bußgeld", "Bußgeld + ERRU-Punkte + Risiko Lizenzentzug in RO", "Keine Konsequenzen in RO", "Nur Verwarnung"],
      en: ["Only local fine", "Fine + ERRU points + license suspension risk in RO", "No consequences in RO", "Only warning"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Încălcările grave din UE sunt raportate în ERRU și pot duce la suspendarea licenței în țara de origine.",
      de: "Schwere Verstöße in der EU werden an ERRU gemeldet und können zum Lizenzentzug im Herkunftsland führen.",
      en: "Serious EU violations are reported to ERRU and can lead to license suspension in home country."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce autoritate gestionează autorizațiile CEMT pentru transport internațional?",
      de: "Welche Behörde verwaltet CEMT-Genehmigungen für internationalen Transport?",
      en: "Which authority manages CEMT permits for international transport?"
    },
    options: {
      ro: ["Poliția de Frontieră", "Ministerul Transporturilor prin autoritatea rutieră națională", "Vama", "Uniunea Europeană direct"],
      de: ["Grenzpolizei", "Verkehrsministerium über nationale Straßenbehörde", "Zoll", "EU direkt"],
      en: ["Border Police", "Ministry of Transport through national road authority", "Customs", "EU directly"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Autorizațiile CEMT sunt gestionate de Ministerul Transporturilor prin autoritățile rutiere naționale (ARR în RO).",
      de: "CEMT-Genehmigungen werden vom Verkehrsministerium über nationale Straßenbehörden (ARR in RO) verwaltet.",
      en: "CEMT permits are managed by Ministry of Transport through national road authorities (ARR in RO)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este rolul Poliției Rutiere în controlul transporturilor?",
      de: "Welche Rolle spielt die Verkehrspolizei bei der Transportkontrolle?",
      en: "What is the role of Traffic Police in transport control?"
    },
    options: {
      ro: ["Doar accidente", "Control circulație, verificare documente, aplicare sancțiuni rutiere", "Doar parcări", "Doar autostrăzi"],
      de: ["Nur Unfälle", "Verkehrskontrolle, Dokumentenprüfung, Verkehrsstrafen", "Nur Parkplätze", "Nur Autobahnen"],
      en: ["Only accidents", "Traffic control, document verification, traffic sanctions", "Only parking", "Only motorways"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Poliția Rutieră controlează circulația, verifică documentele și aplică sancțiuni pentru încălcări rutiere.",
      de: "Die Verkehrspolizei kontrolliert den Verkehr, prüft Dokumente und verhängt Verkehrsstrafen.",
      en: "Traffic Police controls traffic, verifies documents and applies sanctions for traffic violations."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Operator transport RO primește control inopinat ARR la sediu. Ce documente trebuie prezentate obligatoriu?",
      de: "RO-Transportunternehmer erhält unangekündigte ARR-Kontrolle am Standort. Welche Dokumente müssen vorgelegt werden?",
      en: "RO transport operator receives unannounced ARR control at premises. What documents must be presented?"
    },
    options: {
      ro: ["Doar licența de transport", "Licență, copii conforme, contracte de muncă șoferi, fișe descărcare tahograf, CMR-uri", "Doar facturile", "Doar actele vehiculelor"],
      de: ["Nur Transportlizenz", "Lizenz, beglaubigte Kopien, Arbeitsverträge Fahrer, Fahrtenschreiber-Downloads, CMRs", "Nur Rechnungen", "Nur Fahrzeugpapiere"],
      en: ["Only transport license", "License, certified copies, driver contracts, tachograph downloads, CMRs", "Only invoices", "Only vehicle documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Controlul la sediu verifică: licență, copii conforme, contracte, descărcări tahograf (ultimele 12 luni), CMR-uri.",
      de: "Standortkontrolle prüft: Lizenz, beglaubigte Kopien, Verträge, Fahrtenschreiber-Downloads (letzte 12 Monate), CMRs.",
      en: "Premises control checks: license, certified copies, contracts, tachograph downloads (last 12 months), CMRs."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este un 'roadside check' și cine îl efectuează în Austria?",
      de: "Was ist eine 'Straßenkontrolle' und wer führt sie in Österreich durch?",
      en: "What is a 'roadside check' and who performs it in Austria?"
    },
    options: {
      ro: ["Verificare în service", "Control pe traseu efectuat de poliție și agenția de transport", "Verificare la fabrică", "Control în port"],
      de: ["Werkstattprüfung", "Straßenseitige Kontrolle durch Polizei und Verkehrsbehörde", "Fabrikprüfung", "Hafenkontrolle"],
      en: ["Service check", "On-road control by police and transport agency", "Factory check", "Port control"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Roadside check = control pe traseu efectuat de poliție și autorități transport pentru verificare conformitate.",
      de: "Straßenkontrolle = Kontrolle auf der Strecke durch Polizei und Verkehrsbehörden zur Konformitätsprüfung.",
      en: "Roadside check = on-road control by police and transport authorities to verify compliance."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care autoritate verifică respectarea regulilor privind timpul de conducere și odihnă?",
      de: "Welche Behörde überprüft die Einhaltung der Lenk- und Ruhezeiten?",
      en: "Which authority verifies compliance with driving and rest time rules?"
    },
    options: {
      ro: ["Primăria", "Inspectoratul de muncă și autoritățile de transport rutier", "Banca Națională", "Ministerul Sănătății"],
      de: ["Rathaus", "Arbeitsinspektion und Straßenverkehrsbehörden", "Nationalbank", "Gesundheitsministerium"],
      en: ["City hall", "Labor inspectorate and road transport authorities", "National bank", "Ministry of Health"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Timpul de conducere este verificat de ITM (aspecte muncă) și ISCTR/ARR (aspecte transport).",
      de: "Lenkzeiten werden von der Arbeitsinspektion (Arbeitsaspekte) und ISCTR/ARR (Transportaspekte) überprüft.",
      en: "Driving time is verified by labor inspectorate (work aspects) and ISCTR/ARR (transport aspects)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport ADR oprit la controlul vamal Nădlac. Ce autorități pot interveni și ce verifică fiecare?",
      de: "ADR-Transport bei Zollkontrolle Nădlac gestoppt. Welche Behörden können eingreifen und was prüft jede?",
      en: "ADR transport stopped at Nădlac customs control. Which authorities can intervene and what does each check?"
    },
    options: {
      ro: ["Doar vama", "Vamă (documente), ISCTR (transport), ISU (ADR), Poliție (circulație)", "Doar poliția", "Doar ISU"],
      de: ["Nur Zoll", "Zoll (Dokumente), ISCTR (Transport), ISU (ADR), Polizei (Verkehr)", "Nur Polizei", "Nur ISU"],
      en: ["Only customs", "Customs (documents), ISCTR (transport), ISU (ADR), Police (traffic)", "Only police", "Only ISU"]
    },
    correctIndex: 1,
    explanation: {
      ro: "La control ADR pot interveni: Vamă (documente), ISCTR (licențe), ISU (conformitate ADR), Poliție (circulație).",
      de: "Bei ADR-Kontrolle können eingreifen: Zoll (Dokumente), ISCTR (Lizenzen), ISU (ADR-Konformität), Polizei (Verkehr).",
      en: "At ADR control may intervene: Customs (documents), ISCTR (licenses), ISU (ADR compliance), Police (traffic)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce se întâmplă dacă un operator pierde buna reputație conform Regulamentului CE 1071/2009?",
      de: "Was passiert, wenn ein Unternehmer die gute Reputation gemäß Verordnung EG 1071/2009 verliert?",
      en: "What happens if an operator loses good repute according to Regulation EC 1071/2009?"
    },
    options: {
      ro: ["Doar avertisment", "Suspendarea sau retragerea licenței comunitare", "Amendă simbolică", "Nimic, e doar recomandare"],
      de: ["Nur Verwarnung", "Aussetzung oder Entzug der Gemeinschaftslizenz", "Symbolische Geldstrafe", "Nichts, nur Empfehlung"],
      en: ["Only warning", "Suspension or withdrawal of community license", "Symbolic fine", "Nothing, just recommendation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pierderea bunei reputații duce la suspendarea sau retragerea licenței comunitare de transport.",
      de: "Verlust der guten Reputation führt zur Aussetzung oder zum Entzug der Gemeinschaftslizenz.",
      en: "Loss of good repute leads to suspension or withdrawal of community transport license."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este autoritatea pentru verificarea tehnică periodică (ITP) a vehiculelor în România?",
      de: "Welche Behörde ist für die periodische technische Prüfung (ITP) in Rumänien zuständig?",
      en: "Which authority handles periodic technical inspection (ITP) in Romania?"
    },
    options: {
      ro: ["Poliția", "RAR (Registrul Auto Român)", "Primăria", "Ministerul Economiei"],
      de: ["Polizei", "RAR (Rumänisches Automobilregister)", "Rathaus", "Wirtschaftsministerium"],
      en: ["Police", "RAR (Romanian Auto Registry)", "City hall", "Ministry of Economy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RAR autorizează stațiile ITP și supraveghează verificarea tehnică periodică a vehiculelor.",
      de: "RAR autorisiert ITP-Stationen und überwacht die periodische technische Fahrzeugprüfung.",
      en: "RAR authorizes ITP stations and supervises periodic technical vehicle inspection."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce rol are Euro Contrôle Route (ECR) în transportul internațional?",
      de: "Welche Rolle spielt Euro Contrôle Route (ECR) im internationalen Transport?",
      en: "What role does Euro Contrôle Route (ECR) play in international transport?"
    },
    options: {
      ro: ["Eliberare licențe", "Coordonare controale armonizate între țări UE", "Vânzare asigurări", "Producție vehicule"],
      de: ["Lizenzausstellung", "Koordination harmonisierter Kontrollen zwischen EU-Ländern", "Versicherungsverkauf", "Fahrzeugproduktion"],
      en: ["License issuance", "Coordination of harmonized controls between EU countries", "Insurance sales", "Vehicle production"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ECR coordonează controale armonizate în UE pentru aplicarea uniformă a regulilor de transport.",
      de: "ECR koordiniert harmonisierte Kontrollen in der EU für einheitliche Anwendung der Transportvorschriften.",
      en: "ECR coordinates harmonized controls in EU for uniform application of transport rules."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Operator RO contestă amendă BAG din Germania. Procedura și termene?",
      de: "RO-Unternehmer ficht BAG-Bußgeld aus Deutschland an. Verfahren und Fristen?",
      en: "RO operator contests BAG fine from Germany. Procedure and deadlines?"
    },
    options: {
      ro: ["Nu se poate contesta", "Contestație în 14 zile la BAG + posibil tribunal german + avocat local recomandat", "Contestație în RO", "Ignorare, nu se aplică"],
      de: ["Keine Anfechtung möglich", "Einspruch in 14 Tagen beim BAG + ggf. deutsches Gericht + lokaler Anwalt empfohlen", "Einspruch in RO", "Ignorieren, gilt nicht"],
      en: ["Cannot be contested", "Appeal within 14 days to BAG + possibly German court + local lawyer recommended", "Appeal in RO", "Ignore, doesn't apply"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contestația se face în 14 zile la BAG, în germană. Pentru tribunal, avocat german este recomandat.",
      de: "Einspruch erfolgt in 14 Tagen beim BAG, auf Deutsch. Für Gericht ist deutscher Anwalt empfohlen.",
      en: "Appeal is made within 14 days to BAG, in German. For court, German lawyer is recommended."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce autoritate gestionează sistemul de taxare rutieră (eVinieta) în România?",
      de: "Welche Behörde verwaltet das Straßenmautsystem (eVinieta) in Rumänien?",
      en: "Which authority manages the road toll system (eVinieta) in Romania?"
    },
    options: {
      ro: ["Poliția", "CNAIR (Compania Națională de Administrare a Infrastructurii Rutiere)", "Primăria", "Banca Națională"],
      de: ["Polizei", "CNAIR (Nationale Straßeninfrastruktur-Gesellschaft)", "Rathaus", "Nationalbank"],
      en: ["Police", "CNAIR (National Road Infrastructure Company)", "City hall", "National bank"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CNAIR administrează infrastructura rutieră și sistemul de taxare (rovinieta/eVinieta) în România.",
      de: "CNAIR verwaltet die Straßeninfrastruktur und das Mautsystem (Rovinieta/eVinieta) in Rumänien.",
      en: "CNAIR manages road infrastructure and toll system (rovinieta/eVinieta) in Romania."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce verifică inspectorii ITM la o firmă de transport?",
      de: "Was prüfen ITM-Inspektoren bei einem Transportunternehmen?",
      en: "What do ITM inspectors check at a transport company?"
    },
    options: {
      ro: ["Doar taxe", "Contracte muncă, program lucru, salarii, SSM, detașări", "Doar vehicule", "Doar marfa transportată"],
      de: ["Nur Steuern", "Arbeitsverträge, Arbeitszeit, Gehälter, Arbeitssicherheit, Entsendungen", "Nur Fahrzeuge", "Nur transportierte Waren"],
      en: ["Only taxes", "Work contracts, work schedule, salaries, OSH, postings", "Only vehicles", "Only transported cargo"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ITM verifică aspecte de muncă: contracte, ore lucrate, salarii, securitate muncă, detașări internaționale.",
      de: "ITM prüft Arbeitsaspekte: Verträge, Arbeitsstunden, Gehälter, Arbeitssicherheit, internationale Entsendungen.",
      en: "ITM checks work aspects: contracts, hours worked, salaries, work safety, international postings."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Șofer RO depistat în FR cu detașare incorectă (fără A1 și declarație). Consecințe pentru operator și șofer?",
      de: "RO-Fahrer in FR mit falscher Entsendung (ohne A1 und Erklärung) erwischt. Konsequenzen für Betreiber und Fahrer?",
      en: "RO driver caught in FR with incorrect posting (no A1 and declaration). Consequences for operator and driver?"
    },
    options: {
      ro: ["Doar avertisment", "Amendă operator 2000-4000€/șofer + imobilizare vehicul + raportare în ERRU", "Nimic, doar recomandări", "Amendă simbolică 100€"],
      de: ["Nur Verwarnung", "Bußgeld Betreiber 2000-4000€/Fahrer + Fahrzeugfeststellung + ERRU-Meldung", "Nichts, nur Empfehlungen", "Symbolisches Bußgeld 100€"],
      en: ["Only warning", "Operator fine 2000-4000€/driver + vehicle immobilization + ERRU reporting", "Nothing, just recommendations", "Symbolic fine 100€"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Franța aplică amenzi severe pentru încălcări detașare: 2000-4000€/șofer, imobilizare, raportare ERRU.",
      de: "Frankreich verhängt strenge Strafen für Entsendungsverstöße: 2000-4000€/Fahrer, Feststellung, ERRU-Meldung.",
      en: "France applies severe fines for posting violations: 2000-4000€/driver, immobilization, ERRU reporting."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce autoritate eliberează certificatele ATP pentru vehicule frigorifice în România?",
      de: "Welche Behörde stellt die ATP-Zertifikate für Kühlfahrzeuge in Rumänien aus?",
      en: "Which authority issues ATP certificates for refrigerated vehicles in Romania?"
    },
    options: {
      ro: ["Primăria", "RAR (Registrul Auto Român)", "Ministerul Agriculturii", "Poliția"],
      de: ["Rathaus", "RAR (Rumänisches Automobilregister)", "Landwirtschaftsministerium", "Polizei"],
      en: ["City hall", "RAR (Romanian Auto Registry)", "Ministry of Agriculture", "Police"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RAR este autoritatea competentă pentru eliberarea certificatelor ATP în România.",
      de: "RAR ist die zuständige Behörde für die Ausstellung von ATP-Zertifikaten in Rumänien.",
      en: "RAR is the competent authority for issuing ATP certificates in Romania."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este Pachetul Mobilitate I și ce autorități îl aplică?",
      de: "Was ist das Mobilitätspaket I und welche Behörden wenden es an?",
      en: "What is Mobility Package I and which authorities apply it?"
    },
    options: {
      ro: ["Regulament turism", "Legislație UE transport rutier aplicată de autoritățile naționale de transport", "Regulament aviație", "Regulament maritim"],
      de: ["Tourismusverordnung", "EU-Straßentransportgesetzgebung, angewandt von nationalen Verkehrsbehörden", "Luftfahrtverordnung", "Seeschifffahrtsverordnung"],
      en: ["Tourism regulation", "EU road transport legislation applied by national transport authorities", "Aviation regulation", "Maritime regulation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pachetul Mobilitate I conține reguli UE pentru transport rutier, aplicate de ISCTR, BAG, etc.",
      de: "Das Mobilitätspaket I enthält EU-Regeln für Straßentransport, angewandt von ISCTR, BAG, usw.",
      en: "Mobility Package I contains EU road transport rules, applied by ISCTR, BAG, etc."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Control simultan ISCTR + ITM + ANAF la operator transport. Ce verifică fiecare și cum te pregătești?",
      de: "Simultane Kontrolle ISCTR + ITM + Finanzamt bei Transportunternehmer. Was prüft jede und wie bereiten Sie sich vor?",
      en: "Simultaneous ISCTR + ITM + Tax office control at transport operator. What does each check and how do you prepare?"
    },
    options: {
      ro: ["Imposibil control simultan", "ISCTR: transport, ITM: muncă, ANAF: fiscal. Pregătire: dosare separate organizate.", "Doar ISCTR verifică totul", "Nu există obligație de cooperare"],
      de: ["Simultane Kontrolle unmöglich", "ISCTR: Transport, ITM: Arbeit, Finanzamt: Steuern. Vorbereitung: getrennte organisierte Akten.", "Nur ISCTR prüft alles", "Keine Kooperationspflicht"],
      en: ["Simultaneous control impossible", "ISCTR: transport, ITM: work, Tax: fiscal. Preparation: separate organized files.", "Only ISCTR checks everything", "No cooperation obligation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Controale multiple necesită dosare separate: transport (ISCTR), muncă (ITM), fiscal (ANAF). Organizare prealabilă esențială.",
      de: "Mehrfachkontrollen erfordern getrennte Akten: Transport (ISCTR), Arbeit (ITM), Steuern (ANAF). Voraborganisation wesentlich.",
      en: "Multiple controls require separate files: transport (ISCTR), work (ITM), tax (ANAF). Prior organization essential."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care autoritate autorizează transporturile agabaritice în România?",
      de: "Welche Behörde genehmigt Schwertransporte in Rumänien?",
      en: "Which authority authorizes oversized transports in Romania?"
    },
    options: {
      ro: ["Poliția locală", "CNAIR pentru drumuri naționale, Consilii Județene pentru drumuri locale", "Primăria", "Ministerul Economiei"],
      de: ["Lokalpolizei", "CNAIR für Nationalstraßen, Kreisräte für Lokalstraßen", "Rathaus", "Wirtschaftsministerium"],
      en: ["Local police", "CNAIR for national roads, County Councils for local roads", "City hall", "Ministry of Economy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CNAIR autorizează pe drumuri naționale, Consiliile Județene pe drumuri județene și locale.",
      de: "CNAIR genehmigt auf Nationalstraßen, Kreisräte auf Kreis- und Lokalstraßen.",
      en: "CNAIR authorizes on national roads, County Councils on county and local roads."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este platforma IMI și cum o folosesc autoritățile de transport?",
      de: "Was ist die IMI-Plattform und wie nutzen Verkehrsbehörden sie?",
      en: "What is the IMI platform and how do transport authorities use it?"
    },
    options: {
      ro: ["Aplicație GPS", "Sistem de schimb informații între autorități UE pentru verificări și cooperare", "Rețea socială", "Sistem contabilitate"],
      de: ["GPS-Anwendung", "Informationsaustauschsystem zwischen EU-Behörden für Prüfungen und Zusammenarbeit", "Soziales Netzwerk", "Buchhaltungssystem"],
      en: ["GPS application", "Information exchange system between EU authorities for checks and cooperation", "Social network", "Accounting system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "IMI (Internal Market Information) permite autorităților UE să schimbe informații pentru verificări transfrontaliere.",
      de: "IMI (Binnenmarkt-Informationssystem) ermöglicht EU-Behörden den Informationsaustausch für grenzüberschreitende Prüfungen.",
      en: "IMI (Internal Market Information) allows EU authorities to exchange information for cross-border checks."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Cine verifică respectarea normelor de emisii Euro pentru camioane?",
      de: "Wer überprüft die Einhaltung der Euro-Emissionsnormen für LKW?",
      en: "Who verifies compliance with Euro emission standards for trucks?"
    },
    options: {
      ro: ["Doar producătorul", "RAR la omologare și ITP, BAG/ISCTR la controale rutiere", "Doar pompieri", "Doar primăria"],
      de: ["Nur Hersteller", "RAR bei Homologation und HU, BAG/ISCTR bei Straßenkontrollen", "Nur Feuerwehr", "Nur Rathaus"],
      en: ["Only manufacturer", "RAR at homologation and MOT, BAG/ISCTR at road checks", "Only firefighters", "Only city hall"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Normele Euro sunt verificate la omologare/ITP de RAR și în trafic de autoritățile de control (BAG, ISCTR).",
      de: "Euro-Normen werden bei Homologation/HU vom RAR und im Verkehr von Kontrollbehörden (BAG, ISCTR) geprüft.",
      en: "Euro standards are verified at homologation/MOT by RAR and in traffic by control authorities (BAG, ISCTR)."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Operator primește citație de la tribunal german pentru încălcare repetată a regulilor de cabotaj. Cum procedează?",
      de: "Unternehmer erhält Vorladung vom deutschen Gericht wegen wiederholter Kabotageverletzung. Wie vorgeht er?",
      en: "Operator receives summons from German court for repeated cabotage violation. How to proceed?"
    },
    options: {
      ro: ["Ignorare, nu se aplică în RO", "Angajare avocat german, pregătire documente, prezentare sau reprezentare la termen", "Contestație în RO", "Așteptare verdict fără acțiune"],
      de: ["Ignorieren, gilt nicht in RO", "Deutschen Anwalt beauftragen, Dokumente vorbereiten, Erscheinen oder Vertretung beim Termin", "Einspruch in RO", "Auf Urteil ohne Handlung warten"],
      en: ["Ignore, doesn't apply in RO", "Hire German lawyer, prepare documents, appear or be represented at hearing", "Appeal in RO", "Wait for verdict without action"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Citația germană trebuie tratată serios: avocat german, documente justificative, prezență sau reprezentare la tribunal.",
      de: "Deutsche Vorladung muss ernst genommen werden: deutscher Anwalt, Belege, Erscheinen oder Vertretung vor Gericht.",
      en: "German summons must be taken seriously: German lawyer, supporting documents, appearance or representation at court."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce sunt inspectorii TISPOL și ce acțiuni desfășoară?",
      de: "Was sind TISPOL-Inspektoren und welche Aktionen führen sie durch?",
      en: "What are TISPOL inspectors and what actions do they carry out?"
    },
    options: {
      ro: ["Inspectori medicali", "Rețea europeană de poliție rutieră pentru acțiuni coordonate de control", "Inspectori vamali", "Inspectori sanitari"],
      de: ["Medizinische Inspektoren", "Europäisches Verkehrspolizeinetzwerk für koordinierte Kontrollaktionen", "Zollinspektoren", "Gesundheitsinspektoren"],
      en: ["Medical inspectors", "European traffic police network for coordinated control actions", "Customs inspectors", "Health inspectors"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TISPOL coordonează acțiuni de control rutier simultane în multiple țări UE pentru siguranța traficului.",
      de: "TISPOL koordiniert gleichzeitige Straßenkontrollen in mehreren EU-Ländern für die Verkehrssicherheit.",
      en: "TISPOL coordinates simultaneous road controls in multiple EU countries for traffic safety."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce autoritate gestionează sistemul de taxare Toll Collect în Germania?",
      de: "Welche Behörde verwaltet das Toll Collect-Mautsystem in Deutschland?",
      en: "Which authority manages the Toll Collect tolling system in Germany?"
    },
    options: {
      ro: ["BAG", "Toll Collect GmbH sub supravegherea BAG", "Poliția", "Primăria Berlin"],
      de: ["BAG", "Toll Collect GmbH unter Aufsicht des BAG", "Polizei", "Rathaus Berlin"],
      en: ["BAG", "Toll Collect GmbH under BAG supervision", "Police", "Berlin city hall"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Toll Collect GmbH operează sistemul de taxare, BAG supraveghează și controlează plata corectă.",
      de: "Toll Collect GmbH betreibt das Mautsystem, BAG überwacht und kontrolliert die korrekte Zahlung.",
      en: "Toll Collect GmbH operates the toll system, BAG supervises and controls correct payment."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce rol are Comisia Europeană în reglementarea transportului rutier?",
      de: "Welche Rolle spielt die Europäische Kommission bei der Regulierung des Straßentransports?",
      en: "What role does the European Commission play in road transport regulation?"
    },
    options: {
      ro: ["Niciun rol", "Elaborează legislație UE și monitorizează aplicarea de către statele membre", "Doar consultanță", "Doar statistici"],
      de: ["Keine Rolle", "Erarbeitet EU-Gesetzgebung und überwacht Anwendung durch Mitgliedstaaten", "Nur Beratung", "Nur Statistiken"],
      en: ["No role", "Develops EU legislation and monitors application by member states", "Only consulting", "Only statistics"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comisia Europeană propune legislația UE pentru transport și monitorizează implementarea în statele membre.",
      de: "Die Europäische Kommission schlägt EU-Transportgesetzgebung vor und überwacht die Umsetzung in Mitgliedstaaten.",
      en: "European Commission proposes EU transport legislation and monitors implementation in member states."
    }
  }
];
