import type { Metadata } from "next";
import { QrScannerDemo } from "@/components/qr/qr-scanner-demo";
import { SectionHeading } from "@/components/ui/section-heading";
import { Lock, ShieldOff, Heart, Ban } from "lucide-react";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "QR Safety",
  description: "How the carQconnect QR works - activation, the public scan experience, masked calling and privacy controls.",
};

const rules = [
  { icon: Lock, title: "Masked calling", description: "Callers reach you without ever seeing your real number." },
  { icon: ShieldOff, title: "Privacy by default", description: "Public scans show only what you've chosen to make visible." },
  { icon: Heart, title: "Optional medical info", description: "Blood group or allergies can be shown to first responders, only if you opt in." },
  { icon: Ban, title: "Abuse protection", description: "Rate limiting and anti-abuse checks protect the public QR page." },
];

export default function QrSafetyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FFFFFF] pt-[90px] md:pt-[100px] pb-12 md:pb-20 border-b border-[#ECEEF4]">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(600px 400px at 85% 0%, rgba(255,90,0,0.12), transparent 70%)' }}
        />
        <div className="container-page relative z-10 max-w-[1180px] mx-auto">
        <div className="mb-2 -mt-2"><BackButton fallback="/#features" label="Back" /></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[32px] h-[2px] bg-[#FF5A00]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#FF5A00]">QR SAFETY</span>
          </div>
          
          <h1 className="font-display font-[800] tracking-tight text-[#12131A] mb-5 max-w-[800px]" style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.1 }}>
            A smarter, safer identity for your <span className="text-[#FF5A00]">vehicle.</span>
          </h1>
          
          <p className="text-[17px] leading-relaxed text-[#5B6070] max-w-[560px] mb-8">
            The QR is the physical-to-digital bridge at the core of carQconnect. Activate it once, and it works for anyone who needs to reach you about your vehicle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[14px]">
            <a href="/#download" className="flex items-center justify-center h-[52px] px-[28px] bg-[#FF5A00] text-white text-[14px] font-bold rounded-[12px] shadow-[0_10px_30px_rgba(255,90,0,.3)] hover:bg-[#FF7226] transition-colors">
              Download App
            </a>
            <a href="#demo" className="flex items-center justify-center h-[52px] px-[28px] bg-white border-[1.5px] border-[#E3E5EC] text-[#12131A] text-[14px] font-bold rounded-[12px] hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <QrScannerDemo />

      <section className="bg-white py-14 md:py-[72px] border-t border-[#ECEEF4]">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="flex items-center gap-4 mb-3.5">
            <div className="w-[32px] h-[2px] bg-[#FF5A00]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#FF5A00]">PRIVACY</span>
          </div>
          
          <h2 className="font-display font-[800] tracking-[-0.03em] text-[#12131A] leading-[1.08]" style={{ fontSize: 'clamp(30px,4vw,46px)' }}>
            Built around your <span className="text-[#FF5A00]">privacy.</span>
          </h2>
          
          <p className="mt-3 mb-10 max-w-[560px] text-[16px] text-[#5B6070]">
            Public users never receive private data unless you've explicitly configured it for emergency or public visibility.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rules.map(({ icon: Icon, title, description }, index) => {
              const isHighlighted = index === 1; // "Privacy by default" is the second card (index 1)
              
              return (
                <div 
                  key={title} 
                  className={`rounded-[22px] border p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(18,19,26,0.1)] ${
                    isHighlighted 
                      ? "bg-[#12131A] border-[#12131A] shadow-[0_10px_30px_rgba(18,19,26,0.15)]" 
                      : "bg-white border-[#ECEEF4] shadow-[0_10px_30px_rgba(18,19,26,0.05)]"
                  }`}
                >
                  <div className={`mb-4 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] ${isHighlighted ? "bg-[#FF5A00]" : "bg-[#FFEBDD]"}`}>
                    <Icon className={`h-[22px] w-[22px] ${isHighlighted ? "text-white" : "text-[#FF5A00]"}`} strokeWidth={1.75} />
                  </div>
                  
                  <h3 className={`mb-1.5 font-display text-[17px] font-[800] ${isHighlighted ? "text-white" : "text-[#12131A]"}`}>
                    {title}
                  </h3>
                  
                  <p className={`text-[14.5px] leading-relaxed ${isHighlighted ? "text-[#A8ACBA]" : "text-[#5B6070]"}`}>
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
