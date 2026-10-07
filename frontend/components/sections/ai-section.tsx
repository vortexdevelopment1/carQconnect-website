import { SectionHeading } from "@/components/ui/section-heading";
import { AiChatDemo } from "@/components/product/ai-chat-demo";

export function AiSection() {
  return (
    <section className="bg-[#f4f4f5] py-24 md:py-32 border-b border-black/10">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="Just ask carQconnect."
            description="carQconnect AI connects natural-language requests to trip planning, fuel and toll estimates, GPS status, orders, membership and support - always within your approved account permissions."
          />
          <ul className="mt-8 space-y-3 text-[14px] text-neutral-700">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Understands trip, tracking and support requests in plain language
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Explains why a route or recommendation was chosen
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Asks for confirmation before purchases or sensitive actions
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Escalates to a human when it can&apos;t confidently help
            </li>
          </ul>
        </div>

        <AiChatDemo />
      </div>
    </section>
  );
}
