const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// Remove the old CSS hack
content = content.replace('<div className="hero__qr-scanner" />', '');

// Import the new component
content = content.replace('import type { CSSProperties } from "react";', 'import type { CSSProperties } from "react";\nimport { HeroQrScanner } from "@/components/qr/hero-qr-scanner";');

// Insert it inside hero__product-image
content = content.replace('<div className="hero__product-image" aria-hidden="true">\n        \n      </div>', '<div className="hero__product-image" aria-hidden="true">\n        <HeroQrScanner />\n      </div>');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
