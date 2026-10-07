import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";

export function MarketplaceSection() {
  return (
    <section className="bg-[#f4f4f5] py-24 md:py-32 border-b border-black/10">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Upgrade your vehicle with carQconnect."
            description="QR safety tags and GPS trackers — delivered, then activated in the app."
          />
          <Button href="/marketplace" variant="secondary" className="shrink-0">
            Browse Marketplace
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
