const fs = require('fs');
let file = fs.readFileSync('components/sections/hero.tsx', 'utf8');

const targetStr = "/* ---------- MOBILE (< 640px) ---------- */";
const cssToAdd = `
        @media (max-width: 510px) {
          .hero .hero__copy {
            top: clamp(90px, 20vw, 120px) !important;
          }
          .hero .hero__lede {
            font-size: 10px !important;
          }
          .hero .buy__body {
            min-height: 32px !important;
            padding-inline: 16px !important;
          }
          .hero .buy__label {
            font-size: 11px !important;
          }
        }
`;

if (file.includes(targetStr)) {
  file = file.replace(targetStr, targetStr + cssToAdd);
  fs.writeFileSync('components/sections/hero.tsx', file, 'utf8');
  console.log("Successfully added max-width 510px rules.");
} else {
  console.log("target string not found.");
}
