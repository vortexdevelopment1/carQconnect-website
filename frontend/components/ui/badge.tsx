import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

// Status & Badges per the design system: soft-tinted pill backgrounds with
// bold, high-contrast text. tone="info" doubles as the primary brand tone.
export function Badge({
  children,
  tone = "info",
  className,
}: {
  children: ReactNode;
  tone?: "info" | "success" | "danger" | "warning" | "neutral";
  className?: string;
}) {
  const tones: Record<string, string> = {
    info: "bg-blue-light text-blue border-blue/15",
    success: "bg-success-light text-success-dark border-success/20",
    danger: "bg-danger-light text-danger-dark border-danger/20",
    warning: "bg-warning-light text-warning-dark border-warning/25",
    neutral: "bg-surface-2 text-secondary border-border",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-label",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
