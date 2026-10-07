import { LegalSection } from "./privacy";

export const termsData: { title: string; intro: string; sections: LegalSection[] } = {
  title: "Terms of Service",
  intro: "These terms cover your use of the carQconnect app and website. The final terms are provided by our legal team.",
  sections: [
    {
      id: "using-carqconnect",
      title: "Using carQconnect",
      body: ["You create an account with a one-time password."]
    },
    {
      id: "qr-safety-and-public-scans",
      title: "QR safety and public scans",
      body: ["People who scan your vehicle's QR see only the information you have approved, and calls go through masked calling."]
    },
    {
      id: "gps-devices",
      title: "GPS devices",
      body: ["Live tracking depends on device and network conditions."]
    },
    {
      id: "sos",
      title: "SOS",
      body: ["SOS is started deliberately by pressing and holding the SOS control. Your chosen emergency contacts are notified with your location."]
    },
    {
      id: "trip-planning",
      title: "Trip planning",
      body: ["Distance, fuel and toll figures are estimates based on route and third-party data, and are labelled as estimates."]
    },
    {
      id: "hardware",
      title: "Hardware",
      body: ["QR tags and GPS devices are activated in the app and linked to your vehicle. Specifications, compatibility and warranty details are listed with each product."]
    },
    {
      id: "membership",
      title: "Membership",
      body: ["Plans and benefits are shown in the app. The features available to you depend on your active membership."]
    },
    {
      id: "payments",
      title: "Payments",
      body: ["Payments are processed by a secure payment provider."]
    },
    {
      id: "ai-features",
      title: "AI features",
      body: ["The AI assistant uses approved information to help you and can connect you to human support."]
    },
    {
      id: "third-party-services",
      title: "Third-party services",
      body: ["Some features depend on third-party providers, for example for maps, payments, calling and messaging."]
    },
    {
      id: "other-terms",
      title: "Other terms",
      body: ["Liability, refunds, warranty, termination and governing law will be published here once finalized by our legal team."]
    }
  ]
};
