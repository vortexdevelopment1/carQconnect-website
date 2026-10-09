const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// Remove eyelet
content = content.replace('<span className="buy__eyelet" aria-hidden="true" />\n          ', '');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
