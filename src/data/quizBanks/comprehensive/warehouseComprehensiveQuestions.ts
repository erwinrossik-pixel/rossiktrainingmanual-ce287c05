import { TranslatedQuizQuestion } from "@/data/quizTranslations";

export const warehouseComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele funcții ale unui depozit în lanțul de aprovizionare?",
      de: "Was sind die Hauptfunktionen eines Lagers in der Lieferkette?",
      en: "What are the main functions of a warehouse in the supply chain?"
    },
    options: {
      ro: ["Recepție, depozitare, picking, ambalare, expediere, gestiune stoc, cross-docking, servicii cu valoare adăugată", "Doar depozitare", "Exclusiv transport", "Numai producție"],
      de: ["Wareneingang, Lagerung, Picking, Verpackung, Versand, Bestandsmanagement, Cross-Docking, Mehrwertdienste", "Nur Lagerung", "Ausschließlich Transport", "Nur Produktion"],
      en: ["Reception, storage, picking, packing, shipping, inventory management, cross-docking, value-added services", "Only storage", "Exclusively transport", "Only production"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Depozitul modern e un nod activ în supply chain, nu doar spațiu de stocare. Serviciile cu valoare adăugată: etichetare, asamblare, personalizare.",
      de: "Modernes Lager ist aktiver Knotenpunkt in Supply Chain, nicht nur Lagerraum. Mehrwertdienste: Etikettierung, Montage, Personalisierung.",
      en: "Modern warehouse is an active node in supply chain, not just storage space. Value-added services: labeling, assembly, customization."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este 'cross-docking' și când se utilizează?",
      de: "Was ist 'Cross-Docking' und wann wird es verwendet?",
      en: "What is 'cross-docking' and when is it used?"
    },
    options: {
      ro: ["Transfer direct din vehiculul de intrare în cel de ieșire, cu stocare minimă sau zero, pentru accelerare flux și reducere costuri", "Metodă de stivuire înaltă", "Tip de ambalare", "Doar pentru marfă periculoasă"],
      de: ["Direkter Transfer vom Eingangs- zum Ausgangsfahrzeug, mit minimaler oder null Lagerung, zur Flussbeschleunigung und Kostenreduzierung", "Hochstapelmethode", "Verpackungsart", "Nur für Gefahrgut"],
      en: ["Direct transfer from inbound to outbound vehicle, with minimal or zero storage, for flow acceleration and cost reduction", "High stacking method", "Packaging type", "Only for dangerous goods"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cross-docking: ideal pentru produse cu rotație mare sau transport consolidat. Reduce timpul și costul de manipulare.",
      de: "Cross-Docking: ideal für schnelldrehende Produkte oder konsolidierten Transport. Reduziert Zeit und Handlingkosten.",
      en: "Cross-docking: ideal for fast-moving products or consolidated transport. Reduces time and handling costs."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele tipuri de sisteme de depozitare?",
      de: "Was sind die Haupttypen von Lagersystemen?",
      en: "What are the main types of storage systems?"
    },
    options: {
      ro: ["Rafturi selective (palet la palet), drive-in/drive-through, push-back, flow rack, automate (AS/RS)", "Doar stivuire pe podea", "Exclusiv containere", "Numai cutii de carton"],
      de: ["Selektive Regale (Palette zu Palette), Drive-in/Drive-through, Push-back, Flow Rack, automatisiert (AS/RS)", "Nur Bodenstapelung", "Ausschließlich Container", "Nur Kartons"],
      en: ["Selective racking (pallet to pallet), drive-in/drive-through, push-back, flow rack, automated (AS/RS)", "Only floor stacking", "Exclusively containers", "Only cardboard boxes"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Alegerea depinde de: SKU-uri, rotație, acces necesar, buget. Selective: acces 100%. Drive-in: densitate mare, LIFO.",
      de: "Wahl hängt ab von: SKUs, Rotation, Zugangsbedarf, Budget. Selektiv: 100% Zugang. Drive-in: hohe Dichte, LIFO.",
      en: "Choice depends on: SKUs, rotation, access needed, budget. Selective: 100% access. Drive-in: high density, LIFO."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un WMS (Warehouse Management System)?",
      de: "Was ist ein WMS (Warehouse Management System)?",
      en: "What is a WMS (Warehouse Management System)?"
    },
    options: {
      ro: ["Software pentru gestionarea operațiunilor de depozit: recepție, localizare, picking, expediere, inventar în timp real", "Sistem de securitate", "Echipament de ridicare", "Metodă de ambalare"],
      de: ["Software zur Verwaltung von Lageroperationen: Wareneingang, Lokalisierung, Picking, Versand, Echtzeit-Inventar", "Sicherheitssystem", "Hebegerät", "Verpackungsmethode"],
      en: ["Software for managing warehouse operations: reception, location, picking, shipping, real-time inventory", "Security system", "Lifting equipment", "Packaging method"]
    },
    correctIndex: 0,
    explanation: {
      ro: "WMS-ul coordonează toate operațiunile, optimizează locațiile, direcționează picking-ul și oferă vizibilitate asupra stocului.",
      de: "WMS koordiniert alle Operationen, optimiert Standorte, leitet Picking und bietet Bestandstransparenz.",
      en: "WMS coordinates all operations, optimizes locations, directs picking and provides stock visibility."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt principalele metode de picking în depozit?",
      de: "Was sind die Hauptpicking-Methoden im Lager?",
      en: "What are the main picking methods in warehouse?"
    },
    options: {
      ro: ["Picking individual (per comandă), batch picking (mai multe comenzi), zone picking, wave picking, pick-to-light, voice picking", "Doar picking aleatoriu", "Exclusiv automat", "Numai pentru colete mici"],
      de: ["Einzelpicking (pro Auftrag), Batch-Picking (mehrere Aufträge), Zonen-Picking, Wave-Picking, Pick-to-Light, Voice-Picking", "Nur zufälliges Picking", "Ausschließlich automatisch", "Nur für kleine Pakete"],
      en: ["Individual picking (per order), batch picking (multiple orders), zone picking, wave picking, pick-to-light, voice picking", "Only random picking", "Exclusively automatic", "Only for small parcels"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Metoda optimă depinde de profil comenzi. E-commerce cu multe SKU-uri mici: batch picking eficient. B2B cu paleți: picking pe comandă.",
      de: "Optimale Methode hängt vom Auftragsprofil ab. E-Commerce mit vielen kleinen SKUs: Batch-Picking effizient. B2B mit Paletten: Einzelauftrag-Picking.",
      en: "Optimal method depends on order profile. E-commerce with many small SKUs: batch picking efficient. B2B with pallets: per-order picking."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este FIFO și LIFO în gestiunea stocurilor?",
      de: "Was ist FIFO und LIFO im Bestandsmanagement?",
      en: "What is FIFO and LIFO in inventory management?"
    },
    options: {
      ro: ["FIFO: First In First Out (primul intrat, primul ieșit); LIFO: Last In First Out (ultimul intrat, primul ieșit)", "Tipuri de ambalaje", "Metode de transport", "Coduri de bare"],
      de: ["FIFO: First In First Out (zuerst rein, zuerst raus); LIFO: Last In First Out (zuletzt rein, zuerst raus)", "Verpackungsarten", "Transportmethoden", "Barcodes"],
      en: ["FIFO: First In First Out; LIFO: Last In First Out", "Packaging types", "Transport methods", "Barcodes"]
    },
    correctIndex: 0,
    explanation: {
      ro: "FIFO: obligatoriu pentru produse cu dată de expirare (alimente, pharma). LIFO: acceptabil pentru produse stabile (construcții).",
      de: "FIFO: obligatorisch für Produkte mit Ablaufdatum (Lebensmittel, Pharma). LIFO: akzeptabel für stabile Produkte (Bau).",
      en: "FIFO: mandatory for products with expiry date (food, pharma). LIFO: acceptable for stable products (construction)."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt echipamentele de manipulare comune în depozite?",
      de: "Was sind gängige Handhabungsgeräte in Lagern?",
      en: "What are common handling equipment in warehouses?"
    },
    options: {
      ro: ["Stivuitoare (forklift), transpalete manuale și electrice, reachstackere, conveiere, sortatoare automate", "Doar mâini umane", "Exclusiv roboți", "Numai macarale"],
      de: ["Gabelstapler (Forklift), manuelle und elektrische Hubwagen, Reachstacker, Förderbänder, automatische Sortierer", "Nur menschliche Hände", "Ausschließlich Roboter", "Nur Kräne"],
      en: ["Forklifts, manual and electric pallet jacks, reachstackers, conveyors, automatic sorters", "Only human hands", "Exclusively robots", "Only cranes"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Alegerea echipamentului depinde de: tip marfă, înălțime rafturi, volum operații, buget. Electrice preferate în interior pentru emisii zero.",
      de: "Gerätewahl hängt ab von: Frachttyp, Regalhöhe, Operationsvolumen, Budget. Elektrisch bevorzugt für emissionsfreie Innenräume.",
      en: "Equipment choice depends on: cargo type, rack height, operation volume, budget. Electric preferred indoors for zero emissions."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'locație dedicată' vs 'locație aleatorie' în depozit?",
      de: "Was bedeutet 'dedizierter Standort' vs 'zufälliger Standort' im Lager?",
      en: "What does 'dedicated location' vs 'random location' mean in warehouse?"
    },
    options: {
      ro: ["Dedicată: fiecare SKU are loc fix; Aleatorie: SKU merge în orice loc liber, WMS urmărește poziția", "Tipuri de rafturi", "Metode de livrare", "Nu există diferență"],
      de: ["Dediziert: jede SKU hat festen Platz; Zufällig: SKU geht in jeden freien Platz, WMS verfolgt Position", "Regaltypen", "Liefermethoden", "Kein Unterschied"],
      en: ["Dedicated: each SKU has fixed place; Random: SKU goes in any free place, WMS tracks position", "Rack types", "Delivery methods", "No difference"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Aleatoriu: utilizare mai bună a spațiului (până la +25%). Dedicat: mai ușor pentru operatori fără WMS. Hibrid: fast movers în locații fixe.",
      de: "Zufällig: bessere Raumnutzung (bis zu +25%). Dediziert: einfacher für Bediener ohne WMS. Hybrid: Schnelldreher in festen Standorten.",
      en: "Random: better space utilization (up to +25%). Dedicated: easier for operators without WMS. Hybrid: fast movers in fixed locations."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verificări se fac la recepția mărfurilor în depozit?",
      de: "Welche Prüfungen werden beim Wareneingang im Lager durchgeführt?",
      en: "What checks are done at goods reception in warehouse?"
    },
    options: {
      ro: ["Verificare documente, numărare colete, inspecție vizuală (daune), verificare greutate/dimensiuni, scanare cod bare, notare discrepanțe", "Nicio verificare", "Doar semnare document", "Exclusiv numărare"],
      de: ["Dokumentenprüfung, Packstückzählung, visuelle Inspektion (Schäden), Gewicht/Maße prüfen, Barcode-Scan, Diskrepanzen notieren", "Keine Prüfung", "Nur Dokument unterschreiben", "Ausschließlich Zählung"],
      en: ["Document verification, package counting, visual inspection (damages), weight/dimensions check, barcode scanning, note discrepancies", "No verification", "Only sign document", "Exclusively counting"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Recepția corectă previne dispute. Fotografierea daunelor e esențială. Discrepanțele se notează pe documente și se raportează imediat.",
      de: "Korrekte Rezeption verhindert Streitigkeiten. Fotografieren von Schäden ist essentiell. Diskrepanzen auf Dokumenten notieren und sofort melden.",
      en: "Correct reception prevents disputes. Photographing damages is essential. Discrepancies noted on documents and reported immediately."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un 'packing slip' (bon de ambalare)?",
      de: "Was ist ein 'Packing Slip' (Packzettel)?",
      en: "What is a 'packing slip' (packing list)?"
    },
    options: {
      ro: ["Document care listează conținutul fiecărui colet/palet, facilitează verificarea la recepție și expediere", "Factură comercială", "Document de transport", "Certificat de origine"],
      de: ["Dokument das Inhalt jedes Packstücks/Palette auflistet, erleichtert Prüfung bei Rezeption und Versand", "Handelsrechnung", "Transportdokument", "Ursprungszertifikat"],
      en: ["Document listing contents of each package/pallet, facilitates verification at reception and shipping", "Commercial invoice", "Transport document", "Certificate of origin"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Packing slip: esențial pentru picking, inventar, reclamații. Trebuie să corespundă cu factura și CMR.",
      de: "Packzettel: essentiell für Picking, Inventar, Reklamationen. Muss mit Rechnung und CMR übereinstimmen.",
      en: "Packing slip: essential for picking, inventory, claims. Must match with invoice and CMR."
    }
  },

  // Level 4 Questions (10)
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum calculezi spațiul de depozitare necesar pentru un anumit volum de marfă?",
      de: "Wie berechnen Sie den benötigten Lagerraum für ein bestimmtes Frachtvolumen?",
      en: "How do you calculate storage space needed for a specific cargo volume?"
    },
    options: {
      ro: ["Analizezi: nr paleți, înălțime stivuire, rotație stoc, culoare acces, spații anexe (recepție, expediere, birouri) + factorul de utilizare (70-85%)", "Doar suprafața în mp", "Volumul mărfii = spațiul necesar", "Nu se poate calcula"],
      de: ["Analysieren: Palettenanzahl, Stapelhöhe, Bestandsrotation, Gänge, Nebenräume (Rezeption, Versand, Büros) + Nutzungsfaktor (70-85%)", "Nur Fläche in qm", "Frachtvolumen = benötigter Raum", "Nicht berechenbar"],
      en: ["Analyze: pallet count, stacking height, stock rotation, aisles, annexes (reception, shipping, offices) + utilization factor (70-85%)", "Only area in sqm", "Cargo volume = needed space", "Cannot be calculated"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Utilizarea reală nu depășește 85% din capacitate teoretică. Culoarele pentru stivuitoare ocupă 30-40% din suprafață.",
      de: "Tatsächliche Nutzung übersteigt 85% der theoretischen Kapazität nicht. Gänge für Gabelstapler nehmen 30-40% der Fläche ein.",
      en: "Actual utilization doesn't exceed 85% of theoretical capacity. Forklift aisles take 30-40% of area."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt KPI-urile esențiale pentru performanța unui depozit?",
      de: "Was sind die wesentlichen KPIs für die Lagerleistung?",
      en: "What are essential KPIs for warehouse performance?"
    },
    options: {
      ro: ["Acuratețe inventar, picking accuracy, order cycle time, cost per linie, utilizare spațiu, productivitate angajat, rata de returnare", "Doar cost total", "Exclusiv număr comenzi", "Numai satisfacție client"],
      de: ["Inventargenauigkeit, Picking-Genauigkeit, Auftragszykluszeit, Kosten pro Zeile, Raumnutzung, Mitarbeiterproduktivität, Rücksendequote", "Nur Gesamtkosten", "Ausschließlich Auftragsanzahl", "Nur Kundenzufriedenheit"],
      en: ["Inventory accuracy, picking accuracy, order cycle time, cost per line, space utilization, employee productivity, return rate", "Only total cost", "Exclusively order count", "Only customer satisfaction"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Acuratețe inventar țintă: >99%. Picking accuracy: >99.5%. Benchmark-urile variază pe industrie și tip operație.",
      de: "Ziel Inventargenauigkeit: >99%. Picking-Genauigkeit: >99,5%. Benchmarks variieren nach Industrie und Operationstyp.",
      en: "Inventory accuracy target: >99%. Picking accuracy: >99.5%. Benchmarks vary by industry and operation type."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum optimizezi layout-ul unui depozit pentru eficiență maximă?",
      de: "Wie optimieren Sie das Lagerlayout für maximale Effizienz?",
      en: "How do you optimize warehouse layout for maximum efficiency?"
    },
    options: {
      ro: ["Flux logic (I, U sau L), fast movers aproape de expediere, zone dedicate per tip operație, minimizare distanțe parcurse, simulare înainte de implementare", "Design aleatoriu", "Produsele grele lângă intrare", "Nu contează layout-ul"],
      de: ["Logischer Fluss (I, U oder L), Schnelldreher nahe Versand, dedizierte Zonen pro Operationstyp, Wegstrecken minimieren, Simulation vor Implementierung", "Zufälliges Design", "Schwere Produkte nahe Eingang", "Layout ist egal"],
      en: ["Logical flow (I, U or L), fast movers near shipping, dedicated zones per operation type, minimize distances traveled, simulate before implementation", "Random design", "Heavy products near entrance", "Layout doesn't matter"]
    },
    correctIndex: 0,
    explanation: {
      ro: "20% din SKU-uri generează 80% din mișcări (Pareto). Aceste fast movers trebuie în zona 'aurie' - cel mai ușor accesibilă.",
      de: "20% der SKUs generieren 80% der Bewegungen (Pareto). Diese Schnelldreher gehören in die 'goldene' Zone - am leichtesten zugänglich.",
      en: "20% of SKUs generate 80% of movements (Pareto). These fast movers belong in 'golden' zone - most easily accessible."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt considerentele pentru gestionarea mărfurilor periculoase în depozit?",
      de: "Was sind die Überlegungen für die Handhabung gefährlicher Güter im Lager?",
      en: "What are considerations for handling dangerous goods in warehouse?"
    },
    options: {
      ro: ["Zone separate cu ventilație, echipament de protecție, separare clase incompatibile, training personal, documentație ADR, plan de urgență", "Stocare cu marfa normală", "Nu există cerințe speciale", "Doar etichetare diferită"],
      de: ["Separate Zonen mit Lüftung, Schutzausrüstung, Trennung unverträglicher Klassen, Personalschulung, ADR-Dokumentation, Notfallplan", "Lagerung mit normaler Fracht", "Keine besonderen Anforderungen", "Nur andere Kennzeichnung"],
      en: ["Separate zones with ventilation, protective equipment, incompatible class separation, personnel training, ADR documentation, emergency plan", "Storage with normal goods", "No special requirements", "Only different labeling"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ADR se aplică și în depozitare, nu doar în transport. Nerespectarea = amenzi mari + risc de accidente grave.",
      de: "ADR gilt auch für Lagerung, nicht nur Transport. Nichteinhaltung = hohe Bußgelder + Risiko schwerer Unfälle.",
      en: "ADR applies to storage too, not just transport. Non-compliance = high fines + risk of serious accidents."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi sezonalitatea și vârfurile de activitate în depozit?",
      de: "Wie handhaben Sie Saisonalität und Aktivitätsspitzen im Lager?",
      en: "How do you handle seasonality and activity peaks in warehouse?"
    },
    options: {
      ro: ["Personal temporar pregătit, spațiu flexibil/overflow, shift-uri suplimentare, pre-picking pentru articole predictibile, comunicare strânsă cu clienții", "Capacitate fixă tot anul", "Refuzi comenzile suplimentare", "Nu se poate gestiona"],
      de: ["Vorbereitetes Zeitpersonal, flexibler/Überlauf-Raum, Zusatzschichten, Pre-Picking für vorhersehbare Artikel, enge Kundenkommunikation", "Feste Kapazität ganzjährig", "Zusätzliche Aufträge ablehnen", "Nicht handhabbar"],
      en: ["Prepared temporary staff, flexible/overflow space, additional shifts, pre-picking for predictable items, close customer communication", "Fixed capacity all year", "Refuse additional orders", "Cannot be handled"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Black Friday, Crăciun pot dubla volumele. Pregătirea începe cu 2-3 luni înainte. Training-ul personalului temporar e critic.",
      de: "Black Friday, Weihnachten können Volumina verdoppeln. Vorbereitung beginnt 2-3 Monate vorher. Training des Zeitpersonals ist kritisch.",
      en: "Black Friday, Christmas can double volumes. Preparation starts 2-3 months before. Temporary staff training is critical."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt tipurile de contracte de depozitare și când se folosesc?",
      de: "Was sind die Arten von Lagerverträgen und wann werden sie verwendet?",
      en: "What are the types of warehousing contracts and when are they used?"
    },
    options: {
      ro: ["Public (per palet/mp/operație), contract (spațiu dedicat, tarifare fixă), dedicated (depozit exclusiv), 3PL/4PL (servicii complete)", "Doar închiriere pe mp", "Un singur tip de contract", "Contractele nu există în logistică"],
      de: ["Öffentlich (pro Palette/qm/Operation), Vertrag (dedizierter Raum, feste Tarife), dediziert (exklusives Lager), 3PL/4PL (komplette Services)", "Nur Miete pro qm", "Ein einziger Vertragstyp", "Verträge existieren nicht in Logistik"],
      en: ["Public (per pallet/sqm/operation), contract (dedicated space, fixed rates), dedicated (exclusive warehouse), 3PL/4PL (complete services)", "Only rent per sqm", "Single contract type", "Contracts don't exist in logistics"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Volume mici/variabile: public warehouse. Volume stabile mari: contract sau dedicated. Outsourcing complet: 3PL.",
      de: "Kleine/variable Volumina: öffentliches Lager. Große stabile Volumina: Vertrag oder dediziert. Komplettes Outsourcing: 3PL.",
      en: "Small/variable volumes: public warehouse. Large stable volumes: contract or dedicated. Complete outsourcing: 3PL."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum asiguri acuratețea inventarului într-un depozit mare?",
      de: "Wie gewährleisten Sie Inventargenauigkeit in einem großen Lager?",
      en: "How do you ensure inventory accuracy in a large warehouse?"
    },
    options: {
      ro: ["Cycle counting regulat, verificări la picking, reconciliere cu WMS, analiză root cause pentru discrepanțe, inventar anual complet", "Inventar doar anual", "WMS-ul e întotdeauna corect", "Discrepanțele sunt normale"],
      de: ["Regelmäßige Zyklusbuchung, Prüfungen beim Picking, WMS-Abgleich, Root-Cause-Analyse für Diskrepanzen, jährliches Gesamtinventar", "Inventar nur jährlich", "WMS ist immer korrekt", "Diskrepanzen sind normal"],
      en: ["Regular cycle counting, checks at picking, WMS reconciliation, root cause analysis for discrepancies, annual complete inventory", "Inventory only annually", "WMS is always correct", "Discrepancies are normal"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cycle counting: numărare rotativă ABC (A zilnic, B săptămânal, C lunar). Mai eficient decât inventarul anual care blochează operațiunile.",
      de: "Zyklusbuchung: rotierende ABC-Zählung (A täglich, B wöchentlich, C monatlich). Effizienter als jährliches Inventar das Operationen blockiert.",
      en: "Cycle counting: rotating ABC counting (A daily, B weekly, C monthly). More efficient than annual inventory that blocks operations."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt considerentele pentru depozitarea produselor alimentare?",
      de: "Was sind die Überlegungen für die Lagerung von Lebensmitteln?",
      en: "What are considerations for food product storage?"
    },
    options: {
      ro: ["Control temperatură (ambient/refrigerat/congelat), FIFO strict, trasabilitate lot, HACCP compliance, curățenie și pest control, separare alergeni", "Aceleași reguli ca pentru orice produs", "Doar refrigerare", "Nu există cerințe speciale"],
      de: ["Temperaturkontrolle (ambient/gekühlt/gefroren), striktes FIFO, Chargenrückverfolgbarkeit, HACCP-Konformität, Sauberkeit und Schädlingskontrolle, Allergentrennung", "Gleiche Regeln wie für jedes Produkt", "Nur Kühlung", "Keine besonderen Anforderungen"],
      en: ["Temperature control (ambient/refrigerated/frozen), strict FIFO, lot traceability, HACCP compliance, cleanliness and pest control, allergen separation", "Same rules as any product", "Only refrigeration", "No special requirements"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Alimentarele au reglementări stricte. Un lot contaminat netrasat = recall masiv costisitor. Auditurile sunt frecvente.",
      de: "Lebensmittel haben strenge Vorschriften. Ein nicht nachverfolgbares kontaminiertes Lot = kostspieliger Massenrückruf. Audits sind häufig.",
      en: "Food has strict regulations. An untraced contaminated lot = costly mass recall. Audits are frequent."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum integrezi sistemele WMS cu TMS și ERP ale clienților?",
      de: "Wie integrieren Sie WMS-Systeme mit TMS und ERP der Kunden?",
      en: "How do you integrate WMS systems with customer TMS and ERP?"
    },
    options: {
      ro: ["API/EDI pentru schimb date automat, mapping câmpuri, testare integrare, monitorizare erori, documentație interfețe", "Integrarea nu e necesară", "Doar email și telefon", "Sistemele nu comunică"],
      de: ["API/EDI für automatischen Datenaustausch, Feldmapping, Integrationstests, Fehlerüberwachung, Schnittstellendokumentation", "Integration nicht nötig", "Nur Email und Telefon", "Systeme kommunizieren nicht"],
      en: ["API/EDI for automatic data exchange, field mapping, integration testing, error monitoring, interface documentation", "Integration not needed", "Only email and phone", "Systems don't communicate"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Integrarea elimină introducerea manuală = mai puține erori, viteză mai mare. Standard modern: REST API cu actualizări în timp real.",
      de: "Integration eliminiert manuelle Eingabe = weniger Fehler, höhere Geschwindigkeit. Moderner Standard: REST API mit Echtzeit-Updates.",
      en: "Integration eliminates manual entry = fewer errors, higher speed. Modern standard: REST API with real-time updates."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt considerentele de siguranță și securitate într-un depozit?",
      de: "Was sind die Sicherheits- und Security-Überlegungen in einem Lager?",
      en: "What are safety and security considerations in a warehouse?"
    },
    options: {
      ro: ["Siguranță: training operatori, marcaje, echipament protecție, verificări stivuitoare; Securitate: acces controlat, CCTV, alarme, verificări personal", "Nu există riscuri în depozite", "Doar securitatea contează", "Siguranța e responsabilitatea angajatului"],
      de: ["Sicherheit: Bedienertraining, Markierungen, Schutzausrüstung, Gabelstaplerprüfungen; Security: kontrollierter Zugang, CCTV, Alarme, Personalüberprüfungen", "Keine Risiken in Lagern", "Nur Security zählt", "Sicherheit ist Mitarbeiterverantwortung"],
      en: ["Safety: operator training, markings, protective equipment, forklift checks; Security: controlled access, CCTV, alarms, personnel checks", "No risks in warehouses", "Only security matters", "Safety is employee responsibility"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Accidentele cu stivuitoare sunt frecvente și grave. Furtul intern e o realitate. Ambele necesită atenție constantă și proceduri.",
      de: "Gabelstaplerunfälle sind häufig und schwer. Interner Diebstahl ist Realität. Beides erfordert ständige Aufmerksamkeit und Verfahren.",
      en: "Forklift accidents are frequent and serious. Internal theft is reality. Both require constant attention and procedures."
    }
  },

  // Level 5 Questions (10)
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Proiectezi un depozit nou pentru e-commerce cu 50.000 comenzi/zi. Ce caracteristici sunt esențiale?",
      de: "Szenario: Sie entwerfen ein neues E-Commerce-Lager mit 50.000 Aufträgen/Tag. Welche Merkmale sind essentiell?",
      en: "Scenario: You're designing a new warehouse for e-commerce with 50,000 orders/day. What features are essential?"
    },
    options: {
      ro: ["Automatizare (sortere, goods-to-person), WMS avansat, integrare multi-canal, zone de retur dedicate, scalabilitate, proximitate consumatori", "Depozit standard e suficient", "Doar rafturi și stivuitoare", "Automatizarea nu e necesară pentru e-commerce"],
      de: ["Automatisierung (Sorter, Goods-to-Person), erweitertes WMS, Multi-Channel-Integration, dedizierte Rücknahmezonen, Skalierbarkeit, Verbrauchernähe", "Standardlager ist ausreichend", "Nur Regale und Gabelstapler", "Automatisierung nicht nötig für E-Commerce"],
      en: ["Automation (sorters, goods-to-person), advanced WMS, multi-channel integration, dedicated return zones, scalability, consumer proximity", "Standard warehouse is sufficient", "Only racks and forklifts", "Automation not needed for e-commerce"]
    },
    correctIndex: 0,
    explanation: {
      ro: "E-commerce = volume mari, colete mici, SLA strânse. Automatizarea e ROI pozitiv la aceste volume. Returnurile sunt 20-30% din comenzi.",
      de: "E-Commerce = hohe Volumina, kleine Pakete, enge SLAs. Automatisierung hat positiven ROI bei diesen Volumina. Retouren sind 20-30% der Aufträge.",
      en: "E-commerce = high volumes, small packages, tight SLAs. Automation has positive ROI at these volumes. Returns are 20-30% of orders."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum evaluezi decizia make vs buy (depozit propriu vs externalizare la 3PL)?",
      de: "Wie bewerten Sie die Make-vs-Buy-Entscheidung (eigenes Lager vs 3PL-Outsourcing)?",
      en: "How do you evaluate make vs buy decision (own warehouse vs 3PL outsourcing)?"
    },
    options: {
      ro: ["Analiză TCO pe 5 ani, competențe core business, flexibilitate necesară, volume și variabilitate, control vs cost, risc concentrare", "Întotdeauna 3PL e mai ieftin", "Propriul depozit e mereu mai bun", "Doar costul contează"],
      de: ["TCO-Analyse über 5 Jahre, Kerngeschäftskompetenzen, benötigte Flexibilität, Volumina und Variabilität, Kontrolle vs Kosten, Konzentrationsrisiko", "3PL ist immer billiger", "Eigenes Lager ist immer besser", "Nur Kosten zählen"],
      en: ["5-year TCO analysis, core business competencies, needed flexibility, volumes and variability, control vs cost, concentration risk", "3PL is always cheaper", "Own warehouse is always better", "Only cost matters"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Nu există răspuns universal. Pharma: adesea in-house pentru control. Retail sezonier: 3PL pentru flexibilitate. Hibrid: soluție frecventă.",
      de: "Keine universelle Antwort. Pharma: oft in-house für Kontrolle. Saisonaler Retail: 3PL für Flexibilität. Hybrid: häufige Lösung.",
      en: "No universal answer. Pharma: often in-house for control. Seasonal retail: 3PL for flexibility. Hybrid: frequent solution."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt tendințele în automatizarea depozitelor și cum afectează operațiunile?",
      de: "Was sind die Trends in der Lagerautomatisierung und wie beeinflussen sie Operationen?",
      en: "What are trends in warehouse automation and how do they affect operations?"
    },
    options: {
      ro: ["AGV/AMR (roboți mobili), goods-to-person, AS/RS automate, AI pentru optimizare, cobots pentru picking - schimbă cerințele de personal și investiție", "Automatizarea nu evoluează", "Doar conveiere", "Roboții vor înlocui toți oamenii"],
      de: ["AGV/AMR (mobile Roboter), Goods-to-Person, automatische AS/RS, KI zur Optimierung, Cobots für Picking - verändert Personal- und Investitionsanforderungen", "Automatisierung entwickelt sich nicht", "Nur Förderbänder", "Roboter werden alle Menschen ersetzen"],
      en: ["AGV/AMR (mobile robots), goods-to-person, automated AS/RS, AI for optimization, cobots for picking - changes staffing and investment requirements", "Automation doesn't evolve", "Only conveyors", "Robots will replace all humans"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Automatizarea nu elimină oamenii, ci îi mută în roluri diferite. Operatorul devine supervizor de sisteme. Training-ul evoluează.",
      de: "Automatisierung eliminiert keine Menschen, sondern verschiebt sie in andere Rollen. Bediener wird Systemsupervisor. Training entwickelt sich.",
      en: "Automation doesn't eliminate humans, but shifts them to different roles. Operator becomes system supervisor. Training evolves."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Depozit multicanal (B2B + B2C + marketplace) cu SKU-uri comune. Cum organizezi operațiunile?",
      de: "Szenario: Multichannel-Lager (B2B + B2C + Marketplace) mit gemeinsamen SKUs. Wie organisieren Sie Operationen?",
      en: "Scenario: Multichannel warehouse (B2B + B2C + marketplace) with shared SKUs. How do you organize operations?"
    },
    options: {
      ro: ["Inventar unificat în WMS, reguli de alocare per canal, zone de picking diferențiate (palet vs bucată), wave planning separat, raportare per canal", "Depozite separate per canal", "Un singur proces pentru toate", "Inventar separat per canal"],
      de: ["Einheitliches Inventar im WMS, Zuordnungsregeln pro Kanal, differenzierte Picking-Zonen (Palette vs Stück), separates Wave-Planning, Reporting pro Kanal", "Separate Lager pro Kanal", "Ein Prozess für alle", "Separates Inventar pro Kanal"],
      en: ["Unified inventory in WMS, allocation rules per channel, differentiated picking zones (pallet vs piece), separate wave planning, reporting per channel", "Separate warehouses per channel", "Single process for all", "Separate inventory per channel"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Inventar unic evită duplicarea și crește disponibilitatea. Procesele diferă: B2B = paleți, e-commerce = colete mici, mulți SKU per comandă.",
      de: "Einziges Inventar vermeidet Duplikation und erhöht Verfügbarkeit. Prozesse unterscheiden sich: B2B = Paletten, E-Commerce = kleine Pakete, viele SKUs pro Auftrag.",
      en: "Single inventory avoids duplication and increases availability. Processes differ: B2B = pallets, e-commerce = small packages, many SKUs per order."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi un incident major în depozit (incendiu, inundație, contaminare)?",
      de: "Wie handhaben Sie einen Großvorfall im Lager (Brand, Überschwemmung, Kontamination)?",
      en: "How do you handle a major incident in warehouse (fire, flood, contamination)?"
    },
    options: {
      ro: ["Activare plan BCP, evacuare sigură, comunicare stakeholders, evaluare daune, soluții alternative (depozite backup), documentare pentru asigurări, lessons learned", "Aștepți să treacă", "Doar apelezi pompieri", "Nu există planuri pentru astfel de situații"],
      de: ["BCP-Plan aktivieren, sichere Evakuierung, Stakeholder-Kommunikation, Schadensbewertung, Alternativlösungen (Backup-Lager), Versicherungsdokumentation, Lessons Learned", "Abwarten", "Nur Feuerwehr rufen", "Keine Pläne für solche Situationen"],
      en: ["Activate BCP plan, safe evacuation, stakeholder communication, damage assessment, alternative solutions (backup warehouses), insurance documentation, lessons learned", "Wait for it to pass", "Only call firefighters", "No plans for such situations"]
    },
    correctIndex: 0,
    explanation: {
      ro: "BCP (Business Continuity Plan) trebuie pregătit înainte. Depozitele de backup și contractele de urgență sunt esențiale. Timpul de reacție e critic.",
      de: "BCP (Business Continuity Plan) muss vorher vorbereitet werden. Backup-Lager und Notfallverträge sind essentiell. Reaktionszeit ist kritisch.",
      en: "BCP (Business Continuity Plan) must be prepared before. Backup warehouses and emergency contracts are essential. Reaction time is critical."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt implicațiile sustenabilității în operațiunile de depozitare?",
      de: "Was sind die Nachhaltigkeitsimplikationen in Lageroperationen?",
      en: "What are sustainability implications in warehousing operations?"
    },
    options: {
      ro: ["Eficiență energetică (LED, panouri solare), ambalaje eco, optimizare transport (consolidare), reducere deșeuri, raportare carbon, certificări green", "Sustenabilitatea nu se aplică în depozite", "Doar reciclare", "E doar marketing"],
      de: ["Energieeffizienz (LED, Solarpanels), Öko-Verpackung, Transportoptimierung (Konsolidierung), Abfallreduzierung, CO2-Berichterstattung, Green-Zertifizierungen", "Nachhaltigkeit gilt nicht für Lager", "Nur Recycling", "Nur Marketing"],
      en: ["Energy efficiency (LED, solar panels), eco packaging, transport optimization (consolidation), waste reduction, carbon reporting, green certifications", "Sustainability doesn't apply to warehouses", "Only recycling", "Just marketing"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Clienții enterprise cer din ce în ce mai mult Scope 3 reporting. Depozitul green poate fi diferențiator competitiv și reducere costuri.",
      de: "Enterprise-Kunden verlangen zunehmend Scope 3 Reporting. Grünes Lager kann Wettbewerbsdifferenzierer und Kostenreduzierung sein.",
      en: "Enterprise customers increasingly require Scope 3 reporting. Green warehouse can be competitive differentiator and cost reduction."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum negociezi și structurezi un contract de depozitare complex cu un 3PL?",
      de: "Wie verhandeln und strukturieren Sie einen komplexen Lagervertrag mit einem 3PL?",
      en: "How do you negotiate and structure a complex warehousing contract with a 3PL?"
    },
    options: {
      ro: ["SLA-uri clare cu penalități/bonusuri, tarifare open-book sau cost-plus, clauze de volum, exit strategy, audit rights, KPI dashboard partajat", "Doar preț per palet", "Contract standard fără negociere", "Încredere fără contract detaliat"],
      de: ["Klare SLAs mit Strafen/Boni, Open-Book oder Cost-Plus-Tarifierung, Volumenklauseln, Exit-Strategie, Audit-Rechte, geteiltes KPI-Dashboard", "Nur Preis pro Palette", "Standardvertrag ohne Verhandlung", "Vertrauen ohne detaillierten Vertrag"],
      en: ["Clear SLAs with penalties/bonuses, open-book or cost-plus pricing, volume clauses, exit strategy, audit rights, shared KPI dashboard", "Only price per pallet", "Standard contract without negotiation", "Trust without detailed contract"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Parteneriatele de succes au transparență în costuri și performanță. Open-book: vezi costurile reale + markup. Win-win pentru ambele părți.",
      de: "Erfolgreiche Partnerschaften haben Transparenz bei Kosten und Leistung. Open-Book: echte Kosten + Aufschlag sehen. Win-Win für beide Seiten.",
      en: "Successful partnerships have transparency in costs and performance. Open-book: see real costs + markup. Win-win for both sides."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Lansezi operațiuni într-o țară nouă. Cum selectezi locația depozitului?",
      de: "Szenario: Sie starten Operationen in einem neuen Land. Wie wählen Sie den Lagerstandort?",
      en: "Scenario: You're launching operations in a new country. How do you select warehouse location?"
    },
    options: {
      ro: ["Analiză: proximitate clienți/furnizori, infrastructură (autostrăzi, porturi), cost teren/manoperă, disponibilitate forță de muncă, reglementări locale, zone economice speciale", "Cel mai ieftin teren", "Primul depozit disponibil", "Aceeași locație ca concurenții"],
      de: ["Analyse: Kunden-/Lieferantennähe, Infrastruktur (Autobahnen, Häfen), Grund-/Arbeitskosten, Arbeitskräfteverfügbarkeit, lokale Vorschriften, Sonderwirtschaftszonen", "Billigstes Grundstück", "Erstes verfügbares Lager", "Gleicher Standort wie Wettbewerber"],
      en: ["Analysis: customer/supplier proximity, infrastructure (highways, ports), land/labor cost, workforce availability, local regulations, special economic zones", "Cheapest land", "First available warehouse", "Same location as competitors"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Locația greșită = costuri de transport mari pentru tot contractul. Analiza gravitațională optimizează pozitionarea vs clienți.",
      de: "Falscher Standort = hohe Transportkosten für gesamten Vertrag. Gravitationsanalyse optimiert Positionierung vs Kunden.",
      en: "Wrong location = high transport costs for entire contract. Gravity analysis optimizes positioning vs customers."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt considerentele pentru depozitarea produselor farmaceutice și medicale?",
      de: "Was sind die Überlegungen für die Lagerung pharmazeutischer und medizinischer Produkte?",
      en: "What are considerations for pharmaceutical and medical product storage?"
    },
    options: {
      ro: ["GDP compliance, zone de temperatură calificate, monitoring continuu, serialization/track&trace, personal instruit, audituri frecvente, clean rooms dacă necesar", "Aceleași reguli ca pentru alimente", "Doar refrigerare", "Nu există cerințe speciale"],
      de: ["GDP-Konformität, qualifizierte Temperaturzonen, kontinuierliche Überwachung, Serialisierung/Track&Trace, geschultes Personal, häufige Audits, Reinräume wenn nötig", "Gleiche Regeln wie für Lebensmittel", "Nur Kühlung", "Keine besonderen Anforderungen"],
      en: ["GDP compliance, qualified temperature zones, continuous monitoring, serialization/track&trace, trained personnel, frequent audits, clean rooms if needed", "Same rules as food", "Only refrigeration", "No special requirements"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Pharma e cel mai reglementat sector. GDP e mai strict decât ATP. Calificarea echipamentelor și validarea proceselor sunt obligatorii.",
      de: "Pharma ist am stärksten regulierter Sektor. GDP ist strenger als ATP. Gerätequalifizierung und Prozessvalidierung sind obligatorisch.",
      en: "Pharma is most regulated sector. GDP is stricter than ATP. Equipment qualification and process validation are mandatory."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum implementezi un sistem WMS nou într-un depozit existent cu operațiuni continue?",
      de: "Wie implementieren Sie ein neues WMS-System in einem bestehenden Lager mit laufendem Betrieb?",
      en: "How do you implement a new WMS system in an existing warehouse with ongoing operations?"
    },
    options: {
      ro: ["Faze: pilotare pe zonă limitată, migrare date validată, training intensiv, go-live în perioadă de volum redus, suport 24/7 post-go-live, rollback plan", "Schimbare instantanee complet", "Fără testare - direct în producție", "Training minimal e suficient"],
      de: ["Phasen: Pilotierung in begrenzter Zone, validierte Datenmigration, intensives Training, Go-Live in Niedrigvolumenperiode, 24/7-Support nach Go-Live, Rollback-Plan", "Sofortige komplette Umstellung", "Ohne Test - direkt in Produktion", "Minimales Training ist ausreichend"],
      en: ["Phases: piloting in limited zone, validated data migration, intensive training, go-live in low volume period, 24/7 post-go-live support, rollback plan", "Instant complete change", "No testing - straight to production", "Minimal training is sufficient"]
    },
    correctIndex: 0,
    explanation: {
      ro: "WMS e sistemul nervos al depozitului. Eșecul = blocaj complet. Pregătirea minuțioasă și planul B sunt esențiale.",
      de: "WMS ist Nervensystem des Lagers. Misserfolg = komplette Blockade. Gründliche Vorbereitung und Plan B sind essentiell.",
      en: "WMS is warehouse's nervous system. Failure = complete blockage. Thorough preparation and plan B are essential."
    }
  }
];
