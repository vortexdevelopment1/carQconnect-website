const fs = require('fs');
let content = fs.readFileSync('components/sections/feature-showcase.tsx', 'utf8');

// The tablist container has inline styles:
// width: 'max-content',
// maxWidth: '100%'

content = content.replace("width: 'max-content',\n          maxWidth: '100%'", "width: '100%',\n          maxWidth: '500px'");

fs.writeFileSync('components/sections/feature-showcase.tsx', content, 'utf8');
