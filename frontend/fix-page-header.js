const fs = require('fs');

// 1. Fix PageHeader font size and spacing to exactly match user's request
let phContent = fs.readFileSync('components/sections/page-header.tsx', 'utf8');

// Replace the h1 class completely
phContent = phContent.replace(
  /<h1 className="font-display[^>]*>/,
  '<h1 className="font-display text-[clamp(24px,6.4vw,54px)] font-[800] leading-[1.1] tracking-[-0.02em] text-[#0f1220] max-w-[800px] text-balance mb-2 md:mb-[12px]">'
);

// Reduce padding block for hero block as requested: clamp(20px, 5vw, 48px)
phContent = phContent.replace(
  /"pt-\[90px\] md:pt-\[120px\] pb-6 md:pb-\[40px\]"/,
  '"pt-[max(env(safe-area-inset-top),clamp(80px,10vw,120px))] pb-[clamp(20px,5vw,48px)]"'
);

fs.writeFileSync('components/sections/page-header.tsx', phContent, 'utf8');
