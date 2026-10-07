import { Mic } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { VoiceWaveform } from "@/components/animations/voice-waveform";

export function VoiceSection() {
  return (
    <section className="bg-gradient-to-br from-[#f4f4f5] via-[#e9eaeb] to-[#dedfe1] py-24 md:py-32 border-y border-black/10">
      <div className="container-page flex flex-col items-center text-center">
        <SectionHeading
          align="center"
          title="Talk to your vehicle assistant."
          description="Speak naturally instead of navigating screens - carQconnect listens, understands and responds."
        />

        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-black/10 bg-white/80 shadow-md backdrop-blur-xl px-10 py-12 max-w-lg w-full">
          <button
            aria-label="Simulate voice input"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] transition-transform hover:scale-105 shadow-sm"
          >
            <Mic className="h-8 w-8" />
          </button>
          <VoiceWaveform />
          <p className="text-[14px] font-medium text-neutral-600">
            &ldquo;Plan a trip from Indore to Udaipur.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
