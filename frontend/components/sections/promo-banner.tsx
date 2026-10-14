import Image from "next/image";
import Link from "next/link";

export function PromoBanner() {
  return (
    <section 
      aria-label="Promotional banner"
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#d8f6fd" }}
    >
      <Link
        href="/marketplace"
        aria-label="Get up to 20% off on carQconnect scanner"
        className="group block w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2"
      >
        <Image
          src="/images/carqconnect-website-banner.webp"
          alt="carQconnect: up to 20% off, instant discount on carQconnect scanner"
          width={2400}
          height={202}
          sizes="100vw"
          className="w-full h-auto block"
          style={{ width: "100%", height: "auto" }}
          priority={false}
        />
      </Link>
    </section>
  );
}

export default PromoBanner;
