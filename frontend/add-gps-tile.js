const fs = require('fs');

const content = `export function HeroQrScanner() {
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
        <clipPath id="gpsClip">
          <rect x=".1" y=".1" width=".8" height=".8" rx=".1" />
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

      {/* Flat 2D GPS tile printed on the left pedestal's top pad */}
      <g id="gps-flat" transform="matrix(21.9 16.9 -24.4 15 50 85.6)">
        <rect x=".1" y=".1" width=".8" height=".8" rx=".1" fill="#17171a" />
        <g clipPath="url(#gpsClip)">
          <g stroke="#34343a" strokeWidth=".012" fill="none">
            <path d="M.3 .1V.9M.5 .1V.9M.7 .1V.9M.1 .3H.9M.1 .5H.9M.1 .7H.9" />
          </g>
          <path d="M.16 .86V.66H.5" fill="none" stroke="#ff6a1f" strokeWidth=".022" strokeLinecap="round" strokeDasharray=".05 .04" opacity=".85">
            <animate attributeName="stroke-dashoffset" values="0;-.18" dur="1.4s" repeatCount="indefinite" />
          </path>
          <circle cx=".5" cy=".66" r=".04" fill="none" stroke="#ff6a1f" strokeWidth=".02" opacity="0">
            <animate attributeName="r" values=".04;.34" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values=".8;0" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx=".5" cy=".66" r=".04" fill="none" stroke="#ff6a1f" strokeWidth=".02" opacity="0">
            <animate attributeName="r" values=".04;.34" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values=".8;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          </circle>
        </g>
        <path d="M.5 .66C.5 .66 .37 .52 .37 .43C.37 .35 .43 .29 .5 .29C.57 .29 .63 .35 .63 .43C.63 .52 .5 .66 .5 .66Z" fill="#ff6a1f" />
        <circle cx=".5" cy=".43" r=".05" fill="#17171a" />
        <g fill="none" stroke="#ff6a1f" strokeWidth=".022" strokeLinecap="round" strokeLinejoin="round">
          <path d="M.15 .25V.15H.25M.75 .15H.85V.25M.85 .75V.85H.75M.25 .85H.15V.75" />
        </g>
      </g>
    </svg>
  );
}`;

fs.writeFileSync('components/qr/hero-qr-scanner.tsx', content, 'utf8');
