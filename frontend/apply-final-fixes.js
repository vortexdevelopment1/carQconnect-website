const fs = require('fs');

// 1. Fix SOS Card flow
let sosContent = fs.readFileSync('components/sections/sos-section.tsx', 'utf8');
sosContent = sosContent.replace(
  '<div className="relative flex w-full items-center justify-between gap-2 overflow-x-auto scrollbar-none">',
  '<div className="relative flex w-full items-center justify-between gap-1 sm:gap-2">'
);
sosContent = sosContent.replace(
  '<div key={step.label} className="flex items-center gap-2">',
  '<div key={step.label} className="flex items-center gap-1 sm:gap-2">'
);
sosContent = sosContent.replace(
  '<div className="flex flex-col items-center gap-2">',
  '<div className="flex flex-col items-center gap-1 sm:gap-2 text-center max-w-[60px] sm:max-w-none">'
);
sosContent = sosContent.replace(
  '<div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5">',
  '<div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 shrink-0">'
);
sosContent = sosContent.replace(
  '<step.icon className="h-4 w-4 text-neutral-800" />',
  '<step.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-800" />'
);
sosContent = sosContent.replace(
  '<span className="whitespace-nowrap text-[11px] font-semibold text-neutral-700">',
  '<span className="text-[9px] sm:text-[11px] font-semibold text-neutral-700 leading-tight">'
);
sosContent = sosContent.replace(
  '<div className="mb-5 h-px w-6 bg-black/15" />',
  '<div className="mb-6 h-px w-3 sm:w-6 bg-black/15 shrink-0" />'
);
fs.writeFileSync('components/sections/sos-section.tsx', sosContent, 'utf8');

// 2. Fix Safety Page Heading to have orange
let safetyContent = fs.readFileSync('app/(site)/safety/page.tsx', 'utf8');
safetyContent = safetyContent.replace(
  'title="SOS and emergency safety"',
  'title={<>SOS and <span className="text-orange">emergency safety</span></>}'
);
safetyContent = safetyContent.replace(
  'title="When every second matters."',
  'title={<>When every <span className="text-orange">second matters.</span></>}'
);
fs.writeFileSync('app/(site)/safety/page.tsx', safetyContent, 'utf8');

// 3. Fix features page bottom padding
let featuresContent = fs.readFileSync('app/(site)/features/page.tsx', 'utf8');
featuresContent = featuresContent.replace(
  'className="bg-background pb-28"',
  'className="bg-background pb-12 md:pb-28"'
);
// Make sure eyebrow is passed to PageHeader
featuresContent = featuresContent.replace(
  'eyebrow="Product"',
  'eyebrow="FEATURES"'
);
fs.writeFileSync('app/(site)/features/page.tsx', featuresContent, 'utf8');

