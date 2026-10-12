const fs = require('fs');

let footer = fs.readFileSync('components/footer/footer.tsx', 'utf8');

// The layout switches to a single row at 900px.
// We need to keep the compact link styling up to 899px!

footer = footer.replace(
  'gap-0.5 md:gap-[13px]',
  'gap-1 min-[900px]:gap-[13px]'
);

footer = footer.replace(
  'min-h-0 py-1 md:min-h-[44px] md:py-0',
  'min-h-0 py-1 min-[900px]:min-h-[44px] min-[900px]:py-0'
);

footer = footer.replace(
  'gap-y-8 md:gap-y-12',
  'gap-y-8 min-[900px]:gap-y-12'
);

fs.writeFileSync('components/footer/footer.tsx', footer, 'utf8');
