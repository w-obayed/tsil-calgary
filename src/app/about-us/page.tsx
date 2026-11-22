import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  Droplets,
  HeartHandshake,
  Users,
  ChevronRight,
  MapPin,
} from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";
import { BUSINESS_INFO, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Tri-Star Irrigation & Lightscape Calgary",
  description:
    "Learn about Tri-Star Irrigation & Lightscape. Over 15 years of experience delivering premium lawn irrigation, architectural lighting, and landscape construction in Calgary and Chestermere.",
  alternates: {
    canonical: "https://tsil-calgary.com/about-us",
  },
};

const COMPANY_VALUES = [
  {
    title: "Quality Workmanship",
    desc: "We use only top-tier commercial equipment, certified backflow devices, and weather-sealed fixtures. Every installation is done right the first time.",
    icon: ShieldCheck,
  },
  {
    title: "Customer First",
    desc: "Your satisfaction is our foundation. We listen attentively to your goals, provide transparent advice, and stand behind every single job we deliver.",
    icon: HeartHandshake,
  },
  {
    title: "Reliable Service",
    desc: "We show up on schedule, maintain clean worksites, communicate proactively, and ensure smooth seasonal start-ups and blowouts year after year.",
    icon: Users,
  },
  {
    title: "Eco-Conscious Management",
    desc: "Our irrigation systems are engineered to conserve water. Smart WiFi weather controllers and targeted drip heads eliminate wasteful runoff.",
    icon: Droplets,
  },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full bg-ivory">
      {/* Hero Banner */}
      <section className="py-20 lg:py-24 bg-forest-dark text-white border-b border-forest-surface">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-sage mb-6"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-white font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR STORY & PHILOSOPHY</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              About Tri-Star Irrigation and Lightscape
            </h1>

            <p className="text-base sm:text-xl text-sage leading-relaxed">
              Calgary&apos;s trusted experts in precision lawn irrigation, architectural
              landscape lighting, residential grading, fencing, and commercial grounds care.
            </p>
          </div>
        </div>
      </section>

      {/* Verified By The Numbers Bar */}
      <section className="py-12 bg-white border-b border-sage-border px-4 sm:px-6">
        <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="font-heading font-extrabold text-4xl text-forest-primary block">
              15+
            </span>
            <span className="text-xs sm:text-sm text-text-muted font-medium">
              Years of Experience
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-heading font-extrabold text-4xl text-forest-primary block">
              500+
            </span>
            <span className="text-xs sm:text-sm text-text-muted font-medium">
              Projects Completed
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-heading font-extrabold text-4xl text-forest-primary block">
              100%
            </span>
            <span className="text-xs sm:text-sm text-text-muted font-medium">
              Satisfaction Focused
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-heading font-extrabold text-4xl text-forest-primary block">
              2
            </span>
            <span className="text-xs sm:text-sm text-text-muted font-medium">
              Dedicated Divisions
            </span>
          </div>
        </div>
      </section>

      {/* Who We Are Story */}
      <section className="py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-full bg-sage text-forest-primary font-bold text-xs uppercase tracking-wider inline-block">
                WHO WE ARE
              </span>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary leading-tight">
                Calgary&apos;s Lawn Care & Outdoor Living Specialists
              </h2>

              <p className="text-base sm:text-lg text-text-body leading-relaxed">
                Tristar Irrigation and Lightscape is your go-to expert for
                professional lawn and landscape management. Ditch your garden hose
                and embrace the future with our state-of-the-art lawn irrigation and
                low voltage lighting services.
              </p>

              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                We founded this company around the idea of knowledgeable teamwork.
                We make sure each member of our team understands best practices. We
                keep everyone up to date on the latest products, municipal cross-connection
                requirements, and precision installation techniques.
              </p>

              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                Our company pays special attention to the details of our work to
                ensure the complete satisfaction of each client. Whether designing an
                underground sprinkler system, sculpting lot drainage, or illuminating
                an estate property, we bring passion and craftsmanship to every job.
              </p>

              <div className="pt-2">
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-primary hover:bg-forest-deep text-white font-heading font-bold text-sm shadow-md transition-colors"
                >
                  <span>Request a Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-96 sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-forest-deep">
                <Image
                  src="/images/features/sprinkler-installation.jpeg"
                  alt="Professional Results, Every Time"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-accent text-forest-deep text-xs font-bold uppercase tracking-wider inline-block mb-2">
                    Professional Results
                  </span>
                  <p className="font-heading font-bold text-xl leading-tight">
                    Every Installation Handled With Uncompromising Detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white border-y border-sage-border">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 rounded-full bg-sage text-forest-primary font-bold text-xs uppercase tracking-wider inline-block">
              WHAT DRIVES US
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary">
              Our Core Values
            </h2>
            <p className="text-base text-text-body">
              The four foundational pillars guiding every project, client relationship,
              and team member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES.map((val, i) => {
              const IconC = val.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-ivory border border-sage-border space-y-4 hover:border-forest-primary/30 transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-forest-primary text-accent flex items-center justify-center">
                    <IconC className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-forest-primary">
                    {val.title}
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-ivory">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="px-3 py-1 rounded-full bg-sage text-forest-primary font-bold text-xs uppercase tracking-wider inline-block">
              WHERE WE WORK
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary">
              Serving Greater Calgary & Chestermere
            </h2>
            <p className="text-base text-text-body">
              Headquartered in Chestermere, Alberta, we proudly serve homeowners,
              strata communities, and commercial properties across the Calgary region.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICE_AREAS.map((a) => (
              <div
                key={a.name}
                className="p-5 rounded-2xl bg-white border border-sage-border text-center space-y-1 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-forest-primary/10 text-accent flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-sm text-forest-primary">
                  {a.name}
                </h4>
                <p className="text-[11px] text-text-muted">{a.details}</p>
              </div>
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
                GET IN TOUCH
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Let&apos;s Discuss Your Project
              </h2>
              <p className="text-sage text-base leading-relaxed">
                Reach out to our team today for a free estimate or consultation on
                irrigation, landscaping, or lighting services.
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
