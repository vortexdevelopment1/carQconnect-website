const fs = require('fs');

// Fix how-it-works/page.tsx
let hiwContent = fs.readFileSync('app/(site)/how-it-works/page.tsx', 'utf8');

// Revert the wrong one
hiwContent = hiwContent.replace(
  '<div data-type-scale="off" className="container-page relative z-10 flex flex-col items-center">',
  '<div className="container-page relative z-10 flex flex-col items-center">'
);

// Wrap the entire fragment return
hiwContent = hiwContent.replace(
  'return (\n    <>',
  'return (\n    <div data-type-scale="off">'
);
hiwContent = hiwContent.replace(
  '    </>\n  );',
  '    </div>\n  );'
);

fs.writeFileSync('app/(site)/how-it-works/page.tsx', hiwContent, 'utf8');
