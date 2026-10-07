import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Bot, Headset, BookOpen, QrCode, Package, MapPin, Route, Ticket, Settings, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help from carQconnect's AI assistant, with human escalation when you need it.",
};

export default function SupportPage() {
  return (
    <div className="bg-[#f7f9fc] min-h-[100svh] font-display text-[#0f1220]">
      <PageHeader
        eyebrow="Support"
        title={
          <>
            Need help? <span className="text-[#ff6a00]">carQconnect is here.</span>
          </>
        }
        description="Start with the AI assistant. If it can't resolve things, you're handed to a human without repeating yourself."
      />

      {/* THREE WAYS TO GET HELP */}
      <section className="py-[80px]">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[64px] items-center">
          
          <div>
            <div className="flex items-center gap-4 mb-[16px]">
              <div className="w-[28px] h-[2px] bg-[#ff6a00]" />
              <span className="text-[12px] font-[800] uppercase tracking-[0.16em] text-[#c2410c]">HOW SUPPORT WORKS</span>
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-[800] tracking-tight text-[#0f1220] mb-[40px] leading-[1.1]">
              Three ways to get help
            </h2>

            <div className="flex flex-col gap-[32px]">
              {[
                { icon: Bot, title: "Ask the AI assistant", desc: "Fastest for FAQs and basic troubleshooting. Track your orders in the carQconnect app." },
                { icon: Headset, title: "Talk to a human", desc: "Escalate anytime. Your context carries over automatically." },
                { icon: BookOpen, title: "Browse help guides", desc: "Step-by-step guides for setup, activation and common issues." }
              ].map(item => (
                <div key={item.title} className="flex gap-5 items-start">
                  <div className="w-[48px] h-[48px] rounded-[14px] bg-[#fff1e6] flex items-center justify-center shrink-0">
                    <item.icon className="w-[24px] h-[24px] text-[#ff6a00]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0f1220] mb-1">{item.title}</h3>
                    <p className="text-[15px] text-[#5b6478] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/contact" className="mt-[48px] inline-flex min-h-[48px] items-center justify-center rounded-[12px] bg-[#ff6a00] px-8 text-[15px] font-bold text-[#1a0b00] shadow-[0_8px_20px_rgba(255,106,0,0.25)] hover:bg-[#ff7b1a] transition-colors">
              Contact Us
            </a>
          </div>

          {/* Chat Mockup */}
          <div className="bg-[#12141c] rounded-[24px] p-[24px] shadow-[0_24px_50px_rgba(0,0,0,0.15)] w-full">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="text-[#ff6a00]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/></svg>
                </div>
                <span className="text-[14px] font-bold text-white">carQconnect Assistant</span>
              </div>
              <div className="bg-white/10 text-white/70 text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                Sample
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="self-end bg-[#20232f] text-[#e6e8f0] text-[14px] px-4 py-3.5 rounded-[14px] rounded-br-[4px] max-w-[85%] leading-relaxed shadow-sm">
                Kal Indore se Udaipur jaana hai, toll kam rakhna hai.
              </div>
              
              <div className="self-start border border-[#ff6a00]/30 bg-[#2a170b] text-[#f7d8c6] text-[14px] px-4 py-3.5 rounded-[14px] rounded-bl-[4px] max-w-[95%] leading-relaxed shadow-sm">
                I found 3 route options. The economical route reduces estimated toll cost while adding approximately 35 minutes.
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Route", val: "Economical" },
                  { label: "Fuel (est.)", val: "~41 L" },
                  { label: "Toll (est.)", val: "â‚¹680" }
                ].map(stat => (
                  <div key={stat.label} className="bg-[#20232f] rounded-[12px] p-3 flex flex-col justify-center">
                    <span className="text-[12px] text-[#9aa0b2] mb-1">{stat.label}</span>
                    <span className="text-[14px] font-bold text-white">{stat.val}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {["Plan my trip", "Find a hotel", "Lowest toll route", "Track my vehicle", "Where did I park?", "Contact support"].map(chip => (
                  <div key={chip} className="px-3.5 py-2 rounded-full border border-white/15 text-[13px] text-white/80 hover:bg-white/5 transition-colors cursor-default">
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ASK THE ASSISTANT ABOUT */}
      <section className="py-[80px] bg-[#eaeff6]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-[16px]">
            <div className="w-[28px] h-[2px] bg-[#ff6a00]" />
            <span className="text-[12px] font-[800] uppercase tracking-[0.16em] text-[#c2410c]">WHAT WE HELP WITH</span>
          </div>
          <h2 className="text-[clamp(32px,4vw,44px)] font-[800] tracking-tight text-[#0f1220] mb-[40px] leading-[1.1]">
            Ask the assistant about
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
            {[
              { icon: QrCode, title: "QR activation", desc: "Activate your QR and link it to your vehicle." },
              { icon: Package, title: "Hardware setup", desc: "Set up and link your QR tag or GPS tracker." },
              { icon: MapPin, title: "Vehicle and GPS", desc: "Check your vehicle and device status." },
              { icon: Route, title: "Trip planning", desc: "Plan a route and see fuel and toll estimates." },
              { icon: Ticket, title: "Orders and membership", desc: "Order status and basic membership questions." },
              { icon: Settings, title: "Troubleshooting", desc: "Step-by-step help based on approved guides." }
            ].map(card => (
              <div key={card.title} className="bg-white rounded-[24px] p-[24px] border border-[#e1e6ee] hover:border-[#ff6a00]/30 transition-colors">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#fff1e6] flex items-center justify-center mb-5">
                  <card.icon className="w-[22px] h-[22px] text-[#ff6a00]" strokeWidth={2} />
                </div>
                <h3 className="text-[18px] font-bold text-[#0f1220] mb-2">{card.title}</h3>
                <p className="text-[15px] text-[#5b6478] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-[32px] flex items-start gap-3 max-w-[800px]">
            <ShieldCheck className="w-[20px] h-[20px] text-[#c2410c] shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-[14.5px] text-[#454c60] leading-relaxed">
              The assistant uses your real account and approved product information. It never guesses order, payment or device status, and it asks you to confirm before payments or account changes.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN A HUMAN STEPS IN */}
      <section className="py-[80px] bg-[#12141c]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-[16px]">
            <div className="w-[28px] h-[2px] bg-[#ff6a00]" />
            <span className="text-[12px] font-[800] uppercase tracking-[0.16em] text-[#ff8a3d]">HUMAN SUPPORT</span>
          </div>
          <h2 className="text-[clamp(32px,4vw,44px)] font-[800] tracking-tight text-white mb-[48px] leading-[1.1]">
            When a human steps in
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {[
              { step: "1", title: "The assistant cannot resolve it", desc: "It tells you clearly that a support executive is being connected." },
              { step: "2", title: "A ticket is created", desc: "Your issue and the conversation are saved, with the reason for escalation." },
              { step: "3", title: "An executive picks it up", desc: "They see your original issue, so you never repeat yourself." }
            ].map(card => (
              <div key={card.step} className="bg-[#1a1d27] rounded-[24px] p-[28px] border border-white/5">
                <div className="w-[40px] h-[40px] rounded-[10px] bg-[#ff6a00] flex items-center justify-center text-[16px] font-bold text-[#1a0b00] mb-6">
                  {card.step}
                </div>
                <h3 className="text-[18px] font-bold text-white mb-2">{card.title}</h3>
                <p className="text-[14.5px] text-[#9aa0b2] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-[32px] text-[14.5px] text-[#9aa0b2]">
            Updates on your ticket reach you as notifications in the app.
          </p>
        </div>
      </section>



      {/* FINAL CTA BAND */}
      <section id="download" className="py-[48px]" style={{ background: 'linear-gradient(110deg, #ff6a00, #ff8a2b)' }}>
        <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-[32px] md:text-[40px] font-[800] tracking-tight text-[#1a0b00] mb-[4px]">
              Get help in the app.
            </h2>
            <p className="text-[17px] text-[#3d1d00] max-w-[500px]">
              Chat or speak to the assistant any time. Download the app to get started.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a href="#download" className="inline-flex min-h-[48px] items-center justify-center rounded-[12px] bg-[#12141c] px-8 text-[16px] font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,.25)] hover:bg-black transition-colors">
              Download App
            </a>
            <a href="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-[12px] bg-white px-8 text-[16px] font-bold text-[#0f1220] shadow-[0_10px_24px_rgba(0,0,0,.1)] hover:bg-gray-50 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}



