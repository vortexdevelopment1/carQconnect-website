import { Gauge, Fuel, TicketPercent, Wallet, Milestone, IndianRupee } from "lucide-react";

const outputs = [
  { icon: Milestone, label: "Distance", value: "612 km" },
  { icon: Gauge, label: "Travel time", value: "~9h 40m" },
  { icon: Fuel, label: "Fuel needed", value: "~41 L (est.)" },
  { icon: IndianRupee, label: "Fuel cost (est.)", value: "Rs. 4,270" },
  { icon: TicketPercent, label: "Toll estimate", value: "Rs. 1,680 (est.)" },
  { icon: Wallet, label: "Total trip cost", value: "Rs. 5,950 (est.)", subtext: "about Rs. 8.1 per km (est.)" },
];

export function TripPlannerDemo() {
  return (
    <div 
      className="rounded-card-lg border border-border bg-surface w-full"
      style={{ padding: 'clamp(16px, 3vw, 28px)' }}
    >
      <div className="grid gap-2 min-[640px]:gap-4 grid-cols-1 min-[640px]:grid-cols-2">
        <div className="rounded-card border border-border bg-surface-2 p-3 min-[640px]:p-4">
          <p className="text-[11px] text-tertiary">From</p>
          <p className="mt-1 text-sm text-ink font-medium">Indore, MP</p>
        </div>
        <div className="rounded-card border border-border bg-surface-2 p-3 min-[640px]:p-4">
          <p className="text-[11px] text-tertiary">To</p>
          <p className="mt-1 text-sm text-ink font-medium">Udaipur, RJ</p>
        </div>
      </div>

      <div className="mt-3 flex overflow-x-auto min-[420px]:flex-wrap gap-2 hide-scrollbar snap-x snap-mandatory px-1 -mx-1 py-1 -my-1">
        {["Fastest", "Economical", "Lower toll"].map((pref, i) => {
          const isSelected = pref === "Economical";
          return (
            <button
              key={pref}
              className="rounded-full border px-4 min-h-[44px] text-[13px] font-medium transition-colors snap-start flex-shrink-0 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:ring-offset-1"
              style={{
                backgroundColor: isSelected ? '#ff6a00' : '#ffffff',
                color: isSelected ? '#1a0b00' : '#454c60',
                borderColor: isSelected ? '#ff6a00' : '#e1e6ee'
              }}
            >
              {pref}
            </button>
          );
        })}
      </div>

      <div className="mt-4 h-px w-full bg-surface-2" />

      <div 
        className="mt-4 grid grid-cols-1 min-[420px]:grid-cols-2 min-[900px]:grid-cols-3"
        style={{ gap: 'clamp(10px, 1.6vw, 16px)' }}
      >
        {outputs.map(({ icon: Icon, label, value, subtext }) => (
          <div key={label} className="rounded-card border border-border bg-surface-2 p-3 min-[640px]:p-4 flex flex-col h-full min-w-[140px]">
            <Icon className="h-[18px] w-[18px]" style={{ color: '#d9500a' }} strokeWidth={2} />
            <div className="mt-auto pt-3">
              <p className="text-[11px] text-tertiary">{label}</p>
              <p className="mt-0.5 text-[14px] font-semibold text-ink">{value}</p>
              {subtext && (
                <p className="mt-1 text-[12px] text-tertiary/80 leading-tight">{subtext}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[12px] text-disabled leading-relaxed">
        Fuel and toll figures are estimates based on route and provider data, and may change with live conditions.
      </p>
    </div>
  );
}
