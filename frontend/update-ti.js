const fs = require('fs');

// 1. Update PageHeader to accept className and override styles
let ph = fs.readFileSync('components/sections/page-header.tsx', 'utf8');
if (!ph.includes('className?: string;')) {
  ph = ph.replace('children?: ReactNode;\n}', 'children?: ReactNode;\n  className?: string;\n  style?: React.CSSProperties;\n}');
  ph = ph.replace(
    'backButton,\n  children,\n}:',
    'backButton,\n  children,\n  className = "",\n  style,\n}:'
  );
  ph = ph.replace(
    'className="relative pt-[120px] pb-[40px] overflow-hidden"',
    'className={`relative overflow-hidden ${className || "pt-[120px] pb-[40px]"}`}'
  );
  ph = ph.replace(
    'style={{ background: \'radial-gradient(60% 120% at 90% 0%, rgba(255,106,0,.28) 0%, rgba(255,106,0,0) 62%), linear-gradient(180deg, #fff1e3 0%, #f7f9fc 100%)\' }}',
    'style={{ background: \'radial-gradient(60% 120% at 90% 0%, rgba(255,106,0,.28) 0%, rgba(255,106,0,0) 62%), linear-gradient(180deg, #fff1e3 0%, #f7f9fc 100%)\', ...style }}'
  );
  fs.writeFileSync('components/sections/page-header.tsx', ph, 'utf8');
}

// 2. Update Trip Intelligence page
const tiContent = `import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { BackButton } from "@/components/ui/back-button";
import { TripPlannerDemo } from "@/components/product/trip-planner-demo";
import { AiSection } from "@/components/sections/ai-section";
import { VoiceSection } from "@/components/sections/voice-section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Trip Intelligence",
  description: "Route, fuel and toll estimation, stop recommendations and route comparison — planned around your vehicle's mileage and fuel type.",
};

export default function TripIntelligencePage() {
  return (
    <>
      <PageHeader
        backButton={<BackButton fallback="/features" label="Back to features" />}
        eyebrow="Trip Intelligence"
        title="Every journey, planned intelligently."
        description="carQconnect reads your vehicle's mileage and fuel type to estimate distance, time, fuel and toll cost — then suggests stops for the road ahead."
        className="relative overflow-hidden pb-[40px]"
        style={{ paddingTop: 'clamp(80px, 12vw, 120px)' }} 
      />

      <section className="bg-background" style={{ paddingBlock: 'clamp(36px, 6vw, 64px)' }}>
        <div className="container-page mx-auto w-full max-w-[1120px] 2xl:max-w-[1240px] px-[clamp(16px,4vw,24px)]">
          <div style={{ marginBottom: 'clamp(16px, 2.5vw, 24px)' }}>
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
`;

fs.writeFileSync('app/(site)/trip-intelligence/page.tsx', tiContent, 'utf8');
