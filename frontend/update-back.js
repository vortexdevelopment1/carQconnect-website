const fs = require('fs');

// QR Page
let qr = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');
qr = qr.replace('label="Back to Features"', 'label="Back"');
qr = qr.replace('className="mb-5"><BackButton', 'className="mb-2 -mt-2"><BackButton');
fs.writeFileSync('app/(site)/qr-safety/page.tsx', qr, 'utf8');

// GPS Page
let gps = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');
gps = gps.replace('label="Back to Features"', 'label="Back"');
gps = gps.replace('className="mb-5"><BackButton', 'className="mb-2 -mt-2"><BackButton');
gps = gps.replace('pt-[90px] md:pt-[100px]', 'pt-[70px] md:pt-[80px]');
fs.writeFileSync('app/(site)/gps/page.tsx', gps, 'utf8');

// Marketplace Page
let market = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');
market = market.replace('label="Back to Features"', 'label="Back"');
market = market.replace('className="mb-4"><BackButton', 'className="mb-2 -mt-4"><BackButton');
market = market.replace('pt-[108px]', 'pt-[76px]');
fs.writeFileSync('app/(site)/marketplace/client-page.tsx', market, 'utf8');
