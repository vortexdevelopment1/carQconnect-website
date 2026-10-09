const fs = require('fs');
let qr = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');
qr = qr.replace('pt-[90px] md:pt-[100px]', 'pt-[70px] md:pt-[80px]');
fs.writeFileSync('app/(site)/qr-safety/page.tsx', qr, 'utf8');
