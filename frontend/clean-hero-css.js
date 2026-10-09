const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// remove the min-width: 1024px inline style block entirely from hero.tsx
// because it overrides globals.css
content = content.replace(/@media \(min-width: 1024px\) \{[\s\S]*?\}/, '');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
