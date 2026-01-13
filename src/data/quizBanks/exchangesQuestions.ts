import { Language } from "@/contexts/LanguageContext";

export interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const exchangesQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce este o bursă de transport?",
      de: "Was ist eine Frachtbörse?",
      en: "What is a freight exchange?"
    },
    options: {
      ro: ["Loc fizic de parcare", "Platformă online pentru cereri și oferte de transport", "Bancă pentru transportatori", "Oficiu vamal"],
      de: ["Physischer Parkplatz", "Online-Plattform für Transportanfragen und -angebote", "Bank für Spediteure", "Zollamt"],
      en: ["Physical parking lot", "Online platform for transport requests and offers", "Bank for carriers", "Customs office"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bursa de transport este o platformă digitală care conectează expeditorii cu transportatorii pentru încărcături.",
      de: "Eine Frachtbörse ist eine digitale Plattform, die Versender mit Spediteuren für Ladungen verbindet.",
      en: "A freight exchange is a digital platform connecting shippers with carriers for loads."
    }
  },
  {
    question: {
      ro: "Care este cea mai utilizată bursă de transport în Europa?",
      de: "Welche ist die meistgenutzte Frachtbörse in Europa?",
      en: "What is the most used freight exchange in Europe?"
    },
    options: {
      ro: ["Amazon Logistics", "TIMOCOM", "eBay Freight", "Google Transport"],
      de: ["Amazon Logistics", "TIMOCOM", "eBay Freight", "Google Transport"],
      en: ["Amazon Logistics", "TIMOCOM", "eBay Freight", "Google Transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TIMOCOM este una dintre cele mai mari burse de transport din Europa, cu mii de oferte zilnice.",
      de: "TIMOCOM ist eine der größten Frachtbörsen Europas mit tausenden täglichen Angeboten.",
      en: "TIMOCOM is one of the largest freight exchanges in Europe with thousands of daily offers."
    }
  },
  {
    question: {
      ro: "Ce informații sunt esențiale într-o ofertă de marfă pe bursă?",
      de: "Welche Informationen sind in einem Frachtangebot an der Börse wesentlich?",
      en: "What information is essential in a freight offer on an exchange?"
    },
    options: {
      ro: ["Doar prețul", "Origine, destinație, dată, tip marfă, cerințe", "Numele șoferului", "Culoarea camionului"],
      de: ["Nur der Preis", "Herkunft, Ziel, Datum, Frachtart, Anforderungen", "Name des Fahrers", "LKW-Farbe"],
      en: ["Only the price", "Origin, destination, date, cargo type, requirements", "Driver name", "Truck color"]
    },
    correctIndex: 1,
    explanation: {
      ro: "O ofertă completă trebuie să includă toate detaliile pentru a permite transportatorilor să evalueze corect.",
      de: "Ein vollständiges Angebot muss alle Details enthalten, damit Spediteure korrekt bewerten können.",
      en: "A complete offer must include all details to allow carriers to evaluate correctly."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'vehicle offering' pe bursă?",
      de: "Was bedeutet 'Fahrzeugangebot' an der Börse?",
      en: "What does 'vehicle offering' mean on an exchange?"
    },
    options: {
      ro: ["Vânzarea vehiculului", "Oferirea capacității libere pentru transport", "Închirierea șoferului", "Cerere de marfă"],
      de: ["Fahrzeugverkauf", "Anbieten freier Kapazität für Transport", "Fahrervermietung", "Frachtanfrage"],
      en: ["Selling the vehicle", "Offering free capacity for transport", "Driver rental", "Cargo request"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Vehicle offering indică un transportator care are capacitate disponibilă și caută marfă.",
      de: "Fahrzeugangebot zeigt einen Spediteur mit verfügbarer Kapazität, der Fracht sucht.",
      en: "Vehicle offering indicates a carrier with available capacity looking for cargo."
    }
  },
  {
    question: {
      ro: "Ce avantaj oferă sistemul de rating pe bursele de transport?",
      de: "Welchen Vorteil bietet das Bewertungssystem an Frachtbörsen?",
      en: "What advantage does the rating system offer on freight exchanges?"
    },
    options: {
      ro: ["Reduceri la abonament", "Evaluarea fiabilității partenerilor", "Prețuri mai mici", "Transport mai rapid"],
      de: ["Rabatte auf das Abonnement", "Bewertung der Zuverlässigkeit der Partner", "Niedrigere Preise", "Schnellerer Transport"],
      en: ["Subscription discounts", "Evaluating partner reliability", "Lower prices", "Faster transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sistemul de rating ajută la identificarea partenerilor de încredere și evitarea celor problematici.",
      de: "Das Bewertungssystem hilft bei der Identifizierung zuverlässiger Partner und der Vermeidung problematischer.",
      en: "The rating system helps identify reliable partners and avoid problematic ones."
    }
  },
  {
    question: {
      ro: "Ce este Trans.eu?",
      de: "Was ist Trans.eu?",
      en: "What is Trans.eu?"
    },
    options: {
      ro: ["Companie de transport", "Platformă de burse de transport și logistică", "Autoritate de reglementare", "Asociație de șoferi"],
      de: ["Transportunternehmen", "Frachtbörsen- und Logistikplattform", "Regulierungsbehörde", "Fahrerverband"],
      en: ["Transport company", "Freight exchange and logistics platform", "Regulatory authority", "Drivers association"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Trans.eu este o platformă majoră de burse de transport care conectează mii de companii europene.",
      de: "Trans.eu ist eine führende Frachtbörsenplattform, die tausende europäische Unternehmen verbindet.",
      en: "Trans.eu is a major freight exchange platform connecting thousands of European companies."
    }
  },
  {
    question: {
      ro: "Care este riscul principal al lucrului cu parteneri necunoscuți de pe bursă?",
      de: "Was ist das Hauptrisiko bei der Arbeit mit unbekannten Partnern von der Börse?",
      en: "What is the main risk of working with unknown partners from the exchange?"
    },
    options: {
      ro: ["Prețuri prea mici", "Fraudă și neplată", "Transport prea rapid", "Marfă în exces"],
      de: ["Zu niedrige Preise", "Betrug und Nichtzahlung", "Zu schneller Transport", "Überschüssige Fracht"],
      en: ["Prices too low", "Fraud and non-payment", "Too fast transport", "Excess cargo"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lucrul cu parteneri neverificați poate duce la fraude, neplată sau furt de marfă.",
      de: "Die Arbeit mit ungeprüften Partnern kann zu Betrug, Nichtzahlung oder Frachtdiebstahl führen.",
      en: "Working with unverified partners can lead to fraud, non-payment, or cargo theft."
    }
  },
  {
    question: {
      ro: "Ce funcție oferă 'Smart Match' pe bursele moderne?",
      de: "Welche Funktion bietet 'Smart Match' bei modernen Börsen?",
      en: "What function does 'Smart Match' offer on modern exchanges?"
    },
    options: {
      ro: ["Căutare manuală", "Potrivirea automată între cereri și oferte", "Plata automată", "Conducerea autonomă"],
      de: ["Manuelle Suche", "Automatische Zuordnung zwischen Anfragen und Angeboten", "Automatische Zahlung", "Autonomes Fahren"],
      en: ["Manual search", "Automatic matching between requests and offers", "Automatic payment", "Autonomous driving"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Smart Match folosește algoritmi pentru a găsi automat cele mai bune potriviri între mărfuri și vehicule.",
      de: "Smart Match verwendet Algorithmen, um automatisch die besten Übereinstimmungen zwischen Fracht und Fahrzeugen zu finden.",
      en: "Smart Match uses algorithms to automatically find the best matches between cargo and vehicles."
    }
  },
  {
    question: {
      ro: "Ce este 'load board' în terminologia americană?",
      de: "Was ist ein 'Load Board' in der amerikanischen Terminologie?",
      en: "What is a 'load board' in American terminology?"
    },
    options: {
      ro: ["Placă de încărcare", "Echivalentul bursei de transport", "Panou de control", "Document de transport"],
      de: ["Ladeplatte", "Äquivalent zur Frachtbörse", "Bedienfeld", "Transportdokument"],
      en: ["Loading plate", "Equivalent of freight exchange", "Control panel", "Transport document"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Load board este termenul american pentru platformele de conectare a expeditorilor cu transportatorii.",
      de: "Load Board ist der amerikanische Begriff für Plattformen, die Versender mit Spediteuren verbinden.",
      en: "Load board is the American term for platforms connecting shippers with carriers."
    }
  },
  {
    question: {
      ro: "Ce verificare trebuie făcută înainte de a accepta o încărcătură de pe bursă?",
      de: "Welche Überprüfung sollte vor der Annahme einer Ladung von der Börse durchgeführt werden?",
      en: "What verification should be done before accepting a load from the exchange?"
    },
    options: {
      ro: ["Verificarea culorii mărfii", "Verificarea companiei, rating-ului și condițiilor de plată", "Verificarea vremii", "Verificarea prețului benzinei"],
      de: ["Überprüfung der Frachtfarbe", "Überprüfung des Unternehmens, der Bewertung und der Zahlungsbedingungen", "Wetterprüfung", "Benzinpreisprüfung"],
      en: ["Checking cargo color", "Verifying company, rating, and payment terms", "Weather check", "Gasoline price check"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificarea partenerului, a istoricului de plăți și a condițiilor este esențială pentru evitarea problemelor.",
      de: "Die Überprüfung des Partners, der Zahlungshistorie und der Bedingungen ist wesentlich zur Problemvermeidung.",
      en: "Verifying the partner, payment history, and conditions is essential for avoiding problems."
    }
  },
  {
    question: {
      ro: "Ce este 'freight visibility' pe platformele de burse?",
      de: "Was ist 'Frachtsichtbarkeit' auf Börsenplattformen?",
      en: "What is 'freight visibility' on exchange platforms?"
    },
    options: {
      ro: ["Marfa transparentă", "Urmărirea în timp real a transportului", "Afișaj publicitar", "Calitatea ambalajului"],
      de: ["Transparente Fracht", "Echtzeitverfolgung des Transports", "Werbeanzeige", "Verpackungsqualität"],
      en: ["Transparent cargo", "Real-time transport tracking", "Advertising display", "Packaging quality"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Freight visibility permite urmărirea poziției și statusului încărcăturii pe parcursul transportului.",
      de: "Frachtsichtbarkeit ermöglicht die Verfolgung von Position und Status der Ladung während des Transports.",
      en: "Freight visibility allows tracking the position and status of the load during transport."
    }
  },
  {
    question: {
      ro: "Care este avantajul integrării GPS cu platformele de bursă?",
      de: "Was ist der Vorteil der GPS-Integration mit Börsenplattformen?",
      en: "What is the advantage of GPS integration with exchange platforms?"
    },
    options: {
      ro: ["Consum redus de combustibil", "Actualizare automată a locației și ETA", "Prețuri mai bune", "Mai multe oferte"],
      de: ["Reduzierter Kraftstoffverbrauch", "Automatische Aktualisierung von Standort und ETA", "Bessere Preise", "Mehr Angebote"],
      en: ["Reduced fuel consumption", "Automatic location and ETA updates", "Better prices", "More offers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Integrarea GPS oferă transparență și actualizări automate despre locația vehiculului.",
      de: "Die GPS-Integration bietet Transparenz und automatische Updates zum Fahrzeugstandort.",
      en: "GPS integration provides transparency and automatic updates on vehicle location."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'spot market' în contextul burselor?",
      de: "Was bedeutet 'Spotmarkt' im Kontext der Börsen?",
      en: "What does 'spot market' mean in the context of exchanges?"
    },
    options: {
      ro: ["Piața futures", "Piața pentru transport imediat/pe loc", "Piața de capital", "Piața secundară"],
      de: ["Terminmarkt", "Markt für sofortigen/Spot-Transport", "Kapitalmarkt", "Sekundärmarkt"],
      en: ["Futures market", "Market for immediate/spot transport", "Capital market", "Secondary market"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Spot market se referă la încărcăturile care necesită transport imediat, cu prețuri negociate pe loc.",
      de: "Der Spotmarkt bezieht sich auf Ladungen, die sofortigen Transport erfordern, mit vor Ort ausgehandelten Preisen.",
      en: "Spot market refers to loads requiring immediate transport, with prices negotiated on the spot."
    }
  },
  {
    question: {
      ro: "Ce document virtual înlocuiește comenzile pe hârtie pe bursele moderne?",
      de: "Welches virtuelle Dokument ersetzt Papierbestellungen an modernen Börsen?",
      en: "What virtual document replaces paper orders on modern exchanges?"
    },
    options: {
      ro: ["Email simplu", "Comandă electronică integrată", "Mesaj SMS", "Fax digital"],
      de: ["Einfache E-Mail", "Integrierte elektronische Bestellung", "SMS-Nachricht", "Digitales Fax"],
      en: ["Simple email", "Integrated electronic order", "SMS message", "Digital fax"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comenzile electronice integrate oferă confirmare instantă și urmărire digitală completă.",
      de: "Integrierte elektronische Bestellungen bieten sofortige Bestätigung und vollständige digitale Nachverfolgung.",
      en: "Integrated electronic orders provide instant confirmation and complete digital tracking."
    }
  },
  {
    question: {
      ro: "Ce este 'double brokerage' și de ce este problematic?",
      de: "Was ist 'Double Brokerage' und warum ist es problematisch?",
      en: "What is 'double brokerage' and why is it problematic?"
    },
    options: {
      ro: ["Negociere dublă", "Re-subcontractarea fără acord, riscând lipsa de control", "Plată dublă", "Asigurare dublă"],
      de: ["Doppelverhandlung", "Nachunterbeauftragung ohne Zustimmung, Kontrollverlustrisiko", "Doppelzahlung", "Doppelversicherung"],
      en: ["Double negotiation", "Re-subcontracting without agreement, risking loss of control", "Double payment", "Double insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Double brokerage poate duce la pierderea controlului asupra transportului și probleme de calitate.",
      de: "Double Brokerage kann zu Kontrollverlust über den Transport und Qualitätsproblemen führen.",
      en: "Double brokerage can lead to loss of control over transport and quality issues."
    }
  },
  {
    question: {
      ro: "Ce funcție are 'auction' pe unele platforme de transport?",
      de: "Welche Funktion hat 'Auktion' auf einigen Transportplattformen?",
      en: "What function does 'auction' have on some transport platforms?"
    },
    options: {
      ro: ["Vânzarea camioanelor", "Licitarea pentru încărcături cu cel mai bun preț", "Vânzarea mărfii", "Angajarea șoferilor"],
      de: ["Verkauf von LKWs", "Bieten auf Ladungen zum besten Preis", "Verkauf von Fracht", "Einstellung von Fahrern"],
      en: ["Selling trucks", "Bidding for loads at the best price", "Selling cargo", "Hiring drivers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sistemul de licitație permite transportatorilor să ofere prețuri competitive pentru încărcături.",
      de: "Das Auktionssystem ermöglicht Spediteuren, wettbewerbsfähige Preise für Ladungen anzubieten.",
      en: "The auction system allows carriers to offer competitive prices for loads."
    }
  },
  {
    question: {
      ro: "Ce tipuri de filtre sunt esențiale la căutarea pe bursă?",
      de: "Welche Filterarten sind bei der Börsensuche wesentlich?",
      en: "What filter types are essential when searching on an exchange?"
    },
    options: {
      ro: ["Doar distanța", "Rută, tip vehicul, dată, tip marfă", "Doar prețul", "Doar numele companiei"],
      de: ["Nur Entfernung", "Route, Fahrzeugtyp, Datum, Frachtart", "Nur Preis", "Nur Firmenname"],
      en: ["Only distance", "Route, vehicle type, date, cargo type", "Only price", "Only company name"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Filtrele multiple permit găsirea rapidă a celor mai potrivite oferte pentru capacitatea disponibilă.",
      de: "Mehrere Filter ermöglichen das schnelle Finden der passendsten Angebote für verfügbare Kapazitäten.",
      en: "Multiple filters allow quickly finding the most suitable offers for available capacity."
    }
  },
  {
    question: {
      ro: "Ce este 'credit check' pe bursele de transport?",
      de: "Was ist 'Bonitätsprüfung' an Frachtbörsen?",
      en: "What is 'credit check' on freight exchanges?"
    },
    options: {
      ro: ["Verificarea combustibilului", "Verificarea bonității financiare a partenerului", "Verificarea cardului de credit", "Controlul de calitate"],
      de: ["Kraftstoffprüfung", "Überprüfung der finanziellen Bonität des Partners", "Kreditkartenprüfung", "Qualitätskontrolle"],
      en: ["Fuel verification", "Checking partner's financial creditworthiness", "Credit card check", "Quality control"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Credit check oferă informații despre capacitatea de plată a unui partener potențial.",
      de: "Die Bonitätsprüfung liefert Informationen über die Zahlungsfähigkeit eines potenziellen Partners.",
      en: "Credit check provides information about a potential partner's ability to pay."
    }
  },
  {
    question: {
      ro: "Ce avantaj oferă aplicațiile mobile ale burselor de transport?",
      de: "Welchen Vorteil bieten mobile Apps der Frachtbörsen?",
      en: "What advantage do freight exchange mobile apps offer?"
    },
    options: {
      ro: ["Consum redus de date", "Acces la oferte și comunicare din orice locație", "Prețuri reduse", "GPS mai precis"],
      de: ["Reduzierter Datenverbrauch", "Zugang zu Angeboten und Kommunikation von überall", "Reduzierte Preise", "Genaueres GPS"],
      en: ["Reduced data consumption", "Access to offers and communication from any location", "Reduced prices", "More accurate GPS"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Aplicațiile mobile permit dispecerilor și șoferilor să rămână conectați în permanență.",
      de: "Mobile Apps ermöglichen Disponenten und Fahrern, ständig verbunden zu bleiben.",
      en: "Mobile apps allow dispatchers and drivers to stay connected at all times."
    }
  },
  {
    question: {
      ro: "Ce este un 'freight index' și cum ajută utilizatorii burselor?",
      de: "Was ist ein 'Frachtindex' und wie hilft er den Börsennutzern?",
      en: "What is a 'freight index' and how does it help exchange users?"
    },
    options: {
      ro: ["Lista de camioane", "Indicator al prețurilor medii de piață", "Catalog de servicii", "Registru de companii"],
      de: ["LKW-Liste", "Indikator für durchschnittliche Marktpreise", "Dienstleistungskatalog", "Unternehmensregister"],
      en: ["Truck list", "Indicator of average market prices", "Service catalog", "Company register"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Freight index oferă referințe de preț pentru negocieri informate pe diferite rute.",
      de: "Der Frachtindex bietet Preisreferenzen für informierte Verhandlungen auf verschiedenen Routen.",
      en: "The freight index provides price references for informed negotiations on different routes."
    }
  },
  {
    question: {
      ro: "Ce este 'backload finder' pe bursele de transport?",
      de: "Was ist 'Rückfracht-Finder' an Frachtbörsen?",
      en: "What is 'backload finder' on freight exchanges?"
    },
    options: {
      ro: ["Căutare de marfă în spate", "Instrument pentru găsirea mărfii pe drumul de întoarcere", "Detector de greutate", "Sistem de alarmă"],
      de: ["Suche nach Heckfracht", "Tool zum Finden von Fracht auf dem Rückweg", "Gewichtsdetektor", "Alarmsystem"],
      en: ["Rear cargo search", "Tool for finding cargo on the return route", "Weight detector", "Alarm system"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Backload finder ajută transportatorii să evite drumurile goale prin găsirea mărfii pentru retur.",
      de: "Der Rückfracht-Finder hilft Spediteuren, Leerfahrten zu vermeiden, indem Rückfracht gefunden wird.",
      en: "Backload finder helps carriers avoid empty trips by finding cargo for the return journey."
    }
  },
  {
    question: {
      ro: "Ce rol are 'messenger' integrat pe platformele de bursă?",
      de: "Welche Rolle spielt der integrierte 'Messenger' auf Börsenplattformen?",
      en: "What role does the integrated 'messenger' play on exchange platforms?"
    },
    options: {
      ro: ["Livrarea coletelor", "Comunicare rapidă și documentată între parteneri", "Serviciu poștal", "Chat social"],
      de: ["Paketlieferung", "Schnelle und dokumentierte Kommunikation zwischen Partnern", "Postdienst", "Sozialer Chat"],
      en: ["Package delivery", "Quick and documented communication between partners", "Postal service", "Social chat"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Messenger-ul integrat permite negocieri rapide și păstrează istoricul conversațiilor pentru referință.",
      de: "Der integrierte Messenger ermöglicht schnelle Verhandlungen und speichert den Gesprächsverlauf zur Referenz.",
      en: "The integrated messenger allows quick negotiations and keeps conversation history for reference."
    }
  },
  {
    question: {
      ro: "Ce este 'tender management' pe platformele avansate?",
      de: "Was ist 'Ausschreibungsmanagement' auf fortgeschrittenen Plattformen?",
      en: "What is 'tender management' on advanced platforms?"
    },
    options: {
      ro: ["Managementul șoferilor", "Gestionarea licitațiilor pentru contracte de transport", "Întreținerea vehiculelor", "Controlul calității"],
      de: ["Fahrermanagement", "Verwaltung von Ausschreibungen für Transportverträge", "Fahrzeugwartung", "Qualitätskontrolle"],
      en: ["Driver management", "Managing bids for transport contracts", "Vehicle maintenance", "Quality control"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Tender management automatizează procesul de colectare și evaluare a ofertelor pentru contracte.",
      de: "Das Ausschreibungsmanagement automatisiert den Prozess der Angebotssammlung und -bewertung für Verträge.",
      en: "Tender management automates the process of collecting and evaluating bids for contracts."
    }
  },
  {
    question: {
      ro: "Ce măsuri de securitate au bursele pentru prevenirea fraudei?",
      de: "Welche Sicherheitsmaßnahmen haben Börsen zur Betrugsprävention?",
      en: "What security measures do exchanges have for fraud prevention?"
    },
    options: {
      ro: ["Fără măsuri", "Verificare identitate, rating, monitorizare plăți", "Doar parolă", "Camera video"],
      de: ["Keine Maßnahmen", "Identitätsprüfung, Bewertung, Zahlungsüberwachung", "Nur Passwort", "Videokamera"],
      en: ["No measures", "Identity verification, rating, payment monitoring", "Password only", "Video camera"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bursele folosesc multiple nivele de verificare și monitorizare pentru protejarea utilizatorilor.",
      de: "Börsen nutzen mehrere Verifizierungs- und Überwachungsebenen zum Schutz der Nutzer.",
      en: "Exchanges use multiple levels of verification and monitoring to protect users."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'lane coverage' pentru utilizatorii burselor?",
      de: "Was bedeutet 'Streckenabdeckung' für Börsennutzer?",
      en: "What does 'lane coverage' mean for exchange users?"
    },
    options: {
      ro: ["Acoperirea drumului", "Disponibilitatea ofertelor pe rutele dorite", "Benzile de circulație", "Polița de asigurare"],
      de: ["Straßenabdeckung", "Verfügbarkeit von Angeboten auf gewünschten Routen", "Fahrspuren", "Versicherungspolice"],
      en: ["Road coverage", "Availability of offers on desired routes", "Traffic lanes", "Insurance policy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lane coverage indică cât de bine sunt acoperite rutele dorite cu oferte de transport.",
      de: "Streckenabdeckung zeigt, wie gut die gewünschten Routen mit Transportangeboten abgedeckt sind.",
      en: "Lane coverage indicates how well desired routes are covered with transport offers."
    }
  },
  {
    question: {
      ro: "Care este beneficiul principal al analizei de date oferite de bursele moderne?",
      de: "Was ist der Hauptvorteil der Datenanalyse moderner Börsen?",
      en: "What is the main benefit of data analysis provided by modern exchanges?"
    },
    options: {
      ro: ["Design mai frumos", "Informații pentru decizii comerciale mai bune", "Mai multe reclame", "Viteză mai mare"],
      de: ["Schöneres Design", "Informationen für bessere Geschäftsentscheidungen", "Mehr Werbung", "Höhere Geschwindigkeit"],
      en: ["Better design", "Insights for better business decisions", "More ads", "Higher speed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Analiza datelor oferă insights despre tendințe, prețuri și performanță pentru optimizarea activității.",
      de: "Datenanalyse bietet Einblicke in Trends, Preise und Leistung zur Optimierung der Geschäftstätigkeit.",
      en: "Data analysis provides insights about trends, prices, and performance for optimizing operations."
    }
  },
  {
    question: {
      ro: "Ce este un 'freight marketplace' comparativ cu o bursă tradițională?",
      de: "Was ist ein 'Frachtmarktplatz' im Vergleich zu einer traditionellen Börse?",
      en: "What is a 'freight marketplace' compared to a traditional exchange?"
    },
    options: {
      ro: ["Același lucru", "Platformă mai integrată cu servicii complete", "O versiune mai veche", "Doar pentru maritim"],
      de: ["Das Gleiche", "Stärker integrierte Plattform mit umfassenden Diensten", "Eine ältere Version", "Nur für Seefahrt"],
      en: ["The same thing", "More integrated platform with complete services", "An older version", "Maritime only"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marketplace-urile moderne oferă servicii complete: matching, plată, documentație, asigurare.",
      de: "Moderne Marktplätze bieten umfassende Dienste: Matching, Zahlung, Dokumentation, Versicherung.",
      en: "Modern marketplaces offer complete services: matching, payment, documentation, insurance."
    }
  },
  {
    question: {
      ro: "Ce funcție are 'route planning' integrat pe bursele avansate?",
      de: "Welche Funktion hat die integrierte 'Routenplanung' bei fortgeschrittenen Börsen?",
      en: "What function does integrated 'route planning' have on advanced exchanges?"
    },
    options: {
      ro: ["Găsirea restaurantelor", "Optimizarea traseelor pentru multiple încărcături", "Planificarea vacanțelor", "Căutarea hotelurilor"],
      de: ["Restaurants finden", "Routenoptimierung für mehrere Ladungen", "Urlaubsplanung", "Hotelsuche"],
      en: ["Finding restaurants", "Optimizing routes for multiple loads", "Vacation planning", "Hotel search"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Route planning ajută la combinarea mai multor încărcături pentru maximizarea eficienței.",
      de: "Routenplanung hilft bei der Kombination mehrerer Ladungen zur Effizienzmaximierung.",
      en: "Route planning helps combine multiple loads to maximize efficiency."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'digital freight' în evoluția burselor?",
      de: "Was bedeutet 'Digital Freight' in der Börsenentwicklung?",
      en: "What does 'digital freight' represent in exchange evolution?"
    },
    options: {
      ro: ["Marfă virtuală", "Digitalizarea completă a proceselor de transport", "Cântărire electronică", "Email marketing"],
      de: ["Virtuelle Fracht", "Vollständige Digitalisierung der Transportprozesse", "Elektronisches Wiegen", "E-Mail-Marketing"],
      en: ["Virtual cargo", "Complete digitalization of transport processes", "Electronic weighing", "Email marketing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Digital freight reprezintă transformarea digitală completă a logisticii, de la căutare până la plată.",
      de: "Digital Freight repräsentiert die vollständige digitale Transformation der Logistik, von der Suche bis zur Zahlung.",
      en: "Digital freight represents the complete digital transformation of logistics, from search to payment."
    }
  },
  {
    question: {
      ro: "Ce este 'capacity planning' pe bursele de transport?",
      de: "Was ist 'Kapazitätsplanung' an Frachtbörsen?",
      en: "What is 'capacity planning' on freight exchanges?"
    },
    options: {
      ro: ["Planificarea benzii", "Gestionarea și optimizarea capacității disponibile", "Numărul de angajați", "Dimensiunea biroului"],
      de: ["Spurplanung", "Verwaltung und Optimierung verfügbarer Kapazitäten", "Anzahl der Mitarbeiter", "Bürogröße"],
      en: ["Lane planning", "Managing and optimizing available capacity", "Number of employees", "Office size"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Capacity planning ajută la gestionarea eficientă a flotei și evitarea curselor goale.",
      de: "Kapazitätsplanung hilft bei der effizienten Flottenverwaltung und Vermeidung von Leerfahrten.",
      en: "Capacity planning helps efficiently manage the fleet and avoid empty runs."
    }
  }
];

export function getRandomExchangesQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...exchangesQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
