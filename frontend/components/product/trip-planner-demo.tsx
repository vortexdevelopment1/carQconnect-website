import { Gauge, Fuel, TicketPercent, Wallet, Milestone } from "lucide-react";

const outputs = [
  { icon: Milestone, label: "Distance", value: "612 km" },
  { icon: Gauge, label: "Travel time", value: "~9h 40m" },
  { icon: Fuel, label: "Fuel needed", value: "~41 L (est.)" },
  { icon: TicketPercent, label: "Toll estimate", value: "₹680 (est.)" },
  { icon: Wallet, label: "Total trip cost", value: "₹4,950 (est.)" },
];

export function TripPlannerDemo() {
  return (
    <div className="rounded-card-lg border border-border bg-surface p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-card border border-border bg-surface-2 p-4">
          <p className="text-[11px] text-tertiary">From</p>
          <p className="mt-1 text-sm text-ink">Indore, MP</p>
        </div>
        <div className="rounded-card border border-border bg-surface-2 p-4">
          <p className="text-[11px] text-tertiary">To</p>
          <p className="mt-1 text-sm text-ink">Udaipur, RJ</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Fastest", "Economical", "Lower toll"].map((pref, i) => (
          <span
            key={pref}
            className={`rounded-full border px-3 py-1.5 text-[12px] ${
              i === 1
                ? "border-blue/40 bg-blue/10 text-blue"
                : "border-border text-tertiary"
            }`}
          >
            {pref}
          </span>
        ))}
      </div>

      <div className="mt-6 h-px w-full bg-surface-2" />

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {outputs.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-card border border-border bg-surface-2 p-4">
            <Icon className="h-4 w-4 text-blue" />
            <p className="mt-2 text-[11px] text-tertiary">{label}</p>
            <p className="mt-1 text-sm text-ink">{value}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[12px] text-disabled">
        Fuel and toll figures are estimates based on route and provider data, and may change with live conditions.
      </p>
    </div>
  );
}
