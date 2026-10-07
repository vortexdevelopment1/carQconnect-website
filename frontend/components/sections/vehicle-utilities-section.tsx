import { SectionHeading } from "@/components/ui/section-heading";
import {
  CreditCard,
  FileText,
  ShieldAlert,
  Wrench,
  Fuel,
  History,
} from "lucide-react";

const cards = [
  { icon: CreditCard, title: "FASTag", description: "Check balance, recharge and view transactions.", span: "sm:col-span-2" },
  { icon: FileText, title: "RTO & Vehicle Info", description: "Retrieve vehicle records where available." },
  { icon: ShieldAlert, title: "Insurance & PUC Reminders", description: "Never miss a renewal date." },
  { icon: Wrench, title: "Service Reminders", description: "Stay ahead of scheduled maintenance." },
  { icon: Fuel, title: "Fuel Records", description: "Track consumption and running cost.", span: "sm:col-span-2" },
  { icon: History, title: "Vehicle History", description: "One timeline for documents, trips and alerts." },
];

export function VehicleUtilitiesSection() {
  return (
    <section className="bg-[#f4f4f5] py-24 md:py-32 border-b border-black/10">
      <div className="container-page">
        <SectionHeading
          title="Everyday vehicle utilities, handled."
          description="The small, recurring vehicle admin — handled in one place instead of five apps."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {cards.map(({ icon: Icon, title, description, span }) => (
            <div
              key={title}
              className={`rounded-2xl border border-black/10 bg-white/80 p-6 transition-all duration-300 hover:border-[#ff4d00]/40 hover:bg-white hover:shadow-md ${span ?? ""}`}
            >
              <Icon className="h-5 w-5 text-[#ff4d00]" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-[15px] font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
