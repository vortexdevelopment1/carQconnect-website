const fs = require('fs');
let file = fs.readFileSync('components/sections/hero.tsx', 'utf8');

const targetStr = "@media (max-width: 380px) {";
const cssToAdd = `
        @media (max-width: 340px) {
          .hero .hero__lede {
            font-size: 7.5px !important;
            max-width: 80% !important;
          }
          .hero .hero__title {
            font-size: 16px !important;
          }
          .hero .buy__body {
            min-height: 26px !important;
            padding-inline: 10px !important;
          }
          .hero .buy__label {
            font-size: 9px !important;
          }
        }
`;

if (file.includes(targetStr)) {
  file = file.replace(targetStr, cssToAdd + "\n        " + targetStr);
  fs.writeFileSync('components/sections/hero.tsx', file, 'utf8');
  console.log("Successfully added max-width 340px rules.");
} else {
  console.log("target string not found.");
}
