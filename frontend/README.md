# carQconnect — Website Frontend

Premium public website + web-store + public QR portal frontend for carQconnect,
built with Next.js (App Router), TypeScript and Tailwind CSS, based on the
carQconnect PRD/SOW.

## What's included

- Marketing site: home, features, how-it-works, safety, qr-safety, gps,
  trip-intelligence, vehicle-utilities
- Marketplace: listing, category filter, product detail, cart, checkout,
  order confirmation, order tracking
- Membership: hub, plan comparison, individual plan pages
- Support: FAQ, support, contact
- Legal: privacy, terms, refund & cancellation
- Public QR portal: `/qr/[qrId]` — a separate, chrome-free route (own root
  layout, no navbar/footer) with active / inactive / suspended / not-found
  states, built for fast one-handed mobile use
- Reusable component library in `components/` (navbar, footer, product
  cards, QR scan demo, GPS map demo, trip planner demo, AI chat demo,
  voice waveform, FAQ accordion, membership cards, etc.)
- Mock/CMS-ready data in `lib/data/` (products, membership plans, FAQs,
  navigation) — structured so it can be swapped for real API calls without
  touching the components

## This zip contains source code only

`node_modules` is **not** included and no install was run. To run the
project locally:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Notes

- No commercial values (prices, membership plans, provider names) were
  invented beyond clearly-labelled placeholders — see `lib/data/`.
- Tailwind design tokens (colors, radii, animations) live in
  `tailwind.config.ts` matching the carQconnect brand palette (midnight navy,
  electric cyan, safety green, emergency red).
- Fonts (Inter, Manrope) are loaded via `next/font/google` and will be
  fetched automatically on first `npm run dev` / `npm run build`.
