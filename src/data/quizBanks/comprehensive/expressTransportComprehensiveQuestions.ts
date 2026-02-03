import { TranslatedQuizQuestion } from '../../quizTranslations';

export const expressTransportComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce definește un transport express în logistică?",
      de: "Was definiert einen Express-Transport in der Logistik?",
      en: "What defines express transport in logistics?"
    },
    options: {
      ro: ["Orice transport cu camion", "Livrare garantată într-un timp scurt, prioritară", "Transport doar noaptea", "Transport gratuit"],
      de: ["Jeder LKW-Transport", "Garantierte Lieferung in kurzer Zeit, mit Priorität", "Nur Nachttransport", "Kostenloser Transport"],
      en: ["Any truck transport", "Guaranteed delivery in short time, with priority", "Night transport only", "Free transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul express implică livrare rapidă garantată, cu prioritate față de transporturile standard.",
      de: "Express-Transport bedeutet garantierte schnelle Lieferung mit Priorität gegenüber Standardtransporten.",
      en: "Express transport involves guaranteed fast delivery, prioritized over standard shipments."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este timpul tipic de tranzit pentru un transport express Vest Europa (DE-FR)?",
      de: "Was ist die typische Transitzeit für einen Express-Transport Westeuropa (DE-FR)?",
      en: "What is the typical transit time for express transport Western Europe (DE-FR)?"
    },
    options: {
      ro: ["3-5 zile", "24-48 ore", "7-10 zile", "1 săptămână"],
      de: ["3-5 Tage", "24-48 Stunden", "7-10 Tage", "1 Woche"],
      en: ["3-5 days", "24-48 hours", "7-10 days", "1 week"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul express DE-FR standard este livrat în 24-48 ore, uneori chiar overnight.",
      de: "Standard Express-Transport DE-FR wird in 24-48 Stunden geliefert, manchmal sogar über Nacht.",
      en: "Standard DE-FR express transport is delivered in 24-48 hours, sometimes even overnight."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce înseamnă 'same day delivery' în transport express?",
      de: "Was bedeutet 'Same Day Delivery' im Express-Transport?",
      en: "What does 'same day delivery' mean in express transport?"
    },
    options: {
      ro: ["Livrare în 24 ore", "Preluare și livrare în aceeași zi calendaristică", "Livrare gratuită", "Transport standard"],
      de: ["Lieferung in 24 Stunden", "Abholung und Lieferung am selben Kalendertag", "Kostenlose Lieferung", "Standardtransport"],
      en: ["Delivery in 24 hours", "Pickup and delivery on the same calendar day", "Free delivery", "Standard transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Same day = preluare dimineața și livrare în aceeași zi, de obicei până seara, în aceeași regiune.",
      de: "Same Day = Abholung morgens und Lieferung am selben Tag, meist bis abends, in derselben Region.",
      en: "Same day = pickup in morning and delivery same day, usually by evening, in same region."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este diferența principală de preț între transport standard și express?",
      de: "Was ist der Hauptpreisunterschied zwischen Standard- und Express-Transport?",
      en: "What is the main price difference between standard and express transport?"
    },
    options: {
      ro: ["Express este mai ieftin", "Express costă 50-200% mai mult decât standard", "Același preț", "Express costă 10% mai mult"],
      de: ["Express ist günstiger", "Express kostet 50-200% mehr als Standard", "Gleicher Preis", "Express kostet 10% mehr"],
      en: ["Express is cheaper", "Express costs 50-200% more than standard", "Same price", "Express costs 10% more"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul express implică costuri suplimentare semnificative datorită urgenței și dedicării vehiculului.",
      de: "Express-Transport verursacht erhebliche Mehrkosten aufgrund der Dringlichkeit und Fahrzeugwidmung.",
      en: "Express transport involves significant additional costs due to urgency and vehicle dedication."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client cere same-day delivery München → Paris (840km). Ora curentă: 08:00. Fezabil cu șofer singur respectând regulile de conducere?",
      de: "Kunde fordert Same-Day-Lieferung München → Paris (840km). Aktuelle Zeit: 08:00. Machbar mit einem Fahrer unter Einhaltung der Lenkzeitregeln?",
      en: "Client requests same-day delivery Munich → Paris (840km). Current time: 08:00. Feasible with single driver respecting driving rules?"
    },
    options: {
      ro: ["Da, ușor realizabil", "Nu, ar necesita echipaj de 2 șoferi", "Da, cu pauze legale scurte", "Imposibil în orice condiții"],
      de: ["Ja, leicht machbar", "Nein, würde 2-Fahrer-Team erfordern", "Ja, mit kurzen legalen Pausen", "Unter allen Umständen unmöglich"],
      en: ["Yes, easily feasible", "No, would require 2-driver team", "Yes, with short legal breaks", "Impossible in any conditions"]
    },
    correctIndex: 1,
    explanation: {
      ro: "840km ÷ 80km/h = 10.5h conducere. Un șofer poate conduce max 9h/zi. Necesar echipaj dublu.",
      de: "840km ÷ 80km/h = 10,5h Fahrt. Ein Fahrer darf max. 9h/Tag fahren. Zwei-Fahrer-Team erforderlich.",
      en: "840km ÷ 80km/h = 10.5h driving. Single driver max 9h/day. Two-driver team required."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce tip de vehicul este preferat pentru transport express de piese auto urgente?",
      de: "Welcher Fahrzeugtyp wird für dringenden Express-Transport von Autoteilen bevorzugt?",
      en: "What type of vehicle is preferred for urgent express transport of auto parts?"
    },
    options: {
      ro: ["Semiremorcă 40t", "Sprinter/Van 3.5t", "Tren", "Container maritim"],
      de: ["40t-Sattelzug", "Sprinter/Transporter 3,5t", "Zug", "Seecontainer"],
      en: ["40t semi-trailer", "Sprinter/Van 3.5t", "Train", "Sea container"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sprinter/Van 3.5t oferă flexibilitate maximă, viteză și nu necesită tahograf pentru distanțe scurte.",
      de: "Sprinter/Transporter 3,5t bietet maximale Flexibilität, Geschwindigkeit und benötigt keinen Fahrtenschreiber für kurze Strecken.",
      en: "Sprinter/Van 3.5t offers maximum flexibility, speed and doesn't require tachograph for short distances."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este avantajul principal al curierului aerian vs. transport express rutier?",
      de: "Was ist der Hauptvorteil von Luftkurier vs. Express-Straßentransport?",
      en: "What is the main advantage of air courier vs. express road transport?"
    },
    options: {
      ro: ["Cost mai mic", "Timp de tranzit mult mai scurt pe distanțe lungi", "Capacitate mai mare", "Fără documente vamale"],
      de: ["Geringere Kosten", "Viel kürzere Transitzeit auf langen Strecken", "Größere Kapazität", "Keine Zolldokumente"],
      en: ["Lower cost", "Much shorter transit time on long distances", "Higher capacity", "No customs documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Curierul aerian reduce timpul pe distanțe lungi de la zile la ore, ideal pentru urgențe critice.",
      de: "Luftkurier reduziert die Zeit auf langen Strecken von Tagen auf Stunden, ideal für kritische Notfälle.",
      en: "Air courier reduces time on long distances from days to hours, ideal for critical emergencies."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce documentație specială poate fi necesară pentru transport express cross-border UE?",
      de: "Welche spezielle Dokumentation kann für grenzüberschreitenden Express-Transport in der EU erforderlich sein?",
      en: "What special documentation may be needed for cross-border express transport in EU?"
    },
    options: {
      ro: ["Niciuna, UE este piață unică", "CMR + factura pro-forma + autorizații speciale dacă marfa e restricționată", "Doar CMR", "Doar pașaport șofer"],
      de: ["Keine, EU ist Binnenmarkt", "CMR + Proforma-Rechnung + Sondergenehmigungen bei beschränkter Ware", "Nur CMR", "Nur Fahrerpass"],
      en: ["None, EU is single market", "CMR + pro-forma invoice + special permits if goods restricted", "Only CMR", "Only driver passport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Deși UE e piață unică, transportul express poate necesita documentație completă pentru trasabilitate și verificări.",
      de: "Obwohl EU Binnenmarkt ist, kann Express-Transport vollständige Dokumentation für Rückverfolgbarkeit und Kontrollen erfordern.",
      en: "Though EU is single market, express transport may require complete documentation for traceability and checks."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Linie de producție BMW oprită. Piesa necesară este în Stuttgart (350km). Ora: 14:00, linia trebuie repornită la 20:00. Soluție?",
      de: "BMW-Produktionslinie steht. Benötigtes Teil ist in Stuttgart (350km). Zeit: 14:00, Linie muss um 20:00 wieder laufen. Lösung?",
      en: "BMW production line stopped. Needed part is in Stuttgart (350km). Time: 14:00, line must restart at 20:00. Solution?"
    },
    options: {
      ro: ["Camion standard overnight", "Taxi cargo/curier dedicat cu preluare imediată", "Poștă standard", "Așteptare până mâine"],
      de: ["Standard-LKW über Nacht", "Cargo-Taxi/dedizierter Kurier mit sofortiger Abholung", "Standardpost", "Warten bis morgen"],
      en: ["Standard overnight truck", "Cargo taxi/dedicated courier with immediate pickup", "Standard mail", "Wait until tomorrow"]
    },
    correctIndex: 1,
    explanation: {
      ro: "350km în 6 ore = 58km/h mediu. Posibil cu taxi cargo dedicat, inclusiv trafic și preluare/livrare.",
      de: "350km in 6 Stunden = 58km/h Durchschnitt. Möglich mit dediziertem Cargo-Taxi, inkl. Verkehr und Abholung/Lieferung.",
      en: "350km in 6 hours = 58km/h average. Possible with dedicated cargo taxi, including traffic and pickup/delivery."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă serviciul 'on-board courier' (OBC)?",
      de: "Was bedeutet der Service 'On-Board Courier' (OBC)?",
      en: "What does 'on-board courier' (OBC) service mean?"
    },
    options: {
      ro: ["Curier pe vapor", "Persoană care transportă coletul ca bagaj de mână în avion", "Curier pe bicicletă", "Transport cu autobuz"],
      de: ["Kurier auf Schiff", "Person, die das Paket als Handgepäck im Flugzeug transportiert", "Fahrradkurier", "Bustransport"],
      en: ["Courier on ship", "Person transporting package as hand luggage on plane", "Bicycle courier", "Bus transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OBC = curier personal care zbura cu coletul ca bagaj de mână, cel mai rapid mod de livrare internațională.",
      de: "OBC = persönlicher Kurier, der mit dem Paket als Handgepäck fliegt, schnellste internationale Lieferart.",
      en: "OBC = personal courier who flies with package as hand luggage, fastest international delivery method."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt factorii care cresc prețul transportului express?",
      de: "Welche Faktoren erhöhen den Preis des Express-Transports?",
      en: "What factors increase the price of express transport?"
    },
    options: {
      ro: ["Doar distanța", "Urgență, weekend/noapte, greutate/volum, distanță, restricții marfă", "Doar greutatea", "Doar tipul vehiculului"],
      de: ["Nur Entfernung", "Dringlichkeit, Wochenende/Nacht, Gewicht/Volumen, Entfernung, Warenbeschränkungen", "Nur Gewicht", "Nur Fahrzeugtyp"],
      en: ["Only distance", "Urgency, weekend/night, weight/volume, distance, cargo restrictions", "Only weight", "Only vehicle type"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prețul express depinde de multiple variabile: cât de repede, când, ce și cât de departe trebuie livrat.",
      de: "Express-Preis hängt von mehreren Variablen ab: wie schnell, wann, was und wie weit geliefert werden muss.",
      en: "Express price depends on multiple variables: how fast, when, what and how far needs to be delivered."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client solicită transport express piesă 500kg din Milano la Viena (850km), livrare în 12 ore. Vineri 18:00. Restricții?",
      de: "Kunde fordert Express-Transport von 500kg Teilen von Mailand nach Wien (850km), Lieferung in 12 Stunden. Freitag 18:00. Einschränkungen?",
      en: "Client requests express transport 500kg part from Milan to Vienna (850km), delivery in 12 hours. Friday 18:00. Restrictions?"
    },
    options: {
      ro: ["Nici o restricție", "Interdicție camioane weekend în AT + posibil IT nord", "Doar restricție viteză", "Transport gratuit weekend"],
      de: ["Keine Einschränkungen", "LKW-Fahrverbot am Wochenende in AT + möglicherweise Norditalien", "Nur Geschwindigkeitsbegrenzung", "Kostenloser Wochenendtransport"],
      en: ["No restrictions", "Truck weekend ban in AT + possibly northern IT", "Only speed limit", "Free weekend transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Austria are interdicție circulație camioane weekend (Sam-Dum). Necesar vehicul <7.5t sau derogare specială.",
      de: "Österreich hat Wochenend-LKW-Fahrverbot (Sa-So). Fahrzeug <7,5t oder Sondergenehmigung erforderlich.",
      en: "Austria has weekend truck ban (Sat-Sun). Vehicle <7.5t or special exemption required."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce serviciu este mai rapid pentru documente urgente: curier rutier sau poștă express?",
      de: "Welcher Service ist schneller für dringende Dokumente: Straßenkurier oder Expresspost?",
      en: "What service is faster for urgent documents: road courier or express mail?"
    },
    options: {
      ro: ["Poștă express întotdeauna", "Curier rutier dedicat pentru distanțe sub 500km", "Ambele sunt la fel", "Poșta normală"],
      de: ["Expresspost immer", "Dedizierter Straßenkurier für Entfernungen unter 500km", "Beide gleich", "Normale Post"],
      en: ["Express mail always", "Dedicated road courier for distances under 500km", "Both are same", "Normal mail"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru distanțe scurte/medii, curierul rutier dedicat este mai rapid decât poșta express standard.",
      de: "Für kurze/mittlere Entfernungen ist dedizierter Straßenkurier schneller als Standard-Expresspost.",
      en: "For short/medium distances, dedicated road courier is faster than standard express mail."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce tracking este standard pentru transport express de valoare mare?",
      de: "Welches Tracking ist Standard für hochwertigen Express-Transport?",
      en: "What tracking is standard for high-value express transport?"
    },
    options: {
      ro: ["Fără tracking", "GPS real-time + notificări status + semnătură la livrare", "Doar confirmare livrare", "Tracking săptămânal"],
      de: ["Kein Tracking", "GPS Echtzeit + Statusbenachrichtigungen + Lieferunterschrift", "Nur Lieferbestätigung", "Wöchentliches Tracking"],
      en: ["No tracking", "Real-time GPS + status notifications + delivery signature", "Only delivery confirmation", "Weekly tracking"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transportul express de valoare necesită tracking complet în timp real și dovadă de livrare.",
      de: "Hochwertiger Express-Transport erfordert vollständiges Echtzeit-Tracking und Zustellnachweis.",
      en: "High-value express transport requires complete real-time tracking and proof of delivery."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Produs medical critic 50kg din Geneva la București (1800km). Cerință: max 24h, temperatură controlată +2-8°C. Soluție optimă?",
      de: "Kritisches Medizinprodukt 50kg von Genf nach Bukarest (1800km). Anforderung: max 24h, temperaturkontrolliert +2-8°C. Optimale Lösung?",
      en: "Critical medical product 50kg from Geneva to Bucharest (1800km). Requirement: max 24h, temperature controlled +2-8°C. Optimal solution?"
    },
    options: {
      ro: ["Camion standard", "Curier aerian + transfer rutier refrigerat last-mile", "Poștă express", "Transport maritim"],
      de: ["Standard-LKW", "Luftkurier + gekühlter Straßentransfer Last-Mile", "Expresspost", "Seetransport"],
      en: ["Standard truck", "Air courier + refrigerated road transfer last-mile", "Express mail", "Sea transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "1800km în 24h cu control temperatură = zbor + transfer rutier frigorific la destinație. Rutier singur ar dura ~30h.",
      de: "1800km in 24h mit Temperaturkontrolle = Flug + Kühl-Straßentransfer am Ziel. Nur Straße würde ~30h dauern.",
      en: "1800km in 24h with temperature control = flight + refrigerated road transfer at destination. Road alone would take ~30h."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'next flight out' (NFO) în transport express?",
      de: "Was ist 'Next Flight Out' (NFO) im Express-Transport?",
      en: "What is 'next flight out' (NFO) in express transport?"
    },
    options: {
      ro: ["Zborul de mâine", "Expediere cu primul zbor disponibil spre destinație", "Zbor charter", "Zbor cu escală"],
      de: ["Morgenflug", "Versand mit dem ersten verfügbaren Flug zum Ziel", "Charterflug", "Flug mit Zwischenstopp"],
      en: ["Tomorrow's flight", "Shipping with first available flight to destination", "Charter flight", "Flight with stopover"]
    },
    correctIndex: 1,
    explanation: {
      ro: "NFO = marfa prinde primul zbor disponibil, indiferent de companie, pentru viteza maximă.",
      de: "NFO = Ware nimmt den ersten verfügbaren Flug, unabhängig von der Fluggesellschaft, für maximale Geschwindigkeit.",
      en: "NFO = cargo catches first available flight, regardless of airline, for maximum speed."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce asigurare este recomandată pentru transport express de electronice de mare valoare?",
      de: "Welche Versicherung wird für Express-Transport hochwertiger Elektronik empfohlen?",
      en: "What insurance is recommended for express transport of high-value electronics?"
    },
    options: {
      ro: ["Nici o asigurare", "All-risk cargo insurance cu valoare declarată", "Doar CMR standard", "Asigurare auto"],
      de: ["Keine Versicherung", "All-Risk-Frachtversicherung mit deklariertem Wert", "Nur Standard-CMR", "KFZ-Versicherung"],
      en: ["No insurance", "All-risk cargo insurance with declared value", "Only standard CMR", "Car insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Electronicele de valoare necesită asigurare all-risk cu valoare completă declarată, nu doar limita CMR.",
      de: "Hochwertige Elektronik benötigt All-Risk-Versicherung mit vollständigem deklarierten Wert, nicht nur CMR-Limit.",
      en: "Valuable electronics need all-risk insurance with full declared value, not just CMR limit."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client automotive: piesa lipsă oprește linie producție. Cost oprire: 50.000€/oră. Piesa 200€ în Stuttgart. Transport express 1.500€ vs standard 200€ (3 zile). Decizie?",
      de: "Automotive-Kunde: fehlendes Teil stoppt Produktionslinie. Stillstandskosten: 50.000€/h. Teil 200€ in Stuttgart. Express-Transport 1.500€ vs Standard 200€ (3 Tage). Entscheidung?",
      en: "Automotive client: missing part stops production line. Stoppage cost: 50,000€/hour. Part 200€ in Stuttgart. Express transport 1,500€ vs standard 200€ (3 days). Decision?"
    },
    options: {
      ro: ["Standard, economie de 1.300€", "Express imediat, economia la oprire este mult mai mare", "Așteptare altă piesă", "Anulare comandă"],
      de: ["Standard, 1.300€ Ersparnis", "Sofort Express, Einsparung bei Stillstand ist viel größer", "Auf anderes Teil warten", "Bestellstornierung"],
      en: ["Standard, save 1,300€", "Express immediately, stoppage savings much greater", "Wait for another part", "Cancel order"]
    },
    correctIndex: 1,
    explanation: {
      ro: "1 oră oprire = 50.000€. Express economisește zeci de ore de oprire. ROI transport express este enorm.",
      de: "1 Stunde Stillstand = 50.000€. Express spart Dutzende Stillstandsstunden. ROI des Express-Transports ist enorm.",
      en: "1 hour stoppage = 50,000€. Express saves dozens of stoppage hours. Express transport ROI is enormous."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este limita de greutate pentru transport express cu Sprinter/Van?",
      de: "Was ist die Gewichtsgrenze für Express-Transport mit Sprinter/Transporter?",
      en: "What is the weight limit for express transport with Sprinter/Van?"
    },
    options: {
      ro: ["500 kg", "1.000-1.500 kg (payload)", "3.500 kg", "10.000 kg"],
      de: ["500 kg", "1.000-1.500 kg (Nutzlast)", "3.500 kg", "10.000 kg"],
      en: ["500 kg", "1,000-1,500 kg (payload)", "3,500 kg", "10,000 kg"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Sprinter/Van 3.5t MTMA are payload de aproximativ 1.000-1.500 kg, dependent de configurație.",
      de: "Sprinter/Transporter 3,5t zGG hat etwa 1.000-1.500 kg Nutzlast, je nach Konfiguration.",
      en: "Sprinter/Van 3.5t GVW has approximately 1,000-1,500 kg payload, depending on configuration."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce înseamnă 'time-definite delivery' vs 'day-definite delivery'?",
      de: "Was bedeutet 'Time-Definite Delivery' vs 'Day-Definite Delivery'?",
      en: "What does 'time-definite delivery' vs 'day-definite delivery' mean?"
    },
    options: {
      ro: ["Sunt identice", "Time-definite: oră exactă garantată; Day-definite: doar ziua garantată", "Day-definite e mai rapid", "Time-definite e mai ieftin"],
      de: ["Identisch", "Time-Definite: exakte Uhrzeit garantiert; Day-Definite: nur Tag garantiert", "Day-Definite ist schneller", "Time-Definite ist günstiger"],
      en: ["Identical", "Time-definite: exact time guaranteed; Day-definite: only day guaranteed", "Day-definite is faster", "Time-definite is cheaper"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Time-definite garantează ora exactă (ex: înainte de 10:00). Day-definite garantează doar ziua de livrare.",
      de: "Time-Definite garantiert exakte Uhrzeit (z.B. vor 10:00). Day-Definite garantiert nur den Liefertag.",
      en: "Time-definite guarantees exact time (e.g., before 10:00). Day-definite guarantees only the delivery day."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce sector folosește cel mai mult serviciile de transport express?",
      de: "Welcher Sektor nutzt Express-Transportdienste am meisten?",
      en: "What sector uses express transport services the most?"
    },
    options: {
      ro: ["Agricultură", "Automotive și industrie de producție", "Turism", "Construcții"],
      de: ["Landwirtschaft", "Automotive und Fertigungsindustrie", "Tourismus", "Bauwesen"],
      en: ["Agriculture", "Automotive and manufacturing industry", "Tourism", "Construction"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Automotive și industria de producție depind de livrări just-in-time și nu își permit opriri de linie.",
      de: "Automotive und Fertigung sind auf Just-in-Time-Lieferungen angewiesen und können sich keine Linienstillstände leisten.",
      en: "Automotive and manufacturing rely on just-in-time deliveries and cannot afford line stoppages."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Marfă ADR clasa 3 (lichid inflamabil) 100kg de la Hamburg la Praga. Client cere livrare în 8 ore. Posibil?",
      de: "ADR-Klasse 3 Ware (brennbare Flüssigkeit) 100kg von Hamburg nach Prag. Kunde fordert Lieferung in 8 Stunden. Möglich?",
      en: "ADR class 3 cargo (flammable liquid) 100kg from Hamburg to Prague. Client requests delivery in 8 hours. Possible?"
    },
    options: {
      ro: ["Da, fără restricții", "Dificil - restricții tuneluri, necesită șofer ADR, posibil doar rută specială", "Imposibil, ADR nu poate fi express", "Da, dar doar noaptea"],
      de: ["Ja, ohne Einschränkungen", "Schwierig - Tunnelbeschränkungen, ADR-Fahrer erforderlich, möglicherweise nur Spezialroute", "Unmöglich, ADR kann nicht Express sein", "Ja, aber nur nachts"],
      en: ["Yes, no restrictions", "Difficult - tunnel restrictions, needs ADR driver, possibly special route only", "Impossible, ADR cannot be express", "Yes, but only at night"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ADR express este posibil dar complicat: restricții tuneluri (categoria E), șofer ADR, documentație completă.",
      de: "ADR-Express ist möglich aber kompliziert: Tunnelbeschränkungen (Kategorie E), ADR-Fahrer, vollständige Dokumentation.",
      en: "ADR express is possible but complicated: tunnel restrictions (category E), ADR driver, complete documentation."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce opțiune de livrare este 'before 9:00 AM' în serviciile express?",
      de: "Was ist die Lieferoption 'vor 9:00 Uhr' bei Express-Diensten?",
      en: "What is the 'before 9:00 AM' delivery option in express services?"
    },
    options: {
      ro: ["Livrare standard", "Premium time-definite: garantează livrare înainte de începerea programului de lucru", "Livrare nocturnă", "Livrare weekendă"],
      de: ["Standardlieferung", "Premium Time-Definite: garantiert Lieferung vor Arbeitsbeginn", "Nachtlieferung", "Wochenendlieferung"],
      en: ["Standard delivery", "Premium time-definite: guarantees delivery before work hours start", "Night delivery", "Weekend delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Before 9 AM = livrare premium pentru industrii care au nevoie de piese la începutul turei de lucru.",
      de: "Vor 9 Uhr = Premium-Lieferung für Branchen, die Teile zu Schichtbeginn benötigen.",
      en: "Before 9 AM = premium delivery for industries needing parts at start of work shift."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tip de ambalaj este preferat pentru transport express de piese mici electronice?",
      de: "Welche Verpackungsart wird für Express-Transport kleiner elektronischer Teile bevorzugt?",
      en: "What type of packaging is preferred for express transport of small electronic parts?"
    },
    options: {
      ro: ["Fără ambalaj", "Cutii antistatice cu protecție șoc", "Pungi de plastic", "Ambalaj de hârtie"],
      de: ["Keine Verpackung", "Antistatische Kartons mit Stoßschutz", "Plastiktüten", "Papierverpackung"],
      en: ["No packaging", "Anti-static boxes with shock protection", "Plastic bags", "Paper packaging"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Electronicele necesită ambalaj antistatic + protecție șoc pentru a preveni deteriorarea în transport rapid.",
      de: "Elektronik benötigt antistatische Verpackung + Stoßschutz, um Schäden beim schnellen Transport zu verhindern.",
      en: "Electronics need anti-static packaging + shock protection to prevent damage in fast transport."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client cere transport express recurring zilnic: 2 paleți, Frankfurt → Bratislava (650km), livrare next-day până 08:00. Cum structurezi oferta?",
      de: "Kunde fordert täglichen wiederkehrenden Express-Transport: 2 Paletten, Frankfurt → Bratislava (650km), Next-Day-Lieferung bis 08:00. Wie strukturieren Sie das Angebot?",
      en: "Client requests recurring daily express transport: 2 pallets, Frankfurt → Bratislava (650km), next-day delivery by 08:00. How do you structure the offer?"
    },
    options: {
      ro: ["Tarif spot zilnic", "Contract lunar cu preț fix/cursă, vehicul dedicat, escaladare pentru întârzieri", "Refuzare, prea complex", "Tarif anual fix indiferent de volum"],
      de: ["Täglicher Spot-Tarif", "Monatsvertrag mit Festpreis/Fahrt, dediziertes Fahrzeug, Eskalation bei Verspätungen", "Ablehnung, zu komplex", "Jährlicher Festtarif unabhängig vom Volumen"],
      en: ["Daily spot rate", "Monthly contract with fixed price/trip, dedicated vehicle, escalation for delays", "Refuse, too complex", "Annual fixed rate regardless of volume"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transport recurent = contract structurat cu preț fix, SLA-uri pentru livrare la timp, penalități și bonusuri.",
      de: "Wiederkehrender Transport = strukturierter Vertrag mit Festpreis, SLAs für pünktliche Lieferung, Strafen und Boni.",
      en: "Recurring transport = structured contract with fixed price, SLAs for on-time delivery, penalties and bonuses."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce înseamnă 'hot shot' în transport express american adaptat în Europa?",
      de: "Was bedeutet 'Hot Shot' im amerikanischen Express-Transport, adaptiert für Europa?",
      en: "What does 'hot shot' mean in American express transport adapted for Europe?"
    },
    options: {
      ro: ["Transport încălzit", "Transport urgent dedicat, adesea cu vehicul parțial încărcat", "Transport de vară", "Transport de fotografii"],
      de: ["Beheizter Transport", "Dringender dedizierter Transport, oft mit teilbeladenem Fahrzeug", "Sommertransport", "Fototransport"],
      en: ["Heated transport", "Urgent dedicated transport, often with partially loaded vehicle", "Summer transport", "Photo transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Hot shot = expediere urgentă cu vehicul dedicat care pleacă imediat, chiar dacă nu e plin.",
      de: "Hot Shot = dringende Sendung mit dediziertem Fahrzeug, das sofort abfährt, auch wenn nicht voll.",
      en: "Hot shot = urgent shipment with dedicated vehicle that leaves immediately, even if not full."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este avantajul principal al companiilor de curierat express mari (DHL, FedEx)?",
      de: "Was ist der Hauptvorteil großer Express-Kurierunternehmen (DHL, FedEx)?",
      en: "What is the main advantage of large express courier companies (DHL, FedEx)?"
    },
    options: {
      ro: ["Întotdeauna cel mai ieftin", "Rețea globală + sisteme de tracking avansate + hub-uri locale", "Doar pentru documente", "Doar transport aerian"],
      de: ["Immer am günstigsten", "Globales Netzwerk + fortschrittliche Tracking-Systeme + lokale Hubs", "Nur für Dokumente", "Nur Lufttransport"],
      en: ["Always cheapest", "Global network + advanced tracking systems + local hubs", "Only for documents", "Only air transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Companiile mari oferă acoperire globală, tracking în timp real și infrastructură locală în majoritatea orașelor.",
      de: "Große Unternehmen bieten globale Abdeckung, Echtzeit-Tracking und lokale Infrastruktur in den meisten Städten.",
      en: "Large companies offer global coverage, real-time tracking and local infrastructure in most cities."
    }
  }
];
