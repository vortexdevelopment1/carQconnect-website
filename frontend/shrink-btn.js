const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

content = content.replace('height: clamp(28px, 9.5cqw, 50px) !important;', 'height: clamp(24px, 8cqw, 46px) !important;');
content = content.replace('font-size: clamp(10px, 3.5cqw, 16px) !important;', 'font-size: clamp(9px, 3cqw, 15px) !important;');
content = content.replace('padding: 0 2.2em 0 1.4em !important;', 'padding: 0 2em 0 1.2em !important;');

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
