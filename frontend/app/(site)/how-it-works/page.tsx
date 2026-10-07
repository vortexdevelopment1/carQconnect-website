import type { Metadata } from "next";
import { HowItWorksScroll } from "@/components/sections/how-it-works-scroll";
import HowItWorksOverview from "@/components/sections/how-it-works-overview";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Follow the carQconnect journey, one step at a time.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Intro Hero */}
      <section 
        className="relative pt-20 pb-10 text-center"
        style={{
          background: "radial-gradient(60% 120% at 90% 0%, rgba(255,106,0,0.28), rgba(255,106,0,0) 62%), linear-gradient(180deg, #fff1e3, #f7f9fc)"
        }}
      >
        <div className="container-page relative z-10 flex flex-col items-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl text-ink">
            From sign-up to <span className="text-[#ff6a00]">your first trip.</span>
          </h1>
          <p className="mt-4 text-lg text-secondary">
            Follow the carQconnect journey, one step at a time.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <HowItWorksOverview />

      {/* Main scrolling steps */}
      <HowItWorksScroll />

      {/* Closing Band */}
      <section 
        className="py-24 text-center"
        style={{
          background: "linear-gradient(110deg, #ff6a00, #ff8a2b)"
        }}
      >
        <div className="container-page">
          <h2 className="font-display text-4xl font-bold text-white">Ready to start?</h2>
          <p className="mt-4 text-lg text-white/90">Download the app and set up your vehicle.</p>
          <a
            href="/#download"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-btn bg-[#0b0c10] px-8 text-sm font-bold text-white transition hover:bg-black hover:-translate-y-1 shadow-lg"
          >
            Download App
          </a>
        </div>
      </section>
    </>
  );
}



