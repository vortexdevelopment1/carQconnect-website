const fs = require('fs');

// 1. Update safety/page.tsx
let safetyPage = fs.readFileSync('app/(site)/safety/page.tsx', 'utf8');

// Reduce whitespace
safetyPage = safetyPage.replace('py-24 md:py-32', 'py-12 md:py-16');

// Add orange outline to cards
safetyPage = safetyPage.replace(
  'className="rounded-card-lg border border-border bg-surface p-6"',
  'className="rounded-card-lg border border-[#ff5a00]/40 bg-surface p-6 hover:border-[#ff5a00] hover:shadow-glow transition-all"'
);

fs.writeFileSync('app/(site)/safety/page.tsx', safetyPage, 'utf8');

// 2. Update sos-section.tsx
let sosSection = fs.readFileSync('components/sections/sos-section.tsx', 'utf8');

// Reduce whitespace
sosSection = sosSection.replace('py-24 md:py-32', 'py-12 md:py-16');

fs.writeFileSync('components/sections/sos-section.tsx', sosSection, 'utf8');
