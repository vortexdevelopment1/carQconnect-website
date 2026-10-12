const fs = require('fs');
let pc = fs.readFileSync('components/sections/privacy-control.tsx', 'utf8');

pc = pc.replace(
  'className="text-[12.5px] font-semibold text-[#5B6070]"',
  'className="text-[clamp(11px,1.8vw,12.5px)] font-semibold text-[#5B6070]"'
);

fs.writeFileSync('components/sections/privacy-control.tsx', pc, 'utf8');
