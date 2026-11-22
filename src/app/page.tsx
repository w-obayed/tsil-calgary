import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  MapPin,
  Sparkles,
  Phone,
  Mail,
  ChevronRight,
  SunMedium,
  Moon,
  Droplets,
  Layers,
  Wrench,
  Compass,
} from "lucide-react";
import HeroBanner from "@/components/sections/hero/HeroBanner";
import QuoteForm from "@/components/forms/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ProjectGallery from "@/components/ui/ProjectGallery";
import {
  BUSINESS_INFO,
  SERVICES_LIST,
  LIGHTING_PRODUCTS,
  FAQS_LIST,
  SERVICE_AREAS,
  WORK_PROCESS_STEPS,
  FEATURED_PROJECTS,
  TRUST_INDICATORS,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 01: Cinematic Hero Banner */}
      <HeroBanner />

      {/* SECTION 02: Trust Indicators Bar */}
      <section className="bg-forest-deep text-ivory py-6 border-y border-forest-surface px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 items-center">
            {TRUST_INDICATORS.map((indicator, index) => {
              const icons = {
                ShieldCheck,
                Award,
                CheckCircle2,
                Building2,
                MapPin,
              };
              const IconComponent =
                icons[indicator.icon as keyof typeof icons] || CheckCircle2;

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 px-2"
                >
                  <div className="w-10 h-10 rounded-full bg-forest-surface flex items-center justify-center text-accent shrink-0 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xs sm:text-sm text-white">
                      {indicator.title}
                    </h2>
                    <p className="text-[11px] text-sage line-clamp-2 mt-0.5 font-normal">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 03: About Tri-Star */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-ivory">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>ABOUT TRI-STAR</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary leading-tight">
                Your Outdoor Vision, Expertly Brought to Life
              </h2>

              <p className="text-base sm:text-lg text-text-body leading-relaxed">
                Tristar Irrigation and Lightscape is your go-to expert for
                professional lawn and landscape management. Ditch your garden hose
                and embrace the future with our state-of-the-art lawn irrigation and
                low voltage lighting services.
              </p>

              <p className="text-sm sm:text-base text-text-body/90 leading-relaxed">
                We founded this company around the idea of knowledgeable teamwork.
                Every member of our team understands best practices and stays
                up-to-date on the latest irrigation engineering, low-voltage LED
                systems, and proper grading methods. We pay special attention to the
                details of our work to ensure the complete satisfaction of each
                client.
              </p>

              {/* Verified Experience Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-sage-border">
                <div>
                  <span className="font-heading font-extrabold text-3xl text-forest-primary block">
                    {BUSINESS_INFO.experienceYears}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    Years Experience
                  </span>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-3xl text-forest-primary block">
                    {BUSINESS_INFO.projectsCompleted}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    Completed Projects
                  </span>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-3xl text-forest-primary block">
                    {BUSINESS_INFO.divisions}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    Service Divisions
                  </span>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-3xl text-forest-primary block">
                    {BUSINESS_INFO.satisfactionRate}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    Satisfaction Focus
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-primary hover:bg-forest-deep text-white font-heading font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-forest-primary hover:text-accent font-semibold text-sm transition-colors"
                >
                  <span>Meet Our Specialists</span>
                </Link>
              </div>
            </div>

            {/* Right Editorial Asymmetric Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Large Image */}
                <div className="relative h-80 sm:h-96 w-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/features/sprinkler-installation.jpeg"
                    alt="Tri-Star professional sprinkler installation on a sunny day"
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />
                </div>

                {/* Overlapping Secondary Image */}
                <div className="absolute -bottom-10 -right-2 sm:right-4 w-3/5 h-64 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-forest-deep">
                  <Image
                    src="/images/landscaping/wooden-fence.webp"
                    alt="Custom wooden fencing and landscaping by Tri-Star"
                    fill
                    sizes="(max-width: 1024px) 60vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      Built To Last
                    </p>
                    <p className="text-sm font-heading font-bold leading-tight">
                      Quality Craftsmanship
                    </p>
                  </div>
                </div>

                {/* Decorative Badge */}
                <div className="absolute top-4 -left-4 sm:left-4 bg-forest-primary text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-forest-surface">
                  <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <span className="block font-heading font-extrabold text-sm leading-tight">
                      100% Certified
                    </span>
                    <span className="text-[11px] text-sage">
                      Backflow & Irrigation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: Our Services (Photographic Cards) */}
      <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>WHAT WE DO</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary tracking-tight">
              Complete Solutions for Every Outdoor Space
            </h2>
            <p className="text-base sm:text-lg text-text-body">
              From automated irrigation systems to architectural landscape lighting,
              winter snow removal to commercial grading — we handle it all with
              uncompromising precision.
            </p>
          </div>

          {/* 6 Photographic Service Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-ivory border border-sage-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Photographic Header */}
                <div className="relative h-64 w-full overflow-hidden bg-forest-deep">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />

                  {/* Service Number Tag */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-forest-dark/80 backdrop-blur-md text-accent font-heading font-extrabold text-sm flex items-center justify-center border border-white/10">
                    {service.number}
                  </div>

                  {/* Subtitle tag */}
                  {service.subtitle && (
                    <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold uppercase tracking-wider text-accent">
                      {service.subtitle}
                    </div>
                  )}
                </div>

                {/* Service Details Body */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-forest-primary group-hover:text-accent transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-text-body mt-2.5 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Checklist Highlights */}
                    <ul className="mt-4 space-y-1.5 text-xs text-text-body/90">
                      {service.detailedPoints.slice(0, 3).map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="line-clamp-1">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-sage-border/80">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 font-heading font-bold text-sm text-forest-primary group-hover:text-accent transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: Premium Landscape Lighting Showcase (Dramatic Dark Section) */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 bg-forest-dark text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
                <Moon className="w-3.5 h-3.5" />
                <span>OUTDOOR LIGHTING SOLUTIONS</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Beautiful Landscapes, Even After Dark
              </h2>

              <p className="text-base sm:text-lg text-sage leading-relaxed">
                A beautifully maintained property is even more eye-catching at night.
                Our custom-engineered low-voltage LED lighting casts warm, ambient
                washes across architectural facades, illuminates footpaths for
                security, and spotlights specimen trees.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-forest-surface flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Custom Lighting Design
                    </h4>
                    <p className="text-xs text-sage">
                      Tailored layouts that highlight your home&apos;s best features
                      without glare.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-forest-surface flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <SunMedium className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Energy-Efficient 12V LED Fixtures
                    </h4>
                    <p className="text-xs text-sage">
                      Heavy-duty cast brass & aluminum fixtures rated for -40°C
                      Calgary winters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/lightscape"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-sm shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore Landscape Lighting</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-surface hover:bg-forest-surface/80 text-white font-medium text-sm transition-colors"
                >
                  <span>View Lighting Products</span>
                </Link>
              </div>
            </div>

            {/* Right Nighttime Gallery Showcase */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/images/hero/hero-lightscape.jpg"
                    alt="Twilight home with professional landscape lighting"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs font-bold text-accent uppercase tracking-wider">
                    Facade Lighting
                  </div>
                </div>

                <div className="relative h-44 sm:h-52 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/images/gallery/garden-uplighting.jpg"
                    alt="Garden with uplighting at dusk"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-accent uppercase tracking-wider">
                    Garden Accents
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                <div className="relative h-44 sm:h-52 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/images/gallery/ornamental-tree.jpeg"
                    alt="Ornamental tree with uplighting"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-accent uppercase tracking-wider">
                    Tree Canopies
                  </div>
                </div>

                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="/images/gallery/lighting-amphitheater.jpg"
                    alt="Illuminated outdoor architectural lighting"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs font-bold text-accent uppercase tracking-wider">
                    Walkway Ambiance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: Why Choose Us (The Tri-Star Difference) */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-ivory">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Large Authentic Project Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] sm:h-[560px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-forest-deep">
                <Image
                  src="/images/features/sprinkler-installation.jpeg"
                  alt="Tri-Star professional sprinkler installation on a sunny day"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-accent text-forest-deep font-bold text-xs uppercase tracking-wider inline-block mb-2">
                    Verified Craftsmanship
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl leading-tight">
                    Professional Irrigation Installation Done Right The First Time
                  </h3>
                </div>
              </div>
            </div>

            {/* Benefits Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
                <span>THE TRI-STAR DIFFERENCE</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary leading-tight">
                Quality You Can See. Service You Can Trust.
              </h2>

              <p className="text-base sm:text-lg text-text-body leading-relaxed">
                We bring together irrigation engineering and landscape artistry to
                deliver outdoor spaces that are both magnificent and resource-efficient.
                Every project is handled with precision and a long-term commitment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5 p-4 rounded-2xl bg-white border border-sage-border shadow-sm">
                  <div className="flex items-center gap-2 text-forest-primary font-heading font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>Licensed & Insured</span>
                  </div>
                  <p className="text-xs text-text-body">
                    Fully certified Alberta contractors with comprehensive WCB
                    compliance.
                  </p>
                </div>

                <div className="space-y-1.5 p-4 rounded-2xl bg-white border border-sage-border shadow-sm">
                  <div className="flex items-center gap-2 text-forest-primary font-heading font-bold text-sm">
                    <Award className="w-4 h-4 text-accent" />
                    <span>Certified Backflow Specialists</span>
                  </div>
                  <p className="text-xs text-text-body">
                    Qualified technicians for municipal cross-connection testing &
                    devices.
                  </p>
                </div>

                <div className="space-y-1.5 p-4 rounded-2xl bg-white border border-sage-border shadow-sm">
                  <div className="flex items-center gap-2 text-forest-primary font-heading font-bold text-sm">
                    <Droplets className="w-4 h-4 text-accent" />
                    <span>Water-Efficient Design</span>
                  </div>
                  <p className="text-xs text-text-body">
                    Smart weather-adjusted controllers and head placement reduce
                    water waste.
                  </p>
                </div>

                <div className="space-y-1.5 p-4 rounded-2xl bg-white border border-sage-border shadow-sm">
                  <div className="flex items-center gap-2 text-forest-primary font-heading font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Transparent Pricing</span>
                  </div>
                  <p className="text-xs text-text-body">
                    Detailed, itemized quotes with no hidden fees or surprise
                    extras.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-primary hover:bg-forest-deep text-white font-heading font-bold text-sm shadow-md transition-colors"
                >
                  <span>Learn More About Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: Residential & Commercial Solutions (2 Large Feature Panels) */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>SOLUTIONS FOR EVERY PROPERTY</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary tracking-tight">
              Every Property Deserves Exceptional Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Panel 01: Residential */}
            <div className="group relative h-96 sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-sage-border flex flex-col justify-end p-8 bg-forest-deep">
              <Image
                src="/images/heroes/landscaping-hero.webp"
                alt="Residential Outdoor Solutions by Tri-Star"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/60 to-transparent" />

              <div className="relative z-10 text-white space-y-3">
                <span className="px-3 py-1 rounded-full bg-accent text-forest-deep font-bold text-xs uppercase tracking-wider inline-block">
                  Homeowners & Estates
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Residential Outdoor Solutions
                </h3>
                <p className="text-sm text-sage max-w-md leading-relaxed">
                  Rough & final grading, fresh sod, decorative garden beds, custom
                  wooden fencing, and automated sprinkler systems crafted for your
                  family&apos;s lifestyle.
                </p>
                <div className="pt-2">
                  <Link
                    href="/landscaping"
                    className="inline-flex items-center gap-2 text-sm font-heading font-bold text-accent hover:text-white transition-colors"
                  >
                    <span>View Residential Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Panel 02: Commercial */}
            <div className="group relative h-96 sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-sage-border flex flex-col justify-end p-8 bg-forest-deep">
              <Image
                src="/images/heroes/commercial-hero.webp"
                alt="Commercial Landscape Solutions by Tri-Star"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/60 to-transparent" />

              <div className="relative z-10 text-white space-y-3">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider inline-block border border-white/20">
                  Builders & Property Managers
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Commercial Landscape Solutions
                </h3>
                <p className="text-sm text-sage max-w-md leading-relaxed">
                  Commercial site grading, high-capacity irrigation networks, certified
                  backflow prevention, parking lot sodding, and heavy machinery
                  winter snow removal.
                </p>
                <div className="pt-2">
                  <Link
                    href="/commercial-landscaping"
                    className="inline-flex items-center gap-2 text-sm font-heading font-bold text-accent hover:text-white transition-colors"
                  >
                    <span>View Commercial Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: Featured Projects (Interactive Gallery + Lightbox) */}
      <section id="projects" className="py-20 lg:py-28 px-4 sm:px-6 bg-ivory">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>OUR RECENT WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary tracking-tight">
              Exceptional Results in Every Detail
            </h2>
            <p className="text-base text-text-body">
              Browse authentic projects completed across Calgary and Chestermere.
              Click any project to inspect full-size imagery.
            </p>
          </div>

          <ProjectGallery projects={FEATURED_PROJECTS} />
        </div>
      </section>

      {/* SECTION 09: Our Work Process */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-forest-primary text-white">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-forest-surface">
              <span>HOW WE WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              From Vision to Beautiful Results
            </h2>
            <p className="text-base text-sage">
              Our systematic 4-step approach guarantees clear communication, proper
              timeline scheduling, and enduring quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {WORK_PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-forest-surface/60 border border-forest-surface p-7 space-y-4 hover:border-accent/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-forest-surface flex items-center justify-center font-heading font-extrabold text-xl text-accent border border-white/10 shadow-sm">
                  {step.step}
                </div>

                <h3 className="font-heading font-bold text-xl text-white">
                  {step.title}
                </h3>

                <p className="text-sm text-sage leading-relaxed font-normal">
                  {step.description}
                </p>

                {idx < WORK_PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-accent/40">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Featured Lighting Products */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
                <span>QUALITY OUTDOOR PRODUCTS</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary tracking-tight">
                Professional Lighting for Every Landscape
              </h2>
              <p className="text-base text-text-body">
                We supply and professionally install heavy-duty, commercial-grade
                fixtures, transformers, and smart controls.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-primary hover:bg-forest-deep text-white font-heading font-bold text-sm shrink-0 shadow-md transition-colors"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Curated Product Grid (4 items featured on homepage) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIGHTING_PRODUCTS.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-ivory border border-sage-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 w-full bg-white p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.modelCode && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-sage text-forest-primary text-[10px] font-bold">
                      {product.modelCode}
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-heading font-bold text-base text-forest-primary mt-1 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-text-body mt-1.5 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <Link
                    href={`/contact-us?product=${encodeURIComponent(product.name)}`}
                    className="w-full py-2 px-3 rounded-xl bg-forest-primary/10 hover:bg-forest-primary hover:text-white text-forest-primary text-xs font-semibold text-center transition-colors"
                  >
                    Enquire About Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Customer Experiences & Verified Endorsements */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-ivory border-y border-sage-border">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>CUSTOMER EXPERIENCES</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary tracking-tight">
              Trusted by Homeowners and Businesses
            </h2>
            <p className="text-base text-text-body">
              Authentic dedication to quality, transparent estimates, and reliable
              seasonal care across Alberta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-sage-border shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-accent">
                {"★★★★★"}
              </div>
              <p className="text-sm text-text-body italic leading-relaxed">
                &ldquo;Tristar Irrigation installed our entire backyard system and
                landscape lighting. They are punctual, professional, and knowledgeable.
                Our lawn has never looked better, and the evening lights create an
                incredible atmosphere.&rdquo;
              </p>
              <div className="pt-2 border-t border-sage-border">
                <p className="font-heading font-bold text-sm text-forest-primary">
                  Calgary Homeowner
                </p>
                <p className="text-xs text-text-muted">Lawn Irrigation & Lightscape</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-sage-border shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-accent">
                {"★★★★★"}
              </div>
              <p className="text-sm text-text-body italic leading-relaxed">
                &ldquo;They handled the rough and final grading plus sodding on our new
                build in Chestermere. Passed municipal grade inspection on the first try.
                Honest quote and no surprise add-ons.&rdquo;
              </p>
              <div className="pt-2 border-t border-sage-border">
                <p className="font-heading font-bold text-sm text-forest-primary">
                  Chestermere Resident
                </p>
                <p className="text-xs text-text-muted">Rough & Final Grading, Sod</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-sage-border shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-accent">
                {"★★★★★"}
              </div>
              <p className="text-sm text-text-body italic leading-relaxed">
                &ldquo;We use Tri-Star for annual backflow device testing and commercial
                snow clearing during the winter. Outstanding responsiveness and true
                commercial-grade equipment.&rdquo;
              </p>
              <div className="pt-2 border-t border-sage-border">
                <p className="font-heading font-bold text-sm text-forest-primary">
                  Commercial Property Manager
                </p>
                <p className="text-xs text-text-muted">Commercial Grounds & Backflow</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={BUSINESS_INFO.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-forest-primary hover:text-accent transition-colors underline"
            >
              <span>Read more reviews on our Yelp Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 12: Service Areas */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>LOCALLY TRUSTED PROFESSIONALS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary tracking-tight">
              Proudly Serving Calgary and Beyond
            </h2>
            <p className="text-base text-text-body">
              Based in Chestermere, we provide prompt, reliable service throughout the
              Greater Calgary metropolitan area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                className="p-5 rounded-2xl bg-ivory border border-sage-border text-center space-y-1.5 hover:border-forest-primary/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-forest-primary/10 text-forest-primary flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-sm text-forest-primary">
                  {area.name}
                </h3>
                <p className="text-[11px] text-text-muted">{area.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-text-body">
            <span>Not sure if we cover your area? </span>
            <Link href="/contact-us" className="font-bold text-forest-primary underline">
              Confirm your service availability
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 13: Frequently Asked Questions */}
      <section id="faqs" className="py-20 lg:py-28 px-4 sm:px-6 bg-ivory">
        <div className="max-w-container mx-auto max-w-4xl">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest-primary text-xs font-bold uppercase tracking-wider">
              <span>COMMON QUESTIONS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-primary tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="text-base text-text-body">
              Got questions about sprinkler installations, winterization, grading,
              or low-voltage lighting? We&apos;ve got clear answers.
            </p>
          </div>

          <FaqAccordion items={FAQS_LIST} />
        </div>
      </section>

      {/* SECTION 14: Request a Free Quote (High-Converting Deep Green Section) */}
      <section
        id="quote"
        className="py-24 lg:py-32 px-4 sm:px-6 bg-forest-primary text-white relative overflow-hidden"
      >
        <div className="max-w-container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Information & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-forest-surface">
                <span>LET&apos;S GET STARTED</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Let&apos;s Create Your Perfect Outdoor Space
              </h2>

              <p className="text-base sm:text-lg text-sage leading-relaxed">
                Contact our team to discuss your landscaping, irrigation, or outdoor
                lighting project and request a personalized estimate. We reply promptly
                within 1 business day.
              </p>

              <div className="space-y-4 pt-4 border-t border-forest-surface">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-3 text-white hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-forest-surface flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-sage block">Direct Call</span>
                    <span className="font-heading font-bold text-base sm:text-lg">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3 text-white hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-forest-surface flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-sage block">Email Inquiries</span>
                    <span className="font-heading font-bold text-base sm:text-lg break-all">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full bg-forest-surface flex items-center justify-center text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-sage block">Head Office</span>
                    <span className="font-medium text-sm text-sage">
                      {BUSINESS_INFO.fullAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: React Hook Form + Zod Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm defaultService="Lawn Irrigation" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
