const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');
content = content.replace(
  /margin-left: auto !important;\s*\}/,
  'margin-left: auto !important;\n            transform: translateY(-24px) !important;\n          }'
);
fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
