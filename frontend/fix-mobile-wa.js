const fs = require('fs');
let content = fs.readFileSync('components/whatsapp-float.tsx', 'utf8');

content = content.replace(
  'if (atTop && hero) {',
  'if (window.innerWidth >= 640 && atTop && hero) {'
);

fs.writeFileSync('components/whatsapp-float.tsx', content, 'utf8');
