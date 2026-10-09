const fs = require('fs');
let content = fs.readFileSync('components/whatsapp-float.tsx', 'utf8');

// We will insert the transition removal right after setting the transform
const search = 'wrap.style.transform = `translateY(${y}px)`;';
const replace = `wrap.style.transform = \`translateY(\${y}px)\`;
      
      if (window.innerWidth < 640) {
        wrap.style.transition = 'none';
      } else {
        wrap.style.transition = '';
      }`;

content = content.replace(search, replace);

fs.writeFileSync('components/whatsapp-float.tsx', content, 'utf8');
