"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { ShieldCheck, ArrowUp } from "lucide-react";
import { footerColumns } from "@/lib/data/nav";

export function Footer() {
  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      data-type-scale="off"
      className="relative border-t border-[#262935] bg-gradient-to-b from-[#12131A] to-[#0D0E13]"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent" />

      {/* MAIN FOOTER CONTENT */}
      <div className="container-page relative z-10 pt-[var(--section-py)] pb-0">
        {/* 2 cols on phones, 4 cols from 640px (brand on its own row), 5 cols from 1100px */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 min-[640px]:grid-cols-4 min-[640px]:gap-y-8 min-[1100px]:grid-cols-[1.4fr_repeat(4,1fr)] min-[1100px]:gap-y-10">
          {/* BRAND */}
          <div className="col-span-2 min-[640px]:col-span-4 min-[1100px]:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-gradient-to-br from-[#FF5A00] to-[#FF8A3D] shadow-[0_8px_22px_rgba(255,90,0,0.35)]">
                <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display text-[clamp(19px,5vw,22px)] font-bold text-white">
                carQconnect
              </span>
            </Link>

            <p className="mt-3 mb-4 max-w-[290px] text-[13.5px] leading-[1.6] text-[#A8ACBA] min-[640px]:mt-4 min-[640px]:mb-5 min-[640px]:text-[14.5px]">
              One connected ecosystem for your vehicle&apos;s safety, tracking and everyday journeys.
            </p>

            <div className="flex flex-wrap items-center gap-[10px]">
              <a
                href="#"
                className="flex shrink-0 items-center gap-2 rounded-[10px] border border-[#3A3D4C] bg-black px-3 py-2 transition-colors hover:border-[#FF5A00]"
              >
                <img src="/apple.svg" alt="" width={20} height={20} className="h-5 w-5" />
                <div className="flex flex-col items-start whitespace-nowrap">
                  <span className="text-[9px] leading-tight text-white/70">Download on the</span>
                  <span className="text-[11px] font-semibold leading-tight text-white min-[640px]:text-[12px]">
                    App Store
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="flex shrink-0 items-center gap-2 rounded-[10px] border border-[#3A3D4C] bg-black px-3 py-2 transition-colors hover:border-[#FF5A00]"
              >
                <img src="/google-play.svg" alt="" width={22} height={22} className="h-[20px] w-[20px] min-[640px]:h-[22px] min-[640px]:w-[22px]" />
                <div className="flex flex-col items-start whitespace-nowrap">
                  <span className="text-[9px] leading-tight text-white/70">GET IT ON</span>
                  <span className="text-[11px] font-semibold leading-tight text-white min-[640px]:text-[12px]">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          {footerColumns.map((col) => (
            <div key={col.title} className="min-w-0">
              <h4 className="mb-2 flex items-center gap-2.5 text-[clamp(10px,2vw,12px)] font-bold uppercase tracking-[0.16em] text-white before:block before:h-[2px] before:w-[14px] before:shrink-0 before:bg-[#FF5A00] before:content-[''] min-[640px]:mb-3 min-[1100px]:mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-0 min-[1100px]:gap-[8px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex min-h-[34px] items-center whitespace-normal py-1 text-[13.5px] text-[#A8ACBA] transition-all duration-200 hover:translate-x-1 hover:text-white min-[640px]:min-h-[36px] min-[640px]:text-[14.5px] min-[1100px]:min-h-[40px] min-[1100px]:py-0"
                    >
                      {link.label}{" "}
                      <span className="ml-0 text-base leading-none text-[#FF5A00] opacity-0 transition-all duration-200 group-hover:ml-1 group-hover:opacity-100">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COPYRIGHT BAR */}
        <div
          id="footer-copy-bar"
          className="relative z-10 mt-6 flex items-center justify-between gap-4 border-t border-[#262935] py-[10px] max-[639px]:pr-[64px] min-[640px]:mt-8 min-[640px]:py-[12px]"
        >
          <p className="flex flex-col gap-[2px] text-[12.5px] text-[#7B7F90] min-[640px]:text-[13px]">
            <span>&copy; 2026 carQconnect.</span>
            <span>All rights reserved.</span>
          </p>
          <a
            href="#"
            onClick={scrollToTop}
            className="group flex min-h-[44px] items-center gap-1.5 text-[12.5px] font-semibold text-[#A8ACBA] transition-colors hover:text-[#FF5A00] min-[640px]:text-[13px]"
          >
            Back to top{" "}
            <ArrowUp
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>

      {/*
        WATERMARK SVG — Root cause of mobile invisibility was TWO issues:
        1. <footer> had overflow-hidden which clipped the SVG bottom at small heights.
        2. The watermark wrapper had no bottom padding, so the SVG baseline sat flush
           against the page end and was partially cut by the browser chrome / WhatsApp button.
        Fix: removed overflow-hidden from <footer>, added pb-[clamp(16px,4vw,32px)] on the
        wrapper, and added overflow:visible on the SVG itself.
      */}
      <div
        aria-hidden="true"
        className="container-page pointer-events-none relative z-0 select-none pt-1 pb-[clamp(16px,4vw,32px)]"
      >
        <svg
          viewBox="0 0 1000 150"
          preserveAspectRatio="xMidYMax meet"
          className="block h-auto w-full font-display"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="cq-watermark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.10" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="128"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#cq-watermark)"
            style={{ fontSize: 170, fontWeight: 700 }}
          >
            carQconnect
          </text>
        </svg>
      </div>
    </footer>
  );
}