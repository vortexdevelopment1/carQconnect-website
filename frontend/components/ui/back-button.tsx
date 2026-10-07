"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton({ fallback = "/", label = "Back" }: { fallback?: string; label?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 2) {
          router.back();
        } else {
          router.push(fallback);
        }
      }}
      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#5B6070] transition-colors hover:text-[#FF5A00] mb-8"
    >
      <ArrowLeft className="h-[18px] w-[18px]" />
      {label}
    </button>
  );
}
