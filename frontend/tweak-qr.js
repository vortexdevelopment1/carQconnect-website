const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

content = content.replace('matrix(26 17.75 -27.1 18.1 144 130)', 'matrix(26 17.75 -27.1 18.1 144 128.75)');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
