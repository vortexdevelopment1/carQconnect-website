const fs = require('fs');

function removeBackButton(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/import \{ BackButton \} from "@\/components\/ui\/back-button";\n/g, '');
  content = content.replace(/<div[^>]*><BackButton[^>]+><\/div>\n?/g, '');
  content = content.replace(/<div[^>]*><BackButton[^>]+><\/div>/g, '');
  fs.writeFileSync(filePath, content, 'utf8');
}

removeBackButton('app/(site)/gps/page.tsx');
removeBackButton('app/(site)/safety/page.tsx');
removeBackButton('app/(site)/trip-intelligence/page.tsx');
removeBackButton('app/(site)/vehicle-utilities/page.tsx');
