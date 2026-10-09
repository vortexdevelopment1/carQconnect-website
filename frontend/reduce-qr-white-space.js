const fs = require('fs');

let qr = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');
qr = qr.replace('pb-12 md:pb-20', 'pb-6 md:pb-8');
fs.writeFileSync('app/(site)/qr-safety/page.tsx', qr, 'utf8');
