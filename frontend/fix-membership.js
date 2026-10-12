const fs = require('fs');

let content = fs.readFileSync('app/(site)/membership/page.tsx', 'utf8');

// 1. Reduce top and bottom padding of the hero section
content = content.replace(
  'className="pt-[140px] pb-[80px] px-6 relative"',
  'className="pt-[110px] pb-[40px] px-6 relative"'
);

// 2. Move back button to the left
content = content.replace(
  '<div className="mb-6 self-start md:self-center"><BackButton fallback="/features" label="Back to features" /></div>',
  '<div className="w-full flex justify-start mb-4 md:mb-6"><BackButton fallback="/features" label="Back to features" /></div>'
);

// 3. Optional: reduce margin below paragraph if there's too much
content = content.replace(
  'leading-relaxed mb-10 font-medium"',
  'leading-relaxed mb-8 font-medium"'
);

fs.writeFileSync('app/(site)/membership/page.tsx', content, 'utf8');
