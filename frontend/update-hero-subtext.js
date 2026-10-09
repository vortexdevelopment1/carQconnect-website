const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// Replace subtext
const oldSubtextRegex = /carQconnect brings QR safety[\s\S]*?built for every drive\./g;
const newSubtext = 'Monitor your vehicle, stay connected on every trip, and enable safer public interaction through smart QR, GPS tracking, and intelligent mobility technology.';
content = content.replace(oldSubtextRegex, newSubtext);

// Replace button text
content = content.replace('<span className="buy__label">DOWNLOAD APP</span>', '<span className="buy__label">BUY NOW</span>');
content = content.replace('<a className="buy" href="#download">', '<a className="buy" href="/marketplace">');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
