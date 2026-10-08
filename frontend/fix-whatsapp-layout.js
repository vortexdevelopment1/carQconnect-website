const fs = require('fs');
let layout = fs.readFileSync('app/(site)/layout.tsx', 'utf8');
layout = layout.replace('<Footer />', '<Footer />\n        <WhatsAppCta />');
fs.writeFileSync('app/(site)/layout.tsx', layout, 'utf8');
