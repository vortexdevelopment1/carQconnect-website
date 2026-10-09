const fs = require('fs');
let content = fs.readFileSync('components/qr/qr-scanner-demo.tsx', 'utf8');

const paragraph = `<p className="mb-5 text-[14px] text-[#5B6070]">
              Anyone can scan it with a phone camera.
            </p>`;

const paragraphWithButton = `<p className="mb-5 text-[14px] text-[#5B6070]">
              Anyone can scan it with a phone camera.
            </p>

            <button
              onClick={handleSimulate}
              className="rounded-[10px] border-[1.5px] border-[#FF5A00] bg-white px-6 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-[#FF5A00] transition-colors duration-200 hover:bg-[#FF5A00] hover:text-white"
            >
              Simulate scan
            </button>`;

content = content.replace(paragraph, paragraphWithButton);
fs.writeFileSync('components/qr/qr-scanner-demo.tsx', content, 'utf8');
