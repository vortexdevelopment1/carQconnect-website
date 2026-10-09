const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// Remove the whole <style> block
content = content.replace(/<style>\{`[\s\S]*?`\}<\/style>/, '');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
