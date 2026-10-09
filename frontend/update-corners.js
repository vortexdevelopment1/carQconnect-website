const fs = require('fs');
let content = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

const oldCorners = `const QR_CORNERS = [
  [33.5, 48.0], // Top Left
  [41.5, 52.0], // Top Right
  [35.0, 62.0], // Bottom Right
  [27.0, 58.0]  // Bottom Left
];`;

const newCorners = `const QR_CORNERS = [
  [29.93, 47.79], // Top 
  [35.34, 54.31], // Right 
  [30.02, 60.88], // Bottom 
  [24.30, 54.44]  // Left 
];`;

content = content.replace(oldCorners, newCorners);

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
