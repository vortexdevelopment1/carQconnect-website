const fs = require('fs');

// GPS Page
let gps = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');
gps = gps.replace('max-md:-mt-[50px]', 'max-md:-mt-[35px]');
fs.writeFileSync('app/(site)/gps/page.tsx', gps, 'utf8');

// Marketplace Page
let market = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');
market = market.replace('max-md:-mt-[45px]', 'max-md:-mt-[35px]');
fs.writeFileSync('app/(site)/marketplace/client-page.tsx', market, 'utf8');

// QR Safety Page
let qr = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');
qr = qr.replace('max-md:-mt-[50px]', 'max-md:-mt-[35px]');
fs.writeFileSync('app/(site)/qr-safety/page.tsx', qr, 'utf8');
