"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FAQItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-white border-forest-primary/20 shadow-md"
                : "bg-ivory/80 border-sage-border hover:border-forest-primary/20 hover:bg-white"
            )}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-accent rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-base sm:text-lg text-forest-primary leading-snug">
                {item.question}
              </span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                  isOpen
                    ? "bg-forest-primary text-white rotate-180"
                    : "bg-sage-border/60 text-forest-primary"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-text-body leading-relaxed border-t border-sage-border/40 mt-1 animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
