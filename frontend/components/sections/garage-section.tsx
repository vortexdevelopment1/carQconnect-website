import { SectionHeading } from "@/components/ui/section-heading";
import { Car, Bike, Truck } from "lucide-react";

const vehicles = [
  {
    icon: Car,
    name: "Family SUV",
    reg: "MP09 XX 1234",
    fuel: "Petrol",
    mileage: "13.2 km/l",
    qr: "Active",
    gps: "Connected",
  },
  {
    icon: Truck,
    name: "Daily Sedan",
    reg: "MP09 XX 5678",
    fuel: "Diesel",
    mileage: "17.8 km/l",
    qr: "Active",
    gps: "Not linked",
  },
  {
    icon: Bike,
    name: "City Bike",
    reg: "MP09 XX 9012",
    fuel: "Petrol",
    mileage: "45 km/l",
    qr: "Not activated",
    gps: "Not linked",
  },
];

export function GarageSection() {
  return (
    <section className="bg-gradient-to-br from-[#f4f4f5] via-[#e9eaeb] to-[#dedfe1] py-[clamp(28px,6vw,56px)] border-y border-black/10">
      <div className="container-page">
        <SectionHeading
          title="Everything about your vehicles, in one place."
          description="Documents, service reminders, trip history and fuel logs — organized by vehicle in your Digital Garage."
        />
        <div className="text-right mt-2"><span className="text-[11px] text-neutral-400 font-medium bg-black/5 px-2 py-1 rounded-md">Sample data</span></div>

        <div className="mt-[clamp(16px,3vw,28px)] grid gap-[clamp(10px,1.6vw,16px)] grid-cols-1 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
          {vehicles.map((v) => (
            <div key={v.reg} className="rounded-3xl border border-black/10 bg-white/80 p-6 backdrop-blur-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff4d00]/10 border border-[#ff4d00]/20">
                  <v.icon className="h-5 w-5 text-[#ff4d00]" />
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                    v.qr === "Active"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600"
                      : "border-black/10 text-neutral-500"
                  }`}
                >
                  QR {v.qr}
                </span>
              </div>

              <h3 className="mt-5 font-display font-bold text-neutral-900">
                {v.name}
              </h3>
              <p className="text-[13px] text-neutral-500">{v.reg}</p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-[12px] border-t border-black/10 pt-4">
                <div>
                  <p className="text-neutral-500">Fuel type</p>
                  <p className="mt-1 font-semibold text-neutral-800">{v.fuel}</p>
                </div>
                <div>
                  <p className="text-neutral-500">Mileage</p>
                  <p className="mt-1 font-semibold text-neutral-800">{v.mileage}</p>
                </div>
                <div>
                  <p className="text-neutral-500">GPS</p>
                  <p className="mt-1 font-semibold text-neutral-800">{v.gps}</p>
                </div>
                <div>
                  <p className="text-neutral-500">Documents</p>
                  <p className="mt-1 font-semibold text-neutral-800">Up to date</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
