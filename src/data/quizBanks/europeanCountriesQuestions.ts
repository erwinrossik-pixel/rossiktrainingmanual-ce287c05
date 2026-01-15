import { QuizQuestion } from '../quizData';

export const europeanCountriesQuestions: QuizQuestion[] = [
  // Romanian Questions (1-16)
  {
    question: "Care este limita de greutate maximă pentru camioane în Germania?",
    options: ["40t", "44t", "38t", "42t"],
    correctIndex: 0,
    explanation: "Germania permite maximum 40t pentru majoritatea transporturilor, cu excepții pentru intermodal.",
    language: "ro"
  },
  {
    question: "Ce taxă de drum este obligatorie în Germania pentru camioane peste 7.5t?",
    options: ["Vigneta", "Maut (taxa pe km)", "Taxa anuală", "Nu există taxă"],
    correctIndex: 1,
    explanation: "Germania folosește sistemul Maut - taxă pe kilometru calculată electronic prin Toll Collect.",
    language: "ro"
  },
  {
    question: "Care sunt restricțiile de weekend în Franța pentru camioane?",
    options: ["Nu există restricții", "Sâmbătă 7-22h și duminică toată ziua", "Doar duminică după-amiază", "Doar noaptea"],
    correctIndex: 1,
    explanation: "Franța restricționează circulația camioanelor sâmbăta și duminica, cu variații sezoniere.",
    language: "ro"
  },
  {
    question: "Ce document special necesită transportul în Elveția?",
    options: ["Doar CMR", "LSVA + 40t permitere specială", "Nimic special", "Doar pașaport"],
    correctIndex: 1,
    explanation: "Elveția necesită taxa LSVA și permis special pentru vehicule peste limitele standard.",
    language: "ro"
  },
  {
    question: "Care țară are cel mai strict control la frontieră post-Brexit?",
    options: ["Franța", "Germania", "Marea Britanie", "Polonia"],
    correctIndex: 2,
    explanation: "Marea Britanie are cele mai stricte controale vamale și de frontieră post-Brexit.",
    language: "ro"
  },
  {
    question: "Ce înseamnă VECTO în contextul UE?",
    options: ["Un tip de vehicul", "Instrument pentru calculul emisiilor CO2 al vehiculelor", "O taxă de drum", "Un standard de calitate"],
    correctIndex: 1,
    explanation: "VECTO este instrumentul UE pentru calculul emisiilor CO2 ale vehiculelor grele.",
    language: "ro"
  },
  {
    question: "Care este coridorul de transport principal între Italia și Germania?",
    options: ["Trafic maritim", "Pasul Brenner", "Tunelul Mont Blanc", "Avion cargo"],
    correctIndex: 1,
    explanation: "Pasul Brenner este coridorul principal de transport rutier între Italia și Germania.",
    language: "ro"
  },
  {
    question: "Ce restricție specială are Austria pentru camioane?",
    options: ["Nu există restricții", "Interdicție de noapte pe autostrada Inntal", "Doar la sfârșit de săptămână", "Taxa foarte mică"],
    correctIndex: 1,
    explanation: "Austria are interdicție de noapte pentru camioane pe autostrada Inntal și restricții sectoriale.",
    language: "ro"
  },
  {
    question: "Ce sistem de taxare folosește Belgia?",
    options: ["Vigneta anuală", "Viapass - taxa pe km", "Fără taxă", "Taxa fixă pe zi"],
    correctIndex: 1,
    explanation: "Belgia folosește Viapass, un sistem de taxare pe kilometru similar cu Germania.",
    language: "ro"
  },
  {
    question: "Care țară nordică permite cele mai grele transporturi (până la 76t)?",
    options: ["Norvegia", "Suedia și Finlanda", "Danemarca", "Islanda"],
    correctIndex: 1,
    explanation: "Suedia și Finlanda permit transporturi de până la 76t pe anumite drumuri.",
    language: "ro"
  },
  // Glossary Questions - Romanian (11-16)
  {
    question: "Ce este sistemul Maut în Germania?",
    options: ["O autostradă", "Sistemul german de taxare pe kilometru pentru camioane", "O stație de benzină", "Un tip de vehicul"],
    correctIndex: 1,
    explanation: "Maut este sistemul german de taxare electronică pe kilometru pentru vehiculele comerciale grele, operat prin Toll Collect.",
    language: "ro"
  },
  {
    question: "Ce înseamnă LEZ (Low Emission Zone)?",
    options: ["Zonă cu emisii scăzute unde vehiculele poluante au restricții", "Zonă cu lumini", "Zonă de livrare", "Zonă de parcare"],
    correctIndex: 0,
    explanation: "LEZ (Low Emission Zone) sunt zone urbane care restricționează accesul vehiculelor cu emisii ridicate pentru a îmbunătăți calitatea aerului.",
    language: "ro"
  },
  {
    question: "Ce este Siesta în contextul transportului în Spania?",
    options: ["O siestă pentru șoferi", "Restricții de circulație în orele de după-amiază", "O pauză obligatorie", "Un festival local"],
    correctIndex: 1,
    explanation: "Siesta se referă la restricțiile de circulație pentru camioane în orele calde de după-amiază din Spania, în special vara.",
    language: "ro"
  },
  {
    question: "Ce înseamnă Cabotaj în transport?",
    options: ["Transport de cablu", "Transport intern efectuat de un transportator străin", "Transport de pasageri", "Transport aerian"],
    correctIndex: 1,
    explanation: "Cabotajul este transportul intern de mărfuri într-o țară efectuat de un transportator înregistrat în altă țară.",
    language: "ro"
  },
  {
    question: "Ce este Via Baltica?",
    options: ["O companie", "Coridorul de transport de la Polonia la țările Baltice", "O mare", "Un port"],
    correctIndex: 1,
    explanation: "Via Baltica este coridorul rutier european care conectează Polonia cu țările Baltice (Lituania, Letonia, Estonia).",
    language: "ro"
  },
  {
    question: "Ce înseamnă Ecotaxă în Franța?",
    options: ["Taxă ecologică pentru vehicule comerciale grele", "Taxă pentru mașini electrice", "Impozit pe venit", "Taxă de parcare"],
    correctIndex: 0,
    explanation: "Ecotaxa este taxa ecologică franceză pentru vehiculele comerciale grele, similară cu Maut-ul german.",
    language: "ro"
  },
  // German Questions (17-32)
  {
    question: "Welche Besonderheit gilt für den Transit durch die Schweiz?",
    options: ["Keine Besonderheiten", "40t-Limit und LSVA-Gebühr (Schwerverkehrsabgabe)", "Gleiche Regeln wie EU", "Nur Euro 6 erlaubt"],
    correctIndex: 1,
    explanation: "Die Schweiz hat ein 40t-Limit und erhebt die LSVA-Gebühr für schwere Fahrzeuge im Transit.",
    language: "de"
  },
  {
    question: "Wie funktioniert die Maut in Tschechien?",
    options: ["Vignette", "Myto - elektronisches Mautsystem", "Keine Maut", "Bargeld an Mautstellen"],
    correctIndex: 1,
    explanation: "Tschechien verwendet das elektronische Myto-System für die km-basierte Maut schwerer Fahrzeuge.",
    language: "de"
  },
  {
    question: "Welche Länder bilden die Benelux-Region?",
    options: ["Belgien, Niederlande, Luxemburg", "Belgien, Frankreich, Deutschland", "Niederlande, Deutschland, Dänemark", "Luxemburg, Frankreich, Schweiz"],
    correctIndex: 0,
    explanation: "Benelux umfasst Belgien, Niederlande und Luxemburg - eine Region mit harmonisierten Regeln.",
    language: "de"
  },
  {
    question: "Was sind die Hauptverkehrsprobleme in den Alpenländern?",
    options: ["Zu viel Sonne", "Bergpässe, Tunnel, Wetterbedingungen, sektorale Fahrverbote", "Zu wenig Verkehr", "Keine Probleme"],
    correctIndex: 1,
    explanation: "Alpenländer haben Herausforderungen durch Pässe, Tunnel, Wetter und sektorale Fahrverbote.",
    language: "de"
  },
  {
    question: "Welche Besonderheit gilt für Spanien bei Sommertransporten?",
    options: ["Keine Besonderheit", "Hitzebedingte Einschränkungen für bestimmte Güter", "Mehr Verkehr erlaubt", "Niedrigere Maut"],
    correctIndex: 1,
    explanation: "Spanien hat sommerliche Einschränkungen für den Transport bestimmter Güter wegen der Hitze.",
    language: "de"
  },
  {
    question: "Was ist das E-Road-Netzwerk?",
    options: ["Elektrostraßen", "Europäische Hauptverkehrsrouten mit E-Nummern", "Eisenbahnstrecken", "Elektronische Mautstraßen"],
    correctIndex: 1,
    explanation: "Das E-Road-Netzwerk ist das europäische System von Hauptstraßen mit E-Nummern.",
    language: "de"
  },
  {
    question: "Welche Dokumente sind für Italien-Transporte besonders wichtig?",
    options: ["Nur CMR", "CMR, Arbeitsnachweis, ggf. Scheda di Trasporto", "Nur Führerschein", "Keine besonderen Dokumente"],
    correctIndex: 1,
    explanation: "Italien kann zusätzliche Dokumente wie Scheda di Trasporto für bestimmte Transporte verlangen.",
    language: "de"
  },
  {
    question: "Was ist beim Transport nach Polen zu beachten?",
    options: ["Keine Besonderheiten", "e-TOLL-System, Kabotage-Regeln, Winterausrüstung", "Gleiche Regeln wie Deutschland", "Keine Maut"],
    correctIndex: 1,
    explanation: "Polen hat das e-TOLL-System, strenge Kabotageregeln und Winterausrüstungsanforderungen.",
    language: "de"
  },
  {
    question: "Welche Länder haben strenge ADR-Tunnel-Kategorien?",
    options: ["Keine", "Frankreich, Italien, Schweiz, Österreich", "Nur Deutschland", "Nur Skandinavien"],
    correctIndex: 1,
    explanation: "Alpenländer haben strenge ADR-Tunnelkategorien, die gefährliche Güter einschränken.",
    language: "de"
  },
  {
    question: "Was sind die Kabotage-Regeln in der EU?",
    options: ["Unbegrenzte Transporte erlaubt", "Max. 3 Transporte in 7 Tagen nach internationalem Transport", "Keine Kabotage erlaubt", "Nur für EU-Spediteure"],
    correctIndex: 1,
    explanation: "Die EU erlaubt maximal 3 Kabotagefahrten in 7 Tagen nach einem internationalen Transport.",
    language: "de"
  },
  // Glossary Questions - German (27-32)
  {
    question: "Was bedeutet 'Brenner Transit' in Österreich?",
    options: ["Ein Feuer", "Transit durch den Brenner-Pass zwischen Österreich und Italien", "Ein Zug", "Eine Grenze"],
    correctIndex: 1,
    explanation: "Brenner Transit bezeichnet den Güterverkehr durch den Brenner-Pass, eine der wichtigsten Alpenrouten zwischen Österreich und Italien.",
    language: "de"
  },
  {
    question: "Was ist die LSVA in der Schweiz?",
    options: ["Eine Versicherung", "Leistungsabhängige Schwerverkehrsabgabe - Maut für schwere Fahrzeuge", "Ein Führerschein", "Eine Zulassung"],
    correctIndex: 1,
    explanation: "LSVA (Leistungsabhängige Schwerverkehrsabgabe) ist die Schweizer Maut für schwere Nutzfahrzeuge, basierend auf Gewicht und Strecke.",
    language: "de"
  },
  {
    question: "Was ist das 'Sektorale Fahrverbot' in Tirol?",
    options: ["Allgemeines Fahrverbot", "Einschränkung für bestimmte Güter zur Verkehrsverlagerung auf Schiene", "Verbot für alle LKW", "Nur nachts"],
    correctIndex: 1,
    explanation: "Das Sektorale Fahrverbot beschränkt den Transport bestimmter Güter in Tirol, um Verkehr auf die Schiene zu verlagern.",
    language: "de"
  },
  {
    question: "Was ist die 'Vignette' in Österreich?",
    options: ["Ein Aufkleber für die Mautentrichtung auf Autobahnen", "Ein Führerschein", "Ein Visum", "Ein Stempel"],
    correctIndex: 0,
    explanation: "Die Vignette ist der Mautaufkleber für die Nutzung österreichischer Autobahnen und Schnellstraßen.",
    language: "de"
  },
  {
    question: "Was bedeutet 'Winterausrüstungspflicht'?",
    options: ["Winterkleidung", "Gesetzliche Pflicht für Winterreifen und Schneeketten", "Heizungspflicht", "Beleuchtungspflicht"],
    correctIndex: 1,
    explanation: "Winterausrüstungspflicht bezeichnet die gesetzliche Pflicht für Winterreifen/Schneeketten in bestimmten Ländern und Zeiträumen.",
    language: "de"
  },
  {
    question: "Was ist das 'Nachtfahrverbot' in Österreich und der Schweiz?",
    options: ["Verbot von Nachtarbeit", "Fahrverbot für LKW während bestimmter Nachtstunden", "Beleuchtungsvorschrift", "Geschwindigkeitsbegrenzung"],
    correctIndex: 1,
    explanation: "Das Nachtfahrverbot untersagt LKW-Fahrten während bestimmter Nachtstunden auf definierten Strecken.",
    language: "de"
  },
  // English Questions (33-48)
  {
    question: "What is the HGV levy in the UK?",
    options: ["A road tax for heavy goods vehicles operating in the UK", "A parking fee", "A customs duty", "An environmental tax only"],
    correctIndex: 0,
    explanation: "HGV levy is a road tax for heavy goods vehicles operating in the UK.",
    language: "en"
  },
  {
    question: "Which country has the most complex posting requirements?",
    options: ["Germany", "France with mandatory declarations via SIPSI", "UK", "Poland"],
    correctIndex: 1,
    explanation: "France has the most complex posting requirements, requiring declarations via SIPSI system.",
    language: "en"
  },
  {
    question: "What is the Eurovignette?",
    options: ["A European visa", "A joint road user charge for certain countries", "A currency", "A driving license"],
    correctIndex: 1,
    explanation: "The Eurovignette is a joint road user charge for certain European countries.",
    language: "en"
  },
  {
    question: "What challenges exist for UK-EU transport post-Brexit?",
    options: ["No challenges", "Customs declarations, health certificates, driving permits", "Only visa requirements", "Just longer routes"],
    correctIndex: 1,
    explanation: "Post-Brexit, UK-EU transport requires customs declarations, health certificates and permits.",
    language: "en"
  },
  {
    question: "What is the Green Card system?",
    options: ["An environmental permit", "International motor insurance proof recognized across borders", "A visa for drivers", "A toll card"],
    correctIndex: 1,
    explanation: "The Green Card is proof of international motor insurance recognized at borders.",
    language: "en"
  },
  {
    question: "Which Scandinavian countries allow the longest combinations?",
    options: ["Only Norway", "Sweden and Finland up to 25.25m", "Denmark only", "All equally"],
    correctIndex: 1,
    explanation: "Sweden and Finland allow vehicle combinations up to 25.25m in length.",
    language: "en"
  },
  {
    question: "What is required for transport through the Mont Blanc tunnel?",
    options: ["Nothing special", "Pre-registration, safety equipment, ADR restrictions", "Only payment", "Just a valid license"],
    correctIndex: 1,
    explanation: "Mont Blanc tunnel requires pre-registration, safety equipment and ADR restrictions.",
    language: "en"
  },
  {
    question: "What is the ECMT permit?",
    options: ["A European currency", "A permit for road transport between ECMT member countries", "An environmental certificate", "A driver training permit"],
    correctIndex: 1,
    explanation: "The ECMT permit allows road transport between ECMT member countries.",
    language: "en"
  },
  {
    question: "Which countries share the Via Carpatia corridor?",
    options: ["Western European countries", "Lithuania, Poland, Slovakia, Hungary, Romania, Bulgaria, Greece", "Only Scandinavian countries", "UK and Ireland"],
    correctIndex: 1,
    explanation: "Via Carpatia connects Lithuania, Poland, Slovakia, Hungary, Romania, Bulgaria and Greece.",
    language: "en"
  },
  {
    question: "What is the main difference in transport regulations between Southern and Northern Europe?",
    options: ["No difference", "Southern Europe: more heat restrictions, Northern: more winter equipment requirements", "Northern Europe is stricter overall", "Southern Europe has no regulations"],
    correctIndex: 1,
    explanation: "Southern Europe has heat restrictions, Northern Europe has winter equipment requirements.",
    language: "en"
  },
  // Glossary Questions - English (43-48)
  {
    question: "What is the GMR (Goods Movement Reference) for UK transport?",
    options: ["A vehicle type", "Reference number for goods moving between UK and EU post-Brexit", "A fuel type", "A driver license"],
    correctIndex: 1,
    explanation: "GMR is the reference number required for goods movements between UK and EU after Brexit, linking customs declarations.",
    language: "en"
  },
  {
    question: "What is the Eurovignette system?",
    options: ["A European visa", "Joint road user charge for certain EU countries", "A currency", "A speed limit"],
    correctIndex: 1,
    explanation: "Eurovignette is a joint road user charge applied by certain EU countries (Belgium, Denmark, Luxembourg, Netherlands, Sweden) for HGVs.",
    language: "en"
  },
  {
    question: "What is RoLa (Rollende Landstraße) service in Austria?",
    options: ["A highway", "Accompanied combined transport of trucks on rail through Alps", "A toll road", "A ferry service"],
    correctIndex: 1,
    explanation: "RoLa is the Austrian/German service where complete trucks with drivers are transported on special rail wagons through Alpine tunnels.",
    language: "en"
  },
  {
    question: "What is the TEN-T Network?",
    options: ["A telephone network", "Trans-European Transport Network of priority infrastructure", "Television network", "Tech network"],
    correctIndex: 1,
    explanation: "TEN-T (Trans-European Transport Network) is the EU's priority network of roads, railways, airports and ports.",
    language: "en"
  },
  {
    question: "What is an ECMT Permit used for?",
    options: ["European permit for road haulage between ECMT member countries", "Emergency transport", "Customs clearance", "Driver licensing"],
    correctIndex: 0,
    explanation: "ECMT Permits allow road haulage between European Conference of Ministers of Transport member countries.",
    language: "en"
  },
  {
    question: "What is the 'Posting Directive' in EU transport?",
    options: ["Mail regulations", "Rules for temporary worker deployment in other EU countries", "Border posting", "Social media policy"],
    correctIndex: 1,
    explanation: "The Posting Directive regulates conditions for workers temporarily posted to work in other EU member states.",
    language: "en"
  }
];
