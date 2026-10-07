import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { SosSection } from "@/components/sections/sos-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Users, ShieldCheck, MapPin, PhoneCall } from "lucide-react";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "SOS & Emergency Safety",
  description: "Press-and-hold SOS, family emergency contacts, location capture and emergency support — how carQconnect keeps you protected.",
};

const contactFeatures = [
  { icon: Users, title: "Multiple contacts", description: "Add several family or emergency contacts, not just one." },
  { icon: ShieldCheck, title: "Primary & secondary", description: "Mark who's notified first and who's notified next." },
  { icon: MapPin, title: "Location sharing", description: "Continues according to your configured emergency policy." },
  { icon: PhoneCall, title: "Emergency calling", description: "Shortcuts to call for help directly from the SOS screen." },
];

export default function SafetyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Safety"
        title="When every second matters."
        description="SOS in carQconnect is built as a high-priority safety workflow — deliberate to trigger, fast to act on, and clear about what happens next."
      />
      <SosSection />

      <section className="bg-surface-2 py-24 md:py-32 border-y border-border">
        <div className="container-page">
        <div className="pt-8"><BackButton fallback="/#features" label="Back to Features" /></div>
          <SectionHeading
            title="Family & emergency contacts"
            description="Configure who gets notified, and in what order, before you ever need SOS."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactFeatures.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-card-lg border border-border bg-surface p-6">
                <Icon className="h-5 w-5 text-blue" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-[15px] font-medium text-ink">{title}</h3>
                <p className="mt-1.5 text-[13px] text-tertiary">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
