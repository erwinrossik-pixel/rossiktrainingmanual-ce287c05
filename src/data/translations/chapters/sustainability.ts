export const sustainabilityTranslations = {
  ro: {
    chapterTitle: "Sustenabilitate în Transport",
    heroDescription: "Calcularea amprentei de carbon, certificări verzi, ETS și strategii de reducere a emisiilor în logistică.",
    intro: "Sustenabilitatea a devenit un criteriu decisiv în selecția furnizorilor de transport. Clienții majori solicită raportări CO2 detaliate, certificate de neutralitate climatică, și planuri concrete de reducere a emisiilor. Companiile care nu se adaptează pierd contracte și competitivitate. Acest capitol oferă cunoștințele practice pentru a răspunde cerințelor de sustenabilitate.",

    // Secțiunea 1: Impactul Transportului
    section1Title: "Impactul Transportului asupra Mediului",
    section1Content: "Transportul rutier de marfă generează aproximativ 6% din emisiile totale de CO2 ale UE și 27% din emisiile din transport. Un camion Euro 6 emite în medie 60-80g CO2/tonă-km, față de 18-22g pentru tren și 10-16g pentru transport maritim.",
    section1Detail1: "Analiza Well-to-Wheel (WTW) vs. Tank-to-Wheel (TTW): WTW include producția și transportul combustibilului plus arderea. TTW măsoară doar emisiile directe din ardere. Pentru comparații corecte, folosește aceeași metodologie. WTW adaugă +15-25% la cifre vs. TTW.",
    section1Detail2: "Cele mai mari contribuții la emisii: Combustibilul diesel (95%+), fabricarea vehiculelor (~3%), întreținerea și piesele de schimb (~1%), și infrastructura (șosele, depouri) (~1%). Reducerea consumului de combustibil are cel mai mare impact.",
    section1Detail3: "Factori de influență asupra emisiilor: Tipul vehiculului (Euro 5 vs. Euro 6: diferență 10-15%), gradul de încărcare (FTL vs. LTL poate dubla emisiile/tonă), profilul rutei (munte vs. câmpie: +20-30%), stilul de condus (eco-driving: -10-15%), și tipul de combustibil.",
    section1Detail4: "Emisii specifice per tip de vehicul: Sprinter 3.5t: 150-200g/tonă-km, Camion 7.5t: 120-150g/tonă-km, Camion 12t: 90-120g/tonă-km, Camion 40t FTL: 60-80g/tonă-km, Megatrailer: 50-70g/tonă-km (cel mai eficient rutier).",

    // Secțiunea 2: Calcularea Amprentei de Carbon
    section2Title: "Calcularea Amprentei de Carbon",
    section2Content: "Metodologia GLEC (Global Logistics Emissions Council) este standardul internațional acceptat de mari clienți și pentru raportări oficiale.",
    section2Detail1: "Formula GLEC de bază: Emisii CO2 = Factor de emisie × Distanță × Greutate marfă / Factor de încărcare. Exemplu: 62g × 1000km × 10t / 0.85 = 729kg CO2 pentru un transport FTL parțial încărcat.",
    section2Detail2: "Factori de emisie standard (g CO2/tonă-km, bazați pe GLEC Framework 2.0): Camion Euro 6 FTL = 62g, LTL = 95g, Groupage = 110g, Tren = 18g, Maritim container = 16g, Aerian = 602g. Intermodal rutier-feroviar = 28g.",
    section2Detail3: "Software-uri de calcul CO2: EcoTransIT World (gratuit, www.ecotransit.org, bazat pe GLEC), Smart Freight Centre Calculator, module integrate în TMS-uri (Transporeon, Sixfold), și platforme specializate (Climatiq, Normative).",
    section2Detail4: "Scope 3 reporting explicat: Pentru majoritatea clienților, emisiile din transport sunt 'Scope 3' (lanț de aprovizionare), nu Scope 1 (operațiuni directe). Aceasta înseamnă că depind de furnizori (noi) pentru date precise. Calitatea datelor noastre afectează direct raportările lor ESG.",
    section2Detail5: "Precizie vs. estimări: Nivelul 1 (de bază): estimări bazate pe distanță și tip vehicul. Nivelul 2 (îmbunătățit): date specifice de consum combustibil per vehicul. Nivelul 3 (avansat): telematică real-time cu date GPS și OBD. Clienții mari preferă nivelul 2 sau 3.",

    // Secțiunea 3: EU ETS
    section3Title: "EU ETS și Impactul asupra Transportului",
    section3Content: "Sistemul de comercializare a certificatelor de emisii (ETS) se extinde la transportul rutier din 2027 (ETS2). Aceasta va schimba fundamental economia transportului.",
    section3Detail1: "Cum funcționează ETS2: Furnizorii de combustibil (rafinării, distribuitori) cumpără certificate pentru emisiile generate de combustibilul vândut. Costul se transferă în prețul combustibilului. Numărul de certificate disponibile scade anual, crescând prețul.",
    section3Detail2: "Impact financiar estimat: 2027: +€0.10-0.15/litru diesel (la preț certificat €50/tonă CO2). 2030: +€0.20-0.30/litru (preț estimat €100-150/tonă). 2035+: +€0.40-0.60/litru (scenarii €200-300/tonă). Pentru 100.000 litri/an = +€10.000-60.000 costuri anuale.",
    section3Detail3: "Impactul asupra competitivității modale: Feroviarul (deja în ETS cu certificate gratuite parțiale) devine relativ mai competitiv. Maritimul (ETS din 2024 pentru maritime) și rutierul converg. Intermodalul câștigă avantaj economic, nu doar de imagine.",
    section3Detail4: "Pregătire pentru ETS2: Monitorizează prețul certificatelor EUA pe piețe (ICE, EEX). Incluede scenarii de cost carbon în pricing pe termen lung. Comunică transparent clienților componenta ETS în tarife. Accelerează tranziția către combustibili alternativi și modal shift.",

    // Secțiunea 4: Certificări Verzi
    section4Title: "Certificări și Standarde Verzi",
    section4Content: "Certificările demonstrează angajamentul față de sustenabilitate și sunt adesea condiții de calificare în licitații.",
    section4Detail1: "ISO 14001 (Sistem de Management de Mediu): Standard internațional pentru politici și proceduri de mediu. Cerințe: politică de mediu, identificare aspecte/impacturi, obiective și ținte, monitoring și audit intern. Audit extern anual. Cost: €5.000-15.000 implementare, €2.000-5.000/an mentenanță.",
    section4Detail2: "Lean & Green (European Logistics): Program specific logisticii cu 5 niveluri (1-5 stele). 1 stea = plan de reducere 20% în 5 ani. 3 stele = reducere realizată + continuare. 5 stele = best-in-class, zero emisii nete. Recunoscut de mari retaileri și producători europeni. Proces: diagnostic, plan, validare, monitorizare anuală.",
    section4Detail3: "Science Based Targets initiative (SBTi): Obiective de reducere aliniate cu Acordul de la Paris (1.5°C). Validare științifică a țintelor. Cerință pentru mulți investitori ESG. Proces: commitment, dezvoltare target, validare SBTi (6-12 luni), raportare anuală.",
    section4Detail4: "Alte certificări relevante: EMAS (UE, mai strict decât ISO 14001), FORS (UK, standard flotă), SmartWay (SUA, EPA), EcoVadis (rating ESG furnizori - foarte cerut în supply chain), CDP (Climate Disclosure Project - raportare emisii).",
    section4Detail5: "Recomandare pentru freight forwarderi: Start cu ISO 14001 (fundament), apoi Lean & Green (specific logistică, vizibilitate în industrie). EcoVadis pentru clienți multinationali. SBTi pentru poziționare premium.",

    // Secțiunea 5: Strategii de Reducere
    section5Title: "Strategii de Reducere a Emisiilor",
    section5Content: "Reducerea emisiilor se realizează prin optimizare operațională, investiții în flotă, și shift modal. Prioritizează acțiunile cu cel mai bun raport impact/efort.",
    section5Detail1: "Optimizare operațională (impact imediat, cost redus): Creșterea ratei de încărcare de la 75% la 85% = -12% emisii/tonă. Consolidare LTL în grupaje = -20-30% vs. LTL pur. Reducerea km gol (return loads) de la 25% la 15% = -10% emisii totale. Planificare rute inteligentă (evitare trafic, munte) = -5-10%.",
    section5Detail2: "Eco-driving și comportament: Training șoferi în tehnici eco-driving: -10-15% consum. Monitorizare telematică cu feedback în timp real. Sisteme de gamification și bonusuri pentru șoferi eficienți. Limitare viteză (80-85 km/h vs. 90 km/h) = -8-12% consum. Predictive cruise control pe camioane moderne.",
    section5Detail3: "Investiții în flotă (impact mediu, cost moderat): Upgrade de la Euro 5 la Euro 6d = -10-15% emisii. Aerodinamică: spoilere cabină, side skirts, boat tails = -5-10%. Pneuri low rolling resistance = -3-5%. Vehicule mai noi și mai eficiente în general.",
    section5Detail4: "Shift modal (impact major): Feroviar pentru distanțe >600km = -70% emisii vs. rutier. Short sea shipping pentru rute costiere/insulare = -75%. Intermodal combinat (rutier+feroviar) = -50-60%. Fluvial pentru mărfuri bulk pe coridoare (Rin, Dunăre) = -80%.",
    section5Detail5: "Matricea prioritizare: Prioritate 1 (imediat): încărcare, eco-driving, km gol. Prioritate 2 (6-12 luni): upgrade flotă, telematică. Prioritate 3 (1-3 ani): shift modal, combustibili alternativi. Prioritate 4 (3-5 ani): electrificare, hidrogen.",

    // Secțiunea 6: Combustibili Alternativi
    section6Title: "Combustibili Alternativi și Tehnologii",
    section6Content: "Diversificarea combustibililor reduce dependența de diesel și pregătește pentru reglementări mai stricte.",
    section6Detail1: "LNG (Gaz Natural Lichefiat): Reducere emisii: -15-20% CO2 vs. diesel. Disponibilitate: bună pe coridoare majore (300+ stații UE). Preț: similar diesel, uneori mai ieftin. Autonomie: 1.200-1.500km. Potrivit pentru: long-haul internațional pe rute cu infrastructură. Dezavantaje: investiție inițială vehicul +€30-50.000, emite metan (GWP ridicat).",
    section6Detail2: "HVO (Hydrotreated Vegetable Oil / Renewable Diesel): Reducere emisii: -85-90% CO2 (WTW, dacă produs sustenabil). Compatibilitate: drop-in, funcționează în orice motor diesel fără modificări. Disponibilitate: limitată, în creștere, majoritatea la pompă în Scandinavia. Preț: premium +30-50% vs. diesel. Potrivit pentru: clienți premium care cer zero-carbon, flote existente fără investiție în vehicule.",
    section6Detail3: "Biodiesel (B100, B30, B7): Reducere emisii: B100 = -50-80% CO2, B30 = -15-25%. Compatibilitate: B7 universal, B30 necesită aprobare producător, B100 necesită modificări. Probleme: performanță la frig, degradare în timp, probleme de calitate variabilă. Utilizare: B7 standard în multe țări UE, B30+ pentru flote dedicate cu contract de aprovizionare.",
    section6Detail4: "Electric (BEV - Battery Electric Vehicles): Reducere emisii: -100% directe (0 dacă folosești energie verde). Autonomie actuală: 200-400km (crescând la 500km+ în 2025). Timp încărcare: 1-4 ore (DC fast charging). Potrivit pentru: last-mile urban, distribuție regională, distanțe fixe și previzibile. Limitări: greutate baterie reduce payload, infrastructură insuficientă pentru long-haul. Investiție: +100-150% vs. diesel, dar TCO competitiv pe 5+ ani cu energie ieftină.",
    section6Detail5: "Hidrogen (FCEV - Fuel Cell Electric Vehicles): Reducere emisii: -100% (0 cu hidrogen verde). Autonomie: 800-1.200km, similar diesel. Timp alimentare: 15-20 minute, similar diesel. Disponibilitate: experimentală, <50 stații în UE. Potrivit pentru: long-haul în viitor (2028+). Status: Hyundai XCIENT, Nikola Tre FCEV, Daimler GenH2 în teste. Recomandare: monitorizează dezvoltarea, nu investi încă.",

    // Secțiunea 7: Raportarea Sustenabilității
    section7Title: "Raportarea Sustenabilității",
    section7Content: "Raportarea structurată a emisiilor devine obligatorie și este cerută de clienți, investitori și autorități.",
    section7Detail1: "GHG Protocol - structura Scope: Scope 1 = emisii directe (combustibil în vehicule proprii). Scope 2 = emisii indirecte din energie (electricitate, încălzire). Scope 3 = emisii din lanțul de valoare (transportatori terți, supply chain). Pentru freight forwarderi: Scope 1 minimal (vehicule proprii, dacă există), Scope 3 major (transportatori parteneri).",
    section7Detail2: "CSRD (Corporate Sustainability Reporting Directive): Obligatorie pentru companii UE mari din 2024, extinzându-se. Cine: >250 angajați SAU >€40M cifră de afaceri SAU >€20M active. Include dubla materialitate (impact asupra companiei ȘI impact asupra mediului). Raportare anuală auditată, în conformitate cu ESRS (European Sustainability Reporting Standards).",
    section7Detail3: "Ce să raportezi pentru clienți: Emisii totale per perioadă (tCO2e), intensitatea emisiilor (g CO2/tonă-km sau per shipment), breakdown pe mod de transport, trend YoY și progres vs. obiective, și certificări/acreditări deținute.",
    section7Detail4: "Format raport per transport: ID transport, origine-destinație, distanță, greutate, mod transport, tip vehicul/Euro standard, combustibil, factor de emisie utilizat, emisii calculate (kg CO2), și opțiune de offset. Automatizează în TMS pentru eficiență.",
    section7Detail5: "Best practices raportare: Raport anual de sustenabilitate (chiar dacă nu obligatoriu). Dashboard pentru clienți cu emisii cumulate. Transparency în metodologie (GLEC, sursa datelor). Obiective publice și progres. Participare CDP pentru vizibilitate instituțională.",

    // Secțiunea 8: Carbon Offsetting
    section8Title: "Compensarea Emisiilor (Carbon Offsetting)",
    section8Content: "Offsetting-ul permite neutralizarea emisiilor reziduale, dar nu înlocuiește reducerea reală. Folosește-l ca măsură complementară, nu primară.",
    section8Detail1: "Principiul offsetting-ului: Finanțezi proiecte care captează sau evită emisii echivalente cu cele proprii. 1 tonă CO2 emisă = 1 credit de carbon cumpărat din proiect certificat. Rezultat: neutralitate pe hârtie (dar atmosfera tot a primit CO2-ul tău).",
    section8Detail2: "Tipuri de proiecte offset: Nature-based: Reîmpădurire (€5-20/tCO2), protecție păduri REDD+ (€10-30/tCO2), restaurare mangrove (€15-40/tCO2). Technology-based: Energie regenerabilă în țări în dezvoltare (€3-15/tCO2), captare metan din deșeuri (€8-25/tCO2), sobe eficiente Africa (€5-15/tCO2). Carbon capture: Direct Air Capture - DAC (€200-600/tCO2) - cel mai 'curat' dar foarte scump.",
    section8Detail3: "Standarde de calitate offset: Gold Standard (cel mai strict, co-beneficii sociale demonstrate). Verified Carbon Standard - VCS/Verra (cel mai mare volum, riguros). Climate Action Reserve (SUA, forestry). American Carbon Registry. Plan Vivo (community forestry). Evită: credite fără certificare recunoscută, proiecte cu additionality dubioasă.",
    section8Detail4: "Procesul de offset pentru clienți: 1) Calculează emisiile per transport (GLEC). 2) Oferă opțiunea de offset (+€X per transport sau per tCO2). 3) Achiziționează credite certificate la volum cumulat. 4) Furnizează certificat de offset per transport sau agregat. 5) Retrage creditele în registru (evită dubla contabilizare).",
    section8Detail5: "Critici și limitări valide: Multe proiecte ar fi existat oricum (non-additionality). Permanență îndoielnică (pădurea poate arde). Carbon accounting inconsistent între standarde. Greenwashing când offsetting-ul înlocuiește reducerea. Recomandare: 80% efort pe reducere, 20% offset pentru restul. Preferă proiecte Gold Standard sau DAC.",

    // Secțiunea 9: Cerințele Clienților
    section9Title: "Cerințele Clienților și Licitațiile",
    section9Content: "Sustenabilitatea a devenit criteriu de calificare în majoritatea licitațiilor mari. Pregătirea anticipată este esențială.",
    section9Detail1: "Tendințe în RFPs (cereri de ofertă): 70%+ din licitațiile companiilor mari includ criterii de sustenabilitate. Ponderi tipice: 10-30% din scorul total. Unele sunt 'gate' (eliminatorii) - fără certificare = descalificare. Sectoare cu cerințe stricte: FMCG, retail, automotive, pharma, tech.",
    section9Detail2: "Cerințe tipice în licitații: Calcul și raportare CO2 per transport (obligatoriu). Flotă minim Euro 6 (sau Euro 5 cu plan de upgrade). Certificare ISO 14001 sau echivalent (frecvent obligatorie). Obiective de reducere emisii pe 3-5 ani. Raportare periodică (lunară/trimestrială) a emisiilor. Opțiuni verzi (feroviar, LNG, HVO) disponibile.",
    section9Detail3: "Cum să răspunzi efectiv: Secțiune dedicată sustenabilității în ofertă. Prezintă clar capabilitățile actuale și planul de dezvoltare. Oferă opțiuni: Standard, Green (feroviar/LNG), Premium Green (HVO/offset). Include calculul de emisii pentru volumele specifice din licitație. Arată trend-ul și obiectivele tale pe 3-5 ani.",
    section9Detail4: "Pricing pentru opțiuni verzi: LNG: +2-5% vs. diesel (variabil cu prețul gazului). HVO: +15-25% vs. diesel (funcție de disponibilitate). Feroviar/intermodal: 0% până la -10% (poate fi mai ieftin pentru distanțe lungi!). Offset: +€2-10 per transport (funcție de distanță și greutate). Comunică transparent structura de preț.",
    section9Detail5: "Diferențiere competitivă: Sustenabilitatea nu mai e 'nice to have' - e table stakes. Companiile fără strategie clară pierd licitații. Cele cu capabilități superioare câștigă contracte și pot justifica premium. First-mover advantage în tranziția verde atrage clienți lideri.",

    // Secțiunea 10: Viitorul Sustenabil
    section10Title: "Viitorul Sustenabil al Logisticii",
    section10Content: "Reglementările UE și tendințele pieței accelerează tranziția verde. Pregătirea strategică acum asigură competitivitate pe termen lung.",
    section10Detail1: "Obiective UE - Green Deal European: -55% emisii transport până 2030 vs. 1990 (Fit for 55). Neutralitate climatică 2050 (obiectiv legal). Zero poluare aer, apă, sol până 2050. Circularitate și restaurare biodiversitate.",
    section10Detail2: "Fit for 55 - implicații transport: ETS2 pentru transport rutier din 2027 (detaliat anterior). Standarde emisii CO2 pentru vehicule grele: -45% în 2030, -65% în 2035, -90% în 2040 vs. 2019. Infrastructură combustibili alternativi (AFIR): stații electric la 60km pe TEN-T, hidrogen la 200km. Revizuire directive energie (RED III): ținte mai ambițioase pentru energie regenerabilă.",
    section10Detail3: "Trenuri lungi și infrastructură feroviară: Trenuri de 740m pe coridoarele TEN-T = +25% capacitate fără infrastructură nouă. Digitalizare feroviară (ERTMS) pentru mai multă capacitate și fiabilitate. Single European Railway Area pentru simplificare transfrontalieră. Terminale intermodale noi și extinse.",
    section10Detail4: "Coridoare de hidrogen și electrificare: H2 stations pe TEN-T core network până 2030 (AFIR). Electrificare autostrăzi (overhead lines) în teste (Germania, Suedia). Megawatt charging pentru camioane electrice (MCS) în standardizare. Investiții masive în producție hidrogen verde (REPowerEU).",
    section10Detail5: "Strategia ta pentru 2025-2030: Construiește capabilități de raportare CO2 imediat. Dezvoltă relații cu operatori intermodali și cu flotă verde. Include scenarii de cost carbon în toate contractele pe termen lung. Investește în certificări (ISO 14001, Lean & Green). Poziționează-te ca partener de tranziție verde pentru clienți. Anticipează, nu reacționa.",

    // Tabel Comparativ
    tableTitle: "Comparație Emisii per Mod de Transport",
    tableHeader1: "Mod Transport",
    tableHeader2: "gCO2/tonă-km",
    tableHeader3: "Reducere vs. Camion",
    tableHeader4: "Disponibilitate",
    tableRow1: "Camion Diesel Euro 6 | 62-80 | Referință | Universală",
    tableRow2: "Camion LNG | 50-65 | -15-20% | Bună (coridoare)",
    tableRow3: "Camion HVO | 6-10 | -85-90% | Limitată (premium)",
    tableRow4: "Camion Electric | 0* | -100%* | Urbană",
    tableRow5: "Tren | 18-22 | -70% | Coridoare TEN-T",
    tableRow6: "Short Sea | 10-16 | -75-85% | Costieră",
    tableRow7: "Intermodal Rută-Feroviar | 25-35 | -50-60% | Coridoare principale",

    // Studiu de Caz
    caseStudyTitle: "Studiu de Caz: Program de Reducere Emisii -30% în 3 Ani",
    caseStudyContent: "O companie de freight forwarding cu 500 transporturi FTL/lună a implementat un program comprehensiv de reducere emisii. Anul 1: Implementare telematică pentru eco-driving (-8% consum), optimizare rate încărcare de la 78% la 85% (-9% emisii/tonă). Anul 2: Shift modal de 15% din volume către feroviar pentru rute >800km (-12% total), parteneriat cu transportatori cu flotă LNG pentru 20% din transporturi (-3%). Anul 3: 10% din transporturi cu HVO pentru clienți premium (-2%), certificare Lean & Green 3 stele. Rezultat total: -34% emisii per tonă-km transportată, cu cost operational similar (economii din eficiență au compensat premium-ul verde). Clienții majori au rămas și alții noi au venit specific pentru capabilitățile verzi.",

    // Checklist
    checklistTitle: "Checklist Sustenabilitate pentru Freight Forwarders",
    checklistItem1: "Avem capacitatea de a calcula și raporta emisii CO2 per transport (GLEC)?",
    checklistItem2: "Cunoaștem standardul Euro și tipul de combustibil al transportatorilor noștri?",
    checklistItem3: "Oferim opțiuni verzi (feroviar, LNG, HVO) clienților?",
    checklistItem4: "Avem sau suntem în proces de certificare ISO 14001 sau Lean & Green?",
    checklistItem5: "Monitorizăm și raportăm trendurile emisiilor anual?",
    checklistItem6: "Am evaluat impactul ETS2 asupra pricing-ului?",
    checklistItem7: "Avem obiective concrete de reducere emisii pe 3-5 ani?",
    checklistItem8: "Putem oferi certificate de offset pentru clienții care le solicită?",
    checklistItem9: "Avem parteneriate cu operatori intermodali pentru shift modal?",
    checklistItem10: "Echipa de vânzări este instruită să prezinte capabilitățile verzi?",

    // Glosar
    glossaryTitle: "Glosar Termeni Sustenabilitate",
    glossaryTerm1: "Carbon Footprint - Amprenta de carbon, totalul emisiilor GHG asociate unei activități",
    glossaryTerm2: "GHG - Greenhouse Gases, gaze cu efect de seră (CO2, CH4, N2O etc.)",
    glossaryTerm3: "Scope 1/2/3 - Categorii de emisii: directe, din energie, din lanțul de valoare",
    glossaryTerm4: "ETS - Emissions Trading System, piața europeană de carbon",
    glossaryTerm5: "GLEC - Global Logistics Emissions Council, metodologie standard de calcul",
    glossaryTerm6: "WTW/TTW - Well-to-Wheel / Tank-to-Wheel, metodologii de calcul emisii",
    glossaryTerm7: "HVO - Hydrotreated Vegetable Oil, diesel regenerabil drop-in",
    glossaryTerm8: "LNG - Liquefied Natural Gas, gaz natural lichefiat pentru transport greu",
    glossaryTerm9: "tCO2e - Tone CO2 echivalent, unitate standard pentru emisii GHG",
    glossaryTerm10: "Carbon Offset - Compensare emisii prin credite din proiecte certificate",

    bestPracticesTitle: "Bune Practici",
    bestPractice1: "Implementează un sistem de monitorizare și raportare CO2 pe fiecare transport",
    bestPractice2: "Oferă proactiv rapoarte de emisii clienților - devino partener în obiectivele lor de sustenabilitate",
    bestPractice3: "Investește în training eco-driving pentru transportatorii parteneri - beneficii reciproce",
    bestPractice4: "Construiește portofoliu de opțiuni verzi (intermodal, LNG, HVO) pentru a răspunde cerințelor diverse",
    bestPractice5: "Stabilește obiective de reducere pe 3-5 ani și comunică-le transparent clienților",

    commonMistakesTitle: "Greșeli Frecvente",
    commonMistake1: "Ignorarea cerințelor de sustenabilitate ale clienților până când e prea târziu pentru licitații",
    commonMistake2: "Raportări inexacte sau greenwashing - distruge încrederea și expune la riscuri de reputație",
    commonMistake3: "Lipsa strategiei pe termen lung pentru tranziția către flotă verde",
    commonMistake4: "Subestimarea impactului financiar al ETS2 și al cerințelor climatice",
    commonMistake5: "Tratarea sustenabilității ca cost, nu ca oportunitate de diferențiere și valoare",
    quizTitle: "Quiz Sustenabilitate",
  },
  de: {
    chapterTitle: "Nachhaltigkeit im Transport",
    heroDescription: "CO2-Fußabdruck-Berechnung, grüne Zertifizierungen, ETS und Strategien zur Emissionsreduzierung in der Logistik.",
    intro: "Nachhaltigkeit ist zu einem entscheidenden Kriterium bei der Auswahl von Transportdienstleistern geworden. Große Kunden fordern detaillierte CO2-Berichte, Klimaneutralitätszertifikate und konkrete Emissionsreduktionspläne. Unternehmen, die sich nicht anpassen, verlieren Aufträge und Wettbewerbsfähigkeit. Dieses Kapitel bietet praktisches Wissen zur Erfüllung von Nachhaltigkeitsanforderungen.",

    // Abschnitt 1: Umweltauswirkungen
    section1Title: "Umweltauswirkungen des Transports",
    section1Content: "Der Straßengüterverkehr verursacht etwa 6% der gesamten CO2-Emissionen der EU und 27% der Transportemissionen. Ein Euro-6-Lkw emittiert durchschnittlich 60-80g CO2/Tonnen-km, verglichen mit 18-22g für die Bahn und 10-16g für Seefracht.",
    section1Detail1: "Well-to-Wheel (WTW) vs. Tank-to-Wheel (TTW) Analyse: WTW umfasst Kraftstoffproduktion und -transport plus Verbrennung. TTW misst nur direkte Verbrennungsemissionen. Für korrekte Vergleiche dieselbe Methodik verwenden. WTW addiert +15-25% zu Zahlen vs. TTW.",
    section1Detail2: "Größte Beiträge zu Emissionen: Dieselkraftstoff (95%+), Fahrzeugherstellung (~3%), Wartung und Ersatzteile (~1%), Infrastruktur (Straßen, Depots) (~1%). Kraftstoffverbrauchsreduzierung hat größten Einfluss.",
    section1Detail3: "Einflussfaktoren auf Emissionen: Fahrzeugtyp (Euro 5 vs. Euro 6: 10-15% Unterschied), Beladungsgrad (FTL vs. LTL kann Emissionen/Tonne verdoppeln), Streckenprofil (Berg vs. Flachland: +20-30%), Fahrstil (Eco-Driving: -10-15%), Kraftstoffart.",
    section1Detail4: "Spezifische Emissionen nach Fahrzeugtyp: Sprinter 3,5t: 150-200g/Tonnen-km, Lkw 7,5t: 120-150g/Tonnen-km, Lkw 12t: 90-120g/Tonnen-km, Lkw 40t FTL: 60-80g/Tonnen-km, Megatrailer: 50-70g/Tonnen-km (am effizientesten auf Straße).",

    // Abschnitt 2: CO2-Berechnung
    section2Title: "Berechnung des CO2-Fußabdrucks",
    section2Content: "Die GLEC-Methodik (Global Logistics Emissions Council) ist der internationale Standard, der von großen Kunden und für offizielle Berichte akzeptiert wird.",
    section2Detail1: "GLEC-Grundformel: CO2-Emissionen = Emissionsfaktor × Entfernung × Frachtgewicht / Auslastungsfaktor. Beispiel: 62g × 1000km × 10t / 0,85 = 729kg CO2 für einen teilbeladenen FTL-Transport.",
    section2Detail2: "Standard-Emissionsfaktoren (g CO2/Tonnen-km, basierend auf GLEC Framework 2.0): Euro-6-Lkw FTL = 62g, LTL = 95g, Sammelgut = 110g, Zug = 18g, Seecontainer = 16g, Luftfracht = 602g. Intermodal Straße-Schiene = 28g.",
    section2Detail3: "CO2-Berechnungssoftware: EcoTransIT World (kostenlos, www.ecotransit.org, GLEC-basiert), Smart Freight Centre Calculator, integrierte Module in TMS (Transporeon, Sixfold) und spezialisierte Plattformen (Climatiq, Normative).",
    section2Detail4: "Scope-3-Reporting erklärt: Für die meisten Kunden sind Transportemissionen 'Scope 3' (Lieferkette), nicht Scope 1 (direkter Betrieb). Das bedeutet, sie sind auf Lieferanten (uns) für präzise Daten angewiesen. Unsere Datenqualität beeinflusst direkt ihre ESG-Berichte.",
    section2Detail5: "Präzision vs. Schätzungen: Stufe 1 (Basic): Schätzungen basierend auf Entfernung und Fahrzeugtyp. Stufe 2 (Verbessert): spezifische Kraftstoffverbrauchsdaten pro Fahrzeug. Stufe 3 (Fortgeschritten): Echtzeit-Telematik mit GPS- und OBD-Daten. Große Kunden bevorzugen Stufe 2 oder 3.",

    // Abschnitt 3: EU-ETS
    section3Title: "EU-ETS und Auswirkungen auf den Transport",
    section3Content: "Das Emissionshandelssystem (ETS) wird ab 2027 auf den Straßentransport ausgedehnt (ETS2). Dies wird die Transportwirtschaft grundlegend verändern.",
    section3Detail1: "Wie ETS2 funktioniert: Kraftstofflieferanten (Raffinerien, Händler) kaufen Zertifikate für Emissionen aus verkauftem Kraftstoff. Kosten werden auf Kraftstoffpreise übertragen. Anzahl verfügbarer Zertifikate sinkt jährlich, wodurch Preise steigen.",
    section3Detail2: "Geschätzte finanzielle Auswirkungen: 2027: +€0,10-0,15/Liter Diesel (bei Zertifikatspreis €50/Tonne CO2). 2030: +€0,20-0,30/Liter (geschätzter Preis €100-150/Tonne). 2035+: +€0,40-0,60/Liter (Szenarien €200-300/Tonne). Bei 100.000 Liter/Jahr = +€10.000-60.000 Jahreskosten.",
    section3Detail3: "Auswirkungen auf modale Wettbewerbsfähigkeit: Schiene (bereits im ETS mit teilweisen Freizertifikaten) wird relativ wettbewerbsfähiger. Seefracht (ETS ab 2024) und Straße konvergieren. Intermodal gewinnt wirtschaftlichen, nicht nur Image-Vorteil.",
    section3Detail4: "Vorbereitung auf ETS2: EUA-Zertifikatspreise auf Märkten verfolgen (ICE, EEX). Carbon-Kosten-Szenarien in Langzeit-Pricing einbeziehen. ETS-Komponente in Tarifen transparent an Kunden kommunizieren. Transition zu alternativen Kraftstoffen und Modal Shift beschleunigen.",

    // Abschnitt 4: Grüne Zertifizierungen
    section4Title: "Grüne Zertifizierungen und Standards",
    section4Content: "Zertifizierungen demonstrieren Nachhaltigkeitsengagement und sind oft Qualifikationsbedingungen in Ausschreibungen.",
    section4Detail1: "ISO 14001 (Umweltmanagementsystem): Internationaler Standard für Umweltpolitik und -verfahren. Anforderungen: Umweltpolitik, Identifikation von Aspekten/Auswirkungen, Ziele und Vorgaben, Monitoring und internes Audit. Jährliches externes Audit. Kosten: €5.000-15.000 Implementierung, €2.000-5.000/Jahr Wartung.",
    section4Detail2: "Lean & Green (European Logistics): Logistikspezifisches Programm mit 5 Stufen (1-5 Sterne). 1 Stern = Plan für 20% Reduktion in 5 Jahren. 3 Sterne = Reduktion erreicht + Fortsetzung. 5 Sterne = Best-in-Class, Netto-Null-Emissionen. Anerkannt von großen europäischen Einzelhändlern und Herstellern. Prozess: Diagnose, Plan, Validierung, jährliches Monitoring.",
    section4Detail3: "Science Based Targets initiative (SBTi): Reduktionsziele im Einklang mit Pariser Abkommen (1,5°C). Wissenschaftliche Validierung der Ziele. Anforderung vieler ESG-Investoren. Prozess: Commitment, Zielentwicklung, SBTi-Validierung (6-12 Monate), jährliche Berichterstattung.",
    section4Detail4: "Andere relevante Zertifizierungen: EMAS (EU, strenger als ISO 14001), FORS (UK, Flottenstandard), SmartWay (USA, EPA), EcoVadis (ESG-Rating Lieferanten - stark nachgefragt in Supply Chain), CDP (Climate Disclosure Project - Emissionsberichterstattung).",
    section4Detail5: "Empfehlung für Spediteure: Start mit ISO 14001 (Fundament), dann Lean & Green (logistikspezifisch, Branchensichtbarkeit). EcoVadis für multinationale Kunden. SBTi für Premium-Positionierung.",

    // Abschnitt 5: Reduktionsstrategien
    section5Title: "Strategien zur Emissionsreduzierung",
    section5Content: "Emissionsreduzierung wird durch betriebliche Optimierung, Flotteninvestitionen und Modal Shift erreicht. Priorisieren Sie Maßnahmen mit bestem Wirkungs-Aufwand-Verhältnis.",
    section5Detail1: "Betriebliche Optimierung (sofortige Wirkung, niedrige Kosten): Steigerung Auslastungsrate von 75% auf 85% = -12% Emissionen/Tonne. LTL-Konsolidierung in Sammelgut = -20-30% vs. reines LTL. Reduzierung Leerkilometer (Return Loads) von 25% auf 15% = -10% Gesamtemissionen. Intelligente Routenplanung (Verkehrs-, Bergvermeidung) = -5-10%.",
    section5Detail2: "Eco-Driving und Verhalten: Fahrerschulung in Eco-Driving-Techniken: -10-15% Verbrauch. Telematik-Monitoring mit Echtzeit-Feedback. Gamification-Systeme und Boni für effiziente Fahrer. Geschwindigkeitsbegrenzung (80-85 km/h vs. 90 km/h) = -8-12% Verbrauch. Predictive Cruise Control bei modernen Lkw.",
    section5Detail3: "Flotteninvestitionen (mittlere Wirkung, moderate Kosten): Upgrade von Euro 5 auf Euro 6d = -10-15% Emissionen. Aerodynamik: Kabinenspioiler, Seitenschweller, Boat Tails = -5-10%. Rollwiderstandsarme Reifen = -3-5%. Generell neuere und effizientere Fahrzeuge.",
    section5Detail4: "Modal Shift (große Wirkung): Schiene für Distanzen >600km = -70% Emissionen vs. Straße. Short Sea Shipping für Küsten-/Inselrouten = -75%. Kombinierter Intermodal (Straße+Schiene) = -50-60%. Binnenschiff für Bulk auf Korridoren (Rhein, Donau) = -80%.",
    section5Detail5: "Priorisierungsmatrix: Priorität 1 (sofort): Auslastung, Eco-Driving, Leerkilometer. Priorität 2 (6-12 Monate): Flotten-Upgrade, Telematik. Priorität 3 (1-3 Jahre): Modal Shift, alternative Kraftstoffe. Priorität 4 (3-5 Jahre): Elektrifizierung, Wasserstoff.",

    // Abschnitt 6: Alternative Kraftstoffe
    section6Title: "Alternative Kraftstoffe und Technologien",
    section6Content: "Kraftstoffdiversifizierung reduziert Dieselabhängigkeit und bereitet auf strengere Vorschriften vor.",
    section6Detail1: "LNG (Flüssigerdgas): Emissionsreduzierung: -15-20% CO2 vs. Diesel. Verfügbarkeit: gut auf Hauptkorridoren (300+ Stationen EU). Preis: ähnlich Diesel, manchmal günstiger. Reichweite: 1.200-1.500km. Geeignet für: internationalen Fernverkehr auf Routen mit Infrastruktur. Nachteile: Fahrzeug-Erstinvestition +€30-50.000, emittiert Methan (hoher GWP).",
    section6Detail2: "HVO (Hydriertes Pflanzenöl / Renewable Diesel): Emissionsreduzierung: -85-90% CO2 (WTW, bei nachhaltiger Produktion). Kompatibilität: Drop-in, funktioniert in jedem Dieselmotor ohne Modifikationen. Verfügbarkeit: begrenzt, wachsend, hauptsächlich an Zapfsäulen in Skandinavien. Preis: Premium +30-50% vs. Diesel. Geeignet für: Premium-Kunden mit Zero-Carbon-Forderung, bestehende Flotten ohne Fahrzeuginvestition.",
    section6Detail3: "Biodiesel (B100, B30, B7): Emissionsreduzierung: B100 = -50-80% CO2, B30 = -15-25%. Kompatibilität: B7 universal, B30 benötigt Herstellerfreigabe, B100 benötigt Modifikationen. Probleme: Kälteleistung, Degradation über Zeit, variable Qualitätsprobleme. Nutzung: B7 Standard in vielen EU-Ländern, B30+ für dedizierte Flotten mit Liefervertrag.",
    section6Detail4: "Elektrisch (BEV - Batterie-Elektrofahrzeuge): Emissionsreduzierung: -100% direkt (0 bei Nutzung grüner Energie). Aktuelle Reichweite: 200-400km (steigend auf 500km+ in 2025). Ladezeit: 1-4 Stunden (DC Fast Charging). Geeignet für: urbane letzte Meile, regionale Distribution, feste und vorhersehbare Distanzen. Einschränkungen: Batteriegewicht reduziert Nutzlast, unzureichende Infrastruktur für Fernverkehr. Investition: +100-150% vs. Diesel, aber wettbewerbsfähige TCO über 5+ Jahre mit günstigem Strom.",
    section6Detail5: "Wasserstoff (FCEV - Brennstoffzellenfahrzeuge): Emissionsreduzierung: -100% (0 mit grünem Wasserstoff). Reichweite: 800-1.200km, ähnlich Diesel. Tankzeit: 15-20 Minuten, ähnlich Diesel. Verfügbarkeit: experimentell, <50 Stationen in EU. Geeignet für: Fernverkehr in Zukunft (2028+). Status: Hyundai XCIENT, Nikola Tre FCEV, Daimler GenH2 in Tests. Empfehlung: Entwicklung beobachten, noch nicht investieren.",

    // Abschnitt 7: Nachhaltigkeitsberichterstattung
    section7Title: "Nachhaltigkeitsberichterstattung",
    section7Content: "Strukturierte Emissionsberichterstattung wird Pflicht und wird von Kunden, Investoren und Behörden gefordert.",
    section7Detail1: "GHG-Protokoll - Scope-Struktur: Scope 1 = direkte Emissionen (Kraftstoff in eigenen Fahrzeugen). Scope 2 = indirekte Emissionen aus Energie (Strom, Heizung). Scope 3 = Emissionen aus Wertschöpfungskette (Drittanbieter, Supply Chain). Für Spediteure: Scope 1 minimal (eigene Fahrzeuge, falls vorhanden), Scope 3 major (Partner-Transporteure).",
    section7Detail2: "CSRD (Corporate Sustainability Reporting Directive): Obligatorisch für große EU-Unternehmen ab 2024, progressive Erweiterung. Wer: >250 Mitarbeiter ODER >€40M Umsatz ODER >€20M Aktiva. Beinhaltet doppelte Materialität (Auswirkung auf Unternehmen UND Auswirkung auf Umwelt). Jährlicher geprüfter Bericht, konform mit ESRS (European Sustainability Reporting Standards).",
    section7Detail3: "Was für Kunden berichten: Gesamtemissionen pro Periode (tCO2e), Emissionsintensität (g CO2/Tonnen-km oder pro Sendung), Aufschlüsselung nach Transportmodus, YoY-Trend und Fortschritt vs. Ziele, gehaltene Zertifizierungen/Akkreditierungen.",
    section7Detail4: "Berichtsformat pro Transport: Transport-ID, Ursprung-Ziel, Entfernung, Gewicht, Transportmodus, Fahrzeugtyp/Euro-Standard, Kraftstoff, verwendeter Emissionsfaktor, berechnete Emissionen (kg CO2), Offset-Option. Im TMS für Effizienz automatisieren.",
    section7Detail5: "Best Practices Berichterstattung: Jährlicher Nachhaltigkeitsbericht (auch wenn nicht obligatorisch). Dashboard für Kunden mit kumulierten Emissionen. Methodentransparenz (GLEC, Datenquelle). Öffentliche Ziele und Fortschritt. CDP-Teilnahme für institutionelle Sichtbarkeit.",

    // Abschnitt 8: Carbon Offsetting
    section8Title: "Emissionskompensation (Carbon Offsetting)",
    section8Content: "Offsetting ermöglicht Neutralisierung von Restemissionen, ersetzt aber nicht echte Reduktion. Als ergänzende, nicht primäre Maßnahme nutzen.",
    section8Detail1: "Prinzip des Offsetting: Sie finanzieren Projekte, die Emissionen erfassen oder vermeiden, die Ihren eigenen entsprechen. 1 Tonne CO2 emittiert = 1 Carbon Credit aus zertifiziertem Projekt gekauft. Ergebnis: Neutralität auf Papier (aber Atmosphäre hat Ihr CO2 trotzdem erhalten).",
    section8Detail2: "Arten von Offset-Projekten: Naturbasiert: Aufforstung (€5-20/tCO2), Waldschutz REDD+ (€10-30/tCO2), Mangrovenrestaurierung (€15-40/tCO2). Technologiebasiert: Erneuerbare Energie in Entwicklungsländern (€3-15/tCO2), Methanerfassung aus Abfall (€8-25/tCO2), effiziente Öfen Afrika (€5-15/tCO2). Carbon Capture: Direct Air Capture - DAC (€200-600/tCO2) - am 'saubersten' aber sehr teuer.",
    section8Detail3: "Offset-Qualitätsstandards: Gold Standard (am strengsten, nachgewiesene soziale Co-Benefits). Verified Carbon Standard - VCS/Verra (größtes Volumen, rigoros). Climate Action Reserve (USA, Forstwirtschaft). American Carbon Registry. Plan Vivo (Community Forestry). Vermeiden: Credits ohne anerkannte Zertifizierung, Projekte mit fragwürdiger Additionalität.",
    section8Detail4: "Offset-Prozess für Kunden: 1) Emissionen pro Transport berechnen (GLEC). 2) Offset-Option anbieten (+€X pro Transport oder pro tCO2). 3) Zertifizierte Credits bei kumuliertem Volumen kaufen. 4) Offset-Zertifikat pro Transport oder aggregiert bereitstellen. 5) Credits im Register stilllegen (Doppelzählung vermeiden).",
    section8Detail5: "Berechtigte Kritik und Einschränkungen: Viele Projekte hätten ohnehin existiert (Nicht-Additionalität). Fragwürdige Permanenz (Wald kann brennen). Inkonsistente Carbon-Bilanzierung zwischen Standards. Greenwashing wenn Offsetting Reduktion ersetzt. Empfehlung: 80% Aufwand auf Reduktion, 20% Offset für Rest. Gold Standard oder DAC bevorzugen.",

    // Abschnitt 9: Kundenanforderungen
    section9Title: "Kundenanforderungen und Ausschreibungen",
    section9Content: "Nachhaltigkeit ist in den meisten großen Ausschreibungen zum Qualifikationskriterium geworden. Frühe Vorbereitung ist entscheidend.",
    section9Detail1: "Trends bei RFPs (Ausschreibungen): 70%+ der Ausschreibungen großer Unternehmen enthalten Nachhaltigkeitskriterien. Typische Gewichtung: 10-30% der Gesamtpunktzahl. Einige sind 'Gate' (eliminierend) - ohne Zertifizierung = Disqualifikation. Sektoren mit strengen Anforderungen: FMCG, Einzelhandel, Automotive, Pharma, Tech.",
    section9Detail2: "Typische Ausschreibungsanforderungen: CO2-Berechnung und -Berichterstattung pro Transport (obligatorisch). Flotte mindestens Euro 6 (oder Euro 5 mit Upgrade-Plan). ISO 14001 Zertifizierung oder gleichwertig (häufig obligatorisch). Emissionsreduktionsziele für 3-5 Jahre. Periodische Berichterstattung (monatlich/quartalsweise) der Emissionen. Grüne Optionen (Schiene, LNG, HVO) verfügbar.",
    section9Detail3: "Wie Sie effektiv antworten: Dedizierter Nachhaltigkeitsabschnitt im Angebot. Aktuelle Fähigkeiten und Entwicklungsplan klar präsentieren. Optionen anbieten: Standard, Green (Schiene/LNG), Premium Green (HVO/Offset). Emissionsberechnung für spezifische Ausschreibungsvolumen einbeziehen. Ihren Trend und Ziele für 3-5 Jahre zeigen.",
    section9Detail4: "Preisgestaltung für grüne Optionen: LNG: +2-5% vs. Diesel (variabel mit Gaspreis). HVO: +15-25% vs. Diesel (abhängig von Verfügbarkeit). Schiene/Intermodal: 0% bis -10% (kann für lange Distanzen günstiger sein!). Offset: +€2-10 pro Transport (abhängig von Entfernung und Gewicht). Preisstruktur transparent kommunizieren.",
    section9Detail5: "Wettbewerbsdifferenzierung: Nachhaltigkeit ist nicht mehr 'nice to have' - es ist Grundvoraussetzung. Unternehmen ohne klare Strategie verlieren Ausschreibungen. Solche mit überlegenen Fähigkeiten gewinnen Verträge und können Premium rechtfertigen. First-Mover-Vorteil bei grüner Transition zieht führende Kunden an.",

    // Abschnitt 10: Nachhaltige Zukunft
    section10Title: "Die nachhaltige Zukunft der Logistik",
    section10Content: "EU-Vorschriften und Markttrends beschleunigen die grüne Transition. Strategische Vorbereitung jetzt sichert langfristige Wettbewerbsfähigkeit.",
    section10Detail1: "EU-Ziele - European Green Deal: -55% Transportemissionen bis 2030 vs. 1990 (Fit for 55). Klimaneutralität 2050 (gesetzliches Ziel). Null Verschmutzung von Luft, Wasser, Boden bis 2050. Kreislaufwirtschaft und Biodiversitätswiederherstellung.",
    section10Detail2: "Fit for 55 - Transportimplikationen: ETS2 für Straßentransport ab 2027 (zuvor detailliert). CO2-Emissionsstandards für schwere Nutzfahrzeuge: -45% in 2030, -65% in 2035, -90% in 2040 vs. 2019. Infrastruktur für alternative Kraftstoffe (AFIR): Ladestationen alle 60km auf TEN-T, Wasserstoff alle 200km. Überarbeitung Energierichtlinien (RED III): ambitioniertere Ziele für erneuerbare Energie.",
    section10Detail3: "Lange Züge und Schieneninfrastruktur: 740m-Züge auf TEN-T-Korridoren = +25% Kapazität ohne neue Infrastruktur. Schienendigitalisierung (ERTMS) für mehr Kapazität und Zuverlässigkeit. Single European Railway Area für grenzüberschreitende Vereinfachung. Neue und erweiterte Intermodal-Terminals.",
    section10Detail4: "Wasserstoffkorridore und Elektrifizierung: H2-Stationen auf TEN-T Core Network bis 2030 (AFIR). Autobahn-Elektrifizierung (Oberleitungen) in Tests (Deutschland, Schweden). Megawatt Charging für Elektro-Lkw (MCS) in Standardisierung. Massive Investitionen in grüne Wasserstoffproduktion (REPowerEU).",
    section10Detail5: "Ihre Strategie für 2025-2030: CO2-Berichtsfähigkeiten sofort aufbauen. Beziehungen zu Intermodal-Betreibern und Flotten mit grüner Technologie entwickeln. Carbon-Kosten-Szenarien in alle langfristigen Verträge einbeziehen. In Zertifizierungen investieren (ISO 14001, Lean & Green). Sich als grüner Transitionspartner für Kunden positionieren. Antizipieren, nicht reagieren.",

    // Vergleichstabelle
    tableTitle: "Emissionsvergleich nach Verkehrsträger",
    tableHeader1: "Verkehrsträger",
    tableHeader2: "gCO2/Tonnen-km",
    tableHeader3: "Reduktion vs. Lkw",
    tableHeader4: "Verfügbarkeit",
    tableRow1: "Diesel-Lkw Euro 6 | 62-80 | Referenz | Universal",
    tableRow2: "LNG-Lkw | 50-65 | -15-20% | Gut (Korridore)",
    tableRow3: "HVO-Lkw | 6-10 | -85-90% | Begrenzt (Premium)",
    tableRow4: "Elektro-Lkw | 0* | -100%* | Urban",
    tableRow5: "Zug | 18-22 | -70% | TEN-T-Korridore",
    tableRow6: "Short Sea | 10-16 | -75-85% | Küsten",
    tableRow7: "Intermodal Straße-Schiene | 25-35 | -50-60% | Hauptkorridore",

    // Fallstudie
    caseStudyTitle: "Fallstudie: Emissionsreduktionsprogramm -30% in 3 Jahren",
    caseStudyContent: "Ein Speditionsunternehmen mit 500 FTL-Transporten/Monat implementierte ein umfassendes Emissionsreduktionsprogramm. Jahr 1: Telematik-Implementierung für Eco-Driving (-8% Verbrauch), Auslastungsoptimierung von 78% auf 85% (-9% Emissionen/Tonne). Jahr 2: Modale Verlagerung von 15% der Volumen zur Schiene für Strecken >800km (-12% gesamt), Partnerschaft mit LNG-Flotten-Transporteuren für 20% der Transporte (-3%). Jahr 3: 10% der Transporte mit HVO für Premium-Kunden (-2%), Lean & Green 3-Sterne-Zertifizierung. Gesamtergebnis: -34% Emissionen pro Tonnen-km transportiert, bei ähnlichen Betriebskosten (Effizienzersparnisse kompensierten grünes Premium). Große Kunden blieben und neue kamen speziell wegen der grünen Fähigkeiten.",

    // Checkliste
    checklistTitle: "Nachhaltigkeits-Checkliste für Spediteure",
    checklistItem1: "Können wir CO2-Emissionen pro Transport berechnen und berichten (GLEC)?",
    checklistItem2: "Kennen wir Euro-Standard und Kraftstoffart unserer Transporteure?",
    checklistItem3: "Bieten wir Kunden grüne Optionen (Schiene, LNG, HVO)?",
    checklistItem4: "Haben wir oder sind wir im Prozess der ISO 14001 oder Lean & Green Zertifizierung?",
    checklistItem5: "Überwachen und berichten wir jährlich Emissionstrends?",
    checklistItem6: "Haben wir Auswirkungen von ETS2 auf Preisgestaltung bewertet?",
    checklistItem7: "Haben wir konkrete Emissionsreduktionsziele für 3-5 Jahre?",
    checklistItem8: "Können wir Offset-Zertifikate für anfragende Kunden bereitstellen?",
    checklistItem9: "Haben wir Partnerschaften mit Intermodal-Betreibern für Modal Shift?",
    checklistItem10: "Ist Vertriebsteam geschult, grüne Fähigkeiten zu präsentieren?",

    // Glossar
    glossaryTitle: "Glossar Nachhaltigkeitsbegriffe",
    glossaryTerm1: "Carbon Footprint - CO2-Fußabdruck, Gesamtemissionen von THG einer Aktivität",
    glossaryTerm2: "GHG - Greenhouse Gases, Treibhausgase (CO2, CH4, N2O usw.)",
    glossaryTerm3: "Scope 1/2/3 - Emissionskategorien: direkt, aus Energie, aus Wertschöpfungskette",
    glossaryTerm4: "ETS - Emissions Trading System, europäischer Kohlenstoffmarkt",
    glossaryTerm5: "GLEC - Global Logistics Emissions Council, Standard-Berechnungsmethodik",
    glossaryTerm6: "WTW/TTW - Well-to-Wheel / Tank-to-Wheel, Emissionsberechnungsmethoden",
    glossaryTerm7: "HVO - Hydrotreated Vegetable Oil, Drop-in erneuerbarer Diesel",
    glossaryTerm8: "LNG - Liquefied Natural Gas, Flüssigerdgas für Schwerlasttransport",
    glossaryTerm9: "tCO2e - Tonnen CO2-Äquivalent, Standardeinheit für THG-Emissionen",
    glossaryTerm10: "Carbon Offset - Emissionskompensation durch Credits aus zertifizierten Projekten",

    bestPracticesTitle: "Best Practices",
    bestPractice1: "Implementieren Sie ein CO2-Überwachungs- und Berichtssystem für jeden Transport",
    bestPractice2: "Bieten Sie Kunden proaktiv Emissionsberichte an - werden Sie Partner in ihren Nachhaltigkeitszielen",
    bestPractice3: "Investieren Sie in Eco-Driving-Training für Partnerflotten - gegenseitiger Nutzen",
    bestPractice4: "Bauen Sie ein Portfolio grüner Optionen auf (Intermodal, LNG, HVO) um diverse Anforderungen zu erfüllen",
    bestPractice5: "Setzen Sie 3-5-Jahres-Reduktionsziele und kommunizieren Sie diese transparent an Kunden",

    commonMistakesTitle: "Häufige Fehler",
    commonMistake1: "Ignorieren der Nachhaltigkeitsanforderungen von Kunden, bis es für Ausschreibungen zu spät ist",
    commonMistake2: "Ungenaue Berichte oder Greenwashing - zerstört Vertrauen und setzt Reputationsrisiken aus",
    commonMistake3: "Fehlende langfristige Strategie für die Transition zur grünen Flotte",
    commonMistake4: "Unterschätzung der finanziellen Auswirkungen von ETS2 und Klimaanforderungen",
    commonMistake5: "Nachhaltigkeit als Kosten behandeln, nicht als Differenzierungs- und Wertschöpfungsmöglichkeit",
    quizTitle: "Quiz Nachhaltigkeit",
  },
  en: {
    chapterTitle: "Sustainability in Transport",
    heroDescription: "Carbon footprint calculation, green certifications, ETS and emission reduction strategies in logistics.",
    intro: "Sustainability has become a decisive criterion in transport provider selection. Major clients require detailed CO2 reporting, climate neutrality certificates, and concrete emission reduction plans. Companies that do not adapt lose contracts and competitiveness. This chapter provides practical knowledge to meet sustainability requirements.",

    // Section 1: Environmental Impact
    section1Title: "Environmental Impact of Transport",
    section1Content: "Road freight transport generates approximately 6% of total EU CO2 emissions and 27% of transport emissions. A Euro 6 truck emits on average 60-80g CO2/tonne-km, compared to 18-22g for train and 10-16g for maritime transport.",
    section1Detail1: "Well-to-Wheel (WTW) vs. Tank-to-Wheel (TTW) analysis: WTW includes fuel production and transportation plus combustion. TTW measures only direct combustion emissions. For correct comparisons, use the same methodology. WTW adds +15-25% to figures vs. TTW.",
    section1Detail2: "Largest contributions to emissions: Diesel fuel (95%+), vehicle manufacturing (~3%), maintenance and spare parts (~1%), and infrastructure (roads, depots) (~1%). Reducing fuel consumption has the greatest impact.",
    section1Detail3: "Factors influencing emissions: Vehicle type (Euro 5 vs. Euro 6: 10-15% difference), loading degree (FTL vs. LTL can double emissions/tonne), route profile (mountain vs. flat: +20-30%), driving style (eco-driving: -10-15%), and fuel type.",
    section1Detail4: "Specific emissions per vehicle type: Sprinter 3.5t: 150-200g/tonne-km, Truck 7.5t: 120-150g/tonne-km, Truck 12t: 90-120g/tonne-km, Truck 40t FTL: 60-80g/tonne-km, Megatrailer: 50-70g/tonne-km (most efficient on road).",

    // Section 2: Carbon Calculation
    section2Title: "Carbon Footprint Calculation",
    section2Content: "The GLEC methodology (Global Logistics Emissions Council) is the international standard accepted by major clients and for official reports.",
    section2Detail1: "GLEC basic formula: CO2 Emissions = Emission factor × Distance × Freight weight / Load factor. Example: 62g × 1000km × 10t / 0.85 = 729kg CO2 for a partially loaded FTL transport.",
    section2Detail2: "Standard emission factors (g CO2/tonne-km, based on GLEC Framework 2.0): Euro 6 truck FTL = 62g, LTL = 95g, Groupage = 110g, Train = 18g, Maritime container = 16g, Air freight = 602g. Intermodal road-rail = 28g.",
    section2Detail3: "CO2 calculation software: EcoTransIT World (free, www.ecotransit.org, GLEC-based), Smart Freight Centre Calculator, modules integrated in TMS (Transporeon, Sixfold), and specialized platforms (Climatiq, Normative).",
    section2Detail4: "Scope 3 reporting explained: For most clients, transport emissions are 'Scope 3' (supply chain), not Scope 1 (direct operations). This means they rely on suppliers (us) for accurate data. Our data quality directly affects their ESG reports.",
    section2Detail5: "Precision vs. estimates: Level 1 (Basic): estimates based on distance and vehicle type. Level 2 (Improved): specific fuel consumption data per vehicle. Level 3 (Advanced): real-time telematics with GPS and OBD data. Large clients prefer level 2 or 3.",

    // Section 3: EU ETS
    section3Title: "EU ETS and Impact on Transport",
    section3Content: "The Emissions Trading System (ETS) extends to road transport from 2027 (ETS2). This will fundamentally change transport economics.",
    section3Detail1: "How ETS2 works: Fuel suppliers (refineries, distributors) buy certificates for emissions from sold fuel. Cost transfers to fuel price. Number of available certificates decreases annually, raising prices.",
    section3Detail2: "Estimated financial impact: 2027: +€0.10-0.15/liter diesel (at certificate price €50/tonne CO2). 2030: +€0.20-0.30/liter (estimated price €100-150/tonne). 2035+: +€0.40-0.60/liter (scenarios €200-300/tonne). For 100,000 liters/year = +€10,000-60,000 annual costs.",
    section3Detail3: "Impact on modal competitiveness: Rail (already in ETS with partial free certificates) becomes relatively more competitive. Maritime (ETS from 2024) and road converge. Intermodal gains economic, not just image advantage.",
    section3Detail4: "Preparing for ETS2: Monitor EUA certificate prices on markets (ICE, EEX). Include carbon cost scenarios in long-term pricing. Communicate ETS component in tariffs transparently to clients. Accelerate transition to alternative fuels and modal shift.",

    // Section 4: Green Certifications
    section4Title: "Green Certifications and Standards",
    section4Content: "Certifications demonstrate commitment to sustainability and are often qualification conditions in tenders.",
    section4Detail1: "ISO 14001 (Environmental Management System): International standard for environmental policies and procedures. Requirements: environmental policy, identification of aspects/impacts, objectives and targets, monitoring and internal audit. Annual external audit. Cost: €5,000-15,000 implementation, €2,000-5,000/year maintenance.",
    section4Detail2: "Lean & Green (European Logistics): Logistics-specific program with 5 levels (1-5 stars). 1 star = plan for 20% reduction in 5 years. 3 stars = reduction achieved + continuation. 5 stars = best-in-class, net zero emissions. Recognized by major European retailers and manufacturers. Process: diagnosis, plan, validation, annual monitoring.",
    section4Detail3: "Science Based Targets initiative (SBTi): Reduction targets aligned with Paris Agreement (1.5°C). Scientific validation of targets. Requirement for many ESG investors. Process: commitment, target development, SBTi validation (6-12 months), annual reporting.",
    section4Detail4: "Other relevant certifications: EMAS (EU, stricter than ISO 14001), FORS (UK, fleet standard), SmartWay (USA, EPA), EcoVadis (supplier ESG rating - highly demanded in supply chain), CDP (Climate Disclosure Project - emissions reporting).",
    section4Detail5: "Recommendation for freight forwarders: Start with ISO 14001 (foundation), then Lean & Green (logistics-specific, industry visibility). EcoVadis for multinational clients. SBTi for premium positioning.",

    // Section 5: Reduction Strategies
    section5Title: "Emission Reduction Strategies",
    section5Content: "Emission reduction is achieved through operational optimization, fleet investments, and modal shift. Prioritize actions with best impact/effort ratio.",
    section5Detail1: "Operational optimization (immediate impact, low cost): Increasing load rate from 75% to 85% = -12% emissions/tonne. LTL consolidation into groupage = -20-30% vs. pure LTL. Reducing empty km (return loads) from 25% to 15% = -10% total emissions. Smart route planning (traffic, mountain avoidance) = -5-10%.",
    section5Detail2: "Eco-driving and behavior: Driver training in eco-driving techniques: -10-15% consumption. Telematics monitoring with real-time feedback. Gamification systems and bonuses for efficient drivers. Speed limitation (80-85 km/h vs. 90 km/h) = -8-12% consumption. Predictive cruise control on modern trucks.",
    section5Detail3: "Fleet investments (medium impact, moderate cost): Upgrade from Euro 5 to Euro 6d = -10-15% emissions. Aerodynamics: cab spoilers, side skirts, boat tails = -5-10%. Low rolling resistance tires = -3-5%. Generally newer and more efficient vehicles.",
    section5Detail4: "Modal shift (major impact): Rail for distances >600km = -70% emissions vs. road. Short sea shipping for coastal/island routes = -75%. Combined intermodal (road+rail) = -50-60%. Inland waterway for bulk on corridors (Rhine, Danube) = -80%.",
    section5Detail5: "Prioritization matrix: Priority 1 (immediate): loading, eco-driving, empty km. Priority 2 (6-12 months): fleet upgrade, telematics. Priority 3 (1-3 years): modal shift, alternative fuels. Priority 4 (3-5 years): electrification, hydrogen.",

    // Section 6: Alternative Fuels
    section6Title: "Alternative Fuels and Technologies",
    section6Content: "Fuel diversification reduces diesel dependency and prepares for stricter regulations.",
    section6Detail1: "LNG (Liquefied Natural Gas): Emission reduction: -15-20% CO2 vs. diesel. Availability: good on major corridors (300+ stations EU). Price: similar to diesel, sometimes cheaper. Range: 1,200-1,500km. Suitable for: international long-haul on routes with infrastructure. Disadvantages: initial vehicle investment +€30-50,000, emits methane (high GWP).",
    section6Detail2: "HVO (Hydrotreated Vegetable Oil / Renewable Diesel): Emission reduction: -85-90% CO2 (WTW, if sustainably produced). Compatibility: drop-in, works in any diesel engine without modifications. Availability: limited, growing, mostly at pumps in Scandinavia. Price: premium +30-50% vs. diesel. Suitable for: premium clients demanding zero-carbon, existing fleets without vehicle investment.",
    section6Detail3: "Biodiesel (B100, B30, B7): Emission reduction: B100 = -50-80% CO2, B30 = -15-25%. Compatibility: B7 universal, B30 requires manufacturer approval, B100 requires modifications. Issues: cold performance, degradation over time, variable quality problems. Use: B7 standard in many EU countries, B30+ for dedicated fleets with supply contract.",
    section6Detail4: "Electric (BEV - Battery Electric Vehicles): Emission reduction: -100% direct (0 using green energy). Current range: 200-400km (increasing to 500km+ in 2025). Charging time: 1-4 hours (DC fast charging). Suitable for: urban last mile, regional distribution, fixed and predictable distances. Limitations: battery weight reduces payload, insufficient infrastructure for long-haul. Investment: +100-150% vs. diesel, but competitive TCO over 5+ years with cheap energy.",
    section6Detail5: "Hydrogen (FCEV - Fuel Cell Electric Vehicles): Emission reduction: -100% (0 with green hydrogen). Range: 800-1,200km, similar to diesel. Refueling time: 15-20 minutes, similar to diesel. Availability: experimental, <50 stations in EU. Suitable for: long-haul in future (2028+). Status: Hyundai XCIENT, Nikola Tre FCEV, Daimler GenH2 in tests. Recommendation: monitor development, do not invest yet.",

    // Section 7: Sustainability Reporting
    section7Title: "Sustainability Reporting",
    section7Content: "Structured emissions reporting is becoming mandatory and is demanded by clients, investors, and authorities.",
    section7Detail1: "GHG Protocol - Scope structure: Scope 1 = direct emissions (fuel in own vehicles). Scope 2 = indirect emissions from energy (electricity, heating). Scope 3 = value chain emissions (third-party carriers, supply chain). For freight forwarders: Scope 1 minimal (own vehicles, if any), Scope 3 major (partner carriers).",
    section7Detail2: "CSRD (Corporate Sustainability Reporting Directive): Mandatory for large EU companies from 2024, progressive expansion. Who: >250 employees OR >€40M turnover OR >€20M assets. Includes double materiality (impact on company AND impact on environment). Annual audited report, compliant with ESRS (European Sustainability Reporting Standards).",
    section7Detail3: "What to report for clients: Total emissions per period (tCO2e), emission intensity (g CO2/tonne-km or per shipment), breakdown by transport mode, YoY trend and progress vs. targets, and held certifications/accreditations.",
    section7Detail4: "Report format per transport: Transport ID, origin-destination, distance, weight, transport mode, vehicle type/Euro standard, fuel, emission factor used, calculated emissions (kg CO2), and offset option. Automate in TMS for efficiency.",
    section7Detail5: "Reporting best practices: Annual sustainability report (even if not mandatory). Dashboard for clients with cumulative emissions. Transparency in methodology (GLEC, data source). Public targets and progress. CDP participation for institutional visibility.",

    // Section 8: Carbon Offsetting
    section8Title: "Emission Offsetting (Carbon Offsetting)",
    section8Content: "Offsetting allows neutralization of residual emissions, but does not replace real reduction. Use as complementary, not primary measure.",
    section8Detail1: "Offsetting principle: You finance projects that capture or avoid emissions equivalent to your own. 1 tonne CO2 emitted = 1 carbon credit bought from certified project. Result: neutrality on paper (but atmosphere still received your CO2).",
    section8Detail2: "Types of offset projects: Nature-based: Reforestation (€5-20/tCO2), forest protection REDD+ (€10-30/tCO2), mangrove restoration (€15-40/tCO2). Technology-based: Renewable energy in developing countries (€3-15/tCO2), methane capture from waste (€8-25/tCO2), efficient stoves Africa (€5-15/tCO2). Carbon capture: Direct Air Capture - DAC (€200-600/tCO2) - cleanest but very expensive.",
    section8Detail3: "Offset quality standards: Gold Standard (strictest, demonstrated social co-benefits). Verified Carbon Standard - VCS/Verra (largest volume, rigorous). Climate Action Reserve (USA, forestry). American Carbon Registry. Plan Vivo (community forestry). Avoid: credits without recognized certification, projects with dubious additionality.",
    section8Detail4: "Offset process for clients: 1) Calculate emissions per transport (GLEC). 2) Offer offset option (+€X per transport or per tCO2). 3) Purchase certified credits at cumulative volume. 4) Provide offset certificate per transport or aggregated. 5) Retire credits in registry (avoid double counting).",
    section8Detail5: "Valid criticism and limitations: Many projects would have existed anyway (non-additionality). Questionable permanence (forest can burn). Inconsistent carbon accounting between standards. Greenwashing when offsetting replaces reduction. Recommendation: 80% effort on reduction, 20% offset for rest. Prefer Gold Standard or DAC.",

    // Section 9: Client Requirements
    section9Title: "Client Requirements and Tenders",
    section9Content: "Sustainability has become a qualification criterion in most major tenders. Early preparation is essential.",
    section9Detail1: "Trends in RFPs (requests for proposals): 70%+ of large company tenders include sustainability criteria. Typical weighting: 10-30% of total score. Some are 'gate' (eliminating) - without certification = disqualification. Sectors with strict requirements: FMCG, retail, automotive, pharma, tech.",
    section9Detail2: "Typical tender requirements: CO2 calculation and reporting per transport (mandatory). Fleet minimum Euro 6 (or Euro 5 with upgrade plan). ISO 14001 certification or equivalent (often mandatory). Emission reduction targets for 3-5 years. Periodic reporting (monthly/quarterly) of emissions. Green options (rail, LNG, HVO) available.",
    section9Detail3: "How to respond effectively: Dedicated sustainability section in proposal. Present current capabilities and development plan clearly. Offer options: Standard, Green (rail/LNG), Premium Green (HVO/offset). Include emissions calculation for specific tender volumes. Show your trend and targets for 3-5 years.",
    section9Detail4: "Pricing for green options: LNG: +2-5% vs. diesel (variable with gas price). HVO: +15-25% vs. diesel (depending on availability). Rail/intermodal: 0% to -10% (can be cheaper for long distances!). Offset: +€2-10 per transport (depending on distance and weight). Communicate price structure transparently.",
    section9Detail5: "Competitive differentiation: Sustainability is no longer 'nice to have' - it is table stakes. Companies without clear strategy lose tenders. Those with superior capabilities win contracts and can justify premium. First-mover advantage in green transition attracts leading clients.",

    // Section 10: Sustainable Future
    section10Title: "The Sustainable Future of Logistics",
    section10Content: "EU regulations and market trends are accelerating the green transition. Strategic preparation now ensures long-term competitiveness.",
    section10Detail1: "EU targets - European Green Deal: -55% transport emissions by 2030 vs. 1990 (Fit for 55). Climate neutrality 2050 (legal target). Zero pollution of air, water, soil by 2050. Circularity and biodiversity restoration.",
    section10Detail2: "Fit for 55 - transport implications: ETS2 for road transport from 2027 (detailed earlier). CO2 emission standards for heavy-duty vehicles: -45% in 2030, -65% in 2035, -90% in 2040 vs. 2019. Alternative fuels infrastructure (AFIR): charging stations every 60km on TEN-T, hydrogen every 200km. Energy directives revision (RED III): more ambitious renewable energy targets.",
    section10Detail3: "Long trains and rail infrastructure: 740m trains on TEN-T corridors = +25% capacity without new infrastructure. Rail digitalization (ERTMS) for more capacity and reliability. Single European Railway Area for cross-border simplification. New and expanded intermodal terminals.",
    section10Detail4: "Hydrogen corridors and electrification: H2 stations on TEN-T core network by 2030 (AFIR). Highway electrification (overhead lines) in tests (Germany, Sweden). Megawatt charging for electric trucks (MCS) in standardization. Massive investments in green hydrogen production (REPowerEU).",
    section10Detail5: "Your strategy for 2025-2030: Build CO2 reporting capabilities immediately. Develop relationships with intermodal operators and green fleet carriers. Include carbon cost scenarios in all long-term contracts. Invest in certifications (ISO 14001, Lean & Green). Position yourself as green transition partner for clients. Anticipate, do not react.",

    // Comparison Table
    tableTitle: "Emission Comparison by Transport Mode",
    tableHeader1: "Transport Mode",
    tableHeader2: "gCO2/tonne-km",
    tableHeader3: "Reduction vs. Truck",
    tableHeader4: "Availability",
    tableRow1: "Diesel Truck Euro 6 | 62-80 | Reference | Universal",
    tableRow2: "LNG Truck | 50-65 | -15-20% | Good (corridors)",
    tableRow3: "HVO Truck | 6-10 | -85-90% | Limited (premium)",
    tableRow4: "Electric Truck | 0* | -100%* | Urban",
    tableRow5: "Train | 18-22 | -70% | TEN-T corridors",
    tableRow6: "Short Sea | 10-16 | -75-85% | Coastal",
    tableRow7: "Intermodal Road-Rail | 25-35 | -50-60% | Main corridors",

    // Case Study
    caseStudyTitle: "Case Study: Emission Reduction Program -30% in 3 Years",
    caseStudyContent: "A freight forwarding company with 500 FTL transports/month implemented a comprehensive emission reduction program. Year 1: Telematics implementation for eco-driving (-8% consumption), load rate optimization from 78% to 85% (-9% emissions/tonne). Year 2: Modal shift of 15% of volumes to rail for routes >800km (-12% total), partnership with LNG fleet carriers for 20% of transports (-3%). Year 3: 10% of transports with HVO for premium clients (-2%), Lean & Green 3-star certification. Total result: -34% emissions per tonne-km transported, with similar operating costs (efficiency savings compensated for green premium). Major clients stayed and new ones came specifically for green capabilities.",

    // Checklist
    checklistTitle: "Sustainability Checklist for Freight Forwarders",
    checklistItem1: "Do we have capability to calculate and report CO2 emissions per transport (GLEC)?",
    checklistItem2: "Do we know the Euro standard and fuel type of our carriers?",
    checklistItem3: "Do we offer clients green options (rail, LNG, HVO)?",
    checklistItem4: "Do we have or are we in process of ISO 14001 or Lean & Green certification?",
    checklistItem5: "Do we monitor and report emission trends annually?",
    checklistItem6: "Have we evaluated the impact of ETS2 on pricing?",
    checklistItem7: "Do we have concrete emission reduction targets for 3-5 years?",
    checklistItem8: "Can we provide offset certificates for clients who request them?",
    checklistItem9: "Do we have partnerships with intermodal operators for modal shift?",
    checklistItem10: "Is sales team trained to present green capabilities?",

    // Glossary
    glossaryTitle: "Green Logistics Glossary",
    glossaryTerm1: "Carbon Footprint",
    glossaryDef1: "Total greenhouse gas emissions (in CO2e) caused by an activity, product, or transport.",
    glossaryTerm2: "GLEC Framework",
    glossaryDef2: "Global Logistics Emissions Council - international standard for calculating transport emissions.",
    glossaryTerm3: "ETS (Emissions Trading System)",
    glossaryDef3: "EU system for trading emission certificates. ETS2 for road transport from 2027.",
    glossaryTerm4: "Scope 1/2/3",
    glossaryDef4: "GHG Protocol emission categories: 1=direct, 2=energy, 3=supply chain (transport).",
    glossaryTerm5: "Carbon Offset",
    glossaryDef5: "Compensation of own emissions through financing of projects that capture or avoid CO2.",
    glossaryTerm6: "ISO 14001",
    glossaryDef6: "International standard for environmental management systems.",
    glossaryTerm7: "Lean & Green",
    glossaryDef7: "European logistics sustainability program with 5 star levels.",
    glossaryTerm8: "HVO",
    glossaryDef8: "Hydrotreated Vegetable Oil - renewable diesel with -85-90% CO2 reduction.",
    glossaryTerm9: "Well-to-Wheel (WTW)",
    glossaryDef9: "Complete emission analysis including fuel production and combustion.",
    glossaryTerm10: "EcoVadis",
    glossaryDef10: "ESG supplier rating platform widely used in supply chain.",
    
    bestPracticesTitle: "Best Practices",
    bestPractice1: "Implement a CO2 monitoring and reporting system for each transport",
    bestPractice2: "Proactively offer emission reports to clients - become a partner in their sustainability goals",
    bestPractice3: "Invest in eco-driving training for partner carriers - mutual benefits",
    bestPractice4: "Build a portfolio of green options (intermodal, LNG, HVO) to meet diverse requirements",
    bestPractice5: "Set 3-5 year reduction targets and communicate them transparently to clients",

    commonMistakesTitle: "Common Mistakes",
    commonMistake1: "Ignoring customer sustainability requirements until it's too late for tenders",
    commonMistake2: "Inaccurate reporting or greenwashing - destroys trust and exposes to reputation risks",
    commonMistake3: "Lack of long-term strategy for transition to green fleet",
    commonMistake4: "Underestimating the financial impact of ETS2 and climate requirements",
    commonMistake5: "Treating sustainability as cost, not as differentiation and value opportunity",
    quizTitle: "Sustainability Quiz",
  },
};
