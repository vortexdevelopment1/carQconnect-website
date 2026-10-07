"use client";

import { Smartphone, Apple, Mic, Calculator, MessageSquareText } from "lucide-react";

export function AppDownloadSection() {
  return (
    <section id="download" className="bg-[#12131A] pt-[64px] pb-[72px] px-[32px] overflow-hidden">
      
      
      <div className="container-page max-w-[1180px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-12 items-center relative">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col z-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[32px] h-[2px] bg-[#FF5A00]" />
            <span className="text-[12px] font-bold tracking-[0.16em] text-[#FF5A00] uppercase">GET THE APP</span>
          </div>
          
          <h2 className="font-display font-bold tracking-tight text-white mb-5" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1 }}>
            Your vehicle's intelligence belongs in <span className="text-[#FF5A00]">your pocket.</span>
          </h2>
          
          <p className="text-[16px] leading-[1.6] text-[#A8ACBA] max-w-[480px] mb-8">
            Plan trips by voice, get fuel and toll estimates, and get help when you need it. Safety, GPS and FASTag, all in one app. Buy hardware and activate it in the carQconnect app.
          </p>
          
          <div className="flex flex-col gap-6 mb-10 max-w-[480px]">
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] rounded-full bg-[#1B1D26] border border-[#2A2D3A] flex items-center justify-center shrink-0">
                <Mic className="w-4 h-4 text-[#FF5A00]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white leading-tight">Voice trip planning</p>
                <p className="text-[14px] text-[#A8ACBA] mt-1.5 leading-snug">Just say where you're going. The app plans the route.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] rounded-full bg-[#1B1D26] border border-[#2A2D3A] flex items-center justify-center shrink-0">
                <Calculator className="w-4 h-4 text-[#FF5A00]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white leading-tight">Fuel and toll estimates</p>
                <p className="text-[14px] text-[#A8ACBA] mt-1.5 leading-snug">See the estimated cost before you start, based on your vehicle's mileage.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] rounded-full bg-[#1B1D26] border border-[#2A2D3A] flex items-center justify-center shrink-0">
                <MessageSquareText className="w-4 h-4 text-[#FF5A00]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white leading-tight">AI support, with a human backup</p>
                <p className="text-[14px] text-[#A8ACBA] mt-1.5 leading-snug">Get quick answers, and the conversation passes to a person if needed.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <a href="#download" className="flex items-center justify-center gap-2.5 h-[48px] bg-black border border-[#2A2D3A] rounded-[8px] px-5 hover:bg-[#1B1D26] transition-colors w-full sm:w-[180px]">
              <img src="/apple.svg" alt="Apple" className="w-[22px] h-[22px]" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight text-white/70">Download on the</span>
                <span className="text-[15px] font-semibold leading-tight text-white">App Store</span>
              </div>
            </a>
            <a href="#download" className="flex items-center justify-center gap-2.5 h-[48px] bg-black border border-[#2A2D3A] rounded-[8px] px-5 hover:bg-[#1B1D26] transition-colors w-full sm:w-[180px]">
              <img src="/google-play.svg" alt="Google Play" className="w-6 h-6" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight text-white/70">GET IT ON</span>
                <span className="text-[15px] font-semibold leading-tight text-white">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN (Chat Card) */}
        <div className="relative flex justify-center items-center lg:justify-end lg:pr-12 min-h-[380px] z-10">
          
          <div className="relative w-full max-w-[420px]">
            {/* Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#FF5A00] opacity-[0.18] blur-[100px] rounded-full pointer-events-none" />
            
            {/* Chat Card */}
            <div className="relative w-full bg-[#1B1D26] border border-[#2A2D3A] rounded-[24px] p-6 shadow-[0_20px_60px_rgba(255,90,0,0.1)]">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-[#2A2D3A] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#FF5A00]" />
                <span className="text-[13px] font-medium text-white">carQconnect Assistant</span>
              </div>
              <Mic className="w-4 h-4 text-[#A8ACBA]" />
            </div>

            {/* Chat Messages */}
            <div className="flex flex-col gap-6">
              
              {/* User Bubble */}
              <div className="flex justify-end animate-bubble-1">
                <div className="bg-[#FF5A00] text-white text-[14px] leading-relaxed rounded-t-[18px] rounded-bl-[18px] rounded-br-[4px] px-4 py-3 max-w-[85%]">
                  Plan a trip from Indore to Udaipur for tomorrow.
                </div>
              </div>

              {/* Assistant Response Wrapper */}
              <div className="flex flex-col gap-3 animate-bubble-2">
                
                {/* Assistant Bubble */}
                <div className="flex justify-start">
                  <div className="bg-[#12131A] border border-[#2A2D3A] text-white text-[14px] leading-relaxed rounded-t-[18px] rounded-br-[18px] rounded-bl-[4px] px-4 py-3 max-w-[85%] shadow-sm">
                    Here's your trip.
                  </div>
                </div>

                {/* Estimate Chips */}
                <div className="flex flex-wrap gap-2 animate-bubble-3 pl-1">
                  {["Distance", "Fuel estimate", "Toll estimate", "Suggested stops"].map(pill => (
                    <div key={pill} className="bg-[#12131A] border border-[#2A2D3A] text-[#A8ACBA] text-[13px] font-medium rounded-full px-3 py-1.5 shadow-sm">
                      {pill}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer Line */}
            <div className="mt-8 pt-4 border-t border-[#2A2D3A]/50">
              <p className="text-[12px] text-[#6B6F80]">Estimates. Actual costs may vary.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

