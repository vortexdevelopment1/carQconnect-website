const fs = require('fs');
let content = fs.readFileSync('app/(site)/legal/components/LegalClient.tsx', 'utf8');

// Remove the back button element
content = content.replace('<div className="mb-6"><BackButton fallback="/#footer" label="Back" /></div>', '');

fs.writeFileSync('app/(site)/legal/components/LegalClient.tsx', content, 'utf8');
