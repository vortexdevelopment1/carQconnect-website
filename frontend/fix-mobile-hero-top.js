const fs = require('fs');

let hero = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// Update mobile exception to shift it all the way up to just below the navbar
hero = hero.replace(
  'top: 24% !important;\n            transform: translateY(-10px) !important;',
  'top: clamp(70px, 15vw, 90px) !important;\n            transform: none !important;'
);

fs.writeFileSync('components/sections/hero.tsx', hero, 'utf8');
