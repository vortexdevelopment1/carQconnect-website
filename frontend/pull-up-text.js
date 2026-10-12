const fs = require('fs');

let hero = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// For Tablet (640px - 1023px), pull the text up to reduce gap from nav
hero = hero.replace(
  'transform: translateY(clamp(12px, 2vw, 22px)) !important;',
  'transform: translateY(clamp(-30px, -4vw, 0px)) !important; z-index: 10;'
);

fs.writeFileSync('components/sections/hero.tsx', hero, 'utf8');
