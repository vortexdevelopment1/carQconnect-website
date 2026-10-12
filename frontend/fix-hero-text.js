const fs = require('fs');
let hero = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// Insert base font size for tablet and desktop
hero = hero.replace(
  '/* ---------- 3) TABLET (640px - 1023px) ---------- */\n        @media (min-width: 640px) and (max-width: 1023px) {',
  '/* ---------- 3) TABLET (640px - 1023px) ---------- */\n        @media (min-width: 640px) and (max-width: 1023px) {\n          .hero .hero__title {\n            font-size: clamp(28px, 4.4vw, 56px) !important;\n          }'
);

hero = hero.replace(
  '/* ---------- 4) DESKTOP / LAPTOP (>= 1024px) ---------- */\n        @media (min-width: 1024px) {',
  '/* ---------- 4) DESKTOP / LAPTOP (>= 1024px) ---------- */\n        @media (min-width: 1024px) {\n          .hero .hero__title {\n            font-size: clamp(34px, 4.2vw, 68px) !important;\n            line-height: 1.08 !important;\n          }'
);

fs.writeFileSync('components/sections/hero.tsx', hero, 'utf8');
