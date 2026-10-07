import { PageHeader } from "@/components/sections/page-header";
import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={`Last updated: ${updated}`} />
      <section className="bg-background pb-28">
        <div className="container-page max-w-2xl space-y-6 text-[14px] leading-relaxed text-secondary">
          {children}
        </div>
      </section>
    </>
  );
}
