const fs = require('fs');

const content = `import { SectionHeading } from "@/components/ui/section-heading";
import { AiChatDemo } from "@/components/product/ai-chat-demo";

export function AiSection() {
  return (
    <section className="bg-[#f4f4f5] border-b border-black/10" style={{ paddingBlock: 'clamp(36px, 6vw, 64px)' }}>
      <div 
        className="container-page mx-auto w-full max-w-[1120px] 2xl:max-w-[1240px] px-[clamp(16px,4vw,24px)] flex flex-col min-[900px]:flex-row items-center justify-between"
        style={{ gap: 'clamp(24px, 5vw, 56px)' }}
      >
        <div className="w-full min-[900px]:max-w-[520px]">
          <SectionHeading
            title="Just ask carQconnect."
            description="carQconnect AI connects natural-language requests to trip planning, fuel and toll estimates, GPS status, orders, membership and support - always within your approved account permissions."
          />
          <ul className="text-[clamp(14px,1.8vw,16px)] text-neutral-700" style={{ marginTop: 'clamp(20px, 3vw, 32px)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li className="flex items-start gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6a00] mt-[8px]" />
              <span className="leading-relaxed">Understands trip, tracking and support requests in plain language</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6a00] mt-[8px]" />
              <span className="leading-relaxed">Explains why a route or recommendation was chosen</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6a00] mt-[8px]" />
              <span className="leading-relaxed">Asks for confirmation before purchases or sensitive actions</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6a00] mt-[8px]" />
              <span className="leading-relaxed">Escalates to a human when it can't confidently help</span>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-[560px] min-[900px]:max-w-none flex-1 mx-auto min-[900px]:mx-0">
          <AiChatDemo />
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('components/sections/ai-section.tsx', content, 'utf8');
