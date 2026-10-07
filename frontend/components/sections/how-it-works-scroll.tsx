"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export type Step = {
  id: string;
  number: string;
  pill: string;
  line1: string;
  line2: string;
  body: string;
  chips: string[];
  screens: { name: string; src?: string }[];
};

export const steps: Step[] = [
  {
    id: "setup",
    number: "01",
    pill: "SET UP",
    line1: "Start with",
    line2: "your vehicle.",
    body: "Sign up with your mobile number or email and verify with an OTP. Then add your vehicle to your Digital Garage with its registration number, make, model, fuel type and average.",
    chips: ["OTP sign-in", "Multiple vehicles", "Documents and reminders"],
    screens: [
      { name: "OTP verification", src: "/how-it-works/01-a.png" },
      { name: "Add vehicle", src: "/how-it-works/01-b.png" },
      { name: "Vehicle detail", src: "/how-it-works/01-c.png" },
    ],
  },
  {
    id: "activate",
    number: "02",
    pill: "ACTIVATE HARDWARE",
    line1: "Activate your",
    line2: "QR or GPS.",
    body: "Order a QR Safety Tag or GPS Tracker in the app. After delivery, scan or enter the device details, choose your vehicle and confirm. Your hardware is now linked to it.",
    chips: ["Order in the app", "Scan or enter the code", "Linked to one vehicle"],
    screens: [
      { name: "Marketplace", src: "/how-it-works/02-a.png" },
      { name: "Scan or enter QR", src: "/how-it-works/02-b.png" },
      { name: "Vehicle confirmation", src: "/how-it-works/02-c.png" },
    ],
  },
  {
    id: "safe",
    number: "03",
    pill: "STAY SAFE",
    line1: "Stay safe",
    line2: "everywhere.",
    body: "Anyone who scans your QR can reach you through masked calling, with no app needed, and you choose what they see. In an emergency, press and hold SOS to alert your family with your latest location.",
    chips: ["Masked calling", "Your privacy settings", "One-hold SOS"],
    screens: [
      { name: "Active QR", src: "/how-it-works/03-a.png" },
      { name: "QR privacy settings", src: "/how-it-works/03-b.png" },
      { name: "Active SOS", src: "/how-it-works/03-c.png" },
    ],
  },
  {
    id: "track",
    number: "04",
    pill: "TRACK AND PLAN",
    line1: "Track it.",
    line2: "Plan the trip.",
    body: "With a compatible GPS tracker, see live location and last-seen status, set geofences and review trips. Then plan your next journey with distance, fuel and toll estimates. Live tracking depends on device and network conditions, and estimates are clearly labelled.",
    chips: ["Live location", "Geofence alerts", "Fuel and toll estimates"],
    screens: [
      { name: "Live vehicle map", src: "/how-it-works/04-a.png" },
      { name: "Geofence alert", src: "/how-it-works/04-b.png" },
      { name: "Trip summary", src: "/how-it-works/04-c.png" },
    ],
  },
  {
    id: "help",
    number: "05",
    pill: "GET HELP",
    line1: "Help is",
    line2: "one tap away.",
    body: "Ask the AI assistant by chat or voice. If it cannot resolve something, a support executive takes over with your conversation, so you never repeat yourself.",
    chips: ["Chat or voice", "Human handoff", "Context carried over"],
    screens: [
      { name: "AI chat", src: "/how-it-works/05-a.png" },
      { name: "Voice listening", src: "/how-it-works/05-b.png" },
      { name: "Human escalation", src: "/how-it-works/05-c.png" },
    ],
  },
];

function PhoneScreen({ screen }: { screen: { name: string; src?: string } }) {
  const [error, setError] = useState(false);
  if (!screen.src || error) {
    return (
      <div className="flex h-full w-full items-center justify-center p-4 text-center">
        <span className="font-semibold text-[#ff6a00]">{screen.name}</span>
      </div>
    );
  }
  return (
    <Image
      src={screen.src}
      alt={screen.name}
      fill
        sizes="250px"
        quality={80}
        className="object-cover"
      onError={() => setError(true)}
    />
  );
}

function StepSection({ step, index }: { step: Step; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting);
      },
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const aniState = inView ? "animate-in" : "animate-out";

  return (
    <section
      id={`step-${index}`}
      ref={sectionRef}
      className="step-section relative flex flex-col min-h-fit py-12 lg:py-12 w-full items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#0e1016",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/[0.08] hidden hidden lg:block" />

      <div className={`step-container ${aniState} relative z-10 flex flex-col items-center w-full max-w-[1120px] gap-[36px] px-6 py-0 lg:grid lg:grid-cols-[1fr_64px_1fr]`}>
        {/* TEXT COLUMN */}
        <div className="flex flex-col justify-center order-2 lg:order-none">
          {/* Mobile Badge */}
          <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-lg border border-[#ff6a00]/70 bg-[#ff6a00]/10 text-sm font-bold text-[#ff6a00] lg:hidden">
            {step.number}
          </div>

          <div className="text-anim-1">
            <span
              className="inline-block rounded-full px-3 py-1 font-bold uppercase"
              style={{
                fontSize: "13px",
                letterSpacing: "0.08em",
                border: "1px solid rgba(255,106,0,0.45)",
                backgroundColor: "rgba(255,106,0,0.10)",
                color: "#ff6a00",
              }}
            >
              {step.pill}
            </span>
          </div>

          <h2
            className="mt-6 font-extrabold"
            style={{
              fontSize: "clamp(42px, 5.4vw, 76px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            <span className="block overflow-hidden">
              <span className="text-anim-2 block text-white">{step.line1}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="text-anim-3 block text-[#ff6a00]">{step.line2}</span>
            </span>
          </h2>

          <p className="text-anim-4 mt-6 text-[17px] text-[#b9bece] max-w-[480px]">
            {step.body}
          </p>

          <div className="text-anim-5 mt-8 flex flex-wrap gap-3">
            {step.chips.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-white/[0.18] bg-transparent px-4 py-1.5 text-sm text-[#b9bece]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" />
                {chip}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN (Desktop only) */}
        <div className="flex items-center justify-center max-[900px]:hidden">
          <div className="center-anim relative flex h-[64px] w-[64px] items-center justify-center">
            <div
              className="absolute inset-0 rounded-[12px]"
              style={{
                border: "1px solid rgba(255,106,0,0.7)",
                backgroundColor: "rgba(255,106,0,0.08)",
                boxShadow: "0 0 40px rgba(255,106,0,0.35)",
                transform: "rotate(45deg)",
              }}
            />
            <span className="relative z-10 font-bold text-[#ff6a00]" style={{ fontSize: "20px" }}>
              {step.number}
            </span>
          </div>
        </div>

        {/* PHONES COLUMN */}
        <div className="flex items-center justify-center max-[900px]:order-3 max-[900px]:mt-12 max-[900px]:w-full max-[900px]:scale-80">
          <div
            className="relative flex w-full max-[900px]:max-w-[420px] max-[900px]:mx-auto items-center justify-center"
            style={{ perspective: "1400px", containerType: "inline-size", aspectRatio: "100 / 107", width: "100%" }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.15)_0%,transparent_70%)]" />
              <div className="absolute h-[400px] w-[400px] bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.25)_0%,transparent_60%)] blur-[40px] rounded-full pointer-events-none center-anim" />
            </div>

            {/* Phones */}
            {step.screens.map((screen, i) => {
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;
              const transforms = isMobile ? [
                { tx: '-15%', ty: '0%', s: 1, z: 3, o: 1 },
                { tx: '15%', ty: '-3%', s: 0.96, z: 2, o: 0.92 },
                { tx: '45%', ty: '-6%', s: 0.92, z: 1, o: 0.85 },
              ] : [
                { tx: '0%', ty: '0%', s: 1, z: 3, o: 1 },
                { tx: '26%', ty: '-3%', s: 0.96, z: 2, o: 0.92 },
                { tx: '52%', ty: '-6%', s: 0.92, z: 1, o: 0.85 },
              ];
              const t = transforms[i];
              return (
                <div
                  key={i}
                  className={`phone-anim phone-${i} absolute`}
                  style={{
                    zIndex: t.z,
                    width: "47cqw", height: "102cqw", borderRadius: "8cqw",
                    backgroundColor: "#0b0c10",
                    border: "1px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.55)",
                    padding: "1.6cqw",
                    "--final-tx": t.tx,
                    "--final-ty": t.ty,
                    "--final-s": t.s,
                    "--final-o": t.o,
                  } as React.CSSProperties}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-[#1a1c23]">
                    <PhoneScreen screen={screen} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksScroll() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let current = 0;
      steps.forEach((_, i) => {
        const el = document.getElementById(`step-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = i;
          }
        }
      });
      setActiveIndex(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-[#0e1016]">
      {/* Dynamic CSS for animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (prefers-reduced-motion: no-preference) {
          .animate-out .text-anim-1, .animate-out .text-anim-4, .animate-out .text-anim-5 {
            opacity: 0;
            transform: translateY(20px);
          }
          .animate-out .text-anim-2, .animate-out .text-anim-3 {
            transform: translateY(105%);
          }
          .animate-out .center-anim {
            opacity: 0;
            transform: scale(0.6);
          }
          .animate-out .arc-anim {
            stroke-dashoffset: 1;
          }
          .animate-out .pillar-anim {
            transform: scaleY(0);
            transform-origin: bottom;
          }
          .animate-out .phone-anim {
            opacity: 0;
            transform: translate3d(80px, 0, 0) rotateY(-34deg) rotateZ(3deg) scale(0.9);
          }
          
          .animate-in .text-anim-2 {
            animation: slideUpMask 800ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          .animate-in .text-anim-3 {
            animation: slideUpMask 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 120ms forwards;
            transform: translateY(105%);
          }
          .animate-in .text-anim-1, .animate-in .text-anim-4, .animate-in .text-anim-5 {
            animation: fadeUp 800ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            opacity: 0;
          }
          .animate-in .text-anim-1 { animation-delay: 100ms; }
          .animate-in .text-anim-4 { animation-delay: 240ms; }
          .animate-in .text-anim-5 { animation-delay: 360ms; }
          
          .animate-in .center-anim {
            animation: springScale 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          .center-anim > div {
            animation: pulseGlow 3s ease-in-out infinite alternate;
          }

          .animate-in .arc-anim {
            animation: drawArc 1s ease-out forwards;
            stroke-dashoffset: 1;
            stroke-dasharray: 1;
          }
          .animate-in .arc-0 { animation-delay: 0ms; }
          .animate-in .arc-1 { animation-delay: 100ms; }
          .animate-in .arc-2 { animation-delay: 200ms; }
          .animate-in .arc-3 { animation-delay: 300ms; }

          .animate-in .pillar-anim {
            animation: growPillar 800ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            transform-origin: bottom;
            transform: scaleY(0);
          }
          .animate-in .pillar-0 { animation-delay: 0ms; }
          .animate-in .pillar-1 { animation-delay: 60ms; }
          .animate-in .pillar-2 { animation-delay: 120ms; }
          .animate-in .pillar-3 { animation-delay: 180ms; }
          .animate-in .pillar-4 { animation-delay: 240ms; }
          .animate-in .pillar-5 { animation-delay: 300ms; }
          .animate-in .pillar-6 { animation-delay: 360ms; }

          .animate-in .phone-anim {
            animation: phoneEnter 900ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards, phoneFloat 6s ease-in-out infinite alternate;
            opacity: 0;
          }
          .animate-in .phone-0 { animation-delay: 0ms, 900ms; }
          .animate-in .phone-1 { animation-delay: 140ms, 1040ms; }
          .animate-in .phone-2 { animation-delay: 280ms, 1180ms; }
        }

        @media (prefers-reduced-motion: reduce) {
          .phone-anim {
            transform: translate3d(var(--final-tx), var(--final-ty), 0) rotateY(-18deg) rotateZ(3deg) scale(var(--final-s));
            opacity: var(--final-o);
          }
          .text-anim-2, .text-anim-3 { transform: translateY(0); }
        }

        @keyframes slideUpMask {
          from { transform: translateY(105%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes springScale {
          from { opacity: 0; transform: scale(0.6); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseGlow {
          from { box-shadow: 0 0 20px rgba(255,106,0,0.2); }
          to { box-shadow: 0 0 60px rgba(255,106,0,0.5); }
        }
        @keyframes drawArc {
          to { stroke-dashoffset: 0; }
        }
        @keyframes growPillar {
          to { transform: scaleY(1); }
        }
        @keyframes phoneEnter {
          from {
            opacity: 0;
            transform: translate3d(80px, 0, 0) rotateY(-34deg) rotateZ(3deg) scale(0.9);
          }
          to {
            opacity: var(--final-o);
            transform: translate3d(var(--final-tx), var(--final-ty), 0) rotateY(-18deg) rotateZ(3deg) scale(var(--final-s));
          }
        }
        @keyframes phoneFloat {
          0% {
            transform: translate3d(var(--final-tx), var(--final-ty), 0) rotateY(-18deg) rotateZ(3deg) scale(var(--final-s));
          }
          100% {
            transform: translate3d(var(--final-tx), calc(var(--final-ty) - 6px), 0) rotateY(-18deg) rotateZ(3deg) scale(var(--final-s));
          }
        }
      `}} />

      {steps.map((step, i) => (
        <StepSection key={step.id} step={step} index={i} />
      ))}

      {/* Navigator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 max-[900px]:hidden">
        {steps.map((_, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={i}
              onClick={() => {
                document.getElementById(`step-${i}`)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center transition-all duration-300"
              style={{
                width: isActive ? "24px" : "8px",
                height: isActive ? "24px" : "8px",
                borderRadius: "50%",
                backgroundColor: isActive ? "#ff6a00" : "rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
              }}
              aria-label={`Go to step ${i + 1}`}
            >
              {isActive ? i + 1 : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}









