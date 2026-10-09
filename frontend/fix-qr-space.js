const fs = require('fs');
let content = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');

content = content.replace(
  'className="relative overflow-hidden bg-[#FFFFFF] pt-40 pb-24 border-b border-[#ECEEF4]"',
  'className="relative overflow-hidden bg-[#FFFFFF] pt-[100px] md:pt-[130px] pb-24 border-b border-[#ECEEF4]"'
);

content = content.replace(
  '<div className="pt-8"><BackButton fallback="/#features" label="Back to Features" /></div>',
  '<div className="mb-10"><BackButton fallback="/#features" label="Back to Features" /></div>'
);

fs.writeFileSync('app/(site)/qr-safety/page.tsx', content, 'utf8');
