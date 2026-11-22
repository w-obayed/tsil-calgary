"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface QuoteFormProps {
  defaultService?: string;
  className?: string;
  compact?: boolean;
}

export default function QuoteForm({
  defaultService = "Lawn Irrigation",
  className = "",
  compact = false,
}: QuoteFormProps) {
  const [serverState, setServerState] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      service: defaultService,
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setServerState({ status: "loading", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setServerState({
        status: "success",
        message:
          result.message ||
          "Thank you! Your quote request has been received. We will be in touch within 1 business day.",
      });
      reset();
    } catch (err: unknown) {
      setServerState({
        status: "error",
        message:
          err instanceof Error
            ? err.message
            : "An unexpected error occurred. Please try again or call us at (825) 735-2884.",
      });
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-sage-border ${className}`}
    >
      {serverState.status === "success" ? (
        <div className="py-12 text-center space-y-4 animate-scale-in">
          <div className="w-16 h-16 bg-forest-surface text-accent rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-forest-primary">
            Quote Request Received!
          </h3>
          <p className="text-text-body max-w-md mx-auto text-sm sm:text-base">
            {serverState.message}
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setServerState({ status: "idle", message: "" })}
              className="px-6 py-2.5 rounded-full bg-forest-primary text-white text-sm font-semibold hover:bg-forest-deep transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {/* Honeypot field for bot protection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Leave this field blank</label>
            <input
              id="hp_field"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("honeypot")}
            />
          </div>

          {serverState.status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3 animate-fade-in">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <span>{serverState.message}</span>
            </div>
          )}

          <div
            className={`grid grid-cols-1 ${
              compact ? "gap-4" : "sm:grid-cols-2 gap-5"
            }`}
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold text-forest-primary uppercase tracking-wider mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="John Smith"
                className={`w-full px-4 py-3 rounded-xl border bg-ivory text-text-heading placeholder-text-muted text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.fullName
                    ? "border-red-400 focus:ring-red-400"
                    : "border-sage-border focus:border-accent"
                }`}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-forest-primary uppercase tracking-wider mb-1.5"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className={`w-full px-4 py-3 rounded-xl border bg-ivory text-text-heading placeholder-text-muted text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400"
                    : "border-sage-border focus:border-accent"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div
            className={`grid grid-cols-1 ${
              compact ? "gap-4" : "sm:grid-cols-2 gap-5"
            }`}
          >
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-forest-primary uppercase tracking-wider mb-1.5"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(403) 000-0000"
                className={`w-full px-4 py-3 rounded-xl border bg-ivory text-text-heading placeholder-text-muted text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.phone
                    ? "border-red-400 focus:ring-red-400"
                    : "border-sage-border focus:border-accent"
                }`}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Property Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-xs font-bold text-forest-primary uppercase tracking-wider mb-1.5"
              >
                Property Address (City / Community)
              </label>
              <input
                id="address"
                type="text"
                placeholder="e.g. Chestermere or Calgary SW"
                className="w-full px-4 py-3 rounded-xl border border-sage-border bg-ivory text-text-heading placeholder-text-muted text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                {...register("address")}
              />
              {errors.address && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-bold text-forest-primary uppercase tracking-wider mb-1.5"
            >
              Service Interested In <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              className={`w-full px-4 py-3 rounded-xl border bg-ivory text-text-heading text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.service
                  ? "border-red-400 focus:ring-red-400"
                  : "border-sage-border focus:border-accent"
              }`}
              {...register("service")}
            >
              <option value="Lawn Irrigation">Lawn Irrigation (New Install / Repairs / Blowout)</option>
              <option value="Residential Landscaping">Residential Landscaping (Grading / Sod / Fencing)</option>
              <option value="Commercial Landscaping">Commercial Landscaping & Grounds</option>
              <option value="Landscape Lighting">Landscape Lighting (LED Design & Install)</option>
              <option value="Snow Removal">Snow Removal (Plazas & Acreages)</option>
              <option value="Yard Maintenance">Yard Maintenance & Cleanups</option>
              <option value="Other">Other Custom Inquiry</option>
            </select>
            {errors.service && (
              <p className="text-xs text-red-600 mt-1">
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Message / Project Details */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-forest-primary uppercase tracking-wider mb-1.5"
            >
              Project Details & Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={compact ? 3 : 4}
              placeholder="Tell us about your property, approximate size, timeline, and what you are looking to achieve..."
              className={`w-full px-4 py-3 rounded-xl border bg-ivory text-text-heading placeholder-text-muted text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                errors.message
                  ? "border-red-400 focus:ring-red-400"
                  : "border-sage-border focus:border-accent"
              }`}
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={serverState.status === "loading"}
            className="w-full py-3.5 px-6 rounded-full bg-forest-primary hover:bg-forest-deep text-white font-heading font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {serverState.status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending Your Request...</span>
              </>
            ) : (
              <>
                <span>Request My Free Quote</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-[11px] text-text-muted text-center pt-1">
            We respect your privacy. No obligation or spam. Fully licensed & insured.
          </p>
        </form>
      )}
    </div>
  );
}
