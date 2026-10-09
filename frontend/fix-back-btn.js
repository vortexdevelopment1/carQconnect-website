const fs = require('fs');
let content = fs.readFileSync('components/ui/back-button.tsx', 'utf8');

// If the label is "Back to features", it is misleading if it goes somewhere else in history.
// We will add a forceFallback prop and use Link if provided, but since we have a lot of files,
// let's just make the button always use router.push(fallback) if fallback is provided,
// OR just replace router.back() with router.push(fallback) everywhere to solve the user's issue completely,
// as they specifically said "ye back to features vala btn features vale page me jana chahiye".

content = content.replace(
  'import { ArrowLeft } from "lucide-react";',
  'import { ArrowLeft } from "lucide-react";\nimport Link from "next/link";'
);

content = `
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
      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#5B6070] transition-colors hover:text-[#FF5A00] mb-8"
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
`;

fs.writeFileSync('components/ui/back-button.tsx', content, 'utf8');
