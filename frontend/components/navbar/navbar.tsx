"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
const links = [ { label: "HOME", href: "/" }, { label: "FEATURES", href: "/features" }, { label: "HOW IT WORKS", href: "/how-it-works" }, { label: "FAQ", href: "/faq" }, { label: "SUPPORT", href: "/support" } ];

const INTER = "var(--font-inter), 'Inter', system-ui, sans-serif";

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
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const isDarkHero = pathname === '/'; 
  const isLight = isScrolled || !isDarkHero || menuOpen;
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setIsVisible(true);
        setIsScrolled(true);
        return;
      }

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 60) {
        if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          // Scrolling up even slightly -> reveal navbar
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

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
      <header data-type-scale="off" 
        className={`fixed top-0 left-0 right-0 z-[100] flex flex-col justify-center min-h-[64px] sm:min-h-[76px] transition-transform duration-300 ease-in-out pt-[env(safe-area-inset-top)] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled || menuOpen 
            ? 'bg-[#fff6ef]/95 backdrop-blur-md shadow-sm border-b border-[#ff6a00]/10' 
            : 'bg-transparent'
        }`}
      >
        <div
          className={`w-full max-w-[var(--container-max)] mx-auto px-6 lg:px-8 transition-all duration-200 flex justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] items-center ${
            isScrolled || menuOpen 
              ? 'py-1.5 lg:pb-2.5 lg:pt-2.5' 
              : 'py-2 lg:pb-3 lg:pt-4 min-[1025px]:pt-5'
          }`}
        >
          <div className="hidden lg:flex items-center justify-start">
            <nav className="flex items-center gap-[clamp(10px,1.25vw,26px)]" aria-label="Main">
              {links.map((link) => {
                const isActive = (link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    style={{ fontFamily: INTER }}
                    className={`whitespace-nowrap font-semibold tracking-[0.02em] transition-all duration-200 ${
                      isActive ? 'text-[#ff6a00]' : 'text-[#131316] hover:text-[#ff6a00]'
                    } text-[clamp(12px,0.85vw,14px)] min-[1280px]:text-[14.5px] min-[1440px]:text-[15px] py-2`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 lg:flex-initial flex justify-start lg:justify-center items-center min-w-0">
            <Link className="flex items-center gap-2 transition-transform hover:scale-[0.98]" href="/" aria-label="carQconnect home" onClick={closeMenu}>
              <CarQMark className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] lg:w-[26px] lg:h-[26px] min-[1280px]:w-[32px] min-[1280px]:h-[32px]" />
              <span
                style={{ fontFamily: INTER }}
                className="text-[clamp(16px,5.5vw,22px)] sm:text-[22px] md:text-[24px] lg:text-[26px] min-[1280px]:text-[34px] font-semibold tracking-tight text-[#131316] truncate"
              >
                car<span className="text-[#ff6a00]">Q</span>connect
              </span>
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3">
            {/* Mobile/Tablet Get Membership button - hidden on < 360px via CSS, visible on 360px - 1023px */}
            <Link 
              href="/membership"
              style={{ fontFamily: INTER }}
              className="nav-membership-mobile lg:hidden inline-flex items-center justify-center px-2.5 sm:px-4 py-1.5 h-[32px] sm:h-[38px] rounded-lg text-[10.5px] sm:text-[12px] font-bold tracking-wider transition-all shadow-sm bg-[#ff5a00] text-white hover:bg-[#e04e00] whitespace-nowrap uppercase flex-shrink-0"
            >
              <span>GET MEMBERSHIP</span>
            </Link>

            {/* Desktop Get Membership button - visible on >= 1024px */}
            <Link 
              href="/membership"
              style={{ fontFamily: INTER }}
              className="hidden lg:inline-flex items-center justify-center px-[clamp(14px,1.4vw,26px)] h-[clamp(40px,3vw,50px)] min-h-[40px] rounded-lg text-[clamp(12px,0.85vw,15px)] font-bold tracking-wide transition-all shadow-md bg-[#ff6a00] text-[#1a0b00] hover:bg-[#ff8a2b] whitespace-nowrap"
            >
              <span>GET MEMBERSHIP</span>
            </Link>
            
            {/* Hamburger button - visible on < 1024px */}
            <button
              className="lg:hidden flex items-center justify-center w-[44px] h-[44px] rounded-xl bg-transparent border-0 cursor-pointer text-[#12131A] hover:bg-black/5 active:scale-95 transition-all p-0"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="relative w-6 h-[18px] flex flex-col justify-between items-center">
                <span className={`block w-6 h-[2px] bg-[#111] rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                <span className={`block w-6 h-[2px] bg-[#111] rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block w-6 h-[2px] bg-[#111] rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Dropdown Card */}
        {menuOpen && (
          <div 
            id="mobile-menu"
            className="absolute top-[100%] w-[280px] sm:w-[320px] lg:hidden bg-white rounded-2xl border border-[#ECEEF4] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden mt-2 p-3.5"
            style={{
              right: 'var(--page-gutter)',
              animation: 'popIn 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
              transformOrigin: 'top right',
            }}
          >
            <nav className="flex flex-col gap-1 py-1">
              {links.map((link) => {
                const isActive = (link.href === '/' && pathname === '/') || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center min-h-[44px] px-3.5 rounded-xl text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                      isActive 
                        ? 'bg-[#FF5A00]/10 text-[#FF5A00] font-bold' 
                        : 'text-[#12131A] hover:bg-[#F7F8FC] hover:text-[#FF5A00]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-2 mt-2 border-t border-[#ECEEF4]">
              <Link 
                href="/membership"
                onClick={closeMenu}
                className="flex items-center justify-center w-full min-h-[48px] rounded-xl bg-[#FF5A00] text-[#1a0b00] font-bold text-[13px] uppercase tracking-wider hover:bg-[#ff7a26] transition-colors shadow-md"
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
          className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes popIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @media (prefers-reduced-motion: reduce) {
          #mobile-menu { animation: none !important; transform: none !important; }
        }
        @media (max-width: 359.98px) {
          .nav-membership-mobile { display: none !important; }
        }
      `}} />
    </>
  );
}