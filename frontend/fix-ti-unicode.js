const fs = require('fs');
let ti = fs.readFileSync('app/(site)/trip-intelligence/page.tsx', 'utf8');
ti = ti.replace(/\ufffd\?/g, '-');
ti = ti.replace(/\?/g, '-');
fs.writeFileSync('app/(site)/trip-intelligence/page.tsx', ti, 'utf8');
