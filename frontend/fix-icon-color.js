const fs = require('fs');

let safetyPage = fs.readFileSync('app/(site)/safety/page.tsx', 'utf8');

// Change icon color to orange
safetyPage = safetyPage.replace(
  'className="h-5 w-5 text-blue"',
  'className="h-5 w-5 text-[#ff5a00]"'
);

fs.writeFileSync('app/(site)/safety/page.tsx', safetyPage, 'utf8');
