const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

content = content.replace('matrix(22.5 14.8 -22.5 16 52 84.5)', 'matrix(22.0 15.6 -23.0 15.2 52 84.5)');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
