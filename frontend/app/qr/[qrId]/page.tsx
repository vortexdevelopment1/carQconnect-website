import { ShieldCheck, Phone, MessageSquare, Flag, ShieldAlert, ShieldX, ShieldOff, SearchX } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { resolveQr } from "@/lib/data/qr";

export const metadata: Metadata = {
  title: "Vehicle Safety Page",
};

const stateCopy = {
  inactive: {
    icon: ShieldOff,
    title: "This QR isn't active yet",
    body: "The owner hasn't activated this carQconnect QR against a vehicle. If this is your vehicle, activate it from the carQconnect app.",
  },
  suspended: {
    icon: ShieldX,
    title: "This QR is suspended",
    body: "This carQconnect QR has been temporarily suspended and public actions are unavailable right now.",
  },
  not_found: {
    icon: SearchX,
    title: "QR not found",
    body: "We couldn't match this code to a carQconnect QR. Double check the link or try scanning again.",
  },
} as const;

export default function PublicQrPage({ params }: { params: { qrId: string } }) {
  const record = resolveQr(params.qrId);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 py-10">
      <div className="flex items-center gap-2 text-white/80">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue/10 border border-blue/30">
          <ShieldCheck className="h-4 w-4 text-blue" />
        </span>
        <span className="font-display text-base font-semibold">Fioner</span>
      </div>

      <div className="mt-10 w-full max-w-sm rounded-card-lg border border-white/10 bg-surface p-7">
        {record.status === "active" ? (
          <>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs text-success">
                Vehicle Protected
              </span>
              <p className="mt-4 font-display text-xl text-white">{record.vehicleLabel}</p>
              <p className="mt-1 text-xs text-white/40">
                Safety status: {record.safetyStatus}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-btn bg-blue text-white font-medium">
                <Phone className="h-4 w-4" /> Call Owner
              </button>
              <button className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-btn border border-white/20 text-white font-medium">
                <MessageSquare className="h-4 w-4" /> Send Message
              </button>
              <button className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-btn border border-white/20 text-white font-medium">
                <Flag className="h-4 w-4" /> Report Issue
              </button>
              <button className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-btn bg-danger text-white font-medium">
                <ShieldAlert className="h-4 w-4" /> Emergency
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            {(() => {
              const s = stateCopy[record.status as keyof typeof stateCopy];
              const Icon = s.icon;
              return (
                <>
                  <Icon className="mx-auto h-9 w-9 text-white/40" strokeWidth={1.5} />
                  <p className="mt-4 font-display text-lg text-white">{s.title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/50">
                    {s.body}
                  </p>
                </>
              );
            })()}
          </div>
        )}
      </div>

      <p className="mt-6 max-w-sm text-center text-[11px] text-white/35">
        Your privacy matters. Owner contact information is protected and never shown directly.
      </p>

      <Link href="/" className="mt-8 text-[12px] text-white/30 hover:text-blue">
        What is carQconnect?
      </Link>
    </div>
  );
}
