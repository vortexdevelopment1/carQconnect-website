const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

const replacement = `.buy {
  display: inline-flex !important;
  height: clamp(38px, 4vw, 50px) !important;
  pointer-events: auto !important;
  position: relative;
  z-index: 10;
  align-items: center !important;
  justify-content: center !important;
}
.buy__label {
  font-size: clamp(14px, 1.4vw, 16px) !important;
}
.buy__body {
  height: 100% !important;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%) !important;
  background: linear-gradient(90deg, #ff5a14 0%, #ff3d00 100%) !important;
  padding: 0 32px 0 20px !important;
  border-radius: 0 !important;
}`;

content = content.replace(/\.buy \{[\s\S]*?\.buy__body \{[\s\S]*?border-radius: 0 !important;\s*\}/, replacement);

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
