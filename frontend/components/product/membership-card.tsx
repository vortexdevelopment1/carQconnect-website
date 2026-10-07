import { Check } from "lucide-react";
import type { Plan } from "@/lib/data/plans";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MembershipCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-card-lg border p-7",
        plan.highlight
          ? "border-blue/40 bg-gradient-to-b from-cyan/[0.08] to-surface shadow-glow"
          : "border-border bg-surface"
      )}
    >
      {plan.highlight && (
        <span className="mb-4 w-fit rounded-full border border-blue/30 bg-blue/10 px-3 py-1 text-[11px] text-blue">
          Most chosen
        </span>
      )}
      <h3 className="font-display text-xl font-medium text-ink">{plan.name}</h3>
      <p className="mt-2 text-[13px] text-tertiary">{plan.summary}</p>

      <p className="mt-6 font-display text-2xl text-ink">{plan.priceLabel}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[13px] text-secondary">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            {b}
          </li>
        ))}
      </ul>

      <Button
        href="/#download"
        variant={plan.highlight ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        Get it in the app
      </Button>
    </div>
  );
}
