"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items, light = false, variant = "default" }: { items: Faq[]; light?: boolean; variant?: "default" | "dark" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      className={cn(
        "divide-y rounded-card-lg border",
        variant === "dark" ? "divide-white/10 border-white/10 bg-white/[0.045]" : light ? "divide-border border-border bg-white" : "divide-border border-border bg-surface"
      )}
    >
      {items.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className={cn(
                "flex w-full min-h-[44px] items-center justify-between gap-4 px-5 py-5 text-left text-[16px] font-medium transition-colors sm:px-6",
                variant === "dark" ? "text-white hover:bg-white/[0.045]" : "text-ink"
              )}
            >
              {faq.question}
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-300",
                  variant === "dark" ? "text-[#ff784c]" : light ? "text-muted" : "text-tertiary",
                  open && "rotate-180"
                )}
              />
            </button>
            {open && (
              <p
                className={cn(
                  "px-5 pb-5 text-[15px] leading-relaxed sm:px-6",
                  variant === "dark" ? "text-white/60" : light ? "text-muted" : "text-secondary"
                )}
              >
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
