const fs = require('fs');
let content = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');

// Remove it from the grid level
content = content.replace('<div className="pt-8"><BackButton fallback="/#features" label="Back to Features" /></div>', '');

// Add it inside the Text column
const insertPoint = '<div className="flex flex-col">';
content = content.replace(insertPoint, insertPoint + '\n            <div className="mb-10"><BackButton fallback="/#features" label="Back to Features" /></div>');

fs.writeFileSync('app/(site)/gps/page.tsx', content, 'utf8');
