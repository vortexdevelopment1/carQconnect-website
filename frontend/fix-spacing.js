const fs = require('fs');

// 1. Remove mb-8 from BackButton
let bbContent = fs.readFileSync('components/ui/back-button.tsx', 'utf8');
bbContent = bbContent.replace(' mb-8"', '"');
fs.writeFileSync('components/ui/back-button.tsx', bbContent, 'utf8');

// 2. Reduce mobile h1 size in PageHeader
let phContent = fs.readFileSync('components/sections/page-header.tsx', 'utf8');
phContent = phContent.replace(
  'text-[28px]',
  'text-[24px]'
);
fs.writeFileSync('components/sections/page-header.tsx', phContent, 'utf8');

// 3. Make SectionHeading smaller on mobile
let shContent = fs.readFileSync('components/ui/section-heading.tsx', 'utf8');
shContent = shContent.replace(
  'text-h2 md:text-h1',
  'text-[22px] md:text-[32px] lg:text-[42px] leading-tight font-[800]'
);
shContent = shContent.replace(
  'mt-4',
  'mt-2 md:mt-4'
);
fs.writeFileSync('components/ui/section-heading.tsx', shContent, 'utf8');
