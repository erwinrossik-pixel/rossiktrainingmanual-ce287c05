import { TranslatedQuizQuestion } from '../../quizTranslations';

export const highValueGoodsComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce se consideră marfă de înaltă valoare în transport?",
      de: "Was gilt als hochwertige Fracht im Transport?",
      en: "What is considered high-value cargo in transport?"
    },
    options: {
      ro: ["Doar aur", "Mărfuri cu valoare ridicată per kg: electronice, pharma, luxe, piese auto premium", "Doar diamante", "Doar bani cash"],
      de: ["Nur Gold", "Güter mit hohem Wert pro kg: Elektronik, Pharma, Luxus, Premium-Autoteile", "Nur Diamanten", "Nur Bargeld"],
      en: ["Only gold", "Goods with high value per kg: electronics, pharma, luxury, premium auto parts", "Only diamonds", "Only cash"]
    },
    correctIndex: 1,
    explanation: {
      ro: "High-value: valoare >50-100€/kg. Include electronice (telefoane, laptopuri), medicamente, cosmetice, fashion de lux, componente auto speciale.",
      de: "High-Value: Wert >50-100€/kg. Umfasst Elektronik (Telefone, Laptops), Medikamente, Kosmetik, Luxusmode, spezielle Autoteile.",
      en: "High-value: value >€50-100/kg. Includes electronics (phones, laptops), medicines, cosmetics, luxury fashion, special auto components."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "De ce CMR standard nu e suficient pentru mărfuri de înaltă valoare?",
      de: "Warum ist Standard-CMR für hochwertige Güter nicht ausreichend?",
      en: "Why is standard CMR not sufficient for high-value goods?"
    },
    options: {
      ro: ["Este suficient", "Limita de 8,33 SDR/kg acoperă doar fracțiune din valoarea reală", "Doar în afara UE", "Doar pentru ADR"],
      de: ["Es ist ausreichend", "Limit von 8,33 SZR/kg deckt nur Bruchteil des realen Wertes", "Nur außerhalb EU", "Nur für ADR"],
      en: ["It is sufficient", "The 8.33 SDR/kg limit covers only a fraction of real value", "Only outside EU", "Only for ADR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Exemplu: 100 iPhone-uri = 50kg, valoare 100.000€. CMR acoperă 50kg × 10€ = 500€. Diferență de 99.500€ neacoperită!",
      de: "Beispiel: 100 iPhones = 50kg, Wert 100.000€. CMR deckt 50kg × 10€ = 500€. Differenz von 99.500€ ungedeckt!",
      en: "Example: 100 iPhones = 50kg, value €100,000. CMR covers 50kg × €10 = €500. Difference of €99,500 uncovered!"
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce măsuri de securitate sunt necesare pentru transport high-value?",
      de: "Welche Sicherheitsmaßnahmen sind für High-Value-Transport notwendig?",
      en: "What security measures are needed for high-value transport?"
    },
    options: {
      ro: ["Niciuna specială", "Vehicul securizat, GPS real-time, protocol parcare, vetting șofer, comunicare codificată", "Doar asigurare", "Doar sigilii"],
      de: ["Keine besonderen", "Gesichertes Fahrzeug, Echtzeit-GPS, Parkprotokoll, Fahrer-Vetting, kodierte Kommunikation", "Nur Versicherung", "Nur Siegel"],
      en: ["None special", "Secured vehicle, real-time GPS, parking protocol, driver vetting, coded communication", "Only insurance", "Only seals"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Security package: vehicul cu sisteme anti-efracție, tracking 24/7, parcări securizate obligatorii, șofer verificat, comunicare discretă despre conținut.",
      de: "Sicherheitspaket: Fahrzeug mit Einbruchschutzsystemen, 24/7-Tracking, obligatorische sichere Parkplätze, verifizierter Fahrer, diskrete Kommunikation über Inhalt.",
      en: "Security package: vehicle with anti-theft systems, 24/7 tracking, mandatory secure parking, vetted driver, discreet communication about contents."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Transport 2M€ electronice consumer de la Shanghai la București. Risk assessment și pricing complet?",
      de: "Transport 2M€ Consumer-Elektronik von Shanghai nach Bukarest. Vollständiges Risk Assessment und Pricing?",
      en: "Transporting €2M consumer electronics from Shanghai to Bucharest. Complete risk assessment and pricing?"
    },
    options: {
      ro: ["Preț standard + 5%", "Analiză rute (aerian/maritim/rutier), securitate pe segment, asigurare all-risk, escort opțional, premium 20-30%", "Doar asigurare CMR", "Refuz transport"],
      de: ["Standardpreis + 5%", "Routenanalyse (Luft/See/Straße), Sicherheit pro Segment, All-Risk-Versicherung, optionale Eskorte, 20-30% Aufschlag", "Nur CMR-Versicherung", "Transport ablehnen"],
      en: ["Standard price + 5%", "Route analysis (air/sea/road), security per segment, all-risk insurance, optional escort, 20-30% premium", "Only CMR insurance", "Refuse transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multimodal high-value: security per segment, transbordări minimizate, asigurare all-risk 2M€, tracking end-to-end, protocol incident, pricing +20-30%.",
      de: "Multimodales High-Value: Sicherheit pro Segment, minimierte Umladungen, All-Risk-Versicherung 2M€, End-to-End-Tracking, Vorfallprotokoll, Pricing +20-30%.",
      en: "Multimodal high-value: security per segment, minimized transhipments, all-risk insurance €2M, end-to-end tracking, incident protocol, pricing +20-30%."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Care sunt cele mai frecvente ținte pentru furt în transport?",
      de: "Was sind die häufigsten Diebstahlziele im Transport?",
      en: "What are the most frequent theft targets in transport?"
    },
    options: {
      ro: ["Cereale", "Electronice, tutun, alcool, parfumuri, îmbrăcăminte de brand, metale prețioase", "Mobilă", "Materiale construcții"],
      de: ["Getreide", "Elektronik, Tabak, Alkohol, Parfüm, Markenkleidung, Edelmetalle", "Möbel", "Baumaterialien"],
      en: ["Grains", "Electronics, tobacco, alcohol, perfumes, brand clothing, precious metals", "Furniture", "Construction materials"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Top ținte furt: smartphone-uri, laptopuri, țigări, băuturi spirtoase, cosmetice premium, fashion luxury - ușor de revândut, greu de trasat.",
      de: "Top Diebstahlziele: Smartphones, Laptops, Zigaretten, Spirituosen, Premium-Kosmetik, Luxusmode - leicht weiterzuverkaufen, schwer rückverfolgbar.",
      en: "Top theft targets: smartphones, laptops, cigarettes, spirits, premium cosmetics, luxury fashion - easy to resell, hard to trace."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Ce protocoale de parcare sunt necesare pentru high-value?",
      de: "Welche Parkprotokolle sind für High-Value notwendig?",
      en: "What parking protocols are needed for high-value?"
    },
    options: {
      ro: ["Oriunde disponibil", "Doar parcări securizate (gardă, cameră, iluminat), niciodată nesupravegheate, liste aprobate", "Doar autostrăzi", "Nu contează"],
      de: ["Überall verfügbar", "Nur sichere Parkplätze (Wache, Kamera, Beleuchtung), nie unbeaufsichtigt, genehmigte Listen", "Nur Autobahnen", "Egal"],
      en: ["Anywhere available", "Only secure parking (guard, camera, lighting), never unsupervised, approved lists", "Only highways", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Parcare high-value: TAPA certified sau echivalent, gard+gardă+CCTV, listă pre-aprobată de parcări, raportare locație la opriri, evitare zone de risc.",
      de: "High-Value-Parken: TAPA-zertifiziert oder gleichwertig, Zaun+Wache+CCTV, vorab genehmigte Parkplatzliste, Standortmeldung bei Stopps, Risikozonen meiden.",
      en: "High-value parking: TAPA certified or equivalent, fence+guard+CCTV, pre-approved parking list, location reporting at stops, avoid risk zones."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Client solicită transport regulat high-value (10 curse/lună, 500k€/cursă). Structurare serviciu și contract?",
      de: "Kunde fordert regelmäßigen High-Value-Transport (10 Fahrten/Monat, 500k€/Fahrt). Servicestrukturierung und Vertrag?",
      en: "Client requests regular high-value transport (10 trips/month, €500k/trip). Service structuring and contract?"
    },
    options: {
      ro: ["Contract standard", "SOP dedicat, carrier qualification, asigurare open cover, SLA-uri stricte, review-uri, pricing fix cu ajustări", "Doar pe spot", "Refuz volum"],
      de: ["Standardvertrag", "Dedizierte SOP, Carrier-Qualifikation, Open Cover-Versicherung, strenge SLAs, Reviews, Festpreis mit Anpassungen", "Nur Spot", "Volumen ablehnen"],
      en: ["Standard contract", "Dedicated SOP, carrier qualification, open cover insurance, strict SLAs, reviews, fixed pricing with adjustments", "Only spot", "Refuse volume"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Program high-value: SOP security dedicat, carrier vetting strict, asigurare 6M€ open cover, SLA (OTIF 99%), review lunar, preț premium stabil.",
      de: "High-Value-Programm: dedizierte Sicherheits-SOP, strenge Carrier-Prüfung, 6M€ Open Cover-Versicherung, SLA (OTIF 99%), monatliches Review, stabiler Premiumpreis.",
      en: "High-value program: dedicated security SOP, strict carrier vetting, €6M open cover insurance, SLA (OTIF 99%), monthly review, stable premium pricing."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este TAPA în contextul transportului securizat?",
      de: "Was ist TAPA im Kontext des gesicherten Transports?",
      en: "What is TAPA in the context of secured transport?"
    },
    options: {
      ro: ["O marcă de camioane", "Transported Asset Protection Association - standarde de securitate pentru supply chain", "O companie de asigurări", "O rută de transport"],
      de: ["Eine LKW-Marke", "Transported Asset Protection Association - Sicherheitsstandards für Supply Chain", "Eine Versicherungsgesellschaft", "Eine Transportroute"],
      en: ["A truck brand", "Transported Asset Protection Association - security standards for supply chain", "An insurance company", "A transport route"]
    },
    correctIndex: 1,
    explanation: {
      ro: "TAPA: organizație globală cu standarde de securitate. Certificări: FSR (depozite), TSR (transport), PSR (parcări). Cerută de clienți high-tech, pharma.",
      de: "TAPA: globale Organisation mit Sicherheitsstandards. Zertifizierungen: FSR (Lager), TSR (Transport), PSR (Parkplätze). Von High-Tech-, Pharma-Kunden gefordert.",
      en: "TAPA: global organization with security standards. Certifications: FSR (warehouses), TSR (transport), PSR (parking). Required by high-tech, pharma clients."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi informațiile despre conținutul high-value?",
      de: "Wie managst du Informationen über High-Value-Inhalte?",
      en: "How do you manage information about high-value contents?"
    },
    options: {
      ro: ["Comunici tuturor", "Need-to-know basis, documente neutre (nu menționează conținut), comunicare codificată", "Postezi pe social media", "Scrii pe vehicul"],
      de: ["Allen mitteilen", "Need-to-Know-Basis, neutrale Dokumente (erwähnen Inhalt nicht), kodierte Kommunikation", "Auf Social Media posten", "Auf Fahrzeug schreiben"],
      en: ["Communicate to everyone", "Need-to-know basis, neutral documents (don't mention content), coded communication", "Post on social media", "Write on vehicle"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Confidențialitate: doar persoanele esențiale știu conținutul real, CMR generic, fără logo-uri brand pe vehicul, coduri interne pentru tipuri de marfă.",
      de: "Vertraulichkeit: nur wesentliche Personen kennen echten Inhalt, generischer CMR, keine Markenlogos auf Fahrzeug, interne Codes für Warentypen.",
      en: "Confidentiality: only essential persons know real content, generic CMR, no brand logos on vehicle, internal codes for cargo types."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Incident: tentativă de furt detectată în parcarea de noapte. Procedură imediată și raportare?",
      de: "Vorfall: Diebstahlversuch auf Nachtparkplatz erkannt. Sofortverfahren und Meldung?",
      en: "Incident: theft attempt detected at night parking. Immediate procedure and reporting?"
    },
    options: {
      ro: ["Continui dimineața", "Alertă șofer securizat, apel poliție, notificare client/asigurător, documentare completă, relocare vehicul", "Ignori", "Doar raport intern"],
      de: ["Am Morgen weitermachen", "Fahrer sichern, Polizei rufen, Kunden/Versicherer benachrichtigen, vollständige Dokumentation, Fahrzeug verlagern", "Ignorieren", "Nur interner Bericht"],
      en: ["Continue in morning", "Secure driver alert, call police, notify client/insurer, complete documentation, relocate vehicle", "Ignore", "Only internal report"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Protocol incident: 1) Șofer în siguranță, 2) Poliție/security, 3) Nu mișca nimic (probe), 4) Foto/video, 5) Notificare lanț (client, asigurător), 6) Relocare securizată.",
      de: "Vorfallprotokoll: 1) Fahrer in Sicherheit, 2) Polizei/Security, 3) Nichts bewegen (Beweise), 4) Foto/Video, 5) Kettenbenachrichtigung (Kunde, Versicherer), 6) Sichere Verlagerung.",
      en: "Incident protocol: 1) Driver safe, 2) Police/security, 3) Don't move anything (evidence), 4) Photo/video, 5) Chain notification (client, insurer), 6) Secure relocation."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce echipamente anti-furt sunt recomandate pentru vehiculele high-value?",
      de: "Welche Diebstahlschutzausrüstungen werden für High-Value-Fahrzeuge empfohlen?",
      en: "What anti-theft equipment is recommended for high-value vehicles?"
    },
    options: {
      ro: ["Doar încuietoare standard", "GPS tracker ascuns, alarme multiple, încuietori speciale uși, sigilii electronice, kill switch", "Doar sigilii", "Doar cameră"],
      de: ["Nur Standardschloss", "Versteckter GPS-Tracker, mehrere Alarme, spezielle Türschlösser, elektronische Siegel, Kill Switch", "Nur Siegel", "Nur Kamera"],
      en: ["Only standard lock", "Hidden GPS tracker, multiple alarms, special door locks, electronic seals, kill switch", "Only seals", "Only camera"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Anti-theft: GPS secundar ascuns, alarmă pe uși, încuietori suplimentare, sigilii e-tracking, kill switch motor, dashcam cu backup cloud.",
      de: "Anti-Diebstahl: versteckter Zweit-GPS, Türalarm, Zusatzschlösser, E-Tracking-Siegel, Motor-Kill-Switch, Dashcam mit Cloud-Backup.",
      en: "Anti-theft: hidden secondary GPS, door alarm, additional locks, e-tracking seals, engine kill switch, dashcam with cloud backup."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Care sunt zonele de risc ridicat pentru furt în Europa?",
      de: "Welche sind Hochrisikozonen für Diebstahl in Europa?",
      en: "What are high-risk theft zones in Europe?"
    },
    options: {
      ro: ["Toate sunt sigure", "A7 Franța (sud), Italia (nord-sud), Belgia (parcări), anumite zone din UK, Spania (sud)", "Doar în afara UE", "Doar în est"],
      de: ["Alle sind sicher", "A7 Frankreich (Süd), Italien (Nord-Süd), Belgien (Parkplätze), bestimmte UK-Zonen, Spanien (Süd)", "Nur außerhalb EU", "Nur im Osten"],
      en: ["All are safe", "A7 France (south), Italy (north-south), Belgium (parking), certain UK zones, Spain (south)", "Only outside EU", "Only in east"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Hotspot-uri: A7 Lyon-Marseille, autostrada soarelui Italia, parcări Belgia, M25/M1 UK, A4 Spania sud. Evită opriri neplanificate în aceste zone.",
      de: "Hotspots: A7 Lyon-Marseille, Sonnenautobahn Italien, Parkplätze Belgien, M25/M1 UK, A4 Spanien Süd. Ungeplante Stopps in diesen Zonen vermeiden.",
      en: "Hotspots: A7 Lyon-Marseille, Italy sunshine highway, Belgium parking, M25/M1 UK, A4 Spain south. Avoid unplanned stops in these zones."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Implementare sistem de monitorizare pentru flotă high-value. Funcționalități și integrări?",
      de: "Implementierung Monitoring-System für High-Value-Flotte. Funktionalitäten und Integrationen?",
      en: "Implementing monitoring system for high-value fleet. Functionalities and integrations?"
    },
    options: {
      ro: ["Doar locație", "GPS real-time, geofencing, alertă deviație, senzori uși, temperatură, integrare control room 24/7", "Doar la final", "Fără monitorizare"],
      de: ["Nur Standort", "Echtzeit-GPS, Geofencing, Abweichungsalarm, Türsensoren, Temperatur, 24/7-Kontrollraum-Integration", "Nur am Ende", "Keine Überwachung"],
      en: ["Only location", "Real-time GPS, geofencing, deviation alert, door sensors, temperature, 24/7 control room integration", "Only at end", "No monitoring"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Monitoring high-value: GPS 30 sec refresh, geofence coridoare, alertă ieșire traseu, senzor deschidere uși, panic button, control room 24/7 cu SLA răspuns 5 min.",
      de: "High-Value-Monitoring: GPS 30 Sek. Refresh, Geofence Korridore, Routenabweichungsalarm, Türöffnungssensor, Panikknopf, 24/7-Kontrollraum mit 5 Min. Reaktions-SLA.",
      en: "High-value monitoring: GPS 30 sec refresh, geofence corridors, route deviation alert, door opening sensor, panic button, 24/7 control room with 5 min response SLA."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verificări faci la șoferul pentru transport high-value?",
      de: "Welche Überprüfungen machst du beim Fahrer für High-Value-Transport?",
      en: "What checks do you do on the driver for high-value transport?"
    },
    options: {
      ro: ["Doar permis", "Experiență, istoric (fără incidente), verificare background, training security, conștientizare risc", "Doar vârstă", "Nicio verificare"],
      de: ["Nur Führerschein", "Erfahrung, Historie (keine Vorfälle), Background-Check, Sicherheitstraining, Risikobewusstsein", "Nur Alter", "Keine Prüfung"],
      en: ["Only license", "Experience, history (no incidents), background check, security training, risk awareness", "Only age", "No verification"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Driver vetting: minim 2 ani experiență, verificare istorie (angajări anterioare), background check, training proceduri security, briefing specific cursă.",
      de: "Fahrer-Vetting: mindestens 2 Jahre Erfahrung, Historienprüfung (frühere Anstellungen), Background-Check, Sicherheitsverfahrenstraining, kursspezifisches Briefing.",
      en: "Driver vetting: minimum 2 years experience, history check (previous employments), background check, security procedures training, trip-specific briefing."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum structurezi pricing-ul pentru servicii high-value?",
      de: "Wie strukturierst du Pricing für High-Value-Dienste?",
      en: "How do you structure pricing for high-value services?"
    },
    options: {
      ro: ["Preț standard per km", "Cost bază + premium securitate (10-25%) + asigurare dedicată + overhead security", "Cel mai mic preț", "Doar per valoare"],
      de: ["Standardpreis pro km", "Basiskosten + Sicherheitsprämie (10-25%) + dedizierte Versicherung + Sicherheits-Overhead", "Niedrigster Preis", "Nur pro Wert"],
      en: ["Standard price per km", "Base cost + security premium (10-25%) + dedicated insurance + security overhead", "Lowest price", "Only per value"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pricing high-value: cost transport + 15-25% premium security + cost asigurare all-risk + overhead (monitoring, proceduri). Nu concura pe preț, concurează pe siguranță!",
      de: "High-Value-Pricing: Transportkosten + 15-25% Sicherheitsprämie + All-Risk-Versicherungskosten + Overhead (Monitoring, Verfahren). Nicht über Preis, über Sicherheit konkurrieren!",
      en: "High-value pricing: transport cost + 15-25% security premium + all-risk insurance cost + overhead (monitoring, procedures). Don't compete on price, compete on safety!"
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Dezvoltare parteneriat cu producător electronice pentru toate transporturile Europa (50M€/an). Propunere completă?",
      de: "Partnerschaftsentwicklung mit Elektronikhersteller für alle Europa-Transporte (50M€/Jahr). Vollständiger Vorschlag?",
      en: "Developing partnership with electronics manufacturer for all Europe transports (€50M/year). Complete proposal?"
    },
    options: {
      ro: ["Doar lista de prețuri", "Soluție end-to-end: security standards, carrier network certificat, insurance program, IT integration, governance, KPIs", "Doar câteva rute", "Doar transport simplu"],
      de: ["Nur Preisliste", "End-to-End-Lösung: Sicherheitsstandards, zertifiziertes Carrier-Netzwerk, Versicherungsprogramm, IT-Integration, Governance, KPIs", "Nur einige Routen", "Nur einfacher Transport"],
      en: ["Only price list", "End-to-end solution: security standards, certified carrier network, insurance program, IT integration, governance, KPIs", "Only some routes", "Only simple transport"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Propunere strategică: TAPA TSR nivel A, carrier pool pre-validat, open cover 10M€/transport, API integrare tracking, governance committee, SLA 99.5% OTIF.",
      de: "Strategischer Vorschlag: TAPA TSR Level A, vorvalidierter Carrier-Pool, Open Cover 10M€/Transport, API-Tracking-Integration, Governance-Komitee, SLA 99,5% OTIF.",
      en: "Strategic proposal: TAPA TSR level A, pre-validated carrier pool, open cover €10M/transport, API tracking integration, governance committee, SLA 99.5% OTIF."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce este un escort de securitate în transport?",
      de: "Was ist eine Sicherheitseskorte im Transport?",
      en: "What is a security escort in transport?"
    },
    options: {
      ro: ["Poliție obligatorie", "Vehicul de însoțire cu personal de securitate pentru transporturi extra-sensibile", "Doar pentru VIP-uri", "Doar în zone de război"],
      de: ["Obligatorische Polizei", "Begleitfahrzeug mit Sicherheitspersonal für besonders sensible Transporte", "Nur für VIPs", "Nur in Kriegsgebieten"],
      en: ["Mandatory police", "Accompanying vehicle with security personnel for extra-sensitive transports", "Only for VIPs", "Only in war zones"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Escort: vehicul separat cu agent(i) de securitate, folosit pentru transporturi extreme (>5M€, zone foarte riscante). Cost suplimentar semnificativ.",
      de: "Eskorte: separates Fahrzeug mit Sicherheitsagent(en), für extreme Transporte (>5M€, sehr riskante Zonen). Erhebliche Zusatzkosten.",
      en: "Escort: separate vehicle with security agent(s), used for extreme transports (>€5M, very risky zones). Significant additional cost."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum gestionezi transbordările pentru marfă high-value?",
      de: "Wie managst du Umladungen für High-Value-Fracht?",
      en: "How do you manage transhipments for high-value cargo?"
    },
    options: {
      ro: ["Oriunde disponibil", "Minimizezi, doar în locații securizate, supraveghere continuă, documentare fiecare etapă", "Nu contează", "Doar noaptea"],
      de: ["Überall verfügbar", "Minimieren, nur an gesicherten Standorten, kontinuierliche Überwachung, jede Etappe dokumentieren", "Egal", "Nur nachts"],
      en: ["Anywhere available", "Minimize, only at secured locations, continuous supervision, document each stage", "Doesn't matter", "Only at night"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Transbordări: minimizează (risc la fiecare manipulare), depozite TAPA FSR, continuitate supraveghere, chain of custody documentată, verificare sigilii.",
      de: "Umladungen: minimieren (Risiko bei jeder Handhabung), TAPA FSR-Lager, Überwachungskontinuität, dokumentierte Chain of Custody, Siegelprüfung.",
      en: "Transhipments: minimize (risk at each handling), TAPA FSR warehouses, supervision continuity, documented chain of custody, seal verification."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Audit de securitate pentru operațiuni high-value. Ce verifici și cum raportezi?",
      de: "Sicherheitsaudit für High-Value-Operationen. Was prüfst du und wie berichtest du?",
      en: "Security audit for high-value operations. What do you check and how do you report?"
    },
    options: {
      ro: ["Doar documente", "Conformitate proceduri, testare sisteme, simulări incidente, gap analysis, plan remediere, raport executiv", "Doar annual", "Fără audit"],
      de: ["Nur Dokumente", "Verfahrenskonformität, Systemtests, Vorfallsimulationen, Gap-Analyse, Remediationsplan, Executive Report", "Nur jährlich", "Kein Audit"],
      en: ["Only documents", "Procedure compliance, system testing, incident simulations, gap analysis, remediation plan, executive report", "Only annually", "No audit"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Audit security: verifică SOP-uri vs. practică reală, testează GPS/alarme, simulează scenarii furt, identifică vulnerabilități, plan corective, raport management.",
      de: "Sicherheitsaudit: SOPs vs. reale Praxis prüfen, GPS/Alarme testen, Diebstahlszenarien simulieren, Schwachstellen identifizieren, Korrekturplan, Managementbericht.",
      en: "Security audit: check SOPs vs. actual practice, test GPS/alarms, simulate theft scenarios, identify vulnerabilities, corrective plan, management report."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce rol are ambalajul în securitatea mărfurilor de valoare?",
      de: "Welche Rolle spielt Verpackung bei der Sicherheit hochwertiger Güter?",
      en: "What role does packaging play in high-value goods security?"
    },
    options: {
      ro: ["Doar protecție fizică", "Protecție + disimulare conținut + detectare manipulare (sigilii, indicatori)", "Doar estetică", "Nu contează"],
      de: ["Nur physischer Schutz", "Schutz + Inhaltsverheimlichung + Manipulationserkennung (Siegel, Indikatoren)", "Nur Ästhetik", "Egal"],
      en: ["Only physical protection", "Protection + content concealment + tamper detection (seals, indicators)", "Only aesthetics", "Doesn't matter"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Ambalaj security: cutii neutre (fără brand), sigilii anti-efracție, indicatori de manipulare (schimbă culoare), tracking integrat în ambalaj pentru premium.",
      de: "Sicherheitsverpackung: neutrale Kartons (keine Marke), Anti-Manipulations-Siegel, Manipulationsindikatoren (Farbwechsel), in Verpackung integriertes Tracking für Premium.",
      en: "Security packaging: neutral boxes (no brand), tamper-proof seals, tamper indicators (color change), tracking integrated in packaging for premium."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Cum comunici cu clientul în timpul transportului high-value?",
      de: "Wie kommunizierst du mit dem Kunden während High-Value-Transport?",
      en: "How do you communicate with client during high-value transport?"
    },
    options: {
      ro: ["Doar la final", "Update-uri regulate, portal tracking dedicat, alertă proactivă la deviații, contact de urgență 24/7", "Doar email", "Nu comunici"],
      de: ["Nur am Ende", "Regelmäßige Updates, dediziertes Tracking-Portal, proaktive Abweichungsalarmierung, 24/7-Notfallkontakt", "Nur E-Mail", "Keine Kommunikation"],
      en: ["Only at end", "Regular updates, dedicated tracking portal, proactive deviation alert, 24/7 emergency contact", "Only email", "Don't communicate"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Comunicare high-value: portal client cu tracking live, update-uri automate (încărcare, granițe, livrare), alertă imediată la orice anomalie, hotline 24/7.",
      de: "High-Value-Kommunikation: Kundenportal mit Live-Tracking, automatische Updates (Beladung, Grenzen, Lieferung), sofortige Alarmierung bei Anomalie, 24/7-Hotline.",
      en: "High-value communication: client portal with live tracking, automatic updates (loading, borders, delivery), immediate alert on any anomaly, 24/7 hotline."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Post-incident recovery: furt parțial 200.000€ din încărcătură 1M€. Procedură completă?",
      de: "Post-Incident-Recovery: Teildiebstahl 200.000€ von 1M€-Ladung. Vollständiges Verfahren?",
      en: "Post-incident recovery: partial theft €200,000 from €1M cargo. Complete procedure?"
    },
    options: {
      ro: ["Doar claim asigurare", "Asigurare raportare imediată, securizare rest marfă, investigație, comunicare client, lessons learned, îmbunătățiri", "Doar raport poliție", "Ascunzi incidentul"],
      de: ["Nur Versicherungsanspruch", "Sofortige Versicherungsmeldung, Restsicherung, Untersuchung, Kundenkommunikation, Lessons Learned, Verbesserungen", "Nur Polizeibericht", "Vorfall verstecken"],
      en: ["Only insurance claim", "Immediate insurance notification, secure remaining cargo, investigation, client communication, lessons learned, improvements", "Only police report", "Hide incident"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Recovery: 1) Claim asigurare (documente complete), 2) Securizare 800k€ rămași, 3) Investigație internă + poliție, 4) Comunicare transparentă client, 5) Root cause analysis, 6) Update proceduri.",
      de: "Recovery: 1) Versicherungsclaim (vollständige Dokumente), 2) Verbleibende 800k€ sichern, 3) Interne + Polizeiuntersuchung, 4) Transparente Kundenkommunikation, 5) Root Cause Analysis, 6) Verfahrensaktualisierung.",
      en: "Recovery: 1) Insurance claim (complete documents), 2) Secure remaining €800k, 3) Internal + police investigation, 4) Transparent client communication, 5) Root cause analysis, 6) Update procedures."
    }
  }
];
