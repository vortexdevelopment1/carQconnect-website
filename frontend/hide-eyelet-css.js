const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

// We can just set display: none to them to be safe, or just regex replace them.
// Setting display: none is safer.
content = content + "\n.buy::after { display: none !important; }\n.buy__body::before { display: none !important; }\n";

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
