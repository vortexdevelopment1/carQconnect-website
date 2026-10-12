const fs = require('fs');
let css = fs.readFileSync('app/(site)/globals.css', 'utf8');

// Replace the entire .container-page block safely using regex
css = css.replace(/\.container-page\s*\{[\s\S]*?\}/g, `.container-page {
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: clamp(16px, 4vw, 24px);
}`);

// Add 1600px breakpoint
if (!css.includes('@media (min-width: 1600px) {')) {
  css += `\n@media (min-width: 1600px) {
  .container-page { max-width: 1240px; }
  html { font-size: 17px; }
}\n`;
}

fs.writeFileSync('app/(site)/globals.css', css, 'utf8');
