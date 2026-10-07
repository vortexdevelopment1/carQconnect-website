import Link from "next/link";
import { Camera, MapPinned, QrCode, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FeatureShowcase } from "./feature-showcase";
import { PrivacyControlSection } from "./privacy-control";
import { cn } from "@/lib/utils";



export function ConnectedSystems() {
  return (
    <>
      <section id="systems" className="w-full [@media(max-width:767px)]:pt-[20px] [@media(max-width:767px)]:pb-[32px] pt-[24px] pb-[clamp(40px,5vw,64px)] bg-[#14151A]">
        <div className="container-page [@media(max-width:767px)]:px-[16px]">
          <div className="flex flex-col">
            <p style={{ color: '#FF5A00', fontWeight: 800, fontSize: '12px', letterSpacing: '.14em', margin: 0, textTransform: 'uppercase' }}>
              CONNECTED VEHICLE PLATFORM
            </p>
            <h2 
              className="font-display [@media(max-width:767px)]:text-[clamp(26px,7vw,32px)]"
              style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(34px,4.2vw,56px)', lineHeight: 1.08, letterSpacing: '-.03em', margin: '12px 0 14px' }}
            >
              Smart systems. <br />
              <span style={{ color: '#FF5A00' }}>Smooth journeys.</span>
            </h2>
            <p 
              className="leading-relaxed [@media(max-width:767px)]:text-[14px]"
              style={{ color: '#A4ABB8', maxWidth: '56ch', marginBottom: '24px', fontSize: 'clamp(14px, 1.5vw, 16px)' }}
            >
              carQconnect gives each product a clear job: safety when someone finds your vehicle, visibility while it moves, and useful hardware for every drive.
            </p>
          </div>

          <FeatureShowcase />
        </div>
      </section>

      <section id="features" className="bg-white py-[clamp(56px,7vw,88px)] w-full">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="pr-0 lg:pr-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-[#FF5A00]" />
              <p className="text-xs font-extrabold tracking-[0.16em] text-[#FF5A00] uppercase">WHY CARQCONNECT</p>
            </div>
            <h2 
              className="mt-6 font-display font-bold tracking-tight text-[#0C0C0E]" 
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.08 }}
            >
              Because your vehicle needs more than a phone number on the dashboard.
            </h2>
            <p className="mt-6 max-w-[48ch] text-[15px] sm:text-[16px] leading-relaxed text-[#5A6270]">
              A QR sticker alone cannot protect privacy. A tracker alone cannot help a person who finds your parked car. carQconnect brings the moments that matter into one vehicle profile.
            </p>
            <Link 
              href="/features" 
              className="mt-10 inline-flex items-center justify-center gap-2 text-[15px] font-bold text-white bg-[#0C0C0E] hover:bg-[#FF5A00] hover:-translate-y-1 transition-all duration-300 py-3.5 px-7 rounded-xl w-fit shadow-md"
            >
              See all product features <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </div>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            {[
              ["Privacy first", "Your personal number stays private while a genuine caller can still reach you."],
              ["Useful in real life", "Parking, towing, emergencies and vehicle movement each have a clear action."],
              ["One vehicle record", "Hardware, safety status and future services stay connected to the same vehicle."],
              ["Built to grow", "Start with a QR tag, then add GPS and compatible road-visibility hardware when you need it."],
            ].map(([title, text], index) => {
              const isDark = index === 3;
              return (
                <div 
                  key={title} 
                  className={cn(
                    "flex flex-col rounded-[20px] p-7 transition-transform hover:-translate-y-1",
                    isDark 
                      ? "bg-[#111318] border border-[#2E3139] shadow-xl" 
                      : "bg-white border border-[#F1F3F6] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                  )}
                >
                  <div 
                    className={cn(
                      "flex items-center justify-center w-max px-3.5 py-1.5 rounded-[8px] mb-6",
                      isDark ? "bg-[#FF5A00]" : "bg-[#FFF0E6]"
                    )}
                  >
                    <span 
                      className={cn(
                        "text-[13px] font-extrabold",
                        isDark ? "text-white" : "text-[#FF5A00]"
                      )}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <h3 
                    className={cn(
                      "text-[18px] font-bold mb-3",
                      isDark ? "text-white" : "text-[#0C0C0E]"
                    )}
                  >
                    {title}
                  </h3>
                  <p 
                    className={cn(
                      "text-[14px] leading-[1.6]",
                      isDark ? "text-[#A4ABB8]" : "text-[#5A6270]"
                    )}
                  >
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PrivacyControlSection />
    </>
  );
}

