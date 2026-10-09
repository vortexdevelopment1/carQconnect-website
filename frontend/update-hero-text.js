const fs = require('fs');
let content = fs.readFileSync('components/sections/hero.tsx', 'utf8');

// Replace heading
content = content.replace('<span className="hero__word" style={{ "--i": 0 } as CSSProperties}>One car.</span>', '<span className="hero__word" style={{ "--i": 0 } as CSSProperties}>CONNECT YOUR VEHICLE</span>');
content = content.replace('<span className="hero__word" style={{ "--i": 1 } as CSSProperties}>One connected</span>', '<span className="hero__word" style={{ "--i": 1 } as CSSProperties}>PROTECT EVERY</span>');
content = content.replace('<span className="hero__word" style={{ "--i": 2 } as CSSProperties}>command center.</span>', '<span className="hero__word" style={{ "--i": 2 } as CSSProperties}>JOURNEY</span>');

// Replace subtext
const oldSubtext = 'carQconnect brings QR safety, live GPS and dash-cam-ready visibility into one secure vehicle ecosystem - built for every drive.';
const newSubtext = 'Monitor your vehicle, stay connected on every trip, and enable safer public interaction through smart QR, GPS tracking, and intelligent mobility technology.';
content = content.replace(oldSubtext, newSubtext);

// Modify font sizes to be smaller as requested
content = content.replace('font-size: clamp(40px, 5vw, 88px) !important;', 'font-size: clamp(32px, 4vw, 70px) !important;');
content = content.replace('font-weight: 800 !important;', 'font-weight: 700 !important;');

fs.writeFileSync('components/sections/hero.tsx', content, 'utf8');
