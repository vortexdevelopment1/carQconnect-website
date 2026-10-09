const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

// Undo top shift
content = content.replace('top: 28cqw !important;', 'top: 23cqw !important;');
// Undo margin shrink
content = content.replace('margin: 6px 0 24px 0 !important;', 'margin: 14px 0 24px 0 !important;');
// Undo font size increase
content = content.replace('font-size: clamp(14px, 5.5cqw, 82px) !important;', 'font-size: clamp(11px, 4.7cqw, 80px) !important;');

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
