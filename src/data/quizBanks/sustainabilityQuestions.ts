import { QuizQuestion } from '../quizData';

export const sustainabilityQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Ce înseamnă sustenabilitate în transportul de marfă?",
    options: ["Doar profit", "Echilibru între eficiență economică, mediu și responsabilitate socială", "Doar reducerea emisiilor", "Creșterea vitezei"],
    correctIndex: 1,
    explanation: {
      ro: "Sustenabilitatea combină performanța economică, protecția mediului și responsabilitatea socială.",
      de: "Nachhaltigkeit kombiniert wirtschaftliche Leistung, Umweltschutz und soziale Verantwortung.",
      en: "Sustainability combines economic performance, environmental protection and social responsibility."
    }
  },
  {
    question: "Care este principala sursă de emisii CO2 în transportul rutier?",
    options: ["Aerul condiționat", "Combustia combustibililor fosili în motoare", "Iluminatul", "Frigiderele"],
    correctIndex: 1,
    explanation: {
      ro: "Arderea combustibililor fosili (diesel, benzină) produce majoritatea emisiilor CO2.",
      de: "Die Verbrennung fossiler Brennstoffe (Diesel, Benzin) verursacht die meisten CO2-Emissionen.",
      en: "Burning fossil fuels (diesel, petrol) produces most CO2 emissions."
    }
  },
  {
    question: "Ce este amprenta de carbon (carbon footprint)?",
    options: ["Urma pe drum", "Totalul emisiilor de gaze cu efect de seră generate de o activitate", "Un tip de combustibil", "O taxă de drum"],
    correctIndex: 1,
    explanation: {
      ro: "Amprenta de carbon măsoară totalul gazelor cu efect de seră emise de o activitate.",
      de: "Der CO2-Fußabdruck misst die gesamten Treibhausgasemissionen einer Aktivität.",
      en: "Carbon footprint measures total greenhouse gas emissions from an activity."
    }
  },
  {
    question: "Cum poate optimizarea rutelor reduce emisiile?",
    options: ["Nu poate", "Reduce km parcurși, evită congestii și folosește trasee mai eficiente", "Crește consumul", "Doar pe hârtie"],
    correctIndex: 1,
    explanation: {
      ro: "Rutele optimizate reduc distanțele, evită traficul și economisesc combustibil.",
      de: "Optimierte Routen reduzieren Strecken, vermeiden Stau und sparen Kraftstoff.",
      en: "Optimized routes reduce distances, avoid traffic and save fuel."
    }
  },
  {
    question: "Ce este eco-driving?",
    options: ["Conducerea electrică", "Tehnici de conducere care reduc consumul și emisiile", "Condusul lent", "Condusul rapid"],
    correctIndex: 1,
    explanation: {
      ro: "Eco-driving include tehnici ca accelerare lină, viteza constantă și anticiparea traficului.",
      de: "Eco-Driving umfasst sanftes Beschleunigen, konstante Geschwindigkeit und Verkehrsvorausschau.",
      en: "Eco-driving includes smooth acceleration, constant speed and traffic anticipation."
    }
  },
  {
    question: "Care sunt avantajele vehiculelor electrice în transport?",
    options: ["Doar cost mai mare", "Zero emisii locale, costuri de operare reduse, zgomot redus", "Niciun avantaj", "Doar pentru mașini mici"],
    correctIndex: 1,
    explanation: {
      ro: "Vehiculele electrice elimină emisiile locale și au costuri de operare mai mici.",
      de: "Elektrofahrzeuge eliminieren lokale Emissionen und haben niedrigere Betriebskosten.",
      en: "Electric vehicles eliminate local emissions and have lower operating costs."
    }
  },
  {
    question: "Ce înseamnă transportul multimodal verde?",
    options: ["Doar transport pe apă", "Combinarea modurilor de transport pentru minimizarea emisiilor", "Camioane verzi", "Transport fără documente"],
    correctIndex: 1,
    explanation: {
      ro: "Transportul multimodal verde combină drumul cu feroviarul și maritimul pentru emisii reduse.",
      de: "Grüner multimodaler Transport kombiniert Straße mit Schiene und Schiff für reduzierte Emissionen.",
      en: "Green multimodal transport combines road with rail and sea for reduced emissions."
    }
  },
  {
    question: "Ce este raportarea emisiilor de CO2 în transport?",
    options: ["Opțională", "Măsurarea și documentarea emisiilor pentru clienți și autorități", "Doar pentru aviație", "Un moft ecologist"],
    correctIndex: 1,
    explanation: {
      ro: "Raportarea CO2 devine obligatorie și este cerută de clienți mari.",
      de: "CO2-Berichterstattung wird obligatorisch und von Großkunden verlangt.",
      en: "CO2 reporting is becoming mandatory and required by large customers."
    }
  },
  {
    question: "Ce beneficii aduce certificarea Lean & Green?",
    options: ["Doar marketing", "Recunoaștere internațională, atragere clienți verzi și eficiență", "Taxe mai mari", "Restricții de operare"],
    correctIndex: 1,
    explanation: {
      ro: "Lean & Green oferă recunoaștere pentru eforturile de reducere a emisiilor.",
      de: "Lean & Green bietet Anerkennung für Emissionsreduktionsbemühungen.",
      en: "Lean & Green provides recognition for emission reduction efforts."
    }
  },
  {
    question: "Cum contribuie digitalizarea la sustenabilitate?",
    options: ["Nu contribuie", "Reduce hârtia, optimizează operațiuni și permite monitorizarea", "Crește consumul", "Doar marketing"],
    correctIndex: 1,
    explanation: {
      ro: "Digitalizarea reduce consumul de hârtie și permite optimizarea în timp real.",
      de: "Digitalisierung reduziert Papierverbrauch und ermöglicht Echtzeit-Optimierung.",
      en: "Digitalization reduces paper consumption and enables real-time optimization."
    }
  },
  // German Questions (11-20)
  {
    question: "Was ist der Green Deal der EU für den Transportsektor?",
    options: ["Ein Rabatt", "Strategie zur Klimaneutralität bis 2050 mit Maßnahmen für nachhaltigen Transport", "Ein neuer Lkw-Typ", "Eine Versicherung"],
    correctIndex: 1,
    explanation: {
      ro: "Green Deal-ul UE stabilește obiective de neutralitate climatică până în 2050.",
      de: "Der EU Green Deal setzt Ziele für Klimaneutralität bis 2050.",
      en: "EU Green Deal sets goals for climate neutrality by 2050."
    }
  },
  {
    question: "Welche Kraftstoffalternativen gibt es für Lkw?",
    options: ["Nur Diesel", "LNG, Elektro, Wasserstoff, HVO, Biodiesel", "Nur Benzin", "Keine Alternativen"],
    correctIndex: 1,
    explanation: {
      ro: "Alternativele includ LNG, electric, hidrogen, HVO și biodiesel.",
      de: "Alternativen umfassen LNG, Elektro, Wasserstoff, HVO und Biodiesel.",
      en: "Alternatives include LNG, electric, hydrogen, HVO and biodiesel."
    }
  },
  {
    question: "Was bedeutet Kreislaufwirtschaft in der Logistik?",
    options: ["Kreisverkehr", "Wiederverwertung und Recycling von Materialien zur Abfallreduktion", "Rundenfahrten", "Nur für Verpackung"],
    correctIndex: 1,
    explanation: {
      ro: "Economia circulară reutilizează și reciclează materiale pentru a reduce deșeurile.",
      de: "Kreislaufwirtschaft nutzt und recycelt Materialien zur Abfallreduktion.",
      en: "Circular economy reuses and recycles materials to reduce waste."
    }
  },
  {
    question: "Wie kann die Laderaumauslastung verbessert werden?",
    options: ["Mehr Lkw verwenden", "Optimierte Beladung, Ladungsbörsen und Tourenplanung", "Weniger transportieren", "Gar nicht"],
    correctIndex: 1,
    explanation: {
      ro: "Încărcarea optimizată și platformele de încărcături reduc cursele goale.",
      de: "Optimierte Beladung und Ladungsbörsen reduzieren Leerfahrten.",
      en: "Optimized loading and freight exchanges reduce empty runs."
    }
  },
  {
    question: "Was ist der Scope 3 bei CO2-Emissionen?",
    options: ["Direkte Emissionen", "Indirekte Emissionen in der Lieferkette (inkl. Transport)", "Nur Bürogebäude", "Nur Produktionsemissionen"],
    correctIndex: 1,
    explanation: {
      ro: "Scope 3 cuprinde emisiile indirecte din lanțul de aprovizionare, inclusiv transport.",
      de: "Scope 3 umfasst indirekte Emissionen in der Lieferkette, einschließlich Transport.",
      en: "Scope 3 covers indirect emissions in the supply chain, including transport."
    }
  },
  {
    question: "Welche Rolle spielt Aerodynamik bei der Kraftstoffeinsparung?",
    options: ["Keine Rolle", "Verbesserte Aerodynamik kann 5-15% Kraftstoff sparen", "Nur bei Autos wichtig", "Erhöht den Verbrauch"],
    correctIndex: 1,
    explanation: {
      ro: "Aerodinamica îmbunătățită poate reduce consumul cu 5-15%.",
      de: "Verbesserte Aerodynamik kann den Verbrauch um 5-15% senken.",
      en: "Improved aerodynamics can reduce consumption by 5-15%."
    }
  },
  {
    question: "Was sind Emissionszonen und wie betreffen sie den Transport?",
    options: ["Naturschutzgebiete", "Städtische Bereiche mit Beschränkungen für umweltschädliche Fahrzeuge", "Parkzonen", "Ladezonen"],
    correctIndex: 1,
    explanation: {
      ro: "Zonele de emisii restricționează accesul vehiculelor poluante în orașe.",
      de: "Emissionszonen beschränken den Zugang umweltschädlicher Fahrzeuge in Städten.",
      en: "Emission zones restrict access of polluting vehicles in cities."
    }
  },
  {
    question: "Wie können Leerfahrten reduziert werden?",
    options: ["Gar nicht", "Frachtbörsen, Rundläufe und Kooperationen mit anderen Spediteuren", "Mehr Lkw kaufen", "Schneller fahren"],
    correctIndex: 1,
    explanation: {
      ro: "Bursele de încărcături și cooperările reduc cursele fără marfă.",
      de: "Frachtbörsen und Kooperationen reduzieren Leerfahrten.",
      en: "Freight exchanges and cooperations reduce empty runs."
    }
  },
  {
    question: "Was bedeutet GLEC Framework?",
    options: ["Eine Firma", "Standardmethode zur Berechnung und Berichterstattung von Transportemissionen", "Ein Fahrzeugtyp", "Ein Softwareprogramm"],
    correctIndex: 1,
    explanation: {
      ro: "GLEC Framework este metoda standard pentru calculul și raportarea emisiilor din transport.",
      de: "Das GLEC Framework ist die Standardmethode zur Berechnung und Berichterstattung von Transportemissionen.",
      en: "GLEC Framework is the standard method for calculating and reporting transport emissions."
    }
  },
  {
    question: "Welche Rolle spielen Kunden bei der nachhaltigen Logistik?",
    options: ["Keine", "Zunehmende Nachfrage nach grünen Lösungen treibt Investitionen", "Nur Kostenfokus", "Irrelevant"],
    correctIndex: 1,
    explanation: {
      ro: "Cererea clienților pentru soluții verzi stimulează investițiile în sustenabilitate.",
      de: "Kundennachfrage nach grünen Lösungen treibt Investitionen in Nachhaltigkeit.",
      en: "Customer demand for green solutions drives investments in sustainability."
    }
  },
  // English Questions (21-30)
  {
    question: "What are Science Based Targets (SBTs) in transport?",
    options: ["Academic research only", "Emission reduction goals aligned with Paris Agreement science", "Sales targets", "Speed limits"],
    correctIndex: 1,
    explanation: {
      ro: "SBT-urile sunt obiective de reducere a emisiilor aliniate cu știința Acordului de la Paris.",
      de: "SBTs sind Emissionsreduktionsziele, die mit der Wissenschaft des Pariser Abkommens übereinstimmen.",
      en: "SBTs are emission reduction goals aligned with Paris Agreement science."
    }
  },
  {
    question: "How does fleet renewal contribute to sustainability?",
    options: ["It doesn't", "Newer vehicles have better fuel efficiency and lower emissions", "Older is better", "Only about image"],
    correctIndex: 1,
    explanation: {
      ro: "Vehiculele noi au eficiență mai bună a combustibilului și emisii mai mici.",
      de: "Neuere Fahrzeuge haben bessere Kraftstoffeffizienz und niedrigere Emissionen.",
      en: "Newer vehicles have better fuel efficiency and lower emissions."
    }
  },
  {
    question: "What is the role of telematics in sustainable transport?",
    options: ["Only for tracking", "Optimizes driving behavior, routes and maintenance for efficiency", "Increases fuel use", "No role"],
    correctIndex: 1,
    explanation: {
      ro: "Telematica optimizează comportamentul de conducere, rutele și mentenanța.",
      de: "Telematik optimiert Fahrverhalten, Routen und Wartung.",
      en: "Telematics optimizes driving behavior, routes and maintenance."
    }
  },
  {
    question: "What is carbon offsetting in logistics?",
    options: ["Hiding emissions", "Compensating emissions by investing in environmental projects", "Moving emissions elsewhere", "Ignoring emissions"],
    correctIndex: 1,
    explanation: {
      ro: "Compensarea carbonului investește în proiecte de mediu pentru a echilibra emisiile.",
      de: "CO2-Kompensation investiert in Umweltprojekte zum Ausgleich von Emissionen.",
      en: "Carbon offsetting invests in environmental projects to balance emissions."
    }
  },
  {
    question: "How do sustainable practices affect competitive advantage?",
    options: ["No effect", "Attract green customers, reduce costs and meet regulatory requirements", "Only costs more", "Reduces customers"],
    correctIndex: 1,
    explanation: {
      ro: "Practicile sustenabile atrag clienți verzi și reduc costurile pe termen lung.",
      de: "Nachhaltige Praktiken gewinnen grüne Kunden und senken langfristig Kosten.",
      en: "Sustainable practices attract green customers and reduce costs long-term."
    }
  },
  {
    question: "What is modal shift in sustainable transport strategy?",
    options: ["Changing truck models", "Moving freight from road to lower-emission modes like rail", "Changing drivers", "New traffic rules"],
    correctIndex: 1,
    explanation: {
      ro: "Modal shift mută marfa de pe drum pe moduri cu emisii mai mici, precum feroviarul.",
      de: "Modal Shift verlagert Fracht von der Straße auf emissionsärmere Verkehrsträger wie die Schiene.",
      en: "Modal shift moves freight from road to lower-emission modes like rail."
    }
  },
  {
    question: "What is the significance of tire pressure for fuel efficiency?",
    options: ["No significance", "Proper tire pressure can improve fuel efficiency by 3-5%", "Lower pressure is better", "Only affects comfort"],
    correctIndex: 1,
    explanation: {
      ro: "Presiunea corectă a anvelopelor poate îmbunătăți eficiența combustibilului cu 3-5%.",
      de: "Korrekter Reifendruck kann die Kraftstoffeffizienz um 3-5% verbessern.",
      en: "Proper tire pressure can improve fuel efficiency by 3-5%."
    }
  },
  {
    question: "How do green warehouses contribute to sustainable logistics?",
    options: ["No contribution", "Energy-efficient lighting, solar panels and optimized layouts reduce overall footprint", "Just marketing", "Only for storage"],
    correctIndex: 1,
    explanation: {
      ro: "Depozitele verzi folosesc iluminat eficient, panouri solare și layout optimizat.",
      de: "Grüne Lager nutzen energieeffiziente Beleuchtung, Solarmodule und optimiertes Layout.",
      en: "Green warehouses use energy-efficient lighting, solar panels and optimized layout."
    }
  },
  {
    question: "What are sustainable packaging practices in freight?",
    options: ["More plastic", "Recyclable materials, right-sizing and reusable containers", "Bigger boxes", "No packaging"],
    correctIndex: 1,
    explanation: {
      ro: "Ambalajul sustenabil folosește materiale reciclabile, dimensiuni corecte și containere reutilizabile.",
      de: "Nachhaltige Verpackung nutzt recycelbare Materialien, richtige Größen und wiederverwendbare Behälter.",
      en: "Sustainable packaging uses recyclable materials, right-sizing and reusable containers."
    }
  },
  {
    question: "What is the future outlook for sustainable freight transport?",
    options: ["No changes expected", "Increasing regulation, technology and customer pressure driving transformation", "Becoming less important", "Only for large companies"],
    correctIndex: 1,
    explanation: {
      ro: "Reglementări, tehnologie și presiunea clienților vor accelera transformarea sustenabilă.",
      de: "Regulierung, Technologie und Kundendruck werden die nachhaltige Transformation beschleunigen.",
      en: "Regulation, technology and customer pressure will accelerate sustainable transformation."
    }
  }
];
