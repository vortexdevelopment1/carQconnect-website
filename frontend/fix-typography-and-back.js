const fs = require('fs');

// 1. Fix globals.css: Reduce H1 size and remove text-balance to let it fill the first line
let css = fs.readFileSync('app/(site)/globals.css', 'utf8');
css = css.replace(
  '--fs-h1: clamp(22px, 12px + 2.6vw, 54px);',
  '--fs-h1: clamp(20px, 10px + 2.6vw, 54px);'
);
css = css.replace(
  'text-wrap: balance; \n    overflow-wrap: anywhere; \n  }\n  \n  main :where(h2)',
  '/* text-wrap: balance; removed to prevent forced 3-lines */\n    overflow-wrap: anywhere; \n  }\n  \n  main :where(h2)'
);
fs.writeFileSync('app/(site)/globals.css', css, 'utf8');

// 2. Fix Back Button top margin in PageHeader
let ph = fs.readFileSync('components/sections/page-header.tsx', 'utf8');
ph = ph.replace(
  '{backButton && <div className="mb-1 md:mb-3">{backButton}</div>}',
  '{backButton && <div className="mt-2 md:mt-4 mb-2 md:mb-4">{backButton}</div>}'
);
fs.writeFileSync('components/sections/page-header.tsx', ph, 'utf8');

