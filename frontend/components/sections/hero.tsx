"use client";

import { HeroQrScanner } from "@/components/qr/hero-qr-scanner";

const Letters = ({ text }: { text: string }) => (
  <>
    <span className="sr-only">{text}</span>
    <span aria-hidden="true">
      {Array.from(text).map((ch, i) => (
        <span key={i} className="hero__ch" style={{ ["--i" as any]: i }}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  </>
);

export function Hero() {
  return (
    <section data-type-scale="off" className="hero" id="home">
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
            --title: clamp(44px, min(4.95vw, 9.2svh), 76px);
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
          width: auto !important;
          max-width: none !important;
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
          z-index: 3 !important;
          pointer-events: none;
        }

        .hero .hero__line,
        .hero .hero__word {
          display: block !important;
          white-space: nowrap !important;
        }

        .hero .hero__title {
          --hero-ink: #111;
          margin: 0 !important;
          text-align: right !important;
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif !important;
          font-weight: 600 !important;
          font-synthesis: none !important;
          font-stretch: 100% !important;
          letter-spacing: -0.03em !important;
          line-height: 1.04 !important;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          font-kerning: normal;
          font-size: var(--title) !important;
          color: var(--hero-ink) !important;
        }

        .hero .hero__ch {
          display: inline-block;
          opacity: 0;
          transform: translate3d(0, .32em, 0) scale(1.04);
          filter: blur(5px);
          will-change: transform, opacity, filter;
          animation: hero-ch 760ms cubic-bezier(.16, 1, .3, 1) forwards;
          animation-delay: calc(280ms + var(--i) * 42ms);
        }

        @keyframes hero-ch {
          0%   { opacity: 0; transform: translate3d(0, .32em, 0) scale(1.04); filter: blur(5px); }
          55%  { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: none; filter: blur(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero .hero__ch {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }

        .hero .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .hero .hero__lede {
          margin: 0 !important;
          text-align: right !important;
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: var(--lede) !important;
          line-height: 1.5 !important;
          max-width: var(--lede-w) !important;
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }

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
          animation: none !important;
          opacity: 1 !important;
        }
        .hero .buy::before {
          content: '';
          position: absolute;
          inset: -6px;
          z-index: -1;
        }
        .hero .buy:active { transform: scale(0.96); }

        .hero .buy__body {
          min-height: var(--btn-h) !important;
          padding-inline: var(--btn-px) !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 0.5em !important;
        }
        .hero .buy__label {
          font-family: 'Inter', system-ui, sans-serif !important;
          font-weight: 700 !important;
          letter-spacing: 0.02em !important;
          font-size: var(--btn-fs) !important;
          white-space: nowrap !important;
        }
        .hero .buy__arrow {
          flex: none !important;
          width: 1.2em !important;
          height: 1.2em !important;
          font-size: var(--btn-fs) !important;
          color: inherit !important;
          transition: transform .2s ease !important;
        }
        @media (hover: hover) {
          .hero .buy:hover .buy__arrow { transform: translateX(3px); }
        }
        @media (max-width: 639px) {
          .hero .buy__body { padding-right: calc(var(--btn-px) + 0.35em) !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero .buy__arrow { transition: none !important; }
          .hero .buy:hover .buy__arrow { transform: none !important; }
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
          <span className="hero__line">
            <Letters text="CONNECT YOUR VEHICLE" />
          </span>
          <span className="hero__line">
            <Letters text="PROTECT EVERY" />
          </span>
          <span className="hero__line">
            <Letters text="JOURNEY" />
          </span>
        </h1>
        <p className="hero__lede">
          <span className="hero__line">Monitor your vehicle, stay connected on every trip, and enable</span>{" "}
          <span className="hero__line">safer public interaction through smart QR, GPS tracking, and</span>{" "}
          <span className="hero__line">intelligent mobility technology.</span>
        </p>

        <a className="buy" href="/marketplace">
          <span className="buy__body">
            <span className="buy__label">Download App</span>
            <svg
              className="buy__arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;