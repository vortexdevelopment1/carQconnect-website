"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, Smartphone } from "lucide-react";
import Link from "next/link";

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    topic: "QR activation",
    subject: "",
    message: "",
    bot_field: "", // honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear error on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.contact.trim()) newErrors.contact = "Phone or email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("API Error");

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-[100svh] bg-white font-display overflow-hidden">
      {/* Soft orange glow at top right */}
      <div 
        className="pointer-events-none absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-40 bg-[#ff5a00]/20"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-[120px] pb-[80px]">
        {/* HEADER */}
        <div className="mb-12 text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[32px] h-[2px] bg-[#ff5a00]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#ff5a00]">CONTACT</span>
          </div>
          <h1 className="text-[clamp(34px,5vw,52px)] font-[800] leading-[1.1] tracking-tight text-[#12131a] mb-3">
            Get in <span className="text-[#ff5a00]">touch</span>
          </h1>
          <p className="text-[16px] text-[#5b6070] max-w-[560px] leading-relaxed">
            Questions about QR activation, hardware, membership or your account? Send us a message and our team will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14">
          {/* FORM CARD */}
          <div className="order-1 bg-white border border-[#eceef4] rounded-[24px] p-6 md:p-8 shadow-[0_12px_36px_rgba(18,19,26,0.06)] h-fit">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-[64px] h-[64px] bg-[#ecfdf3] text-[#1fa463] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-[32px] h-[32px]" strokeWidth={2} />
                </div>
                <h2 className="text-[24px] font-[800] text-[#12131a] mb-2">Message sent</h2>
                <p className="text-[15px] text-[#5b6070] mb-8">We'll get back to you soon.</p>
                <button 
                  onClick={() => {
                    setStatus("idle");
                    setFormData(prev => ({ ...prev, subject: "", message: "" }));
                  }}
                  className="text-[#ff5a00] font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {status === "error" && (
                  <div className="flex items-center gap-3 bg-[#fef3f2] text-[#e5484d] px-4 py-3 rounded-[12px] text-[14px] font-medium border border-[#fee4e2]">
                    <AlertCircle className="w-[18px] h-[18px]" />
                    Something went wrong. Please try again.
                  </div>
                )}
                
                {/* Honeypot */}
                <input
                  type="text"
                  name="bot_field"
                  value={formData.bot_field}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full name" 
                      className={`w-full rounded-[12px] border px-4 py-3 text-[15px] text-[#12131a] placeholder:text-[#a8acba] focus:outline-none transition-all ${errors.fullName ? 'border-[#e5484d] focus:border-[#e5484d] focus:ring-4 focus:ring-[#e5484d]/15' : 'border-[#e3e5ec] focus:border-[#ff5a00] focus:ring-4 focus:ring-[#ff5a00]/15'}`}
                    />
                    {errors.fullName && <span className="text-[#e5484d] text-[13px] font-medium">{errors.fullName}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <input 
                      type="text" 
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Phone or email" 
                      className={`w-full rounded-[12px] border px-4 py-3 text-[15px] text-[#12131a] placeholder:text-[#a8acba] focus:outline-none transition-all ${errors.contact ? 'border-[#e5484d] focus:border-[#e5484d] focus:ring-4 focus:ring-[#e5484d]/15' : 'border-[#e3e5ec] focus:border-[#ff5a00] focus:ring-4 focus:ring-[#ff5a00]/15'}`}
                    />
                    {errors.contact && <span className="text-[#e5484d] text-[13px] font-medium">{errors.contact}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <select 
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full rounded-[12px] border border-[#e3e5ec] px-4 py-3 text-[15px] text-[#12131a] focus:outline-none focus:border-[#ff5a00] focus:ring-4 focus:ring-[#ff5a00]/15 transition-all appearance-none bg-white"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%235b6070' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                  >
                    <option value="QR activation">QR activation</option>
                    <option value="GPS tracker">GPS tracker</option>
                    <option value="Hardware or order">Hardware or order</option>
                    <option value="Membership">Membership</option>
                    <option value="Account">Account</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (optional)" 
                    className="w-full rounded-[12px] border border-[#e3e5ec] px-4 py-3 text-[15px] text-[#12131a] placeholder:text-[#a8acba] focus:outline-none focus:border-[#ff5a00] focus:ring-4 focus:ring-[#ff5a00]/15 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message" 
                    rows={5}
                    className={`w-full rounded-[12px] border px-4 py-3 text-[15px] text-[#12131a] placeholder:text-[#a8acba] focus:outline-none transition-all resize-y ${errors.message ? 'border-[#e5484d] focus:border-[#e5484d] focus:ring-4 focus:ring-[#e5484d]/15' : 'border-[#e3e5ec] focus:border-[#ff5a00] focus:ring-4 focus:ring-[#ff5a00]/15'}`}
                  />
                  {errors.message && <span className="text-[#e5484d] text-[13px] font-medium">{errors.message}</span>}
                </div>

                <div className="mt-2 flex flex-col items-start gap-4">
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center rounded-[12px] bg-[#ff5a00] px-7 py-3.5 text-[15px] font-[800] text-white shadow-[0_10px_30px_rgba(255,90,0,0.3)] hover:bg-[#ff7226] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-[18px] h-[18px] mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  <p className="text-[12.5px] text-[#7b7f90]">
                    By sending this, you agree to our <Link href="/privacy" className="underline hover:text-[#12131a]">Privacy Policy</Link>.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN CARDS */}
          <div className="order-2 lg:order-2 flex flex-col gap-4">
            <div className="rounded-[20px] border border-[#eceef4] bg-white p-5 flex items-start gap-4">
              <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#ffebdd] flex items-center justify-center">
                <Mail className="w-[18px] h-[18px] text-[#ff5a00]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#12131a] mb-0.5">Email</h3>
                <a href="mailto:support@carqconnect.com" className="text-[14px] text-[#5b6070] hover:text-[#ff5a00] transition-colors">
                  support@carqconnect.com
                </a>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#eceef4] bg-white p-5 flex items-start gap-4">
              <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#ffebdd] flex items-center justify-center">
                <Phone className="w-[18px] h-[18px] text-[#ff5a00]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#12131a] mb-0.5">Phone</h3>
                <p className="text-[14px] text-[#5b6070]">
                  Available via in-app support
                </p>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#eceef4] bg-white p-5 flex items-start gap-4">
              <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#ffebdd] flex items-center justify-center">
                <MapPin className="w-[18px] h-[18px] text-[#ff5a00]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-[#12131a] mb-0.5">Office</h3>
                <p className="text-[14px] text-[#5b6070]">
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#12131a] bg-[#12131a] p-5 flex items-start gap-4 mt-2">
              <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#ffebdd] flex items-center justify-center">
                <Smartphone className="w-[18px] h-[18px] text-[#ff5a00]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-white mb-1">Need quick help?</h3>
                <p className="text-[14px] text-[#a8acba] mb-3 leading-relaxed">
                  Get instant support in the carQconnect app.
                </p>
                <Link href="/#download" className="text-[14px] font-bold text-[#ff5a00] underline underline-offset-4 hover:text-[#ff7226]">
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

