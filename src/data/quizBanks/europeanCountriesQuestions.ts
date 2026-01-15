import { QuizQuestion } from '../quizData';

export const europeanCountriesQuestions: QuizQuestion[] = [
  // Romanian Questions (1-10)
  {
    question: "Care este limita de greutate maximă pentru camioane în Germania?",
    options: ["40t", "44t", "38t", "42t"],
    correctIndex: 0,
    explanation: "Germania permite maximum 40t pentru majoritatea transporturilor, cu excepții pentru intermodal."
  },
  {
    question: "Ce taxă de drum este obligatorie în Germania pentru camioane peste 7.5t?",
    options: ["Vigneta", "Maut (taxa pe km)", "Taxa anuală", "Nu există taxă"],
    correctIndex: 1,
    explanation: "Germania folosește sistemul Maut - taxă pe kilometru calculată electronic prin Toll Collect."
  },
  {
    question: "Care sunt restricțiile de weekend în Franța pentru camioane?",
    options: ["Nu există restricții", "Sâmbătă 7-22h și duminică toată ziua", "Doar duminică după-amiază", "Doar noaptea"],
    correctIndex: 1,
    explanation: "Franța restricționează circulația camioanelor sâmbăta și duminica, cu variații sezoniere."
  },
  {
    question: "Ce document special necesită transportul în Elveția?",
    options: ["Doar CMR", "LSVA + 40t permitere specială", "Nimic special", "Doar pașaport"],
    correctIndex: 1,
    explanation: "Elveția necesită taxa LSVA și permis special pentru vehicule peste limitele standard."
  },
  {
    question: "Care țară are cel mai strict control la frontieră post-Brexit?",
    options: ["Franța", "Germania", "Marea Britanie", "Polonia"],
    correctIndex: 2,
    explanation: "Marea Britanie are cele mai stricte controale vamale și de frontieră post-Brexit."
  },
  {
    question: "Ce înseamnă VECTO în contextul UE?",
    options: ["Un tip de vehicul", "Instrument pentru calculul emisiilor CO2 al vehiculelor", "O taxă de drum", "Un standard de calitate"],
    correctIndex: 1,
    explanation: "VECTO este instrumentul UE pentru calculul emisiilor CO2 ale vehiculelor grele."
  },
  {
    question: "Care este coridorul de transport principal între Italia și Germania?",
    options: ["Trafic maritim", "Pasul Brenner", "Tunelul Mont Blanc", "Avion cargo"],
    correctIndex: 1,
    explanation: "Pasul Brenner este coridorul principal de transport rutier între Italia și Germania."
  },
  {
    question: "Ce restricție specială are Austria pentru camioane?",
    options: ["Nu există restricții", "Interdicție de noapte pe autostrada Inntal", "Doar la sfârșit de săptămână", "Taxa foarte mică"],
    correctIndex: 1,
    explanation: "Austria are interdicție de noapte pentru camioane pe autostrada Inntal și restricții sectoriale."
  },
  {
    question: "Ce sistem de taxare folosește Belgia?",
    options: ["Vigneta anuală", "Viapass - taxa pe km", "Fără taxă", "Taxa fixă pe zi"],
    correctIndex: 1,
    explanation: "Belgia folosește Viapass, un sistem de taxare pe kilometru similar cu Germania."
  },
  {
    question: "Care țară nordică permite cele mai grele transporturi (până la 76t)?",
    options: ["Norvegia", "Suedia și Finlanda", "Danemarca", "Islanda"],
    correctIndex: 1,
    explanation: "Suedia și Finlanda permit transporturi de până la 76t pe anumite drumuri."
  },
  // German Questions (11-20)
  {
    question: "Welche Besonderheit gilt für den Transit durch die Schweiz?",
    options: ["Keine Besonderheiten", "40t-Limit und LSVA-Gebühr (Schwerverkehrsabgabe)", "Gleiche Regeln wie EU", "Nur Euro 6 erlaubt"],
    correctIndex: 1,
    explanation: "Die Schweiz hat ein 40t-Limit und erhebt die LSVA-Gebühr für schwere Fahrzeuge im Transit."
  },
  {
    question: "Wie funktioniert die Maut in Tschechien?",
    options: ["Vignette", "Myto - elektronisches Mautsystem", "Keine Maut", "Bargeld an Mautstellen"],
    correctIndex: 1,
    explanation: "Tschechien verwendet das elektronische Myto-System für die km-basierte Maut schwerer Fahrzeuge."
  },
  {
    question: "Welche Länder bilden die Benelux-Region?",
    options: ["Belgien, Niederlande, Luxemburg", "Belgien, Frankreich, Deutschland", "Niederlande, Deutschland, Dänemark", "Luxemburg, Frankreich, Schweiz"],
    correctIndex: 0,
    explanation: "Benelux umfasst Belgien, Niederlande und Luxemburg - eine Region mit harmonisierten Regeln."
  },
  {
    question: "Was sind die Hauptverkehrsprobleme in den Alpenländern?",
    options: ["Zu viel Sonne", "Bergpässe, Tunnel, Wetterbedingungen, sektorale Fahrverbote", "Zu wenig Verkehr", "Keine Probleme"],
    correctIndex: 1,
    explanation: "Alpenländer haben Herausforderungen durch Pässe, Tunnel, Wetter und sektorale Fahrverbote."
  },
  {
    question: "Welche Besonderheit gilt für Spanien bei Sommertransporten?",
    options: ["Keine Besonderheit", "Hitzebedingte Einschränkungen für bestimmte Güter", "Mehr Verkehr erlaubt", "Niedrigere Maut"],
    correctIndex: 1,
    explanation: "Spanien hat sommerliche Einschränkungen für den Transport bestimmter Güter wegen der Hitze."
  },
  {
    question: "Was ist das E-Road-Netzwerk?",
    options: ["Elektrostraßen", "Europäische Hauptverkehrsrouten mit E-Nummern", "Eisenbahnstrecken", "Elektronische Mautstraßen"],
    correctIndex: 1,
    explanation: "Das E-Road-Netzwerk ist das europäische System von Hauptstraßen mit E-Nummern."
  },
  {
    question: "Welche Dokumente sind für Italien-Transporte besonders wichtig?",
    options: ["Nur CMR", "CMR, Arbeitsnachweis, ggf. Scheda di Trasporto", "Nur Führerschein", "Keine besonderen Dokumente"],
    correctIndex: 1,
    explanation: "Italien kann zusätzliche Dokumente wie Scheda di Trasporto für bestimmte Transporte verlangen."
  },
  {
    question: "Was ist beim Transport nach Polen zu beachten?",
    options: ["Keine Besonderheiten", "e-TOLL-System, Kabotage-Regeln, Winterausrüstung", "Gleiche Regeln wie Deutschland", "Keine Maut"],
    correctIndex: 1,
    explanation: "Polen hat das e-TOLL-System, strenge Kabotageregeln und Winterausrüstungsanforderungen."
  },
  {
    question: "Welche Länder haben strenge ADR-Tunnel-Kategorien?",
    options: ["Keine", "Frankreich, Italien, Schweiz, Österreich", "Nur Deutschland", "Nur Skandinavien"],
    correctIndex: 1,
    explanation: "Alpenländer haben strenge ADR-Tunnelkategorien, die gefährliche Güter einschränken."
  },
  {
    question: "Was sind die Kabotage-Regeln in der EU?",
    options: ["Unbegrenzte Transporte erlaubt", "Max. 3 Transporte in 7 Tagen nach internationalem Transport", "Keine Kabotage erlaubt", "Nur für EU-Spediteure"],
    correctIndex: 1,
    explanation: "Die EU erlaubt maximal 3 Kabotagefahrten in 7 Tagen nach einem internationalen Transport."
  },
  // English Questions (21-30)
  {
    question: "What is the HGV levy in the UK?",
    options: ["A road tax for heavy goods vehicles operating in the UK", "A parking fee", "A customs duty", "An environmental tax only"],
    correctIndex: 0,
    explanation: "HGV levy is a road tax for heavy goods vehicles operating in the UK."
  },
  {
    question: "Which country has the most complex posting requirements?",
    options: ["Germany", "France with mandatory declarations via SIPSI", "UK", "Poland"],
    correctIndex: 1,
    explanation: "France has the most complex posting requirements, requiring declarations via SIPSI system."
  },
  {
    question: "What is the Eurovignette?",
    options: ["A European visa", "A joint road user charge for certain countries", "A currency", "A driving license"],
    correctIndex: 1,
    explanation: "The Eurovignette is a joint road user charge for certain European countries."
  },
  {
    question: "What challenges exist for UK-EU transport post-Brexit?",
    options: ["No challenges", "Customs declarations, health certificates, driving permits", "Only visa requirements", "Just longer routes"],
    correctIndex: 1,
    explanation: "Post-Brexit, UK-EU transport requires customs declarations, health certificates and permits."
  },
  {
    question: "What is the Green Card system?",
    options: ["An environmental permit", "International motor insurance proof recognized across borders", "A visa for drivers", "A toll card"],
    correctIndex: 1,
    explanation: "The Green Card is proof of international motor insurance recognized at borders."
  },
  {
    question: "Which Scandinavian countries allow the longest combinations?",
    options: ["Only Norway", "Sweden and Finland up to 25.25m", "Denmark only", "All equally"],
    correctIndex: 1,
    explanation: "Sweden and Finland allow vehicle combinations up to 25.25m in length."
  },
  {
    question: "What is required for transport through the Mont Blanc tunnel?",
    options: ["Nothing special", "Pre-registration, safety equipment, ADR restrictions", "Only payment", "Just a valid license"],
    correctIndex: 1,
    explanation: "Mont Blanc tunnel requires pre-registration, safety equipment and ADR restrictions."
  },
  {
    question: "What is the ECMT permit?",
    options: ["A European currency", "A permit for road transport between ECMT member countries", "An environmental certificate", "A driver training permit"],
    correctIndex: 1,
    explanation: "The ECMT permit allows road transport between ECMT member countries."
  },
  {
    question: "Which countries share the Via Carpatia corridor?",
    options: ["Western European countries", "Lithuania, Poland, Slovakia, Hungary, Romania, Bulgaria, Greece", "Only Scandinavian countries", "UK and Ireland"],
    correctIndex: 1,
    explanation: "Via Carpatia connects Lithuania, Poland, Slovakia, Hungary, Romania, Bulgaria and Greece."
  },
  {
    question: "What is the main difference in transport regulations between Southern and Northern Europe?",
    options: ["No difference", "Southern Europe: more heat restrictions, Northern: more winter equipment requirements", "Northern Europe is stricter overall", "Southern Europe has no regulations"],
    correctIndex: 1,
    explanation: "Southern Europe has heat restrictions, Northern Europe has winter equipment requirements."
  },
  // Glossary Questions - Romanian (31-33)
  {
    question: "Ce este sistemul Maut în Germania?",
    options: ["O autostradă", "Sistemul german de taxare pe kilometru pentru camioane", "O stație de benzină", "Un tip de vehicul"],
    correctIndex: 1,
    explanation: "Maut este sistemul german de taxare electronică pe kilometru pentru vehiculele comerciale grele, operat prin Toll Collect."
  },
  {
    question: "Ce înseamnă LEZ (Low Emission Zone)?",
    options: ["Zonă cu emisii scăzute unde vehiculele poluante au restricții", "Zonă cu lumini", "Zonă de livrare", "Zonă de parcare"],
    correctIndex: 0,
    explanation: "LEZ (Low Emission Zone) sunt zone urbane care restricționează accesul vehiculelor cu emisii ridicate pentru a îmbunătăți calitatea aerului."
  },
  {
    question: "Ce este Siesta în contextul transportului în Spania?",
    options: ["O siestă pentru șoferi", "Restricții de circulație în orele de după-amiază", "O pauză obligatorie", "Un festival local"],
    correctIndex: 1,
    explanation: "Siesta se referă la restricțiile de circulație pentru camioane în orele calde de după-amiază din Spania, în special vara."
  },
  // Glossary Questions - German (34-36)
  {
    question: "Was bedeutet 'Brenner Transit' in Österreich?",
    options: ["Ein Feuer", "Transit durch den Brenner-Pass zwischen Österreich und Italien", "Ein Zug", "Eine Grenze"],
    correctIndex: 1,
    explanation: "Brenner Transit bezeichnet den Güterverkehr durch den Brenner-Pass, eine der wichtigsten Alpenrouten zwischen Österreich und Italien."
  },
  {
    question: "Was ist die LSVA in der Schweiz?",
    options: ["Eine Versicherung", "Leistungsabhängige Schwerverkehrsabgabe - Maut für schwere Fahrzeuge", "Ein Führerschein", "Eine Zulassung"],
    correctIndex: 1,
    explanation: "LSVA (Leistungsabhängige Schwerverkehrsabgabe) ist die Schweizer Maut für schwere Nutzfahrzeuge, basierend auf Gewicht und Strecke."
  },
  {
    question: "Was ist das 'Sektorale Fahrverbot' in Tirol?",
    options: ["Allgemeines Fahrverbot", "Einschränkung für bestimmte Güter zur Verkehrsverlagerung auf Schiene", "Verbot für alle LKW", "Nur nachts"],
    correctIndex: 1,
    explanation: "Das Sektorale Fahrverbot beschränkt den Transport bestimmter Güter in Tirol, um Verkehr auf die Schiene zu verlagern."
  },
  // Glossary Questions - English (37-39)
  {
    question: "What is the GMR (Goods Movement Reference) for UK transport?",
    options: ["A vehicle type", "Reference number for goods moving between UK and EU post-Brexit", "A fuel type", "A driver license"],
    correctIndex: 1,
    explanation: "GMR is the reference number required for goods movements between UK and EU after Brexit, linking customs declarations."
  },
  {
    question: "What is the Eurovignette system?",
    options: ["A European visa", "Joint road user charge for certain EU countries", "A currency", "A speed limit"],
    correctIndex: 1,
    explanation: "Eurovignette is a joint road user charge applied by certain EU countries (Belgium, Denmark, Luxembourg, Netherlands, Sweden) for HGVs."
  },
  {
    question: "What is RoLa (Rollende Landstraße) service in Austria?",
    options: ["A highway", "Accompanied combined transport of trucks on rail through Alps", "A toll road", "A ferry service"],
    correctIndex: 1,
    explanation: "RoLa is the Austrian/German service where complete trucks with drivers are transported on special rail wagons through Alpine tunnels."
  }
];
