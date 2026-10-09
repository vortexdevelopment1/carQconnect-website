const fs = require('fs');
let content = fs.readFileSync('app/(site)/legal/components/LegalClient.tsx', 'utf8');

// Remove import
content = content.replace('\nimport { BackButton } from "@/components/ui/back-button";', '');

// Remove back button element
content = content.replace('        <div className="mb-6"><BackButton fallback="/#footer" label="Back" /></div>\n', '');

fs.writeFileSync('app/(site)/legal/components/LegalClient.tsx', content, 'utf8');
