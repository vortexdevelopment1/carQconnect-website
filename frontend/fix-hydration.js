const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

const regex = /<style>\{`([\s\S]*?)`\}<\/style>/;
content = content.replace(regex, '<style dangerouslySetInnerHTML={{ __html: `$1` }} />');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
