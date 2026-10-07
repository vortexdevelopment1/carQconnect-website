export type Product = {
  slug: string;
  name: string;
  category: "qr" | "gps" | "accessories";
  tagline: string;
  description: string;
  price: number | null;
  compatibility: string;
  whatsIncluded: string[];
  specs: { label: string; value: string }[];
  warranty: string;
  badge?: string;
};

export const products: Product[] = [
  { slug: "carQconnect-qr-safety-tag", name: "carQconnect QR Safety Tag", category: "qr", tagline: "A private, practical identity for your vehicle", description: "A weatherproof QR identity for your vehicle. After activation in the carQconnect app, a scanner can safely contact you or report an issue without installing anything.", price: 499, compatibility: "Any two-wheeler, three-wheeler or four-wheeler", whatsIncluded: ["1x weatherproof carQconnect QR tag", "Adhesive mounting kit", "Activation guide"], specs: [{ label: "Material", value: "UV-resistant laminate" }, { label: "Mounting", value: "Adhesive backing" }, { label: "Durability", value: "Weatherproof, scratch-resistant" }, { label: "Activation", value: "Via carQconnect app" }], warranty: "12-month replacement warranty against manufacturing defects", badge: "Most popular" },
  { slug: "carQconnect-gps-tracker", name: "carQconnect GPS Tracker", category: "gps", tagline: "Live location, geofencing and trip history", description: "A compact GPS device that connects your vehicle to carQconnect for live location, geofence alerts and trip history. Accuracy depends on installation and network availability.", price: 2499, compatibility: "Cars, SUVs and commercial vehicles", whatsIncluded: ["1x carQconnect GPS device", "Wiring harness", "Installation guide"], specs: [{ label: "Connectivity", value: "Cellular network (SIM-based)" }, { label: "Power", value: "Vehicle-wired, backup battery" }, { label: "Tracking", value: "Live location + trip history" }, { label: "Alerts", value: "Geofence entry/exit, movement" }], warranty: "12-month hardware warranty", badge: "New" }
];

export const categories = [
  { slug: "qr", label: "QR Safety" },
  { slug: "gps", label: "GPS Devices" },
  { slug: "accessories", label: "Accessories" },
];
