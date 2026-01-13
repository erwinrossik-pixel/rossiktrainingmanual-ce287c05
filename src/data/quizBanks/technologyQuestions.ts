import { Language } from "@/contexts/LanguageContext";

export interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const technologyQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce este un TMS (Transport Management System)?",
      de: "Was ist ein TMS (Transport Management System)?",
      en: "What is a TMS (Transport Management System)?"
    },
    options: {
      ro: ["Sistem de televiziune", "Software pentru gestionarea operațiunilor de transport", "Sistem de taxare", "Tip de motor"],
      de: ["Fernsehsystem", "Software zur Verwaltung von Transportoperationen", "Gebührensystem", "Motortyp"],
      en: ["Television system", "Software for managing transport operations", "Taxation system", "Engine type"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TMS este un software specializat pentru planificarea, execuția și optimizarea operațiunilor de transport.",
      de: "TMS ist eine spezialisierte Software für Planung, Ausführung und Optimierung von Transportoperationen.",
      en: "TMS is specialized software for planning, executing, and optimizing transport operations."
    }
  },
  {
    question: {
      ro: "Ce rol are GPS-ul în managementul flotei?",
      de: "Welche Rolle spielt GPS im Flottenmanagement?",
      en: "What role does GPS play in fleet management?"
    },
    options: {
      ro: ["Doar navigație", "Urmărire, monitorizare și optimizare rute", "Măsurarea combustibilului", "Comunicare vocală"],
      de: ["Nur Navigation", "Verfolgung, Überwachung und Routenoptimierung", "Kraftstoffmessung", "Sprachkommunikation"],
      en: ["Navigation only", "Tracking, monitoring, and route optimization", "Fuel measurement", "Voice communication"]
    },
    correctIndex: 1,
    explanation: {
      ro: "GPS-ul permite urmărirea în timp real, calcularea ETA și optimizarea rutelor pentru eficiență.",
      de: "GPS ermöglicht Echtzeit-Tracking, ETA-Berechnung und Routenoptimierung für Effizienz.",
      en: "GPS enables real-time tracking, ETA calculation, and route optimization for efficiency."
    }
  },
  {
    question: {
      ro: "Ce este telematics în transport?",
      de: "Was ist Telematik im Transport?",
      en: "What is telematics in transport?"
    },
    options: {
      ro: ["Serviciu telefonic", "Integrare telecomunicații și informatică pentru monitorizare vehicule", "Sistem de radio", "Tip de combustibil"],
      de: ["Telefondienst", "Integration von Telekommunikation und IT zur Fahrzeugüberwachung", "Radiosystem", "Kraftstofftyp"],
      en: ["Phone service", "Integration of telecommunications and IT for vehicle monitoring", "Radio system", "Fuel type"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Telematics combină GPS, senzori și comunicare pentru monitorizarea completă a vehiculelor.",
      de: "Telematik kombiniert GPS, Sensoren und Kommunikation zur umfassenden Fahrzeugüberwachung.",
      en: "Telematics combines GPS, sensors, and communication for complete vehicle monitoring."
    }
  },
  {
    question: {
      ro: "Ce este EDI (Electronic Data Interchange)?",
      de: "Was ist EDI (Electronic Data Interchange)?",
      en: "What is EDI (Electronic Data Interchange)?"
    },
    options: {
      ro: ["Email simplu", "Schimb electronic standardizat de documente comerciale", "Sistem de plată", "Rețea socială"],
      de: ["Einfache E-Mail", "Standardisierter elektronischer Austausch von Geschäftsdokumenten", "Zahlungssystem", "Soziales Netzwerk"],
      en: ["Simple email", "Standardized electronic exchange of business documents", "Payment system", "Social network"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EDI permite transferul automat de documente între sisteme diferite, reducând erorile manuale.",
      de: "EDI ermöglicht den automatischen Dokumententransfer zwischen verschiedenen Systemen und reduziert manuelle Fehler.",
      en: "EDI allows automatic document transfer between different systems, reducing manual errors."
    }
  },
  {
    question: {
      ro: "Ce înseamnă API în contextul integrărilor logistice?",
      de: "Was bedeutet API im Kontext logistischer Integrationen?",
      en: "What does API mean in the context of logistics integrations?"
    },
    options: {
      ro: ["Asociație profesională", "Interfață de programare pentru conectarea sistemelor", "Licență de transport", "Protocol de ambalare"],
      de: ["Berufsverband", "Programmierschnittstelle zur Systemverbindung", "Transportlizenz", "Verpackungsprotokoll"],
      en: ["Professional association", "Programming interface for connecting systems", "Transport license", "Packaging protocol"]
    },
    correctIndex: 1,
    explanation: {
      ro: "API (Application Programming Interface) permite sistemelor diferite să comunice și să schimbe date automat.",
      de: "API (Application Programming Interface) ermöglicht verschiedenen Systemen, automatisch zu kommunizieren und Daten auszutauschen.",
      en: "API (Application Programming Interface) allows different systems to communicate and exchange data automatically."
    }
  },
  {
    question: {
      ro: "Ce este un WMS (Warehouse Management System)?",
      de: "Was ist ein WMS (Warehouse Management System)?",
      en: "What is a WMS (Warehouse Management System)?"
    },
    options: {
      ro: ["Site web", "Software pentru gestionarea depozitelor", "Sistem meteo", "Aplicație de mesagerie"],
      de: ["Website", "Software zur Lagerverwaltung", "Wettersystem", "Messaging-App"],
      en: ["Website", "Software for warehouse management", "Weather system", "Messaging app"]
    },
    correctIndex: 1,
    explanation: {
      ro: "WMS gestionează operațiunile de depozit: stocuri, picking, ambalare și expediere.",
      de: "WMS verwaltet Lageroperationen: Bestände, Kommissionierung, Verpackung und Versand.",
      en: "WMS manages warehouse operations: inventory, picking, packing, and shipping."
    }
  },
  {
    question: {
      ro: "Care este avantajul principal al digitizării documentelor de transport?",
      de: "Was ist der Hauptvorteil der Digitalisierung von Transportdokumenten?",
      en: "What is the main advantage of digitizing transport documents?"
    },
    options: {
      ro: ["Costă mai mult", "Acces instant, reducerea erorilor și arhivare automată", "Mai greu de citit", "Necesită mai mult personal"],
      de: ["Kostet mehr", "Sofortiger Zugriff, Fehlerreduzierung und automatische Archivierung", "Schwerer zu lesen", "Benötigt mehr Personal"],
      en: ["Costs more", "Instant access, error reduction, and automatic archiving", "Harder to read", "Requires more staff"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documentele digitale sunt accesibile instant, ușor de căutat și pot fi procesate automat.",
      de: "Digitale Dokumente sind sofort zugänglich, leicht durchsuchbar und können automatisch verarbeitet werden.",
      en: "Digital documents are instantly accessible, easy to search, and can be processed automatically."
    }
  },
  {
    question: {
      ro: "Ce este eCMR?",
      de: "Was ist eCMR?",
      en: "What is eCMR?"
    },
    options: {
      ro: ["Tip de motor electric", "Versiunea electronică a scrisorii de transport internațional", "Email comercial", "Curs valutar"],
      de: ["Elektromotortyp", "Elektronische Version des internationalen Frachtbriefs", "Geschäftliche E-Mail", "Wechselkurs"],
      en: ["Electric engine type", "Electronic version of international consignment note", "Business email", "Exchange rate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "eCMR este versiunea digitală a CMR-ului, recunoscută legal în multe țări europene.",
      de: "eCMR ist die digitale Version des CMR, die in vielen europäischen Ländern rechtlich anerkannt ist.",
      en: "eCMR is the digital version of CMR, legally recognized in many European countries."
    }
  },
  {
    question: {
      ro: "Ce tehnologie utilizează tahografele digitale pentru stocare?",
      de: "Welche Technologie verwenden digitale Tachographen zur Speicherung?",
      en: "What technology do digital tachographs use for storage?"
    },
    options: {
      ro: ["Hârtie", "Card cu cip și memorie internă", "CD-ROM", "Floppy disk"],
      de: ["Papier", "Chipkarte und interner Speicher", "CD-ROM", "Diskette"],
      en: ["Paper", "Chip card and internal memory", "CD-ROM", "Floppy disk"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tahografele digitale stochează datele pe carduri de șofer și în memoria internă securizată.",
      de: "Digitale Tachographen speichern Daten auf Fahrerkarten und im gesicherten internen Speicher.",
      en: "Digital tachographs store data on driver cards and in secure internal memory."
    }
  },
  {
    question: {
      ro: "Ce este 'track and trace' în logistică?",
      de: "Was ist 'Track and Trace' in der Logistik?",
      en: "What is 'track and trace' in logistics?"
    },
    options: {
      ro: ["Un joc video", "Sistem de urmărire a mărfurilor în timp real", "Tip de vehicul", "Marcaj rutier"],
      de: ["Ein Videospiel", "Echtzeit-Frachtverfolgungssystem", "Fahrzeugtyp", "Straßenmarkierung"],
      en: ["A video game", "Real-time cargo tracking system", "Vehicle type", "Road marking"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Track and trace oferă vizibilitate completă asupra locației și statusului mărfurilor.",
      de: "Track and Trace bietet vollständige Sichtbarkeit über Standort und Status der Fracht.",
      en: "Track and trace provides complete visibility of cargo location and status."
    }
  },
  {
    question: {
      ro: "Ce este un ERP în contextul logistic?",
      de: "Was ist ein ERP im logistischen Kontext?",
      en: "What is an ERP in the logistics context?"
    },
    options: {
      ro: ["Rută expresă", "Sistem integrat de planificare a resurselor întreprinderii", "Expediere rapidă", "Protocol de urgență"],
      de: ["Express-Route", "Integriertes Unternehmensressourcenplanungssystem", "Schnellversand", "Notfallprotokoll"],
      en: ["Express route", "Integrated enterprise resource planning system", "Rapid shipping", "Emergency protocol"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ERP integrează toate procesele de afaceri într-un singur sistem, incluzând logistica.",
      de: "ERP integriert alle Geschäftsprozesse in ein einziges System, einschließlich Logistik.",
      en: "ERP integrates all business processes into a single system, including logistics."
    }
  },
  {
    question: {
      ro: "Ce rol are IoT (Internet of Things) în transport?",
      de: "Welche Rolle spielt IoT (Internet of Things) im Transport?",
      en: "What role does IoT (Internet of Things) play in transport?"
    },
    options: {
      ro: ["Doar entertainment", "Conectarea senzorilor pentru monitorizare și optimizare", "Înlocuirea șoferilor", "Plăți online"],
      de: ["Nur Unterhaltung", "Verbindung von Sensoren zur Überwachung und Optimierung", "Ersatz für Fahrer", "Online-Zahlungen"],
      en: ["Entertainment only", "Connecting sensors for monitoring and optimization", "Replacing drivers", "Online payments"]
    },
    correctIndex: 1,
    explanation: {
      ro: "IoT conectează senzori din vehicule și mărfuri pentru monitorizarea în timp real a condițiilor.",
      de: "IoT verbindet Sensoren in Fahrzeugen und Fracht zur Echtzeitüberwachung der Bedingungen.",
      en: "IoT connects sensors in vehicles and cargo for real-time monitoring of conditions."
    }
  },
  {
    question: {
      ro: "Ce este blockchain-ul și cum poate fi utilizat în logistică?",
      de: "Was ist Blockchain und wie kann sie in der Logistik verwendet werden?",
      en: "What is blockchain and how can it be used in logistics?"
    },
    options: {
      ro: ["Tip de container", "Registru digital descentralizat pentru trasabilitate", "Program de contabilitate", "Rețea telefonică"],
      de: ["Containertyp", "Dezentrales digitales Register für Rückverfolgbarkeit", "Buchhaltungsprogramm", "Telefonnetz"],
      en: ["Container type", "Decentralized digital ledger for traceability", "Accounting program", "Phone network"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Blockchain oferă un registru imutabil pentru urmărirea mărfurilor și verificarea documentelor.",
      de: "Blockchain bietet ein unveränderliches Register zur Frachtverfolgung und Dokumentenprüfung.",
      en: "Blockchain provides an immutable ledger for tracking goods and verifying documents."
    }
  },
  {
    question: {
      ro: "Ce este POD electronic (Proof of Delivery)?",
      de: "Was ist elektronischer POD (Proof of Delivery)?",
      en: "What is electronic POD (Proof of Delivery)?"
    },
    options: {
      ro: ["Podcast", "Confirmare digitală a livrării cu semnătură electronică", "Email de confirmare", "Fotografie simplă"],
      de: ["Podcast", "Digitale Lieferbestätigung mit elektronischer Unterschrift", "Bestätigungs-E-Mail", "Einfaches Foto"],
      en: ["Podcast", "Digital delivery confirmation with electronic signature", "Confirmation email", "Simple photo"]
    },
    correctIndex: 1,
    explanation: {
      ro: "POD electronic capturează semnătura destinatarului, ora livrării și starea mărfii digital.",
      de: "Elektronischer POD erfasst die Empfängerunterschrift, Lieferzeit und den Frachtzustand digital.",
      en: "Electronic POD captures recipient signature, delivery time, and cargo condition digitally."
    }
  },
  {
    question: {
      ro: "Ce este 'fleet management software'?",
      de: "Was ist 'Flottenmanagement-Software'?",
      en: "What is 'fleet management software'?"
    },
    options: {
      ro: ["Joc de strategie", "Software pentru gestionarea și optimizarea flotei de vehicule", "Program de email", "Aplicație meteo"],
      de: ["Strategiespiel", "Software zur Verwaltung und Optimierung der Fahrzeugflotte", "E-Mail-Programm", "Wetter-App"],
      en: ["Strategy game", "Software for managing and optimizing vehicle fleet", "Email program", "Weather app"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Software-ul de fleet management centralizează datele vehiculelor pentru optimizarea operațiunilor.",
      de: "Flottenmanagement-Software zentralisiert Fahrzeugdaten zur Optimierung des Betriebs.",
      en: "Fleet management software centralizes vehicle data for optimizing operations."
    }
  },
  {
    question: {
      ro: "Ce tehnologie permite actualizări automate ale ETA?",
      de: "Welche Technologie ermöglicht automatische ETA-Updates?",
      en: "What technology enables automatic ETA updates?"
    },
    options: {
      ro: ["Telefon fix", "GPS combinat cu algoritmi de trafic în timp real", "Hărți pe hârtie", "Radio CB"],
      de: ["Festnetztelefon", "GPS kombiniert mit Echtzeit-Verkehrsalgorithmen", "Papierkarten", "CB-Funk"],
      en: ["Landline phone", "GPS combined with real-time traffic algorithms", "Paper maps", "CB radio"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Combinația GPS și date de trafic permite calcularea și actualizarea automată a timpilor de sosire.",
      de: "Die Kombination aus GPS und Verkehrsdaten ermöglicht automatische Berechnung und Aktualisierung der Ankunftszeiten.",
      en: "GPS and traffic data combination enables automatic calculation and updating of arrival times."
    }
  },
  {
    question: {
      ro: "Ce este 'route optimization software'?",
      de: "Was ist 'Routenoptimierungs-Software'?",
      en: "What is 'route optimization software'?"
    },
    options: {
      ro: ["Program de muzică", "Software care calculează cele mai eficiente trasee", "Editor foto", "Browser web"],
      de: ["Musikprogramm", "Software, die die effizientesten Routen berechnet", "Fotoeditor", "Webbrowser"],
      en: ["Music program", "Software that calculates the most efficient routes", "Photo editor", "Web browser"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Software-ul de optimizare rute reduce kilometri, timp și consum prin calcularea celor mai bune trasee.",
      de: "Routenoptimierungs-Software reduziert Kilometer, Zeit und Verbrauch durch Berechnung der besten Routen.",
      en: "Route optimization software reduces kilometers, time, and consumption by calculating the best routes."
    }
  },
  {
    question: {
      ro: "Ce este 'driver app' și ce funcții oferă?",
      de: "Was ist eine 'Fahrer-App' und welche Funktionen bietet sie?",
      en: "What is a 'driver app' and what functions does it offer?"
    },
    options: {
      ro: ["Joc pentru șoferi", "Aplicație mobilă pentru comunicare, navigare și raportare", "Aplicație de cumpărături", "Rețea socială"],
      de: ["Spiel für Fahrer", "Mobile App für Kommunikation, Navigation und Berichterstattung", "Shopping-App", "Soziales Netzwerk"],
      en: ["Game for drivers", "Mobile app for communication, navigation, and reporting", "Shopping app", "Social network"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Aplicațiile pentru șoferi oferă navigare, comunicare cu dispeceratul și capturare POD.",
      de: "Fahrer-Apps bieten Navigation, Kommunikation mit der Disposition und POD-Erfassung.",
      en: "Driver apps provide navigation, communication with dispatch, and POD capture."
    }
  },
  {
    question: {
      ro: "Ce înseamnă SaaS în contextul soluțiilor de transport?",
      de: "Was bedeutet SaaS im Kontext von Transportlösungen?",
      en: "What does SaaS mean in the context of transport solutions?"
    },
    options: {
      ro: ["Sistem de salvare", "Software as a Service - software accesat online", "Serviciu de asistență", "Sistem de securitate"],
      de: ["Speichersystem", "Software as a Service - online zugängliche Software", "Hilfsdienst", "Sicherheitssystem"],
      en: ["Save system", "Software as a Service - software accessed online", "Assistance service", "Security system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SaaS permite accesarea software-ului prin internet, fără instalare locală, cu plată lunară.",
      de: "SaaS ermöglicht den Zugriff auf Software über das Internet ohne lokale Installation mit monatlicher Zahlung.",
      en: "SaaS allows accessing software through the internet without local installation, with monthly payment."
    }
  },
  {
    question: {
      ro: "Ce rol are AI (Inteligența Artificială) în logistică?",
      de: "Welche Rolle spielt KI (Künstliche Intelligenz) in der Logistik?",
      en: "What role does AI (Artificial Intelligence) play in logistics?"
    },
    options: {
      ro: ["Doar divertisment", "Predicții, optimizare și automatizare procese", "Înlocuirea completă a oamenilor", "Nu are niciun rol"],
      de: ["Nur Unterhaltung", "Vorhersagen, Optimierung und Prozessautomatisierung", "Vollständiger Ersatz von Menschen", "Hat keine Rolle"],
      en: ["Entertainment only", "Predictions, optimization, and process automation", "Complete replacement of people", "Has no role"]
    },
    correctIndex: 1,
    explanation: {
      ro: "AI analizează date pentru predicții de cerere, optimizarea rutelor și automatizarea deciziilor.",
      de: "KI analysiert Daten für Nachfrageprognosen, Routenoptimierung und Entscheidungsautomatisierung.",
      en: "AI analyzes data for demand predictions, route optimization, and decision automation."
    }
  },
  {
    question: {
      ro: "Ce este un 'digital twin' în context logistic?",
      de: "Was ist ein 'Digital Twin' im logistischen Kontext?",
      en: "What is a 'digital twin' in logistics context?"
    },
    options: {
      ro: ["Gemeni digitali", "Replică virtuală a operațiunilor pentru simulări", "Copie de siguranță", "Avatar de joc"],
      de: ["Digitale Zwillinge", "Virtuelle Replik des Betriebs für Simulationen", "Sicherungskopie", "Spiel-Avatar"],
      en: ["Digital twins", "Virtual replica of operations for simulations", "Backup copy", "Game avatar"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Digital twin-ul permite simularea și testarea scenariilor fără a afecta operațiunile reale.",
      de: "Der digitale Zwilling ermöglicht das Simulieren und Testen von Szenarien ohne Beeinträchtigung des realen Betriebs.",
      en: "Digital twin allows simulating and testing scenarios without affecting real operations."
    }
  },
  {
    question: {
      ro: "Ce este 'data analytics' în managementul transporturilor?",
      de: "Was ist 'Data Analytics' im Transportmanagement?",
      en: "What is 'data analytics' in transport management?"
    },
    options: {
      ro: ["Colectarea datelor", "Analiza datelor pentru identificarea tendințelor și optimizare", "Ștergerea datelor", "Tipărirea rapoartelor"],
      de: ["Datensammlung", "Datenanalyse zur Trenderkennung und Optimierung", "Datenlöschung", "Berichtsdruck"],
      en: ["Data collection", "Data analysis for identifying trends and optimization", "Data deletion", "Report printing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Data analytics transformă datele brute în insights acționabile pentru îmbunătățirea performanței.",
      de: "Data Analytics verwandelt Rohdaten in umsetzbare Erkenntnisse zur Leistungsverbesserung.",
      en: "Data analytics transforms raw data into actionable insights for improving performance."
    }
  },
  {
    question: {
      ro: "Ce este 'visibility platform' în supply chain?",
      de: "Was ist eine 'Visibility Platform' in der Supply Chain?",
      en: "What is a 'visibility platform' in supply chain?"
    },
    options: {
      ro: ["Platform de observație", "Sistem centralizat pentru urmărirea tuturor expedițiilor", "Portal de vânzări", "Sistem de facturare"],
      de: ["Aussichtsplattform", "Zentrales System zur Verfolgung aller Sendungen", "Verkaufsportal", "Rechnungssystem"],
      en: ["Observation platform", "Centralized system for tracking all shipments", "Sales portal", "Invoicing system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Platformele de vizibilitate oferă o vedere unificată asupra tuturor mișcărilor de marfă.",
      de: "Visibility-Plattformen bieten eine einheitliche Ansicht aller Frachtbewegungen.",
      en: "Visibility platforms provide a unified view of all freight movements."
    }
  },
  {
    question: {
      ro: "Ce este 'robotic process automation' (RPA) în logistică?",
      de: "Was ist 'Robotic Process Automation' (RPA) in der Logistik?",
      en: "What is 'robotic process automation' (RPA) in logistics?"
    },
    options: {
      ro: ["Roboți fizici", "Automatizarea proceselor repetitive prin software", "Conducere autonomă", "Mașini de sortare"],
      de: ["Physische Roboter", "Automatisierung repetitiver Prozesse durch Software", "Autonomes Fahren", "Sortiermaschinen"],
      en: ["Physical robots", "Automation of repetitive processes through software", "Autonomous driving", "Sorting machines"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RPA automatizează sarcini administrative repetitive precum introducerea datelor și raportarea.",
      de: "RPA automatisiert repetitive administrative Aufgaben wie Dateneingabe und Berichterstattung.",
      en: "RPA automates repetitive administrative tasks like data entry and reporting."
    }
  },
  {
    question: {
      ro: "Ce rol are cloud computing în transporturi?",
      de: "Welche Rolle spielt Cloud Computing im Transport?",
      en: "What role does cloud computing play in transport?"
    },
    options: {
      ro: ["Controlul norilor", "Acces de oriunde la date și aplicații, scalabilitate", "Prognoza meteo", "Fotografie aeriană"],
      de: ["Wolkenkontrolle", "Überall Zugriff auf Daten und Anwendungen, Skalierbarkeit", "Wettervorhersage", "Luftbildfotografie"],
      en: ["Cloud control", "Access to data and applications from anywhere, scalability", "Weather forecast", "Aerial photography"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cloud-ul permite accesul la sisteme din orice locație și scalarea resurselor după nevoi.",
      de: "Cloud ermöglicht den Zugriff auf Systeme von überall und die Skalierung von Ressourcen nach Bedarf.",
      en: "Cloud allows access to systems from any location and scaling resources as needed."
    }
  },
  {
    question: {
      ro: "Ce este 'predictive maintenance' pentru flote?",
      de: "Was ist 'Predictive Maintenance' für Flotten?",
      en: "What is 'predictive maintenance' for fleets?"
    },
    options: {
      ro: ["Reparații programate", "Anticiparea defecțiunilor folosind date din senzori", "Întreținere după defectare", "Verificare anuală"],
      de: ["Geplante Reparaturen", "Vorausschau von Ausfällen mithilfe von Sensordaten", "Wartung nach Ausfall", "Jährliche Inspektion"],
      en: ["Scheduled repairs", "Anticipating failures using sensor data", "Maintenance after breakdown", "Annual inspection"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Predictive maintenance folosește AI și date pentru a preveni defecțiunile înainte să apară.",
      de: "Predictive Maintenance nutzt KI und Daten, um Ausfälle zu verhindern, bevor sie auftreten.",
      en: "Predictive maintenance uses AI and data to prevent failures before they occur."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'last mile technology'?",
      de: "Was bedeutet 'Last Mile Technology'?",
      en: "What does 'last mile technology' mean?"
    },
    options: {
      ro: ["Tehnologie veche", "Soluții pentru optimizarea livrărilor finale", "Ultima versiune", "Tehnologie experimentală"],
      de: ["Alte Technologie", "Lösungen zur Optimierung der Endlieferungen", "Neueste Version", "Experimentelle Technologie"],
      en: ["Old technology", "Solutions for optimizing final deliveries", "Latest version", "Experimental technology"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Last mile technology se concentrează pe eficientizarea livrării finale către destinatar.",
      de: "Last-Mile-Technologie konzentriert sich auf die Effizienzsteigerung der Endlieferung an den Empfänger.",
      en: "Last mile technology focuses on making the final delivery to the recipient more efficient."
    }
  },
  {
    question: {
      ro: "Ce este 'carrier onboarding platform'?",
      de: "Was ist eine 'Carrier Onboarding Platform'?",
      en: "What is a 'carrier onboarding platform'?"
    },
    options: {
      ro: ["Platformă de călători", "Sistem pentru înregistrarea și verificarea transportatorilor", "Curs de conducere", "Portal de angajare"],
      de: ["Reiseplattform", "System zur Registrierung und Überprüfung von Spediteuren", "Fahrkurs", "Einstellungsportal"],
      en: ["Travel platform", "System for registering and verifying carriers", "Driving course", "Hiring portal"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Platformele de onboarding automatizează procesul de verificare și înregistrare a transportatorilor noi.",
      de: "Onboarding-Plattformen automatisieren den Prozess der Überprüfung und Registrierung neuer Spediteure.",
      en: "Onboarding platforms automate the process of verifying and registering new carriers."
    }
  },
  {
    question: {
      ro: "Ce funcție are 'geofencing' în logistică?",
      de: "Welche Funktion hat 'Geofencing' in der Logistik?",
      en: "What function does 'geofencing' have in logistics?"
    },
    options: {
      ro: ["Gard fizic", "Alerte automate bazate pe locația geografică", "Cartografiere", "Măsurarea terenului"],
      de: ["Physischer Zaun", "Automatische Alarme basierend auf geografischem Standort", "Kartographie", "Geländemessung"],
      en: ["Physical fence", "Automatic alerts based on geographic location", "Mapping", "Terrain measurement"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Geofencing declanșează notificări automate când vehiculele intră sau ies din zone definite.",
      de: "Geofencing löst automatische Benachrichtigungen aus, wenn Fahrzeuge definierte Zonen betreten oder verlassen.",
      en: "Geofencing triggers automatic notifications when vehicles enter or exit defined zones."
    }
  }
];

export function getRandomTechnologyQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...technologyQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
