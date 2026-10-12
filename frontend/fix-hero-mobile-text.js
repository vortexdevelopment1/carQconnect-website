const fs = require('fs');
let hero = fs.readFileSync('components/sections/hero.tsx', 'utf8');

hero = hero.replace(
  'font-size: clamp(15px, 5.4vw, 28px) !important;',
  'font-size: clamp(12px, 4.5vw, 24px) !important;'
);

fs.writeFileSync('components/sections/hero.tsx', hero, 'utf8');
