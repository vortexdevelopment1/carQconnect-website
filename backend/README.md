# Fioner Backend — Auth Service

A small Express API providing email/password signup & login, Google
sign-in, and JWT-based sessions for the Fioner frontend.

## This folder contains source code only

No `node_modules` is included and nothing was installed. To run it:

```bash
cd backend
cp .env.example .env
npm install
npm run dev      # nodemon, auto-restarts on change
# or
npm start
```

The server listens on `http://localhost:4000` by default.

## Endpoints

| Method | Route                     | Auth         | Description                                  |
|--------|---------------------------|--------------|-----------------------------------------------|
| POST   | `/api/auth/signup`        | —            | `{ name, email, password }` → `{ token, user }` |
| POST   | `/api/auth/login`         | —            | `{ email, password }` → `{ token, user }` |
| POST   | `/api/auth/google`        | —            | `{ accessToken }` or `{ idToken }` → `{ token, user }` |
| POST   | `/api/auth/forgot-password` | —          | `{ email }` → generic success message |
| GET    | `/api/auth/me`            | Bearer token | Returns the current user |
| GET    | `/health`                 | —            | Health check |

## Google Sign-In setup

1. In [Google Cloud Console](https://console.cloud.google.com/apis/credentials),
   create an **OAuth 2.0 Client ID** (Web application).
2. Add your frontend origin (e.g. `http://localhost:3000`) to
   **Authorized JavaScript origins**.
3. Copy the Client ID into:
   - `backend/.env` → `GOOGLE_CLIENT_ID`
   - `frontend/.env.local` → `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
4. Restart both servers.

Without a configured Client ID, the "Continue with Google" button on the
frontend will show a friendly error instead of crashing — everything else
(email/password signup & login) works immediately.

## Data storage

Users are stored in `src/db/db.json`, a flat JSON file, so the whole
service runs with zero external setup. This is meant as a working
starting point, not a production datastore — swap `src/db/store.js` for a
real database (Postgres, MongoDB, etc.) when you're ready; every model
function in `src/models/User.js` only talks to that one file, so it's the
only place that needs to change.

## Security notes

- Passwords are hashed with bcrypt (`BCRYPT_SALT_ROUNDS` in `.env`).
- Sessions are stateless JWTs signed with `JWT_SECRET` — **change this**
  before deploying anywhere real.
- `/api/auth/*` routes are rate-limited (20 requests / 15 min / IP) to
  slow down credential stuffing.
- CORS is restricted to `CLIENT_ORIGIN` from `.env`.
- `/api/auth/forgot-password` always returns the same message whether or
  not the email exists, and only logs to the console — wire it up to a
  real email provider (SES, Postmark, SendGrid, etc.) before shipping.
