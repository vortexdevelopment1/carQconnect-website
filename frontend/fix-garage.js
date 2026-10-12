const fs = require('fs');

let content = fs.readFileSync('components/sections/garage-section.tsx', 'utf8');

// 1. Section padding and gap
content = content.replace(
  'py-24 md:py-32',
  'py-[clamp(28px,6vw,56px)]'
);
content = content.replace(
  '<div className="mt-14 grid gap-5 md:grid-cols-3">',
  '<div className="mt-[clamp(16px,3vw,28px)] grid gap-[clamp(10px,1.6vw,16px)] grid-cols-1 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">'
);

// 2. Add "Sample data"
content = content.replace(
  /<SectionHeading[\s\S]*?\/>/,
  `$&
        <div className="text-right mt-2"><span className="text-[11px] text-neutral-400 font-medium bg-black/5 px-2 py-1 rounded-md">Sample data</span></div>`
);

// 3. Prevent badge wrap and use clamp size
content = content.replace(
  /className="text-\[12px\] font-semibold whitespace-nowrap/g,
  'className="text-[clamp(10px,2.4vw,12px)] font-semibold whitespace-nowrap'
);

fs.writeFileSync('components/sections/garage-section.tsx', content, 'utf8');
