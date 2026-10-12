const fs = require('fs');
let content = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');

content = content.replace(
  '<div className="absolute top-5 right-5 rounded-full bg-[#e6f7ee] text-[#0b6b3a] px-3 py-1 text-[12px] font-bold">',
  '<div className="absolute top-5 right-5 z-20 rounded-full bg-[#e6f7ee] text-[#0b6b3a] px-3 py-1 text-[12px] font-bold">'
);

fs.writeFileSync('app/(site)/marketplace/client-page.tsx', content, 'utf8');
