export type MembershipPlan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  billedYearly: string;
  savings: string;
  isPopular?: boolean;
  entitlements: { name: string; description: string; included: boolean }[];
};

export const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Essential QR safety for your daily drive.",
    monthlyPrice: "125",
    billedYearly: "Billed ₹1,499 yearly",
    savings: "Save ₹899",
    entitlements: [
      { name: "QR Safety", description: "1 vehicle - masked calls", included: true },
      { name: "GPS tracking", description: "Live location & geofence", included: false },
      { name: "Trip Intelligence", description: "Fuel & toll estimates", included: false },
      { name: "Priority support", description: "Faster human help", included: false },
    ]
  },
  {
    id: "plus",
    name: "Plus",
    description: "Safety, live tracking and smarter trips.",
    monthlyPrice: "250",
    billedYearly: "Billed ₹2,999 yearly",
    savings: "Save ₹1,189",
    isPopular: true,
    entitlements: [
      { name: "QR Safety", description: "Up to 2 vehicles - masked calls", included: true },
      { name: "GPS tracking", description: "Live location & geofence", included: true },
      { name: "Trip Intelligence", description: "Fuel & toll estimates", included: true },
      { name: "Priority support", description: "Faster human help", included: false },
    ]
  },
  {
    id: "pro",
    name: "Pro",
    description: "Everything unlocked, with priority help.",
    monthlyPrice: "417",
    billedYearly: "Billed ₹4,999 yearly",
    savings: "Save ₹2,189",
    entitlements: [
      { name: "QR Safety", description: "Multiple vehicles - masked calls", included: true },
      { name: "GPS tracking", description: "Live location & geofence", included: true },
      { name: "Trip Intelligence", description: "Fuel, toll & AI recommendations", included: true },
      { name: "Priority support", description: "Faster human help", included: true },
    ]
  }
];
