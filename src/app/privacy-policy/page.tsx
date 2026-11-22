import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Tri-Star Irrigation & Lightscape",
  description:
    "Privacy Policy for Tri-Star Irrigation and Lightscape in compliance with PIPEDA and Alberta's PIPA.",
  alternates: {
    canonical: "https://tsil-calgary.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-ivory">
      {/* Banner */}
      <section className="py-16 lg:py-20 bg-forest-dark text-white border-b border-forest-surface">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-sage mb-6"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LEGAL & COMPLIANCE</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-sage">
              Your privacy matters to us. This policy explains how we handle your
              personal information in accordance with Canadian and Alberta privacy laws.
            </p>

            <p className="text-xs text-sage/80 pt-1">
              Last updated: September 13, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-sage-border shadow-sm space-y-8 text-text-body text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-2xl bg-sage text-forest-primary text-xs sm:text-sm leading-relaxed border border-sage-border">
            Tri-Star Irrigation and Lightscape (&ldquo;Tri-Star&rdquo;, &ldquo;we&rdquo;,
            &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the
            privacy of our customers and website visitors. This Privacy Policy describes
            how we collect, use, disclose, and safeguard your personal information in
            accordance with Canada&apos;s Personal Information Protection and Electronic
            Documents Act (PIPEDA) and Alberta&apos;s Personal Information Protection Act
            (PIPA).
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
              <li>
                <strong>Contact information:</strong> your name, email address, phone
                number, and mailing address when you submit a quote request or contact
                form.
              </li>
              <li>
                <strong>Service information:</strong> details about your property and
                the services you are requesting.
              </li>
              <li>
                <strong>Communications:</strong> records of correspondence between you
                and Tri-Star.
              </li>
              <li>
                <strong>Website usage data:</strong> IP address, browser type, pages
                visited, and time spent on our site, collected automatically via server
                logs and analytics tools.
              </li>
            </ul>
            <p className="text-xs text-text-muted mt-2">
              We collect only the information necessary to provide our services and
              respond to your enquiries.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              2. How We Use Your Information
            </h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
              <li>Respond to your enquiries and provide quotes for our services.</li>
              <li>
                Schedule and deliver irrigation, landscaping, lighting, and snow removal
                services.
              </li>
              <li>
                Send service reminders, seasonal maintenance notices, and follow-up
                communications.
              </li>
              <li>Improve our website and service offerings.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
            <p className="font-semibold text-forest-primary text-sm mt-2">
              We do not sell, rent, or trade your personal information to third parties
              for marketing purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              3. Disclosure of Your Information
            </h2>
            <p>We may share your personal information with:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
              <li>
                <strong>Service providers:</strong> trusted third parties who assist us
                in operating our business (e.g., email delivery, scheduling software),
                bound by confidentiality agreements.
              </li>
              <li>
                <strong>Legal authorities:</strong> when required by law, court order,
                or to protect the rights and safety of Tri-Star, our employees, or the
                public.
              </li>
            </ul>
            <p className="text-xs text-text-muted mt-2">
              All third parties are required to handle your information in accordance
              with applicable privacy laws.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              4. Cookies and Tracking
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance your
              browsing experience and collect anonymous usage statistics. You may
              disable cookies through your browser settings; however, some features of
              our website may not function properly as a result.
            </p>
            <p>
              We do not use cookies to collect personally identifiable information
              without your consent.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the
              purposes for which it was collected, or as required by law. When your
              information is no longer needed, we securely destroy or anonymise it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              6. Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards
              to protect your personal information against unauthorised access,
              disclosure, alteration, or destruction. While we take these precautions
              seriously, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              7. Your Rights
            </h2>
            <p>Under PIPEDA and PIPA, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
              <li>Access the personal information we hold about you.</li>
              <li>Request corrections to inaccurate or incomplete information.</li>
              <li>
                Withdraw consent to the collection or use of your information (subject to
                legal or contractual restrictions).
              </li>
              <li>
                File a complaint with the Office of the Privacy Commissioner of Canada or
                the Office of the Information and Privacy Commissioner of Alberta.
              </li>
            </ul>
            <p className="text-xs text-text-muted mt-2">
              To exercise any of these rights, please contact us using the details
              below.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-ivory border border-sage-border">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              8. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="text-sm space-y-1 text-forest-primary font-medium">
              <p>Tri-Star Irrigation and Lightscape</p>
              <p>{BUSINESS_INFO.address}</p>
              <p>
                {BUSINESS_INFO.city}, {BUSINESS_INFO.province} {BUSINESS_INFO.postalCode}
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-accent underline"
                >
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-accent underline"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The date of the most
              recent revision appears at the top of this page. We encourage you to review
              this policy periodically.
            </p>
          </div>

          {/* Navigation links */}
          <div className="pt-8 border-t border-sage-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/terms-of-use"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest-primary hover:text-accent transition-colors"
            >
              <span>Terms of Use</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
