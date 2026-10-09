const fs = require('fs');
let content = fs.readFileSync('app/(site)/safety/page.tsx', 'utf8');

content = content.replace(
  'title="When every second matters."',
  'title="SOS and emergency safety"'
);

fs.writeFileSync('app/(site)/safety/page.tsx', content, 'utf8');
