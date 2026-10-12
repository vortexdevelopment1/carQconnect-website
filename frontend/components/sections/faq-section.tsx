import Link from "next/link";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { faqs } from "@/lib/data/faqs";

export function FaqSection() {
  return (
    <section id="faq" data-type-scale="off" className="bg-[#f5f6f8] py-12 sm:py-24">

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 640px) {
          #faq {
            padding-inline: clamp(12px, 4vw, 18px) !important;
            padding-block: clamp(24px, 6.5vw, 40px) !important;
          }
          #faq .container-page {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          #faq .faq-outer-card {
            border-radius: clamp(12px, 3.6vw, 18px) !important;
          }
          #faq .faq-left-pane {
            padding: clamp(10px, 3.4vw, 16px) !important;
          }
          #faq .faq-right-pane {
            padding: clamp(10px, 3.4vw, 16px) !important;
          }
          #faq .faq-heading {
            font-size: clamp(17px, 5.4vw, 26px) !important;
            line-height: 1.15 !important;
          }
          #faq .faq-paragraph {
            font-size: clamp(11px, 3.2vw, 14px) !important;
            line-height: 1.5 !important;
          }
          #faq .help-card {
            padding: clamp(10px, 3.4vw, 16px) !important;
            border-radius: clamp(12px, 3.6vw, 18px) !important;
            margin-top: clamp(10px, 3vw, 16px) !important;
          }
          #faq .help-title {
            font-size: clamp(12px, 3.5vw, 15px) !important;
          }
          #faq .help-desc {
            font-size: clamp(10.5px, 3vw, 13px) !important;
          }
          #faq .help-link {
            font-size: clamp(11px, 3.2vw, 14px) !important;
          }
          #faq .faq-label {
            font-size: clamp(9.5px, 2.8vw, 12px) !important;
          }
          #faq .faq-sublabel {
            font-size: clamp(10.5px, 3vw, 13px) !important;
          }
          /* Override internal accordion styles */
          #faq .faq-item-button {
            padding: clamp(10px, 3vw, 14px) clamp(10px, 3.2vw, 16px) !important;
            min-height: 44px !important;
          }
          #faq .faq-item-title {
            font-size: clamp(11.5px, 3.4vw, 15px) !important;
            line-height: 1.3 !important;
          }
          #faq .faq-item-answer {
            font-size: clamp(10.5px, 3vw, 13.5px) !important;
            line-height: 1.5 !important;
            padding-bottom: clamp(10px, 3vw, 14px) !important;
            padding-inline: clamp(10px, 3.2vw, 16px) !important;
          }
          #faq .faq-item-icon {
            width: clamp(12px, 3.6vw, 16px) !important;
            height: clamp(12px, 3.6vw, 16px) !important;
          }
          #faq .faq-grid {
             gap: clamp(10px, 3vw, 16px) !important;
          }
        }
      `}} />

      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] bg-[#101319] shadow-[0_28px_80px_rgba(12,15,22,0.18)] faq-outer-card">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr] faq-grid">
            <div className="relative overflow-hidden border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r faq-left-pane">
              <div aria-hidden className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-[#ff4d0d]/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6b37]/35 bg-[#ff4d0d]/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[#ff7a4a]"><ShieldCheck className="h-3.5 w-3.5" /> HELP CENTRE</span>
                <h2 className="mt-7 font-display font-bold text-white faq-heading">Questions, answered clearly.</h2>
                <p className="mt-5 max-w-sm text-base leading-7 text-white/60 faq-paragraph">Everything you need to know before connecting your vehicle - from QR privacy to GPS visibility.</p>
                <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.055] p-5 help-card">
                  <MessageCircle className="h-5 w-5 text-[#ff7140]" />
                  <p className="mt-4 text-sm font-semibold text-white help-title">Still need help?</p>
                  <p className="mt-1 text-sm leading-6 text-white/55 help-desc">Our support team can guide you through setup, activation and hardware choices.</p>
                  <Link href="/support" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors pb-1 border-b-2 border-[#FF5A00] hover:text-[#FF5A00] help-link">Contact support <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-7 lg:p-10 faq-right-pane">
              <div className="mb-6 flex items-end justify-between gap-4 px-2 sm:px-0">
                <div><p className="text-xs font-bold tracking-[0.16em] text-[#ff7040] faq-label">FAQ</p><p className="mt-2 text-sm text-white/55 faq-sublabel">Quick answers for everyday decisions.</p></div>
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
