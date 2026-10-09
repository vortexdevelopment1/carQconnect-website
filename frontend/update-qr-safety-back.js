const fs = require('fs');
let content = fs.readFileSync('app/(site)/qr-safety/page.tsx', 'utf8');

content = content.replace(
  'fallback="/#features" label="Back"',
  'fallback="/features" label="Back to features"'
);

fs.writeFileSync('app/(site)/qr-safety/page.tsx', content, 'utf8');
