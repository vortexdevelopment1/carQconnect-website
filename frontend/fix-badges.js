const fs = require('fs');

let mkt = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');

mkt = mkt.replace(
  /className="absolute top-5 right-5 z-20 rounded-full bg-\[#e6f7ee\] text-\[#0b6b3a\] px-3 py-1 text-\[12px\] font-bold"/g,
  'className="absolute top-5 left-5 z-20 rounded-full bg-[#e6f7ee] text-[#0b6b3a] px-3 py-1 text-[12px] font-bold"'
);

fs.writeFileSync('app/(site)/marketplace/client-page.tsx', mkt, 'utf8');
