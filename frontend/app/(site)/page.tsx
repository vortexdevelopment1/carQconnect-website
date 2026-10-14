import { Hero } from "@/components/sections/hero";
import { PromoBanner } from "@/components/sections/promo-banner";
import { ConnectedSystems } from "@/components/sections/connected-systems";
import { ProductComparison } from "@/components/sections/product-comparison";
import { AppDownloadSection } from "@/components/sections/app-download-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <ConnectedSystems />
      <ProductComparison />
      <AppDownloadSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
