const fs = require('fs');

// 1. Fix globals.css for smaller text on mobile
let css = fs.readFileSync('app/(site)/globals.css', 'utf8');
css = css.replace(
  '--fs-h1: clamp(20px, 10px + 2.6vw, 54px);',
  '--fs-h1: clamp(18px, 10px + 2vw, 54px);'
);
css = css.replace(
  '--fs-h2: clamp(19px, 11px + 1.9vw, 38px);',
  '--fs-h2: clamp(18px, 10px + 1.9vw, 38px);'
);
fs.writeFileSync('app/(site)/globals.css', css, 'utf8');

// 2. Fix QR scanner demo component
let qr = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');
// Fix padding on both cards
qr = qr.replace(/p-\[34px\]/g, 'p-[clamp(16px,4vw,34px)]');

// Reduce QR code visual size for mobile
qr = qr.replace(/w-\[210px\]/g, 'w-[180px] md:w-[210px]');
qr = qr.replace(/h-\[210px\]/g, 'h-[180px] md:h-[210px]');

// Fix overlap in mini browser bar
qr = qr.replace(
  '<div className="flex items-center justify-center gap-2 relative">',
  '<div className="flex items-center justify-between gap-2 px-1">'
);
qr = qr.replace(
  '<div className="absolute left-0 flex gap-[3px]">',
  '<div className="flex gap-[3px] shrink-0">'
);
qr = qr.replace(
  '<span className="font-mono text-[12px] text-[#7B7F90]">Secure page, no app needed</span>',
  '<span className="font-mono text-[10px] sm:text-[12px] text-[#7B7F90] truncate text-right">Secure page, no app needed</span>'
);

// Reduce button padding
qr = qr.replace(/px-2 py-4 text-\[13px\]/g, 'px-2 py-3 md:py-4 text-[12px] md:text-[13px]');

fs.writeFileSync('components/qr/qr-scanner-demo.tsx', qr, 'utf8');
