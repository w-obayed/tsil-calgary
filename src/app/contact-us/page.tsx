import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import QuoteForm from "@/components/forms/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { BUSINESS_INFO, FAQS_LIST } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate on Irrigation & Landscaping Calgary",
  description:
    "Contact Tri-Star Irrigation & Lightscape. Call (825) 735-2884 or submit our online form for a free quote on lawn irrigation, architectural lighting, and landscaping across Calgary and Chestermere.",
  alternates: {
    canonical: "https://tsil-calgary.com/contact-us",
  },
};

export default function ContactUsPage() {
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
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GET IN TOUCH WITH TRI-STAR</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Contact Our Calgary & Chestermere Team
            </h1>

            <p className="text-base sm:text-xl text-sage leading-relaxed">
              Lawn work and outdoor lighting can transform your home. We strive to be
              in constant communication with our customers until the job is done. If
              you have questions or special requests, just drop us a line.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info Channels & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-sage text-forest-primary font-bold text-xs uppercase tracking-wider inline-block mb-3">
                  DIRECT CONTACT
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-primary">
                  How to Reach Us
                </h2>
                <p className="text-sm text-text-body mt-2">
                  Reach out via phone, email, or WhatsApp. We reply promptly Monday
                  through Saturday.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-sage-border hover:border-forest-primary/30 transition-all shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-primary text-accent flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block font-medium">
                      Call Us Directly
                    </span>
                    <span className="font-heading font-bold text-lg text-forest-primary group-hover:text-accent transition-colors">
                      {BUSINESS_INFO.phone}
                    </span>
                    <span className="text-xs text-text-body block mt-0.5">
                      Fast response for repairs & consultations
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-sage-border hover:border-forest-primary/30 transition-all shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-primary text-accent flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block font-medium">
                      Email Inquiries
                    </span>
                    <span className="font-heading font-bold text-base sm:text-lg text-forest-primary group-hover:text-accent transition-colors break-all">
                      {BUSINESS_INFO.email}
                    </span>
                    <span className="text-xs text-text-body block mt-0.5">
                      Send drawings, plans & requirements
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-sage-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-forest-primary text-accent flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block font-medium">
                      Operating Hours
                    </span>
                    <span className="font-heading font-bold text-base text-forest-primary">
                      {BUSINESS_INFO.hours}
                    </span>
                    <span className="text-xs text-text-body block mt-0.5">
                      Sunday: Closed (Emergency service available)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-sage-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-forest-primary text-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block font-medium">
                      Office Location
                    </span>
                    <span className="font-heading font-bold text-base text-forest-primary">
                      {BUSINESS_INFO.fullAddress}
                    </span>
                    <span className="text-xs text-text-body block mt-0.5">
                      Serving Calgary, Chestermere & Area
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-forest-primary text-white hover:bg-forest-deep text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.yelpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-sage-border text-forest-primary hover:bg-ivory text-xs font-bold transition-colors"
                >
                  <span>Review on Yelp</span>
                  <ExternalLink className="w-3.5 h-3.5 text-accent" />
                </a>
              </div>

              {/* Google Maps Embed Location */}
              <div className="rounded-3xl overflow-hidden border border-sage-border shadow-md bg-white">
                <iframe
                  title="Tri-Star Irrigation and Lightscape Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80315.68817201995!2d-114.0718831!3d51.0447331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f123456%3A0x123456789abcdef!2sChestermere%2C%20AB!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
                <div className="p-4 bg-white flex items-center justify-between text-xs text-text-body border-t border-sage-border">
                  <span>Chestermere, AB (Greater Calgary)</span>
                  <a
                    href="https://maps.google.com/?q=289+Lakeside+Greens+Crescent+Chestermere+AB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-forest-primary hover:text-accent inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Full Quotation Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-forest-primary text-accent font-bold text-xs uppercase tracking-wider inline-block mb-3">
                  ONLINE QUOTE REQUEST
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-primary">
                  Request a Free, No-Obligation Quote
                </h2>
                <p className="text-sm text-text-body mt-2">
                  Fill out the form below with your project details, and our team will
                  review your scope and respond within 1 business day.
                </p>
              </div>

              <QuoteForm defaultService="Lawn Irrigation" />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Contact Questions */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 bg-white border-t border-sage-border">
        <div className="max-w-container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-forest-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-text-body">
              Everything you need to know about our estimates, scheduling, and
              services.
            </p>
          </div>
          <FaqAccordion items={FAQS_LIST} />
        </div>
      </section>
    </div>
  );
}
