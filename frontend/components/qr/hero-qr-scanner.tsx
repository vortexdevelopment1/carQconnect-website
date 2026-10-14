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
          <stop offset="0.32" stopColor="#fff" stopOpacity="1" />
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
        - Top panel: Black rounded-square panel with thin white border
        - Inside: Subtle orange location-pin icon with brackets and faint grid
        - Contact shadow: Soft ambient occlusion shadow underneath
        - Matches exact isometric perspective of the left box
      */}
      <defs>
        {/* Soft contact shadow filter */}
        <filter id="tile-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#08080c" floodOpacity="0.28" />
        </filter>
        <clipPath id="gpsInnerClip">
          <rect x="0.12" y="0.12" width="0.76" height="0.76" rx="0.12" />
        </clipPath>
      </defs>

      {/*
        Transform mapping unit square [0,1]x[0,1] to isometric tile on left box pad:
        Center C = (175, 348)
        Width along right-down axis = 54, along left-down axis = 54
        dy/dx aspect ratio = 32.5 / 54 = 0.60
      */}
      <g id="gps-device-tile" transform="matrix(54 32.4 -54 32.4 175 315.6)">
        {/* Soft contact shadow */}
        <rect
          x="-0.02"
          y="-0.02"
          width="1.04"
          height="1.04"
          rx="0.18"
          fill="rgba(20,22,28,0.22)"
          filter="url(#tile-shadow)"
        />

        {/* 1. Glossy White Base / Frame */}
        <rect
          x="0"
          y="0"
          width="1"
          height="1"
          rx="0.18"
          fill="#f3f4f7"
          stroke="#e0e3ea"
          strokeWidth="0.015"
        />

        {/* 2. Black Rounded-Square Panel (with thin even white border visible around it) */}
        <rect
          x="0.09"
          y="0.09"
          width="0.82"
          height="0.82"
          rx="0.14"
          fill="#111215"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="0.018"
        />

        {/* 3. Panel Interior: Faint grid lines, subtle radar, orange pin */}
        <g clipPath="url(#gpsInnerClip)" opacity="0.88">
          {/* Faint subtle grid */}
          <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.012" fill="none">
            <path d="M0.3 0.1v0.8 M0.5 0.1v0.8 M0.7 0.1v0.8 M0.1 0.3h0.8 M0.1 0.5h0.8 M0.1 0.7h0.8" />
          </g>

          {/* Faint route path */}
          <path
            d="M0.2 0.82 V0.65 H0.5"
            fill="none"
            stroke="#ff6a1f"
            strokeWidth="0.02"
            strokeLinecap="round"
            strokeDasharray="0.04 0.04"
            opacity="0.65"
          >
            <animate attributeName="stroke-dashoffset" values="0;-0.16" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Subtle gentle radar pulse (not overly loud or bright) */}
          <circle cx="0.5" cy="0.62" r="0.03" fill="none" stroke="#ff6a1f" strokeWidth="0.016" opacity="0">
            <animate attributeName="r" values="0.03;0.24" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0" dur="2.6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* 4. Orange location-pin icon in center */}
        <g opacity="0.92">
          {/* Pin body */}
          <path
            d="M0.5 0.64 C0.5 0.64 0.38 0.52 0.38 0.44 C0.38 0.37 0.43 0.32 0.5 0.32 C0.57 0.32 0.62 0.37 0.62 0.44 C0.62 0.52 0.5 0.64 0.5 0.64 Z"
            fill="#ff6a1f"
          />
          {/* Pin center dot */}
          <circle cx="0.5" cy="0.44" r="0.04" fill="#111215" />
        </g>

        {/* 5. Orange corner brackets (subtle) */}
        <g fill="none" stroke="#ff6a1f" strokeWidth="0.02" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          <path d="M0.19 0.28 V0.19 H0.28 M0.72 0.19 H0.81 V0.28 M0.81 0.72 V0.81 H0.72 M0.28 0.81 H0.19 V0.72" />
        </g>
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
