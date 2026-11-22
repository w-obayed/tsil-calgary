"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/types";
import { X, CheckCircle2, Phone, Mail, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS_INFO } from "@/lib/constants";

interface ProductCatalogProps {
  products: ProductItem[];
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = [
    "All",
    "Accent Lights",
    "Bollard Lights",
    "Directional Path Lights",
    "Two-Tier Path Lights",
    "Hollowed-Out Path Lights",
    "Well Lights",
    "Deck Lights",
    "Transformers",
    "WiFi Sockets",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent",
              selectedCategory === cat
                ? "bg-forest-primary text-white shadow-md scale-105"
                : "bg-white text-forest-primary hover:bg-forest-surface/10 border border-sage-border"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-sage-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Product Image Frame */}
            <div
              onClick={() => setActiveModalProduct(product)}
              className="relative h-64 sm:h-72 w-full bg-ivory p-6 flex items-center justify-center cursor-pointer overflow-hidden border-b border-sage-border"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {product.modelCode && (
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-forest-primary text-accent text-[11px] font-bold">
                  {product.modelCode}
                </span>
              )}

              <span className="absolute bottom-3 right-3 text-[11px] font-semibold text-text-muted bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                Click to inspect
              </span>
            </div>

            {/* Product Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Tag className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

                <h3
                  onClick={() => setActiveModalProduct(product)}
                  className="font-heading font-bold text-lg sm:text-xl text-forest-primary group-hover:text-accent transition-colors cursor-pointer leading-snug"
                >
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-text-body mt-2 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-4 border-t border-sage-border space-y-1.5">
                  {product.features.slice(0, 3).map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-text-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(product)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-ivory hover:bg-sage border border-sage-border text-forest-primary text-xs font-bold text-center transition-colors"
                >
                  View Details
                </button>

                <Link
                  href={`/contact-us?product=${encodeURIComponent(product.name)}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-forest-primary hover:bg-forest-deep text-white text-xs font-bold text-center transition-colors shadow-sm"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-sage-border max-h-[90vh] flex flex-col">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-ivory text-forest-primary hover:bg-sage-border z-10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Product Image */}
              <div className="relative h-64 sm:h-72 w-full bg-ivory rounded-2xl p-4 flex items-center justify-center">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain p-4"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sage text-forest-primary font-bold text-xs uppercase tracking-wider">
                    {activeModalProduct.category}
                  </span>
                  {activeModalProduct.modelCode && (
                    <span className="px-3 py-1 rounded-full bg-forest-primary text-accent font-bold text-xs">
                      {activeModalProduct.modelCode}
                    </span>
                  )}
                </div>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-primary">
                  {activeModalProduct.name}
                </h2>

                <p className="text-sm sm:text-base text-text-body leading-relaxed">
                  {activeModalProduct.description}
                </p>

                {/* Features & Specs */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-bold text-sm text-forest-primary uppercase tracking-wider">
                    Specifications & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProduct.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory text-xs sm:text-sm text-text-body"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire CTA within modal */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/contact-us?product=${encodeURIComponent(
                      activeModalProduct.name
                    )}`}
                    onClick={() => setActiveModalProduct(null)}
                    className="w-full sm:flex-1 py-3 px-6 rounded-full bg-forest-primary hover:bg-forest-deep text-white font-heading font-bold text-sm text-center shadow-md transition-colors"
                  >
                    Enquire About Pricing & Installation
                  </Link>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full sm:w-auto py-3 px-5 rounded-full border border-sage-border text-forest-primary font-semibold text-sm text-center hover:bg-ivory transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Orders Callout */}
      <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-forest-deep text-white border border-forest-surface text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Looking for something specific?
          </h3>
          <p className="text-sm text-sage">
            We source an extensive selection of architectural lighting, smart WiFi
            timers, and professional irrigation equipment. Contact us to discuss
            custom product sourcing.
          </p>
        </div>

        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-sm shrink-0 shadow-lg transition-all"
        >
          <span>Contact for Custom Orders</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
