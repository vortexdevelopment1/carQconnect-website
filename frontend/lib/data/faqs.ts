export type FaqCategory = "all" | "start" | "qr" | "safety" | "gps" | "trip" | "ai" | "util" | "priv";

export type Faq = { category: string; question: string; answer: string };

export const faqs: Faq[] = [
  { category: "start", question: "What is carQconnect?", answer: "carQconnect is a vehicle safety app. It brings QR safety, GPS tracking, trip planning, vehicle records and support together in one vehicle profile." },
  { category: "start", question: "What can I do in the app?", answer: "Manage your vehicles, activate QR and GPS hardware, use SOS, plan trips, track your vehicle, check FASTag and vehicle documents, and get help from the AI assistant." },
  { category: "start", question: "Do I need the app?", answer: "Yes. You use the app to create your account, add your vehicle and activate your hardware. The person who scans your QR does not need the app." },
  { category: "start", question: "How do I sign up?", answer: "Sign up with your mobile number or email and verify it with an OTP. You can finish your profile later." },
  { category: "start", question: "Can I add more than one vehicle?", answer: "Yes. You can add multiple vehicles to your Digital Garage and choose a default one." },
  { category: "start", question: "Where do I order hardware, and how do I activate it?", answer: "Order QR tags and GPS trackers in the carQconnect app. After delivery, scan or enter the device details in the app and link it to your vehicle." },
  
  { category: "qr", question: "How does the QR Safety Tag work?", answer: "Someone scans the QR on your vehicle and a secure web page opens in their browser. From there they can call you through masked calling, send a message or report an issue." },
  { category: "qr", question: "Can the person who scans see my phone number?", answer: "No. Calls go through masked calling, and the public only sees what you choose to make visible." },
  { category: "qr", question: "What if someone scans my QR when I am not around?", answer: "They can use the page to contact you through masked calling, send a message or report an issue. Every scan is recorded in your QR activity." },
  { category: "qr", question: "Can I choose what the public sees?", answer: "Yes. You control your privacy settings in the app, and the public page shows only what you have allowed." },
  { category: "qr", question: "Can someone report a wrongly parked vehicle?", answer: "Yes. The scan page lets a person report an issue, such as a wrongly parked vehicle, without needing your number." },
  { category: "qr", question: "Can people misuse my QR page?", answer: "The scan page has rate limiting and anti-abuse protection, and calls are masked, so your personal number is never exposed." },
  { category: "qr", question: "Can I replace or deactivate my QR?", answer: "Yes. You manage activation, replacement and deactivation from the app. A QR can be active on only one vehicle at a time." },
  
  { category: "safety", question: "How does SOS work?", answer: "Press and hold the SOS button. The app captures your latest location and notifies the family or emergency contacts you added. You get a short window to cancel a false alarm." },
  { category: "safety", question: "Who receives my SOS alert?", answer: "The family and emergency contacts you add. You can add several, mark primary and secondary contacts, and choose who gets SOS alerts." },
  { category: "safety", question: "Can I call for help from the SOS screen?", answer: "Yes. You can start an emergency call from SOS, and the app can show nearby hospitals and police on the map." },
  { category: "safety", question: "Is my medical information public?", answer: "No. An optional emergency profile, such as blood group or allergies, is shared only if you opt in." },
  
  { category: "gps", question: "What does GPS tracking give me?", answer: "Live location, last-seen status, trip history, geofence entry and exit alerts, movement alerts and device status. You can also share a live location with someone you trust." },
  { category: "gps", question: "Do I need a GPS device?", answer: "Yes. You need a compatible carQconnect GPS device, which you activate and link to your vehicle in the app." },
  { category: "gps", question: "Is live tracking always real-time?", answer: "Live tracking depends on your device and network conditions. The app shows the last-seen time so you always know how recent the location is." },
  { category: "gps", question: "What is a geofence?", answer: "A geofence is a safe zone you draw on the map. You get an alert when your vehicle enters or leaves it." },
  { category: "gps", question: "Can I use one GPS device on two vehicles?", answer: "No. A GPS device can be active on only one vehicle at a time, and you can unlink and reassign it from the app." },
  
  { category: "trip", question: "What does the Trip Planner calculate?", answer: "Distance, travel time, fuel needed, fuel cost, toll cost, total trip cost and cost per kilometre." },
  { category: "trip", question: "Why are fuel and toll costs marked as estimates?", answer: "They depend on route, fuel prices and toll data from third-party providers, which can change. The app labels any value that is not guaranteed." },
  { category: "trip", question: "How does the app know my mileage?", answer: "You can enter your vehicle's average, or let the app calculate it from the fuel you add and the distance you travel." },
  { category: "trip", question: "Can I add stops and see places on the way?", answer: "Yes. You can add waypoints, compare route options and see fuel or EV charging stops, restaurants, stays and emergency points along the way." },
  
  { category: "ai", question: "What can the AI assistant help with?", answer: "Product questions, QR activation, order status, hardware setup, basic trip planning and account questions. It uses your account details when needed." },
  { category: "ai", question: "Can I talk to the assistant instead of typing?", answer: "Yes. Speak a request such as planning a trip, finding a hotel on your route or tracking your vehicle. The assistant understands your request and shows the result." },
  { category: "ai", question: "Will the assistant make payments or changes without asking?", answer: "No. For payments, purchases and account changes, the assistant asks you to confirm before anything happens. You stay in control." },
  { category: "ai", question: "What if the assistant cannot solve my problem?", answer: "It tells you it is connecting you to a support executive, creates a ticket and passes on your conversation, so you do not have to repeat yourself." },
  { category: "ai", question: "Can the assistant make up order or payment details?", answer: "No. It only uses real information from your account and approved product information, and it will not guess order, payment or device status." },
  
  { category: "util", question: "What vehicle utilities are in the app?", answer: "Where supported: FASTag balance, low-balance alerts and recharge, a document vault, and reminders for insurance, PUC and service." },
  { category: "util", question: "Can I store my vehicle documents?", answer: "Yes. Add documents to your vehicle in the Digital Garage and get reminders before they expire." },
  
  { category: "priv", question: "Is my location always shared?", answer: "No. Location is used only with your consent and device permission, and sharing a live location or trip is always your choice." },
  { category: "priv", question: "Does the public see my vehicle details?", answer: "Only what you choose to show. Your private data stays hidden unless you set it as public or emergency information." }
];
