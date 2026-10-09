const fs = require('fs');

// GPS PAGE
let gps = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');
gps = gps.replace(
  '<div className="flex flex-col">',
  '<div className="flex flex-col">\n            <div className="mb-5"><BackButton fallback="/#features" label="Back to Features" /></div>'
);
fs.writeFileSync('app/(site)/gps/page.tsx', gps, 'utf8');

// MARKETPLACE PAGE
let market = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');
market = market.replace(
  '<div className="relative z-10 max-w-[1360px] mx-auto px-6 flex flex-col items-start text-left">',
  '<div className="relative z-10 max-w-[1360px] mx-auto px-6 flex flex-col items-start text-left">\n          <div className="mb-4"><BackButton fallback="/#features" label="Back to Features" /></div>'
);
fs.writeFileSync('app/(site)/marketplace/client-page.tsx', market, 'utf8');
