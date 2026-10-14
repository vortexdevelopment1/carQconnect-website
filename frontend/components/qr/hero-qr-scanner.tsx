"use client";

import { useEffect, useState } from "react";

// 4 corner points of the QR white face as percentages of the 1669x942 image
export const QR_CORNERS = [
  [30.62, 47.61], // Top
  [35.92, 53.77], // Right
  [30.65, 60.62], // Bottom
  [25.22, 54.25], // Left
];

export function HeroQrScanner() {
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("debugqr=1")) {
      setDebug(true);
    }
  }, []);

  return (
    <svg
      className="hero-svg absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1669 942"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fade-mask-mobile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="0.18" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="hero-mask-mobile">
          <rect x="0" y="0" width="1669" height="942" fill="url(#fade-mask-mobile)" />
        </mask>

        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff6a1f" stopOpacity="0" />
          <stop offset="0.85" stopColor="#ff6a1f" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffd2b0" stopOpacity="1" />
        </linearGradient>
        <clipPath id="qrClip">
          <rect x="0.01" y="0.01" width="0.98" height="0.98" />
        </clipPath>
        <clipPath id="gpsClip">
          <rect x=".1" y=".1" width=".8" height=".8" rx=".1" />
        </clipPath>
      </defs>

      <image
        href="/Futuristic_Cube_Device_Showcase_edited.png"
        width="1669"
        height="942"
        preserveAspectRatio="none"
        mask="url(#hero-mask-mobile)"
        className="hero-image-mobile-only"
      />
      <image
        href="/Futuristic_Cube_Device_Showcase_edited.png"
        width="1669"
        height="942"
        preserveAspectRatio="none"
        className="hero-image-desktop-only"
      />

      {/*
        STEP B: GPS Tile Layer on Left Box
        - Base: Clean glossy white rounded-square base/frame
        - Top panel: Rich jet-black rounded-square panel with crisp white border
        - Inside: Bright vibrant orange location-pin icon, glowing radar, and corner brackets
        - Size: Balanced 15% larger, clearly visible
        - Crisp & clean (light subtle shadow, no heavy blur so it is sharp & prominent)
      */}
      <defs>
        {/* Contact shadow */}
        <filter id="tile-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="5" result="offsetblur" />
          <feFlood floodColor="#000000" floodOpacity="0.45" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="gpsGlassGloss" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="65%" stopColor="#ffffff" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
        </linearGradient>
        <clipPath id="gpsInnerClip">
          <rect x="0.10" y="0.10" width="0.80" height="0.80" rx="0.12" />
        </clipPath>
      </defs>

      {/*
        Transform mapping unit square [0,1]x[0,1] to isometric tile on left box pad:
        Increased size: 76 (~25% larger than original)
        Shifted slightly right on platform: Cx = 186, Cy = 352
        dx = 76, dy = 45.6 (ratio 0.60)
        ty = 352 - 45.6 = 306.4
      */}
      <g id="gps-device-tile" transform="matrix(76 45.6 -76 45.6 186 306.4)" opacity="0.85">
        {/* Soft contact shadow underneath */}
        <ellipse
          cx="0.5"
          cy="0.6"
          rx="0.55"
          ry="0.32"
          fill="rgba(0,0,0,0.30)"
          filter="blur(3px)"
        />

        {/* 1. Glossy White Base / Frame with glass transparency */}
        <rect
          x="0"
          y="0"
          width="1"
          height="1"
          rx="0.18"
          fill="rgba(255,255,255,0.82)"
          stroke="rgba(255,255,255,0.95)"
          strokeWidth="0.02"
        />

        {/* 2. Frosted Dark Panel (softened opacity so it blends like glass) */}
        <rect
          x="0.08"
          y="0.08"
          width="0.84"
          height="0.84"
          rx="0.14"
          fill="rgba(18,20,26,0.78)"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="0.022"
        />

        {/* 3. Panel Interior: Crisp subtle orange grid lines & radar */}
        <g clipPath="url(#gpsInnerClip)" opacity="0.82">
          {/* Subtle grid */}
          <g stroke="rgba(255,255,255,0.14)" strokeWidth="0.015" fill="none">
            <path d="M0.3 0.08v0.84 M0.5 0.08v0.84 M0.7 0.08v0.84 M0.08 0.3h0.84 M0.08 0.5h0.84 M0.08 0.7h0.84" />
          </g>

          {/* Glowing orange route path */}
          <path
            d="M0.2 0.80 V0.62 H0.5"
            fill="none"
            stroke="#ff5a00"
            strokeWidth="0.026"
            strokeLinecap="round"
            strokeDasharray="0.045 0.045"
            opacity="0.85"
          >
            <animate attributeName="stroke-dashoffset" values="0;-0.18" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Gentle radar pulse */}
          <circle cx="0.5" cy="0.60" r="0.03" fill="none" stroke="#ff5a00" strokeWidth="0.02" opacity="0">
            <animate attributeName="r" values="0.03;0.26" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* 4. Orange location-pin icon in center */}
        <g opacity="0.88">
          {/* Pin body */}
          <path
            d="M0.5 0.63 C0.5 0.63 0.36 0.49 0.36 0.41 C0.36 0.33 0.42 0.27 0.5 0.27 C0.58 0.27 0.64 0.33 0.64 0.41 C0.64 0.49 0.5 0.63 0.5 0.63 Z"
            fill="#ff5a00"
          />
          {/* Pin center white dot */}
          <circle cx="0.5" cy="0.41" r="0.045" fill="#ffffff" />
        </g>

        {/* 5. Orange corner brackets */}
        <g fill="none" stroke="#ff5a00" strokeWidth="0.024" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          <path d="M0.16 0.26 V0.16 H0.26 M0.74 0.16 H0.84 V0.26 M0.84 0.74 V0.84 H0.74 M0.26 0.84 H0.16 V0.74" />
        </g>

        {/* 6. Realistic Glass Reflection / Sheen on Top */}
        <rect
          x="0.08"
          y="0.08"
          width="0.84"
          height="0.84"
          rx="0.14"
          fill="url(#gpsGlassGloss)"
          pointerEvents="none"
        />
        <path
          d="M0.12 0.12 L0.88 0.12 L0.35 0.88 L0.12 0.88 Z"
          fill="rgba(255,255,255,0.12)"
          clipPath="url(#gpsInnerClip)"
          pointerEvents="none"
        />
      </g>

      {/* QR scanner laser line */}
      <g transform="matrix(88.5 58 -90 62.5 511 448.5)" clipPath="url(#qrClip)">
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

      {debug && (
        <polygon
          points="511,448.5 599.5,506.5 511.5,571 421,511"
          fill="rgba(255, 0, 0, 0.25)"
          stroke="#ff0000"
          strokeWidth="3"
        />
      )}
    </svg>
  );
}
