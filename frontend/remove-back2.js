const fs = require('fs');
let content = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');

content = content.replace(/.*<BackButton.*\n/g, '');

fs.writeFileSync('app/(site)/gps/page.tsx', content, 'utf8');
