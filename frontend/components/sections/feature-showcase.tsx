"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "qr-safety",
    number: "01",
    label: "QR SAFETY TAG",
    tabLabel: "QR Safety",
    title: "A secure way to reach the vehicle owner.",
    description: "A scan opens a privacy-first mobile page. Call, message, report an issue or use the emergency action - without exposing the owner's phone number.",
    capabilities: [
      "No app required for the scanner",
      "Masked owner contact",
      "Parking and emergency reporting"
    ],
    buttonText: "Explore QR Safety",
    href: "/qr-safety",
  },
  {
    id: "gps",
    number: "02",
    label: "LIVE GPS",
    tabLabel: "Live GPS",
    title: "Know where your vehicle is, when it matters.",
    description: "Connect a compatible tracker for live location, last-seen status, trip history and geofence alerts. Clear status, not confusing dashboards.",
    capabilities: [
      "Live location and last seen",
      "Trip history and geofences",
      "Movement and device alerts"
    ],
    buttonText: "Explore GPS",
    href: "/gps",
  },
  {
    id: "hardware",
    number: "03",
    label: "HARDWARE",
    tabLabel: "Hardware",
    title: "The right hardware for every drive.",
    description: "Choose a QR tag or GPS tracker, with more compatible hardware to follow. Activate each device in the app and link it to your vehicle.",
    capabilities: [
      "QR tags and GPS tracking devices",
      "Activate in the app, linked to one vehicle",
      "Built for future compatible hardware"
    ],
    buttonText: "View hardware",
    href: "/marketplace",
  }
];

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      handleTabChange((activeIndex + 1) % features.length);
    }, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const handleTabChange = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setAnimating(false);
    }, 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIdx = (idx + 1) % features.length;
      buttonRefs.current[nextIdx]?.focus();
      handleTabChange(nextIdx);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIdx = (idx - 1 + features.length) % features.length;
      buttonRefs.current[prevIdx]?.focus();
      handleTabChange(prevIdx);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabChange(idx);
      setIsPaused(true);
    }
  };

  const activeFeature = features[activeIndex];

  return (
    <div 
      className="w-full flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .feature-card {
          display: grid;
          background: #1D1F26;
          border: 1px solid #2E3139;
          border-top: 2px solid #FF5A00;
          border-radius: 20px;
          padding: clamp(16px, 5vw, 28px);
          gap: clamp(14px, 4vw, 22px);
          min-height: 400px;
        }
        @media(min-width: 1025px) {
          .feature-card {
            grid-template-columns: 1.1fr 1fr;
            grid-template-areas: 
              "head visual"
              "body visual";
            align-items: center;
          }
        }
        @media(max-width: 1024px) {
          .feature-card {
            grid-template-columns: 1fr;
            grid-template-areas: 
              "head"
              "visual"
              "body";
          }
        }
        
        .feature-head { grid-area: head; min-width: 0; width: 100%; padding-right: 20px; }
        .feature-body { grid-area: body; min-width: 0; width: 100%; padding-right: 20px; }
        .feature-visual { grid-area: visual; min-width: 0; width: 100%; }
        
        @media(max-width: 1024px) {
          .feature-head { padding-right: 0; }
          .feature-body { padding-right: 0; }
        }

        .visual-box {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 340px;
          border-left: 1px solid #2E3139;
          padding-left: 40px;
        }
        @media(max-width: 1024px) {
          .visual-box {
            border-left: none;
            padding-left: 0;
            margin-inline: auto;
            width: 100%;
            max-width: 420px;
            height: clamp(190px, 52vw, 280px);
            min-height: 0;
            overflow: hidden;
            border-radius: clamp(16px, 4vw, 24px);
            background: #15171d;
          }
        }
      `}} />

      {/* TAB BAR */}
      <div 
        role="tablist"
        className="flex overflow-x-auto scrollbar-none z-20 min-[1025px]:static min-[1025px]:bg-[#1D1F26] bg-[#12141c] sticky top-[64px] min-[1025px]:top-auto"
        style={{
          margin: '0 0 16px 0',
          gap: '6px',
          border: '1px solid #2E3139',
          padding: '6px',
          borderRadius: '14px',
          width: 'max-content',
          maxWidth: '100%'
        }}
      >
        {features.map((feature, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={feature.id}
              ref={(el) => { buttonRefs.current[idx] = el; }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${feature.id}`}
              id={`tab-${feature.id}`}
              onClick={() => { handleTabChange(idx); setIsPaused(true); }}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={cn(
                "whitespace-nowrap transition-colors flex-1 flex items-center justify-center focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D1F26]",
                "[@media(max-width:767px)]:text-[13px] [@media(max-width:767px)]:px-[14px] [@media(max-width:767px)]:py-[9px]"
              )}
              style={{
                fontWeight: 700,
                fontSize: '15px',
                padding: '11px 20px',
                borderRadius: '10px',
                color: isActive ? '#fff' : '#A4ABB8',
                background: isActive ? 'linear-gradient(90deg, #FF7A1A, #FF5A00)' : 'transparent',
                boxShadow: isActive ? '0 8px 22px rgba(255,90,0,.35)' : 'none',
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#A4ABB8'; }}
            >
              <span className="hidden sm:inline" style={{ fontSize: '11px', opacity: 0.6, marginRight: '8px' }}>
                {feature.number}
              </span>
              {feature.tabLabel}
            </button>
          );
        })}
      </div>

      {/* SINGLE PANEL */}
      <div 
        id={`panel-${activeFeature.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeFeature.id}`}
        className={cn(
          "feature-card transition-all duration-200 ease-in-out motion-reduce:transition-none",
          animating ? "opacity-0 translate-y-[8px]" : "opacity-100 translate-y-0"
        )}
      >
        <div className="feature-head flex flex-col">
          <span style={{ color: '#FF5A00', fontWeight: 800, fontSize: 'clamp(11px, 2.8vw, 13px)', letterSpacing: '.12em', textTransform: 'uppercase' }}>
            {activeFeature.number} / {activeFeature.label}
          </span>
          <h3 
            className="font-display"
            style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(22px, 6vw, 30px)', lineHeight: 1.15, letterSpacing: '-.02em', margin: '12px 0 0', textWrap: 'balance' }}
          >
            {activeFeature.title}
          </h3>
        </div>

        <div className="feature-visual visual-box">
          <div className="absolute inset-0 ml-[40px] [@media(max-width:859px)]:ml-0 flex items-center justify-center pointer-events-none">
            <div className="w-[450px] h-[450px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,90,0,.30) 0%, transparent 65%)' }} />
          </div>

          <div 
            className="relative z-10 flex items-center justify-center w-full h-full min-[1025px]:scale-100 scale-100"
          >
            {activeFeature.id === "qr-safety" && (
              <div style={{ width: 'clamp(180px, 45vw, 210px)', background: '#16171C', border: '2px solid #34373F', borderRadius: '32px', padding: '16px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 12px 30px rgba(0,0,0,0.4)', transform: 'scale(0.85)' }} className="min-[1025px]:scale-100 min-[1025px]:p-[20px_16px_18px]">
                <div style={{ width: '56px', height: '6px', background: '#34373F', borderRadius: '9px', marginBottom: '18px' }} />
                <div style={{ background: '#0C0C0E', border: '1px solid #2E3139', borderRadius: '10px', fontWeight: 800, fontSize: 'clamp(12px, 3.5vw, 15px)', padding: '12px', width: '100%', textAlign: 'center', color: 'white', marginBottom: '10px' }}>
                  MP09 &bull;&bull; 1234
                </div>
                {["Call owner (masked)", "Send message", "Report issue", "Emergency"].map((text) => (
                  <div key={text} style={{ width: '100%', background: '#23252C', borderRadius: '10px', padding: '10px', fontSize: 'clamp(11px, 3vw, 13px)', fontWeight: 700, textAlign: 'center', marginBottom: '8px', color: text === "Emergency" ? '#FF6B7C' : 'white' }}>
                    {text}
                  </div>
                ))}
              </div>
            )}

            {activeFeature.id === "gps" && (
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 300 220" fill="none" style={{ position: 'absolute', inset: 0, objectFit: 'contain' }}>
                  <path d="M20 190 C80 160 90 120 150 110 S230 60 270 40" stroke="#FF5A00" strokeWidth="4" strokeDasharray="10 9" strokeLinecap="round" fill="none" />
                  <circle cx="270" cy="40" r="12" fill="#FF5A00" fillOpacity="0.25" />
                  <circle cx="270" cy="40" r="6" fill="#FF5A00" />
                  <circle cx="150" cy="110" r="7" fill="white" />
                </svg>
                <div style={{ position: 'absolute', top: '25%', left: '10%', fontWeight: 800, fontSize: 'clamp(10px, 2.9vw, 13px)', background: 'rgba(255,90,0,.16)', color: '#FF8A3D', border: '1px solid rgba(255,90,0,.4)', borderRadius: '99px', padding: '6px 12px', whiteSpace: 'nowrap' }}>
                  Last seen
                </div>
                <div style={{ position: 'absolute', bottom: '15%', right: '5%', fontWeight: 800, fontSize: 'clamp(10px, 2.9vw, 13px)', background: 'rgba(245,179,1,.14)', color: '#F5B301', border: '1px solid rgba(245,179,1,.4)', borderRadius: '99px', padding: '6px 12px', whiteSpace: 'nowrap' }}>
                  Geofence alert
                </div>
              </div>
            )}

            {activeFeature.id === "hardware" && (
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', transform: 'scale(1)', width: '100%', height: '100%' }}>
                {/* QR Tag Placeholder */}
                <div style={{ width: 'clamp(60px, 20vw, 88px)', height: 'clamp(60px, 20vw, 88px)', background: '#16171C', border: '2px solid #34373F', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                  <div style={{ position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', background: '#FF5A00', boxShadow: '0 0 8px #FF5A00' }} />
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A4ABB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'scale(0.8)' }}>
                    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  </svg>
                </div>
                
                {/* GPS Tracker Placeholder */}
                <div style={{ width: 'clamp(56px, 18vw, 80px)', height: 'clamp(72px, 24vw, 104px)', background: '#16171C', border: '2px solid #34373F', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                  <div style={{ position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', background: '#FF5A00', boxShadow: '0 0 8px #FF5A00' }} />
                  <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', width: '32px', height: '4px', borderRadius: '4px', background: '#34373F' }} />
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A4ABB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', transform: 'scale(0.8)' }}>
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="feature-body flex flex-col">
          <p 
            style={{ color: '#A4ABB8', margin: '0 0 16px', maxWidth: '100%', fontSize: 'clamp(14px, 3.8vw, 16px)', lineHeight: 1.6 }}
          >
            {activeFeature.description}
          </p>

          <div style={{ borderTop: '1px solid #2E3139', paddingTop: '18px', fontSize: '12px', fontWeight: 800, letterSpacing: '.12em', color: '#A4ABB8' }}>
            KEY CAPABILITIES
          </div>

          <ul 
            className="grid"
            style={{ listStyle: 'none', margin: '12px 0 20px', gap: '12px' }}
          >
            {activeFeature.capabilities.map((cap, i) => (
              <li key={i} className="flex items-center" style={{ gap: '12px', color: 'white', fontWeight: 700, fontSize: 'clamp(14px, 3.8vw, 16px)' }}>
                <CheckCircle2 className="shrink-0" style={{ width: '22px', height: '22px' }} stroke="#FF5A00" strokeWidth={2} />
                <span className="text-balance">{cap}</span>
              </li>
            ))}
          </ul>

          <Link
            href={activeFeature.href}
            className="inline-flex items-center justify-center transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D1F26] min-h-[48px] [@media(max-width:479px)]:w-full"
            style={{
              alignSelf: 'flex-start',
              background: 'linear-gradient(90deg, #FF7A1A, #FF5A00)',
              color: 'white',
              fontWeight: 800,
              fontSize: '15px',
              padding: '0 24px',
              borderRadius: '8px',
              boxShadow: '0 10px 26px rgba(255,90,0,.35)',
              marginTop: '4px'
            }}
          >
            {activeFeature.buttonText} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}