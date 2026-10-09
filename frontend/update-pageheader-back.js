const fs = require('fs');

let content = fs.readFileSync('components/sections/page-header.tsx', 'utf8');

content = content.replace(
  'eyebrow?: string;',
  'eyebrow?: string;\n  backButton?: ReactNode;'
);

content = content.replace(
  'description,',
  'description,\n  backButton,'
);

content = content.replace(
  '<div className="relative z-10 max-w-[1360px] mx-auto px-6 flex flex-col items-start text-left font-display">',
  '<div className="relative z-10 max-w-[1360px] mx-auto px-6 flex flex-col items-start text-left font-display">\n        {backButton && <div className="mb-4">{backButton}</div>}'
);

fs.writeFileSync('components/sections/page-header.tsx', content, 'utf8');
