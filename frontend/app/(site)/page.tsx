import { Hero } from "@/components/sections/hero";
import { ConnectedSystems } from "@/components/sections/connected-systems";
import { ProductComparison } from "@/components/sections/product-comparison";
import { AppDownloadSection } from "@/components/sections/app-download-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { WhatsAppCta } from "@/components/sections/whatsapp-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConnectedSystems />
      <ProductComparison />
      <AppDownloadSection />
      <FaqSection />
      <FinalCta />
      <WhatsAppCta />
    </>
  );
}
