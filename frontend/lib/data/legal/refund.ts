import { LegalSection } from "./privacy";

export const refundData: { title: string; intro: string; sections: LegalSection[] } = {
  title: "Refund & Cancellation Policy",
  intro: "This page explains how refunds and cancellations work at carQconnect. The final terms are provided by our legal team.",
  sections: [
    {
      id: "hardware-returns-and-refunds",
      title: "Hardware returns and refunds",
      body: ["Return and warranty information is listed with each product. Detailed return and refund terms will be published here once finalized."]
    },
    {
      id: "membership-cancellation-and-renewal",
      title: "Membership cancellation and renewal",
      body: ["You manage your membership, renewal and plan changes in the app. Detailed cancellation and refund terms will be published here once finalized."]
    },
    {
      id: "payments",
      title: "Payments",
      body: ["Payments are processed by a secure payment provider."]
    },
    {
      id: "help-with-an-order-or-payment",
      title: "Need help with an order or payment?",
      body: ["Reach us from the Support page."]
    },
    {
      id: "other-terms",
      title: "Other terms",
      body: ["Eligibility, timelines and conditions will be published here once finalized by our legal team."]
    }
  ]
};
