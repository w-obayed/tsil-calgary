import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-20 bg-ivory">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-forest-surface text-accent flex items-center justify-center mx-auto text-3xl font-heading font-extrabold shadow-md">
          404
        </div>

        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-primary">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-text-body leading-relaxed">
          The page you are looking for may have been moved, renamed, or is
          temporarily unavailable.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest-primary hover:bg-forest-deep text-white text-sm font-bold shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-sage-border text-forest-primary hover:bg-white text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
