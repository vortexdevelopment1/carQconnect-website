const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('app/(site)').concat(walkSync('components'));

// Excluded files/folders based on instructions
const excluded = [
  'components\\sections\\hero.tsx',
  'components/sections/hero.tsx',
  'app\\(site)\\how-it-works\\page.tsx',
  'app/(site)/how-it-works/page.tsx',
  'components\\sections\\how-it-works-scroll.tsx',
  'components/sections/how-it-works-scroll.tsx',
  'components\\sections\\how-it-works-overview.tsx',
  'components/sections/how-it-works-overview.tsx',
  'components\\navbar\\navbar.tsx',
  'components/navbar/navbar.tsx',
  'components\\footer\\footer.tsx',
  'components/footer/footer.tsx',
];

const classToRemoveRegex = /(?:sm:|md:|lg:|xl:)?(?:text-\[clamp\([^\]]+\)\]|text-\[\d+(?:\.\d+)?(?:px|rem|em)\]|text-(?:xs|sm|base|lg|xl|[2-9]xl)|leading-\[.*?\]|leading-(?:tight|snug|normal|relaxed|loose|none)|tracking-\[.*?\]|tracking-(?:tighter|tight|normal|wide|wider|widest))\s?/g;

files.forEach(file => {
  if (excluded.some(ex => file.includes(ex))) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // We want to replace inside <h1...>, <h2...>, <h3...> tags
  // Using a replacer function for tags
  content = content.replace(/<(h[1-3])([^>]*?)>/g, (match, tag, attrs) => {
    // Modify the className attribute inside attrs
    let newAttrs = attrs.replace(/className=(['"])(.*?)\1/g, (classMatch, quote, classNames) => {
      let newClassNames = classNames.replace(classToRemoveRegex, '').trim();
      return `className=${quote}${newClassNames}${quote}`;
    });
    return `<${tag}${newAttrs}>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
