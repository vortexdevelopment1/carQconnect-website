import { SectionHeading } from "@/components/ui/section-heading";
import { MembershipCard } from "@/components/product/membership-card";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/data/plans";

export function MembershipSection() {
  return (
    <section className="bg-gradient-to-br from-[#f4f4f5] via-[#e9eaeb] to-[#dedfe1] py-24 md:py-32 border-y border-black/10">
      <div className="container-page">
        <SectionHeading
          align="center"
          title="More protection. More possibilities."
          description="Membership unlocks deeper entitlements across safety, GPS and trip intelligence — as an ecosystem benefit, not a bolt-on subscription."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <MembershipCard key={plan.slug} plan={plan} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/membership/plans" variant="ghost">
            Compare all plans
          </Button>
        </div>
      </div>
    </section>
  );
}
