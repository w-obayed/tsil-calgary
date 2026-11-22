import { NavItem, ServiceItem, ProductItem, FAQItem, ProjectItem } from "@/types";

export const BUSINESS_INFO = {
  name: "Tri-Star Irrigation and Lightscape",
  shortName: "Tri-Star",
  slogan: "Quality · Service · Value",
  phone: "(825) 735-2884",
  phoneRaw: "8257352884",
  email: "info@tsil-calgary.com",
  address: "289 Lakeside Greens Crescent",
  city: "Chestermere",
  province: "Alberta",
  postalCode: "T1X 1C3",
  country: "Canada",
  fullAddress: "289 Lakeside Greens Crescent, Chestermere, Alberta T1X 1C3, Canada",
  hours: "Monday – Saturday: 8:00 AM – 6:00 PM",
  hoursSummary: "Mon – Sat: 8:00 AM – 6:00 PM (Sun: Closed)",
  whatsappUrl: "https://wa.me/18257352884",
  yelpUrl: "https://www.yelp.com/biz/uP_UxrwaFwtL4Ykm8wtdHA",
  experienceYears: "15+",
  projectsCompleted: "500+",
  divisions: "2",
  satisfactionRate: "100%",
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/#services",
    children: [
      {
        label: "Residential Landscaping",
        href: "/landscaping",
        description: "Rough & final grading, sod installation, tree & shrub planting, wooden fencing.",
      },
      {
        label: "Lawn Irrigation",
        href: "/irrigation",
        description: "Custom sprinkler systems, smart controllers, drip zones, repairs & blowouts.",
      },
      {
        label: "Commercial Landscaping",
        href: "/commercial-landscaping",
        description: "Large property grading, commercial irrigation, sodding, and backflow services.",
      },
      {
        label: "Landscape Lighting",
        href: "/lightscape",
        description: "Low-voltage architectural & garden lighting, path lights, and smart timers.",
      },
      {
        label: "Snow Removal",
        href: "/#services",
        description: "Commercial plazas and acreage winter snow clearing with heavy equipment.",
      },
      {
        label: "Yard Maintenance",
        href: "/#services",
        description: "Seasonal yard cleanups, lawn mowing, and comprehensive grounds care.",
      },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact-us" },
];

export const TRUST_INDICATORS = [
  {
    icon: "ShieldCheck",
    title: "Licensed & Insured",
    description: "Fully certified professionals & WCB compliant across Alberta.",
  },
  {
    icon: "Award",
    title: "Certified Specialists",
    description: "Certified cross-connection & backflow prevention technicians.",
  },
  {
    icon: "CheckCircle2",
    title: "Quality Workmanship",
    description: "Built right the first time using commercial-grade materials.",
  },
  {
    icon: "Building2",
    title: "Residential & Commercial",
    description: "Equipped for private yards, acreages, and commercial developments.",
  },
  {
    icon: "MapPin",
    title: "Locally Owned & Operated",
    description: "Proudly serving Calgary, Chestermere, and surrounding communities.",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "residential-landscaping",
    number: "01",
    title: "Residential Landscaping",
    subtitle: "Complete Lot Transformations",
    description:
      "From raw lot grading to lush sod, flourishing tree and shrub beds, and handcrafted wooden fences — we build durable, beautiful outdoor living spaces tailored to Calgary's climate.",
    detailedPoints: [
      "Rough & final lot grading with proper drainage slope",
      "Premium topsoil delivery and fresh Kentucky Bluegrass sod installation",
      "Native & hardy tree, shrub, and perennial planting",
      "Custom decorative flower beds and mulch/rock ground covers",
      "Custom wooden perimeter fencing and secure gate construction",
      "Wooden retaining walls and functional garden borders",
    ],
    image: "/images/heroes/landscaping-hero.webp",
    href: "/landscaping",
    category: "landscaping",
  },
  {
    id: "lawn-irrigation",
    number: "02",
    title: "Lawn Irrigation",
    subtitle: "Automated Water-Wise Systems",
    description:
      "Ditch the hose and embrace effortless greenery. We engineer custom sprinkler and drip systems designed for maximum coverage, minimal water waste, and seasonal resilience.",
    detailedPoints: [
      "Custom-zoned underground sprinkler design & precision installation",
      "Targeted micro-drip irrigation for garden beds and foundation plantings",
      "Smart WiFi-enabled controllers with weather-responsive scheduling",
      "Certified backflow prevention device installation & municipal testing",
      "Annual spring commissioning, head realignment & zone pressure testing",
      "High-volume compressed air fall blowouts & freeze winterization",
    ],
    image: "/images/hero/hero-irrigation.jpg",
    href: "/irrigation",
    category: "irrigation",
  },
  {
    id: "commercial-landscaping",
    number: "03",
    title: "Commercial Landscaping",
    subtitle: "Turnkey Grounds Construction",
    description:
      "Full-scale site preparation, commercial irrigation networks, perimeter fencing, and durable sodding for business parks, retail plazas, condominium boards, and industrial properties.",
    detailedPoints: [
      "Heavy equipment rough & final grading to strict engineering specs",
      "Commercial-grade high-capacity irrigation networks",
      "Durable commercial wooden and acoustic boundary fencing",
      "Large-scale sodding, erosion control, and boulevard landscaping",
      "Mandatory municipal cross-connection backflow testing & certification",
      "Turnkey landscaping packages for builders and new developments",
    ],
    image: "/images/heroes/commercial-hero.webp",
    href: "/commercial-landscaping",
    category: "landscaping",
  },
  {
    id: "landscape-lighting",
    number: "04",
    title: "Landscape Lighting",
    subtitle: "Artful Nighttime Illumination",
    description:
      "Bask in the glory of an expertly illuminated property. Our low-voltage LED systems highlight architectural features, cast dramatic tree silhouettes, and improve nighttime security.",
    detailedPoints: [
      "Custom architectural and landscape lighting scheme design",
      "Energy-efficient low-voltage LED brass and aluminum fixtures",
      "Safe, glare-free directional pathway and step illumination",
      "Dramatic canopy uplighting for ornamental and mature shade trees",
      "Heavy-duty toroidal weather-sealed transformers (120V to 12V)",
      "Smart smartphone and automated astronomical timer controls",
    ],
    image: "/images/hero/hero-lightscape.jpg",
    href: "/lightscape",
    category: "lighting",
  },
  {
    id: "snow-removal",
    number: "05",
    title: "Snow Removal",
    subtitle: "Winter Safety & Mobility",
    description:
      "When Calgary winters strike, our heavy machinery keeps your commercial properties, shopping plazas, and large residential acreages clear, accessible, and hazard-free.",
    detailedPoints: [
      "Commercial plaza parking lot plowing and heavy snow hauling",
      "Large private acreage driveway clearing and turnarounds",
      "Eco-safe de-icing treatments and gravel traction application",
      "Zero-tolerance 24/7 winter storm monitoring agreements",
    ],
    image: "/images/services/snow-removal.webp",
    href: "/contact-us",
    category: "maintenance",
  },
  {
    id: "yard-maintenance",
    number: "06",
    title: "Yard Maintenance",
    subtitle: "Seasonal Grounds Care",
    description:
      "Keep your turf and garden beds immaculate year-round with professional precision mowing, seasonal debris cleanups, edge trimming, and holistic landscape care.",
    detailedPoints: [
      "Scheduled commercial and residential precision turf mowing",
      "Thorough spring yard rejuvenation and thatch power raking",
      "Fall leaf clearing, bed blowouts, and perennial cutbacks",
      "Irrigation line winterizing and seasonal turf preparation",
    ],
    image: "/images/services/other-services.webp",
    href: "/contact-us",
    category: "maintenance",
  },
];

export const LIGHTING_PRODUCTS: ProductItem[] = [
  {
    id: "accent-lights-lt2105",
    name: "Accent Lights (LT2105)",
    category: "Accent Lights",
    modelCode: "LT2105",
    description:
      "Crafted via an exclusive private mold, the LT2105 delivers unmatched refinement. Features an interchangeable MR16 light source with a convenient drop-in bulb holder for effortless lifetime servicing.",
    features: [
      "Exclusive private mold architectural design",
      "Available in Antique Brown & Gun Metal Black",
      "Interchangeable MR16 LED light source",
      "Drop-in bulb holder for instant maintenance",
      "Heavy-duty cast brass & aluminum construction",
      "IP65 weather-sealed against harsh winters",
    ],
    image: "/images/products/accent-lights-lt2105.webp",
  },
  {
    id: "bollard-light",
    name: "Architectural Bollard Light",
    category: "Bollard Lights",
    modelCode: "BL-24",
    description:
      "Standing 24 inches tall with a robust 3.68-inch (92mm) diameter, this bollard is finished in durable powder-coated aluminum to cleanly define walkways and landscape perimeters.",
    features: [
      "Diameter: 3.68\" (92mm) | Height: 24\"",
      "Weather-resistant powder-coated aluminum fixture",
      "Available in Architectural Brown and Matte Black",
      "360-degree glare-shielded path illumination",
      "Ideal for commercial plazas and upscale driveways",
    ],
    image: "/images/products/bollard-light.webp",
  },
  {
    id: "directional-path-light",
    name: "Directional Path Light",
    category: "Directional Path Lights",
    modelCode: "DPL-01",
    description:
      "An adjustable precision fixture engineered to direct beam angles exactly where desired. Illuminates flagstone walkways, garden steps, and lawn perimeters safely without stray glare.",
    features: [
      "Fully adjustable directional aiming head",
      "Illuminates stone pathways and garden transitions",
      "Finished in warm Antique Brown powder coat",
      "Heavy-gauge corrosion-resistant alloy",
      "Low-voltage 12V operation",
    ],
    image: "/images/products/directional-path-light.webp",
  },
  {
    id: "two-tier-path-light",
    name: "Two-Tier Path Light (LT2405)",
    category: "Two-Tier Path Lights",
    modelCode: "LT2405",
    description:
      "The LT2405 brings a solemn and respectful aura inspired by Asian temple architecture to garden pathways. Built with a vibration-resistant fixed G4 socket.",
    features: [
      "Asian temple tower geometric aesthetic",
      "Vibration-locked fixed G4 bulb socket",
      "Finished in Antique Bronze and Black Gun Metal",
      "Even 360-degree downward light spread",
      "Perfect for tranquil rock and water gardens",
    ],
    image: "/images/products/lt2405-two-tier.webp",
  },
  {
    id: "hollowed-out-path-light",
    name: "Hollowed-Out Path Light (LT2406)",
    category: "Hollowed-Out Path Lights",
    modelCode: "LT2406",
    description:
      "Featuring a stylish patterned shade, the LT2406 casts intricate emanative shadows and warm light patterns across turf and gravel pathways.",
    features: [
      "Hollowed-out designer patterned head",
      "Emanative illumination creating artful shadow play",
      "Antique Brown weather-proof finish",
      "Standard energy-efficient G4 bulb compatible",
      "Subtle nighttime ambiance with zero harsh hot-spots",
    ],
    image: "/images/products/lt2406-hollowed.webp",
  },
  {
    id: "well-light",
    name: "Inground Well Light",
    category: "Well Lights",
    modelCode: "WL-ING",
    description:
      "Flushed into turf, mulch, or gravel, this traffic-rated inground fixture withstands lawnmowers, foot traffic, and machinery while casting powerful uplight onto specimen trees and facades.",
    features: [
      "Flush inground, walk-over and mow-over rated design",
      "Heavy-duty tempered glass lens with brass bezel",
      "High impact resistance against machinery and foot traffic",
      "Ideal for mature shade trees, pillars, and retaining walls",
      "Sealed silicone o-ring water resistance",
    ],
    image: "/images/products/well-light.webp",
  },
  {
    id: "deck-lights",
    name: "Low-Profile Deck & Step Light",
    category: "Deck Lights",
    modelCode: "DK-04",
    description:
      "Compact surface-mount LED luminaires designed to define deck perimeters, stair risers, and patio borders. Extends outdoor living and nighttime entertainment safely.",
    features: [
      "Sleek low-profile surface mount for posts and stair risers",
      "Defines entertainment spaces with ambient downward wash",
      "Reduces tripping hazards on deck steps and transitions",
      "Available in warm Antique Brown finish",
      "High-efficiency low-heat LED emitter",
    ],
    image: "/images/products/deck-lights.webp",
  },
  {
    id: "transformers-lt3150",
    name: "Toroidal Transformer 150W (LT3150)",
    category: "Transformers",
    modelCode: "LT3150",
    description:
      "Industrial-grade 150W toroidal transformer housed in weatherproof stainless steel. Converts 120V household current into multi-tap 12V/13V/14V/15V AC outputs for reliable voltage drops.",
    features: [
      "150W high-efficiency Toroidal copper magnetic core",
      "Heavy-duty marine-grade 304 stainless steel enclosure",
      "Multi-tap secondary: 12V, 13V, 14V, and 15V AC outputs",
      "Built-in circuit breaker overload protection",
      "Compatible with mechanical timers, photocells, and WiFi modules",
    ],
    image: "/images/products/transformers.webp",
  },
  {
    id: "wifi-socket",
    name: "LT Tech Smart WiFi Socket",
    category: "WiFi Sockets",
    modelCode: "WF-TUYA",
    description:
      "Seamlessly connect and control your landscape lighting transformer from your smartphone. Compatible with Tuya Smart and Smart Life apps with remote scheduling and astronomical automation.",
    features: [
      "Direct smartphone control via Tuya Smart / Smart Life App",
      "Astronomical sunset-to-sunrise automatic switching",
      "Voice control compatible with Google Home and Alexa",
      "Weather-rated outdoor enclosure casing",
      "Set custom timers, schedules, and vacation routines",
    ],
    image: "/images/products/wifi-socket.webp",
  },
];

export const FAQS_LIST: FAQItem[] = [
  {
    category: "Irrigation",
    question: "When should I schedule spring start-up and fall winterization in Calgary?",
    answer:
      "In Calgary's climate, spring irrigation start-ups are typically conducted between late April and late May, once the danger of deep overnight ground freezes has passed. Fall blowouts and winterization are essential and should be completed by late September to mid-October before sustained sub-zero temperatures arrive. Winterization uses high-volume compressed air to purge all water from valves, pipes, and sprinkler heads to prevent burst lines.",
  },
  {
    category: "Irrigation",
    question: "Why is certified backflow prevention mandatory for sprinkler systems?",
    answer:
      "City of Calgary and Alberta municipal bylaws require a certified cross-connection backflow prevention device (such as a Double Check Valve Assembly) on all underground irrigation systems. This prevents stagnant lawn water, fertilizers, and ground bacteria from siphoning backwards into your drinking water supply. Tri-Star's technicians are certified cross-connection specialists qualified to install, test, and submit annual inspection reports.",
  },
  {
    category: "Landscaping",
    question: "What is the difference between rough grading and final grading?",
    answer:
      "Rough grading shapes the subsoil of your lot to ensure positive drainage away from building foundations in accordance with City of Calgary Lot Drainage Guidelines. Final grading follows, spreading 4 to 6 inches of screened, nutrient-rich topsoil with smooth contours, compacted properly to prepare the site for sod, seed, or planting beds. Both stages require municipal inspection and grade slips on new builds.",
  },
  {
    category: "Lighting",
    question: "How do low-voltage LED landscape lights handle Calgary's cold winters?",
    answer:
      "Our landscape lighting systems utilize 12V low-voltage architecture with solid brass, copper, and marine-grade powder-coated aluminum fixtures rated IP65 or higher. The LED drivers and lamps are specifically rated for operation down to -40°C. Low-voltage wiring is buried safely below the frost line in high-traffic zones, ensuring reliable operation throughout snowstorms and freezing temperatures.",
  },
  {
    category: "Commercial",
    question: "Do you provide turnkey landscaping for commercial builders and developments?",
    answer:
      "Yes. Tri-Star works with commercial property developers, general contractors, and strata boards. We handle end-to-end site preparation, heavy earth grading, commercial-grade irrigation networks, perimeter privacy fencing, boulevard sodding, and compliance documentation from raw lot through final handover.",
  },
  {
    category: "General",
    question: "How do I request a quote, and are estimates free?",
    answer:
      "All initial consultations and project estimates are 100% free with no obligation. You can submit our online quote form, email info@tsil-calgary.com, or call our team directly at (825) 735-2884. We review your property dimensions, project scope, and site conditions, providing a transparent, itemized quotation.",
  },
];

export const SERVICE_AREAS = [
  { name: "Calgary", details: "All quadrants (NW, NE, SW, SE)", status: "Primary" },
  { name: "Chestermere", details: "Lakeside Greens, Kinniburgh, Rainbow Falls, Westmere", status: "Headquarters" },
  { name: "Airdrie", details: "Residential communities & commercial plazas", status: "Active" },
  { name: "Cochrane", details: "Residential subdivisions & acreages", status: "Active" },
  { name: "Okotoks", details: "Irrigation & landscape construction", status: "Active" },
  { name: "Rocky View County", details: "Acreages, estate properties, and rural parcels", status: "Active" },
];

export const WORK_PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Assessment",
    description:
      "We begin with a site walk-through to evaluate your property's topography, soil conditions, sun exposure, and specific outdoor goals.",
  },
  {
    step: "02",
    title: "Tailored Planning & Design",
    description:
      "Our team engineers a practical, code-compliant plan — whether that's precision irrigation zoning, architectural lighting layouts, or grading blueprints.",
  },
  {
    step: "03",
    title: "Professional Installation",
    description:
      "Using commercial equipment and premium materials, our experienced crews execute the build efficiently with minimal disruption to your daily routine.",
  },
  {
    step: "04",
    title: "Commissioning & Final Handover",
    description:
      "We test every zone, head, and luminaire, program your smart controllers, review operation with you, and ensure 100% satisfaction.",
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Lawn Irrigation Installation",
    category: "irrigation",
    image: "/images/irrigation/irr-1.jpg",
    description: "Multi-zone precision lawn sprinkler system with smart weather controller in Chestermere.",
    location: "Chestermere, AB",
  },
  {
    id: "proj-2",
    title: "Twilight Architectural Lighting",
    category: "lighting",
    image: "/images/hero/hero-lightscape.jpg",
    description: "Low-voltage architectural uplighting and warm path illumination on a contemporary residence.",
    location: "Calgary SW, AB",
  },
  {
    id: "proj-3",
    title: "Residential Grade & Sodding",
    category: "landscaping",
    image: "/images/heroes/landscaping-hero.webp",
    description: "Complete lot final grading and premium Kentucky Bluegrass sod installation.",
    location: "Calgary NW, AB",
  },
  {
    id: "proj-4",
    title: "Commercial Site Grading",
    category: "commercial",
    image: "/images/commercial/grading.webp",
    description: "Heavy machinery precision rough and final grading for commercial lot development.",
    location: "Calgary SE, AB",
  },
  {
    id: "proj-5",
    title: "Outdoor Amphitheater Lighting",
    category: "lighting",
    image: "/images/gallery/lighting-amphitheater.jpg",
    description: "Specialized low-voltage ambient illumination for an outdoor amphitheater space.",
    location: "Greater Calgary, AB",
  },
  {
    id: "proj-6",
    title: "Custom Wooden Fencing",
    category: "landscaping",
    image: "/images/landscaping/wooden-fence.webp",
    description: "Durable custom residential wooden perimeter privacy fence with heavy-duty posts.",
    location: "Chestermere, AB",
  },
  {
    id: "proj-7",
    title: "Commercial Irrigation Systems",
    category: "commercial",
    image: "/images/commercial/irrigation.webp",
    description: "High-capacity commercial irrigation network and backflow device installation.",
    location: "Calgary, AB",
  },
  {
    id: "proj-8",
    title: "Ornamental Tree Uplighting",
    category: "lighting",
    image: "/images/gallery/ornamental-tree.jpeg",
    description: "Dramatic directional canopy illumination highlighting specimen landscape trees.",
    location: "Calgary SW, AB",
  },
  {
    id: "proj-9",
    title: "Lawn Irrigation Maintenance",
    category: "irrigation",
    image: "/images/irrigation/irr-5.jpg",
    description: "Spring startup, nozzle recalibration, and pressure zone optimization.",
    location: "Calgary NW, AB",
  },
];
