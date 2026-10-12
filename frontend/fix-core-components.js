const fs = require('fs');

let ph = fs.readFileSync('components/sections/page-header.tsx', 'utf8');
ph = ph.replace(
  'className="font-display text-[clamp(24px,6.4vw,54px)] font-[800] leading-[1.1] tracking-[-0.02em] text-[#0f1220] max-w-[800px] text-balance mb-2 md:mb-[12px]"',
  'className="font-display font-[800] text-[#0f1220] max-w-[800px] mb-2 md:mb-[12px]"'
);
ph = ph.replace(
  'className="text-[15px] sm:text-[16px] text-[#454c60] max-w-[560px] leading-[1.6]"',
  'className="text-[#454c60] max-w-[560px]"'
);
fs.writeFileSync('components/sections/page-header.tsx', ph, 'utf8');

let sh = fs.readFileSync('components/ui/section-heading.tsx', 'utf8');
sh = sh.replace(
  'className="font-display text-[22px] md:text-[32px] lg:text-[42px] leading-tight font-[800] text-ink text-balance"',
  'className="font-display font-[800] text-ink"'
);
sh = sh.replace(
  'className="mt-2 md:mt-4 text-body-lg text-secondary"',
  'className="mt-2 md:mt-4 text-secondary"'
);
fs.writeFileSync('components/ui/section-heading.tsx', sh, 'utf8');
