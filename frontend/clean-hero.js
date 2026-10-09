const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

// I will remove all hero blocks and replace them with a unified block at the end.
content = content.replace(/\.hero[\s\S]*?(?=\/\* ----------------------------------------------------------------- copy \*\/)/, '');
content = content.replace(/\/\* ----------------------------------------------------------------- copy \*\/[\s\S]*?(?=\/\* ----------------------------------------------------------------- )/, '');

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
