import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  backButton,
  children,
}: {
  eyebrow?: string;
  backButton?: ReactNode;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section 
      className="relative pt-[120px] pb-[40px] overflow-hidden"
      style={{ background: 'radial-gradient(60% 120% at 90% 0%, rgba(255,106,0,.28) 0%, rgba(255,106,0,0) 62%), linear-gradient(180deg, #fff1e3 0%, #f7f9fc 100%)' }}
    >
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 flex flex-col items-start text-left font-display">
        {backButton && <div className="mb-4">{backButton}</div>}
        <h1 className="text-[clamp(26px,7vw,56px)] font-[800] leading-[1.06] tracking-[-0.025em] text-[#0f1220] max-w-[800px] mb-[12px]">
          {title}
        </h1>
        {description && (
          <p className="text-[15px] sm:text-[16px] text-[#454c60] max-w-[560px] leading-[1.6]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
