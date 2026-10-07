import os

code = """\"use client\";
import { useState } from "react";
import { Check } from "lucide-react";

type Filter = "all" | "qr" | "gps" | "soon";

export default function MarketplaceClient() {
  const [filter, setFilter] = useState<Filter>("all");
  const show = (cat: Filter) => filter === "all" || filter === cat;

  return (
    <div className="font-display text-[#0f1220]">
      {/* 1) HERO BAND */}
      <section 
        className="relative pt-[108px] pb-[36px] overflow-hidden"
        style={{ background: 'radial-gradient(60% 120% at 90% 0%, rgba(255,106,0,.28) 0%, rgba(255,106,0,0) 62%), linear-gradient(180deg, #fff1e3 0%, #f7f9fc 100%)' }}
      >
        <div className="relative z-10 max-w-[1120px] mx-auto px-6 flex flex-col items-start text-left">
          
          <div className="rounded-full border border-[#e1e6ee] bg-white px-3.5 py-1 text-[13px] font-semibold text-[#5b6478] mb-[16px]">
            Marketplace
          </div>
          
          <h1 className="text-[clamp(34px,5vw,56px)] font-[800] leading-[1.06] tracking-[-0.025em] text-[#0f1220] max-w-[800px] mb-[12px]">
            Upgrade your vehicle with <span className="text-[#ff6a00]">carQconnect.</span>
          </h1>
          
          <p className="text-[16px] text-[#454c60] max-w-[560px] leading-[1.6]">
            QR safety tags and GPS trackers, delivered to you, then activated and linked to your vehicle in the app.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-3 mt-[18px]">
            {[
              "Order in the app",
              "Activate in the app",
              "One connected vehicle profile"
            ].map(chip => (
              <div key={chip} className="flex items-center gap-2 rounded-full border border-[#e1e6ee] bg-white px-4 py-2 text-[13px] font-medium text-[#5b6478]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#ff6a00]" />
                {chip}
              </div>
            ))}
          </div>

          {/* 2) FILTER CHIPS */}
          <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar mt-[24px] w-full">
            {[
              { id: "all", label: "All products" },
              { id: "qr", label: "QR Safety" },
              { id: "gps", label: "GPS Devices" },
              { id: "soon", label: "Coming soon" },
            ].map((btn) => {
              const active = filter === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setFilter(btn.id as Filter)}
                  aria-pressed={active}
                  className={`flex-shrink-0 rounded-full px-5 py-2.5 text-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:ring-offset-2 border ${
                    active
                      ? "bg-[#ff6a00] font-semibold text-[#1a0b00] border-[#ff6a00]"
                      : "border-[#e1e6ee] bg-white font-medium text-[#0f1220] hover:border-[#ff6a00] hover:text-[#ff6a00]"
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3) PRODUCT GRID BAND */}
      <section className="bg-[#eaeff6] py-[48px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {/* QR Safety Tag */}
            {show("qr") && (
              <div className="flex flex-col rounded-[24px] border border-[#e1e6ee] bg-white transition duration-200 hover:-translate-y-[3px] hover:border-[#ff6a00] hover:shadow-[0_18px_40px_rgba(255,106,0,0.14)] overflow-hidden">
                <div 
                  className="relative h-[190px] w-full flex items-center justify-center overflow-hidden bg-[#12141c]"
                  style={{ background: 'radial-gradient(60% 80% at 50% 40%, rgba(255,106,0,.20), rgba(255,106,0,0) 70%), #12141c' }}
                >
                  <div className="absolute top-5 right-5 rounded-full bg-[#e6f7ee] text-[#0b6b3a] px-3 py-1 text-[12px] font-bold">
                    Most popular
                  </div>
                  {/* QR Illustration */}
                  <div className="relative w-[110px] h-[130px] max-w-[280px]">
                    <div className="absolute inset-[-14px] border-[3px] border-[#ff6a00] rounded-[16px] border-b-0 border-r-0 w-8 h-8" />
                    <div className="absolute inset-[-14px] border-[3px] border-[#ff6a00] rounded-[16px] border-b-0 border-l-0 w-8 h-8 right-[-14px] left-auto" />
                    <div className="absolute inset-[-14px] border-[3px] border-[#ff6a00] rounded-[16px] border-t-0 border-r-0 w-8 h-8 bottom-[-24px] top-auto" />
                    <div className="absolute inset-[-14px] border-[3px] border-[#ff6a00] rounded-[16px] border-t-0 border-l-0 w-8 h-8 bottom-[-24px] top-auto right-[-14px] left-auto" />
                    <div className="w-full h-full bg-white rounded-[12px] flex flex-col items-center justify-center p-3 shadow-xl">
                      <div className="grid grid-cols-2 gap-2 mb-2 w-full">
                        <div className="w-full aspect-square border-4 border-[#12141c] rounded-sm" />
                        <div className="w-full aspect-square border-4 border-[#12141c] rounded-sm" />
                        <div className="w-full aspect-square border-4 border-[#12141c] rounded-sm" />
                        <div className="flex gap-1 justify-between items-end">
                          <div className="w-2.5 h-2.5 bg-[#12141c]" />
                          <div className="w-2.5 h-[18px] bg-[#12141c]" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[#ff6a00] font-bold text-[10px] tracking-widest uppercase">
                      Scan to contact
                    </div>
                  </div>
                </div>
                
                <div className="p-[22px] flex flex-col flex-grow gap-[10px]">
                  <div className="text-[12px] font-bold tracking-[0.14em] text-[#c2410c] uppercase">QR Safety</div>
                  <h2 className="text-[22px] font-[800] text-[#0f1220]">carQconnect QR Safety Tag</h2>
                  <p className="text-[15px] text-[#5b6478]">
                    A private, practical identity for your vehicle. Anyone who finds it can reach you without seeing your number.
                  </p>
                  
                  <div className="w-full h-[1px] bg-[#e1e6ee] my-[4px]" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[8px] gap-x-[16px] pt-[14px]">
                    {["Masked calling", "Scanner needs no app", "Parking and emergency reporting", "Linked to one vehicle"].map(item => (
                      <div key={item} className="flex items-start gap-2.5">
                        <Check className="w-[16px] h-[16px] text-[#ff6a00] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-[14px] font-medium text-[#0f1220] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-6 flex flex-col gap-4">
                    <p className="text-[12.5px] text-[#5b6478]">Available as sticker or tag. You choose what the public can see.</p>
                    <a href="#download" className="self-start inline-flex min-h-[44px] items-center justify-center rounded-[12px] bg-[#ff6a00] px-6 text-[14px] font-bold text-[#1a0b00] shadow-[0_8px_20px_rgba(255,106,0,0.25)] hover:bg-[#ff7b1a] transition-colors">
                      Get it in the app
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* GPS Tracker */}
            {show("gps") && (
              <div className="flex flex-col rounded-[24px] border border-[#e1e6ee] bg-white transition duration-200 hover:-translate-y-[3px] hover:border-[#ff6a00] hover:shadow-[0_18px_40px_rgba(255,106,0,0.14)] overflow-hidden">
                <div 
                  className="relative h-[190px] w-full flex items-center justify-center overflow-hidden bg-[#12141c]"
                  style={{ background: 'radial-gradient(60% 80% at 50% 40%, rgba(255,106,0,.20), rgba(255,106,0,0) 70%), #12141c' }}
                >
                  <div className="absolute top-5 right-5 rounded-full bg-[#e6f7ee] text-[#0b6b3a] px-3 py-1 text-[12px] font-bold">
                    New
                  </div>
                  {/* GPS Illustration */}
                  <div className="relative w-[280px] h-[190px] max-w-[280px] flex items-center justify-center">
                    <div className="absolute w-[140px] h-[140px] rounded-full border border-[#ff6a00]/30" />
                    <div className="absolute w-[200px] h-[200px] rounded-full border border-[#ff6a00]/15" />
                    <div className="absolute w-[260px] h-[260px] rounded-full border border-[#ff6a00]/5" />
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 190">
                      <path d="M 0 160 Q 140 100 280 40" fill="none" stroke="#ff6a00" strokeWidth="3" strokeDasharray="6 6" />
                      <circle cx="80" cy="125" r="4" fill="#ffffff" />
                      <circle cx="280" cy="40" r="5" fill="#ff6a00" />
                    </svg>
                    <div className="relative z-10 w-[48px] h-[34px] bg-[#1e212c] border-[1.5px] border-[#3a3f50] rounded-[6px] shadow-lg flex justify-end p-1.5">
                      <div className="w-1.5 h-1.5 bg-[#ff6a00] rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
                
                <div className="p-[22px] flex flex-col flex-grow gap-[10px]">
                  <div className="text-[12px] font-bold tracking-[0.14em] text-[#c2410c] uppercase">GPS Devices</div>
                  <h2 className="text-[22px] font-[800] text-[#0f1220]">carQconnect GPS Tracker</h2>
                  <p className="text-[15px] text-[#5b6478]">
                    Live location, geofencing and trip history, so you can see your vehicle's status at a glance.
                  </p>
                  
                  <div className="w-full h-[1px] bg-[#e1e6ee] my-[4px]" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[8px] gap-x-[16px] pt-[14px]">
                    {["Live location, last-seen", "Geofence entry and exit alerts", "Trip history and sharing", "Movement alerts, device status"].map(item => (
                      <div key={item} className="flex items-start gap-2.5">
                        <Check className="w-[16px] h-[16px] text-[#ff6a00] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-[14px] font-medium text-[#0f1220] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-6 flex flex-col gap-4">
                    <p className="text-[12.5px] text-[#5b6478]">Live tracking depends on device and network conditions.</p>
                    <a href="#download" className="self-start inline-flex min-h-[44px] items-center justify-center rounded-[12px] bg-[#ff6a00] px-6 text-[14px] font-bold text-[#1a0b00] shadow-[0_8px_20px_rgba(255,106,0,0.25)] hover:bg-[#ff7b1a] transition-colors">
                      Get it in the app
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Coming soon card */}
            {show("soon") && (
              <div className="md:col-span-2 mt-2 flex flex-col md:flex-row items-center justify-between rounded-[24px] border-[1.5px] border-dashed border-[#c4cddc] bg-white px-[24px] py-[20px] gap-6">
                <div className="flex-1">
                  <div className="text-[12px] font-bold tracking-[0.14em] text-[#c2410c] uppercase mb-1">Coming soon</div>
                  <h2 className="text-[22px] font-[800] text-[#0f1220] mb-2">Compatible hardware</h2>
                  <p className="text-[15px] text-[#5b6478] max-w-[600px]">
                    More safety and telematics hardware for the same vehicle profile. Start with a QR tag and add more when you need it.
                  </p>
                </div>
                <a href="#download" className="shrink-0 inline-flex min-h-[44px] items-center justify-center rounded-[12px] border border-[#e1e6ee] bg-white px-6 text-[14px] font-bold text-[#0f1220] hover:border-[#c2410c] hover:text-[#c2410c] transition-colors">
                  Get the app for updates
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4) COMPARE BAND */}
      <section 
        className="relative py-[48px] bg-[#12141c] overflow-hidden"
      >
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none" 
          style={{ background: 'radial-gradient(circle at top left, rgba(255,106,0,.14), transparent 70%)' }}
        />
        <div className="relative z-10 max-w-[1120px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-[10px]">
            <div className="w-[28px] h-[2px] bg-[#ff6a00]" />
            <span className="text-[12px] font-[800] uppercase tracking-[0.16em] text-[#ff8a3d]">COMPARE</span>
          </div>
          <h2 className="text-[clamp(26px,3.4vw,38px)] font-[800] tracking-tight text-white mb-[20px]">Which one is right for you?</h2>
          
          <div className="w-full overflow-x-auto rounded-[22px] border border-white/10 bg-[#1a1d27]">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="bg-[#20232f]">
                  <th className="px-[20px] py-[13px] w-[22%]"></th>
                  <th className="px-[20px] py-[13px] font-bold text-white">QR Safety Tag</th>
                  <th className="px-[20px] py-[13px] font-bold text-white">GPS Tracker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[.08]">
                {[
                  { label: "Its job", qr: "Safety when someone finds your vehicle", gps: "Visibility while your vehicle moves" },
                  { label: "Who uses it", qr: "Anyone who scans it, to reach you privately", gps: "You, and people you choose to share a trip with" },
                  { label: "Alerts", qr: "Calls, messages and reports from scanners", gps: "Geofence and movement alerts" },
                  { label: "App needed", qr: "Not for the scanner. You activate it in the app", gps: "Yes, to activate, view and manage" },
                  { label: "Depends on", qr: "Your privacy settings", gps: "Device and network conditions" }
                ].map((row, i) => (
                  <tr key={i} className="transition-colors hover:bg-white/[.02]">
                    <td className="px-[20px] py-[13px] text-[13px] font-bold text-[#9aa0b2]">{row.label}</td>
                    <td className="px-[20px] py-[13px] text-[14px] text-[#e6e8f0]">{row.qr}</td>
                    <td className="px-[20px] py-[13px] text-[14px] text-[#e6e8f0]">{row.gps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5) HOW IT WORKS BAND */}
      <section className="bg-[#fff3e6] py-[48px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-[10px]">
            <div className="w-[28px] h-[2px] bg-[#ff6a00]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#ff6a00]">HOW IT WORKS</span>
          </div>
          <h2 className="text-[clamp(26px,3.4vw,38px)] font-[800] tracking-tight text-[#0f1220] mb-[20px]">From delivery to your dashboard</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px]">
            {[
              { num: "01", title: "Choose your hardware", desc: "Pick a QR Safety Tag, a GPS Tracker, or both." },
              { num: "02", title: "Order in the app", desc: "Checkout, payment and order updates all happen in the carQconnect app." },
              { num: "03", title: "Get it delivered", desc: "Your hardware is shipped to your address." },
              { num: "04", title: "Activate and link", desc: "Scan or enter the device details and link it to your vehicle." },
            ].map(step => (
              <div key={step.num} className="flex flex-col rounded-[20px] bg-white border border-[#f1d9c4] p-[18px]">
                <div className="mb-[10px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#ff6a00] text-[13px] font-bold text-[#1a0b00]">
                  {step.num}
                </div>
                <h3 className="text-[16px] font-bold text-[#0f1220] mb-2">{step.title}</h3>
                <p className="text-[14.5px] leading-[1.6] text-[#5b6478]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) CLOSING BAND */}
      <section id="download" className="py-[40px]" style={{ background: 'linear-gradient(110deg, #ff6a00, #ff8a2b)' }}>
        <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-[32px] md:text-[40px] font-[800] tracking-tight text-[#1a0b00] mb-[4px]">
              Get the carQconnect app.
            </h2>
            <p className="text-[17px] text-[#3d1d00] max-w-[500px]">
              Order hardware, activate it and manage your vehicle from one place.
            </p>
          </div>
          <a href="#download" className="shrink-0 inline-flex min-h-[44px] items-center justify-center rounded-[12px] bg-[#12141c] px-8 text-[16px] font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,.25)] hover:bg-black transition-colors">
            Download App
          </a>
        </div>
      </section>
    </div>
  );
}
"""
with open("app/(site)/marketplace/client-page.tsx", "w", encoding="utf-8") as f:
    f.write(code)
