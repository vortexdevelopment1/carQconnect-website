"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, MessageSquare, Flag, AlertTriangle, QrCode, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  { 
    id: "call", 
    label: "Call owner (masked)", 
    icon: Phone, 
    note: "The call is masked. The owner's number is never shown." 
  },
  { 
    id: "message", 
    label: "Send message", 
    icon: MessageSquare, 
    note: "Your message reaches the owner without exposing their contact details." 
  },
  { 
    id: "report", 
    label: "Report an issue", 
    icon: Flag, 
    note: "Report a wrongly parked vehicle or any other issue." 
  },
  { 
    id: "emergency", 
    label: "Emergency", 
    icon: AlertTriangle, 
    note: "Emergency action for urgent situations." 
  }
];

export function QrScannerDemo() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [scanState, setScanState] = useState<"idle" | "start" | "sweeping">("idle");
  const [pulseState, setPulseState] = useState<"idle" | "start" | "pulsing">("idle");
  const isAnimatingRef = useRef(false);

  // Default note
  const currentNote = selectedAction 
    ? actions.find(a => a.id === selectedAction)?.note 
    : "Tap an action to see what happens.";



  const handleSimulate = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setSelectedAction(null);

    // 1. Setup start state instantly
    setScanState("start");
    
    // 2. Next frame, trigger the transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setScanState("sweeping");
      });
    });

    // 3. Right after scan ends (1.1s), trigger right card pulse
    setTimeout(() => {
      setScanState("idle");
      setPulseState("start");
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPulseState("pulsing");
        });
      });

      // Reset pulse and animation lock after pulse ends (600ms)
      setTimeout(() => {
        setPulseState("idle");
        isAnimatingRef.current = false;
      }, 600);
    }, 1100);
  };

  return (
    <section id="demo" className="bg-[#F7F8FC] px-6 pt-4 pb-8 md:pt-6 md:pb-10">
      <div className="mx-auto max-w-[1180px]">
        
        {/* Header */}
        <div className="mb-11 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[32px] h-[2px] bg-[#FF5A00]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#FF5A00]">SEE IT IN ACTION</span>
          </div>
          <h2 className="font-display font-[800] text-[#12131A] tracking-[-0.03em] leading-[1.08]" style={{ fontSize: 'clamp(30px,4vw,46px)' }}>
            See what a scanner <span className="text-[#FF5A00]">sees.</span>
          </h2>
          <p className="mt-3 max-w-[520px] text-[16px] text-[#5B6070]">
            A scan opens a privacy-first page on any phone. No app needed. Try it.
          </p>
        </div>

        {/* Stage */}
        <div className="grid grid-cols-1 items-stretch md:grid-cols-[1fr_auto_1fr]">
          
          {/* LEFT CARD */}
          <div className="flex flex-col items-center justify-center rounded-[26px] border border-[#ECEEF4] bg-white p-[34px] text-center shadow-[0_12px_36px_rgba(18,19,26,0.06)] min-h-0 md:min-h-[440px]">
            <span className="mb-6 text-[13px] font-bold uppercase tracking-[0.14em] text-[#FF5A00]">
              STEP 1 &middot; SCAN THE TAG
            </span>

            {/* Scan Frame */}
            <div className="relative mb-6 flex h-[210px] w-[210px] items-center justify-center rounded-[26px] border border-[#ECEEF4] bg-[#F4F5FA]">
              {/* Corner brackets */}
              <div className="absolute left-[14px] top-[14px] h-[30px] w-[30px] rounded-tl-[10px] border-l-[3px] border-t-[3px] border-[#FF5A00]" />
              <div className="absolute right-[14px] top-[14px] h-[30px] w-[30px] rounded-tr-[10px] border-r-[3px] border-t-[3px] border-[#FF5A00]" />
              <div className="absolute bottom-[14px] left-[14px] h-[30px] w-[30px] rounded-bl-[10px] border-b-[3px] border-l-[3px] border-[#FF5A00]" />
              <div className="absolute bottom-[14px] right-[14px] h-[30px] w-[30px] rounded-br-[10px] border-b-[3px] border-r-[3px] border-[#FF5A00]" />

              {/* QR Tag */}
              <div className="relative flex h-[116px] w-[116px] overflow-hidden items-center justify-center rounded-[20px] border border-[#D9DCE8] bg-white shadow-[0_10px_26px_rgba(18,19,26,0.12)]">
                <QrCode className="h-[72px] w-[72px] text-[#12131A]" strokeWidth={1.8} />
                
                {/* Scan Line */}
                <div 
                  className={cn(
                    "absolute left-0 w-full h-[3px] bg-[#FF5A00] shadow-[0_0_14px_3px_rgba(255,90,0,0.7)] z-10",
                    scanState === "idle" && "opacity-0 top-0 duration-0",
                    scanState === "start" && "opacity-100 -top-[10px] duration-0",
                    scanState === "sweeping" && "opacity-100 top-[126px] transition-all duration-[1100ms] ease-in-out motion-reduce:transition-none"
                  )} 
                />
              </div>
            </div>

            <h3 className="mb-1 font-display text-[19px] font-[800] text-[#12131A]">
              carQconnect QR tag on a vehicle
            </h3>
            <p className="mb-5 text-[14px] text-[#5B6070]">
              Anyone can scan it with a phone camera.
            </p>

            <button
              onClick={handleSimulate}
              className="rounded-[10px] border-[1.5px] border-[#FF5A00] bg-white px-6 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-[#FF5A00] transition-colors duration-200 hover:bg-[#FF5A00] hover:text-white"
            >
              Simulate scan
            </button>
          </div>

          {/* CONNECTOR */}
          <div className="relative z-10 my-[16px] flex items-center justify-center md:-mx-[22px] md:my-0">
            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#FF5A00] text-white shadow-[0_8px_24px_rgba(255,90,0,0.4)]">
              <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" strokeWidth={2.5} />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-[26px] border border-[#2A2D3A] bg-[#12131A] p-[34px] text-center text-white shadow-[0_24px_60px_rgba(18,19,26,0.28)] min-h-0 md:min-h-[440px]">
            {/* Soft Glow */}
            <div 
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(420px 260px at 50% 0%, rgba(255,90,0,0.18), transparent 70%)' }} 
            />

            {/* Pulse Ring */}
            <div 
              className={cn(
                "pointer-events-none absolute inset-0 rounded-[26px]",
                pulseState === "idle" && "opacity-0 duration-0",
                pulseState === "start" && "shadow-[0_0_0_0_rgba(255,90,0,0.7)] duration-0 opacity-100",
                pulseState === "pulsing" && "shadow-[0_0_0_24px_rgba(255,90,0,0)] transition-shadow duration-[600ms] ease-out opacity-100 motion-reduce:transition-none"
              )} 
            />

            <div className="relative z-10 flex w-full flex-col items-center">
              <span className="mb-6 text-[13px] font-bold uppercase tracking-[0.14em] text-[#FF8A3D]">
                STEP 2 &middot; CHOOSE AN ACTION
              </span>

              {/* Mini Browser Bar */}
              <div className="mb-4 w-full max-w-[340px] border-b border-[#2A2D3A] pb-3.5">
                <div className="flex items-center justify-center gap-2 relative">
                  <div className="absolute left-0 flex gap-[3px]">
                    <div className="h-[9px] w-[9px] rounded-full bg-[#3A3D4C]" />
                    <div className="h-[9px] w-[9px] rounded-full bg-[#3A3D4C]" />
                    <div className="h-[9px] w-[9px] rounded-full bg-[#3A3D4C]" />
                  </div>
                  <span className="font-mono text-[12px] text-[#7B7F90]">Secure page, no app needed</span>
                </div>
              </div>

              {/* Vehicle Badge */}
              <div className="mb-3 rounded-full border border-emerald-400/30 bg-emerald-400/12 px-3 py-1 text-[12px] font-semibold text-emerald-400">
                Vehicle protected
              </div>

              <h4 className="font-display text-[24px] font-[800] text-white">MP09 &bull;&bull; 1234</h4>
              <p className="mb-5 text-[13px] text-[#A8ACBA]">Owner details stay private</p>

              {/* Actions Grid */}
              <div className="grid w-full max-w-[340px] grid-cols-2 gap-[10px]">
                {actions.map((action) => {
                  const isSelected = selectedAction === action.id;
                  return (
                    <button
                      key={action.id}
                      onClick={() => setSelectedAction(action.id)}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-[14px] border bg-[#1B1D26] px-2 py-4 text-[13px] font-semibold text-white transition-all duration-200",
                        isSelected 
                          ? "border-[#FF5A00] -translate-y-0.5" 
                          : "border-[#2A2D3A] hover:border-[#FF5A00] hover:-translate-y-0.5"
                      )}
                    >
                      <action.icon className="h-5 w-5 text-[#FF5A00]" strokeWidth={1.75} />
                      {action.label}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Note */}
              <div className="mt-4 min-h-[20px] text-[12.5px] transition-colors duration-200" style={{ color: selectedAction ? '#FFB48A' : '#7B7F90' }}>
                {currentNote}
              </div>
            </div>
          </div>
        </div>

        {/* TRUST ROW */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-[13.5px] font-semibold text-[#5B6070]">
          {["No app required for the scanner", "Owner's number stays private", "Only owner-approved info is shown"].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#1FA971]" strokeWidth={3} />
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
