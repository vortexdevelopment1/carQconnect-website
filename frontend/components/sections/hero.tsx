import type { CSSProperties } from "react";
import { HeroQrScanner } from "@/components/qr/hero-qr-scanner";

function CartIcon() {
  return (
    <svg
      className="buy__cart"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 3h2.2l2.5 11.3h11.1" />
      <path d="M6.6 6.4h14.4l-1.9 6.9H8.1" />
      <circle cx="9.4" cy="19.4" r="1.7" />
      <circle cx="18.2" cy="19.4" r="1.7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section data-type-scale="off" className="hero" id="home">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

        /* =====================================================
           TUNING VARIABLES (change numbers ONLY here, per range)
           --copy-top : where the text block starts (from hero top)
           --title    : H1 font-size
           --lede     : grey paragraph font-size
           --lede-w   : max width of the grey paragraph
           --btn-*    : Download App button size
           ===================================================== */

        /* PHONES (< 640px) */
        .hero {
          --copy-top: calc(20.6vw + 18px);
          --copy-pr: clamp(14px, 4vw, 24px);
          --gap: clamp(6px, 1.6vw, 18px);
          --title: clamp(15px, 5.4vw, 34px);
          --lede: clamp(7px, 1.9vw + 0.5px, 12px);
          --lede-w: 60%;
          --btn-h: clamp(26px, 3.1vw + 15px, 52px);
          --btn-px: clamp(10px, 2vw + 3px, 28px);
          --btn-fs: clamp(9px, 1.3vw + 5px, 17px);
        }

        /* PHONES ONLY: smaller Download App button */
        @media (max-width: 639px) {
          .hero {
            --btn-h: clamp(22px, 2vw + 15px, 30px);
            --btn-px: clamp(8px, 1.6vw + 3px, 22px);
            --btn-fs: clamp(8px, 1.1vw + 4.5px, 14px);
          }
        }

        /* TABLETS / SMALL LAPTOPS (640px - 1100px) */
        @media (min-width: 640px) and (max-width: 1100px) {
          .hero {
            --copy-top: calc(10vw + 72px);
            --title: calc(3.22vw + 16.5px);
            --lede: clamp(12px, 1.35vw + 3px, 16px);
            --lede-w: min(46ch, 52%);
            --gap: clamp(10px, 1.6vw, 18px);
            height: min(74vw, calc(100svh - 40px)) !important;
            min-height: 380px !important;
          }
        }

        /* LAPTOPS / DESKTOPS / BIG MONITORS (>= 1101px) */
        @media (min-width: 1101px) {
          .hero {
            --copy-top: calc(88px + (100% - 88px) * 0.085);
            --copy-pr: clamp(40px, 3.9vw, 96px);
            --gap: clamp(16px, 1.5vw, 28px);
            --title: clamp(44px, min(4.7vw, 9.2svh), 96px);
            --lede: clamp(16px, 1.15vw, 19px);
            --lede-w: 600px;
            --btn-h: clamp(52px, 3.4vw, 76px);
            --btn-px: clamp(28px, 2.2vw, 44px);
            --btn-fs: clamp(17px, 1.45vw, 28px);
          }
        }

        /* LANDSCAPE PHONES (short height) */
        @media (orientation: landscape) and (max-height: 500px) {
          .hero {
            --copy-top: 62px;
            --title: clamp(16px, 8.6svh, 34px);
            --lede: clamp(8px, 2.8svh, 12px);
            --btn-h: clamp(24px, 8svh, 36px);
          }
        }

        /* =====================================================
           RULES (same for every screen, they only read variables)
           ===================================================== */
        .hero .hero__copy {
          position: absolute !important;
          top: var(--copy-top) !important;
          left: 0 !important;
          right: 0 !important;
          width: auto !important;          /* removes any global width cap */
          max-width: none !important;      /* removes any global max-width (e.g. 1200px) */
          bottom: auto !important;
          height: auto !important;
          margin: 0 !important;
          padding: 0 var(--copy-pr) 0 0 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
          justify-content: flex-start !important;
          gap: var(--gap) !important;
          text-align: right !important;
          transform: none !important;
          z-index: 3 !important;           /* text always above the cube image */
          pointer-events: none;            /* only the button is clickable */
        }

        .hero .hero__line,
        .hero .hero__word {
          display: block !important;
          white-space: nowrap !important;
        }

        /* TITLE: reference-style typography (lighter stroke, tighter spacing) */
        .hero .hero__title {
          margin: 0 !important;
          text-align: right !important;
          font-family: 'Archivo', 'Helvetica Neue', Arial, sans-serif !important;
          font-weight: 800 !important;
          font-stretch: 100% !important;
          font-synthesis: none !important;
          -webkit-font-smoothing: antialiased;
          font-size: var(--title) !important;
          line-height: 1.02 !important;
          letter-spacing: -0.028em !important;
        }

        .hero .hero__lede {
          margin: 0 !important;
          text-align: right !important;
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: var(--lede) !important;
          line-height: 1.5 !important;
          max-width: var(--lede-w) !important;
        }

        /* below 1101px the paragraph wraps naturally (smaller width, no overlap on the boxes) */
        @media (max-width: 1100px) {
          .hero .hero__lede .hero__line {
            display: inline !important;
            white-space: normal !important;
          }
        }

        .hero .buy {
          align-self: flex-end !important;
          margin: 0 !important;
          pointer-events: auto;
          position: relative;
          filter: drop-shadow(0 3px 8px rgba(255, 90, 20, 0.35));
          transition: transform 0.2s ease;
        }
        .hero .buy::before {              /* bigger invisible tap area */
          content: '';
          position: absolute;
          inset: -6px;
          z-index: -1;
        }
        .hero .buy:active { transform: scale(0.96); }

        .hero .buy__body {
          min-height: var(--btn-h) !important;
          padding-inline: var(--btn-px) !important;
        }
        .hero .buy__label {
          font-family: 'Inter', system-ui, sans-serif !important;
          font-weight: 700 !important;
          letter-spacing: 0.02em !important;
          font-size: var(--btn-fs) !important;
        }
` }}
      />

      <div className="hero__bg" aria-hidden="true">
        <span className="hero__arc" />
        <span className="hero__warm" />
      </div>

      <div className="hero__product-image" aria-hidden="true">
        <HeroQrScanner />
      </div>

      <div className="hero__copy">
        <h1 className="hero__title">
          <span className="hero__line">CONNECT YOUR VEHICLE</span>
          <span className="hero__line">PROTECT EVERY</span>
          <span className="hero__line">JOURNEY</span>
        </h1>
        <p className="hero__lede">
          <span className="hero__line">Monitor your vehicle, stay connected on every trip, and enable</span>{" "}
          <span className="hero__line">safer public interaction through smart QR, GPS tracking, and</span>{" "}
          <span className="hero__line">intelligent mobility technology.</span>
        </p>

        <a className="buy" href="/marketplace">
          <span className="buy__body">
            <span className="buy__label">Download App</span>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;