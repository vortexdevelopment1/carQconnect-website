const fs = require('fs');

let file = fs.readFileSync('components/sections/product-comparison.tsx', 'utf8');

file = file.replace(
  'className="group shrink-0 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#12131A] border-b-[2px] border-[#FF5A00] pb-1 hover:text-[#FF5A00] transition-colors"',
  'className="group shrink-0 self-start md:self-auto inline-flex items-center gap-1.5 text-[13px] md:text-[14px] font-semibold text-[#12131A] border-b-[2px] border-[#FF5A00] pb-1 hover:text-[#FF5A00] transition-colors"'
);

fs.writeFileSync('components/sections/product-comparison.tsx', file, 'utf8');
