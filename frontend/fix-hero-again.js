const fs = require('fs');
let hero = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// 1. Tablet font size (make it bigger for 661px and 770px)
hero = hero.replace(
  'font-size: clamp(28px, 4.4vw, 56px) !important;',
  'font-size: clamp(34px, 5.5vw, 56px) !important;'
);

// 2. Fix Hero Mobile (prevent overlap by pushing text up and making button slightly smaller)
hero = hero.replace(
  'transform: translateY(clamp(8px, 3vw, 16px)) !important;',
  'transform: translateY(clamp(-20px, -4vw, 0px)) !important; z-index: 10;'
);

// Decrease button size on mobile (381px)
hero = hero.replace(
  'min-height: clamp(22px, 6.6vw, 28px) !important;',
  'min-height: clamp(20px, 6vw, 26px) !important;'
);
hero = hero.replace(
  'padding-inline: clamp(10px, 3.2vw, 14px) clamp(15px, 4.4vw, 20px) !important;',
  'padding-inline: clamp(8px, 2.8vw, 12px) clamp(12px, 4vw, 18px) !important;'
);
hero = hero.replace(
  'font-size: clamp(8.5px, 2.5vw, 11px) !important;',
  'font-size: clamp(8px, 2.4vw, 10.5px) !important;'
);

fs.writeFileSync('components/sections/hero.tsx', hero, 'utf8');
