"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LegalSection } from "@/lib/data/legal/privacy";
import { ChevronDown } from "lucide-react";

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
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    setActiveSection(data.sections[0]?.id || "");

    let rafId: number;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        let currentActive = data.sections[0]?.id || "";
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
        
        if (isAtBottom && data.sections.length > 0) {
          currentActive = data.sections[data.sections.length - 1].id;
        } else {
          for (const s of data.sections) {
            const el = document.getElementById(s.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 120) {
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

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      history.replaceState(null, "", `#${id}`);
      setTocOpen(false);
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

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-[80px] md:pt-[100px]">
        
        
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
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#ff5a00]">LEGAL</span>
          </div>
          <h1 className="text-[clamp(34px,5vw,52px)] font-[800] leading-[1.1] tracking-tight text-[#12131a] mb-4">
            {data.title}
          </h1>
          <p className="text-[16px] text-[#5b6070] max-w-[640px] leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 items-start">
          
          {/* Mobile TOC Toggle */}
          <div className="block lg:hidden w-full bg-[#f7f8fc] rounded-[16px] border border-[#eceef4] overflow-hidden">
            <button 
              onClick={() => setTocOpen(!tocOpen)} 
              className="flex items-center justify-between w-full p-4 text-[#12131a] font-bold text-[15px]"
            >
              <span>On this page</span>
              <ChevronDown className={`w-[20px] h-[20px] transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
            </button>
            {tocOpen && (
              <div className="px-4 pb-4 flex flex-col gap-3">
                {data.sections.map((s) => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`} 
                    onClick={(e) => handleTocClick(e, s.id)}
                    className={`text-[14px] ${activeSection === s.id ? 'text-[#ff5a00] font-bold' : 'text-[#5b6070]'}`}
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Sticky TOC */}
          <aside className="hidden lg:flex sticky top-28 self-start flex-col gap-4 max-h-[calc(100svh-8rem)] overflow-y-auto pr-4 pb-4">
            {data.sections.map((s) => {
              const isActive = activeSection === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => handleTocClick(e, s.id)}
                  className={`text-[14px] pl-4 border-l-2 transition-colors duration-200 ${
                    isActive 
                      ? 'border-[#ff5a00] text-[#ff5a00] font-semibold' 
                      : 'border-transparent text-[#5b6070] hover:text-[#12131a]'
                  }`}
                >
                  {s.title}
                </a>
              );
            })}
          </aside>

          {/* Content Column */}
          <div className="w-full max-w-[900px] flex flex-col gap-10">
            {data.sections.map((s, index) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                {index !== 0 && <hr className="border-t border-[#eceef4] mb-10" />}
                <h2 className="text-[22px] font-[800] text-[#12131a] mb-4">
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

