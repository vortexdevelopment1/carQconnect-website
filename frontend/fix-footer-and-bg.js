const fs = require('fs');

// 1. Fix layout.tsx backgrounds
let layout = fs.readFileSync('app/(site)/layout.tsx', 'utf8');
layout = layout.replace(
  '<body className="font-body antialiased flex flex-col min-h-[100svh]">',
  '<body className="font-body antialiased flex flex-col min-h-[100svh] bg-[#0D0E13]">'
);
layout = layout.replace(
  '<main className="flex-1 flex flex-col">',
  '<main className="flex-1 flex flex-col bg-[#f7f9fc]">'
);
fs.writeFileSync('app/(site)/layout.tsx', layout, 'utf8');

// 2. Fix footer.tsx app buttons responsiveness
let footer = fs.readFileSync('components/footer/footer.tsx', 'utf8');

footer = footer.replace(
  /className="flex items-center gap-2.5 rounded-\[10px\] border border-\[#3A3D4C\] bg-black px-\[14px\] py-\[8px\] transition-colors hover:border-\[#FF5A00\]"/g,
  'className="flex items-center gap-[clamp(6px,1.5vw,10px)] rounded-[10px] border border-[#3A3D4C] bg-black px-[clamp(8px,2.5vw,14px)] py-[clamp(6px,1.5vw,8px)] transition-colors hover:border-[#FF5A00]"'
);

footer = footer.replace(
  /className="h-5 w-5"/g,
  'className="h-[clamp(16px,4vw,20px)] w-[clamp(16px,4vw,20px)]"'
);

footer = footer.replace(
  /className="h-\[22px\] w-\[22px\]"/g,
  'className="h-[clamp(18px,4.5vw,22px)] w-[clamp(18px,4.5vw,22px)]"'
);

footer = footer.replace(
  /text-\[9px\]/g,
  'text-[clamp(7px,1.8vw,9px)]'
);

footer = footer.replace(
  /text-\[12px\]/g,
  'text-[clamp(9.5px,2.5vw,12px)]'
);

fs.writeFileSync('components/footer/footer.tsx', footer, 'utf8');
