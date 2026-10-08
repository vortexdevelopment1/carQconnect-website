const fs = require('fs');

// Update CSS
let css = fs.readFileSync('app/(site)/globals.css', 'utf8');
css = css.replace('padding: 16px 28px;', 'padding: 12px 20px;');
css = css.replace('gap: 12px;', 'gap: 8px;');
css = css.replace('font-size: 15px;', 'font-size: 14.5px;');
css = css.replace('padding: 16px;\n    gap: 0;', 'padding: 14px;\n    gap: 0;');
fs.writeFileSync('app/(site)/globals.css', css, 'utf8');

// Update SVG size
let tsx = fs.readFileSync('components/sections/whatsapp-cta.tsx', 'utf8');
tsx = tsx.replace('width="24"', 'width="20"');
tsx = tsx.replace('height="24"', 'height="20"');
fs.writeFileSync('components/sections/whatsapp-cta.tsx', tsx, 'utf8');

