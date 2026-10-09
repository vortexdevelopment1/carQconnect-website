const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

// The original matrix: matrix(21.9 16.9 -24.4 15 50 85.6)
// We will replace it with a more aligned one.
content = content.replace('matrix(21.9 16.9 -24.4 15 50 85.6)', 'matrix(22.1 15.3 -23.2 15.4 51.5 87.5)');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
