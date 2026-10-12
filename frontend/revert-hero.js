const fs = require('fs');

let hero = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// 1. Revert mobile translateY to push it back down (it was overlapping nav on 337px)
hero = hero.replace(
  'transform: translateY(clamp(-20px, -4vw, 0px)) !important; z-index: 10;',
  'transform: translateY(clamp(8px, 3vw, 16px)) !important;'
);

// 2. Revert tablet translateY to its original value because the xMinYMax slice was the real issue
hero = hero.replace(
  'transform: translateY(clamp(-80px, -7vw, -40px)) !important; z-index: 10;',
  'transform: translateY(clamp(12px, 2vw, 22px)) !important;'
);

fs.writeFileSync('components/sections/hero.tsx', hero, 'utf8');

let scanner = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');
// 3. Restore xMidYMax slice on the SVG canvas to fix the 985px overlap
scanner = scanner.replace(
  'preserveAspectRatio="xMinYMax slice"',
  'preserveAspectRatio="xMidYMax slice"'
);
fs.writeFileSync('components/qr/hero-qr-scanner.tsx', scanner, 'utf8');

