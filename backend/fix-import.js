const fs = require('fs');
let content = fs.readFileSync('src/server.js', 'utf8');
content = content.replace('../models/Product.js', './models/Product.js');
fs.writeFileSync('src/server.js', content, 'utf8');
