import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { VehicleUtilitiesSection } from "@/components/sections/vehicle-utilities-section";
import { GarageSection } from "@/components/sections/garage-section";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Vehicle Utilities",
  description: "FASTag, RTO information, document reminders, service reminders and fuel records — the everyday vehicle admin, in one place.",
};

export default function VehicleUtilitiesPage() {
  return (
    <>
      <div className="container-page pt-8"><BackButton fallback="/#features" label="Back to Features" /></div>
      <PageHeader
        eyebrow="Vehicle Utilities"
        title="The small, recurring vehicle admin — handled."
        description="FASTag balance and recharge, RTO information, document expiry and service reminders, all tied to your Digital Garage."
      />
      <VehicleUtilitiesSection />
      <GarageSection />
    </>
  );
}
