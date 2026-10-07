import type { Metadata } from "next";
import Link from "next/link";
import { QrCode, MapPin, Route, Headset, CheckCircle2, Zap, Crown, Lock, Smartphone, ArrowRightLeft } from "lucide-react";
import { membershipPlans } from "@/lib/data/membershipPlans";

export const metadata: Metadata = {
  title: "Membership",
  description: "View carQconnect membership plans to unlock advanced vehicle features.",
};

export default function MembershipPage() {
  return (
    <div className="font-display text-white bg-[#0b0b0f] min-h-[100svh]">
      
      {/* 1. HERO SECTION */}
      <section 
        className="pt-[140px] pb-[80px] px-6 relative"
        style={{ background: 'radial-gradient(60% 120% at 90% 0%, rgba(255,106,0,.28) 0%, rgba(255,106,0,0) 62%), linear-gradient(180deg, #fff1e3 0%, #f7f9fc 100%)' }}
      >
        <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[32px] h-[2px] bg-[#ff5a00]" />
            <span className="text-[12px] font-[800] uppercase tracking-[0.16em] text-[#ff5a00]">MEMBERSHIP</span>
            <div className="w-[32px] h-[2px] bg-[#ff5a00]" />
          </div>
          
          <h1 className="text-[clamp(34px,5vw,54px)] font-[800] leading-[1.08] tracking-tight text-[#0f1220] max-w-[800px] mb-6">
            Membership that grows with <span className="text-[#ff5a00]">your drive.</span>
          </h1>
          
          <p className="text-[17px] text-[#454c60] max-w-[560px] leading-relaxed mb-10 font-medium">
            Membership unlocks features across QR safety, GPS, trip intelligence and support. View plans and manage yours in the carQconnect app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/#download" 
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center rounded-[12px] bg-[#ff5a00] px-8 text-[15px] font-[800] text-white shadow-[0_4px_14px_rgba(255,90,0,0.3)] hover:bg-[#ff7226] transition-all"
            >
              View Plans
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center rounded-[12px] border border-[#eceef4] bg-white px-8 text-[15px] font-[800] text-[#111218] hover:border-[#ff5a00] hover:text-[#ff5a00] transition-all"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PLAN CARDS SECTION (MOVED UP) */}
      <section className="pt-[20px] pb-[20px] px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff5a00] opacity-[0.12] blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-[1140px] mx-auto relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[32px] h-[1px] bg-[#ff5a00]" />
            <span className="text-[11px] font-[800] uppercase tracking-[0.2em] text-[#ff5a00]">PLANS</span>
            <div className="w-[32px] h-[1px] bg-[#ff5a00]" />
          </div>
          
          <h2 className="text-[clamp(32px,4vw,42px)] font-[800] tracking-tight mb-2 text-white text-center">
            Choose your plan
          </h2>
          <p className="text-[#a3a7b7] text-[16px] text-center max-w-[500px] mb-8 leading-relaxed font-medium">
            Start with essential safety, upgrade whenever you need tracking and smarter trips.
          </p>

          <div className="flex items-center bg-[#13141a] rounded-full p-1.5 border border-[#2a2c36] mb-8 shadow-sm">
            <button className="bg-white text-[#111218] px-6 py-2 rounded-full text-[14px] font-[800] flex items-center gap-2">
              Yearly <span className="bg-[#ff5a00] text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-[800]">Save up to 37%</span>
            </button>
            <button className="text-[#a3a7b7] px-6 py-2 rounded-full text-[14px] font-[800] hover:text-white transition-colors">
              Monthly
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
            {membershipPlans.map((plan) => {
              const isPopular = plan.isPopular;
              return (
                <div 
                  key={plan.id}
                  className={`relative flex flex-col bg-[#111218] rounded-[24px] p-[24px_20px] transition-all duration-300 hover:-translate-y-2 hover:border-[#ff5a00]/50 hover:shadow-[0_8px_40px_rgba(255,90,0,0.12)] ${
                    isPopular 
                      ? "border border-[#ff5a00] shadow-[0_0_40px_rgba(255,90,0,0.15)] z-10" 
                      : "border border-[#2a2c36]"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff5a00] text-white text-[10px] font-[800] uppercase tracking-[0.1em] px-3 py-1 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-2 mt-1">
                    <div className="w-[24px] h-[24px] rounded-full bg-[#2a1308] flex items-center justify-center border border-[#ff5a00]/30">
                      {plan.id === 'basic' && <div className="w-[6px] h-[6px] rounded-full bg-[#ff5a00]" />}
                      {plan.id === 'plus' && <Zap className="w-[12px] h-[12px] text-[#ff5a00]" fill="currentColor" />}
                      {plan.id === 'pro' && <Crown className="w-[12px] h-[12px] text-[#ff5a00]" fill="currentColor" />}
                    </div>
                    <h3 className="text-[18px] font-[800] text-white">{plan.name}</h3>
                  </div>
                  
                  <p className="text-[13px] text-[#a3a7b7] mb-4 min-h-[38px] leading-snug">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline gap-1 mb-0.5">
                    <span className="text-[32px] font-[800] text-white tracking-tight">₹{plan.monthlyPrice}</span>
                    <span className="text-[13px] font-medium text-[#a3a7b7]">/ month</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-[12px] font-medium">
                    <span className="text-[#8a8ea0]">{plan.billedYearly}</span>
                    <span className="text-[#1fa463] font-bold">{plan.savings}</span>
                  </div>
                  
                  <Link 
                    href="/#download"
                    className={`inline-flex min-h-[40px] w-full items-center justify-center rounded-[10px] text-[13px] font-[800] transition-all mb-5 ${
                      isPopular 
                        ? "bg-[#ff5a00] text-white hover:bg-[#ff7226] shadow-[0_6px_16px_rgba(255,90,0,0.3)]" 
                        : "bg-transparent border border-[#3a3d4a] text-white hover:border-[#ff5a00] hover:text-[#ff5a00]"
                    }`}
                  >
                    Get {plan.name}
                  </Link>

                  <div className="w-full h-[1px] bg-[#2a2c36] mb-4" />
                  
                  <div className="text-[10px] font-[800] tracking-[0.1em] text-[#8a8ea0] uppercase mb-3">
                    What's included
                  </div>

                  <div className="flex flex-col gap-3 flex-grow">
                    {plan.entitlements.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <div className="w-[16px] h-[16px] rounded-full bg-[#ff5a00] flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-[10px] h-[10px] text-white" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-[16px] h-[16px] rounded-full bg-[#1c1d24] border border-[#2a2c36] flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-[6px] h-[2px] bg-[#454c60]" />
                          </div>
                        )}
                        <div className="flex flex-col -mt-0.5">
                          <span className={`text-[13px] font-[800] leading-tight ${feature.included ? 'text-white' : 'text-[#5b6070]'}`}>
                            {feature.name}
                          </span>
                          <span className={`text-[12px] font-medium leading-snug mt-0.5 ${feature.included ? 'text-[#a3a7b7]' : 'text-[#454c60]'}`}>
                            {feature.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-[#a3a7b7]">
              <Lock className="w-[14px] h-[14px] text-[#ffb042]" /> Secure payments
            </div>
            <div className="flex items-center gap-2 text-[13px] font-semibold text-[#a3a7b7]">
              <Smartphone className="w-[14px] h-[14px] text-[#4287ff]" /> Manage in the app
            </div>
            <div className="flex items-center gap-2 text-[13px] font-semibold text-[#a3a7b7]">
              <ArrowRightLeft className="w-[14px] h-[14px] text-[#4287ff]" /> Upgrade or downgrade anytime
            </div>
          </div>
          
          <p className="text-center text-[#5b6070] text-[12px] font-medium max-w-[600px]">
            Prices are inclusive of applicable taxes where relevant. Final pricing is shown in the app.
          </p>
        </div>
      </section>

      {/* 3. HOW IT WORKS (MOVED DOWN) */}
      <section className="pt-[60px] pb-[60px] px-6 relative bg-[#f7f9fc]">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-[32px] font-[800] tracking-tight mb-8 text-center text-[#111218]">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", text: "View plans in the app" },
              { num: "02", text: "Compare benefits" },
              { num: "03", text: "Purchase or renew in the app" },
            ].map((step) => (
              <div key={step.num} className="bg-gradient-to-br from-white to-[#fff2e8] rounded-[24px] p-[30px] border border-[#ffe4d1] shadow-[0_4px_20px_rgba(255,90,0,0.03)] flex flex-col justify-between min-h-[140px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(255,90,0,0.1)] hover:border-[#ff5a00]/30">
                <div className="w-[44px] h-[44px] rounded-full bg-[#ff5a00] text-white flex items-center justify-center text-[16px] font-[800] mb-4 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-[18px] font-[800] text-[#111218]">{step.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHERE MEMBERSHIP APPLIES */}
      <section className="py-[60px] px-6 relative">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,36px)] font-[800] tracking-tight mb-3 text-center text-white">Where membership applies</h2>
          <p className="text-[#a3a7b7] text-[16px] text-center mb-10 font-medium">One membership, four areas of your connected drive.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                icon: QrCode, 
                title: "QR Safety", 
                desc: "Safety features for your vehicle's QR.", 
                bullets: ["Masked owner calls", "Privacy controls", "Scan activity"],
                tag: "ALL PLANS",
                isActive: true
              },
              { 
                icon: MapPin, 
                title: "GPS", 
                desc: "Tracking features for your connected device.", 
                bullets: ["Live location", "Geofence alerts", "Trip history"],
                tag: "PLUS & PRO",
                isActive: false
              },
              { 
                icon: Route, 
                title: "Trip Intelligence", 
                desc: "Smarter trip planning and estimates.", 
                bullets: ["Fuel & toll estimates", "Route options", "Stops & stays"],
                tag: "PLUS & PRO",
                isActive: false
              },
              { 
                icon: Headset, 
                title: "Support", 
                desc: "Help when you need it.", 
                bullets: ["AI chat help", "Human escalation", "Priority queue"],
                tag: "PRIORITY ON PRO",
                isActive: false
              },
            ].map((item) => (
              <div 
                key={item.title} 
                className={`relative bg-[#13141a] rounded-[24px] p-7 border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#ff5a00]/40 hover:shadow-[0_8px_30px_rgba(255,90,0,0.08)] ${item.isActive ? 'border-[#ff5a00]/30 shadow-[0_4px_30px_rgba(255,90,0,0.06)]' : 'border-[#2a2c36]'}`}
              >
                {item.isActive && (
                  <div className="absolute top-0 left-8 w-[32px] h-[3px] bg-[#ff5a00] rounded-b-full" />
                )}
                
                <div className="w-[42px] h-[42px] rounded-[12px] bg-[#2a1308] border border-[#ff5a00]/20 flex items-center justify-center mb-5 mt-1">
                  <item.icon className="w-[20px] h-[20px] text-[#ff5a00]" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[18px] font-[800] text-white mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#a3a7b7] mb-6 leading-relaxed min-h-[42px]">{item.desc}</p>
                
                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#ff5a00] shrink-0" />
                      <span className="text-[14px] font-medium text-white">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <span className="inline-flex bg-[#2a1308] border border-[#ff5a00]/20 text-[#ff5a00] text-[11px] font-[800] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MANAGE IT IN THE APP */}
      <section className="py-[80px] bg-[#fff2e8] border-t border-[#ffe4d1] px-6 text-[#111218]">
        <div className="max-w-[1240px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-[clamp(28px,4vw,36px)] font-[800] tracking-tight mb-8">Manage it in the app</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-4">
            {[
              "Renew your membership",
              "Upgrade or downgrade your plan",
              "See your transaction history"
            ].map(point => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="w-[20px] h-[20px] text-[#ff5a00]" />
                <span className="text-[16px] font-medium text-[#454c60]">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

