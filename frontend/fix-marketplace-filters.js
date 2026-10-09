const fs = require('fs');

let content = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');

// Change overflow-x-auto to flex-wrap
content = content.replace(
  'gap-3 overflow-x-auto hide-scrollbar snap-x snap-mandatory',
  'gap-2 md:gap-3 flex-wrap'
);

// Reduce button padding and font size for mobile
content = content.replace(
  'px-5 min-h-[44px] snap-start text-[14px]',
  'px-3 md:px-5 min-h-[38px] md:min-h-[44px] text-[13px] md:text-[14px]'
);

fs.writeFileSync('app/(site)/marketplace/client-page.tsx', content, 'utf8');
