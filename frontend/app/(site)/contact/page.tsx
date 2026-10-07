import type { Metadata } from "next";
import ContactClient from "./client-page";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the carQconnect team.",
};

export default function ContactPage() {
  return <ContactClient />;
}
