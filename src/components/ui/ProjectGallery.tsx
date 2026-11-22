"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  projects: ProjectItem[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Landscaping", value: "landscaping" },
    { label: "Irrigation", value: "irrigation" },
    { label: "Outdoor Lighting", value: "lighting" },
    { label: "Commercial", value: "commercial" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
    }
  }, [lightboxIndex, filteredProjects.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length
      );
    }
  }, [lightboxIndex, filteredProjects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              setActiveCategory(cat.value);
              setLightboxIndex(null);
            }}
            className={cn(
              "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent",
              activeCategory === cat.value
                ? "bg-forest-primary text-white shadow-md scale-105"
                : "bg-white text-forest-primary hover:bg-forest-surface/10 border border-sage-border"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-sage-border bg-forest-deep"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Quick View Icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-forest-dark/70 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4 text-accent" />
            </div>

            {/* Content at Bottom */}
            <div className="absolute bottom-0 inset-x-0 p-6 text-white transform transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-accent/90 text-forest-deep font-bold text-[10px] uppercase tracking-wider">
                  {project.category}
                </span>
                {project.location && (
                  <span className="flex items-center gap-1 text-[11px] text-sage">
                    <MapPin className="w-3 h-3 text-accent" />
                    {project.location}
                  </span>
                )}
              </div>

              <h4 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-accent transition-colors leading-tight">
                {project.title}
              </h4>

              <p className="text-xs text-sage/90 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-forest-surface/80 text-white hover:bg-forest-surface hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent z-50"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest-surface/80 text-white hover:bg-forest-surface hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest-surface/80 text-white hover:bg-forest-surface hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={filteredProjects[lightboxIndex].image}
                alt={filteredProjects[lightboxIndex].title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <div className="inline-block px-3 py-1 rounded-full bg-accent text-forest-deep text-xs font-bold uppercase tracking-wider mb-2">
                {filteredProjects[lightboxIndex].category}
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
                {filteredProjects[lightboxIndex].title}
              </h3>
              <p className="text-sm text-sage mt-1">
                {filteredProjects[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
