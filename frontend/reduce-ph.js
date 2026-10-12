const fs = require('fs');
let phContent = fs.readFileSync('components/sections/page-header.tsx', 'utf8');
phContent = phContent.replace(
  '<div className="mb-4">{backButton}</div>',
  '<div className="mb-1 md:mb-2">{backButton}</div>'
);
fs.writeFileSync('components/sections/page-header.tsx', phContent, 'utf8');
