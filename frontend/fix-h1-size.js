const fs = require('fs');
let phContent = fs.readFileSync('components/sections/page-header.tsx', 'utf8');

phContent = phContent.replace(
  'text-[clamp(22px,6.5vw,56px)] font-[800] leading-[1.06]',
  'text-[28px] sm:text-[36px] md:text-[clamp(40px,6vw,56px)] font-[800] leading-[1.1] md:leading-[1.06]'
);

// Also add text-balance to make sure it wraps nicely
phContent = phContent.replace(
  'text-[#0f1220] max-w-[800px]',
  'text-[#0f1220] max-w-[800px] text-balance'
);

fs.writeFileSync('components/sections/page-header.tsx', phContent, 'utf8');
