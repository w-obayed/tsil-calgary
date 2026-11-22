import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles, Phone } from "lucide-react";
import ProductCatalog from "@/components/products/ProductCatalog";
import { LIGHTING_PRODUCTS, BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Landscape Lighting Products Calgary | LightScape Fixtures & Transformers",
  description:
    "Explore our commercial-grade landscape lighting products. Exclusive private mold accent lights, bollards, directional path lights, inground well lights, deck lights, and 150W toroidal transformers in Calgary.",
  alternates: {
    canonical: "https://tsil-calgary.com/products",
  },
};

export default function ProductsPage() {
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
            <span className="text-white font-medium">Products</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EQUIPMENT & FIXTURES</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Our Lighting & Irrigation Products
            </h1>

            <p className="text-base sm:text-xl text-sage leading-relaxed">
              We supply and professionally install top-quality landscape lighting
              and irrigation equipment. Explore our confirmed product lines below or
              contact us for personalized project recommendations.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-forest-deep font-heading font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Product Pricing: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalogue Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-container mx-auto">
          <ProductCatalog products={LIGHTING_PRODUCTS} />
        </div>
      </section>
    </div>
  );
}
