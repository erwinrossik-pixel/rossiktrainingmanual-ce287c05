import { Language } from '@/contexts/LanguageContext';

interface QuizQuestion {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export const insuranceQuestions: QuizQuestion[] = [
  {
    question: {
      ro: "Ce este asigurarea CMR?",
      de: "Was ist die CMR-Versicherung?",
      en: "What is CMR insurance?"
    },
    options: {
      ro: ["Asigurare de viață", "Asigurarea răspunderii transportatorului conform Convenției CMR", "Asigurare auto", "Asigurare de sănătate"],
      de: ["Lebensversicherung", "Haftpflichtversicherung des Frachtführers gemäß CMR-Übereinkommen", "Kfz-Versicherung", "Krankenversicherung"],
      en: ["Life insurance", "Carrier liability insurance under CMR Convention", "Car insurance", "Health insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Asigurarea CMR acoperă răspunderea transportatorului pentru pierderea sau avarierea mărfurilor.",
      de: "Die CMR-Versicherung deckt die Haftung des Frachtführers für Verlust oder Beschädigung von Waren ab.",
      en: "CMR insurance covers the carrier's liability for loss or damage of goods."
    }
  },
  {
    question: {
      ro: "Care este diferența dintre asigurarea CMR și asigurarea de marfă?",
      de: "Was ist der Unterschied zwischen CMR-Versicherung und Frachtversicherung?",
      en: "What is the difference between CMR insurance and cargo insurance?"
    },
    options: {
      ro: ["Nu există diferență", "CMR acoperă răspunderea transportatorului, cargo acoperă valoarea mărfii", "Același lucru", "CMR e mai scumpă"],
      de: ["Kein Unterschied", "CMR deckt die Haftung des Frachtführers, Cargo deckt den Warenwert", "Das Gleiche", "CMR ist teurer"],
      en: ["No difference", "CMR covers carrier liability, cargo covers goods value", "Same thing", "CMR is more expensive"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CMR acoperă răspunderea limitată a transportatorului; asigurarea de marfă acoperă valoarea integrală.",
      de: "CMR deckt die begrenzte Haftung des Frachtführers; Frachtversicherung deckt den vollen Wert.",
      en: "CMR covers carrier's limited liability; cargo insurance covers full value."
    }
  },
  {
    question: {
      ro: "Ce este franșiza în asigurări?",
      de: "Was ist die Selbstbeteiligung in der Versicherung?",
      en: "What is the deductible in insurance?"
    },
    options: {
      ro: ["Prima de asigurare", "Suma suportată de asigurat din fiecare daună", "Limita maximă", "Bonusul de fidelitate"],
      de: ["Die Versicherungsprämie", "Der vom Versicherten bei jedem Schaden getragene Betrag", "Die Höchstgrenze", "Der Treuebonus"],
      en: ["Insurance premium", "Amount borne by insured from each claim", "Maximum limit", "Loyalty bonus"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Franșiza este suma pe care asiguratul o plătește din buzunar înainte ca asigurătorul să plătească.",
      de: "Die Selbstbeteiligung ist der Betrag, den der Versicherte aus eigener Tasche zahlt, bevor der Versicherer zahlt.",
      en: "Deductible is the amount insured pays out of pocket before insurer pays."
    }
  },
  {
    question: {
      ro: "Ce riscuri acoperă o poliță all-risks pentru transport?",
      de: "Welche Risiken deckt eine All-Risks-Police für Transport ab?",
      en: "What risks does an all-risks transport policy cover?"
    },
    options: {
      ro: ["Doar furtul", "Toate riscurile de pierdere sau avarie, cu excepțiile specificate", "Doar incendiul", "Doar accidentele"],
      de: ["Nur Diebstahl", "Alle Verlust- oder Schadensrisiken, mit genannten Ausnahmen", "Nur Feuer", "Nur Unfälle"],
      en: ["Only theft", "All risks of loss or damage, with specified exceptions", "Only fire", "Only accidents"]
    },
    correctIndex: 1,
    explanation: {
      ro: "All-risks acoperă orice pierdere sau avarie, mai puțin excluderile expres menționate în poliță.",
      de: "All-Risks deckt jeden Verlust oder Schaden ab, außer den ausdrücklich in der Police genannten Ausschlüssen.",
      en: "All-risks covers any loss or damage, except exclusions expressly mentioned in the policy."
    }
  },
  {
    question: {
      ro: "Ce sunt excluderile în polița de asigurare?",
      de: "Was sind Ausschlüsse in der Versicherungspolice?",
      en: "What are exclusions in the insurance policy?"
    },
    options: {
      ro: ["Riscuri suplimentare", "Riscuri sau situații care nu sunt acoperite de asigurare", "Bonusuri", "Prime"],
      de: ["Zusätzliche Risiken", "Risiken oder Situationen, die nicht versichert sind", "Boni", "Prämien"],
      en: ["Additional risks", "Risks or situations not covered by insurance", "Bonuses", "Premiums"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Excluderile sunt riscurile specific exceptate de la acoperire, precum uzura normală sau viciul propriu.",
      de: "Ausschlüsse sind speziell von der Deckung ausgenommene Risiken, wie normale Abnutzung oder inhärente Mängel.",
      en: "Exclusions are risks specifically excepted from coverage, like normal wear or inherent vice."
    }
  },
  {
    question: {
      ro: "Ce este prima de asigurare?",
      de: "Was ist die Versicherungsprämie?",
      en: "What is the insurance premium?"
    },
    options: {
      ro: ["Despăgubirea", "Suma plătită asigurătorului pentru acoperire", "Franșiza", "Limita de răspundere"],
      de: ["Die Entschädigung", "Der für die Deckung an den Versicherer gezahlte Betrag", "Die Selbstbeteiligung", "Die Haftungsgrenze"],
      en: ["The compensation", "Amount paid to insurer for coverage", "The deductible", "Liability limit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Prima este costul asigurării, plătit periodic pentru menținerea acoperirii.",
      de: "Die Prämie sind die Versicherungskosten, die regelmäßig zur Aufrechterhaltung der Deckung gezahlt werden.",
      en: "Premium is the cost of insurance, paid periodically to maintain coverage."
    }
  },
  {
    question: {
      ro: "Ce înseamnă valoarea asigurată?",
      de: "Was bedeutet die Versicherungssumme?",
      en: "What does insured value mean?"
    },
    options: {
      ro: ["Prima", "Suma maximă plătibilă în caz de daună totală", "Franșiza", "Excluderea"],
      de: ["Die Prämie", "Der maximal zahlbare Betrag bei Totalschaden", "Die Selbstbeteiligung", "Der Ausschluss"],
      en: ["The premium", "Maximum amount payable in case of total loss", "Deductible", "Exclusion"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Valoarea asigurată reprezintă suma maximă pe care asigurătorul o va plăti pentru o pierdere totală.",
      de: "Die Versicherungssumme ist der Höchstbetrag, den der Versicherer bei einem Totalschaden zahlt.",
      en: "Insured value represents maximum amount insurer will pay for total loss."
    }
  },
  {
    question: {
      ro: "Ce este o poliță de flotă?",
      de: "Was ist eine Flottenpolice?",
      en: "What is a fleet policy?"
    },
    options: {
      ro: ["Asigurare pentru o mașină", "Asigurare care acoperă toate vehiculele unei companii", "Asigurare de viață", "Asigurare de sănătate"],
      de: ["Versicherung für ein Fahrzeug", "Versicherung, die alle Fahrzeuge eines Unternehmens abdeckt", "Lebensversicherung", "Krankenversicherung"],
      en: ["Insurance for one car", "Insurance covering all vehicles of a company", "Life insurance", "Health insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Polița de flotă acoperă toate vehiculele companiei sub un singur contract, de obicei la tarife reduse.",
      de: "Die Flottenpolice deckt alle Fahrzeuge des Unternehmens unter einem Vertrag ab, normalerweise zu reduzierten Tarifen.",
      en: "Fleet policy covers all company vehicles under one contract, usually at reduced rates."
    }
  },
  {
    question: {
      ro: "Ce documente sunt necesare pentru o cerere de despăgubire?",
      de: "Welche Dokumente sind für einen Entschädigungsantrag erforderlich?",
      en: "What documents are needed for a compensation claim?"
    },
    options: {
      ro: ["Doar cererea", "Cerere, CMR, facturi, fotografii, raport daune, corespondență", "Doar factura", "Doar CMR"],
      de: ["Nur der Antrag", "Antrag, CMR, Rechnungen, Fotos, Schadenbericht, Korrespondenz", "Nur die Rechnung", "Nur CMR"],
      en: ["Only the request", "Request, CMR, invoices, photos, damage report, correspondence", "Only invoice", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dosarul complet include cererea, documentele de transport, dovezi ale valorii și documentația daunei.",
      de: "Die vollständige Akte umfasst den Antrag, Transportdokumente, Wertnachweise und Schadensdokumentation.",
      en: "Complete file includes request, transport documents, value evidence and damage documentation."
    }
  },
  {
    question: {
      ro: "Ce este subrogația în asigurări?",
      de: "Was ist Subrogation in der Versicherung?",
      en: "What is subrogation in insurance?"
    },
    options: {
      ro: ["Un tip de poliță", "Dreptul asigurătorului de a recupera suma de la responsabil după plată", "O primă", "O franșiză"],
      de: ["Eine Policenart", "Das Recht des Versicherers, den Betrag nach Zahlung vom Verantwortlichen zurückzufordern", "Eine Prämie", "Eine Selbstbeteiligung"],
      en: ["A policy type", "Insurer's right to recover amount from responsible party after payment", "A premium", "A deductible"]
    },
    correctIndex: 1,
    explanation: {
      ro: "După despăgubire, asigurătorul preia drepturile asiguratului de a acționa împotriva vinovatului.",
      de: "Nach der Entschädigung übernimmt der Versicherer die Rechte des Versicherten, gegen den Schuldigen vorzugehen.",
      en: "After compensation, insurer takes over insured's rights to act against the guilty party."
    }
  },
  {
    question: {
      ro: "Ce acoperă asigurarea CASCO pentru vehicule comerciale?",
      de: "Was deckt die Kaskoversicherung für Nutzfahrzeuge ab?",
      en: "What does CASCO insurance cover for commercial vehicles?"
    },
    options: {
      ro: ["Doar răspunderea", "Daunele proprii ale vehiculului: accident, furt, vandalism", "Doar marfa", "Doar pasagerii"],
      de: ["Nur Haftpflicht", "Eigene Fahrzeugschäden: Unfall, Diebstahl, Vandalismus", "Nur Fracht", "Nur Passagiere"],
      en: ["Only liability", "Own vehicle damages: accident, theft, vandalism", "Only cargo", "Only passengers"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CASCO acoperă daunele vehiculului propriu din accident, furt, calamități naturale etc.",
      de: "Kasko deckt eigene Fahrzeugschäden durch Unfall, Diebstahl, Naturkatastrophen usw. ab.",
      en: "CASCO covers own vehicle damages from accident, theft, natural disasters etc."
    }
  },
  {
    question: {
      ro: "Ce este asigurarea de răspundere profesională pentru expeditori?",
      de: "Was ist die Berufshaftpflichtversicherung für Spediteure?",
      en: "What is professional liability insurance for forwarders?"
    },
    options: {
      ro: ["Asigurare de viață", "Acoperire pentru erori profesionale care cauzează daune clienților", "Asigurare auto", "Asigurare de sănătate"],
      de: ["Lebensversicherung", "Deckung für Berufsfehler, die Kundenschäden verursachen", "Kfz-Versicherung", "Krankenversicherung"],
      en: ["Life insurance", "Coverage for professional errors causing client damages", "Car insurance", "Health insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Asigurarea de răspundere profesională acoperă erorile de organizare care duc la pierderi pentru clienți.",
      de: "Die Berufshaftpflichtversicherung deckt Organisationsfehler ab, die zu Kundenverlusten führen.",
      en: "Professional liability insurance covers organizational errors leading to client losses."
    }
  },
  {
    question: {
      ro: "Ce înseamnă Institute Cargo Clauses (ICC)?",
      de: "Was bedeuten Institute Cargo Clauses (ICC)?",
      en: "What do Institute Cargo Clauses (ICC) mean?"
    },
    options: {
      ro: ["O companie de asigurări", "Condiții standard internaționale pentru asigurarea mărfurilor (A, B, C)", "O bancă", "Un tribunal"],
      de: ["Eine Versicherungsgesellschaft", "Internationale Standardbedingungen für Frachtversicherung (A, B, C)", "Eine Bank", "Ein Gericht"],
      en: ["An insurance company", "International standard conditions for cargo insurance (A, B, C)", "A bank", "A court"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ICC sunt condiții standard pentru asigurarea maritimă: A (all-risks), B (riscuri specifice), C (riscuri minime).",
      de: "ICC sind Standardbedingungen für Seeversicherung: A (All-Risks), B (bestimmte Risiken), C (minimale Risiken).",
      en: "ICC are standard conditions for marine insurance: A (all-risks), B (specified risks), C (minimal risks)."
    }
  },
  {
    question: {
      ro: "Ce reprezintă suma asigurată CIF+10%?",
      de: "Was bedeutet die Versicherungssumme CIF+10%?",
      en: "What does insured sum CIF+10% represent?"
    },
    options: {
      ro: ["Doar costul mărfii", "Valoarea mărfii + asigurare + transport + 10% profit anticipat", "Doar transportul", "Doar asigurarea"],
      de: ["Nur Warenkosten", "Warenwert + Versicherung + Transport + 10% erwarteter Gewinn", "Nur Transport", "Nur Versicherung"],
      en: ["Only goods cost", "Goods value + insurance + freight + 10% anticipated profit", "Only transport", "Only insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "CIF+10% include valoarea mărfii, asigurarea, transportul și 10% profit anticipat pentru acoperire completă.",
      de: "CIF+10% umfasst Warenwert, Versicherung, Transport und 10% erwarteten Gewinn für vollständige Deckung.",
      en: "CIF+10% includes goods value, insurance, freight and 10% anticipated profit for complete coverage."
    }
  },
  {
    question: {
      ro: "Ce este o poliță de abonament (open cover)?",
      de: "Was ist eine Abonnementpolice (Open Cover)?",
      en: "What is an open cover policy?"
    },
    options: {
      ro: ["Poliță pentru un singur transport", "Acord-cadru care acoperă automat toate transporturile declarate", "Poliță expirată", "Poliță suspendată"],
      de: ["Police für einen einzelnen Transport", "Rahmenvertrag, der automatisch alle deklarierten Transporte abdeckt", "Abgelaufene Police", "Suspendierte Police"],
      en: ["Policy for single transport", "Framework agreement automatically covering all declared shipments", "Expired policy", "Suspended policy"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Open cover acoperă automat toate transporturile în perioada de valabilitate, cu declarație periodică.",
      de: "Open Cover deckt automatisch alle Transporte während der Gültigkeitsdauer mit periodischer Erklärung ab.",
      en: "Open cover automatically covers all shipments during validity period, with periodic declaration."
    }
  },
  {
    question: {
      ro: "Ce trebuie făcut imediat după producerea unei daune asigurate?",
      de: "Was muss sofort nach Eintritt eines versicherten Schadens getan werden?",
      en: "What must be done immediately after an insured loss occurs?"
    },
    options: {
      ro: ["Nimic", "Notificare asigurător, conservare dovezi, limitare daune", "Așteptare 30 zile", "Reparare imediată"],
      de: ["Nichts", "Versicherer benachrichtigen, Beweise sichern, Schäden begrenzen", "30 Tage warten", "Sofortige Reparatur"],
      en: ["Nothing", "Notify insurer, preserve evidence, mitigate damages", "Wait 30 days", "Immediate repair"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Obligațiile imediate: notificarea asigurătorului, protejarea dovezilor și acțiuni de limitare a daunelor.",
      de: "Sofortige Pflichten: Versicherer benachrichtigen, Beweise schützen und Maßnahmen zur Schadenbegrenzung ergreifen.",
      en: "Immediate duties: notify insurer, protect evidence and take damage mitigation actions."
    }
  },
  {
    question: {
      ro: "Ce este avaria particulară?",
      de: "Was ist besondere Havarie?",
      en: "What is particular average?"
    },
    options: {
      ro: ["Daună pentru toți", "Pierdere sau daună parțială care afectează doar anumite părți interesate", "Daună totală", "Nicio daună"],
      de: ["Schaden für alle", "Teil- oder Verlustschaden, der nur bestimmte Parteien betrifft", "Totalschaden", "Kein Schaden"],
      en: ["Damage for everyone", "Partial loss or damage affecting only certain interested parties", "Total damage", "No damage"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Avaria particulară este o daună parțială care afectează doar proprietarul mărfii respective.",
      de: "Besondere Havarie ist ein Teilschaden, der nur den Eigentümer der betreffenden Ware betrifft.",
      en: "Particular average is partial damage affecting only the owner of the respective goods."
    }
  },
  {
    question: {
      ro: "Ce este avaria comună (general average)?",
      de: "Was ist große Havarie (General Average)?",
      en: "What is general average?"
    },
    options: {
      ro: ["Daună individuală", "Sacrificiu deliberat pentru salvarea navei, împărțit între toate părțile", "Daună mică", "Excludere"],
      de: ["Einzelschaden", "Absichtliches Opfer zur Rettung des Schiffes, auf alle Parteien verteilt", "Kleiner Schaden", "Ausschluss"],
      en: ["Individual damage", "Deliberate sacrifice to save the vessel, shared among all parties", "Small damage", "Exclusion"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Avaria comună este un sacrificiu intenționat (ex: aruncarea mărfii) pentru salvarea navei, suportat proporțional.",
      de: "Große Havarie ist ein absichtliches Opfer (z.B. Überbordwerfen) zur Rettung des Schiffes, anteilig getragen.",
      en: "General average is intentional sacrifice (e.g., jettison) to save the vessel, borne proportionally."
    }
  },
  {
    question: {
      ro: "Ce obligații are asiguratul în caz de daună?",
      de: "Welche Pflichten hat der Versicherte im Schadensfall?",
      en: "What obligations does the insured have in case of damage?"
    },
    options: {
      ro: ["Niciuna", "Notificare promptă, conservare dovezi, cooperare, limitare daune", "Doar plata primei", "Doar așteptare"],
      de: ["Keine", "Prompte Benachrichtigung, Beweissicherung, Kooperation, Schadenbegrenzung", "Nur Prämienzahlung", "Nur warten"],
      en: ["None", "Prompt notification, evidence preservation, cooperation, damage mitigation", "Only premium payment", "Only wait"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Asiguratul trebuie să notifice prompt, să păstreze dovezile, să coopereze și să minimizeze daunele.",
      de: "Der Versicherte muss unverzüglich benachrichtigen, Beweise sichern, kooperieren und Schäden minimieren.",
      en: "Insured must promptly notify, preserve evidence, cooperate and minimize damages."
    }
  },
  {
    question: {
      ro: "Ce este declarația de avarie?",
      de: "Was ist eine Schadensmeldung?",
      en: "What is a damage declaration?"
    },
    options: {
      ro: ["O factură", "Notificarea oficială către asigurător despre producerea unui eveniment asigurat", "O cerere de ofertă", "Un contract"],
      de: ["Eine Rechnung", "Die offizielle Benachrichtigung des Versicherers über ein versichertes Ereignis", "Eine Angebotsanfrage", "Ein Vertrag"],
      en: ["An invoice", "Official notification to insurer about occurrence of an insured event", "A quote request", "A contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Declarația de avarie este notificarea formală prin care informezi asigurătorul despre producerea daunei.",
      de: "Die Schadensmeldung ist die formelle Benachrichtigung, durch die Sie den Versicherer über den Schaden informieren.",
      en: "Damage declaration is formal notification informing insurer about the occurrence of damage."
    }
  },
  {
    question: {
      ro: "Ce reprezintă limita de răspundere în polița de asigurare?",
      de: "Was bedeutet die Haftungsgrenze in der Versicherungspolice?",
      en: "What does liability limit represent in insurance policy?"
    },
    options: {
      ro: ["Prima minimă", "Suma maximă pe care asigurătorul o va plăti pentru un sinistru", "Franșiza", "Excluderea"],
      de: ["Mindestprämie", "Der Höchstbetrag, den der Versicherer für einen Schaden zahlt", "Selbstbeteiligung", "Ausschluss"],
      en: ["Minimum premium", "Maximum amount insurer will pay for a claim", "Deductible", "Exclusion"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Limita de răspundere este suma maximă pe care asigurătorul o plătește per eveniment sau per an.",
      de: "Die Haftungsgrenze ist der Höchstbetrag, den der Versicherer pro Ereignis oder Jahr zahlt.",
      en: "Liability limit is maximum amount insurer pays per event or per year."
    }
  },
  {
    question: {
      ro: "Ce este bonusul de daune (no claims bonus)?",
      de: "Was ist der Schadenfreiheitsrabatt?",
      en: "What is no claims bonus?"
    },
    options: {
      ro: ["O taxă suplimentară", "Reducere de primă pentru perioade fără daune", "O franșiză", "O excludere"],
      de: ["Eine Zusatzgebühr", "Prämienrabatt für schadenfreie Zeiträume", "Eine Selbstbeteiligung", "Ein Ausschluss"],
      en: ["An additional fee", "Premium discount for claim-free periods", "A deductible", "An exclusion"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Bonusul de daune recompensează asigurații fără sinistre cu prime reduse.",
      de: "Der Schadenfreiheitsrabatt belohnt Versicherte ohne Schadensfälle mit reduzierten Prämien.",
      en: "No claims bonus rewards insureds without claims with reduced premiums."
    }
  },
  {
    question: {
      ro: "Ce înseamnă a fi subasigurat?",
      de: "Was bedeutet unterversichert zu sein?",
      en: "What does being underinsured mean?"
    },
    options: {
      ro: ["A avea prea multă asigurare", "A avea sumă asigurată mai mică decât valoarea reală a bunurilor", "A fi neasigurat", "A avea asigurare perfectă"],
      de: ["Zu viel Versicherung haben", "Eine Versicherungssumme niedriger als der tatsächliche Warenwert", "Nicht versichert sein", "Perfekte Versicherung haben"],
      en: ["Having too much insurance", "Having insured sum lower than actual value of goods", "Being uninsured", "Having perfect insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Subasigurarea duce la despăgubiri proporționale - primești mai puțin decât pierderile reale.",
      de: "Unterversicherung führt zu anteiliger Entschädigung - Sie erhalten weniger als die tatsächlichen Verluste.",
      en: "Underinsurance leads to proportional compensation - you receive less than actual losses."
    }
  },
  {
    question: {
      ro: "Ce documente compun dosarul de daună?",
      de: "Welche Dokumente gehören zur Schadensakte?",
      en: "What documents make up the damage file?"
    },
    options: {
      ro: ["Doar cererea", "Cerere, CMR, facturi, fotografii, expertize, corespondență, dovezi plată", "Doar factura", "Doar CMR"],
      de: ["Nur der Antrag", "Antrag, CMR, Rechnungen, Fotos, Gutachten, Korrespondenz, Zahlungsnachweise", "Nur Rechnung", "Nur CMR"],
      en: ["Only request", "Request, CMR, invoices, photos, surveys, correspondence, payment proofs", "Only invoice", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Dosarul complet include toate documentele care dovedesc dauna, valoarea și dreptul la despăgubire.",
      de: "Die vollständige Akte enthält alle Dokumente, die Schaden, Wert und Entschädigungsanspruch nachweisen.",
      en: "Complete file includes all documents proving damage, value and entitlement to compensation."
    }
  },
  {
    question: {
      ro: "Ce este perioada de grație în asigurări?",
      de: "Was ist die Nachfrist in der Versicherung?",
      en: "What is the grace period in insurance?"
    },
    options: {
      ro: ["Perioada fără acoperire", "Perioada permisă pentru plata primei după scadență, menținând acoperirea", "Franșiza", "Excluderea"],
      de: ["Deckungsfreie Zeit", "Erlaubte Frist für Prämienzahlung nach Fälligkeit unter Beibehaltung der Deckung", "Selbstbeteiligung", "Ausschluss"],
      en: ["Period without coverage", "Allowed period for premium payment after due date, maintaining coverage", "Deductible", "Exclusion"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Perioada de grație permite plata primei cu întârziere fără pierderea acoperirii.",
      de: "Die Nachfrist ermöglicht eine verspätete Prämienzahlung ohne Deckungsverlust.",
      en: "Grace period allows late premium payment without losing coverage."
    }
  },
  {
    question: {
      ro: "Ce este un broker de asigurări?",
      de: "Was ist ein Versicherungsmakler?",
      en: "What is an insurance broker?"
    },
    options: {
      ro: ["Un angajat al asigurătorului", "Intermediar independent care reprezintă interesele clientului", "Un evaluator de daune", "Un expert tehnic"],
      de: ["Ein Angestellter des Versicherers", "Unabhängiger Vermittler, der die Kundeninteressen vertritt", "Ein Schadensgutachter", "Ein technischer Experte"],
      en: ["An insurer employee", "Independent intermediary representing client interests", "A damage surveyor", "A technical expert"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Brokerul lucrează pentru client, căutând cea mai bună acoperire și preț pe piața asigurărilor.",
      de: "Der Makler arbeitet für den Kunden und sucht die beste Deckung und den besten Preis auf dem Versicherungsmarkt.",
      en: "Broker works for client, seeking best coverage and price in insurance market."
    }
  },
  {
    question: {
      ro: "Ce este coasigurarea?",
      de: "Was ist Mitversicherung?",
      en: "What is coinsurance?"
    },
    options: {
      ro: ["Asigurare simplă", "Împărțirea riscului între mai mulți asigurători", "Lipsa asigurării", "Asigurare dublă"],
      de: ["Einfache Versicherung", "Risikoteilung zwischen mehreren Versicherern", "Keine Versicherung", "Doppelte Versicherung"],
      en: ["Simple insurance", "Risk sharing between multiple insurers", "No insurance", "Double insurance"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Coasigurarea implică mai mulți asigurători care își împart riscul, fiecare acoperind un procent.",
      de: "Mitversicherung bedeutet, dass mehrere Versicherer das Risiko teilen, jeder deckt einen Prozentsatz ab.",
      en: "Coinsurance involves multiple insurers sharing the risk, each covering a percentage."
    }
  },
  {
    question: {
      ro: "Când începe și când se termină acoperirea de asigurare pentru transport?",
      de: "Wann beginnt und endet die Transportversicherungsdeckung?",
      en: "When does transport insurance coverage begin and end?"
    },
    options: {
      ro: ["La semnarea contractului", "De la depozit la depozit (warehouse to warehouse)", "Doar pe durata transportului", "Doar la încărcare"],
      de: ["Bei Vertragsunterzeichnung", "Von Lager zu Lager (warehouse to warehouse)", "Nur während des Transports", "Nur beim Beladen"],
      en: ["At contract signing", "From warehouse to warehouse", "Only during transport", "Only at loading"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Clauza standard 'warehouse to warehouse' acoperă întreaga călătorie de la origine la destinație.",
      de: "Die Standardklausel 'warehouse to warehouse' deckt die gesamte Reise von Ursprung bis Ziel ab.",
      en: "Standard 'warehouse to warehouse' clause covers the entire journey from origin to destination."
    }
  }
];

export function getRandomInsuranceQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...insuranceQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
