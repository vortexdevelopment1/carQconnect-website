const fs = require('fs');

let hero = fs.readFileSync('components/sections/hero.tsx', 'utf8');

hero = hero.replace(
  'transform: translateY(clamp(-30px, -4vw, 0px)) !important; z-index: 10;',
  'transform: translateY(clamp(-80px, -7vw, -40px)) !important; z-index: 10;'
);

fs.writeFileSync('components/sections/hero.tsx', hero, 'utf8');
