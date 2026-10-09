const fs = require('fs');
let content = fs.readFileSync('app/(site)/globals.css', 'utf8');

// 1. .buy::after
content = content.replace(
  'left: clamp(19px, 1.95vw, 27px);',
  'right: clamp(19px, 1.95vw, 27px);\n    left: auto;'
);

// 2. .buy__eyelet
content = content.replace(
  'margin-right: -1.05vw;',
  'margin-left: -1.05vw;\n    margin-right: 0;'
);

// 3. .buy flex direction
content = content.replace(
  '.buy {\n    display: inline-flex;',
  '.buy {\n    display: inline-flex;\n    flex-direction: row-reverse;'
);

// 4. .buy__body
content = content.replace(
  'padding: 0 clamp(25px, 2.55vw, 34px) 0 clamp(43px, 3.6vw, 50px);',
  'padding: 0 clamp(43px, 3.6vw, 50px) 0 clamp(25px, 2.55vw, 34px);'
);
content = content.replace(
  'border-radius: 0 6px 6px 0;',
  'border-radius: 6px 0 0 6px;'
);
content = content.replace(
  'clip-path: polygon(16px 0, 100% 0, 100% 100%, 16px 100%, 0 50%);',
  'clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%);'
);

// 5. .buy__body::before
content = content.replace(
  'left: 19px;\n    top: 50%;',
  'right: 19px;\n    left: auto;\n    top: 50%;'
);

fs.writeFileSync('app/(site)/globals.css', content, 'utf8');
