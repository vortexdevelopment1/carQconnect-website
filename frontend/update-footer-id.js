const fs = require('fs');
let content = fs.readFileSync('components/footer/footer.tsx', 'utf8');

content = content.replace(
  '<div className="relative z-10 mt-14 flex items-center justify-between border-t border-[#262935] py-[22px]">',
  '<div id="footer-copy-bar" className="relative z-10 mt-14 flex items-center justify-between border-t border-[#262935] py-[22px]">'
);

fs.writeFileSync('components/footer/footer.tsx', content, 'utf8');
