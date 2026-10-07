"use client";

import { useState } from "react";
import { Search, Mic } from "lucide-react";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { faqs, FaqCategory } from "@/lib/data/faqs";

const CATEGORIES: { id: FaqCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "start", label: "Getting started" },
  { id: "qr", label: "QR Safety" },
  { id: "safety", label: "SOS and safety" },
  { id: "gps", label: "GPS tracking" },
  { id: "trip", label: "Trip Planner" },
  { id: "ai", label: "AI assistant" },
  { id: "util", label: "Vehicle utilities" },
  { id: "priv", label: "Privacy" },
];

export default function FaqClient() {
  const [activeCat, setActiveCat] = useState<FaqCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = activeCat === "all" || faq.category === activeCat;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#f7f9fc] min-h-[100svh] font-display text-[#0f1220]">
      {/* HEADER HERO */}
      <section 
        className="relative pt-[120px] pb-[32px] overflow-hidden border-b border-[#e1e6ee]"
        style={{ background: 'radial-gradient(60% 120% at 90% 0%, rgba(255,106,0,.28) 0%, rgba(255,106,0,0) 62%), linear-gradient(180deg, #fff1e3 0%, #f7f9fc 100%)' }}
      >
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 flex flex-col items-start text-left">
          
          <h1 className="text-[clamp(34px,5vw,56px)] font-[800] leading-[1.06] tracking-[-0.025em] text-[#0f1220] max-w-[800px] mb-[12px]">
            Frequently asked <span className="text-[#ff6a00]">questions.</span>
          </h1>
          
          <p className="text-[16px] text-[#454c60] max-w-[560px] leading-[1.6]">
            Quick answers about QR safety, GPS tracking, hardware and the carQconnect app.
          </p>

          <div className="relative mt-[24px] w-full max-w-[560px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-[20px] w-[20px] text-[#a4abb8]" />
            </div>
            <input
              type="text"
              placeholder="Search questions"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[48px] pl-[44px] pr-4 rounded-[12px] border border-[#e1e6ee] bg-white text-[15px] text-[#0f1220] placeholder:text-[#a4abb8] focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mt-[20px]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCat(cat.id)}
                  aria-pressed={isActive}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:ring-offset-2 border ${
                    isActive
                      ? "bg-[#ff6a00] font-semibold text-[#1a0b00] border-[#ff6a00]"
                      : "border-[#e1e6ee] bg-white font-medium text-[#0f1220] hover:border-[#ff6a00] hover:text-[#ff6a00]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* FAQ LIST */}
      <section className="py-[64px]">
        <div className="max-w-[1120px] mx-auto px-6">
          {filteredFaqs.length > 0 ? (
            <FaqAccordion items={filteredFaqs} />
          ) : (
            <div className="text-center py-12">
              <p className="text-[16px] text-[#5b6478]">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CLOSING BAND */}
      <section id="download" className="py-[48px]" style={{ background: 'linear-gradient(110deg, #ff6a00, #ff8a2b)' }}>
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[40px] items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-block rounded-full bg-[#12141c]/14 px-[14px] py-[7px] text-[12px] font-[800] tracking-[0.12em] text-[#1a0b00] uppercase mb-4">
              AI ASSISTANT
            </div>
            <h2 className="text-[clamp(26px,3.2vw,36px)] font-[800] tracking-tight text-[#1a0b00] mb-4">
              Still have questions? Our AI assistant can help.
            </h2>
            <p className="text-[15px] text-[#3d1d00] max-w-[520px] mb-8 leading-[1.6]">
              Install the app and chat or speak to the assistant for instant answers. If it cannot solve something, a support executive takes over with your full conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#download" className="inline-flex min-h-[48px] items-center justify-center rounded-[12px] bg-[#12141c] px-6 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,.25)] hover:bg-black transition-colors">
                Download App
              </a>
              <a href="/support" className="inline-flex min-h-[48px] items-center justify-center rounded-[12px] bg-white px-6 text-[15px] font-bold text-[#0f1220] shadow-[0_10px_24px_rgba(0,0,0,.1)] hover:bg-gray-50 transition-colors">
                Contact support
              </a>
            </div>
          </div>

          {/* Right Column: Chat Mockup */}
          <div className="w-full max-w-[420px] ml-auto bg-white rounded-[22px] p-[18px] shadow-[0_24px_50px_rgba(120,40,0,.28)] flex flex-col gap-4 aria-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 pb-3 border-b border-[#e1e6ee]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#1fa463]" />
              <span className="text-[13px] font-bold text-[#0f1220]">carQconnect assistant</span>
            </div>
            
            {/* Messages */}
            <div className="flex flex-col gap-4">
              {/* User message */}
              <div className="self-end max-w-[85%] bg-[#12141c] text-white text-[13.5px] px-4 py-3 rounded-[14px] rounded-br-[4px] shadow-sm leading-relaxed">
                Plan a trip from Indore to Udaipur for tomorrow.
              </div>
              
              {/* Assistant message */}
              <div className="self-start max-w-[85%] bg-[#fff1e6] text-[#0f1220] text-[13.5px] px-4 py-3 rounded-[14px] rounded-bl-[4px] shadow-sm leading-relaxed">
                Sure. I will check distance, fuel and toll. Which vehicle should I use?
              </div>
            </div>

            {/* Input row */}
            <div className="mt-2 flex items-center justify-between h-[44px] rounded-[12px] border border-[#e1e6ee] bg-[#f7f9fc] px-4">
              <span className="text-[#a4abb8] text-[13.5px]">Type or speak your question</span>
              <Mic className="w-[18px] h-[18px] text-[#c2410c]" strokeWidth={2.5} />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

