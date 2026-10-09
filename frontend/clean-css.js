const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

const regex = /\.hero__qr-scanner \{[\s\S]*?@keyframes qrIsometricScan \{[\s\S]*?\}\s*\}/g;
content = content.replace(regex, '');

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
