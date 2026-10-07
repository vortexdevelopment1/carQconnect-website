export type LegalSection = {
  id: string;
  title: string;
  body?: string[];
  list?: string[];
};

export const privacyData: { title: string; intro: string; sections: LegalSection[] } = {
  title: "Privacy Policy",
  intro: "This page explains how carQconnect handles your information. The final policy text is provided by our legal team.",
  sections: [
    {
      id: "information-we-collect",
      title: "Information we collect",
      list: [
        "Account details: name, mobile number, email and preferred language",
        "Vehicle details: registration number, make, model, fuel type, mileage and documents you add",
        "Emergency contacts you add for SOS",
        "Location, with your consent",
        "GPS device data, such as location, last-seen status and trips",
        "Order and payment status for hardware and membership",
        "Support, chat and call history"
      ]
    },
    {
      id: "emergency-and-medical-information",
      title: "Optional emergency and medical information",
      body: [
        "Blood group or allergies are shown to first responders only if you opt in, and only in emergency situations."
      ]
    },
    {
      id: "public-qr-interactions",
      title: "Public QR interactions",
      body: [
        "Anyone who scans your vehicle's QR sees only the information you have approved. Calls go through masked calling, so your personal number is not shown."
      ]
    },
    {
      id: "how-we-use-your-information",
      title: "How we use your information",
      list: [
        "To run QR safety, SOS, GPS tracking, trip planning and support",
        "To send alerts, reminders and order updates",
        "To help you through the AI assistant and our support team"
      ]
    },
    {
      id: "consent-and-your-choices",
      title: "Consent and your choices",
      body: [
        "Location, notifications, communication and emergency information depend on your consent and device permissions. You manage these in the app."
      ]
    },
    {
      id: "sos-and-emergency-contacts",
      title: "SOS and emergency contacts",
      body: [
        "When you start an SOS, your latest location is shared with the emergency contacts you chose."
      ]
    },
    {
      id: "payments",
      title: "Payments",
      body: [
        "Payments are processed by a secure payment provider, and payment status is confirmed on our servers."
      ]
    },
    {
      id: "calls-and-support",
      title: "Calls and support",
      body: [
        "Call recordings, where used, follow the applicable policy and disclosure."
      ]
    },
    {
      id: "ai-assistant",
      title: "AI assistant",
      body: [
        "The AI assistant can use your account, vehicle and order context to help you, and can pass your conversation to a human executive so you do not have to repeat yourself."
      ]
    },
    {
      id: "security",
      title: "Security",
      body: [
        "We use measures such as encryption, role-based access and rate limiting on public QR pages to protect your data."
      ]
    },
    {
      id: "service-providers",
      title: "Service providers",
      body: [
        "We use trusted providers for services such as maps, payments, calling, messaging and AI support."
      ]
    },
    {
      id: "data-retention-and-deletion",
      title: "Data retention and deletion",
      body: [
        "Details will be published here once finalized."
      ]
    },
    {
      id: "contact",
      title: "Contact",
      body: [
        "For privacy questions, reach us from the Support page."
      ]
    }
  ]
};
