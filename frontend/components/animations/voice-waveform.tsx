"use client";

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
