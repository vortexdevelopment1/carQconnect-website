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
    <section className="hero" id="home">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

        /* =============================================================
           HERO RESPONSIVE (mobile -> tablet -> laptop -> large screens)
           ============================================================= */

        /* ---------- 1) MOBILE (0 - 639px) ---------- */

        /* Text block: right-aligned, nav se thoda neeche */
        .hero .hero__copy {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
          gap: 0 !important;
          text-align: right !important;
          transform: translateY(clamp(8px, 3vw, 16px)) !important;
        }

        /* Heading + paragraph ki lines 3 hi rahengi */
        .hero .hero__line,
        .hero .hero__word {
          display: block !important;
          white-space: nowrap !important;
        }

        /* Heading (black text): mobile par thoda aur BADA */
        @media (max-width: 639px) {
          .hero .hero__title {
            font-size: clamp(15px, 5.4vw, 28px) !important;
            line-height: 1.08 !important;
          }
        }

        /* Heading aur paragraph ke beech gap KAM (mobile) */
        .hero .hero__title {
          margin-bottom: 0 !important;
          text-align: right !important;
        }

        /* Paragraph (gray text): font chhota, aur button ke beech gap KAM */
        .hero .hero__lede {
          font-size: clamp(6px, 2.15vw, 10px) !important;
          line-height: 1.4 !important;
          max-width: none !important;
          margin: clamp(2px, 0.8vw, 5px) 0 clamp(2px, 0.8vw, 4px) auto !important;
          transform: none !important;
          text-align: right !important;
        }

        /* Download App button: mobile par CHHOTA + stylish (arrow icon hata diya) */
        .hero .buy {
          align-self: flex-end !important;
          margin-top: 0 !important;
          filter: drop-shadow(0 3px 8px rgba(255, 90, 20, 0.35));
          transition: transform 0.2s ease;
        }
        .hero .buy:active {
          transform: scale(0.96);
        }
        .hero .buy__body {
          min-height: clamp(22px, 6.6vw, 28px) !important;
          padding-inline: clamp(10px, 3.2vw, 14px) clamp(15px, 4.4vw, 20px) !important;
        }
        .hero .buy__label {
          font-size: clamp(8.5px, 2.5vw, 11px) !important;
          font-weight: 700 !important;
          letter-spacing: 0.02em !important;
        }

        /* ---------- 2) EXTRA SMALL PHONES (<= 359px) ---------- */
        @media (max-width: 359px) {
          .hero .hero__lede {
            font-size: clamp(5.5px, 2.1vw, 7.5px) !important;
          }
          .hero .buy__body {
            min-height: 22px !important;
            padding-inline: 9px 14px !important;
          }
          .hero .buy__label {
            font-size: 8.5px !important;
          }
        }

        /* ---------- 3) TABLET (640px - 1023px) ---------- */
        @media (min-width: 640px) and (max-width: 1023px) {
          .hero .hero__copy {
            transform: translateY(clamp(12px, 2vw, 22px)) !important;
          }
          .hero .hero__lede {
            font-size: clamp(11px, 1.7vw, 14px) !important;
            margin: clamp(4px, 0.8vw, 8px) 0 clamp(12px, 2vw, 20px) auto !important;
          }
          .hero .buy__body {
            min-height: clamp(36px, 5vw, 44px) !important;
            padding-inline: clamp(18px, 2.6vw, 24px) clamp(26px, 3.4vw, 34px) !important;
          }
          .hero .buy__label {
            font-size: clamp(13px, 1.9vw, 16px) !important;
          }
        }

        /* ---------- 4) DESKTOP / LAPTOP (>= 1024px) ---------- */
        @media (min-width: 1024px) {
          .hero .hero__copy {
            transform: translateY(clamp(10px, 1.2vw, 28px)) !important;
          }

          /* Heading aur paragraph ke beech thoda SPACE */
          .hero .hero__lede {
            font-family: 'Inter', system-ui, sans-serif !important;
            font-size: clamp(14px, 1.3vw, 18px) !important;
            line-height: 1.5 !important;
            max-width: 580px !important;
            transform: none !important;
            margin: clamp(14px, 1.6vw, 34px) 0 clamp(18px, 2vw, 40px) auto !important;
          }

          /* Download App button: desktop par BADA */
          .hero .buy__body {
            min-height: clamp(46px, 3.4vw, 76px) !important;
            padding-inline: clamp(22px, 2.2vw, 44px) clamp(32px, 3vw, 58px) !important;
          }
          .hero .buy__label {
            font-family: 'Inter', system-ui, sans-serif !important;
            font-size: clamp(16px, 1.45vw, 28px) !important;
            font-weight: 600 !important;
            letter-spacing: 0.02em !important;
          }
        }

        /* ---------- 5) EXTRA LARGE (>= 1920px) ---------- */
        @media (min-width: 1920px) {
          .hero .hero__lede {
            font-size: clamp(18px, 1.15vw, 28px) !important;
            max-width: 900px !important;
          }
        }

        /* ---------- 6) LANDSCAPE PHONES (kam height) ---------- */
        @media (orientation: landscape) and (max-height: 500px) {
          .hero .hero__copy {
            transform: translateY(4px) !important;
          }
          .hero .hero__lede {
            margin: 2px 0 6px auto !important;
          }
          .hero .buy__body {
            min-height: 26px !important;
          }
        }
      `,
        }}
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
          <span className="hero__line">Monitor your vehicle, stay connected on every trip, and enable</span>
          <span className="hero__line">safer public interaction through smart QR, GPS tracking, and</span>
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