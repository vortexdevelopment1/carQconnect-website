const fs = require('fs');

let footer = fs.readFileSync('components/footer/footer.tsx', 'utf8');

// Change watermark to absolute so it doesn't add height to the footer
footer = footer.replace(
  'className="pointer-events-none relative z-[1] mb-0 pb-6 -mt-6 md:-mt-8 select-none whitespace-normal text-center font-display text-[clamp(60px,15.5vw,230px)] font-bold leading-[0.9] tracking-[-0.05em] text-transparent bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text"',
  'className="pointer-events-none absolute bottom-[-5%] left-0 w-full z-[0] select-none whitespace-normal text-center font-display text-[clamp(60px,15.5vw,230px)] font-bold leading-[0.9] tracking-[-0.05em] text-transparent bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text"'
);

fs.writeFileSync('components/footer/footer.tsx', footer, 'utf8');
