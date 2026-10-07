import { SectionHeading } from "@/components/ui/section-heading";
import { GpsMapCard } from "@/components/product/gps-map-card";
import { Satellite, Clock, MapPinned, BellRing, Activity } from "lucide-react";

const features = [
  { icon: Satellite, title: "Live Vehicle Location", description: "See where your vehicle is right now." },
  { icon: Clock, title: "Trip History", description: "Review past trips and routes taken." },
  { icon: MapPinned, title: "Geofencing", description: "Set safe zones and get notified on entry or exit." },
  { icon: BellRing, title: "Movement Alerts", description: "Know if your vehicle moves when it shouldn't." },
  { icon: Activity, title: "Device Status", description: "Track device health and last communication." },
];

export function GpsSection() {
  return (
    <section className="bg-gradient-to-br from-[#f4f4f5] via-[#e9eaeb] to-[#dedfe1] py-24 md:py-32 border-y border-black/10">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="Know where your vehicle is. Wherever it goes."
            description="carQconnect GPS connects your vehicle to live location, trip history and geofence alerts - subject to device and network availability."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4d00]" />
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{title}</p>
                  <p className="mt-1 text-[13px] text-neutral-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GpsMapCard />
      </div>
    </section>
  );
}
