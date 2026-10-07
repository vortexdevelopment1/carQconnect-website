import { MessageCircle } from "lucide-react";

export function WhatsAppCta() {
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/?text=Hi%20carQconnect%2C%20I%20need%20help.";
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noreferrer" 
      className="fixed z-50 flex items-center justify-center bg-[#25D366] text-[#07170e] font-bold shadow-[0_12px_32px_rgba(37,211,102,.35)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,211,102,.45)] min-[1025px]:bottom-5 min-[1025px]:right-5 min-[1025px]:rounded-full min-[1025px]:px-5 min-[1025px]:py-3.5 min-[1025px]:gap-3 max-[1024px]:bottom-[max(1rem,env(safe-area-inset-bottom))] max-[1024px]:right-[max(1rem,env(safe-area-inset-right))] max-[1024px]:w-12 max-[1024px]:h-12 max-[1024px]:rounded-full"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 min-[1025px]:h-5 min-[1025px]:w-5 max-[1024px]:h-6 max-[1024px]:w-6" />
      <span className="max-[1024px]:hidden text-sm">Chat on WhatsApp</span>
    </a>
  );
}