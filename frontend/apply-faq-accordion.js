const fs = require('fs');
let file = fs.readFileSync('components/sections/faq-accordion.tsx', 'utf8');

file = file.replace(/className="flex w-full items-start justify-between text-left py-4 px-5"/g, 'className="flex w-full items-start justify-between text-left py-4 px-5 faq-item-button"');
file = file.replace(/<span className="font-semibold text-\[15px\] leading-tight text-white pr-4">/g, '<span className="font-semibold text-[15px] leading-tight text-white pr-4 faq-item-title">');
file = file.replace(/<span className="font-semibold text-\[15px\] leading-tight text-gray-900 pr-4">/g, '<span className="font-semibold text-[15px] leading-tight text-gray-900 pr-4 faq-item-title">');
file = file.replace(/className="h-4 w-4 shrink-0 transition-transform duration-300"/g, 'className="h-4 w-4 shrink-0 transition-transform duration-300 faq-item-icon"');
file = file.replace(/className="pb-4 px-5 text-\[14px\] leading-relaxed text-white\/60"/g, 'className="pb-4 px-5 text-[14px] leading-relaxed text-white/60 faq-item-answer"');
file = file.replace(/className="pb-4 px-5 text-\[14px\] leading-relaxed text-gray-600"/g, 'className="pb-4 px-5 text-[14px] leading-relaxed text-gray-600 faq-item-answer"');

fs.writeFileSync('components/sections/faq-accordion.tsx', file, 'utf8');
