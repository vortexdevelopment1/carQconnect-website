const fs = require('fs');
let content = fs.readFileSync('app/(site)/membership/page.tsx', 'utf8');

content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { BackButton } from "@/components/ui/back-button";');

content = content.replace(
  '<div className="max-w-[1240px] mx-auto flex flex-col items-center text-center relative z-10">',
  '<div className="max-w-[1240px] mx-auto flex flex-col items-center text-center relative z-10">\n          <div className="mb-6 self-start md:self-center"><BackButton fallback="/features" label="Back to features" /></div>'
);

fs.writeFileSync('app/(site)/membership/page.tsx', content, 'utf8');
