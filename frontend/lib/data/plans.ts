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
    slug: "free",
    name: "Free",
    summary: "Get started with essential vehicle telemetry and basic document protection.",
    priceLabel: "₹0 / month",
    benefits: [
      "Vehicle Profile (1 Vehicle)",
      "Basic Service Reminders",
      "Document Storage (5 files)",
      "Essential vehicle safety",
      "No credit card required",
    ],
  },
  {
    slug: "basic",
    name: "Basic",
    summary: "More convenience for everyday drivers.",
    priceLabel: "₹49 / month",
    benefits: [
      "Vehicle Profile (Up to 3)",
      "All Reminders (Service, PUC, Insurance, FASTag)",
      "Document Storage (15 files)",
      "Service History & Analytics",
      "Priority Support",
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    summary: "More convenience for everyday drivers with all-access capabilities.",
    priceLabel: "₹149 / month",
    highlight: true,
    benefits: [
      "Vehicle Profile (Unlimited)",
      "All Reminders",
      "Document Storage (50 files)",
      "Service History & Analytics",
      "Priority Support",
      "Exclusive Offers & Perks",
    ],
  },
];

