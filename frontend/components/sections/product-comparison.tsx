import Link from "next/link";
import { Check, X, ArrowUpRight } from "lucide-react";

const rows = [
  ["Public QR safety page", true, false],
  ["Masked owner contact", true, false],
  ["Live location and trip history", false, true],
  ["Geofence and movement alerts", false, true],
];

export function ProductComparison() {
  return (
    <section id="compare" className="bg-[#F7F8FC] pt-[32px] pb-[64px]">
      <div className="container-page max-w-[1240px] mx-auto">
        
        {/* Heading Area */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[32px] h-[2px] bg-[#FF5A00]" />
              <p className="text-[12px] font-bold tracking-[0.16em] text-[#FF5A00] uppercase">CHOOSE YOUR SETUP</p>
            </div>
            <h2 className="font-display font-bold tracking-tight text-[#12131A]" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
              Start simple. Add what matters.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[#5B6070] max-w-xl">
              Buy and activate in the carQconnect app. Use this guide to decide which setup fits your vehicle.
            </p>
          </div>
          <Link href="/marketplace" className="group shrink-0 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#12131A] border-b-[2px] border-[#FF5A00] pb-1 hover:text-[#FF5A00] transition-colors">
            Explore all hardware 
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </Link>
        </div>

        {/* Table Container */}
        <div className="mt-12 rounded-[20px] border border-[#ECEEF4] bg-white shadow-[0_10px_30px_rgba(18,19,26,0.05)] overflow-hidden">
          <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
            <div className="min-w-[600px]">
              
              {/* Header */}
              <div className="grid grid-cols-[50%_25%_25%] bg-[#12131A] text-white">
                <div className="p-6 sm:p-8 flex items-end pb-8 text-[12px] font-bold text-[#9AA0AE] tracking-[0.14em] uppercase">
                  COMPARE FEATURES
                </div>
                
                <div className="p-6 sm:p-8 border-l border-[#2A2D3A] flex flex-col items-start justify-end text-left">
                  <p className="font-display text-[20px] font-bold text-white leading-tight">QR Safety Tag</p>
                  <p className="mt-1.5 text-[13px] text-white/60">For everyday public contact</p>
                </div>

                <div className="p-6 sm:p-8 border-l border-[#2A2D3A] flex flex-col items-start justify-end text-left">
                  <p className="font-display text-[20px] font-bold text-white leading-tight">GPS Tracker</p>
                  <p className="mt-1.5 text-[13px] text-white/60">For movement visibility</p>
                </div>
              </div>

              {/* Body Rows */}
              <div className="flex flex-col">
                {rows.map(([feature, qr, gps], i) => (
                  <div key={i} className={`grid grid-cols-[50%_25%_25%] min-h-[56px] transition-colors hover:bg-[#F9FAFD] ${i !== rows.length - 1 ? "border-b border-[#ECEEF4]" : ""}`}>
                    <div className="px-6 sm:px-8 py-4 text-[15px] font-semibold text-[#12131A] flex items-center">
                      {feature}
                    </div>
                    <div className="flex items-center justify-center border-l border-[#ECEEF4] px-4 py-4">
                      {qr ? (
                        <Check className="w-[18px] h-[18px] text-[#1FA971]" strokeWidth={3} />
                      ) : (
                        <X className="w-5 h-5 text-[#9AA0AE]" strokeWidth={2.5} />
                      )}
                    </div>
                    <div className="flex items-center justify-center border-l border-[#ECEEF4] px-4 py-4">
                      {gps ? (
                        <Check className="w-[18px] h-[18px] text-[#1FA971]" strokeWidth={3} />
                      ) : (
                        <X className="w-5 h-5 text-[#9AA0AE]" strokeWidth={2.5} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info Text */}
        <p className="mt-6 text-center text-[13.5px] sm:text-[14px] font-medium text-[#5B6070]">
          Both devices activate in the carQconnect app. Use both for complete coverage.
        </p>

      </div>
    </section>
  );
}


