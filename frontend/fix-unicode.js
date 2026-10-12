const fs = require('fs');
let content = fs.readFileSync('app/(site)/vehicle-utilities/page.tsx', 'utf8');
content = content.replace(/\ufffd\?/g, '-');
content = content.replace(/\ufffd/g, '-');
fs.writeFileSync('app/(site)/vehicle-utilities/page.tsx', content, 'utf8');
