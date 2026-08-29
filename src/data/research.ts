export type Confidence = "verified" | "directional" | "illustrative" | "not-tested";

export const marketSignals = [
  {
    label: "U.S. tea servings",
    value: "≈85B",
    detail: "Tea is already a mainstream American beverage category.",
    confidence: "verified" as Confidence
  },
  {
    label: "Black tea share",
    value: "84%",
    detail: "Mainstream tea consumption does not automatically validate specialist Chinese tea.",
    confidence: "verified" as Confidence
  },
  {
    label: "Packaged retail",
    value: "$1.7B",
    detail: "Bag and loose-leaf sales for the 52 weeks ending April 20, 2025.",
    confidence: "verified" as Confidence
  },
  {
    label: "90-day test",
    value: "$49K",
    detail: "An illustrative validation budget that must be rebuilt with live quotes.",
    confidence: "illustrative" as Confidence
  }
];

export const customerNeeds = [
  {
    need: "Daily caffeine",
    competesWith: "Coffee, matcha, boba",
    opening: "A clear, approachable tea ritual for work and home.",
    signal: 84
  },
  {
    need: "Cultural discovery",
    competesWith: "Museums, classes, tasting menus",
    opening: "Ticketed guided experiences with a confident beginner entry point.",
    signal: 91
  },
  {
    need: "Social occasion",
    competesWith: "Bars, dessert cafés, restaurants",
    opening: "An alcohol-free evening experience with programming and reservations.",
    signal: 76
  },
  {
    need: "Craft and provenance",
    competesWith: "Wine, coffee, whisky, ceramics",
    opening: "Origin, processing, vintage and comparative tasting.",
    signal: 88
  },
  {
    need: "Gift and status",
    competesWith: "Wine and premium food boxes",
    opening: "Tea and teaware sets with exceptional storytelling.",
    signal: 71
  },
  {
    need: "Community",
    competesWith: "Clubs, memberships, third places",
    opening: "Recurring education and access rather than unlimited low-cost dwell time.",
    signal: 82
  }
];

export const models = [
  {
    rank: 1,
    name: "Paid tastings + e-commerce",
    score: 4.53,
    capital: 45000,
    fixed: 12000,
    margin: 55,
    ticket: 58,
    decision: "Primary launch model",
    thesis: "Fast paid validation that turns education into product conversion.",
    tags: ["fast", "flexible", "evidence"]
  },
  {
    rank: 2,
    name: "Content-led e-commerce",
    score: 4.47,
    capital: 25000,
    fixed: 8000,
    margin: 44,
    ticket: 68,
    decision: "Core acquisition channel",
    thesis: "Maximum geographic flexibility, but attention must convert into repeat orders.",
    tags: ["low-capital", "remote", "flexible"]
  },
  {
    rank: 3,
    name: "Corporate events + gifting",
    score: 4.18,
    capital: 35000,
    fixed: 10000,
    margin: 50,
    ticket: 1200,
    decision: "Build early",
    thesis: "High-ticket demand can subsidize education and create weekday revenue.",
    tags: ["b2b", "high-ticket", "flexible"]
  },
  {
    rank: 4,
    name: "Wholesale / hospitality",
    score: 3.97,
    capital: 50000,
    fixed: 14000,
    margin: 42,
    ticket: 650,
    decision: "Selective",
    thesis: "Scales without seats, provided supply and the buyer proposition remain consistent.",
    tags: ["b2b", "scale"]
  },
  {
    rank: 5,
    name: "Appointment tasting studio",
    score: 3.63,
    capital: 120000,
    fixed: 25000,
    margin: 65,
    ticket: 72,
    decision: "Only after gates pass",
    thesis: "Strong brand fit, but repeat local demand and manager economics must come first.",
    tags: ["physical", "premium"]
  },
  {
    rank: 6,
    name: "Small showroom / retail",
    score: 2.92,
    capital: 250000,
    fixed: 38000,
    margin: 65,
    ticket: 48,
    decision: "Premature",
    thesis: "Rent and staffing arrive before enough qualified demand is known.",
    tags: ["physical", "high-capital"]
  },
  {
    rank: 7,
    name: "Manager-operated tea house",
    score: 2.58,
    capital: 500000,
    fixed: 65000,
    margin: 68,
    ticket: 26,
    decision: "Last escalation",
    thesis: "The highest fixed-cost and founder-transfer risk in the analysis.",
    tags: ["physical", "high-capital", "operator-risk"]
  }
];

export const cities = [
  {
    rank: 1,
    name: "Los Angeles / SGV",
    score: 4.4,
    role: "Primary validation",
    neighborhoods: "Pasadena · Alhambra/Arcadia · Chinatown/Silver Lake",
    strength: "Diaspora depth, tea proof, media reach and China logistics",
    tension: "Competition, rent and multiple distinct submarkets",
    coordinates: [-118.2437, 34.0522]
  },
  {
    rank: 2,
    name: "San Francisco Bay Area",
    score: 4.17,
    role: "Premium pop-up / B2B",
    neighborhoods: "Inner Richmond/Japantown · Berkeley · Peninsula",
    strength: "Spending power, design sensitivity and tea literacy",
    tension: "Very high labor and occupancy cost",
    coordinates: [-122.4194, 37.7749]
  },
  {
    rank: 3,
    name: "Seattle",
    score: 4.15,
    role: "Primary validation",
    neighborhoods: "Fremont/Wallingford · Capitol Hill · International District",
    strength: "Craft-beverage literacy and recurring community behavior",
    tension: "High wage floor and strong incumbents",
    coordinates: [-122.3321, 47.6062]
  },
  {
    rank: 4,
    name: "New York City",
    score: 4.14,
    role: "Pop-ups / collaborations",
    neighborhoods: "Flushing · Lower Manhattan · Brooklyn",
    strength: "Destination experiences, tourism and corporate demand",
    tension: "Extreme cost and competition",
    coordinates: [-74.006, 40.7128]
  },
  {
    rank: 5,
    name: "Austin",
    score: 3.96,
    role: "Primary validation",
    neighborhoods: "East Austin · North Loop · flexible central venues",
    strength: "Community culture and relative white space",
    tension: "Smaller direct market and specialist incumbent",
    coordinates: [-97.7431, 30.2672]
  }
];

export const cases = [
  {
    company: "Seven Cups",
    outcome: "Durable hybrid",
    place: "Tucson",
    lesson: "Community and product demand came before the tea house; online and wholesale extended the room.",
    mechanism: "demand-first",
    url: "https://sevencups.com/about-us/"
  },
  {
    company: "Tea Habitat",
    outcome: "Format corrected",
    place: "Los Angeles",
    lesson: "Serious customers were online while casual walk-ins wanted iced tea; appointments monetized expertise.",
    mechanism: "qualified-traffic",
    url: "https://teahabitat.com/collections/tea-tasting"
  },
  {
    company: "West China Tea",
    outcome: "Community survived pressure",
    place: "Austin",
    lesson: "A powerful community did not make a rapid jump from 200 to 3,000 square feet economically safe.",
    mechanism: "premature-scale",
    url: "https://westchinatea.com/"
  },
  {
    company: "Ching Ching Cha",
    outcome: "Relocated smaller",
    place: "Washington, DC",
    lesson: "Long, calm dwell time created cultural value but could not absorb a 48% rent increase.",
    mechanism: "rent-vs-time",
    url: "https://www.chingchingcha.com/"
  },
  {
    company: "Tea Drunk",
    outcome: "Knowledge business continued",
    place: "New York",
    lesson: "The storefront closed while education, guided tastings, private events and premium products survived.",
    mechanism: "knowledge-asset",
    url: "https://www.teadrunk.com/"
  },
  {
    company: "Denong Tea",
    outcome: "Store retreat + supply pause",
    place: "Pasadena",
    lesson: "Premium positioning and a beautiful room did not remove location and cross-border replenishment risk.",
    mechanism: "supply-risk",
    url: "https://www.denongtea.com/pages/temporary-pause-in-u-s-shipments"
  }
];

export const laWorkstreams = [
  { number: "01", title: "Business database", detail: "≈100 verified tea and adjacent businesses", state: "In research" },
  { number: "02", title: "Offer comparison", detail: "Prices, products and revenue models", state: "In research" },
  { number: "03", title: "Neighborhood scorecard", detail: "15 SGV and central/east LA markets", state: "In research" },
  { number: "04", title: "Business history", detail: "Openings, closures and longevity", state: "In research" },
  { number: "05", title: "Demand signals", detail: "Search interest and paid-event evidence", state: "Planned" },
  { number: "06", title: "Occupancy + labor", detail: "Live listings and staffing scenarios", state: "Planned" },
  { number: "07", title: "Import risk", detail: "Tariff, FDA and supply-chain analysis", state: "Planned" },
  { number: "08", title: "Partner pipeline", detail: "Venues, wholesale and corporate prospects", state: "Planned" },
  { number: "09", title: "Source ledger", detail: "URL, access date, data period and confidence", state: "Schema ready" },
  { number: "10", title: "Decision", detail: "Neighborhood, proposition, products and price", state: "After analysis" }
];

export const leaseGates = [
  ["Paid events", "20+ in one metro"],
  ["Manager-led events", "8+ without the founder"],
  ["Local paying customers", "300+ unique"],
  ["90-day repeat", "≈30–35%"],
  ["Product gross margin", "65%+"],
  ["CAC payback", "≤90 days"],
  ["Downside survival", "12 months at −30% sales"],
  ["Supply resilience", "2 viable U.S. arrangements"]
];

export const roadmap = [
  { period: "Weeks 1–2", title: "Define and source", detail: "Interview customers, test three propositions and qualify a small beginner range." },
  { period: "Weeks 2–4", title: "Test language and payment", detail: "Launch city pages, paid traffic, content and a $28 sampler preorder." },
  { period: "Weeks 5–8", title: "Test the live experience", detail: "Run six paid tastings across LA/SGV, Seattle and Austin." },
  { period: "Weeks 5–10", title: "Test B2B", detail: "Approach corporate planners, hospitality, cultural groups and premium gifting buyers." },
  { period: "Weeks 9–12", title: "Test repeat", detail: "Measure replenishment, second purchase and subscription intent by cohort." }
];
