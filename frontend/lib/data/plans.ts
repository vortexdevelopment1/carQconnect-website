// Membership plans — benefits are drawn from the PRD's entitlement model.
// No pricing is invented; price is API/CMS-driven and shown as a
// placeholder until the backend provides real values.

export type Plan = {
  slug: string;
  name: string;
  summary: string;
  priceLabel: string; // "Choose a plan" placeholder unless backend provides one
  highlight?: boolean;
  benefits: string[];
};

export const plans: Plan[] = [
  {
    slug: "basic",
    name: "Basic",
    summary: "Core QR safety and support for a single vehicle.",
    priceLabel: "Choose a plan",
    benefits: [
      "QR safety activation",
      "Masked public calling",
      "SOS & emergency contacts",
      "Standard AI chat support",
      "Trip planner (limited)",
    ],
  },
  {
    slug: "plus",
    name: "Plus",
    summary: "Full trip intelligence and GPS entitlements for everyday drivers.",
    priceLabel: "Choose a plan",
    highlight: true,
    benefits: [
      "Everything in Basic",
      "Unlimited trip planning & route comparison",
      "GPS live tracking & geofencing",
      "Priority AI + human escalation",
      "FASTag & document reminders",
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    summary: "Multi-vehicle households and power users who want it all.",
    priceLabel: "Choose a plan",
    benefits: [
      "Everything in Plus",
      "Multiple vehicles on one account",
      "Priority human support",
      "Early access to new AI capabilities",
      "Extended trip & fuel history",
    ],
  },
];
