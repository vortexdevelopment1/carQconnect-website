const fs = require('fs');
let file = fs.readFileSync('components/sections/hero.tsx', 'utf8');

const newCss = `
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

        /* ---------- GLOBAL / BASE ---------- */
        .hero .hero__copy {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
          gap: clamp(10px, 1.6vw, 18px) !important;
          text-align: right !important;
          padding-right: clamp(16px, 4vw, 24px) !important;
          position: absolute !important;
          inset: 0 !important;
          bottom: auto !important;
          justify-content: flex-start !important;
          padding-top: 0 !important;
          margin: 0 !important;
          height: auto !important;
        }

        .hero .hero__line,
        .hero .hero__word {
          display: block !important;
          white-space: nowrap !important;
        }

        .hero .hero__title {
          margin-bottom: 0 !important;
          text-align: right !important;
          font-size: clamp(18px, 5vw, 56px) !important;
          line-height: 1.04 !important;
        }

        .hero .hero__lede {
          font-family: 'Inter', system-ui, sans-serif !important;
          line-height: 1.5 !important;
          max-width: min(46ch, 52%) !important;
          text-align: right !important;
          margin: 0 !important;
        }

        .hero .buy {
          align-self: flex-end !important;
          margin-top: 0 !important;
          filter: drop-shadow(0 3px 8px rgba(255, 90, 20, 0.35));
          transition: transform 0.2s ease;
          position: relative;
        }
        .hero .buy::before {
          content: '';
          position: absolute;
          inset: -6px;
          z-index: -1;
        }
        .hero .buy:active {
          transform: scale(0.96);
        }
        .hero .buy__label {
          font-family: 'Inter', system-ui, sans-serif !important;
          font-weight: 700 !important;
          letter-spacing: 0.02em !important;
        }

        /* ---------- ALL SCREENS < 1100px ---------- */
        @media (max-width: 1100px) {
          .hero .buy__body {
            min-height: clamp(34px, 3vw + 18px, 52px) !important;
            padding-inline: clamp(14px, 2.2vw + 4px, 28px) !important;
          }
          .hero .buy__label {
            font-size: clamp(12px, 1.2vw + 6px, 17px) !important;
          }
          .hero .hero__lede {
             font-size: clamp(11px, 1.4vw, 16px) !important;
          }
        }
        
        /* TABLET & SMALL LAPTOP (640px - 1100px) */
        @media (min-width: 640px) and (max-width: 1100px) {
          .hero .hero__copy {
            top: clamp(28%, 32%, 36%) !important;
            transform: translateY(clamp(-50px, calc(-8vh + 2vw), -25px)) !important;
          }
          .hero {
            height: min(74vw, calc(100svh - 40px)) !important;
            min-height: 380px !important;
          }
        }

        /* ---------- MOBILE (< 640px) ---------- */
        @media (max-width: 639px) {
          .hero .hero__copy {
            top: clamp(70px, 15vw, 90px) !important;
            transform: none !important;
          }
          .hero .hero__title {
            font-size: clamp(20px, 6vw, 26px) !important;
          }
          .hero .hero__lede {
            max-width: none !important;
            font-size: 11px !important;
          }
        }

        @media (max-width: 420px) {
          .hero .buy__body {
            min-height: 28px !important;
            padding-inline: 12px !important;
          }
          .hero .buy__label {
            font-size: 10px !important;
          }
        }

        /* ---------- DESKTOP (> 1100px) ---------- */
        @media (min-width: 1101px) {
          .hero .hero__copy {
            justify-content: flex-end !important;
            padding-bottom: 80px !important;
            height: 100% !important;
            top: auto !important;
          }
          .hero .hero__title {
            font-size: clamp(56px, 4.2vw, 68px) !important;
            line-height: 1.08 !important;
          }
          .hero .hero__lede {
            font-size: clamp(16px, 1.3vw, 18px) !important;
            max-width: 580px !important;
          }
          .hero .buy__body {
            min-height: clamp(52px, 3.4vw, 76px) !important;
            padding-inline: clamp(28px, 2.2vw, 44px) clamp(34px, 3vw, 58px) !important;
          }
          .hero .buy__label {
            font-size: clamp(17px, 1.45vw, 28px) !important;
          }
        }

        /* ---------- LANDSCAPE PHONES ---------- */
        @media (orientation: landscape) and (max-height: 500px) {
          .hero .hero__copy {
            top: 15% !important;
            transform: none !important;
          }
        }
`;

// Replace everything between dangerouslySetInnerHTML={{ __html: ` and ` }} />
const startStr = "dangerouslySetInnerHTML={{";
const endStr = "/>";

const startIdx = file.indexOf(startStr);
const endIdx = file.indexOf(endStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `dangerouslySetInnerHTML={{ __html: \`${newCss}\` }}\n      />`;
  file = file.slice(0, startIdx) + replacement + file.slice(endIdx + endStr.length);
  fs.writeFileSync('components/sections/hero.tsx', file, 'utf8');
  console.log("Successfully replaced CSS!");
} else {
  console.error("Could not find style block to replace!");
}
