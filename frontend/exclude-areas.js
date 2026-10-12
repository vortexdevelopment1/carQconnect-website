const fs = require('fs');

// 1. Exclude home hero
let heroContent = fs.readFileSync('components/sections/hero.tsx', 'utf8');
heroContent = heroContent.replace(
  '<section className="',
  '<section data-type-scale="off" className="'
);
fs.writeFileSync('components/sections/hero.tsx', heroContent, 'utf8');

// 2. Exclude how-it-works page (app/(site)/how-it-works/page.tsx)
let hiwContent = fs.readFileSync('app/(site)/how-it-works/page.tsx', 'utf8');
// Assuming the root is a <main> or <div> or <> (fragment). 
// I will wrap the entire return in <div data-type-scale="off">...</div> if it's a fragment.
if (hiwContent.includes('return (\n    <>')) {
  hiwContent = hiwContent.replace(
    'return (\n    <>',
    'return (\n    <div data-type-scale="off">'
  );
  hiwContent = hiwContent.replace(
    '    </>\n  );',
    '    </div>\n  );'
  );
} else {
  // If it's already a div or section, just add the attribute
  hiwContent = hiwContent.replace(
    /<(div|main) className="/,
    '<$1 data-type-scale="off" className="'
  );
}
fs.writeFileSync('app/(site)/how-it-works/page.tsx', hiwContent, 'utf8');
