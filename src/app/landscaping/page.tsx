import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  TreePine,
  Layers,
  Ruler,
  ChevronRight,
} from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { BUSINESS_INFO, SERVICES_LIST } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Landscaping Calgary | Grading, Sod, Fencing",
  description:
    "Complete residential landscape construction in Calgary and Chestermere. Precision rough and final grading, premium sod installation, tree and shrub planting, and custom wooden fencing.",
  alternates: {
    canonical: "https://tsil-calgary.com/landscaping",
  },
};

const LANDSCAPING_SERVICES = [
  {
    title: "Rough Grade & Final Grade",
    desc: "Precision grading to shape and level your property for positive foundation drainage and a smooth, even finish ready for sod or plantings in full accordance with municipal guidelines.",
    icon: Ruler,
  },
  {
    title: "Plant Trees, Shrubs & Perennials",
    desc: "Full planting services — hardy native trees, ornamental shrubs, perennials, and decorative plantings to create a lush, thriving yard that withstands Calgary's weather.",
    icon: TreePine,
  },
  {
    title: "Premium Sod Installation",
    desc: "Fresh Alberta-grown Kentucky Bluegrass sod supply and installation. We thoroughly prep the base with nutrient-rich topsoil so your turf takes deep root and thrives.",
    icon: Layers,
  },
  {
    title: "Custom Wooden Fencing & Gates",
    desc: "Custom wooden fence and gate installation to define boundaries, enhance security, and beautify your property with clean, lasting cedar or pressure-treated finishes.",
    icon: ShieldCheck,
  },
];

const LANDSCAPING_FAQS = [
  {
    question: "What is the difference between rough grading and final grading?",
    answer:
      "Rough grading shapes the clay subsoil to establish positive runoff away from foundations. Final grading places 4-6 inches of screened topsoil, precisely contoured and compacted, ready for sod or garden beds to pass municipal inspection.",
  },
  {
    question: "How long should I wait before walking on newly installed sod?",
    answer:
      "We recommend staying off fresh sod for the first 10-14 days while roots anchor into the topsoil. Daily watering during this initial period is crucial, especially during hot summer days in Calgary.",
  },
  {
    question: "Do you install wooden retaining walls and custom fence doors?",
    answer:
      "Yes. We construct durable wooden retaining walls to address sloped lots, garden bed terracing, and custom single or double wooden gates with heavy-duty galvanized hardware.",
  },
];

export default function LandscapingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-forest-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/landscaping-hero.webp"
            alt="Beautifully landscaped residential yard with fresh sod and plantings"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/90 to-forest-dark/60" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-sage mb-6"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-white font-medium">Landscaping</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RESIDENTIAL LANDSCAPING CALGARY</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Residential Landscaping in Calgary & Chestermere
            </h1>

            <p className="text-base sm:text-xl text-sage font-normal leading-relaxed">
              Complete landscape construction — rough and final grading, topsoil,
              sod, trees, shrubs, planting beds, decorative rock, and custom wooden
              fencing. We build the yard you&apos;ve been picturing.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-sm shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Get a Free Quote</span>
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

      {/* Services Breakdown */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>WHAT WE DO</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary tracking-tight">
              Landscaping Services
            </h2>
            <p className="text-base text-text-body">
              From raw lot to finished yard — we handle every step of the landscape
              construction process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LANDSCAPING_SERVICES.map((svc, i) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-ivory border border-sage-border hover:border-forest-primary/30 transition-all duration-200 space-y-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-forest-primary text-accent flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-forest-primary">
                    {svc.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-body leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Showcase of Real Projects */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-ivory border-y border-sage-border">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>OUR WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary tracking-tight">
              Landscaping Photo Gallery
            </h2>
            <p className="text-base text-text-body">
              Authentic construction, grading, sodding, and fencing completed by
              Tri-Star across Calgary and Chestermere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md bg-forest-deep">
              <Image
                src="/images/heroes/landscaping-hero.webp"
                alt="Tri-Star residential landscaping project"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Complete Lot Transformation
              </span>
            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md bg-forest-deep">
              <Image
                src="/images/landscaping/wooden-fence.webp"
                alt="Wooden fence installation by Tri-Star"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Custom Wooden Perimeter Fence
              </span>
            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md bg-forest-deep">
              <Image
                src="/images/landscaping/fence-door.webp"
                alt="Wooden fence door installation by Tri-Star"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                Heavy-Duty Custom Gate Construction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tri-Star (Built Right, Built to Last) */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
                <span>WHY TRI-STAR</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary leading-tight">
                Built Right, Built to Last
              </h2>
              <p className="text-base text-text-body leading-relaxed">
                We know that lasting landscapes start below the surface. We do not
                take shortcuts with subgrade compaction, soil depths, or fence post
                anchoring.
              </p>

              <ul className="space-y-3">
                {[
                  "Complete landscape construction from raw lot to finished yard",
                  "Serving Calgary, Chestermere, and surrounding areas",
                  "Proper base preparation for long-lasting sod and healthy plantings",
                  "Experienced crews with the right equipment for any lot size",
                  "Competitive quotes with no hidden fees or unexpected extras",
                  "Extensive residential and new development experience",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-text-body font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-ivory bg-forest-deep">
                <Image
                  src="/images/heroes/landscaping-hero.webp"
                  alt="Tri-Star landscaping craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-ivory">
        <div className="max-w-container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary">
              Landscaping Frequently Asked Questions
            </h2>
            <p className="text-base text-text-body">
              Everything you need to know about rough grading, final grading, sod,
              and fencing.
            </p>
          </div>
          <FaqAccordion items={LANDSCAPING_FAQS} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 sm:px-6 bg-white border-t border-sage-border">
        <div className="max-w-container mx-auto">
          <h3 className="font-heading font-bold text-xl text-forest-primary mb-6 text-center">
            Explore Related Outdoor Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SERVICES_LIST.filter((s) => s.id !== "residential-landscaping")
              .slice(0, 3)
              .map((rel) => (
                <Link
                  key={rel.id}
                  href={rel.href}
                  className="p-5 rounded-2xl bg-ivory border border-sage-border hover:border-forest-primary/30 transition-all flex items-center justify-between group"
                >
                  <span className="font-heading font-bold text-sm text-forest-primary group-hover:text-accent transition-colors">
                    {rel.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Free Quote Section */}
      <section
        id="quote"
        className="py-20 lg:py-28 px-4 sm:px-6 bg-forest-primary text-white"
      >
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="px-3 py-1 rounded-full bg-forest-surface text-accent font-bold text-xs uppercase tracking-wider inline-block">
                START YOUR PROJECT
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Ready to Transform Your Yard?
              </h2>
              <p className="text-sage text-base leading-relaxed">
                Contact us today for a free consultation and estimate on grading,
                sod, planting, or fencing services across Calgary, Chestermere, and
                surrounding areas.
              </p>
            </div>
            <div className="lg:col-span-7">
              <QuoteForm defaultService="Residential Landscaping" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
