const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

// Undo the inset
content = content.replace(/<clipPath id="qrClip">\s*<rect x="[0-9.]+" y="[0-9.]+" width="[0-9.]+" height="[0-9.]+" \/>\s*<\/clipPath>/, '<clipPath id="qrClip">\n          <rect x="0.01" y="0.01" width="0.98" height="0.98" />\n        </clipPath>');

content = content.replace(/<rect x="[0-9.]+" y="-0.3" width="[0-9.]+" height="0.3" fill="url\(#g\)">/, '<rect x="0.01" y="-0.3" width="0.98" height="0.3" fill="url(#g)">');

// Shift X right by changing e from 144 to 145.5
content = content.replace(/matrix\(26 17\.75 -27\.1 18\.1 144 128\.75\)/, 'matrix(26 17.75 -27.1 18.1 145.5 128.75)');

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
