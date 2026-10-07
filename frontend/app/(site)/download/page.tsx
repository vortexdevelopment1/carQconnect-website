import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { AppDownloadSection } from "@/components/sections/app-download-section";

export const metadata: Metadata = {
  title: "Download the App",
  description: "Get the carQconnect app on iOS or Android for vehicle safety, GPS, trip intelligence and purchases.",
};

export default function DownloadPage() {
  return <><PageHeader eyebrow="Download" title="Your vehicle's intelligence belongs in your pocket." description="QR safety, GPS tracking, trip planning and every hardware purchase happen in the carQconnect app." /><AppDownloadSection /></>;
}
