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
    <div className="rounded-card-lg border border-navy bg-navy p-6 md:p-8 shadow-panel">
      <div className="flex items-center gap-2 text-white/50 text-xs">
        <Sparkles className="h-3.5 w-3.5 text-cyan" />
        carQconnect Assistant
      </div>

      <div className="mt-5 space-y-4">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white/10 px-4 py-3 text-[14px] text-white/85">
          Kal Indore se Udaipur jaana hai, toll kam rakhna hai.
        </div>

        <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-blue/20 bg-blue/10 px-4 py-3 text-[14px] text-white/85">
          I found 3 route options. The economical route reduces estimated toll
          cost while adding approximately 35 minutes.
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: Route, label: "Route", value: "Economical" },
            { icon: Fuel, label: "Fuel", value: "~41 L" },
            { icon: TicketPercent, label: "Toll", value: "₹680" },
            { icon: Wallet, label: "Total", value: "₹4,950" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-card border border-white/10 bg-white/5 p-3">
              <Icon className="h-3.5 w-3.5 text-cyan" />
              <p className="mt-1.5 text-[11px] text-white/40">{label}</p>
              <p className="text-[13px] text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {quickPrompts.map((prompt) => (
          <span
            key={prompt}
            className="rounded-pill border border-white/12 px-3 py-1.5 text-[12px] text-white/55"
          >
            {prompt}
          </span>
        ))}
      </div>
    </div>
  );
}
