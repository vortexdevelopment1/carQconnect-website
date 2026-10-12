const fs = require('fs');

let tiContent = fs.readFileSync('app/(site)/trip-intelligence/page.tsx', 'utf8');

// Reduce bottom padding on PageHeader
tiContent = tiContent.replace(
  'className="relative overflow-hidden pb-[40px]"',
  'className="relative overflow-hidden pb-[16px]"'
);

// Reduce top padding on the Plan a trip section
tiContent = tiContent.replace(
  'style={{ paddingBlock: \'clamp(36px, 6vw, 64px)\' }}',
  'style={{ paddingBottom: \'clamp(36px, 6vw, 64px)\', paddingTop: \'clamp(16px, 3vw, 32px)\' }}'
);

fs.writeFileSync('app/(site)/trip-intelligence/page.tsx', tiContent, 'utf8');
