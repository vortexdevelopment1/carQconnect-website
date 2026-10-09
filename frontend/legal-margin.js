const fs = require('fs');
let content = fs.readFileSync('app/(site)/legal/components/LegalClient.tsx', 'utf8');

// Reduce header margin
content = content.replace('<div className="mb-14">', '<div className="mb-8">');

fs.writeFileSync('app/(site)/legal/components/LegalClient.tsx', content, 'utf8');
