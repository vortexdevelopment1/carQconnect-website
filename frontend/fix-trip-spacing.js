const fs = require('fs');

// 1. Fix the unicode corruption in trip-intelligence/page.tsx
let tiContent = fs.readFileSync('app/(site)/trip-intelligence/page.tsx', 'utf8');

// Replace any weird replacement characters with a normal dash
tiContent = tiContent.replace(/cost(.*?)then suggests/, 'cost - then suggests');
tiContent = tiContent.replace(/cost  then suggests/, 'cost - then suggests');
tiContent = tiContent.replace(/cost \ufffd then suggests/, 'cost - then suggests');

// 2. Add top padding to the "Plan a trip" section
// I previously reduced it to clamp(8px, 2vw, 24px). Let's increase it to clamp(32px, 5vw, 48px).
tiContent = tiContent.replace(
  "paddingTop: 'clamp(8px, 2vw, 24px)'",
  "paddingTop: 'clamp(32px, 5vw, 48px)'"
);

fs.writeFileSync('app/(site)/trip-intelligence/page.tsx', tiContent, 'utf8');

// Also check features/page.tsx just in case there's another  there
let featContent = fs.readFileSync('app/(site)/features/page.tsx', 'utf8');
featContent = featContent.replace(/\ufffd/g, '-');
fs.writeFileSync('app/(site)/features/page.tsx', featContent, 'utf8');

