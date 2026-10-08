"use client";

import Link from "next/link";
import { ShieldCheck, Apple, Smartphone, ArrowUp } from "lucide-react";
import { footerColumns } from "@/lib/data/nav";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#262935] bg-gradient-to-b from-[#12131A] to-[#0D0E13]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent" />
      
      <div className="w-full px-[clamp(24px,6vw,120px)] pt-14 md:pt-[72px] pb-[24px]">
        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-x-8 gap-y-12 min-[900px]:grid-cols-[1.5fr_repeat(4,1fr)]">
          
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-gradient-to-br from-[#FF5A00] to-[#FF8A3D] shadow-[0_8px_22px_rgba(255,90,0,0.35)]">
                <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display text-[22px] font-extrabold text-white">carQconnect</span>
            </Link>
            <p className="mt-4 mb-[22px] max-w-[290px] text-[14.5px] leading-[1.6] text-[#A8ACBA]">
              One connected ecosystem for your vehicle's safety, tracking and everyday journeys.
            </p>
            
            <div className="flex items-center gap-[10px]">
              <a href="#" className="flex items-center gap-2.5 rounded-[10px] border border-[#3A3D4C] bg-black px-[14px] py-[8px] transition-colors hover:border-[#FF5A00]">
                <img src="/apple.svg" alt="Apple" className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-[9px] leading-tight text-white/70">Download on the</span>
                  <span className="text-[12px] font-semibold leading-tight text-white">App Store</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2.5 rounded-[10px] border border-[#3A3D4C] bg-black px-[14px] py-[8px] transition-colors hover:border-[#FF5A00]">
                <img src="/google-play.svg" alt="Google Play" className="h-[22px] w-[22px]" />
                <div className="flex flex-col items-start">
                  <span className="text-[9px] leading-tight text-white/70">GET IT ON</span>
                  <span className="text-[12px] font-semibold leading-tight text-white">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white before:block before:h-[2px] before:w-[14px] before:bg-[#FF5A00] before:content-['']">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-[13px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="group inline-flex items-center min-h-[44px] whitespace-nowrap text-[14.5px] text-[#A8ACBA] transition-all duration-200 hover:translate-x-1 hover:text-white">
                      {link.label} <span className="ml-0 text-base leading-none text-[#FF5A00] opacity-0 transition-all duration-200 group-hover:ml-1 group-hover:opacity-100">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        <div className="relative z-10 mt-14 flex items-center justify-between border-t border-[#262935] py-[22px]">
          <p className="text-[13px] text-[#7B7F90]">
            &copy; 2026 carQconnect. All rights reserved.
          </p>
          <a href="#" onClick={scrollToTop} className="group flex items-center gap-1.5 text-[13px] font-semibold text-[#A8ACBA] transition-colors hover:text-[#FF5A00]">
            Back to top <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>
      
      <div className="pointer-events-none relative z-[1] mb-0 pb-6 -mt-6 md:-mt-8 select-none whitespace-nowrap text-center font-display text-[clamp(60px,15.5vw,230px)] font-extrabold leading-[0.9] tracking-[-0.05em] text-transparent bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text" aria-hidden="true">
        carQconnect
      </div>
    </footer>
  );
}


