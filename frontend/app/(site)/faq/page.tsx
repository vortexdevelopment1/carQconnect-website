import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { faqs } from "@/lib/data/faqs";

import FaqClient from "./client-page";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about carQconnect's QR safety, GPS tracking, SOS, trip intelligence and membership.",
};

export default function FaqPage() {
  return <FaqClient />;
}


