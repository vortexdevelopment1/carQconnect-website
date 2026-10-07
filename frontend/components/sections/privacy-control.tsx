"use client";

import Link from "next/link";
import { Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function PrivacyControlSection() {
  return (
    <section id="safety" className="w-full bg-white [@media(max-width:959px)]:pt-[16px] [@media(max-width:959px)]:pb-[40px] [@media(max-width:959px)]:px-[20px] pt-[16px] pb-[40px] px-[32px]">
      <div className="mx-auto max-w-[1240px]">
        
        {/* TOP AREA */}
        <div className="grid gap-[40px] items-center lg:grid-cols-2">
          
          {/* LEFT: Text & CTAs */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[32px] h-[2px] bg-[#FF5A00]" />
              <span className="text-[13px] font-bold tracking-[0.16em] text-[#FF5A00] uppercase">PRIVACY & CONTROL</span>
            </div>
            
            <h2 
              className="font-display font-bold tracking-tight text-[#12131A] mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              Built around privacy,<br />
              safety and <span className="text-[#FF5A00]">control.</span>
            </h2>
            
            <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#5B6070] max-w-[540px] mb-10">
              Public QR actions are designed to expose only approved information. Owner contact stays protected, while important interactions remain useful and reusable.
            </p>
            
            <div className="flex items-center gap-6">
              <Link 
                href="/#download"
                className="inline-flex items-center justify-center bg-[#12131A] text-white text-[13px] font-bold uppercase tracking-[0.06em] px-[24px] py-[14px] rounded-[6px] transition-transform hover:-translate-y-1"
              >
                CREATE YOUR ACCOUNT
              </Link>
            </div>
          </div>
          
          {/* RIGHT: Phone Mockup */}
          <div className="w-full max-w-[360px] mx-auto bg-[#F7F8FC] rounded-[24px] p-[16px] [@media(max-width:959px)]:mt-8">
            <div className="bg-white border border-[#ECEEF4] rounded-[22px] overflow-hidden shadow-[0_18px_50px_rgba(18,19,26,0.1)]">
              {/* Header Bar */}
              <div className="bg-[#12131A] px-[18px] py-[14px] flex items-center justify-between">
                <span className="text-white text-[12px] font-semibold">What a scanner sees</span>
                <span className="text-[#FF5A00] text-[12px] font-bold">No app needed</span>
              </div>
              
              <div className="p-[18px] pb-[16px]">
                {/* Block 1: Actions */}
                <div className="mb-4">
                  <h4 className="text-[10.5px] font-bold tracking-[0.14em] text-[#FF5A00] uppercase mb-3">AVAILABLE ACTIONS</h4>
                  <div className="flex flex-col gap-[6px]">
                    {["Call owner (masked)", "Send message", "Report an issue", "Emergency action"].map(action => (
                      <div key={action} className="flex items-center gap-3 bg-[#FFEBDD] rounded-[9px] px-[10px] py-[6px]">
                        <Check className="w-[14px] h-[14px] text-[#FF5A00]" strokeWidth={3} />
                        <span className="text-[13px] font-semibold text-[#12131A]">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Block 2: Not Exposed */}
                <div className="pt-4 border-t border-dashed border-[#D9DCE8] -mx-[18px] px-[18px] bg-[#FAFAFC] pb-2">
                  <h4 className="text-[10.5px] font-bold tracking-[0.14em] text-[#8A8FA3] uppercase mb-3">NOT EXPOSED</h4>
                  <div className="flex flex-col gap-[6px]">
                    {["Owner's personal number", "Private customer data", "Medical info (unless opted in)"].map(item => (
                      <div key={item} className="flex items-center gap-3 bg-[#EFF0F5] rounded-[9px] px-[10px] py-[6px]">
                        <Lock className="w-[12px] h-[12px] text-[#9A9FB2]" strokeWidth={2.5} aria-hidden="true" />
                        <span className="text-[13px] font-semibold text-[#9A9FB2] blur-[3.5px] select-none" aria-hidden="true">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[28px]">
          {[
            {
              num: "01",
              title: "Privacy",
              items: ["Masked calling instead of your personal number", "Public page shows only what the owner configures", "No private data without owner's permission"],
              isDark: false
            },
            {
              num: "02",
              title: "Safety",
              items: ["Press-and-hold SOS to avoid accidental alerts", "Family contacts notified with your location", "Medical info only if you opt in"],
              isDark: true
            },
            {
              num: "03",
              title: "Control",
              items: ["Owner sets the QR privacy settings", "Location, notifications and communication need consent", "Rate limiting and anti-abuse on public QR"],
              isDark: false
            }
          ].map(card => (
            <div 
              key={card.num}
              className={cn(
                "rounded-[22px] p-[20px] transition-all duration-200 ease-out hover:-translate-y-[5px]",
                card.isDark 
                  ? "bg-[#12131A] border border-[#2A2D3A] shadow-[0_10px_30px_rgba(18,19,26,0.15)] hover:shadow-[0_18px_44px_rgba(18,19,26,0.25)]" 
                  : "bg-white border border-[#ECEEF4] shadow-[0_10px_30px_rgba(18,19,26,0.05)] hover:shadow-[0_18px_44px_rgba(18,19,26,0.1)]"
              )}
            >
              <div 
                className={cn(
                  "inline-flex items-center justify-center px-[11px] py-[5px] rounded-[9px] mb-6",
                  card.isDark ? "bg-[#FF5A00]" : "bg-[#FFEBDD]"
                )}
              >
                <span className={cn("text-[12px] font-bold", card.isDark ? "text-white" : "text-[#FF5A00]")}>{card.num}</span>
              </div>
              <h3 className={cn("font-display font-bold text-[18px] mb-4", card.isDark ? "text-white" : "text-[#12131A]")}>
                {card.title}
              </h3>
              <ul className="flex flex-col">
                {card.items.map((item, i) => (
                  <li 
                    key={i} 
                    className={cn(
                      "relative py-[7px] pl-[24px]",
                      i > 0 && (card.isDark ? "border-t border-[#2A2D3A]" : "border-t border-[#ECEEF4]")
                    )}
                  >
                    <Check className="absolute left-0 top-[9px] w-[14px] h-[14px] text-[#FF5A00]" strokeWidth={3} />
                    <span className={cn("text-[13.5px] leading-relaxed", card.isDark ? "text-[#A8ACBA]" : "text-[#5B6070]")}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* TRUST STRIP */}
        <div className="flex flex-wrap items-center justify-center gap-x-[28px] gap-y-[10px] mt-[24px]">
          {["Server-verified payments", "Rate-limited QR scans", "Consent-based location"].map(text => (
            <div key={text} className="flex items-center gap-[8px]">
              <div className="w-[4px] h-[4px] rounded-full bg-[#FF5A00]" />
              <span className="text-[12.5px] font-semibold text-[#5B6070]">{text}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
