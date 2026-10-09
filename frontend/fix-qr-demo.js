const fs = require('fs');
let content = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');

// Replace the connector margins
content = content.replace(
  'className="relative z-10 -my-[22px] flex items-center justify-center md:-mx-[22px] md:my-0"',
  'className="relative z-10 my-[16px] flex items-center justify-center md:-mx-[22px] md:my-0"'
);

fs.writeFileSync('components/qr/qr-scanner-demo.tsx', content, 'utf8');
