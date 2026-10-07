import Link from "next/link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0D0E13] pt-[48px] sm:pt-[96px] px-[24px] pb-[64px] sm:pb-[88px] text-center flex flex-col items-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 blur-[80px]"
        style={{
          width: '640px',
          height: '280px',
          background: 'radial-gradient(50% 100% at 50% 100%, rgba(255,90,0,0.28) 0%, rgba(255,90,0,0) 100%)',
          borderRadius: '50% 50% 0 0',
        }}
      />

      <div className="container-page relative flex flex-col items-center z-10 w-full">
        <h2 
          className="font-display font-extrabold text-white mx-auto" 
          style={{ 
            fontSize: 'clamp(34px, 5vw, 60px)', 
            lineHeight: 1.05, 
            letterSpacing: '-0.03em', 
            maxWidth: '820px' 
          }}
        >
          Make every vehicle smarter. Make every journey <span className="text-[#FF5A00]">safer.</span>
        </h2>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-[14px]">
          <Link
            href="#download"
            className="flex items-center justify-center bg-[#FF5A00] text-white text-[14px] font-bold px-[28px] py-[15px] rounded-[12px] shadow-[0_10px_30px_rgba(255,90,0,0.35)] hover:bg-[#FF7226] transition-colors"
          >
            Download App
          </Link>
          <Link
            href="/marketplace"
            className="flex items-center justify-center bg-transparent border-[1.5px] border-[#3A3D4C] text-white text-[14px] font-bold px-[28px] py-[15px] rounded-[12px] hover:border-[#FF5A00] transition-colors"
          >
            View Hardware
          </Link>
        </div>
      </div>
    </section>
  );
}
