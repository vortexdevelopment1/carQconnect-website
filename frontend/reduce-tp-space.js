const fs = require('fs');

let tpContent = fs.readFileSync('components/product/trip-planner-demo.tsx', 'utf8');

// The main card padding is clamp(16px, 3vw, 28px) which is ok.
// Let's reduce the gap between From/To fields
tpContent = tpContent.replace(
  'className="grid gap-4 grid-cols-1 min-[640px]:grid-cols-2"',
  'className="grid gap-2 min-[640px]:gap-4 grid-cols-1 min-[640px]:grid-cols-2"'
);

// Reduce padding in From/To fields on mobile
tpContent = tpContent.replace(
  '<div className="rounded-card border border-border bg-surface-2 p-4">',
  '<div className="rounded-card border border-border bg-surface-2 p-3 min-[640px]:p-4">'
);
tpContent = tpContent.replace(
  '<div className="rounded-card border border-border bg-surface-2 p-4">',
  '<div className="rounded-card border border-border bg-surface-2 p-3 min-[640px]:p-4">'
);

// Reduce mt-4 for chips to mt-3
tpContent = tpContent.replace(
  '<div className="mt-4 flex overflow-x-auto min-[420px]:flex-wrap gap-2 hide-scrollbar snap-x snap-mandatory">',
  '<div className="mt-3 flex overflow-x-auto min-[420px]:flex-wrap gap-2 hide-scrollbar snap-x snap-mandatory">'
);

// Reduce mt-6 for divider to mt-4
tpContent = tpContent.replace(
  '<div className="mt-6 h-px w-full bg-surface-2" />',
  '<div className="mt-4 h-px w-full bg-surface-2" />'
);

// Reduce mt-6 for result tiles grid to mt-4
tpContent = tpContent.replace(
  'className="mt-6 grid grid-cols-1 min-[420px]:grid-cols-2 min-[900px]:grid-cols-3"',
  'className="mt-4 grid grid-cols-1 min-[420px]:grid-cols-2 min-[900px]:grid-cols-3"'
);

// Reduce p-4 to p-3 on result tiles
tpContent = tpContent.replace(
  'key={label} className="rounded-card border border-border bg-surface-2 p-4 flex flex-col h-full min-w-[140px]"',
  'key={label} className="rounded-card border border-border bg-surface-2 p-3 min-[640px]:p-4 flex flex-col h-full min-w-[140px]"'
);

fs.writeFileSync('components/product/trip-planner-demo.tsx', tpContent, 'utf8');
