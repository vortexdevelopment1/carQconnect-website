const fs = require('fs');
let content = fs.readFileSync('components/sections/feature-showcase.tsx', 'utf8');

// Replace style object padding and font-size
content = content.replace("fontWeight: 700,\n                fontSize: '15px',\n                padding: '11px 20px',\n                borderRadius: '10px',", "fontWeight: 700,\n                borderRadius: '10px',");

// Add base classes for text and padding
content = content.replace('"whitespace-nowrap transition-colors flex-1 flex items-center justify-center focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D1F26]",', '"whitespace-nowrap transition-colors flex-1 flex items-center justify-center focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D1F26] text-[15px] px-[20px] py-[11px]",');

fs.writeFileSync('components/sections/feature-showcase.tsx', content, 'utf8');
