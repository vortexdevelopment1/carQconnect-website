import type { Metadata } from "next";
import MarketplaceClient from "./client-page";

export const metadata: Metadata = {
  title: "Hardware Marketplace",
  description: "Browse carQconnect QR safety tags and GPS trackers.",
};

export default function MarketplacePage() {
  return <MarketplaceClient />;
}
