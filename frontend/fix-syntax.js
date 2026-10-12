const fs = require('fs');

let css = fs.readFileSync('app/(site)/globals.css', 'utf8');

css = css.replace(
  '  /* Tablet overrides removed */\n  .wa-icon { width: 22px; height: 22px; }\n}',
  '  /* Tablet overrides removed */'
);

fs.writeFileSync('app/(site)/globals.css', css, 'utf8');
