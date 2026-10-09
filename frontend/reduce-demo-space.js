const fs = require('fs');
let demo = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');

demo = demo.replace('px-6 py-8 md:py-10', 'px-6 pt-4 pb-8 md:py-10');

fs.writeFileSync('components/qr/qr-scanner-demo.tsx', demo, 'utf8');
