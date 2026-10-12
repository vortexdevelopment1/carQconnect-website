const fs = require('fs');

let wa = fs.readFileSync('components/whatsapp-float.tsx', 'utf8');

// 1. Make the clamping logic apply to all screens
wa = wa.replace(
  'if (window.innerWidth < 640) {',
  'if (true) {'
);

// 2. Disable transition on all screens to fix fast scroll lag
wa = wa.replace(
  'if (window.innerWidth < 640) {\n        wrap.style.transition = \'none\';\n      } else {\n        wrap.style.transition = \'\';\n      }',
  'wrap.style.transition = \'none\';'
);

fs.writeFileSync('components/whatsapp-float.tsx', wa, 'utf8');
