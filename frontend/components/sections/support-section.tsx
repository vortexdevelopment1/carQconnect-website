import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Bot, Headset, BookOpen, MessageCircle } from "lucide-react";

const cards = [
  { icon: Bot, title: "AI Support", description: "First-level help for FAQs, orders and troubleshooting." },
  { icon: Headset, title: "Human Support", description: "Escalation with full conversation context." },
  { icon: BookOpen, title: "Help Guides", description: "Step-by-step guides for setup and activation." },
  { icon: MessageCircle, title: "Contact Us", description: "Reach the carQconnect team directly." },
];

export function SupportSection() {
  return (
    <section className="bg-[#f4f4f5] py-24 md:py-32 border-b border-black/10">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Need help? carQconnect is here."
            description="Ask the AI assistant first — if it can't resolve things, you're handed to a human without repeating yourself."
          />
          <Button href="/support" className="shrink-0">
            Get Support
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm hover:border-[#ff4d00]/40 transition-all">
              <Icon className="h-5 w-5 text-[#ff4d00]" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-[15px] font-semibold text-neutral-900">{title}</h3>
              <p className="mt-1.5 text-[13px] text-neutral-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
