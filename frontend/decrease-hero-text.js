const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');
content = content.replace(
  'font-size: clamp(16px, 1.5vw, 20px) !important;',
  'font-size: clamp(14px, 1.3vw, 18px) !important;'
);
fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
