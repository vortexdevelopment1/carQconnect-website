const fs = require('fs');

let navContent = fs.readFileSync('components/navbar/navbar.tsx', 'utf8');
navContent = navContent.replace(
  '<header ',
  '<header data-type-scale="off" '
);
fs.writeFileSync('components/navbar/navbar.tsx', navContent, 'utf8');

let footContent = fs.readFileSync('components/footer/footer.tsx', 'utf8');
footContent = footContent.replace(
  '<footer ',
  '<footer data-type-scale="off" '
);
fs.writeFileSync('components/footer/footer.tsx', footContent, 'utf8');
