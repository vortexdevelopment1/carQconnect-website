import { SectionHeading } from "@/components/ui/section-heading";
import { QrScannerDemo } from "@/components/qr/qr-scanner-demo";
import { Button } from "@/components/ui/button";

export function QrSafetySection() {
  return (
    <section className="bg-[#f4f4f5] py-24 md:py-32 border-b border-black/10">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="A smarter identity for your vehicle."
            description="Someone finds your parked vehicle or needs to reach you - they scan the QR and land on a secure carQconnect page. No app install required."
          />
          <Button href="/qr-safety" variant="secondary" className="shrink-0">
            Learn about QR Safety
          </Button>
        </div>

        <div className="mt-14">
          <QrScannerDemo />
        </div>
      </div>
    </section>
  );
}
