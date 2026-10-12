const fs = require('fs');

// 1. Update VoiceWaveform
const waveformContent = `"use client";

const bars = [15, 35, 55, 30, 70, 40, 60, 25, 45, 65, 30, 20, 50, 35, 60, 25];

export function VoiceWaveform({ active = true }: { active?: boolean }) {
  return (
    <div className="flex w-full max-w-[280px] mx-auto h-[40px] items-end justify-between gap-[1.5%]">
      {bars.map((h, i) => {
        const opacity = 0.4 + (h / 100) * 0.6;
        return (
          <span
            key={i}
            className={active ? "animate-[wave_1.2s_ease-in-out_infinite]" : ""}
            style={{
              width: "4%",
              minWidth: "2px",
              height: h + "%",
              borderRadius: "4px",
              backgroundColor: "rgba(255, 106, 0, " + opacity + ")",
              animationDelay: i * 0.07 + "s",
              transformOrigin: "bottom"
            }}
          />
        );
      })}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[wave_1\\.2s_ease-in-out_infinite\\] {
            animation: none !important;
            transform: scaleY(0.7) !important;
            opacity: 0.8 !important;
          }
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.4; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
`;
fs.writeFileSync('components/animations/voice-waveform.tsx', waveformContent, 'utf8');

// 2. Update VoiceSection
const voiceSectionContent = `import { Mic } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { VoiceWaveform } from "@/components/animations/voice-waveform";

export function VoiceSection() {
  return (
    <section 
      className="bg-gradient-to-br from-[#f4f4f5] via-[#e9eaeb] to-[#dedfe1] border-y border-black/10"
      style={{ paddingBlock: 'clamp(36px, 6vw, 64px)' }}
    >
      <div className="container-page mx-auto w-full max-w-[1120px] 2xl:max-w-[1240px] px-[clamp(16px,4vw,24px)] flex flex-col items-center text-center">
        <div className="w-full max-w-[640px] mx-auto">
          <SectionHeading
            align="center"
            title="Talk to your vehicle assistant."
            description="Speak naturally instead of navigating screens - carQconnect listens, understands and responds."
          />
        </div>

        <div 
          className="flex flex-col items-center gap-6 rounded-3xl border border-black/10 bg-white/80 shadow-md backdrop-blur-xl w-full mx-auto"
          style={{ 
            maxWidth: '520px', 
            padding: 'clamp(20px, 4vw, 32px)',
            marginTop: 'clamp(20px, 3vw, 32px)'
          }}
        >
          <button
            aria-label="Simulate voice input"
            className="flex h-20 w-20 items-center justify-center rounded-full transition-transform hover:scale-105 shadow-sm"
            style={{ backgroundColor: 'rgba(255, 106, 0, 0.1)', borderColor: 'rgba(255, 106, 0, 0.3)', borderWidth: '1px' }}
          >
            <Mic className="h-8 w-8 text-[#ff6a00]" />
          </button>
          
          <div className="w-full">
            <VoiceWaveform />
          </div>
          
          <p className="font-medium text-neutral-600 leading-snug" style={{ fontSize: 'clamp(13px, 3.4vw, 15px)' }}>
            &ldquo;Plan a trip from Indore to Udaipur.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync('components/sections/voice-section.tsx', voiceSectionContent, 'utf8');

