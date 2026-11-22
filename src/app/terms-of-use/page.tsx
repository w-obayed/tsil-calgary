import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use | Tri-Star Irrigation & Lightscape",
  description:
    "Terms of Use for Tri-Star Irrigation and Lightscape website and service engagements in Alberta, Canada.",
  alternates: {
    canonical: "https://tsil-calgary.com/terms-of-use",
  },
};

export default function TermsOfUsePage() {
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
            <span className="text-white font-medium">Terms of Use</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-surface text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
              <FileText className="w-3.5 h-3.5" />
              <span>TERMS & CONDITIONS</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Terms of Use
            </h1>

            <p className="text-base sm:text-lg text-sage">
              Please read these terms carefully before using our website or engaging
              our services.
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
            By accessing or using the Tri-Star Irrigation and Lightscape website
            (tsil-calgary.com) or engaging our services, you agree to be bound by these
            Terms of Use. If you do not agree with any part of these terms, please do not
            use our website or services.
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              1. Use of This Website
            </h2>
            <p>You may use this website for lawful purposes only. You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
              <li>
                Use the website in any way that violates applicable local, provincial,
                or federal laws or regulations.
              </li>
              <li>
                Transmit any unsolicited or unauthorised advertising or promotional
                material.
              </li>
              <li>
                Attempt to gain unauthorised access to any part of the website or its
                related systems.
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone&apos;s use or
                enjoyment of the website.
              </li>
            </ul>
            <p className="text-xs text-text-muted mt-2">
              We reserve the right to terminate or restrict your access to the website at
              our sole discretion, without notice, for conduct that we believe violates
              these Terms of Use.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              2. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, images, logos, graphics, and
              design — is the property of Tri-Star Irrigation and Lightscape or its
              content suppliers and is protected by Canadian and international copyright
              and trademark laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from
              any content on this website without our prior written consent.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              3. Service Quotes and Estimates
            </h2>
            <p>
              Any quotes or estimates provided through this website or by our team are
              for informational purposes only and do not constitute a binding contract.
              Final pricing is confirmed in writing prior to commencement of work.
            </p>
            <p>
              Actual costs may vary based on site conditions, scope changes, or factors
              not apparent at the time of the initial assessment.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              4. Disclaimer of Warranties
            </h2>
            <p>
              This website and its content are provided on an &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; basis without warranties of any kind, either
              express or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              We do not warrant that the website will be uninterrupted, error-free, or
              free of viruses or other harmful components.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Tri-Star Irrigation and
              Lightscape shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of, or inability
              to use, this website or our services.
            </p>
            <p>
              Our total liability to you for any claim arising out of or relating to
              these Terms of Use shall not exceed the amount paid by you to us in the
              twelve (12) months preceding the claim.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites for your convenience.
              We do not endorse, control, or assume responsibility for the content,
              privacy practices, or availability of those sites. Accessing third-party
              links is at your own risk.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              7. Governing Law
            </h2>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws
              of the Province of Alberta and the federal laws of Canada applicable
              therein. Any disputes arising under these terms shall be subject to the
              exclusive jurisdiction of the courts of Alberta.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-ivory border border-sage-border">
            <h2 className="font-heading font-bold text-xl text-forest-primary">
              8. Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Use, please contact us:
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
              9. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these Terms of Use at any time. The date of
              the most recent revision appears at the top of this page. Continued use of
              the website after any changes constitutes your acceptance of the revised
              terms.
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
              href="/privacy-policy"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest-primary hover:text-accent transition-colors"
            >
              <span>Privacy Policy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
