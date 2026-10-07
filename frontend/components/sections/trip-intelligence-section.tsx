import { SectionHeading } from "@/components/ui/section-heading";
import { TripPlannerDemo } from "@/components/product/trip-planner-demo";
import { Button } from "@/components/ui/button";

export function TripIntelligenceSection() {
  return (
    <section className="bg-gradient-to-br from-[#f4f4f5] via-[#e9eaeb] to-[#dedfe1] py-24 md:py-32 border-y border-black/10">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <TripPlannerDemo />

        <div>
          <SectionHeading
            title="Every journey, planned intelligently."
            description="Tell carQconnect where you're headed and it calculates distance, time, fuel, tolls and total cost for your vehicle - then suggests useful stops along the way."
          />
          <ul className="mt-8 space-y-3 text-[14px] text-neutral-700">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Fuel and toll estimates based on your vehicle&apos;s mileage and fuel type
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Fastest, economical or lower-toll route preferences
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Fuel stops, charging points, restaurants, stays and emergency POIs
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff4d00]" />
              Route alternatives you can compare before you commit
            </li>
          </ul>
          <Button href="/trip-intelligence" variant="secondary" className="mt-8">
            See Trip Intelligence
          </Button>
        </div>
      </div>
    </section>
  );
}
