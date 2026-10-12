const fs = require('fs');

// 1. Hero text shift up for tablet
let hero = fs.readFileSync('components/sections/hero.tsx', 'utf8');
hero = hero.replace(
  'transform: translateY(clamp(12px, 2vw, 22px)) !important;',
  'transform: translateY(clamp(-50px, -4vw, -20px)) !important; z-index: 10;'
);
fs.writeFileSync('components/sections/hero.tsx', hero, 'utf8');

// 2. App download AI text shrink
let appDl = fs.readFileSync('components/sections/app-download-section.tsx', 'utf8');
appDl = appDl.replace(
  "fontSize: 'clamp(32px, 4vw, 48px)'",
  "fontSize: 'clamp(26px, 3.2vw, 48px)'"
);
appDl = appDl.replace(
  'className="text-[16px] leading-[1.6]',
  'className="text-[clamp(14px,1.2vw,16px)] leading-[1.6]'
);
fs.writeFileSync('components/sections/app-download-section.tsx', appDl, 'utf8');

// 3. Footer App store buttons
let footer = fs.readFileSync('components/footer/footer.tsx', 'utf8');
footer = footer.replace(
  /className="flex items-center gap-\[clamp\(6px,1\.5vw,10px\)\] rounded-\[10px\] border border-\[#3A3D4C\] bg-black px-\[clamp\(8px,2\.5vw,14px\)\] py-\[clamp\(6px,1\.5vw,8px\)\] transition-colors hover:border-\[#FF5A00\]"/g,
  'className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 rounded-[10px] border border-[#3A3D4C] bg-black px-2 py-1.5 sm:px-3 sm:py-2 md:px-3.5 md:py-2 transition-colors hover:border-[#FF5A00]"'
);
footer = footer.replace(
  /className="h-\[clamp\(16px,4vw,20px\)\] w-\[clamp\(16px,4vw,20px\)\]"/g,
  'className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5"'
);
footer = footer.replace(
  /className="h-\[clamp\(18px,4\.5vw,22px\)\] w-\[clamp\(18px,4\.5vw,22px\)\]"/g,
  'className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] md:h-[22px] md:w-[22px]"'
);
footer = footer.replace(
  /text-\[clamp\(7px,1\.8vw,9px\)\]/g,
  'text-[7px] sm:text-[9px] md:text-[9px]'
);
footer = footer.replace(
  /text-\[clamp\(9\.5px,2\.5vw,12px\)\]/g,
  'text-[9px] sm:text-[11px] md:text-[12px]'
);
fs.writeFileSync('components/footer/footer.tsx', footer, 'utf8');

// 4. Navbar logo for tablet
let nav = fs.readFileSync('components/navbar/navbar.tsx', 'utf8');
nav = nav.replace(
  '<CarQMark className="" />',
  '<CarQMark className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] min-[1025px]:w-[32px] min-[1025px]:h-[32px]" />'
);
nav = nav.replace(
  'className="text-[clamp(22px,2.1vw,34px)] font-semibold tracking-tight text-[#131316]"',
  'className="text-[20px] md:text-[26px] min-[1025px]:text-[34px] font-semibold tracking-tight text-[#131316]"'
);
fs.writeFileSync('components/navbar/navbar.tsx', nav, 'utf8');

