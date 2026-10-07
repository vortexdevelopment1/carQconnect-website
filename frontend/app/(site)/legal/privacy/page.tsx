import type { Metadata } from "next";
import LegalClient from "../components/LegalClient";
import { privacyData } from "@/lib/data/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | carQconnect",
  description: privacyData.intro,
};

export default function PrivacyPage() {
  return <LegalClient data={privacyData} currentSlug="privacy" />;
}
