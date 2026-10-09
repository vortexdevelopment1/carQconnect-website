const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

content = content.replace(
  'font-size: clamp(32px, 4vw, 70px) !important;',
  'font-size: clamp(36px, 4.5vw, 78px) !important;'
);

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
