"use client";

import { HeroQrScanner } from "@/components/qr/hero-qr-scanner";

const MOBILE_CSS = `
@media (max-width: 767px) {
  #home.hero {
    height: auto !important;
    min-height: 100svh !important;
    max-height: none !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    justify-content: flex-start !important;
    padding: clamp(80px, 11svh, 108px) 20px 0 !important;
    overflow: hidden !important;
  }

  #home .hero__copy {
    position: relative !important;
    inset: auto !important;
    order: 1;
    z-index: 2;
    flex: 0 0 auto !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    text-align: left !important;
  }

  #home .hero__title {
    width: 100% !important;
    margin: 0 !important;
    text-align: left !important;
    font-size: clamp(1.15rem, 6.4vw, 2.7rem) !important;
    line-height: 1.1 !important;
    white-space: nowrap !important;
  }

  #home .hero__line {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    text-align: left !important;
    white-space: nowrap !important;
  }

  #home .hero__lede {
    max-width: 42ch !important;
    margin: clamp(10px, 1.8svh, 18px) 0 0 !important;
    text-align: left !important;
    font-size: clamp(0.88rem, 3.7vw, 1.1rem) !important;
    line-height: 1.5 !important;
  }

  #home .buy {
    margin: clamp(18px, 3svh, 32px) 0 0 !important;
    align-self: flex-start !important;
  }

  #home .hero__product-image {
    position: relative !important;
    inset: auto !important;
    order: 2;
    z-index: 1;
    flex: 1 1 auto !important;
    width: calc(100% + 40px) !important;
    height: auto !important;
    min-height: 240px !important;
    aspect-ratio: auto !important;
    margin: 8px -20px 0 !important;
    overflow: hidden !important;
    transform: none !important;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 12%);
    mask-image: linear-gradient(to bottom, transparent 0, #000 12%);
  }

  #home .hero__product-image > * {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    max-height: none !important;
    margin: 0 !important;
    transform: none !important;
  }

  #home .hero__product-image img,
  #home .hero__product-image canvas,
  #home .hero__product-image video,
  #home .hero__product-image svg {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    max-height: none !important;
    object-fit: cover !important;
    object-position: 30% 100% !important;
  }
}

/* Bahut chhoti phones (<=360px) */
@media (max-width: 360px) {
  #home .hero__title { font-size: clamp(1.05rem, 6vw, 1.5rem) !important; }
}

/* Tall phones (height 850px+): content neeche, text bada */
@media (max-width: 767px) and (min-height: 850px) {
  #home.hero {
    padding-top: clamp(104px, 15svh, 150px) !important;
  }
  #home .hero__title {
    font-size: clamp(1.5rem, 6.8vw, 3rem) !important;
  }
  #home .hero__lede {
    font-size: clamp(1rem, 4.2vw, 1.25rem) !important;
    margin-top: clamp(14px, 2.2svh, 24px) !important;
  }
  #home .buy {
    margin-top: clamp(24px, 4svh, 44px) !important;
  }
}

/* Chhota tablet (561-767px): text RIGHT aligned, laptop jaisa */
@media (min-width: 561px) and (max-width: 767px) {
  #home.hero {
    padding-top: clamp(96px, 13svh, 130px) !important;
  }
  #home .hero__copy {
    align-items: flex-end !important;
    text-align: right !important;
  }
  #home .hero__title {
    font-size: clamp(2rem, 5.6vw, 3.2rem) !important;
    text-align: right !important;
  }
  #home .hero__line {
    text-align: right !important;
  }
  #home .hero__lede {
    max-width: 46ch !important;
    text-align: right !important;
    font-size: clamp(1rem, 2.4vw, 1.2rem) !important;
  }
  #home .buy {
    align-self: flex-end !important;
  }
  #home .hero__product-image {
    min-height: 280px !important;
    -webkit-mask-image: none;
    mask-image: none;
  }
  #home .hero__product-image img,
  #home .hero__product-image canvas,
  #home .hero__product-image video,
  #home .hero__product-image svg {
    object-position: 20% 100% !important;
  }
}

/* ===== TABLET / iPAD (768px - 1199px) ===== */
@media (min-width: 768px) and (max-width: 1199px) {
  #home.hero {
    min-height: clamp(640px, 82svh, 1150px) !important;
    padding-top: clamp(150px, 20svh, 280px) !important;
  }

  #home .hero__title {
    font-size: clamp(2.8rem, 6.2vw, 4.6rem) !important;
    line-height: 1.06 !important;
  }

  #home .hero__lede {
    font-size: clamp(1.1rem, 2.1vw, 1.4rem) !important;
    line-height: 1.55 !important;
    max-width: 52ch !important;
    margin-top: clamp(16px, 2.2svh, 28px) !important;
  }

  #home .buy {
    margin-top: clamp(24px, 3.5svh, 44px) !important;
    transform: scale(1.18);
    transform-origin: right center;
  }

  #home .hero__product-image > *,
  #home .hero__product-image img,
  #home .hero__product-image canvas,
  #home .hero__product-image video {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: 15% 100% !important;
  }

  /* Navbar text bada (class names guess hain) */
  header nav a,
  .nav a,
  .navbar a {
    font-size: clamp(0.8rem, 1.5vw, 1rem) !important;
    letter-spacing: 0.04em;
  }
  header .nav__cta,
  header a[href*="membership"] {
    font-size: clamp(0.8rem, 1.4vw, 0.95rem) !important;
    padding: 12px 22px !important;
  }
}
`;

export function Hero() {
  return (
    <section data-type-scale="off" className="hero" id="home">
      {/* Responsive overrides: mobile (<768px) + tablet (768-1199px). Laptop 1200px+ unchanged */}
      <style dangerouslySetInnerHTML={{ __html: MOBILE_CSS }} />

      {/* Background with grey-lavender gradient */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Product image */}
      <div className="hero__product-image" aria-hidden="true">
        <HeroQrScanner />
      </div>

      {/* Content (heading, paragraph, button) */}
      <div className="hero__copy">
        <h1 className="hero__title">
          <span className="hero__line">Connect your vehicle</span>
          <span className="hero__line">Protect every</span>
          <span className="hero__line">journey</span>
        </h1>
        <p className="hero__lede">
          Monitor your vehicle, stay connected on every trip, and enable safer public interaction through smart QR, GPS tracking, and intelligent mobility technology.
        </p>

        <a className="buy" href="/marketplace" aria-label="Download App">
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

export { Hero as QrScannerDemo };
export default Hero;