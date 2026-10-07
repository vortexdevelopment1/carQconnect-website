import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { TripPlannerDemo } from "@/components/product/trip-planner-demo";
import { AiSection } from "@/components/sections/ai-section";
import { VoiceSection } from "@/components/sections/voice-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Trip Intelligence",
  description: "Route, fuel and toll estimation, stop recommendations and route comparison — planned around your vehicle's mileage and fuel type.",
};

export default function TripIntelligencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Trip Intelligence"
        title="Every journey, planned intelligently."
        description="carQconnect reads your vehicle's mileage and fuel type to estimate distance, time, fuel and toll cost — then suggests stops for the road ahead."
      />

      <section className="bg-background pb-28">
        <div className="container-page">
        <div className="pt-8"><BackButton fallback="/#features" label="Back to Features" /></div>
          <SectionHeading
            title="Plan a trip"
            description="Distance, duration, fuel and toll estimates update as you change route preferences."
            className="mb-10"
          />
          <TripPlannerDemo />
        </div>
      </section>

      <AiSection />
      <VoiceSection />
    </>
  );
}
