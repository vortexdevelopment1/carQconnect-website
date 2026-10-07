import { Navigation2, MapPin } from "lucide-react";

export function GpsMapCard() {
  return (
    <div className="relative overflow-hidden rounded-card-lg border border-navy bg-navy p-6 md:p-8 shadow-panel">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(23,137,255,0.1) 0px, rgba(23,137,255,0.1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(23,137,255,0.1) 0px, rgba(23,137,255,0.1) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative flex items-center justify-between text-xs text-white/50">
        <span>Live Vehicle Map</span>
        <span className="flex items-center gap-1.5 text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Live
        </span>
      </div>

      <div className="relative mt-6 h-56 md:h-64">
        <svg viewBox="0 0 320 180" className="h-full w-full">
          <path
            d="M10 150 C 80 60, 160 160, 310 40"
            fill="none"
            stroke="#09C2FF"
            strokeWidth="2"
            strokeDasharray="6 8"
            opacity="0.5"
          />
          <circle cx="10" cy="150" r="4" fill="#12B76A" />
          <circle cx="310" cy="40" r="4" fill="#E31B23" opacity="0.8" />
          {/* geofence circle */}
          <circle cx="180" cy="90" r="46" fill="rgba(23,137,255,0.08)" stroke="#1789FF" strokeOpacity="0.4" strokeDasharray="4 5" />
        </svg>

        <div className="absolute left-[46%] top-[38%] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue/20">
          <Navigation2 className="h-4 w-4 text-blue animate-float" style={{ animationDuration: "3s" }} />
        </div>
      </div>

      <div className="relative mt-4 grid grid-cols-3 gap-3 text-[12px]">
        <div className="rounded-card border border-white/10 bg-white/5 p-3">
          <MapPin className="h-3.5 w-3.5 text-cyan" />
          <p className="mt-1.5 text-white/40">Last seen</p>
          <p className="text-white">2 min ago</p>
        </div>
        <div className="rounded-card border border-white/10 bg-white/5 p-3">
          <p className="text-white/40">Geofence</p>
          <p className="mt-1.5 text-white">Home zone</p>
        </div>
        <div className="rounded-card border border-white/10 bg-white/5 p-3">
          <p className="text-white/40">Device</p>
          <p className="mt-1.5 text-success">Online</p>
        </div>
      </div>
    </div>
  );
}
