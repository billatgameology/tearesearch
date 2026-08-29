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

export const marketDossiers = [
  {
    code: "LA",
    name: "Los Angeles / SGV",
    status: "Paid validation justified",
    question: "Can one metro prove both mainstream appeal and specialist credibility?",
    thesis: "Use Pasadena to test a polished beginner experience and Arcadia/SGV to test provenance, product authority and repeat purchasing.",
    format: "Reservation-led studio + mobile events",
    lanes: "Pasadena mainstream-premium · Arcadia/SGV authenticity and product",
    advantage: "The strongest two-sided test: visitor and institutional demand alongside a deep Chinese community.",
    constraint: "High rent, high labor cost and several distinct submarkets make a single storefront thesis unreliable.",
    nextMove: "Run matched paid sessions in Pasadena and Arcadia before extending to Monterey Park and Alhambra.",
    offers: [
      ["Hero drink", "$5–$10"],
      ["Guided tasting", "$35–$55"],
      ["Premium occasion", "$69–$100"]
    ],
    locations: [
      { name: "Arcadia", use: "Authenticity + product", community: 77.6, flagship: 70.7, b2b: 69.4 },
      { name: "Pasadena", use: "Mainstream paid test", community: 48.1, flagship: 68.2, b2b: 66.9 },
      { name: "Culver City", use: "B2B + private events", community: 53.7, flagship: 75.0, b2b: 72.8 }
    ],
    report: "/research/la-sgv-market-research.txt"
  },
  {
    code: "SF",
    name: "San Francisco Bay Area",
    status: "Paid validation justified",
    question: "Can a new offer earn its place in an already tea-literate region?",
    thesis: "Separate San Francisco destination demand, East Bay education demand and South Bay product/B2B demand instead of treating the Bay Area as one market.",
    format: "Reservation-led studio + portable events",
    lanes: "SF destination · East Bay education · South Bay product and B2B",
    advantage: "The deepest specialist ecosystem and multiple institutional, visitor and employer channels.",
    constraint: "Free retail tastings raise the bar for paid education while wages and occupancy remain exceptionally high.",
    nextMove: "Sequence Chinatown/North Beach collaborations, Mission ticketed sessions, resident repeat tests, then South Bay B2B.",
    offers: [
      ["Hero drink", "$5–$8"],
      ["Guided class", "$30–$75"],
      ["Membership signal", "$59–$108/mo"]
    ],
    locations: [
      { name: "Cupertino", use: "Product + B2B", community: 68.8, flagship: 73.9, b2b: 71.8 },
      { name: "North San Jose", use: "Employer groups", community: 65.3, flagship: 67.6, b2b: 71.1 },
      { name: "SF Chinatown / North Beach", use: "Heritage + visitors", community: 65.0, flagship: 59.7, b2b: 65.6 }
    ],
    report: "/research/sf-bay-area-market-research.txt"
  },
  {
    code: "SEA",
    name: "Seattle / Eastside",
    status: "Paid validation justified",
    question: "Can Eastside purchasing power and Seattle tea literacy become repeat behavior?",
    thesis: "Use Bellevue and Redmond for premium groups and corporate demand; use the Chinatown–International District and Ballard/Fremont for cultural and specialist tests.",
    format: "Reservation-led experience + mobile retail",
    lanes: "Bellevue/Redmond premium groups · Seattle culture and specialist retail",
    advantage: "Strong Eastside income, Chinese-community and employer signals now linked more directly by regional rail.",
    constraint: "Specialist incumbents, a high wage floor and uncertain storefront leisure conversion remain unresolved.",
    nextMove: "Launch matched beginner sessions in four contexts, sell private groups, then measure retail attachment and 30-day replenishment.",
    offers: [
      ["Hero drink", "$5–$8.50"],
      ["Guided tasting", "$30–$38"],
      ["Premium occasion", "$55–$75"]
    ],
    locations: [
      { name: "Bellevue", use: "First Eastside test", community: 73.8, flagship: 77.8, b2b: 79.2 },
      { name: "Redmond", use: "Employer + repeat", community: 65.9, flagship: 72.8, b2b: 74.8 },
      { name: "Downtown / SLU", use: "B2B territory", community: 67.4, flagship: 78.9, b2b: 81.3 }
    ],
    report: "/research/seattle-market-research.txt"
  },
  {
    code: "NYC",
    name: "New York City",
    status: "Paid validation justified",
    question: "Can density and a visible paid-tea ladder overcome New York’s fixed-cost trap?",
    thesis: "Test Flushing and Sunset Park for product conversion, downtown Manhattan for destination demand, and workplace corridors for portable private events.",
    format: "Portable tea school + reservation studio",
    lanes: "Flushing/Sunset Park product · Downtown destination · Workplace B2B · North Brooklyn lifestyle",
    advantage: "The clearest paid-education ladder, dense transit and unusually large visitor, workplace and institutional channels.",
    constraint: "Crowded specialists, free tastings, high wages, extreme rent dispersion and repeated physical retreats.",
    nextMove: "Run comparable paid tests in Flushing, downtown Manhattan, a workplace corridor and Sunset Park; require repeat across two demand systems.",
    offers: [
      ["First comparative flight", "$18–$24"],
      ["Regional journey", "$48–$62"],
      ["Private team", "$650 min."]
    ],
    locations: [
      { name: "Flushing North / core", use: "Product + community", community: 56.0, flagship: 48.5, b2b: 52.6 },
      { name: "Manhattan Chinatown / LES", use: "Destination + culture", community: 55.8, flagship: 58.0, b2b: 61.9 },
      { name: "Koreatown / Herald", use: "Workplace + private events", community: 57.3, flagship: 71.0, b2b: 75.1 }
    ],
    report: "/research/nyc-market-research.txt"
  },
  {
    code: "AUS",
    name: "Austin",
    status: "Event-led test justified",
    question: "Can a differentiated portable offer grow beside an incumbent community clubhouse?",
    thesis: "Enter through events, employers, cultural partners and education—not by copying West China Tea or opening another all-day specialist room.",
    format: "Portable experience + online replenishment",
    lanes: "East lifestyle · North community · Downtown/Domain B2B · UT education",
    advantage: "A large visitor, university and technology-employer economy with proven serious-tea spending.",
    constraint: "West China Tea owns the obvious community position and Zhi Tea makes discovery inexpensive.",
    nextMove: "Test a fast cold tea and timed beginner session across four acquisition lanes, with local-host delivery as a core gate.",
    offers: [
      ["Hero cold tea", "$7–$9"],
      ["Timed introduction", "$25–$35"],
      ["Deeper class", "$55–$65"]
    ],
    locations: [
      { name: "Downtown", use: "Visitor + B2B", community: 59.8, flagship: 77.8, b2b: 75.0 },
      { name: "UT / West Campus", use: "Education test", community: 70.1, flagship: 56.8, b2b: 66.2 },
      { name: "North Burnet / Domain", use: "Corporate events", community: 47.9, flagship: 47.6, b2b: 57.2 }
    ],
    report: "/research/austin-market-research.txt"
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
