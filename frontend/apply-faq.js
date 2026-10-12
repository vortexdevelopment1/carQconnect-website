const fs = require('fs');
let file = fs.readFileSync('components/sections/faq-section.tsx', 'utf8');

const cssBlock = `
      <style dangerouslySetInnerHTML={{ __html: \`
        @media (max-width: 640px) {
          #faq {
            padding-inline: clamp(12px, 4vw, 18px) !important;
            padding-block: clamp(24px, 6.5vw, 40px) !important;
          }
          #faq .container-page {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          #faq .faq-outer-card {
            border-radius: clamp(12px, 3.6vw, 18px) !important;
          }
          #faq .faq-left-pane {
            padding: clamp(10px, 3.4vw, 16px) !important;
          }
          #faq .faq-right-pane {
            padding: clamp(10px, 3.4vw, 16px) !important;
          }
          #faq .faq-heading {
            font-size: clamp(17px, 5.4vw, 26px) !important;
            line-height: 1.15 !important;
          }
          #faq .faq-paragraph {
            font-size: clamp(11px, 3.2vw, 14px) !important;
            line-height: 1.5 !important;
          }
          #faq .help-card {
            padding: clamp(10px, 3.4vw, 16px) !important;
            border-radius: clamp(12px, 3.6vw, 18px) !important;
            margin-top: clamp(10px, 3vw, 16px) !important;
          }
          #faq .help-title {
            font-size: clamp(12px, 3.5vw, 15px) !important;
          }
          #faq .help-desc {
            font-size: clamp(10.5px, 3vw, 13px) !important;
          }
          #faq .help-link {
            font-size: clamp(11px, 3.2vw, 14px) !important;
          }
          #faq .faq-label {
            font-size: clamp(9.5px, 2.8vw, 12px) !important;
          }
          #faq .faq-sublabel {
            font-size: clamp(10.5px, 3vw, 13px) !important;
          }
          /* Override internal accordion styles */
          #faq .faq-item-button {
            padding: clamp(10px, 3vw, 14px) clamp(10px, 3.2vw, 16px) !important;
            min-height: 44px !important;
          }
          #faq .faq-item-title {
            font-size: clamp(11.5px, 3.4vw, 15px) !important;
            line-height: 1.3 !important;
          }
          #faq .faq-item-answer {
            font-size: clamp(10.5px, 3vw, 13.5px) !important;
            line-height: 1.5 !important;
            padding-bottom: clamp(10px, 3vw, 14px) !important;
            padding-inline: clamp(10px, 3.2vw, 16px) !important;
          }
          #faq .faq-item-icon {
            width: clamp(12px, 3.6vw, 16px) !important;
            height: clamp(12px, 3.6vw, 16px) !important;
          }
          #faq .faq-grid {
             gap: clamp(10px, 3vw, 16px) !important;
          }
        }
      \`}} />
`;

file = file.replace(
  '<section id="faq" className="bg-[#f5f6f8] py-12 sm:py-24">',
  '<section id="faq" data-type-scale="off" className="bg-[#f5f6f8] py-12 sm:py-24">\n' + cssBlock
);

// add classes
file = file.replace('className="overflow-hidden rounded-[2rem] bg-[#101319] shadow-[0_28px_80px_rgba(12,15,22,0.18)]"', 'className="overflow-hidden rounded-[2rem] bg-[#101319] shadow-[0_28px_80px_rgba(12,15,22,0.18)] faq-outer-card"');
file = file.replace('className="grid lg:grid-cols-[0.78fr_1.22fr]"', 'className="grid lg:grid-cols-[0.78fr_1.22fr] faq-grid"');
file = file.replace('className="relative overflow-hidden border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r"', 'className="relative overflow-hidden border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r faq-left-pane"');
file = file.replace('className="mt-7 font-display font-bold text-white"', 'className="mt-7 font-display font-bold text-white faq-heading"');
file = file.replace('className="mt-5 max-w-sm text-base leading-7 text-white/60"', 'className="mt-5 max-w-sm text-base leading-7 text-white/60 faq-paragraph"');
file = file.replace('className="mt-12 rounded-2xl border border-white/10 bg-white/[0.055] p-5"', 'className="mt-12 rounded-2xl border border-white/10 bg-white/[0.055] p-5 help-card"');
file = file.replace('className="mt-4 text-sm font-semibold text-white"', 'className="mt-4 text-sm font-semibold text-white help-title"');
file = file.replace('className="mt-1 text-sm leading-6 text-white/55"', 'className="mt-1 text-sm leading-6 text-white/55 help-desc"');
file = file.replace('className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors pb-1 border-b-2 border-[#FF5A00] hover:text-[#FF5A00]"', 'className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors pb-1 border-b-2 border-[#FF5A00] hover:text-[#FF5A00] help-link"');
file = file.replace('className="p-4 sm:p-7 lg:p-10"', 'className="p-4 sm:p-7 lg:p-10 faq-right-pane"');
file = file.replace('className="text-xs font-bold tracking-[0.16em] text-[#ff7040]"', 'className="text-xs font-bold tracking-[0.16em] text-[#ff7040] faq-label"');
file = file.replace('className="mt-2 text-sm text-white/55"', 'className="mt-2 text-sm text-white/55 faq-sublabel"');

fs.writeFileSync('components/sections/faq-section.tsx', file, 'utf8');

