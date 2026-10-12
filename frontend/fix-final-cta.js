const fs = require('fs');

let fcta = fs.readFileSync('components/sections/final-cta.tsx', 'utf8');

fcta = fcta.replace(
  'text-[14px] font-bold px-[28px] py-[15px]',
  'text-[clamp(12px,2vw,14px)] font-bold px-[clamp(18px,4vw,28px)] py-[clamp(11px,3vw,15px)]'
);
fcta = fcta.replace(
  'text-[14px] font-bold px-[28px] py-[15px]',
  'text-[clamp(12px,2vw,14px)] font-bold px-[clamp(18px,4vw,28px)] py-[clamp(11px,3vw,15px)]'
);

fs.writeFileSync('components/sections/final-cta.tsx', fcta, 'utf8');
