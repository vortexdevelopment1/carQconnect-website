
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackButton({ fallback = "/", label = "Back", forceFallback = false }: { fallback?: string; label?: string; forceFallback?: boolean }) {
  const router = useRouter();

  // If we specify a specific fallback (like /features), and the label explicitly says it, 
  // it's safer to just navigate there directly.
  return (
    <Link
      href={fallback}
      className="inline-flex items-center gap-1.5 text-[12px] md:text-[14px] font-medium text-[#5B6070] transition-colors hover:text-[#FF5A00]"
      onClick={(e) => {
        // If it's a generic "Back" button, try history first. But if it says "Back to XYZ", it should just go there.
        if (label === "Back" && typeof window !== "undefined" && window.history.length > 2) {
          e.preventDefault();
          router.back();
        }
      }}
    >
      <ArrowLeft className="h-[18px] w-[18px]" />
      {label}
    </Link>
  );
}
