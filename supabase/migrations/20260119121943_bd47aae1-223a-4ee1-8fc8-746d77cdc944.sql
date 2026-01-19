-- Insert multi-modal content for ALL 50 chapters
-- Each chapter gets at least: 1 audio summary + 1 diagram

-- ============ SECTION: FOUNDATION ============

-- mindset (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('mindset', 'audio_summary', 'ro', 'Rezumat Audio: Mentalitatea Disponentului', 
'{"text": "Mentalitatea de succes în transport. Un dispontent de succes are trei piloni: gândire orientată spre soluții, reziliență la stres și comunicare eficientă. Fiecare zi aduce provocări noi - întârzieri, reclamații, schimbări de ultim moment. Cheia este să rămâi calm, să prioritizezi și să găsești soluții. Regula de aur: problemele sunt oportunități de a demonstra profesionalismul. Construiește încredere prin consistență și transparență cu toți partenerii - clienți, transportatori și colegi."}',
90, 1, true),
('mindset', 'diagram', 'ro', 'Pilonii Mentalității de Succes',
'{"type": "mindmap", "mermaid": "mindmap\n  root((Mentalitate))\n    Reziliență\n      Calm sub presiune\n      Adaptabilitate\n      Focus pe soluții\n    Comunicare\n      Claritate\n      Empatie\n      Proactivitate\n    Profesionalism\n      Consistență\n      Transparență\n      Încredere"}',
null, 2, true);

-- soft-skills (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('soft-skills', 'audio_summary', 'ro', 'Rezumat Audio: Competențe Soft', 
'{"text": "Abilitățile soft sunt esențiale în transport. Comunicarea clară previne neînțelegerile. Negocierea eficientă maximizează marjele. Gestionarea timpului asigură livrările la timp. Rezolvarea conflictelor menține relațiile. Lucrul în echipă optimizează operațiunile. Aceste abilități se dezvoltă prin practică zilnică. Regula 80/20: 20% din abilități generează 80% din succes. Focusează-te pe comunicare și negociere - acestea au cel mai mare impact."}',
75, 1, true),
('soft-skills', 'diagram', 'ro', 'Matricea Competențelor Soft',
'{"type": "flowchart", "mermaid": "graph TD\n    A[Competențe Soft] --> B[Comunicare]\n    A --> C[Negociere]\n    A --> D[Time Management]\n    A --> E[Rezolvare Conflicte]\n    B --> B1[Claritate]\n    B --> B2[Ascultare activă]\n    C --> C1[Pregătire]\n    C --> C2[Win-Win]\n    D --> D1[Prioritizare]\n    D --> D2[Planificare]\n    E --> E1[Empatie]\n    E --> E2[Soluții]"}',
null, 2, true);

-- stress-management (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('stress-management', 'audio_summary', 'ro', 'Rezumat Audio: Gestionarea Stresului', 
'{"text": "Stresul în transport este inevitabil, dar gestionabil. Tehnica STOAC: Stop, Think, Observe, Act, Check. Când simți stresul crescând, oprește-te 30 secunde. Respiră adânc. Analizează situația obiectiv. Acționează strategic, nu reactiv. Verifică rezultatele. Prevenția burnout-ului: pauze regulate, granițe clare între muncă și viață, suport colegial. Un dispontent odihnit ia decizii mai bune. Investește în echilibru pentru performanță pe termen lung."}',
80, 1, true),
('stress-management', 'diagram', 'ro', 'Tehnica STOAC',
'{"type": "flowchart", "mermaid": "graph LR\n    S[🛑 STOP] --> T[🧠 THINK]\n    T --> O[👁 OBSERVE]\n    O --> A[⚡ ACT]\n    A --> C[✅ CHECK]\n    C --> |Feedback| S"}',
null, 2, true);

-- workflow (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('workflow', 'audio_summary', 'ro', 'Rezumat Audio: Fluxul de Lucru', 
'{"text": "Fluxul operațional standard are 5 etape. Etapa 1: Intake - primirea comenzii și validarea detaliilor. Etapa 2: Sourcing - găsirea transportatorului optim. Etapa 3: Pricing - calculul prețului și marjei. Etapa 4: Execution - monitorizarea transportului. Etapa 5: Completion - livrare, POD, facturare. Fiecare etapă are checkpoints clare. Un dispontent experimentat poate gestiona 15-20 transporturi simultan urmând acest flux sistematic."}',
85, 1, true),
('workflow', 'diagram', 'ro', 'Fluxul Operațional Complet',
'{"type": "flowchart", "mermaid": "graph TD\n    A[📥 INTAKE] --> B[🔍 SOURCING]\n    B --> C[💰 PRICING]\n    C --> D[🚛 EXECUTION]\n    D --> E[✅ COMPLETION]\n    A --> A1[Validare comandă]\n    B --> B1[Selectare transportator]\n    C --> C1[Calcul marjă]\n    D --> D1[Tracking GPS]\n    E --> E1[POD + Facturare]"}',
null, 2, true);

-- ============ SECTION: EQUIPMENT ============

-- loading (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('loading', 'audio_summary', 'ro', 'Rezumat Audio: Încărcarea Corectă', 
'{"text": "Încărcarea corectă previne daunele și accidentele. Reguli esențiale: distribuție uniformă a greutății, centrul de greutate cât mai jos. Standardul EN 12195: asigurare 80% înainte, 50% lateral, 50% înapoi. Verifică mereu: podea curată, fără humiditate, marfă stabilă. Fotografiază înainte și după încărcare. Rezervele în CMR la Box 18 sunt obligatorii pentru orice neregulă vizibilă. Un transport bine încărcat este un transport sigur."}',
70, 1, true),
('loading', 'diagram', 'ro', 'Standardele de Asigurare',
'{"type": "diagram", "mermaid": "graph LR\n    subgraph Forțe de Asigurare\n    A[⬆️ ÎNAINTE 80%] \n    B[⬅️ LATERAL 50%]\n    C[⬇️ ÎNAPOI 50%]\n    end\n    D[EN 12195-1] --> A\n    D --> B\n    D --> C"}',
null, 2, true);

-- reefer (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('reefer', 'audio_summary', 'ro', 'Rezumat Audio: Transport Frigorific', 
'{"text": "Transportul frigorific necesită atenție specială. Temperaturi standard: proaspete 2-4°C, congelate -18°C, farmaceutice 2-8°C. Pre-cooling obligatoriu: camionul trebuie răcit înainte de încărcare. Monitorizare continuă prin senzori. Data logger obligatoriu pentru produse sensibile. Regula lanțului de frig: niciodată nu întrerupe. Verifică temperatura la încărcare, în tranzit și la livrare. Documentează totul - în caz de reclamație, dovezile sunt esențiale."}',
80, 1, true),
('reefer', 'diagram', 'ro', 'Lanțul de Frig',
'{"type": "flowchart", "mermaid": "graph LR\n    A[🏭 Producție] -->|2-4°C| B[🚛 Transport]\n    B -->|2-4°C| C[📦 Depozit]\n    C -->|2-4°C| D[🏪 Retail]\n    style A fill:#60a5fa\n    style B fill:#60a5fa\n    style C fill:#60a5fa\n    style D fill:#60a5fa"}',
null, 2, true);

-- express-transport (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('express-transport', 'audio_summary', 'ro', 'Rezumat Audio: Transport Express', 
'{"text": "Transportul express înseamnă viteză și fiabilitate. Tipuri: Same Day livrat în aceeași zi, Next Day a doua zi, Time Critical cu oră exactă. Prețuri premium: 30-100% peste standard. Planificare critică: rutare optimă, șoferi experimentați, back-up plan obligatoriu. Comunicare în timp real cu clientul. Marja mai mare justifică atenția suplimentară. Specializarea în express construiește reputație și loialitate client."}',
65, 1, true),
('express-transport', 'diagram', 'ro', 'Tipuri de Transport Express',
'{"type": "flowchart", "mermaid": "graph TD\n    A[Transport Express] --> B[Same Day]\n    A --> C[Next Day]\n    A --> D[Time Critical]\n    B --> B1[Livrare în aceeași zi]\n    C --> C1[Livrare a doua zi]\n    D --> D1[Oră exactă garantată]\n    B1 --> E[+50-100% preț]\n    C1 --> F[+30-50% preț]\n    D1 --> G[+100%+ preț]"}',
null, 2, true);

-- intermodal (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('intermodal', 'audio_summary', 'ro', 'Rezumat Audio: Transport Intermodal', 
'{"text": "Intermodalul combină cel mai bun din fiecare mod de transport. Avantaje: costuri reduse pe distanțe lungi, amprentă de carbon mai mică, evitarea restricțiilor rutiere. Rute populare: România-Germania via hub Wels, România-UK via Calais. Planificare: rezervare cu 3-5 zile în avans. Documente: CMR pentru rutier, CIM pentru feroviar. Atenție la cut-off times și ferestre de încărcare. Timpul suplimentar este compensat de economii."}',
75, 1, true),
('intermodal', 'diagram', 'ro', 'Fluxul Intermodal',
'{"type": "flowchart", "mermaid": "graph LR\n    A[🏭 Origine] -->|🚛| B[🚂 Terminal]\n    B -->|🚃| C[🚂 Terminal]\n    C -->|🚛| D[📍 Destinație]\n    style B fill:#22c55e\n    style C fill:#22c55e"}',
null, 2, true);

-- warehouse (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('warehouse', 'audio_summary', 'ro', 'Rezumat Audio: Operațiuni Depozit', 
'{"text": "Coordonarea cu depozitele este crucială. Free time standard: 2 ore pentru încărcare sau descărcare. Demurrage: taxe pentru depășire, 50-100 EUR pe oră. Cross-docking: marfa trece direct, fără stocare. Comunicare proactivă: anunță sosirea cu 1-2 ore înainte. Documentație: CMR, packing list, instrucțiuni speciale. Time slots: respectă orele rezervate, întârzierile costă. Relații bune cu depozitele = operațiuni fluide."}',
70, 1, true),
('warehouse', 'diagram', 'ro', 'Procesul Cross-Docking',
'{"type": "flowchart", "mermaid": "graph LR\n    A[🚛 Inbound] --> B[📦 Sortare]\n    B --> C[🚛 Outbound]\n    D[Fără stocare] --> B\n    style B fill:#f59e0b"}',
null, 2, true);

-- ============ SECTION: DOCUMENTS ============

-- authorities (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('authorities', 'audio_summary', 'ro', 'Rezumat Audio: Autoritățile și Controalele', 
'{"text": "Controalele rutiere sunt comune în Europa. Autorități: ARR în România, BAG în Germania, VOSA în UK. Ce verifică: licențe, tahograf, CMR, greutate, stare tehnică. Drepturi la control: poți solicita interpret, poți contesta amenzile. Pregătire: toate documentele la îndemână, ordonate. Șoferul trebuie să cunoască regulile. Cooperare politicoasă reduce problemele. Amenzile pot fi semnificative: 500-5000 EUR pentru încălcări grave."}',
75, 1, true),
('authorities', 'diagram', 'ro', 'Procedura Standard de Control',
'{"type": "flowchart", "mermaid": "graph TD\n    A[🛑 Oprire Control] --> B[Prezentare documente]\n    B --> C{Totul OK?}\n    C -->|Da| D[✅ Continuă]\n    C -->|Nu| E[📋 Proces verbal]\n    E --> F[💶 Amendă / Reținere]"}',
null, 2, true);

-- compliance (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('compliance', 'audio_summary', 'ro', 'Rezumat Audio: Conformitate și Reglementări', 
'{"text": "Conformitatea este non-negociabilă în transport. Reglementări cheie: Regulamentul EU 561 pentru timp de conducere, ADR pentru mărfuri periculoase, Regulamentul cabotaj. Licențe obligatorii: OTL pentru transportator, CPC pentru manager. Documente la zi: asigurări, ITP, tahograf calibrat. Audit intern regulat. Non-conformitatea costă: amenzi, suspendare licență, pierdere clienți. Investiția în conformitate este protecție pe termen lung."}',
80, 1, true),
('compliance', 'diagram', 'ro', 'Checklist Conformitate',
'{"type": "mindmap", "mermaid": "mindmap\n  root((Conformitate))\n    Licențe\n      OTL\n      CPC\n      ADR\n    Documente\n      Asigurare\n      ITP\n      Tahograf\n    Regulamente\n      EU 561\n      Cabotaj\n      GDPR"}',
null, 2, true);

-- licenses-oversize (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('licenses-oversize', 'audio_summary', 'ro', 'Rezumat Audio: Licențe și Transport Agabaritic', 
'{"text": "Transportul agabaritic necesită autorizații speciale. Limite standard: 2.55m lățime, 4m înălțime, 16.5m lungime. Peste limite: autorizație obligatorie, rută aprobată, escortă posibilă. Timp de aprobare: 5-15 zile lucrătoare. Costuri semnificative: autorizații, escorte, asigurări suplimentare. Planificare detaliată: verifică poduri, tuneluri, cabluri. Noapte sau weekend pentru transporturi foarte mari. Specialist dedicat pentru clienți recurenți."}',
85, 1, true),
('licenses-oversize', 'diagram', 'ro', 'Limite Transport Standard vs Agabaritic',
'{"type": "diagram", "mermaid": "graph TD\n    subgraph Standard\n    A[Lățime: 2.55m]\n    B[Înălțime: 4.0m]\n    C[Lungime: 16.5m]\n    end\n    subgraph Agabaritic\n    D[Peste limite]\n    E[Autorizație]\n    F[Escortă]\n    end\n    Standard --> |Depășire| Agabaritic"}',
null, 2, true);

-- ============ SECTION: GEOGRAPHY ============

-- europe-zones (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('europe-zones', 'audio_summary', 'ro', 'Rezumat Audio: Zonele Europene', 
'{"text": "Europa este împărțită în zone de transport distincte. Zona Vest: Germania, Franța, Benelux - piață matură, concurență mare. Zona Est: Polonia, Cehia, România - costuri mai mici, creștere rapidă. Zona Nord: Scandinavia - standarde înalte, prețuri premium. Zona Sud: Italia, Spania - sezonalitate mare, fructe-legume. Cunoașterea specificului fiecărei zone optimizează rutele și prețurile. Adaptează oferta la piața țintă."}',
70, 1, true),
('europe-zones', 'diagram', 'ro', 'Harta Zonelor de Transport',
'{"type": "mindmap", "mermaid": "mindmap\n  root((Europa))\n    Vest\n      Germania\n      Franța\n      Benelux\n    Est\n      Polonia\n      Cehia\n      România\n    Nord\n      Suedia\n      Norvegia\n      Finlanda\n    Sud\n      Italia\n      Spania\n      Portugalia"}',
null, 2, true);

-- european-countries (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('european-countries', 'audio_summary', 'ro', 'Rezumat Audio: Specificul pe Țări', 
'{"text": "Fiecare țară are particularități. Germania: cel mai mare piață, Maut electronic, restricții weekend. Franța: taxe drumuri, eco-taxe, greve frecvente. Italia: ZTL în orașe, Brenner scump. Spania: sieste, orare diferite. UK post-Brexit: vamă, documente suplimentare. Scandinavia: standarde înalte, iarnă dificilă. Cunoaște specificul local pentru a evita surprize și a maximiza eficiența."}',
75, 1, true),
('european-countries', 'diagram', 'ro', 'Particularități pe Țări',
'{"type": "flowchart", "mermaid": "graph TD\n    A[🇩🇪 Germania] --> A1[Maut + Weekend ban]\n    B[🇫🇷 Franța] --> B1[Taxe + Greve]\n    C[🇮🇹 Italia] --> C1[ZTL + Brenner]\n    D[🇬🇧 UK] --> D1[Brexit customs]\n    E[🇪🇸 Spania] --> E1[Orare diferite]"}',
null, 2, true);

-- environment (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('environment', 'audio_summary', 'ro', 'Rezumat Audio: Reglementări de Mediu', 
'{"text": "Sustenabilitatea devine obligatorie în transport. LEZ - Low Emission Zones în marile orașe: restricții pentru vehicule poluante. Euro 6 este standardul minim pentru acces. CO2 reporting: clienții mari cer raportări. Green logistics: optimizare rute, încărcare maximă, vehicule Euro 6d. Certificări: ISO 14001, SmartWay, GLEC. Reducerea emisiilor devine criteriu de selecție transportator. Pregătește-te pentru viitor investind în sustenabilitate."}',
80, 1, true),
('environment', 'diagram', 'ro', 'Clasele Euro de Emisii',
'{"type": "flowchart", "mermaid": "graph LR\n    A[Euro 3] -->|Restricționat| B[Euro 4]\n    B -->|Limitat| C[Euro 5]\n    C -->|Acceptat| D[Euro 6]\n    D -->|Preferat| E[Euro 6d]\n    style D fill:#22c55e\n    style E fill:#22c55e"}',
null, 2, true);

-- sustainability (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('sustainability', 'audio_summary', 'ro', 'Rezumat Audio: Sustenabilitate în Transport', 
'{"text": "Sustenabilitatea este viitorul transportului. Amprenta de carbon: calculează și raportează. Reducere: optimizare rute reduce 10-15% emisii. Combustibili alternativi: LNG, electric, hidrogen în dezvoltare. Offsetting: compensare carbon pentru clienți. Certificări: ISO 14001, EcoVadis. Clienții premium cer dovezi de sustenabilitate. Investiția în green logistics aduce avantaj competitiv și accces la contracte premium."}',
70, 1, true),
('sustainability', 'diagram', 'ro', 'Strategii de Sustenabilitate',
'{"type": "mindmap", "mermaid": "mindmap\n  root((Sustenabilitate))\n    Reducere\n      Optimizare rute\n      Încărcare maximă\n      Eco-driving\n    Alternative\n      LNG\n      Electric\n      Hidrogen\n    Raportare\n      CO2 footprint\n      Certificări\n      Offsetting"}',
null, 2, true);

-- supply-chain (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('supply-chain', 'audio_summary', 'ro', 'Rezumat Audio: Lanțul de Aprovizionare', 
'{"text": "Înțelegerea supply chain-ului este esențială. Fluxul: furnizor, producție, depozit, distribuție, client final. Just-in-Time: livrare exactă când e nevoie, zero stoc. Riscuri: întreruperi, întârzieri, costuri suplimentare. Rolul transportatorului: verigă critică, fiabilitate esențială. Vizibilitate: tracking în timp real, predictibilitate. Parteneriat cu clientul: înțelege nevoile, anticipează problemele. Un transportator de încredere devine parte integrantă din lanț."}',
80, 1, true),
('supply-chain', 'diagram', 'ro', 'Fluxul Supply Chain',
'{"type": "flowchart", "mermaid": "graph LR\n    A[🏭 Furnizor] --> B[�icing Producție]\n    B --> C[📦 Depozit]\n    C --> D[🚛 Distribuție]\n    D --> E[🏪 Client]\n    F[📍 Tracking] --> B\n    F --> C\n    F --> D"}',
null, 2, true);

-- ============ SECTION: COMMERCIAL ============

-- commercial (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('commercial', 'audio_summary', 'ro', 'Rezumat Audio: Aspecte Comerciale', 
'{"text": "Succesul comercial se bazează pe relații și marje. Formula prețului: cost transport plus marjă. Marje tipice: 8-15% pentru contracte, 15-25% pentru spot. Clienți strategici: volum mare, stabilitate. Prospectare: bursele, cold calling, referințe. Negociere: pregătire, flexibilitate, win-win. CRM pentru urmărire clienți și oportunități. Fidelizare: servicii excelente, comunicare proactivă. Diversifică portofoliul pentru stabilitate."}',
75, 1, true),
('commercial', 'diagram', 'ro', 'Formula Comercială',
'{"type": "flowchart", "mermaid": "graph TD\n    A[Cost Transport] --> D[Preț Client]\n    B[Costuri Extra] --> D\n    C[Marjă 8-25%] --> D\n    D --> E{Profit}\n    style C fill:#22c55e\n    style E fill:#22c55e"}',
null, 2, true);

-- negotiation (missing)  
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('negotiation', 'audio_summary', 'ro', 'Rezumat Audio: Tehnici de Negociere', 
'{"text": "Negocierea eficientă creează valoare pentru ambele părți. Pregătire: cunoaște-ți BATNA - cea mai bună alternativă. Ascultă mai mult decât vorbești. Focus pe interese, nu poziții. Creează opțiuni: trade-offs care beneficiază pe toți. Tactici: ancorare, bracketing, tăcere strategică. Evită: emoții, concesii rapide, ultimatumuri. Documentează acordurile. Relația pe termen lung este mai valoroasă decât câștigul punctual."}',
80, 1, true),
('negotiation', 'diagram', 'ro', 'Procesul de Negociere',
'{"type": "flowchart", "mermaid": "graph TD\n    A[📋 Pregătire] --> B[🤝 Deschidere]\n    B --> C[🔍 Explorare]\n    C --> D[💡 Propuneri]\n    D --> E[🎯 Închidere]\n    F[BATNA] --> A\n    G[Win-Win] --> D"}',
null, 2, true);

-- clients (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('clients', 'audio_summary', 'ro', 'Rezumat Audio: Managementul Clienților', 
'{"text": "Clienții sunt activul cel mai valoros. Segmentare: strategic pentru volum mare și stabilitate, growing pentru potențial, transactional pentru spot. Achiziție: prospectare activă, networking, referințe. Onboarding: credit check, contract clar, așteptări definite. Fidelizare: servicii constante, comunicare proactivă, rezolvare rapidă probleme. KPI-uri: OTD 95% plus, claims sub 1%, rating 4.5 plus. Clientul mulțumit aduce clienți noi."}',
75, 1, true),
('clients', 'diagram', 'ro', 'Ciclul de Viață Client',
'{"type": "flowchart", "mermaid": "graph LR\n    A[🎯 Prospectare] --> B[📋 Onboarding]\n    B --> C[🚛 Operare]\n    C --> D[⭐ Fidelizare]\n    D --> E[📈 Creștere]\n    E --> F[🤝 Referințe]\n    F --> A"}',
null, 2, true);

-- carrier-management (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('carrier-management', 'audio_summary', 'ro', 'Rezumat Audio: Managementul Transportatorilor', 
'{"text": "Transportatorii de calitate sunt parteneri strategici. Calificare: licențe valide, asigurări adecvate, referințe verificate. Segmentare: Tier 1 pentru premium și fiabil, Tier 2 pentru standard, Tier 3 pentru backup. Negociere: volume commitment pentru rate mai bune. Monitorizare: KPI tracking, OTD, damages, comunicare. Relații: plăți la timp, feedback constructiv, dezvoltare comună. O bază solidă de transportatori asigură capacitate și calitate."}',
80, 1, true),
('carrier-management', 'diagram', 'ro', 'Piramida Transportatori',
'{"type": "diagram", "mermaid": "graph TD\n    A[🥇 Tier 1 - Premium] --> B[🥈 Tier 2 - Standard]\n    B --> C[🥉 Tier 3 - Backup]\n    A --> D[Fiabil + Dedicat]\n    B --> E[Bun + Flexibil]\n    C --> F[Disponibil + Spot]"}',
null, 2, true);

-- exchanges (missing - already have some content, adding video script)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('exchanges', 'audio_summary', 'ro', 'Rezumat Audio: Bursele de Transport', 
'{"text": "Bursele sunt esențiale pentru spot market. Principale: TIMOCOM cu 50000 plus oferte zilnic, Trans.eu popular în Est, Teleroute pentru Vest, Transporeon pentru contract logistics. Best practices: profil complet, răspuns rapid, verificare parteneri. Red flags: prețuri prea mici, companii noi fără rating. Folosește bursa pentru a completa capacitatea, nu ca sursă principală. Construiește relații directe cu partenerii buni găsiți pe bursă."}',
70, 1, true),
('exchanges', 'diagram', 'ro', 'Comparație Burse Transport',
'{"type": "diagram", "mermaid": "graph TD\n    A[Burse Transport] --> B[TIMOCOM]\n    A --> C[Trans.eu]\n    A --> D[Teleroute]\n    A --> E[Transporeon]\n    B --> B1[50K+ oferte/zi]\n    C --> C1[Popular Est Europa]\n    D --> D1[Focus Vest]\n    E --> E1[Contract logistics]"}',
null, 2, true);

-- communication (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('communication', 'audio_summary', 'ro', 'Rezumat Audio: Comunicare Profesională', 
'{"text": "Comunicarea clară previne 90% din probleme. Canale: telefon pentru urgent, email pentru documentare, TMS pentru tracking. Reguli: răspuns în 30 minute pentru urgent, 4 ore pentru standard. Ton profesional dar prietenos. Confirmare scrisă pentru tot ce e important. Actualizări proactive: nu aștepta să fii întrebat. Scripts pregătite pentru situații frecvente. Docuemntare: totul în TMS pentru trasabilitate. Comunicarea bună construiește încredere."}',
70, 1, true),
('communication', 'diagram', 'ro', 'Canale de Comunicare',
'{"type": "flowchart", "mermaid": "graph TD\n    A[📞 Telefon] --> A1[Urgent]\n    B[📧 Email] --> B1[Documentare]\n    C[💻 TMS] --> C1[Tracking]\n    D[⏱️ Răspuns] --> D1[30 min urgent]\n    D --> D2[4h standard]"}',
null, 2, true);

-- networking (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('networking', 'audio_summary', 'ro', 'Rezumat Audio: Networking în Transport', 
'{"text": "Networking-ul deschide uși. Evenimente: târguri transport, conferințe industrie, asociații profesionale. Online: LinkedIn, grupuri specializate, forumuri. Relații cu: clienți potențiali, transportatori, competitori chiar. Reciprocitate: oferă înainte să ceri. Follow-up: menține contactul regulat. Reputație: fii cunoscut pentru profesionalism. Networking strategic construiește surse de business și suport în situații dificile."}',
65, 1, true),
('networking', 'diagram', 'ro', 'Rețeaua de Networking',
'{"type": "mindmap", "mermaid": "mindmap\n  root((Networking))\n    Evenimente\n      Târguri\n      Conferințe\n      Asociații\n    Online\n      LinkedIn\n      Grupuri\n      Forumuri\n    Relații\n      Clienți\n      Transportatori\n      Colegi industrie"}',
null, 2, true);

-- kpi (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('kpi', 'audio_summary', 'ro', 'Rezumat Audio: Indicatori de Performanță', 
'{"text": "KPI-urile măsoară și îmbunătățesc performanța. Operaționali: OTD 95% plus on-time delivery, quote conversion 30% plus, transporturi pe zi. Financiari: marjă medie 12-15%, revenue per transport, DSO days sales outstanding. Calitate: claims sub 1%, customer rating 4.5 plus. Tracking zilnic pentru corecții rapide. Dashboard personal pentru vizibilitate. Obiective SMART: specifice, măsurabile, realizabile. Ce măsori, îmbunătățești."}',
75, 1, true),
('kpi', 'diagram', 'ro', 'Dashboard KPI',
'{"type": "diagram", "mermaid": "graph TD\n    subgraph Operaționali\n    A[OTD 95%+]\n    B[Conversion 30%+]\n    end\n    subgraph Financiari\n    C[Marjă 12-15%]\n    D[DSO < 45 zile]\n    end\n    subgraph Calitate\n    E[Claims < 1%]\n    F[Rating 4.5+]\n    end"}',
null, 2, true);

-- ============ SECTION: TECHNOLOGY ============

-- translogica (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('translogica', 'audio_summary', 'ro', 'Rezumat Audio: Sistemul Translogica', 
'{"text": "Translogica este TMS-ul nostru central. Module principale: Comenzi pentru gestionare ordere, Dispoplan pentru planificare, Telematik pentru tracking. Flux de lucru: creare comandă, alocare transport, monitorizare, facturare. Integrări: GPS tracking, burse transport, contabilitate. Best practices: completează toate câmpurile, atașează documente, actualizează statusurile. Sistemul centralizează informația și automatizează procesele. Eficiența vine din utilizare corectă și consistentă."}',
85, 1, true),
('translogica', 'diagram', 'ro', 'Modulele Translogica',
'{"type": "mindmap", "mermaid": "mindmap\n  root((Translogica))\n    Comenzi\n      Creare\n      Tracking\n      Facturare\n    Dispoplan\n      Planificare\n      Alocare\n      Optimizare\n    Telematik\n      GPS\n      ETA\n      Alerts"}',
null, 2, true);

-- fleet (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('fleet', 'audio_summary', 'ro', 'Rezumat Audio: Managementul Flotei', 
'{"text": "Flota eficientă înseamnă costuri reduse și fiabilitate. Telematică: GPS tracking, consum combustibil, stil conducere. KPI-uri flotă: utilizare 85% plus, km gol sub 15%, consum optim. Mentenanță: preventivă conform plan, corectivă minimizată. Documente: ITP, RCA, tahograf la zi, alerte expirare. Tour planning: optimizare rute, grupare comenzi. Raportare: dashboard zilnic, analiza trenduri. Investiția în management flotă reduce costuri 10-20%."}',
75, 1, true),
('fleet', 'diagram', 'ro', 'Dashboard Flotă',
'{"type": "diagram", "mermaid": "graph TD\n    subgraph Telematică\n    A[📍 GPS Live]\n    B[⛽ Consum]\n    end\n    subgraph KPIs\n    C[Utilizare 85%+]\n    D[Km gol < 15%]\n    end\n    subgraph Documente\n    E[🗓️ ITP]\n    F[📋 Tahograf]\n    end"}',
null, 2, true);

-- technology (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('technology', 'audio_summary', 'ro', 'Rezumat Audio: Tehnologie în Transport', 
'{"text": "Tehnologia transformă transportul. TMS: coloana vertebrală pentru operațiuni. Tracking: vizibilitate în timp real pentru tine și client. Automatizare: task-uri repetitive, notificări, rapoarte. AI: predicții ETA, optimizare rute, pricing dinamic. EDI: schimb automat date cu clienți mari. API: integrări cu parteneri și platforme. Digital first: adoptă tehnologia pentru eficiență și competitivitate. Investiția în tech are ROI rapid."}',
80, 1, true),
('technology', 'diagram', 'ro', 'Stiva Tehnologică',
'{"type": "flowchart", "mermaid": "graph TD\n    A[🖥️ TMS Core] --> B[📍 Tracking]\n    A --> C[🤖 Automatizare]\n    A --> D[🧠 AI/ML]\n    B --> E[Vizibilitate]\n    C --> F[Eficiență]\n    D --> G[Predicții]"}',
null, 2, true);

-- digitalization (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('digitalization', 'audio_summary', 'ro', 'Rezumat Audio: Digitalizare și Viitor', 
'{"text": "Digitalizarea este inevitabilă. e-CMR: document electronic, adopție în creștere. Blockchain: trasabilitate și securitate documente. AI în pricing: modele predictive pentru cotații optime. Platforme digitale: de la bursă la marketplace complet. Cybersecurity: protecție date, compliance GDPR. Pregătire: adoptă gradual, formează echipa, investește strategic. Companiile digitale vor domina piața. Începe acum transformarea pentru a rămâne competitiv."}',
70, 1, true),
('digitalization', 'diagram', 'ro', 'Roadmap Digitalizare',
'{"type": "flowchart", "mermaid": "graph LR\n    A[📄 Paper] --> B[💻 TMS Basic]\n    B --> C[📱 Mobile + API]\n    C --> D[🤖 AI + Automation]\n    D --> E[🔗 Blockchain]\n    style D fill:#22c55e\n    style E fill:#3b82f6"}',
null, 2, true);

-- ============ SECTION: FINANCE ============

-- risk-management (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('risk-management', 'audio_summary', 'ro', 'Rezumat Audio: Managementul Riscurilor', 
'{"text": "Riscurile în transport sunt diverse. Categorii: operațional cu întârzieri și daune, financiar cu neplată și volatilitate, compliance cu amenzi și licențe, reputațional. Identificare: analiză sistematică, experiență, benchmark. Evaluare: probabilitate înmulțit cu impact. Mitigare: proceduri, asigurări, diversificare, back-up plans. Monitorizare: KPI pentru risc, audit periodic. Fraudă: red flags, verificare due diligence. Managementul proactiv reduce pierderile și construiește reziliență."}',
85, 1, true),
('risk-management', 'diagram', 'ro', 'Matricea Riscurilor',
'{"type": "diagram", "mermaid": "graph TD\n    subgraph Impact Mare\n    A[🔴 Fraud]\n    B[🔴 Major Damage]\n    end\n    subgraph Impact Mediu\n    C[🟡 Delay]\n    D[🟡 Minor Damage]\n    end\n    subgraph Impact Mic\n    E[🟢 Admin Error]\n    end"}',
null, 2, true);

-- insurance (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('insurance', 'audio_summary', 'ro', 'Rezumat Audio: Asigurări în Transport', 
'{"text": "Asigurările protejează împotriva pierderilor. CMR liability: acoperă răspunderea transportatorului, limită 8.33 SDR per kg. Cargo insurance: acoperă valoarea reală a mărfii, recomandată pentru valori mari. Diferența este crucială: CMR nu acoperă valoarea totală. Recomandare: cargo insurance pentru marfă peste 20 EUR per kg. Documente necesare: CMR, factură, raport daune. Proces claims: notificare imediată, documentare completă, urmărire. Cunoașterea asigurărilor protejează afacerea."}',
80, 1, true),
('insurance', 'diagram', 'ro', 'CMR vs Cargo Insurance',
'{"type": "flowchart", "mermaid": "graph TD\n    A[Valoare Marfă: 50,000 EUR] --> B[CMR Liability]\n    A --> C[Cargo Insurance]\n    B --> D[Max: ~8,330 EUR]\n    C --> E[Full: 50,000 EUR]\n    D --> F[❌ Gap: 41,670 EUR]\n    E --> G[✅ Acoperire Totală]"}',
null, 2, true);

-- high-value-goods (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('high-value-goods', 'audio_summary', 'ro', 'Rezumat Audio: Mărfuri de Valoare Mare', 
'{"text": "Mărfurile de valoare mare necesită precauții suplimentare. Categorii: electronice, farmaceutice, luxury goods, piese auto premium. Securitate: vehicule cu GPS și alarme, șoferi verificați, rute sigure. Încărcare: discreție maximă, sigilii numerotate, fotografii. Parcare: doar parcări securizate, niciodată pe drum. Monitorizare: tracking 24 pe 7, alertă pentru opriri neplanificate. Asigurare: cargo insurance obligatorie, declarație valoare reală. Procedurile stricte previn furturile și minimizează riscurile."}',
75, 1, true),
('high-value-goods', 'diagram', 'ro', 'Protocol High Value',
'{"type": "flowchart", "mermaid": "graph TD\n    A[📦 High Value] --> B[🔒 Securitate]\n    A --> C[📍 Tracking 24/7]\n    A --> D[🅿️ Parcare Securizată]\n    A --> E[📋 Asigurare Full]\n    B --> F[GPS + Alarmă]\n    C --> G[Alertă Opriri]\n    D --> H[Doar Aprobate]\n    E --> I[Cargo Insurance]"}',
null, 2, true);

-- payment (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('payment', 'audio_summary', 'ro', 'Rezumat Audio: Plăți și Termene', 
'{"text": "Cash flow-ul este vital pentru business. Termene standard: 30-60 zile pentru clienți, 14-30 zile pentru transportatori. Credit check obligatoriu pentru clienți noi. Facturare: promptă, corectă, cu toate documentele. Urmărire: reminder la scadență, escaladare structurată. Plată transportatori: la timp pentru relații bune. Self-billing: automatizare cu clienți mari. Recuperare: procedură clară, ultimul resort legal. Disciplina financiară asigură sustenabilitatea afacerii."}',
70, 1, true),
('payment', 'diagram', 'ro', 'Fluxul Financiar',
'{"type": "flowchart", "mermaid": "graph LR\n    A[🚛 Transport] --> B[📄 Facturare]\n    B --> C[⏳ 30-60 zile]\n    C --> D[💰 Încasare]\n    D --> E[💳 Plată Carrier]\n    E --> F[14-30 zile]\n    style D fill:#22c55e"}',
null, 2, true);

-- accounting (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('accounting', 'audio_summary', 'ro', 'Rezumat Audio: Contabilitate Transport', 
'{"text": "Contabilitatea corectă susține deciziile. Facturare client: toate costurile plus marjă, termene clare. Verificare facturi transportator: match cu comandă și CMR. TVA transport: reverse charge pentru international. Dispute: documentează, negociază, escaladează. KPI financiari: marjă medie, DSO, bad debt ratio. Reconciliere lunară: client și furnizor. Raportare: dashboard financiar pentru management. Acuratețea contabilă previne pierderi și asigură profitabilitate."}',
75, 1, true),
('accounting', 'diagram', 'ro', 'Procesul Contabil',
'{"type": "flowchart", "mermaid": "graph TD\n    A[📋 Comandă] --> B[🚛 Transport]\n    B --> C[📄 POD]\n    C --> D[💰 Facturare Client]\n    C --> E[📥 Factură Carrier]\n    D --> F[Verificare Match]\n    E --> F\n    F --> G[📊 Raportare]"}',
null, 2, true);

-- ============ SECTION: PRACTICAL ============

-- training (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('training', 'audio_summary', 'ro', 'Rezumat Audio: Program de Training', 
'{"text": "Training-ul structurat accelerează dezvoltarea. Fazele: observare în prima săptămână, practică asistată în săptămânile 2-4, operare semi-independentă în luna 2, autonomie în luna 3 plus. Evaluare continuă: quiz, supervizare, feedback. Mentor dedicat pentru suport. Obiective clare per etapă. Greșelile sunt oportunități de învățare. Întreabă când nu știi. Documentează ce înveți. Progresul consistent construiește expertiza. Investiția în training are cel mai mare ROI."}',
70, 1, true),
('training', 'diagram', 'ro', 'Fazele Training-ului',
'{"type": "flowchart", "mermaid": "graph LR\n    A[📚 Săpt. 1] --> B[🔍 Săpt. 2-4]\n    B --> C[💼 Luna 2]\n    C --> D[🎯 Luna 3+]\n    A --> A1[Observare]\n    B --> B1[Practică Asistată]\n    C --> C1[Semi-Independent]\n    D --> D1[Autonom]"}',
null, 2, true);

-- professional-development (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('professional-development', 'audio_summary', 'ro', 'Rezumat Audio: Dezvoltare Profesională', 
'{"text": "Cariera în transport are potențial. Parcurs: trainee, dispatcher junior, dispatcher senior, team lead, manager. Competențe cheie: tehnice, comunicare, leadership. Certificări: CPC, ADR, limbi străine. Învățare continuă: cursuri, conferințe, networking. Specializări: express, pharma, automotive, intermodal. Vizibilitate: rezultate, inițiativă, prezență. Mentoratul accelerează creșterea. Planifică-ți cariera proactiv și investește constant în dezvoltare."}',
75, 1, true),
('professional-development', 'diagram', 'ro', 'Parcurs Carieră',
'{"type": "flowchart", "mermaid": "graph TD\n    A[🎓 Trainee] --> B[💼 Junior]\n    B --> C[⭐ Senior]\n    C --> D[👥 Team Lead]\n    D --> E[🏆 Manager]\n    F[Certificări] --> B\n    F --> C\n    G[Specializare] --> C\n    G --> D"}',
null, 2, true);

-- case-studies (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('case-studies', 'audio_summary', 'ro', 'Rezumat Audio: Studii de Caz', 
'{"text": "Studiile de caz oferă învățăminte practice. Case BMW Line Stop: urgență rezolvată, relație consolidată. Case A7 France theft: proceduri îmbunătățite post-incident. Case Italian customs delay: importanța documentației complete. Lecții: pregătire previne crize, comunicare reduce impact, documentare susține claims. Analiza post-incident: ce am făcut bine, ce am greșit, ce schimbăm. Învață din experiențele altora pentru a evita greșeli similare."}',
65, 1, true),
('case-studies', 'diagram', 'ro', 'Structura Analiză Caz',
'{"type": "flowchart", "mermaid": "graph TD\n    A[📋 Situație] --> B[🔍 Analiză]\n    B --> C[⚡ Acțiuni]\n    C --> D[📊 Rezultat]\n    D --> E[💡 Lecții]\n    E --> F[📝 Îmbunătățiri]"}',
null, 2, true);

-- emergency (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('emergency', 'audio_summary', 'ro', 'Rezumat Audio: Situații de Urgență', 
'{"text": "Urgențele necesită reacție rapidă și proceduri clare. Tipuri: accidente, defecțiuni, daune marfă, furt. Protocol: siguranță primordial, informare imediată, documentare completă. Comunicare: calmă, clară, către toate părțile relevante. Accidente: 112, siguranță, declarație, fotografii. Breakdown: asistență, soluții alternative, informare client. Daune: fotografii, rezerve CMR, notificare asigurare. Furt: poliție, asigurare, client. Pregătirea face diferența între criză și incident gestionat."}',
80, 1, true),
('emergency', 'diagram', 'ro', 'Protocol Urgență',
'{"type": "flowchart", "mermaid": "graph TD\n    A[🚨 URGENȚĂ] --> B{Tip?}\n    B --> C[🚗 Accident]\n    B --> D[🔧 Breakdown]\n    B --> E[📦 Daune]\n    B --> F[🚔 Furt]\n    C --> G[112 + Siguranță]\n    D --> H[Asistență + Alt.]\n    E --> I[Foto + Rezerve]\n    F --> J[Poliție + Asig.]"}',
null, 2, true);

-- red-flags (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('red-flags', 'audio_summary', 'ro', 'Rezumat Audio: Semnale de Alarmă', 
'{"text": "Red flags previn probleme și fraude. Transportator: licență expirată, asigurare insuficientă, prețuri prea mici, companie nou-nouță. Client: refuză credit check, presiune extremă, cereri neobișnuite. Marfă: greutate inconsistentă, ambalaj suspect, valoare nedeclarată. Comportament: evaziv la întrebări, schimbări de ultim moment repetate. Reacție: verificare suplimentară, escaladare, refuz dacă necesar. Instinctul contează: dacă ceva pare greșit, probabil este."}',
70, 1, true),
('red-flags', 'diagram', 'ro', 'Categorii Red Flags',
'{"type": "mindmap", "mermaid": "mindmap\n  root((Red Flags))\n    Transportator\n      Licență expirată\n      Preț suspect\n      Fără rating\n    Client\n      Refuză credit check\n      Presiune extremă\n      Cereri ciudate\n    Marfă\n      Greutate greșită\n      Valoare ascunsă\n      Ambalaj suspect"}',
null, 2, true);

-- checklists (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('checklists', 'audio_summary', 'ro', 'Rezumat Audio: Checklisturi Operaționale', 
'{"text": "Checklisturile previn omisiunile. Pre-transport: validare comandă, documente complete, confirmare transportator. Încărcare: CMR corect, fotografii, sigilii. În tranzit: tracking, comunicare, actualizări. Livrare: POD semnat, verificare, raportare. Post-transport: documente complete, facturare, feedback. Folosește checklist pentru fiecare etapă. Creează rutină pentru consistență. Un checklist respectat este asigurare împotriva erorilor costisitoare."}',
65, 1, true),
('checklists', 'diagram', 'ro', 'Checklisturi pe Etape',
'{"type": "flowchart", "mermaid": "graph LR\n    A[📋 Pre-Transport] --> B[📦 Încărcare]\n    B --> C[🚛 Tranzit]\n    C --> D[📍 Livrare]\n    D --> E[📊 Post-Transport]\n    A --> A1[Validare + Docs]\n    B --> B1[CMR + Foto]\n    C --> C1[Track + Update]\n    D --> D1[POD]\n    E --> E1[Facturare]"}',
null, 2, true);

-- glossary (missing)
INSERT INTO chapter_media (chapter_id, media_type, language, title, content, duration_estimate, order_index, is_active)
VALUES 
('glossary', 'audio_summary', 'ro', 'Rezumat Audio: Termeni Esențiali', 
'{"text": "Terminologia de bază pentru transport. CMR: scrisoare de transport internațional. POD: Proof of Delivery, dovada livrării. Cabotaj: transport intern într-o țară străină. ADR: transport mărfuri periculoase. OTD: On-Time Delivery, livrare la timp. FTL: Full Truck Load, camion complet. LTL: Less Than Truck Load, grupaj. Demurrage: taxe pentru depășire timp. ETA: Estimated Time of Arrival. Incoterms: reguli internaționale de livrare. Cunoașterea termenilor asigură comunicare profesională."}',
60, 1, true),
('glossary', 'diagram', 'ro', 'Termeni Cheie',
'{"type": "mindmap", "mermaid": "mindmap\n  root((Glosar))\n    Documente\n      CMR\n      POD\n      T1/T2\n    Servicii\n      FTL\n      LTL\n      Express\n    KPIs\n      OTD\n      Claims Rate\n      Marjă"}',
null, 2, true);