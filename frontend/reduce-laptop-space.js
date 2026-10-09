const fs = require('fs');

// QR Safety Page
let qr = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');
qr = qr.replace('pb-0 md:pb-8', 'pb-0 md:pb-2');
fs.writeFileSync('app/(site)/qr-safety/page.tsx', qr, 'utf8');

// QR Scanner Demo
let demo = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');
demo = demo.replace('md:py-10', 'md:pt-6 md:pb-10');
fs.writeFileSync('components/qr/qr-scanner-demo.tsx', demo, 'utf8');

