const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

const styleBlock = `      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

        @media (min-width: 1024px) {
          .hero__line,
          .hero__word {
            white-space: nowrap !important;
          }
          .hero__lede {
            font-family: 'Inter', system-ui, sans-serif !important;
            font-size: clamp(14px, 1.3vw, 18px) !important;
            line-height: 1.5 !important;
            max-width: 580px !important;
            margin-left: auto !important;
            transform: translateY(-24px) !important;
          }
          .buy__label {
            font-family: 'Inter', system-ui, sans-serif !important;
            font-size: clamp(15px, 1.25vw, 20px) !important;
            font-weight: 600 !important;
            letter-spacing: 0.02em !important;
          }
        }
      \`}</style>\n\n`;

content = content.replace('<div className="hero__bg"', styleBlock + '      <div className="hero__bg"');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
