const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

const replacement = `.hero__product-image {
  position: absolute !important;
  inset: auto auto 0 0 !important;
  width: 100% !important;
  height: auto !important;
  pointer-events: none !important;
  z-index: 1 !important;
  background: none !important;
  animation: none !important;
  transform: none !important;
}`;

content = content.replace(/\.hero__product-image \{\s*position: absolute !important;\s*inset: auto auto 0 0 !important;\s*width: 100% !important;\s*height: auto !important;\s*pointer-events: none !important;\s*z-index: 1 !important;\s*background: none !important;\s*\}/, replacement);

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
