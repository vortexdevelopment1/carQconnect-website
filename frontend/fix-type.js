const fs = require('fs');
let file = fs.readFileSync('components/ui/section-heading.tsx', 'utf8');

file = file.replace('title: string;', 'title: React.ReactNode;');
if(!file.includes("import React")) {
    file = `import React from 'react';\n` + file;
}

fs.writeFileSync('components/ui/section-heading.tsx', file, 'utf8');
