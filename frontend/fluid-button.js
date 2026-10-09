const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

const replacement = `.buy {
  display: inline-flex !important;
  height: clamp(28px, 9.5cqw, 50px) !important;
  pointer-events: auto !important;
  position: relative;
  z-index: 10;
  align-items: center !important;
  justify-content: center !important;
  margin-top: 0 !important;
}
.buy__label {
  font-size: clamp(10px, 3.5cqw, 16px) !important;
}
.buy__body {
  height: 100% !important;
  clip-path: polygon(0 0, calc(100% - 1.2em) 0, 100% 50%, calc(100% - 1.2em) 100%, 0 100%) !important;
  background: linear-gradient(90deg, #ff5a14 0%, #ff3d00 100%) !important;
  padding: 0 2.2em 0 1.4em !important;
  border-radius: 0 !important;
}`;

content = content.replace(/\.buy \{[\s\S]*?\.buy__body \{[\s\S]*?border-radius: 0 !important;\s*\}/, replacement);

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
