const fs = require('fs');
let content = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');

content = content.replace(
  'className="relative pt-[76px] pb-[16px] md:pb-[36px] overflow-hidden"',
  'className="relative pt-[76px] pb-[48px] md:pb-[64px] overflow-visible"'
);

// Also the wrapper might have a fixed height if not careful, but flex column is fine.
// Ensure the grid has enough bottom margin just in case.
content = content.replace(
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">',
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-full mb-4">'
);

fs.writeFileSync('app/(site)/marketplace/client-page.tsx', content, 'utf8');
