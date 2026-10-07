import Link from "next/link";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { faqs } from "@/lib/data/faqs";

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#f5f6f8] py-12 sm:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] bg-[#101319] shadow-[0_28px_80px_rgba(12,15,22,0.18)]">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div aria-hidden className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-[#ff4d0d]/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6b37]/35 bg-[#ff4d0d]/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[#ff7a4a]"><ShieldCheck className="h-3.5 w-3.5" /> HELP CENTRE</span>
                <h2 className="mt-7 font-display text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">Questions, answered clearly.</h2>
                <p className="mt-5 max-w-sm text-base leading-7 text-white/60">Everything you need to know before connecting your vehicle - from QR privacy to GPS visibility.</p>
                <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                  <MessageCircle className="h-5 w-5 text-[#ff7140]" />
                  <p className="mt-4 text-sm font-semibold text-white">Still need help?</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">Our support team can guide you through setup, activation and hardware choices.</p>
                  <Link href="/support" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors pb-1 border-b-2 border-[#FF5A00] hover:text-[#FF5A00]">Contact support <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-7 lg:p-10">
              <div className="mb-6 flex items-end justify-between gap-4 px-2 sm:px-0">
                <div><p className="text-xs font-bold tracking-[0.16em] text-[#ff7040]">FAQ</p><p className="mt-2 text-sm text-white/55">Quick answers for everyday decisions.</p></div>
                <span className="hidden text-xs font-medium text-white/35 sm:block">{faqs.length} answers</span>
              </div>
              <FaqAccordion items={faqs.slice(0, 6)} variant="dark" />
              <Link href="/faq" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#FF5A00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#FF5A00] hover:text-white">View all FAQs <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
