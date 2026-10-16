export type MembershipPlan = {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: string;
  billedYearly: string;
  savings: string;
  isPopular?: boolean;
  entitlements: { name: string; description: string; included: boolean }[];
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Get started with essential vehicle telemetry and basic document protection.",
    monthlyPrice: "0",
    billedYearly: "Free forever",
    savings: "No card required",
    entitlements: [
      { name: "Vehicle Profile", description: "1 Vehicle", included: true },
      { name: "Basic Service Reminders", description: "Standard alerts", included: true },
      { name: "Document Storage", description: "5 files", included: true },
      { name: "Service History & Analytics", description: "Available on higher plans", included: false },
      { name: "Priority Support", description: "Faster human assistance", included: false },
      { name: "Exclusive Offers", description: "Discounts & member perks", included: false },
    ]
  },
  {
    id: "basic",
    name: "Basic",
    description: "More convenience for everyday drivers.",
    monthlyPrice: "49",
    billedYearly: "Billed ₹392 yearly",
    savings: "Save ₹196",
    entitlements: [
      { name: "Vehicle Profile", description: "Up to 3 vehicles", included: true },
      { name: "All Reminders", description: "Service, PUC, insurance & FASTag", included: true },
      { name: "Document Storage", description: "15 files", included: true },
      { name: "Service History & Analytics", description: "Full tracking & logs", included: true },
      { name: "Priority Support", description: "Faster human assistance", included: true },
      { name: "Exclusive Offers", description: "Discounts & member perks", included: false },
    ]
  },
  {
    id: "premium",
    name: "Premium",
    badge: "ALL-ACCESS",
    description: "More convenience for everyday drivers.",
    monthlyPrice: "149",
    billedYearly: "Billed ₹1,188 yearly",
    savings: "Save 25% (₹600)",
    isPopular: true,
    entitlements: [
      { name: "Vehicle Profile", description: "Unlimited vehicles", included: true },
      { name: "All Reminders", description: "Service, PUC, insurance & FASTag", included: true },
      { name: "Document Storage", description: "50 files", included: true },
      { name: "Service History & Analytics", description: "Full tracking & logs", included: true },
      { name: "Priority Support", description: "Faster human assistance", included: true },
      { name: "Exclusive Offers", description: "Discounts & member perks", included: true },
    ]
  }
];

