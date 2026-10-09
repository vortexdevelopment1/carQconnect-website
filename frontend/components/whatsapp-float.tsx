"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";

export default function WhatsAppFloat() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const wrap = wrapRef.current;
    const probe = probeRef.current;
    if (!wrap || !probe) return;

    let raf = 0;
    let first = true;

    const place = () => {
      raf = 0;
      const vh = window.innerHeight;
      const margin = window.innerWidth < 640 ? 14 : 24;
      const safe = parseFloat(getComputedStyle(probe).paddingBottom) || 0;
      const h = wrap.offsetHeight;
      const hero = document.querySelector<HTMLElement>(".hero");
      const atTop = window.scrollY <= 10;

      const viewportY = vh - h - margin - safe;
      let y = viewportY;
      
      // Original logic: slide into hero on desktop
      if (window.innerWidth >= 640 && atTop && hero) {
        const heroBottom = Math.min(hero.getBoundingClientRect().bottom, vh);
        y = heroBottom - h - margin;
      }

      // New mobile logic: clamp above footer copy bar
      if (window.innerWidth < 640) {
        const copyBar = document.getElementById('footer-copy-bar');
        if (copyBar) {
          const barTop = copyBar.getBoundingClientRect().top;
          // Stop exactly where the user marked (just above the copyright border)
          const maxMobileY = barTop - h - 16;
          y = Math.min(y, maxMobileY);
        }
      }

      // Keep it within viewport bounds (e.g. if the footer clamp pushes it up)
      y = Math.max(margin, Math.min(y, viewportY));
      wrap.style.transform = `translateY(${y}px)`;
      
      if (window.innerWidth < 640) {
        wrap.style.transition = 'none';
      } else {
        wrap.style.transition = '';
      }

      if (first) {
        first = false;
        requestAnimationFrame(() => wrap.classList.add("wa-ready")); 
      }
    };

    const req = () => { if (!raf) raf = requestAnimationFrame(place); };

    place();
    const t = setTimeout(place, 300); 
    window.addEventListener("scroll", req, { passive: true });
    window.addEventListener("resize", req);
    const ro = new ResizeObserver(req);
    const hero = document.querySelector(".hero");
    if (hero) ro.observe(hero);
    ro.observe(document.body);

    return () => {
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", req);
      window.removeEventListener("resize", req);
      ro.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div ref={probeRef} aria-hidden="true" className="wa-probe" />
      <div ref={wrapRef} className="wa-wrap">
        <a
          className="wa-btn"
          href={`https://wa.me/${NUMBER}?text=Hi%20carQconnect`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
          </svg>
          <span className="wa-label">Chat on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
