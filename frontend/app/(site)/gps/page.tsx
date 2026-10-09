import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { BackButton } from "@/components/ui/back-button";
import { Satellite, Clock, MapPinned, BellRing, Activity, Share2, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "GPS Tracking",
  description: "Live location, trip history, geofencing and movement alerts for your vehicle, powered by compatible carQconnect GPS hardware.",
};

const features = [
  { icon: Satellite, title: "Live location", description: "See where your vehicle is right now, subject to device and network conditions." },
  { icon: Clock, title: "Trip history", description: "Review past trips, routes and distances." },
  { icon: MapPinned, title: "Geofencing", description: "Set safe zones and get notified on entry or exit." },
  { icon: BellRing, title: "Movement alerts", description: "Get alerted if your vehicle moves when it shouldn't, on supported devices." },
  { icon: Activity, title: "Device status", description: "Device health, last-seen time and connectivity, where available." },
  { icon: Share2, title: "Share trip", description: "Share a live location with someone you trust, when you choose to." },
];

export default function GpsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FFFFFF] pt-[70px] md:pt-[80px] pb-6 md:pb-20 border-b border-[#ECEEF4]">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(600px 400px at 85% 0%, rgba(255,90,0,0.12), transparent 70%)' }}
        />
        <div className="container-page relative z-10 max-w-[1180px] mx-auto">
          <div className="mb-2 max-md:mt-4 md:mt-2"><BackButton fallback="/features" label="Back to features" /></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
          
          {/* Left Column: Text */}
          <div className="flex flex-col">
            

            <div className="flex items-center gap-4 mb-6">
              <div className="w-[32px] h-[2px] bg-[#FF5A00]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#FF5A00]">GPS TRACKING</span>
            </div>
            
            <h1 className="font-display font-bold tracking-tight text-[#12131A] mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.1 }}>
              Know where your vehicle is.<br/>
              <span className="text-[#FF5A00]">Wherever it goes.</span>
            </h1>
            
            <p className="text-[17px] leading-relaxed text-[#5B6070] max-w-[520px]">
              Connect a carQconnect GPS device to your vehicle for live tracking, trip history and geofence alerts.
            </p>
            <p className="mt-3 mb-8 text-[13px] text-[#7B7F90]">
              Live tracking depends on device and network conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[14px]">
              <a href="/#download" className="flex items-center justify-center h-[52px] px-[28px] bg-[#FF5A00] text-white text-[14px] font-bold rounded-[12px] shadow-[0_10px_30px_rgba(255,90,0,.3)] hover:bg-[#FF7226] transition-colors">
                Download App
              </a>
              <a href="/marketplace" className="flex items-center justify-center h-[52px] px-[28px] bg-white border-[1.5px] border-[#E3E5EC] text-[#12131A] text-[14px] font-bold rounded-[12px] hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors">
                View GPS Devices
              </a>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="w-full max-w-[560px] max-lg:mx-auto rounded-[26px] bg-[#12131A] border border-[#2A2D3A] shadow-[0_24px_60px_rgba(18,19,26,0.28)] overflow-hidden text-white mt-4 lg:mt-[50px] flex flex-col">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-[#2A2D3A]">
              <div className="flex flex-col">
                <span className="text-[11px] text-[#7B7F90] uppercase tracking-[0.1em] font-medium mb-1">
                  TRACKED VEHICLE
                </span>
                <span className="font-display font-bold text-[15px] tracking-[0.02em]">
                  MP09 &bull;&bull; 1234
                </span>
              </div>
              
              <div className="flex items-center gap-2 rounded-full border border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.12)] px-3 py-1.5 text-[12px] font-semibold text-[#34D399]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#34D399] animate-blink-fast motion-reduce:animate-none" />
                Live tracking
              </div>
            </div>

            {/* Map Area */}
            <div className="relative h-[280px] lg:h-[340px] bg-[#14151D] w-full">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 340" preserveAspectRatio="xMidYMid slice">
                {/* Grid */}
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1D1F2A" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#gridPattern)" />
                
                {/* Road Shapes */}
                <path d="M-10 250 L180 200 L330 215 L580 120" stroke="#232634" strokeWidth="16" strokeLinecap="round" fill="none" />
                <path d="M120 360 L210 160 L250 -10" stroke="#20222E" strokeWidth="12" strokeLinecap="round" fill="none" />
                <path d="M380 360 L420 190 L560 150" stroke="#20222E" strokeWidth="10" strokeLinecap="round" fill="none" />
                
                {/* Building Blocks */}
                <rect x="40" y="40" width="90" height="60" rx="10" fill="#171923" />
                <rect x="430" y="240" width="90" height="70" rx="10" fill="#171923" />
                
                {/* Geofence */}
                <circle cx="150" cy="268" r="62" fill="rgba(255,200,87,0.06)" stroke="#FFC857" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="5 6" />
                
                {/* Route */}
                <path d="M60 300 C 120 240, 150 200, 230 190 S 300 150, 318 118" stroke="#FF5A00" strokeWidth="4.5" strokeDasharray="8 9" strokeLinecap="round" fill="none" className="animate-flow motion-reduce:animate-none" />
                
                {/* Last seen dot */}
                <circle cx="230" cy="190" r="8" fill="white" />
                
                {/* Current position */}
                <circle cx="318" cy="118" r="14" fill="#FF5A00" fillOpacity="0.5" className="animate-ping-out motion-reduce:animate-none" style={{ transformOrigin: "318px 118px" }} />
                <circle cx="318" cy="118" r="11" fill="#FF5A00" />
                <circle cx="318" cy="118" r="4" fill="white" />
              </svg>

                {/* Floating labels */}
              <div className="absolute left-[47%] top-[30%] rounded-full border border-[rgba(255,90,0,0.4)] bg-[rgba(255,90,0,0.16)] px-3 py-1.5 text-[11.5px] font-semibold text-[#FFB48A] whitespace-nowrap backdrop-blur-sm">
                Last seen
              </div>
              <div className="absolute bottom-[17%] left-[12%] rounded-full border border-[rgba(255,200,87,0.35)] bg-[rgba(255,200,87,0.12)] px-3 py-1.5 text-[11.5px] font-semibold text-[#FFC857] whitespace-nowrap backdrop-blur-sm">
                Geofence alert
              </div>
              <div className="absolute right-[7%] top-[15%] rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-3 py-1.5 text-[11.5px] font-semibold text-white whitespace-nowrap backdrop-blur-sm">
                Current location
              </div>
            </div>

            {/* Footer Strip */}
            <div className="grid grid-cols-1 min-[560px]:grid-cols-3 border-t border-[#2A2D3A]">
              <div className="flex items-center gap-3 px-[18px] py-4 border-b min-[560px]:border-b-0 min-[560px]:border-r border-[#2A2D3A]">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[rgba(255,90,0,0.14)]">
                  <MapPin className="h-[18px] w-[18px] text-[#FF5A00]" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-white">Live location</span>
                  <span className="text-[11.5px] text-[#A8ACBA]">Last-seen status</span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-[18px] py-4 border-b min-[560px]:border-b-0 min-[560px]:border-r border-[#2A2D3A]">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[rgba(255,90,0,0.14)]">
                  <Clock className="h-[18px] w-[18px] text-[#FF5A00]" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-white">Trip history</span>
                  <span className="text-[11.5px] text-[#A8ACBA]">Past journeys</span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-[18px] py-4">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[rgba(255,90,0,0.14)]">
                  <ShieldCheck className="h-[18px] w-[18px] text-[#FF5A00]" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-white">Geofence alerts</span>
                  <span className="text-[11.5px] text-[#A8ACBA]">Entry and exit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className="bg-surface-2 py-24 md:py-32 border-y border-border">
        <div className="container-page">
          <div>
            <h2 className="font-display text-section-mobile md:text-section-desktop font-bold text-ink text-balance">
              What GPS tracking gives you
            </h2>
            <p className="my-[14px] mb-[40px] max-w-[560px] text-[16px] leading-[1.7] text-[#454c60]">
              A clear view of your vehicle's location, movement and device health, all linked to one vehicle profile in the app.
            </p>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div 
                key={title} 
                className="rounded-card-lg border border-border bg-surface p-6 transition duration-200 hover:-translate-y-[2px] hover:border-[#ff6a00] hover:shadow-[0_14px_30px_rgba(255,106,0,0.14)]"
              >
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#fff1e6]">
                  <Icon className="h-6 w-6 text-[#FF5A00]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-[15px] font-medium text-ink">{title}</h3>
                <p className="mt-1.5 text-[13px] text-[#5b6478] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <p className="mt-[28px] max-w-[640px] text-[13px] leading-[1.65] text-[#5b6478]">
            Live tracking and alerts depend on your GPS device, network coverage and location conditions. Activate and link your device to a vehicle from the carQconnect app.
          </p>
        </div>
      </section>
    </>
  );
}
