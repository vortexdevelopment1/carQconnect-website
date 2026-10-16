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

        /* SHARED GUTTER & BASE */
        .hero {
          --page-gutter: clamp(16px, 2.1vw, 30px);
          --copy-pr: var(--page-gutter);
          --lede: clamp(13px, 0.9vw + 9.5px, 15px);
        }

        /* =====================================================
           MOBILE BASE (up to 767px) - one smooth formula per value
           so nothing jumps when the screen width changes.
             --title   : heading size, 5.3vw (13px min, 41px max)
             --lede    : paragraph size, grows from ~10px (310px) to 15px (767px)
             --lede-w  : paragraph width = about 28 characters-of-em, so it
                         wraps in ~3 lines on phones
             --gap     : space between heading / paragraph / button
             --btn-mt  : extra space above the button, grows with the screen
                         (0 on tiny phones, ~46px from ~470px). Tablet and
                         desktop set it back to 0.
           ===================================================== */
        .hero {
          --copy-top: calc(18vw + 20px);
          --gap: calc(1.2vw + 2px);
          --title: clamp(13px, 5.3vw, 41px);
          --lede: clamp(10px, 1.07vw + 6.8px, 15px);
          --lede-w: min(100%, calc(var(--lede) * 28.5));
          --btn-mt: clamp(0px, 29vw - 92px, 26px);
          --btn-h: clamp(22px, 2vw + 15px, 30px);
          --btn-px: clamp(8px, 1.6vw + 3px, 22px);
          --btn-fs: clamp(8px, 1.1vw + 4.5px, 14px);
        }

        /* Tiny phones: below 320px (e.g. 279px, 299px, 309px). */
        @media (max-width: 319px) {
          .hero {
            --copy-top: calc(14vw + 24px);
            --title: clamp(13px, 5vw, 16px);
            --lede: 9px;
            --lede-w: min(60%, 170px);
            --gap: 5px;
            --btn-mt: 8px;
            --btn-h: 24px;
            --btn-px: 10px;
            --btn-fs: 9px;
          }
        }

        /* Small phones: 320px-359px (e.g. 326px, 345px, 350px) */
        @media (min-width: 320px) and (max-width: 359px) {
          .hero {
            --copy-top: calc(14vw + 22px);
            --title: clamp(17px, 5.5vw, 20px);
            --lede: clamp(10px, 3vw, 11px);
            --lede-w: min(64%, 220px);
            --gap: 6px;
            --btn-mt: 10px;
            --btn-h: 26px;
            --btn-px: 12px;
            --btn-fs: 10px;
          }
        }

        /* Standard phones: 360px-399px (iPhone SE, Galaxy A, iPhone 16) */
        @media (min-width: 360px) and (max-width: 399px) {
          .hero {
            --copy-top: calc(15vw + 16px);
            --title: clamp(20px, 5.5vw, 23px);
            --lede: clamp(11px, 3vw, 12px);
            --lede-w: min(64%, 245px);
            --gap: 7px;
            --btn-mt: 12px;
            --btn-h: 28px;
            --btn-px: 13px;
            --btn-fs: 11px;
          }
        }

        /* Standard-plus phones: 400px-479px (e.g. 419px) */
        @media (min-width: 400px) and (max-width: 479px) {
          .hero {
            --copy-top: calc(14vw + 16px);
            --title: clamp(23px, 5.5vw, 26px);
            --lede: clamp(11.5px, 2.9vw, 13px);
            --lede-w: min(56%, 255px);
            --gap: 7px;
            --btn-mt: 12px;
            --btn-h: clamp(28px, 2.2vw + 16px, 34px);
            --btn-px: clamp(13px, 2vw + 4px, 24px);
            --btn-fs: clamp(11px, 1.2vw + 5px, 13.5px);
          }
        }

        /* Large phones: 480px-639px (e.g. 506px, 555px, 565px, 605px) */
        @media (min-width: 480px) and (max-width: 639px) {
          .hero {
            --copy-top: calc(82px + 2.5vw);
            --title: clamp(27px, 5.4vw, 34px);
            --title-extra: clamp(4px, 1.2vw, 8px);
            --lede: clamp(12.5px, 2.3vw, 14.5px);
            --lede-w: min(56%, 330px);
            --gap: 8px;
            --btn-mt: clamp(8px, 2vw, 14px);
            --btn-h: clamp(32px, 2.6vw + 16px, 38px);
            --btn-px: clamp(15px, 2vw + 8px, 24px);
            --btn-fs: clamp(12px, 1.6vw + 4px, 14px);
          }
        }

        /* Phablets: 640px-767px (e.g. 649px, 656px, 701px, 752px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .hero {
            --copy-top: calc(88px + 2.5vw);
            --title: clamp(34px, 5vw, 40px);
            --title-extra: clamp(6px, 1.2vw, 10px);
            --lede: clamp(13.5px, 1.9vw + 2px, 15.5px);
            --lede-w: min(56%, 400px);
            --gap: 9px;
            --btn-mt: clamp(8px, 1.8vw, 14px);
            --btn-h: clamp(34px, 2.8vw + 16px, 40px);
            --btn-px: clamp(16px, 2vw + 8px, 26px);
            --btn-fs: clamp(12.5px, 1.4vw + 5px, 15px);
          }
        }

        /* TABLETS (768px to 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero {
            --copy-top: calc(10vw + 60px);
            --copy-pr: var(--page-gutter);
            --title: calc(3.22vw + 16.5px);
            --title-extra: clamp(8px, 1.2vw, 14px);
            --lede: clamp(15px, 0.3vw + 13px, 16px);
            --lede-w: min(46%, 350px);
            --gap: clamp(10px, 1.6vw, 18px);
            --btn-mt: 0px;
            height: min(74vw, calc(100svh - 40px)) !important;
            min-height: 380px !important;
          }
        }

        /* DESKTOP (>= 1024px) - UNTOUCHED */
        @media (min-width: 1024px) {
          .hero {
            --copy-top: calc(88px + (100% - 88px) * 0.085);
            --copy-pr: var(--page-gutter);
            --gap: clamp(16px, 1.5vw, 28px);
            --title: clamp(44px, min(4.95vw, 9.2svh), 76px);
            --lede: clamp(16px, 1.15vw, 19px);
            --lede-w: min(50ch, 600px);
            --btn-mt: 0px;
            --btn-h: clamp(52px, 3.4vw, 76px);
            --btn-px: clamp(28px, 2.2vw, 44px);
            --btn-fs: clamp(17px, 1.45vw, 28px);
          }
        }

        /* LANDSCAPE PHONES (short height) */
        @media (orientation: landscape) and (max-height: 500px) {
          .hero {
            --copy-top: 62px;
            --copy-pr: var(--page-gutter);
            --title: clamp(16px, 8.6svh, 34px);
            --lede: clamp(13px, 2.8svh + 4px, 15px);
            --btn-mt: 0px;
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
          padding: 0 var(--page-gutter) 0 0 !important;
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
          margin: 0 0 var(--title-extra, 0px) 0 !important;
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
          line-height: 1.4 !important;
          font-weight: 550 !important;
          color: #383c48 !important;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(255, 255, 255, 0.9) !important;
          max-width: var(--lede-w) !important;
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }

        @media (min-width: 768px) {
          .hero .hero__lede {
            line-height: 1.5 !important;
          }
        }

        @media (max-width: 767px) {
          .hero .hero__lede {
            line-height: 1.35 !important;
            text-wrap: balance;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .hero .hero__lede {
            text-wrap: balance;
          }
        }

        @media (min-width: 640px) and (max-width: 767px) {
          .hero .hero__lede {
            text-wrap: wrap;
          }
        }

        @media (min-width: 400px) and (max-width: 479px) {
          .hero .hero__lede {
            text-wrap: wrap;
          }
        }

        @media (max-width: 1100px) {
          .hero .hero__lede .hero__line {
            display: inline !important;
            white-space: normal !important;
          }
        }

        .hero .buy {
          align-self: flex-end !important;
          margin: var(--btn-mt, 0px) 0 0 0 !important;
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
          <span className="hidden sm:inline">
            <span className="hero__line">Monitor your vehicle, stay connected on every trip, and enable</span>{" "}
            <span className="hero__line">safer public interaction through smart QR, GPS tracking, and</span>{" "}
            <span className="hero__line">intelligent mobility technology.</span>
          </span>
          <span className="sm:hidden">
            Smart QR safety, live GPS tracking and connected vehicle intelligence in one app.
          </span>
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