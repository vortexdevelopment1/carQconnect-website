const fs = require('fs');
let file = fs.readFileSync('components/sections/app-download-section.tsx', 'utf8');

const cssBlock = `
      <style dangerouslySetInnerHTML={{ __html: \`
        @media (max-width: 640px) {
          #download {
            padding-inline: clamp(14px, 4.5vw, 20px) !important;
            padding-block: clamp(28px, 7vw, 44px) !important;
            padding-bottom: 72px !important;
          }
          #download .container-page {
            padding-inline: 0 !important;
          }
          #download .left-col {
            gap: clamp(10px, 3vw, 16px) !important;
          }
          #download .eyebrow {
            font-size: clamp(10px, 2.9vw, 12px) !important;
          }
          #download .eyebrow-line {
            width: clamp(22px, 7vw, 32px) !important;
          }
          #download .heading {
            font-size: clamp(18px, 5.8vw, 28px) !important;
            line-height: 1.15 !important;
            letter-spacing: -0.015em !important;
            text-wrap: balance !important;
          }
          #download .paragraph {
            font-size: clamp(12px, 3.5vw, 15px) !important;
            line-height: 1.55 !important;
            max-width: 100% !important;
          }
          #download .feature-list {
            gap: clamp(12px, 3.6vw, 18px) !important;
          }
          #download .feature-item {
            gap: clamp(10px, 3vw, 14px) !important;
          }
          #download .feature-icon-wrapper {
            width: clamp(30px, 9.5vw, 40px) !important;
            height: clamp(30px, 9.5vw, 40px) !important;
          }
          #download .feature-icon-wrapper svg {
            width: 50% !important;
            height: 50% !important;
          }
          #download .feature-text-block {
            min-width: 0 !important;
          }
          #download .feature-title {
            font-size: clamp(12.5px, 3.7vw, 16px) !important;
            line-height: 1.25 !important;
          }
          #download .feature-desc {
            font-size: clamp(11.5px, 3.3vw, 14px) !important;
            line-height: 1.5 !important;
          }
          #download .store-btn {
            min-height: 44px !important;
          }
          #download .store-btn-text {
            font-size: clamp(12px, 3.4vw, 15px) !important;
          }
        }
        @media (max-width: 420px) {
          #download .store-btn-wrapper {
            flex-direction: column !important;
          }
          #download .store-btn {
            width: 100% !important;
          }
        }
      \`}} />
`;

file = file.replace(
  '<section id="download" className="bg-[#12131A] pt-[64px] pb-[72px] px-[32px] overflow-hidden">',
  '<section id="download" data-type-scale="off" className="bg-[#12131A] pt-[64px] pb-[72px] px-[32px] overflow-hidden">\n' + cssBlock
);

// Add class names
file = file.replace('className="flex flex-col z-20"', 'className="flex flex-col z-20 left-col"');
file = file.replace('className="w-[32px] h-[2px] bg-[#FF5A00]"', 'className="w-[32px] h-[2px] bg-[#FF5A00] eyebrow-line"');
file = file.replace('className="text-[clamp(9.5px,2vw,12px)] font-bold tracking-[0.16em] text-[#FF5A00] uppercase"', 'className="text-[clamp(9.5px,2vw,12px)] font-bold tracking-[0.16em] text-[#FF5A00] uppercase eyebrow"');
file = file.replace('className="font-display font-bold text-white mb-5"', 'className="font-display font-bold text-white mb-5 heading"');
file = file.replace('className="text-[clamp(14px,1.2vw,16px)] leading-[1.6] text-[#A8ACBA] max-w-[480px] mb-8"', 'className="text-[clamp(14px,1.2vw,16px)] leading-[1.6] text-[#A8ACBA] max-w-[480px] mb-8 paragraph"');
file = file.replace('className="flex flex-col gap-6 mb-10 max-w-[480px]"', 'className="flex flex-col gap-6 mb-10 max-w-[480px] feature-list"');
file = file.replace(/className="flex items-start gap-4"/g, 'className="flex items-start gap-4 feature-item"');
file = file.replace(/className="w-\[36px\] h-\[36px\] rounded-full bg-\[#1B1D26\] border border-\[#2A2D3A\] flex items-center justify-center shrink-0"/g, 'className="w-[36px] h-[36px] rounded-full bg-[#1B1D26] border border-[#2A2D3A] flex items-center justify-center shrink-0 feature-icon-wrapper"');
file = file.replace(/<div>\s*<p className="text-\[15px\] font-bold text-white leading-tight">/g, '<div className="feature-text-block">\n                <p className="text-[15px] font-bold text-white leading-tight feature-title">');
file = file.replace(/<p className="text-\[14px\] text-\[#A8ACBA\] mt-1\.5 leading-snug">/g, '<p className="text-[14px] text-[#A8ACBA] mt-1.5 leading-snug feature-desc">');
file = file.replace('className="flex flex-col sm:flex-row items-center gap-3 w-full"', 'className="flex flex-col sm:flex-row items-center gap-3 w-full store-btn-wrapper"');
file = file.replace(/className="flex items-center justify-center gap-2\.5 h-\[48px\] bg-black border border-\[#2A2D3A\] rounded-\[8px\] px-5 hover:bg-\[#1B1D26\] transition-colors w-full sm:w-\[180px\]"/g, 'className="flex items-center justify-center gap-2.5 h-[48px] bg-black border border-[#2A2D3A] rounded-[8px] px-5 hover:bg-[#1B1D26] transition-colors w-full sm:w-[180px] store-btn"');
file = file.replace(/<span className="text-\[15px\] font-semibold leading-tight text-white">/g, '<span className="text-[15px] font-semibold leading-tight text-white store-btn-text">');

fs.writeFileSync('components/sections/app-download-section.tsx', file, 'utf8');
