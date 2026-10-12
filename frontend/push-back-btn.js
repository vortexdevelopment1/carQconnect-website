const fs = require('fs');
let ph = fs.readFileSync('components/sections/page-header.tsx', 'utf8');

// Increase margin top of the back button specifically to move it away from the logo
ph = ph.replace(
  'mt-2 md:mt-4 mb-2 md:mb-4',
  'mt-8 md:mt-6 mb-2 md:mb-4'
);

fs.writeFileSync('components/sections/page-header.tsx', ph, 'utf8');
