import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/data/plans";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return plans.map((p) => ({ plan: p.slug }));
}

export function generateMetadata({ params }: { params: { plan: string } }): Metadata {
  const plan = plans.find((p) => p.slug === params.plan);
  return { title: plan ? plan.name : "Membership" };
}

export default function MembershipPlanPage({ params }: { params: { plan: string } }) {
  const plan = plans.find((p) => p.slug === params.plan);
  if (!plan) notFound();

  return (
    <>
      <PageHeader eyebrow="Membership" title={plan.name} description={plan.summary} />
      <section className="bg-background pb-28">
        <div className="container-page max-w-xl">
          <div className="rounded-card-lg border border-border bg-surface p-8">
            <p className="font-display text-kpi text-ink">{plan.priceLabel}</p>
            <ul className="mt-6 space-y-3">
              {plan.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14px] text-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {b}
                </li>
              ))}
            </ul>
            <Button href="/download" className="mt-8 w-full">
              Download app to choose {plan.name}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
