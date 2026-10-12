import React from 'react';
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="font-display font-[800] text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-2 md:mt-4 text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
