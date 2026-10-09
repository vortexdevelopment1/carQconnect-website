const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

content = content.replace('matrix(23.0 15.0 -21.0 15.8 52.5 83)', 'matrix(20.2 15.94 -25.4 14.44 53.24 85.49)');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
