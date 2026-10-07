import type { Metadata } from "next";
import LegalClient from "../components/LegalClient";
import { refundData } from "@/lib/data/legal/refund";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | carQconnect",
  description: refundData.intro,
};

export default function RefundPage() {
  return <LegalClient data={refundData} currentSlug="refund" />;
}
