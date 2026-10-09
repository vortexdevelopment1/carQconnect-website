const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

// Inset the clipPath by 2.5% on all sides
content = content.replace(
  '<clipPath id="qrClip">\n          <rect x="0" y="0" width="1" height="1" />\n        </clipPath>',
  '<clipPath id="qrClip">\n          <rect x="0.025" y="0.025" width="0.95" height="0.95" />\n        </clipPath>'
);

// Also inset the scan line rect so it doesn't get hard-clipped on the edges
content = content.replace(
  '<rect x="0" y="-0.3" width="1" height="0.3" fill="url(#g)">',
  '<rect x="0.025" y="-0.3" width="0.95" height="0.3" fill="url(#g)">'
);

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
