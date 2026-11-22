"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO, NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-forest-deep text-ivory text-xs sm:text-sm py-2 px-4 sm:px-6 border-b border-forest-surface hidden md:block">
        <div className="max-w-container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-sage">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Calgary & Surrounding Areas, AB</span>
            </div>
            <div className="flex items-center gap-1.5 text-sage">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center gap-1.5 text-sage hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="text-forest-surface">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-medium text-accent hover:text-accent-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-forest-surface">|</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:text-white transition-colors font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className={cn(
          "w-full transition-all duration-300",
          isScrolled
            ? "bg-forest-primary/95 backdrop-blur-md shadow-lg py-3"
            : "bg-forest-primary py-4"
        )}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1"
            aria-label="Tri-Star Irrigation and Lightscape Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-md bg-white p-1 shadow-sm flex items-center justify-center">
              <Image
                src="/images/logo/logo.png"
                alt="Tri-Star Irrigation and Lightscape Logo"
                fill
                sizes="56px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg text-white tracking-tight leading-tight group-hover:text-accent transition-colors">
                TRI-STAR
              </span>
              <span className="text-[10px] sm:text-xs text-sage font-medium tracking-wider uppercase">
                Irrigation & Lightscape
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.children) {
                const isServicesActive = item.children.some(
                  (child) => pathname === child.href
                );
                return (
                  <div key={item.label} className="relative group">
                    <button
                      className={cn(
                        "flex items-center gap-1.5 text-sm font-medium transition-colors py-2 focus:outline-none focus:ring-1 focus:ring-accent rounded px-2",
                        isServicesActive
                          ? "text-accent font-semibold"
                          : "text-ivory hover:text-white"
                      )}
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 text-accent transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Mega Dropdown */}
                    <div className="absolute top-full left-0 w-80 p-3 bg-forest-deep/95 backdrop-blur-xl border border-forest-surface rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                      <div className="text-[11px] font-semibold text-accent uppercase tracking-wider px-3 py-1.5 border-b border-forest-surface/60 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>Our Specialized Services</span>
                      </div>
                      <div className="space-y-1">
                        {item.children.map((sub) => {
                          const isActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className={cn(
                                "block p-2.5 rounded-lg transition-all group/item",
                                isActive
                                  ? "bg-forest-surface text-accent font-medium"
                                  : "hover:bg-forest-surface/60 text-ivory hover:text-white"
                              )}
                            >
                              <div className="text-sm font-semibold flex items-center justify-between">
                                <span className="group-hover/item:text-accent transition-colors">
                                  {sub.label}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-accent transition-all" />
                              </div>
                              {sub.description && (
                                <p className="text-xs text-sage line-clamp-1 mt-0.5 font-normal">
                                  {sub.description}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-accent rounded px-2",
                    isActive
                      ? "text-accent font-semibold"
                      : "text-ivory hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-ivory hover:text-accent transition-colors text-sm font-medium"
            >
              <div className="w-8 h-8 rounded-full bg-forest-surface flex items-center justify-center text-accent">
                <Phone className="w-4 h-4" />
              </div>
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-sm tracking-tight shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-10 h-10 rounded-full bg-accent text-forest-deep flex items-center justify-center shadow"
              aria-label="Call Tri-Star"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ivory hover:text-white bg-forest-surface hover:bg-forest-surface/80 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-forest-surface bg-forest-deep/98 px-4 py-6 shadow-2xl animate-fade-in">
            <div className="space-y-4">
              {NAVIGATION_ITEMS.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="border-b border-forest-surface/40 pb-3">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between text-base font-semibold text-ivory py-2"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-accent transition-transform",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {mobileServicesOpen && (
                        <div className="pl-3 mt-2 space-y-2 border-l-2 border-accent/40">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block py-2 text-sm text-sage hover:text-white"
                            >
                              <div className="font-medium">{sub.label}</div>
                              {sub.description && (
                                <p className="text-xs text-sage/80 line-clamp-1">
                                  {sub.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-base font-semibold text-ivory hover:text-accent py-2 border-b border-forest-surface/40"
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile CTA & Quick Contacts */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/#quote"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-forest-deep font-heading font-bold text-sm shadow-md"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-2 text-xs text-sage space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-accent" />
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-accent" />
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>{BUSINESS_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
