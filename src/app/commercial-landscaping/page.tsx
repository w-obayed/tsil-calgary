import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building2,
  Droplets,
  TreePine,
  Layers,
  Ruler,
  Activity,
  ChevronRight,
} from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { BUSINESS_INFO, SERVICES_LIST } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Landscaping Calgary | Commercial Grounds, Irrigation & Grading",
  description:
    "Commercial landscape construction in Calgary and Chestermere. Site grading, commercial-grade irrigation systems, sod, boundary fencing, winterization, and backflow testing for builders and property managers.",
  alternates: {
    canonical: "https://tsil-calgary.com/commercial-landscaping",
  },
};

const COMMERCIAL_SERVICES = [
  {
    title: "Rough Grade & Final Grade",
    desc: "Precision grading for commercial sites — shaping and leveling large properties for proper civil drainage and a clean, code-compliant finish.",
    icon: Ruler,
  },
  {
    title: "Commercial Trees, Shrubs & Sod",
    desc: "Full planting services for commercial properties — caliper trees, hardy shrubs, native perennials, and high-traffic sod to create an impressive first impression.",
    icon: TreePine,
  },
  {
    title: "Commercial Boundary & Privacy Fencing",
    desc: "Custom heavy-duty wooden and privacy fence installation to define boundaries, enhance security, and add curb appeal to commercial facilities.",
    icon: ShieldCheck,
  },
  {
    title: "Commercial Irrigation Networks",
    desc: "Design, installation, and zoning of high-capacity irrigation networks engineered to keep commercial turf and boulevards healthy and green all season long.",
    icon: Droplets,
  },
  {
    title: "High-Volume Irrigation Winterization",
    desc: "Full compressed-air blowout and complete winterization of commercial irrigation networks before winter freezes hit to prevent costly mainline damage.",
    icon: ShieldCheck,
  },
  {
    title: "Municipal Backflow Prevention Installation",
    desc: "Installation of certified backflow prevention devices (DCVA/RP) to protect municipal water supplies and ensure full compliance with City of Calgary bylaws.",
    icon: ShieldCheck,
  },
  {
    title: "Annual Backflow Inspections & Filings",
    desc: "Mandatory annual inspection and certification of cross-connection backflow devices, filing reports directly with municipal authorities.",
    icon: Activity,
  },
  {
    title: "New Development Turnkey Landscaping",
    desc: "End-to-end landscape construction for new multi-family developments, business parks, and retail plazas — from raw lot through final handover.",
    icon: Building2,
  },
];

const COMMERCIAL_FAQS = [
  {
    question: "Do you work with general contractors and development timelines?",
    answer:
      "Yes. We coordinate directly with general contractors, project managers, and civil engineers to ensure grading, irrigation, and landscape finishes align with project milestones and municipal inspection deadlines.",
  },
  {
    question: "Are your crews fully insured with WCB Alberta coverage?",
    answer:
      "Yes. Tri-Star carries comprehensive commercial general liability insurance and active Alberta Workers' Compensation Board (WCB) coverage. Clearance certificates are provided upon request.",
  },
  {
    question: "Do you submit backflow inspection reports directly to the City of Calgary?",
    answer:
      "Yes. Our cross-connection certified technicians complete all mandatory testing and submit test reports directly to the City of Calgary and local municipal water authorities.",
  },
  {
    question: "Can you provide winter commercial snow clearing contracts?",
    answer:
      "Yes. We operate heavy snow removal equipment for commercial plazas, business parks, and large private acreages, providing zero-tolerance snow clearing and sanding services.",
  },
];

export default function CommercialLandscapingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-forest-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/commercial-hero.webp"
            alt="Commercial landscaping crew maintaining large property grounds"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/90 to-forest-dark/60" />
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
            <span className="text-white font-medium">Commercial Landscaping</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>COMMERCIAL GROUNDS CONSTRUCTION</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Commercial Landscape Construction in Calgary
            </h1>

            <p className="text-base sm:text-xl text-sage font-normal leading-relaxed">
              From large-scale site grading and commercial irrigation to sodding,
              fencing, and certified backflow testing — we deliver dependable
              landscaping solutions for developers, strata boards, and property
              managers across Calgary.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-sm shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Request a Commercial Quote</span>
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

      {/* 8 Core Commercial Services */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>WHAT WE OFFER</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary tracking-tight">
              Commercial Landscaping Services
            </h2>
            <p className="text-base text-text-body">
              We handle every aspect of commercial grounds — from initial site
              preparation and earth grading to automated irrigation and ongoing
              compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMERCIAL_SERVICES.map((svc, i) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-ivory border border-sage-border hover:border-forest-primary/30 transition-all duration-200 space-y-3 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-forest-primary text-accent flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-forest-primary">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentic Commercial Projects Cards */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-ivory border-y border-sage-border">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>OUR WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary tracking-tight">
              Commercial Projects
            </h2>
            <p className="text-base text-text-body">
              Delivering heavy equipment grading, irrigation installations, and
              commercial finishes on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-3xl overflow-hidden bg-white border border-sage-border shadow-md">
              <div className="relative h-64 w-full bg-forest-deep">
                <Image
                  src="/images/commercial/grading.webp"
                  alt="Commercial site grading and excavation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  Site Preparation
                </span>
                <h3 className="font-heading font-bold text-xl text-forest-primary">
                  Commercial Site Grading
                </h3>
                <p className="text-xs sm:text-sm text-text-body">
                  Precision rough and final grading using modern heavy machinery to
                  meet engineering civil drainage requirements.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white border border-sage-border shadow-md">
              <div className="relative h-64 w-full bg-forest-deep">
                <Image
                  src="/images/commercial/irrigation.webp"
                  alt="Commercial irrigation system installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  Water Management
                </span>
                <h3 className="font-heading font-bold text-xl text-forest-primary">
                  Commercial Irrigation Systems
                </h3>
                <p className="text-xs sm:text-sm text-text-body">
                  High-capacity commercial piping networks and multi-zone backflow
                  preventer manifold assemblies.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white border border-sage-border shadow-md">
              <div className="relative h-64 w-full bg-forest-deep">
                <Image
                  src="/images/commercial/planting.webp"
                  alt="Commercial planting and tree installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  Grounds Finish
                </span>
                <h3 className="font-heading font-bold text-xl text-forest-primary">
                  Planting & Sod Installation
                </h3>
                <p className="text-xs sm:text-sm text-text-body">
                  Commercial boulevard sodding, shade tree plantings, and durable
                  mulch beds for low-maintenance curb appeal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tri-Star (The Commercial Choice in Calgary) */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
                <span>WHY TRI-STAR</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary leading-tight">
                The Commercial Choice in Calgary
              </h2>
              <p className="text-base text-text-body leading-relaxed">
                We understand that commercial projects demand strict timeline
                adherence, code compliance, clear safety protocols, and transparent
                billing.
              </p>

              <ul className="space-y-3">
                {[
                  "Experienced crews equipped with commercial-scale machinery",
                  "Serving Calgary, Chestermere, and surrounding municipalities",
                  "Fully insured with active WCB Alberta compliance",
                  "Certified cross-connection backflow prevention technicians",
                  "Competitive itemized bids with no hidden escalation clauses",
                  "Reliable scheduling designed to meet handover milestones",
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
              <div className="relative h-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-ivory bg-forest-deep">
                <Image
                  src="/images/heroes/commercial-hero.webp"
                  alt="Commercial grounds management"
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
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-ivory">
        <div className="max-w-container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary">
              Commercial Frequently Asked Questions
            </h2>
            <p className="text-base text-text-body">
              Answers regarding insurance, municipal compliance, and commercial
              service capabilities.
            </p>
          </div>
          <FaqAccordion items={COMMERCIAL_FAQS} />
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
                COMMERCIAL ESTIMATES
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-sage text-base leading-relaxed">
                Contact our commercial team today for a free project assessment and
                competitive tender estimate across the Calgary area.
              </p>
            </div>
            <div className="lg:col-span-7">
              <QuoteForm defaultService="Commercial Landscaping" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
