import { TranslatedQuizQuestion } from "@/data/quizTranslations";

export const adrComprehensiveQuestions: TranslatedQuizQuestion[] = [
  // Level 3 Questions (10)
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este ADR și ce reglementează?",
      de: "Was ist ADR und was regelt es?",
      en: "What is ADR and what does it regulate?"
    },
    options: {
      ro: ["Acordul European privind Transportul Internațional Rutier al Mărfurilor Periculoase - clasificare, ambalare, etichetare, documentare, vehicule", "Sistem de frânare", "Asigurare auto", "Reguli de parcare"],
      de: ["Europäisches Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße - Klassifizierung, Verpackung, Kennzeichnung, Dokumentation, Fahrzeuge", "Bremssystem", "Kfz-Versicherung", "Parkvorschriften"],
      en: ["European Agreement concerning International Carriage of Dangerous Goods by Road - classification, packaging, labeling, documentation, vehicles", "Braking system", "Car insurance", "Parking rules"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ADR se actualizează la fiecare 2 ani. Ultima versiune: ADR 2023. Aplicabil în toate țările europene semnatare.",
      de: "ADR wird alle 2 Jahre aktualisiert. Letzte Version: ADR 2023. Anwendbar in allen europäischen Unterzeichnerstaaten.",
      en: "ADR is updated every 2 years. Latest version: ADR 2023. Applicable in all European signatory countries."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Câte clase de mărfuri periculoase există conform ADR?",
      de: "Wie viele Gefahrgutklassen gibt es gemäß ADR?",
      en: "How many dangerous goods classes exist according to ADR?"
    },
    options: {
      ro: ["9 clase principale: explozivi, gaze, lichide inflamabile, solide inflamabile, oxidanți, toxice, radioactive, corozive, diverse", "3 clase", "5 clase", "15 clase"],
      de: ["9 Hauptklassen: Explosivstoffe, Gase, entzündbare Flüssigkeiten, entzündbare Feststoffe, Oxidationsmittel, toxisch, radioaktiv, ätzend, verschiedene", "3 Klassen", "5 Klassen", "15 Klassen"],
      en: ["9 main classes: explosives, gases, flammable liquids, flammable solids, oxidizers, toxic, radioactive, corrosive, miscellaneous", "3 classes", "5 classes", "15 classes"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Clasele au subdiviziuni (ex: 2.1 gaze inflamabile, 2.2 gaze neinflam., 2.3 gaze toxice). Fiecare cu cerințe specifice.",
      de: "Klassen haben Unterteilungen (z.B.: 2.1 entzündbare Gase, 2.2 nicht entzündbar, 2.3 toxische Gase). Jede mit spezifischen Anforderungen.",
      en: "Classes have subdivisions (e.g.: 2.1 flammable gases, 2.2 non-flammable, 2.3 toxic gases). Each with specific requirements."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este numărul UN și unde îl găsești?",
      de: "Was ist die UN-Nummer und wo finden Sie sie?",
      en: "What is the UN number and where do you find it?"
    },
    options: {
      ro: ["Cod de 4 cifre care identifică substanța periculoasă - pe etichetă, în documente, pe panou vehicul", "Număr de înmatriculare", "Cod de țară", "Numar de comandă"],
      de: ["4-stelliger Code der die Gefahrstoffe identifiziert - auf Etikett, in Dokumenten, auf Fahrzeugtafel", "Zulassungsnummer", "Ländercode", "Bestellnummer"],
      en: ["4-digit code identifying the dangerous substance - on label, in documents, on vehicle panel", "Registration number", "Country code", "Order number"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Exemplu: UN1203 = benzină. Numărul UN permite identificarea rapidă a substanței și a măsurilor necesare în caz de urgență.",
      de: "Beispiel: UN1203 = Benzin. UN-Nummer ermöglicht schnelle Identifizierung der Substanz und erforderlicher Notfallmaßnahmen.",
      en: "Example: UN1203 = gasoline. UN number allows quick identification of substance and required emergency measures."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce echipament obligatoriu trebuie să aibă un vehicul ADR?",
      de: "Welche obligatorische Ausrüstung muss ein ADR-Fahrzeug haben?",
      en: "What mandatory equipment must an ADR vehicle have?"
    },
    options: {
      ro: ["Stingătoare specifice, cale roți, lămpi portabile, veste, echipament protecție (ochelari, mănuși), recipiente pentru scurgeri", "Doar stingătorul", "Niciun echipament special", "Doar triunghiuri reflectorizante"],
      de: ["Spezifische Feuerlöscher, Unterlegkeile, tragbare Lampen, Westen, Schutzausrüstung (Brille, Handschuhe), Auffangbehälter", "Nur Feuerlöscher", "Keine Spezialausrüstung", "Nur Warndreiecke"],
      en: ["Specific fire extinguishers, wheel chocks, portable lamps, vests, protective equipment (goggles, gloves), spill containers", "Only fire extinguisher", "No special equipment", "Only warning triangles"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Echipamentul variază în funcție de clasele transportate. Instrucțiuni scrise în cabină - obligatorii în limba șoferului.",
      de: "Ausrüstung variiert je nach transportierten Klassen. Schriftliche Anweisungen in Kabine - obligatorisch in Fahrersprache.",
      en: "Equipment varies by transported classes. Written instructions in cab - mandatory in driver's language."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce sunt panourile portocalii ADR și ce informații conțin?",
      de: "Was sind die orangefarbenen ADR-Tafeln und welche Informationen enthalten sie?",
      en: "What are orange ADR panels and what information do they contain?"
    },
    options: {
      ro: ["Panouri portocalii cu numărul de pericol sus și numărul UN jos, pe față, spate și lateral (pentru cisterne)", "Doar numărul de înmatriculare", "Logo-ul companiei", "Orarul de transport"],
      de: ["Orangefarbene Tafeln mit Gefahrnummer oben und UN-Nummer unten, vorne, hinten und seitlich (für Tanks)", "Nur Zulassungsnummer", "Firmenlogo", "Transportfahrplan"],
      en: ["Orange panels with hazard number on top and UN number below, front, rear and side (for tanks)", "Only registration number", "Company logo", "Transport schedule"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Numărul de pericol (Kemler): primele cifre indică tipul de pericol (3=inflamabil, 8=coroziv). X = reacționează periculos cu apa.",
      de: "Gefahrnummer (Kemler): erste Ziffern zeigen Gefahrtyp (3=entzündbar, 8=ätzend). X = reagiert gefährlich mit Wasser.",
      en: "Hazard number (Kemler): first digits show hazard type (3=flammable, 8=corrosive). X = reacts dangerously with water."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce certificat trebuie să aibă șoferul pentru transport ADR?",
      de: "Welches Zertifikat muss der Fahrer für ADR-Transport haben?",
      en: "What certificate must the driver have for ADR transport?"
    },
    options: {
      ro: ["Certificat ADR șofer valid, specific pentru clasele transportate (de bază + specializări pentru cisterne, explozivi, radioactive)", "Doar permis de conducere", "Certificat medical", "Licență de transport"],
      de: ["Gültiger ADR-Fahrerausweis, spezifisch für transportierte Klassen (Basis + Spezialisierungen für Tanks, Explosivstoffe, radioaktiv)", "Nur Führerschein", "Ärztliches Attest", "Transportlizenz"],
      en: ["Valid ADR driver certificate, specific for transported classes (basic + specializations for tanks, explosives, radioactive)", "Only driving license", "Medical certificate", "Transport license"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Certificatul ADR e valabil 5 ani. Reînnoirea necesită examen. Fără certificat valid = transport ilegal cu amenzi severe.",
      de: "ADR-Zertifikat ist 5 Jahre gültig. Verlängerung erfordert Prüfung. Ohne gültiges Zertifikat = illegaler Transport mit hohen Bußgeldern.",
      en: "ADR certificate is valid for 5 years. Renewal requires exam. Without valid certificate = illegal transport with severe fines."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce sunt 'instrucțiunile scrise' în transportul ADR?",
      de: "Was sind 'schriftliche Weisungen' im ADR-Transport?",
      en: "What are 'written instructions' in ADR transport?"
    },
    options: {
      ro: ["Document standardizat cu măsuri de urgență în caz de accident, obligatoriu în cabină în limba înțeleasă de șofer", "Factura comercială", "CMR-ul", "Polița de asigurare"],
      de: ["Standardisiertes Dokument mit Notfallmaßnahmen bei Unfall, obligatorisch in Kabine in vom Fahrer verstandener Sprache", "Handelsrechnung", "CMR", "Versicherungspolice"],
      en: ["Standardized document with emergency measures in case of accident, mandatory in cab in language understood by driver", "Commercial invoice", "CMR", "Insurance policy"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ADR 2023 are un format standard pentru instrucțiuni scrise. Șoferul trebuie să le cunoască ÎNAINTE de a pleca în cursă.",
      de: "ADR 2023 hat Standardformat für schriftliche Weisungen. Fahrer muss sie VOR Fahrtantritt kennen.",
      en: "ADR 2023 has standard format for written instructions. Driver must know them BEFORE starting the trip."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce restricții de parcare se aplică pentru vehiculele ADR?",
      de: "Welche Parkbeschränkungen gelten für ADR-Fahrzeuge?",
      en: "What parking restrictions apply to ADR vehicles?"
    },
    options: {
      ro: ["Nu în zone rezidențiale dens populate, parcări supravegheate preferate, distanță de clădiri, iluminat corespunzător noaptea", "Nicio restricție specială", "Doar în parcări publice", "Oriunde e legal pentru camioane"],
      de: ["Nicht in dicht besiedelten Wohngebieten, überwachte Parkplätze bevorzugt, Abstand zu Gebäuden, angemessene Nachtbeleuchtung", "Keine besonderen Beschränkungen", "Nur auf öffentlichen Parkplätzen", "Überall wo legal für LKW"],
      en: ["Not in densely populated residential areas, supervised parking preferred, distance from buildings, adequate night lighting", "No special restrictions", "Only in public parking", "Anywhere legal for trucks"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Regulile variază per țară, dar principiul e minimizarea riscului pentru populație. Parcările speciale ADR sunt ideale.",
      de: "Regeln variieren je Land, aber Prinzip ist Risikominimierung für Bevölkerung. Spezielle ADR-Parkplätze sind ideal.",
      en: "Rules vary by country, but principle is risk minimization for population. Special ADR parking lots are ideal."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce se întâmplă la un control rutier dacă lipsesc documente ADR?",
      de: "Was passiert bei einer Straßenkontrolle wenn ADR-Dokumente fehlen?",
      en: "What happens at a road check if ADR documents are missing?"
    },
    options: {
      ro: ["Amendă mare, posibilă imobilizare vehicul până la conformare, raportare la autorități, posibile consecințe pentru licența transportatorului", "Avertisment verbal", "Nicio consecință", "Doar notificare pentru viitor"],
      de: ["Hohes Bußgeld, mögliche Fahrzeugstilllegung bis zur Konformität, Meldung an Behörden, mögliche Folgen für Transporteurlizenz", "Mündliche Verwarnung", "Keine Folgen", "Nur Benachrichtigung für Zukunft"],
      en: ["Large fine, possible vehicle immobilization until compliance, reporting to authorities, possible consequences for carrier license", "Verbal warning", "No consequences", "Only notification for future"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ADR e luat foarte în serios. Amenzile pot fi de mii de euro. Repetarea = risc de pierdere licență transport.",
      de: "ADR wird sehr ernst genommen. Bußgelder können Tausende Euro sein. Wiederholung = Risiko des Transportlizenzentzugs.",
      en: "ADR is taken very seriously. Fines can be thousands of euros. Repetition = risk of transport license loss."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce înseamnă 'cantități limitate' (LQ) în ADR?",
      de: "Was bedeuten 'begrenzte Mengen' (LQ) im ADR?",
      en: "What does 'limited quantities' (LQ) mean in ADR?"
    },
    options: {
      ro: ["Ambalaje mici sub anumite limite care beneficiază de scutiri parțiale de la cerințele complete ADR", "Cantitatea totală de marfă", "Numărul de colete", "Limita de viteză"],
      de: ["Kleine Verpackungen unter bestimmten Grenzen die von vollständigen ADR-Anforderungen teilweise befreit sind", "Gesamtfrachtmenge", "Packstückanzahl", "Geschwindigkeitsbegrenzung"],
      en: ["Small packages under certain limits that benefit from partial exemptions from full ADR requirements", "Total cargo quantity", "Number of packages", "Speed limit"]
    },
    correctIndex: 0,
    explanation: {
      ro: "LQ: ambalaje mici (ex: până la 5L pentru lichide inflamabile). Marcaj specific romboidal cu LQ. Scutiri: fără panou portocaliu, cerințe reduse.",
      de: "LQ: kleine Verpackungen (z.B.: bis 5L für entzündbare Flüssigkeiten). Spezifische Rautenmarkierung mit LQ. Befreiungen: kein oranges Schild, reduzierte Anforderungen.",
      en: "LQ: small packages (e.g.: up to 5L for flammable liquids). Specific diamond marking with LQ. Exemptions: no orange panel, reduced requirements."
    }
  },

  // Level 4 Questions (10)
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum verifici compatibilitatea mărfurilor periculoase pentru transport în același vehicul?",
      de: "Wie prüfen Sie die Kompatibilität gefährlicher Güter für Transport im selben Fahrzeug?",
      en: "How do you verify dangerous goods compatibility for transport in the same vehicle?"
    },
    options: {
      ro: ["Consultare tabel de separare ADR (cap. 7.5.2), verificare clase și subdiviziuni, analiza riscurilor de reacție, distanțe de separare specifice", "Orice marfă poate fi cu orice alta", "Doar vizual dacă arată diferit", "Nu există reguli de separare"],
      de: ["ADR-Trennungstabelle konsultieren (Kap. 7.5.2), Klassen und Unterteilungen prüfen, Reaktionsrisikoanalyse, spezifische Trennabstände", "Jede Fracht kann mit jeder anderen sein", "Nur visuell wenn sie anders aussieht", "Keine Trennungsregeln"],
      en: ["Consult ADR separation table (ch. 7.5.2), check classes and subdivisions, reaction risk analysis, specific separation distances", "Any cargo can be with any other", "Only visually if they look different", "No separation rules"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Unele clase nu pot fi împreună deloc (ex: oxidanți cu inflamabile). Altele necesită separare fizică. Greșeala = risc de incendiu/explozie.",
      de: "Manche Klassen dürfen nicht zusammen sein (z.B.: Oxidationsmittel mit Entzündbaren). Andere erfordern physische Trennung. Fehler = Brand-/Explosionsrisiko.",
      en: "Some classes cannot be together at all (e.g.: oxidizers with flammables). Others require physical separation. Mistake = fire/explosion risk."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este pragul de 1000 de puncte ADR și ce implicații are?",
      de: "Was ist die 1000-Punkte-Grenze im ADR und welche Auswirkungen hat sie?",
      en: "What is the ADR 1000 points threshold and what implications does it have?"
    },
    options: {
      ro: ["Sub 1000 puncte: scutiri parțiale (ex: fără panou portocaliu gol); peste: cerințe complete. Calculul: cantitate × factor multiplicator per substanță", "Limita de viteză", "Numărul maxim de colete", "Puncte de penalizare șofer"],
      de: ["Unter 1000 Punkte: teilweise Befreiungen (z.B.: kein leeres oranges Schild); darüber: vollständige Anforderungen. Berechnung: Menge × Multiplikator pro Substanz", "Geschwindigkeitsbegrenzung", "Maximale Packstückanzahl", "Fahrerstrafpunkte"],
      en: ["Under 1000 points: partial exemptions (e.g.: no empty orange panel); above: full requirements. Calculation: quantity × multiplier per substance", "Speed limit", "Maximum package count", "Driver penalty points"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Factori multiplicatori: Cat. 0=∞, Cat. 1=50, Cat. 2=3, Cat. 3=1. Sub 1000 puncte: cerințe reduse, dar nu zero.",
      de: "Multiplikatorfaktoren: Kat. 0=∞, Kat. 1=50, Kat. 2=3, Kat. 3=1. Unter 1000 Punkte: reduzierte Anforderungen, aber nicht null.",
      en: "Multiplier factors: Cat. 0=∞, Cat. 1=50, Cat. 2=3, Cat. 3=1. Under 1000 points: reduced requirements, but not zero."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt responsabilitățile expeditorului vs transportatorului în ADR?",
      de: "Was sind die Verantwortlichkeiten von Versender vs Transporteur im ADR?",
      en: "What are shipper vs carrier responsibilities in ADR?"
    },
    options: {
      ro: ["Expeditor: clasificare corectă, ambalare, etichetare, documente; Transportator: vehicul conform, șofer certificat, echipament, verificări la încărcare", "Expeditorul răspunde de tot", "Doar transportatorul e responsabil", "Nimeni nu e responsabil în ADR"],
      de: ["Versender: korrekte Klassifizierung, Verpackung, Kennzeichnung, Dokumente; Transporteur: konformes Fahrzeug, zertifizierter Fahrer, Ausrüstung, Ladeprüfungen", "Versender haftet für alles", "Nur Transporteur ist verantwortlich", "Niemand ist im ADR verantwortlich"],
      en: ["Shipper: correct classification, packaging, labeling, documents; Carrier: compliant vehicle, certified driver, equipment, loading checks", "Shipper liable for everything", "Only carrier is responsible", "Nobody is responsible in ADR"]
    },
    correctIndex: 0,
    explanation: {
      ro: "ADR atribuie responsabilități clare fiecărui actor. Ambii pot fi sancționați pentru neconformități. Controalele verifică ambele părți.",
      de: "ADR weist jedem Akteur klare Verantwortlichkeiten zu. Beide können für Nichteinhaltung sanktioniert werden. Kontrollen prüfen beide Seiten.",
      en: "ADR assigns clear responsibilities to each actor. Both can be sanctioned for non-compliance. Controls check both sides."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce restricții de tunel se aplică pentru vehiculele ADR și cum le identifici?",
      de: "Welche Tunnelbeschränkungen gelten für ADR-Fahrzeuge und wie identifizieren Sie sie?",
      en: "What tunnel restrictions apply to ADR vehicles and how do you identify them?"
    },
    options: {
      ro: ["Coduri de tunel (A-E) pe substanță, semnalizare rutieră specifică, anumite mărfuri periculoase interzise în anumite tuneluri", "Nu există restricții de tunel", "Toate tunelurile sunt interzise ADR", "Doar tunelurile submarine"],
      de: ["Tunnelcodes (A-E) pro Substanz, spezifische Straßenbeschilderung, bestimmte Gefahrgüter in bestimmten Tunneln verboten", "Keine Tunnelbeschränkungen", "Alle Tunnel für ADR verboten", "Nur Unterwassertunnel"],
      en: ["Tunnel codes (A-E) per substance, specific road signage, certain dangerous goods prohibited in certain tunnels", "No tunnel restrictions", "All tunnels forbidden for ADR", "Only underwater tunnels"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cat. E (cele mai restrictive) = aproape nimic permis. Cat. A = aproape totul permis. Codul apare în documentul de transport.",
      de: "Kat. E (am restriktivsten) = fast nichts erlaubt. Kat. A = fast alles erlaubt. Code erscheint im Transportdokument.",
      en: "Cat. E (most restrictive) = almost nothing allowed. Cat. A = almost everything allowed. Code appears in transport document."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi un incident minor cu scurgere ADR pe traseu?",
      de: "Wie handhaben Sie einen kleinen ADR-Leckage-Vorfall auf der Strecke?",
      en: "How do you handle a minor ADR spillage incident on route?"
    },
    options: {
      ro: ["Stop în loc sigur, consultare instrucțiuni scrise, utilizare echipament absorbant/containment, notificare dispecer, evaluare dacă pot continua sau necesit ajutor", "Continui și ignori", "Oprești în mijlocul drumului", "Abandonezi vehiculul"],
      de: ["Stopp an sicherem Ort, schriftliche Weisungen konsultieren, Absorptions-/Auffangausrüstung nutzen, Disponenten benachrichtigen, bewerten ob Weiterfahrt möglich oder Hilfe nötig", "Weiterfahren und ignorieren", "Mitten auf der Straße halten", "Fahrzeug verlassen"],
      en: ["Stop in safe place, consult written instructions, use absorbent/containment equipment, notify dispatcher, evaluate if can continue or need help", "Continue and ignore", "Stop in middle of road", "Abandon vehicle"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Scurgerea mică controlată e mai bună decât panica. Instrucțiunile scrise specifică exact ce să faci pentru fiecare clasă.",
      de: "Kleine kontrollierte Leckage ist besser als Panik. Schriftliche Weisungen spezifizieren genau was für jede Klasse zu tun ist.",
      en: "Small controlled spillage is better than panic. Written instructions specify exactly what to do for each class."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce cerințe speciale există pentru transportul în cisterne ADR?",
      de: "Welche besonderen Anforderungen gibt es für ADR-Tanktransport?",
      en: "What special requirements exist for ADR tank transport?"
    },
    options: {
      ro: ["Cisternă aprobată și testată periodic, certificat șofer specializare cisterne, coduri de cisternă compatibile cu substanța, verificări înainte de încărcare", "Aceleași reguli ca pentru colete", "Doar capacitate mai mare", "Nicio cerință suplimentară"],
      de: ["Zugelassener und periodisch geprüfter Tank, Fahrerzertifikat Spezialisierung Tanks, Tankcodes kompatibel mit Substanz, Prüfungen vor Beladung", "Gleiche Regeln wie für Packstücke", "Nur größere Kapazität", "Keine zusätzlichen Anforderungen"],
      en: ["Approved and periodically tested tank, driver certificate tank specialization, tank codes compatible with substance, checks before loading", "Same rules as packages", "Only larger capacity", "No additional requirements"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cisternele au coduri (ex: L4BN) care trebuie să corespundă cu substanța. Testările periodice: presiune, etanșeitate, grosime pereți.",
      de: "Tanks haben Codes (z.B.: L4BN) die zur Substanz passen müssen. Periodische Tests: Druck, Dichtheit, Wandstärke.",
      en: "Tanks have codes (e.g.: L4BN) that must match the substance. Periodic tests: pressure, tightness, wall thickness."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum afectează vremea transportul ADR și ce măsuri trebuie luate?",
      de: "Wie beeinflusst Wetter den ADR-Transport und welche Maßnahmen sind zu ergreifen?",
      en: "How does weather affect ADR transport and what measures must be taken?"
    },
    options: {
      ro: ["Căldură extremă: risc presiune gaze, evaporare; Frig: vâscozitate lichide; Furtuni electrice: risc pentru explozivi; Adaptare traseu și timpi", "Vremea nu afectează ADR", "Doar ploaia e problematică", "Transport doar pe vreme bună"],
      de: ["Extreme Hitze: Gasdruckrisiko, Verdunstung; Kälte: Flüssigkeitsviskosität; Gewitter: Risiko für Explosivstoffe; Routen- und Zeitanpassung", "Wetter beeinflusst ADR nicht", "Nur Regen ist problematisch", "Transport nur bei gutem Wetter"],
      en: ["Extreme heat: gas pressure risk, evaporation; Cold: liquid viscosity; Thunderstorms: explosives risk; Route and timing adaptation", "Weather doesn't affect ADR", "Only rain is problematic", "Transport only in good weather"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Anumite clase au restricții clare: explozivii nu se transportă pe furtună electrică. Gazele necesită atenție la căldură (expansiune).",
      de: "Bestimmte Klassen haben klare Beschränkungen: Explosivstoffe nicht bei Gewitter transportieren. Gase erfordern Aufmerksamkeit bei Hitze (Ausdehnung).",
      en: "Certain classes have clear restrictions: explosives not transported during thunderstorms. Gases require attention in heat (expansion)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce este un consilier de siguranță ADR (DGSA) și când e obligatoriu?",
      de: "Was ist ein ADR-Sicherheitsberater (DGSA) und wann ist er obligatorisch?",
      en: "What is an ADR safety advisor (DGSA) and when is it mandatory?"
    },
    options: {
      ro: ["Persoană certificată care supraveghează conformitatea ADR în companie, obligatoriu pentru expeditori și transportatori care manipulează mărfuri periculoase", "Consultant opțional", "Doar pentru companii mari", "Nu există astfel de funcție"],
      de: ["Zertifizierte Person die ADR-Konformität im Unternehmen überwacht, obligatorisch für Versender und Transporteure die Gefahrgut handhaben", "Optionaler Berater", "Nur für große Unternehmen", "Keine solche Funktion"],
      en: ["Certified person overseeing ADR compliance in company, mandatory for shippers and carriers handling dangerous goods", "Optional consultant", "Only for large companies", "No such function exists"]
    },
    correctIndex: 0,
    explanation: {
      ro: "DGSA întocmește raport anual, investighează incidente, supraveghează training. Poate fi intern sau extern (consultant).",
      de: "DGSA erstellt Jahresbericht, untersucht Vorfälle, überwacht Training. Kann intern oder extern (Berater) sein.",
      en: "DGSA prepares annual report, investigates incidents, supervises training. Can be internal or external (consultant)."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum se completează documentul de transport ADR?",
      de: "Wie wird das ADR-Transportdokument ausgefüllt?",
      en: "How is the ADR transport document completed?"
    },
    options: {
      ro: ["Ordine strictă: nr UN, denumire oficială, clasă, grup ambalare, cod tunel, cantitate, nr colete, expeditor/destinatar, declarații speciale", "Orice ordine e acceptabilă", "Doar numele produsului", "CMR-ul standard e suficient"],
      de: ["Strenge Reihenfolge: UN-Nr., offizielle Bezeichnung, Klasse, Verpackungsgruppe, Tunnelcode, Menge, Packstückanzahl, Versender/Empfänger, Sondererklärungen", "Jede Reihenfolge ist akzeptabel", "Nur Produktname", "Standard-CMR ist ausreichend"],
      en: ["Strict order: UN no., proper shipping name, class, packing group, tunnel code, quantity, package count, shipper/consignee, special declarations", "Any order is acceptable", "Only product name", "Standard CMR is sufficient"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Format obligatoriu: 'UN1203 BENZINĂ, 3, II, (D/E), 1000 L'. Orice eroare = nonconformitate la control.",
      de: "Obligatorisches Format: 'UN1203 BENZIN, 3, II, (D/E), 1000 L'. Jeder Fehler = Nichteinhaltung bei Kontrolle.",
      en: "Mandatory format: 'UN1203 GASOLINE, 3, II, (D/E), 1000 L'. Any error = non-compliance at control."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce verificări trebuie făcute înainte de încărcarea mărfurilor ADR?",
      de: "Welche Prüfungen müssen vor der Beladung von ADR-Gütern durchgeführt werden?",
      en: "What checks must be done before loading ADR goods?"
    },
    options: {
      ro: ["Vehicul curat, certificat ADR valid, etichete corecte pe vehicul, echipament complet, compatibilitate cu încărcătura anterioară, stare ambalaje", "Nicio verificare specială", "Doar combustibilul", "Doar verificare vizuală rapidă"],
      de: ["Sauberes Fahrzeug, gültiges ADR-Zertifikat, korrekte Fahrzeugetiketten, vollständige Ausrüstung, Kompatibilität mit Vorladung, Verpackungszustand", "Keine besondere Prüfung", "Nur Kraftstoff", "Nur schnelle Sichtprüfung"],
      en: ["Clean vehicle, valid ADR certificate, correct vehicle labels, complete equipment, compatibility with previous load, package condition", "No special check", "Only fuel", "Only quick visual check"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Reziduuri din încărcătură anterioară pot reacționa cu noua încărcătură. Curățarea documentată e uneori obligatorie.",
      de: "Reste von Vorladung können mit neuer Ladung reagieren. Dokumentierte Reinigung ist manchmal obligatorisch.",
      en: "Residue from previous load can react with new load. Documented cleaning is sometimes mandatory."
    }
  },

  // Level 5 Questions (10)
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Transport de acizi (clasa 8) și oxidanți (clasa 5.1) pentru același client. Cum organizezi?",
      de: "Szenario: Transport von Säuren (Klasse 8) und Oxidationsmitteln (Klasse 5.1) für denselben Kunden. Wie organisieren Sie?",
      en: "Scenario: Transport of acids (class 8) and oxidizers (class 5.1) for same customer. How do you organize?"
    },
    options: {
      ro: ["Verificare tabel separare - dacă sunt incompatibile: vehicule separate sau separare fizică cu perete rezistent în același vehicul conform cerințelor", "Transport împreună fără restricții", "Refuz transportul complet", "Amestec într-un singur container"],
      de: ["Trennungstabelle prüfen - wenn unverträglich: separate Fahrzeuge oder physische Trennung mit resistenter Wand im selben Fahrzeug gemäß Anforderungen", "Transport zusammen ohne Beschränkungen", "Transport komplett ablehnen", "Mischen in einem Container"],
      en: ["Check separation table - if incompatible: separate vehicles or physical separation with resistant wall in same vehicle per requirements", "Transport together without restrictions", "Refuse transport completely", "Mix in single container"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Unii acizi și oxidanți reacționează violent. Tabelul 7.5.2.1 specifică exact ce poate fi împreună și în ce condiții.",
      de: "Manche Säuren und Oxidationsmittel reagieren heftig. Tabelle 7.5.2.1 spezifiziert genau was zusammen sein darf und unter welchen Bedingungen.",
      en: "Some acids and oxidizers react violently. Table 7.5.2.1 specifies exactly what can be together and under what conditions."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum gestionezi un accident major cu vărsare de substanță periculoasă și victime?",
      de: "Wie handhaben Sie einen schweren Unfall mit Gefahrstoffaustritt und Opfern?",
      en: "How do you handle a major accident with dangerous substance spillage and casualties?"
    },
    options: {
      ro: ["Apel urgență, informare despre substanță (nr UN, clase), evacuare zonă, nu interveni fără protecție adecvată, securizare perimetru, cooperare pompieri", "Încerc să curăț singur", "Fug de la locul accidentului", "Aștept să vină cineva"],
      de: ["Notruf, Information über Substanz (UN-Nr., Klassen), Gebiet evakuieren, nicht ohne adäquaten Schutz eingreifen, Perimeter sichern, Feuerwehrkooperation", "Versuche selbst zu reinigen", "Vom Unfallort fliehen", "Warten bis jemand kommt"],
      en: ["Emergency call, information about substance (UN no., classes), evacuate area, don't intervene without adequate protection, secure perimeter, fire brigade cooperation", "Try to clean myself", "Flee from accident site", "Wait for someone to come"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Prioritățile: siguranța proprie, alertare, informare precisă. Pompierii au nevoie de datele din documentul de transport pentru a ști ce fac.",
      de: "Prioritäten: eigene Sicherheit, Alarmierung, präzise Information. Feuerwehr braucht Daten aus Transportdokument um zu wissen was zu tun ist.",
      en: "Priorities: own safety, alerting, precise information. Fire brigade needs data from transport document to know what to do."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt implicațiile penale și civile ale unui accident ADR cauzat de neconformitate?",
      de: "Was sind die strafrechtlichen und zivilrechtlichen Folgen eines durch Nichteinhaltung verursachten ADR-Unfalls?",
      en: "What are criminal and civil implications of an ADR accident caused by non-compliance?"
    },
    options: {
      ro: ["Răspundere penală pentru neglijență gravă, daune civile nelimitate, pierdere licențe, amenzi corporative mari, posibil închisoare pentru responsabili", "Doar amendă administrativă", "Asigurarea acoperă tot", "Nu există consecințe pentru neconformitate"],
      de: ["Strafrechtliche Haftung für grobe Fahrlässigkeit, unbegrenzte Zivilschäden, Lizenzverlust, hohe Unternehmensbußgelder, mögliche Gefängnisstrafe für Verantwortliche", "Nur Verwaltungsstrafe", "Versicherung deckt alles", "Keine Folgen für Nichteinhaltung"],
      en: ["Criminal liability for gross negligence, unlimited civil damages, license loss, large corporate fines, possible imprisonment for responsible persons", "Only administrative fine", "Insurance covers everything", "No consequences for non-compliance"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Cazuri reale: directori condamnați penal pentru nerespectare ADR cu victime. Asigurările pot refuza plata pentru neconformitate intenționată.",
      de: "Reale Fälle: Manager strafrechtlich verurteilt für ADR-Nichteinhaltung mit Opfern. Versicherungen können Zahlung bei vorsätzlicher Nichteinhaltung verweigern.",
      en: "Real cases: directors criminally convicted for ADR non-compliance with casualties. Insurers can refuse payment for intentional non-compliance."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu complex: Client cere transport de chimicale cu cerințe speciale de temperatură și ADR. Cum evaluezi fezabilitatea?",
      de: "Komplexes Szenario: Kunde verlangt Chemikalientransport mit speziellen Temperatur- und ADR-Anforderungen. Wie bewerten Sie die Machbarkeit?",
      en: "Complex scenario: Customer requests chemical transport with special temperature and ADR requirements. How do you evaluate feasibility?"
    },
    options: {
      ro: ["Verificare clasă ADR și cod temperatură, disponibilitate vehicul frigorific + ADR, compatibilitate cerințe, calcul cost, identificare riscuri și soluții", "Accept fără verificare", "Refuz orice combinație specială", "Doar prețul contează"],
      de: ["ADR-Klasse und Temperaturcode prüfen, Verfügbarkeit Kühl- + ADR-Fahrzeug, Anforderungskompatibilität, Kostenberechnung, Risiken und Lösungen identifizieren", "Ohne Prüfung akzeptieren", "Jede Spezialkombination ablehnen", "Nur Preis zählt"],
      en: ["Check ADR class and temperature code, refrigerated + ADR vehicle availability, requirements compatibility, cost calculation, identify risks and solutions", "Accept without verification", "Refuse any special combination", "Only price matters"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Chimicalele sensibile la temperatură + ADR = nișă cu marje bune. Dar complexitatea necesită expertiză. Greșeala costă mult.",
      de: "Temperaturempfindliche Chemikalien + ADR = Nische mit guten Margen. Aber Komplexität erfordert Expertise. Fehler kostet viel.",
      en: "Temperature-sensitive chemicals + ADR = niche with good margins. But complexity requires expertise. Mistake costs a lot."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum implementezi un sistem de management ADR într-o companie de transport?",
      de: "Wie implementieren Sie ein ADR-Managementsystem in einem Transportunternehmen?",
      en: "How do you implement an ADR management system in a transport company?"
    },
    options: {
      ro: ["Numire DGSA, proceduri documentate, training personal, check-liste, sistem de raportare incidente, audituri interne, îmbunătățire continuă", "Nu e nevoie de sistem", "Doar certificatul șoferului contează", "Externalizez totul"],
      de: ["DGSA-Ernennung, dokumentierte Verfahren, Personaltraining, Checklisten, Vorfallmeldesystem, interne Audits, kontinuierliche Verbesserung", "Kein System nötig", "Nur Fahrerzertifikat zählt", "Alles auslagern"],
      en: ["DGSA appointment, documented procedures, staff training, checklists, incident reporting system, internal audits, continuous improvement", "No system needed", "Only driver certificate matters", "Outsource everything"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Sistemul de management ADR se integrează cu ISO 9001 sau similar. Documentarea și îmbunătățirea continuă sunt cheile conformității pe termen lung.",
      de: "ADR-Managementsystem integriert sich mit ISO 9001 oder ähnlich. Dokumentation und kontinuierliche Verbesserung sind Schlüssel zur Langzeitkonformität.",
      en: "ADR management system integrates with ISO 9001 or similar. Documentation and continuous improvement are keys to long-term compliance."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt diferențele între ADR, IMDG (maritim) și IATA-DGR (aerian) pentru aceeași substanță?",
      de: "Was sind die Unterschiede zwischen ADR, IMDG (See) und IATA-DGR (Luft) für dieselbe Substanz?",
      en: "What are differences between ADR, IMDG (sea) and IATA-DGR (air) for the same substance?"
    },
    options: {
      ro: ["Cantități permise diferite, ambalaje specifice, etichete/marcaje variate, documente distincte, unele substanțe interzise în aer dar permise rutier", "Toate sunt identice", "Doar denumirea diferă", "Același document pentru toate"],
      de: ["Verschiedene erlaubte Mengen, spezifische Verpackungen, unterschiedliche Etiketten/Markierungen, verschiedene Dokumente, einige Substanzen im Flugzeug verboten aber auf Straße erlaubt", "Alle sind identisch", "Nur Bezeichnung unterschiedlich", "Gleiches Dokument für alle"],
      en: ["Different permitted quantities, specific packaging, varied labels/markings, distinct documents, some substances forbidden by air but allowed by road", "All are identical", "Only name differs", "Same document for all"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Transportul multimodal necesită conformitate cu toate regulamentele aplicabile. Cel mai restrictiv se aplică la overlap.",
      de: "Multimodaler Transport erfordert Konformität mit allen anwendbaren Vorschriften. Das restriktivste gilt bei Überlappung.",
      en: "Multimodal transport requires compliance with all applicable regulations. Most restrictive applies at overlap."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum evaluezi și selectezi subcontractori ADR pentru operațiuni externalizate?",
      de: "Wie bewerten und wählen Sie ADR-Subunternehmer für ausgelagerte Operationen?",
      en: "How do you evaluate and select ADR subcontractors for outsourced operations?"
    },
    options: {
      ro: ["Due diligence: licențe valide, DGSA, istoricul incidentelor, flotă conformă, asigurări adecvate, audituri periodice, contracte cu clauze de conformitate", "Doar cel mai ieftin", "Încredere fără verificare", "Nu am responsabilitate pentru subcontractori"],
      de: ["Due Diligence: gültige Lizenzen, DGSA, Vorfallhistorie, konforme Flotte, adäquate Versicherungen, periodische Audits, Verträge mit Konformitätsklauseln", "Nur der billigste", "Vertrauen ohne Prüfung", "Keine Verantwortung für Subunternehmer"],
      en: ["Due diligence: valid licenses, DGSA, incident history, compliant fleet, adequate insurance, periodic audits, contracts with compliance clauses", "Only cheapest", "Trust without verification", "No responsibility for subcontractors"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Răspunderea se extinde și la subcontractori. Un accident la subcontractor afectează reputația și poate atrage răspundere pentru tine.",
      de: "Haftung erstreckt sich auch auf Subunternehmer. Unfall beim Subunternehmer beeinflusst Reputation und kann Haftung für Sie nach sich ziehen.",
      en: "Liability extends to subcontractors. Accident at subcontractor affects reputation and can attract liability for you."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Scenariu: Primești comandă urgentă pentru clasa 1 (explozivi) pe rută ce trece prin 3 țări. Ce verifici?",
      de: "Szenario: Sie erhalten Eilauftrag für Klasse 1 (Explosivstoffe) auf Route durch 3 Länder. Was prüfen Sie?",
      en: "Scenario: You receive urgent order for class 1 (explosives) on route through 3 countries. What do you check?"
    },
    options: {
      ro: ["Autorizații specifice explozivi per țară, certificat șofer class 1, restricții de rută (tuneluri, zone urbane), escorte dacă necesare, notificări prealabile", "Doar certificatul ADR de bază", "Transport ca orice altă clasă", "Refuz automat - explozivii sunt interziși"],
      de: ["Länderspezifische Explosivstoffgenehmigungen, Fahrerzertifikat Klasse 1, Routenbeschränkungen (Tunnel, Stadtzonen), Eskorten wenn nötig, Voranmeldungen", "Nur ADR-Basiszertifikat", "Transport wie jede andere Klasse", "Automatische Ablehnung - Explosivstoffe sind verboten"],
      en: ["Country-specific explosives authorizations, driver certificate class 1, route restrictions (tunnels, urban zones), escorts if needed, advance notifications", "Only basic ADR certificate", "Transport like any other class", "Automatic refusal - explosives are forbidden"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Clasa 1 are cele mai multe restricții. Anumite țări cer autorizații speciale, trasee prestabilite, notificări cu zile înainte.",
      de: "Klasse 1 hat die meisten Beschränkungen. Bestimmte Länder verlangen Sondergenehmigungen, vorgegebene Routen, Benachrichtigungen Tage vorher.",
      en: "Class 1 has most restrictions. Certain countries require special authorizations, preset routes, notifications days in advance."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Cum integrezi cerințele ADR cu alte standarde de siguranță (ISO 45001, SQAS)?",
      de: "Wie integrieren Sie ADR-Anforderungen mit anderen Sicherheitsstandards (ISO 45001, SQAS)?",
      en: "How do you integrate ADR requirements with other safety standards (ISO 45001, SQAS)?"
    },
    options: {
      ro: ["Sistem integrat de management: proceduri comune, un set de audituri, matrice de responsabilități, indicatori unificați, training combinat", "Sisteme complet separate", "ADR nu se integrează cu nimic", "Doar un standard e suficient"],
      de: ["Integriertes Managementsystem: gemeinsame Verfahren, ein Audit-Set, Verantwortlichkeitsmatrix, einheitliche Indikatoren, kombiniertes Training", "Komplett separate Systeme", "ADR integriert sich mit nichts", "Nur ein Standard ist ausreichend"],
      en: ["Integrated management system: common procedures, one audit set, responsibility matrix, unified indicators, combined training", "Completely separate systems", "ADR doesn't integrate with anything", "Only one standard is sufficient"]
    },
    correctIndex: 0,
    explanation: {
      ro: "SQAS (Safety & Quality Assessment for Sustainability) e cerut de clienții chimici. Integrarea eficientizează conformitatea și reduce birocrația.",
      de: "SQAS (Safety & Quality Assessment for Sustainability) wird von Chemiekunden verlangt. Integration verbessert Konformität und reduziert Bürokratie.",
      en: "SQAS (Safety & Quality Assessment for Sustainability) is required by chemical customers. Integration streamlines compliance and reduces bureaucracy."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Care sunt tendințele viitoare în reglementarea ADR și cum te pregătești?",
      de: "Was sind zukünftige Trends in der ADR-Regulierung und wie bereiten Sie sich vor?",
      en: "What are future trends in ADR regulation and how do you prepare?"
    },
    options: {
      ro: ["Digitalizare documente (e-CMR pentru ADR), vehicule electrice/hidrogen în ADR, reglementări mai stricte pentru baterii litiu, telematică obligatorie", "ADR nu se va schimba", "Doar restricții mai puține", "Reglementările vor dispărea"],
      de: ["Dokumentendigitalisierung (e-CMR für ADR), Elektro-/Wasserstofffahrzeuge im ADR, strengere Lithiumbatterievorschriften, obligatorische Telematik", "ADR wird sich nicht ändern", "Nur weniger Beschränkungen", "Vorschriften werden verschwinden"],
      en: ["Document digitalization (e-CMR for ADR), electric/hydrogen vehicles in ADR, stricter lithium battery regulations, mandatory telematics", "ADR won't change", "Only fewer restrictions", "Regulations will disappear"]
    },
    correctIndex: 0,
    explanation: {
      ro: "Bateriile litiu sunt în creștere și reglementările se înăspresc. Digitalizarea vine, dar încet. Anticiparea tendințelor = avantaj competitiv.",
      de: "Lithiumbatterien nehmen zu und Vorschriften werden strenger. Digitalisierung kommt, aber langsam. Trendantizipation = Wettbewerbsvorteil.",
      en: "Lithium batteries are growing and regulations tightening. Digitalization is coming, but slowly. Anticipating trends = competitive advantage."
    }
  }
];
