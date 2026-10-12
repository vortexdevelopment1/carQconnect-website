const fs = require('fs');

let pc = fs.readFileSync('components/sections/privacy-control.tsx', 'utf8');

// Fix the paragraph margin (mb-10 -> mb-6 md:mb-10)
pc = pc.replace(
  'className="text-[16px] sm:text-[17px] leading-[1.6] text-[#5B6070] max-w-[540px] mb-10"',
  'className="text-[16px] sm:text-[17px] leading-[1.6] text-[#5B6070] max-w-[540px] mb-6 md:mb-10"'
);

// Fix the Create Account button
pc = pc.replace(
  'text-[13px] font-bold uppercase tracking-[0.06em] px-[24px] py-[14px]',
  'text-[clamp(11px,2vw,13px)] font-bold uppercase tracking-[0.06em] px-[clamp(16px,4vw,24px)] py-[clamp(10px,3vw,14px)]'
);

// Fix the massive gap between the button and the mock-up
pc = pc.replace(
  'className="grid gap-[40px] items-center lg:grid-cols-2"',
  'className="grid gap-[24px] lg:gap-[40px] items-center lg:grid-cols-2"'
);
pc = pc.replace(
  '[@media(max-width:959px)]:mt-8',
  '[@media(max-width:959px)]:mt-2'
);

fs.writeFileSync('components/sections/privacy-control.tsx', pc, 'utf8');
