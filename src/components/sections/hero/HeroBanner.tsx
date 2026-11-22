"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

const SLIDES = [
  {
    image: "/images/hero/hero-irrigation.jpg",
    tagline: "WATER-WISE LAWN IRRIGATION",
    title: "Precision Sprinkler Systems Engineered For Alberta",
    subtitle:
      "Automated coverage, smart WiFi controllers, and water efficiency for vibrant, worry-free lawns.",
  },
  {
    image: "/images/hero/hero-lightscape.jpg",
    tagline: "ARCHITECTURAL LANDSCAPE LIGHTING",
    title: "Transforming Properties Long After The Sun Sets",
    subtitle:
      "Low-voltage LED illumination designed to elevate curb appeal, accentuate architecture, and improve nighttime security.",
  },
  {
    image: "/images/heroes/landscaping-hero.webp",
    tagline: "COMPLETE RESIDENTIAL LANDSCAPING",
    title: "Transforming Outdoor Spaces With Expert Care",
    subtitle:
      "From rough and final grading to rich sod, native planting, and custom wooden fencing across Calgary and Chestermere.",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <section className="relative w-full h-[88vh] min-h-[640px] max-h-[880px] bg-forest-dark overflow-hidden">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover object-center transition-transform duration-10000 ease-out ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
          />
          {/* Deep Cinematic Vignette & Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 to-forest-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-forest-dark/30" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-surface/80 backdrop-blur-md border border-accent/30 text-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CALGARY&apos;S TRUSTED OUTDOOR EXPERTS</span>
          </div>

          {/* Dynamic Slide Title */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            Transforming Outdoor Spaces With Expert Care.
          </h1>

          {/* Dynamic Slide Subtitle */}
          <p className="text-base sm:text-xl text-sage/95 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
            Professional landscaping, precision irrigation, and architectural outdoor
            lighting solutions designed to enhance the beauty, functionality, and value of
            your property.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#quote"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-base tracking-tight shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-forest-surface/80 hover:bg-forest-surface text-white border border-forest-surface font-heading font-semibold text-base transition-colors"
            >
              <span>Explore Our Services</span>
            </Link>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full text-sage hover:text-white text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Slider Navigation & Indicator Bar */}
      <div className="absolute bottom-6 inset-x-0 z-30 px-4 sm:px-6">
        <div className="max-w-container mx-auto flex items-center justify-between">
          {/* Slide Dot Indicators */}
          <div className="flex items-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === currentSlide
                    ? "w-8 h-2.5 bg-accent"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Controls: Prev / Pause / Next */}
          <div className="flex items-center gap-2 bg-forest-dark/80 backdrop-blur-md rounded-full px-3 py-1.5 border border-forest-surface/50 text-white">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-1.5 rounded-full hover:bg-forest-surface text-sage hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="p-1.5 rounded-full hover:bg-forest-surface text-sage hover:text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-1.5 rounded-full hover:bg-forest-surface text-sage hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
