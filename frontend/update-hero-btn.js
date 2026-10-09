const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// Replace "BUY NOW" with "Download App"
content = content.replace('<span className="buy__label">BUY NOW</span>', '<span className="buy__label">Download App</span>');

// Remove CartIcon and divider
content = content.replace('<CartIcon />', '');
content = content.replace('<span className="buy__divider" aria-hidden="true" />', '');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
