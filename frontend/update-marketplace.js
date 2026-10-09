const fs = require('fs');
let content = fs.readFileSync('app/(site)/marketplace/client-page.tsx', 'utf8');

// Add import
if (!content.includes('BackButton')) {
    content = content.replace('import { Check, QrCode, MapPin, Signal } from "lucide-react";', 'import { Check, QrCode, MapPin, Signal } from "lucide-react";\nimport { BackButton } from "@/components/ui/back-button";');
}

// Add the button
content = content.replace(
    '<div className="rounded-full border border-[#e1e6ee]',
    '<div className="mb-5"><BackButton fallback="/#features" label="Back to Features" /></div>\n          <div className="rounded-full border border-[#e1e6ee]'
);

fs.writeFileSync('app/(site)/marketplace/client-page.tsx', content, 'utf8');
