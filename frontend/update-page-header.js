const fs = require('fs');
let phContent = fs.readFileSync('components/sections/page-header.tsx', 'utf8');

// Reduce h1 minimum size for very small screens
phContent = phContent.replace(
  'text-[clamp(26px,7vw,56px)]',
  'text-[clamp(22px,6.5vw,56px)]'
);

// Reduce gap between heading and text
phContent = phContent.replace(
  'mb-[12px]',
  'mb-2 md:mb-[12px]'
);

// Reduce top padding on mobile
phContent = phContent.replace(
  '"pt-[120px] pb-[40px]"',
  '"pt-[90px] md:pt-[120px] pb-6 md:pb-[40px]"'
);

// In case the backButton wrapper has margin
phContent = phContent.replace(
  '<div className="mb-1 md:mb-2">{backButton}</div>',
  '<div className="mb-1 md:mb-3">{backButton}</div>'
);

fs.writeFileSync('components/sections/page-header.tsx', phContent, 'utf8');
