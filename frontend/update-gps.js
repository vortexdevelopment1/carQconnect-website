const fs = require('fs');
let content = fs.readFileSync('app/(site)/gps/page.tsx', 'utf8');

// Add import
if (!content.includes('BackButton')) {
    content = content.replace('import { SectionHeading } from "@/components/ui/section-heading";', 'import { SectionHeading } from "@/components/ui/section-heading";\nimport { BackButton } from "@/components/ui/back-button";');
}

// Add the button above the GPS TRACKING line
content = content.replace(
    '<div className="flex items-center gap-4 mb-6">',
    '<div className="mb-5"><BackButton fallback="/#features" label="Back to Features" /></div>\n            <div className="flex items-center gap-4 mb-6">'
);

fs.writeFileSync('app/(site)/gps/page.tsx', content, 'utf8');
