const fs = require('fs');
let content = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');

// Remove the import
content = content.replace('import { BackButton } from "@/components/ui/back-button";\n', '');

// Remove the button line
content = content.replace('<div className="mb-10"><BackButton fallback="/#features" label="Back to Features" /></div>\n', '');

fs.writeFileSync('app/(site)/gps/page.tsx', content, 'utf8');
