import { Sparkles, Route, Fuel, TicketPercent, Wallet } from "lucide-react";

const quickPrompts = [
  "Plan my trip",
  "Find a hotel",
  "Lowest toll route",
  "Track my vehicle",
  "Where did I park?",
  "Contact support",
];

export function AiChatDemo() {
  return (
    <div 
      className="relative overflow-hidden rounded-card-lg border border-[#262935] p-6 md:p-8 shadow-panel w-full"
      style={{
        backgroundColor: '#12141c',
        backgroundImage: 'radial-gradient(70% 60% at 100% 0%, rgba(255,106,0,.22), rgba(255,106,0,0) 70%)'
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/50 text-[12px] font-medium">
          <Sparkles className="h-[14px] w-[14px] text-[#ff6a00]" />
          carQconnect Assistant
        </div>
        <div className="rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: 'rgba(255,255,255,.1)', color: '#b9bece' }}>
          Sample
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div 
          className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm px-4 py-3 text-[14px] leading-relaxed text-white/90"
          style={{ backgroundColor: '#262a37' }}
        >
          I need to drive from Indore to Udaipur tomorrow, find a route with lower tolls.
        </div>

        <div 
          className="max-w-[92%] rounded-2xl rounded-tl-sm border px-4 py-3 text-[14px] leading-relaxed text-white/90"
          style={{ backgroundColor: 'rgba(255,106,0,.12)', borderColor: 'rgba(255,106,0,.35)' }}
        >
          I found 3 route options. The economical route reduces estimated toll cost while adding approximately 35 minutes.
        </div>

        <div className="grid grid-cols-2 min-[520px]:grid-cols-4 gap-3">
          {[
            { icon: Route, label: "Route", value: "Economical" },
            { icon: Fuel, label: "Fuel (est.)", value: "~41 L" },
            { icon: TicketPercent, label: "Toll (est.)", value: "Rs. 1,680" },
            { icon: Wallet, label: "Total (est.)", value: "Rs. 14,950" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl border p-3 flex flex-col gap-1.5" style={{ backgroundColor: '#1c1f2a', borderColor: 'rgba(255,255,255,.08)' }}>
              <Icon className="h-4 w-4 text-[#ff6a00]" strokeWidth={2} />
              <div>
                <p className="text-[11px] text-white/40">{label}</p>
                <p className="text-[13px] font-medium text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            className="rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors hover:border-[#ff6a00] min-h-[36px] flex items-center justify-center"
            style={{ borderColor: 'rgba(255,255,255,.22)', color: '#d5d9e6' }}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
