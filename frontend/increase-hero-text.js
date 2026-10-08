const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');
content = content.replace(
  'font-size: clamp(14px, 1.05vw, 17px) !important;',
  'font-size: clamp(16px, 1.5vw, 20px) !important;'
);
content = content.replace(
  'max-width: 520px !important;',
  'max-width: 580px !important;'
);
fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
