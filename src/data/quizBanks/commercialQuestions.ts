import { Language } from "@/contexts/LanguageContext";

export interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const commercialQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce reprezintă marjă brută în transporturi?",
      de: "Was ist die Bruttomarge im Transport?",
      en: "What does gross margin represent in transport?"
    },
    options: {
      ro: ["Profitul net", "Diferența dintre venituri și costurile directe", "Totalul cheltuielilor", "Salariul șoferului"],
      de: ["Nettogewinn", "Differenz zwischen Einnahmen und direkten Kosten", "Gesamtausgaben", "Fahrerlohn"],
      en: ["Net profit", "Difference between revenue and direct costs", "Total expenses", "Driver salary"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Marja brută este diferența dintre prețul de vânzare și costurile directe ale transportului.",
      de: "Die Bruttomarge ist die Differenz zwischen dem Verkaufspreis und den direkten Transportkosten.",
      en: "Gross margin is the difference between the selling price and the direct transport costs."
    }
  },
  {
    question: {
      ro: "Ce este un contract spot în transport?",
      de: "Was ist ein Spot-Vertrag im Transport?",
      en: "What is a spot contract in transport?"
    },
    options: {
      ro: ["Contract pe termen lung", "Tranzacție unică la prețul pieței", "Contract cu preț fix", "Acord de parteneriat"],
      de: ["Langfristiger Vertrag", "Einmalige Transaktion zum Marktpreis", "Festpreisvertrag", "Partnerschaftsvereinbarung"],
      en: ["Long-term contract", "Single transaction at market price", "Fixed price contract", "Partnership agreement"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contractele spot sunt tranzacții unice negociate la prețul curent al pieței.",
      de: "Spot-Verträge sind einmalige Transaktionen, die zum aktuellen Marktpreis ausgehandelt werden.",
      en: "Spot contracts are single transactions negotiated at the current market price."
    }
  },
  {
    question: {
      ro: "Care este avantajul contractelor pe termen lung?",
      de: "Was ist der Vorteil langfristiger Verträge?",
      en: "What is the advantage of long-term contracts?"
    },
    options: {
      ro: ["Flexibilitate maximă", "Stabilitate în prețuri și volume", "Costuri mai mari", "Fără obligații"],
      de: ["Maximale Flexibilität", "Preis- und Volumenstabilität", "Höhere Kosten", "Keine Verpflichtungen"],
      en: ["Maximum flexibility", "Stability in prices and volumes", "Higher costs", "No obligations"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Contractele pe termen lung oferă previzibilitate în costuri și asigură capacitate de transport.",
      de: "Langfristige Verträge bieten Kostenvorhersehbarkeit und sichern Transportkapazitäten.",
      en: "Long-term contracts provide cost predictability and secure transport capacity."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'revenue per kilometer' (RPK)?",
      de: "Was bedeutet 'Umsatz pro Kilometer' (RPK)?",
      en: "What does 'revenue per kilometer' (RPK) mean?"
    },
    options: {
      ro: ["Costul combustibilului pe km", "Venitul generat pe kilometru parcurs", "Rata de profit", "Distanța totală"],
      de: ["Kraftstoffkosten pro km", "Generierter Umsatz pro gefahrenem Kilometer", "Gewinnrate", "Gesamtstrecke"],
      en: ["Fuel cost per km", "Revenue generated per kilometer traveled", "Profit rate", "Total distance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RPK este un indicator cheie care măsoară eficiența comercială a operațiunilor de transport.",
      de: "RPK ist ein Schlüsselindikator, der die kommerzielle Effizienz von Transportoperationen misst.",
      en: "RPK is a key indicator measuring the commercial efficiency of transport operations."
    }
  },
  {
    question: {
      ro: "Ce factor influențează cel mai mult prețul transportului?",
      de: "Welcher Faktor beeinflusst den Transportpreis am meisten?",
      en: "What factor most influences transport price?"
    },
    options: {
      ro: ["Culoarea camionului", "Distanța și echilibrul piețelor", "Numele companiei", "Vechimea șoferului"],
      de: ["Farbe des LKW", "Entfernung und Marktgleichgewicht", "Firmenname", "Erfahrung des Fahrers"],
      en: ["Truck color", "Distance and market balance", "Company name", "Driver seniority"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Distanța și echilibrul cerere-ofertă pe rute sunt factorii principali în stabilirea prețurilor.",
      de: "Entfernung und das Angebot-Nachfrage-Gleichgewicht auf Routen sind die Hauptfaktoren bei der Preisgestaltung.",
      en: "Distance and supply-demand balance on routes are the main factors in pricing."
    }
  },
  {
    question: {
      ro: "Ce este un 'lane' în terminologia comercială de transport?",
      de: "Was ist eine 'Lane' in der kommerziellen Transportterminologie?",
      en: "What is a 'lane' in commercial transport terminology?"
    },
    options: {
      ro: ["Banda de circulație", "O rută comercială specifică între două puncte", "Tipul de marfă", "Categoria vehiculului"],
      de: ["Fahrspur", "Eine spezifische kommerzielle Route zwischen zwei Punkten", "Frachtart", "Fahrzeugkategorie"],
      en: ["Traffic lane", "A specific commercial route between two points", "Cargo type", "Vehicle category"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Un 'lane' reprezintă o rută comercială recurentă între două locații, cu caracteristici specifice de volum și preț.",
      de: "Eine 'Lane' ist eine wiederkehrende kommerzielle Route zwischen zwei Standorten mit spezifischen Volumen- und Preismerkmalen.",
      en: "A 'lane' represents a recurring commercial route between two locations, with specific volume and price characteristics."
    }
  },
  {
    question: {
      ro: "Care este diferența dintre FTL și LTL?",
      de: "Was ist der Unterschied zwischen FTL und LTL?",
      en: "What is the difference between FTL and LTL?"
    },
    options: {
      ro: ["Tipul motorului", "Încărcătură completă vs. parțială", "Viteza de livrare", "Țara de destinație"],
      de: ["Motortyp", "Komplettladung vs. Teilladung", "Liefergeschwindigkeit", "Zielland"],
      en: ["Engine type", "Full truckload vs. less than truckload", "Delivery speed", "Destination country"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FTL (Full Truck Load) este încărcătură completă, iar LTL (Less Than Truckload) este transport parțial.",
      de: "FTL (Full Truck Load) ist Komplettladung, und LTL (Less Than Truckload) ist Teilladung.",
      en: "FTL (Full Truck Load) is a complete load, while LTL (Less Than Truckload) is partial transport."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'dead mileage' sau 'empty running'?",
      de: "Was bedeutet 'Leerfahrt' oder 'Empty Running'?",
      en: "What does 'dead mileage' or 'empty running' represent?"
    },
    options: {
      ro: ["Kilometri în trafic aglomerat", "Kilometri parcurși fără marfă", "Distanța până la service", "Ruta cea mai scurtă"],
      de: ["Kilometer im Stau", "Kilometer ohne Fracht zurückgelegt", "Entfernung zum Service", "Kürzeste Route"],
      en: ["Kilometers in heavy traffic", "Kilometers traveled without cargo", "Distance to service", "Shortest route"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dead mileage reprezintă costul parcurgerii distanțelor fără încărcătură plătită, reducând profitabilitatea.",
      de: "Leerfahrt stellt die Kosten für das Zurücklegen von Strecken ohne bezahlte Fracht dar und reduziert die Rentabilität.",
      en: "Dead mileage represents the cost of covering distances without paid cargo, reducing profitability."
    }
  },
  {
    question: {
      ro: "Ce este un 'backhaul' în transport?",
      de: "Was ist eine 'Rückfracht' im Transport?",
      en: "What is a 'backhaul' in transport?"
    },
    options: {
      ro: ["Marfa de export", "Încărcătura pe drumul de întoarcere", "Marfa urgentă", "Transport internațional"],
      de: ["Exportfracht", "Ladung auf dem Rückweg", "Eilfracht", "Internationaler Transport"],
      en: ["Export cargo", "Load on the return journey", "Urgent cargo", "International transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Backhaul reprezintă marfa transportată pe drumul de întoarcere, optimizând utilizarea vehiculului.",
      de: "Rückfracht ist die Ladung, die auf dem Rückweg transportiert wird, um die Fahrzeugauslastung zu optimieren.",
      en: "Backhaul represents cargo transported on the return journey, optimizing vehicle utilization."
    }
  },
  {
    question: {
      ro: "Care indicator măsoară utilizarea capacității vehiculului?",
      de: "Welcher Indikator misst die Fahrzeugkapazitätsauslastung?",
      en: "Which indicator measures vehicle capacity utilization?"
    },
    options: {
      ro: ["Consumul de combustibil", "Load factor", "Viteza medie", "Numărul de opriri"],
      de: ["Kraftstoffverbrauch", "Auslastungsfaktor", "Durchschnittsgeschwindigkeit", "Anzahl der Stopps"],
      en: ["Fuel consumption", "Load factor", "Average speed", "Number of stops"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Load factor indică procentul din capacitatea vehiculului utilizat efectiv în fiecare transport.",
      de: "Der Auslastungsfaktor gibt den Prozentsatz der tatsächlich genutzten Fahrzeugkapazität bei jedem Transport an.",
      en: "Load factor indicates the percentage of vehicle capacity actually used in each transport."
    }
  },
  {
    question: {
      ro: "Ce este 'fuel surcharge'?",
      de: "Was ist der 'Kraftstoffzuschlag'?",
      en: "What is 'fuel surcharge'?"
    },
    options: {
      ro: ["Reducere pentru combustibil", "Taxă suplimentară pentru fluctuațiile prețului combustibilului", "Impozit pe carburant", "Cost de întreținere"],
      de: ["Kraftstoffrabatt", "Zusatzgebühr für Kraftstoffpreisschwankungen", "Kraftstoffsteuer", "Wartungskosten"],
      en: ["Fuel discount", "Additional charge for fuel price fluctuations", "Fuel tax", "Maintenance cost"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fuel surcharge este o taxă variabilă adăugată prețului de bază pentru a compensa fluctuațiile combustibilului.",
      de: "Der Kraftstoffzuschlag ist eine variable Gebühr, die zum Basispreis hinzugefügt wird, um Kraftstoffschwankungen auszugleichen.",
      en: "Fuel surcharge is a variable fee added to the base price to compensate for fuel fluctuations."
    }
  },
  {
    question: {
      ro: "Care este scopul unui RFQ (Request for Quotation)?",
      de: "Was ist der Zweck einer Angebotsanfrage (RFQ)?",
      en: "What is the purpose of an RFQ (Request for Quotation)?"
    },
    options: {
      ro: ["Reclamații", "Solicitarea ofertelor de preț de la furnizori", "Raportare financiară", "Plata facturilor"],
      de: ["Beschwerden", "Preisangebote von Lieferanten anfordern", "Finanzberichterstattung", "Rechnungszahlung"],
      en: ["Complaints", "Requesting price quotes from suppliers", "Financial reporting", "Invoice payment"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RFQ este procesul formal de solicitare a ofertelor competitive de la mai mulți transportatori.",
      de: "RFQ ist der formale Prozess zur Anforderung wettbewerbsfähiger Angebote von mehreren Transportunternehmen.",
      en: "RFQ is the formal process of requesting competitive offers from multiple carriers."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'spot rate' în piața de transport?",
      de: "Was bedeutet 'Spot-Rate' im Transportmarkt?",
      en: "What does 'spot rate' mean in the transport market?"
    },
    options: {
      ro: ["Tarif contractual", "Prețul curent al pieței pentru transport imediat", "Discount pentru volum", "Penalitate pentru întârziere"],
      de: ["Vertragstarif", "Aktueller Marktpreis für sofortigen Transport", "Mengenrabatt", "Verspätungsstrafe"],
      en: ["Contractual rate", "Current market price for immediate transport", "Volume discount", "Delay penalty"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Spot rate este prețul negociat pe loc pentru transport imediat, variind în funcție de cerere și ofertă.",
      de: "Die Spot-Rate ist der vor Ort ausgehandelte Preis für sofortigen Transport, der je nach Angebot und Nachfrage variiert.",
      en: "Spot rate is the price negotiated on the spot for immediate transport, varying based on supply and demand."
    }
  },
  {
    question: {
      ro: "Ce este un 'tender' de transport?",
      de: "Was ist eine Transport-'Ausschreibung'?",
      en: "What is a transport 'tender'?"
    },
    options: {
      ro: ["Un tip de camion", "Licitație pentru servicii de transport", "Document de livrare", "Asigurare de marfă"],
      de: ["Ein LKW-Typ", "Ausschreibung für Transportdienstleistungen", "Lieferdokument", "Frachtversicherung"],
      en: ["A type of truck", "Bid for transport services", "Delivery document", "Cargo insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Un tender este un proces competitiv prin care clienții solicită oferte pentru servicii de transport.",
      de: "Eine Ausschreibung ist ein wettbewerbsfähiger Prozess, bei dem Kunden Angebote für Transportdienstleistungen anfordern.",
      en: "A tender is a competitive process where clients request bids for transport services."
    }
  },
  {
    question: {
      ro: "Care este avantajul diversificării portofoliului de clienți?",
      de: "Was ist der Vorteil der Kundendiversifizierung?",
      en: "What is the advantage of diversifying the client portfolio?"
    },
    options: {
      ro: ["Costuri mai mari", "Reducerea riscului de dependență", "Mai puțină muncă", "Prețuri mai mici"],
      de: ["Höhere Kosten", "Reduzierung des Abhängigkeitsrisikos", "Weniger Arbeit", "Niedrigere Preise"],
      en: ["Higher costs", "Reducing dependency risk", "Less work", "Lower prices"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diversificarea reduce riscul financiar în cazul pierderii unui client major.",
      de: "Diversifizierung reduziert das finanzielle Risiko bei Verlust eines Großkunden.",
      en: "Diversification reduces financial risk in case of losing a major client."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'accessorial charges'?",
      de: "Was sind 'Zusatzgebühren'?",
      en: "What are 'accessorial charges'?"
    },
    options: {
      ro: ["Taxe de bază", "Tarife pentru servicii suplimentare", "Reduceri comerciale", "Costuri fixe"],
      de: ["Grundgebühren", "Gebühren für Zusatzleistungen", "Kommerzielle Rabatte", "Fixkosten"],
      en: ["Base fees", "Fees for additional services", "Commercial discounts", "Fixed costs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Accessorial charges sunt taxe pentru servicii extra precum așteptare, livrare specială sau manipulare.",
      de: "Zusatzgebühren sind Gebühren für Extraleistungen wie Wartezeit, Sonderlieferung oder Handhabung.",
      en: "Accessorial charges are fees for extra services like waiting time, special delivery, or handling."
    }
  },
  {
    question: {
      ro: "Ce este 'detention' în transport?",
      de: "Was ist 'Standzeit' im Transport?",
      en: "What is 'detention' in transport?"
    },
    options: {
      ro: ["Penalizare pentru întârziere", "Taxa pentru timpul de așteptare al vehiculului", "Costul parcării", "Asigurarea mărfii"],
      de: ["Verspätungsstrafe", "Gebühr für Fahrzeugwartezeit", "Parkkosten", "Frachtversicherung"],
      en: ["Delay penalty", "Fee for vehicle waiting time", "Parking cost", "Cargo insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Detention este taxa percepută când vehiculul așteaptă mai mult decât timpul alocat la încărcare/descărcare.",
      de: "Standzeit ist die Gebühr, wenn das Fahrzeug länger als die zugewiesene Zeit beim Be-/Entladen wartet.",
      en: "Detention is the fee charged when the vehicle waits longer than the allocated time for loading/unloading."
    }
  },
  {
    question: {
      ro: "Care este diferența dintre 'demurrage' și 'detention'?",
      de: "Was ist der Unterschied zwischen 'Demurrage' und 'Detention'?",
      en: "What is the difference between 'demurrage' and 'detention'?"
    },
    options: {
      ro: ["Nu există diferență", "Demurrage - container în port; Detention - container în afara portului", "Ambele sunt taxe de parcare", "Sunt termeni interschimbabili"],
      de: ["Es gibt keinen Unterschied", "Demurrage - Container im Hafen; Detention - Container außerhalb des Hafens", "Beide sind Parkgebühren", "Begriffe sind austauschbar"],
      en: ["No difference", "Demurrage - container in port; Detention - container outside port", "Both are parking fees", "Terms are interchangeable"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Demurrage se aplică containerelor reținute în port, iar detention celor folosite în afara portului.",
      de: "Demurrage gilt für im Hafen gehaltene Container, Detention für außerhalb des Hafens verwendete.",
      en: "Demurrage applies to containers held in port, detention to those used outside the port."
    }
  },
  {
    question: {
      ro: "Ce este un 'freight broker'?",
      de: "Was ist ein 'Frachtmakler'?",
      en: "What is a 'freight broker'?"
    },
    options: {
      ro: ["Șofer de camion", "Intermediar între expeditori și transportatori", "Inspector de mărfuri", "Agent vamal"],
      de: ["LKW-Fahrer", "Vermittler zwischen Versendern und Spediteuren", "Frachtinspektor", "Zollagent"],
      en: ["Truck driver", "Intermediary between shippers and carriers", "Cargo inspector", "Customs agent"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Freight broker-ul conectează clienții care au nevoie de transport cu transportatorii care oferă servicii.",
      de: "Der Frachtmakler verbindet Kunden, die Transport benötigen, mit Spediteuren, die Dienstleistungen anbieten.",
      en: "A freight broker connects clients who need transport with carriers offering services."
    }
  },
  {
    question: {
      ro: "Care este rolul unui 'Key Account Manager' în transporturi?",
      de: "Welche Rolle spielt ein 'Key Account Manager' im Transport?",
      en: "What is the role of a 'Key Account Manager' in transport?"
    },
    options: {
      ro: ["Conduce camioane", "Gestionează relațiile cu clienții importanți", "Repară vehicule", "Verifică documentele"],
      de: ["Fährt LKWs", "Verwaltet Beziehungen zu wichtigen Kunden", "Repariert Fahrzeuge", "Prüft Dokumente"],
      en: ["Drives trucks", "Manages relationships with important clients", "Repairs vehicles", "Checks documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Key Account Manager-ul este responsabil pentru dezvoltarea și menținerea relațiilor cu clienții strategici.",
      de: "Der Key Account Manager ist für die Entwicklung und Pflege der Beziehungen zu strategischen Kunden verantwortlich.",
      en: "The Key Account Manager is responsible for developing and maintaining relationships with strategic clients."
    }
  },
  {
    question: {
      ro: "Ce este 'cross-docking'?",
      de: "Was ist 'Cross-Docking'?",
      en: "What is 'cross-docking'?"
    },
    options: {
      ro: ["Transport maritim", "Transfer direct între vehicule fără stocare", "Depozitare pe termen lung", "Transport aerian"],
      de: ["Seetransport", "Direkter Transfer zwischen Fahrzeugen ohne Lagerung", "Langzeitlagerung", "Lufttransport"],
      en: ["Maritime transport", "Direct transfer between vehicles without storage", "Long-term storage", "Air transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cross-docking presupune transferul mărfurilor direct între vehicule, minimizând timpul de depozitare.",
      de: "Cross-Docking bedeutet den direkten Transfer von Waren zwischen Fahrzeugen mit minimaler Lagerzeit.",
      en: "Cross-docking involves transferring goods directly between vehicles, minimizing storage time."
    }
  },
  {
    question: {
      ro: "Ce înseamnă 'co-loading'?",
      de: "Was bedeutet 'Co-Loading'?",
      en: "What does 'co-loading' mean?"
    },
    options: {
      ro: ["Transport exclusiv", "Combinarea încărcăturilor de la mai mulți clienți", "Descărcare simultană", "Transport urgent"],
      de: ["Exklusiver Transport", "Kombination von Ladungen mehrerer Kunden", "Gleichzeitiges Entladen", "Eiliger Transport"],
      en: ["Exclusive transport", "Combining loads from multiple clients", "Simultaneous unloading", "Urgent transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Co-loading implică combinarea mărfurilor mai multor clienți într-un singur vehicul pentru eficiență.",
      de: "Co-Loading bedeutet die Kombination von Waren mehrerer Kunden in einem Fahrzeug für mehr Effizienz.",
      en: "Co-loading involves combining goods from multiple clients in one vehicle for efficiency."
    }
  },
  {
    question: {
      ro: "Care este impactul sezonalității asupra prețurilor de transport?",
      de: "Welchen Einfluss hat die Saisonalität auf die Transportpreise?",
      en: "What is the impact of seasonality on transport prices?"
    },
    options: {
      ro: ["Nu există impact", "Prețurile variază în funcție de cerere", "Prețurile sunt fixe tot anul", "Doar combustibilul variază"],
      de: ["Keine Auswirkung", "Preise variieren je nach Nachfrage", "Preise sind das ganze Jahr fest", "Nur Kraftstoff variiert"],
      en: ["No impact", "Prices vary based on demand", "Prices are fixed all year", "Only fuel varies"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sezonalitatea influențează semnificativ prețurile - perioada de vârf aduce tarife mai mari.",
      de: "Die Saisonalität beeinflusst die Preise erheblich - die Hochsaison bringt höhere Tarife.",
      en: "Seasonality significantly influences prices - peak season brings higher rates."
    }
  },
  {
    question: {
      ro: "Ce este un 'SLA' (Service Level Agreement)?",
      de: "Was ist ein 'SLA' (Service Level Agreement)?",
      en: "What is an 'SLA' (Service Level Agreement)?"
    },
    options: {
      ro: ["Licență de conducere", "Acord care definește nivelul de servicii garantat", "Asigurare de marfă", "Taxă de transport"],
      de: ["Führerschein", "Vereinbarung, die das garantierte Serviceniveau definiert", "Frachtversicherung", "Transportgebühr"],
      en: ["Driving license", "Agreement defining guaranteed service level", "Cargo insurance", "Transport fee"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SLA definește standardele de performanță agreate, inclusiv timpi de livrare și penalități.",
      de: "SLA definiert die vereinbarten Leistungsstandards, einschließlich Lieferzeiten und Strafen.",
      en: "SLA defines agreed performance standards, including delivery times and penalties."
    }
  },
  {
    question: {
      ro: "Ce reprezintă 'unit economics' în transport?",
      de: "Was bedeutet 'Unit Economics' im Transport?",
      en: "What does 'unit economics' represent in transport?"
    },
    options: {
      ro: ["Numărul de vehicule", "Profitabilitatea per transport individual", "Costul total al flotei", "Salariile angajaților"],
      de: ["Anzahl der Fahrzeuge", "Rentabilität pro einzelnem Transport", "Gesamtkosten der Flotte", "Mitarbeitergehälter"],
      en: ["Number of vehicles", "Profitability per individual transport", "Total fleet cost", "Employee salaries"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Unit economics analizează profitabilitatea fiecărui transport pentru optimizarea operațiunilor.",
      de: "Unit Economics analysiert die Rentabilität jedes Transports zur Optimierung des Betriebs.",
      en: "Unit economics analyzes the profitability of each transport to optimize operations."
    }
  },
  {
    question: {
      ro: "Ce este 'yield management' în transporturi?",
      de: "Was ist 'Yield Management' im Transport?",
      en: "What is 'yield management' in transport?"
    },
    options: {
      ro: ["Managementul recoltelor", "Optimizarea veniturilor prin prețuri dinamice", "Controlul calității", "Gestiunea personalului"],
      de: ["Erntemanagement", "Ertragsoptimierung durch dynamische Preisgestaltung", "Qualitätskontrolle", "Personalmanagement"],
      en: ["Harvest management", "Revenue optimization through dynamic pricing", "Quality control", "Staff management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Yield management folosește prețuri dinamice pentru a maximiza veniturile în funcție de cerere.",
      de: "Yield Management nutzt dynamische Preisgestaltung zur Umsatzmaximierung je nach Nachfrage.",
      en: "Yield management uses dynamic pricing to maximize revenue based on demand."
    }
  },
  {
    question: {
      ro: "Care este rolul CRM-ului în vânzările de transport?",
      de: "Welche Rolle spielt CRM im Transportvertrieb?",
      en: "What is the role of CRM in transport sales?"
    },
    options: {
      ro: ["Conducerea vehiculelor", "Gestionarea relațiilor cu clienții și vânzărilor", "Reparații mecanice", "Controlul traficului"],
      de: ["Fahrzeugführung", "Verwaltung von Kundenbeziehungen und Verkäufen", "Mechanische Reparaturen", "Verkehrskontrolle"],
      en: ["Driving vehicles", "Managing customer relationships and sales", "Mechanical repairs", "Traffic control"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CRM (Customer Relationship Management) ajută la urmărirea și gestionarea tuturor interacțiunilor cu clienții.",
      de: "CRM (Customer Relationship Management) hilft bei der Verfolgung und Verwaltung aller Kundeninteraktionen.",
      en: "CRM (Customer Relationship Management) helps track and manage all customer interactions."
    }
  },
  {
    question: {
      ro: "Ce este 'market intelligence' în transport?",
      de: "Was ist 'Market Intelligence' im Transport?",
      en: "What is 'market intelligence' in transport?"
    },
    options: {
      ro: ["Inteligență artificială", "Colectarea și analiza informațiilor despre piață", "Sistemul GPS", "Software de contabilitate"],
      de: ["Künstliche Intelligenz", "Sammlung und Analyse von Marktinformationen", "GPS-System", "Buchhaltungssoftware"],
      en: ["Artificial intelligence", "Collecting and analyzing market information", "GPS system", "Accounting software"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Market intelligence oferă informații valoroase despre tendințe, concurență și oportunități.",
      de: "Market Intelligence bietet wertvolle Informationen über Trends, Wettbewerb und Chancen.",
      en: "Market intelligence provides valuable insights about trends, competition, and opportunities."
    }
  },
  {
    question: {
      ro: "Ce factori influențează 'booking conversion rate'?",
      de: "Welche Faktoren beeinflussen die 'Buchungskonversionsrate'?",
      en: "What factors influence 'booking conversion rate'?"
    },
    options: {
      ro: ["Doar prețul", "Preț, timp de răspuns, serviciu client", "Culoarea logo-ului", "Vechimea companiei"],
      de: ["Nur der Preis", "Preis, Reaktionszeit, Kundenservice", "Logo-Farbe", "Firmenalter"],
      en: ["Only price", "Price, response time, customer service", "Logo color", "Company age"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Conversia depinde de combinația dintre preț competitiv, răspuns rapid și servicii de calitate.",
      de: "Die Konversion hängt von der Kombination aus wettbewerbsfähigem Preis, schneller Reaktion und Qualitätsservice ab.",
      en: "Conversion depends on the combination of competitive price, quick response, and quality services."
    }
  }
];

export function getRandomCommercialQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...commercialQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
