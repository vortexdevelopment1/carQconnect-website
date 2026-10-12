const fs = require('fs');

let css = fs.readFileSync('app/(site)/globals.css', 'utf8');

css = css.replace(
  /\/\* Tablet \*\/[\s\S]*?@media \(min-width: 640px\) and \(max-width: 1023px\) \{[\s\S]*?\}/,
  '/* Tablet overrides removed */'
);
fs.writeFileSync('app/(site)/globals.css', css, 'utf8');

