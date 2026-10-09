const fs = require('fs');
let content = fs.readFileSync('app/(site)/features/page.tsx', 'utf8');

content = content.replace(
  'text-[18px]',
  'text-[17px] sm:text-[18px]'
);

fs.writeFileSync('app/(site)/features/page.tsx', content, 'utf8');
