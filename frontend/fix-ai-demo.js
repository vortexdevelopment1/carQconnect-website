const fs = require('fs');

let ai = fs.readFileSync('components/product/ai-chat-demo.tsx', 'utf8');

// Replace Hindi text with English
ai = ai.replace(
  'Kal Indore se Udaipur jaana hai, toll kam rakhna hai.',
  'I need to drive from Indore to Udaipur tomorrow, find a route with lower tolls.'
);

// Fix unicode ? for Rupee
ai = ai.replace(/\?1,680/g, 'Rs. 1,680');
ai = ai.replace(/\?14,950/g, 'Rs. 14,950');

fs.writeFileSync('components/product/ai-chat-demo.tsx', ai, 'utf8');
