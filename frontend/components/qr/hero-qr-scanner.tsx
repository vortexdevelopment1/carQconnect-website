export function HeroQrScanner() {
  return (
    <svg
      className="hero-svg absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 481 272"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fade-mask" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#000" stop-opacity="0" />
          <stop offset="0.32" stop-color="#fff" stop-opacity="1" />
        </linearGradient>
        <mask id="hero-mask">
          <rect x="0" y="0" width="481" height="272" fill="url(#fade-mask)" />
        </mask>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ff6a1f" stop-opacity="0" />
          <stop offset="0.85" stop-color="#ff6a1f" stop-opacity="0.55" />
          <stop offset="1" stop-color="#ffd2b0" stop-opacity="1" />
        </linearGradient>
        <clipPath id="qrClip">
          <rect x="0.01" y="0.01" width="0.98" height="0.98" />
        </clipPath>
      </defs>
      
      <image
        href="/hero-section-clean-widescreen.jpg"
        width="481"
        height="272"
        preserveAspectRatio="xMidYMax meet"
        mask="url(#hero-mask)"
        className="hero-image-mobile-only"
      />
      <image
        href="/hero-section-clean-widescreen.jpg"
        width="481"
        height="272"
        preserveAspectRatio="xMidYMid slice"
        className="hero-image-desktop-only"
      />

      <g transform="matrix(26 17.75 -27.1 18.1 145.5 128.75)" clipPath="url(#qrClip)">
        <rect x="0.01" y="-0.3" width="0.98" height="0.3" fill="url(#g)">
          <animate
            attributeName="y"
            values="-0.3;1;1;-0.3"
            keyTimes="0;0.5;0.5;1"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
}
