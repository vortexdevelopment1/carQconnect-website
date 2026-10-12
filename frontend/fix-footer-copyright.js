const fs = require('fs');
let footer = fs.readFileSync('components/footer/footer.tsx', 'utf8');

footer = footer.replace(
  /<p className="text-\[13px\] text-\[#7B7F90\]">\s*&copy; 2026 carQconnect\. All rights reserved\.\s*<\/p>/g,
  `<p className="text-[13px] text-[#7B7F90] flex flex-col gap-[2px]">
            <span>&copy; 2026 carQconnect.</span>
            <span>All rights reserved.</span>
          </p>`
);

fs.writeFileSync('components/footer/footer.tsx', footer, 'utf8');
