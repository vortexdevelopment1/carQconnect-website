"use client";

const bars = [6, 14, 22, 12, 28, 16, 24, 10, 18, 26, 12, 8, 20, 14, 24, 10];

export function VoiceWaveform({ active = true }: { active?: boolean }) {
  return (
    <div className="flex h-10 items-end justify-center gap-[3px]">
      {bars.map((h, i) => (
        <span
          key={i}
          className={active ? "animate-[wave_1.2s_ease-in-out_infinite]" : ""}
          style={{
            width: 3,
            height: h,
            borderRadius: 2,
            background: "linear-gradient(to top, #18D7FF, #7CE8FF)",
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); opacity: 0.6; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
