const fs = require('fs');

// 1. Fix Trip Planner Focus Ring Clipping and Unicode
let tp = fs.readFileSync('components/product/trip-planner-demo.tsx', 'utf8');

// Fix focus ring clip
tp = tp.replace(
  'className="mt-3 flex overflow-x-auto min-[420px]:flex-wrap gap-2 hide-scrollbar snap-x snap-mandatory"',
  'className="mt-3 flex overflow-x-auto min-[420px]:flex-wrap gap-2 hide-scrollbar snap-x snap-mandatory px-1 -mx-1 py-1 -my-1"'
);

// Fix unicode
tp = tp.replace(/\~\?4,270/g, 'Rs. 4,270');
tp = tp.replace(/\?1,680/g, 'Rs. 1,680');
tp = tp.replace(/\?5,950/g, 'Rs. 5,950');
tp = tp.replace(/\?8\.1/g, 'Rs. 8.1');
tp = tp.replace(/\ufffd/g, 'Rs. ');

fs.writeFileSync('components/product/trip-planner-demo.tsx', tp, 'utf8');

// 2. Fix Back Button size
let bb = fs.readFileSync('components/ui/back-button.tsx', 'utf8');
bb = bb.replace(
  'text-[14px]',
  'text-[12px] md:text-[14px]'
);
fs.writeFileSync('components/ui/back-button.tsx', bb, 'utf8');

