const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('app/(site)').concat(walkSync('components'));

const replacements = [
  { search: /text-\[12px\]/g, replace: 'text-[clamp(9.5px,2vw,12px)]' },
  { search: /text-\[11px\]/g, replace: 'text-[clamp(9px,1.8vw,11px)]' },
  { search: /text-\[13px\]/g, replace: 'text-[clamp(10px,2.2vw,13px)]' },
  { search: /text-xs/g, replace: 'text-[clamp(10px,2vw,12px)]' },
  { search: /text-\[10\.5px\]/g, replace: 'text-[clamp(8.5px,1.8vw,10.5px)]' },
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // We want to apply this specifically to elements that have uppercase AND an orange color
  // So we only search lines containing "uppercase" and "#FF"
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes('uppercase') && lines[i].toUpperCase().includes('#FF')) {
      for (const r of replacements) {
        lines[i] = lines[i].replace(r.search, r.replace);
      }
    }
  }
  
  content = lines.join('\n');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

