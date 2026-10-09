const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

// SVG masks use white for visible, black for hidden.
content = content.replace(/<stop offset="0.32" stop-color="#000" stop-opacity="1" \/>/, '<stop offset="0.32" stop-color="#fff" stop-opacity="1" />');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
