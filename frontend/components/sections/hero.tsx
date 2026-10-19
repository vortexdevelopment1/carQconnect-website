"use client";

import { motion } from "framer-motion";
import { HeroQrScanner } from "@/components/qr/hero-qr-scanner";

const RESPONSIVE_CSS = `
/* ===== PHONES (max 767px): natural auto-height layout ===== */
@media (max-width: 767.98px) {
  #home.hero {
    height: auto !important;
    min-height: fit-content !important;
    max-height: none !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    justify-content: flex-start !important;
    padding-top: calc(var(--nav-h, 60px) + 20px) !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    overflow: hidden !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  /* 1st: Header Text & CTA group on top with clean side padding */
  #home .hero__copy {
    position: relative !important;
    inset: auto !important;
    order: 1 !important;
    z-index: 2 !important;
    flex: 0 0 auto !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 clamp(16px, 4vw, 24px) !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-end !important;
    text-align: right !important;
    gap: 0 !important;
    box-sizing: border-box !important;
  }

  #home .hero__title {
    width: 100% !important;
    margin: 0 !important;
    text-align: right !important;
    font-size: clamp(1.2rem, min(7.4vw, 36px), 2.2rem) !important;
    line-height: 1.08 !important;
  }

  #home .hero__line {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    text-align: right !important;
  }

  #home .hero__lede {
    max-width: 38ch !important;
    margin: 10px 0 0 auto !important;
    text-align: right !important;
    font-size: clamp(0.85rem, 3.8vw, 1.05rem) !important;
    line-height: 1.45 !important;
  }

  /* 2nd: "Download App" CTA button directly beneath text */
  #home .buy {
    margin: 16px 0 0 auto !important;
    align-self: flex-end !important;
  }

  /* 3rd: Product Graphic at the very bottom, stretching FULL WIDTH edge-to-edge */
  #home .hero__product-image {
    position: relative !important;
    inset: auto !important;
    order: 2 !important;
    z-index: 1 !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 4px 0 0 0 !important;
    padding: 0 !important;
    height: auto !important;
    aspect-ratio: 1669 / 780 !important;
    overflow: hidden !important;
    display: block !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    mix-blend-mode: multiply !important;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 6%, #000 18%, #000 100%) !important;
    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 6%, #000 18%, #000 100%) !important;
  }

  #home .hero__product-image .hero-svg {
    width: 100% !important;
    height: 100% !important;
    display: block !important;
    background: transparent !important;
    mix-blend-mode: multiply !important;
    object-fit: cover !important;
  }
}

/* Bahut chhoti width (<=360px) */
@media (max-width: 360px) {
  #home .hero__title { font-size: clamp(1.1rem, 7vw, 1.6rem) !important; }
}

/* ===== TABLET / iPAD / LANDSCAPE NON-DESKTOP (768px - 1023.98px) ===== */
@media (min-width: 768px) and (max-width: 1023.98px) {
  #home.hero {
    height: auto !important;
    min-height: fit-content !important;
    max-height: none !important;
    padding-top: calc(var(--nav-h, 72px) + 28px) !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    align-items: stretch !important;
    position: relative !important;
    overflow: hidden !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  /* 1st: Header Text & CTA group stays ON TOP with clean side padding */
  #home .hero__copy {
    order: 1 !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 clamp(24px, 4vw, 36px) !important;
    position: relative !important;
    z-index: 2 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-end !important;
    text-align: right !important;
    box-sizing: border-box !important;
  }

  #home .hero__title {
    font-size: clamp(2rem, 4vw, 2.8rem) !important;
    line-height: 1.08 !important;
    text-align: right !important;
    max-width: 600px !important;
  }

  #home .hero__lede {
    font-size: clamp(0.95rem, 1.6vw, 1.1rem) !important;
    line-height: 1.5 !important;
    max-width: 44ch !important;
    margin-top: 14px !important;
    text-align: right !important;
  }

  /* 2nd: Download App button */
  #home .buy {
    margin-top: 20px !important;
    margin-left: auto !important;
    align-self: flex-end !important;
    transform: scale(1.03);
    transform-origin: right center;
  }

  /* 3rd: Product Graphic/Banner Image stretching FULL WIDTH to screen edges */
  #home .hero__product-image {
    order: 2 !important;
    position: relative !important;
    inset: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 12px 0 0 0 !important;
    padding: 0 !important;
    height: auto !important;
    aspect-ratio: 1669 / 780 !important;
    z-index: 1 !important;
    overflow: hidden !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    mix-blend-mode: multiply !important;
    display: block !important;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 6%, #000 18%, #000 100%) !important;
    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 6%, #000 18%, #000 100%) !important;
  }

  #home .hero__product-image .hero-svg {
    width: 100% !important;
    height: 100% !important;
    display: block !important;
    background: transparent !important;
    mix-blend-mode: multiply !important;
    object-fit: cover !important;
  }
}
`;

export function Hero() {
  return (
    <section data-type-scale="off" className="hero" id="home">
      {/* Responsive overrides: phones (<768px) + tablet (768-1023px). Laptop 1024px+ unchanged */}
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />

      {/* Background with grey-lavender gradient */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Content (1st: Heading, 2nd: Description & CTA Button) */}
      <div className="hero__copy">
        <motion.h1 
          className="hero__title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__line">Connect your vehicle</span>
          <span className="hero__line">Protect every</span>
          <span className="hero__line">journey</span>
        </motion.h1>
        <motion.p 
          className="hero__lede"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          Monitor your vehicle, stay connected on every trip, and enable safer public interaction through smart QR, GPS tracking, and intelligent mobility technology.
        </motion.p>

        <motion.a 
          className="buy" 
          href="/marketplace" 
          aria-label="Download App"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.a>
      </div>

      {/* Product image (3rd in order, at the bottom) with seamless background blending */}
      <motion.div 
        className="hero__product-image" 
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroQrScanner />
      </motion.div>
    </section>
  );
}

export default Hero;