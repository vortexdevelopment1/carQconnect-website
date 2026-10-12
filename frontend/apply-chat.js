const fs = require('fs');
let file = fs.readFileSync('components/sections/app-download-section.tsx', 'utf8');

// Replace the previous style block with the new one covering chat mockup and precise numbers.
const newStyle = `
      <style dangerouslySetInnerHTML={{ __html: \`
        @media (max-width: 640px) {
          #download {
            padding-inline: clamp(12px, 4vw, 18px) !important;
            padding-block: clamp(24px, 6.5vw, 40px) !important;
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
            width: clamp(28px, 9vw, 38px) !important;
            height: clamp(28px, 9vw, 38px) !important;
          }
          #download .feature-icon-wrapper svg {
            width: 50% !important;
            height: 50% !important;
          }
          #download .feature-text-block {
            min-width: 0 !important;
          }
          #download .feature-title {
            font-size: clamp(12px, 3.6vw, 15px) !important;
            line-height: 1.25 !important;
          }
          #download .feature-desc {
            font-size: clamp(10.5px, 3vw, 13.5px) !important;
            line-height: 1.5 !important;
          }
          #download .store-btn {
            height: clamp(40px, 12vw, 48px) !important;
            max-width: 220px !important;
            gap: 8px !important;
          }
          #download .store-btn-small {
            font-size: clamp(8px, 2.4vw, 10px) !important;
          }
          #download .store-btn-text {
            font-size: clamp(13px, 3.8vw, 16px) !important;
          }
          #download .chat-card-wrap {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: hidden !important;
          }
          #download .chat-card {
            padding: clamp(10px, 3.2vw, 16px) !important;
            border-radius: clamp(12px, 3.6vw, 18px) !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          #download .chat-header-text {
            font-size: clamp(9.5px, 2.8vw, 12px) !important;
          }
          #download .chat-bubble {
            font-size: clamp(10.5px, 3.1vw, 13px) !important;
            line-height: 1.4 !important;
            padding: clamp(7px, 2.2vw, 11px) clamp(10px, 3vw, 14px) !important;
            max-width: 88% !important;
          }
          #download .chat-pills {
            gap: 6px !important;
            flex-wrap: wrap !important;
          }
          #download .chat-pill {
            font-size: clamp(9.5px, 2.8vw, 12px) !important;
            padding: 6px 10px !important;
          }
          #download .chat-note {
            font-size: clamp(9px, 2.6vw, 11.5px) !important;
          }
        }
        @media (max-width: 420px) {
          #download .store-btn-wrapper {
            flex-direction: column !important;
          }
          #download .store-btn {
            width: 100% !important;
            max-width: 220px !important;
          }
        }
      \`}} />
`;

file = file.replace(/<style dangerouslySetInnerHTML=\{\{[\s\S]*?\}\} \/>/, newStyle.trim());

// Add classes to chat card
file = file.replace('className="relative w-full bg-[#1B1D26] border border-[#2A2D3A] rounded-[24px] p-6 shadow-[0_20px_60px_rgba(255,90,0,0.1)]"', 'className="relative w-full bg-[#1B1D26] border border-[#2A2D3A] rounded-[24px] p-6 shadow-[0_20px_60px_rgba(255,90,0,0.1)] chat-card"');
file = file.replace('className="text-[13px] font-medium text-white"', 'className="text-[13px] font-medium text-white chat-header-text"');
file = file.replace('className="bg-[#FF5A00] text-white px-5 py-3 rounded-2xl rounded-tr-sm text-[14px] leading-relaxed max-w-[85%] shadow-sm"', 'className="bg-[#FF5A00] text-white px-5 py-3 rounded-2xl rounded-tr-sm text-[14px] leading-relaxed max-w-[85%] shadow-sm chat-bubble"');
file = file.replace('className="bg-[#2A2D3A] text-white px-5 py-3 rounded-2xl rounded-tl-sm text-[14px] max-w-[85%] shadow-sm"', 'className="bg-[#2A2D3A] text-white px-5 py-3 rounded-2xl rounded-tl-sm text-[14px] max-w-[85%] shadow-sm chat-bubble"');
file = file.replace('className="flex flex-wrap gap-2.5 max-w-[90%]"', 'className="flex flex-wrap gap-2.5 max-w-[90%] chat-pills"');
file = file.replace(/className="px-4 py-2 rounded-full border border-\[#2A2D3A\] text-\[12px\] text-\[#A8ACBA\] bg-\[#12131A\]"/g, 'className="px-4 py-2 rounded-full border border-[#2A2D3A] text-[12px] text-[#A8ACBA] bg-[#12131A] chat-pill"');
file = file.replace('className="text-[12px] text-[#A8ACBA]/60 mt-2"', 'className="text-[12px] text-[#A8ACBA]/60 mt-2 chat-note"');
file = file.replace('className="relative flex justify-center items-center lg:justify-end lg:pr-12 min-h-[380px] z-10"', 'className="relative flex justify-center items-center lg:justify-end lg:pr-12 min-h-[380px] z-10 chat-card-wrap"');

file = file.replace(/<span className="text-\[10px\] leading-tight text-white\/70">/g, '<span className="text-[10px] leading-tight text-white/70 store-btn-small">');

fs.writeFileSync('components/sections/app-download-section.tsx', file, 'utf8');

