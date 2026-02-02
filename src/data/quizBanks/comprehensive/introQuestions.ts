// Comprehensive question bank for Chapter 1: Introduction
// 30 advanced questions with difficulty levels 3-4-5

import { TranslatedQuizQuestion } from '../../quizTranslations';

export const introComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    question: {
      ro: "Care este rolul principal al unui disponent în lanțul logistic?",
      de: "Was ist die Hauptrolle eines Disponenten in der Lieferkette?",
      en: "What is the main role of a dispatcher in the supply chain?"
    },
    options: {
      ro: ["Conducerea camionului", "Coordonarea și optimizarea transporturilor", "Repararea vehiculelor", "Vânzarea produselor"],
      de: ["LKW fahren", "Koordination und Optimierung von Transporten", "Fahrzeugreparatur", "Produktverkauf"],
      en: ["Driving the truck", "Coordinating and optimizing transports", "Vehicle repair", "Product sales"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Disponentul coordonează fluxul de mărfuri, optimizează rutele și asigură livrarea la timp.",
      de: "Der Disponent koordiniert den Warenfluss, optimiert Routen und stellt pünktliche Lieferung sicher.",
      en: "The dispatcher coordinates goods flow, optimizes routes and ensures timely delivery."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce abilități sunt esențiale pentru un disponent performant?",
      de: "Welche Fähigkeiten sind für einen leistungsstarken Disponenten unerlässlich?",
      en: "What skills are essential for a high-performing dispatcher?"
    },
    options: {
      ro: ["Doar cunoștințe de Excel", "Comunicare, rezolvarea problemelor, cunoștințe geografice și tehnice", "Doar permis de conducere", "Doar limbi străine"],
      de: ["Nur Excel-Kenntnisse", "Kommunikation, Problemlösung, geografische und technische Kenntnisse", "Nur Führerschein", "Nur Fremdsprachen"],
      en: ["Only Excel skills", "Communication, problem-solving, geographical and technical knowledge", "Only driving license", "Only foreign languages"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Disponentul necesită un mix de soft skills și cunoștințe tehnice pentru a gestiona eficient operațiunile.",
      de: "Der Disponent benötigt eine Mischung aus Soft Skills und technischen Kenntnissen für effizientes Operationsmanagement.",
      en: "The dispatcher needs a mix of soft skills and technical knowledge to manage operations efficiently."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Care este diferența principală între transport FTL și LTL?",
      de: "Was ist der Hauptunterschied zwischen FTL- und LTL-Transport?",
      en: "What is the main difference between FTL and LTL transport?"
    },
    options: {
      ro: ["FTL = camion complet, LTL = încărcătură parțială", "FTL = rapid, LTL = lent", "Nu există diferență", "FTL = local, LTL = internațional"],
      de: ["FTL = Komplettladung, LTL = Teilladung", "FTL = schnell, LTL = langsam", "Kein Unterschied", "FTL = lokal, LTL = international"],
      en: ["FTL = full truck load, LTL = less than truckload", "FTL = fast, LTL = slow", "No difference", "FTL = local, LTL = international"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FTL (Full Truck Load) înseamnă un singur client ocupă întreg camionul, LTL combină mărfuri de la mai mulți clienți.",
      de: "FTL (Full Truck Load) bedeutet ein Kunde belegt den ganzen LKW, LTL kombiniert Fracht mehrerer Kunden.",
      en: "FTL (Full Truck Load) means one customer uses the entire truck, LTL combines cargo from multiple customers."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce reprezintă termenul 'lead time' în logistică?",
      de: "Was bedeutet der Begriff 'Vorlaufzeit' in der Logistik?",
      en: "What does the term 'lead time' represent in logistics?"
    },
    options: {
      ro: ["Timpul de odihnă al șoferului", "Timpul total de la comandă până la livrare", "Timpul de încărcare", "Timpul de condus"],
      de: ["Ruhezeit des Fahrers", "Gesamtzeit von Bestellung bis Lieferung", "Ladezeit", "Fahrzeit"],
      en: ["Driver rest time", "Total time from order to delivery", "Loading time", "Driving time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Lead time cuprinde toate etapele: procesare comandă, pregătire, transport și livrare finală.",
      de: "Vorlaufzeit umfasst alle Phasen: Auftragsbearbeitung, Vorbereitung, Transport und Endlieferung.",
      en: "Lead time covers all stages: order processing, preparation, transport and final delivery."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Care sunt cele 3 fluxuri principale într-un lanț logistic?",
      de: "Was sind die 3 Hauptströme in einer Lieferkette?",
      en: "What are the 3 main flows in a supply chain?"
    },
    options: {
      ro: ["Mărfuri, informații și finanțe", "Camioane, șoferi, combustibil", "Import, export, tranzit", "Încărcare, transport, descărcare"],
      de: ["Waren, Informationen und Finanzen", "LKWs, Fahrer, Kraftstoff", "Import, Export, Transit", "Beladung, Transport, Entladung"],
      en: ["Goods, information and finances", "Trucks, drivers, fuel", "Import, export, transit", "Loading, transport, unloading"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cele trei fluxuri fundamentale sunt: fizic (mărfuri), informațional (date, documente) și financiar (plăți).",
      de: "Die drei fundamentalen Ströme sind: physisch (Waren), informationell (Daten, Dokumente) und finanziell (Zahlungen).",
      en: "The three fundamental flows are: physical (goods), informational (data, documents) and financial (payments)."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce înseamnă 'hub and spoke' în logistică?",
      de: "Was bedeutet 'Hub and Spoke' in der Logistik?",
      en: "What does 'hub and spoke' mean in logistics?"
    },
    options: {
      ro: ["Transport direct punct-la-punct", "Sistem cu depozit central și distribuție radială", "Transport feroviar", "Transport aerian"],
      de: ["Direkter Punkt-zu-Punkt-Transport", "System mit zentralem Lager und radialer Verteilung", "Schienentransport", "Lufttransport"],
      en: ["Direct point-to-point transport", "System with central depot and radial distribution", "Rail transport", "Air transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Hub and spoke consolidează mărfurile într-un hub central, apoi le distribuie către destinații finale.",
      de: "Hub and Spoke konsolidiert Waren in einem zentralen Hub, dann verteilt sie zu Endzielen.",
      en: "Hub and spoke consolidates goods in a central hub, then distributes them to final destinations."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Care sunt principalele stakeholderi cu care interacționează un disponent?",
      de: "Wer sind die wichtigsten Stakeholder, mit denen ein Disponent interagiert?",
      en: "Who are the main stakeholders a dispatcher interacts with?"
    },
    options: {
      ro: ["Doar șoferii", "Clienți, transportatori, șoferi, vamă, depozite", "Doar clienții", "Doar management-ul"],
      de: ["Nur Fahrer", "Kunden, Spediteure, Fahrer, Zoll, Lager", "Nur Kunden", "Nur Management"],
      en: ["Only drivers", "Clients, carriers, drivers, customs, warehouses", "Only clients", "Only management"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Disponentul este punctul central de comunicare între toate părțile implicate în lanțul logistic.",
      de: "Der Disponent ist der zentrale Kommunikationspunkt zwischen allen an der Lieferkette beteiligten Parteien.",
      en: "The dispatcher is the central communication point between all parties involved in the supply chain."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce este un SLA (Service Level Agreement) în contextul transportului?",
      de: "Was ist ein SLA (Service Level Agreement) im Transportkontext?",
      en: "What is an SLA (Service Level Agreement) in the transport context?"
    },
    options: {
      ro: ["Licență de transport", "Acord care definește nivelul de servicii și penalități", "Asigurare marfă", "Contract de leasing"],
      de: ["Transportlizenz", "Vereinbarung, die Serviceniveau und Strafen definiert", "Frachtversicherung", "Leasingvertrag"],
      en: ["Transport license", "Agreement defining service level and penalties", "Cargo insurance", "Leasing contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "SLA stabilește metrici precum timp de livrare, rate de damage și penalități pentru neconformități.",
      de: "SLA legt Metriken wie Lieferzeit, Schadensraten und Strafen für Nichtkonformität fest.",
      en: "SLA establishes metrics like delivery time, damage rates and penalties for non-compliance."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Care este importanța vizibilității în lanțul de aprovizionare?",
      de: "Was ist die Bedeutung der Sichtbarkeit in der Lieferkette?",
      en: "What is the importance of visibility in the supply chain?"
    },
    options: {
      ro: ["Nu este importantă", "Permite tracking în timp real și anticiparea problemelor", "Doar pentru marketing", "Doar pentru facturare"],
      de: ["Nicht wichtig", "Ermöglicht Echtzeit-Tracking und Antizipation von Problemen", "Nur für Marketing", "Nur für Rechnungsstellung"],
      en: ["Not important", "Enables real-time tracking and anticipating problems", "Only for marketing", "Only for invoicing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Vizibilitatea permite intervenție proactivă, informarea clienților și optimizarea operațiunilor.",
      de: "Sichtbarkeit ermöglicht proaktive Intervention, Kundeninformation und Betriebsoptimierung.",
      en: "Visibility enables proactive intervention, customer information and operations optimization."
    },
    difficultyLevel: 3
  },
  {
    question: {
      ro: "Ce înseamnă 'last mile delivery'?",
      de: "Was bedeutet 'Last Mile Delivery'?",
      en: "What does 'last mile delivery' mean?"
    },
    options: {
      ro: ["Ultima milă înainte de frontieră", "Etapa finală de livrare către destinatar", "Transport de lungă distanță", "Prima încărcare"],
      de: ["Letzte Meile vor der Grenze", "Letzte Lieferetappe zum Empfänger", "Langstreckentransport", "Erste Beladung"],
      en: ["Last mile before border", "Final delivery stage to recipient", "Long-distance transport", "First loading"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Last mile este cea mai costisitoare și complexă parte a livrării, de la hub la ușa clientului.",
      de: "Last Mile ist der teuerste und komplexeste Teil der Lieferung, vom Hub zur Kundentür.",
      en: "Last mile is the most expensive and complex part of delivery, from hub to customer's door."
    },
    difficultyLevel: 3
  },

  // Level 4 Questions (10)
  {
    question: {
      ro: "Un client solicită livrare în 24h pentru 15 paleți din București în München (1200 km). Ce verifici PRIMUL?",
      de: "Ein Kunde fordert 24h-Lieferung für 15 Paletten von Bukarest nach München (1200 km). Was prüfen Sie ZUERST?",
      en: "A client requests 24h delivery for 15 pallets from Bucharest to Munich (1200 km). What do you check FIRST?"
    },
    options: {
      ro: ["Prețul", "Fezabilitatea legală (timp de conducere vs distanță)", "Disponibilitatea șoferului", "Dacă marfa e gata"],
      de: ["Preis", "Rechtliche Machbarkeit (Lenkzeit vs. Distanz)", "Fahrerverfügbarkeit", "Ob Ware bereit ist"],
      en: ["Price", "Legal feasibility (driving time vs distance)", "Driver availability", "If cargo is ready"]
    },
    correctIndex: 1,
    explanation: {
      ro: "1200 km în 24h cu pauze legale necesită echipaj dublu. Verificarea legală previne promisiuni nerealiste.",
      de: "1200 km in 24h mit legalen Pausen erfordert Doppelbesatzung. Rechtliche Prüfung verhindert unrealistische Versprechen.",
      en: "1200 km in 24h with legal breaks requires double crew. Legal check prevents unrealistic promises."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Care este diferența dintre 'milk run' și 'dedicated transport'?",
      de: "Was ist der Unterschied zwischen 'Milk Run' und 'Dedicated Transport'?",
      en: "What is the difference between 'milk run' and 'dedicated transport'?"
    },
    options: {
      ro: ["Milk run = traseu fix cu opriri multiple, dedicated = un singur client point-to-point", "Sunt identice", "Milk run = transport lapte, dedicated = altele", "Milk run = lent, dedicated = rapid"],
      de: ["Milk Run = feste Route mit mehreren Stopps, Dedicated = ein Kunde Punkt-zu-Punkt", "Sie sind identisch", "Milk Run = Milchtransport, Dedicated = andere", "Milk Run = langsam, Dedicated = schnell"],
      en: ["Milk run = fixed route with multiple stops, dedicated = one client point-to-point", "They are identical", "Milk run = milk transport, dedicated = others", "Milk run = slow, dedicated = fast"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Milk run optimizează prin colectare/livrare multiplu pe aceeași rută. Dedicated oferă exclusivitate unui client.",
      de: "Milk Run optimiert durch Mehrfach-Abholung/Lieferung auf derselben Route. Dedicated bietet einem Kunden Exklusivität.",
      en: "Milk run optimizes through multiple pickup/delivery on same route. Dedicated offers exclusivity to one client."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce factori influențează calculul 'cost per km' pentru un camion?",
      de: "Welche Faktoren beeinflussen die Berechnung der 'Kosten pro km' für einen LKW?",
      en: "What factors influence the 'cost per km' calculation for a truck?"
    },
    options: {
      ro: ["Doar combustibilul", "Combustibil, taxe, șofer, amortizare, întreținere, asigurări, costuri administrative", "Doar salariul șoferului", "Doar taxele de drum"],
      de: ["Nur Kraftstoff", "Kraftstoff, Maut, Fahrer, Abschreibung, Wartung, Versicherung, Verwaltungskosten", "Nur Fahrergehalt", "Nur Mautgebühren"],
      en: ["Only fuel", "Fuel, tolls, driver, depreciation, maintenance, insurance, administrative costs", "Only driver salary", "Only road tolls"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Costul per km real include toate costurile fixe și variabile, împărțite la km parcurși anual.",
      de: "Die realen Kosten pro km umfassen alle fixen und variablen Kosten, geteilt durch jährlich gefahrene km.",
      en: "Real cost per km includes all fixed and variable costs, divided by annual km driven."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce este 'cross-docking' și care este avantajul principal?",
      de: "Was ist 'Cross-Docking' und was ist der Hauptvorteil?",
      en: "What is 'cross-docking' and what is the main advantage?"
    },
    options: {
      ro: ["Depozitare pe termen lung", "Transfer direct între vehicule fără stocare, reducând costurile și timpul", "Verificare vamală", "Ambalare marfă"],
      de: ["Langzeitlagerung", "Direkter Transfer zwischen Fahrzeugen ohne Lagerung, reduziert Kosten und Zeit", "Zollprüfung", "Warenverpackung"],
      en: ["Long-term storage", "Direct transfer between vehicles without storage, reducing costs and time", "Customs verification", "Cargo packaging"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cross-docking elimină costurile de stocare și reduce lead time-ul prin transfer rapid între vehicule.",
      de: "Cross-Docking eliminiert Lagerkosten und reduziert die Vorlaufzeit durch schnellen Transfer zwischen Fahrzeugen.",
      en: "Cross-docking eliminates storage costs and reduces lead time through rapid transfer between vehicles."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Cum se calculează indicatorul 'utilizare flotă' (fleet utilization)?",
      de: "Wie wird der Indikator 'Flottenauslastung' berechnet?",
      en: "How is the 'fleet utilization' indicator calculated?"
    },
    options: {
      ro: ["Număr camioane × 100", "Km efectiv parcurși / Km disponibili total × 100", "Număr curse / lună", "Combustibil consumat / km"],
      de: ["Anzahl LKW × 100", "Effektiv gefahrene km / Verfügbare Gesamt-km × 100", "Anzahl Fahrten / Monat", "Kraftstoffverbrauch / km"],
      en: ["Number of trucks × 100", "Actual km driven / Total available km × 100", "Number of trips / month", "Fuel consumed / km"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Fleet utilization măsoară eficiența folosirii resurselor disponibile. Target: >85% pentru profitabilitate.",
      de: "Flottenauslastung misst die Effizienz der Nutzung verfügbarer Ressourcen. Ziel: >85% für Profitabilität.",
      en: "Fleet utilization measures efficiency of using available resources. Target: >85% for profitability."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce este 'buffer time' și de ce este important în planificare?",
      de: "Was ist 'Pufferzeit' und warum ist sie in der Planung wichtig?",
      en: "What is 'buffer time' and why is it important in planning?"
    },
    options: {
      ro: ["Timp de odihnă șofer", "Timp suplimentar adăugat pentru a acoperi întârzieri imprevizibile", "Timp de încărcare", "Timp administrativ"],
      de: ["Fahrerruhezeit", "Zusätzliche Zeit für unvorhersehbare Verzögerungen", "Ladezeit", "Verwaltungszeit"],
      en: ["Driver rest time", "Extra time added to cover unpredictable delays", "Loading time", "Administrative time"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Buffer time (10-15% din durata totală) protejează împotriva traficului, condițiilor meteo și altor variabile.",
      de: "Pufferzeit (10-15% der Gesamtdauer) schützt vor Verkehr, Wetter und anderen Variablen.",
      en: "Buffer time (10-15% of total duration) protects against traffic, weather and other variables."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Care este diferența între 'backhaul' și 'empty running'?",
      de: "Was ist der Unterschied zwischen 'Rückfracht' und 'Leerfahrt'?",
      en: "What is the difference between 'backhaul' and 'empty running'?"
    },
    options: {
      ro: ["Sunt identice", "Backhaul = retur cu marfă, empty running = retur gol (pierdere)", "Backhaul = urgent, empty = normal", "Nu există diferență practică"],
      de: ["Sie sind identisch", "Backhaul = Rückfahrt mit Fracht, Empty Running = Leerfahrt (Verlust)", "Backhaul = dringend, Empty = normal", "Kein praktischer Unterschied"],
      en: ["They are identical", "Backhaul = return with cargo, empty running = empty return (loss)", "Backhaul = urgent, empty = normal", "No practical difference"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Backhaul optimizează utilizarea reducând cursele goale. Empty running este cost pur, fără venit.",
      de: "Backhaul optimiert die Auslastung durch Reduzierung von Leerfahrten. Empty Running ist reiner Kostenfaktor ohne Einnahmen.",
      en: "Backhaul optimizes utilization by reducing empty runs. Empty running is pure cost with no revenue."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce reprezintă 'eta' (estimated time of arrival) și cum se calculează precis?",
      de: "Was stellt 'ETA' (geschätzte Ankunftszeit) dar und wie wird sie genau berechnet?",
      en: "What does 'ETA' (estimated time of arrival) represent and how is it calculated precisely?"
    },
    options: {
      ro: ["Doar distanță / viteză", "Distanță/viteză medie + pauze + buffer + timp încărcare/descărcare", "Doar ora plecării + ore condus", "Aproximare bazată pe experiență"],
      de: ["Nur Distanz / Geschwindigkeit", "Distanz/Durchschnittsgeschwindigkeit + Pausen + Puffer + Lade-/Entladezeit", "Nur Abfahrtszeit + Fahrstunden", "Erfahrungsbasierte Schätzung"],
      en: ["Only distance / speed", "Distance/average speed + breaks + buffer + loading/unloading time", "Only departure time + driving hours", "Experience-based approximation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ETA precisă include toate componentele: timp condus, pauze obligatorii, încărcare/descărcare și buffer.",
      de: "Präzise ETA umfasst alle Komponenten: Fahrzeit, Pflichtpausen, Be-/Entladung und Puffer.",
      en: "Precise ETA includes all components: driving time, mandatory breaks, loading/unloading and buffer."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Ce este 'pooling' în contextul transportului?",
      de: "Was ist 'Pooling' im Transportkontext?",
      en: "What is 'pooling' in the transport context?"
    },
    options: {
      ro: ["Spălarea camioanelor", "Consolidarea mărfurilor de la mai mulți expeditori pentru eficiență", "Depozitare în bazine", "Transport de lichide"],
      de: ["LKW-Wäsche", "Konsolidierung von Fracht mehrerer Versender für Effizienz", "Lagerhaltung in Becken", "Flüssigkeitstransport"],
      en: ["Truck washing", "Consolidating cargo from multiple shippers for efficiency", "Storage in pools", "Liquid transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pooling reduce costurile pe unitate prin combinarea volumelor mici într-un singur transport.",
      de: "Pooling reduziert Kosten pro Einheit durch Kombination kleiner Volumina in einem Transport.",
      en: "Pooling reduces cost per unit by combining small volumes into one transport."
    },
    difficultyLevel: 4
  },
  {
    question: {
      ro: "Care sunt cei 3 piloni ai sustenabilității în logistică?",
      de: "Was sind die 3 Säulen der Nachhaltigkeit in der Logistik?",
      en: "What are the 3 pillars of sustainability in logistics?"
    },
    options: {
      ro: ["Viteză, cost, calitate", "Mediu, social, economic (ESG)", "Import, export, tranzit", "Rutier, feroviar, maritim"],
      de: ["Geschwindigkeit, Kosten, Qualität", "Umwelt, Sozial, Wirtschaft (ESG)", "Import, Export, Transit", "Straße, Schiene, See"],
      en: ["Speed, cost, quality", "Environment, social, economic (ESG)", "Import, export, transit", "Road, rail, maritime"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ESG (Environmental, Social, Governance) ghidează deciziile pentru un business sustenabil pe termen lung.",
      de: "ESG (Environmental, Social, Governance) leitet Entscheidungen für ein langfristig nachhaltiges Geschäft.",
      en: "ESG (Environmental, Social, Governance) guides decisions for a long-term sustainable business."
    },
    difficultyLevel: 4
  },

  // Level 5 Questions (10)
  {
    question: {
      ro: "Un client cu 50 curse/lună la 1.2 EUR/km propune creșterea la 100 curse/lună în schimbul reducerii la 1.05 EUR/km. Cost variabil: 0.75 EUR/km. Distanță medie: 800 km. Ce recomanzi?",
      de: "Ein Kunde mit 50 Fahrten/Monat bei 1,2 EUR/km bietet 100 Fahrten/Monat im Austausch für Reduzierung auf 1,05 EUR/km. Variable Kosten: 0,75 EUR/km. Durchschnittliche Distanz: 800 km. Was empfehlen Sie?",
      en: "A client with 50 trips/month at €1.2/km proposes increasing to 100 trips/month in exchange for reduction to €1.05/km. Variable cost: €0.75/km. Average distance: 800 km. What do you recommend?"
    },
    options: {
      ro: ["Refuzi - marja scade", "Accepti - profitul total crește de la 18.000€ la 24.000€/lună", "Negociezi 1.10 EUR/km", "Ceri analiză suplimentară"],
      de: ["Ablehnen - Marge sinkt", "Annehmen - Gesamtgewinn steigt von 18.000€ auf 24.000€/Monat", "1,10 EUR/km verhandeln", "Weitere Analyse anfordern"],
      en: ["Refuse - margin drops", "Accept - total profit increases from €18,000 to €24,000/month", "Negotiate €1.10/km", "Request further analysis"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Calcul: Actual: 50×800×(1.2-0.75)=18.000€. Nou: 100×800×(1.05-0.75)=24.000€. +33% profit pentru volum dublu.",
      de: "Berechnung: Aktuell: 50×800×(1,2-0,75)=18.000€. Neu: 100×800×(1,05-0,75)=24.000€. +33% Gewinn für doppeltes Volumen.",
      en: "Calculation: Current: 50×800×(1.2-0.75)=€18,000. New: 100×800×(1.05-0.75)=€24,000. +33% profit for double volume."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Care este formula pentru calculul 'profitabilitate per cursă' când ai costuri fixe și variabile?",
      de: "Wie lautet die Formel für die Berechnung der 'Rentabilität pro Fahrt' bei fixen und variablen Kosten?",
      en: "What is the formula for calculating 'profitability per trip' with fixed and variable costs?"
    },
    options: {
      ro: ["Venit - combustibil", "Venit - (Costuri variabile × km) - (Costuri fixe / nr. curse)", "Venit - costuri totale", "Venit / costuri"],
      de: ["Einnahmen - Kraftstoff", "Einnahmen - (Variable Kosten × km) - (Fixkosten / Anzahl Fahrten)", "Einnahmen - Gesamtkosten", "Einnahmen / Kosten"],
      en: ["Revenue - fuel", "Revenue - (Variable costs × km) - (Fixed costs / number of trips)", "Revenue - total costs", "Revenue / costs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Formula alocă proporțional costurile fixe pe fiecare cursă și adaugă costurile variabile reale.",
      de: "Die Formel verteilt Fixkosten anteilig auf jede Fahrt und addiert die tatsächlichen variablen Kosten.",
      en: "The formula allocates fixed costs proportionally to each trip and adds actual variable costs."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Ce strategie folosești pentru a reduce 'empty miles' de la 35% la sub 20%?",
      de: "Welche Strategie verwenden Sie, um 'Leerkilometer' von 35% auf unter 20% zu reduzieren?",
      en: "What strategy do you use to reduce 'empty miles' from 35% to below 20%?"
    },
    options: {
      ro: ["Reduci numărul de curse", "Triangulare, bursă transport, contracte backhaul, rute circulare", "Crești prețurile", "Reduci flota"],
      de: ["Weniger Fahrten", "Triangulation, Frachtbörse, Rückfrachtverträge, Rundkurse", "Preise erhöhen", "Flotte reduzieren"],
      en: ["Reduce number of trips", "Triangulation, freight exchange, backhaul contracts, circular routes", "Increase prices", "Reduce fleet"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Combinația de strategii multiple maximizează utilizarea și minimizează costul km gol neproductiv.",
      de: "Die Kombination mehrerer Strategien maximiert die Auslastung und minimiert unproduktive Leerkilometer-Kosten.",
      en: "Combining multiple strategies maximizes utilization and minimizes unproductive empty km costs."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Un transport urgent (24h) costă 2.500 EUR vs 1.800 EUR standard (48h). Clientul pierde 500 EUR/zi întârziere. Ce recomanzi pentru livrare în 30h?",
      de: "Ein Eilauftrag (24h) kostet 2.500 EUR vs 1.800 EUR Standard (48h). Der Kunde verliert 500 EUR/Tag Verzögerung. Was empfehlen Sie für Lieferung in 30h?",
      en: "An urgent transport (24h) costs €2,500 vs €1,800 standard (48h). Client loses €500/day delay. What do you recommend for 30h delivery?"
    },
    options: {
      ro: ["Standard - mai ieftin", "Urgent - pierderea clientului depășește diferența de preț", "Propui varianta intermediară și negociezi", "Refuzi comanda"],
      de: ["Standard - billiger", "Eilauftrag - Kundenverlust übersteigt Preisdifferenz", "Zwischenvariante vorschlagen und verhandeln", "Auftrag ablehnen"],
      en: ["Standard - cheaper", "Urgent - client's loss exceeds price difference", "Propose intermediate option and negotiate", "Refuse the order"]
    },
    correctIndex: 2,
    explanation: {
      ro: "30h este între 24h și 48h. Propui preț intermediar (~2.150€) care acoperă nevoile ambelor părți.",
      de: "30h liegt zwischen 24h und 48h. Schlagen Sie einen Zwischenpreis (~2.150€) vor, der beide Seiten abdeckt.",
      en: "30h is between 24h and 48h. Propose an intermediate price (~€2,150) covering both parties' needs."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Care este impactul reducerii timpului de staționare de la 3h la 1.5h pentru o flotă de 20 camioane care face 200 curse/lună?",
      de: "Was ist der Einfluss der Reduzierung der Standzeit von 3h auf 1,5h für eine Flotte von 20 LKW mit 200 Fahrten/Monat?",
      en: "What is the impact of reducing standing time from 3h to 1.5h for a fleet of 20 trucks doing 200 trips/month?"
    },
    options: {
      ro: ["Niciun impact semnificativ", "300 ore economie/lună = ~37 zile productive suplimentare", "Doar impact pe combustibil", "Impact negativ pe șoferi"],
      de: ["Keine signifikante Auswirkung", "300 Stunden Einsparung/Monat = ~37 zusätzliche produktive Tage", "Nur Kraftstoff-Auswirkung", "Negative Auswirkung auf Fahrer"],
      en: ["No significant impact", "300 hours saved/month = ~37 additional productive days", "Only fuel impact", "Negative impact on drivers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "200 curse × 1.5h economie = 300h/lună ÷ 8h/zi = 37.5 zile productive care pot genera venituri suplimentare.",
      de: "200 Fahrten × 1,5h Einsparung = 300h/Monat ÷ 8h/Tag = 37,5 produktive Tage für zusätzliche Einnahmen.",
      en: "200 trips × 1.5h saving = 300h/month ÷ 8h/day = 37.5 productive days that can generate additional revenue."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Ce este 'total cost of ownership' (TCO) pentru un camion și cum diferă de costul de achiziție?",
      de: "Was ist 'Total Cost of Ownership' (TCO) für einen LKW und wie unterscheidet er sich vom Anschaffungspreis?",
      en: "What is 'total cost of ownership' (TCO) for a truck and how does it differ from purchase cost?"
    },
    options: {
      ro: ["Sunt identice", "TCO include achiziție + operare + întreținere + combustibil + asigurări + valoare reziduală pe întreaga durată de viață", "TCO = preț + taxe", "TCO = doar costuri de întreținere"],
      de: ["Sie sind identisch", "TCO umfasst Anschaffung + Betrieb + Wartung + Kraftstoff + Versicherung + Restwert über die gesamte Lebensdauer", "TCO = Preis + Steuern", "TCO = nur Wartungskosten"],
      en: ["They are identical", "TCO includes purchase + operation + maintenance + fuel + insurance + residual value over entire lifespan", "TCO = price + taxes", "TCO = only maintenance costs"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TCO oferă imaginea completă. Un camion mai scump poate avea TCO mai mic prin consum redus și valoare reziduală mai mare.",
      de: "TCO bietet das Gesamtbild. Ein teurerer LKW kann niedrigere TCO durch reduzierten Verbrauch und höheren Restwert haben.",
      en: "TCO provides the complete picture. A more expensive truck can have lower TCO through reduced consumption and higher residual value."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Cum calculezi 'break-even point' pentru o nouă rută care necesită investiție de 50.000 EUR și generează marja de 150 EUR/cursă?",
      de: "Wie berechnen Sie den 'Break-even-Punkt' für eine neue Route, die eine Investition von 50.000 EUR erfordert und 150 EUR/Fahrt Marge generiert?",
      en: "How do you calculate 'break-even point' for a new route requiring €50,000 investment and generating €150/trip margin?"
    },
    options: {
      ro: ["50.000 / 150 = 333 curse necesare", "50.000 × 150", "150 / 50.000", "Nu se poate calcula"],
      de: ["50.000 / 150 = 333 erforderliche Fahrten", "50.000 × 150", "150 / 50.000", "Kann nicht berechnet werden"],
      en: ["50,000 / 150 = 333 trips needed", "50,000 × 150", "150 / 50,000", "Cannot be calculated"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Break-even = Investiție / Marja per cursă = 50.000 / 150 = 333 curse. La 20 curse/lună = 16.7 luni ROI.",
      de: "Break-even = Investition / Marge pro Fahrt = 50.000 / 150 = 333 Fahrten. Bei 20 Fahrten/Monat = 16,7 Monate ROI.",
      en: "Break-even = Investment / Margin per trip = 50,000 / 150 = 333 trips. At 20 trips/month = 16.7 months ROI."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Ce metrică măsoară eficiența operațională globală a unei flote?",
      de: "Welche Metrik misst die globale Betriebseffizienz einer Flotte?",
      en: "What metric measures the overall operational efficiency of a fleet?"
    },
    options: {
      ro: ["Doar km parcurși", "OEE (Overall Equipment Effectiveness) adaptat: Disponibilitate × Performanță × Utilizare", "Doar consum combustibil", "Număr camioane"],
      de: ["Nur gefahrene km", "OEE (Overall Equipment Effectiveness) adaptiert: Verfügbarkeit × Leistung × Auslastung", "Nur Kraftstoffverbrauch", "Anzahl LKW"],
      en: ["Only km driven", "OEE (Overall Equipment Effectiveness) adapted: Availability × Performance × Utilization", "Only fuel consumption", "Number of trucks"]
    },
    correctIndex: 1,
    explanation: {
      ro: "OEE adaptat pentru transport combină disponibilitatea tehnică, performanța vs target și utilizarea reală a capacității.",
      de: "Angepasste OEE für Transport kombiniert technische Verfügbarkeit, Leistung vs. Ziel und tatsächliche Kapazitätsnutzung.",
      en: "OEE adapted for transport combines technical availability, performance vs target and actual capacity utilization."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Care este avantajul strategic al diversificării portofoliului de clienți (niciun client >20% din cifra de afaceri)?",
      de: "Was ist der strategische Vorteil der Diversifizierung des Kundenportfolios (kein Kunde >20% des Umsatzes)?",
      en: "What is the strategic advantage of diversifying the client portfolio (no client >20% of revenue)?"
    },
    options: {
      ro: ["Mai multă muncă administrativă", "Reducerea riscului de dependență și putere de negociere echilibrată", "Mai multe facturi", "Niciun avantaj real"],
      de: ["Mehr Verwaltungsarbeit", "Reduzierung des Abhängigkeitsrisikos und ausgewogene Verhandlungsmacht", "Mehr Rechnungen", "Kein echter Vorteil"],
      en: ["More administrative work", "Reducing dependency risk and balanced negotiating power", "More invoices", "No real advantage"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diversificarea protejează contra pierderii unui client major și previne presiunea excesivă asupra prețurilor.",
      de: "Diversifizierung schützt vor dem Verlust eines Großkunden und verhindert übermäßigen Preisdruck.",
      en: "Diversification protects against losing a major client and prevents excessive price pressure."
    },
    difficultyLevel: 5
  },
  {
    question: {
      ro: "Ce strategie aplici pentru a crește 'revenue per available seat km' (RASK) echivalent în freight?",
      de: "Welche Strategie wenden Sie an, um den 'Revenue per Available Seat km' (RASK) Äquivalent in Fracht zu steigern?",
      en: "What strategy do you apply to increase 'revenue per available seat km' (RASK) equivalent in freight?"
    },
    options: {
      ro: ["Reduci prețurile", "Optimizare încărcare, reducere km gol, servicii value-added, segmentare pricing", "Crești flota", "Reduci personalul"],
      de: ["Preise senken", "Beladungsoptimierung, Leerkilometer reduzieren, Value-Added-Services, Preissegmentierung", "Flotte vergrößern", "Personal reduzieren"],
      en: ["Reduce prices", "Load optimization, reduce empty km, value-added services, pricing segmentation", "Increase fleet", "Reduce staff"]
    },
    correctIndex: 1,
    explanation: {
      ro: "RASK echivalent crește prin maximizarea venitului per km disponibil: încărcare optimă, backhaul și servicii premium.",
      de: "RASK-Äquivalent steigt durch Maximierung der Einnahmen pro verfügbarem km: optimale Beladung, Rückfracht und Premium-Services.",
      en: "RASK equivalent increases by maximizing revenue per available km: optimal loading, backhaul and premium services."
    },
    difficultyLevel: 5
  }
];
