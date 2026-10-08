const fs = require('fs');
let content = fs.readFileSync('components/footer/footer.tsx', 'utf8');
content = content.replace(/â†’/g, '&rarr;');
content = content.replace(/â†‘/g, '&uarr;');
fs.writeFileSync('components/footer/footer.tsx', content, 'utf8');
