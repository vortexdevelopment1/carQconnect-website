"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
const links = [ { label: "HOME", href: "/" }, { label: "FEATURES", href: "/features" }, { label: "HOW IT WORKS", href: "/how-it-works" }, { label: "FAQ", href: "/faq" }, { label: "SUPPORT", href: "/support" } ];

function CarQMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C66.86 85 80.93 73.08 84.45 57.24H72.82C69.75 66.85 60.7 74 50 74C36.75 74 26 63.25 26 50C26 36.75 36.75 26 50 26C60.7 26 69.75 33.15 72.82 42.76H84.45C80.93 26.92 66.86 15 50 15Z" fill="currentColor"/>
      <circle cx="50" cy="50" r="10" fill="#FF5A00"/>
      <path d="M55 50H85" stroke="#FF5A00" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isDarkHero = pathname === '/'; 
  const isLight = isScrolled || !isDarkHero || menuOpen;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Handle ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] flex flex-col transition-all duration-300 pt-[env(safe-area-inset-top)] ${
          isScrolled || menuOpen
            ? 'bg-[#fff6ef]/95 backdrop-blur-md shadow-sm border-b border-[#ff6a00]/10' 
            : 'bg-transparent'
        }`}
      >
        <div className={`flex items-center justify-between ${isScrolled || menuOpen ? 'pb-3 pt-3' : 'pb-3 pt-5'}`} style={{ paddingLeft: 'clamp(20px, 4vw, 30px)', paddingRight: 'clamp(20px, 4vw, 30px)' }}>
          <div className="flex-1 hidden min-[1025px]:flex items-center">
            <nav className="flex items-center gap-[clamp(16px,2vw,30px)]" aria-label="Main">
              {links.map((link) => {
                const isActive = (link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    className={`text-[14px] font-medium uppercase tracking-[0.05em] transition-all duration-200 ${
                      isActive ? 'text-[#ff5a0a] font-bold' : 'text-[#131316] hover:text-[#ff5a0a]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex-[0_0_auto] min-[1025px]:flex-1 flex min-[1025px]:justify-center justify-start items-center">
            <Link className="flex items-center gap-2 transition-transform hover:scale-[0.98]" href="/" aria-label="carQconnect home" onClick={closeMenu}>
              <CarQMark className="" />
              <span className={`font-display text-[clamp(22px,2.19vw,34px)] font-semibold tracking-tight ${'text-[#131316]'}`}>
                car<span className="text-[#ff6a00]">Q</span>connect
              </span>
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center gap-3 md:gap-5">
            <Link 
              href="/membership"
              className="hidden min-[1025px]:inline-flex items-center justify-center px-[clamp(12px,1.5vw,24px)] h-[clamp(36px,3.44vw,44px)] min-h-[44px] rounded-lg text-[14px] font-bold uppercase transition-all shadow-md bg-[#ff5a0a] text-[#1a0b00] hover:bg-[#ff8a2b]"
            >
              <span>GET MEMBERSHIP</span>
            </Link>
            
            <button
              className="min-[1025px]:hidden flex flex-col items-center justify-center gap-1.5 w-[44px] h-[44px] rounded bg-transparent border-0 cursor-pointer relative"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-6 h-[1.5px] transition-all ${isLight ? "bg-black" : "bg-white"} ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
              <span className={`block w-6 h-[1.5px] transition-all ${isLight ? "bg-black" : "bg-white"} ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-[1.5px] transition-all ${isLight ? "bg-black" : "bg-white"} ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
            </button>
          </div>
        </div>

                        {/* Mobile Dropdown */}
        {menuOpen && (
          <div 
            id="mobile-menu"
            className="absolute top-[100%] right-[clamp(20px,4vw,30px)] w-[260px] min-[1025px]:hidden bg-[#12141c] rounded-2xl border border-white/10 flex flex-col shadow-2xl overflow-hidden mt-1"
            style={{ animation: 'popIn 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards', transformOrigin: 'top right' }}
          >
            <nav className="flex flex-col py-3 px-3">
              {links.map((link) => {
                const isActive = (link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center min-h-[44px] px-3 rounded-lg text-[15px] font-semibold tracking-wide transition-colors ${isActive ? 'bg-[#ff6a00]/10 text-[#ff6a00]' : 'text-white hover:bg-white/5'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-3 pt-2 border-t border-white/10">
              <Link 
                href="/membership"
                onClick={closeMenu}
                className="flex items-center justify-center w-full min-h-[48px] rounded-lg bg-[#ff6a00] text-white font-bold tracking-wider hover:bg-[#ff8a2b] transition-colors shadow-md"
              >
                GET MEMBERSHIP
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Overlay behind dropdown */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm min-[1025px]:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes popIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          to { transform: scaleY(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          #mobile-menu { animation: none !important; transform: none !important; }
        }
      `}} />
    </>
  );
}



