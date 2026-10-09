const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

const replacement = `/* Desktop Defaults Recovery */
  @media (min-width: 1024px) {
    .hero {
      background-color: #f4f4f6 !important;
      height: 100svh !important;
      min-height: 620px !important;
      aspect-ratio: auto !important;
    }
    .hero-image-mobile-only { display: none !important; }
    .hero-image-desktop-only { display: block !important; }
    .hero__product-image {
      inset: 0 !important;
      height: 100% !important;
      object-fit: cover !important;
    }
    .hero__copy {
      top: 16svh !important;
      right: clamp(30px, 3.5vw, 48px) !important;
      width: min(80vw, 1200px) !important;
    }
  }`;

content = content.replace(/\/\* Desktop Defaults Recovery \*\/[\s\S]*?(?=\/\* Tablet)/, replacement + '\n\n');

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
