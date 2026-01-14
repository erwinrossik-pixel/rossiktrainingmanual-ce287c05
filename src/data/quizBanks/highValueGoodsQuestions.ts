import { QuizQuestion } from '../quizData';

export const highValueGoodsQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce se consideră 'marfă de valoare mare' în transport?",
    options: ["Orice marfă", "Mărfuri cu valoare ridicată ce necesită securitate sporită", "Doar aur și bijuterii", "Mărfuri grele"],
    correctIndex: 1,
    explanation: {
      ro: "Mărfurile de valoare mare includ electronice, produse farmaceutice, bijuterii și alte bunuri valoroase.",
      de: "Hochwertige Güter umfassen Elektronik, Pharmazeutika, Schmuck und andere wertvolle Waren.",
      en: "High-value goods include electronics, pharmaceuticals, jewelry and other valuable items."
    }
  },
  {
    question: "Care este prima măsură de securitate pentru transport de valoare mare?",
    options: ["Viteza maximă", "Verificarea antecedentelor șoferului și a vehiculului", "Ascunderea destinației", "Fără măsuri speciale"],
    correctIndex: 1,
    explanation: {
      ro: "Verificarea antecedentelor șoferului și vehiculului asigură integritatea transportului.",
      de: "Die Überprüfung von Fahrer und Fahrzeug gewährleistet die Transportintegrität.",
      en: "Background checks of driver and vehicle ensure transport integrity."
    }
  },
  {
    question: "Ce tip de asigurare este necesară pentru mărfuri de valoare mare?",
    options: ["Asigurare standard", "Asigurare all-risk cu limită ridicată", "Fără asigurare", "Doar asigurare de viață"],
    correctIndex: 1,
    explanation: {
      ro: "Asigurarea all-risk cu limită ridicată acoperă toate riscurile pentru mărfuri valoroase.",
      de: "All-Risk-Versicherung mit hohem Limit deckt alle Risiken für wertvolle Güter ab.",
      en: "All-risk insurance with high limit covers all risks for valuable goods."
    }
  },
  {
    question: "Ce înseamnă 'cargo theft hotspot'?",
    options: ["Depozit fierbinte", "Zonă cu risc ridicat de furt de marfă", "Parcare caldă", "Punct de control vamal"],
    correctIndex: 1,
    explanation: {
      ro: "Cargo theft hotspot-urile sunt zone geografice cu incidență mare de furturi.",
      de: "Cargo Theft Hotspots sind geografische Gebiete mit hoher Diebstahlrate.",
      en: "Cargo theft hotspots are geographical areas with high theft incidence."
    }
  },
  {
    question: "Care este rolul sigiliilor de înaltă securitate?",
    options: ["Doar estetice", "Prevenirea și detectarea accesului neautorizat la marfă", "Reducerea greutății", "Identificarea șoferului"],
    correctIndex: 1,
    explanation: {
      ro: "Sigiliile de înaltă securitate previn și detectează tentativele de acces neautorizat.",
      de: "Hochsicherheitsplomben verhindern und erkennen unbefugte Zugriffsversuche.",
      en: "High-security seals prevent and detect unauthorized access attempts."
    }
  },
  {
    question: "Ce echipament de securitate ar trebui să aibă un vehicul pentru mărfuri valoroase?",
    options: ["Nimic special", "GPS tracker, alarme, încuietori suplimentare, cameră video", "Doar încuietoare standard", "Radio CB"],
    correctIndex: 1,
    explanation: {
      ro: "Vehiculele pentru mărfuri valoroase necesită GPS, alarme și sisteme de supraveghere.",
      de: "Fahrzeuge für wertvolle Güter benötigen GPS, Alarmanlagen und Überwachungssysteme.",
      en: "Vehicles for valuable goods need GPS, alarms and surveillance systems."
    }
  },
  {
    question: "Ce procedură se recomandă pentru soferiti în caz de suspiciune de urmărire?",
    options: ["Să oprească imediat", "Să nu oprească, să contacteze dispeceratul și poliția", "Să accelereze la maximum", "Să ignore"],
    correctIndex: 1,
    explanation: {
      ro: "Șoferii nu trebuie să oprească, ci să contacteze imediat dispeceratul și autoritățile.",
      de: "Fahrer sollten nicht anhalten, sondern sofort Disposition und Behörden kontaktieren.",
      en: "Drivers should not stop, but immediately contact dispatch and authorities."
    }
  },
  {
    question: "Ce este 'in-transit visibility' pentru mărfuri valoroase?",
    options: ["Ferestre mari în camion", "Monitorizare continuă a poziției și statusului în timp real", "Vedere bună a șoferului", "Fără urmărire"],
    correctIndex: 1,
    explanation: {
      ro: "In-transit visibility oferă monitorizare continuă a poziției și condițiilor transportului.",
      de: "In-Transit-Sichtbarkeit bietet kontinuierliche Überwachung von Position und Bedingungen.",
      en: "In-transit visibility provides continuous monitoring of position and conditions."
    }
  },
  {
    question: "Ce documente speciale necesită transportul de bijuterii?",
    options: ["Doar CMR", "CMR, certificat de origine, polița de asigurare, declarație de valoare", "Fără documente", "Doar factura"],
    correctIndex: 1,
    explanation: {
      ro: "Bijuteriile necesită documentație completă: CMR, certificat, asigurare și declarație.",
      de: "Schmuck benötigt vollständige Dokumentation: CMR, Zertifikat, Versicherung und Erklärung.",
      en: "Jewelry requires complete documentation: CMR, certificate, insurance and declaration."
    }
  },
  {
    question: "Care este cel mai mare risc în transportul produselor farmaceutice valoroase?",
    options: ["Ploaia", "Furtul organizat și falsificarea", "Traficul", "Costul combustibilului"],
    correctIndex: 1,
    explanation: {
      ro: "Produsele farmaceutice valoroase sunt vizate de grupări de crimă organizată.",
      de: "Wertvolle Pharmazeutika werden von organisierten Kriminalitätsgruppen anvisiert.",
      en: "Valuable pharmaceuticals are targeted by organized crime groups."
    }
  },
  // German Questions (11-20)
  {
    question: "Was ist ein Wertbehälter in der Logistik?",
    options: ["Ein Koffer", "Spezieller Container mit erhöhter Sicherheit für wertvolle Güter", "Ein normaler Container", "Ein Tresor für Dokumente"],
    correctIndex: 1,
    explanation: {
      ro: "Wertbehälter este un container special cu securitate sporită pentru mărfuri valoroase.",
      de: "Ein Wertbehälter ist ein spezieller Container mit erhöhter Sicherheit für wertvolle Güter.",
      en: "A Wertbehälter is a special container with increased security for valuable goods."
    }
  },
  {
    question: "Welche Sicherheitsmaßnahme ist bei Elektroniktransporten besonders wichtig?",
    options: ["Keine", "Versiegelte, blickdichte Fahrzeuge ohne Firmenlogo", "Große Werbung am Fahrzeug", "Offene Ladefläche"],
    correctIndex: 1,
    explanation: {
      ro: "Vehiculele pentru electronice trebuie să fie sigilate și fără logo vizibil.",
      de: "Fahrzeuge für Elektronik sollten versiegelt und ohne sichtbares Logo sein.",
      en: "Vehicles for electronics should be sealed and without visible logo."
    }
  },
  {
    question: "Was bedeutet 'covert routing' bei Wertguttransporten?",
    options: ["Direkte Route", "Geheimhaltung der Route und Zeitplanung", "Schnellste Route", "Billigste Route"],
    correctIndex: 1,
    explanation: {
      ro: "Covert routing înseamnă păstrarea secretului asupra rutei și programului.",
      de: "Covert Routing bedeutet Geheimhaltung von Route und Zeitplan.",
      en: "Covert routing means keeping the route and schedule secret."
    }
  },
  {
    question: "Welche Pause-Strategie ist für Wertguttransporte empfohlen?",
    options: ["Lange Pausen an Raststätten", "Kurze Pausen an sicheren, beleuchteten Orten mit Überwachung", "Keine Pausen", "Pausen nur nachts"],
    correctIndex: 1,
    explanation: {
      ro: "Pauzele pentru transport de valoare trebuie făcute în locuri sigure și supravegheate.",
      de: "Pausen bei Werttransporten sollten an sicheren, überwachten Orten stattfinden.",
      en: "Breaks for valuable transport should be at safe, monitored locations."
    }
  },
  {
    question: "Was ist eine 'Dual Driver' Strategie?",
    options: ["Zwei Lenkräder", "Zwei Fahrer für kontinuierliches Fahren und erhöhte Sicherheit", "Fahrer und Beifahrer", "Ersatzfahrer im Büro"],
    correctIndex: 1,
    explanation: {
      ro: "Dual Driver folosește doi șoferi pentru conducere continuă și securitate sporită.",
      de: "Dual Driver nutzt zwei Fahrer für kontinuierliches Fahren und erhöhte Sicherheit.",
      en: "Dual Driver uses two drivers for continuous driving and increased security."
    }
  },
  {
    question: "Welche Versicherungssumme ist typisch für Elektroniktransporte?",
    options: ["Standard €50.000", "Erhöhte Summen von €200.000 bis zu mehreren Millionen", "Keine Versicherung nötig", "Nur €10.000"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul de electronice necesită sume asigurate ridicate, până la milioane de euro.",
      de: "Elektroniktransport benötigt hohe Versicherungssummen bis zu mehreren Millionen.",
      en: "Electronics transport needs high insurance sums up to several million."
    }
  },
  {
    question: "Was sollte ein Fahrer tun, wenn er einen Überfall vermutet?",
    options: ["Konfrontieren", "Nicht anhalten, Alarm auslösen, Polizei und Zentrale kontaktieren", "Weiterschlafen", "Ware übergeben"],
    correctIndex: 1,
    explanation: {
      ro: "Șoferii nu trebuie să oprească, ci să activeze alarma și să contacteze autoritățile.",
      de: "Fahrer sollten nicht anhalten, sondern Alarm auslösen und Behörden kontaktieren.",
      en: "Drivers should not stop, but trigger alarm and contact authorities."
    }
  },
  {
    question: "Welche Technologie hilft bei der Wiederauffindung gestohlener Güter?",
    options: ["Nur Papiere", "Versteckte GPS-Tracker in der Ware selbst", "Keine Technologie", "Nur Fotos"],
    correctIndex: 1,
    explanation: {
      ro: "GPS trackere ascunse în marfă ajută la recuperarea mărfurilor furate.",
      de: "Versteckte GPS-Tracker in der Ware helfen bei der Wiederbeschaffung gestohlener Güter.",
      en: "Hidden GPS trackers in goods help recover stolen merchandise."
    }
  },
  {
    question: "Was ist bei der Übergabe von Wertgütern besonders wichtig?",
    options: ["Schnelle Übergabe", "Identitätsprüfung des Empfängers, dokumentierte Übergabe", "Keine Kontrolle nötig", "Nur Unterschrift"],
    correctIndex: 1,
    explanation: {
      ro: "Predarea mărfurilor valoroase necesită verificarea identității și documentare completă.",
      de: "Übergabe von Wertgütern erfordert Identitätsprüfung und vollständige Dokumentation.",
      en: "Handover of valuable goods requires identity verification and complete documentation."
    }
  },
  {
    question: "Welche Rolle spielt die Personalauswahl bei Wertguttransporten?",
    options: ["Keine Rolle", "Kritisch - strenge Hintergrundprüfungen und Schulungen", "Nur Führerscheinprüfung", "Alter ist wichtig"],
    correctIndex: 1,
    explanation: {
      ro: "Selecția personalului pentru transport de valoare necesită verificări stricte.",
      de: "Personalauswahl für Werttransport erfordert strenge Hintergrundprüfungen.",
      en: "Personnel selection for valuable transport requires strict background checks."
    }
  },
  // English Questions (21-30)
  {
    question: "What is TAPA (Transported Asset Protection Association)?",
    options: ["A transport union", "Global security standards organization for supply chain security", "A pricing association", "An insurance company"],
    correctIndex: 1,
    explanation: {
      ro: "TAPA este organizația globală pentru standarde de securitate în lanțul de aprovizionare.",
      de: "TAPA ist die globale Organisation für Sicherheitsstandards in der Lieferkette.",
      en: "TAPA is the global organization for security standards in the supply chain."
    }
  },
  {
    question: "What does FSR (Facility Security Requirements) certification indicate?",
    options: ["Fast shipping", "Warehouse meets TAPA security standards for high-value goods", "Fire safety only", "Financial stability"],
    correctIndex: 1,
    explanation: {
      ro: "Certificarea FSR indică că depozitul respectă standardele TAPA pentru mărfuri valoroase.",
      de: "FSR-Zertifizierung zeigt an, dass das Lager TAPA-Standards für Wertgüter erfüllt.",
      en: "FSR certification indicates warehouse meets TAPA standards for valuable goods."
    }
  },
  {
    question: "What is 'cargo at rest' vulnerability?",
    options: ["Cargo is safe when resting", "Highest theft risk when vehicles are parked or goods are in storage", "Only moving cargo at risk", "No vulnerability exists"],
    correctIndex: 1,
    explanation: {
      ro: "Cel mai mare risc de furt este când vehiculele sunt parcate sau mărfurile depozitate.",
      de: "Das höchste Diebstahlrisiko besteht, wenn Fahrzeuge geparkt oder Güter gelagert sind.",
      en: "Highest theft risk is when vehicles are parked or goods are in storage."
    }
  },
  {
    question: "What is the purpose of a panic button in high-value transport?",
    options: ["For comfort", "Silent alarm to alert security center without alerting thieves", "Music control", "Air conditioning"],
    correctIndex: 1,
    explanation: {
      ro: "Butonul de panică alertează silențios centrul de securitate fără a alerta hoții.",
      de: "Der Panikknopf alarmiert still die Sicherheitszentrale ohne Diebe zu warnen.",
      en: "Panic button silently alerts security center without alerting thieves."
    }
  },
  {
    question: "What documentation should accompany pharmaceutical shipments?",
    options: ["Only invoice", "GDP documentation, temperature logs, chain of custody, packing list", "No documentation needed", "Just CMR"],
    correctIndex: 1,
    explanation: {
      ro: "Expedierile farmaceutice necesită documentație GDP, loguri de temperatură și chain of custody.",
      de: "Pharmasendungen erfordern GDP-Dokumentation, Temperaturprotokolle und Lieferkettendokumentation.",
      en: "Pharmaceutical shipments require GDP documentation, temperature logs and chain of custody."
    }
  },
  {
    question: "What is a secure parking facility?",
    options: ["Any parking lot", "Fenced, lit, monitored parking with access control for trucks with high-value cargo", "Free parking", "Roadside parking"],
    correctIndex: 1,
    explanation: {
      ro: "Parcările sigure au gard, iluminare, supraveghere și control al accesului.",
      de: "Sichere Parkplätze haben Zaun, Beleuchtung, Überwachung und Zugangskontrolle.",
      en: "Secure parking has fencing, lighting, surveillance and access control."
    }
  },
  {
    question: "How should high-value goods be loaded for security?",
    options: ["At the back for easy access", "Deep inside the vehicle, with other goods blocking access", "On top of other goods", "Loose loading"],
    correctIndex: 1,
    explanation: {
      ro: "Mărfurile valoroase se încarcă adânc în vehicul, cu alte mărfuri blocând accesul.",
      de: "Wertvolle Güter werden tief im Fahrzeug geladen, mit anderen Gütern, die den Zugang blockieren.",
      en: "Valuable goods are loaded deep in the vehicle, with other goods blocking access."
    }
  },
  {
    question: "What is the role of intelligence sharing in cargo theft prevention?",
    options: ["Not useful", "Industry collaboration to share theft patterns and hotspot information", "Competitors shouldn't share", "Only for police"],
    correctIndex: 1,
    explanation: {
      ro: "Colaborarea industrială pentru schimbul de informații despre furturi îmbunătățește securitatea.",
      de: "Branchenzusammenarbeit zum Austausch von Diebstahlinformationen verbessert die Sicherheit.",
      en: "Industry collaboration to share theft information improves security."
    }
  },
  {
    question: "What training should drivers of high-value goods receive?",
    options: ["No special training", "Security awareness, evasive driving, emergency procedures, communication protocols", "Only GPS training", "Basic driving only"],
    correctIndex: 1,
    explanation: {
      ro: "Șoferii pentru mărfuri valoroase necesită instruire în securitate și proceduri de urgență.",
      de: "Fahrer für Wertgüter benötigen Sicherheitsschulung und Notfallverfahren.",
      en: "Drivers for valuable goods need security training and emergency procedures."
    }
  },
  {
    question: "What should be the response time for security alerts?",
    options: ["Next day", "Immediate - within minutes for tracking center and authorities", "Within an hour", "When convenient"],
    correctIndex: 1,
    explanation: {
      ro: "Răspunsul la alertele de securitate trebuie să fie imediat, în câteva minute.",
      de: "Reaktion auf Sicherheitsalarme muss sofort erfolgen, innerhalb von Minuten.",
      en: "Response to security alerts must be immediate, within minutes."
    }
  }
];
