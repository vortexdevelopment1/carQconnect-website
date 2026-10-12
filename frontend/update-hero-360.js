const fs = require('fs');
let file = fs.readFileSync('components/sections/hero.tsx', 'utf8');

const targetStr = "@media (max-width: 420px) {";
const cssToAdd = `
        @media (max-width: 380px) {
          .hero .hero__copy {
            top: 105px !important;
          }
          .hero .hero__title {
            font-size: 18px !important;
          }
          .hero .hero__lede {
            font-size: 9px !important;
          }
        }
`;

if (file.includes(targetStr)) {
  file = file.replace(targetStr, cssToAdd + "\n        " + targetStr);
  fs.writeFileSync('components/sections/hero.tsx', file, 'utf8');
  console.log("Successfully added max-width 380px rules.");
} else {
  console.log("target string not found.");
}
