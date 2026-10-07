import type { Metadata } from "next";
import LegalClient from "../components/LegalClient";
import { termsData } from "@/lib/data/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service | carQconnect",
  description: termsData.intro,
};

export default function TermsPage() {
  return <LegalClient data={termsData} currentSlug="terms" />;
}
