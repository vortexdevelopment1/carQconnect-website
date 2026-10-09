const fs = require('fs');
let content = fs.readFileSync('app/(site)/legal/components/LegalClient.tsx', 'utf8');

// Import BackButton
content = content.replace('import { ChevronDown } from "lucide-react";', 'import { ChevronDown } from "lucide-react";\nimport { BackButton } from "@/components/ui/back-button";');

// Reduce white space and add back button
content = content.replace(
  '<div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-[120px]">',
  '<div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-[80px] md:pt-[100px]">\n        <div className="mb-6"><BackButton fallback="/#footer" label="Back" /></div>'
);

fs.writeFileSync('app/(site)/legal/components/LegalClient.tsx', content, 'utf8');
