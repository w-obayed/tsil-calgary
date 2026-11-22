import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Moon,
  SunMedium,
  ShieldCheck,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { BUSINESS_INFO, LIGHTING_PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Landscape Lighting Calgary | Low-Voltage LED Outdoor Lighting",
  description:
    "Architectural and landscape lighting in Calgary and Chestermere. Professional low-voltage LED design, pathway lights, tree uplighting, deck lighting, and smart timers.",
  alternates: {
    canonical: "https://tsil-calgary.com/lightscape",
  },
};

const LIGHTING_SPECIALTIES = [
  {
    title: "Architectural & Landscape Design",
    desc: "Custom lighting layout designed to accentuate rooflines, stone masonry, pillars, and landscaping features with zero harsh glare.",
    icon: Sparkles,
  },
  {
    title: "Low-Voltage 12V LED Efficiency",
    desc: "Energy-efficient 12-volt systems consuming up to 80% less electricity than traditional halogens with lamps rated for 50,000+ operating hours.",
    icon: SunMedium,
  },
  {
    title: "Tree Uplighting & Canopies",
    desc: "Directional flood and spot fixtures positioned to graze mature tree trunks, illuminate branching structures, and create dramatic shadow depth.",
    icon: Moon,
  },
  {
    title: "Pathway, Sidewalk & Step Lighting",
    desc: "Safely navigate stone walkways, driveway borders, and elevation changes with downward glare-shielded path lights and flush step inserts.",
    icon: Layers,
  },
  {
    title: "Deck & Entertainment Area Lights",
    desc: "Low-profile surface-mounted LED luminaires for deck posts, stairs, and outdoor kitchens, extending your outdoor living well into the evening.",
    icon: Sparkles,
  },
  {
    title: "Garden & Planting Bed Accents",
    desc: "Subtle accent luminaires hidden within flowerbeds, ornamental grasses, and water features to create tranquil nighttime focal points.",
    icon: SunMedium,
  },
  {
    title: "Smart WiFi & Astronomical Timers",
    desc: "Control your lighting system from anywhere using the Tuya Smart App. Automated astronomical timers automatically adjust for sunset and sunrise year-round.",
    icon: Cpu,
  },
  {
    title: "Heavy-Duty Weatherproof Transformers",
    desc: "Multi-tap toroidal stainless steel transformers with integrated circuit breaker protection engineered specifically for Alberta's sub-zero winters.",
    icon: ShieldCheck,
  },
];

const LIGHTING_FAQS = [
  {
    question: "How do low-voltage landscape lights perform in Calgary winters?",
    answer:
      "All our fixtures, cables, and transformers are commercial-grade and IP65+ weather-sealed. The solid brass, copper, and powder-coated aluminum fixtures and cold-rated LED chips are engineered to withstand -40°C temperatures, heavy snow accumulation, and freeze-thaw cycles effortlessly.",
  },
  {
    question: "Will installing landscape lighting dramatically increase my power bill?",
    answer:
      "No! Because our systems utilize modern high-efficiency 12V LED technology, a complete system of 10-15 fixtures often consumes less power than a single traditional 100W incandescent household bulb.",
  },
  {
    question: "Can I control my lights with my smartphone or automated timers?",
    answer:
      "Yes. We install smart WiFi-connected control modules that link directly to your home network, allowing scheduling, dimming, and astronomical sunset-to-sunrise automation via smartphone apps or voice assistants.",
  },
  {
    question: "Do you supply the lighting fixtures or do I need to purchase them?",
    answer:
      "We supply and install complete professional-grade lighting systems, including top-tier fixtures, toroidal transformers, cables, and waterproof gel-filled splice connectors. You can view our confirmed product catalog on our Products page.",
  },
];

export default function LightscapePage() {
  return (
    <div className="flex flex-col w-full bg-forest-dark text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-forest-surface">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-lightscape.jpg"
            alt="Beautiful landscape lighting on a home at night"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/95 to-forest-dark/70" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-sage mb-6"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-white font-medium">Lightscape</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <Moon className="w-3.5 h-3.5" />
              <span>LIGHTSCAPE BY TRI-STAR</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Architectural & Landscape Lighting in Calgary
            </h1>

            <p className="text-base sm:text-xl text-sage font-normal leading-relaxed">
              Transform your property after dark. Bask in the glory of an
              artistically illuminated home and garden with our custom-designed
              low-voltage LED lighting solutions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-sm shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Request a Free Lighting Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-surface hover:bg-forest-surface/80 text-white font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Lighting Specialties Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-forest-deep">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <span>WHAT WE OFFER</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Lighting Solutions
            </h2>
            <p className="text-base text-sage">
              From subtle path lights to dramatic tree uplighting — we design and
              install low-voltage systems that make your property shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIGHTING_SPECIALTIES.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-forest-surface/60 border border-forest-surface hover:border-accent/40 transition-all duration-200 space-y-3 shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-forest-deep text-accent flex items-center justify-center border border-white/10">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-sage leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Nighttime Gallery Showcase */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-forest-dark border-y border-forest-surface">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <span>OUR WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Real Calgary Lighting Projects
            </h2>
            <p className="text-base text-sage">
              Authentic nighttime photography of homes, trees, pathways, and
              gardens illuminated by Tri-Star Lightscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/hero/hero-lightscape.jpg"
                alt="Twilight home with landscape lighting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Facade & Archway Illumination
              </span>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/gallery/lighting-amphitheater.jpg"
                alt="Illuminated outdoor architectural space at night"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Outdoor Living & Step Lighting
              </span>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/gallery/garden-uplighting.jpg"
                alt="Garden with uplighting at dusk"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Perennial Bed & Shrub Uplighting
              </span>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/gallery/ornamental-tree.jpeg"
                alt="Ornamental tree with uplighting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Specimen Tree Canopy Graze
              </span>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/gallery/residential-accent.jpg"
                alt="Residential garden accent lighting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Stone Wall & Pathway Accents
              </span>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/gallery/lit-trees.jpg"
                alt="Professionally lit trees at night"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Multi-Tree Woodland Depth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Callout */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-forest-deep">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="px-3 py-1 rounded-full bg-forest-surface text-accent font-bold text-xs uppercase tracking-wider inline-block border border-accent/20">
                PROVEN FIXTURES
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Commercial-Grade Lighting Fixtures
              </h2>
              <p className="text-base text-sage">
                We supply and install top-tier fixtures including exclusive private mold
                accent lights, architectural bollards, and stainless transformers.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-sm shrink-0 transition-all shadow-md"
            >
              <span>View Full Products Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {LIGHTING_PRODUCTS.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl bg-forest-surface/60 border border-forest-surface space-y-3 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full bg-white/5 rounded-xl p-2 flex items-center justify-center">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-white mt-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-sage line-clamp-2 mt-1">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tri-Star (The Tri-Star Difference) */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-forest-dark border-t border-forest-surface">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
                WHY CHOOSE TRI-STAR
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                Quality Outdoor Lighting Built For Alberta
              </h2>
              <p className="text-base text-sage leading-relaxed">
                A beautifully maintained lawn is much more eye-catching when you see it
                during the night time with carefully placed lights to highlight the
                beauty.
              </p>

              <ul className="space-y-3">
                {[
                  "Low-voltage LED — energy-efficient & ultra long-lasting",
                  "Professional design consultation and nighttime lighting demo included",
                  "Weatherproof solid fixtures rated for harsh -40°C Calgary winters",
                  "Smart WiFi and astronomical sunset-to-sunrise timer controls",
                  "Substantially enhances home curb appeal & resale property value",
                  "Significantly increases nighttime safety, walkway navigation & security",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-sage font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-forest-surface bg-forest-deep">
                <Image
                  src="/images/hero/hero-lightscape.jpg"
                  alt="Nighttime illumination"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-forest-deep">
        <div className="max-w-container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Landscape Lighting FAQs
            </h2>
            <p className="text-base text-sage">
              Answers regarding power consumption, fixtures, timers, and winter
              durability.
            </p>
          </div>
          <FaqAccordion items={LIGHTING_FAQS} />
        </div>
      </section>

      {/* Free Quote Section */}
      <section
        id="quote"
        className="py-20 lg:py-28 px-4 sm:px-6 bg-forest-primary text-white border-t border-forest-surface"
      >
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="px-3 py-1 rounded-full bg-forest-surface text-accent font-bold text-xs uppercase tracking-wider inline-block">
                GET STARTED
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Illuminate Your Outdoor Living Space
              </h2>
              <p className="text-sage text-base leading-relaxed">
                Contact Tri-Star today for a free design consultation and quote on
                architectural lighting for your Calgary or Chestermere home.
              </p>
            </div>
            <div className="lg:col-span-7">
              <QuoteForm defaultService="Landscape Lighting" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
