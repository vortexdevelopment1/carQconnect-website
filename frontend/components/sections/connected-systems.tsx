"use client";

import Link from "next/link";
import { Camera, MapPinned, QrCode, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { FeatureShowcase } from "./feature-showcase";
import { PrivacyControlSection } from "./privacy-control";
import { cn } from "@/lib/utils";

export function ConnectedSystems() {
  return (
    <>
      <section id="systems" className="w-full section-py bg-[#14151A] max-[767px]:!pt-8 max-[767px]:!pb-24">
        <div className="container-page">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ color: '#FF5A00', fontWeight: 800, fontSize: 'clamp(0.7rem, 2.5vw, 0.75rem)', letterSpacing: '0.12em', margin: 0, textTransform: 'uppercase' }}>
              CONNECTED VEHICLE PLATFORM
            </p>
            <h2 
              className="font-display max-[767px]:!text-[clamp(1.35rem,5.5vw,1.85rem)] max-[767px]:!my-1.5"
              style={{ color: 'white', fontWeight: 800, fontSize: 'clamp(1.5rem, 7vw, 2.25rem)', lineHeight: 1.15, letterSpacing: '-.03em', margin: '10px 0 12px' }}
            >
              Smart systems. <br />
              <span style={{ color: '#FF5A00' }}>Smooth journeys.</span>
            </h2>
            <p 
              className="leading-relaxed text-[#A4ABB8] max-[767px]:!mb-3 max-[767px]:!text-[clamp(12.5px,3.2vw,14px)] max-[767px]:!leading-[1.45]"
              style={{ maxWidth: '56ch', marginBottom: 'var(--block-gap)', fontSize: 'clamp(0.85rem, 3.2vw, 0.95rem)', color: '#9ca3af' }}
            >
              carQconnect gives each product a clear job: safety when someone finds your vehicle, visibility while it moves, and useful hardware for every drive.
            </p>
          </motion.div>

          <FeatureShowcase />
        </div>
      </section>

      <section 
        id="features" 
        className="section-py w-full"
        style={{
          ["--why-bg" as any]: "#faf3e9",
          backgroundColor: "var(--why-bg)",
        }}
      >
        <div className="container-page grid gap-[var(--block-gap)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div 
            className="pr-0 lg:pr-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-[#FF5A00]" />
              <p className="text-[clamp(10px,2vw,12px)] font-extrabold tracking-[0.16em] text-[#FF5A00] uppercase">WHY CARQCONNECT</p>
            </div>
            <h2 
              className="mt-3 sm:mt-6 font-display font-bold text-[#0C0C0E]" 
              style={{ fontSize: 'clamp(19px, 5.2vw, 44px)', lineHeight: 1.2 }}
            >
              Because your vehicle needs more than a phone number on the dashboard.
            </h2>
            <p className="mt-6 max-w-[48ch] text-[15px] sm:text-[16px] leading-relaxed text-[#4d5360]">
              A QR sticker alone cannot protect privacy. A tracker alone cannot help a person who finds your parked car. carQconnect brings the moments that matter into one vehicle profile.
            </p>
            <Link 
              href="/features" 
              className="mt-10 inline-flex items-center justify-center gap-2 text-[clamp(13px,2vw,15px)] font-bold text-white bg-[#0C0C0E] hover:bg-[#FF5A00] hover:-translate-y-1 transition-all duration-300 py-[clamp(10px,2.5vw,14px)] px-[clamp(18px,4vw,28px)] rounded-xl w-fit shadow-md"
            >
              See all product features <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </motion.div>
          <div className="grid gap-[var(--card-gap)] sm:grid-cols-2">
            {[
              ["Privacy first", "Your personal number stays private while a genuine caller can still reach you."],
              ["Useful in real life", "Parking, towing, emergencies and vehicle movement each have a clear action."],
              ["One vehicle record", "Hardware, safety status and future services stay connected to the same vehicle."],
              ["Built to grow", "Start with a QR tag, then add GPS and compatible road-visibility hardware when you need it."],
            ].map(([title, text], index) => {
              const isDark = index === 3;
              return (
                <motion.div 
                  key={title} 
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "flex flex-col rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A00] border",
                    isDark 
                      ? "bg-[#111318] border-[#2E3139] shadow-xl hover:shadow-[0_12px_36px_rgba(255,90,0,0.15)]" 
                      : "bg-white border-[#efe5d6] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(255,90,0,0.12)]"
                  )}
                >
                  <div 
                    className={cn(
                      "flex items-center justify-center w-max px-3.5 py-1.5 rounded-[8px] mb-6",
                      isDark ? "bg-[#FF5A00]" : "bg-[#ffe6d2]"
                    )}
                  >
                    <span 
                      className={cn(
                        "text-[13px] font-extrabold",
                        isDark ? "text-white" : "text-[#FF5A00]"
                      )}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <h3 
                    className={cn(
                      "text-[18px] font-bold mb-3",
                      isDark ? "text-white" : "text-[#0C0C0E]"
                    )}
                  >
                    {title}
                  </h3>
                  <p 
                    className={cn(
                      "text-[14px] leading-[1.6]",
                      isDark ? "text-[#A4ABB8]" : "text-[#5A6270]"
                    )}
                  >
                    {text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <PrivacyControlSection />
    </>
  );
}

