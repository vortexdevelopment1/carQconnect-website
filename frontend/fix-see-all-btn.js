const fs = require('fs');
let file = fs.readFileSync('components/sections/connected-systems.tsx', 'utf8');

file = file.replace(
  'text-[15px] font-bold text-white bg-[#0C0C0E] hover:bg-[#FF5A00] hover:-translate-y-1 transition-all duration-300 py-3.5 px-7',
  'text-[clamp(13px,2vw,15px)] font-bold text-white bg-[#0C0C0E] hover:bg-[#FF5A00] hover:-translate-y-1 transition-all duration-300 py-[clamp(10px,2.5vw,14px)] px-[clamp(18px,4vw,28px)]'
);

fs.writeFileSync('components/sections/connected-systems.tsx', file, 'utf8');
