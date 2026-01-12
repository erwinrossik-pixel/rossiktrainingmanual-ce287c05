export interface SearchableItem {
  chapterId: string;
  chapterTitle: string;
  section: string;
  content: string;
  keywords: string[];
}

export const searchableContent: SearchableItem[] = [
  // Introduction
  {
    chapterId: "intro",
    chapterTitle: "Introduction",
    section: "Overview",
    content: "EU Road Freight Forwarding Extended Training & Operating Manual for European road transport operations using 13.6m curtainsider/tautliner with 24-29 tonnes payload.",
    keywords: ["intro", "introduction", "overview", "manual", "training", "freight forwarding"]
  },
  
  // Mindset Chapter
  {
    chapterId: "mindset",
    chapterTitle: "Role & Mindset",
    section: "4W Model",
    content: "The 4W model: Who, What, When, Where. Essential communication framework for freight forwarding.",
    keywords: ["4w", "communication", "who", "what", "when", "where", "mindset"]
  },
  {
    chapterId: "mindset",
    chapterTitle: "Role & Mindset",
    section: "Documentation",
    content: "Documentation creates an auditable record of all activities. If it's not documented, it didn't happen.",
    keywords: ["documentation", "audit", "record", "evidence", "proof"]
  },
  {
    chapterId: "mindset",
    chapterTitle: "Role & Mindset",
    section: "Driver Relations",
    content: "Treat drivers as partners with respect. This directly improves punctuality and cooperation.",
    keywords: ["driver", "partner", "respect", "cooperation", "punctuality"]
  },

  // Workflow Chapter
  {
    chapterId: "workflow",
    chapterTitle: "Operational Workflow",
    section: "Capacity Sourcing",
    content: "Priority order: Own fleet → Preferred carriers → Spot market (TIMOCOM/Trans.eu/Teleroute).",
    keywords: ["capacity", "sourcing", "fleet", "carriers", "timocom", "trans.eu", "teleroute", "spot market"]
  },
  {
    chapterId: "workflow",
    chapterTitle: "Operational Workflow",
    section: "Order Intake",
    content: "Collect all order details: pickup/delivery addresses, dates, cargo description, weight, special requirements.",
    keywords: ["order", "intake", "pickup", "delivery", "cargo", "weight"]
  },
  {
    chapterId: "workflow",
    chapterTitle: "Operational Workflow",
    section: "Proof of Delivery",
    content: "Always collect signed CMR/POD (Proof of Delivery), scan or upload via TMS.",
    keywords: ["cmr", "pod", "proof", "delivery", "signature", "document"]
  },

  // Vehicle Chapter
  {
    chapterId: "vehicle",
    chapterTitle: "Vehicle Reference",
    section: "Dimensions",
    content: "Standard 13.6m curtainsider: Length 13.6m, Width 2.48m, Height 2.70m. Can hold approximately 33 EUR pallets.",
    keywords: ["13.6m", "curtainsider", "dimensions", "length", "width", "height", "pallets", "33"]
  },
  {
    chapterId: "vehicle",
    chapterTitle: "Vehicle Reference",
    section: "Payload",
    content: "Typical payload capacity: 24-29 tonnes depending on truck/trailer specification.",
    keywords: ["payload", "capacity", "tonnes", "weight", "24", "29"]
  },
  {
    chapterId: "vehicle",
    chapterTitle: "Vehicle Reference",
    section: "Volume",
    content: "Volume capacity approximately 90 cubic meters (m³).",
    keywords: ["volume", "cubic", "meters", "m3", "90"]
  },

  // Loading Chapter
  {
    chapterId: "loading",
    chapterTitle: "Loading & Securing",
    section: "EN 12195-1",
    content: "EN 12195-1 is the European standard for cargo securing equipment and calculations.",
    keywords: ["en 12195", "cargo", "securing", "standard", "equipment"]
  },
  {
    chapterId: "loading",
    chapterTitle: "Loading & Securing",
    section: "Forward Restraint",
    content: "Forward restraint must be 80% of cargo weight (0.8g) due to deceleration forces during braking.",
    keywords: ["forward", "restraint", "80%", "braking", "deceleration"]
  },
  {
    chapterId: "loading",
    chapterTitle: "Loading & Securing",
    section: "Photo Documentation",
    content: "Take timestamped photos during loading for insurance and audit purposes. No photos = no proof.",
    keywords: ["photos", "timestamp", "insurance", "audit", "proof", "documentation"]
  },

  // Compliance Chapter
  {
    chapterId: "compliance",
    chapterTitle: "Drivers' Hours",
    section: "Daily Driving",
    content: "Maximum daily driving time: 9 hours, can be extended to 10 hours twice per week.",
    keywords: ["daily", "driving", "9 hours", "10 hours", "maximum"]
  },
  {
    chapterId: "compliance",
    chapterTitle: "Drivers' Hours",
    section: "Break Requirements",
    content: "45-minute break required after 4 hours 30 minutes of driving. Can be split 15'+30'.",
    keywords: ["break", "45 minutes", "4.5 hours", "split", "rest"]
  },
  {
    chapterId: "compliance",
    chapterTitle: "Drivers' Hours",
    section: "Weekly Limits",
    content: "Maximum weekly driving: 56 hours. Bi-weekly maximum: 90 hours.",
    keywords: ["weekly", "56 hours", "90 hours", "bi-weekly", "maximum"]
  },

  // Driving Time Chapter
  {
    chapterId: "driving-time",
    chapterTitle: "Shift vs Driving Time",
    section: "Traffic Jam",
    content: "Traffic jam time is 100% counted as driving time. Only when parked with tacho on REST does it stop.",
    keywords: ["traffic", "jam", "tacho", "tachograph", "rest", "driving time"]
  },
  {
    chapterId: "driving-time",
    chapterTitle: "Shift vs Driving Time",
    section: "Shift Time",
    content: "Single driver maximum shift time: 13-15 hours depending on national working time rules.",
    keywords: ["shift", "13 hours", "15 hours", "working time", "single driver"]
  },
  {
    chapterId: "driving-time",
    chapterTitle: "Shift vs Driving Time",
    section: "Double Manned",
    content: "Double-manned crew can cover approximately 1,100 km in 24 hours.",
    keywords: ["double", "manned", "crew", "1100 km", "24 hours"]
  },
  {
    chapterId: "driving-time",
    chapterTitle: "Shift vs Driving Time",
    section: "Sunday Driving Ban",
    content: "Germany Sunday driving ban for trucks >3.5t ends at 22:00.",
    keywords: ["sunday", "ban", "germany", "22:00", "trucks"]
  },

  // Pricing Chapter
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Base Rate",
    content: "Standard base rate for EU road freight: approximately €1.10/km before adding tolls and accessorials.",
    keywords: ["base rate", "1.10", "euro", "km", "pricing"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Profit Margin",
    content: "Typical profit margins: 8-18% depending on service level and competition.",
    keywords: ["margin", "profit", "8%", "18%", "percentage"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "German Tolls",
    content: "German toll rates approximately €0.45/km, varying by CO₂ class and axle count.",
    keywords: ["german", "toll", "maut", "0.45", "co2", "axle"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "European Toll Rates",
    content: "Toll rates by country: Germany €0.45/km, France €0.35/km, Austria €0.38/km, Italy €0.30/km, Spain €0.25/km, Belgium €0.20/km, Poland €0.15/km, Netherlands free.",
    keywords: ["toll", "rates", "europe", "france", "austria", "italy", "spain", "belgium", "poland", "netherlands"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Route Munich-Paris",
    content: "Route pricing example Munich to Paris (~830km): Base €913 + DE toll €68 + FR toll €238 = €1,219 cost. Offer price €1,350-1,420.",
    keywords: ["munich", "paris", "route", "example", "pricing", "830km"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Route Rotterdam-Barcelona",
    content: "Route pricing example Rotterdam to Barcelona (~1,450km): Base €1,595 + BE toll €30 + FR toll €298 + ES toll €113 = €2,036 cost. Offer price €2,240.",
    keywords: ["rotterdam", "barcelona", "route", "example", "pricing", "1450km", "spain"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Route Hamburg-Warsaw",
    content: "Route pricing example Hamburg to Warsaw (~680km): Base €748 + DE toll €171 + PL toll €45 = €964 cost. Offer price €1,099.",
    keywords: ["hamburg", "warsaw", "route", "example", "pricing", "680km", "poland"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Route Prague-Lyon",
    content: "Route pricing example Prague to Lyon (~1,100km): Base €1,210 + CZ toll €18 + DE toll €180 + FR toll €210 = €1,618 cost. Offer price €1,796.",
    keywords: ["prague", "lyon", "route", "example", "pricing", "1100km", "czech"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Route Budapest-Amsterdam",
    content: "Route pricing example Budapest to Amsterdam (~1,320km): Base €1,452 + HU toll €24 + AT toll €57 + DE toll €315 = €1,848 cost. Offer price €2,088.",
    keywords: ["budapest", "amsterdam", "route", "example", "pricing", "1320km", "hungary"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Margin Tiers",
    content: "Margin tiers by lane type: Regular/Spot 10-15%, Dedicated/Contract 8-12%, Premium/Express 15-20%, Return Load 5-10%, New Customer 12-18%.",
    keywords: ["margin", "tiers", "spot", "contract", "express", "return load", "dedicated"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Margin Adjustments",
    content: "Margin adjustment factors: Tight delivery window +3-5%, Weekend/Holiday +5-8%, ADR cargo +8-15%, Reefer transport +10-20%, Express same day +25-40%.",
    keywords: ["margin", "adjustment", "weekend", "adr", "reefer", "express", "surcharge"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Seasonal January-February",
    content: "January-February pricing: -5 to -10% due to post-holiday slowdown. Strategy: Accept lower margins, focus on volume.",
    keywords: ["seasonal", "january", "february", "winter", "slowdown", "low season"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Seasonal Peak Q4",
    content: "September-November peak season: +10 to +25% pricing. Black Friday and Christmas logistics surge. Maximum margin period.",
    keywords: ["seasonal", "peak", "september", "november", "christmas", "black friday", "q4"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "December Christmas",
    content: "December 1-15 Christmas rush: +20 to +30% pricing, highest demand. December 16-31 shutdown: -10 to -20% minimal operations.",
    keywords: ["december", "christmas", "peak", "shutdown", "holiday", "pricing"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Summer Reefer",
    content: "Summer reefer transport: +20-30% premium due to higher demand and increased fuel consumption for cooling.",
    keywords: ["summer", "reefer", "temperature", "cooling", "premium", "seasonal"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Regional Spain Italy",
    content: "Spain/Italy seasonal patterns: March-June fruit/vegetable export peak +15-25%, August factory closures, September wine harvest transport surge.",
    keywords: ["spain", "italy", "fruit", "vegetable", "wine", "harvest", "seasonal", "regional"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Regional Germany Netherlands",
    content: "Germany/Netherlands seasonal: March-April Easter retail, September trade fairs (IAA), October-November Christmas goods distribution.",
    keywords: ["germany", "netherlands", "easter", "trade fair", "iaa", "christmas", "seasonal"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Accessorial Charges",
    content: "Standard accessorial charges: Waiting time €35-50/hour, overnight parking €50-100, ADR surcharge €100-300, weekend delivery €100-200, multi-drop €50-100/stop.",
    keywords: ["accessorial", "waiting time", "parking", "adr", "weekend", "multi-drop", "surcharge", "fees"]
  },
  {
    chapterId: "pricing",
    chapterTitle: "Pricing & Tolls",
    section: "Pricing Formula",
    content: "Cost calculation formula: Cost = (km × €1.10) + Σ(tolls) + accessorials. Price = Cost × (1 + margin%).",
    keywords: ["formula", "calculation", "cost", "price", "margin", "tolls"]
  },

  // Exchanges Chapter
  {
    chapterId: "exchanges",
    chapterTitle: "Freight Exchanges",
    section: "TIMOCOM",
    content: "TIMOCOM: Largest European freight exchange, 50,000+ verified companies, strong in DE/AT/CH.",
    keywords: ["timocom", "freight", "exchange", "germany", "austria", "switzerland"]
  },
  {
    chapterId: "exchanges",
    chapterTitle: "Freight Exchanges",
    section: "Trans.eu",
    content: "Trans.eu: Strong in CEE/EU, verified network, TransRisk scoring system.",
    keywords: ["trans.eu", "cee", "eastern europe", "transrisk", "scoring"]
  },
  {
    chapterId: "exchanges",
    chapterTitle: "Freight Exchanges",
    section: "Teleroute",
    content: "Teleroute: Coface-backed Payment Guarantee, wide European coverage.",
    keywords: ["teleroute", "coface", "payment", "guarantee", "europe"]
  },
  {
    chapterId: "exchanges",
    chapterTitle: "Freight Exchanges",
    section: "Transporeon",
    content: "Transporeon: Enterprise-focused, direct shipper integrations, tender management.",
    keywords: ["transporeon", "enterprise", "shipper", "tender", "integration"]
  },

  // Translogica Chapter
  {
    chapterId: "translogica",
    chapterTitle: "Translogica TMS",
    section: "Client Registration",
    content: "Register new clients: Master Data → Addresses → New, then tick Customer checkbox.",
    keywords: ["translogica", "tms", "client", "registration", "master data", "addresses"]
  },
  {
    chapterId: "translogica",
    chapterTitle: "Translogica TMS",
    section: "Dispoplan",
    content: "Dispoplan: Dispatch planning module for drag/drop order assignment and vehicle monitoring.",
    keywords: ["dispoplan", "dispatch", "planning", "drag", "drop", "assignment"]
  },
  {
    chapterId: "translogica",
    chapterTitle: "Translogica TMS",
    section: "Order Registration",
    content: "Register transport order: Orders → Transport Orders → New, fill all required fields.",
    keywords: ["order", "transport", "registration", "new order"]
  },

  // Emergency Chapter
  {
    chapterId: "emergency",
    chapterTitle: "Emergency Procedures",
    section: "Emergency Number",
    content: "European emergency number: 112 - works in all EU countries for police, ambulance, fire.",
    keywords: ["112", "emergency", "police", "ambulance", "fire", "eu"]
  },
  {
    chapterId: "emergency",
    chapterTitle: "Emergency Procedures",
    section: "Accident Protocol",
    content: "Accident protocol: Secure scene, call 112, document everything, notify dispatcher.",
    keywords: ["accident", "protocol", "secure", "document", "dispatcher"]
  },
  {
    chapterId: "emergency",
    chapterTitle: "Emergency Procedures",
    section: "Breakdown",
    content: "Highway breakdown: Pull off road, hazard lights, warning triangle 100-200m, exit away from traffic.",
    keywords: ["breakdown", "highway", "hazard", "warning triangle", "roadside"]
  },
  {
    chapterId: "emergency",
    chapterTitle: "Emergency Procedures",
    section: "Cargo Damage",
    content: "Cargo damage: Take photos, note on CMR, do NOT sign clean POD if damaged.",
    keywords: ["cargo", "damage", "photos", "cmr", "pod", "reservation"]
  },
  {
    chapterId: "emergency",
    chapterTitle: "Emergency Procedures",
    section: "Theft Prevention",
    content: "Theft prevention: Use secure parking (TAPA certified), never leave truck unattended at rest areas.",
    keywords: ["theft", "tapa", "secure", "parking", "prevention"]
  },

  // Communication Chapter
  {
    chapterId: "communication",
    chapterTitle: "Client Communication",
    section: "Response Times",
    content: "Response time targets: Urgent spot quote 15 min, standard quote 1 hour, status update 30 min.",
    keywords: ["response", "time", "quote", "urgent", "status", "update"]
  },
  {
    chapterId: "communication",
    chapterTitle: "Client Communication",
    section: "Email Templates",
    content: "Professional email templates for order confirmation, delay notification, rate quotation.",
    keywords: ["email", "template", "confirmation", "delay", "quotation"]
  },
  {
    chapterId: "communication",
    chapterTitle: "Client Communication",
    section: "Difficult Conversations",
    content: "Handling angry clients: Listen, Acknowledge, Apologize, Solve, Follow up (LASAP).",
    keywords: ["angry", "client", "listen", "apologize", "solve", "complaint"]
  },

  // Claims Chapter
  {
    chapterId: "claims",
    chapterTitle: "Claims & Disputes",
    section: "CMR Time Limits",
    content: "CMR claim time limits: Visible damage - 7 days, hidden damage - 7 days from delivery, total loss - 30 days.",
    keywords: ["claim", "cmr", "time limit", "visible", "hidden", "damage"]
  },
  {
    chapterId: "claims",
    chapterTitle: "Claims & Disputes",
    section: "Liability Limit",
    content: "CMR liability limit: 8.33 SDR per kg (~€10/kg gross weight).",
    keywords: ["liability", "limit", "sdr", "kg", "weight", "cmr"]
  },
  {
    chapterId: "claims",
    chapterTitle: "Claims & Disputes",
    section: "Clean POD",
    content: "Never sign a clean POD when cargo is damaged. Always note damages and reservations.",
    keywords: ["clean", "pod", "damaged", "reservation", "signature"]
  },

  // Insurance Chapter
  {
    chapterId: "insurance",
    chapterTitle: "Transport Insurance",
    section: "CMR Insurance",
    content: "CMR liability insurance covers carrier's legal liability for cargo damage during transport.",
    keywords: ["cmr", "liability", "insurance", "carrier", "cargo"]
  },
  {
    chapterId: "insurance",
    chapterTitle: "Transport Insurance",
    section: "Coverage Limits",
    content: "Standard CMR insurance coverage: €100,000-500,000 per occurrence.",
    keywords: ["coverage", "limit", "100000", "500000", "occurrence"]
  },
  {
    chapterId: "insurance",
    chapterTitle: "Transport Insurance",
    section: "Cargo Insurance",
    content: "Goods in transit (cargo) insurance protects actual value of goods being transported.",
    keywords: ["cargo", "goods", "transit", "value", "insurance"]
  },

  // ADR Chapter
  {
    chapterId: "adr",
    chapterTitle: "ADR Dangerous Goods",
    section: "ADR Definition",
    content: "ADR: Agreement on Dangerous goods by Road - European regulations for transporting hazardous materials.",
    keywords: ["adr", "dangerous", "goods", "hazardous", "materials", "agreement"]
  },
  {
    chapterId: "adr",
    chapterTitle: "ADR Dangerous Goods",
    section: "Hazard Labels",
    content: "ADR hazard labels are diamond-shaped and display hazard class and symbol.",
    keywords: ["hazard", "label", "diamond", "class", "symbol", "placard"]
  },
  {
    chapterId: "adr",
    chapterTitle: "ADR Dangerous Goods",
    section: "UN Numbers",
    content: "ADR shipments require transport document with UN numbers, proper shipping names, emergency contacts.",
    keywords: ["un", "number", "transport", "document", "emergency", "shipping"]
  },
  {
    chapterId: "adr",
    chapterTitle: "ADR Dangerous Goods",
    section: "ADR Training",
    content: "Drivers transporting dangerous goods must have valid ADR training certification.",
    keywords: ["training", "certification", "driver", "adr", "license"]
  },

  // Documents Chapter
  {
    chapterId: "documents",
    chapterTitle: "Transport Documents",
    section: "CMR Note",
    content: "CMR consignment note: Standard document for international road transport, typically 3-4 copies.",
    keywords: ["cmr", "consignment", "note", "international", "road", "copies"]
  },
  {
    chapterId: "documents",
    chapterTitle: "Transport Documents",
    section: "T1 Document",
    content: "T1 Transit Document required for non-EU goods or goods leaving EU customs territory.",
    keywords: ["t1", "transit", "customs", "eu", "territory", "document"]
  },
  {
    chapterId: "documents",
    chapterTitle: "Transport Documents",
    section: "CMR Box 18",
    content: "Any discrepancies during loading should be noted as reservations in CMR Box 18.",
    keywords: ["box 18", "reservation", "discrepancy", "loading", "cmr"]
  },

  // Case Studies
  {
    chapterId: "case-studies",
    chapterTitle: "Case Studies",
    section: "Practical Scenarios",
    content: "Real-world case studies with practical scenarios for freight forwarding decision-making.",
    keywords: ["case", "study", "scenario", "practical", "example", "decision"]
  },

  // Glossary
  {
    chapterId: "glossary",
    chapterTitle: "Glossary",
    section: "Terms",
    content: "Comprehensive glossary of freight forwarding and logistics terminology.",
    keywords: ["glossary", "terms", "definition", "terminology", "vocabulary"]
  },

  // Training
  {
    chapterId: "training",
    chapterTitle: "Training Exercises",
    section: "Exercises",
    content: "Practical training exercises for freight forwarders and dispatchers.",
    keywords: ["training", "exercise", "practice", "learning"]
  },

  // Red Flags
  {
    chapterId: "red-flags",
    chapterTitle: "Red Flags & Tips",
    section: "French Lanes",
    content: "Be careful with cheap French lanes - France has expensive toll roads.",
    keywords: ["france", "french", "toll", "cheap", "rate", "warning"]
  },
  {
    chapterId: "red-flags",
    chapterTitle: "Red Flags & Tips",
    section: "Brenner Pass",
    content: "Brenner Pass (Austria): Double toll charges between 22:00-05:00.",
    keywords: ["brenner", "pass", "austria", "double", "toll", "night"]
  },
  {
    chapterId: "red-flags",
    chapterTitle: "Red Flags & Tips",
    section: "Documentation Rule",
    content: "Golden rule: Photo + Timestamp = Protection. Without documentation, no defense in disputes.",
    keywords: ["photo", "timestamp", "documentation", "protection", "golden rule"]
  },

  // Checklists
  {
    chapterId: "checklists",
    chapterTitle: "Checklists",
    section: "Pre-Trip",
    content: "Pre-trip checklists for drivers and dispatchers covering all essential checks.",
    keywords: ["checklist", "pre-trip", "check", "inspection", "verification"]
  },

  // Reefer Chapter
  {
    chapterId: "reefer",
    chapterTitle: "Reefer Transport",
    section: "Temperature Zones",
    content: "Temperature zones: Frozen (-18°C to -25°C), Chilled (+2°C to +8°C), Fresh (+12°C to +15°C), Controlled (+15°C to +25°C).",
    keywords: ["reefer", "temperature", "frozen", "chilled", "fresh", "controlled", "cooling"]
  },
  {
    chapterId: "reefer",
    chapterTitle: "Reefer Transport",
    section: "Pre-Cooling",
    content: "Reefer pre-cooling: Must bring trailer to required temperature before loading. Never load warm product into cold trailer.",
    keywords: ["pre-cooling", "trailer", "temperature", "loading", "cold chain"]
  },
  {
    chapterId: "reefer",
    chapterTitle: "Reefer Transport",
    section: "Temperature Recording",
    content: "Temperature recording: Continuous monitoring required. Print temperature strips at delivery for proof of cold chain compliance.",
    keywords: ["temperature", "recording", "monitoring", "cold chain", "strips", "compliance"]
  },
  {
    chapterId: "reefer",
    chapterTitle: "Reefer Transport",
    section: "ATP Certificate",
    content: "ATP Certificate: Required for international transport of perishable goods. Valid for 6 years, then renewable.",
    keywords: ["atp", "certificate", "perishable", "international", "6 years"]
  },

  // Customs Chapter
  {
    chapterId: "customs",
    chapterTitle: "Customs & Border",
    section: "T1 Transit",
    content: "T1 Transit procedure for non-EU goods moving through EU territory under customs control.",
    keywords: ["t1", "transit", "customs", "non-eu", "procedure", "control"]
  },
  {
    chapterId: "customs",
    chapterTitle: "Customs & Border",
    section: "NCTS System",
    content: "NCTS (New Computerised Transit System): Electronic system for managing transit declarations across EU.",
    keywords: ["ncts", "electronic", "transit", "declaration", "system"]
  },
  {
    chapterId: "customs",
    chapterTitle: "Customs & Border",
    section: "Customs Seals",
    content: "Customs seals: Never break without authorization. Record seal numbers on all documents.",
    keywords: ["seal", "customs", "break", "authorization", "number", "record"]
  },
  {
    chapterId: "customs",
    chapterTitle: "Customs & Border",
    section: "AEO Status",
    content: "AEO (Authorized Economic Operator): EU trusted trader status for faster customs clearance.",
    keywords: ["aeo", "authorized", "economic", "operator", "trusted", "clearance"]
  },
  {
    chapterId: "customs",
    chapterTitle: "Customs & Border",
    section: "Brexit UK",
    content: "UK post-Brexit: Full customs declarations required. GVMS system for port entries.",
    keywords: ["uk", "brexit", "customs", "gvms", "port", "declaration"]
  },

  // Fleet Chapter
  {
    chapterId: "fleet",
    chapterTitle: "Fleet Management",
    section: "GPS Tracking",
    content: "GPS tracking enables real-time vehicle location, ETA updates, and geofencing alerts.",
    keywords: ["gps", "tracking", "location", "eta", "geofencing", "real-time"]
  },
  {
    chapterId: "fleet",
    chapterTitle: "Fleet Management",
    section: "Telematics",
    content: "Telematics data: Fuel consumption, driving behavior, maintenance alerts, tachograph integration.",
    keywords: ["telematics", "fuel", "consumption", "driving", "behavior", "maintenance"]
  },
  {
    chapterId: "fleet",
    chapterTitle: "Fleet Management",
    section: "Vehicle Scheduling",
    content: "Vehicle scheduling: Optimize routes, minimize empty runs, balance driver hours.",
    keywords: ["scheduling", "routes", "optimize", "empty runs", "driver hours"]
  },
  {
    chapterId: "fleet",
    chapterTitle: "Fleet Management",
    section: "Maintenance Planning",
    content: "Preventive maintenance: Regular inspections, oil changes, brake checks, tire rotation schedules.",
    keywords: ["maintenance", "preventive", "inspection", "oil", "brake", "tire"]
  },

  // Environment Chapter
  {
    chapterId: "environment",
    chapterTitle: "Environmental Compliance",
    section: "Euro Emission Standards",
    content: "Euro emission standards: Euro 6d is current requirement for new trucks. Lower classes may face restrictions.",
    keywords: ["euro", "emission", "euro 6", "standards", "trucks", "environment"]
  },
  {
    chapterId: "environment",
    chapterTitle: "Environmental Compliance",
    section: "Low Emission Zones",
    content: "Low Emission Zones (LEZ): Many European cities restrict truck access based on emission class.",
    keywords: ["lez", "low emission", "zone", "city", "restriction", "access"]
  },
  {
    chapterId: "environment",
    chapterTitle: "Environmental Compliance",
    section: "CO2 Reporting",
    content: "CO2 reporting increasingly required by customers. Calculate emissions per tonne-km transported.",
    keywords: ["co2", "carbon", "reporting", "emissions", "tonne-km", "sustainability"]
  },
  {
    chapterId: "environment",
    chapterTitle: "Environmental Compliance",
    section: "Eco-Driving",
    content: "Eco-driving techniques: Steady speed, anticipate traffic, correct tire pressure, reduce idling.",
    keywords: ["eco-driving", "fuel", "efficiency", "speed", "tire", "idling"]
  },

  // Payment Chapter
  {
    chapterId: "payment",
    chapterTitle: "Payment & Invoicing",
    section: "Payment Terms",
    content: "Standard payment terms: 30-60 days after invoice. Spot market often requires faster payment.",
    keywords: ["payment", "terms", "30 days", "60 days", "invoice", "spot"]
  },
  {
    chapterId: "payment",
    chapterTitle: "Payment & Invoicing",
    section: "Invoice Requirements",
    content: "Invoice must include: CMR number, route details, weight, agreed rate, VAT, bank details.",
    keywords: ["invoice", "cmr", "route", "rate", "vat", "bank", "requirements"]
  },
  {
    chapterId: "payment",
    chapterTitle: "Payment & Invoicing",
    section: "Credit Checks",
    content: "Credit checks: Verify new customers before extending credit. Use services like Coface, Euler Hermes.",
    keywords: ["credit", "check", "coface", "euler", "hermes", "verify", "customer"]
  },
  {
    chapterId: "payment",
    chapterTitle: "Payment & Invoicing",
    section: "Fuel Cards",
    content: "Fuel cards: Centralized fleet fuel management, discounts at network stations, expense tracking.",
    keywords: ["fuel", "card", "fleet", "discount", "dkv", "uta", "as24"]
  },

  // Clients Chapter - Extended
  {
    chapterId: "clients",
    chapterTitle: "Clients & Partners",
    section: "Client Segmentation",
    content: "Client segmentation: A (key accounts), B (regular), C (occasional). Different service levels per segment.",
    keywords: ["client", "segmentation", "key account", "regular", "service level"]
  },
  {
    chapterId: "clients",
    chapterTitle: "Clients & Partners",
    section: "Carrier Vetting",
    content: "Carrier vetting checklist: Operating license, CMR insurance, vehicle documents, driver ADR certificates.",
    keywords: ["carrier", "vetting", "license", "insurance", "documents", "verification"]
  },
  {
    chapterId: "clients",
    chapterTitle: "Clients & Partners",
    section: "Performance Scoring",
    content: "Carrier performance scoring: On-time delivery, damage rate, communication, flexibility, pricing.",
    keywords: ["performance", "scoring", "on-time", "damage", "rating", "carrier"]
  },

  // Workflow Diagrams
  {
    chapterId: "workflow",
    chapterTitle: "Operational Workflow",
    section: "Process Flow Diagram",
    content: "Visual workflow diagram: Intake → Sourcing → Costing → Execution → Delivery → Post-Trip phases.",
    keywords: ["diagram", "flowchart", "process", "visual", "workflow", "phases"]
  },
  {
    chapterId: "workflow",
    chapterTitle: "Operational Workflow",
    section: "Margin Calculation",
    content: "Margin calculation: (Selling Price - Cost) / Selling Price × 100. Target 8-18% profit margin.",
    keywords: ["margin", "calculation", "profit", "formula", "percentage"]
  },

  // Loading Diagrams
  {
    chapterId: "loading",
    chapterTitle: "Loading & Securing",
    section: "Loading Process Flow",
    content: "Loading process flow: Confirm Slot → Position → Inspect → Load → Secure → Document.",
    keywords: ["loading", "process", "flow", "diagram", "steps", "sequence"]
  },
  {
    chapterId: "loading",
    chapterTitle: "Loading & Securing",
    section: "Axle Weight Distribution",
    content: "Axle weight distribution: Front axle max ~7t, drive axle ~11.5t, trailer axles ~24t. Check country limits.",
    keywords: ["axle", "weight", "distribution", "front", "drive", "trailer", "limit"]
  },

  // Claims Diagrams
  {
    chapterId: "claims",
    chapterTitle: "Claims & Disputes",
    section: "Claims Process Flow",
    content: "Claims process flow: Damage Found → CMR Reserve → Notify (7 days) → Quantify → Settle.",
    keywords: ["claims", "process", "flow", "diagram", "steps", "settlement"]
  },
  {
    chapterId: "claims",
    chapterTitle: "Claims & Disputes",
    section: "SDR Calculation",
    content: "SDR (Special Drawing Rights) calculation: 8.33 SDR × gross weight in kg = maximum liability.",
    keywords: ["sdr", "calculation", "special drawing rights", "liability", "weight"]
  },

  // Emergency Diagrams
  {
    chapterId: "emergency",
    chapterTitle: "Emergency Procedures",
    section: "Emergency Response Flow",
    content: "Emergency response flow: Secure Scene → Call 112 → Document → Notify Dispatcher → Wait Instructions.",
    keywords: ["emergency", "response", "flow", "112", "procedure", "steps"]
  },
  {
    chapterId: "emergency",
    chapterTitle: "Emergency Procedures",
    section: "Situation Handling Map",
    content: "Emergency situation handling: Road Accident, Vehicle Breakdown, Cargo Damage, Theft/Security - each with specific protocols.",
    keywords: ["situation", "handling", "accident", "breakdown", "damage", "theft", "protocol"]
  }
];

export function searchContent(query: string): SearchableItem[] {
  if (!query || query.length < 2) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);
  
  return searchableContent.filter(item => {
    const searchText = `${item.chapterTitle} ${item.section} ${item.content} ${item.keywords.join(' ')}`.toLowerCase();
    
    // Check if all query words are found in the content
    return queryWords.every(word => searchText.includes(word));
  }).slice(0, 10); // Limit to 10 results
}
