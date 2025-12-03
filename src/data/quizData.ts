export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizzes: Record<string, QuizQuestion[]> = {
  mindset: [
    {
      question: "What is the 4W model used for in freight forwarding communication?",
      options: ["Weather, Weight, Width, Warranty", "Who, What, When, Where", "Work, Wait, Watch, Write", "Warehouse, Waybill, Weight, Warranty"],
      correctIndex: 1,
      explanation: "The 4W model (Who, What, When, Where) ensures clear, complete communication in every interaction.",
    },
    {
      question: "Why is documentation considered 'protection' in freight forwarding?",
      options: ["It protects the cargo from damage", "It provides audit trail and legal evidence", "It protects the driver from weather", "It's not important"],
      correctIndex: 1,
      explanation: "Documentation creates an auditable record of all activities. If it's not documented, it didn't happen – especially important for disputes and insurance claims.",
    },
    {
      question: "How should you treat drivers according to best practices?",
      options: ["As employees only", "As partners with respect", "Keep minimal contact", "Give orders without explanation"],
      correctIndex: 1,
      explanation: "Treating drivers as partners with respect directly improves punctuality and cooperation.",
    },
  ],
  workflow: [
    {
      question: "What is the correct priority order for capacity sourcing?",
      options: ["Spot market → Preferred carriers → Own fleet", "Own fleet → Preferred carriers → Spot market", "Preferred carriers → Own fleet → Spot market", "Random selection"],
      correctIndex: 1,
      explanation: "Always prioritize: 1) Own fleet, 2) Preferred carriers, 3) Spot market (TIMOCOM/Trans.eu/Teleroute).",
    },
    {
      question: "What is the base rate typically used for cost calculation?",
      options: ["€0.80/km", "€1.10/km", "€1.50/km", "€2.00/km"],
      correctIndex: 1,
      explanation: "The standard base rate for EU road freight is approximately €1.10/km, before adding tolls and accessorials.",
    },
    {
      question: "What should you collect after delivery completion?",
      options: ["Only the invoice", "Signed CMR/POD", "Just a thank you email", "Nothing is required"],
      correctIndex: 1,
      explanation: "Always collect a signed CMR/POD (Proof of Delivery), scan or upload via TMS for documentation.",
    },
  ],
  vehicle: [
    {
      question: "What is the standard length of a curtainsider trailer?",
      options: ["10.5m", "12.0m", "13.6m", "15.0m"],
      correctIndex: 2,
      explanation: "The standard European curtainsider/tautliner trailer is 13.6m long.",
    },
    {
      question: "Approximately how many EUR pallets can a 13.6m curtainsider hold?",
      options: ["20 pallets", "25 pallets", "33 pallets", "40 pallets"],
      correctIndex: 2,
      explanation: "A standard 13.6m curtainsider can hold approximately 33 EUR pallets.",
    },
    {
      question: "What is the typical payload capacity of a 13.6m trailer?",
      options: ["10-15 tonnes", "18-22 tonnes", "24-29 tonnes", "35-40 tonnes"],
      correctIndex: 2,
      explanation: "The payload capacity is typically 24-29 tonnes depending on the truck/trailer specification.",
    },
  ],
  loading: [
    {
      question: "What standard covers cargo securing requirements?",
      options: ["ISO 9001", "EN 12195-1", "GDPR", "Euro 6"],
      correctIndex: 1,
      explanation: "EN 12195-1 is the European standard for cargo securing equipment and calculations.",
    },
    {
      question: "What is the required forward restraint according to EN standards?",
      options: ["50% (0.5g)", "60% (0.6g)", "80% (0.8g)", "100% (1.0g)"],
      correctIndex: 2,
      explanation: "Forward restraint must be 80% of cargo weight (0.8g) due to deceleration forces during braking.",
    },
    {
      question: "Why should you take photos during loading?",
      options: ["For social media", "For insurance/audit purposes", "Just for fun", "It's not necessary"],
      correctIndex: 1,
      explanation: "Timestamped photos serve as evidence for insurance claims and audits. No photos = no proof.",
    },
  ],
  compliance: [
    {
      question: "What is the maximum daily driving time for a single driver?",
      options: ["8 hours", "9 hours (10h twice/week)", "11 hours", "12 hours"],
      correctIndex: 1,
      explanation: "Maximum daily driving is 9 hours, which can be extended to 10 hours twice per week.",
    },
    {
      question: "After how many hours of driving must a driver take a break?",
      options: ["3 hours", "4 hours 30 minutes", "5 hours", "6 hours"],
      correctIndex: 1,
      explanation: "A 45-minute break is required after 4 hours 30 minutes of driving (can be split 15'+30').",
    },
    {
      question: "What is the maximum weekly driving time limit?",
      options: ["40 hours", "48 hours", "56 hours", "60 hours"],
      correctIndex: 2,
      explanation: "Maximum weekly driving time is 56 hours, with a bi-weekly maximum of 90 hours.",
    },
  ],
  "driving-time": [
    {
      question: "Is time spent in a traffic jam counted as driving time?",
      options: ["No, only actual movement counts", "Yes, 100% counted as driving time", "Only 50% is counted", "Depends on the country"],
      correctIndex: 1,
      explanation: "Traffic jam time is 100% counted as driving time. Only when you park and switch tacho to REST does it stop counting.",
    },
    {
      question: "What is the maximum shift time for a single driver?",
      options: ["9 hours", "11 hours", "13-15 hours", "21 hours"],
      correctIndex: 2,
      explanation: "Single driver maximum shift time is 13-15 hours (depending on national working time rules).",
    },
    {
      question: "What distance can a double-manned crew cover in 24 hours?",
      options: ["~500 km", "~700 km", "~1,100 km", "~1,500 km"],
      correctIndex: 2,
      explanation: "With two drivers rotating, approximately 1,100 km can be covered in 24 hours.",
    },
    {
      question: "When does Germany's Sunday driving ban end?",
      options: ["18:00", "20:00", "22:00", "Midnight"],
      correctIndex: 2,
      explanation: "Germany's Sunday driving ban for trucks >3.5t ends at 22:00.",
    },
  ],
  pricing: [
    {
      question: "What is the typical profit margin range in freight forwarding?",
      options: ["2-5%", "8-18%", "25-30%", "40-50%"],
      correctIndex: 1,
      explanation: "Typical margins range from 8-18%, depending on the service level and competition.",
    },
    {
      question: "What is the approximate toll rate in Germany per km?",
      options: ["€0.15/km", "€0.25/km", "€0.45/km", "€0.65/km"],
      correctIndex: 2,
      explanation: "German toll rates are approximately €0.45/km, varying by CO₂ class and axle count (2024 tiers).",
    },
    {
      question: "Which component should always be added to the base cost?",
      options: ["Driver's bonus only", "Tolls, ferries, accessorials, waiting, border fees", "Only the margin", "Nothing else needed"],
      correctIndex: 1,
      explanation: "Complete costing must include tolls, ferries, accessorials, waiting time, and border fees on top of the base km rate.",
    },
  ],
  exchanges: [
    {
      question: "Which platform offers a Coface-backed Payment Guarantee?",
      options: ["TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"],
      correctIndex: 2,
      explanation: "Teleroute offers a Payment Guarantee backed by Coface insurance for added payment security.",
    },
    {
      question: "Which freight exchange is strongest in Central/Eastern Europe?",
      options: ["TIMOCOM", "Trans.eu", "Teleroute", "Transporeon"],
      correctIndex: 1,
      explanation: "Trans.eu has a strong verified network in CEE/EU countries with features like TransRisk scoring.",
    },
    {
      question: "What should you always check before booking with a new carrier?",
      options: ["Their truck color", "Partner ratings and documents", "Their social media", "Nothing needed"],
      correctIndex: 1,
      explanation: "Always verify partner ratings, insurance, and licenses before booking to avoid payment defaults and issues.",
    },
  ],
  translogica: [
    {
      question: "Where do you register a new client in Translogica?",
      options: ["Orders → New Client", "Master Data → Addresses → New", "Settings → Clients", "Dashboard → Add"],
      correctIndex: 1,
      explanation: "New clients are registered via Master Data → Addresses → New, then tick the Customer checkbox.",
    },
    {
      question: "What is the Dispoplan used for in Translogica?",
      options: ["Invoicing only", "Dispatch planning with drag/drop", "Email management", "Report generation"],
      correctIndex: 1,
      explanation: "Dispoplan is the dispatch planning module for drag/drop order assignment to trucks and monitoring vehicles.",
    },
    {
      question: "Which external platform can auto-import orders into Translogica?",
      options: ["Facebook", "Transporeon", "LinkedIn", "WhatsApp"],
      correctIndex: 1,
      explanation: "Transporeon integrates with Translogica for automatic import of client orders.",
    },
  ],
  "red-flags": [
    {
      question: "Why should you be careful with 'cheap' French lanes?",
      options: ["French drivers are unreliable", "France has expensive toll roads", "Loading times are long", "No reason"],
      correctIndex: 1,
      explanation: "France has expensive toll roads. Always calculate full toll costs before accepting seemingly attractive rates.",
    },
    {
      question: "What special consideration applies to Brenner Pass in Austria?",
      options: ["No trucks allowed", "Double toll between 22:00-05:00", "Only electric trucks", "Free passage"],
      correctIndex: 1,
      explanation: "Brenner Pass has double toll charges between 22:00-05:00, so plan timing or use alternatives.",
    },
    {
      question: "What is the golden rule for documentation?",
      options: ["Document only problems", "Photo + Timestamp = Protection", "Only keep CMRs", "Minimal paperwork is best"],
      correctIndex: 1,
      explanation: "Always document with timestamped photos. Without documentation, you have no defense in disputes.",
    },
  ],
  emergency: [
    {
      question: "What is the European emergency number that works in all EU countries?",
      options: ["911", "999", "112", "100"],
      correctIndex: 2,
      explanation: "112 is the universal European emergency number for police, ambulance, and fire services in all EU countries.",
    },
    {
      question: "How far behind the vehicle should you place a warning triangle on a highway?",
      options: ["50m", "100-200m", "300m", "500m"],
      correctIndex: 1,
      explanation: "Warning triangles should be placed 100-200m behind the vehicle on highways to give approaching traffic adequate warning.",
    },
    {
      question: "What should you do first when discovering cargo damage?",
      options: ["Continue delivery normally", "Take detailed photos with timestamps", "Call the police immediately", "Throw away damaged goods"],
      correctIndex: 1,
      explanation: "Always document damage with timestamped photos first. Do NOT sign a clean POD if cargo is damaged.",
    },
    {
      question: "What is TAPA certification related to?",
      options: ["Driver training", "Vehicle emissions", "Secure parking facilities", "Customs clearance"],
      correctIndex: 2,
      explanation: "TAPA (Transported Asset Protection Association) certifies secure parking facilities for high-value cargo.",
    },
  ],
  communication: [
    {
      question: "What is the best channel for urgent issues requiring immediate response?",
      options: ["Email", "TMS notification", "Phone call", "Letter"],
      correctIndex: 2,
      explanation: "Phone calls are best for urgent issues as they allow immediate two-way communication and quick resolution.",
    },
    {
      question: "What is the target response time for an urgent spot quote?",
      options: ["1 hour", "30 minutes", "15 minutes", "Same day"],
      correctIndex: 2,
      explanation: "Urgent spot quotes should be responded to within 15 minutes, with a maximum of 30 minutes.",
    },
    {
      question: "What should you always do after an important phone call?",
      options: ["Nothing needed", "Send written confirmation", "Call again to verify", "Wait for client to confirm"],
      correctIndex: 1,
      explanation: "Always follow up important phone calls with written confirmation via email to create documentation.",
    },
    {
      question: "What is the first step when dealing with an angry client?",
      options: ["Defend yourself immediately", "Listen and let them express frustration", "Transfer to manager", "Hang up"],
      correctIndex: 1,
      explanation: "The LASAP method starts with Listen - let the client express their frustration before responding.",
    },
  ],
  claims: [
    {
      question: "What is the CMR time limit for visible damage claims?",
      options: ["24 hours", "7 days", "21 days", "1 year"],
      correctIndex: 1,
      explanation: "Visible damage must be noted on the CMR at delivery. Claims should be filed within 7 days for visible damage.",
    },
    {
      question: "What is the maximum liability limit per kg under CMR convention?",
      options: ["€5/kg", "€8.33/kg (SDR)", "€12/kg", "€20/kg"],
      correctIndex: 1,
      explanation: "CMR limits carrier liability to 8.33 SDR (Special Drawing Rights) per kg of gross weight, approximately €10/kg.",
    },
    {
      question: "What should you NEVER sign when receiving damaged cargo?",
      options: ["The CMR", "A clean POD", "The invoice", "The driver's log"],
      correctIndex: 1,
      explanation: "Never sign a clean POD (Proof of Delivery) when cargo is damaged. Always note damages and reservations.",
    },
    {
      question: "Within how many days must hidden damage claims be submitted?",
      options: ["3 days", "7 days", "21 days", "30 days"],
      correctIndex: 1,
      explanation: "Hidden damage that wasn't visible at delivery must be claimed within 7 days of delivery.",
    },
  ],
  insurance: [
    {
      question: "What type of insurance covers carrier's liability for cargo damage?",
      options: ["Vehicle insurance", "CMR liability insurance", "Health insurance", "Property insurance"],
      correctIndex: 1,
      explanation: "CMR liability insurance covers the carrier's legal liability for cargo damage during transport.",
    },
    {
      question: "What is the typical coverage limit for standard CMR insurance?",
      options: ["€50,000", "€100,000-500,000", "€1 million", "Unlimited"],
      correctIndex: 1,
      explanation: "Standard CMR insurance typically provides coverage between €100,000 and €500,000 per occurrence.",
    },
    {
      question: "What is 'goods in transit' insurance also known as?",
      options: ["Vehicle insurance", "Cargo insurance", "Public liability", "Fleet insurance"],
      correctIndex: 1,
      explanation: "Goods in transit insurance (cargo insurance) protects the actual value of the goods being transported.",
    },
    {
      question: "Why might you need additional insurance beyond CMR liability?",
      options: ["CMR is optional", "CMR limits may be insufficient for high-value cargo", "CMR only covers trucks", "CMR doesn't exist"],
      correctIndex: 1,
      explanation: "CMR liability limits (~€10/kg) may be insufficient for high-value cargo, requiring additional coverage.",
    },
  ],
  adr: [
    {
      question: "What does ADR stand for?",
      options: ["Advanced Driving Regulations", "Agreement on Dangerous goods by Road", "Automated Delivery Route", "Area Distribution Requirements"],
      correctIndex: 1,
      explanation: "ADR stands for 'Accord européen relatif au transport international des marchandises Dangereuses par Route' (Agreement on Dangerous goods by Road).",
    },
    {
      question: "What shape are ADR hazard placards/labels?",
      options: ["Circle", "Square tilted 45° (diamond)", "Triangle", "Rectangle"],
      correctIndex: 1,
      explanation: "ADR hazard labels are diamond-shaped (square tilted 45°) and display the hazard class and symbol.",
    },
    {
      question: "What document must accompany ADR shipments?",
      options: ["Only CMR", "ADR Transport Document with UN numbers", "Driver's license only", "No special document"],
      correctIndex: 1,
      explanation: "ADR shipments require a specific transport document showing UN numbers, proper shipping names, and emergency contacts.",
    },
    {
      question: "Who needs ADR training certification?",
      options: ["Only the shipper", "Drivers transporting dangerous goods", "Only warehouse staff", "No one specifically"],
      correctIndex: 1,
      explanation: "Drivers transporting dangerous goods must have valid ADR training certification for the classes they transport.",
    },
  ],
  documents: [
    {
      question: "What is the CMR consignment note used for?",
      options: ["Customs only", "International road freight contract evidence", "Driver identification", "Vehicle registration"],
      correctIndex: 1,
      explanation: "The CMR (Convention on the Contract for International Carriage of Goods by Road) is the standard consignment note for international road transport.",
    },
    {
      question: "How many original copies of a CMR are typically created?",
      options: ["1 copy", "2 copies", "3-4 copies", "6 copies"],
      correctIndex: 2,
      explanation: "CMRs are typically issued in 3-4 copies: for the sender, carrier, consignee, and sometimes an additional copy.",
    },
    {
      question: "What customs document is required for goods crossing EU borders to non-EU countries?",
      options: ["CMR only", "T1 Transit Document", "Packing list only", "Invoice only"],
      correctIndex: 1,
      explanation: "T1 (external transit) documents are required for non-EU goods or goods leaving the EU customs territory.",
    },
    {
      question: "What should a driver do if they notice discrepancies during loading?",
      options: ["Ignore it", "Note reservations on CMR Box 18", "Refuse the load entirely", "Call the police"],
      correctIndex: 1,
      explanation: "Any discrepancies (damaged packaging, quantity differences) should be noted as reservations in CMR Box 18.",
    },
  ],
};
