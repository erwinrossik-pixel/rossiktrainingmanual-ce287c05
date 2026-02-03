import { TranslatedQuizQuestion } from "@/data/quizTranslations";

export const incotermsComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce sunt Incoterms și cine le publică?",
      de: "Was sind Incoterms und wer veröffentlicht sie?",
      en: "What are Incoterms and who publishes them?"
    },
    options: {
      ro: ["Reguli internaționale pentru interpretarea termenilor comerciali, publicate de Camera Internațională de Comerț (ICC)", "Legi obligatorii UE pentru transport", "Standarde ISO pentru ambalare", "Reglementări vamale ONU"],
      de: ["Internationale Regeln zur Auslegung von Handelsklauseln, veröffentlicht von der Internationalen Handelskammer (ICC)", "Obligatorische EU-Transportgesetze", "ISO-Verpackungsstandards", "UN-Zollvorschriften"],
      en: ["International rules for interpretation of trade terms, published by International Chamber of Commerce (ICC)", "Mandatory EU transport laws", "ISO packaging standards", "UN customs regulations"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Incoterms (International Commercial Terms) standardizează global înțelegerea obligațiilor vânzător-cumpărător în comerțul internațional.",
      de: "Incoterms (International Commercial Terms) standardisieren global das Verständnis der Verkäufer-Käufer-Pflichten im internationalen Handel.",
      en: "Incoterms (International Commercial Terms) globally standardize understanding of seller-buyer obligations in international trade."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care este cea mai recentă versiune a Incoterms și câți termeni conține?",
      de: "Was ist die aktuellste Version der Incoterms und wie viele Klauseln enthält sie?",
      en: "What is the most recent version of Incoterms and how many terms does it contain?"
    },
    options: {
      ro: ["Incoterms 2020 cu 11 termeni", "Incoterms 2015 cu 13 termeni", "Incoterms 2010 cu 11 termeni", "Incoterms 2025 cu 15 termeni"],
      de: ["Incoterms 2020 mit 11 Klauseln", "Incoterms 2015 mit 13 Klauseln", "Incoterms 2010 mit 11 Klauseln", "Incoterms 2025 mit 15 Klauseln"],
      en: ["Incoterms 2020 with 11 terms", "Incoterms 2015 with 13 terms", "Incoterms 2010 with 11 terms", "Incoterms 2025 with 15 terms"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Incoterms 2020 a intrat în vigoare la 1 ianuarie 2020. Are 11 termeni: 7 pentru orice mod de transport și 4 doar pentru transport maritim.",
      de: "Incoterms 2020 trat am 1. Januar 2020 in Kraft. Hat 11 Klauseln: 7 für jeden Verkehrsträger und 4 nur für Seetransport.",
      en: "Incoterms 2020 came into effect on January 1, 2020. Has 11 terms: 7 for any mode of transport and 4 for sea transport only."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă EXW (Ex Works)?",
      de: "Was bedeutet EXW (Ex Works)?",
      en: "What does EXW (Ex Works) mean?"
    },
    options: {
      ro: ["Vânzătorul pune marfa la dispoziție în locația sa; cumpărătorul preia toate costurile și riscurile de acolo", "Vânzătorul livrează la destinația finală", "Marfa e livrată la bordul navei", "Vânzătorul plătește transportul și asigurarea"],
      de: ["Verkäufer stellt Ware an seinem Standort bereit; Käufer übernimmt alle Kosten und Risiken von dort", "Verkäufer liefert zum Endziel", "Ware wird an Bord des Schiffes geliefert", "Verkäufer zahlt Transport und Versicherung"],
      en: ["Seller makes goods available at their location; buyer takes all costs and risks from there", "Seller delivers to final destination", "Goods delivered on board ship", "Seller pays transport and insurance"]
    },
    correctIndex: 0,
    explanation: {
      ro: "EXW = obligație minimă pentru vânzător. Cumpărătorul organizează și plătește tot: export, transport, import, asigurare.",
      de: "EXW = minimale Verkäuferverpflichtung. Käufer organisiert und zahlt alles: Export, Transport, Import, Versicherung.",
      en: "EXW = minimum seller obligation. Buyer organizes and pays everything: export, transport, import, insurance."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă DAP (Delivered at Place)?",
      de: "Was bedeutet DAP (Delivered at Place)?",
      en: "What does DAP (Delivered at Place) mean?"
    },
    options: {
      ro: ["Vânzătorul livrează marfa la locul convenit, gata pentru descărcare; cumpărătorul face vama de import și descarcă", "Vânzătorul doar pregătește marfa pentru export", "Cumpărătorul organizează tot transportul", "Vânzătorul plătește și taxele de import"],
      de: ["Verkäufer liefert Ware am vereinbarten Ort, bereit zur Entladung; Käufer erledigt Einfuhrzoll und entlädt", "Verkäufer bereitet nur Ware für Export vor", "Käufer organisiert gesamten Transport", "Verkäufer zahlt auch Einfuhrzölle"],
      en: ["Seller delivers goods at agreed place, ready for unloading; buyer does import customs and unloads", "Seller only prepares goods for export", "Buyer organizes all transport", "Seller also pays import duties"]
    },
    correctIndex: 0,
    explanation: {
      ro: "DAP: vânzătorul suportă costurile și riscurile până la destinație. Riscul trece la cumpărător când marfa e disponibilă pentru descărcare.",
      de: "DAP: Verkäufer trägt Kosten und Risiken bis zum Ziel. Risiko geht auf Käufer über wenn Ware zur Entladung bereit ist.",
      en: "DAP: seller bears costs and risks until destination. Risk transfers to buyer when goods are available for unloading."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă DDP (Delivered Duty Paid)?",
      de: "Was bedeutet DDP (Delivered Duty Paid)?",
      en: "What does DDP (Delivered Duty Paid) mean?"
    },
    options: {
      ro: ["Vânzătorul livrează cu toate taxele plătite, inclusiv import - obligație maximă pentru vânzător", "Doar taxele de export sunt plătite", "Cumpărătorul plătește taxele vamale", "Termenul se aplică doar pentru transport maritim"],
      de: ["Verkäufer liefert mit allen bezahlten Abgaben, einschließlich Import - maximale Verkäuferverpflichtung", "Nur Exportabgaben sind bezahlt", "Käufer zahlt Zollabgaben", "Klausel gilt nur für Seetransport"],
      en: ["Seller delivers with all duties paid, including import - maximum seller obligation", "Only export duties are paid", "Buyer pays customs duties", "Term only applies to sea transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "DDP = obligație maximă vânzător, minimă cumpărător. Vânzătorul face tot inclusiv vămuirea de import în țara destinație.",
      de: "DDP = maximale Verkäuferverpflichtung, minimale Käuferverpflichtung. Verkäufer erledigt alles einschließlich Einfuhrverzollung im Zielland.",
      en: "DDP = maximum seller obligation, minimum buyer obligation. Seller does everything including import clearance in destination country."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care Incoterms sunt exclusiv pentru transport maritim?",
      de: "Welche Incoterms sind ausschließlich für Seetransport?",
      en: "Which Incoterms are exclusively for sea transport?"
    },
    options: {
      ro: ["FAS, FOB, CFR, CIF", "EXW, FCA, DAP, DDP", "CPT, CIP, DPU", "Toate cele 11 termeni"],
      de: ["FAS, FOB, CFR, CIF", "EXW, FCA, DAP, DDP", "CPT, CIP, DPU", "Alle 11 Klauseln"],
      en: ["FAS, FOB, CFR, CIF", "EXW, FCA, DAP, DDP", "CPT, CIP, DPU", "All 11 terms"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cei 4 termeni maritimi: FAS (Free Alongside Ship), FOB (Free On Board), CFR (Cost and Freight), CIF (Cost Insurance Freight).",
      de: "Die 4 Seeklauseln: FAS (Frei Längsseite Schiff), FOB (Frei an Bord), CFR (Kosten und Fracht), CIF (Kosten Versicherung Fracht).",
      en: "The 4 sea terms: FAS (Free Alongside Ship), FOB (Free On Board), CFR (Cost and Freight), CIF (Cost Insurance Freight)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă FOB (Free On Board)?",
      de: "Was bedeutet FOB (Free On Board)?",
      en: "What does FOB (Free On Board) mean?"
    },
    options: {
      ro: ["Vânzătorul livrează când marfa trece balustrada navei în portul de încărcare", "Livrare la depozitul cumpărătorului", "Livrare la aeroport", "Vânzătorul plătește și transportul maritim"],
      de: ["Verkäufer liefert wenn Ware Schiffsreling im Verladehafen passiert", "Lieferung zum Käuferlager", "Lieferung zum Flughafen", "Verkäufer zahlt auch Seefracht"],
      en: ["Seller delivers when goods pass ship's rail at loading port", "Delivery to buyer's warehouse", "Delivery to airport", "Seller also pays sea freight"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FOB: riscul trece la cumpărător în momentul încărcării pe navă. Cumpărătorul plătește transportul maritim și asigurarea.",
      de: "FOB: Risiko geht beim Verladen auf Schiff auf Käufer über. Käufer zahlt Seefracht und Versicherung.",
      en: "FOB: risk transfers to buyer at loading on ship. Buyer pays sea freight and insurance."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă FCA (Free Carrier)?",
      de: "Was bedeutet FCA (Free Carrier)?",
      en: "What does FCA (Free Carrier) mean?"
    },
    options: {
      ro: ["Vânzătorul predă marfa transportatorului desemnat de cumpărător, la locul convenit", "Vânzătorul livrează la destinația finală", "Cumpărătorul preia marfa din fabrică", "Vânzătorul plătește tot transportul"],
      de: ["Verkäufer übergibt Ware an vom Käufer benannten Frachtführer am vereinbarten Ort", "Verkäufer liefert zum Endziel", "Käufer holt Ware aus Fabrik", "Verkäufer zahlt gesamten Transport"],
      en: ["Seller hands goods to carrier nominated by buyer at agreed place", "Seller delivers to final destination", "Buyer picks up from factory", "Seller pays all transport"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FCA e versatil - funcționează pentru orice mod de transport. Punctul de transfer e clar definit. Incoterms 2020 permite notarea B/L on-board.",
      de: "FCA ist vielseitig - funktioniert für jeden Verkehrsträger. Übergabepunkt ist klar definiert. Incoterms 2020 erlaubt Vermerk B/L an Bord.",
      en: "FCA is versatile - works for any transport mode. Transfer point is clearly defined. Incoterms 2020 allows on-board B/L notation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce diferențiază CIF de CFR?",
      de: "Was unterscheidet CIF von CFR?",
      en: "What differentiates CIF from CFR?"
    },
    options: {
      ro: ["CIF include asigurarea maritimă plătită de vânzător, CFR nu", "CIF e pentru transport aerian, CFR pentru maritim", "CFR include asigurarea, CIF nu", "Nu există diferență semnificativă"],
      de: ["CIF beinhaltet vom Verkäufer bezahlte Seeversicherung, CFR nicht", "CIF ist für Luftfracht, CFR für Seefracht", "CFR beinhaltet Versicherung, CIF nicht", "Kein wesentlicher Unterschied"],
      en: ["CIF includes marine insurance paid by seller, CFR does not", "CIF is for air transport, CFR for sea", "CFR includes insurance, CIF does not", "No significant difference"]
    },
    correctIndex: 0,
    explanation: {
      ro: "CIF = Cost + Insurance + Freight. CFR = Cost + Freight. În ambele cazuri riscul trece la cumpărător la încărcarea pe navă.",
      de: "CIF = Kosten + Versicherung + Fracht. CFR = Kosten + Fracht. In beiden Fällen geht Risiko beim Verladen auf Schiff auf Käufer über.",
      en: "CIF = Cost + Insurance + Freight. CFR = Cost + Freight. In both cases risk transfers to buyer at loading on ship."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este DPU (Delivered at Place Unloaded)?",
      de: "Was ist DPU (Delivered at Place Unloaded)?",
      en: "What is DPU (Delivered at Place Unloaded)?"
    },
    options: {
      ro: ["Singurul Incoterm unde vânzătorul e responsabil pentru descărcare la destinație", "Termenul cel mai simplu pentru vânzător", "Aplicabil doar pentru containerele maritime", "Înlocuitor pentru EXW"],
      de: ["Einziger Incoterm wo Verkäufer für Entladung am Ziel verantwortlich ist", "Einfachste Klausel für Verkäufer", "Nur für Seecontainer anwendbar", "Ersatz für EXW"],
      en: ["Only Incoterm where seller is responsible for unloading at destination", "Simplest term for seller", "Only applicable for sea containers", "Replacement for EXW"]
    },
    correctIndex: 0,
    explanation: {
      ro: "DPU (fost DAT) e unicul termen unde vânzătorul descarcă. Riscul trece după descărcare. Util pentru terminale, dar și alte locații.",
      de: "DPU (früher DAT) ist einziger Term wo Verkäufer entlädt. Risiko geht nach Entladung über. Nützlich für Terminals, aber auch andere Orte.",
      en: "DPU (formerly DAT) is only term where seller unloads. Risk transfers after unloading. Useful for terminals, but also other locations."
    }
  },
  
  // Level 4 Questions (10)
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum afectează alegerea Incoterm costul total al mărfii pentru cumpărător?",
      de: "Wie beeinflusst die Incoterm-Wahl die Gesamtkosten der Ware für den Käufer?",
      en: "How does Incoterm choice affect total cost of goods for buyer?"
    },
    options: {
      ro: ["Prețul include diferite componente (transport, asigurare, taxe) - compararea necesită calcul total landed cost", "Prețul e același indiferent de Incoterm", "Doar prețul mărfii contează", "Incoterms nu afectează costurile"],
      de: ["Preis beinhaltet verschiedene Komponenten (Transport, Versicherung, Zölle) - Vergleich erfordert Gesamtlandedkosten-Berechnung", "Preis ist gleich unabhängig von Incoterm", "Nur Warenpreis zählt", "Incoterms beeinflussen Kosten nicht"],
      en: ["Price includes different components (transport, insurance, duties) - comparison requires total landed cost calculation", "Price is same regardless of Incoterm", "Only goods price matters", "Incoterms don't affect costs"]
    },
    correctIndex: 0,
    explanation: {
      ro: "EXW 100€ vs DDP 150€ nu e comparabil direct. Trebuie calculat landed cost: preț + transport + asigurare + taxe + handling.",
      de: "EXW 100€ vs DDP 150€ nicht direkt vergleichbar. Landed Cost berechnen: Preis + Transport + Versicherung + Zölle + Handling.",
      en: "EXW €100 vs DDP €150 not directly comparable. Must calculate landed cost: price + transport + insurance + duties + handling."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "De ce FOB nu e recomandat pentru transport containerizat?",
      de: "Warum wird FOB für Containertransport nicht empfohlen?",
      en: "Why is FOB not recommended for containerized transport?"
    },
    options: {
      ro: ["Riscul trece la 'bordul navei' dar containerul e predat terminalului mult mai devreme - FCA e mai potrivit", "FOB e interzis pentru containere", "Containerele nu pot fi încărcate pe nave", "Nu există diferență practică"],
      de: ["Risiko geht bei 'Schiffsreling' über aber Container wird viel früher am Terminal übergeben - FCA ist geeigneter", "FOB ist für Container verboten", "Container können nicht auf Schiffe geladen werden", "Kein praktischer Unterschied"],
      en: ["Risk transfers at 'ship's rail' but container is handed to terminal much earlier - FCA is more suitable", "FOB is forbidden for containers", "Containers cannot be loaded on ships", "No practical difference"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Containerul stă zile în terminal înainte de încărcarea pe navă. În acest timp, cine suportă riscul? FCA cu predare la terminal e mai clar.",
      de: "Container steht Tage im Terminal vor Schiffsverladung. Wer trägt in dieser Zeit das Risiko? FCA mit Terminalübergabe ist klarer.",
      en: "Container sits in terminal days before ship loading. Who bears risk during this time? FCA with terminal handover is clearer."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt riscurile pentru vânzător când acceptă DDP pentru export în țări cu proceduri vamale complexe?",
      de: "Was sind die Risiken für den Verkäufer bei DDP-Annahme für Export in Länder mit komplexen Zollverfahren?",
      en: "What are risks for seller when accepting DDP for export to countries with complex customs procedures?"
    },
    options: {
      ro: ["Costuri neprevăzute (taxe, întârzieri, depozitare), lipsa controlului la import, posibilă imposibilitate de îndeplinire", "Nu există riscuri suplimentare", "Doar cumpărătorul e afectat", "DDP nu e permis pentru aceste țări"],
      de: ["Unvorhergesehene Kosten (Zölle, Verzögerungen, Lagerung), fehlende Importkontrolle, mögliche Nichterfüllbarkeit", "Keine zusätzlichen Risiken", "Nur Käufer ist betroffen", "DDP ist für diese Länder nicht erlaubt"],
      en: ["Unforeseen costs (duties, delays, storage), lack of control at import, possible impossibility of performance", "No additional risks", "Only buyer is affected", "DDP is not allowed for these countries"]
    },
    correctIndex: 0,
    explanation: {
      ro: "DDP în țări dificile: vânzătorul poate să nu poată obține licențe de import, să se confrunte cu taxe neașteptate, sau întârzieri costisitoare.",
      de: "DDP in schwierigen Ländern: Verkäufer kann möglicherweise keine Importlizenzen erhalten, unerwarteten Zöllen oder kostspieligen Verzögerungen ausgesetzt sein.",
      en: "DDP in difficult countries: seller may be unable to obtain import licenses, face unexpected duties, or costly delays."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum afectează alegerea Incoterm obligațiile de asigurare?",
      de: "Wie beeinflusst die Incoterm-Wahl die Versicherungspflichten?",
      en: "How does Incoterm choice affect insurance obligations?"
    },
    options: {
      ro: ["Doar CIF și CIP obligă vânzătorul să asigure; la restul asigurarea e opțională sau a cumpărătorului", "Toate Incoterms obligă vânzătorul să asigure", "Asigurarea nu e legată de Incoterms", "Doar cumpărătorul poate asigura"],
      de: ["Nur CIF und CIP verpflichten Verkäufer zur Versicherung; bei Rest ist Versicherung optional oder Käufersache", "Alle Incoterms verpflichten Verkäufer zur Versicherung", "Versicherung ist nicht mit Incoterms verbunden", "Nur Käufer kann versichern"],
      en: ["Only CIF and CIP oblige seller to insure; for rest insurance is optional or buyer's", "All Incoterms oblige seller to insure", "Insurance is not linked to Incoterms", "Only buyer can insure"]
    },
    correctIndex: 0,
    explanation: {
      ro: "CIF/CIP: vânzătorul TREBUIE să asigure. Incoterms 2020 a crescut nivelul minim pentru CIP la 110% valoare (Clauza A).",
      de: "CIF/CIP: Verkäufer MUSS versichern. Incoterms 2020 hat Mindestniveau für CIP auf 110% Wert erhöht (Klausel A).",
      en: "CIF/CIP: seller MUST insure. Incoterms 2020 raised minimum level for CIP to 110% value (Clause A)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care este diferența între CPT și CIP?",
      de: "Was ist der Unterschied zwischen CPT und CIP?",
      en: "What is the difference between CPT and CIP?"
    },
    options: {
      ro: ["CPT = Carriage Paid To (fără asigurare); CIP = Carriage Insurance Paid (cu asigurare plătită de vânzător)", "CPT e pentru maritim, CIP pentru rutier", "Nu există diferență", "CIP e versiunea veche a CPT"],
      de: ["CPT = Frachtfrei (ohne Versicherung); CIP = Frachtfrei versichert (mit vom Verkäufer bezahlter Versicherung)", "CPT ist für Seefracht, CIP für Straße", "Kein Unterschied", "CIP ist alte Version von CPT"],
      en: ["CPT = Carriage Paid To (no insurance); CIP = Carriage Insurance Paid (with insurance paid by seller)", "CPT is for sea, CIP for road", "No difference", "CIP is old version of CPT"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Ambele: vânzătorul plătește transportul până la destinație. Riscul trece la primul transportator. CIP adaugă obligația de asigurare.",
      de: "Beide: Verkäufer zahlt Transport bis Ziel. Risiko geht auf ersten Frachtführer über. CIP fügt Versicherungspflicht hinzu.",
      en: "Both: seller pays transport to destination. Risk transfers to first carrier. CIP adds insurance obligation."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum se aplică Incoterms în contractele de vânzare interne (nu internaționale)?",
      de: "Wie werden Incoterms in Inlandsverkaufsverträgen (nicht international) angewendet?",
      en: "How are Incoterms applied in domestic (not international) sales contracts?"
    },
    options: {
      ro: ["Pot fi folosite și intern prin referință explicită în contract, dar trebuie omise referințele la vamă", "Incoterms sunt exclusiv pentru comerț internațional", "Nu pot fi folosite fără adaptări", "Sunt obligatorii și pentru vânzări interne"],
      de: ["Können auch intern durch explizite Vertragsreferenz verwendet werden, aber Zollreferenzen müssen weggelassen werden", "Incoterms sind ausschließlich für internationalen Handel", "Können nicht ohne Anpassungen verwendet werden", "Sind auch für Inlandsverkäufe obligatorisch"],
      en: ["Can be used domestically through explicit contract reference, but customs references must be omitted", "Incoterms are exclusively for international trade", "Cannot be used without adaptations", "Are mandatory for domestic sales too"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Incoterms pot clarifica responsabilitățile și în tranzacții interne. Ex: 'FCA depozitul nostru, Incoterms 2020' e valid și în contract intern.",
      de: "Incoterms können Verantwortlichkeiten auch in Inlandstransaktionen klären. Bsp: 'FCA unser Lager, Incoterms 2020' gilt auch in Inlandsvertrag.",
      en: "Incoterms can clarify responsibilities in domestic transactions too. E.g.: 'FCA our warehouse, Incoterms 2020' is valid in domestic contract."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt modificările principale în Incoterms 2020 față de 2010?",
      de: "Was sind die Hauptänderungen in Incoterms 2020 gegenüber 2010?",
      en: "What are the main changes in Incoterms 2020 compared to 2010?"
    },
    options: {
      ro: ["DAT redenumit DPU, CIP necesită asigurare Clauza A, FCA permite B/L on-board, clarificări privind securitatea", "Nicio modificare semnificativă", "Au fost adăugați 5 termeni noi", "FOB a fost eliminat"],
      de: ["DAT umbenannt in DPU, CIP erfordert Klausel-A-Versicherung, FCA erlaubt On-Board-B/L, Sicherheitsklarstellungen", "Keine wesentlichen Änderungen", "5 neue Klauseln hinzugefügt", "FOB wurde eliminiert"],
      en: ["DAT renamed to DPU, CIP requires Clause A insurance, FCA allows on-board B/L, security clarifications", "No significant changes", "5 new terms added", "FOB was eliminated"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Incoterms 2020 e evoluție, nu revoluție. Schimbările reflectă practica comercială și nevoile de clarificare din ultimul deceniu.",
      de: "Incoterms 2020 ist Evolution, nicht Revolution. Änderungen reflektieren Handelspraxis und Klärungsbedarf des letzten Jahrzehnts.",
      en: "Incoterms 2020 is evolution, not revolution. Changes reflect commercial practice and clarification needs of the last decade."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Când e mai avantajos pentru cumpărător să aleagă EXW vs FCA?",
      de: "Wann ist es für den Käufer vorteilhafter EXW statt FCA zu wählen?",
      en: "When is it more advantageous for buyer to choose EXW vs FCA?"
    },
    options: {
      ro: ["Când cumpărătorul are propriul transportator care poate încărca de la furnizor, și poate face formalitățile de export", "EXW e întotdeauna mai ieftin", "FCA e întotdeauna preferabil", "Nu există diferență de cost"],
      de: ["Wenn Käufer eigenen Transporteur hat der beim Lieferanten laden kann, und Exportformalitäten erledigen kann", "EXW ist immer billiger", "FCA ist immer vorzuziehen", "Kein Kostenunterschied"],
      en: ["When buyer has own carrier who can load at supplier, and can do export formalities", "EXW is always cheaper", "FCA is always preferable", "No cost difference"]
    },
    correctIndex: 0,
    explanation: {
      ro: "EXW: cumpărătorul ia tot pe el. Funcționează doar dacă cumpărătorul poate efectiv organiza ridicarea și exportul din țara vânzătorului.",
      de: "EXW: Käufer übernimmt alles. Funktioniert nur wenn Käufer effektiv Abholung und Export aus Verkäuferland organisieren kann.",
      en: "EXW: buyer takes everything on. Works only if buyer can effectively organize pickup and export from seller's country."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum afectează Incoterms determinarea momentului transferului de proprietate?",
      de: "Wie beeinflussen Incoterms die Bestimmung des Eigentumsübergangs?",
      en: "How do Incoterms affect determination of property transfer moment?"
    },
    options: {
      ro: ["Incoterms NU reglementează transferul de proprietate - acesta e determinat de contractul de vânzare și legea aplicabilă", "Proprietatea trece odată cu riscul", "Incoterms stabilesc clar proprietatea", "Transferul de proprietate e automat la livrare"],
      de: ["Incoterms regeln NICHT den Eigentumsübergang - dieser wird durch Kaufvertrag und anwendbares Recht bestimmt", "Eigentum geht mit Risiko über", "Incoterms legen Eigentum klar fest", "Eigentumsübergang erfolgt automatisch bei Lieferung"],
      en: ["Incoterms do NOT regulate property transfer - this is determined by sales contract and applicable law", "Property transfers with risk", "Incoterms clearly establish property", "Property transfer is automatic at delivery"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Incoterms = risc și costuri. Proprietatea (titlul) e subiect separat! Contractul trebuie să specifice când trece proprietatea.",
      de: "Incoterms = Risiko und Kosten. Eigentum (Titel) ist separates Thema! Vertrag muss spezifizieren wann Eigentum übergeht.",
      en: "Incoterms = risk and costs. Property (title) is separate subject! Contract must specify when property transfers."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce trebuie specificat în contract pe lângă termenul Incoterm?",
      de: "Was muss im Vertrag neben der Incoterm-Klausel spezifiziert werden?",
      en: "What must be specified in contract besides the Incoterm?"
    },
    options: {
      ro: ["Locul precis de livrare, versiunea Incoterms (2020), și orice derogări sau clarificări specifice", "Doar termenul Incoterm e suficient", "Nu sunt necesare alte specificații", "Doar prețul și cantitatea"],
      de: ["Genauer Lieferort, Incoterms-Version (2020), und etwaige spezifische Abweichungen oder Klarstellungen", "Nur Incoterm-Klausel ist ausreichend", "Keine weiteren Spezifikationen erforderlich", "Nur Preis und Menge"],
      en: ["Precise place of delivery, Incoterms version (2020), and any specific derogations or clarifications", "Only Incoterm is sufficient", "No other specifications needed", "Only price and quantity"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Ex corect: 'CIP Terminal Arad, Romania, Incoterms 2020'. Fără locul precis și versiunea, pot apărea dispute despre interpretare.",
      de: "Korrektes Bsp: 'CIP Terminal Arad, Rumänien, Incoterms 2020'. Ohne genauen Ort und Version können Auslegungsstreitigkeiten entstehen.",
      en: "Correct e.g.: 'CIP Terminal Arad, Romania, Incoterms 2020'. Without precise place and version, interpretation disputes can arise."
    }
  },
  
  // Level 5 Questions (10)
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Client din SUA vrea să cumpere cu DDP din România. Care sunt riscurile pentru exportatorul român?",
      de: "Szenario: US-Kunde will mit DDP aus Rumänien kaufen. Was sind die Risiken für den rumänischen Exporteur?",
      en: "Scenario: US customer wants to buy DDP from Romania. What are the risks for the Romanian exporter?"
    },
    options: {
      ro: ["Taxe vamale US neprevizibile, necesitate broker vamal US, posibile reglementări FDA/CPSC, diferențe de zonă orară pentru coordonare", "Nu există riscuri suplimentare pentru export SUA", "DDP nu e permis pentru export în SUA", "Cumpărătorul suportă toate riscurile automat"],
      de: ["Unvorhersehbare US-Zölle, Notwendigkeit US-Zollagent, mögliche FDA/CPSC-Vorschriften, Zeitzonenunterschiede für Koordination", "Keine zusätzlichen Risiken für US-Export", "DDP ist für US-Export nicht erlaubt", "Käufer trägt automatisch alle Risiken"],
      en: ["Unpredictable US customs duties, need for US customs broker, possible FDA/CPSC regulations, timezone differences for coordination", "No additional risks for US export", "DDP is not allowed for US export", "Buyer bears all risks automatically"]
    },
    correctIndex: 0,
    explanation: {
      ro: "DDP SUA: exportatorul trebuie să înțeleagă sistem complet diferit. Recomandare: DAP cu cumpărătorul făcând vama US, sau DDP cu suprataxă de risc.",
      de: "DDP USA: Exporteur muss komplett anderes System verstehen. Empfehlung: DAP mit Käufer der US-Zoll macht, oder DDP mit Risikoaufschlag.",
      en: "DDP USA: exporter must understand completely different system. Recommendation: DAP with buyer doing US customs, or DDP with risk surcharge."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum negociezi modificări la termenii Incoterms standard în contracte complexe?",
      de: "Wie verhandeln Sie Änderungen an Standard-Incoterm-Klauseln in komplexen Verträgen?",
      en: "How do you negotiate modifications to standard Incoterms in complex contracts?"
    },
    options: {
      ro: ["Adaugi clarificări specifice în contract care modifică/completează termenul de bază, ex: 'FOB... plus vânzătorul asigură stivuirea'", "Incoterms nu pot fi modificate", "Creezi termeni complet noi", "Modificările invalidează Incoterms"],
      de: ["Spezifische Klarstellungen im Vertrag hinzufügen die Basisklausel ändern/ergänzen, z.B.: 'FOB... plus Verkäufer gewährleistet Stauung'", "Incoterms können nicht geändert werden", "Komplett neue Klauseln erstellen", "Änderungen machen Incoterms ungültig"],
      en: ["Add specific clarifications in contract that modify/supplement base term, e.g.: 'FOB... plus seller ensures stowage'", "Incoterms cannot be modified", "Create completely new terms", "Modifications invalidate Incoterms"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Modificările sunt permise și frecvente. Cheia: claritate absolută în limbaj și acordul ambelor părți. Documentația e esențială.",
      de: "Änderungen sind erlaubt und häufig. Schlüssel: absolute Klarheit in Sprache und Einigung beider Parteien. Dokumentation ist wesentlich.",
      en: "Modifications are allowed and frequent. Key: absolute clarity in language and agreement of both parties. Documentation is essential."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt implicațiile TVA/fiscale ale diferitelor Incoterms în tranzacții intra-UE vs extra-UE?",
      de: "Was sind die MwSt/steuerlichen Auswirkungen verschiedener Incoterms bei Intra-EU vs Extra-EU Transaktionen?",
      en: "What are the VAT/tax implications of different Incoterms in intra-EU vs extra-EU transactions?"
    },
    options: {
      ro: ["Incoterms afectează cine e responsabil pentru TVA la import, dar nu schimbă regulile de bază; intra-UE: reverse charge, extra-UE: TVA la import", "TVA nu e legată de Incoterms", "Toate Incoterms au același tratament TVA", "Doar DDP afectează TVA"],
      de: ["Incoterms beeinflussen wer für Import-MwSt verantwortlich ist, ändern aber nicht Grundregeln; Intra-EU: Reverse Charge, Extra-EU: Einfuhr-MwSt", "MwSt ist nicht mit Incoterms verbunden", "Alle Incoterms haben gleiche MwSt-Behandlung", "Nur DDP beeinflusst MwSt"],
      en: ["Incoterms affect who is responsible for import VAT, but don't change basic rules; intra-EU: reverse charge, extra-EU: import VAT", "VAT is not linked to Incoterms", "All Incoterms have same VAT treatment", "Only DDP affects VAT"]
    },
    correctIndex: 0,
    explanation: {
      ro: "DDP în export: vânzătorul poate să trebuiască să se înregistreze pentru TVA în țara destinație. Complexitatea fiscală e adesea subestimată.",
      de: "DDP bei Export: Verkäufer muss sich möglicherweise für MwSt im Zielland registrieren. Steuerkomplexität wird oft unterschätzt.",
      en: "DDP in export: seller may need to register for VAT in destination country. Tax complexity is often underestimated."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi o situație unde Incoterm-ul contractual nu mai corespunde realității operaționale?",
      de: "Wie handhaben Sie eine Situation wo vertraglich vereinbarter Incoterm nicht mehr der operativen Realität entspricht?",
      en: "How do you handle a situation where contractual Incoterm no longer matches operational reality?"
    },
    options: {
      ro: ["Amendament la contract sau acord scris pentru fiecare expediere, documentând clar cine face ce și cine suportă ce", "Continui conform contractului original indiferent", "Schimbi verbal fără documentare", "Anulezi contractul"],
      de: ["Vertragsänderung oder schriftliche Vereinbarung pro Sendung, klar dokumentierend wer was macht und wer was trägt", "Original-Vertrag weiter befolgen egal was", "Mündlich ohne Dokumentation ändern", "Vertrag kündigen"],
      en: ["Contract amendment or written agreement per shipment, clearly documenting who does what and who bears what", "Continue per original contract regardless", "Change verbally without documentation", "Cancel contract"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Practica divergentă de contract creează risc major. În caz de incident, ce prevalează: contractul sau practica? Documentarea protejează.",
      de: "Praxis die von Vertrag abweicht schafft großes Risiko. Bei Vorfall: was gilt, Vertrag oder Praxis? Dokumentation schützt.",
      en: "Practice diverging from contract creates major risk. In case of incident, what prevails: contract or practice? Documentation protects."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt considerentele pentru alegerea Incoterm în lanțuri de aprovizionare cu multiple puncte de origine?",
      de: "Was sind die Überlegungen zur Incoterm-Wahl in Lieferketten mit mehreren Ursprungsorten?",
      en: "What are considerations for Incoterm choice in supply chains with multiple origin points?"
    },
    options: {
      ro: ["Standardizare pe FCA/CPT pentru control și comparabilitate costuri, sau Incoterms diferite optimizate per furnizor/regiune", "Același Incoterm obligatoriu pentru toți furnizorii", "Incoterms nu contează în lanțuri complexe", "Doar EXW funcționează pentru surse multiple"],
      de: ["Standardisierung auf FCA/CPT für Kontrolle und Kostenvergleichbarkeit, oder verschiedene optimierte Incoterms pro Lieferant/Region", "Gleicher Incoterm obligatorisch für alle Lieferanten", "Incoterms zählen nicht in komplexen Ketten", "Nur EXW funktioniert für multiple Quellen"],
      en: ["Standardization on FCA/CPT for control and cost comparability, or different optimized Incoterms per supplier/region", "Same Incoterm mandatory for all suppliers", "Incoterms don't matter in complex chains", "Only EXW works for multiple sources"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Lanțuri globale: balanță între standardizare (simplitate, comparabilitate) și optimizare (cost minim per relație). Analiza cost-beneficiu e cheie.",
      de: "Globale Ketten: Balance zwischen Standardisierung (Einfachheit, Vergleichbarkeit) und Optimierung (minimale Kosten pro Beziehung). Kosten-Nutzen-Analyse ist Schlüssel.",
      en: "Global chains: balance between standardization (simplicity, comparability) and optimization (minimum cost per relationship). Cost-benefit analysis is key."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum afectează Letter of Credit (L/C) alegerea și aplicarea Incoterms?",
      de: "Wie beeinflussen Letter of Credit (L/C) die Wahl und Anwendung von Incoterms?",
      en: "How do Letters of Credit (L/C) affect Incoterms choice and application?"
    },
    options: {
      ro: ["L/C specifică documente necesare care trebuie să corespundă cu Incoterm; discrepanțe = refuz plată", "L/C și Incoterms sunt complet separate", "Orice Incoterm funcționează cu orice L/C", "L/C-ul determină automat Incoterm-ul"],
      de: ["L/C spezifiziert erforderliche Dokumente die zu Incoterm passen müssen; Abweichungen = Zahlungsverweigerung", "L/C und Incoterms sind völlig getrennt", "Jeder Incoterm funktioniert mit jedem L/C", "L/C bestimmt automatisch Incoterm"],
      en: ["L/C specifies required documents that must match Incoterm; discrepancies = payment refusal", "L/C and Incoterms are completely separate", "Any Incoterm works with any L/C", "L/C automatically determines Incoterm"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Ex: CIF necesită B/L și poliță asigurare. L/C-ul listează aceste documente. Dacă Incoterm-ul real e altul, documentele nu se vor potrivi.",
      de: "Bsp: CIF erfordert B/L und Versicherungspolice. L/C listet diese Dokumente. Wenn tatsächlicher Incoterm anders ist, passen Dokumente nicht.",
      en: "E.g.: CIF requires B/L and insurance policy. L/C lists these documents. If actual Incoterm is different, documents won't match."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Marfă FOB deteriorată în timpul încărcării pe navă (moment ambiguu al trecerii riscului). Cine e responsabil?",
      de: "Szenario: FOB-Ware während Schiffsverladung beschädigt (mehrdeutiger Risiko-Übergangszeitpunkt). Wer ist verantwortlich?",
      en: "Scenario: FOB goods damaged during loading on ship (ambiguous risk transfer moment). Who is responsible?"
    },
    options: {
      ro: ["Depinde de momentul exact: înainte de finalizarea încărcării = vânzător; după trecerea peste balustradă = cumpărător; zona gri = dispute", "Întotdeauna vânzătorul", "Întotdeauna cumpărătorul", "Asigurătorul, indiferent de Incoterm"],
      de: ["Hängt vom genauen Zeitpunkt ab: vor Abschluss der Verladung = Verkäufer; nach Übergang Reling = Käufer; Grauzone = Streit", "Immer Verkäufer", "Immer Käufer", "Versicherer, unabhängig von Incoterm"],
      en: ["Depends on exact moment: before loading completion = seller; after passing rail = buyer; gray zone = disputes", "Always seller", "Always buyer", "Insurer, regardless of Incoterm"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FOB în Incoterms 2020: riscul trece 'când marfa e încărcată pe navă'. Aceasta adresează problema balustrării, dar zona exactă de transfer poate fi încă disputată.",
      de: "FOB in Incoterms 2020: Risiko geht über 'wenn Ware auf Schiff geladen ist'. Dies adressiert Relingsproblem, aber exakte Transferzone kann noch strittig sein.",
      en: "FOB in Incoterms 2020: risk transfers 'when goods are loaded on ship'. This addresses rail issue, but exact transfer zone can still be disputed."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum integrezi cerințele de sustenabilitate/ESG în alegerea Incoterms?",
      de: "Wie integrieren Sie Nachhaltigkeits-/ESG-Anforderungen in die Incoterm-Wahl?",
      en: "How do you integrate sustainability/ESG requirements into Incoterm choice?"
    },
    options: {
      ro: ["Incoterms care dau control asupra transportului permit alegerea modurilor/rutelor sustenabile; ex: cumpărător alege CPT pentru a controla carbon footprint", "Incoterms nu afectează sustenabilitatea", "Doar vânzătorul poate influența emisiile", "ESG și Incoterms sunt subiecte separate"],
      de: ["Incoterms die Transportkontrolle geben ermöglichen Wahl nachhaltiger Verkehrsträger/Routen; z.B.: Käufer wählt CPT um Carbon Footprint zu kontrollieren", "Incoterms beeinflussen Nachhaltigkeit nicht", "Nur Verkäufer kann Emissionen beeinflussen", "ESG und Incoterms sind separate Themen"],
      en: ["Incoterms giving transport control allow choice of sustainable modes/routes; e.g.: buyer chooses CPT to control carbon footprint", "Incoterms don't affect sustainability", "Only seller can influence emissions", "ESG and Incoterms are separate subjects"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cine organizează transportul poate alege opțiuni verzi. DAP/DDP dau control vânzătorului. FCA/EXW dau control cumpărătorului. Strategia ESG influențează alegerea.",
      de: "Wer Transport organisiert kann grüne Optionen wählen. DAP/DDP geben Verkäufer Kontrolle. FCA/EXW geben Käufer Kontrolle. ESG-Strategie beeinflusst Wahl.",
      en: "Who organizes transport can choose green options. DAP/DDP give seller control. FCA/EXW give buyer control. ESG strategy influences choice."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt implicațiile Incoterms pentru vânzarea de bunuri digitale sau servicii?",
      de: "Was sind die Incoterms-Auswirkungen für den Verkauf digitaler Güter oder Dienstleistungen?",
      en: "What are the Incoterms implications for sale of digital goods or services?"
    },
    options: {
      ro: ["Incoterms sunt pentru mărfuri fizice tangibile; pentru digitale/servicii sunt nepotrivite și trebuie folosite alte mecanisme contractuale", "Incoterms se aplică și pentru servicii", "DDP e standard pentru digitale", "Nu există diferență între fizic și digital"],
      de: ["Incoterms sind für physische greifbare Waren; für Digitales/Dienstleistungen ungeeignet, andere Vertragsmechanismen erforderlich", "Incoterms gelten auch für Dienstleistungen", "DDP ist Standard für Digitales", "Kein Unterschied zwischen physisch und digital"],
      en: ["Incoterms are for physical tangible goods; for digital/services they're unsuitable and other contractual mechanisms needed", "Incoterms also apply to services", "DDP is standard for digital", "No difference between physical and digital"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Incoterms presupun 'livrare' fizică. Software-ul sau serviciile au alte modele de transfer (licențiere, acces, SLA). Incoterms nu se aplică.",
      de: "Incoterms setzen physische 'Lieferung' voraus. Software oder Dienstleistungen haben andere Übertragungsmodelle (Lizenzierung, Zugang, SLA). Incoterms gelten nicht.",
      en: "Incoterms assume physical 'delivery'. Software or services have other transfer models (licensing, access, SLA). Incoterms don't apply."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu strategic: Negociezi un contract de aprovizionare pe 3 ani cu furnizor din Asia. Cum alegi și structurezi Incoterms?",
      de: "Strategisches Szenario: Sie verhandeln 3-Jahres-Liefervertrag mit asiatischem Lieferanten. Wie wählen und strukturieren Sie Incoterms?",
      en: "Strategic scenario: You're negotiating 3-year supply contract with Asian supplier. How do you choose and structure Incoterms?"
    },
    options: {
      ro: ["Analizezi total cost of ownership, evaluezi capacitatea de a gestiona transportul, prevezi flexibilitate pentru schimbări, incluzi mecanisme de revizuire", "Alegi cel mai simplu termen și nu schimbi 3 ani", "Furnizorul decide întotdeauna", "Incoterm-ul nu contează pentru contract lung"],
      de: ["Gesamtbetriebskosten analysieren, Fähigkeit zur Transportverwaltung bewerten, Flexibilität für Änderungen vorsehen, Überprüfungsmechanismen einbauen", "Einfachste Klausel wählen und 3 Jahre nicht ändern", "Lieferant entscheidet immer", "Incoterm zählt nicht für langen Vertrag"],
      en: ["Analyze total cost of ownership, evaluate transport management capability, provide flexibility for changes, include review mechanisms", "Choose simplest term and don't change for 3 years", "Supplier always decides", "Incoterm doesn't matter for long contract"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Contract lung = multe variabile. Clauze de revizuire periodică, opțiuni de schimbare Incoterm bazat pe volume, flexibilitate pentru disrupții lanț.",
      de: "Langer Vertrag = viele Variablen. Periodische Überprüfungsklauseln, Optionen zum Incoterm-Wechsel basierend auf Volumen, Flexibilität für Kettenunterbrechungen.",
      en: "Long contract = many variables. Periodic review clauses, options to change Incoterm based on volumes, flexibility for chain disruptions."
    }
  }
];
