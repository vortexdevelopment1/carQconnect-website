"use client";

import React from 'react';
import { cn } from "@/lib/utils";

export default function HowItWorksOverview() {
  return (
    <section id="how-it-works" className="relative bg-[#0C0C0E] py-[clamp(32px,5vw,56px)] overflow-hidden w-full" style={{ paddingBottom: '0' }}>
      {/* Top radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[rgba(255,90,0,0.1)] blur-[120px] pointer-events-none rounded-[100%]" />
      
      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[2px] bg-[#FF5A00]" />
          <p className="text-[12px] font-extrabold tracking-[0.16em] text-[#FF5A00] uppercase flex items-center gap-2">
            HOW IT WORKS <span className="opacity-50">&bull;</span> SHORT VERSION
          </p>
          <div className="w-8 h-[2px] bg-[#FF5A00]" />
        </div>
        <h2 
          className="font-display font-bold tracking-tight text-white mb-10" 
          style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, letterSpacing: '-.02em' }}
        >
          One setup.<br />
          <span className="text-[#FF5A00]">Everyday confidence.</span>
        </h2>

        <div className="relative w-full max-w-[1040px] mx-auto">
          {/* Horizontal Dashed Timeline for desktop */}
          <div className="hidden md:block absolute top-[24px] left-[16%] right-[16%] h-px border-t border-dashed border-[#2E3139] z-0" />
          
          {/* Vertical Dashed Timeline for mobile */}
          <div className="md:hidden absolute top-[24px] bottom-[100px] left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[#2E3139] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 relative z-10">
            {[
              {
                number: "01",
                title: "Choose your hardware",
                text: "Pick a QR tag, a GPS tracker, or both for your vehicle.",
              },
              {
                number: "02",
                title: "Activate in the app",
                text: "Link each device to the right vehicle and select your privacy preferences.",
              },
              {
                number: "03",
                title: "Drive connected",
                text: "Use safety, tracking and support features when you actually need them.",
              }
            ].map((step, index) => {
              const isLast = index === 2;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  <div className="relative mb-5">
                    {/* Glow behind the circle */}
                    <div className="absolute inset-[-14px] bg-[rgba(255,90,0,0.15)] blur-[10px] rounded-full -z-10" />
                    
                    {/* Circle */}
                    <div 
                      className={cn(
                        "w-[48px] h-[48px] rounded-full flex items-center justify-center text-[15px] font-bold bg-[#0C0C0E]",
                        isLast 
                          ? "bg-gradient-to-b from-[#FF7A1A] to-[#FF5A00] text-white shadow-[0_0_24px_rgba(255,90,0,0.4)] border-none" 
                          : "border-[2px] border-[#FF5A00] text-[#FF5A00]"
                      )}
                    >
                      {step.number}
                    </div>
                  </div>

                  <div className="w-full h-full bg-[#1A1C23] border border-[#2E3139] rounded-[24px] p-6 sm:p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:border-[#3A3D46]">
                    <h3 className="text-[19px] font-bold text-white mb-3 text-center">{step.title}</h3>
                    <p className="text-[15px] leading-[1.6] text-[#A4ABB8] text-center">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bridge */}
      <div className="w-full flex flex-col items-center justify-center pt-24 pb-12 lg:pt-4 lg:pb-0 relative z-10">
        <p style={{ fontSize: '14px', color: '#9aa0b2' }} className="mb-4">Here is each step in detail.</p>
        <button 
          onClick={(e) => {
            const el = document.getElementById('step-0');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center justify-center"
          aria-label="Scroll to details"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
               className="motion-safe:animate-bounce" style={{ animationDuration: '1.6s' }}>
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>

      {/* Fade to detailed steps background (#0e1016) */}
      <div className="w-full h-[120px] lg:h-[20px] bg-gradient-to-b from-transparent to-[#0e1016]" />
    </section>
  );
}

