const fs = require('fs');

// 1. Fix layout.tsx to push footer to bottom
let layout = fs.readFileSync('app/(site)/layout.tsx', 'utf8');
layout = layout.replace(
  '<body className="font-body antialiased">',
  '<body className="font-body antialiased flex flex-col min-h-[100svh]">'
);
layout = layout.replace(
  '<main>{children}</main>',
  '<main className="flex-1 flex flex-col">{children}</main>'
);
fs.writeFileSync('app/(site)/layout.tsx', layout, 'utf8');

// 2. Fix footer.tsx links gap and copyright text
let footer = fs.readFileSync('components/footer/footer.tsx', 'utf8');

// Reduce link gaps
footer = footer.replace(
  'className="flex flex-col gap-[13px]"',
  'className="flex flex-col gap-1 md:gap-[13px]"'
);
footer = footer.replace(
  'className="group inline-flex items-center min-h-[44px]',
  'className="group inline-flex items-center min-h-[36px] md:min-h-[44px]'
);

// Split copyright text
footer = footer.replace(
  '<p className="text-[13px] text-[#7B7F90]">\n            &copy; 2026 carQconnect. All rights reserved.\n          </p>',
  '<p className="text-[13px] text-[#7B7F90] flex flex-col sm:block gap-0.5">\n            <span>&copy; 2026 carQconnect.</span>\n            <span>All rights reserved.</span>\n          </p>'
);

// Also reduce the gap between grids on mobile
footer = footer.replace(
  'gap-y-12',
  'gap-y-8 md:gap-y-12'
);

fs.writeFileSync('components/footer/footer.tsx', footer, 'utf8');

