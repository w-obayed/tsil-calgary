"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { BUSINESS_INFO, SERVICES_LIST } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-ivory border-t border-forest-surface/80">
      {/* Top Value Banner */}
      <div className="border-b border-forest-surface/50 py-8 px-4 sm:px-6">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-surface flex items-center justify-center text-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Licensed & Insured</p>
              <p className="text-xs text-sage">WCB-compliant Alberta contractors</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-surface flex items-center justify-center text-accent">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Certified Specialists</p>
              <p className="text-xs text-sage">Backflow prevention & water management</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-surface flex items-center justify-center text-accent">
              <span className="font-heading font-extrabold text-sm text-accent">15+</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Over 15 Years Experience</p>
              <p className="text-xs text-sage">Calgary & Chestermere climate mastery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Company Profile (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-md bg-white p-1 shadow-sm">
                <Image
                  src="/images/logo/logo.png"
                  alt="Tri-Star Irrigation and Lightscape"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white tracking-tight leading-tight block">
                  TRI-STAR
                </span>
                <span className="text-xs text-accent font-semibold tracking-wider uppercase block">
                  {BUSINESS_INFO.slogan}
                </span>
              </div>
            </Link>

            <p className="text-sm text-sage leading-relaxed max-w-sm">
              Calgary and Chestermere&apos;s trusted experts in precision lawn
              irrigation, architectural landscape lighting, residential grading
              and fencing, commercial grounds construction, and seasonal property care.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-surface hover:bg-accent hover:text-forest-deep text-xs font-medium text-ivory transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.yelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-surface hover:bg-accent hover:text-forest-deep text-xs font-medium text-ivory transition-colors"
                aria-label="Review on Yelp"
              >
                <span>Yelp Reviews</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-sage hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sage hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sage hover:text-accent transition-colors"
                >
                  Products Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sage hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-sage hover:text-accent transition-colors"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#faqs"
                  className="text-sage hover:text-accent transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_LIST.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={svc.href}
                    className="text-sage hover:text-accent transition-colors block leading-tight"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-sage">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-accent transition-colors group"
              >
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-white group-hover:text-accent font-medium">
                  {BUSINESS_INFO.phone}
                </span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-accent transition-colors group"
              >
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="break-all">{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Copyright & Legal */}
      <div className="border-t border-forest-surface/60 py-6 px-4 sm:px-6 text-xs text-sage">
        <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.
            Calgary, Alberta, Canada.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms-of-use"
              className="hover:text-accent transition-colors"
            >
              Terms of Use
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
