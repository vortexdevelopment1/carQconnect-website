import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../(site)/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vehicle Safety Page | carQconnect",
  description: "Scan result for a carQconnect-protected vehicle.",
  robots: { index: false, follow: false },
};

// This is an isolated root layout (own <html>/<body>) so the public QR
// scan page stays free of the marketing navbar/footer and loads as fast
// as possible for someone who has just scanned a sticker on a vehicle.
export default function QrRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-body antialiased bg-navy">{children}</body>
    </html>
  );
}
