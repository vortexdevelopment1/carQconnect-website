const fs = require('fs');
let content = fs.readFileSync('components/sections/page-header.tsx', 'utf8');

// Reduce mobile font size clamp for PageHeader title
content = content.replace(
  'text-[clamp(34px,5vw,56px)]',
  'text-[clamp(26px,7vw,56px)]'
);

// Reduce mobile font size for paragraph
content = content.replace(
  'text-[16px]',
  'text-[15px] sm:text-[16px]'
);

fs.writeFileSync('components/sections/page-header.tsx', content, 'utf8');
