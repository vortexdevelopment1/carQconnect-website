const fs = require('fs');

// Add to layout
let layout = fs.readFileSync('app/(site)/layout.tsx', 'utf8');
layout = layout.replace(
  'import { Footer } from "@/components/footer/footer";',
  'import { Footer } from "@/components/footer/footer";\nimport { WhatsAppCta } from "@/components/sections/whatsapp-cta";'
);
layout = layout.replace(
  '<Footer />\n      </body>',
  '<Footer />\n        <WhatsAppCta />\n      </body>'
);
fs.writeFileSync('app/(site)/layout.tsx', layout, 'utf8');

// Remove from page
let page = fs.readFileSync('app/(site)/page.tsx', 'utf8');
page = page.replace('import { WhatsAppCta } from "@/components/sections/whatsapp-cta";\n', '');
page = page.replace(/\s*<WhatsAppCta \/>\n/g, '\n');
fs.writeFileSync('app/(site)/page.tsx', page, 'utf8');
