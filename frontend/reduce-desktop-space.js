const fs = require('fs');

// 1. PageHeader
let phContent = fs.readFileSync('components/sections/page-header.tsx', 'utf8');
phContent = phContent.replace(
  'pb-[clamp(20px,5vw,48px)]',
  'pb-8 md:pb-12'
);
fs.writeFileSync('components/sections/page-header.tsx', phContent, 'utf8');

// 2. VehicleUtilitiesSection
let vuContent = fs.readFileSync('components/sections/vehicle-utilities-section.tsx', 'utf8');
vuContent = vuContent.replace(
  'py-[clamp(28px,6vw,56px)]',
  'pt-[clamp(24px,4vw,48px)] pb-[clamp(28px,6vw,56px)]'
);
fs.writeFileSync('components/sections/vehicle-utilities-section.tsx', vuContent, 'utf8');
