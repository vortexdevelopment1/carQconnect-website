const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

content = content.replace('matrix(22.0 15.6 -23.0 15.2 52 84.5)', 'matrix(21.5 16.4 -23.5 14.4 53 83.5)');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
