const fs = require('fs');
let content = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');

content = content.replace(
  'fallback="/#features" label="Back"',
  'fallback="/features" label="Back to features"'
);

fs.writeFileSync('app/(site)/marketplace/client-page.tsx', content, 'utf8');
