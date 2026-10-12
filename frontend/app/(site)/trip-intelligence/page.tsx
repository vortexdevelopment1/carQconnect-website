import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { BackButton } from "@/components/ui/back-button";
import { TripPlannerDemo } from "@/components/product/trip-planner-demo";
import { AiSection } from "@/components/sections/ai-section";
import { VoiceSection } from "@/components/sections/voice-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Trip Intelligence",
  description: "Route, fuel and toll estimation, stop recommendations and route comparison � planned around your vehicle's mileage and fuel type.",
};

export default function TripIntelligencePage() {
  return (
    <>
      <PageHeader
        backButton={<BackButton fallback="/features" label="Back to features" />}
        eyebrow="Trip Intelligence"
        title="Every journey, planned intelligently."
        description="carQconnect reads your vehicle's mileage and fuel type to estimate distance, time, fuel and toll cost - then suggests stops for the road ahead."
        className="relative overflow-hidden pb-0"
        style={{ paddingTop: 'clamp(64px, 8vw, 84px)' }} 
      />

      <section className="bg-background" style={{ paddingBottom: 'clamp(24px, 4vw, 40px)', paddingTop: 'clamp(32px, 5vw, 48px)' }}>
        <div className="container-page mx-auto w-full max-w-[1120px] 2xl:max-w-[1240px] px-[clamp(16px,4vw,24px)]">
          <div style={{ marginBottom: 'clamp(8px, 1.5vw, 16px)' }}>
            <SectionHeading
              title="Plan a trip"
              description="Distance, duration, fuel and toll estimates update as you change route preferences."
            />
          </div>
          <TripPlannerDemo />
        </div>
      </section>

      <AiSection />
      <VoiceSection />
    </>
  );
}
