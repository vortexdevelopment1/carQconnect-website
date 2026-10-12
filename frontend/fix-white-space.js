const fs = require('fs');

let css = fs.readFileSync('app/(site)/globals.css', 'utf8');

// The user is seeing a white space at the bottom of the page when overscrolling or if there is a gap.
// By changing the body background to the footer's dark color (#0D0E13), the gap will seamlessly blend with the footer!
// (Assuming all other sections have their own explicit backgrounds).
css = css.replace(
  'body {\n  background-color: #f7f9fc;',
  'body {\n  background-color: #0D0E13;'
);

fs.writeFileSync('app/(site)/globals.css', css, 'utf8');
