const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

content = content.replace('background-image: url("/hero-section-clean-widescreen.jpg");', '');
content = content.replace('background-repeat: no-repeat;', '');
content = content.replace('background-position: center 85%;', '');
content = content.replace('background-size: cover;', '');

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
