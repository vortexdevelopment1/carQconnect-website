import type { Viewport } from 'next';
import type { Metadata } from "next";
import { Archivo, Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carQconnect.com"),
  title: {
    default: "carQconnect | Vehicle Safety, GPS & Connected Hardware",
    template: "%s | carQconnect",
  },
  description:
    "carQconnect connects your vehicle to QR-based safety, GPS tracking, SOS, emergency protection and everyday vehicle utilities - all in one ecosystem.",
  keywords: [
    "vehicle safety",
    "vehicle GPS tracking",
    "QR vehicle safety",
    "car safety QR",
    "trip planner",
    "fuel calculator",
    "toll calculator",
    "FASTag utilities",
  ],
  openGraph: {
    title: "carQconnect | Vehicle Safety, GPS & Connected Hardware",
    description:
      "One connected ecosystem for your vehicle's safety, tracking and everyday journeys.",
    url: "https://www.carQconnect.com",
    siteName: "carQconnect",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${manrope.variable} ${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}



export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

