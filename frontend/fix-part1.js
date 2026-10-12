const fs = require('fs');

// -------------------------------------------------------------
// 1. WhatsApp Button (< 1024px) in globals.css
// -------------------------------------------------------------
let css = fs.readFileSync('app/(site)/globals.css', 'utf8');

// The current CSS has a block for mobile (max-width: 639px) and tablet (640px - 1023px)
// We need to merge them so that < 1024px is just a 48px round button.
css = css.replace(
  /\/\* Mobile: sirf icon wala gol button \*\/[\s\S]*?\/\* Tablet \*\//,
  `/* Mobile & Tablet (< 1024px): icon-only 48px round button */
  @media (max-width: 1023px) {
    .wa-btn { width: 48px !important; height: 48px !important; padding: 0 !important; }
    .wa-label { display: none !important; }
    .wa-icon { width: 26px !important; height: 26px !important; }
    .wa-wrap { bottom: max(16px, env(safe-area-inset-bottom)) !important; right: max(16px, env(safe-area-inset-right)) !important; top: auto !important; transform: none !important; }
  }
  /* Tablet */`
);
fs.writeFileSync('app/(site)/globals.css', css, 'utf8');

// -------------------------------------------------------------
// 2. Header Logo Size (641px to 1100px) in navbar.tsx
// -------------------------------------------------------------
let nav = fs.readFileSync('components/navbar/navbar.tsx', 'utf8');
// The user asked for: icon 28 to 30px (scale with formula `clamp(24px, 18px + 1vw, 32px)`).
nav = nav.replace(
  '<CarQMark className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] min-[1025px]:w-[32px] min-[1025px]:h-[32px]" />',
  '<CarQMark className="w-[22px] h-[22px] max-[640px]:w-[22px] min-[641px]:max-[1100px]:w-[clamp(24px,18px+1vw,32px)] min-[641px]:max-[1100px]:h-[clamp(24px,18px+1vw,32px)] min-[1101px]:w-[32px] min-[1101px]:h-[32px]" />'
);
nav = nav.replace(
  'className="text-[20px] md:text-[26px] min-[1025px]:text-[34px] font-semibold tracking-tight text-[#131316]"',
  'className="text-[20px] max-[640px]:text-[20px] min-[641px]:max-[1100px]:text-[clamp(20px,14px+1vw,26px)] min-[1101px]:text-[34px] font-semibold tracking-tight text-[#131316]"'
);
// Gap 8px:
nav = nav.replace(
  'className="flex items-center gap-2 transition-transform hover:scale-[0.98]"',
  'className="flex items-center gap-2 max-[640px]:gap-2 min-[641px]:max-[1100px]:gap-[8px] min-[1101px]:gap-2 transition-transform hover:scale-[0.98]"'
);
fs.writeFileSync('components/navbar/navbar.tsx', nav, 'utf8');


