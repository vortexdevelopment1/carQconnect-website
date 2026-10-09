const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

content = content.replace('matrix(21.5 16.4 -23.5 14.4 53 83.5)', 'matrix(23.0 15.0 -21.0 15.8 52.5 83)');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
