const fs = require('fs');

let ph = fs.readFileSync('components/sections/page-header.tsx', 'utf8');
ph = ph.replace(
  'className="relative z-10 max-w-[1360px] mx-auto px-6 flex flex-col items-start text-left font-display"',
  'className="container-page relative z-10 flex flex-col items-start text-left font-display"'
);
fs.writeFileSync('components/sections/page-header.tsx', ph, 'utf8');
