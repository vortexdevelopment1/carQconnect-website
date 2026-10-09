const fs = require('fs');
let content = fs.readFileSync('components/navbar/navbar.tsx', 'utf8');

// Update gap
content = content.replace(
  'gap-[clamp(16px,2vw,30px)]',
  'gap-[clamp(16px,2vw,28px)]'
);

// Add whitespace-nowrap
content = content.replace(
  'className={`text-[clamp(13px,0.92vw,15px)] font-medium tracking-[0.01em] transition-all \n',
  'className={`whitespace-nowrap text-[clamp(13px,0.92vw,15px)] font-medium tracking-[0.01em] transition-all \n'
);
// Also in case it's all on one line:
content = content.replace(
  'className={`text-[clamp(13px,0.92vw,15px)] font-medium tracking-[0.01em] transition-all duration-200 ${',
  'className={`whitespace-nowrap text-[clamp(13px,0.92vw,15px)] font-medium tracking-[0.01em] transition-all duration-200 ${'
);

fs.writeFileSync('components/navbar/navbar.tsx', content, 'utf8');
