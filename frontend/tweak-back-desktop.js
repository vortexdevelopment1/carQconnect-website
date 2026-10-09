const fs = require('fs');

const files = [
  'app/(site)/gps/page.tsx',
  'app/(site)/marketplace/client-page.tsx',
  'app/(site)/qr-safety/page.tsx'
];

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/md:-mt-2/g, 'md:mt-2');
  content = content.replace(/md:-mt-4/g, 'md:mt-2');
  fs.writeFileSync(file, content, 'utf8');
}
