const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

const imgDiv = '<div className="hero__product-image" aria-hidden="true" />';
const imgDivWithScanner = `<div className="hero__product-image" aria-hidden="true">
        <div className="hero__qr-scanner" />
      </div>`;

content = content.replace(imgDiv, imgDivWithScanner);

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
