import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

// Variants follow the carQconnect Button System:
// Primary (solid royal blue), Secondary (soft blue-tinted), Outline
// (bordered), Destructive/SOS (red), Disabled handled via the `disabled`
// attribute on native buttons.
const variants: Record<string, string> = {
  primary:
    "bg-[#ff4d00] text-white hover:bg-[#e04400] shadow-[0_4px_20px_rgba(255,77,0,0.35)] transition-all duration-300",
  secondary:
    "bg-[#ff4d00]/10 text-[#ff4d00] hover:bg-[#ff4d00]/20 border border-[#ff4d00]/25 transition-all duration-300",
  outline:
    "bg-transparent text-neutral-900 border border-black/15 hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all duration-300",
  ghost: "bg-white/80 text-neutral-900 border border-black/10 hover:bg-white hover:border-[#ff4d00]/40 transition-all duration-300",
  danger: "bg-danger text-white hover:bg-danger-dark shadow-soft",
};

const sizes: Record<string, string> = {
  sm: "text-[13px] px-4 py-2 min-h-[40px]",
  md: "text-btn-text px-5 py-3 min-h-[48px]",
  lg: "text-[15px] font-semibold px-7 py-4 min-h-[52px]",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-btn font-medium tracking-[-0.01em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={"type" in props ? props.type ?? "button" : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={classes}
    >
      {children}
    </button>
  );
}
