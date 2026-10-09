const fs = require('fs');
let content = fs.readFileSync('components/navbar/navbar.tsx', 'utf8');

// Replace bg-white with bg-[#111] in the hamburger lines
content = content.replace(/isLight \? "bg-black" : "bg-white"/g, '"bg-[#111]"');

fs.writeFileSync('components/navbar/navbar.tsx', content, 'utf8');
