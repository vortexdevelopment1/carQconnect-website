import { SectionHeading } from "@/components/ui/section-heading";
import { Hand, MapPin, Users, LifeBuoy } from "lucide-react";

const flow = [
  { icon: Hand, label: "Hold SOS" },
  { icon: MapPin, label: "Location captured" },
  { icon: Users, label: "Family alerted" },
  { icon: LifeBuoy, label: "Help within reach" },
];

export function SosSection() {
  return (
    <section className="bg-[#f4f4f5] py-12 md:py-16 border-b border-black/10">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="When every second matters."
            description="A deliberate press-and-hold starts the SOS flow, capturing your location, notifying the emergency contacts you've configured, and putting emergency calling and nearby help within reach."
          />
          <ul className="mt-8 space-y-3 text-[14px] text-neutral-700">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Press-and-hold activation reduces accidental triggers
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Latest location captured and shared with family contacts
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Short cancellation window before it becomes an active incident
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Emergency calling shortcuts and nearby emergency points
            </li>
          </ul>
        </div>

        <div className="relative overflow-hidden flex flex-col items-center gap-10 rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl p-10 shadow-lg">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-danger/10 blur-[100px]"
          />
          <div className="relative flex h-28 w-28 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-danger/40 animate-pulse-ring" />
            <span className="absolute inset-0 rounded-full border border-danger/30 animate-pulse-ring [animation-delay:0.6s]" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-danger text-white shadow-[0_0_40px_-6px_rgba(227,27,35,0.6)]">
              <span className="font-display text-sm font-semibold tracking-wide">SOS</span>
            </div>
          </div>

          <div className="relative flex w-full items-center justify-between gap-2 overflow-x-auto scrollbar-none">
            {flow.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5">
                    <step.icon className="h-4 w-4 text-neutral-800" />
                  </div>
                  <span className="whitespace-nowrap text-[11px] font-semibold text-neutral-700">
                    {step.label}
                  </span>
                </div>
                {i < flow.length - 1 && (
                  <div className="mb-5 h-px w-6 bg-black/15" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
