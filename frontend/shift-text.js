const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

content = content.replace('top: 23cqw !important;', 'top: 28cqw !important;');
content = content.replace('margin: 14px 0 24px 0 !important;', 'margin: 6px 0 24px 0 !important;');

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
