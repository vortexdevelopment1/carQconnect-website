const fs = require('fs');

// 1. Marketplace Filters
let mkt = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');

mkt = mkt.replace(
  'gap-2 md:gap-3 flex-wrap',
  'gap-1.5 sm:gap-2 md:gap-3 flex-wrap'
);

mkt = mkt.replace(
  'px-3 md:px-5 min-h-[38px] md:min-h-[44px] text-[13px]',
  'px-2.5 sm:px-3 md:px-5 min-h-[32px] md:min-h-[44px] text-[11px] sm:text-[13px]'
);

fs.writeFileSync('app/(site)/marketplace/client-page.tsx', mkt, 'utf8');

// 2. Footer Watermark & Gaps
let footer = fs.readFileSync('components/footer/footer.tsx', 'utf8');

// The watermark was hidden on mobile because of bottom-[-5%]
footer = footer.replace(
  'absolute bottom-[-5%]',
  'absolute bottom-[-1%]'
);

// Remove min-h-[36px] to make links even more compact on mobile
footer = footer.replace(
  'min-h-[36px] md:min-h-[44px]',
  'min-h-0 py-1 md:min-h-[44px] md:py-0'
);

// Reduce gap-1 even more to gap-0 for mobile if needed, but gap-1 is already small (4px).
// Let's just remove the min-h which is the main culprit for the big space.
// Let's ensure gap is minimal.
footer = footer.replace(
  'gap-1 md:gap-[13px]',
  'gap-0.5 md:gap-[13px]'
);

fs.writeFileSync('components/footer/footer.tsx', footer, 'utf8');
