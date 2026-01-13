import { QuizQuestion } from '../quizData';

export const emergencyQuestions: QuizQuestion[] = [
  // Romanian Questions
  {
    question: "Care este primul pas în caz de accident rutier al vehiculului de transport?",
    options: [
      "Securizarea zonei și apelarea serviciilor de urgență",
      "Mutarea mărfii",
      "Contactarea clientului",
      "Completarea CMR-ului"
    ],
    correctIndex: 0,
    explanation: "Prioritatea absolută este siguranța persoanelor și prevenirea altor accidente prin securizarea zonei.",
    language: "ro"
  },
  {
    question: "În cât timp trebuie notificat asiguratorul după un incident major?",
    options: [
      "Imediat sau în maximum 24 de ore",
      "În 7 zile lucrătoare",
      "La finalizarea transportului",
      "Doar la cererea clientului"
    ],
    correctIndex: 0,
    explanation: "Notificarea imediată a asiguratorului este critică pentru validitatea despăgubirii.",
    language: "ro"
  },
  {
    question: "Ce informații sunt esențiale la raportarea unei urgențe?",
    options: [
      "Locație exactă, tip incident, persoane implicate, marfă afectată",
      "Doar numărul CMR",
      "Numele șoferului",
      "Costul transportului"
    ],
    correctIndex: 0,
    explanation: "Informațiile complete permit un răspuns rapid și adecvat al serviciilor de urgență.",
    language: "ro"
  },
  {
    question: "Ce trebuie făcut în caz de furt al încărcăturii?",
    options: [
      "Alertarea imediată a poliției și păstrarea dovezilor",
      "Continuarea transportului",
      "Notificarea doar la destinație",
      "Așteptarea 48 de ore"
    ],
    correctIndex: 0,
    explanation: "Raportarea imediată la poliție și păstrarea dovezilor sunt esențiale pentru recuperare și asigurare.",
    language: "ro"
  },
  {
    question: "Care este procedura în caz de defecțiune tehnică majoră?",
    options: [
      "Securizare, contact dispecerat, organizare asistență/transbordare",
      "Reparare improvizată și continuare",
      "Abandonarea vehiculului",
      "Așteptare până dimineața"
    ],
    correctIndex: 0,
    explanation: "Procedura corectă implică securizarea vehiculului și coordonarea cu dispeceratul pentru soluții.",
    language: "ro"
  },
  {
    question: "Ce este un 'emergency contact sheet' și de ce este important?",
    options: [
      "Lista numerelor de urgență pentru toate țările de tranzit",
      "Factura de transport",
      "Contractul de asigurare",
      "CMR-ul completat"
    ],
    correctIndex: 0,
    explanation: "Emergency contact sheet oferă acces rapid la numere de urgență specifice fiecărei țări.",
    language: "ro"
  },
  {
    question: "În caz de incident cu marfă ADR, ce acțiune este prioritară?",
    options: [
      "Evacuarea zonei și alertarea serviciilor specializate HAZMAT",
      "Încercarea de a repara scurgerea",
      "Continuarea drumului rapid",
      "Așteptarea instrucțiunilor clientului"
    ],
    correctIndex: 0,
    explanation: "Siguranța persoanelor este prioritară - evacuarea și alertarea specialiștilor HAZMAT este obligatorie.",
    language: "ro"
  },
  {
    question: "Ce document trebuie completat imediat după orice incident?",
    options: [
      "Raport de incident detaliat cu fotografii și mărturii",
      "Doar CMR-ul",
      "Factura corectată",
      "Cerere de concediu"
    ],
    correctIndex: 0,
    explanation: "Raportul de incident detaliat, cu dovezi foto și declarații, este esențial pentru claims și asigurări.",
    language: "ro"
  },
  {
    question: "Care este rolul dispecerului în situații de urgență?",
    options: [
      "Coordonare, comunicare cu toate părțile, organizare soluții alternative",
      "Doar înregistrare incident",
      "Așteptare raport final",
      "Contactarea doar a clientului"
    ],
    correctIndex: 0,
    explanation: "Dispecerul este hub-ul central de coordonare, comunicând cu toate părțile și organizând soluții.",
    language: "ro"
  },
  {
    question: "Ce înseamnă 'hot standby' în contextul urgențelor de transport?",
    options: [
      "Vehicul/șofer de rezervă gata pentru intervenție imediată",
      "Motor care se încălzește",
      "Marfă perisabilă",
      "Transport prioritar"
    ],
    correctIndex: 0,
    explanation: "Hot standby reprezintă resurse de backup disponibile imediat pentru situații de urgență.",
    language: "ro"
  },

  // German Questions
  {
    question: "Was ist der erste Schritt bei einem Verkehrsunfall des Transportfahrzeugs?",
    options: [
      "Absicherung der Stelle und Notruf",
      "Ladung umlagern",
      "Kunden kontaktieren",
      "CMR ausfüllen"
    ],
    correctIndex: 0,
    explanation: "Absolute Priorität hat die Sicherheit der Personen und die Verhinderung weiterer Unfälle durch Absicherung.",
    language: "de"
  },
  {
    question: "Innerhalb welcher Zeit muss der Versicherer nach einem schweren Vorfall benachrichtigt werden?",
    options: [
      "Sofort oder innerhalb von 24 Stunden",
      "Innerhalb von 7 Werktagen",
      "Nach Abschluss des Transports",
      "Nur auf Kundenanfrage"
    ],
    correctIndex: 0,
    explanation: "Die sofortige Benachrichtigung des Versicherers ist entscheidend für die Gültigkeit der Entschädigung.",
    language: "de"
  },
  {
    question: "Welche Informationen sind bei der Meldung eines Notfalls wesentlich?",
    options: [
      "Genaue Position, Art des Vorfalls, beteiligte Personen, betroffene Ladung",
      "Nur CMR-Nummer",
      "Name des Fahrers",
      "Transportkosten"
    ],
    correctIndex: 0,
    explanation: "Vollständige Informationen ermöglichen eine schnelle und angemessene Reaktion der Rettungsdienste.",
    language: "de"
  },
  {
    question: "Was ist bei Ladungsdiebstahl zu tun?",
    options: [
      "Sofortige Polizeimeldung und Beweissicherung",
      "Transport fortsetzen",
      "Meldung erst am Ziel",
      "48 Stunden warten"
    ],
    correctIndex: 0,
    explanation: "Sofortige Polizeimeldung und Beweissicherung sind für Rückgewinnung und Versicherung unerlässlich.",
    language: "de"
  },
  {
    question: "Was ist das Verfahren bei einem schweren technischen Defekt?",
    options: [
      "Absichern, Disposition kontaktieren, Hilfe/Umladen organisieren",
      "Provisorisch reparieren und weiterfahren",
      "Fahrzeug verlassen",
      "Bis zum Morgen warten"
    ],
    correctIndex: 0,
    explanation: "Das korrekte Verfahren beinhaltet die Absicherung des Fahrzeugs und Koordination mit der Disposition.",
    language: "de"
  },
  {
    question: "Was ist ein 'Emergency Contact Sheet' und warum ist es wichtig?",
    options: [
      "Liste der Notrufnummern für alle Transitländer",
      "Transportrechnung",
      "Versicherungsvertrag",
      "Ausgefüllter CMR"
    ],
    correctIndex: 0,
    explanation: "Das Emergency Contact Sheet bietet schnellen Zugang zu länderspezifischen Notrufnummern.",
    language: "de"
  },
  {
    question: "Bei einem ADR-Ladungsvorfall, welche Maßnahme hat Priorität?",
    options: [
      "Bereich evakuieren und HAZMAT-Spezialdienste alarmieren",
      "Versuchen, das Leck zu reparieren",
      "Schnell weiterfahren",
      "Auf Kundenanweisungen warten"
    ],
    correctIndex: 0,
    explanation: "Personensicherheit hat Vorrang - Evakuierung und Alarmierung von HAZMAT-Spezialisten ist Pflicht.",
    language: "de"
  },
  {
    question: "Welches Dokument muss sofort nach jedem Vorfall ausgefüllt werden?",
    options: [
      "Detaillierter Unfallbericht mit Fotos und Zeugenaussagen",
      "Nur CMR",
      "Korrigierte Rechnung",
      "Urlaubsantrag"
    ],
    correctIndex: 0,
    explanation: "Der detaillierte Unfallbericht mit Fotobeweisen und Aussagen ist für Claims und Versicherung unerlässlich.",
    language: "de"
  },
  {
    question: "Welche Rolle hat der Disponent in Notfallsituationen?",
    options: [
      "Koordination, Kommunikation mit allen Parteien, Alternative Lösungen",
      "Nur Vorfall registrieren",
      "Auf Abschlussbericht warten",
      "Nur den Kunden kontaktieren"
    ],
    correctIndex: 0,
    explanation: "Der Disponent ist die zentrale Koordinationsstelle und kommuniziert mit allen Parteien.",
    language: "de"
  },
  {
    question: "Was bedeutet 'Hot Standby' im Kontext von Transportnotfällen?",
    options: [
      "Ersatzfahrzeug/Fahrer bereit für sofortigen Einsatz",
      "Aufwärmender Motor",
      "Verderbliche Ware",
      "Prioritätstransport"
    ],
    correctIndex: 0,
    explanation: "Hot Standby bezeichnet sofort verfügbare Backup-Ressourcen für Notfallsituationen.",
    language: "de"
  },

  // English Questions
  {
    question: "What is the first step in case of a road accident involving the transport vehicle?",
    options: [
      "Securing the area and calling emergency services",
      "Moving the cargo",
      "Contacting the client",
      "Completing the CMR"
    ],
    correctIndex: 0,
    explanation: "Absolute priority is personal safety and preventing further accidents by securing the area.",
    language: "en"
  },
  {
    question: "Within what timeframe must the insurer be notified after a major incident?",
    options: [
      "Immediately or within 24 hours maximum",
      "Within 7 business days",
      "Upon transport completion",
      "Only upon client request"
    ],
    correctIndex: 0,
    explanation: "Immediate insurer notification is critical for claim validity.",
    language: "en"
  },
  {
    question: "What information is essential when reporting an emergency?",
    options: [
      "Exact location, incident type, persons involved, affected cargo",
      "Only CMR number",
      "Driver's name",
      "Transport cost"
    ],
    correctIndex: 0,
    explanation: "Complete information enables rapid and appropriate emergency service response.",
    language: "en"
  },
  {
    question: "What should be done in case of cargo theft?",
    options: [
      "Immediate police alert and evidence preservation",
      "Continue transport",
      "Notify only at destination",
      "Wait 48 hours"
    ],
    correctIndex: 0,
    explanation: "Immediate police reporting and evidence preservation are essential for recovery and insurance.",
    language: "en"
  },
  {
    question: "What is the procedure for a major technical breakdown?",
    options: [
      "Secure, contact dispatch, organize assistance/transshipment",
      "Improvise repair and continue",
      "Abandon vehicle",
      "Wait until morning"
    ],
    correctIndex: 0,
    explanation: "Correct procedure involves securing the vehicle and coordinating with dispatch for solutions.",
    language: "en"
  },
  {
    question: "What is an 'emergency contact sheet' and why is it important?",
    options: [
      "List of emergency numbers for all transit countries",
      "Transport invoice",
      "Insurance contract",
      "Completed CMR"
    ],
    correctIndex: 0,
    explanation: "Emergency contact sheet provides quick access to country-specific emergency numbers.",
    language: "en"
  },
  {
    question: "In case of an ADR cargo incident, what action is priority?",
    options: [
      "Evacuate area and alert specialized HAZMAT services",
      "Try to repair the leak",
      "Continue driving quickly",
      "Wait for client instructions"
    ],
    correctIndex: 0,
    explanation: "Personal safety is priority - evacuation and alerting HAZMAT specialists is mandatory.",
    language: "en"
  },
  {
    question: "What document must be completed immediately after any incident?",
    options: [
      "Detailed incident report with photos and witness statements",
      "Only CMR",
      "Corrected invoice",
      "Leave request"
    ],
    correctIndex: 0,
    explanation: "Detailed incident report with photo evidence and statements is essential for claims and insurance.",
    language: "en"
  },
  {
    question: "What is the dispatcher's role in emergency situations?",
    options: [
      "Coordination, communication with all parties, organizing alternative solutions",
      "Only incident registration",
      "Waiting for final report",
      "Contacting only the client"
    ],
    correctIndex: 0,
    explanation: "The dispatcher is the central coordination hub, communicating with all parties and organizing solutions.",
    language: "en"
  },
  {
    question: "What does 'hot standby' mean in transport emergency context?",
    options: [
      "Backup vehicle/driver ready for immediate deployment",
      "Engine warming up",
      "Perishable cargo",
      "Priority transport"
    ],
    correctIndex: 0,
    explanation: "Hot standby represents backup resources immediately available for emergency situations.",
    language: "en"
  }
];
