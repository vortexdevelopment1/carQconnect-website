"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LegalSection } from "@/lib/data/legal/privacy";

type LegalTemplateProps = {
  data: {
    title: string;
    intro: string;
    sections: LegalSection[];
  };
  currentSlug: "privacy" | "terms" | "refund";
};

const TABS = [
  { label: "Privacy Policy", slug: "privacy" },
  { label: "Terms of Service", slug: "terms" },
  { label: "Refund Policy", slug: "refund" },
];

export default function LegalClient({ data, currentSlug }: LegalTemplateProps) {
  const [activeSection, setActiveSection] = useState(data.sections[0]?.id || "");
  const mobileBarRef = useRef<HTMLDivElement>(null);
  const activeChipRef = useRef<HTMLAnchorElement>(null);
  const activeDesktopLinkRef = useRef<HTMLAnchorElement>(null);
  const desktopSidebarRef = useRef<HTMLElement>(null);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    setActiveSection(data.sections[0]?.id || "");

    let rafId: number;
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        let currentActive = data.sections[0]?.id || "";
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 30;

        if (isAtBottom && data.sections.length > 0) {
          currentActive = data.sections[data.sections.length - 1].id;
        } else {
          const offsetThreshold = window.innerWidth >= 1024 ? 140 : 180;
          for (const s of data.sections) {
            const el = document.getElementById(s.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= offsetThreshold) {
                currentActive = s.id;
              }
            }
          }
        }
        setActiveSection(currentActive);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [data.sections]);

  // Auto-scroll the active chip into view horizontally inside the mobile bar
  useEffect(() => {
    if (activeChipRef.current && window.innerWidth < 1024) {
      activeChipRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSection]);

  // Auto-scroll the active item into view inside the desktop sidebar if it scrolls outside
  useEffect(() => {
    if (activeDesktopLinkRef.current && desktopSidebarRef.current && window.innerWidth >= 1024) {
      const container = desktopSidebarRef.current;
      const el = activeDesktopLinkRef.current;
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      if (elRect.top < containerRect.top || elRect.bottom > containerRect.bottom) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [activeSection]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      isClickScrolling.current = true;
      setActiveSection(id);
      history.replaceState(null, "", `#${id}`);
      el.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    }
  };

  return (
    <div className="relative min-h-[100svh] bg-white font-display pb-32">
      {/* Soft orange glow isolated in its own overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-40 bg-[#ff5a00]/20"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container-page pt-[90px] md:pt-[110px]">
        
        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#eceef4]">
          {TABS.map((tab) => {
            const isActive = tab.slug === currentSlug;
            return (
              <Link 
                key={tab.slug} 
                href={`/legal/${tab.slug}`}
                className={`px-4 py-2 rounded-full text-[14px] font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#ff5a00] text-white' 
                    : 'bg-[#f7f8fc] text-[#5b6070] hover:bg-[#eceef4] hover:text-[#12131a]'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[32px] h-[2px] bg-[#ff5a00]" />
            <span className="text-[clamp(9.5px,2vw,12px)] font-bold uppercase tracking-[0.16em] text-[#ff5a00]">LEGAL</span>
          </div>
          <h1 className="font-[800] text-[#12131a] mb-4">
            {data.title}
          </h1>
          <p className="text-[16px] text-[#5b6070] max-w-[640px] leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* MOBILE STICKY HORIZONTAL BAR (below 1024px) */}
        <div 
          ref={mobileBarRef}
          style={{ position: "-webkit-sticky" as any }}
          className="block lg:hidden sticky top-[64px] z-30 bg-white border-b border-[#eceef4] -mx-[clamp(16px,4vw,24px)] px-[clamp(16px,4vw,24px)] mb-8 shadow-sm"
        >
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-3 no-scrollbar scroll-smooth">
            {data.sections.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <a
                  key={s.id}
                  ref={isActive ? activeChipRef : null}
                  href={`#${s.id}`}
                  onClick={(e) => handleTocClick(e, s.id)}
                  className={`inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-full text-[14px] font-medium transition-all shrink-0 ${
                    isActive
                      ? "bg-[#ff5a00]/10 text-[#ff5a00] border border-[#ff5a00] font-semibold"
                      : "bg-[#f7f8fc] text-[#5b6070] border border-transparent hover:bg-[#eceef4] hover:text-[#12131a]"
                  }`}
                >
                  {s.title}
                </a>
              );
            })}
          </div>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">
          
          {/* Desktop Sticky Sidebar (1024px and above) */}
          <aside 
            ref={desktopSidebarRef}
            style={{ 
              position: "-webkit-sticky" as any,
              top: "96px",
              maxHeight: "calc(100vh - 120px)",
              alignSelf: "flex-start",
            }}
            className="hidden lg:flex sticky self-start flex-col gap-2 overflow-y-auto pr-4 pb-6 overscroll-contain no-scrollbar"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9398a7] px-4 mb-2">
              Table of Contents
            </span>
            {data.sections.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <a
                  key={s.id}
                  ref={isActive ? activeDesktopLinkRef : null}
                  href={`#${s.id}`}
                  onClick={(e) => handleTocClick(e, s.id)}
                  className={`text-[14px] pl-4 py-1.5 border-l-2 leading-snug transition-colors duration-200 ${
                    isActive 
                      ? 'border-[#ff5a00] text-[#ff5a00] font-bold' 
                      : 'border-transparent text-[#5b6070] hover:text-[#12131a]'
                  }`}
                >
                  {s.title}
                </a>
              );
            })}
          </aside>

          {/* Content Column */}
          <div className="w-full flex flex-col gap-10 min-w-0">
            {data.sections.map((s, index) => (
              <div 
                key={s.id} 
                id={s.id} 
                className="scroll-mt-[135px] lg:scroll-mt-[110px]"
              >
                {index !== 0 && <hr className="border-t border-[#eceef4] mb-10" />}
                <h2 className="text-[20px] md:text-[22px] font-[700] text-[#12131a] mb-3 leading-snug">
                  {s.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {s.body && s.body.map((p, i) => (
                    <p key={i} className="text-[16px] text-[#5b6070] leading-[1.75]">
                      {p.includes("Support page") ? (
                        <>
                          {p.split("Support page")[0]}
                          <Link href="/support#contact" className="text-[#ff5a00] underline hover:text-[#ff7226]">Support page</Link>
                          {p.split("Support page")[1]}
                        </>
                      ) : (
                        p
                      )}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="flex flex-col gap-3 mt-2">
                      {s.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] shrink-0 mt-[10px]" />
                          <span className="text-[16px] text-[#5b6070] leading-[1.75]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            {/* Note Card at Bottom */}
            <div className="mt-12 bg-[#f7f8fc] border border-[#eceef4] rounded-[16px] p-5">
              <p className="text-[15px] text-[#12131a]">
                Questions? Contact us from the <Link href="/support#contact" className="text-[#ff5a00] underline font-medium hover:text-[#ff7226]">Support page</Link>.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
