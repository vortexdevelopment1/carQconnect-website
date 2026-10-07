# Fioner — Website + Auth Backend

Two independent projects, kept in their own folders:

```
frontend/   Next.js website (restyled to the QR Rakshak design system) + Login/Signup
backend/    Express auth API (email/password + Google sign-in, JWT sessions)
```

Neither folder has `node_modules` installed — this is source code only.

## Quick start

**1. Backend**

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Runs on `http://localhost:4000`.

**2. Frontend**

```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

Runs on `http://localhost:3000` and talks to the backend via
`NEXT_PUBLIC_API_URL` (already defaulted to `http://localhost:4000`).

## What changed in this version

### Restyle (QR Rakshak design system)

- New Tailwind tokens matching the provided design system: deep navy
  (`#0B1F3A`), royal/electric blue (`#1789FF` / `#0047C9`), cyan accent
  (`#09C2FF`), light background (`#F7F9FC`), white surfaces with
  `#E4E7EC` borders, and semantic success/danger/warning/info colors.
- All page sections moved to the light background + white bordered-card
  look. A handful of "featured" surfaces intentionally stay deep-navy —
  the Hero, page banners, footer, navbar, the SOS/AI/GPS demo cards and
  the public QR scan page — matching the design system's own pattern of
  dark cards for emphasis (see the "Card System" and "Live Tracking"
  examples in the reference image).
- Buttons, badges/status chips, and inputs follow the design system's
  radius, color and pill-shape rules.
- No business logic, routes, or component behavior were changed as part
  of the restyle — only class names/styling.

### New: Login, Signup & Google Sign-In

- `frontend/app/(site)/login`, `/signup`, `/forgot-password` — full pages
  using a shared split-screen `AuthShell` (navy brand panel + white form
  panel), styled to match the new design system.
- `components/auth/google-button.tsx` — a real "Continue with Google"
  button using Google Identity Services (loaded client-side), not just a
  decorative one. It requests an OAuth access token and sends it to the
  backend for verification.
- `lib/auth/` — API client, a small `AuthContext` (session stored in
  `localStorage` + a `/api/auth/me` check on load), and the Google auth
  hook.
- The navbar now shows **Log In / Sign Up** when signed out, and the
  user's name + **Log Out** when signed in.
- `backend/` — new Express service with `/api/auth/signup`, `/login`,
  `/google`, `/forgot-password`, and `/me`, using bcrypt password hashing,
  JWT sessions, and `google-auth-library` / Google's userinfo endpoint to
  verify Google sign-ins. See `backend/README.md` for endpoint details
  and Google Cloud setup steps.

### About the uploaded `img6.htm`

That file turned out to be a saved Amazon.in product page, not part of
the Fioner/QR Rakshak reference material, so it wasn't used. The restyle
was done from `Design_system.png` (colors, typography, buttons, inputs,
cards, chips, spacing and radius tokens).
