import { TranslatedQuizQuestion } from "@/data/quizTranslations";

export const pricingComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    id: "pricing_comp_1",
    difficultyLevel: 3,
    question: {
      ro: "Care sunt componentele principale ale unui preț de transport rutier?",
      de: "Was sind die Hauptkomponenten eines Straßentransportpreises?",
      en: "What are the main components of a road transport price?"
    },
    options: {
      ro: ["Cost km (combustibil, uzură), cost timp (șofer, amortizare), costuri fixe, marja de profit", "Doar costul combustibilului", "Exclusiv salariul șoferului", "Numai distanța parcursă"],
      de: ["Km-Kosten (Kraftstoff, Verschleiß), Zeitkosten (Fahrer, Abschreibung), Fixkosten, Gewinnmarge", "Nur Kraftstoffkosten", "Ausschließlich Fahrergehalt", "Nur zurückgelegte Strecke"],
      en: ["Km cost (fuel, wear), time cost (driver, depreciation), fixed costs, profit margin", "Only fuel cost", "Exclusively driver salary", "Only distance traveled"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Prețul corect trebuie să acopere toate costurile + profit. Omiterea unei componente duce la pierderi sau prețuri necompetitive.",
      de: "Korrekter Preis muss alle Kosten + Gewinn decken. Auslassen einer Komponente führt zu Verlusten oder uncompetitiven Preisen.",
      en: "Correct price must cover all costs + profit. Omitting a component leads to losses or uncompetitive prices."
    }
  },
  {
    id: "pricing_comp_2",
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'spot rate' în transportul de marfă?",
      de: "Was bedeutet 'Spot Rate' im Gütertransport?",
      en: "What does 'spot rate' mean in freight transport?"
    },
    options: {
      ro: ["Preț negociat pentru un transport singular, bazat pe condițiile actuale ale pieței", "Preț fix pe termen lung", "Tarif guvernamental obligatoriu", "Preț standard pentru toți clienții"],
      de: ["Für einzelnen Transport verhandelter Preis, basierend auf aktuellen Marktbedingungen", "Langfristiger Festpreis", "Obligatorischer Regierungstarif", "Standardpreis für alle Kunden"],
      en: ["Price negotiated for a single transport, based on current market conditions", "Long-term fixed price", "Mandatory government tariff", "Standard price for all customers"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Spot rates fluctuează cu cererea și oferta. În perioadele de peak pot fi mult mai mari decât tarifele contractuale.",
      de: "Spot Rates schwanken mit Angebot und Nachfrage. In Spitzenzeiten können sie viel höher als Vertragstarife sein.",
      en: "Spot rates fluctuate with supply and demand. During peak periods they can be much higher than contract rates."
    }
  },
  {
    id: "pricing_comp_3",
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'fuel surcharge' (suprataxă combustibil) și cum funcționează?",
      de: "Was ist 'Fuel Surcharge' (Kraftstoffzuschlag) und wie funktioniert er?",
      en: "What is fuel surcharge and how does it work?"
    },
    options: {
      ro: ["Suprataxă variabilă aplicată pentru a compensa fluctuațiile prețului combustibilului, bazată pe un index de referință", "Taxă fixă inclusă în prețul de bază", "Impozit guvernamental pe combustibil", "Cost opțional pentru combustibil premium"],
      de: ["Variabler Zuschlag zur Kompensation von Kraftstoffpreisschwankungen, basierend auf Referenzindex", "Fixe Gebühr im Basispreis enthalten", "Regierungssteuer auf Kraftstoff", "Optionale Kosten für Premiumkraftstoff"],
      en: ["Variable surcharge applied to compensate fuel price fluctuations, based on a reference index", "Fixed fee included in base price", "Government tax on fuel", "Optional cost for premium fuel"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FSC protejează transportatorul de volatilitatea prețului petrolului. Se calculează săptămânal/lunar bazat pe un index publicat.",
      de: "FSC schützt Transporteur vor Ölpreisvolatilität. Wird wöchentlich/monatlich basierend auf veröffentlichtem Index berechnet.",
      en: "FSC protects carrier from oil price volatility. Calculated weekly/monthly based on a published index."
    }
  },
  {
    id: "pricing_comp_4",
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'FTL' și 'LTL' în tarifare?",
      de: "Was bedeuten 'FTL' und 'LTL' in der Tarifierung?",
      en: "What do 'FTL' and 'LTL' mean in pricing?"
    },
    options: {
      ro: ["FTL = Full Truck Load (camion complet); LTL = Less Than Truckload (grupaj/parțial)", "FTL = Fast Transport Line; LTL = Local Transport Line", "Ambele sunt tipuri de camioane", "Termeni pentru asigurare transport"],
      de: ["FTL = Full Truck Load (Komplettladung); LTL = Less Than Truckload (Teilladung/Sammelgut)", "FTL = Fast Transport Line; LTL = Local Transport Line", "Beides sind LKW-Typen", "Begriffe für Transportversicherung"],
      en: ["FTL = Full Truck Load (complete truck); LTL = Less Than Truckload (groupage/partial)", "FTL = Fast Transport Line; LTL = Local Transport Line", "Both are truck types", "Terms for transport insurance"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FTL: prețul e pentru întregul camion, indiferent de încărcare. LTL: prețul e per tonă, palet sau metru liniar ocupat.",
      de: "FTL: Preis ist für ganzen LKW, unabhängig von Beladung. LTL: Preis ist pro Tonne, Palette oder belegten Lademeter.",
      en: "FTL: price is for entire truck, regardless of load. LTL: price is per ton, pallet or occupied loading meter."
    }
  },
  {
    id: "pricing_comp_5",
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'metrul liniar' (loading meter) și cum se calculează?",
      de: "Was ist der 'Lademeter' und wie wird er berechnet?",
      en: "What is a 'loading meter' and how is it calculated?"
    },
    options: {
      ro: ["Unitate de măsură = 1 metru lungime din spațiul de încărcare (lățime remorcă ~2.4m) × înălțime utilizabilă", "Distanța totală de transport", "Greutatea mărfii în metri", "Numărul de paleți"],
      de: ["Maßeinheit = 1 Meter Länge des Laderaums (Anhängerbreite ~2,4m) × nutzbare Höhe", "Gesamttransportstrecke", "Frachtgewicht in Metern", "Palettenanzahl"],
      en: ["Unit of measure = 1 meter length of loading space (trailer width ~2.4m) × usable height", "Total transport distance", "Cargo weight in meters", "Number of pallets"]
    },
    correctIndex: 0,
    explanation: {
      ro: "1 LDM = ~1,750-2,000 kg greutate taxabilă. Europaletul standard (80×120cm) = 0.4 LDM dacă nu se stivuiește.",
      de: "1 LDM = ~1.750-2.000 kg abrechenbares Gewicht. Standardeuropalette (80×120cm) = 0,4 LDM wenn nicht stapelbar.",
      en: "1 LDM = ~1,750-2,000 kg chargeable weight. Standard europallet (80×120cm) = 0.4 LDM if not stackable."
    }
  },
  {
    id: "pricing_comp_6",
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'greutatea taxabilă' (chargeable weight)?",
      de: "Was ist das 'abrechnungsfähige Gewicht' (Chargeable Weight)?",
      en: "What is 'chargeable weight'?"
    },
    options: {
      ro: ["Maximul dintre greutatea reală și greutatea volumetrică - se taxează ce ocupă mai mult", "Întotdeauna greutatea reală", "Doar greutatea volumetrică", "Media celor două greutăți"],
      de: ["Maximum aus tatsächlichem und volumetrischem Gewicht - was mehr Platz braucht wird berechnet", "Immer tatsächliches Gewicht", "Nur volumetrisches Gewicht", "Durchschnitt beider Gewichte"],
      en: ["Maximum of actual weight and volumetric weight - what takes more space is charged", "Always actual weight", "Only volumetric weight", "Average of both weights"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Marfa ușoară dar voluminoasă se taxează pe volum. Marfa grea și compactă se taxează pe greutate. Formula: volum (m³) × factor.",
      de: "Leichte aber voluminöse Fracht wird nach Volumen berechnet. Schwere kompakte Fracht nach Gewicht. Formel: Volumen (m³) × Faktor.",
      en: "Light but bulky cargo is charged by volume. Heavy compact cargo is charged by weight. Formula: volume (m³) × factor."
    }
  },
  {
    id: "pricing_comp_7",
    difficultyLevel: 3,
    question: {
      ro: "Ce sunt 'accessorial charges' (costuri suplimentare)?",
      de: "Was sind 'Nebenkosten' (Accessorial Charges)?",
      en: "What are 'accessorial charges'?"
    },
    options: {
      ro: ["Taxe pentru servicii suplimentare: livrare cu lift, notificare prealabilă, timp de așteptare, weekend delivery", "Costuri incluse în prețul de bază", "Taxe guvernamentale obligatorii", "Costul asigurării de bază"],
      de: ["Gebühren für Zusatzleistungen: Lieferung mit Hebebühne, Voranmeldung, Wartezeit, Wochenendlieferung", "Im Basispreis enthaltene Kosten", "Obligatorische Regierungsgebühren", "Basisversicherungskosten"],
      en: ["Fees for additional services: liftgate delivery, prior notification, waiting time, weekend delivery", "Costs included in base price", "Mandatory government fees", "Basic insurance cost"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Accessorialele sunt esențiale pentru profitabilitate. Trebuie comunicate clar clientului și facturate corect.",
      de: "Nebenkosten sind essentiell für Profitabilität. Müssen dem Kunden klar kommuniziert und korrekt abgerechnet werden.",
      en: "Accessorials are essential for profitability. Must be clearly communicated to customer and correctly invoiced."
    }
  },
  {
    id: "pricing_comp_8",
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'demurrage' în transport?",
      de: "Was ist 'Standgeld' (Demurrage) im Transport?",
      en: "What is 'demurrage' in transport?"
    },
    options: {
      ro: ["Taxă pentru întârziere la încărcare/descărcare peste timpul gratuit alocat", "Cost de combustibil suplimentar", "Taxă pentru rută alternativă", "Preț pentru transport expres"],
      de: ["Gebühr für Verzögerung bei Be-/Entladung über die kostenlose Zeit hinaus", "Zusätzliche Kraftstoffkosten", "Gebühr für Alternativroute", "Preis für Expresstransport"],
      en: ["Fee for delay at loading/unloading beyond allocated free time", "Additional fuel cost", "Fee for alternative route", "Price for express transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Demurrage compensează costul camionului și șoferului în așteptare. Tipic: 1-2 ore gratuite, apoi ~30-50€/oră.",
      de: "Standgeld kompensiert Kosten für LKW und Fahrer im Wartestand. Typisch: 1-2 Stunden frei, dann ~30-50€/Stunde.",
      en: "Demurrage compensates cost of truck and driver waiting. Typical: 1-2 hours free, then ~€30-50/hour."
    }
  },
  {
    id: "pricing_comp_9",
    difficultyLevel: 3,
    question: {
      ro: "Ce factori influențează prețul unui transport internațional?",
      de: "Welche Faktoren beeinflussen den Preis eines internationalen Transports?",
      en: "What factors influence the price of an international transport?"
    },
    options: {
      ro: ["Distanță, greutate/volum, tip marfă, urgență, sezon, costuri vamale, taxe rutiere, curse de retur", "Doar distanța și greutatea", "Exclusiv tipul de camion", "Numai prețul combustibilului"],
      de: ["Entfernung, Gewicht/Volumen, Frachtart, Dringlichkeit, Saison, Zollkosten, Straßengebühren, Rückfahrten", "Nur Entfernung und Gewicht", "Ausschließlich LKW-Typ", "Nur Kraftstoffpreis"],
      en: ["Distance, weight/volume, cargo type, urgency, season, customs costs, road tolls, return trips", "Only distance and weight", "Exclusively truck type", "Only fuel price"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Prețul corect ia în calcul toate variabilele. Un transport 'simplu' poate deveni complex (și scump) dacă sunt restricții.",
      de: "Korrekter Preis berücksichtigt alle Variablen. Ein 'einfacher' Transport kann komplex (und teuer) werden wenn Beschränkungen bestehen.",
      en: "Correct price considers all variables. A 'simple' transport can become complex (and expensive) if restrictions exist."
    }
  },
  {
    id: "pricing_comp_10",
    difficultyLevel: 3,
    question: {
      ro: "Ce este un contract de tarifare pe termen lung și ce avantaje oferă?",
      de: "Was ist ein langfristiger Tarifvertrag und welche Vorteile bietet er?",
      en: "What is a long-term pricing contract and what advantages does it offer?"
    },
    options: {
      ro: ["Acord cu tarife fixe/formule pentru o perioadă; oferă predictibilitate pentru ambele părți", "Obligație de a folosi doar un transportator", "Contract fără posibilitate de modificare", "Preț mai mare decât spot"],
      de: ["Vereinbarung mit festen Tarifen/Formeln für einen Zeitraum; bietet Vorhersagbarkeit für beide Parteien", "Verpflichtung nur einen Transporteur zu nutzen", "Vertrag ohne Änderungsmöglichkeit", "Höherer Preis als Spot"],
      en: ["Agreement with fixed rates/formulas for a period; offers predictability for both parties", "Obligation to use only one carrier", "Contract without modification possibility", "Higher price than spot"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Contractele pe termen lung oferă stabilitate. Pot include clauze de ajustare (combustibil, inflație) și volume minime/maxime.",
      de: "Langzeitverträge bieten Stabilität. Können Anpassungsklauseln (Kraftstoff, Inflation) und Mindest-/Höchstvolumen enthalten.",
      en: "Long-term contracts offer stability. Can include adjustment clauses (fuel, inflation) and minimum/maximum volumes."
    }
  },
  
  // Level 4 Questions (10)
  {
    id: "pricing_comp_11",
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi profitabilitatea unei curse de transport?",
      de: "Wie berechnen Sie die Rentabilität einer Transportfahrt?",
      en: "How do you calculate the profitability of a transport run?"
    },
    options: {
      ro: ["Venit total - (costuri variabile km + costuri timp + costuri fixe alocate) = marja brută; marja/venit = %", "Doar venit minus combustibil", "Exclusiv comparație cu prețul pieței", "Se estimează fără calcul detaliat"],
      de: ["Gesamteinnahmen - (variable km-Kosten + Zeitkosten + zugeordnete Fixkosten) = Bruttomarge; Marge/Einnahmen = %", "Nur Einnahmen minus Kraftstoff", "Ausschließlich Vergleich mit Marktpreis", "Schätzung ohne detaillierte Berechnung"],
      en: ["Total revenue - (variable km costs + time costs + allocated fixed costs) = gross margin; margin/revenue = %", "Only revenue minus fuel", "Exclusively comparison with market price", "Estimated without detailed calculation"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Fiecare cursă trebuie analizată individual. O cursă aparent profitabilă poate fi pe pierdere dacă nu ia în calcul toate costurile.",
      de: "Jede Fahrt muss individuell analysiert werden. Eine scheinbar profitable Fahrt kann verlustbringend sein wenn nicht alle Kosten berücksichtigt werden.",
      en: "Each run must be analyzed individually. An apparently profitable run can be loss-making if all costs aren't considered."
    }
  },
  {
    id: "pricing_comp_12",
    difficultyLevel: 4,
    question: {
      ro: "Cum influențează cererea și oferta sezoniera prețurile de transport?",
      de: "Wie beeinflussen saisonale Nachfrage und Angebot die Transportpreise?",
      en: "How do seasonal demand and supply influence transport prices?"
    },
    options: {
      ro: ["Peak seasons (Q4, recoltă) cresc prețurile spot cu 30-50%; low season poate duce la reduceri pentru menținerea utilizării", "Prețurile sunt constante tot anul", "Doar combustibilul afectează sezonier", "Sezonalitatea afectează doar transportul aerian"],
      de: ["Hochsaisons (Q4, Ernte) erhöhen Spotpreise um 30-50%; Nebensaison kann zu Rabatten zur Auslastungserhaltung führen", "Preise sind ganzjährig konstant", "Nur Kraftstoff beeinflusst saisonal", "Saisonalität betrifft nur Luftfracht"],
      en: ["Peak seasons (Q4, harvest) increase spot prices by 30-50%; low season can lead to discounts to maintain utilization", "Prices are constant all year", "Only fuel affects seasonally", "Seasonality only affects air transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Piața transportului e dinamică. Clienții cu volume constante pot negocia rate stabile; cei cu volume sezoniere plătesc premium în peak.",
      de: "Transportmarkt ist dynamisch. Kunden mit konstantem Volumen können stabile Raten aushandeln; saisonale Volumenkunden zahlen Premium in Spitzenzeiten.",
      en: "Transport market is dynamic. Customers with constant volumes can negotiate stable rates; those with seasonal volumes pay premium in peak."
    }
  },
  {
    id: "pricing_comp_13",
    difficultyLevel: 4,
    question: {
      ro: "Cum structurezi o ofertă de preț pentru un client nou cu volume regulate?",
      de: "Wie strukturieren Sie ein Preisangebot für einen neuen Kunden mit regelmäßigem Volumen?",
      en: "How do you structure a price offer for a new customer with regular volumes?"
    },
    options: {
      ro: ["Analizezi rute, volume, sezonalitate, cerințe speciale; propui tarif de bază + mecanisme de ajustare + SLA-uri", "Oferi cel mai mic preț posibil", "Copiezi tarifele de la alți clienți", "Aștepți ca clientul să propună prețul"],
      de: ["Routen, Volumina, Saisonalität, spezielle Anforderungen analysieren; Basistarif + Anpassungsmechanismen + SLAs vorschlagen", "Niedrigstmöglichen Preis anbieten", "Tarife von anderen Kunden kopieren", "Warten bis Kunde Preis vorschlägt"],
      en: ["Analyze routes, volumes, seasonality, special requirements; propose base rate + adjustment mechanisms + SLAs", "Offer lowest possible price", "Copy rates from other customers", "Wait for customer to propose price"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Oferta profesională: prețuri pe relații, condiții clare, clauze de ajustare, termeni de plată, penalități. Win-win pe termen lung.",
      de: "Professionelles Angebot: Preise pro Relation, klare Bedingungen, Anpassungsklauseln, Zahlungsbedingungen, Strafen. Win-win langfristig.",
      en: "Professional offer: prices per lane, clear conditions, adjustment clauses, payment terms, penalties. Win-win long-term."
    }
  },
  {
    id: "pricing_comp_14",
    difficultyLevel: 4,
    question: {
      ro: "Ce este 'lane pricing' și cum diferă de tarifarea generală?",
      de: "Was ist 'Lane Pricing' und wie unterscheidet es sich von allgemeiner Tarifierung?",
      en: "What is 'lane pricing' and how does it differ from general pricing?"
    },
    options: {
      ro: ["Tarife specifice per relație (origine-destinație) bazate pe caracteristicile acelei rute vs tarif general per km", "Tarif pentru banda de urgență", "Prețuri pentru transport maritim", "Tarifare doar pentru autostrăzi"],
      de: ["Spezifische Tarife pro Relation (Ursprung-Ziel) basierend auf Routencharakteristika vs allgemeiner km-Tarif", "Tarif für Notfallspur", "Preise für Seefracht", "Tarifierung nur für Autobahnen"],
      en: ["Specific rates per lane (origin-destination) based on that route's characteristics vs general per-km rate", "Tariff for emergency lane", "Prices for sea transport", "Pricing only for highways"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Lane pricing reflectă realitatea: unele rute au retur ușor, altele nu. Prețul poate varia semnificativ per direcție.",
      de: "Lane Pricing reflektiert Realität: manche Routen haben einfache Rückfahrt, andere nicht. Preis kann pro Richtung erheblich variieren.",
      en: "Lane pricing reflects reality: some routes have easy return, others don't. Price can vary significantly per direction."
    }
  },
  {
    id: "pricing_comp_15",
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi o cerere de reducere de preț de la un client important?",
      de: "Wie handhaben Sie eine Preisreduzierungsanfrage von einem wichtigen Kunden?",
      en: "How do you handle a price reduction request from an important customer?"
    },
    options: {
      ro: ["Analizezi profitabilitatea actuală, evaluezi alternativele, negociezi contra-ofertă bazată pe volum/commitment, nu reduci fără valoare în schimb", "Accepți orice reducere pentru a păstra clientul", "Refuzi categoric orice negociere", "Crești prețul în secret pe alte linii"],
      de: ["Aktuelle Profitabilität analysieren, Alternativen bewerten, Gegenangebot basierend auf Volumen/Commitment verhandeln, nicht ohne Gegenwert reduzieren", "Jede Reduzierung akzeptieren um Kunden zu halten", "Jede Verhandlung kategorisch ablehnen", "Preis heimlich auf anderen Linien erhöhen"],
      en: ["Analyze current profitability, evaluate alternatives, negotiate counter-offer based on volume/commitment, don't reduce without value in return", "Accept any reduction to keep customer", "Categorically refuse any negotiation", "Secretly increase price on other lines"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Negocierea e normală. Cheia: înțelege motivația clientului, oferă valoare (nu doar preț), păstrează relația profitabilă pentru ambele părți.",
      de: "Verhandlung ist normal. Schlüssel: Kundenmotivation verstehen, Wert bieten (nicht nur Preis), Beziehung für beide Seiten profitabel halten.",
      en: "Negotiation is normal. Key: understand customer motivation, offer value (not just price), keep relationship profitable for both parties."
    }
  },
  {
    id: "pricing_comp_16",
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi impactul curselor de retur goale asupra profitabilității?",
      de: "Wie berechnen Sie den Einfluss von Leerfahrten auf die Rentabilität?",
      en: "How do you calculate the impact of empty return trips on profitability?"
    },
    options: {
      ro: ["Costul returului gol se adaugă la cursa încărcată; dacă găsești marfă de retur, marja crește proporțional", "Returul gol nu are cost", "Se calculează separat, nu afectează prețul", "Clientul plătește automat pentru retur"],
      de: ["Leerfahrtkosten werden zur beladenen Fahrt addiert; bei Rückfracht steigt Marge proportional", "Leerfahrt hat keine Kosten", "Wird separat berechnet, beeinflusst Preis nicht", "Kunde zahlt automatisch für Rückfahrt"],
      en: ["Empty return cost is added to loaded trip; if you find return cargo, margin increases proportionally", "Empty return has no cost", "Calculated separately, doesn't affect price", "Customer automatically pays for return"]
    },
    correctIndex: 0,
    explanation: {
      ro: "O cursă dus-întors full-empty costă dublu per cursă încărcată. Găsirea mărfii de retur poate reduce efectiv costul per km cu 40-50%.",
      de: "Eine Hin-Rückfahrt voll-leer kostet doppelt pro beladener Fahrt. Rückfracht finden kann Kosten pro km effektiv um 40-50% senken.",
      en: "A round-trip full-empty costs double per loaded trip. Finding return cargo can effectively reduce cost per km by 40-50%."
    }
  },
  {
    id: "pricing_comp_17",
    difficultyLevel: 4,
    question: {
      ro: "Care sunt metodele de stabilire a prețului pentru transport frigorific vs standard?",
      de: "Was sind die Methoden zur Preisfestlegung für Kühl- vs Standardtransport?",
      en: "What are the methods for setting price for refrigerated vs standard transport?"
    },
    options: {
      ro: ["Frigorific: bază + premiu pentru echipament + consum combustibil agregat + risc temperatură; poate fi 30-50% mai scump", "Prețurile sunt identice", "Frigoriferul e întotdeauna mai ieftin", "Doar distanța diferă"],
      de: ["Kühl: Basis + Prämie für Ausrüstung + Aggregat-Kraftstoffverbrauch + Temperaturrisiko; kann 30-50% teurer sein", "Preise sind identisch", "Kühl ist immer billiger", "Nur Entfernung unterscheidet sich"],
      en: ["Refrigerated: base + premium for equipment + genset fuel consumption + temperature risk; can be 30-50% more expensive", "Prices are identical", "Refrigerated is always cheaper", "Only distance differs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Frigoriferul: investiție mai mare în echipament, consum combustibil pentru agregat, responsabilitate pentru menținere temperatură, curățare specială.",
      de: "Kühl: höhere Ausrüstungsinvestition, Kraftstoffverbrauch für Aggregat, Verantwortung für Temperaturhaltung, spezielle Reinigung.",
      en: "Refrigerated: higher equipment investment, fuel consumption for genset, responsibility for temperature maintenance, special cleaning."
    }
  },
  {
    id: "pricing_comp_18",
    difficultyLevel: 4,
    question: {
      ro: "Cum influențează digitalizarea și platformele de freight prețurile din piață?",
      de: "Wie beeinflussen Digitalisierung und Frachtplattformen die Marktpreise?",
      en: "How do digitalization and freight platforms influence market prices?"
    },
    options: {
      ro: ["Transparență mai mare = presiune pe marje; eficiență crescută = reducere costuri operaționale; matching mai bun = utilizare mai bună", "Platformele nu afectează prețurile", "Digitalizarea crește întotdeauna prețurile", "Doar marii operatori beneficiază"],
      de: ["Mehr Transparenz = Margendruck; erhöhte Effizienz = reduzierte Betriebskosten; besseres Matching = bessere Auslastung", "Plattformen beeinflussen Preise nicht", "Digitalisierung erhöht immer Preise", "Nur große Betreiber profitieren"],
      en: ["More transparency = pressure on margins; increased efficiency = reduced operating costs; better matching = better utilization", "Platforms don't affect prices", "Digitalization always increases prices", "Only large operators benefit"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Platformele digitale schimbă dinamica pieței. Cine se adaptează beneficiază de eficiență; cine nu, pierde din cauza presiunii pe preț.",
      de: "Digitale Plattformen ändern Marktdynamik. Wer sich anpasst profitiert von Effizienz; wer nicht, verliert durch Preisdruck.",
      en: "Digital platforms change market dynamics. Who adapts benefits from efficiency; who doesn't, loses due to price pressure."
    }
  },
  {
    id: "pricing_comp_19",
    difficultyLevel: 4,
    question: {
      ro: "Ce este 'dead freight' și când se aplică?",
      de: "Was ist 'Dead Freight' und wann wird es angewendet?",
      en: "What is 'dead freight' and when does it apply?"
    },
    options: {
      ro: ["Penalitate pentru spațiul rezervat dar neutilizat de client; compensează transportatorul pentru capacitatea nefolosită", "Cost pentru marfă perisabilă", "Taxă pentru transport de animale", "Penalitate pentru întârziere la livrare"],
      de: ["Strafe für reservierten aber vom Kunden nicht genutzten Raum; kompensiert Transporteur für ungenutzte Kapazität", "Kosten für verderbliche Fracht", "Gebühr für Tiertransport", "Strafe für Lieferverzögerung"],
      en: ["Penalty for space booked but not used by customer; compensates carrier for unused capacity", "Cost for perishable freight", "Fee for animal transport", "Penalty for delivery delay"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Dead freight e esențial pentru protecția transportatorului. Dacă clientul rezervă un camion și anulează/subîncarcă, costul e suportat.",
      de: "Dead Freight ist essentiell für Transporteurschutz. Wenn Kunde LKW reserviert und storniert/unterlädt, werden Kosten getragen.",
      en: "Dead freight is essential for carrier protection. If customer books a truck and cancels/underloads, cost is borne."
    }
  },
  {
    id: "pricing_comp_20",
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi tarifarea pentru transport de mărfuri periculoase (ADR)?",
      de: "Wie handhaben Sie die Tarifierung für Gefahrguttransport (ADR)?",
      en: "How do you handle pricing for dangerous goods transport (ADR)?"
    },
    options: {
      ro: ["Suprataxă ADR bazată pe clasă de pericol, cerințe echipament, restricții rute, asigurare suplimentară, training șoferi", "Același preț ca transportul normal", "ADR e întotdeauna gratuit", "Doar combustibilul special se taxează"],
      de: ["ADR-Zuschlag basierend auf Gefahrenklasse, Ausrüstungsanforderungen, Routenbeschränkungen, Zusatzversicherung, Fahrerschulung", "Gleicher Preis wie Normaltransport", "ADR ist immer kostenlos", "Nur Spezialkraftstoff wird berechnet"],
      en: ["ADR surcharge based on hazard class, equipment requirements, route restrictions, additional insurance, driver training", "Same price as normal transport", "ADR is always free", "Only special fuel is charged"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ADR adaugă complexitate și risc. Prețul reflectă: echipament special, restricții (tuneluri, weekend), asigurare majorată, calificare șofer.",
      de: "ADR fügt Komplexität und Risiko hinzu. Preis reflektiert: Spezialausrüstung, Beschränkungen (Tunnel, Wochenende), erhöhte Versicherung, Fahrerqualifikation.",
      en: "ADR adds complexity and risk. Price reflects: special equipment, restrictions (tunnels, weekend), increased insurance, driver qualification."
    }
  },
  
  // Level 5 Questions (10)
  {
    id: "pricing_comp_21",
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Client solicită tarif fix pe 1 an pentru 200 curse/lună Germania-România. Cum structurezi oferta?",
      de: "Szenario: Kunde fordert Festtarif für 1 Jahr für 200 Fahrten/Monat Deutschland-Rumänien. Wie strukturieren Sie das Angebot?",
      en: "Scenario: Customer requests fixed rate for 1 year for 200 trips/month Germany-Romania. How do you structure the offer?"
    },
    options: {
      ro: ["Analiză costuri per relație, clauze FSC și toll adjustment, volum commitment cu flexibilitate ±15%, review trimestrial, SLA-uri clare", "Tarif fix fără ajustări tot anul", "Refuzi contracte pe termen lung", "Copiezi prețul spot actual"],
      de: ["Kostenanalyse pro Relation, FSC- und Mautanpassungsklauseln, Volumen-Commitment mit Flexibilität ±15%, vierteljährliche Überprüfung, klare SLAs", "Festtarif ohne Anpassungen ganzes Jahr", "Langzeitverträge ablehnen", "Aktuellen Spotpreis kopieren"],
      en: ["Cost analysis per lane, FSC and toll adjustment clauses, volume commitment with ±15% flexibility, quarterly review, clear SLAs", "Fixed rate without adjustments all year", "Refuse long-term contracts", "Copy current spot price"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Contract mare = risc mare dacă nu e structurat corect. Mecanismele de ajustare protejează de volatilitatea combustibilului și inflație.",
      de: "Großer Vertrag = großes Risiko wenn nicht korrekt strukturiert. Anpassungsmechanismen schützen vor Kraftstoffvolatilität und Inflation.",
      en: "Large contract = large risk if not correctly structured. Adjustment mechanisms protect from fuel volatility and inflation."
    }
  },
  {
    id: "pricing_comp_22",
    difficultyLevel: 5,
    question: {
      ro: "Cum calculezi 'break-even' pentru o relație de transport nouă?",
      de: "Wie berechnen Sie den 'Break-even' für eine neue Transportrelation?",
      en: "How do you calculate 'break-even' for a new transport lane?"
    },
    options: {
      ro: ["(Costuri fixe alocate + costuri variabile totale) / nr. curse = cost minim per cursă; orice peste = profit", "Nu există break-even în transport", "Se calculează doar la nivel de companie", "Break-even e fix la 10% marja"],
      de: ["(Zugeordnete Fixkosten + variable Gesamtkosten) / Fahrtenanzahl = Mindestkosten pro Fahrt; alles darüber = Gewinn", "Es gibt keinen Break-even im Transport", "Wird nur auf Unternehmensebene berechnet", "Break-even ist fix bei 10% Marge"],
      en: ["(Allocated fixed costs + total variable costs) / number of trips = minimum cost per trip; anything above = profit", "There's no break-even in transport", "Calculated only at company level", "Break-even is fixed at 10% margin"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Break-even per relație permite decizii informate: acceptăm marfă sub cost pentru a acoperi returul gol? Răspunsul depinde de alternative.",
      de: "Break-even pro Relation ermöglicht informierte Entscheidungen: akzeptieren wir Fracht unter Kosten um Leerfahrt zu decken? Antwort hängt von Alternativen ab.",
      en: "Break-even per lane enables informed decisions: do we accept cargo below cost to cover empty return? Answer depends on alternatives."
    }
  },
  {
    id: "pricing_comp_23",
    difficultyLevel: 5,
    question: {
      ro: "Care sunt strategiile de pricing pentru a crește utilizarea în perioadele de cerere scăzută?",
      de: "Was sind Preisstrategien zur Steigerung der Auslastung in Niedrigsaisonzeiten?",
      en: "What are pricing strategies to increase utilization in low-demand periods?"
    },
    options: {
      ro: ["Prețuri dinamice, oferte proactive clienți pentru stoc în avans, parteneriate pentru rute complementare, servicii value-added", "Menții prețurile fixe indiferent de cerere", "Oprești operațiunile în low season", "Reduci prețurile la zero pentru volum"],
      de: ["Dynamische Preise, proaktive Angebote für Vorab-Lagerkunden, Partnerschaften für komplementäre Routen, Value-Added-Services", "Festpreise unabhängig von Nachfrage halten", "Betrieb in Nebensaison einstellen", "Preise auf null für Volumen reduzieren"],
      en: ["Dynamic pricing, proactive offers to customers for advance stock, partnerships for complementary routes, value-added services", "Keep fixed prices regardless of demand", "Stop operations in low season", "Reduce prices to zero for volume"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Yield management în transport: echilibrare între utilizare maximă și profitabilitate. Prețul minim = cost variabil (contribuție la fix).",
      de: "Yield Management im Transport: Balance zwischen maximaler Auslastung und Profitabilität. Mindestpreis = variable Kosten (Fixkostenbeitrag).",
      en: "Yield management in transport: balance between maximum utilization and profitability. Minimum price = variable cost (contribution to fixed)."
    }
  },
  {
    id: "pricing_comp_24",
    difficultyLevel: 5,
    question: {
      ro: "Cum negociezi tarifele cu subcontractorii pentru a menține marja proprie?",
      de: "Wie verhandeln Sie Tarife mit Subunternehmern um eigene Marge zu halten?",
      en: "How do you negotiate rates with subcontractors to maintain own margin?"
    },
    options: {
      ro: ["Înțelegi costurile lor reale, oferi volum consistent, plătești la timp, construiești relații; nu strângi până la falimentarea lor", "Alegi întotdeauna cel mai ieftin", "Plătești cât cer fără negociere", "Folosești amenințări pentru reduceri"],
      de: ["Ihre realen Kosten verstehen, konsistentes Volumen anbieten, pünktlich zahlen, Beziehungen aufbauen; nicht bis zu ihrer Insolvenz drücken", "Immer den billigsten wählen", "Zahlen was sie verlangen ohne Verhandlung", "Drohungen für Rabatte nutzen"],
      en: ["Understand their real costs, offer consistent volume, pay on time, build relationships; don't squeeze them to bankruptcy", "Always choose cheapest", "Pay what they ask without negotiation", "Use threats for discounts"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Subcontractorii sunt parteneri, nu adversari. Dacă îi falimentezi cu prețuri prea mici, rămâi fără capacitate când ai nevoie.",
      de: "Subunternehmer sind Partner, keine Gegner. Wenn Sie sie mit zu niedrigen Preisen in den Ruin treiben, fehlt Kapazität wenn Sie sie brauchen.",
      en: "Subcontractors are partners, not adversaries. If you bankrupt them with too-low prices, you'll lack capacity when you need it."
    }
  },
  {
    id: "pricing_comp_25",
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Prețul combustibilului crește brusc cu 30%. Contractele tale nu au clauză FSC. Ce faci?",
      de: "Szenario: Kraftstoffpreis steigt plötzlich um 30%. Ihre Verträge haben keine FSC-Klausel. Was tun Sie?",
      en: "Scenario: Fuel price suddenly increases by 30%. Your contracts have no FSC clause. What do you do?"
    },
    options: {
      ro: ["Comunici transparent cu clienții, propui renegociere, absorbi parțial dacă posibil, implementezi FSC pentru contracte viitoare", "Continui la vechile prețuri și pierzi bani", "Anulezi toate contractele unilateral", "Refuzi să mai efectuezi transporturi"],
      de: ["Transparent mit Kunden kommunizieren, Neuverhandlung vorschlagen, teilweise absorbieren wenn möglich, FSC für zukünftige Verträge implementieren", "Zu alten Preisen weitermachen und Geld verlieren", "Alle Verträge einseitig kündigen", "Transporte verweigern"],
      en: ["Communicate transparently with customers, propose renegotiation, partially absorb if possible, implement FSC for future contracts", "Continue at old prices and lose money", "Unilaterally cancel all contracts", "Refuse to perform transports"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Criza necesită parteneriat. Majoritatea clienților înțeleg situații de forță majoră. Lecție: întotdeauna include clauze de ajustare în contracte.",
      de: "Krise erfordert Partnerschaft. Die meisten Kunden verstehen Situationen höherer Gewalt. Lektion: immer Anpassungsklauseln in Verträge aufnehmen.",
      en: "Crisis requires partnership. Most customers understand force majeure situations. Lesson: always include adjustment clauses in contracts."
    }
  },
  {
    id: "pricing_comp_26",
    difficultyLevel: 5,
    question: {
      ro: "Cum evaluezi dacă să accepți o comandă mare la un preț sub costul normal?",
      de: "Wie bewerten Sie ob Sie einen großen Auftrag unter Normalkosten annehmen sollen?",
      en: "How do you evaluate whether to accept a large order at below-normal cost?"
    },
    options: {
      ro: ["Analizezi: acoperă costurile variabile? umple capacitate altfel goală? e client strategic? ce pierd dacă refuz?", "Refuzi orice sub costul complet", "Accepți orice pentru volum", "Decizia se ia fără analiză"],
      de: ["Analysieren: deckt es variable Kosten? füllt es sonst leere Kapazität? strategischer Kunde? was verliere ich bei Ablehnung?", "Alles unter Vollkosten ablehnen", "Alles für Volumen akzeptieren", "Entscheidung ohne Analyse treffen"],
      en: ["Analyze: does it cover variable costs? fills otherwise empty capacity? strategic customer? what do I lose if I refuse?", "Refuse anything below full cost", "Accept anything for volume", "Decision made without analysis"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Contribuție marginală: dacă prețul acoperă variabilele și contribuie la fix, poate fi acceptabil temporar. Dar nu deveni dependent de astfel de afaceri.",
      de: "Grenzbeitrag: wenn Preis variable Kosten deckt und zu Fixkosten beiträgt, kann es vorübergehend akzeptabel sein. Aber nicht von solchen Geschäften abhängig werden.",
      en: "Marginal contribution: if price covers variables and contributes to fixed, it may be temporarily acceptable. But don't become dependent on such business."
    }
  },
  {
    id: "pricing_comp_27",
    difficultyLevel: 5,
    question: {
      ro: "Care sunt riscurile și oportunitățile tarifării bazate pe performanță (gain-sharing)?",
      de: "Was sind die Risiken und Chancen leistungsbasierter Tarifierung (Gain-Sharing)?",
      en: "What are the risks and opportunities of performance-based pricing (gain-sharing)?"
    },
    options: {
      ro: ["Oportunități: aliniere interese, încurajează inovație; Riscuri: măsurare complexă, dispute pe calcul, investiție fără garanție", "Gain-sharing nu funcționează în transport", "Doar riscuri, nicio oportunitate", "E identic cu tarifarea fixă"],
      de: ["Chancen: Interessenausrichtung, fördert Innovation; Risiken: komplexe Messung, Berechnungsstreitigkeiten, Investition ohne Garantie", "Gain-Sharing funktioniert im Transport nicht", "Nur Risiken, keine Chancen", "Identisch mit Festtarifierung"],
      en: ["Opportunities: interest alignment, encourages innovation; Risks: complex measurement, calculation disputes, investment without guarantee", "Gain-sharing doesn't work in transport", "Only risks, no opportunities", "Identical to fixed pricing"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Gain-sharing: parteneriat real. Funcționează când KPI-urile sunt clare, măsurabile și acceptate de ambele părți. Necesită încredere.",
      de: "Gain-Sharing: echte Partnerschaft. Funktioniert wenn KPIs klar, messbar und von beiden Parteien akzeptiert sind. Erfordert Vertrauen.",
      en: "Gain-sharing: real partnership. Works when KPIs are clear, measurable and accepted by both parties. Requires trust."
    }
  },
  {
    id: "pricing_comp_28",
    difficultyLevel: 5,
    question: {
      ro: "Cum integrezi costurile de sustenabilitate/ESG în prețuri?",
      de: "Wie integrieren Sie Nachhaltigkeits-/ESG-Kosten in Preise?",
      en: "How do you integrate sustainability/ESG costs into prices?"
    },
    options: {
      ro: ["Suprataxă transparentă pentru vehicule Euro 6/electrice, compensare CO2 opțională, premium pentru opțiuni low-carbon", "Sustenabilitatea nu afectează prețurile", "Clienții nu plătesc pentru ESG", "Se ascunde în prețul de bază"],
      de: ["Transparenter Zuschlag für Euro 6/Elektrofahrzeuge, optionale CO2-Kompensation, Premium für Low-Carbon-Optionen", "Nachhaltigkeit beeinflusst Preise nicht", "Kunden zahlen nicht für ESG", "Im Basispreis verstecken"],
      en: ["Transparent surcharge for Euro 6/electric vehicles, optional CO2 offset, premium for low-carbon options", "Sustainability doesn't affect prices", "Customers don't pay for ESG", "Hide in base price"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ESG devine criteriu de cumpărare. Transparența în costul sustenabilității permite clienților să aleagă și să raporteze corect Scope 3 emissions.",
      de: "ESG wird Kaufkriterium. Transparenz bei Nachhaltigkeitskosten ermöglicht Kunden richtige Wahl und korrektes Scope 3 Emissions-Reporting.",
      en: "ESG is becoming a purchasing criterion. Transparency in sustainability cost allows customers to choose and correctly report Scope 3 emissions."
    }
  },
  {
    id: "pricing_comp_29",
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Concurentul principal reduce prețurile cu 20% pe relația ta principală. Strategia ta?",
      de: "Szenario: Hauptkonkurrent senkt Preise um 20% auf Ihrer Hauptrelation. Ihre Strategie?",
      en: "Scenario: Main competitor reduces prices by 20% on your main lane. Your strategy?"
    },
    options: {
      ro: ["Analizezi dacă e sustenabil pentru ei, comunici valoarea adăugată cu clienții, diferențiezi prin servicii, nu intri în war de prețuri distructiv", "Reduci imediat cu 25%", "Ignori și continui ca înainte", "Ieși de pe acea relație complet"],
      de: ["Analysieren ob es für sie nachhaltig ist, Mehrwert mit Kunden kommunizieren, durch Service differenzieren, nicht in destruktiven Preiskrieg eintreten", "Sofort um 25% reduzieren", "Ignorieren und wie bisher weitermachen", "Relation komplett verlassen"],
      en: ["Analyze if it's sustainable for them, communicate added value with customers, differentiate through service, don't enter destructive price war", "Immediately reduce by 25%", "Ignore and continue as before", "Exit that lane completely"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Războiul prețurilor rar are câștigători. Analiza: prețul lor e sustenabil? dacă nu, vor reveni. Între timp, protejează relațiile cheie prin valoare, nu doar preț.",
      de: "Preiskriege haben selten Gewinner. Analyse: ist ihr Preis nachhaltig? wenn nicht, werden sie zurückkehren. Zwischenzeitlich Schlüsselbeziehungen durch Wert schützen, nicht nur Preis.",
      en: "Price wars rarely have winners. Analysis: is their price sustainable? if not, they'll return. Meanwhile, protect key relationships through value, not just price."
    }
  },
  {
    id: "pricing_comp_30",
    difficultyLevel: 5,
    question: {
      ro: "Care sunt tendințele viitoare în tarifarea transportului și cum te pregătești?",
      de: "Was sind zukünftige Trends in der Transporttarifierung und wie bereiten Sie sich vor?",
      en: "What are future trends in transport pricing and how do you prepare?"
    },
    options: {
      ro: ["Dynamic pricing în timp real, contracte smart, pricing bazat pe risc și sustainability, transparență totală prin digitalizare", "Prețurile vor rămâne fixe ca acum", "Doar marii operatori vor face pricing digital", "Tendințele nu afectează transportul rutier"],
      de: ["Dynamic Pricing in Echtzeit, Smart Contracts, risiko- und nachhaltigkeitsbasierte Preise, totale Transparenz durch Digitalisierung", "Preise bleiben fix wie jetzt", "Nur große Betreiber machen digitales Pricing", "Trends beeinflussen Straßentransport nicht"],
      en: ["Real-time dynamic pricing, smart contracts, risk and sustainability-based pricing, total transparency through digitalization", "Prices will remain fixed as now", "Only large operators will do digital pricing", "Trends don't affect road transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Viitorul: prețuri în timp real bazate pe date, AI pentru optimizare, blockchain pentru transparență, premium pentru ESG. Adaptarea e obligatorie.",
      de: "Zukunft: Echtzeitpreise basierend auf Daten, KI für Optimierung, Blockchain für Transparenz, Premium für ESG. Anpassung ist obligatorisch.",
      en: "Future: real-time prices based on data, AI for optimization, blockchain for transparency, premium for ESG. Adaptation is mandatory."
    }
  }
];
