const fs = require('fs');
let qr = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');

// 1. Remove inline font size from h2
qr = qr.replace(/ style=\{\{ fontSize: 'clamp\(30px,4vw,46px\)' \}\}/, '');

// 2. Make static text sizes fluid
qr = qr.replace(/text-\[16px\]/g, 'text-[clamp(14px,2vw,16px)]');
qr = qr.replace(/text-\[14px\]/g, 'text-[clamp(12px,1.5vw,14px)]');
qr = qr.replace(/text-\[13.5px\]/g, 'text-[clamp(11px,1.3vw,13.5px)]');
qr = qr.replace(/text-\[13px\]/g, 'text-[clamp(11px,1.2vw,13px)]');
qr = qr.replace(/text-\[12.5px\]/g, 'text-[clamp(10px,1.1vw,12.5px)]');
qr = qr.replace(/text-\[12px\]/g, 'text-[clamp(10px,1vw,12px)]');
qr = qr.replace(/text-\[24px\]/g, 'text-[clamp(18px,3vw,24px)]');

fs.writeFileSync('components/qr/qr-scanner-demo.tsx', qr, 'utf8');
