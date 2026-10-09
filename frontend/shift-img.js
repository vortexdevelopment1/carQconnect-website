const fs = require('fs');
let content = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');

content = content.replace(
  'overflow-hidden text-white mt-8 lg:mt-0 flex flex-col',
  'overflow-hidden text-white mt-8 lg:mt-[50px] flex flex-col'
);

fs.writeFileSync('app/(site)/gps/page.tsx', content, 'utf8');
