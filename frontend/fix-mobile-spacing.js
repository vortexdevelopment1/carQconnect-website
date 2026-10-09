const fs = require('fs');

// GPS Page
let gps = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');
// Fix Back button position for mobile
gps = gps.replace(
  '<div className="mb-2 -mt-2">',
  '<div className="mb-2 max-md:-mt-[50px] md:-mt-2">'
);
// Reduce space above image on mobile
gps = gps.replace(
  'mt-8 lg:mt-[50px]',
  'mt-4 lg:mt-[50px]'
);
// Reduce space below image on mobile (section bottom padding)
gps = gps.replace(
  'pb-12 md:pb-20',
  'pb-6 md:pb-20'
);
fs.writeFileSync('app/(site)/gps/page.tsx', gps, 'utf8');

// Marketplace Page
let market = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');
market = market.replace(
  '<div className="mb-2 -mt-4">',
  '<div className="mb-2 max-md:-mt-[45px] md:-mt-4">'
);
market = market.replace(
  'pb-[36px]',
  'pb-[16px] md:pb-[36px]'
);
fs.writeFileSync('app/(site)/marketplace/client-page.tsx', market, 'utf8');

// QR Safety Page
let qr = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');
qr = qr.replace(
  '<div className="mb-2 -mt-2">',
  '<div className="mb-2 max-md:-mt-[50px] md:-mt-2">'
);
fs.writeFileSync('app/(site)/qr-safety/page.tsx', qr, 'utf8');
