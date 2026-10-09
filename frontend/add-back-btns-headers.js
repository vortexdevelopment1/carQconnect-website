const fs = require('fs');

function addBackButton(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('import { BackButton }')) {
    content = content.replace('import { PageHeader } from "@/components/sections/page-header";', 'import { PageHeader } from "@/components/sections/page-header";\nimport { BackButton } from "@/components/ui/back-button";');
  }
  content = content.replace('<PageHeader\n', '<PageHeader\n        backButton={<BackButton fallback="/features" label="Back to features" />}\n');
  fs.writeFileSync(filePath, content, 'utf8');
}

addBackButton('app/(site)/trip-intelligence/page.tsx');
addBackButton('app/(site)/vehicle-utilities/page.tsx');
