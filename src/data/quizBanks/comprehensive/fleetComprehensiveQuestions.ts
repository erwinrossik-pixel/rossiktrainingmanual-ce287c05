import { TranslatedQuizQuestion } from "@/data/quizTranslations";

export const fleetComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele tipuri de vehicule în flota de transport marfă?",
      de: "Was sind die Hauptfahrzeugtypen in der Gütertransportflotte?",
      en: "What are the main vehicle types in the freight transport fleet?"
    },
    options: {
      ro: ["Camioane solo, autotrenuri, semiremorci (tautliner, frigorific, cisternă, platformă)", "Doar camioane de 3.5t", "Exclusiv remorci frigorifice", "Numai vehicule electrice"],
      de: ["Solo-LKW, Lastzüge, Sattelauflieger (Tautliner, Kühl, Tank, Plateau)", "Nur 3,5t LKW", "Ausschließlich Kühlanhänger", "Nur Elektrofahrzeuge"],
      en: ["Solo trucks, truck trains, semi-trailers (tautliner, refrigerated, tanker, flatbed)", "Only 3.5t trucks", "Exclusively refrigerated trailers", "Only electric vehicles"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Flota diversificată permite servirea mai multor tipuri de marfă. Fiecare tip de vehicul are avantaje și restricții specifice.",
      de: "Diversifizierte Flotte ermöglicht Bedienung mehrerer Frachttypen. Jeder Fahrzeugtyp hat spezifische Vorteile und Beschränkungen.",
      en: "Diversified fleet allows serving multiple cargo types. Each vehicle type has specific advantages and restrictions."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'utilizarea flotei' și de ce este importantă?",
      de: "Was ist 'Flottenauslastung' und warum ist sie wichtig?",
      en: "What is 'fleet utilization' and why is it important?"
    },
    options: {
      ro: ["Procentul de timp/km în care vehiculele sunt productive; utilizare mare = profitabilitate mare", "Numărul total de vehicule deținute", "Viteza medie a flotei", "Vârsta vehiculelor"],
      de: ["Prozentsatz der Zeit/km in der Fahrzeuge produktiv sind; hohe Auslastung = hohe Profitabilität", "Gesamtzahl der Fahrzeuge", "Durchschnittsgeschwindigkeit der Flotte", "Fahrzeugalter"],
      en: ["Percentage of time/km when vehicles are productive; high utilization = high profitability", "Total number of vehicles owned", "Fleet average speed", "Vehicle age"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Utilizare țintă: 85-95%. Sub 80% indică ineficiență. Costurile fixe se împart pe mai puține curse = pierderi.",
      de: "Zielauslastung: 85-95%. Unter 80% zeigt Ineffizienz. Fixkosten verteilen sich auf weniger Fahrten = Verluste.",
      en: "Target utilization: 85-95%. Below 80% indicates inefficiency. Fixed costs spread over fewer trips = losses."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce documente trebuie să aibă la bord un vehicul de transport marfă internațional?",
      de: "Welche Dokumente muss ein internationales Güterfahrzeug an Bord haben?",
      en: "What documents must an international freight vehicle have on board?"
    },
    options: {
      ro: ["Licență transport, certificat înmatriculare, ITP, asigurare, CMR, card tahograf, permis conducere", "Doar permisul de conducere", "Exclusiv CMR-ul", "Numai asigurarea"],
      de: ["Transportlizenz, Zulassungsbescheinigung, TÜV, Versicherung, CMR, Tachographenkarte, Führerschein", "Nur Führerschein", "Ausschließlich CMR", "Nur Versicherung"],
      en: ["Transport license, registration certificate, MOT, insurance, CMR, tachograph card, driving license", "Only driving license", "Exclusively CMR", "Only insurance"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Lipsa oricărui document poate duce la imobilizarea vehiculului. Verificarea înainte de plecare e obligatorie.",
      de: "Fehlen jedes Dokuments kann zu Fahrzeugstilllegung führen. Prüfung vor Abfahrt ist obligatorisch.",
      en: "Missing any document can lead to vehicle immobilization. Pre-departure check is mandatory."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este GPS tracking-ul și care sunt beneficiile sale pentru managementul flotei?",
      de: "Was ist GPS-Tracking und was sind seine Vorteile für Flottenmanagement?",
      en: "What is GPS tracking and what are its benefits for fleet management?"
    },
    options: {
      ro: ["Localizare în timp real a vehiculelor; permite optimizare rute, monitorizare consum, securitate, ETA precis", "Doar pentru a urmări șoferii", "Sistem opțional fără beneficii clare", "Utilizat doar în transport aerian"],
      de: ["Echtzeit-Fahrzeugortung; ermöglicht Routenoptimierung, Verbrauchsüberwachung, Sicherheit, genaue ETA", "Nur zur Fahrerverfolgung", "Optionales System ohne klare Vorteile", "Nur im Lufttransport verwendet"],
      en: ["Real-time vehicle location; enables route optimization, consumption monitoring, security, accurate ETA", "Only for tracking drivers", "Optional system without clear benefits", "Used only in air transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "GPS + telematică modernă: consum combustibil, stil conducere, diagnostic vehicul, geofencing, automatizare raportare.",
      de: "GPS + moderne Telematik: Kraftstoffverbrauch, Fahrstil, Fahrzeugdiagnose, Geofencing, Berichtsautomatisierung.",
      en: "GPS + modern telematics: fuel consumption, driving style, vehicle diagnostics, geofencing, reporting automation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt normele de emisii Euro și ce restricții implică?",
      de: "Was sind die Euro-Emissionsnormen und welche Beschränkungen beinhalten sie?",
      en: "What are Euro emission standards and what restrictions do they involve?"
    },
    options: {
      ro: ["Standarde UE pentru emisii vehicule (Euro 6 actual); restricții acces zone urbane, taxe diferențiate", "Doar recomandări fără consecințe", "Se aplică doar pentru autoturisme", "Standarde pentru combustibil, nu vehicule"],
      de: ["EU-Standards für Fahrzeugemissionen (aktuell Euro 6); Zugangsbeschränkungen Stadtzonen, differenzierte Maut", "Nur Empfehlungen ohne Folgen", "Gilt nur für PKW", "Standards für Kraftstoff, nicht Fahrzeuge"],
      en: ["EU standards for vehicle emissions (Euro 6 current); urban zone access restrictions, differentiated tolls", "Only recommendations without consequences", "Applies only to passenger cars", "Standards for fuel, not vehicles"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Vehiculele sub Euro 5 sunt tot mai restricționate. Investiția în flotă Euro 6/electrică devine obligatorie pentru acces în orașe.",
      de: "Fahrzeuge unter Euro 5 werden zunehmend eingeschränkt. Investition in Euro 6/Elektroflotte wird obligatorisch für Stadtzugang.",
      en: "Vehicles below Euro 5 are increasingly restricted. Investment in Euro 6/electric fleet is becoming mandatory for city access."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este planul de mentenanță preventivă și de ce este esențial?",
      de: "Was ist der präventive Wartungsplan und warum ist er essentiell?",
      en: "What is the preventive maintenance plan and why is it essential?"
    },
    options: {
      ro: ["Program de verificări și înlocuiri programate pentru a preveni defecțiuni; reduce breakdown-urile și costurile totale", "Reparații doar când se defectează", "Sistem opțional pentru flotă nouă", "Verificări exclusiv la ITP"],
      de: ["Programm geplanter Prüfungen und Ersatz zur Vermeidung von Pannen; reduziert Ausfälle und Gesamtkosten", "Reparaturen nur bei Ausfall", "Optionales System für neue Flotte", "Prüfungen nur bei TÜV"],
      en: ["Program of scheduled checks and replacements to prevent breakdowns; reduces failures and total costs", "Repairs only when broken", "Optional system for new fleet", "Checks only at MOT"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Mentenanța preventivă costă mai puțin decât breakdown-ul pe drum. Include: ulei, filtre, frâne, pneuri, sisteme electrice.",
      de: "Präventive Wartung kostet weniger als Panne unterwegs. Beinhaltet: Öl, Filter, Bremsen, Reifen, elektrische Systeme.",
      en: "Preventive maintenance costs less than breakdown on road. Includes: oil, filters, brakes, tires, electrical systems."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt avantajele și dezavantajele leasingului vs cumpărarea vehiculelor?",
      de: "Was sind die Vor- und Nachteile von Leasing vs Fahrzeugkauf?",
      en: "What are the advantages and disadvantages of leasing vs buying vehicles?"
    },
    options: {
      ro: ["Leasing: flux de numerar previzibil, flotă nouă; Cumpărare: proprietate, valoare reziduală, flexibilitate", "Leasingul e întotdeauna mai ieftin", "Cumpărarea e întotdeauna mai bună", "Nu există diferență semnificativă"],
      de: ["Leasing: vorhersehbarer Cashflow, neue Flotte; Kauf: Eigentum, Restwert, Flexibilität", "Leasing ist immer billiger", "Kauf ist immer besser", "Kein signifikanter Unterschied"],
      en: ["Leasing: predictable cash flow, new fleet; Buying: ownership, residual value, flexibility", "Leasing is always cheaper", "Buying is always better", "No significant difference"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Alegerea depinde de situația financiară, strategie fiscală, preferință de risc. Multe companii folosesc mix leasing + proprietate.",
      de: "Wahl hängt von finanzieller Situation, Steuerstrategie, Risikopräferenz ab. Viele Firmen nutzen Mix Leasing + Eigentum.",
      en: "Choice depends on financial situation, tax strategy, risk preference. Many companies use mix of leasing + ownership."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este tahograful digital și ce înregistrează?",
      de: "Was ist der digitale Tachograph und was zeichnet er auf?",
      en: "What is the digital tachograph and what does it record?"
    },
    options: {
      ro: ["Dispozitiv obligatoriu care înregistrează: timp conducere/pauze/odihnă, viteză, distanță, șofer (card)", "Opțional pentru transport național", "Înregistrează doar viteza", "Folosit doar pentru pasageri"],
      de: ["Obligatorisches Gerät das aufzeichnet: Lenk-/Pausen-/Ruhezeit, Geschwindigkeit, Strecke, Fahrer (Karte)", "Optional für Inlandstransport", "Zeichnet nur Geschwindigkeit auf", "Nur für Passagiere verwendet"],
      en: ["Mandatory device recording: driving/break/rest time, speed, distance, driver (card)", "Optional for domestic transport", "Only records speed", "Used only for passengers"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Tahograful protejează șoferul și compania. Datele sunt verificate de autorități. Manipularea e infracțiune cu consecințe severe.",
      de: "Tachograph schützt Fahrer und Firma. Daten werden von Behörden geprüft. Manipulation ist Straftat mit schweren Folgen.",
      en: "Tachograph protects driver and company. Data is checked by authorities. Manipulation is criminal offense with severe consequences."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt cerințele pentru transportul frigorific (ATP)?",
      de: "Was sind die Anforderungen für Kühltransport (ATP)?",
      en: "What are the requirements for refrigerated transport (ATP)?"
    },
    options: {
      ro: ["Vehicul certificat ATP, verificare periodică, termograf calibrat, menținere temperatură pe tot traseul", "Orice vehicul cu frigider portabil", "Certificare doar pentru transport internațional", "ATP e opțional pentru alimente"],
      de: ["ATP-zertifiziertes Fahrzeug, periodische Prüfung, kalibrierter Thermograf, Temperaturhaltung auf gesamter Strecke", "Jedes Fahrzeug mit tragbarem Kühlschrank", "Zertifizierung nur für internationalen Transport", "ATP ist optional für Lebensmittel"],
      en: ["ATP-certified vehicle, periodic inspection, calibrated thermograph, temperature maintenance throughout route", "Any vehicle with portable fridge", "Certification only for international transport", "ATP is optional for food"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ATP garantează integritatea lanțului de frig. Certificatul specifică clasele de temperatură pentru care vehiculul e aprobat.",
      de: "ATP garantiert Kühlkettenintegrität. Zertifikat spezifiziert Temperaturklassen für die Fahrzeug zugelassen ist.",
      en: "ATP guarantees cold chain integrity. Certificate specifies temperature classes for which vehicle is approved."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este TCO (Total Cost of Ownership) pentru un vehicul de flotă?",
      de: "Was ist TCO (Total Cost of Ownership) für ein Flottenfahrzeug?",
      en: "What is TCO (Total Cost of Ownership) for a fleet vehicle?"
    },
    options: {
      ro: ["Costul total pe durata de viață: achiziție + combustibil + mentenanță + asigurare + taxe - valoare reziduală", "Doar prețul de cumpărare", "Exclusiv costul combustibilului anual", "Numai costurile de reparații"],
      de: ["Gesamtkosten über Lebensdauer: Anschaffung + Kraftstoff + Wartung + Versicherung + Steuern - Restwert", "Nur Kaufpreis", "Ausschließlich jährliche Kraftstoffkosten", "Nur Reparaturkosten"],
      en: ["Total cost over lifetime: purchase + fuel + maintenance + insurance + taxes - residual value", "Only purchase price", "Exclusively annual fuel cost", "Only repair costs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "TCO e decisiv pentru alegerea vehiculului. Un vehicul ieftin la achiziție poate fi scump în operare și invers.",
      de: "TCO ist entscheidend für Fahrzeugwahl. Ein günstiges Fahrzeug bei Anschaffung kann im Betrieb teuer sein und umgekehrt.",
      en: "TCO is decisive for vehicle choice. A cheap vehicle to purchase can be expensive to operate and vice versa."
    }
  },
  
  // Level 4 Questions (10)
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum optimizezi compoziția flotei pentru cerințele de business?",
      de: "Wie optimieren Sie die Flottenzusammensetzung für Geschäftsanforderungen?",
      en: "How do you optimize fleet composition for business requirements?"
    },
    options: {
      ro: ["Analiză tip marfă, rute frecvente, sezonalitate; mix optim între tipuri pentru flexibilitate și eficiență", "Toate vehiculele identice pentru simplificare", "Doar vehicule mari pentru economii de scală", "Decizii bazate exclusiv pe preț"],
      de: ["Analyse Frachttyp, häufige Routen, Saisonalität; optimaler Mix zwischen Typen für Flexibilität und Effizienz", "Alle Fahrzeuge identisch für Vereinfachung", "Nur große Fahrzeuge für Skaleneffekte", "Entscheidungen ausschließlich preisbasiert"],
      en: ["Analyze cargo type, frequent routes, seasonality; optimal mix between types for flexibility and efficiency", "All vehicles identical for simplification", "Only large vehicles for economies of scale", "Decisions based exclusively on price"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Flota optimă: 70-80% pentru cerere de bază, 10-15% flexibilă pentru peak, capacitate de subcontractare pentru excepții.",
      de: "Optimale Flotte: 70-80% für Grundnachfrage, 10-15% flexibel für Spitzen, Subunternehmerkapazität für Ausnahmen.",
      en: "Optimal fleet: 70-80% for base demand, 10-15% flexible for peak, subcontracting capacity for exceptions."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi momentul optim de înlocuire a vehiculului?",
      de: "Wie berechnen Sie den optimalen Zeitpunkt für Fahrzeugersatz?",
      en: "How do you calculate the optimal moment for vehicle replacement?"
    },
    options: {
      ro: ["Când costurile de mentenanță cresc, disponibilitatea scade, valoarea reziduală încă e bună - intersecția costurilor", "După un număr fix de ani", "Când se strică prima dată grav", "Când apare model nou"],
      de: ["Wenn Wartungskosten steigen, Verfügbarkeit sinkt, Restwert noch gut ist - Kostenschnittpunkt", "Nach fixer Anzahl Jahre", "Beim ersten schweren Ausfall", "Wenn neues Modell erscheint"],
      en: ["When maintenance costs rise, availability drops, residual value still good - cost intersection", "After a fixed number of years", "When it breaks down badly first time", "When new model appears"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Analiza înlocuirii: costul marginal de păstrare vs costul de achiziție nou + valoare reziduală pierdută. Tipic: 4-7 ani pentru camioane.",
      de: "Ersatzanalyse: Grenzkosten des Behaltens vs Neuanschaffungskosten + verlorener Restwert. Typisch: 4-7 Jahre für LKW.",
      en: "Replacement analysis: marginal cost of keeping vs new purchase cost + lost residual value. Typical: 4-7 years for trucks."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt strategiile de reducere a consumului de combustibil în flotă?",
      de: "Was sind Strategien zur Kraftstoffverbrauchsreduzierung in der Flotte?",
      en: "What are strategies for fuel consumption reduction in the fleet?"
    },
    options: {
      ro: ["Training eco-driving, mentenanță pneuri/aerodinamică, optimizare rute, monitorizare și feedback, vehicule eficiente", "Nu există modalități de reducere", "Doar schimbarea la vehicule electrice", "Limitarea vitezei e suficientă"],
      de: ["Eco-Driving-Training, Reifen-/Aerodynamikwartung, Routenoptimierung, Monitoring und Feedback, effiziente Fahrzeuge", "Keine Möglichkeiten zur Reduzierung", "Nur Wechsel zu Elektrofahrzeugen", "Geschwindigkeitsbegrenzung ist ausreichend"],
      en: ["Eco-driving training, tire/aerodynamics maintenance, route optimization, monitoring and feedback, efficient vehicles", "No ways to reduce", "Only switching to electric vehicles", "Speed limiting is sufficient"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Eco-driving poate reduce consumul cu 10-15%. Presiunea corectă a pneurilor: 3-5% economie. Combinația tuturor măsurilor: 20-25% economie.",
      de: "Eco-Driving kann Verbrauch um 10-15% senken. Korrekter Reifendruck: 3-5% Ersparnis. Kombination aller Maßnahmen: 20-25% Ersparnis.",
      en: "Eco-driving can reduce consumption by 10-15%. Correct tire pressure: 3-5% savings. Combination of all measures: 20-25% savings."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi planificarea întreținerii pentru o flotă mare?",
      de: "Wie verwalten Sie die Wartungsplanung für eine große Flotte?",
      en: "How do you manage maintenance planning for a large fleet?"
    },
    options: {
      ro: ["Software de fleet management cu alertări automate, intervale bazate pe km/ore/timp, planificare pentru minimizare downtime", "Fiecare șofer decide când merge la service", "Întreținere doar când se defectează", "Un calendar fix pentru toate vehiculele"],
      de: ["Flottenmanagement-Software mit automatischen Warnungen, km-/stunden-/zeitbasierte Intervalle, Planung zur Minimierung von Ausfallzeiten", "Jeder Fahrer entscheidet wann zum Service", "Wartung nur bei Panne", "Ein fixer Kalender für alle Fahrzeuge"],
      en: ["Fleet management software with automatic alerts, km/hours/time-based intervals, planning to minimize downtime", "Each driver decides when to service", "Maintenance only when broken", "A fixed calendar for all vehicles"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Mentenanța predictivă folosind telematică poate anticipa defecțiuni. Programarea în weekend sau noapte minimizează pierderea de productivitate.",
      de: "Prädiktive Wartung mittels Telematik kann Pannen vorhersehen. Planung am Wochenende oder nachts minimiert Produktivitätsverlust.",
      en: "Predictive maintenance using telematics can anticipate failures. Scheduling on weekend or night minimizes productivity loss."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt considerentele pentru alegerea între Euro 6 diesel și vehicule alternative (LNG, electric)?",
      de: "Was sind die Überlegungen zur Wahl zwischen Euro 6 Diesel und Alternativfahrzeugen (LNG, Elektro)?",
      en: "What are considerations for choosing between Euro 6 diesel and alternative vehicles (LNG, electric)?"
    },
    options: {
      ro: ["TCO pe ruta specifică, infrastructură disponibilă, restricții urbane, subvenții, valoare reziduală, imagine ESG", "Dieselul e întotdeauna mai eficient", "Electricul e mai ieftin în orice situație", "Doar prețul inițial contează"],
      de: ["TCO auf spezifischer Route, verfügbare Infrastruktur, Stadtbeschränkungen, Subventionen, Restwert, ESG-Image", "Diesel ist immer effizienter", "Elektro ist in jeder Situation billiger", "Nur Anfangspreis zählt"],
      en: ["TCO on specific route, available infrastructure, urban restrictions, subsidies, residual value, ESG image", "Diesel is always more efficient", "Electric is cheaper in any situation", "Only initial price matters"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Nu există soluție universală. Electricul: excelent pentru last-mile urban. LNG: potențial pentru long-haul. Diesel: încă cel mai versatil.",
      de: "Keine universelle Lösung. Elektro: exzellent für urbane Letzte Meile. LNG: Potenzial für Fernstrecke. Diesel: noch am vielseitigsten.",
      en: "No universal solution. Electric: excellent for urban last-mile. LNG: potential for long-haul. Diesel: still most versatile."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum implementezi un program de siguranță pentru flotă?",
      de: "Wie implementieren Sie ein Flottenicherheitsprogramm?",
      en: "How do you implement a fleet safety program?"
    },
    options: {
      ro: ["Training regulat, monitorizare comportament (telematică), politici clare, investigare incidente, recunoaștere performanță", "Siguranța e responsabilitatea șoferului exclusiv", "Doar asigurarea acoperă riscurile", "Un training inițial e suficient"],
      de: ["Regelmäßiges Training, Verhaltensmonitoring (Telematik), klare Richtlinien, Vorfalluntersuchung, Leistungsanerkennung", "Sicherheit ist ausschließlich Fahrerverantwortung", "Nur Versicherung deckt Risiken", "Ein Anfangstraining ist ausreichend"],
      en: ["Regular training, behavior monitoring (telematics), clear policies, incident investigation, performance recognition", "Safety is driver's responsibility exclusively", "Only insurance covers risks", "One initial training is sufficient"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cultura de siguranță reduce accidentele cu 40-60%. Costul accidentelor (directe + indirecte) poate fi devastator pentru profitabilitate.",
      de: "Sicherheitskultur reduziert Unfälle um 40-60%. Unfallkosten (direkt + indirekt) können verheerend für Profitabilität sein.",
      en: "Safety culture reduces accidents by 40-60%. Accident costs (direct + indirect) can be devastating for profitability."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt beneficiile și provocările subcontractării parțiale a flotei?",
      de: "Was sind die Vorteile und Herausforderungen der Teilauslagerung der Flotte?",
      en: "What are the benefits and challenges of partially subcontracting the fleet?"
    },
    options: {
      ro: ["Beneficii: flexibilitate, costuri variabile; Provocări: control calitate, dependență, consistența serviciului", "Subcontractarea e întotdeauna mai scumpă", "Nu există beneficii reale", "Toate companiile ar trebui să aibă 100% flotă proprie"],
      de: ["Vorteile: Flexibilität, variable Kosten; Herausforderungen: Qualitätskontrolle, Abhängigkeit, Servicekonsistenz", "Subunternehmerschaft ist immer teurer", "Keine echten Vorteile", "Alle Firmen sollten 100% eigene Flotte haben"],
      en: ["Benefits: flexibility, variable costs; Challenges: quality control, dependency, service consistency", "Subcontracting is always more expensive", "No real benefits", "All companies should have 100% own fleet"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Mix optimal: flotă proprie pentru core business + subcontractori verificați pentru fluctuații. Contracte clare și KPI-uri pentru calitate.",
      de: "Optimaler Mix: eigene Flotte für Kerngeschäft + geprüfte Subunternehmer für Schwankungen. Klare Verträge und KPIs für Qualität.",
      en: "Optimal mix: own fleet for core business + vetted subcontractors for fluctuations. Clear contracts and KPIs for quality."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi alocarea vehiculelor și șoferilor pentru eficiență maximă?",
      de: "Wie verwalten Sie die Fahrzeug- und Fahrerzuordnung für maximale Effizienz?",
      en: "How do you manage vehicle and driver allocation for maximum efficiency?"
    },
    options: {
      ro: ["Software de planificare, considerare abilități șofer, restricții legale, minimizare km gol, echilibrare încărcare", "Primul disponibil ia prima cursă", "Alocarea nu afectează eficiența", "Doar șoferul alege ce cursă face"],
      de: ["Planungssoftware, Berücksichtigung Fahrerfähigkeiten, gesetzliche Beschränkungen, Minimierung Leer-km, Lastausgleich", "Erster Verfügbarer nimmt erste Fahrt", "Zuordnung beeinflusst Effizienz nicht", "Nur Fahrer wählt welche Fahrt"],
      en: ["Planning software, consideration of driver skills, legal restrictions, minimization of empty km, load balancing", "First available takes first trip", "Allocation doesn't affect efficiency", "Only driver chooses which trip"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Alocarea inteligentă poate crește utilizarea cu 5-10%. Algoritmi de optimizare pot găsi combinații pe care oamenii le-ar rata.",
      de: "Intelligente Zuordnung kann Auslastung um 5-10% steigern. Optimierungsalgorithmen können Kombinationen finden die Menschen übersehen.",
      en: "Smart allocation can increase utilization by 5-10%. Optimization algorithms can find combinations that humans would miss."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt cerințele pentru transportul de mărfuri periculoase în termeni de vehicul?",
      de: "Was sind die Fahrzeuganforderungen für Gefahrguttransport?",
      en: "What are vehicle requirements for dangerous goods transport?"
    },
    options: {
      ro: ["Certificare ADR vehicul, echipament specific clasei, marcaje corecte, inspecții periodice, documentație la bord", "Orice vehicul poate transporta ADR", "Doar șoferul trebuie certificat", "Certificarea e opțională pentru cantități mici"],
      de: ["ADR-Fahrzeugzertifizierung, klassenspezifische Ausrüstung, korrekte Kennzeichnung, periodische Inspektionen, Dokumentation an Bord", "Jedes Fahrzeug kann ADR transportieren", "Nur Fahrer muss zertifiziert sein", "Zertifizierung ist optional für kleine Mengen"],
      en: ["ADR vehicle certification, class-specific equipment, correct markings, periodic inspections, documentation on board", "Any vehicle can transport ADR", "Only driver needs to be certified", "Certification is optional for small quantities"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Vehiculele ADR: inspecție anuală specifică, echipament de urgență, sisteme anti-scânteie, ventilație. Non-conformitatea = amendă și confiscare.",
      de: "ADR-Fahrzeuge: jährliche spezifische Inspektion, Notfallausrüstung, Funkenfreiheitssysteme, Belüftung. Nichtkonformität = Bußgeld und Beschlagnahme.",
      en: "ADR vehicles: annual specific inspection, emergency equipment, spark-free systems, ventilation. Non-compliance = fine and confiscation."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum monitorizezi și îmbunătățești performanța șoferilor?",
      de: "Wie überwachen und verbessern Sie die Fahrerleistung?",
      en: "How do you monitor and improve driver performance?"
    },
    options: {
      ro: ["KPI-uri clare (consum, încălcări, delivery time), feedback regulat, training personalizat, recunoaștere, coaching", "Monitorizarea e invazivă și ilegală", "Doar accidentele contează ca indicator", "Evaluare anuală e suficientă"],
      de: ["Klare KPIs (Verbrauch, Verstöße, Lieferzeit), regelmäßiges Feedback, personalisiertes Training, Anerkennung, Coaching", "Monitoring ist invasiv und illegal", "Nur Unfälle zählen als Indikator", "Jährliche Bewertung ist ausreichend"],
      en: ["Clear KPIs (consumption, violations, delivery time), regular feedback, personalized training, recognition, coaching", "Monitoring is invasive and illegal", "Only accidents count as indicator", "Annual evaluation is sufficient"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Șoferii performanți sunt de 2x mai valoroși decât media (consum, siguranță, satisfacție client). Investiția în dezvoltarea lor se returnează.",
      de: "Leistungsstarke Fahrer sind 2x wertvoller als Durchschnitt (Verbrauch, Sicherheit, Kundenzufriedenheit). Investition in ihre Entwicklung zahlt sich aus.",
      en: "High-performing drivers are 2x more valuable than average (consumption, safety, customer satisfaction). Investment in their development pays off."
    }
  },
  
  // Level 5 Questions (10)
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Ai o flotă de 50 vehicule cu vârsta medie de 5 ani. Cum planifici reînnoirea pe următorii 3 ani?",
      de: "Szenario: Sie haben eine Flotte von 50 Fahrzeugen mit Durchschnittsalter 5 Jahre. Wie planen Sie die Erneuerung für die nächsten 3 Jahre?",
      en: "Scenario: You have a fleet of 50 vehicles with average age 5 years. How do you plan renewal for the next 3 years?"
    },
    options: {
      ro: ["Analiză TCO per vehicul, prioritizare înlocuire cele mai costisitoare, mix achiziție/leasing, eșalonare pentru cash-flow, considerare alternative", "Înlocuiești toate deodată", "Nu înlocuiești până nu se defectează", "Doar cele mai vechi se înlocuiesc"],
      de: ["TCO-Analyse pro Fahrzeug, Priorisierung Ersatz der teuersten, Kauf/Leasing-Mix, Staffelung für Cashflow, Alternativenberücksichtigung", "Alle auf einmal ersetzen", "Nicht ersetzen bis Panne", "Nur die ältesten ersetzen"],
      en: ["TCO analysis per vehicle, prioritize replacement of most costly, purchase/leasing mix, phasing for cash-flow, consider alternatives", "Replace all at once", "Don't replace until breakdown", "Only oldest get replaced"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Planul de reînnoire: nu doar vârstă, ci cost total de operare. Unele vehicule vechi performează mai bine decât altele noi mai scumpe în mentenanță.",
      de: "Erneuerungsplan: nicht nur Alter, sondern Gesamtbetriebskosten. Manche alten Fahrzeuge performen besser als neue mit höheren Wartungskosten.",
      en: "Renewal plan: not just age, but total operating cost. Some old vehicles perform better than new ones more expensive in maintenance."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum evaluezi ROI-ul investiției în telematică avansată pentru flotă?",
      de: "Wie bewerten Sie den ROI der Investition in fortgeschrittene Flottentelematik?",
      en: "How do you evaluate ROI of investment in advanced fleet telematics?"
    },
    options: {
      ro: ["Reducere combustibil măsurabilă, scădere accidente, eficiență planificare, reducere ore suplimentare, îmbunătățire service client", "Telematica e cost fără beneficii măsurabile", "ROI se vede doar după 10 ani", "Nu se poate calcula ROI pentru software"],
      de: ["Messbare Kraftstoffreduktion, Unfallrückgang, Planungseffizienz, Überstundenreduzierung, Kundenserviceverbesserung", "Telematik ist Kosten ohne messbare Vorteile", "ROI zeigt sich erst nach 10 Jahren", "ROI für Software nicht berechenbar"],
      en: ["Measurable fuel reduction, accident decrease, planning efficiency, overtime reduction, customer service improvement", "Telematics is cost without measurable benefits", "ROI only visible after 10 years", "Cannot calculate ROI for software"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ROI telematică: tipic 6-18 luni. Cheia: măsurare before/after pe KPI-uri specifice, nu doar 'simțire' că s-a îmbunătățit.",
      de: "Telematik-ROI: typisch 6-18 Monate. Schlüssel: Vorher/Nachher-Messung auf spezifischen KPIs, nicht nur 'Gefühl' der Verbesserung.",
      en: "Telematics ROI: typically 6-18 months. Key: before/after measurement on specific KPIs, not just 'feeling' it improved."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt considerentele strategice pentru electrificarea flotei de marfă?",
      de: "Was sind die strategischen Überlegungen zur Elektrifizierung der Güterflotte?",
      en: "What are strategic considerations for freight fleet electrification?"
    },
    options: {
      ro: ["Infrastructură încărcare, autonomie vs rute, TCO pe segment, timeline tehnologie, reglementări viitoare, valoare reziduală incertă", "Aștepți până tehnologia e matură", "Electricul nu funcționează pentru marfă grea", "Doar companiile mari pot electrifica"],
      de: ["Ladeinfrastruktur, Reichweite vs Routen, TCO pro Segment, Technologie-Timeline, zukünftige Vorschriften, unsicherer Restwert", "Warten bis Technologie reif ist", "Elektro funktioniert nicht für schwere Fracht", "Nur große Firmen können elektrifizieren"],
      en: ["Charging infrastructure, range vs routes, TCO per segment, technology timeline, future regulations, uncertain residual value", "Wait until technology is mature", "Electric doesn't work for heavy freight", "Only large companies can electrify"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Strategia: pilot pe rute potrivite (scurte, depot overnight), învață, scalează. Nu tot-sau-nimic, ci mix inteligent în tranziție.",
      de: "Strategie: Pilot auf geeigneten Routen (kurz, Depot über Nacht), lernen, skalieren. Nicht alles-oder-nichts, sondern intelligenter Mix im Übergang.",
      en: "Strategy: pilot on suitable routes (short, depot overnight), learn, scale. Not all-or-nothing, but smart mix in transition."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi o criză de capacitate (lipsa șoferilor sau vehiculelor) în perioadă de vârf?",
      de: "Wie managen Sie eine Kapazitätskrise (Fahrer- oder Fahrzeugmangel) in Spitzenzeiten?",
      en: "How do you manage a capacity crisis (shortage of drivers or vehicles) during peak period?"
    },
    options: {
      ro: ["Activare subcontractori pre-verificați, prioritizare clienți cheie, comunicare proactivă, overtime controlat, ajustare prețuri temporar", "Refuzi comenzi până la normalizare", "Supraîncărci echipa existentă nelimitat", "Aștepți să treacă perioada"],
      de: ["Aktivierung vorgeprüfter Subunternehmer, Priorisierung Schlüsselkunden, proaktive Kommunikation, kontrollierte Überstunden, temporäre Preisanpassung", "Aufträge ablehnen bis Normalisierung", "Bestehendes Team unbegrenzt überlasten", "Warten bis Periode vorbei ist"],
      en: ["Activate pre-vetted subcontractors, prioritize key customers, proactive communication, controlled overtime, temporary price adjustment", "Refuse orders until normalization", "Overload existing team unlimitedly", "Wait for period to pass"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Managementul crizei: planificare anticipată, relații cu subcontractori, transparență cu clienții. Suprautilizarea cronică duce la burnout și accidente.",
      de: "Krisenmanagement: Vorausplanung, Subunternehmerbeziehungen, Kundentransparenz. Chronische Überauslastung führt zu Burnout und Unfällen.",
      en: "Crisis management: advance planning, subcontractor relationships, customer transparency. Chronic overutilization leads to burnout and accidents."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum implementezi un program de reducere a amprentei de carbon pentru flotă?",
      de: "Wie implementieren Sie ein Programm zur CO2-Fußabdruck-Reduzierung für die Flotte?",
      en: "How do you implement a carbon footprint reduction program for the fleet?"
    },
    options: {
      ro: ["Baseline measurement, ținte realiste, mix de măsuri (eficiență, alternative, compensare), raportare transparentă, engagement șoferi", "Doar vehicule electrice rezolvă problema", "Compensarea e suficientă fără alte măsuri", "Carbon footprint nu e relevant pentru transport"],
      de: ["Baseline-Messung, realistische Ziele, Maßnahmen-Mix (Effizienz, Alternativen, Kompensation), transparente Berichterstattung, Fahrerengagement", "Nur Elektrofahrzeuge lösen das Problem", "Kompensation ist ausreichend ohne andere Maßnahmen", "Carbon Footprint ist für Transport nicht relevant"],
      en: ["Baseline measurement, realistic targets, mix of measures (efficiency, alternatives, offset), transparent reporting, driver engagement", "Only electric vehicles solve the problem", "Offsetting is enough without other measures", "Carbon footprint is not relevant for transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Program ESG credibil: măsori mai întâi, apoi reduci (eficiență, combustibili alternativi), apoi compensezi ce nu poți elimina. Evită greenwashing.",
      de: "Glaubwürdiges ESG-Programm: erst messen, dann reduzieren (Effizienz, alternative Kraftstoffe), dann kompensieren was nicht eliminierbar. Greenwashing vermeiden.",
      en: "Credible ESG program: first measure, then reduce (efficiency, alternative fuels), then offset what can't be eliminated. Avoid greenwashing."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Un vehicul cheie se defectează grav pe traseu cu marfă urgentă. Procesul tău de gestionare a crizei?",
      de: "Szenario: Ein Schlüsselfahrzeug fällt schwer mit dringender Fracht auf der Strecke aus. Ihr Krisenmanagementprozess?",
      en: "Scenario: A key vehicle breaks down badly on route with urgent cargo. Your crisis management process?"
    },
    options: {
      ro: ["Siguranța șoferului, evaluare situație, vehicul de înlocuire/transbordare, comunicare client cu soluție nu doar problemă, documentare", "Aștepți reparația indiferent de durată", "Clientul să își rezolve singur problema", "Nu există protocol pentru astfel de situații"],
      de: ["Fahrersicherheit, Situationsbewertung, Ersatzfahrzeug/Umladung, Kundenkommunikation mit Lösung nicht nur Problem, Dokumentation", "Auf Reparatur warten unabhängig von Dauer", "Kunde soll Problem selbst lösen", "Kein Protokoll für solche Situationen"],
      en: ["Driver safety, situation assessment, replacement vehicle/transshipment, customer communication with solution not just problem, documentation", "Wait for repair regardless of duration", "Customer should solve problem themselves", "No protocol for such situations"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Breakdown management: procedură clară, contacte pre-stabilite pentru assistance, vehicule backup identificate, comunicare promptă. Clientul apreciază soluția, nu scuzele.",
      de: "Pannenmanagement: klares Verfahren, vordefinierte Assistance-Kontakte, identifizierte Backup-Fahrzeuge, prompte Kommunikation. Kunde schätzt Lösung, nicht Entschuldigungen.",
      en: "Breakdown management: clear procedure, pre-established assistance contacts, identified backup vehicles, prompt communication. Customer appreciates solution, not excuses."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt implicațiile juridice și de asigurare ale unui accident grav în flotă?",
      de: "Was sind die rechtlichen und versicherungstechnischen Auswirkungen eines schweren Flottenunfalls?",
      en: "What are the legal and insurance implications of a serious fleet accident?"
    },
    options: {
      ro: ["Investigație, notificare asigurator imediat, preservare dovezi, posibile consecințe penale pentru management, impact asupra primelor", "Asigurarea acoperă tot automat", "Doar șoferul e responsabil legal", "Nu există consecințe dacă ai asigurare"],
      de: ["Untersuchung, sofortige Versichererbenachrichtigung, Beweissicherung, mögliche strafrechtliche Folgen für Management, Prämienauswirkung", "Versicherung deckt alles automatisch", "Nur Fahrer ist rechtlich verantwortlich", "Keine Folgen wenn versichert"],
      en: ["Investigation, immediate insurer notification, evidence preservation, possible criminal consequences for management, premium impact", "Insurance covers everything automatically", "Only driver is legally responsible", "No consequences if insured"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Accident grav = posibilă răspundere penală pentru management (neglijență în siguranță, ore de condus). Dosarul de siguranță al companiei devine crucial.",
      de: "Schwerer Unfall = mögliche strafrechtliche Managementhaftung (Sicherheitsvernachlässigung, Lenkzeiten). Sicherheitsakte des Unternehmens wird entscheidend.",
      en: "Serious accident = possible criminal management liability (safety negligence, driving hours). Company's safety file becomes crucial."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum optimizezi alocarea costurilor fixe vs variabile în managementul flotei?",
      de: "Wie optimieren Sie die Zuordnung von Fixkosten vs variablen Kosten im Flottenmanagement?",
      en: "How do you optimize allocation of fixed vs variable costs in fleet management?"
    },
    options: {
      ro: ["Mix flotă proprie (fix) + subcontractori (variabil) pentru a balansa risc și flexibilitate; outsourcing funcții non-core", "Toate costurile ar trebui să fie fixe", "Variabilizarea totală e întotdeauna mai bună", "Alocarea costurilor nu afectează profitabilitatea"],
      de: ["Mix eigene Flotte (fix) + Subunternehmer (variabel) zum Ausgleich von Risiko und Flexibilität; Outsourcing von Nicht-Kernfunktionen", "Alle Kosten sollten fix sein", "Totale Variabilisierung ist immer besser", "Kostenallokation beeinflusst Profitabilität nicht"],
      en: ["Mix own fleet (fixed) + subcontractors (variable) to balance risk and flexibility; outsource non-core functions", "All costs should be fixed", "Total variabilization is always better", "Cost allocation doesn't affect profitability"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Structura optimă de costuri: 60-70% fix pentru stabilitate și control, 30-40% variabil pentru flexibilitate. Adaptare la volatilitatea cererii specifice.",
      de: "Optimale Kostenstruktur: 60-70% fix für Stabilität und Kontrolle, 30-40% variabel für Flexibilität. Anpassung an spezifische Nachfragevolatilität.",
      en: "Optimal cost structure: 60-70% fixed for stability and control, 30-40% variable for flexibility. Adapt to specific demand volatility."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt tendințele în automatizarea și vehiculele autonome pentru transport de marfă?",
      de: "Was sind die Trends bei Automatisierung und autonomen Fahrzeugen für Gütertransport?",
      en: "What are trends in automation and autonomous vehicles for freight transport?"
    },
    options: {
      ro: ["Platooning în teste, autonomy nivelul 4 pe autostrăzi în dezvoltare, hub-to-hub fără șofer posibil primul; first/last mile rămâne manual", "Camioanele autonome vor înlocui șoferii în 2 ani", "Autonomia nu funcționează pentru marfă", "Nu există progres real în acest domeniu"],
      de: ["Platooning in Tests, Autonomie Stufe 4 auf Autobahnen in Entwicklung, Hub-zu-Hub fahrerlos möglicherweise zuerst; First/Last Mile bleibt manuell", "Autonome LKW ersetzen Fahrer in 2 Jahren", "Autonomie funktioniert nicht für Fracht", "Kein echter Fortschritt in diesem Bereich"],
      en: ["Platooning in tests, level 4 autonomy on highways in development, hub-to-hub driverless possibly first; first/last mile stays manual", "Autonomous trucks will replace drivers in 2 years", "Autonomy doesn't work for freight", "No real progress in this field"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Realitatea: autonomia completă e la 10-15 ani pentru rutier. Tranziția: sisteme de asistență, platooning, apoi hub-to-hub. Șoferii vor fi necesari pentru manevre complexe.",
      de: "Realität: vollständige Autonomie ist 10-15 Jahre für Straße entfernt. Übergang: Assistenzsysteme, Platooning, dann Hub-zu-Hub. Fahrer für komplexe Manöver weiterhin nötig.",
      en: "Reality: complete autonomy is 10-15 years away for road. Transition: assistance systems, platooning, then hub-to-hub. Drivers will still be needed for complex maneuvers."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum construiești un business case pentru investiție majoră în flotă (10+ vehicule)?",
      de: "Wie erstellen Sie einen Business Case für große Flotteninvestitionen (10+ Fahrzeuge)?",
      en: "How do you build a business case for major fleet investment (10+ vehicles)?"
    },
    options: {
      ro: ["Analiză cerere viitoare, TCO detaliat, scenarii (optimist/pesimist), sensitivitate la variabile cheie, ROI și payback, risc și mitigare", "Doar comparație preț achiziție", "Decizie bazată pe intuiție", "Business case nu e necesar pentru vehicule"],
      de: ["Analyse zukünftiger Nachfrage, detailliertes TCO, Szenarien (optimistisch/pessimistisch), Sensitivität bei Schlüsselvariablen, ROI und Payback, Risiko und Mitigation", "Nur Kaufpreisvergleich", "Entscheidung basierend auf Intuition", "Business Case nicht nötig für Fahrzeuge"],
      en: ["Future demand analysis, detailed TCO, scenarios (optimistic/pessimistic), sensitivity to key variables, ROI and payback, risk and mitigation", "Only purchase price comparison", "Decision based on intuition", "Business case not needed for vehicles"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Investiția majoră necesită rigor. Scenariile arată ce se întâmplă dacă cererea scade sau combustibilul crește. Deciziile informate reduc riscul.",
      de: "Große Investition erfordert Rigorosität. Szenarien zeigen was passiert wenn Nachfrage sinkt oder Kraftstoff steigt. Informierte Entscheidungen reduzieren Risiko.",
      en: "Major investment requires rigor. Scenarios show what happens if demand drops or fuel rises. Informed decisions reduce risk."
    }
  }
];
