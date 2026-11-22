import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  Droplets,
  Cpu,
  Wrench,
  Sun,
  Snowflake,
  Activity,
  ChevronRight,
} from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { BUSINESS_INFO, SERVICES_LIST } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lawn Irrigation Calgary | Sprinklers, Start-ups, Blowouts & Backflow",
  description:
    "Expert lawn irrigation systems in Calgary and Chestermere. Smart WiFi controllers, precision sprinkler installation, seasonal spring start-ups, fall blowouts, and certified backflow testing.",
  alternates: {
    canonical: "https://tsil-calgary.com/irrigation",
  },
};

const IRRIGATION_SERVICES = [
  {
    title: "New Irrigation Systems",
    desc: "Professionally planned and installed irrigation systems for lawns, planting beds, and commercial landscapes — designed for complete head-to-head coverage and maximum water efficiency.",
    icon: Droplets,
  },
  {
    title: "Precision Sprinkler Installation",
    desc: "Strategic sprinkler head placement and multi-zone configuration to ensure every corner of your lawn gets the ideal hydration with zero overspray onto driveways.",
    icon: Sparkles,
  },
  {
    title: "Targeted Drip Irrigation",
    desc: "Micro-irrigation and drip lines for delicate perennials, shrubs, and foundation garden beds — delivering moisture directly to root zones while cutting water waste by up to 50%.",
    icon: Droplets,
  },
  {
    title: "Smart WiFi Controllers",
    desc: "Upgrade to smart weather-responsive controllers. Automate schedules based on real-time Calgary weather forecasts and control your system from your smartphone anywhere.",
    icon: Cpu,
  },
  {
    title: "Irrigation Repairs & Troubleshooting",
    desc: "Fast diagnosis and repair of broken sprinkler heads, leaking lateral lines, faulty solenoid valves, wiring shorts, and controller errors all season long.",
    icon: Wrench,
  },
  {
    title: "Spring Start-Ups & Commissioning",
    desc: "Full spring commissioning — slow system re-pressurization, backflow inspection, head alignment, zone pressure verification, and controller programming.",
    icon: Sun,
  },
  {
    title: "Fall Blowouts & Winterization",
    desc: "High-volume commercial compressed air blowout of all valves, mainline pipes, and sprinkler heads before the freeze hits — preventing costly winter burst pipes.",
    icon: Snowflake,
  },
  {
    title: "Backflow Prevention Installation",
    desc: "Installation of certified backflow prevention devices (DCVA/RP) to isolate irrigation lines from your potable drinking water and meet municipal codes.",
    icon: ShieldCheck,
  },
  {
    title: "Annual Backflow Inspections",
    desc: "Annual testing and certification by certified cross-connection technicians, submitting official compliance reports directly to the City of Calgary and municipalities.",
    icon: Activity,
  },
];

const IRRIGATION_FAQS = [
  {
    question: "When should I schedule spring start-up and fall blowout in Calgary?",
    answer:
      "Spring start-up is usually conducted between late April and late May once night temperatures remain consistently above freezing. Fall blowouts must be scheduled in September or early October before the first severe freeze.",
  },
  {
    question: "How does a smart irrigation controller save water?",
    answer:
      "Smart controllers connect to local weather stations. If Calgary receives heavy rain, the controller automatically skips scheduled watering cycles. It also adjusts run times according to temperature and evaporation rates, saving 30% to 50% on municipal water bills.",
  },
  {
    question: "Are your technicians certified for backflow testing?",
    answer:
      "Yes. Our technicians hold certified cross-connection credentials recognized by the City of Calgary and Alberta municipal authorities, ensuring complete compliance with local bylaws.",
  },
  {
    question: "Can an irrigation system be installed in an established lawn without ruining the grass?",
    answer:
      "Yes! We use specialized vibratory plows that pull polyethylene pipe underground with minimal turf disruption. The slit in the lawn typically knits back together within 7 to 10 days.",
  },
];

export default function IrrigationPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-forest-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-irrigation.jpg"
            alt="Residential lawn sprinkler irrigation system in operation"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-35"
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
            <span className="text-white font-medium">Lawn Irrigation</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <Droplets className="w-3.5 h-3.5" />
              <span>CALGARY IRRIGATION SPECIALISTS</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Lawn Irrigation in Calgary & Chestermere
            </h1>

            <p className="text-base sm:text-xl text-sage font-normal leading-relaxed">
              Professionally planned underground sprinkler systems for lush lawns,
              vibrant planting beds, and commercial landscapes — plus repairs,
              spring start-ups, compressed-air blowouts, and certified backflow
              services all season long.
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

      {/* 9 Core Irrigation Services Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>WHAT WE DO</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary tracking-tight">
              Irrigation Services
            </h2>
            <p className="text-base text-text-body">
              From brand-new installs to seasonal start-ups and blowouts — we keep
              your irrigation system running efficiently all year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IRRIGATION_SERVICES.map((svc, i) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-ivory border border-sage-border hover:border-forest-primary/30 transition-all duration-200 space-y-4 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-forest-primary text-accent flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-forest-primary">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-text-body leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery of Authentic Irrigation Installations */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-ivory border-y border-sage-border">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>OUR WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary tracking-tight">
              Irrigation Project Gallery
            </h2>
            <p className="text-base text-text-body">
              Authentic photographs of our sprinkler installations, trenching,
              manifolds, and finished lush lawns across Calgary.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="relative h-60 rounded-2xl overflow-hidden shadow-sm bg-forest-deep group"
              >
                <Image
                  src={`/images/irrigation/irr-${num}.jpg`}
                  alt={`Tri-Star irrigation project installation photo ${num}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-xs text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Tri-Star Irrigation Project
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tri-Star (Calgary's Irrigation Specialists) */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
                <span>WHY TRI-STAR</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary leading-tight">
                Calgary&apos;s Irrigation Specialists
              </h2>
              <p className="text-base text-text-body leading-relaxed">
                We engineer sprinkler systems that withstand Calgary&apos;s temperature
                swings, heavy clay subsoils, and short growing seasons while conserving
                water.
              </p>

              <ul className="space-y-3">
                {[
                  "Professionally planned systems for lawns, beds, and commercial sites",
                  "Serving Calgary, Chestermere, and surrounding areas",
                  "Certified backflow prevention technicians for testing & installation",
                  "Smart controller upgrades for significant water bill savings",
                  "Reliable spring start-ups and high-volume fall compressed air blowouts",
                  "Fast response times for mid-season repairs and emergency valve shutoffs",
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
                  src="/images/features/sprinkler-installation.jpeg"
                  alt="Sprinkler installation on a sunny day"
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
              Irrigation Frequently Asked Questions
            </h2>
            <p className="text-base text-text-body">
              Everything you need to know about underground sprinkler systems in
              Alberta.
            </p>
          </div>
          <FaqAccordion items={IRRIGATION_FAQS} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 sm:px-6 bg-white border-t border-sage-border">
        <div className="max-w-container mx-auto">
          <h3 className="font-heading font-bold text-xl text-forest-primary mb-6 text-center">
            Explore Related Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SERVICES_LIST.filter((s) => s.id !== "lawn-irrigation")
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
                GET AN ESTIMATE
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Ready to Get Started?
              </h2>
              <p className="text-sage text-base leading-relaxed">
                Contact us today for a free quote on irrigation installation,
                repairs, spring commissioning, or fall winterization across
                Calgary, Chestermere, and surrounding areas.
              </p>
            </div>
            <div className="lg:col-span-7">
              <QuoteForm defaultService="Lawn Irrigation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
