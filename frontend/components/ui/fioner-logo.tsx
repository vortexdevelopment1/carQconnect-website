import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FionerLogoProps {
  className?: string;
  iconOnly?: boolean;
  dark?: boolean; // if true, text is white; default is dark text (black)
  href?: string;
}

export function FionerLogo({
  className,
  iconOnly = false,
  dark = false,
  href = "/",
}: FionerLogoProps) {
  const content = (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {/* Icon Mark: Stylized Orange F with dual angled bars */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Top diagonal bar of F */}
        <path
          d="M6 7C6 6.44772 6.44772 6 7 6H25C25.8954 6 26.4545 6.96967 26.0071 7.74516L22.2571 14.2452C21.9022 14.8604 21.2407 15.2381 20.5286 15.2381H11.5L6 7Z"
          fill="#FF4D00"
        />
        {/* Lower diagonal bar of F */}
        <path
          d="M6 14C6 13.4477 6.44772 13 7 13H18.5C19.3954 13 19.9545 13.9697 19.5071 14.7452L16.2571 20.3802C15.9022 20.9954 15.2407 21.373 14.5286 21.373H11.5L6 14Z"
          fill="#FF4D00"
        />
        {/* Vertical left accent stem */}
        <path
          d="M6 7C6 6.44772 6.44772 6 7 6H10C10.5523 6 11 6.44772 11 7V25C11 25.5523 10.5523 26 10 26H7C6.44772 26 6 25.5523 6 25V7Z"
          fill="#FF4D00"
        />
      </svg>

      {!iconOnly && (
        <span
          className={cn(
            "font-sans font-bold text-2xl tracking-tight leading-none",
            dark ? "text-white" : "text-black"
          )}
        >
          fioner
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="carQconnect Home" className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
