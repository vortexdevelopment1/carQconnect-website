const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

// Replace the current matrix with the rotated and shifted one
content = content.replace('matrix(22.1 15.3 -23.2 15.4 51.5 87.5)', 'matrix(22.5 14.8 -22.5 16 52 84.5)');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
