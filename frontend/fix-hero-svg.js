const fs = require('fs');

let file = fs.readFileSync('components/qr/hero-qr-scanner.tsx', 'utf8');

// The SVG preserveAspectRatio is currently xMidYMax slice
// Changing to xMidYMax slice might be causing the cut. Let's try xMinYMax slice so the left (GPS) stays visible!
file = file.replace(
  'preserveAspectRatio="xMidYMax slice"',
  'preserveAspectRatio="xMidYMax slice" \n      style={{ objectPosition: "left bottom" }}'
);

// We can also add a responsive class to the SVG in globals.css or just change it directly here.
// Let's use a class to control it via CSS, or just change it to xMinYMax slice.
file = file.replace(
  'preserveAspectRatio="xMidYMax slice"',
  'preserveAspectRatio="xMinYMax slice"'
);

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', file, 'utf8');
