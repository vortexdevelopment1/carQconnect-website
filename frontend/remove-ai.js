const fs = require('fs');

let content = fs.readFileSync('app/(site)/features/page.tsx', 'utf8');

// Remove AI Assistant from the array
content = content.replace(
  "  { icon: Sparkles, title: 'AI Assistant', description: 'A conversational layer over trips, tracking, orders and support.', href: '/trip-intelligence' },\n",
  ""
);

fs.writeFileSync('app/(site)/features/page.tsx', content, 'utf8');
