const fs = require('fs');
let content = fs.readFileSync('components/footer/footer.tsx', 'utf8');
content = content.replace(
  'import { ShieldCheck, Apple, Smartphone } from "lucide-react";',
  'import { ShieldCheck, Apple, Smartphone, ArrowUp } from "lucide-react";'
);
content = content.replace(
  '<a href="#" onClick={scrollToTop} className="text-[13px] font-semibold text-[#A8ACBA] transition-colors hover:text-[#FF5A00]">\n            Back to top &uarr;\n          </a>',
  '<a href="#" onClick={scrollToTop} className="group flex items-center gap-1.5 text-[13px] font-semibold text-[#A8ACBA] transition-colors hover:text-[#FF5A00]">\n            Back to top <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />\n          </a>'
);
fs.writeFileSync('components/footer/footer.tsx', content, 'utf8');
