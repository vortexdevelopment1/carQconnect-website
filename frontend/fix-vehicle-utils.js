const fs = require('fs');
const content = `import { SectionHeading } from "@/components/ui/section-heading";
import {
  CreditCard,
  FileText,
  ShieldAlert,
  Wrench,
  Fuel,
  History,
  FileWarning,
  Folder
} from "lucide-react";

const cards = [
  { icon: CreditCard, title: "FASTag", description: "Check balance, get low-balance alerts, recharge and view transactions, where supported." },
  { icon: FileText, title: "RTO & Vehicle Info", description: "Retrieve vehicle records where available." },
  { icon: FileWarning, title: "Challan Info", description: "Check challan information where available." },
  { icon: Folder, title: "Document Vault", description: "Store your vehicle documents and see their status." },
  { icon: ShieldAlert, title: "Insurance & PUC Reminders", description: "Get reminded before renewals are due." },
  { icon: Wrench, title: "Service Reminders", description: "Stay ahead of scheduled maintenance." },
  { icon: Fuel, title: "Fuel Records", description: "Track consumption and running cost." },
  { icon: History, title: "Vehicle History", description: "One timeline for documents, trips and alerts." },
];

export function VehicleUtilitiesSection() {
  return (
    <section className="bg-[#f4f4f5] py-[clamp(28px,6vw,56px)] border-b border-black/10">
      <div className="container-page">
        <SectionHeading
          title="Everyday vehicle utilities, handled."
          description="FASTag, RTO information, reminders and records, organized by vehicle."
        />

        <div className="mt-[clamp(16px,3vw,28px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(10px,1.6vw,16px)] items-stretch">
          {cards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[clamp(14px,2.4vw,20px)] border border-black/10 bg-white/80 p-[clamp(14px,2.4vw,22px)] transition-all duration-300 hover:border-[#ff6a00] hover:bg-white hover:shadow-[0_4px_20px_rgba(255,106,0,0.15)] hover:-translate-y-[2px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/20 shrink-0">
                <Icon className="h-5 w-5 text-[#ff6a00]" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display text-[clamp(15px,1.9vw,17px)] font-[700] text-[#12141c]">
                {title}
              </h3>
              <p className="mt-1.5 text-[clamp(12.5px,1.5vw,14px)] leading-[1.55] text-neutral-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('components/sections/vehicle-utilities-section.tsx', content, 'utf8');
