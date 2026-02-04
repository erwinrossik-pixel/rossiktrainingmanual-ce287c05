import { TranslatedQuizQuestion } from '../../quizTranslations';

export const checklistsComprehensiveQuestions: TranslatedQuizQuestion[] = [
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verifici înainte de a confirma o comandă de transport?",
      de: "Was prüfst du vor Bestätigung eines Transportauftrags?",
      en: "What do you check before confirming a transport order?"
    },
    options: {
      ro: ["Doar prețul", "Date complete (adrese, contact), cerințe speciale, disponibilitate carrier, termene, preț agreat", "Doar dacă ai camion", "Nimic special"],
      de: ["Nur Preis", "Vollständige Daten (Adressen, Kontakt), Sonderanforderungen, Carrier-Verfügbarkeit, Fristen, vereinbarter Preis", "Nur ob LKW hast", "Nichts Besonderes"],
      en: ["Only price", "Complete data (addresses, contact), special requirements, carrier availability, deadlines, agreed price", "Only if you have truck", "Nothing special"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pre-confirmare: adrese exacte cu cod poștal, persoane contact ambele capete, cerințe (haion, ADR, reefer), carrier disponibil, preț confirmat, documente necesare identificate.",
      de: "Vor Bestätigung: genaue Adressen mit PLZ, Kontaktpersonen an beiden Enden, Anforderungen (Ladebordwand, ADR, Reefer), Carrier verfügbar, Preis bestätigt, benötigte Dokumente identifiziert.",
      en: "Pre-confirmation: exact addresses with postal code, contact persons at both ends, requirements (tailgate, ADR, reefer), carrier available, price confirmed, required documents identified."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Checklist documente pentru transport internațional standard?",
      de: "Dokumenten-Checkliste für Standard-Internationaltransport?",
      en: "Document checklist for standard international transport?"
    },
    options: {
      ro: ["Doar CMR", "CMR, factură comercială, packing list, instrucțiuni speciale, contact urgență", "Doar factură", "Depinde"],
      de: ["Nur CMR", "CMR, Handelsrechnung, Packliste, Sonderanweisungen, Notfallkontakt", "Nur Rechnung", "Kommt drauf an"],
      en: ["Only CMR", "CMR, commercial invoice, packing list, special instructions, emergency contact", "Only invoice", "Depends"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Documente standard: CMR (4 exemplare), factură comercială (export), packing list (ce e în camion), instrucțiuni pentru șofer, contact de urgență ambele părți.",
      de: "Standarddokumente: CMR (4 Exemplare), Handelsrechnung (Export), Packliste (was im LKW ist), Fahreranweisungen, Notfallkontakt beider Seiten.",
      en: "Standard documents: CMR (4 copies), commercial invoice (export), packing list (what's in truck), driver instructions, emergency contact both parties."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Verificări la primirea unui nou carrier în baza de date?",
      de: "Prüfungen bei Aufnahme eines neuen Carriers in die Datenbank?",
      en: "Checks when onboarding a new carrier to database?"
    },
    options: {
      ro: ["Doar email", "Licență transport, asigurare CMR, certificat înmatriculare, IBAN, contract cadru semnat", "Doar telefon", "Doar website"],
      de: ["Nur E-Mail", "Transportlizenz, CMR-Versicherung, Zulassungsbescheinigung, IBAN, unterschriebener Rahmenvertrag", "Nur Telefon", "Nur Website"],
      en: ["Only email", "Transport license, CMR insurance, registration certificate, IBAN, signed framework contract", "Only phone", "Only website"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Onboarding carrier: licență transport validă (verifică data), asigurare CMR (acoperire suficientă), date bancare verificate, contract cadru cu termeni clari, referințe dacă posibil.",
      de: "Carrier-Onboarding: gültige Transportlizenz (Datum prüfen), CMR-Versicherung (ausreichende Deckung), verifizierte Bankdaten, Rahmenvertrag mit klaren Bedingungen, Referenzen wenn möglich.",
      en: "Carrier onboarding: valid transport license (check date), CMR insurance (sufficient coverage), verified bank details, framework contract with clear terms, references if possible."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Checklist complet pentru transport ADR (marfă periculoasă)?",
      de: "Vollständige Checkliste für ADR-Transport (Gefahrgut)?",
      en: "Complete checklist for ADR transport (dangerous goods)?"
    },
    options: {
      ro: ["La fel ca normal", "Certificat ADR șofer, echipament obligatoriu, plăci ADR, documente speciale, restricții rute/tuneluri", "Doar etichetă pe marfă", "Doar CMR"],
      de: ["Gleich wie normal", "ADR-Fahrerzertifikat, Pflichtausrüstung, ADR-Tafeln, Sonderdokumente, Routen-/Tunnelbeschränkungen", "Nur Etikett auf Ware", "Nur CMR"],
      en: ["Same as normal", "Driver ADR certificate, mandatory equipment, ADR plates, special documents, route/tunnel restrictions", "Only label on goods", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "ADR checklist: certificat ADR șofer valid, echipament (stingătoare, EPI, instrucțiuni scrise), plăci portocalii corecte, doc. transport ADR, verificare tuneluri/traversări interzise.",
      de: "ADR-Checkliste: gültiges Fahrer-ADR-Zertifikat, Ausrüstung (Feuerlöscher, PSA, schriftliche Anweisungen), korrekte orange Tafeln, ADR-Transportdokument, Prüfung verbotener Tunnel/Durchfahrten.",
      en: "ADR checklist: valid driver ADR certificate, equipment (extinguishers, PPE, written instructions), correct orange plates, ADR transport document, check prohibited tunnels/crossings."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verifici când primești un CMR completat de la descărcare?",
      de: "Was prüfst du wenn du einen ausgefüllten CMR von der Entladung erhältst?",
      en: "What do you check when receiving a completed CMR from unloading?"
    },
    options: {
      ro: ["Doar semnătura", "Semnătură și ștampilă destinatar, rezerve dacă există, data descărcării, concordanță cu original", "Doar data", "Nimic"],
      de: ["Nur Unterschrift", "Unterschrift und Stempel Empfänger, Vorbehalte wenn vorhanden, Entladedatum, Übereinstimmung mit Original", "Nur Datum", "Nichts"],
      en: ["Only signature", "Recipient signature and stamp, reserves if any, unloading date, match with original", "Only date", "Nothing"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificare CMR returnat: semnătură + ștampilă destinatar în câmpul 24, verifică rezerve (daune?), data efectivă de descărcare, toate paginile prezente, concordă cu originalul.",
      de: "CMR-Rückgabeprüfung: Unterschrift + Stempel Empfänger in Feld 24, Vorbehalte prüfen (Schäden?), tatsächliches Entladedatum, alle Seiten vorhanden, stimmt mit Original überein.",
      en: "CMR return check: signature + stamp recipient in field 24, check reserves (damages?), actual unloading date, all pages present, matches original."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Checklist pentru transport frigorific (reefer)?",
      de: "Checkliste für Kühltransport (Reefer)?",
      en: "Checklist for refrigerated transport (reefer)?"
    },
    options: {
      ro: ["Doar temperatura", "Pre-cooling verificat, temperatură setată, înregistrator funcțional, verificare la încărcare, interval printout", "Doar frigorifer merge", "Ca la normal"],
      de: ["Nur Temperatur", "Vorkühlung geprüft, Temperatur eingestellt, Recorder funktional, Kontrolle bei Beladung, Printout-Intervall", "Nur ob Kühlung läuft", "Wie normal"],
      en: ["Only temperature", "Pre-cooling verified, temperature set, recorder functional, check at loading, printout interval", "Only if fridge works", "Same as normal"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Reefer checklist: pre-cooling la temperatura cerută ÎNAINTE de încărcare, setare corectă, înregistrator cu hârtie, verificare la încărcare, interval printout stabilit, contact pentru alarme.",
      de: "Reefer-Checkliste: Vorkühlung auf geforderte Temperatur VOR Beladung, korrekte Einstellung, Recorder mit Papier, Kontrolle bei Beladung, Printout-Intervall festgelegt, Alarmkontakt.",
      en: "Reefer checklist: pre-cooling to required temperature BEFORE loading, correct setting, recorder with paper, check at loading, printout interval set, contact for alarms."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Checklist complet end-of-day pentru disponent?",
      de: "Vollständige End-of-Day-Checkliste für Disponenten?",
      en: "Complete end-of-day checklist for dispatcher?"
    },
    options: {
      ro: ["Doar închizi PC-ul", "Status toate transporturi, probleme escaladate, documente trimise, pregătire ziua următoare, predare coleg", "Doar email", "Nu e nevoie"],
      de: ["Nur PC herunterfahren", "Status aller Transporte, eskalierte Probleme, gesendete Dokumente, Vorbereitung nächster Tag, Übergabe an Kollegen", "Nur E-Mail", "Nicht nötig"],
      en: ["Only shut down PC", "Status all transports, escalated problems, documents sent, next day preparation, handover to colleague", "Only email", "Not needed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "End-of-day: status fiecare transport în curs, probleme deschise escaladate/documentate, documente trimise clienților, briefing pentru ziua următoare, predare detaliată la colegul de schimb.",
      de: "End-of-Day: Status jedes laufenden Transports, offene Probleme eskaliert/dokumentiert, Dokumente an Kunden gesendet, Briefing für nächsten Tag, detaillierte Übergabe an Schichtkollegen.",
      en: "End-of-day: status of each ongoing transport, open problems escalated/documented, documents sent to clients, briefing for next day, detailed handover to shift colleague."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verifici la un camion înainte de a-l aloca pe transport?",
      de: "Was prüfst du an einem LKW vor der Transportzuteilung?",
      en: "What do you check on a truck before allocating it to transport?"
    },
    options: {
      ro: ["Doar disponibilitate", "Poziție curentă, timp rămas șofer, tip vehicul potrivit, echipament necesar, stare tehnică", "Doar culoare", "Doar vârstă"],
      de: ["Nur Verfügbarkeit", "Aktuelle Position, verbleibende Fahrerzeit, passender Fahrzeugtyp, erforderliche Ausrüstung, technischer Zustand", "Nur Farbe", "Nur Alter"],
      en: ["Only availability", "Current position, driver remaining time, suitable vehicle type, required equipment, technical condition", "Only color", "Only age"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pre-alocare camion: unde e acum, cât timp are șoferul disponibil (tahograf), tip potrivit (tonaj, dimensiuni), echipament (haion, prelată, etc.), ITP/revizii în regulă.",
      de: "Vor LKW-Zuteilung: wo ist er jetzt, wie viel Zeit hat Fahrer (Tachograph), passender Typ (Tonnage, Maße), Ausrüstung (Ladebordwand, Plane, etc.), HU/Inspektionen in Ordnung.",
      en: "Pre-truck allocation: where is it now, how much driver time available (tachograph), suitable type (tonnage, dimensions), equipment (tailgate, tarp, etc.), inspections in order."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Checklist pentru verificarea unui nou client înainte de prima comandă?",
      de: "Checkliste zur Prüfung eines Neukunden vor erstem Auftrag?",
      en: "Checklist for verifying a new client before first order?"
    },
    options: {
      ro: ["Doar email valid", "Verificare firmă (CUI), credit check, termene plată stabilite, contract semnat, limite credit setate", "Doar telefon", "Doar website"],
      de: ["Nur gültige E-Mail", "Firmenprüfung (ID), Kreditprüfung, festgelegte Zahlungsfristen, unterschriebener Vertrag, Kreditlimits gesetzt", "Nur Telefon", "Nur Website"],
      en: ["Only valid email", "Company verification (ID), credit check, payment terms established, signed contract, credit limits set", "Only phone", "Only website"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Verificare client nou: existență în registru comerț, rating credit (Coface, D&B), termene de plată negociate și documentate, contract/comandă semnată, limită credit în sistem.",
      de: "Neukunden-Prüfung: Existenz im Handelsregister, Kredit-Rating (Coface, D&B), verhandelte und dokumentierte Zahlungsfristen, unterschriebener Vertrag/Auftrag, Kreditlimit im System.",
      en: "New client verification: existence in trade register, credit rating (Coface, D&B), negotiated and documented payment terms, signed contract/order, credit limit in system."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Audit intern anual: ce verifici pentru conformitatea operațiunilor de transport?",
      de: "Jährliches internes Audit: was prüfst du für Transportoperationen-Compliance?",
      en: "Annual internal audit: what do you check for transport operations compliance?"
    },
    options: {
      ro: ["Doar cifre", "Licențe valide, polițe actualizate, contracte în ordine, proceduri respectate, training completat", "Doar profit", "Doar clienți"],
      de: ["Nur Zahlen", "Gültige Lizenzen, aktualisierte Policen, Verträge in Ordnung, Verfahren eingehalten, Training absolviert", "Nur Gewinn", "Nur Kunden"],
      en: ["Only numbers", "Valid licenses, updated policies, contracts in order, procedures followed, training completed", "Only profit", "Only clients"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Audit compliance: licențe transport/ADR valide, asigurări actualizate, contracte semnate cu toți partenerii, proceduri documentate și respectate, evidență training angajați.",
      de: "Compliance-Audit: gültige Transport-/ADR-Lizenzen, aktualisierte Versicherungen, mit allen Partnern unterschriebene Verträge, dokumentierte und befolgte Verfahren, Mitarbeiter-Trainingsnachweis.",
      en: "Compliance audit: valid transport/ADR licenses, updated insurance, signed contracts with all partners, documented and followed procedures, employee training records."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce include un checklist de pregătire pentru transport agabaritic?",
      de: "Was enthält eine Checkliste zur Vorbereitung für Schwertransport?",
      en: "What does a checklist for oversized transport preparation include?"
    },
    options: {
      ro: ["La fel ca normal", "Autorizații per țară, rută validată, escortă dacă necesar, orare restricții, vehicul adecvat", "Doar autorizație", "Doar camion mare"],
      de: ["Gleich wie normal", "Genehmigungen pro Land, validierte Route, Begleitung wenn nötig, Einschränkungszeiten, geeignetes Fahrzeug", "Nur Genehmigung", "Nur großer LKW"],
      en: ["Same as normal", "Permits per country, validated route, escort if needed, restriction schedules, suitable vehicle", "Only permit", "Only big truck"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Agabaritic checklist: autorizații pentru fiecare țară tranzitată, rută verificată (poduri, tuneluri, girații), escortă conform cerințelor, orare permise de circulație, vehicul omologat.",
      de: "Schwertransport-Checkliste: Genehmigungen für jedes Transitland, geprüfte Route (Brücken, Tunnel, Kreisverkehre), Begleitung nach Anforderungen, erlaubte Fahrzeiten, homologiertes Fahrzeug.",
      en: "Oversized checklist: permits for each transit country, verified route (bridges, tunnels, roundabouts), escort per requirements, allowed circulation times, homologated vehicle."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Checklist pentru verificare săptămânală a performanței carrier?",
      de: "Checkliste für wöchentliche Carrier-Leistungsprüfung?",
      en: "Checklist for weekly carrier performance review?"
    },
    options: {
      ro: ["Doar prețuri", "On-time delivery %, reclamații, documentație completă, comunicare, comportament șoferi", "Doar facturi", "Nu e nevoie"],
      de: ["Nur Preise", "Pünktliche Lieferung %, Reklamationen, vollständige Dokumentation, Kommunikation, Fahrerverhalten", "Nur Rechnungen", "Nicht nötig"],
      en: ["Only prices", "On-time delivery %, complaints, complete documentation, communication, driver behavior", "Only invoices", "Not needed"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Performance review: procent livrări la timp, număr și tip reclamații, calitatea documentației returnate, receptivitate comunicare, feedback de la clienți despre șoferi.",
      de: "Leistungsprüfung: Prozent pünktliche Lieferungen, Anzahl und Art Reklamationen, Qualität zurückgegebener Dokumentation, Kommunikationsbereitschaft, Kundenfeedback über Fahrer.",
      en: "Performance review: on-time delivery percentage, number and type of complaints, quality of returned documentation, communication responsiveness, client feedback about drivers."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Checklist complet pentru pregătirea unui transport multimodal (road + sea)?",
      de: "Vollständige Checkliste für Vorbereitung eines multimodalen Transports (Straße + See)?",
      en: "Complete checklist for preparing a multimodal transport (road + sea)?"
    },
    options: {
      ro: ["La fel ca normal", "Booking ferry/container, documente maritime, compatibilitate vehicul/container, timing coordonat, asigurare multimodal", "Doar booking", "Doar CMR"],
      de: ["Gleich wie normal", "Fähre/Container-Buchung, Schiffsdokumente, Fahrzeug-/Container-Kompatibilität, koordiniertes Timing, multimodale Versicherung", "Nur Buchung", "Nur CMR"],
      en: ["Same as normal", "Ferry/container booking, maritime documents, vehicle/container compatibility, coordinated timing, multimodal insurance", "Only booking", "Only CMR"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Multimodal checklist: booking confirmat (ferry/container), documente maritime (B/L dacă e cazul), verificare compatibilitate, timing sincronizat (cut-off-uri), asigurare care acoperă toate segmentele.",
      de: "Multimodal-Checkliste: bestätigte Buchung (Fähre/Container), Schiffsdokumente (B/L wenn zutreffend), Kompatibilitätsprüfung, synchronisiertes Timing (Cut-offs), Versicherung die alle Segmente deckt.",
      en: "Multimodal checklist: confirmed booking (ferry/container), maritime documents (B/L if applicable), compatibility check, synchronized timing (cut-offs), insurance covering all segments."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verifici după finalizarea cu succes a unui transport?",
      de: "Was prüfst du nach erfolgreicher Transportabwicklung?",
      en: "What do you check after successful completion of a transport?"
    },
    options: {
      ro: ["Nimic, gata", "POD primit, factură emisă, documente arhivate, feedback client dacă e cazul", "Doar factură", "Doar POD"],
      de: ["Nichts, fertig", "POD erhalten, Rechnung ausgestellt, Dokumente archiviert, Kundenfeedback wenn zutreffend", "Nur Rechnung", "Nur POD"],
      en: ["Nothing, done", "POD received, invoice issued, documents archived, client feedback if applicable", "Only invoice", "Only POD"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Post-transport: POD (CMR semnat) primit și verificat, factură emisă către client, toate documentele arhivate, notă despre orice incident, follow-up satisfacție client pentru transporturi importante.",
      de: "Nach Transport: POD (unterschriebener CMR) erhalten und geprüft, Rechnung an Kunde ausgestellt, alle Dokumente archiviert, Notiz über Vorfälle, Kundenzufriedenheits-Follow-up für wichtige Transporte.",
      en: "Post-transport: POD (signed CMR) received and verified, invoice issued to client, all documents archived, note about any incidents, client satisfaction follow-up for important transports."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Checklist pentru onboarding nou disponent în echipă?",
      de: "Checkliste für Onboarding neuer Disponent im Team?",
      en: "Checklist for onboarding new dispatcher to team?"
    },
    options: {
      ro: ["Doar acces PC", "Acces sisteme, training TMS, proceduri documentate, mentor asignat, obiective clare pentru primele 90 zile", "Doar prezentare echipă", "Doar contract"],
      de: ["Nur PC-Zugang", "Systemzugang, TMS-Training, dokumentierte Verfahren, zugewiesener Mentor, klare Ziele für erste 90 Tage", "Nur Teamvorstellung", "Nur Vertrag"],
      en: ["Only PC access", "System access, TMS training, documented procedures, assigned mentor, clear goals for first 90 days", "Only team introduction", "Only contract"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Onboarding disponent: acces toate sistemele (TMS, email, telefon), training pe proceduri și TMS, manual de proceduri, mentor experimentat, plan de 30-60-90 zile cu obiective clare.",
      de: "Disponenten-Onboarding: Zugang zu allen Systemen (TMS, E-Mail, Telefon), Training zu Verfahren und TMS, Verfahrenshandbuch, erfahrener Mentor, 30-60-90-Tage-Plan mit klaren Zielen.",
      en: "Dispatcher onboarding: access to all systems (TMS, email, phone), training on procedures and TMS, procedure manual, experienced mentor, 30-60-90 day plan with clear goals."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Checklist review anual al furnizorilor (carriers) și decizie de continuare?",
      de: "Checkliste für jährliches Lieferanten-Review (Carrier) und Fortsetzungsentscheidung?",
      en: "Checklist for annual supplier (carriers) review and continuation decision?"
    },
    options: {
      ro: ["Doar preț", "Performanță operațională, financiară, reclamații, disponibilitate, comparație alternativă, negociere nouă", "Doar volum", "Doar vechime"],
      de: ["Nur Preis", "Operative, finanzielle Leistung, Reklamationen, Verfügbarkeit, Alternativvergleich, Neuverhandlung", "Nur Volumen", "Nur Dienstalter"],
      en: ["Only price", "Operational, financial performance, complaints, availability, alternative comparison, new negotiation", "Only volume", "Only seniority"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Review anual carrier: KPIs operaționali (OTD, daune), stabilitate financiară, trend reclamații, disponibilitate când ai nevoie, comparație preț/calitate vs. alternative, renegociere dacă continui.",
      de: "Jährliches Carrier-Review: operative KPIs (OTD, Schäden), finanzielle Stabilität, Reklamationstrend, Verfügbarkeit bei Bedarf, Preis-/Qualitätsvergleich vs. Alternativen, Neuverhandlung bei Fortsetzung.",
      en: "Annual carrier review: operational KPIs (OTD, damages), financial stability, complaint trend, availability when needed, price/quality comparison vs. alternatives, renegotiation if continuing."
    }
  },
  {
    difficultyLevel: 3,
    question: {
      ro: "Ce verifici înainte de a pleca acasă vineri (week-end)?",
      de: "Was prüfst du vor dem Nachhausegehen am Freitag (Wochenende)?",
      en: "What do you check before leaving Friday (weekend)?"
    },
    options: {
      ro: ["Nimic special", "Transporturi în curs OK, urgențe delegate, contact de weekend activ, clienți informați despre status", "Doar emailuri", "Doar telefon"],
      de: ["Nichts Besonderes", "Laufende Transporte OK, Dringlichkeiten delegiert, Wochenend-Kontakt aktiv, Kunden über Status informiert", "Nur E-Mails", "Nur Telefon"],
      en: ["Nothing special", "Ongoing transports OK, emergencies delegated, weekend contact active, clients informed about status", "Only emails", "Only phone"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Pre-weekend: verifică status toate transporturile active, asigură predare/delegare pentru urgențe, colegul de weekend are informațiile, clienții știu la cine sună dacă e ceva.",
      de: "Vor Wochenende: Status aller aktiven Transporte prüfen, Übergabe/Delegation für Dringlichkeiten sicherstellen, Wochenend-Kollege hat Informationen, Kunden wissen wen sie bei Bedarf anrufen.",
      en: "Pre-weekend: check status of all active transports, ensure handover/delegation for emergencies, weekend colleague has information, clients know who to call if needed."
    }
  },
  {
    difficultyLevel: 4,
    question: {
      ro: "Checklist pentru transport cu marfă de mare valoare (>100.000€)?",
      de: "Checkliste für Transport mit hochwertiger Ladung (>100.000€)?",
      en: "Checklist for transport with high-value goods (>100,000€)?"
    },
    options: {
      ro: ["La fel ca normal", "Asigurare specială, traseu securizat, GPS activ, parcări TAPA, comunicare constantă, confidențialitate", "Doar asigurare mai mare", "Doar GPS"],
      de: ["Gleich wie normal", "Sonderversicherung, gesicherte Route, aktives GPS, TAPA-Parkplätze, ständige Kommunikation, Vertraulichkeit", "Nur höhere Versicherung", "Nur GPS"],
      en: ["Same as normal", "Special insurance, secured route, active GPS, TAPA parking, constant communication, confidentiality", "Only higher insurance", "Only GPS"]
    },
    correctIndex: 1,
    explanation: {
      ro: "High-value checklist: asigurare specifică valoare declarată, rută cu parcări securizate (TAPA), GPS tracking în timp real, comunicare regulată, confidențialitate conținut, posibil escortă.",
      de: "High-Value-Checkliste: Versicherung für deklarierten Wert, Route mit gesicherten Parkplätzen (TAPA), GPS-Echtzeit-Tracking, regelmäßige Kommunikation, Inhaltsvertraulichkeit, möglicherweise Begleitung.",
      en: "High-value checklist: insurance for declared value, route with secured parking (TAPA), real-time GPS tracking, regular communication, content confidentiality, possibly escort."
    }
  },
  {
    difficultyLevel: 5,
    question: {
      ro: "Checklist pentru implementarea unui nou proces/procedură în echipa de dispecerat?",
      de: "Checkliste für Implementierung eines neuen Prozesses/Verfahrens im Disponenten-Team?",
      en: "Checklist for implementing a new process/procedure in dispatch team?"
    },
    options: {
      ro: ["Doar anunți", "Documentare clară, training echipă, pilot/test, feedback, ajustare, lansare completă, monitorizare", "Doar email", "Doar meeting"],
      de: ["Nur ankündigen", "Klare Dokumentation, Team-Training, Pilot/Test, Feedback, Anpassung, vollständige Einführung, Monitoring", "Nur E-Mail", "Nur Meeting"],
      en: ["Only announce", "Clear documentation, team training, pilot/test, feedback, adjustment, full launch, monitoring", "Only email", "Only meeting"]
    },
    correctIndex: 1,
    explanation: {
      ro: "Implementare proces: documentație pas-cu-pas, training practic pentru echipă, pilot cu 1-2 persoane, colectare feedback, ajustare bazată pe feedback, rollout complet, monitorizare adoptare.",
      de: "Prozessimplementierung: Schritt-für-Schritt-Dokumentation, praktisches Team-Training, Pilot mit 1-2 Personen, Feedback sammeln, Anpassung basierend auf Feedback, vollständiges Rollout, Adoptionsmonitoring.",
      en: "Process implementation: step-by-step documentation, practical team training, pilot with 1-2 people, collect feedback, adjust based on feedback, full rollout, adoption monitoring."
    }
  }
];
