import Image from "next/image";
import Link from "next/link";

export function PromoBanner() {
  return (
    <section 
      aria-label="Promotional banner"
      className="promo-banner w-full relative overflow-hidden"
      style={{
        ["--promo-bg" as any]: "#fff1e6",
        ["--promo-pad-y" as any]: "clamp(8px, 1.2vw, 16px)",
        width: "100%",
        margin: 0,
        paddingBlock: "var(--promo-pad-y)",
        paddingInline: 0,
        backgroundColor: "var(--promo-bg)",
      }}
    >
      <Link
        href="/marketplace"
        aria-label="Get up to 20% off on carQconnect scanner"
        className="block w-full border-none m-0 p-0 transition-opacity duration-200 hover:opacity-95 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-[-4px]"
        style={{
          display: "block",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <Image
          src="/images/carqconnect-website-banner.webp"
          alt="carQconnect: up to 20% off, instant discount on carQconnect scanner"
          width={2400}
          height={202}
          sizes="100vw"
          className="block w-full h-auto max-w-full object-contain m-0 p-0 border-0 rounded-none shadow-none"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 0,
            border: "none",
            boxShadow: "none",
          }}
          priority={false}
        />
      </Link>
    </section>
  );
}

export default PromoBanner;
