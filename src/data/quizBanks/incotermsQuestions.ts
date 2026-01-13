import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const incotermsQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce sunt Incoterms?",
      de: "Was sind Incoterms?",
      en: "What are Incoterms?"
    },
    options: {
      ro: ["Taxe vamale", "Reguli internaționale pentru interpretarea termenilor comerciali", "Tipuri de transport", "Documente de livrare"],
      de: ["Zölle", "Internationale Regeln für die Auslegung von Handelsklauseln", "Transportarten", "Lieferdokumente"],
      en: ["Customs duties", "International rules for interpreting commercial terms", "Transport types", "Delivery documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Incoterms definesc responsabilitățile vânzătorului și cumpărătorului în tranzacții internaționale.",
      de: "Incoterms definieren die Verantwortlichkeiten von Verkäufer und Käufer bei internationalen Transaktionen.",
      en: "Incoterms define seller and buyer responsibilities in international transactions."
    }
  },
  {
    question: {
      ro: "Ce reprezintă EXW (Ex Works)?",
      de: "Was bedeutet EXW (Ex Works)?",
      en: "What does EXW (Ex Works) represent?"
    },
    options: {
      ro: ["Livrare în port", "Marfa pusă la dispoziție la sediul vânzătorului, responsabilitate minimă a acestuia", "Livrare la destinație", "Cost și transport inclus"],
      de: ["Lieferung im Hafen", "Ware beim Verkäufer bereitgestellt, minimale Verkäuferverantwortung", "Lieferung am Bestimmungsort", "Kosten und Fracht inklusive"],
      en: ["Delivery at port", "Goods available at seller's premises, minimum seller responsibility", "Delivery at destination", "Cost and freight included"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EXW plasează responsabilitatea maximă pe cumpărător - preia marfa din fabrica vânzătorului.",
      de: "EXW legt maximale Verantwortung auf den Käufer - übernimmt Ware ab Fabrik des Verkäufers.",
      en: "EXW places maximum responsibility on buyer - picks up goods from seller's factory."
    }
  },
  {
    question: {
      ro: "Ce înseamnă FCA (Free Carrier)?",
      de: "Was bedeutet FCA (Free Carrier)?",
      en: "What does FCA (Free Carrier) mean?"
    },
    options: {
      ro: ["Livrare la destinație", "Marfa predată transportatorului desemnat de cumpărător la locul convenit", "Export complet inclus", "Asigurare inclusă"],
      de: ["Lieferung am Bestimmungsort", "Ware dem vom Käufer benannten Frachtführer am vereinbarten Ort übergeben", "Export komplett inklusive", "Versicherung inklusive"],
      en: ["Delivery at destination", "Goods delivered to carrier nominated by buyer at agreed place", "Export fully included", "Insurance included"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FCA transferă riscul când marfa este predată transportatorului la locația specificată.",
      de: "FCA überträgt das Risiko wenn die Ware am angegebenen Ort an den Frachtführer übergeben wird.",
      en: "FCA transfers risk when goods are delivered to the carrier at the specified location."
    }
  },
  {
    question: {
      ro: "Ce reprezintă CPT (Carriage Paid To)?",
      de: "Was bedeutet CPT (Carriage Paid To)?",
      en: "What does CPT (Carriage Paid To) represent?"
    },
    options: {
      ro: ["Asigurare plătită", "Transportul plătit de vânzător până la destinație, riscul trece la predare", "Taxe vamale plătite", "Livrare în port"],
      de: ["Versicherung bezahlt", "Transport vom Verkäufer bis Bestimmungsort bezahlt, Risiko geht bei Übergabe über", "Zölle bezahlt", "Lieferung im Hafen"],
      en: ["Insurance paid", "Carriage paid by seller to destination, risk transfers at handover", "Customs duties paid", "Delivery at port"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CPT: vânzătorul plătește transportul, dar riscul trece la cumpărător când marfa e predată transportatorului.",
      de: "CPT: Verkäufer zahlt Transport, aber Risiko geht auf Käufer über wenn Ware dem Frachtführer übergeben wird.",
      en: "CPT: seller pays carriage, but risk passes to buyer when goods are handed to carrier."
    }
  },
  {
    question: {
      ro: "Ce înseamnă CIP (Carriage and Insurance Paid To)?",
      de: "Was bedeutet CIP (Carriage and Insurance Paid To)?",
      en: "What does CIP (Carriage and Insurance Paid To) mean?"
    },
    options: {
      ro: ["Doar transport", "Transport și asigurare plătite de vânzător până la destinație", "Doar asigurare", "Taxe vamale incluse"],
      de: ["Nur Transport", "Transport und Versicherung vom Verkäufer bis Bestimmungsort bezahlt", "Nur Versicherung", "Zölle inklusive"],
      en: ["Only transport", "Carriage and insurance paid by seller to destination", "Only insurance", "Customs duties included"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CIP este similar cu CPT, dar include și asigurarea mărfii plătită de vânzător.",
      de: "CIP ist ähnlich wie CPT, beinhaltet aber auch die vom Verkäufer bezahlte Warenversicherung.",
      en: "CIP is similar to CPT, but also includes goods insurance paid by seller."
    }
  },
  {
    question: {
      ro: "Ce reprezintă DAP (Delivered at Place)?",
      de: "Was bedeutet DAP (Delivered at Place)?",
      en: "What does DAP (Delivered at Place) represent?"
    },
    options: {
      ro: ["Livrare în port", "Marfa livrată la destinație, gata de descărcare, fără vămuire import", "Livrare cu taxe vamale", "Livrare în fabrică"],
      de: ["Lieferung im Hafen", "Ware am Bestimmungsort geliefert, entladebereit, ohne Einfuhrverzollung", "Lieferung mit Zöllen", "Lieferung ab Fabrik"],
      en: ["Delivery at port", "Goods delivered at destination, ready for unloading, without import clearance", "Delivery with customs", "Delivery at factory"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DAP: vânzătorul livrează la destinație, cumpărătorul se ocupă de descărcare și vămuirea de import.",
      de: "DAP: Verkäufer liefert am Bestimmungsort, Käufer übernimmt Entladung und Einfuhrverzollung.",
      en: "DAP: seller delivers at destination, buyer handles unloading and import clearance."
    }
  },
  {
    question: {
      ro: "Ce înseamnă DPU (Delivered at Place Unloaded)?",
      de: "Was bedeutet DPU (Delivered at Place Unloaded)?",
      en: "What does DPU (Delivered at Place Unloaded) mean?"
    },
    options: {
      ro: ["Livrare fără descărcare", "Marfa livrată și descărcată la destinație, fără vămuire import", "Doar transport", "Livrare în port"],
      de: ["Lieferung ohne Entladung", "Ware am Bestimmungsort geliefert und entladen, ohne Einfuhrverzollung", "Nur Transport", "Lieferung im Hafen"],
      en: ["Delivery without unloading", "Goods delivered and unloaded at destination, without import clearance", "Only transport", "Delivery at port"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DPU este singurul Incoterm unde vânzătorul are obligația de a descărca marfa.",
      de: "DPU ist der einzige Incoterm bei dem der Verkäufer die Ware entladen muss.",
      en: "DPU is the only Incoterm where seller must unload the goods."
    }
  },
  {
    question: {
      ro: "Ce reprezintă DDP (Delivered Duty Paid)?",
      de: "Was bedeutet DDP (Delivered Duty Paid)?",
      en: "What does DDP (Delivered Duty Paid) represent?"
    },
    options: {
      ro: ["Responsabilitate minimă vânzător", "Responsabilitate maximă vânzător - livrare cu taxe vamale plătite", "Fără taxe", "Doar transport"],
      de: ["Minimale Verkäuferverantwortung", "Maximale Verkäuferverantwortung - Lieferung mit bezahlten Zöllen", "Ohne Zölle", "Nur Transport"],
      en: ["Minimum seller responsibility", "Maximum seller responsibility - delivery with customs duties paid", "No duties", "Only transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DDP plasează responsabilitatea maximă pe vânzător - include tot până la destinația finală.",
      de: "DDP legt maximale Verantwortung auf den Verkäufer - beinhaltet alles bis zum Endziel.",
      en: "DDP places maximum responsibility on seller - includes everything to final destination."
    }
  },
  {
    question: {
      ro: "Care Incoterms sunt doar pentru transport maritim?",
      de: "Welche Incoterms sind nur für Seetransport?",
      en: "Which Incoterms are only for sea transport?"
    },
    options: {
      ro: ["EXW, FCA, DAP", "FOB, CFR, CIF, FAS", "CPT, CIP, DPU", "Toate Incoterms"],
      de: ["EXW, FCA, DAP", "FOB, CFR, CIF, FAS", "CPT, CIP, DPU", "Alle Incoterms"],
      en: ["EXW, FCA, DAP", "FOB, CFR, CIF, FAS", "CPT, CIP, DPU", "All Incoterms"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FOB, CFR, CIF și FAS sunt exclusiv pentru transport maritim sau pe căi navigabile interioare.",
      de: "FOB, CFR, CIF und FAS sind ausschließlich für See- oder Binnenschifffahrt.",
      en: "FOB, CFR, CIF and FAS are exclusively for sea or inland waterway transport."
    }
  },
  {
    question: {
      ro: "Ce înseamnă FOB (Free On Board)?",
      de: "Was bedeutet FOB (Free On Board)?",
      en: "What does FOB (Free On Board) mean?"
    },
    options: {
      ro: ["Livrare aeriană", "Marfa predată la bordul navei în portul de încărcare", "Livrare rutieră", "Livrare la depozit"],
      de: ["Luftlieferung", "Ware an Bord des Schiffes im Verladehafen übergeben", "Straßenlieferung", "Lieferung ans Lager"],
      en: ["Air delivery", "Goods delivered on board ship at loading port", "Road delivery", "Warehouse delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FOB: riscul trece când marfa este la bordul navei în portul de expediere.",
      de: "FOB: Risiko geht über wenn die Ware an Bord des Schiffes im Versandhafen ist.",
      en: "FOB: risk transfers when goods are on board the ship at the port of shipment."
    }
  },
  {
    question: {
      ro: "Ce reprezintă CIF (Cost, Insurance and Freight)?",
      de: "Was bedeutet CIF (Cost, Insurance and Freight)?",
      en: "What does CIF (Cost, Insurance and Freight) represent?"
    },
    options: {
      ro: ["Doar cost", "Cost, asigurare și navlu plătite de vânzător până în portul de destinație", "Doar navlu", "Doar asigurare"],
      de: ["Nur Kosten", "Kosten, Versicherung und Fracht vom Verkäufer bis zum Bestimmungshafen bezahlt", "Nur Fracht", "Nur Versicherung"],
      en: ["Only cost", "Cost, insurance and freight paid by seller to destination port", "Only freight", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CIF: vânzătorul plătește costul, asigurarea și navlul, dar riscul trece la încărcare.",
      de: "CIF: Verkäufer zahlt Kosten, Versicherung und Fracht, aber Risiko geht bei Verladung über.",
      en: "CIF: seller pays cost, insurance and freight, but risk transfers at loading."
    }
  },
  {
    question: {
      ro: "Care este versiunea actuală a Incoterms?",
      de: "Was ist die aktuelle Version der Incoterms?",
      en: "What is the current version of Incoterms?"
    },
    options: {
      ro: ["Incoterms 2000", "Incoterms 2020", "Incoterms 2010", "Incoterms 2015"],
      de: ["Incoterms 2000", "Incoterms 2020", "Incoterms 2010", "Incoterms 2015"],
      en: ["Incoterms 2000", "Incoterms 2020", "Incoterms 2010", "Incoterms 2015"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Incoterms 2020 este versiunea în vigoare, publicată de Camera Internațională de Comerț.",
      de: "Incoterms 2020 ist die gültige Version, veröffentlicht von der Internationalen Handelskammer.",
      en: "Incoterms 2020 is the current version, published by the International Chamber of Commerce."
    }
  },
  {
    question: {
      ro: "Unde se transferă riscul în EXW?",
      de: "Wo geht das Risiko bei EXW über?",
      en: "Where does risk transfer in EXW?"
    },
    options: {
      ro: ["La frontieră", "La sediul vânzătorului când marfa e pusă la dispoziție", "În port", "La destinație"],
      de: ["An der Grenze", "Am Sitz des Verkäufers wenn Ware bereitgestellt wird", "Im Hafen", "Am Bestimmungsort"],
      en: ["At border", "At seller's premises when goods are made available", "At port", "At destination"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În EXW, riscul trece la cumpărător chiar de la locația vânzătorului.",
      de: "Bei EXW geht das Risiko direkt am Standort des Verkäufers auf den Käufer über.",
      en: "In EXW, risk transfers to buyer right at the seller's location."
    }
  },
  {
    question: {
      ro: "Ce Incoterm recomandați pentru transport rutier internațional?",
      de: "Welchen Incoterm empfehlen Sie für internationalen Straßentransport?",
      en: "Which Incoterm do you recommend for international road transport?"
    },
    options: {
      ro: ["FOB", "FCA, CPT, CIP, DAP sau DDP", "CIF", "FAS"],
      de: ["FOB", "FCA, CPT, CIP, DAP oder DDP", "CIF", "FAS"],
      en: ["FOB", "FCA, CPT, CIP, DAP or DDP", "CIF", "FAS"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru transport rutier, se folosesc Incoterms multimodale: FCA, CPT, CIP, DAP, DPU sau DDP.",
      de: "Für Straßentransport werden multimodale Incoterms verwendet: FCA, CPT, CIP, DAP, DPU oder DDP.",
      en: "For road transport, multimodal Incoterms are used: FCA, CPT, CIP, DAP, DPU or DDP."
    }
  },
  {
    question: {
      ro: "Cine plătește exportul în FCA?",
      de: "Wer zahlt den Export bei FCA?",
      en: "Who pays for export in FCA?"
    },
    options: {
      ro: ["Cumpărătorul", "Vânzătorul", "Transportatorul", "Autoritatea vamală"],
      de: ["Käufer", "Verkäufer", "Frachtführer", "Zollbehörde"],
      en: ["Buyer", "Seller", "Carrier", "Customs authority"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În FCA, vânzătorul se ocupă de formalitățile și costurile de export.",
      de: "Bei FCA kümmert sich der Verkäufer um Exportformalitäten und -kosten.",
      en: "In FCA, seller handles export formalities and costs."
    }
  },
  {
    question: {
      ro: "Ce înseamnă CFR (Cost and Freight)?",
      de: "Was bedeutet CFR (Cost and Freight)?",
      en: "What does CFR (Cost and Freight) mean?"
    },
    options: {
      ro: ["Doar cost", "Cost și navlu plătite de vânzător până în portul de destinație, fără asigurare", "Cost și asigurare", "Doar navlu"],
      de: ["Nur Kosten", "Kosten und Fracht vom Verkäufer bis Bestimmungshafen bezahlt, ohne Versicherung", "Kosten und Versicherung", "Nur Fracht"],
      en: ["Only cost", "Cost and freight paid by seller to destination port, without insurance", "Cost and insurance", "Only freight"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CFR este similar cu CIF, dar fără obligația de asigurare din partea vânzătorului.",
      de: "CFR ist ähnlich wie CIF, aber ohne Versicherungspflicht seitens des Verkäufers.",
      en: "CFR is similar to CIF, but without seller's insurance obligation."
    }
  },
  {
    question: {
      ro: "Ce diferențiază DAP de DPU?",
      de: "Was unterscheidet DAP von DPU?",
      en: "What differentiates DAP from DPU?"
    },
    options: {
      ro: ["Asigurarea", "În DPU vânzătorul descarcă marfa, în DAP nu", "Taxele vamale", "Transportul"],
      de: ["Versicherung", "Bei DPU entlädt Verkäufer die Ware, bei DAP nicht", "Zölle", "Transport"],
      en: ["Insurance", "In DPU seller unloads goods, in DAP not", "Customs duties", "Transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DPU include descărcarea de către vânzător; DAP livrează marfa gata de descărcare.",
      de: "DPU beinhaltet Entladung durch Verkäufer; DAP liefert Ware entladebereit.",
      en: "DPU includes unloading by seller; DAP delivers goods ready for unloading."
    }
  },
  {
    question: {
      ro: "Cine se ocupă de vămuirea de import în DDP?",
      de: "Wer kümmert sich um die Einfuhrverzollung bei DDP?",
      en: "Who handles import clearance in DDP?"
    },
    options: {
      ro: ["Cumpărătorul", "Vânzătorul", "Transportatorul", "Autoritatea vamală"],
      de: ["Käufer", "Verkäufer", "Frachtführer", "Zollbehörde"],
      en: ["Buyer", "Seller", "Carrier", "Customs authority"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În DDP, vânzătorul se ocupă de toate formalitățile vamale, inclusiv importul.",
      de: "Bei DDP kümmert sich der Verkäufer um alle Zollformalitäten, einschließlich Import.",
      en: "In DDP, seller handles all customs formalities, including import."
    }
  },
  {
    question: {
      ro: "Ce nivel de asigurare este necesar în CIP conform Incoterms 2020?",
      de: "Welches Versicherungsniveau ist bei CIP gemäß Incoterms 2020 erforderlich?",
      en: "What insurance level is required in CIP according to Incoterms 2020?"
    },
    options: {
      ro: ["Asigurare minimă (C)", "Asigurare maximă - toate riscurile (A)", "Fără asigurare", "Asigurare medie (B)"],
      de: ["Mindestversicherung (C)", "Maximalversicherung - alle Risiken (A)", "Keine Versicherung", "Mittlere Versicherung (B)"],
      en: ["Minimum insurance (C)", "Maximum insurance - all risks (A)", "No insurance", "Medium insurance (B)"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Incoterms 2020 a crescut nivelul de asigurare în CIP la clauza A (toate riscurile).",
      de: "Incoterms 2020 erhöhte das Versicherungsniveau bei CIP auf Klausel A (alle Risiken).",
      en: "Incoterms 2020 increased insurance level in CIP to clause A (all risks)."
    }
  },
  {
    question: {
      ro: "Ce înseamnă FAS (Free Alongside Ship)?",
      de: "Was bedeutet FAS (Free Alongside Ship)?",
      en: "What does FAS (Free Alongside Ship) mean?"
    },
    options: {
      ro: ["Livrare la bordul navei", "Marfa livrată lângă navă în portul de încărcare", "Livrare la destinație", "Livrare rutieră"],
      de: ["Lieferung an Bord", "Ware neben dem Schiff im Verladehafen geliefert", "Lieferung am Bestimmungsort", "Straßenlieferung"],
      en: ["Delivery on board", "Goods delivered alongside the ship at loading port", "Delivery at destination", "Road delivery"]
    },
    correctIndex: 1,
    explanation: {
      ro: "FAS: vânzătorul livrează marfa lângă navă; încărcarea e în sarcina cumpărătorului.",
      de: "FAS: Verkäufer liefert Ware neben dem Schiff; Verladung obliegt dem Käufer.",
      en: "FAS: seller delivers goods alongside ship; loading is buyer's responsibility."
    }
  },
  {
    question: {
      ro: "Cum se specifică corect un Incoterm în contract?",
      de: "Wie wird ein Incoterm im Vertrag korrekt angegeben?",
      en: "How is an Incoterm correctly specified in a contract?"
    },
    options: {
      ro: ["Doar codul", "Codul + locația + versiunea (ex: FCA București Incoterms 2020)", "Doar locația", "Doar versiunea"],
      de: ["Nur Code", "Code + Ort + Version (z.B. FCA Bukarest Incoterms 2020)", "Nur Ort", "Nur Version"],
      en: ["Only code", "Code + location + version (e.g. FCA Bucharest Incoterms 2020)", "Only location", "Only version"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Specificarea completă previne confuzii: cod Incoterm + locație precisă + versiunea folosită.",
      de: "Vollständige Angabe verhindert Verwirrung: Incoterm-Code + genauer Ort + verwendete Version.",
      en: "Complete specification prevents confusion: Incoterm code + precise location + version used."
    }
  },
  {
    question: {
      ro: "În CPT, unde trece riscul de la vânzător la cumpărător?",
      de: "Bei CPT, wo geht das Risiko vom Verkäufer auf den Käufer über?",
      en: "In CPT, where does risk pass from seller to buyer?"
    },
    options: {
      ro: ["La destinație", "Când marfa e predată primului transportator", "La frontieră", "În port"],
      de: ["Am Bestimmungsort", "Wenn Ware dem ersten Frachtführer übergeben wird", "An der Grenze", "Im Hafen"],
      en: ["At destination", "When goods are handed over to first carrier", "At border", "At port"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În CPT, riscul trece devreme (la predarea către transportator), deși vânzătorul plătește transportul.",
      de: "Bei CPT geht das Risiko früh über (bei Übergabe an Frachtführer), obwohl Verkäufer Transport zahlt.",
      en: "In CPT, risk passes early (at handover to carrier), although seller pays for transport."
    }
  },
  {
    question: {
      ro: "Ce problemă poate apărea când folosești FOB pentru transport containerizat?",
      de: "Welches Problem kann bei FOB für Containertransport auftreten?",
      en: "What problem can arise when using FOB for containerized transport?"
    },
    options: {
      ro: ["Nicio problemă", "Riscul trece la balustrada navei, dar containerul e predat în terminal", "Cost prea mare", "Lipsa documentelor"],
      de: ["Kein Problem", "Risiko geht an Schiffsreling über, aber Container wird im Terminal übergeben", "Zu hohe Kosten", "Fehlende Dokumente"],
      en: ["No problem", "Risk passes at ship's rail, but container is handed over at terminal", "Too high cost", "Missing documents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pentru containere, FCA este mai potrivit deoarece transferul are loc la terminal, nu la navă.",
      de: "Für Container ist FCA geeigneter, da die Übergabe am Terminal erfolgt, nicht am Schiff.",
      en: "For containers, FCA is more suitable as handover occurs at terminal, not at ship."
    }
  },
  {
    question: {
      ro: "Cine suportă costul descărcării în DAP?",
      de: "Wer trägt die Entladekosten bei DAP?",
      en: "Who bears the unloading cost in DAP?"
    },
    options: {
      ro: ["Vânzătorul", "Cumpărătorul", "Transportatorul", "Se împart"],
      de: ["Verkäufer", "Käufer", "Frachtführer", "Geteilt"],
      en: ["Seller", "Buyer", "Carrier", "Shared"]
    },
    correctIndex: 1,
    explanation: {
      ro: "În DAP, cumpărătorul suportă costul descărcării; vânzătorul livrează gata de descărcare.",
      de: "Bei DAP trägt der Käufer die Entladekosten; Verkäufer liefert entladebereit.",
      en: "In DAP, buyer bears unloading cost; seller delivers ready for unloading."
    }
  },
  {
    question: {
      ro: "Ce este important de știut despre asigurare în CIF?",
      de: "Was ist wichtig über Versicherung bei CIF zu wissen?",
      en: "What is important to know about insurance in CIF?"
    },
    options: {
      ro: ["Nu include asigurare", "Include asigurare minimă (clauza C), cumpărătorul poate cere mai mult", "Include asigurare maximă", "Asigurare opțională"],
      de: ["Beinhaltet keine Versicherung", "Beinhaltet Mindestversicherung (Klausel C), Käufer kann mehr verlangen", "Beinhaltet Maximalversicherung", "Optionale Versicherung"],
      en: ["No insurance included", "Includes minimum insurance (clause C), buyer can request more", "Includes maximum insurance", "Optional insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CIF include doar asigurare minimă; pentru protecție completă, cumpărătorul trebuie să negocieze.",
      de: "CIF beinhaltet nur Mindestversicherung; für vollständigen Schutz muss Käufer verhandeln.",
      en: "CIF includes only minimum insurance; for full protection, buyer must negotiate."
    }
  },
  {
    question: {
      ro: "Care Incoterm oferă cea mai mare protecție pentru cumpărător?",
      de: "Welcher Incoterm bietet dem Käufer den größten Schutz?",
      en: "Which Incoterm offers the most protection for the buyer?"
    },
    options: {
      ro: ["EXW", "DDP", "FCA", "FOB"],
      de: ["EXW", "DDP", "FCA", "FOB"],
      en: ["EXW", "DDP", "FCA", "FOB"]
    },
    correctIndex: 1,
    explanation: {
      ro: "DDP oferă protecție maximă cumpărătorului - vânzătorul asumă toate riscurile și costurile.",
      de: "DDP bietet maximalen Käuferschutz - Verkäufer übernimmt alle Risiken und Kosten.",
      en: "DDP offers maximum buyer protection - seller assumes all risks and costs."
    }
  },
  {
    question: {
      ro: "Când se folosește EXW?",
      de: "Wann wird EXW verwendet?",
      en: "When is EXW used?"
    },
    options: {
      ro: ["Transport internațional complex", "Când cumpărătorul are experiență în export și dorește control total", "Transport local", "Întotdeauna"],
      de: ["Komplexer internationaler Transport", "Wenn Käufer Exporterfahrung hat und totale Kontrolle will", "Lokaler Transport", "Immer"],
      en: ["Complex international transport", "When buyer has export experience and wants total control", "Local transport", "Always"]
    },
    correctIndex: 1,
    explanation: {
      ro: "EXW e potrivit când cumpărătorul poate gestiona exportul și transportul complet.",
      de: "EXW ist geeignet wenn Käufer Export und Transport komplett verwalten kann.",
      en: "EXW is suitable when buyer can fully manage export and transport."
    }
  },
  {
    question: {
      ro: "Ce obligații are vânzătorul în toate Incoterms?",
      de: "Welche Pflichten hat der Verkäufer in allen Incoterms?",
      en: "What obligations does the seller have in all Incoterms?"
    },
    options: {
      ro: ["Transport complet", "Furnizarea mărfii și a documentelor conforme cu contractul", "Asigurare", "Vămuire import"],
      de: ["Kompletter Transport", "Bereitstellung von Ware und Dokumenten gemäß Vertrag", "Versicherung", "Einfuhrverzollung"],
      en: ["Complete transport", "Providing goods and documents conforming to contract", "Insurance", "Import clearance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Indiferent de Incoterm, vânzătorul trebuie să livreze marfa și documentele conforme.",
      de: "Unabhängig vom Incoterm muss der Verkäufer konforme Ware und Dokumente liefern.",
      en: "Regardless of Incoterm, seller must deliver conforming goods and documents."
    }
  },
  {
    question: {
      ro: "Ce se întâmplă dacă nu specifici versiunea Incoterms?",
      de: "Was passiert wenn Sie die Incoterms-Version nicht angeben?",
      en: "What happens if you don't specify the Incoterms version?"
    },
    options: {
      ro: ["Se aplică automat cea mai nouă", "Poate genera confuzie și dispute legale", "Nu contează", "Se aplică versiunea 2000"],
      de: ["Neueste wird automatisch angewendet", "Kann Verwirrung und Rechtsstreitigkeiten verursachen", "Spielt keine Rolle", "Version 2000 wird angewendet"],
      en: ["Latest is automatically applied", "Can cause confusion and legal disputes", "Doesn't matter", "Version 2000 is applied"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Specificarea versiunii este esențială pentru claritate contractuală și evitarea disputelor.",
      de: "Versionsangabe ist wesentlich für vertragliche Klarheit und Streitvermeidung.",
      en: "Specifying version is essential for contractual clarity and dispute avoidance."
    }
  }
];
