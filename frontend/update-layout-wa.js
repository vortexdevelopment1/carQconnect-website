const fs = require('fs');

let layout = fs.readFileSync('app/(site)/layout.tsx', 'utf8');

layout = layout.replace(
  'import { WhatsAppCta } from "@/components/sections/whatsapp-cta";',
  'import WhatsAppFloat from "@/components/whatsapp-float";'
);

layout = layout.replace(
  '<WhatsAppCta />',
  '<WhatsAppFloat />'
);

fs.writeFileSync('app/(site)/layout.tsx', layout, 'utf8');
