const fs = require('fs');
let phContent = fs.readFileSync('components/sections/page-header.tsx', 'utf8');

// Add font-display explicitly to h1
phContent = phContent.replace(
  '<h1 className="text-[clamp(26px,7vw,56px)] font-[800]',
  '<h1 className="font-display text-[clamp(26px,7vw,56px)] font-[800]'
);

// If already applied, it won't do anything, which is fine.
fs.writeFileSync('components/sections/page-header.tsx', phContent, 'utf8');

// Also shift back button up slightly by reducing paddingTop of PageHeader in trip-intelligence/page.tsx
let tiContent = fs.readFileSync('app/(site)/trip-intelligence/page.tsx', 'utf8');
tiContent = tiContent.replace(
  "style={{ paddingTop: 'clamp(70px, 10vw, 96px)' }}",
  "style={{ paddingTop: 'clamp(64px, 8vw, 84px)' }}"
);
fs.writeFileSync('app/(site)/trip-intelligence/page.tsx', tiContent, 'utf8');
