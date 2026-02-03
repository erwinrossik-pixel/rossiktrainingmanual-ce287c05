import { TranslatedQuizQuestion } from '../../quizTranslations';

export const reeferComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este temperatura optimă pentru transportul cărnii proaspete de vită?",
      de: "Was ist die optimale Temperatur für den Transport von frischem Rindfleisch?",
      en: "What is the optimal temperature for transporting fresh beef?"
    },
    options: {
      ro: ["-18°C", "0°C până la +2°C", "+4°C până la +7°C", "+10°C"],
      de: ["-18°C", "0°C bis +2°C", "+4°C bis +7°C", "+10°C"],
      en: ["-18°C", "0°C to +2°C", "+4°C to +7°C", "+10°C"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Carnea proaspătă de vită se transportă la 0°C până la +2°C pentru a preveni dezvoltarea bacteriilor.",
      de: "Frisches Rindfleisch wird bei 0°C bis +2°C transportiert, um Bakterienentwicklung zu verhindern.",
      en: "Fresh beef is transported at 0°C to +2°C to prevent bacterial growth."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă clasa ATP FRC pentru o semiremorcă frigorifică?",
      de: "Was bedeutet die ATP-Klasse FRC für einen Kühlauflieger?",
      en: "What does ATP class FRC mean for a refrigerated semi-trailer?"
    },
    options: {
      ro: ["Frigorific cu răcire ușoară", "Frigorific clasa C cu control temperatură", "Izotermic fără agregat", "Încălzitor pentru transport cald"],
      de: ["Kühlung mit leichter Kühlung", "Kühlklasse C mit Temperaturkontrolle", "Isotherm ohne Aggregat", "Heizung für Warmtransport"],
      en: ["Refrigeration with light cooling", "Refrigerated class C with temperature control", "Isothermic without unit", "Heater for warm transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FRC = Frigorific Reinforced Class C, poate menține temperatura de la +12°C la -20°C.",
      de: "FRC = Frigorific Reinforced Class C, kann Temperaturen von +12°C bis -20°C halten.",
      en: "FRC = Frigorific Reinforced Class C, can maintain temperatures from +12°C to -20°C."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "De ce este important pre-cooling-ul semiremorcii înainte de încărcare?",
      de: "Warum ist das Vorkühlen des Aufliegers vor dem Beladen wichtig?",
      en: "Why is pre-cooling the semi-trailer before loading important?"
    },
    options: {
      ro: ["Nu este necesar", "Reduce consumul de combustibil", "Asigură temperatura corectă pentru marfa sensibilă", "Doar pentru transport internațional"],
      de: ["Nicht notwendig", "Reduziert Kraftstoffverbrauch", "Gewährleistet korrekte Temperatur für empfindliche Ware", "Nur für internationalen Transport"],
      en: ["Not necessary", "Reduces fuel consumption", "Ensures correct temperature for sensitive cargo", "Only for international transport"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Pre-cooling-ul asigură că marfa nu este expusă la temperaturi necorespunzătoare la încărcare.",
      de: "Vorkühlung stellt sicher, dass die Ladung beim Beladen nicht falschen Temperaturen ausgesetzt wird.",
      en: "Pre-cooling ensures that cargo is not exposed to incorrect temperatures during loading."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este temperatura de congelare pentru produse alimentare?",
      de: "Was ist die Gefriertemperatur für Lebensmittel?",
      en: "What is the freezing temperature for food products?"
    },
    options: {
      ro: ["0°C", "-8°C", "-18°C sau mai jos", "-5°C"],
      de: ["0°C", "-8°C", "-18°C oder niedriger", "-5°C"],
      en: ["0°C", "-8°C", "-18°C or below", "-5°C"]
    },
    correctIndex: 2,
    explanation: {
      ro: "-18°C este temperatura standard de congelare pentru păstrarea pe termen lung a alimentelor.",
      de: "-18°C ist die Standard-Gefriertemperatur für die Langzeitlagerung von Lebensmitteln.",
      en: "-18°C is the standard freezing temperature for long-term food storage."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport banane verzi 20t din Ecuador la Hamburg. Temperatura setată: +13°C. La sosire: +17°C. Cauză probabilă?",
      de: "Transport grüner Bananen 20t aus Ecuador nach Hamburg. Eingestellte Temperatur: +13°C. Bei Ankunft: +17°C. Wahrscheinliche Ursache?",
      en: "Transport green bananas 20t from Ecuador to Hamburg. Set temperature: +13°C. On arrival: +17°C. Probable cause?"
    },
    options: {
      ro: ["Defecțiune agregat", "Etanșeitate ușă defectuoasă", "Maturare naturală a bananelor (căldură metabolică)", "Setare greșită a termostatului"],
      de: ["Aggregatdefekt", "Defekte Türdichtung", "Natürliche Bananenreifung (Stoffwechselwärme)", "Falsche Thermostateinstellung"],
      en: ["Unit malfunction", "Defective door seal", "Natural banana ripening (metabolic heat)", "Wrong thermostat setting"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Bananele produc căldură metabolică în timpul maturării. Diferența de 4°C poate indica proces de coacere.",
      de: "Bananen erzeugen bei der Reifung Stoffwechselwärme. Der 4°C-Unterschied kann auf Reifungsprozess hinweisen.",
      en: "Bananas produce metabolic heat during ripening. The 4°C difference may indicate ripening process."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este 'cold chain break' și de ce este critic?",
      de: "Was ist ein 'Cold Chain Break' und warum ist er kritisch?",
      en: "What is a 'cold chain break' and why is it critical?"
    },
    options: {
      ro: ["Pauza șoferului", "Întreruperea lanțului de frig - marfă compromisă", "Schimbare vehicul", "Oprire pentru alimentare"],
      de: ["Fahrerpause", "Unterbrechung der Kühlkette - Ware kompromittiert", "Fahrzeugwechsel", "Betankungsstopp"],
      en: ["Driver break", "Cold chain interruption - compromised cargo", "Vehicle change", "Refueling stop"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Cold chain break = întreruperea temperaturi controlate. Poate invalida garanția produsului și siguranța alimentară.",
      de: "Cold Chain Break = Unterbrechung der kontrollierten Temperatur. Kann Produktgarantie und Lebensmittelsicherheit ungültig machen.",
      en: "Cold chain break = interruption of controlled temperature. Can invalidate product warranty and food safety."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este frecvența minimă de înregistrare a temperaturii pentru transport ATP?",
      de: "Was ist die Mindesthäufigkeit der Temperaturaufzeichnung für ATP-Transport?",
      en: "What is the minimum temperature recording frequency for ATP transport?"
    },
    options: {
      ro: ["La fiecare oră", "La fiecare 5 minute sau mai puțin", "Doar la încărcare și descărcare", "O dată pe zi"],
      de: ["Jede Stunde", "Alle 5 Minuten oder weniger", "Nur bei Be- und Entladung", "Einmal am Tag"],
      en: ["Every hour", "Every 5 minutes or less", "Only at loading and unloading", "Once a day"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Standardul ATP cere înregistrare la minimum fiecare 5 minute pentru trasabilitate completă.",
      de: "Der ATP-Standard erfordert Aufzeichnung mindestens alle 5 Minuten für vollständige Rückverfolgbarkeit.",
      en: "ATP standard requires recording at least every 5 minutes for complete traceability."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce se întâmplă la descărcarea produselor congelate dacă temperatura exterioară este +35°C?",
      de: "Was passiert beim Entladen gefrorener Produkte bei +35°C Außentemperatur?",
      en: "What happens when unloading frozen products if outside temperature is +35°C?"
    },
    options: {
      ro: ["Nici o problemă", "Risc de condensare și deteriorare rapidă", "Se încălzesc uniform", "Trebuie așteptată seara"],
      de: ["Kein Problem", "Risiko von Kondensation und schneller Verderb", "Gleichmäßige Erwärmung", "Muss bis zum Abend warten"],
      en: ["No problem", "Risk of condensation and rapid deterioration", "Even warming", "Must wait until evening"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Diferența mare de temperatură cauzează condensare care poate deteriora ambalajele și compromite marfa.",
      de: "Der große Temperaturunterschied verursacht Kondensation, die Verpackungen beschädigen und Ware kompromittieren kann.",
      en: "Large temperature difference causes condensation which can damage packaging and compromise cargo."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport farmaceutice +2°C la +8°C pe rută DE-IT (24h). Agregat diesel consumă 15L/24h. Rezervor: 50L. Strategie?",
      de: "Pharma-Transport +2°C bis +8°C auf Route DE-IT (24h). Dieselaggregat verbraucht 15L/24h. Tank: 50L. Strategie?",
      en: "Pharma transport +2°C to +8°C on DE-IT route (24h). Diesel unit consumes 15L/24h. Tank: 50L. Strategy?"
    },
    options: {
      ro: ["Alimentare la plecare este suficientă", "Alimentare intermediară obligatorie în AT sau IT nord", "Oprire motor pe noapte", "Transport imposibil cu acest vehicul"],
      de: ["Betankung bei Abfahrt ist ausreichend", "Obligatorische Zwischenbetankung in AT oder Norditalien", "Motor nachts abstellen", "Transport mit diesem Fahrzeug unmöglich"],
      en: ["Refueling at departure is sufficient", "Mandatory intermediate refueling in AT or northern IT", "Turn off engine at night", "Transport impossible with this vehicle"]
    },
    correctIndex: 0,
    explanation: {
      ro: "50L rezervor / 15L consum = 80h autonomie > 24h transport. Alimentare la plecare este suficientă.",
      de: "50L Tank / 15L Verbrauch = 80h Autonomie > 24h Transport. Betankung bei Abfahrt ist ausreichend.",
      en: "50L tank / 15L consumption = 80h autonomy > 24h transport. Refueling at departure is sufficient."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce tip de agregat frigorific este cel mai silențios pentru livrări urbane nocturne?",
      de: "Welcher Kühlaggregat-Typ ist am leisesten für nächtliche Stadtlieferungen?",
      en: "What type of refrigeration unit is quietest for urban night deliveries?"
    },
    options: {
      ro: ["Diesel convențional", "Electric sau diesel cu mod silențios", "Criogenic", "Doar gheață"],
      de: ["Konventioneller Diesel", "Elektrisch oder Diesel mit Silent-Modus", "Kryogen", "Nur Eis"],
      en: ["Conventional diesel", "Electric or diesel with silent mode", "Cryogenic", "Ice only"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Agregatele electrice sau diesel cu mod silențios sunt potrivite pentru livrări în zone cu restricții de zgomot.",
      de: "Elektrische oder Dieselaggregate mit Silent-Modus sind für Lieferungen in lärmgeschützten Bereichen geeignet.",
      en: "Electric or diesel units with silent mode are suitable for deliveries in noise-restricted areas."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "La ce interval trebuie calibrat termograful pentru transport frigorific ATP?",
      de: "In welchem Intervall muss der Thermograph für ATP-Kühltransport kalibriert werden?",
      en: "At what interval must the thermograph be calibrated for ATP refrigerated transport?"
    },
    options: {
      ro: ["La fiecare transport", "Anual sau conform cerințelor naționale", "La fiecare 5 ani", "Nu necesită calibrare"],
      de: ["Bei jedem Transport", "Jährlich oder gemäß nationaler Anforderungen", "Alle 5 Jahre", "Keine Kalibrierung erforderlich"],
      en: ["Every transport", "Annually or per national requirements", "Every 5 years", "No calibration needed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Calibrarea anuală este standard pentru termografe, unele țări pot avea cerințe mai stricte.",
      de: "Jährliche Kalibrierung ist Standard für Thermographen, einige Länder haben möglicherweise strengere Anforderungen.",
      en: "Annual calibration is standard for thermographs, some countries may have stricter requirements."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Controlul sanitar IT constată +5°C pentru produse ce necesită +2°C max. Ce se întâmplă?",
      de: "IT-Gesundheitskontrolle stellt +5°C für Produkte fest, die max. +2°C benötigen. Was passiert?",
      en: "IT health control finds +5°C for products requiring +2°C max. What happens?"
    },
    options: {
      ro: ["Avertisment verbal", "Confiscarea obligatorie a mărfii + amendă", "Reducere preț 10%", "Continuare transport normal"],
      de: ["Mündliche Verwarnung", "Obligatorische Beschlagnahme der Ware + Bußgeld", "10% Preisreduktion", "Normaler Transportfortsetzung"],
      en: ["Verbal warning", "Mandatory cargo confiscation + fine", "10% price reduction", "Normal transport continuation"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Depășirea temperaturii pentru produse perisabile = confiscare obligatorie conform regulamentelor sanitare UE.",
      de: "Temperaturüberschreitung für verderbliche Produkte = obligatorische Beschlagnahme gemäß EU-Gesundheitsvorschriften.",
      en: "Temperature exceedance for perishable products = mandatory confiscation per EU health regulations."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce document specifică temperaturile de transport pentru fiecare produs?",
      de: "Welches Dokument gibt die Transporttemperaturen für jedes Produkt an?",
      en: "What document specifies transport temperatures for each product?"
    },
    options: {
      ro: ["CMR", "Specificația tehnică sau eticheta produsului", "Licența de transport", "Polița de asigurare"],
      de: ["CMR", "Technische Spezifikation oder Produktetikett", "Transportlizenz", "Versicherungspolice"],
      en: ["CMR", "Technical specification or product label", "Transport license", "Insurance policy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Temperaturile de transport sunt specificate pe eticheta produsului sau în specificațiile tehnice ale producătorului.",
      de: "Transporttemperaturen sind auf dem Produktetikett oder in den technischen Spezifikationen des Herstellers angegeben.",
      en: "Transport temperatures are specified on the product label or in the manufacturer's technical specifications."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum afectează încărcarea excesivă circulația aerului în semiremorcă frigorifică?",
      de: "Wie beeinflusst Überladung die Luftzirkulation im Kühlauflieger?",
      en: "How does excessive loading affect air circulation in a refrigerated semi-trailer?"
    },
    options: {
      ro: ["Nu afectează deloc", "Blochează circulația și creează zone calde", "Îmbunătățește răcirea", "Reduce consumul de combustibil"],
      de: ["Überhaupt keine Auswirkung", "Blockiert Zirkulation und erzeugt Warmzonen", "Verbessert Kühlung", "Reduziert Kraftstoffverbrauch"],
      en: ["No effect at all", "Blocks circulation and creates hot spots", "Improves cooling", "Reduces fuel consumption"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Supraîncărcarea blochează canalele de aer și creează zone unde temperatura nu este uniformă.",
      de: "Überladung blockiert Luftkanäle und erzeugt Zonen mit ungleichmäßiger Temperatur.",
      en: "Overloading blocks air channels and creates zones where temperature is not uniform."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport vaccin COVID: +2°C la +8°C. Agregat se defectează pe A7 în FR. Temperatura crește 0.5°C/oră. Timp maxim până la intervenție?",
      de: "COVID-Impfstofftransport: +2°C bis +8°C. Aggregat fällt auf A7 in FR aus. Temperatur steigt 0,5°C/h. Maximale Zeit bis zur Intervention?",
      en: "COVID vaccine transport: +2°C to +8°C. Unit fails on A7 in FR. Temperature rises 0.5°C/hour. Maximum time until intervention?"
    },
    options: {
      ro: ["2 ore", "6 ore", "12 ore", "24 ore"],
      de: ["2 Stunden", "6 Stunden", "12 Stunden", "24 Stunden"],
      en: ["2 hours", "6 hours", "12 hours", "24 hours"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Calcul: de la +2°C la +8°C = 6°C marjă. 6°C / 0.5°C/h = 12 ore maxim. Service urgent necesar!",
      de: "Berechnung: von +2°C auf +8°C = 6°C Spielraum. 6°C / 0,5°C/h = max. 12 Stunden. Dringender Service erforderlich!",
      en: "Calculation: from +2°C to +8°C = 6°C margin. 6°C / 0.5°C/h = 12 hours max. Urgent service needed!"
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'continuous mode' la un agregat frigorific?",
      de: "Was bedeutet 'Continuous Mode' bei einem Kühlaggregat?",
      en: "What does 'continuous mode' mean on a refrigeration unit?"
    },
    options: {
      ro: ["Funcționare permanentă la putere maximă", "Funcționare automată ciclic", "Mod de defrostare", "Mod economic"],
      de: ["Dauerbetrieb bei maximaler Leistung", "Automatischer zyklischer Betrieb", "Abtaumodus", "Sparmodus"],
      en: ["Permanent operation at maximum power", "Automatic cyclic operation", "Defrost mode", "Economy mode"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Continuous mode = agregatul funcționează permanent, nu ciclic, pentru temperaturi constante (ex: congelate).",
      de: "Continuous Mode = Aggregat läuft permanent, nicht zyklisch, für konstante Temperaturen (z.B. Tiefkühl).",
      en: "Continuous mode = unit runs permanently, not cyclically, for constant temperatures (e.g., frozen)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce verificare critică se face la prelucarea remorcii frigo înainte de plecare?",
      de: "Welche kritische Prüfung wird vor Abfahrt bei Übernahme des Kühlaufliegers durchgeführt?",
      en: "What critical check is done when taking over the reefer trailer before departure?"
    },
    options: {
      ro: ["Doar nivelul uleiului motor", "Pre-cooling atins + funcționare agregat + combustibil + etanșeitate", "Doar culoarea vopselei", "Doar kilometrajul"],
      de: ["Nur Motorölstand", "Vorkühlung erreicht + Aggregatfunktion + Kraftstoff + Dichtheit", "Nur Lackfarbe", "Nur Kilometerstand"],
      en: ["Only engine oil level", "Pre-cooling reached + unit operation + fuel + sealing", "Only paint color", "Only mileage"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificare completă: temperatura pre-cooling atinsă, agregat funcțional, combustibil suficient, garnituri etanșe.",
      de: "Vollständige Prüfung: Vorkühltemperatur erreicht, funktionierendes Aggregat, ausreichend Kraftstoff, dichte Dichtungen.",
      en: "Complete check: pre-cooling temperature reached, functional unit, sufficient fuel, sealed gaskets."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este diferența principală între transport refrigerat și izoterm?",
      de: "Was ist der Hauptunterschied zwischen Kühl- und Isotherm-Transport?",
      en: "What is the main difference between refrigerated and isothermic transport?"
    },
    options: {
      ro: ["Izoterm are agregat activ", "Refrigerat are agregat activ, izoterm doar izolație", "Nu există diferență", "Izoterm este pentru congelare"],
      de: ["Isotherm hat aktives Aggregat", "Gekühlt hat aktives Aggregat, isotherm nur Isolierung", "Kein Unterschied", "Isotherm ist für Tiefkühlung"],
      en: ["Isothermic has active unit", "Refrigerated has active unit, isothermic only insulation", "No difference", "Isothermic is for freezing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Frigorific = agregat activ de răcire. Izotermic = doar izolație, menține temperatura dar nu o modifică.",
      de: "Gekühlt = aktives Kühlaggregat. Isotherm = nur Isolierung, hält Temperatur aber ändert sie nicht.",
      en: "Refrigerated = active cooling unit. Isothermic = only insulation, maintains but doesn't change temperature."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport flori din NL la RO. Cerință: +4°C constant. Timp total: 28h. Ploaie intensă în DE. Riscuri operaționale?",
      de: "Blumentransport von NL nach RO. Anforderung: konstant +4°C. Gesamtzeit: 28h. Starkregen in DE. Betriebsrisiken?",
      en: "Flower transport from NL to RO. Requirement: constant +4°C. Total time: 28h. Heavy rain in DE. Operational risks?"
    },
    options: {
      ro: ["Nici un risc", "Umiditate excesivă la deschiderea ușilor + ventilație insuficientă", "Doar întârziere", "Florile rezistă la orice"],
      de: ["Kein Risiko", "Übermäßige Feuchtigkeit beim Türöffnen + unzureichende Belüftung", "Nur Verspätung", "Blumen halten alles aus"],
      en: ["No risk", "Excessive moisture when opening doors + insufficient ventilation", "Only delay", "Flowers withstand anything"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Florile sunt sensibile la umiditate. Deschiderea ușilor în ploaie = risc de condensare și mucegai.",
      de: "Blumen sind feuchtigkeitsempfindlich. Türöffnung bei Regen = Risiko von Kondensation und Schimmel.",
      en: "Flowers are moisture-sensitive. Opening doors in rain = risk of condensation and mold."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce reprezintă 'defrost cycle' și când trebuie activat?",
      de: "Was bedeutet 'Defrost Cycle' und wann muss er aktiviert werden?",
      en: "What is 'defrost cycle' and when must it be activated?"
    },
    options: {
      ro: ["Curățare manuală a gheții", "Ciclu automat de dezghețare evaporator, la transport sub 0°C", "Oprire agregat", "Încălzire marfă"],
      de: ["Manuelle Eisentfernung", "Automatischer Verdampfer-Abtauzyklus bei Transport unter 0°C", "Aggregatabschaltung", "Ladungserwärmung"],
      en: ["Manual ice removal", "Automatic evaporator defrost cycle, for transport below 0°C", "Unit shutdown", "Cargo heating"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Defrost cycle dezghețează evaporatorul automat la transport sub 0°C pentru a menține eficiența răcirii.",
      de: "Abtauzyklus taut Verdampfer automatisch bei Transport unter 0°C ab, um Kühleffizienz zu erhalten.",
      en: "Defrost cycle automatically defrosts evaporator for sub-0°C transport to maintain cooling efficiency."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este temperatura corectă pentru transportul înghețatei?",
      de: "Was ist die korrekte Temperatur für den Eiscremetransport?",
      en: "What is the correct temperature for ice cream transport?"
    },
    options: {
      ro: ["-10°C", "-15°C", "-20°C sau mai jos", "-5°C"],
      de: ["-10°C", "-15°C", "-20°C oder niedriger", "-5°C"],
      en: ["-10°C", "-15°C", "-20°C or below", "-5°C"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Înghețata necesită -20°C sau mai jos pentru a preveni cristalizarea și a menține textura.",
      de: "Eiscreme benötigt -20°C oder niedriger, um Kristallisation zu verhindern und Textur zu erhalten.",
      en: "Ice cream requires -20°C or below to prevent crystallization and maintain texture."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce se întâmplă dacă se amestecă produse cu temperaturi diferite în aceeași semiremorcă mono-temperatură?",
      de: "Was passiert, wenn Produkte mit unterschiedlichen Temperaturen im selben Mono-Temperatur-Auflieger gemischt werden?",
      en: "What happens if products with different temperatures are mixed in the same mono-temperature semi-trailer?"
    },
    options: {
      ro: ["Se echilibrează automat", "Unele produse vor fi compromise", "Nu există problemă", "Creșterea capacității"],
      de: ["Automatischer Ausgleich", "Einige Produkte werden kompromittiert", "Kein Problem", "Kapazitätserhöhung"],
      en: ["Automatic balancing", "Some products will be compromised", "No problem", "Capacity increase"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Temperatura unică nu poate satisface ambele cerințe - produsele sensibile vor fi compromise.",
      de: "Eine einzelne Temperatur kann nicht beide Anforderungen erfüllen - empfindliche Produkte werden kompromittiert.",
      en: "Single temperature cannot satisfy both requirements - sensitive products will be compromised."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Semiremorcă bi-temperatură: compartiment 1 = -20°C (10t pește congelat), compartiment 2 = +4°C (8t lactate). Perete despărțitor defect. Acțiune?",
      de: "Bi-Temperatur-Auflieger: Abteil 1 = -20°C (10t gefrorener Fisch), Abteil 2 = +4°C (8t Milchprodukte). Trennwand defekt. Aktion?",
      en: "Bi-temperature trailer: compartment 1 = -20°C (10t frozen fish), compartment 2 = +4°C (8t dairy). Partition wall defective. Action?"
    },
    options: {
      ro: ["Continuare transport, nu e grav", "Oprire imediată + notificare client + decizie asupra mărfii", "Creștere temperatură compartiment 1", "Reducere temperatură compartiment 2"],
      de: ["Transport fortsetzen, nicht schlimm", "Sofortiger Stopp + Kundenbenachrichtigung + Warenentscheidung", "Temperaturerhöhung Abteil 1", "Temperaturreduzierung Abteil 2"],
      en: ["Continue transport, not serious", "Immediate stop + client notification + cargo decision", "Increase temperature compartment 1", "Reduce temperature compartment 2"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Defectul peretelui = contaminare temperaturi. Oprire + notificare + decizie client pentru evitarea pierderilor majore.",
      de: "Wanddefekt = Temperaturkontamination. Stopp + Benachrichtigung + Kundenentscheidung zur Vermeidung größerer Verluste.",
      en: "Wall defect = temperature contamination. Stop + notification + client decision to avoid major losses."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce certificat trebuie să aibă semiremorca pentru transport internațional de alimente?",
      de: "Welches Zertifikat muss der Auflieger für internationalen Lebensmitteltransport haben?",
      en: "What certificate must the semi-trailer have for international food transport?"
    },
    options: {
      ro: ["Doar ITP", "Certificat ATP valid", "Doar licență transport", "Nici un certificat special"],
      de: ["Nur TÜV", "Gültiges ATP-Zertifikat", "Nur Transportlizenz", "Kein besonderes Zertifikat"],
      en: ["Only MOT", "Valid ATP certificate", "Only transport license", "No special certificate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Certificatul ATP este obligatoriu pentru transport internațional de produse perisabile alimentare.",
      de: "Das ATP-Zertifikat ist für den internationalen Transport verderblicher Lebensmittel Pflicht.",
      en: "ATP certificate is mandatory for international transport of perishable food products."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum se verifică etanșeitatea ușilor la semiremorcă frigorifică?",
      de: "Wie wird die Türdichtheit bei einem Kühlauflieger geprüft?",
      en: "How is door sealing checked on a refrigerated semi-trailer?"
    },
    options: {
      ro: ["Nu se verifică", "Test vizual garnituri + test lumină din interior + verificare condens", "Doar atingere manuală", "Test apă"],
      de: ["Wird nicht geprüft", "Sichtprüfung Dichtungen + Lichttest von innen + Kondensprüfung", "Nur manuelle Berührung", "Wassertest"],
      en: ["Not checked", "Visual seal test + light test from inside + condensation check", "Only manual touch", "Water test"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificare completă: garnituri intacte, nu trece lumină prin crăpături, nu există condens anormal pe uși.",
      de: "Vollständige Prüfung: intakte Dichtungen, kein Licht durch Risse, keine abnormale Kondensation an Türen.",
      en: "Complete check: intact gaskets, no light through cracks, no abnormal condensation on doors."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport ciocolată +15°C la +18°C din BE la GR în august. Temp. externă: +40°C. Ce mod agregat folosești?",
      de: "Schokoladentransport +15°C bis +18°C von BE nach GR im August. Außentemperatur: +40°C. Welchen Aggregatmodus verwenden?",
      en: "Chocolate transport +15°C to +18°C from BE to GR in August. External temp: +40°C. What unit mode do you use?"
    },
    options: {
      ro: ["Mod răcire continuă", "Mod ciclic cu control strict", "Mod încălzire", "Agregat oprit, doar izolație"],
      de: ["Dauerkühlung", "Zyklischer Modus mit strenger Kontrolle", "Heizmodus", "Aggregat aus, nur Isolierung"],
      en: ["Continuous cooling mode", "Cyclic mode with strict control", "Heating mode", "Unit off, insulation only"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cu +40°C extern și cerință +15-18°C, mod răcire continuă pentru a compensa căldura externă extremă.",
      de: "Bei +40°C außen und Anforderung +15-18°C, Dauerkühlung zur Kompensation extremer Außenhitze.",
      en: "With +40°C external and requirement +15-18°C, continuous cooling mode to compensate extreme external heat."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este durata de valabilitate a certificatului ATP?",
      de: "Was ist die Gültigkeitsdauer des ATP-Zertifikats?",
      en: "What is the validity period of the ATP certificate?"
    },
    options: {
      ro: ["1 an", "3 ani", "6 ani (cu reinspecție la 3 ani)", "10 ani"],
      de: ["1 Jahr", "3 Jahre", "6 Jahre (mit Nachprüfung nach 3 Jahren)", "10 Jahre"],
      en: ["1 year", "3 years", "6 years (with reinspection at 3 years)", "10 years"]
    },
    correctIndex: 2,
    explanation: {
      ro: "Certificatul ATP nou este valid 6 ani, cu reinspecție obligatorie la 3 ani pentru confirmare.",
      de: "Neues ATP-Zertifikat ist 6 Jahre gültig, mit Pflicht-Nachprüfung nach 3 Jahren zur Bestätigung.",
      en: "New ATP certificate is valid for 6 years, with mandatory reinspection at 3 years for confirmation."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce face funcția 'air exchange' (schimb aer) la agregat frigorific?",
      de: "Was macht die Funktion 'Luftaustausch' beim Kühlaggregat?",
      en: "What does the 'air exchange' function do on a refrigeration unit?"
    },
    options: {
      ro: ["Oprește complet răcirea", "Introduce aer proaspăt pentru fructe/legume care respiră", "Încălzește marfa", "Creează vid"],
      de: ["Schaltet Kühlung komplett ab", "Führt Frischluft für atmende Früchte/Gemüse zu", "Erwärmt Ladung", "Erzeugt Vakuum"],
      en: ["Completely stops cooling", "Introduces fresh air for respiring fruits/vegetables", "Heats cargo", "Creates vacuum"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Schimbul de aer este necesar pentru fructe/legume care continuă să respire și produc CO2 în transport.",
      de: "Luftaustausch ist für Obst/Gemüse notwendig, das weiter atmet und CO2 während des Transports produziert.",
      en: "Air exchange is needed for fruits/vegetables that continue respiring and producing CO2 during transport."
    }
  }
];
